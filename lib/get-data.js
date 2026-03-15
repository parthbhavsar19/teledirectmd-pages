import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getStates() {
  const raw = fs.readFileSync(path.join(dataDir, 'states.json'), 'utf-8');
  return JSON.parse(raw);
}

export function getConditionSlugs() {
  const conditionsDir = path.join(dataDir, 'conditions');
  return fs
    .readdirSync(conditionsDir)
    .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
    .map((f) => f.replace('.json', ''));
}

export function getCondition(slug) {
  const filePath = path.join(dataDir, 'conditions', `${slug}.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function getStateBySlug(slug) {
  const states = getStates();
  return states.find((s) => s.slug === slug);
}

function replacePlaceholders(text, state, condition) {
  if (typeof text !== 'string') return text;
  const cities = state.cities || [];
  const pharmacies = state.pharmacies || ['CVS', 'Walgreens', 'Walmart Pharmacy'];
  return text
    .replace(/\{state\}/g, state.name)
    .replace(/\{stateAbbr\}/g, state.abbr)
    .replace(/\{stateSlug\}/g, state.slug)
    .replace(/\{cities\}/g, cities.slice(0, 10).join(', ') + ', and surrounding areas')
    .replace(/\{citiesExtended\}/g, cities.join(', ') + ', and surrounding communities')
    .replace(/\{city1\}/g, cities[0] || '')
    .replace(/\{city2\}/g, cities[1] || '')
    .replace(/\{city3\}/g, cities[2] || '')
    .replace(/\{pharmacies\}/g, pharmacies.join(', '))
    .replace(/\{telehealthRegulation\}/g, state.telehealthRegulation || '');
}

function processValue(value, state, condition) {
  if (typeof value === 'string') return replacePlaceholders(value, state, condition);
  if (Array.isArray(value)) return value.map((v) => processValue(v, state, condition));
  if (value && typeof value === 'object') {
    const result = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = processValue(v, state, condition);
    }
    return result;
  }
  return value;
}

export function getConditionCategories() {
  const raw = fs.readFileSync(path.join(dataDir, 'condition-categories.json'), 'utf-8');
  return JSON.parse(raw);
}

export function resolveConditionForState(condition, state) {
  return processValue(condition, state, condition);
}

/* ── National (no-state) helpers ── */

function replaceNationalPlaceholders(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/\{state\}/g, 'the United States')
    .replace(/\{stateAbbr\}/g, 'US')
    .replace(/\{stateSlug\}/g, 'us')
    .replace(/\{cities\}/g, 'communities nationwide')
    .replace(/\{citiesExtended\}/g, 'cities and communities across the country')
    .replace(/\{city1\}/g, 'Atlanta')
    .replace(/\{city2\}/g, 'Dallas')
    .replace(/\{city3\}/g, 'Chicago')
    .replace(/\{pharmacies\}/g, 'CVS, Walgreens, Walmart Pharmacy')
    .replace(/\{telehealthRegulation\}/g, 'TeleDirectMD follows all applicable state telehealth regulations for each state in which it operates.');
}

function processNationalValue(value) {
  if (typeof value === 'string') return replaceNationalPlaceholders(value);
  if (Array.isArray(value)) return value.map((v) => processNationalValue(v));
  if (value && typeof value === 'object') {
    const result = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = processNationalValue(v);
    }
    return result;
  }
  return value;
}

export function resolveConditionNational(condition) {
  return processNationalValue(condition);
}
