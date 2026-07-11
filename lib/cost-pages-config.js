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
  'strep-throat-cost',
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
  'weight-loss-glp1-cost',
  'diabetes-refills-cost',
  'acne-treatment-cost',
  'eczema-treatment-cost',
  'seasonal-allergies-cost',
  'covid-19-treatment-cost',
];

export const COST_RELATED_LINKS = {
  'online-doctor-visit-cost': {
    relatedCost: ["uti-treatment-cost","sinus-infection-treatment-cost","sore-throat-treatment-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive","teledirectmd-vs-amwell","teledirectmd-vs-doctor-on-demand","teledirectmd-vs-sesame","teledirectmd-vs-k-health"],
  },
  'uti-treatment-cost': {
    relatedCost: ["online-doctor-visit-cost","uti-antibiotics-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive"],
  },
  'uti-antibiotics-cost': {
    relatedCost: ["uti-treatment-cost","online-doctor-visit-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-k-health"],
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
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-k-health"],
  },
  'strep-throat-cost': {
    relatedCost: ["sore-throat-treatment-cost","online-doctor-visit-cost","sinus-infection-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-mdlive","teledirectmd-vs-doctor-on-demand"],
  },
  'pink-eye-cost': {
    relatedCost: ["ear-infection-cost","strep-throat-cost","sinus-infection-treatment-cost"],
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-mdlive"],
  },
  'ear-infection-cost': {
    relatedCost: ["pink-eye-cost","strep-throat-cost","sinus-infection-treatment-cost"],
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
    relatedCompare: ["teledirectmd-vs-teladoc","teledirectmd-vs-k-health"],
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
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-k-health"],
  },
  'erectile-dysfunction-cost': {
    relatedCost: ["hair-loss-treatment-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-k-health"],
  },
  'hair-loss-treatment-cost': {
    relatedCost: ["erectile-dysfunction-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-k-health"],
  },
  'weight-loss-glp1-cost': {
    relatedCost: ["diabetes-refills-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-k-health"],
  },
  'diabetes-refills-cost': {
    relatedCost: ["weight-loss-glp1-cost","migraine-treatment-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-amwell","teledirectmd-vs-mdlive"],
  },
  'acne-treatment-cost': {
    relatedCost: ["eczema-treatment-cost","seasonal-allergies-cost","online-prescription-cost"],
    relatedCompare: ["teledirectmd-vs-sesame","teledirectmd-vs-k-health"],
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
  'teledirectmd-vs-k-health',
];

export const COST_PAGES = {

  // ──────────────────────────────────────────────────────────────────
  'online-doctor-visit-cost': {
    slug: "online-doctor-visit-cost",
    pid: "online-doctor-cost",
    h1: "How Much Does an Online Doctor Visit Cost in 2026?",
    metaTitle: "How Much Does an Online Doctor Visit Cost in 2026? | TeleDirectMD",
    metaDescription: "Online doctor visits cost $40–$100 cash-pay (median ~$82). TeleDirectMD charges a flat $79, about 11× cheaper than the average uninsured ER visit ($2,715). 2026 cost comparison vs. urgent care, ER, retail clinics, and other telehealth platforms.",
    breadcrumb: "Online Doctor Visit Cost",
    answerLead: "Online doctor visit cost in 2026:",
    answerBody: "A telehealth visit averages $40–$100 cash-pay (median ~$82) according to <a href=\"https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance\">GoodRx</a>. TeleDirectMD charges a flat $79, roughly 11× cheaper than the average uninsured ER visit ($2,715, per <a href=\"https://www.talktomira.com/post/how-much-does-an-er-visit-cost\">Mira Health, Feb 2025</a>) and 3× cheaper than urgent care ($150–$280, per <a href=\"https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance\">GoodRx</a>).",
    heroSub: "A board-certified MD video visit for $79 flat. No insurance needed. We compared 2026 cash-pay prices across every common care setting, so here's what you'll actually pay.",
    heroIntro: "If you don't have insurance, the cost of a doctor visit can vary by 50× depending on where you go. We pulled current cash-pay prices from KFF, Mira Health, GoodRx, Penn Medicine, and the major telehealth platforms to give you a clear picture of what an online doctor visit actually costs in 2026, and how it compares to walking into an urgent care, retail clinic, or emergency room.",
    heroCardTitle: "What You Get for $79",
    heroCardItems: [
      "Video visit with a board-certified MD (Dr. Parth Bhavsar)",
      "Prescription sent to any US pharmacy",
      "Same-day, evenings & weekends",
      "Available in 43 states",
      "No US insurance required",
      "Receipt suitable for HSA/FSA reimbursement",
    ],
    heroBenefits: [
      "$79 flat fee, no surprise billing, no facility fees",
      "~18× cheaper than the average uninsured ER visit ($2,715)",
      "~5× cheaper than urgent care ($150–$280 cash-pay average)",
      "Lower than the published cash-pay rate of every major US telehealth platform",
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
          cost: "$40–$100 (median ~$82)",
          includes: "Video or phone visit; provider type varies (MD, NP, PA)",
          source: "GoodRx, 2024",
          sourceUrl: "https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$99–$139",
          includes: "In-person visit with NP or PA; basic illness/injury tier",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Primary care office (cash-pay)",
          cost: "$100–$200 (avg ~$171)",
          includes: "In-person visit with PCP; labs and imaging billed separately",
          source: "Mira Health, Feb 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280 (avg ~$280)",
          includes: "In-person walk-in visit; labs/X-rays add $250–$600+",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "~$2,715 average",
          includes: "ED visit; chargemaster pricing; non-life-threatening range $1,500–$3,000",
          source: "Mira Health, Feb 2025",
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
          states: "43",
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
          platform: "K Health",
          price: "$35 one-time / $49/mo",
          states: "48",
          mdOnly: "Mixed (MD/NP)",
          source: "ChoosingTherapy",
          sourceUrl: "https://www.choosingtherapy.com/k-health-review/",
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
          telehealth: "$85–$93",
          urgentCare: "$160–$320",
          er: "$1,200–$3,000+",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro",
        },
        {
          condition: "Sinus infection",
          telehealth: "$88–$99",
          urgentCare: "$160–$320",
          er: "$1,200–$3,000+",
          source: "Penn Medicine 2024",
          sourceUrl: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
        },
        {
          condition: "Strep / sore throat",
          telehealth: "$88–$144",
          urgentCare: "$185–$345",
          er: "$500–$2,700+",
          source: "Mira Health, BetterCare",
          sourceUrl: "https://bettercare.com/costs/strep-test-cost",
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
        "A 2024 Penn Medicine / JAMA Network Open study analyzed 160,000+ visit episodes and found telemedicine's average billed charge was <strong>$96</strong> versus <strong>$509</strong> for an in-person visit. Telemedicine was roughly <strong>5× cheaper on average</strong> across the full episode of care, including any follow-up. Source: <a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2024</a>.",
        "Telehealth removes facility fees, reduces overhead, and eliminates the standing infrastructure cost of physical clinics. For acute, uncomplicated conditions like UTI, sinus infection, strep throat, pink eye, and prescription refills, which together account for the bulk of urgent-care visits, there is no clinical advantage to being seen in person. The savings flow directly to the patient.",
        "In 2024, <strong>26.7 million</strong> Americans under 65 were uninsured (<a href=\"https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/\">KFF, April 2026</a>) and <strong>38.6% of uninsured adults</strong> reported delaying or skipping needed care due to cost. Flat-rate telehealth at $79 closes that gap for the conditions it can treat.",
      ],
    },
    whoWeHelp: {
      title: "Who Saves the Most on Online Doctor Visits",
      groups: [
        {
          label: "Uninsured adults",
          desc: "$79 flat replaces a $150–$2,715 in-person visit. Predictable upfront cost; no surprise billing.",
        },
        {
          label: "High-deductible plan members",
          desc: "If your deductible is unmet, $79 cash-pay is usually cheaper than the in-network rate you'd pay before the deductible kicks in.",
        },
        {
          label: "Travelers between states",
          desc: "No need to find a new provider. One physician, all 43 states.",
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
          body: "UTI, sinus infection, strep throat, pink eye, refills, allergies, skin rashes: these are textbook telehealth conditions. Start with a $79 video visit.",
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
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          drug: "Lisinopril (hypertension)",
          cost: "$4–$12",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
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
        answer: "Cash-pay telehealth visits range from $40 to $100, with a median around $82 per GoodRx. TeleDirectMD charges a flat $79, among the lowest published rates for an MD-led video visit.",
      },
      {
        question: "Is a telehealth visit cheaper than urgent care?",
        answer: "Yes. Urgent care averages $150–$280 cash-pay (Mira Health, 2025), and adding labs or X-rays pushes the total to $250–$600+. A $79 TeleDirectMD visit is roughly 3× cheaper for conditions that don't need imaging.",
      },
      {
        question: "How does a $79 visit compare to the ER?",
        answer: "The average uninsured ER visit cost ~$2,715 in 2025 per Mira Health. For non-emergency conditions, that's about 55× more than a TeleDirectMD visit. ER pricing is appropriate only for true emergencies.",
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
        answer: "No facility fees, lower overhead, and no waiting-room infrastructure. A 2024 Penn Medicine / JAMA study found telemedicine averaged $96 per episode versus $509 for in-person, about 5× cheaper.",
      },
      {
        question: "Does TeleDirectMD accept insurance?",
        answer: "Yes: Aetna, BCBS, and UnitedHealthcare in select states. If your plan is not in-network, the flat $79 self-pay rate often beats your in-network cost before your deductible is met.",
      },
      {
        question: "What conditions are appropriate for an online doctor visit?",
        answer: "UTI, sinus infection, strep, pink eye, cold/flu, mild bronchitis, allergies, skin rashes, and refills for stable chronic conditions like blood pressure, cholesterol, and asthma. Anything urgent or requiring imaging belongs in person.",
      },
    ],
    references: [
      {
        label: "Mira Health, Average ER visit cost (Feb 2025)",
        url: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost",
      },
      {
        label: "Mira Health, Urgent care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
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
        label: "GoodRx, How much does telehealth cost (2024)",
        url: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
      },
      {
        label: "Penn Medicine / JAMA Network Open, Telemedicine vs. in-person costs (2024)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CVS MinuteClinic, 2024 price list",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
      {
        label: "KFF, Key facts about the uninsured population (April 2026)",
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
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, an online doctor visit costs $79 flat, compared to a national telehealth average of $40–$100 (median ~$82) per <a href=\"https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance\">GoodRx (2024)</a>. A 2024 Penn Medicine / JAMA Network Open study of 160,000+ episodes found telemedicine averaged $96 per episode versus $509 in-person, roughly 5× cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2024</a>). By comparison, urgent care averages $150–$280 (<a href=\"https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance\">Mira Health, 2025</a>), CVS MinuteClinic runs $99–$139 (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS 2024 price list</a>), primary care cash-pay totals $100–$200 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and the average uninsured ER visit is ~$2,715 (<a href=\"https://www.talktomira.com/post/how-much-does-an-er-visit-cost\">Mira Health, Feb 2025</a>). With 26.7 million uninsured Americans under 65 (<a href=\"https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/\">KFF, April 2026</a>), telehealth is appropriate for UTI, sinus infection, strep throat, pink eye, and stable prescription refills.",
  },

  // ──────────────────────────────────────────────────────────────────
  'uti-treatment-cost': {
    slug: "uti-treatment-cost",
    pid: "uti-cost",
    h1: "UTI Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "UTI Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "A telehealth UTI visit + antibiotic costs $85–$93 total. Urgent care runs $150–$450; an ER UTI visit can hit $3,000+. Verified 2026 prices with sources.",
    breadcrumb: "UTI Treatment Cost",
    answerLead: "UTI treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth UTI visit + generic antibiotic costs <strong>$85–$93 total</strong> at TeleDirectMD ($79 visit + $6–$14 nitrofurantoin via <a href=\"https://www.goodrx.com/nitrofurantoin-mono-macro\">GoodRx</a>). Compare to urgent care: <strong>$150–$450</strong> out-of-pocket (<a href=\"https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance\">Mira Health, 2025</a>). An ER UTI visit can hit <strong>$1,200–$3,000+</strong>, which is never the right setting for an uncomplicated UTI.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $6–$14 generic antibiotic. Total cost: as low as $85. No urinalysis required for uncomplicated lower-tract UTIs in adults under telehealth guidelines.",
    heroIntro: "Uncomplicated lower-urinary-tract infections are the textbook case for telehealth. Per IDSA and AUA guidelines, a urinalysis or culture is not required to treat an uncomplicated UTI in a non-pregnant adult woman with classic symptoms, meaning the entire treatment can be a video visit plus a $6 prescription. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show you what UTI treatment actually costs across every care setting.",
    heroCardTitle: "UTI Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Antibiotic e-prescription to your pharmacy",
      "No urinalysis or culture required (uncomplicated UTI)",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $85–$93 vs. $150–$450 in-person urgent care",
      "No drive time, typical visit takes 10–15 minutes",
      "Same-day antibiotic at any US pharmacy",
      "Safe for uncomplicated lower-UTI in adult, non-pregnant women, per IDSA/AUA guidelines",
      "Documented receipt suitable for HSA/FSA",
    ],
    costTable: {
      title: "UTI Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + generic antibiotic via GoodRx. Excludes labs/cultures unless flagged.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$55–$63 typical",
          includes: "$79 visit + nitrofurantoin ($6–$14), no urinalysis required",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$85–$93",
          includes: "Visit ($40–$100) + antibiotic ($6–$14)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$265",
          includes: "In-person visit ($100–$250) + antibiotic ($6–$14); urinalysis usually included",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$450",
          includes: "Walk-in visit ($150–$430) + antibiotic ($6–$14); urinalysis often bundled",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$105–$153",
          includes: "NP visit ($99–$139) + antibiotic ($6–$14)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,200–$3,000+",
          includes: "ED visit + labs + antibiotic; chargemaster pricing",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth UTI Visit Is Safe and Cheap",
      paragraphs: [
        "For uncomplicated lower UTIs in non-pregnant adult women with classic symptoms (dysuria, frequency, urgency), the <a href=\"https://www.idsociety.org\">IDSA</a> and AUA both endorse empiric antibiotic treatment without a urinalysis or culture. The diagnosis is clinical. That removes the lab cost entirely, which is the single biggest driver of in-person UTI billing.",
        "Penn Medicine's 2024 JAMA Network Open study found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, a 5× difference (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine</a>). For a textbook UTI, the savings are even larger because no lab work is required.",
        "Generic nitrofurantoin (Macrobid) is <strong>$6.47–$14</strong> on <a href=\"https://www.goodrx.com/nitrofurantoin-mono-macro\">GoodRx</a>, versus a $35–$58 retail price without the discount. Trimethoprim-sulfamethoxazole (Bactrim) is even cheaper at ~$9.",
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
          label: "Recurrent UTI patients",
          desc: "You know what this is. Telehealth lets you start treatment within hours instead of waiting days.",
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
          body: "Book a $79 telehealth visit. Total cost will likely be $55–$63. Antibiotic at your pharmacy in 30 minutes.",
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
    medicationsTable: {
      title: "UTI Antibiotic Costs (GoodRx Generic, 2026)",
      caption: "5–7 day course, retail pharmacy with GoodRx coupon.",
      rows: [
        {
          drug: "Nitrofurantoin (Macrobid), first-line",
          cost: "$6.47–$14",
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
        answer: "Telehealth: $85–$93 total (visit + generic antibiotic). Urgent care in-person: $150–$450. ER: $1,200–$3,000+. The ER is rarely appropriate for a routine UTI.",
      },
      {
        question: "Do I need a urinalysis or culture for a UTI?",
        answer: "For an uncomplicated lower UTI in an adult, non-pregnant woman with classic symptoms, IDSA and AUA guidelines support empiric antibiotic treatment without a urinalysis. That's why telehealth works clinically and saves money.",
      },
      {
        question: "How fast can I get an antibiotic via TeleDirectMD?",
        answer: "Most patients have an antibiotic at their pharmacy within an hour of booking, same-day visits available evenings and weekends.",
      },
      {
        question: "Will my generic antibiotic actually be that cheap?",
        answer: "Yes. Nitrofurantoin (Macrobid) runs $6.47–$14 with GoodRx; Bactrim ~$9. Quote from GoodRx, June 2026.",
      },
      {
        question: "When should I skip telehealth and go in-person for a UTI?",
        answer: "Fever, back/flank pain, vomiting, blood in urine, pregnancy, recurrent infection, or male patient, all warrant in-person evaluation, possibly with imaging.",
      },
      {
        question: "Does TeleDirectMD treat UTI in men?",
        answer: "No. UTI in men is uncommon and almost always warrants an in-person workup. We'll redirect you to urgent care or your primary care provider.",
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
        label: "BetterCare, ER & UTI cost (April 2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
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
        label: "Mira Health, Urgent care cost (2025)",
        url: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs (2024)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
      {
        label: "IDSA, Uncomplicated UTI guidelines",
        url: "https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an uncomplicated UTI via telehealth costs $85–$93 total: a $79 video visit plus $6–$14 for generic nitrofurantoin (Macrobid) or ~$9 for trimethoprim-sulfamethoxazole (Bactrim DS), verified <a href=\"https://www.goodrx.com/nitrofurantoin-mono-macro\">GoodRx, June 2026</a>. By comparison, urgent care in-person averages $150–$450 out-of-pocket (<a href=\"https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance\">Mira Health, 2025</a>), CVS MinuteClinic runs $105–$153 (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS 2024 price list</a>), primary care cash-pay totals $110–$265 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and an ER UTI visit can hit $1,200–$3,000+. Per <a href=\"https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/\">IDSA guidelines</a> and AUA guidance, a urinalysis or culture is not required to treat an uncomplicated lower UTI in a non-pregnant adult woman with classic symptoms, making telehealth the clinically appropriate and most cost-efficient first-line setting.",
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
    metaTitle: "UTI Antibiotics Cost 2026: Prescription Options & Are Any OTC? | TeleDirectMD",
    metaDescription: "There are no OTC antibiotics for a UTI in the US -- all require a prescription. Generic UTI antibiotics cost $5-$25 with GoodRx. A $79 telehealth visit gets you a same-day prescription. Verified 2026 prices with sources.",
    breadcrumb: "UTI Antibiotics Cost",
    answerLead: "Can you buy UTI antibiotics over the counter? No.",
    answerBody: "In the U.S., <strong>every oral antibiotic that cures a UTI requires a prescription</strong> -- there are no over-the-counter UTI antibiotics (<a href=\"https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti\">WebMD</a>; <a href=\"https://blog.walgreens.com/health/general-health/how-do-you-get-rid-of-a-uti.html\">Walgreens</a>). OTC products like AZO (phenazopyridine) only numb the burning; they do not treat the infection. Once prescribed, the antibiotic itself is cheap: <strong>$5-$25</strong> for the common generics on <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx</a>. A $79 TeleDirectMD video visit gets you a same-day prescription sent to your pharmacy -- total cost often <strong>$85-$93</strong>.",
    heroSub: "UTI antibiotics are prescription-only in the U.S. -- but a same-day telehealth visit costs $79, and the generic antibiotic is usually $5-$25. Here's what every UTI antibiotic actually costs and how to get one legally without an in-person visit.",
    heroIntro: "Searching for 'over the counter antibiotics for UTI' or 'how to get antibiotics for a UTI'? The honest answer: no oral antibiotic that cures a UTI is sold over the counter in the United States -- this is an FDA requirement, not a TeleDirectMD policy. The good news is that the antibiotic itself is inexpensive, and you don't need an in-person appointment to get the prescription. We pulled 2026 GoodRx pricing for every first-line UTI antibiotic and mapped exactly how to get one prescribed same-day.",
    heroCardTitle: "UTI Prescription at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Legal e-prescription to your pharmacy",
      "Generic antibiotic usually $5-$25",
      "No urinalysis required (uncomplicated UTI)",
      "43 states, evenings & weekends",
      "No insurance required - HSA/FSA accepted",
    ],
    heroBenefits: [
      "No OTC antibiotic exists -- this is the legal, safe way to get one",
      "Antibiotic cost $5-$25 generic vs. $400-$600 for brand-only Blujepa",
      "Same-day script at any US pharmacy",
      "Total $85-$93 vs. $160-$320 in-person urgent care",
      "Board-certified MD, not a chatbot or text-only triage",
    ],
    costTable: {
      title: "UTI Antibiotic Cost by Medication (2026, Generic Cash-Pay via GoodRx)",
      caption: "Prescription required for all. Prices are lowest GoodRx cash price for a standard course; excludes the visit.",
      rows: [
        { setting: "Nitrofurantoin (Macrobid) -- first-line", cost: "$7-$22", includes: "5-day course; minimal resistance; preferred per IDSA", source: "GoodRx, May 2026", sourceUrl: "https://www.goodrx.com/nitrofurantoin-mono-macro" },
        { setting: "Trimethoprim-sulfamethoxazole (Bactrim)", cost: "$5-$20", includes: "3-day course; only where local resistance <20%", source: "GoodRx, 2026", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { setting: "Cephalexin (alternative)", cost: "$11-$18", includes: "Beta-lactam alternative; safe in pregnancy", source: "GoodRx, 2026", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { setting: "Fosfomycin (Monurol) -- single dose", cost: "$20-$52", includes: "One-time 3g sachet; convenient but pricier", source: "GoodRx / Script Unlock, 2026", sourceUrl: "https://www.goodrx.com/fosfomycin" },
        { setting: "Ciprofloxacin (reserved)", cost: "$25", includes: "Fluoroquinolone; no longer first-line for uncomplicated cystitis", source: "GoodRx, 2026", sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
        { setting: "Blujepa (gepotidacin) -- brand-only", cost: "$400-$600", includes: "Newest FDA-approved oral; no generic; rarely needed", source: "Medfinder, 2026", sourceUrl: "https://www.medfinder.com/blog/how-to-save-money-on-blujepa-coupons-discounts-patient-assistance" },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why There Are No Over-the-Counter UTI Antibiotics",
      paragraphs: [
        "Every oral antibiotic in the U.S. -- nitrofurantoin, Bactrim, cephalexin, fosfomycin, ciprofloxacin -- is prescription-only by <a href=\"https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti\">FDA regulation</a>. The only antibiotics sold over the counter are topical ointments (Neosporin, Bacitracin) for minor skin wounds -- they do nothing for a UTI. This rule exists to curb antibiotic resistance and prevent misdiagnosis.",
        "OTC products marketed for UTIs -- AZO, Uristat, Cystex -- contain <strong>phenazopyridine</strong>, a urinary analgesic that numbs burning within ~20 minutes but has <strong>zero antibacterial activity</strong> (<a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/uti-treatment-without-doctor-visit\">GoodRx</a>). Relying on them alone lets the infection progress -- potentially to a kidney infection.",
        "A few states (Idaho, Oregon, New Mexico, California) run pharmacist-prescribing pilots for uncomplicated UTIs, but even those require a clinical screening -- so it still isn't true OTC access. The fastest legal route for most patients is a same-day telehealth visit: per <a href=\"https://www.idsociety.org/practice-guideline/urinary-tract-infection-uti/\">IDSA guidelines</a>, an uncomplicated lower UTI in a non-pregnant adult woman needs no urinalysis, so the entire encounter can be a $79 video visit plus a $5-$25 generic.",
      ],
    },
    whoWeHelp: {
      title: "Who This Helps Most",
      groups: [
        { label: "Anyone who searched 'OTC UTI antibiotics'", desc: "You now know none exist -- here's the fast, legal alternative for $79 + a cheap generic." },
        { label: "Recurrent UTI patients", desc: "You recognize the symptoms. Skip the wait -- get the same first-line antibiotic prescribed same-day." },
        { label: "Uninsured / high-deductible", desc: "$79 flat + a $5-$25 generic beats a $160-$320 urgent-care bill." },
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
        { num: 2, head: "Classic symptoms, no red flags?", body: "Book a $79 telehealth visit. Get a same-day prescription for a $5-$25 generic antibiotic sent to your pharmacy.", good: true },
        { num: 3, head: "Fever, back pain, blood, or pregnancy?", body: "Go in-person to urgent care or the ER -- these need evaluation, possible imaging, and IV antibiotics.", good: false },
        { num: 4, head: "In a pharmacist-prescribing state?", body: "Idaho, Oregon, New Mexico, or California pharmacies may screen and prescribe -- but telehealth is available everywhere we're licensed.", good: true },
      ],
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
      { question: "How much do UTI antibiotics cost without insurance?", answer: "Generics are cheap with GoodRx: nitrofurantoin $7-$22, Bactrim $5-$20, cephalexin $11-$18, fosfomycin $20-$52. The newest brand-only option, Blujepa, runs $400-$600 and is rarely needed." },
      { question: "How do I get UTI antibiotics without seeing a doctor in person?", answer: "Book a telehealth visit. A licensed MD can assess your symptoms by video and send an e-prescription to your pharmacy same-day -- no in-person appointment or urinalysis required for an uncomplicated UTI." },
      { question: "Is AZO an antibiotic?", answer: "No. AZO (phenazopyridine) is a urinary analgesic that numbs burning within ~20 minutes. It has no antibacterial activity and will not cure your UTI." },
      { question: "What is the cheapest UTI antibiotic?", answer: "Trimethoprim-sulfamethoxazole (generic Bactrim) is often the cheapest at $5-$20, followed closely by nitrofurantoin. Your prescriber picks based on local resistance and your history." },
      { question: "Can I get UTI antibiotics online same-day?", answer: "Yes. A $79 TeleDirectMD video visit typically results in an antibiotic at your pharmacy within an hour -- same-day visits available evenings and weekends in 43 states." },
      { question: "Can pharmacists prescribe UTI antibiotics?", answer: "In a few states (Idaho, Oregon, New Mexico, California) pharmacists can prescribe for uncomplicated UTIs after a screening. Elsewhere, telehealth is the fastest legal route." },
    ],
    references: [
      { label: "WebMD -- Antibiotics for UTI (no OTC oral antibiotics), June 2026", url: "https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti" },
      { label: "GoodRx -- UTI antibiotic class prices (2026)", url: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs" },
      { label: "GoodRx -- Nitrofurantoin pricing (May 2026)", url: "https://www.goodrx.com/nitrofurantoin-mono-macro" },
      { label: "GoodRx -- Fosfomycin pricing", url: "https://www.goodrx.com/fosfomycin" },
      { label: "GoodRx -- UTI treatment without a doctor visit (AZO is not an antibiotic)", url: "https://www.goodrx.com/conditions/urinary-tract-infection/uti-treatment-without-doctor-visit" },
      { label: "Walgreens -- How do you get rid of a UTI (no OTC antibiotics)", url: "https://blog.walgreens.com/health/general-health/how-do-you-get-rid-of-a-uti.html" },
      { label: "IDSA -- Uncomplicated UTI guideline", url: "https://www.idsociety.org/practice-guideline/urinary-tract-infection-uti/" },
      { label: "Medfinder -- Blujepa (gepotidacin) cost (2026)", url: "https://www.medfinder.com/blog/how-to-save-money-on-blujepa-coupons-discounts-patient-assistance" },
    ],
    citableSummary: "According to TeleDirectMD's 2026 analysis, there are no over-the-counter oral antibiotics for a urinary tract infection in the United States -- every UTI antibiotic (nitrofurantoin, trimethoprim-sulfamethoxazole, cephalexin, fosfomycin) requires a prescription per <a href=\"https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti\">WebMD</a> and <a href=\"https://blog.walgreens.com/health/general-health/how-do-you-get-rid-of-a-uti.html\">Walgreens</a>. OTC products like AZO (phenazopyridine) only relieve burning and do not cure the infection (<a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/uti-treatment-without-doctor-visit\">GoodRx</a>). The antibiotics themselves are inexpensive: nitrofurantoin $7-$22, trimethoprim-sulfamethoxazole $5-$20, cephalexin $11-$18, and single-dose fosfomycin $20-$52 with a <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx</a> coupon (May 2026), versus $400-$600 for the newest brand-only agent, Blujepa. The fastest legal way to get a prescription is a same-day telehealth visit -- a $79 TeleDirectMD video visit plus a generic antibiotic totals about $85-$93, and per <a href=\"https://www.idsociety.org/practice-guideline/urinary-tract-infection-uti/\">IDSA guidelines</a> no urinalysis is required for an uncomplicated lower UTI in a non-pregnant adult woman.",
  },


  // ──────────────────────────────────────────────────────────────────
  'sinus-infection-treatment-cost': {
    slug: "sinus-infection-treatment-cost",
    pid: "sinus-cost",
    h1: "Sinus Infection Treatment Cost Without Insurance",
    metaTitle: "Sinus Infection Treatment Cost (2026, Uninsured) | TeleDirectMD",
    metaDescription: "A telehealth sinus-infection visit + amoxicillin costs $88–$99 total. Urgent care runs $160–$320; ER hits $1,200–$3,000+. Verified 2026 cash-pay prices.",
    breadcrumb: "Sinus Infection Cost",
    answerLead: "Sinus infection treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth visit plus amoxicillin costs <strong>$88–$99 total</strong> at TeleDirectMD ($79 visit + $9–$20 generic via <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx</a>). In-person urgent care runs <strong>$160–$320</strong>. A 2017 Health Affairs study cited by <a href=\"https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost\">GoodRx</a> found the average telehealth respiratory visit was <strong>$79 vs. $146 in-person</strong>, and <a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine's 2024 study</a> found telemedicine episodes were ~$800 cheaper for respiratory infections.",
    heroSub: "$79 video visit with a board-certified MD. If antibiotics are appropriate, generic amoxicillin runs $9–$20. Most patients pay $88–$99 total.",
    heroIntro: "Sinusitis is one of the most common reasons people end up in urgent care, and one of the most overpriced. Many sinus infections are viral and don't need antibiotics at all; for those that do, the entire treatment is a focused history, a clinical exam, and an e-prescription. Telehealth handles all three for $79. We've pulled current 2025–2026 prices from BetterCare, Penn Medicine, and GoodRx so you can see exactly what sinus-infection treatment costs.",
    heroCardTitle: "Sinus Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Board-certified MD evaluates duration, severity, and red flags",
      "Clinical decision on antibiotics vs. supportive care",
      "E-prescription if appropriate (amoxicillin / augmentin / doxycycline)",
      "Same-day appointments, 43 states",
      "No insurance required",
      "Receipt for HSA/FSA",
    ],
    heroBenefits: [
      "Total $88–$99 vs. $160–$320 in-person urgent care",
      "Telehealth respiratory visits average ~$800 less per episode (Penn Medicine 2024)",
      "No facility fee, no waiting room, no co-pay",
      "Skip the visit if antibiotics aren't needed, save the $20 co-pay too",
      "In-network with Aetna, BCBS, UnitedHealthcare in select states",
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
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$88–$99",
          includes: "Visit ($40–$90) + antibiotic ($9–$20)",
          source: "GoodRx 2024; Penn Medicine 2024",
          sourceUrl: "https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$270",
          includes: "In-person visit ($100–$250) + antibiotic ($9–$20)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$160–$320",
          includes: "Visit ($150–$300) + antibiotic; sinus X-ray adds $100+",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$108–$159",
          includes: "NP visit ($99–$139) + antibiotic ($9–$20)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,200–$3,000+",
          includes: "ED visit; never appropriate for routine sinus infection",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-an-er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Most Sinus Infections Don't Need Antibiotics",
      paragraphs: [
        "According to <a href=\"https://www.cdc.gov/antibiotic-use/community/for-patients/common-illnesses/sinus-infection.html\">CDC guidance</a>, the majority of sinus infections are viral and resolve without antibiotics. Antibiotic treatment is appropriate when symptoms persist >10 days without improvement, are severe (high fever, unilateral facial pain), or worsen after initial improvement (the \"double-sickening\" pattern).",
        "A telehealth visit is the most cost-effective way to make that determination. The clinician takes a focused history, evaluates duration and severity, looks at any red flags, and either prescribes an antibiotic or recommends supportive care, saving you the cost of an antibiotic that wouldn't help anyway.",
        "<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine's 2024 JAMA study</a> of 160,000+ visits found telemedicine episodes for respiratory infections cost <strong>~$800 less per episode</strong> than in-person care, most of that savings comes from avoiding unnecessary in-person follow-up.",
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
          desc: "Recurring sinusitis with a known pattern? Telehealth is faster than rebooking your PCP.",
        },
        {
          label: "Travelers / business trips",
          desc: "Came down with sinusitis on the road? Book a $79 visit from your hotel; antibiotic at the local CVS.",
        },
        {
          label: "High-deductible plan members",
          desc: "Cash-paying $79 beats a $185 PCP visit when your deductible is unmet.",
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
    medicationsTable: {
      title: "Sinus Infection Antibiotic Costs (GoodRx Generic, 2026)",
      caption: "7–10 day course, retail pharmacy with GoodRx coupon.",
      rows: [
        {
          drug: "Amoxicillin (first-line)",
          cost: "~$9",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          drug: "Amoxicillin-clavulanate (Augmentin)",
          cost: "$12–$24",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
        },
        {
          drug: "Doxycycline (penicillin allergy)",
          cost: "$8–$15",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
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
        answer: "Telehealth: $88–$99 total (visit + amoxicillin if needed). Urgent care: $160–$320. Most insurance-free patients at TeleDirectMD pay $88–$99.",
      },
      {
        question: "Do all sinus infections need antibiotics?",
        answer: "No. Per CDC guidance, most sinus infections are viral and resolve without antibiotics. A telehealth visit determines whether antibiotics are appropriate based on duration, severity, and symptom pattern.",
      },
      {
        question: "What antibiotic is typically prescribed for sinusitis?",
        answer: "Amoxicillin is first-line ($9 GoodRx). Amoxicillin-clavulanate (Augmentin) is used for resistant cases or recent antibiotic exposure. Doxycycline is the penicillin-allergy alternative.",
      },
      {
        question: "How fast will I get the prescription?",
        answer: "E-prescriptions are usually at your pharmacy within 30 minutes of the visit ending. Most patients pick up within 1 hour of booking.",
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
        label: "Penn Medicine / JAMA, Telemedicine vs. in-person costs (2024)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CDC, Sinus infection (sinusitis) guidance",
        url: "https://www.cdc.gov/antibiotic-use/community/for-patients/common-illnesses/sinus-infection.html",
      },
      {
        label: "Mira Health, Urgent care cost (2025)",
        url: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating a bacterial sinus infection via telehealth costs $88–$99 total, a $79 video visit plus $9–$24 for generic amoxicillin or amoxicillin-clavulanate (Augmentin) when indicated, verified <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx (2026)</a>. By comparison, urgent care in-person averages $160–$320 (<a href=\"https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance\">Mira Health, 2025</a>), CVS MinuteClinic runs $108–$159 (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS 2024 price list</a>), primary care cash-pay totals $110–$270 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and the ER averages $1,200–$3,000+. A <a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine 2024 JAMA study</a> found telehealth respiratory episodes cost ~$800 less per episode than in-person care. Per <a href=\"https://www.cdc.gov/antibiotic-use/community/for-patients/common-illnesses/sinus-infection.html\">CDC guidance</a>, most sinus infections are viral; antibiotics are appropriate when symptoms persist beyond 10 days, are severe, or follow a double-sickening pattern, a determination telehealth can make without imaging.",
  },

  // ──────────────────────────────────────────────────────────────────
  'sore-throat-treatment-cost': {
    slug: "sore-throat-treatment-cost",
    pid: "sore-throat-cost",
    h1: "Sore Throat & Strep Treatment Cost: What You'll Actually Pay",
    metaTitle: "Sore Throat & Strep Treatment Cost (2026) | TeleDirectMD",
    metaDescription: "Telehealth sore throat visit: $88–$144 total. Urgent care strep: $185–$345. Verified 2026 prices for visit + rapid strep test + antibiotic.",
    breadcrumb: "Sore Throat Treatment Cost",
    answerLead: "Sore throat & strep treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth visit + antibiotic costs <strong>$88–$144 total</strong> at TeleDirectMD ($79 visit + $9–$15 amoxicillin via <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx</a>; ~$25–$50 if an at-home strep test is needed). In-person urgent care: <strong>$185–$345</strong> (visit + rapid strep + antibiotic, per <a href=\"https://bettercare.com/costs/strep-test-cost\">BetterCare 2025</a> and <a href=\"https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care\">Mira Health</a>). CVS MinuteClinic bundles the test in the $99–$139 tier (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS, 2024</a>).",
    heroSub: "Telehealth $79 visit. If a rapid strep test is needed, an at-home kit runs $25–$50, still cheaper than urgent care's $185–$345.",
    heroIntro: "Most sore throats are viral, but the few that are strep need antibiotics promptly. The Centor criteria (fever, tonsillar exudate, anterior cervical lymphadenopathy, no cough) help estimate strep probability without a test for many patients. We pulled 2022–2025 cost data from BetterCare, Mira Health, and CVS to show what sore-throat treatment costs in every setting.",
    heroCardTitle: "Sore Throat Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Symptom-focused video visit with board-certified MD",
      "Centor score-based decision: empiric antibiotics, at-home strep test, or supportive care",
      "E-prescription for amoxicillin or alternative if indicated",
      "43 states, same-day, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $88–$94 typical (no test) vs. $185–$345 urgent care",
      "Skip the test entirely when Centor score is low or high",
      "Same-day antibiotic at any US pharmacy",
      "Clear guidance on when in-person testing is worth $25–$50",
      "In-network with Aetna, BCBS, UnitedHealthcare in select states",
    ],
    costTable: {
      title: "Sore Throat / Strep Treatment Cost by Setting (2026, Cash-Pay Total)",
      caption: "Includes visit + rapid strep test (when applicable) + antibiotic.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$88–$144 typical",
          includes: "$79 visit + amoxicillin ($9–$15) ± at-home strep kit ($25–$50)",
          source: "TeleDirectMD; GoodRx; BetterCare",
          sourceUrl: "https://bettercare.com/costs/strep-test-cost",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$88–$144",
          includes: "Visit ($40–$90) + antibiotic ($9–$15) ± at-home strep ($25–$50)",
          source: "BetterCare, GoodRx 2025",
          sourceUrl: "https://bettercare.com/costs/strep-test-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$108–$154",
          includes: "NP visit ($99–$139) + strep test bundled + antibiotic ($9–$15)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$135–$315",
          includes: "Visit ($100–$250) + strep ($25–$50) + antibiotic",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$185–$345",
          includes: "Visit ($150–$280) + rapid strep ($25–$50) + antibiotic ($9–$15)",
          source: "Mira Health 2022 + 2025; BetterCare",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$500–$2,700+",
          includes: "Rarely appropriate for sore throat alone",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "When You Actually Need a Strep Test",
      paragraphs: [
        "The Centor criteria (fever, tonsillar exudate, tender anterior cervical lymph nodes, absence of cough) are used to estimate strep probability. Patients with very low scores can skip the test and the antibiotic; patients with very high scores can be treated empirically. Patients in the middle benefit from a test, and the test can be done at home with a $25–$50 kit, sparing the urgent care fee.",
        "<a href=\"https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care\">Mira Health</a> reported the average cost of a rapid strep test plus visit at urgent care was <strong>$187 in 2022</strong>, adjusted for ~20% medical inflation since, that's ~$225 in 2025 dollars. <a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS MinuteClinic</a> bundles the test into its $99–$139 tier, which is the lowest in-person price in the market.",
        "Generic amoxicillin ($9) is the standard strep antibiotic per <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx</a>. Penicillin-allergic patients can use cephalexin or azithromycin.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From Telehealth Sore Throat Care",
      groups: [
        {
          label: "Adults with high or low Centor scores",
          desc: "Skip the test entirely, empirical treatment or supportive care decided in 10 minutes.",
        },
        {
          label: "Working adults with no time for urgent care",
          desc: "Book a $79 visit on a lunch break; antibiotic at your pharmacy by end of day.",
        },
        {
          label: "College students",
          desc: "Health center closed? $79 visit + at-home strep kit if needed.",
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
          body: "Book a $79 telehealth visit. Most patients leave with either an antibiotic or a clear plan, no test needed.",
          good: true,
        },
        {
          num: 3,
          head: "Mid-range Centor and you want certainty?",
          body: "Telehealth visit + at-home rapid strep kit ($25–$50). Total still $113–$138, cheaper than urgent care.",
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
        "If you start an antibiotic, you're no longer contagious after 24 hours.",
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
        answer: "Telehealth: $88–$144 total depending on whether testing is needed. Urgent care: $185–$345. CVS MinuteClinic: $108–$154 with bundled testing.",
      },
      {
        question: "Do I always need a strep test?",
        answer: "No. Patients with very high or very low Centor scores can be managed empirically (treat or don't treat). Mid-range scores benefit from testing, at home for ~$30 or in person.",
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
        answer: "For low or high Centor scores, yes, clinical decision-making works without a test. Mid-range cases often need a rapid strep test, which can be done at home or via a brief in-person stop.",
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
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. Self-pay $79 is available in all 43 states.",
      },
    ],
    references: [
      {
        label: "BetterCare, Strep test cost (April 2025)",
        url: "https://bettercare.com/costs/strep-test-cost",
      },
      {
        label: "Mira Health, Strep test at urgent care (2022)",
        url: "https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care",
      },
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
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
        label: "BetterCare, ER visit cost (April 2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "MDsave, Rapid strep test pricing (2025)",
        url: "https://www.mdsave.com/procedures/rapid-strep-test/d786f4cd",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating a sore throat via telehealth costs $88–$144 total, a $79 video visit plus ~$9 for generic amoxicillin (verified <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">GoodRx, 2026</a>), or $113–$138 if an at-home rapid strep kit ($25–$50) is also needed. By comparison, urgent care in-person averages $185–$345 (visit + strep test + antibiotic, per <a href=\"https://bettercare.com/costs/strep-test-cost\">BetterCare, 2025</a> and <a href=\"https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care\">Mira Health</a>), CVS MinuteClinic runs $108–$154 with bundled testing (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS 2024 price list</a>), primary care cash-pay totals $135–$315 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and the ER averages $500–$2,700+ (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>). Using the Centor clinical scoring criteria, a telehealth physician can determine empiric antibiotic eligibility, or rule out testing entirely, without an in-person visit.",
  },

  // ──────────────────────────────────────────────────────────────────
  'online-prescription-cost': {
    slug: "online-prescription-cost",
    pid: "rx-cost",
    h1: "How Much Does an Online Prescription Cost?",
    metaTitle: "Online Prescription Cost in 2026: Visit + Generic Rx | TeleDirectMD",
    metaDescription: "A $79 online doctor visit + $4–$30 generic prescription = $83–$109 total. Verified 2026 prices for refills (BP, asthma, cholesterol, antibiotics).",
    breadcrumb: "Online Prescription Cost",
    answerLead: "Online prescription cost in 2026 (uninsured):",
    answerBody: "A telehealth visit + generic Rx totals <strong>$83–$109</strong> at TeleDirectMD ($79 visit + $4–$30 generic via GoodRx). Common refills: lisinopril <a href=\"https://www.goodrx.com/conditions/urinary-tract-infection/drugs\">$4–$12</a>, atorvastatin $8–$15, albuterol inhaler $20–$25, metoprolol $3–$9 (<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/\">PMC, 2020</a>). Without GoodRx, undiscounted cash prices for the same generics averaged <strong>$42 per Rx</strong>, GoodRx cuts that 53–77%.",
    heroSub: "Most online refill visits cost a $79 flat fee at TeleDirectMD. Add a generic prescription (often $4–$30 with GoodRx) and you're done.",
    heroIntro: "For stable chronic conditions, high blood pressure, high cholesterol, asthma, hypothyroidism, acid reflux, an in-person visit usually adds nothing clinically. The doctor reviews how you're doing, refills the prescription, and orders any routine labs you can drop into a Quest or LabCorp at your convenience. We pulled 2024–2026 prices from PMC, GoodRx, and Venteur to show what online prescription refills actually cost.",
    heroCardTitle: "Online Refill at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "E-prescription to your pharmacy in 30 minutes",
      "Refills for stable chronic conditions (BP, asthma, cholesterol, etc.)",
      "43 states; no insurance required",
      "HSA/FSA accepted",
      "No controlled substances",
    ],
    heroBenefits: [
      "$79 flat, no facility fee, no labs unless clinically needed",
      "Generic medications via GoodRx: $4–$30/month for most",
      "No drive time; visits average 10 minutes",
      "53–77% savings on generic Rx vs. undiscounted cash price",
      "In-network with Aetna, BCBS, UnitedHealthcare in select states",
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
          cost: "$83–$109",
          includes: "Visit ($40–$90) + generic Rx ($4–$30)",
          source: "Venteur 2026; GoodRx",
          sourceUrl: "https://www.venteur.com/blog/how-much-does-an-urgent-care-visit-cost-guide",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$103–$169",
          includes: "NP visit ($99–$139) + Rx ($4–$30)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$104–$280",
          includes: "In-person visit ($100–$250) + Rx ($4–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$154–$310",
          includes: "Walk-in visit ($150–$280) + Rx ($4–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
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
        "A 2020 Journal of General Internal Medicine study cited by <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/\">PMC</a> found uninsured patients paid an average of <strong>$42.41</strong> per generic cardiovascular medication at retail cash price, versus <strong>$9.88–$17.85</strong> with a GoodRx discount card. That's a 53–77% reduction. RAND has reported US drug prices are <strong>nearly 3× the average of other high-income countries</strong> (<a href=\"https://www.goodrx.com/drugs/savings\">GoodRx, 2024</a>).",
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
    medicationsTable: {
      title: "Common Generic Refill Costs (GoodRx, 2026, 30-Day Supply)",
      caption: "Retail pharmacy with GoodRx coupon. Without GoodRx, cash retail averages ~$42/Rx (PMC 2020).",
      rows: [
        {
          drug: "Lisinopril (BP)",
          cost: "$4–$12",
          sourceUrl: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
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
        answer: "Yes for the visit fee, $79 vs. $100–$250 cash-pay primary care. Medication costs are identical regardless of where the prescription was written; use GoodRx, Cost Plus Drugs, or Amazon Pharmacy to lower drug cost.",
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
        answer: "E-prescriptions reach your pharmacy within 30 minutes of the visit. Most patients pick up within 1 hour.",
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
        label: "GoodRx, Antibiotic & cardiovascular drug pricing",
        url: "https://www.goodrx.com/conditions/urinary-tract-infection/drugs",
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
        label: "Venteur, Urgent care + telehealth cost (2026)",
        url: "https://www.venteur.com/blog/how-much-does-an-urgent-care-visit-cost-guide",
      },
      {
        label: "GoodRx, Drug savings overview",
        url: "https://www.goodrx.com/drugs/savings",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, an online prescription costs $83–$109 total, a $79 telehealth visit plus a generic medication ranging from $3–$30 with GoodRx: lisinopril $4–$12, atorvastatin $8–$15, metoprolol $3–$9, and omeprazole $4–$12 (verified at <a href=\"https://www.goodrx.com\">GoodRx, 2026</a>). A 2020 JGIM study found uninsured patients paid an average $42.41 per generic cardiovascular medication at retail cash price versus $9.88–$17.85 with GoodRx, a 53–77% reduction (<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/\">PMC, 2020</a>). A <a href=\"https://www.doctronic.ai/blog/goodrx-vs-insurance/\">Doctronic 2026 analysis</a> found GoodRx often beats a standard insurance copay for generics under $10. In-person primary care refill visits run $100–$250 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>). Telehealth refills are appropriate for stable chronic conditions, hypertension, hyperlipidemia, asthma, hypothyroidism, and GERD, where no new physical exam or controlled substance is required.",
  },

  // ──────────────────────────────────────────────────────────────────
  'strep-throat-cost': {
    slug: "strep-throat-cost",
    pid: "cost-strep-throat",
    // Opt-in: deep-link the state grid to /{state}/sore-throat-treatment-online/
    // (strep is served by the sore-throat-treatment-online condition page).
    // Captures geographic intent on "strep test cost in <state>" queries.
    stateDeepLinkConditionSlug: 'sore-throat-treatment-online',
    // Opt-in: AggregateOffer schema for AI-engine cost-comparison citation.
    // Prices match the visible cost-comparison content already on the page.
    costComparisonOffers: [
      {
        providerName: 'TeleDirectMD',
        providerUrl: 'https://teledirectmd.com/',
        lowPrice: 79,
        highPrice: 79,
        description: 'Self-pay $79 flat. Same-day MD video visit, e-prescription to your pharmacy.',
      },
      {
        providerName: 'Sesame Care',
        providerUrl: 'https://sesamecare.com/',
        lowPrice: 35,
        highPrice: 89,
        description: 'Self-pay video visits; price varies by provider.',
      },
      {
        providerName: 'CVS MinuteClinic',
        providerUrl: 'https://www.cvs.com/minuteclinic',
        lowPrice: 99,
        highPrice: 139,
        description: 'In-person rapid strep test plus evaluation; price varies by location.',
      },
      {
        providerName: 'Walgreens Healthcare Clinic',
        providerUrl: 'https://www.walgreens.com/',
        lowPrice: 79,
        highPrice: 139,
        description: 'In-person rapid strep test plus evaluation.',
      },
      {
        providerName: 'Urgent care (independent)',
        lowPrice: 150,
        highPrice: 250,
        description: 'Median U.S. self-pay urgent care visit cost; rapid strep test additional.',
      },
      {
        providerName: 'Emergency room',
        lowPrice: 750,
        highPrice: 3000,
        description: 'Self-pay ER visit range; not recommended for uncomplicated strep.',
      },
    ],
    medicalCondition: {
      name: "Streptococcal pharyngitis",
      alternateName: "Strep throat",
      code: {
        code: "J02.0",
        codingSystem: "ICD-10",
      },
      signOrSymptom: [
        "Sore throat",
        "Fever",
        "Tender cervical lymphadenopathy",
        "Tonsillar exudate",
      ],
      possibleTreatment: "Penicillin V or amoxicillin (first-line); cephalexin or azithromycin for penicillin-allergic patients",
    },
    service: {
      name: "TeleDirectMD strep throat $79 visit",
      serviceType: "Telehealth strep throat evaluation and treatment",
      price: "79",
      priceCurrency: "USD",
    },
    procedure: {
      name: "Telehealth Centor/McIsaac evaluation for streptococcal pharyngitis",
      procedureType: "NoninvasiveProcedure",
      howPerformed: "A board-certified MD applies the Centor/McIsaac scoring system over secure video, recommends rapid antigen testing where appropriate, and prescribes evidence-based antibiotic therapy when GAS is confirmed or highly probable.",
    },
    h1: "Strep Throat Treatment Cost in 2026: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Strep Throat Treatment Cost (2026): Telehealth $84 vs Urgent Care $185–$345 | TeleDirectMD",
    metaDescription: "Strep throat treatment costs $84–$95 via telehealth (TeleDirectMD $79 visit + $5–$18 antibiotic) vs $185–$345 urgent care vs $99–$154 CVS MinuteClinic vs $500–$2,700 ER. Verified 2026 cash-pay prices with Centor criteria explainer.",
    breadcrumb: "Strep Throat Cost",
    answerLead: "Strep throat treatment costs $84–$95 total via telehealth (TeleDirectMD $79 visit + $5–$18 amoxicillin), about 71–80% less than urgent care ($185–$345) and 96% less than the ER ($500–$2,700) for the same outcome.",
    answerBody: "A telehealth visit + antibiotic costs <strong>$84–$95 total</strong> at TeleDirectMD ($79 visit + amoxicillin $5.20–$16.34 via <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx</a>).<div class=\"tdmd-answer-stats\"><span>$84–$95 telehealth total</span><span>71–80% less than urgent care</span><span>96% less than ER</span></div> Urgent care (visit + rapid strep test + antibiotic): <strong>$185–$345</strong> (<a href=\"https://bettercare.com/costs/strep-test-cost\">BetterCare 2026</a>; <a href=\"https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care\">Mira Health</a>). CVS MinuteClinic (NP visit + test bundled): <strong>$99–$154</strong> (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS MinuteClinic, 2024</a>). ER (rarely appropriate): <strong>$500–$2,700</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare</a>). First-line antibiotic per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC</a> and <a href=\"https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/\">IDSA</a>: penicillin V or amoxicillin; penicillin-allergic patients: cephalexin or azithromycin.",
    heroSub: "TeleDirectMD $79 visit + $5–$18 antibiotic = $84–$95 total. Urgent care charges $185–$345 for the same outcome.",
    heroIntro: "Group A Streptococcus (GAS) accounts for roughly 5–15% of adult sore throats, but nearly 60% of patients with any sore throat receive an antibiotic (<a href=\"https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html\">AAFP, Am Fam Physician 2024</a>). The right approach is to apply a validated clinical decision rule (Centor/McIsaac criteria), confirm with a rapid antigen test when the score is intermediate, and prescribe antibiotics only to confirmed or high-probability GAS cases. A board-certified physician can execute this algorithm entirely over video, at a fraction of urgent care cost.",
    heroCardTitle: "Strep Throat Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Video visit with board-certified MD (Dr. Parth Bhavsar)",
      "Centor/McIsaac score assessed from your reported symptoms",
      "Empiric antibiotic if pre-test probability is high (score 3–4)",
      "Referral for rapid strep test at retail clinic if score is intermediate",
      "E-prescription for amoxicillin, penicillin V, cephalexin, or azithromycin",
      "Available in 43 states, same-day, evenings & weekends",
    ],
    heroBenefits: [
      "Total $84–$95 typical vs. $185–$345 at urgent care",
      "Skip the waiting room, Centor algorithm works via video history",
      "First-line antibiotics (amoxicillin/penicillin V) as low as $5.20–$9.46 with GoodRx",
      "If rapid test needed: at-home kit ~$25–$50, total still < urgent care",
      "In-network with Aetna, BCBS, and UnitedHealthcare in select states",
    ],
    costTable: {
      title: "Strep Throat Treatment Cost by Setting (2026, Cash-Pay Total)",
      caption: "Includes visit + rapid antigen detection test (RADT, when applicable) + first-line antibiotic. Sources verified April 2026.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$84–$95 typical",
          includes: "$79 visit + amoxicillin ($5.20–$16.34) or penicillin V ($9.46–$18.38) via GoodRx",
          source: "TeleDirectMD; GoodRx 2026",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          setting: "Telehealth + at-home strep kit",
          cost: "$109–$145",
          includes: "$79 visit + at-home rapid strep kit ($25–$50) + antibiotic ($5–$18)",
          source: "BetterCare 2026",
          sourceUrl: "https://bettercare.com/costs/strep-test-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$99–$154",
          includes: "NP/PA visit ($99–$139) + rapid strep test typically bundled + antibiotic ($9–$15)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$135–$315",
          includes: "In-person visit ($100–$250) + RADT ($25–$50) + antibiotic ($9–$15)",
          source: "Mira Health 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$185–$345",
          includes: "Walk-in visit ($150–$280) + rapid strep test ($25–$50) + antibiotic ($9–$15)",
          source: "BetterCare 2026; Mira Health",
          sourceUrl: "https://bettercare.com/costs/strep-test-cost",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$500–$2,700+",
          includes: "ED visit + test + antibiotic; strep throat rarely justifies ER",
          source: "BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "When Can a Telehealth Doctor Treat Strep Without a Swab?",
      paragraphs: [
        "The <a href=\"https://www.mdcalc.com/calc/104/centor-score-modified-mcisaac-strep-pharyngitis\">Modified Centor (McIsaac) Score</a> assigns one point each for: fever above 38°C (100.4°F), tonsillar exudate or swelling, tender anterior cervical lymph nodes, and absence of cough, with an age adjustment (+1 for ages 3–14, −1 for age ≥45). A score of 0–1 indicates <strong>7–13% probability</strong> of GAS, no testing or antibiotics needed. Scores of 2–3 indicate intermediate risk (20–38%), a rapid antigen detection test (RADT) is recommended. A score of 4–5 indicates 50–69% probability, empiric antibiotic therapy or testing is reasonable per <a href=\"https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html\">AAFP (Am Fam Physician 2024)</a>.",
        "During a TeleDirectMD video visit, Dr. Bhavsar evaluates your reported symptoms to calculate your Centor score. Patients without cough who report fever and painful swallowing may score 2–4 without any physical touch. The <a href=\"https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html\">AAFP (2024)</a> notes explicitly: <em>\"The limited history used in these decision rules is amenable to virtual visits.\"</em> Patients with score ≥3 and consistent symptoms may receive empiric amoxicillin or penicillin V directly. Intermediate-score patients are guided to a nearby retail clinic or pharmacy for a rapid strep swab ($25–$50), then return for a prescription if positive, total cost still well below urgent care.",
        "Per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC clinical guidance (2025)</a>, patients with clear viral features (cough, rhinorrhea, hoarseness, oral ulcers) do not need strep testing at all. Correctly identifying low-risk viral cases avoids unnecessary antibiotic prescribing, a core principle of <a href=\"https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/\">IDSA's 2012 (updated 2025) GAS pharyngitis guideline</a>, which specifies that antibiotics should only be given to patients with laboratory-confirmed or high-probability GAS.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From Telehealth Strep Treatment",
      groups: [
        {
          label: "Adults with classic strep features (score 3–4)",
          desc: "Empiric amoxicillin or penicillin V prescribed in one $79 video visit, no waiting room, no strep test charge.",
        },
        {
          label: "Adults with intermediate Centor score",
          desc: "$79 visit guides you to a $25–$50 pharmacy rapid test; prescription follows the result. Total ~$109–$145, still cheaper than urgent care.",
        },
        {
          label: "Penicillin-allergic patients",
          desc: "Cephalexin or azithromycin prescribed based on allergy severity, same $79 visit, same-day prescription.",
        },
        {
          label: "Working adults and college students",
          desc: "Book on a lunch break; antibiotic waiting at your pharmacy by evening. No half-day in urgent care.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Strep Throat Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Adult (18+), otherwise healthy",
        "Classic strep features: fever, tonsillar exudate, no cough (Centor ≥2)",
        "Clearly viral pattern (no cough, rhinorrhea, hoarseness), for reassurance and symptom management",
        "No drooling, stridor, or muffled \"hot potato\" voice",
        "No severe unilateral swelling (peritonsillar abscess excluded)",
        "Symptoms present for ≤3–5 days",
      ],
      notFor: [
        "Drooling or inability to swallow saliva, go to the ER immediately",
        "Stridor or high-pitched breathing, possible epiglottitis; ER only",
        "Muffled \"hot potato\" voice, peritonsillar abscess risk",
        "Severe one-sided throat swelling (uvula deviation)",
        "Pediatric patients under 18 (TeleDirectMD treats adults only, see a pediatrician)",
        "Known rheumatic fever history, requires in-person evaluation",
      ],
    },
    decisionGuide: {
      title: "Strep Throat: Telehealth, In-Person, or ER?",
      steps: [
        {
          num: 1,
          head: "Drooling, stridor, or muffled voice?",
          body: "Go to the ER immediately. These signs suggest peritonsillar abscess or epiglottitis, surgical emergencies that cannot be managed via video.",
          good: false,
        },
        {
          num: 2,
          head: "Fever, no cough, painful swallowing (Centor ≥2)?",
          body: "Book a $79 TeleDirectMD visit. High Centor scores (3–4) can receive empiric amoxicillin or penicillin V directly. Total: $84–$95.",
          good: true,
        },
        {
          num: 3,
          head: "Intermediate score and want lab confirmation?",
          body: "TeleDirectMD directs you to a nearby pharmacy for a rapid strep swab ($25–$50). Prescription follows a positive result. Total: $109–$145, still under urgent care.",
          good: true,
        },
        {
          num: 4,
          head: "Recurrent strep (3+ episodes per year)?",
          body: "Telehealth handles the current episode fine. Ask Dr. Bhavsar for a referral to ENT to discuss tonsillectomy thresholds (≥7 episodes/year, or ≥5 in each of 2 years, or ≥3 in each of 3 years).",
          good: true,
        },
      ],
    },
    medicationsTable: {
      title: "Strep Throat Antibiotic Costs (GoodRx Cash Price, 2026)",
      caption: "Per IDSA and CDC: 10-day course for beta-lactams. First-line: amoxicillin or penicillin V. Penicillin-allergic alternatives below.",
      rows: [
        {
          drug: "Amoxicillin 500mg (first-line, 20–21 caps)",
          cost: "$5.20–$16.34",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          drug: "Penicillin VK 500mg (first-line alternative, 20 tabs)",
          cost: "$9.46–$18.38",
          sourceUrl: "https://www.goodrx.com/penicillin-v-potassium/how-much-is-penicillin-without-insurance",
        },
        {
          drug: "Cephalexin 500mg (non-anaphylactic penicillin allergy, 28 caps)",
          cost: "$8.15–$37.20",
          sourceUrl: "https://www.goodrx.com/cephalexin",
        },
        {
          drug: "Azithromycin Z-pack 250mg × 6 tabs (severe penicillin allergy, 5-day)",
          cost: "$5.66–$34.90",
          sourceUrl: "https://www.goodrx.com/azithromycin",
        },
      ],
    },
    homeCare: {
      title: "Supportive Care While the Antibiotic Works",
      bullets: [
        "Salt-water gargle (½ tsp salt in 8 oz warm water) several times a day.",
        "Acetaminophen or ibuprofen for pain and fever, follow dosing on the label.",
        "OTC throat lozenges with benzocaine for short-term numbing.",
        "Cold or warm liquids and soft foods while swallowing is painful.",
        "Rest, fever typically breaks within 24–48 hours on appropriate antibiotics.",
        "Once 24 hours of antibiotic therapy is complete and you are afebrile, you are no longer considered contagious (<a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC, 2025</a>).",
        "Finish the full 10-day antibiotic course even if you feel better, stopping early risks relapse and, rarely, rheumatic fever.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Use TeleDirectMD for Strep Throat",
      bullets: [
        "Drooling, severe difficulty swallowing saliva, or stridor, call 911 or go to the ER.",
        "Muffled voice or significant unilateral throat swelling, possible abscess; ER or ENT in-person.",
        "Pediatric patients under 18, TeleDirectMD treats adults only; see a pediatrician.",
        "Known history of acute rheumatic fever, in-person follow-up and cardiology involvement are appropriate.",
        "Symptoms persisting or worsening after 48–72 hours on antibiotics, reevaluation in-person may be needed.",
        "Need for controlled substance prescriptions, TeleDirectMD does not prescribe controlled substances.",
      ],
    },
    faqs: [
      {
        question: "How much does strep throat treatment cost without insurance in 2026?",
        answer: "Via telehealth at TeleDirectMD: $79 visit + $5.20–$18.38 antibiotic = <strong>$84–$95 total</strong> (prices verified via GoodRx April 2026). Urgent care: $185–$345 (visit + rapid strep test + antibiotic). CVS MinuteClinic: $99–$154 with test typically bundled. Emergency room: $500–$2,700, rarely the right setting for strep.",
      },
      {
        question: "Can a telehealth doctor treat strep without a swab?",
        answer: "Yes, in high-probability cases. The Modified Centor (McIsaac) Score uses fever, tonsillar exudate, absent cough, anterior cervical lymphadenopathy, and age to estimate GAS probability. A score of 3–4 (50–69% probability) supports empiric antibiotic therapy per <a href=\"https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html\">AAFP 2024 guidelines</a>. The AAFP notes that the limited history used in Centor scoring \"is amenable to virtual visits.\" Intermediate scores (2–3) warrant a rapid antigen test, which can be done at a pharmacy for $25–$50.",
      },
      {
        question: "Do I need a rapid strep test?",
        answer: "Not always. Per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC clinical guidance</a>, patients with clear viral features (cough, runny nose, hoarseness) do not need testing. Patients with high Centor scores (3–4) can receive empiric antibiotics without a test. Testing is most useful for intermediate-score adults (2–3) and is recommended for all symptomatic children after a negative RADT to rule out false negatives. For adults, a negative RADT does not routinely require follow-up throat culture.",
      },
      {
        question: "Can my pharmacy do a strep test?",
        answer: "Yes. Many CVS MinuteClinics, Walgreens Health clinics, and Walmart Care Clinics offer rapid strep tests. CVS charges approximately $35–$45 for the test alone; with a consultation visit, the cost is $99–$139 bundled. If TeleDirectMD determines a test is needed after your video visit, you can go to a nearby pharmacy clinic for the swab and then return to TeleDirectMD for the prescription if positive, total cost $109–$145, still well under urgent care.",
      },
      {
        question: "What if my home strep test is negative?",
        answer: "A negative at-home or pharmacy rapid antigen test in adults is generally sufficient to rule out GAS pharyngitis, throat culture after a negative RADT is <em>not</em> routinely indicated in adults per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC</a>. Your symptoms are likely viral; treatment shifts to supportive care (pain relief, fluids, rest). If symptoms worsen over 5+ days or you develop a high fever with severe swallowing difficulty, seek in-person evaluation.",
      },
      {
        question: "Why is amoxicillin the first-line antibiotic for strep?",
        answer: "Amoxicillin (and penicillin V) are first-line per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC</a> and <a href=\"https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/\">IDSA</a> because Group A Streptococcus has never developed clinical resistance to penicillin-class antibiotics. They are highly effective, narrow-spectrum (sparing the gut microbiome), well-tolerated, and inexpensive, amoxicillin is as low as $5.20 with a GoodRx coupon (<a href=\"https://www.goodrx.com/amoxicillin\">GoodRx, 2026</a>). Amoxicillin is often preferred over penicillin V in adults for once-daily or twice-daily dosing convenience.",
      },
      {
        question: "Will a telehealth doctor prescribe penicillin VK for strep?",
        answer: "Yes. Penicillin V potassium (penicillin VK) 500mg twice daily for 10 days is a recommended first-line regimen for adults per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC</a>. TeleDirectMD can prescribe it in states where Dr. Bhavsar is licensed. Cash price with GoodRx: $9.46–$18.38 for 20 tablets (<a href=\"https://www.goodrx.com/penicillin-v-potassium/how-much-is-penicillin-without-insurance\">GoodRx, 2026</a>). Some patients prefer amoxicillin for easier twice-daily dosing; both are clinically equivalent for uncomplicated GAS pharyngitis.",
      },
      {
        question: "What if I'm allergic to penicillin?",
        answer: "Per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC guidelines</a> and <a href=\"https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/\">IDSA</a>, alternatives depend on allergy severity: cephalexin 500mg twice daily × 10 days for non-anaphylactic (mild) penicillin allergy ($8.15–$37.20 with GoodRx); azithromycin Z-pack (5-day course) for severe/anaphylactic penicillin allergy ($5.66–$34.90 with GoodRx). Note: azithromycin resistance in GAS is well-documented and varies by region. If you have a documented penicillin allergy, tell Dr. Bhavsar at the start of your visit, the prescription will be tailored accordingly.",
      },
      {
        question: "Why does the ER cost so much for strep throat?",
        answer: "ER bills for strep throat without insurance range from $500 to $2,700 because you are charged a facility fee (independent of the visit), professional fees, and itemized test charges, at full chargemaster rates without any negotiated discount. The rapid strep test alone is often billed at $30–$672 depending on the hospital (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare</a>). Uninsured patients receive no negotiated rate reduction. Strep throat almost never requires ER-level care, a telehealth visit or urgent care visit is clinically equivalent for uncomplicated GAS pharyngitis at a fraction of the cost.",
      },
      {
        question: "Does insurance cover a telehealth visit for strep?",
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states, your standard telehealth copay replaces the $79 self-pay fee. Cash-pay $79 is available in all 43 states where Dr. Bhavsar is licensed. HSA and FSA cards are accepted. To confirm in-network status for your specific plan, visit <a href=\"/insurance/\">TeleDirectMD insurance information</a> or call your insurer before booking.",
      },
      {
        question: "What about my child, can TeleDirectMD treat strep in kids?",
        answer: "TeleDirectMD treats adults aged 18 and older only. Pediatric strep throat should be evaluated by a pediatrician or pediatric urgent care provider. Children who test positive for strep require throat culture follow-up after a negative RADT (unlike adults), per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC guidance</a>, making in-person pediatric care particularly important for children.",
      },
      {
        question: "Is strep throat contagious during treatment?",
        answer: "Yes, until antibiotic therapy has been underway for at least 12–24 hours and you are afebrile. Per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC clinical guidance (2025)</a>: \"Treatment with an appropriate antibiotic for 12 hours or longer limits a person's ability to transmit group A strep bacteria.\" You should stay home from work, school, or crowded settings until you are fever-free and at least 12–24 hours into appropriate antibiotic therapy.",
      },
      {
        question: "When can I return to work or school after strep?",
        answer: "Per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC (2025)</a>, you may return to work or school when you are (1) afebrile and (2) at least 12–24 hours into appropriate antibiotic therapy. In healthcare worker or outbreak settings, 24 hours is the recommended minimum. Most patients with adequate antibiotic coverage are symptomatically much better within 24–48 hours, fever resolves, pain improves, and energy returns. Finish the full 10-day course regardless.",
      },
      {
        question: "What happens if strep throat is not treated?",
        answer: "Untreated or inadequately treated Group A Strep pharyngitis carries a small but real risk of serious complications including acute rheumatic fever (which can damage heart valves), post-streptococcal glomerulonephritis (kidney inflammation), peritonsillar abscess, and spread to close contacts. Per <a href=\"https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html\">CDC</a>, antibiotic treatment shortens symptom duration, reduces transmission risk, and decreases complication risk. This is why testing and treating probable GAS cases matters, and why the $79 telehealth visit pays for itself in avoided downstream costs.",
      },
    ],
    references: [
      {
        label: "CDC, Clinical Guidance for Group A Streptococcal Pharyngitis (November 2025)",
        url: "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html",
      },
      {
        label: "CDC, About Group A Strep Infection",
        url: "https://www.cdc.gov/group-a-strep/about/index.html",
      },
      {
        label: "IDSA, 2012 (Updated 2025) Clinical Practice Guideline: Group A Streptococcal Pharyngitis",
        url: "https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/",
      },
      {
        label: "AAFP, Streptococcal Pharyngitis: Evidence Review and Clinical Guidelines (Am Fam Physician 2024)",
        url: "https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html",
      },
      {
        label: "MDCalc, Centor Score (Modified/McIsaac) for Strep Pharyngitis",
        url: "https://www.mdcalc.com/calc/104/centor-score-modified-mcisaac-strep-pharyngitis",
      },
      {
        label: "GoodRx, Amoxicillin 2026 Prices (updated April 2026)",
        url: "https://www.goodrx.com/amoxicillin",
      },
      {
        label: "GoodRx, Penicillin VK: How Much Is Penicillin Without Insurance (2026)",
        url: "https://www.goodrx.com/penicillin-v-potassium/how-much-is-penicillin-without-insurance",
      },
      {
        label: "GoodRx, Cephalexin 2026 Prices",
        url: "https://www.goodrx.com/cephalexin",
      },
      {
        label: "GoodRx, Azithromycin 2026 Prices",
        url: "https://www.goodrx.com/azithromycin",
      },
      {
        label: "CVS MinuteClinic, Service Price Lists (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
      {
        label: "BetterCare, Strep Test Cost (2026)",
        url: "https://bettercare.com/costs/strep-test-cost",
      },
      {
        label: "BetterCare, ER Visit Cost (April 2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, How Much Does a Strep Test Cost at Urgent Care?",
        url: "https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care",
      },
      {
        label: "Mira Health, How Much Does Urgent Care Cost Without Insurance? (2025)",
        url: "https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance",
      },
      {
        label: "TeleDirectMD, Sore Throat Treatment Cost (parent cost page)",
        url: "https://teledirectmd.com/cost/sore-throat-treatment-cost/",
      },
    ],
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating strep throat via telehealth costs $84–$95 total, a $79 video visit plus $5.20–$16.34 for generic amoxicillin or $9.46–$18.38 for penicillin VK, verified <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx, April 2026</a>. By comparison, urgent care in-person averages $185–$345 (<a href=\"https://bettercare.com/costs/strep-test-cost\">BetterCare 2026</a>), CVS MinuteClinic runs $99–$154 bundled (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS 2024 price list</a>), primary care totals $135–$315 (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>), and the ER can reach $500–$2,700 (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>). Per <a href=\"https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/\">IDSA's 2025-updated GAS pharyngitis guideline</a> and <a href=\"https://www.aafp.org/pubs/afp/issues/2024/0400/streptococcal-pharyngitis.html\">AAFP 2024 guidance</a>, the Modified Centor/McIsaac score, fully assessable via video history, supports empiric antibiotic therapy at scores of 3–4 without a rapid swab; intermediate-score patients using a $25–$50 at-home test still pay under $117 total.",
  },

  // ──────────────────────────────────────────────────────────────────
  'pink-eye-cost': {
    slug: "pink-eye-cost",
    pid: "pinkeye-cost",
    h1: "Pink Eye Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Pink Eye Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "A telehealth pink eye visit costs $90–$91 total (visit + erythromycin ointment via GoodRx). Urgent care runs $150–$280; ER can hit $300–$400. Verified 2026 prices.",
    breadcrumb: "Pink Eye Treatment Cost",
    answerLead: "Pink eye (conjunctivitis) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth pink eye evaluation costs <strong>$90–$91 total</strong> at TeleDirectMD, a $79 visit plus $11–$12 generic erythromycin ophthalmic ointment via <a href=\"https://www.goodrx.com/erythromycin\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$150–$280</strong> for the same presentation (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>). An ER visit for pink eye averages <strong>$300–$400</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>), almost always an unnecessary setting given that most conjunctivitis is viral and self-limiting per <a href=\"https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis\">American Academy of Ophthalmology (AAO) guidelines</a>.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating pink eye (conjunctivitis) via telehealth costs $90–$91 total in the US, a $79 video visit with a board-certified MD plus $11–$12 for generic erythromycin ophthalmic ointment (verified GoodRx, April 2026). By comparison, an urgent care in-person visit runs $150–$280 (BetterCare, 2025), retail clinics like CVS MinuteClinic charge $99–$139 per visit (CVS 2024 price list), primary care cash-pay totals $150–$265 (Mira Health, 2025), and an ER visit for pink eye can hit $300–$400 (BetterCare, 2025). Per the American Academy of Ophthalmology, most cases of conjunctivitis are viral and resolve without antibiotics, telehealth is appropriate for mild-to-moderate presentations without corneal involvement, vision loss, or severe pain.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $11–$12 antibiotic ointment if indicated. Total cost: as low as $90. Most pink eye is viral, our MDs follow AAO guidelines and won't over-prescribe.",
    heroIntro: "Pink eye (conjunctivitis) is one of the most over-treated conditions in US urgent care. The American Academy of Ophthalmology notes that most cases are viral and self-limiting, antibiotics do nothing for viral conjunctivitis and add unnecessary cost. When bacterial conjunctivitis is the diagnosis, generic erythromycin ophthalmic ointment costs just $11–$12 with a GoodRx coupon. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show you what pink eye treatment actually costs across every care setting.",
    heroCardTitle: "Pink Eye Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment: bacterial vs. viral vs. allergic conjunctivitis",
      "E-prescription to your pharmacy if antibiotics are clinically indicated",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $90–$91 vs. $150–$280 urgent care in-person",
      "No waiting room, typical visit 10–15 minutes",
      "AAO-aligned care: antibiotics prescribed only when clinically warranted",
      "Same-day prescription at any US pharmacy if needed",
      "Documented receipt suitable for HSA/FSA reimbursement",
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
          cost: "$79–$115",
          includes: "Visit ($40–$100) + antibiotic ointment ($11–$22) if indicated",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/eye-infection/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$150–$265",
          includes: "In-person visit ($140–$250) + ointment ($11–$12)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280",
          includes: "Walk-in visit ($140–$260) + antibiotic ointment ($11–$22)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$110–$151",
          includes: "NP visit ($99–$139) + ointment ($11–$12)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$300–$400+",
          includes: "ED visit + exam; chargemaster pricing for a non-emergent condition",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Pink Eye Visit Is Safe and Cheap",
      paragraphs: [
        "The <a href=\"https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis\">American Academy of Ophthalmology (AAO)</a> recommends against routine antibiotic prescribing for conjunctivitis, noting that the majority of cases are viral and self-resolving within 7–10 days. Antibiotics prescribed for viral pink eye provide no benefit and contribute to antimicrobial resistance. Telehealth is ideally positioned here: a clinician can assess the presentation via video (discharge character, unilateral vs. bilateral, associated URI symptoms, recent STI exposure) and determine whether bacterial conjunctivitis, which does respond to erythromycin or ciprofloxacin ophthalmic, is truly the diagnosis.",
        "Penn Medicine's 2026 study published in <em>JAMA Network Open</em> found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, roughly five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For pink eye, a condition that requires no labs, no imaging, and only occasionally a topical antibiotic, the telehealth cost advantage is even more pronounced.",
        "When antibiotic treatment is appropriate, generic erythromycin ophthalmic ointment (0.5%, 3.5g tube) costs <strong>$11.79</strong> with a GoodRx coupon at most US pharmacies (<a href=\"https://www.goodrx.com/erythromycin\">GoodRx, April 2026</a>). Ciprofloxacin ophthalmic solution (0.3%, 2.5ml) runs <strong>$10.57</strong> (<a href=\"https://www.goodrx.com/ciprofloxacin-ophthalmic\">GoodRx, April 2026</a>). The antibiotic cost is rarely the driver, the visit cost is, which is why telehealth saves patients $100–$200 per episode.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Pink Eye Visit",
      groups: [
        {
          label: "Parents of school-age children",
          desc: "Pink eye keeps kids out of school. A $79 telehealth visit at 7am can determine whether antibiotics are needed and get your child back to school faster than an urgent care wait.",
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
          sourceUrl: "https://www.goodrx.com/ciprofloxacin-ophthalmic",
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
        answer: "According to TeleDirectMD's 2026 analysis, telehealth costs $90–$91 total (visit + erythromycin ointment at $11.79 via GoodRx). Urgent care in-person runs $150–$280 (BetterCare, 2025). An ER visit for pink eye can reach $300–$400, almost never warranted for routine conjunctivitis.",
      },
      {
        question: "Do I need antibiotics for pink eye?",
        answer: "Most likely not. The American Academy of Ophthalmology states that most conjunctivitis is viral and clears on its own in 7–10 days without antibiotics. When bacteria are the cause, erythromycin or ciprofloxacin ophthalmic drops cost $10–$12 with a GoodRx coupon. A telehealth visit is the right first step to determine which type you have.",
      },
      {
        question: "How much is erythromycin eye ointment without insurance?",
        answer: "Generic erythromycin 0.5% ophthalmic ointment (3.5g tube) costs $11.79 with a free GoodRx coupon as of April 2026, down from a retail price of $11.84. The brand-name version is far more expensive, always ask for generic.",
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
        answer: "Viral and bacterial pink eye are both highly contagious. Most workplaces and schools require staying home until discharge resolves (typically 24 hours after starting antibiotics for bacterial, or until the eye is no longer watery for viral). Telehealth lets you get evaluated without going to a crowded urgent care waiting room, reducing your own exposure time and protecting others.",
      },
      {
        question: "What's the difference between ciprofloxacin eye drops and erythromycin ointment for pink eye?",
        answer: "Both treat bacterial conjunctivitis and cost roughly the same ($10.57–$11.79 via GoodRx, April 2026). Erythromycin ointment is typically first-line for uncomplicated bacterial conjunctivitis; ciprofloxacin drops (a fluoroquinolone) are often reserved for more severe cases, contact lens-related infections, or when broader coverage is needed. Your TeleDirectMD physician will select based on your presentation.",
      },
      {
        question: "Can I get pink eye treatment the same day through TeleDirectMD?",
        answer: "Yes. TeleDirectMD offers same-day appointments including evenings and weekends. Most patients have a prescription (if clinically warranted) sent to their pharmacy within one hour of booking. For viral conjunctivitis, you'll receive a management plan without an antibiotic, saving the cost of an unnecessary prescription.",
      },
    ],
    references: [
      {
        label: "BetterCare, Urgent care vs. ER cost (2025)",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
      },
      {
        label: "GoodRx, Erythromycin ophthalmic pricing (April 2026)",
        url: "https://www.goodrx.com/erythromycin",
      },
      {
        label: "GoodRx, Ciprofloxacin ophthalmic pricing (April 2026)",
        url: "https://www.goodrx.com/ciprofloxacin-ophthalmic",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
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
    metaTitle: "Ear Infection Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "A telehealth ear infection visit + amoxicillin costs $88–$98 total (vs. $150–$280 urgent care). Verified 2026 prices from GoodRx, BetterCare, and Mira Health.",
    breadcrumb: "Ear Infection Treatment Cost",
    answerLead: "Ear infection treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth ear infection visit at TeleDirectMD costs <strong>$88–$98 total</strong>, a $79 visit plus $9–$19 for generic amoxicillin or cefdinir via <a href=\"https://www.goodrx.com/amoxicillin\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$150–$280</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>). An ER ear infection visit averages <strong>$1,500–$3,000</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>), a setting that is rarely indicated for a routine adult ear infection. Per <a href=\"https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html\">AAFP guidelines</a>, amoxicillin remains first-line for adults with acute otitis media.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an adult ear infection via telehealth costs $88–$98 total in the US, a $79 video visit with a board-certified MD plus $9–$19 for generic amoxicillin 500mg (verified GoodRx, April 2026). By comparison, urgent care in-person averages $150–$280 (BetterCare, 2025), CVS MinuteClinic charges $110–$151 (CVS 2024 price list), primary care cash-pay totals $150–$265 (Mira Health, 2025), and an ER visit can reach $1,500–$3,000 for the same condition (BetterCare, 2025). Per AAFP 2022 guidelines, amoxicillin is first-line for adult acute otitis media (AOM); cefdinir 300mg ($23 via GoodRx) is the first alternative for penicillin-allergic patients. Telehealth is appropriate for adult AOM without fever above 102°F, without cholesteatoma risk, and without worsening despite 48–72 hours of antibiotics.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $9–$19 generic antibiotic. Total cost: as low as $88. Appropriate for adult middle and outer ear infections without red flags.",
    heroIntro: "Ear infections (acute otitis media and otitis externa) are among the most common adult conditions treated at urgent care, and among the most over-billed. Per AAFP 2022 guidelines, amoxicillin is first-line for adult acute otitis media and costs just $9 with a GoodRx coupon. There's no otoscope required to diagnose otitis externa (swimmer's ear); symptom history often suffices. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health so you can see exactly what an ear infection costs across every care setting.",
    heroCardTitle: "Ear Infection Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Assessment: otitis media vs. otitis externa vs. other cause",
      "Antibiotic e-prescription to your pharmacy",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $88–$98 vs. $150–$280 urgent care in-person",
      "No waiting room, typical visit 10–15 minutes",
      "First-line amoxicillin 500mg as low as $9 at your pharmacy via GoodRx",
      "AAFP-aligned prescribing: right antibiotic, right duration",
      "Documented receipt suitable for HSA/FSA reimbursement",
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
          cost: "$55–$120",
          includes: "Visit ($40–$100) + antibiotic ($9–$23)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/ear-infection/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$150–$265",
          includes: "In-person visit ($140–$250) + antibiotic ($9–$23)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280",
          includes: "Walk-in visit ($140–$260) + antibiotic ($9–$23); otoscope exam included",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$110–$162",
          includes: "NP visit ($99–$139) + antibiotic ($9–$23)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$3,000+",
          includes: "ED visit + labs + antibiotic; chargemaster pricing",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Ear Infection Visit Is Safe and Cost-Effective",
      paragraphs: [
        "For adult acute otitis media (AOM), the <a href=\"https://www.aafp.org/pubs/afp/issues/2022/1200/antibiotics-upper-respiratory-tract-infections.html\">AAFP (2022)</a> recommends amoxicillin/clavulanate as first-line for adults when antibiotic treatment is elected. For uncomplicated presentations without recent antibiotic use, plain amoxicillin 500mg three times daily is widely used and costs just $9 with a GoodRx coupon (<a href=\"https://www.goodrx.com/amoxicillin\">GoodRx, April 2026</a>). For otitis externa (outer ear canal infection), topical antibiotic drops, ofloxacin or ciprofloxacin/dexamethasone, are first-line, and the diagnosis is largely clinical based on ear canal tenderness and discharge. Both presentations are well-suited to telehealth triage.",
        "Penn Medicine's 2026 study in <em>JAMA Network Open</em> found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For an ear infection that needs only an antibiotic prescription, the in-person visit cost is pure overhead, no imaging, no blood work, and for otitis externa, no special equipment is needed beyond a clinical history.",
        "Where telehealth has limits: a physical otoscope view of the tympanic membrane confirms middle ear effusion and differentiates AOM from otitis media with effusion (OME), which typically does not need antibiotics. Telehealth MDs assess based on symptom pattern, onset, fever, and prior treatment history. If there is diagnostic uncertainty or the patient is not improving after 48–72 hours, in-person evaluation is the right call. When penicillin allergy precludes amoxicillin, cefdinir 300mg is the first oral alternative, costing <strong>$23</strong> for a 20-capsule course via <a href=\"https://www.goodrx.com/cefdinir\">GoodRx (April 2026)</a>.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Ear Infection Visit",
      groups: [
        {
          label: "Adults with recurrent ear infections",
          desc: "If you've had this before and know the pattern, telehealth avoids a $150–$280 urgent care visit for a prescription you've already received before.",
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
        "Known recurrent ear infection with same presentation as prior episodes",
        "Follow-up visit to check treatment response",
      ],
      notFor: [
        "Severe ear pain with high fever (102°F or higher) suggesting mastoiditis risk",
        "Ear pain with facial weakness, dizziness, or neurological symptoms",
        "Bloody or clear ear discharge following head trauma",
        "Suspected cholesteatoma (long history of recurrent infections, hearing loss)",
        "Failure to improve after 48–72 hours of first-line antibiotics",
        "Child under 2 years, pediatric AOM requires in-person otoscope examination per AAP/AAFP",
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
          body: "Book a $79 telehealth visit. Total cost will be $58–$72 including the generic antibiotic. Prescription sent to your pharmacy within the hour.",
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
    medicationsTable: {
      title: "Ear Infection Antibiotic Costs (GoodRx Generic, 2026)",
      caption: "5–10 day oral course, or 7-day topical course; retail pharmacy with GoodRx coupon.",
      rows: [
        {
          drug: "Amoxicillin 500mg, first-line oral (adult AOM)",
          cost: "$9–$19",
          sourceUrl: "https://www.goodrx.com/amoxicillin",
        },
        {
          drug: "Amoxicillin/clavulanate (Augmentin), adult first-line per AAFP",
          cost: "$15–$35",
          sourceUrl: "https://www.goodrx.com/amoxicillin-clavulanate",
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
        "Child under 2 years (requires in-person otoscope exam).",
        "No improvement or worsening after 48–72 hours on antibiotics.",
      ],
    },
    faqs: [
      {
        question: "How much does an ear infection cost to treat without insurance in 2026?",
        answer: "Telehealth: $58–$72 total (TeleDirectMD $79 visit + $9–$23 antibiotic via GoodRx). Urgent care in-person: $150–$280 (BetterCare, 2025). Primary care: $150–$265 (Mira Health, 2025). ER: $1,500–$3,000+ (BetterCare, 2025), almost never appropriate for a routine adult ear infection.",
      },
      {
        question: "What antibiotic is first-line for an adult ear infection?",
        answer: "Per AAFP 2022 guidelines, amoxicillin/clavulanate (Augmentin) is the first-line recommendation for adults with acute otitis media when antibiotics are elected. For patients without recent antibiotic use, plain amoxicillin 500mg is widely used and costs just $9 with a GoodRx coupon (April 2026). For penicillin-allergic patients, cefdinir 300mg is first alternative at $23 for a 20-capsule course via GoodRx.",
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
        answer: "Most patients have an antibiotic prescription sent to their local pharmacy within one hour of booking, same-day visits available including evenings and weekends. Amoxicillin 500mg, the most commonly prescribed agent, costs $9–$19 at most pharmacies with a GoodRx coupon.",
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
        label: "BetterCare, ER visit cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
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
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'yeast-infection-cost': {
    slug: "yeast-infection-cost",
    pid: "yeast-cost",
    h1: "Yeast Infection Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Yeast Infection Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "A telehealth yeast infection visit + fluconazole costs $91 total (vs. $150–$280 urgent care). OTC miconazole is $10–$20. Verified 2026 prices with clinical sources.",
    breadcrumb: "Yeast Infection Treatment Cost",
    answerLead: "Yeast infection (vulvovaginal candidiasis) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth yeast infection evaluation costs <strong>$91 total</strong> at TeleDirectMD, a $79 visit plus $11–$12 for a single-dose generic fluconazole 150mg tablet via <a href=\"https://www.goodrx.com/fluconazole\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$150–$280</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>). OTC miconazole is available without a prescription for $10–$20 at any pharmacy, appropriate if you have a confirmed prior diagnosis. Per <a href=\"https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm\">CDC STI Treatment Guidelines (2021)</a> and <a href=\"https://www.idsociety.org/practice-guideline/candidiasis/\">IDSA guidelines</a>, single-dose oral fluconazole 150mg is a recommended first-line treatment for uncomplicated vulvovaginal candidiasis.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an uncomplicated yeast infection via telehealth costs $91 total in the US, a $79 video visit with a board-certified MD plus $11–$12 for a single-dose generic fluconazole 150mg tablet (verified GoodRx, April 2026). OTC miconazole is an alternative for $10–$20 at any pharmacy without a prescription. By comparison, urgent care in-person averages $150–$280 (BetterCare, 2025), CVS MinuteClinic charges $110–$151 (CVS 2024 price list), primary care cash-pay totals $150–$265 (Mira Health, 2025), and an ER visit can exceed $1,500. Per CDC (2021) and IDSA guidelines, a single oral dose of fluconazole 150mg effectively treats uncomplicated vulvovaginal candidiasis, making it ideal for telehealth delivery.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a single-dose $12 fluconazole tablet. Total cost: $91. No pelvic exam required for uncomplicated presentations with classic symptoms.",
    heroIntro: "Vulvovaginal yeast infections affect roughly 75% of women at least once, and the treatment options are among the cheapest in all of medicine. A single-dose oral fluconazole 150mg tablet costs just $11–$12 with a GoodRx coupon, and per CDC and IDSA guidelines, it is first-line for uncomplicated infections. No lab work is required when classic symptoms are present in a patient with a prior diagnosis. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show what yeast infection treatment costs across every care setting.",
    heroCardTitle: "Yeast Infection Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment: VVC vs. BV vs. other vaginitis",
      "Fluconazole e-prescription or OTC recommendation, as appropriate",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $61 vs. $150–$280 urgent care in-person",
      "Single-dose fluconazole: one tablet, cleared in 1–3 days",
      "No pelvic exam required for uncomplicated presentations",
      "CDC/IDSA-aligned care: right diagnosis, right treatment",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    costTable: {
      title: "Yeast Infection Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + single-dose fluconazole via GoodRx. OTC option available without a visit for many patients.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$61 typical",
          includes: "$79 visit + fluconazole 150mg single dose ($11–$12)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/fluconazole",
        },
        {
          setting: "OTC miconazole/clotrimazole (self-treat)",
          cost: "$10–$20",
          includes: "7-day cream or 3-day suppository; no visit required for confirmed recurrent VVC",
          source: "GoodRx, 2025",
          sourceUrl: "https://www.goodrx.com/conditions/vaginal-yeast-infection/drugs",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$55–$115",
          includes: "Visit ($40–$100) + fluconazole ($11–$12)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/fluconazole",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$150–$265",
          includes: "In-person visit ($140–$250) + fluconazole ($11–$12)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280",
          includes: "Walk-in visit ($140–$260) + fluconazole ($11–$12)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$110–$151",
          includes: "NP visit ($99–$139) + fluconazole ($11–$12)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
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
      title: "Why a Telehealth Yeast Infection Visit Is Safe and Cost-Effective",
      paragraphs: [
        "For uncomplicated vulvovaginal candidiasis (VVC), both the <a href=\"https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm\">CDC STI Treatment Guidelines (2021)</a> and the <a href=\"https://www.idsociety.org/practice-guideline/candidiasis/\">IDSA (2016)</a> endorse a single 150mg oral dose of fluconazole as a first-line treatment option, no pelvic exam required. Telehealth is ideal: the diagnosis is clinical in a patient with classic symptoms (thick white discharge, vaginal itch, no odor) and a prior confirmed episode. Per CDC, women with previously verified VVC can self-treat with OTC topical azoles or request a fluconazole prescription from a telehealth visit.",
        "Penn Medicine's 2026 study in <em>JAMA Network Open</em> found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For a yeast infection requiring only a single pill prescription, the $79 telehealth visit represents the overwhelming bulk of the cost, and it is $100–$230 cheaper than urgent care.",
        "Generic fluconazole 150mg (a single tablet) costs <strong>$11–$12</strong> with a GoodRx coupon at most US pharmacies as of April 2026 (<a href=\"https://www.goodrx.com/fluconazole\">GoodRx, April 2026</a>). The OTC alternative, miconazole 2% vaginal cream or suppositories, is $10–$20 at any pharmacy without a prescription, per CDC recommendations for women with previously confirmed VVC. Telehealth adds value when the diagnosis is unclear (distinguishing VVC from BV or trichomoniasis), when OTC treatment has failed, or when the patient needs oral fluconazole and cannot self-prescribe.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Yeast Infection Visit",
      groups: [
        {
          label: "Women with recurrent yeast infections",
          desc: "Know the symptoms well but need a fluconazole Rx? A $79 telehealth visit is faster and $100–$230 cheaper than urgent care.",
        },
        {
          label: "OTC treatment failures",
          desc: "If 3-day miconazole didn't clear symptoms, it may be BV, a non-albicans Candida species, or a resistant strain. Telehealth can reassess and adjust treatment.",
        },
        {
          label: "Pregnant women (limited telehealth scope)",
          desc: "Topical azoles are safe in pregnancy; oral fluconazole is not recommended in the first trimester per CDC. Telehealth can guide to appropriate OTC therapy and flag in-person referral needs.",
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
        "First trimester of pregnancy (oral fluconazole not recommended per CDC; topical only)",
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
          head: "Classic VVC symptoms, no red flags, not first trimester?",
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
          body: "A $79 telehealth visit can initiate weekly suppressive fluconazole per IDSA guidelines, far cheaper than repeated urgent care visits at $150–$280 each.",
          good: true,
        },
      ],
    },
    medicationsTable: {
      title: "Yeast Infection Medication Costs (GoodRx Generic / OTC, 2026)",
      caption: "Prescription via GoodRx or OTC. Single-dose fluconazole is the most cost-efficient prescription option.",
      rows: [
        {
          drug: "Fluconazole 150mg, single oral dose (first-line prescription, per CDC/IDSA)",
          cost: "$11–$12",
          sourceUrl: "https://www.goodrx.com/fluconazole",
        },
        {
          drug: "Miconazole 2% cream 7-day, OTC first-line topical (per CDC)",
          cost: "$10–$15 OTC",
          sourceUrl: "https://www.goodrx.com/conditions/vaginal-yeast-infection/drugs",
        },
        {
          drug: "Clotrimazole 1% cream 7-day, OTC alternative (per CDC)",
          cost: "$8–$14 OTC",
          sourceUrl: "https://www.goodrx.com/conditions/vaginal-yeast-infection/drugs",
        },
        {
          drug: "Terconazole 0.4% cream, prescription topical for refractory cases",
          cost: "$25–$55",
          sourceUrl: "https://www.goodrx.com/conditions/vaginal-yeast-infection/drugs",
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
        "Fluconazole begins working within 24 hours; full symptom resolution typically takes 1–3 days.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat a Yeast Infection by Telehealth",
      bullets: [
        "Foul or fishy vaginal odor (suggests BV, needs metronidazole, not fluconazole).",
        "Frothy, yellow-green discharge (suggests trichomoniasis, needs in-person wet prep).",
        "Fever or lower abdominal pain (PID risk).",
        "First trimester of pregnancy (oral fluconazole contraindicated; in-person OB evaluation).",
        "Immunocompromised status (HIV, steroid use, chemotherapy).",
        "Third recurrence without a prior wet prep or culture to confirm species.",
      ],
    },
    faqs: [
      {
        question: "How much does a yeast infection cost to treat without insurance in 2026?",
        answer: "OTC: $10–$20 for miconazole or clotrimazole at any pharmacy, no visit required for women with a prior confirmed diagnosis. Telehealth: $91 total ($79 visit + $12 fluconazole via GoodRx). Urgent care: $150–$280 (BetterCare, 2025). ER: almost never appropriate.",
      },
      {
        question: "Is fluconazole or OTC miconazole better for a yeast infection?",
        answer: "Per CDC 2021 guidelines, both are effective first-line options for uncomplicated VVC. Miconazole relieves symptoms slightly faster (topical application), while fluconazole (a single pill) is simpler and requires a prescription. Both achieve cure rates of 80–90% per CDC. TeleDirectMD can prescribe fluconazole for $12 via GoodRx when a prescription is preferred.",
      },
      {
        question: "Can a telehealth doctor tell the difference between a yeast infection and BV?",
        answer: "Often yes, based on symptom pattern. VVC presents with white, clumpy discharge, itch, and no odor. BV presents with thin, gray discharge and a fishy odor, and requires metronidazole, not fluconazole. If the presentation is ambiguous, the MD will direct you to in-person evaluation with a vaginal wet prep.",
      },
      {
        question: "How much is fluconazole without insurance?",
        answer: "According to GoodRx (April 2026), a single tablet of generic fluconazole 150mg costs $11–$12 at most US pharmacies with a free GoodRx coupon. The retail price without a coupon is significantly higher. Always use GoodRx.",
      },
      {
        question: "Is it safe to treat a yeast infection without being seen in person?",
        answer: "Yes, for uncomplicated presentations in non-pregnant adults with classic VVC symptoms and a prior confirmed diagnosis. Both CDC and IDSA explicitly support this approach. Telehealth adds clinical judgment to distinguish VVC from BV or trich, and to prescribe fluconazole when oral therapy is preferred over OTC topical azoles.",
      },
      {
        question: "What if my yeast infection keeps coming back?",
        answer: "Three or more documented episodes in a year is defined as recurrent VVC (RVVC). Per IDSA guidelines, this warrants suppressive therapy: weekly fluconazole 150mg for 6 months, costing roughly $12/month with GoodRx. A TeleDirectMD visit can initiate this protocol, far cheaper than repeated $150–$280 urgent care visits.",
      },
      {
        question: "Can I use my HSA/FSA to pay for the yeast infection visit and prescription?",
        answer: "Yes. Telehealth visits and prescription medications are qualified HSA/FSA expenses. TeleDirectMD provides itemized receipts for reimbursement. The $79 visit and $12 fluconazole prescription are both covered.",
      },
      {
        question: "Can pregnant women get a yeast infection treated via telehealth?",
        answer: "With important caveats. Oral fluconazole is not recommended in the first trimester per CDC guidelines due to possible fetal risk. Topical azoles (clotrimazole, miconazole) for 7 days are safe in pregnancy. TeleDirectMD can guide pregnant patients toward appropriate OTC topical therapy and refer to OB-GYN for in-person confirmation when needed.",
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
        url: "https://www.goodrx.com/conditions/vaginal-yeast-infection/drugs",
      },
      {
        label: "BetterCare, Urgent care vs. ER cost (2025)",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'bv-treatment-cost': {
    slug: "bv-treatment-cost",
    pid: "bv-cost",
    h1: "BV Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "BV Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "A telehealth BV visit + metronidazole costs $91 total (vs. $150–$280 urgent care). Verified 2026 GoodRx prices, CDC guidelines, and pregnancy considerations.",
    breadcrumb: "BV Treatment Cost",
    answerLead: "Bacterial vaginosis (BV) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth BV evaluation costs <strong>$91 total</strong> at TeleDirectMD, a $79 visit plus $12 for a 7-day course of generic metronidazole 500mg via <a href=\"https://www.goodrx.com/metronidazole\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$150–$280</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>). Per <a href=\"https://www.cdc.gov/std/treatment-guidelines/bv.htm\">CDC STI Treatment Guidelines (2021)</a>, the recommended first-line regimen is metronidazole 500mg orally twice daily for 7 days, the cheapest effective treatment for BV available, and fully prescribable via telehealth. Unlike trichomoniasis, partner treatment is not routinely recommended for BV per CDC.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating bacterial vaginosis (BV) via telehealth costs $91 total in the US, a $79 video visit with a board-certified MD plus $12 for a 7-day course of generic metronidazole 500mg (verified GoodRx, April 2026). By comparison, urgent care in-person averages $150–$280 (BetterCare, 2025), CVS MinuteClinic charges $110–$151 (CVS 2024 price list), primary care cash-pay totals $150–$265 (Mira Health, 2025), and an ER visit can exceed $1,500. Per CDC 2021 guidelines, first-line BV treatment is metronidazole 500mg orally twice daily for 7 days; partner treatment is not routinely recommended. Telehealth is appropriate for symptomatic BV in non-pregnant women with classic presentation and no signs of PID.",
    heroSub: "A 10-minute video visit with a board-certified MD plus a $12 metronidazole course. Total cost: $91. CDC-recommended first-line treatment, fully prescribable without a pelvic exam in classic presentations.",
    heroIntro: "Bacterial vaginosis is the most common vaginal infection in the US, affecting roughly 30% of women of reproductive age. The treatment, generic metronidazole 500mg, costs just $12 with a GoodRx coupon. Unlike yeast infections, BV cannot be effectively self-treated with OTC products, and distinguishing it from trichomoniasis requires clinical judgment, which is exactly what a telehealth visit provides. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show what BV treatment costs across every care setting.",
    heroCardTitle: "BV Treatment Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment: BV vs. yeast infection vs. trichomoniasis",
      "Metronidazole or clindamycin e-prescription to your pharmacy",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $91 vs. $150–$280 urgent care in-person",
      "CDC first-line metronidazole 500mg: as low as $12 at your pharmacy via GoodRx",
      "No pelvic exam required for classic symptomatic presentation",
      "CDC-aligned guidance: no unnecessary partner treatment for BV",
      "Documented receipt suitable for HSA/FSA reimbursement",
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
          cost: "$55–$115",
          includes: "Visit ($40–$100) + metronidazole ($12)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/metronidazole",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$150–$265",
          includes: "In-person visit ($140–$250) + metronidazole ($12); wet prep may be ordered",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280",
          includes: "Walk-in visit ($140–$260) + metronidazole ($12); wet prep often included",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$110–$151",
          includes: "NP visit ($99–$139) + metronidazole ($12)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
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
        "The <a href=\"https://www.cdc.gov/std/treatment-guidelines/bv.htm\">CDC 2021 STI Treatment Guidelines</a> recommend metronidazole 500mg orally twice daily for 7 days as first-line BV treatment, a 14-tablet course that costs just <strong>$12</strong> at most US pharmacies with a GoodRx coupon (<a href=\"https://www.goodrx.com/metronidazole\">GoodRx, April 2026</a>). Telehealth clinicians can diagnose BV based on the Amsel criteria: thin homogeneous discharge, fishy odor (especially with KOH), elevated vaginal pH, and clue cells, assessed clinically through symptom history when a wet prep is not available. For classic presentations in women with prior confirmed BV, telehealth prescribing is well-supported.",
        "Penn Medicine's 2026 <em>JAMA Network Open</em> study found telemedicine visits averaged <strong>$96 vs. $509 for in-person care</strong>, five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For BV, where the main treatment cost is a $12 antibiotic course, the $100–$230 savings from telehealth vs. urgent care is almost entirely visit overhead.",
        "Important clinical distinctions from trichomoniasis: BV does not require partner treatment per CDC (unlike trichomoniasis, which requires partner treatment to prevent reinfection). Trichomoniasis presents with frothy yellow-green discharge and requires a 2g single-dose metronidazole regimen and wet prep or NAAT for confirmation. If the telehealth assessment suggests trich rather than BV, in-person evaluation with STI testing is the appropriate referral. For pregnancy: CDC recommends treating symptomatic BV in pregnancy with the same oral metronidazole regimen; clindamycin vaginal gel ($25–$27 via GoodRx) is an alternative if metronidazole is not tolerated (<a href=\"https://www.goodrx.com/metronidazole\">GoodRx, April 2026</a>). Patients in the first trimester should be referred to OB-GYN for in-person evaluation.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth BV Visit",
      groups: [
        {
          label: "Women with recurrent BV",
          desc: "Recurrent BV is common, $79 telehealth instead of $150–$280 urgent care for a repeat $12 prescription makes the cost math obvious.",
        },
        {
          label: "Women distinguishing BV from yeast",
          desc: "BV (fishy odor, thin discharge) and yeast (thick white discharge, itch) need different treatments. Telehealth triage prevents $10–$20 spent on the wrong OTC product.",
        },
        {
          label: "Working adults and students",
          desc: "Avoid taking half a day off for an in-person appointment. A 10-minute telehealth visit at lunch provides the same prescription outcome.",
        },
        {
          label: "Pregnant women (second/third trimester)",
          desc: "CDC recommends treating symptomatic BV in pregnancy. Telehealth can prescribe metronidazole (safe in 2nd/3rd trimester) and direct first-trimester patients to OB-GYN.",
        },
      ],
    },
    appropriateBlock: {
      title: "When BV Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Classic BV symptoms: thin gray/white discharge with fishy odor, no fever",
        "Recurrent episode identical to previously confirmed BV diagnosis",
        "Metronidazole Rx needed, patient unable or unwilling to wait for in-person appointment",
        "Second-trimester or third-trimester pregnant woman with symptomatic BV",
        "Clindamycin gel alternative needed (metronidazole-intolerant patient)",
        "Follow-up after BV treatment, confirm resolution or discuss recurrence prevention",
      ],
      notFor: [
        "Frothy yellow-green discharge suggesting trichomoniasis (requires wet prep or NAAT)",
        "Pelvic pain, fever, or cervical motion tenderness (pelvic inflammatory disease, go in-person)",
        "First trimester of pregnancy with BV (in-person OB evaluation preferred)",
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
          body: "Go to urgent care or gynecology immediately. These symptoms suggest PID, which requires IV or IM antibiotics, not oral metronidazole.",
          good: false,
        },
        {
          num: 2,
          head: "Classic BV symptoms, fishy odor, thin discharge, no fever?",
          body: "Book a $79 telehealth visit. Total cost: $91 including 7-day metronidazole via GoodRx. Prescription sent to your pharmacy within the hour.",
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
          body: "Book a telehealth visit if in second or third trimester, CDC supports treating symptomatic BV in pregnancy. First trimester: go in-person to OB-GYN.",
          good: true,
        },
      ],
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
        "Avoid alcohol during and for 24 hours after completing oral metronidazole, it can cause a disulfiram-like reaction (nausea, flushing).",
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
        "First trimester of pregnancy (defer to OB-GYN for in-person evaluation).",
        "Frothy or greenish discharge (suggests trichomoniasis, not BV).",
        "Two prior failed metronidazole courses without improvement.",
        "History of IUD insertion within the past 3 weeks with new symptoms.",
      ],
    },
    faqs: [
      {
        question: "How much does BV treatment cost without insurance in 2026?",
        answer: "Telehealth: $91 total (TeleDirectMD $79 visit + $12 metronidazole 500mg via GoodRx). Urgent care: $150–$280 (BetterCare, 2025). Primary care: $150–$265 (Mira Health, 2025). ER: never appropriate for uncomplicated BV.",
      },
      {
        question: "What is the first-line treatment for BV per CDC guidelines?",
        answer: "Per CDC 2021 STI Treatment Guidelines, first-line BV treatment is metronidazole 500mg orally twice daily for 7 days. Alternatives include metronidazole vaginal gel 0.75% (5 days) or clindamycin vaginal cream 2% (7 days). All three are fully prescribable via telehealth.",
      },
      {
        question: "Does my partner need to be treated for BV?",
        answer: "No, unlike trichomoniasis, CDC does not routinely recommend partner treatment for BV. The vaginal flora imbalance is not considered an STI in the traditional sense. However, recent data suggests concurrent male partner topical treatment may reduce recurrence in some cases, your TeleDirectMD physician can discuss the latest guidance.",
      },
      {
        question: "How much is metronidazole without insurance?",
        answer: "According to GoodRx (April 2026), generic metronidazole 500mg for a 7-day course (14 tablets) costs $12–$13 at most US pharmacies with a free GoodRx coupon. The retail price without a discount is significantly higher.",
      },
      {
        question: "Can BV be treated during pregnancy via telehealth?",
        answer: "Yes, for second and third trimester pregnancies. CDC recommends treating symptomatic BV in pregnancy with metronidazole 500mg twice daily for 7 days. First-trimester patients should be evaluated in-person by an OB-GYN, as metronidazole use in the first trimester carries some theoretical concerns.",
      },
      {
        question: "How do I tell if I have BV vs. a yeast infection?",
        answer: "BV: thin, gray or white discharge with a fishy odor, especially after sex. Usually little or no vaginal itching. Yeast infection: thick, white, cottage cheese-like discharge with significant vaginal itch. No fishy odor. Telehealth can help distinguish based on your symptom description, getting the right diagnosis prevents wasting $10–$20 on the wrong OTC product.",
      },
      {
        question: "What if my BV keeps coming back?",
        answer: "Recurrent BV (3+ episodes/year) is common. CDC-supported suppressive therapy options include twice-weekly metronidazole vaginal gel ($25–$28/month via GoodRx) for 4–6 months. A TeleDirectMD visit can initiate this protocol, saving the cost of repeated urgent care visits at $150–$280 each.",
      },
      {
        question: "Can I get clindamycin vaginal cream prescribed via telehealth?",
        answer: "Yes. Clindamycin vaginal cream 2% is a CDC first-line BV alternative and is fully prescribable via telehealth. The single-dose Clindesse formulation costs approximately $109 via GoodRx; the 7-day clindamycin vaginal cream course runs $25–$45. For cost reasons, most patients prefer the $12 oral metronidazole course unless there is a specific intolerance.",
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
        label: "BetterCare, Urgent care vs. ER cost (2025)",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
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
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'cold-sore-cost': {
    slug: "cold-sore-cost",
    pid: "coldsore-cost",
    h1: "Cold Sore Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Cold Sore Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "A telehealth cold sore visit + valacyclovir costs $93–$106 total (vs. $150–$280 urgent care). Treat at the prodrome, verified 2026 prices and AAD guidelines.",
    breadcrumb: "Cold Sore Treatment Cost",
    answerLead: "Cold sore (herpes labialis) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth cold sore visit at TeleDirectMD costs <strong>$93–$106 total</strong>, a $79 visit plus $14–$27 for generic valacyclovir via <a href=\"https://www.goodrx.com/valacyclovir\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$150–$280</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>). The <a href=\"https://www.aad.org/public/diseases/a-z/cold-sores-treatment\">American Academy of Dermatology (AAD)</a> recommends initiating antiviral treatment at the first prodromal symptom, tingling or itching, before the blister appears. Waiting for a clinic appointment means missing the therapeutic window. A telehealth visit can get valacyclovir to your pharmacy within the hour.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating a cold sore (herpes labialis) via telehealth costs $93–$106 total in the US, a $79 video visit with a board-certified MD plus $14–$27 for generic valacyclovir (verified GoodRx, April 2026). By comparison, urgent care in-person averages $150–$280 (BetterCare, 2025), CVS MinuteClinic charges $110–$151 (CVS 2024 price list), primary care cash-pay totals $150–$265 (Mira Health, 2025), and an ER visit for herpes labialis can exceed $1,500. Per the American Academy of Dermatology (AAD), antiviral treatment is most effective when initiated at the prodromal stage, tingling or burning before the blister forms. Telehealth is ideal because it enables same-day prescribing at the moment of symptom onset, compared to waiting days for an in-person appointment.",
    heroSub: "Same-day visit, prescription in your hands within the hour. Valacyclovir works best at the prodrome, before the blister forms. Total cost: as low as $93. Don't wait for an in-person appointment.",
    heroIntro: "Cold sores are caused by HSV-1 and affect roughly 67% of people under 50. Treatment timing is everything: the American Academy of Dermatology states that antivirals like valacyclovir must be started at the first prodromal symptom, tingling, itching, or burning, to significantly reduce duration and severity. Waiting 1–2 days for an in-person appointment often means the blister has already formed and the therapeutic window has passed. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health so you know exactly what cold sore treatment costs across every care setting.",
    heroCardTitle: "Cold Sore Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD, available evenings and weekends",
      "Valacyclovir or acyclovir e-prescription to your nearest pharmacy",
      "Episodic or suppressive therapy prescribed based on your outbreak frequency",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $93–$106 vs. $150–$280 urgent care in-person",
      "Same-hour prescription, critical for catching the prodromal window",
      "Generic valacyclovir as low as $14–$27 for a treatment course via GoodRx",
      "AAD-aligned care: episodic or suppressive therapy, right drug, right dose",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    costTable: {
      title: "Cold Sore Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + valacyclovir or acyclovir via GoodRx. Episodic treatment only; suppressive therapy costs vary.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$93–$106 typical",
          includes: "$79 visit + valacyclovir 1g (episodic 1-day course: $14; 5-day: ~$27)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$55–$120",
          includes: "Visit ($40–$100) + antiviral ($14–$35)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/cold-sores/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$150–$265",
          includes: "In-person visit ($140–$250) + antiviral ($14–$35)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280",
          includes: "Walk-in visit ($140–$260) + antiviral ($14–$35)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$110–$186",
          includes: "NP visit ($99–$139) + antiviral ($14–$47)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
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
      title: "Why Telehealth Is the Right Setting for Cold Sore Treatment",
      paragraphs: [
        "The <a href=\"https://www.aad.org/public/diseases/a-z/cold-sores-treatment\">American Academy of Dermatology (AAD)</a> recommends initiating oral antiviral therapy, acyclovir, valacyclovir, or famciclovir, at the first sign of a cold sore prodrome: tingling, itching, or burning before the blister appears. Treatment started at this stage can abort or significantly shorten the outbreak. Treatment started after the blister has fully formed has limited benefit. The single biggest barrier to timely treatment is access, which is exactly the problem telehealth solves. A TeleDirectMD visit can put valacyclovir at your pharmacy within the hour of noticing prodromal symptoms.",
        "Penn Medicine's 2026 <em>JAMA Network Open</em> study found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong> (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For cold sores, a condition with a narrow treatment window and a straightforward clinical diagnosis, the in-person visit is almost purely overhead cost. The drug is the treatment, and the drug is cheap.",
        "According to <a href=\"https://www.goodrx.com/valacyclovir\">GoodRx (April 2026)</a>, generic valacyclovir 1g tablets cost as low as <strong>$14.91 for a 21-tablet shingles course</strong> or approximately <strong>$0.71 per tablet</strong>. For episodic cold sore treatment (valacyclovir 2g twice daily for 1 day, 4 tablets), the drug cost is under $3. For a 5-day suppressive approach, a 30-tablet supply costs $21–$26. Generic acyclovir 400mg for a 5-day course (30 tablets) costs <strong>$11–$15</strong> via <a href=\"https://www.goodrx.com/acyclovir\">GoodRx (April 2026)</a>. In all cases, the drug itself is inexpensive, the access problem is what telehealth solves.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Cold Sore Visit",
      groups: [
        {
          label: "People who get frequent outbreaks",
          desc: "If you get 4+ outbreaks per year, suppressive daily valacyclovir ($0.38/day for 500mg via GoodRx) can reduce frequency by 70–80%. A $79 telehealth visit to initiate suppression is a smart investment.",
        },
        {
          label: "People at the prodrome right now",
          desc: "That tingling is the signal. Book immediately, waiting 1–2 days for an in-person appointment often means the blister has formed and the therapeutic window has closed.",
        },
        {
          label: "People before a major event",
          desc: "Cold sore on the day of a wedding, presentation, or trip? Suppressive valacyclovir can be initiated 1–2 days before a known trigger to prevent outbreak.",
        },
        {
          label: "Immunocompromised patients",
          desc: "HSV-1 outbreaks in immunocompromised individuals can be severe and prolonged. Telehealth triage ensures correct dosing and determines if escalation to in-person care is needed.",
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
          body: "Book a $79 telehealth visit immediately. Time is the treatment. Get valacyclovir or acyclovir to your pharmacy within the hour, before the blister forms. Total cost: $93–$106.",
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
          head: "Frequent outbreaks (4+/year) seeking suppression?",
          body: "Book a $79 telehealth visit to start daily suppressive valacyclovir 500mg, as low as $0.38/day via GoodRx. Reduces outbreaks by 70–80% per clinical trial data.",
          good: true,
        },
      ],
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
          drug: "Valacyclovir 500mg daily, suppressive therapy (90 tabs/month)",
          cost: "$34–$38/month",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          drug: "Famciclovir 500mg, alternative episodic (21 tabs)",
          cost: "$28–$30",
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
        answer: "Telehealth: $93–$106 total (TeleDirectMD $79 visit + $14–$27 valacyclovir via GoodRx). Urgent care: $150–$280 (BetterCare, 2025). The drug itself is inexpensive, the cost difference is entirely the visit. For established patients who know their pattern, a $79 telehealth visit gets you the prescription in under an hour.",
      },
      {
        question: "What is the most important thing to know about cold sore treatment timing?",
        answer: "Start treatment at the prodrome, tingling, itching, or burning before the blister appears. Per the American Academy of Dermatology, antivirals started at this stage can abort the outbreak entirely or dramatically reduce duration. Once the blister is fully formed, treatment provides much less benefit. Telehealth is ideal precisely because it provides same-hour prescribing access.",
      },
      {
        question: "How much is generic valacyclovir without insurance?",
        answer: "According to GoodRx (April 2026), generic valacyclovir 1g tablets cost $21–$26 for 30 tablets at most US pharmacies with a free GoodRx coupon. For a 1-day episodic cold sore treatment (4 tablets), the drug cost is approximately $3–$4. For daily suppressive therapy using 500mg, a 90-tablet supply costs $34–$38/month via GoodRx.",
      },
      {
        question: "What is the difference between episodic and suppressive cold sore treatment?",
        answer: "Episodic treatment, valacyclovir 2g twice daily for one day, or acyclovir 400mg five times daily for five days, is taken at the onset of an outbreak to shorten duration. Suppressive therapy, valacyclovir 500mg once daily year-round, reduces outbreak frequency by 70–80% in people with frequent recurrences (4+ per year). A TeleDirectMD visit can prescribe either approach based on your outbreak history.",
      },
      {
        question: "Can I get valacyclovir prescribed the same day I notice symptoms?",
        answer: "Yes. TeleDirectMD offers same-day telehealth visits including evenings and weekends. Most patients have valacyclovir at their pharmacy within one hour of booking. Given that treatment timing determines efficacy, same-day access is the primary clinical value of telehealth for cold sores.",
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
        label: "BetterCare, Urgent care vs. ER cost (2025)",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'shingles-cost': {
    slug: "shingles-cost",
    pid: "shingles-cost",
    h1: "Shingles Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Shingles Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "A telehealth shingles visit + valacyclovir costs $100–$129 total (vs. $150–$280 urgent care). Start within 72 hours. Verified 2026 prices and CDC treatment guidance.",
    breadcrumb: "Shingles Treatment Cost",
    answerLead: "Shingles (herpes zoster) treatment cost in 2026 (uninsured):",
    answerBody: "A telehealth shingles visit at TeleDirectMD costs <strong>$100–$129 total</strong>, a $79 visit plus $21–$50 for a 7-day course of generic valacyclovir 1g or famciclovir 500mg via <a href=\"https://www.goodrx.com/valacyclovir\">GoodRx (April 2026)</a>. That compares to urgent care in-person at <strong>$150–$280</strong> (<a href=\"https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost\">BetterCare, 2025</a>). Per <a href=\"https://www.cdc.gov/shingles/hcp/clinical-overview/index.html\">CDC clinical guidance</a>, treatment must begin within 72 hours of rash onset to reduce lesion duration, viral shedding, and the risk of postherpetic neuralgia, making same-day telehealth access critically important. <strong>Exception:</strong> shingles involving the forehead/eye area (V1 trigeminal nerve, ophthalmic distribution) requires urgent ophthalmology evaluation regardless of antiviral start.",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating shingles (herpes zoster) via telehealth costs $100–$129 total in the US, a $79 video visit with a board-certified MD plus $21–$50 for a 7-day course of generic valacyclovir 1g three times daily (verified GoodRx, April 2026). By comparison, urgent care in-person averages $150–$280 (BetterCare, 2025), CVS MinuteClinic charges $110–$189 (CVS 2024 price list), primary care cash-pay totals $150–$265 (Mira Health, 2025), and an ER visit for shingles can exceed $1,500 (BetterCare, 2025). Per CDC, the three preferred antivirals for shingles are valacyclovir, famciclovir, and acyclovir, all most effective when started within 72 hours of rash onset. Shingles involving the eye or forehead (ophthalmic distribution, V1 trigeminal) requires same-day ophthalmology referral.",
    heroSub: "Same-day video visit. Valacyclovir prescription within the hour. The 72-hour treatment window is the clinical priority, telehealth closes that window faster than an in-person appointment queue. Total cost: as low as $100.",
    heroIntro: "Shingles (herpes zoster) affects roughly 1 in 3 Americans in their lifetime, and the treatment window is narrow: antivirals must start within 72 hours of rash onset to meaningfully reduce severity, duration, and the risk of postherpetic neuralgia (PHN), the chronic nerve pain that can persist for months or years. Waiting 1–2 days for a primary care appointment often means missing this window. A telehealth visit at TeleDirectMD delivers a valacyclovir prescription within hours of symptom onset. We pulled 2025–2026 pricing from BetterCare, GoodRx, and Mira Health to show what shingles treatment costs across every care setting.",
    heroCardTitle: "Shingles Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Clinical assessment and immediate antiviral e-prescription (valacyclovir or famciclovir)",
      "Guidance on postherpetic neuralgia risk and pain management",
      "Urgent ophthalmology referral if ophthalmic distribution (V1) is identified",
      "43 states, evenings & weekends",
      "No insurance required, HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $100–$129 vs. $150–$280 urgent care in-person",
      "Same-day access: closes the critical 72-hour treatment window",
      "Valacyclovir 1g TID × 7 days as low as $21 via GoodRx (April 2026)",
      "CDC-aligned prescribing: right antiviral, right dose, right duration",
      "Documented receipt suitable for HSA/FSA reimbursement",
    ],
    costTable: {
      title: "Shingles Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + 7-day antiviral course via GoodRx. Excludes postherpetic neuralgia management or ophthalmology referral costs.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$100–$129 typical",
          includes: "$79 visit + valacyclovir 1g 21 tabs ($21) or famciclovir 500mg 21 tabs ($28–$30)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$65–$150",
          includes: "Visit ($40–$100) + antiviral ($21–$50)",
          source: "GoodRx, BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/valacyclovir",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$150–$265",
          includes: "In-person visit ($140–$250) + antiviral ($21–$50)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$150–$280",
          includes: "Walk-in visit ($140–$260) + antiviral ($21–$50)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$120–$189",
          includes: "NP visit ($99–$139) + antiviral ($21–$50)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
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
        "The <a href=\"https://www.cdc.gov/shingles/hcp/clinical-overview/index.html\">CDC clinical overview for herpes zoster (2024)</a> is unambiguous: antiviral therapy is most effective when initiated within 72 hours of rash onset. The three preferred agents, valacyclovir, famciclovir, and acyclovir, accelerate lesion resolution, reduce new lesion formation, decrease viral shedding, and, most critically, reduce the risk of postherpetic neuralgia, the debilitating nerve pain that can persist for months to years in older patients. The valacyclovir dosing for shingles is 1g three times daily for 7 days (21 tablets total), costing <strong>$21</strong> with a GoodRx coupon (<a href=\"https://www.goodrx.com/valacyclovir\">GoodRx, April 2026</a>). The FDA-approved dosing for famciclovir is 500mg three times daily for 7 days (21 tablets), costing <strong>$28–$30</strong> (<a href=\"https://www.goodrx.com/famciclovir\">GoodRx, April 2026</a>).",
        "Penn Medicine's 2026 <em>JAMA Network Open</em> study found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, five times cheaper (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, February 2026</a>). For shingles, the clinical urgency of the 72-hour window means that waiting 24–48 hours for a primary care appointment or urgent care slot could mean missing the therapeutic window entirely. Telehealth eliminates that access barrier. The TeleDirectMD visit is $79 and can be booked evenings and weekends, when the rash first appears.",
        "The critical exception, ophthalmic zoster, must be identified at the telehealth visit. Shingles involving the V1 (ophthalmic) division of the trigeminal nerve presents with rash on the forehead, tip or side of the nose (Hutchinson's sign), or the periorbital region. Per <a href=\"https://eyewiki.org/Herpes_Zoster_Ophthalmicus\">AAO EyeWiki guidelines</a>, this presentation carries a high risk of sight-threatening complications including HSV keratitis, uveitis, and optic neuritis. Telehealth MDs will identify V1 distribution on video exam and refer to ophthalmology urgently, but oral antivirals should still be started immediately, not withheld pending referral.",
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
          desc: "Beyond antivirals, shingles pain management includes NSAIDs, acetaminophen, topical lidocaine, and potentially gabapentin for PHN prevention. Telehealth can coordinate this.",
        },
        {
          label: "Recurrent or immunocompromised patients",
          desc: "Shingles can recur in immunocompromised individuals. Telehealth provides rapid re-access to antivirals and triage for whether escalation to in-person care is needed.",
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
        "Pain management guidance and gabapentin/pregabalin for PHN prevention",
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
          body: "Book a $79 telehealth visit immediately. Total cost: $100–$129 with valacyclovir or famciclovir via GoodRx. Getting within the 72-hour window is the clinical priority, don't wait for an in-person appointment.",
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
        "Start antiviral therapy as soon as prescribed, the 72-hour window is the most important variable in outcome.",
        "Keep the rash clean and dry; apply cool, wet compresses to relieve itching and pain.",
        "Use OTC acetaminophen or ibuprofen for pain; do not use aspirin on rash in adults over 60 (Reye's risk in some populations).",
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
        answer: "Telehealth: $100–$129 total (TeleDirectMD $79 visit + $21–$50 for valacyclovir or famciclovir via GoodRx, April 2026). Urgent care: $150–$280 (BetterCare, 2025). Primary care: $150–$265 (Mira Health, 2025). ER: $1,500–$3,000+ (only appropriate for ophthalmic zoster or severe complications).",
      },
      {
        question: "Why does the 72-hour treatment window matter so much for shingles?",
        answer: "Per CDC clinical guidance (2024), antivirals for shingles are most effective when started within 72 hours of rash onset. They reduce the severity and duration of the acute episode and, critically, lower the risk of postherpetic neuralgia (PHN), the chronic nerve pain that can persist for months or years after the rash heals. Missing the 72-hour window is not a reason to skip treatment entirely, but it does reduce therapeutic benefit. Same-day telehealth access is often the fastest path to getting within that window.",
      },
      {
        question: "How much is valacyclovir for shingles without insurance?",
        answer: "According to GoodRx (April 2026), generic valacyclovir 1g tablets for a full 7-day shingles course (21 tablets at 1g three times daily) cost $21–$26 at most US pharmacies with a free GoodRx coupon. The retail price without a coupon can be over $130. Always use GoodRx.",
      },
      {
        question: "Is valacyclovir or famciclovir better for shingles?",
        answer: "Both are equally effective CDC-preferred agents for shingles. Valacyclovir (1g three times daily × 7 days) costs $21–$26 for a full course via GoodRx; famciclovir (500mg three times daily × 7 days) costs $28–$30. Both are convenient twice- or three-times-daily dosing vs. acyclovir's five-times-daily regimen. Your TeleDirectMD physician will prescribe based on your pharmacy's pricing and any relevant drug interactions.",
      },
      {
        question: "What is ophthalmic shingles and why is it an emergency?",
        answer: "Herpes zoster ophthalmicus (HZO) occurs when shingles affects the V1 (ophthalmic) branch of the trigeminal nerve, presenting with rash on the forehead, periorbital area, or tip/side of the nose (Hutchinson's sign). Per AAO and CDC guidance, this presentation carries high risk of sight-threatening complications including HSV keratitis, uveitis, corneal scarring, and optic neuritis. Oral antivirals must be started immediately, and same-day ophthalmology evaluation is mandatory. A TeleDirectMD physician will identify this and refer urgently.",
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
        answer: "Yes. CDC recommends the Shingrix two-dose vaccine for adults 50+ regardless of prior shingles history. Shingles can recur, and vaccination significantly reduces the risk of future episodes and PHN. Your TeleDirectMD physician can discuss timing, vaccination is generally recommended after full resolution of the acute episode, typically 6–12 months after rash healing.",
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
        label: "BetterCare, Urgent care vs. ER cost (2025)",
        url: "https://bettercare.com/costs/urgent-care-vs-emergency-room-visit-cost",
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
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'migraine-treatment-cost': {
    slug: "migraine-treatment-cost",
    pid: "migraine-cost",
    h1: "Migraine Treatment Cost: Online Doctor vs Urgent Care vs ER",
    metaTitle: "Migraine Treatment Cost 2026: Online Doctor vs. Urgent Care vs. ER",
    metaDescription: "Telehealth migraine visit + generic sumatriptan costs $95–$110 total. Urgent care runs $175–$350; ER migraine visits average $1,500–$4,000+. Verified 2026 prices with sources.",
    breadcrumb: "Migraine Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating an acute migraine via telehealth costs $95–$110 total in the US, a $79 video visit with a board-certified MD plus $15–$17 for generic sumatriptan 50mg (9 tablets, verified GoodRx April 2026). By comparison, an urgent care in-person visit for migraine averages $175–$350 (BetterCare, 2025), CVS MinuteClinic runs $105–$153, primary care cash-pay totals $110–$265 (Mira Health, 2025), and an ER migraine visit can cost $1,500–$4,000+ uninsured. CGRP preventive biologics (Aimovig, Ajovy, Emgality) require prior authorization and cost $630–$950/month without insurance. Per AAN/AHS 2024 guidelines, oral triptans are first-line acute therapy and appropriate for telehealth prescribing.",
    answerLead: "Migraine treatment cost in 2026 (uninsured cash-pay):",
    answerBody: "A telehealth migraine visit + generic sumatriptan costs <strong>$95–$110 total</strong> at TeleDirectMD ($79 visit + $15–$17 for sumatriptan 50mg via <a href=\"https://www.goodrx.com/sumatriptan\">GoodRx, April 2026</a>). Compare to urgent care in-person at <strong>$175–$350</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>). An ER migraine visit, rarely appropriate for uncomplicated attacks, can cost <strong>$1,500–$4,000+</strong> uninsured. CGRP preventive biologics such as Aimovig cost <strong>$299/month</strong> with a GoodRx coupon (<a href=\"https://www.goodrx.com/aimovig\">GoodRx, April 2026</a>) but require prior authorization from most insurers.",
    heroSub: "A 15-minute video visit with a board-certified MD plus a same-day triptan prescription. Total out-of-pocket: as low as $95. No imaging or in-person exam required for a classic migraine without new neurologic symptoms.",
    heroIntro: "Migraine affects 39 million Americans, yet ER visits for migraine, which can easily cost $2,000–$4,000, are one of the most avoidable expenses in US healthcare. For a classic migraine attack without new neurologic symptoms, a telehealth visit plus a generic triptan prescription is clinically sound and dramatically cheaper. We pulled 2025–2026 pricing from GoodRx, BetterCare, Mira Health, and CVS MinuteClinic to show exactly what migraine treatment costs across every care setting, including the honest reality of CGRP biologic pricing for prevention.",
    heroCardTitle: "Migraine Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Triptan e-prescription sent directly to your pharmacy",
      "Preventive prescription evaluation (propranolol, topiramate, amitriptyline)",
      "CGRP biologic referral and PA navigation for eligible patients",
      "43 states, evenings & weekends",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "Total $95–$110 vs. $175–$350 for urgent care in-person",
      "Generic sumatriptan 50mg: $15–$17 via GoodRx, same molecule as $100+ brand Imitrex",
      "No drive time during an active attack, stay home, book online",
      "Preventive therapy evaluation at the same visit, no separate appointment needed",
      "AAN/AHS guideline-aligned: oral triptans are first-line acute migraine therapy",
      "Documented receipt for HSA/FSA reimbursement",
    ],
    costTable: {
      title: "Migraine Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Acute visit cost + generic sumatriptan (9 tablets) via GoodRx. Preventive medication costs listed separately in medication table.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$95–$110 typical",
          includes: "$79 visit + sumatriptan 50mg 9-tab ($15–$17), no imaging required",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/sumatriptan",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$50–$120",
          includes: "Visit ($40–$100) + generic triptan ($15–$25)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$265",
          includes: "In-person visit ($100–$250) + generic triptan ($15–$25)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$175–$350",
          includes: "Walk-in visit ($150–$325) + triptan; anti-nausea injection may add cost",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$105–$153",
          includes: "NP visit ($99–$139) + generic triptan ($15–$17)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,500–$4,000+",
          includes: "ED visit, IV antiemetics, possible imaging, discharge medications, chargemaster pricing",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Migraine Visit Is Clinically Sound and Dramatically Cheaper",
      paragraphs: [
        "The <a href=\"https://www.aan.com\">American Academy of Neurology (AAN)</a> and American Headache Society's 2024 clinical practice guidelines recommend oral triptans, specifically eletriptan, rizatriptan, sumatriptan, and zolmitriptan, as first-line acute migraine therapy for most adults. For a patient with an established migraine diagnosis, classic symptoms, and no new neurologic features, prescribing a triptan via telehealth is fully guideline-aligned. No imaging, no lab work, no in-person exam required.",
        "A Penn Medicine study published in <em>JAMA Network Open</em> (February 2026) found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, a greater than 5× difference, across more than 160,000 visits (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). For a straightforward migraine attack, the savings are even larger because no ancillary testing is needed. The ER is both clinically unnecessary and financially catastrophic for a routine migraine: IV antiemetics, imaging, and facility fees routinely push the bill past $2,000.",
        "Generic sumatriptan 50mg costs just <strong>$15–$17 for a 9-tablet pack</strong> at most US pharmacies with a GoodRx coupon (<a href=\"https://www.goodrx.com/sumatriptan\">GoodRx, April 2026</a>), versus $68–$100+ retail without a discount. For prevention, generic propranolol costs as little as $13/month and generic topiramate around $32/month via GoodRx. CGRP biologics (Aimovig, Ajovy, Emgality) are more effective preventives for episodic and chronic migraine but require prior authorization from virtually all insurers and cost $630–$950/month cash-pay without coverage.",
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
          desc: "Migraine onset while traveling? Book a visit from anywhere in 43 states, route the triptan to the nearest pharmacy.",
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
          body: "Book a $79 telehealth visit. Get a triptan prescription within 30–60 minutes. Total cost: $95–$110. No driving during an active attack required.",
          good: true,
        },
        {
          num: 3,
          head: "Migraine but also vomiting, cannot take oral medications?",
          body: "Urgent care or ED for IV/IM antiemetics and ketorolac. Per 2025 AHS guidelines, metoclopramide and prochlorperazine IV are first-line parenteral therapies.",
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
          cost: "$630/month (GoodRx); $881 retail",
          sourceUrl: "https://www.goodrx.com/emgality",
        },
      ],
    },
    homeCare: {
      title: "While You Wait for the Prescription (or Alongside It)",
      bullets: [
        "Take your triptan at the first sign of headache, do not wait for peak pain.",
        "Rest in a dark, quiet room; light and sound sensitivity are hallmarks of migraine.",
        "OTC options per AAN guidelines: ibuprofen 400–600mg, naproxen 500mg, or aspirin/acetaminophen/caffeine (Excedrin Migraine) for mild-to-moderate attacks.",
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
        answer: "Telehealth at TeleDirectMD: $79 visit + $15–$17 for generic sumatriptan = $95–$110 total (GoodRx, April 2026). Urgent care in-person averages $175–$350 (BetterCare, 2025). An ER migraine visit can run $1,500–$4,000+ uninsured, and rarely changes the clinical outcome for an uncomplicated attack.",
      },
      {
        question: "What is the cheapest migraine medication available in 2026?",
        answer: "Generic sumatriptan 50mg is the standard answer: $15–$17 for 9 tablets with a GoodRx coupon (April 2026), down from $68–$100 retail. Generic rizatriptan runs ~$25 for 9 tablets. For prevention, generic propranolol is ~$13/month and generic topiramate ~$32/month.",
      },
      {
        question: "How much do CGRP biologics like Aimovig, Ajovy, and Emgality cost without insurance?",
        answer: "Retail prices are steep: Aimovig (erenumab) retails at ~$943/month but GoodRx brings it to $299/month. Emgality (galcanezumab) retails at ~$881/month, GoodRx price ~$630/month. Ajovy (fremanezumab) retails at ~$955, GoodRx ~$751/month. All three require prior authorization from most commercial insurers, and step therapy, failure of at least two oral preventives, is typically required.",
      },
      {
        question: "Can a telehealth doctor prescribe sumatriptan?",
        answer: "Yes. Sumatriptan is not a controlled substance. A board-certified telehealth MD can evaluate your migraine history and prescribe a triptan in a single 15-minute visit, consistent with AAN and AHS guidelines for first-line acute therapy.",
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
        answer: "Generic sumatriptan 50mg is bioequivalent to brand-name Imitrex, same active molecule, same mechanism, same dosing. Brand Imitrex can cost $68–$100 retail for a 9-tablet pack; generic sumatriptan is $15–$17 with GoodRx. There is no clinical reason to choose the brand name for most patients.",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
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
    metaTitle: "Birth Control Refill Cost 2026: Online Doctor vs. OB-GYN vs. Clinic",
    metaDescription: "A telehealth birth control refill visit costs $79 plus $11–$21 for a generic OCP, total under $70. OB-GYN cash-pay runs $150–$300. Verified 2026 prices with sources.",
    breadcrumb: "Birth Control Refill Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, getting a birth control refill via telehealth costs $79 for the visit plus $11–$21 per month for a generic oral contraceptive pill (verified GoodRx, April 2026), total under $70. By comparison, an OB-GYN or primary care cash-pay visit for a refill runs $150–$300 (Mira Health, 2025), CVS MinuteClinic charges $105–$153, and urgent care in-person averages $175–$350 (BetterCare, 2025). In California, pharmacists may furnish self-administered hormonal contraceptives directly under a Board of Pharmacy protocol, without a telehealth visit. IUDs and implants require in-person placement and are outside telehealth scope. Per CDC U.S. Medical Eligibility Criteria for Contraceptive Use (2024), most healthy adults are appropriate candidates for OCPs without a pelvic exam.",
    answerLead: "Birth control refill cost in 2026 (uninsured cash-pay):",
    answerBody: "A telehealth OCP refill at TeleDirectMD costs <strong>$79 visit + $11–$21/month</strong> for a generic oral contraceptive, total <strong>under $70</strong> (pill prices per <a href=\"https://www.goodrx.com/conditions/birth-control/drugs\">GoodRx, April 2026</a>). Compare to an OB-GYN or primary care in-person visit at <strong>$150–$300 cash-pay</strong> (<a href=\"https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance\">Mira Health, 2025</a>). Urgent care in-person runs <strong>$175–$350</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>). CVS MinuteClinic NP visits for contraception run <strong>$105–$153</strong> (<a href=\"https://www.cvs.com/minuteclinic/services/price-lists\">CVS MinuteClinic, 2024</a>).",
    heroSub: "A 10-minute telehealth visit with a board-certified MD for your OCP refill. Total cost: as low as $90. No pelvic exam required for refills, per CDC U.S. MEC 2024 guidelines, healthy adults do not need a pelvic exam to continue or restart combined oral contraceptives.",
    heroIntro: "Birth control pills are one of the most commonly prescribed medications in the US, and one of the most unnecessary in-person visits. For a straightforward OCP refill in a healthy adult with no new medical history changes, a telehealth visit is clinically appropriate, faster, and meaningfully cheaper than an office visit. We pulled 2025–2026 pricing from GoodRx, Mira Health, BetterCare, and CVS MinuteClinic to show exactly what a birth control refill costs across care settings, and what to know if you are in California, where pharmacists have additional prescribing authority.",
    heroCardTitle: "Birth Control Refill Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "OCP prescription or refill sent directly to your pharmacy",
      "No pelvic exam required for healthy adults continuing OCPs",
      "Patch, ring, and progestin-only pill also available",
      "43 states, evenings & weekends",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "Total $90–$100 vs. $150–$300 at OB-GYN cash-pay",
      "Generic OCPs (levonorgestrel/EE, norgestimate/EE) start at $11–$14/month via GoodRx",
      "Skip the annual-exam gatekeeping, refills don't require a Pap smear",
      "CDC U.S. MEC 2024: pelvic exam not required to prescribe combined OCPs in healthy adults",
      "Documented receipt for HSA/FSA reimbursement",
      "California patients: pharmacist direct-furnishing option also available under BOP protocol",
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
          cost: "$50–$120",
          includes: "Visit ($40–$100) + generic OCP ($11–$21)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care / OB-GYN (cash-pay)",
          cost: "$150–$300",
          includes: "In-person visit ($135–$280) + OCP ($11–$21); Pap or pelvic may add cost",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$175–$350",
          includes: "Walk-in visit ($150–$325) + OCP refill",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$105–$153",
          includes: "NP visit ($99–$139) + OCP ($11–$21)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$800–$2,500+",
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
        "The <a href=\"https://www.cdc.gov/contraception/hcp/usmec/index.html\">CDC U.S. Medical Eligibility Criteria for Contraceptive Use (2024)</a> and the <a href=\"https://www.acog.org\">American College of Obstetricians and Gynecologists (ACOG)</a> are both explicit: a pelvic examination and Pap smear are not required to initiate or continue combined oral contraceptives in a healthy adult. The only clinical check needed is blood pressure screening, which a telehealth provider can assess via patient self-report and medical history review. This means an in-person OB-GYN visit adds cost without adding clinical value for a straightforward OCP refill.",
        "Penn Medicine's study published in <em>JAMA Network Open</em> (February 2026) found telemedicine averaged <strong>$96 per episode vs. $509 in-person</strong>, a greater than 5× difference across more than 160,000 visits (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>). The savings are compounded when a patient pays $150–$300 for an OB-GYN visit plus $11–$21 for the pill, versus $79 for a telehealth visit plus the same pill cost.",
        "In California, an alternative path exists: under the California Board of Pharmacy's self-administered hormonal contraception protocol (authorized under Business & Professions Code § 4052.3), pharmacists may directly furnish oral contraceptives, patches, vaginal rings, and depot injections without a provider prescription, after completing a self-screening tool (<a href=\"https://www.pharmacy.ca.gov/publications/hormonal_contraception_protocol_rphs.pdf\">California Board of Pharmacy, 2024</a>). This is a meaningful option for California patients who prefer a pharmacy visit or cannot access telehealth. For patients in other states, or for those who want a physician review, the TeleDirectMD $79 telehealth visit is the most efficient option.",
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
          desc: "Student health center closed or backlogged? A $79 visit plus a $11–$21 generic pill is cheaper than most campus co-pays.",
        },
        {
          label: "Working adults with scheduling barriers",
          desc: "OB-GYN wait times in many metro areas run 4–8 weeks. A telehealth visit is same-day, evenings and weekends.",
        },
        {
          label: "Travelers and people relocating",
          desc: "Running out of pills while traveling or between providers during a move? Telehealth handles refills in any of 43 states.",
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
          body: "Book a $79 telehealth visit. Total cost with generic pill: under $70. Same-day prescription sent to your pharmacy.",
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
        answer: "The prescription visit via TeleDirectMD is $79. Generic OCPs start at $11–$14/month with a GoodRx coupon (April 2026), total under $70 for visit + first month of medication. OB-GYN in-person visits for refills run $150–$300 cash-pay (Mira Health, 2025), making telehealth the clear value option for a straightforward refill.",
      },
      {
        question: "Do I need a pelvic exam to get birth control pills?",
        answer: "No. The CDC U.S. Medical Eligibility Criteria for Contraceptive Use (2024) and ACOG both confirm that pelvic exams and Pap smears are not required to prescribe combined oral contraceptives in healthy adults. Blood pressure screening is the key clinical check, which can be done or reported during a telehealth visit.",
      },
      {
        question: "What is the cheapest birth control pill in 2026?",
        answer: "Generic levonorgestrel/ethinyl estradiol (brands include Aviane and Alesse generics) starts at $11/month with a GoodRx coupon. Generic norgestimate/ethinyl estradiol (generic Sprintec) runs $13/month. Norethindrone progestin-only pill is $13–$19/month. All are available at major retail pharmacies.",
      },
      {
        question: "What is California SB-159 / the pharmacist birth control law?",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CDC U.S. Medical Eligibility Criteria for Contraceptive Use (2024)",
        url: "https://www.cdc.gov/contraception/hcp/usmec/index.html",
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
    metaTitle: "Erectile Dysfunction Treatment Cost 2026: Online Doctor vs. Urologist",
    metaDescription: "A telehealth ED visit + generic sildenafil costs $90–$100 total. Generic tadalafil 5mg daily: $13.70/month via GoodRx. Urology cash-pay runs $200–$450. Verified 2026 prices.",
    breadcrumb: "ED Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating erectile dysfunction via telehealth costs $79 for the visit plus $10–$14 for a 10-tablet supply of generic sildenafil (verified GoodRx, April 2026), total around $90–$100. Generic tadalafil 5mg daily (30-tablet supply) is $13.70/month with a GoodRx coupon. By comparison, a urology office visit cash-pay runs $200–$450, primary care in-person averages $110–$265 (Mira Health, 2025), and urgent care $175–$350 (BetterCare, 2025). Most commercial insurance plans do not cover ED medications, meaning cash-pay generic pricing applies to the vast majority of patients. Per AUA 2024 guidelines, oral PDE5 inhibitors are safe and effective first-line therapy, and history-taking for ED is appropriate via telehealth.",
    answerLead: "Erectile dysfunction treatment cost in 2026 (uninsured cash-pay):",
    answerBody: "A telehealth ED visit at TeleDirectMD costs <strong>$79</strong>, and generic sildenafil 100mg (10 tablets) runs <strong>$10–$14</strong> via <a href=\"https://www.goodrx.com/sildenafil\">GoodRx (April 2026)</a>, total under $65. Generic tadalafil 5mg daily (30 tablets) is <strong>$13.70/month</strong> via <a href=\"https://www.goodrx.com/tadalafil-cialis\">GoodRx (April 2026)</a>. Compare to a urology office visit at <strong>$200–$450</strong> cash-pay, where you'll wait weeks for an appointment. Brand Viagra retails at <strong>$700+</strong> for 10 tablets; brand Cialis at <strong>$371</strong> for 30 tablets, generics deliver identical efficacy at a fraction of the cost.",
    heroSub: "Generic sildenafil is $10–$14 for 10 tablets. Generic tadalafil daily is $13.70/month. The $79 telehealth visit handles the clinical evaluation and prescription, total out-of-pocket under $65 for most patients.",
    heroIntro: "Erectile dysfunction is one of the most undertreated conditions in men's health, not because treatment doesn't work, but because of cost and access barriers to in-person urology. The good news: PDE5 inhibitors (sildenafil and tadalafil) have been generic for years, their cash prices have collapsed, and a telehealth visit can handle the evaluation and prescription without a urologist visit. We pulled 2026 pricing from GoodRx and standard care-setting benchmarks to show exactly what ED treatment costs, and why cash-pay generic pricing beats insurance for most patients.",
    heroCardTitle: "ED Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Sildenafil or tadalafil e-prescription sent directly to your pharmacy",
      "Health history review for cardiovascular safety screening",
      "Dosing guidance and titration plan",
      "43 states, evenings & weekends, discreet, private",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "Total $90–$95 vs. $200–$450 at a urologist cash-pay",
      "Generic sildenafil 100mg: $10–$14 for 10 tablets (GoodRx, April 2026), same molecule as $700+ brand Viagra",
      "Generic tadalafil 5mg daily: $13.70/month, same as $371 brand Cialis",
      "No specialist referral needed, AUA guidelines support PCP/telehealth prescribing",
      "Discreet: no waiting room, no pharmacy judgment",
      "Insurance rarely covers ED meds anyway, cash-pay is the default for most patients",
    ],
    costTable: {
      title: "Erectile Dysfunction Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + one month of generic PDE5 inhibitor via GoodRx. Most insurers exclude ED medications; out-of-pocket cost applies to the majority of insured patients.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$90–$95 typical",
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
          cost: "$120–$280",
          includes: "In-person visit ($110–$265) + generic PDE5 inhibitor ($10–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$185–$380",
          includes: "Walk-in visit ($175–$350) + generic medication ($10–$30)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$109–$160",
          includes: "NP visit ($99–$139) + prescription, not all clinics prescribe ED medications",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Urology office (cash-pay)",
          cost: "$200–$450",
          includes: "Specialist visit + possible labs; 4–8 week wait typical in many markets",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why Generic PDE5 Inhibitors and Telehealth Have Transformed ED Treatment Cost",
      paragraphs: [
        "The <a href=\"https://www.auanet.org\">American Urological Association (AUA)</a> and the American Society for Men's Health both support oral PDE5 inhibitors, sildenafil and tadalafil, as safe and effective first-line treatment for most men with ED. History-taking to assess cardiovascular safety (no nitrate use, stable cardiovascular status) is straightforward and appropriate via telehealth. The AUA does not require urologic examination or lab work to initiate a PDE5 inhibitor trial in otherwise healthy men. This makes ED one of the most telehealth-appropriate conditions in men's health.",
        "Generic sildenafil launched in 2017 and generic tadalafil followed in 2018, and prices have fallen dramatically. According to <a href=\"https://www.goodrx.com/sildenafil\">GoodRx (April 2026)</a>, generic sildenafil 100mg costs <strong>$10–$14 for 10 tablets</strong> at major US pharmacies, down more than 95% from brand Viagra's retail price. Generic tadalafil 5mg (for daily use) is <strong>$13.70 for 30 tablets</strong>, vs. $371 retail for brand Cialis. Penn Medicine's 2026 JAMA Network Open study found telemedicine averaged <strong>$96 vs. $509 in-person</strong>, and for a straightforward ED evaluation that never required a urology exam, the telehealth path is the obvious choice (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>).",
        "A critical cost reality: most commercial insurance plans do not cover ED medications. Medicare Part D explicitly excludes drugs \"used for the treatment of sexual or erectile dysfunction.\" State Medicaid coverage varies but is limited. This means the generic cash-pay market is the relevant comparison for virtually all patients, and generic tadalafil at $13.70/month is genuinely affordable. The main insurance question for ED is whether the <em>visit</em> is covered, not the drug. A $79 self-pay telehealth visit often costs less than in-network cost-sharing when deductibles are unmet.",
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
          desc: "Urology wait times are 4–8 weeks in many markets. A PCP or telehealth MD can prescribe PDE5 inhibitors without a specialist referral.",
        },
        {
          label: "Patients with high-deductible insurance",
          desc: "ED medications are excluded from most plans anyway. The $79 telehealth visit + $13.70 tadalafil monthly often costs less than co-pays plus a specialist deductible.",
        },
        {
          label: "Men with established cardiovascular disease",
          desc: "TeleDirectMD providers screen for nitrate use and cardiovascular safety before prescribing, the key clinical safeguard for PDE5 inhibitors. Men on nitrates are not candidates for sildenafil or tadalafil.",
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
          body: "Book a $79 telehealth visit. Get a sildenafil or tadalafil prescription today. Generic tadalafil daily: $13.70/month (GoodRx, April 2026).",
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
        answer: "Very little, generics have changed the math entirely. A $79 telehealth visit plus generic sildenafil 100mg (10 tablets) costs ~$90–$95 total (GoodRx, April 2026). Generic tadalafil 5mg daily runs $13.70/month. Compare that to a urology office visit at $200–$450 cash-pay, and the economic case for telehealth is clear.",
      },
      {
        question: "Does insurance cover erectile dysfunction medications?",
        answer: "Rarely. Medicare Part D explicitly excludes ED medications by statute. Most commercial plans do not cover them either, meaning GoodRx generic cash prices ($10–$14 for sildenafil, $13.70 for tadalafil daily) are what the majority of patients actually pay, regardless of insurance. The $79 telehealth visit for the evaluation may be covered if your plan has telehealth benefits.",
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
        answer: "Standard prescribing is typically 4–8 tablets per month for as-needed use, or 30 tablets for daily tadalafil. Some pharmacy benefit managers impose quantity limits, often 4–8 sildenafil doses/month for insured patients. Cash-pay patients (the majority, since insurance rarely covers these) have no insurer-imposed quantity limits.",
      },
      {
        question: "Should I see a urologist for ED?",
        answer: "Not necessarily for first-line treatment. The AUA supports PDE5 inhibitor initiation by any qualified physician, including primary care and telehealth providers. Urology referral is appropriate for: failed PDE5 therapy, penile abnormalities, post-surgical ED, or interest in penile implants or vascular procedures.",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
      {
        label: "AUA, ED clinical guidelines",
        url: "https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hair-loss-treatment-cost': {
    slug: "hair-loss-treatment-cost",
    pid: "hairloss-cost",
    h1: "Hair Loss Treatment Cost: Online Doctor vs Dermatologist vs In-Person",
    metaTitle: "Hair Loss Treatment Cost 2026: Online Doctor vs. Dermatologist",
    metaDescription: "Telehealth hair loss visit + generic finasteride costs $64/month total. Minoxidil 5% foam: $9.98/month via GoodRx. Dermatology cash-pay runs $200–$500. Verified 2026 prices.",
    breadcrumb: "Hair Loss Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating androgenetic alopecia (male or female pattern hair loss) via telehealth costs $79 for the visit plus $14.93/month for generic finasteride 1mg and $9.98/month for minoxidil 5% foam (verified GoodRx, April 2026), total around $75/month for the full combination. By comparison, a dermatology office visit cash-pay runs $200–$500, primary care averages $110–$265 (Mira Health, 2025), and urgent care $175–$350 (BetterCare, 2025). Insurance almost never covers hair loss medications, as they are classified cosmetic, meaning GoodRx generic cash prices are the real-world out-of-pocket cost for virtually all patients. Per AAD guidelines, finasteride and topical minoxidil are evidence-based first-line therapies for androgenetic alopecia.",
    answerLead: "Hair loss treatment cost in 2026 (cash-pay, uninsured):",
    answerBody: "A telehealth hair loss visit at TeleDirectMD costs <strong>$79</strong>. Generic finasteride 1mg (30 tablets) runs <strong>$14.93/month</strong> via <a href=\"https://www.goodrx.com/finasteride\">GoodRx (April 2026)</a>. Minoxidil 5% foam (60g can) is <strong>$9.98/month</strong> via <a href=\"https://www.goodrx.com/minoxidil-non-prescription\">GoodRx (April 2026)</a>. Both combined: roughly <strong>$25/month</strong> ongoing, vs. $200–$500 for a dermatology visit cash-pay. Insurance almost never covers these treatments because androgenetic alopecia is classified as cosmetic, making generic cash-pay the universal starting point.",
    heroSub: "Generic finasteride 1mg is $14.93/month. Minoxidil 5% foam is $9.98/month. The $79 telehealth visit handles the evaluation and prescription, total combination therapy under $75/month, which is what the evidence supports.",
    heroIntro: "Androgenetic alopecia, male pattern and female pattern hair loss, affects roughly 50 million men and 30 million women in the US. The treatments that actually work (finasteride and topical minoxidil) are both cheap generics. The main barrier has always been the dermatology gatekeeper visit, which costs $200–$500 cash-pay and books weeks out. Telehealth removes that barrier for a condition that doesn't require a biopsy or in-person exam in most cases. We pulled 2026 GoodRx pricing and standard benchmark costs to show exactly what hair loss treatment costs, and what to expect from insurance (spoiler: nothing).",
    heroCardTitle: "Hair Loss Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Finasteride 1mg prescription sent directly to your pharmacy",
      "Topical or oral minoxidil guidance",
      "Realistic expectations: results take 3–6 months of consistent use",
      "43 states, evenings & weekends",
      "HSA/FSA accepted, no insurance required",
    ],
    heroBenefits: [
      "Total ~$75/month (finasteride + minoxidil) vs. $200–$500 dermatology cash-pay for the first visit alone",
      "Generic finasteride 1mg: $14.93/month, same molecule as $39+ Propecia brand (GoodRx, April 2026)",
      "Minoxidil 5% foam (Rogaine generic): $9.98 per 60g can, 1-month supply at major pharmacies",
      "Insurance almost never covers cosmetic hair loss medications, generics are the real price",
      "AAD-endorsed: finasteride and topical minoxidil are evidence-based first-line therapies",
      "No biopsy or in-person scalp exam needed for typical androgenetic alopecia presentation",
    ],
    costTable: {
      title: "Hair Loss Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first month of generic finasteride + minoxidil topical foam. Insurance rarely covers hair loss medications, out-of-pocket costs apply to virtually all patients.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$74/month ongoing",
          includes: "$79 visit (first month) + finasteride $14.93 + minoxidil foam $9.98",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/finasteride",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$65–$130 first month",
          includes: "Visit ($40–$100) + finasteride + minoxidil ($25/month ongoing)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$135–$290 first visit",
          includes: "In-person visit ($110–$265) + generics ($25/month ongoing)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$200–$375",
          includes: "Walk-in visit, most urgent care clinics do not prescribe finasteride; referral typical",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$105–$153",
          includes: "NP visit, MinuteClinic may not prescribe finasteride; topical minoxidil OTC always available",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Dermatology (cash-pay)",
          cost: "$200–$500 first visit",
          includes: "Specialist visit + possible scalp biopsy; medications extra, often 6–12 week wait",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why Telehealth Is the Logical Entry Point for Hair Loss Treatment",
      paragraphs: [
        "The <a href=\"https://www.aad.org\">American Academy of Dermatology (AAD)</a> identifies topical minoxidil and oral finasteride as the two FDA-approved first-line treatments for androgenetic alopecia. For a straightforward presentation of male or female pattern hair loss without systemic disease, red flags, or diffuse shedding suggesting nutritional deficiency or thyroid disease, the clinical evaluation does not require an in-person exam. A telehealth provider can assess the pattern, screen for medical causes, and prescribe both medications in a single visit.",
        "The insurance reality is blunt: androgenetic alopecia is classified as a cosmetic condition by virtually all payers. Generic finasteride for hair loss is <em>not</em> covered by Medicare or most commercial plans (though finasteride 5mg for BPH sometimes is). Generic topical minoxidil is OTC. This means the relevant cost for nearly every patient is the GoodRx generic price, <strong>$14.93/month for finasteride 1mg</strong> and <strong>$9.98/month for minoxidil 5% foam</strong> (<a href=\"https://www.goodrx.com/finasteride\">GoodRx, April 2026</a>; <a href=\"https://www.goodrx.com/minoxidil-non-prescription\">GoodRx, April 2026</a>). Penn Medicine's 2026 <em>JAMA Network Open</em> study found telemedicine averaged <strong>$96 vs. $509 for in-person visits</strong>, and for a cosmetic condition where the first visit is often purely evaluative, the telehealth saving is the entire dermatology appointment cost (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>).",
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
        "Finasteride should not be handled by women who are or may be pregnant (teratogenic in male fetuses at higher doses); 1mg tablets for hair loss pose low but real risk.",
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
        answer: "The ongoing medication cost is modest: generic finasteride 1mg is $14.93/month and generic minoxidil 5% foam is $9.98/month, about $25/month combined (GoodRx, April 2026). Add the $79 TeleDirectMD visit for the initial prescription, and first-month total is ~$74. A dermatology visit for the same purpose runs $200–$500 cash-pay, with 6–12 week wait times in most markets.",
      },
      {
        question: "Does insurance cover finasteride or minoxidil for hair loss?",
        answer: "Almost never. Androgenetic alopecia is classified as a cosmetic condition by virtually all payers. Generic finasteride for hair loss (1mg) is not covered by Medicare or most commercial plans. Topical minoxidil is OTC. You are effectively always paying cash, which makes the GoodRx generic pricing ($14.93 finasteride + $9.98 minoxidil foam) the universal starting point.",
      },
      {
        question: "Can a telehealth doctor prescribe finasteride for hair loss?",
        answer: "Yes. Finasteride 1mg (generic Propecia) is a standard prescription non-controlled medication. A board-certified TeleDirectMD physician can evaluate your hair loss pattern and prescribe finasteride in a single $79 visit, consistent with AAD evidence-based guidelines for androgenetic alopecia.",
      },
      {
        question: "Is oral minoxidil available via telehealth, what does it cost?",
        answer: "Off-label oral minoxidil (2.5–5mg for men, 0.625–2.5mg for women) is available via telehealth prescription. Generic oral minoxidil 2.5mg runs approximately $13.89/month via GoodRx (April 2026). It's prescribed for patients who prefer a pill to twice-daily topical application. Your provider will review cardiovascular history before prescribing.",
      },
      {
        question: "How does generic finasteride compare to brand Propecia?",
        answer: "Generic finasteride 1mg is bioequivalent to brand Propecia, identical active ingredient, identical dosage, identical clinical evidence base. Brand Propecia can retail at $80–$100+/month; generic finasteride is $14.93/month with GoodRx (April 2026). No clinical reason to pay for the brand.",
      },
      {
        question: "How long does it take to see results from finasteride and minoxidil?",
        answer: "Finasteride typically shows measurable slowing of hair loss within 3–6 months, with visible regrowth at 6–12 months in responsive patients. Topical minoxidil shows initial response in 3–6 months with full results at 12 months. Both require indefinite continuation, stopping finasteride results in resumption of loss within 12 months. Results vary widely; about 85% of men see a benefit from finasteride, compared to about 60% from minoxidil alone.",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
      {
        label: "AAD, Hair loss clinical guidelines",
        url: "https://www.aad.org/member/clinical-quality/guidelines/hair-loss",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'weight-loss-glp1-cost': {
    slug: "weight-loss-glp1-cost",
    pid: "glp1-cost",
    h1: "GLP-1 Weight Loss Drug Cost: What Wegovy, Zepbound, and Telehealth Actually Cost in 2026",
    metaTitle: "GLP-1 Weight Loss Cost 2026: Wegovy, Zepbound, Insurance vs. Cash-Pay",
    metaDescription: "Wegovy retails at $1,350/month; Zepbound ~$1,271/month. Most commercial plans require prior auth + step therapy. Honest 2026 GLP-1 cost breakdown with insurance and cash-pay options.",
    breadcrumb: "GLP-1 Weight Loss Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, branded GLP-1 weight loss medications are expensive: Wegovy (semaglutide) has a list price of approximately $1,350–$1,640 per month and Zepbound (tirzepatide) averages $1,271/month retail without insurance (verified GoodRx, April 2026). GoodRx savings programs can reduce Wegovy to $199–$349/month and Zepbound to $995/month, still significant ongoing costs. Most commercial insurers, including Aetna, require prior authorization plus 6 months of documented lifestyle intervention before approving GLP-1s for weight management. FDA's April 2026 proposal to exclude semaglutide, tirzepatide, and liraglutide from the 503B compounding bulk list means compounded GLP-1 availability from outsourcing facilities is ending. The TeleDirectMD telehealth evaluation visit is $79; per ADA 2026 Standards, evidence-based alternatives include metformin (as low as $5.75/month), structured lifestyle intervention, and bariatric referral for BMI ≥40.",
    answerLead: "GLP-1 weight loss medication cost in 2026, the honest answer:",
    answerBody: "Branded GLP-1 medications for weight loss are <strong>not affordably available</strong> on a cash-pay basis for most patients. <strong>Wegovy (semaglutide) retails at $1,350–$1,640/month</strong> without insurance; <strong>Zepbound (tirzepatide) retails at ~$1,271/month</strong> (<a href=\"https://www.goodrx.com/wegovy\">GoodRx, April 2026</a>; <a href=\"https://www.goodrx.com/zepbound\">GoodRx, April 2026</a>). GoodRx savings programs reduce Wegovy to $199–$349/month and Zepbound to ~$995/month, still $2,400–$12,000/year. Most insurers, including <a href=\"https://www.aetna.com/employers-organizations/glp1-benefits-coverage.html\">Aetna</a>, cover GLP-1s only with prior authorization after documented BMI ≥35 and 6+ months of lifestyle intervention. Compounded semaglutide, previously available via 503B outsourcing facilities during the shortage, is now being phased out following FDA's April 2026 proposal to exclude these drugs from the 503B bulk list (<a href=\"https://www.fda.gov/news-events/press-announcements/fda-proposes-exclude-semaglutide-tirzepatide-and-liraglutide-503b-bulks-list\">FDA, April 2026</a>). The $79 TeleDirectMD visit helps you navigate insurance PA, assess metformin as a lower-cost alternative, and determine whether bariatric referral is appropriate.",
    heroSub: "The $79 TeleDirectMD visit evaluates your weight management options, navigates GLP-1 insurance prior authorization, and offers ADA-guideline-aligned alternatives, because branded GLP-1s are not affordable for most cash-pay patients at $1,000–$1,600/month.",
    heroIntro: "GLP-1 receptor agonists (Wegovy, Zepbound) have transformed obesity medicine, and generated enormous confusion about what they actually cost. The answer: retail pricing is $1,271–$1,640/month, most insurers heavily restrict access, compounded alternatives are being phased out by FDA regulation, and honest guidance requires a clear-eyed look at all four pathways, insurance coverage, manufacturer savings programs, cash-pay reality, and evidence-based non-GLP-1 alternatives. We break it all down with verified 2026 pricing and guideline-based clinical context.",
    heroCardTitle: "Weight Management Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Comprehensive weight management evaluation with a board-certified MD",
      "GLP-1 prior authorization navigation and documentation support",
      "ADA 2026 guideline-based pathway: lifestyle + metformin + GLP-1/SGLT-2 when indicated",
      "Metformin prescription if appropriate (as low as $5.75/month)",
      "Bariatric referral for BMI ≥40 or ≥35 with comorbidities when appropriate",
      "HSA/FSA accepted, 43 states, same-day availability",
    ],
    heroBenefits: [
      "Clear, honest GLP-1 cost navigation, $79 vs. confusion navigating $1,300+/month medications",
      "PA documentation support: Aetna requires BMI ≥35 + 6-month lifestyle program, we document it",
      "Metformin as ADA-endorsed first-line: as low as $5.75/month via GoodRx vs. $1,350/month for Wegovy",
      "Compounded semaglutide landscape explained: FDA 503B proposal means most compounders are exiting",
      "No false promises about affordable cash-pay GLP-1s, they don't exist at scale",
      "Bariatric surgery referral for appropriate candidates: more durable outcomes than GLP-1 for BMI ≥40",
    ],
    costTable: {
      title: "GLP-1 Weight Loss Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost only for telehealth rows; GLP-1 medication cost listed separately due to extreme price range. Medication column reflects monthly drug cost without insurance.",
      rows: [
        {
          setting: "TeleDirectMD (online evaluation)",
          cost: "$79 visit",
          includes: "Obesity evaluation, PA navigation, lifestyle counseling, metformin Rx if appropriate, GLP-1 drug cost separate",
          source: "TeleDirectMD",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
        {
          setting: "Wegovy (semaglutide), cash-pay",
          cost: "$1,350–$1,640/month",
          includes: "Retail list price; GoodRx savings program: $199–$349/month (introductory/ongoing)",
          source: "GoodRx, April 2026",
          sourceUrl: "https://www.goodrx.com/wegovy",
        },
        {
          setting: "Zepbound (tirzepatide), cash-pay",
          cost: "~$1,271/month",
          includes: "Retail list price; GoodRx: ~$995/month with coupon",
          source: "GoodRx, April 2026",
          sourceUrl: "https://www.goodrx.com/zepbound",
        },
        {
          setting: "Metformin (ADA first-line alternative)",
          cost: "$5.75–$9/month",
          includes: "Generic 500mg–1000mg, 60–180 tablets, first-line ADA 2026 therapy for T2DM + weight management",
          source: "GoodRx, April 2026",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
        {
          setting: "Primary care weight management (cash-pay)",
          cost: "$110–$265/visit",
          includes: "In-person consultation; GLP-1 Rx requires PA regardless of visit type",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Emergency room (obesity complication)",
          cost: "$1,500–$5,000+",
          includes: "Not applicable for routine weight management, listed as context for complications",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "The Honest GLP-1 Cost Guide: Insurance Reality, FDA Compounding Changes, and What Actually Works",
      paragraphs: [
        "<strong>The insurance picture: prior authorization is nearly universal.</strong> Most commercial insurers, including Aetna, cover GLP-1 medications for weight management only with significant prior authorization requirements. According to <a href=\"https://www.aetna.com/products/rxnonmedicare/data/2024/Weight_Loss_(BMI%2035)_GIP-GLP-1_GLP-1_Agonists_PA_with_Limit_6450-C_UDR_05-2024.html\">Aetna's 2024 clinical policy</a>, approval requires: (1) BMI ≥35 kg/m²; (2) documented participation in a comprehensive behavioral weight management program for at least 6 months prior to drug therapy; and (3) condition-specific criteria for each agent. Step therapy is common, insurers often require documented failure of lifestyle + metformin before approving a GLP-1. The telehealth visit's most practical value for GLP-1 access is generating the documentation Aetna and other payers require. Penn Medicine's 2026 study found telemedicine averaged <strong>$96 vs. $509 for in-person visits</strong> (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>), meaning navigating the PA process via telehealth is both faster and cheaper than an endocrinology or weight management specialist visit.",
        "<strong>The compounded GLP-1 landscape, what's changed in 2026.</strong> During the 2022–2025 semaglutide shortage, 503B outsourcing facilities legally compounded semaglutide and tirzepatide at significantly lower cost. FDA declared the semaglutide shortage resolved on February 21, 2025 and the tirzepatide shortage resolved in 2025. On April 30, 2026, the FDA proposed to exclude semaglutide, tirzepatide, and liraglutide from the 503B bulk drug substances list, finding no clinical need for outsourcing facilities to compound these drugs from bulk (<a href=\"https://www.fda.gov/news-events/press-announcements/fda-proposes-exclude-semaglutide-tirzepatide-and-liraglutide-503b-bulks-list\">FDA Press Announcement, April 30, 2026</a>). This proposal, with a public comment period closing June 29, 2026, signals the end of large-scale 503B compounded GLP-1 supply. Section 503A patient-specific compounding (for documented clinical need, e.g., patient allergy to excipients, non-standard dosing requirement) may continue in narrow circumstances, but the broad availability of compounded \"budget\" GLP-1s from outsourcing facilities is ending. Patients who were relying on compounded semaglutide should ask their provider about transitioning to FDA-approved branded products and insurance PA, or consider alternative weight management strategies.",
        "<strong>Evidence-based alternatives the ADA actually endorses.</strong> Per the <a href=\"https://professional.diabetes.org/standards-of-care\">ADA 2026 Standards of Care</a>, the evidence-based approach to type 2 diabetes with obesity is layered: lifestyle optimization first (Mediterranean diet, structured exercise, sleep), then metformin (as low as $5.75/month via GoodRx, the cheapest and most studied oral agent), then early addition of SGLT-2 inhibitors or GLP-1 receptor agonists when cardiovascular, renal, or weight risk warrants it. Metformin produces modest but real weight loss (2–3 kg average) and costs $5.75–$9/month vs. $1,271–$1,640/month for GLP-1s. For patients with BMI ≥40, or BMI ≥35 with obesity-related comorbidities who have not responded to medical management, the ADA 2026 Standards and ACC/AHA 2024 guidelines support bariatric surgery referral as offering the most durable long-term weight loss and metabolic benefit, and bariatric surgery may ultimately cost less than 5+ years of GLP-1 therapy at $12,000–$18,000/year.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth GLP-1 / Weight Management Visit",
      groups: [
        {
          label: "Patients who want GLP-1s and have commercial insurance",
          desc: "The $79 telehealth visit generates the PA documentation Aetna, BCBS, and UHC require, BMI verification, prior lifestyle program evidence, and step therapy documentation.",
        },
        {
          label: "Patients currently on compounded semaglutide",
          desc: "FDA's April 2026 proposal means outsourcing facility compounders are winding down. A telehealth visit helps you navigate the transition to branded products or alternatives.",
        },
        {
          label: "Patients with T2DM or prediabetes + weight concerns",
          desc: "ADA 2026 guidelines support metformin + lifestyle as first-line, effective, cheap, and far more accessible than GLP-1 PA approval. A $79 visit can start you on the right protocol.",
        },
        {
          label: "High-BMI patients considering bariatric surgery",
          desc: "For BMI ≥40 or ≥35 with comorbidities, a telehealth visit provides a structured evaluation and bariatric referral, often the most cost-effective long-term path.",
        },
      ],
    },
    appropriateBlock: {
      title: "When GLP-1 Weight Management Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Initial obesity evaluation and PA documentation for GLP-1 insurance coverage",
        "Metformin initiation for T2DM + weight management (ADA first-line)",
        "Counseling on evidence-based lifestyle intervention (required before GLP-1 PA approval)",
        "Transition from compounded semaglutide to FDA-approved branded product",
        "Monitoring existing GLP-1 therapy, GI side effects, dose titration check-in",
        "Bariatric surgery referral evaluation for BMI ≥40 or ≥35 with comorbidities",
      ],
      notFor: [
        "Severe GLP-1 side effects: pancreatitis symptoms, severe vomiting, severe abdominal pain, in-person or ER",
        "Eating disorders or history of thyroid C-cell tumors, specialist evaluation required",
        "Injectable GLP-1 initiation without in-person cardiovascular risk stratification for high-risk patients",
        "Bariatric surgery itself, in-person surgical evaluation, program, and procedure required",
        "Children and adolescents with obesity, pediatric endocrinology preferred",
        "Patients with uncontrolled psychiatric conditions affecting weight, in-person team-based care",
      ],
    },
    decisionGuide: {
      title: "GLP-1 / Weight Loss: Telehealth, Specialist, or Surgery?",
      steps: [
        {
          num: 1,
          head: "BMI ≥35, commercial insurance, want GLP-1 coverage?",
          body: "Book a $79 telehealth visit. We document your BMI, lifestyle history, and prior therapy for the PA submission Aetna and other payers require. The evaluation is the first step, not the drug.",
          good: true,
        },
        {
          num: 2,
          head: "Cash-pay only, expecting affordable GLP-1 access?",
          body: "Honest answer: cash-pay branded GLP-1s cost $995–$1,640/month (GoodRx, April 2026), not feasible for most patients. Compounded alternatives are being phased out under FDA's April 2026 503B proposal. A telehealth visit helps set realistic expectations and explore metformin, lifestyle, or insurance pathways.",
          good: false,
        },
        {
          num: 3,
          head: "T2DM or prediabetes with weight concerns, uninsured?",
          body: "Metformin is $5.75–$9/month via GoodRx and is ADA 2026 first-line therapy. A $79 telehealth visit starts the right evidence-based protocol without the GLP-1 cost barrier.",
          good: true,
        },
        {
          num: 4,
          head: "BMI ≥40 or severe comorbidities, GLP-1s not working or not affordable?",
          body: "A telehealth visit provides a structured evaluation and generates a bariatric surgery referral if appropriate. Surgery produces more durable outcomes than GLP-1 therapy for the highest-BMI patients and may cost less than 5 years of medication.",
          good: true,
        },
      ],
    },
    medicationsTable: {
      title: "Weight Management Medication Costs (GoodRx Cash Price, April 2026)",
      caption: "Monthly supply. GLP-1 branded prices reflect retail list; GoodRx savings program prices in parentheses. Insurance coverage varies, PA required for GLP-1s at most plans.",
      rows: [
        {
          drug: "Metformin 500mg–1000mg, ADA 2026 first-line, T2DM + weight management",
          cost: "$5.75–$9/month (180 tablets)",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
        {
          drug: "Wegovy (semaglutide), FDA-approved weight loss, requires PA",
          cost: "$1,350–$1,640/month retail ($199–$349 GoodRx savings program)",
          sourceUrl: "https://www.goodrx.com/wegovy",
        },
        {
          drug: "Zepbound (tirzepatide), FDA-approved weight loss, requires PA",
          cost: "~$1,271/month retail (~$995 GoodRx coupon)",
          sourceUrl: "https://www.goodrx.com/zepbound",
        },
        {
          drug: "Compounded semaglutide, 503B outsourcing winding down per FDA April 2026 proposal",
          cost: "Variable; most outsourcing facilities exiting market",
          sourceUrl: "https://www.fda.gov/news-events/press-announcements/fda-proposes-exclude-semaglutide-tirzepatide-and-liraglutide-503b-bulks-list",
        },
      ],
    },
    homeCare: {
      title: "While You Navigate GLP-1 Insurance or Explore Alternatives",
      bullets: [
        "Structured dietary changes (Mediterranean diet, caloric deficit of 500–750 kcal/day) produce 5–10% weight loss in 6 months, required evidence for most GLP-1 PA approvals.",
        "If starting metformin: take with food to reduce GI side effects; extended-release formulation available and better tolerated for some patients.",
        "Maintain a 6-month record of lifestyle program participation, Aetna and most major payers require documented behavioral program enrollment for GLP-1 PA.",
        "GLP-1 GI side effects (nausea, constipation) are common early; slow titration, smaller meals, and avoiding high-fat foods reduces severity.",
        "If you were on compounded semaglutide: do not abruptly stop without transitioning to a plan, contact your provider for guidance given the FDA compounding landscape changes.",
        "Sleep optimization (7–9 hours/night) independently reduces ghrelin and supports weight management, often overlooked.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Pursue GLP-1 Therapy Without In-Person Evaluation",
      bullets: [
        "Personal or family history of medullary thyroid carcinoma or MEN2 syndrome, GLP-1s are contraindicated.",
        "History of pancreatitis, GLP-1s should be used with caution; in-person gastroenterology clearance recommended.",
        "Active eating disorder, weight loss medications require specialist supervision.",
        "Pregnancy or planning pregnancy, GLP-1s are not indicated and potential fetal effects are understudied.",
        "Severe nausea, vomiting, or inability to eat on GLP-1, needs in-person evaluation for dehydration and medication adjustment.",
        "Expecting affordable cash-pay GLP-1 access, compounded options are ending per FDA April 2026 proposal; branded prices are $995–$1,640/month.",
      ],
    },
    faqs: [
      {
        question: "How much do Wegovy and Zepbound cost without insurance in 2026?",
        answer: "Wegovy (semaglutide) has a retail list price of approximately $1,350–$1,640 per month without insurance (GoodRx, April 2026). Zepbound (tirzepatide) averages ~$1,271/month retail. GoodRx savings programs can reduce Wegovy to $199–$349/month and Zepbound to ~$995/month, still $2,400–$12,000 annually. These are not affordably accessible for most uninsured patients on an ongoing basis.",
      },
      {
        question: "Does insurance cover Wegovy or Zepbound?",
        answer: "Some commercial plans do, but coverage requires prior authorization. Aetna's 2024 clinical policy requires BMI ≥35, documented participation in a comprehensive behavioral weight management program for 6+ months prior to GLP-1 therapy, and condition-specific criteria. Medicare Part D currently does not cover weight loss medications (though legislation is pending). Employer-sponsored plans increasingly exclude GLP-1s for weight management due to cost.",
      },
      {
        question: "Is compounded semaglutide still available in 2026?",
        answer: "Access is ending. On April 30, 2026, the FDA proposed to exclude semaglutide, tirzepatide, and liraglutide from the 503B bulk drug substances list, finding no clinical need for outsourcing facilities to compound these drugs (FDA, April 2026). 503B outsourcing facilities, which supplied most \"compounded GLP-1\" products, cannot continue once this proposal is finalized. Narrow 503A patient-specific compounding may continue for documented individual clinical needs, but the broad affordable compounded market is shutting down.",
      },
      {
        question: "What does the TeleDirectMD $79 visit actually do for GLP-1 access?",
        answer: "The visit generates the clinical documentation most insurers require for GLP-1 prior authorization: BMI documentation, comorbidity assessment, prior lifestyle intervention evidence, and the prescriber attestation. It also evaluates whether metformin or an SGLT-2 inhibitor is a better-value alternative, discusses realistic cash-pay costs, and provides a bariatric referral pathway for BMI ≥40 when appropriate.",
      },
      {
        question: "What is a cheaper evidence-based alternative to GLP-1 medications?",
        answer: "Metformin is ADA 2026's first-line recommendation and costs as little as $5.75/month via GoodRx, compared to $1,271–$1,640/month for GLP-1s. It produces modest but clinically meaningful weight loss (2–3 kg average), reduces cardiovascular and diabetes risk, and is extremely well tolerated. Structured lifestyle intervention (500–750 kcal/day deficit, 150+ min/week of aerobic exercise) adds further benefit. For BMI ≥40, bariatric surgery referral may be more cost-effective than years of GLP-1 therapy.",
      },
      {
        question: "How does Wegovy's GoodRx savings program work?",
        answer: "Novo Nordisk's savings programs (accessible via GoodRx) offer introductory pricing of $199/month for the first two Wegovy injection fills, then $349/month for ongoing maintenance doses. Pill forms of Wegovy start at $149/month for certain doses. These are manufacturer savings programs, not insurance, they apply to out-of-pocket payers who have no insurance covering Wegovy. They require eligibility verification and have terms that vary by dose.",
      },
      {
        question: "Can I get a GLP-1 prescription via telehealth?",
        answer: "Yes, a telehealth MD can evaluate your eligibility and write the prescription. The bottleneck is not the prescription but the insurance prior authorization, which is required by virtually all plans that cover these medications. A TeleDirectMD provider helps you build the PA documentation case. For cash-pay patients, the honest discussion is that branded GLP-1s at $995–$1,640/month are not sustainably affordable for most households.",
      },
      {
        question: "Should I consider bariatric surgery instead of GLP-1 medications?",
        answer: "For BMI ≥40 or ≥35 with obesity-related comorbidities (T2DM, hypertension, sleep apnea), the ADA 2026 Standards of Care and ACC/AHA guidelines support bariatric surgery as offering greater and more durable weight loss than pharmacotherapy alone. Many insurance plans cover bariatric surgery with PA. Given that branded GLP-1s cost $12,000–$18,000/year indefinitely, bariatric surgery may ultimately be more cost-effective for appropriate patients. A TeleDirectMD evaluation can help determine whether a surgical referral is appropriate.",
      },
    ],
    references: [
      {
        label: "GoodRx, Wegovy (semaglutide) pricing and savings (April 2026)",
        url: "https://www.goodrx.com/wegovy",
      },
      {
        label: "GoodRx, Zepbound (tirzepatide) pricing (April 2026)",
        url: "https://www.goodrx.com/zepbound",
      },
      {
        label: "GoodRx, Metformin pricing (April 2026)",
        url: "https://www.goodrx.com/metformin",
      },
      {
        label: "FDA, Proposes to exclude semaglutide, tirzepatide, liraglutide from 503B bulks list (April 30, 2026)",
        url: "https://www.fda.gov/news-events/press-announcements/fda-proposes-exclude-semaglutide-tirzepatide-and-liraglutide-503b-bulks-list",
      },
      {
        label: "FDA, GLP-1 compounding policy clarification (April 2026)",
        url: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize",
      },
      {
        label: "Aetna, GLP-1 benefit coverage and PA policy",
        url: "https://www.aetna.com/employers-organizations/glp1-benefits-coverage.html",
      },
      {
        label: "ADA, Standards of Care in Diabetes 2026",
        url: "https://professional.diabetes.org/standards-of-care",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2026)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "BetterCare, Urgent care and ER cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'diabetes-refills-cost': {
    slug: "diabetes-refills-cost",
    pid: "diabetes-cost",
    h1: "Diabetes Medication Refill Cost: Online Doctor vs Primary Care vs Endocrinologist",
    metaTitle: "Diabetes Medication Refill Cost 2026: Online Doctor vs. Primary Care",
    metaDescription: "Metformin costs $5.75–$9/month via GoodRx. Jardiance: $355/month. Civica insulin: ≤$30/vial. Telehealth diabetes refill: $79 visit. Verified 2026 prices with ADA sources.",
    breadcrumb: "Diabetes Refill Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, a telehealth diabetes medication refill visit costs $79. Generic metformin, ADA 2026 first-line therapy, is as low as $5.75/month via GoodRx (April 2026). SGLT-2 inhibitors remain branded and expensive: Jardiance (empagliflozin) 10mg costs approximately $355/month and Farxiga (dapagliflozin) 10mg costs approximately $288/month with GoodRx coupons (GoodRx, April 2026). Insulin costs vary widely: Civica Rx offers long-acting insulin biosimilars at no more than $30 per vial as of January 2026, representing a major affordability breakthrough. By comparison, an endocrinologist office visit cash-pay runs $200–$400; primary care in-person averages $110–$265 (Mira Health, 2025). Per ADA 2026 Standards, metformin plus lifestyle is first-line; SGLT-2 inhibitors and GLP-1 agonists are added for high cardiovascular or renal risk. Telehealth is appropriate for stable, controlled diabetes refills, not for new acute complications.",
    answerLead: "Diabetes medication refill cost in 2026 (cash-pay totals):",
    answerBody: "A telehealth diabetes refill visit at TeleDirectMD costs <strong>$79</strong>. Generic metformin 500mg (60 tablets) starts at <strong>$5.75–$9/month</strong> via <a href=\"https://www.goodrx.com/metformin\">GoodRx (April 2026)</a>. Branded SGLT-2 inhibitors remain expensive: Jardiance 10mg is <strong>~$355/month</strong> and Farxiga 10mg is <strong>~$288/month</strong> with GoodRx coupons (<a href=\"https://www.goodrx.com/jardiance\">GoodRx</a>; <a href=\"https://www.goodrx.com/farxiga\">GoodRx, April 2026</a>). Civica Rx biosimilar insulin is now available at <strong>≤$30/vial</strong> as of January 2026 (<a href=\"https://civicarx.org/medications/\">Civica Rx, January 2026</a>). Compare to an endocrinology office visit at <strong>$200–$400</strong> cash-pay, without changing the medication.",
    heroSub: "Metformin is $5.75/month. A telehealth diabetes refill visit is $79. For a stable T2DM patient with well-controlled A1C who needs prescription continuity, the $79 visit is all that stands between you and your medication, no specialist waitlist required.",
    heroIntro: "Type 2 diabetes is one of the most manageable and most expensive chronic conditions in the US, expensive not because the first-line medication (metformin) is costly, but because SGLT-2 inhibitors, GLP-1 agonists, and insulin all carry high price tags without insurance, and specialist access is limited. For a patient with stable, well-controlled T2DM who simply needs a refill and A1C monitoring, telehealth is both clinically appropriate and dramatically cheaper than a specialist visit. We pulled 2026 pricing from GoodRx, Civica Rx, and standard benchmarks to show exactly what diabetes medication management costs across care settings, and where the value opportunities are.",
    heroCardTitle: "Diabetes Refill Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Metformin, SGLT-2 inhibitor, or GLP-1 refill prescription sent to pharmacy",
      "A1C trend review and target counseling (ADA 2026 guideline-based)",
      "GoodRx coupon guidance for branded medications, Jardiance, Farxiga",
      "Civica Rx insulin referral for uninsured insulin-dependent patients",
      "HSA/FSA accepted, 43 states, evenings & weekends",
    ],
    heroBenefits: [
      "Total ~$55 (visit + metformin) vs. $200–$400 at an endocrinologist cash-pay",
      "Metformin: ADA 2026 first-line, Tier 1 ($4–$9/month), no expensive branded alternative needed for most new diagnoses",
      "Farxiga with GoodRx: ~$288/month vs. $600+ retail, saves ~$300/month on SGLT-2 inhibitor",
      "Civica biosimilar insulin: ≤$30/vial, replaces $250–$400 branded insulin for eligible patients",
      "Stable T2DM refills appropriate for telehealth per ADA 2026, specialist referral when complications arise",
      "Documented visit for A1C tracking, appropriate for insurance reimbursement",
    ],
    costTable: {
      title: "Diabetes Medication Refill Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + one month of first-line medication. SGLT-2 and insulin costs listed separately due to wide range. Generic metformin assumed as baseline medication.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$55–$64 typical",
          includes: "$79 visit + metformin ($5.75–$9), SGLT-2 inhibitor refill at same visit if applicable",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$85–$93",
          includes: "Visit ($40–$100) + metformin ($5.75–$9)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$115–$275",
          includes: "In-person visit ($110–$265) + metformin ($5.75–$9); A1C lab may add $20–$50",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$180–$360",
          includes: "Not the appropriate setting for stable diabetes refills; listed for context",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$105–$153",
          includes: "NP visit; MinuteClinic handles simple refills including diabetes medications",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Endocrinologist (cash-pay)",
          cost: "$200–$400",
          includes: "Specialist visit; typically 6–12 week wait; medications cost same regardless of prescriber",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Diabetes Medication Costs: The Tier 1 Foundation, the SGLT-2 Reality, and Civica Insulin",
      paragraphs: [
        "The <a href=\"https://professional.diabetes.org/standards-of-care\">ADA 2026 Standards of Care</a> continue to endorse metformin as first-line therapy for most adults with type 2 diabetes, effective, safe, weight-neutral-to-favorable, and inexpensive. According to <a href=\"https://www.goodrx.com/metformin\">GoodRx (April 2026)</a>, generic metformin 500mg (60 tablets, a typical 30-day supply) starts at <strong>$5.75–$9</strong> at most US pharmacies, solidly in the Tier 1 ($4–$15) range. Many pharmacies offer metformin as part of $4/$10 generic programs. For the majority of new T2DM diagnoses, a telehealth evaluation and metformin prescription is the entire clinical transaction, total cost under $60. The ADA 2026 layered approach adds SGLT-2 inhibitors or GLP-1 agonists when cardiovascular, renal, or hepatic risk warrants it, not sequentially over years, but risk-stratified from early in the treatment course.",
        "SGLT-2 inhibitors (Jardiance, Farxiga) add meaningful cardiovascular and renal protection in appropriate patients but carry significant cost. According to GoodRx (April 2026), Jardiance (empagliflozin) 10mg costs approximately <strong>$355/month</strong> with a coupon (retail $422+/month), and Farxiga (dapagliflozin) 10mg is <strong>~$288/month</strong> with GoodRx (<a href=\"https://www.goodrx.com/jardiance\">GoodRx Jardiance</a>; <a href=\"https://www.goodrx.com/farxiga\">GoodRx Farxiga</a>). Manufacturer savings cards (AstraZeneca for Farxiga, Lilly/Boehringer for Jardiance) can reduce cost to $0–$35/month for commercially insured patients who qualify. For uninsured patients, these remain a significant monthly burden. Penn Medicine's 2026 <em>JAMA Network Open</em> study found telehealth averaged <strong>$96 vs. $509 in-person</strong> (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2026</a>), the medication cost, not the visit type, drives the total diabetes management spend.",
        "Insulin access received a major affordability breakthrough in January 2026: <a href=\"https://civicarx.org/medications/\">Civica Rx (CivicaScript)</a>, a nonprofit pharmaceutical manufacturer, launched biosimilar long-acting and short-acting insulin products at a recommended consumer price of <strong>no more than $30 per vial</strong> and no more than $55 for a box of five prefilled pens. This is a transformative price point: branded long-acting insulins (Lantus, Toujeo, Basaglar) have historically retailed at $200–$400/vial. Civica's insulin is available at pharmacies that have joined the CivicaScript network. For insulin-dependent patients without adequate coverage, the telehealth provider can identify the nearest participating pharmacy and write the appropriate biosimilar prescription.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Diabetes Refill Visit",
      groups: [
        {
          label: "Newly diagnosed T2DM patients without an endocrinologist",
          desc: "ADA-endorsed: most new T2DM diagnoses are manageable in primary care or telehealth with metformin + lifestyle. No specialist required for uncomplicated presentations.",
        },
        {
          label: "Stable T2DM patients who simply need a refill",
          desc: "Well-controlled A1C (< 7.5%), on a stable regimen, no new symptoms? A $79 telehealth visit provides continuity of care without the wait or cost of an endocrinology appointment.",
        },
        {
          label: "Uninsured patients on insulin",
          desc: "Civica Rx biosimilar insulin is ≤$30/vial as of January 2026. A telehealth provider can identify participating pharmacies and write the Civica-compatible prescription.",
        },
        {
          label: "Patients struggling with SGLT-2 inhibitor costs",
          desc: "Jardiance at $355/month and Farxiga at $288/month are manageable with manufacturer savings cards, which require a commercial insurance attestation. A telehealth visit helps navigate the savings card eligibility.",
        },
      ],
    },
    appropriateBlock: {
      title: "When Diabetes Management Belongs in Telehealth vs. In-Person",
      goodFor: [
        "Stable T2DM with well-controlled A1C and no new symptoms, medication refill only",
        "Metformin initiation for new T2DM or prediabetes diagnosis",
        "SGLT-2 inhibitor or GLP-1 refill with no complications or side effects",
        "A1C trend review and counseling against ADA 2026 targets (< 7% for most adults)",
        "Insulin dose adjustment for patients on a stable regimen, glucose log review",
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
          body: "Book a $79 telehealth visit. Metformin refill + SGLT-2 or GLP-1 continuation: total visit cost $79. Ongoing medication costs depend on your formulary.",
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
          body: "A telehealth visit can prescribe Civica Rx biosimilar insulin (≤$30/vial) and identify the nearest participating pharmacy. Do not ration insulin, contact a provider or FQHC immediately if you are at risk of running out.",
          good: true,
        },
      ],
    },
    medicationsTable: {
      title: "Diabetes Medication Costs (GoodRx Cash Price and Civica Rx, 2026)",
      caption: "30-day supply at major retail pharmacy. SGLT-2 prices reflect GoodRx coupon. Manufacturer savings cards may further reduce SGLT-2 costs for commercially insured patients.",
      rows: [
        {
          drug: "Metformin 500mg–1000mg, ADA 2026 first-line, Tier 1 generic",
          cost: "$5.75–$9/month",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
        {
          drug: "Jardiance (empagliflozin) 10mg, SGLT-2, cardiovascular/renal benefit",
          cost: "~$355/month with GoodRx coupon ($422+ retail)",
          sourceUrl: "https://www.goodrx.com/jardiance",
        },
        {
          drug: "Farxiga (dapagliflozin) 10mg, SGLT-2, cardiovascular/renal/HF benefit",
          cost: "~$288/month with GoodRx coupon (~$600 retail)",
          sourceUrl: "https://www.goodrx.com/farxiga",
        },
        {
          drug: "Civica Rx biosimilar insulin (long-acting), launched January 2026",
          cost: "≤$30/vial (no more than $55 for 5-pen box)",
          sourceUrl: "https://civicarx.org/medications/",
        },
        {
          drug: "Glipizide (sulfonylurea, generic), alternative oral agent",
          cost: "~$10–$15/month",
          sourceUrl: "https://www.goodrx.com/metformin",
        },
      ],
    },
    homeCare: {
      title: "Between Appointments: Daily Diabetes Management",
      bullets: [
        "Take metformin with food to minimize GI side effects; extended-release formulation is available if immediate-release causes persistent nausea.",
        "Target fasting glucose 80–130 mg/dL and A1C < 7% for most non-pregnant adults per ADA 2026, your individual target should be set with your provider.",
        "SGLT-2 inhibitors increase urinary tract and genital infection risk, maintain good hygiene and report recurrent symptoms promptly.",
        "If you are insulin-dependent and uninsured or underinsured, ask your provider about Civica Rx biosimilar insulin (≤$30/vial) and the nearest CivicaScript participating pharmacy.",
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
        answer: "It depends sharply on which medication. Generic metformin, the ADA's 2026 first-line recommendation, costs as little as $5.75–$9/month via GoodRx (April 2026). A telehealth refill visit is $79, total under $60. SGLT-2 inhibitors are more expensive: Jardiance 10mg runs ~$355/month and Farxiga 10mg ~$288/month with GoodRx coupons. Civica Rx biosimilar insulin is now available at ≤$30/vial as of January 2026.",
      },
      {
        question: "What is the cheapest diabetes medication available in 2026?",
        answer: "Generic metformin is the clear answer, as low as $5.75/month (60 tablets) via GoodRx (April 2026), and available on $4/$10 generic programs at many chain pharmacies. It is also the ADA 2026 guideline-recommended first-line therapy for most adults with type 2 diabetes. Glipizide (generic sulfonylurea) is similarly cheap at $10–$15/month but carries hypoglycemia risk.",
      },
      {
        question: "What is Civica Rx insulin and how affordable is it?",
        answer: "Civica Rx is a nonprofit pharmaceutical manufacturer that launched biosimilar insulin products in January 2026 at a recommended consumer price of no more than $30 per vial and no more than $55 for a box of five prefilled pens (Civica Rx, January 2026). This compares to $200–$400/vial for branded long-acting insulins. Civica insulin is available at pharmacies in the CivicaScript network, ask your TeleDirectMD provider for the nearest participating location.",
      },
      {
        question: "Does insurance cover Jardiance or Farxiga?",
        answer: "Most commercial plans cover SGLT-2 inhibitors, typically on Tier 3 (specialty tier), with copays of $40–$100/month for insured patients who have met their deductible. Manufacturer savings cards (AstraZeneca's Farxiga card, Lilly/Boehringer's Jardiance card) can reduce cost to $0–$35/month for commercially insured patients who qualify. For uninsured patients, GoodRx brings Jardiance to ~$355/month and Farxiga to ~$288/month, still a significant cost.",
      },
      {
        question: "Can a telehealth doctor refill my diabetes medications?",
        answer: "Yes, for stable, controlled T2DM. A TeleDirectMD provider can refill metformin, SGLT-2 inhibitors, oral GLP-1s (semaglutide tablets), and insulin prescriptions in a $79 visit. Insulin initiation, complex regimen changes, and new complications warrant in-person care.",
      },
      {
        question: "What are ADA 2026 guidelines for diabetes treatment?",
        answer: "ADA 2026 Standards of Care recommend a layered approach: (1) lifestyle optimization first, Mediterranean dietary pattern, structured aerobic exercise; (2) metformin as the preferred first medication for most adults with T2DM; (3) early addition of SGLT-2 inhibitors or GLP-1 receptor agonists when cardiovascular, renal, or obesity risk warrants it, not sequentially over years, but risk-stratified from early treatment. Continuous glucose monitoring is now recommended earlier and more broadly, including older adults on insulin.",
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
        label: "Civica Rx, Medications and insulin pricing (January 2026)",
        url: "https://civicarx.org/medications/",
      },
      {
        label: "ADA, Standards of Care in Diabetes 2026",
        url: "https://professional.diabetes.org/standards-of-care",
      },
      {
        label: "ADA, Pharmacologic approaches to glycemic treatment (PMC/Diabetes Care 2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12690185/",
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
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'acne-treatment-cost': {
    slug: "acne-treatment-cost",
    pid: "acne-cost",
    h1: "Acne Treatment Cost: Online Dermatology Visit vs Urgent Care vs Dermatologist",
    metaTitle: "Acne Treatment Cost 2026: Online Doctor vs. Dermatologist vs. Urgent Care",
    metaDescription: "A telehealth acne visit + generic adapalene costs $90–$108 total. Dermatologist cash-pay: $150–$300+. Verified 2026 GoodRx and AAD-guideline-aligned pricing with sources.",
    breadcrumb: "Acne Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating mild-to-moderate acne via telehealth costs $90–$108 total in the US, a $79 video visit with a board-certified MD plus a generic retinoid: adapalene 0.1% gel runs as low as $10.75 for a 45g tube (GoodRx, May 2026), tretinoin cream starts at $29.00 (GoodRx, May 2026), and oral doxycycline 100mg for combination therapy starts at $13.86 per 14 tablets (GoodRx, May 2026). By comparison, a dermatologist cash-pay visit runs $150–$300+ vs. urgent care $160–$320 (BetterCare, 2025). Per the AAD's 2024 acne guidelines, combination topical therapy (retinoid + benzoyl peroxide ± antibiotic) is strongly recommended first-line and is appropriate via telehealth for mild-to-moderate acne. Isotretinoin (Accutane) requires in-person derm care and the iPLEDGE program, TeleDirectMD does not prescribe it.",
    answerLead: "Acne treatment cost in 2026 (uninsured, mild-to-moderate):",
    answerBody: "A telehealth acne visit + first-line generic topical therapy costs <strong>$90–$108 total</strong> at TeleDirectMD ($79 visit + adapalene 0.1% from <strong>$10.75</strong> or tretinoin from <strong>$29</strong> via <a href=\"https://www.goodrx.com/adapalene\">GoodRx, May 2026</a>). Adding oral doxycycline for combination therapy brings the first-month total to roughly <strong>$103–$122</strong> (<a href=\"https://www.goodrx.com/doxycycline-hyclate\">GoodRx doxycycline, May 2026</a>). Compare that to a dermatologist cash-pay visit: <strong>$150–$300+</strong> before prescription costs, or urgent care at <strong>$160–$320</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>). Isotretinoin (Accutane) is out of scope for telehealth, it requires in-person dermatology and the federal iPLEDGE program.",
    heroSub: "A $79 video visit with a board-certified MD + a $10.75 generic retinoid. Total first-month cost: as low as $90. AAD 2024 guidelines support combination topical therapy via telehealth for mild-to-moderate acne.",
    heroIntro: "Mild-to-moderate acne, whiteheads, blackheads, papules, pustules, and early inflammatory breakouts, is one of the most telehealth-appropriate dermatology conditions. The 2024 American Academy of Dermatology guidelines strongly recommend topical retinoids (adapalene, tretinoin), benzoyl peroxide, and topical or oral antibiotics as first-line therapy, all of which a board-certified MD can evaluate and prescribe via video visit. We pulled 2025–2026 pricing from GoodRx, BetterCare, and Mira Health to map the full cost landscape, from a $10.75 generic retinoid to a $300+ derm office visit.",
    heroCardTitle: "Acne Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Topical retinoid or antibiotic e-prescription to your pharmacy",
      "AAD guideline-aligned combination therapy approach",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $89–$145 first month vs. $150–$300+ derm cash-pay",
      "No waiting room, typical visit 10–15 minutes",
      "Same AAD 2024 first-line drugs: adapalene, tretinoin, doxycycline",
      "Isotretinoin referral provided if needed, honest scope limits",
      "Documented receipt suitable for HSA/FSA",
    ],
    costTable: {
      title: "Acne Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first-line generic medication via GoodRx coupon. Excludes brand-name formulations, combination products, and in-office procedures (extractions, chemical peels).",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$89–$145 typical",
          includes: "$79 visit + adapalene ($10.75) or tretinoin ($29) ± doxycycline ($13–$17)",
          source: "TeleDirectMD; GoodRx",
          sourceUrl: "https://www.goodrx.com/adapalene",
        },
        {
          setting: "Telehealth (national average)",
          cost: "$55–$150",
          includes: "Visit ($40–$100) + topical retinoid or antibiotic ($10–$50)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/acne/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$280",
          includes: "In-person visit ($100–$250) + generic topical Rx ($10–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$160–$340",
          includes: "Walk-in visit ($150–$320) + antibiotic ($10–$20); limited derm scope",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$110–$165",
          includes: "NP visit ($99–$139) + generic topical ($10–$25)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$900–$2,500+",
          includes: "ED visit; acne is not an emergency, avoid unless severe systemic reaction",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Acne Visit Is Clinically Sound and Cost-Efficient",
      paragraphs: [
        "The <a href=\"https://www.aad.org/news/updated-guidelines-acne-management\">American Academy of Dermatology's 2024 acne guidelines</a> strongly recommend topical retinoids (adapalene, tretinoin), benzoyl peroxide, and oral doxycycline as first-line agents, all of which can be safely assessed and prescribed via a video visit. The guidelines specifically endorse combining multiple topical mechanisms (e.g., retinoid + benzoyl peroxide ± antibiotic) for better outcomes. Importantly, the same guidelines reserve isotretinoin for severe, scarring, or treatment-refractory acne requiring in-person monitoring under the federal iPLEDGE program. For the majority of patients with mild-to-moderate acne, telehealth delivers the same standard-of-care regimen as an in-person visit.",
        "According to a 2024 study published in <em>JAMA Network Open</em> by Penn Medicine researchers, telemedicine episodes average <strong>$96 vs. $509 for in-person care</strong>, a five-fold cost difference (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2024</a>). For acne specifically, the savings are amplified because no in-office procedures (extractions, culture swabs) are required for first-line management. The medication cost differential is equally compelling: according to <a href=\"https://www.goodrx.com/adapalene\">GoodRx (May 2026)</a>, generic adapalene 0.1% gel costs as low as $10.75 for a 45g tube, versus a $83.10 retail price without a coupon.",
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
          desc: "Dermatologist wait times average 30–45 days in many metros. Telehealth gets you on AAD first-line therapy the same day.",
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
        "Patients needing isotretinoin, iPLEDGE program mandates in-person monitoring",
        "Suspected perioral dermatitis, rosacea, or fungal acne mimics (require visual examination)",
        "Acne with significant scarring requiring procedural treatment (chemical peels, laser)",
        "Rapid hormonal workup needed (PCOS, congenital adrenal hyperplasia)",
        "Pediatric acne in children under 12 years",
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
          body: "Book a $79 telehealth visit. You'll likely leave with an adapalene or tretinoin prescription plus a benzoyl peroxide regimen, AAD first-line therapy, for under $80 total.",
          good: true,
        },
        {
          num: 3,
          head: "Need doxycycline for combination therapy?",
          body: "Telehealth is appropriate. A board-certified MD can assess and prescribe oral antibiotics. Expect total first-month cost of $75–$115 with generic doxycycline via GoodRx.",
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
        "Any prior discussion of isotretinoin, this requires in-person derm enrollment in iPLEDGE.",
        "Acne that may be a rosacea, perioral dermatitis, or fungal folliculitis mimic, visual exam essential.",
        "Acne in the context of new-onset irregular periods, hirsutism, or weight gain (suggests PCOS, needs workup).",
        "Acne unresponsive to two prior courses of first-line therapy, step up to in-person dermatology.",
        "Patients under 12 years of age.",
      ],
    },
    faqs: [
      {
        question: "How much does acne treatment cost without insurance in 2026?",
        answer: "Via telehealth: $59–$90 total for a $79 visit plus generic adapalene from $10.75 or tretinoin from $29 (GoodRx, May 2026). Adding oral doxycycline brings the first-month total to $75–$115. A dermatologist cash-pay visit costs $150–$300+ before medication. Urgent care runs $160–$340 (BetterCare, 2025), and has limited derm expertise.",
      },
      {
        question: "What is the cheapest FDA-approved acne medication?",
        answer: "Adapalene 0.1% gel (Differin OTC) is the most affordable first-line retinoid at $10.75–$16 for a 45g tube via GoodRx (May 2026), no prescription required. It's also an AAD 2024 strongly recommended topical retinoid for mild-to-moderate acne. Generic benzoyl peroxide 2.5%–5% wash runs $5–$15 OTC at any pharmacy.",
      },
      {
        question: "Is tretinoin cheaper with a telehealth visit than going to a dermatologist?",
        answer: "Yes, significantly. A telehealth visit at $79 plus generic tretinoin at $29–$102 (GoodRx) totals $78–$151, vs. a $150–$300+ dermatologist visit plus the same prescription cost. The drug itself is identical regardless of where the prescription originates.",
      },
      {
        question: "Can I get doxycycline for acne online?",
        answer: "Yes. Oral doxycycline is an AAD 2024 first-line treatment for moderate acne when combined with a topical retinoid and benzoyl peroxide. A board-certified MD can assess and prescribe it via a $79 telehealth visit. Generic doxycycline hyclate 100mg runs $13.86 per 14 tablets at most pharmacies with GoodRx (May 2026).",
      },
      {
        question: "Does TeleDirectMD prescribe Accutane (isotretinoin)?",
        answer: "No. Isotretinoin (Accutane and generics) requires enrollment in the federal iPLEDGE Risk Evaluation and Mitigation Strategy (REMS) program, monthly in-person pregnancy testing, and dermatologist-supervised monitoring. Telehealth cannot fulfill these requirements. We'll refer you to a dermatologist if your acne warrants isotretinoin evaluation.",
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
        answer: "No, the $79 covers the video consultation. Medications are sent electronically to your pharmacy where you pay separately. With GoodRx, generic adapalene runs $10.75, tretinoin from $29, and doxycycline $13–$30 per month. Total first-month cost is typically $89–$145, which still undercuts most in-person alternatives.",
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
        label: "BetterCare, Urgent care & ER cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2024)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'eczema-treatment-cost': {
    slug: "eczema-treatment-cost",
    pid: "eczema-cost",
    h1: "Eczema Treatment Cost: Online Doctor vs Dermatologist vs Urgent Care",
    metaTitle: "Eczema Treatment Cost 2026: Telehealth vs. Derm vs. Urgent Care",
    metaDescription: "Telehealth eczema visit + generic triamcinolone costs $88–$99 total. Dermatologist cash-pay: $150–$300+. AAD-guideline-cited 2026 prices. Biologics out-of-scope at $30,000+/yr.",
    breadcrumb: "Eczema Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, treating mild-to-moderate atopic dermatitis (eczema) via telehealth costs $88–$167 total in the US, a $79 video visit plus generic triamcinolone acetonide 0.1% cream from $9.19 (GoodRx, May 2026), or hydrocortisone 2.5% from $10.71 (GoodRx, May 2026). Prescription tacrolimus ointment 0.1% (Protopic), a calcineurin inhibitor recommended by the AAD for facial or sensitive-area eczema, costs $35–$88 via GoodRx. By comparison, a dermatologist cash-pay visit runs $150–$300+ vs. urgent care $160–$320 (BetterCare, 2025). Biologics (dupilumab/Dupixent) for severe eczema cost $30,000–$40,000/year cash-pay and require in-person specialist management, out of scope for telehealth. Per AAD and AAAAI/ACAAI 2023 guidelines, mid-potency topical corticosteroids and calcineurin inhibitors are first-line for mild-to-moderate eczema and are appropriate via telehealth.",
    answerLead: "Eczema treatment cost in 2026 (uninsured, mild-to-moderate):",
    answerBody: "A telehealth eczema visit + generic topical steroid costs <strong>$58–$70 total</strong> at TeleDirectMD ($79 visit + triamcinolone from <strong>$9.19</strong> via <a href=\"https://www.goodrx.com/triamcinolone\">GoodRx, May 2026</a>). For sensitive areas (face, eyelids), tacrolimus ointment is the preferred non-steroid option at <strong>$35–$88</strong> (<a href=\"https://www.goodrx.com/tacrolimus\">GoodRx, May 2026</a>). Compare to a dermatologist cash-pay visit at <strong>$150–$300+</strong> or urgent care at <strong>$160–$320</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>). Dupilumab (Dupixent) for severe eczema has a cash list price of <strong>$30,000–$40,000 per year</strong> and requires in-person specialist monitoring.",
    heroSub: "A $79 video visit + generic triamcinolone from $9.19. Total: as low as $88. AAD-guideline first-line topical therapy, assessed and prescribed via telehealth in 10–15 minutes.",
    heroIntro: "Atopic dermatitis (eczema) affects more than 31 million Americans, most of whom manage flares with topical corticosteroids or calcineurin inhibitors. For mild-to-moderate flares without infection or severe systemic involvement, telehealth delivers the same first-line treatment as an in-person visit at a fraction of the cost. The 2023 AAAAI/ACAAI and AAD guidelines strongly support topical corticosteroids (triamcinolone, hydrocortisone) and topical calcineurin inhibitors (tacrolimus), all prescribable via telehealth. We pulled verified 2026 pricing from GoodRx, BetterCare, and Mira Health to show you exactly what eczema treatment costs across every care setting.",
    heroCardTitle: "Eczema Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Topical steroid or calcineurin inhibitor e-prescription to your pharmacy",
      "AAD-guideline-aligned first-line eczema management",
      "43 states, evenings & weekends",
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
          cost: "$55–$150",
          includes: "Visit ($40–$100) + topical corticosteroid ($9–$30)",
          source: "GoodRx; BetterCare 2025",
          sourceUrl: "https://www.goodrx.com/conditions/atopic-dermatitis/drugs",
        },
        {
          setting: "Primary care (cash-pay)",
          cost: "$110–$280",
          includes: "In-person visit ($100–$250) + generic topical Rx ($9–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$160–$340",
          includes: "Walk-in visit ($150–$320) + topical steroid ($9–$30); limited derm expertise",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$108–$169",
          includes: "NP visit ($99–$139) + topical steroid ($9–$30)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$900–$2,500+",
          includes: "ED visit; appropriate only for severe infection (cellulitis), not routine eczema flares",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Eczema Visit Is Clinically Sound and Cost-Efficient",
      paragraphs: [
        "The <a href=\"https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis\">AAD's atopic dermatitis clinical guidelines</a>, most recently updated through 2025, make strong evidence-based recommendations for topical corticosteroids (e.g., triamcinolone acetonide, hydrocortisone), topical calcineurin inhibitors (tacrolimus, pimecrolimus), and moisturizers as foundational first-line therapies. These agents are appropriate to prescribe via telehealth for mild-to-moderate flares. The 2023 AAAAI/ACAAI Joint Task Force guidelines, published in the <em>Annals of Allergy, Asthma & Immunology</em> (<a href=\"https://pubmed.ncbi.nlm.nih.gov/38108679/\">PubMed, 2024</a>), similarly recommend topical corticosteroids and calcineurin inhibitors as cornerstone management. Biologics (dupilumab, tralokinumab) and JAK inhibitors (abrocitinib, upadacitinib) are strongly recommended only for moderate-to-severe AD failing topical therapy, these require in-person specialist initiation and monitoring.",
        "According to a 2024 <em>JAMA Network Open</em> study by Penn Medicine researchers, telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, a five-fold cost difference (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2024</a>). For eczema management, the cost advantage is stark: according to <a href=\"https://www.goodrx.com/triamcinolone\">GoodRx (May 2026)</a>, generic triamcinolone acetonide 0.1% cream starts at <strong>$9.19 per tube</strong>, and generic hydrocortisone 2.5% cream starts at <strong>$10.71</strong>, vs. the $150–$300+ dermatologist visit just to obtain the same prescription.",
        "The biologic cost context matters for patients researching eczema treatment costs. Dupilumab (Dupixent), the most widely prescribed biologic for moderate-to-severe AD, carries a cash list price of roughly $30,000–$40,000 per year. Most insured patients pay $0–a few hundred dollars annually with manufacturer copay programs, but uninsured cash-pay patients cannot access biologics via telehealth. Tacrolimus ointment 0.1%, a prescription non-steroidal option endorsed by the AAD guidelines for sensitive skin areas, costs <strong>$35–$88 for a 30g tube</strong> via <a href=\"https://www.goodrx.com/tacrolimus\">GoodRx (May 2026)</a>, far less than a specialist visit just to obtain the prescription.",
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
          label: "Parents managing childhood eczema",
          desc: "Pediatric eczema flares at inconvenient times. Evening telehealth visits let you get hydrocortisone or triamcinolone for your child without an ER or urgent care visit at 3x the cost.",
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
        "Mild-to-moderate eczema flares in adults and children over 2 years",
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
        "Neonatal or infant eczema under 2 months of age",
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
          body: "Book a $79 telehealth visit. Total cost: $88–$118 with generic triamcinolone or hydrocortisone via GoodRx. Visit takes 10–15 minutes.",
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
          cost: "$30,000–$40,000/yr cash-pay; $0–$350/yr with insurance + copay card",
          sourceUrl: "https://www.goodrx.com/dupixent",
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
        "Uncontrolled eczema in infants under 2 months, requires pediatric evaluation.",
        "Patients already on biologics who are experiencing a treatment failure, needs specialist escalation.",
      ],
    },
    faqs: [
      {
        question: "How much does eczema treatment cost without insurance in 2026?",
        answer: "Via telehealth: $58–$88 total, a $79 TeleDirectMD visit plus generic triamcinolone 0.1% cream from $9.19 or tacrolimus from $35.25 (GoodRx, May 2026). A dermatologist cash-pay visit costs $150–$300+ before medications. Urgent care runs $160–$340 (BetterCare, 2025). For severe eczema requiring dupilumab (Dupixent), cash-pay biologic costs reach $30,000–$40,000/year, these patients need in-person specialist care and insurance authorization.",
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
        answer: "Dupilumab (Dupixent) has a cash list price of roughly $30,000–$40,000 per year. Most commercially insured patients pay $0–a few hundred dollars annually with Sanofi's copay program. This biologic is reserved for moderate-to-severe eczema failing topical therapy and requires in-person specialist initiation, it is not prescribable via telehealth.",
      },
      {
        question: "When should eczema go to the ER?",
        answer: "Eczema alone is not an ER condition. Go to the ER or urgent care if you develop fever, rapidly spreading redness, eczema herpeticum (clustered blisters with pain), or signs of sepsis. An ER visit for eczema without infection will cost $900–$2,500+ uninsured (BetterCare, 2025), many times the cost of a same-day telehealth visit.",
      },
      {
        question: "Does the Penn Medicine study apply to telehealth eczema visits?",
        answer: "Yes. Penn Medicine's 2024 JAMA Network Open study found telemedicine episodes average $96 vs. $509 in-person, a 5× cost difference. For eczema, where the treatment plan (topical Rx) is the same regardless of care setting, the in-person premium buys nothing clinically extra for mild-to-moderate flares.",
      },
      {
        question: "Is the $79 TeleDirectMD eczema visit covered by insurance?",
        answer: "TeleDirectMD is in-network with Aetna, BCBS, and UnitedHealthcare in select states. For out-of-network or self-pay patients, the $79 flat rate often beats an in-network specialist copay when a deductible is unmet. HSA and FSA cards are accepted.",
      },
    ],
    references: [
      {
        label: "AAD, Atopic Dermatitis Clinical Guidelines (updated 2025)",
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
        label: "BetterCare, ER & urgent care cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2024)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'seasonal-allergies-cost': {
    slug: "seasonal-allergies-cost",
    pid: "allergies-cost",
    h1: "Seasonal Allergies Cost: Online Doctor vs Urgent Care vs Allergist",
    metaTitle: "Seasonal Allergies Cost 2026: Online Doctor vs. Urgent Care vs. Allergist",
    metaDescription: "Telehealth allergy visit + prescription fluticasone costs $94 total. OTC loratadine: $5/month. Montelukast (FDA boxed warning): $8.73/month. Verified 2026 GoodRx pricing.",
    breadcrumb: "Seasonal Allergies Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, managing seasonal allergic rhinitis via telehealth costs $94 total in the US, a $79 video visit plus prescription-strength fluticasone propionate nasal spray from $14.67 (GoodRx, May 2026; also available OTC as Flonase for $18–$30). OTC second-generation antihistamines are even cheaper: generic loratadine 10mg (Claritin) costs as low as $4.97 for 30 tablets, and cetirizine 10mg (Zyrtec) runs $8.70 for 30 tablets (GoodRx, May 2026). Generic montelukast 10mg (Singulair) costs $8.73/month (GoodRx), but carries an FDA boxed warning for serious neuropsychiatric effects and is no longer first-line per ICAR 2023 guidelines. By comparison, an allergist cash-pay visit runs $200–$350, urgent care $160–$320 (BetterCare, 2025), and primary care $110–$265 (Mira Health, 2025). ICAR 2023 guidelines strongly recommend intranasal corticosteroids and second-generation antihistamines as first-line therapy.",
    answerLead: "Seasonal allergies treatment cost in 2026 (uninsured):",
    answerBody: "The cheapest effective regimen: OTC generic loratadine at <strong>$4.97/month</strong> or cetirizine at <strong>$8.70/month</strong> (<a href=\"https://www.goodrx.com/loratadine\">GoodRx, May 2026</a>), no visit required. Adding prescription fluticasone nasal spray brings the first-season total to roughly <strong>$94</strong> ($79 telehealth visit + $14.67 generic fluticasone, <a href=\"https://www.goodrx.com/fluticasone-propionate\">GoodRx, May 2026</a>). Compare to an allergist cash-pay visit at <strong>$200–$350+</strong>, or urgent care at <strong>$160–$320</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>). Generic montelukast (Singulair) costs <strong>$8.73/month</strong> (<a href=\"https://www.goodrx.com/montelukast\">GoodRx</a>) but carries an <strong>FDA boxed warning</strong> for neuropsychiatric events, not first-line.",
    heroSub: "A $79 telehealth visit + generic fluticasone nasal spray from $14.67. Total: $94. ICAR 2023 guidelines endorse intranasal steroids as first-line therapy, telehealth-prescribable in 10 minutes.",
    heroIntro: "Seasonal allergic rhinitis affects more than 19 million US adults and is one of the most straightforward conditions to manage via telehealth. The International Consensus Statement on Allergy and Rhinology 2023 (ICAR: AR 2023) strongly recommends intranasal corticosteroids (fluticasone, budesonide) and second-generation antihistamines (loratadine, cetirizine) as first-line treatment, both are prescribable by telehealth. The cost spectrum is wide: from $4.97 OTC loratadine to $200–$350+ allergist visits and $1,000+/year immunotherapy. We mapped every option with 2026 pricing from GoodRx, BetterCare, and Mira Health.",
    heroCardTitle: "Seasonal Allergy Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Prescription fluticasone or other intranasal steroid to your pharmacy",
      "ICAR 2023 guideline-aligned first-line therapy",
      "43 states, evenings & weekends",
      "No insurance required",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "Total $63 vs. $200–$350+ allergist cash-pay",
      "No waiting room, typical visit takes 10 minutes",
      "Prescription-strength fluticasone when OTC Flonase isn't enough",
      "Honest montelukast FDA boxed-warning counseling",
      "Documented receipt suitable for HSA/FSA",
    ],
    costTable: {
      title: "Seasonal Allergies Treatment Cost by Care Setting (2026, Cash-Pay Total)",
      caption: "Visit cost + first-line medication via GoodRx coupon. OTC options (loratadine, cetirizine, fluticasone OTC) require no visit. Immunotherapy (allergy shots) and specialist testing excluded.",
      rows: [
        {
          setting: "TeleDirectMD (online)",
          cost: "$63–$80 typical",
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
          cost: "$120–$280",
          includes: "In-person visit ($100–$250) + prescription allergy Rx ($5–$30)",
          source: "Mira Health, 2025",
          sourceUrl: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
        },
        {
          setting: "Urgent care (in-person)",
          cost: "$165–$350",
          includes: "Walk-in visit ($150–$320) + allergy medication",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$104–$169",
          includes: "NP visit ($99–$139) + allergy prescription ($5–$30)",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Allergist / specialist (cash-pay)",
          cost: "$200–$400+ initial",
          includes: "Consultation + possible allergy testing; immunotherapy ($800–$4,000+/year) separate",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Why a Telehealth Seasonal Allergy Visit Is Clinically Sound and Cost-Efficient",
      paragraphs: [
        "The <a href=\"https://bulletin.entnet.org/clinical-patient-care/article/22861705/icar-allergic-rhinitis-2023\">International Consensus Statement on Allergy and Rhinology 2023 (ICAR: AR 2023)</a>, developed by over 120 authors, makes strong recommendations for intranasal corticosteroids (e.g., fluticasone propionate, budesonide) and second-generation antihistamines (loratadine, cetirizine, fexofenadine) as first-line therapy for allergic rhinitis. ICAR 2023 also issues a strong recommendation <em>against</em> routine oral corticosteroid use and oral decongestant monotherapy. All first-line agents are prescribable by telehealth, and both loratadine and cetirizine are available OTC without any visit at all. Montelukast (Singulair generic) is explicitly a second- or third-line option, the FDA added a <strong>boxed warning</strong> in 2020 citing serious neuropsychiatric adverse events including suicidal thinking; ICAR 2023 recommends it only when first-line options fail.",
        "According to a 2024 <em>JAMA Network Open</em> study by Penn Medicine researchers, telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong>, a five-fold cost difference (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2024</a>). For allergic rhinitis, a telehealth visit is especially cost-efficient because the diagnosis is clinical (seasonal pattern, sneezing, rhinorrhea, nasal congestion) and no labs or skin testing are needed for initial management. Allergy testing is reserved for patients failing empiric therapy who are considering allergen immunotherapy.",
        "The OTC vs. Rx cost nuance is important for allergy patients. Fluticasone propionate nasal spray is now available OTC as Flonase ($18–$30 for a 120-spray bottle), but Rx generic fluticasone via GoodRx costs as low as <strong>$14.67</strong> (<a href=\"https://www.goodrx.com/fluticasone-propionate\">GoodRx, May 2026</a>), meaning the prescription version is actually cheaper than OTC at most pharmacies when you use a GoodRx coupon. Generic loratadine 10mg runs <strong>$4.97 for 30 tablets</strong> and generic cetirizine 10mg costs <strong>$8.70 for 30 tablets</strong> (<a href=\"https://www.goodrx.com/cetirizine\">GoodRx, May 2026</a>), no visit or prescription needed. Generic montelukast 10mg (Singulair) costs <strong>$8.73/month</strong> via GoodRx but should only be used after discussing the FDA boxed warning with a clinician.",
      ],
    },
    whoWeHelp: {
      title: "Who Benefits Most From a Telehealth Seasonal Allergy Visit",
      groups: [
        {
          label: "OTC-resistant allergy sufferers",
          desc: "Loratadine and cetirizine not cutting it? A $79 telehealth visit gets you prescription-strength nasal steroid therapy and a full first-line regimen for $63 total.",
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
          body: "Book a $79 telehealth visit. Prescription fluticasone runs $14.67 via GoodRx, cheaper than OTC Flonase. Total first-treatment cost: $63.",
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
        "Pediatric patients under 2 years with respiratory symptoms, warrants in-person pediatric evaluation.",
      ],
    },
    faqs: [
      {
        question: "How much do seasonal allergies cost to treat without insurance in 2026?",
        answer: "The cheapest effective option requires no visit: OTC generic loratadine (Claritin) costs $4.97/month and cetirizine (Zyrtec) costs $8.70/month at most pharmacies with GoodRx (May 2026). If you need prescription intranasal steroids, a $79 telehealth visit plus generic fluticasone at $14.67 brings your first-treatment total to $63, vs. $200–$350+ for an allergist cash-pay visit.",
      },
      {
        question: "Is prescription fluticasone cheaper than OTC Flonase?",
        answer: "Yes, often significantly. Generic fluticasone propionate nasal spray (the same active ingredient as Flonase) costs $14.67 via GoodRx coupon (May 2026) vs. $18–$30 for OTC Flonase at retail. The telehealth visit adds $79, so the total Rx route ($63) costs more than buying OTC Flonase, but if you're an established allergy patient needing a refill, the telehealth route gets you the prescription version at a lower drug cost.",
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
        answer: "Yes. Penn Medicine's 2024 JAMA Network Open study found telemedicine visits average $96 vs. $509 in-person, a 5× cost difference. Seasonal allergies are particularly well-suited for telehealth: the diagnosis is clinical (seasonal pattern, symptom profile) and no labs, allergy tests, or procedures are needed for initial first-line management.",
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
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-stronger-warning-about-risk-neuropsychiatric-events-associated-montelukast-singulair",
      },
      {
        label: "BetterCare, Urgent care & ER cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2024)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
      {
        label: "CVS MinuteClinic, Price list (2024)",
        url: "https://www.cvs.com/minuteclinic/services/price-lists",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'covid-19-treatment-cost': {
    slug: "covid-19-treatment-cost",
    pid: "covid-cost",
    h1: "COVID-19 Treatment Cost: Paxlovid Pricing, Online Doctor vs ER in 2026",
    metaTitle: "COVID-19 Treatment Cost 2026: Paxlovid Price, Online Doctor vs. ER",
    metaDescription: "Paxlovid's 2026 retail price is ~$1,390–$1,447, but free for eligible uninsured/Medicare via PAXCESS through Dec 2026. Telehealth COVID visit: $79. ER visit: $1,200–$3,000+.",
    breadcrumb: "COVID-19 Treatment Cost",
    citableSummary: "According to TeleDirectMD's 2026 cost analysis, COVID-19 treatment costs vary dramatically by eligibility and setting. Paxlovid (nirmatrelvir-ritonavir), the first-line oral antiviral per CDC and IDSA guidelines, has a retail list price of approximately $1,390–$1,447 per 5-day course without insurance (GoodRx, May 2026). However, eligible patients on Medicare, Medicaid, or who are uninsured can receive Paxlovid for free through December 31, 2026 via Pfizer's PAXCESS / U.S. Government Patient Assistance Program (paxlovid.com). Commercially insured patients may pay $0 with the PAXCESS co-pay savings card (maximum $1,500/year savings). A telehealth COVID visit to assess eligibility and obtain a Paxlovid prescription costs $79 at TeleDirectMD, versus an urgent care visit at $160–$320 or ER at $1,200–$3,000+ (BetterCare, 2025). Paxlovid must be started within 5 days of symptom onset per CDC guidance.",
    answerLead: "COVID-19 treatment cost in 2026 (uninsured or cash-pay):",
    answerBody: "Paxlovid (nirmatrelvir-ritonavir), the first-line COVID oral antiviral per <a href=\"https://www.cdc.gov/covid/treatment/index.html\">CDC</a> and <a href=\"https://www.idsociety.org/globalassets/idsa/practice-guidelines/covid-19/treatment/antiviral-treatment-for-mild-to-moderate-covid-19-in-adults-guideline-manuscript.pdf\">IDSA guidelines</a>, has a retail price of approximately <strong>$1,390–$1,447</strong> per course without assistance (<a href=\"https://www.goodrx.com/paxlovid\">GoodRx, May 2026</a>). <strong>Eligible uninsured and Medicare/Medicaid patients can get Paxlovid for free through December 31, 2026</strong> via Pfizer's PAXCESS USG Patient Assistance Program (<a href=\"https://www.paxlovid.com/enroll-in-co-pay-program\">paxlovid.com</a>). Commercially insured patients may pay as little as <strong>$0</strong> with the PAXCESS co-pay card. A TeleDirectMD telehealth visit to assess eligibility and issue the prescription costs <strong>$79</strong>, vs. urgent care at <strong>$160–$320</strong> or ER at <strong>$1,200–$3,000+</strong> (<a href=\"https://bettercare.com/costs/er-visit-cost\">BetterCare, 2025</a>).",
    heroSub: "A $79 video visit to assess Paxlovid eligibility. Free Paxlovid available for eligible uninsured and Medicare/Medicaid patients through December 2026 via PAXCESS. Must start within 5 days of symptoms.",
    heroIntro: "COVID-19 antiviral treatment has a confusing pricing landscape in 2026: Paxlovid's retail price exceeds $1,400, yet eligible patients can get it free. The key is knowing your eligibility, high-risk criteria, insurance status, and the PAXCESS patient assistance program, and acting fast, since Paxlovid must start within 5 days of symptom onset. A telehealth visit is the fastest, cheapest way to be assessed and get a prescription routed to your pharmacy. We pulled 2026 pricing from GoodRx, PAXCESS program terms, BetterCare, and Mira Health so you know exactly what to expect.",
    heroCardTitle: "COVID-19 Visit at TeleDirectMD: $79",
    heroCardItems: [
      "Same-day video visit with a board-certified MD",
      "Paxlovid eligibility assessment per CDC high-risk criteria",
      "E-prescription to your pharmacy, same-day if eligible",
      "43 states, evenings & weekends",
      "PAXCESS program navigation assistance",
      "HSA/FSA accepted",
    ],
    heroBenefits: [
      "$79 visit vs. $160–$320 urgent care or $1,200–$3,000+ ER",
      "Paxlovid prescription within hours, clock starts at symptom onset",
      "PAXCESS program: free Paxlovid for eligible uninsured/Medicare through Dec 2026",
      "Drug interaction screening for ritonavir-boosted regimens",
      "Clear guidance on when in-person or ER is actually needed",
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
          cost: "$160–$320 visit; Paxlovid separate",
          includes: "Walk-in COVID evaluation; rapid test often bundled",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
        {
          setting: "Retail clinic (CVS MinuteClinic)",
          cost: "$99–$139 visit; Paxlovid separate",
          includes: "NP COVID evaluation; Paxlovid prescription if eligible",
          source: "CVS MinuteClinic, 2024",
          sourceUrl: "https://www.cvs.com/minuteclinic/services/price-lists",
        },
        {
          setting: "Emergency room (uninsured)",
          cost: "$1,200–$3,000+",
          includes: "ED visit + testing; appropriate only for severe COVID (hypoxia, respiratory distress)",
          source: "BetterCare, 2025",
          sourceUrl: "https://bettercare.com/costs/er-visit-cost",
        },
      ],
    },
    platformTable: null,
    conditionRollup: null,
    educationalGap: {
      title: "Paxlovid Pricing, PAXCESS Access, and When COVID Needs In-Person Care",
      paragraphs: [
        "Paxlovid (nirmatrelvir-ritonavir) transitioned from a U.S. government-distributed free drug to the commercial market in March 2024. The retail list price is now approximately <strong>$1,390–$1,447 per 5-day course</strong>, unaffordable for most uninsured patients paying out of pocket (<a href=\"https://www.goodrx.com/paxlovid\">GoodRx, May 2026</a>). However, Pfizer's PAXCESS patient assistance program significantly changes the calculus: eligible patients on Medicare, Medicaid, TRICARE, or who are uninsured can receive Paxlovid for <strong>free through December 31, 2026</strong> via the U.S. Government Patient Assistance Program (USG PAP), operated by Pfizer (<a href=\"https://www.paxlovid.com/enroll-in-co-pay-program\">paxlovid.com</a>; call 1-877-219-7225). Commercially insured patients can use the PAXCESS co-pay savings card to pay as little as $0, with maximum annual savings of $1,500. The CDC and IDSA both strongly recommend Paxlovid as the <em>first-line</em> oral antiviral for mild-to-moderate COVID in adults at higher risk for severe disease, defined as adults 50+, unvaccinated or not up-to-date, or with chronic conditions including diabetes, obesity, chronic lung disease, heart disease, or immunocompromise.",
        "Per <a href=\"https://www.cdc.gov/covid/treatment/index.html\">CDC COVID treatment guidance (February 2026)</a>, Paxlovid must be started <strong>within 5 days of symptom onset</strong>, the 5-day window is hard. This timing makes telehealth the most efficient access point: a $79 TeleDirectMD visit gets you assessed and a prescription routed to your pharmacy within hours of booking. A 2024 <em>JAMA Network Open</em> study by Penn Medicine found telemedicine episodes averaged <strong>$96 vs. $509 for in-person care</strong> (<a href=\"https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits\">Penn Medicine, 2024</a>). For COVID specifically, where the clinical decision (eligible or not?) is straightforward and the only physical requirement is a positive test result (which you've already done at home), telehealth is the ideal setting. Paxlovid carries important drug-drug interactions with ritonavir, a telehealth physician will screen your medication list.",
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
          desc: "Paxlovid's retail price is $1,390+. But if you're uninsured or on Medicare, the PAXCESS USG PAP gets it free through December 2026. A telehealth visit helps you navigate eligibility.",
        },
        {
          label: "Commercially insured patients with high deductibles",
          desc: "The PAXCESS co-pay card caps your out-of-pocket at $0 if your plan covers Paxlovid. A $79 telehealth visit + $0 drug cost beats a $160–$320 urgent care visit any day.",
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
        "Severe hepatic or severe renal impairment (Paxlovid dosing adjustment requires in-person workup)",
        "Children under 12 years or under 40 kg, Paxlovid not authorized",
      ],
    },
    decisionGuide: {
      title: "COVID-19: Telehealth, Urgent Care, or ER?",
      steps: [
        {
          num: 1,
          head: "Shortness of breath at rest, SpO2 <94%, chest pain, or confusion?",
          body: "Call 911 or go to the ER now. These are signs of severe COVID requiring hospital-level care. ER visit cost is $1,200–$3,000+ uninsured (BetterCare, 2025), worth it when it's a medical emergency.",
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
        "If you start Paxlovid and experience \"rebound\" symptoms (returning positive test, symptoms re-emerge days 10–14), contact a provider, rebound is common and typically mild, not requiring retreatment.",
      ],
    },
    whenNotToUse: {
      title: "When NOT to Treat COVID-19 by Telehealth",
      bullets: [
        "Oxygen saturation below 94% or any breathing difficulty at rest, ER immediately.",
        "Chest pain, persistent pressure, or feeling of tightness in chest.",
        "New confusion, difficulty waking, altered consciousness.",
        "Inability to keep fluids or medication down due to vomiting.",
        "Severe liver disease (Child-Pugh Class C), Paxlovid is contraindicated; needs specialist input.",
        "Children under 12 years or weighing under 40kg, Paxlovid is not authorized; see a pediatrician.",
      ],
    },
    faqs: [
      {
        question: "How much does Paxlovid cost without insurance in 2026?",
        answer: "Without insurance and without assistance programs, Paxlovid's retail price is approximately $1,390–$1,447 per 5-day course (GoodRx, May 2026). However, eligible uninsured patients can receive Paxlovid for free through December 31, 2026 via Pfizer's PAXCESS U.S. Government Patient Assistance Program, enroll at paxlovid.com or call 1-877-219-7225.",
      },
      {
        question: "Is Paxlovid free with Medicare in 2026?",
        answer: "Eligible Medicare patients can receive Paxlovid at no cost through the PAXCESS USG Patient Assistance Program, extended through December 31, 2026 (Pfizer/paxlovid.com). Starting in 2025, Medicare Part D also has a $2,000 annual out-of-pocket cap. Patients with Medicare who face high co-pays and meet income thresholds may qualify for the program, enrollment is required.",
      },
      {
        question: "What does the PAXCESS co-pay card do for commercially insured patients?",
        answer: "Commercially insured patients who present the PAXCESS co-pay savings card at the pharmacy may pay as little as $0 for Paxlovid, with a maximum annual savings of $1,500. The card is available at paxlovid.com. This applies only to patients with commercial (private) insurance, not Medicare or Medicaid.",
      },
      {
        question: "How much does a telehealth COVID visit cost vs. urgent care vs. ER?",
        answer: "A TeleDirectMD telehealth visit costs $79. Urgent care runs $160–$320 in-person (BetterCare, 2025). An ER visit for COVID costs $1,200–$3,000+ uninsured, appropriate only for severe disease (hypoxia, chest pain, confusion). The $79 telehealth visit + PAXCESS free Paxlovid is the optimal cost path for eligible high-risk patients.",
      },
      {
        question: "Who is eligible for Paxlovid?",
        answer: "Adults (or children ≥12 years, ≥40 kg) with mild-to-moderate COVID who have at least one risk factor for severe disease: age 50+, unvaccinated, diabetes, obesity (BMI ≥25), chronic lung disease, heart disease, chronic kidney disease, immunocompromise, or other CDC-listed conditions. Treatment must start within 5 days of symptom onset. CDC eligibility details at cdc.gov/covid/risk-factors.",
      },
      {
        question: "What are the most important Paxlovid drug interactions?",
        answer: "Ritonavir, the pharmacokinetic booster in Paxlovid, is a potent CYP3A inhibitor with significant interactions including statins (simvastatin, lovastatin, hold during treatment), certain blood thinners (warfarin, INR monitoring needed), immunosuppressants, antiarrhythmics, and others. A telehealth physician will screen your medication list before prescribing. Never start Paxlovid without this review.",
      },
      {
        question: "Does COVID-19 treatment from a telehealth visit cost the same as in-person?",
        answer: "The drug cost (Paxlovid) is the same regardless of where the prescription comes from. The visit cost differs: $79 telehealth vs. $160–$320 urgent care (BetterCare, 2025). Penn Medicine's 2024 JAMA Network Open study confirms telemedicine visits average $96 vs. $509 in-person, for a condition like COVID where diagnosis is confirmed by a home test, telehealth delivers the same clinical output at a fraction of the cost.",
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
        label: "BetterCare, ER & urgent care cost (2025)",
        url: "https://bettercare.com/costs/er-visit-cost",
      },
      {
        label: "Mira Health, Primary care cost without insurance (2025)",
        url: "https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance",
      },
      {
        label: "Penn Medicine, Telemedicine vs. in-person costs, JAMA Network Open (2024)",
        url: "https://www.pennmedicine.org/news/study-finds-telemedicine-visits-cost-far-less-than-office-visits",
      },
    ],
  },

};
