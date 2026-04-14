export default function TravelNursesPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/travel-nurses`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and facial pain — with a prescription sent to whichever pharmacy is nearest to your current assignment.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Antibiotic prescriptions for UTIs sent directly to any local pharmacy — so you can get treated without hunting for an urgent care clinic in an unfamiliar city.' },
    { name: 'Respiratory Infections / Common Cold', slug: 'common-cold-treatment-online', desc: 'Upper respiratory infection and common cold treatment — because healthcare workers are exposed to more pathogens than almost anyone, and you still need to show up tomorrow.' },
    { name: 'Anxiety / Stress Management', slug: 'performance-anxiety-treatment-online', desc: 'Support for anxiety and stress related to the unique pressures of travel nursing — constant relocation, isolation from support networks, and assignment transitions.' },
    { name: 'Migraines', slug: 'migraine-refills-online', desc: 'Prescription migraine refills and treatment — no need to find a new neurologist every quarter. Your physician knows your history and can continue your regimen.' },
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Blood pressure medication refills across all 41 states we serve — no lapse in your regimen when you start a new assignment in a new state.' },
    { name: 'Hypothyroidism Refills', slug: 'hypothyroidism-refills-online', desc: 'Thyroid medication refills and management — consistent care regardless of which state you\'re assigned to this quarter.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Ongoing medication management for heartburn and reflux — common among nurses working long shifts with irregular meal schedules.' },
    { name: 'Seasonal Allergies', slug: 'seasonal-allergies-treatment-online', desc: 'Allergy evaluation and prescription treatment — every new state brings a new pollen season and different environmental triggers.' },
  ];

  /* ── Popular travel nurse destination states ─────────────────────── */
  const featuredStates = [
    { name: 'Texas', slug: 'tx' },
    { name: 'California', slug: 'ca' },
    { name: 'Florida', slug: 'fl' },
    { name: 'North Carolina', slug: 'nc' },
    { name: 'Georgia', slug: 'ga' },
    { name: 'Tennessee', slug: 'tn' },
    { name: 'Arizona', slug: 'az' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'Can TeleDirectMD treat me if I\'m on assignment in a different state?',
      a: 'Yes — as long as you are physically located in one of our 41 licensed states at the time of your visit, you can be seen. You do not need to be a resident of the state. Travel nurses are among the most mobile patients in the country, and TeleDirectMD was designed for exactly this situation. Whether you\'re on your third assignment in 18 months or just arrived in a new city this week, you don\'t need an established physician relationship to get care. Just tell us which state you\'re currently in and we\'ll confirm eligibility before you book.'
    },
    {
      q: 'Do I need insurance to use TeleDirectMD as a travel nurse?',
      a: 'No. TeleDirectMD offers transparent cash-pay pricing starting at $49 per visit — no insurance required. Many travel nurses have insurance through their staffing agency, but it can come with high deductibles, confusing networks that vary by state, or mid-assignment coverage gaps. We also accept insurance in select states. Either way, you\'ll know your cost before you book — no surprise bills. A Penn Medicine study found telehealth visits average $96 compared to $509 for in-person care episodes, making it significantly more cost-effective even when you do have coverage.'
    },
    {
      q: 'Can you refill my prescriptions when I\'m in a new state?',
      a: 'Yes. If you\'re established on a medication and need a refill, TeleDirectMD can review your history and send a prescription electronically to any pharmacy in the United States — including whichever location is nearest to your current assignment. This applies to a wide range of common maintenance medications, including blood pressure medications, thyroid medications, migraine treatments, allergy medications, and acid reflux management. Note that TeleDirectMD does not prescribe controlled substances.'
    },
    {
      q: 'How does TeleDirectMD work with my travel nurse insurance?',
      a: 'TeleDirectMD accepts insurance in select states. If your staffing agency\'s plan is accepted in the state you\'re currently in, we\'ll bill it accordingly. If not, or if your deductible makes the out-of-pocket cost high, our $49 self-pay option is often more practical. We accept credit cards, debit cards, HSA, and FSA. Because travel nurse insurance networks can be inconsistent across states, many travel nurses find that knowing upfront what they\'ll pay is more useful than navigating an unfamiliar network in a new city. We do not name specific carriers; contact us to confirm whether your plan is accepted in your current state.'
    },
    {
      q: 'Can I see the same doctor for every assignment regardless of state?',
      a: 'Yes, that\'s one of the primary advantages TeleDirectMD offers travel nurses. Dr. Parth Bhavsar, MD, is board-certified in Family Medicine and licensed in 41 states. That means the same physician who treated your sinus infection in Texas can manage your prescription refill when you\'re on assignment in Florida three months later — without requiring you to repeat your health history or re-establish care with a new provider. Continuity of care is rare for travel nurses, and TeleDirectMD is one of the few options that makes it possible.'
    },
    {
      q: 'What conditions can TeleDirectMD treat via telehealth?',
      a: 'TeleDirectMD treats more than 60 conditions across a wide range of categories, including acute infections (sinus infections, UTIs, respiratory infections, pink eye, strep throat), chronic condition management (hypertension, hypothyroidism, migraines, acid reflux, seasonal allergies), and mental health support (anxiety and stress management). We do not treat emergency conditions or prescribe controlled substances. Conditions requiring in-person evaluation, imaging, or laboratory testing will be triaged and referred appropriately.'
    },
    {
      q: 'How quickly can I get a prescription sent to a local pharmacy?',
      a: 'If a prescription is clinically appropriate, it is sent electronically to any U.S. pharmacy — often before your video visit has concluded. Just tell us which pharmacy is most convenient to your current assignment. We can route prescriptions to CVS, Walgreens, Walmart, Rite Aid, or any independent pharmacy nationwide. This is particularly valuable on assignment when you don\'t yet know the area and need medication without delay.'
    },
    {
      q: 'Is TeleDirectMD available during evenings and weekends?',
      a: 'Yes. TeleDirectMD offers same-day visits, including evenings and weekends. Travel nurses often work irregular shifts, including nights, evenings, and rotating weekends — and getting sick doesn\'t follow a Monday-through-Friday schedule. We\'re available when you are, including on days off when you\'d rather handle a health concern than spend your free time in an urgent care waiting room in an unfamiliar city.'
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
          { "@type": "ListItem", "position": 3, "name": "Travel Nurses", "item": pageUrl }
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
        "name": "Telehealth for Travel Nurses: Care in Every State You Work",
        "description": "TeleDirectMD offers telehealth for travel nurses across 41 states — same board-certified physician regardless of your assignment location. Prescription refills, acute care, and chronic condition management. Same-day visits, evenings & weekends. Starting at $49.",
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
          "cssSelector": ["h1", ".tdmd-hero-sub", "#travel-nurses-faq .tdmd-faq-question"]
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
          <span aria-current="page">Travel Nurses</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="travel-nurses-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Telehealth for Travel Nurses: Care in Every State You Work</h1>
              <p className="tdmd-hero-sub">Board-certified physician in 41 states. One consistent doctor — regardless of which assignment you're on. Same-day visits, evenings &amp; weekends.</p>
              <p>
                There are more than 175,000 travel nurses actively on assignment across the United States, cycling through 13-week contracts that take them from Texas to Florida to North Carolina and back. Travel nurses spend their careers taking care of patients — but struggle to access consistent care for themselves. Every new assignment means a new city, a new state, and no established physician. Finding a new primary care doctor every quarter isn't practical. TeleDirectMD provides a consistent, board-certified physician licensed across 41 states — so the same doctor who treated your sinus infection in Georgia is the same one who refills your prescription in Arizona three months later.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified Family Medicine physician — not a PA, not an NP, not an algorithm</li>
                <li>Licensed in 41 states — the same physician follows you across every assignment</li>
                <li>Prescription refills for chronic conditions — no lapse between assignments</li>
                <li>Same-day visits, evenings &amp; weekends — fits your shift schedule</li>
                <li>Transparent cash-pay pricing starting at $49 — insurance accepted in select states</li>
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
                <h2>Why Travel Nurses Choose TeleDirectMD</h2>
                <ul>
                  <li>One physician, 41 states — continuity of care across every assignment</li>
                  <li>Prescription refills sent to any pharmacy near your current assignment</li>
                  <li>No insurance required — cash-pay pricing starting at $49</li>
                  <li>Same-day visits, evenings &amp; weekends — fits your shift schedule</li>
                  <li>HIPAA-compliant, secure video visits from your phone or laptop</li>
                </ul>
                <p className="tdmd-hero-note">No app download required. Works on any smartphone or computer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ──────────────────────────────────────── */}
      <section className="tdmd-section" id="travel-nurses-problem">
        <div className="tdmd-container">
          <h2>The Healthcare Access Problem Facing Travel Nurses</h2>
          <p>
            Travel nurses spend their careers caring for patients — and the healthcare system rarely returns the favor. The structure of travel nursing creates a near-impossible healthcare access problem: every 13-week assignment means a new city, a new state, and no established doctor. Finding a new primary care physician every quarter, scheduling new-patient appointments that can take weeks to get, and transferring medical records across states is simply not compatible with the demands of a travel nursing career.
          </p>
          <p>
            The workforce has grown significantly — from approximately 33,000 travel nurses in 2018 to more than 175,000 by 2022, a <strong>430% increase</strong>, according to industry data from Staffing Industry Analysts. Today, active travel nurse postings consistently number in the hundreds of thousands. These healthcare professionals are highly skilled, adequately insured through staffing agencies, and deeply familiar with how the medical system works — yet they face structural barriers to accessing it for themselves. Staffing agency insurance plans vary in coverage by state, networks shift with every assignment, and the time demands of starting a new job every 13 weeks leave little bandwidth to navigate a new healthcare system for personal care.
          </p>
          <p>
            The mental health toll compounds the physical access barrier. A study published in <em>Nursing Management</em> found that travel nurses scored significantly higher on physical fatigue burnout compared to staff nurses — driven in part by the demands of adapting to new locations and the absence of personal support networks. A report by the International Council of Nurses found that 70% of nurses experience burnout. Travel nurses face all the stressors of conventional nursing, plus the isolation and logistical burden of continuous relocation.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You just started a new 13-week assignment in Charlotte, North Carolina. A week in, you develop a sinus infection — the kind you've treated in yourself before and know exactly what you need. You don't have a local doctor yet. Urgent care in an unfamiliar neighborhood means an hour of research, an hour in a waiting room, and $180 out of pocket. With TeleDirectMD, you request a same-day visit from your apartment, connect with the same board-certified physician who treated you on your last assignment, and have a prescription sent to the Walgreens two blocks from your new housing.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How TeleDirectMD Solves It ───────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="travel-nurses-solution">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Solves Healthcare for Travel Nurses</h2>
          <p>
            TeleDirectMD was built to provide a consistent physician relationship regardless of where you work — which makes it uniquely suited for the travel nursing lifestyle. Here's how we address the specific barriers travel nurses face:
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>One Physician Across 41 States</h3>
              <p>Dr. Parth Bhavsar, MD, is board-certified in Family Medicine and licensed in 41 states — including the most common travel nurse assignment destinations: Texas, California, Florida, North Carolina, Georgia, Tennessee, and Arizona. The same physician who knows your health history can see you whether you're starting your next assignment or wrapping up your current one.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Prescription Continuity Between Assignments</h3>
              <p>Managing ongoing medications — blood pressure, thyroid, migraines, acid reflux, allergies — doesn't have to reset every 13 weeks. TeleDirectMD can review your history and send refills to any pharmacy in the U.S., including whichever location is most convenient to your current assignment. Note: we do not prescribe controlled substances.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Fits Your Shift Schedule</h3>
              <p>Travel nurses work nights, weekends, and rotating shifts. TeleDirectMD offers same-day visits, including evenings and weekends — so you can get care on a day off or between shifts without waiting for a Monday morning appointment slot that doesn't exist in your schedule.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Works Anywhere You're Licensed to Be Seen</h3>
              <p>Connect via secure video from your housing, hospital break room, or anywhere with a cell signal. No app download required. Works on any smartphone or computer. As long as you're physically located in one of our 41 covered states, you're eligible for a visit — no residency required, no new patient intake at every assignment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Conditions We Commonly Treat ─────────────────────── */}
      <section className="tdmd-section" id="travel-nurses-conditions">
        <div className="tdmd-container">
          <h2>Conditions We Commonly Treat for Travel Nurses</h2>
          <p>
            Each condition below is linked to a detailed treatment page with information about what to expect, eligibility, medications, and how telehealth works for that specific condition. Travel nurses are regularly exposed to acute infections on the job and often manage chronic conditions that require consistent prescription management — both of which are well-suited to telehealth.
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
      <section className="tdmd-section tdmd-section-highlight" id="travel-nurses-how-it-works">
        <div className="tdmd-container">
          <h2>How It Works — 3 Simple Steps</h2>
          <p>Getting care from TeleDirectMD is designed to be fast, mobile-friendly, and state-agnostic — because your care needs shouldn't depend on which city you're in this month.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a Visit</h3>
                <p>Go to TeleDirectMD.com from your phone or computer and request a visit. No app download needed. Tell us your symptoms and confirm which state you're physically located in. Takes about 2 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect With Your Doctor</h3>
                <p>A board-certified Family Medicine physician will connect with you via secure, HIPAA-compliant video. We'll review your symptoms, medical history, and current medications — and build on the relationship if you've been seen before. Most visits take 10–15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get Treated — Prescriptions Sent to Any Pharmacy</h3>
                <p>If medication is appropriate, we'll send the prescription electronically to any pharmacy in the U.S. — including whichever is nearest to your current assignment. Pick it up and get back to what matters.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Transparent Pricing ──────────────────────────────── */}
      <section className="tdmd-section" id="travel-nurses-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing — No Surprise Bills</h2>
          <p>Even with staffing agency insurance, travel nurses often face high deductibles, out-of-network charges in unfamiliar states, or coverage gaps between assignments. TeleDirectMD's cash-pay option at $49 per visit is frequently the most practical choice. A Penn Medicine study found telehealth visits average $96 compared to $509 for in-person care episodes — and that's before accounting for the time cost of finding a new provider in an unfamiliar city.</p>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$49</p>
              <p className="tdmd-price-sub">Self-pay starting price per visit</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified Family Medicine physician consultation</li>
                <li>Prescriptions sent to any U.S. pharmacy</li>
                <li>No hidden fees or surprise billing</li>
                <li>Insurance accepted in select states</li>
                <li>HSA and FSA accepted</li>
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
      <section className="tdmd-section tdmd-section-highlight" id="travel-nurses-trust">
        <div className="tdmd-container">
          <h2>Who You're Seeing — A Real Doctor Who Knows Your History</h2>
          <p>
            As a travel nurse, you know the difference between seeing a physician and seeing a mid-level provider. When you visit TeleDirectMD, you're seeing a licensed, board-certified physician — not a physician assistant, not a nurse practitioner, not a chatbot. <a href="/about" style={{ color: 'var(--tdmd-navy)', fontWeight: 700 }}>Dr. Parth Bhavsar, MD</a>, is board-certified in Family Medicine and licensed across 41 states. He provides the same standard of care you'd receive from an established PCP — including the clinical knowledge that comes from seeing you consistently over time.
          </p>
          <ul className="tdmd-hero-benefits">
            <li>Board-certified in Family Medicine — a real physician, not a PA or NP</li>
            <li>Licensed in 41 U.S. states — same physician across every assignment</li>
            <li>HIPAA-compliant platform — encrypted visits, secure medical records</li>
            <li>LegitScript certified — a recognized mark of telehealth compliance</li>
            <li>TeleDirectMD does not sell or share your health information</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>
            All visits are conducted via encrypted video. Medical records are stored securely and travel with your relationship with TeleDirectMD — not with the state you happen to be in.
          </p>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="travel-nurses-faq">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions — Telehealth for Travel Nurses</h2>
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
              <h3>The same doctor. Every assignment. All 41 states.</h3>
              <p>Request a same-day visit, connect with a board-certified Family Medicine physician, and get prescriptions sent to the pharmacy nearest to your current assignment — whether you're in week one or week twelve.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Who We Serve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. State Links ─────────────────────────────────────── */}
      <section className="tdmd-section" id="travel-nurses-states">
        <div className="tdmd-container">
          <h2>Telehealth for Travel Nurses — Available in Top Assignment States</h2>
          <p>TeleDirectMD is licensed in 41 states, including the most popular travel nurse assignment destinations. Here are high-demand states where we can see you today:</p>
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
              <a href="/who-we-serve/remote-workers">Remote Workers</a>
              <a href="/who-we-serve/gig-workers">Gig Workers</a>
              <a href="/who-we-serve/uninsured-affordable-care">Uninsured &amp; Affordable Care</a>
              <a href="/who-we-serve/truck-drivers">Truck Drivers</a>
              <a href="/who-we-serve/small-business-owners">Small Business Owners</a>
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
      <section className="tdmd-section" id="travel-nurses-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://www.amnhealthcare.com/travel-nursing-dynamics/" rel="nofollow noopener" target="_blank">Travel Nursing Dynamics — AMN Healthcare</a></li>
            <li><a href="https://www.amnhealthcare.com/siteassets/travel-nursing-dynamics/amn-travel-nurse-costs-in-the-pandemic-2022.pdf" rel="nofollow noopener" target="_blank">The Critical Role of Travel Nurses in the Pandemic — AMN Healthcare (2022)</a></li>
            <li><a href="https://www.vivian.com/nursing/travel/salary/" rel="nofollow noopener" target="_blank">Average Travel Nurse Salary by State — Vivian Health</a></li>
            <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11060056/" rel="nofollow noopener" target="_blank">Travel nurse work experiences: Burnout, job satisfaction, and work environment — Nursing Management / PMC (2024)</a></li>
            <li><a href="https://www.hosthealthcare.com/blog/the-mental-health-handbook-for-travel-nurses/" rel="nofollow noopener" target="_blank">The Mental Health Handbook for Travel Nurses — Host Healthcare</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits — Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How Much Does a Telehealth Visit Cost? — GoodRx</a></li>
            <li><a href="https://betternurse.org/travel-nursing-statistics/" rel="nofollow noopener" target="_blank">Travel Nursing Statistics &amp; Trends for 2025 — BetterNurse.org</a></li>
          </ul>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="travel-nurses-disclaimer">
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
