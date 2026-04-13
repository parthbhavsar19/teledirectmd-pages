export default function UninsuredAffordableCarePage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/uninsured-affordable-care`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescriptions sent to your local pharmacy — no insurance required, no waiting room.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and post-nasal drip from your phone for $49.' },
    { name: 'Respiratory Infections', slug: 'common-cold-treatment-online', desc: 'Cold, flu, and respiratory infection treatment — transparent cash-pay pricing, no insurance needed.' },
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Ongoing blood pressure monitoring and medication refills at a fraction of the cost of an in-person visit.' },
    { name: 'Type 2 Diabetes Management', slug: 'diabetes-refills-online', desc: 'Medication refills and guidance to keep blood sugar in range — affordable, physician-led care.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Medication management for heartburn and reflux without a pricey specialist or insurance copay.' },
    { name: 'Skin Conditions / Eczema', slug: 'eczema-treatment-online', desc: 'Prescription treatment for eczema and common skin conditions — evaluated by a board-certified physician.' },
    { name: 'Influenza', slug: 'influenza-treatment-online', desc: 'Same-day evaluation and antiviral prescriptions for the flu — know your cost before you book.' },
    { name: 'Migraines', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment and refills without insurance — affordable, physician-led.' },
    { name: 'Pink Eye / Conjunctivitis', slug: 'pink-eye-treatment-online', desc: 'Fast evaluation and prescription drops for pink eye — no urgent care copay, no insurance required.' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'How much does TeleDirectMD cost without insurance?',
      a: 'TeleDirectMD charges a transparent flat fee starting at $49 per visit for self-pay patients — no insurance required. You will see your cost before you book, so there are no surprises. For context, a Penn Medicine study found telehealth visits average $96 compared to $509 for an in-person episode of care, and GoodRx reports that telehealth visits without insurance typically range from $40 to $90 depending on the platform. TeleDirectMD\'s $49 starting price is at the lower end of that range and comes with a board-certified physician — not a PA or NP.'
    },
    {
      q: 'Are there any hidden fees?',
      a: 'No. TeleDirectMD does not charge enrollment fees, subscription fees, or facility fees. The cost displayed before you book is the cost you pay — period. There are no surprise bills after your visit. If a prescription is sent to your pharmacy, the medication cost is separate and depends on the drug and your pharmacy; we will always discuss lower-cost generic options where available.'
    },
    {
      q: 'What\'s included in a telehealth visit?',
      a: 'Every TeleDirectMD visit includes a secure video consultation with a board-certified physician, a clinical evaluation of your symptoms and medical history, a treatment plan, and — when appropriate — an electronic prescription sent directly to the pharmacy of your choice. Most visits take 10 to 15 minutes. No app download is required; the visit works on any smartphone.'
    },
    {
      q: 'Can you prescribe medications if I don\'t have insurance?',
      a: 'Yes. TeleDirectMD can prescribe medications regardless of whether you have insurance. Prescriptions are sent electronically to any pharmacy in the United States — CVS, Walgreens, Walmart, Kroger, or any independent pharmacy. If cost is a concern, ask us about generic alternatives; many are available for $4–$20 at major chains. We do not prescribe controlled substances.'
    },
    {
      q: 'Is TeleDirectMD available in my state?',
      a: 'TeleDirectMD is licensed in 41 states: Alabama, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas, Utah, Washington, West Virginia, Wisconsin, and Wyoming. You must be physically located in one of these states at the time of your visit. Visit our States We Serve page for the full list.'
    },
    {
      q: 'How does TeleDirectMD compare to urgent care or the ER?',
      a: 'The cost difference is substantial. An urgent care visit without insurance typically costs $150 to $350. An emergency room visit averages $500 to $3,000 or more — and that\'s before imaging, labs, or medications. TeleDirectMD starts at $49 for telehealth-appropriate conditions. For non-emergency issues — infections, medication refills, chronic condition management, and more — a telehealth visit provides the same clinical quality at a fraction of the cost. The American College of Emergency Physicians estimates that a significant share of ER visits could be appropriately handled in lower-acuity settings.'
    },
    {
      q: 'Can I see the same doctor for ongoing care?',
      a: 'Yes. We encourage continuity of care. Many patients who use TeleDirectMD for chronic conditions like hypertension, diabetes, and acid reflux return to the same physician for ongoing management. Having a consistent physician who knows your medical history leads to better outcomes and avoids the cost and inefficiency of repeating your history to a new provider each time. You can request your prior visit history when booking.'
    },
    {
      q: 'What forms of payment do you accept?',
      a: 'TeleDirectMD accepts all major credit and debit cards (Visa, Mastercard, American Express, Discover), as well as HSA and FSA cards. Payment is collected at the time of booking. We do not require insurance for payment. In select states, we also accept certain insurance plans — contact us to confirm whether your plan is accepted in your state.'
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
          { "@type": "ListItem", "position": 3, "name": "Uninsured & Affordable Care", "item": pageUrl }
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
        "medicalSpecialty": "InternalMedicine",
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
        "name": "Affordable Online Doctor Visits Without Insurance — Transparent Pricing, No Surprises",
        "description": "TeleDirectMD offers affordable telehealth visits without insurance across 41 states. Cash-pay starting at $49. Board-certified physician. Same-day visits, evenings & weekends.",
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
          "cssSelector": ["h1", ".tdmd-hero-sub", "#uninsured-faq .tdmd-faq-question"]
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
          <span aria-current="page">Uninsured &amp; Affordable Care</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="uninsured-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Affordable Online Doctor Visits Without Insurance — Transparent Pricing, No Surprises</h1>
              <p className="tdmd-hero-sub">Licensed physician in 41 states. Cash-pay starting at $49. Same-day visits, evenings &amp; weekends.</p>
              <p>
                Nearly 9% of Americans who were enrolled in ACA marketplace plans dropped coverage in 2026 after premium increases of over 100% following subsidy expiration. 23% of gig workers had no health insurance even before the lapse, and 58% of uninsured gig workers cited prohibitive cost as the reason. Telehealth is a direct alternative: transparent cash-pay pricing, no insurance required, clinical-quality care from any smartphone.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified physician — not a PA, not an NP, not an algorithm</li>
                <li>Licensed in 41 states</li>
                <li>Transparent cash-pay pricing starting at $49 — no hidden fees</li>
                <li>No insurance required, no surprise billing</li>
                <li>Same-day visits, evenings &amp; weekends</li>
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
                <h2>Why the Uninsured Choose TeleDirectMD</h2>
                <ul>
                  <li>Know your cost upfront — $49 flat fee, no surprise billing</li>
                  <li>No insurance paperwork, no prior authorizations</li>
                  <li>Prescriptions sent to any pharmacy in the U.S.</li>
                  <li>Physician-led care, not an NP or algorithm</li>
                  <li>No enrollment or subscription fees required</li>
                </ul>
                <p className="tdmd-hero-note">No app download required. Works on any smartphone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-problem">
        <div className="tdmd-container">
          <h2>The Uninsured Crisis in America — Millions Newly Without Coverage</h2>
          <p>
            The expiration of enhanced ACA subsidies at the end of 2025 triggered the largest single-year disruption to marketplace enrollment in the law's history. Premiums more than doubled for millions of enrollees who relied on those subsidies. The Congressional Budget Office projected that marketplace enrollment could decline by roughly half in 2026 compared to 2025 levels — removing health coverage from an estimated 4 to 5 million Americans.
          </p>
          <p>
            Even before the lapse, <strong>more than 30 million Americans were uninsured</strong>, with millions more underinsured. The financial consequences of being uninsured are well-documented: the average emergency room visit costs between $500 and $3,000 or more; a single urgent care visit without insurance runs $150 to $350. Many uninsured Americans delay or forgo care entirely until conditions worsen — often resulting in the most expensive outcome of all: an ER visit.
          </p>
          <p>
            Telehealth changes this calculus. A <strong>Penn Medicine study found that telehealth visits average $96 compared to $509 for an in-person episode of care</strong> — more than five times less expensive. GoodRx reports telehealth visits without insurance typically range from $40 to $90. TeleDirectMD starts at $49 — with no hidden fees and no surprise billing.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You lost your ACA plan after premiums doubled in 2026. You've had a sore throat and low-grade fever for three days. You don't have a doctor, and a walk-in clinic would cost $200 or more. With TeleDirectMD, you request a same-day visit from your phone for $49. A board-certified physician evaluates you, and if you need an antibiotic, the prescription is sent to the pharmacy down the street.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How TeleDirectMD Solves It ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="uninsured-solution">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Solves Healthcare Access for the Uninsured</h2>
          <p>
            Cost transparency and access — not insurance — are the two biggest barriers to care for uninsured Americans. TeleDirectMD is built around both.
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Transparent Cash-Pay Pricing</h3>
              <p>$49 flat fee per visit. You see the cost before you book. No facility fees, no surprise billing, no insurance paperwork. If you need a prescription, we'll discuss cost-effective generic options at the time of your visit.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>41-State Coverage</h3>
              <p>TeleDirectMD is licensed in 41 states, so whether you're in Florida, Texas, California, or any of our covered states, you can see the same board-certified physician — without finding a new provider or paying to establish care.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Same-Day, Evenings &amp; Weekends</h3>
              <p>Illness doesn't follow business hours. TeleDirectMD offers same-day availability including evenings and weekends — so you're not forced into an urgent care visit because you couldn't get a next-week appointment.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Prescriptions to Any Pharmacy</h3>
              <p>We send prescriptions electronically to any pharmacy in the United States — CVS, Walgreens, Walmart, Kroger, or your neighborhood independent. Generic alternatives are always discussed to minimize out-of-pocket medication costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Expanded Pricing Section ─────────────────────────── */}
      <section className="tdmd-section" id="uninsured-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing — Know Your Cost Before You Book</h2>
          <p>
            For uninsured patients, cost is the number-one barrier to care. TeleDirectMD was built to remove that barrier with a single transparent price — no insurance required, no surprise bills.
          </p>
          <div className="tdmd-cost-note" style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: 0 }}>
              <strong>No hidden fees. No surprise billing. You'll know your cost before you book.</strong>
            </p>
          </div>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$49</p>
              <p className="tdmd-price-sub">Self-pay starting price per visit</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified physician consultation</li>
                <li>Prescriptions sent to any U.S. pharmacy</li>
                <li>No hidden fees or surprise billing</li>
                <li>No insurance required</li>
                <li>Insurance accepted in select states</li>
              </ul>
            </div>
            <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
              <h3>How We Compare</h3>
              <p className="tdmd-price-caption">Typical costs without insurance. Actual costs vary by location and condition.</p>
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
              <p className="tdmd-price-footnote">
                Sources: Penn Medicine telehealth cost study; GoodRx telehealth pricing data 2026. Telehealth avg. per GoodRx ($40–$90 without insurance).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Conditions We Commonly Treat ─────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="uninsured-conditions">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Uninsured Patients</h2>
          <p>
            Each condition below is linked to a detailed treatment page with information about what to expect, eligibility, medications, and how telehealth works for that specific condition. All visits are transparent cash-pay — no insurance needed.
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
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All 60+ Conditions We Treat</a>
          </div>
        </div>
      </section>

      {/* ── 6. How It Works ─────────────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works — 3 Simple Steps</h2>
          <p>Getting care from TeleDirectMD is designed to be fast, simple, and affordable — because your time and money matter.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a Visit</h3>
                <p>Go to TeleDirectMD.com on your smartphone and request a visit. No app download needed. You'll see the $49 cost before you confirm — no surprises. Tell us your symptoms and which state you're located in. Takes about 2 minutes.</p>
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
                <h3>Get Treated — Prescriptions Sent to Your Pharmacy</h3>
                <p>If medication is needed, we'll send the prescription electronically to the pharmacy of your choice — anywhere in the United States. We'll always discuss affordable generic options to keep your total out-of-pocket cost as low as possible.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Who You're Seeing / Trust Signals ────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="uninsured-trust">
        <div className="tdmd-container">
          <h2>Who You're Seeing — A Real Doctor, Not an Algorithm</h2>
          <p>
            When you visit TeleDirectMD, you're seeing a licensed, board-certified physician — not a physician assistant, not a nurse practitioner, not a chatbot. <a href="/about" style={{ color: 'var(--tdmd-navy)', fontWeight: 700 }}>Dr. Parth Bhavsar, MD</a>, is a board-certified internal medicine physician licensed across 41 states, providing the same standard of care you'd receive in person — at a fraction of the cost.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified in Internal Medicine</li>
            <li>Licensed in 41 U.S. states</li>
            <li>HIPAA-compliant platform — your data is encrypted and protected</li>
            <li>TeleDirectMD does not sell or share your health information</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>
            TeleDirectMD is HIPAA-compliant. We do not sell or share your health information. All visits are conducted via encrypted video, and medical records are stored securely.
          </p>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="uninsured-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — Affordable Telehealth Without Insurance</h2>
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

      {/* ── 9. Final CTA ────────────────────────────────────────── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>See a board-certified physician today — starting at $49, no insurance required.</h3>
              <p>Request a same-day visit from your phone. Know your cost before you book. Prescriptions sent to any pharmacy in the U.S.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/insurance" className="tdmd-btn tdmd-btn-outline">Pricing &amp; Insurance</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Cross-links to other audiences ──────────────────── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>Other Communities We Serve</h3>
            <p className="tdmd-link-cloud">
              <a href="/who-we-serve/truck-drivers">Truck Drivers</a>
              <a href="/who-we-serve/gig-workers">Gig Workers &amp; Freelancers</a>
              <a href="/who-we-serve">Who We Serve Hub</a>
            </p>
          </div>
          <div className="tdmd-inline-links" style={{ marginTop: '1rem' }}>
            <h3>More from TeleDirectMD</h3>
            <p className="tdmd-link-cloud">
              <a href="/what-we-treat">What We Treat</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/insurance">Insurance &amp; Pricing</a>
              <a href="/faq">FAQs</a>
              <a href="/book-online">Book a Visit</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── 11. References ──────────────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://www.kff.org/affordable-care-act/poll-finding/kff-health-tracking-poll-aca-subsidies-2025/" rel="nofollow noopener" target="_blank">KFF Health Tracking Poll: ACA Subsidies and Marketplace Enrollment — KFF</a></li>
            <li><a href="https://www.cbo.gov/publication/60702" rel="nofollow noopener" target="_blank">CBO Projections: ACA Marketplace Enrollment After Subsidy Expiration — Congressional Budget Office</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits — Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? — GoodRx</a></li>
            <li><a href="https://www.stridehealth.com/blog/gig-workers-health-insurance-report" rel="nofollow noopener" target="_blank">Gig Worker Health Insurance Report — Stride Health</a></li>
            <li><a href="https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/" rel="nofollow noopener" target="_blank">Key Facts About the Uninsured Population — KFF</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="uninsured-disclaimer">
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of our licensed states at the time of the visit. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.
          </p>
          <p>
            Pricing listed is a starting price for self-pay visits and is subject to change. Insurance is accepted in select states; contact TeleDirectMD to confirm coverage in your state. Medication costs are separate from visit fees and vary by pharmacy and drug. TeleDirectMD is not a substitute for in-person care when in-person evaluation is clinically required.
          </p>
        </div>
      </section>
    </>
  );
}
