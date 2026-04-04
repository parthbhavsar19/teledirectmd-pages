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
    // --- Specific phrase patterns (order matters — do these BEFORE generic catches) ---

    // "located in {state} and" → "located in one of our covered states and"
    .replace(/located in \{state\}/g, 'located in one of our covered states')
    // "physically in {state}" → "physically in one of our covered states"
    .replace(/physically in \{state\}/g, 'physically in one of our covered states')
    // "currently in {state}" → "currently in one of our covered states"
    .replace(/currently in \{state\}/g, 'currently in one of our covered states')
    // "in {state} at the time" → "in one of our covered states at the time"
    .replace(/in \{state\} at the time/g, 'in one of our covered states at the time')
    // "in {state} during" → "in one of our covered states during"
    .replace(/in \{state\} during/g, 'in one of our covered states during')
    // "in {state} using" → "using" (e.g. "provides ... in {state} using secure video")
    .replace(/ in \{state\} using /g, ' using ')
    // "in {state} with" → "with"
    .replace(/ in \{state\} with /g, ' with ')
    // "in {state} may" → "may"
    .replace(/ in \{state\} may /g, ' may ')
    // "in {state} by TeleDirectMD" → "by TeleDirectMD"
    .replace(/ in \{state\} by /g, ' by ')
    // "in {state} and your" → "and your"
    .replace(/ in \{state\} and /g, ' and ')
    // "throughout {state}" → "across the country"
    .replace(/throughout \{state\}/g, 'across the country')
    // "a {state} licensed" → "a licensed"
    .replace(/a \{state\} licensed/g, 'a licensed')
    // "See a {state} licensed MD" → "See a licensed MD"
    // (handled by the above)
    // "common {state} pharmacies" → "common pharmacies"
    .replace(/common \{state\} pharmacies/g, 'common pharmacies')
    // "common {state} chronic" → "common chronic"
    .replace(/common \{state\} chronic/g, 'common chronic')
    // "for {state} adults" / "for {state} men" / "for {state} adult" → "for adults" / "for men" / "for adult"
    .replace(/for \{state\} /g, 'for ')
    // "so {state} adults" → "so adults"
    .replace(/so \{state\} adults/g, 'so adults')
    // "Does {state} allow" → "Does your state allow"
    .replace(/Does \{state\} allow/g, 'Does your state allow')
    // "{state} allows" → "Your state allows" (FAQ answers)
    .replace(/\{state\} allows/g, 'Your state allows')
    // "Use {state} as" / "Use {state} for" → contextual cleanup
    .replace(/Use \{state\} as/g, 'Use your state as')
    .replace(/Use \{state\} for/g, 'Use your state for')
    // "{state} Telehealth Regulations" → "Telehealth Regulations"
    .replace(/\{state\} Telehealth Regulations/g, 'Telehealth Regulations')

    // --- Generic trailing/mid-sentence cleanup ---

    // " in {state} |" → " |" (title tags)
    .replace(/ in \{state\} \|/g, ' |')
    // " in {state}?" / " in {state}." / " in {state}:" / " in {state}," → just the punctuation
    .replace(/ in \{state\}([?:,.])/g, '$1')
    .replace(/ for \{state\}([?:,.])/g, '$1')
    // Trailing " in {state}" / " for {state}" at end of string
    .replace(/ in \{state\}$/g, '')
    .replace(/ for \{state\}$/g, '')
    .replace(/ across \{state\}$/g, '')
    // Any remaining " in {state} " mid-sentence
    .replace(/ in \{state\} /g, ' ')
    .replace(/ for \{state\} /g, ' ')
    // "{state} " at start of string — capitalize next word
    .replace(/^\{state\} ([a-z])/g, (_, c) => c.toUpperCase())
    .replace(/^\{state\} /g, '')
    // "{state} X" mid-sentence
    .replace(/\{state\} ([a-z])/g, (_, c) => c.toUpperCase())
    .replace(/\{state\} /g, '')
    // Absolute fallback: any remaining {state}
    .replace(/\{state\}/g, '')

    // --- Other placeholders ---
    .replace(/\{stateAbbr\}/g, 'US')
    .replace(/\{stateSlug\}/g, 'us')
    .replace(/\{cities\}/g, 'communities nationwide')
    .replace(/\{citiesExtended\}/g, 'cities and communities across the country')
    .replace(/\{city1\}/g, 'Atlanta')
    .replace(/\{city2\}/g, 'Dallas')
    .replace(/\{city3\}/g, 'Chicago')
    .replace(/\{pharmacies\}/g, 'CVS, Walgreens, Walmart Pharmacy')
    .replace(/\{telehealthRegulation\}/g, 'TeleDirectMD follows all applicable state telehealth regulations for each state in which it operates.')
    // Clean up double spaces and trim
    .replace(/  +/g, ' ')
    .trim();
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

/* ── Work Note State helpers ── */

export function getWorkNoteStates() {
  const raw = fs.readFileSync(path.join(dataDir, 'work-note-states.json'), 'utf-8');
  return JSON.parse(raw);
}

export function getWorkNoteStateBySlug(slug) {
  const states = getWorkNoteStates();
  return states.find((s) => s.slug === slug) || null;
}
