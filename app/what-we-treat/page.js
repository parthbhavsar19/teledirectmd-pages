import { getConditionCategories } from '../../lib/get-data';

const CATEGORY_ICONS = {
  'urgent-care': '\u{1FA7A}',
  'womens-health': '\u2640',
  'sexual-health': '\u{1F512}',
  'skin-conditions': '\u{1F9F4}',
  'bites-and-infestations': '\u{1F43E}',
  'chronic-medication-refills': '\u{1F48A}',
  'wellness-and-lifestyle': '\u2728',
};

export async function generateMetadata() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/what-we-treat`;

  return {
    title: 'What We Treat Online — 50+ Conditions | TeleDirectMD',
    description:
      'TeleDirectMD treats 50+ conditions via same-day video visits. Urgent care, skin conditions, chronic medication refills, women\'s health, and more — $49 flat fee, no insurance required.',
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: 'What We Treat Online — 50+ Conditions | TeleDirectMD',
      description:
        'TeleDirectMD treats 50+ conditions via same-day video visits. Urgent care, skin conditions, chronic medication refills, women\'s health, and more — $49 flat fee, no insurance required.',
      url: pageUrl,
      images: [{ url: `${baseUrl}/assets/social/tdmd-what-we-treat-og.png`, alt: 'TeleDirectMD — What We Treat' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'What We Treat Online — 50+ Conditions | TeleDirectMD',
      description:
        'TeleDirectMD treats 50+ conditions via same-day video visits. $49 flat fee, no insurance required.',
      images: [`${baseUrl}/assets/social/tdmd-what-we-treat-og.png`],
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function WhatWeTreatPage() {
  const categories = getConditionCategories();
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/what-we-treat`;
  const totalConditions = categories.reduce((sum, cat) => sum + cat.conditions.length, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'What We Treat Online — 50+ Conditions | TeleDirectMD',
        description: `TeleDirectMD treats ${totalConditions}+ conditions via same-day video visits with a board-certified physician. $49 flat fee, no insurance required.`,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${baseUrl}#website` },
        publisher: { '@id': `${baseUrl}#organization` },
        author: { '@id': `${baseUrl}/about#physician` },
      },
      {
        '@type': 'MedicalOrganization',
        '@id': `${baseUrl}#organization`,
        name: 'TeleDirectMD',
        url: baseUrl,
        telephone: '+1-678-956-1855',
        email: 'contact@teledirectmd.com',
        description:
          'TeleDirectMD is an MD-only virtual urgent care service offering secure video visits for adults across multiple states, using evidence-based evaluation and safety-first triage.',
      },
      {
        '@type': 'Physician',
        '@id': `${baseUrl}/about#physician`,
        name: 'Parth Bhavsar, MD',
        url: `${baseUrl}/about`,
        affiliation: { '@id': `${baseUrl}#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'What We Treat', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="tdmd-wt-hero">
        <div className="tdmd-container">
          <span className="tdmd-wt-hero-badge">Board-Certified Physician Care</span>
          <h1>What We Treat Online</h1>
          <p className="tdmd-wt-hero-subtitle">
            {totalConditions}+ conditions treated via secure video. Find yours below, review eligibility, and book same-day.
          </p>
          <div className="tdmd-wt-badges">
            <span className="tdmd-wt-badge">Same-day appointments</span>
            <span className="tdmd-wt-badge">$49 flat fee</span>
            <span className="tdmd-wt-badge">No insurance required</span>
            <span className="tdmd-wt-badge">Adults 18+</span>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="tdmd-wt-trust">
        <div className="tdmd-container">
          <div className="tdmd-wt-trust-row">
            <div className="tdmd-wt-trust-item">
              <strong>Evidence-based care</strong>
              <span>We treat common adult conditions safely via video</span>
            </div>
            <div className="tdmd-wt-trust-item">
              <strong>Safety-first triage</strong>
              <span>If you need in-person care, we&rsquo;ll tell you</span>
            </div>
            <div className="tdmd-wt-trust-item">
              <strong>Nationwide access</strong>
              <span>Available in 35+ states</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category sections */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          {categories.map((cat) => (
            <div key={cat.categorySlug} className="tdmd-wt-category" id={`wt-${cat.categorySlug}`}>
              <div className="tdmd-wt-category-header">
                <span className="tdmd-wt-category-icon">{CATEGORY_ICONS[cat.categorySlug] || ''}</span>
                <div>
                  <h2>{cat.categoryName}</h2>
                  <p>{cat.categoryDescription}</p>
                </div>
              </div>
              <div className="tdmd-wt-conditions-grid">
                {cat.conditions.map((c) => (
                  <div key={c.slug} className="tdmd-wt-condition-card">
                    <span className="tdmd-wt-condition-name">{c.name}</span>
                    <div className="tdmd-wt-condition-actions">
                      <a href="/book-online" className="tdmd-btn tdmd-btn-primary tdmd-wt-card-btn">Book Visit</a>
                      <a href={`/${c.slug}`} className="tdmd-wt-learn-more">Learn More →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Ready to see a doctor today?</h3>
              <p>Same-day video visits with a board-certified MD. $49 flat fee, no insurance required.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $49 Visit</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
