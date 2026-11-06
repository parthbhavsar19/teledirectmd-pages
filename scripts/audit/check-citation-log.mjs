#!/usr/bin/env node
// check-citation-log.mjs
//
// Gate for health guide citations. See docs/health-guides/GUIDE_SPEC.md, section 4.
// Usage: node scripts/audit/check-citation-log.mjs <guide index.html> <citation-log.json>
// Exit 0 = pass, 1 = fail. Warnings (partly supported, not checkable) do not fail
// the run but are printed so they can be listed in the PR description.

import { readFileSync } from 'fs';

const [, , htmlPath, logPath] = process.argv;
if (!htmlPath || !logPath) {
  console.error('usage: check-citation-log.mjs <guide index.html> <citation-log.json>');
  process.exit(2);
}

const html = readFileSync(htmlPath, 'utf8');
const log = JSON.parse(readFileSync(logPath, 'utf8'));
const errors = [];
const warnings = [];

// Reference list: the last <ol> after the References heading.
const refStart = html.lastIndexOf('References</h2>');
if (refStart < 0) errors.push('guide has no "References" H2');
const refSection = refStart >= 0 ? html.slice(refStart, html.indexOf('</ol>', refStart) + 5) : '';
const refItems = [...refSection.matchAll(/<li[\s\S]*?<\/li>/g)].map((m) => m[0]);
const refHrefs = refItems.map((li) => (li.match(/href="([^"]+)"/) || [])[1] || null);

// Inline citation numbers used in the body.
const body = refStart >= 0 ? html.slice(0, refStart) : html;
const bodyText = body.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
const used = new Set();
for (const m of bodyText.matchAll(/\[([\d,\s–-]+)\]/g)) {
  for (const n of m[1].match(/\d+/g) || []) used.add(Number(n));
}

const byN = new Map(log.references.map((r) => [r.n, r]));

if (refItems.length !== log.references.length) {
  errors.push(`reference list has ${refItems.length} items but log has ${log.references.length}`);
}
for (const n of used) {
  if (n > refItems.length) errors.push(`body cites [${n}] but the reference list has ${refItems.length} items`);
  if (!byN.has(n)) errors.push(`body cites [${n}] with no log entry`);
}

for (const r of log.references) {
  const tag = `ref ${r.n}`;
  if (r.kind === 'journal' && !r.pmid && !r.doi) errors.push(`${tag}: journal reference has neither PMID nor DOI`);
  const href = refHrefs[r.n - 1];
  if (href && r.url && href !== r.url) errors.push(`${tag}: guide links ${href} but log records ${r.url}`);
  for (const notice of r.editorial_notices || []) {
    if (/retract|concern|withdraw/i.test(notice)) errors.push(`${tag}: editorial notice "${notice}"`);
  }
  if (!r.claims || r.claims.length === 0) errors.push(`${tag}: no claims logged`);
  for (const c of r.claims || []) {
    if (c.verdict === 'not_supported' || c.verdict === 'link_mismatch') {
      errors.push(`${tag}: ${c.verdict}: "${(c.text || '').slice(0, 90)}"`);
    } else if (c.verdict === 'supported' && !c.quote) {
      errors.push(`${tag}: supported claim has no quote: "${(c.text || '').slice(0, 90)}"`);
    } else if (c.verdict === 'partly_supported' || c.verdict === 'not_checkable') {
      warnings.push(`${tag}: ${c.verdict}: "${(c.text || '').slice(0, 90)}"`);
    }
  }
}

for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.log(`FAIL  ${e}`);
console.log(errors.length ? `\nGate FAILED: ${errors.length} error(s), ${warnings.length} warning(s)` : `\nGate passed: ${log.references.length} references, ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
