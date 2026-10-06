// Regression guard for the founder-directed women-only UTI service scope.
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const root = path.join(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const c = JSON.parse(read('data/conditions/uti-treatment-online.json'));
assert.match(c.hero.subtitle, /do not treat male UTIs/);
assert.match(c.eligibility.eligible[0], /adult woman/);
assert(c.eligibility.notEligible.some(s => /male/i.test(s)));
assert(c.telehealthEligibility.redFlags.items.some(s => /Male patient/.test(s)));
assert.match(c.faq.items.find(f => /male UTIs/.test(f.question)).answer, /^No\./);
assert.doesNotMatch(JSON.stringify(c), /evaluates adult men and women|women or men|Yes\. Unlike many online UTI/);
assert.match(read('app/layout.js'), /<UtiScopeNotice \/>/);
assert.match(read('app/components/UtiScopeNotice.js'), /what-we-treat\|book-online/);
assert.doesNotMatch(read('app/components/UtiScopeNotice.js'), /pathname === '\/'/);
assert.match(read('app/components/SiteFooter.js'), /We do not treat male UTIs/);
assert.match(read('public/symptom-checker/index.html'), /TeleDirectMD does not treat male UTIs/);
assert.match(read('public/symptom-checker/index.html'), /id: "male_uti".*level: "GO_TO_ER"/);
assert(!fs.existsSync(path.join(root, 'public/health-guides/uti-symptoms-in-men-guide/index.html')));
assert(!JSON.parse(read('data/health-guides-citable.json'))['uti-symptoms-in-men-guide']);
assert.doesNotMatch(read('public/health-guides/index.html'), /uti-symptoms-in-men-guide/);
assert(JSON.parse(read('vercel.json')).routes.some(r => r.src.includes('uti-symptoms-in-men-guide') && r.status === 301));
for (const state of ['Ca', 'Vt']) {
  const s = read(`app/[slug]/[conditionSlug]/${state}UtiTreatmentOnline.js`);
  assert.match(s, /Does TeleDirectMD treat male UTIs/);
  assert.match(s, /non-pregnant adult woman/);
  assert.doesNotMatch(s, /Adults 18\+ located|for California adults|for Vermont adults/);
}
if (process.argv.includes('--built')) {
  assert.doesNotMatch(read('out/index.html'), /<aside[^>]*data-uti-scope="women-only"/);
  assert.match(read('out/index.html'), /We do not treat male UTIs/); // Footer stays.
  let count = 0;
  function scan(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) scan(full);
      else if (entry.name === 'index.html' && /uti-treatment|uti-antibiotics|book-online|what-we-treat/.test(full)) {
        assert.match(fs.readFileSync(full, 'utf8'), /We do not treat male UTIs/);
        count++;
      }
    }
  }
  scan(path.join(root, 'out'));
  assert(count > 45, `Only ${count} core pages found`);
  assert.doesNotMatch(read('out/sitemap.xml'), /uti-symptoms-in-men-guide/);
  console.log(`Verified rendered exclusion on ${count} UTI, cost, insurance and booking pages.`);
}
console.log('UTI service-scope checks passed.');
