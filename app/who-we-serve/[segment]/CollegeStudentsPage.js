export default function CollegeStudentsPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/college-students`;
  const today = new Date().toISOString().split('T')[0];

  const conditions = [
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'The most common reason college students visit student health. Antibiotic prescription sent to campus pharmacy or CVS.' },
    { name: 'Strep Throat', slug: 'strep-throat-treatment-online', desc: 'Antibiotic treatment for strep — quick evaluation and prescription without waiting at student health.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluate and treat sinus pressure, congestion, and post-nasal drip from your dorm room.' },
    { name: 'Pink Eye (Conjunctivitis)', slug: 'pink-eye-treatment-online', desc: 'Antibiotic eye drops sent to the nearest pharmacy — diagnosed in minutes via video.' },
    { name: 'Respiratory Infections / Bronchitis', slug: 'common-cold-treatment-online', desc: 'Evaluation for cold, flu, and bronchitis — get back to class faster.' },
    { name: 'Acne / Skin Concerns', slug: 'acne-treatment-online', desc: 'Topical and oral prescription acne treatment without an in-person dermatology visit.' },
    { name: 'Skin Infections / Rashes', slug: 'skin-infection-treatment-online', desc: 'Cellulitis, infected cuts, and skin rashes evaluated via video.' },
    { name: 'Anxiety', slug: 'anxiety-treatment-online', desc: 'Evaluation and prescription support for generalized anxiety — a leading concern among college students.' },
    { name: 'Allergies', slug: 'allergies-treatment-online', desc: 'Prescription allergy medications for seasonal and environmental allergies.' },
    { name: 'Prescription Refills', slug: 'prescription-refills-online', desc: 'Ongoing medication refills when you\'re away from your home-state doctor.' },
  ];

  const scenarios = [
    { title: 'Student health is closed', desc: 'It\'s 9 PM on a Sunday and your student health center opens Monday at 9 AM. TeleDirectMD is available evenings and weekends.' },
    { title: 'You\'re studying in a different state', desc: 'Your PCP is back home and won\'t prescribe remotely across state lines. TeleDirectMD is licensed in 42 states — wherever you\'re enrolled.' },
    { title: 'You aged off your parent\'s plan', desc: 'Turned 26 and haven\'t locked in new coverage yet? TeleDirectMD requires no insurance — just $49.' },
    { title: 'Back home for break, need a prescription', desc: 'College is out and your campus pharmacy is closed. We send prescriptions to any pharmacy in 42 states.' },
  ];

  const featuredStates = [
    { name: 'Georgia', slug: 'ga' },
    { name: 'Texas', slug: 'tx' },
    { name: 'Florida', slug: 'fl' },
    { name: 'North Carolina', slug: 'nc' },
    { name: 'Ohio', slug: 'oh' },
    { name: 'Pennsylvania', slug: 'pa' },
    { name: 'Illinois', slug: 'il' },
    { name: 'Tennessee', slug: 'tn' },
  ];

  const faqItems = [
    {
      q: 'I have student health insurance but the campus clinic is backed up. Can I use TeleDirectMD?',
      a: 'Yes. TeleDirectMD is a direct-pay platform — you can use it regardless of whether you have insurance. Many students find the $49 flat fee faster and more convenient than waiting for a student health appointment, especially for common conditions like UTIs, strep, or sinus infections. You pay $49 and connect same-day.'
    },
    {
      q: 'My home doctor is in another state. Can TeleDirectMD treat me at school?',
      a: 'Yes. This is one of the most common situations we handle for college students. TeleDirectMD is licensed in 42 states, so as long as you are physically located in one of our covered states at the time of your visit, we can see you and send a prescription to a pharmacy near campus. No out-of-state referral needed.'
    },
    {
      q: 'Can you send a prescription to my campus pharmacy?',
      a: 'Yes. We can send prescriptions electronically to any US pharmacy, including campus pharmacies, CVS, Walgreens, Walmart, and independent pharmacies. Just tell us the campus pharmacy name and address, or the zip code nearest you, and we\'ll route it there.'
    },
    {
      q: 'I don\'t have insurance right now. Is that okay?',
      a: 'Absolutely. TeleDirectMD requires no insurance whatsoever. You pay a flat $49 at the time of booking — that\'s the full cost of the visit including the physician consultation and any prescription. No forms, no billing, no surprise charges.'
    },
    {
      q: 'Can you treat anxiety or mental health concerns?',
      a: 'TeleDirectMD can evaluate and prescribe for generalized anxiety disorder as part of our clinical scope. However, for ongoing behavioral health care, therapy, or more complex mental health needs, a dedicated mental health provider is more appropriate. We\'ll be honest about what we can manage effectively via telehealth and help guide you to the right resource if needed.'
    },
    {
      q: 'What if I get sick during winter or spring break when I\'m back home?',
      a: 'No problem. TeleDirectMD is available in 42 states — not just your college state. As long as you\'re physically in one of our covered states (which includes virtually every major state), you can be seen and get a prescription sent to a local pharmacy near home.'
    },
    {
      q: 'Is this real medical care or just advice?',
      a: 'This is fully licensed medical care. TeleDirectMD is operated by Dr. Parth Bhavsar, MD, a board-certified Family Medicine physician. Diagnoses and prescriptions issued through TeleDirectMD are valid at any US pharmacy, documented in a HIPAA-compliant medical record, and carry the same legal weight as an in-person visit.'
    },
    {
      q: 'Can my younger sibling (under 18) use TeleDirectMD?',
      a: 'TeleDirectMD sees patients ages 5 and older, but patients under 18 must have a parent or legal guardian present during the visit. If you are a college student and an adult (18+), no guardian presence is required.'
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
          { "@type": "ListItem", "position": 3, "name": "College Students", "item": pageUrl }
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
        "name": "Online Doctor for College Students — Same-Day Care From Your Dorm, Anywhere",
        "description": "TeleDirectMD provides same-day telehealth visits for college students across 42 states. UTI, strep, sinus — $49 flat fee, no insurance required. Prescriptions sent to campus or nearby pharmacy.",
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
          <span aria-current="page">College Students</span>
        </div>
      </nav>

      <section className="tdmd-hero">
        <div className="tdmd-container">
          <h1>Online Doctor for College Students — Same-Day Care From Your Dorm, Anywhere</h1>
          <p className="tdmd-hero-sub tdmd-lead">
            Student health closed? Your doctor back home won't prescribe across state lines? TeleDirectMD connects you with a board-certified physician via video — from your dorm, apartment, or anywhere in 42 states. Flat $49 fee. No insurance required. Prescriptions sent to campus or your nearest pharmacy.
          </p>
          <ul className="tdmd-hero-bullets">
            <li>Available evenings &amp; weekends — when student health is closed</li>
            <li>Licensed in 42 states — wherever your school is, we're there</li>
            <li>$49 flat fee — no insurance required</li>
            <li>UTI, strep, sinus, pink eye — diagnosed and treated in one visit</li>
            <li>Prescriptions sent to campus pharmacy, CVS, Walgreens, or any US pharmacy</li>
          </ul>
          <div className="tdmd-hero-ctas">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
          </div>
          <p className="tdmd-review-date">Medically reviewed by Parth Bhavsar, MD · Updated {today}</p>
        </div>
      </section>

      {/* When TeleDirectMD helps */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>When TeleDirectMD Fills the Gap</h2>
          <div className="tdmd-card-grid">
            {scenarios.map(s => (
              <div key={s.title} className="tdmd-card">
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--tdmd-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Conditions We Treat for College Students</h2>
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

      {/* States */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>Available at Your School — Wherever That Is</h2>
          <p>TeleDirectMD is licensed in 42 states. Whether your school is in Georgia, Texas, Ohio, California, or anywhere in between, you can get same-day care without leaving campus.</p>
          <div className="tdmd-state-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {featuredStates.map(s => (
              <a key={s.slug} href={`/${s.slug}`} className="tdmd-state-pill">{s.name}</a>
            ))}
          </div>
          <p style={{ marginTop: '1rem' }}><a href="/states-we-serve">View all 42 states →</a></p>
        </div>
      </section>

      {/* How it works */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>How It Works</h2>
          <ol style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><strong>Book online</strong> — pick a same-day slot or next-available appointment. Takes 2 minutes.</li>
            <li><strong>Pay $49</strong> — flat fee at booking. No insurance card needed.</li>
            <li><strong>Fill out the intake form</strong> — describe your symptoms so Dr. Bhavsar is prepared.</li>
            <li><strong>Video visit</strong> — connect from your phone or laptop. No app required. Usually 10–15 minutes.</li>
            <li><strong>Prescription sent</strong> — to your campus pharmacy, CVS, Walgreens, or wherever is closest.</li>
          </ol>
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
          <h2 style={{ color: '#fff' }}>Sick at School? You Don't Have to Wait.</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '540px', margin: '0 auto 1.5rem' }}>
            Same-day visits, evenings and weekends. $49 flat fee. Prescriptions sent to campus pharmacy.
          </p>
          <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
        </div>
      </section>

      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>More from TeleDirectMD</h2>
          <div className="tdmd-card-grid">
            {[
              { href: '/who-we-serve/international-visitors', label: 'International Visitors', desc: 'No US insurance? $49 flat-fee care in 42 states.' },
              { href: '/who-we-serve/gig-workers', label: 'Gig Workers', desc: 'Flexible care for freelancers and delivery drivers.' },
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
