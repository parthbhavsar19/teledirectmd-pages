import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';
import FaqAccordion from '../../components/FaqAccordion';

export const metadata = {
  title: 'Online Prescriptions by Medication — Deep-Dive FAQ Hub | TeleDirectMD',
  description:
    'Can you get Finasteride, Sildenafil, Tadalafil, Propranolol, or UTI antibiotics online? State-by-state deep-dive FAQ guides (210 pages across 5 medications and 43 states). Board-certified MD evaluation, $79 flat fee.',
  alternates: { canonical: 'https://teledirectmd.com/faq/deep-dive' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Online Prescriptions by Medication — Deep-Dive FAQ Hub | TeleDirectMD',
    description:
      'State-by-state FAQ guides for getting Finasteride, Sildenafil, Tadalafil, Propranolol, and UTI antibiotics online. $79, board-certified MD.',
    url: 'https://teledirectmd.com/faq/deep-dive',
  },
};

const BASE_URL = 'https://teledirectmd.com';

const MEDICATIONS = [
  {
    key: 'finasteride',
    medication: 'Finasteride',
    slugPrefix: 'can-you-get-finasteride-online-in',
    condition: 'Hair Loss (Male Pattern Baldness)',
    conditionSlug: 'hair-loss-treatment-online',
    icon: '\u2702\ufe0f',
    concern: 'hair loss',
    summary:
      'Finasteride is a 5-alpha reductase inhibitor FDA-approved for male pattern hair loss (androgenetic alopecia). It works by reducing DHT levels in the scalp, slowing hair loss and in many men promoting regrowth. Online evaluation requires a physician visit to review your medical history, rule out contraindications, and confirm appropriate use.',
    howItWorks:
      'Finasteride blocks the conversion of testosterone to dihydrotestosterone (DHT) in the scalp. Clinical trials (Merck, 1998; NEJM) demonstrated that 1 mg daily produced significant hair preservation and regrowth over 2\u20135 years compared to placebo. Onset of visible effect typically requires 3\u20136 months of consistent use.',
    contraindications:
      'Finasteride is contraindicated in women of childbearing potential (FDA Category X — teratogenic). It is not prescribed for women at TeleDirectMD. In men, relative contraindications include known hypersensitivity and current use of medications that interact with 5-alpha reductase pathways. The physician will review your full medication list before prescribing.',
    costNote: '$79 visit + $15\u2013$40 generic finasteride (GoodRx, 2025)',
    stateGuideIntro: 'Each state guide below answers: Is a video visit sufficient for finasteride in that state? What does the evaluation include? What is the cost?',
  },
  {
    key: 'sildenafil',
    medication: 'Sildenafil',
    slugPrefix: 'can-you-get-sildenafil-online-in',
    condition: 'Erectile Dysfunction',
    conditionSlug: 'erectile-dysfunction-treatment-online',
    icon: '\ud83d\udcca',
    concern: 'erectile dysfunction',
    summary:
      'Sildenafil (generic Viagra) is a PDE5 inhibitor FDA-approved for erectile dysfunction. It works by increasing blood flow to the penis during sexual stimulation. Generic sildenafil became widely available after Pfizer\u2019s patent expiration and has dropped dramatically in price — often $10\u201340 per supply with GoodRx. Online evaluation by a physician determines appropriateness based on cardiac history, current medications, and other risk factors.',
    howItWorks:
      'Sildenafil inhibits PDE5, the enzyme responsible for degrading cGMP in smooth muscle. This allows cGMP to accumulate, causing smooth muscle relaxation and increased blood flow to penile tissue during sexual stimulation. It does not cause erections without sexual arousal. Typical onset is 30\u201360 minutes; duration is 4\u20136 hours. Doses range from 25 mg to 100 mg.',
    contraindications:
      'Sildenafil is contraindicated with nitrate medications (nitroglycerin, isosorbide) due to risk of severe hypotension. It must be used with caution in patients with significant cardiovascular disease, recent stroke or MI, uncontrolled hypertension, or retinitis pigmentosa. The physician will review your cardiac history and current medications before prescribing.',
    costNote: '$79 visit + $10\u2013$50 generic sildenafil (GoodRx, 2025)',
    stateGuideIntro: 'State guides answer: Can a video visit produce a sildenafil prescription in your state? What does the evaluation cover? Is insurance accepted?',
  },
  {
    key: 'tadalafil',
    medication: 'Tadalafil',
    slugPrefix: 'can-you-get-tadalafil-online-in',
    condition: 'Erectile Dysfunction',
    conditionSlug: 'erectile-dysfunction-treatment-online',
    icon: '\u23f0',
    concern: 'erectile dysfunction',
    summary:
      'Tadalafil (generic Cialis) is the "weekend pill" PDE5 inhibitor — its primary clinical distinction is a longer duration of action (up to 36 hours) compared to sildenafil (4\u20136 hours). A daily low-dose (2.5 or 5 mg) formulation allows for spontaneity without timing a dose. Also FDA-approved for benign prostatic hyperplasia (BPH). Generic tadalafil is widely available at low cost since the patent expiration.',
    howItWorks:
      'Tadalafil inhibits PDE5 with a half-life of approximately 17.5 hours (compared to 4 hours for sildenafil), producing its significantly longer duration of action. Daily low-dose tadalafil maintains steady-state plasma levels that support erectile function without peak-trough fluctuations. It does not cause erections without sexual stimulation.',
    contraindications:
      'Same nitrate contraindication as sildenafil. Tadalafil additionally requires caution with alpha-blockers used for BPH (risk of orthostatic hypotension). The physician will review all current medications including over-the-counter supplements before prescribing.',
    costNote: '$79 visit + $20\u2013$60 generic tadalafil (GoodRx, 2025)',
    stateGuideIntro: 'State guides answer: Does tadalafil require a different evaluation than sildenafil in your state? What does the visit include? What is the cost?',
  },
  {
    key: 'propranolol',
    medication: 'Propranolol',
    slugPrefix: 'can-you-get-propranolol-online-in',
    condition: 'Performance / Speech Anxiety',
    conditionSlug: 'performance-anxiety-treatment-online',
    icon: '\ud83c\udfa4',
    concern: 'speech anxiety',
    summary:
      'Propranolol is a non-selective beta-blocker with a well-established off-label use for situational anxiety — specifically performance and speech anxiety. It blocks the physical symptoms of anxiety (racing heart, tremor, sweating) without sedation or impaired cognition. It is not addictive and is not a controlled substance. Evaluation includes cardiac history review, current medications, and contraindication screening.',
    howItWorks:
      'Propranolol blocks beta-1 and beta-2 adrenergic receptors, reducing the heart rate and blood pressure response to adrenaline. For situational anxiety, a single dose taken 30\u201360 minutes before the event reduces palpitations, tremor, and voice quiver. It does not cause sedation or affect mental sharpness. Typical doses for performance anxiety: 10\u201340 mg as needed.',
    contraindications:
      'Propranolol is contraindicated in asthma (beta-2 blockade causes bronchospasm), uncontrolled heart failure, sick sinus syndrome, and second- or third-degree AV block without a pacemaker. Caution with diabetes (masks hypoglycemia symptoms). The physician will screen for asthma and cardiovascular conditions before prescribing.',
    costNote: '$79 visit + $4\u2013$15 generic propranolol (GoodRx, 2025)',
    stateGuideIntro: 'State guides answer: Can performance anxiety be evaluated and propranolol prescribed online in your state? What is the process?',
  },
  {
    key: 'uti-antibiotics',
    medication: 'UTI Antibiotics',
    slugPrefix: 'can-you-get-uti-treatment-online-in',
    condition: 'UTI Treatment',
    conditionSlug: 'uti-treatment-online',
    icon: '\ud83d\udc89',
    concern: 'urinary tract infection',
    summary:
      'Urinary tract infections (UTIs) are the most common bacterial infection in adult women, affecting approximately 50\u201360% of women at least once in their lifetime (Foxman, 2014, Nature Reviews Urology). Uncomplicated lower UTIs — classic symptoms of dysuria (painful urination), urgency, and frequency without fever or flank pain — are well-suited for telehealth evaluation and same-day antibiotic prescribing. Antibiotic choice follows IDSA guidelines (nitrofurantoin, trimethoprim-sulfamethoxazole, fosfomycin as first-line agents).',
    howItWorks:
      'The physician collects a focused clinical history: symptom onset, character, duration, associated symptoms (fever, flank pain, nausea, discharge), prior UTIs, prior antibiotic allergies, and current medications. Classical uncomplicated UTI presentation in a non-pregnant adult woman with no complicating factors can be treated empirically with antibiotics per IDSA guidelines. Urine culture may be recommended if symptoms persist after treatment.',
    contraindications:
      'Telemedicine is not appropriate for complicated UTIs: pregnant patients, men (UTI in men suggests possible prostatitis and often requires further workup), patients with fever and flank pain (possible pyelonephritis requiring in-person evaluation), and patients who have had 3+ UTIs in the past 12 months. The physician will identify these during evaluation and refer appropriately.',
    costNote: '$79 visit + $4\u2013$20 generic antibiotic (GoodRx, 2025)',
    stateGuideIntro: 'State guides answer: Can UTI antibiotics be prescribed online in your state without an in-person visit? What symptoms qualify? What is the cost?',
  },
];

const STATES = [
  { abbr: 'al', name: 'Alabama' }, { abbr: 'az', name: 'Arizona' }, { abbr: 'ca', name: 'California' },
  { abbr: 'co', name: 'Colorado' }, { abbr: 'ct', name: 'Connecticut' }, { abbr: 'dc', name: 'Washington DC' },
  { abbr: 'de', name: 'Delaware' }, { abbr: 'fl', name: 'Florida' }, { abbr: 'ga', name: 'Georgia' },
  { abbr: 'hi', name: 'Hawaii' }, { abbr: 'id', name: 'Idaho' }, { abbr: 'il', name: 'Illinois' },
  { abbr: 'in', name: 'Indiana' }, { abbr: 'ia', name: 'Iowa' }, { abbr: 'ks', name: 'Kansas' },
  { abbr: 'ky', name: 'Kentucky' }, { abbr: 'la', name: 'Louisiana' }, { abbr: 'me', name: 'Maine' },
  { abbr: 'md', name: 'Maryland' }, { abbr: 'mi', name: 'Michigan' }, { abbr: 'mn', name: 'Minnesota' },
  { abbr: 'ms', name: 'Mississippi' }, { abbr: 'mo', name: 'Missouri' }, { abbr: 'mt', name: 'Montana' },
  { abbr: 'ne', name: 'Nebraska' }, { abbr: 'nv', name: 'Nevada' }, { abbr: 'nh', name: 'New Hampshire' },
  { abbr: 'nj', name: 'New Jersey' }, { abbr: 'nc', name: 'North Carolina' }, { abbr: 'nd', name: 'North Dakota' },
  { abbr: 'oh', name: 'Ohio' }, { abbr: 'ok', name: 'Oklahoma' }, { abbr: 'pa', name: 'Pennsylvania' },
  { abbr: 'sc', name: 'South Carolina' }, { abbr: 'sd', name: 'South Dakota' }, { abbr: 'tn', name: 'Tennessee' },
  { abbr: 'tx', name: 'Texas' }, { abbr: 'ut', name: 'Utah' }, { abbr: 'wa', name: 'Washington' },
  { abbr: 'wv', name: 'West Virginia' }, { abbr: 'wi', name: 'Wisconsin' }, { abbr: 'wy', name: 'Wyoming' },
];

function stateSlugName(abbr) {
  const map = {
    al:'alabama',az:'arizona',ca:'california',co:'colorado',ct:'connecticut',dc:'washington-dc',
    de:'delaware',fl:'florida',ga:'georgia',hi:'hawaii',id:'idaho',il:'illinois',in:'indiana',
    ia:'iowa',ks:'kansas',ky:'kentucky',la:'louisiana',me:'maine',md:'maryland',mi:'michigan',
    mn:'minnesota',ms:'mississippi',mo:'missouri',mt:'montana',ne:'nebraska',nv:'nevada',
    nh:'new-hampshire',nj:'new-jersey',nc:'north-carolina',nd:'north-dakota',oh:'ohio',ok:'oklahoma',
    pa:'pennsylvania',sc:'south-carolina',sd:'south-dakota',tn:'tennessee',tx:'texas',ut:'utah',
    wa:'washington',wv:'west-virginia',wi:'wisconsin',wy:'wyoming',
  };
  return map[abbr] || abbr;
}

const FAQS = [
  {
    question: 'Can I get a prescription from a TeleDirectMD video visit?',
    answer:
      'Yes. If a prescription is clinically appropriate based on your evaluation, the physician sends an e-prescription to your preferred pharmacy during or immediately after the visit. Prescriptions are typically available at the pharmacy within 30 minutes of the visit ending. TeleDirectMD does not prescribe controlled substances.',
  },
  {
    question: 'Is a video visit sufficient for getting finasteride, sildenafil, or tadalafil?',
    answer:
      'For most adult patients without significant complicating factors, a thorough video visit is sufficient. The physician reviews your medical history, current medications, relevant symptoms, and contraindications. For finasteride (hair loss) and ED medications (sildenafil, tadalafil), no in-person physical exam is required in the majority of states. If the physician determines that additional in-person evaluation or lab work is needed before prescribing, that will be communicated clearly.',
  },
  {
    question: 'What is the Ryan Haight Act and does it affect online prescriptions?',
    answer:
      'The Ryan Haight Online Pharmacy Consumer Protection Act (2008) requires an in-person medical evaluation before a practitioner can prescribe a controlled substance via telemedicine. This applies to DEA Schedule II\u2013V substances. None of the medications on this page \u2014 finasteride, sildenafil, tadalafil, propranolol, and common UTI antibiotics \u2014 are controlled substances, so the Ryan Haight Act does not apply to them. These can be prescribed following a telemedicine evaluation that meets standard clinical requirements.',
  },
  {
    question: 'Can UTI antibiotics be prescribed without a urine culture?',
    answer:
      'For classic uncomplicated lower UTI presentation in a non-pregnant adult woman \u2014 dysuria, urgency, frequency, no fever, no flank pain \u2014 the IDSA 2011 guidelines support empiric antibiotic treatment without urine culture for initial episodes. A culture may be recommended if symptoms do not resolve after treatment, if symptoms recur within 2 weeks, or if you have had multiple UTIs. The physician will advise on whether a culture is needed for your specific situation.',
  },
  {
    question: 'Is propranolol safe for performance anxiety?',
    answer:
      'Propranolol is widely used off-label for situational/performance anxiety. It is effective for reducing physical symptoms (tremor, palpitations) and has a strong safety record when used as needed at low doses (10\u201340 mg). It is not a controlled substance, is not habit-forming, and does not cause sedation. Contraindications include asthma and certain cardiovascular conditions. The physician screens for these before prescribing.',
  },
  {
    question: 'How much does the visit cost and is insurance accepted?',
    answer:
      'The self-pay visit fee is $79 flat. TeleDirectMD accepts Aetna, Blue Cross Blue Shield, and UnitedHealthcare commercial plans in select states. Prescription costs are separate and vary by pharmacy. Generic finasteride, sildenafil, tadalafil, propranolol, and UTI antibiotics are all inexpensive generics with GoodRx prices often under $20 to $40. No subscription is required.',
  },
  {
    question: 'What states does TeleDirectMD serve for these prescriptions?',
    answer:
      'TeleDirectMD is currently licensed in 43 states + Washington DC. Each medication guide is available for all 43 states + DC. You must be physically located in a covered state at the time of your visit. The full list is available on the States We Serve page. States not currently covered include Alaska, Hawaii, New York, Massachusetts, Rhode Island, New Mexico, Oregon, and Arkansas.',
  },
  {
    question: 'Is a prescription guaranteed from a TeleDirectMD visit?',
    answer:
      'No. A prescription depends on what is clinically appropriate for your specific evaluation. If the physician determines that the requested medication is not appropriate \u2014 due to a contraindication, an unclear clinical picture, or a need for additional workup \u2014 the prescription will not be written. In that case, the physician will explain the reasoning and discuss appropriate next steps. You still receive a complete clinical evaluation.',
  },
];

const collectionPageChildren = MEDICATIONS.map((med) => ({
  '@type': 'WebPage',
  '@id': `${BASE_URL}/faq/deep-dive/${med.key}/`,
  url: `${BASE_URL}/faq/deep-dive/${med.key}/`,
  name: `Can You Get ${med.medication} Online? State-by-State Guide`,
  description: med.summary.substring(0, 160),
}));

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/faq/deep-dive#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq/` },
        { '@type': 'ListItem', position: 3, name: 'Deep-Dive FAQ', item: `${BASE_URL}/faq/deep-dive/` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/faq/deep-dive#webpage`,
      url: `${BASE_URL}/faq/deep-dive/`,
      name: 'Online Prescriptions by Medication — Deep-Dive FAQ Hub | TeleDirectMD',
      description:
        'Hub for 215 state-by-medication FAQ pages covering online prescriptions for Finasteride, Sildenafil, Tadalafil, Propranolol, and UTI antibiotics across 43 states + DC.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': `${BASE_URL}/faq/deep-dive#breadcrumbs` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      reviewedBy: { '@id': `${BASE_URL}/#physician` },
      lastReviewed: '2026-05-23',
      hasPart: collectionPageChildren,
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
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA', 'Aetna', 'Blue Cross Blue Shield', 'UnitedHealthcare'],
      currenciesAccepted: 'USD',
      aggregateRating: getAggregateRating(),
    },
    {
      '@type': 'Physician',
      '@id': `${BASE_URL}/#physician`,
      name: 'Parth Bhavsar, MD',
      url: `${BASE_URL}/about`,
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      ...getReviewBlock(),
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/faq/deep-dive#faqpage`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

const PAGE_CSS = `
  :root{--tdmd-teal:#006b73;--tdmd-navy:#003e52;--tdmd-accent:#ff5a36;--tdmd-bg-soft:#f3fafb;--tdmd-border:#dde3e6;--tdmd-text:#12323a;--tdmd-muted:#4b5f66;--tdmd-card:#ffffff;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.06);--tdmd-radius:18px;}
  @media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}}
  :root[data-theme="dark"]{--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}
  .fdd-wrap{max-width:1100px;margin:0 auto;padding:0 1.5rem 4rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--tdmd-text);}
  .fdd-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .fdd-hero-inner{max-width:1100px;margin:0 auto;padding:0 1.5rem;}
  .fdd-bc{font-size:0.88rem;color:var(--tdmd-muted);margin-bottom:1.25rem;}
  .fdd-bc a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .fdd-bc span{margin:0 0.4rem;}
  .fdd-h1{font-size:clamp(1.75rem,4vw,2.4rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.02em;line-height:1.2;color:var(--tdmd-text);}
  .fdd-lead{font-size:1.05rem;line-height:1.65;max-width:72ch;margin:0 0 1.25rem;color:var(--tdmd-text);}
  .fdd-badge-row{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-bottom:1.25rem;}
  .fdd-badge{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:999px;padding:0.3rem 0.85rem;font-size:0.88rem;font-weight:700;color:var(--tdmd-navy);}
  .fdd-badge--accent{background:var(--tdmd-accent);color:#fff;border-color:var(--tdmd-accent);}
  .fdd-ctas{display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.25rem;}
  .fdd-btn{display:inline-block;padding:0.65rem 1.5rem;border-radius:999px;font-weight:700;font-size:0.95rem;text-decoration:none;text-align:center;}
  .fdd-btn-primary{background:var(--tdmd-teal);color:#fff;}
  .fdd-btn-outline{border:2px solid var(--tdmd-teal);color:var(--tdmd-teal);background:var(--tdmd-card);}
  .fdd-reviewed{font-size:0.85rem;color:var(--tdmd-muted);margin:0.5rem 0 0;}
  .fdd-reviewed a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .fdd-section{padding:2.5rem 0;}
  .fdd-h2{font-size:clamp(1.3rem,3vw,1.75rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.01em;color:var(--tdmd-text);}
  .fdd-h3{font-size:1.15rem;font-weight:700;margin:0 0 0.5rem;color:var(--tdmd-navy);}
  .fdd-p{font-size:1rem;line-height:1.7;margin:0 0 1rem;color:var(--tdmd-text);}
  .fdd-med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.25rem;margin-top:1.25rem;}
  .fdd-med-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:16px;padding:1.4rem 1.5rem;box-shadow:var(--tdmd-shadow);border-top:4px solid var(--tdmd-teal);}
  .fdd-med-title{font-weight:800;font-size:1.1rem;color:var(--tdmd-navy);margin:0 0 0.4rem;letter-spacing:-0.01em;}
  .fdd-med-condition{font-size:0.85rem;color:var(--tdmd-teal);font-weight:700;margin:0 0 0.65rem;}
  .fdd-med-summary{font-size:0.9rem;color:var(--tdmd-muted);line-height:1.5;margin:0 0 0.75rem;}
  .fdd-med-cost{font-size:0.82rem;color:var(--tdmd-muted);margin:0 0 0.75rem;padding:0.4rem 0.75rem;background:var(--tdmd-bg-soft);border-radius:8px;display:inline-block;}
  .fdd-state-cloud{display:flex;flex-wrap:wrap;gap:0.35rem 0.5rem;margin-top:0.75rem;}
  .fdd-state-link{color:var(--tdmd-navy);font-weight:600;text-decoration:underline;text-underline-offset:2px;font-size:0.8rem;}
  .fdd-state-link:hover{color:var(--tdmd-teal);}
  .fdd-show-all{display:inline-block;margin-top:0.5rem;font-size:0.8rem;color:var(--tdmd-teal);font-weight:700;cursor:pointer;}
  .fdd-info-box{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.25rem 1.4rem;box-shadow:var(--tdmd-shadow);margin-top:1rem;}
  .fdd-info-box--teal{border-top:4px solid var(--tdmd-teal);}
  .fdd-info-box--accent{border-top:4px solid var(--tdmd-accent);}
  .fdd-list{padding-left:1.25rem;margin:0.5rem 0;display:grid;gap:0.4rem;font-size:0.96rem;line-height:1.55;}
  .fdd-two-col{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem;}
  .fdd-link-cloud{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-top:1rem;}
  .fdd-link-cloud a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;font-size:0.95rem;}
  .fdd-link-cloud a:hover{color:var(--tdmd-teal);}
  .fdd-cta-bar{margin-top:2.5rem;background:linear-gradient(135deg,rgba(0,107,115,.08),rgba(0,62,82,.04));border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius);padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;}
  .fdd-cta-bar h3{margin:0;font-size:1.15rem;font-weight:800;letter-spacing:-0.01em;}
  .fdd-cta-bar p{margin:0.35rem 0 0;color:var(--tdmd-muted);font-size:0.95rem;max-width:62ch;}
  .fdd-cta-bar-actions{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;}
  .fdd-divider{border:none;border-top:1px solid var(--tdmd-border);margin:2rem 0;}
  .fdd-step-grid{display:grid;gap:1rem;margin-top:1rem;}
  .fdd-step{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:12px;padding:1.1rem 1.25rem;display:flex;gap:1rem;align-items:flex-start;box-shadow:var(--tdmd-shadow);}
  .fdd-step-num{background:var(--tdmd-teal);color:#fff;width:2rem;height:2rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.95rem;flex-shrink:0;}
  .fdd-step-body h4{margin:0 0 0.3rem;font-size:1rem;font-weight:700;color:var(--tdmd-navy);}
  .fdd-step-body p{margin:0;font-size:0.9rem;color:var(--tdmd-muted);line-height:1.5;}
  @media(max-width:768px){.fdd-two-col{grid-template-columns:1fr;}}
  @media(max-width:520px){.fdd-med-grid{grid-template-columns:1fr;}}
`;

// Show 12 states initially per medication card, to keep the hub concise
const PREVIEW_STATES = STATES.slice(0, 12);

export default function FaqDeepDiveHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* Hero */}
      <div className="fdd-hero">
        <div className="fdd-hero-inner">
          <nav className="fdd-bc" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/faq">FAQ</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Deep-Dive FAQ</span>
          </nav>
          <h1 className="fdd-h1">Online Prescriptions by Medication — State-by-State Deep-Dive FAQ</h1>
          <p className="fdd-lead">
            This section covers 215 state-by-medication FAQ pages answering the question: &ldquo;Can you get [medication] online
            in [state]?&rdquo; For each of the five medications below, there is a dedicated guide for every state TeleDirectMD
            serves — 43 states + Washington DC.
          </p>
          <p className="fdd-lead">
            The five medications covered are <strong>Finasteride</strong> (hair loss), <strong>Sildenafil</strong> (erectile dysfunction),
            <strong>Tadalafil</strong> (erectile dysfunction), <strong>Propranolol</strong> (performance anxiety), and{' '}
            <strong>UTI antibiotics</strong>. All are non-controlled substances that can be prescribed following a thorough
            telemedicine evaluation by Dr. Parth Bhavsar, MD — a board-certified family medicine physician
            (NPI&nbsp;1104323203). Self-pay visits are <strong>$79</strong> flat.
          </p>
          <div className="fdd-badge-row">
            <span className="fdd-badge fdd-badge--accent">$79 Flat</span>
            <span className="fdd-badge">210 State-Medication Guides</span>
            <span className="fdd-badge">43 States + DC</span>
            <span className="fdd-badge">MD-Only</span>
            <span className="fdd-badge">Non-Controlled Meds Only</span>
          </div>
          <div className="fdd-ctas">
            <a href="/book-online" className="fdd-btn fdd-btn-primary">Book a Visit — $79</a>
            <a href="/faq" className="fdd-btn fdd-btn-outline">Main FAQ</a>
          </div>
          <p className="fdd-reviewed">
            Medically reviewed by{' '}
            <a href="/about">Parth Bhavsar, MD</a>
            {' '}(NPI&nbsp;1104323203) &mdash; Last reviewed: May 23, 2026
          </p>
        </div>
      </div>

      <div className="fdd-wrap">

        {/* Medication Cards */}
        <section className="fdd-section" aria-labelledby="med-catalog-heading">
          <h2 id="med-catalog-heading" className="fdd-h2">Medications Covered — Find Your State Guide</h2>
          <p className="fdd-p">
            Select your medication below and then click your state to go directly to the state-specific FAQ page.
            Each state page answers whether a video visit is sufficient, what the evaluation covers, what the cost is,
            and whether insurance is accepted in your state.
          </p>
          <div className="fdd-med-grid">
            {MEDICATIONS.map((med) => (
              <div key={med.key} className="fdd-med-card">
                <p className="fdd-med-title">{med.medication}</p>
                <p className="fdd-med-condition">{med.condition}</p>
                <p className="fdd-med-summary">{med.summary.substring(0, 200)}&hellip;</p>
                <span className="fdd-med-cost">Typical cost: {med.costNote}</span>
                <p style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--tdmd-navy)', margin: '0.75rem 0 0.4rem' }}>
                  State guides:
                </p>
                <div className="fdd-state-cloud">
                  {STATES.map((st) => (
                    <a
                      key={st.abbr}
                      href={`/faq/deep-dive/${med.slugPrefix}-${stateSlugName(st.abbr)}`}
                      className="fdd-state-link"
                    >
                      {st.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="fdd-divider" />

        {/* Clinical context per medication */}
        <section className="fdd-section" aria-labelledby="clinical-heading">
          <h2 id="clinical-heading" className="fdd-h2">Clinical Context for Each Medication</h2>
          <p className="fdd-p">
            Each medication on this page has a distinct clinical rationale, mechanism of action, and set of contraindications.
            Understanding these helps patients make informed decisions about whether a telehealth visit is the right first step.
            Dr. Bhavsar conducts a thorough evaluation on every visit — the following summaries reflect the key points each
            evaluation covers.
          </p>

          {MEDICATIONS.map((med) => (
            <div key={med.key} className="fdd-info-box fdd-info-box--teal" style={{ marginBottom: '1.25rem' }}>
              <h3 className="fdd-h3">{med.medication} &mdash; {med.condition}</h3>
              <p className="fdd-p" style={{ marginBottom: '0.5rem' }}><strong>How it works:</strong> {med.howItWorks}</p>
              <p className="fdd-p" style={{ marginBottom: '0.5rem' }}><strong>Key contraindications:</strong> {med.contraindications}</p>
              <p className="fdd-p" style={{ marginBottom: '0' }}>
                <strong>Typical total cost:</strong> {med.costNote}. {med.stateGuideIntro}
              </p>
            </div>
          ))}
        </section>

        <hr className="fdd-divider" />

        {/* How a deep-dive visit works */}
        <section className="fdd-section" aria-labelledby="process-heading">
          <h2 id="process-heading" className="fdd-h2">How a Medication Evaluation Visit Works</h2>
          <p className="fdd-p">
            Whether you are requesting finasteride for hair loss, sildenafil for ED, or antibiotics for a UTI, the process
            follows the same structure at TeleDirectMD. Every visit is a live, synchronous video encounter with Dr. Bhavsar —
            not a chat form, not an AI triage, not an asynchronous questionnaire.
          </p>
          <div className="fdd-step-grid">
            {[
              { num: 1, title: 'Book your visit', body: 'Select a time at teledirectmd.com/book-online. Same-day slots are often available, including evenings and weekends. You must be physically located in a covered state.' },
              { num: 2, title: 'Complete your intake', body: 'Before the visit, you fill out a brief intake form covering your symptoms, current medications, allergies, and relevant medical history. This takes about 5 minutes and gives the physician context before the video starts.' },
              { num: 3, title: 'Video evaluation with Dr. Bhavsar', body: 'Dr. Bhavsar reviews your intake, asks targeted follow-up questions, and performs a focused evaluation. For ED medications, cardiac history and nitrate use are screened. For UTI antibiotics, symptom pattern and complicating factors are assessed. For finasteride, general health and reproductive plans are reviewed.' },
              { num: 4, title: 'Receive your prescription and plan', body: 'If the medication is clinically appropriate, an e-prescription is sent to your preferred pharmacy \u2014 often within 30 minutes of the visit ending. If the medication is not appropriate, Dr. Bhavsar explains why and discusses alternatives or appropriate next steps.' },
              { num: 5, title: 'Pick up at any pharmacy', body: 'Your prescription is sent electronically to the pharmacy of your choice. Use GoodRx, Amazon Pharmacy, or Cost Plus Drugs to compare prices before picking up. Most of the generics covered here cost under $40 with discount programs.' },
            ].map((step) => (
              <div key={step.num} className="fdd-step">
                <div className="fdd-step-num">{step.num}</div>
                <div className="fdd-step-body">
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="fdd-divider" />

        {/* State coverage */}
        <section className="fdd-section" aria-labelledby="states-heading">
          <h2 id="states-heading" className="fdd-h2">State Coverage for Medication Evaluations</h2>
          <p className="fdd-p">
            TeleDirectMD is licensed in the following 43 states + Washington DC. Patients must be physically located in
            a covered state at the time of their visit. Each state link below leads to the general state page — for
            medication-specific guides, use the state links in the medication cards above.
          </p>
          <div className="fdd-link-cloud">
            {STATES.map((st) => (
              <a key={st.abbr} href={`/${stateSlugName(st.abbr)}`}>{st.name}</a>
            ))}
          </div>
          <p className="fdd-p" style={{ marginTop: '1rem' }}>
            States not currently served: Alaska, Hawaii, New York, Massachusetts, Rhode Island, New Mexico, Oregon,
            and Arkansas. Patients in those states should seek care from a locally licensed telehealth service.
          </p>
        </section>

        <hr className="fdd-divider" />

        {/* Regulatory context */}
        <section className="fdd-section" aria-labelledby="regulatory-heading">
          <h2 id="regulatory-heading" className="fdd-h2">Telehealth and Prescription Law — What Patients Should Know</h2>
          <p className="fdd-p">
            All five medications on this page are non-controlled substances. This distinction is important because the
            Ryan Haight Online Pharmacy Consumer Protection Act (2008) and associated DEA rules require an in-person
            evaluation prior to prescribing controlled substances via telemedicine (with narrow exceptions). Since
            finasteride, sildenafil, tadalafil, propranolol, and common UTI antibiotics are not scheduled controlled
            substances, they can be prescribed following a thorough telemedicine evaluation that meets standard clinical requirements.
          </p>
          <p className="fdd-p">
            State-level telehealth laws vary. Some states have additional informed consent requirements for certain
            prescriptions or require specific documentation. TeleDirectMD operates in compliance with the telehealth
            laws of each state in which it is licensed. The state-specific FAQ pages note any relevant state-level
            considerations that affect the evaluation or prescribing process in that state.
          </p>
          <p className="fdd-p">
            TeleDirectMD does not prescribe any DEA Schedule II, III, IV, or V controlled substances. This includes
            opioids, benzodiazepines, stimulants, sleep aids (zolpidem, eszopiclone), and others. If you need a
            controlled substance prescription, you will need an in-person appointment with a licensed prescriber.
          </p>
          <div className="fdd-two-col">
            <div className="fdd-info-box fdd-info-box--teal">
              <h3 className="fdd-h3">Medications TeleDirectMD can prescribe via telemedicine</h3>
              <ul className="fdd-list">
                <li>Finasteride (hair loss)</li>
                <li>Sildenafil, Tadalafil (erectile dysfunction)</li>
                <li>Propranolol (performance / speech anxiety)</li>
                <li>UTI antibiotics (nitrofurantoin, TMP-SMX, fosfomycin)</li>
                <li>Antibiotics for sinus, strep, skin infections</li>
                <li>Antiviral medications (valacyclovir, acyclovir)</li>
                <li>Oral contraceptives and contraceptive patches</li>
                <li>Allergy medications (nasal steroids, antihistamines)</li>
                <li>Asthma inhalers (refills for established patients)</li>
                <li>Many chronic medication refills (non-controlled)</li>
              </ul>
            </div>
            <div className="fdd-info-box fdd-info-box--accent">
              <h3 className="fdd-h3">Medications TeleDirectMD does NOT prescribe</h3>
              <ul className="fdd-list">
                <li>Opioid pain medications (any DEA schedule)</li>
                <li>Benzodiazepines (Xanax, Klonopin, Valium, Ativan)</li>
                <li>Stimulants (Adderall, Ritalin, Vyvanse)</li>
                <li>Sleep aids (Ambien/zolpidem, Lunesta/eszopiclone)</li>
                <li>Barbiturates</li>
                <li>Muscle relaxants with abuse potential (carisoprodol)</li>
                <li>Medical marijuana / cannabis certificates</li>
                <li>Testosterone and other anabolic steroids</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="fdd-divider" />

        {/* FAQ */}
        <section className="fdd-section" aria-labelledby="faq-heading">
          <FaqAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
            sectionTitle="Frequently Asked Questions"
            sectionId="faq"
          />
        </section>

        {/* Related links */}
        <section className="fdd-section" aria-labelledby="related-heading">
          <h2 id="related-heading" className="fdd-h2">Related Resources</h2>
          <div className="fdd-link-cloud">
            <a href="/faq">Main FAQ Page</a>
            <a href="/cost">Cost Guides</a>
            <a href="/symptoms">Symptoms Directory</a>
            <a href="/compare">Compare Telehealth Services</a>
            <a href="/insurance">Insurance &amp; Pricing</a>
            <a href="/about">About Dr. Bhavsar, MD</a>
            <a href="/states-we-serve">States We Serve</a>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="fdd-cta-bar">
          <div>
            <h3>Ready for a medication evaluation? Book today for $79.</h3>
            <p>Board-certified MD, same-day video visit, non-controlled prescriptions, 43 states + DC. No membership required.</p>
          </div>
          <div className="fdd-cta-bar-actions">
            <a href="/book-online" className="fdd-btn fdd-btn-primary">Book a Visit</a>
            <a href="/faq" className="fdd-btn fdd-btn-outline">Main FAQ</a>
          </div>
        </div>

      </div>
    </>
  );
}
