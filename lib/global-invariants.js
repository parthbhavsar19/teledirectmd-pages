// Global invariants — phrasing that MUST appear identically across all state pages.
// These exist to (a) preserve brand voice consistency, (b) keep compliance/legal
// language reviewable in one place, and (c) prevent drift during the 43-state
// per-state JSON content rollout.
//
// Created 2026-06-10 as part of Phase 2 state-template architecture.
// See /data/state-templates/_schema.md for full rationale.
//
// USAGE: Import in components/templates. NEVER hand-type these strings.
//   import { PRICE, CREDENTIAL_FIRST, COMPLIANCE_BLOCKS } from '@/lib/global-invariants';

// ─────────────────────────────────────────────────────────────────────────────
// PRICE — single source of truth for the cash-pay rate phrasing
// ─────────────────────────────────────────────────────────────────────────────
export const PRICE_AMOUNT = 79;
export const PRICE_PHRASE = '$79 flat self-pay';
export const PRICE_SHORT = '$79';
export const PRICE_HSA_FSA_NOTE = 'HSA and FSA accepted.';

// ─────────────────────────────────────────────────────────────────────────────
// CREDENTIAL — single source of truth for physician identification.
// First mention on any page MUST be CREDENTIAL_FIRST. Subsequent mentions may
// use CREDENTIAL_SHORT or "Dr. Bhavsar".
// ─────────────────────────────────────────────────────────────────────────────
export const PHYSICIAN_NAME = 'Parth Bhavsar, MD';
export const PHYSICIAN_NPI = '1104323203';
export const CREDENTIAL_FIRST = 'Parth Bhavsar, MD — board-certified Family Medicine';
export const CREDENTIAL_SHORT = 'Parth Bhavsar, MD';
export const CREDENTIAL_BOARD = 'American Board of Family Medicine';

// ─────────────────────────────────────────────────────────────────────────────
// COMPLIANCE BLOCKS — word-identical legal/safety phrasing across all states.
// State-specific legal layers go in data/state-templates/{slug}.json under
// `stateLegalLayer` and are RENDERED IN ADDITION to these, never INSTEAD OF.
// ─────────────────────────────────────────────────────────────────────────────
export const COMPLIANCE_BLOCKS = {
  // Universal disclaimer — on every state-condition page.
  notSubstituteForEmergencyCare:
    'Telehealth is not a substitute for emergency care. If you are experiencing chest pain, ' +
    'difficulty breathing, severe bleeding, signs of stroke, or any life-threatening symptoms, ' +
    'call 911 or go to your nearest emergency department immediately.',

  // Self-pay scope disclosure — every page where cash-pay is the primary path.
  selfPayDisclosure:
    'TeleDirectMD operates primarily on a self-pay model. Insurance is accepted only where ' +
    'explicitly noted on the page for your state. Self-pay is $79 flat, with no hidden fees.',

  // No-controlled-substances disclosure — universal across telehealth.
  noControlledSubstances:
    'Per the federal Ryan Haight Act and state prescribing laws, TeleDirectMD does not ' +
    'prescribe DEA-controlled substances (Schedules II–V) including narcotics, benzodiazepines, ' +
    'stimulants, or other controlled medications via telehealth without an established ' +
    'in-person physician-patient relationship.',

  // HIPAA disclosure — universal.
  hipaaCompliance:
    'TeleDirectMD video visits are conducted on HIPAA-compliant infrastructure. Visit notes, ' +
    'prescriptions, and personal health information are encrypted in transit and at rest.',

  // Patient autonomy / informed consent — universal.
  patientAutonomy:
    'Patients retain the right to decline telehealth care and seek in-person evaluation at any ' +
    'time. Clinical recommendations are made in accordance with current evidence-based ' +
    'guidelines, but final treatment decisions are made jointly between physician and patient.',

  // Standard of care — universal, but FL gets a SOFTER variant via stateLegalLayer.
  standardOfCareStandard:
    'Telehealth care via TeleDirectMD is delivered to the same standard as in-person care, ' +
    'consistent with the licensing requirements of the state in which the patient is located.',
};

// ─────────────────────────────────────────────────────────────────────────────
// FORBIDDEN PHRASES — strings that MUST NEVER appear on certain state pages.
// Enforced via build-time check; see scripts/check-forbidden-phrases.js.
// ─────────────────────────────────────────────────────────────────────────────
export const FORBIDDEN_PHRASES_BY_STATE = {
  // FL: Fla. Stat. § 458.331(1)(d) — claiming to be a "Florida-licensed physician"
  // when in fact registered under the out-of-state telehealth provider statute
  // is a material misrepresentation. See data/state-licenses.json fl.notes.
  fl: [
    'Florida-licensed physician',
    'Licensed to practice medicine in Florida',
    'Licensed by the Florida Medical Board',
  ],
  // Add per-state forbidden phrases as state JSONs are built.
};

// ─────────────────────────────────────────────────────────────────────────────
// SAFE-USE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns the canonical first-mention credential string for a state, taking
 * into account FL's special telehealth-registration phrasing.
 * @param {object} state - state object from data/states.json
 * @param {object} license - license object from data/state-licenses.json
 */
export function getCredentialFirst(state, license) {
  if (license && license.phrasingForPages) {
    return `${CREDENTIAL_FIRST} — ${license.phrasingForPages}`;
  }
  return CREDENTIAL_FIRST;
}

/**
 * Asserts that a given content string does not contain any forbidden phrases
 * for the given state. Throws at build time if violated.
 */
export function assertNoForbiddenPhrases(stateSlug, content) {
  const forbidden = FORBIDDEN_PHRASES_BY_STATE[stateSlug] || [];
  for (const phrase of forbidden) {
    if (content.includes(phrase)) {
      throw new Error(
        `[global-invariants] Forbidden phrase "${phrase}" detected on state ${stateSlug}. ` +
        `See lib/global-invariants.js FORBIDDEN_PHRASES_BY_STATE for context.`
      );
    }
  }
}
