export default function InternationalVisitorsPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/international-visitors`;
  const today = new Date().toISOString().split('T')[0];

  const conditions = [
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Antibiotic prescription sent to any US pharmacy — no urgent care visit needed.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and facial pain.' },
    { name: 'Strep Throat', slug: 'strep-throat-treatment-online', desc: 'Antibiotic treatment for strep throat without waiting for an in-person appointment.' },
    { name: 'Respiratory Infections / Bronchitis', slug: 'common-cold-treatment-online', desc: 'Cold, flu, and bronchitis evaluation and treatment.' },
    { name: 'Pink Eye (Conjunctivitis)', slug: 'pink-eye-treatment-online', desc: 'Eye drop prescriptions sent to the nearest pharmacy.' },
    { name: 'Skin Infections / Rashes', slug: 'skin-infection-treatment-online', desc: 'Evaluation of rashes, cellulitis, and minor skin infections via video.' },
    { name: 'Traveler\'s Diarrhea', slug: 'stomach-flu-treatment-online', desc: 'Antibiotic and anti-motility medication for traveler\'s diarrhea.' },
    { name: 'Allergies', slug: 'allergies-treatment-online', desc: 'Prescription allergy medication for seasonal and environmental allergies.' },
    { name: 'Prescription Refills', slug: 'prescription-refills-online', desc: 'Refills for ongoing medications if you\'ve run short while traveling.' },
    { name: 'Migraine', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment and preventive medication management.' },
  ];

  const subgroups = [
    { label: 'Tourists on Vacation', icon: '✈️', desc: 'Sightseeing and fell ill? Get treated from your hotel room and pick up your prescription at the nearest pharmacy.' },
    { label: 'Business Travelers', icon: '💼', desc: 'On a work trip and need care fast? Same-day appointments fit your schedule without disrupting your meetings.' },
    { label: 'Parents Visiting Family', icon: '👨‍👩‍👧', desc: 'Visiting children or grandchildren in the US? We provide convenient care without navigating the US insurance system.' },
    { label: 'International Students (F-1 Visa)', icon: '🎓', desc: 'Not fully covered by your university plan? We fill the gap for conditions your student insurance doesn\'t cover.' },
  ];

  const featuredStates = [
    { name: 'Florida', slug: 'fl' },
    { name: 'New York', slug: 'ny' },
    { name: 'California', slug: 'ca' },
    { name: 'Texas', slug: 'tx' },
    { name: 'Georgia', slug: 'ga' },
    { name: 'Nevada', slug: 'nv' },
    { name: 'Illinois', slug: 'il' },
    { name: 'Hawaii', slug: 'hi' },
  ];

  const faqItems = [
    {
      q: 'Can I use TeleDirectMD without US health insurance?',
      a: 'Absolutely. TeleDirectMD is a direct-pay platform — no US health insurance is required at any point. You pay a flat $49 fee at the time of booking. That covers the full visit, including the physician consultation and any prescriptions sent to a US pharmacy. There are no surprise bills or insurance claims to file.'
    },
    {
      q: 'I have travel insurance from my home country. Can I use TeleDirectMD?',
      a: 'Yes. Many international travel insurance policies reimburse telehealth consultations. After your visit, TeleDirectMD can provide a visit summary and receipt that you can submit to your travel insurer for reimbursement. Check your policy for telehealth coverage terms. Either way, $49 is a fraction of what a US urgent care or ER would cost.'
    },
    {
      q: 'Which states is TeleDirectMD available in for international visitors?',
      a: 'TeleDirectMD is licensed in 42 US states. You can be seen by Dr. Bhavsar as long as you are physically located in one of our covered states at the time of the visit. This includes all major tourist destinations — Florida, California, New York, Texas, Nevada, Hawaii, Georgia, and more.'
    },
    {
      q: 'Can you send a prescription to a pharmacy near me?',
      a: 'Yes. TeleDirectMD can send prescriptions electronically to any US pharmacy, including CVS, Walgreens, Walmart, Rite Aid, and thousands of independent pharmacies. Just let us know the city or zip code you are visiting, and we\'ll route the prescription to the most convenient location.'
    },
    {
      q: 'What conditions can you treat during my visit to the US?',
      a: 'We treat most common, non-emergency conditions that travelers experience: UTIs, sinus infections, strep throat, respiratory infections, pink eye, skin rashes, traveler\'s diarrhea, allergies, and more. We also provide prescription refills if you\'ve run short of an ongoing medication. If your condition requires in-person evaluation or emergency care, we\'ll tell you clearly and help you find the right resource.'
    },
    {
      q: 'How does a visit work? Is it hard to set up?',
      a: 'It\'s straightforward. Book a same-day or next-available appointment online, pay the $49 flat fee, and complete a brief intake form. At your appointment time, you\'ll connect via secure video call from your smartphone or computer — no app download required. Most visits take 10 to 15 minutes. If a prescription is needed, it\'s sent to a nearby pharmacy before the visit ends.'
    },
    {
      q: 'Can you treat my child who is traveling with me?',
      a: 'Yes. TeleDirectMD sees patients ages 5 and older. If your child is traveling with you and becomes ill, we can evaluate and treat common pediatric conditions such as ear infections, sore throats, respiratory infections, and skin conditions. The same $49 flat fee applies.'
    },
    {
      q: 'Is a telehealth visit with TeleDirectMD legitimate medical care?',
      a: 'Yes. TeleDirectMD is operated by Dr. Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in 42 US states. Prescriptions issued through TeleDirectMD are valid at any US pharmacy. Your visit is documented in a HIPAA-compliant medical record system, and you can receive a visit summary to share with your home-country physician if needed.'
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
          { "@type": "ListItem", "position": 3, "name": "International Visitors & Tourists", "item": pageUrl }
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
        "name": "Online Doctor for International Visitors & Tourists in the USA",
        "description": "TeleDirectMD provides $49 flat-fee telehealth visits to international visitors and tourists in the USA. No US insurance required. Available in 42 states.",
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

      {/* Breadcrumbs */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">International Visitors &amp; Tourists</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="tdmd-hero">
        <div className="tdmd-container">
          <h1>Online Doctor for International Visitors &amp; Tourists in the USA — No US Insurance Required</h1>
          <p className="tdmd-hero-sub tdmd-lead">
            Visiting the US and need a doctor? TeleDirectMD connects you with a board-certified US physician via secure video — from your hotel room, vacation rental, or anywhere in 42 states. Flat $49 fee. No US insurance. Prescriptions sent to a nearby pharmacy.
          </p>
          <ul className="tdmd-hero-bullets">
            <li>No US health insurance required — ever</li>
            <li>$49 flat fee vs. $250–$350 for an in-person US doctor visit</li>
            <li>Available in 42 states — all major tourist destinations covered</li>
            <li>Prescriptions sent to any US pharmacy, including CVS, Walgreens, and Walmart</li>
            <li>Same-day visits, evenings &amp; weekends</li>
          </ul>
          <div className="tdmd-hero-ctas">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
          </div>
          <p className="tdmd-review-date">Medically reviewed by Parth Bhavsar, MD · Updated {today}</p>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>The US Healthcare Cost Problem for Visitors</h2>
          <p>Without US insurance, accessing medical care in America can be financially alarming. A routine doctor visit costs <strong>$250–$350 cash</strong>. A non-emergency ER visit routinely exceeds <strong>$5,000</strong>. A cardiac event can exceed <strong>$25,000</strong>.</p>
          <p>TeleDirectMD solves the non-emergency part — the UTIs, sinus infections, strep throats, and prescription needs that make up the vast majority of medical visits. For <strong>$49</strong>, you get a board-certified US physician, a diagnosis, and a prescription if needed, without leaving your hotel or Airbnb.</p>
          <div className="tdmd-cost-compare" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { label: 'TeleDirectMD Visit', cost: '$49', note: 'Flat fee, no surprise bills' },
              { label: 'US Urgent Care', cost: '$150–$300', note: 'Cash pay, no insurance' },
              { label: 'In-Person Doctor', cost: '$250–$350', note: 'Cash pay, no insurance' },
              { label: 'Emergency Room', cost: '$1,000+', note: 'Even for minor conditions' },
            ].map(item => (
              <div key={item.label} className="tdmd-card" style={{ textAlign: 'center', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: item.label === 'TeleDirectMD Visit' ? 'var(--tdmd-teal)' : 'inherit' }}>{item.cost}</div>
                <div style={{ fontWeight: '600', marginTop: '0.25rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--tdmd-muted)', marginTop: '0.25rem' }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Who We Help</h2>
          <div className="tdmd-card-grid">
            {subgroups.map(g => (
              <div key={g.label} className="tdmd-card">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{g.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{g.label}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--tdmd-muted)' }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Insurance note */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>Does Your Travel Insurance Cover This?</h2>
          <p>Many international travel insurance plans include or reimburse telehealth consultations. After your visit, TeleDirectMD provides a detailed visit summary and receipt that you can submit to your insurer. Check your policy for telehealth or telemedicine reimbursement terms.</p>
          <p>Even if reimbursement isn't available, $49 is a fraction of what US urgent care or an ER would cost — and the receipt still documents the medical care you received.</p>
        </div>
      </section>

      {/* Scenario block */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>A Common Scenario</h2>
          <blockquote style={{ borderLeft: '4px solid var(--tdmd-teal)', paddingLeft: '1.25rem', margin: '1.5rem 0', fontStyle: 'italic', color: 'var(--tdmd-muted)' }}>
            "You're on day 5 of a two-week vacation in Florida. You wake up with burning pain and you're pretty sure it's a UTI. You don't have US insurance, and the nearest urgent care clinic has a 2-hour wait and charges $250 cash. You book a TeleDirectMD visit on your phone, connect with Dr. Bhavsar in 20 minutes, and have a prescription waiting at the CVS around the corner — all for $49."
          </blockquote>
          <p>That's the gap TeleDirectMD fills. Fast, legitimate medical care at a price that doesn't derail your trip budget.</p>
        </div>
      </section>

      {/* Conditions */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Visitors</h2>
          <div className="tdmd-card-grid">
            {conditions.map(c => (
              <a key={c.slug} href={`/what-we-treat/${c.slug}`} className="tdmd-card tdmd-card-link">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{c.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--tdmd-muted)' }}>{c.desc}</p>
              </a>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            View the full list of <a href="/what-we-treat">60 conditions we treat →</a>
          </p>
        </div>
      </section>

      {/* States */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Available in 42 States — All Major Destinations</h2>
          <p>Wherever your trip takes you in the US, TeleDirectMD is likely available. We're licensed in 42 states including all top tourist destinations.</p>
          <div className="tdmd-state-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {featuredStates.map(s => (
              <a key={s.slug} href={`/${s.slug}`} className="tdmd-state-pill">{s.name}</a>
            ))}
          </div>
          <p style={{ marginTop: '1rem' }}><a href="/states-we-serve">View all 42 states →</a></p>
        </div>
      </section>

      {/* How it works */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>How It Works</h2>
          <ol style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><strong>Book online</strong> — select a same-day or next-available appointment. No account creation required.</li>
            <li><strong>Pay $49</strong> — flat fee, collected at booking. No insurance forms, no billing surprises.</li>
            <li><strong>Complete a short intake form</strong> — describe your symptoms so Dr. Bhavsar can review before the visit.</li>
            <li><strong>Connect via video</strong> — from your smartphone or laptop, no app download needed.</li>
            <li><strong>Get your prescription</strong> — sent electronically to a nearby US pharmacy before the visit ends.</li>
          </ol>
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
          <h2 style={{ color: '#fff' }}>Don't Let a Health Issue Derail Your Trip</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '540px', margin: '0 auto 1.5rem' }}>
            Same-day visits, $49 flat fee, prescriptions to any US pharmacy. Available in 42 states.
          </p>
          <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now — $49</a>
        </div>
      </section>

      {/* Cross-links */}
      <section className="tdmd-section tdmd-bg-light">
        <div className="tdmd-container">
          <h2>More from TeleDirectMD</h2>
          <div className="tdmd-card-grid">
            {[
              { href: '/who-we-serve/college-students', label: 'College Students', desc: 'Away at school and need a doctor? Same-day visits in 42 states.' },
              { href: '/who-we-serve/early-retirees', label: 'Early Retirees', desc: 'Retired before 65? Bridge the gap until Medicare.' },
              { href: '/who-we-serve/uninsured-affordable-care', label: 'Uninsured Adults', desc: 'No insurance? Transparent $49 cash-pay visits.' },
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
