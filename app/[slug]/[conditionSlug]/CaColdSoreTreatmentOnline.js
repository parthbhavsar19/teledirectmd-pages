/**
 * CaColdSoreTreatmentOnline.js — California × Cold Sores page (v3)
 * URL: /ca/cold-sore-treatment-online/
 * Authority: CDC + IDSA (HSV-1)
 * ICD-10: B00.1
 */
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/cold-sore-treatment-online/';
const PAGE_TITLE = 'Cold Sore Treatment Online in California | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-20';
const DATE_MODIFIED = '2026-05-20';
const PHYSICIAN = { name: 'Parth Bhavsar, MD', npi: '1104323203', specialty: 'Family Medicine', licenseState: 'California', headshot: '/images/dr-parth-bhavsar.jpg', bioUrl: '/about' };

const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true, notes: 'Commercial plans. In-network as of April 30, 2026.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true, notes: 'Commercial + Medicare Advantage. Excludes Medi-Cal, Individual Exchange, Navigate/Charter/Core.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending', inNetwork: false, notes: 'Enrollment pending. Self pay ($79) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending', inNetwork: false, notes: 'Telehealth Only review in progress. Self pay ($79) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false, notes: 'Closed system. Use Kaiser telehealth at kp.org.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false, notes: 'Not enrolled. Find Medi-Cal providers at dhcs.ca.gov.' },
];

const MEDICATIONS = [
  { name: 'Valacyclovir (Valtrex) 2 g', regimen: '2 g twice daily × 1 day (started at prodrome)', price: '~$26.19 / 30 tablets (1g)', priceHref: 'https://www.goodrx.com/valacyclovir', firstLine: true, notes: 'FDA-approved for orolabial herpes — 2-dose single-day regimen. Start at first tingling/prodrome for maximum benefit. GoodRx price for 30×1g tabs.' },
  { name: 'Acyclovir 400 mg', regimen: '400 mg 5× daily × 5 days OR 800 mg 3× daily × 2 days', price: '~$11.36 / 30 tablets', priceHref: 'https://www.goodrx.com/acyclovir', firstLine: true, notes: 'First-line alternative per CDC. Multiple daily doses; equally effective to valacyclovir for cold sores.' },
  { name: 'Valacyclovir 500 mg (suppressive)', regimen: '500 mg once daily for frequent recurrences (≥6/year)', price: '~$37.67 / 90 tablets (500mg)', priceHref: 'https://www.goodrx.com/valacyclovir', firstLine: false, notes: 'Suppressive therapy for patients with ≥6 episodes/year. Reduces recurrence frequency by approximately 50%.' }
];

const CA_SIBLINGS = [
  {'slug': 'genital-herpes-treatment-online', 'label': 'Genital Herpes Treatment in CA', 'why': 'Related HSV infection — HSV-1 can also cause genital herpes.'}, {'slug': 'uti-treatment-online', 'label': 'UTI Treatment in CA', 'why': 'Other common telehealth condition frequently treated alongside.'}, {'slug': 'chlamydia-treatment-online', 'label': 'Chlamydia Treatment in CA', 'why': 'Sexual health co-management common in reproductive-age adults.'}, {'slug': 'performance-anxiety-treatment-online', 'label': 'Performance Anxiety Treatment in CA', 'why': 'Stress is a common cold sore trigger — managed as primary care condition.'}, {'slug': 'birth-control-refills-online', 'label': 'Birth Control Refills in CA', 'why': "Women's health condition frequently discussed in same visit."}, {'slug': 'yeast-infection-treatment-online', 'label': 'Yeast Infection Treatment in CA', 'why': 'Common condition in women with active cold sores or HSV.'}
];

const FAQ_ITEMS = [
  { question: 'Can I get cold sore treatment online in California?', answer: (<p dangerouslySetInnerHTML={{ __html: "Yes. <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California Business and Professions Code Section 2290.5</a> permits California-licensed physicians to treat recurrent orolabial herpes by synchronous video visit. The <a href='https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx' rel='noopener' target='_blank'>Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. For adults with a history of cold sores and classic prodrome symptoms, telehealth antiviral prescribing is appropriate. Self pay is $79. Aetna is in-network as of April 30, 2026." }} />) },
  { question: 'What is the best treatment for cold sores in California?', answer: (<p dangerouslySetInnerHTML={{ __html: "Per the <a href='https://www.cdc.gov/std/treatment-guidelines/herpes.htm' rel='noopener' target='_blank'>CDC STI Treatment Guidelines 2021</a>, valacyclovir 2 g twice daily × 1 day (started at first prodrome) is FDA-approved for orolabial herpes and significantly reduces healing time. Acyclovir 400 mg 5× daily × 5 days is an equally effective alternative. Antivirals work best when started within the first 24–72 hours of prodrome symptoms — before blisters fully form." }} />) },
  { question: 'How common are cold sores in California?', answer: (<p dangerouslySetInnerHTML={{ __html: "Cold sores affect approximately 67% of adults under age 50 globally per the <a href='https://www.cdc.gov/herpes/statistics/index.html' rel='noopener' target='_blank'>CDC</a>. In California with approximately 39 million residents, an estimated 20–25 million Californians carry HSV-1. Recurrences are triggered by sun exposure, stress, illness, and immunosuppression — all common in California's climate and lifestyle." }} />) },
  { question: 'How much does valacyclovir cost in California with GoodRx?', answer: (<p dangerouslySetInnerHTML={{ __html: "With a GoodRx coupon at <a href='https://www.goodrx.com/valacyclovir' rel='noopener' target='_blank'>goodrx.com</a>, valacyclovir 1g costs approximately $26.19 for 30 tablets and $37.67 for 90 tablets (500mg) as of May 2026. The 2-dose episodic regimen (valacyclovir 2 g × 2 doses, 12 hours apart) requires approximately 4 × 1g tablets total — approximately $3–$5 per episode. Prescription costs are separate from the TeleDirectMD $79 visit fee." }} />) },
  { question: 'Does California AB 744 parity apply to cold sore treatment visits?', answer: (<p dangerouslySetInnerHTML={{ __html: "<a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS' rel='noopener' target='_blank'>California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services when TeleDirectMD is in-network. Aetna (active April 30, 2026) and UnitedHealthcare Commercial (approved May 29, 2026) are in-network in California." }} />) },
  { question: 'Is Aetna in-network with TeleDirectMD in California for cold sore treatment?', answer: (<p dangerouslySetInnerHTML={{ __html: "Aetna became in-network for TeleDirectMD in California effective April 30, 2026. Verify plan eligibility with Aetna before your visit. Self pay ($79) is available regardless of insurance. See <a href='/insurance'>all insurance options</a>." }} />) },
  { question: 'Will Medi-Cal cover cold sore treatment at TeleDirectMD?', answer: (<p dangerouslySetInnerHTML={{ __html: "TeleDirectMD is not currently enrolled as a Medi-Cal rendering provider. <a href='https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx' rel='noopener' target='_blank'>California DHCS</a> confirms Medi-Cal covers telehealth for enrolled providers. If you have Medi-Cal, use the $79 self-pay option or seek a Medi-Cal-enrolled telehealth provider." }} />) },
  { question: 'Can cold sores spread to the eyes or other body parts?', answer: (<p dangerouslySetInnerHTML={{ __html: 'Yes. HSV-1 can spread to the eye through autoinoculation (touching a cold sore and then touching the eye) — causing herpes simplex keratitis, a serious condition that requires urgent ophthalmology evaluation. HSV can also spread to the fingers (herpetic whitlow) or genitals (through oral-genital contact). TeleDirectMD does not manage HSV keratitis or CNS involvement — these require immediate in-person specialist care.' }} />) },
  { question: 'Does California require an in-person visit before telehealth for cold sore treatment?', answer: (<p dangerouslySetInnerHTML={{ __html: "No. <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California B&P Code §2290.5</a> does not require a prior in-person visit before telehealth services. For patients with recurrent cold sores and a clear history, antiviral treatment can be prescribed through a video visit." }} />) },
  { question: 'When do cold sores require urgent in-person care in California?', answer: (<p dangerouslySetInnerHTML={{ __html: "Seek urgent in-person evaluation if: cold sores are near the eye (possible herpes keratitis — can threaten vision); you have systemic fever or very severe illness; cold sores occur in a newborn or young infant; you are severely immunocompromised and sores are spreading or non-healing; or this is a first episode with very severe symptoms. <a href='https://www.plannedparenthood.org/get-care' rel='noopener' target='_blank'>Planned Parenthood California</a> and urgent care facilities provide in-person evaluation across the state." }} />) },
  { question: 'How quickly will my cold sore prescription reach a California pharmacy?', answer: (<p dangerouslySetInnerHTML={{ __html: 'California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022). If valacyclovir or acyclovir is appropriate, TeleDirectMD sends an e-prescription to your chosen California pharmacy during or after your visit — most pharmacies fill within 1–4 hours. These antivirals are not controlled substances.' }} />) },
  { question: 'Can cold sore antivirals be used for suppressive therapy in California?', answer: (<p dangerouslySetInnerHTML={{ __html: "Yes. For patients with frequent cold sore recurrences (6 or more per year), daily suppressive therapy with valacyclovir 500 mg once daily reduces recurrence frequency by approximately 50% per the <a href='https://www.cdc.gov/std/treatment-guidelines/herpes.htm' rel='noopener' target='_blank'>CDC</a>. TeleDirectMD can prescribe suppressive antiviral therapy for appropriate patients after evaluating recurrence frequency and contraindications." }} />) }
];

function buildSchemas() {
  const medicalWebPage = { '@context': 'https://schema.org', '@type': 'MedicalWebPage', name: PAGE_TITLE, url: PAGE_URL, description: 'Cold Sore Treatment Online in California | TeleDirectMD by secure video visit for California adults. Board-certified Family Medicine physician. CA telehealth law compliant. Aetna in-network. Self pay $79.', datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED, inLanguage: 'en-US', about: { '@type': 'MedicalCondition', name: 'Cold Sores', code: { '@type': 'MedicalCode', code: 'B00.1', codingSystem: 'ICD-10-CM' } }, medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', geographicArea: { '@type': 'AdministrativeArea', name: 'California' } }, reviewedBy: { '@type': 'Physician', '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar', name: PHYSICIAN.name, identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi }, medicalSpecialty: PHYSICIAN.specialty, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certification — American Board of Family Medicine' }], licensedIn: PHYSICIAN.licenseState, worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' }, sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'] }, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#ca-cold-sore-opening', '#ca-cold-sore-opening p', '.tdmd-ca-cold-sore__byline', '#ca-cold-sore-treatment-online-faq'] } };
  const faqPage = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: extractPlain(faq.answer) } })) };
  const howTo = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Get Cold Sores Treatment Online in California', totalTime: 'PT30M', estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' }, step: [{ '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com. Self pay $79. No referral needed.', url: 'https://teledirectmd.com/book-online' }, { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD', text: 'Physician reviews symptoms and completes red-flag screening per clinical guidelines.', url: PAGE_URL }, { '@type': 'HowToStep', position: 3, name: 'Receive e-prescription', text: 'If appropriate, e-prescription sent to your California pharmacy under AB 2789.', url: PAGE_URL }] };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' }, { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' }, { '@type': 'ListItem', position: 3, name: 'Cold Sore Treatment Online', item: PAGE_URL }] };
  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

function extractPlain(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractPlain).join('');
  if (node.props && node.props.children) return extractPlain(node.props.children);
  return '';
}

const PAGE_CSS = `.tdmd-ca-cold-sore{color:var(--tdmd-text);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__byline img{width:56px;height:56px;border-radius:50%;border:2px solid var(--tdmd-teal);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__byline-name{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__dual-card--good{border-left:5px solid #2E7D52;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__dual-card--alert{border-left:5px solid var(--tdmd-accent);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__dual-card h3{margin:0 0 0.5rem;color:var(--tdmd-navy);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}@media (max-width:720px){.tdmd-ca-cold-sore .tdmd-ca-cold-sore__dual{grid-template-columns:minmax(0,1fr);}}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__sibling-label{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__payor-pill--good{background:#E6F4EA;color:#1F6B36;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}.tdmd-ca-cold-sore .tdmd-ca-cold-sore__cta-strip .ca-cold-sore__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;}.tdmd-ca-cold-sore .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}.tdmd-ca-cold-sore .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;}.tdmd-ca-cold-sore .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;font-weight:600;}.tdmd-ca-cold-sore .tdmd-med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}`;

export default function CaColdSoreTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-cold-sore-treatment-online';
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {schemas.map((schema, i) => (<script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div className='tdmd-ca-cold-sore'>
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Cold Sore Treatment Online</span>
          </div>
        </nav>

        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Cold Sore Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">California adults: board-certified MD by secure video. Self pay $79 · Aetna in-network · UHC Commercial approved · CA B&P §2290.5 compliant.</p>
                <p dangerouslySetInnerHTML={{ __html: "Cold sores — caused by herpes simplex virus type 1 (HSV-1) — affect approximately 67% of adults worldwide under age 50, according to the <a href='https://www.cdc.gov/herpes/statistics/index.html' rel='noopener' target='_blank'>CDC</a>. In California, with a population of approximately 39 million, an estimated 20–25 million Californians carry HSV-1. Cold sores (orolabial herpes) appear as painful blisters on or around the lips, typically preceded by a tingling or burning prodrome. They are self-limited but antiviral therapy shortens healing time, reduces viral shedding, and decreases recurrence frequency when used promptly. TeleDirectMD evaluates California adults with classic recurrent orolabial herpes and prescribes guideline-based antiviral treatment when appropriate. Serving Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, and Anaheim." }} />
                <div className='tdmd-ca-cold-sore__byline' aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className='tdmd-ca-cold-sore__byline-text'>
                    <span className='tdmd-ca-cold-sore__byline-name'>Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}</span>
                    <span className='tdmd-ca-cold-sore__byline-meta'>NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                  </div>
                </div>
                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opener`}>Can I get treatment online?</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>California epidemiology</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Treatment options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                </ul>
                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care — no mid-levels</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>Licensed telehealth for California adults at time of visit</li>
                </ul>
                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
                </div>
                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> B00.1</p>
              </div>
              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Cold Sores Care in California</h2>
                  <ul>
                    <li>Symptom evaluation and red-flag screening</li>
                    <li>Guideline-based treatment when clinically appropriate</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up instructions and prevention guidance</li>
                    <li>Dual-path guidance for in-person alternatives</li>
                  </ul>
                  <p className="tdmd-hero-note">Adults 18+ only. First-episode primary orolabial HSV with severe symptoms (systemic illness, keratitis, encephalitis) requires in-person evaluation. TeleDirectMD does not manage HSV eye infections or CNS involvement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-opener`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener" id='ca-cold-sore-opening'>
              <h2>Can I Get Cold Sore Treatment Online in California?</h2>
              <p dangerouslySetInnerHTML={{ __html: "<strong>Yes.</strong> <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California Business and Professions Code Section 2290.5</a> permits California-licensed physicians to evaluate and prescribe antiviral treatment for cold sores by synchronous video visit. The <a href='https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx' rel='noopener' target='_blank'>Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. For adults with classic recurrent orolabial HSV-1 — familiar prodrome followed by labial blistering — telehealth evaluation is clinically appropriate. Per the <a href='https://www.cdc.gov/std/treatment-guidelines/herpes.htm' rel='noopener' target='_blank'>CDC STI Treatment Guidelines 2021</a>, valacyclovir 2 g twice daily × 1 day (2-dose episodic regimen) significantly reduces cold sore healing time when initiated at prodrome. Self pay is $79. Aetna is in-network as of April 30, 2026." }} />
              <small className="tdmd-condition-opener__meta">Reviewed by <a href="/about/">Parth Bhavsar, MD</a> · Board-Certified Family Medicine · NPI 1104323203 · Licensed in California · Last reviewed May 20, 2026</small>
            </div>
          </div>
        </section>

        

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Cold Sores Treatment</h2>
            <h3>Does California require an in-person visit before telehealth?</h3>
            <p><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> does not require a prior in-person visit before telehealth services. A California-licensed physician can prescribe appropriate non-controlled medications through a synchronous video visit after obtaining informed consent.</p>
            <h3>Does California parity law apply to Cold Sores treatment visits?</h3>
            <p><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Parity applies when TeleDirectMD is in-network. Aetna (active April 30, 2026) and UnitedHealthcare Commercial (approved May 29, 2026) are in-network in California.</p>
            <h3>Are Cold Sores medications controlled substances in California?</h3>
            <p>The medications used to treat Cold Sores are not controlled substances and can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789, per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.</p>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>Cold Sores in California</h2>
            <p dangerouslySetInnerHTML={{ __html: "Cold sores affect approximately 67% of adults under age 50 globally, per the <a href='https://www.cdc.gov/herpes/statistics/index.html' rel='noopener' target='_blank'>CDC</a>. In California, millions of adults experience recurrent orolabial HSV-1 outbreaks — often triggered by sun exposure, stress, illness, or immunosuppression. California&apos;s diverse population and high UV exposure make sun-triggered cold sore recurrences particularly common. Orolabial herpes is not a reportable condition in California, but it represents a significant clinical and quality-of-life burden for affected individuals. Antiviral suppressive therapy reduces recurrence frequency by approximately 50% for patients with frequent cold sores." }} />
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Cold Sores Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content"><h3>Book your California video visit</h3><p>No referral or insurance required. Self pay $79. Before your visit, note your symptoms, prior diagnoses, medications, and allergies.</p></div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content"><h3>See a California-licensed MD by secure video</h3><p>The physician reviews your clinical history, performs red-flag screening per clinical guidelines, and assesses whether telehealth treatment is appropriate. Consent under CA B&P §2290.5 is documented.</p></div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content"><h3>Receive treatment plan and, if appropriate, a prescription</h3><p>If treatment is clinically appropriate, a California-compliant e-prescription is sent to your chosen California pharmacy during or after your visit. Follow-up instructions are provided.</p><div className="tdmd-decision-cta"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Cold Sores Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit.</p>
            <div className="tdmd-price-grid">
              <div className="tdmd-price-card"><h3>TeleDirectMD Video Visit</h3><p className="tdmd-price-big">$79</p><p className="tdmd-price-sub">Self-pay flat fee — no subscription</p><ul className="tdmd-price-includes"><li>Board-certified MD evaluation</li><li>Guideline-based treatment plan</li><li>e-Prescription to your CA pharmacy</li><li>Follow-up instructions and prevention guidance</li></ul></div>
              <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
                <h3>Typical Treatment Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges before insurance. Actual costs vary.</p>
                <div className="tdmd-vbars" role="list">
                  {[{ name: 'TeleDirectMD', value: '$79', heightPct: 13, isTdmd: true }, { name: 'Other telehealth', value: '$75–$150', heightPct: 22 }, { name: 'Urgent care', value: '$150–$300', heightPct: 45 }, { name: 'ER visit', value: '$500–$3,000+', heightPct: 100 }].map((bar, i) => (
                    <div key={i} className="tdmd-vbar" role="listitem"><span className="tdmd-vbar__value">{bar.value}</span><div className={`tdmd-vbar__fill${bar.isTdmd ? ' tdmd-vbar__fill--tdmd' : ''}`} style={{ height: `${bar.heightPct}%` }} aria-hidden="true" /><span className={`tdmd-vbar__label${bar.isTdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>{bar.name}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <h3 style={{ marginTop: '1.75rem' }}>California Payor Status — TeleDirectMD</h3>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="TeleDirectMD California payor status">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>Source: TeleDirectMD payor enrollment records, May 2026. Verify with your insurer before booking.</caption>
                <thead><tr><th>Insurer</th><th>Status</th><th>Effective</th><th>Notes</th></tr></thead>
                <tbody>
                  {CA_PAYORS.map((p) => {
                    const pillClass = p.inNetwork ? 'tdmd-ca-cold-sore__payor-pill tdmd-ca-cold-sore__payor-pill--good' : (p.status === 'Pending' || p.status === 'Approved') ? 'tdmd-ca-cold-sore__payor-pill tdmd-ca-cold-sore__payor-pill--pending' : 'tdmd-ca-cold-sore__payor-pill tdmd-ca-cold-sore__payor-pill--none';
                    return (<tr key={p.name}><td><strong>{p.name}</strong></td><td><span className={pillClass}>{p.inNetwork ? '✓ In-Network' : p.status}</span></td><td>{p.effective}</td><td>{p.notes}</td></tr>);
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Cold Sores Treatment Options and Costs in California</h2>
            <p dangerouslySetInnerHTML={{ __html: "Per the <a href='https://www.cdc.gov/std/treatment-guidelines/herpes.htm' rel='noopener' target='_blank'>CDC STI Treatment Guidelines 2021</a> and <a href='https://www.idsociety.org/practice-guideline/herpes-simplex-virus/' rel='noopener' target='_blank'>IDSA guidelines</a>, antiviral therapy reduces cold sore duration and severity when initiated promptly at prodrome." }} />
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Cold Sores treatment options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>GoodRx prices retrieved May 2026. Prescription costs separate from visit fee.</caption>
                <thead><tr><th>Medication</th><th>Typical Regimen</th><th>GoodRx Price (May 2026)</th><th>Key Considerations</th></tr></thead>
                <tbody>
                  {MEDICATIONS.map((med) => (<tr key={med.name} className={med.firstLine ? 'tdmd-med-firstline' : ''}><td><strong>{med.name}</strong>{med.firstLine ? ' · First-line' : ''}</td><td>{med.regimen}</td><td>{med.priceHref ? <a href={med.priceHref} target="_blank" rel="noopener">{med.price}</a> : med.price}</td><td>{med.notes}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note"><strong>Important:</strong> Medication selection depends on allergies, drug interactions, clinical circumstances, and contraindications assessed by the physician at the visit.</p>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care for Cold Sores in California</h2>
            <div className='tdmd-ca-cold-sore__dual'>
              <div className='tdmd-ca-cold-sore__dual-card tdmd-ca-cold-sore__dual-card--good'>
                <h3>✓ Use TeleDirectMD if</h3>
                <ul dangerouslySetInnerHTML={{ __html: '<li>Classic recurrent cold sore symptoms: familiar tingling prodrome, then labial blisters</li><li>Prior confirmed cold sore history</li><li>No fever or systemic illness</li><li>Adult 18+, located in California</li><li>Aetna or UHC Commercial (in-network), or self pay $79</li>' }} />
              </div>
              <div className='tdmd-ca-cold-sore__dual-card tdmd-ca-cold-sore__dual-card--alert'>
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: '<strong>Eye involvement:</strong> HSV keratitis — urgent ophthalmology required' }} />
                  <li><strong><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood California</a>:</strong> Free/low-cost sexual health evaluation and testing</li>
                  <li><strong><a href="https://www.familypact.org" rel="noopener" target="_blank">California Family PACT</a>:</strong> Free reproductive health care for eligible low-income Californians</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local sexual health clinics statewide</li>
                  <li><strong><a href="https://www.hhs.gov/opa/title-x-family-planning/index.html" rel="noopener" target="_blank">California Title X Clinics</a>:</strong> Free or low-cost reproductive health care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className='tdmd-ca-cold-sore__cta-strip' role="complementary">
              <div><p>Book a same-day video visit — California adults, 18+</p><small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026</small></div>
              <a className='ca-cold-sore__cta-btn' href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion sectionTitle={`Frequently Asked Questions — Cold Sores Treatment in California`} items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))} />
            <div className="tdmd-bottom-cta"><div className="tdmd-bottom-cta-copy"><h3>Ready to see a California-licensed MD?</h3><p>Book a same-day video visit. Self pay $79 · Aetna in-network · UHC Commercial approved.</p></div><div className="tdmd-bottom-cta-actions"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a><a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a></div></div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <div className='tdmd-ca-cold-sore__sibling-grid'>
              {CA_SIBLINGS.map((s) => (<a key={s.slug} className='tdmd-ca-cold-sore__sibling' href={`/ca/${s.slug}/`}><span className='tdmd-ca-cold-sore__sibling-label'>{s.label}</span><span className='tdmd-ca-cold-sore__sibling-why'>{s.why}</span></a>))}
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel="noopener" target="_blank">California B&P Code §2290.5 — Telehealth Advancement Act</a>. Retrieved May 2026.</li>
              <li><a href='https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx' rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a>. Retrieved May 2026.</li>
              <li><a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS' rel="noopener" target="_blank">California Insurance Code §10123.85 (AB 744)</a>. Retrieved May 2026.</li>
              <li><a href='https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx' rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a>. Retrieved May 2026.</li>
              <li><a href='https://www.cdc.gov/std/treatment-guidelines/herpes.htm' rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021 — Genital and Orolabial HSV Infections</a>. Retrieved May 2026.</li>
              <li><a href='https://www.cdc.gov/herpes/statistics/index.html' rel="noopener" target="_blank">CDC — Herpes Simplex Virus Prevalence Statistics</a>. Retrieved May 2026.</li>
              <li><a href='https://www.idsociety.org/practice-guideline/herpes-simplex-virus/' rel="noopener" target="_blank">IDSA — Herpes Simplex Virus Guidelines</a>. Retrieved May 2026.</li>
              <li><a href='https://www.goodrx.com/valacyclovir' rel="noopener" target="_blank">GoodRx — Valacyclovir Prices (May 2026)</a>. Retrieved May 2026.</li>
              <li><a href='https://www.goodrx.com/acyclovir' rel="noopener" target="_blank">GoodRx — Acyclovir Prices (May 2026)</a>. Retrieved May 2026.</li>
              <li><a href='https://www.plannedparenthood.org/get-care' rel="noopener" target="_blank">Planned Parenthood — Get Care</a>. Retrieved May 2026.</li>
              <li><a href='https://www.familypact.org' rel="noopener" target="_blank">California Family PACT</a>. Retrieved May 2026.</li>
              <li><a href='https://www.211ca.org' rel="noopener" target="_blank">California 211</a>. Retrieved May 2026.</li>
              <li><a href='https://www.mbc.ca.gov/News/' rel="noopener" target="_blank">Medical Board of California — AB 2789 E-Prescribing</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes only and is not a substitute for individualized medical advice. Treatment decisions are made by a California-licensed board-certified physician based on clinical history at the time of the visit. TeleDirectMD does not prescribe controlled substances. GoodRx prices retrieved May 2026; actual pharmacy costs vary. If you have emergency symptoms, call 911 or go to the nearest emergency room.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug='cold-sore-treatment-online' conditionName='Cold Sores' stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug='cold-sore-treatment-online' />
        <CommonSymptomsBlock conditionSlug='cold-sore-treatment-online' conditionName='Cold Sores' />
      </div>
    </>
  );
}
