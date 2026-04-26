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
  'teledirectmd-vs-healthtap',
  'teledirectmd-vs-walgreens-virtual',
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
  'teledirectmd-vs-healthtap':         { compare: ['teledirectmd-vs-doctor-on-demand', 'teledirectmd-vs-teladoc'],   cost: ['online-doctor-visit-cost', 'online-prescription-cost'] },
  'teledirectmd-vs-walgreens-virtual': { compare: ['teledirectmd-vs-mdlive', 'teledirectmd-vs-amwell'],                cost: ['online-doctor-visit-cost', 'online-prescription-cost'] },
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
  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-healthtap': {
  slug: 'teledirectmd-vs-healthtap',
  pid: 'cmp-healthtap',
  competitorName: 'HealthTap',
  competitorUrl: 'https://www.healthtap.com',
  h1: 'TeleDirectMD vs. HealthTap: 2026 Comparison',
  metaTitle: 'TeleDirectMD vs. HealthTap (2026): Cost, Provider, Coverage',
  metaDescription: 'TeleDirectMD ($49 flat, MD-only, 41 states) vs. HealthTap ($129 cash-pay or $44 with $15/mo membership, 50 states). Sourced 2026 comparison.',
  breadcrumb: 'TeleDirectMD vs. HealthTap',

  answerLead: 'Yes — TeleDirectMD is 62% cheaper than HealthTap cash-pay ($49 flat vs $129) and includes a guaranteed board-certified MD with no membership required.',
  answerBody: 'TeleDirectMD charges <strong>$49 flat</strong> per visit with no membership required and always connects you with the same board-certified MD (Dr. Parth Bhavsar). <a href="https://www.healthtap.com">HealthTap</a> charges <strong>$129 cash-pay</strong> per visit without a subscription, or <strong>$44 per primary-care visit / $59 per urgent-care visit</strong> with a membership ($15/month billed annually, per <a href="https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost">HealthTap Help Center</a>). HealthTap covers all 50 states and D.C. and offers primary-care-led behavioral health; TeleDirectMD covers 41 states and does not offer mental health. <strong>TeleDirectMD wins on predictable, no-membership pricing.</strong> <strong>HealthTap wins on 50-state reach, primary-care continuity, and basic behavioral health support.</strong><div class="tdmd-answer-stats"><span>$49 vs $129 cash-pay</span><span>62% cheaper</span><span>No subscription required</span></div>',

  heroSub: 'Flat $49 at TeleDirectMD vs. $129 cash-pay (or $44 with a $15/mo membership) at HealthTap. Sourced side-by-side.',
  heroIntro: '<a href="https://www.healthtap.com">HealthTap</a> is a virtual primary-care platform where you pick a board-certified physician and build an ongoing relationship — available in all 50 states and D.C., with 365-day urgent care access per <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">BusinessWire (Oct 2025)</a>. TeleDirectMD is the leaner alternative: a single named MD, a flat $49 visit, and no subscription required. This page is an honest, sourced comparison of the two services across price, provider type, states, prescriptions, mental health, and insurance.',

  heroCardTitle: 'Quick Answer',
  heroCardItems: [
    'Cheapest cash visit: TeleDirectMD ($49 flat vs. $129 at HealthTap without membership)',
    'No membership required: TeleDirectMD — HealthTap costs $15/mo for lower per-visit rates',
    'Bigger geographic reach: HealthTap (all 50 states vs. TeleDirectMD\'s 41)',
    'Behavioral health: HealthTap (primary-care-led) — TeleDirectMD does not offer it',
    'Named MD every visit: TeleDirectMD only',
    'Insurance + HSA/FSA: both accept major plans and HSA/FSA cards',
  ],

  heroBenefits: [
    '$49 flat vs. $129 cash-pay at HealthTap — TeleDirectMD is 62% cheaper without a subscription',
    'No membership lock-in at TeleDirectMD — HealthTap\'s best rate ($44/visit) requires a $15/mo plan',
    'Same named board-certified MD on every visit vs. HealthTap\'s rotating pool of physicians',
    'In-network with Aetna, BCBS, UHC; HealthTap accepts all major plans including Medicare',
    'No mental health offering at TeleDirectMD — choose HealthTap if behavioral health is your primary need',
  ],

  competitor: {
    urgentCare:     '$129/visit (no membership); $59/visit (members at $15/mo)',
    urgentCareSrc:  'https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost',

    mentalHealth:     'Basic behavioral health (depression, anxiety, stress) via primary care doctor — no dedicated therapist or psychiatrist',
    mentalHealthSrc:  'https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat',

    insurance:     'All major plans incl. Medicare Advantage and traditional Medicare; Medicaid NOT accepted; HSA/FSA accepted',
    insuranceSrc:  'https://support.healthtap.com/hc/en-us/articles/115002619166-Can-I-use-my-insurance',

    states:     'All 50 states and D.C.',
    statesSrc:  'https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions',

    hours:     '7 days/week urgent care; same-day or next-day primary care; 365-day on-demand access',
    hoursSrc:  'https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions',

    rx:     'Prescriptions sent to preferred pharmacy; no controlled substances (opioids, benzos, Adderall); no certain psychiatric drugs (Abilify, Lithium, Gabapentin)',
    rxSrc:  'https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat',

    wait:     'Urgent care: connect within minutes (7 days/week); primary care: same-day or within days',
    waitSrc:  'https://www.healthtap.com',

    provider:     'Board-certified U.S.-licensed physicians (MDs); Joint Commission accredited telehealth practice',
    providerSrc:  'https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions',

    membership:     '$15/mo (billed annually) or $55/quarter — unlocks $44 primary care and $59 urgent care visits; not required',
    membershipSrc:  'https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost',

    hsa:     'Yes — HSA and FSA cards accepted',
    hsaSrc:  'https://support.healthtap.com/hc/en-us/articles/115002619166-Can-I-use-my-insurance',
  },

  tdmdWins: [
    {
      headline: '62% cheaper cash-pay (no membership needed)',
      detail: 'TeleDirectMD is <strong>$49 flat</strong> with no subscription. HealthTap is <a href="https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost">$129/visit</a> cash-pay without a membership — more than 2.6× the TeleDirectMD price.',
    },
    {
      headline: 'No membership required, ever',
      detail: 'HealthTap\'s lowest per-visit rate ($44) requires a <a href="https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost">$15/month membership</a> ($180/year billed annually). TeleDirectMD charges $49 per visit with zero ongoing fees.',
    },
    {
      headline: 'Named MD on every single visit',
      detail: 'Dr. Parth Bhavsar, MD, board-certified Family Medicine, NPI 1104323203. HealthTap assigns you a primary-care physician, but urgent-care visits go to "the first available doctor" — provider continuity is not guaranteed for same-day needs per <a href="https://www.healthtap.com">healthtap.com</a>.',
    },
    {
      headline: 'Predictable, transparent pricing',
      detail: 'One price, no tiers, no annual commitment. At HealthTap, the cash-pay rate ($129) vs. the member rate ($44–$59) creates pricing complexity that patients must navigate before booking.',
    },
  ],

  competitorWins: [
    {
      headline: 'All 50 states and D.C.',
      detail: 'HealthTap is available in <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">all 50 states and D.C.</a> TeleDirectMD covers 41 states — AK, HI, NY, MA, RI, VT, NM, OR, AR and a few others are not available. See <a href="/states-we-serve/">states we serve</a>.',
    },
    {
      headline: 'Primary-care-led behavioral health',
      detail: 'HealthTap primary-care doctors address depression, anxiety, and stress per <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">healthtap.com</a>. TeleDirectMD does not offer any mental or behavioral health services.',
    },
    {
      headline: 'Ongoing primary-care relationship model',
      detail: 'HealthTap is built for longitudinal care: choose a PCP, message between visits, get annual wellness exams per <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">BusinessWire</a>. TeleDirectMD focuses on acute/urgent care visits rather than full primary-care continuity.',
    },
    {
      headline: 'Medicare and Medicare Advantage accepted',
      detail: 'HealthTap explicitly accepts <a href="https://support.healthtap.com/hc/en-us/articles/360057154632-Does-HealthTap-accept-Medicare-and-or-Medicaid">Medicare Advantage and traditional Medicare</a>. TeleDirectMD\'s Medicare acceptance status should be confirmed at <a href="/insurance/">teledirectmd.com/insurance/</a>.',
    },
    {
      headline: '365-day urgent-care on-demand access',
      detail: 'HealthTap provides <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">365-day on-demand urgent care</a>, including evenings, nights, weekends, and holidays. TeleDirectMD is available same-day with evenings and weekends but is not 24/7 overnight.',
    },
  ],

  pricingDive: {
    title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
    paragraphs: [
      '<strong>TeleDirectMD: $49 flat, no membership.</strong> Every visit — regardless of condition — is $49 cash-pay across all 41 states. If you have Aetna, BCBS, or UHC in a qualifying state, you pay your copay instead. HSA and FSA cards are accepted. No subscription, no annual commitment, no surprise billing.',
      '<strong>HealthTap: $129/visit cash-pay without membership; $44–$59/visit with membership.</strong> Per the <a href="https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost">HealthTap Help Center</a>, the base cash price is $129 for any primary or urgent care visit. Becoming a member at $15/month (billed annually at $180/year, or $55/quarter) drops primary care visits to $44 and urgent care visits to $59. The membership fee is generally not covered by insurance — visit fees may be, depending on your plan.',
      '<strong>Breaking even on HealthTap membership:</strong> At the $15/month membership rate (annual billing), a patient would need to make at least two visits per month to break even compared to TeleDirectMD\'s $49 flat rate (HealthTap member cost: $15 + $44 = $59/visit for the first visit, dropping on subsequent visits within the month). For occasional-use patients — one or two acute visits per year — TeleDirectMD\'s $49 is almost always the lower total cost.',
      '<strong>Insurance:</strong> Both platforms accept major insurance plans. HealthTap accepts all major insurers including <a href="https://support.healthtap.com/hc/en-us/articles/360057154632-Does-HealthTap-accept-Medicare-and-or-Medicaid">Medicare Advantage and traditional Medicare</a> but not Medicaid. TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. See <a href="/insurance/">TeleDirectMD insurance page</a> for your plan. Both accept HSA and FSA cards per <a href="https://support.healthtap.com/hc/en-us/articles/115002619166-Can-I-use-my-insurance">HealthTap</a>.',
      '<strong>Prescription cost:</strong> Both platforms send prescriptions to your pharmacy of choice. Use GoodRx, Cost Plus Drugs, or Amazon Pharmacy to comparison-shop generic prices. HealthTap advertises prescription coupons saving up to <a href="https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost">75% at local pharmacies</a> for members. For TeleDirectMD prescription pricing, see <a href="/cost/online-prescription-cost/">online prescription cost</a>.',
    ],
  },

  providerDive: {
    title: 'Provider Quality Deep-Dive',
    paragraphs: [
      '<strong>TeleDirectMD = Dr. Parth Bhavsar, MD.</strong> Board-certified Family Medicine, trained at University of Mississippi Medical Center. NPI 1104323203, verifiable in the NPPES National Provider Identifier Registry. Every visit is with the same physician — no pool of rotating providers, no NPs, no PAs.',
      '<strong>HealthTap = board-certified U.S.-licensed physicians.</strong> Per the <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">Samsung/HealthTap press release (Oct 2025)</a>, HealthTap is described as "a medical group of experienced, compassionate, board-certified, U.S.-licensed physicians" — explicitly physicians, not NPs or PAs. HealthTap is also the first virtual primary-care practice to achieve Joint Commission accreditation for telehealth, indicating institutional quality standards. For primary care, you choose and keep your own doctor; for urgent care, you connect with the first available physician in the network.',
      '<strong>Why it matters:</strong> For acute, one-off visits (UTI, sinus infection, strep, refill), the credential difference may be minimal. For patients who want continuity — the same physician across visits, over months — HealthTap\'s PCP model and TeleDirectMD\'s single-physician model both deliver it, but through different mechanisms. TeleDirectMD has one physician at scale; HealthTap has a multi-physician network where you select your primary doctor.',
      '<strong>Prescription authority:</strong> Both platforms prescribe medications for appropriate conditions and both prohibit controlled substances (opioids, benzodiazepines, Adderall). HealthTap additionally cannot prescribe certain psychiatric drugs — Abilify, Gabapentin, Lithium — or lifestyle medications like Chantix, per <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">HealthTap\'s care scope page</a>.',
    ],
  },

  rxDive: {
    title: 'Prescription Handling: Refills, Pharmacy Choice, and Restrictions',
    paragraphs: [
      '<strong>TeleDirectMD:</strong> Same-day e-prescription to your pharmacy of choice. Most prescriptions are at the pharmacy within 30 minutes of the visit ending. TeleDirectMD does not prescribe controlled substances (Schedule II–IV), including Adderall, opioids, and benzodiazepines. See <a href="/use-case/refill-medication-online/">medication refill guide</a>.',
      '<strong>HealthTap:</strong> Prescriptions sent to the pharmacy of your choice per <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">HealthTap</a>. No controlled substances (opioids, Adderall, Valium, Xanax, Norco, Oxycodone, Ativan). Also cannot prescribe certain psychiatric medications (Abilify, Gabapentin, Lithium) or lifestyle drugs (Chantix, Contrave, Qsymia). Both platforms work with CVS, Walgreens, Walmart, and independent pharmacies.',
      '<strong>For refills:</strong> Both services can handle refills of existing, appropriate maintenance medications within scope. Neither can issue new controlled-substance prescriptions. If you need refills for psychiatric medications or controlled substances, you will need your existing prescribing physician or a specialist. For other common refills (blood pressure, thyroid, antibiotics, birth control), both platforms are appropriate channels.',
    ],
  },

  whoFor: {
    tdmd: [
      'You\'re uninsured or have a high-deductible plan and want the lowest possible cash visit cost with no subscription',
      'You want the same named, board-certified MD on every visit without building a new relationship',
      'You\'re in one of TeleDirectMD\'s 41 covered states for an acute condition (UTI, sinus, strep, pink eye, refill)',
      'You prefer a flat-rate, no-tier pricing model with zero monthly commitment',
    ],
    competitor: [
      'You\'re in AK, HI, NY, MA, RI, VT, NM, OR, AR or another state TeleDirectMD doesn\'t serve — HealthTap covers all 50',
      'You need basic behavioral health support (depression, anxiety, stress) managed by a primary care doctor',
      'You want a long-term virtual PCP who knows your health history and can manage chronic conditions over time',
      'You or your family are on Medicare or Medicare Advantage — HealthTap explicitly accepts both',
    ],
  },

  decisionGuide: {
    title: 'Which One Fits Your Situation?',
    steps: [
      {
        num: 1,
        head: 'Need mental health or behavioral health services?',
        body: 'Choose HealthTap — TeleDirectMD does not offer therapy, psychiatry, or behavioral health. HealthTap primary-care doctors address depression, anxiety, and stress per <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">HealthTap</a>.',
        good: false,
      },
      {
        num: 2,
        head: 'Paying cash for an acute visit (UTI, sinus, strep, refill)?',
        body: 'TeleDirectMD\'s $49 flat is the straightforward choice — no membership needed, no price tiers, just a visit. HealthTap costs $129 cash-pay for the same visit without a subscription.',
        good: true,
      },
      {
        num: 3,
        head: 'In a state TeleDirectMD doesn\'t cover?',
        body: 'HealthTap covers all 50 states and D.C. If you\'re in AK, HI, NY, MA, RI, VT, NM, OR, AR, or another gap state, HealthTap is the better fit. Check <a href="/states-we-serve/">TeleDirectMD\'s covered states</a>.',
        good: false,
      },
      {
        num: 4,
        head: 'Want an ongoing primary-care relationship or chronic condition management?',
        body: 'HealthTap is built for longitudinal care — choose a PCP, message between visits, get wellness exams. TeleDirectMD\'s Dr. Bhavsar handles acute and refill visits but is not a full primary-care continuity platform.',
        good: false,
      },
    ],
  },

  faqs: [
    {
      question: 'Is TeleDirectMD cheaper than HealthTap?',
      answer: 'Yes, for cash-pay without a subscription. TeleDirectMD charges $49 flat per visit. HealthTap charges $129 per visit without a membership, or $44 (primary care) / $59 (urgent care) per visit with a $15/month membership billed annually — per the <a href="https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost">HealthTap Help Center</a>. Even the member rate at HealthTap requires a $180/year annual commitment on top of visit fees.',
    },
    {
      question: 'Does HealthTap require a subscription?',
      answer: 'No — but it strongly incentivizes one. Without a subscription, every HealthTap visit costs $129. With the $15/month membership (billed annually), visits drop to $44 (primary care) or $59 (urgent care) per the <a href="https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost">HealthTap Help Center</a>. TeleDirectMD requires no subscription at any price level.',
    },
    {
      question: 'What states does HealthTap cover?',
      answer: 'HealthTap is available in all 50 U.S. states and Washington D.C. per a <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">BusinessWire press release (October 2025)</a>. TeleDirectMD is available in 41 states — it does not currently serve AK, HI, NY, MA, RI, VT, NM, OR, AR, and a few others. See <a href="/states-we-serve/">TeleDirectMD\'s full state list</a>.',
    },
    {
      question: 'Does HealthTap use real MDs or nurse practitioners?',
      answer: 'HealthTap describes itself as "a medical group of experienced, compassionate, board-certified, U.S.-licensed physicians" per its <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">October 2025 press release</a>. TeleDirectMD is also MD-only: Dr. Parth Bhavsar, board-certified Family Medicine, is the sole provider, NPI 1104323203.',
    },
    {
      question: 'Does HealthTap offer mental health or therapy?',
      answer: 'HealthTap offers basic behavioral health support — depression, anxiety, and stress — through its primary care doctors, per the <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">HealthTap care scope page</a>. It does not have dedicated therapists or psychiatrists. TeleDirectMD does not offer mental or behavioral health services of any kind.',
    },
    {
      question: 'Does HealthTap accept insurance?',
      answer: 'Yes. HealthTap accepts all major insurance plans, including Medicare Advantage and traditional Medicare per the <a href="https://support.healthtap.com/hc/en-us/articles/115002619166-Can-I-use-my-insurance">HealthTap insurance FAQ</a>. It does not accept Medicaid. TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states — see <a href="/insurance/">TeleDirectMD\'s insurance page</a>.',
    },
    {
      question: 'Does HealthTap accept HSA and FSA cards?',
      answer: 'Yes. HealthTap explicitly accepts HSA and FSA cards per its <a href="https://support.healthtap.com/hc/en-us/articles/115002619166-Can-I-use-my-insurance">insurance FAQ</a>. TeleDirectMD also accepts HSA and FSA. Note that HealthTap\'s membership fee is generally not covered by insurance, but visit fees may be.',
    },
    {
      question: 'Can HealthTap prescribe controlled substances?',
      answer: 'No. HealthTap explicitly cannot prescribe opioids (Norco, Oxycodone), benzodiazepines (Xanax, Valium, Ativan), stimulants (Adderall), or certain psychiatric drugs (Abilify, Lithium, Gabapentin) per its <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">care scope page</a>. TeleDirectMD also does not prescribe controlled substances (Schedule II–IV). For these medications, you need your existing specialist or a controlled-substance-authorized telehealth provider.',
    },
    {
      question: 'How fast can I see a doctor at HealthTap vs. TeleDirectMD?',
      answer: 'HealthTap\'s urgent care connects you to the first available physician within minutes, 7 days a week including evenings and holidays per <a href="https://www.healthtap.com">HealthTap</a>. Primary-care appointments are same-day or within days. TeleDirectMD offers same-day visits with evenings and weekends — book at <a href="/book-online">/book-online</a> — but is not available overnight or 24/7.',
    },
    {
      question: 'Can I use HealthTap for prescription refills?',
      answer: 'Yes, HealthTap doctors can refill appropriate maintenance medications. Prescriptions are sent to your preferred pharmacy. However, HealthTap cannot refill controlled substances, certain psychiatric drugs, or lifestyle medications per its <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">care scope page</a>. TeleDirectMD can also handle appropriate medication refills — see the <a href="/use-case/refill-medication-online/">online refill guide</a>.',
    },
    {
      question: 'Which is better for a UTI, sinus infection, or strep?',
      answer: 'Both platforms treat these conditions. For cash-pay patients, TeleDirectMD at $49 is far cheaper than HealthTap at $129 without a membership (or $44–$59 with one). For insured patients, the cost depends on your copay at each platform. TeleDirectMD visit details: <a href="/cost/uti-treatment-cost/">UTI</a>, <a href="/cost/sinus-infection-treatment-cost/">sinus infection</a>, <a href="/cost/strep-throat-cost/">strep throat</a>.',
    },
    {
      question: 'Does HealthTap work for chronic conditions like diabetes or high blood pressure?',
      answer: 'Yes. HealthTap explicitly covers chronic conditions including diabetes, high blood pressure, high cholesterol, and allergies per its <a href="https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat">care scope page</a>. It has even partnered with LillyDirect for diabetes management per <a href="https://www.pharmiweb.com/press-release/2025-10-08/healthtap-expands-access-to-primary-care-driven-diabetes-treatment-through-lillydirect">PharmiWeb (Oct 2025)</a>. TeleDirectMD handles acute visits and appropriate medication refills but is not structured as a full chronic disease management program.',
    },
    {
      question: 'Is HealthTap accredited or certified?',
      answer: 'Yes. HealthTap is described as the first virtual primary-care practice to achieve <strong>Joint Commission accreditation for telehealth</strong> per the <a href="https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions">October 2025 BusinessWire release</a>. TeleDirectMD is LegitScript certified and HIPAA-compliant.',
    },
    {
      question: 'Can I switch from HealthTap to TeleDirectMD?',
      answer: 'Yes. TeleDirectMD and HealthTap are separate platforms — nothing transfers automatically. Bring your current medication list, any relevant lab results, and your insurance card to your first TeleDirectMD visit. Book at <a href="/book-online">teledirectmd.com/book-online</a>. If you\'re leaving HealthTap for an acute visit, your HealthTap member subscription will continue until the billing period ends.',
    },
    {
      question: 'Does HealthTap\'s membership cover the whole family?',
      answer: 'HealthTap allows you to set up profiles for children at no additional cost under a subscription per the <a href="https://apps.apple.com/us/app/healthtap-primary-care-doctors/id466079030">App Store listing</a>. TeleDirectMD does not have a family plan; each patient books and pays per visit at $49.',
    },
  ],

  references: [
    { label: 'HealthTap — How much does HealthTap cost? (Help Center)',              url: 'https://support.healthtap.com/hc/en-us/articles/360041886651-How-much-does-HealthTap-cost' },
    { label: 'HealthTap — Can I use my insurance? (Help Center)',                    url: 'https://support.healthtap.com/hc/en-us/articles/115002619166-Can-I-use-my-insurance' },
    { label: 'HealthTap — Does HealthTap accept Medicare and/or Medicaid? (Help Center)', url: 'https://support.healthtap.com/hc/en-us/articles/360057154632-Does-HealthTap-accept-Medicare-and-or-Medicaid' },
    { label: 'HealthTap — What kind of care does HealthTap provide? (Help Center)',  url: 'https://support.healthtap.com/hc/en-us/articles/360061654312-What-kind-of-care-does-HealthTap-provide-What-we-treat' },
    { label: 'BusinessWire — Samsung Health and HealthTap partnership (Oct 2025)',   url: 'https://www.businesswire.com/news/home/20251028482980/en/Samsung-Health-and-HealthTap-Expand-Access-to-Virtual-Primary-Care-to-Millions' },
    { label: 'PharmiWeb — HealthTap LillyDirect diabetes partnership (Oct 2025)',    url: 'https://www.pharmiweb.com/press-release/2025-10-08/healthtap-expands-access-to-primary-care-driven-diabetes-treatment-through-lillydirect' },
    { label: 'Mira Health — Top Telemedicine Services Without Insurance (2025)',      url: 'https://www.talktomira.com/post/top-telemedicine-services-without-insurance' },
    { label: 'HealthTap — How does HealthTap work without insurance? (Help Center)', url: 'https://support.healthtap.com/hc/en-us/articles/17951115179028-How-does-HealthTap-work-without-insurance' },
  ],
},

  // ──────────────────────────────────────────────────────────────────
  'teledirectmd-vs-walgreens-virtual': {
    slug: 'teledirectmd-vs-walgreens-virtual',
    pid: 'cmp-walgreens-virtual',

    service: {
      name: 'TeleDirectMD $49 telehealth visit (vs Walgreens Virtual)',
      serviceType: 'Telehealth medical consultation',
      price: '49',
      priceCurrency: 'USD',
    },

    competitorName: 'Walgreens Virtual Healthcare',
    competitorUrl: 'https://www.walgreens.com/findcare/',

    h1: 'TeleDirectMD vs. Walgreens Virtual Healthcare: 2026 Comparison',
    metaTitle: 'TeleDirectMD vs. Walgreens Virtual Healthcare (2026): Cost, Provider, Coverage',
    metaDescription: 'Honest 2026 comparison: TeleDirectMD ($49 flat, 41 states, named MD) vs. Walgreens Virtual Healthcare ($79 urgent care, 30 states, MD/NP mix, no insurance). Verified prices with sources.',
    breadcrumb: 'TeleDirectMD vs. Walgreens Virtual Healthcare',

    answerLead: 'Yes — TeleDirectMD is 38% cheaper than Walgreens Virtual Healthcare ($49 flat vs $79 urgent-care visit) and guarantees a single named board-certified MD instead of a rotating MD/NP panel.',
    answerBody: 'TeleDirectMD charges <strong>$49 per visit</strong> and connects you with a single named board-certified MD — Dr. Parth Bhavsar — every time. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare</a> charges <strong>$79 for an urgent care video visit</strong> and matches you with a rotating panel of "doctors and nurse practitioners" without patient selection. <strong>Neither platform accepts health insurance for the visit itself</strong> — Walgreens explicitly states <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">"Insurance is currently not accepted for virtual care visits"</a> — and both accept HSA/FSA. <strong>Walgreens wins on pharmacy integration</strong>: prescriptions flow directly into Walgreens\' own chain for same-day fills or delivery. <strong>TeleDirectMD wins on price</strong> ($49 vs. $79 — 38% cheaper), on the named-MD guarantee, on hours (evenings and weekends vs. 8am–midnight EST), and on state coverage (41 vs. 30 states).<div class="tdmd-answer-stats"><span>$49 vs $79 visit</span><span>38% cheaper</span><span>Named MD · not a rotating panel</span></div>',

    heroSub: 'Side-by-side with sources. Lower visit cost and named MD at TeleDirectMD; tight Walgreens pharmacy integration on the other side.',
    heroIntro: '<a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare</a> launched in 2023 and has grown to 30 states, offering asynchronous chat and live video visits for common conditions — all at flat cash prices ranging from $33 to $79. Its biggest selling point is the direct link to Walgreens\' pharmacy network. TeleDirectMD charges $49 flat and guarantees every visit is with Dr. Parth Bhavsar, a board-certified Family Medicine physician licensed across 41 states. This page lays out every meaningful difference with sources, so you can choose the right service without guessing.',
    heroCardTitle: 'Quick Answer',
    heroCardItems: [
      'Cheaper urgent care: TeleDirectMD ($49 vs. $79)',
      'More states: TeleDirectMD (41 vs. 30)',
      'Named MD every visit: TeleDirectMD only',
      'Pharmacy chain integration: Walgreens only',
      'Insurance for the visit: neither accepts it',
      'Mental health: neither offers it',
    ],
    heroBenefits: [
      '$49 vs. $79 — TeleDirectMD is 38% cheaper for an urgent care video visit',
      'Single named board-certified MD vs. rotating MD/NP panel at Walgreens',
      '41 states covered vs. 30 at Walgreens — 11 extra states with TeleDirectMD',
      'Both accept HSA/FSA; neither accepts health insurance for the virtual visit fee',
      'Prescriptions sent to any pharmacy with TeleDirectMD — not locked to one chain',
    ],

    competitor: {
      urgentCare:    '$79/visit (video, 18+)',                                                           urgentCareSrc:    'https://www.walgreens.com/topic/virtual-healthcare.jsp',
      mentalHealth:  'Not offered',                                                                      mentalHealthSrc:  'https://www.walgreens.com/topic/virtual-healthcare.jsp',
      insurance:     'Not accepted for visit fee; HSA/FSA accepted; Rx insurance accepted',             insuranceSrc:     'https://www.walgreens.com/topic/virtual-healthcare.jsp',
      states:        '30 states (AL, AZ, CA, CO, CT, FL, GA, IL, IN, KS, KY, LA, MA, MD, MI, MN, MO, NC, NJ, NV, NY, OH, OK, PA, SC, TN, TX, VA, WA, WI)',   statesSrc:        'https://www.walgreens.com/topic/help/virtualhealthcare.jsp',
      hours:         '8 am–midnight EST, 7 days/week (not 24/7)',                                       hoursSrc:         'https://www.walgreens.com/topic/virtual-healthcare.jsp',
      rx:            'Patient selects pharmacy (Walgreens or any other); same-day fill available',       rxSrc:            'https://www.walgreens.com/topic/help/virtualhealthcare.jsp',
      wait:          'Most visits start within 30 minutes; higher demand may extend',                    waitSrc:          'https://www.walgreens.com/topic/virtual-healthcare.jsp',
      provider:      'Mixed MD + NP panel; no patient selection of provider',                           providerSrc:      'https://www.walgreens.com/topic/virtual-healthcare.jsp',
      membership:    'No membership required; pay per visit',                                           membershipSrc:    'https://www.walgreens.com/topic/virtual-healthcare.jsp',
      hsa:           'Yes — HSA/FSA accepted',                                                          hsaSrc:           'https://www.walgreens.com/topic/virtual-healthcare.jsp',
    },

    tdmdWins: [
      {
        headline: '38% cheaper for urgent care',
        detail: '$49 flat at TeleDirectMD vs. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">$79 per urgent care video visit at Walgreens Virtual Healthcare</a>. Both are cash-pay only for the visit fee; neither accepts insurance toward that cost.',
      },
      {
        headline: 'Named, board-certified MD every time',
        detail: 'Every TeleDirectMD visit is with Dr. Parth Bhavsar, MD — board-certified Family Medicine, NPI 1104323203. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens\' provider page</a> says its team is "experienced doctors and nurse practitioners" with no patient selection and no named physician.',
      },
      {
        headline: '11 more states covered',
        detail: 'TeleDirectMD operates in <a href="/states-we-serve/">41 states</a>. <a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">Walgreens Virtual Healthcare is available in 30 states</a> as of 2026 (AL, AZ, CA, CO, CT, FL, GA, IL, IN, KS, KY, LA, MA, MD, MI, MN, MO, NC, NJ, NV, NY, OH, OK, PA, SC, TN, TX, VA, WA, WI).',
      },
      {
        headline: 'Any pharmacy — not one chain',
        detail: 'TeleDirectMD sends e-prescriptions to CVS, Walmart, independent pharmacies, Amazon Pharmacy, or any licensed U.S. pharmacy. You are never steered toward a specific chain. Walgreens similarly allows <a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">pharmacy of choice</a>, but its system is designed around — and optimized for — its own Walgreens stores.',
      },
    ],

    competitorWins: [
      {
        headline: 'Walgreens pharmacy integration',
        detail: '<a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">Walgreens Virtual Healthcare</a> sends prescriptions directly to any Walgreens location with real-time fill alerts via the Walgreens app. If you already fill all your prescriptions at Walgreens, the seamless hand-off — from visit to pill bottle — is a genuine convenience TeleDirectMD cannot replicate.',
      },
      {
        headline: 'Broader condition menu at lower per-condition price',
        detail: 'Walgreens offers condition-specific pricing: pink eye is <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">$39</a>, UTI $39, birth control $33, cold sore $33. For those specific narrow-scope visits, Walgreens costs less than TeleDirectMD\'s $49 flat rate.',
      },
      {
        headline: 'Weight management and specialty programs (2026)',
        detail: 'Walgreens launched <a href="https://corporate.walgreens.com/news-and-stories/press-releases/2026/virtual-healthcare-adds-weight-management-services/">GLP-1 weight management visits in February 2026</a> at $49/visit in select states. TeleDirectMD does not offer a dedicated weight management program.',
      },
      {
        headline: 'Brand recognition and retail footprint',
        detail: 'With nearly 9,000 U.S. locations, Walgreens is a household name. Patients who have decades of trust with the Walgreens pharmacy brand may find the virtual service a natural extension of that relationship.',
      },
      {
        headline: 'Lab orders through Labcorp/Quest',
        detail: '<a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare</a> can issue STI and wellness panel lab orders through Labcorp or Quest Diagnostics from within the virtual visit workflow. TeleDirectMD does not offer an integrated lab-order service.',
      },
    ],

    pricingDive: {
      title: 'Pricing Deep-Dive: What Each Visit Actually Costs',
      paragraphs: [
        '<strong>Urgent care visits:</strong> TeleDirectMD is <strong>$49 flat</strong> for all acute conditions. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare</a> charges <strong>$79</strong> for its general urgent care video visit. Condition-specific Walgreens visits can be cheaper — UTI, pink eye, flu, and COVID chat visits run $39; birth control, cold sores, acne, and men\'s hair loss run $33. If your need matches a narrow Walgreens category, you may pay less than $49. If you have a general acute illness (sore throat, fever, cough), you will pay $79 at Walgreens vs. $49 at TeleDirectMD.',
        '<strong>Insurance:</strong> Neither platform accepts health insurance toward the virtual visit fee. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens states explicitly</a>: "Insurance is currently not accepted for virtual care visits." TeleDirectMD is in-network with <a href="/insurance/">Aetna, BCBS, and UHC</a> in select states — meaning insured patients in those states may owe $0 or a standard copay at TeleDirectMD while paying $39–$79 cash at Walgreens. Verify your specific plan benefits at <a href="/insurance/">teledirectmd.com/insurance/</a>.',
        '<strong>HSA / FSA:</strong> Both platforms accept HSA and FSA cards. Visit fees at both qualify as medical expenses. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens confirms</a>: "you may pay for your visit with your HSA/FSA card."',
        '<strong>Prescription costs:</strong> Medication costs are separate at both platforms. Your insurance (if applicable) covers Rx at most pharmacies. At Walgreens, you can use the Walgreens Rx Savings Finder powered by RxSense for GoodRx-equivalent discounts on Walgreens-filled prescriptions. At TeleDirectMD, you can use GoodRx, Cost Plus Drugs, or Amazon Pharmacy at any chain or independent pharmacy — no restriction to a single chain.',
        '<strong>Membership:</strong> Neither platform requires a membership or subscription. Both are pure pay-per-visit. Walgreens\' general visit range is $33–$79; TeleDirectMD is $49 flat. Over multiple acute visits in a year, TeleDirectMD\'s flat rate is predictable regardless of condition; Walgreens\' pricing varies by condition type.',
      ],
    },

    providerDive: {
      title: 'Provider Quality: Named MD vs. Rotating MD/NP Panel',
      paragraphs: [
        '<strong>TeleDirectMD:</strong> Every visit — first visit, third visit, fifteenth visit — is with Dr. Parth Bhavsar, MD. Board-certified Family Medicine. NPI 1104323203. Trained at the University of Mississippi Medical Center. The physician who reviews your chart today is the physician who reviewed it last time. There is no AI triage layer, no intake algorithm routing you to a mid-level provider, and no pool of dozens of rotating clinicians.',
        '<strong>Walgreens Virtual Healthcare:</strong> <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens\' own provider FAQ</a> describes its team as "experienced doctors and nurse practitioners." You are matched with "the next available provider licensed in your state." There is no patient selection of provider type. Walgreens does not publish its providers\' credentials on its public pages, and the platform\'s model relies on rotating clinician pools to support its scale across 30 states. This is clinically standard for large-panel telehealth, but it means the provider credential on any given visit is unknown in advance.',
        '<strong>What this means practically:</strong> For most straightforward acute conditions — UTI, sinus infection, pink eye, strep — an NP is clinically appropriate and licensed to diagnose and prescribe. The <a href="https://www.aafp.org/about/policies/all/scope-of-practice.html">AAFP notes</a> that scope of practice varies by state. If you specifically want an MD-level assessment — for a complex medication interaction, an unusual presentation, or simply personal preference — TeleDirectMD is the only major telehealth platform that guarantees it. Walgreens cannot make that guarantee.',
        '<strong>No controlled substances at either platform:</strong> <a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">Walgreens explicitly states</a>: "We do not prescribe any medications that are listed as controlled substances by the U.S. Drug Enforcement Agency (DEA) or state law. This includes narcotics, amphetamine stimulants and benzodiazepines." TeleDirectMD has the same policy. If you are seeking Adderall, opioids, or benzodiazepines, neither platform will prescribe them. See an in-person physician.',
      ],
    },

    rxDive: {
      title: 'Prescription Handling: Any Pharmacy vs. the Walgreens Ecosystem',
      paragraphs: [
        '<strong>TeleDirectMD:</strong> Same-day e-prescription to any licensed U.S. pharmacy — CVS, Walmart, Costco, independent pharmacies, Amazon Pharmacy, or Walgreens itself. Most prescriptions reach the pharmacy within 30–60 minutes of the visit. You choose at checkout and can update before the prescription is sent. No pressure, no loyalty program tie-in.',
        '<strong>Walgreens Virtual Healthcare:</strong> <a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">Per Walgreens\' prescription FAQ</a>, you select your preferred pharmacy at visit end — and that can be any pharmacy, not just Walgreens. However, the platform\'s interface is built around the Walgreens chain: fill-status notifications, same-day delivery, the Walgreens Rx Savings Finder, and in-app refill management all integrate exclusively with Walgreens locations. If you already use Walgreens as your pharmacy, this is a genuine convenience advantage. If you use CVS, Costco, or a local independent, the integration adds no value and the workflow is the same as any other telehealth platform.',
        '<strong>Key limitation at both platforms:</strong> Neither TeleDirectMD nor Walgreens Virtual Healthcare prescribes controlled substances (Schedule II–IV). This includes opioids, stimulants (Adderall, Ritalin), and benzodiazepines (Xanax, Valium). For acute non-controlled conditions — antibiotics, antivirals, antihistamines, blood pressure refills, asthma inhalers — both platforms prescribe effectively and the prescription reaches your pharmacy the same day.',
      ],
    },

    whoFor: {
      tdmd: [
        'You have a general acute illness (fever, sore throat, cough, UTI, sinus infection) and are paying cash — $49 beats $79',
        'You want the same named board-certified MD on every visit, not a rotating anonymous clinician',
        'You are in one of TeleDirectMD\'s 41 states (including states Walgreens does not cover)',
        'You prefer to fill prescriptions at CVS, Walmart, Amazon, or an independent pharmacy — not Walgreens',
      ],
      competitor: [
        'You already fill all your prescriptions at Walgreens and want the seamless same-chain fill flow',
        'Your condition is on Walgreens\' condition-specific menu at $33–$39 (birth control, pink eye, UTI, cold sores) — cheaper than TeleDirectMD\'s $49',
        'You are in one of the 30 Walgreens Virtual Healthcare states but not in TeleDirectMD\'s 41-state network',
        'You want integrated lab orders (STI panels, wellness panels) through Labcorp or Quest — TeleDirectMD does not offer this',
      ],
    },

    decisionGuide: {
      title: 'Which Platform Fits Your Situation?',
      steps: [
        {
          num: 1,
          head: 'Does your condition have a Walgreens-specific visit at $33–$39?',
          body: 'Walgreens charges less than $49 for pink eye ($39), UTI ($39), birth control ($33), cold sores ($33), and a few others. If your exact condition matches a Walgreens narrow-category visit, Walgreens may be the cheaper option.',
          good: false,
        },
        {
          num: 2,
          head: 'Is your need a general urgent care visit — fever, sore throat, cough, or an unlisted acute condition?',
          body: 'TeleDirectMD\'s $49 beats Walgreens\' $79 general urgent care price by $30 (38%). For broad acute conditions not in Walgreens\' condition-specific menu, TeleDirectMD is clearly cheaper.',
          good: true,
        },
        {
          num: 3,
          head: 'Do you specifically want a board-certified MD — not a nurse practitioner?',
          body: 'TeleDirectMD is the only option here. Walgreens matches you with "the next available" clinician from a pool that includes both MDs and NPs; you cannot specify provider type or credential.',
          good: true,
        },
        {
          num: 4,
          head: 'Do you rely on Walgreens for all your pharmacy needs?',
          body: 'Walgreens Virtual Healthcare\'s tight integration with Walgreens pharmacy — real-time fill alerts, same-day delivery, in-app refill management — is a meaningful convenience if you are already a Walgreens pharmacy customer. TeleDirectMD lets you choose any pharmacy, including Walgreens.',
          good: false,
        },
      ],
    },

    faqs: [
      {
        question: 'Is TeleDirectMD cheaper than Walgreens Virtual Healthcare?',
        answer: 'For general urgent care, yes. TeleDirectMD is $49 flat; Walgreens charges $79 for an urgent care video visit per <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">walgreens.com</a>. For condition-specific visits — pink eye, UTI, cold sores, birth control — Walgreens charges $33–$39, which is cheaper than TeleDirectMD\'s $49. The "cheaper" option depends on which condition you are treating.',
      },
      {
        question: 'Does Walgreens Virtual Healthcare accept insurance?',
        answer: 'No. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens explicitly states</a>: "Insurance is currently not accepted for virtual care visits." The only narrow exception is NJ Horizon BCBS for certain live video visits in New Jersey. TeleDirectMD, by contrast, is in-network with Aetna, BCBS, and UHC in select states — meaning insured patients may owe a standard copay instead of the full $49. Check your plan at <a href="/insurance/">teledirectmd.com/insurance/</a>.',
      },
      {
        question: 'Does TeleDirectMD accept insurance?',
        answer: 'Yes, in select states. TeleDirectMD is in-network with Aetna, BCBS (Blue Cross Blue Shield), and UnitedHealthcare. Insured patients in covered states may owe a copay or $0 rather than the full $49 cash price. Walgreens Virtual Healthcare does not accept insurance for the visit fee. See <a href="/insurance/">teledirectmd.com/insurance/</a> for details.',
      },
      {
        question: 'Can I use HSA or FSA at both platforms?',
        answer: 'Yes. Both TeleDirectMD and <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare</a> accept HSA and FSA cards as payment for the visit fee. Virtual telehealth visits qualify as medical expenses for HSA/FSA purposes under IRS guidelines. Medication costs are separate and also typically HSA/FSA-eligible.',
      },
      {
        question: 'What states does Walgreens Virtual Healthcare cover?',
        answer: '<a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">Walgreens Virtual Healthcare</a> is available in 30 states: AL, AZ, CA, CO, CT, FL, GA, IL, IN, KS, KY, LA, MA, MD, MI, MN, MO, NC, NJ, NV, NY, OH, OK, PA, SC, TN, TX, VA, WA, and WI. TeleDirectMD covers <a href="/states-we-serve/">41 states</a>, including several not on the Walgreens list. Verify your state on both platforms before booking.',
      },
      {
        question: 'What states does TeleDirectMD cover that Walgreens does not?',
        answer: 'TeleDirectMD covers 41 states; Walgreens covers 30. States where TeleDirectMD operates but Walgreens Virtual Healthcare does not include states outside Walgreens\' current 30-state footprint. TeleDirectMD\'s known gaps are AK, HI, NY (TeleDirectMD gap), MA (TeleDirectMD gap), RI, VT, NM, OR, and AR — but Walgreens\' gaps are different and often larger. See <a href="/states-we-serve/">teledirectmd.com/states-we-serve/</a> and <a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">walgreens.com</a> for current state lists.',
      },
      {
        question: 'Does Walgreens Virtual Healthcare offer mental health services?',
        answer: 'No. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare\'s current service menu</a> does not include therapy, psychiatry, or counseling. TeleDirectMD also does not offer mental health services. If therapy or psychiatry is your need, consider Teladoc ($119/session), MDLIVE, or Amwell.',
      },
      {
        question: 'Are Walgreens Virtual Healthcare providers real doctors?',
        answer: '<a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens describes</a> its provider team as "experienced doctors and nurse practitioners." You are matched with the next available clinician — provider type (MD vs. NP) is not patient-selectable. TeleDirectMD uses only Dr. Parth Bhavsar, MD — a named, board-certified Family Medicine physician. For patients who specifically want an MD, TeleDirectMD is the guaranteed option.',
      },
      {
        question: 'Do I have to fill my prescription at Walgreens if I use Walgreens Virtual Healthcare?',
        answer: 'No. <a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">Walgreens\' prescription FAQ</a> lets you select any pharmacy — CVS, Walmart, an independent, or any other licensed U.S. pharmacy. However, Walgreens\' fill-status alerts, same-day delivery, and savings tools work only with Walgreens locations. TeleDirectMD also lets you choose any pharmacy with no steering or ecosystem preference.',
      },
      {
        question: 'How long is the wait time at Walgreens Virtual Healthcare?',
        answer: '<a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens states</a> "most visits start within 30 minutes of your request being submitted." Its help page notes that during high-demand periods, wait times may be longer, with an overnight backlog possible. TeleDirectMD schedules same-day appointments including evenings and weekends with a confirmed appointment time, avoiding unpredictable queues.',
      },
      {
        question: 'Can Walgreens Virtual Healthcare or TeleDirectMD prescribe controlled substances?',
        answer: 'No. <a href="https://www.walgreens.com/topic/help/virtualhealthcare.jsp">Walgreens states</a>: "We do not prescribe any medications that are listed as controlled substances by the U.S. Drug Enforcement Agency (DEA) or state law. This includes narcotics, amphetamine stimulants and benzodiazepines." TeleDirectMD has the same policy. Neither platform prescribes Adderall, opioids, Xanax, or similar Schedule II–IV drugs. See an in-person provider for those.',
      },
      {
        question: 'What is the visit price range at Walgreens Virtual Healthcare?',
        answer: '<a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare</a> prices by condition: $33 for birth control, cold sores, acne, ED, cholesterol refills, and skincare; $39 for UTI, pink eye, flu (chat), COVID (chat), yeast infection, and lab orders; $49 for asthma refill, allergies, weight management, and blood pressure refill; $59 for flu/COVID video visit; $79 for general urgent care and travel clinic. TeleDirectMD is $49 flat regardless of condition.',
      },
      {
        question: 'Does Walgreens Virtual Healthcare operate 24/7?',
        answer: 'No. <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens providers are available</a> from 8 am to midnight EST (5 am to 9 pm PST), seven days a week. Visits requested late in the evening or overnight are not seen until a provider becomes available, which may be the following morning. If you need overnight urgent care access, consider Teladoc or MDLIVE, which are staffed 24/7.',
      },
      {
        question: 'Is Walgreens Virtual Healthcare different from the old Walgreens/MDLive service?',
        answer: 'Yes. Walgreens previously offered telehealth through a partnership with MDLive. The current <a href="https://www.walgreens.com/topic/virtual-healthcare.jsp">Walgreens Virtual Healthcare</a> platform — launched in 2023 and expanded to 30 states by 2026 — is a proprietary Walgreens-operated service with its own provider network and pricing ($33–$79 per visit), separate from any MDLive partnership.',
      },
      {
        question: 'How do I choose between TeleDirectMD and Walgreens Virtual Healthcare?',
        answer: 'Choose TeleDirectMD if: you are paying cash for a general acute illness ($49 vs. $79), you want a named MD, you are in TeleDirectMD\'s <a href="/states-we-serve/">41-state network</a>, or your insurer (Aetna, BCBS, UHC) covers TeleDirectMD. Choose Walgreens if: your condition is on Walgreens\' $33–$39 condition-specific menu, you already rely on Walgreens pharmacy and want tight fill integration, or you need lab orders (STI, wellness panel) from within the same visit workflow.',
      },
    ],

    references: [
      { label: 'Walgreens Virtual Healthcare — main service page (pricing, states, providers, FAQ)',    url: 'https://www.walgreens.com/topic/virtual-healthcare.jsp' },
      { label: 'Walgreens Virtual Healthcare — help center (pharmacy, refills, payment, wait times)',   url: 'https://www.walgreens.com/topic/help/virtualhealthcare.jsp' },
      { label: 'Walgreens Virtual Healthcare — pink eye page (visit format, provider description)',      url: 'https://www.walgreens.com/topic/virtual-healthcare/illnesses-and-infections/pink-eye-conjunctivitis.jsp' },
      { label: 'Walgreens Corporate — Weight Management launch press release (Feb 2026)',               url: 'https://corporate.walgreens.com/news-and-stories/press-releases/2026/virtual-healthcare-adds-weight-management-services/' },
      { label: 'Kiplinger — Walgreens Virtual Healthcare launch coverage (pricing and scope)',          url: 'https://www.kiplinger.com/personal-finance/health-insurance/walgreens-launches-virtual-health-care-starting-at-dollar33' },
      { label: 'Mass Market Retailers — Walgreens expands virtual care to 30 states (Oct 2024)',       url: 'https://massmarketretailers.com/walgreens-expands-virtual-health-care-services-to-30-states/' },
      { label: 'AAFP — Scope of practice policy (NP vs. MD authority)',                               url: 'https://www.aafp.org/about/policies/all/scope-of-practice.html' },
      { label: 'TeleDirectMD — states we serve',                                                       url: 'https://teledirectmd.com/states-we-serve/' },
    ],
  },

};
