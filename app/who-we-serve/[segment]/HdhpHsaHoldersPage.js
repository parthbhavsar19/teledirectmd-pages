export default function HdhpHsaHoldersPage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/hdhp-hsa-holders`;
  const today = new Date().toISOString().split('T')[0];

  /* ── Conditions to link ─────────────────────────────────────────── */
  const conditions = [
    { name: 'Sinus Infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation and antibiotics when appropriate for sinus pressure and post-nasal drip — flat $79, HSA card accepted at checkout.' },
    { name: 'UTI / Urinary Tract Infection', slug: 'uti-treatment-online', desc: 'Fast antibiotic prescriptions sent to your local pharmacy — predictable $79 visit cost regardless of where you sit on your deductible.' },
    { name: 'Cough, Cold &amp; Respiratory Infections', slug: 'common-cold-treatment-online', desc: 'Cold, flu, and respiratory infection treatment with transparent cash-pay pricing — no deductible math.' },
    { name: 'Allergies', slug: 'seasonal-allergies-treatment-online', desc: 'Seasonal allergy evaluation and prescription antihistamines — flat $79, no insurance paperwork.' },
    { name: 'Skin Conditions / Rashes', slug: 'eczema-treatment-online', desc: 'Prescription treatment for eczema, contact dermatitis, and common skin issues — board-certified physician evaluation.' },
    { name: 'Hypertension Refills', slug: 'hypertension-refills-online', desc: 'Stable blood pressure refills at $79 per visit — predictable cost for HDHP members managing chronic conditions out-of-pocket.' },
    { name: 'Acid Reflux / GERD Refills', slug: 'acid-reflux-refills-online', desc: 'PPI and H2 blocker refills for stable reflux — transparent flat fee, HSA/FSA card accepted.' },
    { name: 'Pink Eye / Conjunctivitis', slug: 'pink-eye-treatment-online', desc: 'Fast evaluation and prescription drops for pink eye — know your cost before you book.' },
    { name: 'Influenza', slug: 'influenza-treatment-online', desc: 'Same-day evaluation and antiviral prescriptions when clinically appropriate.' },
    { name: 'Migraine Refills', slug: 'migraine-refills-online', desc: 'Prescription migraine medication refills at a predictable $79 — no surprise urgent-care bill.' },
  ];

  /* ── FAQ data ────────────────────────────────────────────────────── */
  const faqItems = [
    {
      q: 'Can I use my HSA to pay for TeleDirectMD?',
      a: 'Yes — TeleDirectMD accepts HSA and FSA cards at checkout. Physician telehealth visits are generally treated as qualified medical expenses under IRS guidance, so most HDHP enrollees use HSA funds for visits like this without issue. Eligibility and reimbursement details can vary by plan administrator, so confirm with your benefits administrator or tax professional if you have plan-specific questions. TeleDirectMD does not provide tax advice.'
    },
    {
      q: 'Why does the flat $79 visit matter when I have a high deductible?',
      a: 'With most HDHPs, you pay the full contracted rate for non-preventive care until you meet your deductible. The 2026 IRS minimum deductibles are $1,650 (self-only) and $3,300 (family), with most plans setting deductibles substantially higher. That means a routine urgent care visit that would carry a small copay on a low-deductible plan often runs $150 to $350 on an HDHP — the full contracted rate. A flat $79 TeleDirectMD visit removes the guesswork: you know the cost before you book, and it counts toward your deductible like any other qualified medical expense.'
    },
    {
      q: 'Does the $79 visit count toward my HDHP deductible?',
      a: 'In most cases, qualified medical expenses paid out of pocket — including a cash-pay physician telehealth visit — count toward your HDHP deductible. To have it apply, you typically need to submit the visit receipt or have your provider submit the claim to your insurer, depending on plan rules. TeleDirectMD provides an itemized receipt suitable for deductible accumulation and HSA/FSA reimbursement. Confirm submission requirements with your plan administrator.'
    },
    {
      q: 'What does the $79 include?',
      a: 'Every TeleDirectMD visit includes a secure video consultation with a board-certified physician, a clinical evaluation of your symptoms and history, a treatment plan, and — when clinically appropriate — an electronic prescription sent directly to the pharmacy of your choice. There are no facility fees, no enrollment fees, and no subscription fees. Prescription medication cost is separate and paid at your pharmacy; we always discuss generic alternatives where available, often $4 to $20 at major chains.'
    },
    {
      q: 'Is TeleDirectMD HSA-eligible across all conditions, or only some?',
      a: 'IRS guidance treats physician-prescribed medical care as a qualified medical expense regardless of whether the visit is conducted in-person or by telehealth. That generally includes evaluation and treatment for acute illnesses, chronic-condition management, prescription medication management, and most adult primary-care concerns we cover. Purely cosmetic or wellness-only visits — such as elective anti-aging treatments without a clinical indication — may not qualify; check with your benefits administrator for borderline cases.'
    },
    {
      q: 'Do you accept FSA cards too?',
      a: 'Yes. TeleDirectMD accepts both HSA and FSA cards at checkout, as well as all major credit and debit cards. Limited-purpose FSAs (typically dental and vision only) may not cover physician visits — but full-purpose health FSAs generally do.'
    },
    {
      q: 'What if I need a follow-up visit?',
      a: 'Each follow-up visit is a separate $79 flat-fee visit, payable by HSA, FSA, or any major card. For stable chronic conditions, many patients schedule periodic refill visits that fit neatly into HSA budgeting — you know the exact cost in advance.'
    },
    {
      q: 'Is TeleDirectMD available in my state?',
      a: 'TeleDirectMD is licensed in 41 states: Alabama, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas, Utah, Washington, West Virginia, Wisconsin, and Wyoming. You must be physically located in one of these states at the time of your visit. See our States We Serve page for the current list.'
    },
    {
      q: 'Can I see the same physician for ongoing care?',
      a: 'Yes — continuity of care is a core part of how TeleDirectMD is designed. Many HDHP members use TeleDirectMD for ongoing chronic-condition management (hypertension, acid reflux, allergies, migraines) and return to the same board-certified physician each visit. Consistent care across visits leads to better outcomes and avoids the cost of re-establishing care with a new provider.'
    },
    {
      q: 'When is TeleDirectMD NOT the right fit?',
      a: 'TeleDirectMD is for adults 18 and older. We do not provide emergency care — if you are experiencing chest pain, severe shortness of breath, stroke symptoms, severe abdominal pain, or any life-threatening symptom, call 911 or go to your nearest ER. We do not prescribe controlled substances. We do not see patients located outside our licensed states at the time of visit, and we do not provide pediatric care.'
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": "HDHP & HSA Holders", "item": pageUrl }
        ]
      },
      {
        "@type": "MedicalOrganization",
        "@id": `${baseUrl}/#organization`,
        "name": "TeleDirectMD",
        "url": baseUrl,
        "medicalSpecialty": "FamilyMedicine",
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
        "name": "Online Doctor for HDHP & HSA Holders — Flat $79, HSA/FSA Accepted",
        "description": "Adult telehealth for HDHP and high-deductible plan members. Flat $79 physician visits with HSA/FSA acceptance, board-certified care in 41 states.",
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
          "cssSelector": ["h1", ".tdmd-hero-sub", "#hsa-faq .tdmd-faq-question"]
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
          <span aria-current="page">HDHP &amp; HSA Holders</span>
        </div>
      </nav>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="tdmd-hero" id="hsa-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Online Doctor for HDHP &amp; HSA Holders &mdash; Flat $79, HSA/FSA Accepted</h1>
              <p className="tdmd-hero-sub">Yes &mdash; many adults with an HSA or high-deductible health plan use TeleDirectMD for a transparent $79 physician visit. HSA and FSA cards are accepted at checkout, and no insurance is required.</p>
              <p>
                If you have a high-deductible health plan (HDHP), every doctor visit can feel expensive before you meet your deductible. The 2026 IRS minimum HDHP deductibles are $1,650 (self-only) and $3,300 (family) &mdash; and most plans set them higher. TeleDirectMD removes the guesswork: a flat $79 physician video visit, with HSA and FSA cards accepted, and a receipt that counts toward your deductible.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>Board-certified physician &mdash; not a PA, not an NP, not an algorithm</li>
                <li>Flat $79 cash-pay visit &mdash; no facility, enrollment, or subscription fees</li>
                <li>HSA and FSA cards accepted at checkout</li>
                <li>Itemized receipt for deductible accumulation</li>
                <li>Licensed in 41 states &mdash; same physician across state lines</li>
              </ul>
              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">See What We Treat</a>
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
                <h2>Why HDHP Members Choose TeleDirectMD</h2>
                <ul>
                  <li>Predictable $79 flat fee &mdash; no deductible-math surprises</li>
                  <li>HSA &amp; FSA cards accepted at checkout</li>
                  <li>Itemized receipt for deductible &amp; FSA reimbursement</li>
                  <li>Physician-led care, not an NP or marketplace provider</li>
                  <li>No enrollment fees, no subscription fees</li>
                </ul>
                <p className="tdmd-hero-note">No app download required. Works on any smartphone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Why HDHP Cost Math Hurts ─────────────────────────── */}
      <section className="tdmd-section" id="hsa-problem">
        <div className="tdmd-container">
          <h2>Why HDHP Cost Math Hurts &mdash; and How a Flat $79 Visit Changes It</h2>
          <p>
            On most low-deductible health plans, a routine doctor visit is a small copay &mdash; $20 to $50 &mdash; and that&rsquo;s what you pay at checkout. On a high-deductible health plan, the math is different. Until you hit your deductible, you generally pay the full contracted rate for non-preventive care. For 2026, the IRS sets the minimum HDHP deductible at <strong>$1,650 for self-only coverage and $3,300 for family coverage</strong>, with most employers and individual-market plans setting deductibles substantially higher &mdash; often $3,000 to $7,500 for self-only.
          </p>
          <p>
            That means the routine urgent care visit that would cost you $30 on a low-deductible plan often costs <strong>$150 to $350 out-of-pocket</strong> on an HDHP &mdash; the full contracted rate. The same is true for many in-network office visits before you meet your deductible. The result: HDHP members frequently overpay for routine care, defer it entirely, or end up making expensive guesses about whether something is worth being seen for.
          </p>
          <p>
            <strong>A flat $79 telehealth visit removes the guesswork.</strong> You know the cost before you book. The receipt counts toward your deductible like any other qualified medical expense. And because TeleDirectMD accepts HSA and FSA cards directly, you can pay with pre-tax dollars set aside specifically for situations like this &mdash; without scanning receipts to your benefits administrator after the fact.
          </p>
          <div className="tdmd-comparison-note">
            <p style={{ margin: 0 }}>
              <strong>The scenario:</strong> You woke up with sinus pain, post-nasal drip, and a low-grade fever. You haven&rsquo;t come close to meeting your $4,000 HDHP deductible this year, and your local urgent care quotes $250 cash-pay before any prescription. With TeleDirectMD, the visit is $79, charged directly to your HSA card. A board-certified physician evaluates you over video, and if you need an antibiotic, the prescription is sent to the pharmacy down the street.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. HSA / FSA Acceptance ──────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="hsa-acceptance">
        <div className="tdmd-container">
          <h2>How HSA and FSA Payment Works at TeleDirectMD</h2>
          <p>
            TeleDirectMD accepts HSA and FSA debit cards at checkout the same way we accept any other credit or debit card. You enter the card details on the booking page; the $79 visit fee is charged at the time of booking; and you receive an itemized receipt by email after the visit. The receipt includes the visit date, physician name and credentials, service description, and total charge &mdash; all of the information your benefits administrator or tax preparer needs.
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>HSA (Health Savings Account)</h3>
              <p>Accepted at checkout. HSA funds are pre-tax dollars you&rsquo;ve set aside for qualified medical expenses under an HDHP. Physician telehealth visits are generally treated as qualified medical expenses under IRS guidance, so most HDHP enrollees use HSA funds for visits like this without issue.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>FSA (Flexible Spending Account)</h3>
              <p>Accepted at checkout for full-purpose health FSAs. Limited-purpose FSAs (typically dental and vision only) generally do not cover physician visits &mdash; check your specific plan. FSA funds, like HSA, are pre-tax dollars allocated specifically for qualifying healthcare costs.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Other Payment Options</h3>
              <p>If you don&rsquo;t want to use HSA/FSA, or your card declines for any reason, TeleDirectMD also accepts all major credit and debit cards (Visa, Mastercard, American Express, Discover). Many patients use HSA for the visit and a regular card for any pharmacy charges.</p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Receipts &amp; Deductible Accumulation</h3>
              <p>After every visit, you receive an itemized receipt by email. Submit it to your insurer (if needed for deductible tracking), keep it for your tax records, or send it to your benefits administrator for reimbursement if you paid out-of-pocket and have FSA/HRA funds available.</p>
            </div>
          </div>
          <div className="tdmd-cost-note" style={{ marginTop: '1.5rem' }}>
            <p style={{ margin: 0 }}>
              <strong>Important:</strong> TeleDirectMD does not provide tax or insurance advice. While physician telehealth visits are generally treated as qualified medical expenses, plan-specific eligibility rules can vary. Confirm with your benefits administrator or tax professional if you have plan-specific questions.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Pricing block ─────────────────────────────────────── */}
      <section className="tdmd-section" id="hsa-pricing">
        <div className="tdmd-container">
          <h2>Transparent Pricing &mdash; Know Your Cost Before You Book</h2>
          <p>
            For HDHP members, cost transparency is the entire point. TeleDirectMD removes deductible-math from the equation with a single flat-fee price &mdash; the same price every visit, in every state we serve.
          </p>
          <div className="tdmd-cost-note" style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: 0 }}>
              <strong>$79 flat. HSA/FSA accepted. No subscription. No surprise billing.</strong>
            </p>
          </div>
          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">$79</p>
              <p className="tdmd-price-sub">Flat fee per visit &mdash; HSA/FSA accepted</p>
              <ul className="tdmd-price-includes">
                <li>Board-certified physician consultation</li>
                <li>Treatment plan + e-prescription when appropriate</li>
                <li>Itemized receipt for deductible &amp; FSA reimbursement</li>
                <li>No facility, enrollment, or subscription fees</li>
                <li>Same physician across all 41 licensed states</li>
              </ul>
            </div>
            <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
              <h3>How $79 Compares on an HDHP</h3>
              <p className="tdmd-price-caption">Typical costs before HDHP deductible is met. Actual costs vary by plan and provider.</p>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>TeleDirectMD <strong style={{ color: 'var(--tdmd-accent)', fontWeight: 700 }}>(lowest)</strong></span><span>$79</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill tdmd-bar-fill-tdmd" style={{ '--w': 22 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>In-network office visit (full contracted rate)</span><span>$110&ndash;$280</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 38 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>Urgent care (cash-pay before deductible)</span><span>$150&ndash;$350</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 60 }} /></div>
              </div>
              <div className="tdmd-bar-row">
                <div className="tdmd-bar-label"><span>ER (HDHP, no insurance reduction)</span><span>$750&ndash;$3,000+</span></div>
                <div className="tdmd-bar-track"><div className="tdmd-bar-fill" style={{ '--w': 100 }} /></div>
              </div>
            </div>
          </div>
          <p className="tdmd-price-disclaimer">
            Exact out-of-pocket costs vary by plan, provider, and location. TeleDirectMD does not provide tax or insurance advice; confirm benefit and deductible rules with your plan administrator.
          </p>
        </div>
      </section>

      {/* ── 5. Common reasons HDHP/HSA holders book ──────────────── */}
      <section className="tdmd-section" id="hsa-use-cases">
        <div className="tdmd-container">
          <h2>Common Reasons HDHP and HSA Holders Book Visits</h2>
          <p>
            HDHP members tend to delay care because of cost uncertainty. A predictable $79 visit removes that friction for a wide range of common adult primary-care concerns.
          </p>
          <div className="tdmd-grid tdmd-grid-2">
            {conditions.map(c => (
              <div key={c.slug} className="tdmd-card">
                <h3><a href={`/${c.slug}/`}>{c.name}</a></h3>
                <p dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            See the full list of conditions we treat at <a href="/what-we-treat/">What We Treat</a>, or visit the <a href="/cost/online-doctor-visit-cost/">Online Doctor Visit Cost</a> page for a full pricing breakdown.
          </p>
          <div className="tdmd-comparison-note" style={{ marginTop: '1.5rem' }}>
            <p style={{ margin: 0 }}>
              <strong>Safety note:</strong> If you are experiencing a medical emergency &mdash; chest pain, severe shortness of breath, stroke symptoms, severe abdominal pain, or any life-threatening symptom &mdash; call 911 or go to the nearest emergency room. TeleDirectMD does not provide emergency care.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Fit check ─────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-highlight" id="hsa-fit">
        <div className="tdmd-container">
          <h2>Is TeleDirectMD the Right Fit?</h2>
          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>This page is a good fit if&hellip;</h3>
              <ul>
                <li>You have an HDHP and want price clarity before booking care</li>
                <li>You have HSA funds and want a simple physician visit, paid directly with your HSA card</li>
                <li>You&rsquo;re paying out of pocket until your deductible is met</li>
                <li>You want adult telehealth without finding an in-person clinic first</li>
                <li>You want an itemized receipt for deductible accumulation or FSA reimbursement</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-warning">
              <h3>When TeleDirectMD may not be the right fit</h3>
              <ul>
                <li>You are under 18 &mdash; we are an adult-only service</li>
                <li>You need emergency care &mdash; call 911 or go to the ER</li>
                <li>You are seeking controlled substances &mdash; we do not prescribe them</li>
                <li>You are physically located outside one of our 41 licensed states at the time of the visit</li>
                <li>Your concern requires hands-on examination or in-person imaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. How it works ─────────────────────────────────────── */}
      <section className="tdmd-section" id="hsa-how-it-works">
        <div className="tdmd-container">
          <h2>How Your Visit Works &mdash; Four Simple Steps</h2>
          <p>From booking to prescription pickup, every step is built for HDHP and HSA holders who want predictable, transparent care.</p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Book Online &mdash; Pay With Your HSA Card</h3>
                <p>Pick a time that works for you, enter your HSA, FSA, or any major credit/debit card, and confirm the $79 flat fee before booking. No surprise charges &mdash; you see the exact cost upfront.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>Complete a Brief Intake</h3>
                <p>A short intake form captures your medical history, current symptoms, current medications, and any allergies. Takes about 2 minutes &mdash; everything stays HIPAA-secure.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Meet With a Board-Certified Physician by Video</h3>
                <p>Connect with a real physician &mdash; not a PA, not an NP, not an algorithm &mdash; over secure video. Typical visit length is 10 to 15 minutes. We review your history, evaluate your symptoms, and discuss a treatment plan together.</p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">4</div>
              <div className="tdmd-decision-content">
                <h3>Get Your Prescription + Itemized Receipt</h3>
                <p>If a prescription is appropriate, it&rsquo;s sent electronically to the pharmacy of your choice anywhere in the U.S. You receive an itemized receipt by email &mdash; suitable for HSA reimbursement, FSA submission, and deductible accumulation.</p>
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>Book a $79 Visit</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Why physician-led ─────────────────────────────────── */}
      <section className="tdmd-section" id="hsa-physician">
        <div className="tdmd-container">
          <h2>Why Physician-Led Care Matters &mdash; Especially on an HDHP</h2>
          <p>
            When you&rsquo;re paying out of pocket, you want the visit to count. Many low-cost telehealth platforms route patients to a rotating mix of clinicians or marketplace providers &mdash; sometimes a nurse practitioner, sometimes a physician assistant, sometimes a physician you&rsquo;ve never seen and won&rsquo;t see again. TeleDirectMD is built differently.
          </p>
          <p>
            Every TeleDirectMD visit is conducted by <a href="/about">Dr. Parth Bhavsar, a board-certified family medicine physician</a> (NPI 1104323203). One physician, across all 41 licensed states, accountable to you across visits. That continuity matters more on an HDHP because each visit is a real out-of-pocket cost &mdash; you don&rsquo;t want to pay $79 to repeat your history to a new clinician every time.
          </p>
        </div>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────── */}
      <section className="tdmd-section" id="hsa-faq">
        <div className="tdmd-container">
          <h2>HDHP &amp; HSA Telehealth FAQ</h2>
          <div className="tdmd-faq-list">
            {faqItems.map((item, idx) => (
              <details key={idx} className="tdmd-faq-item">
                <summary className="tdmd-faq-question">{item.q}</summary>
                <div className="tdmd-faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Final CTA ────────────────────────────────────────── */}
      <section className="tdmd-section tdmd-section-cta" id="hsa-cta">
        <div className="tdmd-container">
          <h2>Ready for a Predictable $79 Physician Visit?</h2>
          <p>
            Book a same-day visit with a board-certified physician. Use your HSA, FSA, or any major card. No insurance required. No surprise bills.
          </p>
          <div className="tdmd-hero-ctas">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 Visit</a>
            <a href="/cost/online-doctor-visit-cost/" className="tdmd-btn tdmd-btn-outline">See Pricing Details</a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            <a href="/states-we-serve/">See licensed states</a> &middot; <a href="/what-we-treat/">See what we treat</a> &middot; <a href="/faq/">General FAQ</a>
          </p>
        </div>
      </section>
    </>
  );
}
