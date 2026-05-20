/**
 * CaAsthmaRefillsOnline.js — California × Asthma Refills condition page (v3)
 *
 * URL: /ca/asthma-refills-online/
 * Authority: GINA 2024 + NAEPP
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca'
 * and conditionSlug === 'asthma-refills-online'.
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

const PAGE_URL = 'https://teledirectmd.com/ca/asthma-refills-online/';
const PAGE_TITLE = 'Asthma Refills Online in California | TeleDirectMD';
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
    id: 'asthma-refills-online-faq-0',
    question: "Can I refill my asthma inhalers online in California?",
    answer: <p>Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to deliver care and prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD\'s California-licensed board-certified Family Medicine physician reviews your current asthma regimen — including your ICS, ICS+LABA, rescue inhaler usage, and ACT score — and can authorize refills for stable established asthma. Self pay is $49; Aetna commercial plans are in-network effective April 30, 2026.</p>,
  },
  {
    id: 'asthma-refills-online-faq-1',
    question: "What asthma inhalers can TeleDirectMD refill in California?",
    answer: <p>TeleDirectMD can refill established asthma controller regimens including inhaled corticosteroids (ICS) such as fluticasone and budesonide, ICS+LABA combination inhalers such as budesonide/formoterol (Symbicort) and fluticasone/salmeterol (Advair), leukotriene receptor antagonists (montelukast), and albuterol rescue inhalers. The physician reviews GINA 2024 stepwise criteria to confirm the current regimen remains appropriate. Biologic therapies (dupilumab, benralizumab, mepolizumab) require specialist management — TeleDirectMD will facilitate an allergist or pulmonologist referral.</p>,
  },
  {
    id: 'asthma-refills-online-faq-2',
    question: "How does California wildfire smoke affect my asthma refills?",
    answer: <p>California wildfire smoke events significantly increase PM2.5 exposure and drive asthma exacerbations statewide, per the California Air Resources Board. The TeleDirectMD physician reviews recent air quality conditions in your area, the California AQI, and your symptom pattern before authorizing refills. If wildfire smoke has worsened your asthma control, the physician may adjust your step therapy — for example, temporarily increasing ICS dose or adding a course of oral corticosteroids — before renewing the standard regimen.</p>,
  },
  {
    id: 'asthma-refills-online-faq-3',
    question: "Does California Medi-Cal cover asthma controller inhalers?",
    answer: <p>TeleDirectMD is not currently enrolled as a Medi-Cal provider, so Medi-Cal will not cover TeleDirectMD visits. However, Medi-Cal\'s formulary does cover asthma controller inhalers including budesonide and generic formulations. If you have Medi-Cal, you can use TeleDirectMD\'s $49 self-pay rate or seek a Medi-Cal-enrolled primary care provider for your refills. Visit dhcs.ca.gov for the Medi-Cal provider directory.</p>,
  },
  {
    id: 'asthma-refills-online-faq-4',
    question: "What is the GINA stepwise approach for asthma?",
    answer: <p>The Global Initiative for Asthma (GINA) 2024 stepwise framework organizes asthma treatment into Steps 1–5 based on symptom frequency, nighttime awakenings, rescue inhaler use, and FEV1. Step 1 uses as-needed SABA or low-dose ICS PRN for mild intermittent asthma. Steps 2–3 add daily ICS or ICS+LABA for persistent disease. Steps 4–5 escalate to higher-dose combination therapy, and Step 5 involves biologic therapy for uncontrolled severe asthma. The physician reviews your current step and the Asthma Control Test (ACT) score at every refill visit.</p>,
  },
  {
    id: 'asthma-refills-online-faq-5',
    question: "When should asthma patients go to the ER or urgent care instead of using TeleDirectMD?",
    answer: <p>Seek emergency care immediately for severe dyspnea at rest, inability to speak full sentences, oxygen saturation below 92%, accessory muscle use, rapid worsening not responding to repeated rescue inhaler use, or silent chest. Use urgent care for moderate exacerbations with incomplete relief after 2–3 albuterol treatments. TeleDirectMD is appropriate for stable asthma refills and mild symptom changes — not for acute exacerbations.</p>,
  },
  {
    id: 'asthma-refills-online-faq-6',
    question: "Will my Aetna plan in California cover my asthma inhaler refill visit?",
    answer: <p>Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. If you hold an Aetna commercial plan in California, you may be able to use your in-network benefits for your asthma refill visit. Always verify current in-network status with Aetna before booking, as plan eligibility varies by specific plan type. See the Aetna × California coverage details page for more information.</p>,
  },
  {
    id: 'asthma-refills-online-faq-7',
    question: "What monitoring is required before authorizing an asthma refill?",
    answer: <p>The TeleDirectMD physician reviews: current symptom control (ACT score or validated equivalent), rescue inhaler use frequency (more than 2 days/week indicates poor control), nighttime awakenings, activity limitation, oral corticosteroid courses in the past year, ER or urgent care visits for asthma, spirometry or peak flow history if available, and any environmental exposures including wildfire smoke. Refills are authorized for patients with stable, well-controlled asthma consistent with GINA 2024 criteria.</p>,
  },
  {
    id: 'asthma-refills-online-faq-8',
    question: "Can TeleDirectMD prescribe montelukast (Singulair) for asthma in California?",
    answer: <p>Yes, montelukast is a leukotriene receptor antagonist (LTRA) approved as an alternative Step 2 controller for mild persistent asthma and as adjunct therapy. The FDA issued a boxed warning for montelukast in 2020 regarding neuropsychiatric adverse events including suicidality. The TeleDirectMD physician reviews this warning with you and documents informed consent before prescribing. Montelukast is generally reserved for patients who cannot use ICS or as adjunct to ICS.</p>,
  },
  {
    id: 'asthma-refills-online-faq-9',
    question: "Does California parity law (AB 744) require my insurer to cover telehealth asthma care?",
    answer: <p>California AB 744 (2019), codified in Insurance Code §10123.85, requires commercial health plans to reimburse telehealth services on the same basis as in-person services. Parity applies only when TeleDirectMD is already in-network with your specific plan. Currently, Aetna commercial (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California. Anthem Blue Cross and Cigna enrollments are pending.</p>,
  },
  {
    id: 'asthma-refills-online-faq-10',
    question: "What is the cost of asthma inhalers in California with GoodRx?",
    answer: <p>GoodRx coupon pricing for common asthma medications in California (May 2026): albuterol HFA approximately $30–$60 per inhaler; fluticasone propionate HFA approximately $45–$100; budesonide/formoterol (Symbicort) approximately $60–$160; fluticasone/salmeterol (Advair) approximately $60–$180; generic montelukast 10 mg approximately $15–$25 per month. Prices vary by pharmacy and dose. The TeleDirectMD visit fee ($49) covers evaluation only — inhaler costs are separate.</p>,
  },
  {
    id: 'asthma-refills-online-faq-11',
    question: "What if my asthma is worsening — is TeleDirectMD still appropriate?",
    answer: <p>If your asthma is worsening despite your current controller regimen, a video visit may be appropriate for step-up assessment, short oral corticosteroid course authorization, and facilitation of an allergist or pulmonologist referral. However, if you have an acute exacerbation with significant dyspnea, go to urgent care or the ER. Do not use TeleDirectMD for emergencies.</p>,
  }
];

const CA_SIBLINGS = [
  { slug: 'hypertension-refills-online', label: "Hypertension Refills in CA", why: "Common comorbidity — beta-blockers used cautiously in asthma." },
  { slug: 'seasonal-allergies-treatment-online', label: "Seasonal Allergies Treatment in CA", why: "Allergic asthma shares triggers — antihistamines, nasal steroids." },
  { slug: 'epipen-refills-online', label: "EpiPen Refills in CA", why: "Anaphylaxis risk in allergic asthma — emergency action plan companion." },
  { slug: 'smoking-cessation-treatment-online', label: "Smoking Cessation in CA", why: "Smoking worsens asthma — cessation is core management." },
  { slug: 'acid-reflux-refills-online', label: "Acid Reflux Refills in CA", why: "GERD is a common asthma trigger — often co-managed." },
  { slug: 'online-doctor-visits', label: "All Online Doctor Visits in CA", why: "General CA telehealth hub." }
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'Refill your asthma controller medications online in California. Board-certified Family Medicine MD. CA telehealth law compliant. Aetna in-network. Self pay $49. GINA 2024 stepwise approach. ICS, ICS+LABA, biologics referral criteria.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Asthma Refills',
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
      cssSelector: ['#asthma-refills-online-opening', '#asthma-refills-online-opening p', '.tdmd-asthma-refills-online-byline', '#asthma-refills-online-faq'],
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
    name: 'How to Get Refills for Asthma Refills Online in California',
    description: 'Three steps to receive asthma refills evaluation and prescription from a California-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '49' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California Asthma Refills. No referral needed. Self pay $49. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
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

export default function CaAsthmaRefillsOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-asthma-refills-online';
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
            <span aria-current="page">Asthma Refills</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Asthma Refills</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adults 18+ · Secure video visit · Self pay $49 · Aetna in-network · UHC Commercial approved · MD-only · CA B&amp;P §2290.5 compliant · GINA 2024 + NAEPP
                </p>
                <p>
                  TeleDirectMD provides evidence-based asthma refills by secure video visit for California adults. A California-licensed board-certified Family Medicine physician evaluates your history, reviews relevant lab values and prior treatments, and prescribes appropriate medication when clinically indicated. This page is for adults located in California, including {caCities.join(', ')}, and surrounding areas.
                </p>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-ca-uti__byline tdmd-asthma-refills-online-byline" aria-label="Reviewed by physician">
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
                  <li>Evidence-based treatment per GINA 2024 + NAEPP</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J45.20 (mild intermittent), J45.30 (mild persistent), J45.40 (moderate persistent) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Asthma Refills in California</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — California-licensed</li>
                    <li>Evidence-based regimen per GINA 2024 + NAEPP</li>
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
            <div className="tdmd-condition-opener" id="asthma-refills-online-opening">
              <p>
                California adults managing stable asthma can refill controller medications — including inhaled corticosteroids (ICS) and ICS+LABA combination inhalers — by secure video visit through TeleDirectMD, consistent with California Business and Professions Code Section 2290.5. A California-licensed board-certified Family Medicine physician reviews your current regimen, most recent spirometry or peak-flow history, symptom control, and adherence before authorizing refills. The GINA 2024 stepwise framework guides inhaler selection and step-up or step-down decisions. California's CDPH ambient air quality data — including wildfire smoke advisories — are clinically relevant and addressed during the visit. Self pay is $49. Aetna is in-network effective April 30, 2026.
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
            <h2>California Telehealth Law and Your Asthma Refills Visit</h2>

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
            <h2>California Epidemiology: Asthma Refills</h2>
            <p>Approximately 8.5% of California adults — roughly 2.7 million people — have current asthma, per the 2023 California Health Interview Survey (CHIS). California's prevalence exceeds the national average of 7.8%, partly driven by environmental triggers including wildfire smoke, vehicle exhaust in the Central Valley, and coastal marine layer ozone.</p>
            <p>California's wildfire seasons now run year-round. The California Air Resources Board (CARB) documents that wildfire smoke events increased fine particulate matter (PM2.5) exposure statewide, driving asthma exacerbation emergency visits by 12–15% during peak smoke events in 2020–2023. The CDPH tracks air quality via the Air Quality Index (AQI) and issues public health advisories for sensitive groups including people with asthma.</p>
            <p>Black Californians have asthma prevalence nearly twice that of white Californians (12.2% vs. 7.4%) per CHIS 2023. Pediatric asthma in low-income zip codes correlates with diesel truck traffic from agricultural supply chains. TeleDirectMD treats adults 18+ only.</p>
            
            
            
            
          </div>
        </section>

        {/* ─── 5) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Asthma Refills Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$49</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription when appropriate. Patients with in-network insurance pay their plan&apos;s telehealth copay instead. The payor table below reflects TeleDirectMD&apos;s current California enrollment, refreshed May 19, 2026.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$49</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Evidence-based asthma refills management</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; monitoring guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Asthma Refills Visit Cost in California</h3>
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
              For deeper detail, see <a href="/insurance/aetna/california/asthma-refills-online/">Aetna × California × Asthma Refills</a> or view all <a href="/insurance">insurance options</a>.
            </p>
          </div>
        </section>

        {/* ─── 6) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Asthma Refills: Medication Options and CA Pricing</h2>
            <p>
              The table below reflects evidence-based medication options per GINA 2024 + NAEPP guidelines.
              GoodRx prices retrieved May 2026 from goodrx.com — national coupon prices; actual cost varies by California pharmacy location.
              Prescription costs are separate from the $49 TeleDirectMD visit fee.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Asthma Refills medication options and GoodRx prices">
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
                    <td><strong>Albuterol HFA inhaler (ProAir, Ventolin, Proventil)</strong></td>
                    <td>2 puffs PRN up to q4h; 2 puffs before exercise</td>
                    <td><a href="https://www.goodrx.com/albuterol" target="_blank" rel="noopener">~$30–$60 with GoodRx coupon</a></td>
                    <td>Rescue inhaler — not a controller. Refill appropriate if usage ≤2 days/week.</td>
                  </tr>
                  <tr>
                    <td><strong>Fluticasone propionate HFA (Flovent HFA) 44/88/110/220 mcg</strong></td>
                    <td>1–2 puffs BID per dose level</td>
                    <td><a href="https://www.goodrx.com/fluticasone-propionate-hfa" target="_blank" rel="noopener">~$45–$100/inhaler GoodRx</a></td>
                    <td>First-line controller. Step 2 preferred.</td>
                  </tr>
                  <tr>
                    <td><strong>Budesonide/formoterol (Symbicort) 80/4.5 or 160/4.5 mcg</strong></td>
                    <td>2 puffs BID (maintenance) or MART regimen per GINA 2024</td>
                    <td><a href="https://www.goodrx.com/budesonide-formoterol" target="_blank" rel="noopener">~$60–$160/inhaler GoodRx</a></td>
                    <td>Step 3–4 preferred. GINA 2024 supports MART (maintenance and reliever therapy).</td>
                  </tr>
                  <tr>
                    <td><strong>Fluticasone/salmeterol (Advair Diskus/HFA) 100/50, 250/50, 500/50 mcg</strong></td>
                    <td>1 inhalation BID</td>
                    <td><a href="https://www.goodrx.com/fluticasone-salmeterol" target="_blank" rel="noopener">~$60–$180/inhaler GoodRx</a></td>
                    <td>Step 3–4 option. Long-acting — do not use as rescue.</td>
                  </tr>
                  <tr>
                    <td><strong>Montelukast (Singulair) 10 mg</strong></td>
                    <td>10 mg once daily at bedtime</td>
                    <td><a href="https://www.goodrx.com/montelukast" target="_blank" rel="noopener">~$15–$25 GoodRx (generic)</a></td>
                    <td>Alternative Step 2. FDA black box warning: neuropsychiatric effects. Physician discusses risks.</td>
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
            <p>For most established asthma refills cases in stable adults, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below.</p>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Established asthma refills with prior diagnosis</li>
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
                <small>Self pay $49 · Aetna in-network · UHC Commercial approved May 2026 · Asthma Refills</small>
              </div>
              <a className="tdmd-ca-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ (Premium Style A accordion) ──────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Asthma Refills"
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
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/asthma-refills-online/">Asthma Refills national condition page</a>.</p>
            <div className="tdmd-ca-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/asthma-refills-online/">Asthma Refills (national)</a>
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
              <li><a href="https://ginasthma.org/2024-gina-main-report/" rel="noopener" target="_blank">GINA 2024 Main Report — Global Strategy for Asthma Management and Prevention</a>. Retrieved May 2026.</li>
              <li><a href="https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma" rel="noopener" target="_blank">NAEPP Expert Panel Report 3 (EPR-3) — Guidelines for the Diagnosis and Management of Asthma</a>. Retrieved May 2026.</li>
              <li><a href="https://healthpolicy.ucla.edu/our-work/california-health-interview-survey-chis/chis-data" rel="noopener" target="_blank">California Health Interview Survey (CHIS) 2023 — Asthma</a>. Retrieved May 2026.</li>
              <li><a href="https://www.arb.ca.gov/research/resnotes/notes/2021-01.htm" rel="noopener" target="_blank">California Air Resources Board (CARB) — Wildfire Smoke and Air Quality</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/OHE/Pages/NR23-005.aspx" rel="noopener" target="_blank">CDPH — Air Quality and Health</a>. Retrieved May 2026.</li>
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
