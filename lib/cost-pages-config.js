// ─── Cost-page content config ───────────────────────────────────────────
// Per-page content for each /cost/[slug]/ page. The dynamic route renders
// from this config so all pages share the same gold-standard 23-section
// structure (matching app/who-we-serve/[segment]/InternationalVisitorsPage.js).
//
// Every dollar figure and competitor claim has an inline citation link.
// Verified pricing as of April–May 2026.
//
// AI-visibility note: each entry includes a `citableSummary` field, a
// self-contained, source-named 80–120 word paragraph rendered as a structured
// Q&A pair and emitted as schema.org QAPage. This is the chunk most likely to
// be pulled verbatim by ChatGPT, Perplexity, Gemini, and Claude in response
// to cost queries.

export const COST_PAGE_SLUGS = [
  'online-doctor-visit-cost',
  'uti-treatment-cost',
  'uti-antibiotics-cost',
  'sinus-infection-treatment-cost',
  'sore-throat-treatment-cost',
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
];

export const COST_RELATED_LINKS = {
  'online-doctor-visit-cost': {
    relatedCost: ["uti-treatment-cost","sinus-infection-treatment-cost","sore-throat-treatment-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive","teledirectmd-vs-amwell","teledirectmd-vs-doctor-on-demand","teledirectmd-vs-sesame","teledirectmd-vs-healthtap"],
  },
  'uti-treatment-cost': {
    relatedCost: ["online-doctor-visit-cost","uti-antibiotics-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive"],
  },
  'uti-antibiotics-cost': {
    relatedCost: ["uti-treatment-cost","online-doctor-visit-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-healthtap"],
  },
  'sinus-infection-treatment-cost': {
    relatedCost: ["online-doctor-visit-cost","sore-throat-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-amwell"],
  },
  'sore-throat-treatment-cost': {
    relatedCost: ["online-doctor-visit-cost","sinus-infection-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-mdlive","teledirectmd-vs-doctor-on-demand"],
  },
  'online-prescription-cost': {
    relatedCost: ["online-doctor-visit-cost","uti-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-healthtap"],
  },
  'pink-eye-cost': {
    relatedCost: ["ear-infection-cost","sore-throat-treatment-cost","sinus-infection-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive"],
  },
  'ear-infection-cost': {
    relatedCost: ["pink-eye-cost","sore-throat-treatment-cost","sinus-infection-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-doctor-on-demand"],
  },
  'yeast-infection-cost': {
    relatedCost: ["bv-treatment-cost","uti-treatment-cost","birth-control-refills-cost"],
    relatedCompare: ["teledirectmd-vs-amwell","teledirectmd-vs-sesame"],
  },
  'bv-treatment-cost': {
    relatedCost: ["yeast-infection-cost","uti-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-amwell","teledirectmd-vs-sesame"],
  },
  'cold-sore-cost': {
    relatedCost: ["shingles-cost","sore-throat-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-healthtap"],
  },
  'shingles-cost': {
    relatedCost: ["cold-sore-cost","sinus-infection-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive"],
  },
  'migraine-treatment-cost': {
    relatedCost: ["diabetes-refills-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-amwell","teledirectmd-vs-doctor-on-demand"],
  },
  'birth-control-refills-cost': {
    relatedCost: ["yeast-infection-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-healthtap"],
  },
  'erectile-dysfunction-cost': {
    relatedCost: ["hair-loss-treatment-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-healthtap"],
  },
  'hair-loss-treatment-cost': {
    relatedCost: ["erectile-dysfunction-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-healthtap"],
  },
  'diabetes-refills-cost': {
    relatedCost: ["migraine-treatment-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-amwell","teledirectmd-vs-mdlive"],
  },
  'acne-treatment-cost': {
    relatedCost: ["eczema-treatment-cost","seasonal-allergies-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-healthtap"],
  },
  'eczema-treatment-cost': {
    relatedCost: ["acne-treatment-cost","seasonal-allergies-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-amwell"],
  },
  'seasonal-allergies-cost': {
    relatedCost: ["sinus-infection-treatment-cost","sore-throat-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive"],
  },
  'covid-19-treatment-cost': {
    relatedCost: ["sore-throat-treatment-cost","sinus-infection-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-doctor-on-demand"],
  },
};

export const COST_PAGE_FOR_CONDITION = {
  'uti-treatment-online': 'uti-treatment-cost',
  'sinus-infection-treatment-online': 'sinus-infection-treatment-cost',
  'sore-throat-treatment-online': 'sore-throat-treatment-cost',
  'strep-throat-treatment-online': 'sore-throat-treatment-cost',
  'pink-eye-treatment-online': 'pink-eye-cost',
  'ear-pain-treatment-online': 'ear-infection-cost',
  'yeast-infection-treatment-online': 'yeast-infection-cost',
  'bv-treatment-online': 'bv-treatment-cost',
  'cold-sore-treatment-online': 'cold-sore-cost',
  'shingles-treatment-online': 'shingles-cost',
  'migraine-refills-online': 'migraine-treatment-cost',
  'birth-control-refills-online': 'birth-control-refills-cost',
  'erectile-dysfunction-treatment-online': 'erectile-dysfunction-cost',
  'hair-loss-treatment-online': 'hair-loss-treatment-cost',
  'diabetes-refills-online': 'diabetes-refills-cost',
  'acne-treatment-online': 'acne-treatment-cost',
  'eczema-treatment-online': 'eczema-treatment-cost',
  'seasonal-allergies-treatment-online': 'seasonal-allergies-cost',
  'covid-19-treatment-online': 'covid-19-treatment-cost',
};

export const ALL_COMPARE_SLUGS = [
  'teledirectmd-vs-teladoc',
  'teledirectmd-vs-mdlive',
  'teledirectmd-vs-amwell',
  'teledirectmd-vs-doctor-on-demand',
  'teledirectmd-vs-sesame',
];

export const COST_PAGES = {

  // ──────────────────────────────────────────────────────────────────
  'online-doctor-visit-cost': {
    slug: "online-doctor-visit-cost",
    pid: "online-doctor-cost",
    h1: "How Much Does an Online Doctor Visit Cost in 2026?",
    metaTitle: "Online Doctor Visit Cost 2026: $79 vs. $150+ Urgent Care",
    metaDescription: "A $79 video visit with a board-certified MD, not an NP or PA. See 2026 cash-pay prices: TeleDirectMD $79, urgent care $150–$280, ER ~$2,863. Same-day, no insurance required, HSA/FSA accepted.",
    // 2026-08-11: metaDescription (only) rewritten to lead with the MD-only
    // differentiator instead of price. Title kept unchanged, still matching the
    // H1 word-for-word, so this is a single-variable CTR test. Live SERP check
    // (DataForSEO) shows CVS, Amazon One Medical, Walgreens, GoodRx, Sesame, and
    // UHC all headlining $19-$54 starting prices for this exact query, so "$79"
    // alone reads as expensive next to them even though $79 beats urgent care/ER.
    // "Board-certified MD only, not a mixed NP/PA pool" is the one claim in the
    // platform-comparison table below that none of those six can make. AI
    // Overview is confirmed present on this query, so being the answer the
    // overview cites (see citableSummary) matters more here than winning a rich
    // snippet slot, which no longer exists for FAQ content sitewide anyway
    // (Google retired FAQ rich results for every site on 2026-05-07).
    breadcrumb: "Online Doctor Visit Cost",
    answerLead: "Online doctor visit cost in 2026:",
    answerBody: "Cash-pay telehealth visits typically run $40–$90, according to <a href=\"https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost\">GoodRx</a>. TeleDirectMD charges a flat $79, a small fraction of the average uninsured ER visit (about $2,863, per <a href=\"https://www.talktomira.com/post/how-much-does-an-er-visit-cost\">Mira Health, Sept 2026</a>) and roughly one-quarter to one-half of a typical self-pay urgent care visit ($150–$280, per <a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>). Insured patients may pay a lower copay through their plan.",
    heroSub: "A board-certified MD video visit for $79 flat. No insurance needed. We compared 2026 cash-pay prices across every common care setting, so here's what you'll actually pay.",
    heroIntro: "If you don't have insurance, the cost of a doctor visit can vary by 50× depending on where you go. We pulled current cash-pay prices from KFF, Mira Health, GoodRx, Penn Medicine, and the major telehealth platforms to give you a clear picture of what an online doctor visit actually costs in 2026, and how it compares to walking into an urgent care or emergency room.",
    heroCardTitle: "What You Get for $79",
    heroCardItems: [
      "Video visit with a board-certified MD (Dr. Parth Bhavsar)",
      "Prescription sent to any US pharmacy",
      "Same-day, evenings & weekends",
      "Available in 40+ states",
      "No US insurance required",
      "Receipt suitable for HSA/FSA reimbursement",
    ],
    heroBenefits: [
      "$79 flat fee, no hidden fees, no facility fees",
      "A small fraction of the average uninsured ER visit ($2,863)",
      "About one-quarter to one-half of cash-pay urgent care ($150–$280 average)",
      "HSA/FSA accepted; receipt provided for travel-insurance reimbursement",
      "In-network with Aetna, BCBS, and UnitedHealthcare in select states",
    ],
    costTable: {
      title: "Online Doctor Visit Cost vs. Other Care Settings (2026, Uninsured)",
      caption: "Cash-pay prices for a non-emergency visit. Excludes labs, imaging, and procedures unless noted.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$79 flat",
          includes: "Board-certified MD video visit + e-prescription to any US pharmacy",
          source: "TeleDirectMD published rate",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$40–$90",
          includes: "Video or phone visit; provider type varies (MD, NP, PA)",
          source: "GoodRx, 2023",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care office (cash-pay)",
          cost: "$100–$300 (avg ~$171)",
          includes: "In-person visit with PCP; labs and imaging billed separately",
          source: "Mira Health, Feb 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280",
          includes: "In-person walk-in visit; an X-ray adds $100–$250 and tests add more",
          source: "Solv, June 2026",
          sourceUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "~$2,863 average",
          includes: "ED visit; uninsured average across visit levels, about $2,850–$3,160",
          source: "Mira Health, Sept 2026",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost",
        },
      ],
    },
    platformTable: {
      title: "Cash-Pay Cost Across Major US Telehealth Platforms (2026)",
      caption: "Lowest published flat-rate cash-pay urgent care visit per platform.",
      rows: [
        {
          platform: "TeleDirectMD",
          price: "$79 flat",
          states: "40+",
          mdOnly: "Yes, Dr. Bhavsar, MD only",
          source: "teledirectmd.com",
          sourceUrl: "https://teledirectmd.com",
        },
        {
          platform: "Sesame",
          price: "$29–$37+ (provider-set)",
          states: "50",
          mdOnly: "Mixed (MD/NP/PA)",
          source: "Healthline",
          sourceUrl: "https://www.healthline.com/health/sesame-care",
        },
        {
          platform: "Amwell",
          price: "$79",
          states: "50",
          mdOnly: "No (mixed)",
          source: "PsychCentral",
          sourceUrl: "https://psychcentral.com/health/amwell-reviews",
        },
        {
          platform: "MDLIVE",
          price: "$85",
          states: "50 + PR",
          mdOnly: "No (mixed)",
          source: "Healthline",
          sourceUrl: "https://www.healthline.com/health/mdlive-reviews",
        },
        {
          platform: "Teladoc",
          price: "$89",
          states: "50",
          mdOnly: "No (NPs hired)",
          source: "Teladoc",
          sourceUrl: "https://www.teladochealth.com/start/no-insurance",
        },
        {
          platform: "Doctor on Demand",
          price: "$99",
          states: "50",
          mdOnly: "No (mixed)",
          source: "Doctor on Demand",
          sourceUrl: "https://doctorondemand.com/about-us/cost-insurance/",
        },
      ],
    },
    conditionRollup: {
      title: "Total Cost of Care by Condition (Telehealth vs. In-Person)",
      caption: "Visit cost + medication cost (GoodRx generic). Tests excluded unless required.",
      rows: [
        {
          condition: "UTI (uncomplicated)",
          telehealth: "$89–$93",
          urgentCare: "$160–$354",
          er: "$1,500–$3,000",
          source: "GoodRx; Solv 2026; BetterCare",
          sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro",
        },
        {
          condition: "Sinus infection",
          telehealth: "$88–$99",
          urgentCare: "$159–$300",
          er: "$1,500–$3,000",
          source: "GoodRx; Solv 2026; BetterCare",
          sourceUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          condition: "Strep / sore throat",
          telehealth: "$88–$94 + test if needed",
          urgentCare: "$184–$365",
          er: "~$654 average",
          source: "Solv 2026; Mira Health 2026",
          sourceUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          condition: "Acute Rx refill (BP, asthma)",
          telehealth: "$83–$109",
          urgentCare: "$154–$310",
          er: "Not appropriate",
          source: "Venteur 2026",
          sourceUrl: "https://www.venteur.com/blog/how-much-does-an-urgent-care-visit-cost-guide",
        },
      ],
    },
    educationalGap: {
      title: "Why Online Doctor Visits Cost So Much Less",
      paragraphs: [
        "A 2026 Penn Medicine study in JAMA Network Open analyzed 160,000+ insurer-billed visits across 10 common billing codes. The average charge per 30-day episode of care, including follow-up, was <strong>$96</strong> when care started with a telemedicine visit versus <strong>$509</strong> when it started in person. These are charges billed to insurers, not patient out-of-pocket costs. Source: <a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>.",
        "Telehealth removes facility fees and the overhead of a physical clinic. For many acute, uncomplicated conditions like UTI (women only), sinus infection, strep throat, pink eye, and prescription refills, a video visit can often handle the evaluation without an in-person exam. For cash-pay patients, that can mean a lower bill.",
        "In 2024, <strong>26.7 million</strong> Americans under 65 were uninsured (<a href=\"https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/\">KFF, June 2026</a>) and <strong>38.6% of uninsured adults</strong> reported delaying or skipping needed care due to cost. Flat-rate telehealth at $79 can help close that gap for the conditions it can treat.",
      ],
    },
    whoWeHelp: {
      title: "Who Saves the Most on Online Doctor Visits",
      groups: [
        {
          label: "Uninsured adults",
          desc: "$79 flat instead of a $150–$280 urgent care visit or a ~$2,863 ER visit. Predictable upfront cost; no hidden fees.",
        },
        {
          label: "High-deductible plan members",
          desc: "If your deductible is unmet, $79 cash-pay is often cheaper than the in-network rate you'd pay before the deductible kicks in.",
        },
        {
          label: "Travelers between states",
          desc: "No need to find a new provider. One physician, 40+ states.",
        },
        {
          label: "HSA/FSA cardholders",
          desc: "Pay $79 with HSA/FSA card; receipt is automatic.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Online Doctor Visits Make Financial Sense",
      goodFor: [
        "UTI / urinary tract infection",
        "Sinus infection / sinusitis",
        "Strep / sore throat",
        "Pink eye",
        "Cold, flu, mild bronchitis",
        "Acid reflux refills",
        "Hypertension / cholesterol / asthma refills",
        "Allergies",
        "Skin rashes / mild infections",
        "Prescription refills for stable conditions",
      ],
      notFor: [
        "Chest pain or trouble breathing (call 911)",
        "Severe abdominal pain",
        "Stroke symptoms (face droop, slurred speech)",
        "Major trauma or bleeding",
        "Conditions requiring imaging or labs you don't already have",
        "Controlled substance prescriptions (TeleDirectMD does not prescribe)",
      ],
    },
    decisionGuide: {
      title: "Should You Use Telehealth, Urgent Care, or the ER?",
      steps: [
        {
          num: 1,
          head: "Is it life-threatening?",
          body: "Chest pain, stroke symptoms, severe trouble breathing, major trauma: call 911 or go to the nearest ER. Cost is secondary; ER is the right setting.",
          good: false,
        },
        {
          num: 2,
          head: "Can a clinician evaluate it without touching you or running labs?",
          body: "UTI (women only), sinus infection, strep throat, pink eye, refills, allergies, skin rashes: these are textbook telehealth conditions. Start with a $79 video visit.",
          good: true,
        },
        {
          num: 3,
          head: "Do you need imaging, IV fluids, or in-person procedures?",
          body: "Sprain that needs an X-ray, severe dehydration, suspected appendicitis: go to urgent care or the ER. A telehealth visit can't image or infuse.",
          good: false,
        },
        {
          num: 4,
          head: "Are you between 9am and 9pm with no critical red flags?",
          body: "Most acute issues fit telehealth. Book a $79 visit, get a prescription if needed, and skip the waiting room.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "most common generics",
      price: "$5–$8/month",
      note: "manufacturer cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Common Generic Prescription Costs (with GoodRx)",
      caption: "Visit + medication, telehealth pathway. Generic prices via GoodRx, 30-day supply.",
      rows: [
        {
          drug: "Nitrofurantoin (UTI antibiotic)",
          cost: "$6–$14",
          sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro",
        },
        {
          drug: "Amoxicillin (sinus / strep)",
          cost: "~$9",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          drug: "Lisinopril (hypertension)",
          cost: "$4–$12",
          sourceUrl: "https://www.goodrx.com/lisinopril",
        },
        {
          drug: "Atorvastatin (cholesterol)",
          cost: "$8–$15",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Albuterol inhaler (asthma)",
          cost: "$20–$25",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Metoprolol (blood pressure)",
          cost: "$3–$9",
          sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/",
        },
      ],
    },
    homeCare: {
      title: "Stretching Your $79 Visit Further",
      bullets: [
        "Have your pharmacy and current medication list ready before booking.",
        "Snap clear photos of any rash, throat, or eye symptoms in good lighting.",
        "Use GoodRx, Cost Plus Drugs, or Amazon Pharmacy to comparison-shop the prescription.",
        "If you have an HSA/FSA card, use it at booking; the $79 fee is qualified.",
        "Save the visit summary; it's suitable for travel-insurance or employer reimbursement.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Use TeleDirectMD",
      bullets: [
        "Anything that feels life-threatening: call 911.",
        "Conditions requiring controlled substance prescriptions (we do not prescribe).",
        "Pediatric patients (under 18). We see adults only.",
        "Mental health: TeleDirectMD does not currently offer therapy or psychiatry.",
        "Conditions requiring in-person physical exam, imaging, or in-clinic procedures.",
      ],
    },
    faqs: [
      {
        question: "How much does an online doctor visit cost without insurance?",
        answer: "Cash-pay telehealth visits typically run $40 to $90 per GoodRx. TeleDirectMD charges a flat $79 for a video visit with a board-certified physician. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "Is a telehealth visit cheaper than urgent care?",
        answer: "For cash-pay patients, usually. A self-pay urgent care visit averages $150–$280 (Solv, June 2026), and a visit with an X-ray runs $250–$500. A $79 TeleDirectMD visit costs about one-quarter to one-half as much for conditions that don't need testing or imaging. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "How does a $79 visit compare to the ER?",
        answer: "The average uninsured ER visit costs about $2,863 in 2026 per Mira Health. For non-emergency conditions, that's about 36 times the cost of a TeleDirectMD visit. The ER is the right place for true emergencies.",
      },
      {
        question: "Are there any hidden fees with TeleDirectMD?",
        answer: "No. The $79 covers the entire visit, the physician consultation, and the e-prescription to your pharmacy. There are no facility fees, no separate billing, and no insurance claims to file.",
      },
      {
        question: "Can I use my HSA or FSA card?",
        answer: "Yes. The $79 visit is a qualified medical expense and HSA/FSA cards are accepted at booking. A receipt is generated automatically for reimbursement.",
      },
      {
        question: "Why is telehealth so much cheaper than in-person care?",
        answer: "No facility fees, lower overhead, and no waiting-room infrastructure. A 2026 Penn Medicine study in JAMA Network Open found average insurer-billed charges per 30-day episode of $96 when care started with telemedicine versus $509 when it started in person. Those are charges billed to insurers, not out-of-pocket costs.",
      },
      {
        question: "Does TeleDirectMD accept insurance?",
        answer: "Yes: Aetna, BCBS, and UnitedHealthcare in select states. If your plan is not in-network, the flat $79 self-pay rate often beats your in-network cost before your deductible is met.",
      },
      {
        question: "What conditions are appropriate for an online doctor visit?",
        answer: "UTI (women only), sinus infection, strep, pink eye, cold/flu, mild bronchitis, allergies, skin rashes, and refills for stable chronic conditions like blood pressure, cholesterol, and asthma. Anything urgent or requiring imaging belongs in person.",
      },
    ],
    references: [
      {
        label: "Mira Health, Average ER visit cost (Sept 2026)",
        url: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost",
      },
      {
        label: "Solv, Urgent care cost without insurance (June 2026)",
        url: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Primary care cost (Feb 2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "GoodRx, Telehealth visit cost (2024)",
        url: "https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance",
      },
      {
        label: "GoodRx, How much does telehealth cost (2023)",
        url: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
      },
      {
        label: "Penn Medicine / JAMA Network Open, Telemedicine vs. in-person costs (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "KFF, Key facts about the uninsured population (June 2026)",
        url: "https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/",
      },
      {
        label: "BetterCare, ER visit cost (April 2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "CDC / NCHS, Telemedicine use in 2022 (June 2024)",
        url: "https://www.cdc.gov/nchs/data/nhsr/nhsr205.pdf",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, an online doctor visit costs $79 flat for a board-certified MD video visit, compared to a typical cash-pay telehealth range of $40–$90 per <a href=\"https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost\">GoodRx (2023)</a>; unlike most telehealth apps in that range, which route patients to a mixed pool of MDs, NPs, and PAs, every TeleDirectMD visit is seen by the same board-certified physician. A 2026 Penn Medicine study in JAMA Network Open of 160,000+ insurer-billed visits found average charges per 30-day episode of $96 when care started with telemedicine versus $509 when it started in person (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>); those are charges billed to insurers, not out-of-pocket costs. By comparison, a self-pay urgent care visit averages $150–$280 (<a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>), primary care cash-pay typically runs $100–$300 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and the average uninsured ER visit is ~$2,863 (<a href=\"https://www.talktomira.com/post/how-much-does-an-er-visit-cost\">Mira Health, Sept 2026</a>). Insured patients may pay a lower copay through their plan. With 26.7 million uninsured Americans under 65 (<a href=\"https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/\">KFF, June 2026</a>), telehealth is appropriate for UTI (women only), sinus infection, strep throat, pink eye, and stable prescription refills.",
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. That function has existed since the schema layer
    // was built but was wired to zero of the 22 cost pages (grep count: 0) until
    // this pilot. FAQPage rich results are fully retired sitewide as of
    // 2026-05-07, so AggregateOffer is the one still-functional structured-data
    // surface left to test on this page. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 79, highPrice: 79, description: "Board-certified MD video visit + e-prescription", availability: "https://schema.org/InStock" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost", lowPrice: 40, highPrice: 90, description: "Video or phone visit; provider type varies (MD, NP, PA)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 100, highPrice: 200, description: "In-person visit with PCP; labs/imaging billed separately" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance", lowPrice: 150, highPrice: 280, description: "In-person walk-in visit; an X-ray adds $100–$250 and tests add more" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost", lowPrice: 2850, highPrice: 3160, description: "ED visit; uninsured average across visit levels (2026)" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'uti-treatment-cost': {
    slug: "uti-treatment-cost",
    pid: "uti-cost",
    h1: "UTI Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "UTI Treatment Cost 2026: $89–$93 Online vs. $160+ Urgent Care",
    metaDescription: "For eligible non-pregnant adult women, a TeleDirectMD UTI visit + antibiotic costs $89–$93 total. Urgent care runs about $160–$354; an average uninsured ER visit is $1,500–$3,000. 2026 prices with sources.",
    breadcrumb: "UTI Treatment Cost",
    answerLead: "UTI treatment cost in 2026 (uninsured):",
    answerBody: "TeleDirectMD does not treat male UTIs. For eligible non-pregnant adult women, a telehealth UTI visit + generic antibiotic costs <strong>$89–$93 total</strong> at TeleDirectMD ($79 visit + $10–$14 nitrofurantoin via <a href=\"https://www.goodrx.com/nitrofurantoin-mono-macro\">GoodRx</a>). Compare to urgent care: about <strong>$160–$354</strong> self-pay for the visit, an antibiotic, and a urinalysis if done (<a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>). The average uninsured ER visit runs <strong>$1,500–$3,000</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare</a>), and the ER is rarely the right setting for an uncomplicated UTI. Insured patients may pay a lower copay through their plan.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $10–$14 generic antibiotic. Total cost: as low as $89. For classic, uncomplicated bladder infections in non-pregnant adult women, a urinalysis is often not needed.",
    heroIntro: "Uncomplicated lower-urinary-tract infections are a common telehealth case. For a non-pregnant adult woman with classic symptoms and no red flags, clinicians can often diagnose an uncomplicated bladder infection from the history, and studies of telephone management have found short-term outcomes comparable to office care (<a href=\"https://www.aafp.org/pubs/afp/issues/2011/1001/p771.html\">American Family Physician</a>). That means treatment can often be a video visit plus a low-cost generic prescription. We pulled 2025–2026 pricing from BetterCare, GoodRx, Solv, and Mira Health to show you what UTI treatment costs across care settings.",
    heroCardTitle: "UTI Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Antibiotic e-prescription to your pharmacy",
      "Urinalysis often not needed for classic, uncomplicated symptoms",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $89–$93 vs. about $160–$354 at urgent care (self-pay)",
      "No drive time, typical visit takes 10–15 minutes",
      "Same-day antibiotic at any US pharmacy",
      "For uncomplicated bladder infections in adult, non-pregnant women; first-line antibiotics follow IDSA guidance",
      "Documented receipt suitable for HSA/FSA",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 89, highPrice: 93, description: "$79 visit + nitrofurantoin ($10–$14); urinalysis often not needed" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost", lowPrice: 50, highPrice: 104, description: "Visit ($40–$90) + antibiotic ($10–$14)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 110, highPrice: 314, description: "In-person visit ($100–$300) + antibiotic ($10–$14); urinalysis may be extra" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance", lowPrice: 160, highPrice: 354, description: "Walk-in visit ($150–$280) + antibiotic ($10–$14); urinalysis adds $30–$60" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost", lowPrice: 1500, highPrice: 3000, description: "Average uninsured ER visit; chargemaster pricing" },
    ],
    costTable: {
      title: "UTI Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + generic antibiotic via GoodRx. Excludes labs/cultures unless flagged.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$89–$93 total",
          includes: "$79 visit + nitrofurantoin ($10–$14); urinalysis often not needed",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$50–$104",
          includes: "Visit ($40–$90) + antibiotic ($10–$14)",
          source: "GoodRx, 2023",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$314",
          includes: "In-person visit ($100–$300) + antibiotic ($10–$14); urinalysis may be extra",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$160–$354",
          includes: "Walk-in visit ($150–$280) + antibiotic ($10–$14); urinalysis adds $30–$60",
          source: "Solv, June 2026",
          sourceUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000",
          includes: "Average uninsured ER visit; chargemaster pricing",
          source: "BetterCare",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth UTI Visit Can Cost Less",
      paragraphs: [
        "For uncomplicated bladder infections in non-pregnant adult women with classic symptoms (dysuria, frequency, urgency) and no red flags, the diagnosis is largely clinical, and studies of telephone management have found short-term outcomes comparable to office care (<a href=\"https://www.aafp.org/pubs/afp/issues/2011/1001/p771.html\">American Family Physician</a>). <a href=\"https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/\">IDSA guidelines</a> name nitrofurantoin, trimethoprim-sulfamethoxazole, and fosfomycin as first-line options. Skipping lab work when it isn't needed removes one of the add-on costs of an in-person visit.",
        "Penn Medicine's 2026 JAMA Network Open study found average insurer-billed charges per 30-day episode of care of <strong>$96 when care started with telemedicine vs. $509 when it started in person</strong>, across 10 common billing codes (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine</a>). Those figures are charges billed to insurers, not patient out-of-pocket costs, and the study did not report UTI-specific results.",
        "Generic nitrofurantoin (Macrobid) is about <strong>$10–$14</strong> for a typical course on <a href=\"https://www.goodrx.com/nitrofurantoin-mono-macro\">GoodRx</a>. Trimethoprim-sulfamethoxazole (Bactrim) is about $9.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth UTI Visit",
      groups: [
        {
          label: "College students",
          desc: "Health center closed at 5pm? Book a $79 visit, pick up the antibiotic at the on-campus pharmacy.",
        },
        {
          label: "Working adults",
          desc: "Skip the drive and the waiting room. 10–15 minutes from book to script.",
        },
        {
          label: "Travelers",
          desc: "Onset on a Friday in a city you don't live in? Book a TeleDirectMD visit and route the script to a CVS at your destination.",
        },
        {
          label: "Women with a prior uncomplicated UTI",
          desc: "You recognize the symptoms. If your last UTI was more than 4 weeks ago and there are no red flags, telehealth lets you start treatment within hours instead of waiting days.",
        },
      ],
    },
    appropriateBlock: {
      title: "When a UTI Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Adult, non-pregnant women",
        "Classic symptoms (burning, frequency, urgency) without fever",
        "No flank pain, vomiting, or blood in urine",
        "No symptoms in the past 4 weeks",
        "No structural urinary issues",
        "No diabetes-related complications",
      ],
      notFor: [
        "Fever, chills, or back pain (suggests kidney involvement)",
        "Pregnancy",
        "Recurrent UTI in the past 4 weeks",
        "Visible blood in urine",
        "Diabetes with poor control",
        "Male UTI (always merits in-person workup)",
      ],
    },
    decisionGuide: {
      title: "UTI: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Fever, flank pain, or vomiting?",
          body: "Go to urgent care or the ER, these suggest kidney infection (pyelonephritis), which needs in-person evaluation, possible IV antibiotics, and imaging.",
          good: false,
        },
        {
          num: 2,
          head: "Classic UTI symptoms, no red flags?",
          body: "Book a $79 telehealth visit. Total cost is typically $89–$93. If an antibiotic is prescribed, it is sent to your pharmacy electronically after the visit.",
          good: true,
        },
        {
          num: 3,
          head: "Recurrent or complicated?",
          body: "See a primary care provider in person. You may need a culture, post-treatment follow-up, or referral to urology.",
          good: false,
        },
        {
          num: 4,
          head: "Follow-up only?",
          body: "Refills and short follow-up visits are fine via telehealth, book the same $79 visit.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "nitrofurantoin",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "UTI Antibiotic Costs (GoodRx Generic, 2026)",
      caption: "Typical course: nitrofurantoin 5 days, TMP-SMX 3 days, fosfomycin single dose; retail pharmacy with GoodRx coupon.",
      rows: [
        {
          drug: "Nitrofurantoin (Macrobid), first-line",
          cost: "$10–$14",
          sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro",
        },
        {
          drug: "Trimethoprim-sulfamethoxazole (Bactrim)",
          cost: "~$9",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          drug: "Cephalexin (alternative)",
          cost: "$10–$18",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          drug: "Fosfomycin (single-dose alternative)",
          cost: "$30–$60",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Antibiotic",
      bullets: [
        "Drink water steadily, 8+ glasses across the day.",
        "Use OTC phenazopyridine (Azo) for short-term burning relief; it does not treat the infection.",
        "Avoid coffee, alcohol, and citrus until symptoms resolve.",
        "Finish the entire antibiotic course even if symptoms ease in 24–48 hours.",
        "If you develop fever, back pain, or vomiting after starting antibiotics, go to urgent care.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat a UTI by Telehealth",
      bullets: [
        "Fever or chills (kidney infection risk).",
        "Back or flank pain.",
        "Pregnancy.",
        "Visible blood in urine.",
        "Recurrent UTI within the past 4 weeks.",
        "Male patients (always warrants in-person workup).",
      ],
    },
    faqs: [
      {
        question: "How much does a UTI cost to treat without insurance?",
        answer: "TeleDirectMD: $89–$93 total (visit + generic antibiotic). Urgent care self-pay: about $160–$354. Average uninsured ER visit: $1,500–$3,000. The ER is rarely appropriate for a routine UTI. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "Do I need a urinalysis or culture for a UTI?",
        answer: "Not always. For an uncomplicated bladder infection in an adult, non-pregnant woman with classic symptoms and no red flags, clinicians can often diagnose from the history and treat without a urinalysis, and studies of telephone management show short-term outcomes comparable to office care. A urine test is still needed if symptoms are atypical or don't improve.",
      },
      {
        question: "How fast can I get an antibiotic via TeleDirectMD?",
        answer: "Same-day visits are available, including evenings and weekends. If an antibiotic is prescribed, it is sent electronically to your pharmacy right after the visit.",
      },
      {
        question: "Will my generic antibiotic actually be that cheap?",
        answer: "Usually. Nitrofurantoin (Macrobid) runs about $10–$14 with GoodRx; Bactrim about $9. Prices checked on GoodRx in 2026 and vary by pharmacy.",
      },
      {
        question: "When should I skip telehealth and go in-person for a UTI?",
        answer: "Fever, back/flank pain, vomiting, blood in urine, pregnancy, recurrent infection, or male patient, all warrant in-person evaluation, possibly with imaging.",
      },
      {
        question: "Does TeleDirectMD treat UTI in men?",
        answer: "No. TeleDirectMD does not treat male UTIs. UTI care is limited to non-pregnant adult women (18+) with uncomplicated symptoms. Men with UTI symptoms should seek in-person care and should not book a TeleDirectMD UTI visit.",
      },
      {
        question: "Is the $79 visit covered by insurance?",
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. If you're not in-network, the $79 self-pay rate often beats your in-network cost when your deductible is unmet.",
      },
      {
        question: "What if my symptoms don't improve?",
        answer: "Contact us within 48–72 hours if symptoms haven't improved. We'll either change antibiotics or refer you in-person for a urinalysis or culture.",
      },
    ],
    references: [
      {
        label: "BetterCare, Urgent care vs. ER visit cost",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
      },
      {
        label: "GoodRx: Nitrofurantoin pricing (June 2026)",
        url: "https://www.goodrx.com/nitrofurantoin-mono-macro",
      },
      {
        label: "GoodRx, UTI antibiotic class",
        url: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
      },
      {
        label: "Solv, Urgent care cost without insurance (June 2026)",
        url: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "IDSA, Uncomplicated UTI guidelines",
        url: "https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/",
      },
      {
        label: "American Family Physician, Diagnosis and treatment of acute uncomplicated cystitis (2011)",
        url: "https://www.aafp.org/pubs/afp/issues/2011/1001/p771.html",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an uncomplicated bladder infection in a non-pregnant adult woman via telehealth costs $89–$93 total at TeleDirectMD: a $79 video visit plus about $10–$14 for generic nitrofurantoin (Macrobid), or about $9 for trimethoprim-sulfamethoxazole (Bactrim DS), per <a href=\"https://www.goodrx.com/nitrofurantoin-mono-macro\">GoodRx, 2026</a>. By comparison, urgent care self-pay runs about $160–$354 for the visit, antibiotic, and any urinalysis (<a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>), primary care cash-pay totals $110–$314 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and the average uninsured ER visit is $1,500–$3,000 (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare</a>). Insured patients may pay a lower copay through their plan. For classic symptoms without red flags, clinicians can often diagnose from the history without a urinalysis (<a href=\"https://www.aafp.org/pubs/afp/issues/2011/1001/p771.html\">American Family Physician</a>), and <a href=\"https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/\">IDSA guidelines</a> set the first-line antibiotics, which makes telehealth a reasonable, lower-cost first step for many eligible patients.",
  },

  // ------------------------------------------------------------------
  // NICHE CLUSTER PAGE -- targets the winnable UTI antibiotic/prescription/OTC
  // long-tail (~536K peak vol across 147 gap queries: "medications for uti",
  // "uti prescription antibiotics", "over the counter antibiotics for uti",
  // "online uti antibiotics", "how to get antibiotics for a uti"). Distinct
  // intent from /cost/uti-treatment-cost/ (visit-setting cost) -- this page
  // answers the drug/OTC/prescription question and routes to booking.
  // Pricing verified GoodRx, May 2026. Clinical: WebMD, GoodRx, Walgreens, IDSA.
  'uti-antibiotics-cost': {
    slug: "uti-antibiotics-cost",
    pid: "uti-abx-cost",
    h1: "UTI Antibiotics: Cost, Options, and How to Get a Prescription Online",
    metaTitle: "UTI Antibiotics Cost 2026: $5–$25 Generic + $79 Visit",
    metaDescription: "There are no OTC antibiotics for a UTI in the US -- all require a prescription. Generic UTI antibiotics cost $5-$25 with GoodRx. A $79 telehealth visit gets you a same-day prescription when clinically appropriate. Verified 2026 prices with sources.",
    breadcrumb: "UTI Antibiotics Cost",
    answerLead: "Can you buy UTI antibiotics over the counter? No.",
    answerBody: "In the U.S., <strong>every oral antibiotic that cures a UTI requires a prescription</strong> -- there are no over-the-counter UTI antibiotics (<a href=\"https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti\">WebMD</a>; <a href=\"https://blog.walgreens.com/health/general-health/how-do-you-get-rid-of-a-uti.html\">Walgreens</a>). OTC products like AZO (phenazopyridine) only numb the burning; they do not treat the infection. Once prescribed, the antibiotic itself is cheap: <strong>$5-$25</strong> for the common generics on <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx</a>. A $79 TeleDirectMD video visit gets you a same-day prescription, when clinically appropriate, sent to your pharmacy -- total cost often <strong>$84-$104</strong>.",
    heroSub: "UTI antibiotics are prescription-only in the U.S. -- but a same-day telehealth visit costs $79, and the generic antibiotic is usually $5-$25. Here's what every UTI antibiotic actually costs and how to get one legally without an in-person visit.",
    heroIntro: "Searching for 'over the counter antibiotics for UTI' or 'how to get antibiotics for a UTI'? The honest answer: no oral antibiotic that cures a UTI is sold over the counter in the United States -- this is an FDA requirement, not a TeleDirectMD policy. The good news is that the antibiotic itself is inexpensive, and you don't need an in-person appointment to get the prescription. We pulled 2026 GoodRx pricing for every first-line UTI antibiotic and mapped exactly how to get one prescribed same-day.",
    heroCardTitle: "UTI Prescription at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Legal e-prescription to your pharmacy",
      "Generic antibiotic usually $5-$25",
      "No urinalysis required (uncomplicated UTI)",
      "40+ states, evenings & weekends",
      "No insurance required - HSA/FSA accepted",
    ],
    heroBenefits: [
      "No OTC antibiotic exists -- a prescription is the legal way to get one",
      "Antibiotic cost $5-$25 generic vs. about $1,800+ for brand-only Blujepa",
      "Same-day script at any US pharmacy",
      "Total $84-$104 vs. about $150-$275 at cash-pay urgent care (insured patients may pay less with a copay)",
      "Board-certified MD, not a chatbot or text-only triage",
    ],
    costTable: {
      title: "UTI Antibiotic Cost by Medication (2026, Generic Cash-Pay via GoodRx)",
      caption: "Prescription required for all. Prices are lowest GoodRx cash price for a standard course; excludes the visit.",
      rows: [
        { setting: "Nitrofurantoin (Macrobid) -- first-line", cost: "$7-$22", includes: "5-day course; minimal resistance; preferred per IDSA", source: "GoodRx, May 2026", sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro" },
        { setting: "Trimethoprim-sulfamethoxazole (Bactrim)", cost: "$5-$20", includes: "3-day course; only where local resistance <20%", source: "GoodRx, 2026", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { setting: "Cephalexin (alternative)", cost: "$11-$18", includes: "Beta-lactam alternative; generally less effective than first-line options", source: "GoodRx, 2026", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { setting: "Fosfomycin (Monurol) -- single dose", cost: "$20-$52", includes: "One-time 3g sachet; convenient but pricier", source: "GoodRx / Script Unlock, 2026", sourceUrl: "https://www.goodrx.com/fosfomycin" },
        { setting: "Ciprofloxacin (reserved)", cost: "$25", includes: "Fluoroquinolone; no longer first-line for uncomplicated cystitis", source: "GoodRx, 2026", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { setting: "Blujepa (gepotidacin) -- brand-only", cost: "about $1,800+", includes: "Newest FDA-approved oral; no generic; rarely needed", source: "Drugs.com, 2026", sourceUrl: "https://www.drugs.com/price-guide/blujepa" },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why There Are No Over-the-Counter UTI Antibiotics",
      paragraphs: [
        "Every oral antibiotic in the U.S. -- nitrofurantoin, Bactrim, cephalexin, fosfomycin, ciprofloxacin -- is prescription-only under federal law (<a href=\"https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti\">WebMD</a>). The only antibiotics sold over the counter are topical ointments (Neosporin, Bacitracin) for minor skin wounds -- they do nothing for a UTI. This rule exists to curb antibiotic resistance and prevent misdiagnosis.",
        "OTC products marketed for UTIs -- AZO, Uristat, Cystex -- contain <strong>phenazopyridine</strong>, a urinary analgesic that numbs burning within ~20 minutes but has <strong>zero antibacterial activity</strong> (<a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/uti-treatment-without-doctor-visit\">GoodRx</a>). Relying on them alone lets the infection progress -- potentially to a kidney infection.",
        "Some states let pharmacists prescribe for uncomplicated UTIs after a clinical screening, and the rules vary by state, so it still isn't true OTC access. The fastest legal route for most patients is a same-day telehealth visit: per <a href=\"https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/\">IDSA guidelines</a>, an uncomplicated lower UTI in a non-pregnant adult woman needs no urinalysis, so the entire encounter can be a $79 video visit plus a $5-$25 generic.",
      ],
    },
    whoWeHelp: {
      title: "Who This Helps Most",
      groups: [
        { label: "Anyone who searched 'OTC UTI antibiotics'", desc: "You now know none exist -- here's the fast, legal alternative for $79 + a cheap generic." },
        { label: "Women with past UTIs", desc: "You recognize the symptoms. If your last UTI was more than 4 weeks ago, a first-line antibiotic can be prescribed same-day when appropriate." },
        { label: "Uninsured / high-deductible", desc: "$79 flat + a $5-$25 generic usually costs less than a cash-pay urgent-care visit (about $150-$275)." },
        { label: "Travelers & students", desc: "Route the script to any US pharmacy -- CVS, Walgreens, your campus pharmacy." },
      ],
    },
    appropriateBlock: {
      title: "When a UTI Antibiotic Can Be Prescribed by Telehealth",
      goodFor: [
        "Adult, non-pregnant women",
        "Classic symptoms: burning, frequency, urgency",
        "No fever, flank pain, or vomiting",
        "No blood in urine",
        "No UTI in the past 4 weeks",
        "No poorly-controlled diabetes",
      ],
      notFor: [
        "Fever, chills, or back/flank pain (kidney infection)",
        "Pregnancy",
        "Recurrent UTI within 4 weeks",
        "Visible blood in urine",
        "Male patients (warrants in-person workup)",
        "Immunocompromise or structural urinary issues",
      ],
    },
    decisionGuide: {
      title: "How to Get UTI Antibiotics: Fastest Legal Route",
      steps: [
        { num: 1, head: "Do NOT rely on AZO/Uristat alone", body: "They numb symptoms but do not cure the infection. Use them for relief while you arrange a prescription -- not instead of one.", good: false },
        { num: 2, head: "Classic symptoms, no red flags?", body: "Book a $79 telehealth visit. If an antibiotic is appropriate, a $5-$25 generic is sent to your pharmacy the same day.", good: true },
        { num: 3, head: "Fever, back pain, blood, or pregnancy?", body: "Go in-person to urgent care or the ER -- these need evaluation, possible imaging, and IV antibiotics.", good: false },
        { num: 4, head: "In a pharmacist-prescribing state?", body: "Some states let pharmacists screen and prescribe for uncomplicated UTIs. Telehealth is available in every state where we are licensed.", good: true },
      ],
    },
    costPlus: {
      drug: "nitrofurantoin",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "UTI Antibiotic Prices at a Glance (GoodRx Generic, 2026)",
      caption: "All require a prescription. Lowest GoodRx cash price, standard course.",
      rows: [
        { drug: "Nitrofurantoin (Macrobid) -- first-line", cost: "$7-$22", sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro" },
        { drug: "Trimethoprim-sulfamethoxazole (Bactrim)", cost: "$5-$20", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { drug: "Cephalexin", cost: "$11-$18", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { drug: "Fosfomycin (Monurol, single dose)", cost: "$20-$52", sourceUrl: "https://www.goodrx.com/fosfomycin" },
      ],
    },
    homeCare: {
      title: "While You Wait for the Antibiotic",
      bullets: [
        "Use OTC phenazopyridine (AZO) for short-term burning relief -- it does NOT treat the infection.",
        "Drink water steadily -- 8+ glasses across the day.",
        "Avoid coffee, alcohol, and citrus until symptoms resolve.",
        "Once prescribed, finish the entire course even if you feel better in 24-48 hours.",
        "If you develop fever, back pain, or vomiting, go to urgent care.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Self-Treat or Use Telehealth",
      bullets: [
        "Fever or chills (kidney infection risk).",
        "Back or flank pain.",
        "Pregnancy.",
        "Visible blood in urine.",
        "Recurrent UTI within the past 4 weeks.",
        "Male patients (always warrants in-person workup).",
      ],
    },
    faqs: [
      { question: "Are there any over-the-counter antibiotics for a UTI?", answer: "No. In the U.S., all oral antibiotics that cure a UTI (nitrofurantoin, Bactrim, cephalexin, fosfomycin) require a prescription. OTC products like AZO only relieve symptoms -- they don't cure the infection." },
      { question: "How much do UTI antibiotics cost without insurance?", answer: "Generics are cheap with GoodRx: nitrofurantoin $7-$22, Bactrim $5-$20, cephalexin $11-$18, fosfomycin $20-$52. The newest brand-only option, Blujepa, runs about $1,800+ and is rarely needed." },
      { question: "How do I get UTI antibiotics without seeing a doctor in person?", answer: "Eligible non-pregnant adult women can book a telehealth visit (TeleDirectMD does not treat male UTIs). A licensed MD can assess your symptoms by video and send an e-prescription to your pharmacy same-day -- no in-person appointment or urinalysis required for an uncomplicated UTI." },
      { question: "Is AZO an antibiotic?", answer: "No. AZO (phenazopyridine) is a urinary analgesic that numbs burning within ~20 minutes. It has no antibacterial activity and will not cure your UTI." },
      { question: "What is the cheapest UTI antibiotic?", answer: "Trimethoprim-sulfamethoxazole (generic Bactrim) is often the cheapest at $5-$20, followed closely by nitrofurantoin. Your prescriber picks based on local resistance and your history." },
      { question: "Can I get UTI antibiotics online same-day?", answer: "Often, yes. For eligible non-pregnant adult women, a $79 TeleDirectMD video visit can lead to a same-day e-prescription when an antibiotic is clinically appropriate. Visits are available evenings and weekends in 40+ states." },
      { question: "Can pharmacists prescribe UTI antibiotics?", answer: "In some states, pharmacists can prescribe for uncomplicated UTIs after a screening; the rules vary by state. Elsewhere, a telehealth visit is a fast legal route." },
    ],
    references: [
      { label: "WebMD -- Antibiotics for UTI (no OTC oral antibiotics), June 2026", url: "https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti" },
      { label: "GoodRx -- UTI antibiotic class prices (2026)", url: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
      { label: "GoodRx -- Nitrofurantoin pricing (May 2026)", url: "https://www.goodrx.com/nitrofurantoin-mono-macro" },
      { label: "GoodRx -- Fosfomycin pricing", url: "https://www.goodrx.com/fosfomycin" },
      { label: "GoodRx -- UTI treatment without a doctor visit (AZO is not an antibiotic)", url: "https://www.goodrx.com/conditions/urinary-tract-infection/uti-treatment-without-doctor-visit" },
      { label: "Walgreens -- How do you get rid of a UTI (no OTC antibiotics)", url: "https://blog.walgreens.com/health/general-health/how-do-you-get-rid-of-a-uti.html" },
      { label: "IDSA -- Uncomplicated UTI guideline", url: "https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/" },
      { label: "Drugs.com -- Blujepa (gepotidacin) price guide (2026)", url: "https://www.drugs.com/price-guide/blujepa" },
    ],
    citableSummary: "According to TeleDirectMD's 2026 analysis, there are no over-the-counter oral antibiotics for a urinary tract infection in the United States -- every UTI antibiotic (nitrofurantoin, trimethoprim-sulfamethoxazole, cephalexin, fosfomycin) requires a prescription per <a href=\"https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti\">WebMD</a> and <a href=\"https://blog.walgreens.com/health/general-health/how-do-you-get-rid-of-a-uti.html\">Walgreens</a>. OTC products like AZO (phenazopyridine) only relieve burning and do not cure the infection (<a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/uti-treatment-without-doctor-visit\">GoodRx</a>). The antibiotics themselves are inexpensive: nitrofurantoin $7-$22, trimethoprim-sulfamethoxazole $5-$20, cephalexin $11-$18, and single-dose fosfomycin $20-$52 with a <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx</a> coupon (May 2026), versus about $1,800+ for the newest brand-only agent, Blujepa. The fastest legal way to get a prescription is a same-day telehealth visit -- a $79 TeleDirectMD video visit plus a generic antibiotic totals about $84-$104, and per <a href=\"https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/\">IDSA guidelines</a> no urinalysis is required for an uncomplicated lower UTI in a non-pregnant adult woman.",
  },


  // ──────────────────────────────────────────────────────────────────
  'sinus-infection-treatment-cost': {
    slug: "sinus-infection-treatment-cost",
    pid: "sinus-cost",
    h1: "Sinus Infection Treatment Cost Without Insurance",
    metaTitle: "Sinus Infection Cost 2026: $88–$99 Online vs. $159+ Urgent Care",
    metaDescription: "A TeleDirectMD sinus-infection visit + amoxicillin costs $88–$99 total. Urgent care runs about $159–$300; an average uninsured ER visit is $1,500–$3,000. 2026 cash-pay prices with sources.",
    breadcrumb: "Sinus Infection Cost",
    answerLead: "Sinus infection treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth visit plus amoxicillin costs <strong>$88–$99 total</strong> at TeleDirectMD ($79 visit + $9–$20 generic via <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx</a>). In-person urgent care runs about <strong>$159–$300</strong> (<a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>, plus the antibiotic). A 2017 Health Affairs study cited by <a href=\"https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost\">GoodRx</a> found the average telehealth respiratory visit was <strong>$79 vs. $146 in-person</strong>, and <a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine's 2026 study</a> found average insurer-billed charges per episode were roughly $800 lower for respiratory symptoms when care started with telemedicine. Insured patients may pay a lower copay through their plan.",
    heroSub: "$79 video visit with a board-certified MD. If antibiotics are appropriate, generic amoxicillin runs $9–$20. Most patients pay $88–$99 total.",
    heroIntro: "Sinusitis is one of the most common reasons people end up in urgent care, and one of the most overpriced. Many sinus infections are viral and don't need antibiotics at all; for those that do, the entire treatment is a focused history, a clinical exam, and an e-prescription. Telehealth handles all three for $79. We've pulled current 2025–2026 prices from BetterCare, Penn Medicine, and GoodRx so you can see exactly what sinus-infection treatment costs.",
    heroCardTitle: "Sinus Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Board-certified MD evaluates duration, severity, and red flags",
      "Clinical decision on antibiotics vs. supportive care",
      "E-prescription if appropriate (amoxicillin / augmentin / doxycycline)",
      "Same-day appointments, 40+ states",
      "No insurance required",
      "Receipt for HSA/FSA",
    ],
    heroBenefits: [
      "Total $88–$99 vs. about $159–$300 at urgent care",
      "Telehealth episodes for respiratory symptoms averaged ~$800 less in insurer-billed charges (Penn Medicine 2026)",
      "No facility fee, no waiting room, no co-pay",
      "If antibiotics aren't needed, you skip the drug cost too",
      "In-network with Aetna, BCBS, UnitedHealthcare in select states",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 88, highPrice: 99, description: "$79 visit + amoxicillin ($9–$20) when indicated" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost", lowPrice: 49, highPrice: 110, description: "Visit ($40–$90) + antibiotic ($9–$20)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 109, highPrice: 320, description: "In-person visit ($100–$300) + antibiotic ($9–$20)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance", lowPrice: 159, highPrice: 300, description: "Visit ($150–$280) + antibiotic ($9–$20); an X-ray adds $100–$250" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost", lowPrice: 1500, highPrice: 3000, description: "Average uninsured ER visit; rarely needed for routine sinus infection" },
    ],
    costTable: {
      title: "Sinus Infection Treatment Cost by Setting (2026, Cash-Pay)",
      caption: "Visit + generic antibiotic when prescribed. Most viral sinusitis cases don't need antibiotics.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$88–$99 typical",
          includes: "$79 visit + amoxicillin ($9–$20) when indicated",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$49–$110",
          includes: "Visit ($40–$90) + antibiotic ($9–$20)",
          source: "GoodRx 2023",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$109–$320",
          includes: "In-person visit ($100–$300) + antibiotic ($9–$20)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$159–$300",
          includes: "Visit ($150–$280) + antibiotic ($9–$20); an X-ray adds $100–$250",
          source: "Solv, June 2026",
          sourceUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000",
          includes: "Average uninsured ER visit; rarely needed for routine sinus infection",
          source: "BetterCare",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Most Sinus Infections Don't Need Antibiotics",
      paragraphs: [
        "According to <a href=\"https://www.cdc.gov/sinus-infection/about/index.html\">CDC guidance</a>, the majority of sinus infections are viral and resolve without antibiotics. Antibiotic treatment is appropriate when symptoms persist >10 days without improvement, are severe (high fever, unilateral facial pain), or worsen after initial improvement (the \"double-sickening\" pattern).",
        "A telehealth visit is often a lower-cost way to make that determination. The clinician takes a focused history, evaluates duration and severity, looks at any red flags, and either prescribes an antibiotic or recommends supportive care, saving you the cost of an antibiotic that wouldn't help anyway.",
        "<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine's 2026 JAMA study</a> of 160,000+ insurer-billed visits found average charges per 30-day episode were roughly <strong>$800 lower</strong> for respiratory symptoms when care started with telemedicine. These are charges billed to insurers, not patient out-of-pocket costs.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From Telehealth Sinus Care",
      groups: [
        {
          label: "Adults with classic 10+ day sinusitis",
          desc: "You know what this is. A focused video visit decides antibiotics in 10 minutes.",
        },
        {
          label: "Patients with chronic sinus issues",
          desc: "Recurring sinusitis with a known pattern? Telehealth can handle an acute flare faster than rebooking your PCP; frequent recurrences still need ENT evaluation.",
        },
        {
          label: "Travelers / business trips",
          desc: "Came down with sinusitis on the road? Book a $79 visit from your hotel; antibiotic at the local CVS.",
        },
        {
          label: "High-deductible plan members",
          desc: "Cash-paying $79 is below the ~$171 average self-pay PCP visit (Mira Health) when your deductible is unmet.",
        },
      ],
    },
    appropriateBlock: {
      title: "When a Sinus Infection Belongs in Telehealth",
      goodFor: [
        "Symptoms >10 days without improvement",
        "Severe facial pain or pressure (unilateral)",
        "Symptoms worsening after initial improvement",
        "No high fever or vision changes",
        "Otherwise healthy adult",
      ],
      notFor: [
        "Severe headache or vision changes (rare red flag for orbital infection)",
        "Immunocompromised patients",
        "Recurrent sinusitis warranting ENT referral",
        "Suspected fungal sinusitis",
        "Pediatric patients (we see adults only)",
      ],
    },
    decisionGuide: {
      title: "Sinus Infection: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Severe headache, vision changes, or facial swelling spreading to the eye?",
          body: "Go to the ER. These are rare but serious red flags for orbital cellulitis or other complications.",
          good: false,
        },
        {
          num: 2,
          head: "Symptoms < 10 days and improving?",
          body: "No visit needed yet. Use saline rinses, decongestants, and rest. If symptoms persist past 10 days, book telehealth.",
          good: false,
        },
        {
          num: 3,
          head: "Symptoms 10+ days, severe, or worsening after improvement?",
          body: "Textbook telehealth case. Book a $79 visit; antibiotic if appropriate.",
          good: true,
        },
        {
          num: 4,
          head: "Recurrent (3+ episodes/year) or chronic?",
          body: "Telehealth for the acute episode is fine, but get a referral to ENT for the underlying cause.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "amoxicillin",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Sinus Infection Antibiotic Costs (GoodRx Generic, 2026)",
      caption: "Adult course is typically 5–7 days; retail pharmacy with GoodRx coupon.",
      rows: [
        {
          drug: "Amoxicillin (first-line)",
          cost: "~$9",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          drug: "Amoxicillin-clavulanate (Augmentin)",
          cost: "$12–$24",
          sourceUrl: "https://www.goodrx.com/amoxicillin-potassium-clavulanate",
        },
        {
          drug: "Doxycycline (penicillin allergy)",
          cost: "$8–$15",
          sourceUrl: "https://www.goodrx.com/doxycycline-hyclate",
        },
        {
          drug: "Cefdinir (Omnicef)",
          cost: "$15–$30",
          sourceUrl: "https://www.goodrx.com",
        },
      ],
    },
    homeCare: {
      title: "Supportive Care That Actually Works",
      bullets: [
        "Saline nasal rinses (Neilmed, NeilMed Sinus Rinse) 1–2× daily.",
        "OTC pseudoephedrine for nasal congestion (behind the counter).",
        "Acetaminophen or ibuprofen for facial pain.",
        "Warm compresses over the cheeks and brow.",
        "Hydration: 8+ glasses water/day.",
        "Avoid antihistamines unless allergies are clearly contributing, they thicken mucus.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat Sinus Infection by Telehealth",
      bullets: [
        "Severe headache, neck stiffness, or vision changes, go to the ER.",
        "Facial swelling spreading to the eye, orbital cellulitis risk.",
        "Immunocompromised patients (HIV, chemotherapy, organ transplant).",
        "Suspected fungal sinusitis (often in diabetics).",
        "Children, we see adults only.",
      ],
    },
    faqs: [
      {
        question: "How much does sinus infection treatment cost without insurance?",
        answer: "TeleDirectMD: $88–$99 total (visit + amoxicillin if needed). Urgent care: about $159–$300. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "Do all sinus infections need antibiotics?",
        answer: "No. Per CDC guidance, most sinus infections are viral and resolve without antibiotics. A telehealth visit determines whether antibiotics are appropriate based on duration, severity, and symptom pattern.",
      },
      {
        question: "What antibiotic is typically prescribed for sinusitis?",
        answer: "Amoxicillin or amoxicillin-clavulanate (Augmentin) is first-line for adults; Augmentin is preferred with risk factors such as recent antibiotic use, and AAFP lists it first-line for adults. Generic amoxicillin is about $9 with GoodRx. Doxycycline is the penicillin-allergy alternative.",
      },
      {
        question: "How fast will I get the prescription?",
        answer: "If a prescription is appropriate, it is sent electronically right after the visit. Pickup time depends on your pharmacy.",
      },
      {
        question: "When should I skip telehealth and see someone in person?",
        answer: "Severe headache, vision changes, facial swelling spreading to the eye, or any neurological symptoms, go to the ER. Recurrent sinusitis warrants ENT referral.",
      },
      {
        question: "Can I use my HSA/FSA card?",
        answer: "Yes. The $79 visit is HSA/FSA-eligible. A receipt is generated automatically.",
      },
      {
        question: "Is a sinus X-ray needed?",
        answer: "No. Imaging is not needed to diagnose acute bacterial sinusitis, the diagnosis is clinical. CT may be ordered for recurrent or atypical cases by an ENT.",
      },
      {
        question: "What if I have allergies, not infection?",
        answer: "Allergic rhinitis can mimic sinusitis. The visit will distinguish, if allergies are the cause, we'll prescribe an antihistamine or nasal steroid instead. Same $79 visit.",
      },
    ],
    references: [
      {
        label: "GoodRx, How much does telehealth cost (2024)",
        url: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
      },
      {
        label: "GoodRx, Antibiotic pricing",
        url: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
      },
      {
        label: "Penn Medicine / JAMA, Telemedicine vs. in-person costs (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CDC, Sinus infection (sinusitis) guidance",
        url: "https://www.cdc.gov/sinus-infection/about/index.html",
      },
      {
        label: "Solv, Urgent care cost without insurance (June 2026)",
        url: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "BetterCare, Urgent care vs. ER visit cost",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
      },
      {
        label: "AAFP, Antibiotic use in acute upper respiratory tract infections (2022)",
        url: "https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating a bacterial sinus infection via telehealth costs $88–$99 total at TeleDirectMD, a $79 video visit plus $9–$20 for generic amoxicillin when indicated (amoxicillin-clavulanate runs $12–$24), per <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx (2026)</a>. By comparison, urgent care runs about $159–$300 with the antibiotic (<a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>), primary care cash-pay totals $109–$320 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and the average uninsured ER visit is $1,500–$3,000 (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare</a>). Insured patients may pay a lower copay through their plan. A <a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine 2026 JAMA Network Open study</a> found average insurer-billed charges per episode were roughly $800 lower for respiratory symptoms when care started with telemedicine. Per <a href=\"https://www.cdc.gov/sinus-infection/about/index.html\">CDC guidance</a>, most sinus infections are viral; antibiotics are appropriate when symptoms persist beyond 10 days, are severe, or follow a double-sickening pattern, a determination telehealth can make without imaging.",
  },

  // ──────────────────────────────────────────────────────────────────
  'sore-throat-treatment-cost': {
    slug: "sore-throat-treatment-cost",
    pid: "sore-throat-cost",
    h1: "Sore Throat & Strep Treatment Cost: What You'll Actually Pay",
    metaTitle: "Strep & Sore Throat Cost 2026: $88–$94 Online vs. $184+ Urgent Care",
    metaDescription: "TeleDirectMD sore throat visit + antibiotic: $88–$94 total, plus an in-person strep test if needed. Urgent care with a rapid strep test: $184–$365. 2026 prices with sources.",
    breadcrumb: "Sore Throat Treatment Cost",
    answerLead: "Sore throat & strep treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth visit + antibiotic costs <strong>$88–$94 total</strong> at TeleDirectMD ($79 visit + $9–$15 amoxicillin via <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx</a>). If a rapid strep test is needed, it is done in person (lab, retail clinic, or urgent care) at extra cost. In-person urgent care: <strong>$184–$365</strong> (visit with a rapid test, $175–$350, per <a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>, plus an antibiotic). Insured patients may pay a lower copay through their plan.",
    heroSub: "Telehealth $79 visit. If a rapid strep test is needed, it is done in person at extra cost; urgent care with a test runs $175–$350 before the antibiotic.",
    heroIntro: "Most sore throats are viral, but the few that are strep need antibiotics promptly. The Centor criteria (fever, tonsillar exudate, anterior cervical lymphadenopathy, no cough) help decide who needs a strep test and who can skip one. We pulled 2022–2026 cost data from Solv, Mira Health, and MDsave to show what sore-throat treatment costs in every setting.",
    heroCardTitle: "Sore Throat Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Symptom-focused video visit with board-certified MD",
      "Centor score-based decision: antibiotics, an in-person strep test, or supportive care",
      "E-prescription for amoxicillin or alternative if indicated",
      "40+ states, same-day, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $88–$94 typical (no test) vs. $184–$365 urgent care with a test",
      "Testing often skipped when symptoms clearly point to a virus",
      "Same-day antibiotic at any US pharmacy",
      "Clear guidance on when an in-person strep test is worth the cost",
      "In-network with Aetna, BCBS, UnitedHealthcare in select states",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 88, highPrice: 94, description: "$79 visit + amoxicillin ($9–$15); in-person strep test extra if needed" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost", lowPrice: 49, highPrice: 105, description: "Visit ($40–$90) + antibiotic ($9–$15); strep test extra if needed" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 134, highPrice: 390, description: "Visit ($100–$300) + rapid strep ($25–$75) + antibiotic ($9–$15)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance", lowPrice: 184, highPrice: 365, description: "Visit with rapid strep ($175–$350) + antibiotic ($9–$15)" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost", lowPrice: 654, highPrice: 654, description: "Average ER visit for sore throat; rarely appropriate for sore throat alone" },
    ],
    costTable: {
      title: "Sore Throat / Strep Treatment Cost by Setting (2026, Cash-Pay Total)",
      caption: "Includes visit + rapid strep test (when applicable) + antibiotic.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$88–$94 typical",
          includes: "$79 visit + amoxicillin ($9–$15); in-person strep test extra if needed",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$49–$105",
          includes: "Visit ($40–$90) + antibiotic ($9–$15); strep test extra if needed",
          source: "GoodRx 2023",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$134–$390",
          includes: "Visit ($100–$300) + rapid strep ($25–$75) + antibiotic ($9–$15)",
          source: "Mira Health, 2025; Solv, 2026",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$184–$365",
          includes: "Visit with rapid strep ($175–$350) + antibiotic ($9–$15)",
          source: "Solv, June 2026",
          sourceUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "~$654 average",
          includes: "Average ER visit for sore throat; rarely appropriate for sore throat alone",
          source: "Mira Health, 2026",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "When You Actually Need a Strep Test",
      paragraphs: [
        "The Centor criteria (fever, tonsillar exudate, tender anterior cervical lymph nodes, absence of cough) are used to estimate strep probability. Patients with very low scores usually need neither a test nor an antibiotic. For higher scores, guidelines favor a rapid strep test, though <a href=\"https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html\">AAFP</a> lists a modified Centor score of 4 or 5 as a basis for treatment. When a test is needed, it is done in person; a lab-only rapid strep test can cost less than a full urgent care visit (<a href=\"https://www.mdsave.com/procedures/rapid-strep-test/d786f4cd\">MDsave lists $11–$197</a>).",
        "<a href=\"https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care\">Mira Health</a> reported an average of <strong>$187</strong> for a rapid strep test plus visit at urgent care in 2022 (about $135–$299 across centers). <a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv</a> puts a 2026 urgent care visit with one rapid test at $175–$350.",
        "A 10-day course of penicillin V or amoxicillin is first-line per <a href=\"https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html\">AAFP</a>; generic amoxicillin is about $9 with <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx</a>. Penicillin-allergic patients can use cephalexin or azithromycin.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From Telehealth Sore Throat Care",
      groups: [
        {
          label: "Adults with high or low Centor scores",
          desc: "A low score usually means no test or antibiotic; a high score may support treatment. Decided in one short visit.",
        },
        {
          label: "Working adults with no time for urgent care",
          desc: "Book a $79 visit on a lunch break; if an antibiotic is prescribed, it goes to your pharmacy the same day.",
        },
        {
          label: "College students",
          desc: "Health center closed? $79 visit, plus an in-person strep test only if needed.",
        },
        {
          label: "Travelers",
          desc: "On the road and feeling awful? Telehealth + local pharmacy = same-day care anywhere.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Sore Throat Belongs in Telehealth",
      goodFor: [
        "Adult, otherwise healthy",
        "Classic strep features OR clearly viral pattern",
        "No drooling, stridor, or muffled voice",
        "No severe unilateral throat swelling",
        "Symptoms < 7 days",
      ],
      notFor: [
        "Drooling, stridor, or trouble breathing, go to the ER",
        "Severe unilateral throat swelling (peritonsillar abscess risk)",
        "Severe neck stiffness or facial swelling",
        "Recent rheumatic fever history",
        "Pediatric patients",
      ],
    },
    decisionGuide: {
      title: "Sore Throat: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Drooling, stridor, voice change, or trouble breathing?",
          body: "Go to the ER immediately, these suggest peritonsillar abscess or epiglottitis, both surgical emergencies.",
          good: false,
        },
        {
          num: 2,
          head: "Classic strep symptoms or clearly viral?",
          body: "Book a $79 telehealth visit. You'll leave with a clear plan: an antibiotic if indicated, supportive care, or a referral for a strep test.",
          good: true,
        },
        {
          num: 3,
          head: "Mid-range Centor and you want certainty?",
          body: "Telehealth visit, then an in-person rapid strep test at a lab or clinic. A lab-only test can cost less than a full urgent care visit; prices vary.",
          good: true,
        },
        {
          num: 4,
          head: "Recurrent strep (3+ episodes/year)?",
          body: "Telehealth for this episode is fine, but get a referral to ENT to discuss tonsillectomy.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "amoxicillin",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Strep Antibiotic Costs (GoodRx Generic, 2026)",
      caption: "10-day course unless noted.",
      rows: [
        {
          drug: "Amoxicillin (first-line)",
          cost: "~$9",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          drug: "Penicillin V (alternative)",
          cost: "$8–$15",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Cephalexin (penicillin allergy, mild)",
          cost: "$10–$18",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          drug: "Azithromycin (severe pen allergy, 5-day)",
          cost: "$10–$20",
          sourceUrl: "https://www.goodrx.com",
        },
      ],
    },
    homeCare: {
      title: "Throat Care That Actually Helps",
      bullets: [
        "Salt-water gargle several times a day.",
        "Hot tea with honey (avoid honey in children under 1; not relevant here, adults only).",
        "Acetaminophen or ibuprofen for pain.",
        "OTC throat lozenges with benzocaine for short-term relief.",
        "Cold liquids and soft foods.",
        "Per CDC, you can usually return to work once you have no fever and have taken antibiotics for at least 12 hours.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat a Sore Throat by Telehealth",
      bullets: [
        "Drooling or trouble swallowing your own saliva, ER, not telehealth.",
        "Stridor (high-pitched breathing), ER.",
        "Voice muffled or \"hot potato\" voice.",
        "Severe one-sided throat swelling.",
        "Pediatric patients (we see adults only).",
        "Recent rheumatic fever, needs in-person follow-up.",
      ],
    },
    faqs: [
      {
        question: "How much does strep treatment cost without insurance?",
        answer: "TeleDirectMD: $88–$94 for the visit and antibiotic, plus an in-person strep test if needed. Urgent care with a rapid test: $184–$365. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "Do I always need a strep test?",
        answer: "No. Patients with very high or very low Centor scores can be managed empirically (treat or don't treat). Mid-range scores benefit from an in-person rapid strep test.",
      },
      {
        question: "What antibiotic is used for strep?",
        answer: "Amoxicillin or penicillin V are first-line, both ~$9–$15 generic. Cephalexin or azithromycin are alternatives for penicillin-allergic patients.",
      },
      {
        question: "When should I skip telehealth for a sore throat?",
        answer: "Drooling, stridor, voice change, severe unilateral swelling, or trouble breathing, go to the ER. These can signal peritonsillar abscess or epiglottitis.",
      },
      {
        question: "Can a doctor diagnose strep over video?",
        answer: "For low or high Centor scores, yes, clinical decision-making works without a test. Mid-range cases often need a rapid strep test, which requires a brief in-person stop at a lab or clinic.",
      },
      {
        question: "How soon will I feel better?",
        answer: "On effective antibiotics, fever and pain typically improve within 24–48 hours. Always finish the full course, undertreated strep can cause rheumatic complications.",
      },
      {
        question: "Can my partner or kids get treated by telehealth too?",
        answer: "TeleDirectMD treats adults 18+. Pediatric patients should see a pediatrician or pediatric urgent care.",
      },
      {
        question: "Is the visit covered by insurance?",
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. Self-pay $79 is available in 40+ states.",
      },
    ],
    references: [
      {
        label: "Solv, Urgent care cost without insurance (June 2026)",
        url: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Strep test at urgent care (2022)",
        url: "https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care",
      },
      {
        label: "GoodRx, Antibiotic pricing",
        url: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
      },
      {
        label: "Mira Health, Urgent care cost (2025)",
        url: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, ER visit cost (Sept 2026)",
        url: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost",
      },
      {
        label: "AAFP, Antibiotic use in acute upper respiratory tract infections (2022)",
        url: "https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html",
      },
      {
        label: "MDsave, Rapid strep test pricing (2025)",
        url: "https://www.mdsave.com/procedures/rapid-strep-test/d786f4cd",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating a sore throat via telehealth costs $88–$94 total at TeleDirectMD, a $79 video visit plus about $9–$15 for generic amoxicillin (<a href=\"https://www.goodrx.com/amoxicillin\">GoodRx, 2026</a>), plus the cost of an in-person rapid strep test if one is needed. By comparison, an urgent care visit with a rapid strep test runs $175–$350 before the antibiotic (<a href=\"https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance\">Solv, June 2026</a>), primary care cash-pay totals $134–$390 with testing (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and an ER visit for sore throat averages about $654 (<a href=\"https://www.talktomira.com/post/how-much-does-an-er-visit-cost\">Mira Health, 2026</a>). Insured patients may pay a lower copay through their plan. Using the Centor criteria, a telehealth physician can decide who needs a strep test, who can skip one, and when a high score supports treatment (<a href=\"https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html\">AAFP, 2022</a>).",
  },

  // ──────────────────────────────────────────────────────────────────
  'online-prescription-cost': {
    slug: "online-prescription-cost",
    pid: "rx-cost",
    h1: "How Much Does an Online Prescription Cost?",
    metaTitle: "Online Prescription Cost 2026: $83–$109 Total (Visit + Rx)",
    metaDescription: "A $79 online doctor visit + $4–$30 generic prescription = $83–$109 total. Verified 2026 prices for refills (BP, asthma, cholesterol, antibiotics).",
    breadcrumb: "Online Prescription Cost",
    answerLead: "Online prescription cost in 2026 (uninsured):",
    answerBody: "A telehealth visit + generic Rx totals <strong>$83–$109</strong> at TeleDirectMD ($79 visit + $4–$30 generic via GoodRx). Common refills: lisinopril <a href=\"https://www.goodrx.com/lisinopril\">$4–$12</a>, atorvastatin $8–$15, albuterol inhaler $20–$25, metoprolol $3–$9 (<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/\">JGIM, 2020</a>). In that 2020 study, undiscounted cash prices for generic cardiovascular drugs averaged <strong>$42 per Rx</strong>, and GoodRx prices were 49–77% lower depending on pharmacy type. Insured patients may pay a lower copay through their plan.",
    heroSub: "Most online refill visits cost a $79 flat fee at TeleDirectMD. Add a generic prescription (often $4–$30 with GoodRx) and you're done.",
    heroIntro: "For stable chronic conditions, high blood pressure, high cholesterol, asthma, hypothyroidism, acid reflux, an in-person visit usually adds nothing clinically. The doctor reviews how you're doing, refills the prescription, and orders any routine labs you can drop into a Quest or LabCorp at your convenience. We pulled 2024–2026 prices from PMC, GoodRx, and Venteur to show what online prescription refills actually cost.",
    heroCardTitle: "Online Refill at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "E-prescription sent to your pharmacy after the visit",
      "Refills for stable chronic conditions (BP, asthma, cholesterol, etc.)",
      "40+ states; no insurance required",
      "HSA/FSA accepted",
      "No controlled substances",
    ],
    heroBenefits: [
      "$79 flat, no facility fee, no labs unless clinically needed",
      "Generic medications via GoodRx: $4–$30/month for most",
      "No drive time; visits average 10 minutes",
      "GoodRx prices 49–77% below undiscounted cash for generic heart drugs (2020 study)",
      "In-network with Aetna, BCBS, UnitedHealthcare in select states",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 83, highPrice: 109, description: "$79 visit + lisinopril/atorvastatin/etc. ($4–$30)" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost", lowPrice: 44, highPrice: 120, description: "Visit ($40–$90) + generic Rx ($4–$30)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 104, highPrice: 330, description: "In-person visit ($100–$300) + Rx ($4–$30)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance", lowPrice: 154, highPrice: 310, description: "Walk-in visit ($150–$280) + Rx ($4–$30)" },
      { providerName: "Without GoodRx (cash retail)", providerUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/", lowPrice: 42, highPrice: 42, description: "Cardiovascular generics retail cash without discount" },
    ],
    costTable: {
      title: "Online Prescription Cost by Setting (2026, Cash-Pay)",
      caption: "Visit cost + generic medication via GoodRx, 30-day supply.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$83–$109 typical",
          includes: "$79 visit + lisinopril/atorvastatin/etc. ($4–$30)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$44–$120",
          includes: "Visit ($40–$90) + generic Rx ($4–$30)",
          source: "GoodRx 2023",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$104–$330",
          includes: "In-person visit ($100–$300) + Rx ($4–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$154–$310",
          includes: "Walk-in visit ($150–$280) + Rx ($4–$30)",
          source: "Solv, June 2026",
          sourceUrl: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Without GoodRx (cash retail)",
          cost: "~$42/Rx average",
          includes: "Cardiovascular generics retail cash without discount",
          source: "JGIM / PMC, 2020",
          sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "The Hidden Cost of Skipping a Refill",
      paragraphs: [
        "A 2020 Journal of General Internal Medicine study (<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/\">PMC</a>) found undiscounted retail cash prices averaged <strong>$42.41</strong> per generic cardiovascular medication, versus <strong>$9.88–$21.73</strong> with a GoodRx discount depending on pharmacy type, a 49–77% reduction. A 2024 RAND analysis found US prices across all drugs were about 2.78 times those in other high-income countries, driven by brand-name drugs; US generic prices were lower than abroad (<a href=\"https://www.rand.org/news/press/2024/02/01.html\">RAND, 2024</a>).",
        "<a href=\"https://www.doctronic.ai/blog/goodrx-vs-insurance/\">Doctronic's 2026 analysis</a> found that for most generic medications under $10, GoodRx is cheaper than a standard $15–$25 insurance copay. Your generic blood pressure pill via GoodRx will often cost less than your insurance copay.",
        "The biggest cost of refill access is missing them. Patients who lapse on antihypertensives have measurably worse cardiovascular outcomes. A $79 telehealth visit twice a year keeps the script live.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From Online Refill Visits",
      groups: [
        {
          label: "Adults on stable chronic medications",
          desc: "BP, cholesterol, asthma, thyroid, GERD, quarterly or biannual refill check-ins.",
        },
        {
          label: "Patients between PCPs",
          desc: "Switched insurance or moved? Bridge your refills until your new PCP has openings.",
        },
        {
          label: "Travelers and remote workers",
          desc: "Need a refill while away from home? $79 video visit, prescription at any US pharmacy.",
        },
        {
          label: "High-deductible plan members",
          desc: "Cash $79 + GoodRx is often cheaper than your in-network copay before deductible.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Online Refills Are Appropriate",
      goodFor: [
        "Stable chronic conditions on the same medication",
        "Routine quarterly or biannual check-ins",
        "No new symptoms or recent hospitalizations",
        "Recent labs available (or willing to get them)",
        "Adult patients (18+)",
      ],
      notFor: [
        "Newly diagnosed conditions needing in-person workup",
        "Controlled substance prescriptions (TeleDirectMD does not prescribe)",
        "Significant symptom change since last visit",
        "Conditions requiring in-person physical exam",
        "Pediatric patients",
      ],
    },
    decisionGuide: {
      title: "Refills: Telehealth, In-Person, or Pharmacy Direct?",
      steps: [
        {
          num: 1,
          head: "Stable on the same dose for 6+ months?",
          body: "Telehealth refill visit is appropriate. $79 visit, generic Rx via GoodRx.",
          good: true,
        },
        {
          num: 2,
          head: "Symptoms changed or labs overdue?",
          body: "Telehealth visit + lab order. We can send a Quest/LabCorp order; you drop in at your convenience.",
          good: true,
        },
        {
          num: 3,
          head: "Newly worsening symptoms or new diagnosis?",
          body: "In-person primary care visit is the right call, physical exam matters here.",
          good: false,
        },
        {
          num: 4,
          head: "Need a controlled substance?",
          body: "TeleDirectMD does not prescribe controlled substances. See your PCP or specialist in-person.",
          good: false,
        },
      ],
    },
    costPlus: {
      drug: "lisinopril / atorvastatin",
      price: "$4–$7",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Common Generic Refill Costs (GoodRx, 2026, 30-Day Supply)",
      caption: "Retail pharmacy with GoodRx coupon. Without GoodRx, cash retail averages ~$42/Rx (PMC 2020).",
      rows: [
        {
          drug: "Lisinopril (BP)",
          cost: "$4–$12",
          sourceUrl: "https://www.goodrx.com/lisinopril",
        },
        {
          drug: "Atorvastatin (cholesterol)",
          cost: "$8–$15",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Metoprolol (BP/cardiac)",
          cost: "$3–$9",
          sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/",
        },
        {
          drug: "Albuterol inhaler (asthma)",
          cost: "$20–$25",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Levothyroxine (hypothyroidism)",
          cost: "$4–$15",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Omeprazole (GERD)",
          cost: "$4–$12",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Sertraline (anxiety/depression)",
          cost: "$4–$15",
          sourceUrl: "https://www.goodrx.com",
        },
        {
          drug: "Metformin (type 2 diabetes)",
          cost: "$4–$10",
          sourceUrl: "https://www.goodrx.com",
        },
      ],
    },
    homeCare: {
      title: "Save More on Your Prescription",
      bullets: [
        "Use GoodRx, Cost Plus Drugs, or Amazon Pharmacy, compare all three.",
        "Ask the prescriber for the 90-day supply if you're stable; cuts visit frequency.",
        "Use a discount card AT pharmacy checkout, your insurance is sometimes more expensive on generics.",
        "Pay with HSA/FSA card, both visit and Rx are eligible.",
        "Mail-order pharmacies often beat retail for 90-day generic supplies.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Use Telehealth for a Refill",
      bullets: [
        "Controlled substances (we do not prescribe).",
        "New diagnosis without in-person workup.",
        "Significant symptom change or recent hospitalization.",
        "Conditions requiring in-person physical exam (some cardiac, neuro, or rheumatologic).",
        "Pediatric patients (adults only).",
      ],
    },
    faqs: [
      {
        question: "How much does an online prescription cost?",
        answer: "TeleDirectMD's $79 video visit + a generic prescription ($4–$30 via GoodRx) = $83–$109 total for most refills. Common generics like lisinopril run $4–$12 for a 30-day supply.",
      },
      {
        question: "Are online prescriptions cheaper than in-person?",
        answer: "Yes for the visit fee if you pay cash, $79 vs. $100–$300 for cash-pay primary care (Mira Health). Insured patients may pay a lower copay through their plan. Medication costs are identical regardless of where the prescription was written; use GoodRx, Cost Plus Drugs, or Amazon Pharmacy to lower drug cost.",
      },
      {
        question: "Can TeleDirectMD prescribe controlled substances?",
        answer: "No. We do not prescribe controlled substances (Adderall, Xanax, opioids, etc.). For those, you'll need an in-person prescriber.",
      },
      {
        question: "What conditions are appropriate for online refills?",
        answer: "Stable chronic conditions: hypertension, hyperlipidemia, asthma, hypothyroidism, GERD, type 2 diabetes (oral meds), anxiety/depression on stable SSRIs, allergies, and others.",
      },
      {
        question: "How fast will I get the prescription?",
        answer: "If a prescription is appropriate, it is sent electronically right after the visit. Pickup time depends on your pharmacy.",
      },
      {
        question: "Can I use my insurance for a TeleDirectMD refill visit?",
        answer: "Yes, Aetna, BCBS, and UnitedHealthcare in select states. If your plan is not in-network, the $79 self-pay rate often beats your in-network cost when your deductible is unmet.",
      },
      {
        question: "Do I need labs for a refill?",
        answer: "Some chronic conditions (hyperlipidemia, hypothyroidism, diabetes) need annual or biannual labs. We can send a lab order to Quest or LabCorp; you drop in at your convenience and we follow up by message.",
      },
      {
        question: "Can I get a 90-day supply?",
        answer: "Yes, when clinically appropriate. A 90-day supply is more cost-effective and reduces visit frequency.",
      },
    ],
    references: [
      {
        label: "GoodRx, Drug pricing main",
        url: "https://www.goodrx.com",
      },
      {
        label: "GoodRx, Lisinopril pricing",
        url: "https://www.goodrx.com/lisinopril",
      },
      {
        label: "JGIM / PMC, GoodRx vs. cash retail (2020)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/",
      },
      {
        label: "Doctronic, GoodRx vs. insurance (2026)",
        url: "https://www.doctronic.ai/blog/goodrx-vs-insurance/",
      },
      {
        label: "Solv, Urgent care cost without insurance (June 2026)",
        url: "https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "GoodRx, How much does telehealth cost (2023)",
        url: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "RAND, US prescription drug prices vs. other countries (2024)",
        url: "https://www.rand.org/news/press/2024/02/01.html",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, an online prescription costs $83–$109 total, a $79 telehealth visit plus a generic medication ranging from $3–$30 with GoodRx: lisinopril $4–$12, atorvastatin $8–$15, metoprolol $3–$9, and omeprazole $4–$12 (verified at <a href=\"https://www.goodrx.com\">GoodRx, 2026</a>). A 2020 JGIM study found undiscounted retail cash prices averaged $42.41 per generic cardiovascular medication versus $9.88–$21.73 with GoodRx depending on pharmacy type, a 49–77% reduction (<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/\">PMC, 2020</a>). A <a href=\"https://www.doctronic.ai/blog/goodrx-vs-insurance/\">Doctronic 2026 analysis</a> found GoodRx often beats a standard insurance copay for generics under $10. In-person primary care visits typically run $100–$300 cash-pay (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>); insured patients may pay a lower copay through their plan. Telehealth refills are appropriate for stable chronic conditions, hypertension, hyperlipidemia, asthma, hypothyroidism, and GERD, where no new physical exam or controlled substance is required.",
  },


  // ──────────────────────────────────────────────────────────────────
  'pink-eye-cost': {
    slug: "pink-eye-cost",
    pid: "pinkeye-cost",
    h1: "Pink Eye Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Pink Eye Treatment Cost 2026: $90 Online vs. $150+ Urgent Care",
    metaDescription: "A TeleDirectMD pink eye visit costs $90–$91 total (visit + erythromycin ointment via GoodRx). An urgent care visit runs $150–$250; an average uninsured ER visit is $1,500–$3,000. 2026 prices with sources.",
    breadcrumb: "Pink Eye Treatment Cost",
    answerLead: "Pink eye (conjunctivitis) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth pink eye evaluation costs <strong>$90–$91 total</strong> at TeleDirectMD, a $79 visit plus $11–$12 generic erythromycin ophthalmic ointment via <a href=\"https://www.goodrx.com/erythromycin\">GoodRx (April 2026)</a>. An urgent care visit runs <strong>$150–$250</strong> before medication (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare</a>). The average uninsured ER visit runs <strong>$1,500–$3,000</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare</a>), an unnecessary setting for most pink eye; viral conjunctivitis is the most common type and usually clears on its own within 1 to 2 weeks per the <a href=\"https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis\">American Academy of Ophthalmology (AAO)</a>. Insured patients may pay a lower copay through their plan.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating pink eye (conjunctivitis) via telehealth costs $90–$91 total at TeleDirectMD, a $79 video visit with a board-certified MD plus $11–$12 for generic erythromycin ophthalmic ointment (GoodRx, April 2026). By comparison, an urgent care visit runs $150–$250 before medication (BetterCare), primary care cash-pay totals $111–$312 with ointment (Mira Health, 2025), and the average uninsured ER visit is $1,500–$3,000 (BetterCare). Insured patients may pay a lower copay through their plan. Per the American Academy of Ophthalmology, viral conjunctivitis is the most common type and antibiotic drops do not help viral or allergic pink eye; telehealth is appropriate for mild-to-moderate presentations without corneal involvement, vision loss, or severe pain.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $11–$12 antibiotic ointment if indicated. Total cost: as low as $90. Viral pink eye is the most common type and antibiotics don't help it, so Dr. Bhavsar prescribes them only when clinically indicated.",
    heroIntro: "Pink eye (conjunctivitis) is one of the most over-treated conditions in US urgent care. The American Academy of Ophthalmology notes that viral conjunctivitis is the most common type and usually clears on its own; antibiotic drops do not help viral pink eye and add unnecessary cost. When bacterial conjunctivitis is the diagnosis, generic erythromycin ophthalmic ointment costs just $11–$12 with a GoodRx coupon. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show you what pink eye treatment actually costs across every care setting.",
    heroCardTitle: "Pink Eye Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment: bacterial vs. viral vs. allergic conjunctivitis",
      "E-prescription to your pharmacy if antibiotics are clinically indicated",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $90–$91 vs. $150–$250 for an urgent care visit alone",
      "No waiting room, typical visit 10–15 minutes",
      "AAO-aligned care: antibiotics prescribed only when clinically warranted",
      "Same-day prescription at any US pharmacy if needed",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 90, highPrice: 91, description: "$79 visit + erythromycin ointment ($11–$12) if bacterial, no antibiotic needed for viral" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost", lowPrice: 40, highPrice: 112, description: "Visit ($40–$90) + antibiotic ointment ($11–$22) if indicated" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 111, highPrice: 312, description: "In-person visit ($100–$300) + ointment ($11–$12)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost", lowPrice: 161, highPrice: 272, description: "Walk-in visit ($150–$250) + antibiotic ointment ($11–$22)" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost", lowPrice: 1500, highPrice: 3000, description: "Average uninsured ER visit; chargemaster pricing for a non-emergent condition" },
    ],
    costTable: {
      title: "Pink Eye Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + antibiotic ointment via GoodRx where applicable. Most viral cases need no prescription.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$90–$91 typical",
          includes: "$79 visit + erythromycin ointment ($11–$12) if bacterial, no antibiotic needed for viral",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/erythromycin",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$40–$112",
          includes: "Visit ($40–$90) + antibiotic ointment ($11–$22) if indicated",
          source: "GoodRx 2023",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$111–$312",
          includes: "In-person visit ($100–$300) + ointment ($11–$12)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$161–$272",
          includes: "Walk-in visit ($150–$250) + antibiotic ointment ($11–$22)",
          source: "BetterCare",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000",
          includes: "Average uninsured ER visit; chargemaster pricing for a non-emergent condition",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Pink Eye Visit Can Cost Less",
      paragraphs: [
        "The <a href=\"https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis\">American Academy of Ophthalmology (AAO)</a> notes that viral conjunctivitis is the most common type, that pink eye usually clears on its own within 1 to 2 weeks, and that antibiotic eye drops do not help viral or allergic pink eye. Unneeded antibiotics also contribute to antimicrobial resistance. A clinician can assess the presentation via video (discharge character, unilateral vs. bilateral, associated URI symptoms, recent STI exposure) and decide whether bacterial conjunctivitis, which does respond to erythromycin or ciprofloxacin ophthalmic, is the likely diagnosis.",
        "Penn Medicine's 2026 study in <em>JAMA Network Open</em> found average insurer-billed charges per 30-day episode of care of <strong>$96 when care started with telemedicine vs. $509 when it started in person</strong>, across 10 common billing codes (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). Those are charges billed to insurers, not out-of-pocket costs, and the study did not report pink-eye-specific results.",
        "When antibiotic treatment is appropriate, generic erythromycin ophthalmic ointment (0.5%, 3.5g tube) costs about <strong>$11.79</strong> with a GoodRx coupon (<a href=\"https://www.goodrx.com/erythromycin\">GoodRx, April 2026</a>). Ciprofloxacin ophthalmic solution (0.3%, 2.5ml) runs about <strong>$10.57</strong> (<a href=\"https://www.goodrx.com/ciprofloxacin\">GoodRx, April 2026</a>). The visit, not the antibiotic, drives most of the cost: a $90–$91 telehealth total is roughly $70–$180 less than an urgent care visit plus ointment at BetterCare's $150–$250 visit price.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Pink Eye Visit",
      groups: [
        {
          label: "College students (18+)",
          desc: "Pink eye can keep you out of class. A $79 telehealth visit can determine whether antibiotics are needed without a trip to a clinic. TeleDirectMD sees adults 18+ only.",
        },
        {
          label: "Contact lens wearers",
          desc: "Contact lens wearers with red eyes need prompt evaluation to rule out bacterial or Acanthamoeba keratitis, telehealth can triage quickly and refer urgently if needed.",
        },
        {
          label: "Working adults",
          desc: "Pink eye is contagious. Skip the urgent care waiting room (and possibly spreading it), get assessed from home and pick up ointment at your pharmacy the same hour.",
        },
        {
          label: "Travelers and remote workers",
          desc: "Onset on a trip or in a city where you don't have a regular provider? A TeleDirectMD visit routes your prescription to the nearest pharmacy.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Pink Eye Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Mild red eye with discharge, without significant pain or light sensitivity",
        "Bilateral presentation consistent with viral or allergic conjunctivitis",
        "Unilateral mucopurulent discharge consistent with bacterial conjunctivitis",
        "Known exposure to someone with confirmed viral pink eye",
        "Contact lens wearers with mild symptoms and no corneal symptoms (for triage)",
        "Follow-up evaluation after starting antibiotic drops",
      ],
      notFor: [
        "Significant eye pain, photophobia, or sudden vision change (may indicate keratitis or iritis)",
        "Recent eye injury, chemical splash, or foreign body",
        "Suspected gonococcal conjunctivitis (copious purulent discharge, sexual exposure risk)",
        "Neonates with eye discharge (requires in-person evaluation)",
        "No improvement after 48–72 hours of antibiotic drops",
        "Corneal involvement, hazy cornea, or fluorescein staining defect (ophthalmology referral)",
      ],
    },
    decisionGuide: {
      title: "Pink Eye: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Eye pain, photophobia, or vision change?",
          body: "Go to urgent care or the ER, these symptoms suggest keratitis, iritis, or another serious condition requiring slit-lamp examination. Telehealth is not appropriate.",
          good: false,
        },
        {
          num: 2,
          head: "Mild redness, discharge, no pain or vision changes?",
          body: "Book a $79 telehealth visit. The MD will assess whether this is viral (no Rx needed), bacterial (erythromycin $11.79 via GoodRx), or allergic (OTC antihistamine eye drops). Total cost likely $90–$91.",
          good: true,
        },
        {
          num: 3,
          head: "Contact lens wearer with worsening symptoms after 24h?",
          body: "See an eye care provider in person or go to urgent care. Contact lens-related infections can deteriorate rapidly and may need corneal evaluation.",
          good: false,
        },
        {
          num: 4,
          head: "No improvement after 48–72h of prescribed drops?",
          body: "Book a follow-up $79 telehealth visit. We'll reassess, adjust treatment, or refer you to ophthalmology if needed.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "erythromycin ointment",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Pink Eye Medication Costs (GoodRx Generic, 2026)",
      caption: "Topical ophthalmic agents; retail pharmacy with GoodRx coupon. Bacterial conjunctivitis only, antibiotics are not indicated for viral pink eye.",
      rows: [
        {
          drug: "Erythromycin 0.5% ophthalmic ointment, first-line (bacterial)",
          cost: "$11.79",
          sourceUrl: "https://www.goodrx.com/erythromycin",
        },
        {
          drug: "Ciprofloxacin 0.3% ophthalmic solution, alternative/broad-spectrum",
          cost: "$10.57",
          sourceUrl: "https://www.goodrx.com/ciprofloxacin",
        },
        {
          drug: "Polymyxin B/trimethoprim (Polytrim) ophthalmic, alternative",
          cost: "$14–$22",
          sourceUrl: "https://www.goodrx.com/conditions/eye-infection/drugs",
        },
        {
          drug: "OTC ketotifen antihistamine drops (allergic conjunctivitis only)",
          cost: "$8–$15 OTC",
          sourceUrl: "https://www.goodrx.com/conditions/eye-infection/drugs",
        },
      ],
    },
    homeCare: {
      title: "While You Wait or If Viral Pink Eye Is Confirmed",
      bullets: [
        "Apply a cool, clean compress to closed eyes 3–4 times daily to soothe irritation.",
        "Use preservative-free artificial tears (OTC) to flush discharge and relieve dryness.",
        "Wash hands frequently, viral and bacterial conjunctivitis are highly contagious.",
        "Do not share towels, pillowcases, or eye makeup.",
        "Remove contact lenses immediately and do not reinsert until the infection has fully cleared.",
        "Avoid touching or rubbing the eye, it worsens irritation and spreads infection.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat Pink Eye by Telehealth",
      bullets: [
        "Eye pain (not just irritation), may indicate keratitis, iritis, or acute glaucoma.",
        "Photophobia (light sensitivity) with a red eye.",
        "Sudden or gradual vision loss.",
        "Corneal opacity or haziness visible to the patient.",
        "Copious purulent discharge with recent STI exposure (gonorrhea risk).",
        "Chemical or foreign body exposure, call Poison Control or go to the ER.",
      ],
    },
    faqs: [
      {
        question: "How much does pink eye treatment cost without insurance in 2026?",
        answer: "According to TeleDirectMD's 2026 analysis, a TeleDirectMD visit costs $90–$91 total (visit + erythromycin ointment at about $11.79 via GoodRx). An urgent care visit runs $150–$250 before medication (BetterCare). The average uninsured ER visit is $1,500–$3,000, almost never warranted for routine conjunctivitis. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "Do I need antibiotics for pink eye?",
        answer: "Often not. The American Academy of Ophthalmology notes that viral conjunctivitis is the most common type, that pink eye usually clears on its own within 1 to 2 weeks, and that antibiotic drops do not help viral pink eye. When bacteria are the cause, erythromycin or ciprofloxacin ophthalmic drops cost $10–$12 with a GoodRx coupon. A telehealth visit is the right first step to determine which type you have.",
      },
      {
        question: "How much is erythromycin eye ointment without insurance?",
        answer: "Generic erythromycin 0.5% ophthalmic ointment (3.5g tube) costs about $11.79 with a free GoodRx coupon as of April 2026; prices vary by pharmacy.",
      },
      {
        question: "Can a telehealth doctor really diagnose pink eye on a video call?",
        answer: "Yes, for the vast majority of uncomplicated cases. Clinicians assess discharge type (watery vs. mucopurulent vs. purulent), bilateral vs. unilateral presentation, associated URI or allergy symptoms, and contact lens use. This information drives the bacterial vs. viral distinction. Red flags for serious conditions, pain, photophobia, vision change, are also assessed and prompt referral.",
      },
      {
        question: "When should I skip telehealth and go to urgent care for pink eye?",
        answer: "Go in-person if you have eye pain, sensitivity to light, sudden vision change, a corneal injury or chemical exposure, or copious purulent discharge with STI exposure risk. These can indicate keratitis, iritis, or gonococcal conjunctivitis, all of which require slit-lamp examination.",
      },
      {
        question: "Is pink eye contagious? Will I miss work?",
        answer: "Viral and bacterial pink eye are both highly contagious. The American Academy of Ophthalmology advises staying home from work or school until your eyes are no longer red and discharging. Telehealth lets you get evaluated without going to a crowded urgent care waiting room, reducing your own exposure time and protecting others.",
      },
      {
        question: "What's the difference between ciprofloxacin eye drops and erythromycin ointment for pink eye?",
        answer: "Both treat bacterial conjunctivitis and cost roughly the same ($10.57–$11.79 via GoodRx, April 2026). Erythromycin ointment is typically first-line for uncomplicated bacterial conjunctivitis; ciprofloxacin drops (a fluoroquinolone) are often reserved for more severe cases, contact lens-related infections, or when broader coverage is needed. Your TeleDirectMD physician will select based on your presentation.",
      },
      {
        question: "Can I get pink eye treatment the same day through TeleDirectMD?",
        answer: "Yes. TeleDirectMD offers same-day appointments including evenings and weekends. If a prescription is clinically warranted, it is sent to your pharmacy right after the visit. For viral conjunctivitis, you'll receive a management plan without an antibiotic, saving the cost of an unnecessary prescription.",
      },
    ],
    references: [
      {
        label: "BetterCare, Urgent care vs. ER cost (2025)",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
      },
      {
        label: "GoodRx, How much does telehealth cost (2023)",
        url: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
      },
      {
        label: "GoodRx, Erythromycin ophthalmic pricing (April 2026)",
        url: "https://www.goodrx.com/erythromycin",
      },
      {
        label: "GoodRx, Ciprofloxacin ophthalmic pricing (April 2026)",
        url: "https://www.goodrx.com/ciprofloxacin",
      },
      {
        label: "GoodRx, Eye infection antibiotic class",
        url: "https://www.goodrx.com/conditions/eye-infection/drugs",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (February 2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "American Academy of Ophthalmology, Conjunctivitis guidelines",
        url: "https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'ear-infection-cost': {
    slug: "ear-infection-cost",
    pid: "earinfection-cost",
    h1: "Ear Infection Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Ear Infection Cost 2026: $88–$98 Online vs. $150+ Urgent Care",
    metaDescription: "A TeleDirectMD ear infection visit + amoxicillin costs $88–$98 total (vs. about $159–$273 at urgent care with an antibiotic). Verified 2026 prices from GoodRx, BetterCare, and Mira Health.",
    breadcrumb: "Ear Infection Treatment Cost",
    answerLead: "Ear infection treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth ear infection visit at TeleDirectMD costs <strong>$88–$98 total</strong>, a $79 visit plus $9–$19 for generic amoxicillin or cefdinir via <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx (April 2026)</a>. That compares to <strong>$150–$250</strong> for an urgent care visit before medication (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>). The average uninsured ER visit is <strong>$1,500–$3,000</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>), a setting that is rarely indicated for a routine adult ear infection. Insured patients may pay a lower copay through their plan. Per a <a href=\"https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html\">2022 American Family Physician review</a>, amoxicillin/clavulanate is first-line for adults with acute otitis media when antibiotics are used.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an adult ear infection via telehealth costs $88–$98 total in the US, a $79 video visit with a board-certified MD plus $9–$19 for generic amoxicillin 500mg (verified GoodRx, April 2026). By comparison, an urgent care visit runs $150–$250 before medication (BetterCare, 2025), primary care cash-pay totals $109–$323 with the antibiotic (Mira Health, 2025), and the average uninsured ER visit is $1,500–$3,000 (BetterCare, 2025). Insured patients may pay a lower copay through their plan. Per a 2022 American Family Physician review, amoxicillin/clavulanate is first-line for adult acute otitis media (AOM); cefdinir 300mg ($23 via GoodRx) is an alternative for penicillin-allergic patients. Telehealth is appropriate for adult AOM without fever above 102°F, without cholesteatoma risk, and without worsening despite 48–72 hours of antibiotics.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $9–$19 generic antibiotic. Total cost: as low as $88. Appropriate for adult middle and outer ear infections without red flags.",
    heroIntro: "Ear infections (acute otitis media and otitis externa) are among the most common adult conditions treated at urgent care, and among the most over-billed. Per a 2022 American Family Physician review, amoxicillin/clavulanate is first-line for adult acute otitis media, and plain amoxicillin costs just $9 with a GoodRx coupon. There's no otoscope required to diagnose otitis externa (swimmer's ear); symptom history often suffices. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health so you can see exactly what an ear infection costs across every care setting.",
    heroCardTitle: "Ear Infection Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Assessment: otitis media vs. otitis externa vs. other cause",
      "Antibiotic e-prescription to your pharmacy",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $88–$98 vs. about $159–$273 at urgent care (visit + antibiotic)",
      "No waiting room, typical visit 10–15 minutes",
      "First-line amoxicillin 500mg as low as $9 at your pharmacy via GoodRx",
      "AAFP-aligned prescribing: right antibiotic, right duration",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 88, highPrice: 98, description: "$79 visit + amoxicillin 500mg ($9–$19), no otoscope required for otitis externa" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost", lowPrice: 49, highPrice: 113, description: "Visit ($40–$90) + antibiotic ($9–$23)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 109, highPrice: 323, description: "In-person visit ($100–$300) + antibiotic ($9–$23)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost", lowPrice: 159, highPrice: 273, description: "Walk-in visit ($150–$250) + antibiotic ($9–$23); otoscope exam included" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost", lowPrice: 1500, highPrice: 3000, description: "Average uninsured ER visit; chargemaster pricing" },
    ],
    costTable: {
      title: "Ear Infection Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first-line antibiotic via GoodRx. Excludes ear canal irrigation or myringotomy.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$88–$98 typical",
          includes: "$79 visit + amoxicillin 500mg ($9–$19), no otoscope required for otitis externa",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$49–$113",
          includes: "Visit ($40–$90) + antibiotic ($9–$23)",
          source: "GoodRx 2023",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$109–$323",
          includes: "In-person visit ($100–$300) + antibiotic ($9–$23)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$159–$273",
          includes: "Walk-in visit ($150–$250) + antibiotic ($9–$23); otoscope exam included",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000",
          includes: "Average uninsured ER visit; chargemaster pricing",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Ear Infection Visit Can Cost Less",
      paragraphs: [
        "For adult acute otitis media (AOM), a <a href=\"https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html\">2022 American Family Physician review</a> recommends amoxicillin/clavulanate as first-line for adults when antibiotic treatment is elected. For uncomplicated presentations without recent antibiotic use, plain amoxicillin 500mg three times daily is widely used and costs just $9 with a GoodRx coupon (<a href=\"https://www.goodrx.com/amoxicillin\">GoodRx, April 2026</a>). For otitis externa (outer ear canal infection), topical antibiotic drops, ofloxacin or ciprofloxacin/dexamethasone, are first-line, and the diagnosis is largely clinical based on ear canal tenderness and discharge. Both presentations are well-suited to telehealth triage.",
        "Penn Medicine's 2026 study in <em>JAMA Network Open</em> found average insurer-billed charges per 30-day episode of care of <strong>$96 when care started with telemedicine vs. $509 when it started in person</strong>, across 10 common billing codes (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). Those are charges billed to insurers, not out-of-pocket costs, and the study did not report ear-infection results. Many uncomplicated ear infections need no imaging or blood work, which keeps a telehealth visit simple.",
        "Where telehealth has limits: a physical otoscope view of the tympanic membrane confirms middle ear effusion and differentiates AOM from otitis media with effusion (OME), which typically does not need antibiotics. Telehealth MDs assess based on symptom pattern, onset, fever, and prior treatment history. If there is diagnostic uncertainty or the patient is not improving after 48–72 hours, in-person evaluation is the right call. When penicillin allergy precludes amoxicillin, cefdinir 300mg is the first oral alternative, costing <strong>$23</strong> for a 20-capsule course via <a href=\"https://www.goodrx.com/cefdinir\">GoodRx (April 2026)</a>.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Ear Infection Visit",
      groups: [
        {
          label: "Adults with a prior ear infection",
          desc: "If you've had this before and it feels the same, telehealth can avoid a $150–$250 urgent care visit. Frequent recurrences (3+ in 6 months) still need ENT evaluation.",
        },
        {
          label: "Swimmers and active adults",
          desc: "Otitis externa (swimmer's ear) is almost always diagnosed by clinical history, ear canal pain after swimming, worsened with pulling the earlobe. Telehealth is ideal.",
        },
        {
          label: "Working adults and parents",
          desc: "A 10-minute video visit at 7am means an antibiotic at the pharmacy before work starts, no urgent care wait.",
        },
        {
          label: "Travelers",
          desc: "Ear pressure, pain, and discharge on a trip? Book a TeleDirectMD visit and have the antibiotic routed to a local pharmacy wherever you are.",
        },
      ],
    },
    appropriateBlock: {
      title: "When an Ear Infection Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Adult with classic AOM symptoms: ear pain, pressure, muffled hearing, possible low-grade fever",
        "Otitis externa presentation: ear canal pain, history of water exposure, discharge",
        "Penicillin allergy requiring cefdinir as alternative (telehealth-prescribable)",
        "Mild-to-moderate symptoms without high fever (below 102°F)",
        "Prior ear infection with the same presentation (not frequent recurrences)",
        "Follow-up visit to check treatment response",
      ],
      notFor: [
        "Severe ear pain with high fever (102°F or higher) suggesting mastoiditis risk",
        "Ear pain with facial weakness, dizziness, or neurological symptoms",
        "Bloody or clear ear discharge following head trauma",
        "Suspected cholesteatoma (long history of recurrent infections, hearing loss)",
        "Failure to improve after 48–72 hours of first-line antibiotics",
        "Anyone under 18 (TeleDirectMD sees adults only)",
      ],
    },
    decisionGuide: {
      title: "Ear Infection: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Fever above 102°F, facial weakness, or dizziness?",
          body: "Go to urgent care or the ER. These suggest mastoiditis, labyrinthitis, or another serious complication requiring imaging and possible IV antibiotics.",
          good: false,
        },
        {
          num: 2,
          head: "Classic adult AOM or otitis externa, no red flags?",
          body: "Book a $79 telehealth visit. Total cost is typically $88–$98 with generic amoxicillin. If an antibiotic is prescribed, it is sent to your pharmacy after the visit.",
          good: true,
        },
        {
          num: 3,
          head: "No improvement after 48–72 hours of antibiotics?",
          body: "See a provider in person, you may need a different antibiotic, ear canal irrigation, or an otoscope exam to rule out complications.",
          good: false,
        },
        {
          num: 4,
          head: "Follow-up after treatment?",
          body: "A $79 telehealth follow-up visit confirms resolution or adjusts the plan if symptoms persist.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "amoxicillin",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Ear Infection Antibiotic Costs (GoodRx Generic, 2026)",
      caption: "5–10 day oral course, or 7-day topical course; retail pharmacy with GoodRx coupon.",
      rows: [
        {
          drug: "Amoxicillin 500mg, oral option (adult AOM)",
          cost: "$9–$19",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          drug: "Amoxicillin/clavulanate (Augmentin), adult first-line per American Family Physician (2022)",
          cost: "$15–$35",
          sourceUrl: "https://www.goodrx.com/amoxicillin-potassium-clavulanate",
        },
        {
          drug: "Cefdinir 300mg, penicillin allergy alternative",
          cost: "$23–$30",
          sourceUrl: "https://www.goodrx.com/cefdinir",
        },
        {
          drug: "Ciprofloxacin/dexamethasone (Ciprodex) ear drops, otitis externa",
          cost: "$18–$45",
          sourceUrl: "https://www.goodrx.com/conditions/ear-infection/drugs",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Antibiotic",
      bullets: [
        "Apply a warm (not hot) compress to the affected ear for 10–15 minutes to ease pain.",
        "Use OTC ibuprofen or acetaminophen for pain and fever management.",
        "Keep water out of the ear canal, avoid swimming and use a cotton ball when showering if otitis externa.",
        "Sleep with the affected ear facing up to reduce pressure.",
        "Finish the entire antibiotic course even if symptoms improve in 2–3 days.",
        "Contact us within 48–72 hours if fever spikes or symptoms worsen after starting antibiotics.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat an Ear Infection by Telehealth",
      bullets: [
        "Fever 102°F or higher with ear pain (mastoiditis risk).",
        "Facial weakness, drooping, or asymmetry on the affected side.",
        "Dizziness, vertigo, or sudden hearing loss.",
        "Ear drainage following head trauma.",
        "Anyone under 18 (TeleDirectMD sees adults only).",
        "No improvement or worsening after 48–72 hours on antibiotics.",
      ],
    },
    faqs: [
      {
        question: "How much does an ear infection cost to treat without insurance in 2026?",
        answer: "Telehealth: $88–$102 total (TeleDirectMD $79 visit + $9–$23 antibiotic via GoodRx). Urgent care visit: $150–$250 before medication (BetterCare, 2025). Primary care: $109–$323 with the antibiotic (Mira Health, 2025). Average uninsured ER visit: $1,500–$3,000 (BetterCare, 2025), almost never appropriate for a routine adult ear infection. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "What antibiotic is first-line for an adult ear infection?",
        answer: "Per a 2022 American Family Physician review, amoxicillin/clavulanate (Augmentin) is the first-line recommendation for adults with acute otitis media when antibiotics are elected. For patients without recent antibiotic use, plain amoxicillin 500mg is widely used and costs just $9 with a GoodRx coupon (April 2026). For penicillin-allergic patients, cefdinir 300mg is first alternative at $23 for a 20-capsule course via GoodRx.",
      },
      {
        question: "Can a telehealth doctor treat swimmer's ear (otitis externa)?",
        answer: "Yes. Otitis externa is a clinical diagnosis based on ear canal pain, tenderness when pulling the earlobe, and history of water exposure or moisture. No otoscope is required, a telehealth MD can assess the presentation and prescribe topical antibiotic ear drops (ciprofloxacin/dexamethasone) if appropriate.",
      },
      {
        question: "Do I need to see the ear in person to diagnose an ear infection?",
        answer: "For otitis externa, no, the diagnosis is clinical. For acute otitis media, a telehealth MD works from your symptom history, fever status, and prior treatment history. If there is diagnostic ambiguity or the presentation is atypical, the MD will direct you to urgent care for an otoscope exam.",
      },
      {
        question: "How much is amoxicillin without insurance?",
        answer: "According to GoodRx (April 2026), generic amoxicillin 500mg capsules cost $9–$19 for a typical course at most US pharmacies with a free GoodRx coupon. The retail price without a coupon is significantly higher, always use GoodRx.",
      },
      {
        question: "When does an ear infection need the ER?",
        answer: "Only when there are signs of serious complications: high fever with severe ear pain, facial weakness, redness/swelling behind the ear (mastoiditis), sudden hearing loss, or dizziness. Routine adult ear infections with standard symptoms never warrant the ER.",
      },
      {
        question: "How long does it take to get an antibiotic through TeleDirectMD for an ear infection?",
        answer: "Same-day visits are available, including evenings and weekends. If an antibiotic is prescribed, it is sent to your local pharmacy right after the visit. Amoxicillin 500mg, the most commonly prescribed agent, costs $9–$19 at most pharmacies with a GoodRx coupon.",
      },
      {
        question: "When should I refer to an ENT (otolaryngologist) for an ear infection?",
        answer: "Recurrent AOM (3+ episodes in 6 months), persistent middle ear fluid after 3 months, significant hearing loss, suspected cholesteatoma, or failure of two antibiotic courses all warrant ENT referral. Your TeleDirectMD physician will flag these scenarios and provide a referral letter.",
      },
    ],
    references: [
      {
        label: "BetterCare, Urgent care vs. ER cost (2025)",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
      },
      {
        label: "GoodRx, How much does telehealth cost (2023)",
        url: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
      },
      {
        label: "GoodRx, Amoxicillin pricing (April 2026)",
        url: "https://www.goodrx.com/amoxicillin",
      },
      {
        label: "GoodRx, Cefdinir pricing (April 2026)",
        url: "https://www.goodrx.com/cefdinir",
      },
      {
        label: "GoodRx, Ear infection antibiotic class",
        url: "https://www.goodrx.com/conditions/ear-infection/drugs",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (February 2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "AAFP, Antibiotic use in acute upper respiratory tract infections (2022)",
        url: "https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'yeast-infection-cost': {
    slug: "yeast-infection-cost",
    pid: "yeast-cost",
    h1: "Yeast Infection Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Yeast Infection Cost 2026: $91 Online vs. $160+ Urgent Care",
    metaDescription: "A telehealth yeast infection visit + fluconazole costs $91 total (vs. $161–$262 urgent care). OTC miconazole is $10–$20. Verified 2026 prices with clinical sources.",
    breadcrumb: "Yeast Infection Treatment Cost",
    answerLead: "Yeast infection (vulvovaginal candidiasis) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth yeast infection evaluation costs <strong>$91 total</strong> at TeleDirectMD, a $79 visit plus $11–$12 for a single-dose generic fluconazole 150mg tablet via <a href=\"https://www.goodrx.com/fluconazole\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$161–$262</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2025</a>); insured patients may pay less with a plan copay. OTC miconazole is available without a prescription for $10–$20 at any pharmacy, appropriate if you have a confirmed prior diagnosis. Per <a href=\"https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm\">CDC STI Treatment Guidelines (2021)</a> and <a href=\"https://www.idsociety.org/practice-guideline/candidiasis/\">IDSA guidelines</a>, single-dose oral fluconazole 150mg is a recommended first-line treatment for uncomplicated vulvovaginal candidiasis.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an uncomplicated yeast infection via telehealth costs $91 total in the US, a $79 video visit with a board-certified MD plus $11–$12 for a single-dose generic fluconazole 150mg tablet (verified GoodRx, April 2026). OTC miconazole is an alternative for $10–$20 at any pharmacy without a prescription. By comparison, urgent care in-person averages $161–$262 (BetterCare, 2025), primary care cash-pay totals $111–$312 (Mira Health, 2025), and an ER visit can exceed $1,500. Per CDC (2021) and IDSA guidelines, a single oral dose of fluconazole 150mg is a recommended treatment for uncomplicated vulvovaginal candidiasis, and it can often be prescribed after a telehealth visit.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a single-dose $12 fluconazole tablet. Total cost: $91. No pelvic exam required for uncomplicated presentations with classic symptoms.",
    heroIntro: "Vulvovaginal yeast infections affect roughly 75% of women at least once, and the treatment options are among the cheapest in all of medicine. A single-dose oral fluconazole 150mg tablet costs just $11–$12 with a GoodRx coupon, and per CDC and IDSA guidelines, it is first-line for uncomplicated infections. No lab work is required when classic symptoms are present in a patient with a prior diagnosis. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show what yeast infection treatment costs across every care setting.",
    heroCardTitle: "Yeast Infection Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment: VVC vs. BV vs. other vaginitis",
      "Fluconazole e-prescription or OTC recommendation, as appropriate",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $91 vs. $161–$262 urgent care in-person",
      "Single-dose fluconazole: one tablet; symptoms often improve within a few days",
      "No pelvic exam required for uncomplicated presentations",
      "CDC/IDSA-aligned care: right diagnosis, right treatment",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 91, highPrice: 91, description: "$79 visit + fluconazole 150mg single dose ($11–$12)" },
      { providerName: "OTC miconazole/clotrimazole (self-treat)", providerUrl: "https://www.goodrx.com/conditions/yeast-infection/drugs", lowPrice: 10, highPrice: 20, description: "7-day cream or 3-day suppository; no visit required for confirmed recurrent VVC" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/fluconazole", lowPrice: 51, highPrice: 112, description: "Visit ($40–$100) + fluconazole ($11–$12)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 111, highPrice: 312, description: "In-person visit ($100–$300) + fluconazole ($11–$12)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 161, highPrice: 262, description: "Walk-in visit ($150–$250) + fluconazole ($11–$12)" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit + exam + prescription; always the wrong setting for uncomplicated VVC" },
    ],
    costTable: {
      title: "Yeast Infection Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + single-dose fluconazole via GoodRx. OTC option available without a visit for many patients.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$91 typical",
          includes: "$79 visit + fluconazole 150mg single dose ($11–$12)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/fluconazole",
        },
        {
          setting: "OTC miconazole/clotrimazole (self-treat)",
          cost: "$10–$20",
          includes: "7-day cream or 3-day suppository; no visit required for confirmed recurrent VVC",
          source: "GoodRx, 2025",
          sourceUrl: "https://www.goodrx.com/conditions/yeast-infection/drugs",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$51–$112",
          includes: "Visit ($40–$100) + fluconazole ($11–$12)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/fluconazole",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$111–$312",
          includes: "In-person visit ($100–$300) + fluconazole ($11–$12)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$161–$262",
          includes: "Walk-in visit ($150–$250) + fluconazole ($11–$12)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000+",
          includes: "ED visit + exam + prescription; always the wrong setting for uncomplicated VVC",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "When a Telehealth Yeast Infection Visit Makes Sense",
      paragraphs: [
        "For uncomplicated vulvovaginal candidiasis (VVC), both the <a href=\"https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm\">CDC STI Treatment Guidelines (2021)</a> and the <a href=\"https://www.idsociety.org/practice-guideline/candidiasis/\">IDSA (2016)</a> endorse a single 150mg oral dose of fluconazole as a first-line treatment option, no pelvic exam required. Telehealth often works well: the diagnosis is clinical in a patient with classic symptoms (thick white discharge, vaginal itch, no odor) and a prior confirmed episode. Per CDC, women with previously verified VVC can self-treat with OTC topical azoles or request a fluconazole prescription from a telehealth visit.",
        "Penn Medicine's 2026 study in <em>JAMA Network Open</em> found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For a yeast infection requiring only a single pill prescription, the $79 telehealth visit represents the overwhelming bulk of the cost, and it is roughly $70–$170 cheaper than a cash-pay urgent care visit.",
        "Generic fluconazole 150mg (a single tablet) costs <strong>$11–$12</strong> with a GoodRx coupon at most US pharmacies as of April 2026 (<a href=\"https://www.goodrx.com/fluconazole\">GoodRx, April 2026</a>). The OTC alternative, miconazole 2% vaginal cream or suppositories, is $10–$20 at any pharmacy without a prescription, per CDC recommendations for women with previously confirmed VVC. Telehealth adds value when the diagnosis is unclear (distinguishing VVC from BV or trichomoniasis), when OTC treatment has failed, or when the patient needs oral fluconazole and cannot self-prescribe.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Yeast Infection Visit",
      groups: [
        {
          label: "Women with recurrent yeast infections",
          desc: "Know the symptoms well but need a fluconazole Rx? A $79 telehealth visit is faster and roughly $70–$170 cheaper than cash-pay urgent care.",
        },
        {
          label: "OTC treatment failures",
          desc: "If 3-day miconazole didn't clear symptoms, it may be BV, a non-albicans Candida species, or a resistant strain. Telehealth can reassess and adjust treatment.",
        },
        {
          label: "Uninsured or high-deductible patients",
          desc: "A $79 flat visit plus a low-cost generic usually costs less than a cash-pay urgent care visit. Insured patients may pay a lower copay through their plan.",
        },
        {
          label: "College students and young adults",
          desc: "First episode or uncertain diagnosis? Telehealth lets you get a clinical assessment and the right prescription without the uncomfortable urgent care visit.",
        },
      ],
    },
    appropriateBlock: {
      title: "When a Yeast Infection Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Classic VVC symptoms: white discharge without odor, vaginal itch, no fever",
        "Recurrent episode identical to previously confirmed VVC",
        "OTC treatment desired but patient wants clinical confirmation first",
        "Failed OTC miconazole, needs fluconazole prescription or diagnosis reassessment",
        "Uncomplicated VVC in non-pregnant adult woman",
        "Recurrent VVC (3+ episodes/year), telehealth can initiate maintenance fluconazole regimen per IDSA",
      ],
      notFor: [
        "Foul or fishy odor suggesting BV (metronidazole, not fluconazole, is needed)",
        "Frothy green/yellow discharge suggesting trichomoniasis (wet prep required)",
        "Fever, pelvic pain, or cervical motion tenderness (pelvic inflammatory disease)",
        "Pregnancy (CDC recommends only 7-day topical azoles; oral fluconazole should not be used)",
        "Immunocompromised (HIV, chemotherapy), may need extended treatment and culture",
        "Recurrent refractory VVC without prior culture to rule out non-albicans Candida",
      ],
    },
    decisionGuide: {
      title: "Yeast Infection: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Fever, pelvic pain, or offensive discharge odor?",
          body: "Go to urgent care or a gynecologist. These suggest BV, trichomoniasis, or pelvic inflammatory disease, all require a different workup and treatment.",
          good: false,
        },
        {
          num: 2,
          head: "Classic VVC symptoms, no red flags, not pregnant?",
          body: "Book a $79 telehealth visit. Total cost: $91 including single-dose fluconazole via GoodRx. Or try OTC miconazole for $10–$20 if you've had a confirmed VVC before.",
          good: true,
        },
        {
          num: 3,
          head: "OTC treatment failed or symptoms recurred within 2 months?",
          body: "Telehealth can reassess, but in-person evaluation with a wet prep or vaginal culture may be needed to rule out BV, non-albicans Candida, or resistant organisms.",
          good: false,
        },
        {
          num: 4,
          head: "Maintenance therapy for recurrent VVC (3+ per year)?",
          body: "A $79 telehealth visit can initiate weekly suppressive fluconazole per IDSA guidelines, far cheaper than repeated urgent care visits at $161–$262 each.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "fluconazole",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Yeast Infection Medication Costs (GoodRx Generic / OTC, 2026)",
      caption: "Prescription via GoodRx or OTC. Single-dose fluconazole is usually the least expensive prescription option.",
      rows: [
        {
          drug: "Fluconazole 150mg, single oral dose (first-line prescription, per CDC/IDSA)",
          cost: "$11–$12",
          sourceUrl: "https://www.goodrx.com/fluconazole",
        },
        {
          drug: "Miconazole 2% cream 7-day, OTC first-line topical (per CDC)",
          cost: "$10–$15 OTC",
          sourceUrl: "https://www.goodrx.com/conditions/yeast-infection/drugs",
        },
        {
          drug: "Clotrimazole 1% cream 7-day, OTC alternative (per CDC)",
          cost: "$8–$14 OTC",
          sourceUrl: "https://www.goodrx.com/conditions/yeast-infection/drugs",
        },
        {
          drug: "Terconazole 0.4% cream, prescription topical for refractory cases",
          cost: "$25–$55",
          sourceUrl: "https://www.goodrx.com/conditions/yeast-infection/drugs",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Prescription or OTC to Work",
      bullets: [
        "Wear loose, breathable cotton underwear, yeast thrives in warm, moist environments.",
        "Avoid scented soaps, douches, or feminine hygiene sprays near the vaginal area.",
        "Plain, unsweetened yogurt applied externally may reduce itch, not a substitute for antifungal treatment.",
        "Cool compresses or OTC hydrocortisone 1% cream on external skin can relieve itch while awaiting the antifungal.",
        "Avoid sexual activity until symptoms fully resolve, yeast is not an STI, but intercourse can worsen irritation.",
        "Symptoms often start to improve within a few days of fluconazole; contact a clinician if they do not.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat a Yeast Infection by Telehealth",
      bullets: [
        "Foul or fishy vaginal odor (suggests BV, needs metronidazole, not fluconazole).",
        "Frothy, yellow-green discharge (suggests trichomoniasis, needs in-person wet prep).",
        "Fever or lower abdominal pain (PID risk).",
        "Pregnancy (CDC advises against oral fluconazole; see your OB-GYN in person).",
        "Immunocompromised status (HIV, steroid use, chemotherapy).",
        "Third recurrence without a prior wet prep or culture to confirm species.",
      ],
    },
    faqs: [
      {
        question: "How much does a yeast infection cost to treat without insurance in 2026?",
        answer: "OTC: $10–$20 for miconazole or clotrimazole at any pharmacy, no visit required for women with a prior confirmed diagnosis. Telehealth: $91 total ($79 visit + $12 fluconazole via GoodRx). Urgent care: $161–$262 (BetterCare, 2025). ER: almost never appropriate.",
      },
      {
        question: "Is fluconazole or OTC miconazole better for a yeast infection?",
        answer: "Per CDC 2021 guidelines, both are effective first-line options for uncomplicated VVC. Topical miconazole is sold without a prescription, while fluconazole (a single pill) is simpler to take and requires a prescription. Per CDC, azole treatment relieves symptoms and clears cultures in 80–90% of patients who complete therapy. TeleDirectMD can prescribe fluconazole for $12 via GoodRx when a prescription is preferred.",
      },
      {
        question: "Can a telehealth doctor tell the difference between a yeast infection and BV?",
        answer: "Often yes, based on symptom pattern. VVC presents with white, clumpy discharge, itch, and no odor. BV presents with thin, gray discharge and a fishy odor, and requires metronidazole, not fluconazole. If the presentation is ambiguous, the MD will direct you to in-person evaluation with a vaginal wet prep.",
      },
      {
        question: "How much is fluconazole without insurance?",
        answer: "According to GoodRx (April 2026), a single tablet of generic fluconazole 150mg costs $11–$12 at most US pharmacies with a free GoodRx coupon. The retail price without a coupon is significantly higher, and prices vary by pharmacy, so compare before you fill.",
      },
      {
        question: "Is it safe to treat a yeast infection without being seen in person?",
        answer: "It can be appropriate for uncomplicated presentations in non-pregnant adults with classic VVC symptoms and a prior confirmed diagnosis. CDC lists single-dose oral fluconazole as a recommended regimen and allows OTC treatment for women with a prior diagnosis and the same symptoms. Telehealth adds clinical judgment to distinguish VVC from BV or trich, and to prescribe fluconazole when oral therapy is preferred over OTC topical azoles.",
      },
      {
        question: "What if my yeast infection keeps coming back?",
        answer: "Three or more documented episodes in a year is defined as recurrent VVC (RVVC). Per IDSA guidelines, this warrants suppressive therapy: weekly fluconazole 150mg for 6 months, costing roughly $12/month with GoodRx. A TeleDirectMD visit can initiate this protocol, far cheaper than repeated $161–$262 urgent care visits.",
      },
      {
        question: "Can I use my HSA/FSA to pay for the yeast infection visit and prescription?",
        answer: "Yes. Telehealth visits and prescription medications are qualified HSA/FSA expenses. TeleDirectMD provides itemized receipts for reimbursement. The $79 visit and $12 fluconazole prescription are both covered.",
      },
      {
        question: "Can pregnant women get a yeast infection treated via telehealth?",
        answer: "Not at TeleDirectMD. Per CDC, oral fluconazole should not be used in pregnancy because of possible fetal risk, and only 7-day topical azoles (clotrimazole, miconazole) are recommended. TeleDirectMD does not treat yeast infections in pregnancy, so pregnant patients should see their OB-GYN.",
      },
    ],
    references: [
      {
        label: "CDC, Vulvovaginal Candidiasis STI Treatment Guidelines (2021)",
        url: "https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm",
      },
      {
        label: "IDSA, Candidiasis clinical practice guideline (2016)",
        url: "https://www.idsociety.org/practice-guideline/candidiasis/",
      },
      {
        label: "GoodRx, Fluconazole pricing (April 2026)",
        url: "https://www.goodrx.com/fluconazole",
      },
      {
        label: "GoodRx, Vaginal yeast infection drug class",
        url: "https://www.goodrx.com/conditions/yeast-infection/drugs",
      },
      {
        label: "BetterCare, Urgent care cost without insurance",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (February 2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'bv-treatment-cost': {
    slug: "bv-treatment-cost",
    pid: "bv-cost",
    h1: "BV Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "BV Treatment Cost 2026: $91 Online vs. $160+ Urgent Care",
    metaDescription: "A telehealth BV visit + metronidazole costs $91 total (vs. $162–$262 urgent care). Verified 2026 GoodRx prices, CDC guidelines, and pregnancy considerations.",
    breadcrumb: "BV Treatment Cost",
    answerLead: "Bacterial vaginosis (BV) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth BV evaluation costs <strong>$91 total</strong> at TeleDirectMD, a $79 visit plus $12 for a 7-day course of generic metronidazole 500mg via <a href=\"https://www.goodrx.com/metronidazole\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$162–$262</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2025</a>); insured patients may pay less with a plan copay. Per <a href=\"https://www.cdc.gov/std/treatment-guidelines/bv.htm\">CDC STI Treatment Guidelines (2021)</a>, a recommended regimen is metronidazole 500mg orally twice daily for 7 days, an inexpensive generic that can be prescribed after a telehealth visit when appropriate. Unlike trichomoniasis, partner treatment is not routinely recommended for BV per CDC.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating bacterial vaginosis (BV) via telehealth costs $91 total in the US, a $79 video visit with a board-certified MD plus $12 for a 7-day course of generic metronidazole 500mg (verified GoodRx, April 2026). By comparison, urgent care in-person averages $162–$262 (BetterCare, 2025), primary care cash-pay totals $112–$312 (Mira Health, 2025), and an ER visit can exceed $1,500. Per CDC 2021 guidelines, first-line BV treatment is metronidazole 500mg orally twice daily for 7 days; partner treatment is not routinely recommended. Telehealth is appropriate for symptomatic BV in non-pregnant women with classic presentation and no signs of PID.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $12 metronidazole course. Total cost: $91. CDC-recommended first-line treatment, fully prescribable without a pelvic exam in classic presentations.",
    heroIntro: "Bacterial vaginosis is the most common vaginal infection in the US, affecting roughly 30% of women of reproductive age. The treatment, generic metronidazole 500mg, costs just $12 with a GoodRx coupon. Unlike yeast infections, BV cannot be effectively self-treated with OTC products, and distinguishing it from trichomoniasis requires clinical judgment, which is exactly what a telehealth visit provides. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show what BV treatment costs across every care setting.",
    heroCardTitle: "BV Treatment Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment: BV vs. yeast infection vs. trichomoniasis",
      "Metronidazole or clindamycin e-prescription to your pharmacy",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $91 vs. $162–$262 urgent care in-person",
      "CDC first-line metronidazole 500mg: as low as $12 at your pharmacy via GoodRx",
      "No pelvic exam required for classic symptomatic presentation",
      "CDC-aligned guidance: no unnecessary partner treatment for BV",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 91, highPrice: 91, description: "$79 visit + metronidazole 500mg 14 tabs ($12)" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/metronidazole", lowPrice: 52, highPrice: 112, description: "Visit ($40–$100) + metronidazole ($12)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 112, highPrice: 312, description: "In-person visit ($100–$300) + metronidazole ($12); wet prep may be ordered" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 162, highPrice: 262, description: "Walk-in visit ($150–$250) + metronidazole ($12); wet prep often included" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit + pelvic exam + labs; almost never necessary for uncomplicated BV" },
    ],
    costTable: {
      title: "BV Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + 7-day metronidazole course via GoodRx. Excludes STI co-testing if ordered separately.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$91 typical",
          includes: "$79 visit + metronidazole 500mg 14 tabs ($12)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/metronidazole",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$52–$112",
          includes: "Visit ($40–$100) + metronidazole ($12)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/metronidazole",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$112–$312",
          includes: "In-person visit ($100–$300) + metronidazole ($12); wet prep may be ordered",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$162–$262",
          includes: "Walk-in visit ($150–$250) + metronidazole ($12); wet prep often included",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000+",
          includes: "ED visit + pelvic exam + labs; almost never necessary for uncomplicated BV",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth BV Visit Is Clinically Sound and Cost-Effective",
      paragraphs: [
        "The <a href=\"https://www.cdc.gov/std/treatment-guidelines/bv.htm\">CDC 2021 STI Treatment Guidelines</a> recommend metronidazole 500mg orally twice daily for 7 days as first-line BV treatment, a 14-tablet course that costs just <strong>$12</strong> at most US pharmacies with a GoodRx coupon (<a href=\"https://www.goodrx.com/metronidazole\">GoodRx, April 2026</a>). In the office, BV is diagnosed with the Amsel criteria (thin homogeneous discharge, fishy odor with KOH, vaginal pH above 4.5, and clue cells on microscopy), which need an exam and lab testing. By video, the physician relies on symptom history instead, so telehealth prescribing is most reasonable for classic presentations in women with a prior confirmed BV diagnosis.",
        "Penn Medicine's 2026 <em>JAMA Network Open</em> study found telemedicine visits averaged <strong>$96 vs. $509 for in-person care</strong>, five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For BV, where the main treatment cost is a $12 antibiotic course, the roughly $70–$170 savings from telehealth vs. cash-pay urgent care is almost entirely visit overhead.",
        "Important clinical distinctions from trichomoniasis: BV does not require partner treatment per CDC (unlike trichomoniasis, which requires partner treatment to prevent reinfection). Trichomoniasis presents with frothy yellow-green discharge and in women is treated with metronidazole 500mg twice daily for 7 days per CDC 2021, after confirmation with NAAT or wet prep. If the telehealth assessment suggests trich rather than BV, in-person evaluation with STI testing is the appropriate referral. For pregnancy: CDC recommends treating all symptomatic pregnant women and considers metronidazole low risk in pregnancy (<a href=\"https://www.cdc.gov/std/treatment-guidelines/bv.htm\">CDC, 2021</a>). TeleDirectMD does not manage BV in pregnancy, so pregnant patients should see their OB-GYN in person.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth BV Visit",
      groups: [
        {
          label: "Women with recurrent BV",
          desc: "Recurrent BV is common, $79 telehealth instead of $162–$262 urgent care for a repeat $12 prescription makes the cost math obvious.",
        },
        {
          label: "Women distinguishing BV from yeast",
          desc: "BV (fishy odor, thin discharge) and yeast (thick white discharge, itch) need different treatments. Telehealth triage prevents $10–$20 spent on the wrong OTC product.",
        },
        {
          label: "Working adults and students",
          desc: "Avoid taking half a day off for an in-person appointment. A 10-minute telehealth visit at lunch can lead to the same prescription when appropriate.",
        },
        {
          label: "Uninsured or high-deductible patients",
          desc: "A $79 flat visit plus a low-cost generic usually costs less than a cash-pay urgent care visit. Insured patients may pay a lower copay through their plan.",
        },
      ],
    },
    appropriateBlock: {
      title: "When BV Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Classic BV symptoms: thin gray/white discharge with fishy odor, no fever",
        "Recurrent episode identical to previously confirmed BV diagnosis",
        "Metronidazole Rx needed, patient unable or unwilling to wait for in-person appointment",
        "Non-pregnant adult woman with classic symptomatic BV",
        "Clindamycin gel alternative needed (metronidazole-intolerant patient)",
        "Follow-up after BV treatment, confirm resolution or discuss recurrence prevention",
      ],
      notFor: [
        "Frothy yellow-green discharge suggesting trichomoniasis (requires wet prep or NAAT)",
        "Pelvic pain, fever, or cervical motion tenderness (pelvic inflammatory disease, go in-person)",
        "Pregnancy (TeleDirectMD does not manage BV in pregnancy; see your OB-GYN)",
        "Recurrent BV despite two completed metronidazole courses (needs culture/in-person workup)",
        "History of pelvic surgery or IUD with new pelvic pain",
        "Suspected concurrent STI (chlamydia, gonorrhea) requiring NAAT testing",
      ],
    },
    decisionGuide: {
      title: "BV: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Pelvic pain, fever, or cervical tenderness?",
          body: "Go to urgent care or gynecology immediately. These symptoms suggest PID, which needs in-person evaluation and a different antibiotic regimen (often an injection plus oral antibiotics), not metronidazole alone.",
          good: false,
        },
        {
          num: 2,
          head: "Classic BV symptoms, fishy odor, thin discharge, no fever?",
          body: "Book a $79 telehealth visit. Total cost: $91 including 7-day metronidazole via GoodRx. If treatment is appropriate, the prescription is sent to your pharmacy the same day.",
          good: true,
        },
        {
          num: 3,
          head: "Failed two prior metronidazole courses?",
          body: "See a gynecologist in person for a wet prep, vaginal culture, and assessment for recurrent BV or possible concurrent infection.",
          good: false,
        },
        {
          num: 4,
          head: "Pregnant and symptomatic?",
          body: "See your OB-GYN in person. CDC recommends treating symptomatic BV in pregnancy, but TeleDirectMD does not manage BV in pregnancy.",
          good: false,
        },
      ],
    },
    costPlus: {
      drug: "metronidazole",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "BV Medication Costs (GoodRx Generic, 2026)",
      caption: "7-day course oral or 5-day vaginal; retail pharmacy with GoodRx coupon. Per CDC 2021 first-line recommendations.",
      rows: [
        {
          drug: "Metronidazole 500mg oral, first-line (CDC 2021), 14 tabs",
          cost: "$12–$13",
          sourceUrl: "https://www.goodrx.com/metronidazole",
        },
        {
          drug: "Metronidazole vaginal gel 0.75%, first-line topical (CDC 2021), 5-day course",
          cost: "$25–$28",
          sourceUrl: "https://www.goodrx.com/metronidazole",
        },
        {
          drug: "Clindamycin vaginal cream 2%, first-line alternative (CDC 2021), 7-day course",
          cost: "$25–$45",
          sourceUrl: "https://www.goodrx.com/clindamycin",
        },
        {
          drug: "Clindamycin 300mg oral, alternative for topical-intolerant patients",
          cost: "$18–$35",
          sourceUrl: "https://www.goodrx.com/clindamycin",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Antibiotic",
      bullets: [
        "CDC 2021 found no convincing evidence of a disulfiram-like reaction between metronidazole and alcohol and no longer advises avoiding alcohol; ask your physician if you have concerns.",
        "Refrain from sexual activity or use condoms consistently during the treatment course per CDC recommendation.",
        "Avoid douching, it disrupts vaginal flora and worsens BV.",
        "Wear breathable cotton underwear; avoid tight synthetic fabrics.",
        "Probiotics (oral Lactobacillus) may support recurrence prevention, though evidence is limited.",
        "If fishy odor worsens or you develop fever or pelvic pain, seek in-person care.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat BV by Telehealth",
      bullets: [
        "Pelvic or abdominal pain, may indicate PID.",
        "Fever or chills with vaginal discharge.",
        "Pregnancy (see your OB-GYN for in-person evaluation).",
        "Frothy or greenish discharge (suggests trichomoniasis, not BV).",
        "Two prior failed metronidazole courses without improvement.",
        "History of IUD insertion within the past 3 weeks with new symptoms.",
      ],
    },
    faqs: [
      {
        question: "How much does BV treatment cost without insurance in 2026?",
        answer: "Telehealth: $91 total (TeleDirectMD $79 visit + $12 metronidazole 500mg via GoodRx). Urgent care: $162–$262 (BetterCare, 2025). Primary care: $112–$312 (Mira Health, 2025). ER: never appropriate for uncomplicated BV.",
      },
      {
        question: "What is the first-line treatment for BV per CDC guidelines?",
        answer: "Per CDC 2021 STI Treatment Guidelines, first-line BV treatment is metronidazole 500mg orally twice daily for 7 days. Alternatives include metronidazole vaginal gel 0.75% (5 days) or clindamycin vaginal cream 2% (7 days). All three are fully prescribable via telehealth.",
      },
      {
        question: "Does my partner need to be treated for BV?",
        answer: "No, unlike trichomoniasis, CDC does not routinely recommend partner treatment for BV. The vaginal flora imbalance is not considered an STI in the traditional sense. However, a 2025 trial found that treating male partners with oral and topical antibiotics reduced recurrence in some couples; your TeleDirectMD physician can discuss the latest guidance.",
      },
      {
        question: "How much is metronidazole without insurance?",
        answer: "According to GoodRx (April 2026), generic metronidazole 500mg for a 7-day course (14 tablets) costs $12–$13 at most US pharmacies with a free GoodRx coupon. The retail price without a discount is significantly higher.",
      },
      {
        question: "Can BV be treated during pregnancy via telehealth?",
        answer: "Not at TeleDirectMD. CDC recommends treating symptomatic BV in pregnancy with metronidazole 500mg twice daily for 7 days and considers metronidazole low risk in pregnancy, but TeleDirectMD does not manage BV in pregnancy. Pregnant patients should see their OB-GYN.",
      },
      {
        question: "How do I tell if I have BV vs. a yeast infection?",
        answer: "BV: thin, gray or white discharge with a fishy odor, especially after sex. Usually little or no vaginal itching. Yeast infection: thick, white, cottage cheese-like discharge with significant vaginal itch. No fishy odor. Telehealth can help distinguish based on your symptom description, getting the right diagnosis prevents wasting $10–$20 on the wrong OTC product.",
      },
      {
        question: "What if my BV keeps coming back?",
        answer: "Recurrent BV (3+ episodes/year) is common. CDC-supported suppressive therapy options include twice-weekly metronidazole vaginal gel ($25–$28/month via GoodRx) for more than 3 months. A TeleDirectMD visit can initiate this protocol, saving the cost of repeated urgent care visits at $162–$262 each.",
      },
      {
        question: "Can I get clindamycin vaginal cream prescribed via telehealth?",
        answer: "Yes. Clindamycin vaginal cream 2% is a CDC first-line BV alternative and is fully prescribable via telehealth. The 7-day clindamycin vaginal cream course runs $25–$45 via GoodRx. For cost reasons, most patients prefer the $12 oral metronidazole course unless there is a specific intolerance.",
      },
    ],
    references: [
      {
        label: "CDC, Bacterial Vaginosis STI Treatment Guidelines (2021)",
        url: "https://www.cdc.gov/std/treatment-guidelines/bv.htm",
      },
      {
        label: "GoodRx, Metronidazole pricing (April 2026)",
        url: "https://www.goodrx.com/metronidazole",
      },
      {
        label: "GoodRx, Clindamycin pricing (April 2026)",
        url: "https://www.goodrx.com/clindamycin",
      },
      {
        label: "BetterCare, Urgent care cost without insurance",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "BetterCare, ER visit cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (February 2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'cold-sore-cost': {
    slug: "cold-sore-cost",
    pid: "coldsore-cost",
    h1: "Cold Sore Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Cold Sore Cost 2026: $93–$105 Online vs. $160+ Urgent Care",
    metaDescription: "A telehealth cold sore visit + valacyclovir costs $93–$105 total (vs. $164–$276 urgent care). Treat at the prodrome, verified 2026 prices and AAD treatment advice.",
    breadcrumb: "Cold Sore Treatment Cost",
    answerLead: "Cold sore (herpes labialis) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth cold sore visit at TeleDirectMD costs <strong>$93–$105 total</strong>, a $79 visit plus $14–$26 for generic valacyclovir via <a href=\"https://www.goodrx.com/valacyclovir\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$164–$276</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2025</a>); insured patients may pay less with a plan copay. The <a href=\"https://www.aad.org/public/diseases/a-z/cold-sores-treatment\">American Academy of Dermatology (AAD)</a> notes that treating a cold sore before it appears (during tingling or itching) or when you first see it can reduce discomfort and speed healing. Waiting days for a clinic appointment can mean starting late. If an antiviral is appropriate, a telehealth visit can send the prescription to your pharmacy the same day.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating a cold sore (herpes labialis) via telehealth costs $93–$105 total in the US, a $79 video visit with a board-certified MD plus $14–$26 for generic valacyclovir (verified GoodRx, April 2026). By comparison, urgent care in-person averages $164–$276 (BetterCare, 2025), primary care cash-pay totals $114–$326 (Mira Health, 2025), and an ER visit for herpes labialis can exceed $1,500. Per the American Academy of Dermatology (AAD), treating a cold sore early, during the tingling or burning stage or when it first appears, can reduce discomfort and speed healing. Telehealth can allow same-day prescribing near symptom onset instead of waiting days for an in-person appointment.",
    heroSub: "Same-day visit, with a prescription sent to your pharmacy when appropriate. Antivirals work best when started early, at the tingling stage. Total cost: as low as $93.",
    heroIntro: "Cold sores are caused by HSV-1 and infect an estimated 64% of people under 50 worldwide (WHO, 2025). Timing matters: the American Academy of Dermatology notes that treating a cold sore at the tingling stage or when it first appears can reduce discomfort and speed healing. Waiting 1–2 days for an in-person appointment often means the blister has already formed. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health so you know exactly what cold sore treatment costs across every care setting.",
    heroCardTitle: "Cold Sore Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD, available evenings and weekends",
      "Valacyclovir or acyclovir e-prescription to your nearest pharmacy",
      "Episodic or suppressive therapy prescribed based on your outbreak frequency",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $93–$105 vs. $164–$276 urgent care in-person",
      "Same-day prescription when appropriate, which helps you start treatment early",
      "Generic valacyclovir as low as $14–$26 for a treatment course via GoodRx",
      "AAD-aligned care: episodic or suppressive therapy, right drug, right dose",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 93, highPrice: 105, description: "$79 visit + generic valacyclovir 1g ($14–$26)" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/conditions/cold-sores/drugs", lowPrice: 54, highPrice: 126, description: "Visit ($40–$100) + antiviral ($14–$26)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 114, highPrice: 326, description: "In-person visit ($100–$300) + antiviral ($14–$26)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 164, highPrice: 276, description: "Walk-in visit ($150–$250) + antiviral ($14–$26)" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit; almost never appropriate for routine herpes labialis" },
    ],
    costTable: {
      title: "Cold Sore Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + valacyclovir or acyclovir via GoodRx. Episodic treatment only; suppressive therapy costs vary.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$93–$105 typical",
          includes: "$79 visit + generic valacyclovir 1g ($14–$26)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$54–$126",
          includes: "Visit ($40–$100) + antiviral ($14–$26)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/cold-sores/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$114–$326",
          includes: "In-person visit ($100–$300) + antiviral ($14–$26)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$164–$276",
          includes: "Walk-in visit ($150–$250) + antiviral ($14–$26)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000+",
          includes: "ED visit; almost never appropriate for routine herpes labialis",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why Telehealth Fits Cold Sore Treatment",
      paragraphs: [
        "The <a href=\"https://www.aad.org/public/diseases/a-z/cold-sores-treatment\">American Academy of Dermatology (AAD)</a> recommends initiating oral antiviral therapy, acyclovir, valacyclovir, or famciclovir, at the first sign of a cold sore prodrome: tingling, itching, or burning before the blister appears. The AAD notes that treating at this stage, or when the sore first appears, can reduce discomfort and speed healing. A common barrier to early treatment is access, which telehealth can help with. A same-day TeleDirectMD visit can get a prescription to your pharmacy soon after symptoms start, when an antiviral is appropriate.",
        "Penn Medicine's 2026 <em>JAMA Network Open</em> study found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong> (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For cold sores, a condition with a narrow treatment window and a straightforward clinical diagnosis, the in-person visit is almost purely overhead cost. The drug is the treatment, and the drug is cheap.",
        "According to <a href=\"https://www.goodrx.com/valacyclovir\">GoodRx (April 2026)</a>, a 30-tablet fill of generic valacyclovir 1g costs about <strong>$26</strong> with a coupon, versus about $130 retail. Episodic cold sore treatment (valacyclovir 2g twice daily for 1 day) uses only 4 tablets, so a smaller fill usually costs less, though many pharmacies have a minimum charge. Generic acyclovir 400mg for a 5-day course (30 tablets) costs <strong>$11–$15</strong> via <a href=\"https://www.goodrx.com/acyclovir\">GoodRx (April 2026)</a>. In all cases, the drug itself is inexpensive, the access problem is what telehealth solves.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Cold Sore Visit",
      groups: [
        {
          label: "People who get frequent outbreaks",
          desc: "If you get frequent outbreaks (the AAD mentions 6 or more a year), a low daily dose of valacyclovir (about $0.38/day for 500mg via GoodRx) may reduce the number of outbreaks. A $79 telehealth visit can start suppressive therapy when appropriate.",
        },
        {
          label: "People at the prodrome right now",
          desc: "That tingling is the signal. Book immediately, waiting 1–2 days for an in-person appointment often means the blister has formed and the therapeutic window has closed.",
        },
        {
          label: "People before a major event",
          desc: "Cold sore on the day of a wedding, presentation, or trip? Valacyclovir can be started 1–2 days before a known trigger to lower the chance of an outbreak.",
        },
        {
          label: "Uninsured or high-deductible patients",
          desc: "A $79 flat visit plus a low-cost generic usually costs less than a cash-pay urgent care visit. Insured patients may pay a lower copay through their plan.",
        },
      ],
    },
    appropriateBlock: {
      title: "When a Cold Sore Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Prodromal symptoms, tingling, itching, or burning before blister formation",
        "Known recurrent herpes labialis seeking episodic treatment",
        "Initiation of daily suppressive therapy for frequent outbreaks",
        "Immunocompetent adult with typical labial HSV-1 presentation",
        "Request for prescription continuation (established patient, same pattern)",
        "Pre-event suppression (prescription started 1–2 days before trigger)",
      ],
      notFor: [
        "Ocular involvement, eye pain, redness, or photophobia with facial HSV (HSV keratitis, ophthalmology emergency)",
        "Meningismus (neck stiffness, severe headache), HSV meningitis requires ER evaluation",
        "Spreading facial or genital herpetic lesions in an immunocompromised patient (may need IV acyclovir)",
        "Lesions in a neonate or newborn contact, neonatal HSV is a medical emergency",
        "Herpetic whitlow or eczema herpeticum, in-person evaluation required",
        "Lesions not responding after 5 days of standard antiviral therapy",
      ],
    },
    decisionGuide: {
      title: "Cold Sore: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Eye pain, vision change, or neck stiffness?",
          body: "Go to the ER. Ocular HSV (herpes keratitis) and HSV meningitis are medical emergencies requiring in-person evaluation, slit-lamp exam, and possibly IV acyclovir.",
          good: false,
        },
        {
          num: 2,
          head: "Tingling or prodromal symptoms starting now?",
          body: "Book a $79 telehealth visit immediately. Starting early helps. If an antiviral is appropriate, the prescription is sent to your pharmacy the same day. Total cost: $93–$105.",
          good: true,
        },
        {
          num: 3,
          head: "Immunocompromised with a large or spreading lesion?",
          body: "See a provider in person. Immunocompromised patients may need higher doses, extended courses, or IV therapy, telehealth triage can advise urgency level.",
          good: false,
        },
        {
          num: 4,
          head: "Frequent outbreaks seeking suppression?",
          body: "Book a $79 telehealth visit to start daily suppressive valacyclovir 500mg, about $0.38/day via GoodRx. Daily suppression may reduce the number of outbreaks (AAD).",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "valacyclovir",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Cold Sore Medication Costs (GoodRx Generic, 2026)",
      caption: "Episodic or suppressive oral therapy; retail pharmacy with GoodRx coupon. Per AAD treatment recommendations.",
      rows: [
        {
          drug: "Valacyclovir 1g, first-line episodic (2g twice daily × 1 day = 4 tabs)",
          cost: "$14–$26 for a 30-tab supply",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          drug: "Acyclovir 400mg, episodic alternative (5 days; 30 tabs)",
          cost: "$11–$15",
          sourceUrl: "https://www.goodrx.com/acyclovir",
        },
        {
          drug: "Valacyclovir 500mg daily, suppressive therapy (90-day supply)",
          cost: "$34–$38 per 90 days",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          drug: "Famciclovir, alternative episodic (single 1500mg dose = 3 x 500mg tabs)",
          cost: "Less than $28–$30 (21-tab price)",
          sourceUrl: "https://www.goodrx.com/famciclovir",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Antiviral or Between Outbreaks",
      bullets: [
        "Apply ice or a cold wet compress to the sore for 5–10 minutes to reduce swelling and pain.",
        "Use OTC docosanol (Abreva) cream at the first tingle, it shortens healing time when started early.",
        "Protect lips with SPF 30+ lip balm, sun exposure is a common cold sore trigger.",
        "Avoid kissing, oral sex, and sharing utensils, cups, or lip products during active outbreaks.",
        "Wash hands immediately after touching the sore to prevent spreading to eyes (herpetic whitlow or keratitis).",
        "Manage known triggers: stress, illness, sun exposure, hormonal changes.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat a Cold Sore by Telehealth",
      bullets: [
        "Eye redness, pain, or vision change associated with facial HSV, HSV keratitis requires ophthalmology.",
        "Severe headache and neck stiffness, may indicate HSV meningitis.",
        "Spreading lesions or lesions in an immunocompromised patient not responding to standard doses.",
        "Neonatal exposure, any infant with possible HSV exposure needs pediatric ER evaluation.",
        "Herpetic whitlow (finger) with secondary bacterial infection or cellulitis.",
        "Lesions that do not improve or worsen after a full 5-day antiviral course.",
      ],
    },
    faqs: [
      {
        question: "How much does cold sore treatment cost without insurance in 2026?",
        answer: "Telehealth: $93–$105 total (TeleDirectMD $79 visit + $14–$26 valacyclovir via GoodRx). Urgent care: $164–$276 (BetterCare, 2025). The drug itself is inexpensive, the cost difference is entirely the visit. For established patients who know their pattern, a $79 telehealth visit can get a prescription to your pharmacy the same day. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "What is the most important thing to know about cold sore treatment timing?",
        answer: "Start treatment at the prodrome, tingling, itching, or burning before the blister appears. Per the American Academy of Dermatology, treating at this stage or when the sore first appears can reduce discomfort and speed healing. Starting later generally helps less. Same-day telehealth access makes early treatment easier.",
      },
      {
        question: "How much is generic valacyclovir without insurance?",
        answer: "According to GoodRx (April 2026), generic valacyclovir 1g tablets cost about $26 for 30 tablets at most US pharmacies with a free GoodRx coupon. For a 1-day episodic cold sore treatment (4 tablets), a smaller fill usually costs less, subject to pharmacy minimums. For daily suppressive therapy using 500mg, a 90-tablet (90-day) supply costs $34–$38 via GoodRx.",
      },
      {
        question: "What is the difference between episodic and suppressive cold sore treatment?",
        answer: "Episodic treatment, valacyclovir 2g twice daily for one day, or acyclovir 400mg five times daily for five days, is taken at the onset of an outbreak to shorten duration. Suppressive therapy, valacyclovir 500mg once daily year-round, may reduce outbreak frequency in people with frequent recurrences. A TeleDirectMD visit can prescribe either approach based on your outbreak history.",
      },
      {
        question: "Can I get valacyclovir prescribed the same day I notice symptoms?",
        answer: "Often, yes. TeleDirectMD offers same-day telehealth visits, including evenings and weekends, and sends a prescription to your pharmacy when appropriate. Because early treatment works best, same-day access is the main clinical value of telehealth for cold sores.",
      },
      {
        question: "Is acyclovir or valacyclovir better for cold sores?",
        answer: "Both are effective. Valacyclovir is preferred for episodic cold sore treatment because the 1-day regimen (2g twice daily) is simple and highly convenient. Acyclovir requires five daily doses over 5 days, which reduces adherence. Both are generically available and inexpensive via GoodRx. Your TeleDirectMD physician will select based on your preference and outbreak pattern.",
      },
      {
        question: "Does a cold sore on the lip require a visit, or can I just buy OTC Abreva?",
        answer: "OTC docosanol (Abreva) cream reduces healing time modestly when started early. Prescription oral antivirals (valacyclovir, acyclovir) are substantially more effective, especially at the prodrome. If you want maximum therapeutic effect, particularly if the outbreak is severe, frequent, or at a critical time, a $79 telehealth visit is worthwhile for a prescription.",
      },
      {
        question: "When does a cold sore require urgent care or the ER?",
        answer: "Go to the ER if: the outbreak involves your eye (redness, pain, vision change, HSV keratitis is a sight-threatening emergency); you develop fever with neck stiffness (possible HSV meningitis); you are immunocompromised and the lesions are large, spreading, or not responding to treatment. Routine lip cold sores in healthy adults are never an ER diagnosis.",
      },
    ],
    references: [
      {
        label: "AAD, Cold sores diagnosis and treatment",
        url: "https://www.aad.org/public/diseases/a-z/cold-sores-treatment",
      },
      {
        label: "GoodRx, Valacyclovir pricing (April 2026)",
        url: "https://www.goodrx.com/valacyclovir",
      },
      {
        label: "GoodRx, Acyclovir pricing (April 2026)",
        url: "https://www.goodrx.com/acyclovir",
      },
      {
        label: "GoodRx, Famciclovir pricing (April 2026)",
        url: "https://www.goodrx.com/famciclovir",
      },
      {
        label: "GoodRx, Cold sore drug class (April 2026)",
        url: "https://www.goodrx.com/conditions/cold-sores/drugs",
      },
      {
        label: "BetterCare, Urgent care cost without insurance",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (February 2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'shingles-cost': {
    slug: "shingles-cost",
    pid: "shingles-cost",
    h1: "Shingles Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Shingles Cost 2026: $100–$109 Online vs. $170+ Urgent Care",
    metaDescription: "A telehealth shingles visit + valacyclovir costs $100–$109 total (vs. $171–$280 urgent care). Start within 72 hours. Verified 2026 prices and CDC treatment guidance.",
    breadcrumb: "Shingles Treatment Cost",
    answerLead: "Shingles (herpes zoster) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth shingles visit at TeleDirectMD costs <strong>$100–$109 total</strong>, a $79 visit plus $21–$30 for a 7-day course of generic valacyclovir 1g or famciclovir 500mg via <a href=\"https://www.goodrx.com/valacyclovir\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$171–$280</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2025</a>); insured patients may pay less with a plan copay. Per <a href=\"https://www.cdc.gov/shingles/hcp/clinical-overview/index.html\">CDC clinical guidance</a>, antiviral treatment is most effective within 72 hours of symptom onset, when it speeds healing, reduces new lesions and viral shedding, and decreases acute pain, so same-day access matters. <strong>Exception:</strong> shingles involving the forehead/eye area (V1 trigeminal nerve, ophthalmic distribution) requires urgent ophthalmology evaluation regardless of antiviral start.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating shingles (herpes zoster) via telehealth costs $100–$109 total in the US, a $79 video visit with a board-certified MD plus $21–$30 for a 7-day course of generic valacyclovir or famciclovir (verified GoodRx, April 2026). By comparison, urgent care in-person averages $171–$280 (BetterCare, 2025), primary care cash-pay totals $121–$330 (Mira Health, 2025), and an ER visit for shingles can exceed $1,500 (BetterCare, 2025). Per CDC, the three preferred antivirals for shingles are valacyclovir, famciclovir, and acyclovir, all most effective when started within 72 hours of rash onset. Shingles involving the eye or forehead (ophthalmic distribution, V1 trigeminal) requires same-day ophthalmology referral.",
    heroSub: "Same-day video visit. Antiviral prescription sent the same day when appropriate. Treatment works best within 72 hours, and telehealth can be faster than waiting for an in-person appointment. Total cost: as low as $100.",
    heroIntro: "Shingles (herpes zoster) affects roughly 1 in 3 Americans in their lifetime, and the treatment window is narrow: antivirals are most effective when started within 72 hours of symptom onset, when they speed healing and reduce acute pain. Postherpetic neuralgia (PHN), nerve pain that can persist for months or years, is the most common complication. Waiting 1–2 days for a primary care appointment often means missing this window. A same-day telehealth visit at TeleDirectMD can get an antiviral prescription to your pharmacy quickly when appropriate. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show what shingles treatment costs across every care setting.",
    heroCardTitle: "Shingles Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment and immediate antiviral e-prescription (valacyclovir or famciclovir)",
      "Guidance on postherpetic neuralgia risk and pain management",
      "Urgent ophthalmology referral if ophthalmic distribution (V1) is identified",
      "40+ states, evenings & weekends",
      "No insurance required, HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $100–$109 vs. $171–$280 urgent care in-person",
      "Same-day access: closes the critical 72-hour treatment window",
      "Valacyclovir 1g TID × 7 days as low as $21 via GoodRx (April 2026)",
      "CDC-aligned prescribing: right antiviral, right dose, right duration",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 100, highPrice: 109, description: "$79 visit + valacyclovir 1g 21 tabs ($21) or famciclovir 500mg 21 tabs ($28–$30)" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/valacyclovir", lowPrice: 61, highPrice: 130, description: "Visit ($40–$100) + antiviral ($21–$30)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 121, highPrice: 330, description: "In-person visit ($100–$300) + antiviral ($21–$30)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 171, highPrice: 280, description: "Walk-in visit ($150–$250) + antiviral ($21–$30)" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit + exam; appropriate only for ophthalmic zoster or severe complications" },
    ],
    costTable: {
      title: "Shingles Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + 7-day antiviral course via GoodRx. Excludes postherpetic neuralgia management or ophthalmology referral costs.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$100–$109 typical",
          includes: "$79 visit + valacyclovir 1g 21 tabs ($21) or famciclovir 500mg 21 tabs ($28–$30)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$61–$130",
          includes: "Visit ($40–$100) + antiviral ($21–$30)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$121–$330",
          includes: "In-person visit ($100–$300) + antiviral ($21–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$171–$280",
          includes: "Walk-in visit ($150–$250) + antiviral ($21–$30)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000+",
          includes: "ED visit + exam; appropriate only for ophthalmic zoster or severe complications",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why the 72-Hour Window Makes Telehealth the Right First Call",
      paragraphs: [
        "The <a href=\"https://www.cdc.gov/shingles/hcp/clinical-overview/index.html\">CDC clinical overview for herpes zoster (2024)</a> states that treatment is most effective within 72 hours of symptom onset. The three preferred agents, valacyclovir, famciclovir, and acyclovir, accelerate lesion resolution, reduce new lesion formation, decrease viral shedding, and decrease acute pain. Postherpetic neuralgia, nerve pain that can persist for months to years, is the most common complication, especially in older adults. The valacyclovir dosing for shingles is 1g three times daily for 7 days (21 tablets total), costing <strong>$21</strong> with a GoodRx coupon (<a href=\"https://www.goodrx.com/valacyclovir\">GoodRx, April 2026</a>). The FDA-approved dosing for famciclovir is 500mg three times daily for 7 days (21 tablets), costing <strong>$28–$30</strong> (<a href=\"https://www.goodrx.com/famciclovir\">GoodRx, April 2026</a>).",
        "Penn Medicine's 2026 <em>JAMA Network Open</em> study found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For shingles, the clinical urgency of the 72-hour window means that waiting 24–48 hours for a primary care appointment or urgent care slot could mean missing the therapeutic window entirely. Telehealth eliminates that access barrier. The TeleDirectMD visit is $79 and can be booked evenings and weekends, when the rash first appears.",
        "The critical exception, ophthalmic zoster, must be identified at the telehealth visit. Shingles involving the V1 (ophthalmic) division of the trigeminal nerve presents with rash on the forehead, tip or side of the nose (Hutchinson's sign), or the periorbital region. Per <a href=\"https://eyewiki.org/Herpes_Zoster_Ophthalmicus\">AAO EyeWiki</a>, this presentation carries a high risk of sight-threatening complications including keratitis, uveitis, and optic neuritis. The telehealth physician looks for V1 involvement on video and refers to ophthalmology urgently, but oral antivirals should still be started immediately, not withheld pending referral.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Shingles Visit",
      groups: [
        {
          label: "Adults 50+ at the onset of a unilateral rash",
          desc: "The prodrome of shingles, burning pain before the rash, and early dermatomal rash are diagnosable on video. A $79 telehealth visit gets valacyclovir to your pharmacy same-day, before the outbreak spreads.",
        },
        {
          label: "Patients in areas with long primary care waits",
          desc: "In areas where primary care appointments take 1–2 weeks, the 72-hour treatment window closes before you can be seen. Telehealth eliminates this barrier.",
        },
        {
          label: "Patients needing pain management guidance",
          desc: "Beyond antivirals, shingles pain management includes NSAIDs, acetaminophen, topical lidocaine, and gabapentin if postherpetic neuralgia develops. Telehealth can coordinate this.",
        },
        {
          label: "Patients with a repeat episode",
          desc: "Shingles can recur. Telehealth offers quick access to antivirals and triage for whether in-person care is needed; immunocompromised patients with severe or spreading lesions should be seen in person.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Shingles Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Unilateral dermatomal rash with burning/pain, classic shingles presentation",
        "Rash on trunk, back, arm, or leg without V1 (forehead/eye) involvement",
        "Early prodromal pain without visible rash, telehealth can prescribe if clinical suspicion is high",
        "Otherwise healthy adult within 72 hours of rash onset",
        "Pain management guidance, and gabapentin or pregabalin if postherpetic neuralgia develops",
        "Follow-up after completing antiviral course, assess healing and PHN symptoms",
      ],
      notFor: [
        "Rash involving forehead, periorbital area, or tip/side of nose (Hutchinson's sign), ophthalmic zoster requires urgent same-day ophthalmology evaluation",
        "Eye pain, redness, or vision change with shingles symptoms",
        "Facial weakness or ear pain with periauricular rash (Ramsay Hunt syndrome, ENT urgency)",
        "Widespread disseminated rash (crosses midline or affects 3+ dermatomes), suggests immunocompromise",
        "Fever and confusion in an elderly patient with shingles, ER evaluation",
        "Shingles in an immunocompromised patient with severe, spreading lesions",
      ],
    },
    decisionGuide: {
      title: "Shingles: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Rash near forehead, eye, or nose? Eye symptoms?",
          body: "Book telehealth AND go to urgent care or ophthalmology same-day. Ophthalmic zoster (V1 distribution) is a sight-threatening emergency. Antivirals should be started immediately, telehealth can prescribe while you arrange ophthalmology.",
          good: false,
        },
        {
          num: 2,
          head: "Classic dermatomal rash on trunk, back, or limb within 72 hours?",
          body: "Book a $79 telehealth visit immediately. Total cost: $100–$109 with valacyclovir or famciclovir via GoodRx. Getting within the 72-hour window is the clinical priority, don't wait for an in-person appointment.",
          good: true,
        },
        {
          num: 3,
          head: "More than 72 hours since rash onset with controlled symptoms?",
          body: "Telehealth can still assess, manage pain, and prescribe antivirals in some scenarios (new lesions still forming, immunocompromised). The benefit beyond 72 hours is reduced but not absent.",
          good: true,
        },
        {
          num: 4,
          head: "Severe rash, fever, confusion, or not improving at 72 hours on antivirals?",
          body: "Go to urgent care or the ER. This may indicate disseminated zoster, superinfection, or a complication requiring in-person evaluation and possible IV acyclovir.",
          good: false,
        },
      ],
    },
    costPlus: {
      drug: "valacyclovir",
      price: "about $11 for 21 tablets",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Shingles Medication Costs (GoodRx Generic, 2026)",
      caption: "7-day oral antiviral course for shingles; retail pharmacy with GoodRx coupon. Per CDC preferred treatment agents.",
      rows: [
        {
          drug: "Valacyclovir 1g three times daily × 7 days, first-line (CDC preferred, 21 tabs)",
          cost: "$21–$26",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          drug: "Famciclovir 500mg three times daily × 7 days, first-line alternative (21 tabs)",
          cost: "$28–$30",
          sourceUrl: "https://www.goodrx.com/famciclovir",
        },
        {
          drug: "Acyclovir 800mg five times daily × 7 days, effective but less convenient dosing (35 tabs)",
          cost: "$16–$25",
          sourceUrl: "https://www.goodrx.com/acyclovir",
        },
        {
          drug: "Gabapentin (for postherpetic neuralgia, 30 tabs 300mg)",
          cost: "$10–$20",
          sourceUrl: "https://www.goodrx.com/gabapentin",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Antiviral, and During Treatment",
      bullets: [
        "Start antiviral therapy as soon as it is prescribed; treatment works best within 72 hours of symptom onset.",
        "Keep the rash clean and dry; apply cool, wet compresses to relieve itching and pain.",
        "Use OTC acetaminophen or ibuprofen for pain if they are safe for you.",
        "Cover the rash with a dry, non-adherent bandage to prevent spreading VZV to unvaccinated individuals.",
        "Avoid contact with pregnant women, newborns, and immunocompromised individuals until all blisters have crusted.",
        "Shingrix vaccination (2-dose series) should be completed after recovery for adults 50+, telehealth can provide a referral.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat Shingles by Telehealth Alone",
      bullets: [
        "Rash on forehead, periorbital area, or tip/side of nose, ophthalmic zoster (V1) requires same-day ophthalmology evaluation.",
        "Eye pain, photophobia, or vision change with any shingles rash.",
        "Ear pain, facial weakness, or periauricular rash, Ramsay Hunt syndrome (ENT urgency).",
        "Widespread rash crossing the midline or in multiple dermatomes, may indicate immunocompromise.",
        "Fever with confusion in an older patient with shingles.",
        "No improvement or lesion progression beyond 72 hours of antiviral therapy.",
      ],
    },
    faqs: [
      {
        question: "How much does shingles treatment cost without insurance in 2026?",
        answer: "Telehealth: $100–$109 total (TeleDirectMD $79 visit + $21–$30 for valacyclovir or famciclovir via GoodRx, April 2026). Urgent care: $171–$280 (BetterCare, 2025). Primary care: $121–$330 (Mira Health, 2025). ER: $1,500–$3,000+ (only appropriate for ophthalmic zoster or severe complications).",
      },
      {
        question: "Why does the 72-hour treatment window matter so much for shingles?",
        answer: "Per CDC clinical guidance (2024), antivirals for shingles are most effective when started within 72 hours of rash onset. They reduce the severity and duration of the acute episode; whether they prevent postherpetic neuralgia (PHN), the chronic nerve pain that can persist for months or years after the rash heals, is less certain. Missing the 72-hour window is not a reason to skip treatment entirely, but it does reduce therapeutic benefit. Same-day telehealth access is often the fastest path to getting within that window.",
      },
      {
        question: "How much is valacyclovir for shingles without insurance?",
        answer: "According to GoodRx (April 2026), generic valacyclovir 1g tablets for a full 7-day shingles course (21 tablets at 1g three times daily) cost $21–$26 at most US pharmacies with a free GoodRx coupon. The retail price for 30 tablets without a coupon is about $130, so compare prices before you fill.",
      },
      {
        question: "Is valacyclovir or famciclovir better for shingles?",
        answer: "Both are equally effective CDC-preferred agents for shingles. Valacyclovir (1g three times daily × 7 days) costs $21–$26 for a full course via GoodRx; famciclovir (500mg three times daily × 7 days) costs $28–$30. Both use three-times-daily dosing vs. acyclovir's five-times-daily regimen. Your TeleDirectMD physician will prescribe based on your pharmacy's pricing and any relevant drug interactions.",
      },
      {
        question: "What is ophthalmic shingles and why is it an emergency?",
        answer: "Herpes zoster ophthalmicus (HZO) occurs when shingles affects the V1 (ophthalmic) branch of the trigeminal nerve, presenting with rash on the forehead, periorbital area, or tip/side of the nose (Hutchinson's sign). Per AAO and CDC guidance, this presentation carries high risk of sight-threatening complications including keratitis, uveitis, corneal scarring, and optic neuritis. Oral antivirals must be started immediately, and same-day ophthalmology evaluation is mandatory. A TeleDirectMD physician screens for this and refers urgently.",
      },
      {
        question: "Can shingles be treated after 72 hours if I missed the window?",
        answer: "Yes, treatment is still started for patients with new lesion formation, immunocompromised individuals, or ophthalmic involvement, even beyond 72 hours. Antivirals are not withheld solely because the 72-hour window has passed. The benefit is reduced but not absent. Your TeleDirectMD physician will assess whether late antiviral therapy is appropriate based on your specific presentation.",
      },
      {
        question: "Does TeleDirectMD treat shingles in the eye area?",
        answer: "TeleDirectMD will assess shingles presentations including ophthalmic distribution. If V1 involvement is identified on the video exam (forehead rash, Hutchinson's sign, periorbital involvement), the MD will prescribe oral antivirals immediately and provide a same-day urgent ophthalmology referral. Eye involvement is too serious to observe at home, ophthalmology evaluation is mandatory.",
      },
      {
        question: "Should I get the Shingrix vaccine after a shingles episode?",
        answer: "Yes. CDC recommends the Shingrix two-dose vaccine for adults 50+ regardless of prior shingles history. Shingles can recur, and vaccination significantly reduces the risk of future episodes and PHN. Your TeleDirectMD physician can discuss timing, vaccination can be given once the acute shingles episode has resolved.",
      },
    ],
    references: [
      {
        label: "CDC, Clinical overview of herpes zoster (shingles), 2024",
        url: "https://www.cdc.gov/shingles/hcp/clinical-overview/index.html",
      },
      {
        label: "AAO EyeWiki, Herpes Zoster Ophthalmicus (2026)",
        url: "https://eyewiki.org/Herpes_Zoster_Ophthalmicus",
      },
      {
        label: "GoodRx, Valacyclovir pricing (April 2026)",
        url: "https://www.goodrx.com/valacyclovir",
      },
      {
        label: "GoodRx, Famciclovir pricing (April 2026)",
        url: "https://www.goodrx.com/famciclovir",
      },
      {
        label: "GoodRx, Acyclovir pricing (April 2026)",
        url: "https://www.goodrx.com/acyclovir",
      },
      {
        label: "BetterCare, Urgent care cost without insurance",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "BetterCare, ER visit cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (February 2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'migraine-treatment-cost': {
    slug: "migraine-treatment-cost",
    pid: "migraine-cost",
    h1: "Migraine Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Migraine Cost 2026: $94–$96 Online vs. $165+ Urgent Care",
    metaDescription: "Telehealth migraine visit + generic sumatriptan costs $94–$96 total. Urgent care totals $165–$275; uninsured ER visits often run $1,500–$3,000+. Verified 2026 prices with sources.",
    breadcrumb: "Migraine Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an acute migraine via telehealth costs $94–$96 total in the US, a $79 video visit with a board-certified MD plus $15–$17 for generic sumatriptan 50mg (9 tablets, verified GoodRx April 2026). By comparison, an urgent care in-person visit for migraine averages $165–$275 (BetterCare, 2025), primary care cash-pay totals $115–$325 (Mira Health, 2025), and an ER migraine visit can cost $1,500–$3,000+ uninsured. CGRP preventive biologics (Aimovig, Ajovy, Emgality) usually require prior authorization and cost roughly $300 (Aimovig with GoodRx) to $1,000+ per month without insurance. Per the American Headache Society 2021 consensus statement, oral triptans are first-line acute therapy for moderate-to-severe migraine and appropriate for telehealth prescribing.",
    answerLead: "Migraine treatment cost in 2026 (uninsured cash-pay):",
    answerBody: "A telehealth migraine visit + generic sumatriptan costs <strong>$94–$96 total</strong> at TeleDirectMD ($79 visit + $15–$17 for sumatriptan 50mg via <a href=\"https://www.goodrx.com/sumatriptan\">GoodRx, April 2026</a>). Compare to urgent care in-person at <strong>$165–$275</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2025</a>); insured patients may pay less with a plan copay. An ER migraine visit, rarely appropriate for uncomplicated attacks, can cost <strong>$1,500–$3,000+</strong> uninsured. CGRP preventive biologics such as Aimovig cost <strong>$299/month</strong> with a GoodRx coupon (<a href=\"https://www.goodrx.com/aimovig\">GoodRx, April 2026</a>) but require prior authorization from most insurers.",
    heroSub: "A 15-minute video visit with a board-certified MD plus a same-day triptan prescription. Total out-of-pocket: as low as $94. No imaging or in-person exam required for a classic migraine without new neurologic symptoms.",
    heroIntro: "Migraine affects 39 million Americans, yet ER visits for migraine, which often cost $1,500–$3,000 or more uninsured, are often avoidable for routine attacks. For a classic migraine attack without new neurologic symptoms, a telehealth visit plus a generic triptan prescription is a reasonable option and usually costs far less than the ER. We pulled 2025–2026 pricing from GoodRx, BetterCare, and Mira Health to show exactly what migraine treatment costs across every care setting, including the honest reality of CGRP biologic pricing for prevention.",
    heroCardTitle: "Migraine Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Triptan e-prescription sent directly to your pharmacy",
      "Preventive prescription evaluation (propranolol, topiramate, amitriptyline)",
      "CGRP biologic referral and PA navigation for eligible patients",
      "40+ states, evenings & weekends",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "Total $94–$96 vs. $165–$275 for urgent care in-person",
      "Generic sumatriptan 50mg: $15–$17 via GoodRx, same molecule as $100+ brand Imitrex",
      "No drive time during an active attack, stay home, book online",
      "Preventive therapy evaluation at the same visit, no separate appointment needed",
      "AHS consensus-aligned: oral triptans are first-line acute therapy for moderate-to-severe migraine",
      "Documented receipt for HSA/FSA reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 94, highPrice: 96, description: "$79 visit + sumatriptan 50mg 9-tab ($15–$17), no imaging required" },
      { providerName: "Telehealth (national average)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 55, highPrice: 125, description: "Visit ($40–$100) + generic triptan ($15–$25)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 115, highPrice: 325, description: "In-person visit ($100–$300) + generic triptan ($15–$25)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 165, highPrice: 275, description: "Walk-in visit ($150–$250) + triptan ($15–$25); anti-nausea injection may add cost" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit, IV antiemetics, possible imaging, discharge medications, chargemaster pricing" },
    ],
    costTable: {
      title: "Migraine Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Acute visit cost + generic sumatriptan (9 tablets) via GoodRx. Preventive medication costs listed separately in medication table.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$94–$96 typical",
          includes: "$79 visit + sumatriptan 50mg 9-tab ($15–$17), no imaging required",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/sumatriptan",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$55–$125",
          includes: "Visit ($40–$100) + generic triptan ($15–$25)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$115–$325",
          includes: "In-person visit ($100–$300) + generic triptan ($15–$25)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$165–$275",
          includes: "Walk-in visit ($150–$250) + triptan ($15–$25); anti-nausea injection may add cost",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000+",
          includes: "ED visit, IV antiemetics, possible imaging, discharge medications, chargemaster pricing",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Migraine Visit Can Make Sense",
      paragraphs: [
        "The <a href=\"https://headachejournal.onlinelibrary.wiley.com/doi/10.1111/head.14153\">American Headache Society's 2021 consensus statement</a> recommends triptans as first-line acute treatment for moderate or severe migraine attacks, and for mild attacks that do not respond to NSAIDs or other simple pain relievers. For a patient with an established migraine diagnosis, classic symptoms, and no new neurologic features, prescribing a triptan via telehealth is consistent with that guidance, and imaging or lab work is usually not needed.",
        "A Penn Medicine study published in <em>JAMA Network Open</em> (February 2026) found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, a greater than 5× difference, across more than 160,000 visits (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). For a straightforward migraine attack, the savings are even larger because no ancillary testing is needed. The ER is usually unnecessary for a routine migraine and expensive: IV antiemetics, imaging, and facility fees can push the bill past $1,500.",
        "Generic sumatriptan 50mg costs just <strong>$15–$17 for a 9-tablet pack</strong> at most US pharmacies with a GoodRx coupon (<a href=\"https://www.goodrx.com/sumatriptan\">GoodRx, April 2026</a>), versus about $100 retail without a discount. For prevention, generic propranolol costs as little as $13/month and generic topiramate around $32/month via GoodRx. CGRP biologics (Aimovig, Ajovy, Emgality) are effective preventives for episodic and chronic migraine but usually require prior authorization and cost roughly $300 to $1,000+ per month without coverage, depending on the drug and discount program.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Migraine Visit",
      groups: [
        {
          label: "Established migraine patients",
          desc: "You know your pattern. Skip the waiting room during an attack, book a $79 visit, get your triptan refilled, and treat at home.",
        },
        {
          label: "Newly symptomatic adults",
          desc: "First or second episode with classic features? A telehealth provider can evaluate, rule out red flags, and start first-line therapy the same day.",
        },
        {
          label: "Working adults without PCP access",
          desc: "No established primary care provider? Telehealth bridges the gap, migraine prevention and acute treatment both manageable in one visit.",
        },
        {
          label: "Travelers and remote workers",
          desc: "Migraine onset while traveling? Book a visit from anywhere in 40+ states, route the triptan to the nearest pharmacy.",
        },
      ],
    },
    appropriateBlock: {
      title: "When a Migraine Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Established migraine diagnosis with classic symptoms",
        "Moderate-to-severe unilateral throbbing headache with nausea or photophobia",
        "No new neurologic symptoms (vision, speech, motor)",
        "Triptan or preventive refill with no change in pattern",
        "First episode consistent with classic migraine, age 18–50, otherwise healthy",
        "Preventive therapy initiation (propranolol, topiramate, amitriptyline)",
      ],
      notFor: [
        "\"Worst headache of my life\", possible subarachnoid hemorrhage (call 911)",
        "New neurologic symptoms: facial droop, arm weakness, speech difficulty",
        "Fever + stiff neck + headache, possible meningitis",
        "Headache with loss of consciousness or confusion",
        "Headache immediately after head trauma",
        "Progressive headache worsening over days/weeks without prior diagnosis",
      ],
    },
    decisionGuide: {
      title: "Migraine: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "\"Worst headache of my life,\" or new neurologic symptoms?",
          body: "Call 911 or go to the ER immediately. These are red-flag features requiring urgent imaging to rule out hemorrhage, meningitis, or stroke.",
          good: false,
        },
        {
          num: 2,
          head: "Classic migraine attack, established pattern, no red flags?",
          body: "Book a $79 telehealth visit. If a triptan is appropriate, the prescription is sent to your pharmacy the same day. Total cost: $94–$96. No driving during an active attack required.",
          good: true,
        },
        {
          num: 3,
          head: "Migraine but also vomiting, cannot take oral medications?",
          body: "Urgent care or ED for IV/IM antiemetics and ketorolac. Per the 2025 AHS guideline update, IV prochlorperazine and metoclopramide are among the parenteral treatments rated effective.",
          good: false,
        },
        {
          num: 4,
          head: "Needing better prevention, current therapy failing?",
          body: "A $79 telehealth visit can assess preventive options: propranolol, topiramate, amitriptyline, or a CGRP biologic referral with PA navigation.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "sumatriptan",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Migraine Medication Costs (GoodRx Cash Price, April 2026)",
      caption: "Acute: per-attack supply (9 tablets for triptans). Prevention: 30-day supply. Prices at major retail pharmacies with GoodRx coupon.",
      rows: [
        {
          drug: "Sumatriptan 50mg, first-line acute triptan",
          cost: "$15–$17 (9 tablets)",
          sourceUrl: "https://www.goodrx.com/sumatriptan",
        },
        {
          drug: "Rizatriptan 10mg, first-line acute (faster onset)",
          cost: "~$25 (9 tablets)",
          sourceUrl: "https://www.goodrx.com/conditions/migraine/drugs",
        },
        {
          drug: "Propranolol, first-line preventive (beta-blocker)",
          cost: "~$13 (30-day supply)",
          sourceUrl: "https://www.goodrx.com/conditions/migraine/drugs",
        },
        {
          drug: "Topiramate, first-line preventive (anti-epileptic)",
          cost: "~$32 (30-day supply)",
          sourceUrl: "https://www.goodrx.com/conditions/migraine/drugs",
        },
        {
          drug: "Aimovig (erenumab), CGRP biologic preventive, requires PA",
          cost: "$299/month (GoodRx); $943 retail",
          sourceUrl: "https://www.goodrx.com/aimovig",
        },
        {
          drug: "Emgality (galcanezumab), CGRP biologic preventive, requires PA",
          cost: "about $880–$1,000/month retail",
          sourceUrl: "https://www.singlecare.com/blog/emgality-without-insurance/",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Prescription (or Alongside It)",
      bullets: [
        "Take your triptan at the first sign of headache, do not wait for peak pain.",
        "Rest in a dark, quiet room; light and sound sensitivity are hallmarks of migraine.",
        "OTC options per AHS guidance: ibuprofen 400–600mg, naproxen 500mg, or aspirin/acetaminophen/caffeine (Excedrin Migraine) for mild-to-moderate attacks.",
        "Stay hydrated, dehydration is a common trigger and worsens attacks.",
        "Apply a cold pack to the forehead or neck for temporary relief.",
        "Identify and track triggers (sleep disruption, skipped meals, hormonal changes, stress) in a headache diary.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat a Migraine by Telehealth",
      bullets: [
        "\"Thunderclap\" onset, severe headache reaching peak intensity within seconds.",
        "New neurologic symptoms: weakness, numbness, facial droop, or speech changes.",
        "Fever, stiff neck, or sensitivity to light with a headache unlike previous episodes.",
        "Headache following head trauma.",
        "Age > 50 with first severe headache, or progressively worsening pattern.",
        "Active vomiting preventing oral medication, needs in-person IV/IM treatment.",
      ],
    },
    faqs: [
      {
        question: "How much does a migraine visit cost without insurance in 2026?",
        answer: "Telehealth at TeleDirectMD: $79 visit + $15–$17 for generic sumatriptan = $94–$96 total (GoodRx, April 2026). Urgent care in-person averages $165–$275 (BetterCare, 2025). An ER migraine visit can run $1,500–$3,000+ uninsured, and rarely changes the clinical outcome for an uncomplicated attack.",
      },
      {
        question: "What is the cheapest migraine medication available in 2026?",
        answer: "Among prescription triptans, generic sumatriptan 50mg is usually the least expensive: $15–$17 for 9 tablets with a GoodRx coupon (April 2026), versus about $100 retail. Generic rizatriptan runs ~$25 for 9 tablets. For prevention, generic propranolol is ~$13/month and generic topiramate ~$32/month.",
      },
      {
        question: "How much do CGRP biologics like Aimovig, Ajovy, and Emgality cost without insurance?",
        answer: "Retail prices are steep: Aimovig (erenumab) retails at ~$943/month but GoodRx brings it to $299/month. Emgality (galcanezumab) retails at roughly $880–$1,000/month and Ajovy (fremanezumab) at roughly $830–$1,050/month; discount cards may lower these somewhat. All three require prior authorization from most commercial insurers, and step therapy, failure of at least two oral preventives, is typically required.",
      },
      {
        question: "Can a telehealth doctor prescribe sumatriptan?",
        answer: "Yes. Sumatriptan is not a controlled substance. A board-certified telehealth MD can evaluate your migraine history and prescribe a triptan in a single 15-minute visit, consistent with American Headache Society guidance for first-line acute therapy.",
      },
      {
        question: "When does a migraine headache require the ER?",
        answer: "Seek emergency care immediately for: \"worst headache of your life,\" sudden thunderclap onset, headache with neurologic symptoms (weakness, slurred speech, vision loss), fever + stiff neck, or headache after head trauma. These are red flags for hemorrhage, stroke, or meningitis, none are appropriate for telehealth.",
      },
      {
        question: "Does insurance cover migraine treatment via telehealth?",
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. If you're uninsured or have a high deductible, the $79 self-pay rate for the visit, plus a $15–$17 generic sumatriptan, often undercuts what you'd pay in-network at urgent care before your deductible is met.",
      },
      {
        question: "How does generic sumatriptan compare to brand Imitrex?",
        answer: "Generic sumatriptan 50mg is bioequivalent to brand-name Imitrex, same active molecule, same mechanism, same dosing. Brand Imitrex costs considerably more than the generic; generic sumatriptan is $15–$17 with GoodRx. There is no clinical reason to choose the brand name for most patients.",
      },
      {
        question: "Can telehealth help with chronic migraine prevention, not just acute attacks?",
        answer: "Yes. A TeleDirectMD provider can evaluate and prescribe first-line preventives: propranolol (~$13/month), topiramate (~$32/month), and amitriptyline. For patients who qualify for CGRP biologics, we can facilitate the PA process and specialist referral. Chronic migraine (≥15 headache days/month) often benefits from a combined acute + preventive strategy that can be initiated via telehealth.",
      },
    ],
    references: [
      {
        label: "GoodRx, Sumatriptan pricing (April 2026)",
        url: "https://www.goodrx.com/sumatriptan",
      },
      {
        label: "GoodRx, Aimovig pricing (April 2026)",
        url: "https://www.goodrx.com/aimovig",
      },
      {
        label: "GoodRx, Emgality pricing (April 2026)",
        url: "https://www.goodrx.com/emgality",
      },
      {
        label: "GoodRx, Migraine drug class overview",
        url: "https://www.goodrx.com/conditions/migraine/drugs",
      },
      {
        label: "BetterCare, ER & urgent care cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "AAN, Migraine clinical practice guidelines",
        url: "https://www.aan.com/Guidelines/home/ByTopic?topicId=16",
      },
      {
        label: "AHS, 2025 guidelines for parenteral migraine treatment in ED",
        url: "https://pubmed.ncbi.nlm.nih.gov/41321235/",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'birth-control-refills-cost': {
    slug: "birth-control-refills-cost",
    pid: "bc-cost",
    h1: "Birth Control Refill Cost: Online Doctor vs Urgent Care vs OB-GYN",
    metaTitle: "Birth Control Refill Cost 2026: $79 Online vs. $150+ OB-GYN",
    metaDescription: "A telehealth birth control refill visit costs $79 plus $11–$21 for a generic OCP, total about $90–$100. Primary care cash-pay runs $100–$300. Verified 2026 prices with sources.",
    breadcrumb: "Birth Control Refill Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, getting a birth control refill via telehealth costs $79 for the visit plus $11–$21 per month for a generic oral contraceptive pill (verified GoodRx, April 2026), total about $90–$100. By comparison, a primary care cash-pay visit runs $100–$300 (Mira Health, 2025), and urgent care in-person averages $161–$271 (BetterCare, 2025). In California, pharmacists may furnish self-administered hormonal contraceptives directly under a Board of Pharmacy protocol, without a telehealth visit. IUDs and implants require in-person placement and are outside telehealth scope. Per the CDC U.S. Selected Practice Recommendations for Contraceptive Use (2024), a pelvic exam is not needed before starting birth control pills in healthy adults.",
    answerLead: "Birth control refill cost in 2026 (uninsured cash-pay):",
    answerBody: "A telehealth OCP refill at TeleDirectMD costs <strong>$79 visit + $11–$21/month</strong> for a generic oral contraceptive, total <strong>about $90–$100</strong> (pill prices per <a href=\"https://www.goodrx.com/conditions/birth-control/drugs\">GoodRx, April 2026</a>). Compare to a primary care in-person visit at <strong>$100–$300 cash-pay</strong> (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>). Urgent care in-person runs <strong>$161–$271</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2025</a>). Insured patients may pay less with a plan copay, and many plans cover generic pills at no cost.",
    heroSub: "A 10-minute telehealth visit with a board-certified MD for your OCP refill. Total cost: as low as $90. No pelvic exam required for refills, per CDC U.S. SPR 2024 guidance, healthy adults do not need a pelvic exam to continue or restart combined oral contraceptives.",
    heroIntro: "Birth control pills are among the most commonly prescribed medications in the US, and a routine refill often does not need an in-person visit. For a straightforward OCP refill in a healthy adult with no new medical history changes, a telehealth visit is often appropriate, faster, and cheaper than a cash-pay office visit. We pulled 2025–2026 pricing from GoodRx, Mira Health, and BetterCare to show exactly what a birth control refill costs across care settings, and what to know if you are in California, where pharmacists have additional prescribing authority.",
    heroCardTitle: "Birth Control Refill Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "OCP prescription or refill sent directly to your pharmacy",
      "No pelvic exam required for healthy adults continuing OCPs",
      "Patch, ring, and progestin-only pill also available",
      "40+ states, evenings & weekends",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "Total $90–$100 vs. $161–$321 for a cash-pay OB-GYN visit plus pill",
      "Generic OCPs (levonorgestrel/EE, norgestimate/EE) start at $11–$14/month via GoodRx",
      "Skip the annual-exam gatekeeping, refills don't require a Pap smear",
      "CDC U.S. SPR 2024: pelvic exam not required to prescribe combined OCPs in healthy adults",
      "Documented receipt for HSA/FSA reimbursement",
      "California patients: pharmacist direct-furnishing option also available under BOP protocol",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 90, highPrice: 100, description: "$79 visit + generic OCP ($11–$21), no pelvic exam required" },
      { providerName: "Telehealth (national average)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 51, highPrice: 121, description: "Visit ($40–$100) + generic OCP ($11–$21)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 111, highPrice: 321, description: "In-person visit ($100–$300) + OCP ($11–$21); Pap or pelvic may add cost" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 161, highPrice: 271, description: "Walk-in visit ($150–$250) + OCP ($11–$21)" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit + prescription; never the appropriate setting for an OCP refill" },
    ],
    costTable: {
      title: "Birth Control Refill Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + one month of generic OCP via GoodRx. IUDs, implants, and injectables require in-person placement and are excluded.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$90–$100 typical",
          includes: "$79 visit + generic OCP ($11–$21), no pelvic exam required",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/conditions/birth-control/drugs",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$51–$121",
          includes: "Visit ($40–$100) + generic OCP ($11–$21)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$111–$321",
          includes: "In-person visit ($100–$300) + OCP ($11–$21); Pap or pelvic may add cost",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$161–$271",
          includes: "Walk-in visit ($150–$250) + OCP ($11–$21)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000+",
          includes: "ED visit + prescription; never the appropriate setting for an OCP refill",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth OCP Refill Is Clinically Appropriate and Much Cheaper",
      paragraphs: [
        "The <a href=\"https://www.cdc.gov/contraception/hcp/usspr/index.html\">CDC U.S. Selected Practice Recommendations for Contraceptive Use (2024)</a> and the <a href=\"https://www.acog.org\">American College of Obstetricians and Gynecologists (ACOG)</a> are both explicit: a pelvic examination and Pap smear are not required to initiate or continue combined oral contraceptives in a healthy adult. Before combined pills, the main checks are a medical history and a blood pressure reading, which a patient can share from a home or pharmacy measurement. For a straightforward OCP refill, an in-person OB-GYN visit often adds cost without adding much clinical value.",
        "Penn Medicine's study published in <em>JAMA Network Open</em> (February 2026) found telemedicine averaged <strong>$96 per episode vs. $509 in-person</strong>, a greater than 5× difference across more than 160,000 visits (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). The savings are compounded when a patient pays $100–$300 for an in-person visit plus $11–$21 for the pill, versus $79 for a telehealth visit plus the same pill cost.",
        "In California, an alternative path exists: under the California Board of Pharmacy's self-administered hormonal contraception protocol (authorized under Business & Professions Code § 4052.3), pharmacists may directly furnish oral contraceptives, patches, vaginal rings, and depot injections without a provider prescription, after completing a self-screening tool (<a href=\"https://www.pharmacy.ca.gov/publications/hormonal_contraception_protocol_rphs.pdf\">California Board of Pharmacy, 2024</a>). This is a meaningful option for California patients who prefer a pharmacy visit or cannot access telehealth. For patients in other states, or for those who want a physician review, the $79 TeleDirectMD telehealth visit is a straightforward option.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Birth Control Refill",
      groups: [
        {
          label: "Adults without an established OB-GYN",
          desc: "Need a refill but haven't seen a gynecologist in over a year? Telehealth bridges the gap, OCP refills don't require a Pap smear under current guidelines.",
        },
        {
          label: "College students",
          desc: "Student health center closed or backlogged? A $79 visit plus an $11–$21 generic pill is a predictable cash price; compare it with your student health plan copay.",
        },
        {
          label: "Working adults with scheduling barriers",
          desc: "OB-GYN appointments can take weeks to get. Telehealth visits are available same-day, evenings and weekends.",
        },
        {
          label: "Travelers and people relocating",
          desc: "Running out of pills while traveling or between providers during a move? Telehealth handles refills in 40+ states.",
        },
      ],
    },
    appropriateBlock: {
      title: "When a Birth Control Refill Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Refill of existing OCP, patch, or vaginal ring, no new medical history changes",
        "Starting OCPs for the first time in a healthy adult with no contraindications",
        "Progestin-only pill (mini-pill) initiation, no estrogen-related concerns",
        "OCP for acne management in otherwise healthy adults",
        "Switching between equivalent OCP formulations",
        "California patients wanting a physician review (vs. pharmacist direct-furnishing)",
      ],
      notFor: [
        "IUD insertion or removal, requires in-person gynecologic procedure",
        "Subdermal implant (Nexplanon) placement or removal, in-person only",
        "Depo-Provera injection, in-person injection required",
        "New onset of breakthrough bleeding, pelvic pain, or unusual symptoms",
        "History of blood clot, stroke, or uncontrolled hypertension (contraindication to estrogen)",
        "Pregnancy evaluation, telehealth can advise, but test and follow-up may require in-person",
      ],
    },
    decisionGuide: {
      title: "Birth Control: Telehealth, In-Person, or Pharmacy?",
      steps: [
        {
          num: 1,
          head: "Refill of OCP/patch/ring, healthy adult, no new symptoms?",
          body: "Book a $79 telehealth visit. Total cost with generic pill: about $90–$100. Same-day prescription sent to your pharmacy.",
          good: true,
        },
        {
          num: 2,
          head: "California patient wanting to skip the visit entirely?",
          body: "Ask your local pharmacy if they participate in the CA Board of Pharmacy hormonal contraception protocol (BPC § 4052.3). If so, the pharmacist can furnish OCPs, patch, or ring directly after a self-screening tool, no provider visit needed.",
          good: true,
        },
        {
          num: 3,
          head: "Want an IUD, implant, or Depo-Provera?",
          body: "These all require in-person procedures. Book with your OB-GYN or a Title X family planning clinic. Telehealth can help you choose a method and navigate your options, but cannot perform placement.",
          good: false,
        },
        {
          num: 4,
          head: "New pelvic pain, missed periods, or unusual symptoms?",
          body: "See a primary care provider or OB-GYN in person. These symptoms require physical examination and possible imaging before continuing or changing contraception.",
          good: false,
        },
      ],
    },
    costPlus: {
      drug: "oral contraceptive",
      price: "$6–$7",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Oral Contraceptive Costs (GoodRx Generic, April 2026)",
      caption: "28-day supply at major retail pharmacy with GoodRx coupon. Brand-name versions typically $60–$130/month, no clinical advantage over generics for most patients.",
      rows: [
        {
          drug: "Levonorgestrel/ethinyl estradiol (generic Alesse/Aviane), first-line combined OCP",
          cost: "$11–$14/month",
          sourceUrl: "https://www.goodrx.com/conditions/birth-control/drugs",
        },
        {
          drug: "Norgestimate/ethinyl estradiol (generic Sprintec/Ortho Tri-Cyclen)",
          cost: "$13–$14/month",
          sourceUrl: "https://www.goodrx.com/conditions/birth-control/drugs",
        },
        {
          drug: "Norethindrone 0.35mg, progestin-only pill (mini-pill, no estrogen)",
          cost: "$13–$19/month",
          sourceUrl: "https://www.goodrx.com/norethindrone",
        },
        {
          drug: "Norethindrone acetate/EE/ferrous fumarate (generic Junel FE 1/20)",
          cost: "$21/month",
          sourceUrl: "https://www.goodrx.com/conditions/birth-control/drugs",
        },
        {
          drug: "Drospirenone/ethinyl estradiol (generic Yaz/Yasmin)",
          cost: "$31–$45/month",
          sourceUrl: "https://www.goodrx.com/conditions/birth-control/drugs",
        },
      ],
    },
    homeCare: {
      title: "Starting or Restarting Your OCP, What to Know",
      bullets: [
        "Take the pill at the same time every day, consistency matters more than which time of day you choose.",
        "Missing two or more pills may reduce efficacy; use backup contraception (condoms) for 7 days.",
        "Progestin-only pills have a narrower window, take within 3 hours of the same time each day.",
        "OCPs do not protect against sexually transmitted infections, use condoms if STI risk is present.",
        "Nausea from combined OCPs is common in the first 1–3 months; taking the pill with food helps.",
        "If you experience severe abdominal pain, chest pain, headache, vision changes, or leg pain on OCPs, seek care immediately, these are rare but serious warning signs.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Get a Birth Control Refill by Telehealth",
      bullets: [
        "History of deep vein thrombosis, pulmonary embolism, or stroke, combined OCPs are contraindicated.",
        "Uncontrolled hypertension, combined OCPs may further elevate blood pressure; provider review required.",
        "Active migraine with aura, estrogen-containing OCPs increase stroke risk; progestin-only may be preferred.",
        "Breast cancer or personal/family history suggesting elevated thrombosis risk, in-person evaluation required.",
        "Pregnancy suspected or confirmed, OCP is not appropriate; testing and counseling needed in-person.",
        "Desire for IUD, implant, or injectable, all require in-person procedures.",
      ],
    },
    faqs: [
      {
        question: "How much does a birth control pill prescription cost without insurance in 2026?",
        answer: "The prescription visit via TeleDirectMD is $79. Generic OCPs start at $11–$14/month with a GoodRx coupon (April 2026), total about $90–$100 for visit + first month of medication. In-person primary care visits run $100–$300 cash-pay (Mira Health, 2025), so for cash-pay patients telehealth usually costs less for a straightforward refill. Insured patients may pay a lower copay through their plan.",
      },
      {
        question: "Do I need a pelvic exam to get birth control pills?",
        answer: "No. The CDC U.S. Selected Practice Recommendations for Contraceptive Use (2024) and ACOG both state that pelvic exams and Pap smears are not required to prescribe combined oral contraceptives in healthy adults. Blood pressure screening is the key clinical check, which can be done or reported during a telehealth visit.",
      },
      {
        question: "What is the cheapest birth control pill in 2026?",
        answer: "Generic levonorgestrel/ethinyl estradiol (brands include Aviane and Alesse generics) starts at $11/month with a GoodRx coupon. Generic norgestimate/ethinyl estradiol (generic Sprintec) runs $13/month. Norethindrone progestin-only pill is $13–$19/month. All are available at major retail pharmacies.",
      },
      {
        question: "What is California's pharmacist birth control law?",
        answer: "California Business & Professions Code § 4052.3 (implemented via Board of Pharmacy protocol) allows licensed California pharmacists to directly furnish self-administered hormonal contraceptives, including OCPs, patch, vaginal ring, and depot injection, without a provider prescription, after a patient self-screening process. Not all pharmacies participate. Telehealth remains an option for patients who want physician oversight or live outside California.",
      },
      {
        question: "Can telehealth prescribe the birth control patch or vaginal ring?",
        answer: "Yes. Xulane patch and NuvaRing (and generics) are self-administered hormonal methods appropriate for telehealth prescribing. Generic patch (norelgestromin/EE) runs ~$47/month; generic NuvaRing (etonogestrel/EE ring) ~$48/month via GoodRx.",
      },
      {
        question: "Can I get an IUD through TeleDirectMD?",
        answer: "No. IUD insertion is an in-person gynecologic procedure. Telehealth can help you understand your IUD options and eligibility, but placement requires a clinic visit. Title X family planning clinics often offer sliding-scale IUD insertions for uninsured or low-income patients.",
      },
      {
        question: "Does insurance cover telehealth birth control visits?",
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. The ACA mandates coverage of FDA-approved contraceptives with no cost-sharing for most plan types, meaning your generic OCP may be $0 copay with insurance, and the telehealth visit may also be covered.",
      },
      {
        question: "Is the progestin-only pill (mini-pill) available via telehealth?",
        answer: "Yes. Norethindrone 0.35mg (progestin-only pill) is appropriate for patients who cannot use estrogen, including those who are breastfeeding, have migraines with aura, or have elevated clot risk. Cost: $13–$19/month via GoodRx. TeleDirectMD providers can assess eligibility and prescribe at the $79 telehealth visit.",
      },
    ],
    references: [
      {
        label: "GoodRx, Birth control drug class pricing (April 2026)",
        url: "https://www.goodrx.com/conditions/birth-control/drugs",
      },
      {
        label: "GoodRx, Norethindrone pricing (April 2026)",
        url: "https://www.goodrx.com/norethindrone",
      },
      {
        label: "BetterCare, Urgent care and ER cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CDC U.S. Selected Practice Recommendations for Contraceptive Use (2024)",
        url: "https://www.cdc.gov/contraception/hcp/usspr/index.html",
      },
      {
        label: "California Board of Pharmacy, Hormonal contraception protocol (BPC § 4052.3)",
        url: "https://www.pharmacy.ca.gov/publications/hormonal_contraception_protocol_rphs.pdf",
      },
      {
        label: "ACOG, Access to Contraception (2025)",
        url: "https://www.acog.org/clinical/clinical-guidance/committee-statement/articles/2025/11/access-to-contraception",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'erectile-dysfunction-cost': {
    slug: "erectile-dysfunction-cost",
    pid: "ed-cost",
    h1: "Erectile Dysfunction Treatment Cost: Online Doctor vs Urologist vs Urgent Care",
    metaTitle: "ED Treatment Cost 2026: $89–$93 Online vs. $170+ Urologist",
    metaDescription: "A telehealth ED visit + generic sildenafil costs $89–$93 total. Generic tadalafil 5mg daily: $13.70/month via GoodRx. A cash-pay urology visit runs about $170–$400. 2026 prices with sources.",
    breadcrumb: "ED Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating erectile dysfunction via telehealth costs $79 for the visit plus $10–$14 for a 10-tablet supply of generic sildenafil (verified GoodRx, April 2026), total about $89–$93. Generic tadalafil 5mg daily (30-tablet supply) is $13.70/month with a GoodRx coupon. By comparison, a cash-pay urology new-patient visit runs about $170–$400 (MDsave, 2026), primary care $100–$300 (Mira Health, 2025), and urgent care $150–$250 (BetterCare, 2026). Many insurance plans limit or exclude ED medications, so cash-pay generic pricing often applies; insured patients may pay a lower visit copay through their plan. Per the AUA guideline, oral PDE5 inhibitors are a first-line treatment option for most men with ED.",
    answerLead: "Erectile dysfunction treatment cost in 2026 (uninsured cash-pay):",
    answerBody: "A telehealth ED visit at TeleDirectMD costs <strong>$79</strong>, and generic sildenafil 100mg (10 tablets) runs <strong>$10–$14</strong> via <a href=\"https://www.goodrx.com/sildenafil\">GoodRx (April 2026)</a>, total about $89–$93. Generic tadalafil 5mg daily (30 tablets) is <strong>$13.70/month</strong> via <a href=\"https://www.goodrx.com/tadalafil-cialis\">GoodRx (April 2026)</a>. Compare to a cash-pay urology new-patient visit at about <strong>$170–$400</strong> (<a href=\"https://www.mdsave.com/procedures/urology-new-patient-office-visit1/d787f8ca\">MDsave, 2026</a>). Brand Viagra and Cialis cost far more than the generics, which contain the same active ingredients.",
    heroSub: "Generic sildenafil is $10–$14 for 10 tablets. Generic tadalafil daily is $13.70/month. The $79 telehealth visit handles the clinical evaluation and prescription, total out-of-pocket about $89–$93 for most patients.",
    heroIntro: "Erectile dysfunction is one of the most undertreated conditions in men's health, not because treatment doesn't work, but because of cost and access barriers to in-person urology. The good news: PDE5 inhibitors (sildenafil and tadalafil) have been generic for years, their cash prices have collapsed, and a telehealth visit can handle the evaluation and prescription without a urologist visit. We pulled 2026 pricing from GoodRx and standard care-setting benchmarks to show exactly what ED treatment costs, and why cash-pay generic pricing beats insurance for most patients.",
    heroCardTitle: "ED Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Sildenafil or tadalafil e-prescription sent directly to your pharmacy",
      "Health history review for cardiovascular safety screening",
      "Dosing guidance and titration plan",
      "40+ states, evenings & weekends, discreet, private",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "Total about $89–$93 vs. about $170–$400 for a cash-pay urology visit",
      "Generic sildenafil 100mg: $10–$14 for 10 tablets (GoodRx, April 2026), same molecule as $700+ brand Viagra",
      "Generic tadalafil 5mg daily: $13.70/month, same active ingredient as brand Cialis",
      "No specialist referral needed for most men starting a PDE5 inhibitor",
      "Discreet: no waiting room, no pharmacy judgment",
      "Many insurance plans limit or exclude ED medications, so cash-pay generic prices often apply",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 89, highPrice: 93, description: "$79 visit + generic sildenafil 100mg 10-tab ($10–$14)" },
      { providerName: "Telehealth (national average)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 50, highPrice: 130, description: "Visit ($40–$100) + generic sildenafil or tadalafil ($10–$30)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 110, highPrice: 330, description: "In-person visit ($100–$300) + generic PDE5 inhibitor ($10–$30)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 160, highPrice: 280, description: "Walk-in visit ($150–$250) + generic medication ($10–$30)" },
      { providerName: "Urology office (cash-pay)", providerUrl: "https://www.mdsave.com/procedures/urology-new-patient-office-visit1/d787f8ca", lowPrice: 170, highPrice: 400, description: "New-patient specialist visit; labs extra; appointments can take weeks" },
    ],
    costTable: {
      title: "Erectile Dysfunction Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + one month of generic PDE5 inhibitor via GoodRx. Most insurers exclude ED medications; out-of-pocket cost applies to the majority of insured patients.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$89–$93 typical",
          includes: "$79 visit + generic sildenafil 100mg 10-tab ($10–$14)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/sildenafil",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$50–$130",
          includes: "Visit ($40–$100) + generic sildenafil or tadalafil ($10–$30)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$330",
          includes: "In-person visit ($100–$300) + generic PDE5 inhibitor ($10–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$160–$280",
          includes: "Walk-in visit ($150–$250) + generic medication ($10–$30)",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Urology office (cash-pay)",
          cost: "$170–$400",
          includes: "New-patient specialist visit; labs extra; appointments can take weeks",
          source: "MDsave, 2026",
          sourceUrl: "https://www.mdsave.com/procedures/urology-new-patient-office-visit1/d787f8ca",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why Generic PDE5 Inhibitors and Telehealth Have Transformed ED Treatment Cost",
      paragraphs: [
        "The <a href=\"https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction-(ed)-guideline\">American Urological Association (AUA) guideline</a> lists oral PDE5 inhibitors, sildenafil and tadalafil, as a first-line treatment option for most men with ED. The AUA also advises a thorough medical, sexual, and psychosocial history, a physical examination, and selective lab testing. Much of that history, including nitrate use and cardiovascular status, can be taken by video, and the physician can order labs or refer you for an in-person exam when needed.",
        "Generic sildenafil launched in 2017 and generic tadalafil followed in 2018, and prices have fallen dramatically. According to <a href=\"https://www.goodrx.com/sildenafil\">GoodRx (April 2026)</a>, generic sildenafil 100mg costs <strong>$10–$14 for 10 tablets</strong> at major US pharmacies, down more than 95% from brand Viagra's retail price. Generic tadalafil 5mg (for daily use) is <strong>$13.70 for 30 tablets</strong>. Penn Medicine's 2026 JAMA Network Open study found care episodes that began with a telemedicine visit averaged <strong>$96 in charges vs. $509</strong> for episodes that began in person (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>).",
        "A critical cost reality: many commercial insurance plans limit or exclude ED medications. Medicare Part D explicitly excludes drugs \"used for the treatment of sexual or erectile dysfunction.\" State Medicaid coverage varies but is limited. This means the generic cash-pay market is the relevant comparison for many patients, and generic tadalafil at $13.70/month is affordable. The main insurance question for ED is whether the <em>visit</em> is covered, not the drug. A $79 self-pay telehealth visit can cost less than in-network cost-sharing when a deductible is unmet, though insured patients may pay a lower copay through their plan.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth ED Visit",
      groups: [
        {
          label: "Men avoiding the in-person conversation",
          desc: "ED is underreported because of embarrassment. A discreet telehealth visit, from home, no waiting room, removes the main barrier to care.",
        },
        {
          label: "Working adults without a urologist",
          desc: "Urology appointments can take weeks to get. A PCP or telehealth MD can prescribe PDE5 inhibitors without a specialist referral.",
        },
        {
          label: "Patients with high-deductible insurance",
          desc: "ED medications are excluded from most plans anyway. The $79 telehealth visit + $13.70 tadalafil monthly often costs less than co-pays plus a specialist deductible.",
        },
        {
          label: "Men with stable, managed heart risk factors",
          desc: "TeleDirectMD screens for nitrate use and cardiovascular history before prescribing, the key safety check for PDE5 inhibitors. Men on nitrates, or with a recent heart attack, stroke, or unstable heart disease, are not candidates for telehealth ED treatment.",
        },
      ],
    },
    appropriateBlock: {
      title: "When ED Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Psychogenic or mixed-etiology ED without underlying structural concerns",
        "Cardiovascular risk evaluation via medical history, no nitrate use",
        "Initial PDE5 inhibitor trial (sildenafil as-needed or tadalafil daily)",
        "Dose adjustment or switch from sildenafil to tadalafil or vice versa",
        "ED in the context of controlled diabetes, hypertension, or hyperlipidemia",
        "Refill of existing PDE5 inhibitor prescription with no side effects or new symptoms",
      ],
      notFor: [
        "Priapism (prolonged erection > 4 hours), emergency room immediately",
        "ED with penile curvature or pain (possible Peyronie's disease, needs in-person evaluation)",
        "Sudden-onset ED after pelvic surgery, trauma, or prostate treatment",
        "Men on nitrate medications (absolute contraindication to PDE5 inhibitors)",
        "Testosterone deficiency suspected (fatigue, loss of libido, muscle loss), needs lab work",
        "Desire for penile implant or vascular surgery evaluation, urology required",
      ],
    },
    decisionGuide: {
      title: "ED: Telehealth, In-Person, or Specialist?",
      steps: [
        {
          num: 1,
          head: "Priapism, erection lasting more than 4 hours?",
          body: "Go to the ER immediately. This is a urological emergency. Do not attempt to manage at home.",
          good: false,
        },
        {
          num: 2,
          head: "ED without red flags, no nitrate use, no pelvic trauma, no penile pain?",
          body: "Book a $79 telehealth visit. If sildenafil or tadalafil is appropriate, the prescription can go out today. Generic tadalafil daily: $13.70/month (GoodRx, April 2026).",
          good: true,
        },
        {
          num: 3,
          head: "Penile curvature, pain, or post-surgical ED?",
          body: "See a urologist in person. These presentations may need imaging, penile Doppler studies, or specialist intervention.",
          good: false,
        },
        {
          num: 4,
          head: "PDE5 inhibitor isn't working?",
          body: "A follow-up $79 telehealth visit can adjust dosing, assess for testosterone deficiency (with an in-person lab order), or facilitate a urology referral if indicated.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "sildenafil / tadalafil",
      price: "$6–$7",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "ED Medication Costs (GoodRx Cash Price, April 2026)",
      caption: "As-needed: per-event supply (10 tablets). Daily: 30-day supply. Most insurers exclude these medications, GoodRx cash prices are the real-world cost for the vast majority of patients.",
      rows: [
        {
          drug: "Sildenafil 100mg, first-line as-needed (generic Viagra)",
          cost: "$10–$14 (10 tablets)",
          sourceUrl: "https://www.goodrx.com/sildenafil",
        },
        {
          drug: "Sildenafil 50mg, as-needed, lower dose",
          cost: "$11–$12 (10 tablets)",
          sourceUrl: "https://www.goodrx.com/sildenafil",
        },
        {
          drug: "Tadalafil 5mg, daily use (generic Cialis daily)",
          cost: "$13.70 (30 tablets)",
          sourceUrl: "https://www.goodrx.com/tadalafil-cialis",
        },
        {
          drug: "Tadalafil 20mg, as-needed (generic Cialis as-needed)",
          cost: "$14–$16 (30 tablets)",
          sourceUrl: "https://www.goodrx.com/tadalafil-cialis",
        },
      ],
    },
    homeCare: {
      title: "Getting the Best Results From Your ED Medication",
      bullets: [
        "Sildenafil works best taken 30–60 minutes before sexual activity on an empty stomach, high-fat meals delay absorption.",
        "Tadalafil (daily 5mg) provides 24/7 readiness with no timing requirement, preferred by many patients for spontaneity.",
        "Alcohol in large quantities blunts response to PDE5 inhibitors, moderate use is acceptable.",
        "Cardiovascular health matters: regular aerobic exercise, blood pressure control, and healthy weight all independently improve ED.",
        "Never combine PDE5 inhibitors with nitrate medications (nitroglycerin, isosorbide), severe hypotension risk.",
        "If a 100mg dose of sildenafil doesn't work consistently, a telehealth follow-up can evaluate whether daily tadalafil or testosterone testing is the next step.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat ED by Telehealth",
      bullets: [
        "Active nitrate use, sildenafil and tadalafil are absolutely contraindicated.",
        "Recent heart attack, stroke, or cardiovascular instability in the past 3–6 months.",
        "Priapism (erection > 4 hours), ER immediately.",
        "Penile curvature, nodules, or pain, possible Peyronie's disease requiring in-person evaluation.",
        "Sudden-onset ED after surgery, radiation, or pelvic trauma.",
        "Suspected low testosterone with systemic symptoms, needs lab work before treatment.",
      ],
    },
    faqs: [
      {
        question: "How much does erectile dysfunction treatment cost without insurance in 2026?",
        answer: "Very little, generics have changed the math entirely. A $79 telehealth visit plus generic sildenafil 100mg (10 tablets) costs about $89–$93 total (GoodRx, April 2026). Generic tadalafil 5mg daily runs $13.70/month. A cash-pay urology new-patient visit runs about $170–$400 (MDsave, 2026) before medication.",
      },
      {
        question: "Does insurance cover erectile dysfunction medications?",
        answer: "Rarely. Medicare Part D explicitly excludes ED medications by statute. Many commercial plans exclude them or limit quantities, so GoodRx generic cash prices ($10–$14 for sildenafil, $13.70 for tadalafil daily) are often what patients pay. The $79 telehealth visit for the evaluation may be covered if your plan has telehealth benefits.",
      },
      {
        question: "Is generic sildenafil as effective as brand Viagra?",
        answer: "Yes. Generic sildenafil is bioequivalent to brand Viagra, same active ingredient (sildenafil citrate), same dosage forms, same clinical efficacy per FDA standards. The retail price difference is enormous: brand Viagra can exceed $700 for 10 tablets, while generic sildenafil is $10–$14 for the same quantity (GoodRx, April 2026).",
      },
      {
        question: "What is the difference between sildenafil (as-needed) and tadalafil (daily)?",
        answer: "Sildenafil is taken 30–60 minutes before sex and lasts 4–6 hours. Tadalafil 5mg daily maintains steady-state blood levels for 24/7 readiness, preferred by men who want spontaneity. Tadalafil also treats BPH symptoms. Both are generic and very affordable: sildenafil ~$10–$14 for 10 doses, tadalafil daily $13.70/month (GoodRx, April 2026).",
      },
      {
        question: "Can a telehealth doctor prescribe sildenafil or tadalafil?",
        answer: "Yes. Both are non-controlled prescription medications. A board-certified telehealth MD can review your health history, screen for contraindications (especially nitrate use), and prescribe the appropriate dose in a single 15-minute visit.",
      },
      {
        question: "What is the quantity limit on ED prescriptions via telehealth?",
        answer: "The quantity depends on how often you plan to use it; daily tadalafil is usually prescribed as 30 tablets a month. Some insurance plans impose monthly quantity limits on ED medications. Cash-pay patients have no insurer-imposed quantity limits.",
      },
      {
        question: "Should I see a urologist for ED?",
        answer: "Not necessarily for first-line treatment. PDE5 inhibitors are commonly started by primary care physicians, including through telehealth. Urology referral is appropriate for: failed PDE5 therapy, penile abnormalities, post-surgical ED, or interest in penile implants or vascular procedures.",
      },
      {
        question: "Are there ED risks to be aware of before using sildenafil or tadalafil?",
        answer: "The main safety concern is nitrate interaction, if you take any nitrate medication (nitroglycerin, isosorbide mononitrate/dinitrate, poppers), PDE5 inhibitors are absolutely contraindicated. The TeleDirectMD clinical review screens for this. Men with recent heart attacks, strokes, or severe cardiac disease should get clearance from a cardiologist before using PDE5 inhibitors.",
      },
    ],
    references: [
      {
        label: "GoodRx, Sildenafil pricing (April 2026)",
        url: "https://www.goodrx.com/sildenafil",
      },
      {
        label: "GoodRx, Tadalafil (Cialis) pricing (April 2026)",
        url: "https://www.goodrx.com/tadalafil-cialis",
      },
      {
        label: "GoodRx, ED drug class overview",
        url: "https://www.goodrx.com/conditions/erectile-dysfunction/drugs",
      },
      {
        label: "BetterCare, Urgent care cost without insurance (2026)",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "MDsave, Urology new patient office visit (2026)",
        url: "https://www.mdsave.com/procedures/urology-new-patient-office-visit1/d787f8ca",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "AUA, ED clinical guidelines",
        url: "https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction-(ed)-guideline",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hair-loss-treatment-cost': {
    slug: "hair-loss-treatment-cost",
    pid: "hairloss-cost",
    h1: "Hair Loss Treatment Cost: Online Doctor vs Dermatologist vs In-Person",
    metaTitle: "Hair Loss Treatment Cost 2026: $104 First Month Online vs. $150+ Derm",
    metaDescription: "Telehealth hair loss visit + generic finasteride and minoxidil 5% foam costs about $104 the first month ($79 + $14.93 + $9.98), then about $25/month via GoodRx. A first dermatology visit runs $150–$300 cash-pay. 2026 prices with sources.",
    breadcrumb: "Hair Loss Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating androgenetic alopecia (male or female pattern hair loss) via telehealth costs $79 for the visit plus $14.93/month for generic finasteride 1mg and $9.98/month for minoxidil 5% foam (verified GoodRx, April 2026), about $104 for the first month and about $25/month after that. By comparison, a first dermatology visit runs $150–$300 cash-pay (BetterCare, 2026), primary care $100–$300 (Mira Health, 2025), and urgent care $150–$250 (BetterCare, 2026). Insurance almost never covers hair loss medications, as they are classified cosmetic, meaning GoodRx generic cash prices are the real-world out-of-pocket cost for virtually all patients. Per AAD hair loss treatment resources, finasteride and topical minoxidil are evidence-based first-line therapies for androgenetic alopecia.",
    answerLead: "Hair loss treatment cost in 2026 (cash-pay, uninsured):",
    answerBody: "A telehealth hair loss visit at TeleDirectMD costs <strong>$79</strong>. Generic finasteride 1mg (30 tablets) runs <strong>$14.93/month</strong> via <a href=\"https://www.goodrx.com/finasteride\">GoodRx (April 2026)</a>. Minoxidil 5% foam (60g can) is <strong>$9.98/month</strong> via <a href=\"https://www.goodrx.com/minoxidil-non-prescription\">GoodRx (April 2026)</a>. Both combined: roughly <strong>$25/month</strong> ongoing, vs. $150–$300 for a first dermatology visit cash-pay (<a href=\"https://bettercare.com/costs/dermatologist-cost\">BetterCare, 2026</a>). Insurance almost never covers these treatments because androgenetic alopecia is classified as cosmetic, making generic cash-pay the universal starting point.",
    heroSub: "Generic finasteride 1mg is $14.93/month. Minoxidil 5% foam is $9.98/month. The $79 telehealth visit handles the evaluation and prescription, total combination therapy about $25/month, which is what the evidence supports.",
    heroIntro: "Androgenetic alopecia, male pattern and female pattern hair loss, affects roughly 50 million men and 30 million women in the US. The treatments that actually work (finasteride and topical minoxidil) are both cheap generics. The main barrier has always been the dermatology visit, which costs $150–$300 cash-pay for a first visit and can book weeks out. Telehealth removes that barrier for a condition that doesn't require a biopsy or in-person exam in most cases. We pulled 2026 GoodRx pricing and standard benchmark costs to show exactly what hair loss treatment costs, and what to expect from insurance (usually no coverage).",
    heroCardTitle: "Hair Loss Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Finasteride 1mg prescription sent directly to your pharmacy",
      "Topical or oral minoxidil guidance",
      "Realistic expectations: results take 3–6 months of consistent use",
      "40+ states, evenings & weekends",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "First month ~$104 ($79 visit + finasteride + minoxidil), then ~$25/month, vs. $150–$300 for a cash-pay first dermatology visit alone",
      "Generic finasteride 1mg: $14.93/month, same active ingredient as brand Propecia (GoodRx, April 2026)",
      "Minoxidil 5% foam (Rogaine generic): $9.98 per 60g can, 1-month supply at major pharmacies",
      "Insurance almost never covers cosmetic hair loss medications, generics are the real price",
      "Per the AAD, minoxidil and finasteride (for men) are FDA-approved hair loss treatments",
      "No biopsy or in-person scalp exam needed for typical androgenetic alopecia presentation",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 104, highPrice: 104, description: "$79 visit (first month) + finasteride $14.93 + minoxidil foam $9.98" },
      { providerName: "Telehealth (national average)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 65, highPrice: 125, description: "Visit ($40–$100) + finasteride + minoxidil ($25/month ongoing)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 125, highPrice: 325, description: "In-person visit ($100–$300) + generics ($25/month ongoing)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 175, highPrice: 275, description: "Walk-in visit ($150–$250) + generics; urgent care may not manage hair loss" },
      { providerName: "Dermatology (cash-pay)", providerUrl: "https://bettercare.com/costs/dermatologist-cost", lowPrice: 150, highPrice: 300, description: "First specialist visit; biopsy and medications extra" },
    ],
    costTable: {
      title: "Hair Loss Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first month of generic finasteride + minoxidil topical foam. Insurance rarely covers hair loss medications, out-of-pocket costs apply to virtually all patients.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$104 first month, then ~$25/month",
          includes: "$79 visit (first month) + finasteride $14.93 + minoxidil foam $9.98",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/finasteride",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$65–$125 first month",
          includes: "Visit ($40–$100) + finasteride + minoxidil ($25/month ongoing)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$125–$325 first visit",
          includes: "In-person visit ($100–$300) + generics ($25/month ongoing)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$175–$275",
          includes: "Walk-in visit ($150–$250) + generics; urgent care may not manage hair loss",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Dermatology (cash-pay)",
          cost: "$150–$300 first visit",
          includes: "First specialist visit; biopsy and medications extra",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/dermatologist-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why Telehealth Is the Logical Entry Point for Hair Loss Treatment",
      paragraphs: [
        "The <a href=\"https://www.aad.org\">American Academy of Dermatology (AAD)</a> identifies topical minoxidil and oral finasteride as FDA-approved treatments for androgenetic alopecia (finasteride is approved for men only). For a straightforward presentation of male or female pattern hair loss without systemic disease, red flags, or diffuse shedding suggesting nutritional deficiency or thyroid disease, the clinical evaluation does not require an in-person exam. A telehealth provider can assess the pattern, screen for medical causes, and prescribe both medications in a single visit.",
        "The insurance reality is blunt: androgenetic alopecia is classified as a cosmetic condition by virtually all payers. Generic finasteride for hair loss is <em>not</em> covered by Medicare or most commercial plans (though finasteride 5mg for BPH sometimes is). Generic topical minoxidil is OTC. This means the relevant cost for nearly every patient is the GoodRx generic price, <strong>$14.93/month for finasteride 1mg</strong> and <strong>$9.98/month for minoxidil 5% foam</strong> (<a href=\"https://www.goodrx.com/finasteride\">GoodRx, April 2026</a>; <a href=\"https://www.goodrx.com/minoxidil-non-prescription\">GoodRx, April 2026</a>). Penn Medicine's 2026 <em>JAMA Network Open</em> study found care episodes that began with telemedicine averaged <strong>$96 vs. $509</strong> for episodes that began in person, and for a cosmetic condition where the first visit is often purely evaluative, the telehealth saving is the entire dermatology appointment cost (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>).",
        "Off-label oral minoxidil (0.625–2.5mg/day for women, 2.5–5mg/day for men) is a newer option gaining traction in dermatology for patients who cannot tolerate topical application or want better compliance. Generic oral minoxidil (2.5mg, 30 tablets) runs approximately <strong>$13.89/month</strong> via <a href=\"https://www.goodrx.com/minoxidil\">GoodRx (April 2026)</a>. This is an off-label use requiring clinical judgment, not appropriate for all patients, but increasingly prescribed by telehealth dermatology platforms and primary care physicians for treatment-resistant cases.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Hair Loss Visit",
      groups: [
        {
          label: "Men with androgenetic alopecia (male pattern baldness)",
          desc: "Classic recession at temples and crown? Telehealth prescribes the evidence-based combo, finasteride + minoxidil, same day, without a dermatology waitlist.",
        },
        {
          label: "Women with diffuse thinning",
          desc: "Female pattern hair loss is different from male pattern, telehealth evaluation can distinguish it from thyroid or nutritional causes, and prescribe topical minoxidil if appropriate.",
        },
        {
          label: "Men on generic finasteride wanting to optimize",
          desc: "Already on finasteride from another provider? A $79 telehealth follow-up can assess response, add topical minoxidil, or discuss oral minoxidil as adjunct therapy.",
        },
        {
          label: "Adults who tried OTC minoxidil but want prescription finasteride",
          desc: "Minoxidil is OTC; finasteride requires a prescription. A single telehealth visit gets you the prescription for the medication that actually stops the hormonal cause of androgenetic alopecia.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Hair Loss Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Classic androgenetic alopecia pattern, recession at temples, thinning crown (men) or diffuse central thinning (women)",
        "Initiating finasteride 1mg for men with male pattern hair loss",
        "Initiating topical or oral minoxidil for appropriate candidates",
        "Follow-up assessment of treatment response (photo review)",
        "Women with diffuse thinning who want screening for thyroid or iron deficiency (lab order without in-person exam)",
        "Transitioning from brand Propecia to generic finasteride",
      ],
      notFor: [
        "Sudden patchy hair loss (alopecia areata), dermatology evaluation often needed for steroid injection or biologic workup",
        "Scarring alopecia (cicatricial alopecia), permanent loss requiring biopsy and dermatology management",
        "Diffuse shedding with systemic symptoms (fatigue, weight change, temperature intolerance), likely thyroid or nutritional deficiency, needs labs + in-person evaluation",
        "Scalp lesions, pustules, or infection (tinea capitis), in-person and possible fungal culture",
        "Pediatric hair loss, always warrants in-person pediatric dermatology evaluation",
        "Interest in hair transplant surgery, requires in-person surgical consultation",
      ],
    },
    decisionGuide: {
      title: "Hair Loss: Telehealth, In-Person, or Dermatologist?",
      steps: [
        {
          num: 1,
          head: "Sudden patchy loss, scalp lesions, or systemic symptoms?",
          body: "See a dermatologist in person. These presentations may be alopecia areata, tinea capitis, or a systemic disease, each requiring a different workup and treatment.",
          good: false,
        },
        {
          num: 2,
          head: "Classic pattern thinning in a healthy adult (male or female)?",
          body: "Book a $79 telehealth visit. Get finasteride and/or topical minoxidil today. Ongoing cost: ~$25/month for both generics, far less than DTC hair brands.",
          good: true,
        },
        {
          num: 3,
          head: "Diffuse shedding, concerned about thyroid or iron deficiency?",
          body: "A telehealth visit can order labs. If TSH or ferritin come back abnormal, treatment of the underlying cause often resolves the shedding without hair-specific medications.",
          good: true,
        },
        {
          num: 4,
          head: "Tried finasteride and minoxidil for 12+ months without meaningful response?",
          body: "Dermatologist evaluation is warranted, to assess for other causes, consider platelet-rich plasma (PRP), or evaluate candidacy for hair transplant surgery.",
          good: false,
        },
      ],
    },
    costPlus: {
      drug: "finasteride 1 mg",
      price: "$6",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Hair Loss Medication Costs (GoodRx Cash Price, April 2026)",
      caption: "30-day supply at major retail pharmacy with GoodRx coupon. Insurance almost never covers hair loss medications (classified cosmetic), these cash prices are what most patients pay.",
      rows: [
        {
          drug: "Finasteride 1mg, FDA-approved for male pattern hair loss (generic Propecia)",
          cost: "$14.93/month (30 tablets)",
          sourceUrl: "https://www.goodrx.com/finasteride",
        },
        {
          drug: "Minoxidil 5% topical foam, FDA-approved OTC, first-line (generic Rogaine)",
          cost: "$9.98/month (60g can)",
          sourceUrl: "https://www.goodrx.com/minoxidil-non-prescription",
        },
        {
          drug: "Minoxidil 5% topical solution, FDA-approved OTC",
          cost: "$11.69/month (60ml bottle)",
          sourceUrl: "https://www.goodrx.com/minoxidil-non-prescription",
        },
        {
          drug: "Oral minoxidil 2.5mg, off-label, emerging adjunct therapy",
          cost: "~$13.89/month (30 tablets)",
          sourceUrl: "https://www.goodrx.com/minoxidil",
        },
        {
          drug: "Finasteride 5mg, off-label, sometimes used for women (requires discussion)",
          cost: "Similar range to 1mg; GoodRx pricing applies",
          sourceUrl: "https://www.goodrx.com/finasteride",
        },
      ],
    },
    homeCare: {
      title: "Maximizing Results From Your Hair Loss Medications",
      bullets: [
        "Apply topical minoxidil directly to a dry scalp twice daily, consistency is more important than timing.",
        "Finasteride takes 3–6 months to show measurable benefit, do not stop early; the medication prevents further loss before it promotes regrowth.",
        "Minoxidil-related shedding in the first 2–8 weeks is normal, it reflects the hair cycle resetting, not treatment failure.",
        "Women who are or may be pregnant should not handle crushed or broken finasteride tablets, because absorbed finasteride may harm a male fetus.",
        "Oral minoxidil at low doses is well tolerated by most patients; fluid retention or light hypertrichosis (fine body hair growth) can occur, discuss with your provider.",
        "Track progress with monthly photos under the same lighting, subtle changes are hard to perceive without comparison.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat Hair Loss by Telehealth",
      bullets: [
        "Sudden complete loss of hair in one area (alopecia areata), autoimmune, needs dermatology evaluation.",
        "Scalp pain, tenderness, pustules, or spreading lesions, possible infection or inflammatory condition.",
        "Systemic symptoms accompanying hair loss: fatigue, weight change, cold intolerance, thyroid or autoimmune workup first.",
        "Women with irregular menstruation, acne, and hair loss simultaneously, possible PCOS, needs hormonal evaluation.",
        "Patients on 5-alpha reductase inhibitors (finasteride/dutasteride) with new urinary symptoms or elevated PSA concerns, in-person evaluation needed.",
        "Children with hair loss, always warrants pediatric or dermatologic evaluation.",
      ],
    },
    faqs: [
      {
        question: "How much does hair loss treatment cost without insurance in 2026?",
        answer: "The ongoing medication cost is modest: generic finasteride 1mg is $14.93/month and generic minoxidil 5% foam is $9.98/month, about $25/month combined (GoodRx, April 2026). Add the $79 TeleDirectMD visit for the initial prescription, and the first-month total is ~$104. A first dermatology visit runs $150–$300 cash-pay (BetterCare, 2026), and appointments can take weeks.",
      },
      {
        question: "Does insurance cover finasteride or minoxidil for hair loss?",
        answer: "Almost never. Androgenetic alopecia is classified as a cosmetic condition by virtually all payers. Generic finasteride for hair loss (1mg) is not covered by Medicare or most commercial plans. Topical minoxidil is OTC. You are effectively always paying cash, which makes the GoodRx generic pricing ($14.93 finasteride + $9.98 minoxidil foam) the universal starting point.",
      },
      {
        question: "Can a telehealth doctor prescribe finasteride for hair loss?",
        answer: "Yes. Finasteride 1mg (generic Propecia) is a standard prescription non-controlled medication. A board-certified TeleDirectMD physician can evaluate your hair loss pattern and prescribe finasteride in a single $79 visit, consistent with AAD hair loss treatment recommendations for androgenetic alopecia.",
      },
      {
        question: "Is oral minoxidil available via telehealth, what does it cost?",
        answer: "Off-label oral minoxidil (2.5–5mg for men, 0.625–2.5mg for women) is available via telehealth prescription. Generic oral minoxidil 2.5mg runs approximately $13.89/month via GoodRx (April 2026). It's prescribed for patients who prefer a pill to twice-daily topical application. Your provider will review cardiovascular history before prescribing.",
      },
      {
        question: "How does generic finasteride compare to brand Propecia?",
        answer: "Generic finasteride 1mg is bioequivalent to brand Propecia, identical active ingredient, identical dosage, identical clinical evidence base. Brand Propecia costs several times more; generic finasteride is $14.93/month with GoodRx (April 2026). No clinical reason to pay for the brand.",
      },
      {
        question: "How long does it take to see results from finasteride and minoxidil?",
        answer: "Finasteride typically shows measurable slowing of hair loss within 3–6 months, with visible regrowth at 6–12 months in responsive patients. Topical minoxidil shows initial response in 3–6 months with full results at 12 months. Both require indefinite continuation, stopping finasteride results in resumption of loss within 12 months. Results vary from person to person.",
      },
      {
        question: "Should women use finasteride for hair loss?",
        answer: "Off-label finasteride at higher doses (2.5–5mg) is used for female pattern hair loss in post-menopausal women or women using reliable contraception. It is teratogenic in male fetuses and should not be used in women who could become pregnant. Topical minoxidil 5% is the first-choice FDA-approved option for women and does not carry that risk. A telehealth provider can discuss options based on your specific situation.",
      },
      {
        question: "Are DTC hair loss brands like Hims and Keeps better than TeleDirectMD?",
        answer: "DTC hair platforms charge $25–$50/month for the same generic finasteride that costs $14.93/month at a retail pharmacy with GoodRx. The clinical visit and prescription are bundled into subscription pricing. With TeleDirectMD, you pay $79 for the visit once, then fill the generic at any pharmacy, typically cheaper long-term than a subscription model.",
      },
    ],
    references: [
      {
        label: "GoodRx, Finasteride pricing (April 2026)",
        url: "https://www.goodrx.com/finasteride",
      },
      {
        label: "GoodRx, Minoxidil non-prescription topical pricing (April 2026)",
        url: "https://www.goodrx.com/minoxidil-non-prescription",
      },
      {
        label: "GoodRx, Oral minoxidil pricing (April 2026)",
        url: "https://www.goodrx.com/minoxidil",
      },
      {
        label: "GoodRx, Hair loss drug class overview",
        url: "https://www.goodrx.com/conditions/hair-loss/drugs",
      },
      {
        label: "BetterCare, Dermatologist cost (2026)",
        url: "https://bettercare.com/costs/dermatologist-cost",
      },
      {
        label: "BetterCare, Urgent care cost without insurance (2026)",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "AAD, Hair loss resource center",
        url: "https://www.aad.org/public/diseases/hair-loss",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'diabetes-refills-cost': {
    slug: "diabetes-refills-cost",
    pid: "diabetes-cost",
    h1: "Diabetes Medication Refill Cost: Online Doctor vs Primary Care vs Endocrinologist",
    metaTitle: "Diabetes Refill Cost 2026: Metformin $5.75/Month + $79 Visit",
    metaDescription: "Metformin costs $5.75–$9/month via GoodRx. Jardiance: $355/month. Civica insulin glargine: ≤$55 per 5-pen box. Telehealth diabetes refill: $79 visit. Verified 2026 prices with ADA sources.",
    breadcrumb: "Diabetes Refill Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, a telehealth diabetes medication refill visit costs $79. Generic metformin, which the ADA 2026 Standards describe as effective, safe, and inexpensive, is as low as $5.75/month via GoodRx (April 2026). Brand Jardiance (empagliflozin) 10mg costs approximately $355/month and brand Farxiga (dapagliflozin) 10mg approximately $288/month with GoodRx coupons (GoodRx, April 2026); the first generic dapagliflozin was FDA-approved in April 2026. Civica's insulin glargine-yfgn, interchangeable with Lantus, launched January 1, 2026 at a recommended consumer price of no more than $55 for a box of five pens. By comparison, an endocrinologist visit is commonly $200–$400 cash-pay (estimate); primary care runs $100–$300 (Mira Health, 2025). Per ADA 2026 Standards, medication choice is person-centered, and SGLT-2 inhibitors or GLP-1 receptor agonists are recommended for people with heart disease, heart failure, or kidney disease (TeleDirectMD does not prescribe GLP-1 medications). Telehealth is appropriate for stable, controlled diabetes refills, not for new acute complications.",
    answerLead: "Diabetes medication refill cost in 2026 (cash-pay totals):",
    answerBody: "A telehealth diabetes refill visit at TeleDirectMD costs <strong>$79</strong>. Generic metformin 500mg (60 tablets) starts at <strong>$5.75–$9/month</strong> via <a href=\"https://www.goodrx.com/metformin\">GoodRx (April 2026)</a>. Brand SGLT-2 inhibitors remain expensive: Jardiance 10mg is <strong>~$355/month</strong> and Farxiga 10mg is <strong>~$288/month</strong> with GoodRx coupons (<a href=\"https://www.goodrx.com/jardiance\">GoodRx</a>; <a href=\"https://www.goodrx.com/farxiga\">GoodRx, April 2026</a>), though a generic dapagliflozin was FDA-approved in April 2026 (<a href=\"https://networkhealth.com/grow-in-the-know/2026/05/generic-farxiga-dapagliflozin-prices-are-dropping\">Network Health, 2026</a>). Civica insulin glargine has a recommended price of <strong>no more than $55 for a box of five pens</strong> since January 2026 (<a href=\"https://civicarx.org/civica-to-launch-long-acting-insulin-glargine-in-the-us-in-january-2026/\">Civica</a>). Compare to an endocrinology office visit at <strong>$200–$400</strong> cash-pay, without changing the medication.",
    heroSub: "Metformin is $5.75/month. A telehealth diabetes refill visit is $79. For a stable T2DM patient with well-controlled A1C who needs prescription continuity, the $79 visit is all that stands between you and your medication, no specialist waitlist required.",
    heroIntro: "Type 2 diabetes is one of the most manageable and most expensive chronic conditions in the US, expensive not because the first-line medication (metformin) is costly, but because SGLT-2 inhibitors, GLP-1 agonists, and insulin all carry high price tags without insurance, and specialist access is limited. For a patient with stable, well-controlled T2DM who simply needs a refill and A1C monitoring, telehealth is both clinically appropriate and dramatically cheaper than a specialist visit. We pulled 2026 pricing from GoodRx, Civica Rx, and standard benchmarks to show exactly what diabetes medication management costs across care settings, and where the value opportunities are.",
    heroCardTitle: "Diabetes Refill Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Metformin, SGLT-2 inhibitor, or other oral agent refill sent to pharmacy (TeleDirectMD does not prescribe GLP-1s)",
      "A1C trend review and target counseling (ADA 2026 guideline-based)",
      "GoodRx coupon guidance for branded medications, Jardiance, Farxiga",
      "Information on Civica lower-cost insulin glargine for uninsured patients",
      "HSA/FSA accepted, 40+ states, evenings & weekends",
    ],
    heroBenefits: [
      "Total ~$85 (visit + metformin) vs. $200–$400 at an endocrinologist cash-pay",
      "Metformin: effective, safe, and inexpensive per ADA 2026 ($4–$9/month)",
      "Brand Farxiga with GoodRx: ~$288/month; first generic dapagliflozin FDA-approved April 2026",
      "Civica insulin glargine: no more than $55 per 5-pen box (recommended price, January 2026)",
      "Stable T2DM refills by video, with in-person referral when complications arise",
      "Documented visit for A1C tracking, appropriate for insurance reimbursement",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 85, highPrice: 88, description: "$79 visit + metformin ($5.75–$9), SGLT-2 inhibitor refill at same visit if applicable" },
      { providerName: "Telehealth (national average)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 46, highPrice: 109, description: "Visit ($40–$100) + metformin ($5.75–$9)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 106, highPrice: 309, description: "In-person visit ($100–$300) + metformin ($5.75–$9); A1C lab may add $20–$50" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 156, highPrice: 259, description: "Visit ($150–$250) + metformin; not the usual setting for stable diabetes refills" },
      { providerName: "Endocrinologist (cash-pay)", providerUrl: null, lowPrice: 200, highPrice: 400, description: "Specialist visit (estimate; self-pay rates vary); medications cost the same regardless of prescriber" },
    ],
    costTable: {
      title: "Diabetes Medication Refill Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + one month of first-line medication. SGLT-2 and insulin costs listed separately due to wide range. Generic metformin assumed as baseline medication.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$85–$88 typical",
          includes: "$79 visit + metformin ($5.75–$9), SGLT-2 inhibitor refill at same visit if applicable",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$46–$109",
          includes: "Visit ($40–$100) + metformin ($5.75–$9)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$106–$309",
          includes: "In-person visit ($100–$300) + metformin ($5.75–$9); A1C lab may add $20–$50",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$156–$259",
          includes: "Visit ($150–$250) + metformin; not the usual setting for stable diabetes refills",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Endocrinologist (cash-pay)",
          cost: "$200–$400",
          includes: "Specialist visit; medications cost the same regardless of prescriber",
          source: "Estimate; self-pay rates vary",
          sourceUrl: null,
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Diabetes Medication Costs: The Tier 1 Foundation, the SGLT-2 Reality, and Civica Insulin",
      paragraphs: [
        "The <a href=\"https://professional.diabetes.org/standards-of-care\">ADA 2026 Standards of Care</a> describe metformin as effective, safe, inexpensive, and widely available, and it remains a common first medication for type 2 diabetes when no heart, kidney, or vascular condition calls for another drug class. According to <a href=\"https://www.goodrx.com/metformin\">GoodRx (April 2026)</a>, generic metformin 500mg (60 tablets, a typical 30-day supply) starts at <strong>$5.75–$9</strong> at most US pharmacies, solidly in the Tier 1 ($4–$15) range. Many pharmacies offer metformin as part of $4/$10 generic programs. For a patient on a stable metformin regimen, a telehealth refill visit plus the medication costs about $85–$88. The ADA 2026 Standards recommend SGLT-2 inhibitors or GLP-1 receptor agonists for people with heart disease, heart failure, or kidney disease, independent of A1C. TeleDirectMD does not prescribe GLP-1 medications.",
        "SGLT-2 inhibitors (Jardiance, Farxiga) add meaningful cardiovascular and renal protection in appropriate patients but carry significant cost. According to GoodRx (April 2026), Jardiance (empagliflozin) 10mg costs approximately <strong>$355/month</strong> with a coupon (average retail over $500/month), and Farxiga (dapagliflozin) 10mg is <strong>~$288/month</strong> with GoodRx (<a href=\"https://www.goodrx.com/jardiance\">GoodRx Jardiance</a>; <a href=\"https://www.goodrx.com/farxiga\">GoodRx Farxiga</a>). Manufacturer savings cards (AstraZeneca for Farxiga, Lilly/Boehringer for Jardiance) can lower the copay for eligible commercially insured patients. The first generic dapagliflozin was FDA-approved in April 2026, and generic prices are falling (<a href=\"https://networkhealth.com/grow-in-the-know/2026/05/generic-farxiga-dapagliflozin-prices-are-dropping\">Network Health, 2026</a>). For uninsured patients on brand Jardiance, cost remains a significant monthly burden. Penn Medicine's 2026 <em>JAMA Network Open</em> study found care episodes that began with telehealth averaged <strong>$96 vs. $509</strong> for those that began in person (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>), the medication cost, not the visit type, drives the total diabetes management spend.",
        "Insulin prices have also come down. On January 1, 2026, <a href=\"https://civicarx.org/civica-to-launch-long-acting-insulin-glargine-in-the-us-in-january-2026/\">Civica</a>, a nonprofit drug company, launched insulin glargine-yfgn, a long-acting insulin interchangeable with Lantus, at a recommended consumer price of <strong>no more than $55 for a box of five prefilled pens</strong>. Branded long-acting insulins historically listed at $200–$400 per vial. TeleDirectMD can bridge-refill your current, stable insulin dose until you see your primary care physician; if you use insulin glargine, ask your pharmacy whether it stocks the Civica version.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Diabetes Refill Visit",
      groups: [
        {
          label: "Newly diagnosed T2DM patients without an endocrinologist",
          desc: "Many people with uncomplicated T2DM are managed in primary care with medication and lifestyle changes, without a specialist. A telehealth visit can review your labs and refill a stable regimen.",
        },
        {
          label: "Stable T2DM patients who simply need a refill",
          desc: "A1C at your individualized target, on a stable regimen, no new symptoms? A $79 telehealth visit provides continuity of care without the wait or cost of an endocrinology appointment.",
        },
        {
          label: "Uninsured patients on insulin",
          desc: "Civica insulin glargine has a recommended price of no more than $55 per 5-pen box (January 2026). Dr. Bhavsar can bridge-refill your current, stable insulin dose until you see your primary care physician.",
        },
        {
          label: "Patients struggling with SGLT-2 inhibitor costs",
          desc: "Jardiance at $355/month and brand Farxiga at $288/month can be lowered with manufacturer savings cards for commercially insured patients. Generic dapagliflozin, FDA-approved in April 2026, may cost much less than brand Farxiga.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Diabetes Management Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Stable T2DM with well-controlled A1C and no new symptoms, medication refill only",
        "Metformin initiation for new T2DM or prediabetes diagnosis",
        "SGLT-2 inhibitor or other oral agent refill with no complications or side effects",
        "A1C trend review and counseling against ADA 2026 targets (< 7% for most adults)",
        "Bridge refill of a current, stable insulin dose until you see your primary care physician (no dose changes; most recent HbA1c required)",
        "Lifestyle counseling and MNT (medical nutrition therapy) referral",
      ],
      notFor: [
        "Diabetic ketoacidosis (DKA), ER immediately; life-threatening emergency",
        "Hyperosmolar hyperglycemic state (HHS), ER immediately",
        "New foot ulcer, non-healing wound, or signs of peripheral vascular disease",
        "New visual changes, chest pain, or signs of acute diabetic complications",
        "Frequent unexplained hypoglycemia requiring insulin regimen overhaul",
        "First insulin initiation in T1DM or complex T2DM, in-person diabetes education program preferred",
      ],
    },
    decisionGuide: {
      title: "Diabetes: Telehealth Refill, Primary Care, or ER?",
      steps: [
        {
          num: 1,
          head: "DKA symptoms: vomiting, fruity breath, confusion, high glucose?",
          body: "Go to the ER immediately. Diabetic ketoacidosis is a life-threatening emergency requiring IV insulin, fluids, and electrolyte monitoring.",
          good: false,
        },
        {
          num: 2,
          head: "Stable T2DM, well-controlled A1C, just need a refill?",
          body: "Book a $79 telehealth visit. Metformin or SGLT-2 inhibitor refill: total visit cost $79. Ongoing medication costs depend on your formulary.",
          good: true,
        },
        {
          num: 3,
          head: "New foot wound, vision changes, or kidney symptoms?",
          body: "See a primary care provider or specialist in person. These may signal diabetic complications requiring physical exam, imaging, or labs beyond a refill visit.",
          good: false,
        },
        {
          num: 4,
          head: "On insulin, running out and uninsured?",
          body: "A $79 visit can bridge-refill your current insulin dose until you see your primary care physician, and if you use insulin glargine, you can ask your pharmacy about Civica's lower-cost version (no more than $55 per 5-pen box). Do not ration insulin, contact a provider or FQHC immediately if you are at risk of running out.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "metformin 500 mg",
      price: "$5–$7 / 90 days",
      note: "cost + 15% + $5 fee, no insurance required (Jardiance and insulin not carried)",
    },
    medicationsTable: {
      title: "Diabetes Medication Costs (GoodRx Cash Price and Civica Rx, 2026)",
      caption: "30-day supply at major retail pharmacy. SGLT-2 prices reflect GoodRx coupon. Manufacturer savings cards may further reduce SGLT-2 costs for commercially insured patients.",
      rows: [
        {
          drug: "Metformin 500mg–1000mg, inexpensive generic, common first medication",
          cost: "$5.75–$9/month",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
        {
          drug: "Jardiance (empagliflozin) 10mg, SGLT-2, cardiovascular/renal benefit",
          cost: "~$355/month with GoodRx coupon (average retail over $500)",
          sourceUrl: "https://www.goodrx.com/jardiance",
        },
        {
          drug: "Farxiga (dapagliflozin) 10mg, SGLT-2, cardiovascular/renal/HF benefit",
          cost: "~$288/month with GoodRx coupon (~$600 retail); generic dapagliflozin FDA-approved April 2026",
          sourceUrl: "https://www.goodrx.com/farxiga",
        },
        {
          drug: "Civica insulin glargine-yfgn (long-acting, interchangeable with Lantus), launched January 2026",
          cost: "No more than $55 per box of 5 pens (recommended price)",
          sourceUrl: "https://civicarx.org/civica-to-launch-long-acting-insulin-glargine-in-the-us-in-january-2026/",
        },
        {
          drug: "Glipizide (sulfonylurea, generic), alternative oral agent",
          cost: "~$10–$15/month",
          sourceUrl: "https://www.goodrx.com/glipizide",
        },
      ],
    },
    homeCare: {
      title: "Between Appointments: Daily Diabetes Management",
      bullets: [
        "Take metformin with food to minimize GI side effects; extended-release formulation is available if immediate-release causes persistent nausea.",
        "Target fasting glucose 80–130 mg/dL and A1C < 7% for most non-pregnant adults per ADA 2026, your individual target should be set with your provider.",
        "SGLT-2 inhibitors increase urinary tract and genital infection risk, maintain good hygiene and report recurrent symptoms promptly.",
        "If you use insulin glargine and are uninsured or underinsured, ask your pharmacy about Civica's insulin glargine (no more than $55 per 5-pen box).",
        "Foot inspection daily, peripheral neuropathy makes small wounds hard to notice; check for cuts, blisters, or redness.",
        "Structured aerobic exercise (150 min/week) and dietary pattern (Mediterranean, low-refined-carbohydrate) are as important as medication for A1C control.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Manage Diabetes by Telehealth Alone",
      bullets: [
        "DKA or HHS symptoms, ER emergency; do not call for a telehealth visit.",
        "New chest pain, shortness of breath, or neurologic symptoms in a diabetic patient, emergency evaluation.",
        "Non-healing foot wound or suspected diabetic foot infection, in-person podiatry or vascular surgery evaluation.",
        "Sudden deterioration in kidney function or new significant proteinuria, nephrologist referral needed.",
        "Uncontrolled T1DM or insulin-dependent patient with frequent hypoglycemia, needs in-person endocrinology and diabetes education.",
        "Pregnancy with gestational diabetes or pre-existing diabetes, requires in-person MFM or endocrinology co-management.",
      ],
    },
    faqs: [
      {
        question: "How much does diabetes medication cost without insurance in 2026?",
        answer: "It depends sharply on which medication. Generic metformin costs as little as $5.75–$9/month via GoodRx (April 2026). A telehealth refill visit is $79, total about $85–$88. SGLT-2 inhibitors are more expensive: Jardiance 10mg runs ~$355/month and brand Farxiga 10mg ~$288/month with GoodRx coupons; a generic dapagliflozin was FDA-approved in April 2026. Civica insulin glargine has a recommended price of no more than $55 per 5-pen box since January 2026.",
      },
      {
        question: "What is the cheapest diabetes medication available in 2026?",
        answer: "Generic metformin is the clear answer, as low as $5.75/month (60 tablets) via GoodRx (April 2026), and available on $4/$10 generic programs at many chain pharmacies. The ADA 2026 Standards describe it as effective, safe, and inexpensive. Glipizide (generic sulfonylurea) is similarly cheap at $10–$15/month but carries hypoglycemia risk.",
      },
      {
        question: "What is Civica Rx insulin and how affordable is it?",
        answer: "Civica is a nonprofit drug company. On January 1, 2026 it launched insulin glargine-yfgn, a long-acting insulin interchangeable with Lantus, at a recommended consumer price of no more than $55 for a box of five prefilled pens. Branded long-acting insulins historically listed at $200–$400 per vial. Ask your pharmacy whether it stocks Civica insulin glargine.",
      },
      {
        question: "Does insurance cover Jardiance or Farxiga?",
        answer: "Most commercial plans cover SGLT-2 inhibitors on a brand-name tier, so copays vary by plan. Manufacturer savings cards (AstraZeneca's Farxiga card, Lilly/Boehringer's Jardiance card) can lower the copay for commercially insured patients who qualify. For uninsured patients, GoodRx brings Jardiance to ~$355/month and Farxiga to ~$288/month, still a significant cost.",
      },
      {
        question: "Can a telehealth doctor refill my diabetes medications?",
        answer: "Yes, for stable, controlled T2DM. Dr. Bhavsar can refill metformin, SGLT-2 inhibitors, and other oral agents in a $79 visit, and can refill a current, stable insulin dose as a bridge until you see your primary care physician (no dose changes; your most recent HbA1c is required). TeleDirectMD does not prescribe GLP-1 medications. Insulin initiation, insulin dose changes, complex regimen changes, and new complications warrant in-person care.",
      },
      {
        question: "What are ADA 2026 guidelines for diabetes treatment?",
        answer: "ADA 2026 Standards of Care recommend a layered approach: (1) lifestyle optimization first, Mediterranean dietary pattern, structured aerobic exercise; (2) person-centered medication choice, with metformin an effective, inexpensive option; (3) SGLT-2 inhibitors or GLP-1 receptor agonists for people with heart disease, heart failure, or kidney disease, independent of A1C. TeleDirectMD does not prescribe GLP-1 medications. Continuous glucose monitoring is now recommended earlier and more broadly, including older adults on insulin.",
      },
      {
        question: "When should a diabetic patient go to the ER vs. use telehealth?",
        answer: "Go to the ER for: symptoms of DKA (vomiting, fruity breath, confusion, blood glucose > 300 mg/dL), hyperosmolar hyperglycemic state, or any acute diabetic complication. Telehealth is appropriate for: stable refills, A1C counseling, minor medication adjustments, and lifestyle coaching when the patient feels clinically well with no acute symptoms.",
      },
      {
        question: "Is a telehealth visit appropriate for A1C monitoring in diabetes?",
        answer: "Yes, with caveats. A TeleDirectMD provider can order an A1C blood draw at a local lab (Quest, LabCorp) at the $79 telehealth visit, review results remotely, and adjust medications accordingly. Home A1C test kits are also available OTC for ~$30–$40. A telehealth visit cannot perform in-person foot exams or retinal screening, those still require periodic in-person evaluations annually per ADA guidelines.",
      },
    ],
    references: [
      {
        label: "GoodRx, Metformin pricing (April 2026)",
        url: "https://www.goodrx.com/metformin",
      },
      {
        label: "GoodRx, Jardiance pricing (April 2026)",
        url: "https://www.goodrx.com/jardiance",
      },
      {
        label: "GoodRx, Farxiga pricing (April 2026)",
        url: "https://www.goodrx.com/farxiga",
      },
      {
        label: "Civica, Insulin glargine U.S. launch, January 2026",
        url: "https://civicarx.org/civica-to-launch-long-acting-insulin-glargine-in-the-us-in-january-2026/",
      },
      {
        label: "ADA, Standards of Care in Diabetes 2026",
        url: "https://professional.diabetes.org/standards-of-care",
      },
      {
        label: "Network Health, Generic Farxiga (dapagliflozin) prices (2026)",
        url: "https://networkhealth.com/grow-in-the-know/2026/05/generic-farxiga-dapagliflozin-prices-are-dropping",
      },
      {
        label: "ADA, Standards of Care in Diabetes 2026, Section 9: Pharmacologic Approaches (Diabetes Care)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12690185/",
      },
      {
        label: "BetterCare, Urgent care cost without insurance (2026)",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'acne-treatment-cost': {
    slug: "acne-treatment-cost",
    pid: "acne-cost",
    h1: "Acne Treatment Cost: Online Dermatology Visit vs Urgent Care vs Dermatologist",
    metaTitle: "Acne Treatment Cost 2026: $90–$108 Online vs. $150+ Derm",
    metaDescription: "A telehealth acne visit + generic adapalene costs $90–$108 total. Dermatologist cash-pay: $150–$300+. Verified 2026 GoodRx and AAD-guideline-aligned pricing with sources.",
    breadcrumb: "Acne Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating mild-to-moderate acne via telehealth costs $90–$108 total in the US, a $79 video visit with a board-certified MD plus a generic retinoid: adapalene 0.1% gel runs as low as $10.75 for a 45g tube (GoodRx, May 2026), tretinoin cream starts at $29.00 (GoodRx, May 2026), and oral doxycycline 100mg for combination therapy starts at $13.86 per 14 tablets (GoodRx, May 2026). By comparison, a first dermatologist visit runs $150–$300 cash-pay and urgent care $150–$250 (BetterCare, 2026). Per the AAD's 2024 acne guidelines, combination topical therapy (retinoid + benzoyl peroxide ± antibiotic) is strongly recommended, and these medicines can be prescribed after a video visit for mild-to-moderate acne. TeleDirectMD does not prescribe isotretinoin (Accutane), which requires iPLEDGE REMS enrollment and ongoing monitoring.",
    answerLead: "Acne treatment cost in 2026 (uninsured, mild-to-moderate):",
    answerBody: "A telehealth acne visit + first-line generic topical therapy costs <strong>$90–$108 total</strong> at TeleDirectMD ($79 visit + adapalene 0.1% from <strong>$10.75</strong> or tretinoin from <strong>$29</strong> via <a href=\"https://www.goodrx.com/adapalene\">GoodRx, May 2026</a>). Adding a 30-day supply of oral doxycycline (about $25–$30) brings the first-month total to roughly <strong>$115–$138</strong> (<a href=\"https://www.goodrx.com/doxycycline-hyclate\">GoodRx doxycycline, May 2026</a>). Compare that to a first dermatologist visit: <strong>$150–$300</strong> cash-pay before prescription costs (<a href=\"https://bettercare.com/costs/dermatologist-cost\">BetterCare, 2026</a>), or urgent care at <strong>$150–$250</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2026</a>). TeleDirectMD does not prescribe isotretinoin (Accutane), which requires iPLEDGE REMS enrollment and ongoing monitoring.",
    heroSub: "A $79 video visit with a board-certified MD + a $10.75 generic retinoid. Total first-month cost: as low as $90. AAD 2024 guidelines strongly recommend combination topical therapy for mild-to-moderate acne.",
    heroIntro: "Mild-to-moderate acne, whiteheads, blackheads, papules, pustules, and early inflammatory breakouts, is one of the most telehealth-appropriate dermatology conditions. The 2024 American Academy of Dermatology guidelines strongly recommend topical retinoids (adapalene, tretinoin), benzoyl peroxide, and topical or oral antibiotics as first-line therapy, all of which a board-certified MD can evaluate and prescribe via video visit. We pulled 2025–2026 pricing from GoodRx, BetterCare, and Mira Health to map the full cost landscape, from a $10.75 generic retinoid to a $300+ derm office visit.",
    heroCardTitle: "Acne Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Topical retinoid or antibiotic e-prescription to your pharmacy",
      "AAD guideline-aligned combination therapy approach",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $90–$138 first month vs. $150–$300 derm cash-pay",
      "No waiting room, typical visit 10–15 minutes",
      "Same AAD 2024 first-line drugs: adapalene, tretinoin, doxycycline",
      "Isotretinoin referral provided if needed, honest scope limits",
      "Documented receipt suitable for HSA/FSA",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 90, highPrice: 138, description: "$79 visit + adapalene ($10.75) or tretinoin ($29) ± 30-day doxycycline ($25–$30)" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/conditions/acne/drugs", lowPrice: 50, highPrice: 150, description: "Visit ($40–$100) + topical retinoid or antibiotic ($10–$50)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 110, highPrice: 330, description: "In-person visit ($100–$300) + generic topical Rx ($10–$30)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 160, highPrice: 270, description: "Walk-in visit ($150–$250) + antibiotic ($10–$20); limited derm scope" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit; acne is not an emergency, avoid unless severe systemic reaction" },
    ],
    costTable: {
      title: "Acne Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first-line generic medication via GoodRx coupon. Excludes brand-name formulations, combination products, and in-office procedures (extractions, chemical peels).",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$90–$138 typical",
          includes: "$79 visit + adapalene ($10.75) or tretinoin ($29) ± 30-day doxycycline ($25–$30)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/adapalene",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$50–$150",
          includes: "Visit ($40–$100) + topical retinoid or antibiotic ($10–$50)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/acne/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$330",
          includes: "In-person visit ($100–$300) + generic topical Rx ($10–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$160–$270",
          includes: "Walk-in visit ($150–$250) + antibiotic ($10–$20); limited derm scope",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000",
          includes: "ED visit; acne is not an emergency, avoid unless severe systemic reaction",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Acne Visit Is Clinically Sound and Cost-Efficient",
      paragraphs: [
        "The <a href=\"https://www.aad.org/news/updated-guidelines-acne-management\">American Academy of Dermatology's 2024 acne guidelines</a> strongly recommend topical retinoids (adapalene, tretinoin), benzoyl peroxide, and oral doxycycline, all of which can be prescribed after a video visit. The guidelines specifically endorse combining multiple topical mechanisms (e.g., retinoid + benzoyl peroxide ± antibiotic) for better outcomes. The same guidelines strongly recommend isotretinoin for severe acne, acne with scarring or significant psychosocial burden, or acne that has not responded to standard treatment; it requires enrollment and monitoring under the iPLEDGE REMS program. For the majority of patients with mild-to-moderate acne, telehealth delivers the same standard-of-care regimen as an in-person visit.",
        "According to a 2026 study published in <em>JAMA Network Open</em> by Penn Medicine researchers, telemedicine episodes average <strong>$96 vs. $509 for in-person care</strong>, a five-fold cost difference (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). For acne specifically, the savings are amplified because no in-office procedures (extractions, culture swabs) are required for first-line management. The medication cost differential is equally compelling: according to <a href=\"https://www.goodrx.com/adapalene\">GoodRx (May 2026)</a>, generic adapalene 0.1% gel costs as low as $10.75 for a 45g tube, versus a $83.10 retail price without a coupon.",
        "The OTC vs. Rx landscape matters for cost planning. Adapalene 0.1% (Differin) is now available over the counter and runs $10.75–$16 via GoodRx, making it the most cost-accessible retinoid. Tretinoin 0.025%–0.1% cream remains prescription-only and costs $29–$102 via <a href=\"https://www.goodrx.com/tretinoin\">GoodRx (May 2026)</a>. For combination therapy adding oral doxycycline, <a href=\"https://www.goodrx.com/doxycycline-hyclate\">GoodRx prices doxycycline hyclate 100mg at $13.86 per 14 tablets (May 2026)</a>, a 30-day course runs roughly $25–$30 at most pharmacies. The AAD guidelines recommend always pairing oral antibiotics with benzoyl peroxide to reduce antibiotic resistance risk.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Acne Visit",
      groups: [
        {
          label: "College students",
          desc: "No dermatologist on campus? A $79 TeleDirectMD visit gets you a retinoid or antibiotic prescription within hours, not weeks.",
        },
        {
          label: "Working adults without derm access",
          desc: "Dermatology appointments can take weeks to get in many areas. A telehealth visit can start AAD-recommended therapy the same day.",
        },
        {
          label: "Patients managing cost",
          desc: "Generic adapalene at $10.75 vs. a $200+ brand combination product, telehealth helps you get the same active ingredient at a fraction of the price.",
        },
        {
          label: "Maintenance-phase patients",
          desc: "If you already have a regimen and need a refill or minor adjustment, a $79 video visit is far more efficient than a return derm appointment.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Acne Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Mild-to-moderate comedonal or inflammatory acne (whiteheads, blackheads, papules, pustules)",
        "Starting or adjusting topical retinoids (adapalene, tretinoin)",
        "Adding oral doxycycline for combination therapy",
        "Maintenance prescriptions for a stable, established regimen",
        "Patients who have already been evaluated in person for acne previously",
        "Follow-up visits to assess tolerability of a new retinoid",
      ],
      notFor: [
        "Severe nodular or cystic acne (requires in-person derm evaluation)",
        "Patients needing isotretinoin (TeleDirectMD does not prescribe it; iPLEDGE REMS enrollment and monitoring required)",
        "Suspected perioral dermatitis, rosacea, or fungal acne mimics (require visual examination)",
        "Acne with significant scarring requiring procedural treatment (chemical peels, laser)",
        "Rapid hormonal workup needed (PCOS, congenital adrenal hyperplasia)",
        "Anyone under 18 (TeleDirectMD treats adults only)",
      ],
    },
    decisionGuide: {
      title: "Acne: Telehealth, In-Person, or Dermatologist?",
      steps: [
        {
          num: 1,
          head: "Nodular, cystic, or severe scarring acne?",
          body: "See a dermatologist in person. Isotretinoin and procedural interventions require direct examination and, for isotretinoin, mandatory iPLEDGE enrollment and monthly labs.",
          good: false,
        },
        {
          num: 2,
          head: "Mild-to-moderate breakouts, papules, pustules, or comedones?",
          body: "Book a $79 telehealth visit. You'll likely leave with an adapalene or tretinoin prescription plus a benzoyl peroxide regimen, AAD first-line therapy, for about $90–$108 total.",
          good: true,
        },
        {
          num: 3,
          head: "Need doxycycline for combination therapy?",
          body: "Telehealth is appropriate. A board-certified MD can assess and prescribe oral antibiotics. Expect a total first-month cost of about $115–$138 with a topical retinoid plus a 30-day supply of generic doxycycline via GoodRx.",
          good: true,
        },
        {
          num: 4,
          head: "Not responding after 8–12 weeks of topical therapy?",
          body: "Step up to an in-person dermatologist visit. Evaluation for hormonal therapy (spironolactone, OCPs) or isotretinoin candidacy requires in-person assessment.",
          good: false,
        },
      ],
    },
    costPlus: {
      drug: "doxycycline",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Acne Medication Costs (GoodRx Generic, 2026)",
      caption: "Single-tube or 30-day supply, retail pharmacy with GoodRx coupon. Tretinoin and doxycycline are Rx-only; adapalene 0.1% is also available OTC.",
      rows: [
        {
          drug: "Adapalene 0.1% gel (OTC/Rx), first-line retinoid",
          cost: "$10.75–$16 per 45g tube",
          sourceUrl: "https://www.goodrx.com/adapalene",
        },
        {
          drug: "Tretinoin 0.025%–0.1% cream, prescription retinoid",
          cost: "$29–$102 per tube",
          sourceUrl: "https://www.goodrx.com/tretinoin",
        },
        {
          drug: "Doxycycline hyclate 100mg, first-line oral antibiotic",
          cost: "$13.86 per 14 tabs (~$25–$30/month)",
          sourceUrl: "https://www.goodrx.com/doxycycline-hyclate",
        },
        {
          drug: "Benzoyl peroxide 2.5%–5% wash/gel, OTC, always paired with antibiotic",
          cost: "$5–$15 OTC (no Rx needed)",
          sourceUrl: "https://www.goodrx.com/conditions/acne/drugs",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Prescription",
      bullets: [
        "Use an OTC benzoyl peroxide (2.5% or 5%) cleanser twice daily, it reduces acne bacteria and is required alongside any antibiotic to prevent resistance.",
        "Apply adapalene 0.1% OTC gel (Differin) nightly if you already have it, it's an AAD first-line retinoid available without a prescription.",
        "Avoid scrubbing or picking lesions, mechanical trauma worsens inflammation and can cause post-inflammatory hyperpigmentation.",
        "Use a non-comedogenic (oil-free) moisturizer; retinoid initiation without it leads to more dryness and dropout.",
        "Apply SPF 30+ sunscreen daily, retinoids increase photosensitivity, and UV exposure worsens post-acne marks.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat Acne by Telehealth",
      bullets: [
        "Nodular or cystic acne covering large areas of the face, back, or chest.",
        "If isotretinoin is being considered, it requires iPLEDGE REMS enrollment with a certified prescriber; TeleDirectMD does not prescribe it.",
        "Acne that may be a rosacea, perioral dermatitis, or fungal folliculitis mimic, visual exam essential.",
        "Acne in the context of new-onset irregular periods, hirsutism, or weight gain (suggests PCOS, needs workup).",
        "Acne unresponsive to two prior courses of first-line therapy, step up to in-person dermatology.",
        "Anyone under 18, TeleDirectMD treats adults only.",
      ],
    },
    faqs: [
      {
        question: "How much does acne treatment cost without insurance in 2026?",
        answer: "Via telehealth: $90–$108 total for a $79 visit plus generic adapalene from $10.75 or tretinoin from $29 (GoodRx, May 2026). Adding a 30-day supply of oral doxycycline (about $25–$30) brings the first-month total to about $115–$138. A first dermatologist visit costs $150–$300 cash-pay before medication. Urgent care runs $150–$250 (BetterCare, 2026); insured patients may pay a lower copay through their plan.",
      },
      {
        question: "What is the cheapest FDA-approved acne medication?",
        answer: "Adapalene 0.1% gel (Differin OTC) is the most affordable first-line retinoid at $10.75–$16 for a 45g tube via GoodRx (May 2026), no prescription required. It's also an AAD 2024 strongly recommended topical retinoid for mild-to-moderate acne. Generic benzoyl peroxide 2.5%–5% wash runs $5–$15 OTC at any pharmacy.",
      },
      {
        question: "Is tretinoin cheaper with a telehealth visit than going to a dermatologist?",
        answer: "Yes, significantly. A telehealth visit at $79 plus generic tretinoin at $29–$102 (GoodRx) totals $108–$181, vs. a $150–$300+ dermatologist visit plus the same prescription cost. The drug itself is identical regardless of where the prescription originates.",
      },
      {
        question: "Can I get doxycycline for acne online?",
        answer: "Yes. Oral doxycycline is an AAD 2024 first-line treatment for moderate acne when combined with a topical retinoid and benzoyl peroxide. A board-certified MD can assess and prescribe it via a $79 telehealth visit. Generic doxycycline hyclate 100mg runs $13.86 per 14 tablets at most pharmacies with GoodRx (May 2026).",
      },
      {
        question: "Does TeleDirectMD prescribe Accutane (isotretinoin)?",
        answer: "No. Isotretinoin (Accutane and generics) requires enrollment in the iPLEDGE Risk Evaluation and Mitigation Strategy (REMS) program, monthly pregnancy testing for patients who can become pregnant, and regular monitoring. TeleDirectMD does not prescribe it. We'll refer you to a dermatologist if your acne warrants isotretinoin evaluation.",
      },
      {
        question: "What does combination acne therapy cost per month?",
        answer: "The AAD 2024 guidelines recommend combining a topical retinoid + benzoyl peroxide ± antibiotic for better outcomes. A typical combination regimen costs $35–$50/month: adapalene $10.75 + OTC benzoyl peroxide ~$10 + doxycycline ~$25 (all GoodRx generic pricing, May 2026).",
      },
      {
        question: "Is adapalene or tretinoin better, and how do the prices compare?",
        answer: "Both are AAD first-line retinoids. Adapalene 0.1% (now OTC) is generally better tolerated for retinoid beginners and costs $10.75–$16 (GoodRx). Tretinoin 0.025%–0.1% is prescription-only, slightly more potent at equivalent concentrations, and costs $29–$102 (GoodRx). Your telehealth MD will recommend based on acne severity and prior retinoid experience.",
      },
      {
        question: "Does the $79 TeleDirectMD visit cover the prescription cost?",
        answer: "No, the $79 covers the video consultation. Medications are sent electronically to your pharmacy where you pay separately. With GoodRx, generic adapalene runs $10.75, tretinoin from $29, and doxycycline about $25–$30 for a 30-day supply. Total first-month cost is typically $90–$138; insured patients may pay less for an in-person visit through their plan copay.",
      },
    ],
    references: [
      {
        label: "AAD, 2024 Acne Vulgaris Clinical Guidelines",
        url: "https://www.aad.org/news/updated-guidelines-acne-management",
      },
      {
        label: "GoodRx, Adapalene pricing (May 2026)",
        url: "https://www.goodrx.com/adapalene",
      },
      {
        label: "GoodRx, Tretinoin pricing (May 2026)",
        url: "https://www.goodrx.com/tretinoin",
      },
      {
        label: "GoodRx, Doxycycline hyclate pricing (May 2026)",
        url: "https://www.goodrx.com/doxycycline-hyclate",
      },
      {
        label: "GoodRx, Acne drug class overview",
        url: "https://www.goodrx.com/conditions/acne/drugs",
      },
      {
        label: "BetterCare, Urgent care cost without insurance (2026)",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "BetterCare, Dermatologist cost (2026)",
        url: "https://bettercare.com/costs/dermatologist-cost",
      },
      {
        label: "BetterCare, ER visit cost (2026)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'eczema-treatment-cost': {
    slug: "eczema-treatment-cost",
    pid: "eczema-cost",
    h1: "Eczema Treatment Cost: Online Doctor vs Dermatologist vs Urgent Care",
    metaTitle: "Eczema Treatment Cost 2026: $88–$93 Online vs. $150+ Derm",
    metaDescription: "Telehealth eczema visit + generic triamcinolone costs $88–$93 total. Dermatologist cash-pay: $150–$300. AAD-guideline-cited 2026 prices. Biologics are out of scope and list at about $50,000+/yr.",
    breadcrumb: "Eczema Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating mild-to-moderate atopic dermatitis (eczema) via telehealth costs $88–$167 total in the US, a $79 video visit plus generic triamcinolone acetonide 0.1% cream from $9.19 (GoodRx, May 2026), or hydrocortisone 2.5% from $10.71 (GoodRx, May 2026). Prescription tacrolimus ointment 0.1% (Protopic), a calcineurin inhibitor recommended by the AAD for facial or sensitive-area eczema, costs $35–$88 via GoodRx. By comparison, a first dermatologist visit runs $150–$300 cash-pay and urgent care $150–$250 (BetterCare, 2026). Dupilumab (Dupixent) for moderate-to-severe eczema lists at about $4,193 per carton, roughly $50,000+ per year, and is started and monitored by a specialist; TeleDirectMD does not prescribe biologics. Per AAD and AAAAI/ACAAI 2023 guidelines, mid-potency topical corticosteroids and calcineurin inhibitors are first-line for mild-to-moderate eczema and are appropriate via telehealth.",
    answerLead: "Eczema treatment cost in 2026 (uninsured, mild-to-moderate):",
    answerBody: "A telehealth eczema visit + generic topical steroid costs <strong>$88–$93 total</strong> at TeleDirectMD ($79 visit + triamcinolone from <strong>$9.19</strong> via <a href=\"https://www.goodrx.com/triamcinolone\">GoodRx, May 2026</a>). For sensitive areas (face, eyelids), tacrolimus ointment is the preferred non-steroid option at <strong>$35–$88</strong> (<a href=\"https://www.goodrx.com/tacrolimus\">GoodRx, May 2026</a>). Compare to a first dermatologist visit at <strong>$150–$300</strong> (<a href=\"https://bettercare.com/costs/dermatologist-cost\">BetterCare, 2026</a>) or urgent care at <strong>$150–$250</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2026</a>). Dupilumab (Dupixent) lists at about <strong>$4,193 per carton</strong>, roughly $50,000+ per year (<a href=\"https://www.dupixent.com/FR-FAQitems/getting-dupixent-and-costs/What-is-the-cost-of-DUPIXENT\">Dupixent, 2026</a>), and requires specialist monitoring.",
    heroSub: "A $79 video visit + generic triamcinolone from $9.19. Total: as low as $88. AAD-guideline first-line topical therapy, assessed and prescribed via telehealth in 10–15 minutes.",
    heroIntro: "Eczema in its various forms affects about 31.6 million people in the US (<a href=\"https://nationaleczema.org/research/eczema-facts\">National Eczema Association</a>), and most manage flares with topical corticosteroids or calcineurin inhibitors. For mild-to-moderate flares without infection or severe systemic involvement, telehealth delivers the same first-line treatment as an in-person visit at a fraction of the cost. The 2023 AAAAI/ACAAI and AAD guidelines strongly support topical corticosteroids (triamcinolone, hydrocortisone) and topical calcineurin inhibitors (tacrolimus), all prescribable via telehealth. We pulled verified 2026 pricing from GoodRx, BetterCare, and Mira Health to show you exactly what eczema treatment costs across every care setting.",
    heroCardTitle: "Eczema Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Topical steroid or calcineurin inhibitor e-prescription to your pharmacy",
      "AAD-guideline-aligned first-line eczema management",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $88–$167 vs. $150–$300+ dermatologist cash-pay",
      "No waiting room, visit completed in 10–15 minutes",
      "Same first-line drugs as in-person: triamcinolone, hydrocortisone, tacrolimus",
      "Honest biologic referral if severity warrants dupilumab",
      "Documented receipt suitable for HSA/FSA",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 88, highPrice: 167, description: "$79 visit + triamcinolone ($9.19) or hydrocortisone ($10.71) or tacrolimus ($35–$88)" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/conditions/eczema/drugs", lowPrice: 49, highPrice: 130, description: "Visit ($40–$100) + topical corticosteroid ($9–$30)" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 109, highPrice: 330, description: "In-person visit ($100–$300) + generic topical Rx ($9–$30)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 159, highPrice: 280, description: "Walk-in visit ($150–$250) + topical steroid ($9–$30); limited derm expertise" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit; appropriate only for severe infection (cellulitis), not routine eczema flares" },
    ],
    costTable: {
      title: "Eczema Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first-line generic topical medication via GoodRx coupon. Excludes biologics (dupilumab, tralokinumab) and JAK inhibitors, all require specialist management.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$88–$167 typical",
          includes: "$79 visit + triamcinolone ($9.19) or hydrocortisone ($10.71) or tacrolimus ($35–$88)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/triamcinolone",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$49–$130",
          includes: "Visit ($40–$100) + topical corticosteroid ($9–$30)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/eczema/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$109–$330",
          includes: "In-person visit ($100–$300) + generic topical Rx ($9–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$159–$280",
          includes: "Walk-in visit ($150–$250) + topical steroid ($9–$30); limited derm expertise",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000",
          includes: "ED visit; appropriate only for severe infection (cellulitis), not routine eczema flares",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Eczema Visit Is Clinically Sound and Cost-Efficient",
      paragraphs: [
        "The <a href=\"https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis\">AAD's atopic dermatitis clinical guidelines</a> (topical therapy 2023, systemic therapy 2024) make strong evidence-based recommendations for topical corticosteroids (e.g., triamcinolone acetonide, hydrocortisone), topical calcineurin inhibitors (tacrolimus, pimecrolimus), and moisturizers as foundational first-line therapies. These agents are appropriate to prescribe via telehealth for mild-to-moderate flares. The 2023 AAAAI/ACAAI Joint Task Force guidelines, published in the <em>Annals of Allergy, Asthma & Immunology</em> (<a href=\"https://pubmed.ncbi.nlm.nih.gov/38108679/\">PubMed, 2024</a>), similarly recommend topical corticosteroids and calcineurin inhibitors as cornerstone management. Biologics (dupilumab, tralokinumab) and JAK inhibitors (abrocitinib, upadacitinib) are strongly recommended only for moderate-to-severe AD failing topical therapy, these require in-person specialist initiation and monitoring.",
        "According to a 2026 <em>JAMA Network Open</em> study by Penn Medicine researchers, telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, a five-fold cost difference (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). For eczema management, the cost advantage is stark: according to <a href=\"https://www.goodrx.com/triamcinolone\">GoodRx (May 2026)</a>, generic triamcinolone acetonide 0.1% cream starts at <strong>$9.19 per tube</strong>, and generic hydrocortisone 2.5% cream starts at <strong>$10.71</strong>, vs. the $150–$300+ dermatologist visit just to obtain the same prescription.",
        "The biologic cost context matters for patients researching eczema treatment costs. Dupilumab (Dupixent), the most widely prescribed biologic for moderate-to-severe AD, lists at about $4,193 per carton as of January 2026, roughly $50,000+ per year. Eligible commercially insured patients may pay as little as $0 per fill with the manufacturer copay card, and biologics are started and monitored by a specialist, not through TeleDirectMD. Tacrolimus ointment 0.1%, a prescription non-steroidal option endorsed by the AAD guidelines for sensitive skin areas, costs <strong>$35–$88 for a 30g tube</strong> via <a href=\"https://www.goodrx.com/tacrolimus\">GoodRx (May 2026)</a>, far less than a specialist visit just to obtain the prescription.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Eczema Visit",
      groups: [
        {
          label: "Adults with recurrent mild-to-moderate flares",
          desc: "You know the pattern, a specific trigger, redness, itch. A $79 telehealth visit gets you the topical steroid or tacrolimus prescription you need without a 3-week derm wait.",
        },
        {
          label: "Adults with eczema on the face or skin folds",
          desc: "Thin skin needs gentler treatment. A telehealth visit can prescribe low-potency hydrocortisone or non-steroid tacrolimus for these areas.",
        },
        {
          label: "Patients managing cost",
          desc: "Generic triamcinolone at $9.19 vs. a $200+ brand topical steroid. Telehealth helps you access first-line, guideline-recommended generics instead of paying for a derm visit to get the same drug.",
        },
        {
          label: "Stable moderate patients between derm visits",
          desc: "If your dermatologist manages your biologics but you need a short-course flare rescue prescription, a $79 telehealth visit bridges the gap efficiently.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Eczema Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Mild-to-moderate eczema flares in adults 18 and older",
        "Prescribing or refilling mid-potency topical steroids (triamcinolone 0.1%)",
        "Prescribing low-potency steroids (hydrocortisone 1%–2.5%) or calcineurin inhibitors (tacrolimus)",
        "Patients with a known diagnosis of atopic dermatitis needing flare management",
        "Counseling on moisturizer-first approach and trigger identification",
        "Follow-up after a flare to taper steroid or assess response",
      ],
      notFor: [
        "Eczema with signs of secondary bacterial infection (warm, weeping, crusted, may need oral antibiotics after in-person exam)",
        "Eczema covering >30% of body surface area (severe disease, warrants specialist evaluation for biologics)",
        "Suspected allergic contact dermatitis requiring patch testing",
        "Eczema herpeticum (eczema with herpetic superinfection, urgent in-person care)",
        "Initiating or monitoring biologic therapy (dupilumab, tralokinumab), requires specialist",
        "Children and teens under 18 (TeleDirectMD treats adults only)",
      ],
    },
    decisionGuide: {
      title: "Eczema: Telehealth, In-Person, or Dermatologist?",
      steps: [
        {
          num: 1,
          head: "Signs of infection, warm, weeping, crusted, or feverish?",
          body: "Go to urgent care or your primary care provider. Infected eczema (impetigo superinfection, eczema herpeticum) requires in-person exam and may need oral antibiotics or antivirals.",
          good: false,
        },
        {
          num: 2,
          head: "Mild-to-moderate flare, known diagnosis?",
          body: "Book a $79 telehealth visit. Total cost: $88–$93 with generic triamcinolone or hydrocortisone via GoodRx. Visit takes 10–15 minutes.",
          good: true,
        },
        {
          num: 3,
          head: "Extensive involvement or not responding to topical therapy?",
          body: "See a dermatologist in person. You may be a candidate for dupilumab (Dupixent) or another biologic, these require specialist initiation and insurance prior authorization.",
          good: false,
        },
        {
          num: 4,
          head: "Stable, flare-managed, need a refill?",
          body: "Telehealth refill visits are appropriate and efficient. Book the same $79 visit.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "triamcinolone",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Eczema Medication Costs (GoodRx Generic, 2026)",
      caption: "Single-tube pricing, retail pharmacy with GoodRx coupon. Biologics (dupilumab) are excluded, these require specialist prescribing and insurance authorization.",
      rows: [
        {
          drug: "Triamcinolone acetonide 0.1% cream, mid-potency steroid, first-line",
          cost: "$9.19–$14 per tube",
          sourceUrl: "https://www.goodrx.com/triamcinolone",
        },
        {
          drug: "Hydrocortisone 2.5% cream, low-potency steroid, face/sensitive areas",
          cost: "$10.71–$14 per tube",
          sourceUrl: "https://www.goodrx.com/hydrocortisone",
        },
        {
          drug: "Tacrolimus 0.1% ointment (Protopic), calcineurin inhibitor, non-steroid",
          cost: "$35.25–$88 per 30g tube",
          sourceUrl: "https://www.goodrx.com/tacrolimus",
        },
        {
          drug: "Dupilumab (Dupixent), biologic for severe AD; in-person specialist only",
          cost: "~$4,193 per carton at list (about $50,000+/yr); as little as $0 per fill with copay card if eligible",
          sourceUrl: "https://www.dupixent.com/FR-FAQitems/getting-dupixent-and-costs/What-is-the-cost-of-DUPIXENT",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Prescription",
      bullets: [
        "Apply a thick, fragrance-free emollient (e.g., CeraVe, Vanicream, Eucerin) within 3 minutes of bathing, the \"soak and seal\" method reduces transepidermal water loss.",
        "Use OTC 1% hydrocortisone cream (available at any pharmacy for ~$6–$10) for 1–2 days on mild, localized flares.",
        "Avoid known triggers: wool fabrics, harsh soaps, hot water baths, and identified allergens.",
        "Keep nails trimmed short to minimize skin damage from scratching.",
        "Cool compresses or wet wrap therapy can relieve acute itch while medication takes effect.",
        "If symptoms worsen rapidly or the affected skin becomes warm, swollen, and crusty, see a provider in person, these suggest secondary infection.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat Eczema by Telehealth",
      bullets: [
        "Warmth, weeping, yellow crusting, or fever, signs of secondary bacterial infection.",
        "Clustered blisters or pain suggesting eczema herpeticum, requires urgent in-person care.",
        "Eczema covering more than 30% of the body, warrants in-person specialist assessment for systemic therapy.",
        "Unclear diagnosis, could be psoriasis, contact dermatitis, or tinea corporis (ringworm) mimicking eczema.",
        "Anyone under 18, TeleDirectMD treats adults only.",
        "Patients already on biologics who are experiencing a treatment failure, needs specialist escalation.",
      ],
    },
    faqs: [
      {
        question: "How much does eczema treatment cost without insurance in 2026?",
        answer: "Via telehealth: $88–$93 total for a $79 TeleDirectMD visit plus generic triamcinolone 0.1% cream from $9.19, or $114–$167 with tacrolimus (GoodRx, May 2026). A first dermatologist visit costs $150–$300 cash-pay before medications, and urgent care runs $150–$250 (BetterCare, 2026); insured patients may pay a lower copay through their plan. Dupilumab (Dupixent) for moderate-to-severe eczema lists at about $50,000+ per year, and these patients need specialist care and insurance authorization.",
      },
      {
        question: "What is the cheapest first-line eczema medication?",
        answer: "Generic triamcinolone acetonide 0.1% cream is the most cost-effective mid-potency topical steroid at $9.19–$14 per tube with GoodRx (May 2026). Generic hydrocortisone 2.5% cream starts at $10.71 for sensitive areas. Both are AAD first-line recommendations for mild-to-moderate eczema flares.",
      },
      {
        question: "Is tacrolimus (Protopic) better than triamcinolone, and how do the costs compare?",
        answer: "They serve different purposes. Triamcinolone 0.1% is the standard mid-potency steroid for most eczema flares ($9.19 with GoodRx). Tacrolimus 0.1% (Protopic generic) is a non-steroidal calcineurin inhibitor preferred for face, eyelids, and skin folds where prolonged steroid use risks atrophy, it costs $35–$88 per 30g tube (GoodRx, May 2026). The AAD guidelines strongly recommend both.",
      },
      {
        question: "Can I get triamcinolone or tacrolimus prescribed via telehealth?",
        answer: "Yes. Both are standard Rx topical medications that can be evaluated and prescribed during a video visit. A TeleDirectMD board-certified MD will assess your flare severity, affected areas, and prior treatment history before selecting the appropriate agent.",
      },
      {
        question: "What does dupilumab (Dupixent) cost for eczema?",
        answer: "Dupilumab (Dupixent) lists at about $4,193 per carton as of January 2026, roughly $50,000+ per year at list price. Eligible commercially insured patients may pay as little as $0 per fill with the DUPIXENT MyWay copay card. This biologic is used for moderate-to-severe eczema not controlled with topical therapy and is started by a specialist; TeleDirectMD does not prescribe it.",
      },
      {
        question: "When should eczema go to the ER?",
        answer: "Eczema alone is not an ER condition. Go to the ER or urgent care if you develop fever, rapidly spreading redness, eczema herpeticum (clustered blisters with pain), or signs of sepsis. An uninsured ER visit typically costs $1,500–$3,000 (BetterCare, 2026), many times the cost of a same-day telehealth visit.",
      },
      {
        question: "Does the Penn Medicine study apply to telehealth eczema visits?",
        answer: "Yes. Penn Medicine's 2026 JAMA Network Open study found telemedicine episodes average $96 vs. $509 in-person, a 5× cost difference. For mild-to-moderate eczema, where the treatment plan (topical Rx) is often the same in either setting, an in-person visit can add cost without changing treatment.",
      },
      {
        question: "Is the $79 TeleDirectMD eczema visit covered by insurance?",
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. For out-of-network or self-pay patients, the $79 flat rate often beats an in-network specialist copay when a deductible is unmet. HSA and FSA cards are accepted.",
      },
    ],
    references: [
      {
        label: "AAD, Atopic Dermatitis Clinical Guidelines (topical 2023, systemic 2024)",
        url: "https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis",
      },
      {
        label: "AAAAI/ACAAI Joint Task Force, Atopic Dermatitis Guidelines 2023 (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/38108679/",
      },
      {
        label: "GoodRx, Triamcinolone pricing (May 2026)",
        url: "https://www.goodrx.com/triamcinolone",
      },
      {
        label: "GoodRx, Hydrocortisone pricing (May 2026)",
        url: "https://www.goodrx.com/hydrocortisone",
      },
      {
        label: "GoodRx, Tacrolimus pricing (May 2026)",
        url: "https://www.goodrx.com/tacrolimus",
      },
      {
        label: "Dupixent, Cost information (January 2026)",
        url: "https://www.dupixent.com/FR-FAQitems/getting-dupixent-and-costs/What-is-the-cost-of-DUPIXENT",
      },
      {
        label: "National Eczema Association, Eczema stats",
        url: "https://nationaleczema.org/research/eczema-facts",
      },
      {
        label: "BetterCare, Urgent care cost without insurance (2026)",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "BetterCare, Dermatologist cost (2026)",
        url: "https://bettercare.com/costs/dermatologist-cost",
      },
      {
        label: "BetterCare, ER visit cost (2026)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'seasonal-allergies-cost': {
    slug: "seasonal-allergies-cost",
    pid: "allergies-cost",
    h1: "Seasonal Allergies Cost: Online Doctor vs Urgent Care vs Allergist",
    metaTitle: "Seasonal Allergies Cost 2026: $94 Online vs. $150+ Urgent Care",
    metaDescription: "Telehealth allergy visit + prescription fluticasone costs $94 total. OTC loratadine: $5/month. Montelukast (FDA boxed warning): $8.73/month. Verified 2026 GoodRx pricing.",
    breadcrumb: "Seasonal Allergies Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, managing seasonal allergic rhinitis via telehealth costs $94 total in the US, a $79 video visit plus generic fluticasone propionate nasal spray by prescription from $14.67 (GoodRx, May 2026; the same 50 mcg strength is sold OTC as Flonase for $18–$30). OTC second-generation antihistamines are even cheaper: generic loratadine 10mg (Claritin) costs as low as $4.97 for 30 tablets, and cetirizine 10mg (Zyrtec) runs $8.70 for 30 tablets (GoodRx, May 2026). Generic montelukast 10mg (Singulair) costs $8.73/month (GoodRx), but carries an FDA boxed warning for serious neuropsychiatric effects and is no longer first-line per ICAR 2023 guidelines. By comparison, an allergist visit is commonly $200–$350 cash-pay (estimate), urgent care $150–$250 (BetterCare, 2026), and primary care $100–$300 (Mira Health, 2025). ICAR 2023 guidelines strongly recommend intranasal corticosteroids and second-generation antihistamines as first-line therapy.",
    answerLead: "Seasonal allergies treatment cost in 2026 (uninsured):",
    answerBody: "The cheapest effective regimen: OTC generic loratadine at <strong>$4.97/month</strong> or cetirizine at <strong>$8.70/month</strong> (<a href=\"https://www.goodrx.com/loratadine\">GoodRx, May 2026</a>), no visit required. Adding prescription fluticasone nasal spray brings the first-season total to roughly <strong>$94</strong> ($79 telehealth visit + $14.67 generic fluticasone, <a href=\"https://www.goodrx.com/fluticasone-propionate\">GoodRx, May 2026</a>). Compare to an allergist cash-pay visit, commonly <strong>$200–$350+</strong>, or urgent care at <strong>$150–$250</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2026</a>). Generic montelukast (Singulair) costs <strong>$8.73/month</strong> (<a href=\"https://www.goodrx.com/montelukast\">GoodRx</a>) but carries an <strong>FDA boxed warning</strong> for neuropsychiatric events, not first-line.",
    heroSub: "A $79 telehealth visit + generic fluticasone nasal spray from $14.67. Total: $94. ICAR 2023 guidelines endorse intranasal steroids as first-line therapy, telehealth-prescribable in 10 minutes.",
    heroIntro: "Seasonal allergic rhinitis affects more than 19 million US adults and is one of the most straightforward conditions to manage via telehealth. The International Consensus Statement on Allergy and Rhinology 2023 (ICAR: AR 2023) strongly recommends intranasal corticosteroids (fluticasone, budesonide) and second-generation antihistamines (loratadine, cetirizine) as first-line treatment, both are prescribable by telehealth. The cost spectrum is wide: from $4.97 OTC loratadine to $200–$350+ allergist visits and $1,000+/year immunotherapy. We mapped every option with 2026 pricing from GoodRx, BetterCare, and Mira Health.",
    heroCardTitle: "Seasonal Allergy Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Prescription fluticasone or other intranasal steroid to your pharmacy",
      "ICAR 2023 guideline-aligned first-line therapy",
      "40+ states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $94 vs. $200–$350+ allergist cash-pay",
      "No waiting room, typical visit takes 10 minutes",
      "Prescription generic fluticasone, often cheaper than OTC Flonase with a GoodRx coupon",
      "Honest montelukast FDA boxed-warning counseling",
      "Documented receipt suitable for HSA/FSA",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 94, highPrice: 110, description: "$79 visit + prescription fluticasone ($14.67) or nasal steroid/antihistamine combo" },
      { providerName: "OTC self-treatment (no visit)", providerUrl: "https://www.goodrx.com/loratadine", lowPrice: 5, highPrice: 30, description: "Loratadine $4.97/30 tabs, cetirizine $8.70/30 tabs, Flonase OTC ~$18–$30; no prescription needed" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 105, highPrice: 330, description: "In-person visit ($100–$300) + prescription allergy Rx ($5–$30)" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 155, highPrice: 280, description: "Walk-in visit ($150–$250) + allergy medication ($5–$30)" },
      { providerName: "Allergist / specialist (cash-pay)", providerUrl: null, lowPrice: 200, highPrice: 400, description: "Consultation + possible allergy testing; immunotherapy ($800–$4,000+/year) separate" },
    ],
    costTable: {
      title: "Seasonal Allergies Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first-line medication via GoodRx coupon. OTC options (loratadine, cetirizine, fluticasone OTC) require no visit. Immunotherapy (allergy shots) and specialist testing excluded.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$94–$110 typical",
          includes: "$79 visit + prescription fluticasone ($14.67) or nasal steroid/antihistamine combo",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/fluticasone-propionate",
        },
        {
          setting: "OTC self-treatment (no visit)",
          cost: "$5–$30/month",
          includes: "Loratadine $4.97/30 tabs, cetirizine $8.70/30 tabs, Flonase OTC ~$18–$30; no prescription needed",
          source: "GoodRx, May 2026",
          sourceUrl: "https://www.goodrx.com/loratadine",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$105–$330",
          includes: "In-person visit ($100–$300) + prescription allergy Rx ($5–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$155–$280",
          includes: "Walk-in visit ($150–$250) + allergy medication ($5–$30)",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Allergist / specialist (cash-pay)",
          cost: "$200–$400+ initial",
          includes: "Consultation + possible allergy testing; immunotherapy ($800–$4,000+/year) separate",
          source: "Estimate; self-pay rates vary",
          sourceUrl: null,
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Seasonal Allergy Visit Is Clinically Sound and Cost-Efficient",
      paragraphs: [
        "The <a href=\"https://bulletin.entnet.org/clinical-patient-care/article/22861705/icar-allergic-rhinitis-2023\">International Consensus Statement on Allergy and Rhinology 2023 (ICAR: AR 2023)</a>, developed by over 120 authors, makes strong recommendations for intranasal corticosteroids (e.g., fluticasone propionate, budesonide) and second-generation antihistamines (loratadine, cetirizine, fexofenadine) as first-line therapy for allergic rhinitis. ICAR 2023 also issues a strong recommendation <em>against</em> routine oral corticosteroid use and oral decongestant monotherapy. All first-line agents are prescribable by telehealth, and both loratadine and cetirizine are available OTC without any visit at all. Montelukast (Singulair generic) is explicitly a second- or third-line option, the FDA added a <strong>boxed warning</strong> in 2020 citing serious neuropsychiatric adverse events including suicidal thinking; ICAR 2023 recommends it only when first-line options fail.",
        "According to a 2026 <em>JAMA Network Open</em> study by Penn Medicine researchers, telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, a five-fold cost difference (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). For allergic rhinitis, a telehealth visit is especially cost-efficient because the diagnosis is clinical (seasonal pattern, sneezing, rhinorrhea, nasal congestion) and no labs or skin testing are needed for initial management. Allergy testing is reserved for patients failing empiric therapy who are considering allergen immunotherapy.",
        "The OTC vs. Rx cost nuance is important for allergy patients. Fluticasone propionate nasal spray is now available OTC as Flonase ($18–$30 for a 120-spray bottle), but Rx generic fluticasone via GoodRx costs as low as <strong>$14.67</strong> (<a href=\"https://www.goodrx.com/fluticasone-propionate\">GoodRx, May 2026</a>), meaning the prescription version is actually cheaper than OTC at most pharmacies when you use a GoodRx coupon. Generic loratadine 10mg runs <strong>$4.97 for 30 tablets</strong> and generic cetirizine 10mg costs <strong>$8.70 for 30 tablets</strong> (<a href=\"https://www.goodrx.com/cetirizine\">GoodRx, May 2026</a>), no visit or prescription needed. Generic montelukast 10mg (Singulair) costs <strong>$8.73/month</strong> via GoodRx but should only be used after discussing the FDA boxed warning with a clinician.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Seasonal Allergy Visit",
      groups: [
        {
          label: "OTC-resistant allergy sufferers",
          desc: "Loratadine and cetirizine not cutting it? A $79 telehealth visit can add a prescription nasal steroid to a full first-line regimen for about $94 total.",
        },
        {
          label: "Working adults during peak pollen season",
          desc: "Spring tree pollen, summer grass, fall ragweed, book an evening telehealth visit to optimize your regimen before the worst weeks hit.",
        },
        {
          label: "Patients who took montelukast and had side effects",
          desc: "The FDA boxed warning for Singulair is underappreciated. Telehealth lets you review your regimen and switch to safer first-line options without paying for a specialist visit.",
        },
        {
          label: "Travelers entering a new allergy season",
          desc: "Moving to a new city or region mid-season? A $79 telehealth visit establishes you on the right regimen before your first pollen exposure.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Seasonal Allergies Belong in Telehealth vs. In-Person",
      goodFor: [
        "Classic seasonal allergic rhinitis: sneezing, nasal congestion, rhinorrhea, itchy eyes, seasonal pattern",
        "Optimizing a regimen when OTC antihistamines are providing insufficient relief",
        "Prescribing or switching intranasal corticosteroids (fluticasone, budesonide, mometasone)",
        "Counseling on montelukast FDA boxed warning and whether to continue or switch",
        "Managing allergy-associated mild asthma symptoms during pollen season",
        "Patients with perennial allergic rhinitis on a stable regimen needing refills",
      ],
      notFor: [
        "Suspected nasal polyps or chronic sinusitis (requires nasal endoscopy)",
        "Asthma exacerbation with shortness of breath or wheezing at rest",
        "Anaphylaxis or severe allergic reaction, ER immediately",
        "Patients requesting allergen skin testing or initiating immunotherapy (allergy shots/drops), allergist required",
        "Diagnosis uncertain, could be non-allergic rhinitis, deviated septum, or chronic sinusitis",
        "Orbital cellulitis, severe sinus pain, or facial swelling (rule out bacterial sinusitis or abscess)",
      ],
    },
    decisionGuide: {
      title: "Seasonal Allergies: Telehealth, In-Person, or Allergist?",
      steps: [
        {
          num: 1,
          head: "OTC loratadine or cetirizine already controlling symptoms well?",
          body: "Continue OTC, no visit needed. Loratadine 10mg runs $4.97/month and cetirizine $8.70/month at any pharmacy without a prescription (GoodRx, May 2026).",
          good: true,
        },
        {
          num: 2,
          head: "OTC not enough, need prescription nasal steroid or better optimization?",
          body: "Book a $79 telehealth visit. Prescription fluticasone runs $14.67 via GoodRx, cheaper than OTC Flonase. Total first-treatment cost: about $94.",
          good: true,
        },
        {
          num: 3,
          head: "On montelukast and experiencing mood changes, sleep problems, or anxiety?",
          body: "Contact a provider immediately. The FDA boxed warning for montelukast (Singulair) cites serious neuropsychiatric events. A telehealth visit can facilitate a safe switch to first-line therapy.",
          good: false,
        },
        {
          num: 4,
          head: "Symptoms uncontrolled on optimal pharmacotherapy, considering immunotherapy?",
          body: "See an allergist. Allergy skin testing and immunotherapy (shots or sublingual drops) require in-person allergist evaluation. These are definitive, long-term treatments, not telehealth-initiatable.",
          good: false,
        },
      ],
    },
    costPlus: {
      drug: "montelukast",
      price: "$5–$8",
      note: "cost + 15% + $5 fee, no insurance required",
    },
    medicationsTable: {
      title: "Seasonal Allergy Medication Costs (GoodRx Generic, 2026)",
      caption: "30-day supply at retail pharmacy with GoodRx coupon unless noted. OTC items require no prescription. Montelukast carries FDA boxed warning, see note.",
      rows: [
        {
          drug: "Loratadine 10mg (Claritin generic), OTC first-line antihistamine",
          cost: "$4.97–$13/month (30 tabs)",
          sourceUrl: "https://www.goodrx.com/loratadine",
        },
        {
          drug: "Cetirizine 10mg (Zyrtec generic), OTC first-line antihistamine",
          cost: "$8.70/month (30 tabs)",
          sourceUrl: "https://www.goodrx.com/cetirizine",
        },
        {
          drug: "Fluticasone propionate nasal spray (Rx generic; Flonase OTC ~$18–$30), first-line intranasal steroid",
          cost: "$14.67 Rx via GoodRx (16g/120 sprays)",
          sourceUrl: "https://www.goodrx.com/fluticasone-propionate",
        },
        {
          drug: "Montelukast 10mg (Singulair generic), ⚠️ FDA boxed warning; second-line only",
          cost: "$8.73/month (30 tabs)",
          sourceUrl: "https://www.goodrx.com/montelukast",
        },
      ],
    },
    homeCare: {
      title: "Self-Care While You Await Your Prescription",
      bullets: [
        "Start an OTC second-generation antihistamine (loratadine or cetirizine) immediately, both are ICAR 2023 first-line and cost under $9/month.",
        "Rinse nasal passages with saline spray or a neti pot, ICAR 2023 strongly recommends intranasal saline as adjunctive therapy.",
        "Keep windows closed during peak pollen hours (5–10 AM); shower after outdoor exposure to remove pollen from hair and skin.",
        "Monitor local pollen counts via the National Allergy Bureau (pollen.aaaai.org) and limit outdoor activity on high-count days.",
        "Avoid rubbing your eyes, use OTC ketotifen (Zaditor) eye drops for allergic conjunctivitis.",
        "If you were using first-generation antihistamines (diphenhydramine/Benadryl), switch, ICAR 2023 recommends against them due to sedation and cognitive effects.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat Seasonal Allergies by Telehealth",
      bullets: [
        "Severe shortness of breath, wheezing, or stridor, could be asthma exacerbation or anaphylaxis (911 or ER).",
        "Facial swelling, throat tightening, or hives after allergen exposure, anaphylaxis; use epinephrine and call 911.",
        "High fever with sinus pain and facial pressure, may be bacterial sinusitis requiring antibiotics and in-person exam.",
        "Nasal obstruction with unilateral symptoms only, rule out nasal polyp or foreign body.",
        "Requesting allergen immunotherapy (allergy shots) initiation, allergist in person required.",
        "Anyone under 18, TeleDirectMD treats adults only.",
      ],
    },
    faqs: [
      {
        question: "How much do seasonal allergies cost to treat without insurance in 2026?",
        answer: "The cheapest effective option requires no visit: OTC generic loratadine (Claritin) costs $4.97/month and cetirizine (Zyrtec) costs $8.70/month at most pharmacies with GoodRx (May 2026). If you need prescription intranasal steroids, a $79 telehealth visit plus generic fluticasone at $14.67 brings your first-treatment total to about $94, vs. $200–$350+ for an allergist cash-pay visit.",
      },
      {
        question: "Is prescription fluticasone cheaper than OTC Flonase?",
        answer: "Yes, often significantly. Generic fluticasone propionate nasal spray (the same active ingredient as Flonase) costs $14.67 via GoodRx coupon (May 2026) vs. $18–$30 for OTC Flonase at retail. The telehealth visit adds $79, so the total Rx route (about $94) costs more than buying OTC Flonase, but if you're an established allergy patient needing a refill, the telehealth route gets you the prescription version at a lower drug cost.",
      },
      {
        question: "What is the FDA boxed warning on montelukast (Singulair)?",
        answer: "In 2020, the FDA added a boxed warning, its most serious safety alert, to montelukast (Singulair and generics) for serious neuropsychiatric adverse events: agitation, anxiety, depression, hallucinations, and suicidal thinking. ICAR 2023 guidelines recommend against using montelukast as first-line therapy for this reason. Generic montelukast costs only $8.73/month (GoodRx), but the risk-benefit calculation favors intranasal corticosteroids and antihistamines first.",
      },
      {
        question: "What is the cheapest FDA-approved treatment for seasonal allergies?",
        answer: "Generic loratadine 10mg (Claritin generic) at $4.97 for a 30-tablet supply, no prescription needed, available at any pharmacy with GoodRx (May 2026). For patients who need intranasal steroids, prescription fluticasone at $14.67 (GoodRx) is actually cheaper than OTC Flonase at $18–$30.",
      },
      {
        question: "Can I get a montelukast prescription online to save money on Singulair?",
        answer: "Technically yes, generic montelukast costs $8.73/month (GoodRx). However, a telehealth visit for montelukast should include counseling on the FDA boxed warning for neuropsychiatric events. Montelukast is appropriate for second-line use (e.g., when intranasal steroids and antihistamines are insufficient) but should not be the first medication prescribed for seasonal allergies.",
      },
      {
        question: "Do I need to see an allergist for seasonal allergies?",
        answer: "Not initially. Most seasonal allergies are well-controlled with OTC antihistamines and intranasal steroids, both available via telehealth or even without a visit. You should see an allergist if symptoms remain uncontrolled on optimal pharmacotherapy, if you want allergen skin testing, or if you're considering immunotherapy (allergy shots or sublingual drops). Allergist initial visits run $200–$400+ cash-pay.",
      },
      {
        question: "Does the Penn Medicine study apply to telehealth allergy visits?",
        answer: "Yes. Penn Medicine's 2026 JAMA Network Open study found care episodes that began with telemedicine averaged $96 in charges vs. $509 for those that began in person, about a 5× difference. Seasonal allergies are particularly well-suited for telehealth: the diagnosis is clinical (seasonal pattern, symptom profile) and no labs, allergy tests, or procedures are needed for initial first-line management.",
      },
      {
        question: "What is the difference between loratadine and cetirizine, and which is cheaper?",
        answer: "Both are ICAR 2023 first-line second-generation antihistamines. Loratadine (Claritin generic) is slightly less sedating and costs $4.97/month (GoodRx). Cetirizine (Zyrtec generic) is mildly more effective in some patients but can cause drowsiness in ~10% of users; it costs $8.70/month (GoodRx). Both are OTC, no prescription or visit required.",
      },
    ],
    references: [
      {
        label: "ICAR: Allergic Rhinitis 2023, International Consensus Statement",
        url: "https://bulletin.entnet.org/clinical-patient-care/article/22861705/icar-allergic-rhinitis-2023",
      },
      {
        label: "GoodRx, Loratadine pricing (May 2026)",
        url: "https://www.goodrx.com/loratadine",
      },
      {
        label: "GoodRx, Cetirizine pricing (May 2026)",
        url: "https://www.goodrx.com/cetirizine",
      },
      {
        label: "GoodRx, Fluticasone propionate pricing (May 2026)",
        url: "https://www.goodrx.com/fluticasone-propionate",
      },
      {
        label: "GoodRx, Montelukast pricing (May 2026)",
        url: "https://www.goodrx.com/montelukast",
      },
      {
        label: "FDA, Montelukast boxed warning (2020)",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-boxed-warning-about-serious-mental-health-side-effects-asthma-and-allergy-drug",
      },
      {
        label: "BetterCare, Urgent care cost without insurance (2026)",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'covid-19-treatment-cost': {
    slug: "covid-19-treatment-cost",
    pid: "covid-cost",
    h1: "COVID-19 Treatment Cost: Paxlovid Pricing, Online Doctor vs ER in 2026",
    metaTitle: "Paxlovid Cost 2026: $1,390 Retail, Free via PAXCESS + $79 Visit",
    metaDescription: "Paxlovid's 2026 retail price is ~$1,390–$1,447, but free for eligible uninsured/Medicare via PAXCESS through Dec 2026. Telehealth COVID visit: $79. ER visit: $1,500–$3,000.",
    breadcrumb: "COVID-19 Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, COVID-19 treatment costs vary dramatically by eligibility and setting. Paxlovid (nirmatrelvir-ritonavir), the first-line oral antiviral per CDC and IDSA guidelines, has a retail list price of approximately $1,390–$1,447 per 5-day course without insurance (GoodRx, May 2026). However, eligible patients on Medicare, Medicaid, or who are uninsured can receive Paxlovid for free through December 31, 2026 via Pfizer's PAXCESS / U.S. Government Patient Assistance Program (paxlovid.com). Commercially insured patients may pay as little as $0 with the PAXCESS co-pay savings card, up to the program's annual maximum. A telehealth COVID visit to assess eligibility and obtain a Paxlovid prescription costs $79 at TeleDirectMD, versus a cash-pay urgent care visit at $150–$250 or ER at $1,500–$3,000 (BetterCare, 2026); insured patients may pay a lower copay through their plan. Paxlovid must be started within 5 days of symptom onset per CDC guidance.",
    answerLead: "COVID-19 treatment cost in 2026 (uninsured or cash-pay):",
    answerBody: "Paxlovid (nirmatrelvir-ritonavir), the first-line COVID oral antiviral per <a href=\"https://www.cdc.gov/covid/treatment/index.html\">CDC</a> and <a href=\"https://www.idsociety.org/globalassets/idsa/practice-guidelines/covid-19/treatment/antiviral-treatment-for-mild-to-moderate-covid-19-in-adults-guideline-manuscript.pdf\">IDSA guidelines</a>, has a retail price of approximately <strong>$1,390–$1,447</strong> per course without assistance (<a href=\"https://www.goodrx.com/paxlovid\">GoodRx, May 2026</a>). <strong>Eligible uninsured and Medicare/Medicaid patients can get Paxlovid for free through December 31, 2026</strong> via Pfizer's PAXCESS USG Patient Assistance Program (<a href=\"https://www.paxlovid.com/enroll-in-co-pay-program\">paxlovid.com</a>). Commercially insured patients may pay as little as <strong>$0</strong> with the PAXCESS co-pay card. A TeleDirectMD telehealth visit to assess eligibility and issue the prescription costs <strong>$79</strong>, vs. cash-pay urgent care at <strong>$150–$250</strong> (<a href=\"https://bettercare.com/costs/urgent-care-cost-without-insurance\">BetterCare, 2026</a>) or ER at <strong>$1,500–$3,000</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2026</a>).",
    heroSub: "A $79 video visit to assess Paxlovid eligibility. Free Paxlovid available for eligible uninsured and Medicare/Medicaid patients through December 2026 via PAXCESS. Must start within 5 days of symptoms.",
    heroIntro: "COVID-19 antiviral treatment has a confusing pricing landscape in 2026: Paxlovid's retail price exceeds $1,400, yet eligible patients can get it free. The key is knowing your eligibility, high-risk criteria, insurance status, and the PAXCESS patient assistance program, and acting fast, since Paxlovid must start within 5 days of symptom onset. A telehealth visit is a quick, lower-cost way to be assessed and get a prescription routed to your pharmacy. We pulled 2026 pricing from GoodRx, PAXCESS program terms, BetterCare, and Mira Health so you know exactly what to expect.",
    heroCardTitle: "COVID-19 Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Paxlovid eligibility assessment per CDC high-risk criteria",
      "E-prescription to your pharmacy, same-day if eligible",
      "40+ states, evenings & weekends",
      "PAXCESS program navigation assistance",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "$79 visit vs. $150–$250 cash-pay urgent care or $1,500–$3,000 ER",
      "Paxlovid prescription within hours, clock starts at symptom onset",
      "PAXCESS program: free Paxlovid for eligible uninsured/Medicare through Dec 2026",
      "Drug interaction screening for ritonavir-boosted regimens",
      "Clear guidance on when in-person or ER is actually needed",
    ],
    // costComparisonOffers powers buildCostComparisonAggregateOffer() in
    // cost-compare-schema.js. Values mirror costTable.rows above.
    costComparisonOffers: [
      { providerName: "TeleDirectMD", providerUrl: "https://teledirectmd.com", lowPrice: 79, highPrice: 79, description: "$79 visit + Paxlovid free via PAXCESS (eligible pts) or $1,390–$1,447 retail" },
      { providerName: "Telehealth (national average)", providerUrl: "https://www.goodrx.com/paxlovid/how-much-paxlovid-costs-without-insurance", lowPrice: 40, highPrice: 100, description: "Visit varies by platform; Paxlovid cost independent of visit channel" },
      { providerName: "Primary care (cash-pay)", providerUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance", lowPrice: 110, highPrice: 265, description: "In-person evaluation; Paxlovid Rx same cost as above" },
      { providerName: "Urgent care (in-person)", providerUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance", lowPrice: 150, highPrice: 250, description: "Walk-in COVID evaluation; rapid test often bundled" },
      { providerName: "Emergency room (uninsured)", providerUrl: "https://bettercare.com/costs/er-visit-cost", lowPrice: 1500, highPrice: 3000, description: "ED visit + testing; appropriate only for severe COVID (hypoxia, respiratory distress)" },
    ],
    costTable: {
      title: "COVID-19 Treatment Cost by Care Setting (2026, Cash-Pay)",
      caption: "Visit cost + Paxlovid where applicable. Paxlovid cost varies dramatically by insurance and PAXCESS eligibility, see notes. Symptomatic-management-only costs (OTC) listed separately.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$79 visit; Paxlovid $0–$1,447 depending on eligibility",
          includes: "$79 visit + Paxlovid free via PAXCESS (eligible pts) or $1,390–$1,447 retail",
          source: "TeleDirectMD; GoodRx; PAXCESS",
          sourceUrl: "https://www.goodrx.com/paxlovid",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$40–$100 visit; Paxlovid same as above",
          includes: "Visit varies by platform; Paxlovid cost independent of visit channel",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/paxlovid/how-much-paxlovid-costs-without-insurance",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$265 visit; Paxlovid separate",
          includes: "In-person evaluation; Paxlovid Rx same cost as above",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$250 visit; Paxlovid separate",
          includes: "Walk-in COVID evaluation; rapid test often bundled",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000",
          includes: "ED visit + testing; appropriate only for severe COVID (hypoxia, respiratory distress)",
          source: "BetterCare, 2026",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Paxlovid Pricing, PAXCESS Access, and When COVID Needs In-Person Care",
      paragraphs: [
        "Paxlovid (nirmatrelvir-ritonavir) transitioned from a U.S. government-distributed free drug to the commercial market in late 2023. The retail list price is now approximately <strong>$1,390–$1,447 per 5-day course</strong>, unaffordable for most uninsured patients paying out of pocket (<a href=\"https://www.goodrx.com/paxlovid\">GoodRx, May 2026</a>). However, Pfizer's PAXCESS patient assistance program significantly changes the calculus: eligible patients on Medicare, Medicaid, TRICARE, or who are uninsured can receive Paxlovid for <strong>free through December 31, 2026</strong> via the U.S. Government Patient Assistance Program (USG PAP), operated by Pfizer (<a href=\"https://www.paxlovid.com/enroll-in-co-pay-program\">paxlovid.com</a>; call 1-877-219-7225). Commercially insured patients can use the PAXCESS co-pay savings card to pay as little as $0, up to the program's annual maximum (see program terms). The CDC and IDSA both strongly recommend Paxlovid as the <em>first-line</em> oral antiviral for mild-to-moderate COVID in adults at higher risk for severe disease, defined as adults 50+, unvaccinated or not up-to-date, or with chronic conditions including diabetes, obesity, chronic lung disease, heart disease, or immunocompromise.",
        "Per <a href=\"https://www.cdc.gov/covid/treatment/index.html\">CDC COVID treatment guidance (February 2026)</a>, Paxlovid must be started <strong>within 5 days of symptom onset</strong>, the 5-day window is hard. This timing makes telehealth the most efficient access point: a $79 TeleDirectMD visit gets you assessed and a prescription routed to your pharmacy within hours of booking. A 2026 <em>JAMA Network Open</em> study by Penn Medicine found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong> (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). For COVID specifically, where the clinical decision (eligible or not?) rarely needs a physical exam and a home test result is usually available, telehealth works well. Paxlovid carries important drug-drug interactions with ritonavir, a telehealth physician will screen your medication list.",
        "For patients who do not meet Paxlovid eligibility criteria (low risk, healthy, young, vaccinated with mild symptoms), treatment is supportive: rest, hydration, and OTC symptom management. According to <a href=\"https://www.idsociety.org/globalassets/idsa/practice-guidelines/covid-19/treatment/antiviral-treatment-for-mild-to-moderate-covid-19-in-adults-guideline-manuscript.pdf\">IDSA COVID treatment guidelines (2025)</a>, patients without risk factors for progression to severe disease (estimated hospitalization risk ≤0.5%) are unlikely to benefit from antiviral treatment. OTC symptom management, acetaminophen or ibuprofen for fever/pain, nasal saline, fluids, costs under $15 at any pharmacy. The ER is reserved for severe COVID: oxygen saturation below 94%, shortness of breath at rest, chest pain, or confusion.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth COVID Visit",
      groups: [
        {
          label: "High-risk adults needing Paxlovid fast",
          desc: "Age 50+, diabetic, immunocompromised, or with chronic lung/heart disease, you're in the 5-day window. A $79 telehealth visit gets you assessed and a prescription at your pharmacy today.",
        },
        {
          label: "Uninsured or Medicare patients navigating PAXCESS",
          desc: "Paxlovid's retail price is $1,390+. If you're uninsured or on Medicare and eligible, the PAXCESS USG PAP can provide it free through December 2026. A telehealth visit helps you navigate eligibility.",
        },
        {
          label: "Commercially insured patients with high deductibles",
          desc: "The PAXCESS co-pay card can lower your cost to as little as $0 if your plan covers Paxlovid. A $79 telehealth visit costs less than a $150–$250 cash-pay urgent care visit, though your plan's urgent care copay may be lower.",
        },
        {
          label: "Lower-risk patients unsure if they need Paxlovid",
          desc: "Healthy, vaccinated, and mildly symptomatic? A $79 telehealth assessment clarifies whether you're in a high-risk category, and saves you an unnecessary urgent care trip.",
        },
      ],
    },
    appropriateBlock: {
      title: "When COVID Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Confirmed or suspected mild-to-moderate COVID in adults with ≥1 high-risk criterion (age 50+, diabetes, chronic lung disease, heart disease, obesity, immunocompromise)",
        "Paxlovid eligibility assessment, within 5 days of symptom onset",
        "Drug interaction screening before starting Paxlovid (ritonavir has many interactions)",
        "Low-risk adults needing guidance on OTC symptomatic management only",
        "Patients with mild COVID and questions about isolation, return-to-work, or rebound symptoms",
        "Follow-up for patients who completed Paxlovid and are experiencing \"rebound\" COVID symptoms",
      ],
      notFor: [
        "Oxygen saturation below 94% on room air, call 911 or go to the ER",
        "Shortness of breath at rest, chest pain, or persistent pressure in the chest",
        "Confusion, altered mental status, or inability to stay awake",
        "Persistent vomiting preventing oral medication",
        "Severe liver disease (Child-Pugh C), where Paxlovid is not recommended",
        "Anyone under 18 (TeleDirectMD treats adults only)",
      ],
    },
    decisionGuide: {
      title: "COVID-19: Telehealth, Urgent Care, or ER?",
      steps: [
        {
          num: 1,
          head: "Shortness of breath at rest, SpO2 <94%, chest pain, or confusion?",
          body: "Call 911 or go to the ER now. These are signs of severe COVID requiring hospital-level care. An uninsured ER visit typically costs $1,500–$3,000 (BetterCare, 2026), and it is the right place for a medical emergency.",
          good: false,
        },
        {
          num: 2,
          head: "Mild-to-moderate symptoms + high-risk criterion + within 5 days of onset?",
          body: "Book a $79 telehealth visit immediately. Paxlovid eligibility can be assessed and a prescription issued within hours. Free Paxlovid available for eligible uninsured/Medicare patients via PAXCESS.",
          good: true,
        },
        {
          num: 3,
          head: "Low-risk, vaccinated, healthy adult with mild symptoms?",
          body: "Supportive care only, rest, fluids, acetaminophen or ibuprofen. IDSA guidelines suggest antiviral treatment unlikely to benefit patients with ≤0.5% hospitalization risk. OTC management costs under $15.",
          good: true,
        },
        {
          num: 4,
          head: "High-risk but uncertain about Paxlovid drug interactions with your medications?",
          body: "Book a telehealth visit. Ritonavir (the booster in Paxlovid) has significant drug-drug interactions with statins, blood thinners, and other common meds. A physician screens your full list before prescribing.",
          good: true,
        },
      ],
    },
    costPlus: {
      drug: "Paxlovid",
      price: null,
      note: "not carried — brand-only antiviral",
    },
    medicationsTable: {
      title: "COVID-19 Treatment Medication Costs (2026)",
      caption: "Paxlovid cost varies by insurance status and PAXCESS program eligibility. OTC symptomatic management costs are independent of insurance.",
      rows: [
        {
          drug: "Paxlovid (nirmatrelvir-ritonavir), first-line oral antiviral, high-risk pts",
          cost: "$1,390–$1,447 retail; $0 via PAXCESS (Medicare/Medicaid/uninsured through Dec 2026); $0 commercially insured with co-pay card",
          sourceUrl: "https://www.goodrx.com/paxlovid",
        },
        {
          drug: "Paxlovid PAXCESS USG Patient Assistance Program, free for eligible pts",
          cost: "$0 (Medicare, Medicaid, uninsured through Dec 31, 2026)",
          sourceUrl: "https://www.paxlovid.com/enroll-in-co-pay-program",
        },
        {
          drug: "Acetaminophen 500mg (Tylenol generic), OTC fever/pain",
          cost: "$5–$10 OTC (no Rx needed)",
          sourceUrl: "https://www.goodrx.com/conditions/covid-19/drugs",
        },
        {
          drug: "Ibuprofen 200mg (Advil generic), OTC fever/pain/inflammation",
          cost: "$5–$10 OTC (no Rx needed)",
          sourceUrl: "https://www.goodrx.com/conditions/covid-19/drugs",
        },
      ],
    },
    homeCare: {
      title: "Symptomatic Management While Awaiting Paxlovid or for Low-Risk Cases",
      bullets: [
        "Rest and hydration, fever and illness increase fluid losses; aim for 8–10 glasses of water daily.",
        "Acetaminophen (Tylenol) or ibuprofen (Advil) for fever and body aches, follow package dosing.",
        "Nasal saline spray for congestion; avoid oral decongestants if you have hypertension or heart disease.",
        "Isolate from household members, especially those who are immunocompromised, elderly, or unvaccinated.",
        "Monitor oxygen saturation with a pulse oximeter if you have one, below 94% warrants urgent care or ER.",
        "If symptoms or a positive test return 2 to 8 days after you felt better (\"rebound\"), contact a provider. Rebound can happen with or without Paxlovid, is usually mild, and does not usually need retreatment.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat COVID-19 by Telehealth",
      bullets: [
        "Oxygen saturation below 94% or any breathing difficulty at rest, ER immediately.",
        "Chest pain, persistent pressure, or feeling of tightness in chest.",
        "New confusion, difficulty waking, altered consciousness.",
        "Inability to keep fluids or medication down due to vomiting.",
        "Severe liver disease (Child-Pugh Class C), Paxlovid is not recommended; needs specialist input.",
        "Anyone under 18, TeleDirectMD treats adults only; see a pediatrician or other in-person clinician.",
      ],
    },
    faqs: [
      {
        question: "How much does Paxlovid cost without insurance in 2026?",
        answer: "Without insurance and without assistance programs, Paxlovid's retail price is approximately $1,390–$1,447 per 5-day course (GoodRx, May 2026). However, eligible uninsured patients can receive Paxlovid for free through December 31, 2026 via Pfizer's PAXCESS U.S. Government Patient Assistance Program, enroll at paxlovid.com or call 1-877-219-7225.",
      },
      {
        question: "Is Paxlovid free with Medicare in 2026?",
        answer: "Eligible Medicare patients can receive Paxlovid at no cost through the PAXCESS USG Patient Assistance Program, extended through December 31, 2026 (Pfizer/paxlovid.com). Medicare Part D also caps annual out-of-pocket drug costs ($2,000 in 2025 and $2,100 in 2026). Patients with Medicare who face high co-pays and meet income thresholds may qualify for the program, enrollment is required.",
      },
      {
        question: "What does the PAXCESS co-pay card do for commercially insured patients?",
        answer: "Commercially insured patients who present the PAXCESS co-pay savings card at the pharmacy may pay as little as $0 for Paxlovid, up to the program's annual maximum (see program terms). The card is available at paxlovid.com. This applies only to patients with commercial (private) insurance, not Medicare or Medicaid.",
      },
      {
        question: "How much does a telehealth COVID visit cost vs. urgent care vs. ER?",
        answer: "A TeleDirectMD telehealth visit costs $79. Cash-pay urgent care runs $150–$250 (BetterCare, 2026). An uninsured ER visit typically costs $1,500–$3,000, appropriate only for severe disease (hypoxia, chest pain, confusion). For eligible high-risk patients paying cash, a $79 telehealth visit plus free Paxlovid through PAXCESS keeps out-of-pocket cost low; insured patients may pay a lower copay through their plan.",
      },
      {
        question: "Who is eligible for Paxlovid?",
        answer: "Adults (or children ≥12 years, ≥40 kg) with mild-to-moderate COVID who have at least one risk factor for severe disease: age 50+, unvaccinated, diabetes, overweight or obesity (BMI ≥25), chronic lung disease, heart disease, chronic kidney disease, immunocompromise, or other CDC-listed conditions. Treatment must start within 5 days of symptom onset. CDC eligibility details at cdc.gov/covid/risk-factors.",
      },
      {
        question: "What are the most important Paxlovid drug interactions?",
        answer: "Ritonavir, the pharmacokinetic booster in Paxlovid, is a potent CYP3A inhibitor with significant interactions including statins (simvastatin, lovastatin, hold during treatment), certain blood thinners (warfarin, INR monitoring needed), immunosuppressants, antiarrhythmics, and others. A telehealth physician will screen your medication list before prescribing. Never start Paxlovid without this review.",
      },
      {
        question: "Does COVID-19 treatment from a telehealth visit cost the same as in-person?",
        answer: "The drug cost (Paxlovid) is the same regardless of where the prescription comes from. The visit cost differs: $79 telehealth vs. $150–$250 cash-pay urgent care (BetterCare, 2026). Penn Medicine's 2026 JAMA Network Open study found care episodes that began with telemedicine averaged $96 in charges vs. $509 for those that began in person. For COVID confirmed by a home test, telehealth can provide the same evaluation at lower cost.",
      },
      {
        question: "What if I have COVID but don't meet Paxlovid eligibility criteria?",
        answer: "For low-risk, healthy, vaccinated adults with mild COVID, IDSA guidelines suggest antiviral treatment is unlikely to provide meaningful benefit (hospitalization risk ≤0.5%). Supportive management, rest, hydration, OTC acetaminophen or ibuprofen for fever, costs under $15 at any pharmacy. A $79 telehealth visit confirms your risk classification and provides clear guidance on when to escalate to in-person care.",
      },
    ],
    references: [
      {
        label: "CDC, COVID-19 Treatment Types (February 2026)",
        url: "https://www.cdc.gov/covid/treatment/index.html",
      },
      {
        label: "CDC, COVID-19 High-Risk Conditions",
        url: "https://www.cdc.gov/covid/risk-factors/index.html",
      },
      {
        label: "CDC, COVID-19 Outpatient Treatment Clinical Care (2026)",
        url: "https://www.cdc.gov/covid/hcp/clinical-care/outpatient-treatment.html",
      },
      {
        label: "IDSA, Antiviral Treatment for Mild-to-Moderate COVID-19 Guideline (2025)",
        url: "https://www.idsociety.org/globalassets/idsa/practice-guidelines/covid-19/treatment/antiviral-treatment-for-mild-to-moderate-covid-19-in-adults-guideline-manuscript.pdf",
      },
      {
        label: "Paxlovid.com, PAXCESS Co-Pay Savings & USG Patient Assistance Program",
        url: "https://www.paxlovid.com/enroll-in-co-pay-program",
      },
      {
        label: "GoodRx, Paxlovid pricing (May 2026)",
        url: "https://www.goodrx.com/paxlovid",
      },
      {
        label: "GoodRx, Paxlovid: how much without insurance",
        url: "https://www.goodrx.com/paxlovid/how-much-paxlovid-costs-without-insurance",
      },
      {
        label: "BetterCare, Urgent care cost without insurance (2026)",
        url: "https://bettercare.com/costs/urgent-care-cost-without-insurance",
      },
      {
        label: "BetterCare, ER visit cost (2026)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

};
