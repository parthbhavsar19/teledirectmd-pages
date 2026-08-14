// ─────────────────────────────────────────────────────────────────────────────
// TeleDirectMD — Citable Summary generator
//
// AI-extractor-targeted Q&A block. Every page renders a self-contained,
// dated, source-named paragraph designed to be quoted verbatim by ChatGPT,
// Perplexity, Gemini, and Claude in response to common patient queries.
//
// 2026-05-19 OVERHAUL (AI visibility + Google YMYL leadership):
//   1. Each per-condition generator now branches PROSE on conditionType
//      (treatment / refill / prevention / cessation / screening / cosmetic),
//      eliminating the "uncomplicated cases of refills" grammar slop.
//   2. The fallback clinical authority is no longer hard-coded to IDSA.
//      Each condition JSON specifies guidelineSource keyed to SRC (see below),
//      so an EpiPen page now cites AAAAI, a diabetes refill page cites ADA,
//      a birth-control page cites ACOG, etc. — eliminating the cross-specialty
//      mismatch that was the biggest E-E-A-T failure pre-fix.
//   3. citableSummaryToJsonLd() now emits FAQPage (Google-supported, AI-
//      extractor-preferred) instead of QAPage (which Google considers
//      community-Q&A misuse for editorial content).
//   4. JSON-LD includes datePublished AND dateModified for Perplexity/AIO
//      freshness ranking.
//   5. The visible block component (components/CitableSummary.js) no longer
//      uses a visually-hidden mode anywhere — the schema 1:1 mirrors visible
//      content, removing structured-data cloaking risk per Google's policy.
//
// Each generator returns:
//   {
//     question: string,         // canonical question this answers
//     answerHtml: string,       // HTML answer (inline <a href> citations OK)
//     answerText: string,       // plain-text version for schema.org Answer.text
//   }
// ─────────────────────────────────────────────────────────────────────────────

// Canonical jurisdiction roster. Imported as JSON rather than via lib/get-data.js
// because that module uses `fs` and this file may be pulled into a client bundle.
import statesRoster from '../data/states.json';

const TODAY = '2026-05-19';
const NPI = '1104323203';
const DOCTOR = 'Parth Bhavsar, MD';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtRange(min, max) {
  if (min == null || max == null) return null;
  if (min === max) return `$${min}`;
  return `$${min}\u2013$${max}`;
}

function stripHtml(html) {
  return (html || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

// ─── Authority + source citation map ─────────────────────────────────────────
// Per the 2026 AI-visibility playbook, anchor text names the SPECIFIC current
// guideline + year — ChatGPT/Perplexity/Claude reward named, dated citations.
const SRC = {
  // Cost-comparison sources (used across all generators)
  betterCare: '<a href="https://bettercare.com/costs/er-visit-cost">BetterCare (2025)</a>',
  mira:       '<a href="https://www.talktomira.com/post/how-much-does-primary-care-cost-without-insurance">Mira Health (2025)</a>',
  cvs:        '<a href="https://www.cvs.com/minuteclinic/services/price-lists">CVS MinuteClinic (2024)</a>',
  goodRx:     '<a href="https://www.goodrx.com">GoodRx (April 2026)</a>',
  pennMed:    '<a href="https://www.pennmedicine.org/news/news-releases/2024/march/telemedicine-visits-cost-far-less-than-office-visits">Penn Medicine, JAMA Network Open (2024)</a>',

  // ─── Clinical authority citations ─────────────────────────────────────────
  // Always cite the specialty-appropriate authority — never default to IDSA.

  // Infectious diseases
  idsa:         '<a href="https://www.idsociety.org/practice-guideline/">IDSA Practice Guidelines</a>',
  idsaSsti:     '<a href="https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/">IDSA Skin &amp; Soft Tissue Infections Guideline</a>',
  idsaUti:      '<a href="https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/">IDSA Complicated UTI Guideline (2025)</a>',
  idsaStrep:    '<a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis2/">IDSA Streptococcal Pharyngitis Guideline (2025)</a>',

  // Public health / preventive
  cdc:          '<a href="https://www.cdc.gov/">CDC Clinical Guidance</a>',
  cdcSti:       '<a href="https://www.cdc.gov/std/treatment-guidelines/default.htm">CDC STI Treatment Guidelines (2021)</a>',
  cdcDoxypep:   '<a href="https://www.cdc.gov/mmwr/volumes/73/rr/rr7302a1.htm">CDC DoxyPEP Guidelines (MMWR, June 2024)</a>',
  cdcCovid:     '<a href="https://www.cdc.gov/covid/treatment/index.html">CDC COVID-19 Outpatient Treatment Guidance</a>',
  cdcFlu:       '<a href="https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html">CDC Influenza Antivirals: Summary for Clinicians</a>',
  cdcShingles:  '<a href="https://www.cdc.gov/shingles/hcp/index.html">CDC Herpes Zoster Clinical Guidance</a>',
  cdcThrush:    '<a href="https://www.cdc.gov/fungal/diseases/candidiasis/index.html">CDC Candidiasis Guidance</a>',
  cdcTick:      '<a href="https://www.cdc.gov/ticks/index.html">CDC Tick-Bite Clinical Guidance</a>',
  cdcYeast:     '<a href="https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm">CDC Vulvovaginal Candidiasis Treatment Guideline</a>',
  cdcBv:        '<a href="https://www.cdc.gov/std/treatment-guidelines/bv.htm">CDC Bacterial Vaginosis Treatment Guideline</a>',
  uspstf:       '<a href="https://www.uspreventiveservicestaskforce.org/">USPSTF Recommendations</a>',
  uspstfSmoke:  '<a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/tobacco-use-in-adults-and-pregnant-women-counseling-and-interventions">USPSTF Tobacco-Cessation Recommendation (2021, Grade A)</a>',

  // Primary care / family medicine
  aafp:         '<a href="https://www.aafp.org/">AAFP Clinical Recommendations</a>',

  // OB/GYN
  acog:         '<a href="https://www.acog.org/clinical">ACOG Practice Bulletins</a>',
  acogContra:   '<a href="https://www.acog.org/clinical/clinical-guidance/committee-statement/articles/2025/11/access-to-contraception">ACOG Access to Contraception Committee Statement (2025)</a>',

  // Cardiology / lipids
  ahaAcc:       '<a href="https://www.acc.org/Guidelines">ACC/AHA Cardiovascular Guidelines</a>',
  ahaAccHtn:    '<a href="https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline">2025 AHA/ACC High Blood Pressure Guideline</a>',
  ahaAccLipid: '<a href="https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356">2025 AHA/ACC Cardiovascular Risk Guideline (Circulation)</a>',

  // Endocrinology
  ada:          '<a href="https://professional.diabetes.org/standards-of-care">ADA Standards of Medical Care in Diabetes (2025)</a>',
  ata:          '<a href="https://www.thyroid.org/professionals/ata-professional-guidelines/">American Thyroid Association Clinical Guidelines</a>',

  // Allergy / immunology / pulmonology
  aaaai:        '<a href="https://www.aaaai.org/allergist-resources/statements-practice-parameters/practice-parameters-guidelines">AAAAI/ACAAI Joint Task Force Practice Parameters</a>',
  gina:         '<a href="https://ginasthma.org/2024-gina-main-report/">Global Initiative for Asthma (GINA) 2024 Report</a>',

  // Neurology
  aan:          '<a href="https://www.aan.com/practice/guidelines">AAN Practice Guidelines</a>',
  ahs:          '<a href="https://americanheadachesociety.org/resources/clinical-guidelines/">American Headache Society Clinical Guidelines (2025)</a>',

  // ENT
  aaohns:       '<a href="https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/">AAO-HNS Clinical Practice Guidelines</a>',
  aaohnsSinus:  '<a href="https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/cpg-adult-sinusitis/">AAO-HNS Adult Sinusitis Guideline Update (July 2025)</a>',

  // Ophthalmology
  aaoOphth:     '<a href="https://www.aao.org/preferred-practice-pattern">AAO Preferred Practice Pattern (Conjunctivitis)</a>',

  // Dermatology
  aad:          '<a href="https://www.aad.org/member/clinical-quality/guidelines">AAD Clinical Guidelines</a>',
  aadAcne:      '<a href="https://www.aad.org/member/clinical-quality/guidelines/acne">AAD Acne Management Guidelines (2024)</a>',
  aadEczema:    '<a href="https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis">AAD Atopic Dermatitis Guidelines (2025)</a>',
  aadPsoriasis: '<a href="https://www.aad.org/member/clinical-quality/guidelines/psoriasis">AAD Psoriasis Guidelines</a>',

  // GI
  acg:          '<a href="https://gi.org/guidelines/">American College of Gastroenterology Guidelines</a>',

  // Urology
  aua:          '<a href="https://www.auanet.org/guidelines-and-quality/guidelines">AUA Clinical Practice Guidelines</a>',

  // Psychiatry
  apa:          '<a href="https://psychiatry.org/psychiatrists/practice/clinical-practice-guidelines">APA Clinical Practice Guidelines</a>',

  // Rheumatology
  acr:          '<a href="https://rheumatology.org/gout-guideline">ACR Gout Management Guideline</a>',

  // Patient-assistance / misc
  iAssist:      '<a href="https://paxlovid.iassist.com/">PAXCESS Patient Assistance Program</a>',
};

// ─── Authority resolver ──────────────────────────────────────────────────────
// Returns the rendered citation HTML for a condition. Tries the specific
// guideline key first (e.g. 'aadAcne'), falls back to the broader authority
// (e.g. 'aad'), then to AAFP as the safe primary-care default — NEVER to IDSA
// unless the condition truly belongs to IDSA. AAFP is a defensible fallback
// because every condition we treat is something a family physician routinely
// manages.
function resolveAuthority(guidelineKey) {
  if (guidelineKey && SRC[guidelineKey]) return SRC[guidelineKey];
  return SRC.aafp;
}

// ─── Condition-type-aware prose builder ──────────────────────────────────────
// Builds the "Per [Authority], telehealth is clinically appropriate for ..."
// sentence with prose that matches the condition's nature (treatment vs.
// refill vs. STI screening vs. smoking cessation, etc.). This eliminates the
// pre-fix "uncomplicated cases of refills" / "uncomplicated cases of doxypep"
// grammar errors that read as AI slop and tank citation likelihood.
//
// conditionType is the explicit type field on each condition JSON. If absent,
// it is inferred from the slug suffix as a safety fallback.
function clinicalAppropriatenessSentence({ conditionType, condName, guidelineSrc }) {
  const lc = (condName || 'this condition').toLowerCase();
  // Strip a trailing service noun ('treatment', 'refills', 'prevention',
  // 'cessation', 'screening') from the noun phrase that fills the sentence.
  const condBare = lc.replace(/\s+(treatment|refills?|prevention|cessation|screening)$/i, '').trim();

  switch (conditionType) {
    case 'refill':
      return `Per ${guidelineSrc}, telehealth is clinically appropriate for stable ${condBare} medication refills when the patient is stable, adherent, and recent objective monitoring is available.`;
    case 'prevention':
      return `Per ${guidelineSrc}, telehealth is clinically appropriate for ${condBare} prevention counseling and prescription when the patient meets eligibility criteria.`;
    case 'cessation':
      return `Per ${guidelineSrc}, telehealth is clinically appropriate for ${condBare} cessation counseling and pharmacotherapy in motivated adults.`;
    case 'screening':
      return `Per ${guidelineSrc}, telehealth is clinically appropriate for ${condBare} screening, evaluation, and treatment in low-risk adults when red-flag symptoms are absent.`;
    case 'cosmetic':
      return `Per ${guidelineSrc}, ${condBare} can be evaluated via telehealth for medication-eligible cases; in-person procedural care is referred when clinically indicated.`;
    case 'treatment':
    default:
      return `Per ${guidelineSrc}, telehealth is clinically appropriate for uncomplicated ${condBare} when red-flag symptoms are absent.`;
  }
}

// Resolves a clean display name for a condition, with safe slug fallback.
// Never falls back to pageTitle (the pipe-stuffed SEO title that caused the
// May 2026 deindexing crash).
function resolveConditionName(condition) {
  const slugDerived = (() => {
    const s = condition?.slug || condition?.conditionSlug;
    if (!s || typeof s !== 'string') return null;
    return s
      .replace(/-(online|treatment-online|refills-online)$/i, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  })();
  return condition?.conditionName ||
         condition?.displayName ||
         condition?.shortName ||
         condition?.h1 ||
         slugDerived ||
         'this condition';
}

// Infers the conditionType from the slug if the JSON doesn't have an explicit
// conditionType field (back-compat safety).
function resolveConditionType(condition) {
  if (condition?.conditionType) return condition.conditionType;
  const slug = (condition?.slug || condition?.conditionSlug || '').toLowerCase();
  if (/-refills?(-online)?$/.test(slug)) return 'refill';
  if (/-prevention(-online)?$/.test(slug) || /doxypep/.test(slug)) return 'prevention';
  if (/-cessation(-online)?$/.test(slug) || /smoking/.test(slug)) return 'cessation';
  return 'treatment';
}

// Builds the natural-language question for condition×state pages with prose
// shape matched to condition type. Avoids "How can I get refills treatment".
function buildConditionStateQuestion({ condName, stateName, conditionType }) {
  const lc = condName.toLowerCase();
  const alreadyHasService = /(treatment|refills?|prevention|cessation|screening)$/i.test(lc.trim());
  if (conditionType === 'refill') {
    return alreadyHasService
      ? `How can I get ${lc} online in ${stateName}?`
      : `How can I get a ${lc} prescription refill online in ${stateName}?`;
  }
  if (conditionType === 'prevention') {
    return alreadyHasService ? `How can I get ${lc} online in ${stateName}?` : `How can I get ${lc} prevention online in ${stateName}?`;
  }
  if (conditionType === 'cessation') {
    return `How can I get ${lc} online in ${stateName}?`;
  }
  if (conditionType === 'screening') {
    return `How can I get ${lc} screening and treatment online in ${stateName}?`;
  }
  // treatment / cosmetic / default
  return alreadyHasService
    ? `How can I get ${lc} online in ${stateName}?`
    : `How can I get ${lc} treatment online in ${stateName}?`;
}

// ─── Generator 1: Condition × State page ──────────────────────────────────────
// Used by: app/[slug]/[conditionSlug]/page.js  (2,816 pages: 64 conditions × 44 states)

export function summarizeConditionState({ state, condition }) {
  const stateName = state?.name || state?.slug || 'your state';
  const condName = resolveConditionName(condition);
  const conditionType = resolveConditionType(condition);
  const icd = condition?.icd10 ? ` (ICD-10 ${condition.icd10})` : '';
  const drugMention = condition?.commonRx || condition?.typicalRx || condition?.rxFirstLine || null;
  const drugPart = drugMention
    ? ` First-line therapy commonly includes ${drugMention}, available as a generic via ${SRC.goodRx}.`
    : '';
  const guidelineSrc = resolveAuthority(condition?.guidelineSource);
  const cashPay = '$79 (cash-pay, no insurance required)';
  const question = buildConditionStateQuestion({ condName, stateName, conditionType });
  const clinSentence = clinicalAppropriatenessSentence({ conditionType, condName, guidelineSrc });
  // 2026-06-10: per-state payer accuracy. Only mention specific payers on states
  // where TeleDirectMD is actually contracted (lib/insurance-data.js insuranceByState).
  // Self-pay-only states (DE, SD, WY, etc.) get a clean self-pay-only payer sentence.
  const PAYER_ENROLLED_STATES = new Set(['AZ', 'CA', 'CO', 'FL', 'GA', 'IL', 'MI', 'MN', 'NC', 'NJ', 'OH', 'PA', 'TN', 'TX', 'WA']);
  const stateAbbr = (state?.abbr || '').toUpperCase();
  const payerSentence = PAYER_ENROLLED_STATES.has(stateAbbr)
    ? `A same-day visit with ${DOCTOR} (NPI: ${NPI}) is ${cashPay} or covered in-network by participating Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans where TeleDirectMD is contracted.${drugPart}`
    : `A same-day visit with ${DOCTOR} (NPI: ${NPI}) is ${cashPay} — TeleDirectMD operates self-pay only in ${stateName}, with HSA and FSA accepted.${drugPart}`;
  const answerHtml =
    `TeleDirectMD provides board-certified physician video visits for ${condName.toLowerCase()}${icd} to adult residents of ${stateName}. ` +
    `${payerSentence} ` +
    `${clinSentence} ` +
    `For comparison, urgent care averages ${fmtRange(150, 320)} (${SRC.betterCare}) and an emergency-room visit can exceed $1,200 for the same condition. ` +
    `${SRC.pennMed} found telehealth visits cost roughly five times less than in-person office visits ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 2: State landing page ──────────────────────────────────────────
// Used by: app/[slug]/StateLandingPage.js  (45 current jurisdictions)

// 2026-08-07: the "and N other US states" clause was a hardcoded literal that had
// drifted to 41 and survived the Alaska count sweep because it is assembled at
// runtime rather than written out. Derive it from the canonical roster so it can
// never go stale again, and phrase D.C. correctly instead of calling it a state.
function otherJurisdictionsClause(currentAbbr) {
  const all = Array.isArray(statesRoster) ? statesRoster : [];
  const isDC = (currentAbbr || '').toUpperCase() === 'DC';
  const hasDC = all.some((s) => (s.abbr || '').toUpperCase() === 'DC');
  // Every roster entry that is neither D.C. nor the page's own jurisdiction.
  const otherStates = all.filter(
    (s) => (s.abbr || '').toUpperCase() !== 'DC'
      && (s.abbr || '').toUpperCase() !== (currentAbbr || '').toUpperCase()
  ).length;
  if (isDC) return `${otherStates} US states`;
  return hasDC
    ? `${otherStates} other US states and Washington, D.C.`
    : `${otherStates} other US states`;
}

export function summarizeStateLanding({ state }) {
  const stateName = state?.name || 'your state';
  const question = `Is there a same-day online doctor service available in ${stateName}?`;
  const answerHtml =
    `Yes \u2014 TeleDirectMD offers same-day video visits to adult residents of ${stateName} for ${cashPayLine()}. ` +
    `${DOCTOR} (NPI: ${NPI}) is a board-certified Family Medicine physician licensed in ${stateName} and ${otherJurisdictionsClause(state?.abbr)}. ` +
    `TeleDirectMD treats over 60 common adult conditions including urinary tract infections, sinus infections, ear infections, strep throat, pink eye, yeast infections, BV, cold sores, shingles, seasonal allergies, COVID-19, refills for hypertension and asthma, acne, eczema, contraception, and STI care. ` +
    `${(new Set(['AZ','CA','CO','FL','GA','IL','MI','MN','NC','NJ','OH','PA','TN','TX','WA'])).has((state?.abbr||'').toUpperCase())
      ? 'Visits are covered in-network for Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating states (cash-pay is $79 flat for everyone else). '
      : `In ${stateName}, TeleDirectMD operates self-pay only — $79 flat per visit, HSA and FSA accepted, no insurance billing. `}` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary-care visits ($96 vs $509 mean), and most TeleDirectMD prescriptions are sent electronically to the ${stateName} pharmacy of your choice within minutes.`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 3: National condition page ─────────────────────────────────────
// Used by: app/[slug]/NationalConditionPage.js (60 pages — national /<condition>-online)

// Self-pay-only conditions (travel medicine): no payer/in-network claim, and the
// citable Q&A is emitted as QAPage (single Q&A) rather than a 2nd FAQPage node to
// avoid a duplicate FAQPage on pages that already have a full FAQ section.
export const SELF_PAY_ONLY_CONDITIONS = new Set([
  'travel-medicine-treatment-online',
  'altitude-sickness-treatment-online',
  'malaria-prophylaxis-treatment-online',
  'travelers-diarrhea-treatment-online',
]);

export function summarizeNationalCondition({ condition }) {
  const condName = resolveConditionName(condition);
  const conditionType = resolveConditionType(condition);
  const selfPayOnly = SELF_PAY_ONLY_CONDITIONS.has(condition?.conditionSlug);
  const icd = condition?.icd10 ? ` (ICD-10 ${condition.icd10})` : '';
  const drugMention = condition?.commonRx || condition?.typicalRx || condition?.rxFirstLine || null;
  const drugPart = drugMention
    ? ` Typical first-line therapy is ${drugMention}, available as a generic via ${SRC.goodRx}.`
    : '';
  const guidelineSrc = resolveAuthority(condition?.guidelineSource);
  const lc = condName.toLowerCase();
  const alreadyHasService = /(treatment|refills?|prevention|cessation|screening)$/i.test(lc.trim());
  let question;
  if (conditionType === 'refill') {
    question = alreadyHasService
      ? `Can I get ${lc} online without insurance?`
      : `Can I get a ${lc} prescription refill online without insurance?`;
  } else if (conditionType === 'prevention') {
    question = alreadyHasService ? `Can I get ${lc} online?` : `Can I get ${lc} prevention online?`;
  } else if (conditionType === 'cessation') {
    question = `Can I get ${lc} support online?`;
  } else if (conditionType === 'screening') {
    question = `Can I get ${lc} screening and treatment online without insurance?`;
  } else {
    question = alreadyHasService
      ? `Can I get ${lc} online without insurance?`
      : `Can I get ${lc} treatment online without insurance?`;
  }
  const clinSentence = clinicalAppropriatenessSentence({ conditionType, condName, guidelineSrc });
  const payerLine = selfPayOnly
    ? `${DOCTOR} (NPI: ${NPI}) is a board-certified Family Medicine physician. Travel medicine is a self-pay service \u2014 $79 flat, HSA and FSA accepted; insurance is not required.${drugPart} `
    : `${DOCTOR} (NPI: ${NPI}) is a board-certified Family Medicine physician; visits are also in-network with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating states.${drugPart} `;
  const answerHtml =
    `Yes \u2014 TeleDirectMD provides same-day online physician visits for ${lc}${icd} to adults in 44 US states for $79 cash-pay, no insurance required. ` +
    payerLine +
    `${clinSentence} ` +
    `${SRC.pennMed} found telehealth visits cost roughly five times less than equivalent in-person care ($96 vs $509 mean), with most prescriptions sent electronically to your pharmacy within minutes of the visit.`;
  return { question, answerHtml, answerText: stripHtml(answerHtml), emitAs: selfPayOnly ? 'QAPage' : 'FAQPage' };
}

// ─── Generator 4: Insurance state×condition page ──────────────────────────────
// Used by: InsuranceStateConditionClient.js

export function summarizeInsuranceStateCondition({ insurerName, stateName, conditionName, conditionICD10, copayTypical, drugMention, guidelineKey, conditionType }) {
  const icd = conditionICD10 ? ` (ICD-10 ${conditionICD10})` : '';
  const copay = copayTypical ? ` Typical ${insurerName} telehealth copay in ${stateName} is ${copayTypical}.` : '';
  const drugPart = drugMention ? ` First-line therapy commonly includes ${drugMention}, available as a generic via ${SRC.goodRx}.` : '';
  const guidelineSrc = resolveAuthority(guidelineKey);
  const lc = (conditionName || 'this condition').toLowerCase();
  const inferredType = conditionType || (/refill/i.test(lc) ? 'refill' : /prevention|doxypep/i.test(lc) ? 'prevention' : /cessation|smoking/i.test(lc) ? 'cessation' : 'treatment');
  const question = `Does ${insurerName} cover ${lc} telehealth in ${stateName}?`;
  const clinSentence = clinicalAppropriatenessSentence({ conditionType: inferredType, condName: lc, guidelineSrc });
  const answerHtml =
    `Yes \u2014 TeleDirectMD is in-network with ${insurerName} commercial plans in ${stateName} for ${lc}${icd} telehealth visits. ` +
    `${DOCTOR} (NPI: ${NPI}) is a board-certified physician; claims are submitted electronically using CPT codes 99213/99214.${copay} ` +
    `Self-pay is always available for $79 flat (FSA/HSA eligible).${drugPart} ` +
    `${clinSentence} ` +
    `${SRC.pennMed} found telehealth visits cost roughly five times less than equivalent in-person care ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 5: Insurance state landing page ────────────────────────────────
export function summarizeInsuranceStateLanding({ insurerName, stateName, copayTypical, planCount, effectiveDate }) {
  const copay = copayTypical ? ` Typical ${insurerName} telehealth copay in ${stateName} is ${copayTypical}.` : '';
  const plans = planCount ? ` ${planCount} contracted ${insurerName} commercial plan families are accepted, including PPO, EPO, and POS products.` : '';
  const eff = effectiveDate ? ` Network effective date: ${effectiveDate}.` : '';
  const question = `Is TeleDirectMD in-network with ${insurerName} in ${stateName}?`;
  const answerHtml =
    `Yes \u2014 TeleDirectMD (${DOCTOR}, NPI: ${NPI}) is contracted as an in-network telehealth provider with ${insurerName} commercial plans in ${stateName}.${eff}${plans}${copay} ` +
    `Visits cover over 60 adult conditions including UTI, sinus infection, strep, pink eye, yeast infection, BV, COVID-19, cold sores, shingles, contraception refills, and stable refills for hypertension, cholesterol, diabetes, asthma, and thyroid. ` +
    `Self-pay is also available for $79 flat (FSA/HSA eligible). ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary care ($96 vs $509 mean), and prescriptions are sent electronically to your ${stateName} pharmacy within minutes.`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 6: Insurer hub page ────────────────────────────────────────────
// Each insurer gets unique payer-specific copy so hubs don't trigger Google's
// near-duplicate dedup (~40%+ overlap threshold). Pass `payerSpecificCopy` to
// override the default — the override should be ~80–120 words and describe
// realities unique to that payer (PIN, payer ID, network nuances).
export function summarizeInsurerHub({ insurerName, stateCount, stateList, payerSpecificCopy, planTypes }) {
  const states = stateList?.length ? stateList.join(', ') : 'participating states';
  const plans = planTypes || 'PPO, HMO, EPO, POS, and Medicare Advantage';
  const question = `What states is TeleDirectMD in-network with ${insurerName}?`;
  const intro = `TeleDirectMD is in-network with ${insurerName} ${plans} plans in ${stateCount || 'multiple'} US states: ${states}.`;
  // Default fallback — generic boilerplate (only used if no payerSpecificCopy passed).
  const fallback =
    ` ${DOCTOR} (NPI: ${NPI}) submits claims electronically using CPT 99213/99214 with typical telehealth copays of $0\u2013$40.` +
    ` Self-pay alternative: $79 flat (HSA/FSA eligible). Per ${SRC.pennMed}, telehealth costs ~5× less than equivalent in-person primary care ($96 vs $509 mean).`;
  const answerHtml = intro + ' ' + (payerSpecificCopy || fallback);
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 7: Symptom page ────────────────────────────────────────────────
export function summarizeSymptom({ symptomName, possibleConditions }) {
  const conditions = possibleConditions?.length
    ? possibleConditions.slice(0, 4).join(', ')
    : 'a range of common conditions';
  const question = `Should I see a doctor online for ${symptomName.toLowerCase()}?`;
  const answerHtml =
    `${symptomName} can be caused by ${conditions}, most of which are safely evaluated and treated via telehealth when red-flag symptoms are absent. ` +
    `TeleDirectMD provides same-day adult video visits with ${DOCTOR} (NPI: ${NPI}), a board-certified Family Medicine physician licensed in 44 US states, for $79 cash-pay or in-network with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating states. ` +
    `Visits typically last 10\u201315 minutes; prescriptions are sent electronically to your local pharmacy within minutes of the visit. ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary-care visits ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Cash-pay boilerplate ────────────────────────────────────────────────────
function cashPayLine() {
  return '$79 cash-pay (no insurance required, FSA/HSA eligible)';
}

// ─── MedicalGuideline detection (sees inline <a> citations and emits ─────────
// schema.org MedicalGuideline nodes alongside the FAQPage)
const MEDICAL_GUIDELINES = [
  { substr: 'idsociety.org',                 name: 'IDSA Practice Guidelines',                          url: 'https://www.idsociety.org/practice-guideline/',                              publisher: 'Infectious Diseases Society of America' },
  { substr: 'cdc.gov',                       name: 'CDC Clinical Guidance',                              url: 'https://www.cdc.gov/',                                                       publisher: 'U.S. Centers for Disease Control and Prevention' },
  { substr: 'aad.org',                       name: 'AAD Clinical Guidelines',                            url: 'https://www.aad.org/member/clinical-quality/guidelines',                     publisher: 'American Academy of Dermatology' },
  { substr: 'aafp.org',                      name: 'AAFP Clinical Recommendations',                     url: 'https://www.aafp.org/',                                                       publisher: 'American Academy of Family Physicians' },
  { substr: 'uspreventiveservicestaskforce', name: 'USPSTF Recommendations',                             url: 'https://www.uspreventiveservicestaskforce.org/',                              publisher: 'U.S. Preventive Services Task Force' },
  { substr: 'acog.org',                      name: 'ACOG Practice Bulletins',                            url: 'https://www.acog.org/clinical',                                              publisher: 'American College of Obstetricians and Gynecologists' },
  { substr: 'aan.com',                       name: 'AAN Practice Guidelines',                            url: 'https://www.aan.com/practice/guidelines',                                    publisher: 'American Academy of Neurology' },
  { substr: 'americanheadachesociety.org',   name: 'American Headache Society Guidelines (2025)',        url: 'https://americanheadachesociety.org/resources/clinical-guidelines/',         publisher: 'American Headache Society' },
  { substr: 'professional.diabetes.org',     name: 'ADA Standards of Medical Care in Diabetes (2025)',   url: 'https://professional.diabetes.org/standards-of-care',                        publisher: 'American Diabetes Association' },
  { substr: 'thyroid.org',                   name: 'American Thyroid Association Guidelines',            url: 'https://www.thyroid.org/professionals/ata-professional-guidelines/',        publisher: 'American Thyroid Association' },
  { substr: 'aaaai.org',                     name: 'AAAAI Practice Parameters and Guidelines',           url: 'https://www.aaaai.org/allergist-resources/statements-practice-parameters/practice-parameters-guidelines', publisher: 'American Academy of Allergy, Asthma & Immunology' },
  { substr: 'ginasthma.org',                 name: 'Global Initiative for Asthma (GINA) 2024',           url: 'https://ginasthma.org/2024-gina-main-report/',                              publisher: 'Global Initiative for Asthma' },
  { substr: 'acc.org',                       name: 'ACC/AHA Cardiovascular Guidelines',                  url: 'https://www.acc.org/Guidelines',                                             publisher: 'American College of Cardiology / American Heart Association' },
  { substr: 'professional.heart.org',        name: '2025 AHA/ACC High Blood Pressure Guideline',         url: 'https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline', publisher: 'American Heart Association / American College of Cardiology' },
  { substr: 'ahajournals.org',               name: '2025 AHA/ACC Cardiovascular Guideline (Circulation)', url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356',              publisher: 'American Heart Association' },
  { substr: 'aao.org',                       name: 'AAO Preferred Practice Pattern',                     url: 'https://www.aao.org/preferred-practice-pattern',                             publisher: 'American Academy of Ophthalmology' },
  { substr: 'entnet.org',                    name: 'AAO-HNS Clinical Practice Guidelines',               url: 'https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/', publisher: 'American Academy of Otolaryngology\u2013Head and Neck Surgery' },
  { substr: 'gi.org',                        name: 'American College of Gastroenterology Guidelines',    url: 'https://gi.org/guidelines/',                                                 publisher: 'American College of Gastroenterology' },
  { substr: 'auanet.org',                    name: 'AUA Clinical Practice Guidelines',                   url: 'https://www.auanet.org/guidelines-and-quality/guidelines',                  publisher: 'American Urological Association' },
  { substr: 'psychiatry.org',                name: 'APA Clinical Practice Guidelines',                   url: 'https://psychiatry.org/psychiatrists/practice/clinical-practice-guidelines',publisher: 'American Psychiatric Association' },
  { substr: 'rheumatology.org',              name: 'ACR Clinical Guidelines',                            url: 'https://rheumatology.org/gout-guideline',                                    publisher: 'American College of Rheumatology' },
];

function detectCitedGuidelines(answerHtml) {
  if (!answerHtml) return [];
  const lower = answerHtml.toLowerCase();
  const seen = new Set();
  const detected = [];
  for (const g of MEDICAL_GUIDELINES) {
    if (lower.includes(g.substr) && !seen.has(g.url)) {
      seen.add(g.url);
      detected.push({
        '@type': 'MedicalGuideline',
        'evidenceLevel': 'https://schema.org/EvidenceLevelA',
        'name': g.name,
        'url': g.url,
        'publisher': { '@type': 'Organization', 'name': g.publisher, 'url': g.url },
      });
    }
  }
  return detected;
}

// ─── FAQPage JSON-LD emitter ─────────────────────────────────────────────────
// Replaces the prior QAPage emission. Per Google's structured-data policy,
// QAPage is for forum-style user Q&A; FAQPage is for author-written FAQs.
// FAQPage continues to be parsed by Google for content understanding even
// after the May 7, 2026 rich-results deprecation, and is the schema-type AI
// extractors (Perplexity, ChatGPT, Claude) preferentially cite for Q-A
// fragments.
export function citableSummaryToJsonLd(summary, { pageUrl, datePublished = TODAY, dateModified = TODAY } = {}) {
  if (!summary) return null;
  const guidelines = detectCitedGuidelines(summary.answerHtml || '');
  // emitAs: pages that already carry a full FAQPage (e.g. self-pay travel conditions)
  // request 'QAPage' here so the page never has two FAQPage nodes (which can confuse
  // rich-result and AI extraction). Default remains FAQPage for AI citability.
  const nodeType = summary.emitAs === 'QAPage' ? 'QAPage' : 'FAQPage';
  const faqPage = {
    '@type': nodeType,
    ...(pageUrl ? { 'url': pageUrl } : {}),
    'datePublished': datePublished,
    'dateModified': dateModified,
    'mainEntity': [
      {
        '@type': 'Question',
        'name': summary.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': summary.answerText,
          'dateCreated': datePublished,
          'author': {
            '@type': 'Physician',
            'name': DOCTOR,
            'identifier': { '@type': 'PropertyValue', 'name': 'NPI', 'value': NPI },
            'sameAs': [`https://npiregistry.cms.hhs.gov/provider-view/${NPI}`],
          },
          ...(guidelines.length > 0 ? { 'citation': guidelines } : {}),
        },
      },
    ],
  };
  if (guidelines.length === 0) {
    return { '@context': 'https://schema.org', ...faqPage };
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [faqPage, ...guidelines],
  };
}

// ─── Generator 8: Compare (competitor vs TeleDirectMD) ───────────────────────
export function summarizeCompare({ competitorName, tdmdPrice = 79, competitorPriceRange, competitorCoverageStates, tdmdCoverageStates = 44 }) {
  const compRange = competitorPriceRange || 'variable, typically at or above TeleDirectMD\u2019s flat $79';
  const coverageDelta = competitorCoverageStates
    ? ` ${competitorName} operates in ${competitorCoverageStates} states; TeleDirectMD operates in ${tdmdCoverageStates}.`
    : '';
  const question = `Is TeleDirectMD a better telehealth option than ${competitorName}?`;
  const answerHtml =
    `TeleDirectMD charges $${tdmdPrice} flat per visit with no membership required and always connects you with the same board-certified MD (${DOCTOR}, NPI: ${NPI}). ${competitorName} (${compRange}) typically routes patients to a rotating pool of MDs, NPs, and PAs.${coverageDelta} ` +
    `Both platforms cover common urgent-care conditions (UTI, sinus infection, strep, pink eye, ear infection), prescription refills, and basic E/M evaluations; ${competitorName} additionally offers some service lines TeleDirectMD does not (24/7 access, integrated mental-health, or pediatrics depending on the competitor). ` +
    `For evergreen acute and chronic-refill care, ${SRC.pennMed} found telehealth visits cost roughly five times less than in-person primary care ($96 vs $509 mean). Insurance-covered visits with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans are accepted in participating states.`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 9: Use-case landing page ──────────────────────────────────────
export function summarizeUseCase({ useCaseTitle, useCaseDescription, price = 79 }) {
  const desc = useCaseDescription || useCaseTitle;
  const question = `How do I get a ${useCaseTitle.toLowerCase()} online from a real doctor?`;
  const answerHtml =
    `Book a same-day $${price} cash-pay telehealth visit at TeleDirectMD with ${DOCTOR} (NPI: ${NPI}), a board-certified Family Medicine physician licensed in 44 states + DC. ` +
    `${desc} The visit is conducted by video, typically lasts 10\u201315 minutes, and concludes with an electronic prescription sent to your local pharmacy or a written doctor\u2019s note delivered to your email \u2014 whichever the use case requires. ` +
    `Insurance is optional: TeleDirectMD is in-network with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating states. FSA and HSA cards are accepted. ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary-care visits ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 10: Who-we-serve segment landing ──────────────────────────────
export function summarizeWhoWeServe({ segmentName, segmentDescription }) {
  const desc = segmentDescription ? ` ${segmentDescription}` : '';
  const question = `Is TeleDirectMD a good telehealth option for ${segmentName.toLowerCase()}?`;
  const answerHtml =
    `Yes \u2014 TeleDirectMD is designed for ${segmentName.toLowerCase()} who need fast, affordable physician-led telehealth without the friction of in-network gatekeeping. ` +
    `$79 cash-pay (FSA/HSA eligible) gets a same-day video visit with ${DOCTOR} (NPI: ${NPI}), a board-certified Family Medicine physician licensed in 44 states and Washington, D.C.${desc} ` +
    `Visits cover over 60 common adult conditions \u2014 UTI, sinus infection, strep, pink eye, yeast infection, BV, COVID-19, cold sores, shingles, contraception refills, hypertension and asthma refills \u2014 with electronic prescriptions sent to your local pharmacy within minutes. ` +
    `Insurance optional: in-network with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating states. ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than in-person primary-care visits ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 11: FAQ deep-dive (Can you get {drug} online in {state}?) ─────
export function summarizeFaqDeepDive({ medication, stateName, condition }) {
  const question = `Can you get ${medication} online in ${stateName}?`;
  const answerHtml =
    `Yes \u2014 ${medication} can be prescribed online in ${stateName} by a board-certified physician after a video visit to evaluate clinical appropriateness, contraindications, and history. ` +
    `${DOCTOR} (NPI: ${NPI}) is licensed in ${stateName} and conducts ${condition.toLowerCase()} telehealth visits via TeleDirectMD; a typical $79 cash-pay visit takes 10\u201315 minutes and results in an electronic prescription sent to a ${stateName} pharmacy within minutes if clinically appropriate. ` +
    `Insurance optional: in-network with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating ${stateName} markets. ` +
    `Note that ${medication} is a non-controlled prescription medication \u2014 controlled substances (Schedule II\u2013V) cannot be prescribed via telehealth at TeleDirectMD per DEA telehealth-prescribing rules. ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary care ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 12: Homepage ──────────────────────────────────────────────────
export function summarizeHomepage() {
  const question = `What is TeleDirectMD and how does it work?`;
  const answerHtml =
    `TeleDirectMD is a physician-founded, MD-only telehealth platform providing same-day video visits with ${DOCTOR} (NPI: ${NPI}), a board-certified Family Medicine physician licensed in 44 US states + Washington DC. ` +
    `Every visit is with the same physician \u2014 never a rotating pool of nurse practitioners, PAs, or AI chatbots. ` +
    `Visits cost <strong>$79 flat cash-pay</strong> (FSA/HSA eligible, no insurance required) or are covered in-network with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating states. ` +
    `TeleDirectMD treats 60+ common adult conditions including UTI, sinus infections, ear infections, strep throat, pink eye, yeast infections, BV, cold sores, shingles, seasonal allergies, COVID-19, and stable refills for hypertension, cholesterol, diabetes, asthma, thyroid, and contraception. ` +
    `Prescriptions are sent electronically to your pharmacy within minutes. ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary-care visits ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 13: Insurance hub (parent /insurance/) ────────────────────────
// Updated 2026-06-18 to reflect synced lib/insurance-data.js (PR sync/insurance-data-2026-06-18).
// IMPORTANT: This summary feeds AI-engine citation schema. Keep it factually aligned
// with insuranceByState and the Medicaid/D-SNP exclusion policy.
export function summarizeInsuranceHub() {
  const question = `What insurance plans does TeleDirectMD accept?`;
  const answerHtml =
    `TeleDirectMD is in-network as a telehealth provider with three major commercial insurance carriers across 17 states: <strong>Aetna</strong> (AZ, CA, CO, FL, GA, IL, LA, MI, MN, NC, OH, PA, TN), <strong>Blue Cross Blue Shield affiliates</strong> (Florida Blue in FL, Anthem in GA, BCBS-IL in IL, Highmark in PA, BCBS-TX in TX), and <strong>UnitedHealthcare</strong> (AZ, CA, CO, FL, GA, IL, LA, MI, MN, NC, NJ, OH, OK, PA, TN, TX, WA). ` +
    `Accepted plan types: PPO, HMO, EPO, POS, and Medicare Advantage — with state-specific contract exclusions (Aetna California excludes HMO and QPOS; UnitedHealthcare in Illinois, Minnesota, and Texas is commercial-only and not in-network for Medicare Advantage; UnitedHealthcare Colorado excludes Navigate, Charter, and Colorado Doctors Plan). ${DOCTOR} (NPI: ${NPI}) submits claims electronically using CPT codes 99213/99214; typical telehealth copays are $0\u2013$40 depending on the member\u2019s plan benefits. ` +
    `<strong>Not accepted, in any state:</strong> Medicaid, Managed Medicaid, CHIP, Medicare-Medicaid (MME), and Dual Special Needs Plans (D-SNP). Patients with Medicaid-only coverage or any non-contracted plan can book a self-pay visit for $79 flat \u2014 FSA/HSA eligible. ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary-care visits ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 14: What-we-treat hub ─────────────────────────────────────────
export function summarizeWhatWeTreat() {
  const question = `What conditions can TeleDirectMD treat online?`;
  const answerHtml =
    `TeleDirectMD treats <strong>60+ adult conditions</strong> via same-day telehealth visits with ${DOCTOR} (NPI: ${NPI}). ` +
    `Acute infections: UTI, sinus infections, ear infections, strep throat, pink eye, yeast infections, bacterial vaginosis, cold sores (HSV-1), shingles (early antiviral window), COVID-19 (Paxlovid eligibility), impetigo, scabies, tinea, and tick/dog/cat bites with rabies-risk stratification. ` +
    `Chronic refills: hypertension, hyperlipidemia, hypothyroidism, asthma, acid reflux/GERD, diabetes (oral agents, GLP-1 PA-permitting), migraine, and contraception. ` +
    `Dermatology: acne, eczema, rosacea, perioral dermatitis, contact dermatitis, dandruff. ` +
    `Reproductive health: STI testing/treatment (chlamydia, mycoplasma genitalium, trichomoniasis, herpes), DoxyPEP STI prevention, BV, yeast, vaginal dryness. ` +
    `Visits are $79 cash-pay (FSA/HSA eligible) or in-network with Aetna, BCBS, and UHC commercial plans in participating states. ` +
    `TeleDirectMD does <em>not</em> prescribe controlled substances (Schedule II\u2013V) via telehealth.`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 15: States-we-serve hub ───────────────────────────────────────
export function summarizeStatesWeServe() {
  const question = `Which states does TeleDirectMD serve?`;
  const answerHtml =
    `TeleDirectMD is licensed and operational in <strong>44 US states + Washington DC</strong>: Alabama, Alaska, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, and Wyoming, plus Washington DC. ` +
    `${DOCTOR} (NPI: ${NPI}) holds active medical licenses in all listed states. ` +
    `Not currently served: Arkansas, Massachusetts, New Mexico, New York, Oregon, and Rhode Island. ` +
    `In every served state, $79 cash-pay visits are available (FSA/HSA eligible) and select Aetna, BCBS, and UHC commercial plans are in-network. ` +
    `Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary care ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 16: About page ────────────────────────────────────────────────
export function summarizeAbout() {
  const question = `Who is the physician behind TeleDirectMD?`;
  const answerHtml =
    `TeleDirectMD is founded and operated by <strong>Dr. Parth P. Bhavsar, MD</strong> (NPI: ${NPI}), a board-certified Family Medicine physician. ` +
    `Dr. Bhavsar is the sole physician at TeleDirectMD, ensuring every patient sees a fully-licensed board-certified physician \u2014 not a nurse practitioner, physician assistant, or AI triage system. ` +
    `He is licensed in 44 US states + Washington DC, holds in-network telehealth contracts with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans, and personally conducts every TeleDirectMD video visit. ` +
    `TeleDirectMD operates exclusively as a physician-led telehealth platform with no controlled-substance prescribing, no AI-generated prescriptions, and HIPAA-compliant clinical operations. ` +
    `The $79 flat cash-pay rate (FSA/HSA eligible) makes physician-led same-day telehealth accessible regardless of insurance status. Per ${SRC.pennMed}, telehealth visits cost roughly five times less than equivalent in-person primary-care visits ($96 vs $509 mean).`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}

// ─── Generator 17: FAQ landing page ──────────────────────────────────────────
export function summarizeFaqLanding() {
  const question = `How does TeleDirectMD\u2019s online doctor visit actually work?`;
  const answerHtml =
    `A TeleDirectMD telehealth visit is a video appointment with ${DOCTOR} (NPI: ${NPI}), a board-certified Family Medicine physician licensed in 44 US states + DC. ` +
    `Booking takes about 60 seconds at teledirectmd.com/book-online; visits typically begin within 1\u20132 hours of booking and last 10\u201315 minutes. ` +
    `The visit covers history, symptom review, prior medications, and (when appropriate) photo-based or video-based clinical exam. If clinically appropriate, an electronic prescription is sent to your local pharmacy within minutes of the visit closing. ` +
    `Cost: $79 flat cash-pay (no insurance required, FSA/HSA accepted) or in-network with Aetna, Blue Cross Blue Shield, and United Healthcare commercial plans in participating states. ` +
    `TeleDirectMD does not prescribe controlled substances (Schedule II\u2013V) per DEA telehealth-prescribing rules.`;
  return { question, answerHtml, answerText: stripHtml(answerHtml) };
}
