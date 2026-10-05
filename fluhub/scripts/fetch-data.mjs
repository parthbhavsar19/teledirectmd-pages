// Pulls every public data source FluHub uses and writes compact JSON into data/.
// Small, reviewable files are committed (data/*.json). Large generated shards
// (provider directory, ZIP centroids) go to data/cache/ and are rebuilt each run.
//
// Run: node scripts/fetch-data.mjs   (Node 22+, no dependencies)

import { mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { inflateRawSync } from "node:zlib";
import { dateToEpiweek, seasonOf } from "./lib/mmwr.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const DATA = ROOT + "data/";
const CACHE = DATA + "cache/";
const today = new Date().toISOString().slice(0, 10);

const SOCRATA = "https://data.cdc.gov/resource/";
const DELPHI = "https://api.delphi.cmu.edu/epidata/";

async function getJSON(url, tries = 4) {
  for (let i = 0; ; i++) {
    try {
      const r = await fetch(url, { headers: { accept: "application/json" } });
      if (!r.ok) throw new Error(`${r.status} ${url}`);
      return await r.json();
    } catch (e) {
      if (i >= tries - 1) throw e;
      await new Promise((res) => setTimeout(res, 2000 * 2 ** i));
    }
  }
}

const soql = (id, params) =>
  SOCRATA + id + ".json?" + Object.entries(params).map(([k, v]) => `$${k}=${encodeURIComponent(v)}`).join("&");

async function save(name, obj) {
  await writeFile(DATA + name, JSON.stringify(obj));
  console.log("wrote", name, (JSON.stringify(obj).length / 1024).toFixed(0) + " KB");
}

const meta = { built: today, sources: {} };

// Jurisdictions FluHub covers. Delphi region code, NHSN code, display name.
const STATES = JSON.parse(await readFile(ROOT + "content/jurisdictions.json", "utf8"));

/* ---------- 1. Current ARI activity level (single-week dataset) + our own archive ---------- */
async function activity() {
  const rows = await getJSON(soql("f3zz-zga5", { limit: 5000 }));
  const week = rows.reduce((m, r) => (r.week_end > m ? r.week_end : m), "").slice(0, 10);
  const levels = {};
  rows.filter((r) => r.week_end.startsWith(week)).forEach((r) => (levels[r.geography] = r.label));
  await save("activity.json", { week, levels });

  // CDC publishes only the latest week, so FluHub keeps its own weekly archive.
  const archFile = DATA + "activity-archive.json";
  const arch = existsSync(archFile) ? JSON.parse(await readFile(archFile, "utf8")) : {};
  arch[week] = levels;
  await save("activity-archive.json", arch);
  meta.sources.activity = {
    name: "CDC Level of Acute Respiratory Illness (ARI) Activity by State",
    url: "https://data.cdc.gov/d/f3zz-zga5", latest: week, retrieved: today,
  };
}

/* ---------- 2. ILINet %ILI by state, 2010-11 season onward (Delphi Epidata mirror of CDC FluView) ---------- */
async function ilinet() {
  const now = dateToEpiweek(new Date());
  const codes = ["nat", ...STATES.filter((s) => s.delphi).map((s) => s.delphi)];
  const out = {};
  // Delphi accepts comma-separated regions; batch to stay under its row cap.
  for (let i = 0; i < codes.length; i += 4) {
    const batch = codes.slice(i, i + 4);
    const j = await getJSON(`${DELPHI}fluview/?regions=${batch.join(",")}&epiweeks=201040-${now}`);
    if (j.result !== 1 && j.result !== 2) throw new Error("fluview " + j.message);
    for (const r of j.epidata) {
      (out[r.region] ||= []).push([r.epiweek, r.region === "nat" ? round(r.wili, 3) : round(r.ili, 3)]);
    }
  }
  for (const k in out) out[k].sort((a, b) => a[0] - b[0]);
  const latest = Math.max(...out.nat.map((r) => r[0]));
  await save("ilinet.json", { latest, series: out });
  meta.sources.ilinet = {
    name: "CDC ILINet (U.S. Outpatient Influenza-like Illness Surveillance Network), via Delphi Epidata API",
    url: "https://www.cdc.gov/fluview/", api: "https://cmu-delphi.github.io/delphi-epidata/api/fluview.html",
    latest, retrieved: today,
  };
}

/* ---------- 3. Clinical lab percent positive (WHO/NREVSS clinical labs) ---------- */
async function clinicalLabs() {
  const now = dateToEpiweek(new Date());
  const codes = ["nat", ...STATES.filter((s) => s.delphi).map((s) => s.delphi)];
  const out = {};
  for (let i = 0; i < codes.length; i += 6) {
    const batch = codes.slice(i, i + 6);
    const j = await getJSON(`${DELPHI}fluview_clinical/?regions=${batch.join(",")}&epiweeks=201540-${now}`);
    if (j.result !== 1 && j.result !== 2) continue;
    for (const r of j.epidata) {
      if (r.percent_positive == null) continue;
      (out[r.region] ||= []).push([r.epiweek, round(r.percent_positive, 2), round(r.percent_a, 2), round(r.percent_b, 2), r.total_specimens]);
    }
  }
  for (const k in out) out[k].sort((a, b) => a[0] - b[0]);
  const latest = Math.max(...out.nat.map((r) => r[0]));
  await save("labs.json", { latest, series: out });
  meta.sources.labs = {
    name: "WHO Collaborating Laboratories and NREVSS, clinical laboratories, via Delphi Epidata API",
    url: "https://www.cdc.gov/fluview/", latest, retrieved: today,
  };
}

/* ---------- 4. NHSN weekly confirmed influenza hospital admissions by jurisdiction ---------- */
async function nhsn() {
  const rows = await getJSON(soql("ua7e-t2fy", {
    select: "weekendingdate,jurisdiction,totalconfflunewadm,totalconfflunewadmper100k,totalconfflunewadmhosprep",
    order: "weekendingdate", limit: 60000,
  }));
  const out = {};
  for (const r of rows) {
    if (r.totalconfflunewadm == null) continue;
    (out[r.jurisdiction] ||= []).push([
      r.weekendingdate.slice(0, 10), Math.round(+r.totalconfflunewadm),
      r.totalconfflunewadmper100k != null ? round(+r.totalconfflunewadmper100k, 2) : null,
    ]);
  }
  const latest = out.USA ? out.USA.at(-1)[0] : null;
  await save("nhsn.json", { latest, series: out });
  meta.sources.nhsn = {
    name: "CDC NHSN Weekly Hospital Respiratory Data (HRD) Metrics by Jurisdiction",
    url: "https://data.cdc.gov/d/ua7e-t2fy", latest, retrieved: today,
  };
}

/* ---------- 5. FluSurv-NET lab-confirmed hospitalization rates (weekly, per 100,000) ---------- */
async function flusurv() {
  const now = dateToEpiweek(new Date());
  const out = {};
  // Query in chunks: Delphi caps rows per call.
  for (let y = 2010; y <= Math.floor(now / 100); y += 4) {
    const from = y * 100 + 1, to = Math.min((y + 3) * 100 + 53, now);
    const j = await getJSON(`${DELPHI}flusurv/?locations=network_all&epiweeks=${from}-${to}`);
    if (j.result !== 1 && j.result !== 2) continue;
    for (const r of j.epidata) {
      const s = r.season || seasonOf(r.epiweek);
      (out[s] ||= []).push([r.epiweek, r.rate_overall, r.rate_age_0, r.rate_age_1, r.rate_age_2, r.rate_age_3, r.rate_age_4]);
    }
  }
  for (const k in out) {
    const seen = new Map();
    out[k].forEach((r) => seen.set(r[0], r));
    out[k] = [...seen.values()].sort((a, b) => a[0] - b[0]);
  }
  await save("flusurv.json", { ages: ["overall", "0-4", "5-17", "18-49", "50-64", "65+"], seasons: out });
  meta.sources.flusurv = {
    name: "CDC FluSurv-NET laboratory-confirmed influenza hospitalization rates, via Delphi Epidata API",
    url: "https://www.cdc.gov/fluview/overview/influenza-hospitalization-surveillance.html", retrieved: today,
  };
}

/* ---------- 6. FluVaxView vaccination coverage by state and season ---------- */
async function coverage() {
  const dims = { ">=6 Months": "all", ">=18 Years": "adult", "6 Months - 17 Years": "child", ">=65 Years": "senior" };
  const rows = await getJSON(soql("vh55-3he6", {
    select: "geography,geography_type,year_season,month,dimension,coverage_estimate,_95_ci",
    where: `dimension_type='Age' AND dimension in('${Object.keys(dims).join("','")}') AND geography_type in('States/Local Areas','HHS Regions/National')`,
    limit: 100000,
  }));
  // Season months run Jul(7) .. May(5); keep the latest cumulative month per season.
  const order = (m) => (m >= 7 ? m - 7 : m + 5);
  const out = {};
  for (const r of rows) {
    if (!/^\d{4}-\d{2}$/.test(r.year_season)) continue;
    const est = parseFloat(r.coverage_estimate);
    if (isNaN(est)) continue;
    const g = r.geography === "United States" ? "United States" : r.geography;
    const cell = (((out[g] ||= {})[r.year_season] ||= {})[dims[r.dimension]] ||= { m: -1 });
    const m = order(+r.month);
    if (m > cell.m) Object.assign(cell, { m, v: est, ci: r._95_ci });
  }
  for (const g in out) for (const s in out[g]) for (const d in out[g][s]) out[g][s][d] = out[g][s][d].v;
  await save("coverage.json", out);
  meta.sources.coverage = {
    name: "CDC FluVaxView: Influenza Vaccination Coverage for All Ages (6+ Months)",
    url: "https://data.cdc.gov/d/vh55-3he6", retrieved: today,
  };
}

/* ---------- 7. Provider directory (Vaccines.gov 2024 snapshot), sharded by 1-degree grid ---------- */
async function providers() {
  const rows = [];
  for (let offset = 0; ; offset += 50000) {
    const page = await getJSON(soql("bugr-bbfr", {
      select: "provider_location_guid,loc_name,loc_admin_street1,loc_admin_city,loc_admin_state,loc_admin_zip,loc_phone,latitude,longitude,web_address,searchable_name,quantity_last_updated",
      where: "category='seasonal'", order: "provider_location_guid", limit: 50000, offset,
    }));
    rows.push(...page);
    if (page.length < 50000) break;
  }
  const byId = new Map();
  let lastUpdated = "";
  for (const r of rows) {
    const lat = parseFloat(r.latitude), lon = parseFloat(r.longitude);
    if (isNaN(lat) || isNaN(lon)) continue;
    if (r.quantity_last_updated > lastUpdated) lastUpdated = r.quantity_last_updated;
    let p = byId.get(r.provider_location_guid);
    if (!p) {
      const zip = (r.loc_admin_zip || "").replace(/\D/g, "").padStart(5, "0").slice(0, 5);
      p = {
        n: titleCase(r.loc_name || ""), a: titleCase(r.loc_admin_street1 || ""), c: titleCase(r.loc_admin_city || ""),
        s: r.loc_admin_state, z: zip, p: r.loc_phone || "", u: r.web_address?.url || "",
        y: round(lat, 4), x: round(lon, 4), f: 0,
      };
      byId.set(r.provider_location_guid, p);
    }
    // product flags: 1 shot, 2 nasal spray, 4 high-dose/adjuvanted, 8 egg-free
    const nm = r.searchable_name || "";
    p.f |= nm.includes("Nasal") ? 2 : nm.includes("65+") ? 4 : nm.includes("Egg") ? 8 : 1;
  }
  const shards = {};
  for (const p of byId.values()) (shards[`${Math.floor(p.y)}_${Math.floor(p.x)}`] ||= []).push(p);
  await rm(CACHE + "providers", { recursive: true, force: true });
  await mkdir(CACHE + "providers", { recursive: true });
  for (const k in shards) await writeFile(`${CACHE}providers/${k}.json`, JSON.stringify(shards[k]));
  console.log("providers:", byId.size, "locations in", Object.keys(shards).length, "shards");
  meta.sources.providers = {
    name: "Vaccines.gov: Flu vaccinating provider locations (archived snapshot)",
    url: "https://data.cdc.gov/d/bugr-bbfr", snapshot: lastUpdated, count: byId.size, retrieved: today,
  };
}

/* ---------- 8. ZIP (ZCTA) centroids from the Census Gazetteer, sharded by first digit ---------- */
async function zcta() {
  const url = "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_Gaz_zcta_national.zip";
  const r = await fetch(url);
  if (!r.ok) throw new Error("zcta " + r.status);
  const txt = unzipFirst(Buffer.from(await r.arrayBuffer())).toString();
  const shards = {};
  for (const line of txt.split("\n").slice(1)) {
    const f = line.trim().split("\t");
    if (f.length < 7) continue;
    (shards[f[0][0]] ||= {})[f[0]] = [round(+f[5], 3), round(+f[6], 3)];
  }
  await rm(CACHE + "zip", { recursive: true, force: true });
  await mkdir(CACHE + "zip", { recursive: true });
  for (const k in shards) await writeFile(`${CACHE}zip/${k}.json`, JSON.stringify(shards[k]));
  meta.sources.zcta = { name: "U.S. Census Bureau 2024 Gazetteer, ZIP Code Tabulation Areas", url, retrieved: today };
}

// Minimal ZIP reader: returns the first entry (stored or deflated). Avoids depending on a system unzip binary.
function unzipFirst(buf) {
  if (buf.readUInt32LE(0) !== 0x04034b50) throw new Error("not a zip");
  const method = buf.readUInt16LE(8), csize = buf.readUInt32LE(18);
  const start = 30 + buf.readUInt16LE(26) + buf.readUInt16LE(28);
  let size = csize;
  if (!size) { // sizes in the data descriptor: read them from the central directory instead
    const eocd = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
    const cd = buf.readUInt32LE(eocd + 16);
    size = buf.readUInt32LE(cd + 20);
  }
  const data = buf.subarray(start, start + size);
  return method === 0 ? data : inflateRawSync(data);
}

function round(v, d) { return v == null ? null : Math.round(v * 10 ** d) / 10 ** d; }
function titleCase(s) {
  if (s !== s.toUpperCase()) return s.trim();
  return s.toLowerCase().replace(/\b([a-z])/g, (m) => m.toUpperCase()).replace(/\b(Cvs|Llc|Inc|Hy-Vee|Ii|Iii|Usa)\b/gi, (m) => m.toUpperCase()).trim();
}

await mkdir(CACHE, { recursive: true });
const only = process.argv.slice(2);
const steps = { activity, ilinet, clinicalLabs, nhsn, flusurv, coverage, providers, zcta };
const prevMeta = existsSync(DATA + "meta.json") ? JSON.parse(await readFile(DATA + "meta.json", "utf8")) : { sources: {} };
Object.assign(meta.sources, prevMeta.sources);
for (const [name, fn] of Object.entries(steps)) {
  if (only.length && !only.includes(name)) continue;
  try { await fn(); } catch (e) { console.error("FAILED", name, e.message); process.exitCode = 1; }
}
await save("meta.json", meta);
