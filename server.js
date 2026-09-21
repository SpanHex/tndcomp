require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const helmet = require('helmet');
const path = require('path');
const passport = require('passport');

// Import models
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

// === TRUST PROXY CONFIGURATION ===
// Crucial for capturing real IPs behind reverse proxies like Vercel and Cloudflare
app.set('trust proxy', true);

// === DATABASE CONNECTION ===
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });

// === MIDDLEWARE ===
app.use(helmet({
  contentSecurityPolicy: false, // Disabled to not break existing frontend scripts/styles
  // Allow referrer to be sent to CDN hosts (needed for Discord avatar CDN images)
  referrerPolicy: { policy: 'no-referrer-when-downgrade' }
}));
// Explicit Referrer-Policy header for browser compatibility
app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// === SESSION MANAGEMENT ===
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: 'sessions'
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  }
}));

// === PASSPORT AUTHENTICATION ===
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// === SEED INITIAL ADMIN ===
const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists && process.env.ADMIN_USERNAME && process.env.ADMIN_INITIAL_PASSWORD) {
      const bcrypt = require('bcryptjs');
      const passwordHash = await bcrypt.hash(process.env.ADMIN_INITIAL_PASSWORD, 10);
      
      await User.create({
        username: process.env.ADMIN_USERNAME,
        passwordHash,
        authProvider: 'local',
        role: 'admin'
      });
      console.log('✅ Initial Admin account seeded successfully.');
    }
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
  }
};
mongoose.connection.once('open', seedAdmin);

// === ROUTES ===
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

// === STATIC FILE SERVING ===
// Serve the main application
app.use(express.static(path.join(__dirname, '.')));

// Catch-all route to redirect 404s to index
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// === START SERVER ===
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 DAREDOWN Platform running on port ${PORT}`);
  });
}

module.exports = app;
