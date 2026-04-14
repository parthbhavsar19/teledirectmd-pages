export default function TruckDriversPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/truck-drivers`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Ongoing blood pressure monitoring and medication refills — critical for maintaining your CDL medical card.' },
    { name: 'Type 2 Diabetes / Blood Sugar Management', slug: 'diabetes-refills-online', desc: 'A1C follow-up, medication adjustments, and lifestyle guidance to keep glucose levels within DOT thresholds.' },
    { name: 'Cholesterol Management', slug: 'hyperlipidemia-refills-online', desc: 'Statin refills and lipid panel review to reduce long-term cardiovascular risk on the road.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescriptions sent to the nearest pharmacy along your route.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and post-nasal drip without leaving your cab.' },
    { name: 'Respiratory Infections / Bronchitis', slug: 'common-cold-treatment-online', desc: 'Cold, flu, and bronchitis treatment to get you back on the road faster.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Medication management for heartburn and reflux — common complaints among long-haul drivers.' },
    { name: 'Migraines', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment to manage headaches that impair driving safety.' },
    { name: 'Gout', slug: 'gout-treatment-online', desc: 'Acute flare treatment and prevention refills for gout — worsened by dehydration and diet on the road.' },
    { name: 'Smoking Cessation', slug: 'smoking-cessation-treatment-online', desc: 'Prescription support (varenicline, NRT) to help you quit — smoking is a leading DOT physical risk factor.' },
  ];

  /* ── High-trucker-traffic states to link ─────────────────────────── */
  const featuredStates = [
    { name: 'Texas', slug: 'tx' },
    { name: 'Tennessee', slug: 'tn' },
    { name: 'Ohio', slug: 'oh' },
    { name: 'Georgia', slug: 'ga' },
    { name: 'Indiana', slug: 'in' },
    { name: 'Pennsylvania', slug: 'pa' },
    { name: 'Illinois', slug: 'il' },
    { name: 'North Carolina', slug: 'nc' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'Can TeleDirectMD treat me if I\'m in a different state than my home state?',
      a: 'Yes. TeleDirectMD is licensed in 41 states. You can be seen by the same board-certified physician regardless of which state you are driving through, as long as you are physically located in one of our covered states at the time of the visit. This is one of the core advantages for interstate truck drivers — no need to find a new provider every time you cross a state line.'
    },
    {
      q: 'Can you help me manage my blood pressure to pass my DOT physical?',
      a: 'We cannot perform the FMCSA-required DOT physical exam itself — that requires an in-person certified medical examiner. However, TeleDirectMD can play a critical role in helping you manage the chronic conditions that determine whether you pass. We can prescribe and adjust blood pressure medications, monitor your progress, and help you achieve the targets required for DOT medical certification. Think of us as the care between your DOT physicals.'
    },
    {
      q: 'Do I need insurance to use TeleDirectMD?',
      a: 'No. TeleDirectMD offers transparent cash-pay pricing starting at $49 per visit. Insurance is not required. We also accept select insurance plans in some states. You will know your cost upfront before booking — no surprise bills.'
    },
    {
      q: 'Can you send prescriptions to a pharmacy along my route?',
      a: 'Absolutely. We can send prescriptions electronically to any pharmacy in the United States, including chains like CVS, Walgreens, and Walmart that are located at or near truck stops along your route. Just tell us where you\'ll be, and we\'ll route the prescription accordingly.'
    },
    {
      q: 'What conditions can you treat for truck drivers via telehealth?',
      a: 'We treat a wide range of conditions relevant to truckers, including hypertension, type 2 diabetes, high cholesterol, UTIs, sinus infections, respiratory infections, acid reflux, migraines, gout, skin conditions, anxiety, and more. We also provide smoking cessation support and medication refills for chronic conditions. See our full list of 60 conditions on our What We Treat page.'
    },
    {
      q: 'How long does a telehealth visit take?',
      a: 'Most visits take 10 to 15 minutes. You connect via secure video from your smartphone — no app download required. If you need a prescription, it can be sent to your pharmacy before the visit is even over.'
    },
    {
      q: 'Is telehealth HIPAA compliant?',
      a: 'Yes. TeleDirectMD uses a fully HIPAA-compliant telehealth platform. All video visits are encrypted, and your medical records are stored securely. We do not sell or share your health information. Your privacy is protected by the same federal regulations that govern in-person healthcare.'
    },
    {
      q: 'Can you treat sleep problems that affect my driving?',
      a: 'We can evaluate and treat certain sleep-related concerns, including insomnia and fatigue. However, formal sleep studies and CPAP prescriptions for obstructive sleep apnea require in-person evaluation and are outside the scope of a telehealth visit. We can help you understand when a sleep study is warranted and provide referral guidance.'
    },
  ];

  /* ── JSON-LD Schema ──────────────────────────────────────────────── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": "Truck Drivers", "item": pageUrl }
        ]
      },
      {
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
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about#physician`,
        "name": "Parth Bhavsar, MD",
        "medicalSpecialty": "FamilyMedicine",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "TeleDirectMD"
        },
        "licensedIn": ["AL","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NC","ND","OH","OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": "Telehealth for Truck Drivers — See a Doctor From Anywhere on the Road",
        "description": "TeleDirectMD offers telehealth for truck drivers across 41 states. Manage blood pressure, diabetes, and chronic conditions from your cab. No insurance required.",
        "inLanguage": "en-US",
        "breadcrumb": { "@id": `${pageUrl}#breadcrumbs` },
        "author": { "@id": `${baseUrl}/about#physician` },
        "datePublished": today,
        "dateModified": today,
        "publisher": {
          "@type": "Organization",
          "name": "TeleDirectMD",
          "url": baseUrl
        },
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".tdmd-hero-sub", "#truck-drivers-faq .tdmd-faq-question"]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────── */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">Truck Drivers</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="truck-drivers-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Telehealth for Truck Drivers — See a Doctor From Anywhere on the Road</h1>
              <p className="tdmd-hero-sub">Licensed physician in 41 states. No insurance required. Same-day visits, evenings & weekends.</p>
              <p>
                Long-haul truckers face the worst occupational health profile in America — yet millions can't get care because they're always on the move. TeleDirectMD brings the doctor to your cab, your truck stop, your sleeper berth. A board-certified physician with same-day availability — including evenings and weekends — licensed across 41 states.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified physician — not a PA, not an NP, not an algorithm</li>
                <li>Licensed in 41 states — covers interstate routes coast to coast</li>
                <li>Prescriptions sent to any pharmacy on your route</li>
                <li>Transparent cash-pay pricing starting at $49</li>
              </ul>
              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
              </div>
              <p className="tdmd-reviewed">
                Last reviewed on {today} by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">
                  Parth Bhavsar, MD
                </a>
              </p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>Why Truck Drivers Choose TeleDirectMD</h2>
                <ul>
                  <li>See a doctor from any truck stop in 41 states</li>
                  <li>Get prescriptions sent to pharmacies along your route</li>
                  <li>Manage blood pressure and diabetes to protect your CDL</li>
                  <li>No scheduling conflicts — same-day visits, evenings & weekends</li>
                  <li>HIPAA-compliant, secure video visits from your phone</li>
                </ul>
                <p className="tdmd-hero-note">No app download required. Works on any smartphone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="truck-drivers-problem">
        <div className="tdmd-container">
          <h2>The Health Crisis Facing American Truck Drivers</h2>
          <p>
            Truck drivers have among the most severe health disparities of any occupational group in the United States. The numbers are staggering: <strong>68–70% of long-haul truckers are obese</strong> — nearly twice the national average of 36.5%. Diabetes rates are <strong>double the national rate</strong>. Hypertension prevalence in truckers exceeds global benchmarks in 77% of studies reviewed. And <strong>88% of truckers have at least one cardiovascular risk factor</strong>, with 9% carrying all three — hypertension, smoking, and obesity — compared to just 2% of the general population.
          </p>
          <p>
            Yet accessing healthcare is nearly impossible when your office is a moving vehicle. <strong>32% of truckers cite scheduling conflicts</strong> as a direct barrier to care. 19.6% cite financial barriers. And <strong>25% of independent owner-operators use emergency rooms as their primary healthcare source</strong> — the most expensive and least effective way to manage chronic disease.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You're driving through Tennessee and you've had a persistent sinus infection for three days — congestion, pressure, post-nasal drip. You don't have a local doctor, and you can't afford to lose a half-day sitting in an urgent care waiting room. With TeleDirectMD, you pull over at a rest stop, request a same-day visit on your phone, and connect with a board-certified physician. If you need an antibiotic, the prescription goes to the pharmacy at the next truck stop on your route.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How TeleDirectMD Solves It ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="truck-drivers-solution">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Solves Healthcare Access for Truckers</h2>
          <p>
            TeleDirectMD was built for people who can't always stop — and that includes the 3.5 million CDL holders who keep America's supply chain moving. Here's how we address the specific barriers truckers face:
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>41-State Coverage</h3>
              <p>You cross state lines constantly. TeleDirectMD is licensed in 41 states, meaning the same physician can treat you whether you're in Texas, Tennessee, Ohio, or anywhere on your route. No need to find a new provider at every stop.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Same-Day, Evenings & Weekends</h3>
              <p>Your schedule doesn't follow business hours. TeleDirectMD offers same-day availability, including evening and weekend hours — so you can get care on a break at a rest stop without waiting days for an appointment.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Mobile-First</h3>
              <p>Connect via secure video from your smartphone. No app download required. Works anywhere you have a cell signal — truck stops, rest areas, or your sleeper berth.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Prescriptions on Your Route</h3>
              <p>We send prescriptions electronically to any pharmacy in the U.S. — including CVS, Walgreens, and Walmart locations at or near truck stops along your route. Tell us where you'll be, and we'll route it there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DOT Physical Callout ─────────────────────────────── */}
      <section className="tdmd-section" id="truck-drivers-dot">
        <div className="tdmd-container">
          <h2>About DOT Physicals and Your CDL Medical Card</h2>
          <div className="tdmd-cost-note">
            <p style={{ margin: '0 0 0.75rem' }}>
              <strong>Important:</strong> TeleDirectMD <strong>cannot</strong> perform the FMCSA-required DOT physical exam — it requires an in-person certified medical examiner. As of June 2025, DOT medical certification is now fully electronic, creating increased driver awareness of their health status.
            </p>
            <p style={{ margin: 0 }}>
              <strong>What we can do:</strong> We help you manage the chronic conditions that determine whether you pass your DOT physical — blood pressure control, diabetes management, weight management, cholesterol, and smoking cessation. Keep your CDL medical card current by getting chronic condition care from the road. Think of TeleDirectMD as the care between your DOT physicals.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Conditions We Commonly Treat ─────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="truck-drivers-conditions">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Truck Drivers</h2>
          <p>
            Each condition below is linked to a detailed treatment page with information about what to expect, eligibility, medications, and how telehealth works for that specific condition.
          </p>
          <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1rem' }}>
            {conditions.map((c) => (
              <a
                key={c.slug}
                href={`/${c.slug}`}
                className="tdmd-card"
                style={{ textDecoration: 'none', color: 'var(--tdmd-text)', borderLeft: '4px solid var(--tdmd-teal)' }}
              >
                <h3 style={{ margin: '0 0 0.3rem', color: 'var(--tdmd-navy)', fontSize: '1.05rem' }}>{c.name}</h3>
                <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--tdmd-muted)', lineHeight: '1.45' }}>{c.desc}</p>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All 60 Conditions We Treat</a>
          </div>
        </div>
      </section>

      {/* ── 6. How It Works ─────────────────────────────────────── */}
      <section className="tdmd-section" id="truck-drivers-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works — 3 Simple Steps</h2>
          <p>Getting care from TeleDirectMD is designed to be fast, simple, and mobile-first — because your time on the road matters.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a Visit</h3>
                <p>Go to TeleDirectMD.com on your smartphone and request a visit. No app download needed. Tell us your symptoms and which state you're currently in. Takes about 2 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect With Your Doctor</h3>
                <p>A board-certified physician will connect with you via secure video. We'll review your symptoms, medical history, and determine the best treatment plan. Most visits take 10–15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get Treated — Prescriptions Sent to Your Route</h3>
                <p>If medication is needed, we'll send the prescription electronically to the pharmacy nearest to your current location or upcoming stop. Pick it up and get back on the road.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Transparent Pricing ──────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="truck-drivers-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing — No Surprise Bills</h2>
          <p>Telehealth visits are significantly cheaper than in-person alternatives. A Penn Medicine study found telehealth visits average $96 compared to $509 for in-person episodes — five times less expensive.</p>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$49</p>
              <p className="tdmd-price-sub">Self-pay starting price per visit</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified physician consultation</li>
                <li>Prescriptions sent to any U.S. pharmacy</li>
                <li>No hidden fees or surprise billing</li>
                <li>Insurance accepted in select states</li>
              </ul>
            </div>
            <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
              <h3>How We Compare</h3>
              <p className="tdmd-price-caption">Typical costs without insurance. Actual costs vary by location.</p>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>TeleDirectMD</span><span>$49</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ '--w': 10 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Telehealth avg.</span><span>$40–$90</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 18 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Urgent Care</span><span>$150–$350</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 50 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Emergency Room</span><span>$500–$3,000+</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 100 }} /></div>
              </div>
              <p className="tdmd-price-footnote">Sources: Penn Medicine telehealth cost study; GoodRx telehealth pricing data 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Who We Are / Trust Signals ───────────────────────── */}
      <section className="tdmd-section" id="truck-drivers-trust">
        <div className="tdmd-container">
          <h2>Who You're Seeing — A Real Doctor, Not an Algorithm</h2>
          <p>
            When you visit TeleDirectMD, you're seeing a licensed, board-certified physician — not a physician assistant, not a nurse practitioner, not a chatbot. <a href="/about" style={{ color: 'var(--tdmd-navy)', fontWeight: 700 }}>Dr. Parth Bhavsar, MD</a>, is a board-certified family medicine physician licensed across 41 states, providing the same standard of care you'd receive in person.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified in Family Medicine</li>
            <li>Licensed in 41 U.S. states</li>
            <li>HIPAA-compliant platform — your data is encrypted and protected</li>
            <li>TeleDirectMD does not sell or share your health information</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>
            TeleDirectMD is HIPAA-compliant. We do not sell or share your health information. All visits are conducted via encrypted video, and medical records are stored securely.
          </p>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="truck-drivers-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — Telehealth for Truck Drivers</h2>
          <div className="tdmd-faq-list" role="list">
            {faqItems.map((item, i) => (
              <details key={i} className="tdmd-faq-item" role="listitem">
                <summary className="tdmd-faq-question">{item.q}</summary>
                <div className="tdmd-faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Final CTA ───────────────────────────────────────── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Get seen today from your phone — no insurance required, no waiting room.</h3>
              <p>Pull over, request a same-day visit from your phone, and connect with a board-certified physician. Prescriptions sent to the pharmacy closest to your route.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Who We Serve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. State Links ─────────────────────────────────────── */}
      <section className="tdmd-section" id="truck-drivers-states">
        <div className="tdmd-container">
          <h2>Telehealth for Truckers — Available in These High-Traffic States</h2>
          <p>TeleDirectMD is licensed in 41 states. Here are some of the states with the highest trucking traffic where we can see you today:</p>
          <div className="tdmd-other-states-grid">
            {featuredStates.map((s) => (
              <a key={s.slug} className="tdmd-other-state-link" href={`/${s.slug}`}>
                {s.name}
              </a>
            ))}
          </div>
          <p style={{ marginTop: '0.75rem' }}>
            <a href="/states-we-serve" style={{ color: 'var(--tdmd-navy)', fontWeight: 700, textDecoration: 'underline' }}>View all 41 states we serve →</a>
          </p>
        </div>
      </section>

      {/* ── 12. Cross-links to other audiences ──────────────────── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>Other Communities We Serve</h3>
            <p className="tdmd-link-cloud">
              <a href="/who-we-serve/gig-workers">Gig Workers & Freelancers</a>
              <a href="/who-we-serve/uninsured-affordable-care">Uninsured & Affordable Care</a>
              <a href="/who-we-serve">Who We Serve Hub</a>
            </p>
          </div>
          <div className="tdmd-inline-links" style={{ marginTop: '1rem' }}>
            <h3>More from TeleDirectMD</h3>
            <p className="tdmd-link-cloud">
              <a href="/what-we-treat">What We Treat</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/insurance">Insurance & Pricing</a>
              <a href="/faq">FAQs</a>
              <a href="/book-online">Book a Visit</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── 13. References ──────────────────────────────────────── */}
      <section className="tdmd-section" id="truck-drivers-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/24566926/" rel="nofollow noopener" target="_blank">National Survey of Long-Haul Truck Driver Health and Injury — NIH/NIOSH</a></li>
            <li><a href="https://www.cdc.gov/niosh/newsroom/feature/truckers.html" rel="nofollow noopener" target="_blank">Long-haul Truck Drivers — CDC NIOSH</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/36457756/" rel="nofollow noopener" target="_blank">Cardiometabolic risk factors and mental health status among truck drivers — PubMed</a></li>
            <li><a href="https://www.lytx.com/resources/blog/how-driver-health-wellness-affects-everyone" rel="nofollow noopener" target="_blank">Driving Healthy: How Driver Health & Wellness Affects Everyone — Lytx</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits — Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? — GoodRx</a></li>
            <li><a href="https://www.naohp.com/telehealth-exams-and-dot-drivers/" rel="nofollow noopener" target="_blank">Telehealth Exams and DOT Drivers — NAOHP</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="truck-drivers-disclaimer">
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of our licensed states at the time of the visit. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.
          </p>
          <p>
            TeleDirectMD cannot perform DOT physical exams. The FMCSA-required DOT physical must be completed by an in-person certified medical examiner. TeleDirectMD can assist with managing chronic conditions relevant to DOT medical certification.
          </p>
        </div>
      </section>
    </>
  );
}
