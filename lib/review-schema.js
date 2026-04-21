// Centralized physician review data for AggregateRating + Review schema.
// Real counts fetched from Google, WebMD, Healthgrades, Zocdoc on 2026-04-21.
// Keep this as the single source of truth — update the counts here and every
// insurance page will pick up the new totals.

export const REVIEW_PLATFORMS = [
  {
    name: 'Google',
    url: 'https://share.google/I01V6IEqvDtZb9CM2',
    ratingValue: 5.0,
    reviewCount: 20,
  },
  {
    name: 'WebMD',
    url: 'https://doctor.webmd.com/doctor/parth-bhavsar-e293ceba-555d-466e-ab94-d82e02d268db-overview',
    ratingValue: 5.0,
    reviewCount: 21,
  },
  {
    name: 'Healthgrades',
    url: 'https://www.healthgrades.com/physician/dr-parth-bhavsar-xynq9m7',
    ratingValue: 5.0,
    reviewCount: 11,
  },
  {
    name: 'Zocdoc',
    url: 'https://www.zocdoc.com/doctor/parth-bhavsar-md-652258',
    ratingValue: 5.0,
    reviewCount: 18,
  },
];

export const TOTAL_REVIEW_COUNT = REVIEW_PLATFORMS.reduce(
  (sum, p) => sum + p.reviewCount,
  0,
);

// Weighted aggregate — all platforms currently at 5.0, so simple average is 5.0.
export const AGGREGATE_RATING_VALUE = (
  REVIEW_PLATFORMS.reduce((sum, p) => sum + p.ratingValue * p.reviewCount, 0) /
  TOTAL_REVIEW_COUNT
).toFixed(1);

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
