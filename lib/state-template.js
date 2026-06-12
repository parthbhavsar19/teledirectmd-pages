// State-template loader + merge helpers.
// Created 2026-06-10 (Phase 2 of SEO recovery).
//
// USAGE FROM PAGE TEMPLATE:
//   import { loadStateTemplate, mergeFaqs } from '@/lib/state-template';
//   const stateTemplate = loadStateTemplate(slug);  // returns null if no template
//   if (stateTemplate) { ...inject blocks... }
//
// FALLBACK BEHAVIOR:
// If data/state-templates/{slug}.json does NOT exist, this module returns null
// and the page template falls back to current generic behavior.
//
// See data/state-templates/_schema.md for the full schema and quality bar.

import fs from 'fs';
import path from 'path';
import { assertPayerTruth, getPayerMode } from './payer-truth';
import stateLicensesData from '../data/state-licenses.json';

const stateTemplatesDir = path.join(process.cwd(), 'data', 'state-templates');

/**
 * Returns true if the state's license is verified and ready for Phase 3 rollout.
 * False when the license number is missing or the record has open status flags
 * (e.g., pending application, IMLC pathway unverified, no license registry entry).
 * Source: data/state-licenses.json licenses[slug].phase3Ready.
 */
export function isStateLicensePhase3Ready(slug) {
  const license = (stateLicensesData.licenses || {})[slug];
  return Boolean(license && license.phase3Ready);
}

/**
 * Returns the state-template JSON for a given state slug, or null if no
 * template exists yet for that state. Cached per-process.
 */
const _cache = new Map();
export function loadStateTemplate(slug) {
  if (_cache.has(slug)) return _cache.get(slug);
  const filePath = path.join(stateTemplatesDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    _cache.set(slug, null);
    return null;
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const tpl = JSON.parse(raw);
    // FTC NextMed compliance gate: payer truth check at load time.
    // Fails the build if a state JSON claims payer enrollment we don't have.
    if (tpl.stateCode && tpl.stateInsurance) {
      assertPayerTruth(tpl.stateCode, tpl.stateInsurance);
    }
    // Phase 3 readiness gate: refuse to render a state template whose license
    // has open verification flags (DC: no license #, KS: pending application,
    // MI: IMLC sunset pathway unverified). Returns null (falls back to generic)
    // so the build doesn't crash, but the page won't render state-specific
    // license/board content with placeholder values. Add the verified license
    // number to data/state-licenses.json and set phase3Ready: true to enable.
    if (!isStateLicensePhase3Ready(slug)) {
      console.warn(`[state-template] ${slug}.json present but license not Phase 3 ready — falling back to generic. See data/state-licenses.json notes.`);
      _cache.set(slug, null);
      return null;
    }
    _cache.set(slug, tpl);
    return tpl;
  } catch (err) {
    // Be loud — bad state template should fail build, not silently render generic.
    throw new Error(`[state-template] Failed to load ${filePath}: ${err.message}`);
  }
}

/**
 * Returns true if a state has a populated template.
 */
export function hasStateTemplate(slug) {
  return loadStateTemplate(slug) !== null;
}

/**
 * Returns the per-condition override block for a given (state, condition) pair,
 * or null if no override is defined. Used to inject condition × state intersection
 * facts into the page.
 */
export function getConditionOverride(stateTemplate, conditionSlug) {
  if (!stateTemplate || !stateTemplate.conditionOverrides) return null;
  return stateTemplate.conditionOverrides[conditionSlug] || null;
}

/**
 * Merge state-specific FAQ items with the condition's default FAQ items.
 * State FAQs are appended AFTER condition FAQs and also flow into the
 * FAQPage JSON-LD automatically since both consume from the same array.
 */
export function mergeFaqs(conditionFaqItems, stateTemplate) {
  if (!stateTemplate || !Array.isArray(stateTemplate.stateFaqs)) {
    return conditionFaqItems;
  }
  return [...(conditionFaqItems || []), ...stateTemplate.stateFaqs];
}

/**
 * Validates a state template meets the quality bar from _schema.md.
 * Called at build time (scripts/validate-state-templates.js) — not at render.
 * Returns an array of issue strings; empty array means PASS.
 */
export function validateStateTemplate(stateTemplate) {
  const issues = [];
  if (!stateTemplate) return ['template is null'];

  const required = [
    'stateCode', 'stateName', 'schemaVersion', 'lastReviewed', 'voiceProfile',
    'stateHero', 'stateEligibility', 'statePricing', 'stateTreatmentContext',
    'stateEpidemiology', 'stateCompliance', 'stateCities', 'stateInsurance',
    'stateFaqs', 'conditionOverrides', 'stateLegalLayer',
  ];
  for (const key of required) {
    if (!(key in stateTemplate)) issues.push(`missing required key: ${key}`);
  }

  // Saturation check — count state-name mentions across all narrative blocks
  const stateName = stateTemplate.stateName;
  if (stateName) {
    const allText = JSON.stringify(stateTemplate);
    const count = (allText.match(new RegExp(`\\b${stateName}\\b`, 'gi')) || []).length;
    if (count < 60) {
      issues.push(`state-name mention saturation low: ${count} (target: ≥60)`);
    }
  }

  // FAQ check
  if (Array.isArray(stateTemplate.stateFaqs) && stateTemplate.stateFaqs.length < 4) {
    issues.push(`stateFaqs has only ${stateTemplate.stateFaqs.length} items (target: 6)`);
  }

  // lastReviewed staleness check
  if (stateTemplate.lastReviewed) {
    const reviewed = new Date(stateTemplate.lastReviewed);
    const ageMs = Date.now() - reviewed.getTime();
    const ageDays = ageMs / (1000 * 60 * 60 * 24);
    if (ageDays > 30) {
      issues.push(`lastReviewed is ${Math.floor(ageDays)} days stale`);
    }
  }

  return issues;
}
