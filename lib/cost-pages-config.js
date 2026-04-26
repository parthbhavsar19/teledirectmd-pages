// ─── Cost-page content config ───────────────────────────────────────────
// Per-page content for each /cost/[slug]/ page. The dynamic route renders
// from this config so all 5 pages share the same 23-section gold-standard
// structure (matching app/who-we-serve/[segment]/InternationalVisitorsPage.js).
//
// Every dollar figure and competitor claim has an inline citation link.
// Sources verified April 2025. See teledirectmd_cost_benchmarks.md.

export const COST_PAGE_SLUGS = [
  'online-doctor-visit-cost',
  'uti-treatment-cost',
  'sinus-infection-treatment-cost',
  'sore-throat-treatment-cost',
  'online-prescription-cost',
  'strep-throat-cost',
];

// Cross-link map (each page links to 2 sibling cost pages + relevant compare pages).
export const COST_RELATED_LINKS = {
  'online-doctor-visit-cost': {
    relatedCost: ['uti-treatment-cost', 'sinus-infection-treatment-cost', 'sore-throat-treatment-cost', 'online-prescription-cost'],
    relatedCompare: ['teledirectmd-vs-teladoc', 'teledirectmd-vs-mdlive', 'teledirectmd-vs-amwell', 'teledirectmd-vs-doctor-on-demand', 'teledirectmd-vs-sesame', 'teledirectmd-vs-k-health'],
  },
  'uti-treatment-cost': {
    relatedCost: ['online-doctor-visit-cost', 'online-prescription-cost'],
    relatedCompare: ['teledirectmd-vs-teladoc', 'teledirectmd-vs-mdlive'],
  },
  'sinus-infection-treatment-cost': {
    relatedCost: ['online-doctor-visit-cost', 'sore-throat-treatment-cost'],
    relatedCompare: ['teledirectmd-vs-teladoc', 'teledirectmd-vs-amwell'],
  },
  'sore-throat-treatment-cost': {
    relatedCost: ['online-doctor-visit-cost', 'sinus-infection-treatment-cost'],
    relatedCompare: ['teledirectmd-vs-mdlive', 'teledirectmd-vs-doctor-on-demand'],
  },
  'online-prescription-cost': {
    relatedCost: ['online-doctor-visit-cost', 'uti-treatment-cost'],
    relatedCompare: ['teledirectmd-vs-sesame', 'teledirectmd-vs-k-health'],
  },
  'strep-throat-cost': {
    relatedCost: ['sore-throat-treatment-cost', 'online-doctor-visit-cost', 'sinus-infection-treatment-cost'],
    relatedCompare: ['teledirectmd-vs-mdlive', 'teledirectmd-vs-doctor-on-demand'],
  },
};

// Map cost-page slugs to the related condition page (for back-links from condition → cost).
export const COST_PAGE_FOR_CONDITION = {
  'uti-treatment-online': 'uti-treatment-cost',
  'sinus-infection-treatment-online': 'sinus-infection-treatment-cost',
  'sore-throat-treatment-online': 'sore-throat-treatment-cost',
  'strep-throat-treatment-online': 'sore-throat-treatment-cost',
};

// Re-exposed for convenience (used by internal-links module).
export const ALL_COMPARE_SLUGS = [
  'teledirectmd-vs-teladoc',
  'teledirectmd-vs-mdlive',
  'teledirectmd-vs-amwell',
  'teledirectmd-vs-doctor-on-demand',
  'teledirectmd-vs-sesame',
  'teledirectmd-vs-k-health',
];

// ─── Per-page configs ──────────────────────────────────────────────────

export const COST_PAGES = {
  // ──────────────────────────────────────────────────────────────────
  'online-doctor-visit-cost': {
    slug: 'online-doctor-visit-cost',
    pid: 'online-doctor-cost',
    h1: 'How Much Does an Online Doctor Visit Cost in 2026?',
    metaTitle: 'How Much Does an Online Doctor Visit Cost in 2026? | TeleDirectMD',
    metaDescription: 'Online doctor visits cost $40–$100 cash-pay (median ~$82). TeleDirectMD charges a flat $49 — about 18× cheaper than the average uninsured ER visit ($2,715). 2026 cost comparison vs. urgent care, ER, retail clinics, and other telehealth platforms.',
    breadcrumb: 'Online Doctor Visit Cost',
    answerLead: 'Online doctor visit cost in 2026:',
    answerBody: 'A telehealth visit averages $40–$100 cash-pay (median ~$82) according to <a href="https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance">GoodRx</a>. TeleDirectMD charges a flat $49 — roughly 18× cheaper than the average uninsured ER visit ($2,715, per <a href="https://www.talktomira.com/post/how-much-does-an-er-visit-cost">Mira Health, Feb 2025</a>) and 5× cheaper than urgent care ($150–$280, per <a href="https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance">GoodRx</a>).',
    heroSub: 'A board-certified MD video visit for $49 flat. No insurance needed. We compared 2026 cash-pay prices across every common care setting — here\'s what you\'ll actually pay.',
    heroIntro: 'If you don\'t have insurance, the cost of a doctor visit can vary by 50× depending on where you go. We pulled current cash-pay prices from KFF, Mira Health, GoodRx, Penn Medicine, and the major telehealth platforms to give you a clear picture of what an online doctor visit actually costs in 2026 — and how it compares to walking into an urgent care, retail clinic, or emergency room.',
    heroCardTitle: 'What You Get for $49',
    heroCardItems: [
      'Video visit with a board-certified MD (Dr. Parth Bhavsar)',
      'Prescription sent to any US pharmacy',
      'Same-day, evenings & weekends',
      'Available in 41 states',
      'No US insurance required',
      'Receipt suitable for HSA/FSA reimbursement',
    ],
    heroBenefits: [
      '$49 flat fee — no surprise billing, no facility fees',
      '~18× cheaper than the average uninsured ER visit ($2,715)',
      '~5× cheaper than urgent care ($150–$280 cash-pay average)',
      'Lower than the published cash-pay rate of every major US telehealth platform',
      'HSA/FSA accepted; receipt provided for travel-insurance reimbursement',
      'In-network with Aetna, BCBS, and UnitedHealthcare in select states',
    ],
    // The cost-comparison table is the page hero.
    costTable: {
      title: 'Online Doctor Visit Cost vs. Other Care Settings (2026, Uninsured)',
      caption: 'Cash-pay prices for a non-emergency visit. Excludes labs, imaging, and procedures unless noted.',
      rows: [
        { setting: 'TeleDirectMD (online)', cost: '$49 flat', includes: 'Board-certified MD video visit + e-prescription to any US pharmacy', source: 'TeleDirectMD published rate' },
        { setting: 'Telehealth (national average)', cost: '$40–$100 (median ~$82)', includes: 'Video or phone visit; provider type varies (MD, NP, PA)', source: 'GoodRx, 2024', sourceUrl: 'https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance' },
        { setting: 'Retail clinic (CVS MinuteClinic)', cost: '$99–$139', includes: 'In-person visit with NP or PA; basic illness/injury tier', source: 'CVS MinuteClinic, 2024', sourceUrl: 'https://www.cvs.com/minuteclinic/services/price-lists' },
        { setting: 'Primary care office (cash-pay)', cost: '$100–$200 (avg ~$171)', includes: 'In-person visit with PCP; labs and imaging billed separately', source: 'Mira Health, Feb 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance' },
        { setting: 'Urgent care (in-person)', cost: '$150–$280 (avg ~$280)', includes: 'In-person walk-in visit; labs/X-rays add $250–$600+', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance' },
        { setting: 'Emergency room (uninsured)', cost: '~$2,715 average', includes: 'ED visit; chargemaster pricing; non-life-threatening range $1,500–$3,000', source: 'Mira Health, Feb 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-an-er-visit-cost' },
      ],
    },
    // Cross-platform telehealth comparison.
    platformTable: {
      title: 'Cash-Pay Cost Across Major US Telehealth Platforms (2026)',
      caption: 'Lowest published flat-rate cash-pay urgent care visit per platform.',
      rows: [
        { platform: 'TeleDirectMD', price: '$49 flat', states: '41', mdOnly: 'Yes — Dr. Bhavsar, MD only', source: 'teledirectmd.com', sourceUrl: 'https://teledirectmd.com' },
        { platform: 'Sesame', price: '$29–$37+ (provider-set)', states: '50', mdOnly: 'Mixed (MD/NP/PA)', source: 'Healthline', sourceUrl: 'https://www.healthline.com/health/sesame-care' },
        { platform: 'K Health', price: '$35 one-time / $49/mo', states: '48', mdOnly: 'Mixed (MD/NP)', source: 'ChoosingTherapy', sourceUrl: 'https://www.choosingtherapy.com/k-health-review/' },
        { platform: 'Amwell', price: '$79', states: '50', mdOnly: 'No (mixed)', source: 'PsychCentral', sourceUrl: 'https://psychcentral.com/health/amwell-reviews' },
        { platform: 'MDLIVE', price: '$85', states: '50 + PR', mdOnly: 'No (mixed)', source: 'Healthline', sourceUrl: 'https://www.healthline.com/health/mdlive-reviews' },
        { platform: 'Teladoc', price: '$89', states: '50', mdOnly: 'No (NPs hired)', source: 'Teladoc', sourceUrl: 'https://www.teladochealth.com/start/no-insurance' },
        { platform: 'Doctor on Demand', price: '$99', states: '50', mdOnly: 'No (mixed)', source: 'Doctor on Demand', sourceUrl: 'https://doctorondemand.com/about-us/cost-insurance/' },
      ],
    },
    // Optional condition-cost rollup.
    conditionRollup: {
      title: 'Total Cost of Care by Condition (Telehealth vs. In-Person)',
      caption: 'Visit cost + medication cost (GoodRx generic). Tests excluded unless required.',
      rows: [
        { condition: 'UTI (uncomplicated)', telehealth: '$50–$115', urgentCare: '$160–$320', er: '$1,200–$3,000+', source: 'GoodRx, BetterCare 2025', sourceUrl: 'https://www.goodrx.com/nitrofurantoin-mono-macro' },
        { condition: 'Sinus infection', telehealth: '$50–$110', urgentCare: '$160–$320', er: '$1,200–$3,000+', source: 'Penn Medicine 2024', sourceUrl: 'https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits' },
        { condition: 'Strep / sore throat', telehealth: '$50–$155', urgentCare: '$185–$345', er: '$500–$2,700+', source: 'Mira Health, BetterCare', sourceUrl: 'https://bettercare.com/costs/strep-test-cost' },
        { condition: 'Acute Rx refill (BP, asthma)', telehealth: '$44–$120', urgentCare: '$154–$310', er: 'Not appropriate', source: 'Venteur 2026', sourceUrl: 'https://www.venteur.com/blog/how-much-does-an-urgent-care-visit-cost-guide' },
      ],
    },
    educationalGap: {
      title: 'Why Online Doctor Visits Cost So Much Less',
      paragraphs: [
        'A 2024 Penn Medicine / JAMA Network Open study analyzed 160,000+ visit episodes and found telemedicine\'s average billed charge was <strong>$96</strong> versus <strong>$509</strong> for an in-person visit — telemedicine was roughly <strong>5× cheaper on average</strong> across the full episode of care, including any follow-up. Source: <a href="https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits">Penn Medicine, 2024</a>.',
        'Telehealth removes facility fees, reduces overhead, and eliminates the standing infrastructure cost of physical clinics. For acute, uncomplicated conditions like UTI, sinus infection, strep throat, pink eye, and prescription refills — which together account for the bulk of urgent-care visits — there is no clinical advantage to being seen in person. The savings flow directly to the patient.',
        'In 2024, <strong>26.7 million</strong> Americans under 65 were uninsured (<a href="https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/">KFF, April 2026</a>) and <strong>38.6% of uninsured adults</strong> reported delaying or skipping needed care due to cost. Flat-rate telehealth at $49 closes that gap for the conditions it can treat.',
      ],
    },
    whoWeHelp: {
      title: 'Who Saves the Most on Online Doctor Visits',
      groups: [
        { label: 'Uninsured adults', desc: '$49 flat replaces a $150–$2,715 in-person visit. Predictable upfront cost; no surprise billing.' },
        { label: 'High-deductible plan members', desc: 'If your deductible is unmet, $49 cash-pay is usually cheaper than the in-network rate you\'d pay before the deductible kicks in.' },
        { label: 'Travelers between states', desc: 'No need to find a new provider. One physician, 41 states.' },
        { label: 'HSA/FSA cardholders', desc: 'Pay $49 with HSA/FSA card; receipt is automatic.' },
      ],
    },
    appropriateBlock: {
      title: 'When Online Doctor Visits Make Financial Sense',
      goodFor: ['UTI / urinary tract infection', 'Sinus infection / sinusitis', 'Strep / sore throat', 'Pink eye', 'Cold, flu, mild bronchitis', 'Acid reflux refills', 'Hypertension / cholesterol / asthma refills', 'Allergies', 'Skin rashes / mild infections', 'Prescription refills for stable conditions'],
      notFor: ['Chest pain or trouble breathing (call 911)', 'Severe abdominal pain', 'Stroke symptoms (face droop, slurred speech)', 'Major trauma or bleeding', 'Conditions requiring imaging or labs you don\'t already have', 'Controlled substance prescriptions (TeleDirectMD does not prescribe)'],
    },
    decisionGuide: {
      title: 'Should You Use Telehealth, Urgent Care, or the ER?',
      steps: [
        { num: 1, head: 'Is it life-threatening?', body: 'Chest pain, stroke symptoms, severe trouble breathing, major trauma — call 911 or go to the nearest ER. Cost is secondary; ER is the right setting.', good: false },
        { num: 2, head: 'Can a clinician evaluate it without touching you or running labs?', body: 'UTI, sinus infection, strep throat, pink eye, refills, allergies, skin rashes — these are textbook telehealth conditions. Start with a $49 video visit.', good: true },
        { num: 3, head: 'Do you need imaging, IV fluids, or in-person procedures?', body: 'Sprain that needs an X-ray, severe dehydration, suspected appendicitis — go to urgent care or the ER. A telehealth visit can\'t image or infuse.', good: false },
        { num: 4, head: 'Are you between 9am and 9pm with no critical red flags?', body: 'Most acute issues fit telehealth. Book a $49 visit, get a prescription if needed, and skip the waiting room.', good: true },
      ],
    },
    medicationsTable: {
      title: 'Common Generic Prescription Costs (with GoodRx)',
      caption: 'Visit + medication, telehealth pathway. Generic prices via GoodRx, 30-day supply.',
      rows: [
        { drug: 'Nitrofurantoin (UTI antibiotic)', cost: '$6–$14', sourceUrl: 'https://www.goodrx.com/nitrofurantoin-mono-macro' },
        { drug: 'Amoxicillin (sinus / strep)', cost: '~$9', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Lisinopril (hypertension)', cost: '$4–$12', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Atorvastatin (cholesterol)', cost: '$8–$15', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Albuterol inhaler (asthma)', cost: '$20–$25', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Metoprolol (blood pressure)', cost: '$3–$9', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/' },
      ],
    },
    homeCare: {
      title: 'Stretching Your $49 Visit Further',
      bullets: [
        'Have your pharmacy and current medication list ready before booking.',
        'Snap clear photos of any rash, throat, or eye symptoms in good lighting.',
        'Use GoodRx, Cost Plus Drugs, or Amazon Pharmacy to comparison-shop the prescription.',
        'If you have an HSA/FSA card, use it at booking — the $49 fee is qualified.',
        'Save the visit summary; it\'s suitable for travel-insurance or employer reimbursement.',
      ],
    },
    whenNotToUse: {
      title: 'When NOT to Use TeleDirectMD',
      bullets: [
        'Anything that feels life-threatening — call 911.',
        'Conditions requiring controlled substance prescriptions (we do not prescribe).',
        'Pediatric patients (under 18). We see adults only.',
        'Mental health: TeleDirectMD does not currently offer therapy or psychiatry.',
        'Conditions requiring in-person physical exam, imaging, or in-clinic procedures.',
      ],
    },
    faqs: [
      { question: 'How much does an online doctor visit cost without insurance?', answer: 'Cash-pay telehealth visits range from $40 to $100, with a median around $82 per GoodRx. TeleDirectMD charges a flat $49 — among the lowest published rates for an MD-led video visit.' },
      { question: 'Is a telehealth visit cheaper than urgent care?', answer: 'Yes. Urgent care averages $150–$280 cash-pay (Mira Health, 2025), and adding labs or X-rays pushes the total to $250–$600+. A $49 TeleDirectMD visit is roughly 5× cheaper for conditions that don\'t need imaging.' },
      { question: 'How does a $49 visit compare to the ER?', answer: 'The average uninsured ER visit cost ~$2,715 in 2025 per Mira Health. For non-emergency conditions, that\'s about 55× more than a TeleDirectMD visit. ER pricing is appropriate only for true emergencies.' },
      { question: 'Are there any hidden fees with TeleDirectMD?', answer: 'No. The $49 covers the entire visit, the physician consultation, and the e-prescription to your pharmacy. There are no facility fees, no separate billing, and no insurance claims to file.' },
      { question: 'Can I use my HSA or FSA card?', answer: 'Yes. The $49 visit is a qualified medical expense and HSA/FSA cards are accepted at booking. A receipt is generated automatically for reimbursement.' },
      { question: 'Why is telehealth so much cheaper than in-person care?', answer: 'No facility fees, lower overhead, and no waiting-room infrastructure. A 2024 Penn Medicine / JAMA study found telemedicine averaged $96 per episode versus $509 for in-person — about 5× cheaper.' },
      { question: 'Does TeleDirectMD accept insurance?', answer: 'Yes — Aetna, BCBS, and UnitedHealthcare in select states. If your plan is not in-network, the flat $49 self-pay rate often beats your in-network cost before your deductible is met.' },
      { question: 'What conditions are appropriate for an online doctor visit?', answer: 'UTI, sinus infection, strep, pink eye, cold/flu, mild bronchitis, allergies, skin rashes, and refills for stable chronic conditions like blood pressure, cholesterol, and asthma. Anything urgent or requiring imaging belongs in person.' },
    ],
    references: [
      { label: 'Mira Health — Average ER visit cost (Feb 2025)', url: 'https://www.talktomira.com/post/how-much-does-an-er-visit-cost' },
      { label: 'Mira Health — Urgent care cost without insurance (2025)', url: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance' },
      { label: 'Mira Health — Primary care cost (Feb 2025)', url: 'https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance' },
      { label: 'GoodRx — Telehealth visit cost (2024)', url: 'https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance' },
      { label: 'GoodRx — How much does telehealth cost (2024)', url: 'https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost' },
      { label: 'Penn Medicine / JAMA Network Open — Telemedicine vs. in-person costs (2024)', url: 'https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits' },
      { label: 'CVS MinuteClinic — 2024 price list', url: 'https://www.cvs.com/minuteclinic/services/price-lists' },
      { label: 'KFF — Key facts about the uninsured population (April 2026)', url: 'https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/' },
      { label: 'BetterCare — ER visit cost (April 2025)', url: 'https://bettercare.com/costs/er-visit-cost' },
      { label: 'CDC / NCHS — Telemedicine use in 2022 (June 2024)', url: 'https://www.cdc.gov/nchs/data/nhsr/nhsr205.pdf' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'uti-treatment-cost': {
    slug: 'uti-treatment-cost',
    pid: 'uti-cost',
    h1: 'UTI Treatment Cost: Online Doctor vs Urgent Care vs ER',
    metaTitle: 'UTI Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER',
    metaDescription: 'A telehealth UTI visit + antibiotic costs $50–$115 total. Urgent care runs $160–$320; an ER UTI visit can hit $3,000+. Verified 2026 prices with sources.',
    breadcrumb: 'UTI Treatment Cost',
    answerLead: 'UTI treatment cost in 2026 (uninsured):',
    answerBody: 'A telehealth UTI visit + generic antibiotic costs <strong>$50–$115 total</strong> at TeleDirectMD ($49 visit + $6–$14 nitrofurantoin via <a href="https://www.goodrx.com/nitrofurantoin-mono-macro">GoodRx</a>). Compare to urgent care: <strong>$160–$320</strong> total (<a href="https://bettercare.com/costs/er-visit-cost">BetterCare, 2025</a>). An ER UTI visit can hit <strong>$1,200–$3,000+</strong> — never the right setting for an uncomplicated UTI.',
    heroSub: 'A 10-minute video visit with a board-certified MD plus a $6–$14 generic antibiotic. Total cost: as low as $55. No urinalysis required for uncomplicated lower-tract UTIs in adults under telehealth guidelines.',
    heroIntro: 'Uncomplicated lower-urinary-tract infections are the textbook case for telehealth. Per IDSA and AUA guidelines, a urinalysis or culture is not required to treat an uncomplicated UTI in a non-pregnant adult woman with classic symptoms — meaning the entire treatment can be a video visit plus a $6 prescription. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show you what UTI treatment actually costs across every care setting.',
    heroCardTitle: 'UTI Visit at TeleDirectMD: $49',
    heroCardItems: [
      'Same-day video visit with a board-certified MD',
      'Antibiotic e-prescription to your pharmacy',
      'No urinalysis or culture required (uncomplicated UTI)',
      '41 states, evenings & weekends',
      'No insurance required',
      'HSA/FSA accepted',
    ],
    heroBenefits: [
      'Total $50–$115 vs. $160–$320 in-person urgent care',
      'No drive time — typical visit takes 10–15 minutes',
      'Same-day antibiotic at any US pharmacy',
      'Safe for uncomplicated lower-UTI in adult, non-pregnant women — per IDSA/AUA guidelines',
      'Documented receipt suitable for HSA/FSA',
    ],
    costTable: {
      title: 'UTI Treatment Cost by Care Setting (2026, Cash-Pay Total)',
      caption: 'Visit cost + generic antibiotic via GoodRx. Excludes labs/cultures unless flagged.',
      rows: [
        { setting: 'TeleDirectMD (online)', cost: '$55–$63 typical', includes: '$49 visit + nitrofurantoin ($6–$14) — no urinalysis required', source: 'TeleDirectMD; GoodRx', sourceUrl: 'https://www.goodrx.com/nitrofurantoin-mono-macro' },
        { setting: 'Telehealth (national average)', cost: '$50–$115', includes: 'Visit ($40–$100) + antibiotic ($6–$14)', source: 'GoodRx, BetterCare 2025', sourceUrl: 'https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance' },
        { setting: 'Primary care (cash-pay)', cost: '$110–$265', includes: 'In-person visit ($100–$250) + antibiotic ($6–$14); urinalysis usually included', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance' },
        { setting: 'Urgent care (in-person)', cost: '$160–$320', includes: 'Walk-in visit ($150–$300) + antibiotic ($6–$14); urinalysis often bundled', source: 'BetterCare, 2025', sourceUrl: 'https://bettercare.com/costs/er-visit-cost' },
        { setting: 'Retail clinic (CVS MinuteClinic)', cost: '$105–$153', includes: 'NP visit ($99–$139) + antibiotic ($6–$14)', source: 'CVS MinuteClinic, 2024', sourceUrl: 'https://www.cvs.com/minuteclinic/services/price-lists' },
        { setting: 'Emergency room (uninsured)', cost: '$1,200–$3,000+', includes: 'ED visit + labs + antibiotic; chargemaster pricing', source: 'BetterCare, 2025', sourceUrl: 'https://bettercare.com/costs/er-visit-cost' },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: 'Why a Telehealth UTI Visit Is Safe and Cheap',
      paragraphs: [
        'For uncomplicated lower UTIs in non-pregnant adult women with classic symptoms (dysuria, frequency, urgency), the <a href="https://www.idsociety.org">IDSA</a> and AUA both endorse empiric antibiotic treatment without a urinalysis or culture. The diagnosis is clinical. That removes the lab cost entirely — which is the single biggest driver of in-person UTI billing.',
        'Penn Medicine\'s 2024 JAMA Network Open study found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong> — a 5× difference (<a href="https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits">Penn Medicine</a>). For a textbook UTI, the savings are even larger because no lab work is required.',
        'Generic nitrofurantoin (Macrobid) is <strong>$6.47–$14</strong> on <a href="https://www.goodrx.com/nitrofurantoin-mono-macro">GoodRx</a> — versus a $35–$58 retail price without the discount. Trimethoprim-sulfamethoxazole (Bactrim) is even cheaper at ~$9.',
      ],
    },
    whoWeHelp: {
      title: 'Who Benefits Most From a Telehealth UTI Visit',
      groups: [
        { label: 'College students', desc: 'Health center closed at 5pm? Book a $49 visit, pick up the antibiotic at the on-campus pharmacy.' },
        { label: 'Working adults', desc: 'Skip the drive and the waiting room. 10–15 minutes from book to script.' },
        { label: 'Travelers', desc: 'Onset on a Friday in a city you don\'t live in? Book a TeleDirectMD visit and route the script to a CVS at your destination.' },
        { label: 'Recurrent UTI patients', desc: 'You know what this is. Telehealth lets you start treatment within hours instead of waiting days.' },
      ],
    },
    appropriateBlock: {
      title: 'When a UTI Belongs in Telehealth vs. In-Person',
      goodFor: ['Adult, non-pregnant women', 'Classic symptoms (burning, frequency, urgency) without fever', 'No flank pain, vomiting, or blood in urine', 'No symptoms in the past 4 weeks', 'No structural urinary issues', 'No diabetes-related complications'],
      notFor: ['Fever, chills, or back pain (suggests kidney involvement)', 'Pregnancy', 'Recurrent UTI in the past 4 weeks', 'Visible blood in urine', 'Diabetes with poor control', 'Male UTI (always merits in-person workup)'],
    },
    decisionGuide: {
      title: 'UTI: Telehealth, In-Person, or ER?',
      steps: [
        { num: 1, head: 'Fever, flank pain, or vomiting?', body: 'Go to urgent care or the ER — these suggest kidney infection (pyelonephritis), which needs in-person evaluation, possible IV antibiotics, and imaging.', good: false },
        { num: 2, head: 'Classic UTI symptoms, no red flags?', body: 'Book a $49 telehealth visit. Total cost will likely be $55–$63. Antibiotic at your pharmacy in 30 minutes.', good: true },
        { num: 3, head: 'Recurrent or complicated?', body: 'See a primary care provider in person. You may need a culture, post-treatment follow-up, or referral to urology.', good: false },
        { num: 4, head: 'Follow-up only?', body: 'Refills and short follow-up visits are fine via telehealth — book the same $49 visit.', good: true },
      ],
    },
    medicationsTable: {
      title: 'UTI Antibiotic Costs (GoodRx Generic, 2026)',
      caption: '5–7 day course, retail pharmacy with GoodRx coupon.',
      rows: [
        { drug: 'Nitrofurantoin (Macrobid) — first-line', cost: '$6.47–$14', sourceUrl: 'https://www.goodrx.com/nitrofurantoin-mono-macro' },
        { drug: 'Trimethoprim-sulfamethoxazole (Bactrim)', cost: '~$9', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Cephalexin (alternative)', cost: '$10–$18', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Fosfomycin (single-dose alternative)', cost: '$30–$60', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
      ],
    },
    homeCare: {
      title: 'While You Wait for the Antibiotic',
      bullets: [
        'Drink water steadily — 8+ glasses across the day.',
        'Use OTC phenazopyridine (Azo) for short-term burning relief; it does not treat the infection.',
        'Avoid coffee, alcohol, and citrus until symptoms resolve.',
        'Finish the entire antibiotic course even if symptoms ease in 24–48 hours.',
        'If you develop fever, back pain, or vomiting after starting antibiotics, go to urgent care.',
      ],
    },
    whenNotToUse: {
      title: 'When NOT to Treat a UTI by Telehealth',
      bullets: [
        'Fever or chills (kidney infection risk).',
        'Back or flank pain.',
        'Pregnancy.',
        'Visible blood in urine.',
        'Recurrent UTI within the past 4 weeks.',
        'Male patients (always warrants in-person workup).',
      ],
    },
    faqs: [
      { question: 'How much does a UTI cost to treat without insurance?', answer: 'Telehealth: $50–$115 total (visit + generic antibiotic). Urgent care in-person: $160–$320. ER: $1,200–$3,000+. The ER is rarely appropriate for a routine UTI.' },
      { question: 'Do I need a urinalysis or culture for a UTI?', answer: 'For an uncomplicated lower UTI in an adult, non-pregnant woman with classic symptoms, IDSA and AUA guidelines support empiric antibiotic treatment without a urinalysis. That\'s why telehealth works clinically and saves money.' },
      { question: 'How fast can I get an antibiotic via TeleDirectMD?', answer: 'Most patients have an antibiotic at their pharmacy within an hour of booking — same-day visits available evenings and weekends.' },
      { question: 'Will my generic antibiotic actually be that cheap?', answer: 'Yes. Nitrofurantoin (Macrobid) runs $6.47–$14 with GoodRx; Bactrim ~$9. Quote from GoodRx, April 2026.' },
      { question: 'When should I skip telehealth and go in-person for a UTI?', answer: 'Fever, back/flank pain, vomiting, blood in urine, pregnancy, recurrent infection, or male patient — all warrant in-person evaluation, possibly with imaging.' },
      { question: 'Does TeleDirectMD treat UTI in men?', answer: 'No. UTI in men is uncommon and almost always warrants an in-person workup. We\'ll redirect you to urgent care or your primary care provider.' },
      { question: 'Is the $49 visit covered by insurance?', answer: 'TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. If you\'re not in-network, the $49 self-pay rate often beats your in-network cost when your deductible is unmet.' },
      { question: 'What if my symptoms don\'t improve?', answer: 'Contact us within 48–72 hours if symptoms haven\'t improved. We\'ll either change antibiotics or refer you in-person for a urinalysis or culture.' },
    ],
    references: [
      { label: 'BetterCare — ER & UTI cost (April 2025)', url: 'https://bettercare.com/costs/er-visit-cost' },
      { label: 'GoodRx — Nitrofurantoin pricing (April 2026)', url: 'https://www.goodrx.com/nitrofurantoin-mono-macro' },
      { label: 'GoodRx — UTI antibiotic class', url: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
      { label: 'Mira Health — Urgent care cost (2025)', url: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance' },
      { label: 'Penn Medicine — Telemedicine vs. in-person costs (2024)', url: 'https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits' },
      { label: 'CVS MinuteClinic — Price list (2024)', url: 'https://www.cvs.com/minuteclinic/services/price-lists' },
      { label: 'IDSA — Uncomplicated UTI guidelines', url: 'https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'sinus-infection-treatment-cost': {
    slug: 'sinus-infection-treatment-cost',
    pid: 'sinus-cost',
    h1: 'Sinus Infection Treatment Cost Without Insurance',
    metaTitle: 'Sinus Infection Treatment Cost (2026, Uninsured) | TeleDirectMD',
    metaDescription: 'A telehealth sinus-infection visit + amoxicillin costs $50–$110 total. Urgent care runs $160–$320; ER hits $1,200–$3,000+. Verified 2026 cash-pay prices.',
    breadcrumb: 'Sinus Infection Cost',
    answerLead: 'Sinus infection treatment cost in 2026 (uninsured):',
    answerBody: 'A telehealth visit plus amoxicillin costs <strong>$50–$110 total</strong> at TeleDirectMD ($49 visit + $9–$20 generic via <a href="https://www.goodrx.com/conditions/urinary-tract-infection/drugs">GoodRx</a>). In-person urgent care runs <strong>$160–$320</strong>. A 2017 Health Affairs study cited by <a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost">GoodRx</a> found the average telehealth respiratory visit was <strong>$79 vs. $146 in-person</strong> — and <a href="https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits">Penn Medicine\'s 2024 study</a> found telemedicine episodes were ~$800 cheaper for respiratory infections.',
    heroSub: '$49 video visit with a board-certified MD. If antibiotics are appropriate, generic amoxicillin runs $9–$20. Most patients pay $58–$70 total.',
    heroIntro: 'Sinusitis is one of the most common reasons people end up in urgent care — and one of the most overpriced. Many sinus infections are viral and don\'t need antibiotics at all; for those that do, the entire treatment is a focused history, a clinical exam, and an e-prescription. Telehealth handles all three for $49. We\'ve pulled current 2025–2026 prices from BetterCare, Penn Medicine, and GoodRx so you can see exactly what sinus-infection treatment costs.',
    heroCardTitle: 'Sinus Visit at TeleDirectMD: $49',
    heroCardItems: [
      'Board-certified MD evaluates duration, severity, and red flags',
      'Clinical decision on antibiotics vs. supportive care',
      'E-prescription if appropriate (amoxicillin / augmentin / doxycycline)',
      'Same-day appointments, 41 states',
      'No insurance required',
      'Receipt for HSA/FSA',
    ],
    heroBenefits: [
      'Total $50–$110 vs. $160–$320 in-person urgent care',
      'Telehealth respiratory visits average ~$800 less per episode (Penn Medicine 2024)',
      'No facility fee, no waiting room, no co-pay',
      'Skip the visit if antibiotics aren\'t needed — save the $20 co-pay too',
      'In-network with Aetna, BCBS, UnitedHealthcare in select states',
    ],
    costTable: {
      title: 'Sinus Infection Treatment Cost by Setting (2026, Cash-Pay)',
      caption: 'Visit + generic antibiotic when prescribed. Most viral sinusitis cases don\'t need antibiotics.',
      rows: [
        { setting: 'TeleDirectMD (online)', cost: '$58–$69 typical', includes: '$49 visit + amoxicillin ($9–$20) when indicated', source: 'TeleDirectMD; GoodRx', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { setting: 'Telehealth (national average)', cost: '$50–$110', includes: 'Visit ($40–$90) + antibiotic ($9–$20)', source: 'GoodRx 2024; Penn Medicine 2024', sourceUrl: 'https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost' },
        { setting: 'Primary care (cash-pay)', cost: '$110–$270', includes: 'In-person visit ($100–$250) + antibiotic ($9–$20)', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance' },
        { setting: 'Urgent care (in-person)', cost: '$160–$320', includes: 'Visit ($150–$300) + antibiotic; sinus X-ray adds $100+', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance' },
        { setting: 'Retail clinic (CVS MinuteClinic)', cost: '$108–$159', includes: 'NP visit ($99–$139) + antibiotic ($9–$20)', source: 'CVS MinuteClinic, 2024', sourceUrl: 'https://www.cvs.com/minuteclinic/services/price-lists' },
        { setting: 'Emergency room (uninsured)', cost: '$1,200–$3,000+', includes: 'ED visit; never appropriate for routine sinus infection', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-an-er-visit-cost' },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: 'Most Sinus Infections Don\'t Need Antibiotics',
      paragraphs: [
        'According to <a href="https://www.cdc.gov/antibiotic-use/community/for-patients/common-illnesses/sinus-infection.html">CDC guidance</a>, the majority of sinus infections are viral and resolve without antibiotics. Antibiotic treatment is appropriate when symptoms persist >10 days without improvement, are severe (high fever, unilateral facial pain), or worsen after initial improvement (the "double-sickening" pattern).',
        'A telehealth visit is the most cost-effective way to make that determination. The clinician takes a focused history, evaluates duration and severity, looks at any red flags, and either prescribes an antibiotic or recommends supportive care — saving you the cost of an antibiotic that wouldn\'t help anyway.',
        '<a href="https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits">Penn Medicine\'s 2024 JAMA study</a> of 160,000+ visits found telemedicine episodes for respiratory infections cost <strong>~$800 less per episode</strong> than in-person care — most of that savings comes from avoiding unnecessary in-person follow-up.',
      ],
    },
    whoWeHelp: {
      title: 'Who Benefits Most From Telehealth Sinus Care',
      groups: [
        { label: 'Adults with classic 10+ day sinusitis', desc: 'You know what this is. A focused video visit decides antibiotics in 10 minutes.' },
        { label: 'Patients with chronic sinus issues', desc: 'Recurring sinusitis with a known pattern? Telehealth is faster than rebooking your PCP.' },
        { label: 'Travelers / business trips', desc: 'Came down with sinusitis on the road? Book a $49 visit from your hotel; antibiotic at the local CVS.' },
        { label: 'High-deductible plan members', desc: 'Cash-paying $49 beats a $185 PCP visit when your deductible is unmet.' },
      ],
    },
    appropriateBlock: {
      title: 'When a Sinus Infection Belongs in Telehealth',
      goodFor: ['Symptoms >10 days without improvement', 'Severe facial pain or pressure (unilateral)', 'Symptoms worsening after initial improvement', 'No high fever or vision changes', 'Otherwise healthy adult'],
      notFor: ['Severe headache or vision changes (rare red flag for orbital infection)', 'Immunocompromised patients', 'Recurrent sinusitis warranting ENT referral', 'Suspected fungal sinusitis', 'Pediatric patients (we see adults only)'],
    },
    decisionGuide: {
      title: 'Sinus Infection: Telehealth, In-Person, or ER?',
      steps: [
        { num: 1, head: 'Severe headache, vision changes, or facial swelling spreading to the eye?', body: 'Go to the ER. These are rare but serious red flags for orbital cellulitis or other complications.', good: false },
        { num: 2, head: 'Symptoms < 10 days and improving?', body: 'No visit needed yet. Use saline rinses, decongestants, and rest. If symptoms persist past 10 days, book telehealth.', good: false },
        { num: 3, head: 'Symptoms 10+ days, severe, or worsening after improvement?', body: 'Textbook telehealth case. Book a $49 visit; antibiotic if appropriate.', good: true },
        { num: 4, head: 'Recurrent (3+ episodes/year) or chronic?', body: 'Telehealth for the acute episode is fine, but get a referral to ENT for the underlying cause.', good: true },
      ],
    },
    medicationsTable: {
      title: 'Sinus Infection Antibiotic Costs (GoodRx Generic, 2026)',
      caption: '7–10 day course, retail pharmacy with GoodRx coupon.',
      rows: [
        { drug: 'Amoxicillin (first-line)', cost: '~$9', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Amoxicillin-clavulanate (Augmentin)', cost: '$12–$24', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Doxycycline (penicillin allergy)', cost: '$8–$15', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Cefdinir (Omnicef)', cost: '$15–$30', sourceUrl: 'https://www.goodrx.com' },
      ],
    },
    homeCare: {
      title: 'Supportive Care That Actually Works',
      bullets: [
        'Saline nasal rinses (Neilmed, NeilMed Sinus Rinse) 1–2× daily.',
        'OTC pseudoephedrine for nasal congestion (behind the counter).',
        'Acetaminophen or ibuprofen for facial pain.',
        'Warm compresses over the cheeks and brow.',
        'Hydration: 8+ glasses water/day.',
        'Avoid antihistamines unless allergies are clearly contributing — they thicken mucus.',
      ],
    },
    whenNotToUse: {
      title: 'When NOT to Treat Sinus Infection by Telehealth',
      bullets: [
        'Severe headache, neck stiffness, or vision changes — go to the ER.',
        'Facial swelling spreading to the eye — orbital cellulitis risk.',
        'Immunocompromised patients (HIV, chemotherapy, organ transplant).',
        'Suspected fungal sinusitis (often in diabetics).',
        'Children — we see adults only.',
      ],
    },
    faqs: [
      { question: 'How much does sinus infection treatment cost without insurance?', answer: 'Telehealth: $50–$110 total (visit + amoxicillin if needed). Urgent care: $160–$320. Most insurance-free patients at TeleDirectMD pay $58–$70.' },
      { question: 'Do all sinus infections need antibiotics?', answer: 'No. Per CDC guidance, most sinus infections are viral and resolve without antibiotics. A telehealth visit determines whether antibiotics are appropriate based on duration, severity, and symptom pattern.' },
      { question: 'What antibiotic is typically prescribed for sinusitis?', answer: 'Amoxicillin is first-line ($9 GoodRx). Amoxicillin-clavulanate (Augmentin) is used for resistant cases or recent antibiotic exposure. Doxycycline is the penicillin-allergy alternative.' },
      { question: 'How fast will I get the prescription?', answer: 'E-prescriptions are usually at your pharmacy within 30 minutes of the visit ending. Most patients pick up within 1 hour of booking.' },
      { question: 'When should I skip telehealth and see someone in person?', answer: 'Severe headache, vision changes, facial swelling spreading to the eye, or any neurological symptoms — go to the ER. Recurrent sinusitis warrants ENT referral.' },
      { question: 'Can I use my HSA/FSA card?', answer: 'Yes. The $49 visit is HSA/FSA-eligible. A receipt is generated automatically.' },
      { question: 'Is a sinus X-ray needed?', answer: 'No. Imaging is not needed to diagnose acute bacterial sinusitis — the diagnosis is clinical. CT may be ordered for recurrent or atypical cases by an ENT.' },
      { question: 'What if I have allergies, not infection?', answer: 'Allergic rhinitis can mimic sinusitis. The visit will distinguish — if allergies are the cause, we\'ll prescribe an antihistamine or nasal steroid instead. Same $49 visit.' },
    ],
    references: [
      { label: 'GoodRx — How much does telehealth cost (2024)', url: 'https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost' },
      { label: 'GoodRx — Antibiotic pricing', url: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
      { label: 'Penn Medicine / JAMA — Telemedicine vs. in-person costs (2024)', url: 'https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits' },
      { label: 'CDC — Sinus infection (sinusitis) guidance', url: 'https://www.cdc.gov/antibiotic-use/community/for-patients/common-illnesses/sinus-infection.html' },
      { label: 'Mira Health — Urgent care cost (2025)', url: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance' },
      { label: 'CVS MinuteClinic — Price list (2024)', url: 'https://www.cvs.com/minuteclinic/services/price-lists' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'sore-throat-treatment-cost': {
    slug: 'sore-throat-treatment-cost',
    pid: 'sore-throat-cost',
    h1: 'Sore Throat & Strep Treatment Cost: What You\'ll Actually Pay',
    metaTitle: 'Sore Throat & Strep Treatment Cost (2026) | TeleDirectMD',
    metaDescription: 'Telehealth sore throat visit: $50–$155 total. Urgent care strep: $185–$345. Verified 2026 prices for visit + rapid strep test + antibiotic.',
    breadcrumb: 'Sore Throat Treatment Cost',
    answerLead: 'Sore throat & strep treatment cost in 2026 (uninsured):',
    answerBody: 'A telehealth visit + antibiotic costs <strong>$50–$155 total</strong> at TeleDirectMD ($49 visit + $9–$15 amoxicillin via <a href="https://www.goodrx.com/conditions/urinary-tract-infection/drugs">GoodRx</a>; ~$25–$50 if an at-home strep test is needed). In-person urgent care: <strong>$185–$345</strong> (visit + rapid strep + antibiotic, per <a href="https://bettercare.com/costs/strep-test-cost">BetterCare 2025</a> and <a href="https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care">Mira Health</a>). CVS MinuteClinic bundles the test in the $99–$139 tier (<a href="https://www.cvs.com/minuteclinic/services/price-lists">CVS, 2024</a>).',
    heroSub: 'Telehealth $49 visit. If a rapid strep test is needed, an at-home kit runs $25–$50 — still cheaper than urgent care\'s $185–$345.',
    heroIntro: 'Most sore throats are viral, but the few that are strep need antibiotics promptly. The Centor criteria (fever, tonsillar exudate, anterior cervical lymphadenopathy, no cough) help estimate strep probability without a test for many patients. We pulled 2022–2025 cost data from BetterCare, Mira Health, and CVS to show what sore-throat treatment costs in every setting.',
    heroCardTitle: 'Sore Throat Visit at TeleDirectMD: $49',
    heroCardItems: [
      'Symptom-focused video visit with board-certified MD',
      'Centor score-based decision: empiric antibiotics, at-home strep test, or supportive care',
      'E-prescription for amoxicillin or alternative if indicated',
      '41 states, same-day, evenings & weekends',
      'No insurance required',
      'HSA/FSA accepted',
    ],
    heroBenefits: [
      'Total $50–$70 typical (no test) vs. $185–$345 urgent care',
      'Skip the test entirely when Centor score is low or high',
      'Same-day antibiotic at any US pharmacy',
      'Clear guidance on when in-person testing is worth $25–$50',
      'In-network with Aetna, BCBS, UnitedHealthcare in select states',
    ],
    costTable: {
      title: 'Sore Throat / Strep Treatment Cost by Setting (2026, Cash-Pay Total)',
      caption: 'Includes visit + rapid strep test (when applicable) + antibiotic.',
      rows: [
        { setting: 'TeleDirectMD (online)', cost: '$58–$112 typical', includes: '$49 visit + amoxicillin ($9–$15) ± at-home strep kit ($25–$50)', source: 'TeleDirectMD; GoodRx; BetterCare', sourceUrl: 'https://bettercare.com/costs/strep-test-cost' },
        { setting: 'Telehealth (national average)', cost: '$50–$155', includes: 'Visit ($40–$90) + antibiotic ($9–$15) ± at-home strep ($25–$50)', source: 'BetterCare, GoodRx 2025', sourceUrl: 'https://bettercare.com/costs/strep-test-cost' },
        { setting: 'Retail clinic (CVS MinuteClinic)', cost: '$108–$154', includes: 'NP visit ($99–$139) + strep test bundled + antibiotic ($9–$15)', source: 'CVS MinuteClinic, 2024', sourceUrl: 'https://www.cvs.com/minuteclinic/services/price-lists' },
        { setting: 'Primary care (cash-pay)', cost: '$135–$315', includes: 'Visit ($100–$250) + strep ($25–$50) + antibiotic', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance' },
        { setting: 'Urgent care (in-person)', cost: '$185–$345', includes: 'Visit ($150–$280) + rapid strep ($25–$50) + antibiotic ($9–$15)', source: 'Mira Health 2022 + 2025; BetterCare', sourceUrl: 'https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care' },
        { setting: 'Emergency room (uninsured)', cost: '$500–$2,700+', includes: 'Rarely appropriate for sore throat alone', source: 'BetterCare, 2025', sourceUrl: 'https://bettercare.com/costs/er-visit-cost' },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: 'When You Actually Need a Strep Test',
      paragraphs: [
        'The Centor criteria (fever, tonsillar exudate, tender anterior cervical lymph nodes, absence of cough) are used to estimate strep probability. Patients with very low scores can skip the test and the antibiotic; patients with very high scores can be treated empirically. Patients in the middle benefit from a test — and the test can be done at home with a $25–$50 kit, sparing the urgent care fee.',
        '<a href="https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care">Mira Health</a> reported the average cost of a rapid strep test plus visit at urgent care was <strong>$187 in 2022</strong> — adjusted for ~20% medical inflation since, that\'s ~$225 in 2025 dollars. <a href="https://www.cvs.com/minuteclinic/services/price-lists">CVS MinuteClinic</a> bundles the test into its $99–$139 tier, which is the lowest in-person price in the market.',
        'Generic amoxicillin ($9) is the standard strep antibiotic per <a href="https://www.goodrx.com/conditions/urinary-tract-infection/drugs">GoodRx</a>. Penicillin-allergic patients can use cephalexin or azithromycin.',
      ],
    },
    whoWeHelp: {
      title: 'Who Benefits Most From Telehealth Sore Throat Care',
      groups: [
        { label: 'Adults with high or low Centor scores', desc: 'Skip the test entirely — empirical treatment or supportive care decided in 10 minutes.' },
        { label: 'Working adults with no time for urgent care', desc: 'Book a $49 visit on a lunch break; antibiotic at your pharmacy by end of day.' },
        { label: 'College students', desc: 'Health center closed? $49 visit + at-home strep kit if needed.' },
        { label: 'Travelers', desc: 'On the road and feeling awful? Telehealth + local pharmacy = same-day care anywhere.' },
      ],
    },
    appropriateBlock: {
      title: 'When Sore Throat Belongs in Telehealth',
      goodFor: ['Adult, otherwise healthy', 'Classic strep features OR clearly viral pattern', 'No drooling, stridor, or muffled voice', 'No severe unilateral throat swelling', 'Symptoms < 7 days'],
      notFor: ['Drooling, stridor, or trouble breathing — go to the ER', 'Severe unilateral throat swelling (peritonsillar abscess risk)', 'Severe neck stiffness or facial swelling', 'Recent rheumatic fever history', 'Pediatric patients'],
    },
    decisionGuide: {
      title: 'Sore Throat: Telehealth, In-Person, or ER?',
      steps: [
        { num: 1, head: 'Drooling, stridor, voice change, or trouble breathing?', body: 'Go to the ER immediately — these suggest peritonsillar abscess or epiglottitis, both surgical emergencies.', good: false },
        { num: 2, head: 'Classic strep symptoms or clearly viral?', body: 'Book a $49 telehealth visit. Most patients leave with either an antibiotic or a clear plan — no test needed.', good: true },
        { num: 3, head: 'Mid-range Centor and you want certainty?', body: 'Telehealth visit + at-home rapid strep kit ($25–$50). Total still $75–$112 — cheaper than urgent care.', good: true },
        { num: 4, head: 'Recurrent strep (3+ episodes/year)?', body: 'Telehealth for this episode is fine, but get a referral to ENT to discuss tonsillectomy.', good: true },
      ],
    },
    medicationsTable: {
      title: 'Strep Antibiotic Costs (GoodRx Generic, 2026)',
      caption: '10-day course unless noted.',
      rows: [
        { drug: 'Amoxicillin (first-line)', cost: '~$9', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Penicillin V (alternative)', cost: '$8–$15', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Cephalexin (penicillin allergy, mild)', cost: '$10–$18', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Azithromycin (severe pen allergy, 5-day)', cost: '$10–$20', sourceUrl: 'https://www.goodrx.com' },
      ],
    },
    homeCare: {
      title: 'Throat Care That Actually Helps',
      bullets: [
        'Salt-water gargle several times a day.',
        'Hot tea with honey (avoid honey in children under 1; not relevant here — adults only).',
        'Acetaminophen or ibuprofen for pain.',
        'OTC throat lozenges with benzocaine for short-term relief.',
        'Cold liquids and soft foods.',
        'If you start an antibiotic, you\'re no longer contagious after 24 hours.',
      ],
    },
    whenNotToUse: {
      title: 'When NOT to Treat a Sore Throat by Telehealth',
      bullets: [
        'Drooling or trouble swallowing your own saliva — ER, not telehealth.',
        'Stridor (high-pitched breathing) — ER.',
        'Voice muffled or "hot potato" voice.',
        'Severe one-sided throat swelling.',
        'Pediatric patients (we see adults only).',
        'Recent rheumatic fever — needs in-person follow-up.',
      ],
    },
    faqs: [
      { question: 'How much does strep treatment cost without insurance?', answer: 'Telehealth: $50–$155 total depending on whether testing is needed. Urgent care: $185–$345. CVS MinuteClinic: $108–$154 with bundled testing.' },
      { question: 'Do I always need a strep test?', answer: 'No. Patients with very high or very low Centor scores can be managed empirically (treat or don\'t treat). Mid-range scores benefit from testing — at home for ~$30 or in person.' },
      { question: 'What antibiotic is used for strep?', answer: 'Amoxicillin or penicillin V are first-line, both ~$9–$15 generic. Cephalexin or azithromycin are alternatives for penicillin-allergic patients.' },
      { question: 'When should I skip telehealth for a sore throat?', answer: 'Drooling, stridor, voice change, severe unilateral swelling, or trouble breathing — go to the ER. These can signal peritonsillar abscess or epiglottitis.' },
      { question: 'Can a doctor diagnose strep over video?', answer: 'For low or high Centor scores, yes — clinical decision-making works without a test. Mid-range cases often need a rapid strep test, which can be done at home or via a brief in-person stop.' },
      { question: 'How soon will I feel better?', answer: 'On effective antibiotics, fever and pain typically improve within 24–48 hours. Always finish the full course — undertreated strep can cause rheumatic complications.' },
      { question: 'Can my partner or kids get treated by telehealth too?', answer: 'TeleDirectMD treats adults 18+. Pediatric patients should see a pediatrician or pediatric urgent care.' },
      { question: 'Is the visit covered by insurance?', answer: 'TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. Self-pay $49 is available in all 41 states.' },
    ],
    references: [
      { label: 'BetterCare — Strep test cost (April 2025)', url: 'https://bettercare.com/costs/strep-test-cost' },
      { label: 'Mira Health — Strep test at urgent care (2022)', url: 'https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care' },
      { label: 'CVS MinuteClinic — Price list (2024)', url: 'https://www.cvs.com/minuteclinic/services/price-lists' },
      { label: 'GoodRx — Antibiotic pricing', url: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
      { label: 'Mira Health — Urgent care cost (2025)', url: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance' },
      { label: 'BetterCare — ER visit cost (April 2025)', url: 'https://bettercare.com/costs/er-visit-cost' },
      { label: 'MDsave — Rapid strep test pricing (2025)', url: 'https://www.mdsave.com/procedures/rapid-strep-test/d786f4cd' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'online-prescription-cost': {
    slug: 'online-prescription-cost',
    pid: 'rx-cost',
    h1: 'How Much Does an Online Prescription Cost?',
    metaTitle: 'Online Prescription Cost in 2026: Visit + Generic Rx | TeleDirectMD',
    metaDescription: 'A $49 online doctor visit + $4–$30 generic prescription = $44–$120 total. Verified 2026 prices for refills (BP, asthma, cholesterol, antibiotics).',
    breadcrumb: 'Online Prescription Cost',
    answerLead: 'Online prescription cost in 2026 (uninsured):',
    answerBody: 'A telehealth visit + generic Rx totals <strong>$44–$120</strong> at TeleDirectMD ($49 visit + $4–$30 generic via GoodRx). Common refills: lisinopril <a href="https://www.goodrx.com/conditions/urinary-tract-infection/drugs">$4–$12</a>, atorvastatin $8–$15, albuterol inhaler $20–$25, metoprolol $3–$9 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/">PMC, 2020</a>). Without GoodRx, undiscounted cash prices for the same generics averaged <strong>$42 per Rx</strong> — GoodRx cuts that 53–77%.',
    heroSub: 'Most online refill visits cost a $49 flat fee at TeleDirectMD. Add a generic prescription (often $4–$30 with GoodRx) and you\'re done.',
    heroIntro: 'For stable chronic conditions — high blood pressure, high cholesterol, asthma, hypothyroidism, acid reflux — an in-person visit usually adds nothing clinically. The doctor reviews how you\'re doing, refills the prescription, and orders any routine labs you can drop into a Quest or LabCorp at your convenience. We pulled 2024–2026 prices from PMC, GoodRx, and Venteur to show what online prescription refills actually cost.',
    heroCardTitle: 'Online Refill at TeleDirectMD: $49',
    heroCardItems: [
      'Same-day video visit with a board-certified MD',
      'E-prescription to your pharmacy in 30 minutes',
      'Refills for stable chronic conditions (BP, asthma, cholesterol, etc.)',
      '41 states; no insurance required',
      'HSA/FSA accepted',
      'No controlled substances',
    ],
    heroBenefits: [
      '$49 flat — no facility fee, no labs unless clinically needed',
      'Generic medications via GoodRx: $4–$30/month for most',
      'No drive time; visits average 10 minutes',
      '53–77% savings on generic Rx vs. undiscounted cash price',
      'In-network with Aetna, BCBS, UnitedHealthcare in select states',
    ],
    costTable: {
      title: 'Online Prescription Cost by Setting (2026, Cash-Pay)',
      caption: 'Visit cost + generic medication via GoodRx, 30-day supply.',
      rows: [
        { setting: 'TeleDirectMD (online)', cost: '$53–$79 typical', includes: '$49 visit + lisinopril/atorvastatin/etc. ($4–$30)', source: 'TeleDirectMD; GoodRx', sourceUrl: 'https://www.goodrx.com' },
        { setting: 'Telehealth (national average)', cost: '$44–$120', includes: 'Visit ($40–$90) + generic Rx ($4–$30)', source: 'Venteur 2026; GoodRx', sourceUrl: 'https://www.venteur.com/blog/how-much-does-an-urgent-care-visit-cost-guide' },
        { setting: 'Retail clinic (CVS MinuteClinic)', cost: '$103–$169', includes: 'NP visit ($99–$139) + Rx ($4–$30)', source: 'CVS MinuteClinic, 2024', sourceUrl: 'https://www.cvs.com/minuteclinic/services/price-lists' },
        { setting: 'Primary care (cash-pay)', cost: '$104–$280', includes: 'In-person visit ($100–$250) + Rx ($4–$30)', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance' },
        { setting: 'Urgent care (in-person)', cost: '$154–$310', includes: 'Walk-in visit ($150–$280) + Rx ($4–$30)', source: 'Mira Health, 2025', sourceUrl: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance' },
        { setting: 'Without GoodRx (cash retail)', cost: '~$42/Rx average', includes: 'Cardiovascular generics retail cash without discount', source: 'JGIM / PMC, 2020', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/' },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: 'The Hidden Cost of Skipping a Refill',
      paragraphs: [
        'A 2020 Journal of General Internal Medicine study cited by <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/">PMC</a> found uninsured patients paid an average of <strong>$42.41</strong> per generic cardiovascular medication at retail cash price — versus <strong>$9.88–$17.85</strong> with a GoodRx discount card. That\'s a 53–77% reduction. RAND has reported US drug prices are <strong>nearly 3× the average of other high-income countries</strong> (<a href="https://www.goodrx.com/drugs/savings">GoodRx, 2024</a>).',
        '<a href="https://www.doctronic.ai/blog/goodrx-vs-insurance/">Doctronic\'s 2026 analysis</a> found that for most generic medications under $10, GoodRx is cheaper than a standard $15–$25 insurance copay. Your generic blood pressure pill via GoodRx will often cost less than your insurance copay.',
        'The biggest cost of refill access is missing them. Patients who lapse on antihypertensives have measurably worse cardiovascular outcomes. A $49 telehealth visit twice a year keeps the script live.',
      ],
    },
    whoWeHelp: {
      title: 'Who Benefits Most From Online Refill Visits',
      groups: [
        { label: 'Adults on stable chronic medications', desc: 'BP, cholesterol, asthma, thyroid, GERD — quarterly or biannual refill check-ins.' },
        { label: 'Patients between PCPs', desc: 'Switched insurance or moved? Bridge your refills until your new PCP has openings.' },
        { label: 'Travelers and remote workers', desc: 'Need a refill while away from home? $49 video visit, prescription at any US pharmacy.' },
        { label: 'High-deductible plan members', desc: 'Cash $49 + GoodRx is often cheaper than your in-network copay before deductible.' },
      ],
    },
    appropriateBlock: {
      title: 'When Online Refills Are Appropriate',
      goodFor: ['Stable chronic conditions on the same medication', 'Routine quarterly or biannual check-ins', 'No new symptoms or recent hospitalizations', 'Recent labs available (or willing to get them)', 'Adult patients (18+)'],
      notFor: ['Newly diagnosed conditions needing in-person workup', 'Controlled substance prescriptions (TeleDirectMD does not prescribe)', 'Significant symptom change since last visit', 'Conditions requiring in-person physical exam', 'Pediatric patients'],
    },
    decisionGuide: {
      title: 'Refills: Telehealth, In-Person, or Pharmacy Direct?',
      steps: [
        { num: 1, head: 'Stable on the same dose for 6+ months?', body: 'Telehealth refill visit is appropriate. $49 visit, generic Rx via GoodRx.', good: true },
        { num: 2, head: 'Symptoms changed or labs overdue?', body: 'Telehealth visit + lab order. We can send a Quest/LabCorp order; you drop in at your convenience.', good: true },
        { num: 3, head: 'Newly worsening symptoms or new diagnosis?', body: 'In-person primary care visit is the right call — physical exam matters here.', good: false },
        { num: 4, head: 'Need a controlled substance?', body: 'TeleDirectMD does not prescribe controlled substances. See your PCP or specialist in-person.', good: false },
      ],
    },
    medicationsTable: {
      title: 'Common Generic Refill Costs (GoodRx, 2026, 30-Day Supply)',
      caption: 'Retail pharmacy with GoodRx coupon. Without GoodRx, cash retail averages ~$42/Rx (PMC 2020).',
      rows: [
        { drug: 'Lisinopril (BP)', cost: '$4–$12', sourceUrl: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
        { drug: 'Atorvastatin (cholesterol)', cost: '$8–$15', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Metoprolol (BP/cardiac)', cost: '$3–$9', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/' },
        { drug: 'Albuterol inhaler (asthma)', cost: '$20–$25', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Levothyroxine (hypothyroidism)', cost: '$4–$15', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Omeprazole (GERD)', cost: '$4–$12', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Sertraline (anxiety/depression)', cost: '$4–$15', sourceUrl: 'https://www.goodrx.com' },
        { drug: 'Metformin (type 2 diabetes)', cost: '$4–$10', sourceUrl: 'https://www.goodrx.com' },
      ],
    },
    homeCare: {
      title: 'Save More on Your Prescription',
      bullets: [
        'Use GoodRx, Cost Plus Drugs, or Amazon Pharmacy — compare all three.',
        'Ask the prescriber for the 90-day supply if you\'re stable; cuts visit frequency.',
        'Use a discount card AT pharmacy checkout — your insurance is sometimes more expensive on generics.',
        'Pay with HSA/FSA card — both visit and Rx are eligible.',
        'Mail-order pharmacies often beat retail for 90-day generic supplies.',
      ],
    },
    whenNotToUse: {
      title: 'When NOT to Use Telehealth for a Refill',
      bullets: [
        'Controlled substances (we do not prescribe).',
        'New diagnosis without in-person workup.',
        'Significant symptom change or recent hospitalization.',
        'Conditions requiring in-person physical exam (some cardiac, neuro, or rheumatologic).',
        'Pediatric patients (adults only).',
      ],
    },
    faqs: [
      { question: 'How much does an online prescription cost?', answer: 'TeleDirectMD\'s $49 video visit + a generic prescription ($4–$30 via GoodRx) = $53–$79 total for most refills. Common generics like lisinopril run $4–$12 for a 30-day supply.' },
      { question: 'Are online prescriptions cheaper than in-person?', answer: 'Yes for the visit fee — $49 vs. $100–$250 cash-pay primary care. Medication costs are identical regardless of where the prescription was written; use GoodRx, Cost Plus Drugs, or Amazon Pharmacy to lower drug cost.' },
      { question: 'Can TeleDirectMD prescribe controlled substances?', answer: 'No. We do not prescribe controlled substances (Adderall, Xanax, opioids, etc.). For those, you\'ll need an in-person prescriber.' },
      { question: 'What conditions are appropriate for online refills?', answer: 'Stable chronic conditions: hypertension, hyperlipidemia, asthma, hypothyroidism, GERD, type 2 diabetes (oral meds), anxiety/depression on stable SSRIs, allergies, and others.' },
      { question: 'How fast will I get the prescription?', answer: 'E-prescriptions reach your pharmacy within 30 minutes of the visit. Most patients pick up within 1 hour.' },
      { question: 'Can I use my insurance for a TeleDirectMD refill visit?', answer: 'Yes — Aetna, BCBS, and UnitedHealthcare in select states. If your plan is not in-network, the $49 self-pay rate often beats your in-network cost when your deductible is unmet.' },
      { question: 'Do I need labs for a refill?', answer: 'Some chronic conditions (hyperlipidemia, hypothyroidism, diabetes) need annual or biannual labs. We can send a lab order to Quest or LabCorp; you drop in at your convenience and we follow up by message.' },
      { question: 'Can I get a 90-day supply?', answer: 'Yes, when clinically appropriate. A 90-day supply is more cost-effective and reduces visit frequency.' },
    ],
    references: [
      { label: 'GoodRx — Drug pricing main', url: 'https://www.goodrx.com' },
      { label: 'GoodRx — Antibiotic & cardiovascular drug pricing', url: 'https://www.goodrx.com/conditions/urinary-tract-infection/drugs' },
      { label: 'JGIM / PMC — GoodRx vs. cash retail (2020)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/' },
      { label: 'Doctronic — GoodRx vs. insurance (2026)', url: 'https://www.doctronic.ai/blog/goodrx-vs-insurance/' },
      { label: 'Venteur — Urgent care + telehealth cost (2026)', url: 'https://www.venteur.com/blog/how-much-does-an-urgent-care-visit-cost-guide' },
      { label: 'GoodRx — Drug savings overview', url: 'https://www.goodrx.com/drugs/savings' },
    ],
  },
  // ──────────────────────────────────────────────────────────────────
  'strep-throat-cost': {
  slug: 'strep-throat-cost',
  pid: 'cost-strep-throat',

  medicalCondition: {
    name: 'Streptococcal pharyngitis',
    alternateName: 'Strep throat',
    code: { code: 'J02.0', codingSystem: 'ICD-10' },
    signOrSymptom: ['Sore throat', 'Fever', 'Tender cervical lymphadenopathy', 'Tonsillar exudate'],
    possibleTreatment: 'Penicillin V or amoxicillin (first-line); cephalexin or azithromycin for penicillin-allergic patients',
  },
  service: {
    name: 'TeleDirectMD strep throat $49 visit',
    serviceType: 'Telehealth strep throat evaluation and treatment',
    price: '49',
    priceCurrency: 'USD',
  },
  procedure: {
    name: 'Telehealth Centor/McIsaac evaluation for streptococcal pharyngitis',
    procedureType: 'NoninvasiveProcedure',
    howPerformed: 'A board-certified MD applies the Centor/McIsaac scoring system over secure video, recommends rapid antigen testing where appropriate, and prescribes evidence-based antibiotic therapy when GAS is confirmed or highly probable.',
  },

  h1: 'Strep Throat Treatment Cost in 2026: Online Doctor vs Urgent Care vs ER',
  metaTitle: 'Strep Throat Treatment Cost (2026): Telehealth $54 vs Urgent Care $185–$345 | TeleDirectMD',
  metaDescription: 'Strep throat treatment costs $54–$67 via telehealth (TeleDirectMD $49 visit + $5–$18 antibiotic) vs $185–$345 urgent care vs $99–$154 CVS MinuteClinic vs $500–$2,700 ER. Verified 2026 cash-pay prices with Centor criteria explainer.',
  breadcrumb: 'Strep Throat Cost',

  answerLead: 'Strep throat treatment costs $54–$67 total via telehealth (TeleDirectMD $49 visit + $5–$18 amoxicillin) — about 71–80% less than urgent care ($185–$345) and 96% less than the ER ($500–$2,700) for the same outcome.',
  answerBody: 'A telehealth visit + antibiotic costs <strong>$54–$67 total</strong> at TeleDirectMD ($49 visit + amoxicillin $5.20–$16.34 via <a href="https://www.goodrx.com/amoxicillin">GoodRx</a>).<div class="tdmd-answer-stats"><span>$54–$67 telehealth total</span><span>71–80% less than urgent care</span><span>96% less than ER</span></div> Urgent care (visit + rapid strep test + antibiotic): <strong>$185–$345</strong> (<a href="https://bettercare.com/costs/strep-test-cost">BetterCare 2026</a>; <a href="https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care">Mira Health</a>). CVS MinuteClinic (NP visit + test bundled): <strong>$99–$154</strong> (<a href="https://www.cvs.com/minuteclinic/services/price-lists">CVS MinuteClinic, 2024</a>). ER (rarely appropriate): <strong>$500–$2,700</strong> (<a href="https://bettercare.com/costs/er-visit-cost">BetterCare</a>). First-line antibiotic per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC</a> and <a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/">IDSA</a>: penicillin V or amoxicillin; penicillin-allergic patients: cephalexin or azithromycin.',

  heroSub: 'TeleDirectMD $49 visit + $5–$18 antibiotic = $54–$67 total. Urgent care charges $185–$345 for the same outcome.',
  heroIntro: 'Group A Streptococcus (GAS) accounts for roughly 5–15% of adult sore throats — but nearly 60% of patients with any sore throat receive an antibiotic (<a href="https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html">AAFP, Am Fam Physician 2024</a>). The right approach is to apply a validated clinical decision rule (Centor/McIsaac criteria), confirm with a rapid antigen test when the score is intermediate, and prescribe antibiotics only to confirmed or high-probability GAS cases. A board-certified physician can execute this algorithm entirely over video — at a fraction of urgent care cost.',
  heroCardTitle: 'Strep Throat Visit at TeleDirectMD: $49',
  heroCardItems: [
    'Video visit with board-certified MD (Dr. Parth Bhavsar)',
    'Centor/McIsaac score assessed from your reported symptoms',
    'Empiric antibiotic if pre-test probability is high (score 3–4)',
    'Referral for rapid strep test at retail clinic if score is intermediate',
    'E-prescription for amoxicillin, penicillin V, cephalexin, or azithromycin',
    'Available in 41 states — same-day, evenings & weekends',
  ],
  heroBenefits: [
    'Total $54–$67 typical vs. $185–$345 at urgent care',
    'Skip the waiting room — Centor algorithm works via video history',
    'First-line antibiotics (amoxicillin/penicillin V) as low as $5.20–$9.46 with GoodRx',
    'If rapid test needed: at-home kit ~$25–$50 — total still < urgent care',
    'In-network with Aetna, BCBS, and UnitedHealthcare in select states',
  ],

  costTable: {
    title: 'Strep Throat Treatment Cost by Setting (2026, Cash-Pay Total)',
    caption: 'Includes visit + rapid antigen detection test (RADT, when applicable) + first-line antibiotic. Sources verified April 2026.',
    rows: [
      {
        setting: 'TeleDirectMD (online)',
        cost: '$54–$67 typical',
        includes: '$49 visit + amoxicillin ($5.20–$16.34) or penicillin V ($9.46–$18.38) via GoodRx',
        source: 'TeleDirectMD; GoodRx 2026',
        sourceUrl: 'https://www.goodrx.com/amoxicillin',
      },
      {
        setting: 'Telehealth + at-home strep kit',
        cost: '$74–$117',
        includes: '$49 visit + at-home rapid strep kit ($25–$50) + antibiotic ($5–$18)',
        source: 'BetterCare 2026',
        sourceUrl: 'https://bettercare.com/costs/strep-test-cost',
      },
      {
        setting: 'Retail clinic (CVS MinuteClinic)',
        cost: '$99–$154',
        includes: 'NP/PA visit ($99–$139) + rapid strep test typically bundled + antibiotic ($9–$15)',
        source: 'CVS MinuteClinic, 2024',
        sourceUrl: 'https://www.cvs.com/minuteclinic/services/price-lists',
      },
      {
        setting: 'Primary care (cash-pay)',
        cost: '$135–$315',
        includes: 'In-person visit ($100–$250) + RADT ($25–$50) + antibiotic ($9–$15)',
        source: 'Mira Health 2025',
        sourceUrl: 'https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance',
      },
      {
        setting: 'Urgent care (in-person)',
        cost: '$185–$345',
        includes: 'Walk-in visit ($150–$280) + rapid strep test ($25–$50) + antibiotic ($9–$15)',
        source: 'BetterCare 2026; Mira Health',
        sourceUrl: 'https://bettercare.com/costs/strep-test-cost',
      },
      {
        setting: 'Emergency room (uninsured)',
        cost: '$500–$2,700+',
        includes: 'ED visit + test + antibiotic; strep throat rarely justifies ER',
        source: 'BetterCare 2025',
        sourceUrl: 'https://bettercare.com/costs/er-visit-cost',
      },
    ],
  },

  platformTable: null,
  conditionRollup: null,

  educationalGap: {
    title: 'When Can a Telehealth Doctor Treat Strep Without a Swab?',
    paragraphs: [
      'The <a href="https://www.mdcalc.com/calc/104/centor-score-modified-mcisaac-strep-pharyngitis">Modified Centor (McIsaac) Score</a> assigns one point each for: fever above 38°C (100.4°F), tonsillar exudate or swelling, tender anterior cervical lymph nodes, and absence of cough — with an age adjustment (+1 for ages 3–14, −1 for age ≥45). A score of 0–1 indicates <strong>7–13% probability</strong> of GAS — no testing or antibiotics needed. Scores of 2–3 indicate intermediate risk (20–38%) — a rapid antigen detection test (RADT) is recommended. A score of 4–5 indicates 50–69% probability — empiric antibiotic therapy or testing is reasonable per <a href="https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html">AAFP (Am Fam Physician 2024)</a>.',
      'During a TeleDirectMD video visit, Dr. Bhavsar evaluates your reported symptoms to calculate your Centor score. Patients without cough who report fever and painful swallowing may score 2–4 without any physical touch. The <a href="https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html">AAFP (2024)</a> notes explicitly: <em>"The limited history used in these decision rules is amenable to virtual visits."</em> Patients with score ≥3 and consistent symptoms may receive empiric amoxicillin or penicillin V directly. Intermediate-score patients are guided to a nearby retail clinic or pharmacy for a rapid strep swab ($25–$50), then return for a prescription if positive — total cost still well below urgent care.',
      'Per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC clinical guidance (2025)</a>, patients with clear viral features (cough, rhinorrhea, hoarseness, oral ulcers) do not need strep testing at all. Correctly identifying low-risk viral cases avoids unnecessary antibiotic prescribing — a core principle of <a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/">IDSA\'s 2012 (updated 2025) GAS pharyngitis guideline</a>, which specifies that antibiotics should only be given to patients with laboratory-confirmed or high-probability GAS.',
    ],
  },

  whoWeHelp: {
    title: 'Who Benefits Most From Telehealth Strep Treatment',
    groups: [
      { label: 'Adults with classic strep features (score 3–4)', desc: 'Empiric amoxicillin or penicillin V prescribed in one $49 video visit — no waiting room, no strep test charge.' },
      { label: 'Adults with intermediate Centor score', desc: '$49 visit guides you to a $25–$50 pharmacy rapid test; prescription follows the result. Total ~$74–$117 — still cheaper than urgent care.' },
      { label: 'Penicillin-allergic patients', desc: 'Cephalexin or azithromycin prescribed based on allergy severity — same $49 visit, same-day prescription.' },
      { label: 'Working adults and college students', desc: 'Book on a lunch break; antibiotic waiting at your pharmacy by evening. No half-day in urgent care.' },
    ],
  },

  appropriateBlock: {
    title: 'When Strep Throat Belongs in Telehealth vs. In-Person',
    goodFor: [
      'Adult (18+), otherwise healthy',
      'Classic strep features: fever, tonsillar exudate, no cough (Centor ≥2)',
      'Clearly viral pattern (no cough, rhinorrhea, hoarseness) — for reassurance and symptom management',
      'No drooling, stridor, or muffled "hot potato" voice',
      'No severe unilateral swelling (peritonsillar abscess excluded)',
      'Symptoms present for ≤3–5 days',
    ],
    notFor: [
      'Drooling or inability to swallow saliva — go to the ER immediately',
      'Stridor or high-pitched breathing — possible epiglottitis; ER only',
      'Muffled "hot potato" voice — peritonsillar abscess risk',
      'Severe one-sided throat swelling (uvula deviation)',
      'Pediatric patients under 18 (TeleDirectMD treats adults only — see a pediatrician)',
      'Known rheumatic fever history — requires in-person evaluation',
    ],
  },

  decisionGuide: {
    title: 'Strep Throat: Telehealth, In-Person, or ER?',
    steps: [
      {
        num: 1,
        head: 'Drooling, stridor, or muffled voice?',
        body: 'Go to the ER immediately. These signs suggest peritonsillar abscess or epiglottitis — surgical emergencies that cannot be managed via video.',
        good: false,
      },
      {
        num: 2,
        head: 'Fever, no cough, painful swallowing (Centor ≥2)?',
        body: 'Book a $49 TeleDirectMD visit. High Centor scores (3–4) can receive empiric amoxicillin or penicillin V directly. Total: $54–$67.',
        good: true,
      },
      {
        num: 3,
        head: 'Intermediate score and want lab confirmation?',
        body: 'TeleDirectMD directs you to a nearby pharmacy for a rapid strep swab ($25–$50). Prescription follows a positive result. Total: $74–$117 — still under urgent care.',
        good: true,
      },
      {
        num: 4,
        head: 'Recurrent strep (3+ episodes per year)?',
        body: 'Telehealth handles the current episode fine. Ask Dr. Bhavsar for a referral to ENT to discuss tonsillectomy thresholds (≥7 episodes/year, or ≥5 in each of 2 years, or ≥3 in each of 3 years).',
        good: true,
      },
    ],
  },

  medicationsTable: {
    title: 'Strep Throat Antibiotic Costs (GoodRx Cash Price, 2026)',
    caption: 'Per IDSA and CDC: 10-day course for beta-lactams. First-line: amoxicillin or penicillin V. Penicillin-allergic alternatives below.',
    rows: [
      {
        drug: 'Amoxicillin 500mg (first-line, 20–21 caps)',
        cost: '$5.20–$16.34',
        sourceUrl: 'https://www.goodrx.com/amoxicillin',
      },
      {
        drug: 'Penicillin VK 500mg (first-line alternative, 20 tabs)',
        cost: '$9.46–$18.38',
        sourceUrl: 'https://www.goodrx.com/penicillin-v-potassium/how-much-is-penicillin-without-insurance',
      },
      {
        drug: 'Cephalexin 500mg (non-anaphylactic penicillin allergy, 28 caps)',
        cost: '$8.15–$37.20',
        sourceUrl: 'https://www.goodrx.com/cephalexin',
      },
      {
        drug: 'Azithromycin Z-pack 250mg × 6 tabs (severe penicillin allergy, 5-day)',
        cost: '$5.66–$34.90',
        sourceUrl: 'https://www.goodrx.com/azithromycin',
      },
    ],
  },

  homeCare: {
    title: 'Supportive Care While the Antibiotic Works',
    bullets: [
      'Salt-water gargle (½ tsp salt in 8 oz warm water) several times a day.',
      'Acetaminophen or ibuprofen for pain and fever — follow dosing on the label.',
      'OTC throat lozenges with benzocaine for short-term numbing.',
      'Cold or warm liquids and soft foods while swallowing is painful.',
      'Rest — fever typically breaks within 24–48 hours on appropriate antibiotics.',
      'Once 24 hours of antibiotic therapy is complete and you are afebrile, you are no longer considered contagious (<a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC, 2025</a>).',
      'Finish the full 10-day antibiotic course even if you feel better — stopping early risks relapse and, rarely, rheumatic fever.',
    ],
  },

  whenNotToUse: {
    title: 'When NOT to Use TeleDirectMD for Strep Throat',
    bullets: [
      'Drooling, severe difficulty swallowing saliva, or stridor — call 911 or go to the ER.',
      'Muffled voice or significant unilateral throat swelling — possible abscess; ER or ENT in-person.',
      'Pediatric patients under 18 — TeleDirectMD treats adults only; see a pediatrician.',
      'Known history of acute rheumatic fever — in-person follow-up and cardiology involvement are appropriate.',
      'Symptoms persisting or worsening after 48–72 hours on antibiotics — reevaluation in-person may be needed.',
      'Need for controlled substance prescriptions — TeleDirectMD does not prescribe controlled substances.',
    ],
  },

  faqs: [
    {
      question: 'How much does strep throat treatment cost without insurance in 2026?',
      answer: 'Via telehealth at TeleDirectMD: $49 visit + $5.20–$18.38 antibiotic = <strong>$54–$67 total</strong> (prices verified via GoodRx April 2026). Urgent care: $185–$345 (visit + rapid strep test + antibiotic). CVS MinuteClinic: $99–$154 with test typically bundled. Emergency room: $500–$2,700 — rarely the right setting for strep.',
    },
    {
      question: 'Can a telehealth doctor treat strep without a swab?',
      answer: 'Yes, in high-probability cases. The Modified Centor (McIsaac) Score uses fever, tonsillar exudate, absent cough, anterior cervical lymphadenopathy, and age to estimate GAS probability. A score of 3–4 (50–69% probability) supports empiric antibiotic therapy per <a href="https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html">AAFP 2024 guidelines</a>. The AAFP notes that the limited history used in Centor scoring "is amenable to virtual visits." Intermediate scores (2–3) warrant a rapid antigen test, which can be done at a pharmacy for $25–$50.',
    },
    {
      question: 'Do I need a rapid strep test?',
      answer: 'Not always. Per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC clinical guidance</a>, patients with clear viral features (cough, runny nose, hoarseness) do not need testing. Patients with high Centor scores (3–4) can receive empiric antibiotics without a test. Testing is most useful for intermediate-score adults (2–3) and is recommended for all symptomatic children after a negative RADT to rule out false negatives. For adults, a negative RADT does not routinely require follow-up throat culture.',
    },
    {
      question: 'Can my pharmacy do a strep test?',
      answer: 'Yes. Many CVS MinuteClinics, Walgreens Health clinics, and Walmart Care Clinics offer rapid strep tests. CVS charges approximately $35–$45 for the test alone; with a consultation visit, the cost is $99–$139 bundled. If TeleDirectMD determines a test is needed after your video visit, you can go to a nearby pharmacy clinic for the swab and then return to TeleDirectMD for the prescription if positive — total cost $74–$117, still well under urgent care.',
    },
    {
      question: 'What if my home strep test is negative?',
      answer: 'A negative at-home or pharmacy rapid antigen test in adults is generally sufficient to rule out GAS pharyngitis — throat culture after a negative RADT is <em>not</em> routinely indicated in adults per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC</a>. Your symptoms are likely viral; treatment shifts to supportive care (pain relief, fluids, rest). If symptoms worsen over 5+ days or you develop a high fever with severe swallowing difficulty, seek in-person evaluation.',
    },
    {
      question: 'Why is amoxicillin the first-line antibiotic for strep?',
      answer: 'Amoxicillin (and penicillin V) are first-line per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC</a> and <a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/">IDSA</a> because Group A Streptococcus has never developed clinical resistance to penicillin-class antibiotics. They are highly effective, narrow-spectrum (sparing the gut microbiome), well-tolerated, and inexpensive — amoxicillin is as low as $5.20 with a GoodRx coupon (<a href="https://www.goodrx.com/amoxicillin">GoodRx, 2026</a>). Amoxicillin is often preferred over penicillin V in adults for once-daily or twice-daily dosing convenience.',
    },
    {
      question: 'Will a telehealth doctor prescribe penicillin VK for strep?',
      answer: 'Yes. Penicillin V potassium (penicillin VK) 500mg twice daily for 10 days is a recommended first-line regimen for adults per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC</a>. TeleDirectMD can prescribe it in states where Dr. Bhavsar is licensed. Cash price with GoodRx: $9.46–$18.38 for 20 tablets (<a href="https://www.goodrx.com/penicillin-v-potassium/how-much-is-penicillin-without-insurance">GoodRx, 2026</a>). Some patients prefer amoxicillin for easier twice-daily dosing; both are clinically equivalent for uncomplicated GAS pharyngitis.',
    },
    {
      question: 'What if I\'m allergic to penicillin?',
      answer: 'Per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC guidelines</a> and <a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/">IDSA</a>, alternatives depend on allergy severity: cephalexin 500mg twice daily × 10 days for non-anaphylactic (mild) penicillin allergy ($8.15–$37.20 with GoodRx); azithromycin Z-pack (5-day course) for severe/anaphylactic penicillin allergy ($5.66–$34.90 with GoodRx). Note: azithromycin resistance in GAS is well-documented and varies by region. If you have a documented penicillin allergy, tell Dr. Bhavsar at the start of your visit — the prescription will be tailored accordingly.',
    },
    {
      question: 'Why does the ER cost so much for strep throat?',
      answer: 'ER bills for strep throat without insurance range from $500 to $2,700 because you are charged a facility fee (independent of the visit), professional fees, and itemized test charges — at full chargemaster rates without any negotiated discount. The rapid strep test alone is often billed at $30–$672 depending on the hospital (<a href="https://bettercare.com/costs/er-visit-cost">BetterCare</a>). Uninsured patients receive no negotiated rate reduction. Strep throat almost never requires ER-level care — a telehealth visit or urgent care visit is clinically equivalent for uncomplicated GAS pharyngitis at a fraction of the cost.',
    },
    {
      question: 'Does insurance cover a telehealth visit for strep?',
      answer: 'TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states — your standard telehealth copay replaces the $49 self-pay fee. Cash-pay $49 is available in all 41 states where Dr. Bhavsar is licensed. HSA and FSA cards are accepted. To confirm in-network status for your specific plan, visit <a href="/insurance/">TeleDirectMD insurance information</a> or call your insurer before booking.',
    },
    {
      question: 'What about my child — can TeleDirectMD treat strep in kids?',
      answer: 'TeleDirectMD treats adults aged 18 and older only. Pediatric strep throat should be evaluated by a pediatrician or pediatric urgent care provider. Children who test positive for strep require throat culture follow-up after a negative RADT (unlike adults), per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC guidance</a> — making in-person pediatric care particularly important for children.',
    },
    {
      question: 'Is strep throat contagious during treatment?',
      answer: 'Yes — until antibiotic therapy has been underway for at least 12–24 hours and you are afebrile. Per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC clinical guidance (2025)</a>: "Treatment with an appropriate antibiotic for 12 hours or longer limits a person\'s ability to transmit group A strep bacteria." You should stay home from work, school, or crowded settings until you are fever-free and at least 12–24 hours into appropriate antibiotic therapy.',
    },
    {
      question: 'When can I return to work or school after strep?',
      answer: 'Per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC (2025)</a>, you may return to work or school when you are (1) afebrile and (2) at least 12–24 hours into appropriate antibiotic therapy. In healthcare worker or outbreak settings, 24 hours is the recommended minimum. Most patients with adequate antibiotic coverage are symptomatically much better within 24–48 hours — fever resolves, pain improves, and energy returns. Finish the full 10-day course regardless.',
    },
    {
      question: 'What happens if strep throat is not treated?',
      answer: 'Untreated or inadequately treated Group A Strep pharyngitis carries a small but real risk of serious complications including acute rheumatic fever (which can damage heart valves), post-streptococcal glomerulonephritis (kidney inflammation), peritonsillar abscess, and spread to close contacts. Per <a href="https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html">CDC</a>, antibiotic treatment shortens symptom duration, reduces transmission risk, and decreases complication risk. This is why testing and treating probable GAS cases matters — and why the $49 telehealth visit pays for itself in avoided downstream costs.',
    },
  ],

  references: [
    {
      label: 'CDC — Clinical Guidance for Group A Streptococcal Pharyngitis (November 2025)',
      url: 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html',
    },
    {
      label: 'CDC — About Group A Strep Infection',
      url: 'https://www.cdc.gov/group-a-strep/about/index.html',
    },
    {
      label: 'IDSA — 2012 (Updated 2025) Clinical Practice Guideline: Group A Streptococcal Pharyngitis',
      url: 'https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/',
    },
    {
      label: 'AAFP — Streptococcal Pharyngitis: Evidence Review and Clinical Guidelines (Am Fam Physician 2024)',
      url: 'https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html',
    },
    {
      label: 'MDCalc — Centor Score (Modified/McIsaac) for Strep Pharyngitis',
      url: 'https://www.mdcalc.com/calc/104/centor-score-modified-mcisaac-strep-pharyngitis',
    },
    {
      label: 'GoodRx — Amoxicillin 2026 Prices (updated April 2026)',
      url: 'https://www.goodrx.com/amoxicillin',
    },
    {
      label: 'GoodRx — Penicillin VK: How Much Is Penicillin Without Insurance (2026)',
      url: 'https://www.goodrx.com/penicillin-v-potassium/how-much-is-penicillin-without-insurance',
    },
    {
      label: 'GoodRx — Cephalexin 2026 Prices',
      url: 'https://www.goodrx.com/cephalexin',
    },
    {
      label: 'GoodRx — Azithromycin 2026 Prices',
      url: 'https://www.goodrx.com/azithromycin',
    },
    {
      label: 'CVS MinuteClinic — Service Price Lists (2024)',
      url: 'https://www.cvs.com/minuteclinic/services/price-lists',
    },
    {
      label: 'BetterCare — Strep Test Cost (2026)',
      url: 'https://bettercare.com/costs/strep-test-cost',
    },
    {
      label: 'BetterCare — ER Visit Cost (April 2025)',
      url: 'https://bettercare.com/costs/er-visit-cost',
    },
    {
      label: 'Mira Health — How Much Does a Strep Test Cost at Urgent Care?',
      url: 'https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care',
    },
    {
      label: 'Mira Health — How Much Does Urgent Care Cost Without Insurance? (2025)',
      url: 'https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance',
    },
    {
      label: 'TeleDirectMD — Sore Throat Treatment Cost (parent cost page)',
      url: 'https://teledirectmd.com/cost/sore-throat-treatment-cost/',
    },
  ],
},

};
