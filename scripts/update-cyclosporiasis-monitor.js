#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// update-cyclosporiasis-monitor.js
//
// Syncs the published monitor snapshot with the outbreak "truth" file:
//   data/outbreaks/cyclosporiasis-2026.json   (single source of truth)
//     → public/health-guides/cyclosporiasis-outbreak-2026-guide/monitor.json
//
// The truth file is updated by the scheduled Perplexity task (which re-verifies
// CDC + FDA primary sources before writing new numbers). This script just makes
// the change publishable and validates the shape. It does NOT invent numbers.
//
// Usage: node scripts/update-cyclosporiasis-monitor.js
// Runs automatically before build via the prebuild hook.
// ─────────────────────────────────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');

const TRUTH = path.join(__dirname, '..', 'data', 'outbreaks', 'cyclosporiasis-2026.json');
const OUT_DIR = path.join(__dirname, '..', 'public', 'health-guides', 'cyclosporiasis-outbreak-2026-guide');
const OUT = path.join(OUT_DIR, 'monitor.json');

function fail(msg) { console.error(`[cyclospora-monitor] ${msg}`); process.exit(1); }

if (!fs.existsSync(TRUTH)) fail(`truth file missing: ${TRUTH}`);
let data;
try { data = JSON.parse(fs.readFileSync(TRUTH, 'utf8')); }
catch (e) { fail(`truth file is not valid JSON: ${e.message}`); }

// Minimal shape validation — refuse to publish garbage.
const c = data.cdc || {};
const required = ['domesticCases', 'statesReporting', 'hospitalizations', 'deaths', 'asOf'];
for (const k of required) if (c[k] === undefined || c[k] === null) fail(`cdc.${k} missing`);
if (typeof c.domesticCases !== 'number' || c.domesticCases < 0) fail('cdc.domesticCases must be a non-negative number');
// asOf may be an ISO date (2026-08-03) or a CDC-style range string ("May 1 - August 3, 2026").
if (typeof c.asOf !== 'string' || c.asOf.trim().length < 4) fail('cdc.asOf must be a non-empty date or date-range string');
if (!Array.isArray(data.statesHardestHit)) fail('statesHardestHit must be an array');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log(`[cyclospora-monitor] published monitor.json — CDC ${c.domesticCases} cases / ${c.statesReporting} states as of ${c.asOf} (verified ${data.lastVerified})`);
