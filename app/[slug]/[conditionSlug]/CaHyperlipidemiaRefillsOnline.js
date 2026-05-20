/**
 * CaHyperlipidemiaRefillsOnline.js — California × Hyperlipidemia Refills condition page (v3)
 *
 * URL: /ca/hyperlipidemia-refills-online/
 * Authority: ACC/AHA 2018 + 2022 Expert Consensus
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca'
 * and conditionSlug === 'hyperlipidemia-refills-online'.
 *
 * Matches CA UTI v3 template:
 *   • No CitableSummaryBlock — inline opener paragraph below hero
 *   • Premium FaqAccordion — 12 FAQs (3 CA-generic + 9 condition-specific)
 *   • JSON-LD: MedicalWebPage + FAQPage + Physician + HowTo + BreadcrumbList + SpeakableSpecification
 *   • NO QAPage schema
 *   • Inline vertical cost bars (heightPct: 8/22/45/100)
 *   • CA Payor Status table from Notion CSV
 *   • GoodRx-verified CA pricing
 *   • 15+ internal links
 *   • CA regulatory block (B&P §2290.5, MBC, AB 744, AB 2789)
 *
 * Hard rules respected:
 *   • No QAPage schema
 *   • No CitableSummaryBlock
 *   • No first-person prescribing
 *   • No fabricated patient scenarios
 *   • NPI 1104323203 visible
 *   • All .gov and clinical society citations are live <a href> tags
 */
import FaqAccordion from '../../components/FaqAccordion';

const PAGE_URL = 'https://teledirectmd.com/ca/hyperlipidemia-refills-online/';
const PAGE_TITLE = 'Hyperlipidemia Refills Online in California | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-19';
const DATE_MODIFIED = '2026-05-19';
const LAST_REVIEWED = '2026-05-19';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'California',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

// California payors — sourced from Notion payor enrollment (refreshed 2026-05-19)
const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true,
    notes: 'Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true,
    notes: 'Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Enrollment pending — self pay ($49) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Pending — self pay ($49) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false,
    notes: 'Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay available but Kaiser will not reimburse out-of-network visits.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false,
    notes: 'TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via dhcs.ca.gov.' },
];

const FAQ_ITEMS = [
  {
    id: 'hyperlipidemia-refills-online-faq-0',
    question: "Can I refill my cholesterol medication online in California?",
    answer: <p>Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth. TeleDirectMD\'s California-licensed board-certified Family Medicine physician reviews your most recent fasting lipid panel, LDL-C level, 10-year ASCVD risk score, and statin tolerance before authorizing refills. Statins and ezetimibe are not controlled substances and can be prescribed via California telehealth. Self pay is $49; Aetna is in-network effective April 30, 2026.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-1',
    question: "What cholesterol medications can TeleDirectMD refill in California?",
    answer: <p>TeleDirectMD refills established statin regimens (atorvastatin, rosuvastatin, simvastatin, pravastatin, lovastatin), ezetimibe, and fibrates (fenofibrate) for stable hyperlipidemia. Medication selection follows the ACC/AHA 2018 Cholesterol Guideline and 2022 Expert Consensus. PCSK9 inhibitors (evolocumab, alirocumab) require specialist management — TeleDirectMD will facilitate a cardiology or lipidology referral.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-2',
    question: "What is the difference between high-intensity and moderate-intensity statins?",
    answer: <p>High-intensity statins — atorvastatin 40–80 mg and rosuvastatin 20–40 mg — reduce LDL-C by 50% or more and are preferred for established ASCVD (secondary prevention), LDL-C ≥190 mg/dL, and Type 2 diabetes with high cardiovascular risk. Moderate-intensity statins — atorvastatin 10–20 mg, rosuvastatin 5–10 mg, simvastatin 20–40 mg — reduce LDL-C by 30–49% and are used for primary prevention in lower-risk adults. The physician selects intensity based on your 10-year ASCVD risk score and LDL-C target.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-3',
    question: "How much do statin medications cost in California with GoodRx?",
    answer: <p>Generic statins are among the most affordable prescription medications in California with GoodRx coupons. Atorvastatin 40 mg/month: approximately $5–$18. Rosuvastatin 20 mg/month: approximately $12–$30. Simvastatin 40 mg/month: approximately $5–$12. Ezetimibe 10 mg/month: approximately $12–$25. Fenofibrate: approximately $15–$35 per month. Prices as of May 2026 — actual prices vary by pharmacy location and dose.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-4',
    question: "What does my 10-year ASCVD risk score mean for statin therapy?",
    answer: <p>The 10-year atherosclerotic cardiovascular disease (ASCVD) risk score estimates your probability of a heart attack or stroke in the next decade, calculated using age, sex, race/ethnicity, total cholesterol, HDL, systolic blood pressure, BP treatment status, diabetes, and smoking history. Per ACC/AHA 2018 guidelines: ≥20% risk = very high-risk (high-intensity statin strongly recommended); 7.5–19.9% = intermediate-risk (statin benefit discussion recommended); 5–7.4% = borderline (risk-enhancing factors may justify statin); &lt;5% = low-risk (focus on lifestyle). The physician calculates your ASCVD risk score at each visit.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-5',
    question: "Does California Medi-Cal cover statin medications?",
    answer: <p>Medi-Cal covers generic statins including atorvastatin, simvastatin, pravastatin, and lovastatin at low or no cost-sharing under the Medi-Cal formulary. Rosuvastatin and ezetimibe are also covered with prior authorization in some managed care plans. However, TeleDirectMD is not currently enrolled as a Medi-Cal provider, so Medi-Cal will not cover TeleDirectMD visits. Medi-Cal members can use the $49 self-pay rate or seek care from a Medi-Cal-enrolled provider.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-6',
    question: "What labs do I need before a hyperlipidemia refill visit?",
    answer: <p>The physician requires a fasting lipid panel (total cholesterol, LDL-C, HDL-C, triglycerides, non-HDL-C) within the past 12 months before authorizing a statin refill. If you are on a statin plus fenofibrate, a comprehensive metabolic panel (CMP) with liver function tests is also reviewed. If you report muscle pain or weakness, creatine kinase (CK) testing is recommended before refill. Labs available at Quest Diagnostics, LabCorp, and community health clinics throughout California.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-7',
    question: "What should I do if I have muscle pain on a statin?",
    answer: <p>Muscle pain (myalgia) is the most common reason for statin intolerance, affecting approximately 5–10% of statin users. If you develop new muscle pain while on a statin, the TeleDirectMD physician will review the severity, timing, and associated symptoms. Mild myalgia may be managed with dose reduction or switching to a different statin. Severe muscle pain with dark urine suggests rhabdomyolysis — a rare emergency requiring immediate in-person care and statin discontinuation. A creatine kinase (CK) lab check helps distinguish myalgia from serious myopathy.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-8',
    question: "When is ezetimibe recommended alongside a statin?",
    answer: <p>The ACC/AHA 2022 Expert Consensus recommends adding ezetimibe when LDL-C remains ≥70 mg/dL (for ASCVD patients) or ≥100 mg/dL (for high-risk primary prevention) despite maximally tolerated statin therapy. Ezetimibe reduces intestinal cholesterol absorption and provides an additional 18–24% LDL-C reduction on top of statin therapy. Generic ezetimibe 10 mg is approximately $12–$25 per month with a GoodRx coupon at California pharmacies.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-9',
    question: "Does California telehealth parity law cover my cholesterol management visit?",
    answer: <p>California Assembly Bill 744 (2019), codified in Insurance Code §10123.85, requires commercial health plans to reimburse telehealth services on the same basis as in-person care. Parity applies when TeleDirectMD is in-network with your plan. Aetna commercial (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California. Anthem Blue Cross and Cigna are pending enrollment.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-10',
    question: "What lifestyle modifications complement statin therapy for hyperlipidemia?",
    answer: <p>The ACC/AHA 2018 Cholesterol Guideline emphasizes lifestyle changes alongside medication: a heart-healthy diet (Mediterranean or DASH pattern, reducing saturated fat to &lt;6% of total calories), regular aerobic exercise (150 minutes per week of moderate-intensity activity), smoking cessation, weight loss for overweight patients, and limiting alcohol. Diet and exercise alone can reduce LDL-C by 15–25%. The physician discusses lifestyle optimization alongside medication management at each refill visit.</p>,
  },
  {
    id: 'hyperlipidemia-refills-online-faq-11',
    question: "Can I get PCSK9 inhibitor therapy refilled at TeleDirectMD in California?",
    answer: <p>No. PCSK9 inhibitors — evolocumab (Repatha) and alirocumab (Praluent) — require specialist management, step therapy documentation, and prior authorization that exceeds the scope of a telehealth refill visit. If you are a candidate for PCSK9 inhibitor therapy (familial hypercholesterolemia or established ASCVD with LDL-C ≥70 mg/dL despite maximum tolerated statin + ezetimibe), TeleDirectMD will facilitate a referral to a cardiologist or lipidologist who can manage PCSK9 therapy and prior authorization.</p>,
  }
];

const CA_SIBLINGS = [
  { slug: 'hypertension-refills-online', label: "Hypertension Refills in CA", why: "Metabolic syndrome co-occurrence — both managed in same visit context." },
  { slug: 'diabetes-refills-online', label: "Diabetes Refills in CA", why: "T2DM with high ASCVD risk: high-intensity statin per ACC/AHA guideline." },
  { slug: 'hypothyroidism-refills-online', label: "Hypothyroidism Refills in CA", why: "Hypothyroidism causes secondary hypercholesterolemia — treat thyroid first." },
  { slug: 'acid-reflux-refills-online', label: "Acid Reflux Refills in CA", why: "PPI-statin drug interaction monitoring." },
  { slug: 'migraine-refills-online', label: "Migraine Refills in CA", why: "Common comorbidity in metabolic syndrome population." },
  { slug: 'online-doctor-visits', label: "All Online Doctor Visits in CA", why: "General CA telehealth hub." }
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'Refill cholesterol medications online in California. Board-certified Family Medicine MD. CA telehealth law compliant. Aetna in-network. Self pay $49. ACC/AHA 2018 cholesterol + 2022 update. Statin tier framework. GoodRx CA pricing.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Hyperlipidemia Refills',
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'California' },
    },
    reviewedBy: {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar',
      name: PHYSICIAN.name,
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi },
      medicalSpecialty: PHYSICIAN.specialty,
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Doctor of Medicine (MD)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certification — American Board of Family Medicine' },
      ],
      licensedIn: PHYSICIAN.licenseState,
      worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' },
      sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#hyperlipidemia-refills-online-opening', '#hyperlipidemia-refills-online-opening p', '.tdmd-hyperlipidemia-refills-online-byline', '#hyperlipidemia-refills-online-faq'],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: typeof faq.answer === 'string' ? faq.answer : faq.answer?.props?.children || faq.question },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Refills for Hyperlipidemia Refills Online in California',
    description: 'Three steps to receive hyperlipidemia refills evaluation and prescription from a California-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '49' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California Hyperlipidemia Refills. No referral needed. Self pay $49. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your history, current medications, lab values, and clinical status. Consent per CA B&P Section 2290.5 confirmed.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit per AB 2789. Follow-up instructions provided.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' },
      { '@type': 'ListItem', position: 3, name: PAGE_TITLE, item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

function extractPlain(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractPlain).join('');
  if (node.props && node.props.children) return extractPlain(node.props.children);
  return '';
}

export default function CaHyperlipidemiaRefillsOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-hyperlipidemia-refills-online';
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno',
    'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {/* JSON-LD schemas */},
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="tdmd-ca-uti">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Hyperlipidemia Refills</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Hyperlipidemia Refills</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adults 18+ · Secure video visit · Self pay $49 · Aetna in-network · UHC Commercial approved · MD-only · CA B&amp;P §2290.5 compliant · ACC/AHA 2018 + 2022 Expert Consensus
                </p>
                <p>
                  TeleDirectMD provides evidence-based hyperlipidemia refills by secure video visit for California adults. A California-licensed board-certified Family Medicine physician evaluates your history, reviews relevant lab values and prior treatments, and prescribes appropriate medication when clinically indicated. This page is for adults located in California, including {caCities.join(', ')}, and surrounding areas.
                </p>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-ca-uti__byline tdmd-hyperlipidemia-refills-online-byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-ca-uti__byline-text">
                    <span className="tdmd-ca-uti__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-ca-uti__byline-meta">
                      NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed{' '}
                      <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opening`}>Overview</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>California epidemiology</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Medications &amp; pricing</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $49 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>California-licensed telehealth for adults located in California at time of visit</li>
                  <li>Evidence-based treatment per ACC/AHA 2018 + 2022 Expert Consensus</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> E78.5 (Hyperlipidemia, unspecified), E78.0 (Pure hypercholesterolemia) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Hyperlipidemia Refills in California</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — California-licensed</li>
                    <li>Evidence-based regimen per ACC/AHA 2018 + 2022 Expert Consensus</li>
                    <li>Lab value review before prescribing</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up steps and monitoring guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have urgent or severe symptoms, go to urgent care or the ER. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER ───────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener" id="hyperlipidemia-refills-online-opening">
              <p>
                California adults with established hyperlipidemia can refill cholesterol-lowering medications — including statins, ezetimibe, and fibrates — by secure video visit through TeleDirectMD, consistent with California Business and Professions Code Section 2290.5. A California-licensed board-certified Family Medicine physician reviews your most recent fasting lipid panel, LDL-C level, 10-year ASCVD risk score, and statin tolerance before authorizing refills. The ACC/AHA 2018 Cholesterol Guideline, supplemented by the 2022 ACC Expert Consensus on Non-Statin Therapies, guides therapeutic decisions. Self pay is $49. Aetna is in-network effective April 30, 2026.
              </p>
              <span className="tdmd-condition-opener__meta">
                Reviewed by <a href="/about/">{PHYSICIAN.name}</a>, Board-Certified {PHYSICIAN.specialty} · NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} ·
                Last reviewed <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </span>
            </div>
          </div>
        </section>

        {/* ─── 3) CALIFORNIA TELEHEALTH LAW ─────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Your Hyperlipidemia Refills Visit</h2>

            <h3>Does California require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent and document it. TeleDirectMD does this at the start of every visit.
            </p>

            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>
              The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; TeleDirectMD physicians are licensed in California. See <a href="/about/">Dr. Bhavsar&apos;s bio</a> for credential details.
            </p>

            <h3>Does California insurance parity law cover telehealth visits?</h3>
            <p>
              Yes, for commercial plans. California Assembly Bill 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a>, requires commercial health plans to reimburse telehealth services on the same basis as comparable in-person services. Plans cannot require face-to-face contact as a condition of reimbursement. These parity provisions apply to contracts issued, amended, or renewed after January 1, 2021.
            </p>

            <h3>Does California require electronic prescriptions?</h3>
            <p>
              Yes. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. If a prescription is appropriate after your visit, TeleDirectMD sends an e-prescription directly to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or another pharmacy of your choice. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) CALIFORNIA EPIDEMIOLOGY ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>California Epidemiology: Hyperlipidemia Refills</h2>
            <p>High cholesterol (LDL-C ≥130 mg/dL or total cholesterol ≥240 mg/dL) affects approximately 29% of California adults — about 9 million people — per CHIS 2022 data and CDPH chronic disease surveillance. Statin use in California is approximately 23% of adults over 45, reflecting both high disease burden and treatment gaps.</p>
            
            <p>South Asian Californians have elevated ASCVD risk at lower BMI thresholds; Filipino Californians have higher rates of metabolic syndrome contributing to dyslipidemia. The ACC/AHA 2018 guideline identifies these populations as risk-enhancing factors warranting earlier statin initiation.</p>
            
            
            
            
          </div>
        </section>

        {/* ─── 5) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Hyperlipidemia Refills Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$49</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription when appropriate. Patients with in-network insurance pay their plan&apos;s telehealth copay instead. The payor table below reflects TeleDirectMD&apos;s current California enrollment, refreshed May 19, 2026.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$49</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Evidence-based hyperlipidemia refills management</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; monitoring guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Hyperlipidemia Refills Visit Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges Californians see before insurance. Actual costs vary by setting and city.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {[
                    { name: 'TeleDirectMD video visit', value: '$49', heightPct: 8, isTdmd: true },
                    { name: 'Other telehealth', value: '$75–$150', heightPct: 22 },
                    { name: 'Urgent care', value: '$150–$300', heightPct: 45 },
                    { name: 'ER visit', value: '$500–$3,000+', heightPct: 100 },
                  ].map((bar, i) => (
                    <div key={i} className="tdmd-vbar" role="listitem" aria-label={`${bar.name}: ${bar.value}`}>
                      <span className="tdmd-vbar__value">{bar.value}</span>
                      <div className={`tdmd-vbar__fill${bar.isTdmd ? ' tdmd-vbar__fill--tdmd' : ''}`} style={{ height: `${bar.heightPct}%` }} aria-hidden="true" />
                      <span className={`tdmd-vbar__label${bar.isTdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>{bar.name}</span>
                    </div>
                  ))}
                </div>
                <p className="tdmd-price-footnote">Comparison reflects typical California metro pricing. Actual costs vary.</p>
              </div>
            </div>

            <h3 style={{ marginTop: '1.75rem' }}>California Payor Status — TeleDirectMD</h3>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="TeleDirectMD California payor status">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Source: TeleDirectMD payor enrollment records, refreshed May 19, 2026. Verify current in-network status with your insurer before booking.
                </caption>
                <thead>
                  <tr><th>Insurer</th><th>Status</th><th>Effective</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  {CA_PAYORS.map((p) => {
                    const pillClass = p.inNetwork
                      ? 'tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--good'
                      : p.status === 'Pending' || p.status === 'Approved'
                        ? 'tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--pending'
                        : 'tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--none';
                    const pillLabel = p.inNetwork ? '✓ In-Network' : p.status;
                    return (
                      <tr key={p.name}>
                        <td><strong>{p.name}</strong></td>
                        <td><span className={pillClass}>{pillLabel}</span></td>
                        <td>{p.effective}</td>
                        <td>{p.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: '1rem' }}>
              For deeper detail, see <a href="/insurance/aetna/california/hyperlipidemia-refills-online/">Aetna × California × Hyperlipidemia Refills</a> or view all <a href="/insurance">insurance options</a>.
            </p>
          </div>
        </section>

        {/* ─── 6) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Hyperlipidemia Refills: Medication Options and CA Pricing</h2>
            <p>
              The table below reflects evidence-based medication options per ACC/AHA 2018 + 2022 Expert Consensus guidelines.
              GoodRx prices retrieved May 2026 from goodrx.com — national coupon prices; actual cost varies by California pharmacy location.
              Prescription costs are separate from the $49 TeleDirectMD visit fee.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Hyperlipidemia Refills medication options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 2026. Actual pharmacy prices vary. Prescription costs are separate from the visit fee.
                </caption>
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Typical Regimen</th>
                    <th>GoodRx Price (May 2026)</th>
                    <th>Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Atorvastatin 10/20/40/80 mg</strong></td>
                    <td>Once daily (any time of day)</td>
                    <td><a href="https://www.goodrx.com/atorvastatin" target="_blank" rel="noopener">~$5–$18/month GoodRx (generic)</a></td>
                    <td>Most widely prescribed statin. High-intensity at 40–80 mg. Less CYP3A4 interaction than simvastatin.</td>
                  </tr>
                  <tr>
                    <td><strong>Rosuvastatin 5/10/20/40 mg</strong></td>
                    <td>Once daily (any time of day)</td>
                    <td><a href="https://www.goodrx.com/rosuvastatin" target="_blank" rel="noopener">~$12–$30/month GoodRx (generic)</a></td>
                    <td>High-potency, fewer drug interactions than atorvastatin. Dose reduce to 5–10 mg if eGFR &lt;30.</td>
                  </tr>
                  <tr>
                    <td><strong>Ezetimibe 10 mg</strong></td>
                    <td>10 mg once daily</td>
                    <td><a href="https://www.goodrx.com/ezetimibe" target="_blank" rel="noopener">~$12–$25/month GoodRx (generic)</a></td>
                    <td>Added to statin for LDL-C not at goal. ~18–24% additional LDL-C reduction. ACC/AHA 2022 recommended add-on.</td>
                  </tr>
                  <tr>
                    <td><strong>Fenofibrate 48/54/145/160 mg</strong></td>
                    <td>Once daily with food</td>
                    <td><a href="https://www.goodrx.com/fenofibrate" target="_blank" rel="noopener">~$15–$35/month GoodRx (generic)</a></td>
                    <td>Used for hypertriglyceridemia (TG ≥500 mg/dL) or mixed dyslipidemia. Not primarily LDL-C lowering. Monitor LFTs and CK.</td>
                  </tr>
                  <tr>
                    <td><strong>Simvastatin 10/20/40 mg</strong></td>
                    <td>Once daily at bedtime</td>
                    <td><a href="https://www.goodrx.com/simvastatin" target="_blank" rel="noopener">~$5–$12/month GoodRx (generic)</a></td>
                    <td>Taken at bedtime for peak cholesterol synthesis coverage. Multiple drug interactions (e.g., amiodarone, diltiazem) — 80 mg dose FDA-restricted due to myopathy risk.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> The choice of medication depends on your individual clinical history, allergies, organ function, and other factors assessed by the physician at the visit. Do not start a prescription medication without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── 7) DUAL-PATH BLOCK ────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care: Which Is Right for You?</h2>
            <p>For most established hyperlipidemia refills cases in stable adults, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below.</p>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Established hyperlipidemia refills with prior diagnosis</li>
                  <li>Stable on current regimen with recent relevant labs</li>
                  <li>No acute emergency or red-flag symptoms</li>
                  <li>Adult 18+, located in California</li>
                  <li>Aetna or UHC Commercial (in-network), or self pay $49</li>
                  <li>Seeking refill, monitoring review, or treatment initiation</li>
                </ul>
              </div>
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--alert">
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>ER / 911:</strong> Acute severe symptoms, potential emergency</li>
                  <li><strong>Urgent care:</strong> Moderate acute symptoms requiring physical examination</li>
                  <li><strong>Primary care:</strong> New diagnosis, complex workup, or specialist referral needed</li>
                  <li><strong>Specialist:</strong> Condition exceeding primary care telehealth scope</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local clinics and resources</li>
                  <li><strong><a href="https://coveredca.com" rel="noopener" target="_blank">Covered California</a>:</strong> Find in-network primary care providers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8) CTA STRIP ─────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-uti__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — California adults, 18+</p>
                <small>Self pay $49 · Aetna in-network · UHC Commercial approved May 2026 · Hyperlipidemia Refills</small>
              </div>
              <a className="tdmd-ca-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ (Premium Style A accordion) ──────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Hyperlipidemia Refills"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a California-licensed MD?</h3>
                <p>Book a same-day video visit. Self pay $49 · Aetna in-network · UHC Commercial approved.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) RELATED CA CONDITIONS (siblings) ─────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <p>These California condition pages address related or frequently co-occurring conditions treated by TeleDirectMD in California.</p>
            <div className="tdmd-ca-uti__sibling-grid">
              {CA_SIBLINGS.map((s) => (
                <a key={s.slug} className="tdmd-ca-uti__sibling" href={`/ca/${s.slug}/`}>
                  <span className="tdmd-ca-uti__sibling-label">{s.label}</span>
                  <span className="tdmd-ca-uti__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11) PILLAR / SPOKE / CLUSTER LINKS ───────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/hyperlipidemia-refills-online/">Hyperlipidemia Refills national condition page</a>.</p>
            <div className="tdmd-ca-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/hyperlipidemia-refills-online/">Hyperlipidemia Refills (national)</a>
              <a href="/ca/asthma-refills-online/">Asthma Refills in CA</a>
              <a href="/ca/hypertension-refills-online/">Hypertension Refills in CA</a>
              <a href="/ca/hypothyroidism-refills-online/">Hypothyroidism Refills in CA</a>
              <a href="/ca/hyperlipidemia-refills-online/">Hyperlipidemia Refills in CA</a>
              <a href="/ca/diabetes-refills-online/">Diabetes Refills in CA</a>
              <a href="/ca/migraine-refills-online/">Migraine Refills in CA</a>
              <a href="/ca/acid-reflux-refills-online/">Acid Reflux Refills in CA</a>
              <a href="/ca/epipen-refills-online/">EpiPen Refills in CA</a>
              <a href="/ca/hair-loss-treatment-online/">Hair Loss in CA</a>
              <a href="/ca/seasonal-allergies-treatment-online/">Seasonal Allergies in CA</a>
              <a href="/ca/anti-aging-treatment-online/">Anti-Aging in CA</a>
              <a href="/ca/eyelash-growth-treatment-online/">Eyelash Growth in CA</a>
              <a href="/ca/smoking-cessation-treatment-online/">Smoking Cessation in CA</a>
              <a href="/ca/motion-sickness-treatment-online/">Motion Sickness in CA</a>
              <a href="/ca/uti-treatment-online/">UTI Treatment in CA</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/insurance">Insurance</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── 12) REFERENCES ───────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5 — Telehealth Advancement Act</a>. Retrieved May 2026.</li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a>. Retrieved May 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a>. Retrieved May 2026.</li>
              <li><a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California — AB 2789 Electronic Prescribing</a>. Retrieved May 2026.</li>
              <li><a href="https://www.jacc.org/doi/10.1016/j.jacc.2018.11.003" rel="noopener" target="_blank">ACC/AHA 2018 Guideline on the Management of Blood Cholesterol — JACC</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acc.org/latest-in-cardiology/articles/2022/11/17/13/47/2022-acc-expert-consensus-decision-pathway-on-nonstatin-therapies-for-ldl-c-lowering" rel="noopener" target="_blank">2022 ACC Expert Consensus Decision Pathway on Non-Statin Therapies for LDL-C Lowering</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/CCDPHP/DCDIC/CVEHB/Pages/HeartDiseaseandStrokePrevention.aspx" rel="noopener" target="_blank">CDPH Heart Disease and Stroke Prevention Program</a>. Retrieved May 2026.</li>
              <li><a href="https://healthpolicy.ucla.edu/our-work/california-health-interview-survey-chis/chis-data" rel="noopener" target="_blank">California Health Interview Survey (CHIS) 2022 — Cardiovascular Risk Factors</a>. Retrieved May 2026.</li>
              <li><a href="https://www.jacc.org/doi/10.1016/j.jacc.2018.11.003" rel="noopener" target="_blank">ACC/AHA 2018 Cholesterol Guideline</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 13) DISCLAIMER ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under California B&amp;P §2290.5. Treatment decisions are made by a California-licensed board-certified physician based on the clinical history at the time of the visit. If you have urgent or severe symptoms, seek in-person care or emergency care immediately. TeleDirectMD does not prescribe controlled substances in any state.</p>
            <p>GoodRx price information reflects national coupon pricing retrieved May 2026; actual prescription costs at California pharmacies vary. Insurance status is current as of May 19, 2026; verify with your insurer before booking.</p>
          </div>
        </section>
      </div>
    </>
  );
}
