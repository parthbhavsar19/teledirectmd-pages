import { getAggregateRating, getReviewBlock } from '../../lib/review-schema';
import FaqAccordion from '../components/FaqAccordion';
import { rich, plain } from '../components/ConditionCostPage';
import { contentDate } from '../../lib/content-dates';
import { MEDICARE_2026, HCCI_2022 } from '../../lib/urgent-care-cost-data';
import { REF_LIBRARY, COURSES, NADAC_RATES, KFF_ED_2019, usd, usd0, longDate } from '../../lib/condition-cost-data';

// Cost guide hub. Rebuilt 2026-11-25 so every figure matches the rebuilt cost pages:
// each number comes from REF_LIBRARY (sources read 2026-11-24), says what kind of
// number it is and its year, and is computed from the same constants the guides use.
// No retail coupon prices, no figures from sources whose terms bar reuse, and no
// "same-day" claims.

const BASE_URL = 'https://teledirectmd.com';
const N = MEDICARE_2026.national;
const C = COURSES;
const NADAC_EFF = longDate(NADAC_RATES.effective);
const ER_VS_UC = Math.round(HCCI_2022.er / HCCI_2022.urgentCare);
const UPDATED = contentDate('costHub');

export const metadata = {
  title: 'Cost Guides 2026: Doctor Visit, Urgent Care, ER | TeleDirectMD',
  description:
    `What a doctor visit, urgent care, the ER and common conditions cost in 2026, from public data: employer plans paid ${usd0(HCCI_2022.urgentCare)} per urgent care visit and ${usd0(HCCI_2022.er)} per ER visit (HCCI, 2022), Medicare 2026 visit benchmarks, and what pharmacies pay for common antibiotics.`,
  alternates: { canonical: 'https://teledirectmd.com/cost' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Cost Guides 2026: Doctor Visit, Urgent Care, ER',
    description:
      'What care costs in 2026, by setting and by condition, from public data with every source and year shown.',
    url: 'https://teledirectmd.com/cost',
  },
};

// Order = citation numbers on this page (first use first).
const REFS = [
  'ref-hcci', 'ref-pfs', 'ref-onemed', 'ref-dod', 'ref-kff-ed', 'ref-nadac',
  'ref-gfe', 'ref-gfe-ppdr', 'ref-hrsa-find', 'ref-hrsa-sfds', 'ref-emtala',
  'ref-irs-501r4', 'ref-irs-p502',
];
const refNum = (id) => {
  const i = REFS.indexOf(id);
  return i === -1 ? 0 : i + 1;
};
const R = (text, key) => rich(text, refNum, key);

// Cost page catalog. Descriptions name what each guide covers; figures live in the guides.
const COST_CATALOG = [
  {
    slug: 'urgent-care-cost-without-insurance',
    name: 'Urgent Care Cost Without Insurance (2026)',
    desc: 'Medicare 2026 benchmarks for every state, employer plan averages, what x-rays and generic medicine add, and your right to a Good Faith Estimate.',
  },
  {
    slug: 'er-visit-cost-without-insurance',
    name: 'ER Visit Cost Without Insurance (2026)',
    desc: 'What employer plans and patients paid per ER visit, Medicare ER physician rates by level, and the financial assistance rules that can lower an uninsured ER bill.',
  },
  {
    slug: 'online-doctor-visit-cost',
    name: 'Online Doctor Visit Cost (2026)',
    desc: 'Published telehealth prices from seven services, Medicare office visit benchmarks, and the cheapest ways to see a doctor without insurance.',
  },
  {
    slug: 'online-prescription-cost',
    name: 'Online Prescription Cost',
    desc: 'What an online prescription costs: the $79 visit plus what the pharmacy charges for the medicine.',
  },
  {
    slug: 'uti-treatment-cost',
    name: 'UTI Treatment Cost (2026)',
    desc: 'The visit, the urine test and the antibiotic: UTI visit prices at urgent care and the ER, and what pharmacies pay for each first-line antibiotic.',
  },
  {
    slug: 'flu-treatment-cost',
    name: 'Flu Treatment Cost (2026)',
    desc: 'The visit, the test and the antiviral: Medicare visit benchmarks and what pharmacies pay for generic oseltamivir and Xofluza (CMS NADAC).',
  },
  {
    slug: 'uti-antibiotics-cost',
    name: 'UTI Antibiotics Cost',
    desc: 'Why every UTI antibiotic in the US requires a prescription, and what generic UTI antibiotics cost. Visit: $79 (adult women only).',
  },
  {
    slug: 'sinus-infection-treatment-cost',
    name: 'Sinus Infection Treatment Cost (2026)',
    desc: 'Why most sinus infections need no test or antibiotic, Medicare visit benchmarks, and what pharmacies pay for amoxicillin-clavulanate and doxycycline.',
  },
  {
    slug: 'sore-throat-treatment-cost',
    name: 'Strep Throat Test and Treatment Cost (2026)',
    desc: 'When a strep test is worth paying for, Medicare visit benchmarks, and what pharmacies pay for a 10-day course of amoxicillin or penicillin.',
  },
  {
    slug: 'pink-eye-cost',
    name: 'Pink Eye Treatment Cost',
    desc: 'Bacterial conjunctivitis evaluated by video for a flat $79, with antibiotic eye drops when appropriate.',
  },
  {
    slug: 'ear-infection-cost',
    name: 'Ear Infection Treatment Cost',
    desc: 'Otitis externa (swimmer\'s ear) and mild otitis media evaluated by video for a flat $79.',
  },
  {
    slug: 'yeast-infection-cost',
    name: 'Yeast Infection Cost',
    desc: 'Fluconazole or topical antifungals prescribed by video for vaginal yeast infections, for a flat $79.',
  },
  {
    slug: 'bv-treatment-cost',
    name: 'BV Treatment Cost',
    desc: 'Bacterial vaginosis evaluated by video, with metronidazole or clindamycin when appropriate, for a flat $79.',
  },
  {
    slug: 'covid-19-treatment-cost',
    name: 'COVID-19 Treatment Cost',
    desc: 'Paxlovid eligibility visit for $79. Paxlovid lists near $1,390 but is free for eligible uninsured and Medicare patients through PAXCESS through December 31, 2026.',
  },
  {
    slug: 'acne-treatment-cost',
    name: 'Acne Treatment Cost',
    desc: 'Prescription acne treatment by video for a flat $79, and what the medicine adds.',
  },
  {
    slug: 'eczema-treatment-cost',
    name: 'Eczema Treatment Cost',
    desc: 'Eczema flares treated with prescription topical steroids or tacrolimus by video for a flat $79.',
  },
  {
    slug: 'cold-sore-cost',
    name: 'Cold Sore Treatment Cost',
    desc: 'Antiviral treatment for cold sores (HSV-1): valacyclovir or acyclovir evaluated and prescribed by video for $79.',
  },
  {
    slug: 'shingles-cost',
    name: 'Shingles Treatment Cost',
    desc: 'Early shingles (herpes zoster) antiviral treatment, which is time-sensitive. Visit: $79 flat.',
  },
  {
    slug: 'hair-loss-treatment-cost',
    name: 'Hair Loss Treatment Cost',
    desc: 'Finasteride and other evidence-based hair loss treatments evaluated and prescribed by video for $79.',
  },
  {
    slug: 'birth-control-refills-cost',
    name: 'Birth Control Refill Cost',
    desc: 'Oral contraceptive refill visits for a flat $79. A pelvic exam is not required to refill the pill for most patients.',
  },
  {
    slug: 'diabetes-refills-cost',
    name: 'Diabetes Medication Refill Cost',
    desc: 'Stable type 2 diabetes patients can refill metformin and other oral medications, or a current insulin dose as a bridge, by video for $79. No GLP-1 prescribing.',
  },
  {
    slug: 'migraine-treatment-cost',
    name: 'Migraine Treatment Cost',
    desc: 'Triptan refills and preventive migraine medication renewed by video for $79.',
  },
  {
    slug: 'erectile-dysfunction-cost',
    name: 'Erectile Dysfunction Cost',
    desc: 'Evaluation and a prescription for sildenafil or tadalafil by video for a flat $79.',
  },
  {
    slug: 'seasonal-allergies-cost',
    name: 'Seasonal Allergies Cost',
    desc: 'Prescription allergy medications (nasal steroids, antihistamines) evaluated and prescribed by video for $79.',
  },
];

// Display grouping. Every COST_CATALOG slug must appear exactly once.
const COST_GROUPS = [
  { title: 'Visits and prescriptions', slugs: ['urgent-care-cost-without-insurance', 'er-visit-cost-without-insurance', 'online-doctor-visit-cost', 'online-prescription-cost'] },
  { title: 'Infections', slugs: ['uti-treatment-cost', 'flu-treatment-cost', 'uti-antibiotics-cost', 'sinus-infection-treatment-cost', 'sore-throat-treatment-cost', 'pink-eye-cost', 'ear-infection-cost', 'yeast-infection-cost', 'bv-treatment-cost', 'covid-19-treatment-cost'] },
  { title: 'Skin and hair', slugs: ['acne-treatment-cost', 'eczema-treatment-cost', 'cold-sore-cost', 'shingles-cost', 'hair-loss-treatment-cost'] },
  { title: 'Refills and ongoing care', slugs: ['birth-control-refills-cost', 'diabetes-refills-cost', 'migraine-treatment-cost', 'erectile-dysfunction-cost', 'seasonal-allergies-cost'] },
];
{
  const grouped = COST_GROUPS.flatMap((g) => g.slugs);
  const missing = COST_CATALOG.map((c) => c.slug).filter((s) => !grouped.includes(s));
  const extra = grouped.filter((s) => !COST_CATALOG.some((c) => c.slug === s));
  if (missing.length || extra.length || new Set(grouped).size !== grouped.length) {
    throw new Error(`app/cost/page.js: COST_GROUPS out of sync (missing ${missing}, extra ${extra})`);
  }
}

const QUICK =
  `There is no single price for medical care: it depends on where you go and how you pay. Employer health plans paid an average of **${usd0(HCCI_2022.primaryCare)}** per primary care visit, **${usd0(HCCI_2022.urgentCare)}** per urgent care visit and **${usd0(HCCI_2022.er)}** per emergency room visit in 2022 [[ref-hcci]]. ` +
  `Medicare's 2026 national amount for a typical returning-patient office visit is **${usd(N.v99213)}** (${usd(N.v99203)} for a new patient) [[ref-pfs]], a benchmark rather than a price. ` +
  `Large national telehealth services published self-pay video visit prices of **$49 to $99** on November 24, 2026 [[ref-onemed]] [[ref-dod]]. ` +
  'For any problem, the medicine, tests and imaging are billed on top of the visit.';

const SETTING_ROWS = [
  ['Video visit', '$49 to $99', 'Self-pay prices large national telehealth services published on November 24, 2026 [[ref-onemed]] [[ref-dod]].'],
  ['Doctor\'s office', `${usd(N.v99213)} to ${usd(N.v99203)}`, 'Medicare 2026 national amounts for a low-complexity returning (99213) or new (99203) patient visit [[ref-pfs]]. A benchmark: each clinic sets its own self-pay price.'],
  ['Primary care office', usd0(HCCI_2022.primaryCare), 'Average price per visit, employer plans, 2022, all diagnoses [[ref-hcci]].'],
  ['Urgent care', usd0(HCCI_2022.urgentCare), 'Average price per visit, employer plans, 2022, all diagnoses [[ref-hcci]].'],
  ['Emergency room', usd0(HCCI_2022.er), 'Average price per visit, employer plans, 2022, all diagnoses [[ref-hcci]].'],
  ['Emergency room, patient share', usd0(KFF_ED_2019.outOfPocket), 'Average out-of-pocket cost per visit, large employer plans, 2019 [[ref-kff-ed]].'],
];

const UTI_ROWS = [
  ['Primary care office', usd0(HCCI_2022.utiPrice.primaryCare), usd0(HCCI_2022.utiOutOfPocket.primaryCare)],
  ['Urgent care', usd0(HCCI_2022.utiPrice.urgentCare), usd0(HCCI_2022.utiOutOfPocket.urgentCare)],
  ['Emergency room', usd0(HCCI_2022.utiPrice.er), usd0(HCCI_2022.utiOutOfPocket.er)],
];

const DRUG_ROWS = [
  ['Urinary tract infection (women)', `${usd(C.smxTmp)} to ${usd(C.fosfomycin)} for a first-line course`, '[UTI treatment cost](/cost/uti-treatment-cost/)'],
  ['Sinus infection', `Often none; ${usd(C.amoxClav5)} to ${usd(C.amoxClav7)} when an antibiotic is needed`, '[Sinus infection treatment cost](/cost/sinus-infection-treatment-cost/)'],
  ['Strep throat', `${usd(C.amoxicillin)} to ${usd(C.penVk)} for 10 days`, '[Strep throat test and treatment cost](/cost/sore-throat-treatment-cost/)'],
  ['Flu', `${usd(C.oseltamivir)} for 5 days of generic oseltamivir`, '[Flu treatment cost](/cost/flu-treatment-cost/)'],
];

const LOWER = [
  '**Ask for the self-pay price and a written estimate.** If you are uninsured or not using insurance, a provider must give you a Good Faith Estimate when you book at least 3 business days ahead or when you ask for one. If the bill comes in $400 or more above the estimate, you can dispute it within 120 calendar days of the bill [[ref-gfe]] [[ref-gfe-ppdr]].',
  '**Use a community health center if cost is the main barrier.** HRSA funds about 1,400 health centers with more than 16,200 sites [[ref-hrsa-find]]. They must offer a sliding fee scale based on income, with a full discount or a small nominal fee at or below the federal poverty guidelines [[ref-hrsa-sfds]].',
  `**Match the setting to the problem.** Employer plans paid about ${ER_VS_UC} times as much per ER visit as per urgent care visit in 2022 [[ref-hcci]]. For chest pain, trouble breathing, signs of a stroke or a severe injury, go to the ER or call 911 regardless of cost: hospitals must screen and stabilize you whether or not you can pay [[ref-emtala]].`,
  '**After an ER visit, ask a nonprofit hospital for financial assistance.** Nonprofit hospitals must have a written financial assistance policy that covers emergency care, and you can apply even after the bill arrives [[ref-irs-501r4]]. See [ER visit cost without insurance](/cost/er-visit-cost-without-insurance/).',
  '**Ask the pharmacy for its cash price for the generic.** The table above shows what pharmacies pay for common antibiotics; the counter price adds the pharmacy\'s fee and margin [[ref-nadac]].',
  '**Pay with an HSA or FSA.** Payments for medical care by a physician count as medical expenses under IRS rules [[ref-irs-p502]].',
];

const FAQS = [
  {
    question: 'How much does a doctor visit cost without insurance?',
    answer: `Each clinic sets its own self-pay price, so there is no single answer. As benchmarks, Medicare's 2026 national amount for a typical returning-patient office visit is ${usd(N.v99213)} (${usd(N.v99203)} for a new patient), and employer health plans paid an average of ${usd0(HCCI_2022.primaryCare)} per primary care visit in 2022 (Health Care Cost Institute). Large national telehealth services published self-pay video visit prices of $49 to $99 on November 24, 2026. Ask any clinic for its self-pay price before the visit.`,
  },
  {
    question: 'How much does urgent care cost without insurance?',
    answer: `No public source tracks national urgent care cash prices. Employer health plans paid an average of ${usd0(HCCI_2022.urgentCare)} per urgent care visit in 2022 (Health Care Cost Institute), and tests, x-rays and medicine are added on top. If you are uninsured, you can ask for a Good Faith Estimate before a scheduled visit. The urgent care cost guide shows Medicare 2026 benchmarks for every state.`,
  },
  {
    question: 'How much does an ER visit cost without insurance?',
    answer: `There is no single price. Employer health plans paid an average of ${usd0(HCCI_2022.er)} per emergency room visit in 2022 (Health Care Cost Institute), and people in large employer plans paid ${usd0(KFF_ED_2019.outOfPocket)} out of pocket per visit on average in 2019 (Peterson-KFF). Without insurance there is no negotiated rate, but a nonprofit hospital must offer financial assistance. Do not delay emergency care over cost: hospitals must screen and stabilize you whether or not you can pay.`,
  },
  {
    question: 'Is urgent care cheaper than the ER?',
    answer: `For problems that do not need an emergency room, yes by a wide margin. Employer plans paid an average of ${usd0(HCCI_2022.urgentCare)} per urgent care visit and ${usd0(HCCI_2022.er)} per ER visit in 2022, about ${ER_VS_UC} times as much. For a urinary tract infection, the average price was ${usd0(HCCI_2022.utiPrice.urgentCare)} at urgent care and ${usd0(HCCI_2022.utiPrice.er)} in the ER (Health Care Cost Institute, 2022 data). For emergency symptoms, go to the ER regardless of cost.`,
  },
  {
    question: 'How much does the medicine add?',
    answer: `For common infections, often little. Pharmacies paid about ${usd(C.nitrofurantoin)} for a 5-day course of generic nitrofurantoin, ${usd(C.amoxicillin)} for a 10-day course of amoxicillin and ${usd(C.oseltamivir)} for a 5-day course of generic oseltamivir (CMS NADAC, rates effective ${NADAC_EFF}). That is what pharmacies pay, not the counter price, so ask the pharmacy for its cash price for the generic.`,
  },
  {
    question: 'Can I get a price before I get care?',
    answer: 'If you are uninsured or not using insurance, a provider must give you a Good Faith Estimate when you book at least 3 business days ahead or when you ask for one. If the bill comes in $400 or more above the estimate, you can dispute it within 120 calendar days of the bill. Good Faith Estimates do not apply during emergency care.',
  },
  {
    question: 'Can I use an HSA or FSA to pay for a visit?',
    answer: 'Yes. Payments for medical care by a physician count as medical expenses under IRS Publication 502, so a doctor visit, including a telehealth visit, can be paid from an HSA or FSA.',
  },
  {
    question: 'How much is a TeleDirectMD visit?',
    answer: 'A TeleDirectMD visit is a $79 flat self-pay fee for a video visit with a board-certified physician. It includes the evaluation and, when appropriate, a prescription sent to your pharmacy. Medicine, labs and imaging are not included. Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit. TeleDirectMD does not provide emergency care. Some insurance plans are accepted in some states.',
  },
];

const METHOD = [
  'Visit prices by setting: quoted as published by the Health Care Cost Institute (employer plan prices, 2022 data) and Peterson-KFF (large employer plans, 2019 data), each shown with its data year [[ref-hcci]] [[ref-kff-ed]].',
  `Office visit benchmarks: Medicare 2026 national amounts, total relative value units times the 2026 conversion factor ($${MEDICARE_2026.conversionFactor}) [[ref-pfs]]. Medicare amounts are not self-pay prices.`,
  'Telehealth prices: read on each company\'s own website on November 24, 2026 [[ref-onemed]] [[ref-dod]].',
  `Medicine: CMS National Average Drug Acquisition Cost per unit times the quantity in a standard course, rates effective ${NADAC_EFF} [[ref-nadac]]. This is what pharmacies pay, not the counter price.`,
  'Not included: retail drug coupon prices, crowd-sourced price lists, and figures from sources whose terms do not allow reuse.',
  'Refresh schedule: Medicare rates every January 1, drug acquisition costs monthly, and employer plan figures when HCCI or Peterson-KFF publish newer data.',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/cost#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: `${BASE_URL}/cost/` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/cost#webpage`,
      url: `${BASE_URL}/cost/`,
      name: metadata.title,
      description: plain(QUICK),
      inLanguage: 'en-US',
      breadcrumb: { '@id': `${BASE_URL}/cost#breadcrumbs` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      reviewedBy: { '@id': `${BASE_URL}/about/#physician` },
      dateModified: UPDATED,
      citation: REFS.map((id) => ({ '@type': 'CreativeWork', name: REF_LIBRARY[id].text, url: REF_LIBRARY[id].url })),
      hasPart: COST_CATALOG.map((c) => ({
        '@type': 'WebPage',
        '@id': `${BASE_URL}/cost/${c.slug}/`,
        url: `${BASE_URL}/cost/${c.slug}/`,
        name: c.name,
        description: c.desc,
      })),
    },
    {
      '@type': 'MedicalOrganization',
      '@id': `${BASE_URL}/#organization`,
      name: 'TeleDirectMD',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.webp`,
      telephone: '+1-678-956-1855',
      email: 'contact@teledirectmd.com',
      priceRange: '$79',
      medicalSpecialty: ['Family Medicine', 'Urgent Care', 'Telemedicine'],
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA'],
      currenciesAccepted: 'USD',
      aggregateRating: getAggregateRating(),
    },
    {
      '@type': 'Physician',
      '@id': `${BASE_URL}/about/#physician`,
      name: 'Parth Bhavsar, MD',
      url: `${BASE_URL}/about`,
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      ...getReviewBlock(),
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/cost#faqpage`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

const PAGE_CSS = `
  .cst-hero,.cst-wrap{font-family:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;}
  .cst-hero h1,.cst-wrap h2,.cst-h1,.cst-h2{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
  .cst-wrap{max-width:1100px;margin:0 auto;padding:0 1.5rem 4rem;color:var(--tdmd-text);}
  .cst-hero{background:var(--tdmd-card);border-bottom:1px solid var(--tdmd-border);padding:2.75rem 0 2.25rem;}
  .cst-hero-inner{max-width:1100px;margin:0 auto;padding:0 1.5rem;}
  .cst-bc{font-size:0.88rem;color:var(--tdmd-muted);margin-bottom:1.25rem;}
  .cst-bc a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .cst-bc span{margin:0 0.4rem;}
  .cst-h1{font-size:clamp(1.75rem,4vw,2.4rem);margin:0 0 0.75rem;line-height:1.2;color:var(--tdmd-text);}
  .cst-lead{font-size:1.05rem;line-height:1.65;max-width:72ch;margin:0 0 1rem;color:var(--tdmd-text);}
  .cst-byline{font-size:0.9rem;color:var(--tdmd-muted);margin:0 0 1.25rem;}
  .cst-byline a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .cst-answer{border:1px solid var(--tdmd-border);border-left:4px solid var(--tdmd-teal);border-radius:12px;padding:1.1rem 1.25rem;background:var(--tdmd-card);max-width:80ch;}
  .cst-answer h2{font-size:1.15rem;margin:0 0 0.5rem;}
  .cst-answer p{margin:0;line-height:1.65;font-size:1rem;}
  .cst-section{padding:2.25rem 0;}
  .cst-h2{font-size:clamp(1.3rem,3vw,1.75rem);margin:0 0 0.75rem;color:var(--tdmd-text);}
  .cst-p{font-size:1rem;line-height:1.7;margin:0 0 1rem;color:var(--tdmd-text);max-width:80ch;}
  .cst-p a,.cst-note a,.cst-table a,.cst-method a{color:var(--tdmd-navy);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
  .cst-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin-top:1rem;}
  .cst-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.1rem 1.2rem;box-shadow:var(--tdmd-shadow);text-decoration:none;color:var(--tdmd-text);display:block;transition:border-color .2s;}
  .cst-card:hover{border-color:var(--tdmd-teal);}
  .cst-card-title{font-weight:800;font-size:1rem;color:var(--tdmd-navy);margin:0 0 0.35rem;}
  .cst-card-desc{font-size:0.87rem;color:var(--tdmd-muted);line-height:1.45;margin:0;}
  .cst-card-arrow{display:inline-block;margin-top:0.5rem;font-size:0.82rem;color:var(--tdmd-teal);font-weight:700;}
  .cst-group{margin-top:1.5rem;}
  .cst-group-title{font-size:0.8rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--tdmd-muted);font-weight:700;margin:0 0 0.75rem;}
  .cst-table-wrap{overflow-x:auto;margin-top:0.75rem;}
  .cst-table{width:100%;border-collapse:collapse;font-size:0.92rem;}
  .cst-table th,.cst-table td{border:1px solid var(--tdmd-border);padding:0.6rem 0.75rem;vertical-align:top;text-align:left;}
  .cst-table thead th{background:var(--tdmd-card);font-weight:800;color:var(--tdmd-navy);border-bottom:2px solid var(--tdmd-navy);}
  .cst-table tbody th{font-weight:700;color:var(--tdmd-text);}
  .cst-table td.cst-num{font-weight:800;color:var(--tdmd-teal);white-space:nowrap;}
  .cst-note{margin-top:0.6rem;font-size:0.88rem;color:var(--tdmd-muted);line-height:1.55;max-width:80ch;}
  .cst-tdmd{border:1px solid var(--tdmd-border);border-top:4px solid var(--tdmd-teal);border-radius:14px;padding:1.25rem 1.5rem;background:var(--tdmd-card);box-shadow:var(--tdmd-shadow);}
  .cst-links{display:flex;flex-wrap:wrap;gap:0.5rem 1rem;margin:0.5rem 0 1rem;}
  .cst-links a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .cst-btn{display:inline-block;padding:0.65rem 1.5rem;border-radius:999px;font-weight:700;font-size:0.95rem;text-decoration:none;text-align:center;}
  .cst-btn-primary{background:var(--tdmd-teal);color:var(--tdmd-on-teal);}
  .cst-btn-outline{border:2px solid var(--tdmd-teal);color:var(--tdmd-teal);background:var(--tdmd-card);}
  .cst-method{padding-left:1.25rem;display:grid;gap:0.45rem;font-size:0.95rem;line-height:1.55;max-width:80ch;}
  .cst-refs{padding-left:1.5rem;display:grid;gap:0.5rem;font-size:0.88rem;line-height:1.5;color:var(--tdmd-text);}
  .cst-refs a{color:var(--tdmd-navy);word-break:break-word;}
  .cst-divider{border:none;border-top:1px solid var(--tdmd-border);margin:0.5rem 0;}
  .cst-disclaimer{font-size:0.85rem;color:var(--tdmd-muted);margin-top:1.5rem;max-width:80ch;}
  .cst-cta-bar{margin-top:2rem;border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius);padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;background:var(--tdmd-card);}
  .cst-cta-bar h3{margin:0;font-size:1.15rem;font-weight:800;}
  .cst-cta-bar p{margin:0.35rem 0 0;color:var(--tdmd-muted);font-size:0.95rem;max-width:62ch;}
  .cst-cta-bar-actions{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;}
  .ccx-cite{font-size:.72em;line-height:0;margin-left:1px}
  .ccx-cite a{text-decoration:none;font-weight:600;color:var(--tdmd-navy)}
  @media(max-width:900px){.cst-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
  @media(max-width:520px){.cst-grid{grid-template-columns:1fr;}}
`;

function Table({ label, head, rows, numCol = 1, keyBase }) {
  return (
    <div className="cst-table-wrap" role="region" aria-label={label} tabIndex={0}>
      <table className="cst-table">
        <thead>
          <tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={row[0]}>
              <th scope="row">{R(row[0], `${keyBase}-${ri}-0`)}</th>
              {row.slice(1).map((cell, ci) => (
                <td key={ci} className={ci + 1 === numCol ? 'cst-num' : undefined}>{R(cell, `${keyBase}-${ri}-${ci + 1}`)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CostHubPage() {
  const updated = longDate(UPDATED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="cst-hero">
        <div className="cst-hero-inner">
          <nav className="cst-bc" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Cost Guides</span>
          </nav>
          <h1 className="cst-h1">What Medical Care Costs in 2026: Cost Guides by Visit and Condition</h1>
          <p className="cst-lead">
            What a doctor visit, urgent care, the emergency room and common conditions cost, from public data. Every
            figure names its source, what kind of number it is and its year.
          </p>
          <p className="cst-byline">
            Written and medically reviewed by <a href="/about/">Parth Bhavsar, MD</a>, board-certified family medicine
            physician. Data checked {longDate('2026-11-24')}. Updated {updated}.
          </p>
          <section className="cst-answer" aria-labelledby="answer-heading">
            <h2 id="answer-heading">The short answer</h2>
            <p>{R(QUICK, 'quick')}</p>
          </section>
        </div>
      </div>

      <div className="cst-wrap">
        <section className="cst-section" aria-labelledby="catalog-heading">
          <h2 id="catalog-heading" className="cst-h2">All {COST_CATALOG.length} cost guides</h2>
          {COST_GROUPS.map((g) => (
            <div key={g.title} className="cst-group">
              <h3 className="cst-group-title">{g.title}</h3>
              <div className="cst-grid">
                {g.slugs.map((slug) => COST_CATALOG.find((c) => c.slug === slug)).map((c) => (
                  <a key={c.slug} href={`/cost/${c.slug}/`} className="cst-card">
                    <p className="cst-card-title">{c.name}</p>
                    <p className="cst-card-desc">{c.desc}</p>
                    <span className="cst-card-arrow">Read cost guide &rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <hr className="cst-divider" />

        <section className="cst-section" aria-labelledby="setting-heading">
          <h2 id="setting-heading" className="cst-h2">What a visit costs, by setting</h2>
          <p className="cst-p">
            No public source tracks what uninsured patients pay nationally. These are the best public measures, and each
            is a different kind of number.
          </p>
          <Table
            label="Public measures of what a visit costs by setting, with source and year"
            head={['Setting', 'Amount', 'What it is']}
            rows={SETTING_ROWS}
            keyBase="set"
          />
          <p className="cst-note">
            {R('Insured prices from 2022 and 2019 and Medicare 2026 benchmarks, not 2026 cash prices. Tests, imaging and medicine are billed on top of the visit. More detail: [urgent care cost](/cost/urgent-care-cost-without-insurance/), [ER visit cost](/cost/er-visit-cost-without-insurance/) and [online doctor visit cost](/cost/online-doctor-visit-cost/).', 'set-note')}
          </p>
          <p className="cst-p" style={{ marginTop: '1.5rem' }}>
            The same problem costs very different amounts depending on where it is treated. Employer plans paid these
            average amounts for a urinary tract infection visit in 2022:
          </p>
          <Table
            label="Average price and out-of-pocket cost of a UTI visit by setting, employer plans, 2022"
            head={['Setting', 'Average price, UTI visit', 'Average out of pocket']}
            rows={UTI_ROWS}
            keyBase="uti"
          />
          <p className="cst-note">{R('Employer plan prices and patient out-of-pocket costs from 2022, not 2026 cash prices [[ref-hcci]].', 'uti-note')}</p>
        </section>

        <hr className="cst-divider" />

        <section className="cst-section" aria-labelledby="medicine-heading">
          <h2 id="medicine-heading" className="cst-h2">What the medicine adds</h2>
          <p className="cst-p">
            For a common infection, the visit is usually the largest part of the bill. Generic first-line medicines
            cost pharmacies little:
          </p>
          <Table
            label="What pharmacies paid for a first-line course of medicine, by condition"
            head={['Condition', 'What the medicine cost pharmacies', 'Full guide']}
            rows={DRUG_ROWS}
            keyBase="rx"
          />
          <p className="cst-note">{R(`CMS NADAC acquisition cost, rates effective ${NADAC_EFF}: what pharmacies pay, not the counter price [[ref-nadac]].`, 'rx-note')}</p>
        </section>

        <hr className="cst-divider" />

        <section className="cst-section" aria-labelledby="lower-heading">
          <h2 id="lower-heading" className="cst-h2">How to keep the bill down</h2>
          {LOWER.map((p, i) => <p key={i} className="cst-p">{R(p, `low-${i}`)}</p>)}
        </section>

        <hr className="cst-divider" />

        <section className="cst-section" aria-labelledby="tdmd-heading">
          <div className="cst-tdmd">
            <h2 id="tdmd-heading" className="cst-h2">Where TeleDirectMD fits</h2>
            <p className="cst-p">
              TeleDirectMD publishes these guides and does not provide emergency care. For problems that suit video, a
              visit is a <strong>$79 flat self-pay fee</strong> for a video visit with a board-certified physician, never
              a nurse practitioner or physician assistant. It includes the evaluation and, when appropriate, a
              prescription sent to your pharmacy. Medicine, labs and imaging are not included. You get a receipt you can
              submit to an HSA or FSA. Visits are for adults 18 and older who are physically in one of the 40+ states
              TeleDirectMD serves at the time of the visit. Some insurance plans are accepted in some states; Medicaid is
              not accepted.
            </p>
            <p className="cst-links">
              <a href="/what-we-treat/">What we treat</a>
              <a href="/states-we-serve/">Check your state</a>
              <a href="/insurance/">Insurance</a>
            </p>
            <a href="/book-online/" className="cst-btn cst-btn-primary">Book a $79 video visit</a>
          </div>
        </section>

        <section className="cst-section">
          <FaqAccordion items={FAQS} sectionTitle="Frequently asked questions" sectionId="faq" />
        </section>

        <section className="cst-section" aria-labelledby="method-heading">
          <h2 id="method-heading" className="cst-h2">How we built these numbers</h2>
          <ul className="cst-method">
            {METHOD.map((m, i) => <li key={i}>{R(m, `m-${i}`)}</li>)}
          </ul>
        </section>

        <section className="cst-section" aria-labelledby="refs-heading">
          <h2 id="refs-heading" className="cst-h2">References</h2>
          <ol className="cst-refs">
            {REFS.map((id) => (
              <li key={id} id={id}>
                {REF_LIBRARY[id].text}{' '}
                <a href={REF_LIBRARY[id].url} rel="noopener">{REF_LIBRARY[id].url.replace(/^https:\/\//, '')}</a>
              </li>
            ))}
          </ol>
          <p className="cst-disclaimer">
            Prices vary by clinic, pharmacy, location and plan. Figures on this page are dated benchmarks from the sources
            cited, not quotes or guarantees of what you will pay. This page is general information and not medical advice
            for your situation.
          </p>
        </section>

        <div className="cst-cta-bar">
          <div>
            <h3>See a board-certified physician by video for $79 flat</h3>
            <p>Prescriptions sent to your pharmacy when appropriate. HSA and FSA receipt included.</p>
          </div>
          <div className="cst-cta-bar-actions">
            <a href="/book-online/" className="cst-btn cst-btn-primary">Book Now</a>
            <a href="/insurance/" className="cst-btn cst-btn-outline">Check Insurance</a>
          </div>
        </div>
      </div>
    </>
  );
}
