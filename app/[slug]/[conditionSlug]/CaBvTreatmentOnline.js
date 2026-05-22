/**
 * CaBvTreatmentOnline.js — California × Bacterial Vaginosis condition page (v3)
 * URL: /ca/bv-treatment-online/
 * Authority: CDC STI Treatment Guidelines 2021 + ACOG
 */
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/bv-treatment-online/';
const PAGE_TITLE = 'BV Treatment Online in California | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-20';
const DATE_MODIFIED = '2026-05-20';
const LAST_REVIEWED = '2026-05-20';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD', npi: '1104323203', specialty: 'Family Medicine',
  licenseState: 'California', headshot: '/images/dr-parth-bhavsar.jpg', bioUrl: '/about',
};

const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true, notes: 'Commercial plans. In-network as of April 30, 2026.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true, notes: 'Commercial + Medicare Advantage. Excludes Medi-Cal, Individual Exchange, Navigate/Charter/Core.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending', inNetwork: false, notes: 'Enrollment pending. Self pay ($79) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending', inNetwork: false, notes: 'Telehealth Only review in progress. Self pay ($79) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false, notes: 'Closed system. Use Kaiser telehealth at kp.org.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false, notes: 'Not enrolled. Find Medi-Cal providers at dhcs.ca.gov.' },
];

const MEDICATIONS = [
  { name: 'Metronidazole (Flagyl) 500 mg oral', regimen: '500 mg orally twice daily × 7 days', price: '~$12.24 / 14 tablets', priceHref: 'https://www.goodrx.com/metronidazole', firstLine: true, notes: 'First-line per CDC 2021 STI Treatment Guidelines. Avoid alcohol during treatment and for 24 hours after. Not for use in first trimester of pregnancy.' },
  { name: 'Metronidazole vaginal gel 0.75%', regimen: '5 g intravaginally once daily × 5 days', price: '~$25.07 / 70g tube', priceHref: 'https://www.goodrx.com/metronidazole', firstLine: true, notes: 'Equally effective to oral metronidazole; fewer systemic side effects. No alcohol restriction needed.' },
  { name: 'Clindamycin vaginal cream 2%', regimen: '5 g intravaginally at bedtime × 7 days', price: '~$30–$50 with coupon', priceHref: 'https://www.goodrx.com/clindamycin', firstLine: true, notes: 'First-line alternative. Note: oil-based formulation may weaken latex condoms.' },
  { name: 'Tinidazole 2 g oral', regimen: '2 g orally once daily × 2 days', price: '~$15–$25 with coupon', priceHref: 'https://www.goodrx.com/tinidazole', firstLine: false, notes: 'Alternative regimen; single daily dosing for 2 days. Avoid alcohol during use.' },
  { name: 'Clindamycin 300 mg oral', regimen: '300 mg orally twice daily × 7 days', price: '~$10–$20 with coupon', priceHref: 'https://www.goodrx.com/clindamycin', firstLine: false, notes: 'Oral alternative when vaginal preparations not tolerated.' },
];

const CA_SIBLINGS = [
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection Treatment in CA', why: 'Most common differential — similar discharge symptoms but different treatment.' },
  { slug: 'uti-treatment-online', label: 'UTI Treatment in CA', why: 'Dysuria and pelvic discomfort can occur alongside BV.' },
  { slug: 'chlamydia-treatment-online', label: 'Chlamydia Treatment in CA', why: 'STI that can co-exist with BV and cause discharge.' },
  { slug: 'trichomoniasis-treatment-online', label: 'Trichomoniasis Treatment in CA', why: 'STI differential when odorous discharge is present.' },
  { slug: 'vaginal-dryness-treatment-online', label: 'Vaginal Dryness Treatment in CA', why: 'Vaginal pH changes in menopause may predispose to recurrent BV.' },
  { slug: 'birth-control-refills-online', label: 'Birth Control Refills in CA', why: 'Hormonal contraceptives can affect vaginal flora and BV risk.' },
];

const FAQ_ITEMS = [
  { question: 'Can I get BV treatment online in California?',
    answer: (<p>Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits California-licensed physicians to diagnose and treat bacterial vaginosis (BV) by synchronous video visit. The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. Classic BV — thin grayish-white discharge with fishy odor, minimal itching, negative for STI symptoms — can be reliably evaluated by detailed symptom history. Per the <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021</a>, metronidazole 500 mg twice daily × 7 days or metronidazole vaginal gel 0.75% × 5 days are the recommended first-line treatments. TeleDirectMD self pay is $79. Aetna is in-network as of April 30, 2026.</p>),
  },
  { question: 'What causes bacterial vaginosis (BV)?',
    answer: (<p>BV is caused by a disruption of the normal vaginal microbiome — a shift from <em>Lactobacillus</em>-dominant flora to a polymicrobial environment including <em>Gardnerella vaginalis</em>, <em>Prevotella</em> species, <em>Mycoplasma hominis</em>, and other anaerobes. According to the <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021</a>, BV is not definitively classified as an STI, though sexual activity is associated with altered vaginal flora. Risk factors include new or multiple sexual partners, douching (which disrupts flora), and lack of Lactobacillus-dominant flora.</p>),
  },
  { question: 'How common is BV in California women?',
    answer: (<p>Bacterial vaginosis is the most common vaginal infection in women of reproductive age in the United States. The <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC</a> reports that BV affects approximately 21.2 million women aged 14–49 in the US — about 29% of this age group. California&apos;s approximately 10 million reproductive-age women thus represent a substantial at-risk population. BV is underdiagnosed because many women are asymptomatic (approximately 50–75% of BV cases) and may not seek care. When symptomatic, BV is associated with discharge, odor, and discomfort that significantly impacts quality of life.</p>),
  },
  { question: 'What is the difference between BV and a yeast infection?',
    answer: (<p>BV and yeast infections (VVC) are distinct conditions requiring different treatments. BV features thin, grayish-white discharge with a characteristic fishy odor that worsens after sex; vaginal pH is elevated (&gt;4.5); itching is usually mild or absent. Yeast infection (VVC) features thick, white, cottage cheese-like discharge without odor; pH is normal (&lt;4.5); and intense itching and burning are hallmarks. Per <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215</a>, in-person wet preparation microscopy most reliably differentiates these diagnoses. When symptoms are classical and a prior diagnosis has been established, telehealth evaluation is appropriate.</p>),
  },
  { question: 'What medications treat BV, and how much do they cost in California?',
    answer: (<p>Per the <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021</a>, first-line BV treatments include: metronidazole 500 mg orally twice daily × 7 days (GoodRx ~$12.24 for 14 tablets at <a href="https://www.goodrx.com/metronidazole" rel="noopener" target="_blank">goodrx.com</a>); metronidazole vaginal gel 0.75% nightly × 5 days (~$25.07/tube with GoodRx); or clindamycin vaginal cream 2% at bedtime × 7 days (~$30–$50 with coupon). All are equally effective for uncomplicated BV.</p>),
  },
  { question: 'Is BV treatment safe during pregnancy?',
    answer: (<p>BV during pregnancy requires prompt treatment to reduce risk of preterm labor and other complications. However, treatment recommendations differ in pregnancy — oral metronidazole can be used (evidence supports safety in second and third trimesters), but the optimal regimen may differ from non-pregnant treatment. TeleDirectMD does not manage BV in pregnancy. Pregnant patients with BV symptoms should contact their OB/GYN or go to an appropriate in-person provider immediately, as the <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG</a> recommends screening and treating BV in pregnancy for certain risk groups.</p>),
  },
  { question: 'Does California AB 744 telehealth parity apply to BV treatment visits?',
    answer: (<p>Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Parity applies when TeleDirectMD is in-network with your plan. Aetna (active April 30, 2026) and UnitedHealthcare Commercial (approved May 29, 2026) are currently in-network in California. Anthem Blue Cross and Cigna enrollments are pending.</p>),
  },
  { question: 'Is Aetna in-network with TeleDirectMD in California for BV treatment?',
    answer: (<p>Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. If you hold an Aetna commercial plan in California, you may be able to use your in-network benefits. Always verify current in-network status directly with Aetna before your visit, as plan eligibility varies. Self pay ($79) is available regardless of insurance status. See <a href="/insurance">all insurance options</a>.</p>),
  },
  { question: 'Will Medi-Cal cover BV treatment at TeleDirectMD?',
    answer: (<p>TeleDirectMD is not currently enrolled as a Medi-Cal rendering provider. <a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS</a> confirms that Medi-Cal covers telehealth for physical health services when the provider is enrolled. If you have Medi-Cal, use the $79 self-pay option or find a Medi-Cal-enrolled provider through your managed care plan or DHCS directory. <a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood California</a> and California Title X clinics provide free or low-cost BV testing and treatment.</p>),
  },
  { question: 'Can BV come back after treatment?',
    answer: (<p>Yes. Recurrent BV is common — approximately 30% of women experience recurrence within 3 months of treatment, per the <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC</a>. Factors contributing to recurrence include disruption of Lactobacillus-dominant flora (douching, antibiotic use, new sexual partners) and partner reinfection. For recurrent BV, extended suppressive therapy with metronidazole vaginal gel twice weekly for 4–6 months may be appropriate — this warrants in-person evaluation and culture. TeleDirectMD can treat acute episodes but recommends in-person evaluation for RVVC workup after multiple recurrences.</p>),
  },
  { question: 'Does BV need to be treated if I have no symptoms?',
    answer: (<p>Asymptomatic BV in non-pregnant women generally does not require treatment outside of pregnancy or prior to certain gynecologic procedures. The <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021</a> recommend treatment only for symptomatic women — or for asymptomatic BV before procedures such as abortion, hysterectomy, or IUD insertion. In pregnancy, screening and treatment of BV is recommended for women at high risk of preterm birth per ACOG.</p>),
  },
  { question: 'Can BV increase my risk of STIs in California?',
    answer: (<p>Yes. The <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC</a> reports that BV is associated with increased acquisition of HIV, gonorrhea, chlamydia, and other STIs — likely because BV disrupts the normal acidic vaginal environment that protects against pathogens. BV is also associated with increased risk of PID (pelvic inflammatory disease), an upper reproductive tract infection that can cause infertility if untreated. If you have symptoms of both BV and possible STI, in-person testing with STI screening is recommended before starting empiric BV treatment.</p>),
  },
  { question: 'How quickly will a BV prescription reach a California pharmacy?',
    answer: (<p>California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. If a prescription is appropriate after your visit, TeleDirectMD sends an e-prescription to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or other California pharmacy — during or immediately after the visit. Most California pharmacies fill within one to four hours.</p>),
  },
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org', '@type': 'MedicalWebPage',
    name: PAGE_TITLE, url: PAGE_URL,
    description: 'BV (bacterial vaginosis) treatment by secure video visit for California adults. Board-certified Family Medicine physician. CDC-guideline treatment. Aetna in-network. Self pay $79.',
    datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED, inLanguage: 'en-US',
    about: { '@type': 'MedicalCondition', name: 'Bacterial Vaginosis', alternateName: ['BV', 'Vaginal Bacteriosis'], code: { '@type': 'MedicalCode', code: 'N76.0', codingSystem: 'ICD-10-CM' } },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', geographicArea: { '@type': 'AdministrativeArea', name: 'California' } },
    reviewedBy: { '@type': 'Physician', '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar', name: PHYSICIAN.name, identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi }, medicalSpecialty: PHYSICIAN.specialty, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certification — American Board of Family Medicine' }], licensedIn: PHYSICIAN.licenseState, worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' }, sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'] },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#ca-bv-opening', '#ca-bv-opening p', '.tdmd-ca-bv__byline', '#ca-bv-treatment-online-faq'] },
  };
  const faqPage = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: extractPlain(faq.answer) } })) };
  const howTo = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Get BV Treatment Online in California', description: 'Three steps to receive BV evaluation and metronidazole prescription from a California-licensed physician.', totalTime: 'PT30M', estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' }, step: [{ '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California BV treatment. Self pay $79.', url: 'https://teledirectmd.com/book-online' }, { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD', text: 'Physician reviews symptoms, prior BV history, and conducts red-flag screening per CDC guidelines.', url: PAGE_URL }, { '@type': 'HowToStep', position: 3, name: 'Receive e-prescription', text: 'If appropriate, e-prescription sent to your California pharmacy under AB 2789.', url: PAGE_URL }] };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' }, { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' }, { '@type': 'ListItem', position: 3, name: 'BV Treatment Online in California', item: PAGE_URL }] };
  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

function extractPlain(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractPlain).join('');
  if (node.props && node.props.children) return extractPlain(node.props.children);
  return '';
}

const PAGE_CSS = `.tdmd-ca-bv{color:var(--tdmd-text);}.tdmd-ca-bv .tdmd-ca-bv__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}.tdmd-ca-bv .tdmd-ca-bv__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);}.tdmd-ca-bv .tdmd-ca-bv__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;}.tdmd-ca-bv .tdmd-ca-bv__byline-name{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-bv .tdmd-ca-bv__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}.tdmd-ca-bv .tdmd-ca-bv__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}.tdmd-ca-bv .tdmd-ca-bv__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}.tdmd-ca-bv .tdmd-ca-bv__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;}.tdmd-ca-bv .tdmd-ca-bv__dual-card--good{border-left:5px solid #2E7D52;}.tdmd-ca-bv .tdmd-ca-bv__dual-card--alert{border-left:5px solid var(--tdmd-accent);}.tdmd-ca-bv .tdmd-ca-bv__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}.tdmd-ca-bv .tdmd-ca-bv__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}@media (max-width:720px){.tdmd-ca-bv .tdmd-ca-bv__dual{grid-template-columns:minmax(0,1fr);}}.tdmd-ca-bv .tdmd-ca-bv__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}.tdmd-ca-bv .tdmd-ca-bv__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}.tdmd-ca-bv .tdmd-ca-bv__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);}.tdmd-ca-bv .tdmd-ca-bv__sibling-label{font-weight:700;color:var(--tdmd-navy);}.tdmd-ca-bv .tdmd-ca-bv__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}.tdmd-ca-bv .tdmd-ca-bv__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;}.tdmd-ca-bv .tdmd-ca-bv__payor-pill--good{background:#E6F4EA;color:#1F6B36;}.tdmd-ca-bv .tdmd-ca-bv__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}.tdmd-ca-bv .tdmd-ca-bv__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}.tdmd-ca-bv .tdmd-ca-bv__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;}.tdmd-ca-bv .tdmd-ca-bv__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}.tdmd-ca-bv .tdmd-ca-bv__cta-strip .tdmd-ca-bv__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;}.tdmd-ca-bv .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}.tdmd-ca-bv .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;}.tdmd-ca-bv .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;font-weight:600;}.tdmd-ca-bv .tdmd-related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}.tdmd-ca-bv .tdmd-related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}.tdmd-ca-bv .tdmd-med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}`;

export default function CaBvTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-bv-treatment-online';
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {schemas.map((schema, i) => (<script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="tdmd-ca-bv">
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a><span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">BV Treatment Online</span>
          </div>
        </nav>

        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">BV Treatment Online in California (Bacterial Vaginosis)</h1>
                <p className="tdmd-hero-sub" data-speakable="true">California adults: board-certified MD by secure video. Self pay $79 · Aetna in-network · UHC Commercial approved · CA B&amp;P §2290.5 compliant.</p>
                <p>Bacterial vaginosis (BV) is the most common vaginal infection in reproductive-age women, affecting approximately 29% of women aged 14–49 in the United States according to the <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">Centers for Disease Control and Prevention</a>. BV results from a disruption of the normal <em>Lactobacillus</em>-dominant vaginal flora, replaced by overgrowth of <em>Gardnerella vaginalis</em> and other anaerobes. Classic symptoms include thin, grayish-white discharge with a fishy odor that is often most noticeable after sex — distinct from the thick, white, odorless discharge of a yeast infection. TeleDirectMD screens for red-flag symptoms — fever, pelvic pain, possible STI exposure, pregnancy — before determining whether video treatment is appropriate for California adults in {caCities.join(', ')}, and surrounding areas.</p>

                <div className="tdmd-ca-bv__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-ca-bv__byline-text">
                    <span className="tdmd-ca-bv__byline-name">Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}</span>
                    <span className="tdmd-ca-bv__byline-meta">NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opener`}>Can I get treatment online?</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>BV in California</a></li>
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
                  <li>CDC guideline-based BV treatment</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
                </div>
                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> N76.0 (Vaginitis — final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only BV Care in California</h2>
                  <ul>
                    <li>Symptom evaluation for classic BV presentation</li>
                    <li>Red-flag screening for STIs, PID, and pregnancy</li>
                    <li>CDC-guideline metronidazole treatment when appropriate</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Recurrence prevention guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">Adults 18+ only. Not appropriate for pregnant patients or those with pelvic pain, fever, or possible STI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inline Opener */}
        <section className="tdmd-section" id={`${pid}-opener`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener" id="ca-bv-opening">
              <h2>Can I Get BV Treatment Online in California?</h2>
              <p><strong>Yes.</strong> <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California B&amp;P Code §2290.5</a> permits California-licensed physicians to treat bacterial vaginosis by synchronous video visit without a prior in-person examination. The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. Classic BV symptoms — thin grayish-white discharge with fishy odor, elevated vaginal pH, minimal itching — can be assessed by careful history, particularly in adults with prior confirmed BV diagnosis. Per the <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021</a>, first-line treatment is metronidazole 500 mg orally twice daily × 7 days or metronidazole gel 0.75% × 5 days. Self pay is $79. Aetna is in-network as of April 30, 2026.</p>
              <small className="tdmd-condition-opener__meta">Reviewed by <a href="/about/">Parth Bhavsar, MD</a> · Board-Certified Family Medicine · NPI 1104323203 · Licensed in California · Last reviewed May 20, 2026</small>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>BV Telehealth Eligibility for California Adults</h2>
            <div className="tdmd-ca-bv__dual">
              <div className="tdmd-ca-bv__dual-card tdmd-ca-bv__dual-card--good">
                <h3>✓ You Are Eligible If</h3>
                <ul>
                  <li>18 years or older, located in California at time of visit</li>
                  <li>Classic BV symptoms: thin grayish discharge with fishy odor</li>
                  <li>Prior confirmed BV diagnosis and same recurring symptoms</li>
                  <li>No fever or pelvic/abdominal pain</li>
                  <li>Not pregnant</li>
                  <li>No recent STI exposure or concerning lesions</li>
                </ul>
              </div>
              <div className="tdmd-ca-bv__dual-card tdmd-ca-bv__dual-card--alert">
                <h3>✗ You Are Not Eligible If</h3>
                <ul>
                  <li>You are pregnant (BV in pregnancy requires in-person OB care)</li>
                  <li>You have fever or pelvic pain (possible PID)</li>
                  <li>You have possible STI exposure — in-person STI testing needed</li>
                  <li>This is your first-ever episode (in-person wet prep confirms diagnosis)</li>
                  <li>Symptoms don&apos;t clearly distinguish from yeast infection or trich</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}><strong>If you have red flags, seek in-person care. TeleDirectMD is not appropriate for complex presentations.</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* CA Telehealth Law */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and BV Treatment</h2>
            <h3>Does California require an in-person visit before telehealth for BV?</h3>
            <p>No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> does not require a prior in-person visit before telehealth services. A California-licensed physician can prescribe metronidazole and other non-controlled medications through a synchronous video visit after obtaining informed consent.</p>
            <h3>Does California parity law apply to BV treatment?</h3>
            <p><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person care — no face-to-face contact can be required as a condition of reimbursement. Parity applies when TeleDirectMD is in-network with your plan.</p>
            <h3>Does California require e-prescriptions for BV medications?</h3>
            <p>Yes. Assembly Bill 2789 (effective January 1, 2022) requires all California prescriptions to be issued electronically, per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. Metronidazole and clindamycin are not controlled substances — they can be sent electronically to any California pharmacy immediately after your visit.</p>
          </div>
        </section>

        {/* Epidemiology */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>Bacterial Vaginosis in California: Prevalence and Context</h2>
            <h3>How common is BV in California?</h3>
            <p>BV is the most prevalent vaginal infection in reproductive-age women. The <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC</a> estimates that approximately 29% of US women aged 14–49 have BV at any given time — roughly 21.2 million women nationally. In California, with approximately 10 million women in this age range, this translates to an estimated 2–3 million women with BV at any point, many of whom are asymptomatic (approximately 50–75% of BV cases have no symptoms). BV is particularly prevalent among Black women (prevalence ~51%), women with new or multiple sexual partners, and women who douche.</p>
            <h3>Why does BV matter beyond symptoms?</h3>
            <p>Untreated symptomatic BV increases risk of STI acquisition — including HIV, gonorrhea, chlamydia, and herpes simplex virus — because disrupted vaginal flora reduces natural defense against pathogens. BV is also associated with pelvic inflammatory disease (PID), preterm birth in pregnancy, and post-surgical infection. The <a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/STD.aspx" rel="noopener" target="_blank">California Department of Public Health</a> STI surveillance program tracks gonorrhea and chlamydia — conditions frequently co-occurring with BV — noting California reported 193,907 chlamydia cases in 2022, the most frequently reported STI in the state.</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online BV Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content"><h3>Book your California video visit</h3><p>No referral required. Self pay $79. Before your visit, note your symptoms, prior BV history, current medications, pregnancy status, and recent sexual health history.</p></div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content"><h3>See a California-licensed MD by secure video</h3><p>The physician reviews your symptom pattern, prior BV history, risk factors (douching, new partners, recent antibiotics), pregnancy status, and possible STI exposure. Red-flag screening separates classic uncomplicated BV from presentations requiring in-person evaluation. Consent under CA B&amp;P §2290.5 is documented.</p></div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content"><h3>Receive treatment plan and, if appropriate, a prescription</h3><p>If metronidazole or another BV treatment is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy. Recurrence prevention and lifestyle guidance is provided regardless of treatment choice.</p><div className="tdmd-decision-cta"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>BV Treatment Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong>. In-network insurance patients pay their plan&apos;s telehealth copay.</p>
            <div className="tdmd-price-grid">
              <div className="tdmd-price-card"><h3>TeleDirectMD Video Visit</h3><p className="tdmd-price-big">$79</p><p className="tdmd-price-sub">Self-pay flat fee — no subscription</p><ul className="tdmd-price-includes"><li>Board-certified MD evaluation</li><li>Red-flag STI and pregnancy screening</li><li>e-Prescription to your CA pharmacy</li><li>Recurrence prevention guidance</li></ul></div>
              <div className="tdmd-price-chart" role="group" aria-label="BV cost comparison">
                <h3>Typical BV Treatment Cost in California</h3>
                <p className="tdmd-price-caption">Before insurance. Actual costs vary by location.</p>
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
                <thead><tr><th>Insurer</th><th>Status</th><th>Effective</th><th>Notes</th></tr></thead>
                <tbody>
                  {CA_PAYORS.map((p) => {
                    const pillClass = p.inNetwork ? 'tdmd-ca-bv__payor-pill tdmd-ca-bv__payor-pill--good' : (p.status === 'Pending' || p.status === 'Approved') ? 'tdmd-ca-bv__payor-pill tdmd-ca-bv__payor-pill--pending' : 'tdmd-ca-bv__payor-pill tdmd-ca-bv__payor-pill--none';
                    return (<tr key={p.name}><td><strong>{p.name}</strong></td><td><span className={pillClass}>{p.inNetwork ? '✓ In-Network' : p.status}</span></td><td>{p.effective}</td><td>{p.notes}</td></tr>);
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Medications */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>BV Treatment Options and Medication Costs in California</h2>
            <p>Per the <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021</a>, recommended BV regimens include oral metronidazole, metronidazole vaginal gel, and clindamycin vaginal cream — all equally effective for uncomplicated BV.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="BV antibiotic options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>GoodRx prices retrieved May 2026. Prescription costs separate from visit fee.</caption>
                <thead><tr><th>Medication</th><th>Typical Regimen</th><th>GoodRx Price (May 2026)</th><th>Key Considerations</th></tr></thead>
                <tbody>
                  {MEDICATIONS.map((med) => (<tr key={med.name} className={med.firstLine ? 'tdmd-med-firstline' : ''}><td><strong>{med.name}</strong>{med.firstLine ? ' · First-line' : ''}</td><td>{med.regimen}</td><td>{med.priceHref ? <a href={med.priceHref} target="_blank" rel="noopener">{med.price}</a> : med.price}</td><td>{med.notes}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note"><strong>Important:</strong> Medication selection depends on allergies, pregnancy status, prior treatments, and tolerance. Do not start treatment without clinical evaluation.</p>
          </div>
        </section>

        {/* Dual Path */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care for BV in California</h2>
            <div className="tdmd-ca-bv__dual">
              <div className="tdmd-ca-bv__dual-card tdmd-ca-bv__dual-card--good">
                <h3>✓ Use TeleDirectMD if</h3>
                <ul>
                  <li>Classic BV: thin grayish discharge with fishy odor</li>
                  <li>Prior confirmed BV diagnosis with same symptoms</li>
                  <li>No fever, pelvic pain, or STI exposure</li>
                  <li>Not pregnant; adult 18+, in California</li>
                  <li>Aetna/UHC Commercial or self pay $79</li>
                </ul>
              </div>
              <div className="tdmd-ca-bv__dual-card tdmd-ca-bv__dual-card--alert">
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>OB/GYN:</strong> Pregnancy with BV symptoms</li>
                  <li><strong>STI clinic:</strong> Possible STI co-infection, in-person testing needed</li>
                  <li><strong>GYN:</strong> First episode, recurrent BV (&gt;3×/year), treatment failures</li>
                  <li><strong><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood California</a>:</strong> Free/low-cost BV testing + STI screening</li>
                  <li><strong><a href="https://www.familypact.org" rel="noopener" target="_blank">California Family PACT</a>:</strong> Free reproductive health care for eligible Californians</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local reproductive health clinics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-bv__cta-strip" role="complementary">
              <div><p>Book a same-day video visit — California adults, 18+</p><small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026</small></div>
              <a className="tdmd-ca-bv__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion sectionTitle="Frequently Asked Questions — BV Treatment in California" items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))} />
            <div className="tdmd-bottom-cta"><div className="tdmd-bottom-cta-copy"><h3>Ready to see a California-licensed MD?</h3><p>Book a same-day video visit. Self pay $79 · Aetna in-network · UHC Commercial approved.</p></div><div className="tdmd-bottom-cta-actions"><a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a><a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a></div></div>
          </div>
        </section>

        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <div className="tdmd-ca-bv__sibling-grid">
              {CA_SIBLINGS.map((s) => (<a key={s.slug} className="tdmd-ca-bv__sibling" href={`/ca/${s.slug}/`}><span className="tdmd-ca-bv__sibling-label">{s.label}</span><span className="tdmd-ca-bv__sibling-why">{s.why}</span></a>))}
            </div>
          </div>
        </section>

        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California B&amp;P Code §2290.5 — Telehealth Advancement Act</a>. Retrieved May 2026.</li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a>. Retrieved May 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 (AB 744)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines 2021 — Bacterial Vaginosis</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215 — Vaginitis in Nonpregnant Patients (2020)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/STD.aspx" rel="noopener" target="_blank">CDPH — STI Surveillance Data</a>. Retrieved May 2026.</li>
              <li><a href="https://www.goodrx.com/metronidazole" rel="noopener" target="_blank">GoodRx — Metronidazole Prices (May 2026)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood — Get Care</a>. Retrieved May 2026.</li>
              <li><a href="https://www.familypact.org" rel="noopener" target="_blank">California Family PACT</a>. Retrieved May 2026.</li>
              <li><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>. Retrieved May 2026.</li>
              <li><a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California — AB 2789 E-Prescribing</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes only. BV treatment requires clinical evaluation. If you have pelvic pain, fever, possible STI exposure, or are pregnant, seek in-person care. TeleDirectMD does not prescribe controlled substances. GoodRx prices retrieved May 2026; actual pharmacy costs vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="bv-treatment-online" conditionName="BV Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="bv-treatment-online" />
        <CommonSymptomsBlock conditionSlug="bv-treatment-online" conditionName="BV Treatment" />
      </div>
    </>
  );
}
