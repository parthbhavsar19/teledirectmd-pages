export default function GigWorkersPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/gig-workers`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescriptions sent to the nearest pharmacy — including 24-hour locations near you.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and post-nasal drip without leaving your car or home office.' },
    { name: 'Respiratory Infections / Common Cold', slug: 'common-cold-treatment-online', desc: 'Cold, flu, and upper respiratory infection treatment to get you back to work faster.' },
    { name: 'Anxiety / Stress Management', slug: 'performance-anxiety-treatment-online', desc: 'Support for anxiety, work-related stress, and the psychological pressures of gig-economy work — algorithmic uncertainty, rating anxiety, and income instability.' },
    { name: 'Migraines', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment and refills so a bad headache doesn\'t cost you a full day of earnings.' },
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Blood pressure monitoring and medication refills — especially important for rideshare and delivery drivers spending long hours behind the wheel.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Medication management for heartburn and reflux — common among drivers eating on the go.' },
    { name: 'Influenza', slug: 'influenza-treatment-online', desc: 'Early antiviral treatment for flu can reduce duration and severity — critical when you can\'t afford days off from gig work.' },
    { name: 'Skin Conditions / Rashes', slug: 'eczema-treatment-online', desc: 'Virtual evaluation and treatment for eczema, skin rashes, and dermatitis — with photos reviewed by a board-certified physician.' },
  ];

  /* ── High-gig-worker-traffic states to link ─────────────────────── */
  const featuredStates = [
    { name: 'California', slug: 'ca' },
    { name: 'Texas', slug: 'tx' },
    { name: 'Florida', slug: 'fl' },
    { name: 'Illinois', slug: 'il' },
    { name: 'Georgia', slug: 'ga' },
    { name: 'Arizona', slug: 'az' },
    { name: 'North Carolina', slug: 'nc' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'Do I need health insurance to use TeleDirectMD?',
      a: 'No. TeleDirectMD offers transparent cash-pay pricing starting at $49 per visit — no insurance required. Gig workers are uninsured at roughly three times the rate of traditionally employed Americans, and TeleDirectMD was built to serve patients exactly like you. We also accept select insurance plans in some states. You will know your cost upfront before booking — no surprise bills.'
    },
    {
      q: 'How much does a telehealth visit cost without insurance?',
      a: 'Visits with TeleDirectMD start at $49 self-pay. A Penn Medicine study found telehealth visits average $96 compared to $509 for in-person episodes. Urgent care without insurance typically runs $150–$350, and an ER visit can reach $500–$3,000 or more. Telehealth is the most cost-effective way to get treated for the majority of non-emergency conditions that affect gig workers every day.'
    },
    {
      q: 'Can you treat back and neck pain virtually?',
      a: 'Yes, for many presentations. Studies show that over 77% of rideshare drivers report joint or muscle pain in any given 7-day period, and lower back and neck pain are the most common complaints. TeleDirectMD can evaluate musculoskeletal pain, recommend treatment plans, and prescribe appropriate medications virtually. Conditions requiring imaging, physical therapy referrals, or in-person examination can be triaged and referred appropriately.'
    },
    {
      q: 'Can I use TeleDirectMD in any state I\'m working in?',
      a: 'TeleDirectMD is licensed in 41 states. As long as you are physically located in one of our covered states at the time of your visit, you can be seen — regardless of where you live or where you are registered as a gig worker. This is especially valuable for gig workers who move between markets, travel for freelance assignments, or work across state lines.'
    },
    {
      q: 'How quickly can I get a prescription sent to a local pharmacy?',
      a: 'If a prescription is clinically appropriate, it can be sent electronically to any pharmacy in the United States — often before your visit is even over. Just tell us which pharmacy you prefer or which is nearest to you. We can route to CVS, Walgreens, Walmart, Rite Aid, or any independent pharmacy, including 24-hour locations.'
    },
    {
      q: 'Can TeleDirectMD provide documentation if I need to take time off from gig work?',
      a: 'We can provide clinical visit notes and documentation of your diagnosis and treatment plan, which can be used to communicate with clients or platforms as needed. However, gig platforms typically do not have formal sick-leave policies, so documentation requirements vary. We will do our best to provide whatever documentation is clinically appropriate based on your situation.'
    },
    {
      q: 'What\'s the fastest way to get treated for a UTI?',
      a: 'Request a same-day visit on TeleDirectMD.com from your smartphone — no app download required. After a brief video consultation with a board-certified physician to confirm your symptoms and rule out complications, a prescription antibiotic can be sent to the pharmacy of your choice. Same-day visits are available, including evenings and weekends, so you don\'t have to wait until urgent care opens or lose hours of earning time in a waiting room.'
    },
    {
      q: 'Can you help with anxiety and stress management for gig workers?',
      a: 'Yes. TeleDirectMD can evaluate and treat anxiety, including work-related stress that is common among gig workers — fear of algorithmic deactivation, rating pressure, income unpredictability, and the absence of employer-provided mental health benefits all contribute to elevated anxiety rates in this population. We can provide counseling support during a visit and prescribe appropriate medications when clinically indicated. For conditions requiring ongoing therapy, we can provide referral guidance.'
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
          { "@type": "ListItem", "position": 3, "name": "Gig Workers", "item": pageUrl }
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
        "name": "Telehealth for Gig Workers, Delivery Drivers & Freelancers — Healthcare Without a 9-to-5",
        "description": "TeleDirectMD offers telehealth for gig workers, Uber/Lyft drivers, DoorDash couriers, and freelancers across 41 states. No insurance required. Same-day visits, evenings & weekends. Starting at $49.",
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
          "cssSelector": ["h1", ".tdmd-hero-sub", "#gig-workers-faq .tdmd-faq-question"]
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
          <span aria-current="page">Gig Workers</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="gig-workers-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Telehealth for Gig Workers, Delivery Drivers &amp; Freelancers — Healthcare Without a 9-to-5</h1>
              <p className="tdmd-hero-sub">Licensed physician in 41 states. No insurance required. Same-day visits, evenings &amp; weekends.</p>
              <p>
                76 million Americans now work as freelancers — 36% of the U.S. workforce. Gig workers are uninsured at three times the rate of average Americans (35% vs. 10.5%). With ACA enhanced subsidies expiring in 2026, premiums more than doubled for many marketplace enrollees. TeleDirectMD offers transparent cash-pay pricing starting at $49, same-day availability including evenings and weekends, and coverage across 41 states — built for workers whose schedules and income don't fit the traditional healthcare model.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified physician — not a PA, not an NP, not an algorithm</li>
                <li>Licensed in 41 states — follows you wherever your work takes you</li>
                <li>No scheduling conflicts — same-day visits, evenings &amp; weekends</li>
                <li>Prescriptions sent to any pharmacy near you</li>
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
                <h2>Why Gig Workers Choose TeleDirectMD</h2>
                <ul>
                  <li>See a doctor from your car, home, or wherever you work in 41 states</li>
                  <li>Get prescriptions sent to any pharmacy near you — including 24-hour locations</li>
                  <li>No insurance required — transparent cash-pay pricing starting at $49</li>
                  <li>No scheduling conflicts — same-day visits, evenings &amp; weekends</li>
                  <li>HIPAA-compliant, secure video visits from your phone</li>
                </ul>
                <p className="tdmd-hero-note">No app download required. Works on any smartphone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="gig-workers-problem">
        <div className="tdmd-container">
          <h2>The Health &amp; Coverage Crisis Facing Gig Workers</h2>
          <p>
            Rideshare drivers, delivery couriers, freelancers, and 1099 workers — including Uber and Lyft drivers, DoorDash and Instacart couriers, and independent contractors across every industry — face a healthcare access crisis that traditional medicine ignores. <strong>35% of gig workers are uninsured</strong>, compared to 10.5% of traditionally employed Americans. Without employer-sponsored coverage, many are priced out of marketplace plans entirely, especially as ACA enhanced subsidies phase out.
          </p>
          <p>
            The physical toll is significant. <strong>More than 37% of rideshare drivers report musculoskeletal pain lasting a week or more</strong>, and <strong>77% report joint or muscle pain in any given 7-day period</strong>. Lower back and neck pain are the most common complaints, and both correlate directly with hours driven. Mental health is equally strained: algorithmic deactivation fears, rating system pressure, and economic insecurity create a documented burden of anxiety and stress — with no employer-provided mental health benefits to fall back on.
          </p>
          <p>
            Gig workers also have no workers' compensation, no paid sick leave, and no employer benefits of any kind. Every hour spent in a waiting room is income lost. The result: many gig workers delay or skip care entirely, turning manageable conditions into larger problems.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You're finishing your last DoorDash delivery and you've had a UTI for two days. Urgent care doesn't open until morning, and you can't afford the $250 visit without insurance. With TeleDirectMD, you request a same-day visit from your car and connect with a board-certified physician. Prescription goes to the 24-hour pharmacy two miles away.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How TeleDirectMD Solves It ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="gig-workers-solution">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Solves Healthcare Access for Gig Workers</h2>
          <p>
            TeleDirectMD was designed for people who can't fit healthcare into a 9-to-5 window — and that includes the 76 million freelancers, drivers, couriers, and 1099 workers who make up more than a third of the American workforce. Here's how we address the specific barriers gig workers face:
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>41-State Coverage</h3>
              <p>Work in multiple cities or states? TeleDirectMD is licensed in 41 states, meaning the same board-certified physician can see you wherever you are working — no need to find a new provider every time you cross a state line or pick up work in a new market.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Same-Day, Evenings &amp; Weekends</h3>
              <p>Gig work doesn't stop at 5 PM, and neither does TeleDirectMD. Same-day visits are available including evenings and weekends — so you can get care between shifts, after your last delivery, or on a Sunday without waiting for a Monday morning appointment.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Mobile-First — Works From Your Car</h3>
              <p>Connect via secure video from your smartphone. No app download required. Works from your car, your home, a coffee shop, or anywhere you have a cell signal — wherever gig work takes you.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Prescriptions to Any Pharmacy Near You</h3>
              <p>We send prescriptions electronically to any pharmacy in the U.S. — including 24-hour CVS, Walgreens, and Walmart locations. Just tell us which pharmacy is nearest or most convenient, and we'll route it there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Conditions We Commonly Treat ─────────────────────── */}
      <section className="tdmd-section" id="gig-workers-conditions">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Gig Workers</h2>
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

      {/* ── 5. How It Works ─────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="gig-workers-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works — 3 Simple Steps</h2>
          <p>Getting care from TeleDirectMD is designed to be fast, simple, and mobile-first — because every hour away from work costs gig workers money.</p>
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
                <h3>Get Treated — Prescriptions Sent to You</h3>
                <p>If medication is needed, we'll send the prescription electronically to the pharmacy nearest to you — including 24-hour locations. Pick it up and get back to work.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Transparent Pricing ──────────────────────────────── */}
      <section className="tdmd-section" id="gig-workers-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing — No Surprise Bills</h2>
          <p>Telehealth visits are significantly cheaper than in-person alternatives. A Penn Medicine study found telehealth visits average $96 compared to $509 for in-person episodes — five times less expensive. For gig workers without insurance, the difference between a $49 telehealth visit and a $250+ urgent care visit can represent an entire day's earnings.</p>
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

      {/* ── 7. Who We Are / Trust Signals ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="gig-workers-trust">
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

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="gig-workers-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — Telehealth for Gig Workers</h2>
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

      {/* ── 9. Final CTA ───────────────────────────────────────── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Get seen today from your phone — no office visit, no insurance, no waiting room.</h3>
              <p>Request a same-day visit, connect with a board-certified physician, and get a prescription sent to the pharmacy nearest to you — all in the time between gig jobs.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Who We Serve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. State Links ─────────────────────────────────────── */}
      <section className="tdmd-section" id="gig-workers-states">
        <div className="tdmd-container">
          <h2>Telehealth for Gig Workers — Available in These High-Activity States</h2>
          <p>TeleDirectMD is licensed in 41 states. Here are some of the states with the highest gig worker populations where we can see you today:</p>
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

      {/* ── 11. Cross-links to other audiences ──────────────────── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>Other Communities We Serve</h3>
            <p className="tdmd-link-cloud">
              <a href="/who-we-serve/truck-drivers">Truck Drivers</a>
              <a href="/who-we-serve/uninsured-affordable-care">Uninsured &amp; Affordable Care</a>
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

      {/* ── 12. References ──────────────────────────────────────── */}
      <section className="tdmd-section" id="gig-workers-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://www.stridehealth.com/blog/gig-economy-health-insurance-statistics" rel="nofollow noopener" target="_blank">Gig Economy Health Insurance Statistics — Stride Health</a></li>
            <li><a href="https://www.upwork.com/press/releases/upwork-study-finds-36-of-the-us-workforce-freelance-amid-digital-revolution" rel="nofollow noopener" target="_blank">Freelancing in America: 36% of U.S. Workforce Freelances — Upwork / Freelancers Union</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/34625834/" rel="nofollow noopener" target="_blank">Musculoskeletal disorders and pain among rideshare drivers — PubMed</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/33622592/" rel="nofollow noopener" target="_blank">Physical and mental health outcomes in gig economy workers — PubMed</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits — Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? — GoodRx</a></li>
            <li><a href="https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/" rel="nofollow noopener" target="_blank">Key Facts About the Uninsured Population — KFF</a></li>
            <li><a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2021.01408" rel="nofollow noopener" target="_blank">Gig Workers and Health Insurance Coverage — Health Affairs</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="gig-workers-disclaimer">
        <div className="tdmd-container">
          <h2>Medical Disclaimer</h2>
          <p>
            This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of our licensed states at the time of the visit. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911 immediately.
          </p>
          <p>
            Not all conditions are appropriate for telehealth. Some symptoms require in-person evaluation, imaging, or laboratory testing that cannot be completed via video visit. TeleDirectMD will advise you if your condition requires in-person care and can provide referral guidance as needed.
          </p>
        </div>
      </section>
    </>
  );
}
