/**
 * CaEczemaTreatmentOnlineTreatmentOnline.js — CA × Eczema (Atopic Dermatitis) condition page
 * Matches CA UTI v3 template exactly.
 * Authority: American Academy of Dermatology (AAD) / AAAAI
 * Generated: 2026-05-22
 */
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/eczema-treatment-online/';
const PAGE_TITLE = "Eczema Treatment Online in California | TeleDirectMD";
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
    "notes": "Enrollment pending \u2014 waiting for Anthem to confirm individual-provider enrollment for telehealth. Self pay ($49) available."
  },
  {
    "name": "Cigna",
    "status": "Pending",
    "effective": "Pending determination",
    "inNetwork": false,
    "notes": "Pending \u2014 Telehealth Only review in progress. Self pay ($49) available."
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
  { id: 'ca-eczema-treatment-online-faq-0', question: "Can I get eczema treatment online in California?", answer: (<p>Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate and treat eczema (atopic dermatitis) by secure video visit. TeleDirectMD physicians follow AAD 2023 atopic dermatitis guidelines, prescribing topical corticosteroids, calcineurin inhibitors, and barrier repair counseling. Adults 18+ in California can book same-day. Self pay is $49. Aetna is in-network as of April 30, 2026.</p>) },
  { id: 'ca-eczema-treatment-online-faq-1', question: "How common is eczema in California?", answer: (<p>Atopic dermatitis affects approximately 16.5 million adults in the United States per AAD data. CDC PLACES county-level data shows California county prevalence of 7–12% in adults. California wildfire smoke events and urban air pollution are documented eczema triggers. Atopic dermatitis is often comorbid with asthma and allergic rhinitis, both prevalent in California's Central Valley and coastal areas.</p>) },
  { id: 'ca-eczema-treatment-online-faq-2', question: "What eczema medications can a California telehealth doctor prescribe?", answer: (<p>A California-licensed telehealth physician can prescribe: mid-potency topical corticosteroids (triamcinolone 0.1%) for acute flares, low-potency TCS (hydrocortisone 2.5%) for face or sensitive areas, tacrolimus 0.03%–0.1% ointment or pimecrolimus 1% cream for steroid-sparing therapy, and crisaborole 2% ointment for mild-moderate disease. Dupilumab (Dupixent) requires in-person specialty evaluation.</p>) },
  { id: 'ca-eczema-treatment-online-faq-3', question: "Does California require an in-person visit before eczema telehealth?", answer: (<p>No. California B&P Code §2290.5 does not require a prior in-person visit. A California-licensed physician can establish a new patient relationship and prescribe appropriate eczema medications through a synchronous video visit when the clinical presentation supports video-based management.</p>) },
  { id: 'ca-eczema-treatment-online-faq-4', question: "When does eczema require emergency or in-person care?", answer: (<p>Go to the ER immediately for eczema herpeticum — rapidly spreading punched-out vesicles with systemic symptoms, which can be life-threatening. Seek urgent in-person care for secondary bacterial infection (crusting, weeping, expanding warmth/redness, fever). Seek in-person dermatology for severe or refractory eczema, or when dupilumab (Dupixent) biologic therapy evaluation is needed.</p>) },
  { id: 'ca-eczema-treatment-online-faq-5', question: "Is Aetna in-network for eczema treatment at TeleDirectMD in California?", answer: (<p>Yes. Aetna became an active in-network payor effective April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026. Anthem Blue Cross and Cigna enrollments are pending. Self pay is $49.</p>) },
  { id: 'ca-eczema-treatment-online-faq-6', question: "What is the cost of eczema treatment in California?", answer: (<p>TeleDirectMD charges $49 self-pay for a complete MD video visit. Generic triamcinolone costs ~$5–$15, generic tacrolimus ~$30–$60, pimecrolimus ~$40–$80. In-person dermatology visits in California typically cost $150–$350 with significant wait times.</p>) },
  { id: 'ca-eczema-treatment-online-faq-7', question: "Does California AB 744 parity law cover eczema telehealth?", answer: (<p>Yes, for in-network commercial plans. California AB 744 (2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Aetna and UHC Commercial are in-network for TeleDirectMD in California.</p>) },
  { id: 'ca-eczema-treatment-online-faq-8', question: "Can wildfire smoke trigger eczema flares in California?", answer: (<p>Yes. California wildfire season produces fine particulate matter (PM2.5) that penetrates skin and triggers inflammatory responses in atopic individuals. CDPH Office of Health Hazard Assessment documents the relationship between wildfire smoke and skin condition exacerbations. During wildfire alerts, eczema patients should apply barrier moisturizers frequently and use HEPA air filtration indoors.</p>) },
  { id: 'ca-eczema-treatment-online-faq-9', question: "Are tacrolimus and pimecrolimus safe for eczema?", answer: (<p>Tacrolimus and pimecrolimus carry FDA black box warnings about a theoretical risk of lymphoma and skin cancer with long-term use, though clinical studies have not confirmed this risk. AAD 2023 guidelines support their use for eczema, particularly on sensitive areas where topical steroids cause atrophy. TeleDirectMD physicians counsel patients on the black box warning. Not for immunocompromised patients.</p>) },
  { id: 'ca-eczema-treatment-online-faq-10', question: "What over-the-counter moisturizers help eczema?", answer: (<p>AAD recommends ceramide-containing moisturizers (CeraVe, Vanicream, Cetaphil Restoraderm) applied within 3 minutes of bathing to lock in moisture. For California's dry climate — particularly the Central Valley and Southern California deserts — barrier repair moisturizers applied 2–4 times daily reduce flare frequency. Avoid fragrances, dyes, and preservatives.</p>) },
  { id: 'ca-eczema-treatment-online-faq-11', question: "Can I refill my eczema prescription via TeleDirectMD in California?", answer: (<p>Yes. Adults 18+ in California can use TeleDirectMD to refill existing eczema prescriptions (topical corticosteroids, calcineurin inhibitors) after a video visit confirms the diagnosis remains appropriate and the ongoing regimen is clinically sound. California AB 2789 requires e-prescriptions — sent electronically to your California pharmacy.</p>) },
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org', '@type': 'MedicalWebPage',
    name: PAGE_TITLE, url: PAGE_URL,
    description: "Eczema (atopic dermatitis) treatment by secure video visit for California adults. AAD/AAAAI guideline-based care. Board-certified MD. Aetna in-network. Self pay $49.",
    datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED, inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition', name: "Eczema (Atopic Dermatitis)",
      code: { '@type': 'MedicalCode', code: "L20.9", codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#ca-eczema-treatment-online-opening', '#ca-eczema-treatment-online-opening p', '.tdmd-ca-uti__byline', '#ca-eczema-treatment-online-faq'],
    },
  };
  const faqPage = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
    { '@type': 'Question', name: "Can I get eczema treatment online in California?", acceptedAnswer: { '@type': 'Answer', text: "Yes. California Business and Professions Code Section 2290.5 permits California-licensed physicians to evaluate and treat eczema (atopic dermatitis) by secure video visit. TeleDirectMD physicians follow AAD 2023 atopic dermatitis guidelines, prescribing topical corticosteroids, calcineurin inhibitors, and barrier repair counseling. Adults 18+ in California can book same-day. Self pay is $49. Aetna is in-network as of April 30, 2026." } },
    { '@type': 'Question', name: "How common is eczema in California?", acceptedAnswer: { '@type': 'Answer', text: "Atopic dermatitis affects approximately 16.5 million adults in the United States per AAD data. CDC PLACES county-level data shows California county prevalence of 7\u201312% in adults. California wildfire smoke events and urban air pollution are documented eczema triggers. Atopic dermatitis is often comorbid with asthma and allergic rhinitis, both prevalent in California's Central Valley and coastal areas." } },
    { '@type': 'Question', name: "What eczema medications can a California telehealth doctor prescribe?", acceptedAnswer: { '@type': 'Answer', text: "A California-licensed telehealth physician can prescribe: mid-potency topical corticosteroids (triamcinolone 0.1%) for acute flares, low-potency TCS (hydrocortisone 2.5%) for face or sensitive areas, tacrolimus 0.03%\u20130.1% ointment or pimecrolimus 1% cream for steroid-sparing therapy, and crisaborole 2% ointment for mild-moderate disease. Dupilumab (Dupixent) requires in-person specialty evaluation." } },
    { '@type': 'Question', name: "Does California require an in-person visit before eczema telehealth?", acceptedAnswer: { '@type': 'Answer', text: "No. California B&P Code \u00a72290.5 does not require a prior in-person visit. A California-licensed physician can establish a new patient relationship and prescribe appropriate eczema medications through a synchronous video visit when the clinical presentation supports video-based management." } },
    { '@type': 'Question', name: "When does eczema require emergency or in-person care?", acceptedAnswer: { '@type': 'Answer', text: "Go to the ER immediately for eczema herpeticum \u2014 rapidly spreading punched-out vesicles with systemic symptoms, which can be life-threatening. Seek urgent in-person care for secondary bacterial infection (crusting, weeping, expanding warmth/redness, fever). Seek in-person dermatology for severe or refractory eczema, or when dupilumab (Dupixent) biologic therapy evaluation is needed." } },
    { '@type': 'Question', name: "Is Aetna in-network for eczema treatment at TeleDirectMD in California?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Aetna became an active in-network payor effective April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026. Anthem Blue Cross and Cigna enrollments are pending. Self pay is $49." } },
    { '@type': 'Question', name: "What is the cost of eczema treatment in California?", acceptedAnswer: { '@type': 'Answer', text: "TeleDirectMD charges $49 self-pay for a complete MD video visit. Generic triamcinolone costs ~$5\u2013$15, generic tacrolimus ~$30\u2013$60, pimecrolimus ~$40\u2013$80. In-person dermatology visits in California typically cost $150\u2013$350 with significant wait times." } },
    { '@type': 'Question', name: "Does California AB 744 parity law cover eczema telehealth?", acceptedAnswer: { '@type': 'Answer', text: "Yes, for in-network commercial plans. California AB 744 (2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Aetna and UHC Commercial are in-network for TeleDirectMD in California." } },
    { '@type': 'Question', name: "Can wildfire smoke trigger eczema flares in California?", acceptedAnswer: { '@type': 'Answer', text: "Yes. California wildfire season produces fine particulate matter (PM2.5) that penetrates skin and triggers inflammatory responses in atopic individuals. CDPH Office of Health Hazard Assessment documents the relationship between wildfire smoke and skin condition exacerbations. During wildfire alerts, eczema patients should apply barrier moisturizers frequently and use HEPA air filtration indoors." } },
    { '@type': 'Question', name: "Are tacrolimus and pimecrolimus safe for eczema?", acceptedAnswer: { '@type': 'Answer', text: "Tacrolimus and pimecrolimus carry FDA black box warnings about a theoretical risk of lymphoma and skin cancer with long-term use, though clinical studies have not confirmed this risk. AAD 2023 guidelines support their use for eczema, particularly on sensitive areas where topical steroids cause atrophy. TeleDirectMD physicians counsel patients on the black box warning. Not for immunocompromised patients." } },
    { '@type': 'Question', name: "What over-the-counter moisturizers help eczema?", acceptedAnswer: { '@type': 'Answer', text: "AAD recommends ceramide-containing moisturizers (CeraVe, Vanicream, Cetaphil Restoraderm) applied within 3 minutes of bathing to lock in moisture. For California's dry climate \u2014 particularly the Central Valley and Southern California deserts \u2014 barrier repair moisturizers applied 2\u20134 times daily reduce flare frequency. Avoid fragrances, dyes, and preservatives." } },
    { '@type': 'Question', name: "Can I refill my eczema prescription via TeleDirectMD in California?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Adults 18+ in California can use TeleDirectMD to refill existing eczema prescriptions (topical corticosteroids, calcineurin inhibitors) after a video visit confirms the diagnosis remains appropriate and the ongoing regimen is clinically sound. California AB 2789 requires e-prescriptions \u2014 sent electronically to your California pharmacy." } },
    ],
  };
  const howTo = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: "How to Get Eczema Treatment Online in California",
    description: "Three steps to receive Eczema (Atopic Dermatitis) evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.",
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '49' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California Eczema Treatment. No referral needed. Self pay $49. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in California. The physician reviews symptoms, history, and risk factors.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy.', url: PAGE_URL },
    ],
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' },
      { '@type': 'ListItem', position: 3, name: "Eczema Treatment Online in California", item: PAGE_URL },
    ],
  };
  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

export default function CaEczemaTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-eczema-treatment-online';

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
            <span aria-current="page">Eczema Treatment Online</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Eczema Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">AAD/AAAAI guideline-based eczema and atopic dermatitis care by secure video visit. Self pay $49 · Aetna in-network · UHC Commercial approved · MD-only · CA telehealth compliant.</p>
                <p>This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas seeking telehealth evaluation for eczema (atopic dermatitis).</p>
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
                  <li>Self pay $49 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>Licensed telehealth care for adults located in California at the time of the visit</li>
                </ul>
                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                </div>
                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L20.9 — Atopic dermatitis, unspecified (final coding depends on clinical details)</p>
              </div>
              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Eczema Treatment in California</h2>
                  <ul>
                    <li>Evidence-based evaluation per American Academy of Dermatology (AAD) / AAAAI</li>
                    <li>Guideline-based treatment when appropriate: AAD Atopic Dermatitis Guidelines 2023</li>
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
              <p><strong>Can I get eczema (atopic dermatitis) treatment online in California?</strong> Yes. <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California Business and Professions Code Section 2290.5</a> permits California-licensed physicians to evaluate and manage eczema (atopic dermatitis) by secure video visit. TeleDirectMD physicians follow <a href='https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis' rel='noopener' target='_blank'>AAD 2023 atopic dermatitis guidelines</a>, prescribing topical corticosteroids, topical calcineurin inhibitors (tacrolimus, pimecrolimus), and crisaborole for mild-moderate disease. Adults 18+ in California can book same-day. The <a href='https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx' rel='noopener' target='_blank'>Medical Board of California</a> holds telehealth physicians to the same standard as in-person care. Self pay is $49. <a href='/insurance/aetna/california/eczema-treatment/'>Aetna is in-network</a> as of April 30, 2026.</p>
            </div>
          </div>
        </section>

        {/* ─── CA REGULATORY BLOCK ─── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Your Eczema Treatment Visit</h2>
            <h3>Does California require an in-person visit before telehealth?</h3>
            <p>No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&amp;lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent for telehealth and document it.</p>
            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; Physicians must be licensed in California to provide telehealth to California patients.</p>
            <h3>Does California insurance parity law cover telehealth visits?</h3>
            <p>Yes. California Assembly Bill 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&amp;lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a>, requires commercial health plans to reimburse telehealth services on the same basis as comparable in-person services. Plans cannot require face-to-face contact as a condition of reimbursement.</p>
            <h3>Are eczema treatment medications controlled substances?</h3>
            <p>Medications commonly prescribed for eczema (atopic dermatitis) are not controlled substances and can be prescribed via California telehealth without restriction. California requires all prescriptions to be issued electronically under <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Assembly Bill 2789</a> (effective January 1, 2022). TeleDirectMD does not prescribe controlled substances in any state.</p>
          </div>
        </section>

        {/* ─── CA EPIDEMIOLOGY ─── */}
        <section className="tdmd-section" id={`${pid}-ca-epi`}>
          <div className="tdmd-container">
            <h2>Eczema (Atopic Dermatitis) in California — Prevalence and Context</h2>
            <p dangerouslySetInnerHTML={{ __html: "Atopic dermatitis affects approximately 16.5 million adults in the United States, according to the <a href='https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis' rel='noopener' target='_blank'>American Academy of Dermatology</a>. <a href='https://places.cdc.gov/profiles/county' rel='noopener' target='_blank'>CDC PLACES county-level data</a> for California counties shows atopic dermatitis prevalence ranging from 7\u201312% in adults. California wildfire smoke events and urban particulate matter are documented eczema triggers \u2014 the <a href='https://www.cdph.ca.gov/Programs/CCDPHP/DEODC/OHB/Pages/OHWMHome.aspx' rel='noopener' target='_blank'>CDPH Office of Health Hazard Assessment</a> links environmental exposures to increased skin condition flares. AAAAI data confirms atopic comorbidities (asthma, allergic rhinitis) are common in California's atopic population, with the Central Valley's high pollen counts and dust mite sensitization rates further burdening atopic patients." }} />
          </div>
        </section>

        {/* ─── ELIGIBILITY / DUAL PATH ─── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Eczema Treatment Telehealth Eligibility in California</h2>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Mild-to-moderate eczema flare on limbs, trunk, or neck in adults 18+</li>
                  <li>Known atopic dermatitis requiring TCS or calcineurin inhibitor refill</li>
                  <li>Trigger counseling and barrier care education (ceramide moisturizers, fragrance avoidance)</li>
                  <li>Post-flare maintenance therapy planning</li>
                </ul>
              </div>
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--alert">
                <h3>→ Seek in-person or emergency care if</h3>
                <ul>
                  <li>Eczema herpeticum — punched-out vesicles spreading rapidly — medical emergency, go to ER</li>
                  <li>Signs of secondary bacterial infection (crusting, weeping, expanding redness, fever) — urgent in-person</li>
                  <li>Severe widespread eczema affecting sleep and quality of life — dupilumab (Dupixent) biologic evaluation in-person</li>
                  <li>Eczema not responding to 2+ courses of topical steroids — in-person allergy testing or biologics evaluation</li>
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
            <h2>How Online Eczema Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your video visit</h3>
                  <p>No referral needed. Self pay $49. Many visits available same day. Note when symptoms started, any prior treatments, allergies, and relevant medical history before your visit.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a California-licensed MD by secure video</h3>
                  <p>A board-certified Family Medicine physician reviews your history, symptoms, and risk factors. Red-flag screening is performed. Consent per CA B&amp;P §2290.5 is documented. Clinical evaluation follows <a href={"https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis"} rel="noopener" target="_blank">AAD Atopic Dermatitis Guidelines 2023</a>.</p>
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
            <h2>Eczema Treatment Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$49</strong> for a complete MD video visit. Patients with in-network insurance pay their plan&apos;s telehealth copay.</p>
            <div className="tdmd-price-grid">
              <div className="tdmd-price-card">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$49</p>
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
                <h3>Typical Eczema Treatment Cost in California</h3>
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
                    <td>Enrollment pending — waiting for Anthem to confirm individual-provider enrollment for telehealth. Self pay ($49) available.</td>
                  </tr>
                  <tr>
                    <td><strong>Cigna</strong></td>
                    <td><span className="tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--pending">Pending</span></td>
                    <td>Pending determination</td>
                    <td>Pending — Telehealth Only review in progress. Self pay ($49) available.</td>
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
            <h2>Eczema Treatment Options and Medication Costs in California</h2>
            <p>Treatment follows <a href={"https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis"} rel="noopener" target="_blank">AAD Atopic Dermatitis Guidelines 2023</a>.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Eczema Treatment medication options">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved 2026-05-22. National coupon prices; actual cost varies by pharmacy. Prescription costs separate from TeleDirectMD visit fee.
                </caption>
                <thead>
                  <tr><th>Medication</th><th>Typical Regimen</th><th>GoodRx Price (2026-05)</th><th>Key Considerations</th></tr>
                </thead>
                <tbody>
                    <tr className="tdmd-med-firstline">
                      <td><strong>Triamcinolone 0.1% cream (mid-potency TCS)</strong> · First-line</td>
                      <td>Apply thin layer to affected areas twice daily for acute flares (max 2 weeks per site)</td>
                      <td><a href="https://www.goodrx.com/triamcinolone-topical" target="_blank" rel="noopener">~$5–$15 / 454g</a></td>
                      <td>Mid-potency topical corticosteroid — first-line for acute eczema flares per AAD. Avoid face, groin, axillae. Short-course to prevent skin atrophy.</td>
                    </tr>
                    <tr className="tdmd-med-firstline">
                      <td><strong>Hydrocortisone 2.5% cream (low-potency TCS)</strong> · First-line</td>
                      <td>Apply to face and flexural areas twice daily during flares</td>
                      <td><a href="https://www.goodrx.com/hydrocortisone-topical" target="_blank" rel="noopener">~$5–$10 Rx</a></td>
                      <td>Low-potency TCS for sensitive areas (face, skin folds). Rx 2.5% preferred for moderate facial involvement per AAD.</td>
                    </tr>
                    <tr className="tdmd-med-firstline">
                      <td><strong>Tacrolimus 0.03%–0.1% ointment (Protopic)</strong> · First-line</td>
                      <td>Apply twice daily to affected areas — avoid occlusion</td>
                      <td><a href="https://www.goodrx.com/tacrolimus-topical" target="_blank" rel="noopener">Generic ~$30–$60 / 60g</a></td>
                      <td>Calcineurin inhibitor — steroid-sparing option for face, skin folds per AAD. FDA black box warning — counsel patient on theoretical long-term risk.</td>
                    </tr>
                    <tr>
                      <td><strong>Pimecrolimus 1% cream (Elidel)</strong></td>
                      <td>Apply twice daily to affected areas</td>
                      <td><a href="https://www.goodrx.com/pimecrolimus" target="_blank" rel="noopener">Generic ~$40–$80</a></td>
                      <td>Calcineurin inhibitor — alternative to tacrolimus. Preferred for face/sensitive areas in patients who prefer cream over ointment. FDA black box warning.</td>
                    </tr>
                    <tr>
                      <td><strong>Crisaborole 2% ointment (Eucrisa)</strong></td>
                      <td>Apply twice daily to affected areas</td>
                      <td><a href="https://www.goodrx.com/eucrisa" target="_blank" rel="noopener">~$600+ brand</a></td>
                      <td>PDE4 inhibitor — FDA-approved for mild-moderate atopic dermatitis. Non-steroidal. High cost limits use; GoodRx may not significantly reduce brand price.</td>
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
                <small>Self pay $49 · Aetna in-network · UHC Commercial approved May 2026 · No ER wait</small>
              </div>
              <a className="tdmd-ca-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Eczema Treatment in California`}
              items={FAQ_ITEMS}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a California-licensed MD?</h3>
                <p>Book a same-day video visit. Self pay $49 · Aetna in-network · UHC Commercial approved.</p>
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
                <a key="contact-dermatitis-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/contact-dermatitis-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Contact Dermatitis Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Allergic or irritant contact dermatitis — similar rash pattern.</span>
                </a>
                <a key="acne-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/acne-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Acne Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Inflammatory skin condition — sometimes co-occurs with eczema.</span>
                </a>
                <a key="psoriasis-refills-online" className="tdmd-ca-uti__sibling" href="/ca/psoriasis-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Psoriasis Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Another chronic inflammatory dermatosis managed by telehealth.</span>
                </a>
                <a key="rosacea-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/rosacea-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Rosacea Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Facial redness and inflammation — differential from facial eczema.</span>
                </a>
                <a key="dandruff-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/dandruff-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Dandruff Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Seborrheic dermatitis — overlaps with eczema on face/scalp.</span>
                </a>
                <a key="poison-ivy-oak-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/poison-ivy-oak-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Poison Ivy/Oak Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Acute allergic contact dermatitis — treated similarly to eczema flares.</span>
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
              <a href="/insurance/aetna/california/eczema-treatment-online/">Aetna × California × Eczema Treatment</a>
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
              <li><a href="https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis" rel="noopener" target="_blank">AAD Atopic Dermatitis Guidelines 2023</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.aaaai.org/Conditions-Treatments/Conditions-Dictionary/Atopic-Dermatitis" rel="noopener" target="_blank">AAAAI — Atopic Dermatitis</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://places.cdc.gov/profiles/county" rel="noopener" target="_blank">CDC PLACES — County Health Data</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California B&P Code §2290.5</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 (AB 744)</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/CCDPHP/DEODC/OHB/Pages/OHWMHome.aspx" rel="noopener" target="_blank">CDPH — Office of Health Hazard Assessment</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.goodrx.com/triamcinolone-topical" rel="noopener" target="_blank">GoodRx — Triamcinolone Topical</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.goodrx.com/tacrolimus-topical" rel="noopener" target="_blank">GoodRx — Tacrolimus Topical</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS Telehealth FAQ</a>. Retrieved 2026-05-22.</li>
              <li><a href="https://www.goodrx.com/hydrocortisone-topical" rel="noopener" target="_blank">GoodRx — Hydrocortisone Topical</a>. Retrieved 2026-05-22.</li>
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

        <WhatDoesThisCostBlock conditionSlug="eczema-treatment-online" conditionName="Eczema Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="eczema-treatment-online" />
        <CommonSymptomsBlock conditionSlug="eczema-treatment-online" conditionName="Eczema Treatment" />
      </div>
    </>
  );
}
