'use client';

// ─────────────────────────────────────────────────────────────────────────────
// TeleDirectMD Analytics + Attribution (HIPAA-safe, marketing-only)
//
// WHAT THIS DOES (plain English):
//   1) Captures "how the visitor arrived" (utm_* params, referrer, first landing
//      page) into a first-party cookie the FIRST time they hit the site. This is
//      NOT personal data — just marketing source info.
//   2) Loads GA4 ONLY on public marketing pages. It hard-stops (loads nothing)
//      on /book-online and anything downstream, so no PHI ever reaches Google.
//
// HIPAA NOTE: Google will not sign a BAA for standard GA4, so GA4 must never run
//   where patients enter info. The BLOCKED_PREFIXES list below is that hard stop.
//
// SETUP: paste your GA4 Measurement ID into GA4_MEASUREMENT_ID below. Until you
//   do, GA4 stays dormant (the source-token capture still works regardless).
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from 'react';

// TODO(parth): replace with your real GA4 ID, e.g. 'G-XXXXXXXXXX'. Dormant until set.
const GA4_MEASUREMENT_ID = '';

// Pages where NO analytics may load (booking / intake / anything PHI-adjacent).
const BLOCKED_PREFIXES = ['/book-online', '/verify', '/download'];

function isBlockedPath(pathname) {
  return BLOCKED_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/') || pathname.startsWith(p));
}

// Read a cookie by name.
function getCookie(name) {
  const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return m ? decodeURIComponent(m.pop()) : '';
}

// Persist the very first marketing touch (first-party, 90 days).
function captureAttribution() {
  try {
    if (getCookie('tdmd_src')) return; // already captured (first-touch wins)
    const url = new URL(window.location.href);
    const p = url.searchParams;
    const data = {
      utm_source: p.get('utm_source') || '',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      utm_term: p.get('utm_term') || '',
      utm_content: p.get('utm_content') || '',
      gclid: p.get('gclid') || '',            // Google Ads click id
      landing: url.pathname,                  // first page seen
      referrer: document.referrer || '',
      ts: new Date().toISOString(),
      // random, non-identifying token so a booking can be reconciled to a source
      // inside YOUR systems without sending identity to any third party
      sid: 'tdmd-' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36),
    };
    const val = encodeURIComponent(JSON.stringify(data));
    document.cookie = `tdmd_src=${val}; path=/; max-age=${60 * 60 * 24 * 90}; SameSite=Lax`;
  } catch (e) {
    /* no-op: attribution must never break the page */
  }
}

export default function Analytics() {
  useEffect(() => {
    const path = window.location.pathname;
    // Always safe to capture marketing source on public pages.
    if (!isBlockedPath(path)) {
      captureAttribution();
    }
    // Make every "Book" link carry the source token forward to /book-online
    // (and onward to Acuity). This keeps the "how they arrived" tag attached
    // as the visitor moves toward scheduling, without loading any tracker.
    try {
      const src = getCookie('tdmd_src');
      if (src) {
        const parsed = JSON.parse(decodeURIComponent(src));
        const sid = parsed.sid || '';
        const utm_source = parsed.utm_source || '';
        const utm_campaign = parsed.utm_campaign || '';
        const landing = parsed.landing || '';
        const decorate = () => {
          document.querySelectorAll('a[href*="/book-online"]').forEach((a) => {
            try {
              const u = new URL(a.href, window.location.origin);
              if (!u.searchParams.get('sid')) {
                if (sid) u.searchParams.set('sid', sid);
                if (utm_source) u.searchParams.set('utm_source', utm_source);
                if (utm_campaign) u.searchParams.set('utm_campaign', utm_campaign);
                if (landing) u.searchParams.set('src_page', landing);
                a.href = u.pathname + u.search + u.hash;
              }
            } catch (e) { /* skip malformed link */ }
          });
        };
        decorate();
      }
    } catch (e) { /* no-op */ }

    // Load GA4 only on public pages AND only if an ID is configured.
    if (GA4_MEASUREMENT_ID && !isBlockedPath(path)) {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      // anonymize_ip + no ad personalization = lower-risk marketing analytics
      gtag('config', GA4_MEASUREMENT_ID, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
    }
  }, []);

  return null;
}
