const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Get all condition slugs
const conditionsDir = path.join(__dirname, 'data', 'conditions');
const slugs = fs.readdirSync(conditionsDir)
  .filter(f => f.endsWith('.json') && !f.startsWith('_'))
  .map(f => f.replace('.json', ''));

const today = new Date().toISOString().split('T')[0];

// Build national URL entries
const nationalEntries = slugs.map(slug => `  <url>
    <loc>https://teledirectmd.com/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n');

// Insert before closing </urlset>
sitemap = sitemap.replace('</urlset>', nationalEntries + '\n</urlset>');

fs.writeFileSync(sitemapPath, sitemap, 'utf-8');

// Count total URLs
const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`Sitemap updated: ${urlCount} total URLs (added ${slugs.length} national pages)`);
