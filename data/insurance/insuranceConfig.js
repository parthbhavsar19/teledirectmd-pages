// ─────────────────────────────────────────────────────────────────────────────
// TeleDirectMD — Central Insurance Configuration
// Single source of truth for all /insurance/* pages
// Last verified: May 2026
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
    tagline: "Commercial & Medicare Advantage plans accepted in 13 states",
    description: "Aetna is one of the nation's largest health insurers, offering commercial, Medicare Advantage, and marketplace plans. TeleDirectMD is in-network with Aetna commercial PPO, HMO, EPO, POS, and Medicare Advantage plans in 13 states. California excludes HMO and QPOS plans.",
    // States synced 2026-06-18 from lib/insurance-data.js insuranceByState (Aetna family).
    // Source of truth: Payor Enrollment Tracking Sheet + Notion DB.
    states: ["AZ", "CA", "CO", "FL", "GA", "IL", "LA", "MI", "MN", "NC", "OH", "PA", "TN"],
    planTypes: ["PPO", "HMO", "EPO", "POS", "Medicare Advantage", "Employer-sponsored plans", "Individual & Family Plans"],
    notAccepted: ["Medicaid","Managed Medicaid","CHIP","Medicare-Medicaid (MME)","Dual Special Needs Plan (D-SNP)","Aetna Better Health (Medicaid)","HMO and QPOS in California"],
    memberPortal: "https://www.aetna.com/individuals-families/member-rights-resources/find-a-form.html",
    providerDirectory: "https://www.aetna.com/dsepublic/#/contentPage?page=providerSearchLanding",
    billingCodes: ["99213","99214"],
    claimsPhone: "1-888-632-3862",
    metaTitle: "Online Doctor That Accepts Aetna Insurance | TeleDirectMD",
    metaDescription: "TeleDirectMD accepts Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in 13 states. Board-certified physician. Video visits for UTI, sinus, asthma, hypertension & more. Check your state coverage.",
    h1: "Online Doctor Visits Covered by Aetna",
    heroSubtitle: "TeleDirectMD is in-network with Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in Arizona, California, Colorado, Florida, Georgia, Illinois, Louisiana, Michigan, Minnesota, North Carolina, Ohio, Pennsylvania, and Tennessee.",
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
    tagline: "Select BCBS-family plans accepted in 5 states",
    description: "Blue Cross Blue Shield plans vary by state affiliate. TeleDirectMD is in-network with Florida Blue, Anthem BCBS (Georgia), BCBS of Illinois, Highmark BCBS (Pennsylvania), and BCBS of Texas.",
    states: ["FL","GA","IL","PA","TX"],
    affiliates: {
      FL: "Florida Blue",
      GA: "Anthem Blue Cross Blue Shield",
      IL: "Blue Cross Blue Shield of Illinois",
      PA: "Highmark Blue Cross Blue Shield",
      TX: "Blue Cross Blue Shield of Texas",
    },
    memberPortals: {
      FL: "https://member.floridablue.com",
      GA: "https://www.anthem.com/find-care/",
      IL: "https://www.bcbsil.com/member",
      PA: "https://www.highmarkbcbs.com/member-center/",
      TX: "https://www.bcbstx.com/member",
    },
    providerDirectory: "https://www.bcbs.com/find-a-doctor",
    billingCodes: ["99213","99214"],
    claimsPhone: "See member card",
    planTypes: ["PPO","HMO","EPO","POS","Medicare Advantage","Group plans","Individual & Family Plans","Blue Advantage HMO","Blue Choice PPO"],
    notAccepted: ["Medicaid","Managed Medicaid","CHIP","Medicare-Medicaid (MME)","Dual Special Needs Plan (D-SNP)","Federal Employee Program (FEP)","BlueCard out-of-network"],
    metaTitle: "Online Doctor That Accepts Blue Cross Blue Shield | TeleDirectMD",
    metaDescription: "TeleDirectMD accepts Blue Cross Blue Shield-family plans (Florida Blue, Anthem GA, BCBS-IL, Highmark PA, BCBS-TX) in 5 states. PPO, HMO, EPO, POS, and Medicare Advantage. Board-certified physician.",
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
    tagline: "UHC plans accepted in 17 states",
    description: "UnitedHealthcare is the largest health insurer in the United States. TeleDirectMD is in-network with UHC PPO, HMO, EPO, POS, and Medicare Advantage plans in 17 states. Illinois, Minnesota, and Texas are Commercial-only (Medicare Advantage not in-network in those three states).",
    // 2026-06-12: TX added — UnitedHealthcare is active in TX per lib/insurance-data.js
    // insuranceByState['TX']. Config was lagging the source of truth.
    // States synced 2026-06-18 from lib/insurance-data.js insuranceByState (UHC family).
    states: ["AZ", "CA", "CO", "FL", "GA", "IL", "LA", "MI", "MN", "NC", "NJ", "OH", "OK", "PA", "TN", "TX", "WA"],
    planTypes: ["Commercial plans","Employer-sponsored plans","UnitedHealthcare Choice","UnitedHealthcare Options PPO"],
    notAccepted: ["Medicaid","Managed Medicaid","CHIP","Medicare-Medicaid (MME)","Dual Special Needs Plan (D-SNP)","UnitedHealthcare Community Plan (Medicaid)","Navigate / Charter / Colorado Doctors Plan (narrow networks)","Individual Exchange (ACA Marketplace)","Medicare Advantage in IL, MN, and TX (commercial-only contracts)"],
    memberPortal: "https://www.myuhc.com",
    providerDirectory: "https://www.uhcprovider.com/en/provider-data/admin-guides/physician-directory.html",
    billingCodes: ["99213","99214"],
    claimsPhone: "1-866-892-9993",
    metaTitle: "Online Doctor That Accepts UnitedHealthcare | TeleDirectMD",
    metaDescription: "TeleDirectMD accepts UnitedHealthcare PPO, HMO, EPO, POS, and Medicare Advantage plans in 17 states. Board-certified physician. Same-day video visits for UTI, sinus infection, hypertension & more.",
    h1: "Online Doctor Visits Covered by UnitedHealthcare",
    heroSubtitle: "TeleDirectMD is in-network with UnitedHealthcare PPO, HMO, EPO, POS, and Medicare Advantage plans in Arizona, California, Colorado, Florida, Georgia, Illinois, Louisiana, Michigan, Minnesota, North Carolina, New Jersey, Ohio, Oklahoma, Pennsylvania, Tennessee, Texas, and Washington. Medicare Advantage is not in-network in Illinois, Minnesota, or Texas.",
    faqSlug: "uhc",
  },
  curative: {
    id: "curative",
    name: "Curative",
    fullName: "Curative Insurance Company",
    slug: "curative",
    logo: "/logos/curative.svg",
    color: "#0B6E99",
    colorLight: "#E7F4FA",
    tagline: "Curative employer plans accepted in 38 states",
    description: "Curative is an employer-sponsored health plan built around a no-copay, no-deductible design for members who complete their annual Baseline Visit. TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans under a national provider agreement effective July 7, 2026, in every state where Parth Bhavsar, MD holds an active license.",
    // National agreement. Mirrors the enabled roster in CURATIVE_STATES below, kept
    // literal here because INSURERS is defined before that constant.
    states: ["AL", "AZ", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MD", "ME", "MI", "MN", "MO", "MT", "NC", "ND", "NE", "NH", "NJ", "NV", "OH", "OK", "PA", "SC", "SD", "TN", "TX", "UT", "WA", "WI"],
    // Curative pages are hub + state only. No insurer x condition matrix pages
    // exist for this payer, so the sitemap must skip the condition loops.
    conditionMatrix: false,
    planTypes: ["Commercial PPO", "Commercial EPO", "Self-Funded plans", "EPO Value", "EPO (PPOx)", "PPO (PPO+)", "PPO Max"],
    notAccepted: ["Medicaid", "Managed Medicaid", "CHIP", "Medicare-Medicaid (MME)", "Dual Special Needs Plan (D-SNP)", "Medicare Advantage", "HMO"],
    memberPortal: "https://curative.com",
    providerDirectory: "https://curative.com",
    billingCodes: ["99213", "99214"],
    claimsPhone: "See member card",
    metaTitle: "Online Doctor That Accepts Curative Insurance | TeleDirectMD",
    metaDescription: "TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in 38 states. Members who complete their Baseline Visit pay $0 for a virtual visit. $79 flat self-pay always available.",
    h1: "Online Doctor Visits Covered by Curative",
    heroSubtitle: "TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in 38 states under a national provider agreement effective July 7, 2026.",
    faqSlug: "curative",
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
  VA:"Virginia", WV:"West Virginia", WI:"Wisconsin", WY:"Wyoming",
};

// All states where TeleDirectMD operates (licensed)
export const TDMD_STATES = [
  "AL","AZ","CO","CT","DC","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY",
  "LA","ME","MD","MI","MN","MS","MO","MT","NC","NE","NV","NH","NJ","ND","OH",
  "OK","PA","SC","SD","TN","TX","UT","VA","WA","WV","WI","WY"
];

// Insurance-active states (any insurer)
export const INSURANCE_STATES = ["AZ","CA","CO","FL","GA","IL","MI","MN","NC","NJ","OH","PA","TN","TX","WA"];

// ─── Copay data: real ranges from published plan documents, May 2026 ─────────
// Format: { typical: "$X–$Y", employer: "often $0", note: "..." }
export const COPAY_DATA = {
  aetna: {
    AZ: { typical: "$10–$40", employer: "Often $0–$15 for employer plans", note: "Aetna Arizona commercial telehealth copays are set per plan. HSA-qualified plans apply deductible first." },
    CA: { typical: "$10–$40", employer: "Often $0–$20 for employer plans", note: "California's strong telehealth parity laws keep Aetna telehealth copays comparable to in-person office visits. HMO and PPO plans both covered." },
    CO: { typical: "$10–$35", employer: "Often $0–$15 for employer plans", note: "Aetna Colorado commercial plans typically have telehealth copays below the in-person specialist rate." },
    FL: { typical: "$10–$40", employer: "Often $0–$20 for employer plans", note: "Florida mandates telehealth parity, so Aetna Florida telehealth copays match your office visit copay." },
    GA: { typical: "$0–$30", employer: "Often $0 for employer plans", note: "Georgia is TeleDirectMD's home state. Aetna Georgia plans frequently carry $0 telehealth copays for employers." },
    IL: { typical: "$10–$35", employer: "Often $0–$15 for employer plans", note: "Illinois telehealth parity law applies. Most Aetna Illinois commercial plans match office copay for telehealth." },
    MI: { typical: "$10–$40", employer: "Often $0–$20 for employer plans", note: "Michigan has telehealth parity regulations. Check your Aetna member portal for your exact cost." },
    MN: { typical: "$5–$35", employer: "Often $0–$10 for employer plans", note: "Minnesota's robust telehealth laws result in competitive Aetna telehealth copays in most commercial plans." },
    OH: { typical: "$10–$40", employer: "Often $0–$20 for employer plans", note: "Ohio Aetna commercial plans often feature reduced telehealth copays vs. in-person visits." },
    PA: { typical: "$5–$35", employer: "Often $0–$15 for employer plans", note: "Pennsylvania telehealth parity applies. Aetna PA commercial plans mirror your office copay for telehealth." },
    TN: { typical: "$10–$40", employer: "Often $0–$20 for employer plans", note: "Tennessee Aetna commercial telehealth copays vary widely by employer plan. Verify at aetna.com." },
  },
  "blue-cross-blue-shield": {
    FL: { typical: "$0–$30", employer: "Often $0 for employer plans", note: "Florida Blue offers strong telehealth benefits. Many Florida Blue employer plans carry $0 telehealth copays." },
    GA: { typical: "$5–$35", employer: "Often $0–$15 for employer plans", note: "Anthem BCBS Georgia commercial plans typically include competitive telehealth copays through Blue Distinction." },
    IL: { typical: "$10–$35", employer: "Often $0–$15 for employer plans", note: "BCBS of Illinois is the dominant employer plan insurer in the Chicago market. Telehealth copays often match or beat office visit rates." },
    PA: { typical: "$0–$30", employer: "Often $0 for employer plans", note: "Highmark BCBS Pennsylvania frequently offers $0 telehealth copays for commercial employer plans in the Pittsburgh and Philadelphia markets." },
    TX: { typical: "$10–$40", employer: "Often $0–$20 for employer plans", note: "BCBS of Texas is the state's largest insurer. Telehealth copays vary by employer plan tier. Verify at bcbstx.com." },
  },
  "united-healthcare": {
    CO: { typical: "$0–$30", employer: "Often $0 for employer plans", note: "UHC Colorado commercial plans commonly include $0 Virtual Care visits. Verify at myuhc.com." },
    GA: { typical: "$0–$25", employer: "Often $0 for employer plans", note: "UHC Georgia is a major employer plan insurer. Virtual Care benefits frequently carry $0 copay for established conditions." },
    IL: { typical: "$0–$30", employer: "Often $0 for employer plans", note: "UHC Illinois employer plans often feature $0 telehealth. One of the strongest UHC virtual care markets." },
    MN: { typical: "$0–$20", employer: "Often $0 for employer plans", note: "UHC is headquartered in Minnesota. UHC MN commercial plans frequently offer the most generous telehealth benefits of any state." },
    NC: { typical: "$5–$35", employer: "Often $0–$15 for employer plans", note: "UHC North Carolina has strong Research Triangle employer plan penetration. Telehealth copays are competitive." },
    NJ: { typical: "$10–$40", employer: "Often $0–$20 for employer plans", note: "UHC New Jersey employer plans are common in the NJ/NY metro corridor. Verify your plan's telehealth benefit at myuhc.com." },
    OH: { typical: "$0–$30", employer: "Often $0 for employer plans", note: "UHC Ohio commercial plans frequently carry $0 virtual care copays for established employer relationships." },
    PA: { typical: "$0–$30", employer: "Often $0 for employer plans", note: "UHC Pennsylvania is one of three in-network insurers at TeleDirectMD. Employer plans often include $0 virtual care." },
    TN: { typical: "$5–$35", employer: "Often $0–$15 for employer plans", note: "UHC Tennessee is strong in the Nashville employer market. Virtual Care benefits frequently $0 for large employer plans." },
    WA: { typical: "$0–$25", employer: "Often $0 for employer plans", note: "UHC Washington has excellent telehealth benefits for tech-sector employer plans in the Seattle–Bellevue corridor." },
  },
  // Curative cost sharing is set by the contract, not by state. See CURATIVE_PLAN_DETAIL.
};

// ─── State-specific contracted plan detail ───────────────────────────────────
// When a state has a known contract effective date and a verified list of
// contracted plan families, surface them on the insurer x state page for
// both visible content and HealthInsurancePlan schema. Keyed by insurer slug
// then state code. Add new entries only with verified contract data.
export const STATE_PLAN_DETAILS = {
  aetna: {
    CA: {
      effectiveDate: "April 30, 2026",
      effectiveDateISO: "2026-04-30",
      productLines: ["Commercial PPO", "Commercial EPO", "Commercial POS"],
      excludedLines: ["Medi-Cal (Medicaid)", "HMO", "QPOS", "Medicare Advantage"],
      plans: [
        { name: "Aetna Choice POS II (Open Access)", productType: "POS" },
        { name: "Aetna Open Access Managed Choice EPO", productType: "EPO" },
        { name: "Aetna Elect Choice EPO", productType: "EPO" },
        { name: "Aetna Open Choice PPO", productType: "PPO" },
        { name: "Aetna Signature Administrators PPO", productType: "PPO" },
        { name: "Aetna Premier Care Network / Aexcel", productType: "PPO" },
        { name: "Aetna Whole Health", productType: "PPO" },
        { name: "Aetna HealthFund / HDHP", productType: "PPO" },
        { name: "Innovation Health (Aetna)", productType: "PPO" },
        { name: "Meritain Health (Aetna)", productType: "PPO" },
        { name: "Allied Benefit Systems (Aetna)", productType: "PPO" },
        { name: "Aetna Funding Advantage / Leap", productType: "PPO" },
      ],
      note: "Aetna California commercial network — contracted effective April 30, 2026. Plan acceptance is subject to your specific plan benefits and network tier. Self-pay $79 is always available.",
    },
  },
};

// ─── Curative plan and cost detail (payer level, not per state) ──────────────
// The Curative contract sets participating networks and cost sharing nationally.
// Inventing per-state variation here would be fabrication, so these live once.
export const CURATIVE_PLAN_DETAIL = {
  productLines: ["Commercial PPO", "Commercial EPO", "Self-Funded plans"],
  excludedLines: ["Medicaid", "Managed Medicaid", "CHIP", "Medicare-Medicaid (MME)", "Dual Special Needs Plan (D-SNP)", "Medicare Advantage", "HMO"],
  plans: [
    { name: "Curative EPO Value", productType: "EPO" },
    { name: "Curative EPO (PPOx)", productType: "EPO" },
    { name: "Curative PPO (PPO+)", productType: "PPO" },
    { name: "Curative PPO Max", productType: "PPO" },
  ],
  copay: {
    typical: "$0 after Baseline Visit",
    employer: "$0 for members who complete the Baseline Visit",
    note: "Curative members who complete their annual Baseline Visit within 120 days of the plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including virtual visits. Members who have not completed the Baseline Visit are subject to their plan deductible (for example, $5,000 individual and $10,000 family on the EPO product).",
  },
};

// ─── Curative state enablement ───────────────────────────────────────────────
// Adding a state here (with enabled: true) is the only change required to ship
// a new /insurance/curative/{state}/ page. The route's generateStaticParams and
// the sitemap both read this map.
//
// Curative Network Contracting confirmed in writing on 2026-07-26 that the
// TeleDirectMD provider agreement is national: in-network for Curative members in
// every state where Dr. Bhavsar holds an active license. The roster below is the
// intersection of that agreement with data/state-licenses.json.
//
// Not enabled, and why (each is a licensure or positioning fact in this repo, not
// a gap in the Curative contract):
//   MS, WV, WY  state-licenses.json records dateExpires 2026-06-30 with no renewal
//               on file, so active licensure cannot be affirmed today.
//   VT, VA, DE  deliberate cash-pay-only positioning. VT is intentionally absent
//               from insuranceByState, VA is a demand-gated cash-pay pilot, and the
//               Delaware state template asserts self-pay-only in narrative copy.
//
// slug     URL segment for /insurance/curative/{slug}/
// slugAbbr key into data/state-licenses.json and data/states.json, and the prefix
//          for /{slugAbbr}/{condition}/ condition links
export const CURATIVE_STATES = {
  AL: { enabled: true, slug: "alabama", slugAbbr: "al", name: "Alabama", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  AZ: { enabled: true, slug: "arizona", slugAbbr: "az", name: "Arizona", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  CA: { enabled: true, slug: "california", slugAbbr: "ca", name: "California", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  CO: { enabled: true, slug: "colorado", slugAbbr: "co", name: "Colorado", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  CT: { enabled: true, slug: "connecticut", slugAbbr: "ct", name: "Connecticut", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  DC: { enabled: true, slug: "washington-dc", slugAbbr: "dc", name: "Washington D.C.", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  FL: { enabled: true, slug: "florida", slugAbbr: "fl", name: "Florida", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  GA: { enabled: true, slug: "georgia", slugAbbr: "ga", name: "Georgia", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07", credentialingConfirmed: "July 24, 2026" },
  HI: { enabled: true, slug: "hawaii", slugAbbr: "hi", name: "Hawaii", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  IA: { enabled: true, slug: "iowa", slugAbbr: "ia", name: "Iowa", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  ID: { enabled: true, slug: "idaho", slugAbbr: "id", name: "Idaho", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  IL: { enabled: true, slug: "illinois", slugAbbr: "il", name: "Illinois", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  IN: { enabled: true, slug: "indiana", slugAbbr: "in", name: "Indiana", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  KS: { enabled: true, slug: "kansas", slugAbbr: "ks", name: "Kansas", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  KY: { enabled: true, slug: "kentucky", slugAbbr: "ky", name: "Kentucky", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  LA: { enabled: true, slug: "louisiana", slugAbbr: "la", name: "Louisiana", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  MD: { enabled: true, slug: "maryland", slugAbbr: "md", name: "Maryland", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  ME: { enabled: true, slug: "maine", slugAbbr: "me", name: "Maine", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  MI: { enabled: true, slug: "michigan", slugAbbr: "mi", name: "Michigan", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  MN: { enabled: true, slug: "minnesota", slugAbbr: "mn", name: "Minnesota", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  MO: { enabled: true, slug: "missouri", slugAbbr: "mo", name: "Missouri", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  MT: { enabled: true, slug: "montana", slugAbbr: "mt", name: "Montana", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  NC: { enabled: true, slug: "north-carolina", slugAbbr: "nc", name: "North Carolina", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  ND: { enabled: true, slug: "north-dakota", slugAbbr: "nd", name: "North Dakota", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  NE: { enabled: true, slug: "nebraska", slugAbbr: "ne", name: "Nebraska", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  NH: { enabled: true, slug: "new-hampshire", slugAbbr: "nh", name: "New Hampshire", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  NJ: { enabled: true, slug: "new-jersey", slugAbbr: "nj", name: "New Jersey", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  NV: { enabled: true, slug: "nevada", slugAbbr: "nv", name: "Nevada", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  OH: { enabled: true, slug: "ohio", slugAbbr: "oh", name: "Ohio", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  OK: { enabled: true, slug: "oklahoma", slugAbbr: "ok", name: "Oklahoma", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  PA: { enabled: true, slug: "pennsylvania", slugAbbr: "pa", name: "Pennsylvania", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  SC: { enabled: true, slug: "south-carolina", slugAbbr: "sc", name: "South Carolina", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  SD: { enabled: true, slug: "south-dakota", slugAbbr: "sd", name: "South Dakota", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  TN: { enabled: true, slug: "tennessee", slugAbbr: "tn", name: "Tennessee", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  TX: { enabled: true, slug: "texas", slugAbbr: "tx", name: "Texas", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  UT: { enabled: true, slug: "utah", slugAbbr: "ut", name: "Utah", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  WA: { enabled: true, slug: "washington", slugAbbr: "wa", name: "Washington", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
  WI: { enabled: true, slug: "wisconsin", slugAbbr: "wi", name: "Wisconsin", effectiveDate: "July 7, 2026", effectiveDateISO: "2026-07-07" },
};

/**
 * The nine jurisdictions carrying a state regulatory addendum under Exhibit D of
 * the provider agreement. Exhibit D conforms the contract to each state's
 * insurance code; it does NOT limit the agreement's reach, which is national.
 * Drives a materially different content block on those state pages.
 */
export const EXHIBIT_D_STATES = ["CA", "DC", "FL", "GA", "IN", "LA", "MD", "OH", "TX"];

/**
 * Provenance for the national-scope claim. Cited in visible copy wherever the
 * site asserts coverage beyond Georgia.
 */
export const CURATIVE_CONTRACT = {
  source: "Curative Network Contracting",
  confirmedDate: "July 26, 2026",
  confirmedDateISO: "2026-07-26",
  effectiveDate: "July 7, 2026",
  effectiveDateISO: "2026-07-07",
  scope: "National provider agreement, in-network in every state where the treating physician holds an active license.",
};
/**
 * State codes where Curative is live (config-driven, used by routes and sitemap).
 */
export function getCurativeStateCodes() {
  return Object.keys(CURATIVE_STATES).filter((code) => CURATIVE_STATES[code].enabled);
}

/**
 * URL slugs for an insurer's live state pages. Curative reads CURATIVE_STATES so
 * enabling a new state needs no sitemap or route code change.
 */
export function getInsurerStateSlugs(insurerId) {
  if (insurerId === "curative") {
    return getCurativeStateCodes().map((code) => CURATIVE_STATES[code].slug);
  }
  const insurer = INSURERS[insurerId];
  if (!insurer) return [];
  return (insurer.states || []).map((code) =>
    (STATE_NAMES[code] || code).toLowerCase().replace(/\s+/g, "-")
  );
}

// ─── Condition clinical data — clinical depth for matrix pages ───────────────
export const INSURANCE_CONDITIONS = {
  "uti-treatment": {
    slug: "uti-treatment",
    name: "UTI Treatment",
    conditionPageSlug: "uti-treatment-online",
    displayName: "Urinary Tract Infection (UTI)",
    shortDesc: "Same-day treatment for UTI symptoms. Prescription sent to your pharmacy.",
    icd10: "N39.0",
    covered: true,
    rxInfo: {
      typical: "Nitrofurantoin (Macrobid) 100mg twice daily × 5 days or trimethoprim-sulfamethoxazole (Bactrim DS) twice daily × 3 days",
      alternatives: "Fosfomycin 3g single dose for uncomplicated UTI",
      coveredByInsurance: "Yes — prescription drug benefit covers common UTI antibiotics. Generic nitrofurantoin typically $4–$15 at most pharmacies.",
      notes: "Antibiotics are prescribed only if clinical picture is consistent with bacterial UTI. Cultures not required for uncomplicated presentations.",
    },
    clinicalDepth: "UTI is one of the most common bacterial infections in adults, accounting for over 8 million physician visits annually in the US. Telehealth is validated for uncomplicated UTI diagnosis in non-pregnant adults. Symptoms typically include dysuria, frequency, urgency, and suprapubic discomfort without flank pain or fever (which would suggest upper tract involvement requiring in-person evaluation). Dr. Bhavsar evaluates symptom pattern, duration, prior UTI history, and any complicating factors before prescribing.",
    diagnosisMethod: "Clinical symptom evaluation via video. Urinalysis not required for uncomplicated presentations per IDSA guidelines. Urine culture recommended for recurrent UTI.",
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
    rxInfo: {
      typical: "Amoxicillin-clavulanate (Augmentin) 875mg twice daily × 5–7 days for bacterial sinusitis; nasal saline rinse + intranasal steroid for viral/mild cases",
      alternatives: "Doxycycline for penicillin-allergic patients; levofloxacin for severe cases",
      coveredByInsurance: "Yes — antibiotics and nasal sprays covered under pharmacy benefit. Generic amoxicillin-clavulanate typically $10–$25.",
      notes: "Most sinusitis (90%) is viral. Antibiotic prescribing follows AAFP/IDSA guidelines: symptoms > 10 days OR worsening after initial improvement OR severe symptoms with fever.",
    },
    clinicalDepth: "Acute sinusitis affects approximately 31 million Americans annually. Differentiating viral from bacterial sinusitis is critical — antibiotics are not appropriate for viral cases. Hallmarks of bacterial sinusitis include symptoms persisting beyond 10 days, double-worsening pattern (improvement then sudden deterioration), or severe presentation with temperature > 102°F and purulent nasal discharge. Telehealth is well-suited for sinusitis evaluation: Dr. Bhavsar assesses symptom duration, character, fever pattern, prior episodes, and allergy history.",
    diagnosisMethod: "Clinical history and symptom pattern via video. Facial inspection for swelling. Assessment of symptom duration, character, and severity markers per IDSA guidelines.",
    keywords: ["sinus infection online doctor", "sinusitis telemedicine", "sinus virtual visit"],
  },
  "strep-throat": {
    slug: "strep-throat",
    name: "Strep Throat",
    conditionPageSlug: "sore-throat-treatment-online",
    displayName: "Strep Throat",
    shortDesc: "Evaluation and antibiotic prescription for strep throat symptoms.",
    icd10: "J02.0",
    covered: true,
    rxInfo: {
      typical: "Amoxicillin 500mg twice daily × 10 days (first-line per IDSA); penicillin V 500mg twice daily × 10 days",
      alternatives: "Azithromycin 500mg day 1 then 250mg × 4 days for penicillin-allergic; cephalexin 500mg twice daily × 10 days",
      coveredByInsurance: "Yes — amoxicillin is a Tier 1 generic covered by virtually all commercial plans. Typically $4–$10 at major pharmacies.",
      notes: "Modified Centor score used to assess strep probability. Scores ≥ 3 support antibiotic prescribing without rapid test in telehealth setting.",
    },
    clinicalDepth: "Group A Streptococcal pharyngitis (strep throat) accounts for 15–30% of sore throat presentations in children and 5–15% in adults. The modified Centor/McIsaac score — incorporating tonsillar exudate, tender anterior cervical lymphadenopathy, absence of cough, and fever — guides clinical decision-making without requiring in-person rapid antigen testing. Telehealth management of strep throat is validated for adults with high-probability presentations. Untreated strep throat carries risk of rheumatic fever and peritonsillar abscess — early treatment is important.",
    diagnosisMethod: "Modified Centor score applied via video interview. Visual inspection of throat when possible. Assessment of exudate, lymph node tenderness, fever, and cough history.",
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
    rxInfo: {
      typical: "Ofloxacin 0.3% eye drops 1–2 drops every 6 hours × 7 days (bacterial); polymyxin B/trimethoprim drops for milder bacterial cases",
      alternatives: "Tobramycin eye drops; ciprofloxacin ophthalmic for contact lens wearers (higher Pseudomonas risk)",
      coveredByInsurance: "Yes — ophthalmic antibiotic drops covered under pharmacy benefit. Generic ofloxacin typically $15–$30.",
      notes: "Viral conjunctivitis (most common) does not require antibiotics. Bacterial conjunctivitis is suggested by purulent discharge, eyelid crusting, and bilateral or rapidly spreading presentation.",
    },
    clinicalDepth: "Conjunctivitis is one of the most common eye conditions in primary care, with over 6 million annual US cases. Telehealth is particularly well-suited for pink eye: visual presentation (redness pattern, discharge type, lid involvement) distinguishes bacterial from viral and allergic causes with high accuracy via video. Bacterial conjunctivitis is characterized by mucopurulent discharge, eyelid crusting on waking, and absence of significant itching. Viral conjunctivitis often follows URI and features watery discharge and preauricular lymphadenopathy. Allergic conjunctivitis presents with prominent bilateral itching.",
    diagnosisMethod: "Video examination of eye redness distribution, discharge character, lid involvement. Assessment of associated URI symptoms, contact lens use, allergen exposure, and recent sick contacts.",
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
    rxInfo: {
      typical: "Amoxicillin 500mg three times daily × 5–7 days for bacterial acute otitis media; ofloxacin otic drops for otitis externa (swimmer's ear)",
      alternatives: "Amoxicillin-clavulanate for treatment failure; ciprofloxacin-hydrocortisone otic drops for otitis externa with inflammation",
      coveredByInsurance: "Yes — antibiotics and otic drops covered under pharmacy benefit. Generic amoxicillin typically $4–$10.",
      notes: "Outer ear infection (otitis externa) vs. middle ear infection (otitis media) have different treatments. Telehealth clinical history allows high-accuracy differentiation.",
    },
    clinicalDepth: "Ear infections are among the most frequent primary care presentations. Otitis externa (swimmer's ear) is distinguished by pain on tragus pressure, ear canal manipulation, and no hearing loss — ideal for telehealth management. Acute otitis media features deep ear pain, hearing reduction, and often follows URI. Clinical features assessed via video — symptom onset, pain character, hearing change, swimming exposure, recent URI, prior episodes — allow accurate differentiation without otoscopy in most adult cases. Persistent or severe symptoms warrant in-person otoscopic evaluation.",
    diagnosisMethod: "Video clinical interview: pain localization, onset and triggers, hearing change, swimming history, recent URI, fever. Tragus pressure response described by patient. Severity assessment for referral decision.",
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
    rxInfo: {
      typical: "Albuterol HFA inhaler (rescue) 90mcg 1–2 puffs every 4–6 hours PRN; fluticasone propionate 110mcg (Flovent) or budesonide (Pulmicort) for maintenance",
      alternatives: "Formoterol-budesonide (Symbicort) or salmeterol-fluticasone (Advair) for combination maintenance; montelukast for adjunct therapy",
      coveredByInsurance: "Yes — most commercial plans cover albuterol inhalers. Generic albuterol typically $30–$60 without GoodRx; branded inhalers vary by formulary tier.",
      notes: "Refills appropriate for patients with established asthma diagnosis on stable therapy. New asthma diagnosis or poorly controlled asthma may require in-person pulmonary evaluation.",
    },
    clinicalDepth: "Asthma affects over 25 million Americans. Telehealth maintenance inhaler refills are highly appropriate for patients with established, well-controlled asthma. GINA guidelines support telehealth for stable asthma follow-up and prescription renewal. Dr. Bhavsar assesses current symptom control (daytime symptoms, nighttime awakening, rescue inhaler use, activity limitation), reviews current medications, and screens for signs of poor control that would warrant in-person evaluation. Patients requiring step-up therapy or with FEV1 concerns are referred.",
    diagnosisMethod: "Asthma Control Test (ACT) administered verbally. Assessment of rescue inhaler frequency, nighttime symptoms, exercise tolerance, ER visits, and oral steroid courses in past year.",
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
    rxInfo: {
      typical: "Lisinopril 10–40mg daily; amlodipine 5–10mg daily; hydrochlorothiazide 12.5–25mg daily; metoprolol succinate 25–200mg daily",
      alternatives: "Losartan, valsartan (ARBs) for ACE inhibitor intolerance; chlorthalidone for thiazide class; carvedilol for beta-blocker class",
      coveredByInsurance: "Yes — all first-line antihypertensives are generic Tier 1 drugs covered by virtually all commercial plans. Most under $10/month.",
      notes: "Refills appropriate for stable, well-controlled hypertension on established therapy. Home blood pressure reading reviewed at visit. Uncontrolled or newly elevated BP warrants in-person workup.",
    },
    clinicalDepth: "Hypertension affects nearly half of all US adults and is the leading modifiable cardiovascular risk factor. Telehealth medication refills for stable hypertension are among the most evidence-supported telehealth use cases — multiple studies show equivalent BP control outcomes with virtual vs. in-person management for patients on established therapy. Dr. Bhavsar reviews home BP log, current medications and adherence, recent lab results, and symptoms suggestive of target organ damage. Patients with uncontrolled BP (> 160/100 persistent) are directed to in-person evaluation.",
    diagnosisMethod: "Home BP readings reviewed (3-reading average preferred). Medication adherence assessment. Symptom screen for headache, visual changes, chest pain. Review of last labs (BMP for ACE/ARB/diuretic patients).",
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
    rxInfo: {
      typical: "Omeprazole 20–40mg daily (PPI — first-line); pantoprazole 40mg daily; esomeprazole 20–40mg daily",
      alternatives: "Famotidine 20–40mg twice daily (H2 blocker) for mild GERD or PPI intolerance; sucralfate for esophageal protection",
      coveredByInsurance: "Yes — omeprazole and pantoprazole are generic Tier 1 drugs covered by virtually all commercial plans. Typically $4–$15/month.",
      notes: "PPIs most effective taken 30–60 minutes before first meal. Long-term PPI use reviewed for appropriateness. Red flag symptoms (dysphagia, odynophagia, weight loss, hematemesis) require in-person/endoscopy referral.",
    },
    clinicalDepth: "GERD affects approximately 20% of the US adult population and is one of the most common GI diagnoses in outpatient medicine. Telehealth is appropriate for classic GERD presentations (heartburn, regurgitation, post-meal symptoms) in patients without alarm features. Dr. Bhavsar evaluates symptom pattern, triggers, prior treatment response, medication history, and screens for alarm symptoms that would mandate in-person upper endoscopy. PPI therapy is the most effective medical management for GERD, with symptom resolution in > 80% of patients within 4–8 weeks.",
    diagnosisMethod: "Clinical symptom assessment: heartburn frequency, regurgitation, nocturnal symptoms, aggravating factors, response to prior antacids. Alarm symptom screen: dysphagia, weight loss, anemia symptoms, hematemesis.",
    keywords: ["acid reflux online doctor", "GERD telemedicine", "omeprazole refill online"],
  },
  "flu-treatment": {
    slug: "flu-treatment",
    name: "Flu Treatment",
    conditionPageSlug: "influenza-treatment-online",
    displayName: "Influenza (Flu)",
    shortDesc: "Antiviral prescription and symptom management for flu.",
    icd10: "J11.1",
    covered: true,
    rxInfo: {
      typical: "Oseltamivir (Tamiflu) 75mg twice daily × 5 days — most effective when started within 48 hours of symptom onset",
      alternatives: "Baloxavir marboxil (Xofluza) 40–80mg single dose for uncomplicated influenza (age ≥ 12); supportive care for mild cases",
      coveredByInsurance: "Yes — oseltamivir covered under pharmacy benefit. Generic Tamiflu typically $30–$60; with GoodRx often under $25. Baloxavir may require prior auth.",
      notes: "Antiviral therapy most beneficial when started within 48 hours. High-risk patients (elderly, immunocompromised, pregnant) should be treated regardless of timing. Not effective for COVID-19.",
    },
    clinicalDepth: "Influenza causes 9–45 million illnesses annually in the US. Telehealth is particularly effective for flu: the abrupt onset of fever, myalgia, headache, and respiratory symptoms is highly characteristic and allows accurate clinical diagnosis without in-person testing in most community outbreak settings. Oseltamivir reduces symptom duration by 1–2 days and significantly reduces complication risk in high-risk patients when started early. Dr. Bhavsar assesses symptom onset timing, fever pattern, myalgia severity, and risk factors for complications to guide antiviral prescribing.",
    diagnosisMethod: "Clinical diagnosis based on abrupt onset fever (> 100°F), myalgia, headache, and respiratory symptoms during flu season or known community outbreak. Risk factor assessment for complication-directed treatment.",
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
    rxInfo: {
      typical: "Fluconazole 150mg single oral dose (first-line for uncomplicated vulvovaginal candidiasis)",
      alternatives: "Clotrimazole 1% cream or miconazole 200mg suppository 3-day course for those preferring topical; terconazole for non-albicans species",
      coveredByInsurance: "Yes — fluconazole is a generic Tier 1 drug covered by virtually all commercial plans. Typically $4–$15. Available at all major pharmacies.",
      notes: "Oral fluconazole most convenient and equally effective to topical. Recurrent VVC (≥ 4 episodes/year) warrants additional workup including diabetes screening and culture. Not appropriate for pregnancy — refer in-person.",
    },
    clinicalDepth: "Vulvovaginal candidiasis (VVC) affects 75% of women at least once in their lifetime, with 40–45% experiencing two or more episodes. The clinical presentation — thick, white, cottage cheese-like discharge with intense vulvar itching and absence of odor — is sufficiently specific for telehealth diagnosis in non-pregnant women with no systemic symptoms. Dr. Bhavsar evaluates symptom character, prior episodes and treatment response, recent antibiotic use (major precipitant), sexual history, and diabetes risk factors. Atypical presentations or recurrent VVC require culture-guided management.",
    diagnosisMethod: "Clinical symptom assessment: discharge character, odor, pruritis severity, dyspareunia, recent antibiotic use, prior VVC history, pregnancy status. Recurrence pattern assessment.",
    keywords: ["yeast infection online doctor", "yeast infection telemedicine"],
  },
};

// ─── State-level data: insurers, population, commissioner, context ────────────
export const STATE_INSURANCE_MAP = {
  AZ: {
    insurers: ["aetna"],
    population: 7431000,
    priority: "medium",
    commissioner: { name: "Arizona Department of Insurance and Financial Institutions", url: "https://difi.az.gov/" },
    majorEmployers: ["Banner Health", "Intel", "American Express", "Honeywell"],
  },
  CA: {
    insurers: ["aetna"],
    population: 39030000,
    priority: "high",
    commissioner: { name: "California Department of Insurance", url: "https://www.insurance.ca.gov/" },
    majorEmployers: ["Apple", "Google", "Meta", "Kaiser Permanente", "Wells Fargo", "Disney"],
  },
  CO: {
    insurers: ["aetna","united-healthcare"],
    population: 5839000,
    priority: "medium",
    commissioner: { name: "Colorado Division of Insurance", url: "https://doi.colorado.gov/" },
    majorEmployers: ["UCHealth", "Lockheed Martin", "Ball Corporation", "Arrow Electronics"],
  },
  FL: {
    insurers: ["aetna","blue-cross-blue-shield"],
    population: 22610000,
    priority: "high",
    commissioner: { name: "Florida Office of Insurance Regulation", url: "https://www.floir.com/" },
    majorEmployers: ["AdventHealth", "HCA Healthcare", "Raymond James", "Publix"],
  },
  GA: {
    insurers: ["aetna","blue-cross-blue-shield","united-healthcare","curative"],
    population: 10912000,
    priority: "high",
    commissioner: { name: "Georgia Office of Insurance and Safety Fire Commissioner", url: "https://oci.georgia.gov/" },
    majorEmployers: ["Delta Air Lines", "Home Depot", "UPS", "Emory Healthcare", "Chick-fil-A"],
  },
  IL: {
    insurers: ["aetna","blue-cross-blue-shield","united-healthcare"],
    population: 12582000,
    priority: "high",
    commissioner: { name: "Illinois Department of Insurance", url: "https://insurance.illinois.gov/" },
    majorEmployers: ["Boeing", "United Airlines", "Abbott Laboratories", "Walgreens", "Caterpillar"],
  },
  MI: {
    insurers: ["aetna"],
    population: 10034000,
    priority: "medium",
    commissioner: { name: "Michigan Department of Insurance and Financial Services", url: "https://www.michigan.gov/difs" },
    majorEmployers: ["Ford", "GM", "Stellantis", "Henry Ford Health", "Beaumont Health"],
  },
  MN: {
    insurers: ["aetna","united-healthcare"],
    population: 5706000,
    priority: "medium",
    commissioner: { name: "Minnesota Department of Commerce", url: "https://mn.gov/commerce/" },
    majorEmployers: ["Mayo Clinic", "UnitedHealth Group", "Target", "Best Buy", "3M"],
  },
  NC: {
    insurers: ["united-healthcare"],
    population: 10699000,
    priority: "high",
    commissioner: { name: "North Carolina Department of Insurance", url: "https://www.ncdoi.gov/" },
    majorEmployers: ["Bank of America", "Duke Energy", "Lowe's", "Novant Health", "WakeMed"],
  },
  NJ: {
    insurers: ["united-healthcare"],
    population: 9290000,
    priority: "medium",
    commissioner: { name: "New Jersey Department of Banking and Insurance", url: "https://www.state.nj.us/dobi/" },
    majorEmployers: ["Johnson & Johnson", "Prudential", "Merck", "Atlantic Health System"],
  },
  OH: {
    insurers: ["aetna","united-healthcare"],
    population: 11800000,
    priority: "high",
    commissioner: { name: "Ohio Department of Insurance", url: "https://insurance.ohio.gov/" },
    majorEmployers: ["Progressive", "Nationwide", "Huntington", "Cleveland Clinic", "OhioHealth"],
  },
  PA: {
    insurers: ["aetna","blue-cross-blue-shield","united-healthcare"],
    population: 12972000,
    priority: "high",
    commissioner: { name: "Pennsylvania Insurance Department", url: "https://www.insurance.pa.gov/" },
    majorEmployers: ["UPMC", "Comcast", "Lincoln Financial", "PNC Financial", "AmerisourceBergen"],
  },
  TN: {
    insurers: ["aetna","united-healthcare"],
    population: 7052000,
    priority: "medium",
    commissioner: { name: "Tennessee Department of Commerce and Insurance", url: "https://www.tn.gov/commerce/insurance.html" },
    majorEmployers: ["HCA Healthcare", "Vanderbilt Health", "FedEx", "Dollar General", "Bridgestone"],
  },
  TX: {
    insurers: ["blue-cross-blue-shield"],
    population: 30030000,
    priority: "high",
    commissioner: { name: "Texas Department of Insurance", url: "https://www.tdi.texas.gov/" },
    majorEmployers: ["Dell", "AT&T", "Exxon Mobil", "Texas Health Resources", "HCA Healthcare"],
  },
  WA: {
    insurers: ["united-healthcare"],
    population: 7886000,
    priority: "medium",
    commissioner: { name: "Washington State Office of the Insurance Commissioner", url: "https://www.insurance.wa.gov/" },
    majorEmployers: ["Amazon", "Microsoft", "Boeing", "Costco", "Providence Health"],
  },
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

// Last reviewed date — updated monthly by cron
export const LAST_REVIEWED = "2026-07-01";
