export default function EarlyRetireesPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/early-retirees`;
  const today = new Date().toISOString().split('T')[0];

  const conditions = [
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Ongoing blood pressure monitoring and medication refills — no need to wait weeks for a new PCP.' },
    { name: 'Type 2 Diabetes Management', slug: 'diabetes-refills-online', desc: 'A1C follow-up, medication adjustments, and lifestyle guidance between in-person labs.' },
    { name: 'High Cholesterol (Hyperlipidemia)', slug: 'hyperlipidemia-refills-online', desc: 'Statin refills and lipid management without an insurance authorization cycle.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Prescription PPI management for chronic heartburn and reflux.' },
    { name: 'Thyroid Management', slug: 'thyroid-management-online', desc: 'Medication refills and dosing adjustments while you establish with a new endocrinologist.' },
    { name: 'Anxiety', slug: 'anxiety-treatment-online', desc: 'Evaluation and prescription management for generalized anxiety.' },
    { name: 'Insomnia', slug: 'insomnia-treatment-online', desc: 'Sleep evaluation and medication options for chronic insomnia.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescription — common in this age group, no need for an in-person visit.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for acute sinusitis.' },
    { name: 'Skin Conditions / Rashes', slug: 'skin-infection-treatment-online', desc: 'Evaluation of skin infections, rashes, and minor dermatologic concerns via video.' },
  ];

  const coverageOptions = [
    { option: 'COBRA', cost: '~$700–$1,400/mo', note: 'For a single person; covers only 18 months' },
    { option: 'ACA Marketplace Plan (Bronze)', cost: '~$400–$700/mo', note: 'High deductible; subsidies expiring post-2025' },
    { option: 'ACA Marketplace Plan (Silver)', cost: '~$600–$900/mo', note: 'Moderate deductible; most common choice' },
    { option: 'TeleDirectMD', cost: '$49/visit', note: 'Pay only when you need care — no monthly premium' },
  ];

  const featuredStates = [
    { name: 'Florida', slug: 'fl' },
    { name: 'Arizona', slug: 'az' },
    { name: 'Georgia', slug: 'ga' },
    { name: 'Texas', slug: 'tx' },
    { name: 'North Carolina', slug: 'nc' },
    { name: 'Tennessee', slug: 'tn' },
    { name: 'South Carolina', slug: 'sc' },
    { name: 'Colorado', slug: 'co' },
  ];

  const faqItems = [
    {
      q: 'I retired at 62 and won\'t be on Medicare until 65. Can TeleDirectMD help?',
      a: 'Absolutely — this is exactly the gap TeleDirectMD was built for. Whether you\'re on a high-deductible ACA plan, letting COBRA lapse, or currently uninsured, TeleDirectMD gives you access to a board-certified Family Medicine physician for $49 per visit. No prior authorization, no referral chains, no insurance required.'
    },
    {
      q: 'My ACA plan has a $5,000 deductible. Is it cheaper to pay TeleDirectMD directly?',
      a: 'For routine and non-emergency visits, often yes. If you haven\'t met your deductible, you\'re effectively paying cash for every in-network visit — often $150–$350 for a primary care appointment. TeleDirectMD\'s $49 flat fee is frequently cheaper for common conditions like blood pressure checks, medication refills, UTIs, sinus infections, and skin concerns.'
    },
    {
      q: 'Can you manage my chronic conditions — blood pressure, diabetes, cholesterol?',
      a: 'Yes, chronic condition management is one of TeleDirectMD\'s core strengths for this age group. We can prescribe and adjust blood pressure medications, diabetes medications (oral and some injectables), and cholesterol-lowering drugs. We\'ll also review your labs and make evidence-based adjustments. Regular follow-up visits keep you on track between in-person lab draws.'
    },
    {
      q: 'Do I need insurance to use TeleDirectMD?',
      a: 'No. TeleDirectMD is a direct-pay platform. You pay $49 at the time of booking — that\'s the complete cost of the visit. No insurance card, no co-pay surprises, no EOB to interpret. We also accept select insurance plans in some states if you prefer to use coverage.'
    },
    {
      q: 'What if I move to a different state in retirement?',
      a: 'No problem. TeleDirectMD is licensed in 42 states, so whether you retire in Florida, Arizona, the Carolinas, or anywhere else in our coverage area, you can continue seeing Dr. Bhavsar as long as you\'re physically in a covered state at the time of the visit. This makes us especially useful for early retirees who split time between states.'
    },
    {
      q: 'Can you provide prescription refills if my previous doctor retired or I moved away?',
      a: 'Yes. One of the most common needs among early retirees is continuing medications after a PCP transition. After a telehealth evaluation to confirm the medication is appropriate and safe, TeleDirectMD can prescribe refills for most ongoing medications and send them to any US pharmacy.'
    },
    {
      q: 'What conditions are outside telehealth scope?',
      a: 'Telehealth is not appropriate for medical emergencies — chest pain with shortness of breath, signs of stroke, severe injuries, or anything requiring physical examination or urgent imaging. We\'ll be direct with you if your situation requires in-person care and help guide you to the right resource. We never overpromise what telehealth can do.'
    },
    {
      q: 'How do I book and what does the visit look like?',
      a: 'Book online at teledirectmd.com — no referral or insurance pre-authorization needed. Pay the $49 fee, complete a short intake form, and connect via secure video at your appointment time. Most visits are 10–15 minutes. Prescriptions are sent electronically to your preferred pharmacy before the visit ends.'
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
          { "@type": "ListItem", "position": 3, "name": "Early Retirees (Pre-Medicare)", "item": pageUrl }
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
        "name": "Telehealth for Early Retirees — Affordable Care Before Medicare Begins",
        "description": "TeleDirectMD offers $49 flat-fee telehealth visits for early retirees in the pre-Medicare coverage gap. Chronic condition management, prescription refills, and more. 42 states.",
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
          <span aria-current="page">Early Retirees (Pre-Medicare)</span>
        </div>
      </nav>

      <section className="tdmd-hero">
        <div className="tdmd-container">
          <h1>Telehealth for Early Retirees — Affordable Care Before Medicare Begins</h1>
          <p className="tdmd-hero-sub tdmd-lead">
            Retired before 65 and navigating the coverage gap? TeleDirectMD offers a $49 flat-fee telehealth visit with a board-certified Family Medicine physician — often cheaper than your high-deductible plan's cost for the same visit. No referrals, no prior authorization, no surprise bills.
          </p>
          <ul className="tdmd-hero-bullets">
            <li>$49 flat fee — often less than your ACA plan deductible visit cost</li>
            <li>Chronic condition management: hypertension, diabetes, cholesterol, thyroid</li>
            <li>Prescription refills when your old PCP is unavailable</li>
            <li>Licensed in 42 states — perfect for retirees who split time between states</li>
            <li>Same-day visits, evenings &amp; weekends</li>
          </ul>
          <div className="tdmd-hero-ctas">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
          </div>
          <p className="tdmd-review-date">Medically reviewed by Parth Bhavsar, MD · Updated {today}</p>
        </div>
      </section>

      {/* The gap */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>The Pre-Medicare Coverage Gap — What It Actually Costs</h2>
          <p>The average US retirement age is <strong>62</strong>. Medicare doesn't start until <strong>65</strong>. That's a structural three-year gap that millions of Americans navigate every year — often with expensive, high-deductible coverage or no coverage at all.</p>
          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.94rem' }}>
              <thead>
                <tr style={{ background: 'var(--tdmd-navy)', color: '#fff' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Coverage Option</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Monthly Cost</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row, i) => (
                  <tr key={row.option} style={{ background: i % 2 === 0 ? '#fff' : 'var(--tdmd-bg-light)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: row.option === 'TeleDirectMD' ? '700' : '400', color: row.option === 'TeleDirectMD' ? 'var(--tdmd-teal)' : 'inherit' }}>{row.option}</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>{row.cost}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--tdmd-muted)' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--tdmd-muted)' }}>TeleDirectMD is a complement to your coverage strategy, not a replacement for major medical insurance. Use it for routine and urgent care visits where direct-pay is more economical than your plan's cost-sharing.</p>
        </div>
      </section>

      {/* Conditions */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Manage for Early Retirees</h2>
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

      {/* Scenario */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>A Common Scenario</h2>
          <blockquote style={{ borderLeft: '4px solid var(--tdmd-teal)', paddingLeft: '1.25rem', margin: '1.5rem 0', fontStyle: 'italic', color: 'var(--tdmd-muted)' }}>
            "You retired at 63, moved to Florida, and enrolled in an ACA bronze plan with a $6,000 deductible. Your blood pressure prescription runs out and your old internist back home won't renew remotely. A new PCP appointment is 6 weeks out. You book a TeleDirectMD visit for $49, Dr. Bhavsar reviews your history and labs, adjusts your medication, and sends the prescription to the Walgreens near your new home."
          </blockquote>
          <p>This is one of the most common situations we see. TeleDirectMD bridges the gap between where your old care was and where your new care hasn't started yet.</p>
        </div>
      </section>

      {/* States */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Licensed Across Top Retirement Destinations</h2>
          <p>Retiring to the Sun Belt? Splitting time between states? TeleDirectMD is licensed in 42 states including every major retirement destination.</p>
          <div className="tdmd-state-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {featuredStates.map(s => (
              <a key={s.slug} href={`/${s.slug}`} className="tdmd-state-pill">{s.name}</a>
            ))}
          </div>
          <p style={{ marginTop: '1rem' }}><a href="/states-we-serve">View all 42 states →</a></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="tdmd-section tdmd-bg-light">
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
          <h2 style={{ color: '#fff' }}>Retirement Shouldn't Come With a Healthcare Gap</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '540px', margin: '0 auto 1.5rem' }}>
            $49 flat fee. Same-day visits. 42 states. Chronic condition management and prescription refills — on your schedule.
          </p>
          <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
        </div>
      </section>

      {/* Cross-links */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>More from TeleDirectMD</h2>
          <div className="tdmd-card-grid">
            {[
              { href: '/who-we-serve/international-visitors', label: 'International Visitors', desc: 'Visiting the US without insurance? $49 flat-fee care.' },
              { href: '/who-we-serve/uninsured-affordable-care', label: 'Uninsured Adults', desc: 'Transparent pricing, no surprise bills.' },
              { href: '/who-we-serve/small-business-owners', label: 'Small Business Owners', desc: 'Self-employed care on your schedule.' },
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
