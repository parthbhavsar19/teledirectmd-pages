// Centralized physician review data for AggregateRating + Review schema.
// Counts verified from Google, Zocdoc, WebMD, and Healthgrades dashboards,
// last refreshed 2026-07-15. Keep this as the single source of truth —
// update the counts here and every page on the site will pick up the new
// totals automatically.

export const REVIEW_PLATFORMS = [
  {
    name: 'Google',
    url: 'https://share.google/I01V6IEqvDtZb9CM2',
    ratingValue: 5.0,
    reviewCount: 34,
  },
  {
    name: 'WebMD',
    url: 'https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview',
    ratingValue: 5.0,
    reviewCount: 35,
  },
  {
    name: 'Healthgrades',
    url: 'https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7',
    ratingValue: 5.0,
    reviewCount: 19,
  },
  {
    name: 'Zocdoc',
    url: 'https://www.zocdoc.com/doctor/parth-bhavsar-md-652258',
    ratingValue: 4.94,
    reviewCount: 85,
  },
];

export const TOTAL_REVIEW_COUNT = REVIEW_PLATFORMS.reduce(
  (sum, p) => sum + p.reviewCount,
  0,
);

// Weighted aggregate across platforms. Zocdoc sits at 4.94, so the blended
// average is below 5.0 — kept at 2 decimals so copy/schema report the true
// value (currently 4.97) rather than rounding up to a flat 5.0.
export const AGGREGATE_RATING_VALUE = (
  REVIEW_PLATFORMS.reduce((sum, p) => sum + p.ratingValue * p.reviewCount, 0) /
  TOTAL_REVIEW_COUNT
).toFixed(2);

/**
 * Returns the AggregateRating JSON-LD fragment.
 * Attach to a Physician or MedicalOrganization node via `aggregateRating`.
 */
export function getAggregateRating() {
  return {
    '@type': 'AggregateRating',
    ratingValue: AGGREGATE_RATING_VALUE,
    reviewCount: String(TOTAL_REVIEW_COUNT),
    bestRating: '5',
    worstRating: '1',
  };
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
  return {
    aggregateRating: getAggregateRating(),
    review: getPlatformReviews(),
  };
}
