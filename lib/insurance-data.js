// ─── Insurance data: states where we accept insurance ───
// This is the SINGLE SOURCE OF TRUTH for all pages that reference insurance.
// Keep in sync with InsuranceClient.js (which has its own copy for client-side rendering).
// The recurring Mon/Wed/Fri monitoring task updates both this file and InsuranceClient.js.
//
// 2026-06-18 sync (commit: sync/insurance-data-2026-06-18):
//   Source of truth: Payor Enrollment Tracking Sheet
//   https://docs.google.com/spreadsheets/d/1CQEc1pok1h-kUYFV8RkUIv1MpVymcjNf1gyXxu79yEk/edit
//   Reconciled against signed contract PDFs and Notion Insurance Payor Enrollment DB.
//
// Plan-type policy:
//   - Surface "PPO, HMO, EPO, POS, Medicare Advantage" by default
//   - State-specific exclusions captured in `plans` (long) and `planSummary` (short)
//   - Medicaid, Managed Medicaid, CHIP, MME, and D-SNP are NEVER surfaced — sitewide exclusion
//     rendered separately by lib/medicaid-exclusion.js
//
// Plan fields:
//   - plans:        Long label (inline text on state-condition pages). Includes state exclusions.
//   - planSummary:  Short label (cards, schema names). 5-8 words max.
//   - status:       'active' (default if absent) | 'pending' | omitted-for-closed
//   - effectiveDate: ISO date string for active rows
//   - anchor:       Slug for in-page section anchors

export const insuranceByState = {
  AZ: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-13', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-13', anchor: 'uhc-coverage' },
    { name: 'Blue Cross Blue Shield of Arizona', displayName: 'BCBS of Arizona',
      plans: '', planSummary: '',
      status: 'pending', anchor: 'bcbs-az-coverage' },
  ],
  CA: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, EPO, POS, Medicare Advantage (excludes HMO and QPOS plans)',
      planSummary: 'Commercial PPO/EPO/POS + MA (no HMO)',
      status: 'active', effectiveDate: '2026-04-30', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-05-29', anchor: 'uhc-coverage' },
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  CO: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-04-10', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage (excludes Navigate, Charter, Colorado Doctors Plan)',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-04-03', anchor: 'uhc-coverage' },
  ],
  DC: [
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  FL: [
    // Florida Blue: Commercial only — Florida Blue Medicare Advantage,
    // Florida Blue Medicaid, and Federal Employee Program (FEP) are NOT in-network.
    { name: 'Florida Blue', displayName: 'Florida Blue (BCBS of Florida)',
      plans: 'PPO, HMO, EPO, POS (Commercial only — Medicare Advantage, Medicaid, and FEP not in-network)',
      planSummary: 'Commercial only (no MA)',
      status: 'active', effectiveDate: '2026-02-01', anchor: 'florida-blue-coverage' },
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-02-11', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-12', anchor: 'uhc-coverage' },
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  GA: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-02-10', anchor: 'aetna-coverage' },
    { name: 'Anthem Blue Cross Blue Shield', displayName: 'Anthem Blue Cross Blue Shield',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-02-12', anchor: 'anthem-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-04-03', anchor: 'uhc-coverage' },
    // Curative: employer-sponsored plan. GA members reach the network through
    // Curative's Cigna Healthcare PPO wrap; TeleDirectMD contracts directly with Curative.
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  IL: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-11', anchor: 'aetna-coverage' },
    { name: 'Blue Cross Blue Shield of Illinois', displayName: 'Blue Cross Blue Shield of Illinois',
      plans: 'Blue Choice PPO, Broad PPO, HPN EPO, Medicare Advantage PPO',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-02', anchor: 'bcbs-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      // UHC IL contract excludes Medicare Advantage (NPA Sec 2)
      plans: 'PPO, HMO, EPO, POS (Commercial only — Medicare Advantage not in-network in Illinois)',
      planSummary: 'Commercial only (no Medicare Advantage)',
      status: 'active', effectiveDate: '2026-04-12', anchor: 'uhc-coverage' },
  ],
  IN: [
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  LA: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-06-15', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-24', anchor: 'uhc-coverage' },
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  MD: [
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  MI: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-27', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-24', anchor: 'uhc-coverage' },
  ],
  MN: [
    // Aetna in Minnesota is the Allina Health | Aetna joint venture
    { name: 'Allina Health | Aetna', displayName: 'Allina Health | Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-31', anchor: 'allina-aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      // UHC MN contract is Commercial only (MA not selected)
      plans: 'PPO, HMO, EPO, POS (Commercial only — Medicare Advantage not in-network in Minnesota)',
      planSummary: 'Commercial only (no Medicare Advantage)',
      status: 'active', effectiveDate: '2026-03-29', anchor: 'uhc-coverage' },
  ],
  NC: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-04-17', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-04-14', anchor: 'uhc-coverage' },
  ],
  NJ: [
    // Only the UHC Commercial contract is surfaced — UHC Community Plan (NJ FamilyCare Medicaid)
    // is signed but intentionally never surfaced on the consumer site.
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-04-06', anchor: 'uhc-coverage' },
  ],
  OH: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-25', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-30', anchor: 'uhc-coverage' },
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  OK: [
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-30', anchor: 'uhc-coverage' },
  ],
  PA: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-05-08', anchor: 'aetna-coverage' },
    { name: 'Highmark Blue Cross Blue Shield', displayName: 'Highmark Blue Cross Blue Shield',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2025-12-01', anchor: 'highmark-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-26', anchor: 'uhc-coverage' },
  ],
  TN: [
    { name: 'Aetna', displayName: 'Aetna',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-02-24', anchor: 'aetna-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-27', anchor: 'uhc-coverage' },
  ],
  TX: [
    // BCBS-TX contract includes D-SNP and WellMed MA HMO; both intentionally
    // omitted from public-facing plan lists per Medicaid/D-SNP exclusion policy.
    { name: 'Blue Cross Blue Shield of Texas', displayName: 'BCBS of Texas',
      plans: 'Blue Advantage HMO, Blue Choice PPO, Health Select, Blue Essentials, Medicare Advantage HMO, Medicare Advantage PPO',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-02-18', anchor: 'bcbs-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      // UHC TX contract excludes Medicare Advantage and Individual Exchange (NPA Sec 2)
      plans: 'PPO, HMO, EPO, POS (Commercial only — Medicare Advantage not in-network in Texas)',
      planSummary: 'Commercial only (no Medicare Advantage)',
      status: 'active', effectiveDate: '2026-03-27', anchor: 'uhc-coverage' },
    // TX Aetna removed — closed for telehealth-only per 2026-06-18 Sheet reconciliation
    // Curative: employer-sponsored plan, national contract with a state
    // regulatory addendum for this jurisdiction (contract Exhibit D).
    { name: 'Curative', displayName: 'Curative',
      plans: 'Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), PPO Max)',
      planSummary: 'Commercial PPO, EPO, self-funded',
      status: 'active', effectiveDate: '2026-07-07', anchor: 'curative-coverage' },
  ],
  WA: [
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare',
      // UHC WA contract includes Medicaid and Uninsured benefit contracts; both
      // intentionally omitted from public-facing plan lists per sitewide policy.
      plans: 'PPO, HMO, EPO, POS, Medicare Advantage',
      planSummary: 'Commercial + Medicare Advantage',
      status: 'active', effectiveDate: '2026-03-18', anchor: 'uhc-coverage' },
    { name: 'Aetna', displayName: 'Aetna',
      plans: '', planSummary: '',
      status: 'pending', anchor: 'aetna-coverage' },
  ],
};

export function getStateInsurance(stateAbbr) {
  return insuranceByState[stateAbbr] || null;
}

export function hasStateInsurance(stateAbbr) {
  return !!insuranceByState[stateAbbr];
}

export function getInsuranceStateCount() {
  return Object.keys(insuranceByState).length;
}

// ─── Inline insurance section helpers (hybrid consolidation pattern, 2026-05-28) ───
// Used by /[slug]/[conditionSlug]/page.js to render H3-anchored payer sections
// + FAQPage Q&A + MedicalBusiness.acceptedInsurance JSON-LD inline on the
// state×condition page. Replaces the previous separate state×insurance landing
// page approach.
//
// Status values:
//   'active'  → full H3 + FAQ + JSON-LD acceptedInsurance entry rendered
//   'pending' → 'expanding payer relationships' stub only, NO affirmative coverage
//   (omitted) → silently absent — never list lost/declined contracts here
//
// FTC NextMed compliance gate: never claim a payer relationship without a signed
// contract. Pending = stub. Closed contracts = silent omission (never appear in this file).

export function getActiveInsurers(stateAbbr) {
  const list = insuranceByState[stateAbbr] || [];
  return list.filter((p) => !p.status || p.status === 'active');
}

export function getPendingInsurers(stateAbbr) {
  const list = insuranceByState[stateAbbr] || [];
  return list.filter((p) => p.status === 'pending');
}

export function hasInlineInsuranceSection(stateAbbr) {
  const list = insuranceByState[stateAbbr] || [];
  return list.length > 0;
}

// ─── Coverage checker helpers (added 2026-06-18) ───
// Used by the new /insurance/ coverage checker page.

/**
 * Returns the list of unique payer display names across all active rows.
 * Useful for populating the payer dropdown in the checker UI.
 */
export function getAllActivePayerNames() {
  const names = new Set();
  for (const stateAbbr of Object.keys(insuranceByState)) {
    for (const p of getActiveInsurers(stateAbbr)) {
      names.add(p.displayName || p.name);
    }
  }
  return Array.from(names).sort();
}

/**
 * Returns the count of unique payers (collapsed across state-specific names).
 * BCBS affiliates are collapsed to one. Used for the trust strip on /insurance/.
 */
export function getUniquePayerFamilyCount() {
  const families = new Set();
  for (const stateAbbr of Object.keys(insuranceByState)) {
    for (const p of getActiveInsurers(stateAbbr)) {
      const name = (p.displayName || p.name).toLowerCase();
      if (name.includes('aetna')) families.add('aetna');
      else if (name.includes('blue') || name.includes('bcbs') || name.includes('highmark') || name.includes('anthem') || name.includes('florida blue')) families.add('bcbs');
      else if (name.includes('united')) families.add('uhc');
      else families.add(name);
    }
  }
  return families.size;
}


// ─── Payer-family helpers (added 2026-06-18 for consolidation sweep) ───────────
// Used by /insurance/{family}/ hub pages and the dynamic state-count claims
// scattered across compare/, cost/, use-case/, symptoms/, and the payer hubs.
//
// Family detection collapses BCBS affiliates (Florida Blue, Anthem, Highmark,
// BCBS-IL, BCBS-TX, BCBS-AZ) into one logical 'bcbs' family for counting and
// linking purposes. Allina | Aetna is part of the 'aetna' family.

const PAYER_FAMILY_PATTERNS = {
  aetna: /\b(aetna|allina)\b/i,
  bcbs: /\b(blue cross|bcbs|anthem|highmark|florida blue)\b/i,
  uhc: /\b(unitedhealthcare|united healthcare|uhc)\b/i,
  curative: /\bcurative\b/i,
};

/**
 * Returns true if a payer object belongs to the given family ('aetna','bcbs','uhc').
 */
export function isPayerInFamily(payer, family) {
  if (!payer || !PAYER_FAMILY_PATTERNS[family]) return false;
  const name = payer.displayName || payer.name || '';
  return PAYER_FAMILY_PATTERNS[family].test(name);
}

/**
 * Returns the array of state abbreviations where a given payer family has an
 * active contract. Pending stubs are NOT counted. Used everywhere the site
 * previously hardcoded "Aetna in 10 states" etc.
 */
export function getPayerFamilyStates(family) {
  const states = [];
  for (const [stateAbbr, list] of Object.entries(insuranceByState)) {
    const hasFamily = (list || []).some(
      (p) => isPayerInFamily(p, family) && (!p.status || p.status === 'active')
    );
    if (hasFamily) states.push(stateAbbr);
  }
  return states.sort();
}

/**
 * Convenience: just the count.
 */
export function getPayerFamilyStateCount(family) {
  return getPayerFamilyStates(family).length;
}

/**
 * Returns the alphabetized list of full state names for a payer family.
 * Used for SEO copy ("Arizona, California, Colorado, ...").
 */
export function getPayerFamilyStateNames(family) {
  const STATE_NAMES = {
    AZ:'Arizona', CA:'California', CO:'Colorado', FL:'Florida', GA:'Georgia',
    IL:'Illinois', LA:'Louisiana', MI:'Michigan', MN:'Minnesota', NC:'North Carolina',
    NJ:'New Jersey', OH:'Ohio', OK:'Oklahoma', PA:'Pennsylvania', TN:'Tennessee',
    TX:'Texas', WA:'Washington',
  };
  return getPayerFamilyStates(family).map((s) => STATE_NAMES[s] || s);
}
