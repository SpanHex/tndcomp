const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const User = require('../models/User');
const SecurityEvent = require('../models/SecurityEvent');
const { isAdmin } = require('../middleware/auth');

// Protect all admin routes with server-side role check
router.use(isAdmin);

// Admin routes themselves should not be aggressively rate-limited,
// but we add a light limiter to prevent scraping
const adminLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 200,
  validate: { trustProxy: false },
  message: { error: 'Too many requests.' }
});
router.use(adminLimiter);

// === GET USERS (Paginated + Searchable) ===
router.get('/users', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;

    const query = {};
    if (req.query.search) {
      query.$or = [
        { username: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } }
      ];
    }
    if (req.query.status) {
      query.accountStatus = req.query.status;
    }
    if (req.query.role) {
      query.role = req.query.role;
    }
    if (req.query.provider) {
      query.authProvider = req.query.provider;
    }

    const total = await User.countDocuments(query);
    const users = await User.find(query)
      .select('-passwordHash') // NEVER send password hash
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      users,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalUsers: total
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// === GET SINGLE USER ===
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-passwordHash');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// === GET USER SECURITY EVENTS (Paginated + Filterable) ===
router.get('/users/:id/security-events', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;

    const query = { userId: req.params.id };
    if (req.query.eventType) query.eventType = req.query.eventType;
    if (req.query.success !== undefined) query.success = req.query.success === 'true';
    if (req.query.provider) query.authProvider = req.query.provider;
    if (req.query.ip) query.ipAddress = { $regex: req.query.ip };
    if (req.query.dateFrom || req.query.dateTo) {
      query.timestamp = {};
      if (req.query.dateFrom) query.timestamp.$gte = new Date(req.query.dateFrom);
      if (req.query.dateTo) query.timestamp.$lte = new Date(req.query.dateTo);
    }

    const total = await SecurityEvent.countDocuments(query);
    const events = await SecurityEvent.find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      events,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalEvents: total
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch security events' });
  }
});

// === CHANGE USER STATUS (Suspend/Restore) ===
router.post('/users/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['active', 'suspended'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be "active" or "suspended".' });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Prevent admin from suspending themselves or other admins
    if (user.role === 'admin') {
      return res.status(403).json({ error: 'Cannot modify other administrator accounts.' });
    }

    user.accountStatus = status;
    await user.save();

    res.json({ message: `User status updated to "${status}"`, userId: user._id, status });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user status' });
  }
});

// === GET SECURITY OVERVIEW ===
router.get('/security/overview', async (req, res) => {
  try {
    const now = new Date();
    const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000);

    const [
      totalUsers,
      newUsers24h,
      recentLogins,
      failedLogins24h,
      recentSuspicious,
      recentEvents
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ createdAt: { $gte: oneDayAgo } }),
      SecurityEvent.countDocuments({ eventType: 'login', success: true, timestamp: { $gte: oneDayAgo } }),
      SecurityEvent.countDocuments({ eventType: 'login', success: false, timestamp: { $gte: oneDayAgo } }),
      SecurityEvent.find({ eventType: 'login', success: false, timestamp: { $gte: oneDayAgo } })
        .sort({ timestamp: -1 })
        .limit(10)
        .lean(),
      SecurityEvent.find()
        .sort({ timestamp: -1 })
        .limit(10)
        .lean()
    ]);

    res.json({
      totalUsers,
      newUsers24h,
      recentLogins,
      failedLogins24h,
      recentSuspicious,
      recentEvents
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch security overview' });
  }
});

// === SAFE SERVER REQUEST DIAGNOSTICS ===
router.get('/diagnostics', (req, res) => {
  const forwardedFor = req.headers['x-forwarded-for'] || null;
  const vercelForwardedFor = req.headers['x-vercel-forwarded-for'] || null;
  const realIp = req.headers['x-real-ip'] || null;
  const cfConnectingIp = req.headers['cf-connecting-ip'] || null;
  const host = req.headers['host'] || null;
  const connectionRemoteAddress = req.connection?.remoteAddress || req.socket?.remoteAddress || null;

  res.json({
    detectedClientIp: req.ip,
    headers: {
      'x-vercel-forwarded-for': vercelForwardedFor,
      'x-real-ip': realIp,
      'x-forwarded-for': forwardedFor,
      'cf-connecting-ip': cfConnectingIp,
      host: host
    },
    remoteAddress: connectionRemoteAddress,
    expressIp: req.ip || null,
    environment: {
      nodeEnv: process.env.NODE_ENV || 'development',
      isVercel: !!process.env.VERCEL,
      platform: process.platform
    },
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
