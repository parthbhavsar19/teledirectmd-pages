// The 17 older cost guides, rebuilt on the ConditionCostPage design (November 26, 2026).
// Before this file they rendered through app/cost/[slug] from lib/cost-pages-config.js,
// with GoodRx coupon prices, BetterCare, Mira and Solv visit figures and "same-day" copy.
//
// Same rules as lib/condition-cost-data.js:
// - Every number comes from a public source named in the page's refs.
// - Medicine prices are CMS NADAC pharmacy acquisition costs (weekly file as_of 2026-11-25,
//   rates effective 2026-11-18), shown as per-unit cost times a stated quantity. Where NADAC
//   lists more than one rate for the same product (different package sizes), the range is shown.
//   Saved rows: seo-dashboard/cost-pages/2026-11-26/primary-sources/nadac-b1..b3.json
// - A dose or course is stated only where a guideline or FDA label read on 2026-11-26 says it.
//   Otherwise the table prices a plain quantity (for example 30 tablets) and says so.
// - Visit costs reuse the hub's sources: Medicare 2026 physician fee schedule and HCCI 2022.
// - No retail coupon prices, no "same-day", no promise of a prescription or outcome.
//
// Exported as a builder so the shared helpers come from condition-cost-data.js without a
// circular import.

const NADAC_ROWS = {
  // Eye
  erythroOphOint: [2.75989, 7.09166], // ERYTHROMYCIN 0.5% EYE OINTMENT, per GM
  polyTmpEye: [0.44794], // POLYMYXIN B-TMP EYE DROPS, per ML
  ciproEye: [0.85454, 2.6312], // CIPROFLOXACIN 0.3% EYE DROP, per ML
  ketotifenOtc: [1.27248], // KETOTIFEN 0.025% (0.035%) DROP, OTC, per ML
  // Ear
  ofloxOtic: [1.09675, 1.20294], // OFLOXACIN 0.3% EAR DROPS, per ML
  ciproDexOtic: [7.06002], // CIPROFLOX-DEXAMETH OTIC SUSP, per ML
  amox875: [0.15504], // AMOXICILLIN 875 MG TABLET
  amoxClav875: [0.27877], // AMOX-CLAV 875-125 MG TABLET
  // Vaginal
  fluconazole150: [0.52486], // FLUCONAZOLE 150 MG TABLET
  miconazoleVag2: [0.11682], // MICONAZOLE 2% VAGINAL CREAM, OTC, per GM
  clotrimazoleVag1: [0.08903], // CLOTRIMAZOLE 1% VAGINAL CREAM, OTC, per GM
  terconazole04: [0.55691], // TERCONAZOLE 0.4% CREAM, per GM
  metronidazole500: [0.10493], // METRONIDAZOLE 500 MG TABLET
  metronidazoleGel: [0.14696], // METRONIDAZOLE VAGINAL 0.75% GL, per GM
  clindaVag2: [1.87771], // CLINDAMYCIN 2% VAGINAL CREAM, per GM
  // Antivirals
  valacyclovir1g: [0.43534], // VALACYCLOVIR HCL 1 GRAM TABLET
  acyclovir400: [0.09472], // ACYCLOVIR 400 MG TABLET
  acyclovir800: [0.19653], // ACYCLOVIR 800 MG TABLET
  famciclovir500: [0.79532], // FAMCICLOVIR 500 MG TABLET
  // Migraine
  sumatriptan50: [0.3218], // SUMATRIPTAN SUCC 50 MG TABLET
  sumatriptan100: [0.42289], // SUMATRIPTAN SUCC 100 MG TABLET
  rizatriptan10: [0.32171], // RIZATRIPTAN 10 MG TABLET
  propranolol40: [0.07482], // PROPRANOLOL 40 MG TABLET
  topiramate25: [0.02756], // TOPIRAMATE 25 MG TABLET
  topiramate50: [0.04014], // TOPIRAMATE 50 MG TABLET
  // Contraception
  lngEe: [0.23036], // LEVONORGESTREL-ETH ESTRAD 0.15 MG-0.03 MG TABLET
  nethEe: [0.16724], // NORETHIND-ETH ESTRAD 1-0.02 MG
  drspEe: [0.15563, 0.19601], // DROSPIRENONE-EE 3-0.03 / 3-0.02 MG TAB
  norethindrone035: [0.10263], // NORETHINDRONE 0.35 MG TABLET
  // ED
  sildenafil50: [0.11246], // SILDENAFIL 50 MG TABLET
  sildenafil100: [0.13873], // SILDENAFIL 100 MG TABLET
  tadalafil25: [0.11981], // TADALAFIL 2.5 MG TABLET
  tadalafil5: [0.11344], // TADALAFIL 5 MG TABLET
  tadalafil20: [0.14391, 0.19976], // TADALAFIL 20 MG TABLET
  // Hair
  finasteride1: [0.04282], // FINASTERIDE 1 MG TABLET
  minoxidil5Sol: [0.25661], // MINOXIDIL 5% SOLUTION, OTC, per ML
  minoxidil5Foam: [0.18567], // MINOXIDIL 5% FOAM, OTC, per GM
  // Diabetes
  metformin500: [0.01482], // METFORMIN HCL 500 MG TABLET
  metformin1000: [0.02372], // METFORMIN HCL 1,000 MG TABLET
  metforminEr500: [0.02854], // METFORMIN HCL ER 500 MG TABLET
  glipizide5: [0.03177], // GLIPIZIDE 5 MG TABLET
  dapagliflozin10: [0.18565], // DAPAGLIFLOZIN 10 MG TABLET (generic)
  farxiga10: [12.07441], // FARXIGA 10 MG TABLET (brand)
  jardiance10: [11.1879], // JARDIANCE 10 MG TABLET (brand)
  glargineYfgnPen: [2.89948, 5.92804], // INSULIN GLARGINE-YFGN U100 PEN, per ML
  // Acne
  adapaleneGelOtc: [0.29086, 0.42534], // ADAPALENE 0.1% GEL, OTC, per GM
  tretinoin025Cream: [0.4806, 0.54858], // TRETINOIN 0.025% CREAM, per GM
  tretinoin05Cream: [1.17771, 1.48291], // TRETINOIN 0.05% CREAM, per GM
  bpo5Gel: [0.17774, 0.21956], // BENZOYL PEROXIDE 5% GEL, OTC, per GM
  doxy100: [0.11238, 0.12242], // DOXYCYCLINE HYCLATE 100 MG CAP / TAB
  // Eczema
  triamcinolone01Cream: [0.02526, 0.10471], // TRIAMCINOLONE 0.1% CREAM, per GM
  hydrocortisone25Cream: [0.08428, 0.23945], // HYDROCORTISONE 2.5% CREAM, per GM
  tacrolimus01Oint: [1.04234, 1.09579], // TACROLIMUS 0.1% OINTMENT, per GM
  tacrolimus003Oint: [0.92588, 1.10498], // TACROLIMUS 0.03% OINTMENT, per GM
  // Allergy
  loratadineOtc: [0.05478], // LORATADINE 10 MG TABLET, OTC
  cetirizineOtc: [0.05772], // CETIRIZINE HCL 10 MG TABLET, OTC
  fluticasoneRx: [0.43889], // FLUTICASONE PROP 50 MCG SPRAY (Rx package), per GM
  montelukast10: [0.04307], // MONTELUKAST SOD 10 MG TABLET
  // Chronic refills
  lisinopril10: [0.01806], // LISINOPRIL 10 MG TABLET
  amlodipine5: [0.01012], // AMLODIPINE BESYLATE 5 MG TAB
  atorvastatin20: [0.02841], // ATORVASTATIN 20 MG TABLET
  metoprololEr50: [0.05549], // METOPROLOL SUCC ER 50 MG TAB
  levothyroxine50: [0.04245], // LEVOTHYROXINE 50 MCG TABLET
  omeprazole20: [0.03116], // OMEPRAZOLE DR 20 MG CAPSULE
  // COVID
  paxlovidTab: [49.2377], // PAXLOVID 300-100 MG DOSE PACK, per EA (brand)
  acetaminophen500Otc: [0.03525], // ACETAMINOPHEN 500 MG TABLET, OTC
  ibuprofen200Otc: [0.03254], // IBUPROFEN 200 MG TABLET, OTC
};

export const OLDER_GUIDE_SLUGS = [
  'online-prescription-cost',
  'pink-eye-cost',
  'ear-infection-cost',
  'yeast-infection-cost',
  'bv-treatment-cost',
  'cold-sore-cost',
  'shingles-cost',
  'migraine-treatment-cost',
  'birth-control-refills-cost',
  'erectile-dysfunction-cost',
  'hair-loss-treatment-cost',
  'diabetes-refills-cost',
  'acne-treatment-cost',
  'eczema-treatment-cost',
  'seasonal-allergies-cost',
  'covid-19-treatment-cost',
  'uti-antibiotics-cost',
];

export const OLDER_GUIDE_REFS = {
  'ref-aao-pinkeye': {
    text: 'American Academy of Ophthalmology. Pink Eye: What Is Conjunctivitis? EyeSmart patient information.',
    url: 'https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis',
  },
  'ref-aoe-aafp': {
    text: 'AAO-HNSF Releases Clinical Practice Guideline on Acute Otitis Externa. Am Fam Physician. 2014;90(10):731-736.',
    url: 'https://www.aafp.org/afp/2014/1115/p731',
  },
  'ref-aafp-uri': {
    text: 'Antibiotic Use in Acute Upper Respiratory Tract Infections. Am Fam Physician. December 2022.',
    url: 'https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html',
  },
  'ref-cdc-vvc': {
    text: 'CDC. Sexually Transmitted Infections Treatment Guidelines, 2021: Vulvovaginal Candidiasis.',
    url: 'https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm',
  },
  'ref-cdc-bv': {
    text: 'CDC. Sexually Transmitted Infections Treatment Guidelines, 2021: Bacterial Vaginosis.',
    url: 'https://www.cdc.gov/std/treatment-guidelines/bv.htm',
  },
  'ref-aad-coldsore': {
    text: 'American Academy of Dermatology. Cold sores: Diagnosis and treatment.',
    url: 'https://www.aad.org/public/diseases/a-z/cold-sores-treatment',
  },
  'ref-label-valacyclovir': {
    text: 'Valacyclovir tablets, USP. Prescribing information (DailyMed): cold sores 2 grams twice daily for 1 day; herpes zoster 1 gram 3 times daily for 7 days.',
    url: 'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=97a10bb6-52c0-495d-e053-2995a90a60a4&type=display',
  },
  'ref-cdc-zoster': {
    text: 'CDC. Clinical Overview of Shingles (Herpes Zoster).',
    url: 'https://www.cdc.gov/shingles/hcp/clinical-overview/index.html',
  },
  'ref-aan-migraine': {
    text: 'Silberstein SD, Holland S, Freitag F, Dodick DW, Argoff C, Ashman E. Evidence-based guideline update: pharmacologic treatment for episodic migraine prevention in adults. Report of the AAN and the American Headache Society. Neurology. 2012;78(17).',
    url: 'https://doi.org/10.1212/WNL.0b013e3182535d20',
  },
  'ref-cdc-mec': {
    text: 'CDC. U.S. Medical Eligibility Criteria for Contraceptive Use, 2024.',
    url: 'https://www.cdc.gov/contraception/hcp/usmec/index.html',
  },
  'ref-aua-ed': {
    text: 'American Urological Association. Erectile Dysfunction (ED) Guideline.',
    url: 'https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction-(ed)-guideline',
  },
  'ref-label-viagra': {
    text: 'Viagra (sildenafil citrate) tablets. FDA prescribing information, 2014: 50 mg as needed about 1 hour before sexual activity for most patients.',
    url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/20895s039s042lbl.pdf',
  },
  'ref-label-cialis': {
    text: 'Cialis (tadalafil) tablets. FDA prescribing information, 2011: once-daily use starts at 2.5 mg.',
    url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/021368s20s21lbl.pdf',
  },
  'ref-aad-hairloss': {
    text: 'American Academy of Dermatology. Hair loss: Diagnosis and treatment.',
    url: 'https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat',
  },
  'ref-label-finasteride': {
    text: 'Finasteride tablets 1 mg. Prescribing information (DailyMed): one tablet once daily, for male pattern hair loss in men only.',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7432df12-381f-7db6-e053-2991aa0a810a',
  },
  'ref-ada-2026-s9': {
    text: 'American Diabetes Association Professional Practice Committee. 9. Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes 2026. Diabetes Care. 2026;49(Suppl. 1):S183-S215.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12690185/',
  },
  'ref-aad-acne': {
    text: 'American Academy of Dermatology. American Academy of Dermatology issues updated guidelines for the management of acne (2024 guideline).',
    url: 'https://www.aad.org/news/updated-guidelines-acne-management',
  },
  'ref-aad-ad-topical': {
    text: 'Sidbury R, et al. Guidelines of care for the management of atopic dermatitis in adults with topical therapies. J Am Acad Dermatol. 2023.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36641009/',
  },
  'ref-aaohns-ar': {
    text: 'Seidman MD, et al. Clinical practice guideline: Allergic rhinitis. Otolaryngol Head Neck Surg. 2015.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25644617/',
  },
  'ref-fda-montelukast': {
    text: 'FDA. Drug Safety Communication, March 4, 2020: Boxed Warning about serious mental health side effects for montelukast (Singulair); advises restricting use for allergic rhinitis.',
    url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-boxed-warning-about-serious-mental-health-side-effects-asthma-and-allergy-drug',
  },
  'ref-label-paxlovid': {
    text: 'Pfizer. PAXLOVID (nirmatrelvir tablets; ritonavir tablets) prescribing information: 300 mg nirmatrelvir (two 150 mg tablets) with 100 mg ritonavir (one tablet) twice daily for 5 days.',
    url: 'https://labeling.pfizer.com/ShowLabeling.aspx?id=19599',
  },
  'ref-cdc-covid-outpt': {
    text: 'CDC. COVID-19 Treatment Clinical Care for Outpatients.',
    url: 'https://www.cdc.gov/covid/hcp/clinical-care/outpatient-treatment.html',
  },
};

export function buildOlderGuides(h) {
  const { usd, usd0, round2, N, HCCI_2022, HCCI_ALL, VISIT_ROW, SETTING_INTRO_ALL, NADAC_EFF } = h;

  // Cost of a quantity at one NADAC rate, or a range across the listed rates.
  const cost = (key, qty) => {
    const rates = NADAC_ROWS[key];
    if (!rates) throw new Error(`older guides: no NADAC rate for ${key}`);
    const vals = rates.map((r) => round2(r * qty));
    const lo = Math.min(...vals);
    const hi = Math.max(...vals);
    return lo === hi ? usd(lo) : `${usd(lo)} to ${usd(hi)}`;
  };
  const lowOf = (key, qty) => round2(Math.min(...NADAC_ROWS[key]) * qty);
  const highOf = (key, qty) => round2(Math.max(...NADAC_ROWS[key]) * qty);
  // Lowest cost of one product to highest cost of another, for summary rows.
  const span = (loKey, loQty, hiKey, hiQty) => `${usd(lowOf(loKey, loQty))} to ${usd(highOf(hiKey, hiQty))}`;

  const MED_NOTE = `CMS NADAC per-unit cost times the quantity shown, rates effective ${NADAC_EFF} [[ref-nadac]]. This is what pharmacies pay to buy the medicine, not what you pay at the counter, which adds the pharmacy's fee and margin.`;
  const OTC_NOTE = ' Products marked OTC are sold without a prescription.';

  const settingSection = {
    id: 'setting',
    h2: 'What the visit costs in each setting',
    paras: [SETTING_INTRO_ALL],
    table: HCCI_ALL,
    note: HCCI_ALL.note,
  };

  const tdmdBody = (extra) =>
    'TeleDirectMD publishes this page. A TeleDirectMD visit is a **$79 flat self-pay fee** for a video visit with a board-certified physician, which includes the evaluation and, when appropriate, a prescription sent to your pharmacy. It does not include the medicine. ' +
    (extra ? `${extra} ` : '') +
    'Visits are for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the visit.';

  const urgentCareFaq = (label) => ({
    id: 'faq-urgent-care',
    question: `How much is urgent care for ${label}?`,
    answer: `Each clinic sets its own self-pay price. As a benchmark, employer health plans paid an average of ${usd0(HCCI_2022.urgentCare)} per urgent care visit in 2022 for all diagnoses (Health Care Cost Institute), and Medicare's 2026 national rate for a low-complexity office visit is ${usd(N.v99213)}.`,
  });

  const RELATED = [
    { href: '/cost/online-doctor-visit-cost/', label: 'Online doctor visit cost' },
    { href: '/cost/', label: 'All cost guides' },
  ];

  const OG = '/og-default-editorial.jpg';
  const CHECKED = '2026-11-25';

  const METHOD = [
    'Visit benchmarks: Medicare 2026 national non-facility amounts, total relative value units multiplied by the 2026 conversion factor ($33.4009) [[ref-pfs]]. Medicare amounts are not self-pay prices. Employer plan visit prices are quoted as the Health Care Cost Institute published them, with their 2022 data year [[ref-hcci]].',
    `Medicine: CMS NADAC per-unit cost (weekly file dated November 25, 2026, rates effective ${NADAC_EFF}) multiplied by the quantity shown [[ref-nadac]]. Where a guideline or FDA label states a course, the quantity follows it and the page says so; otherwise the quantity is a plain comparison amount, not a dosing recommendation. NADAC is what pharmacies pay, not the counter price.`,
    'Not included: lab test prices (no free public source without license restrictions), retail drug coupon prices, crowd-sourced price lists, and price figures from sources whose terms do not allow reuse.',
    'Refresh schedule: Medicare rates every January 1, NADAC monthly, guidelines and labels when they change.',
  ];

  const visitPieces = (name, extraRows) => ({
    id: 'pieces',
    h2: 'The bill, piece by piece',
    table: {
      ariaLabel: `${name} cost by part of the bill`,
      head: ['Part of the bill', 'Public benchmark', 'What to know'],
      rows: [VISIT_ROW, ...extraRows],
    },
  });

  const pages = {};

  // ── Pink eye ───────────────────────────────────────────────────────────
  pages['pink-eye-cost'] = {
    slug: 'pink-eye-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Pink eye treatment cost',
    title: 'How Much Does Pink Eye Treatment Cost in 2026?',
    metaTitle: 'Pink Eye Treatment Cost (2026): Visit and Eye Drops, From Public Data | TeleDirectMD',
    metaDescription:
      'What treating pink eye costs in 2026: Medicare visit benchmarks, employer plan visit prices by setting, what pharmacies pay for antibiotic eye drops and ointment, and why most pink eye needs no antibiotic.',
    ogTitle: 'What pink eye treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of treating conjunctivitis (pink eye)',
    sub: 'The visit and the eye medicine, priced from public data, and why the cheapest treatment is often none at all.',
    quickAnswer:
      'Most of the cost of pink eye is the visit. Antibiotics only help bacterial pink eye, not viral or allergic pink eye, and pink eye usually goes away on its own within 1 to 2 weeks [[ref-aao-pinkeye]]. ' +
      `When an antibiotic is right, pharmacies paid **${cost('polyTmpEye', 10)}** for a 10 mL bottle of polymyxin B and trimethoprim eye drops and **${cost('erythroOphOint', 3.5)}** for a 3.5 g tube of erythromycin eye ointment [[ref-nadac]]. ` +
      `For the visit, Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]], and employer plans paid an average of **${usd0(HCCI_2022.urgentCare)}** per urgent care visit in 2022 [[ref-hcci]].`,
    sections: [
      visitPieces('Pink eye treatment', [
        ['Tests', 'Usually none', 'Pink eye is usually diagnosed from symptoms and how the eye looks.'],
        ['Eye medicine', `$0, or ${span('ciproEye', 5, 'erythroOphOint', 3.5)}`, 'Only bacterial pink eye needs an antibiotic. What pharmacies paid is below.'],
      ]),
      {
        id: 'when-antibiotic',
        h2: 'Most pink eye does not need an antibiotic',
        paras: [
          'The American Academy of Ophthalmology says viral conjunctivitis is the most common type of pink eye, that antibiotic drops do not help viral or allergic pink eye, and that conjunctivitis usually goes away on its own within 1 to 2 weeks. Bacterial pink eye tends to cause thicker, yellow-green discharge; allergic pink eye causes intense itching and affects both eyes [[ref-aao-pinkeye]].',
          'Skipping an antibiotic you do not need is also the cheapest path.',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Eye medicine: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of pink eye medicines',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Polymyxin B and trimethoprim eye drops (bacterial)', '10 mL bottle', cost('polyTmpEye', 10)],
            ['Erythromycin 0.5% eye ointment (bacterial)', '3.5 g tube', cost('erythroOphOint', 3.5)],
            ['Ciprofloxacin 0.3% eye drops (bacterial)', '5 mL bottle', cost('ciproEye', 5)],
            ['Ketotifen antihistamine eye drops, OTC (allergic)', '5 mL bottle', cost('ketotifenOtc', 5)],
          ],
        },
        note: MED_NOTE + OTC_NOTE + ' A range means NADAC lists more than one rate for different package sizes.',
      },
      {
        id: 'in-person',
        h2: 'When a red eye needs in-person care',
        byline: true,
        paras: [
          'Be seen in person for eye pain (not just irritation), sensitivity to light, any change in vision, a hazy cornea, an eye injury or chemical splash, contact lens wear with worsening symptoms, or heavy pus-like discharge after a possible sexually transmitted exposure. These can point to keratitis, iritis or another problem that needs an eye exam with a slit lamp. If symptoms last longer than 1 to 2 weeks, see an eye doctor [[ref-aao-pinkeye]].',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('If your symptoms point to viral or allergic pink eye, the physician will tell you so rather than prescribe an antibiotic.'),
      links: [
        { href: '/pink-eye-treatment-online/', label: 'Pink eye treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does pink eye treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-antibiotic-needed',
        question: 'Do I need antibiotics for pink eye?',
        answer: 'Often not. The American Academy of Ophthalmology says antibiotics only help bacterial pink eye, that viral pink eye is the most common type, and that pink eye usually goes away on its own within 1 to 2 weeks.',
      },
      {
        id: 'faq-drops-cost',
        question: 'How much do antibiotic eye drops cost?',
        answer: `What pharmacies paid, from the CMS NADAC survey (rates effective ${NADAC_EFF}): ${cost('polyTmpEye', 10)} for a 10 mL bottle of polymyxin B and trimethoprim drops, ${cost('erythroOphOint', 3.5)} for a 3.5 g tube of erythromycin ointment and ${cost('ciproEye', 5)} for 5 mL of ciprofloxacin drops. The counter price is higher, because it adds the pharmacy's fee and margin.`,
      },
      urgentCareFaq('pink eye'),
    ],
    refs: ['ref-aao-pinkeye', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Ear infection ──────────────────────────────────────────────────────
  pages['ear-infection-cost'] = {
    slug: 'ear-infection-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Ear infection treatment cost',
    title: 'How Much Does Ear Infection Treatment Cost in 2026?',
    metaTitle: 'Ear Infection Treatment Cost (2026): Visit, Ear Drops and Antibiotics, From Public Data | TeleDirectMD',
    metaDescription:
      "What treating an adult ear infection costs in 2026: Medicare visit benchmarks, employer plan visit prices by setting, and what pharmacies pay for antibiotic ear drops and pills.",
    ogTitle: 'What ear infection treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of treating an ear infection in adults (outer ear or middle ear)',
    sub: "The visit and the medicine, priced from public data, for the two common kinds of adult ear infection.",
    quickAnswer:
      `The visit is most of the cost. For swimmer's ear (an outer ear canal infection), ear drops are the first-line treatment [[ref-aoe-aafp]], and pharmacies paid **${cost('ofloxOtic', 5)}** for 5 mL of generic ofloxacin ear drops [[ref-nadac]]. ` +
      `For a middle ear infection, guidance lists amoxicillin as the first-line antibiotic [[ref-aafp-uri]]; pharmacies paid **${cost('amox875', 20)}** for 20 tablets of amoxicillin 875 mg [[ref-nadac]]. ` +
      `Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]], and employer plans paid an average of **${usd0(HCCI_2022.urgentCare)}** per urgent care visit in 2022 [[ref-hcci]].`,
    sections: [
      visitPieces('Ear infection treatment', [
        ['Tests', 'Usually none', 'Diagnosis rests on symptoms and, in person, a look at the ear canal and eardrum.'],
        ['Ear drops or antibiotic', span('amox875', 20, 'ciproDexOtic', 7.5), 'What pharmacies paid for the medicines below.'],
      ]),
      {
        id: 'which-kind',
        h2: 'Outer ear or middle ear: the treatment differs',
        paras: [
          "An outer ear infection (acute otitis externa, often called swimmer's ear) is treated first with drops put into the ear canal, not pills; the AAO-HNSF guideline found no significant difference between drop classes [[ref-aoe-aafp]].",
          'A middle ear infection (acute otitis media) sits behind the eardrum. Most published guidance on it is written for children, and it lists amoxicillin as the first-line antibiotic [[ref-aafp-uri]]. Some middle ear infections in adults need an in-person exam to see the eardrum.',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Ear drops and antibiotics: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of ear infection medicines',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Ofloxacin 0.3% ear drops (outer ear)', '5 mL bottle', cost('ofloxOtic', 5)],
            ['Ciprofloxacin and dexamethasone ear drops (outer ear)', '7.5 mL bottle', cost('ciproDexOtic', 7.5)],
            ['Amoxicillin 875 mg (middle ear)', '20 tablets', cost('amox875', 20)],
            ['Amoxicillin-clavulanate 875/125 mg (middle ear)', '20 tablets', cost('amoxClav875', 20)],
          ],
        },
        note: MED_NOTE + ' A range means NADAC lists more than one rate for different package sizes.',
      },
      {
        id: 'in-person',
        h2: 'When ear pain needs in-person care',
        byline: true,
        paras: [
          'Be seen in person for a high fever, severe pain, swelling or redness behind the ear, sudden hearing loss, dizziness, weakness of the face, drainage after an eardrum injury or ear surgery, diabetes or a weakened immune system with a painful ear canal, or symptoms that do not improve within a few days of treatment.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('A video visit cannot look inside the ear, so for some ear pain the physician will recommend an in-person exam instead of treating by video.'),
      links: [
        { href: '/ear-pain-treatment-online/', label: 'Ear pain treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does ear infection treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-drops',
        question: 'How much do antibiotic ear drops cost?',
        answer: `What pharmacies paid, from the CMS NADAC survey (rates effective ${NADAC_EFF}): ${cost('ofloxOtic', 5)} for 5 mL of generic ofloxacin ear drops and ${cost('ciproDexOtic', 7.5)} for 7.5 mL of ciprofloxacin and dexamethasone drops. The counter price adds the pharmacy's fee and margin.`,
      },
      {
        id: 'faq-pills',
        question: "Do I need antibiotic pills for swimmer's ear?",
        answer: 'Usually not. For uncomplicated outer ear infections, the AAO-HNSF guideline makes drops in the ear canal the first-line treatment.',
      },
      urgentCareFaq('an ear infection'),
    ],
    refs: ['ref-aoe-aafp', 'ref-aafp-uri', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Yeast infection ────────────────────────────────────────────────────
  pages['yeast-infection-cost'] = {
    slug: 'yeast-infection-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Yeast infection treatment cost',
    title: 'How Much Does Yeast Infection Treatment Cost in 2026?',
    metaTitle: 'Yeast Infection Treatment Cost (2026): Fluconazole and Creams, From Public Data | TeleDirectMD',
    metaDescription:
      'What treating a vaginal yeast infection costs in 2026: Medicare visit benchmarks, employer plan visit prices by setting, and what pharmacies pay for single-dose fluconazole and the CDC-listed creams.',
    ogTitle: 'What yeast infection treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of treating uncomplicated vulvovaginal candidiasis',
    sub: 'One pill or a cream, priced from public data, with the CDC treatment options side by side.',
    quickAnswer:
      `The medicine is inexpensive. CDC lists a single 150 mg dose of oral fluconazole as a treatment for uncomplicated yeast infection [[ref-cdc-vvc]], and pharmacies paid **${cost('fluconazole150', 1)}** for that one tablet [[ref-nadac]]. ` +
      `Over-the-counter creams cost pharmacies **${cost('clotrimazoleVag1', 35)}** for a 7-day course of clotrimazole 1% and **${cost('miconazoleVag2', 35)}** for 7 days of miconazole 2% [[ref-nadac]]. ` +
      `The visit is the larger cost: Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Yeast infection treatment', [
        ['Tests', 'Sometimes', 'A wet mount or culture can confirm yeast; lab prices are not shown here.'],
        ['Antifungal', span('fluconazole150', 1, 'terconazole04', 35), 'What pharmacies paid for the CDC-listed options below.'],
      ]),
      {
        id: 'options',
        h2: 'What CDC lists for an uncomplicated yeast infection',
        paras: [
          'CDC lists oral fluconazole 150 mg as a single dose, or a vaginal azole cream such as clotrimazole or miconazole (sold over the counter) or terconazole (prescription). Short courses work for uncomplicated infection, and azole treatment relieves symptoms and clears cultures in 80% to 90% of people who finish it [[ref-cdc-vvc]].',
          'Recurrent or severe infection, a yeast other than Candida albicans, and diabetes or a weakened immune system make a yeast infection complicated, which needs a different plan [[ref-cdc-vvc]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Antifungals: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of yeast infection treatments',
          head: ['Medicine', 'CDC regimen', 'Pharmacy acquisition cost'],
          rows: [
            ['Fluconazole 150 mg tablet', 'One tablet, once', cost('fluconazole150', 1)],
            ['Clotrimazole 1% vaginal cream, OTC', '5 g daily for 7 to 14 days (35 to 70 g)', `${usd(lowOf('clotrimazoleVag1', 35))} to ${usd(highOf('clotrimazoleVag1', 70))}`],
            ['Miconazole 2% vaginal cream, OTC', '5 g daily for 7 days (35 g)', cost('miconazoleVag2', 35)],
            ['Terconazole 0.4% vaginal cream', '5 g daily for 7 days (35 g)', cost('terconazole04', 35)],
          ],
        },
        note: MED_NOTE + OTC_NOTE + ' Regimens are from the CDC 2021 STI Treatment Guidelines [[ref-cdc-vvc]]; the cost counts only the cream used, not the size of the tube sold.',
      },
      {
        id: 'in-person',
        h2: 'When vaginal symptoms need in-person care',
        byline: true,
        paras: [
          'Be seen in person if you are pregnant, have fever, pelvic or belly pain, sores or blisters, a strong odor or unusual discharge that does not fit yeast, symptoms that come back four or more times a year, or symptoms that do not clear after treatment. A first-ever episode is also worth a confirmed diagnosis.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/yeast-infection-treatment-online/', label: 'Yeast infection treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does yeast infection treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-fluconazole',
        question: 'How much is fluconazole without insurance?',
        answer: `Pharmacies paid ${cost('fluconazole150', 1)} for one 150 mg fluconazole tablet, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin, and fluconazole needs a prescription.`,
      },
      {
        id: 'faq-otc',
        question: 'Can I treat a yeast infection with an over-the-counter cream?',
        answer: 'CDC lists over-the-counter clotrimazole and miconazole creams for uncomplicated yeast infection. If it is your first episode, you are pregnant or symptoms come back often, get a diagnosis first.',
      },
      urgentCareFaq('a yeast infection'),
    ],
    refs: ['ref-cdc-vvc', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── BV ─────────────────────────────────────────────────────────────────
  pages['bv-treatment-cost'] = {
    slug: 'bv-treatment-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'BV treatment cost',
    title: 'How Much Does Bacterial Vaginosis (BV) Treatment Cost in 2026?',
    metaTitle: 'BV Treatment Cost (2026): Metronidazole and Clindamycin, From Public Data | TeleDirectMD',
    metaDescription:
      'What treating bacterial vaginosis costs in 2026: Medicare visit benchmarks, employer plan visit prices by setting, and what pharmacies pay for each CDC-recommended regimen.',
    ogTitle: 'What BV treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of treating bacterial vaginosis',
    sub: 'The three CDC-recommended regimens, priced from public data, and the visit around them.',
    quickAnswer:
      `CDC recommends three regimens for bacterial vaginosis [[ref-cdc-bv]]. Pharmacies paid **${cost('metronidazole500', 14)}** for the 7-day course of metronidazole 500 mg tablets, **${cost('metronidazoleGel', 25)}** for 5 days of metronidazole vaginal gel and **${cost('clindaVag2', 35)}** for 7 days of clindamycin vaginal cream [[ref-nadac]]. ` +
      `The visit costs more: Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]], and employer plans paid an average of **${usd0(HCCI_2022.urgentCare)}** per urgent care visit in 2022 [[ref-hcci]].`,
    sections: [
      visitPieces('BV treatment', [
        ['Tests', 'Sometimes', 'BV can be confirmed with tests on a vaginal sample; lab prices are not shown here.'],
        ['Medicine', span('metronidazole500', 14, 'clindaVag2', 35), 'What pharmacies paid for each CDC-recommended regimen.'],
      ]),
      settingSection,
      {
        id: 'medicine',
        h2: 'The CDC-recommended regimens: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of BV treatments',
          head: ['Medicine', 'CDC regimen', 'Pharmacy acquisition cost'],
          rows: [
            ['Metronidazole 500 mg tablets', 'Twice a day for 7 days (14 tablets)', cost('metronidazole500', 14)],
            ['Metronidazole 0.75% vaginal gel', 'One 5 g applicator daily for 5 days (25 g)', cost('metronidazoleGel', 25)],
            ['Clindamycin 2% vaginal cream', 'One 5 g applicator at bedtime for 7 days (35 g)', cost('clindaVag2', 35)],
          ],
        },
        note: MED_NOTE + ' Regimens are from the CDC 2021 STI Treatment Guidelines; the cost counts only the gel or cream used [[ref-cdc-bv]]. CDC notes that clindamycin cream is oil based and might weaken latex condoms and diaphragms for 5 days after use.',
      },
      {
        id: 'in-person',
        h2: 'When symptoms need in-person care',
        byline: true,
        paras: [
          'Be seen in person if you are pregnant, have fever or pelvic pain, sores, bleeding that is not your period, symptoms after a new sexual partner that could be a sexually transmitted infection that needs testing, or symptoms that return after treatment.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/bv-treatment-online/', label: 'BV treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does BV treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-metronidazole',
        question: 'How much is metronidazole without insurance?',
        answer: `Pharmacies paid ${cost('metronidazole500', 14)} for the 14 tablets in the CDC 7-day course of metronidazole 500 mg, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin.`,
      },
      {
        id: 'faq-alcohol',
        question: 'Do I need to avoid alcohol with metronidazole?',
        answer: 'CDC\'s 2021 guidelines say refraining from alcohol while taking metronidazole is unnecessary. Follow the instructions your physician and pharmacist give you.',
      },
      urgentCareFaq('BV'),
    ],
    refs: ['ref-cdc-bv', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Cold sore ──────────────────────────────────────────────────────────
  pages['cold-sore-cost'] = {
    slug: 'cold-sore-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Cold sore treatment cost',
    title: 'How Much Does Cold Sore Treatment Cost in 2026?',
    metaTitle: 'Cold Sore Treatment Cost (2026): Valacyclovir and Other Antivirals, From Public Data | TeleDirectMD',
    metaDescription:
      'What treating a cold sore costs in 2026: the one-day valacyclovir course on the FDA label, what pharmacies pay for each antiviral, and Medicare and employer plan visit benchmarks.',
    ogTitle: 'What cold sore treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of treating cold sores (herpes labialis)',
    sub: 'A one-day antiviral course, priced from public data, and the visit that comes with it.',
    quickAnswer:
      `The FDA-labeled cold sore course of valacyclovir is 2 grams twice a day for 1 day [[ref-label-valacyclovir]], which is four 1 gram tablets. Pharmacies paid **${cost('valacyclovir1g', 4)}** for those four tablets [[ref-nadac]]. ` +
      `The visit is the larger cost: Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Cold sore treatment', [
        ['Tests', 'Usually none', 'Cold sores are usually recognized on sight.'],
        ['Antiviral', cost('valacyclovir1g', 4), 'Four valacyclovir 1 gram tablets, the one-day labeled course [[ref-label-valacyclovir]].'],
      ]),
      {
        id: 'treatment',
        h2: 'How cold sores are treated',
        paras: [
          'Cold sores are caused by a virus, so antiviral medicines are used to treat them; options include acyclovir, valacyclovir and famciclovir, and some people with frequent cold sores take a low dose of an antiviral every day to reduce outbreaks [[ref-aad-coldsore]].',
          'The valacyclovir label says cold sore treatment should not exceed 1 day (2 doses) [[ref-label-valacyclovir]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Antivirals: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of cold sore antivirals',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Valacyclovir 1 gram tablets', '4 tablets (labeled 1-day course)', cost('valacyclovir1g', 4)],
            ['Acyclovir 400 mg tablets', 'Per tablet', cost('acyclovir400', 1)],
            ['Famciclovir 500 mg tablets', 'Per tablet', cost('famciclovir500', 1)],
          ],
        },
        note: MED_NOTE + ' Acyclovir and famciclovir are priced per tablet because the number of tablets depends on the regimen the physician chooses.',
      },
      {
        id: 'in-person',
        h2: 'When a cold sore needs in-person care',
        byline: true,
        paras: [
          'Be seen in person for sores near or in the eye, a sore that spreads widely or does not heal within about two weeks, fever with many sores, or a weakened immune system.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/cold-sore-treatment-online/', label: 'Cold sore treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does cold sore treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-valacyclovir',
        question: 'How much is valacyclovir for a cold sore?',
        answer: `The labeled cold sore course is four 1 gram tablets taken as 2 grams twice in one day. Pharmacies paid ${cost('valacyclovir1g', 4)} for four tablets, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin.`,
      },
      urgentCareFaq('a cold sore'),
    ],
    refs: ['ref-label-valacyclovir', 'ref-aad-coldsore', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Shingles ───────────────────────────────────────────────────────────
  pages['shingles-cost'] = {
    slug: 'shingles-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Shingles treatment cost',
    title: 'How Much Does Shingles Treatment Cost in 2026?',
    metaTitle: 'Shingles Treatment Cost (2026): Valacyclovir and Antivirals, From Public Data | TeleDirectMD',
    metaDescription:
      'What treating shingles costs in 2026: the 7-day valacyclovir course on the FDA label, what pharmacies pay for each preferred antiviral, and why starting within 72 hours matters.',
    ogTitle: 'What shingles treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of treating herpes zoster (shingles)',
    sub: 'A 7-day antiviral course, priced from public data, and why the timing matters more than the price.',
    quickAnswer:
      `CDC lists acyclovir, valacyclovir and famciclovir as the preferred antivirals for shingles, most effective within 72 hours of symptom onset [[ref-cdc-zoster]]. The FDA-labeled valacyclovir course is 1 gram 3 times a day for 7 days [[ref-label-valacyclovir]], and pharmacies paid **${cost('valacyclovir1g', 21)}** for those 21 tablets [[ref-nadac]]. ` +
      `The visit is the larger cost: Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Shingles treatment', [
        ['Tests', 'Usually none', 'Shingles is usually recognized from the rash and its pattern.'],
        ['Antiviral', cost('valacyclovir1g', 21), 'Valacyclovir 1 gram 3 times a day for 7 days (21 tablets) [[ref-label-valacyclovir]].'],
      ]),
      {
        id: 'timing',
        h2: 'Start early: within 72 hours',
        paras: [
          'CDC says antiviral treatment is most effective within 72 hours of symptom onset, and that the antivirals speed healing of the rash, reduce new lesions and viral shedding, and lessen acute pain [[ref-cdc-zoster]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Antivirals: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of shingles antivirals',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Valacyclovir 1 gram tablets', '21 tablets (labeled 7-day course)', cost('valacyclovir1g', 21)],
            ['Acyclovir 800 mg tablets', 'Per tablet', cost('acyclovir800', 1)],
            ['Famciclovir 500 mg tablets', 'Per tablet', cost('famciclovir500', 1)],
          ],
        },
        note: MED_NOTE + ' Acyclovir and famciclovir are priced per tablet because the count depends on the regimen the physician chooses.',
      },
      {
        id: 'in-person',
        h2: 'When shingles needs in-person or emergency care',
        byline: true,
        paras: [
          'Get in-person care right away for a rash on the forehead, nose or around the eye, any eye pain or vision change, weakness of the face, confusion, a rash that spreads over much of the body, or a weakened immune system. Shingles near the eye can damage vision, so CDC stresses early diagnosis and treatment [[ref-cdc-zoster]].',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/shingles-treatment-online/', label: 'Shingles treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does shingles treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-valacyclovir',
        question: 'How much is valacyclovir for shingles?',
        answer: `The labeled course is 21 tablets of 1 gram (3 a day for 7 days). Pharmacies paid ${cost('valacyclovir1g', 21)} for them, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin.`,
      },
      {
        id: 'faq-late',
        question: 'Is it too late for an antiviral after 3 days?',
        answer: 'CDC says treatment is most effective within 72 hours of symptom onset. After that, a physician decides case by case, especially when the eye is involved or new blisters are still forming.',
      },
      urgentCareFaq('shingles'),
    ],
    refs: ['ref-cdc-zoster', 'ref-label-valacyclovir', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Migraine ───────────────────────────────────────────────────────────
  pages['migraine-treatment-cost'] = {
    slug: 'migraine-treatment-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Migraine treatment cost',
    title: 'How Much Does Migraine Treatment Cost in 2026?',
    metaTitle: 'Migraine Treatment Cost (2026): Triptans and Preventives, From Public Data | TeleDirectMD',
    metaDescription:
      'What migraine medicine costs in 2026: what pharmacies pay for generic sumatriptan, rizatriptan, propranolol and topiramate, plus Medicare and employer plan visit benchmarks.',
    ogTitle: 'What migraine treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of acute and preventive migraine medicines',
    sub: 'Generic triptans and preventives, priced from public data, and the visit that renews them.',
    quickAnswer:
      `Generic migraine medicines are inexpensive. Pharmacies paid **${cost('sumatriptan50', 10)}** for 10 tablets of sumatriptan 50 mg and **${cost('rizatriptan10', 10)}** for 10 tablets of rizatriptan 10 mg [[ref-nadac]]. ` +
      `For prevention, topiramate and propranolol are among the medicines a joint AAN and American Headache Society guideline rates effective [[ref-aan-migraine]]; pharmacies paid **${cost('topiramate25', 30)}** and **${cost('propranolol40', 30)}** for 30 tablets of each [[ref-nadac]]. ` +
      `Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Migraine treatment', [
        ['Tests or imaging', 'Usually none', 'A typical, unchanged migraine pattern does not need imaging; new or different headaches are assessed in person.'],
        ['Medicine', span('topiramate25', 30, 'sumatriptan100', 10), 'What pharmacies paid for the generics below.'],
      ]),
      {
        id: 'prevention',
        h2: 'Prevention medicines with the strongest evidence',
        paras: [
          'An evidence-based guideline from the American Academy of Neurology and the American Headache Society found divalproex, valproate, topiramate, metoprolol, propranolol and timolol effective for preventing episodic migraine in adults [[ref-aan-migraine]]. Most of these are inexpensive generics.',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Migraine medicines: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of migraine medicines',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Sumatriptan 50 mg (for attacks)', '10 tablets', cost('sumatriptan50', 10)],
            ['Sumatriptan 100 mg (for attacks)', '10 tablets', cost('sumatriptan100', 10)],
            ['Rizatriptan 10 mg (for attacks)', '10 tablets', cost('rizatriptan10', 10)],
            ['Topiramate 25 mg (prevention)', '30 tablets', cost('topiramate25', 30)],
            ['Topiramate 50 mg (prevention)', '30 tablets', cost('topiramate50', 30)],
            ['Propranolol 40 mg (prevention)', '30 tablets', cost('propranolol40', 30)],
          ],
        },
        note: MED_NOTE + ' Quantities are for comparison, not a dosing recommendation.',
      },
      {
        id: 'in-person',
        h2: 'When a headache needs emergency care',
        byline: true,
        paras: [
          'Go to the emergency room for a sudden, severe headache (the worst of your life), a headache with fever and stiff neck, confusion, weakness, numbness, trouble speaking or vision loss, a headache after a head injury, or a new headache pattern after age 50. These are not migraine refills.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('TeleDirectMD does not prescribe controlled substances, and every prescription is limited to a 90-day supply.'),
      links: [
        { href: '/migraine-refills-online/', label: 'Migraine refills online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does migraine treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-sumatriptan',
        question: 'How much is sumatriptan without insurance?',
        answer: `Pharmacies paid ${cost('sumatriptan50', 10)} for 10 tablets of generic sumatriptan 50 mg and ${cost('sumatriptan100', 10)} for 10 tablets of 100 mg, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin.`,
      },
      {
        id: 'faq-prevention',
        question: 'Which migraine prevention medicines have the best evidence?',
        answer: 'A joint AAN and American Headache Society guideline rated divalproex, valproate, topiramate, metoprolol, propranolol and timolol effective for preventing episodic migraine in adults.',
      },
      urgentCareFaq('a migraine'),
    ],
    refs: ['ref-aan-migraine', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Birth control refills ──────────────────────────────────────────────
  pages['birth-control-refills-cost'] = {
    slug: 'birth-control-refills-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Birth control refill cost',
    title: 'How Much Do Birth Control Pills Cost in 2026?',
    metaTitle: 'Birth Control Pill Cost (2026): Generic Pills, From Public Data | TeleDirectMD',
    metaDescription:
      'What generic birth control pills cost in 2026: what pharmacies pay per 28 tablets for common combined and progestin-only pills, plus Medicare and employer plan visit benchmarks.',
    ogTitle: 'What birth control pills cost in 2026',
    ogImage: OG,
    about: 'Cost of generic oral contraceptive pills and the visit to renew them',
    sub: 'Generic pills, priced per 28 tablets from public data, and the visit that renews them.',
    quickAnswer:
      `Generic birth control pills cost pharmacies a few dollars per 28 tablets: **${cost('norethindrone035', 28)}** for the progestin-only pill (norethindrone 0.35 mg) and **${cost('nethEe', 28)}** to **${cost('lngEe', 28)}** for common combined pills [[ref-nadac]]. ` +
      `The visit to start or renew them is the larger cost: Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Birth control refill', [
        ['Tests', 'Usually none for pills', 'Your physician may ask for a recent blood pressure reading.'],
        ['Pills', `${span('norethindrone035', 28, 'lngEe', 28)} per 28 tablets`, 'What pharmacies paid for the generics below.'],
      ]),
      {
        id: 'eligibility',
        h2: 'Which pill is safe for you',
        paras: [
          'Which pill is safe depends on your health history. CDC publishes the U.S. Medical Eligibility Criteria for Contraceptive Use, which physicians use to judge which methods are safe for people with particular conditions [[ref-cdc-mec]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Generic pills: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of generic birth control pills',
          head: ['Pill', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Norethindrone 0.35 mg (progestin-only)', '28 tablets', cost('norethindrone035', 28)],
            ['Norethindrone and ethinyl estradiol 1 mg/20 mcg', '28 tablets', cost('nethEe', 28)],
            ['Drospirenone and ethinyl estradiol 3 mg/20 or 30 mcg', '28 tablets', cost('drspEe', 28)],
            ['Levonorgestrel and ethinyl estradiol 0.15 mg/30 mcg', '28 tablets', cost('lngEe', 28)],
          ],
        },
        note: MED_NOTE + ' Priced as 28 tablets for comparison; packs differ in how many active and inactive tablets they hold.',
      },
      {
        id: 'in-person',
        h2: 'When to be seen in person',
        byline: true,
        paras: [
          'Get urgent care for leg pain or swelling, chest pain, shortness of breath, a sudden severe headache, weakness or vision changes while on an estrogen-containing pill. See a clinician in person for high blood pressure readings, a possible pregnancy, or if you want an IUD or implant.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('Every prescription is limited to a 90-day supply.'),
      links: [
        { href: '/birth-control-refills-online/', label: 'Birth control refills online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much do birth control pills cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-cheapest',
        question: 'What is the cheapest birth control pill?',
        answer: `Of the generics checked, the progestin-only pill norethindrone 0.35 mg had the lowest pharmacy acquisition cost, ${cost('norethindrone035', 28)} per 28 tablets (CMS NADAC, rates effective ${NADAC_EFF}). The right pill depends on your health history, not only the price.`,
      },
      urgentCareFaq('a birth control refill'),
    ],
    refs: ['ref-cdc-mec', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Erectile dysfunction ───────────────────────────────────────────────
  pages['erectile-dysfunction-cost'] = {
    slug: 'erectile-dysfunction-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Erectile dysfunction treatment cost',
    title: 'How Much Does Erectile Dysfunction Treatment Cost in 2026?',
    metaTitle: 'ED Treatment Cost (2026): Generic Sildenafil and Tadalafil, From Public Data | TeleDirectMD',
    metaDescription:
      'What ED medicine costs in 2026: what pharmacies pay for generic sildenafil and tadalafil, the labeled starting doses, and Medicare and employer plan visit benchmarks.',
    ogTitle: 'What ED treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of generic sildenafil and tadalafil',
    sub: 'Generic sildenafil and tadalafil, priced from public data, and the visit around them.',
    quickAnswer:
      `Generic ED pills are inexpensive. Pharmacies paid **${cost('sildenafil50', 10)}** for 10 tablets of sildenafil 50 mg, the usual labeled dose [[ref-label-viagra]], and **${cost('tadalafil5', 30)}** for 30 tablets of tadalafil 5 mg for daily use [[ref-nadac]]. ` +
      `The visit is the larger cost: Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('ED treatment', [
        ['Tests', 'Sometimes', 'ED can be an early sign of heart disease or diabetes, so checkups and blood tests may be advised; lab prices are not shown here.'],
        ['Medicine', span('sildenafil50', 10, 'tadalafil25', 30), 'What pharmacies paid for the generics below.'],
      ]),
      {
        id: 'options',
        h2: 'Treatment options',
        paras: [
          'The AUA guideline uses shared decision-making as the cornerstone of care: every treatment that is not contraindicated can be a first-line option, whatever its invasiveness [[ref-aua-ed]]. Pills are the most common starting point. The sildenafil label gives 50 mg, as needed about 1 hour before sex, as the dose for most patients [[ref-label-viagra]], and the tadalafil label starts daily use at 2.5 mg [[ref-label-cialis]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Generic ED pills: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of generic ED medicines',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Sildenafil 50 mg (as needed)', '10 tablets', cost('sildenafil50', 10)],
            ['Sildenafil 100 mg (as needed)', '10 tablets', cost('sildenafil100', 10)],
            ['Tadalafil 20 mg (as needed)', '10 tablets', cost('tadalafil20', 10)],
            ['Tadalafil 2.5 mg (daily)', '30 tablets', cost('tadalafil25', 30)],
            ['Tadalafil 5 mg (daily)', '30 tablets', cost('tadalafil5', 30)],
          ],
        },
        note: MED_NOTE + ' Quantities are for comparison, not a dosing recommendation.',
      },
      {
        id: 'in-person',
        h2: 'When ED needs in-person care',
        byline: true,
        paras: [
          'These pills are not safe with nitrate medicines for chest pain. Get emergency care for chest pain during sex or an erection lasting more than 4 hours. See a clinician in person for ED after a pelvic injury or surgery, a curved or painful erection, or symptoms of heart disease.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/erectile-dysfunction-treatment-online/', label: 'ED treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does ED treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-sildenafil',
        question: 'How much is generic sildenafil?',
        answer: `Pharmacies paid ${cost('sildenafil50', 10)} for 10 tablets of 50 mg and ${cost('sildenafil100', 10)} for 10 tablets of 100 mg, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin.`,
      },
      {
        id: 'faq-daily',
        question: 'Daily tadalafil or as-needed: which costs less?',
        answer: `It depends on how often you would use it. Pharmacies paid ${cost('tadalafil5', 30)} for 30 tablets of daily tadalafil 5 mg and ${cost('tadalafil20', 10)} for 10 tablets of as-needed 20 mg (CMS NADAC). The right choice is a medical one as well as a price one.`,
      },
      urgentCareFaq('ED'),
    ],
    refs: ['ref-label-viagra', 'ref-label-cialis', 'ref-aua-ed', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Hair loss ──────────────────────────────────────────────────────────
  pages['hair-loss-treatment-cost'] = {
    slug: 'hair-loss-treatment-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Hair loss treatment cost',
    title: 'How Much Does Hair Loss Treatment Cost in 2026?',
    metaTitle: 'Hair Loss Treatment Cost (2026): Finasteride and Minoxidil, From Public Data | TeleDirectMD',
    metaDescription:
      'What hair loss treatment costs in 2026: what pharmacies pay for generic finasteride 1 mg and over-the-counter minoxidil, what each label says, and visit benchmarks.',
    ogTitle: 'What hair loss treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of finasteride and minoxidil for pattern hair loss',
    sub: 'Finasteride and minoxidil, priced from public data, and what each can and cannot do.',
    quickAnswer:
      `Pharmacies paid **${cost('finasteride1', 30)}** for 30 tablets of generic finasteride 1 mg, the labeled one-a-day dose for male pattern hair loss in men only [[ref-label-finasteride]], and **${cost('minoxidil5Foam', 60)}** for 60 g of over-the-counter minoxidil 5% foam [[ref-nadac]]. ` +
      `Both are ongoing treatments: if you stop minoxidil, you lose its benefits [[ref-aad-hairloss]]. Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Hair loss treatment', [
        ['Tests', 'Sometimes', 'Sudden or patchy hair loss can need blood tests; lab prices are not shown here.'],
        ['Medicine', span('finasteride1', 30, 'minoxidil5Sol', 60), 'What pharmacies paid for the products below.'],
      ]),
      {
        id: 'what-works',
        h2: 'What each treatment can do',
        paras: [
          'Minoxidil can help early hair loss but cannot regrow an entire head of hair; results usually take 6 to 12 months, and stopping it loses the benefit [[ref-aad-hairloss]].',
          'Finasteride 1 mg is labeled for male pattern hair loss in men only, one tablet a day, and is not indicated for women [[ref-label-finasteride]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Hair loss products: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of hair loss treatments',
          head: ['Product', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Finasteride 1 mg (men only)', '30 tablets', cost('finasteride1', 30)],
            ['Minoxidil 5% foam, OTC', '60 g', cost('minoxidil5Foam', 60)],
            ['Minoxidil 5% solution, OTC', '60 mL', cost('minoxidil5Sol', 60)],
          ],
        },
        note: MED_NOTE + OTC_NOTE,
      },
      {
        id: 'in-person',
        h2: 'When hair loss needs in-person care',
        byline: true,
        paras: [
          'See a clinician in person for sudden hair loss, patches of complete loss, scalp pain, scarring, redness or scaling, hair loss with other symptoms such as weight change or fatigue, or hair loss in women with irregular periods or new facial hair.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/hair-loss-treatment-online/', label: 'Hair loss treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does hair loss treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-finasteride',
        question: 'How much is generic finasteride for hair loss?',
        answer: `Pharmacies paid ${cost('finasteride1', 30)} for 30 tablets of finasteride 1 mg, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin. Finasteride 1 mg is labeled for men only.`,
      },
      {
        id: 'faq-results',
        question: 'How long until minoxidil works?',
        answer: 'The American Academy of Dermatology says results usually take 6 to 12 months, and the benefit is lost if you stop using it.',
      },
      urgentCareFaq('hair loss'),
    ],
    refs: ['ref-label-finasteride', 'ref-aad-hairloss', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Diabetes refills ───────────────────────────────────────────────────
  pages['diabetes-refills-cost'] = {
    slug: 'diabetes-refills-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Diabetes medication cost',
    title: 'How Much Do Diabetes Medications Cost in 2026?',
    metaTitle: 'Diabetes Medication Cost (2026): Metformin, SGLT2s and Insulin, From Public Data | TeleDirectMD',
    metaDescription:
      'What type 2 diabetes medicines cost in 2026: what pharmacies pay for metformin, glipizide, generic and brand SGLT2 inhibitors and insulin glargine, plus visit benchmarks.',
    ogTitle: 'What diabetes medications cost in 2026',
    ogImage: OG,
    about: 'Cost of common type 2 diabetes medicines',
    sub: 'Metformin, SGLT2 inhibitors and long-acting insulin, priced from public data.',
    quickAnswer:
      `Metformin, which the ADA calls effective, safe and inexpensive [[ref-ada-2026-s9]], cost pharmacies **${cost('metformin500', 60)}** for 60 tablets of 500 mg [[ref-nadac]]. ` +
      `Prices rise sharply for newer drugs: generic dapagliflozin 10 mg cost **${cost('dapagliflozin10', 30)}** for 30 tablets, against **${cost('farxiga10', 30)}** for brand Farxiga and **${cost('jardiance10', 30)}** for brand Jardiance [[ref-nadac]]. ` +
      `Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Diabetes refill', [
        ['Tests', 'Regularly', 'A1C and kidney function are checked on a schedule; lab prices are not shown here.'],
        ['Medicine', span('metforminEr500', 30, 'farxiga10', 30), 'What pharmacies paid for the medicines below.'],
      ]),
      {
        id: 'metformin',
        h2: 'Why metformin is usually first',
        paras: [
          'The ADA Standards of Care 2026 describe metformin as effective, safe, inexpensive and widely available, reducing risks of microvascular complications, cardiovascular events and death, and note that it comes as an immediate-release form for twice-daily dosing or an extended-release form taken once a day [[ref-ada-2026-s9]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Diabetes medicines: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of diabetes medicines',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Metformin 500 mg (immediate release)', '60 tablets', cost('metformin500', 60)],
            ['Metformin 1,000 mg (immediate release)', '60 tablets', cost('metformin1000', 60)],
            ['Metformin ER 500 mg (extended release)', '30 tablets', cost('metforminEr500', 30)],
            ['Glipizide 5 mg', '30 tablets', cost('glipizide5', 30)],
            ['Dapagliflozin 10 mg (generic)', '30 tablets', cost('dapagliflozin10', 30)],
            ['Farxiga 10 mg (brand dapagliflozin)', '30 tablets', cost('farxiga10', 30)],
            ['Jardiance 10 mg (brand empagliflozin)', '30 tablets', cost('jardiance10', 30)],
            ['Insulin glargine-yfgn U-100 pens', '15 mL (five 3 mL pens)', cost('glargineYfgnPen', 15)],
          ],
        },
        note: MED_NOTE + ' Quantities are for comparison, not a dosing recommendation. A range means NADAC lists more than one rate for different package sizes.',
      },
      {
        id: 'in-person',
        h2: 'When diabetes needs in-person or emergency care',
        byline: true,
        paras: [
          'Get emergency care for very high blood sugar with vomiting, confusion, deep or fast breathing, or signs of dehydration, and for low blood sugar that does not respond to treatment. See a clinician in person for a foot wound, a new diagnosis, or numbers that stay far from your goal.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('GLP-1 medicines are not prescribed as part of diabetes care at TeleDirectMD, and every prescription is limited to a 90-day supply.'),
      links: [
        { href: '/diabetes-refills-online/', label: 'Diabetes refills online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much do diabetes medications cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-metformin',
        question: 'How much is metformin without insurance?',
        answer: `Pharmacies paid ${cost('metformin500', 60)} for 60 tablets of metformin 500 mg, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin.`,
      },
      {
        id: 'faq-generic-sglt2',
        question: 'Is there a generic for Farxiga?',
        answer: `Yes. Generic dapagliflozin 10 mg is in the CMS NADAC file: pharmacies paid ${cost('dapagliflozin10', 30)} for 30 tablets, against ${cost('farxiga10', 30)} for brand Farxiga (rates effective ${NADAC_EFF}).`,
      },
      urgentCareFaq('a diabetes refill'),
    ],
    refs: ['ref-ada-2026-s9', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Acne ───────────────────────────────────────────────────────────────
  pages['acne-treatment-cost'] = {
    slug: 'acne-treatment-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Acne treatment cost',
    title: 'How Much Does Acne Treatment Cost in 2026?',
    metaTitle: 'Acne Treatment Cost (2026): Retinoids, Benzoyl Peroxide and Doxycycline, From Public Data | TeleDirectMD',
    metaDescription:
      'What acne treatment costs in 2026: what pharmacies pay for adapalene, tretinoin, benzoyl peroxide and doxycycline, the treatments the 2024 AAD guideline strongly recommends.',
    ogTitle: 'What acne treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of first-line acne treatments',
    sub: 'The treatments the AAD strongly recommends, priced from public data.',
    quickAnswer:
      `The 2024 AAD acne guideline strongly recommends topical benzoyl peroxide, topical retinoids such as adapalene and tretinoin, and antibiotics such as oral doxycycline [[ref-aad-acne]]. ` +
      `Pharmacies paid **${cost('adapaleneGelOtc', 45)}** for a 45 g tube of over-the-counter adapalene 0.1% gel, **${cost('tretinoin025Cream', 20)}** for 20 g of tretinoin 0.025% cream and **${cost('doxy100', 30)}** for 30 doxycycline 100 mg capsules or tablets [[ref-nadac]]. ` +
      `Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Acne treatment', [
        ['Tests', 'Usually none', 'Acne is diagnosed by looking at the skin.'],
        ['Medicine', span('doxy100', 30, 'tretinoin05Cream', 20), 'What pharmacies paid for the products below.'],
      ]),
      settingSection,
      {
        id: 'medicine',
        h2: 'Acne treatments: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of acne treatments',
          head: ['Product', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Adapalene 0.1% gel, OTC (retinoid)', '45 g tube', cost('adapaleneGelOtc', 45)],
            ['Tretinoin 0.025% cream (retinoid)', '20 g tube', cost('tretinoin025Cream', 20)],
            ['Tretinoin 0.05% cream (retinoid)', '20 g tube', cost('tretinoin05Cream', 20)],
            ['Benzoyl peroxide 5% gel, OTC', '45 g', cost('bpo5Gel', 45)],
            ['Doxycycline hyclate 100 mg (oral antibiotic)', '30 capsules or tablets', cost('doxy100', 30)],
          ],
        },
        note: MED_NOTE + OTC_NOTE + ' A range means NADAC lists more than one rate for different package sizes or forms.',
      },
      {
        id: 'in-person',
        h2: 'When acne needs in-person care',
        byline: true,
        paras: [
          'See a dermatologist in person for deep, painful nodules or cysts, scarring, acne that has not improved after several months of treatment, or when isotretinoin may be needed, since it requires an in-person monitoring program.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/acne-treatment-online/', label: 'Acne treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does acne treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-tretinoin',
        question: 'How much is tretinoin without insurance?',
        answer: `Pharmacies paid ${cost('tretinoin025Cream', 20)} for 20 g of tretinoin 0.025% cream and ${cost('tretinoin05Cream', 20)} for 20 g of 0.05% cream, from the CMS NADAC survey (rates effective ${NADAC_EFF}). The counter price adds the pharmacy's fee and margin.`,
      },
      {
        id: 'faq-otc',
        question: 'Can I start with over-the-counter acne treatment?',
        answer: 'Adapalene 0.1% gel and benzoyl peroxide are sold over the counter, and the 2024 AAD guideline strongly recommends both topical retinoids and benzoyl peroxide.',
      },
      urgentCareFaq('acne'),
    ],
    refs: ['ref-aad-acne', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Eczema ─────────────────────────────────────────────────────────────
  pages['eczema-treatment-cost'] = {
    slug: 'eczema-treatment-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Eczema treatment cost',
    title: 'How Much Does Eczema Treatment Cost in 2026?',
    metaTitle: 'Eczema Treatment Cost (2026): Steroid Creams and Tacrolimus, From Public Data | TeleDirectMD',
    metaDescription:
      'What eczema treatment costs in 2026: what pharmacies pay for triamcinolone, hydrocortisone and tacrolimus, the topical treatments the AAD guideline strongly recommends.',
    ogTitle: 'What eczema treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of topical treatments for atopic dermatitis in adults',
    sub: 'Steroid creams and tacrolimus, priced from public data.',
    quickAnswer:
      `The AAD guideline strongly recommends moisturizers, topical corticosteroids and topical calcineurin inhibitors for adults with eczema [[ref-aad-ad-topical]]. ` +
      `Pharmacies paid **${cost('triamcinolone01Cream', 30)}** for 30 g of triamcinolone 0.1% cream, **${cost('hydrocortisone25Cream', 30)}** for 30 g of hydrocortisone 2.5% cream and **${cost('tacrolimus01Oint', 30)}** for 30 g of tacrolimus 0.1% ointment [[ref-nadac]]. ` +
      `Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Eczema treatment', [
        ['Tests', 'Usually none', 'Eczema is usually diagnosed by looking at the skin and its history.'],
        ['Medicine', span('triamcinolone01Cream', 30, 'tacrolimus003Oint', 30), 'What pharmacies paid for the products below.'],
      ]),
      {
        id: 'what-works',
        h2: 'What the guideline recommends',
        paras: [
          'The AAD guideline on topical therapy for adults strongly recommends moisturizers, topical corticosteroids, topical calcineurin inhibitors such as tacrolimus, and topical PDE-4 and JAK inhibitors, and conditionally recommends against topical antihistamines [[ref-aad-ad-topical]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Eczema treatments: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of eczema treatments',
          head: ['Product', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Triamcinolone 0.1% cream (medium-strength steroid)', '30 g', cost('triamcinolone01Cream', 30)],
            ['Hydrocortisone 2.5% cream (low-strength steroid)', '30 g', cost('hydrocortisone25Cream', 30)],
            ['Tacrolimus 0.03% ointment (calcineurin inhibitor)', '30 g', cost('tacrolimus003Oint', 30)],
            ['Tacrolimus 0.1% ointment (calcineurin inhibitor)', '30 g', cost('tacrolimus01Oint', 30)],
          ],
        },
        note: MED_NOTE + ' A range means NADAC lists more than one rate for different package sizes; larger jars cost less per gram.',
      },
      {
        id: 'in-person',
        h2: 'When eczema needs in-person care',
        byline: true,
        paras: [
          'See a clinician in person for skin that is weeping, crusted or very painful (possible infection), clusters of punched-out sores (a herpes infection that needs urgent care), eczema covering large areas, or eczema that does not respond to prescription creams and may need a dermatologist and systemic treatment.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/eczema-treatment-online/', label: 'Eczema treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does eczema treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-triamcinolone',
        question: 'How much is triamcinolone cream?',
        answer: `Pharmacies paid ${cost('triamcinolone01Cream', 30)} for 30 g of triamcinolone 0.1% cream, from the CMS NADAC survey (rates effective ${NADAC_EFF}); the range reflects different package sizes. The counter price adds the pharmacy's fee and margin.`,
      },
      urgentCareFaq('eczema'),
    ],
    refs: ['ref-aad-ad-topical', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Seasonal allergies ─────────────────────────────────────────────────
  pages['seasonal-allergies-cost'] = {
    slug: 'seasonal-allergies-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Seasonal allergy treatment cost',
    title: 'How Much Does Seasonal Allergy Treatment Cost in 2026?',
    metaTitle: 'Allergy Treatment Cost (2026): Nasal Steroids and Antihistamines, From Public Data | TeleDirectMD',
    metaDescription:
      'What seasonal allergy treatment costs in 2026: what pharmacies pay for fluticasone nasal spray, loratadine, cetirizine and montelukast, and what the allergic rhinitis guideline recommends.',
    ogTitle: 'What seasonal allergy treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of treating allergic rhinitis (hay fever)',
    sub: 'Nasal steroid sprays and antihistamines, priced from public data.',
    quickAnswer:
      `The allergic rhinitis guideline makes strong recommendations for intranasal steroids and for oral second-generation antihistamines [[ref-aaohns-ar]]. ` +
      `Pharmacies paid **${cost('fluticasoneRx', 16)}** for a 16 g bottle of prescription fluticasone nasal spray, and **${cost('loratadineOtc', 30)}** and **${cost('cetirizineOtc', 30)}** for 30 tablets of over-the-counter loratadine and cetirizine [[ref-nadac]]. ` +
      `Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('Allergy treatment', [
        ['Tests', 'Usually none', 'Allergy testing is for symptoms that do not respond to treatment; it is not priced here.'],
        ['Medicine', span('montelukast10', 30, 'fluticasoneRx', 16), 'What pharmacies paid for the products below.'],
      ]),
      {
        id: 'what-works',
        h2: 'What the guideline recommends',
        paras: [
          'The AAO-HNSF allergic rhinitis guideline strongly recommends intranasal steroids for people whose symptoms affect their quality of life, and oral second-generation (less sedating) antihistamines for people whose main complaints are sneezing and itching. It recommends against offering leukotriene blockers such as montelukast as the main treatment [[ref-aaohns-ar]].',
          'In 2020 FDA added a Boxed Warning about serious mental health side effects to montelukast and said that for allergic rhinitis it should be reserved for people who are not treated effectively with, or cannot tolerate, other allergy medicines [[ref-fda-montelukast]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'Allergy medicines: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of allergy medicines',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Fluticasone propionate 50 mcg nasal spray (prescription package)', '16 g bottle', cost('fluticasoneRx', 16)],
            ['Loratadine 10 mg, OTC', '30 tablets', cost('loratadineOtc', 30)],
            ['Cetirizine 10 mg, OTC', '30 tablets', cost('cetirizineOtc', 30)],
            ['Montelukast 10 mg (not first-line for allergies)', '30 tablets', cost('montelukast10', 30)],
          ],
        },
        note: MED_NOTE + OTC_NOTE + ' Fluticasone nasal spray is also sold over the counter.',
      },
      {
        id: 'in-person',
        h2: 'When allergy symptoms need in-person care',
        byline: true,
        paras: [
          'Get emergency care for trouble breathing, wheezing that does not settle, or swelling of the lips, tongue or throat. See a clinician in person for symptoms on one side only, nosebleeds that keep coming back, facial swelling, or symptoms that do not improve with treatment.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody(),
      links: [
        { href: '/seasonal-allergies-treatment-online/', label: 'Seasonal allergy treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does allergy treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-montelukast',
        question: 'Should I take montelukast for hay fever?',
        answer: 'Usually not first. The allergic rhinitis guideline recommends against leukotriene blockers as the main treatment, and FDA says montelukast should be reserved for people who do not respond to or cannot tolerate other allergy medicines, because of its Boxed Warning about mental health side effects.',
      },
      urgentCareFaq('allergies'),
    ],
    refs: ['ref-aaohns-ar', 'ref-fda-montelukast', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── COVID-19 ───────────────────────────────────────────────────────────
  pages['covid-19-treatment-cost'] = {
    slug: 'covid-19-treatment-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'COVID-19 treatment cost',
    title: 'How Much Does COVID-19 Treatment Cost in 2026?',
    metaTitle: 'COVID-19 Treatment Cost (2026): Paxlovid and Symptom Care, From Public Data | TeleDirectMD',
    metaDescription:
      'What COVID-19 treatment costs in 2026: what pharmacies pay for Paxlovid, who CDC says it is for, the 5-day window, and Medicare and employer plan visit benchmarks.',
    ogTitle: 'What COVID-19 treatment costs in 2026',
    ogImage: OG,
    about: 'Cost of outpatient COVID-19 treatment',
    sub: 'Paxlovid and symptom relief, priced from public data, and the 5-day window that matters most.',
    quickAnswer:
      `Most people with COVID-19 need only symptom relief, which is inexpensive. For people at higher risk of severe illness, CDC lists ritonavir-boosted nirmatrelvir (Paxlovid), a 5-day oral treatment started within 5 days of symptoms [[ref-cdc-covid-outpt]]. ` +
      `Paxlovid is a brand-name drug: pharmacies paid **${cost('paxlovidTab', 30)}** for the standard 5-day course of 30 tablets [[ref-label-paxlovid]] [[ref-nadac]]. ` +
      `Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      visitPieces('COVID-19 treatment', [
        ['Tests', 'Often a home test', 'A home test can confirm COVID-19; test prices are not shown here.'],
        ['Medicine', `Under $2 for symptom relief; ${cost('paxlovidTab', 30)} for Paxlovid`, 'Paxlovid is for higher-risk patients only. What pharmacies paid is below.'],
      ]),
      {
        id: 'who',
        h2: 'Who an antiviral is for',
        paras: [
          'CDC lists ritonavir-boosted nirmatrelvir (Paxlovid) for adults, taken by mouth for 5 days and started within 5 days of symptom onset; in a clinical trial it reduced hospitalization and death by 87% in unvaccinated outpatients at higher risk of severe disease. It interacts with many other medicines, so a physician must check your medication list [[ref-cdc-covid-outpt]].',
        ],
      },
      settingSection,
      {
        id: 'medicine',
        h2: 'COVID-19 medicines: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of COVID-19 medicines',
          head: ['Medicine', 'Quantity priced', 'Pharmacy acquisition cost'],
          rows: [
            ['Paxlovid 300 mg;100 mg dose pack (brand)', '30 tablets (labeled 5-day course)', cost('paxlovidTab', 30)],
            ['Acetaminophen 500 mg, OTC', '30 tablets', cost('acetaminophen500Otc', 30)],
            ['Ibuprofen 200 mg, OTC', '30 tablets', cost('ibuprofen200Otc', 30)],
          ],
        },
        note: MED_NOTE + OTC_NOTE + ' The Paxlovid label dose is two nirmatrelvir 150 mg tablets and one ritonavir 100 mg tablet taken together twice a day for 5 days, 30 tablets in all [[ref-label-paxlovid]].',
      },
      {
        id: 'in-person',
        h2: 'When COVID-19 needs emergency care',
        byline: true,
        paras: [
          'Get emergency care for trouble breathing, chest pain or pressure, new confusion, inability to stay awake, or pale, gray or blue-colored skin, lips or nail beds.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('The physician decides whether an antiviral is appropriate after reviewing your risk factors and current medicines.'),
      links: [
        { href: '/covid-19-treatment-online/', label: 'COVID-19 treatment online' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does COVID-19 treatment cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-window',
        question: 'How soon do I need to start Paxlovid?',
        answer: 'CDC lists Paxlovid as a 5-day treatment started within 5 days of symptom onset, so test and seek care early if you are at higher risk.',
      },
      urgentCareFaq('COVID-19'),
    ],
    refs: ['ref-cdc-covid-outpt', 'ref-label-paxlovid', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── Online prescription (refills) ──────────────────────────────────────
  pages['online-prescription-cost'] = {
    slug: 'online-prescription-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'Online prescription cost',
    title: 'How Much Does an Online Prescription Refill Cost in 2026?',
    metaTitle: 'Online Prescription Refill Cost (2026): Visit and Generic Medicines, From Public Data | TeleDirectMD',
    metaDescription:
      'What a prescription refill costs in 2026: the visit benchmarks, and what pharmacies pay for 90 tablets of common generic blood pressure, cholesterol, thyroid, reflux and diabetes medicines.',
    ogTitle: 'What a prescription refill costs in 2026',
    ogImage: OG,
    about: 'Cost of renewing common long-term generic prescriptions',
    sub: 'The visit and the medicine, priced from public data, for common long-term generics.',
    quickAnswer:
      `For most long-term generics, the medicine costs less than the visit. Pharmacies paid **${cost('amlodipine5', 90)}** for 90 tablets of amlodipine 5 mg, **${cost('lisinopril10', 90)}** for lisinopril 10 mg and **${cost('atorvastatin20', 90)}** for atorvastatin 20 mg [[ref-nadac]]. ` +
      `For the visit, Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]], and employer plans paid an average of **${usd0(HCCI_2022.primaryCare)}** per primary care visit in 2022 [[ref-hcci]].`,
    sections: [
      visitPieces('Prescription refill', [
        ['Tests', 'Depends on the medicine', 'Some refills need periodic blood tests or a blood pressure reading; lab prices are not shown here.'],
        ['Medicine, 90 tablets', span('amlodipine5', 90, 'metoprololEr50', 90), 'What pharmacies paid for the generics below.'],
      ]),
      settingSection,
      {
        id: 'medicine',
        h2: 'Common generics: what pharmacies pay for 90 tablets',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of common generic refills',
          head: ['Medicine', 'Used for', 'Pharmacy acquisition cost, 90 tablets'],
          rows: [
            ['Amlodipine 5 mg', 'Blood pressure', cost('amlodipine5', 90)],
            ['Lisinopril 10 mg', 'Blood pressure', cost('lisinopril10', 90)],
            ['Metoprolol succinate ER 50 mg', 'Blood pressure', cost('metoprololEr50', 90)],
            ['Atorvastatin 20 mg', 'Cholesterol', cost('atorvastatin20', 90)],
            ['Levothyroxine 50 mcg', 'Hypothyroidism', cost('levothyroxine50', 90)],
            ['Omeprazole 20 mg', 'Acid reflux', cost('omeprazole20', 90)],
            ['Metformin 500 mg', 'Type 2 diabetes', cost('metformin500', 90)],
          ],
        },
        note: MED_NOTE + ' Priced as 90 tablets for comparison, not a dosing recommendation.',
      },
      {
        id: 'in-person',
        h2: 'When a refill needs in-person care',
        byline: true,
        paras: [
          'A refill by video is for a stable condition on a medicine you already take. Be seen in person for new or worsening symptoms, side effects, readings far outside your goal, overdue blood tests the medicine requires, or any emergency symptom such as chest pain or trouble breathing.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('TeleDirectMD does not prescribe controlled substances, and every prescription, including refills, is limited to a 90-day supply.'),
      links: [
        { href: '/what-we-treat/', label: 'What we treat' },
        { href: '/states-we-serve/', label: 'Check your state' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much does an online prescription refill cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-cheapest',
        question: 'Why is my pharmacy price higher than these numbers?',
        answer: `These are CMS NADAC acquisition costs, what pharmacies pay to buy the medicine (rates effective ${NADAC_EFF}). The counter price adds a dispensing fee and the pharmacy's margin, and it varies by pharmacy, so it is worth comparing.`,
      },
      urgentCareFaq('a prescription refill'),
    ],
    refs: ['ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: RELATED,
  };

  // ── UTI antibiotics ────────────────────────────────────────────────────
  // Uses the shared COURSES from condition-cost-data.js (passed in) so it matches the UTI page.
  const C = h.COURSES;
  pages['uti-antibiotics-cost'] = {
    slug: 'uti-antibiotics-cost',
    checked: CHECKED,
    method: METHOD,
    breadcrumb: 'UTI antibiotics cost',
    title: 'How Much Do UTI Antibiotics Cost in 2026?',
    metaTitle: 'UTI Antibiotics Cost (2026): Nitrofurantoin, TMP-SMX, Fosfomycin, From Public Data | TeleDirectMD',
    metaDescription:
      'What UTI antibiotics cost in 2026: what pharmacies pay for each first-line course for an uncomplicated bladder infection in women, and what the visit costs by setting.',
    ogTitle: 'What UTI antibiotics cost in 2026',
    ogImage: OG,
    about: 'Cost of first-line antibiotics for uncomplicated cystitis in women',
    sub: 'Each first-line antibiotic course, priced from public data.',
    quickAnswer:
      `First-line antibiotics for an uncomplicated bladder infection are inexpensive. Pharmacies paid **${usd(C.smxTmp)}** for a 3-day course of trimethoprim-sulfamethoxazole, **${usd(C.nitrofurantoin)}** for a 5-day course of nitrofurantoin and **${usd(C.fosfomycin)}** for a single dose of fosfomycin [[ref-nadac]], the options in the IDSA guideline [[ref-idsa-uti]]. ` +
      `The visit is the larger cost: Medicare's 2026 rate for a low-complexity office visit is **${usd(N.v99213)}** [[ref-pfs]].`,
    sections: [
      {
        id: 'medicine',
        h2: 'First-line antibiotics: what pharmacies pay',
        table: {
          ariaLabel: 'Pharmacy acquisition cost of first-line UTI antibiotics',
          head: ['Antibiotic', 'Course', 'Pharmacy acquisition cost'],
          rows: [
            ['Nitrofurantoin monohydrate/macrocrystals 100 mg', 'Twice a day for 5 days (10 capsules)', usd(C.nitrofurantoin)],
            ['Trimethoprim-sulfamethoxazole 160/800 mg', 'Twice a day for 3 days (6 tablets)', usd(C.smxTmp)],
            ['Fosfomycin 3 g', 'One dose', usd(C.fosfomycin)],
          ],
        },
        note: `NADAC per-unit cost times quantity, rates effective ${NADAC_EFF} [[ref-nadac]]. This is what pharmacies pay, not what you pay at the counter. First-line options follow the IDSA guideline [[ref-idsa-uti]]; which one is right depends on allergies, local resistance and kidney function.`,
      },
      settingSection,
      {
        id: 'in-person',
        h2: 'When UTI symptoms need in-person care',
        byline: true,
        paras: [
          'Be seen in person for fever, chills, back or side pain, nausea or vomiting (signs the infection may have reached the kidney), pregnancy, symptoms in a man, blood in the urine without other UTI symptoms, or symptoms that do not improve within 2 days of starting an antibiotic.',
        ],
      },
    ],
    tdmd: {
      h2: 'Where a $79 video visit fits',
      body: tdmdBody('UTI visits are for non-pregnant adult women with uncomplicated symptoms; men with urinary symptoms should be seen in person.'),
      links: [
        { href: '/uti-treatment-online/', label: 'UTI treatment online' },
        { href: '/cost/uti-treatment-cost/', label: 'Full UTI treatment cost' },
      ],
    },
    faqs: [
      { id: 'faq-cost', question: 'How much do UTI antibiotics cost without insurance?', answer: 'QUICK' },
      {
        id: 'faq-cheapest',
        question: 'What is the cheapest UTI antibiotic?',
        answer: `Of the first-line options, the 3-day course of trimethoprim-sulfamethoxazole had the lowest pharmacy acquisition cost, ${usd(C.smxTmp)} (CMS NADAC, rates effective ${NADAC_EFF}). It is not right for everyone: allergies and local resistance matter.`,
      },
      urgentCareFaq('a UTI'),
    ],
    refs: ['ref-idsa-uti', 'ref-nadac', 'ref-pfs', 'ref-hcci'],
    related: [
      { href: '/cost/uti-treatment-cost/', label: 'UTI treatment cost' },
      { href: '/cost/', label: 'All cost guides' },
    ],
  };

  return pages;
}
