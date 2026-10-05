// Local and forward-looking data helpers: "Flu near you" (county ED visits, wastewater, growth),
// CDC admission level, FluSight forecast, FDA antiviral shortage badge, H5 wastewater watch,
// and source-freshness banners. Data comes from data/local.json, data/state-extra.json,
// data/shortages.json, data/h5-wastewater.json and data/meta.json (written by fetch-data.mjs).
// Every helper returns "" or a calm fallback when its data file is missing.
import { readFileSync } from "node:fs";
import { esc } from "./layout.mjs";
import { levelChip } from "./tilemap.mjs";
import { fmtDate } from "./derive.mjs";

const ROOT = new URL("../../", import.meta.url).pathname;
const load = (f) => { try { return JSON.parse(readFileSync(ROOT + "data/" + f, "utf8")); } catch { return null; } };
let cache = null;

/** Loads (once) and returns { local, extra, shortages, h5, meta, jur }. */
export function localData() {
  return (cache ||= {
    local: load("local.json") || {},
    extra: load("state-extra.json") || {},
    shortages: load("shortages.json"),
    h5: load("h5-wastewater.json"),
    meta: load("meta.json") || { sources: {} },
    jur: JSON.parse(readFileSync(ROOT + "content/jurisdictions.json", "utf8")),
  });
}

const todayISO = () => new Date().toISOString().slice(0, 10);
const days = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
const d = (iso) => (iso ? fmtDate(String(iso).slice(0, 10)) : "");
const d0 = (iso) => (iso ? fmtDate(String(iso).slice(0, 10), false) : "");

/* ------------------------------------------------------------------ labels */
export const TREND = { Increasing: "Rising", Decreasing: "Falling", "No Change": "Steady", "Limited Data": "Too few visits to tell", Sparse: "Too few visits to tell" };
export const trendLabel = (t) => TREND[t] || (t ? t : "No trend reported");
export const GROWTH = { Growing: "Growing", "Likely Growing": "Likely growing", "Not Changing": "Not changing", "Likely Declining": "Likely declining", Declining: "Declining", "Not Estimated": "Not estimated" };
export const pctProb = (p) => (p == null ? "–" : p >= 0.995 ? "Over 99%" : p <= 0.005 ? "Under 1%" : `${Math.round(p * 100)}%`);
export const pctEd = (v) => (v == null ? "–" : `${Number(v).toFixed(2)}%`);

/**
 * Plain-language "what this means for you" from community signals. Conservative: no outcome predictions.
 * s = { edTrend, growthCat, wwLevel, admissionLevel }; where = "in your area" or "in Georgia". Returns { tone, text } (HTML).
 * Keep in sync with meaning() in src/assets/local.js.
 */
export function whatItMeans(s, R = "", where = "in your area") {
  const rising = s.edTrend === "Increasing" || s.growthCat === "Growing" || s.growthCat === "Likely Growing";
  const falling = !rising && (s.edTrend === "Decreasing" || s.growthCat === "Declining" || s.growthCat === "Likely Declining");
  const high = ["High", "Very High"].includes(s.wwLevel) || ["Moderate", "High", "Very High"].includes(s.admissionLevel);
  const known = s.edTrend || s.growthCat || s.wwLevel || s.admissionLevel;
  const early = `If you are at <a href="${R}high-risk.html">higher risk</a> and get sick, contact a clinician early: <a href="${R}too-late-for-tamiflu.html">antivirals work best started soon</a>.`;
  if (!known) return { tone: "none", text: `There is not enough recent local data to describe flu ${where}. ${early}` };
  if (rising && high) return { tone: "high", text: `Flu is active and rising ${where}. ${early} If you have not had a flu shot this season, it is not too late.` };
  if (rising) return { tone: "rising", text: `Flu is rising ${where}. ${early} A flu shot now still helps; protection builds over about two weeks.` };
  if (high) return { tone: "high", text: `Flu is active ${where}. ${early}` };
  if (falling) return { tone: "easing", text: `Flu signals are easing ${where}, but flu is still going around. ${early}` };
  if (!s.edTrend && !s.growthCat) return { tone: "none", text: `There is not enough recent data to tell whether flu is rising or falling ${where}. ${early}` };
  return { tone: "low", text: `Flu activity looks low and steady ${where}. This is a good time to get a flu shot if you have not had one this season.` };
}

/* ------------------------------------------------------------------ freshness */
/** { updated, ageDays, expect, paused } for a meta.sources key. paused = more than 10 days later than expected. */
export function sourceStatus(key, today = todayISO()) {
  const s = localData().meta.sources?.[key];
  if (!s) return null;
  const updated = s.updated || null;
  const ageDays = updated ? days(updated, today) : null;
  const expect = s.expect_days ?? null;
  return { name: s.name, url: s.url, latest: s.latest ?? null, updated, ageDays, expect, paused: expect != null && ageDays != null && ageDays > expect + 10 };
}

/** Banner HTML when a source is more than 10 days older than expected, otherwise "". */
export function pausedBanner(key, { today = todayISO(), label } = {}) {
  const st = sourceStatus(key, today);
  if (!st?.paused) return "";
  return `<div class="callout warn paused" role="status"><p class="callout-title">Source paused</p><p>${esc(label || st.name)} has not been updated since ${esc(d(st.updated))}. FluHub is showing the most recent numbers available. Federal data releases have paused before, for example during the fall 2025 government shutdown.</p></div>`;
}

/** "Data as of" line for several sources: [[key, label], ...]. */
export function asOfLine(pairs) {
  const parts = pairs.map(([k, label]) => { const s = sourceStatus(k); return s?.latest ? `${esc(label)} ${esc(d(s.latest))}` : ""; }).filter(Boolean);
  return parts.length ? `<p class="small muted asof">Data as of: ${parts.join("; ")}.</p>` : "";
}

/**
 * Note for charts of the 2025–26 season. FluView was not published Sept 20 to Nov 12, 2025 (federal shutdown).
 * The weekly series in data/ilinet.json, labs.json, flusurv.json and nhsn.json have no missing weeks for that
 * period (CDC back-filled them when publishing resumed), so this is a context note, not a gap marker.
 */
export const SHUTDOWN_NOTE = "CDC did not publish FluView from September 20 to November 12, 2025, during the federal government shutdown. Numbers for those weeks were filled in after publishing resumed, so early 2025–26 weeks may have been revised more than usual.";

/* ------------------------------------------------------------------ forecast */
const seasonName = (today) => { const y = +today.slice(0, 4), m = +today.slice(5, 7); const s = m >= 8 ? y : y - 1; return `${s}–${String((s + 1) % 100).padStart(2, "0")}`; };

/** FluSight state forecast block. Hidden numbers (with a resume note) when the latest ensemble is over 21 days old. */
export function forecastHTML(abbr, { today = todayISO(), name } = {}) {
  const f = localData().extra[abbr]?.forecast;
  const credit = `<p class="small muted">Forecast: CDC FluSight ensemble, which combines forecasts from CDC FluSight and its contributing modeling teams (<a href="https://github.com/cdcepi/FluSight-forecast-hub" target="_blank" rel="noopener">FluSight forecast hub</a>).</p>`;
  if (!f || !f.hosp?.length || days(f.reference_date, today) > 21) {
    return `<div class="forecast"><h3 class="h-small">Next 3 weeks: hospital admissions forecast</h3><p class="muted">Forecasts resume when CDC's ${seasonName(today)} FluSight challenge posts its first ensemble.</p>${credit}</div>`;
  }
  const rise = (h) => { const c = f.change?.[h]; return c ? pctProb((c.increase || 0) + (c.large_increase || 0)) : "–"; };
  const rows = f.hosp.map(([h, end, lo, med, hi]) => `<tr><td>${esc(d(end))}</td><td class="n">${med?.toLocaleString("en-US") ?? "–"}</td><td class="n">${lo?.toLocaleString("en-US") ?? "–"} to ${hi?.toLocaleString("en-US") ?? "–"}</td><td class="n">${rise(h)}</td></tr>`).join("");
  return `<div class="forecast"><h3 class="h-small">Next 3 weeks: hospital admissions forecast${name ? ` for ${esc(name)}` : ""}</h3>
<div class="table-wrap"><table><thead><tr><th>Week ending</th><th class="n">Expected admissions</th><th class="n">Likely range (95%)</th><th class="n">Chance the rate goes up</th></tr></thead><tbody>${rows}</tbody>
<caption>Weekly new hospital admissions with confirmed flu. Forecast made ${esc(d(f.reference_date))}. Forecasts are uncertain, and the real number can fall outside the range.</caption></table></div>${credit}</div>`;
}

/* ------------------------------------------------------------------ Flu near you (state pages) */
/**
 * "Flu near you" box for a state page: state-level ED share and trend, wastewater level, growth chance,
 * CDC admission level, a "what this means" line, a ZIP form that opens flu-near-you.html, and the forecast.
 * R = relative path to the site root ("../" from state/<slug>.html).
 */
export function fluNearYouBox(abbr, { R = "../", today = todayISO() } = {}) {
  const { extra, jur } = localData();
  const s = extra[abbr];
  const j = jur.find((x) => x.abbr === abbr);
  if (!s || !j) return "";
  const ww = s.ww;
  const tile = (label, value, ctx) => `<div class="near-tile"><span class="stat-label">${label}</span><span class="near-v">${value}</span><span class="stat-ctx">${ctx}</span></div>`;
  const m = whatItMeans({ edTrend: s.ed_trend, growthCat: s.growth_cat, wwLevel: ww?.level, admissionLevel: s.admission_level }, R, `in ${esc(j.name)}`);
  const tiles = [
    tile("Emergency department visits for flu", pctEd(s.ed_pct), s.ed_pct != null || s.ed_trend ? `${esc(trendLabel(s.ed_trend))}; week ending ${esc(d0(s.ed_week))}` : "Not reported for this state"),
    tile("Flu A in wastewater", ww ? levelChip(ww.level) : "–", ww ? `typical level across ${ww.sites} site${ww.sites === 1 ? "" : "s"}; week ending ${esc(d0(ww.week))}` : "No sites reporting"),
    tile("Chance flu infections are growing", pctProb(s.growth_prob), s.growth_prob != null ? `${esc(GROWTH[s.growth_cat] || s.growth_cat || "")}; CDC estimate for ${esc(d0(s.growth_date))}` : "Not estimated for this state"),
    tile("Flu hospital admission level", s.admission_level ? levelChip(s.admission_level) : "–", s.admission_rate != null ? `${s.admission_rate} per 100,000; week ending ${esc(d0(s.admission_week))}` : "Not reported"),
  ].join("");
  const banners = ["nssp", "wastewater", "rtState", "admissions"].map((k) => pausedBanner(k, { today })).join("");
  return `<section class="section near" id="flu-near-you">
<div class="section-head"><h2>Flu near you</h2><p class="muted">The newest community signals for ${esc(j.name)} from CDC: emergency department visits, wastewater, and whether infections are growing.</p></div>
${banners}
<div class="near-tiles">${tiles}</div>
<p class="near-means" data-tone="${m.tone}"><b>What this means for you:</b> ${m.text}</p>
<form class="loc-form near-form" action="${R}flu-near-you.html" method="get">
  <div class="field"><label for="near-zip-${abbr}">See your county</label><input id="near-zip-${abbr}" name="zip" inputmode="numeric" autocomplete="postal-code" maxlength="5" pattern="[0-9]{5}" placeholder="ZIP code" required></div>
  <button class="btn btn-ghost" type="submit">Check my county</button>
</form>
${forecastHTML(abbr, { today, name: j.name })}
<p class="small muted">Sources: CDC National Syndromic Surveillance Program, CDC National Wastewater Surveillance System, CDC epidemic trend (Rt) estimates, and CDC NHSN hospital admission levels. These describe the community, not any one person's risk.</p>
</section>`;
}

/* ------------------------------------------------------------------ FDA shortage badge */
/** Plain-language badge HTML (inner) from data/shortages.json. Keep in sync with src/assets/shortage.js. */
export function shortageText(sh) {
  if (!sh?.drugs) return "";
  const when = d(sh.fda_updated || sh.checked);
  const link = `<a href="${esc(sh.url)}" target="_blank" rel="noopener">FDA drug shortage list</a>`;
  const o = sh.drugs.oseltamivir;
  const listed = Object.values(sh.drugs).filter((x) => x.listed);
  if (!listed.length) {
    return `<p><b>No national shortage of oseltamivir (Tamiflu) is listed by FDA as of ${esc(when)}.</b> Local pharmacies can still run out; call ahead.</p><p class="small muted">Baloxavir (Xofluza), zanamivir (Relenza), and peramivir (Rapivab) are not listed either. Source: ${link}.</p>`;
  }
  const items = listed.map((x) => {
    const cur = x.records.filter((r) => r.status === "Current");
    const det = cur.slice(0, 4).map((r) => `<li>${esc(r.presentation || r.name)}${r.availability ? `: ${esc(r.availability)}` : ""}${r.info ? ` (${esc(r.info)})` : ""}</li>`).join("");
    return `<p><b>FDA lists a current shortage of ${esc(x.label)}</b>, updated ${esc(cur[0]?.updated || when)}.</p>${det ? `<ul class="small">${det}</ul>` : ""}`;
  }).join("");
  return `${items}<p>${o && !o.listed ? "No shortage of oseltamivir (Tamiflu) is listed. " : ""}Pharmacies may still have other strengths or forms, or can suggest another antiviral. Call ahead before you go. Source: ${link}, as of ${esc(when)}.</p>`;
}
/** Badge container, pre-filled at build time; src/assets/shortage.js refreshes it. Pages using it add scripts: ["shortage.js"]. */
export function shortageBadge() {
  const sh = localData().shortages;
  const listed = sh?.drugs && Object.values(sh.drugs).some((x) => x.listed);
  return `<div id="shortage-badge" class="shortage-badge" data-state="${listed ? "listed" : "none"}" aria-live="polite">${shortageText(sh)}</div>`;
}

/* ------------------------------------------------------------------ H5 bird flu wastewater watch */
/** "Bird flu watch" box: national H5 wastewater detections in the past 4 weeks, with context. Optional state abbr adds a local line. */
export function birdFluWatchBox({ state } = {}) {
  const { h5, jur } = localData();
  if (!h5) return "";
  const nameOf = (a) => jur.find((j) => j.abbr === a)?.name || a;
  const list = h5.states_with_detection.map(nameOf);
  const listTxt = list.length > 1 ? `${list.slice(0, -1).join(", ")} and ${list.at(-1)}` : list[0] || "";
  const head = h5.detections
    ? `In the 4 weeks from ${esc(d0(h5.window.start))} to ${esc(d(h5.window.end))}, CDC wastewater testing found H5 bird flu virus ${h5.detections} time${h5.detections === 1 ? "" : "s"}, at ${h5.sites_with_detection} of ${h5.sites_tested.toLocaleString("en-US")} sites tested, in ${list.length} state${list.length === 1 ? "" : "s"}: ${esc(listTxt)}.`
    : `In the 4 weeks from ${esc(d0(h5.window.start))} to ${esc(d(h5.window.end))}, CDC wastewater testing did not find H5 bird flu virus at any of the ${h5.sites_tested.toLocaleString("en-US")} sites tested.`;
  const rows = h5.states_with_detection.map((a) => { const s = h5.states[a]; return `<tr><td>${esc(nameOf(a))}</td><td class="n">${s.detections}</td><td class="n">${s.sites} of ${s.sites_tested}</td><td>${esc((s.counties || []).join(", "))}</td></tr>`; }).join("");
  let local = "";
  if (state && h5.states[state]) {
    const s = h5.states[state];
    local = s.detections
      ? `<p><b>${esc(nameOf(state))}:</b> H5 was found ${s.detections} time${s.detections === 1 ? "" : "s"} at ${s.sites} of ${s.sites_tested} sites, most recently in a sample from ${esc(d(s.last))}.</p>`
      : `<p><b>${esc(nameOf(state))}:</b> no H5 found at the ${s.sites_tested} site${s.sites_tested === 1 ? "" : "s"} tested.</p>`;
  } else if (state) local = `<p><b>${esc(nameOf(state))}:</b> no sites reported H5 wastewater results in this period.</p>`;
  return `<section class="panel h5-watch" id="bird-flu-watch">
<h3>Bird flu watch: H5 in wastewater</h3>
<p>${head}</p>${local}
<p>Finding H5 in wastewater does not mean people in the area are infected. Detections often come from animal sources, such as milk from infected dairy cows or wild birds, that reach the sewer. CDC considers the risk to the general public low.</p>
${rows ? `<div class="table-wrap"><table><thead><tr><th>State</th><th class="n">Detections</th><th class="n">Sites with H5</th><th>Counties served</th></tr></thead><tbody>${rows}</tbody></table></div>` : ""}
<p class="small muted">Source: <a href="https://data.cdc.gov/d/mtpu-urpp" target="_blank" rel="noopener">CDC Wastewater Data for Avian Influenza A (H5)</a>, samples collected through ${esc(d(h5.window.end))}. Animal outbreaks: <a href="https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" target="_blank" rel="noopener">USDA APHIS</a>.</p>
</section>`;
}
