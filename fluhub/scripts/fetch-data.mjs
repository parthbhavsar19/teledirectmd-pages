// Pulls every public data source FluHub uses and writes compact JSON into data/.
// Small, reviewable files are committed (data/*.json). Large generated shards
// (provider directory, ZIP centroids) go to data/cache/ and are rebuilt each run.
//
// Run: node scripts/fetch-data.mjs   (Node 22+, no dependencies)

import { mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { inflateRawSync } from "node:zlib";
import { dateToEpiweek, seasonOf, epiweekEndISO } from "./lib/mmwr.mjs";

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
  // Provider websites confirmed dead (404/410/no DNS) in the Oct 2026 link audit; the snapshot is frozen, so drop them.
  const deadUrls = new Set(existsSync(DATA + "dead-provider-urls.json") ? JSON.parse(await readFile(DATA + "dead-provider-urls.json", "utf8")) : []);
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
        s: r.loc_admin_state, z: zip, p: r.loc_phone || "", u: deadUrls.has(r.web_address?.url) ? "" : r.web_address?.url || "",
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

/* ==========================================================================================
   Local and forward-looking feeds: county ED visits, wastewater, growth (Rt), CDC admission
   levels, H5 wastewater, FDA antiviral shortages, FluSight forecasts, ZIP -> county lookup.
   Every step here is fault-tolerant: a failure logs a warning, does not fail the run, and keeps
   the previous JSON (including the previous fields inside local.json and state-extra.json).
   ========================================================================================== */

const LV = ["Very Low", "Low", "Moderate", "High", "Very High"];
const ABBR_BY_NAME = { "United States": "US" };
for (const s of STATES) { ABBR_BY_NAME[s.name] = s.abbr; ABBR_BY_NAME[s.activityName] = s.abbr; }
const ABBR_BY_FIPS = Object.fromEntries(STATES.map((s) => [s.fips, s.abbr]));
const fips5 = (v) => String(v ?? "").trim().replace(/\D/g, "").padStart(5, "0");
const num = (v) => (v == null || v === "" || isNaN(+v) ? null : +v);
const day = (s) => (s ? String(s).slice(0, 10) : null);
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
const addDays = (iso, n) => new Date(Date.parse(iso + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
// Fresh results from this run, by source. A missing key means "failed or skipped: reuse previous values".
const extra = {};

async function readPrev(name) {
  try { return JSON.parse(await readFile(DATA + name, "utf8")); } catch { return null; }
}
async function viewInfo(id) {
  const v = await getJSON(`https://data.cdc.gov/api/views/${id}.json`, 2);
  return { updated: v.rowsUpdatedAt ? new Date(v.rowsUpdatedAt * 1000).toISOString().slice(0, 10) : null };
}
function srcMeta(key, id, name, latest, info, more = {}) {
  meta.sources[key] = {
    name, url: id.startsWith("http") ? id : `https://data.cdc.gov/d/${id}`, latest,
    updated: info?.updated ?? null, expect_days: 7, retrieved: today, ...more,
  };
}
// County names: "Saint Lawrence" vs "St. Lawrence County" etc.
const normCounty = (n) => String(n || "").toLowerCase().replace(/\b(county|parish|borough|census area|city and borough|municipality|municipio)\b/g, "")
  .replace(/\bsaint\b/g, "st").replace(/[^a-z]/g, "");

/* ---------- 9. ZIP (ZCTA) -> county FIPS, largest land-area overlap (Census 2020 relationship file) ---------- */
async function zctaCounty() {
  const url = "https://www2.census.gov/geo/docs/maps-data/data/rel2020/zcta520/tab20_zcta520_county20_natl.txt";
  const r = await fetch(url);
  if (!r.ok) throw new Error("zcta-county " + r.status);
  const txt = (await r.text()).replace(/^﻿/, "");
  const best = {}; // zcta -> [fips, land, total]
  const names = {};
  for (const line of txt.split("\n").slice(1)) {
    const f = line.split("|");
    if (f.length < 18) continue;
    const fips = f[9], land = +f[16] || 0, water = +f[17] || 0;
    if (/^\d{5}$/.test(fips)) names[fips] = f[10];
    const z = f[1];
    if (!/^\d{5}$/.test(z) || !/^\d{5}$/.test(fips)) continue;
    const b = best[z];
    if (!b || land > b[1] || (land === b[1] && land + water > b[2])) best[z] = [fips, land, land + water];
  }
  const shards = {};
  for (const z in best) (shards[z.slice(0, 2)] ||= {})[z] = best[z][0];
  if (Object.keys(best).length < 30000) throw new Error("zcta-county: only " + Object.keys(best).length + " ZCTAs");
  await rm(CACHE + "zipcounty", { recursive: true, force: true });
  await mkdir(CACHE + "zipcounty", { recursive: true });
  for (const k in shards) await writeFile(`${CACHE}zipcounty/${k}.json`, JSON.stringify(shards[k]));
  await writeFile(CACHE + "counties.json", JSON.stringify(names));
  console.log("zcta-county:", Object.keys(best).length, "ZCTAs,", Object.keys(names).length, "counties");
  meta.sources.zctaCounty = { name: "U.S. Census Bureau 2020 ZCTA to County Relationship File", url, retrieved: today };
}
async function countyNames() {
  try { return JSON.parse(await readFile(CACHE + "counties.json", "utf8")); } catch { return {}; }
}

/* ---------- 10. NSSP emergency department visits for influenza, by county (rdmq-nq56) ---------- */
async function nssp() {
  const id = "rdmq-nq56";
  const info = await viewInfo(id);
  const [{ w }] = await getJSON(soql(id, { query: `SELECT max(week_end) AS w WHERE week_end <= '${today}T00:00:00'` }));
  const week = day(w);
  const rows = await getJSON(soql(id, {
    select: "geography,county,fips,hsa,percent_visits_influenza,ed_trends_influenza",
    where: `week_end='${week}T00:00:00'`, limit: 10000,
  }));
  const counties = {}, states = {};
  for (const r of rows) {
    const st = ABBR_BY_NAME[r.geography];
    if (!st) continue;
    const rec = { ed_pct: num(r.percent_visits_influenza), ed_trend: r.ed_trends_influenza && r.ed_trends_influenza !== "Data Unavailable" ? r.ed_trends_influenza : null };
    if (r.county === "All") states[st] = rec;
    else counties[fips5(r.fips)] = { county: r.county, state: st, hsa: r.hsa && r.hsa !== "All" ? r.hsa : null, ...rec };
  }
  const n = Object.keys(counties).length;
  if (n < 1000) throw new Error(`nssp: only ${n} county rows for ${week}`);
  extra.nssp = { week, counties, states };
  console.log("nssp:", week, n, "counties,", Object.values(counties).filter((c) => c.ed_pct != null).length, "with a value");
  srcMeta("nssp", id, "CDC NSSP Emergency Department Visit Trajectories by State and Sub State Regions", week, info);
}

/* ---------- 11. Wastewater viral activity level, influenza A, by site (atcp-73re + ymmh-divb for county FIPS) ---------- */
async function wastewater() {
  const id = "atcp-73re";
  const info = await viewInfo(id);
  const [{ w }] = await getJSON(soql(id, { query: `SELECT max(week_end) AS w WHERE pathogen_target='Influenza A virus' AND week_end <= '${today}'` }));
  const week = day(w);
  const rows = await getJSON(soql(id, {
    select: "state_territory,counties_served,site,site_wval_category",
    where: `pathogen_target='Influenza A virus' AND week_end='${week}'`, limit: 5000,
  }));
  // Site -> county FIPS from the sample-level dataset (same site IDs without the "ID:" prefix).
  const siteFips = {};
  try {
    const since = addDays(today, -365);
    const m = await getJSON(soql("ymmh-divb", { query: `SELECT site, county_fips, max(sample_collect_date) AS last WHERE sample_collect_date >= '${since}' GROUP BY site, county_fips LIMIT 20000` }));
    m.sort((a, b) => (a.last > b.last ? 1 : -1)); // latest mapping wins
    for (const r of m) if (r.county_fips) siteFips[r.site] = r.county_fips.split(",").map(fips5);
  } catch (e) { console.warn("WARN wastewater: site to county lookup failed, matching by county name only:", e.message); }
  // County-name index per state, for sites whose FIPS is missing or uses newer geographies (e.g. CT planning regions).
  const names = await countyNames();
  for (const [f, c] of Object.entries(extra.nssp?.counties || {})) names[f] ||= c.county;
  const known = new Set(Object.keys(names));
  const byName = {};
  for (const [f, n] of Object.entries(names)) { const st = ABBR_BY_FIPS[f.slice(0, 2)]; if (st) (byName[st] ||= {})[normCounty(n)] = f; }

  const cty = {}, stl = {};
  let unmatched = 0;
  for (const r of rows) {
    const st = ABBR_BY_NAME[r.state_territory], li = LV.indexOf(r.site_wval_category);
    if (!st || li < 0) continue;
    (stl[st] ||= []).push(li);
    let fl = (siteFips[String(r.site).replace(/^ID:/, "")] || []).filter((f) => known.has(f));
    if (!fl.length) fl = String(r.counties_served || "").split(",").map((n) => byName[st]?.[normCounty(n)]).filter(Boolean);
    if (!fl.length) unmatched++;
    for (const f of new Set(fl)) (cty[f] ||= []).push(li);
  }
  const mix = (a) => LV.map((_, i) => a.filter((x) => x === i).length);
  const counties = {}, states = {};
  for (const [f, a] of Object.entries(cty)) counties[f] = { ww_level: LV[Math.max(...a)], ww_sites: a.length, ww_mix: mix(a) };
  for (const [st, a] of Object.entries(stl)) {
    const s = [...a].sort((x, y) => x - y);
    states[st] = { level: LV[s[Math.floor((s.length - 1) / 2)]], sites: a.length, mix: mix(a), week };
  }
  const all = Object.values(stl).flat();
  states.US = { level: LV[[...all].sort((x, y) => x - y)[Math.floor((all.length - 1) / 2)]], sites: all.length, mix: mix(all), week };
  if (rows.length < 200) throw new Error(`wastewater: only ${rows.length} sites for ${week}`);
  extra.ww = { week, counties, states };
  console.log("wastewater:", week, rows.length, "sites,", Object.keys(counties).length, "counties,", unmatched, "sites without a county match");
  srcMeta("wastewater", id, "CDC Wastewater Viral Activity Level (WVAL), influenza A", week, info,
    { linkage: "https://data.cdc.gov/d/ymmh-divb" });
}

/* ---------- 12. Probability that flu infections are growing, by county/HSA (ahfs-x44r) ---------- */
async function rtLocal() {
  const id = "ahfs-x44r";
  const info = await viewInfo(id);
  const base = `disease='Influenza' AND estimate_level='HSA' AND horizon=0 AND target_date <= '${today}'`;
  const [{ d }] = await getJSON(soql(id, { query: `SELECT max(target_date) AS d WHERE ${base}` }));
  // origin_date should be <= today, but CDC's rows carry a mistyped origin_date (2029-09-29 for the
  // 2026-09-29 run). Prefer origins on or before today; fall back to whatever the latest target has.
  const origins = (await getJSON(soql(id, { query: `SELECT origin_date AS o, count(*) AS n WHERE ${base} AND target_date='${d}' GROUP BY origin_date` }))).map((r) => r.o).sort();
  const origin = origins.filter((o) => o <= today).at(-1) || origins.at(-1);
  const rows = await getJSON(soql(id, {
    select: "county_code,hsa_name,p_growing,category",
    where: `${base} AND target_date='${d}' AND origin_date='${origin}'`, limit: 10000,
  }));
  const counties = {};
  for (const r of rows) {
    if (!r.county_code) continue;
    counties[fips5(r.county_code)] = { growth_prob: num(r.p_growing), growth_cat: r.category && r.category !== "Data Unavailable" ? r.category : null, hsa: r.hsa_name || null };
  }
  if (Object.keys(counties).length < 1000) throw new Error("rtLocal: only " + Object.keys(counties).length + " counties");
  extra.rtLocal = { date: day(d), counties };
  console.log("rtLocal:", d, "origin", origin, Object.keys(counties).length, "counties,", Object.values(counties).filter((c) => c.growth_prob != null).length, "estimated");
  srcMeta("rtLocal", id, "CDC Epidemic Trends and Rt (influenza), local health service areas", day(d), info,
    origin > today ? { origin_date_anomaly: origin } : {});
}

/* ---------- 13. Probability that flu infections are growing, by state (5dqz-y4ea) ---------- */
async function rtState() {
  const id = "5dqz-y4ea";
  const info = await viewInfo(id);
  const [{ a }] = await getJSON(soql(id, { query: `SELECT max(as_of) AS a WHERE disease='Influenza' AND as_of <= '${today}T00:00:00'` }));
  const [{ d }] = await getJSON(soql(id, { query: `SELECT max(date) AS d WHERE disease='Influenza' AND as_of='${a}' AND date <= '${today}T00:00:00'` }));
  const rows = await getJSON(soql(id, { select: "state,p_growing,category,median", where: `disease='Influenza' AND as_of='${a}' AND date='${d}'`, limit: 500 }));
  const states = {};
  for (const r of rows) { const st = ABBR_BY_NAME[r.state]; if (st) states[st] = { growth_prob: num(r.p_growing), growth_cat: r.category || null }; }
  if (Object.keys(states).length < 40) throw new Error("rtState: only " + Object.keys(states).length + " states");
  extra.rtState = { date: day(d), states };
  console.log("rtState:", day(a), Object.keys(states).length, "states");
  srcMeta("rtState", id, "CDC Epidemic Trends and Rt (influenza), states", day(d), info);
}

/* ---------- 14. CDC hospital admission level by state (vdzy-6i9v) ---------- */
async function admissions() {
  const id = "vdzy-6i9v";
  const info = await viewInfo(id);
  const [{ w }] = await getJSON(soql(id, { query: `SELECT max(weekendingdate) AS w WHERE weekendingdate <= '${today}'` }));
  const rows = await getJSON(soql(id, {
    select: "jurisdiction,totalconfflunewadm,totalconfflunewadmper100k,totalconfflunewadmper100klevel",
    where: `weekendingdate='${w}'`, limit: 500,
  }));
  const states = {};
  for (const r of rows) {
    const st = r.jurisdiction === "USA" ? "US" : r.jurisdiction;
    const lvl = LV.includes(r.totalconfflunewadmper100klevel) ? r.totalconfflunewadmper100klevel : null;
    states[st] = { admission_level: lvl, admission_rate: num(r.totalconfflunewadmper100k), admissions: num(r.totalconfflunewadm) };
  }
  if (Object.keys(states).length < 40) throw new Error("admissions: only " + Object.keys(states).length);
  extra.adm = { week: day(w), states };
  console.log("admissions:", w, Object.keys(states).length, "jurisdictions");
  srcMeta("admissions", id, "CDC NHSN Weekly Hospital Respiratory Admission Levels and Rates by Jurisdiction", day(w), info);
}

/* ---------- 15. H5 (avian influenza A) wastewater detections, last 4 weeks (mtpu-urpp) ---------- */
async function h5() {
  const id = "mtpu-urpp";
  const info = await viewInfo(id);
  const [{ d }] = await getJSON(soql(id, { query: `SELECT max(sample_collect_date) AS d WHERE sample_collect_date <= '${today}'` }));
  const end = day(d), start = addDays(end, -27);
  const win = `sample_collect_date >= '${start}' AND sample_collect_date <= '${end}'`;
  const hits = await getJSON(soql(id, { query: `SELECT state_territory AS st, site, counties_served AS c, count(*) AS n, max(sample_collect_date) AS last WHERE ${win} AND pcr_target_detect='yes' GROUP BY state_territory, site, counties_served LIMIT 5000` }));
  const tested = await getJSON(soql(id, { query: `SELECT state_territory AS st, count(distinct site) AS sites, count(*) AS samples WHERE ${win} GROUP BY state_territory LIMIT 500` }));
  const states = {};
  for (const t of tested) states[t.st.toUpperCase()] = { sites_tested: +t.sites, samples: +t.samples, detections: 0, sites: 0, counties: [] };
  for (const h of hits) {
    const s = (states[h.st.toUpperCase()] ||= { sites_tested: 0, samples: 0, detections: 0, sites: 0, counties: [] });
    s.detections += +h.n; s.sites += 1;
    if (!s.last || h.last > s.last) s.last = day(h.last);
    for (const c of String(h.c || "").split(",").map((x) => x.trim()).filter(Boolean)) if (!s.counties.includes(c)) s.counties.push(c);
  }
  for (const s of Object.values(states)) { s.counties.sort(); if (!s.detections) { delete s.counties; } }
  const sum = (k) => Object.values(states).reduce((a, s) => a + (s[k] || 0), 0);
  const out = {
    window: { start, end }, detections: sum("detections"), sites_with_detection: sum("sites"),
    sites_tested: sum("sites_tested"), samples: sum("samples"),
    states_with_detection: Object.keys(states).filter((k) => states[k].detections).sort(), states,
  };
  extra.h5 = out;
  await save("h5-wastewater.json", out);
  srcMeta("h5", id, "CDC Wastewater Data for Avian Influenza A (H5)", end, info);
}

/* ---------- 16. FDA drug shortages for flu antivirals (openFDA) ---------- */
async function shortages() {
  const drugs = { oseltamivir: "oseltamivir (Tamiflu)", baloxavir: "baloxavir (Xofluza)", zanamivir: "zanamivir (Relenza)", peramivir: "peramivir (Rapivab)" };
  const out = { checked: today, fda_updated: null, url: "https://www.fda.gov/drugs/drug-safety-and-availability/drug-shortages", drugs: {} };
  for (const [d, label] of Object.entries(drugs)) {
    const url = `https://api.fda.gov/drug/shortages.json?search=generic_name:${d}*+openfda.generic_name:${d}*+openfda.substance_name:${d}*&limit=100`;
    const r = await fetch(url);
    const j = await r.json();
    let records = [];
    if (r.status === 404 && j.error?.code === "NOT_FOUND") records = [];
    else if (!r.ok) throw new Error(`openFDA ${r.status} ${j.error?.message || ""}`);
    else { records = j.results; out.fda_updated ||= j.meta?.last_updated || null; }
    const recs = records.map((x) => ({
      name: x.generic_name, status: x.status, availability: x.availability || null, presentation: x.presentation || null,
      company: x.company_name || null, reason: x.shortage_reason || null, info: x.related_info || null, updated: x.update_date || null,
    }));
    out.drugs[d] = { label, listed: recs.some((x) => x.status === "Current"), records: recs };
  }
  if (!out.fda_updated) {
    const m = await getJSON("https://api.fda.gov/drug/shortages.json?limit=1", 2);
    out.fda_updated = m.meta?.last_updated || null;
  }
  await save("shortages.json", out);
  meta.sources.shortages = { name: "FDA Drug Shortages (openFDA drug/shortages endpoint)", url: "https://open.fda.gov/apis/drug/drugshortages/", latest: out.fda_updated, updated: out.fda_updated, expect_days: 7, retrieved: today };
}

/* ---------- 17. CDC FluSight ensemble forecasts (cdcepi/FluSight-forecast-hub) ---------- */
async function flusight() {
  const RAW = "https://raw.githubusercontent.com/cdcepi/FluSight-forecast-hub/main/model-output/FluSight-ensemble/";
  const horizon = addDays(today, 7);
  let ref = null;
  try {
    const list = await getJSON("https://api.github.com/repos/cdcepi/FluSight-forecast-hub/contents/model-output/FluSight-ensemble", 1);
    ref = list.map((f) => f.name.match(/^(\d{4}-\d{2}-\d{2})-FluSight-ensemble\.csv$/)?.[1]).filter((x) => x && x <= horizon).sort().at(-1) || null;
  } catch (e) { console.warn("WARN flusight: GitHub listing unavailable, probing weekly files:", e.message); }
  if (!ref) { // reference dates are Saturdays: probe back week by week
    const t = new Date(today + "T00:00:00Z");
    let sat = addDays(today, (6 - t.getUTCDay() + 7) % 7);
    for (let i = 0; i < 60 && !ref; i += 6) {
      const batch = Array.from({ length: 6 }, (_, k) => addDays(sat, -7 * (i + k)));
      const ok = await Promise.all(batch.map((d) => fetch(`${RAW}${d}-FluSight-ensemble.csv`, { method: "HEAD" }).then((r) => r.ok).catch(() => false)));
      ref = batch.find((_, k) => ok[k]) || null;
    }
  }
  if (!ref) throw new Error("flusight: no ensemble file found");
  const r = await fetch(`${RAW}${ref}-FluSight-ensemble.csv`);
  if (!r.ok) throw new Error("flusight " + r.status);
  const lines = (await r.text()).trim().split("\n");
  const hdr = lines[0].split(",");
  const ix = Object.fromEntries(hdr.map((h, i) => [h.trim(), i]));
  const locs = {};
  const Q = { "0.025": 1, "0.5": 2, "0.975": 3 };
  for (const line of lines.slice(1)) {
    const f = line.split(",");
    const loc = f[ix.location] === "US" ? "US" : ABBR_BY_FIPS[f[ix.location]];
    if (!loc) continue;
    const h = +f[ix.horizon], target = f[ix.target], type = f[ix.output_type], oid = f[ix.output_type_id], v = +f[ix.value];
    const L = (locs[loc] ||= { hosp: {}, change: {} });
    if (target === "wk inc flu hosp" && type === "quantile" && Q[oid] && h >= 1 && h <= 3) {
      const row = (L.hosp[h] ||= [f[ix.target_end_date], null, null, null]);
      row[Q[oid]] = Math.round(v);
    } else if (target === "wk flu hosp rate change" && type === "pmf" && h >= 0 && h <= 3) {
      (L.change[h] ||= {})[oid] = Math.round(v * 1000) / 1000;
    }
  }
  const out = {};
  for (const [loc, L] of Object.entries(locs)) {
    out[loc] = { hosp: Object.keys(L.hosp).sort().map((h) => [+h, ...L.hosp[h]]), change: L.change };
  }
  const age = daysBetween(ref, today);
  extra.fs = { reference_date: ref, stale: age > 21, locations: out };
  console.log("flusight:", ref, Object.keys(out).length, "locations", age > 21 ? `(stale: ${age} days old)` : "");
  meta.sources.flusight = {
    name: "CDC FluSight ensemble forecast (CDC FluSight and contributing teams)", url: "https://github.com/cdcepi/FluSight-forecast-hub",
    latest: ref, updated: ref, expect_days: null, stale: age > 21, retrieved: today,
  };
}

/* ---------- 18. Assemble data/local.json (by county FIPS) and data/state-extra.json (by state) ---------- */
async function assembleLocal() {
  const prevLocal = (await readPrev("local.json")) || {};
  const prevExtra = (await readPrev("state-extra.json")) || {};
  const names = await countyNames();
  const local = {};
  const set = (f, o) => { const c = (local[f] ||= {}); for (const [k, v] of Object.entries(o)) if (v != null && c[k] == null) c[k] = v; };
  const reuse = (prev, out, fields) => { for (const [k, p] of Object.entries(prev)) { const o = {}; for (const f of fields) if (p[f] != null) o[f] = p[f]; if (Object.keys(o).length) Object.assign((out[k] ||= {}), o); } };

  // County level. A failed source contributes its previous values instead.
  if (extra.nssp) for (const [f, c] of Object.entries(extra.nssp.counties)) set(f, { ...c, ed_week: c.ed_pct != null || c.ed_trend ? extra.nssp.week : null });
  else reuse(prevLocal, local, ["ed_pct", "ed_trend", "ed_week", "hsa"]);
  if (extra.ww) for (const [f, c] of Object.entries(extra.ww.counties)) set(f, { ...c, ww_week: extra.ww.week });
  else reuse(prevLocal, local, ["ww_level", "ww_sites", "ww_mix", "ww_week"]);
  if (extra.rtLocal) for (const [f, c] of Object.entries(extra.rtLocal.counties)) set(f, { ...c, growth_date: c.growth_prob != null || c.growth_cat ? extra.rtLocal.date : null });
  else reuse(prevLocal, local, ["growth_prob", "growth_cat", "growth_date", "hsa"]);
  for (const f of Object.keys(names)) if (ABBR_BY_FIPS[f.slice(0, 2)]) local[f] ||= {};
  for (const [f, c] of Object.entries(local)) {
    c.county = names[f] || c.county || prevLocal[f]?.county || null;
    c.state = ABBR_BY_FIPS[f.slice(0, 2)] || c.state || null;
    if (!c.state) delete local[f];
  }
  // Stable key order keeps the committed diff readable.
  const ORDER = ["county", "state", "hsa", "ed_pct", "ed_trend", "ed_week", "ww_level", "ww_sites", "ww_mix", "ww_week", "growth_prob", "growth_cat", "growth_date"];
  const sorted = {};
  for (const f of Object.keys(local).sort()) { const c = local[f]; sorted[f] = Object.fromEntries(ORDER.filter((k) => c[k] != null).map((k) => [k, c[k]])); }
  await save("local.json", sorted);

  // State level.
  const ex = {};
  const keys = ["US", ...STATES.map((s) => s.abbr)];
  for (const st of keys) ex[st] = {};
  const fill = (src, fn, fields) => {
    if (extra[src]) for (const st of keys) { const v = fn(st); if (v) for (const [k, x] of Object.entries(v)) if (x != null) ex[st][k] = x; }
    else reuse(prevExtra, ex, fields);
  };
  fill("adm", (st) => extra.adm.states[st] && { ...extra.adm.states[st], admission_week: extra.adm.week }, ["admission_level", "admission_rate", "admissions", "admission_week"]);
  fill("rtState", (st) => extra.rtState.states[st] && { ...extra.rtState.states[st], growth_date: extra.rtState.date }, ["growth_prob", "growth_cat", "growth_date"]);
  fill("nssp", (st) => extra.nssp.states[st] && { ...extra.nssp.states[st], ed_week: extra.nssp.week }, ["ed_pct", "ed_trend", "ed_week"]);
  fill("ww", (st) => extra.ww.states[st] && { ww: extra.ww.states[st] }, ["ww"]);
  fill("fs", (st) => extra.fs.locations[st] && { forecast: { reference_date: extra.fs.reference_date, stale: extra.fs.stale, ...extra.fs.locations[st] } }, ["forecast"]);
  fill("h5", (st) => {
    if (st === "US") return { h5_ww_detections: { detections: extra.h5.detections, sites: extra.h5.sites_with_detection, sites_tested: extra.h5.sites_tested, window: extra.h5.window } };
    const s = extra.h5.states[st];
    return s && { h5_ww_detections: { detections: s.detections, sites: s.sites, sites_tested: s.sites_tested, last: s.last || null, window: extra.h5.window } };
  }, ["h5_ww_detections"]);
  await save("state-extra.json", ex);
}

/* ---------- 19. Freshness: when each existing source was last published ---------- */
async function freshness() {
  const ids = { activity: ["f3zz-zga5", 7], nhsn: ["ua7e-t2fy", 7], coverage: ["vh55-3he6", 45] };
  for (const [k, [id, expect]] of Object.entries(ids)) {
    if (!meta.sources[k]) continue;
    try { meta.sources[k].updated = (await viewInfo(id)).updated; meta.sources[k].expect_days = expect; }
    catch (e) { console.warn("WARN freshness", k, e.message); }
  }
  // Delphi mirrors: FluView data for a week ending Saturday is published the following Friday.
  for (const k of ["ilinet", "labs"]) {
    const s = meta.sources[k];
    if (s?.latest) { s.updated = addDays(epiweekEndISO(s.latest), 6); s.expect_days = 7; }
  }
}

await mkdir(CACHE, { recursive: true });
const only = process.argv.slice(2);
const steps = { activity, ilinet, clinicalLabs, nhsn, flusurv, coverage, providers, zcta };
// Newer feeds: a failure here warns and keeps the previous output instead of failing the run.
const softSteps = { zctaCounty, nssp, wastewater, rtLocal, rtState, admissions, h5, shortages, flusight };
const prevMeta = existsSync(DATA + "meta.json") ? JSON.parse(await readFile(DATA + "meta.json", "utf8")) : { sources: {} };
Object.assign(meta.sources, prevMeta.sources);
for (const [name, fn] of Object.entries(steps)) {
  if (only.length && !only.includes(name)) continue;
  try { await fn(); } catch (e) { console.error("FAILED", name, e.message); process.exitCode = 1; }
}
let ranSoft = false;
for (const [name, fn] of Object.entries(softSteps)) {
  if (only.length && !only.includes(name)) continue;
  ranSoft = true;
  try {
    // FLUHUB_FAIL=nssp,flusight simulates a failed source (used to test the keep-previous fallback).
    if ((process.env.FLUHUB_FAIL || "").split(",").includes(name)) throw new Error("simulated failure");
    await fn(); delete meta.sources[name]?.failed;
  }
  catch (e) {
    console.warn(`WARN ${name} failed, keeping previous data:`, e.message);
    if (meta.sources[name]) meta.sources[name].failed = today;
  }
}
if (ranSoft || only.includes("assembleLocal")) {
  try { await assembleLocal(); } catch (e) { console.warn("WARN assembleLocal failed, keeping previous local.json/state-extra.json:", e.message); }
}
if (!only.length || only.includes("freshness")) await freshness().catch((e) => console.warn("WARN freshness", e.message));
await save("meta.json", meta);
