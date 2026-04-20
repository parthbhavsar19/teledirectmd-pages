import audienceSegments from '../../data/audience-segments.json';

export const metadata = {
  title: 'Who We Serve — TeleDirectMD',
  description: 'TeleDirectMD provides telehealth for truck drivers, gig workers, international visitors, college students, early retirees, military families, remote workers, travel nurses, and the uninsured. Licensed physician in 42 states. Same-day visits, evenings & weekends.',
  alternates: {
    canonical: 'https://teledirectmd.com/who-we-serve',
  },
  openGraph: {
    title: 'Who We Serve — TeleDirectMD',
    description: 'Telehealth built for people who cannot always stop. Licensed in 42 states.',
    url: 'https://teledirectmd.com/who-we-serve',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

export default function WhoWeServeHub() {
  const baseUrl = 'https://teledirectmd.com';
  const segments = Object.values(audienceSegments);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` }
    ]
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "TeleDirectMD",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/brand/teledirectmd-logo.png`,
    "telephone": "+1-678-956-1855",
    "medicalSpecialty": "GeneralPractice",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Telehealth Consultations"
    },
    "areaServed": ["AL","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">Who We Serve</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="tdmd-hero">
        <div className="tdmd-container">
          <h1>Telehealth Built for People Who Can't Always Stop — Healthcare That Travels With You</h1>
          <p className="tdmd-hero-sub" style={{ maxWidth: '72ch' }}>
            Licensed physician. 41 states. Same-day visits, evenings & weekends. No insurance required.
          </p>
          <p style={{ maxWidth: '72ch', lineHeight: '1.6' }}>
            TeleDirectMD provides secure video visits with a board-certified physician for adults across 41 states. Everyone deserves access to quality healthcare — but some people face barriers that make it harder. Whether you're driving cross-country, delivering groceries at midnight, freelancing without employer benefits, or recently lost your insurance coverage, TeleDirectMD was built to meet you where you are.
          </p>
          <p style={{ maxWidth: '72ch', lineHeight: '1.6' }}>
            Below, you'll find information tailored to specific communities we serve. Each page addresses the unique health challenges, access barriers, and questions relevant to your situation — along with how TeleDirectMD can help.
          </p>
        </div>
      </section>

      {/* Audience Grid */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Communities We Serve</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
            marginTop: '1.25rem'
          }}>
            {segments.map((seg) => (
              <a
                key={seg.slug}
                href={`/who-we-serve/${seg.slug}`}
                className="tdmd-card"
                style={{
                  textDecoration: 'none',
                  color: 'var(--tdmd-text)',
                  borderTop: '4px solid var(--tdmd-teal)',
                  transition: 'border-color 0.15s, box-shadow 0.15s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <h3 style={{ margin: 0, color: 'var(--tdmd-navy)' }}>{seg.name}</h3>
                <p style={{ margin: 0, color: 'var(--tdmd-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {seg.shortDescription}
                </p>
                <span style={{ marginTop: 'auto', color: 'var(--tdmd-teal)', fontWeight: 700, fontSize: '0.92rem' }}>
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Whatever your situation, we can see you today.</h3>
              <p>Same-day visits, evenings & weekends. No insurance required. Board-certified physician licensed in 42 states, available by secure video visit.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">What We Treat</a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>More from TeleDirectMD</h3>
            <p className="tdmd-link-cloud">
              <a href="/what-we-treat">What We Treat</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/insurance">Insurance & Pricing</a>
              <a href="/faq">Frequently Asked Questions</a>
              <a href="/book-online">Book a Visit</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
