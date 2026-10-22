import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { getFluHubSitemapEntries } from './flu-hub-sitemap.mjs';

test('discovers real same-origin canonicals, deduplicates, and excludes non-indexable targets', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'flu-sitemap-'));
  const root = path.join(dir, 'flu-hub');
  fs.mkdirSync(root);
  const write = (file, canonical, extra = '') => fs.writeFileSync(path.join(root, file),
    `<html><head><link rel="canonical" href="${canonical}">${extra}</head></html>`);
  try {
    write('index.html', 'https://teledirectmd.com/flu-hub/');
    write('treatment.html', 'https://teledirectmd.com/flu-hub/treatment.html');
    write('duplicate.html', 'https://teledirectmd.com/flu-hub/treatment.html');
    write('hidden.html', 'https://teledirectmd.com/flu-hub/hidden.html',
      '<meta content="noindex,follow" name="robots">');
    write('google-hidden.html', 'https://teledirectmd.com/flu-hub/google-hidden.html',
      '<meta name="googlebot" content="noindex">');
    write('external.html', 'https://example.org/flu-hub/external.html');
    write('missing.html', 'https://teledirectmd.com/flu-hub/not-a-file.html');
    write('query.html', 'https://teledirectmd.com/flu-hub/query.html?draft=1');
    write('wrong-area.html', 'https://teledirectmd.com/health-guides/');
    assert.deepEqual(getFluHubSitemapEntries(dir, 'https://teledirectmd.com').map(e => e.path),
      ['/flu-hub/', '/flu-hub/treatment.html']);
    assert.deepEqual(getFluHubSitemapEntries(path.join(dir, 'absent'), 'https://teledirectmd.com'), []);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
