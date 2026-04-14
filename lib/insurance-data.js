// ─── Insurance data: states where we accept insurance ───
// This is the SINGLE SOURCE OF TRUTH for all pages that reference insurance.
// Keep in sync with InsuranceClient.js (which has its own copy for client-side rendering).
// The recurring Mon/Wed/Fri monitoring task updates both this file and InsuranceClient.js.

export const insuranceByState = {
  AZ: [{ name: 'Aetna', plans: 'Commercial plans' }],
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
  TX: [{ name: 'Blue Cross Blue Shield of Texas', plans: 'Blue Advantage HMO, Blue Choice PPO, Health Select, Blue Essentials, Medicare Advantage' }],
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
