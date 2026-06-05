// ─── Insurance data: states where we accept insurance ───
// This is the SINGLE SOURCE OF TRUTH for all pages that reference insurance.
// Keep in sync with InsuranceClient.js (which has its own copy for client-side rendering).
// The recurring Mon/Wed/Fri monitoring task updates both this file and InsuranceClient.js.

export const insuranceByState = {
  AZ: [{ name: 'Aetna', plans: 'Commercial plans' }],
  CA: [{ name: 'Aetna', plans: 'Commercial plans' }],
  CO: [{ name: 'Aetna', plans: 'Commercial plans' }, { name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  FL: [{ name: 'Aetna', plans: 'Commercial plans' }, { name: 'Florida Blue', plans: 'Individual and group plans' }],
  GA: [{ name: 'Aetna', plans: 'Commercial plans' }, { name: 'Anthem Blue Cross Blue Shield', plans: 'Commercial plans' }, { name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  IL: [{ name: 'Aetna', plans: 'Commercial plans' }, { name: 'Blue Cross Blue Shield of Illinois', plans: 'Commercial plans' }, { name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  MI: [{ name: 'Aetna', plans: 'Commercial plans' }],
  MN: [{ name: 'Aetna', plans: 'Commercial plans' }, { name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  NC: [{ name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  NJ: [{ name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  OH: [{ name: 'Aetna', plans: 'Commercial plans' }, { name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  PA: [{ name: 'Highmark Blue Cross Blue Shield', plans: 'Commercial plans' }, { name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  TN: [{ name: 'Aetna', plans: 'Commercial plans' }, { name: 'UnitedHealthcare', plans: 'Commercial plans' }],
  TX: [
    { name: 'Blue Cross Blue Shield of Texas', displayName: 'BCBS of Texas', plans: 'Blue Advantage HMO, Blue Choice PPO, Health Select, Blue Essentials, Medicare Advantage', status: 'active', effectiveDate: '2026-02-18', anchor: 'bcbs-coverage' },
    { name: 'UnitedHealthcare', displayName: 'UnitedHealthcare', plans: 'Commercial plans', status: 'active', effectiveDate: '2026-02-01', anchor: 'uhc-coverage' },
    { name: 'Aetna', displayName: 'Aetna', plans: '', status: 'pending', anchor: 'aetna-coverage' },
  ],
  WA: [{ name: 'UnitedHealthcare', plans: 'Commercial plans' }],
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
