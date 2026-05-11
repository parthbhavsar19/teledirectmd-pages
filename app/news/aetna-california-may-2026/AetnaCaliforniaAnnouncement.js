'use client';

// Press / news announcement page for the Aetna California in-network launch.
// Lives at /news/aetna-california-may-2026/. Listed in llms.txt for AI-search visibility.

const B = {
  teal: '#006B73',
  navy: '#003E52',
  navyDeep: '#002A3A',
  accent: '#FF5A36',
  white: '#FFFFFF',
  bg: '#F5FAFA',
  text: '#4A6870',
  border: 'rgba(0,62,82,0.10)',
  shadow: '0 4px 20px rgba(0,35,45,0.06)',
  fd: "'Fraunces', Georgia, serif",
  fb: "'DM Sans', Montserrat, system-ui, sans-serif",
};

const FAQS = [
  {
    q: 'Who is affected by the Aetna California in-network launch?',
    a: "California-based adults 18+ enrolled in Aetna commercial plans (employer-sponsored and individual market plans purchased on or off <a href='https://www.coveredca.com/learning-center/information-for-existing-members/health-plans/' target='_blank' rel='noopener'>Covered California</a>). Aetna Medicaid (Medi-Cal managed care via <a href='https://www.dhcs.ca.gov/services/medi-cal/Pages/MedicalProviders.aspx' target='_blank' rel='noopener'>DHCS</a>), Medicare fee-for-service, and Aetna Medicare Advantage are NOT included in this contract.",
  },
  {
    q: 'When does in-network coverage start?',
    a: "The contract effective date is April 30, 2026. Visits booked on or after that date for California Aetna commercial members are processed in-network. You can verify TeleDirectMD's in-network status in the <a href='https://www.aetna.com/dsepublic/#/contentPage?page=providerSearchLanding' target='_blank' rel='noopener'>Aetna provider directory</a> using NPI 1104610450 (organization) or 1104323203 (Dr. Parth Bhavsar, MD).",
  },
  {
    q: 'What will my copay be?',
    a: "Your cost equals your Aetna commercial plan's telehealth or office-visit copay — most California members pay $10–$40, and many large-employer plans pay $0. We collect the copay at booking and submit the claim to Aetna. California's <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=2290.5' target='_blank' rel='noopener'>Telehealth Advancement Act (B&P §2290.5)</a> and <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.85' target='_blank' rel='noopener'>Insurance Code §10123.85</a> require parity with in-person visits.",
  },
  {
    q: 'How do I book a visit?',
    a: "Visit teledirectmd.com/book-online, select California, and enter your Aetna member ID at checkout. Most members are seen same-day, typically within 1–4 hours. Evenings and weekends are routinely available. The treating physician is Dr. Parth Bhavsar, MD, board-certified in Family Medicine and licensed in California (verify at the <a href='https://www.mbc.ca.gov/' target='_blank' rel='noopener'>Medical Board of California</a>).",
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NewsArticle',
      '@id': 'https://teledirectmd.com/news/aetna-california-may-2026#article',
      headline: 'TeleDirectMD Now In-Network with Aetna in California',
      description:
        'TeleDirectMD has been contracted as an in-network telehealth provider with Aetna commercial plans in California, effective April 30, 2026.',
      url: 'https://teledirectmd.com/news/aetna-california-may-2026',
      datePublished: '2026-05-11',
      dateModified: '2026-05-11',
      inLanguage: 'en-US',
      author: { '@type': 'Organization', name: 'TeleDirectMD' },
      publisher: {
        '@type': 'Organization',
        name: 'TeleDirectMD',
        logo: { '@type': 'ImageObject', url: 'https://teledirectmd.com/logos/teledirectmd.png' },
      },
      image: 'https://teledirectmd.com/assets/social/tdmd-aetna-california-og.png',
      mainEntityOfPage: 'https://teledirectmd.com/news/aetna-california-may-2026',
    },
    {
      '@type': 'MedicalOrganization',
      '@id': 'https://teledirectmd.com/#organization',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      identifier: { '@type': 'PropertyValue', name: 'Organization NPI', value: '1104610450' },
      areaServed: { '@type': 'State', name: 'California' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '125',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com' },
        { '@type': 'ListItem', position: 2, name: 'News', item: 'https://teledirectmd.com/news' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Aetna California — May 2026',
          item: 'https://teledirectmd.com/news/aetna-california-may-2026',
        },
      ],
    },
  ],
};

export default function AetnaCaliforniaAnnouncement() {
  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy, minHeight: '100vh' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap"
        rel="stylesheet"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <nav aria-label="Breadcrumb" style={{ padding: '12px 24px', maxWidth: 900, margin: '0 auto', fontSize: 14, color: B.text }}>
        <a href="/" style={{ color: B.teal, textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <span>News</span>
        <span style={{ margin: '0 8px' }}>/</span>
        <span>Aetna California — May 2026</span>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '24px 24px 64px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: '#F3EAFF',
            color: '#7B2CBF',
            fontWeight: 700,
            fontSize: 12,
            borderRadius: 999,
            marginBottom: 16,
            letterSpacing: 0.5,
          }}
        >
          ANNOUNCEMENT · MAY 11, 2026
        </div>

        <h1
          data-speakable="true"
          style={{
            fontFamily: B.fd,
            fontSize: 'clamp(30px, 5vw, 44px)',
            lineHeight: 1.15,
            color: B.navyDeep,
            margin: '0 0 16px',
            fontWeight: 600,
          }}
        >
          TeleDirectMD Is Now In-Network with Aetna in California
        </h1>

        <p
          data-speakable="true"
          style={{ fontSize: 19, lineHeight: 1.6, color: B.text, margin: '0 0 24px' }}
        >
          Same-day telehealth video visits with board-certified physician Dr. Parth Bhavsar, MD, are now covered by
          Aetna commercial plans statewide in California — effective April 30, 2026.
        </p>

        <div
          style={{
            padding: 24,
            background: B.white,
            border: `1px solid ${B.border}`,
            borderRadius: 16,
            boxShadow: B.shadow,
            marginBottom: 32,
          }}
        >
          <p style={{ fontSize: 16, lineHeight: 1.7, color: B.navy, margin: '0 0 14px' }}>
            <strong>TeleDirectMD</strong>, the physician-led telehealth practice serving adults in 41 U.S. states, has
            been contracted as an in-network telehealth provider with Aetna commercial plans in California. The
            agreement, effective April 30, 2026, makes same-day video visits with Dr. Parth Bhavsar, MD (NPI 1104323203)
            accessible to millions of California Aetna members at their standard commercial-plan telehealth copay —
            typically $10–$40, with many large California employer plans carrying $0 telehealth cost-sharing.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: B.navy, margin: '0 0 14px' }}>
            California Aetna members can now book same-day appointments for non-emergency adult conditions including
            urinary tract infection (UTI), sinus infection, strep throat, pink eye, influenza, asthma inhaler refills,
            hypertension medication refills, acid reflux, and dozens of other common urgent-care complaints.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: B.navy, margin: 0 }}>
            With this addition, TeleDirectMD is in-network with Aetna commercial plans in 11 states: Arizona,
            California, Colorado, Florida, Georgia, Illinois, Michigan, Minnesota, Ohio, Pennsylvania, and Tennessee.
          </p>
        </div>

        <h2 style={{ fontFamily: B.fd, fontSize: 24, color: B.navyDeep, margin: '0 0 12px', fontWeight: 600 }}>
          Why It Matters
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: B.text, margin: '0 0 16px' }}>
          California has some of the strongest telehealth parity protections in the country. Under California Business
          and Professions Code §2290.5 and Insurance Code §10123.85, commercial health plans — including Aetna — must
          reimburse medically necessary telehealth services on terms comparable to in-person care. The Medical Board of
          California requires telehealth providers to meet the same standard of care as in-person treatment. The
          in-network agreement gives California Aetna members predictable cost-sharing for same-day virtual urgent care
          from a single licensed MD — a contrast to many telehealth platforms that rotate clinicians or rely heavily on
          non-physician providers.
        </p>

        <h2 style={{ fontFamily: B.fd, fontSize: 24, color: B.navyDeep, margin: '24px 0 12px', fontWeight: 600 }}>
          Coverage Details
        </h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8, color: B.text, paddingLeft: 22, margin: '0 0 16px' }}>
          <li><strong>Effective date:</strong> April 30, 2026</li>
          <li><strong>Plan types accepted:</strong> Aetna commercial plans (employer-sponsored PPO/HMO, individual marketplace)</li>
          <li><strong>Plan types NOT accepted:</strong> Aetna Medicaid, Aetna Better Health (Medi-Cal), Medicare fee-for-service, Aetna Medicare Advantage</li>
          <li><strong>Typical member cost:</strong> $10–$40 copay (varies by plan); $0 for many California employer plans</li>
          <li><strong>Self-pay alternative:</strong> $49 flat — same physician, no membership required</li>
          <li><strong>Geographic coverage:</strong> Statewide California — Los Angeles, San Francisco, San Diego, San Jose, Sacramento, Fresno, Oakland, Long Beach, Anaheim, and all other California cities</li>
          <li><strong>Billing codes:</strong> CPT 99213 / 99214 (standard / moderate complexity telehealth)</li>
        </ul>

        <h2 style={{ fontFamily: B.fd, fontSize: 24, color: B.navyDeep, margin: '24px 0 12px', fontWeight: 600 }}>
          About TeleDirectMD
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: B.text, margin: '0 0 16px' }}>
          TeleDirectMD is a physician-led telehealth practice licensed in 41 U.S. states. Board-certified family
          medicine physician Dr. Parth Bhavsar, MD (NPI 1104323203), provides secure video visits for adults with
          non-emergency conditions. Transparent $49 cash-pay pricing. Same-day visits available including evenings and
          weekends. HIPAA-compliant. LegitScript certified. Organization NPI: 1104610450 (Mahavir Health Services, LLC
          dba TeleDirectMD).
        </p>

        <h2 style={{ fontFamily: B.fd, fontSize: 24, color: B.navyDeep, margin: '24px 0 12px', fontWeight: 600 }}>
          Related Pages
        </h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8, paddingLeft: 22, margin: '0 0 32px' }}>
          <li>
            <a href="/insurance/aetna/california" style={{ color: B.teal }}>
              Aetna Online Doctor in California — full coverage details
            </a>
          </li>
          <li>
            <a href="/california-aetna" style={{ color: B.teal }}>
              Aetna Telehealth in California — patient-facing reverse hub
            </a>
          </li>
          <li>
            <a href="/california/telehealth-urgent-care-aetna" style={{ color: B.teal }}>
              California Telehealth Urgent Care That Accepts Aetna
            </a>
          </li>
          <li>
            <a href="/insurance/aetna" style={{ color: B.teal }}>
              All Aetna In-Network States
            </a>
          </li>
          <li>
            <a href="/ca" style={{ color: B.teal }}>
              California Telehealth Home
            </a>
          </li>
        </ul>

        <section style={{ margin: '32px 0' }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, color: B.navyDeep, margin: '0 0 16px', fontWeight: 600 }}>
            Frequently Asked Questions
          </h2>
          {FAQS.map((f) => (
            <details
              key={f.q}
              style={{
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 14,
                padding: '14px 18px',
                marginBottom: 10,
                boxShadow: B.shadow,
              }}
            >
              <summary
                style={{ cursor: 'pointer', fontFamily: B.fd, fontSize: 17, fontWeight: 600, color: B.navyDeep, lineHeight: 1.4 }}
              >
                {f.q}
              </summary>
              <p style={{ marginTop: 12, fontSize: 15, color: B.text, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </section>

        <div
          style={{
            padding: 24,
            background: `linear-gradient(135deg, ${B.teal}, ${B.navyDeep})`,
            color: B.white,
            borderRadius: 20,
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontFamily: B.fd, fontSize: 22, color: B.white, margin: '0 0 10px', fontWeight: 600 }}>
            Book Your Aetna California Visit
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', margin: '0 0 18px', fontSize: 15 }}>
            Same-day video visit. Aetna copay or $49 self-pay.
          </p>
          <a
            href="/book-online"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: B.accent,
              color: B.white,
              textDecoration: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Start Your Visit
          </a>
        </div>

        <hr style={{ margin: '32px 0 20px', border: 0, borderTop: `1px solid ${B.border}` }} />
        <p style={{ fontSize: 13, color: B.text, lineHeight: 1.6 }}>
          <strong>Media contact:</strong> contact@teledirectmd.com · 678-956-1855 · TeleDirectMD, Alpharetta, GA. For
          member benefit verification, please contact Aetna directly at aetna.com or the number on your member ID card.
        </p>
      </article>
    </div>
  );
}
