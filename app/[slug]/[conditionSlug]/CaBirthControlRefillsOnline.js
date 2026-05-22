/**
 * CaBirthControlRefillsOnline.js — California × Birth Control Refills page (v3)
 * URL: /ca/birth-control-refills-online/
 * ICD-10: Z30.40
 */
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/birth-control-refills-online/';
const PAGE_TITLE = 'Birth Control Refills Online in California | TeleDirectMD';
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
  { name: 'Combined oral contraceptive pills (various brands)', regimen: 'Daily oral pill (28-day pack); multiple formulations available', price: '~$0–$50/month with GoodRx; many covered by insurance at $0', priceHref: 'https://www.goodrx.com/birth-control-pill', firstLine: true, notes: 'Most common. Contraindicated in smokers ≥35, hypertension, history of DVT/PE, certain migraines with aura. US MEC Category 3–4 apply.' },
  { name: 'Progestin-only pill (norethindrone 0.35 mg)', regimen: 'Daily at same time each day — no placebo week', price: '~$15–$25/month with GoodRx', priceHref: 'https://www.goodrx.com/norethindrone', firstLine: true, notes: 'Safe for women who cannot use estrogen — including those with DVT history, smokers ≥35, and postpartum breastfeeding women. US MEC Category 1–2 for most conditions.' },
  { name: 'Contraceptive patch (norelgestromin/ethinyl estradiol)', regimen: 'Apply weekly ×3 weeks, then 1 patch-free week', price: '~$30–$80/month with GoodRx', priceHref: 'https://www.goodrx.com/xulane', firstLine: true, notes: 'Combined hormonal contraceptive. Same contraindications as COC pills. Useful for patients with pill-taking adherence challenges.' },
  { name: 'NuvaRing / Annovera (vaginal ring)', regimen: 'Insert ring vaginally for 3 weeks; remove for 1 week', price: '~$20–$100/month with GoodRx (generic)', priceHref: 'https://www.goodrx.com/nuvaring', firstLine: false, notes: 'Combined hormonal — same contraindications as COC pills. Self-administered. May be refilled via telehealth.' }
];

const CA_SIBLINGS = [
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection Treatment in CA', why: 'Hormonal birth control can alter vaginal flora — VVC is common in contraceptive users.' },
  { slug: 'bv-treatment-online', label: 'BV Treatment in CA', why: 'Vaginal flora changes with hormonal contraception may increase BV risk.' },
  { slug: 'vaginal-dryness-treatment-online', label: 'Vaginal Dryness Treatment in CA', why: 'Some progestin-only methods reduce vaginal lubrication.' },
  { slug: 'chlamydia-treatment-online', label: 'Chlamydia Treatment in CA', why: 'STI screening recommended with contraceptive visits per CDC.' },
  { slug: 'genital-herpes-treatment-online', label: 'Genital Herpes Treatment in CA', why: 'Sexual health care commonly discussed at contraceptive visits.' },
  { slug: 'uti-treatment-online', label: 'UTI Treatment in CA', why: 'UTI is frequently discussed alongside reproductive health care.' }
];

const FAQ_ITEMS = [
  { question: 'Can I get a birth control prescription refill online in California without an in-person visit?', answer: (<p>Yes. <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California B&P Code §2290.5</a> permits California-licensed physicians to refill hormonal contraception via video visit. Per <a href='https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/11/over-the-counter-access-to-hormonal-contraception' rel='noopener' target='_blank'>ACOG Committee Opinion 788 (2019)</a>, a pelvic exam is not required for contraceptive continuation in most women — a medical history review and blood pressure assessment are sufficient. TeleDirectMD self pay is $79.</p>) },
  { question: 'Does California require a pelvic exam before refilling birth control?', answer: (<p>No. Per <a href='https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/11/over-the-counter-access-to-hormonal-contraception' rel='noopener' target='_blank'>ACOG Committee Opinion 788</a>, pelvic examinations are not required for initiation or continuation of hormonal contraceptive methods in most women. Annual wellness visits (including Pap smears when due) are important but separate from contraceptive prescribing and do not need to occur before a refill.</p>) },
  { question: 'Which birth control methods can be refilled via telehealth in California?', answer: (<p>Combined oral contraceptive pills, progestin-only pills (mini-pill), contraceptive patch, and vaginal rings can typically be refilled via telehealth. Methods requiring in-person procedures — IUDs, implants, injections — require in-person visits. TeleDirectMD follows the <a href='https://www.cdc.gov/contraception/hcp/mec/summary-chart-us-medical-eligibility-criteria.html' rel='noopener' target='_blank'>CDC US Medical Eligibility Criteria</a> to assess eligibility for each method.</p>) },
  { question: 'How much does birth control cost in California with GoodRx?', answer: (<p>Costs vary by method. Combined oral contraceptive pills: ~$0–$50/month with GoodRx coupon (many brands) or $0 with ACA-compliant insurance. Progestin-only pills: ~$15–$25/month. Contraceptive patch: ~$30–$80/month with GoodRx. Generic NuvaRing: ~$20–$100/month. Many California insurance plans cover FDA-approved contraceptives at $0 cost-sharing under the ACA. See <a href='https://www.goodrx.com/birth-control-pill' rel='noopener' target='_blank'>GoodRx birth control prices</a>.</p>) },
  { question: 'What is the CDC US Medical Eligibility Criteria and how does it apply to birth control refills?', answer: (<p>The <a href='https://www.cdc.gov/contraception/hcp/mec/summary-chart-us-medical-eligibility-criteria.html' rel='noopener' target='_blank'>CDC US Medical Eligibility Criteria for Contraceptive Use (US MEC)</a> classifies contraceptive methods by safety for specific medical conditions. Category 1 = no restriction; Category 2 = advantages outweigh risks; Category 3 = risks outweigh advantages; Category 4 = unacceptable health risk. TeleDirectMD physicians use US MEC to guide prescribing — combined hormonal methods are Category 3–4 for women with hypertension, DVT history, migraine with aura, or age ≥35 with smoking.</p>) },
  { question: 'Can I get birth control for the first time (not just a refill) via telehealth in California?', answer: (<p>Yes. Per <a href='https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/11/over-the-counter-access-to-hormonal-contraception' rel='noopener' target='_blank'>ACOG Committee Opinion 788</a>, hormonal contraception initiation does not require a pelvic exam — medical history and blood pressure are the key assessments. TeleDirectMD can initiate a new prescription after reviewing your health history for contraindications per CDC US MEC. A Pap smear, when due, should be scheduled separately at an in-person visit.</p>) },
  { question: 'Is Aetna in-network with TeleDirectMD in California for birth control refills?', answer: (<p>Aetna became in-network for TeleDirectMD in California effective April 30, 2026. Aetna commercial plan members may be able to use in-network benefits. Always verify plan eligibility with Aetna before your visit. Self pay ($79) is available regardless of insurance. See <a href='/insurance'>all insurance options</a>.</p>) },
  { question: 'Will Medi-Cal cover birth control refills at TeleDirectMD in California?', answer: (<p>TeleDirectMD is not currently enrolled as a Medi-Cal rendering provider. <a href='https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx' rel='noopener' target='_blank'>California DHCS</a> confirms Medi-Cal covers telehealth when the provider is enrolled. For free or low-cost contraception with Medi-Cal, contact <a href='https://www.plannedparenthood.org/get-care' rel='noopener' target='_blank'>Planned Parenthood California</a> or <a href='https://www.familypact.org' rel='noopener' target='_blank'>California Family PACT</a>, which provides free reproductive health care to eligible low-income Californians.</p>) },
  { question: 'Who should NOT use combined hormonal birth control (pill, patch, ring)?', answer: (<p>Per <a href='https://www.cdc.gov/contraception/hcp/mec/summary-chart-us-medical-eligibility-criteria.html' rel='noopener' target='_blank'>CDC US MEC</a>, combined hormonal contraceptives (CHCs) are contraindicated (Category 4) for women with: history of deep vein thrombosis or pulmonary embolism; uncontrolled hypertension; migraine with aura at any age; age ≥35 who smoke; history of stroke, heart disease, or complicated valvular disease; active liver disease; or current breast cancer. Progestin-only pills may be appropriate alternatives for many of these women.</p>) },
  { question: 'Does California AB 744 parity law require insurance to cover birth control telehealth visits?', answer: (<p><a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS' rel='noopener' target='_blank'>California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services when TeleDirectMD is in-network. Additionally, the ACA requires most commercial insurance plans to cover FDA-approved contraceptives at $0 cost-sharing — making many birth control prescriptions free even without TeleDirectMD being in-network.</p>) },
  { question: 'How long can I get a birth control prescription for at one visit?', answer: (<p>California law allows physicians to prescribe up to a 12-month supply of hormonal contraception at one time, in accordance with California Health and Safety Code. A 12-month supply reduces pharmacy trips and improves contraceptive adherence. TeleDirectMD's physician will determine the appropriate supply duration based on your clinical history.</p>) },
  { question: 'Does California require an in-person visit before telehealth for birth control?', answer: (<p>No. <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California B&P Code §2290.5</a> does not require a prior in-person visit before telehealth. Verbal or written consent is obtained and documented at the start of every TeleDirectMD visit.</p>) }
];

function buildSchemas() {
  const medicalWebPage = { '@context': 'https://schema.org', '@type': 'MedicalWebPage', name: PAGE_TITLE, url: PAGE_URL, description: 'Birth Control Refills Online in California | TeleDirectMD by secure video visit for California adults. Board-certified Family Medicine physician. CA telehealth law compliant. Aetna in-network. Self pay $79.', datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED, inLanguage: 'en-US', about: { '@type': 'MedicalCondition', name: 'Birth Control Refills', code: { '@type': 'MedicalCode', code: 'Z30.40', codingSystem: 'ICD-10-CM' } }, medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', geographicArea: { '@type': 'AdministrativeArea', name: 'California' } }, reviewedBy: { '@type': 'Physician', '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar', name: PHYSICIAN.name, identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi }, medicalSpecialty: PHYSICIAN.specialty, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certification — American Board of Family Medicine' }], licensedIn: PHYSICIAN.licenseState, worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' }, sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'] }, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#ca-bc-opening', '#ca-bc-opening p', '.tdmd-ca-bc__byline', '#ca-birth-control-refills-online-faq'] } };
  const faqPage = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: extractPlain(faq.answer) } })) };
  const howTo = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Get Birth Control Refills Treatment Online in California', totalTime: 'PT30M', estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' }, step: [{ '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com. Self pay $79.', url: 'https://teledirectmd.com/book-online' }, { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD', text: 'Physician reviews symptoms and completes red-flag screening per clinical guidelines.', url: PAGE_URL }, { '@type': 'HowToStep', position: 3, name: 'Receive e-prescription', text: 'If appropriate, e-prescription sent to your California pharmacy under AB 2789.', url: PAGE_URL }] };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' }, { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' }, { '@type': 'ListItem', position: 3, name: 'Birth Control Refills Online', item: PAGE_URL }] };
  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

function extractPlain(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractPlain).join('');
  if (node.props && node.props.children) return extractPlain(node.props.children);
  return '';
}

const PAGE_CSS = `.tdmd-ca-bc{color:var(--tdmd-text);}.tdmd-ca-bc .tdmd-ca-bc__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}.tdmd-ca-bc .tdmd-ca-bc__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);}.tdmd-ca-bc .tdmd-ca-bc__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;}.tdmd-ca-bc .tdmd-ca-bc__byline-name{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-bc .tdmd-ca-bc__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}.tdmd-ca-bc .tdmd-ca-bc__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}.tdmd-ca-bc .tdmd-ca-bc__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}.tdmd-ca-bc .tdmd-ca-bc__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;}.tdmd-ca-bc .tdmd-ca-bc__dual-card--good{border-left:5px solid #2E7D52;}.tdmd-ca-bc .tdmd-ca-bc__dual-card--alert{border-left:5px solid var(--tdmd-accent);}.tdmd-ca-bc .tdmd-ca-bc__dual-card h3{margin:0 0 0.5rem;color:var(--tdmd-navy);}.tdmd-ca-bc .tdmd-ca-bc__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}@media (max-width:720px){.tdmd-ca-bc .tdmd-ca-bc__dual{grid-template-columns:minmax(0,1fr);}}.tdmd-ca-bc .tdmd-ca-bc__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}.tdmd-ca-bc .tdmd-ca-bc__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}.tdmd-ca-bc .tdmd-ca-bc__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);}.tdmd-ca-bc .tdmd-ca-bc__sibling-label{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-bc .tdmd-ca-bc__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}.tdmd-ca-bc .tdmd-ca-bc__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;}.tdmd-ca-bc .tdmd-ca-bc__payor-pill--good{background:#E6F4EA;color:#1F6B36;}.tdmd-ca-bc .tdmd-ca-bc__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}.tdmd-ca-bc .tdmd-ca-bc__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}.tdmd-ca-bc .tdmd-ca-bc__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;}.tdmd-ca-bc .tdmd-ca-bc__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}.tdmd-ca-bc .tdmd-ca-bc__cta-strip .tdmd-ca-bc__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;}.tdmd-ca-bc .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}.tdmd-ca-bc .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;}.tdmd-ca-bc .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;font-weight:600;}.tdmd-ca-bc .tdmd-related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}.tdmd-ca-bc .tdmd-related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}.tdmd-ca-bc .tdmd-med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}`;

export default function CaBirthControlRefillsOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-birth-control-refills-online';
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {schemas.map((schema, i) => (<script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className='tdmd-ca-bc'>
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Birth Control Refills Online</span>
          </div>
        </nav>

        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Birth Control Refills Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">California adults: board-certified MD by secure video. Self pay $79 · Aetna in-network · UHC Commercial approved · CA B&P §2290.5 compliant.</p>
                <p dangerouslySetInnerHTML={{ __html: "California law strongly supports telehealth access to contraception. The <a href='https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/11/over-the-counter-access-to-hormonal-contraception' rel='noopener' target='_blank'>American College of Obstetricians and Gynecologists (ACOG)</a> supports expanded access to hormonal contraception, including through telehealth, stating that self-administered hormonal methods including oral contraceptive pills, patch, and ring can be safely initiated without a pelvic exam in most women. California also enacted SB 493 (2021), which allows pharmacists to prescribe hormonal contraception — evidence of the state's commitment to broad contraceptive access. TeleDirectMD's board-certified physician evaluates contraceptive history, health conditions (blood pressure, migraines, blood clot risk, smoking status), and current medications to determine which methods are appropriate, following the <a href='https://www.cdc.gov/contraception/hcp/mec/summary-chart-us-medical-eligibility-criteria.html' rel='noopener' target='_blank'>CDC US Medical Eligibility Criteria for Contraceptive Use (US MEC)</a>. Serving California adults in Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, and Anaheim." }} />

                <div className='tdmd-ca-bc__byline' aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className='tdmd-ca-bc__byline-text'>
                    <span className='tdmd-ca-bc__byline-name'>Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}</span>
                    <span className='tdmd-ca-bc__byline-meta'>NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
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
                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> Z30.40</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Birth Control Refills Care in California</h2>
                  <ul>
                    <li>Symptom evaluation and red-flag screening</li>
                    <li>Guideline-based treatment when clinically appropriate</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up instructions and prevention guidance</li>
                    <li>Dual-path guidance for telehealth and in-person options</li>
                  </ul>
                  <p className="tdmd-hero-note">Adults 18+ only. Not appropriate for patients with uncontrolled hypertension, history of blood clot, certain migraines with aura (combined hormonal contraception), or pregnancy. TeleDirectMD does not prescribe controlled substances.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-opener`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener" id='ca-bc-opening'>
              <h2>Can I Get Birth Control Refills Online in California?</h2>
              <p dangerouslySetInnerHTML={{ __html: "<strong>Yes.</strong> <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California Business and Professions Code Section 2290.5</a> permits California-licensed physicians to prescribe and refill hormonal contraception via synchronous video visit. The <a href='https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx' rel='noopener' target='_blank'>Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. Per <a href='https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/11/over-the-counter-access-to-hormonal-contraception' rel='noopener' target='_blank'>ACOG Committee Opinion 788 (2019)</a>, most combined hormonal contraceptives do not require a pelvic exam for initiation or refill — a blood pressure screening and medical history review are sufficient for most candidates. The <a href='https://www.cdc.gov/contraception/hcp/mec/summary-chart-us-medical-eligibility-criteria.html' rel='noopener' target='_blank'>CDC US Medical Eligibility Criteria (US MEC)</a> guides contraceptive eligibility assessment by medical condition. Self pay is $79. Aetna is in-network as of April 30, 2026." }} />
              <small className="tdmd-condition-opener__meta">Reviewed by <a href="/about/">Parth Bhavsar, MD</a> · Board-Certified Family Medicine · NPI 1104323203 · Licensed in California · Last reviewed May 20, 2026</small>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Birth Control Refills Treatment</h2>
            <h3>Does California require an in-person visit before telehealth?</h3>
            <p><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> does not require a prior in-person visit before telehealth. A California-licensed physician can prescribe appropriate non-controlled medications through a synchronous video visit after obtaining informed consent.</p>
            <h3>What standard of care applies?</h3>
            <p>The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> states telehealth physicians are held to the same standard of care as in-person physicians. Physicians must be licensed in California to treat California patients.</p>
            <h3>Does California AB 744 parity law apply?</h3>
            <p><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Parity applies when TeleDirectMD is in-network with your plan. Aetna (active April 30, 2026) and UnitedHealthcare Commercial (approved May 29, 2026) are in-network in California.</p>
            <h3>Does California require e-prescriptions?</h3>
            <p>Yes. Assembly Bill 2789 (effective January 1, 2022) requires all California prescriptions to be issued electronically, per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD sends e-prescriptions to your chosen California pharmacy.</p>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>Birth Control Refills in California</h2>
            <p>California reported <strong>193,907 chlamydia cases</strong> and <strong>80,317 gonorrhea cases</strong> in 2022 — making California one of the largest STI burdens of any US state, per the <a href="https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/2022-STD-Surveillance-Executive-Summary.pdf" rel="noopener" target="_blank">California Department of Public Health 2022 STI Surveillance Report</a>. The <a href="https://www.cdc.gov/sti-statistics/annual/index.html" rel="noopener" target="_blank">CDC STI Surveillance 2024</a> tracks national trends showing continued increases in bacterial STIs. California&apos;s CDPH STI surveillance identifies sexual health as a public health priority and expands access to testing and treatment, including through telehealth modalities supported under CA B&amp;P §2290.5.</p>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Birth Control Refills Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content"><h3>Book your California video visit</h3><p>No referral required. Self pay $79. Note your symptoms, prior diagnoses, medications, allergies, and relevant sexual health history before your visit.</p></div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content"><h3>See a California-licensed MD by secure video</h3><p>The physician reviews your clinical history, performs red-flag screening, and assesses guideline-based treatment eligibility. Consent under CA B&amp;P §2290.5 is obtained and documented.</p></div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content"><h3>Receive treatment plan and, if appropriate, a prescription</h3><p>If treatment is clinically appropriate, a California-compliant e-prescription is sent to your chosen California pharmacy during or after your visit.</p><div className="tdmd-decision-cta"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Birth Control Refills Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit.</p>
            <div className="tdmd-price-grid">
              <div className="tdmd-price-card"><h3>TeleDirectMD Video Visit</h3><p className="tdmd-price-big">$79</p><p className="tdmd-price-sub">Self-pay flat fee — no subscription</p><ul className="tdmd-price-includes"><li>Board-certified MD video evaluation</li><li>Guideline-based treatment plan</li><li>e-Prescription to your CA pharmacy</li><li>Follow-up instructions</li></ul></div>
              <div className="tdmd-price-chart" role="group" aria-label="Cost comparison">
                <h3>Typical Treatment Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges before insurance. Actual costs vary.</p>
                <div className="tdmd-vbars" role="list">
                  {[{ name: 'TeleDirectMD', value: '$79', heightPct: 13, isTdmd: true }, { name: 'Other telehealth', value: '$75–$150', heightPct: 22 }, { name: 'Urgent care', value: '$150–$300', heightPct: 45 }, { name: 'ER visit', value: '$500–$3,000+', heightPct: 100 }].map((bar, i) => (
                    <div key={i} className="tdmd-vbar" role="listitem"><span className="tdmd-vbar__value">{bar.value}</span><div className={`tdmd-vbar__fill${bar.isTdmd ? ' tdmd-vbar__fill--tdmd' : ''}`} style={{ height: `${bar.heightPct}%` }} aria-hidden="true" /><span className={`tdmd-vbar__label${bar.isTdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>{bar.name}</span></div>
                  ))}
                </div>
                <p className="tdmd-price-footnote">Comparison reflects typical California pricing. Actual costs vary.</p>
              </div>
            </div>
            <h3 style={{ marginTop: '1.75rem' }}>California Payor Status — TeleDirectMD</h3>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="TeleDirectMD California payor status">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>Source: TeleDirectMD payor enrollment records, May 2026. Verify with your insurer before booking.</caption>
                <thead><tr><th>Insurer</th><th>Status</th><th>Effective</th><th>Notes</th></tr></thead>
                <tbody>
                  {CA_PAYORS.map((p) => {
                    const pillClass = p.inNetwork ? 'tdmd-ca-bc__payor-pill tdmd-ca-bc__payor-pill--good' : (p.status === 'Pending' || p.status === 'Approved') ? 'tdmd-ca-bc__payor-pill tdmd-ca-bc__payor-pill--pending' : 'tdmd-ca-bc__payor-pill tdmd-ca-bc__payor-pill--none';
                    return (<tr key={p.name}><td><strong>{p.name}</strong></td><td><span className={pillClass}>{p.inNetwork ? '✓ In-Network' : p.status}</span></td><td>{p.effective}</td><td>{p.notes}</td></tr>);
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Birth Control Refills Treatment Options and Costs in California</h2>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Birth Control Refills treatment options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>GoodRx prices retrieved May 2026. Prescription costs separate from visit fee.</caption>
                <thead><tr><th>Medication</th><th>Typical Regimen</th><th>GoodRx Price (May 2026)</th><th>Key Considerations</th></tr></thead>
                <tbody>
                  {MEDICATIONS.map((med) => (<tr key={med.name} className={med.firstLine ? 'tdmd-med-firstline' : ''}><td><strong>{med.name}</strong>{med.firstLine ? ' · First-line' : ''}</td><td>{med.regimen}</td><td>{med.priceHref ? <a href={med.priceHref} target="_blank" rel="noopener">{med.price}</a> : med.price}</td><td>{med.notes}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note"><strong>Important:</strong> Medication selection depends on allergies, drug interactions, and clinical circumstances assessed by the physician at the visit.</p>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care for Birth Control Refills in California</h2>
            <div className='tdmd-ca-bc__dual'>
              <div className='tdmd-ca-bc__dual-card tdmd-ca-bc__dual-card--good'>
                <h3>✓ Use TeleDirectMD if</h3>
                <ul>
                  <li>Classic symptoms without red-flag complications</li>
                  <li>No fever, severe illness, or systemic symptoms</li>
                  <li>Adult 18+, located in California</li>
                  <li>Aetna or UHC Commercial (in-network), or self pay $79</li>
                </ul>
              </div>
              <div className='tdmd-ca-bc__dual-card tdmd-ca-bc__dual-card--alert'>
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>ER / urgent care:</strong> Severe symptoms, systemic illness, or emergency</li>
                  <li><strong>STI clinic:</strong> In-person testing, contact tracing, or exam needed</li>
                  <li><strong><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood California</a>:</strong> Free/low-cost sexual health care</li>
                  <li><strong><a href="https://www.familypact.org" rel="noopener" target="_blank">California Family PACT</a>:</strong> Free reproductive health for eligible Californians</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local sexual health clinics</li>
                  <li><strong><a href="https://www.hhs.gov/opa/title-x-family-planning/index.html" rel="noopener" target="_blank">CA Title X Clinics</a>:</strong> Free or low-cost reproductive health care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className='tdmd-ca-bc__cta-strip' role="complementary">
              <div><p>Book a same-day video visit — California adults, 18+</p><small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026</small></div>
              <a className='tdmd-ca-bc__cta-btn' href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion sectionTitle={`Frequently Asked Questions — Birth Control Refills Treatment in California`} items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))} />
            <div className="tdmd-bottom-cta"><div className="tdmd-bottom-cta-copy"><h3>Ready to see a California-licensed MD?</h3><p>Book a same-day video visit. Self pay $79 · Aetna in-network · UHC Commercial approved.</p></div><div className="tdmd-bottom-cta-actions"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a><a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a></div></div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <div className='tdmd-ca-bc__sibling-grid'>
              {CA_SIBLINGS.map((s) => (<a key={s.slug} className='tdmd-ca-bc__sibling' href={`/ca/${s.slug}/`}><span className='tdmd-ca-bc__sibling-label'>{s.label}</span><span className='tdmd-ca-bc__sibling-why'>{s.why}</span></a>))}
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
              <li><a href='https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/2022-STD-Surveillance-Executive-Summary.pdf' rel="noopener" target="_blank">CDPH 2022 STI Surveillance Executive Summary</a>. Retrieved May 2026.</li>
              <li><a href='https://www.cdc.gov/sti-statistics/annual/index.html' rel="noopener" target="_blank">CDC STI Surveillance 2024 (Provisional)</a>. Retrieved May 2026.</li>
              <li><a href='https://www.plannedparenthood.org/get-care' rel="noopener" target="_blank">Planned Parenthood — Get Care</a>. Retrieved May 2026.</li>
              <li><a href='https://www.familypact.org' rel="noopener" target="_blank">California Family PACT</a>. Retrieved May 2026.</li>
              <li><a href='https://www.211ca.org' rel="noopener" target="_blank">California 211</a>. Retrieved May 2026.</li>
              <li><a href='https://www.hhs.gov/opa/title-x-family-planning/index.html' rel="noopener" target="_blank">HHS Title X Family Planning</a>. Retrieved May 2026.</li>
              <li><a href='https://www.mbc.ca.gov/News/' rel="noopener" target="_blank">Medical Board of California — AB 2789 E-Prescribing</a>. Retrieved May 2026.</li>
              <li><a href='https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/11/over-the-counter-access-to-hormonal-contraception' rel="noopener" target="_blank">ACOG Committee Opinion 788 — OTC Access to Hormonal Contraception</a>. Retrieved May 2026.</li>
              <li><a href='https://www.cdc.gov/contraception/hcp/mec/summary-chart-us-medical-eligibility-criteria.html' rel="noopener" target="_blank">CDC US Medical Eligibility Criteria (US MEC) for Contraceptive Use</a>. Retrieved May 2026.</li>
              <li><a href='https://www.goodrx.com/birth-control-pill' rel="noopener" target="_blank">GoodRx — Birth Control Pill Prices</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes only and is not a substitute for individualized medical advice. Treatment decisions are made by a California-licensed board-certified physician based on clinical history at the time of the visit. If you have severe symptoms, systemic illness, or emergency-level symptoms, seek urgent in-person care. TeleDirectMD does not prescribe controlled substances. GoodRx prices retrieved May 2026; actual pharmacy costs vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug='birth-control-refills-online' conditionName='Birth Control Refills' stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug='birth-control-refills-online' />
        <CommonSymptomsBlock conditionSlug='birth-control-refills-online' conditionName='Birth Control Refills' />
      </div>
    </>
  );
}
