// Content dates shown as "Last reviewed" / "Last updated" and emitted as
// dateModified / lastReviewed in JSON-LD.
//
// These are real dates, edited by hand. They used to be `new Date()` at build
// time, which stamped every page "reviewed today" on every deploy whether or not
// anyone had looked at it. Search engines discount that, and for medical pages it
// claims a physician review that did not happen.
//
// When content in a family changes (or Dr. Bhavsar re-reviews it), bump that
// family's date in the same commit. Never compute these at build time.

export const CONTENT_DATES = {
  conditionPages: '2026-10-07',       // app/[slug]/[conditionSlug], data/conditions
  nationalConditionPages: '2026-10-07', // app/[slug]/NationalConditionPage.js
  stateLandingPages: '2026-10-07',    // app/[slug]/StateLandingPage.js, data/state-templates
  whoWeServe: '2026-10-07',           // app/who-we-serve/[segment]
  useCasePages: '2026-10-07',         // app/use-case, lib/use-case-pages-config.js
  comparePages: '2026-10-07',         // app/compare, lib/compare-pages-config.js
  costPages: '2026-10-07',            // app/cost, lib/cost-pages-config.js
  faq: '2026-10-07',                  // app/faq
  faqDeepDive: '2026-10-07',          // app/faq/deep-dive
  about: '2026-10-07',                // app/about
  statesWeServe: '2026-10-07',        // app/states-we-serve, data/states.json
  insurance: '2026-09-26',            // app/insurance/page.js
  reviews: '2026-10-07',              // app/reviews, data/reviews.json
};

export function contentDate(key) {
  const d = CONTENT_DATES[key];
  if (!d) throw new Error(`lib/content-dates.js: no date for "${key}"`);
  return d;
}
