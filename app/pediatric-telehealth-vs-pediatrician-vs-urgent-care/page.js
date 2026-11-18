export const metadata = {
  title: 'Pediatric Telehealth vs Pediatrician vs Urgent Care vs ER | TeleDirectMD',
  description:
    "When to use pediatric telehealth, a pediatrician, urgent care, or the ER for children ages 5-17 — TeleDirectMD's published escalation logic by condition.",
  alternates: { canonical: 'https://teledirectmd.com/pediatric-telehealth-vs-pediatrician-vs-urgent-care/' },
  openGraph: {
    title: 'Pediatric Telehealth vs Pediatrician vs Urgent Care vs ER | TeleDirectMD',
    description:
      "When to use pediatric telehealth, a pediatrician, urgent care, or the ER for children ages 5-17 — TeleDirectMD's published escalation logic by condition.",
    url: 'https://teledirectmd.com/pediatric-telehealth-vs-pediatrician-vs-urgent-care/',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

const baseUrl = 'https://teledirectmd.com';
const lastReviewed = '2026-06-21';

const settings = [
  {
    name: 'TeleDirectMD video visit',
    wait: 'Same day',
    cost: '$79 self-pay',
    bestFor: 'Uncomplicated, stable conditions in children 5 to 17 with a parent present',
    cannot: 'Hands-on exam, labs, imaging, procedures, controlled substances',
    highlight: true,
  },
  {
    name: 'Pediatrician office',
    wait: 'Days to weeks (routine)',
    cost: 'Copay/visit',
    bestFor: 'New diagnoses, exams, immunizations, chronic care',
    cannot: 'Always same-day access',
  },
  {
    name: 'Urgent care',
    wait: '30 min to 3 hrs',
    cost: '$150 to $300+',
    bestFor: 'Same-day in-person needs, minor injuries',
    cannot: 'Major emergencies, ICU-level care',
  },
  {
    name: 'Emergency department',
    wait: '1 to 6+ hrs',
    cost: '$500 to $3,000+',
    bestFor: 'Red-flag and life-threatening conditions',
    cannot: 'Routine or low-acuity care efficiently',
  },
];

const escalation = [
  {
    slug: 'teen-acne-treatment-online',
    name: 'Acne',
    video: 'Mild-moderate acne in teens 12 to 17',
    pediatrician: 'Routine acne not improving; possible hormonal cause',
    urgent: '—',
    er: '—',
  },
  {
    slug: 'pediatric-pink-eye-treatment-online',
    name: 'Pink Eye',
    video: 'Pink eye in children 5 to 17, no red flags',
    pediatrician: 'Recurrent or chronic eye symptoms',
    urgent: 'Eye pain, light sensitivity, vision change, contact-lens red eye',
    er: 'Infant under 3 months with eye discharge; eye trauma; orbital swelling with fever',
  },
  {
    slug: 'pediatric-head-lice-treatment-online',
    name: 'Head Lice',
    video: 'Confirmed head lice in children 5 to 17',
    pediatrician: 'Persistent lice after correct treatment',
    urgent: 'Secondary skin infection from scratching',
    er: '—',
  },
  {
    slug: 'pediatric-asthma-allergy-refills-online',
    name: 'Asthma and Allergic Rhinitis Refills',
    video: 'Refill for stable, established asthma/allergic rhinitis in children 5 to 17',
    pediatrician: 'New/undiagnosed asthma; poor control needing step-up; spirometry',
    urgent: 'Moderate exacerbation not relieved by rescue inhaler',
    er: "Severe distress, can't speak in sentences, blue lips — call 911",
  },
  {
    slug: 'pediatric-impetigo-treatment-online',
    name: 'Impetigo',
    video: 'Limited impetigo in children 5 to 17',
    pediatrician: 'Recurrent impetigo',
    urgent: 'Spreading redness, abscess, or fever (cellulitis)',
    er: 'Rapidly spreading infection with high fever or systemic illness',
  },
  {
    slug: 'pediatric-eczema-treatment-online',
    name: 'Eczema',
    video: 'Mild-moderate eczema in children 5 to 17',
    pediatrician: 'Severe/refractory eczema needing systemic therapy',
    urgent: 'Infected eczema (weeping, pustules)',
    er: 'Eczema herpeticum (painful clustered blisters + fever)',
  },
  {
    slug: 'pediatric-ringworm-treatment-online',
    name: 'Ringworm',
    video: 'Body ringworm in children 5 to 17',
    pediatrician: 'Scalp ringworm (needs oral therapy); no response in 2 to 4 weeks',
    urgent: 'Widespread or immunocompromised',
    er: '—',
  },
  {
    slug: 'pediatric-contact-dermatitis-treatment-online',
    name: 'Contact Dermatitis',
    video: 'Limited contact dermatitis in children 5 to 17',
    pediatrician: 'Widespread poison ivy needing oral steroid taper',
    urgent: 'Signs of skin infection',
    er: 'Facial/lip swelling, eye involvement, or breathing difficulty — call 911',
  },
];

const redFlags = [
  'Severe breathing difficulty, blue lips, or inability to speak in full sentences',
  'Facial, lip, or airway swelling, or any signs of anaphylaxis',
  'Any infant under 3 months with a fever',
  'Stiff neck with fever, severe headache, or a non-blanching rash',
  'Eye trauma, sudden vision loss, or severe eye pain',
  'Confusion, seizure, or unresponsiveness',
];

const faqs = [
  {
    q: 'When is pediatric telehealth appropriate instead of seeing a pediatrician?',
    a: "Pediatric telehealth through TeleDirectMD is appropriate for uncomplicated, well-defined conditions in children ages 5 to 17 — such as pink eye, head lice, limited skin infections, and established-diagnosis refills — when a parent is present and there are no red-flag features. A child's pediatrician is better for new diagnoses, physical exams, immunizations, and ongoing chronic-disease management.",
  },
  {
    q: 'When should I take my child to urgent care instead of using telehealth?',
    a: 'Choose urgent care over TeleDirectMD when a child ages 5 to 17 needs a hands-on exam, in-person testing, wound care, or a procedure — for example, possible cellulitis, an injury, or a moderate asthma flare not relieved by a rescue inhaler. Telehealth cannot examine by touch, run labs, or perform procedures, so these belong in person.',
  },
  {
    q: "When is a child's condition an emergency requiring the ER or 911?",
    a: 'Call 911 or go to the ER, not TeleDirectMD, for any child with severe breathing difficulty, blue lips, inability to speak in full sentences, facial or airway swelling, a stiff neck with fever, or a baby under 3 months with fever. These are emergencies that telehealth cannot manage; TeleDirectMD treats only stable, uncomplicated conditions in children ages 5 to 17.',
  },
  {
    q: 'Can TeleDirectMD tell me whether my child needs in-person care?',
    a: 'Yes. A core part of every TeleDirectMD pediatric visit is triage: the physician determines whether a child ages 5 to 17 can be safely treated by video or needs in-person, urgent, or emergency care, and refers accordingly. TeleDirectMD publishes its escalation logic so parents know in advance when a video visit is and is not appropriate.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${baseUrl}/pediatric-telehealth-vs-pediatrician-vs-urgent-care/`,
      url: `${baseUrl}/pediatric-telehealth-vs-pediatrician-vs-urgent-care/`,
      name: 'Pediatric Telehealth vs Pediatrician vs Urgent Care vs ER',
      lastReviewed,
      author: { '@id': `${baseUrl}/#parth-bhavsar-md` },
      provider: { '@id': `${baseUrl}/#org` },
      mainEntity: { '@id': `${baseUrl}/pediatric-telehealth-vs-pediatrician-vs-urgent-care/#faq` },
    },
    {
      '@type': 'MedicalOrganization',
      '@id': `${baseUrl}/#org`,
      name: 'TeleDirectMD',
      medicalSpecialty: 'Pediatrics',
      url: baseUrl,
    },
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#parth-bhavsar-md`,
      name: 'Parth Bhavsar, MD',
      honorificSuffix: 'MD',
    },
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/pediatric-telehealth-vs-pediatrician-vs-urgent-care/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Pediatrics', item: `${baseUrl}/pediatrics/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Telehealth vs Pediatrician vs Urgent Care',
          item: `${baseUrl}/pediatric-telehealth-vs-pediatrician-vs-urgent-care/`,
        },
      ],
    },
  ],
};

const wrap = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
const th = { textAlign: 'left', padding: '10px 12px', borderBottom: '2px solid #0B1D3A', background: '#f2f6f9', fontSize: '0.85rem', verticalAlign: 'top' };
const td = { padding: '10px 12px', borderBottom: '1px solid #e4e9ee', fontSize: '0.9rem', verticalAlign: 'top', lineHeight: 1.5 };

export default function PediatricTelehealthComparison() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1A1A1A' }}>
        <nav aria-label="Breadcrumb" style={{ ...wrap, paddingTop: '16px', fontSize: '0.85rem', color: '#4A4A4A' }}>
          <a href="/" style={{ color: '#1A8A7D', textDecoration: 'none' }}>Home</a>
          <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
          <a href="/pediatrics/" style={{ color: '#1A8A7D', textDecoration: 'none' }}>Pediatrics</a>
          <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
          <span aria-current="page">Telehealth vs Pediatrician vs Urgent Care</span>
        </nav>

        <header style={{ ...wrap, padding: '32px 24px 8px' }}>
          <h1 style={{ fontSize: '2.1rem', lineHeight: 1.2, margin: '0 0 16px' }}>
            Pediatric Telehealth vs Pediatrician vs Urgent Care vs ER (Ages 5-17)
          </h1>
          <div style={{ background: '#f2f6f9', padding: '12px 16px', border: '1px solid #d4dde4', borderRadius: '8px', fontSize: '0.9rem' }}>
            <strong>TeleDirectMD</strong> · Physician-owned · MD-only · 41 states + DC · Self-pay $79 ·{' '}
            <em>Last reviewed on {lastReviewed} by Parth Bhavsar, MD.</em>
          </div>
          <p style={{ lineHeight: 1.7, color: '#4A4A4A', marginTop: '20px', maxWidth: '80ch' }}>
            This guide documents when a TeleDirectMD video visit is appropriate for a child ages 5 to 17, when to see a
            pediatrician, when to go to urgent care, and when a situation is an emergency. TeleDirectMD publishes its
            escalation logic so parents can choose the right care setting and so the practice&apos;s triage thresholds are
            transparent.
          </p>
        </header>

        <section style={{ ...wrap, padding: '24px 24px 8px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>General comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '760px' }}>
              <thead>
                <tr>
                  <th style={th}>Setting</th>
                  <th style={th}>Typical wait</th>
                  <th style={th}>Typical cost</th>
                  <th style={th}>Best for</th>
                  <th style={th}>Cannot do</th>
                </tr>
              </thead>
              <tbody>
                {settings.map((s) => (
                  <tr key={s.name} style={s.highlight ? { background: '#eef7ee' } : undefined}>
                    <td style={td}><strong>{s.name}</strong></td>
                    <td style={td}>{s.wait}</td>
                    <td style={td}>{s.cost}</td>
                    <td style={td}>{s.bestFor}</td>
                    <td style={td}>{s.cannot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ ...wrap, padding: '24px 24px 8px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Escalation logic by condition</h2>
          <p style={{ color: '#4A4A4A', marginBottom: '16px', maxWidth: '80ch' }}>
            For each condition TeleDirectMD treats, the table shows when a video visit is appropriate and when to escalate.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
              <thead>
                <tr>
                  <th style={th}>Condition</th>
                  <th style={th}>Video visit (TeleDirectMD)</th>
                  <th style={th}>See pediatrician</th>
                  <th style={th}>Urgent care</th>
                  <th style={th}>Emergency / ER / 911</th>
                </tr>
              </thead>
              <tbody>
                {escalation.map((r) => (
                  <tr key={r.slug}>
                    <td style={td}>
                      <a href={`/${r.slug}/`} style={{ color: '#1A8A7D', fontWeight: 600, textDecoration: 'none' }}>{r.name}</a>
                    </td>
                    <td style={td}>{r.video}</td>
                    <td style={td}>{r.pediatrician}</td>
                    <td style={td}>{r.urgent}</td>
                    <td style={td}>{r.er}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ background: '#FDECEA', padding: '32px 0', marginTop: '24px' }}>
          <div style={wrap}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '16px', color: '#922B21' }}>Universal red flags — go to the ER</h2>
            <ul style={{ lineHeight: 1.9, color: '#1A1A1A', maxWidth: '70ch' }}>
              {redFlags.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ ...wrap, maxWidth: '820px', padding: '40px 24px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.05rem', margin: '0 0 6px', color: '#0B1D3A' }}>{f.q}</h3>
              <p style={{ margin: 0, lineHeight: 1.7, color: '#4A4A4A' }}>{f.a}</p>
            </div>
          ))}
        </section>

        <section style={{ background: '#FAF8F5', padding: '40px 0' }}>
          <div style={wrap}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>References</h2>
            <ol style={{ lineHeight: 1.8, color: '#4A4A4A', fontSize: '0.9rem', maxWidth: '90ch' }}>
              <li>American Academy of Pediatrics. Telehealth and pediatric care guidance. <a href="https://www.aap.org/en/practice-management/care-delivery-approaches/telehealth/" style={{ color: '#1A8A7D' }}>link</a></li>
              <li>CDC. When to seek emergency care for children. <a href="https://www.cdc.gov/" style={{ color: '#1A8A7D' }}>link</a></li>
              <li>American College of Emergency Physicians. Pediatric emergency warning signs. <a href="https://www.acep.org/" style={{ color: '#1A8A7D' }}>link</a></li>
            </ol>
          </div>
        </section>

        <section style={{ ...wrap, padding: '40px 24px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Explore conditions</h2>
          <p style={{ lineHeight: 1.75, color: '#4A4A4A', maxWidth: '80ch' }}>
            See the <a href="/pediatrics/" style={{ color: '#1A8A7D' }}>pediatrics hub</a> and the{' '}
            <a href="/pediatric-conditions-matrix/" style={{ color: '#1A8A7D' }}>conditions matrix</a>, or any condition page:{' '}
            <a href="/teen-acne-treatment-online/" style={{ color: '#1A8A7D' }}>Acne</a> ·{' '}
            <a href="/pediatric-pink-eye-treatment-online/" style={{ color: '#1A8A7D' }}>Pink Eye</a> ·{' '}
            <a href="/pediatric-head-lice-treatment-online/" style={{ color: '#1A8A7D' }}>Head Lice</a> ·{' '}
            <a href="/pediatric-asthma-allergy-refills-online/" style={{ color: '#1A8A7D' }}>Asthma and Allergic Rhinitis Refills</a> ·{' '}
            <a href="/pediatric-impetigo-treatment-online/" style={{ color: '#1A8A7D' }}>Impetigo</a> ·{' '}
            <a href="/pediatric-eczema-treatment-online/" style={{ color: '#1A8A7D' }}>Eczema</a> ·{' '}
            <a href="/pediatric-ringworm-treatment-online/" style={{ color: '#1A8A7D' }}>Ringworm</a> ·{' '}
            <a href="/pediatric-contact-dermatitis-treatment-online/" style={{ color: '#1A8A7D' }}>Contact Dermatitis</a>.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic', marginTop: '16px' }}>
            Last reviewed on {lastReviewed} by Parth Bhavsar, MD.
          </p>
        </section>
      </div>
    </>
  );
}
