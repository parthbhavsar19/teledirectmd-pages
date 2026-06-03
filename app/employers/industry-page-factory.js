/**
 * Shared factory for per-industry employer landing pages.
 *
 * Each /employers/[industry] page passes its industry data here. The factory
 * builds the JSON-LD entity graph (with full @id references back to the
 * canonical Physician + Organization defined on /employers) and a consistent
 * page layout that inherits the existing Fraunces + DM Sans typography and
 * .tdmd-emp design tokens.
 *
 * Why a factory instead of full duplication:
 *   - Schema graph is identical across industries except for the Service
 *     audience type and FAQ entities; centralizing avoids divergent drift
 *   - Layout is consistent so internal-linking heuristics treat them as a hub
 *   - Each industry page still has its own URL, H1, and unique body copy so
 *     Google does NOT see them as doorway/duplicate content
 *
 * INDUSTRY DATA SHAPE:
 * {
 *   slug:               'trucking',
 *   name:               'Trucking & Logistics',
 *   shortName:          'trucking',
 *   audienceLabel:      'OTR Drivers, Owner-Operators, Fleet HR',
 *   heroHeadline:       'Virtual care for the people who keep America moving.',
 *   heroHeadlineEm:     'No truck stop required.',
 *   heroSub:            '90-120 word physician-led intro mentioning the actual clinical pain points + cost framing',
 *   workforceProfile:   { count: '3.5M', source: 'BLS 2026', notes: '...' },
 *   commonComplaints:   [{ name, why, citations: [{label, url}] }, ... 8-12 items]
 *   regulatoryNotes:    'short paragraph + bullet list of what the industry deals with',
 *   whatWeSolve:        [{ headline, body }, ... 3-5 items]
 *   whatWeDont:         [{ headline, body }, ... 2-3 items — crucial disclaimer block]
 *   employerEconomics:  'short paragraph with KFF/Mercer-cited cost data',
 *   faqs:               [{ q, a }, ... 3 items, industry-specific]
 * }
 */

const SITE = 'https://teledirectmd.com';

export function buildIndustryJsonLd(industry) {
  const url = `${SITE}/employers/${industry.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'For Employers', item: `${SITE}/employers/` },
          { '@type': 'ListItem', position: 3, name: industry.name, item: url },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${industry.name} Telehealth Benefit | TeleDirectMD`,
        description: industry.metaDescription,
        inLanguage: 'en-US',
        breadcrumb: { '@id': `${url}#breadcrumbs` },
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${SITE}/#organization` },
        primaryImageOfPage: `${SITE}/og-employers.jpg`,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.tdmd-emp-hero-sub', '.tdmd-emp-faq'],
        },
      },
      // Reference canonical Physician + Organization (defined on /employers)
      // so the entire site stays one consistent entity graph.
      {
        '@type': ['Organization', 'MedicalBusiness'],
        '@id': `${SITE}/#organization`,
        name: 'TeleDirectMD',
        url: SITE,
        logo: `${SITE}/logo.webp`,
        founder: { '@id': `${SITE}/#physician` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        serviceType: `${industry.name} Telehealth Benefit`,
        provider: { '@id': `${SITE}/#organization` },
        description: `Direct-pay virtual care endorsed by ${industry.name.toLowerCase()} employers for their adult workforce (18+). Zero employer cost. Employees access a preferred employer per-visit rate (set in the partnership agreement) or use BCBS, Aetna, or UnitedHealthcare in-network. Board-certified family medicine physician. 41 states + DC, with the physician roster currently expanding.`,
        audience: {
          '@type': 'BusinessAudience',
          audienceType: industry.audienceLabel,
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          eligibleCustomerType: 'https://schema.org/Business',
        },
        areaServed: 'United States',
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.tdmd-emp-faq'] },
        mainEntity: industry.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

export function buildIndustryMetadata(industry) {
  const url = `${SITE}/employers/${industry.slug}/`;
  return {
    title: `${industry.name} Telehealth Benefit | $0 Employer Cost | TeleDirectMD`,
    description: industry.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: `${industry.name} Telehealth | $0 Employer Cost | TeleDirectMD`,
      description: industry.metaDescription,
      url,
      images: [`${SITE}/og-employers.jpg`],
    },
    twitter: { card: 'summary_large_image' },
  };
}
