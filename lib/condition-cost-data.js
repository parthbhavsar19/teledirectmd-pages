// Condition total-cost pages: UTI, sinus infection, sore throat (strep), flu.
// Rendered by app/components/ConditionCostPage.js from static routes under app/cost/.
//
// Rules (same as the urgent care cost page):
// - Every number comes from a public source named in REFS, retrieved on CONDITION_COST_CHECKED.
// - Every number says what kind of number it is (Medicare allowed amount, employer plan
//   price, pharmacy acquisition cost) and its year.
// - No retail drug coupon prices and no figures from sources whose terms bar reuse.
//   Lab test prices are not shown: the Medicare lab fee schedule download requires
//   accepting an AMA license that bars commercial use.
// - The $79 visit appears once per page, with what it includes and excludes, and only
//   for conditions on the live What We Treat list.
//
// Rich text tokens used in this file: **bold** and [[ref-id]] (citation).
// Refresh: Medicare every January 1, NADAC monthly, guidelines when CDC or IDSA update.

import { MEDICARE_2026, HCCI_2022 } from './urgent-care-cost-data';

export const CONDITION_COST_CHECKED = '2026-11-24';

// CMS NADAC 2026 weekly file (as_of_date 2026-11-25), rates effective 2026-11-18.
// data.medicaid.gov dataset fbb83258-11c7-47f5-8b18-5f8e79f7e704, public domain.
// Saved query output: seo-dashboard/cost-pages/2026-11-24/primary-sources/nadac-2026-conditions.json
export const NADAC_RATES = {
  asOf: '2026-11-25',
  effective: '2026-11-18',
  updated: '2026-11-20',
  perUnit: {
    smxTmpDs: 0.04608, // SULFAMETHOXAZOLE-TMP DS TABLET
    nitrofurantoinMono: 0.26808, // NITROFURANTOIN MONO-MCR 100 MG
    fosfomycin: 25.47337, // FOSFOMYCIN 3 GM SACHET
    cephalexin500: 0.111, // CEPHALEXIN 500 MG CAPSULE
    doxycycline100: 0.11238, // DOXYCYCLINE HYCLATE 100 MG CAP
    penVk500: 0.0944, // PENICILLIN VK 500 MG TABLET
    amoxicillin500: 0.07753, // AMOXICILLIN 500 MG CAPSULE
    amoxClav875: 0.27877, // AMOX-CLAV 875-125 MG TABLET
    azithro250: 0.27108, // AZITHROMYCIN 250 MG TABLET
    azithro500: 0.54381, // AZITHROMYCIN 500 MG TABLET
    oseltamivir75: 0.81527, // OSELTAMIVIR PHOS 75 MG CAPSULE
    xofluza40: 161.86106, // XOFLUZA 40 MG TABLET (brand)
    xofluza80: 161.88168, // XOFLUZA 80 MG TABLET (brand)
  },
};

const R = NADAC_RATES.perUnit;
export const round2 = (n) => Math.round(n * 100) / 100;
const course = (perUnit, units) => round2(perUnit * units);

export const usd = (n) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const usd0 = (n) => `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
export const longDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const N = MEDICARE_2026.national;
const NADAC_EFF = longDate(NADAC_RATES.effective);

// Course costs (pharmacy acquisition cost, not the counter price).
export const COURSES = {
  nitrofurantoin: course(R.nitrofurantoinMono, 10),
  smxTmp: course(R.smxTmpDs, 6),
  fosfomycin: course(R.fosfomycin, 1),
  amoxClav5: course(R.amoxClav875, 10),
  amoxClav7: course(R.amoxClav875, 14),
  doxy5: course(R.doxycycline100, 10),
  doxy7: course(R.doxycycline100, 14),
  penVk: course(R.penVk500, 20),
  amoxicillin: course(R.amoxicillin500, 20),
  cephalexin: course(R.cephalexin500, 20),
  azithro: round2(R.azithro500 + 4 * R.azithro250),
  oseltamivir: course(R.oseltamivir75, 10),
  xofluza40: course(R.xofluza40, 1),
  xofluza80: course(R.xofluza80, 1),
};
const C = COURSES;

// ── Shared references. Each was opened and read on CONDITION_COST_CHECKED.
export const REF_LIBRARY = {
  'ref-pfs': {
    text: 'CMS. Physician Fee Schedule: Indicators for 2026 (relative value units). pfs.data.cms.gov, public domain dataset.',
    url: 'https://pfs.data.cms.gov/',
  },
  'ref-hcci': {
    text: 'Health Care Cost Institute. Urgent Care Spending Increased by 50% over 5 Years Driven by Higher Use. January 28, 2026 (2022 employer-sponsored insurance data).',
    url: 'https://healthcostinstitute.org/all-hcci-reports/urgent-care-spending-increased-by-50-over-5-years-driven-by-higher-use/',
  },
  'ref-nadac': {
    text: `CMS. National Average Drug Acquisition Cost (NADAC) 2026 dataset, updated November 20, 2026; rates effective ${NADAC_EFF}.`,
    url: 'https://data.medicaid.gov/dataset/fbb83258-11c7-47f5-8b18-5f8e79f7e704',
  },
  'ref-cdc-adult': {
    text: 'CDC. Outpatient Clinical Care for Adults: adult outpatient treatment recommendations (acute rhinosinusitis, pharyngitis, acute uncomplicated cystitis).',
    url: 'https://www.cdc.gov/antibiotic-use/hcp/clinical-care/adult-outpatient.html',
  },
  'ref-idsa-uti': {
    text: 'Gupta K, Hooton TM, Naber KG, et al. International clinical practice guidelines for the treatment of acute uncomplicated cystitis and pyelonephritis in women: a 2010 update by IDSA and ESCMID. Clin Infect Dis. 2011;52(5):e103-e120.',
    url: 'https://doi.org/10.1093/cid/ciq257',
  },
  'ref-idsa-sinus': {
    text: 'Chow AW, Benninger MS, Brook I, et al. IDSA clinical practice guideline for acute bacterial rhinosinusitis in children and adults. Clin Infect Dis. 2012;54(8):e72-e112.',
    url: 'https://doi.org/10.1093/cid/cir1043',
  },
  'ref-cdc-strep': {
    text: 'CDC. Clinical Guidance for Group A Streptococcal Pharyngitis. Updated November 18, 2025.',
    url: 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html',
  },
  'ref-cdc-flu': {
    text: 'CDC. Influenza Antiviral Medications: Summary for Clinicians.',
    url: 'https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html',
  },
  'ref-cdc-flu-types': {
    text: 'CDC. About Influenza Antiviral Medications (types of antiviral drugs), for health care providers.',
    url: 'https://www.cdc.gov/flu/hcp/antivirals/index.html',
  },
  'ref-fda-home': {
    text: 'FDA. COVID-19 Tests Granted Traditional Marketing Authorization by the FDA (includes over-the-counter home tests that also detect influenza A and B).',
    url: 'https://www.fda.gov/medical-devices/coronavirus-covid-19-and-medical-devices/covid-19-tests-granted-traditional-marketing-authorization-fda',
  },
  'ref-teladoc': {
    text: 'Teladoc Health. No insurance? Visit costs without insurance (24/7 Urgent Care $89 per visit). Checked November 24, 2026.',
    url: 'https://www.teladochealth.com/start/no-insurance',
  },
  'ref-mdlive': {
    text: 'MDLIVE. What does it cost? (Urgent Care $0 to $89, shown before the visit). Checked November 24, 2026.',
    url: 'https://www.mdlive.com/',
  },
  'ref-cvs-vc': {
    text: 'CVS MinuteClinic. MinuteClinic Virtual Care ($89 cash pay for most visits). Checked November 24, 2026.',
    url: 'https://www.cvs.com/minuteclinic/virtual-care',
  },
  'ref-dod': {
    text: 'Doctor On Demand. How much does Doctor On Demand cost? ($99 urgent care visit without insurance). Checked November 24, 2026.',
    url: 'https://doctorondemand.com/about-us/cost-insurance/',
  },
  'ref-onemed': {
    text: 'Amazon One Medical. On-Demand Care (Video Care from $49; prices vary by state). Checked November 24, 2026.',
    url: 'https://health.amazon.com/onemedical',
  },
  'ref-sesame': {
    text: 'Sesame. Virtual urgent care (visits listed from $34; each clinician sets the price). Checked November 24, 2026.',
    url: 'https://sesamecare.com/complaint/online-urgent-care',
  },
  'ref-hrsa-sfds': {
    text: 'HRSA Bureau of Primary Health Care. Health Center Program Compliance Manual, Chapter 9: Sliding Fee Discount Program. Last reviewed November 2025.',
    url: 'https://bphc.hrsa.gov/compliance/compliance-manual/chapter9',
  },
  'ref-hrsa-find': {
    text: 'HRSA. Find a Health Center (about 1,400 HRSA-funded health centers running more than 16,200 service sites).',
    url: 'https://findahealthcenter.hrsa.gov/',
  },
  'ref-gfe-ppdr': {
    text: "CMS Center for Consumer Information and Insurance Oversight. The No Surprises Act's Good Faith Estimates and Patient-Provider Dispute Resolution Requirements (training slides).",
    url: 'https://www.cms.gov/files/document/gfe-and-ppdr-requirements-slides.pdf',
  },
  'ref-irs-n2026-5': {
    text: 'IRS. Notice 2026-5: Expanded Availability of Health Savings Accounts under the One, Big, Beautiful Bill Act. December 9, 2025.',
    url: 'https://www.irs.gov/pub/irs-drop/n-26-05.pdf',
  },
  'ref-irs-p502': {
    text: 'IRS. Publication 502 (2025), Medical and Dental Expenses.',
    url: 'https://www.irs.gov/publications/p502',
  },
  'ref-zhang-jama': {
    text: 'Zhang B, Li L, Lu Y, et al. Episode Charges and Subsequent Visits After Telemedicine vs In-Person Care. JAMA Netw Open. 2026;9(2):e2556127.',
    url: 'https://doi.org/10.1001/jamanetworkopen.2025.56127',
  },
  'ref-gfe': {
    text: 'CMS. Know your rights: Good Faith Estimates when you do not have insurance or are not using it.',
    url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/know-your-rights/without-insurance',
  },
  'ref-kff-ed': {
    text: 'Schwartz H, Rae M, Claxton G, Cotliar D, Amin K, Cox C. Emergency department visits exceed affordability threshold for many consumers with private insurance. Peterson-KFF Health System Tracker, December 16, 2022 (Merative MarketScan, 2019 data).',
    url: 'https://www.healthsystemtracker.org/brief/emergency-department-visits-exceed-affordability-thresholds-for-many-consumers-with-private-insurance/',
  },
  'ref-emtala': {
    text: 'CMS. Emergency Medical Treatment & Labor Act (EMTALA). Page last modified March 10, 2026.',
    url: 'https://www.cms.gov/medicare/regulations-guidance/legislation/emergency-medical-treatment-labor-act',
  },
  'ref-irs-501r4': {
    text: 'IRS. Financial assistance policy and emergency medical care policy, Section 501(r)(4).',
    url: 'https://www.irs.gov/charities-non-profits/financial-assistance-policy-and-emergency-medical-care-policy-section-501r4',
  },
  'ref-irs-501r5': {
    text: 'IRS. Limitation on charges, Section 501(r)(5).',
    url: 'https://www.irs.gov/charities-non-profits/limitation-on-charges-section-501r5',
  },
  'ref-cms-ins-rights': {
    text: 'CMS. Know your medical bill rights when using insurance (emergency room care). Page last modified October 1, 2026.',
    url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/know-your-rights/insurance',
  },
  'ref-hpt-faq': {
    text: 'CMS. Hospital Price Transparency Frequently Asked Questions (discounted cash price; where to find a hospital\'s standard charges).',
    url: 'https://www.cms.gov/files/document/hospital-price-transparency-frequently-asked-questions.pdf',
  },
};

// Medicare 2026 physician fee for emergency department visit levels 1 to 5
// (CPT 99281 to 99285). Total facility RVUs from the PFS 2026 indicators dataset
// (pfs.data.cms.gov, queried 2026-11-24 ET), times the 2026 conversion factor.
// Professional fee only; the hospital facility fee is billed separately.
const ER_RVU_2026 = { v99281: 0.33, v99282: 1.21, v99283: 2.08, v99284: 3.54, v99285: 5.13 };
export const ER_PFS_2026 = Object.fromEntries(
  Object.entries(ER_RVU_2026).map(([k, rvu]) => [k, round2(rvu * MEDICARE_2026.conversionFactor)]),
);

// Peterson-KFF, large employer plans, 2019 data (published December 16, 2022).
export const KFF_ED_2019 = { total: 2453, outOfPocket: 646, lowTotal: 592, lowOop: 205, highOop: 840, highPlan: 3015 };

const VISIT_ROW = [
  'The visit',
  `${usd(N.v99213)} returning patient, ${usd(N.v99203)} new patient`,
  'Medicare 2026 national amounts for a low-complexity office visit (99213, 99203) [[ref-pfs]]. A benchmark, not a price: each clinic sets its own self-pay price.',
];

const HCCI_ALL = {
  ariaLabel: 'Average visit price by setting, employer plans, 2022',
  head: ['Setting', 'Average price per visit, employer plans, 2022'],
  rows: [
    ['Primary care office', usd0(HCCI_2022.primaryCare)],
    ['Urgent care', usd0(HCCI_2022.urgentCare)],
    ['Emergency room', usd0(HCCI_2022.er)],
  ],
  note: 'All diagnoses combined, not specific to this condition. Insured prices from 2022, not 2026 cash prices [[ref-hcci]].',
};

const SETTING_INTRO_ALL =
  'No public dataset tracks self-pay prices for this condition. The best public comparison across settings is what employer health plans paid per visit in 2022, for all diagnoses [[ref-hcci]].';

// ──────────────────────────────────────────────────────────────────────────
export const CONDITION_COST_PAGES = {
  // ────────────────────────────────────────────────────────────────────────
  'uti-treatment-cost': {
    slug: 'uti-treatment-cost',
    breadcrumb: 'UTI treatment cost',
    title: 'How Much Does UTI Treatment Cost in 2026?',
    metaTitle: 'UTI Treatment Cost (2026): Visit, Urine Test and Antibiotic, From Public Data | TeleDirectMD',
    metaDescription:
      'What a bladder infection costs to treat in 2026, piece by piece: Medicare visit benchmarks, what employer plans paid at urgent care and the ER, and what pharmacies pay for each first-line antibiotic.',
    ogTitle: 'What UTI treatment costs in 2026',
    ogImage: '/images/cost/og-uti-treatment-cost.jpg',
    about: 'Cost of treating an uncomplicated urinary tract infection (bladder infection)',
    sub: 'The visit, the urine test and the antibiotic, priced from public data, with what each number includes.',
    quickAnswer:
      `For a simple bladder infection, the antibiotic is the cheapest part of the bill. Pharmacies paid about **${usd(C.nitrofurantoin)}** for a 5-day course of generic nitrofurantoin and **${usd(C.smxTmp)}** for a 3-day course of trimethoprim-sulfamethoxazole [[ref-nadac]]; the counter price adds the pharmacy's fee and margin. ` +
      `The visit costs the most. Employer plans paid an average of **${usd0(HCCI_2022.utiPrice.urgentCare)}** for a UTI visit at urgent care and **${usd0(HCCI_2022.utiPrice.er)}** in the emergency room in 2022 [[ref-hcci]], and Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      {
        id: 'pieces',
        h2: 'The bill, piece by piece',
        paras: ['A UTI bill has up to three parts. Each comes from a different public source.'],
        table: {
          ariaLabel: 'UTI treatment cost by part of the bill',
          head: ['Part of the bill', 'Public benchmark', 'What to know'],
          rows: [
            VISIT_ROW,
            [
              'Urine test',
              'Set by each clinic',
              'A dipstick test checks for nitrites and leukocyte esterase, the most accurate signs of cystitis [[ref-cdc-adult]]. Ask the self-pay price before it is run.',
            ],
            [
              'Antibiotic',
              `${usd(C.smxTmp)} to ${usd(C.fosfomycin)}`,
              'What pharmacies paid for a first-line course, depending on the drug [[ref-nadac]]. Details below.',
            ],
          ],
        },
      },
      {
        id: 'setting',
        h2: 'What a UTI visit costs in each setting',
        paras: [
          'The Health Care Cost Institute published average prices and out-of-pocket costs for urinary tract infection visits by people with employer coverage in 2022 [[ref-hcci]].',
        ],
        table: {
          ariaLabel: 'UTI visit price by setting, employer plans, 2022',
          head: ['Setting', 'Average price, UTI visit', 'Average out of pocket'],
          rows: [
            ['Primary care office', usd0(HCCI_2022.utiPrice.primaryCare), usd0(HCCI_2022.utiOutOfPocket.primaryCare)],
            ['Urgent care', usd0(HCCI_2022.utiPrice.urgentCare), usd0(HCCI_2022.utiOutOfPocket.urgentCare)],
            ['Emergency room', usd0(HCCI_2022.utiPrice.er), usd0(HCCI_2022.utiOutOfPocket.er)],
          ],
        },
        note:
          'Insured prices from 2022, not 2026 cash prices. ER visits for the same diagnosis can be more severe, so part of the gap reflects the patients, not only the price.',
      },
      {
        id: 'medicine',
        h2: 'The antibiotic: what pharmacies pay',
        paras: [
          'For acute uncomplicated cystitis in healthy, non-pregnant, premenopausal women, CDC lists nitrofurantoin, trimethoprim-sulfamethoxazole (where local resistance is under 20%) and fosfomycin as first-line choices, and says to reserve fluoroquinolones such as ciprofloxacin for when the others are not appropriate [[ref-cdc-adult]]. The courses below follow the IDSA guideline [[ref-idsa-uti]].',
        ],
        table: {
          ariaLabel: 'Pharmacy acquisition cost of first-line UTI antibiotics',
          head: ['Generic antibiotic', 'Typical adult course', 'Pharmacy acquisition cost'],
          rows: [
            ['Nitrofurantoin monohydrate/macrocrystals 100 mg', 'Twice a day for 5 days (10 capsules)', usd(C.nitrofurantoin)],
            ['Trimethoprim-sulfamethoxazole DS 160/800 mg', 'Twice a day for 3 days (6 tablets)', usd(C.smxTmp)],
            ['Fosfomycin 3 g', 'One dose (1 packet)', usd(C.fosfomycin)],
          ],
        },
        note:
          `NADAC per-unit cost times quantity, rates effective ${NADAC_EFF} [[ref-nadac]]. This is what pharmacies pay, not what you pay at the counter. Ask the pharmacy for its cash price for the generic. More on antibiotic prices: [UTI antibiotics cost](/cost/uti-antibiotics-cost/).`,
      },
      {
        id: 'in-person',
        h2: 'When a UTI needs in-person care',
        byline: true,
        paras: [
          'A bladder infection is usually simple. These signs point to something that needs an exam, a urine culture or more: fever or chills, pain in the back or side, nausea or vomiting, pregnancy, symptoms in a man, or symptoms that are not better after treatment. Go to the emergency room for high fever with shaking chills, confusion, or feeling faint.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body:
        'TeleDirectMD publishes this page. A TeleDirectMD visit is a **$79 flat self-pay fee** for a video visit with a board-certified physician, which includes the evaluation and, when appropriate, a prescription sent to your pharmacy. It does not include the medicine or lab tests. UTI visits are for non-pregnant adult women with uncomplicated symptoms; men with urinary symptoms should be seen in person. Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit.',
      links: [
        { href: '/uti-treatment-online/', label: 'UTI treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      {
        id: 'faq-cost',
        question: 'How much does UTI treatment cost without insurance?',
        answer: 'QUICK',
      },
      {
        id: 'faq-urgent-care',
        question: 'How much is an urgent care visit for a UTI?',
        answer: `Each clinic sets its own self-pay price. For people with employer coverage in 2022, the average price of a UTI visit at urgent care was ${usd0(HCCI_2022.utiPrice.urgentCare)}, and the average out-of-pocket cost was ${usd0(HCCI_2022.utiOutOfPocket.urgentCare)} (Health Care Cost Institute). A urine test and the antibiotic are added on top.`,
      },
      {
        id: 'faq-er',
        question: 'How much does the ER charge for a UTI?',
        answer: `For people with employer coverage in 2022, the average price of an emergency room visit for a urinary tract infection was ${usd0(HCCI_2022.utiPrice.er)}, with an average out-of-pocket cost of ${usd0(HCCI_2022.utiOutOfPocket.er)} (Health Care Cost Institute). Go to the ER for fever with shaking chills, confusion or feeling faint; cost should not decide that.`,
      },
      {
        id: 'faq-antibiotic',
        question: 'How much do UTI antibiotics cost?',
        answer: `What pharmacies paid for a first-line course, from the CMS NADAC survey (rates effective ${NADAC_EFF}): nitrofurantoin for 5 days about ${usd(C.nitrofurantoin)}, trimethoprim-sulfamethoxazole for 3 days about ${usd(C.smxTmp)}, and a single dose of fosfomycin about ${usd(C.fosfomycin)}. The price at the counter is higher because it adds the pharmacy's dispensing cost and margin. Ask for the cash price of the generic.`,
      },
      {
        id: 'faq-test',
        question: 'Do I need a urine test for a UTI?',
        answer:
          'Not always. For a non-pregnant woman with classic bladder symptoms and no warning signs, clinicians often diagnose from the history. A urine test or culture is used when the picture is less clear, symptoms come back, or there are signs the infection has spread. Ask what any test costs before it is run.',
      },
      {
        id: 'faq-estimate',
        question: 'Can I get a price before I am seen?',
        answer:
          'Yes. If you do not have insurance or are not using it, you can ask any provider for a Good Faith Estimate, and you must get one when you schedule care at least 3 business days ahead. If the bill is at least $400 more than the estimate, you can dispute it within 120 days of the bill date.',
      },
    ],
    refs: ['ref-nadac', 'ref-hcci', 'ref-pfs', 'ref-cdc-adult', 'ref-idsa-uti', 'ref-gfe'],
    related: [
      { href: '/cost/uti-antibiotics-cost/', label: 'UTI antibiotics cost' },
      { href: '/cost/urgent-care-cost-without-insurance/', label: 'Urgent care cost without insurance' },
      { href: '/cost/', label: 'All cost guides' },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  'sinus-infection-treatment-cost': {
    slug: 'sinus-infection-treatment-cost',
    breadcrumb: 'Sinus infection treatment cost',
    title: 'How Much Does Sinus Infection Treatment Cost in 2026?',
    metaTitle: 'Sinus Infection Treatment Cost (2026): Visit and Antibiotic, From Public Data | TeleDirectMD',
    metaDescription:
      'What treating a sinus infection costs in 2026: Medicare visit benchmarks, employer plan visit prices by setting, what pharmacies pay for amoxicillin-clavulanate and doxycycline, and why most sinus infections need no test or antibiotic.',
    ogTitle: 'What sinus infection treatment costs in 2026',
    ogImage: '/images/cost/og-sinus-infection-treatment-cost.jpg',
    about: 'Cost of treating acute sinusitis',
    sub: 'The visit and the antibiotic, priced from public data, and why the cheapest treatment is often no antibiotic at all.',
    quickAnswer:
      `Most of the cost of a sinus infection is the visit, because most need no test and no antibiotic: 90 to 98% of sinus infections are viral [[ref-cdc-adult]]. ` +
      `When an antibiotic is right, it is inexpensive: pharmacies paid **${usd(C.amoxClav5)} to ${usd(C.amoxClav7)}** for a 5 to 7 day course of generic amoxicillin-clavulanate [[ref-nadac]]. ` +
      `For the visit, Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]], and employer plans paid an average of **${usd0(HCCI_2022.urgentCare)}** per urgent care visit in 2022 [[ref-hcci]].`,
    sections: [
      {
        id: 'pieces',
        h2: 'The bill, piece by piece',
        table: {
          ariaLabel: 'Sinus infection treatment cost by part of the bill',
          head: ['Part of the bill', 'Public benchmark', 'What to know'],
          rows: [
            VISIT_ROW,
            ['Tests or imaging', 'Usually none', 'Sinus x-rays are not routinely recommended [[ref-cdc-adult]].'],
            [
              'Antibiotic',
              `$0, or ${usd(C.doxy5)} to ${usd(C.amoxClav7)}`,
              'Often not needed. When it is, what pharmacies paid for a first-line course [[ref-nadac]]. Details below.',
            ],
          ],
        },
      },
      {
        id: 'when-antibiotic',
        h2: 'Most sinus infections do not need an antibiotic',
        paras: [
          'CDC advises diagnosing a bacterial sinus infection only when symptoms are severe (fever of 102°F or higher with thick nasal discharge or facial pain for 3 to 4 days), persistent (more than 10 days without improvement), or worsening after a cold had started to get better. For uncomplicated cases with reliable follow-up, CDC encourages watchful waiting [[ref-cdc-adult]].',
          'Watchful waiting is also the cheapest path, since it adds no prescription to the bill.',
        ],
      },
      {
        id: 'setting',
        h2: 'What the visit costs in each setting',
        paras: [SETTING_INTRO_ALL],
        table: HCCI_ALL,
        note: HCCI_ALL.note,
      },
      {
        id: 'medicine',
        h2: 'The antibiotic: what pharmacies pay',
        paras: [
          'When an antibiotic is needed, CDC lists amoxicillin or amoxicillin-clavulanate as first-line therapy and doxycycline as an alternative for people allergic to penicillin. Macrolides such as azithromycin are not recommended because of high resistance [[ref-cdc-adult]]. IDSA recommends 5 to 7 days of treatment for uncomplicated sinusitis in adults [[ref-idsa-sinus]].',
        ],
        table: {
          ariaLabel: 'Pharmacy acquisition cost of sinus infection antibiotics',
          head: ['Generic antibiotic', 'Typical adult course', 'Pharmacy acquisition cost'],
          rows: [
            ['Amoxicillin-clavulanate 875/125 mg', 'Twice a day for 5 to 7 days (10 to 14 tablets)', `${usd(C.amoxClav5)} to ${usd(C.amoxClav7)}`],
            ['Doxycycline hyclate 100 mg (penicillin allergy)', 'Twice a day for 5 to 7 days (10 to 14 capsules)', `${usd(C.doxy5)} to ${usd(C.doxy7)}`],
          ],
        },
        note: `NADAC per-unit cost times quantity, rates effective ${NADAC_EFF} [[ref-nadac]]. This is what pharmacies pay, not what you pay at the counter. Doses follow the IDSA guideline [[ref-idsa-sinus]].`,
      },
      {
        id: 'in-person',
        h2: 'When sinus symptoms need in-person care',
        byline: true,
        paras: [
          'Be seen in person, or in the emergency room if severe, for swelling or redness around the eye, double vision or vision changes, a severe headache, a stiff neck, confusion, a high fever that will not come down, or symptoms that keep getting worse after treatment.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body:
        'TeleDirectMD publishes this page. A TeleDirectMD visit is a **$79 flat self-pay fee** for a video visit with a board-certified physician, which includes the evaluation and, when an antibiotic is appropriate, a prescription sent to your pharmacy. It does not include the medicine. If your symptoms point to a viral infection, the physician will tell you so rather than prescribe an antibiotic. Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit.',
      links: [
        { href: '/sinus-infection-treatment-online/', label: 'Sinus infection treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does sinus infection treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-antibiotic-needed',
        question: 'Do I need an antibiotic for a sinus infection?',
        answer:
          'Usually not. CDC estimates that 90 to 98% of sinus infections are viral. A bacterial infection is more likely when symptoms last more than 10 days without improvement, are severe with a fever of 102°F or higher for 3 to 4 days, or get worse after starting to improve. For uncomplicated cases, CDC encourages watchful waiting when follow-up is available.',
      },
      {
        id: 'faq-antibiotic-cost',
        question: 'How much does a sinus infection antibiotic cost?',
        answer: `What pharmacies paid, from the CMS NADAC survey (rates effective ${NADAC_EFF}): ${usd(C.amoxClav5)} to ${usd(C.amoxClav7)} for a 5 to 7 day course of generic amoxicillin-clavulanate 875/125 mg, and ${usd(C.doxy5)} to ${usd(C.doxy7)} for the same length of doxycycline 100 mg. The counter price is higher because it adds the pharmacy's dispensing cost and margin.`,
      },
      {
        id: 'faq-xray',
        question: 'Do I need an x-ray or CT scan for a sinus infection?',
        answer:
          'Not for a routine sinus infection. CDC says sinus x-rays are not routinely recommended. Imaging is for warning signs such as swelling around the eye, vision changes or a severe headache, which need in-person care.',
      },
      {
        id: 'faq-urgent-care',
        question: 'How much is urgent care for a sinus infection?',
        answer: `Each clinic sets its own self-pay price. As a benchmark, employer health plans paid an average of ${usd0(HCCI_2022.urgentCare)} per urgent care visit in 2022 for all diagnoses (Health Care Cost Institute), and Medicare's 2026 national rate for a low-complexity office visit is ${usd(N.v99213)}.`,
      },
    ],
    refs: ['ref-cdc-adult', 'ref-nadac', 'ref-pfs', 'ref-hcci', 'ref-idsa-sinus'],
    related: [
      { href: '/cost/urgent-care-cost-without-insurance/', label: 'Urgent care cost without insurance' },
      { href: '/cost/', label: 'All cost guides' },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  'sore-throat-treatment-cost': {
    slug: 'sore-throat-treatment-cost',
    breadcrumb: 'Sore throat and strep cost',
    title: 'How Much Do Strep Throat Testing and Treatment Cost in 2026?',
    metaTitle: 'Strep Throat Test and Treatment Cost (2026): Visit, Test and Antibiotic | TeleDirectMD',
    metaDescription:
      'What a sore throat or strep throat costs in 2026: Medicare visit benchmarks, when a strep test is needed, what employer plans paid per visit, and what pharmacies pay for penicillin and amoxicillin.',
    ogTitle: 'What strep throat testing and treatment cost in 2026',
    ogImage: '/images/cost/og-sore-throat-treatment-cost.jpg',
    about: 'Cost of testing and treating sore throat and group A strep pharyngitis',
    sub: 'The visit, the strep test and the antibiotic, with what each number includes and when a test is worth paying for.',
    quickAnswer:
      `A strep throat bill is mostly the visit and the test. The antibiotic costs little: pharmacies paid about **${usd(C.amoxicillin)}** for a 10-day course of generic amoxicillin and **${usd(C.penVk)}** for penicillin V [[ref-nadac]]. ` +
      `An exam alone cannot tell strep from a virus, so a rapid strep test is needed to diagnose it, and each clinic sets its own price for that test [[ref-cdc-adult]]. ` +
      `For the visit, Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]]. In adults, only 5 to 15% of sore throats are strep [[ref-cdc-strep]].`,
    sections: [
      {
        id: 'pieces',
        h2: 'The bill, piece by piece',
        table: {
          ariaLabel: 'Strep throat cost by part of the bill',
          head: ['Part of the bill', 'Public benchmark', 'What to know'],
          rows: [
            VISIT_ROW,
            [
              'Rapid strep test',
              'Set by each clinic',
              'Needed to diagnose strep; throat cultures are not routinely recommended for adults [[ref-cdc-adult]]. Ask the self-pay price before it is run.',
            ],
            [
              'Antibiotic',
              `$0, or ${usd(C.amoxicillin)} to ${usd(C.cephalexin)}`,
              'Only if the test is positive [[ref-cdc-adult]]. What pharmacies paid for a 10-day course [[ref-nadac]]. Details below.',
            ],
          ],
        },
      },
      {
        id: 'test',
        h2: 'When a strep test is worth paying for',
        paras: [
          'Group A strep causes 5 to 15% of sore throats in adults; viruses cause most of the rest [[ref-cdc-strep]]. A cough, runny nose, hoarseness, mouth ulcers or pink eye point to a virus, and people with clear viral symptoms do not need a strep test [[ref-cdc-strep]].',
          'For adults, CDC advises a rapid antigen test for people with two or more of these: fever, white patches on the tonsils, tender swollen glands in the front of the neck, and no cough. Antibiotics are not recommended after a negative rapid test [[ref-cdc-adult]].',
        ],
      },
      {
        id: 'setting',
        h2: 'What the visit costs in each setting',
        paras: [SETTING_INTRO_ALL],
        table: HCCI_ALL,
        note: HCCI_ALL.note,
      },
      {
        id: 'medicine',
        h2: 'The antibiotic: what pharmacies pay',
        paras: [
          'Penicillin or amoxicillin is the antibiotic of choice, and there has never been a report of a group A strep isolate resistant to penicillin. For people allergic to penicillin, CDC lists options such as cephalexin (not for immediate-type allergies) or azithromycin, though resistance to azithromycin is well known [[ref-cdc-strep]].',
        ],
        table: {
          ariaLabel: 'Pharmacy acquisition cost of strep throat antibiotics',
          head: ['Generic antibiotic', 'Adult course (CDC)', 'Pharmacy acquisition cost'],
          rows: [
            ['Amoxicillin 500 mg', '500 mg twice a day, or 1,000 mg once a day, for 10 days (20 capsules)', usd(C.amoxicillin)],
            ['Penicillin V potassium 500 mg', 'Twice a day for 10 days (20 tablets)', usd(C.penVk)],
            ['Cephalexin 500 mg (some penicillin allergies)', 'Twice a day for 10 days (20 capsules)', usd(C.cephalexin)],
            ['Azithromycin (penicillin allergy)', '500 mg once, then 250 mg daily for 4 days (5 tablets)', usd(C.azithro)],
          ],
        },
        note: `NADAC per-unit cost times quantity, rates effective ${NADAC_EFF} [[ref-nadac]]. This is what pharmacies pay, not what you pay at the counter. Courses use CDC's adult maximum doses [[ref-cdc-strep]].`,
      },
      {
        id: 'in-person',
        h2: 'When a sore throat needs in-person or emergency care',
        byline: true,
        paras: [
          'Go to the emergency room for trouble breathing, being unable to swallow your own saliva, drooling, being unable to open your mouth, a muffled voice with severe throat pain, or neck swelling that is getting worse. These can mean an abscess or another infection that needs care in person.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits, and where it does not',
      body:
        'TeleDirectMD publishes this page. A TeleDirectMD visit is a **$79 flat self-pay fee** for a video visit with a board-certified physician, which includes the evaluation and, when appropriate, a prescription sent to your pharmacy. It does not include the medicine. A video visit cannot run a strep test, so for some sore throats the physician will recommend an in-person test instead of treating by video. Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit.',
      links: [
        { href: '/sore-throat-treatment-online/', label: 'Sore throat treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does strep throat treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-test-cost',
        question: 'How much does a strep test cost?',
        answer:
          'Each clinic, pharmacy clinic and lab sets its own self-pay price for a rapid strep test, and no public dataset tracks those prices. Ask for the price of the test before it is run. If you do not have insurance or are not using it, you can ask for a Good Faith Estimate of the cost.',
      },
      {
        id: 'faq-need-test',
        question: 'Do I need a strep test for a sore throat?',
        answer:
          'Not always. CDC says people with clear viral symptoms, such as a cough, runny nose, hoarseness, mouth ulcers or pink eye, do not need a strep test. For adults with two or more of fever, white patches on the tonsils, tender swollen neck glands and no cough, CDC advises a rapid strep test, because looking at the throat cannot tell strep from a virus.',
      },
      {
        id: 'faq-antibiotic-cost',
        question: 'How much does amoxicillin for strep throat cost?',
        answer: `What pharmacies paid for a 10-day adult course, from the CMS NADAC survey (rates effective ${NADAC_EFF}): about ${usd(C.amoxicillin)} for generic amoxicillin 500 mg (20 capsules) and about ${usd(C.penVk)} for penicillin V 500 mg (20 tablets). The counter price is higher because it adds the pharmacy's dispensing cost and margin.`,
      },
      {
        id: 'faq-video',
        question: 'Can strep throat be treated by video visit?',
        answer:
          'A video visit cannot run a strep test. A physician can assess how likely strep is, treat a clearly viral sore throat with symptom care, and send you for an in-person test when strep is possible. Trouble breathing, being unable to swallow saliva, drooling or worsening neck swelling need emergency care.',
      },
    ],
    refs: ['ref-nadac', 'ref-cdc-adult', 'ref-pfs', 'ref-cdc-strep', 'ref-hcci', 'ref-gfe'],
    related: [
      { href: '/cost/urgent-care-cost-without-insurance/', label: 'Urgent care cost without insurance' },
      { href: '/cost/', label: 'All cost guides' },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  'flu-treatment-cost': {
    slug: 'flu-treatment-cost',
    isNew: true,
    breadcrumb: 'Flu treatment cost',
    title: 'How Much Does Flu Treatment Cost in 2026?',
    metaTitle: 'Flu Treatment Cost (2026): Visit, Test and Tamiflu or Xofluza, From Public Data | TeleDirectMD',
    metaDescription:
      'What treating the flu costs in 2026: Medicare visit benchmarks, employer plan visit prices by setting, and what pharmacies pay for generic oseltamivir (Tamiflu) and Xofluza. Plus why timing matters more than price.',
    ogTitle: 'What flu treatment costs in 2026',
    ogImage: '/images/cost/og-flu-treatment-cost.jpg',
    about: 'Cost of treating influenza with antiviral medicine',
    sub: 'The visit, the test and the antiviral, priced from public data, and why the first two days matter more than the price.',
    quickAnswer:
      `Pharmacies paid about **${usd(C.oseltamivir)}** for a 5-day course of generic oseltamivir (Tamiflu) 75 mg and about **${usd(C.xofluza80)}** for a single dose of brand-name Xofluza [[ref-nadac]]; the counter price adds the pharmacy's fee and margin. ` +
      `For the visit, Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]], and employer plans paid an average of **${usd0(HCCI_2022.urgentCare)}** per urgent care visit in 2022 [[ref-hcci]]. ` +
      `Antivirals help most when started within 48 hours of the first symptoms [[ref-cdc-flu]].`,
    sections: [
      {
        id: 'pieces',
        h2: 'The bill, piece by piece',
        table: {
          ariaLabel: 'Flu treatment cost by part of the bill',
          head: ['Part of the bill', 'Public benchmark', 'What to know'],
          rows: [
            VISIT_ROW,
            [
              'Flu test',
              'Set by each clinic or store',
              'Over-the-counter home tests that detect flu A and B are FDA-authorized [[ref-fda-home]]. Ask whether a clinic test will change your treatment before paying for one.',
            ],
            [
              'Antiviral',
              `${usd(C.oseltamivir)} generic, ${usd(C.xofluza80)} brand`,
              'What pharmacies paid for oseltamivir (5 days) or one dose of Xofluza [[ref-nadac]]. Details below.',
            ],
          ],
        },
      },
      {
        id: 'timing',
        h2: 'Timing matters more than price',
        paras: [
          'Early antiviral treatment can shorten fever and illness, and the benefit is greatest when started within 48 hours of the first symptoms [[ref-cdc-flu]]. For outpatients with uncomplicated flu within two days of symptom onset, CDC lists oral oseltamivir, inhaled zanamivir, intravenous peramivir or oral baloxavir as options. For people with complications or worsening illness, CDC recommends starting oral oseltamivir as soon as possible, even after two days [[ref-cdc-flu]].',
          'A visit that gets you a prescription on day one can be worth more than a cheaper one on day four.',
        ],
      },
      {
        id: 'setting',
        h2: 'What the visit costs in each setting',
        paras: [SETTING_INTRO_ALL],
        table: HCCI_ALL,
        note: HCCI_ALL.note,
      },
      {
        id: 'medicine',
        h2: 'The antiviral: what pharmacies pay',
        paras: [
          'For adults, oseltamivir is 75 mg twice a day for 5 days. Baloxavir (Xofluza) is a single dose: 40 mg for people weighing 20 to under 80 kg, 80 mg at 80 kg or more [[ref-cdc-flu]]. Baloxavir is not recommended during pregnancy or while breastfeeding [[ref-cdc-flu-types]].',
        ],
        table: {
          ariaLabel: 'Pharmacy acquisition cost of flu antivirals',
          head: ['Antiviral', 'Adult course (CDC)', 'Pharmacy acquisition cost'],
          rows: [
            ['Oseltamivir 75 mg (generic Tamiflu)', 'Twice a day for 5 days (10 capsules)', usd(C.oseltamivir)],
            ['Baloxavir 40 mg (Xofluza, brand)', 'One dose, 20 to under 80 kg (1 tablet)', usd(C.xofluza40)],
            ['Baloxavir 80 mg (Xofluza, brand)', 'One dose, 80 kg or more (1 tablet)', usd(C.xofluza80)],
          ],
        },
        note:
          `NADAC per-unit cost times quantity, rates effective ${NADAC_EFF} [[ref-nadac]]. This is what pharmacies pay, not what you pay at the counter. For how to price-check Tamiflu and current Xofluza cash programs, see the [FluHub antiviral cost guide](/flu-hub/antiviral-cost.html).`,
      },
      {
        id: 'in-person',
        h2: 'When flu needs emergency care',
        byline: true,
        paras: [
          'Call 911 or go to the emergency room for trouble breathing, chest pain or pressure, new confusion, a seizure, being unable to keep fluids down, or someone who is hard to wake. Cost should not decide this one.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body:
        'TeleDirectMD publishes this page. A TeleDirectMD visit is a **$79 flat self-pay fee** for a video visit with a board-certified physician, which includes the evaluation and, when an antiviral is appropriate, a prescription sent to your pharmacy. It does not include the medicine or tests. Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit.',
      links: [
        { href: '/influenza-treatment-online/', label: 'Flu treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does flu treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-tamiflu',
        question: 'How much does Tamiflu cost without insurance?',
        answer: `It depends on the pharmacy and any discount. What pharmacies paid is public: about ${usd(C.oseltamivir)} for a 5-day adult course of generic oseltamivir 75 mg (10 capsules), from the CMS NADAC survey with rates effective ${NADAC_EFF}. The counter price adds the pharmacy's dispensing cost and margin, so ask for the cash price of the generic and compare a second pharmacy.`,
      },
      {
        id: 'faq-xofluza',
        question: 'How much does Xofluza cost?',
        answer: `Xofluza is a brand-name drug. Pharmacies paid about ${usd(C.xofluza40)} for a 40 mg tablet and ${usd(C.xofluza80)} for an 80 mg tablet (CMS NADAC, rates effective ${NADAC_EFF}). TeleDirectMD's FluHub antiviral cost guide tracks current cash-price programs; check the terms before you fill it.`,
      },
      {
        id: 'faq-test',
        question: 'Do I need a flu test to get treated?',
        answer:
          'Not always. CDC treatment guidance covers suspected as well as confirmed flu, so a physician can treat based on your symptoms. Over-the-counter home tests that detect flu A and B are FDA-authorized, and a clinic test is worth paying for when the result would change your treatment.',
      },
      {
        id: 'faq-too-late',
        question: 'Is it too late for Tamiflu after 48 hours?',
        answer:
          'The benefit is greatest when treatment starts within 48 hours of the first symptoms. CDC still recommends starting oseltamivir as soon as possible for people with complications or worsening illness, even after two days.',
      },
    ],
    refs: ['ref-nadac', 'ref-pfs', 'ref-hcci', 'ref-cdc-flu', 'ref-cdc-flu-types', 'ref-fda-home'],
    related: [
      { href: '/flu-hub/antiviral-cost.html', label: 'FluHub: antiviral cost and access' },
      { href: '/cost/urgent-care-cost-without-insurance/', label: 'Urgent care cost without insurance' },
      { href: '/cost/', label: 'All cost guides' },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // Master doctor visit cost page. Same URL as before (cited in Google AI
  // Overviews for telehealth cost queries), rebuilt on public data.
  // Telehealth prices are each company's own published self-pay price,
  // read on its own site on 2026-11-24. Recheck them at every refresh.
  'online-doctor-visit-cost': {
    slug: 'online-doctor-visit-cost',
    breadcrumb: 'Online doctor visit cost',
    title: 'How Much Does an Online Doctor Visit Cost in 2026?',
    metaTitle: 'Online Doctor Visit Cost (2026): Telehealth Prices vs. Office Visits | TeleDirectMD',
    metaDescription:
      'What a telehealth visit costs without insurance in 2026: published prices from seven services checked November 24, 2026, Medicare office visit benchmarks, employer plan prices, and the cheapest ways to see a doctor.',
    ogTitle: 'What a doctor visit costs in 2026',
    ogImage: '/images/cost/og-online-doctor-visit-cost.jpg',
    about: 'Cost of a doctor visit, online and in person, without insurance',
    sub: 'Published telehealth prices side by side, what an office visit costs by the public benchmarks, and the lowest-cost ways to see a doctor.',
    quickAnswer:
      `Without insurance, a video visit with one of the large national telehealth services costs **$49 to $99** at the prices each company published on November 24, 2026 [[ref-onemed]] [[ref-dod]]. TeleDirectMD charges **$79 flat**. ` +
      `An in-person office visit has no single cash price. As a benchmark, Medicare's 2026 national amount for a typical returning-patient office visit is **${usd(N.v99213)}** [[ref-pfs]], and employer health plans paid an average of **${usd0(HCCI_2022.primaryCare)}** per primary care visit in 2022 [[ref-hcci]]. ` +
      `If cost is the main barrier, federally funded health centers must offer discounts based on income [[ref-hrsa-sfds]].`,
    sections: [
      {
        id: 'telehealth-prices',
        h2: 'Telehealth visit prices without insurance, by company',
        paras: [
          'These are the self-pay prices each company publishes on its own website for a general or urgent care video visit. We read each page on November 24, 2026. Prices change, so check the company\'s site before you book. Medicine, labs and imaging are usually billed separately.',
        ],
        table: {
          ariaLabel: 'Published self-pay price for a telehealth visit by company, checked November 24, 2026',
          head: ['Service', 'Published self-pay price', 'What the company says'],
          rows: [
            ['Amazon One Medical On-Demand Care', 'From $49', 'Video Care from $49; prices vary by state [[ref-onemed]].'],
            ['TeleDirectMD', '$79 flat', 'Video visit with a board-certified physician. One price, no membership.'],
            ['CVS MinuteClinic Virtual Care', '$89', 'Cash price for most virtual visits [[ref-cvs-vc]].'],
            ['Teladoc Health', '$89', '24/7 urgent care visit without insurance [[ref-teladoc]].'],
            ['MDLIVE', 'Up to $89', 'Urgent care $0 to $89 depending on coverage; the price is shown before the visit [[ref-mdlive]].'],
            ['Doctor On Demand', '$99', 'Urgent care visit without insurance [[ref-dod]].'],
            ['Sesame', 'Set by each clinician', 'A marketplace; its virtual urgent care page lists visits from $34 [[ref-sesame]].'],
          ],
        },
        note: 'Listed from lowest to highest published price, with Sesame last because each clinician sets the price. Amwell is not listed because we could not find a current self-pay price on its own website.',
      },
      {
        id: 'in-person',
        h2: 'What an in-person office visit costs',
        paras: [
          'Clinics set their own self-pay prices, and no public dataset collects them. Two public benchmarks show the range. Medicare publishes what it pays for each level of office visit, and the Health Care Cost Institute publishes what employer health plans actually paid.',
        ],
        table: {
          ariaLabel: 'Medicare 2026 national payment amounts for office visits by level',
          head: ['Office visit level', 'New patient', 'Returning patient'],
          rows: [
            ['Straightforward', `${usd(N.v99202)} (99202)`, `${usd(N.v99212)} (99212)`],
            ['Low complexity, the most common sick visit', `${usd(N.v99203)} (99203)`, `${usd(N.v99213)} (99213)`],
            ['Moderate complexity', `${usd(N.v99204)} (99204)`, `${usd(N.v99214)} (99214)`],
          ],
        },
        note: `Medicare 2026 national non-facility amounts, before any local adjustment [[ref-pfs]]. A benchmark for what a visit is worth, not a price you will be quoted. For comparison, employer plans paid an average of ${usd0(HCCI_2022.primaryCare)} per primary care visit, ${usd0(HCCI_2022.urgentCare)} per urgent care visit and ${usd0(HCCI_2022.er)} per emergency room visit in 2022, all diagnoses combined [[ref-hcci]].`,
      },
      {
        id: 'cheaper',
        h2: 'Is a telehealth visit cheaper than going in person?',
        paras: [
          `For a problem that can be handled by video, usually yes on price alone: the published telehealth prices above ($49 to $99) sit below the Medicare benchmark for a moderate returning-patient office visit (${usd(N.v99214)}) and well below the ${usd0(HCCI_2022.primaryCare)} that employer plans paid per primary care visit in 2022 [[ref-pfs]] [[ref-hcci]]. These are different kinds of numbers (a cash price, a Medicare payment and an insurer-paid price), so treat the comparison as a guide, not a quote.`,
          'What happens after the first visit matters too. In a study of 163,308 visits at one Pennsylvania health system in 2024, charges in the 30 days around a telemedicine visit averaged $96.60, against $509.21 around an in-person visit, not counting the first visit\'s own fees. Telemedicine visits were also followed by 23% fewer visits. For mental health conditions, charges were similar either way [[ref-zhang-jama]].',
          'Price is not the only test. A video visit cannot replace an exam, a swab or an x-ray. If the visit ends with "you need to be seen in person," you pay twice.',
        ],
      },
      {
        id: 'fit',
        h2: 'When a video visit fits, and when to go in person',
        byline: true,
        paras: [
          '**Usually fine by video:** a bladder infection in a woman who is not pregnant, a sinus infection, pink eye, a cold or flu in a healthy adult, a rash, allergies, and refills of stable long-term medicines.',
          '**Go in person:** anything that needs hands, a swab, a urine or blood test, or an x-ray, such as a possible broken bone, a cut that may need stitches, ear pain that needs a look inside the ear, or abdominal pain.',
          '**Go to the ER or call 911:** chest pain, trouble breathing, face drooping or slurred speech, severe bleeding, or a severe injury.',
        ],
      },
      {
        id: 'cheapest',
        h2: 'The cheapest ways to see a doctor without insurance',
        paras: [
          '**Community health centers.** HRSA funds about 1,400 health centers with more than 16,200 sites in every state [[ref-hrsa-find]]. They may not turn anyone away for inability to pay, and they must offer a sliding fee scale: a full discount (or a small nominal fee) at or below 100% of the federal poverty guidelines and partial discounts up to 200% [[ref-hrsa-sfds]].',
          '**A flat-price video visit** for problems that suit video, such as a urinary tract infection in a woman, a sinus infection, pink eye or a prescription refill. You know the price before you start.',
          '**Ask for the self-pay price and a written estimate.** If you are uninsured or not using insurance, a provider must give you a Good Faith Estimate when you book at least 3 business days ahead or when you ask for one. If the bill comes in $400 or more above the estimate, you can dispute it within 120 calendar days of the bill [[ref-gfe-ppdr]] [[ref-gfe]].',
          '**Skip the emergency room for problems that are not emergencies.** Employer plans paid an average of about ten times as much for an ER visit as for an urgent care visit in 2022 [[ref-hcci]]. For chest pain, trouble breathing, signs of a stroke or a severe injury, go to the ER or call 911 regardless of cost.',
        ],
      },
      {
        id: 'hsa',
        h2: 'Paying with an HSA, FSA or insurance',
        paras: [
          'Payments for medical care by a physician count as medical expenses under IRS rules, which is what makes a doctor visit eligible for HSA and FSA funds [[ref-irs-p502]].',
          'If you have a high-deductible plan with an HSA, the plan may now cover telehealth before you meet the deductible without costing you HSA eligibility. Congress made that rule permanent for plan years beginning after December 31, 2024 [[ref-irs-n2026-5]]. Whether your plan does it is up to the plan, so check your benefits.',
        ],
      },
      {
        id: 'by-condition',
        h2: 'Total cost for common reasons people see a doctor',
        paras: [
          'The visit is usually the largest part of the bill for a common illness. These guides price the whole visit, test and medicine from public data:',
        ],
        table: {
          ariaLabel: 'Cost guides by condition',
          head: ['Condition', 'What the medicine cost pharmacies', 'Full guide'],
          rows: [
            ['Urinary tract infection (women)', `${usd(C.smxTmp)} to ${usd(C.fosfomycin)} for a first-line course`, '[UTI treatment cost](/cost/uti-treatment-cost/)'],
            ['Sinus infection', `Often none; ${usd(C.amoxClav5)} to ${usd(C.amoxClav7)} when an antibiotic is needed`, '[Sinus infection treatment cost](/cost/sinus-infection-treatment-cost/)'],
            ['Strep throat', `${usd(C.amoxicillin)} to ${usd(C.penVk)} for 10 days`, '[Strep throat test and treatment cost](/cost/sore-throat-treatment-cost/)'],
            ['Flu', `${usd(C.oseltamivir)} for 5 days of generic oseltamivir`, '[Flu treatment cost](/cost/flu-treatment-cost/)'],
          ],
        },
        note: `CMS NADAC acquisition cost, rates effective ${NADAC_EFF}: what pharmacies pay, not the counter price [[ref-nadac]].`,
      },
    ],
    tdmd: {
      h2: 'What $79 buys at TeleDirectMD',
      body:
        'TeleDirectMD publishes this page. A visit is a **$79 flat self-pay fee** for a video visit with a board-certified physician, never a nurse practitioner or physician assistant. It includes the evaluation and, when appropriate, a prescription sent to your pharmacy. Medicine, labs and imaging are not included. You get a receipt you can submit to an HSA or FSA. Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit. Some insurance plans are accepted in some states.',
      links: [
        { href: '/what-we-treat/', label: 'What we treat' },
        { href: '/states-we-serve/', label: 'Check your state' },
        { href: '/insurance/', label: 'Insurance' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does an online doctor visit cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-telehealth-price',
        question: 'How much is a telehealth visit?',
        answer:
          'At the prices each company published on November 24, 2026: Amazon One Medical video care from $49 (varies by state), TeleDirectMD $79, CVS MinuteClinic Virtual Care $89, Teladoc $89, MDLIVE up to $89, and Doctor On Demand $99. Sesame is a marketplace where each clinician sets the price. With insurance, you pay your plan\'s telehealth copay or coinsurance instead.',
      },
      {
        id: 'faq-office',
        question: 'How much is a doctor visit without insurance?',
        answer: `Each clinic sets its own self-pay price, so there is no single answer. As benchmarks, Medicare's 2026 national amount for a typical returning-patient office visit is ${usd(N.v99213)} (${usd(N.v99203)} for a new patient), and employer health plans paid an average of ${usd0(HCCI_2022.primaryCare)} per primary care visit in 2022. Ask the clinic for its self-pay price before the visit.`,
      },
      {
        id: 'faq-cheaper',
        question: 'Is telehealth cheaper than an in-person visit?',
        answer: `For problems a video visit can handle, published telehealth prices ($49 to $99 at large national services) are lower than the Medicare benchmark for a moderate returning-patient office visit (${usd(N.v99214)}) and lower than the ${usd0(HCCI_2022.primaryCare)} employer plans paid per primary care visit in 2022. If the problem needs an exam, a test or an x-ray, an in-person visit avoids paying twice.`,
      },
      {
        id: 'faq-cheapest',
        question: 'What is the cheapest way to see a doctor without insurance?',
        answer:
          'Federally funded community health centers must offer a sliding fee scale based on income, with a full discount or a small nominal fee at or below the federal poverty guidelines; find one at findahealthcenter.hrsa.gov. For problems that suit video, a flat-price telehealth visit is often the next lowest option. Ask any clinic for its self-pay price and a Good Faith Estimate before you book.',
      },
      {
        id: 'faq-hsa',
        question: 'Can I use my HSA or FSA for a telehealth visit?',
        answer:
          'Yes. Payments for medical care by a physician count as medical expenses under IRS Publication 502, so a telehealth visit can be paid from an HSA or FSA. High-deductible plans may also cover telehealth before the deductible without affecting HSA eligibility, a rule Congress made permanent for plan years beginning after December 31, 2024.',
      },
      {
        id: 'faq-gfe',
        question: 'Can I get a price estimate before a doctor visit?',
        answer:
          'Yes. If you are uninsured or not using insurance, providers must give you a Good Faith Estimate when you schedule at least 3 business days ahead or when you ask for one. If the final bill is $400 or more above the estimate, you can start a dispute within 120 calendar days of receiving the bill.',
      },
    ],
    method: [
      'Telehealth prices: the self-pay price each company publishes on its own website for a general or urgent care video visit, read on November 24, 2026. We did not book visits to confirm them, and we list a company only when its own site shows a price.',
      'Office visit benchmarks: Medicare 2026 national non-facility amounts, total relative value units multiplied by the 2026 conversion factor ($33.4009) [[ref-pfs]]. Medicare amounts are not self-pay prices.',
      'Employer plan figures are quoted as published by the Health Care Cost Institute, with their data year (2022) [[ref-hcci]].',
      'Medicine: CMS NADAC per-unit cost times the quantity in a standard adult course, from the condition guides linked above [[ref-nadac]].',
      'Not included: crowd-sourced price lists, retail drug coupon prices, and figures from sources whose terms do not allow reuse.',
      'Refresh schedule: telehealth prices monthly, Medicare rates every January 1, NADAC monthly.',
    ],
    refs: [
      'ref-onemed', 'ref-dod', 'ref-pfs', 'ref-hcci', 'ref-hrsa-sfds', 'ref-cvs-vc', 'ref-teladoc', 'ref-mdlive', 'ref-sesame',
      'ref-zhang-jama', 'ref-hrsa-find', 'ref-gfe-ppdr', 'ref-gfe', 'ref-irs-p502', 'ref-irs-n2026-5', 'ref-nadac',
    ],
    related: [
      { href: '/cost/urgent-care-cost-without-insurance/', label: 'Urgent care cost without insurance' },
      { href: '/cost/er-visit-cost-without-insurance/', label: 'ER visit cost without insurance' },
      { href: '/cost/', label: 'All cost guides' },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────
  'er-visit-cost-without-insurance': {
    slug: 'er-visit-cost-without-insurance',
    isNew: true,
    breadcrumb: 'ER visit cost',
    title: 'How Much Does an ER Visit Cost Without Insurance in 2026?',
    metaTitle: 'ER Visit Cost Without Insurance (2026): Public Data and How to Lower the Bill | TeleDirectMD',
    metaDescription:
      'What an emergency room visit costs in 2026, from public data: employer plan prices, out-of-pocket costs by visit complexity, Medicare ER physician rates, and the financial assistance rules that can lower an uninsured ER bill.',
    ogTitle: 'What an ER visit costs in 2026',
    ogImage: '/images/cost/og-er-visit-cost-without-insurance.jpg',
    about: 'Cost of an emergency room visit, with and without insurance',
    sub: 'What an emergency room visit costs by the public data, why the bill comes in two parts, and the rules that can lower it.',
    quickAnswer:
      `There is no single price for an ER visit. Employer health plans paid an average of **${usd0(HCCI_2022.er)}** per emergency room visit in 2022 [[ref-hcci]]. People in large employer plans paid **${usd0(KFF_ED_2019.outOfPocket)}** out of pocket per visit on average in 2019, and even the least complex visits cost **${usd0(KFF_ED_2019.lowTotal)}** in total [[ref-kff-ed]]. ` +
      `Without insurance there is no negotiated rate, so the bill can be higher [[ref-hpt-faq]], but a nonprofit hospital must offer financial assistance and cannot charge an eligible patient more than it generally bills insured patients for emergency care [[ref-irs-501r5]]. ` +
      `Do not delay emergency care over cost: hospitals must screen and stabilize you whether or not you can pay [[ref-emtala]].`,
    sections: [
      {
        id: 'measures',
        h2: 'What an ER visit costs, by the public data',
        paras: [
          'No public source tracks what uninsured patients pay for an ER visit. These are the best public measures, and each is a different kind of number.',
        ],
        table: {
          ariaLabel: 'Emergency room visit cost measures from public sources, with data year',
          head: ['Measure', 'Amount', 'What it is'],
          rows: [
            ['Average price of an ER visit, employer plans, 2022', usd0(HCCI_2022.er), 'What the plan and the patient paid together, all diagnoses [[ref-hcci]].'],
            ['Average total cost per ER visit, large employer plans, 2019', usd0(KFF_ED_2019.total), 'Plan and patient combined [[ref-kff-ed]].'],
            ['Average out-of-pocket cost per ER visit, large employer plans, 2019', usd0(KFF_ED_2019.outOfPocket), 'The patient\'s share [[ref-kff-ed]].'],
            ['Least complex ER visits, 2019', `${usd0(KFF_ED_2019.lowTotal)} total, ${usd0(KFF_ED_2019.lowOop)} out of pocket`, 'Large employer plans [[ref-kff-ed]].'],
            ['Most complex ER visits, 2019', `${usd0(KFF_ED_2019.highOop)} out of pocket`, `The plan paid another ${usd0(KFF_ED_2019.highPlan)} on average [[ref-kff-ed]].`],
          ],
        },
        note: 'Insured prices from 2022 and 2019, not 2026 cash prices. Uninsured patients have no negotiated rate, so a bill without insurance can be higher before any discount [[ref-hpt-faq]].',
      },
      {
        id: 'two-bills',
        h2: 'Why an ER visit comes with two bills',
        paras: [
          'An ER visit is usually billed in two parts: the hospital\'s facility fee and the emergency physician\'s professional fee. Visits are coded by complexity from level 1 (least complex) to level 5 (most complex), and tests, imaging and medicines are added on top. Facility fees, the visit itself, imaging and lab work make up the largest shares of the cost [[ref-kff-ed]].',
          'Medicare publishes what it pays the emergency physician at each level:',
        ],
        table: {
          ariaLabel: 'Medicare 2026 national physician payment for emergency department visits by level',
          head: ['ER visit level', 'Medicare 2026 physician payment'],
          rows: [
            ['Level 1, least complex (99281)', usd(ER_PFS_2026.v99281)],
            ['Level 2 (99282)', usd(ER_PFS_2026.v99282)],
            ['Level 3 (99283)', usd(ER_PFS_2026.v99283)],
            ['Level 4 (99284)', usd(ER_PFS_2026.v99284)],
            ['Level 5, most complex (99285)', usd(ER_PFS_2026.v99285)],
          ],
        },
        note: 'Medicare 2026 national amounts for the physician\'s professional fee only, before any local adjustment [[ref-pfs]]. The hospital facility fee is billed separately and is not included. CMS publishes Medicare\'s facility rates for ER visits only behind a license agreement, so they are not shown here.',
      },
      {
        id: 'no-insurance',
        h2: 'If you go to the ER without insurance',
        paras: [
          '**You will be seen.** Hospitals that take Medicare and offer emergency services must give anyone who asks a medical screening exam and, for an emergency, stabilizing treatment, regardless of ability to pay [[ref-emtala]]. You will still be billed.',
          '**There is no price estimate up front.** The Good Faith Estimate that uninsured patients get for scheduled care does not apply during emergency care [[ref-gfe]].',
          '**A nonprofit hospital cannot make you pay first.** Its emergency care policy must bar demanding payment before emergency treatment and must keep debt collection out of the emergency department when it could interfere with care [[ref-irs-501r4]].',
          '**Ask about financial assistance, before or after the bill.** Nonprofit hospitals must have a written financial assistance policy that covers emergency care and must post it in the emergency room. A patient who qualifies cannot be charged more than the amounts the hospital generally bills insured patients for emergency care [[ref-irs-501r4]] [[ref-irs-501r5]]. If you are found eligible after you have paid, the rules provide for a refund of what you paid above your eligible amount [[ref-irs-501r5]].',
        ],
      },
      {
        id: 'insured',
        h2: 'If you have insurance',
        paras: [
          `Your cost is your plan's ER copay, deductible and coinsurance. In 2019, people in large employer plans paid ${usd0(KFF_ED_2019.outOfPocket)} out of pocket per ER visit on average, from ${usd0(KFF_ED_2019.lowOop)} for the least complex visits to ${usd0(KFF_ED_2019.highOop)} for the most complex [[ref-kff-ed]].`,
          'Under the No Surprises Act, a federal law in effect since January 1, 2022, if your plan covers emergency care, you cannot be charged more than your in-network cost sharing for emergency services, even at an out-of-network hospital or a freestanding emergency department. Providers cannot ask you to give up that protection in the emergency room [[ref-cms-ins-rights]].',
          'Ground ambulance rides are not covered by those federal protections, though some states have their own rules. Short-term plans and health care sharing ministries are not covered either [[ref-cms-ins-rights]].',
        ],
      },
      {
        id: 'compare',
        h2: 'ER, urgent care or a doctor\'s office: what the same problem costs',
        paras: [
          'For problems that do not need an emergency room, the setting changes the price far more than the problem does. Employer plans paid these average amounts for a urinary tract infection visit in 2022:',
        ],
        table: {
          ariaLabel: 'Average price and out-of-pocket cost of a UTI visit by setting, employer plans, 2022',
          head: ['Setting', 'Average price, UTI visit', 'Average out of pocket'],
          rows: [
            ['Primary care office', usd0(HCCI_2022.utiPrice.primaryCare), usd0(HCCI_2022.utiOutOfPocket.primaryCare)],
            ['Urgent care', usd0(HCCI_2022.utiPrice.urgentCare), usd0(HCCI_2022.utiOutOfPocket.urgentCare)],
            ['Emergency room', usd0(HCCI_2022.utiPrice.er), usd0(HCCI_2022.utiOutOfPocket.er)],
          ],
        },
        note: `Employer plan prices and patient out-of-pocket costs from 2022, not 2026 cash prices [[ref-hcci]]. Across all diagnoses, employer plans paid ${usd0(HCCI_2022.er)} per ER visit and ${usd0(HCCI_2022.urgentCare)} per urgent care visit, about ten times less [[ref-hcci]]. For problems that suit video, large national telehealth services published self-pay prices of $49 to $99 on November 24, 2026 [[ref-onemed]] [[ref-dod]]; see [online doctor visit cost](/cost/online-doctor-visit-cost/).`,
      },
      {
        id: 'when',
        h2: 'When to go to the ER, and when another option is safe',
        byline: true,
        paras: [
          '**Go to the ER or call 911:** chest pain or pressure, trouble breathing, face drooping, arm weakness or slurred speech, severe bleeding, a head injury with confusion or passing out, a seizure, a severe allergic reaction, severe abdominal pain, or a high fever with a stiff neck or confusion. If you are thinking about harming yourself, call or text 988 or go to the ER.',
          '**Urgent care or your doctor\'s office:** a possible simple broken bone, a sprain, a cut that may need stitches, ear pain that needs a look inside the ear, or anything that needs a urine test, a swab or an x-ray.',
          '**A video visit can be enough:** a bladder infection in a woman who is not pregnant, a sinus infection, pink eye, a cold or flu in a healthy adult, a rash, allergies, and refills of stable long-term medicines.',
          '**If you are not sure it is an emergency, go.** Cost should never be the reason to stay home with emergency symptoms.',
        ],
      },
      {
        id: 'lower',
        h2: 'How to lower an ER bill you already have',
        paras: [
          '**Get an itemized bill** and check it for duplicate charges and services you did not receive.',
          '**Compare it with the hospital\'s posted cash price.** Hospitals must post their standard charges, including the discounted cash price, in a file linked from their home page under a "Price Transparency" label [[ref-hpt-faq]].',
          '**Apply for financial assistance** at a nonprofit hospital, even after the bill arrives [[ref-irs-501r4]], and ask for a payment plan for what is left.',
          '**If you have insurance, check your explanation of benefits.** Out-of-network emergency care should be billed at your in-network cost sharing. If it is not, CMS takes complaints through its No Surprises Help Desk [[ref-cms-ins-rights]].',
        ],
      },
    ],
    tdmd: {
      h2: 'Where TeleDirectMD fits',
      body:
        'TeleDirectMD publishes this page and does not provide emergency care. For problems that do not need an ER, a visit is a **$79 flat self-pay fee** for a video visit with a board-certified physician, never a nurse practitioner or physician assistant. It includes the evaluation and, when appropriate, a prescription sent to your pharmacy. Medicine, labs and imaging are not included. You get a receipt you can submit to an HSA or FSA. Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit. Some insurance plans are accepted in some states.',
      links: [
        { href: '/what-we-treat/', label: 'What we treat' },
        { href: '/states-we-serve/', label: 'Check your state' },
        { href: '/insurance/', label: 'Insurance' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does an ER visit cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-insured',
        question: 'How much is an ER visit with insurance?',
        answer: `It depends on your plan's ER copay, deductible and coinsurance. In 2019, people in large employer plans paid ${usd0(KFF_ED_2019.outOfPocket)} out of pocket per ER visit on average, from ${usd0(KFF_ED_2019.lowOop)} for the least complex visits to ${usd0(KFF_ED_2019.highOop)} for the most complex. If your plan covers emergency care, you cannot be charged more than your in-network cost sharing for emergency services, even at an out-of-network hospital.`,
      },
      {
        id: 'faq-cant-pay',
        question: 'Will the ER treat me if I cannot pay?',
        answer:
          'Yes. Under EMTALA, hospitals that take Medicare and offer emergency services must give anyone who asks a medical screening exam and, for an emergency, stabilizing treatment, regardless of ability to pay. You will still get a bill. Nonprofit hospitals must have a financial assistance policy that covers emergency care, and they cannot demand payment before emergency treatment.',
      },
      {
        id: 'faq-why',
        question: 'Why is an ER visit so expensive?',
        answer: `An ER visit usually brings two bills: the hospital's facility fee and the emergency physician's fee, each coded by complexity from level 1 to level 5, with tests, imaging and medicines added on top. Employer plans paid an average of ${usd0(HCCI_2022.er)} per ER visit in 2022, about ten times the ${usd0(HCCI_2022.urgentCare)} they paid per urgent care visit.`,
      },
      {
        id: 'faq-urgent-care',
        question: 'Is urgent care cheaper than the ER?',
        answer: `For problems that do not need an emergency room, yes. In 2022, employer plans paid an average of ${usd0(HCCI_2022.utiPrice.urgentCare)} for a urinary tract infection visit at urgent care and ${usd0(HCCI_2022.utiPrice.er)} in the ER, and patients paid ${usd0(HCCI_2022.utiOutOfPocket.urgentCare)} and ${usd0(HCCI_2022.utiOutOfPocket.er)} out of pocket. For chest pain, trouble breathing, signs of a stroke or a severe injury, go to the ER or call 911.`,
      },
      {
        id: 'faq-reduce',
        question: 'Can I get an ER bill reduced?',
        answer:
          'Often. Ask a nonprofit hospital for its financial assistance policy and apply, even after the bill arrives: a patient who qualifies cannot be charged more than the amounts the hospital generally bills insured patients for emergency care. Ask for an itemized bill, compare it with the discounted cash price the hospital must post online, and ask for a payment plan.',
      },
      {
        id: 'faq-estimate',
        question: 'Can I get a price estimate before ER care?',
        answer:
          'No. The Good Faith Estimate that uninsured and self-pay patients can get for scheduled care does not apply during emergency care. You can ask for an itemized bill afterward and compare it with the hospital\'s posted discounted cash price.',
      },
    ],
    method: [
      'ER visit costs: quoted as published by the Health Care Cost Institute (employer plan prices, 2022 data) and Peterson-KFF (large employer plans, 2019 data), each shown with its data year [[ref-hcci]] [[ref-kff-ed]]. No public source reports what uninsured patients actually pay.',
      'Physician fees: Medicare 2026 national amounts for ER visit levels 1 to 5 (99281 to 99285), total relative value units multiplied by the 2026 conversion factor ($33.4009) [[ref-pfs]]. Medicare amounts are not self-pay prices.',
      'Hospital facility fees by level are not shown, because CMS publishes them only behind a license agreement.',
      'Rules on emergency care, financial assistance and billing protections are summarized from CMS and IRS pages read on November 24, 2026 [[ref-emtala]] [[ref-irs-501r4]] [[ref-irs-501r5]] [[ref-cms-ins-rights]].',
      'Not included: crowd-sourced price lists, hospital charge figures republished by third-party sites, and figures from sources whose terms do not allow reuse.',
      'Refresh schedule: Medicare rates every January 1; employer plan and out-of-pocket figures when HCCI or Peterson-KFF publish newer data.',
    ],
    refs: [
      'ref-hcci', 'ref-kff-ed', 'ref-hpt-faq', 'ref-irs-501r5', 'ref-emtala', 'ref-pfs', 'ref-gfe', 'ref-irs-501r4',
      'ref-cms-ins-rights', 'ref-onemed', 'ref-dod',
    ],
    related: [
      { href: '/cost/urgent-care-cost-without-insurance/', label: 'Urgent care cost without insurance' },
      { href: '/cost/online-doctor-visit-cost/', label: 'Online doctor visit cost' },
      { href: '/cost/', label: 'All cost guides' },
    ],
  },
};

export const CONDITION_COST_SLUGS = Object.keys(CONDITION_COST_PAGES);
export const CONDITION_COST_REBUILT_SLUGS = CONDITION_COST_SLUGS.filter((s) => !CONDITION_COST_PAGES[s].isNew);
