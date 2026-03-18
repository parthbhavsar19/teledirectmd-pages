import fs from 'fs';
import path from 'path';

function getReviews() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'data', 'reviews.json'), 'utf-8');
  return JSON.parse(raw);
}

export async function generateMetadata() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/reviews`;

  return {
    title: 'Patient Reviews — TeleDirectMD | 5-Star Rated',
    description:
      'Read real patient reviews of TeleDirectMD. 5-star rated across Google, Zocdoc, Healthgrades, and WebMD. Board-certified physician care at $49 per visit.',
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: 'Patient Reviews — TeleDirectMD | 5-Star Rated',
      description:
        'Read real patient reviews of TeleDirectMD. 5-star rated across Google, Zocdoc, Healthgrades, and WebMD. Board-certified physician care at $49 per visit.',
      url: pageUrl,
      images: [{ url: `${baseUrl}/assets/social/tdmd-reviews-og.png`, alt: 'TeleDirectMD Patient Reviews' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Patient Reviews — TeleDirectMD | 5-Star Rated',
      description:
        'Read real patient reviews of TeleDirectMD. 5-star rated across Google, Zocdoc, Healthgrades, and WebMD.',
      images: [`${baseUrl}/assets/social/tdmd-reviews-og.png`],
    },
    alternates: { canonical: pageUrl },
  };
}

function Stars() {
  return <span className="tdmd-review-stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>;
}

function ReviewCard({ review, featured }) {
  return (
    <div className={`tdmd-review-card${featured ? ' tdmd-review-card-featured' : ''}`}>
      <div className="tdmd-review-card-header">
        <span className="tdmd-review-card-name">{review.name}</span>
        <span className="tdmd-review-source">{review.source}</span>
      </div>
      <Stars />
      <p className="tdmd-review-card-text">&ldquo;{review.text}&rdquo;</p>
    </div>
  );
}

const TAG_LABELS = {
  quick: 'Quick & Easy',
  thorough: 'Thorough Care',
  prescriptions: 'Fast Prescriptions',
  affordable: 'Affordable',
  compassionate: 'Compassionate',
};

const TAG_ORDER = ['quick', 'thorough', 'prescriptions', 'affordable', 'compassionate'];

export default async function ReviewsPage() {
  const data = getReviews();
  const baseUrl = 'https://teledirectmd.com';
  const allReviews = [...data.featured, ...data.reviews];
  const totalCount = allReviews.length;

  const reviewsByTag = {};
  for (const tag of TAG_ORDER) {
    reviewsByTag[tag] = allReviews.filter((r) => r.tags && r.tags.includes(tag));
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "TeleDirectMD — Parth Bhavsar, MD",
    "url": baseUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": String(totalCount),
      "bestRating": "5"
    },
    "review": allReviews.map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5" },
      "reviewBody": r.text
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1) Hero */}
      <section className="tdmd-reviews-hero">
        <div className="tdmd-container">
          <span className="tdmd-reviews-hero-badge">5-Star Rated Across 4 Platforms</span>
          <h1>Patient Reviews</h1>
          <p className="tdmd-reviews-hero-sub">
            Real experiences from real patients across Google, Zocdoc, Healthgrades, and WebMD.
          </p>

          <div className="tdmd-reviews-platforms">
            {data.platforms.map((p) => (
              <a
                key={p.name}
                className="tdmd-reviews-platform-link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.name} &rarr;
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2) Stories That Stand Out */}
      <section className="tdmd-section" id="featured-reviews">
        <div className="tdmd-container">
          <h2>Stories That Stand Out</h2>
          <p>These reviews highlight the TeleDirectMD experience — fast, thorough, compassionate care from a real physician.</p>

          <div className="tdmd-reviews-featured">
            {data.featured.map((review, i) => (
              <ReviewCard key={i} review={review} featured />
            ))}
          </div>
        </div>
      </section>

      {/* 3) Browse by What Matters to You */}
      <section className="tdmd-section tdmd-section-highlight" id="browse-reviews">
        <div className="tdmd-container">
          <h2>Browse by What Matters to You</h2>
          <p>Every patient values something different. Find reviews that match what matters most to you.</p>

          {TAG_ORDER.map((tag) => (
            <div key={tag} className="tdmd-reviews-category" id={`reviews-${tag}`}>
              <h3 className="tdmd-reviews-category-header">{TAG_LABELS[tag]}</h3>
              <div className="tdmd-reviews-grid">
                {reviewsByTag[tag].map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4) Bottom CTA */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
            <div className="tdmd-bottom-cta-copy">
              <h3>Experience the difference.</h3>
              <p>Book a $49 MD video visit — no insurance required, no subscription, just exceptional care.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
