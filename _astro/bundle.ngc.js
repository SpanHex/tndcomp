(() => {
  // _astro/api-paths.BeHY0xnA.js
  var i = { health: "/health", siteSettings: "/site-settings", media: { instagramPreview: "/media/instagram-preview" }, auth: { discord: "/auth/discord", discordStart: "/auth/discord/start", discordCallback: "/auth/discord/callback", me: "/auth/me", logout: "/auth/logout" }, applications: { root: "/applications", me: "/applications/me", byId: (s2) => `/applications/${s2}` }, ngc: { submissions: "/ngc/submissions", mySubmission: "/ngc/submissions/me" }, scores: { public: "/scores/public", user: "/scores/user", userMe: (s2) => `/scores/user/me/${s2}`, jury: "/scores/jury" }, participant: { submissions: "/participant/submissions", submission: (s2) => `/participant/submissions/${s2}`, submissionsMe: "/participant/submissions/me", dashboardMe: "/participant/dashboard/me", historyMe: "/participant/history/me", profileMe: "/participant/profile/me", scores: (s2) => `/participant/scores/${s2}` }, tournament: { bracket: "/tournament/bracket", matchPublicDetailed: (s2) => `/tournament/matches/${s2}/publicDetailed`, matchCriteriaAverages: (s2) => `/tournament/matches/${s2}/criteriaAverages`, submissionsByRound: (s2) => `/tournament/submissions/${s2}` }, admin: { users: "/admin/users", userRole: (s2) => `/admin/users/${s2}/role`, userRoleByDiscordId: (s2) => `/admin/users/discord/${s2}/role`, applications: "/admin/applications", ngcSubmissions: "/admin/ngc-submissions", ngcSubmission: (s2) => `/admin/ngc-submissions/${s2}`, rounds: "/admin/rounds", roundSettings: (s2) => `/admin/rounds/${s2}/settings`, matches: "/admin/matches", matchParticipants: (s2) => `/admin/matches/${s2}/participants`, matchScores: (s2) => `/admin/matches/${s2}/scores`, userScore: (s2) => `/admin/scores/user/${s2}`, matchNicknames: (s2) => `/admin/matches/${s2}/nicknames`, matchWinner: (s2) => `/admin/matches/${s2}/winner`, roundAssignments: "/admin/round-assignments", roundAssignment: (s2) => `/admin/round-assignments/${s2}`, placements: "/admin/placements", submissions: "/admin/submissions", submission: (s2) => `/admin/submissions/${s2}`, siteSettings: "/admin/site-settings", siteSettingsVideo: "/admin/site-settings/background-video" } };

  // _astro/site-settings.CKBpDEDM.js
  var import_meta = {};
  var p = { ASSETS_PREFIX: void 0, BASE_URL: "/", DEV: false, MODE: "production", PROD: true, PUBLIC_API_BASE_URL: "https://api.nwgn.art", SITE: "https://nwgn.art", SSR: false };
  var d = "site-settings:cache:v1";
  var L = "/site-settings";
  var y = 6e4;
  var l = (e) => typeof e == "object" && e !== null;
  var r = (e, t = "") => typeof e == "string" ? e : t;
  var R = (e) => {
    try {
      const t = new URL(e), n = t.hostname.toLowerCase();
      if (n === "youtu.be") return t.pathname.split("/").filter(Boolean)[0] ?? "";
      if (n === "youtube.com" || n === "www.youtube.com" || n === "m.youtube.com") {
        if (t.pathname === "/watch") return t.searchParams.get("v") ?? "";
        const [, i4, a2] = t.pathname.split("/");
        if (i4 === "embed" || i4 === "shorts" || i4 === "live") return a2 ?? "";
      }
    } catch {
      return "";
    }
    return "";
  };
  var A = (e) => {
    const t = R(e);
    return t ? `https://i.ytimg.com/vi/${t}/hqdefault.jpg` : "";
  };
  var _ = (e) => {
    try {
      const t = new URL(e), n = t.hostname.toLowerCase();
      if (n !== "streamable.com" && n !== "www.streamable.com" && n !== "m.streamable.com") return "";
      const i4 = t.pathname.split("/").filter(Boolean);
      if (i4.length === 0) return "";
      const a2 = i4[0] === "e" || i4[0] === "s" ? i4[1] : i4[0];
      return /^[A-Za-z0-9]+$/.test(a2 ?? "") ? a2 ?? "" : "";
    } catch {
      return "";
    }
  };
  var N = (e) => {
    const t = _(e);
    return t ? `https://cdn-cf-east.streamable.com/image/${t}.jpg` : "";
  };
  var S = (e) => {
    try {
      const t = new URL(e), n = t.hostname.toLowerCase();
      if (n !== "instagram.com" && n !== "www.instagram.com" && n !== "m.instagram.com") return "";
      const [i4, a2] = t.pathname.split("/").filter(Boolean);
      return i4 !== "p" && i4 !== "reel" && i4 !== "reels" && i4 !== "tv" ? "" : /^[A-Za-z0-9_-]+$/.test(a2 ?? "") ? a2 ?? "" : "";
    } catch {
      return "";
    }
  };
  var w = (e) => S(e) ? `${b()}${i.media.instagramPreview}?url=${encodeURIComponent(e)}` : "";
  var C = (e) => Array.isArray(e) ? e.filter(l).map((t) => ({ name: r(t.name).trim(), link: r(t.link).trim() })).filter((t) => t.name.length > 0) : [];
  var f = [{ place: "first", name: "walsii", title: "CHAMPION", link: "" }, { place: "second", name: "goof", title: "RUNNER-UP", link: "" }, { place: "third", name: "fuze", title: "TOP 3", link: "" }];
  var D = (e) => e === "first" || e === "second" || e === "third";
  var O = (e) => {
    if (!Array.isArray(e)) return [...f];
    const t = /* @__PURE__ */ new Map();
    return e.filter(l).forEach((n) => {
      D(n.place) && t.set(n.place, { place: n.place, name: r(n.name).trim(), title: r(n.title).trim(), link: r(n.link).trim() });
    }), f.map((n) => {
      const i4 = t.get(n.place);
      return { ...n, ...i4 ?? {}, place: n.place, name: i4?.name || n.name, title: i4?.title || n.title, link: i4?.link || "" };
    });
  };
  var s = { headingAccent: "NGC", heading: "WINNER", winnerPlace: "1ST PLACE", winnerName: "@SHADOWCTRL", winnerVideoUrl: "", winnerThumbnailUrl: "", restrictionLabel: "RESTRICTION", restriction: "USED RESTRICTION", prizeLabel: "PRIZE", prize: "$200", mentionsTitle: "HONORABLE MENTIONS", mentions: [{ name: "@VOIDEDITS", title: "BLOOD MOON", url: "", thumbnailUrl: "" }, { name: "@KXRA.AE", title: "FALLEN", url: "", thumbnailUrl: "" }, { name: "@YUUTAA", title: "CHAOS THEORY", url: "", thumbnailUrl: "" }, { name: "@XENZ.VFX", title: "ECLIPSE", url: "", thumbnailUrl: "" }, { name: "@RIPTIDEEDITZ", title: "B BIT HEART", url: "", thumbnailUrl: "" }, { name: "@ZORO.AM", title: "NO SLEEP", url: "", thumbnailUrl: "" }] };
  var P = (e) => {
    if (!l(e)) return null;
    const t = r(e.url).trim(), n = r(e.thumbnailUrl).trim(), i4 = w(t) || w(n), a2 = (n && !S(n) ? n : "") || A(t) || N(t) || i4, o2 = { name: r(e.name).trim(), title: r(e.title).trim(), url: t, thumbnailUrl: a2 };
    return o2.name || o2.title || o2.url ? o2 : null;
  };
  var B = (e) => {
    const t = l(e) ? e : {}, n = r(t.winnerVideoUrl).trim() || s.winnerVideoUrl, i4 = Array.isArray(t.mentions) ? t.mentions.map(P).filter((a2) => a2 !== null) : [...s.mentions];
    return { headingAccent: r(t.headingAccent).trim() || s.headingAccent, heading: r(t.heading).trim() || s.heading, winnerPlace: r(t.winnerPlace).trim() || s.winnerPlace, winnerName: r(t.winnerName).trim() || s.winnerName, winnerUrl: r(t.winnerUrl).trim(), winnerVideoUrl: n, winnerThumbnailUrl: r(t.winnerThumbnailUrl).trim() || A(n) || s.winnerThumbnailUrl, restrictionLabel: r(t.restrictionLabel).trim() || s.restrictionLabel, restriction: r(t.restriction).trim() || s.restriction, prizeLabel: r(t.prizeLabel).trim() || s.prizeLabel, prize: r(t.prize).trim() || s.prize, mentionsTitle: r(t.mentionsTitle).trim() || s.mentionsTitle, mentions: i4 };
  };
  var k = (e) => Array.isArray(e) ? e.filter(l).map((t, n) => {
    const i4 = l(t.judge) ? t.judge : {};
    return { id: r(t.id, String(n + 1)), duration: r(t.duration), duration_amount: r(t.duration_amount), judge: { duration: r(i4.duration), duration_amount: r(i4.duration_amount) } };
  }) : [];
  var h = (e) => {
    const t = l(e) ? e : {};
    return { timerIso: t.timerIso == null ? null : r(t.timerIso).trim() || null, timerHeaderText: t.timerHeaderText == null ? null : r(t.timerHeaderText).trim() || null, ngcDeadlineIso: t.ngcDeadlineIso == null ? null : r(t.ngcDeadlineIso).trim() || null, tournamentBracketHidden: !!t.tournamentBracketHidden, description: t.description == null ? null : r(t.description).trim() || null, subDescription: t.subDescription == null ? null : r(t.subDescription).trim() || null, backgroundVideoFilename: t.backgroundVideoFilename == null ? null : r(t.backgroundVideoFilename).trim() || null, backgroundVideoUrl: t.backgroundVideoUrl == null ? null : r(t.backgroundVideoUrl).trim() || null, rounds: k(t.rounds), specialThanks: C(t.specialThanks), winners: O(t.winners), ngcResults: B(t.ngcResults), updatedAt: r(t.updatedAt).trim() || (/* @__PURE__ */ new Date(0)).toISOString() };
  };
  var b = (e) => {
    const t = document.body?.dataset.apiBaseUrl, n = typeof import_meta < "u" && p && "PUBLIC_API_BASE_URL" in p ? "https://api.nwgn.art" : void 0;
    return (e ?? t ?? n ?? "http://localhost:3000").replace(/\/$/, "");
  };
  var U = (e) => {
    try {
      const t = localStorage.getItem(e);
      if (!t) return null;
      const n = JSON.parse(t);
      return !l(n) || !l(n.data) || typeof n.fetchedAt != "number" ? null : { data: h(n.data), fetchedAt: n.fetchedAt };
    } catch {
      return null;
    }
    if (typeof window != "undefined" && window.__SITE_SETTINGS) return { data: h(window.__SITE_SETTINGS), fetchedAt: Date.now() };
    return null;
  };
  var z = (e, t) => {
    try {
      localStorage.setItem(e, JSON.stringify(t));
    } catch {
    }
  };
  var u = (e) => {
    window.dispatchEvent(new CustomEvent("siteSettings:loaded", { detail: e }));
  };
  var F = (e) => {
    const t = (n) => {
      const a2 = h(n.detail);
      e(a2, { fromCache: false, fetchedAt: Date.now() });
    };
    return window.addEventListener("siteSettings:loaded", t), () => window.removeEventListener("siteSettings:loaded", t);
  };
  var $ = async (e = {}) => {
    const t = e.cacheKey ?? d, n = e.endpoint ?? L, i4 = e.ttlMs ?? y, a2 = Date.now(), o2 = U(t);
    if (!e.forceRefresh && o2 && a2 - o2.fetchedAt <= i4) return u(o2.data), { settings: o2.data, fromCache: true, fetchedAt: o2.fetchedAt };
    const T2 = b(e.apiBaseUrl);
    let c2;
    try {
      c2 = await fetch(`${T2}${n}`, { headers: { Accept: "application/json" }, signal: e.signal });
    } catch (err) {
      if (o2) return u(o2.data), { settings: o2.data, fromCache: true, fetchedAt: o2.fetchedAt };
      if (typeof window != "undefined" && window.__SITE_SETTINGS) {
        const m4 = h(window.__SITE_SETTINGS);
        return u(m4), { settings: m4, fromCache: true, fetchedAt: Date.now() };
      }
      throw err;
    }
    if (!c2.ok) {
      if (o2) return u(o2.data), { settings: o2.data, fromCache: true, fetchedAt: o2.fetchedAt };
      if (typeof window != "undefined" && window.__SITE_SETTINGS) {
        const m4 = h(window.__SITE_SETTINGS);
        return u(m4), { settings: m4, fromCache: true, fetchedAt: Date.now() };
      }
      throw new Error(`Failed to load site settings: ${c2.status}`);
    }
    const E3 = await c2.json(), m3 = h(E3), g3 = { data: m3, fetchedAt: Date.now() };
    return z(t, g3), u(m3), { settings: m3, fromCache: false, fetchedAt: g3.fetchedAt };
  };

  // _astro/NgcResultsShowcase.astro_astro_type_script_index_0_lang.BAW-JUi9.js
  var import_meta2 = {};
  var H = { ASSETS_PREFIX: void 0, BASE_URL: "/", DEV: false, MODE: "production", PROD: true, PUBLIC_API_BASE_URL: "https://api.nwgn.art", SITE: "https://nwgn.art", SSR: false };
  var c = document.querySelector("[data-ngc-results]");
  var j = () => {
    const e = document.body?.dataset.apiBaseUrl, t = typeof import_meta2 < "u" && H && "PUBLIC_API_BASE_URL" in H ? "https://api.nwgn.art" : void 0;
    return String(e || t || "http://localhost:3000").replace(/\/$/, "");
  };
  var B2 = (e) => {
    try {
      const t = new URL(e), r2 = t.hostname.toLowerCase();
      if (r2 === "youtu.be") return t.pathname.split("/").filter(Boolean)[0] ?? "";
      if (r2 === "youtube.com" || r2 === "www.youtube.com" || r2 === "m.youtube.com") {
        if (t.pathname === "/watch") return t.searchParams.get("v") ?? "";
        const [, n, a2] = t.pathname.split("/");
        if (n === "embed" || n === "shorts" || n === "live") return a2 ?? "";
      }
    } catch {
      return "";
    }
    return "";
  };
  var G = (e) => {
    const t = B2(e);
    return t ? `https://www.youtube.com/embed/${t}?rel=0&modestbranding=1&playsinline=1` : e;
  };
  var Y = (e) => e ? G(e) : "";
  var P2 = (e) => {
    const t = B2(e);
    return t ? `https://i.ytimg.com/vi/${t}/hqdefault.jpg` : "";
  };
  var W = (e) => {
    try {
      const t = new URL(e), r2 = t.hostname.toLowerCase();
      if (r2 !== "streamable.com" && r2 !== "www.streamable.com" && r2 !== "m.streamable.com") return "";
      const n = t.pathname.split("/").filter(Boolean);
      if (n.length === 0) return "";
      const a2 = n[0] === "e" || n[0] === "s" ? n[1] : n[0];
      return /^[A-Za-z0-9]+$/.test(a2 ?? "") ? a2 ?? "" : "";
    } catch {
      return "";
    }
  };
  var R2 = (e) => {
    const t = W(e);
    return t ? `https://cdn-cf-east.streamable.com/image/${t}.jpg` : "";
  };
  var $2 = (e) => {
    try {
      const t = new URL(e), r2 = t.hostname.toLowerCase();
      if (r2 !== "instagram.com" && r2 !== "www.instagram.com" && r2 !== "m.instagram.com") return "";
      const [n, a2] = t.pathname.split("/").filter(Boolean);
      return n !== "p" && n !== "reel" && n !== "reels" && n !== "tv" ? "" : /^[A-Za-z0-9_-]+$/.test(a2 ?? "") ? a2 ?? "" : "";
    } catch {
      return "";
    }
  };
  var I = (e) => $2(e) ? `${j()}${i.media.instagramPreview}?url=${encodeURIComponent(e)}` : "";
  var N2 = (e) => {
    try {
      const t = new URL(e);
      return /\.(?:avif|gif|jpe?g|png|webp)(?:$|[?#])/i.test(t.pathname);
    } catch {
      return false;
    }
  };
  var Z = (e) => {
    const t = I(e.url) || I(e.thumbnailUrl);
    return (e.thumbnailUrl && !$2(e.thumbnailUrl) ? e.thumbnailUrl : "") || P2(e.url) || R2(e.url) || t || (N2(e.url) ? e.url : "") || "/meta_img.jpg";
  };
  var d2 = (e, t) => {
    const r2 = c?.querySelector(e);
    r2 && (r2.textContent = t);
  };
  var h2 = (e) => String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  var J = (e) => {
    const t = h2(e.url || "#"), r2 = Z(e), n = h2(e.name || ""), a2 = h2(e.title || "");
    return `
      <a class="ngc-mention-card" href="${t}" target="_blank" rel="noopener noreferrer">
        <span class="ngc-mention-media">
          <img src="${h2(r2)}" alt="" loading="lazy" draggable="false" referrerpolicy="no-referrer" />
          <span class="ngc-mention-play" aria-hidden="true"></span>
        </span>
        <span class="ngc-mention-copy">
          <span>${n}</span>
          <span>${a2}</span>
        </span>
      </a>
    `;
  };
  var i2 = c?.querySelector("[data-ngc-mentions-track]");
  var o = c?.querySelector("[data-ngc-mentions-strip]");
  var L2 = c?.querySelector("[data-ngc-mentions-prev]");
  var M = c?.querySelector("[data-ngc-mentions-next]");
  var k2 = window.matchMedia("(prefers-reduced-motion: reduce)");
  var y2 = 0;
  var u2 = 0;
  var m = 0;
  var E = 0;
  var l2 = null;
  var f2 = false;
  var A2 = 0;
  var q = 0;
  var b2 = false;
  var S2 = () => o instanceof HTMLElement ? Number(o.dataset.ngcCycleCount || "0") : 0;
  var D2 = () => {
    if (!(o instanceof HTMLElement)) return 0;
    const e = window.getComputedStyle(o);
    return Number.parseFloat(e.columnGap || e.gap || "0") || 0;
  };
  var K = (e) => m <= 0 ? 0 : (e % m + m) % m;
  var g = (e) => {
    o instanceof HTMLElement && (u2 = K(e), o.style.transform = `translate3d(${-u2}px, 0, 0)`);
  };
  var Q = () => {
    if (!(o instanceof HTMLElement)) return 0;
    const e = o.querySelector(".ngc-mention-card");
    return e instanceof HTMLElement ? e.getBoundingClientRect().width + D2() : 0;
  };
  var w2 = () => {
    if (!(L2 instanceof HTMLButtonElement) || !(M instanceof HTMLButtonElement)) return;
    const e = S2() > 1;
    L2.disabled = !e, M.disabled = !e;
  };
  var F2 = () => {
    i2 instanceof HTMLElement && (Array.from(i2.children).forEach((e) => {
      e !== o && e.remove();
    }), o instanceof HTMLElement && (Array.from(o.children).forEach((e) => {
      e.classList.contains("ngc-mention-card") || e.remove();
    }), o.querySelectorAll(".ngc-mention-card").forEach((e) => {
      Array.from(e.children).forEach((t) => {
        t.classList.contains("ngc-mention-media") || t.classList.contains("ngc-mention-copy") || t.remove();
      });
    }), o.querySelectorAll(".ngc-mention-media").forEach((e) => {
      Array.from(e.children).forEach((t) => {
        t instanceof HTMLImageElement || t.classList.contains("ngc-mention-play") || t.remove();
      });
    })));
  };
  var ee = () => {
    if (!(o instanceof HTMLElement)) {
      m = 0, w2();
      return;
    }
    F2();
    const e = S2(), t = Array.from(o.querySelectorAll(".ngc-mention-card"));
    if (e < 1 || t.length < 1) {
      m = 0, o.style.transform = "", w2();
      return;
    }
    const r2 = D2();
    m = t.slice(0, e).reduce((n, a2) => a2 instanceof HTMLElement ? n + a2.getBoundingClientRect().width : n, 0) + r2 * e, g(u2), w2();
  };
  var T = () => {
    y2 || (y2 = window.requestAnimationFrame(() => {
      y2 = 0, ee();
    }));
  };
  var te = (e, t) => {
    e.classList.add("ngc-mention-card"), e.setAttribute("draggable", "false"), t ? (e.dataset.ngcClone = "true", e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", "-1")) : (delete e.dataset.ngcClone, e.removeAttribute("aria-hidden"), e.removeAttribute("tabindex")), e.querySelectorAll("img").forEach((r2) => {
      r2.setAttribute("draggable", "false");
    });
  };
  var x = (e) => {
    if (!(o instanceof HTMLElement)) return;
    const t = e.filter((n) => n.classList.contains("ngc-mention-card"));
    if (o.innerHTML = "", o.dataset.ngcCycleCount = String(t.length), t.length === 0) {
      u2 = 0, m = 0, w2();
      return;
    }
    const r2 = Math.max(4, Math.ceil(18 / t.length));
    for (let n = 0; n < r2; n += 1) t.forEach((a2) => {
      const s2 = a2.cloneNode(true);
      s2 instanceof HTMLElement && (te(s2, n > 0), o.append(s2));
    });
    u2 = 0, l2 = null, T();
  };
  var ne = (e) => {
    const t = document.createElement("template");
    t.innerHTML = e.map(J).join(""), x(Array.from(t.content.children).filter((r2) => r2 instanceof HTMLElement));
  };
  var re = () => {
    if (!(o instanceof HTMLElement)) return;
    const e = Array.from(o.children).filter((t) => t instanceof HTMLElement && t.classList.contains("ngc-mention-card") && !t.dataset.ngcClone);
    x(e);
  };
  var oe = (e) => {
    if (!(m <= 0)) {
      if (k2.matches) {
        g(u2 + e);
        return;
      }
      l2 = { from: u2, to: u2 + e, start: performance.now(), duration: 420 };
    }
  };
  var z2 = (e) => {
    const t = Q();
    t <= 0 || oe(e * t);
  };
  var V = (e) => {
    const t = E ? Math.min(e - E, 64) : 16;
    if (E = e, !document.hidden && !f2 && m > 0) if (l2) {
      const r2 = Math.min(1, (e - l2.start) / l2.duration), n = 1 - Math.pow(1 - r2, 3);
      g(l2.from + (l2.to - l2.from) * n), r2 >= 1 && (l2 = null);
    } else k2.matches || g(u2 + t * 0.024);
    window.requestAnimationFrame(V);
  };
  var _2 = (e) => {
    f2 && (f2 = false, i2?.classList.remove("is-dragging"), i2 instanceof HTMLElement && e instanceof PointerEvent && i2.hasPointerCapture(e.pointerId) && i2.releasePointerCapture(e.pointerId), window.setTimeout(() => {
      b2 = false;
    }, 0));
  };
  L2 instanceof HTMLButtonElement && L2.addEventListener("click", () => z2(-1));
  M instanceof HTMLButtonElement && M.addEventListener("click", () => z2(1));
  i2 instanceof HTMLElement && (i2.addEventListener("pointerdown", (t) => {
    t.button !== 0 || S2() < 2 || (f2 = true, l2 = null, A2 = t.clientX, q = t.clientX, b2 = false);
  }), i2.addEventListener("pointermove", (t) => {
    if (!f2) return;
    const r2 = t.clientX - A2;
    A2 = t.clientX, !(Math.abs(t.clientX - q) <= 8) && (b2 = true, t.preventDefault(), i2.classList.add("is-dragging"), i2.hasPointerCapture(t.pointerId) || i2.setPointerCapture(t.pointerId), g(u2 - r2));
  }), i2.addEventListener("pointerup", _2), i2.addEventListener("pointercancel", _2), i2.addEventListener("click", (t) => {
    b2 && (t.preventDefault(), t.stopPropagation());
  }, true), new MutationObserver(() => {
    F2(), T();
  }).observe(i2, { childList: true, subtree: true }));
  window.addEventListener("resize", T, { passive: true });
  re();
  window.requestAnimationFrame(V);
  F((e) => {
    if (!c || !e.ngcResults) return;
    const t = e.ngcResults, r2 = c.querySelector("[data-ngc-logo]");
    r2 instanceof HTMLImageElement && (r2.alt = t.headingAccent || "NGC"), d2("[data-ngc-heading]", t.heading), d2("[data-ngc-winner-place]", t.winnerPlace), d2("[data-ngc-winner-name]", t.winnerName), d2("[data-ngc-restriction-label]", t.restrictionLabel), d2("[data-ngc-prize-label]", t.prizeLabel), d2("[data-ngc-prize]", t.prize), d2("[data-ngc-mentions-title]", t.mentionsTitle);
    const n = c.querySelector("[data-ngc-winner-name]");
    n instanceof HTMLAnchorElement && (t.winnerUrl ? (n.href = t.winnerUrl, n.target = "_blank", n.rel = "noopener noreferrer") : (n.removeAttribute("href"), n.removeAttribute("target"), n.removeAttribute("rel")));
    const a2 = c.querySelector("[data-ngc-winner-frame]"), s2 = c.querySelector("[data-ngc-winner-fallback]");
    if (a2 instanceof HTMLIFrameElement) {
      const p3 = Y(t.winnerVideoUrl);
      if (p3 ? a2.src = p3 : a2.removeAttribute("src"), a2.title = `${t.winnerName || "NGC winner"} winner video`, a2.hidden = !p3, s2 instanceof HTMLAnchorElement) {
        s2.hidden = !!p3, s2.setAttribute("aria-label", `${t.winnerName || "NGC winner"} winner video`), t.winnerVideoUrl ? (s2.href = t.winnerVideoUrl, s2.target = "_blank", s2.rel = "noopener noreferrer") : (s2.removeAttribute("href"), s2.removeAttribute("target"), s2.removeAttribute("rel"));
        const U2 = s2.querySelector("img");
        U2 instanceof HTMLImageElement && (U2.src = t.winnerThumbnailUrl || P2(t.winnerVideoUrl) || R2(t.winnerVideoUrl) || (N2(t.winnerVideoUrl) ? t.winnerVideoUrl : "") || "/meta_img.jpg");
      }
    }
    const v2 = Array.isArray(t.mentions) ? t.mentions : [], C3 = c.querySelector("[data-ngc-mentions-count]");
    C3 && (C3.textContent = String(v2.length).padStart(2, "0")), ne(v2);
  });

  // _astro/ngc.astro_astro_type_script_index_0_lang.Lo47_M4U.js
  var y3 = "2026-07-01T20:59:59.000Z";
  var M2 = "ENTRY CLOSED";
  var L3 = "SUBMISSION CLOSED";
  var x2 = document.querySelectorAll(".ngc-route");
  var D3 = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  D3 && x2.forEach((e) => {
    let n = 0, t = 50, o2 = 18;
    const s2 = () => {
      n = 0, e.style.setProperty("--route-x", `${t}%`), e.style.setProperty("--route-y", `${o2}%`);
    };
    e.addEventListener("pointermove", (c2) => {
      if (c2.pointerType === "touch") return;
      const r2 = e.getBoundingClientRect();
      t = Math.min(100, Math.max(0, (c2.clientX - r2.left) / r2.width * 100)), o2 = Math.min(100, Math.max(0, (c2.clientY - r2.top) / r2.height * 100)), n || (n = window.requestAnimationFrame(s2));
    }), e.addEventListener("pointerleave", () => {
      t = 50, o2 = 18, n || (n = window.requestAnimationFrame(s2));
    });
  });
  var v = document.querySelector("[data-ngc-after-results]");
  var O2 = document.querySelector("[data-ngc-about-scroll]");
  var b3 = document.querySelector("[data-ngc-hero]");
  var S3 = document.getElementById("site-header");
  var q2 = (e) => {
    let n = 0, t = e;
    for (; t; ) n += t.offsetTop, t = t.offsetParent;
    return n;
  };
  O2?.addEventListener("click", () => {
    if (!b3) return;
    const e = S3 instanceof HTMLElement ? S3.getBoundingClientRect().height : 0, n = q2(b3) - e - 32;
    window.scrollTo({ top: Math.max(0, n), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
  var p2 = document.querySelectorAll(".ngc-stage-block:not([hidden]):not([data-ngc-after-results])");
  p2.forEach((e, n) => {
    e.style.setProperty("--ngc-stage-delay", `${Math.min(n * 130, 520)}ms`);
  });
  v?.style.setProperty("--ngc-stage-delay", "0ms");
  var w3 = () => {
    window.setTimeout(() => {
      v?.classList.add("is-stage-visible");
    }, 1680);
  };
  var A3 = document.querySelectorAll("[data-ngc-stagger]");
  A3.forEach((e) => {
    e.querySelectorAll(".ngc-reveal").forEach((t, o2) => {
      t.style.setProperty("--ngc-reveal-delay", `${Math.min(o2 * 70, 560)}ms`);
    });
  });
  var E2 = document.querySelectorAll(".ngc-reveal");
  if ("IntersectionObserver" in window) {
    const e = new IntersectionObserver((t) => {
      t.forEach((o2) => {
        o2.isIntersecting && (o2.target.classList.add("is-stage-visible"), e.unobserve(o2.target));
      });
    }, { rootMargin: "0px 0px -14% 0px", threshold: 0.12 });
    p2.forEach((t) => e.observe(t)), w3();
    const n = new IntersectionObserver((t) => {
      t.forEach((o2) => {
        o2.isIntersecting && (o2.target.classList.add("is-visible"), n.unobserve(o2.target));
      });
    }, { threshold: 0.16 });
    E2.forEach((t) => n.observe(t));
  } else w3(), p2.forEach((e) => e.classList.add("is-stage-visible")), E2.forEach((e) => e.classList.add("is-visible"));
  var d3 = document.querySelector("[data-ngc-deadline-timer]");
  var g2 = document.querySelector("[data-ngc-deadline-label]");
  var m2 = false;
  var u3 = document.querySelector("[data-ngc-form]");
  var a = document.querySelector("[data-ngc-status]");
  var i3 = u3?.querySelector('button[type="submit"]');
  var I2 = "ngt_token";
  var C2 = () => {
    const e = localStorage.getItem(I2)?.trim() ?? "";
    return e.length > 0 ? e : null;
  };
  var f3 = () => {
    if (i3) {
      if (m2) {
        i3.textContent = L3, i3.disabled = true;
        return;
      }
      i3.disabled = false, i3.textContent = C2() ? "Submit NGC entry" : "Login to submit";
    }
  };
  if (d3) {
    let e = Date.parse(d3.dataset.deadline || y3);
    const n = (o2) => String(o2).padStart(2, "0"), t = () => {
      if (!Number.isFinite(e)) return;
      const o2 = e - Date.now();
      if (m2 = o2 <= 0, m2) {
        d3.textContent = M2, d3.classList.add("is-closed"), g2 && (g2.hidden = true), f3();
        return;
      }
      d3.classList.remove("is-closed"), g2 && (g2.hidden = false);
      const s2 = Math.max(0, Math.floor(o2 / 1e3)), c2 = Math.min(99, Math.floor(s2 / 86400)), r2 = Math.floor(s2 % 86400 / 3600), l3 = Math.floor(s2 % 3600 / 60), h3 = s2 % 60;
      d3.textContent = `${n(c2)}:${n(r2)}:${n(l3)}:${n(h3)}`, f3();
    };
    t(), window.setInterval(t, 1e3), $({ ttlMs: 0, forceRefresh: true }).then(({ settings: o2 }) => {
      const s2 = Date.parse(o2.ngcDeadlineIso || y3);
      Number.isFinite(s2) && (e = s2, d3.dataset.deadline = new Date(s2).toISOString(), t());
    }).catch(() => {
    });
  }
  var N3 = () => {
    window.location.href = `/login?next=${encodeURIComponent("/ngc")}`;
  };
  f3();
  u3?.addEventListener("submit", async (e) => {
    if (e.preventDefault(), !a) return;
    if (m2) {
      a.textContent = "The NGC submission deadline has passed.", a.dataset.tone = "err", f3();
      return;
    }
    const n = C2();
    if (!n) {
      N3();
      return;
    }
    if (!u3.checkValidity()) {
      a.textContent = "Fill in the required fields before submitting.", a.dataset.tone = "err", u3.reportValidity();
      return;
    }
    const t = u3.dataset.endpoint?.trim();
    if (!t) {
      a.textContent = "NGC submission endpoint is not connected yet. Frontend form is ready.", a.dataset.tone = "err";
      return;
    }
    const o2 = new FormData(u3), s2 = (r2) => {
      const l3 = o2.get(r2);
      return typeof l3 == "string" ? l3 : "";
    }, c2 = { restriction: s2("restriction"), workUrl: s2("workUrl"), comment: s2("comment").trim() || void 0, rulesAccepted: o2.get("rulesAccepted") === "on" };
    a.textContent = "Submitting...", a.dataset.tone = "neutral", i3 && (i3.disabled = true);
    try {
      const r2 = await fetch(t, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${n}` }, body: JSON.stringify(c2) });
      if (!r2.ok) {
        const l3 = await r2.json().catch(() => null), h3 = typeof l3?.message == "string" ? l3.message : "Submission failed.";
        throw new Error(h3);
      }
      u3.reset(), f3(), a.textContent = "Submission sent.", a.dataset.tone = "ok";
    } catch (r2) {
      a.textContent = r2 instanceof Error ? r2.message : "Submission failed.", a.dataset.tone = "err";
    } finally {
      i3 && (i3.disabled = m2);
    }
  });
})();
