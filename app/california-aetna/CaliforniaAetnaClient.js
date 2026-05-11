'use client';

// Reverse-hub page: California-first, Aetna-second.
// Targets patient queries like "Aetna telehealth California" / "online doctor that takes Aetna in LA / SF / San Diego".
// Companion to /insurance/aetna/california/ (which is insurer-first).

const B = {
  teal: '#006B73',
  tealLight: '#008C96',
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

const CITIES = [
  'Los Angeles',
  'San Francisco',
  'San Diego',
  'San Jose',
  'Sacramento',
  'Fresno',
  'Oakland',
  'Long Beach',
  'Anaheim',
  'Bakersfield',
  'Riverside',
  'Irvine',
  'Santa Ana',
  'Stockton',
];

const FAQS = [
  {
    q: 'Does Aetna cover online doctor visits in California?',
    a: "Yes. California has some of the strongest telehealth parity laws in the country. Under California Business and Professions Code §2290.5 and Insurance Code §10123.85, Aetna commercial plans must reimburse medically necessary telehealth services on terms comparable to in-person care. TeleDirectMD is contracted as an in-network telehealth provider with Aetna commercial plans in California (effective April 30, 2026). Dr. Parth Bhavsar, MD (NPI 1104323203) is the treating physician.",
  },
  {
    q: 'How much will I pay with my Aetna plan in California?',
    a: "Most Aetna California commercial plans have telehealth copays of $10–$40. Many California employer plans carry $0 telehealth copays. Self-pay is always available at a flat $49 — same physician, same care. Log into aetna.com or call the member-services number on your card to confirm your exact cost-sharing before booking.",
  },
  {
    q: 'Which Aetna plans are in-network at TeleDirectMD in California?',
    a: "Aetna commercial plans — including most employer-sponsored PPO, HMO, and individual marketplace plans — are in-network. Aetna Medicaid, Aetna Better Health (Medi-Cal), Medicare fee-for-service, and Aetna Medicare Advantage plans are NOT accepted. If your plan is not in-network, the $49 self-pay option is available with the same physician and quality of care.",
  },
  {
    q: 'Where in California can I use TeleDirectMD with my Aetna plan?',
    a: 'Statewide. TeleDirectMD provides same-day video visits to Aetna members anywhere in California — including Los Angeles, San Francisco, San Diego, San Jose, Sacramento, Fresno, Oakland, Long Beach, Anaheim, Bakersfield, Riverside, Irvine, Santa Ana, and Stockton. You must be physically located in California at the time of your visit.',
  },
  {
    q: 'What conditions can I see a TeleDirectMD physician for?',
    a: 'Common urgent-care conditions including UTI, sinus infection, strep throat, pink eye, flu, COVID-19, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Aetna commercial plans cover these visits when medically necessary. We do not prescribe controlled substances.',
  },
  {
    q: 'How does billing work?',
    a: "TeleDirectMD submits your claim electronically to Aetna using CPT code 99213 or 99214. Aetna processes the claim and applies it to your benefits. You'll receive an Explanation of Benefits (EOB) from Aetna in 2–4 weeks showing the billed amount and your responsibility (your copay or deductible portion). Questions? Call Aetna member services at 1-888-632-3862.",
  },
  {
    q: 'Can I use my Aetna FSA or HSA?',
    a: 'Yes. Telehealth visits with a licensed physician are qualified medical expenses eligible for FSA and HSA payment. Both your insurance copay and the $49 self-pay option are FSA/HSA eligible.',
  },
  {
    q: 'How do I verify my Aetna telehealth benefits before booking?',
    a: 'Log into your Aetna member portal at aetna.com, navigate to "Benefits," and look for "Telehealth" or "Virtual Care" under your plan details. Or call the member-services number on the back of your Aetna card and ask: "Is TeleDirectMD in-network for telehealth in California?" and "What is my telehealth copay?"',
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://teledirectmd.com/california-aetna#webpage',
      name: 'Aetna Telehealth in California — Same-Day Online Doctor Visit',
      description:
        "TeleDirectMD is in-network with Aetna commercial plans in California (effective April 30, 2026). Board-certified physician Dr. Parth Bhavsar, MD (NPI 1104323203). Same-day video visits — your Aetna copay applies, typically $10–$40.",
      url: 'https://teledirectmd.com/california-aetna',
      lastReviewed: '2026-05-11',
      reviewedBy: {
        '@type': 'Physician',
        name: 'Parth Bhavsar, MD',
        identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      },
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable]'] },
    },
    {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/#physician-parth-bhavsar',
      name: 'Parth Bhavsar, MD',
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      areaServed: { '@type': 'State', name: 'California' },
      acceptsInsurance: [
        {
          '@type': 'HealthInsurancePlan',
          name: 'Aetna Commercial Plans — California',
          includesHealthPlanFormulary: {
            '@type': 'HealthPlanFormulary',
            offersPrescriptionDrug: true,
          },
        },
      ],
    },
    {
      '@type': 'MedicalOrganization',
      '@id': 'https://teledirectmd.com/#organization',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      medicalSpecialty: 'General Practice',
      areaServed: { '@type': 'State', name: 'California' },
      identifier: { '@type': 'PropertyValue', name: 'Organization NPI', value: '1104610450' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com' },
        { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca' },
        { '@type': 'ListItem', position: 3, name: 'Aetna', item: 'https://teledirectmd.com/california-aetna' },
      ],
    },
  ],
};

export default function CaliforniaAetnaClient() {
  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy, minHeight: '100vh' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap"
        rel="stylesheet"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: '12px 24px', maxWidth: 1100, margin: '0 auto', fontSize: 14, color: B.text }}>
        <a href="/" style={{ color: B.teal, textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <a href="/ca" style={{ color: B.teal, textDecoration: 'none' }}>California</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <span>Aetna</span>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 32px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: '#FFF0EC',
            color: B.accent,
            fontWeight: 700,
            fontSize: 13,
            borderRadius: 999,
            marginBottom: 16,
            letterSpacing: 0.5,
          }}
        >
          NEW · MAY 2026
        </div>
        <h1
          data-speakable="true"
          style={{
            fontFamily: B.fd,
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.15,
            color: B.navyDeep,
            margin: '0 0 16px',
            fontWeight: 600,
          }}
        >
          Aetna Telehealth in California — Same-Day Online Doctor Visits
        </h1>
        <p
          data-speakable="true"
          style={{ fontSize: 19, lineHeight: 1.6, color: B.text, maxWidth: 760, margin: '0 0 24px' }}
        >
          TeleDirectMD is in-network with Aetna commercial plans in California (effective April 30, 2026).
          Board-certified physician Dr. Parth Bhavsar, MD, treats UTI, sinus infection, asthma refills,
          hypertension refills, and many other adult conditions via secure same-day video visits. Most Aetna
          California members pay $10–$40 — or choose flat $49 self-pay.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href="/book-online"
            style={{
              padding: '14px 28px',
              background: B.accent,
              color: B.white,
              textDecoration: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              display: 'inline-block',
            }}
          >
            Book with Aetna — Same Day
          </a>
          <a
            href="/insurance/aetna/california"
            style={{
              padding: '14px 28px',
              background: B.white,
              color: B.teal,
              border: `2px solid ${B.teal}`,
              textDecoration: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              display: 'inline-block',
            }}
          >
            See Full Aetna California Details
          </a>
        </div>
      </section>

      {/* Quick facts */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {[
            { label: 'In-Network Date', value: 'April 30, 2026' },
            { label: 'Typical Copay', value: '$10–$40' },
            { label: 'Self-Pay Alternative', value: '$49 flat' },
            { label: 'Visit Type', value: 'Secure video' },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                padding: 20,
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 16,
                boxShadow: B.shadow,
              }}
            >
              <div style={{ fontSize: 13, color: B.text, fontWeight: 600, marginBottom: 6 }}>{c.label}</div>
              <div style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 600, color: B.navyDeep }}>{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* California cities */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 28, color: B.navyDeep, margin: '0 0 12px', fontWeight: 600 }}>
          Aetna Telehealth Across California
        </h2>
        <p style={{ color: B.text, fontSize: 16, lineHeight: 1.6, margin: '0 0 20px', maxWidth: 760 }}>
          We see Aetna California members statewide — anywhere you are physically located within California at the time of your visit.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {CITIES.map((city) => (
            <span
              key={city}
              style={{
                padding: '8px 16px',
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 999,
                fontSize: 14,
                color: B.navy,
                fontWeight: 500,
              }}
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Why CA telehealth parity matters */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <div
          style={{
            padding: 28,
            background: B.white,
            border: `1px solid ${B.border}`,
            borderRadius: 20,
            boxShadow: B.shadow,
          }}
        >
          <h2 style={{ fontFamily: B.fd, fontSize: 26, color: B.navyDeep, margin: '0 0 12px', fontWeight: 600 }}>
            California Telehealth Parity — Why Your Aetna Copay Is Comparable to In-Person
          </h2>
          <p style={{ color: B.text, fontSize: 16, lineHeight: 1.7, margin: '0 0 12px' }}>
            California's Telehealth Advancement Act (Business and Professions Code §2290.5) and California
            Insurance Code §10123.85 require commercial health plans — including Aetna — to reimburse medically
            necessary telehealth services on terms comparable to in-person care. The Medical Board of California
            requires telehealth providers to meet the same standard of care as in-person treatment.
          </p>
          <p style={{ color: B.text, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
            Practically, this means your Aetna California telehealth copay is generally the same as — or lower than —
            your primary-care office copay. Many large California employer plans (tech, healthcare, retail) carry
            $0 telehealth copays.
          </p>
        </div>
      </section>

      {/* Conditions cross-link */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 28, color: B.navyDeep, margin: '0 0 12px', fontWeight: 600 }}>
          Common Reasons California Aetna Members Book TeleDirectMD
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 12,
            marginTop: 12,
          }}
        >
          {[
            { name: 'UTI Treatment', href: '/ca/uti-treatment-online' },
            { name: 'Sinus Infection', href: '/ca/sinus-infection-treatment-online' },
            { name: 'Pink Eye', href: '/ca/pink-eye-treatment-online' },
            { name: 'Asthma Refills', href: '/ca/asthma-refills-online' },
            { name: 'Hypertension Refills', href: '/ca/hypertension-refills-online' },
            { name: 'Acid Reflux / GERD', href: '/ca/acid-reflux-refills-online' },
            { name: 'Strep Throat', href: '/ca/strep-throat-treatment-online' },
            { name: 'Flu Treatment', href: '/ca/influenza-treatment-online' },
            { name: 'Yeast Infection', href: '/ca/yeast-infection-treatment-online' },
          ].map((cond) => (
            <a
              key={cond.name}
              href={cond.href}
              style={{
                padding: 16,
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 12,
                textDecoration: 'none',
                color: B.navy,
                fontWeight: 600,
                fontSize: 15,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{cond.name}</span>
              <span style={{ color: B.teal, fontSize: 18 }}>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 30, color: B.navyDeep, margin: '0 0 8px', fontWeight: 600 }}>
          Aetna California Telehealth — Common Questions
        </h2>
        <div style={{ marginTop: 16 }}>
          {FAQS.map((f) => (
            <details
              key={f.q}
              style={{
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 12,
                padding: '14px 20px',
                marginBottom: 10,
              }}
            >
              <summary
                data-speakable="true"
                style={{ cursor: 'pointer', fontFamily: B.fd, fontSize: 17, fontWeight: 600, color: B.navyDeep, lineHeight: 1.4 }}
              >
                {f.q}
              </summary>
              <p style={{ marginTop: 12, fontSize: 15, color: B.text, lineHeight: 1.7 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 64px' }}>
        <div
          style={{
            padding: 36,
            background: `linear-gradient(135deg, ${B.teal}, ${B.navyDeep})`,
            color: B.white,
            borderRadius: 24,
            textAlign: 'center',
            boxShadow: '0 12px 36px rgba(0,35,45,0.16)',
          }}
        >
          <h2 style={{ fontFamily: B.fd, fontSize: 28, margin: '0 0 12px', fontWeight: 600, color: B.white }}>
            Book Your Aetna Telehealth Visit in California
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.92)', margin: '0 0 24px' }}>
            Same-day video visit. Board-certified MD. Your Aetna copay or $49 self-pay.
          </p>
          <a
            href="/book-online"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              background: B.accent,
              color: B.white,
              textDecoration: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 17,
            }}
          >
            Start Your Visit
          </a>
        </div>
        <p style={{ fontSize: 12, color: B.text, marginTop: 16, textAlign: 'center', lineHeight: 1.6 }}>
          Insurance coverage and plan acceptance subject to change. Information reflects currently active contracts as of May 2026.
          Not all Aetna plan types may be accepted; Medicaid (Medi-Cal), Aetna Better Health, and Medicare plans are not accepted.
          Verify benefits with Aetna before booking.
        </p>
      </section>
    </div>
  );
}
