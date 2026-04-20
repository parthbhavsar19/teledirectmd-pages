export default function MilitaryFamiliesPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/military-families`;
  const today = new Date().toISOString().split('T')[0];

  const conditions = [
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Blood pressure medication refills when your TRICARE-network PCP isn\'t available at your new base.' },
    { name: 'Thyroid Management', slug: 'thyroid-management-online', desc: 'Medication continuity between PCS moves — keep your thyroid levels stable while establishing with a new provider.' },
    { name: 'Anxiety', slug: 'anxiety-treatment-online', desc: 'Prescription management for anxiety during high-stress relocation and separation periods.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescription — no need to find a new in-network provider for urgent needs.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for acute sinusitis.' },
    { name: 'Skin Infections / Rashes', slug: 'skin-infection-treatment-online', desc: 'Cellulitis, rashes, and minor skin infections evaluated via video.' },
    { name: 'Prescription Refills', slug: 'prescription-refills-online', desc: 'Bridge prescriptions during the gap between providers after a PCS move or separation.' },
    { name: 'Insomnia', slug: 'insomnia-treatment-online', desc: 'Sleep evaluation during high-stress transition periods.' },
    { name: 'Respiratory Infections', slug: 'common-cold-treatment-online', desc: 'Flu, bronchitis, and respiratory infection treatment without waiting for a new PCP appointment.' },
    { name: 'High Cholesterol', slug: 'hyperlipidemia-refills-online', desc: 'Statin refills and cholesterol management between providers.' },
  ];

  const gapScenarios = [
    {
      scenario: 'After Separation / TAMP Expires',
      friction: 'TRICARE ends on separation date. TAMP provides 180 days — after that, spouses and dependents are on their own during job search and relocation.',
      solution: 'No insurance required. $49 per visit in any of 42 states. Same-day appointments during the gap.'
    },
    {
      scenario: 'Mid-PCS Move',
      friction: 'TRICARE-network PCP at your new base isn\'t accepting new patients for 6–10 weeks. Existing prescriptions lapsing.',
      solution: 'Bridge prescriptions for chronic conditions — blood pressure, thyroid, anxiety — while you get established with a new primary care provider.'
    },
    {
      scenario: 'Reserve & Guard Between Activations',
      friction: 'TRICARE eligibility ends between activation periods. Dependents need episodic care.',
      solution: 'Pay-per-visit model fits unpredictable, episodic demand. No monthly subscription or premium required.'
    },
    {
      scenario: 'Remote or Rural Base Assignment',
      friction: 'TRICARE Prime network is thin at your assignment location. In-network primary care requires a long drive and a long wait.',
      solution: 'Video visit from home — no drive, no wait for in-network slot availability.'
    },
  ];

  const featuredStates = [
    { name: 'Georgia', slug: 'ga' },
    { name: 'North Carolina', slug: 'nc' },
    { name: 'Virginia', slug: 'va' },
    { name: 'Texas', slug: 'tx' },
    { name: 'Florida', slug: 'fl' },
    { name: 'Colorado', slug: 'co' },
    { name: 'Washington', slug: 'wa' },
    { name: 'South Carolina', slug: 'sc' },
  ];

  const faqItems = [
    {
      q: 'My spouse just separated from the military and TRICARE has ended. What are our options?',
      a: 'After TRICARE ends, you have several options: TAMP (180 days transitional coverage for qualifying separations), the ACA marketplace, or employer coverage once your spouse starts a new job. During any gap period — or for visits where direct-pay is faster — TeleDirectMD offers $49 flat-fee telehealth visits with no insurance required. We serve 42 states so we\'re available wherever you land during the transition.'
    },
    {
      q: 'We just PCS\'d and I can\'t get a primary care appointment for 8 weeks. Can you help?',
      a: 'Yes. This is one of the most common situations we help military families with. TeleDirectMD can provide prescription bridge refills for most ongoing medications (blood pressure, thyroid, cholesterol, anxiety, etc.) while you get established with a new TRICARE provider. We can also treat acute conditions — UTIs, sinus infections, skin problems — that can\'t wait for an 8-week appointment.'
    },
    {
      q: 'Does TeleDirectMD accept TRICARE?',
      a: 'TeleDirectMD is a direct-pay platform and does not currently bill TRICARE directly. The visit cost is $49 flat fee, paid at booking. Some TRICARE plans may allow out-of-network reimbursement for telehealth — check your specific plan terms. Either way, $49 is often far less than the cost of a TRICARE-covered in-person visit with co-pays and travel time factored in.'
    },
    {
      q: 'I\'m a Reservist and my TRICARE coverage isn\'t active right now. Can I use TeleDirectMD?',
      a: 'Absolutely. TeleDirectMD requires no insurance at any time. Reservists and Guard members whose TRICARE eligibility isn\'t currently active can use TeleDirectMD for any of our 60 covered conditions at the $49 flat fee.'
    },
    {
      q: 'Can you prescribe refills for medications my military provider prescribed?',
      a: 'In most cases, yes. After a telehealth evaluation to confirm the medication is still appropriate, TeleDirectMD can prescribe refills for most ongoing medications and send them to any US pharmacy — including TRICARE Express Scripts mail-order or retail pharmacy. This is especially helpful during PCS transitions when medication continuity is critical.'
    },
    {
      q: 'What states is TeleDirectMD licensed in?',
      a: 'TeleDirectMD is licensed in 42 US states, covering virtually every major military installation location — Georgia (Fort Moore, Fort Stewart), North Carolina (Fort Bragg, Camp Lejeune), Texas (Fort Hood, Fort Sam Houston), Florida (MacDill, Eglin, Hurlburt), Virginia (Quantico, Fort Belvoir), Colorado (Fort Carson, Peterson), Washington (Joint Base Lewis-McChord), and more.'
    },
    {
      q: 'My family just moved to a rural area near a base with limited medical access. Can telehealth help?',
      a: 'Yes. Thin TRICARE provider networks near some installations are a well-documented problem. TeleDirectMD\'s video visits work from any location with a smartphone and internet connection — including rural areas. For routine and urgent care needs, you can avoid the long drive and the wait for an available in-network appointment.'
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": "Military Families & Veterans", "item": pageUrl }
        ]
      },
      {
        "@type": "MedicalOrganization",
        "name": "TeleDirectMD",
        "url": baseUrl,
        "logo": `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        "telephone": "+1-678-956-1855",
        "medicalSpecialty": "GeneralPractice",
        "availableService": { "@type": "MedicalTherapy", "name": "Telehealth Consultations" },
        "areaServed": ["AL","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"]
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about#physician`,
        "name": "Parth Bhavsar, MD",
        "medicalSpecialty": "FamilyMedicine",
        "worksFor": { "@type": "MedicalOrganization", "name": "TeleDirectMD" },
        "licensedIn": ["AL","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": "Telehealth for Military Families — Coverage When TRICARE Has Gaps",
        "description": "TeleDirectMD fills TRICARE gaps for military families during separation, PCS moves, and Reserve/Guard transitions. $49 flat-fee telehealth in 42 states. No insurance required.",
        "datePublished": "2026-04-20",
        "dateModified": today,
        "author": { "@type": "Physician", "name": "Parth Bhavsar, MD" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".tdmd-hero h1", ".tdmd-lead"] }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">Military Families &amp; Veterans</span>
        </div>
      </nav>

      <section className="tdmd-hero">
        <div className="tdmd-container">
          <h1>Telehealth for Military Families — Coverage When TRICARE Has Gaps</h1>
          <p className="tdmd-hero-sub tdmd-lead">
            TRICARE is excellent — when it works. But separation, PCS moves, and Reserve/Guard transitions create real coverage gaps. TeleDirectMD provides $49 flat-fee telehealth visits in 42 states with no insurance required — filling exactly the moments TRICARE doesn't cover.
          </p>
          <ul className="tdmd-hero-bullets">
            <li>No insurance required — pay $49 per visit, only when you need care</li>
            <li>Bridge prescriptions during PCS provider transitions (blood pressure, thyroid, anxiety, and more)</li>
            <li>Available post-separation when TRICARE and TAMP end</li>
            <li>Licensed in 42 states — every major installation location covered</li>
            <li>Same-day visits, evenings &amp; weekends</li>
          </ul>
          <div className="tdmd-hero-ctas">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
          </div>
          <p className="tdmd-review-date">Medically reviewed by Parth Bhavsar, MD · Updated {today}</p>
        </div>
      </section>

      {/* Gap scenarios */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>When TeleDirectMD Fills the TRICARE Gap</h2>
          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
              <thead>
                <tr style={{ background: 'var(--tdmd-navy)', color: '#fff' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Scenario</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>The Friction</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>How $49 Telehealth Wins</th>
                </tr>
              </thead>
              <tbody>
                {gapScenarios.map((row, i) => (
                  <tr key={row.scenario} style={{ background: i % 2 === 0 ? '#fff' : 'var(--tdmd-bg-light)', verticalAlign: 'top' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>{row.scenario}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--tdmd-muted)' }}>{row.friction}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Handle for Military Families</h2>
          <div className="tdmd-card-grid">
            {conditions.map(c => (
              <a key={c.slug} href={`/what-we-treat/${c.slug}`} className="tdmd-card tdmd-card-link">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{c.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--tdmd-muted)' }}>{c.desc}</p>
              </a>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem' }}><a href="/what-we-treat">View all 60 conditions we treat →</a></p>
        </div>
      </section>

      {/* States / Installations */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>Licensed Near Every Major Installation</h2>
          <p>TeleDirectMD is licensed in 42 states — covering every major military installation and the surrounding communities where military families live.</p>
          <div className="tdmd-state-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {featuredStates.map(s => (
              <a key={s.slug} href={`/${s.slug}`} className="tdmd-state-pill">{s.name}</a>
            ))}
          </div>
          <p style={{ marginTop: '1rem' }}><a href="/states-we-serve">View all 42 states →</a></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions</h2>
          <div className="tdmd-faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="tdmd-faq-item">
                <summary className="tdmd-faq-q">{item.q}</summary>
                <p className="tdmd-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tdmd-section tdmd-bg-teal-dark">
        <div className="tdmd-container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Your Family's Health Shouldn't Wait for TRICARE to Catch Up</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '560px', margin: '0 auto 1.5rem' }}>
            $49 flat-fee visits. Same-day availability. 42 states. No insurance required.
          </p>
          <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
        </div>
      </section>

      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>More from TeleDirectMD</h2>
          <div className="tdmd-card-grid">
            {[
              { href: '/who-we-serve/early-retirees', label: 'Early Retirees', desc: 'Bridge the gap until Medicare with $49 visits.' },
              { href: '/who-we-serve/remote-workers', label: 'Remote Workers', desc: 'Healthcare that follows you anywhere.' },
              { href: '/who-we-serve/uninsured-affordable-care', label: 'Uninsured Adults', desc: 'Transparent pricing, no surprise bills.' },
              { href: '/who-we-serve', label: 'All Who We Serve', desc: 'See every audience we serve.' },
            ].map(link => (
              <a key={link.href} href={link.href} className="tdmd-card tdmd-card-link">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{link.label}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--tdmd-muted)' }}>{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
