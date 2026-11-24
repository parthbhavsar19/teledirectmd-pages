import fs from 'node:fs';
import path from 'node:path';

// Index existing canonical HTML only. Never manufacture a page or a lastmod.
export function getFluHubSitemapEntries(publicDir, site) {
  const root = path.join(publicDir, 'flu-hub');
  if (!fs.existsSync(root)) return [];
  const origin = new URL(site).origin;
  const found = new Map();
  function visit(dir) {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, item.name);
      if (item.isDirectory()) { visit(file); continue; }
      if (!item.isFile() || !item.name.endsWith('.html')) continue;
      const html = fs.readFileSync(file, 'utf8');
      const meta = html.match(/<meta\b[^>]*>/gi) || [];
      if (meta.some(tag => /\bname\s*=\s*["'](?:robots|googlebot|bingbot)["']/i.test(tag)
        && /\bcontent\s*=\s*["'][^"']*\bnoindex\b/i.test(tag))) continue;
      const links = (html.match(/<link\b[^>]*>/gi) || [])
        .filter(tag => /\brel\s*=\s*["']canonical["']/i.test(tag));
      if (links.length !== 1) continue;
      const href = links[0].match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1];
      let canonical;
      try { canonical = new URL(href); } catch { continue; }
      if (canonical.origin !== origin || !canonical.pathname.startsWith('/flu-hub/')
        || canonical.search || canonical.hash) continue;
      const localPath = path.join(publicDir, canonical.pathname.replace(/^\/+/, ''),
        canonical.pathname.endsWith('/') ? 'index.html' : '');
      if (!fs.existsSync(localPath) || !fs.statSync(localPath).isFile()) continue;
      if (!found.has(canonical.pathname)) {
        found.set(canonical.pathname, { path: canonical.pathname, file: localPath });
      }
    }
  }
  visit(root);
  return [...found.values()].sort((a, b) => a.path.localeCompare(b.path));
}
