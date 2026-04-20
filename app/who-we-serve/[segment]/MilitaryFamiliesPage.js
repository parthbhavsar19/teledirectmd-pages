export default function MilitaryFamiliesPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/military-families`;
  const today = new Date().toISOString().split('T')[0];
  const pid = 'military-families';

  const conditions = [
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Blood pressure medication refills when your TRICARE-network PCP isn\'t available at your new base.' },
    { name: 'Thyroid Management', slug: 'thyroid-management-online', desc: 'Medication continuity between PCS moves — keep your thyroid levels stable while establishing with a new provider.' },
    { name: 'Anxiety', slug: 'anxiety-treatment-online', desc: 'Prescription management for anxiety during high-stress relocation and separation periods.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescription — no need to find a new in-network provider for urgent needs.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for acute sinusitis.' },
    { name: 'Skin Infections / Rashes', slug: 'skin-infection-treatment-online', desc: 'Cellulitis, rashes, and minor skin infections evaluated via video.' },
    { name: 'Prescription Refills', slug: 'prescription-refills-online', desc: 'Bridge prescriptions during the gap between providers after a PCS move or separation.' },
    { name: 'Insomnia', slug: 'insomnia-treatment-online', desc: 'Sleep evaluation during high-stress transition periods.' },
    { name: 'Respiratory Infections', slug: 'common-cold-treatment-online', desc: 'Flu, bronchitis, and respiratory infection treatment without waiting for a new PCP appointment.' },
    { name: 'High Cholesterol', slug: 'hyperlipidemia-refills-online', desc: 'Statin refills and cholesterol management between providers.' },
  ];

  const faqItems = [
    {
      q: 'My spouse just separated from the military and TRICARE has ended. What are our options?',
      a: 'After TRICARE ends, you have several options: TAMP (180 days transitional coverage for qualifying separations), the ACA marketplace, or employer coverage once your spouse starts a new job. During any gap period — or for visits where direct-pay is faster — TeleDirectMD offers $49 flat-fee telehealth visits with no insurance required. We serve 42 states so we\'re available wherever you land during the transition.'
    },
    {
      q: 'We just PCS\'d and I can\'t get a primary care appointment for 8 weeks. Can you help?',
      a: 'Yes. This is one of the most common situations we help military families with. TeleDirectMD can provide prescription bridge refills for most ongoing medications (blood pressure, thyroid, cholesterol, anxiety, etc.) while you get established with a new TRICARE provider. We can also treat acute conditions — UTIs, sinus infections, skin problems — that can\'t wait for an 8-week appointment.'
    },
    {
      q: 'Does TeleDirectMD accept TRICARE?',
      a: 'TeleDirectMD is a direct-pay platform and does not currently bill TRICARE directly. The visit cost is $49 flat fee, paid at booking. Some TRICARE plans may allow out-of-network reimbursement for telehealth — check your specific plan terms. Either way, $49 is often far less than the cost of a TRICARE-covered in-person visit with co-pays and travel time factored in.'
    },
    {
      q: 'I\'m a Reservist and my TRICARE coverage isn\'t active right now. Can I use TeleDirectMD?',
      a: 'Absolutely. TeleDirectMD requires no insurance at any time. Reservists and Guard members whose TRICARE eligibility isn\'t currently active can use TeleDirectMD for any of our 60 covered conditions at the $49 flat fee.'
    },
    {
      q: 'Can you prescribe refills for medications my military provider prescribed?',
      a: 'In most cases, yes. After a telehealth evaluation to confirm the medication is still appropriate, TeleDirectMD can prescribe refills for most ongoing medications and send them to any US pharmacy — including TRICARE Express Scripts mail-order or retail pharmacy. This is especially helpful during PCS transitions when medication continuity is critical.'
    },
    {
      q: 'What states is TeleDirectMD licensed in?',
      a: 'TeleDirectMD is licensed in 42 US states, covering virtually every major military installation location — Georgia (Fort Moore, Fort Stewart), North Carolina (Fort Bragg, Camp Lejeune), Texas (Fort Hood, Fort Sam Houston), Florida (MacDill, Eglin, Hurlburt), Virginia (Quantico, Fort Belvoir), Colorado (Fort Carson, Peterson), Washington (Joint Base Lewis-McChord), and more.'
    },
    {
      q: 'My family just moved to a rural area near a base with limited medical access. Can telehealth help?',
      a: 'Yes. Thin TRICARE provider networks near some installations are a well-documented problem. TeleDirectMD\'s video visits work from any location with a smartphone and internet connection — including rural areas. For routine and urgent care needs, you can avoid the long drive and the wait for an available in-network appointment.'
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": "Military Families & Veterans", "item": pageUrl }
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
        "alumniOf": { "@type": "EducationalOrganization", "name": "University of Mississippi Medical Center" },
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
        "name": "Telehealth for Military Families — Coverage When TRICARE Has Gaps",
        "description": "TeleDirectMD fills TRICARE gaps for military families during separation, PCS moves, and Reserve/Guard transitions. $49 flat-fee telehealth in 42 states near every major installation. No insurance required.",
        "datePublished": "2026-04-20",
        "dateModified": today,
        "author": { "@type": "Physician", "name": "Parth Bhavsar, MD" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".tdmd-answer-block", ".tdmd-hero h1"] }
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
          <span aria-current="page">Military Families &amp; Veterans</span>
        </div>
      </nav>

      {/* Section 2: Answer Block (speakable) */}
      <div className="tdmd-answer-block" data-speakable="true" style={{
        background: '#EAF7F8', borderLeft: '4px solid #006B73',
        padding: '1rem 1.25rem', margin: '0 0 0', lineHeight: 1.6
      }}>
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>
            Telehealth for military families when TRICARE has gaps:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD provides $49 flat-fee video visits for military families during separation, PCS moves, and Reserve/Guard activation gaps — prescription bridge refills for blood pressure, thyroid, cholesterol, and anxiety, plus acute care for UTIs, sinus infections, and respiratory illness, in 42 states with no insurance required.
          </p>
        </div>
      </div>

      {/* Section 3: Hero — Dual Column */}
      <section id={`${pid}-hero`} className="tdmd-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Telehealth for Military Families — Prescription Bridge &amp; Acute Care When TRICARE Has Gaps</h1>
              <p className="tdmd-hero-sub">
                TRICARE is excellent — when it's active. But separation, PCS moves, and Reserve/Guard transitions create real coverage gaps. TeleDirectMD provides $49 flat-fee telehealth visits in 42 states — prescription bridge refills, acute care, no insurance required.
              </p>
              <p>
                Military families face unique healthcare gaps that civilians rarely encounter: 200,000+ service members separate each year, PCS moves create provider waitlists of 6–10 weeks, and Reserve/Guard members cycle in and out of coverage between activation periods. TeleDirectMD exists for exactly these moments — board-certified Family Medicine, same-day availability, and prescription capability from anywhere in 42 states.
              </p>
              <nav className="tdmd-toc" aria-label="Page sections">
                <p className="tdmd-toc-intro">On this page:</p>
                <ul>
                  <li><a href={`#${pid}-eligibility`}>Am I Eligible?</a></li>
                  <li><a href={`#${pid}-how-it-works`}>How It Works</a></li>
                  <li><a href={`#${pid}-tricare-gap`}>Understanding the TRICARE Gap</a></li>
                  <li><a href={`#${pid}-gap-table`}>Gap Scenarios Comparison</a></li>
                  <li><a href={`#${pid}-cost`}>Cost Breakdown</a></li>
                  <li><a href={`#${pid}-conditions`}>Conditions We Handle</a></li>
                  <li><a href={`#${pid}-what-we-provide`}>What TeleDirectMD Provides</a></li>
                  <li><a href={`#${pid}-transition`}>Managing Your Health During Transition</a></li>
                  <li><a href={`#${pid}-faq`}>FAQ</a></li>
                  <li><a href={`#${pid}-states`}>States &amp; Installations</a></li>
                </ul>
              </nav>
              <ul className="tdmd-hero-benefits">
                <li>Bridge prescriptions (BP, thyroid, cholesterol, anxiety) during PCS — keep medications stable</li>
                <li>No insurance required — $49 flat fee per visit, direct pay</li>
                <li>Post-separation coverage when TRICARE and TAMP end</li>
                <li>Licensed in 42 states — every major installation location covered</li>
                <li>Same-day availability, evenings &amp; weekends</li>
                <li>HIPAA-compliant visit records you can share with your new provider</li>
              </ul>
              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
              </div>
              <p className="tdmd-reviewed">Medically reviewed by Parth Bhavsar, MD, board-certified Family Medicine · Updated {today}</p>
            </div>
            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>What You Get for $49</h2>
                <ul>
                  <li>Video visit with board-certified Family Medicine MD</li>
                  <li>Prescription bridge refills (BP, thyroid, cholesterol, anxiety)</li>
                  <li>Acute condition treatment (UTI, sinus, respiratory, skin)</li>
                  <li>No TRICARE required — direct-pay</li>
                  <li>Available in 42 states near all major installations</li>
                  <li>Visit summary for your new provider's onboarding</li>
                </ul>
                <p className="tdmd-comparison-note">TeleDirectMD does not bill TRICARE directly. Some TRICARE plans may reimburse out-of-network. Check your plan.</p>
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
                <li>You are a military family member (active duty, Reserve/Guard, veteran) or dependent</li>
                <li>You are physically located in one of our 42 licensed states at the time of the visit</li>
                <li>Your TRICARE coverage has ended, lapsed, or is between activation periods</li>
                <li>You are mid-PCS and your new TRICARE provider isn't accepting new patients yet</li>
                <li>You need bridge prescriptions for ongoing medications (blood pressure, thyroid, cholesterol, anxiety, GERD)</li>
                <li>You have an acute condition (UTI, sinus, strep, skin) that can't wait for a new PCP appointment</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>&#10007; You Are Not Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>You are experiencing a medical emergency &#8594; call 911</li>
                <li>You need a controlled substance prescription (not within scope)</li>
                <li>Your condition requires in-person exam, imaging, or urgent labs</li>
                <li>You need a VA-specific service or mental health crisis support (contact the Veterans Crisis Line: 988, press 1)</li>
              </ul>
              <p className="tdmd-card-disclaimer">TeleDirectMD is not a TRICARE replacement and does not bill TRICARE. It is a direct-pay bridge for gaps in coverage.</p>
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
                <h3>Book &amp; Pay ($49)</h3>
                <p>No TRICARE card, no referral, no prior authorization. Select a same-day or next-available appointment. Pay $49 at booking — flat fee, no hidden costs, no insurance required.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Intake &amp; Video Connect</h3>
                <p>Bring your current medication list. Fill out the intake form and connect via secure video from your phone, anywhere in 42 states. Dr. Bhavsar reviews your history and conducts the evaluation.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Prescriptions &amp; Documentation</h3>
                <p>Dr. Bhavsar prescribes bridge medications, treats acute conditions, and provides a visit summary for your new provider. Prescriptions sent to any US pharmacy — including TRICARE Express Scripts.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Understanding the TRICARE Gap */}
      <section id={`${pid}-tricare-gap`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Understanding the TRICARE Gap</h2>
          <p>TRICARE is the healthcare system for active duty service members, Reserve/Guard, and their dependents — one of the most comprehensive in the world when it's active. It covers virtually everything, in-network, at low or no cost to the family.</p>
          <p>The problem: it's tied to service status. Separation ends TRICARE coverage immediately on the separation date. PCS moves disrupt existing provider relationships for 6–10 weeks or longer — the new base PCP may not be accepting new patients. Reserve/Guard coverage fluctuates between activation periods, leaving dependents uninsured during those gaps.</p>
          <p>TAMP — the Transitional Assistance Management Program — provides 180 days of transitional coverage for qualifying separation types. But not all separations qualify, and families who don't qualify face an immediate gap. Even for those who do qualify, TAMP eventually ends.</p>
          <p>The result: military families who are experts at navigating hardship often face a healthcare system that wasn't built for their transitions. Prescriptions lapse. Acute conditions go untreated. New PCPs have months-long waitlists.</p>
          <p><strong>TeleDirectMD doesn't replace TRICARE. It bridges the gap</strong> — $49 flat-fee telehealth with a board-certified Family Medicine physician, available same-day in 42 states, no insurance required.</p>
        </div>
      </section>

      {/* Section 7: Gap Scenarios Comparison Table */}
      <section id={`${pid}-gap-table`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Gap Scenarios: When TeleDirectMD Helps</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>TRICARE Status</th>
                  <th>The Problem</th>
                  <th>How TeleDirectMD Helps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Post-Separation (after TAMP)</strong></td>
                  <td>Ended</td>
                  <td>No coverage; civilian plans not yet in place</td>
                  <td>$49 direct-pay visits in 42 states, no insurance</td>
                </tr>
                <tr>
                  <td><strong>Mid-PCS Move</strong></td>
                  <td>Active (may be)</td>
                  <td>New PCP waitlist 6–10+ weeks; prescriptions lapsing</td>
                  <td>Bridge prescriptions for ongoing medications</td>
                </tr>
                <tr>
                  <td><strong>Reserve/Guard Between Activations</strong></td>
                  <td>Inactive</td>
                  <td>Coverage gap between activation periods</td>
                  <td>Pay-per-visit model for episodic needs</td>
                </tr>
                <tr>
                  <td><strong>Remote/Rural Base Assignment</strong></td>
                  <td>Active</td>
                  <td>Thin TRICARE network; long drive for in-network PCP</td>
                  <td>Video visit from home — no drive, no waitlist</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-comparison-note">In every transition scenario, TeleDirectMD provides what TRICARE cannot in that moment: immediate access to a board-certified physician and prescriptions, from anywhere in 42 states.</p>
        </div>
      </section>

      {/* Section 8: Decision Guide */}
      <section id={`${pid}-decision`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Should You Use TeleDirectMD?</h2>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Is it a medical emergency?</h3>
                <p><strong>YES:</strong> Call 911 immediately. Do not use telehealth for emergencies.</p>
                <p><strong>NO:</strong> Continue to step 2.</p>
              </div>
            </div>
            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Is TRICARE active and a network provider available within 48 hours?</h3>
                <p><strong>YES:</strong> Use your TRICARE network — it's the best option when available.</p>
                <p><strong>NO:</strong> Continue to step 3.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Is this a prescription refill or chronic condition management?</h3>
                <p>Blood pressure, thyroid, cholesterol, anxiety, GERD?</p>
                <p><strong>YES:</strong> Book TeleDirectMD — bridge prescriptions available same-day.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">4</div>
              <div className="tdmd-decision-content">
                <h3>Is this an acute condition?</h3>
                <p>UTI, sinus infection, strep, skin infection, respiratory illness?</p>
                <p><strong>YES:</strong> Book TeleDirectMD — same-day evaluation and treatment.</p>
                <p><strong>Needs in-person exam/imaging:</strong> Urgent Care or ER.</p>
                <div className="tdmd-decision-cta">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                </div>
              </div>
            </div>
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
              <div className="tdmd-price-sub">One flat fee — no TRICARE authorization required</div>
              <ul className="tdmd-price-includes">
                <li>Video visit with board-certified MD</li>
                <li>Bridge prescription for chronic medications</li>
                <li>Acute condition treatment</li>
                <li>Visit summary for new provider</li>
                <li>HIPAA-compliant records</li>
              </ul>
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book Now — $49</a>
            </div>
          </div>
          <div className="tdmd-price-chart">
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">TeleDirectMD</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ width: '4%' }}></div>
              </div>
              <span>$49</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">TRICARE Prime (in-network, when active)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '1.5%' }}></div>
              </div>
              <span>$0–$20 co-pay</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">TRICARE Prime (out-of-network)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '30%' }}></div>
              </div>
              <span>$200–$400+</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">Civilian Urgent Care (cash)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '23%' }}></div>
              </div>
              <span>$150–$300</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">Civilian ER (non-emergency)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '100%' }}></div>
              </div>
              <span>$1,500–$5,000+</span>
            </div>
          </div>
          <p className="tdmd-cost-note">When TRICARE is active and you're in-network, it's hard to beat. But during transitions, $49 is far less than the cost of out-of-network TRICARE care — or a civilian urgent care visit.</p>
        </div>
      </section>

      {/* Section 10: What Is the Military Healthcare Transition Gap */}
      <section id={`${pid}-gap-overview`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>What Is the Military Healthcare Transition Gap?</h2>
          <p>Approximately 700,000 active duty service member families are part of a system that provides world-class coverage — but only when the conditions are right. Every year, 200,000+ service members separate, PCS families move to new installations, and Reserve/Guard members move in and out of activation cycles.</p>
          <p>Each transition creates a gap. Prescriptions lapse. New PCPs have waitlists of 6–12 weeks. TAMP provides a 180-day bridge for qualifying separations — but not all separations qualify, and even TAMP eventually expires. The gap is filled by urgent care visits, ER trips, and missed medications — not because families don't want care, but because the system wasn't designed for transitions.</p>
          <p>TeleDirectMD was built for exactly this: board-certified Family Medicine, 42 states, $49 flat fee, and prescription capability the day you need it. Not a replacement for TRICARE — a bridge to keep you stable until TRICARE catches up.</p>
        </div>
      </section>

      {/* Section 11: Conditions We Handle */}
      <section id={`${pid}-conditions`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Conditions We Handle for Military Families</h2>
          <div className="tdmd-grid tdmd-grid-2">
            {conditions.map(c => (
              <div key={c.slug} className="tdmd-card">
                <h3><a href={`/what-we-treat/${c.slug}`}>{c.name}</a></h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <p><a href="/what-we-treat">View all 60 conditions we treat &#8594;</a></p>
        </div>
      </section>

      {/* Section 12: Symptoms & Warning Signs Table */}
      <section id={`${pid}-symptoms`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Symptoms &amp; Warning Signs</h2>
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
                  <td><strong>Hypertension</strong></td>
                  <td>Often asymptomatic; headache at extremes</td>
                  <td>Yes — medication bridge refill</td>
                  <td>BP &gt;180/120 with symptoms &#8594; ER (hypertensive emergency)</td>
                </tr>
                <tr>
                  <td><strong>Thyroid (Hypo)</strong></td>
                  <td>Fatigue, weight gain, cold sensitivity</td>
                  <td>Yes — medication refill and adjustment</td>
                  <td>Severe symptoms (myxedema coma) &#8594; ER</td>
                </tr>
                <tr>
                  <td><strong>Anxiety</strong></td>
                  <td>Worry, tension, sleep disturbance, irritability</td>
                  <td>Yes — non-controlled medication</td>
                  <td>Suicidal ideation or crisis &#8594; Veterans Crisis Line 988 press 1</td>
                </tr>
                <tr>
                  <td><strong>UTI</strong></td>
                  <td>Burning urination, frequency, pelvic pressure</td>
                  <td>Yes</td>
                  <td>Fever &gt;101°F, back pain, vomiting &#8594; in-person</td>
                </tr>
                <tr>
                  <td><strong>Sinus Infection</strong></td>
                  <td>Facial pressure, congestion, headache</td>
                  <td>Yes</td>
                  <td>Severe headache, visual changes, stiff neck</td>
                </tr>
                <tr>
                  <td><strong>Respiratory Infection</strong></td>
                  <td>Cough, congestion, mild fever</td>
                  <td>Yes</td>
                  <td>Difficulty breathing, high fever, O2 issues</td>
                </tr>
                <tr>
                  <td><strong>Skin Infection</strong></td>
                  <td>Redness, warmth, drainage, tenderness</td>
                  <td>Yes for most</td>
                  <td>Spreading rapidly, red streaks, systemic fever</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 13: Telehealth Appropriate vs. Requires In-Person */}
      <section id={`${pid}-scope`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>What TeleDirectMD Can and Cannot Do</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>&#10003; Telehealth Appropriate</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>Bridge prescriptions (BP, thyroid, cholesterol, anxiety, GERD)</li>
                <li>UTI, sinus infection, strep throat</li>
                <li>Respiratory infection</li>
                <li>Skin rash and minor infections</li>
                <li>Pink eye</li>
                <li>Allergy management</li>
                <li>Prescription refills</li>
                <li>HIPAA documentation for new provider transition</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>&#10007; Requires In-Person or Other Resources</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Medical emergencies &#8594; 911</li>
                <li>Chest pain or cardiac event &#8594; 911</li>
                <li>Mental health crisis &#8594; Veterans Crisis Line (988, press 1)</li>
                <li>Conditions requiring in-person exam, imaging, or labs</li>
                <li>Controlled substances</li>
                <li>Complex VA-specific benefits or claims</li>
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
              <h3>Prescription Bridge Refills</h3>
              <p>For most ongoing medications — blood pressure, thyroid, cholesterol, anxiety, GERD — TeleDirectMD can provide bridge prescriptions after a telehealth evaluation, keeping you stable while you establish with a new TRICARE provider.</p>
            </div>
            <div className="tdmd-card">
              <h3>Acute Care</h3>
              <p>UTIs, sinus infections, respiratory illness, skin infections — conditions that arise during transitions and can't wait 6–10 weeks for a new PCP slot. Evaluation and treatment same-day.</p>
            </div>
            <div className="tdmd-card">
              <h3>Prescriptions to Any US Pharmacy</h3>
              <p>Including TRICARE Express Scripts retail pharmacy locations and mail-order. Just provide the pharmacy name or your zip code — we'll send the prescription electronically.</p>
            </div>
            <div className="tdmd-card">
              <h3>Visit Documentation</h3>
              <p>HIPAA-compliant visit summary, medication list, and care notes you can share with your new provider during onboarding — reducing redundant intake work and speeding the transition.</p>
            </div>
          </div>
          <div className="tdmd-card tdmd-card-alert">
            <h3>What TeleDirectMD Does Not Provide</h3>
            <ul className="tdmd-checklist tdmd-checklist--alert">
              <li>Controlled substances</li>
              <li>VA benefits navigation</li>
              <li>Mental health crisis intervention (call 988, press 1)</li>
              <li>Conditions requiring urgent in-person imaging or labs</li>
              <li>Medical emergencies (call 911)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 15: Medications & Services Table */}
      <section id={`${pid}-medications`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Medications &amp; Services We Handle</h2>
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
                  <td>ACE inhibitors, ARBs, beta-blockers, diuretics</td>
                  <td>Hypertension</td>
                  <td>Bridge refill pending new PCP establishment</td>
                </tr>
                <tr>
                  <td>Levothyroxine</td>
                  <td>Hypothyroidism</td>
                  <td>Dose maintained; bring recent TSH if available</td>
                </tr>
                <tr>
                  <td>Statins (atorvastatin, rosuvastatin)</td>
                  <td>Hyperlipidemia</td>
                  <td>Refill; annual labs recommended</td>
                </tr>
                <tr>
                  <td>SSRIs / SNRIs</td>
                  <td>Anxiety (non-crisis)</td>
                  <td>Non-controlled; evaluation required</td>
                </tr>
                <tr>
                  <td>PPIs (omeprazole, pantoprazole)</td>
                  <td>GERD</td>
                  <td>Prescription-strength refill</td>
                </tr>
                <tr>
                  <td>Antibiotics</td>
                  <td>UTI, sinus, skin infections</td>
                  <td>Appropriate selection after evaluation</td>
                </tr>
                <tr>
                  <td>Anti-infectives</td>
                  <td>Respiratory infections</td>
                  <td>When bacterial infection indicated</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-comparison-note">TeleDirectMD does not prescribe controlled substances. For VA-specific medications or complex specialist management, coordinate with your VA or TRICARE provider. For mental health crises, contact the Veterans Crisis Line: 988, press 1.</p>
        </div>
      </section>

      {/* Section 16: Managing Your Health During Transition */}
      <section id={`${pid}-transition`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Staying Healthy Through a PCS or Separation</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>What to Do Now</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>Request a 90-day medication supply from your current TRICARE provider before PCS or separation</li>
                <li>Get copies of all relevant labs, imaging, and specialist notes before leaving your current base</li>
                <li>Bring your complete medication list to your TeleDirectMD visit — this significantly speeds evaluation</li>
                <li>Keep TRICARE Express Scripts contact information during transitions — they can often extend supply during PCS</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>What to Watch For</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Blood pressure consistently elevated (&gt;150/95) without medication &#8594; book same-day</li>
                <li>Thyroid symptoms worsening without medication &#8594; book within 48 hours</li>
                <li>Any new chest pain, difficulty breathing &#8594; call 911 immediately</li>
                <li>Mental health deterioration during transition &#8594; contact Veterans Crisis Line (988, press 1)</li>
              </ul>
            </div>
          </div>
          <div className="tdmd-card">
            <h3>When to Follow Up</h3>
            <ul className="tdmd-checklist tdmd-checklist--good">
              <li>Every 30–60 days if on bridge prescriptions (to ensure continuity)</li>
              <li>Immediately after establishing with new TRICARE PCP — transfer care appropriately</li>
              <li>If new symptoms develop during the bridge period</li>
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
              <h3>Do Not Use TeleDirectMD For</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Medical emergencies &#8594; call 911</li>
                <li>Chest pain, stroke, or cardiac event &#8594; call 911</li>
                <li>Mental health crisis &#8594; Veterans Crisis Line 988, press 1</li>
                <li>Conditions needing in-person exam or imaging</li>
                <li>Controlled substances</li>
                <li>Complex VA benefits or specialized military healthcare</li>
              </ul>
            </div>
            <div className="tdmd-card">
              <h3>Alternatives for These Situations</h3>
              <ul>
                <li><strong>Emergency:</strong> 911 or base hospital (if still on-base access)</li>
                <li><strong>Mental health crisis:</strong> Veterans Crisis Line (988, press 1)</li>
                <li><strong>VA benefits:</strong> <a href="https://www.va.gov" target="_blank" rel="noopener noreferrer">va.gov</a> or local VSO</li>
                <li><strong>In-person urgent care:</strong> Civilian urgent care or TRICARE network</li>
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
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h2>Your Family's Health Shouldn't Wait for TRICARE to Catch Up</h2>
              <p>$49 flat-fee visits. Same-day availability. 42 states. No insurance required.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 19: References */}
      <section id={`${pid}-references`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            <li><a href="https://www.tricare.mil/About/Eligibility" target="_blank" rel="noopener noreferrer">TRICARE — Eligibility Overview</a></li>
            <li><a href="https://www.tricare.mil/Plans/HealthPlans/TAMP" target="_blank" rel="noopener noreferrer">TRICARE — Transitional Assistance Management Program (TAMP)</a></li>
            <li><a href="https://www.defense.gov/News/Releases/" target="_blank" rel="noopener noreferrer">Department of Defense — Military Separation Statistics</a></li>
            <li><a href="https://www.militaryonesource.mil/health-wellness/health-care/" target="_blank" rel="noopener noreferrer">Military OneSource — Healthcare During Transition</a></li>
            <li><a href="https://www.cdc.gov/nchs/fastats/physician-visits.htm" target="_blank" rel="noopener noreferrer">CDC — Physician Office Visits and Access to Care</a></li>
            <li><a href="https://www.va.gov/health-care/" target="_blank" rel="noopener noreferrer">US Department of Veterans Affairs — VA Health Care</a></li>
          </ul>
        </div>
      </section>

      {/* Section 20: Disclaimer */}
      <section id={`${pid}-disclaimer`} className="tdmd-section">
        <div className="tdmd-container">
          <p className="tdmd-footnote">Medical Disclaimer: The information on this page is for educational purposes only and does not constitute medical advice. TeleDirectMD is not affiliated with the Department of Defense, Department of Veterans Affairs, or TRICARE. TeleDirectMD does not bill TRICARE and is a direct-pay service. For VA-specific services, visit va.gov. If you are experiencing a mental health crisis, contact the Veterans Crisis Line at 988, press 1. If you are experiencing a medical emergency, call 911 immediately. Content reviewed by Parth Bhavsar, MD, board-certified Family Medicine physician.</p>
        </div>
      </section>

      {/* Section 21: States Grid */}
      <section id={`${pid}-states`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Licensed Near Every Major Military Installation</h2>
          <p>TeleDirectMD is licensed in 42 states — covering every major installation and the surrounding communities where military families live. Whether you're at Fort Moore in Georgia, Fort Bragg in North Carolina, Fort Hood in Texas, or JBLM in Washington, we're licensed where you are.</p>
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
            <div className="tdmd-related-card">
              <p className="tdmd-related-title">Early Retirees</p>
              <p className="tdmd-related-desc">Bridge the pre-Medicare gap with $49 visits.</p>
              <a href="/who-we-serve/early-retirees" className="tdmd-btn tdmd-btn-outline">Learn More</a>
            </div>
            <div className="tdmd-related-card">
              <p className="tdmd-related-title">Remote Workers</p>
              <p className="tdmd-related-desc">Healthcare that follows you anywhere, any state.</p>
              <a href="/who-we-serve/remote-workers" className="tdmd-btn tdmd-btn-outline">Learn More</a>
            </div>
            <div className="tdmd-related-card">
              <p className="tdmd-related-title">Uninsured Adults</p>
              <p className="tdmd-related-desc">No insurance? Transparent pricing, no surprise bills.</p>
              <a href="/who-we-serve/uninsured-affordable-care" className="tdmd-btn tdmd-btn-outline">Learn More</a>
            </div>
            <div className="tdmd-related-card">
              <p className="tdmd-related-title">Gig Workers</p>
              <p className="tdmd-related-desc">Flexible care without employer coverage.</p>
              <a href="/who-we-serve/gig-workers" className="tdmd-btn tdmd-btn-outline">Learn More</a>
            </div>
            <div className="tdmd-related-card">
              <p className="tdmd-related-title">Travel Nurses</p>
              <p className="tdmd-related-desc">Same doctor across every assignment, 42 states.</p>
              <a href="/who-we-serve/travel-nurses" className="tdmd-btn tdmd-btn-outline">Learn More</a>
            </div>
            <div className="tdmd-related-card">
              <p className="tdmd-related-title">Small Business Owners</p>
              <p className="tdmd-related-desc">Self-employed care on your schedule.</p>
              <a href="/who-we-serve/small-business-owners" className="tdmd-btn tdmd-btn-outline">Learn More</a>
            </div>
          </div>
          <div className="tdmd-inline-links">
            <div className="tdmd-link-cloud">
              <a href="/insurance-pricing">Insurance &amp; Pricing</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="#military-families-faq">FAQ</a>
              <a href="/book-online">Book a Visit</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
