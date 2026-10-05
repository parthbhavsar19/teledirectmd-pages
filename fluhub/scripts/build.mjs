// Renders the whole site into dist/. Run after fetch-data.mjs.
//   node scripts/build.mjs            full site
//   node scripts/build.mjs --artifact  also writes dist/index.artifact.html (skeleton-less main page for claude.ai preview)
import { readFile, writeFile, mkdir, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { SITE } from "../content/site.mjs";
import { epiweekEndISO } from "./lib/mmwr.mjs";
import { fmtDate } from "./lib/derive.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
// BASE_PATH lets the site live under a folder of another domain (teledirectmd.com/flu-hub/). Files land in dist/<BASE_PATH>/.
const BASE_PATH = (process.env.BASE_PATH ?? "flu-hub").replace(/^\/|\/$/g, "");
// OUT_ROOT lets the host site build straight into its static folder (e.g. OUT_ROOT=../public in teledirectmd-pages).
const OUT_ROOT = process.env.OUT_ROOT ? new URL(process.env.OUT_ROOT.replace(/\/?$/, "/"), "file://" + process.cwd() + "/").pathname : ROOT + "dist/";
const DIST = OUT_ROOT + (BASE_PATH ? BASE_PATH + "/" : "");
const read = async (f) => JSON.parse(await readFile(ROOT + f, "utf8"));

const data = {
  meta: await read("data/meta.json"),
  activity: await read("data/activity.json"),
  archive: await read("data/activity-archive.json"),
  ilinet: await read("data/ilinet.json"),
  labs: await read("data/labs.json"),
  nhsn: await read("data/nhsn.json"),
  flusurv: await read("data/flusurv.json"),
  coverage: await read("data/coverage.json"),
  jur: await read("content/jurisdictions.json"),
  epi: await read("content/epi.json"),
};

SITE.weekLabel = `Week ending ${fmtDate(epiweekEndISO(data.ilinet.latest))}`;
SITE.builtLabel = fmtDate(data.meta.built);

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST + "state", { recursive: true });
await mkdir(DIST + "data", { recursive: true });
await cp(ROOT + "src/assets", DIST + "assets", { recursive: true });

const pages = [];
const noindex = new Set();
const emit = async (path, html) => { await writeFile(DIST + path, html); pages.push(path); if (/name="robots" content="noindex/.test(html)) noindex.add(path); };

const modules = ["data-pages", "clinical-pages", "care-pages", "symptoms", "vaccine-pages", "vaccine-extra", "local-data", "home", "locator", "faq"];
for (const m of modules) {
  if (!existsSync(ROOT + `scripts/pages/${m}.mjs`)) { console.warn("skip", m); continue; }
  const mod = await import(`./pages/${m}.mjs`);
  await mod.default({ data, emit, DIST, ROOT });
}

// sitemap + robots
const urls = pages.filter((p) => p.endsWith(".html") && !noindex.has(p)).map((p) => `<url><loc>${SITE.baseUrl}${p.replace(/index\.html$/, "")}</loc><lastmod>${data.meta.built}</lastmod></url>`);
await writeFile(DIST + "sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>\n`);

if (process.argv.includes("--artifact")) {
  // claude.ai wraps the main page in its own skeleton; strip ours from a copy of index.html.
  const html = await readFile(DIST + "index.html", "utf8");
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<meta charset[^>]*>\n?|<meta name="viewport"[^>]*>\n?/g, "");
  const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
  await writeFile(DIST + "index.artifact.html", head + body);
}
console.log(`built ${pages.length} files into dist/`);
