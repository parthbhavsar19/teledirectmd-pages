// PAYER TRUTH — single source of truth for which states have ACTIVE payer enrollment.
//
// Created 2026-06-10 after catching a near-miss where the Delaware state-template
// was about to claim Highmark + Aetna enrollment that doesn't exist. Going forward,
// any per-state JSON template author (human or AI) MUST consult these helpers
// BEFORE writing payer content for a state.
//
// SOURCE OF TRUTH: lib/insurance-data.js insuranceByState{}
// This module re-exports the truth in a form that's easy to enforce at build time.
//
// FTC NEXTMED COMPLIANCE: Per the comment in insurance-data.js, we NEVER claim
// a payer relationship without a signed contract. Self-pay-only states must
// never mention specific payer acceptance in any per-state JSON content.

import { insuranceByState, getActiveInsurers, getPendingInsurers } from './insurance-data';

/**
 * Returns 'multi-payer', 'single-payer', or 'self-pay-only' for a state abbr.
 * Use this to populate stateInsurance.mode in per-state JSON templates.
 */
export function getPayerMode(stateAbbr) {
  const list = insuranceByState[stateAbbr.toUpperCase()];
  if (!list || list.length === 0) return 'self-pay-only';
  const active = getActiveInsurers(stateAbbr);
  if (active.length === 0) return 'self-pay-only';
  if (active.length === 1) return 'single-payer';
  return 'multi-payer';
}

/**
 * Returns the list of payer names that may be mentioned in this state's content.
 * Returns [] for self-pay-only states. NEVER add a payer name to state content
 * unless it appears in this list.
 */
export function getMentionablePayers(stateAbbr) {
  const active = getActiveInsurers(stateAbbr);
  return active.map((p) => p.displayName || p.name);
}

/**
 * Asserts a state-template JSON's stateInsurance section matches the truth.
 * Called by validateStateTemplate(). Throws if a self-pay state's JSON claims
 * payer acceptance OR a multi-payer state lists payers we don't actually have.
 */
export function assertPayerTruth(stateAbbr, stateInsuranceBlock) {
  const truthMode = getPayerMode(stateAbbr);
  const truthPayers = new Set(getMentionablePayers(stateAbbr).map((p) => p.toLowerCase()));

  const claimedMode = stateInsuranceBlock?.mode;
  if (claimedMode !== truthMode) {
    throw new Error(
      `[payer-truth] State ${stateAbbr}: JSON claims mode="${claimedMode}" but truth is "${truthMode}". ` +
      `Source of truth: lib/insurance-data.js insuranceByState.`
    );
  }

  const claimedPayers = (stateInsuranceBlock?.payers || []).map((p) => (p.name || '').toLowerCase());
  for (const claimed of claimedPayers) {
    if (!truthPayers.has(claimed)) {
      throw new Error(
        `[payer-truth] State ${stateAbbr}: JSON lists payer "${claimed}" but it's not in ` +
        `insuranceByState[${stateAbbr.toUpperCase()}] active list. FTC NextMed compliance: ` +
        `we never claim a payer relationship without a signed contract.`
      );
    }
  }
}

/**
 * Bulk audit: returns {selfPayStates, multiPayerStates} for all licensed states.
 * Used by scripts/audit-payer-truth.js at build time.
 */
export function getAllPayerStatus(licensedStateAbbrs) {
  const selfPay = [];
  const multi = [];
  for (const abbr of licensedStateAbbrs) {
    const mode = getPayerMode(abbr);
    if (mode === 'self-pay-only') selfPay.push(abbr);
    else multi.push(abbr);
  }
  return { selfPayStates: selfPay, multiPayerStates: multi };
}
