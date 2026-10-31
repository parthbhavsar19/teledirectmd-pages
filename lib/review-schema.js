// Centralized physician review data for the visible rating copy across the site.
// Counts and averages read from each platform's public profile page on
// 2026-10-31 (REVIEW_COUNTS_AS_OF). Keep this as the single source of truth:
// update the counts and the date here and every page picks up the new totals.
//
// ratingValue feeds the blended average. displayRating is the average exactly
// as the platform shows it, so the page never rounds a platform up (Zocdoc
// shows 4.95, which toFixed(1) would turn into 5.0). Google shows 5.0, but its
// 54 ratings include one 3-star, so its true mean (53 x 5 + 3) / 54 = 4.96 is
// used for the blend.

export const REVIEW_COUNTS_AS_OF = '2026-10-31';
export const REVIEW_COUNTS_AS_OF_LABEL = 'October 31, 2026';

export const REVIEW_PLATFORMS = [
  {
    name: 'Google',
    url: 'https://share.google/I01V6IEqvDtZb9CM2',
    ratingValue: 4.96,
    displayRating: '5.0',
    reviewCount: 54,
  },
  {
    name: 'WebMD',
    url: 'https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview',
    ratingValue: 5.0,
    displayRating: '5.0',
    reviewCount: 47,
  },
  {
    name: 'Healthgrades',
    url: 'https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7',
    ratingValue: 5.0,
    displayRating: '5.0',
    reviewCount: 25,
  },
  {
    name: 'Zocdoc',
    url: 'https://www.zocdoc.com/doctor/parth-bhavsar-md-652258',
    ratingValue: 4.95,
    displayRating: '4.95',
    reviewCount: 86,
  },
];

export const TOTAL_REVIEW_COUNT = REVIEW_PLATFORMS.reduce(
  (sum, p) => sum + p.reviewCount,
  0,
);

// Weighted aggregate across platforms, kept at 2 decimals so copy reports the
// true blended value (4.97 as of 2026-10-31) rather than rounding up to 5.0.
export const AGGREGATE_RATING_VALUE = (
  REVIEW_PLATFORMS.reduce((sum, p) => sum + p.ratingValue * p.reviewCount, 0) /
  TOTAL_REVIEW_COUNT
).toFixed(2);

/**
 * AggregateRating / Review markup is intentionally NOT emitted.
 *
 * Google's review-snippet policy excludes self-serving reviews: ratings a
 * business publishes about itself on its own Organization/LocalBusiness/
 * MedicalBusiness pages, and ratings aggregated from other sites (here Google,
 * Zocdoc, WebMD, Healthgrades). Such markup is ineligible for stars and can draw
 * a manual action. The visible rating copy on pages is unaffected.
 *
 * Both helpers return nothing so every caller drops the property
 * (JSON.stringify omits undefined, and spreading {} adds nothing).
 */
export function getAggregateRating() {
  return undefined;
}

/**
 * Returns an array of Review JSON-LD fragments, one per review platform,
 * treating each platform's average star rating as an authoritative 3rd-party
 * rating aggregate. Useful as the `review` property on Physician.
 */
export function getPlatformReviews() {
  return REVIEW_PLATFORMS.map((p) => ({
    '@type': 'Review',
    author: { '@type': 'Organization', name: p.name, url: p.url },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(p.ratingValue.toFixed(1)),
      bestRating: '5',
    },
    reviewBody: `Aggregate of ${p.reviewCount} verified patient ratings on ${p.name} for Dr. Parth Bhavsar, MD.`,
    itemReviewed: { '@type': 'Physician', name: 'Parth Bhavsar, MD' },
  }));
}

/**
 * Convenience: returns the standard physician review block to merge into
 * a Physician or MedicalOrganization JSON-LD node:
 *   { ...physician, ...getReviewBlock() }
 */
export function getReviewBlock() {
  return {};
}
