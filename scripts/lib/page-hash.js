/**
 * Content fingerprint for a built HTML page.
 *
 * Used by scripts/page-manifest.js to tell whether a page's content changed
 * between deploys. Everything that changes on every build without a content
 * change is stripped first:
 *   - <script> blocks (Next.js runtime, RSC payload, build ids), except
 *     application/ld+json, which is content (dates, FAQs, prices)
 *   - <style> blocks and <link> tags (CSS bundles, preloads, chunk hashes)
 *   - HTML comments
 *   - any leftover /_next/static/... asset path
 *   - whitespace differences
 */
const crypto = require('crypto');

function normalizeHtml(html) {
  return html
    .replace(/<script\b(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<link\b[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/_next\/static\/[^"'\s)]+/g, '/_next/static/*')
    .replace(/\s+/g, ' ')
    .trim();
}

function pageHash(html) {
  return crypto.createHash('sha256').update(normalizeHtml(html)).digest('hex').slice(0, 20);
}

module.exports = { normalizeHtml, pageHash };
