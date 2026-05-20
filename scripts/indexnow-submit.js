#!/usr/bin/env node
/**
 * IndexNow URL submission script.
 *
 * Submits one or more URLs to the IndexNow protocol — notifies Bing, Yandex,
 * Seznam, Naver, and Yep simultaneously. Bing's index also feeds Perplexity,
 * ChatGPT browsing, Microsoft Copilot, and Brave Search.
 *
 * Usage:
 *   node scripts/indexnow-submit.js <url1> [url2] [url3] ...
 *   node scripts/indexnow-submit.js --file <path>           (one URL per line)
 *   node scripts/indexnow-submit.js --sitemap               (submit full sitemap)
 *
 * Environment:
 *   INDEXNOW_KEY  — 64-char hex key (required; falls back to .indexnow-key file)
 *   HOST          — teledirectmd.com (default)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = process.env.HOST || 'teledirectmd.com';
const KEY = (process.env.INDEXNOW_KEY ||
  (fs.existsSync(path.join(__dirname, '..', '.indexnow-key'))
    ? fs.readFileSync(path.join(__dirname, '..', '.indexnow-key'), 'utf8').trim()
    : null));

if (!KEY) {
  console.error('ERROR: No IndexNow key found. Set INDEXNOW_KEY env var or create .indexnow-key file.');
  process.exit(1);
}

const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function collectUrls(argv) {
  const args = argv.slice(2);
  let urls = [];
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--file' || a === '-f') {
      const file = args[++i];
      urls = urls.concat(
        fs.readFileSync(file, 'utf8').split('\n').map(s => s.trim()).filter(Boolean)
      );
    } else if (a === '--sitemap') {
      throw new Error('--sitemap not yet implemented; pass URLs explicitly or via --file');
    } else if (a.startsWith('http')) {
      urls.push(a);
    }
  }
  return urls.filter(u => u.startsWith('https://' + HOST + '/'));
}

function submit(urls) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    });
    const req = https.request({
      hostname: 'api.indexnow.org',
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  const urls = collectUrls(process.argv);
  if (urls.length === 0) {
    console.error('ERROR: No valid URLs provided. URLs must start with https://' + HOST + '/');
    process.exit(1);
  }
  if (urls.length > 10000) {
    console.error('ERROR: IndexNow accepts max 10,000 URLs per submission. Got ' + urls.length);
    process.exit(1);
  }
  console.log(`Submitting ${urls.length} URL(s) to IndexNow…`);
  console.log(`Host: ${HOST}`);
  console.log(`Key file: ${KEY_LOCATION}`);
  try {
    const { status, body } = await submit(urls);
    if (status === 200) {
      console.log(`✓ 200 OK — accepted by IndexNow (propagated to Bing, Yandex, Seznam, Naver, Yep)`);
    } else if (status === 202) {
      console.log(`✓ 202 Accepted — URLs received, validation pending`);
    } else if (status === 400) {
      console.error(`✗ 400 Bad Request — malformed submission. Body: ${body}`);
      process.exit(1);
    } else if (status === 403) {
      console.error(`✗ 403 Forbidden — key not yet visible at ${KEY_LOCATION}. Deploy + retry.`);
      process.exit(1);
    } else if (status === 422) {
      console.error(`✗ 422 — URLs don't belong to host or key mismatch. Body: ${body}`);
      process.exit(1);
    } else if (status === 429) {
      console.error(`✗ 429 Rate Limited — slow down`);
      process.exit(1);
    } else {
      console.error(`✗ Unexpected status ${status}. Body: ${body}`);
      process.exit(1);
    }
    console.log(`\nSubmitted URLs:`);
    urls.forEach(u => console.log(`  ${u}`));
  } catch (err) {
    console.error('Submission failed:', err);
    process.exit(1);
  }
}

main();
