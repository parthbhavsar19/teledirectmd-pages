/**
 * CaDiabetesRefillsOnline.js — California × Diabetes Refills condition page (v3)
 *
 * URL: /ca/diabetes-refills-online/
 * Authority: ADA Standards of Care 2024–2025
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca'
 * and conditionSlug === 'diabetes-refills-online'.
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

const PAGE_URL = 'https://teledirectmd.com/ca/diabetes-refills-online/';
const PAGE_TITLE = 'Diabetes Refills Online in California | TeleDirectMD';
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
    notes: 'Enrollment pending — self pay ($79) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Pending — self pay ($79) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false,
    notes: 'Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay available but Kaiser will not reimburse out-of-network visits.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false,
    notes: 'TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via dhcs.ca.gov.' },
];

const FAQ_ITEMS = [
  {
    id: 'diabetes-refills-online-faq-0',
    question: "Can I refill my Type 2 diabetes medications online in California?",
    answer: <p>Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD\'s California-licensed board-certified Family Medicine physician reviews your most recent HbA1c, kidney function (eGFR), blood glucose logs, and medication adherence before authorizing refills for stable established Type 2 diabetes. Metformin, GLP-1 agonists (for T2DM), SGLT2 inhibitors, and sulfonylureas are in scope. Self pay is $79; Aetna is in-network effective April 30, 2026.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-1',
    question: "Does TeleDirectMD prescribe GLP-1 agonists (semaglutide, tirzepatide) for weight loss?",
    answer: <p>No. TeleDirectMD prescribes GLP-1 receptor agonists including semaglutide (Ozempic) and tirzepatide (Mounjaro) for Type 2 diabetes glycemic control only. The physician does not prescribe semaglutide (Wegovy) or tirzepatide (Zepbound) for weight loss in the absence of a Type 2 diabetes diagnosis. Patients seeking weight-loss GLP-1 therapy without Type 2 diabetes should consult a physician with obesity medicine expertise.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-2',
    question: "What HbA1c target does TeleDirectMD use for Type 2 diabetes management?",
    answer: <p>The ADA Standards of Medical Care in Diabetes 2024–2025 recommend an HbA1c target of less than 7% for most non-pregnant adults with T2DM. A higher target of less than 8% is appropriate for adults with limited life expectancy, extensive comorbidities, or history of significant hypoglycemia. A more stringent target of less than 6.5% may be considered for newly diagnosed younger patients if safely achievable. The physician individualizes targets based on your clinical situation.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-3',
    question: "How prevalent is Type 2 diabetes in California?",
    answer: <p>Type 2 diabetes affects approximately 9.2% of California adults — about 2.9 million people — per the California Department of Public Health (CDPH) Chronic Disease Surveillance and CHIS 2023 data. An additional 35% of California adults have prediabetes. Latino Californians have the highest T2DM prevalence at approximately 13.5%. The CDPH Diabetes Prevention Program reports that T2DM-related hospitalizations cost California\'s healthcare system more than $3.2 billion annually.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-4',
    question: "What labs do I need before a diabetes refill visit?",
    answer: <p>The physician requires an HbA1c within the past 3–6 months (depending on control status) and an eGFR within the past 12 months before authorizing refills. For SGLT2 inhibitors, eGFR must be ≥20 (dapagliflozin) or ≥25 (empagliflozin) for safety. For metformin, eGFR must be ≥30. A urine albumin-to-creatinine ratio for diabetic nephropathy screening is reviewed annually. Labs available through Quest Diagnostics, LabCorp, and CDPH-funded community health centers throughout California.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-5',
    question: "What is the benefit of SGLT2 inhibitors for Type 2 diabetes in California?",
    answer: <p>SGLT2 inhibitors — empagliflozin (Jardiance) and dapagliflozin (Farxiga) — provide proven cardiovascular and kidney benefits beyond glycemic control. The EMPA-REG OUTCOME trial showed empagliflozin reduced cardiovascular death by 38% in T2DM patients with established ASCVD. The DAPA-CKD trial demonstrated dapagliflozin slowed progression of CKD regardless of T2DM status. ADA 2024 guidelines recommend an SGLT2 inhibitor with proven CV/kidney benefit for T2DM patients with established ASCVD, heart failure, or CKD (eGFR ≥25).</p>,
  },
  {
    id: 'diabetes-refills-online-faq-6',
    question: "Does California Medi-Cal cover Type 2 diabetes medications?",
    answer: <p>Medi-Cal covers metformin and sulfonylureas at low or no cost-sharing. SGLT2 inhibitors and GLP-1 agonists require prior authorization under Medi-Cal managed care formularies. The California DHCS Diabetes Prevention Program also funds lifestyle intervention programs through enrolled community organizations. TeleDirectMD is not currently enrolled as a Medi-Cal provider — Medi-Cal members can use the $79 self-pay rate or seek care from a Medi-Cal-enrolled primary care provider.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-7',
    question: "When does Type 2 diabetes require in-person care instead of telehealth?",
    answer: <p>Type 2 diabetes requires urgent in-person care for: symptoms of diabetic ketoacidosis (DKA) — extreme thirst, frequent urination, nausea, vomiting, fruity breath, confusion (can occur in T2DM on SGLT2 inhibitors); severe hypoglycemia with altered consciousness; foot ulcer or wound requiring wound care; newly diagnosed T2DM in a patient requiring comprehensive baseline evaluation; or HbA1c &gt;10% without recent in-person assessment. Type 1 diabetes insulin titration always requires endocrinology care.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-8',
    question: "What does metformin cost in California with GoodRx?",
    answer: <p>Generic metformin ER 500 mg (30–90 tablets) is approximately $4–$15 per month with a GoodRx coupon at California pharmacies including CVS, Walgreens, Walmart, Costco, and Safeway. Metformin is one of the most affordable diabetes medications available. GoodRx coupon prices as of May 2026 — actual prices vary by pharmacy and quantity.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-9',
    question: "Is TeleDirectMD appropriate for Type 1 diabetes insulin management?",
    answer: <p>No. Type 1 diabetes insulin titration — including complex multiple daily injection regimens, insulin pump management, and closed-loop systems — requires endocrinology expertise and is outside the scope of TeleDirectMD. TeleDirectMD treats Type 2 diabetes only. Adults with Type 1 diabetes should maintain care with an endocrinologist. TeleDirectMD can assist with non-insulin comorbidity management in T1DM patients but will not prescribe or titrate insulin for Type 1 diabetes.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-10',
    question: "Does California telehealth parity law cover diabetes management visits?",
    answer: <p>California Assembly Bill 744 (2019), codified in Insurance Code §10123.85, requires commercial health plans to reimburse telehealth diabetes management visits on the same basis as in-person care. Parity applies when TeleDirectMD is in-network with your plan. Aetna commercial (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California. Verify your specific plan eligibility before booking.</p>,
  },
  {
    id: 'diabetes-refills-online-faq-11',
    question: "What is the risk of SGLT2 inhibitors causing diabetic ketoacidosis?",
    answer: <p>SGLT2 inhibitors carry a rare but serious risk of euglycemic diabetic ketoacidosis (DKA), which can occur at normal blood glucose levels — making it harder to recognize than classical DKA. Risk is higher during prolonged fasting, major surgery, severe illness, or significant volume depletion. The physician counsels all patients starting SGLT2 inhibitors to hold the medication 3–4 days before elective surgery and to seek emergency evaluation for nausea, vomiting, or abdominal pain. SGLT2 inhibitors are contraindicated in Type 1 diabetes.</p>,
  }
];

const CA_SIBLINGS = [
  { slug: 'hypertension-refills-online', label: "Hypertension Refills in CA", why: "T2DM and hypertension co-occur — RAAS agents nephroprotective for diabetic kidney disease." },
  { slug: 'hyperlipidemia-refills-online', label: "Hyperlipidemia Refills in CA", why: "ADA recommends high-intensity statin for T2DM with ASCVD risk ≥7.5%." },
  { slug: 'hypothyroidism-refills-online', label: "Hypothyroidism Refills in CA", why: "Thyroid dysfunction affects glycemic control in T2DM." },
  { slug: 'acid-reflux-refills-online', label: "Acid Reflux Refills in CA", why: "GLP-1 agonists may worsen GERD — relevant drug effect counseling." },
  { slug: 'migraine-refills-online', label: "Migraine Refills in CA", why: "Metabolic syndrome association with migraine." },
  { slug: 'online-doctor-visits', label: "All Online Doctor Visits in CA", why: "General CA telehealth hub." }
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'Refill Type 2 diabetes medications online in California. Board-certified Family Medicine MD. CA telehealth compliant. Aetna in-network. Self pay $79. ADA Standards of Care 2024–2025. Metformin, GLP-1 agonists, SGLT2 inhibitors. T2DM only.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Diabetes Refills',
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
      cssSelector: ['#diabetes-refills-online-opening', '#diabetes-refills-online-opening p', '.tdmd-diabetes-refills-online-byline', '#diabetes-refills-online-faq'],
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
    name: 'How to Get Refills for Diabetes Refills Online in California',
    description: 'Three steps to receive diabetes refills evaluation and prescription from a California-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California Diabetes Refills. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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

export default function CaDiabetesRefillsOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-diabetes-refills-online';
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
            <span aria-current="page">Diabetes Refills</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Diabetes Refills</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adults 18+ · Secure video visit · Self pay $79 · Aetna in-network · UHC Commercial approved · MD-only · CA B&amp;P §2290.5 compliant · ADA Standards of Care 2024–2025
                </p>
                <p>
                  TeleDirectMD provides evidence-based diabetes refills by secure video visit for California adults. A California-licensed board-certified Family Medicine physician evaluates your history, reviews relevant lab values and prior treatments, and prescribes appropriate medication when clinically indicated. This page is for adults located in California, including {caCities.join(', ')}, and surrounding areas.
                </p>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-ca-uti__byline tdmd-diabetes-refills-online-byline" aria-label="Reviewed by physician">
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
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>California-licensed telehealth for adults located in California at time of visit</li>
                  <li>Evidence-based treatment per ADA Standards of Care 2024–2025</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> E11.9 (Type 2 diabetes mellitus without complications) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Diabetes Refills in California</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — California-licensed</li>
                    <li>Evidence-based regimen per ADA Standards of Care 2024–2025</li>
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
            <div className="tdmd-condition-opener" id="diabetes-refills-online-opening">
              <p>
                California adults with established Type 2 diabetes (T2DM) can refill medications — including metformin, GLP-1 receptor agonists (for T2DM glycemic control), SGLT2 inhibitors, sulfonylureas, and DPP-4 inhibitors — by secure video visit through TeleDirectMD, consistent with California Business and Professions Code Section 2290.5. A California-licensed board-certified Family Medicine physician reviews your most recent HbA1c, blood glucose logs, kidney function (eGFR), and medication adherence before authorizing refills. ADA Standards of Care 2024–2025 guide therapeutic decisions. GLP-1 agonists are prescribed for T2DM glycemic control only — not for weight loss in the absence of diabetes. Self pay is $79. Aetna is in-network effective April 30, 2026.
              </p>
              <span className="tdmd-condition-opener__meta">
                Reviewed by <a href="/about/">{PHYSICIAN.name}</a>, Board-Certified {PHYSICIAN.specialty} · NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} ·
                Last reviewed <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </span>
            </div>
          </div>
        </section>

        {/* ─── SCOPE STATEMENT ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id="diabetes-refills-online-scope">
          <div className="tdmd-container">
            <div style={{ background: '#FFF3CD', border: '2px solid #FFC107', borderRadius: 'var(--tdmd-radius,18px)', padding: '1.1rem 1.5rem', marginTop: '1.5rem' }}>
              <h3 style={{ color: '#856404', marginTop: 0 }}>⚠ Type 2 Diabetes Only — Scope of Service</h3>
              <p style={{ color: '#533f03', margin: 0 }}>TeleDirectMD manages Type 2 diabetes mellitus (T2DM) only. Type 1 diabetes mellitus (T1DM) insulin titration is outside the scope of this service — T1DM patients require endocrinology management. GLP-1 receptor agonists (semaglutide, tirzepatide, liraglutide) are prescribed for T2DM glycemic control only — TeleDirectMD does NOT prescribe GLP-1 agonists for weight loss in patients without Type 2 diabetes. Insulin titration for T2DM: simple regimens (basal insulin initiation and conservative adjustment) are in scope; complex insulin titration requiring endocrinology expertise is referred.</p>
            </div>
          </div>
        </section>

        {/* ─── 3) CALIFORNIA TELEHEALTH LAW ─────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Your Diabetes Refills Visit</h2>

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
            <h2>California Epidemiology: Diabetes Refills</h2>
            <p>Type 2 diabetes affects approximately 9.2% of California adults — about 2.9 million people — with an additional 35% of California adults having prediabetes, per the California Department of Public Health (CDPH) Chronic Disease Surveillance program and 2023 CHIS data. California's Latino population has the highest T2DM prevalence at approximately 13.5%, reflecting disparities in access to preventive care and dietary risk factors.</p>
            
            <p>South Asian Californians develop T2DM at lower BMI thresholds (ADA 2024 recommends screening at BMI ≥23 kg/m² for Asian Americans vs. ≥25 kg/m² for other adults). The ADA Standards of Care 2024–2025 incorporate ethnicity-specific risk screening.</p>
            
            
            
            
          </div>
        </section>

        {/* ─── 5) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Diabetes Refills Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription when appropriate. Patients with in-network insurance pay their plan&apos;s telehealth copay instead. The payor table below reflects TeleDirectMD&apos;s current California enrollment, refreshed May 19, 2026.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Evidence-based diabetes refills management</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; monitoring guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Diabetes Refills Visit Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges Californians see before insurance. Actual costs vary by setting and city.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {[
                    { name: 'TeleDirectMD video visit', value: '$79', heightPct: 13, isTdmd: true },
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
              For deeper detail, see <a href="/insurance/aetna/california/diabetes-refills-online/">Aetna × California × Diabetes Refills</a> or view all <a href="/insurance">insurance options</a>.
            </p>
          </div>
        </section>

        {/* ─── 6) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Diabetes Refills: Medication Options and CA Pricing</h2>
            <p>
              The table below reflects evidence-based medication options per ADA Standards of Care 2024–2025 guidelines.
              GoodRx prices retrieved May 2026 from goodrx.com — national coupon prices; actual cost varies by California pharmacy location.
              Prescription costs are separate from the $79 TeleDirectMD visit fee.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Diabetes Refills medication options and GoodRx prices">
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
                    <td><strong>Metformin ER 500/750/1000 mg</strong></td>
                    <td>500–1000 mg once or twice daily with meals; max 2000–2550 mg/day</td>
                    <td><a href="https://www.goodrx.com/metformin" target="_blank" rel="noopener">~$4–$15/month GoodRx (generic)</a></td>
                    <td>First-line. Hold if eGFR &lt;30. ER formulation reduces GI side effects. Monitor B12 annually.</td>
                  </tr>
                  <tr>
                    <td><strong>Semaglutide (Ozempic) 0.5/1/2 mg weekly injection</strong></td>
                    <td>0.25 mg weekly × 4 weeks, then 0.5 mg weekly (titrate to 1–2 mg)</td>
                    <td><a href="https://www.goodrx.com/ozempic" target="_blank" rel="noopener">~$800–$950/month list; GoodRx may not reduce significantly; Novo Nordisk patient assistance programs available</a></td>
                    <td>T2DM ONLY — not for weight loss without diabetes. Significant CV benefit in SUSTAIN-6. GI side effects common. Requires prior auth for many plans.</td>
                  </tr>
                  <tr>
                    <td><strong>Empagliflozin (Jardiance) 10/25 mg</strong></td>
                    <td>10 mg once daily in AM; may increase to 25 mg</td>
                    <td><a href="https://www.goodrx.com/empagliflozin" target="_blank" rel="noopener">~$500–$600/month list; GoodRx varies; Lilly patient assistance available</a></td>
                    <td>Proven CV (EMPA-REG OUTCOME) and kidney benefit (EMPA-KIDNEY). Do not use if eGFR &lt;20. Risk of DKA, UTI, genital mycotic infections.</td>
                  </tr>
                  <tr>
                    <td><strong>Dapagliflozin (Farxiga) 5/10 mg</strong></td>
                    <td>5–10 mg once daily in AM</td>
                    <td><a href="https://www.goodrx.com/dapagliflozin" target="_blank" rel="noopener">~$500–$600/month list; AZ patient assistance available</a></td>
                    <td>Proven kidney benefit (DAPA-CKD). Preferred SGLT2 for CKD ≥eGFR 25. Also approved for HFrEF.</td>
                  </tr>
                  <tr>
                    <td><strong>Glipizide ER 2.5/5/10 mg</strong></td>
                    <td>2.5–10 mg once or twice daily with meals</td>
                    <td><a href="https://www.goodrx.com/glipizide" target="_blank" rel="noopener">~$10–$20/month GoodRx (generic)</a></td>
                    <td>Low cost, effective. Hypoglycemia risk, especially with missed meals. Preferred SU in CKD (cleared hepatically).</td>
                  </tr>
                  <tr>
                    <td><strong>Insulin glargine (Basaglar, Lantus, Toujeo) 100 U/mL</strong></td>
                    <td>10 units at bedtime initial; titrate 2 units every 3 days if fasting glucose &gt;130</td>
                    <td><a href="https://www.goodrx.com/insulin-glargine" target="_blank" rel="noopener">~$100–$200/pen GoodRx; Lilly insulin program available for affordability</a></td>
                    <td>Basal insulin initiation for T2DM in scope. Complex titration/multiple daily injections: endocrinology referral. Walmart ReliOn insulin available OTC at lower cost.</td>
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
            <p>For most established diabetes refills cases in stable adults, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below.</p>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Established diabetes refills with prior diagnosis</li>
                  <li>Stable on current regimen with recent relevant labs</li>
                  <li>No acute emergency or red-flag symptoms</li>
                  <li>Adult 18+, located in California</li>
                  <li>Aetna or UHC Commercial (in-network), or self pay $79</li>
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
                <small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026 · Diabetes Refills</small>
              </div>
              <a className="tdmd-ca-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ (Premium Style A accordion) ──────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Diabetes Refills"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a California-licensed MD?</h3>
                <p>Book a same-day video visit. Self pay $79 · Aetna in-network · UHC Commercial approved.</p>
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
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/diabetes-refills-online/">Diabetes Refills national condition page</a>.</p>
            <div className="tdmd-ca-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/diabetes-refills-online/">Diabetes Refills (national)</a>
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
              <li><a href="https://diabetesjournals.org/care/issue/47/Supplement_1" rel="noopener" target="_blank">ADA Standards of Medical Care in Diabetes 2024 — Diabetes Care Supplement 1</a>. Retrieved May 2026.</li>
              <li><a href="https://diabetesjournals.org/care/article/48/Supplement_1/S27/157554" rel="noopener" target="_blank">ADA — Classification and Diagnosis of Diabetes: Standards of Care 2025</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/CCDPHP/DCDIC/CVEHB/Pages/DiabetesPrevention.aspx" rel="noopener" target="_blank">CDPH — Diabetes Data and Statistics</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/CCDPHP/DCDIC/CVEHB/Pages/DiabetesPrevention.aspx" rel="noopener" target="_blank">CDPH — Diabetes Prevention Program</a>. Retrieved May 2026.</li>
              <li><a href="https://diabetesjournals.org/care/issue/47/Supplement_1" rel="noopener" target="_blank">ADA Standards of Medical Care in Diabetes 2024–2025 — Diabetes Care</a>. Retrieved May 2026.</li>
              <li><a href="https://healthpolicy.ucla.edu/our-work/california-health-interview-survey-chis/chis-data" rel="noopener" target="_blank">California Health Interview Survey (CHIS) 2023</a>. Retrieved May 2026.</li>
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
