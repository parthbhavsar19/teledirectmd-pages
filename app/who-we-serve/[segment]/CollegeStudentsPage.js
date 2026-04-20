export default function CollegeStudentsPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/college-students`;
  const today = new Date().toISOString().split('T')[0];
  const pid = 'college-students';

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
      q: 'Does TeleDirectMD see patients under 18?',
      a: 'TeleDirectMD sees patients 18 and older. We do not see pediatric patients at this time. If you are 18 or older, no guardian is required — book directly.'
    },
  ];

  const allStates = [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' },
  ];

  const stateAbbrList = allStates.map(s => s.abbr);

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
        "areaServed": stateAbbrList
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about#physician`,
        "name": "Parth Bhavsar, MD",
        "medicalSpecialty": "FamilyMedicine",
        "alumniOf": { "@type": "EducationalOrganization", "name": "University of Mississippi Medical Center" },
        "worksFor": { "@type": "MedicalOrganization", "name": "TeleDirectMD" },
        "licensedIn": stateAbbrList
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
        "name": "Online Doctor for College Students — Same-Day Care from Your Dorm or Apartment",
        "description": "TeleDirectMD provides same-day telehealth for college students across 42 states. UTI, strep, sinus, pink eye — $49 flat fee, no insurance required. Prescriptions sent to campus or nearby pharmacy.",
        "datePublished": "2026-04-20",
        "dateModified": today,
        "author": { "@type": "Physician", "name": "Parth Bhavsar, MD" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".tdmd-answer-block"] }
      }
    ]
  };

  return (
    <>
      {/* Section 0: JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Section 1: Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container">
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">College Students</span>
        </div>
      </nav>

      {/* Section 2: Answer Block (speakable) */}
      <div className="tdmd-answer-block" data-speakable="true" style={{
        background: '#EAF7F8', borderLeft: '4px solid #006B73',
        padding: '1rem 1.25rem', margin: '0 0 0', lineHeight: 1.6
      }}>
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>
            Online doctor for college students:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD provides same-day video visits with a board-certified physician for college students in 42 states — UTI, strep, sinus infections, pink eye, skin concerns, and prescription refills for $49 flat fee. Available evenings and weekends when student health is closed. No insurance required. Prescriptions sent to campus or any nearby pharmacy.
          </p>
        </div>
      </div>

      {/* Section 3: Hero — Dual Column */}
      <section id={`${pid}-hero`} className="tdmd-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Online Doctor for College Students — Same-Day Care From Your Dorm, Anywhere in 42 States</h1>
              <p className="tdmd-hero-sub">
                Student health backed up? Your doctor back home won't prescribe across state lines? TeleDirectMD connects you with a board-certified physician via video — from your dorm, apartment, or anywhere in 42 states. Flat $49 fee. No insurance required. Prescriptions sent to campus or your nearest pharmacy.
              </p>
              <p>
                College students face a unique healthcare gap. Student health centers operate on limited Monday–Friday schedules, leaving large windows of unmet need — evenings, weekends, and holidays. Out-of-state licensing restrictions mean your home doctor legally cannot prescribe across state lines. High-deductible student insurance plans make urgent care financially painful. TeleDirectMD was built for exactly this gap: board-certified urgent medical care, available when and where you need it.
              </p>

              <nav className="tdmd-toc" aria-label="Page sections">
                <p className="tdmd-toc-intro">On this page:</p>
                <ul>
                  <li><a href={`#${pid}-eligibility`}>Am I eligible?</a></li>
                  <li><a href={`#${pid}-how-it-works`}>How it works</a></li>
                  <li><a href={`#${pid}-regulatory-context`}>Why the student healthcare gap exists</a></li>
                  <li><a href={`#${pid}-comparison`}>Comparison: TeleDirectMD vs. other options</a></li>
                  <li><a href={`#${pid}-decision-guide`}>Decision guide</a></li>
                  <li><a href={`#${pid}-cost`}>Cost breakdown</a></li>
                  <li><a href={`#${pid}-conditions-table`}>Common student conditions</a></li>
                  <li><a href={`#${pid}-medications`}>Medications &amp; services</a></li>
                  <li><a href={`#${pid}-home-care`}>Home care tips</a></li>
                  <li><a href={`#${pid}-faq`}>FAQ</a></li>
                </ul>
              </nav>

              <ul className="tdmd-hero-benefits">
                <li>Available evenings &amp; weekends — when student health is closed</li>
                <li>Licensed in 42 states — wherever your school is, we're there</li>
                <li>$49 flat fee — no surprise bills</li>
                <li>UTI, strep, sinus, pink eye — diagnosed and treated in one visit</li>
                <li>Prescriptions sent to campus pharmacy, CVS, Walgreens, or any US pharmacy</li>
                <li>No insurance required — ever</li>
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
              </div>

              <p className="tdmd-reviewed">Last reviewed by Parth Bhavsar, MD, board-certified Family Medicine · {today}</p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>What You Get for $49</h2>
                <ul>
                  <li>Video visit with board-certified MD</li>
                  <li>Diagnosis of your condition</li>
                  <li>Prescription sent to campus or nearest pharmacy</li>
                  <li>No insurance card needed</li>
                  <li>No waiting room — connect from your phone</li>
                  <li>HIPAA-compliant visit documentation</li>
                </ul>
                <p>Most visits take 10–15 minutes. Prescriptions ready at the pharmacy before your visit ends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility Checklist */}
      <section id={`${pid}-eligibility`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Are You Eligible?</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>&#10003; You Are Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>You are 18 years of age or older and physically located in one of our 42 states</li>
                <li>Your condition is non-emergency: UTI, sinus, strep, pink eye, skin rash, respiratory infection, allergies</li>
                <li>Your home doctor won't prescribe remotely across state lines</li>
                <li>You need a prescription refill while away from your home-state provider</li>
                <li>Your student health center is closed or has a long wait time</li>
                <li>You don't have insurance — or prefer direct-pay for speed and convenience</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>&#10007; You Are Not Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>You are experiencing a medical emergency → call 911 or campus security</li>
                <li>You need a controlled substance prescription</li>
                <li>Your condition requires in-person physical exam, lab testing, or imaging</li>
                <li>You are under 18 years of age</li>
              </ul>
              <div className="tdmd-card-disclaimer">
                For behavioral health ongoing therapy, a dedicated mental health provider is more appropriate. TeleDirectMD can evaluate and manage generalized anxiety but is not a substitute for ongoing therapy.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section id={`${pid}-how-it-works`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>How It Works — 3 Steps</h2>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Book &amp; Pay in 2 Minutes</h3>
                <p>Select a same-day slot or next-available appointment and pay $49. No insurance form. No referral. No waiting room paperwork.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Intake Form &amp; Video Connect</h3>
                <p>Fill out a brief symptom form so Dr. Bhavsar is prepared. Connect via secure video from your phone or laptop — no app required. Most visits take 10–15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Prescription to Campus Pharmacy</h3>
                <p>Dr. Bhavsar sends the prescription electronically to your campus pharmacy, CVS, Walgreens, or wherever is closest. Prescriptions are typically ready within 30 minutes.</p>
              </div>
            </div>
          </div>
          <div className="tdmd-decision-cta">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Same-Day Visit — $49</a>
          </div>
        </div>
      </section>

      {/* Section 6: When Student Health Falls Short — Regulatory Context */}
      <section id={`${pid}-regulatory-context`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Why the Student Healthcare Gap Exists</h2>
          <p>
            Telehealth is licensed state by state. Your home doctor is licensed in your home state — not your college state. That's why they legally cannot prescribe across state lines, even over video. It's not a policy choice; it's how state medical licensing works.
          </p>
          <p>
            TeleDirectMD is licensed in 42 states, so wherever your school is, we can see you legally and prescribe. Whether you're enrolled in Georgia and your family is in Ohio, or you're a California student studying in Texas, we're authorized to care for you in your current location.
          </p>
          <p>
            Student health centers typically operate Monday–Friday during business hours. With approximately 19 million students competing for appointments at under-resourced facilities, waits of 1–3 days for non-emergency visits are common — and that's if you can get an appointment at all. Evenings, weekends, and holiday breaks leave students with no campus option.
          </p>
          <p>
            The $49 flat fee is often comparable to or less than the student health co-pay for students with high-deductible plans. And unlike student health, TeleDirectMD is available when you actually get sick — not just during business hours.
          </p>
        </div>
      </section>

      {/* Section 7: Comparison Table */}
      <section id={`${pid}-comparison`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>How TeleDirectMD Compares</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Care Option</th>
                  <th>Typical Cost</th>
                  <th>Wait Time</th>
                  <th>Availability</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>TeleDirectMD</strong></td>
                  <td>$49 flat</td>
                  <td>Usually same-day</td>
                  <td>Evenings &amp; weekends</td>
                  <td>UTI, strep, sinus, skin, refills</td>
                </tr>
                <tr>
                  <td>Student Health Center</td>
                  <td>$0–$30 co-pay</td>
                  <td>1–3 days typical</td>
                  <td>Mon–Fri only</td>
                  <td>Students with campus insurance</td>
                </tr>
                <tr>
                  <td>US Urgent Care</td>
                  <td>$100–$300 cash</td>
                  <td>1–3 hours</td>
                  <td>Extended hours</td>
                  <td>Needs in-person exam</td>
                </tr>
                <tr>
                  <td>Emergency Room</td>
                  <td>$1,500–$5,000+</td>
                  <td>4–8+ hours</td>
                  <td>24/7</td>
                  <td>Life-threatening emergencies only</td>
                </tr>
                <tr>
                  <td>Home Doctor (different state)</td>
                  <td>Varies</td>
                  <td>May decline due to licensing</td>
                  <td>Weekdays</td>
                  <td>Established patients in home state</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-comparison-note">
            For the UTIs, sinus infections, and strep throats that hit on a Sunday night, TeleDirectMD is the fastest, most affordable path to a diagnosis and prescription.
          </p>
        </div>
      </section>

      {/* Section 8: Decision Guide */}
      <section id={`${pid}-decision-guide`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Decision Guide: Which Care is Right for Me?</h2>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Is it a medical emergency?</h3>
                <p><strong>YES:</strong> Call 911 or campus emergency services immediately. Do not wait.</p>
                <p><strong>NO:</strong> Continue to step 2.</p>
              </div>
            </div>
            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Is student health open and accessible this week?</h3>
                <p><strong>YES</strong> and appointment available within 24 hours: Consider student health if you prefer.</p>
                <p><strong>NO</strong> (closed, weekend, wait too long): Continue to step 3.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Is this a common condition treatable via video?</h3>
                <p>UTI, strep, sinus, pink eye, skin rash, respiratory infection, allergy, prescription refill?</p>
                <p><strong>YES:</strong> Book TeleDirectMD — same-day, $49.</p>
              </div>
            </div>
            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">4</div>
              <div className="tdmd-decision-content">
                <h3>Does it need in-person exam, lab, or imaging?</h3>
                <p><strong>YES:</strong> Go to urgent care or schedule an in-person appointment.</p>
                <p><strong>NO:</strong> Book TeleDirectMD — we can diagnose and prescribe via video.</p>
              </div>
            </div>
          </div>
          <div className="tdmd-decision-cta">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
          </div>
        </div>
      </section>

      {/* Section 9: Cost Breakdown */}
      <section id={`${pid}-cost`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Cost Breakdown</h2>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card">
              <div className="tdmd-price-big">$49</div>
              <div className="tdmd-price-sub">One flat fee, no surprise bills</div>
              <ul className="tdmd-price-includes">
                <li>Video visit with board-certified MD</li>
                <li>Diagnosis and treatment plan</li>
                <li>Prescription sent to campus or nearby pharmacy</li>
                <li>No insurance required — ever</li>
                <li>HIPAA-compliant visit summary</li>
              </ul>
            </div>
          </div>

          <div className="tdmd-price-chart">
            <div className="tdmd-bar-row">
              <div className="tdmd-bar-label">TeleDirectMD</div>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ width: '4%' }}></div>
              </div>
              <span>$49</span>
            </div>
            <div className="tdmd-bar-row">
              <div className="tdmd-bar-label">Student Health (co-pay)</div>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '3.5%' }}></div>
              </div>
              <span>$20–$40 (business hours only)</span>
            </div>
            <div className="tdmd-bar-row">
              <div className="tdmd-bar-label">US Urgent Care</div>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '23%' }}></div>
              </div>
              <span>$100–$300</span>
            </div>
            <div className="tdmd-bar-row">
              <div className="tdmd-bar-label">Emergency Room</div>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '100%' }}></div>
              </div>
              <span>$1,500–$5,000+</span>
            </div>
          </div>

          <p className="tdmd-cost-note">
            Even with student health insurance, if you've already met your deductible or need after-hours care, $49 is often the most practical option.
          </p>
        </div>
      </section>

      {/* Section 10: What Is the Student Healthcare Gap */}
      <section id={`${pid}-healthcare-gap`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>What Is the Student Healthcare Gap?</h2>
          <p>
            Approximately 19 million students are enrolled in US colleges and universities. The vast majority rely on student health centers that operate on limited business-hours schedules, leaving a large window of unmet need — evenings, weekends, and holidays. When a UTI hits at 9 PM on a Sunday before a Monday exam, there is no campus option.
          </p>
          <p>
            71% of college students have used telehealth — a higher rate than the general population (54%). But the dominant telehealth platforms in the college market (TimelyCare, Uwill, Hims/Hers) focus almost exclusively on behavioral health: therapy, counseling, and mental wellness. For urgent medical conditions — UTI, strep throat, sinus infections, pink eye, skin infections — there is no dominant telehealth platform dedicated to college students.
          </p>
          <p>
            TeleDirectMD fills that gap: urgent medical care, not behavioral health. Board-certified MD, not a chatbot or wellness app. $49 flat fee, same-day availability, 42 states covered. Prescriptions sent to any campus pharmacy or nearby Walgreens or CVS.
          </p>
        </div>
      </section>

      {/* Section 11: When TeleDirectMD Fills the Gap — 4 Scenarios */}
      <section id={`${pid}-scenarios`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>When TeleDirectMD Fills the Gap</h2>
          <div className="tdmd-grid tdmd-grid-2">
            {scenarios.map(s => (
              <div key={s.title} className="tdmd-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Common Student Health Concerns — Table */}
      <section id={`${pid}-conditions-table`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Common Student Health Concerns</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Condition</th>
                  <th>Common Symptoms</th>
                  <th>Telehealth Appropriate?</th>
                  <th>When to Go In-Person</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UTI</td>
                  <td>Burning, frequency, urgency, pelvic pain</td>
                  <td>Yes</td>
                  <td>Fever &gt;101°F, back pain, vomiting (kidney involvement)</td>
                </tr>
                <tr>
                  <td>Strep Throat</td>
                  <td>Severe sore throat, white patches, fever</td>
                  <td>Yes</td>
                  <td>Difficulty swallowing, drooling, airway concerns</td>
                </tr>
                <tr>
                  <td>Sinus Infection</td>
                  <td>Facial pressure, congestion, post-nasal drip</td>
                  <td>Yes</td>
                  <td>Severe headache, visual changes, stiff neck</td>
                </tr>
                <tr>
                  <td>Pink Eye</td>
                  <td>Redness, discharge, irritation</td>
                  <td>Yes</td>
                  <td>Vision loss, severe eye pain, trauma</td>
                </tr>
                <tr>
                  <td>Skin Rash / Infection</td>
                  <td>Redness, swelling, warmth, drainage</td>
                  <td>Yes for most</td>
                  <td>Spreading cellulitis, red streaks, high fever</td>
                </tr>
                <tr>
                  <td>Respiratory / Bronchitis</td>
                  <td>Cough, congestion, low-grade fever</td>
                  <td>Yes</td>
                  <td>Difficulty breathing, high fever, persistent symptoms</td>
                </tr>
                <tr>
                  <td>Allergies</td>
                  <td>Sneezing, watery eyes, congestion</td>
                  <td>Yes</td>
                  <td>Throat tightening, difficulty breathing (anaphylaxis → 911)</td>
                </tr>
                <tr>
                  <td>Prescription Refill</td>
                  <td>Running low on regular medication</td>
                  <td>Yes</td>
                  <td>Controlled substances</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 13: Telehealth Appropriate vs. Requires In-Person */}
      <section id={`${pid}-telehealth-vs-inperson`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Telehealth Appropriate vs. Requires In-Person</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Telehealth Appropriate</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>UTI</li>
                <li>Strep throat</li>
                <li>Sinus infection</li>
                <li>Pink eye</li>
                <li>Skin rash (most)</li>
                <li>Respiratory infection</li>
                <li>Allergies</li>
                <li>Acne (prescription)</li>
                <li>Anxiety (generalized)</li>
                <li>Prescription refills when away from home doctor</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>Requires In-Person or Emergency Care</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Suspected appendicitis (severe abdominal pain)</li>
                <li>Chest pain or difficulty breathing → 911</li>
                <li>Severe allergic reaction (anaphylaxis) → 911</li>
                <li>Head injuries</li>
                <li>Suspected fractures</li>
                <li>Controlled substance needs</li>
                <li>Ongoing therapy or complex behavioral health</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: What TeleDirectMD Provides */}
      <section id={`${pid}-what-we-provide`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>What TeleDirectMD Provides</h2>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card">
              <h3>Diagnosis &amp; Treatment</h3>
              <p>Dr. Bhavsar evaluates your symptoms via video, makes a clinical diagnosis, and provides a treatment plan — exactly as he would in an office visit. For most common conditions, this means a prescription ready at your pharmacy within minutes of the visit ending.</p>
            </div>
            <div className="tdmd-card">
              <h3>Prescription to Your Campus Pharmacy</h3>
              <p>Prescriptions are sent electronically to any US pharmacy — campus pharmacy, CVS, Walgreens, Walmart, or independent pharmacies near campus. Tell us your preferred pharmacy at booking and the prescription will be waiting.</p>
            </div>
            <div className="tdmd-card">
              <h3>Cross-State Care</h3>
              <p>If your home doctor is in Ohio and you're studying in Georgia, we can see you and prescribe — because we're licensed in 42 states including both. No referral needed. No out-of-state complications. Just book and connect.</p>
            </div>
            <div className="tdmd-card">
              <h3>Anxiety Management</h3>
              <p>TeleDirectMD can evaluate and prescribe non-controlled medications for generalized anxiety disorder. For ongoing therapy, complex behavioral health, or conditions requiring a dedicated mental health provider, we'll help guide you to the appropriate resource.</p>
            </div>
          </div>

          <div className="tdmd-card tdmd-card-disclaimer">
            <h3>What We Don't Manage</h3>
            <ul>
              <li>Controlled substances (no exceptions)</li>
              <li>Complex behavioral health therapy</li>
              <li>Medical emergencies — call 911</li>
              <li>Conditions requiring in-person physical exam, laboratory testing, or imaging</li>
              <li>Patients under 18 years of age</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 15: Medications & Services Table */}
      <section id={`${pid}-medications`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Medications &amp; Services</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Medication / Service</th>
                  <th>Conditions</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Antibiotics (amoxicillin, azithromycin, cephalexin)</td>
                  <td>Strep, sinus, UTI, skin</td>
                  <td>Sent to campus or nearby pharmacy</td>
                </tr>
                <tr>
                  <td>Nitrofurantoin, Trimethoprim-Sulfamethoxazole</td>
                  <td>UTI</td>
                  <td>Standard first-line antibiotics</td>
                </tr>
                <tr>
                  <td>Antibiotic eye drops</td>
                  <td>Pink eye (bacterial)</td>
                  <td>Viral conjunctivitis self-resolves — evaluated via video</td>
                </tr>
                <tr>
                  <td>Antihistamines (prescription)</td>
                  <td>Allergies</td>
                  <td>OTC options also recommended</td>
                </tr>
                <tr>
                  <td>Topical antibiotics</td>
                  <td>Skin infections</td>
                  <td>Mupirocin, clindamycin</td>
                </tr>
                <tr>
                  <td>Prescription acne treatment</td>
                  <td>Acne</td>
                  <td>Topical retinoids, antibiotics</td>
                </tr>
                <tr>
                  <td>SSRIs / SNRIs</td>
                  <td>Generalized anxiety</td>
                  <td>Non-controlled; evaluation required; not a substitute for therapy</td>
                </tr>
                <tr>
                  <td>Prescription refills</td>
                  <td>Ongoing medications</td>
                  <td>Excluding controlled substances</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-card-disclaimer">
            TeleDirectMD does not prescribe controlled substances. For complex behavioral health care, a dedicated mental health provider is more appropriate.
          </p>
        </div>
      </section>

      {/* Section 16: Home Care & Campus Health Tips */}
      <section id={`${pid}-home-care`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Home Care &amp; Campus Health Tips</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>What to Do Now</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>Stay hydrated and rest — most common conditions improve faster with good hydration and sleep</li>
                <li>Pick up your prescription as soon as it's sent — usually ready within 30 minutes at campus pharmacy</li>
                <li>Use OTC support: ibuprofen for pain/fever, saline nasal rinse for sinus, antihistamines for allergies</li>
                <li>Notify your roommate if you have a communicable condition (strep, pink eye)</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>What to Watch For</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Fever above 103°F that doesn't respond to acetaminophen</li>
                <li>Symptoms worsening after 48–72 hours on antibiotics</li>
                <li>Strep throat: rash developing after antibiotic start (contact provider — possible scarlet fever)</li>
                <li>UTI: back or flank pain developing (may indicate kidney involvement)</li>
              </ul>
            </div>
          </div>

          <div className="tdmd-card">
            <h3>When to Follow Up</h3>
            <ul>
              <li>Not improving after 48–72 hours on treatment</li>
              <li>New symptoms develop during your illness</li>
              <li>You need documentation for a class absence or academic accommodation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 17: When NOT to Use TeleDirectMD */}
      <section id={`${pid}-when-not`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>When NOT to Use TeleDirectMD</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-alert">
              <h3>Should Not Use TeleDirectMD For</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Medical emergencies — call 911 or campus security</li>
                <li>Severe allergic reaction (anaphylaxis) — call 911</li>
                <li>Chest pain or difficulty breathing — call 911</li>
                <li>Head injury</li>
                <li>Conditions requiring in-person physical exam</li>
                <li>Controlled substance prescriptions</li>
                <li>Complex ongoing behavioral health needs — find a dedicated therapist</li>
              </ul>
            </div>
            <div className="tdmd-card">
              <h3>Where to Go Instead</h3>
              <ul>
                <li><strong>Emergency:</strong> 911 or campus security</li>
                <li><strong>Urgent in-person:</strong> Nearest urgent care clinic</li>
                <li><strong>Behavioral health:</strong> University counseling center or TimelyCare</li>
                <li><strong>Controlled substance refill:</strong> Schedule with your home provider during break</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: FAQ */}
      <section id={`${pid}-faq`} className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="tdmd-faq-list">
              {faqItems.map((item, i) => (
                <details key={i} className="tdmd-faq-item">
                  <summary className="tdmd-faq-question">{item.q}</summary>
                  <div className="tdmd-faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id={`${pid}-bottom-cta`} className="tdmd-bottom-cta">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta-copy">
            <h2>Sick at School? You Don't Have to Wait.</h2>
            <p>Same-day visits, evenings and weekends. $49 flat fee. Prescriptions sent to campus pharmacy.</p>
          </div>
          <div className="tdmd-bottom-cta-actions">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
          </div>
        </div>
      </section>

      {/* Section 19: References */}
      <section id={`${pid}-references`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://nces.ed.gov/fastfacts/display.asp?id=372" target="_blank" rel="noopener noreferrer">National Center for Education Statistics — College Enrollment Data</a></li>
            <li><a href="https://www.hers.com/telehealth-survey" target="_blank" rel="noopener noreferrer">Hers — College Student Telehealth Usage Survey (2024)</a></li>
            <li><a href="https://hope4college.com/" target="_blank" rel="noopener noreferrer">Temple University Hope Center — #RealCollege Survey</a></li>
            <li><a href="https://www.cdc.gov/std/treatment-guidelines/urogenital.htm" target="_blank" rel="noopener noreferrer">CDC — STI Treatment Guidelines: UTI Management</a></li>
            <li><a href="https://www.aafp.org/pubs/afp/issues/2016/0101/p24.html" target="_blank" rel="noopener noreferrer">AAFP — Strep Throat: Diagnosis and Treatment</a></li>
            <li><a href="https://www.cms.gov/marketplace/resources/data" target="_blank" rel="noopener noreferrer">CMS — ACA Marketplace Data for Young Adults</a></li>
          </ul>
        </div>
      </section>

      {/* Section 20: Disclaimer */}
      <section id={`${pid}-disclaimer`} className="tdmd-section">
        <div className="tdmd-container">
          <p className="tdmd-footnote">
            Medical Disclaimer: The information on this page is for educational purposes only and does not constitute medical advice. If you are experiencing a medical emergency, call 911 or contact campus emergency services immediately. TeleDirectMD can evaluate and prescribe for generalized anxiety but is not a substitute for ongoing behavioral health therapy. Content reviewed by Parth Bhavsar, MD, board-certified Family Medicine physician.
          </p>
        </div>
      </section>

      {/* Section 21: States Grid */}
      <section id={`${pid}-states`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Available at Your School — Wherever That Is</h2>
          <p>TeleDirectMD is licensed in 42 states. Whether your campus is in Georgia, Texas, Ohio, California, the Carolinas, or anywhere in between, we can see you legally and send a prescription to a pharmacy near campus.</p>
          <div className="tdmd-other-states-grid">
            {allStates.map(s => (
              <a key={s.abbr} href={`/${s.abbr.toLowerCase()}`} className="tdmd-other-state-link">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 22: Related Audiences + Cross-links */}
      <section id={`${pid}-related`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Who Else We Serve</h2>
          <div className="tdmd-related-grid">
            <a href="/who-we-serve/international-visitors" className="tdmd-related-card">
              <div className="tdmd-related-title">International Visitors</div>
              <div className="tdmd-related-desc">No US insurance? $49 flat-fee care in 42 states.</div>
            </a>
            <a href="/who-we-serve/gig-workers" className="tdmd-related-card">
              <div className="tdmd-related-title">Gig Workers</div>
              <div className="tdmd-related-desc">Flexible care for freelancers and delivery drivers.</div>
            </a>
            <a href="/who-we-serve/uninsured-affordable-care" className="tdmd-related-card">
              <div className="tdmd-related-title">Uninsured Adults</div>
              <div className="tdmd-related-desc">No insurance? Transparent pricing, no surprise bills.</div>
            </a>
            <a href="/who-we-serve/early-retirees" className="tdmd-related-card">
              <div className="tdmd-related-title">Early Retirees</div>
              <div className="tdmd-related-desc">Bridge the gap until Medicare with $49 visits.</div>
            </a>
            <a href="/who-we-serve/remote-workers" className="tdmd-related-card">
              <div className="tdmd-related-title">Remote Workers</div>
              <div className="tdmd-related-desc">Healthcare that follows you anywhere.</div>
            </a>
            <a href="/who-we-serve/truck-drivers" className="tdmd-related-card">
              <div className="tdmd-related-title">Truck Drivers</div>
              <div className="tdmd-related-desc">Care from any truck stop in 42 states.</div>
            </a>
          </div>

          <div className="tdmd-inline-links">
            <div className="tdmd-link-cloud">
              <a href="/insurance-pricing">Insurance &amp; Pricing</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href={`#${pid}-faq`}>FAQ</a>
              <a href="/book-online">Book a Visit</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
