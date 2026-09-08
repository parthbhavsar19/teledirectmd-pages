import comparison from '../../../data/competitor-comparison.json';

export default function UninsuredAffordableCarePage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/uninsured-affordable-care`;
  const today = new Date().toISOString().split('T')[0];

  /* ── State coverage ─────────────────────────────────────────────── */
  const stateAbbrs = ['AL','AK','AZ','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NC','ND','OH','OK','PA','SC','SD','TN','TX','UT','VA','VT','WA','WV','WI','WY'];
  const stateNames = ['Alabama','Alaska','Arizona','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','North Carolina','North Dakota','Ohio','Oklahoma','Pennsylvania','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming','Washington, DC'];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'UTI / Urinary tract infection', slug: 'uti-treatment-online', desc: 'Uncomplicated UTI evaluation and antibiotic e-prescribed to your pharmacy for $79. Complicated or recurrent cases may need in-person labs.' },
    { name: 'Sinus infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation for bacterial vs viral sinusitis, symptom management, and antibiotics when clinically indicated. Not every sinus infection needs an antibiotic, and we will tell you that.' },
    { name: 'Cold, flu, respiratory infections', slug: 'common-cold-treatment-online', desc: 'Same-day evaluation, antivirals for eligible influenza patients, and clear guidance on when a symptom warrants in-person care.' },
    { name: 'Hypertension', slug: 'hypertension-refills-online', desc: 'Ongoing blood pressure management and refills, cheaper than an in-person office visit and with the same physician managing your regimen over time.' },
    { name: 'Type 2 diabetes', slug: 'diabetes-refills-online', desc: 'Refills, dose adjustments, and A1c-based follow-up. If labs are needed, we send an order to a local lab you can pay cash for.' },
    { name: 'Acid reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'PPI and H2 blocker management without a specialist copay. Continuity matters here because reflux patterns change and step-down strategies work best over months.' },
    { name: 'Eczema and common skin conditions', slug: 'eczema-treatment-online', desc: 'Topical steroid and non-steroidal prescriptions evaluated by video.' },
    { name: 'Influenza', slug: 'influenza-treatment-online', desc: 'Same-day evaluation and antivirals when eligible.' },
    { name: 'Migraine', slug: 'migraine-refills-online', desc: 'Abortive and preventive prescription management.' },
    { name: 'Pink eye / conjunctivitis', slug: 'pink-eye-treatment-online', desc: 'Prescription drops when bacterial, guidance when viral.' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    { q: 'How much does an online doctor visit cost without insurance in 2026?', a: "A TeleDirectMD visit is $79 flat, cash pay, no insurance required. GoodRx reports typical no-insurance telehealth prices of $40 to $90 per visit, though the lowest advertised prices often require a monthly membership. Named-brand telehealth without insurance runs $89 to $129 per visit (Teladoc, MDLive, Doctor On Demand, PlushCare). An in-person urgent care averages $180, and an uninsured ER visit averages $2,400 or more." },
    { q: 'Is $79 the cheapest online doctor without insurance?', a: 'No, and we do not claim to be. Services like ChatWithDr ($39.99) and Prana Health ($39) charge less. What TeleDirectMD offers at $79 is the cheapest visit with a board-certified MD (not a nurse practitioner), where you see the same physician every time, with no membership fee or drug subscription attached.' },
    { q: 'Will I see the same doctor every visit, or a different one each time?', a: 'Same doctor every visit. TeleDirectMD is a single-physician practice by design. You will see Dr. Parth Bhavsar on your first visit and every visit after. Almost every other cash-pay telehealth service (Teladoc, MDLive, Amwell, Doctor On Demand, GoodRx Care, HealthTap) rotates you through whoever is available in a large clinician pool.' },
    { q: 'If I travel to another state, do I get a different provider?', a: 'No. As long as you are physically located in one of the 44 states plus DC we cover at the time of your visit, you see the same doctor. Travel from Georgia to Florida to Texas, still the same physician, still the same chart, no re-intake, no new provider getting your history from scratch.' },
    { q: 'Is there a monthly membership or subscription fee?', a: 'No. $79 is the whole price. No enrollment fee, no annual fee, no membership tier, no unlock price. Compare that to GoodRx Gold ($10/mo), PlushCare ($19.99/mo), HealthTap ($15 to $18/mo), and Telescripts ($74.99/mo), where the advertised low visit price only applies after you pay the recurring fee.' },
    { q: 'Do you sell weight-loss shots, ED pills, or other drug subscriptions?', a: 'No. TeleDirectMD does not sell any monthly medication subscription. We do not run a GLP-1 program, an ED program, a hair-loss program, or a birth-control mail-order program. Prescriptions go to the pharmacy of your choice, whichever is cheapest for your specific drug. Our revenue is the $79 visit, not recurring drug margin.' },
    { q: 'Can I see a real MD online without insurance, or only a nurse practitioner?', a: 'You see a real board-certified physician. Dr. Parth Bhavsar is board-certified in Family Medicine by the American Board of Family Medicine, completed his residency at the University of Mississippi Medical Center, and is licensed in 44 states plus DC. Most cash-pay telehealth services under $50 are staffed primarily by nurse practitioners or physician assistants.' },
    { q: 'Can I get antibiotics prescribed online without insurance?', a: 'Yes, when clinically appropriate. Common conditions treated with antibiotics via telehealth include uncomplicated UTIs, bacterial sinus infections, strep pharyngitis (when a home test is available), and certain skin infections. We do not prescribe antibiotics for conditions that are almost always viral, like typical colds. TeleDirectMD does not prescribe controlled substances.' },
    { q: 'Can I use HSA or FSA to pay for a telehealth visit?', a: 'Yes. Telehealth visits are qualified medical expenses under IRS rules and can be paid with HSA or FSA cards.' },
    { q: "What's the difference between TeleDirectMD, Teladoc, and GoodRx Care?", a: 'Teladoc ($89 per visit) and GoodRx Care ($19 with a $10/mo Gold membership, $39 to $70 without) both rotate you through a pool of providers, some of whom are nurse practitioners rather than physicians. TeleDirectMD ($79 per visit, no membership) is a single-physician practice where you see the same board-certified MD every visit across all 44 states we cover.' },
    { q: 'Can I book a same-day or weekend online doctor visit without insurance?', a: 'Yes. Most days have same-day availability including evenings until 9 PM local time and full weekend coverage. If a same-day slot is not open in your state, the next available window is shown before you pay.' },
    { q: 'What happens if I need a follow-up, do I pay $79 again?', a: 'Yes, $79 flat for every visit including follow-ups. There is no first-visit surcharge and no cheaper follow-up rate. The trade-off is transparency: you always know your cost, and there is no membership or subscription running in the background.' },
    { q: 'What pharmacies can you send prescriptions to?', a: 'Any US pharmacy. CVS, Walgreens, Walmart, Kroger, Publix, Costco (no membership needed to fill a prescription), Cost Plus Drugs, and any independent local pharmacy. During the visit we will discuss which pharmacy typically has the best cash price for the specific medication.' },
    { q: "Does TeleDirectMD show up in my medical record if I don't have insurance?", a: 'Yes. TeleDirectMD keeps a HIPAA-compliant medical record of every visit, and you can request a copy. Without insurance involved, no claim is submitted, so nothing is filed with an insurer. If you later request that we send records to another provider or insurer, we do that only with your written authorization.' },
    { q: 'Will an uninsured telehealth visit affect future insurance underwriting?', a: 'For most health insurance in the US (ACA marketplace, employer group plans, Medicare, Medicaid), the answer is no, because pre-existing conditions cannot be used to deny coverage or raise premiums. Life insurance and disability insurance underwriting can consider medical records; whether a specific visit affects a future application depends on the diagnosis and the carrier.' },
    { q: 'Is TeleDirectMD available in my state?', a: `TeleDirectMD is licensed in 44 states plus Washington, DC: ${stateNames.join(', ')}. You must be physically located in one of these jurisdictions at the time of your visit.` },
  ];

  /* ── JSON-LD Schema ──────────────────────────────────────────────── */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Who We Serve', item: `${baseUrl}/who-we-serve` },
          { '@type': 'ListItem', position: 3, name: 'Uninsured & Affordable Care', item: pageUrl }
        ]
      },
      {
        '@type': ['MedicalBusiness','MedicalOrganization','Organization'],
        '@id': `${baseUrl}/#organization`,
        name: 'TeleDirectMD',
        url: baseUrl,
        logo: `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        telephone: '+1-678-956-1855',
        medicalSpecialty: 'FamilyMedicine',
        priceRange: '$79',
        areaServed: stateAbbrs,
        employee: { '@id': `${baseUrl}/about#physician` },
        makesOffer: {
          '@type': 'Offer',
          name: 'Online doctor video visit, cash pay',
          price: '79.00',
          priceCurrency: 'USD',
          category: 'Telehealth video visit',
          description: 'Flat $79 per visit with a board-certified family medicine physician. No insurance, no membership, no drug subscription required. Follow-up visits are the same $79.',
          eligibleRegion: stateAbbrs,
          availableAtOrFrom: { '@type': 'VirtualLocation', url: 'https://teledirectmd.as.me' }
        },
        availableService: {
          '@type': 'MedicalTherapy',
          name: 'Telehealth video visit for non-emergency adult conditions',
          howPerformed: 'Secure HIPAA-compliant video visit'
        }
      },
      {
        '@type': 'Physician',
        '@id': `${baseUrl}/about#physician`,
        name: 'Parth Bhavsar, MD',
        givenName: 'Parth',
        familyName: 'Bhavsar',
        honorificSuffix: 'MD',
        jobTitle: 'Founder and Physician',
        medicalSpecialty: 'FamilyMedicine',
        worksFor: { '@id': `${baseUrl}/#organization` },
        alumniOf: [
          { '@type': 'EducationalOrganization', name: 'Smt NHL Municipal Medical College, Ahmedabad, India' },
          { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center (Family Medicine Residency, 2021)' }
        ],
        hasCredential: [{
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Board Certification',
          name: 'Board Certified in Family Medicine',
          recognizedBy: { '@type': 'Organization', name: 'American Board of Family Medicine' }
        }],
        areaServed: stateAbbrs
      },
      {
        '@type': 'HowTo',
        name: 'How to book a $79 online doctor visit without insurance',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
        totalTime: 'PT15M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Request a visit', text: 'Open TeleDirectMD.com on your phone, choose your state and describe your symptoms. See the $79 price before you confirm. Takes about 2 minutes.' },
          { '@type': 'HowToStep', position: 2, name: 'Connect by video', text: 'Meet Dr. Bhavsar by secure video. Most visits take 10 to 15 minutes.' },
          { '@type': 'HowToStep', position: 3, name: 'Get treated', text: 'If medication is appropriate, the prescription is sent electronically to your pharmacy of choice. If your case is not appropriate for telehealth, you will be directed to the right level of care.' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: '$79 Online Doctor Without Insurance - Same MD, 44 States',
        description: 'See the same board-certified physician every visit for $79 flat. No insurance, no membership, no drug subscriptions. 44 states, same-day, evenings and weekends.',
        inLanguage: 'en-US',
        breadcrumb: { '@id': `${pageUrl}#breadcrumbs` },
        author: { '@id': `${baseUrl}/about#physician` },
        reviewedBy: { '@id': `${baseUrl}/about#physician` },
        lastReviewed: today,
        datePublished: today,
        dateModified: today,
        publisher: { '@type': 'Organization', name: 'TeleDirectMD', url: baseUrl },
        audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: [
          { '@type': 'MedicalCondition', name: 'Urinary tract infection' },
          { '@type': 'MedicalCondition', name: 'Sinus infection' },
          { '@type': 'MedicalCondition', name: 'Influenza' },
          { '@type': 'MedicalCondition', name: 'Hypertension' },
          { '@type': 'MedicalCondition', name: 'Type 2 diabetes' },
          { '@type': 'MedicalCondition', name: 'Gastroesophageal reflux disease' },
          { '@type': 'MedicalCondition', name: 'Eczema' },
          { '@type': 'MedicalCondition', name: 'Migraine' },
          { '@type': 'MedicalCondition', name: 'Conjunctivitis' }
        ],
        mainEntity: { '@id': `${pageUrl}#faq` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.tdmd-hero-sub', '#uninsured-faq .tdmd-faq-question']
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Breadcrumb ────────────────────────────────────────────── */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">Uninsured &amp; Affordable Care</span>
        </div>
      </nav>

      {/* ── 1. Hero ────────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="uninsured-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>$79 Online Doctor Without Insurance - Same Board-Certified MD, Every Visit, 44 States</h1>
              <p className="tdmd-hero-sub">A TeleDirectMD video visit costs $79 flat. No insurance required. No monthly membership. No drug subscription upsells. You see the same board-certified physician every visit, whether you are home in Georgia or on a trip in Denver.</p>
              <ul className="tdmd-hero-benefits">
                <li><strong>$79 flat</strong>, first visit and follow-ups, no surprise billing</li>
                <li><strong>Same MD every visit</strong>, not a rotating pool</li>
                <li><strong>44 states</strong>, one doctor, no re-establishing care when you travel</li>
                <li><strong>No membership</strong>, no subscription, no enrollment fee</li>
                <li><strong>No drug subscriptions</strong>, prescriptions go to any pharmacy you choose</li>
                <li>Same-day visits, evenings and weekends</li>
              </ul>
              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 visit</a>
                <a href="#uninsured-compare" className="tdmd-btn tdmd-btn-outline">See how we compare</a>
              </div>
              <p className="tdmd-reviewed">
                Last reviewed on {today} by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">Parth Bhavsar, MD</a>
              </p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>Why $79 with a real MD beats $19 with a rotating NP</h2>
                <p>The lowest advertised prices ($19 GoodRx Care, $39 ChatWithDr, $39 Prana) either require a monthly membership or route you through nurse practitioners on a rotating pool. TeleDirectMD is $79 flat, no membership, and you see the same board-certified physician every visit across all 44 states we cover. If you have hypertension, diabetes, GERD, or anything that benefits from continuity, that matters clinically as much as it matters financially.</p>
                <p className="tdmd-hero-note">No app download required. Works on any smartphone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Competitor comparison ──────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-compare">
        <div className="tdmd-container">
          <h2>How TeleDirectMD compares</h2>
          <p>Most "cheap online doctor" services either charge you a monthly membership to unlock the low price, rotate you through whichever provider is available, or make their real money selling you a monthly drug subscription. Here is the honest comparison. Cost per visit and what is actually included, as of {comparison.asOfDate}.</p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Per-visit price</th>
                  <th scope="col">Provider</th>
                  <th scope="col">Same doctor every visit?</th>
                  <th scope="col">Membership required?</th>
                  <th scope="col">Pushes drug subscriptions?</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((r, i) => (
                  <tr key={i} style={r.isSelf ? { background: 'var(--tdmd-bg-soft)', fontWeight: 700 } : undefined}>
                    <th scope="row" style={{ textAlign: 'left' }}>{r.service}</th>
                    <td>{r.price}</td>
                    <td>{r.provider}</td>
                    <td>{r.sameDoctor}</td>
                    <td>{r.membership}</td>
                    <td>{r.drugSubscription}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--tdmd-muted)', marginTop: '0.75rem' }}>
            Sources: {comparison.sources.map((s, i) => (
              <span key={i}>{i > 0 ? ' · ' : ''}<a href={s.url} rel="nofollow noopener" target="_blank">{s.label}</a></span>
            ))}. Prices verified {comparison.asOfDate} and updated quarterly.
          </p>

          <div className="tdmd-grid tdmd-grid-2" style={{ marginTop: '1.5rem' }}>
            <div className="tdmd-card tdmd-card-good">
              <h3>Why $79 with the same MD beats $19 with a rotating NP</h3>
              <p>The $19 price at GoodRx Care requires a Gold membership at $10 per month, so the real cost of one visit for a non-member is $39 to $70. You are also seeing whoever is available in the pool, which may be an MD or a nurse practitioner, and almost never the same person twice. If you have hypertension, diabetes, GERD, or any condition that needs continuity, a rotating provider adds friction and risk that a flat $79 visit with a single physician does not.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Why a flat $79 visit beats a $30-per-month drug subscription</h3>
              <p>Hims, Hers, and Ro advertise "$0 visits," but the visit is a lead-in to a monthly prescription subscription that is often marked up above local pharmacy pricing. With TeleDirectMD the physician sends your prescription to the pharmacy of your choice, CVS, Walmart, Costco, Cost Plus Drugs, whichever is cheapest for your specific medication. Our revenue is the visit, not the drug margin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What $79 gets you ─────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="uninsured-included">
        <div className="tdmd-container">
          <h2>What $79 actually gets you</h2>
          <ul className="tdmd-hero-benefits">
            <li>A 10 to 15 minute video visit with the same board-certified family medicine physician every time</li>
            <li>E-prescription sent to any US pharmacy you choose, including Cost Plus Drugs and Costco (no membership required at Costco to fill a prescription)</li>
            <li>No enrollment fee, no membership, no subscription, no facility fee</li>
            <li>No pressure to sign up for a monthly medication delivery</li>
            <li>HSA and FSA cards accepted</li>
            <li>Follow-up visits are the same $79 flat, no first-visit surcharge</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>Insurance is accepted in select states. Contact us to confirm your plan.</p>
        </div>
      </section>

      {/* ── 4. When telehealth is right (and when it isn't) ─────── */}
      <section className="tdmd-section" id="uninsured-triage">
        <div className="tdmd-container">
          <h2>When telehealth is right, and when it isn't</h2>
          <p>Not every symptom belongs on a video visit. Here is a straight answer.</p>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th scope="col">Telehealth is appropriate</th>
                  <th scope="col">Go to urgent care or the ER</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>UTI, sinus infection, bronchitis, strep-like symptoms</td><td>Chest pain, shortness of breath, or symptoms of a heart attack</td></tr>
                <tr><td>Cold, flu, cough, low-grade fever</td><td>Signs of stroke (face droop, arm weakness, speech difficulty)</td></tr>
                <tr><td>Skin rash, eczema, cold sore, mild acne</td><td>Uncontrolled bleeding or a suspected fracture</td></tr>
                <tr><td>Prescription refills for hypertension, diabetes, GERD, statins</td><td>Severe abdominal pain, vomiting blood, or black stools</td></tr>
                <tr><td>Migraine, acid reflux, mild allergic reaction</td><td>Head injury with loss of consciousness or confusion</td></tr>
                <tr><td>Pink eye, ear pain (adult), simple UTI recurrence</td><td>Any pregnancy complication or severe pediatric illness</td></tr>
                <tr><td>Travel medicine, work notes, medication reviews</td><td>Suicidal ideation or a mental health emergency (call or text 988)</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)', marginTop: '0.75rem' }}>If you are unsure, request a visit. If your case is not appropriate for telehealth, we will tell you before charging you and refer you to the right level of care.</p>
        </div>
      </section>

      {/* ── 5. The physician ─────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="uninsured-physician">
        <div className="tdmd-container">
          <h2>The physician, and why "same doctor every visit" matters</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div>
              <h3 style={{ margin: '0 0 0.5rem' }}>Dr. Parth Bhavsar, MD</h3>
              <ul className="tdmd-hero-benefits" style={{ marginTop: 0 }}>
                <li>Board-certified in Family Medicine, American Board of Family Medicine</li>
                <li>Family Medicine residency, University of Mississippi Medical Center, 2021</li>
                <li>Medical degree, Smt NHL Municipal Medical College, Ahmedabad, India</li>
                <li>Licensed in 44 states and Washington, DC</li>
              </ul>
              <p style={{ marginTop: '1rem' }}><a href="/about" className="tdmd-btn tdmd-btn-outline">More about Dr. Bhavsar</a></p>
            </div>
            <div>
              <p>You will see me on your first visit and every visit after. Whether you are home in Atlanta, on a work trip in Denver, or visiting family in Miami, you get the same physician, the same chart, and no re-intake. That continuity is genuinely rare in cash-pay telehealth, and it is the entire design of this practice.</p>
              <p>Why it matters clinically: continuity of care is one of the most consistent predictors of better outcomes and lower total cost, particularly for chronic conditions like hypertension, diabetes, and GERD. It is easier to notice a subtle change in your blood pressure, your reflux pattern, or your medication response when the same physician has seen you before. A rotating pool of providers cannot do that, no matter how good each individual clinician is.</p>
              <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>TeleDirectMD is HIPAA-compliant. Your health information is encrypted, is not sold, and is not shared for advertising.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. 44 states ─────────────────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-states">
        <div className="tdmd-container">
          <h2>44 states, one doctor, no re-establishing care</h2>
          <p>Uninsured patients often move for work or travel between states, and every switch to a new provider means a new intake, a new deductible-style intake fee, and a new physician who does not know your history. With TeleDirectMD, you keep the same doctor as long as you are physically located in one of these 44 states plus DC at the time of your visit:</p>
          <div style={{ columns: '3 220px', gap: '1.5rem', fontSize: '0.95rem', margin: '1rem 0' }}>
            {stateNames.map((s) => <div key={s} style={{ breakInside: 'avoid', padding: '0.15rem 0' }}>{s}</div>)}
          </div>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>Not currently available in Arkansas, Massachusetts, New Mexico, New York, Oregon, or Rhode Island. See <a href="/states-we-serve">States We Serve</a> for state-specific condition pages.</p>
        </div>
      </section>

      {/* ── 7. Common conditions ─────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="uninsured-conditions">
        <div className="tdmd-container">
          <h2>Common conditions we treat for uninsured patients</h2>
          <p>Every visit is $79 flat, no insurance required. Each condition below links to a page that explains what to expect, what medications are typically appropriate, and when telehealth is not the right call.</p>
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
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View all 60+ conditions we treat</a>
          </div>
        </div>
      </section>

      {/* ── 8. Availability ──────────────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-availability">
        <div className="tdmd-container">
          <h2>Same-day, evenings, and weekends</h2>
          <p>Illness does not wait for business hours, and neither should your doctor. Availability, all US time zones:</p>
          <ul className="tdmd-hero-benefits">
            <li><strong>Same-day visits:</strong> most days, including weekends</li>
            <li><strong>Evening slots:</strong> until 9 PM local time</li>
            <li><strong>Weekend slots:</strong> Saturday and Sunday</li>
            <li><strong>Request time:</strong> about 2 minutes on any smartphone, no app download</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>If a same-day slot is not available in your state, you will see the next available window before you pay.</p>
        </div>
      </section>

      {/* ── 9. Prescriptions & pharmacies ────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="uninsured-prescriptions">
        <div className="tdmd-container">
          <h2>Prescriptions without insurance</h2>
          <p>Medication cost is separate from the $79 visit, and it depends on the drug and your pharmacy, not on us. During your visit we will discuss the least-expensive option that works clinically. Common savings tools:</p>
          <ul className="tdmd-hero-benefits">
            <li><a href="https://costplusdrugs.com" rel="nofollow noopener" target="_blank">Cost Plus Drugs</a>: Mark Cuban's pharmacy. Often the cheapest source for common generics.</li>
            <li><a href="https://goodrx.com" rel="nofollow noopener" target="_blank">GoodRx</a> coupons: present at pickup, no membership needed to use a coupon.</li>
            <li><a href="https://www.walmart.com/cp/4-prescriptions/1078664" rel="nofollow noopener" target="_blank">Walmart $4 / $10 generic list</a>: applies to many common medications.</li>
            <li><a href="https://www.costco.com/pharmacy.html" rel="nofollow noopener" target="_blank">Costco pharmacy</a>: cash prices are often lower than membership-required competitors, and you do not need a Costco membership to fill a prescription there.</li>
          </ul>
          <p style={{ fontSize: '0.93rem', color: 'var(--tdmd-muted)' }}>We do not sell you a monthly medication subscription, so we have no incentive to steer you toward a more expensive pharmacy.</p>
        </div>
      </section>

      {/* ── 10. How it works ─────────────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-how-it-works">
        <div className="tdmd-container">
          <h2>How it works, 3 steps</h2>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Request a visit</h3>
                <p>Open TeleDirectMD.com on your phone. See the $79 price before you confirm. Tell us your state and symptoms. About 2 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Connect by video</h3>
                <p>You meet Dr. Bhavsar by secure video. Most visits take 10 to 15 minutes.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get treated</h3>
                <p>If medication is appropriate, the prescription is e-sent to the pharmacy of your choice. If your case is not appropriate for telehealth, you will hear that directly and get pointed to the right level of care.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a visit now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ──────────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-faq" id="uninsured-faq">
        <div className="tdmd-container">
          <h2>Frequently asked questions</h2>
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

      {/* ── 12. Final CTA ────────────────────────────────────────── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>See a board-certified MD today, $79 flat</h3>
              <p>No insurance, no membership, no drug subscription. Same doctor every visit across 44 states.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 visit</a>
              <a href="/insurance" className="tdmd-btn tdmd-btn-outline">Pricing &amp; insurance</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. Cross-links ──────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-inline-links">
            <h3>Other communities we serve</h3>
            <p className="tdmd-link-cloud">
              <a href="/who-we-serve/truck-drivers">Truck drivers</a>
              <a href="/who-we-serve/gig-workers">Gig workers &amp; freelancers</a>
              <a href="/who-we-serve/hdhp-hsa-holders">HDHP &amp; HSA holders</a>
              <a href="/who-we-serve/early-retirees">Early retirees</a>
              <a href="/who-we-serve">Who we serve hub</a>
            </p>
          </div>
          <div className="tdmd-inline-links" style={{ marginTop: '1rem' }}>
            <h3>More from TeleDirectMD</h3>
            <p className="tdmd-link-cloud">
              <a href="/what-we-treat">What we treat</a>
              <a href="/states-we-serve">States we serve</a>
              <a href="/insurance">Insurance &amp; pricing</a>
              <a href="/faq">FAQs</a>
              <a href="/book-online">Book a visit</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── 14. References ───────────────────────────────────────── */}
      <section className="tdmd-section" id="uninsured-references">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/" rel="nofollow noopener" target="_blank">Key facts about the uninsured population, KFF, 2025 update</a></li>
            <li><a href="https://www.cbo.gov/publication/60702" rel="nofollow noopener" target="_blank">Effects of expiring ACA premium tax credits, Congressional Budget Office</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits, Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How much does a telehealth visit cost? GoodRx</a></li>
            <li><a href="https://doctorondemand.com/about-us/cost-insurance/" rel="nofollow noopener" target="_blank">Doctor On Demand cost and insurance page</a></li>
            <li><a href="https://www.thepennyhoarder.com/save-money/telemedicine-without-insurance/" rel="nofollow noopener" target="_blank">8 affordable options for telemedicine without insurance, The Penny Hoarder</a></li>
            <li><a href="https://coveredusa.org/urgent-care-cost-without-insurance/" rel="nofollow noopener" target="_blank">Urgent care visit cost without insurance in 2026, CoveredUSA</a></li>
          </ul>
        </div>
      </section>

      {/* ── 15. Disclaimer ───────────────────────────────────────── */}
      <section className="tdmd-section tdmd-footnote" id="uninsured-disclaimer">
        <div className="tdmd-container">
          <h2>Medical disclaimer</h2>
          <p>This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of the 44 states plus DC listed above at the time of the visit. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911. If you are experiencing a mental health emergency, call or text 988.</p>
          <p>Pricing listed is the flat self-pay rate for a video visit and applies to both first visits and follow-ups. Medication costs are separate from the visit fee and vary by pharmacy and drug. Insurance is accepted in select states; contact TeleDirectMD to confirm coverage in your state.</p>
        </div>
      </section>
    </>
  );
}
