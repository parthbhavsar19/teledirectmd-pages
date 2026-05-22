/**
 * CaAcneTreatmentOnlineTreatmentOnline.js — CA × Acne condition page
 * Matches CA UTI v3 template exactly.
 * Authority: American Academy of Dermatology (AAD)
 * Generated: 2026-05-22
 */
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/acne-treatment-online/';
const PAGE_TITLE = "Acne Treatment Online in California | TeleDirectMD";
const DATE_PUBLISHED = '2026-05-22';
const DATE_MODIFIED = '2026-05-22';
const LAST_REVIEWED = '2026-05-22';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD', npi: '1104323203', specialty: 'Family Medicine',
  licenseState: 'California', headshot: '/images/dr-parth-bhavsar.jpg', bioUrl: '/about',
};

const CA_PAYORS = [
  {
    "name": "Aetna",
    "status": "Active",
    "effective": "April 30, 2026",
    "inNetwork": true,
    "notes": "Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking."
  },
  {
    "name": "UnitedHealthcare Commercial",
    "status": "Approved",
    "effective": "May 29, 2026",
    "inNetwork": true,
    "notes": "Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types."
  },
  {
    "name": "Anthem Blue Cross",
    "status": "Pending",
    "effective": "Pending determination",
    "inNetwork": false,
    "notes": "Enrollment pending \u2014 waiting for Anthem to confirm individual-provider enrollment for telehealth. Self pay ($79) available."
  },
  {
    "name": "Cigna",
    "status": "Pending",
    "effective": "Pending determination",
    "inNetwork": false,
    "notes": "Pending \u2014 Telehealth Only review in progress. Self pay ($79) available."
  },
  {
    "name": "Kaiser Permanente",
    "status": "Closed system",
    "effective": "\u2014",
    "inNetwork": false,
    "notes": "Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay is available but Kaiser will not reimburse out-of-network visits."
  },
  {
    "name": "Medi-Cal",
    "status": "Not enrolled",
    "effective": "\u2014",
    "inNetwork": false,
    "notes": "TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via your managed care plan or dhcs.ca.gov."
  }
];

const FAQ_ITEMS = [
  { id: 'ca-acne-treatment-online-faq-0', question: "Can I get acne treatment online in California?", answer: (<p>Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate and treat acne via secure video visit. TeleDirectMD physicians follow AAD 2024 acne guidelines. Adults 18+ in California can book same-day. Self pay is $79. Aetna is in-network as of April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026.</p>) },
  { id: 'ca-acne-treatment-online-faq-1', question: "What acne medications can a California telehealth doctor prescribe?", answer: (<p>A California-licensed telehealth physician can prescribe: topical tretinoin 0.025%–0.05%, topical clindamycin combined with benzoyl peroxide, oral doxycycline 50–100 mg, and oral minocycline for moderate-severe inflammatory acne. Spironolactone for hormonal acne in women may be evaluated by video. Isotretinoin (Accutane) requires an in-person iPLEDGE-enrolled prescriber — TeleDirectMD will refer when appropriate.</p>) },
  { id: 'ca-acne-treatment-online-faq-2', question: "Does California require an in-person dermatology visit before acne telehealth?", answer: (<p>No. California Business and Professions Code Section 2290.5 does not require a prior in-person visit. The Medical Board of California holds telehealth physicians to the same standard of care as in-person providers. Most mild-to-moderate acne is appropriately evaluated and treated by video.</p>) },
  { id: 'ca-acne-treatment-online-faq-3', question: "How common is acne in California?", answer: (<p>Acne affects up to 50 million Americans annually per AAD data. With California's population of approximately 39 million, an estimated 5–7 million Californians experience acne at any given time. Adult-onset acne is increasing, particularly in women ages 25–40. California's diverse population — with varying skin types affecting post-inflammatory hyperpigmentation risk — makes clinically competent acne management important.</p>) },
  { id: 'ca-acne-treatment-online-faq-4', question: "Is my Aetna plan in California in-network with TeleDirectMD for acne treatment?", answer: (<p>Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. Always verify current in-network status with Aetna before booking. UnitedHealthcare Commercial is approved effective May 29, 2026. Self pay is $79 regardless of insurance status.</p>) },
  { id: 'ca-acne-treatment-online-faq-5', question: "What is the cost of acne treatment in California?", answer: (<p>TeleDirectMD charges $79 self-pay for a complete MD video visit. Prescriptions are sent to your California pharmacy: tretinoin ~$18–$40, clindamycin-BP combination ~$25–$60, doxycycline ~$12–$25 with GoodRx. Urgent care acne visits typically cost $150–$300 before insurance; dermatology visits cost $150–$350+ with 4–8 week waits typical in California metro areas.</p>) },
  { id: 'ca-acne-treatment-online-faq-6', question: "When does acne require in-person dermatology care?", answer: (<p>Seek in-person dermatology for nodular or cystic acne potentially requiring isotretinoin (iPLEDGE-enrolled prescriber required), acne fulminans, suspected acne inversa (hidradenitis suppurativa), or when 2+ topical regimens have failed. TeleDirectMD will refer to California dermatology resources when appropriate.</p>) },
  { id: 'ca-acne-treatment-online-faq-7', question: "Why should topical antibiotics always be combined with benzoyl peroxide?", answer: (<p>AAD 2024 guidelines explicitly recommend combining topical antibiotics (clindamycin, erythromycin) with benzoyl peroxide rather than using topical antibiotics alone. Benzoyl peroxide kills C. acnes bacteria and prevents antibiotic-resistant strains from emerging — a growing problem in acne management. TeleDirectMD prescribes combination products per this guideline.</p>) },
  { id: 'ca-acne-treatment-online-faq-8', question: "Does California's AB 744 telehealth parity law cover acne treatment?", answer: (<p>California Assembly Bill 744 (2019), codified in California Insurance Code §10123.85, requires commercial health plans to reimburse telehealth on the same basis as in-person services. Parity applies when the provider is in-network with your plan. Aetna (April 30, 2026) and UHC Commercial (May 29, 2026) are in-network in California for TeleDirectMD acne visits.</p>) },
  { id: 'ca-acne-treatment-online-faq-9', question: "Will my acne prescription be sent electronically to a California pharmacy?", answer: (<p>Yes. California Assembly Bill 2789 (effective January 1, 2022) requires all prescriptions to be issued electronically. If medication is clinically appropriate, TeleDirectMD sends an e-prescription to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway — during or after your visit. Most California pharmacies fill prescriptions within 1–4 hours.</p>) },
  { id: 'ca-acne-treatment-online-faq-10', question: "Can I get doxycycline for acne prescribed online in California?", answer: (<p>Yes. Doxycycline 50–100 mg is a first-line oral antibiotic for moderate-severe inflammatory acne per AAD 2024 guidelines. A California-licensed telehealth physician can prescribe doxycycline after evaluating acne severity, allergies, and tolerability. It is not a controlled substance. GoodRx pricing is approximately $12–$25 for 30 days at California pharmacies. Oral antibiotics are typically limited to 3–6 months per AAD stewardship guidelines.</p>) },
  { id: 'ca-acne-treatment-online-faq-11', question: "What if my acne does not improve after 8\u201312 weeks of treatment?", answer: (<p>If acne does not improve after 8–12 weeks of consistent therapy, re-evaluation is needed. Options include adjusting topical retinoid concentration, adding oral antibiotics, evaluating hormonal contributions in women, or referral to a California dermatologist for isotretinoin evaluation. Do not use isotretinoin without an iPLEDGE-enrolled in-person prescriber.</p>) },
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org', '@type': 'MedicalWebPage',
    name: PAGE_TITLE, url: PAGE_URL,
    description: "Acne treatment by secure video visit for California adults. AAD 2024 guideline-based care. Board-certified MD. Aetna in-network. Self pay $79.",
    datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED, inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition', name: "Acne",
      code: { '@type': 'MedicalCode', code: "L70.0", codingSystem: 'ICD-10-CM' },
    },
    medicalAudience: {
      '@type': 'MedicalAudience', audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'California' },
    },
    reviewedBy: {
      '@type': 'Physician', '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar',
      name: PHYSICIAN.name,
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi },
      medicalSpecialty: PHYSICIAN.specialty, licensedIn: PHYSICIAN.licenseState,
      worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' },
      sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#ca-acne-treatment-online-opening', '#ca-acne-treatment-online-opening p', '.tdmd-ca-uti__byline', '#ca-acne-treatment-online-faq'],
    },
  };
  const faqPage = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
    { '@type': 'Question', name: "Can I get acne treatment online in California?", acceptedAnswer: { '@type': 'Answer', text: "Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate and treat acne via secure video visit. TeleDirectMD physicians follow AAD 2024 acne guidelines. Adults 18+ in California can book same-day. Self pay is $79. Aetna is in-network as of April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026." } },
    { '@type': 'Question', name: "What acne medications can a California telehealth doctor prescribe?", acceptedAnswer: { '@type': 'Answer', text: "A California-licensed telehealth physician can prescribe: topical tretinoin 0.025%\u20130.05%, topical clindamycin combined with benzoyl peroxide, oral doxycycline 50\u2013100 mg, and oral minocycline for moderate-severe inflammatory acne. Spironolactone for hormonal acne in women may be evaluated by video. Isotretinoin (Accutane) requires an in-person iPLEDGE-enrolled prescriber \u2014 TeleDirectMD will refer when appropriate." } },
    { '@type': 'Question', name: "Does California require an in-person dermatology visit before acne telehealth?", acceptedAnswer: { '@type': 'Answer', text: "No. California Business and Professions Code Section 2290.5 does not require a prior in-person visit. The Medical Board of California holds telehealth physicians to the same standard of care as in-person providers. Most mild-to-moderate acne is appropriately evaluated and treated by video." } },
    { '@type': 'Question', name: "How common is acne in California?", acceptedAnswer: { '@type': 'Answer', text: "Acne affects up to 50 million Americans annually per AAD data. With California's population of approximately 39 million, an estimated 5\u20137 million Californians experience acne at any given time. Adult-onset acne is increasing, particularly in women ages 25\u201340. California's diverse population \u2014 with varying skin types affecting post-inflammatory hyperpigmentation risk \u2014 makes clinically competent acne management important." } },
    { '@type': 'Question', name: "Is my Aetna plan in California in-network with TeleDirectMD for acne treatment?", acceptedAnswer: { '@type': 'Answer', text: "Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. Always verify current in-network status with Aetna before booking. UnitedHealthcare Commercial is approved effective May 29, 2026. Self pay is $79 regardless of insurance status." } },
    { '@type': 'Question', name: "What is the cost of acne treatment in California?", acceptedAnswer: { '@type': 'Answer', text: "TeleDirectMD charges $79 self-pay for a complete MD video visit. Prescriptions are sent to your California pharmacy: tretinoin ~$18\u2013$40, clindamycin-BP combination ~$25\u2013$60, doxycycline ~$12\u2013$25 with GoodRx. Urgent care acne visits typically cost $150\u2013$300 before insurance; dermatology visits cost $150\u2013$350+ with 4\u20138 week waits typical in California metro areas." } },
    { '@type': 'Question', name: "When does acne require in-person dermatology care?", acceptedAnswer: { '@type': 'Answer', text: "Seek in-person dermatology for nodular or cystic acne potentially requiring isotretinoin (iPLEDGE-enrolled prescriber required), acne fulminans, suspected acne inversa (hidradenitis suppurativa), or when 2+ topical regimens have failed. TeleDirectMD will refer to California dermatology resources when appropriate." } },
    { '@type': 'Question', name: "Why should topical antibiotics always be combined with benzoyl peroxide?", acceptedAnswer: { '@type': 'Answer', text: "AAD 2024 guidelines explicitly recommend combining topical antibiotics (clindamycin, erythromycin) with benzoyl peroxide rather than using topical antibiotics alone. Benzoyl peroxide kills C. acnes bacteria and prevents antibiotic-resistant strains from emerging \u2014 a growing problem in acne management. TeleDirectMD prescribes combination products per this guideline." } },
    { '@type': 'Question', name: "Does California's AB 744 telehealth parity law cover acne treatment?", acceptedAnswer: { '@type': 'Answer', text: "California Assembly Bill 744 (2019), codified in California Insurance Code \u00a710123.85, requires commercial health plans to reimburse telehealth on the same basis as in-person services. Parity applies when the provider is in-network with your plan. Aetna (April 30, 2026) and UHC Commercial (May 29, 2026) are in-network in California for TeleDirectMD acne visits." } },
    { '@type': 'Question', name: "Will my acne prescription be sent electronically to a California pharmacy?", acceptedAnswer: { '@type': 'Answer', text: "Yes. California Assembly Bill 2789 (effective January 1, 2022) requires all prescriptions to be issued electronically. If medication is clinically appropriate, TeleDirectMD sends an e-prescription to your chosen California pharmacy \u2014 CVS, Walgreens, Rite Aid, Walmart, Safeway \u2014 during or after your visit. Most California pharmacies fill prescriptions within 1\u20134 hours." } },
    { '@type': 'Question', name: "Can I get doxycycline for acne prescribed online in California?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Doxycycline 50\u2013100 mg is a first-line oral antibiotic for moderate-severe inflammatory acne per AAD 2024 guidelines. A California-licensed telehealth physician can prescribe doxycycline after evaluating acne severity, allergies, and tolerability. It is not a controlled substance. GoodRx pricing is approximately $12\u2013$25 for 30 days at California pharmacies. Oral antibiotics are typically limited to 3\u20136 months per AAD stewardship guidelines." } },
    { '@type': 'Question', name: "What if my acne does not improve after 8\u201312 weeks of treatment?", acceptedAnswer: { '@type': 'Answer', text: "If acne does not improve after 8\u201312 weeks of consistent therapy, re-evaluation is needed. Options include adjusting topical retinoid concentration, adding oral antibiotics, evaluating hormonal contributions in women, or referral to a California dermatologist for isotretinoin evaluation. Do not use isotretinoin without an iPLEDGE-enrolled in-person prescriber." } },
    ],
  };
  const howTo = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: "How to Get Acne Treatment Online in California",
    description: "Three steps to receive Acne evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California Acne Treatment. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in California. The physician reviews symptoms, history, and risk factors.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy.', url: PAGE_URL },
    ],
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' },
      { '@type': 'ListItem', position: 3, name: "Acne Treatment Online in California", item: PAGE_URL },
    ],
  };
  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

export default function CaAcneTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-acne-treatment-online';

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={`schema-${i}`} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="tdmd-ca-uti">
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Acne Treatment Online</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Acne Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">AAD guideline-based acne care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · MD-only · CA telehealth compliant.</p>
                <p>This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas seeking telehealth evaluation for acne.</p>
                <div className="tdmd-ca-uti__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt="Parth Bhavsar MD headshot" loading="eager" width={56} height={56} />
                  <div className="tdmd-ca-uti__byline-text">
                    <span className="tdmd-ca-uti__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-ca-uti__byline-meta">
                      NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed <time dateTime={DATE_MODIFIED}>2026-05-22</time>
                    </span>
                  </div>
                </div>
                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>Licensed telehealth care for adults located in California at the time of the visit</li>
                </ul>
                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                </div>
                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L70.0 — Acne vulgaris (final coding depends on clinical details)</p>
              </div>
              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Acne Treatment in California</h2>
                  <ul>
                    <li>Evidence-based evaluation per American Academy of Dermatology (AAD)</li>
                    <li>Guideline-based treatment when appropriate: AAD Acne Guidelines 2024</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up steps and in-person referral when needed</li>
                    <li>California B&amp;P §2290.5 compliant</li>
                  </ul>
                  <p className="tdmd-hero-note">Adults 18+ only. TeleDirectMD is not an emergency service. Go to urgent care or the ER for red-flag symptoms. TeleDirectMD does not prescribe controlled substances.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INLINE OPENER ─── */}
        <section className="tdmd-section" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener">
              <p><strong>Can I get acne treatment online in California?</strong> Yes. <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California Business and Professions Code Section 2290.5</a> permits California-licensed physicians to evaluate and treat acne by secure video visit without a prior in-person visit. TeleDirectMD physicians follow <a href='https://www.aad.org/member/clinical-quality/guidelines/acne' rel='noopener' target='_blank'>AAD 2024 acne guidelines</a>, prescribing topical retinoids, topical antibiotics combined with benzoyl peroxide, oral doxycycline or minocycline for moderate-severe acne, and hormonal therapy for eligible women. Adults 18+ in California can book same-day. The <a href='https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx' rel='noopener' target='_blank'>Medical Board of California</a> holds telehealth physicians to the same standard as in-person care. Self pay is $79. <a href='/insurance/aetna/california/acne-treatment/'>Aetna is in-network</a> as of April 30, 2026.</p>
            </div>
          </div>
        </section>

        {/* ─── CA REGULATORY BLOCK ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Your Acne Treatment Visit</h2>
            <h3>Does California require an in-person visit before telehealth?</h3>
            <p>No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&amp;lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent for telehealth and document it.</p>
            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; Physicians must be licensed in California to provide telehealth to California patients.</p>
            <h3>Does California insurance parity law cover telehealth visits?</h3>
            <p>Yes. California Assembly Bill 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&amp;lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a>, requires commercial health plans to reimburse telehealth services on the same basis as comparable in-person services. Plans cannot require face-to-face contact as a condition of reimbursement.</p>
            <h3>Are acne treatment medications controlled substances?</h3>
            <p>Medications commonly prescribed for acne are not controlled substances and can be prescribed via California telehealth without restriction. California requires all prescriptions to be issued electronically under <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Assembly Bill 2789</a> (effective January 1, 2022). TeleDirectMD does not prescribe controlled substances in any state.</p>
          </div>
        </section>

        {/* ─── CA EPIDEMIOLOGY ─── */}
        <section className="tdmd-section" id={`${pid}-ca-epi`}>
          <div className="tdmd-container">
            <h2>Acne in California — Prevalence and Context</h2>
            <p dangerouslySetInnerHTML={{ __html: "Acne is the most common skin condition in the United States, affecting up to 50 million Americans annually, according to the <a href='https://www.aad.org/public/diseases/acne/really-is-acne' rel='noopener' target='_blank'>American Academy of Dermatology</a>. In California, <a href='https://places.cdc.gov/profiles/county' rel='noopener' target='_blank'>CDC PLACES county-level data</a> documents that skin conditions represent a major share of outpatient visits statewide. With California's population of approximately 39 million residents, an estimated 5\u20137 million Californians experience acne at any given time. Adult-onset acne is increasing \u2014 particularly among women ages 25\u201340. The <a href='https://www.cdph.ca.gov' rel='noopener' target='_blank'>California Department of Public Health (CDPH)</a> notes dermatologic conditions account for over 1.3 million outpatient visits in California annually, with acne comprising the largest single-condition share." }} />
          </div>
        </section>

        {/* ─── ELIGIBILITY / DUAL PATH ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Acne Treatment Telehealth Eligibility in California</h2>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Mild-to-moderate comedonal or inflammatory acne in adults 18+</li>
                  <li>Acne requiring topical retinoid, topical antibiotic, or oral antibiotic initiation</li>
                  <li>Hormonal acne in women — OCP referral or spironolactone evaluation</li>
                  <li>Adult acne requiring regimen adjustment or refill</li>
                </ul>
              </div>
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--alert">
                <h3>→ Seek in-person or emergency care if</h3>
                <ul>
                  <li>Nodular/cystic acne requiring isotretinoin evaluation — in-person iPLEDGE-enrolled dermatologist required</li>
                  <li>Acne fulminans — sudden severe acne with systemic symptoms (fever, joint pain) — urgent dermatology</li>
                  <li>Suspected gram-negative folliculitis — fails multiple antibiotic courses</li>
                  <li>Acne inversa (hidradenitis suppurativa) — different condition requiring specialist evaluation</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If you have red-flag symptoms, seek urgent in-person care immediately. TeleDirectMD is not appropriate for complex or severe cases.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`}>
          <div className="tdmd-container">
            <h2>How Online Acne Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your video visit</h3>
                  <p>No referral needed. Self pay $79. Many visits available same day. Note when symptoms started, any prior treatments, allergies, and relevant medical history before your visit.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a California-licensed MD by secure video</h3>
                  <p>A board-certified Family Medicine physician reviews your history, symptoms, and risk factors. Red-flag screening is performed. Consent per CA B&amp;P §2290.5 is documented. Clinical evaluation follows <a href={"https://www.aad.org/member/clinical-quality/guidelines/acne"} rel="noopener" target="_blank">AAD Acne Guidelines 2024</a>.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Receive your treatment plan and e-prescription</h3>
                  <p>If medication is clinically appropriate, a California-compliant e-prescription is sent to your chosen pharmacy under AB 2789. You receive clear follow-up steps and in-person referral guidance when needed.</p>
                  <div className="tdmd-decision-cta"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COST & INSURANCE ─── */}
        <section className="tdmd-section" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Acne Treatment Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit. Patients with in-network insurance pay their plan&apos;s telehealth copay.</p>
            <div className="tdmd-price-grid">
              <div className="tdmd-price-card">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag screening and structured triage</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>Follow-up instructions</li>
                  <li>No hidden fees</li>
                </ul>
              </div>
              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Acne Treatment Cost in California</h3>
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
                <p className="tdmd-price-footnote">Comparison reflects typical California pricing. Actual costs vary.</p>
              </div>
            </div>

            <h3 style={{ marginTop: '1.75rem' }}>California Payor Status — TeleDirectMD</h3>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="TeleDirectMD California payor status">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Source: TeleDirectMD payor enrollment records, refreshed 2026-05-22. Verify current in-network status with your insurer before booking.
                </caption>
                <thead>
                  <tr><th>Insurer</th><th>Status</th><th>Effective</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Aetna</strong></td>
                    <td><span className="tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--good">✓ In-Network</span></td>
                    <td>April 30, 2026</td>
                    <td>Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking.</td>
                  </tr>
                  <tr>
                    <td><strong>UnitedHealthcare Commercial</strong></td>
                    <td><span className="tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--good">✓ In-Network</span></td>
                    <td>May 29, 2026</td>
                    <td>Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types.</td>
                  </tr>
                  <tr>
                    <td><strong>Anthem Blue Cross</strong></td>
                    <td><span className="tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--pending">Pending</span></td>
                    <td>Pending determination</td>
                    <td>Enrollment pending — waiting for Anthem to confirm individual-provider enrollment for telehealth. Self pay ($79) available.</td>
                  </tr>
                  <tr>
                    <td><strong>Cigna</strong></td>
                    <td><span className="tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--pending">Pending</span></td>
                    <td>Pending determination</td>
                    <td>Pending — Telehealth Only review in progress. Self pay ($79) available.</td>
                  </tr>
                  <tr>
                    <td><strong>Kaiser Permanente</strong></td>
                    <td><span className="tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--none">Closed system</span></td>
                    <td>—</td>
                    <td>Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay is available but Kaiser will not reimburse out-of-network visits.</td>
                  </tr>
                  <tr>
                    <td><strong>Medi-Cal</strong></td>
                    <td><span className="tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--none">Not enrolled</span></td>
                    <td>—</td>
                    <td>TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via your managed care plan or dhcs.ca.gov.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── MEDICATIONS TABLE ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Acne Treatment Options and Medication Costs in California</h2>
            <p>Treatment follows <a href={"https://www.aad.org/member/clinical-quality/guidelines/acne"} rel="noopener" target="_blank">AAD Acne Guidelines 2024</a>.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Acne Treatment medication options">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved 2026-05-22. National coupon prices; actual cost varies by pharmacy. Prescription costs separate from TeleDirectMD visit fee.
                </caption>
                <thead>
                  <tr><th>Medication</th><th>Typical Regimen</th><th>GoodRx Price (2026-05)</th><th>Key Considerations</th></tr>
                </thead>
                <tbody>
                    <tr className="tdmd-med-firstline">
                      <td><strong>Tretinoin 0.025%–0.05% cream/gel</strong> · First-line</td>
                      <td>Apply pea-sized amount nightly to affected areas after cleansing</td>
                      <td><a href="https://www.goodrx.com/tretinoin" target="_blank" rel="noopener">~$18–$40 / 20g</a></td>
                      <td>First-line topical retinoid per AAD 2024. Prevents comedone formation and reduces post-inflammatory hyperpigmentation. Use sunscreen daily. Avoid in pregnancy.</td>
                    </tr>
                    <tr className="tdmd-med-firstline">
                      <td><strong>Benzoyl peroxide 2.5%–5% wash/gel</strong> · First-line</td>
                      <td>Apply daily — wash-off or leave-on formulations</td>
                      <td><a href="https://www.goodrx.com/benzoyl-peroxide" target="_blank" rel="noopener">OTC ~$8–$15</a></td>
                      <td>First-line OTC per AAD. Always combine with topical antibiotics to prevent antibiotic resistance.</td>
                    </tr>
                    <tr className="tdmd-med-firstline">
                      <td><strong>Clindamycin 1% topical gel + benzoyl peroxide</strong> · First-line</td>
                      <td>Apply to affected areas twice daily — combination product preferred</td>
                      <td><a href="https://www.goodrx.com/clindamycin-topical" target="_blank" rel="noopener">~$25–$60 / 60g</a></td>
                      <td>First-line topical antibiotic per AAD. Always combine with benzoyl peroxide to reduce C. acnes resistance. Combination products (BenzaClin) preferred.</td>
                    </tr>
                    <tr className="tdmd-med-firstline">
                      <td><strong>Doxycycline 50–100 mg oral</strong> · First-line</td>
                      <td>50–100 mg once or twice daily with food</td>
                      <td><a href="https://www.goodrx.com/doxycycline" target="_blank" rel="noopener">~$12–$25 / 30 tabs</a></td>
                      <td>First-line oral antibiotic per AAD 2024 for moderate-severe acne. Limit to 3–6 months; combine with topical retinoid and BP. Not for use in pregnancy.</td>
                    </tr>
                    <tr>
                      <td><strong>Minocycline 50–100 mg oral</strong></td>
                      <td>50–100 mg once or twice daily</td>
                      <td><a href="https://www.goodrx.com/minocycline" target="_blank" rel="noopener">~$15–$35 / 30 caps</a></td>
                      <td>Alternative oral antibiotic per AAD. Comparable efficacy to doxycycline. Avoid in pregnancy. Risk of drug-induced lupus and hyperpigmentation with prolonged use.</td>
                    </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note"><strong>Important:</strong> Medication choice depends on allergies, medical history, and clinical evaluation at the visit. Do not start any medication without physician evaluation.</p>
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-uti__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — California adults, 18+</p>
                <small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026 · No ER wait</small>
              </div>
              <a className="tdmd-ca-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Acne Treatment in California`}
              items={FAQ_ITEMS}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a California-licensed MD?</h3>
                <p>Book a same-day video visit. Self pay $79 · Aetna in-network · UHC Commercial approved.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── RELATED CA CONDITIONS ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <p>These California condition pages may be helpful when symptoms overlap or when you want to explore another TeleDirectMD telehealth visit.</p>
            <div className="tdmd-ca-uti__sibling-grid">
                <a key="rosacea-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/rosacea-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Rosacea Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Facial redness and papules — often confused with acne.</span>
                </a>
                <a key="perioral-dermatitis-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/perioral-dermatitis-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Perioral Dermatitis Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Perioral papulopustular rash mimics acne.</span>
                </a>
                <a key="eczema-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/eczema-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Eczema Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Inflammatory skin condition — sometimes overlaps with acne locations.</span>
                </a>
                <a key="melasma-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/melasma-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Melasma Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Post-acne hyperpigmentation management.</span>
                </a>
                <a key="tinea-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/tinea-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Tinea Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Fungal folliculitis (Malassezia) can mimic truncal acne.</span>
                </a>
                <a key="psoriasis-refills-online" className="tdmd-ca-uti__sibling" href="/ca/psoriasis-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Psoriasis Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Other chronic inflammatory skin condition managed by telehealth.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── RELATED RESOURCES ─── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <div className="tdmd-ca-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/ca/uti-treatment-online/">California UTI Treatment Online</a>
              <a href="/insurance/aetna/california/acne-treatment-online/">Aetna × California × Acne Treatment</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/insurance">Insurance</a>
              <a href="/faq">FAQ</a>
              <a href="/ca/acne-treatment-online/">Acne Treatment in CA</a>
              <a href="/ca/eczema-treatment-online/">Eczema Treatment in CA</a>
              <a href="/ca/rosacea-treatment-online/">Rosacea Treatment in CA</a>
              <a href="/ca/contact-dermatitis-treatment-online/">Contact Dermatitis Treatment in CA</a>
              <a href="/ca/psoriasis-refills-online/">Psoriasis Refills in CA</a>
              <a href="/ca/tinea-treatment-online/">Tinea Treatment in CA</a>
              <a href="/ca/scabies-treatment-online/">Scabies Treatment in CA</a>
              <a href="/ca/dog-bite-treatment-online/">Dog Bite Treatment in CA</a>
              <a href="/ca/tick-bite-treatment-online/">Tick Bite Treatment in CA</a>
            </div>
          </div>
        </section>

        {/* ─── REFERENCES ─── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.aad.org/member/clinical-quality/guidelines/acne" rel="noopener" target="_blank">AAD Acne Guidelines 2024</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.aad.org/public/diseases/acne/really-is-acne" rel="noopener" target="_blank">AAD — Acne Overview</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California B&P Code §2290.5</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 (AB 744)</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS Telehealth FAQ</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.goodrx.com/tretinoin" rel="noopener" target="_blank">GoodRx — Tretinoin</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.goodrx.com/doxycycline" rel="noopener" target="_blank">GoodRx — Doxycycline</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.goodrx.com/clindamycin-topical" rel="noopener" target="_blank">GoodRx — Clindamycin Topical</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://places.cdc.gov/profiles/county" rel="noopener" target="_blank">CDC PLACES</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.cdph.ca.gov" rel="noopener" target="_blank">CDPH — Skin Health</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California — AB 2789</a>. Retrieved 2026-05-22.</li>
            </ol>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under California B&amp;P §2290.5. Treatment decisions are made by a California-licensed board-certified physician based on the clinical history at the time of the visit. If you have red-flag symptoms, seek urgent in-person care immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. The price information on this page reflects GoodRx pricing retrieved 2026-05-22; actual prescription costs vary. Insurance status is current as of 2026-05-22; verify with your insurer before booking.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="acne-treatment-online" conditionName="Acne Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="acne-treatment-online" />
        <CommonSymptomsBlock conditionSlug="acne-treatment-online" conditionName="Acne Treatment" />
      </div>
    </>
  );
}
