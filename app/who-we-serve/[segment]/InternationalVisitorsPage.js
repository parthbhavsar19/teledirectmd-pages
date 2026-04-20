export default function InternationalVisitorsPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/international-visitors`;
  const today = new Date().toISOString().split('T')[0];
  const pid = 'intl-visitors';

  const conditions = [
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Antibiotic prescription sent to any US pharmacy — no urgent care visit needed.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for sinus pressure, congestion, and facial pain.' },
    { name: 'Strep Throat', slug: 'strep-throat-treatment-online', desc: 'Antibiotic treatment for strep throat without waiting for an in-person appointment.' },
    { name: 'Respiratory Infections / Bronchitis', slug: 'common-cold-treatment-online', desc: 'Cold, flu, and bronchitis evaluation and treatment.' },
    { name: 'Pink Eye (Conjunctivitis)', slug: 'pink-eye-treatment-online', desc: 'Eye drop prescriptions sent to the nearest pharmacy.' },
    { name: 'Skin Infections / Rashes', slug: 'skin-infection-treatment-online', desc: 'Evaluation of rashes, cellulitis, and minor skin infections via video.' },
    { name: "Traveler's Diarrhea", slug: 'stomach-flu-treatment-online', desc: "Antibiotic and anti-motility medication for traveler's diarrhea." },
    { name: 'Allergies', slug: 'allergies-treatment-online', desc: 'Prescription allergy medication for seasonal and environmental allergies.' },
    { name: 'Prescription Refills', slug: 'prescription-refills-online', desc: "Refills for ongoing medications if you've run short while traveling." },
    { name: 'Migraine', slug: 'migraine-refills-online', desc: 'Prescription migraine treatment and preventive medication management.' },
  ];

  const subgroups = [
    { label: 'Tourists on Vacation', desc: "Sightseeing and fell ill? Get treated from your hotel room in 20 minutes and pick up your prescription at the nearest pharmacy." },
    { label: 'Business Travelers', desc: "On a US work trip with a packed schedule? Same-day appointments that fit around your meetings — no waiting room." },
    { label: 'Parents Visiting Family', desc: "Visiting children or grandchildren? We provide care without navigating the US insurance system." },
    { label: 'International Students (F-1 Visa)', desc: "University plan doesn't cover everything? We fill the gap for conditions your student health insurance misses." },
  ];

  const faqItems = [
    {
      question: 'Can I use TeleDirectMD without US health insurance?',
      answer: 'Absolutely. TeleDirectMD is a direct-pay platform — no US health insurance is required at any point. You pay a flat $49 fee at the time of booking. That covers the full visit, including the physician consultation and any prescriptions sent to a US pharmacy. There are no surprise bills or insurance claims to file.'
    },
    {
      question: 'I have travel insurance from my home country. Can I use TeleDirectMD?',
      answer: 'Yes. Many international travel insurance policies reimburse telehealth consultations. After your visit, TeleDirectMD can provide a visit summary and receipt that you can submit to your travel insurer for reimbursement. Check your policy for telehealth coverage terms. Either way, $49 is a fraction of what a US urgent care or ER would cost.'
    },
    {
      question: 'Which states is TeleDirectMD available in for international visitors?',
      answer: 'TeleDirectMD is licensed in 42 US states. You can be seen by Dr. Bhavsar as long as you are physically located in one of our covered states at the time of the visit. This includes all major tourist destinations — Florida, California, New York, Texas, Nevada, Hawaii, Georgia, and more.'
    },
    {
      question: 'Can you send a prescription to a pharmacy near me?',
      answer: "Yes. TeleDirectMD can send prescriptions electronically to any US pharmacy, including CVS, Walgreens, Walmart, Rite Aid, and thousands of independent pharmacies. Just let us know the city or zip code you are visiting, and we'll route the prescription to the most convenient location."
    },
    {
      question: 'What conditions can you treat during my visit to the US?',
      answer: "We treat most common, non-emergency conditions that travelers experience: UTIs, sinus infections, strep throat, respiratory infections, pink eye, skin rashes, traveler's diarrhea, allergies, and more. We also provide prescription refills if you've run short of an ongoing medication. If your condition requires in-person evaluation or emergency care, we'll tell you clearly and help you find the right resource."
    },
    {
      question: 'How does a visit work? Is it hard to set up?',
      answer: "It's straightforward. Book a same-day or next-available appointment online, pay the $49 flat fee, and complete a brief intake form. At your appointment time, you'll connect via secure video call from your smartphone or computer — no app download required. Most visits take 10 to 15 minutes. If a prescription is needed, it's sent to a nearby pharmacy before the visit ends."
    },
    {
      question: 'Does TeleDirectMD see pediatric patients?',
      answer: 'TeleDirectMD sees patients 18 and older. We do not see pediatric patients at this time. If your child is ill, please visit a US urgent care clinic or emergency room.'
    },
    {
      question: 'Is a telehealth visit with TeleDirectMD legitimate medical care?',
      answer: 'Yes. TeleDirectMD is operated by Dr. Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in 42 US states. Prescriptions issued through TeleDirectMD are valid at any US pharmacy. Your visit is documented in a HIPAA-compliant medical record system, and you can receive a visit summary to share with your home-country physician if needed.'
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

  const stateAbbrs = allStates.map(s => s.abbr);

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
        "areaServed": stateAbbrs
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/about#physician`,
        "name": "Parth Bhavsar, MD",
        "medicalSpecialty": "FamilyMedicine",
        "alumniOf": { "@type": "EducationalOrganization", "name": "University of Mississippi Medical Center" },
        "worksFor": { "@type": "MedicalOrganization", "name": "TeleDirectMD" },
        "licensedIn": stateAbbrs
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
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
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".tdmd-hero h1", ".tdmd-answer-block"] }
      }
    ]
  };

  return (
    <>
      {/* Section 0: JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Section 1: Breadcrumb nav */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container">
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">International Visitors &amp; Tourists</span>
        </div>
      </nav>

      {/* Section 2: Answer Block */}
      <div
        className="tdmd-answer-block"
        data-speakable="true"
        style={{
          background: '#EAF7F8',
          borderLeft: '4px solid #006B73',
          padding: '1rem 1.25rem',
          margin: '0 0 0',
          lineHeight: 1.6
        }}
      >
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>
            Online doctor for international visitors to the USA:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD offers same-day video visits with a board-certified US physician for $49 flat — no US insurance required, available in 42 states. Get a diagnosis and prescription sent to a nearby pharmacy without leaving your hotel or vacation rental.
          </p>
        </div>
      </div>

      {/* Section 3: Hero — Dual Column */}
      <section className="tdmd-hero" id={`${pid}-hero`}>
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Online Doctor for International Visitors &amp; Tourists in the USA — No US Insurance Required</h1>
              <p className="tdmd-hero-sub">
                Visiting the US and need a doctor? TeleDirectMD connects you with a board-certified US physician via secure video — from your hotel room, vacation rental, or anywhere in 42 states.
              </p>
              <p>
                Whether you're here on vacation, a business trip, visiting family, or studying on an F-1 visa, getting sick in the US without domestic insurance can be stressful and expensive. TeleDirectMD was built for exactly this situation: fast, legitimate medical care at a flat $49 fee — with no billing surprises.
              </p>

              <nav className="tdmd-toc" aria-label="Page contents">
                <p className="tdmd-toc-intro">On this page:</p>
                <ul>
                  <li><a href={`#${pid}-eligibility`}>Eligibility</a></li>
                  <li><a href={`#${pid}-how-it-works`}>How It Works</a></li>
                  <li><a href={`#${pid}-regulatory`}>Telehealth for Non-Citizens</a></li>
                  <li><a href={`#${pid}-comparison`}>Cost Comparison</a></li>
                  <li><a href={`#${pid}-decision`}>Telehealth vs. ER Guide</a></li>
                  <li><a href={`#${pid}-cost`}>Pricing</a></li>
                  <li><a href={`#${pid}-gap`}>The US Healthcare Access Gap</a></li>
                  <li><a href={`#${pid}-who-we-help`}>Who We Help</a></li>
                  <li><a href={`#${pid}-travel-table`}>Common Travel Illnesses</a></li>
                  <li><a href={`#${pid}-appropriate`}>Telehealth vs. In-Person</a></li>
                  <li><a href={`#${pid}-what-we-provide`}>What We Provide</a></li>
                  <li><a href={`#${pid}-medications`}>Medications</a></li>
                  <li><a href={`#${pid}-home-care`}>Recovery Tips</a></li>
                  <li><a href={`#${pid}-when-not`}>When NOT to Use TeleDirectMD</a></li>
                  <li><a href={`#${pid}-faq`}>FAQ</a></li>
                  <li><a href={`#${pid}-states`}>States We Cover</a></li>
                </ul>
              </nav>

              <ul className="tdmd-hero-benefits">
                <li>No US health insurance required — ever</li>
                <li>$49 flat fee vs. $250–$350 for a cash-pay in-person US doctor visit</li>
                <li>Available in 42 states — all major tourist and business destinations covered</li>
                <li>Prescriptions sent to any US pharmacy: CVS, Walgreens, Walmart, Rite Aid, and more</li>
                <li>Same-day visits, evenings &amp; weekends available</li>
                <li>HIPAA-compliant records — visit summary suitable for travel insurance reimbursement</li>
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
              </div>

              <p className="tdmd-reviewed">Last reviewed on {today} by Parth Bhavsar, MD — Board-Certified Family Medicine</p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>What You Get for $49</h2>
                <ul>
                  <li>Video visit with board-certified MD (Dr. Parth Bhavsar)</li>
                  <li>Prescriptions sent to any US pharmacy</li>
                  <li>No US insurance required</li>
                  <li>Available in 42 US states</li>
                  <li>Same-day appointments, evenings &amp; weekends</li>
                  <li>HIPAA-compliant visit records</li>
                </ul>
                <p>No hidden fees. No billing. No surprise charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility Checklist */}
      <section className="tdmd-section" id={`${pid}-eligibility`}>
        <div className="tdmd-container">
          <h2>Am I Eligible?</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>You Are Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>You are physically located in one of our 42 licensed states at the time of the visit</li>
                <li>You are 18 years of age or older</li>
                <li>You have a non-emergency condition (UTI, sinus infection, strep, rash, traveler's diarrhea, allergies, refills, etc.)</li>
                <li>You have a smartphone or computer with camera and internet access</li>
                <li>You do not have US health insurance — or prefer direct-pay over using your plan</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>You Are Not Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>You are experiencing a medical emergency (chest pain, difficulty breathing, stroke symptoms, severe bleeding) — call 911</li>
                <li>You are physically located outside the US or in an unlicensed state</li>
                <li>You are under 18 years of age</li>
                <li>You need a controlled substance (DEA Schedule II–IV medications are outside our scope)</li>
                <li>Your condition requires an in-person physical examination, lab work, or imaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="tdmd-section" id={`${pid}-how-it-works`}>
        <div className="tdmd-container">
          <h2>How It Works</h2>
          <p>From booking to prescription in three straightforward steps — no app download, no insurance forms, no waiting room.</p>
          <div className="tdmd-decision-flow">

            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Book &amp; Pay</h3>
                <p>Select a same-day or next-available appointment at teledirectmd.com and pay the $49 flat fee. No account creation required, no insurance forms.</p>
              </div>
            </div>

            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Complete Intake &amp; Connect</h3>
                <p>Fill out a short symptom form before your visit. At your appointment time, connect via secure video from your smartphone or laptop — no app download needed.</p>
              </div>
            </div>

            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Receive Your Prescription</h3>
                <p>If medication is needed, Dr. Bhavsar sends it electronically to your preferred US pharmacy before the visit ends. Most visits take 10–15 minutes.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book Your Visit Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Regulatory Context */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-regulatory`}>
        <div className="tdmd-container">
          <h2>Telehealth Care for Non-Citizens — Is It Legal?</h2>
          <p>
            Yes — telehealth care through TeleDirectMD is fully legal and available to any person physically located in a licensed US state, regardless of visa status, citizenship, or insurance coverage. The key regulatory rule is straightforward: the treating physician must be licensed in the state where the <strong>patient is physically located</strong> at the time of the visit.
          </p>
          <p>
            Dr. Parth Bhavsar, MD is licensed in 42 US states. When you connect with TeleDirectMD, your visit is conducted under the laws of the state you are in — your nationality, immigration status, and home-country insurance have no bearing on your eligibility for care.
          </p>
          <p>
            Prescriptions issued through TeleDirectMD are valid at any US pharmacy and are governed by US federal and state pharmacy law — the same as any prescription from an in-person physician visit. There is no legal distinction between a telehealth prescription and one written in a clinic.
          </p>
          <p className="tdmd-icd">
            <strong>Source of authority:</strong> The Federation of State Medical Boards (FSMB) Interstate Medical Licensure Compact and individual state medical practice acts establish that physician licensure is determined by patient location, not physician location or patient nationality.
          </p>
        </div>
      </section>

      {/* Section 7: Comparison Table */}
      <section className="tdmd-section" id={`${pid}-comparison`}>
        <div className="tdmd-container">
          <h2>How TeleDirectMD Compares to Other US Care Options</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Care Option</th>
                  <th>Typical Cost (Cash)</th>
                  <th>Wait Time</th>
                  <th>Provider Type</th>
                  <th>Best for Visitors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>TeleDirectMD</strong></td>
                  <td><strong>$49 flat fee</strong></td>
                  <td>Same-day, usually &lt;1 hr</td>
                  <td>Board-certified MD</td>
                  <td>Non-emergency conditions, prescription needs</td>
                </tr>
                <tr>
                  <td>US Urgent Care</td>
                  <td>$150–$300</td>
                  <td>1–3 hours</td>
                  <td>PA or NP</td>
                  <td>Minor injuries, conditions needing in-person exam</td>
                </tr>
                <tr>
                  <td>In-Person Doctor (cash)</td>
                  <td>$250–$350</td>
                  <td>Days to weeks</td>
                  <td>MD or DO</td>
                  <td>Established patients with insurance</td>
                </tr>
                <tr>
                  <td>Emergency Room</td>
                  <td>$1,500–$5,000+</td>
                  <td>4–8+ hours</td>
                  <td>Emergency MD</td>
                  <td>Life-threatening emergencies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-comparison-note">
            For the UTIs, sinus infections, strep throats, and prescription needs that define the vast majority of travel illness, TeleDirectMD delivers board-certified care at a fraction of the cost — without leaving your hotel or Airbnb.
          </p>
        </div>
      </section>

      {/* Section 8: Decision Guide */}
      <section className="tdmd-section" id={`${pid}-decision`}>
        <div className="tdmd-container">
          <h2>Should You Use Telehealth or Go to the ER?</h2>
          <p>Use this guide to determine the right level of care for your situation.</p>
          <div className="tdmd-decision-flow">

            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Is it an emergency?</h3>
                <p>Chest pain, can't breathe, signs of stroke (facial drooping, arm weakness, speech difficulty), severe bleeding, or head injury?</p>
                <p><strong>YES →</strong> Call 911 or go to the nearest ER immediately. Do not use TeleDirectMD for emergencies.</p>
                <p><strong>NO →</strong> Continue to step 2.</p>
              </div>
            </div>

            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Can symptoms be described via video?</h3>
                <p><strong>YES</strong> — for these conditions: UTI, sinus infection, strep throat, eye infection, skin rash, traveler's diarrhea, allergies, prescription refill.</p>
                <p><strong>YES →</strong> Book TeleDirectMD. Proceed to step 3 to confirm.</p>
              </div>
            </div>

            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Do you need a physical exam, imaging, or lab test urgently?</h3>
                <p><strong>YES →</strong> Go to Urgent Care or the ER for in-person evaluation.</p>
                <p><strong>NO →</strong> TeleDirectMD is the right choice. Book now.</p>
              </div>
            </div>

            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">4</div>
              <div className="tdmd-decision-content">
                <h3>Ready to book?</h3>
                <p>Same-day appointments available. $49 flat fee. Board-certified MD. Prescriptions sent to any US pharmacy.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 9: Cost Breakdown */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
        <div className="tdmd-container">
          <h2>What Does a Visit Cost?</h2>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card">
              <div className="tdmd-price-big">$49</div>
              <div className="tdmd-price-sub">One flat fee covers your entire visit</div>
              <ul className="tdmd-price-includes">
                <li>Video visit with board-certified MD</li>
                <li>Diagnosis and treatment plan</li>
                <li>Prescription sent to nearest US pharmacy</li>
                <li>Visit summary for travel insurance reimbursement</li>
                <li>HIPAA-compliant medical record</li>
              </ul>
            </div>
          </div>

          <div className="tdmd-price-chart">
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">TeleDirectMD Visit</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ width: '4%' }}></div>
              </div>
              <span>$49</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">US Urgent Care</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '22%' }}></div>
              </div>
              <span>$150–$300</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">In-Person Doctor (cash)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '27%' }}></div>
              </div>
              <span>$250–$350</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">ER (non-emergency)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '100%' }}></div>
              </div>
              <span>$1,500–$5,000+</span>
            </div>
          </div>

          <p className="tdmd-cost-note">No hidden fees, co-pays, or billing surprises. You know the cost before you book.</p>
        </div>
      </section>

      {/* Section 10: The US Healthcare Access Gap */}
      <section className="tdmd-section" id={`${pid}-gap`}>
        <div className="tdmd-container">
          <h2>The US Healthcare Access Gap for International Visitors</h2>
          <p>
            The United States has among the most expensive healthcare systems in the world for cash-pay patients. Without US domestic insurance, even routine conditions that would cost $20–$50 to treat at home can escalate to hundreds or thousands of dollars in American facilities.
          </p>
          <p>
            Without US insurance, even a routine doctor visit costs $250–$350 — five to seven times what TeleDirectMD charges. A non-emergency urgent care visit runs $150–$300. An ER visit for a minor condition regularly exceeds $1,500, and can reach $5,000 or more with any lab work or imaging.
          </p>
          <p>
            According to the National Travel and Tourism Office, the US received approximately 72.4 million international arrivals in 2024 — the vast majority without US health insurance. Most travel-related illness is not emergent: infections, gastrointestinal illness, allergic reactions, and medication shortfalls define the typical traveler's medical episode.
          </p>
          <p>
            TeleDirectMD was built specifically for this gap. Board-certified care, delivered via video, at a price that doesn't derail a trip budget — with prescriptions routed to the nearest US pharmacy so visitors can get well and get back to why they came.
          </p>
        </div>
      </section>

      {/* Section 11: Who We Help */}
      <section className="tdmd-section" id={`${pid}-who-we-help`}>
        <div className="tdmd-container">
          <h2>Who TeleDirectMD Helps</h2>
          <p>International visitors come to the US for many reasons. TeleDirectMD serves them all.</p>
          <div className="tdmd-grid tdmd-grid-2">
            {subgroups.map(g => (
              <div key={g.label} className="tdmd-card">
                <h3>{g.label}</h3>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Common Travel Illnesses Table */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-travel-table`}>
        <div className="tdmd-container">
          <h2>Common Travel Illnesses &amp; What to Watch For</h2>
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
                  <td>Burning urination, frequency, pelvic pain</td>
                  <td>Yes — antibiotic Rx</td>
                  <td>Fever &gt;101°F, back pain, vomiting</td>
                </tr>
                <tr>
                  <td>Sinus Infection</td>
                  <td>Facial pressure, congestion, post-nasal drip</td>
                  <td>Yes</td>
                  <td>Severe headache, visual changes, stiff neck</td>
                </tr>
                <tr>
                  <td>Strep Throat</td>
                  <td>Severe sore throat, white patches, fever</td>
                  <td>Yes</td>
                  <td>Difficulty swallowing, drooling, airway concerns</td>
                </tr>
                <tr>
                  <td>Traveler's Diarrhea</td>
                  <td>Frequent loose stools, cramping, nausea</td>
                  <td>Yes</td>
                  <td>Bloody stool, &gt;72 hrs, high fever, signs of dehydration</td>
                </tr>
                <tr>
                  <td>Pink Eye</td>
                  <td>Eye redness, discharge, irritation</td>
                  <td>Yes</td>
                  <td>Vision loss, severe eye pain, trauma</td>
                </tr>
                <tr>
                  <td>Allergies</td>
                  <td>Sneezing, watery eyes, nasal congestion</td>
                  <td>Yes</td>
                  <td>Throat tightening, difficulty breathing (anaphylaxis → 911)</td>
                </tr>
                <tr>
                  <td>Skin Rash / Infection</td>
                  <td>Redness, swelling, drainage</td>
                  <td>Yes for most</td>
                  <td>Spreading cellulitis, fever, red streaks</td>
                </tr>
                <tr>
                  <td>Prescription Refill</td>
                  <td>Running low on regular medication</td>
                  <td>Yes</td>
                  <td>Controlled substances, insulin adjustments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 13: Telehealth Appropriate vs. In-Person */}
      <section className="tdmd-section" id={`${pid}-appropriate`}>
        <div className="tdmd-container">
          <h2>Telehealth-Appropriate vs. In-Person Care</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Telehealth-Appropriate for Visitors</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>UTI</li>
                <li>Strep throat</li>
                <li>Sinus infection</li>
                <li>Pink eye (conjunctivitis)</li>
                <li>Allergies</li>
                <li>Skin rashes and minor infections</li>
                <li>Traveler's diarrhea</li>
                <li>Respiratory infections</li>
                <li>Prescription refills (non-controlled)</li>
                <li>Migraine management</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>Go In-Person or Call 911</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Chest pain or pressure</li>
                <li>Difficulty breathing</li>
                <li>Stroke symptoms — FAST (Face, Arms, Speech, Time)</li>
                <li>Severe injury or uncontrolled bleeding</li>
                <li>High fever with stiff neck</li>
                <li>Abdominal rigidity</li>
                <li>Vision loss</li>
                <li>Anaphylaxis — call 911 immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: What TeleDirectMD Provides */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-what-we-provide`}>
        <div className="tdmd-container">
          <h2>What TeleDirectMD Provides</h2>
          <p>
            Every TeleDirectMD visit is conducted by Dr. Parth Bhavsar, MD — board-certified in Family Medicine, residency-trained at the University of Mississippi Medical Center, and licensed in 42 US states. Here is what your $49 visit includes:
          </p>

          <h3>Diagnosis &amp; Treatment Plan</h3>
          <p>
            Dr. Bhavsar evaluates your symptoms via video, provides a diagnosis, and creates a treatment plan tailored to your situation and travel timeline. You'll leave the visit knowing exactly what you have, what to do about it, and what warning signs to watch for.
          </p>

          <h3>Prescription Management</h3>
          <p>
            Prescriptions are sent electronically to any US pharmacy — CVS, Walgreens, Walmart, Rite Aid, and thousands of independent pharmacies. Tell us your location and we'll route it to the nearest option. Most prescriptions are ready within 30–60 minutes of the visit.
          </p>

          <h3>Medication Refills</h3>
          <p>
            If you've run short of an ongoing medication while traveling, TeleDirectMD can evaluate and prescribe refills for most medications. Excluding controlled substances (DEA Schedule II–IV).
          </p>

          <h3>Visit Documentation</h3>
          <p>
            You'll receive a visit summary suitable for submission to your travel insurance provider for potential reimbursement. Your visit is documented in a HIPAA-compliant medical record system — you can request a copy to share with your home-country physician.
          </p>

          <h3>What TeleDirectMD Does Not Manage</h3>
          <ul className="tdmd-checklist tdmd-checklist--alert">
            <li>Controlled substances (DEA Schedule II–IV medications)</li>
            <li>Conditions requiring physical examination, imaging, or urgent lab work</li>
            <li>Medical emergencies — call 911</li>
            <li>Patients under 18 years of age</li>
          </ul>
        </div>
      </section>

      {/* Section 15: Medications & Services Table */}
      <section className="tdmd-section" id={`${pid}-medications`}>
        <div className="tdmd-container">
          <h2>Medications &amp; Services Available</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Medication / Service</th>
                  <th>Conditions Treated</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Antibiotics (amoxicillin, azithromycin, etc.)</td>
                  <td>Strep, sinus infection, UTI, skin infections</td>
                  <td>Sent to any US pharmacy</td>
                </tr>
                <tr>
                  <td>Antivirals (oseltamivir)</td>
                  <td>Influenza</td>
                  <td>Best within 48 hrs of symptom onset</td>
                </tr>
                <tr>
                  <td>Antihistamines (prescription-strength)</td>
                  <td>Allergies</td>
                  <td>OTC options also recommended</td>
                </tr>
                <tr>
                  <td>Anti-motility agents (loperamide)</td>
                  <td>Traveler's diarrhea</td>
                  <td>Supportive care</td>
                </tr>
                <tr>
                  <td>Rifaximin / Cipro</td>
                  <td>Severe traveler's diarrhea</td>
                  <td>When antibiotic treatment indicated</td>
                </tr>
                <tr>
                  <td>Topical antibiotics</td>
                  <td>Skin infections, rashes</td>
                  <td>Mupirocin, clindamycin</td>
                </tr>
                <tr>
                  <td>Migraine treatment</td>
                  <td>Migraine</td>
                  <td>Triptans, anti-nausea agents</td>
                </tr>
                <tr>
                  <td>Prescription refills</td>
                  <td>Ongoing medications</td>
                  <td>Excluding controlled substances</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-card tdmd-card-disclaimer">
            Prescriptions are based on physician evaluation. Not all medications are appropriate for all patients. TeleDirectMD does not prescribe controlled substances.
          </p>
        </div>
      </section>

      {/* Section 16: Home Care & Travel Recovery Tips */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
        <div className="tdmd-container">
          <h2>While You Wait for Your Prescription / During Recovery</h2>

          <h3>What to Do Now</h3>
          <ul className="tdmd-checklist tdmd-checklist--good">
            <li>Stay hydrated — especially important for GI illness and fever</li>
            <li>Rest and avoid strenuous activity if you have an active infection</li>
            <li>Use OTC symptom relief (ibuprofen, acetaminophen, antihistamines) as appropriate</li>
            <li>Pick up your prescription at the nearest pharmacy as soon as possible</li>
          </ul>

          <h3>What to Watch For (Escalation Signals)</h3>
          <ul className="tdmd-checklist tdmd-checklist--alert">
            <li>Fever above 103°F that doesn't respond to acetaminophen</li>
            <li>Worsening symptoms after 48 hours on antibiotics</li>
            <li>New symptoms appearing alongside the original concern</li>
            <li>Any chest pain, difficulty breathing, or neurological symptoms — call 911</li>
          </ul>

          <h3>When to Follow Up</h3>
          <ul className="tdmd-checklist tdmd-checklist--good">
            <li>Symptoms not improving after 48–72 hours on treatment</li>
            <li>New concerns arise during your trip</li>
            <li>You need documentation for a travel insurance claim</li>
          </ul>
        </div>
      </section>

      {/* Section 17: When NOT to Use TeleDirectMD */}
      <section className="tdmd-section" id={`${pid}-when-not`}>
        <div className="tdmd-container">
          <h2>When NOT to Use TeleDirectMD</h2>
          <p>TeleDirectMD is designed for non-emergency conditions. Here's when you should seek different care:</p>

          <div className="tdmd-card tdmd-card-alert">
            <h3>Do Not Use TeleDirectMD For:</h3>
            <ul className="tdmd-checklist tdmd-checklist--alert">
              <li>Any life-threatening emergency — call 911</li>
              <li>Chest pain, shortness of breath, or signs of heart attack</li>
              <li>Stroke symptoms (facial drooping, arm weakness, speech difficulty)</li>
              <li>Severe allergic reaction / anaphylaxis</li>
              <li>Uncontrolled bleeding or severe traumatic injury</li>
              <li>High fever with stiff neck (meningitis concern)</li>
              <li>Altered mental status</li>
            </ul>
          </div>

          <h3>Alternatives by Situation</h3>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card">
              <h4>Emergency (life-threatening)</h4>
              <p>Call 911 or go to the nearest ER. Do not delay.</p>
            </div>
            <div className="tdmd-card">
              <h4>Urgent but Non-Emergency (needs in-person exam)</h4>
              <p>US Urgent Care — typical cost $150–$300 cash pay.</p>
            </div>
            <div className="tdmd-card">
              <h4>Ongoing Primary Care</h4>
              <p>Establish with a US primary care physician for longer stays.</p>
            </div>
            <div className="tdmd-card">
              <h4>Travel Insurance Reimbursement</h4>
              <p>After your TeleDirectMD visit, submit your receipt and visit summary to your travel insurer for potential reimbursement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: FAQ */}
      <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
        <div className="tdmd-container">
          <h2>Frequently Asked Questions</h2>
          <div className="tdmd-faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="tdmd-faq-item">
                <summary className="tdmd-faq-question" data-speakable="true">{item.question}</summary>
                <div className="tdmd-faq-answer"><p>{item.answer}</p></div>
              </details>
            ))}
          </div>

          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Ready to See a Doctor Today?</h3>
              <p>Same-day appointments. $49 flat fee. Board-certified MD. No US insurance required.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 19: References */}
      <section className="tdmd-section" id={`${pid}-references`}>
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li>
              <a href="https://travel.trade.gov/research/monthly/arrivals/index.asp" target="_blank" rel="noopener noreferrer">
                National Travel and Tourism Office — US International Arrivals Data (2024)
              </a>
            </li>
            <li>
              <a href="https://www.cdc.gov/travel" target="_blank" rel="noopener noreferrer">
                CDC — Travelers' Health
              </a>
            </li>
            <li>
              <a href="https://www.hhs.gov/hipaa" target="_blank" rel="noopener noreferrer">
                US Department of Health &amp; Human Services — HIPAA Privacy Rule
              </a>
            </li>
            <li>
              <a href="https://www.cms.gov/medicare/telehealth" target="_blank" rel="noopener noreferrer">
                Centers for Medicare &amp; Medicaid Services — Telehealth Policy
              </a>
            </li>
            <li>
              <a href="https://www.cdc.gov/ncezid/dfwed/edlb/travelers-diarrhea.html" target="_blank" rel="noopener noreferrer">
                CDC — Traveler's Diarrhea
              </a>
            </li>
            <li>
              <a href="https://www.aafp.org/pubs/afp/issues/2009/0515/p839.html" target="_blank" rel="noopener noreferrer">
                American Academy of Family Physicians — Common Travel-Related Illnesses
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 20: Disclaimer */}
      <section className="tdmd-section" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <p className="tdmd-footnote">
            <strong>Medical Disclaimer:</strong> The information on this page is for educational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately. Content reviewed by Parth Bhavsar, MD, board-certified Family Medicine physician.
          </p>
        </div>
      </section>

      {/* Section 21: States Grid */}
      <section className="tdmd-section" id={`${pid}-states`}>
        <div className="tdmd-container">
          <h2>Available in 42 States — Wherever Your Trip Takes You</h2>
          <p>
            TeleDirectMD is licensed in 42 US states. Whether you're visiting New York City, the Florida Keys, the California coast, or any destination in between, you can access board-certified care from where you are. Select your state for location-specific information:
          </p>
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
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related`}>
        <div className="tdmd-container">
          <h2>Who Else We Serve</h2>
          <div className="tdmd-related-grid">
            <a href="/who-we-serve/college-students" className="tdmd-related-card">
              <div className="tdmd-related-title">College Students</div>
              <div className="tdmd-related-desc">Away at school and need a doctor? Same-day visits, 42 states.</div>
            </a>
            <a href="/who-we-serve/early-retirees" className="tdmd-related-card">
              <div className="tdmd-related-title">Early Retirees</div>
              <div className="tdmd-related-desc">Retired before 65? Bridge the gap with $49 visits.</div>
            </a>
            <a href="/who-we-serve/uninsured-affordable-care" className="tdmd-related-card">
              <div className="tdmd-related-title">Uninsured Adults</div>
              <div className="tdmd-related-desc">No insurance? Transparent cash-pay care.</div>
            </a>
            <a href="/who-we-serve/gig-workers" className="tdmd-related-card">
              <div className="tdmd-related-title">Gig Workers</div>
              <div className="tdmd-related-desc">Flexible care for independent workers.</div>
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
            <h3>More from TeleDirectMD</h3>
            <p className="tdmd-link-cloud">
              <a href="/insurance">Insurance &amp; Pricing</a>
              {' · '}
              <a href="/states-we-serve">States We Serve</a>
              {' · '}
              <a href="/what-we-treat">What We Treat</a>
              {' · '}
              <a href="/faq">FAQ</a>
              {' · '}
              <a href="/book-online">Book a Visit</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
