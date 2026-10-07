'use client';

// Announcement: Anthem Blue Cross (California) in-network, effective 2026-09-23.
// Lives at /news/anthem-blue-cross-california-september-2026/.
// The durable coverage page is /insurance/blue-cross-blue-shield/california/.

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

const URL = 'https://teledirectmd.com/news/anthem-blue-cross-california-september-2026';

const FAQS = [
  {
    q: 'Which Anthem Blue Cross plans are included?',
    a: 'Anthem Blue Cross Commercial PPO, Commercial Indemnity, and Medicare PPO plans in California. Anthem Blue Cross HMO, Medicare Advantage HMO, and Medi-Cal plans are not included.',
  },
  {
    q: 'When does in-network coverage start?',
    a: 'September 23, 2026. Visits on or after that date for members of the included plans are billed to Anthem Blue Cross as in-network.',
  },
  {
    q: 'Is this the same as Blue Shield of California?',
    a: 'No. Blue Shield of California is a separate company and is not contracted with TeleDirectMD. Check the company name on your member ID card.',
  },
  {
    q: 'How do I book?',
    a: "Go to <a href='/book-online/'>teledirectmd.com/book-online</a>, choose insurance, and enter your Anthem Blue Cross member ID. You need to be physically in California during the visit.",
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NewsArticle',
      '@id': `${URL}#article`,
      headline: 'TeleDirectMD Now In-Network with Anthem Blue Cross in California',
      description: 'TeleDirectMD is in-network with Anthem Blue Cross Commercial PPO, Commercial Indemnity, and Medicare PPO plans in California, effective September 23, 2026.',
      url: URL,
      datePublished: '2026-09-26',
      dateModified: '2026-09-26',
      inLanguage: 'en-US',
      author: { '@type': 'Organization', name: 'TeleDirectMD' },
      publisher: {
        '@type': 'Organization',
        name: 'TeleDirectMD',
        logo: { '@type': 'ImageObject', url: 'https://teledirectmd.com/logos/teledirectmd.png' },
      },
      mainEntityOfPage: URL,
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
        { '@type': 'ListItem', position: 3, name: 'Anthem Blue Cross California, September 2026', item: URL },
      ],
    },
  ],
};

const h2 = { fontFamily: B.fd, fontSize: 24, color: B.navyDeep, margin: '28px 0 12px', fontWeight: 600 };
const p = { fontSize: 16, lineHeight: 1.7, color: B.text, margin: '0 0 16px' };

export default function AnthemCaliforniaAnnouncement() {
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
        <a href="/news/" style={{ color: B.teal, textDecoration: 'none' }}>News</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <span>Anthem Blue Cross California</span>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '24px 24px 64px' }}>
        <div style={{ display: 'inline-block', padding: '6px 14px', background: '#E6F3F4', color: B.teal, fontWeight: 700, fontSize: 12, borderRadius: 999, marginBottom: 16, letterSpacing: 0.5 }}>
          ANNOUNCEMENT · SEPTEMBER 26, 2026
        </div>

        <h1 data-speakable="true" style={{ fontFamily: B.fd, fontSize: 'clamp(30px, 5vw, 44px)', lineHeight: 1.15, color: B.navyDeep, margin: '0 0 16px', fontWeight: 600 }}>
          TeleDirectMD Is Now In-Network with Anthem Blue Cross in California
        </h1>

        <p data-speakable="true" style={{ fontSize: 19, lineHeight: 1.6, color: B.text, margin: '0 0 24px' }}>
          Anthem Blue Cross PPO, Indemnity, and Medicare PPO members in California can now book video visits with
          board-certified physician Dr. Parth Bhavsar, MD, and pay their normal in-network cost-sharing. Effective
          September 23, 2026.
        </p>

        <div style={{ padding: 24, background: B.white, border: `1px solid ${B.border}`, borderRadius: 16, boxShadow: B.shadow, marginBottom: 8 }}>
          <p style={{ ...p, color: B.navy, margin: '0 0 14px' }}>
            Anthem Blue Cross is one of the largest commercial insurers in California. Until now, Anthem members were seen
            as self-pay or out-of-network. Starting with visits on
            September 23, 2026, we bill Anthem directly as an in-network provider for the plans below.
          </p>
          <ul style={{ fontSize: 16, lineHeight: 1.8, color: B.navy, paddingLeft: 22, margin: 0 }}>
            <li><strong>Included:</strong> Commercial PPO, Commercial Indemnity, Medicare PPO</li>
            <li><strong>Not included:</strong> HMO plans, Medicare Advantage HMO, Medi-Cal, workers' compensation</li>
            <li><strong>Not affiliated:</strong> Blue Shield of California, which is a separate company</li>
          </ul>
        </div>

        <h2 style={h2}>What this means for patients</h2>
        <p style={p}>
          The visit is the same: a live video appointment with the same physician, usually the same day, for common
          problems like UTIs (women only), sinus infections, sore throat, pink eye, flu, rashes, and routine refills. What changes is
          the bill. You pay your plan's telehealth copay or coinsurance instead of $79, depending on your deductible.
        </p>
        <p style={p}>
          If you bought your Anthem plan through Covered California or directly as an individual, call the member
          services number on your card first. Individual plans often use narrower networks, and we would rather you
          know your cost before the visit.
        </p>
        <p style={p}>
          With California added, TeleDirectMD is in-network with Blue Cross Blue Shield affiliates in eight states.
          California patients can also use Aetna, UnitedHealthcare, and Curative plans. The $79 self-pay option has not
          changed.
        </p>

        <h2 style={h2}>More details</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8, paddingLeft: 22, margin: '0 0 24px' }}>
          <li><a href="/insurance/blue-cross-blue-shield/california/" style={{ color: B.teal }}>Anthem Blue Cross in California: plans, costs, and FAQ</a></li>
          <li><a href="/insurance/?state=CA" style={{ color: B.teal }}>Check whether your California plan is in-network</a></li>
          <li><a href="/ca/" style={{ color: B.teal }}>California telehealth home</a></li>
        </ul>

        <section style={{ margin: '32px 0' }}>
          <h2 style={{ ...h2, fontSize: 26, margin: '0 0 16px' }}>Frequently Asked Questions</h2>
          {FAQS.map((f) => (
            <details key={f.q} style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: 14, padding: '14px 18px', marginBottom: 10, boxShadow: B.shadow }}>
              <summary style={{ cursor: 'pointer', fontFamily: B.fd, fontSize: 17, fontWeight: 600, color: B.navyDeep, lineHeight: 1.4 }}>{f.q}</summary>
              <p style={{ marginTop: 12, fontSize: 15, color: B.text, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </section>

        <div style={{ padding: 24, background: `linear-gradient(135deg, ${B.teal}, ${B.navyDeep})`, color: B.white, borderRadius: 20, textAlign: 'center' }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, color: B.white, margin: '0 0 10px', fontWeight: 600 }}>Book with Anthem Blue Cross</h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', margin: '0 0 18px', fontSize: 15 }}>Same-day video visit. Your Anthem PPO cost-sharing or $79 self-pay.</p>
          <a href="/book-online/" style={{ display: 'inline-block', padding: '12px 28px', background: B.accent, color: B.white, textDecoration: 'none', borderRadius: 12, fontWeight: 700, fontSize: 15 }}>
            Start Your Visit
          </a>
        </div>

        <hr style={{ margin: '32px 0 20px', border: 0, borderTop: `1px solid ${B.border}` }} />
        <p style={{ fontSize: 13, color: B.text, lineHeight: 1.6 }}>
          <strong>Media contact:</strong> contact@teledirectmd.com. Treating physician: Parth Bhavsar, MD, NPI 1104323203,
          California Medical License A182278. For benefit questions, contact Anthem Blue Cross at the number on your member
          ID card.
        </p>
      </article>
    </div>
  );
}
