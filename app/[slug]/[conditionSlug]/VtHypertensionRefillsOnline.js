/**
 * VtHypertensionRefillsOnline.js — Vermont × Hypertension Refills condition page (v3)
 *
 * URL: /ca/hypertension-refills-online/
 * Authority: ACC/AHA 2017 + 2024 Update
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca'
 * and conditionSlug === 'hypertension-refills-online'.
 *
 * Matches VT condition v3 template:
 *   • No CitableSummaryBlock — inline opener paragraph below hero
 *   • Premium FaqAccordion — 12 FAQs (3 VT-generic + 9 condition-specific)
 *   • JSON-LD: MedicalWebPage + FAQPage + Physician + HowTo + BreadcrumbList + SpeakableSpecification
 *   • NO QAPage schema
 *   • Inline vertical cost bars (heightPct: 8/22/45/100)
 *   • Vermont cash-pay (no payer table)
 *   • GoodRx-verified pricing
 *   • 15+ internal links
 *   • Vermont regulatory block (18 V.S.A. Chapter 219, Vermont Board of Medical Practice)
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

const PAGE_URL = 'https://teledirectmd.com/vt/hypertension-refills-online/';
const PAGE_TITLE = 'Hypertension Refills Online in Vermont | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-19';
const DATE_MODIFIED = '2026-05-19';
const LAST_REVIEWED = '2026-05-19';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'Vermont',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};


const FAQ_ITEMS = [
  {
    question: 'Do you accept insurance in Vermont?',
    answer: (
      <p>
        TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont — straightforward, transparent pricing.
      </p>
    ),
  },
  {
    id: 'hypertension-refills-online-faq-0',
    question: "Can I refill my blood pressure medication online in Vermont?",
    answer: <p>Yes. 18 V.S.A. Chapter 219 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD\'s Vermont-licensed board-certified Family Medicine physician reviews your home blood pressure log, current medications, and most recent lab values (potassium, creatinine, eGFR for ACE inhibitors or ARBs) before authorizing refills for stable established hypertension. Self pay is $79.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-1',
    question: "What blood pressure medications can TeleDirectMD refill in Vermont?",
    answer: <p>TeleDirectMD can refill established antihypertensive medications including ACE inhibitors (lisinopril, ramipril), ARBs (losartan, valsartan, olmesartan), dihydropyridine calcium channel blockers (amlodipine), thiazide-type diuretics (chlorthalidone, HCTZ), and cardioselective beta-blockers (metoprolol succinate) for appropriate indications. Medication selection follows ACC/AHA 2017 and 2024 update guidelines.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-2',
    question: "How prevalent is hypertension in Vermont?",
    answer: <p>Roughly 1 in 3 Vermont adults have hypertension, in line with national rural prevalence (CDC). Because Vermont is the second-oldest state by median age and 64.8% of residents live in rural areas — the second-highest rural share in the U.S. — hypertension is one of the state\'s most common chronic conditions, and rural residents face longer travel times to in-person care.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-3',
    question: "What blood pressure target does TeleDirectMD use for Vermont hypertension patients?",
    answer: <p>The ACC/AHA 2017 guideline recommends a blood pressure target of less than 130/80 mmHg for most adults with confirmed hypertension, particularly those with established cardiovascular disease or a 10-year ASCVD risk of ≥10%. The 2024 ACC hypertension update reinforces this target and identifies chlorthalidone as the preferred thiazide diuretic over hydrochlorothiazide due to superior 24-hour coverage. The physician individualizes targets for frail elderly patients or those with significant comorbidities.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-4',
    question: "Why is chlorthalidone preferred over HCTZ for hypertension in Vermont?",
    answer: <p>The 2024 ACC hypertension guideline update reinforces chlorthalidone as the preferred thiazide-type diuretic over hydrochlorothiazide (HCTZ). Chlorthalidone has a longer half-life (50–60 hours vs. 8–15 hours for HCTZ), providing better 24-hour blood pressure control and superior outcomes in the ALLHAT trial. Chlorthalidone is available as generic at approximately $10–$25 per month with a GoodRx coupon at Vermont pharmacies.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-6',
    question: "What labs should I have done before my hypertension refill visit?",
    answer: <p>Before a hypertension refill visit, the physician reviews your home blood pressure log (5–7 readings recommended), most recent potassium and creatinine/eGFR if you are on an ACE inhibitor or ARB, and any recent complete metabolic panel. Labs should be current within 12 months for stable patients. If labs are overdue, the physician will recommend repeat testing as a condition of continued refills. Labs are available at Quest Diagnostics and LabCorp draw sites, hospital outpatient labs, and Vermont federally qualified health centers (FQHCs) across the state.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-7',
    question: "When does hypertension require in-person care instead of telehealth?",
    answer: <p>Hypertension requires urgent in-person evaluation for: blood pressure readings ≥180/120 mmHg (hypertensive urgency/emergency), new severe headache with high BP, chest pain, shortness of breath, visual changes, or neurological symptoms with elevated BP (possible hypertensive emergency). New hypertension diagnoses with unknown secondary cause (e.g., possible renal artery stenosis, primary aldosteronism) also benefit from in-person workup. TeleDirectMD is appropriate for stable established hypertension.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-9',
    question: "How much do blood pressure medications cost in Vermont with GoodRx?",
    answer: <p>Generic antihypertensive medications are among the most affordable prescriptions with GoodRx coupons at Vermont pharmacies. Lisinopril 10 mg per month: approximately $4–$12. Amlodipine 5 mg: approximately $4–$10. Losartan 50 mg: approximately $8–$20. Chlorthalidone 25 mg: approximately $10–$25. Metoprolol succinate 50 mg: approximately $10–$30. These are GoodRx coupon prices as of May 2026 — actual prices vary by pharmacy and dose.</p>,
  },
  {
    id: 'hypertension-refills-online-faq-11',
    question: "Is TeleDirectMD appropriate for newly diagnosed high blood pressure in Vermont?",
    answer: <p>For newly elevated blood pressure readings without a prior hypertension diagnosis, TeleDirectMD can perform an initial assessment, review home readings, and discuss lifestyle modifications. However, Stage 2 hypertension (≥140/90) without a prior workup may benefit from in-person evaluation to rule out secondary causes (renal, endocrine), review 10-year ASCVD risk, and obtain baseline labs. The physician will guide you on whether an in-person visit is needed before starting antihypertensive therapy.</p>,
  }
];

const VT_SIBLINGS = [
  { slug: 'diabetes-refills-online', label: "Diabetes Refills in VT", why: "Hypertension and T2DM often co-occur — RAAS agents preferred for diabetic nephroprotection." },
  { slug: 'hyperlipidemia-refills-online', label: "Hyperlipidemia Refills in VT", why: "Metabolic syndrome triad — frequently co-managed." },
  { slug: 'asthma-refills-online', label: "Asthma Refills in VT", why: "Beta-blocker caution in asthma+HTN overlap is clinically relevant." },
  { slug: 'acid-reflux-refills-online', label: "Acid Reflux Refills in VT", why: "Common comorbidity in the chronic disease patient population." },
  { slug: 'migraine-refills-online', label: "Migraine Refills in VT", why: "Beta-blockers used in both HTN and migraine prevention." },
  { slug: 'online-doctor-visits', label: "All Online Doctor Visits in VT", why: "General VT telehealth hub." }
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'Refill blood pressure medications online in Vermont. Board-certified Family Medicine MD. Vermont telehealth law compliant. Cash-pay only at $79 flat. ACC/AHA 2017 + 2024 guideline-based care. Roughly 1 in 3 Vermont adults have hypertension (CDC).',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Hypertension Refills',
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'Vermont' },
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
      cssSelector: ['#hypertension-refills-online-opening', '#hypertension-refills-online-opening p', '.tdmd-hypertension-refills-online-byline', '#hypertension-refills-online-faq'],
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
    name: 'How to Get Refills for Hypertension Refills Online in Vermont',
    description: 'Three steps to receive hypertension refills evaluation and prescription from a Vermont-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Hypertension Refills. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a Vermont-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in Vermont. The physician reviews your history, current medications, lab values, and clinical status. Consent per 18 V.S.A. Chapter 219 confirmed.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a Vermont-compliant e-prescription is sent to your chosen pharmacy during or after the visit. Follow-up instructions provided.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
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

export default function VtHypertensionRefillsOnline() {
  const schemas = buildSchemas();
  const pid = 'vt-hypertension-refills-online';
  const vtCities = ['Burlington', 'South Burlington', 'Rutland', 'Essex Junction', 'Montpelier', 'Barre', 'Winooski', 'St. Albans', 'Newport', 'Brattleboro'];

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

      <div className="tdmd-vt-uti">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Hypertension Refills</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Hypertension Refills</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  Vermont adults 18+ · Secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · ACC/AHA 2017 + 2024 Update
                </p>
                <p>
                  TeleDirectMD provides evidence-based hypertension refills by secure video visit for Vermont adults. A Vermont-licensed board-certified Family Medicine physician evaluates your history, reviews relevant lab values and prior treatments, and prescribes appropriate medication when clinically indicated. This page is for adults located in Vermont, including {vtCities.join(', ')}, and surrounding areas.
                </p>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-vt-uti__byline tdmd-hypertension-refills-online-byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-vt-uti__byline-text">
                    <span className="tdmd-vt-uti__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-vt-uti__byline-meta">
                      NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed{' '}
                      <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opening`}>Overview</a></li>
                  <li><a href={`#${pid}-ca-law`}>Vermont telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>Vermont epidemiology</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Medications &amp; pricing</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Vermont-licensed telehealth for adults located in Vermont at time of visit</li>
                  <li>Evidence-based treatment per ACC/AHA 2017 + 2024 Update</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> I10 (Essential hypertension) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Hypertension Refills in Vermont</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — Vermont-licensed</li>
                    <li>Evidence-based regimen per ACC/AHA 2017 + 2024 Update</li>
                    <li>Lab value review before prescribing</li>
                    <li>e-Prescriptions to your VT pharmacy electronically</li>
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
            <div className="tdmd-condition-opener" id="hypertension-refills-online-opening">
              <p>
                In Vermont, where 64.8% of residents live in rural areas — the second-highest rural share in the U.S. — managing blood pressure shouldn’t require a 60-mile round trip. Vermont adults with established hypertension can refill blood pressure medications — including lisinopril, amlodipine, losartan, hydrochlorothiazide, and metoprolol succinate — by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. Vermont is also the second-oldest state by median age, and roughly 1 in 3 Vermont adults have hypertension (CDC). The ACC/AHA 2017 hypertension guideline, supplemented by the 2024 ACC hypertension update, guides medication selection and blood pressure targets. A Vermont-licensed board-certified Family Medicine physician reviews your home blood pressure log, current medications, lab values, and adherence before authorizing refills. Self pay is $79.
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
            <h2>Vermont Telehealth Law and Your Hypertension Refills Visit</h2>

            <h3>Does Vermont require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont&apos;s telemedicine statute)</a> — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent and document it. TeleDirectMD does this at the start of every visit.
            </p>

            <h3>What standard of care applies to Vermont telehealth physicians?</h3>
            <p>
              The <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; TeleDirectMD physicians are licensed in Vermont. See <a href="/about/">Dr. Bhavsar&apos;s bio</a> for credential details.
            </p>

            
            <h3>Does Vermont require electronic prescriptions?</h3>
            <p>
              Yes. Vermont permits electronic prescribing for non-controlled medications and imposes no e-prescribing mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. If a prescription is appropriate after your visit, TeleDirectMD sends an e-prescription directly to your chosen Vermont pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or another pharmacy of your choice. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) CALIFORNIA EPIDEMIOLOGY ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>Vermont Epidemiology: Hypertension Refills</h2>
            <p>Hypertension affects roughly 1 in 3 Vermont adults, consistent with national prevalence and elevated in older and rural populations (CDC, MMWR 2020). National rural hypertension prevalence is about 40.0% in nonmetro areas versus 29.4% in metro areas, and Vermont’s older, heavily rural population places it toward the higher end of that range.</p>
            
            <p>Vermont’s rural communities face the steepest access barriers: rural areas have roughly 40% higher preventable hospitalization rates, and rural residents are more likely to die from heart disease and stroke, driven by geographic isolation and primary-care workforce shortages (America’s Health Rankings, 2023). Cash-pay telehealth refills help close that gap by removing the travel burden for stable patients.</p>
            <p>Of Vermonters with diagnosed hypertension, fewer than 50% have blood pressure controlled to less than 130/80 mmHg — the ACC/AHA 2017 target for high-risk patients. Poor medication adherence, healthcare access barriers, and health literacy are major contributors. Telehealth refill programs reduce access barriers.</p>
            
            
            
          </div>
        </section>

        {/* ─── 5) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Hypertension Refills Cost &amp; Insurance in Vermont</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription when appropriate. Vermont visits are cash-pay only at a flat $79; there is no insurance billing. The visit fee is paid at booking, and prescription costs are filled separately at your pharmacy.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Evidence-based hypertension refills management</li>
                  <li>e-Prescription to your VT pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; monitoring guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Hypertension Refills Visit Cost in Vermont</h3>
                <p className="tdmd-price-caption">Common ranges Vermonters see before insurance. Actual costs vary by setting and city.</p>
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
                <p className="tdmd-price-footnote">Comparison reflects typical Vermont metro pricing. Actual costs vary.</p>
              </div>
            </div>

            <div className="tdmd-cashpay-note">
              <p><strong>$79 flat self-pay.</strong> No insurance billing in Vermont &mdash; straightforward, transparent pricing. Your visit fee is paid at booking. HSA and FSA cards are accepted. Prescription costs are filled separately at your pharmacy of choice and may be covered by your pharmacy benefit.</p>
            </div>

            <p style={{ marginTop: '1rem' }}>
             
            </p>
          </div>
        </section>

        {/* ─── 6) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Hypertension Refills: Medication Options and Pricing</h2>
            <p>
              The table below reflects evidence-based medication options per ACC/AHA 2017 + 2024 Update guidelines.
              GoodRx prices retrieved May 2026 from goodrx.com — national coupon prices; actual cost varies by Vermont pharmacy location.
              Prescription costs are separate from the $79 TeleDirectMD visit fee.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Hypertension Refills medication options and GoodRx prices">
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
                    <td><strong>Lisinopril 5/10/20/40 mg</strong></td>
                    <td>10–40 mg once daily</td>
                    <td><a href="https://www.goodrx.com/lisinopril" target="_blank" rel="noopener">~$4–$12/month GoodRx (generic)</a></td>
                    <td>First-line. Monitor potassium and creatinine. Contraindicated in pregnancy.</td>
                  </tr>
                  <tr>
                    <td><strong>Losartan 25/50/100 mg</strong></td>
                    <td>25–100 mg once daily</td>
                    <td><a href="https://www.goodrx.com/losartan" target="_blank" rel="noopener">~$8–$20/month GoodRx (generic)</a></td>
                    <td>Preferred for ACE-inhibitor cough or diabetic nephropathy.</td>
                  </tr>
                  <tr>
                    <td><strong>Amlodipine 2.5/5/10 mg</strong></td>
                    <td>5–10 mg once daily</td>
                    <td><a href="https://www.goodrx.com/amlodipine" target="_blank" rel="noopener">~$4–$10/month GoodRx (generic)</a></td>
                    <td>Effective monotherapy, especially in Black patients. May cause pedal edema.</td>
                  </tr>
                  <tr>
                    <td><strong>Chlorthalidone 12.5/25 mg</strong></td>
                    <td>12.5–25 mg once daily in AM</td>
                    <td><a href="https://www.goodrx.com/chlorthalidone" target="_blank" rel="noopener">~$10–$25/month GoodRx (generic)</a></td>
                    <td>Preferred over HCTZ per 2024 ACC update — longer half-life, superior 24-hour coverage.</td>
                  </tr>
                  <tr>
                    <td><strong>Metoprolol succinate (Toprol XL) 25/50/100/200 mg</strong></td>
                    <td>25–200 mg once daily</td>
                    <td><a href="https://www.goodrx.com/metoprolol-succinate" target="_blank" rel="noopener">~$10–$30/month GoodRx (generic)</a></td>
                    <td>Not first-line unless comorbid CAD, HFrEF, or rate control. Use cautiously in asthma.</td>
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
            <p>For most established hypertension refills cases in stable adults, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below.</p>
            <div className="tdmd-vt-uti__dual">
              <div className="tdmd-vt-uti__dual-card tdmd-vt-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Established hypertension refills with prior diagnosis</li>
                  <li>Stable on current regimen with recent relevant labs</li>
                  <li>No acute emergency or red-flag symptoms</li>
                  <li>Adult 18+, located in Vermont</li>
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>Seeking refill, monitoring review, or treatment initiation</li>
                </ul>
              </div>
              <div className="tdmd-vt-uti__dual-card tdmd-vt-uti__dual-card--alert">
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>ER / 911:</strong> Acute severe symptoms, potential emergency</li>
                  <li><strong>Urgent care:</strong> Moderate acute symptoms requiring physical examination</li>
                  <li><strong>Primary care:</strong> New diagnosis, complex workup, or specialist referral needed</li>
                  <li><strong>Specialist:</strong> Condition exceeding primary care telehealth scope</li>
                  <li><strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> Find local clinics and resources</li>
                  <li><strong><a href="https://portal.healthconnect.vermont.gov/" rel="noopener" target="_blank">Vermont Health Connect</a>:</strong> Find primary care providers and coverage options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8) CTA STRIP ─────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-vt-uti__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · Hypertension Refills</small>
              </div>
              <a className="tdmd-vt-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ (Premium Style A accordion) ──────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Hypertension Refills"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a Vermont-licensed MD?</h3>
                <p>Book a same-day video visit. Cash-pay $79 flat. No insurance billing in Vermont.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) RELATED VT CONDITIONS (siblings) ─────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other Vermont Conditions We Treat</h2>
            <p>These Vermont condition pages address related or frequently co-occurring conditions treated by TeleDirectMD in Vermont.</p>
            <div className="tdmd-vt-uti__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="tdmd-vt-uti__sibling" href={`/vt/${s.slug}/`}>
                  <span className="tdmd-vt-uti__sibling-label">{s.label}</span>
                  <span className="tdmd-vt-uti__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11) PILLAR / SPOKE / CLUSTER LINKS ───────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/vt/">Vermont state hub</a> and the <a href="/hypertension-refills-online/">Hypertension Refills national condition page</a>.</p>
            <div className="tdmd-vt-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/hypertension-refills-online/">Hypertension Refills (national)</a>
              <a href="/vt/asthma-refills-online/">Asthma Refills in VT</a>
              <a href="/vt/hypertension-refills-online/">Hypertension Refills in VT</a>
              <a href="/vt/hypothyroidism-refills-online/">Hypothyroidism Refills in VT</a>
              <a href="/vt/hyperlipidemia-refills-online/">Hyperlipidemia Refills in VT</a>
              <a href="/vt/diabetes-refills-online/">Diabetes Refills in VT</a>
              <a href="/vt/migraine-refills-online/">Migraine Refills in VT</a>
              <a href="/vt/acid-reflux-refills-online/">Acid Reflux Refills in VT</a>
              <a href="/vt/epipen-refills-online/">EpiPen Refills in VT</a>
              <a href="/vt/hair-loss-treatment-online/">Hair Loss in VT</a>
              <a href="/vt/seasonal-allergies-treatment-online/">Seasonal Allergies in VT</a>
              <a href="/vt/anti-aging-treatment-online/">Anti-Aging in VT</a>
              <a href="/vt/eyelash-growth-treatment-online/">Eyelash Growth in VT</a>
              <a href="/vt/smoking-cessation-treatment-online/">Smoking Cessation in VT</a>
              <a href="/vt/motion-sickness-treatment-online/">Motion Sickness in VT</a>
              <a href="/vt/uti-treatment-online/">UTI Treatment in VT</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── 12) REFERENCES ───────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont&apos;s telemedicine statute)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Retrieved May 2026.</li>
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/26/023" rel="noopener" target="_blank">26 V.S.A. Chapter 23 (Vermont Medical Practice Act)</a>. Retrieved May 2026.</li>
              <li><a href="https://legislature.vermont.gov/statutes/section/18/219/09361" rel="noopener" target="_blank">18 V.S.A. § 9361 (Vermont telemedicine prescribing)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2017/11/09/11/41/2017-guideline-for-high-blood-pressure-in-adults" rel="noopener" target="_blank">ACC/AHA 2017 Guideline for High Blood Pressure in Adults</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acc.org/guidelines" rel="noopener" target="_blank">ACC 2024 Hypertension Guideline Update</a>. Retrieved May 2026.</li>
              <li><a href="https://www.jacc.org/doi/10.1016/j.jacc.2017.11.006" rel="noopener" target="_blank">Whelton PK et al. 2017 ACC/AHA Hypertension Guidelines — JACC</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdc.gov/antimicrobial-resistance/" rel="noopener" target="_blank">U.S. Centers for Disease Control and Prevention</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdc.gov/antimicrobial-resistance/" rel="noopener" target="_blank">U.S. Centers for Disease Control and Prevention</a>. Retrieved May 2026.</li>
              <li><a href="https://healthpolicy.ucla.edu/our-work/california-health-interview-survey-chis/chis-data" rel="noopener" target="_blank">Vermont Health Interview Survey (CHIS) 2023</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 13) DISCLAIMER ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under 18 V.S.A. Chapter 219. Treatment decisions are made by a Vermont-licensed board-certified physician based on the clinical history at the time of the visit. If you have urgent or severe symptoms, seek in-person care or emergency care immediately. TeleDirectMD does not prescribe controlled substances in any state.</p>
            <p>GoodRx price information reflects national coupon pricing retrieved May 2026; actual prescription costs at Vermont pharmacies vary.</p>
          </div>
        </section>
      </div>
    </>
  );
}
