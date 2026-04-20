// ─────────────────────────────────────────────────────────────────────────────
// TeleDirectMD — Central Insurance Configuration
// Single source of truth for all /insurance/* pages
// Last updated: April 2026
// ─────────────────────────────────────────────────────────────────────────────

export const INSURERS = {
  aetna: {
    id: "aetna",
    name: "Aetna",
    fullName: "Aetna",
    slug: "aetna",
    logo: "/logos/aetna.svg",
    color: "#7B2CBF",
    colorLight: "#F3EAFF",
    tagline: "Commercial & Medicare Advantage plans accepted",
    description: "Aetna is one of the nation's largest health insurers, offering commercial, Medicare Advantage, and marketplace plans. TeleDirectMD is in-network with Aetna commercial plans in 10 states.",
    states: ["AZ","CO","FL","GA","IL","MI","MN","OH","PA","TN"],
    planTypes: ["Commercial plans", "Employer-sponsored plans", "Individual & Family Plans"],
    notAccepted: ["Medicaid","Medicare fee-for-service","Aetna Better Health (Medicaid)"],
    metaTitle: "Online Doctor That Accepts Aetna Insurance | TeleDirectMD",
    metaDescription: "TeleDirectMD accepts Aetna insurance in 10 states. Board-certified physician. Video visits for UTI, sinus, asthma, hypertension & more. Check your state coverage.",
    h1: "Online Doctor Visits Covered by Aetna",
    heroSubtitle: "TeleDirectMD is in-network with Aetna commercial plans in Arizona, Colorado, Florida, Georgia, Illinois, Michigan, Minnesota, Ohio, Pennsylvania, and Tennessee.",
    faqSlug: "aetna",
  },
  "blue-cross-blue-shield": {
    id: "blue-cross-blue-shield",
    name: "Blue Cross Blue Shield",
    fullName: "Blue Cross Blue Shield",
    slug: "blue-cross-blue-shield",
    logo: "/logos/anthem-bcbs.svg",
    color: "#1A5FB4",
    colorLight: "#EAF2FF",
    tagline: "Select BCBS plans accepted in 5 states",
    description: "Blue Cross Blue Shield plans vary by state affiliate. TeleDirectMD is in-network with Florida Blue, Anthem BCBS (Georgia), BCBS of Illinois, Highmark BCBS (Pennsylvania), and BCBS of Texas.",
    states: ["FL","GA","IL","PA","TX"],
    stateAffiliates: {
      FL: "Florida Blue",
      GA: "Anthem Blue Cross Blue Shield",
      IL: "Blue Cross Blue Shield of Illinois",
      PA: "Highmark Blue Cross Blue Shield",
      TX: "Blue Cross Blue Shield of Texas",
    },
    planTypes: ["Commercial plans","Group plans","Individual & Family Plans","PPO","HMO","Blue Advantage"],
    notAccepted: ["Medicaid managed care (BCBS brand)","Federal Employee Program (FEP)","BlueCard out-of-network"],
    metaTitle: "Online Doctor That Accepts Blue Cross Blue Shield | TeleDirectMD",
    metaDescription: "TeleDirectMD accepts BCBS plans in Florida, Georgia, Illinois, Pennsylvania & Texas. Board-certified physician. Video visits for urgent care, chronic refills & more.",
    h1: "Online Doctor Visits Covered by Blue Cross Blue Shield",
    heroSubtitle: "TeleDirectMD is in-network with select Blue Cross Blue Shield affiliates in Florida, Georgia, Illinois, Pennsylvania, and Texas.",
    faqSlug: "bcbs",
  },
  "united-healthcare": {
    id: "united-healthcare",
    name: "UnitedHealthcare",
    fullName: "UnitedHealthcare",
    slug: "united-healthcare",
    logo: "/logos/unitedhealthcare.svg",
    color: "#1A7A3A",
    colorLight: "#E6FFF0",
    tagline: "Commercial UHC plans accepted in 11 states",
    description: "UnitedHealthcare is the largest health insurer in the United States. TeleDirectMD is in-network with UHC commercial plans in 11 states, including major markets like Georgia, Ohio, Pennsylvania, and Illinois.",
    states: ["CO","GA","IL","MN","NC","NJ","OH","OK","PA","TN","WA"],
    planTypes: ["Commercial plans","Employer-sponsored plans","UnitedHealthcare Choice","UnitedHealthcare Options PPO"],
    notAccepted: ["Medicaid (UnitedHealthcare Community Plan)","Medicare fee-for-service","AARP Medicare Advantage"],
    metaTitle: "Online Doctor That Accepts UnitedHealthcare | TeleDirectMD",
    metaDescription: "TeleDirectMD accepts UnitedHealthcare commercial plans in 11 states. Board-certified physician. Same-day video visits for UTI, sinus infection, hypertension & more.",
    h1: "Online Doctor Visits Covered by UnitedHealthcare",
    heroSubtitle: "TeleDirectMD is in-network with UnitedHealthcare commercial plans in Colorado, Georgia, Illinois, Minnesota, North Carolina, New Jersey, Ohio, Oklahoma, Pennsylvania, Tennessee, and Washington.",
    faqSlug: "uhc",
  },
};

export const STATE_NAMES = {
  AZ:"Arizona", CO:"Colorado", FL:"Florida", GA:"Georgia", IL:"Illinois",
  MI:"Michigan", MN:"Minnesota", NC:"North Carolina", NJ:"New Jersey",
  OH:"Ohio", OK:"Oklahoma", PA:"Pennsylvania", TN:"Tennessee", TX:"Texas", WA:"Washington",
  AL:"Alabama", CA:"California", CT:"Connecticut", DC:"District of Columbia",
  DE:"Delaware", HI:"Hawaii", ID:"Idaho", IN:"Indiana", IA:"Iowa", KS:"Kansas",
  KY:"Kentucky", LA:"Louisiana", ME:"Maine", MD:"Maryland", MS:"Mississippi",
  MO:"Missouri", MT:"Montana", NE:"Nebraska", NV:"Nevada", NH:"New Hampshire",
  ND:"North Dakota", SC:"South Carolina", SD:"South Dakota", UT:"Utah",
  WV:"West Virginia", WI:"Wisconsin", WY:"Wyoming",
};

// All states where TeleDirectMD operates (licensed)
export const TDMD_STATES = [
  "AL","AZ","CO","CT","DC","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY",
  "LA","ME","MD","MI","MN","MS","MO","MT","NC","NE","NV","NH","NJ","ND","OH",
  "OK","PA","SC","SD","TN","TX","UT","WA","WV","WI","WY"
];

// Insurance-active states (any insurer)
export const INSURANCE_STATES = ["AZ","CO","FL","GA","IL","MI","MN","NC","NJ","OH","OK","PA","TN","TX","WA"];

// Top conditions for insurance pages (slug → display name, mapped to existing condition pages)
export const INSURANCE_CONDITIONS = {
  "uti-treatment": {
    slug: "uti-treatment",
    name: "UTI Treatment",
    conditionPageSlug: "uti-treatment-online",
    displayName: "Urinary Tract Infection (UTI)",
    shortDesc: "Same-day treatment for UTI symptoms. Prescription sent to your pharmacy.",
    icd10: "N39.0",
    covered: true,
    keywords: ["UTI online doctor", "UTI telemedicine", "urinary tract infection virtual visit"],
  },
  "sinus-infection": {
    slug: "sinus-infection",
    name: "Sinus Infection",
    conditionPageSlug: "sinus-infection-treatment-online",
    displayName: "Sinus Infection (Sinusitis)",
    shortDesc: "Video visit for sinus pressure, congestion, and facial pain.",
    icd10: "J32.9",
    covered: true,
    keywords: ["sinus infection online doctor", "sinusitis telemedicine", "sinus virtual visit"],
  },
  "strep-throat": {
    slug: "strep-throat",
    name: "Strep Throat",
    conditionPageSlug: "strep-throat-treatment-online",
    displayName: "Strep Throat",
    shortDesc: "Evaluation and antibiotic prescription for strep throat symptoms.",
    icd10: "J02.0",
    covered: true,
    keywords: ["strep throat online doctor", "strep telemedicine", "strep throat virtual visit"],
  },
  "pink-eye": {
    slug: "pink-eye",
    name: "Pink Eye",
    conditionPageSlug: "pink-eye-treatment-online",
    displayName: "Pink Eye (Conjunctivitis)",
    shortDesc: "Virtual evaluation and prescription eye drops for pink eye.",
    icd10: "H10.9",
    covered: true,
    keywords: ["pink eye online doctor", "conjunctivitis telemedicine"],
  },
  "ear-infection": {
    slug: "ear-infection",
    name: "Ear Infection",
    conditionPageSlug: "ear-pain-treatment-online",
    displayName: "Ear Infection / Ear Pain",
    shortDesc: "Video visit for ear pain, pressure, and infection symptoms.",
    icd10: "H66.9",
    covered: true,
    keywords: ["ear infection online doctor", "ear pain telemedicine"],
  },
  "asthma-refill": {
    slug: "asthma-refill",
    name: "Asthma Refills",
    conditionPageSlug: "asthma-refills-online",
    displayName: "Asthma Inhaler Refills",
    shortDesc: "Refill your asthma maintenance inhaler without an in-person visit.",
    icd10: "J45.9",
    covered: true,
    keywords: ["asthma inhaler refill online", "asthma telemedicine", "albuterol refill online"],
  },
  "hypertension-refill": {
    slug: "hypertension-refill",
    name: "Hypertension Refills",
    conditionPageSlug: "hypertension-refills-online",
    displayName: "High Blood Pressure (Hypertension) Refills",
    shortDesc: "Medication refills for stable, well-controlled hypertension.",
    icd10: "I10",
    covered: true,
    keywords: ["blood pressure medication refill online", "hypertension telemedicine"],
  },
  "acid-reflux": {
    slug: "acid-reflux",
    name: "Acid Reflux / GERD",
    conditionPageSlug: "acid-reflux-refills-online",
    displayName: "Acid Reflux / GERD",
    shortDesc: "Prescription-strength acid reflux treatment and medication refills.",
    icd10: "K21.9",
    covered: true,
    keywords: ["acid reflux online doctor", "GERD telemedicine", "omeprazole refill online"],
  },
  "flu-treatment": {
    slug: "flu-treatment",
    name: "Flu Treatment",
    conditionPageSlug: "flu-treatment-online",
    displayName: "Influenza (Flu)",
    shortDesc: "Antiviral prescription and symptom management for flu.",
    icd10: "J11.1",
    covered: true,
    keywords: ["flu online doctor", "influenza telemedicine", "Tamiflu online"],
  },
  "yeast-infection": {
    slug: "yeast-infection",
    name: "Yeast Infection",
    conditionPageSlug: "yeast-infection-treatment-online",
    displayName: "Vaginal Yeast Infection",
    shortDesc: "Fast online treatment for yeast infection without an in-person visit.",
    icd10: "B37.3",
    covered: true,
    keywords: ["yeast infection online doctor", "yeast infection telemedicine"],
  },
};

// State-specific insurance detail lookup
export const STATE_INSURANCE_MAP = {
  AZ: { insurers: ["aetna"], population: 7431000, priority: "medium" },
  CO: { insurers: ["aetna","united-healthcare"], population: 5839000, priority: "medium" },
  FL: { insurers: ["aetna","blue-cross-blue-shield"], population: 22610000, priority: "high" },
  GA: { insurers: ["aetna","blue-cross-blue-shield","united-healthcare"], population: 10912000, priority: "high" },
  IL: { insurers: ["aetna","blue-cross-blue-shield","united-healthcare"], population: 12582000, priority: "high" },
  MI: { insurers: ["aetna"], population: 10034000, priority: "medium" },
  MN: { insurers: ["aetna","united-healthcare"], population: 5706000, priority: "medium" },
  NC: { insurers: ["united-healthcare"], population: 10699000, priority: "high" },
  NJ: { insurers: ["united-healthcare"], population: 9290000, priority: "medium" },
  OH: { insurers: ["aetna","united-healthcare"], population: 11800000, priority: "high" },
  OK: { insurers: ["united-healthcare"], population: 4020000, priority: "low" },
  PA: { insurers: ["aetna","blue-cross-blue-shield","united-healthcare"], population: 12972000, priority: "high" },
  TN: { insurers: ["aetna","united-healthcare"], population: 7052000, priority: "medium" },
  TX: { insurers: ["blue-cross-blue-shield"], population: 30030000, priority: "high" },
  WA: { insurers: ["united-healthcare"], population: 7886000, priority: "medium" },
};

// Brand colors — mirror of InsuranceClient.js B object
export const B = {
  teal: "#006B73", tealLight: "#008C96", navy: "#003E52", navyDeep: "#002A3A",
  navyDarker: "#001E2B", accent: "#FF5A36", accentHover: "#ff704e",
  white: "#FFFFFF", bg: "#F5FAFA", text: "#4A6870",
  border: "rgba(0,62,82,0.10)", shadow: "0 4px 20px rgba(0,35,45,0.06)",
  shadowLg: "0 8px 32px rgba(0,35,45,0.08)", r: 20, rs: 12,
  fd: "'Fraunces', Georgia, serif", fb: "'DM Sans', Montserrat, system-ui, sans-serif",
};
