/**
 * CaYeastInfectionTreatmentOnline.js — California × Yeast Infection condition page (v3)
 *
 * URL: /ca/yeast-infection-treatment-online/
 * Authority: ACOG + IDSA (vaginal candidiasis is within IDSA scope)
 * Author: Parth Bhavsar, MD · NPI 1104323203 · ABFM · Licensed in CA
 */
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/yeast-infection-treatment-online/';
const PAGE_TITLE = 'Yeast Infection Treatment Online in California | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-20';
const DATE_MODIFIED = '2026-05-20';
const LAST_REVIEWED = '2026-05-20';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'California',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true,
    notes: 'Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true,
    notes: 'Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Enrollment pending. Self pay ($49) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Pending — Telehealth Only review in progress. Self pay ($49) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false,
    notes: 'Kaiser is a closed health system. Use Kaiser telehealth at kp.org.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false,
    notes: 'TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth at dhcs.ca.gov.' },
];

const MEDICATIONS = [
  { name: 'Fluconazole (Diflucan) 150 mg',
    regimen: 'Single 150 mg oral dose',
    price: '~$11.92 / 2 tablets',
    priceHref: 'https://www.goodrx.com/fluconazole',
    firstLine: true,
    notes: 'First-line for uncomplicated vulvovaginal candidiasis per ACOG and IDSA. Single-dose convenience. Not for use in pregnancy.' },
  { name: 'Miconazole 2% vaginal cream (OTC)',
    regimen: '5 g intravaginally nightly × 7 days',
    price: 'OTC ~$10–$15',
    priceHref: null,
    firstLine: true,
    notes: 'OTC topical azole — first-line alternative. Equally effective to oral fluconazole for uncomplicated VVC per ACOG.' },
  { name: 'Clotrimazole 1% vaginal cream (OTC)',
    regimen: '5 g intravaginally nightly × 7 days',
    price: 'OTC ~$8–$14',
    priceHref: null,
    firstLine: true,
    notes: 'OTC topical azole — first-line alternative. Available at all California pharmacies without a prescription.' },
  { name: 'Terconazole 0.4% vaginal cream (Rx)',
    regimen: '5 g intravaginally nightly × 7 days',
    price: '~$20–$40 with coupon',
    priceHref: 'https://www.goodrx.com/terconazole',
    firstLine: false,
    notes: 'Second-line when OTC azoles have failed. Prescription required. For non-albicans Candida or recurrent VVC.' },
];

const CA_SIBLINGS = [
  { slug: 'bv-treatment-online', label: 'BV Treatment in CA', why: 'Common differential — discharge symptoms overlap significantly with yeast infection.' },
  { slug: 'uti-treatment-online', label: 'UTI Treatment in CA', why: 'Dysuria and pelvic discomfort can occur in both conditions.' },
  { slug: 'chlamydia-treatment-online', label: 'Chlamydia Treatment in CA', why: 'STI differential when vaginal discharge is present.' },
  { slug: 'trichomoniasis-treatment-online', label: 'Trichomoniasis Treatment in CA', why: 'Trich can cause discharge and vulvar irritation similar to VVC.' },
  { slug: 'vaginal-dryness-treatment-online', label: 'Vaginal Dryness Treatment in CA', why: 'GSM/menopause-related symptoms sometimes confused with recurrent VVC.' },
  { slug: 'birth-control-refills-online', label: "Birth Control Refills in CA", why: "Hormonal contraceptives may alter vaginal flora — commonly discussed alongside VVC." },
];

const FAQ_ITEMS = [
  { question: 'Can I get yeast infection treatment online in California?',
    answer: (
      <p>
        Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits California-licensed physicians to diagnose and treat uncomplicated vulvovaginal candidiasis (VVC) by synchronous video visit without a prior in-person examination. The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. Classic VVC symptoms — thick white discharge, vaginal itching, and vulvar irritation without odor, fever, or systemic illness — can be reliably evaluated by history. Per <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215</a>, empiric oral fluconazole 150 mg is appropriate for women with classic VVC symptoms who have previously been diagnosed. TeleDirectMD self pay is $49. Aetna is in-network as of April 30, 2026.
      </p>
    ),
  },
  { question: 'Does California require an in-person visit before telehealth for yeast infection treatment?',
    answer: (
      <p>
        No. California B&amp;P Code §2290.5 does not require a prior in-person visit. A California-licensed physician can establish a new patient relationship and prescribe appropriate non-controlled medications — including fluconazole — through a synchronous video visit after obtaining informed consent. Verbal or written consent is documented at the start of every TeleDirectMD visit.
      </p>
    ),
  },
  { question: 'How common are yeast infections in California women?',
    answer: (
      <p>
        Vulvovaginal candidiasis (VVC) affects an estimated 75% of women at least once in their lifetime and approximately 40–45% experience recurrent infections, according to the <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">American College of Obstetricians and Gynecologists</a>. With California&apos;s population of approximately 20 million women, this translates to millions experiencing VVC annually. Most infections are caused by <em>Candida albicans</em>, which is susceptible to standard azole therapy. Non-albicans species — more common after repeated treatment — require culture-guided therapy from an in-person provider.
      </p>
    ),
  },
  { question: 'What is the difference between a yeast infection and BV?',
    answer: (
      <p>
        Both conditions cause vaginal discharge and discomfort, but they are distinct. Yeast infection (VVC) typically causes thick, white, cottage cheese-like discharge with vulvar itching and burning; there is no odor. Bacterial vaginosis (BV) causes thin, grayish or white discharge with a characteristic fishy odor, and is caused by overgrowth of anaerobic bacteria rather than fungal overgrowth. The <a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines</a> treat these as separate conditions requiring different medications — azoles for VVC, metronidazole or clindamycin for BV. If symptoms are uncertain, in-person testing with microscopy (wet prep) can differentiate the two.
      </p>
    ),
  },
  { question: 'What medications are used for yeast infection treatment in California?',
    answer: (
      <p>
        Per <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215 (2020)</a>, first-line treatment for uncomplicated VVC includes: oral fluconazole 150 mg single dose (GoodRx ~$11.92 / 2 tablets at <a href="https://www.goodrx.com/fluconazole" rel="noopener" target="_blank">goodrx.com</a>), or OTC intravaginal azoles — miconazole 2% cream ×7 days or clotrimazole 1% cream ×7 days (OTC ~$8–$15 at California pharmacies). For recurrent VVC (≥4 episodes/year), prescription-strength antifungals and suppressive therapy may be required — these are best managed with in-person evaluation and culture.
      </p>
    ),
  },
  { question: 'Is fluconazole safe for yeast infection treatment in California?',
    answer: (
      <p>
        Fluconazole 150 mg is FDA-approved for vaginal candidiasis and is generally well tolerated. It should not be used during pregnancy — topical OTC azoles are preferred for pregnant patients who should also be seen in person. Fluconazole has drug-drug interactions with certain medications, including blood thinners, statins, and QT-prolonging drugs. TeleDirectMD reviews your medication list, allergies, and pregnancy status before prescribing. <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG</a> recommends re-evaluation after 2 failed courses of treatment.
      </p>
    ),
  },
  { question: 'When does a yeast infection require in-person care in California?',
    answer: (
      <p>
        Seek in-person evaluation if: symptoms don&apos;t improve within 72 hours of OTC treatment; this is your first episode or you are not certain of the diagnosis; you are pregnant; you have recurrent VVC (≥4 episodes per year); you have fever, abdominal pain, or pelvic pain (possible PID); or you may have been exposed to a sexually transmitted infection. Planned Parenthood California provides in-person evaluation with sliding-scale fees at <a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">plannedparenthood.org/get-care</a>. California Title X clinics offer free or low-cost care through <a href="https://www.hhs.gov/opa/title-x-family-planning/index.html" rel="noopener" target="_blank">HHS Title X program</a>.
      </p>
    ),
  },
  { question: 'Is my Aetna plan in California in-network with TeleDirectMD?',
    answer: (
      <p>
        Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. Aetna commercial plan members in California may be able to use in-network benefits. Always verify current in-network status directly with Aetna before your visit. See <a href="/insurance">all insurance options</a>. Self pay ($49) is available regardless of insurance status.
      </p>
    ),
  },
  { question: 'Will Medi-Cal cover my yeast infection treatment visit at TeleDirectMD?',
    answer: (
      <p>
        TeleDirectMD is not currently enrolled as a Medi-Cal rendering provider. <a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS</a> confirms that Medi-Cal covers telehealth for physical health services when the provider is enrolled. If you have Medi-Cal, you can use the $49 self-pay rate at TeleDirectMD, or find a Medi-Cal-enrolled telehealth provider through your managed care plan or the DHCS directory.
      </p>
    ),
  },
  { question: 'What is recurrent vulvovaginal candidiasis (RVVC) and can telehealth help?',
    answer: (
      <p>
        Recurrent VVC is defined as four or more symptomatic episodes of VVC per year, per <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG 2020 guidelines</a>. RVVC affects approximately 5–8% of reproductive-age women. Evaluation requires in-person examination and vaginal culture to identify the species and guide treatment — non-albicans Candida species are more common in RVVC and are often azole-resistant. TeleDirectMD can provide initial acute episode treatment but recommends in-person evaluation for RVVC workup and suppressive therapy planning.
      </p>
    ),
  },
  { question: 'Does California AB 744 telehealth parity law apply to yeast infection treatment?',
    answer: (
      <p>
        Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth services on the same basis as in-person visits. Plans cannot require face-to-face contact as a condition of reimbursement. Parity applies when the provider is already in-network. Currently, Aetna (active April 30, 2026) and UnitedHealthcare Commercial (approved May 29, 2026) are in-network in California for TeleDirectMD.
      </p>
    ),
  },
  { question: 'Are yeast infection medications controlled substances in California?',
    answer: (
      <p>
        No. Fluconazole and topical azole antifungals are not controlled substances. They can be prescribed via California telehealth without restriction. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022). TeleDirectMD sends e-prescriptions to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or any other California pharmacy — during or immediately after your visit.
      </p>
    ),
  },
  { question: 'Can men get yeast infection treatment online in California?',
    answer: (
      <p>
        Male genital yeast infections (Candida balanitis) are less common but do occur, particularly in uncircumcised men and those with diabetes or recent antibiotic use. Symptoms include redness, itching, and a rash on the glans penis. Topical OTC clotrimazole is often effective. TeleDirectMD can evaluate male genital candidiasis by video visit. Symptoms that do not resolve, recur, or involve urethral discharge warrant in-person STI testing.
      </p>
    ),
  },
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'Yeast infection (vulvovaginal candidiasis) treatment by secure video visit for California adults. Board-certified Family Medicine physician. California telehealth law compliant. Aetna in-network. Self pay $49. ACOG-guideline treatment.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Vulvovaginal Candidiasis',
      alternateName: ['Yeast Infection', 'VVC', 'Vaginal Yeast Infection', 'Candidiasis'],
      code: { '@type': 'MedicalCode', code: 'B37.3', codingSystem: 'ICD-10-CM' },
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
      cssSelector: ['#ca-yeast-opening', '#ca-yeast-opening p', '.tdmd-ca-yeast__byline', '#ca-yeast-infection-treatment-online-faq'],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: extractPlain(faq.answer) },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Yeast Infection Treatment Online in California',
    description: 'Three steps to receive yeast infection evaluation and, if appropriate, a fluconazole prescription from a California-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '49' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California yeast infection treatment. No referral needed. Self pay $49.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD by secure video', text: 'The physician reviews your symptoms, prior episodes, medications, pregnancy status, and risk factors. Consent per CA B&P Section 2290.5 confirmed.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a California-compliant e-prescription (fluconazole or other antifungal) is sent to your chosen California pharmacy.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' },
      { '@type': 'ListItem', position: 3, name: 'Yeast Infection Treatment Online in California', item: PAGE_URL },
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

const PAGE_CSS = `
.tdmd-ca-yeast{color:var(--tdmd-text);}
.tdmd-ca-yeast .tdmd-ca-yeast__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.tdmd-ca-yeast .tdmd-ca-yeast__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;}
.tdmd-ca-yeast .tdmd-ca-yeast__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.tdmd-ca-yeast .tdmd-ca-yeast__byline-name{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-yeast .tdmd-ca-yeast__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.tdmd-ca-yeast .tdmd-ca-yeast__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}
.tdmd-ca-yeast .tdmd-ca-yeast__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.tdmd-ca-yeast .tdmd-ca-yeast__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.tdmd-ca-yeast .tdmd-ca-yeast__dual-card--good{border-left:5px solid #2E7D52;}
.tdmd-ca-yeast .tdmd-ca-yeast__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.tdmd-ca-yeast .tdmd-ca-yeast__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.tdmd-ca-yeast .tdmd-ca-yeast__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
@media (max-width:720px){.tdmd-ca-yeast .tdmd-ca-yeast__dual{grid-template-columns:minmax(0,1fr);}}
.tdmd-ca-yeast .tdmd-ca-yeast__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.tdmd-ca-yeast .tdmd-ca-yeast__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.tdmd-ca-yeast .tdmd-ca-yeast__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);}
.tdmd-ca-yeast .tdmd-ca-yeast__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-yeast .tdmd-ca-yeast__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.tdmd-ca-yeast .tdmd-ca-yeast__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;}
.tdmd-ca-yeast .tdmd-ca-yeast__payor-pill--good{background:#E6F4EA;color:#1F6B36;}
.tdmd-ca-yeast .tdmd-ca-yeast__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}
.tdmd-ca-yeast .tdmd-ca-yeast__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}
.tdmd-ca-yeast .tdmd-ca-yeast__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;}
.tdmd-ca-yeast .tdmd-ca-yeast__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-ca-yeast .tdmd-ca-yeast__cta-strip .tdmd-ca-yeast__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-ca-yeast .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.tdmd-ca-yeast .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.tdmd-ca-yeast .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;font-weight:600;}
.tdmd-ca-yeast .tdmd-related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-ca-yeast .tdmd-related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;}
.tdmd-ca-yeast .tdmd-med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
`;

export default function CaYeastInfectionTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-yeast-infection-treatment-online';
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={`schema-${i}`} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="tdmd-ca-yeast">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Yeast Infection Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ─────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Yeast Infection Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adults: secure video visit with a board-certified MD. Self pay $49 · Aetna in-network · UHC Commercial approved · CA B&amp;P §2290.5 compliant.
                </p>
                <p>
                  Vulvovaginal candidiasis (VVC) — commonly called a yeast infection — is one of the most common gynecological conditions, affecting approximately 75% of women at least once in their lifetime per the <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">American College of Obstetricians and Gynecologists</a>. Classic symptoms include thick, white, cottage cheese-like vaginal discharge, vulvar itching, burning, and redness — typically without vaginal odor. When symptoms are classic and a prior diagnosis has been confirmed, oral fluconazole 150 mg single dose or OTC intravaginal azoles are effective first-line treatment options. TeleDirectMD screens for red-flag symptoms — fever, pelvic pain, unusual discharge, possible STI exposure — before determining whether treatment by video is appropriate. This page serves California adults in {caCities.join(', ')}, and surrounding areas.
                </p>

                <div className="tdmd-ca-yeast__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-ca-yeast__byline-text">
                    <span className="tdmd-ca-yeast__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-ca-yeast__byline-meta">
                      NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed{' '}
                      <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opener`}>Can I get treatment online?</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>VVC in California</a></li>
                  <li><a href={`#${pid}-clinical`}>Clinical guide</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Treatment options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $49 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>Licensed telehealth for California adults at time of visit</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $49</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> B37.3 (Candidiasis of vulva and vagina — final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Yeast Infection Care in California</h2>
                  <ul>
                    <li>Symptom evaluation for classic VVC presentation</li>
                    <li>Red-flag screening for STIs, PID, and other causes</li>
                    <li>ACOG-guideline antifungal treatment when appropriate</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Guidance for recurrent VVC and prevention</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Seek urgent care if you have fever, pelvic pain, lesions, possible STI exposure, or are pregnant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER ───────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-opener`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener" id="ca-yeast-opening">
              <h2>Can I Get Yeast Infection Treatment Online in California?</h2>
              <p>
                <strong>Yes.</strong> <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — authorizes California-licensed physicians to evaluate and treat uncomplicated vulvovaginal candidiasis (VVC) via synchronous video visit without a prior in-person examination. The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> holds telehealth physicians to the same standard of care as in-person physicians. Classic VVC — thick white discharge, vulvar itching, burning — can be reliably assessed by history when symptoms are typical and a prior diagnosis is established. Per <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215</a>, empiric oral fluconazole 150 mg is appropriate for women with classic VVC symptoms. TeleDirectMD&apos;s self-pay rate is $49. <a href="/insurance/aetna/california/yeast-infection-treatment/">Aetna is in-network</a> as of April 30, 2026. UnitedHealthcare Commercial is approved effective May 29, 2026.
              </p>
              <small className="tdmd-condition-opener__meta">
                Reviewed by <a href="/about/">Parth Bhavsar, MD</a> — Board-Certified Family Medicine · NPI 1104323203 · Licensed in California · Last reviewed May 20, 2026
              </small>
            </div>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Yeast Infection Telehealth Eligibility for California</h2>
            <div className="tdmd-ca-yeast__dual">
              <div className="tdmd-ca-yeast__dual-card tdmd-ca-yeast__dual-card--good">
                <h3>✓ You Are Eligible If</h3>
                <ul>
                  <li>You are 18 years old or older</li>
                  <li>You are physically located in California at the time of the visit</li>
                  <li>You have classic VVC symptoms: thick white discharge, vaginal/vulvar itching, burning, redness — without strong odor</li>
                  <li>You have been diagnosed with a yeast infection before and recognize the same symptoms</li>
                  <li>You do not have fever, pelvic pain, or skin lesions</li>
                  <li>You are not currently pregnant</li>
                  <li>You have no known severe immunosuppression (HIV/AIDS, chemotherapy, organ transplant)</li>
                </ul>
              </div>
              <div className="tdmd-ca-yeast__dual-card tdmd-ca-yeast__dual-card--alert">
                <h3>✗ You Are Not Eligible If</h3>
                <ul>
                  <li>You are pregnant</li>
                  <li>You have fever or pelvic/abdominal pain (possible PID)</li>
                  <li>You have sores, blisters, or unusual lesions (possible herpes or other STI)</li>
                  <li>You may have been exposed to a sexually transmitted infection</li>
                  <li>This is your first episode ever (in-person exam + wet prep recommended for first diagnosis)</li>
                  <li>You have recurrent VVC (≥4 episodes/year) requiring in-person culture</li>
                  <li>You are significantly immunocompromised</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If you have red-flag symptoms, see a clinician in person. TeleDirectMD is not appropriate for complex presentations.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4) CALIFORNIA TELEHEALTH LAW ───────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Yeast Infection Treatment</h2>

            <h3>Does California require an in-person visit before telehealth for yeast infection treatment?</h3>
            <p>
              No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> does not require a prior in-person visit before telehealth services. A California-licensed physician can establish a new patient relationship and prescribe appropriate non-controlled medications — including antifungals — through a synchronous video visit. Patient consent must be obtained and documented before care is delivered.
            </p>

            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>
              The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> states: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; Physicians must be licensed in California to provide telehealth to California patients.
            </p>

            <h3>Does California telehealth parity law cover yeast infection visits?</h3>
            <p>
              Yes, for commercial plans. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a> (AB 744, 2019) requires commercial health plans to reimburse telehealth on the same basis as in-person services. Plans cannot require face-to-face contact as a condition of reimbursement. Parity applies when the provider is already in-network with your specific plan.
            </p>

            <h3>Are antifungal prescriptions considered controlled substances in California?</h3>
            <p>
              No. Fluconazole and prescription-strength azole antifungals are not controlled substances. They can be prescribed via California telehealth without restriction. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 5) EPIDEMIOLOGY ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>Yeast Infections in California: Prevalence and Context</h2>

            <h3>How common are yeast infections in California?</h3>
            <p>
              Vulvovaginal candidiasis is one of the most common infections affecting California women. The <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">American College of Obstetricians and Gynecologists</a> estimates that 75% of women will have at least one episode of VVC in their lifetime, with 40–45% experiencing two or more episodes. Applying these rates to California&apos;s approximately 20 million women, millions of Californians experience VVC annually. The condition accounts for a substantial proportion of primary care and urgent care visits, particularly in reproductive-age women aged 15–44.
            </p>

            <h3>What causes yeast infections and who is most at risk in California?</h3>
            <p>
              Approximately 85–90% of VVC cases are caused by <em>Candida albicans</em>, with the remainder due to non-albicans species such as <em>C. glabrata</em> and <em>C. tropicalis</em>. Risk factors include recent antibiotic use (which disrupts normal vaginal flora), uncontrolled diabetes mellitus, high-estrogen states such as pregnancy or high-dose oral contraceptives, immunosuppression, and corticosteroid use. Recurrent VVC — defined by <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG</a> as four or more symptomatic episodes per year — affects approximately 5–8% of reproductive-age women and may warrant culture and suppressive antifungal therapy managed in person.
            </p>

            <h3>What is the relationship between antibiotics and yeast infections?</h3>
            <p>
              Antibiotic use is one of the strongest risk factors for VVC because broad-spectrum antibiotics suppress the normal bacterial flora of the vagina, allowing <em>Candida</em> to overgrow. This is a common pattern in California patients who have recently been treated for a UTI, skin infection, dental infection, or respiratory infection with antibiotics. If you develop yeast infection symptoms within 1–2 weeks of completing an antibiotic course, this is a clinically recognizable scenario that TeleDirectMD can evaluate by telehealth.
            </p>
          </div>
        </section>

        {/* ─── 6) CLINICAL GUIDE ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-clinical`}>
          <div className="tdmd-container">
            <h2>Clinical Guide: Yeast Infection Diagnosis and Treatment</h2>

            <h3>What are the symptoms of a yeast infection?</h3>
            <p>
              Classic VVC symptoms include: thick, white, cottage cheese-like vaginal discharge (without odor); intense vulvar itching or burning; vulvar or vaginal redness and swelling; dyspareunia (pain with sex); and external dysuria (burning when urine contacts irritated vulvar skin). VVC is typically NOT associated with strong vaginal odor — odor is more characteristic of bacterial vaginosis (BV). The <a href="https://www.cdc.gov/std/treatment-guidelines/vaginitis-overview.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines</a> note that symptoms alone cannot reliably distinguish VVC from other vaginitis causes in the absence of prior confirmed diagnosis.
            </p>

            <h3>How does the physician distinguish VVC from other causes of vaginitis?</h3>
            <p>
              VVC, bacterial vaginosis (BV), and trichomoniasis can all cause vaginal discharge and irritation. The distinguishing features by history: VVC has thick white discharge, itching, and no odor; BV has thin gray/white discharge with fishy odor and minimal itching; trichomoniasis has frothy yellow-green discharge with odor and possible strawberry cervix. When diagnosis is uncertain by history — particularly for a first episode — in-person examination with pH testing and microscopy is the preferred approach. VVC typically shows vaginal pH &lt;4.5, while BV and trichomoniasis raise pH above 4.5.
            </p>

            <h3>Is telehealth appropriate for yeast infection diagnosis?</h3>
            <p>
              For women with a prior confirmed diagnosis of VVC who recognize the same classic symptoms, telehealth evaluation by history is appropriate and clinically validated. <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215 (2020)</a> acknowledges that empiric treatment is appropriate for women with classic symptoms of uncomplicated VVC, consistent with longstanding clinical practice that supports OTC treatment for women who have been previously diagnosed. TeleDirectMD adds physician-level screening to identify patients with red-flag symptoms who require in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 7) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Yeast Infection Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your California video visit</h3>
                  <p>No referral or insurance required. Self pay $49. Many visits available same day. Before your visit, note your symptoms, how long they have lasted, any prior yeast infection diagnoses, recent antibiotics, current medications, and pregnancy status.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a California-licensed MD by secure video</h3>
                  <p>The physician reviews your symptom pattern, prior VVC history, risk factors (antibiotics, diabetes, immunosuppression), pregnancy status, and medications. Consent under CA B&amp;P §2290.5 is obtained and documented. Red-flag screening separates typical uncomplicated VVC from presentations requiring in-person evaluation.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Get a treatment plan and, if appropriate, a prescription</h3>
                  <p>If antifungal therapy is clinically appropriate, a California-compliant e-prescription is sent to your chosen California pharmacy. OTC antifungal guidance is also provided. You receive follow-up instructions regardless of treatment choice.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Yeast Infection Treatment Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$49</strong> for a complete MD video visit. In-network insurance patients pay their plan&apos;s telehealth copay. The table below reflects TeleDirectMD payor enrollment for California, refreshed May 20, 2026.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$49</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag screening and VVC history review</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>OTC antifungal guidance</li>
                  <li>Follow-up instructions and prevention advice</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical yeast infection cost comparison">
                <h3>Typical Yeast Infection Care Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges before insurance. Actual costs vary.</p>
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
                <p className="tdmd-price-footnote">Comparison reflects typical California metro pricing. Actual costs vary by location and plan.</p>
              </div>
            </div>

            <h3 style={{ marginTop: '1.75rem' }}>California Payor Status — TeleDirectMD</h3>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="TeleDirectMD California payor status">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Source: TeleDirectMD payor enrollment records, refreshed May 20, 2026. Verify current in-network status with your insurer before booking.
                </caption>
                <thead>
                  <tr><th>Insurer</th><th>Status</th><th>Effective</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  {CA_PAYORS.map((p) => {
                    const pillClass = p.inNetwork
                      ? 'tdmd-ca-yeast__payor-pill tdmd-ca-yeast__payor-pill--good'
                      : p.status === 'Pending' || p.status === 'Approved'
                        ? 'tdmd-ca-yeast__payor-pill tdmd-ca-yeast__payor-pill--pending'
                        : 'tdmd-ca-yeast__payor-pill tdmd-ca-yeast__payor-pill--none';
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
          </div>
        </section>

        {/* ─── 9) MEDICATIONS TABLE ────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Yeast Infection Treatment Options and Medication Costs in California</h2>
            <p>
              Per <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215 (2020)</a>, first-line treatment for uncomplicated VVC is oral fluconazole 150 mg single dose or a short-course intravaginal azole (clotrimazole, miconazole, or terconazole). OTC intravaginal azoles are equally effective to oral fluconazole for uncomplicated VVC.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Yeast infection medication options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 2026 from goodrx.com. National coupon prices; actual cost varies by California pharmacy. Prescription costs are separate from the TeleDirectMD visit fee.
                </caption>
                <thead>
                  <tr><th>Medication</th><th>Typical Regimen</th><th>GoodRx Price (May 2026)</th><th>Key Considerations</th></tr>
                </thead>
                <tbody>
                  {MEDICATIONS.map((med) => (
                    <tr key={med.name} className={med.firstLine ? 'tdmd-med-firstline' : ''}>
                      <td><strong>{med.name}</strong>{med.firstLine ? ' · First-line' : ''}</td>
                      <td>{med.regimen}</td>
                      <td>{med.priceHref ? <a href={med.priceHref} target="_blank" rel="noopener">{med.price}</a> : med.price}</td>
                      <td>{med.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> Antifungal selection depends on allergies, pregnancy status, prior treatment failures, and immunosuppression. Do not self-diagnose before a first episode — in-person examination with microscopy is recommended to confirm VVC.
            </p>
          </div>
        </section>

        {/* ─── 10) DUAL-PATH BLOCK ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care: Which Is Right for Your Yeast Infection?</h2>
            <p>Many uncomplicated yeast infections in adults with prior confirmed diagnosis are appropriate for telehealth evaluation. Some situations require in-person care.</p>
            <div className="tdmd-ca-yeast__dual">
              <div className="tdmd-ca-yeast__dual-card tdmd-ca-yeast__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>You have classic VVC symptoms: thick white discharge, itching, burning — no odor</li>
                  <li>You have been diagnosed with a yeast infection before</li>
                  <li>No fever, pelvic pain, skin lesions, or STI exposure</li>
                  <li>Not pregnant</li>
                  <li>Adult 18+, located in California</li>
                  <li>Aetna or UHC Commercial (in-network), or self pay $49</li>
                </ul>
              </div>
              <div className="tdmd-ca-yeast__dual-card tdmd-ca-yeast__dual-card--alert">
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>Urgent care / OB:</strong> Pregnancy with VVC symptoms — different treatment required</li>
                  <li><strong>Primary care or GYN:</strong> First-ever episode, recurrent VVC (&ge;4/year), treatment failures</li>
                  <li><strong>STI clinic:</strong> Possible STI exposure, unusual discharge, pelvic pain</li>
                  <li><strong><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood California</a>:</strong> Free/low-cost vaginitis testing with sliding-scale fees</li>
                  <li><strong><a href="https://www.familypact.org" rel="noopener" target="_blank">California Family PACT</a>:</strong> Free reproductive health care for eligible low-income Californians</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local reproductive health clinics statewide</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11) CTA STRIP ───────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-yeast__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — California adults, 18+</p>
                <small>Self pay $49 · Aetna in-network · UHC Commercial approved May 2026 · No ER wait</small>
              </div>
              <a className="tdmd-ca-yeast__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 12) FAQ ─────────────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Yeast Infection Treatment in California"
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

        {/* ─── 13) RELATED CA CONDITIONS ───────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <div className="tdmd-ca-yeast__sibling-grid">
              {CA_SIBLINGS.map((s) => (
                <a key={s.slug} className="tdmd-ca-yeast__sibling" href={`/ca/${s.slug}/`}>
                  <span className="tdmd-ca-yeast__sibling-label">{s.label}</span>
                  <span className="tdmd-ca-yeast__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 14) PILLAR / CLUSTER LINKS ──────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <div className="tdmd-related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/yeast-infection-treatment-online/">National Yeast Infection page</a>
              <a href="/health-guides/">Health Guides</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/insurance">Insurance</a>
              <a href="/faq">FAQ</a>
              <a href="/ca/bv-treatment-online/">BV Treatment in CA</a>
              <a href="/ca/uti-treatment-online/">UTI Treatment in CA</a>
              <a href="/ca/chlamydia-treatment-online/">Chlamydia Treatment in CA</a>
              <a href="/ca/trichomoniasis-treatment-online/">Trichomoniasis Treatment in CA</a>
              <a href="/ca/vaginal-dryness-treatment-online/">Vaginal Dryness Treatment in CA</a>
              <a href="/ca/birth-control-refills-online/">Birth Control Refills in CA</a>
            </div>
          </div>
        </section>

        {/* ─── 15) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5 — Telehealth Advancement Act</a>. Retrieved May 2026.</li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a>. Retrieved May 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/vaginitis-in-nonpregnant-patients" rel="noopener" target="_blank">ACOG Practice Bulletin 215 — Vaginitis in Nonpregnant Patients (2020)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.cdc.gov/std/treatment-guidelines/vaginitis-overview.htm" rel="noopener" target="_blank">CDC STI Treatment Guidelines — Vaginitis (2021)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.idsociety.org/practice-guideline/candidiasis/" rel="noopener" target="_blank">IDSA Clinical Practice Guideline for the Management of Candidiasis (2016)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.goodrx.com/fluconazole" rel="noopener" target="_blank">GoodRx — Fluconazole Prices (May 2026)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood — Get Care</a>. Retrieved May 2026.</li>
              <li><a href="https://www.familypact.org" rel="noopener" target="_blank">California Family PACT</a>. Retrieved May 2026.</li>
              <li><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211 — Health and Social Services</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 16) DISCLAIMER ──────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Treatment decisions are made by a California-licensed board-certified physician based on clinical history at the time of the visit. If you have red-flag symptoms (fever, pelvic pain, lesions, possible STI exposure, pregnancy), seek urgent in-person care. TeleDirectMD does not prescribe controlled substances. GoodRx prices retrieved May 2026; actual pharmacy costs vary.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="yeast-infection-treatment-online" conditionName="Yeast Infection Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="yeast-infection-treatment-online" />
        <CommonSymptomsBlock conditionSlug="yeast-infection-treatment-online" conditionName="Yeast Infection Treatment" />
      </div>
    </>
  );
}
