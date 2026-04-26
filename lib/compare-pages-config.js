// ─── Compare-page content config ────────────────────────────────────────
// Per-page content for /compare/teledirectmd-vs-{competitor}/ pages.
// Honest comparisons — every competitor claim cites the source URL from
// teledirectmd_competitor_research.md. Verified April 2025.
//
// Mirrors the shape of lib/cost-pages-config.js so the dynamic route
// (app/compare/[competitor]/page.js) is a thin renderer.

export const COMPARE_PAGE_SLUGS = [
  'teledirectmd-vs-teladoc',
  'teledirectmd-vs-mdlive',
  'teledirectmd-vs-amwell',
  'teledirectmd-vs-doctor-on-demand',
  'teledirectmd-vs-sesame',
  'teledirectmd-vs-k-health',
];

// Each compare page links to 2 sibling compare pages + the master cost page
// + 1-2 condition cost pages. PR 1 (cost pages) is the dependency.
export const COMPARE_RELATED = {
  'teledirectmd-vs-teladoc':           { compare: ['teledirectmd-vs-mdlive', 'teledirectmd-vs-amwell'],          cost: ['online-doctor-visit-cost', 'uti-treatment-cost'] },
  'teledirectmd-vs-mdlive':            { compare: ['teledirectmd-vs-teladoc', 'teledirectmd-vs-doctor-on-demand'], cost: ['online-doctor-visit-cost', 'sinus-infection-treatment-cost'] },
  'teledirectmd-vs-amwell':            { compare: ['teledirectmd-vs-teladoc', 'teledirectmd-vs-doctor-on-demand'], cost: ['online-doctor-visit-cost', 'sinus-infection-treatment-cost'] },
  'teledirectmd-vs-doctor-on-demand':  { compare: ['teledirectmd-vs-amwell', 'teledirectmd-vs-mdlive'],            cost: ['online-doctor-visit-cost', 'sore-throat-treatment-cost'] },
  'teledirectmd-vs-sesame':            { compare: ['teledirectmd-vs-k-health', 'teledirectmd-vs-teladoc'],          cost: ['online-doctor-visit-cost', 'online-prescription-cost'] },
  'teledirectmd-vs-k-health':          { compare: ['teledirectmd-vs-sesame', 'teledirectmd-vs-mdlive'],             cost: ['online-doctor-visit-cost', 'online-prescription-cost'] },
};

// Render-time helper: builds the 10-row comparison table for a given page.
// Row order is fixed across all 6 pages so AI engines see a consistent schema.
export function getCompareTableRows(slug) {
  const cfg = COMPARE_PAGES[slug];
  if (!cfg) return [];
  const c = cfg.competitor;
  return [
    { dim: 'Cash-pay urgent care visit',         tdmd: '$49 flat',                                       comp: c.urgentCare,    compSrc: c.urgentCareSrc },
    { dim: 'Mental health (cash-pay)',           tdmd: 'Not offered',                                    comp: c.mentalHealth,  compSrc: c.mentalHealthSrc },
    { dim: 'Insurance accepted',                 tdmd: 'Aetna, BCBS, UnitedHealthcare (select states)',   comp: c.insurance,     compSrc: c.insuranceSrc },
    { dim: 'States covered',                     tdmd: '41',                                              comp: c.states,        compSrc: c.statesSrc },
    { dim: 'Hours / availability',               tdmd: 'Same-day; evenings & weekends',                   comp: c.hours,         compSrc: c.hoursSrc },
    { dim: 'Prescriptions',                      tdmd: 'Same-day; pharmacy of your choice',               comp: c.rx,            compSrc: c.rxSrc },
    { dim: 'Advertised wait time',               tdmd: 'Not published; same-day appointments',            comp: c.wait,          compSrc: c.waitSrc },
    { dim: 'Provider type',                      tdmd: 'MD only — Dr. Parth Bhavsar (board-certified)',   comp: c.provider,      compSrc: c.providerSrc },
    { dim: 'Membership required?',               tdmd: 'No',                                              comp: c.membership,    compSrc: c.membershipSrc },
    { dim: 'HSA / FSA accepted',                 tdmd: 'Yes',                                             comp: c.hsa,           compSrc: c.hsaSrc },
  ];
}

// Last-verified stamp — update on every change to a competitor section.
export const LAST_VERIFIED = '2026-04-26';

// ──────────────────────────────────────────────────────────────────────
// Per-competitor configs.
// Source URLs are verified against teledirectmd_competitor_research.md.
// ──────────────────────────────────────────────────────────────────────

export const COMPARE_PAGES = {

  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-teladoc': {
    slug: 'teledirectmd-vs-teladoc',
    pid: 'cmp-teladoc',
    competitorName: 'Teladoc',
    competitorUrl: 'https://www.teladochealth.com/start/no-insurance',
    h1: 'TeleDirectMD vs. Teladoc: 2026 Comparison',
    metaTitle: 'TeleDirectMD vs. Teladoc (2026): Cost, Provider Type, Coverage',
    metaDescription: 'Honest comparison: TeleDirectMD ($49 flat, 41 states, MD-only) vs. Teladoc ($89 cash-pay, 50 states, MD/NP mixed, mental health). Verified 2026 prices with sources.',
    breadcrumb: 'TeleDirectMD vs. Teladoc',
    answerLead: 'TeleDirectMD vs. Teladoc — short answer:',
    answerBody: 'TeleDirectMD costs <strong>$49 per visit</strong> and always connects you with a board-certified MD (Dr. Parth Bhavsar). Teladoc charges <strong>$89/visit</strong> cash-pay (<a href="https://www.teladochealth.com/start/no-insurance">Teladoc</a>) and <a href="https://www.linkedin.com/jobs/view/urgent-care-nurse-practitioner-full-time-at-teladoc-health-4387999541">actively hires NPs and PAs</a> for urgent care, so the provider type isn\'t patient-selectable. Both are HIPAA-compliant. <strong>TeleDirectMD wins on price (44% cheaper) and the named MD-only model.</strong> <strong>Teladoc wins on 50-state coverage, mental health services, and employer-benefit penetration.</strong>',
    heroSub: 'Side-by-side, with sources. Cheaper visit at TeleDirectMD; broader reach and mental health at Teladoc.',
    heroIntro: 'Teladoc is the largest US telehealth platform by visit volume — well-known, deeply integrated with employers, and a default for many insurance plans. TeleDirectMD is the leaner alternative: a single named board-certified physician at $49 flat across 41 states. This page is an honest, sourced comparison.',
    heroCardTitle: 'Quick Answer',
    heroCardItems: [
      'Cheaper urgent care: TeleDirectMD ($49 vs. $89)',
      'Bigger reach: Teladoc (50 vs. 41 states)',
      'Mental health: Teladoc only',
      'Named MD on every visit: TeleDirectMD only',
      'Insurance: both accept major plans',
      'Membership: neither requires one',
    ],
    heroBenefits: [
      '$49 vs. $89 — TeleDirectMD is 44% cheaper for cash-pay urgent care',
      'Single named board-certified MD vs. mixed MD/NP/PA panel at Teladoc',
      'Same-day, evenings & weekends — vs. Teladoc 24/7 overnight',
      'In-network with Aetna, BCBS, UHC; Teladoc has broader insurer integration',
      'No mental health offering at TeleDirectMD — choose Teladoc if therapy or psychiatry is your primary need',
    ],
    competitor: {
      urgentCare: '$89/visit',                                                               urgentCareSrc:    'https://www.teladochealth.com/start/no-insurance',
      mentalHealth: '$119/therapy visit',                                                    mentalHealthSrc:  'https://www.teladochealth.com/start/no-insurance',
      insurance: 'Yes — many major plans incl. Aetna, BCBS, UHC',                            insuranceSrc:     'https://www.teladochealth.com/library/article/how-does-teladoc-work-with-my-insurance',
      states: 'All 50',                                                                      statesSrc:        'https://www.teladochealth.com/organizations/employers/24-7-care',
      hours: '24/7',                                                                         hoursSrc:         'https://www.teladochealth.com/start/no-insurance',
      rx: 'Pharmacy of choice; same-day implied',                                            rxSrc:            'https://www.teladochealth.com/library/article/how-does-teladoc-work-with-my-insurance',
      wait: 'Minutes (testimonial); 24/7 on-demand',                                         waitSrc:          'https://www.teladochealth.com/start/no-insurance',
      provider: 'MD + NP mix (NPs/PAs hired for urgent care)',                               providerSrc:      'https://www.linkedin.com/jobs/view/urgent-care-nurse-practitioner-full-time-at-teladoc-health-4387999541',
      membership: 'No (pay-per-visit without insurance)',                                    membershipSrc:    'https://www.teladochealth.com/start/no-insurance',
      hsa: 'Yes',                                                                            hsaSrc:           'https://www.teladochealth.com/library/article/how-does-teladoc-work-with-my-insurance',
    },
    tdmdWins: [
      { headline: '44% cheaper cash-pay',         detail: '$49 flat vs. <a href="https://www.teladochealth.com/start/no-insurance">$89/visit at Teladoc</a>.' },
      { headline: 'Named MD on every visit',      detail: 'Dr. Parth Bhavsar, board-certified Family Medicine. Teladoc <a href="https://www.linkedin.com/jobs/view/urgent-care-nurse-practitioner-full-time-at-teladoc-health-4387999541">hires NPs and PAs</a> for urgent care; provider type is not patient-selectable.' },
      { headline: 'No 3rd-party gatekeeping',     detail: 'Direct relationship with the prescribing physician.' },
      { headline: 'Predictable pricing',          detail: 'Flat $49 — no per-feature pricing tiers.' },
    ],
    competitorWins: [
      { headline: 'All 50 states',                detail: 'Teladoc covers <a href="https://www.teladochealth.com/organizations/employers/24-7-care">all 50 states 24/7</a>; TeleDirectMD is in 41. AK, HI, NY, MA, RI, VT, NM, OR, AR are gaps.' },
      { headline: 'Mental health (therapy + psych)', detail: 'Therapy at <a href="https://www.teladochealth.com/start/no-insurance">$119</a>; psychiatry available. TeleDirectMD does not offer mental health.' },
      { headline: 'Brand & employer benefits',    detail: 'Teladoc is widely included in employer health plans, often at $0 copay through insurance.' },
      { headline: '24/7 overnight availability',  detail: 'Teladoc is staffed overnight. TeleDirectMD is same-day with evenings/weekends but not overnight.' },
    ],
    pricingDive: {
      title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
      paragraphs: [
        'Cash-pay urgent care: TeleDirectMD <strong>$49 flat</strong>; Teladoc <strong>$89/visit</strong> per <a href="https://www.teladochealth.com/start/no-insurance">Teladoc.com</a>.',
        'Mental health: TeleDirectMD does not offer therapy or psychiatry. Teladoc therapy is <a href="https://www.teladochealth.com/start/no-insurance">$119/visit</a>.',
        'Insurance: both platforms accept major plans. Teladoc lists Aetna, BCBS, UHC and many more in its <a href="https://www.teladochealth.com/library/article/how-does-teladoc-work-with-my-insurance">insurance FAQ</a>; TeleDirectMD is in-network with Aetna, BCBS, UHC in select states. Use whichever produces the lower copay for your plan.',
        'HSA / FSA: accepted at both — <a href="https://www.teladochealth.com/library/article/how-does-teladoc-work-with-my-insurance">Teladoc</a> confirms.',
      ],
    },
    providerDive: {
      title: 'Provider Quality Deep-Dive',
      paragraphs: [
        'TeleDirectMD = Dr. Parth Bhavsar, MD only. Board-certified Family Medicine. NPI 1104323203. The same physician you saw last visit is the one you see this visit.',
        'Teladoc <a href="https://www.linkedin.com/jobs/view/urgent-care-nurse-practitioner-full-time-at-teladoc-health-4387999541">actively hires NPs and PAs</a> for urgent care visits. Provider type and credential are not patient-selectable. Most patients will encounter a mix of MDs, NPs, and PAs over repeat visits.',
        'For straightforward acute conditions (UTI, sinus infection, strep, refills), an NP or PA is clinically appropriate. For patients who specifically want an MD-led visit, TeleDirectMD is the only major platform that guarantees it.',
      ],
    },
    rxDive: {
      title: 'Prescription Handling',
      paragraphs: [
        'TeleDirectMD: same-day e-prescription to your pharmacy of choice. Most prescriptions are at the pharmacy within 30 minutes of the visit ending. No controlled substances.',
        'Teladoc: prescriptions sent to your pharmacy of choice; same-day implied per <a href="https://www.teladochealth.com/library/article/how-does-teladoc-work-with-my-insurance">Teladoc</a> but not explicitly time-bounded. No controlled substances.',
        'Both platforms work with retail (CVS, Walgreens, Walmart) and independent pharmacies. Use GoodRx, Cost Plus Drugs, or Amazon Pharmacy to comparison-shop generic prices.',
      ],
    },
    whoFor: {
      tdmd: ['You\'re uninsured or have a high-deductible plan and want the lowest cash-pay rate', 'You want a single named MD on every visit', 'You\'re in one of the 41 TeleDirectMD states', 'You don\'t need overnight or mental health services'],
      competitor: ['You need 24/7 overnight access', 'You\'re in AK, HI, NY, MA, RI, VT, NM, OR, AR (TeleDirectMD coverage gaps)', 'You need therapy or psychiatry alongside urgent care', 'Teladoc is included in your employer benefits at low/no cost'],
    },
    decisionGuide: {
      title: 'Which One Fits Your Situation?',
      steps: [
        { num: 1, head: 'Need mental health (therapy or psychiatry)?',          body: 'Choose Teladoc — TeleDirectMD does not offer mental health services.', good: false },
        { num: 2, head: 'In one of TeleDirectMD\'s 41 states and paying cash?', body: 'TeleDirectMD\'s $49 beats Teladoc\'s $89 by 44%.', good: true },
        { num: 3, head: 'Teladoc included in your employer benefits at $0?',    body: 'Use what\'s free. Teladoc through employer benefits is often $0 copay.', good: false },
        { num: 4, head: 'Want a named, single physician?',                       body: 'TeleDirectMD\'s MD-only model with Dr. Bhavsar provides continuity Teladoc cannot.', good: true },
      ],
    },
    faqs: [
      { question: 'Is TeleDirectMD cheaper than Teladoc?',                                        answer: 'Yes for cash-pay. TeleDirectMD is $49 flat; Teladoc is $89 per visit per Teladoc\'s no-insurance pricing page. That\'s a 44% discount at TeleDirectMD.' },
      { question: 'Does Teladoc use real doctors?',                                                answer: 'A mix. Teladoc actively hires NPs and PAs for urgent care per a public job posting on LinkedIn. Provider type is not patient-selectable. TeleDirectMD is MD-only with Dr. Parth Bhavsar.' },
      { question: 'Does Teladoc cover all 50 states?',                                             answer: 'Yes — all 50 states 24/7 per Teladoc\'s employer page. TeleDirectMD is in 41 states with same-day, evenings, and weekends.' },
      { question: 'Can I switch from Teladoc to TeleDirectMD?',                                    answer: 'Yes. TeleDirectMD is a separate platform; nothing carries over from Teladoc. Bring your medication list and recent labs to your first visit and book at teledirectmd.com/book-online.' },
      { question: 'Does TeleDirectMD offer mental health like Teladoc does?',                      answer: 'No. TeleDirectMD does not offer therapy or psychiatry. Teladoc offers therapy at $119/visit and has psychiatry. If mental health is your primary need, choose Teladoc.' },
      { question: 'Is HSA/FSA accepted at both?',                                                  answer: 'Yes, both TeleDirectMD and Teladoc accept HSA/FSA per Teladoc\'s insurance FAQ. Use the same HSA/FSA card you would at any qualified medical visit.' },
      { question: 'Which is faster?',                                                              answer: 'Teladoc advertises 24/7 on-demand connection in minutes. TeleDirectMD offers same-day appointments including evenings and weekends but is not 24/7 overnight.' },
      { question: 'Does Teladoc accept the same insurance as TeleDirectMD?',                       answer: 'Both accept Aetna, BCBS, and UnitedHealthcare. Teladoc accepts a broader set including many additional plans per its insurance FAQ. Compare your specific plan benefits to see which produces the lower copay.' },
    ],
    references: [
      { label: 'Teladoc — No-insurance pricing',                            url: 'https://www.teladochealth.com/start/no-insurance' },
      { label: 'Teladoc — Insurance FAQ',                                   url: 'https://www.teladochealth.com/library/article/how-does-teladoc-work-with-my-insurance' },
      { label: 'Teladoc — 24/7 employer benefits',                          url: 'https://www.teladochealth.com/organizations/employers/24-7-care' },
      { label: 'Teladoc NP job posting (LinkedIn)',                         url: 'https://www.linkedin.com/jobs/view/urgent-care-nurse-practitioner-full-time-at-teladoc-health-4387999541' },
      { label: 'Mira Health — Telehealth comparison',                        url: 'https://www.talktomira.com/post/top-telemedicine-services-without-insurance' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-mdlive': {
    slug: 'teledirectmd-vs-mdlive',
    pid: 'cmp-mdlive',
    competitorName: 'MDLIVE',
    competitorUrl: 'https://www.mdlive.com',
    h1: 'TeleDirectMD vs. MDLIVE: 2026 Comparison',
    metaTitle: 'TeleDirectMD vs. MDLIVE (2026): Cost, States, Mental Health',
    metaDescription: 'TeleDirectMD ($49 flat, 41 states, MD-only) vs. MDLIVE ($85 cash-pay, 50 states + PR, dermatology + mental health). Verified 2026 prices with sources.',
    breadcrumb: 'TeleDirectMD vs. MDLIVE',
    answerLead: 'TeleDirectMD vs. MDLIVE — short answer:',
    answerBody: 'TeleDirectMD is <strong>$49 flat</strong> with a single named MD across 41 states. MDLIVE is <strong>$85/visit</strong> cash-pay (<a href="https://www.healthline.com/health/mdlive-reviews">Healthline</a>) — or $89 per <a href="https://www.talktomira.com/post/top-telemedicine-services-without-insurance">Mira Health</a> — and serves <strong>all 50 states + Puerto Rico</strong> (<a href="https://www.mdlive.com/frequently-asked-questions/where-mdlive-available">MDLIVE</a>) with dermatology, therapy, and psychiatry. Both are HIPAA-compliant. <strong>TeleDirectMD wins on price (~42% cheaper).</strong> <strong>MDLIVE wins on reach, dermatology, and mental health.</strong>',
    heroSub: 'TeleDirectMD optimizes for cost and physician continuity; MDLIVE optimizes for breadth (mental health, dermatology, 50-state coverage).',
    heroIntro: 'MDLIVE has 50-state coverage plus Puerto Rico, board-certified providers averaging 15 years of experience per <a href="https://www.mdlive.com/frequently-asked-questions">MDLIVE FAQ</a>, and offers urgent care, dermatology, mental health therapy, and psychiatry. TeleDirectMD focuses on doing one thing — adult primary and urgent care — at the lowest published flat rate.',
    heroCardTitle: 'Quick Answer',
    heroCardItems: [
      'Cheaper urgent care: TeleDirectMD ($49 vs. $85)',
      'Bigger reach: MDLIVE (50 + PR vs. 41 states)',
      'Dermatology: MDLIVE only',
      'Mental health: MDLIVE only',
      'Named MD on every visit: TeleDirectMD only',
      'Insurance: both accept major plans',
    ],
    heroBenefits: [
      '$49 vs. $85 — TeleDirectMD is ~42% cheaper cash-pay',
      'Named MD on every visit (Dr. Bhavsar) — MDLIVE rotates through a panel',
      'No mental health, dermatology, or pediatrics at TeleDirectMD — MDLIVE covers those',
      'In-network with Aetna, BCBS, UHC; MDLIVE has Cigna, Humana, BCBS, Regence and others',
      'Same-day evenings/weekends; MDLIVE is 24/7',
    ],
    competitor: {
      urgentCare: '$85/visit',                                                                urgentCareSrc:    'https://www.healthline.com/health/mdlive-reviews',
      mentalHealth: '$179 initial therapy; $299 initial psych',                               mentalHealthSrc:  'https://www.choosingtherapy.com/mdlive-review/',
      insurance: 'Yes — Cigna, Humana, BCBS, Regence, others',                                insuranceSrc:     'https://www.healthline.com/health/mdlive-reviews',
      states: 'All 50 + Puerto Rico',                                                          statesSrc:        'https://www.mdlive.com/frequently-asked-questions/where-mdlive-available',
      hours: '24/7',                                                                            hoursSrc:         'https://www.healthline.com/health/mdlive-reviews',
      rx: 'Preferred pharmacy; short-term renewals available',                                  rxSrc:            'https://www.mdlive.com/frequently-asked-questions',
      wait: '≤15 min for urgent care',                                                          waitSrc:          'https://www.healthline.com/health/mdlive-reviews',
      provider: 'Board-certified MDs; avg 15 yrs experience',                                   providerSrc:      'https://www.mdlive.com/frequently-asked-questions',
      membership: 'No',                                                                          membershipSrc:    'https://www.choosingtherapy.com/mdlive-review/',
      hsa: 'Yes',                                                                                hsaSrc:           'https://www.healthline.com/health/mdlive-reviews',
    },
    tdmdWins: [
      { headline: '~42% cheaper cash-pay',          detail: '$49 flat vs. <a href="https://www.healthline.com/health/mdlive-reviews">$85 at MDLIVE</a>.' },
      { headline: 'Single named physician',         detail: 'TeleDirectMD = Dr. Parth Bhavsar on every visit. MDLIVE rotates through its provider panel.' },
      { headline: 'Predictable, simple pricing',    detail: 'One product, one price.' },
    ],
    competitorWins: [
      { headline: '50 states + Puerto Rico',        detail: 'MDLIVE covers <a href="https://www.mdlive.com/frequently-asked-questions/where-mdlive-available">all 50 states + Puerto Rico</a>; TeleDirectMD is 41.' },
      { headline: 'Integrated dermatology',         detail: 'MDLIVE has a dedicated dermatology service line per its <a href="https://www.mdlive.com/frequently-asked-questions">FAQ</a>. TeleDirectMD does not.' },
      { headline: 'Mental health (therapy + psych)', detail: 'Therapy at $179 initial / $140 follow-up per <a href="https://www.choosingtherapy.com/mdlive-review/">ChoosingTherapy</a>; psychiatry at $299 initial. TeleDirectMD does not offer mental health.' },
      { headline: '24/7 availability',              detail: 'MDLIVE is staffed 24/7. TeleDirectMD is same-day with evenings and weekends but not overnight.' },
      { headline: 'Broader insurer network',        detail: 'MDLIVE accepts <a href="https://www.healthline.com/health/mdlive-reviews">Cigna, Humana, and Regence</a>; TeleDirectMD does not.' },
    ],
    pricingDive: {
      title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
      paragraphs: [
        'Cash-pay urgent care: TeleDirectMD <strong>$49 flat</strong>; MDLIVE <strong>$85/visit</strong> per <a href="https://www.healthline.com/health/mdlive-reviews">Healthline</a> (Mira Health reports $89). Difference: ~$36 per visit.',
        'Mental health: TeleDirectMD doesn\'t offer it. MDLIVE therapy is <a href="https://www.choosingtherapy.com/mdlive-review/">$179 initial / $140 follow-up</a>; psychiatry $299 initial.',
        'Dermatology: MDLIVE offers a separate dermatology service line; TeleDirectMD does not.',
        'Insurance: MDLIVE\'s network includes <a href="https://www.healthline.com/health/mdlive-reviews">Cigna, Humana, BCBS, and Regence</a>; TeleDirectMD accepts Aetna, BCBS, and UHC. If you have Cigna or Humana, MDLIVE may be in-network where TeleDirectMD isn\'t.',
      ],
    },
    providerDive: {
      title: 'Provider Quality Deep-Dive',
      paragraphs: [
        'TeleDirectMD: MD only — Dr. Parth Bhavsar, board-certified Family Medicine, NPI 1104323203.',
        'MDLIVE: <a href="https://www.mdlive.com/frequently-asked-questions">board-certified providers averaging 15 years of experience</a>, but the FAQ does not explicitly restrict to MDs only. Provider type may vary by service line.',
        'For specialty needs (dermatology, psychiatry), MDLIVE has dedicated specialists. For adult primary and urgent care from a single named MD, TeleDirectMD is the simpler choice.',
      ],
    },
    rxDive: {
      title: 'Prescription Handling',
      paragraphs: [
        'TeleDirectMD: e-prescription to your pharmacy of choice within ~30 min of the visit ending. No controlled substances.',
        'MDLIVE: prescriptions sent to your preferred pharmacy; <a href="https://www.mdlive.com/frequently-asked-questions">short-term renewals available</a>. No controlled substances.',
      ],
    },
    whoFor: {
      tdmd: ['You want the lowest cash-pay rate from a board-certified MD', 'You\'re in one of the 41 states', 'You only need adult primary/urgent care', 'You value seeing the same physician every visit'],
      competitor: ['You need dermatology, therapy, or psychiatry', 'You\'re in AK, HI, Puerto Rico, or a state TeleDirectMD doesn\'t cover', 'You need overnight 24/7 access', 'Your insurer is Cigna or Humana (not currently TeleDirectMD-supported)'],
    },
    decisionGuide: {
      title: 'Which One Fits Your Situation?',
      steps: [
        { num: 1, head: 'Need dermatology, therapy, or psychiatry?',          body: 'Choose MDLIVE — TeleDirectMD does not offer those service lines.', good: false },
        { num: 2, head: 'Have Cigna or Humana insurance?',                     body: 'MDLIVE is in-network with both. TeleDirectMD currently is not.', good: false },
        { num: 3, head: 'Live in one of the 41 TeleDirectMD states?',          body: 'Cash-pay $49 beats MDLIVE\'s $85 by ~42%.', good: true },
        { num: 4, head: 'Want a named MD on every visit?',                     body: 'TeleDirectMD\'s MD-only model with Dr. Bhavsar guarantees continuity MDLIVE doesn\'t.', good: true },
      ],
    },
    faqs: [
      { question: 'Is TeleDirectMD cheaper than MDLIVE?',                          answer: 'Yes for cash-pay urgent care: $49 vs. $85 per Healthline\'s MDLIVE review. That\'s a ~42% discount at TeleDirectMD.' },
      { question: 'Does MDLIVE use real doctors?',                                  answer: 'MDLIVE advertises board-certified providers averaging 15 years of experience per its FAQ but does not explicitly restrict to MDs only across all service lines. TeleDirectMD is MD-only — Dr. Parth Bhavsar.' },
      { question: 'Does MDLIVE cover all 50 states?',                                answer: 'Yes — all 50 states plus Puerto Rico per MDLIVE\'s FAQ. TeleDirectMD covers 41 states.' },
      { question: 'Can I switch from MDLIVE to TeleDirectMD?',                       answer: 'Yes. TeleDirectMD is a separate platform; bring your medication list and any recent labs to your first visit. Book at teledirectmd.com/book-online for a $49 flat-rate visit.' },
      { question: 'Does TeleDirectMD have dermatology like MDLIVE?',                 answer: 'No. MDLIVE offers a dedicated dermatology service. TeleDirectMD focuses on adult primary and urgent care — not dermatology, therapy, or psychiatry.' },
      { question: 'Which has the shorter wait?',                                     answer: 'MDLIVE advertises ≤15 min wait for urgent care per Healthline. TeleDirectMD offers same-day evenings/weekends without a published wait-time guarantee.' },
      { question: 'Does MDLIVE accept HSA/FSA?',                                     answer: 'Yes — both platforms accept HSA/FSA per Healthline\'s MDLIVE review. Use the same HSA/FSA card you would at any qualified medical visit.' },
      { question: 'Is MDLIVE in-network with my insurance?',                          answer: 'MDLIVE accepts Cigna, Humana, BCBS, Regence, and others per Healthline. TeleDirectMD accepts Aetna, BCBS, and UnitedHealthcare in select states. Compare your specific plan.' },
    ],
    references: [
      { label: 'MDLIVE FAQ — provider info',         url: 'https://www.mdlive.com/frequently-asked-questions' },
      { label: 'MDLIVE state coverage',              url: 'https://www.mdlive.com/frequently-asked-questions/where-mdlive-available' },
      { label: 'Healthline — MDLIVE review',          url: 'https://www.healthline.com/health/mdlive-reviews' },
      { label: 'ChoosingTherapy — MDLIVE review',     url: 'https://www.choosingtherapy.com/mdlive-review/' },
      { label: 'Mira Health — telehealth comparison', url: 'https://www.talktomira.com/post/top-telemedicine-services-without-insurance' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-amwell': {
    slug: 'teledirectmd-vs-amwell',
    pid: 'cmp-amwell',
    competitorName: 'Amwell',
    competitorUrl: 'https://amwell.com',
    h1: 'TeleDirectMD vs. Amwell: 2026 Comparison',
    metaTitle: 'TeleDirectMD vs. Amwell (2026): Cost, States, Insurance Network',
    metaDescription: 'TeleDirectMD ($49 flat, 41 states, MD-only) vs. Amwell ($79 cash-pay, 50 states, 55+ insurers, mental health). Verified 2026 prices with sources.',
    breadcrumb: 'TeleDirectMD vs. Amwell',
    answerLead: 'TeleDirectMD vs. Amwell — short answer:',
    answerBody: 'TeleDirectMD is <strong>$49 flat</strong> with a single named board-certified MD; Amwell is <strong>$79/visit</strong> cash-pay (<a href="https://psychcentral.com/health/amwell-reviews">PsychCentral</a>). Amwell has the broadest insurer network reviewed — <strong>55+ commercial plans</strong> including Aetna, BCBS, UHC, Beacon, and Emblem (<a href="https://www.choosingtherapy.com/amwell-review/">ChoosingTherapy</a>) — and serves all 50 states with mental health. Both are HIPAA-compliant. <strong>TeleDirectMD wins on cash-pay price (~38% cheaper).</strong> <strong>Amwell wins on insurance breadth, mental health, and 50-state reach.</strong>',
    heroSub: 'Amwell is the broadest insurer-network telehealth platform; TeleDirectMD is the lowest cash-pay rate.',
    heroIntro: 'Amwell\'s big advantage is its insurer footprint — over 55 commercial plans including Aetna, BCBS, UHC, Beacon, and Emblem per <a href="https://www.choosingtherapy.com/amwell-review/">ChoosingTherapy</a>. If you\'re using insurance, Amwell may be in-network where TeleDirectMD is not. If you\'re paying cash, TeleDirectMD\'s $49 beats Amwell\'s $79 by ~38%.',
    heroCardTitle: 'Quick Answer',
    heroCardItems: [
      'Cheaper urgent care: TeleDirectMD ($49 vs. $79)',
      'Bigger reach: Amwell (50 vs. 41 states)',
      'Mental health: Amwell ($109 therapy)',
      '55+ insurance plans: Amwell only',
      'Named MD on every visit: TeleDirectMD only',
      'Membership: neither requires one',
    ],
    heroBenefits: [
      '$49 vs. $79 — TeleDirectMD is ~38% cheaper cash-pay',
      'Single named MD vs. Amwell\'s rotating provider panel',
      'Amwell wins on plan breadth — 55+ insurers vs. 3',
      'Amwell offers mental health; TeleDirectMD does not',
      'Both 24/7-available — Amwell formal 24/7, TeleDirectMD same-day evenings/weekends',
    ],
    competitor: {
      urgentCare: '$79/visit',                                                                urgentCareSrc:    'https://psychcentral.com/health/amwell-reviews',
      mentalHealth: '$109 therapy (MA-level); $279 psych initial',                            mentalHealthSrc:  'https://www.choosingtherapy.com/amwell-review/',
      insurance: 'Yes — 55+ plans incl. Aetna, BCBS, UHC, Beacon, Emblem',                    insuranceSrc:     'https://www.choosingtherapy.com/amwell-review/',
      states: 'All 50',                                                                        statesSrc:        'https://www.choosingtherapy.com/amwell-review/',
      hours: '24/7',                                                                            hoursSrc:         'https://psychcentral.com/health/amwell-reviews',
      rx: 'Sent to local pharmacy; no explicit same-day claim',                                rxSrc:            'https://www.choosingtherapy.com/amwell-review/',
      wait: '<10 min (urgent care); next-day (therapy)',                                       waitSrc:          'https://www.talktomira.com/post/top-telemedicine-services-without-insurance',
      provider: 'MDs / licensed physicians (psych); MDs + therapists (MH)',                    providerSrc:      'https://www.choosingtherapy.com/amwell-review/',
      membership: 'No',                                                                          membershipSrc:    'https://www.choosingtherapy.com/amwell-review/',
      hsa: 'Yes',                                                                                hsaSrc:           'https://www.choosingtherapy.com/amwell-review/',
    },
    tdmdWins: [
      { headline: '~38% cheaper cash-pay',         detail: '$49 flat vs. <a href="https://psychcentral.com/health/amwell-reviews">$79 at Amwell</a>.' },
      { headline: 'Named MD on every visit',       detail: 'Dr. Bhavsar — vs. Amwell\'s rotating provider panel.' },
      { headline: 'Predictable, simple pricing',   detail: 'One product, one price.' },
    ],
    competitorWins: [
      { headline: '55+ insurance plans',           detail: 'Amwell has the broadest commercial-plan footprint reviewed (<a href="https://www.choosingtherapy.com/amwell-review/">ChoosingTherapy</a>). TeleDirectMD accepts 3.' },
      { headline: 'All 50 states',                 detail: 'Amwell covers <a href="https://www.choosingtherapy.com/amwell-review/">all 50 states</a>; TeleDirectMD is 41.' },
      { headline: 'Mental health (therapy + psych)', detail: 'Therapy starts at $109 (MA-level); psychiatry $279 initial per <a href="https://www.choosingtherapy.com/amwell-review/">ChoosingTherapy</a>. TeleDirectMD doesn\'t offer mental health.' },
      { headline: 'Sub-10-min wait',               detail: '<10-min urgent care wait per <a href="https://www.talktomira.com/post/top-telemedicine-services-without-insurance">Mira Health</a>.' },
    ],
    pricingDive: {
      title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
      paragraphs: [
        'Cash-pay urgent care: TeleDirectMD <strong>$49 flat</strong>; Amwell <strong>$79/visit</strong> per <a href="https://psychcentral.com/health/amwell-reviews">PsychCentral</a>. Difference: $30 per visit.',
        'Mental health: <a href="https://www.choosingtherapy.com/amwell-review/">$109 (MA-level therapy) / $279 (psychiatry initial)</a>. TeleDirectMD doesn\'t offer mental health.',
        'Insurance: Amwell\'s 55+ plan network is the broadest of any platform reviewed — <a href="https://www.choosingtherapy.com/amwell-review/">ChoosingTherapy</a>. If you have an in-network plan there but not on TeleDirectMD\'s shorter list, Amwell will likely produce the lower copay.',
      ],
    },
    providerDive: {
      title: 'Provider Quality Deep-Dive',
      paragraphs: [
        'TeleDirectMD: MD only — Dr. Parth Bhavsar.',
        'Amwell: MDs and licensed physicians for psychiatry; MDs and licensed therapists for mental health per <a href="https://www.choosingtherapy.com/amwell-review/">ChoosingTherapy</a>. Provider type varies by service line.',
        'For acute primary care, both deliver clinically appropriate care. The differentiator at TeleDirectMD is continuity — same MD every visit.',
      ],
    },
    rxDive: {
      title: 'Prescription Handling',
      paragraphs: [
        'TeleDirectMD: e-prescription to your pharmacy of choice within ~30 min of the visit ending.',
        'Amwell: prescriptions sent to your local pharmacy per <a href="https://www.choosingtherapy.com/amwell-review/">ChoosingTherapy</a>; same-day timing not explicitly guaranteed.',
        'Neither platform prescribes controlled substances.',
      ],
    },
    whoFor: {
      tdmd: ['You\'re paying cash and want the lowest published rate', 'You\'re in one of the 41 states', 'You only need adult primary/urgent care', 'You value continuity with a named physician'],
      competitor: ['Your insurance is one of Amwell\'s 55+ plans (Aetna, BCBS, UHC, Beacon, Emblem, etc.)', 'You need therapy or psychiatry', 'You\'re in AK, HI, or another state TeleDirectMD doesn\'t cover', 'You want a sub-10-minute wait promise'],
    },
    decisionGuide: {
      title: 'Which One Fits Your Situation?',
      steps: [
        { num: 1, head: 'Need mental health (therapy or psychiatry)?',                                       body: 'Amwell — $109 therapy / $279 psychiatry. TeleDirectMD doesn\'t offer mental health.', good: false },
        { num: 2, head: 'Insurance is Beacon, Emblem, or another less-common payer?',                        body: 'Amwell\'s 55+ plan network is the broadest. TeleDirectMD accepts 3 (Aetna, BCBS, UHC).', good: false },
        { num: 3, head: 'In one of the 41 TeleDirectMD states?',                                              body: 'Cash-pay $49 beats Amwell\'s $79 by ~38%.', good: true },
        { num: 4, head: 'Insurance is Aetna, BCBS, or UHC?',                                                  body: 'Both platforms accept all three. Compare specific plan copays.', good: true },
      ],
    },
    faqs: [
      { question: 'Is TeleDirectMD cheaper than Amwell?',                              answer: 'Yes for cash-pay: $49 vs. $79 per PsychCentral\'s Amwell review. ~38% discount at TeleDirectMD.' },
      { question: 'Does Amwell use real doctors?',                                     answer: 'Mixed — MDs and licensed physicians for psychiatry; MDs and licensed therapists for mental health per ChoosingTherapy. TeleDirectMD is MD-only.' },
      { question: 'Does Amwell accept my insurance?',                                  answer: 'Amwell accepts 55+ commercial plans including Aetna, BCBS, UHC, Beacon, and Emblem per ChoosingTherapy. TeleDirectMD accepts Aetna, BCBS, and UHC in select states.' },
      { question: 'Does Amwell have mental health services?',                          answer: 'Yes — therapy starts at $109 (MA-level) and psychiatry at $279 initial per ChoosingTherapy. TeleDirectMD does not offer mental health.' },
      { question: 'Is Amwell available in all 50 states?',                              answer: 'Yes per ChoosingTherapy. TeleDirectMD is in 41 states.' },
      { question: 'How long is the wait at Amwell?',                                   answer: 'Under 10 minutes for urgent care per Mira Health\'s telehealth comparison. TeleDirectMD offers same-day appointments without a published wait-time guarantee.' },
      { question: 'Can I switch from Amwell to TeleDirectMD?',                          answer: 'Yes. Bring your medication list and any recent labs to your first visit. Book at teledirectmd.com/book-online for the $49 flat rate.' },
      { question: 'Is HSA/FSA accepted at both?',                                       answer: 'Yes — both Amwell and TeleDirectMD accept HSA/FSA. Use the same HSA/FSA card you would at any qualified medical visit.' },
    ],
    references: [
      { label: 'Amwell — PsychCentral review',                  url: 'https://psychcentral.com/health/amwell-reviews' },
      { label: 'Amwell — ChoosingTherapy review',                url: 'https://www.choosingtherapy.com/amwell-review/' },
      { label: 'Mira Health — telehealth comparison',            url: 'https://www.talktomira.com/post/top-telemedicine-services-without-insurance' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-doctor-on-demand': {
    slug: 'teledirectmd-vs-doctor-on-demand',
    pid: 'cmp-dod',
    competitorName: 'Doctor on Demand',
    competitorUrl: 'https://doctorondemand.com',
    h1: 'TeleDirectMD vs. Doctor on Demand: 2026 Comparison',
    metaTitle: 'TeleDirectMD vs. Doctor on Demand (2026): Cost & Features',
    metaDescription: 'TeleDirectMD ($49 flat, 41 states, MD-only) vs. Doctor on Demand ($99 cash-pay, 50 states, Medicare Part B, mental health). Verified 2026 prices with sources.',
    breadcrumb: 'TeleDirectMD vs. Doctor on Demand',
    answerLead: 'TeleDirectMD vs. Doctor on Demand — short answer:',
    answerBody: 'TeleDirectMD is <strong>$49 flat</strong>. Doctor on Demand charges <strong>$99 per urgent care visit</strong> cash-pay (<a href="https://doctorondemand.com/about-us/cost-insurance/">Doctor on Demand</a>) and offers therapy at $134 (25 min) and psychiatry at $299 initial. Doctor on Demand accepts <strong>Medicare Part B</strong> (<a href="https://doctorondemand.com/">DoD</a>) plus a broad commercial network. Both are HIPAA-compliant. <strong>TeleDirectMD wins on cash-pay price (51% cheaper).</strong> <strong>Doctor on Demand wins on Medicare, mental health, and 50-state reach.</strong>',
    heroSub: 'Doctor on Demand is one of the few major telehealth platforms accepting Medicare Part B. TeleDirectMD is half the cash-pay price.',
    heroIntro: 'Doctor on Demand is built around 24/7 availability across all 50 states with under-5-minute wait times per <a href="https://softwarefinder.com/emr-software/doctor-on-demand/pricing">Software Finder</a>, plus Medicare Part B acceptance — a meaningful differentiator for older adults. TeleDirectMD\'s pitch is the opposite: a single named MD, $49 flat, and the lowest published cash-pay rate of any video-visit platform.',
    heroCardTitle: 'Quick Answer',
    heroCardItems: [
      'Cheaper urgent care: TeleDirectMD ($49 vs. $99)',
      'Bigger reach: Doctor on Demand (50 vs. 41 states)',
      'Medicare Part B: Doctor on Demand only',
      'Mental health: Doctor on Demand only',
      'Named MD on every visit: TeleDirectMD only',
      'Membership: neither requires one',
    ],
    heroBenefits: [
      '$49 vs. $99 — TeleDirectMD is 51% cheaper cash-pay',
      'Named MD only (Dr. Bhavsar) vs. mixed MD/NP at Doctor on Demand',
      'No mental health offering at TeleDirectMD; Doctor on Demand has therapy & psychiatry',
      'In-network with Aetna, BCBS, UHC; Doctor on Demand has BCBS, UHC, Humana Military, Premera, Medicare Part B',
      'Same-day evenings/weekends; Doctor on Demand is 24/7 urgent care, scheduled mental health',
    ],
    competitor: {
      urgentCare: '$99/visit',                                                            urgentCareSrc:    'https://doctorondemand.com/about-us/cost-insurance/',
      mentalHealth: '$134 (25-min therapy); $299 psych initial',                          mentalHealthSrc:  'https://doctorondemand.com/about-us/cost-insurance/',
      insurance: 'Yes — BCBS, UHC, Humana Military, Premera, Medicare Part B',            insuranceSrc:     'https://doctorondemand.com/',
      states: 'All 50',                                                                    statesSrc:        'https://www.helloklarity.com/post/sesame-care-alternatives/',
      hours: '24/7 urgent care; mental health scheduled',                                  hoursSrc:         'https://doctorondemand.com/faqs/',
      rx: 'Available; pharmacy not specified',                                              rxSrc:            'https://doctorondemand.com/faqs/',
      wait: '<5 min (urgent care)',                                                          waitSrc:          'https://softwarefinder.com/emr-software/doctor-on-demand/pricing',
      provider: 'Board-certified MDs + NPs (urgent care)',                                   providerSrc:      'https://doctorondemand.com/faqs/',
      membership: 'No (free account; pay per visit)',                                        membershipSrc:    'https://doctorondemand.com/about-us/cost-insurance/',
      hsa: 'Not stated',                                                                      hsaSrc:           'https://doctorondemand.com/about-us/cost-insurance/',
    },
    tdmdWins: [
      { headline: '51% cheaper cash-pay',         detail: '$49 flat vs. <a href="https://doctorondemand.com/about-us/cost-insurance/">$99 at Doctor on Demand</a>.' },
      { headline: 'Named MD only',                detail: 'TeleDirectMD = Dr. Bhavsar. Doctor on Demand uses <a href="https://doctorondemand.com/faqs/">MDs and NPs</a> per its FAQ.' },
      { headline: 'Predictable pricing',          detail: 'Flat $49 vs. tiered per-service pricing.' },
    ],
    competitorWins: [
      { headline: 'Medicare Part B',              detail: 'Doctor on Demand <a href="https://doctorondemand.com/">accepts Medicare Part B</a> — TeleDirectMD does not.' },
      { headline: 'All 50 states',                detail: 'Doctor on Demand is <a href="https://www.helloklarity.com/post/sesame-care-alternatives/">in all 50 states</a>; TeleDirectMD is 41.' },
      { headline: 'Mental health (therapy + psych)', detail: '$134 / 25-min therapy and $299 initial psychiatry per <a href="https://doctorondemand.com/about-us/cost-insurance/">Doctor on Demand</a>. TeleDirectMD doesn\'t offer mental health.' },
      { headline: '<5-min wait, 24/7',            detail: '<a href="https://softwarefinder.com/emr-software/doctor-on-demand/pricing">Sub-5-min urgent care wait</a>; staffed 24/7.' },
      { headline: 'Humana Military',              detail: 'Doctor on Demand accepts Humana Military. TeleDirectMD does not.' },
    ],
    pricingDive: {
      title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
      paragraphs: [
        'Cash-pay urgent care: TeleDirectMD <strong>$49 flat</strong>; Doctor on Demand <strong>$99/visit</strong> per <a href="https://doctorondemand.com/about-us/cost-insurance/">Doctor on Demand</a>. Difference: $50 per visit.',
        'Mental health: <a href="https://doctorondemand.com/about-us/cost-insurance/">$134 / 25-min therapy; $299 psychiatry initial</a>. TeleDirectMD doesn\'t offer mental health.',
        'Medicare: Doctor on Demand accepts <a href="https://doctorondemand.com/">Medicare Part B</a>; TeleDirectMD does not currently accept Medicare. For Medicare beneficiaries, Doctor on Demand is the right call.',
      ],
    },
    providerDive: {
      title: 'Provider Quality Deep-Dive',
      paragraphs: [
        'TeleDirectMD: MD only — Dr. Parth Bhavsar.',
        'Doctor on Demand: <a href="https://doctorondemand.com/faqs/">board-certified MDs and NPs</a> for urgent care per its FAQ. Provider type is not patient-selectable.',
      ],
    },
    rxDive: {
      title: 'Prescription Handling',
      paragraphs: [
        'TeleDirectMD: same-day e-prescription to your pharmacy of choice. No controlled substances.',
        'Doctor on Demand: prescriptions <a href="https://doctorondemand.com/faqs/">available</a>, but pharmacy not explicitly specified. No controlled substances.',
      ],
    },
    whoFor: {
      tdmd: ['You\'re cash-paying or have a high-deductible plan', 'You\'re in one of the 41 states', 'You want continuity with a single named MD', 'You only need adult primary or urgent care'],
      competitor: ['You\'re on Medicare Part B', 'You need mental health (therapy or psychiatry)', 'You need overnight 24/7 care', 'You\'re in AK, HI, or one of the 9 states TeleDirectMD doesn\'t cover'],
    },
    decisionGuide: {
      title: 'Which One Fits Your Situation?',
      steps: [
        { num: 1, head: 'On Medicare Part B?',                                  body: 'Doctor on Demand — TeleDirectMD does not accept Medicare.', good: false },
        { num: 2, head: 'Need therapy or psychiatry?',                          body: 'Doctor on Demand — TeleDirectMD doesn\'t offer mental health.', good: false },
        { num: 3, head: 'Cash-paying in one of the 41 TeleDirectMD states?',     body: '$49 flat beats $99 by 51%.', good: true },
        { num: 4, head: 'Want a named MD on every visit?',                       body: 'TeleDirectMD\'s MD-only model with Dr. Bhavsar provides continuity Doctor on Demand cannot.', good: true },
      ],
    },
    faqs: [
      { question: 'Is TeleDirectMD cheaper than Doctor on Demand?',                                answer: 'Yes for cash-pay urgent care: $49 vs. $99 per Doctor on Demand. That\'s a 51% discount at TeleDirectMD.' },
      { question: 'Does Doctor on Demand use real doctors?',                                       answer: 'A mix — board-certified MDs and NPs for urgent care per Doctor on Demand\'s FAQ. TeleDirectMD is MD-only with Dr. Parth Bhavsar.' },
      { question: 'Does Doctor on Demand accept Medicare?',                                        answer: 'Yes — Doctor on Demand accepts Medicare Part B per its website. TeleDirectMD does not currently accept Medicare.' },
      { question: 'Does Doctor on Demand cover all 50 states?',                                    answer: 'Yes per industry comparison sources. TeleDirectMD covers 41 states.' },
      { question: 'Can I switch from Doctor on Demand to TeleDirectMD?',                            answer: 'Yes. Bring your medication list and recent labs. Book at teledirectmd.com/book-online for the $49 flat rate. No paperwork carries over from Doctor on Demand.' },
      { question: 'Does Doctor on Demand have mental health?',                                     answer: 'Yes — therapy at $134 (25 min) and psychiatry at $299 initial per Doctor on Demand. TeleDirectMD does not offer mental health.' },
      { question: 'How fast is Doctor on Demand?',                                                  answer: 'Under 5 minutes for urgent care per Software Finder. TeleDirectMD offers same-day evenings/weekends without a published wait-time guarantee.' },
      { question: 'Is Humana Military accepted at TeleDirectMD?',                                   answer: 'No — Humana Military is on Doctor on Demand\'s network. TeleDirectMD currently accepts Aetna, BCBS, and UnitedHealthcare in select states.' },
    ],
    references: [
      { label: 'Doctor on Demand — Cost & insurance',     url: 'https://doctorondemand.com/about-us/cost-insurance/' },
      { label: 'Doctor on Demand — FAQs',                  url: 'https://doctorondemand.com/faqs/' },
      { label: 'Doctor on Demand — Homepage',              url: 'https://doctorondemand.com/' },
      { label: 'Software Finder — Doctor on Demand pricing', url: 'https://softwarefinder.com/emr-software/doctor-on-demand/pricing' },
      { label: 'Hello Klarity — Sesame alternatives',       url: 'https://www.helloklarity.com/post/sesame-care-alternatives/' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-sesame': {
    slug: 'teledirectmd-vs-sesame',
    pid: 'cmp-sesame',
    competitorName: 'Sesame',
    competitorUrl: 'https://sesamecare.com',
    h1: 'TeleDirectMD vs. Sesame Care: 2026 Comparison',
    metaTitle: 'TeleDirectMD vs. Sesame Care (2026): Predictable vs. Variable Pricing',
    metaDescription: 'TeleDirectMD ($49 flat, MD-only, insurance accepted) vs. Sesame ($29–$37+ provider-set, no insurance, mixed credentials). Verified 2026 prices.',
    breadcrumb: 'TeleDirectMD vs. Sesame',
    answerLead: 'TeleDirectMD vs. Sesame Care — short answer:',
    answerBody: 'TeleDirectMD is <strong>$49 flat</strong> with a single named MD across 41 states. Sesame is a marketplace where independent providers set their own rates — acute care can start as low as <strong>$29–$37</strong> per <a href="https://www.healthline.com/health/sesame-care">Healthline</a> but varies widely by location and provider; provider type is mixed (<a href="https://www.choosingtherapy.com/sesame-care-review/">ChoosingTherapy</a>). Sesame <strong>does not accept insurance</strong>. Both are HIPAA-compliant. <strong>TeleDirectMD wins on predictability, MD-only credentials, and insurance acceptance.</strong> <strong>Sesame wins on potential floor price and breadth of specialist types.</strong>',
    heroSub: 'Sesame is a price-transparent marketplace; TeleDirectMD is a flat-rate single-physician practice. Different models — here\'s how to choose.',
    heroIntro: 'Sesame Care lists hundreds of independent providers across all 50 states with prices set per provider per visit, often starting at <strong>$29–$37</strong> for acute care per <a href="https://www.healthline.com/health/sesame-care">Healthline</a>. The marketplace model means provider quality, credentials, and rates vary sharply by market — and Sesame does not accept insurance per <a href="https://www.choosingtherapy.com/sesame-care-review/">ChoosingTherapy</a>. TeleDirectMD\'s value is the opposite: one physician, one rate, predictable everywhere.',
    heroCardTitle: 'Quick Answer',
    heroCardItems: [
      'Lowest floor price: Sesame ($29–$37+, varies by provider)',
      'Predictable price: TeleDirectMD ($49 flat)',
      'Named MD on every visit: TeleDirectMD only',
      'Insurance accepted: TeleDirectMD only (Aetna, BCBS, UHC)',
      'Specialist types: Sesame (dermatology, weight loss, etc.)',
      'Membership optional: Sesame Plus $10.99/mo',
    ],
    heroBenefits: [
      'Flat $49 vs. variable $29–$37+ at Sesame',
      'Single named board-certified MD vs. mixed credentials marketplace',
      'TeleDirectMD accepts Aetna, BCBS, UnitedHealthcare; Sesame accepts no insurance',
      'Sesame can undercut $49 in some markets; not in all',
      'Sesame has specialist types TeleDirectMD doesn\'t — dermatology, weight loss, etc.',
    ],
    competitor: {
      urgentCare: 'From $29–$37 (provider-set; varies)',                                  urgentCareSrc:    'https://www.healthline.com/health/sesame-care',
      mentalHealth: 'From $29 (therapy); $80 psych initial',                              mentalHealthSrc:  'https://www.healthline.com/health/sesame-care',
      insurance: 'No (bills provided for self-submission)',                                insuranceSrc:     'https://www.choosingtherapy.com/sesame-care-review/',
      states: 'All 50',                                                                    statesSrc:        'https://www.choosingtherapy.com/sesame-care-review/',
      hours: 'Same-day; varies by provider',                                                hoursSrc:         'https://sesamecare.com/',
      rx: 'Local pharmacy or $5/30-day generic supply',                                    rxSrc:            'https://www.healthline.com/health/sesame-care',
      wait: 'Same-day; varies by provider',                                                waitSrc:          'https://sesamecare.com/',
      provider: 'Mixed: MDs, NPs, PAs (provider-set)',                                      providerSrc:      'https://www.choosingtherapy.com/sesame-care-review/',
      membership: 'Optional: $10.99/mo (Sesame Plus)',                                      membershipSrc:    'https://www.choosingtherapy.com/sesame-care-review/',
      hsa: 'Not stated',                                                                    hsaSrc:           'https://www.choosingtherapy.com/sesame-care-review/',
    },
    tdmdWins: [
      { headline: 'Predictable, flat pricing',     detail: '$49 every time — vs. provider-set rates that vary by city and clinic at <a href="https://sesamecare.com/">Sesame</a>.' },
      { headline: 'Named MD only',                 detail: 'TeleDirectMD = Dr. Bhavsar. Sesame uses a <a href="https://www.choosingtherapy.com/sesame-care-review/">mix of MDs, NPs, and PAs</a>.' },
      { headline: 'Insurance accepted',            detail: 'TeleDirectMD is in-network with Aetna, BCBS, UHC. Sesame does <a href="https://www.choosingtherapy.com/sesame-care-review/">not accept any insurance</a>.' },
      { headline: 'No membership tier',            detail: 'No upcharge for "Sesame Plus" or similar.' },
    ],
    competitorWins: [
      { headline: 'Lower floor price',             detail: 'Acute care can start at <a href="https://www.healthline.com/health/sesame-care">$29–$37</a> in some markets — below $49.' },
      { headline: 'All 50 states',                  detail: 'Sesame has providers in <a href="https://www.choosingtherapy.com/sesame-care-review/">all 50 states</a>; TeleDirectMD is 41.' },
      { headline: 'Specialist breadth',             detail: 'Dermatology, weight loss, endocrinology, and more on Sesame\'s marketplace. TeleDirectMD is adult primary/urgent care only.' },
      { headline: '$5 / 30-day generic supply',     detail: 'Sesame offers a <a href="https://www.healthline.com/health/sesame-care">$5/30-day generic medication option</a>.' },
    ],
    pricingDive: {
      title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
      paragraphs: [
        'Cash-pay urgent care: TeleDirectMD <strong>$49 flat</strong>. Sesame: starts at <a href="https://www.healthline.com/health/sesame-care">$29–$37</a> in some markets but varies sharply. Major metros tend to have higher prices; smaller markets sometimes have lower floors.',
        'Mental health: Sesame therapy from <a href="https://www.healthline.com/health/sesame-care">$29</a>; psychiatry from $80 initial. TeleDirectMD doesn\'t offer mental health.',
        'Insurance: TeleDirectMD accepts Aetna, BCBS, UHC; Sesame accepts none. If you have insurance and want to use it, TeleDirectMD is the better fit.',
      ],
    },
    providerDive: {
      title: 'Provider Quality Deep-Dive',
      paragraphs: [
        'TeleDirectMD: MD only — Dr. Bhavsar.',
        'Sesame: <a href="https://www.choosingtherapy.com/sesame-care-review/">mix of MDs, NPs, and PAs</a>, with provider credentials displayed in the marketplace listings. Quality and continuity vary by provider.',
        'Sesame\'s value is breadth (specialty types, low floor prices); TeleDirectMD\'s value is uniformity (same MD every time).',
      ],
    },
    rxDive: {
      title: 'Prescription Handling',
      paragraphs: [
        'TeleDirectMD: e-prescription to your pharmacy of choice within ~30 min of the visit.',
        'Sesame: prescriptions to your local pharmacy, plus an optional <a href="https://www.healthline.com/health/sesame-care">$5/30-day generic supply program</a> — competitive with GoodRx for some medications.',
      ],
    },
    whoFor: {
      tdmd: ['You want one named physician, every visit', 'Predictable pricing matters', 'You want to use Aetna, BCBS, or UHC insurance', 'You\'re in one of the 41 states'],
      competitor: ['You want the lowest possible cash price (and your local market has it)', 'You need a specialist type TeleDirectMD doesn\'t cover (dermatology, weight loss, etc.)', 'You\'re in AK, HI, or another state TeleDirectMD doesn\'t cover', 'You don\'t mind shopping providers'],
    },
    decisionGuide: {
      title: 'Which One Fits Your Situation?',
      steps: [
        { num: 1, head: 'Need a specialist (derm, weight loss, etc.)?',                              body: 'Sesame — TeleDirectMD is adult primary/urgent care only.', good: false },
        { num: 2, head: 'Have Aetna, BCBS, or UHC and want to use it?',                               body: 'TeleDirectMD — Sesame does not accept insurance.', good: true },
        { num: 3, head: 'Have time to shop providers and want the lowest possible price?',            body: 'Sesame can undercut $49 in some markets — but rates vary widely.', good: false },
        { num: 4, head: 'Want a single named MD and predictable pricing?',                            body: 'TeleDirectMD\'s $49 flat with Dr. Bhavsar is the cleanest option.', good: true },
      ],
    },
    faqs: [
      { question: 'Is TeleDirectMD cheaper than Sesame?',                              answer: 'Sometimes. Sesame\'s acute care can start at $29–$37 per Healthline below TeleDirectMD\'s $49. But Sesame rates vary by city and provider; TeleDirectMD is $49 flat in all 41 states.' },
      { question: 'Does Sesame use real doctors?',                                     answer: 'Sesame is a marketplace with a mix of MDs, NPs, and PAs per ChoosingTherapy. Provider credentials are displayed per listing. TeleDirectMD is MD-only with Dr. Parth Bhavsar.' },
      { question: 'Does Sesame accept insurance?',                                     answer: 'No — Sesame does not accept insurance per ChoosingTherapy, though they provide bills for self-submission. TeleDirectMD accepts Aetna, BCBS, and UHC in select states.' },
      { question: 'Does Sesame cover all 50 states?',                                   answer: 'Yes per ChoosingTherapy, though provider density varies by market. TeleDirectMD is in 41 states.' },
      { question: 'Can I switch from Sesame to TeleDirectMD?',                          answer: 'Yes. TeleDirectMD is a separate platform; bring your medication list and any recent labs. Book at teledirectmd.com/book-online for the $49 flat rate.' },
      { question: 'Does Sesame have a membership?',                                    answer: 'Optional Sesame Plus is $10.99/month for additional discounts per ChoosingTherapy. TeleDirectMD has no membership tier.' },
      { question: 'Can I get a $5 generic via Sesame?',                                answer: 'Yes — Sesame offers a $5 / 30-day generic supply option per Healthline. TeleDirectMD prescribes to your pharmacy of choice; use GoodRx for generic discounts.' },
      { question: 'Why would I pay more for TeleDirectMD?',                            answer: 'For a single named physician with predictable pricing, MD-only credentials, and insurance acceptance. Sesame is good if you want the lowest floor price and don\'t mind variable providers.' },
    ],
    references: [
      { label: 'Sesame — Healthline review',          url: 'https://www.healthline.com/health/sesame-care' },
      { label: 'Sesame — ChoosingTherapy review',      url: 'https://www.choosingtherapy.com/sesame-care-review/' },
      { label: 'Sesame Care homepage',                  url: 'https://sesamecare.com/' },
      { label: 'Hello Klarity — Sesame alternatives',   url: 'https://www.helloklarity.com/post/sesame-care-alternatives/' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-k-health': {
    slug: 'teledirectmd-vs-k-health',
    pid: 'cmp-khealth',
    competitorName: 'K Health',
    competitorUrl: 'https://khealth.com',
    h1: 'TeleDirectMD vs. K Health: 2026 Comparison',
    metaTitle: 'TeleDirectMD vs. K Health (2026): Live Video MD vs. AI Text',
    metaDescription: 'TeleDirectMD ($49 flat, live MD video, insurance accepted) vs. K Health ($35/visit or $49/mo, AI-text triage, no insurance). Verified 2026 prices.',
    breadcrumb: 'TeleDirectMD vs. K Health',
    answerLead: 'TeleDirectMD vs. K Health — short answer:',
    answerBody: 'TeleDirectMD is <strong>$49 flat per video visit with a named board-certified MD</strong>. K Health is <strong>$35 per one-time visit or $49/month for unlimited primary + mental health</strong> (<a href="https://www.choosingtherapy.com/k-health-review/">ChoosingTherapy</a>) — but K Health visits are <strong>AI-triaged text chats, not live video</strong>, and K Health <strong>does not accept insurance</strong>. Both are HIPAA-compliant. <strong>TeleDirectMD wins on live MD video access, insurance, and continuity.</strong> <strong>K Health wins on lowest one-time price and on subscription value if you visit frequently.</strong>',
    heroSub: 'Two very different products. K Health is AI-driven text triage with clinician follow-up; TeleDirectMD is live MD video. Pick by use case.',
    heroIntro: 'K Health is built around an AI symptom-checker that hands off to a clinician via asynchronous text chat. The model is fast and cheap for simple complaints, and the $49/month subscription unlocks unlimited messaging plus mental health per <a href="https://www.choosingtherapy.com/k-health-review/">ChoosingTherapy</a>. TeleDirectMD is the opposite: a live video visit with a single named board-certified MD, with the option to use insurance.',
    heroCardTitle: 'Quick Answer',
    heroCardItems: [
      'Live video MD: TeleDirectMD only',
      'Cheapest one-time: K Health ($35)',
      'Cheapest unlimited: K Health ($49/mo includes mental health)',
      'Insurance accepted: TeleDirectMD only',
      'Mental health: K Health only (membership)',
      'Named physician: TeleDirectMD only',
    ],
    heroBenefits: [
      'Live video visit (10–15 min) vs. async text chat',
      'Named MD (Dr. Bhavsar) on every visit; K Health is mixed MDs and NPs',
      'TeleDirectMD accepts Aetna, BCBS, UHC; K Health accepts no insurance',
      'K Health subscription wins for high-frequency users; TeleDirectMD wins for occasional needs',
      'TeleDirectMD prescribes for stable chronic conditions; K Health excludes controlled substances and limits scope',
    ],
    competitor: {
      urgentCare: '$35 one-time or $49/mo membership',                                  urgentCareSrc:    'https://www.choosingtherapy.com/k-health-review/',
      mentalHealth: '$49/mo (primary + mental health membership)',                      mentalHealthSrc:  'https://www.choosingtherapy.com/k-health-review/',
      insurance: 'No (all out-of-pocket)',                                                insuranceSrc:     'https://www.choosingtherapy.com/k-health-review/',
      states: '48 continental (excludes AK, HI)',                                         statesSrc:        'https://khealth.com/lp/doctor-visits/',
      hours: '24/7 (text-based AI + clinician)',                                          hoursSrc:         'https://www.choosingtherapy.com/k-health-review/',
      rx: 'Local pharmacy or $12/mo direct shipment',                                     rxSrc:            'https://www.choosingtherapy.com/k-health-review/',
      wait: '~1 hour to match; text-based',                                               waitSrc:          'https://www.choosingtherapy.com/k-health-review/',
      provider: 'Board-certified MDs + NPs',                                               providerSrc:      'https://www.choosingtherapy.com/k-health-review/',
      membership: 'Yes — $49/mo or $73/visit one-time',                                    membershipSrc:    'https://www.choosingtherapy.com/k-health-review/',
      hsa: 'Partial — one-time visits only, not subscriptions',                            hsaSrc:           'https://www.choosingtherapy.com/k-health-review/',
    },
    tdmdWins: [
      { headline: 'Live video visit',              detail: 'Real conversation with Dr. Bhavsar; not async text chat.' },
      { headline: 'Insurance accepted',            detail: 'In-network with Aetna, BCBS, UHC. K Health <a href="https://www.choosingtherapy.com/k-health-review/">accepts no insurance</a>.' },
      { headline: 'Named MD on every visit',       detail: 'TeleDirectMD = Dr. Bhavsar. K Health uses a panel of MDs and NPs.' },
      { headline: 'No membership lock-in',         detail: 'Pay only when you need a visit. K Health\'s value depends on subscription use.' },
    ],
    competitorWins: [
      { headline: 'Lowest one-time price',         detail: '$35 per text-based visit at K Health vs. $49 video at TeleDirectMD.' },
      { headline: 'AI-driven triage',              detail: 'K Health\'s AI symptom-checker answers many questions before clinician handoff — a unique product feature.' },
      { headline: 'Unlimited subscription value',  detail: '$49/month for unlimited primary + mental health (<a href="https://www.choosingtherapy.com/k-health-review/">ChoosingTherapy</a>) — best for high-frequency users.' },
      { headline: 'Mental health included',         detail: 'K Health\'s membership includes mental health support. TeleDirectMD doesn\'t offer mental health.' },
      { headline: '24/7 async access',             detail: 'Text chat works any hour. TeleDirectMD is same-day appointments, not 24/7 async.' },
    ],
    pricingDive: {
      title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
      paragraphs: [
        'Cash-pay one-time: K Health <strong>$35</strong>; TeleDirectMD <strong>$49</strong>. K Health is cheaper for a single text-based interaction.',
        'Subscription: K Health <a href="https://www.choosingtherapy.com/k-health-review/">$49/month for unlimited primary + mental health</a>. Break-even vs. TeleDirectMD\'s $49 per-visit pricing is ~1.5 visits/month.',
        'Insurance: TeleDirectMD accepts Aetna, BCBS, UHC; K Health <a href="https://www.choosingtherapy.com/k-health-review/">accepts none</a>. With insurance, TeleDirectMD often wins on out-of-pocket cost.',
      ],
    },
    providerDive: {
      title: 'Provider Quality Deep-Dive',
      paragraphs: [
        'TeleDirectMD: MD only — Dr. Parth Bhavsar.',
        'K Health: <a href="https://www.choosingtherapy.com/k-health-review/">board-certified MDs and NPs</a>; visits are AI-assisted text chats rather than live video. The clinician you message may differ visit-to-visit.',
      ],
    },
    rxDive: {
      title: 'Prescription Handling',
      paragraphs: [
        'TeleDirectMD: e-prescription to your pharmacy of choice within ~30 min of the visit. No controlled substances.',
        'K Health: prescriptions to your <a href="https://www.choosingtherapy.com/k-health-review/">local pharmacy or $12/month direct shipment</a>. K Health does not prescribe controlled substances.',
      ],
    },
    whoFor: {
      tdmd: ['You want a live conversation with a named MD', 'You\'re using insurance (Aetna, BCBS, UHC)', 'You only need occasional visits', 'You want a true MD video visit, not text chat'],
      competitor: ['You\'re a high-frequency user (3+ messages/month)', 'You want mental health support included', 'You\'re comfortable with async text-based care', 'You\'re uninsured and want the lowest one-time price'],
    },
    decisionGuide: {
      title: 'Which One Fits Your Situation?',
      steps: [
        { num: 1, head: 'Want a live video visit with a named MD?',           body: 'TeleDirectMD — K Health is text-based async chat, not video.', good: true },
        { num: 2, head: 'Need mental health support?',                         body: 'K Health\'s $49/month includes mental health; TeleDirectMD does not offer it.', good: false },
        { num: 3, head: 'Will you use it 3+ times per month?',                  body: 'K Health\'s subscription becomes the better value above ~1.5–3 visits/month.', good: false },
        { num: 4, head: 'Have insurance you want to use?',                      body: 'TeleDirectMD accepts Aetna, BCBS, and UHC; K Health takes no insurance.', good: true },
      ],
    },
    faqs: [
      { question: 'Is TeleDirectMD cheaper than K Health?',                            answer: 'For a one-time visit, K Health is $35 vs. TeleDirectMD\'s $49 per ChoosingTherapy. But K Health is text-based, not live video, and accepts no insurance. With Aetna/BCBS/UHC, TeleDirectMD is often cheaper.' },
      { question: 'Does K Health use real doctors?',                                  answer: 'Mixed — board-certified MDs and NPs per ChoosingTherapy. Visits are AI-assisted text chats, not live video. TeleDirectMD is MD-only with Dr. Parth Bhavsar.' },
      { question: 'Are K Health visits live video?',                                   answer: 'No. K Health is an AI symptom-checker that hands off to a clinician via asynchronous text chat per ChoosingTherapy. TeleDirectMD is live video.' },
      { question: 'Does K Health accept insurance?',                                  answer: 'No — K Health is all out-of-pocket per ChoosingTherapy. TeleDirectMD accepts Aetna, BCBS, and UnitedHealthcare in select states.' },
      { question: 'What states does K Health cover?',                                  answer: 'K Health is in 48 continental states — excludes Alaska and Hawaii per K Health\'s site. TeleDirectMD is in 41 states.' },
      { question: 'Can I switch from K Health to TeleDirectMD?',                       answer: 'Yes. Bring your medication list and any recent labs. Book at teledirectmd.com/book-online for the $49 flat rate. K Health\'s text history does not carry over.' },
      { question: 'Does K Health have a membership?',                                 answer: 'Yes — $49/month for unlimited primary + mental health, or $73 per one-time visit, per ChoosingTherapy. TeleDirectMD has no membership.' },
      { question: 'Is HSA/FSA accepted at K Health?',                                  answer: 'Partially — one-time visits qualify; subscriptions do not per ChoosingTherapy. TeleDirectMD is fully HSA/FSA-eligible at $49 flat.' },
    ],
    references: [
      { label: 'K Health — ChoosingTherapy review',     url: 'https://www.choosingtherapy.com/k-health-review/' },
      { label: 'K Health — state coverage',              url: 'https://khealth.com/lp/doctor-visits/' },
      { label: 'Mira Health — telehealth comparison',    url: 'https://www.talktomira.com/post/top-telemedicine-services-without-insurance' },
    ],
  },
};
