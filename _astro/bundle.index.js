(() => {
  // _astro/api-paths.BeHY0xnA.js
  var i = { health: "/health", siteSettings: "/site-settings", media: { instagramPreview: "/media/instagram-preview" }, auth: { discord: "/auth/discord", discordStart: "/auth/discord/start", discordCallback: "/auth/discord/callback", me: "/auth/me", logout: "/auth/logout" }, applications: { root: "/applications", me: "/applications/me", byId: (s2) => `/applications/${s2}` }, ngc: { submissions: "/ngc/submissions", mySubmission: "/ngc/submissions/me" }, scores: { public: "/scores/public", user: "/scores/user", userMe: (s2) => `/scores/user/me/${s2}`, jury: "/scores/jury" }, participant: { submissions: "/participant/submissions", submission: (s2) => `/participant/submissions/${s2}`, submissionsMe: "/participant/submissions/me", dashboardMe: "/participant/dashboard/me", historyMe: "/participant/history/me", profileMe: "/participant/profile/me", scores: (s2) => `/participant/scores/${s2}` }, tournament: { bracket: "/tournament/bracket", matchPublicDetailed: (s2) => `/tournament/matches/${s2}/publicDetailed`, matchCriteriaAverages: (s2) => `/tournament/matches/${s2}/criteriaAverages`, submissionsByRound: (s2) => `/tournament/submissions/${s2}` }, admin: { users: "/admin/users", userRole: (s2) => `/admin/users/${s2}/role`, userRoleByDiscordId: (s2) => `/admin/users/discord/${s2}/role`, applications: "/admin/applications", ngcSubmissions: "/admin/ngc-submissions", ngcSubmission: (s2) => `/admin/ngc-submissions/${s2}`, rounds: "/admin/rounds", roundSettings: (s2) => `/admin/rounds/${s2}/settings`, matches: "/admin/matches", matchParticipants: (s2) => `/admin/matches/${s2}/participants`, matchScores: (s2) => `/admin/matches/${s2}/scores`, userScore: (s2) => `/admin/scores/user/${s2}`, matchNicknames: (s2) => `/admin/matches/${s2}/nicknames`, matchWinner: (s2) => `/admin/matches/${s2}/winner`, roundAssignments: "/admin/round-assignments", roundAssignment: (s2) => `/admin/round-assignments/${s2}`, placements: "/admin/placements", submissions: "/admin/submissions", submission: (s2) => `/admin/submissions/${s2}`, siteSettings: "/admin/site-settings", siteSettingsVideo: "/admin/site-settings/background-video" } };

  // _astro/site-settings.CKBpDEDM.js
  var import_meta = {};
  var p = { ASSETS_PREFIX: void 0, BASE_URL: "/", DEV: false, MODE: "production", PROD: true, PUBLIC_API_BASE_URL: "https://api.nwgn.art", SITE: "https://nwgn.art", SSR: false };
  var d = "site-settings:cache:v1";
  var L = "/site-settings";
  var y = 6e4;
  var l = (e3) => typeof e3 == "object" && e3 !== null;
  var r = (e3, t = "") => typeof e3 == "string" ? e3 : t;
  var R = (e3) => {
    try {
      const t = new URL(e3), n2 = t.hostname.toLowerCase();
      if (n2 === "youtu.be") return t.pathname.split("/").filter(Boolean)[0] ?? "";
      if (n2 === "youtube.com" || n2 === "www.youtube.com" || n2 === "m.youtube.com") {
        if (t.pathname === "/watch") return t.searchParams.get("v") ?? "";
        const [, i5, a5] = t.pathname.split("/");
        if (i5 === "embed" || i5 === "shorts" || i5 === "live") return a5 ?? "";
      }
    } catch {
      return "";
    }
    return "";
  };
  var A = (e3) => {
    const t = R(e3);
    return t ? `https://i.ytimg.com/vi/${t}/hqdefault.jpg` : "";
  };
  var _ = (e3) => {
    try {
      const t = new URL(e3), n2 = t.hostname.toLowerCase();
      if (n2 !== "streamable.com" && n2 !== "www.streamable.com" && n2 !== "m.streamable.com") return "";
      const i5 = t.pathname.split("/").filter(Boolean);
      if (i5.length === 0) return "";
      const a5 = i5[0] === "e" || i5[0] === "s" ? i5[1] : i5[0];
      return /^[A-Za-z0-9]+$/.test(a5 ?? "") ? a5 ?? "" : "";
    } catch {
      return "";
    }
  };
  var N = (e3) => {
    const t = _(e3);
    return t ? `https://cdn-cf-east.streamable.com/image/${t}.jpg` : "";
  };
  var S = (e3) => {
    try {
      const t = new URL(e3), n2 = t.hostname.toLowerCase();
      if (n2 !== "instagram.com" && n2 !== "www.instagram.com" && n2 !== "m.instagram.com") return "";
      const [i5, a5] = t.pathname.split("/").filter(Boolean);
      return i5 !== "p" && i5 !== "reel" && i5 !== "reels" && i5 !== "tv" ? "" : /^[A-Za-z0-9_-]+$/.test(a5 ?? "") ? a5 ?? "" : "";
    } catch {
      return "";
    }
  };
  var w = (e3) => S(e3) ? `${b()}${i.media.instagramPreview}?url=${encodeURIComponent(e3)}` : "";
  var C = (e3) => Array.isArray(e3) ? e3.filter(l).map((t) => ({ name: r(t.name).trim(), link: r(t.link).trim() })).filter((t) => t.name.length > 0) : [];
  var f = [{ place: "first", name: "walsii", title: "CHAMPION", link: "" }, { place: "second", name: "goof", title: "RUNNER-UP", link: "" }, { place: "third", name: "fuze", title: "TOP 3", link: "" }];
  var D = (e3) => e3 === "first" || e3 === "second" || e3 === "third";
  var O = (e3) => {
    if (!Array.isArray(e3)) return [...f];
    const t = /* @__PURE__ */ new Map();
    return e3.filter(l).forEach((n2) => {
      D(n2.place) && t.set(n2.place, { place: n2.place, name: r(n2.name).trim(), title: r(n2.title).trim(), link: r(n2.link).trim() });
    }), f.map((n2) => {
      const i5 = t.get(n2.place);
      return { ...n2, ...i5 ?? {}, place: n2.place, name: i5?.name || n2.name, title: i5?.title || n2.title, link: i5?.link || "" };
    });
  };
  var s = { headingAccent: "NGC", heading: "WINNER", winnerPlace: "1ST PLACE", winnerName: "@SHADOWCTRL", winnerVideoUrl: "", winnerThumbnailUrl: "", restrictionLabel: "RESTRICTION", restriction: "USED RESTRICTION", prizeLabel: "PRIZE", prize: "$200", mentionsTitle: "HONORABLE MENTIONS", mentions: [{ name: "@VOIDEDITS", title: "BLOOD MOON", url: "", thumbnailUrl: "" }, { name: "@KXRA.AE", title: "FALLEN", url: "", thumbnailUrl: "" }, { name: "@YUUTAA", title: "CHAOS THEORY", url: "", thumbnailUrl: "" }, { name: "@XENZ.VFX", title: "ECLIPSE", url: "", thumbnailUrl: "" }, { name: "@RIPTIDEEDITZ", title: "B BIT HEART", url: "", thumbnailUrl: "" }, { name: "@ZORO.AM", title: "NO SLEEP", url: "", thumbnailUrl: "" }] };
  var P = (e3) => {
    if (!l(e3)) return null;
    const t = r(e3.url).trim(), n2 = r(e3.thumbnailUrl).trim(), i5 = w(t) || w(n2), a5 = (n2 && !S(n2) ? n2 : "") || A(t) || N(t) || i5, o3 = { name: r(e3.name).trim(), title: r(e3.title).trim(), url: t, thumbnailUrl: a5 };
    return o3.name || o3.title || o3.url ? o3 : null;
  };
  var B = (e3) => {
    const t = l(e3) ? e3 : {}, n2 = r(t.winnerVideoUrl).trim() || s.winnerVideoUrl, i5 = Array.isArray(t.mentions) ? t.mentions.map(P).filter((a5) => a5 !== null) : [...s.mentions];
    return { headingAccent: r(t.headingAccent).trim() || s.headingAccent, heading: r(t.heading).trim() || s.heading, winnerPlace: r(t.winnerPlace).trim() || s.winnerPlace, winnerName: r(t.winnerName).trim() || s.winnerName, winnerUrl: r(t.winnerUrl).trim(), winnerVideoUrl: n2, winnerThumbnailUrl: r(t.winnerThumbnailUrl).trim() || A(n2) || s.winnerThumbnailUrl, restrictionLabel: r(t.restrictionLabel).trim() || s.restrictionLabel, restriction: r(t.restriction).trim() || s.restriction, prizeLabel: r(t.prizeLabel).trim() || s.prizeLabel, prize: r(t.prize).trim() || s.prize, mentionsTitle: r(t.mentionsTitle).trim() || s.mentionsTitle, mentions: i5 };
  };
  var k = (e3) => Array.isArray(e3) ? e3.filter(l).map((t, n2) => {
    const i5 = l(t.judge) ? t.judge : {};
    return { id: r(t.id, String(n2 + 1)), duration: r(t.duration), duration_amount: r(t.duration_amount), judge: { duration: r(i5.duration), duration_amount: r(i5.duration_amount) } };
  }) : [];
  var h = (e3) => {
    const t = l(e3) ? e3 : {};
    return { timerIso: t.timerIso == null ? null : r(t.timerIso).trim() || null, timerHeaderText: t.timerHeaderText == null ? null : r(t.timerHeaderText).trim() || null, ngcDeadlineIso: t.ngcDeadlineIso == null ? null : r(t.ngcDeadlineIso).trim() || null, tournamentBracketHidden: !!t.tournamentBracketHidden, description: t.description == null ? null : r(t.description).trim() || null, subDescription: t.subDescription == null ? null : r(t.subDescription).trim() || null, backgroundVideoFilename: t.backgroundVideoFilename == null ? null : r(t.backgroundVideoFilename).trim() || null, backgroundVideoUrl: t.backgroundVideoUrl == null ? null : r(t.backgroundVideoUrl).trim() || null, rounds: k(t.rounds), specialThanks: C(t.specialThanks), winners: O(t.winners), ngcResults: B(t.ngcResults), updatedAt: r(t.updatedAt).trim() || (/* @__PURE__ */ new Date(0)).toISOString() };
  };
  var b = (e3) => {
    const t = document.body?.dataset.apiBaseUrl, n2 = typeof import_meta < "u" && p && "PUBLIC_API_BASE_URL" in p ? "https://api.nwgn.art" : void 0;
    return (e3 ?? t ?? n2 ?? "http://localhost:3000").replace(/\/$/, "");
  };
  var U = (e3) => {
    try {
      const t = localStorage.getItem(e3);
      if (!t) return null;
      const n2 = JSON.parse(t);
      return !l(n2) || !l(n2.data) || typeof n2.fetchedAt != "number" ? null : { data: h(n2.data), fetchedAt: n2.fetchedAt };
    } catch {
      return null;
    }
    if (typeof window != "undefined" && window.__SITE_SETTINGS) return { data: h(window.__SITE_SETTINGS), fetchedAt: Date.now() };
    return null;
  };
  var z = (e3, t) => {
    try {
      localStorage.setItem(e3, JSON.stringify(t));
    } catch {
    }
  };
  var H = (e3 = d) => U(e3);
  var u = (e3) => {
    window.dispatchEvent(new CustomEvent("siteSettings:loaded", { detail: e3 }));
  };
  var F = (e3) => {
    const t = (n2) => {
      const a5 = h(n2.detail);
      e3(a5, { fromCache: false, fetchedAt: Date.now() });
    };
    return window.addEventListener("siteSettings:loaded", t), () => window.removeEventListener("siteSettings:loaded", t);
  };
  var $ = async (e3 = {}) => {
    const t = e3.cacheKey ?? d, n2 = e3.endpoint ?? L, i5 = e3.ttlMs ?? y, a5 = Date.now(), o3 = U(t);
    if (!e3.forceRefresh && o3 && a5 - o3.fetchedAt <= i5) return u(o3.data), { settings: o3.data, fromCache: true, fetchedAt: o3.fetchedAt };
    const T3 = b(e3.apiBaseUrl);
    let c2;
    try {
      c2 = await fetch(`${T3}${n2}`, { headers: { Accept: "application/json" }, signal: e3.signal });
    } catch (err) {
      if (o3) return u(o3.data), { settings: o3.data, fromCache: true, fetchedAt: o3.fetchedAt };
      if (typeof window != "undefined" && window.__SITE_SETTINGS) {
        const m4 = h(window.__SITE_SETTINGS);
        return u(m4), { settings: m4, fromCache: true, fetchedAt: Date.now() };
      }
      throw err;
    }
    if (!c2.ok) {
      if (o3) return u(o3.data), { settings: o3.data, fromCache: true, fetchedAt: o3.fetchedAt };
      if (typeof window != "undefined" && window.__SITE_SETTINGS) {
        const m4 = h(window.__SITE_SETTINGS);
        return u(m4), { settings: m4, fromCache: true, fetchedAt: Date.now() };
      }
      throw new Error(`Failed to load site settings: ${c2.status}`);
    }
    const E2 = await c2.json(), m3 = h(E2), g2 = { data: m3, fetchedAt: Date.now() };
    return z(t, g2), u(m3), { settings: m3, fromCache: false, fetchedAt: g2.fetchedAt };
  };

  // _astro/Winners.astro_astro_type_script_index_0_lang.9ape3wy-.js
  var o = ["first", "second", "third"];
  var a = (t) => typeof t == "string" ? t.trim() : "";
  var l2 = (t) => {
    if (!t || !o.includes(t.place)) return;
    const e3 = document.querySelector(`[data-winner-name][data-winner-place="${t.place}"]`), r4 = document.querySelector(`[data-winner-title][data-winner-place="${t.place}"]`);
    if (e3 instanceof HTMLAnchorElement) {
      typeof t.name == "string" && t.name.trim() && (e3.textContent = t.name.trim());
      const n2 = a(t.link);
      n2 ? (e3.href = n2, e3.target = "_blank", e3.rel = "noopener noreferrer") : (e3.removeAttribute("href"), e3.removeAttribute("target"), e3.removeAttribute("rel"));
    }
    r4 instanceof HTMLElement && typeof t.title == "string" && t.title.trim() && (r4.textContent = t.title.trim());
  };
  F((t) => {
    Array.isArray(t.winners) && t.winners.forEach(l2);
  });

  // _astro/http.BUnDBjdO.js
  var import_meta2 = {};
  var p2 = "ngt_token";
  var a2 = "ngt_user";
  var r2 = () => typeof window < "u" && typeof localStorage < "u";
  var v = () => {
    if (!r2()) return null;
    const t = localStorage.getItem(p2)?.trim() ?? "";
    return t.length > 0 ? t : null;
  };
  var A2 = () => {
    if (!r2()) return null;
    const t = localStorage.getItem(a2);
    if (!t) return null;
    try {
      const e3 = JSON.parse(t);
      return !e3 || typeof e3 != "object" ? null : e3;
    } catch {
      return null;
    }
  };
  var h2 = (t = "/", e3 = "/login") => {
    const n2 = t.startsWith("/") ? t : "/";
    return `${e3}?next=${encodeURIComponent(n2)}`;
  };
  var B2 = (t = "/", e3 = "/login") => {
    if (!r2()) return;
    const n2 = h2(t, e3);
    window.location.replace(n2);
  };
  var f2 = { ASSETS_PREFIX: void 0, BASE_URL: "/", DEV: false, MODE: "production", PROD: true, PUBLIC_API_BASE_URL: "https://api.nwgn.art", SITE: "https://nwgn.art", SSR: false };
  var m = class extends Error {
    status;
    payload;
    constructor(e3, n2, c2) {
      super(n2), this.name = "HttpError", this.status = e3, this.payload = c2;
    }
  };
  var S2 = "http://localhost:3000";
  var y2 = (t) => t.replace(/\/+$/, "");
  var E = (t) => {
    const e3 = typeof document < "u" ? document.body?.dataset.apiBaseUrl : void 0, n2 = typeof import_meta2 < "u" && f2 && "PUBLIC_API_BASE_URL" in f2 ? "https://api.nwgn.art" : void 0;
    return y2(t ?? e3 ?? n2 ?? S2);
  };
  var _2 = async (t) => {
    if ((t.headers.get("content-type") ?? "").includes("application/json")) try {
      return await t.json();
    } catch {
      return;
    }
  };
  var w2 = (t, e3) => {
    const n2 = e3?.message ?? e3?.error;
    return typeof n2 == "string" && n2.trim().length > 0 ? n2 : `Request failed with status ${t}`;
  };
  var U2 = (t, e3) => e3.startsWith("/") ? `${t}${e3}` : `${t}/${e3}`;
  async function i2(t, e3 = {}) {
    const n2 = e3.method ?? "GET", c2 = E(e3.baseUrl), g2 = U2(c2, t), o3 = new Headers(e3.headers);
    o3.set("Accept", "application/json"), e3.token && o3.set("Authorization", `Bearer ${e3.token}`);
    const l3 = e3.body !== void 0;
    l3 && o3.set("Content-Type", "application/json");
    const s2 = await fetch(g2, { method: n2, headers: o3, body: l3 ? JSON.stringify(e3.body) : void 0, signal: e3.signal }), u3 = await _2(s2);
    if (!s2.ok) {
      const d3 = u3;
      throw new m(s2.status, w2(s2.status, d3), d3);
    }
    return u3;
  }

  // _astro/text.DgeDZjdf.js
  var e = (s2) => String(s2).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  var a3 = (s2) => s2.trim().split(/\s+/).filter(Boolean);
  var o2 = (s2, r4 = 0, n2 = {}) => {
    const l3 = n2.clipClass ?? "word-clip", c2 = n2.innerClass ?? "word-inner";
    return a3(s2).map((t, p5) => `<span class="${e(l3)}" style="--word-index:${r4 + p5};"><span class="${e(c2)}">${e(t)}</span></span>`).join("");
  };
  var i3 = (s2) => a3(s2).length;

  // _astro/Bracket.astro_astro_type_script_index_0_lang.By8uBWsx.js
  var p3 = (l3) => {
    const g2 = document.getElementById(l3);
    return g2 instanceof HTMLElement ? g2 : null;
  };
  var f3 = p3("bracket-shell");
  var L2 = p3("bracket-status");
  var T = p3("bracket-content");
  var R2 = p3("bracket-stub");
  var H2 = p3("bracket-viewport");
  var b2 = p3("bracket-stage");
  if (f3 instanceof HTMLElement && L2 instanceof HTMLElement && T instanceof HTMLElement && R2 instanceof HTMLElement && H2 instanceof HTMLElement && b2 instanceof HTMLElement) {
    const l3 = (f3.dataset.stubMode ?? "auto").trim().toLowerCase(), g2 = l3 === "on" || l3 === "true" || l3 === "1", G2 = l3 === "off" || l3 === "false" || l3 === "0", U4 = f3.dataset.emptyText ?? "Bracket is not available yet.";
    let h3 = Math.max(1, Number.parseInt(f3.dataset.totalRounds ?? "4", 10) || 4), V = Math.max(2, Number.parseInt(f3.dataset.totalParticipants ?? "16", 10) || 16);
    const j2 = () => String(A2()?.role ?? "").toUpperCase() === "ADMIN", F2 = () => "Bracket is hidden right now.", S4 = (t, e3 = "neutral") => {
      L2.textContent = t, L2.className = "text-[10px] md:text-xs uppercase tracking-[0.2em] text-center " + (e3 === "ok" ? "text-white/32" : e3 === "err" ? "text-red-300" : "text-white/45");
    }, v3 = (t) => {
      S4(t, "neutral"), R2.classList.remove("hidden"), T.classList.add("hidden");
    }, W2 = () => {
      S4("", "ok"), T.classList.remove("hidden"), R2.classList.add("hidden");
    };
    let B4 = 0;
    const k3 = () => {
      window.requestAnimationFrame(() => {
        const t = b2.scrollWidth > H2.clientWidth + 1;
        H2.dataset.scrollable = t ? "true" : "false";
      });
    }, u3 = () => {
      k3(), window.requestAnimationFrame(() => k3()), window.requestAnimationFrame(() => window.requestAnimationFrame(() => k3())), B4 && window.clearTimeout(B4), B4 = window.setTimeout(() => {
        k3();
      }, 140);
    }, I2 = (t) => {
      const e3 = t?.nickname?.trim(), r4 = t?.username?.trim();
      return e3 || r4 || "TBD";
    }, D2 = (t) => t?.avatar?.trim() || t?.avatarUrl?.trim() || "", E2 = (t, e3 = 0) => {
      if (typeof t == "number" && Number.isFinite(t)) return Math.trunc(t);
      const r4 = Number.parseInt(String(t ?? "").trim(), 10);
      return Number.isFinite(r4) ? r4 : e3;
    }, x2 = (t) => {
      if (!t || typeof t != "object") return null;
      const e3 = t, r4 = String(e3.id ?? "").trim(), n2 = String(e3.username ?? "").trim(), i5 = String(e3.nickname ?? "").trim() || null, o3 = String(e3.avatar ?? "").trim() || String(e3.avatarUrl ?? "").trim() || null;
      return !r4 && !n2 && !i5 && !o3 ? null : { id: r4, username: n2, nickname: i5, avatar: o3, avatarUrl: o3 };
    }, _3 = (t, e3, r4) => {
      if (!t || typeof t != "object") return null;
      const n2 = t, i5 = String(n2.id ?? "").trim();
      if (!i5) return null;
      const o3 = (a5) => {
        if (a5 == null || a5 === "") return null;
        if (typeof a5 == "number" && Number.isFinite(a5)) return a5;
        const s2 = Number(a5);
        return Number.isFinite(s2) ? s2 : null;
      };
      return { id: i5, roundNumber: E2(n2.roundNumber, e3), order: E2(n2.order, r4), participantA: x2(n2.participantA), participantB: x2(n2.participantB), winnerId: String(n2.winnerId ?? "").trim() || null, scoreA: o3(n2.scoreA), scoreB: o3(n2.scoreB), status: String(n2.status ?? "PENDING").trim() === "FINISHED" ? "FINISHED" : "PENDING" };
    }, J = (t) => {
      let B5 = Array.isArray(t.rounds) ? t.rounds : Array.isArray(t.data?.rounds) ? t.data.rounds : [];
      if (h3 === 4 && B5.length >= 5) B5 = B5.slice(-4);
      return B5.map((r4, n2) => {
        if (!r4 || typeof r4 != "object") return null;
        const i5 = r4, o3 = n2 + 1, a5 = Array.isArray(i5.matches) ? i5.matches : [];
        return { roundNumber: o3, title: String(i5.title ?? "").trim() || M(o3), matches: a5.map((s2, c2) => _3(s2, o3, c2 + 1)).filter((s2) => !!s2) };
      }).filter((r4) => !!r4);
    }, w4 = (t, e3) => ({ id: `placeholder-${t}-${e3}`, roundNumber: t, order: e3, participantA: null, participantB: null, winnerId: null, scoreA: null, scoreB: null, status: "PENDING" }), z2 = (t) => Math.max(1, V / 2 ** t), M = (t) => t === h3 ? "Final" : t === h3 - 1 ? "Semifinal" : t === h3 - 2 ? "Quarterfinal" : `Round ${t}`, Q2 = (t, e3, r4) => {
      const n2 = /* @__PURE__ */ new Map(), i5 = r4.slice().sort((a5, s2) => (a5.order ?? 0) - (s2.order ?? 0)), o3 = (a5, s2) => !Number.isInteger(a5) || a5 < 1 || a5 > e3 || n2.has(a5) ? false : (n2.set(a5, s2), true);
      for (const a5 of i5) if (!o3(Number(a5.order ?? 0), a5)) for (let s2 = 1; s2 <= e3 && !o3(s2, a5); s2 += 1) ;
      return Array.from({ length: e3 }, (a5, s2) => n2.get(s2 + 1) ?? w4(t, s2 + 1));
    }, K2 = (t) => {
      const e3 = /* @__PURE__ */ new Map();
      for (const n2 of t) typeof n2?.roundNumber == "number" && e3.set(n2.roundNumber, n2);
      const r4 = [];
      for (let n2 = 1; n2 <= h3; n2 += 1) {
        const i5 = e3.get(n2), o3 = Array.isArray(i5?.matches) ? i5.matches.slice().sort((c2, m3) => (c2.order ?? 0) - (m3.order ?? 0)) : [], a5 = z2(n2), s2 = Q2(n2, a5, o3);
        r4.push({ roundNumber: n2, title: i5?.title?.trim() || M(n2), matches: s2 });
      }
      return r4;
    }, $2 = (t, e3 = "regular") => {
      const r4 = I2(t.participantA), n2 = I2(t.participantB), i5 = D2(t.participantA), o3 = D2(t.participantB), a5 = !t.participantA && !t.participantB, s2 = !t.id.startsWith("placeholder-") && !!(t.participantA || t.participantB), c2 = `Open match ${r4} versus ${n2}`, m3 = s2 ? `data-vs-trigger="true" data-match-id="${e(t.id)}" role="button" tabindex="0" aria-label="${e(c2)}"` : "";
      return `
          <article class="bracket-match ${e3 === "final" ? "is-final" : ""} ${a5 ? "is-placeholder" : ""} ${s2 ? "is-interactive" : ""}" ${m3}>
            <div class="bracket-slot is-top shift-left ${r4 === "TBD" ? "is-empty" : ""} ${i5 ? "has-visual" : ""}">
              ${i5 ? `<span class="bracket-slot-visual is-right" aria-hidden="true"><img src="${e(i5)}" alt="" loading="lazy" decoding="async" /></span>` : ""}
              <span class="bracket-slot-main">
                <span class="bracket-slot-name">${e(r4)}</span>
              </span>
            </div>
            <div class="bracket-slot shift-right ${n2 === "TBD" ? "is-empty" : ""} ${o3 ? "has-visual" : ""}">
              ${o3 ? `<span class="bracket-slot-visual is-left" aria-hidden="true"><img src="${e(o3)}" alt="" loading="lazy" decoding="async" /></span>` : ""}
              <span class="bracket-slot-main">
                <span class="bracket-slot-name">${e(n2)}</span>
              </span>
            </div>
          </article>
        `;
    }, X2 = (t) => {
      const e3 = K2(t), r4 = e3.at(-1), n2 = e3.slice(0, -1), i5 = r4 && Array.isArray(r4.matches) && r4.matches[0] ? r4.matches.slice().sort((s2, c2) => (s2.order ?? 0) - (c2.order ?? 0))[0] : w4(r4?.roundNumber ?? 1, 1), o3 = [], a5 = [];
      for (const s2 of n2) {
        const c2 = Array.isArray(s2.matches) ? s2.matches.slice().sort((tt, et) => (tt.order ?? 0) - (et.order ?? 0)) : [], m3 = Math.ceil(c2.length / 2);
        o3.push({ roundNumber: s2.roundNumber, title: s2.title, matches: c2.slice(0, m3) }), a5.push({ roundNumber: s2.roundNumber, title: s2.title, matches: c2.slice(m3) });
      }
      return { leftRounds: o3, rightRounds: a5, finalMatch: i5 };
    }, Y2 = () => Array.from({ length: h3 }, (t, e3) => {
      const r4 = e3 + 1, n2 = z2(r4);
      return { roundNumber: r4, title: M(r4), matches: Array.from({ length: n2 }, (i5, o3) => w4(r4, o3 + 1)) };
    }), y4 = (t, e3, r4) => {
      if (e3 < 0) return null;
      const n2 = t[e3], i5 = n2?.matches?.[r4] ?? w4(n2?.roundNumber ?? e3 + 1, r4 + 1);
      if (e3 === 0) return { match: i5, top: null, bottom: null, depth: 1 };
      const o3 = y4(t, e3 - 1, r4 * 2), a5 = y4(t, e3 - 1, r4 * 2 + 1), s2 = Math.max(o3?.depth ?? 0, a5?.depth ?? 0) + 1;
      return { match: i5, top: o3, bottom: a5, depth: s2 };
    }, N2 = (t, e3) => t ? !t.top && !t.bottom ? $2(t.match) : `
          <div class="bracket-branch is-${e3}" data-depth="${e(String(t.depth))}">
            <div class="bracket-children">
              <div class="bracket-child">${N2(t.top, e3)}</div>
              <div class="bracket-child">${N2(t.bottom, e3)}</div>
            </div>
            <div class="bracket-link"></div>
            ${$2(t.match)}
          </div>
        ` : "", P2 = (t) => {
      const rawRounds = Array.isArray(t.rounds) ? t.rounds : Array.isArray(t.data?.rounds) ? t.data.rounds : [];
      if (rawRounds.length > 0) {
        h3 = rawRounds.length;
        V = Math.max(2, (rawRounds[0]?.matches?.length || 8) * 2);
      }
      const e3 = J(t), r4 = e3.length ? e3 : Y2(), { leftRounds: n2, rightRounds: i5, finalMatch: o3 } = X2(r4), a5 = y4(n2, n2.length - 1, 0), s2 = y4(i5, i5.length - 1, 0);
      b2.innerHTML = `
          <div class="bracket-side is-left"><div class="bracket-side-track is-left">${N2(a5, "left")}</div></div>
          <div class="bracket-center">
            <div class="bracket-center-finals">
              <div class="bracket-center-side-link"></div>
              ${$2(o3, "final")}
              <div class="bracket-center-side-link"></div>
            </div>
          </div>
          <div class="bracket-side is-right"><div class="bracket-side-track is-right">${N2(s2, "right")}</div></div>
        `, W2(), u3();
    }, O2 = (t) => !t || j2() ? false : (v3(F2()), true), Z2 = H()?.data;
    let A3 = O2(!!Z2?.tournamentBracketHidden);
    const C3 = async () => {
      if (b2.children.length > 0) {
        W2();
        u3();
      }
      if (g2) {
        v3("Stub mode enabled.");
        return;
      }
      if (G2) {
        v3(U4);
        return;
      }
      if (!A3) {
        if (b2.children.length === 0 && window.__BRACKET_DATA) {
          P2(window.__BRACKET_DATA);
        } else if (b2.children.length === 0) {
          S4("Loading bracket...", "neutral");
        }
        try {
          const t = await i2("/tournament/bracket", { method: "GET", token: v() });
          P2(t);
        } catch (t) {
          if (t instanceof m && t.status === 403) {
            v3(F2());
            return;
          }
          if (window.__BRACKET_DATA) {
            P2(window.__BRACKET_DATA);
            return;
          }
          if (b2.children.length > 0) {
            W2();
            u3();
            return;
          }
          P2({ rounds: [] });
        }
      }
    };
    F((t) => {
      const e3 = A3;
      A3 = O2(!!t.tournamentBracketHidden), e3 && !A3 && C3();
    }), C3(), window.addEventListener("resize", u3), window.addEventListener("load", u3, { once: true }), window.addEventListener("pageshow", u3);
    const q = (t) => {
      if (!(t instanceof Element)) return;
      const r4 = t.closest("[data-vs-trigger='true']")?.dataset.matchId?.trim();
      r4 && document.dispatchEvent(new CustomEvent("ngt:vs-open", { detail: { matchId: r4 } }));
    };
    b2.addEventListener("click", (t) => {
      q(t.target);
    }), b2.addEventListener("keydown", (t) => {
      if (t.key !== "Enter" && t.key !== " ") return;
      const e3 = t.target;
      if (!(e3 instanceof Element)) return;
      const r4 = e3.closest("[data-vs-trigger='true']");
      r4 instanceof HTMLElement && (t.preventDefault(), q(r4));
    }), new IntersectionObserver((t) => {
      t[0]?.isIntersecting && u3();
    }, { threshold: 0.12 }).observe(f3), "fonts" in document && "ready" in document.fonts && document.fonts.ready.then(u3).catch(() => {
    });
  }

  // _astro/reveal.C1o38KJz.js
  function a4(s2, e3 = {}) {
    const r4 = e3.threshold ?? 0.2, t = e3.className ?? "is-visible", c2 = new IntersectionObserver((o3) => {
      const [n2] = o3;
      n2?.isIntersecting && (s2.classList.add(t), c2.disconnect());
    }, { threshold: r4 });
    return { observe() {
      c2.observe(s2);
    }, disconnect() {
      c2.disconnect();
    }, reset() {
      s2.classList.remove(t);
    }, restart() {
      s2.classList.remove(t), c2.observe(s2);
    } };
  }
  function i4(s2, e3 = {}) {
    const r4 = a4(s2, e3);
    return r4.observe(), r4;
  }

  // _astro/Sponsors.astro_astro_type_script_index_0_lang.kMc95YVg.js
  var e2 = document.getElementById("sponsors-reveal");
  e2 instanceof HTMLElement && a4(e2, { threshold: 0.2 }).observe();

  // _astro/About.astro_astro_type_script_index_0_lang.DRiQXxsm.js
  var d2 = document.getElementById("about-reveal");
  if (d2 instanceof HTMLElement) {
    const t = document.getElementById("about-heading"), o3 = document.getElementById("about-body"), r4 = i4(d2, { threshold: 0.25 });
    F((s2) => {
      const e3 = s2.description, n2 = s2.subDescription;
      if (!e3 && !n2) return;
      r4.disconnect();
      let c2 = 0;
      e3 && t instanceof HTMLElement && (c2 = i3(e3), t.innerHTML = o2(e3, 0)), n2 && o3 instanceof HTMLElement && (o3.innerHTML = o2(n2, c2)), r4.restart();
    });
  }

  // _astro/Rounds.astro_astro_type_script_index_0_lang.DyZ9KqsY.js
  (() => {
    const s2 = document.getElementById("rounds-reveal");
    if (!(s2 instanceof HTMLElement)) return;
    const a5 = a4(s2, { threshold: 0.2 });
    a5.observe();
    const i5 = (r4) => r4.map((e3, n2) => `
          <div class="round-card flex flex-col gap-[40px] items-start justify-center w-full max-w-[280px]" style="--round-index:${n2};">
            <div class="flex flex-col gap-[5px] items-start justify-center">
              <p class="text-[75px] text-white">${e(e3.id)}</p>
              <p class="text-[24px] text-white uppercase">${e(e3.duration)} - ${e(e3.duration_amount)} days</p>
            </div>
            <div class="flex flex-col gap-[5px] items-start justify-center">
              <p class="text-[24px] text-white uppercase">JUDGE</p>
              <p class="text-[24px] text-white uppercase">${e(e3.judge?.duration ?? "")} - ${e(e3.judge?.duration_amount ?? "")} days</p>
            </div>
          </div>`).join("");
    window.addEventListener("siteSettings:loaded", (r4) => {
      const e3 = r4.detail?.rounds;
      !Array.isArray(e3) || e3.length === 0 || (a5.disconnect(), s2.innerHTML = i5(e3), a5.restart());
    });
  })();

  // _astro/SpecialThanks.astro_astro_type_script_index_0_lang.C9B1wXl3.js
  var r3 = document.getElementById("special-thanks-reveal");
  if (r3 instanceof HTMLElement) {
    const s2 = r3.querySelector("ul");
    if (s2 instanceof HTMLElement) {
      const n2 = a4(r3, { threshold: 0.2 });
      n2.observe();
      const a5 = r3.querySelectorAll("h2 .word-clip, p .word-clip").length, l3 = (t) => t.map((e3, i5) => `
        <li>
          <a
            href="${e(e3.link || "#")}"
            target="_blank"
            rel="noopener noreferrer"
            class="word-clip"
            style="--word-index:${i5 + a5};"
          >
            <span class="word-inner hover:text-white/70 transition-colors duration-300">
              ${e(e3.name)}
            </span>
          </a>
        </li>`).join("");
      F((t) => {
        const e3 = t.specialThanks;
        !Array.isArray(e3) || e3.length === 0 || (n2.disconnect(), s2.innerHTML = l3(e3), n2.restart());
      });
    }
  }

  // _astro/VsScreenModal.astro_astro_type_script_index_0_lang.BXoPRkcZ.js
  var b3 = ["storyboard", "individuality", "overall", "execution", "styleImplementation"];
  var pe = ["storyboard", "individuality", "execution", "styleImplementation", "overall"];
  var fe = { storyboard: "concept", individuality: "individuality", overall: "overall", execution: "execution", styleImplementation: "style implementation" };
  var u2 = (e3, t) => {
    const r4 = e3.querySelector(t);
    return r4 instanceof Element ? r4 : null;
  };
  var m2 = document.querySelector("[data-vs-modal]");
  var ve = document.querySelector("[data-vs-panel]");
  var x = document.querySelector("[data-vs-close]");
  var w3 = document.querySelector("[data-vs-global-status]");
  if (!(m2 instanceof HTMLElement) || !(ve instanceof HTMLElement) || !(x instanceof HTMLButtonElement) || !(w3 instanceof HTMLElement)) throw new Error("VS screen modal is not mounted correctly.");
  var v2 = /* @__PURE__ */ new Map();
  document.querySelectorAll("[data-vs-side]").forEach((e3) => {
    const t = e3.dataset.vsSide;
    if (t !== "A" && t !== "B") return;
    const r4 = u2(e3, '[data-field="name"]'), a5 = u2(e3, '[data-field="socials"]'), i5 = u2(e3, '[data-field="avatar-image"]'), o3 = u2(e3, '[data-field="avatar-fallback"]'), s2 = u2(e3, '[data-field="result-badge"]'), l3 = u2(e3, '[data-field="video-frame"]'), f4 = u2(e3, '[data-field="video-placeholder"]'), d3 = u2(e3, '[data-field="jury-average"]'), _3 = u2(e3, '[data-field="audience-average"]'), H3 = u2(e3, '[data-field="averages-tooltip"]'), P2 = u2(e3, '[data-field="description"]'), F2 = u2(e3, '[data-field="your-rating"]'), D2 = u2(e3, '[data-field="form"]'), N2 = u2(e3, '[data-field="publish"]'), O2 = u2(e3, '[data-field="side-status"]');
    if (!(r4 instanceof HTMLElement) || !(a5 instanceof HTMLElement) || !(i5 instanceof HTMLImageElement) || !(o3 instanceof HTMLElement) || !(s2 instanceof HTMLElement) || !(l3 instanceof HTMLIFrameElement) || !(f4 instanceof HTMLElement) || !(d3 instanceof HTMLElement) || !(_3 instanceof HTMLElement) || !(H3 instanceof HTMLElement) || !(P2 instanceof HTMLElement) || !(F2 instanceof HTMLElement) || !(D2 instanceof HTMLFormElement) || !(N2 instanceof HTMLButtonElement) || !(O2 instanceof HTMLElement)) return;
    const $2 = {}, q = {};
    for (const M of b3) {
      const z2 = u2(e3, `[data-criterion="${M}"]`), V = u2(z2 ?? e3, '[data-field="criterion-input"]'), J = u2(z2 ?? e3, '[data-field="criterion-value"]');
      if (!(V instanceof HTMLInputElement) || !(J instanceof HTMLElement)) return;
      $2[M] = V, q[M] = J;
    }
    v2.set(t, { section: e3, name: r4, socials: a5, avatarImage: i5, avatarFallback: o3, resultBadge: s2, videoFrame: l3, videoPlaceholder: f4, juryAverage: d3, audienceAverage: _3, averagesTooltip: H3, description: P2, yourRating: F2, form: D2, publish: N2, sideStatus: O2, inputs: $2, values: q });
  });
  if (v2.size !== 2) throw new Error("VS screen modal sides are not mounted correctly.");
  var y3 = () => ({ storyboard: 0, individuality: 0, overall: 0, execution: 0, styleImplementation: 0 });
  var ye = () => ({ storyboard: null, individuality: null, overall: null, execution: null, styleImplementation: null });
  var ge = (e3) => false;
  var n = { isOpen: false, currentMatchId: null, payload: null, lastFocused: null, closeTimeout: 0, loadRequestId: 0, criteria: { A: y3(), B: y3() }, publishedCriteria: { A: null, B: null }, submitting: { A: false, B: false } };
  var U3 = (e3) => typeof e3 == "string" ? e3.trim() : "";
  var c = (e3) => {
    const t = U3(e3);
    return t.length > 0 ? t : null;
  };
  var g = (e3) => typeof e3 == "number" && Number.isFinite(e3) ? e3 : null;
  var T2 = (...e3) => {
    for (const t of e3) {
      const r4 = c(t);
      if (r4) return r4;
    }
    return null;
  };
  var be = (e3) => {
    const t = c(e3);
    if (!t) return null;
    if (t.includes("youtube.com/embed/index.html") || t.includes("player.vimeo.com/video/index.html")) return t;
    try {
      const a5 = new URL(t), i5 = a5.hostname.replace(/^www\./i, "").toLowerCase();
      if (i5 === "youtu.be") {
        const o3 = a5.pathname.replace(/\//g, "").trim();
        if (o3) return `https://www.youtube.com/embed/${o3}`;
      }
      if (i5 === "youtube.com" || i5.endsWith(".youtube.com")) {
        if (a5.pathname === "/watch") {
          const s2 = a5.searchParams.get("v")?.trim();
          if (s2) return `https://www.youtube.com/embed/${s2}`;
        }
        const o3 = a5.pathname.match(/^\/(?:embed|shorts|live)\/([^/?#]+)/i);
        if (o3?.[1]) return `https://www.youtube.com/embed/${o3[1]}`;
      }
    } catch {
    }
    const r4 = t.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    return r4?.[1] ? `https://player.vimeo.com/video/${r4[1]}` : t;
  };
  var Q = (e3) => typeof e3 != "number" || !Number.isFinite(e3) ? "--" : String(Math.round(e3));
  var G = (e3) => {
    if (typeof e3 != "number" || !Number.isFinite(e3)) return "--";
    const t = Math.round(e3 * 10) / 10;
    return Number.isInteger(t) ? String(t) : t.toFixed(1);
  };
  var W = (e3, t) => {
    if (!e3 || typeof e3 != "object") return null;
    const r4 = e3, a5 = r4.averages100 && typeof r4.averages100 == "object" ? r4.averages100 : null;
    if (a5) {
      const l3 = g(a5[t]);
      if (l3 !== null) return l3;
    }
    const i5 = r4[t] && typeof r4[t] == "object" ? r4[t] : null;
    if (i5) {
      const l3 = g(i5.average100);
      if (l3 !== null) return l3;
    }
    if (t === "users") {
      const l3 = g(r4.average100);
      if (l3 !== null) return l3;
    }
    const o3 = g(r4[`${t}Average100`]);
    if (o3 !== null) return o3;
    const s2 = g(r4[t === "users" ? "audienceAverage" : "juryAverage"]);
    return s2 !== null ? s2 : null;
  };
  var j = (e3) => {
    if (!e3 || typeof e3 != "object") return null;
    const t = e3, r4 = ye();
    let a5 = false;
    for (const i5 of b3) {
      const o3 = i5 === "storyboard" ? ["storyboard", "concept"] : [i5];
      let s2 = null;
      for (const l3 of o3) if (s2 = g(t[l3]), s2 !== null) break;
      r4[i5] = s2, s2 !== null && (a5 = true);
    }
    return a5 ? r4 : null;
  };
  var Y = (e3, t) => {
    if (!e3 || typeof e3 != "object") return null;
    const r4 = e3, a5 = r4[t] && typeof r4[t] == "object" ? r4[t] : null, i5 = [r4.criteriaAverages, r4.criteriaAverage, r4.averageCriteria, r4.averagesByCriteria, r4.criteriaAvg, r4.criteria], o3 = [a5, a5?.criteriaAverages, a5?.criteriaAverage, a5?.averageCriteria, a5?.averagesByCriteria, a5?.criteriaAvg, a5?.criteria, r4[`${t}CriteriaAverages`], r4[`${t}CriteriaAverage`], r4[`${t}AverageCriteria`], r4[t === "users" ? "audienceCriteriaAverages" : "juryCriteriaAverages"], r4[t === "users" ? "audienceCriteriaAverage" : "juryCriteriaAverage"]];
    for (const s2 of i5) {
      if (!s2 || typeof s2 != "object") continue;
      const l3 = s2[t];
      o3.push(l3);
    }
    for (const s2 of o3) {
      const l3 = j(s2);
      if (l3) return l3;
    }
    return null;
  };
  var K = (e3) => {
    if (!e3 || typeof e3 != "object") return null;
    const t = e3;
    return j(t.criteria) ?? j(t);
  };
  var Z = (e3) => {
    if (!e3 || typeof e3 != "object") return null;
    const t = e3, r4 = t.averages && typeof t.averages == "object" ? t.averages : t, a5 = r4.jury ?? t.jury;
    return { audience: K(r4.audience ?? t.audience), jury: a5 === null ? null : K(a5) };
  };
  var he = (e3) => {
    const t = e3 && typeof e3 == "object" ? e3 : {};
    return { participantA: Z(t.participantA), participantB: Z(t.participantB) };
  };
  var Ae = (e3, t) => {
    e3 && (e3.participantA && t.participantA && (e3.participantA.audienceCriteriaAverages = t.participantA.audience, e3.participantA.juryCriteriaAverages = t.participantA.jury), e3.participantB && t.participantB && (e3.participantB.audienceCriteriaAverages = t.participantB.audience, e3.participantB.juryCriteriaAverages = t.participantB.jury));
  };
  var we = async (e3) => {
    if (n.payload) try {
      const t = await i2(i.tournament.matchCriteriaAverages(e3), { method: "GET", token: v() });
      Ae(n.payload, he(t));
    } catch {
      return;
    }
  };
  var ie = (e3) => {
    if (e3?.round.status === "FINISHED") return true;
    const r4 = e3?.round.submissionDeadline;
    if (!r4) return false;
    const a5 = Date.parse(r4);
    return Number.isFinite(a5) && a5 <= Date.now();
  };
  var Ie = (e3) => {
    const t = e3.storyboard * 0.15 + e3.individuality * 0.15 + e3.execution * 0.15 + e3.styleImplementation * 0.15 + e3.overall * 0.4;
    return Math.max(0, Math.min(100, Math.round(t * 10)));
  };
  var se = (e3) => ({ storyboard: e3.storyboard, individuality: e3.individuality, overall: e3.overall, execution: e3.execution, styleImplementation: e3.styleImplementation });
  var Ce = (e3, t) => !e3 || !t ? false : e3.storyboard === t.storyboard && e3.individuality === t.individuality && e3.execution === t.execution && e3.styleImplementation === t.styleImplementation && e3.overall === t.overall;
  var Ee = (e3) => {
    if (!e3 || typeof e3 != "object") return null;
    const t = e3, r4 = y3();
    for (const a5 of b3) {
      const i5 = t[a5];
      if (typeof i5 != "number" || !Number.isFinite(i5)) return null;
      r4[a5] = Math.max(0, Math.min(10, Math.round(i5)));
    }
    return r4;
  };
  var oe = () => {
    const e3 = String(A2()?.role ?? "").toUpperCase();
    return e3 === "JURY" || e3 === "ADMIN" ? "jury" : "user";
  };
  var Le = async (e3) => {
    const t = { A: null, B: null };
    if (oe() !== "user") {
      n.publishedCriteria = t;
      return;
    }
    const r4 = v();
    if (!r4) {
      n.publishedCriteria = t;
      return;
    }
    let a5;
    try {
      a5 = await i2(i.scores.userMe(e3), { method: "GET", token: r4 });
    } catch (s2) {
      if (s2 instanceof m && (s2.status === 401 || s2.status === 403 || s2.status === 404)) return;
      throw s2;
    }
    const i5 = Array.isArray(a5.scores) ? a5.scores : [], o3 = /* @__PURE__ */ new Map();
    for (const s2 of i5) {
      const l3 = c(s2?.submissionId), f4 = Ee(s2?.criteria);
      !l3 || !f4 || o3.set(l3, f4);
    }
    for (const s2 of ["A", "B"]) {
      const l3 = s2 === "A" ? n.payload?.participantA : n.payload?.participantB, f4 = c(l3?.submission?.id), d3 = f4 ? o3.get(f4) ?? null : null;
      t[s2] = d3, d3 && (n.criteria[s2] = se(d3));
    }
    n.publishedCriteria = t;
  };
  var S3 = () => {
    const e3 = String(A2()?.role ?? "").toUpperCase();
    return e3 === "JURY" || e3 === "ADMIN";
  };
  var le = (e3) => {
    const t = c(A2()?.id);
    return !t || !e3 ? false : t === e3.participantA?.id || t === e3.participantB?.id;
  };
  var I = (e3, t = "neutral") => {
    w3.textContent = e3, w3.dataset.tone = t, w3.classList.toggle("is-hidden", e3.trim().length === 0);
  };
  var p4 = (e3, t, r4 = "neutral") => {
    const a5 = v2.get(e3);
    a5 && (a5.sideStatus.textContent = t, a5.sideStatus.dataset.tone = r4, a5.sideStatus.classList.toggle("is-hidden", t.trim().length === 0));
  };
  var k2 = (e3) => {
    const t = new URL(window.location.href);
    e3 ? t.searchParams.set("vs", e3) : t.searchParams.delete("vs"), window.history.replaceState({}, "", `${t.pathname}${t.search}${t.hash}`);
  };
  var Me = () => {
    document.body.classList.add("overflow-hidden");
  };
  var Te = () => {
    document.querySelector("[data-modal].is-open") || document.body.classList.remove("overflow-hidden");
  };
  var je = () => {
    for (const e3 of v2.values()) e3.videoFrame.src = "";
  };
  var Se = () => {
    n.payload = null, I("", "neutral");
    for (const e3 of ["A", "B"]) n.criteria[e3] = y3(), n.publishedCriteria[e3] = null, n.submitting[e3] = false, p4(e3, "", "neutral");
  };
  var ke = () => {
    n.closeTimeout && (window.clearTimeout(n.closeTimeout), n.closeTimeout = 0), !n.isOpen && (n.lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null, m2.classList.remove("hidden"), m2.classList.add("flex"), Me(), window.requestAnimationFrame(() => {
      m2.classList.add("is-open"), m2.setAttribute("aria-hidden", "false"), x.focus();
    }), n.isOpen = true);
  };
  var L3 = (e3 = {}) => {
    const { syncUrl: t = true } = e3;
    if (!n.isOpen && m2.classList.contains("hidden")) {
      t && k2(null);
      return;
    }
    n.closeTimeout && (window.clearTimeout(n.closeTimeout), n.closeTimeout = 0), m2.classList.remove("is-open"), m2.setAttribute("aria-hidden", "true"), n.loadRequestId += 1, je(), Te(), t && k2(null), n.closeTimeout = window.setTimeout(() => {
      m2.classList.add("hidden"), m2.classList.remove("flex"), n.closeTimeout = 0, n.isOpen = false, n.currentMatchId = null, Se(), n.lastFocused instanceof HTMLElement && n.lastFocused.focus();
    }, 320);
  };
  var Be = (e3) => {
    const t = e3.split(/\s+/).filter(Boolean).slice(0, 2);
    return t.length === 0 ? "?" : t.map((r4) => r4[0]?.toUpperCase() ?? "").join("") || "?";
  };
  var Re = (e3, t) => {
    e3.replaceChildren();
    const r4 = [{ label: "youtube", href: t?.youtubeUrl ?? null }, { label: "instagram", href: t?.instagramUrl ?? null }];
    for (const a5 of r4) {
      if (!a5.href) continue;
      const i5 = document.createElement("a");
      i5.href = a5.href, i5.target = "_blank", i5.rel = "noreferrer noopener", i5.className = "vs-screen__social-link", i5.textContent = a5.label, e3.append(i5);
    }
    e3.classList.toggle("is-empty", e3.childElementCount === 0);
  };
  var X = (e3, t) => {
    const r4 = v2.get(e3);
    if (!r4) return;
    const a5 = t?.name?.trim() || "TBD", i5 = ie(n.payload);
    r4.name.textContent = a5, r4.description.textContent = i5 ? t?.submission?.description?.trim() || "No description yet." : "The submission deadline isn't over yet", Re(r4.socials, t);
    const o3 = t?.avatarUrl?.trim() || "";
    o3 ? (r4.avatarImage.src = o3, r4.avatarImage.alt = `${a5} avatar`, r4.avatarImage.classList.remove("hidden"), r4.avatarFallback.classList.add("hidden")) : (r4.avatarImage.src = "", r4.avatarImage.alt = "", r4.avatarImage.classList.add("hidden"), r4.avatarFallback.textContent = Be(a5), r4.avatarFallback.classList.remove("hidden"));
    const s2 = t?.submission?.embedUrl?.trim() || "";
    if (i5 && s2) r4.videoFrame.src = s2, r4.videoFrame.classList.remove("hidden"), r4.videoPlaceholder.classList.add("hidden");
    else {
      r4.videoFrame.src = "", r4.videoFrame.classList.add("hidden"), r4.videoPlaceholder.classList.remove("hidden");
      const d3 = r4.videoPlaceholder.querySelector(".vs-screen__video-placeholder-text");
      d3 instanceof HTMLElement && (d3.textContent = i5 ? t?.submission ? "Video unavailable" : "Participant hasn't uploaded their work yet" : "The submission deadline isn't over yet");
    }
    r4.audienceAverage.textContent = Q(t?.audienceAverage ?? null);
    const l3 = n.payload?.round.juryRevealEnabled === true || S3() ? t?.juryAverage ?? null : null;
    r4.juryAverage.textContent = Q(l3);
    const f4 = n.payload?.round.juryRevealEnabled === true || S3();
    r4.averagesTooltip.innerHTML = `
      <p class="vs-screen__averages-tooltip-title">AVERAGE BY CRITERIA</p>
      <div class="vs-screen__averages-tooltip-table">
        <div class="vs-screen__averages-tooltip-row is-head">
          <span class="vs-screen__averages-tooltip-head">criterion</span>
          <span class="vs-screen__averages-tooltip-head is-jury">jury</span>
          <span class="vs-screen__averages-tooltip-head">audience</span>
        </div>
        ${pe.map((d3) => `
            <div class="vs-screen__averages-tooltip-row">
              <span class="vs-screen__averages-tooltip-key">${fe[d3]}</span>
              <span class="vs-screen__averages-tooltip-value is-jury">${G(f4 ? t?.juryCriteriaAverages?.[d3] ?? null : null)}</span>
              <span class="vs-screen__averages-tooltip-value">${G(t?.audienceCriteriaAverages?.[d3] ?? null)}</span>
            </div>
          `).join("")}
      </div>
    `;
  };
  var xe = (e3, t) => {
    const r4 = c(t?.match.winnerId);
    if (!r4) return null;
    const a5 = c(t?.participantA?.id), i5 = c(t?.participantB?.id);
    return a5 && a5 === r4 ? e3 === "A" ? "winner" : "loser" : i5 && i5 === r4 ? e3 === "B" ? "winner" : "loser" : null;
  };
  var ee = (e3) => {
    const t = v2.get(e3);
    if (!t) return;
    const r4 = xe(e3, n.payload);
    t.resultBadge.textContent = r4 === "winner" ? "WIN" : r4 === "loser" ? "LOSE" : "", t.resultBadge.dataset.result = r4 ?? "", t.resultBadge.classList.toggle("is-hidden", !r4);
  };
  var B3 = (e3) => {
    const t = v2.get(e3);
    if (!t) return;
    const r4 = n.criteria[e3];
    for (const a5 of b3) {
      const i5 = r4[a5];
      t.inputs[a5].value = String(i5), t.values[a5].textContent = String(i5), t.inputs[a5].style.setProperty("--vs-progress", `${i5 / 10 * 100}%`);
    }
    t.yourRating.textContent = String(Ie(r4));
  };
  var Ue = (e3, t) => t?.id ? ie(n.payload) ? t.submission?.id ? v() ? le(n.payload) ? "Participants cannot rate their own match." : S3() ? "Use Judge page to rate works." : n.submitting[e3] ? "Publishing rating..." : "" : "Log in to rate this work." : "Submission is not available yet." : "Submission deadline is not over yet." : "Match participant is not assigned yet.";
  var C2 = (e3, t) => {
    const r4 = v2.get(e3);
    if (!r4) return;
    const a5 = Ue(e3, t), i5 = a5.length > 0;
    for (const s2 of b3) r4.inputs[s2].disabled = i5;
    if (r4.publish.disabled = i5, r4.publish.title = a5, r4.section.classList.toggle("is-disabled", i5), n.submitting[e3]) {
      p4(e3, "Publishing rating...", "neutral");
      return;
    }
    if (n.publishedCriteria[e3]) {
      p4(e3, "Rating published.", "ok");
      return;
    }
    const o3 = r4.sideStatus.textContent?.trim() ?? "";
    (!o3 || o3 === "Publishing rating...") && p4(e3, "", "neutral");
  };
  var te = (e3) => {
    if (!e3 || typeof e3 != "object") return null;
    const t = e3, r4 = t.submission && typeof t.submission == "object" ? t.submission : null, a5 = t.scores && typeof t.scores == "object" ? t.scores : null;
    return { id: c(t.id), name: c(t.nickname) ?? c(t.username) ?? "TBD", avatarUrl: T2(t.avatarUrl, t.avatar), youtubeUrl: T2(t.youtubeUrl, t.youtube), instagramUrl: T2(t.instagramUrl, t.instagram), submission: r4 ? { id: c(r4.id), embedUrl: be(r4.embedUrl ?? r4.videoUrl ?? r4.workUrl), description: U3(r4.description) } : null, audienceAverage: W(a5, "users"), juryAverage: W(a5, "jury"), audienceCriteriaAverages: Y(a5, "users"), juryCriteriaAverages: Y(a5, "jury") };
  };
  var _e = (e3) => {
    const t = e3 && typeof e3 == "object" ? e3 : {}, r4 = t.match && typeof t.match == "object" ? t.match : {}, a5 = t.round && typeof t.round == "object" ? t.round : {};
    return { id: U3(r4.id), match: { status: c(r4.status), winnerId: c(r4.winnerId) }, round: { juryRevealEnabled: !!a5.juryRevealEnabled, status: c(a5.status), submissionDeadline: c(a5.submissionDeadline), endsAt: c(a5.endsAt) }, participantA: te(t.participantA), participantB: te(t.participantB) };
  };
  var re = () => {
    const e3 = n.payload;
    X("A", e3?.participantA ?? null), X("B", e3?.participantB ?? null), ee("A"), ee("B"), B3("A"), B3("B"), C2("A", e3?.participantA ?? null), C2("B", e3?.participantB ?? null);
  };
  var ce = async (e3) => {
    const t = ++n.loadRequestId;
    I("Loading match...", "neutral");
    try {
      ge(e3);
      const r4 = await i2(i.tournament.matchPublicDetailed(e3), { method: "GET", token: v() });
      if (t !== n.loadRequestId || (n.payload = _e(r4), await we(e3), t !== n.loadRequestId) || (await Le(e3), t !== n.loadRequestId)) return;
      re(), I("", "neutral");
    } catch (r4) {
      if (t !== n.loadRequestId) return;
      if (window.__MATCHES_DETAILS && window.__MATCHES_DETAILS[e3]) {
        n.payload = _e(window.__MATCHES_DETAILS[e3]);
        re();
        I("", "neutral");
        return;
      }
      n.payload = null, re(), I(r4 instanceof Error ? r4.message : "Could not load match details.", "err");
    }
  };
  var ue = async (e3, t = {}) => {
    const { syncUrl: r4 = true } = t, a5 = e3.trim();
    a5 && (ke(), r4 && k2(a5), n.currentMatchId !== a5 && (n.criteria.A = y3(), n.criteria.B = y3(), p4("A", "", "neutral"), p4("B", "", "neutral")), n.currentMatchId = a5, await ce(a5));
  };
  var ae = (e3) => {
    const t = v2.get(e3);
    return t ? { storyboard: Number(t.inputs.storyboard.value) || 0, individuality: Number(t.inputs.individuality.value) || 0, overall: Number(t.inputs.overall.value) || 0, execution: Number(t.inputs.execution.value) || 0, styleImplementation: Number(t.inputs.styleImplementation.value) || 0 } : y3();
  };
  var He = async (e3) => {
    const t = n.currentMatchId, r4 = n.payload, a5 = e3 === "A" ? r4?.participantA : r4?.participantB, i5 = v();
    if (!i5) {
      const o3 = new URL(window.location.href);
      t && o3.searchParams.set("vs", t), B2(`${o3.pathname}${o3.search}`);
      return;
    }
    if (!t || !a5?.submission?.id) {
      p4(e3, "Submission is not available yet.", "err");
      return;
    }
    if (le(r4)) {
      p4(e3, "Participants cannot rate their own match.", "err");
      return;
    }
    n.submitting[e3] = true, C2(e3, a5);
    try {
      const o3 = n.criteria[e3], s2 = oe() === "jury" ? i.scores.jury : i.scores.user;
      await i2(s2, { method: "POST", token: i5, body: { matchId: t, submissionId: a5.submission.id, criteria: o3 } }), n.publishedCriteria[e3] = se(o3), p4(e3, "Rating published.", "ok"), await ce(t);
    } catch (o3) {
      const s2 = o3 instanceof m || o3 instanceof Error ? o3.message : "Could not publish rating.";
      p4(e3, s2, "err");
    } finally {
      n.submitting[e3] = false, C2(e3, a5);
    }
  };
  for (const e3 of ["A", "B"]) {
    const t = v2.get(e3);
    if (t) {
      for (const r4 of b3) t.inputs[r4].addEventListener("input", () => {
        n.criteria[e3] = ae(e3), B3(e3), n.publishedCriteria[e3] && p4(e3, Ce(n.criteria[e3], n.publishedCriteria[e3]) ? "Rating published." : "Unsaved changes.", "neutral");
      });
      t.form.addEventListener("submit", (r4) => {
        r4.preventDefault(), n.criteria[e3] = ae(e3), He(e3);
      });
    }
  }
  x.addEventListener("click", (e3) => {
    e3.preventDefault(), L3();
  });
  m2.addEventListener("click", (e3) => {
    e3.target === m2 && L3();
  });
  document.addEventListener("keydown", (e3) => {
    e3.key === "Escape" && n.isOpen && L3();
  });
  document.addEventListener("ngt:vs-open", (e3) => {
    const t = e3 instanceof CustomEvent && e3.detail && typeof e3.detail == "object" ? e3.detail : {}, r4 = c(t.matchId);
    r4 && ue(r4);
  });
  var de = () => {
    const e3 = c(new URLSearchParams(window.location.search).get("vs"));
    if (!e3) {
      n.isOpen && L3({ syncUrl: false });
      return;
    }
    n.currentMatchId === e3 && n.isOpen || ue(e3, { syncUrl: false });
  };
  window.addEventListener("popstate", de);
  de();

  // _astro/index.astro_astro_type_script_index_0_lang.Cv9zphZG.js
  $({ ttlMs: 6e4 }).catch(() => {
  });
})();
