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
// SETUP: GA4 Measurement ID is configured below. GA4 loads ONLY on public
//   marketing pages (never on /book-online or downstream), so no PHI reaches
//   Google. Source-token capture works regardless.
//
// ATTRIBUTION (source → booking intent), HIPAA-safe:
//   When a visitor clicks any "Book" link, we fire a non-PHI `select_source`
//   event carrying sid / src_page / source / campaign / condition as GA4
//   custom-dimension params — captured on the PUBLIC page, BEFORE the hard-stop.
//   This makes "which visibility source produced booking intent" reportable in
//   GA4 without ever tracking the patient through the booking/intake flow.
//   Register these as event-scoped custom dimensions in GA4 Admin:
//     tdmd_sid, tdmd_src_page, tdmd_source, tdmd_campaign, tdmd_condition
//   and mark `select_source` as a Key Event to count it as a conversion.
// ──────────────────────────────────────────────────────────────────────

import { useEffect } from 'react';

// TeleDirectMD GA4 Measurement ID (property 486446598).
const GA4_MEASUREMENT_ID = 'G-5L6V2GJ84V';

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
    // ALSO: fire a non-PHI `select_source` GA4 event on Book-link click so
    // "source → booking intent" becomes reportable (see header block).
    try {
      const src = getCookie('tdmd_src');
      const parsed = src ? JSON.parse(decodeURIComponent(src)) : {};
      const sid = parsed.sid || '';
      const utm_source = parsed.utm_source || '';
      const utm_campaign = parsed.utm_campaign || '';
      const landing = parsed.landing || '';
      // The condition/topic the visitor is booking FROM = the current public
      // page path (never PHI — it's a public marketing URL slug).
      const currentSlug = window.location.pathname;

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
            // Attach a one-time click handler that fires the attribution event
            // while we are STILL on the public page (before the GA4 hard-stop
            // on /book-online). Guard against double-binding.
            if (!a.dataset.tdmdBound) {
              a.dataset.tdmdBound = '1';
              a.addEventListener('click', () => {
                try {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'select_source', {
                      tdmd_sid: sid || '(none)',
                      tdmd_src_page: landing || currentSlug,
                      tdmd_source: utm_source || '(direct)',
                      tdmd_campaign: utm_campaign || '(none)',
                      tdmd_condition: currentSlug,
                    });
                  }
                } catch (e) { /* never block navigation */ }
              }, { passive: true });
            }
          } catch (e) { /* skip malformed link */ }
        });
      };
      decorate();
      // Re-decorate shortly after mount to catch links rendered by client
      // components / hydration that weren't in the DOM on first pass.
      setTimeout(decorate, 1200);
    } catch (e) { /* no-op */ }

    // Load GA4 only on public pages AND only if an ID is configured.
    // IDEMPOTENT: this site may already load GA4 via a GTM / platform
    // integration. If gtag for THIS id is already present, we DO NOT inject a
    // second loader (that would double-count) — we just reuse window.gtag so
    // the select_source event above still fires. We only self-load if nothing
    // else has set up gtag for this measurement id.
    if (GA4_MEASUREMENT_ID && !isBlockedPath(path)) {
      const alreadyLoaded =
        typeof window.gtag === 'function' ||
        !!document.querySelector(
          `script[src*="googletagmanager.com/gtag/js"], script[src*="googletagmanager.com/gtm.js"]`
        );

      // Ensure gtag exists so select_source can be pushed regardless.
      window.dataLayer = window.dataLayer || [];
      if (typeof window.gtag !== 'function') {
        window.gtag = function gtag() { window.dataLayer.push(arguments); };
      }

      if (!alreadyLoaded) {
        const s = document.createElement('script');
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
        document.head.appendChild(s);
        window.gtag('js', new Date());
        // anonymize_ip + no ad personalization = lower-risk marketing analytics
        window.gtag('config', GA4_MEASUREMENT_ID, {
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
        });
      }
    }
  }, []);

  return null;
}
