/**
 * CaChlamydiaTreatmentOnline.js — California × Chlamydia page (v3)
 * URL: /ca/chlamydia-treatment-online/
 * ICD-10: A56.00
 */
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/chlamydia-treatment-online/';
const PAGE_TITLE = 'Chlamydia Treatment Online in California | TeleDirectMD';
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
  { name: 'Doxycycline hyclate 100 mg', regimen: '100 mg orally twice daily × 7 days', price: '~$13.86 / 14 tablets', priceHref: 'https://www.goodrx.com/doxycycline-hyclate', firstLine: true, notes: 'Preferred first-line per CDC STI Treatment Guidelines 2021 — superior efficacy over azithromycin for urogenital and rectal chlamydia. Avoid during pregnancy.' },
  { name: 'Azithromycin 1 g (Zithromax) — single dose', regimen: '1 g orally as a single dose (4 × 250 mg)', price: '~$15.92 / 1g packet', priceHref: 'https://www.goodrx.com/azithromycin', firstLine: false, notes: 'Alternative regimen; less preferred than doxycycline for non-pregnant adults due to lower efficacy for rectal chlamydia. First-line for pregnant patients.' },
  { name: 'Levofloxacin 500 mg', regimen: '500 mg orally once daily × 7 days', price: '~$15–$25 / 7 tablets', priceHref: 'https://www.goodrx.com/levofloxacin', firstLine: false, notes: 'Alternative for adults when doxycycline is contraindicated. Avoid in pregnancy.' }
];

const CA_SIBLINGS = [
  { slug: 'bv-treatment-online', label: 'BV Treatment in CA', why: 'BV frequently co-occurs with chlamydia — same sexual health visit.' },
  { slug: 'gonorrhea-treatment-online', label: 'Gonorrhea Treatment in CA', why: 'Co-infection with gonorrhea is common — dual coverage often recommended.' },
  { slug: 'trichomoniasis-treatment-online', label: 'Trichomoniasis Treatment in CA', why: 'STI differential when discharge is present.' },
  { slug: 'mycoplasma-genitalium-treatment-online', label: 'Mycoplasma Genitalium Treatment in CA', why: 'Shares symptoms with chlamydia — consider testing for M. genitalium in persistent NGU.' },
  { slug: 'doxypep-sti-prevention-online', label: 'DoxyPEP STI Prevention in CA', why: 'Doxycycline post-exposure prophylaxis to prevent chlamydia recurrence.' },
  { slug: 'birth-control-refills-online', label: 'Birth Control Refills in CA', why: 'STI screening recommended with contraceptive visits per CDC.' }
];

const FAQ_ITEMS = [
  { question: 'Can I get chlamydia treatment online in California without an in-person visit?', answer: (<p>Yes, if you have a confirmed positive test result. <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California B&P Code §2290.5</a> permits telehealth treatment for chlamydia when a confirmed NAAT or equivalent test result is available. TeleDirectMD requires a confirmed positive result before prescribing. At-home chlamydia testing is available in California; results can be shared with TeleDirectMD at booking.</p>) },
  { question: 'What is the CDC-recommended treatment for chlamydia in 2024?', answer: (<p>The <a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel='noopener' target='_blank'>CDC STI Treatment Guidelines 2021</a> recommend doxycycline 100 mg orally twice daily × 7 days as the preferred regimen for urogenital chlamydia in adults and adolescents — preferred over azithromycin due to superior efficacy, particularly for rectal chlamydia. Azithromycin 1 g single dose is an alternative for pregnant patients.</p>) },
  { question: 'How common is chlamydia in California?', answer: (<p>Chlamydia is the most frequently reported STI in California. The <a href='https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/2022-STD-Surveillance-Executive-Summary.pdf' rel='noopener' target='_blank'>CDPH 2022 STI Surveillance Report</a> documented 193,907 chlamydia cases — a rate of 496.8 per 100,000 population. Highest rates were in San Francisco (776.6/100,000), Kings County, and Long Beach. Women aged 15–24 have the highest infection rates, and Black/African American Californians experience rates 2.4 times higher than Hispanic/Latino Californians.</p>) },
  { question: 'What are the symptoms of chlamydia?', answer: (<p>Up to 70% of women and 50% of men with chlamydia have no symptoms, per the <a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel='noopener' target='_blank'>CDC</a>. When symptomatic, chlamydia may cause: urethral discharge; burning with urination; vaginal discharge or cervicitis; rectal pain or discharge (anal exposure); pelvic discomfort (women). Asymptomatic chlamydia can still cause pelvic inflammatory disease (PID) and reproductive harm if untreated — regular screening is recommended for sexually active adults under 25 per CDC.</p>) },
  { question: 'Does doxycycline cure chlamydia?', answer: (<p>Yes. Doxycycline 100 mg twice daily × 7 days achieves cure rates of approximately 98% for urogenital chlamydia, per the <a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel='noopener' target='_blank'>CDC STI Treatment Guidelines 2021</a>. Abstain from sex (or use condoms) for 7 days after completing treatment and until sexual partners are also treated. Test-of-cure is not routinely needed for urogenital chlamydia in non-pregnant adults treated with doxycycline.</p>) },
  { question: 'Do my sexual partners need treatment for chlamydia in California?', answer: (<p>Yes. All sexual contacts within the 60 days before a chlamydia diagnosis should be evaluated and treated, per the <a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel='noopener' target='_blank'>CDC</a>. California allows expedited partner therapy (EPT) — the practice of providing medication or a prescription for partners without requiring them to be seen by a physician — which TeleDirectMD supports per California law (Health & Safety Code §120582).</p>) },
  { question: 'Can chlamydia cause infertility in California women?', answer: (<p>Yes. Untreated chlamydia can ascend to the upper reproductive tract and cause pelvic inflammatory disease (PID). PID is a leading cause of preventable infertility in the US, causing fallopian tube scarring that can result in infertility, ectopic pregnancy, and chronic pelvic pain. The <a href='https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/STD.aspx' rel='noopener' target='_blank'>California Department of Public Health</a> prioritizes chlamydia screening in young women to prevent these complications.</p>) },
  { question: 'Is Aetna in-network with TeleDirectMD in California for chlamydia treatment?', answer: (<p>Aetna became in-network for TeleDirectMD in California effective April 30, 2026. Aetna commercial plan members may be able to use in-network benefits. Verify plan eligibility with Aetna before your visit. Self pay ($79) is available regardless of insurance. See <a href='/insurance'>all insurance options</a>.</p>) },
  { question: 'Will Medi-Cal cover chlamydia treatment at TeleDirectMD?', answer: (<p>TeleDirectMD is not currently enrolled as a Medi-Cal rendering provider. <a href='https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx' rel='noopener' target='_blank'>California DHCS</a> covers telehealth for enrolled providers. Free chlamydia testing and treatment is available through <a href='https://www.plannedparenthood.org/get-care' rel='noopener' target='_blank'>Planned Parenthood California</a> and <a href='https://www.familypact.org' rel='noopener' target='_blank'>California Family PACT</a> for eligible Californians.</p>) },
  { question: 'When should chlamydia require in-person care in California?', answer: (<p>Seek in-person care if you have: pelvic pain or tenderness (possible PID), testicular pain or swelling (possible epididymitis), fever or systemic illness, symptoms in a pregnant patient, rectal symptoms requiring exam, or treatment failure after confirmed adequate course. <a href='https://www.plannedparenthood.org/get-care' rel='noopener' target='_blank'>Planned Parenthood California</a> provides in-person STI evaluation with sliding-scale fees across the state.</p>) },
  { question: 'Should I get tested for other STIs when treated for chlamydia in California?', answer: (<p>Yes. Co-infection with gonorrhea is common, and <a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel='noopener' target='_blank'>CDC guidelines</a> recommend testing for gonorrhea, syphilis, and HIV when chlamydia is diagnosed. TeleDirectMD can review your existing test results and recommend appropriate additional testing at an in-person STI clinic or through at-home testing.</p>) },
  { question: 'How quickly will my chlamydia prescription reach a California pharmacy?', answer: (<p>California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022). If a prescription is appropriate, TeleDirectMD sends an e-prescription to your chosen California pharmacy during or after your visit — most pharmacies fill within 1–4 hours.</p>) },
  { question: 'Does California AB 744 parity law apply to chlamydia treatment telehealth visits?', answer: (<p><a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS' rel='noopener' target='_blank'>California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services when TeleDirectMD is in-network. Aetna (active April 30, 2026) and UnitedHealthcare Commercial (approved May 29, 2026) are currently in-network in California.</p>) }
];

function buildSchemas() {
  const medicalWebPage = { '@context': 'https://schema.org', '@type': 'MedicalWebPage', name: PAGE_TITLE, url: PAGE_URL, description: 'Chlamydia Treatment Online in California | TeleDirectMD by secure video visit for California adults. Board-certified Family Medicine physician. CA telehealth law compliant. Aetna in-network. Self pay $79.', datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED, inLanguage: 'en-US', about: { '@type': 'MedicalCondition', name: 'Chlamydia', code: { '@type': 'MedicalCode', code: 'A56.00', codingSystem: 'ICD-10-CM' } }, medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', geographicArea: { '@type': 'AdministrativeArea', name: 'California' } }, reviewedBy: { '@type': 'Physician', '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar', name: PHYSICIAN.name, identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi }, medicalSpecialty: PHYSICIAN.specialty, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certification — American Board of Family Medicine' }], licensedIn: PHYSICIAN.licenseState, worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' }, sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'] }, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#ca-chlamydia-opening', '#ca-chlamydia-opening p', '.tdmd-ca-chlamydia__byline', '#ca-chlamydia-treatment-online-faq'] } };
  const faqPage = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: extractPlain(faq.answer) } })) };
  const howTo = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Get Chlamydia Treatment Online in California', totalTime: 'PT30M', estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' }, step: [{ '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com. Self pay $79.', url: 'https://teledirectmd.com/book-online' }, { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD', text: 'Physician reviews symptoms and completes red-flag screening per clinical guidelines.', url: PAGE_URL }, { '@type': 'HowToStep', position: 3, name: 'Receive e-prescription', text: 'If appropriate, e-prescription sent to your California pharmacy under AB 2789.', url: PAGE_URL }] };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' }, { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' }, { '@type': 'ListItem', position: 3, name: 'Chlamydia Treatment Online', item: PAGE_URL }] };
  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

function extractPlain(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractPlain).join('');
  if (node.props && node.props.children) return extractPlain(node.props.children);
  return '';
}

const PAGE_CSS = `.tdmd-ca-chlamydia{color:var(--tdmd-text);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__byline-name{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__dual-card--good{border-left:5px solid #2E7D52;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__dual-card--alert{border-left:5px solid var(--tdmd-accent);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__dual-card h3{margin:0 0 0.5rem;color:var(--tdmd-navy);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}@media (max-width:720px){.tdmd-ca-chlamydia .tdmd-ca-chlamydia__dual{grid-template-columns:minmax(0,1fr);}}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__sibling-label{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__payor-pill--good{background:#E6F4EA;color:#1F6B36;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}.tdmd-ca-chlamydia .tdmd-ca-chlamydia__cta-strip .tdmd-ca-chlamydia__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;}.tdmd-ca-chlamydia .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}.tdmd-ca-chlamydia .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;}.tdmd-ca-chlamydia .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;font-weight:600;}.tdmd-ca-chlamydia .tdmd-related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}.tdmd-ca-chlamydia .tdmd-related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}.tdmd-ca-chlamydia .tdmd-med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}`;

export default function CaChlamydiaTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-chlamydia-treatment-online';
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {schemas.map((schema, i) => (<script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className='tdmd-ca-chlamydia'>
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Chlamydia Treatment Online</span>
          </div>
        </nav>

        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Chlamydia Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">California adults: board-certified MD by secure video. Self pay $79 · Aetna in-network · UHC Commercial approved · CDC STI Treatment Guidelines 2021.</p>
                <p dangerouslySetInnerHTML={{ __html: "Chlamydia is the most frequently reported STI in California — in 2022, the <a href='https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/2022-STD-Surveillance-Executive-Summary.pdf' rel='noopener' target='_blank'>California Department of Public Health 2022 STI Surveillance Report</a> documented 193,907 chlamydia cases, a 1.5% increase from 2021. Caused by <em>Chlamydia trachomatis</em>, chlamydia is often asymptomatic — up to 70% of women and 50% of men with chlamydia have no symptoms, per the <a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel='noopener' target='_blank'>CDC STI Treatment Guidelines 2021</a>. When symptomatic, chlamydia may cause urethral discharge, dysuria, cervicitis, and pelvic discomfort. Untreated chlamydia causes pelvic inflammatory disease (PID), which can lead to infertility, ectopic pregnancy, and chronic pelvic pain. TeleDirectMD evaluates adults with a confirmed positive chlamydia NAAT result and prescribes CDC-guideline treatment for California adults without complications. Serving Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, and Anaheim." }} />

                <div className='tdmd-ca-chlamydia__byline' aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className='tdmd-ca-chlamydia__byline-text'>
                    <span className='tdmd-ca-chlamydia__byline-name'>Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}</span>
                    <span className='tdmd-ca-chlamydia__byline-meta'>NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
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
                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> A56.00</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Chlamydia Care in California</h2>
                  <ul>
                    <li>Symptom evaluation and red-flag screening</li>
                    <li>Guideline-based treatment when clinically appropriate</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up instructions and prevention guidance</li>
                    <li>Dual-path guidance for telehealth and in-person options</li>
                  </ul>
                  <p className="tdmd-hero-note">Adults 18+ only. A confirmed positive chlamydia test is required before treatment. TeleDirectMD does not manage PID, epididymitis, or other complicated chlamydia presentations — refer to in-person care. Recommend partner notification and treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-opener`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener" id='ca-chlamydia-opening'>
              <h2>Can I Get Chlamydia Treatment Online in California?</h2>
              <p dangerouslySetInnerHTML={{ __html: "<strong>Yes.</strong> <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC' rel='noopener' target='_blank'>California Business and Professions Code Section 2290.5</a> permits California-licensed physicians to prescribe chlamydia treatment via synchronous video visit. The <a href='https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx' rel='noopener' target='_blank'>Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. Per the <a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel='noopener' target='_blank'>CDC STI Treatment Guidelines 2021</a>, the recommended first-line regimen for uncomplicated urogenital chlamydia in adults is doxycycline 100 mg orally twice daily × 7 days. TeleDirectMD requires a confirmed positive chlamydia test (NAAT or similar) before prescribing treatment. At-home STI testing is available through multiple California-based services. Self pay is $79. Aetna is in-network as of April 30, 2026." }} />
              <small className="tdmd-condition-opener__meta">Reviewed by <a href="/about/">Parth Bhavsar, MD</a> · Board-Certified Family Medicine · NPI 1104323203 · Licensed in California · Last reviewed May 20, 2026</small>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Chlamydia Treatment</h2>
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
            <h2>Chlamydia in California</h2>
            <p>California reported <strong>193,907 chlamydia cases</strong> and <strong>80,317 gonorrhea cases</strong> in 2022 — making California one of the largest STI burdens of any US state, per the <a href="https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/2022-STD-Surveillance-Executive-Summary.pdf" rel="noopener" target="_blank">California Department of Public Health 2022 STI Surveillance Report</a>. The <a href="https://www.cdc.gov/sti-statistics/annual/index.html" rel="noopener" target="_blank">CDC STI Surveillance 2024</a> tracks national trends showing continued increases in bacterial STIs. California&apos;s CDPH STI surveillance identifies sexual health as a public health priority and expands access to testing and treatment, including through telehealth modalities supported under CA B&amp;P §2290.5.</p>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Chlamydia Treatment Works in California</h2>
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
            <h2>Chlamydia Cost &amp; Insurance in California</h2>
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
                    const pillClass = p.inNetwork ? 'tdmd-ca-chlamydia__payor-pill tdmd-ca-chlamydia__payor-pill--good' : (p.status === 'Pending' || p.status === 'Approved') ? 'tdmd-ca-chlamydia__payor-pill tdmd-ca-chlamydia__payor-pill--pending' : 'tdmd-ca-chlamydia__payor-pill tdmd-ca-chlamydia__payor-pill--none';
                    return (<tr key={p.name}><td><strong>{p.name}</strong></td><td><span className={pillClass}>{p.inNetwork ? '✓ In-Network' : p.status}</span></td><td>{p.effective}</td><td>{p.notes}</td></tr>);
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Chlamydia Treatment Options and Costs in California</h2>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Chlamydia treatment options and GoodRx prices">
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
            <h2>TeleDirectMD vs. In-Person Care for Chlamydia in California</h2>
            <div className='tdmd-ca-chlamydia__dual'>
              <div className='tdmd-ca-chlamydia__dual-card tdmd-ca-chlamydia__dual-card--good'>
                <h3>✓ Use TeleDirectMD if</h3>
                <ul>
                  <li>Classic symptoms without red-flag complications</li>
                  <li>No fever, severe illness, or systemic symptoms</li>
                  <li>Adult 18+, located in California</li>
                  <li>Aetna or UHC Commercial (in-network), or self pay $79</li>
                </ul>
              </div>
              <div className='tdmd-ca-chlamydia__dual-card tdmd-ca-chlamydia__dual-card--alert'>
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
            <div className='tdmd-ca-chlamydia__cta-strip' role="complementary">
              <div><p>Book a same-day video visit — California adults, 18+</p><small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026</small></div>
              <a className='tdmd-ca-chlamydia__cta-btn' href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion sectionTitle={`Frequently Asked Questions — Chlamydia Treatment in California`} items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))} />
            <div className="tdmd-bottom-cta"><div className="tdmd-bottom-cta-copy"><h3>Ready to see a California-licensed MD?</h3><p>Book a same-day video visit. Self pay $79 · Aetna in-network · UHC Commercial approved.</p></div><div className="tdmd-bottom-cta-actions"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a><a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a></div></div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <div className='tdmd-ca-chlamydia__sibling-grid'>
              {CA_SIBLINGS.map((s) => (<a key={s.slug} className='tdmd-ca-chlamydia__sibling' href={`/ca/${s.slug}/`}><span className='tdmd-ca-chlamydia__sibling-label'>{s.label}</span><span className='tdmd-ca-chlamydia__sibling-why'>{s.why}</span></a>))}
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
              <li><a href='https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021 — Chlamydial Infections</a>. Retrieved May 2026.</li>
              <li><a href='https://www.goodrx.com/doxycycline-hyclate' rel="noopener" target="_blank">GoodRx — Doxycycline Hyclate Prices</a>. Retrieved May 2026.</li>
              <li><a href='https://www.goodrx.com/azithromycin' rel="noopener" target="_blank">GoodRx — Azithromycin Prices</a>. Retrieved May 2026.</li>
              <li><a href='https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/STD.aspx' rel="noopener" target="_blank">CDPH — STI Surveillance Program</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes only and is not a substitute for individualized medical advice. Treatment decisions are made by a California-licensed board-certified physician based on clinical history at the time of the visit. If you have severe symptoms, systemic illness, or emergency-level symptoms, seek urgent in-person care. TeleDirectMD does not prescribe controlled substances. GoodRx prices retrieved May 2026; actual pharmacy costs vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug='chlamydia-treatment-online' conditionName='Chlamydia' stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug='chlamydia-treatment-online' />
        <CommonSymptomsBlock conditionSlug='chlamydia-treatment-online' conditionName='Chlamydia' />
      </div>
    </>
  );
}
