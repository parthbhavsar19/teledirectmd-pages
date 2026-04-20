export default function EarlyRetireesPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/early-retirees`;
  const today = new Date().toISOString().split('T')[0];
  const pid = 'early-retirees';

  const conditions = [
    { name: 'Hypertension / High Blood Pressure', slug: 'hypertension-refills-online', desc: 'Ongoing blood pressure monitoring and medication refills — no need to wait weeks for a new PCP.' },
    { name: 'Type 2 Diabetes Management', slug: 'diabetes-refills-online', desc: 'A1C follow-up, medication adjustments, and lifestyle guidance between in-person labs.' },
    { name: 'High Cholesterol (Hyperlipidemia)', slug: 'hyperlipidemia-refills-online', desc: 'Statin refills and lipid management without an insurance authorization cycle.' },
    { name: 'Acid Reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'Prescription PPI management for chronic heartburn and reflux.' },
    { name: 'Thyroid Management', slug: 'thyroid-management-online', desc: 'Medication refills and dosing adjustments while you establish with a new endocrinologist.' },
    { name: 'Anxiety', slug: 'anxiety-treatment-online', desc: 'Evaluation and prescription management for generalized anxiety.' },
    { name: 'Insomnia', slug: 'insomnia-treatment-online', desc: 'Sleep evaluation and medication options for chronic insomnia.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescription — common in this age group, no need for an in-person visit.' },
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and treatment for acute sinusitis.' },
    { name: 'Skin Conditions / Rashes', slug: 'skin-infection-treatment-online', desc: 'Evaluation of skin infections, rashes, and minor dermatologic concerns via video.' },
  ];

  const faqItems = [
    {
      q: 'I retired at 62 and won\'t be on Medicare until 65. Can TeleDirectMD help?',
      a: 'Absolutely — this is exactly the gap TeleDirectMD was built for. Whether you\'re on a high-deductible ACA plan, letting COBRA lapse, or currently uninsured, TeleDirectMD gives you access to a board-certified Family Medicine physician for $49 per visit. No prior authorization, no referral chains, no insurance required.'
    },
    {
      q: 'My ACA plan has a $5,000 deductible. Is it cheaper to pay TeleDirectMD directly?',
      a: 'For routine and non-emergency visits, often yes. If you haven\'t met your deductible, you\'re effectively paying cash for every in-network visit — often $150–$350 for a primary care appointment. TeleDirectMD\'s $49 flat fee is frequently cheaper for common conditions like blood pressure checks, medication refills, UTIs, sinus infections, and skin concerns.'
    },
    {
      q: 'Can you manage my chronic conditions — blood pressure, diabetes, cholesterol?',
      a: 'Yes, chronic condition management is one of TeleDirectMD\'s core strengths for this age group. We can prescribe and adjust blood pressure medications, diabetes medications (oral and some injectables), and cholesterol-lowering drugs. We\'ll also review your labs and make evidence-based adjustments. Regular follow-up visits keep you on track between in-person lab draws.'
    },
    {
      q: 'Do I need insurance to use TeleDirectMD?',
      a: 'No. TeleDirectMD is a direct-pay platform. You pay $49 at the time of booking — that\'s the complete cost of the visit. No insurance card, no co-pay surprises, no EOB to interpret. We also accept select insurance plans in some states if you prefer to use coverage.'
    },
    {
      q: 'What if I move to a different state in retirement?',
      a: 'No problem. TeleDirectMD is licensed in 42 states, so whether you retire in Florida, Arizona, the Carolinas, or anywhere else in our coverage area, you can continue seeing Dr. Bhavsar as long as you\'re physically in a covered state at the time of the visit. This makes us especially useful for early retirees who split time between states.'
    },
    {
      q: 'Can you provide prescription refills if my previous doctor retired or I moved away?',
      a: 'Yes. One of the most common needs among early retirees is continuing medications after a PCP transition. After a telehealth evaluation to confirm the medication is appropriate and safe, TeleDirectMD can prescribe refills for most ongoing medications and send them to any US pharmacy.'
    },
    {
      q: 'What conditions are outside telehealth scope?',
      a: 'Telehealth is not appropriate for medical emergencies — chest pain with shortness of breath, signs of stroke, severe injuries, or anything requiring physical examination or urgent imaging. We\'ll be direct with you if your situation requires in-person care and help guide you to the right resource. We never overpromise what telehealth can do.'
    },
    {
      q: 'How do I book and what does the visit look like?',
      a: 'Book online at teledirectmd.com — no referral or insurance pre-authorization needed. Pay the $49 fee, complete a short intake form, and connect via secure video at your appointment time. Most visits are 10–15 minutes. Prescriptions are sent electronically to your preferred pharmacy before the visit ends.'
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
          { "@type": "ListItem", "position": 3, "name": "Early Retirees (Pre-Medicare)", "item": pageUrl }
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
        "name": "Telehealth for Early Retirees — Affordable Care Before Medicare at 65",
        "description": "TeleDirectMD offers $49 flat-fee telehealth for early retirees in the pre-Medicare gap (ages 55–64). Chronic condition management, prescription refills, and same-day visits in 42 states. No insurance required.",
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
          <span aria-current="page">Early Retirees (Pre-Medicare)</span>
        </div>
      </nav>

      {/* Section 2: Answer Block */}
      <div className="tdmd-answer-block" data-speakable="true" style={{
        background: '#EAF7F8', borderLeft: '4px solid #006B73',
        padding: '1rem 1.25rem', margin: '0 0 0', lineHeight: 1.6
      }}>
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>
            Telehealth for early retirees in the pre-Medicare gap:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD offers $49 flat-fee video visits with a board-certified Family Medicine physician for early retirees navigating the 55–64 coverage gap — managing chronic conditions like hypertension, diabetes, and high cholesterol, with prescription refills sent to any pharmacy in 42 states. No insurance required.
          </p>
        </div>
      </div>

      {/* Section 3: Hero — Dual Column */}
      <section id={`${pid}-hero`} className="tdmd-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Telehealth for Early Retirees — Affordable Care in the Pre-Medicare Gap</h1>
              <p className="tdmd-hero-sub">
                Retired before 65 and facing the coverage gap? TeleDirectMD provides $49 flat-fee video visits with a board-certified Family Medicine physician — chronic condition management, prescription refills, and acute care in 42 states. No referrals. No prior authorization. No surprise bills.
              </p>
              <p>
                The average American retires at <strong>62</strong>. Medicare begins at <strong>65</strong>. That three-year structural gap — often filled with expensive COBRA, high-deductible ACA plans, or no coverage at all — is exactly where TeleDirectMD fits. For the routine visits that make up the vast majority of healthcare needs, a $49 flat-fee telehealth visit is frequently the most economical and fastest option available.
              </p>

              <nav className="tdmd-toc" aria-label="Page contents">
                <p className="tdmd-toc-intro">On this page:</p>
                <ul>
                  <li><a href={`#${pid}-eligibility`}>Who Is Eligible</a></li>
                  <li><a href={`#${pid}-how-it-works`}>How It Works</a></li>
                  <li><a href={`#${pid}-coverage-gap`}>The Pre-Medicare Coverage Gap</a></li>
                  <li><a href={`#${pid}-comparison-table`}>Coverage Option Comparison</a></li>
                  <li><a href={`#${pid}-decision-guide`}>Decision Guide</a></li>
                  <li><a href={`#${pid}-cost`}>Cost Breakdown</a></li>
                  <li><a href={`#${pid}-conditions`}>Conditions We Manage</a></li>
                  <li><a href={`#${pid}-symptoms-table`}>Symptoms & Warning Signs</a></li>
                  <li><a href={`#${pid}-what-we-provide`}>What TeleDirectMD Provides</a></li>
                  <li><a href={`#${pid}-medications`}>Medications & Services</a></li>
                  <li><a href={`#${pid}-home-care`}>Between Visits — Monitoring</a></li>
                  <li><a href={`#${pid}-when-not`}>When NOT to Use TeleDirectMD</a></li>
                  <li><a href={`#${pid}-faq`}>Frequently Asked Questions</a></li>
                  <li><a href={`#${pid}-states`}>States We Serve</a></li>
                </ul>
              </nav>

              <ul className="tdmd-hero-benefits">
                <li>$49 flat fee — often less than your ACA or COBRA visit cost before deductible</li>
                <li>Chronic condition management: hypertension, diabetes, cholesterol, thyroid, GERD, anxiety</li>
                <li>Prescription refills when your old PCP retired, moved, or is unavailable</li>
                <li>Licensed in 42 states — follows you wherever you retire or split time</li>
                <li>Same-day availability, evenings and weekends</li>
                <li>No insurance required — direct-pay, transparent flat fee</li>
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
              </div>

              <p className="tdmd-reviewed">Last reviewed by Parth Bhavsar, MD · Updated {today}</p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>What You Get for $49</h2>
                <ul>
                  <li>Video visit with board-certified Family Medicine MD</li>
                  <li>Chronic condition evaluation and management</li>
                  <li>Prescription refills sent to any pharmacy</li>
                  <li>Lab review and medication adjustments</li>
                  <li>No insurance card required</li>
                  <li>HIPAA-compliant medical records</li>
                </ul>
                <p className="tdmd-comparison-note">Often less than your high-deductible plan co-pay for the same visit.</p>
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
              <h3>✓ You Are Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>You are between ages 55–64 and not yet on Medicare</li>
                <li>You are physically located in one of our 42 licensed states at the time of the visit</li>
                <li>You have a chronic condition (hypertension, diabetes, cholesterol, thyroid, GERD, anxiety) needing management</li>
                <li>You need prescription refills after a PCP transition, relocation, or coverage change</li>
                <li>You have an acute condition (UTI, sinus infection, respiratory illness) that can be evaluated via video</li>
                <li>You have a high-deductible plan and direct-pay is more economical for this visit</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>✗ You Are Not Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>You are experiencing a medical emergency → call 911 or go to the ER</li>
                <li>Your condition requires in-person physical examination, imaging, or urgent lab work</li>
                <li>You need a controlled substance prescription (not within our scope)</li>
                <li>You have an unstable chronic condition requiring in-person specialist management</li>
              </ul>
              <p className="tdmd-card-disclaimer">TeleDirectMD is a complement to, not a replacement for, comprehensive major medical coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section id={`${pid}-how-it-works`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>How It Works — Three Steps</h2>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Book &amp; Pay ($49)</h3>
                <p>Select same-day or next-available appointment online. No referral required, no prior authorization, no insurance pre-check. Pay the $49 flat fee at booking.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Complete Intake &amp; Connect</h3>
                <p>Fill out a short symptom and medication form, then join a secure video visit from your phone or laptop. Bring your current medication list and any recent lab results.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Get Your Treatment Plan &amp; Prescription</h3>
                <p>Dr. Bhavsar reviews your history, adjusts medications as needed, and sends prescriptions electronically to your pharmacy. Most visits take 10–15 minutes. A HIPAA-compliant visit summary is sent to you after the visit.</p>
              </div>
            </div>
          </div>
          <div className="tdmd-decision-cta">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
          </div>
        </div>
      </section>

      {/* Section 6: Pre-Medicare Coverage Gap — Structural Reality */}
      <section id={`${pid}-coverage-gap`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>The Pre-Medicare Coverage Gap — The Structural Reality</h2>
          <p>
            According to Social Security Administration data, the average US retirement age is <strong>62</strong>. Medicare begins at <strong>65</strong>. That is a three-year structural coverage gap that millions of Americans navigate every year — and it falls during a phase of life when chronic conditions are accelerating, not receding.
          </p>
          <p>
            COBRA continuation coverage is available for up to 18 months after leaving employer-sponsored insurance — but it costs <strong>$700–$1,400 per month</strong> for a single person, as you pay both the employee and employer share of the premium. The ACA marketplace offers an alternative, but many early retirees find themselves with a Bronze plan carrying a $5,000–$8,000 deductible, meaning they are effectively paying cash-equivalent rates for every routine visit until they meet that deductible. Silver plans reduce the deductible but cost $600–$900 per month. Enhanced subsidies introduced post-COVID are subject to legislative renewal and are not guaranteed past 2025.
          </p>
          <p>
            The result: millions of early retirees are paying cash-equivalent out-of-pocket costs for routine primary care visits — the very visits that are most predictable and most necessary. A single primary care appointment on a pre-deductible high-deductible plan typically costs $150–$300. TeleDirectMD's $49 flat fee is frequently less than the out-of-pocket cost of an in-network visit under those same plans.
          </p>
          <p>
            TeleDirectMD does not replace major medical coverage — but for the routine, predictable visits that represent the vast majority of healthcare utilization in this age group, it is often the most economical and most accessible option available.
          </p>
        </div>
      </section>

      {/* Section 7: Coverage Option Comparison Table */}
      <section id={`${pid}-comparison-table`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Coverage Option Comparison</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Coverage Option</th>
                  <th>Monthly Cost</th>
                  <th>Visit Cost to You</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>COBRA</td>
                  <td>~$700–$1,400/mo</td>
                  <td>Co-pay + deductible (varies)</td>
                  <td>Continuing employer plan up to 18 months</td>
                </tr>
                <tr>
                  <td>ACA Bronze Plan</td>
                  <td>~$400–$700/mo</td>
                  <td>High deductible ($5,000–$8,000) before coverage</td>
                  <td>Low premium, high out-of-pocket tolerance</td>
                </tr>
                <tr>
                  <td>ACA Silver Plan</td>
                  <td>~$600–$900/mo</td>
                  <td>Moderate deductible ($2,500–$4,000)</td>
                  <td>Most common choice; balance of cost/coverage</td>
                </tr>
                <tr className="tdmd-row-highlight">
                  <td><strong>TeleDirectMD</strong></td>
                  <td><strong>$0/mo premium</strong></td>
                  <td><strong>$49 flat fee per visit</strong></td>
                  <td>Routine and urgent care between plans or alongside high-deductible plan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-comparison-note">
            TeleDirectMD is not a replacement for major medical coverage — but for the routine visits that make up 90% of healthcare needs, it is often the most economical option when you are pre-Medicare.
          </p>
        </div>
      </section>

      {/* Section 8: Decision Guide */}
      <section id={`${pid}-decision-guide`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Decision Guide — Where to Get Care</h2>
          <p>Use this guide when you have a health concern and are not sure where to go.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Is it a medical emergency?</h3>
                <p>Chest pain, stroke symptoms, severe shortness of breath, uncontrolled bleeding, loss of consciousness, or any life-threatening situation.</p>
                <p><strong>YES →</strong> Call 911 or go to the nearest emergency room immediately. Do not book a telehealth visit.</p>
                <p><strong>NO →</strong> Continue to Step 2.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Is it a chronic condition visit?</h3>
                <p>Blood pressure medication refill or adjustment, diabetes check, cholesterol management, thyroid medication, anxiety management, GERD.</p>
                <p><strong>YES →</strong> Book TeleDirectMD. This is our core service for early retirees.</p>
                <p><strong>NO →</strong> Continue to Step 3.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Is it an acute condition?</h3>
                <p>UTI, sinus infection, strep throat, skin rash, skin infection, respiratory illness, ear infection.</p>
                <p><strong>YES →</strong> Book TeleDirectMD. Most acute infections can be evaluated and treated via video.</p>
                <p><strong>NO →</strong> Continue to Step 4.</p>
              </div>
            </div>
            <div className="tdmd-decision-step">
              <div className="tdmd-decision-number">4</div>
              <div className="tdmd-decision-content">
                <h3>Does it require in-person exam, imaging, or specialist?</h3>
                <p>Physical examination, X-ray or imaging, blood draw required urgently, specialist diagnosis requiring hands-on evaluation.</p>
                <p><strong>YES →</strong> In-person care is appropriate. We will tell you directly if this applies during your intake.</p>
                <p><strong>NO →</strong> Book TeleDirectMD.</p>
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
              <div className="tdmd-price-sub">One flat fee covers the entire visit</div>
              <ul className="tdmd-price-includes">
                <li>Video visit with board-certified MD</li>
                <li>Medication review and management</li>
                <li>Prescription to any US pharmacy</li>
                <li>Lab value review (bring your recent labs)</li>
                <li>HIPAA-compliant visit summary</li>
              </ul>
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
              <span className="tdmd-bar-label">ACA Silver PCP (after deductible met)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '5%' }}></div>
              </div>
              <span>$30–$60 co-pay</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">In-Network PCP (pre-deductible)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '23%' }}></div>
              </div>
              <span>$150–$300</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">Urgent Care (cash pay)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '23%' }}></div>
              </div>
              <span>$150–$300</span>
            </div>
            <div className="tdmd-bar-row">
              <span className="tdmd-bar-label">COBRA In-Person (pre-deductible)</span>
              <div className="tdmd-bar-track">
                <div className="tdmd-bar-fill" style={{ width: '31%' }}></div>
              </div>
              <span>$200–$400</span>
            </div>
          </div>

          <p className="tdmd-cost-note">
            On a $6,000 deductible plan, you are paying cash-equivalent rates for every visit until you hit the deductible. TeleDirectMD's $49 is often the most economical option for routine care.
          </p>
        </div>
      </section>

      {/* Section 10: What Is the Pre-Medicare Gap — Educational */}
      <section id={`${pid}-who-we-serve`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Who Are Early Retirees — The Most Underserved Pre-Medicare Cohort</h2>
          <p>
            Early retirees between the ages of 55 and 64 are the most medically complex working-age group in America. Hypertension affects approximately 65% of adults in this age range. One in four has type 2 diabetes. Hyperlipidemia is nearly universal by the mid-60s. Thyroid disease, GERD, osteoarthritis, and anxiety disorders are also densely concentrated in this cohort — making routine, ongoing medical management a consistent need, not a periodic one.
          </p>
          <p>
            Yet this group sits in a structural coverage limbo. Too young for Medicare. Often off employer-sponsored insurance after retirement. Facing COBRA costs that exceed $700–$1,400 per month for an individual. Navigating ACA marketplace plans with deductibles of $5,000–$8,000 that leave them effectively paying cash rates for routine visits. No major telehealth platform has built dedicated infrastructure for this population — leaving them to navigate a system built for either the insured employed or the Medicare-eligible elderly.
          </p>
          <p>
            TeleDirectMD was built for continuity during this gap. Not to replace the specialist or the annual in-person physical — but to keep chronic conditions stable, medications filled, and acute issues addressed without the friction, cost, and delay of the traditional system. For early retirees, $49 per visit is not just convenient — it is often the most rational economic choice given the cost structure of available coverage options.
          </p>
        </div>
      </section>

      {/* Section 11: Chronic Conditions — 2-column grid */}
      <section id={`${pid}-conditions`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Chronic Conditions We Manage for Early Retirees</h2>
          <p>These are the conditions most commonly managed for the 55–64 age group. All can be evaluated and managed via secure video visit.</p>
          <div className="tdmd-grid tdmd-grid-2">
            {conditions.map(c => (
              <div key={c.slug} className="tdmd-card">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <p><a href="/what-we-treat">View all 60 conditions we treat →</a></p>
        </div>
      </section>

      {/* Section 12: Symptoms & Warning Signs Table */}
      <section id={`${pid}-symptoms-table`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Symptoms, Warning Signs, and When to Escalate</h2>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Condition</th>
                  <th>Typical Symptoms</th>
                  <th>Telehealth Appropriate?</th>
                  <th>When to Go In-Person</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hypertension</td>
                  <td>Headache; usually no symptoms until complications</td>
                  <td>Yes — medication refill/adjustment</td>
                  <td>BP &gt;180/120 with symptoms (hypertensive emergency → ER); severe headache with visual changes</td>
                </tr>
                <tr>
                  <td>Type 2 Diabetes</td>
                  <td>Fatigue, thirst, frequent urination</td>
                  <td>Yes — medication management, HbA1c review</td>
                  <td>Blood glucose uncontrolled &gt;400, DKA symptoms, severe hypoglycemia</td>
                </tr>
                <tr>
                  <td>Hyperlipidemia</td>
                  <td>Typically asymptomatic</td>
                  <td>Yes — medication refill with lab review</td>
                  <td>Chest pain (possible cardiac event → 911)</td>
                </tr>
                <tr>
                  <td>GERD / Acid Reflux</td>
                  <td>Heartburn, regurgitation, throat burning</td>
                  <td>Yes — PPI management</td>
                  <td>Difficulty swallowing, weight loss, vomiting blood</td>
                </tr>
                <tr>
                  <td>Anxiety</td>
                  <td>Worry, tension, sleep disturbance</td>
                  <td>Yes — non-controlled medication management</td>
                  <td>Severe panic with cardiac symptoms (rule out cardiac → ER)</td>
                </tr>
                <tr>
                  <td>UTI</td>
                  <td>Burning urination, frequency, urgency</td>
                  <td>Yes — antibiotic prescription</td>
                  <td>Fever &gt;101°F, back or flank pain (kidney involvement → in-person)</td>
                </tr>
                <tr>
                  <td>Thyroid</td>
                  <td>Fatigue, weight changes, temperature sensitivity</td>
                  <td>Yes — medication refill/dose adjustment with labs</td>
                  <td>Severe symptoms suggesting thyroid crisis or new significant changes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 13: Telehealth Appropriate vs. Requires In-Person */}
      <section id={`${pid}-appropriate`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Telehealth-Appropriate vs. Requires In-Person Care</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>Telehealth-Appropriate for Early Retirees</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>Hypertension medication refill and adjustment</li>
                <li>Diabetes medication management</li>
                <li>Cholesterol statin refill</li>
                <li>Thyroid medication continuity</li>
                <li>Acid reflux / GERD management</li>
                <li>Anxiety medication management (non-controlled)</li>
                <li>UTI, sinus infection, strep, skin infections</li>
                <li>Prescription refills during PCP transitions</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>Requires In-Person or Emergency Care</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>BP crisis &gt;180/120 with symptoms → ER</li>
                <li>Chest pain or pressure → 911</li>
                <li>Suspected cardiac event → 911</li>
                <li>Stroke symptoms → 911</li>
                <li>Uncontrolled diabetes with DKA</li>
                <li>New cardiac symptoms requiring workup</li>
                <li>Major medication changes requiring in-person labs</li>
                <li>Complex specialist referrals and new diagnoses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: What TeleDirectMD Provides */}
      <section id={`${pid}-what-we-provide`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>What TeleDirectMD Provides for Early Retirees</h2>
          <p>
            Dr. Parth Bhavsar, MD is a board-certified Family Medicine physician with residency training at the University of Mississippi Medical Center. He provides the following services for early retirees navigating the pre-Medicare gap:
          </p>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card">
              <h3>Chronic Condition Management</h3>
              <p>Dr. Bhavsar evaluates your current medications, reviews any recent labs you can share, and makes evidence-based adjustments for hypertension, diabetes, hyperlipidemia, thyroid, and GERD. Regular follow-up visits keep conditions stable between in-person appointments.</p>
            </div>
            <div className="tdmd-card">
              <h3>Prescription Continuity</h3>
              <p>If your PCP retired, you have moved states, or your coverage changed, TeleDirectMD can bridge your prescriptions for most chronic medications while you establish with a new provider. Prescriptions are sent electronically to any US pharmacy.</p>
            </div>
            <div className="tdmd-card">
              <h3>Acute Care</h3>
              <p>UTIs, sinus infections, respiratory infections, skin conditions — the acute visits that cannot wait weeks for a new PCP appointment. Most acute infections are evaluable and treatable via video visit.</p>
            </div>
            <div className="tdmd-card">
              <h3>Visit Documentation</h3>
              <p>A HIPAA-compliant visit summary and prescription record are provided after every visit, suitable for your personal records or for your new provider's onboarding when you establish with a local PCP.</p>
            </div>
          </div>

          <div className="tdmd-card tdmd-card-alert">
            <h3>Does Not Manage</h3>
            <ul className="tdmd-checklist tdmd-checklist--alert">
              <li>Controlled substances (Schedule II–IV)</li>
              <li>Conditions requiring urgent in-person labs or imaging</li>
              <li>New specialist diagnoses requiring hands-on physical examination</li>
              <li>Medical emergencies of any kind</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 15: Medications & Services Table */}
      <section id={`${pid}-medications`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Medications &amp; Services We Provide</h2>
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
                  <td>Refill or adjustment after evaluation</td>
                </tr>
                <tr>
                  <td>Metformin, SGLT-2 inhibitors, GLP-1 agonists</td>
                  <td>Type 2 Diabetes</td>
                  <td>Oral medications; some injectables</td>
                </tr>
                <tr>
                  <td>Statins (atorvastatin, rosuvastatin)</td>
                  <td>Hyperlipidemia</td>
                  <td>Refill with lab review recommended</td>
                </tr>
                <tr>
                  <td>Levothyroxine</td>
                  <td>Hypothyroidism</td>
                  <td>Dose adjustment based on recent labs</td>
                </tr>
                <tr>
                  <td>PPIs (omeprazole, pantoprazole)</td>
                  <td>GERD / Acid Reflux</td>
                  <td>Prescription-strength management</td>
                </tr>
                <tr>
                  <td>SSRIs / SNRIs</td>
                  <td>Anxiety</td>
                  <td>Non-controlled; evaluation required</td>
                </tr>
                <tr>
                  <td>Antibiotics (multiple)</td>
                  <td>UTI, sinus, skin infections</td>
                  <td>Appropriate antibiotic selection by clinical presentation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tdmd-cost-note">
            Controlled substances (Schedule II–IV) are not prescribed. Insulin initiation requires in-person evaluation. TeleDirectMD does not replace your specialist or annual in-person physical.
          </p>
        </div>
      </section>

      {/* Section 16: Home Care & What to Monitor */}
      <section id={`${pid}-home-care`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Between Visits — Monitoring and Self-Care</h2>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card">
              <h3>What to Track</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>Home blood pressure log — morning and evening readings daily</li>
                <li>Blood glucose readings if diabetic</li>
                <li>Symptom diary for any new or changing concerns</li>
                <li>Medication list — keep it updated and bring it to every TeleDirectMD visit</li>
                <li>Recent lab results — upload or share any HbA1c, lipid panel, or thyroid labs from the past 12 months</li>
              </ul>
            </div>
            <div className="tdmd-card">
              <h3>When to Escalate</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Blood pressure consistently &gt;150/95 despite medications → schedule a follow-up visit</li>
                <li>Blood glucose consistently &gt;250 → call or schedule same-day</li>
                <li>New chest pain, shortness of breath, or neurological symptoms → call 911 immediately</li>
                <li>Medication side effects worsening → book a follow-up visit</li>
              </ul>
            </div>
          </div>

          <div className="tdmd-card">
            <h3>When to Follow Up</h3>
            <ul className="tdmd-checklist tdmd-checklist--good">
              <li>Every 2–3 months for chronic condition check-ins</li>
              <li>Immediately if prescriptions are running low — do not wait until you run out</li>
              <li>After any ER or urgent care visit to review what happened and update your medication list</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 17: When NOT to Use TeleDirectMD */}
      <section id={`${pid}-when-not`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>When NOT to Use TeleDirectMD</h2>
          <p>
            TeleDirectMD is designed for routine, manageable conditions. It is not appropriate for emergencies or conditions requiring immediate in-person evaluation. We will always tell you directly during intake if your situation requires a different level of care.
          </p>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-alert">
              <h3>Do Not Use TeleDirectMD For</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Hypertensive emergency (BP &gt;180/120 with symptoms) → ER</li>
                <li>Chest pain or suspected heart attack → 911</li>
                <li>Stroke symptoms (facial drooping, arm weakness, speech difficulty) → 911</li>
                <li>Diabetic ketoacidosis (DKA) → ER</li>
                <li>Severe hypoglycemia → 911 or ER</li>
                <li>Uncontrolled pain requiring emergency imaging</li>
                <li>Any life-threatening emergency</li>
              </ul>
            </div>
            <div className="tdmd-card">
              <h3>Alternatives by Situation</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>Emergency → 911 / nearest emergency room</li>
                <li>Urgent in-person need → Urgent Care center</li>
                <li>Specialist care → request referral from your PCP or internist</li>
                <li>Ongoing preventive care → annual in-person physical with PCP</li>
                <li>Routine and acute care → TeleDirectMD, $49</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: FAQ */}
      <section id={`${pid}-faq`} className="tdmd-section">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions</h2>
          <div className="tdmd-faq">
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

        <div className="tdmd-bottom-cta">
          <div className="tdmd-container">
            <div className="tdmd-bottom-cta-copy">
              <h2>Ready to Bridge the Gap?</h2>
              <p>$49 flat fee. Same-day availability. 42 states. No insurance required.</p>
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
            <li><a href="https://www.ssa.gov/policy/docs/chartbooks/fast_facts/2022/fast_facts22.html" target="_blank" rel="noopener noreferrer">Social Security Administration — Fast Facts &amp; Figures 2022 (Retirement Age Data)</a></li>
            <li><a href="https://www.kff.org/medicare/issue-brief/medicare-and-the-pre-medicare-population/" target="_blank" rel="noopener noreferrer">Kaiser Family Foundation — Medicare and the Pre-Medicare Population</a></li>
            <li><a href="https://www.cdc.gov/chronicdisease/resources/publications/factsheets/hypertension.htm" target="_blank" rel="noopener noreferrer">CDC — Hypertension Facts</a></li>
            <li><a href="https://www.cdc.gov/diabetes/data/statistics-report/index.html" target="_blank" rel="noopener noreferrer">CDC — National Diabetes Statistics Report</a></li>
            <li><a href="https://www.cms.gov/marketplace/resources/data/marketplace-enrollment" target="_blank" rel="noopener noreferrer">Centers for Medicare &amp; Medicaid Services — ACA Marketplace Enrollment Data</a></li>
            <li><a href="https://www.healthcare.gov/glossary/cobra-coverage" target="_blank" rel="noopener noreferrer">HealthCare.gov — COBRA Coverage</a></li>
          </ul>
        </div>
      </section>

      {/* Section 20: Disclaimer */}
      <section id={`${pid}-disclaimer`} className="tdmd-section">
        <div className="tdmd-container">
          <p className="tdmd-footnote">
            <strong>Medical Disclaimer:</strong> The information on this page is for educational purposes only and does not constitute medical advice. TeleDirectMD is not a replacement for comprehensive major medical insurance and does not provide emergency care. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately. Content reviewed by Parth Bhavsar, MD, board-certified Family Medicine physician.
          </p>
        </div>
      </section>

      {/* Section 21: States Grid */}
      <section id={`${pid}-states`} className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Licensed Across Top Retirement Destinations</h2>
          <p>
            TeleDirectMD is licensed in 42 states — including every major Sun Belt and retirement destination. Whether you retire to Florida, Arizona, the Carolinas, or split time between states, we follow you.
          </p>
          <div className="tdmd-other-states-grid">
            {allStates.map(s => (
              <a key={s.abbr} href={`/${s.abbr.toLowerCase()}`} className="tdmd-other-state-link">{s.name}</a>
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
            <a href="/who-we-serve/military-families" className="tdmd-related-card">
              <div className="tdmd-related-title">Military Families</div>
              <div className="tdmd-related-desc">TRICARE gaps? Bridge coverage with $49 visits.</div>
            </a>
            <a href="/who-we-serve/uninsured-affordable-care" className="tdmd-related-card">
              <div className="tdmd-related-title">Uninsured Adults</div>
              <div className="tdmd-related-desc">No insurance? Transparent pricing, no surprise bills.</div>
            </a>
            <a href="/who-we-serve/small-business-owners" className="tdmd-related-card">
              <div className="tdmd-related-title">Small Business Owners</div>
              <div className="tdmd-related-desc">Self-employed? Care on your schedule without waiting rooms.</div>
            </a>
            <a href="/who-we-serve/gig-workers" className="tdmd-related-card">
              <div className="tdmd-related-title">Gig Workers</div>
              <div className="tdmd-related-desc">Flexible care for independent contractors.</div>
            </a>
            <a href="/who-we-serve/remote-workers" className="tdmd-related-card">
              <div className="tdmd-related-title">Remote Workers</div>
              <div className="tdmd-related-desc">Healthcare that follows you anywhere.</div>
            </a>
          </div>

          <div className="tdmd-inline-links">
            <div className="tdmd-link-cloud">
              <a href="/insurance-and-pricing">Insurance &amp; Pricing</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/faq">FAQ</a>
              <a href="/book-online">Book a Visit</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
