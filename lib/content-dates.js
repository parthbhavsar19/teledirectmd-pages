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
  conditionPages: '2026-10-27',       // app/[slug]/[conditionSlug], data/conditions
  nationalConditionPages: '2026-10-27', // app/[slug]/NationalConditionPage.js
  stateLandingPages: '2026-10-07',    // app/[slug]/StateLandingPage.js, data/state-templates
  whoWeServe: '2026-10-07',           // app/who-we-serve/[segment]
  useCasePages: '2026-10-07',         // app/use-case, lib/use-case-pages-config.js
  comparePages: '2026-10-13',         // app/compare, lib/compare-pages-config.js
  costPages: '2026-10-13',            // app/cost/[slug], lib/cost-pages-config.js
  costHub: '2026-11-25',              // app/cost/page.js (hub only)
  // The date someone last re-checked the prices on the cost guides against their
  // sources. Shown as "Prices checked". Bump only after an actual price check.
  costPrices: '2026-10-13',
  urgentCareCost: '2026-11-24',       // app/cost/urgent-care-cost-without-insurance, lib/urgent-care-cost-data.js
  conditionCostPages: '2026-11-24',   // UTI, sinus, sore throat, flu total-cost pages, lib/condition-cost-data.js
  doctorVisitCost: '2026-11-24',      // app/cost/online-doctor-visit-cost (telehealth prices checked this day), lib/condition-cost-data.js
  erVisitCost: '2026-11-24',          // app/cost/er-visit-cost-without-insurance (sources read this day, ET), lib/condition-cost-data.js
  faq: '2026-10-07',                  // app/faq
  faqDeepDive: '2026-11-23',          // app/faq/deep-dive
  about: '2026-10-07',                // app/about
  statesWeServe: '2026-10-07',        // app/states-we-serve, data/states.json
  insurance: '2026-10-07',            // app/insurance
  reviews: '2026-10-31',              // app/reviews, data/reviews.json
};

export function contentDate(key) {
  const d = CONTENT_DATES[key];
  if (!d) throw new Error(`lib/content-dates.js: no date for "${key}"`);
  return d;
}
