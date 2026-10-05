// "Flu near you": ZIP -> county card (client side, src/assets/local.js) plus a static, crawlable state table.
// Emits flu-near-you.html and the browser data it needs:
//   data/local/<ST>.json      one shard per state: state signals + every county in the state
//   data/zipcounty/<NN>.json  ZIP -> county FIPS, sharded by the first two ZIP digits (from data/cache/zipcounty)
//   data/shortages.json       FDA antiviral shortage status (read by src/assets/shortage.js)
//   data/h5-wastewater.json   H5 wastewater detections, last 4 weeks
import { writeFile, mkdir, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { page, pageHead, esc } from "../lib/layout.mjs";
import { levelChip, levelIndex } from "../lib/tilemap.mjs";
import { fmtDate } from "../lib/derive.mjs";
import { localData, whatItMeans, trendLabel, pctProb, pctEd, GROWTH, pausedBanner, asOfLine, shortageBadge, forecastHTML, sourceStatus } from "../lib/local.mjs";

export default async function ({ data, emit, DIST, ROOT }) {
  const { local, extra, shortages, h5 } = localData();
  const jur = data.jur;
  const today = new Date().toISOString().slice(0, 10);
  const sy = +today.slice(5, 7) >= 8 ? +today.slice(0, 4) : +today.slice(0, 4) - 1;
  const season = `${sy}–${String((sy + 1) % 100).padStart(2, "0")}`;

  /* ---------- browser shards ---------- */
  await mkdir(DIST + "data/local", { recursive: true });
  const byState = {};
  for (const [f, c] of Object.entries(local)) (byState[c.state] ||= {})[f] = c;
  let largest = 0;
  for (const j of jur) {
    const counties = {};
    for (const [f, c] of Object.entries(byState[j.abbr] || {})) { const { state, ...rest } = c; counties[f] = rest; }
    const s = extra[j.abbr] || {};
    const { forecast, ...st } = s;
    const shard = {
      st: j.abbr, name: j.name, slug: j.slug,
      county_ed: Object.values(counties).filter((c) => c.ed_pct != null).length,
      state: st,
      forecast: forecast && !forecast.stale && (Date.parse(today) - Date.parse(forecast.reference_date)) / 864e5 <= 21 ? forecast : null,
      forecast_note: `Forecasts resume when CDC's ${season} FluSight challenge posts its first ensemble.`,
      counties,
    };
    const json = JSON.stringify(shard);
    largest = Math.max(largest, json.length);
    await writeFile(`${DIST}data/local/${j.abbr}.json`, json);
  }
  if (existsSync(ROOT + "data/cache/zipcounty")) await cp(ROOT + "data/cache/zipcounty", DIST + "data/zipcounty", { recursive: true });
  else console.warn("local-data: data/cache/zipcounty missing (run fetch-data.mjs zctaCounty); ZIP lookup will not work");
  if (shortages) await writeFile(DIST + "data/shortages.json", JSON.stringify(shortages));
  if (h5) await writeFile(DIST + "data/h5-wastewater.json", JSON.stringify(h5));
  console.log(`local-data: ${jur.length} state shards, largest ${(largest / 1024).toFixed(0)} KB`);

  /* ---------- static state summary table ---------- */
  const rows = [["US", "United States", null], ...jur.map((j) => [j.abbr, j.name, j.slug])].map(([abbr, name, slug]) => {
    const s = extra[abbr] || {};
    const m = whatItMeans({ edTrend: s.ed_trend, growthCat: s.growth_cat, wwLevel: s.ww?.level, admissionLevel: s.admission_level });
    const signal = { high: "Active", rising: "Rising", easing: "Easing", low: "Low and steady", none: "Not enough data" }[m.tone];
    return `<tr${abbr === "US" ? ' class="us-row"' : ""}><td>${slug ? `<a href="state/${slug}.html">${esc(name)}</a>` : `<b>${esc(name)}</b>`}</td>`
      + `<td class="n" data-v="${s.ed_pct ?? -1}">${pctEd(s.ed_pct)}</td>`
      + `<td>${s.ed_trend ? esc(trendLabel(s.ed_trend)) : "–"}</td>`
      + `<td data-v="${levelIndex(s.ww?.level)}">${s.ww ? `${levelChip(s.ww.level)} <span class="small muted">${s.ww.sites} site${s.ww.sites === 1 ? "" : "s"}</span>` : "–"}</td>`
      + `<td class="n" data-v="${s.growth_prob ?? -1}">${pctProb(s.growth_prob)}</td>`
      + `<td data-v="${levelIndex(s.admission_level)}">${s.admission_level ? levelChip(s.admission_level) : "–"}</td>`
      + `<td>${signal}</td></tr>`;
  }).join("");

  const fipsMap = Object.fromEntries(jur.map((j) => [j.fips, j.abbr]));
  const nssp = sourceStatus("nssp"), ww = sourceStatus("wastewater"), rt = sourceStatus("rtLocal"), adm = sourceStatus("admissions");
  const banners = [["nssp", "CDC emergency department data"], ["wastewater", "CDC wastewater data"], ["rtLocal", "CDC growth estimates"], ["admissions", "CDC hospital admission levels"]]
    .map(([k, label]) => pausedBanner(k, { today, label })).join("");

  const body = `${pageHead({
    eyebrow: "Local flu data",
    title: "Flu near you",
    lede: "Enter your ZIP code to see the latest CDC flu signals for your county: emergency department visits, wastewater, and whether infections are growing, with what it means for you.",
  })}
${banners}
<section class="section">
  <form class="loc-form" id="near-form" action="flu-near-you.html" method="get">
    <div class="field"><label for="zip">ZIP code</label><input id="zip" name="zip" inputmode="numeric" autocomplete="postal-code" maxlength="5" pattern="[0-9]{5}" placeholder="30303" required></div>
    <button class="btn btn-primary" type="submit">Show my county</button>
  </form>
  <p class="small muted" id="near-status" aria-live="polite" style="margin-top:12px">Your ZIP code stays in your browser. FluHub matches it to the county that covers most of its land area.</p>
  <div id="near-result" class="near-result"></div>
  <noscript><p class="muted">The county lookup needs JavaScript. The state table below has the same signals for every state.</p></noscript>
  <script type="application/json" id="near-fips">${JSON.stringify(fipsMap)}</script>
</section>

<section class="section col">
  <h2 class="h-small">Antiviral supply</h2>
  ${shortageBadge()}
</section>

<section class="section">
  <div class="section-head"><h2>Flu signals by state</h2><p class="muted">The same CDC signals, statewide. Select a heading to sort, or a state for its full history.</p></div>
  <div class="table-wrap"><table class="sortable near-table"><thead><tr><th>State</th><th class="n">ED visits for flu</th><th>ED trend</th><th>Wastewater (flu A)</th><th class="n">Chance growing</th><th>Hospital admissions</th><th>Overall</th></tr></thead><tbody>${rows}</tbody>
  <caption>ED visits for flu: share of emergency department visits diagnosed as influenza, week ending ${esc(nssp?.latest ? fmtDate(nssp.latest) : "–")}. Wastewater: typical (median) CDC wastewater viral activity level across reporting sites, week ending ${esc(ww?.latest ? fmtDate(ww.latest) : "–")}. Chance growing: CDC's estimated probability that flu infections are increasing. Hospital admissions: CDC's admission level for confirmed flu, week ending ${esc(adm?.latest ? fmtDate(adm.latest) : "–")}.</caption></table></div>
</section>

<section class="section">${forecastHTML("US", { today, name: "the United States" })}</section>

<section class="section prose col">
  <h2>How to read these signals</h2>
  <ul>
    <li><b>Emergency department visits</b> show what share of ER visits were diagnosed as flu. The trend (rising, steady, or falling) is calculated by CDC for the wider health service area around your county. Many counties have no emergency departments that report, and some states publish only a statewide figure; in those cases FluHub shows the state level instead.</li>
    <li><b>Wastewater</b> picks up flu A virus shed by people in a sewer area, often before people seek care. Levels run from very low to very high compared with each site's own history. Wastewater can also pick up virus from animal sources, and it does not separate seasonal flu types.</li>
    <li><b>Chance flu is growing</b> is CDC's estimate, from emergency department data, of the probability that infections are increasing. It says nothing about how high flu will go.</li>
    <li>All of these describe your community, not your personal risk. If you have trouble breathing, chest pain, or confusion, <a href="warning-signs.html">get emergency care now</a>.</li>
  </ul>
  ${asOfLine([["nssp", "ED visits"], ["wastewater", "wastewater"], ["rtLocal", "growth estimates"], ["admissions", "hospital admissions"]])}
  <p class="small muted">Sources: <a href="https://data.cdc.gov/d/rdmq-nq56" target="_blank" rel="noopener">CDC NSSP emergency department visits</a>; <a href="https://data.cdc.gov/d/atcp-73re" target="_blank" rel="noopener">CDC wastewater viral activity levels</a> (public domain; includes sites run by WastewaterSCAN and states) linked to counties with <a href="https://data.cdc.gov/d/ymmh-divb" target="_blank" rel="noopener">CDC wastewater site data</a>; <a href="https://data.cdc.gov/d/ahfs-x44r" target="_blank" rel="noopener">CDC epidemic trends and Rt</a> and <a href="https://data.cdc.gov/d/5dqz-y4ea" target="_blank" rel="noopener">state estimates</a>; <a href="https://data.cdc.gov/d/vdzy-6i9v" target="_blank" rel="noopener">CDC NHSN hospital admission levels</a>; ZIP to county matching from the <a href="https://www.census.gov/geographies/reference-files/time-series/geo/relationship-files.html" target="_blank" rel="noopener">U.S. Census Bureau 2020 relationship files</a>.</p>
</section>`;

  await emit("flu-near-you.html", page({
    path: "flu-near-you.html", active: "flu-near-you.html",
    title: "Flu near you: county flu activity by ZIP code",
    description: "Check flu in your county by ZIP code: CDC emergency department visits for flu, wastewater flu levels, and the chance flu is growing, with plain-language guidance and a state-by-state table.",
    body, scripts: ["local.js", "shortage.js"],
  }));
}
