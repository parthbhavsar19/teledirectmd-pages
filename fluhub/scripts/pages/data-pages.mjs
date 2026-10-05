// Surveillance pages: This week, States index, one page per state, Seasons compared, Press desk + CSVs.
import { page, pageHead, esc, icon } from "../lib/layout.mjs";
import { lineChart, barChart, sparkline, legend } from "../lib/charts.mjs";
import { tileMap, ladder, levelChip, levelIndex, LEVELS } from "../lib/tilemap.mjs";
import { iliSummary, bySeason, typicalBand, seasonTicks, weekIndexLabel, nhsnSeasons, cumulative, fmtDate, seasonLabel, pctChange, ATYPICAL, atIndex } from "../lib/derive.mjs";
import { epiweekEndISO, seasonOf, seasonWeekIndex, dateToEpiweek } from "../lib/mmwr.mjs";
import { SITE } from "../../content/site.mjs";
import { fluNearYouBox, SHUTDOWN_NOTE } from "../lib/local.mjs";

const pct = (v, d = 1) => (v == null ? "–" : `${Number(v).toFixed(d)}%`);
const num = (v, d = 0) => (v == null ? "–" : Number(v).toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d }));
const big = (v) => (v == null ? "–" : v >= 1e6 ? `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1)}M` : v >= 1e3 ? `${Math.round(v / 1e3)}K` : String(v));

function delta(a, b, unit = "", d = 1) {
  if (a == null || b == null) return "";
  const diff = a - b;
  const arrow = Math.abs(diff) < 10 ** -d / 2 ? "→" : diff > 0 ? "↑" : "↓";
  return `<span class="delta">${arrow} ${Math.abs(diff).toFixed(d)}${unit}</span>`;
}

/** Season-overlay chart: typical band, last season, current season. */
export function overlayChart({ id, summary, title, sub, unit = "%", yFmt = (v) => `${v}%`, baseline, note, dp = 1, extra = [] }) {
  const s = summary;
  const series = [];
  extra.forEach((e) => series.push(e));
  if (s.prev && s.seasons[s.prev]) series.push({ name: seasonLabel(s.prev), points: s.seasons[s.prev], cls: "s2", width: 2, label: seasonLabel(s.prev), z: 1 });
  series.push({ name: seasonLabel(s.current), points: s.seasons[s.current] || [], cls: "s1", width: 3, label: seasonLabel(s.current), dot: true, z: 2 });
  series.push({ name: "Typical (median)", points: s.band.med, cls: "past", width: 1.5, hover: true, z: 0 });
  const span = s.typicalSeasons.length ? `${seasonLabel(s.typicalSeasons[0])} to ${seasonLabel(s.typicalSeasons.at(-1))}` : "";
  return lineChart({
    id, title, sub, yFmt, yUnit: unit, hoverDp: dp,
    x: { min: 0, max: 52, ticks: seasonTicks(s.current) },
    series, bands: [{ lo: s.band.lo, hi: s.band.hi }],
    refLines: baseline ? [{ y: baseline.value, label: baseline.label }] : [],
    hoverLabels: weekIndexLabel(s.current),
    legend: [
      { name: `${seasonLabel(s.current)} season`, cls: "s1" },
      ...(s.prev ? [{ name: `${seasonLabel(s.prev)} season`, cls: "s2" }] : []),
      ...extra.filter((e) => e.legend).map((e) => ({ name: e.legend, cls: e.cls })),
      { name: `Typical range, ${span} (10th–90th percentile)`, cls: "band", band: true },
      { name: "Typical median", cls: "past" },
    ],
    desc: `${title}. ${sub || ""}`,
    note,
  });
}

function csv(rows) {
  return rows.map((r) => r.map((c) => (c == null ? "" : /[",\n]/.test(String(c)) ? `"${String(c).replace(/"/g, '""')}"` : c)).join(",")).join("\n") + "\n";
}

export default async function ({ data, emit }) {
  const { jur, activity, ilinet, labs, nhsn, flusurv, coverage, epi, meta, archive } = data;
  const states = jur.filter((j) => !j.territory);
  const R1 = "../";
  const latestEw = ilinet.latest;
  const weekEnd = epiweekEndISO(latestEw);
  const curSeason = seasonOf(latestEw);
  const nextSeasonStarts = seasonWeekIndex(latestEw) >= 45; // late season: next season starts soon
  const nat = iliSummary(ilinet.series.nat);
  const natLab = iliSummary(labs.series.nat.map((r) => [r[0], r[1]]));
  const usNhsn = nhsn.series.USA || [];
  const usNhsnSeasons = nhsnSeasons(usNhsn);
  const baselineVal = epi.baseline?.[curSeason];
  const baseline = baselineVal ? { value: baselineVal, label: `Baseline ${baselineVal}%` } : null;

  const levels = activity.levels;
  const counts = LEVELS.map((l) => states.filter((s) => levels[s.activityName] === l).length);
  const modPlus = counts[2] + counts[3] + counts[4];

  const seasonNote = nextSeasonStarts
    ? `<div class="callout"><p class="callout-title">${icon.info}The 2026–27 flu season starts with MMWR week 40, the week ending October 10, 2026.</p><p>Until those numbers arrive, the charts below show the full ${seasonLabel(curSeason)} season against earlier seasons. Off-season activity is normally low; a rise in late September or October is the first sign the new season is under way.</p></div>`
    : "";

  // per-jurisdiction summaries
  const J = {};
  for (const j of jur) {
    const ili = j.delphi ? iliSummary(ilinet.series[j.delphi]) : null;
    const labRows = j.delphi ? labs.series[j.delphi] : null;
    const nh = nhsn.series[j.nhsn] || null;
    const cov = coverage[j.name] || coverage[j.name === "U.S. Virgin Islands" ? "U.S. Virgin Islands" : j.name] || null;
    J[j.abbr] = { j, ili, labRows, nh, cov, level: levels[j.activityName] };
  }
  const usCov = coverage["United States"] || {};
  const covSeasons = Object.keys(usCov).sort();
  const lastCov = covSeasons.at(-1);

  const statStrip = `<div class="strip">
  <div class="stat"><span class="stat-label">Outpatient visits for flu-like illness, nationally</span><span class="stat-value">${pct(nat.latest.v)}</span><span class="stat-ctx">${delta(nat.latest.v, nat.prior?.v, " pts")}<span>prior week ${pct(nat.prior?.v)}; same week last season ${pct(nat.lastYearSameWeek)}</span></span></div>
  <div class="stat"><span class="stat-label">Clinical lab specimens positive for influenza</span><span class="stat-value">${pct(natLab.latest.v)}</span><span class="stat-ctx">${delta(natLab.latest.v, natLab.prior?.v, " pts")}<span>prior week ${pct(natLab.prior?.v)}</span></span></div>
  <div class="stat"><span class="stat-label">New hospital admissions with confirmed flu, U.S.</span><span class="stat-value">${num(usNhsn.at(-1)?.[1])}</span><span class="stat-ctx">${delta(usNhsn.at(-1)?.[1], usNhsn.at(-2)?.[1], "", 0)}<span>${num(usNhsn.at(-1)?.[2], 2)} per 100,000; prior week ${num(usNhsn.at(-2)?.[1])}</span></span></div>
  <div class="stat"><span class="stat-label">States plus DC at Moderate activity or higher</span><span class="stat-value">${modPlus}<small>of 51</small></span><span class="stat-ctx"><span>${counts[0]} very low, ${counts[1]} low, ${counts[2]} moderate, ${counts[3]} high, ${counts[4]} very high</span></span></div>
</div>`;

  /* ---------------- This week ---------------- */
  const stateRows = states.map((s) => {
    const x = J[s.abbr];
    const lv = x.level;
    const iliL = x.ili?.latest?.v, iliP = x.ili?.prior?.v;
    const lab = x.labRows?.at(-1);
    const nh = x.nh?.at(-1);
    const spark = x.ili ? sparkline(ilinet.series[s.delphi].slice(-16), { w: 96, h: 26 }) : "";
    return `<tr><td><a href="state/${s.slug}.html">${esc(s.name)}</a></td><td data-v="${levelIndex(lv)}">${levelChip(lv)}</td><td class="n" data-v="${iliL ?? -1}">${pct(iliL)}</td><td class="n" data-v="${iliL != null && iliP != null ? iliL - iliP : 0}">${iliL != null && iliP != null ? (iliL - iliP >= 0 ? "+" : "−") + Math.abs(iliL - iliP).toFixed(1) : "–"}</td><td class="n" data-v="${lab ? lab[1] : -1}">${lab && lab[0] >= latestEw - 2 ? pct(lab[1]) : "–"}</td><td class="n" data-v="${nh?.[2] ?? -1}">${nh?.[2] != null ? num(nh[2], 2) : "–"}</td><td aria-hidden="true">${spark}</td></tr>`;
  }).join("");

  const natNhsnSummary = {
    seasons: Object.fromEntries(Object.entries(usNhsnSeasons).map(([k, v]) => [k, v.map((r) => [r[0], r[1]])])),
    current: seasonOf(dateToEpiweek(usNhsn.at(-1)[0])),
  };
  natNhsnSummary.prev = Object.keys(natNhsnSummary.seasons).filter((s) => s < natNhsnSummary.current).sort().at(-1);
  const nhsnTypical = Object.keys(natNhsnSummary.seasons).filter((s) => s < natNhsnSummary.current && s >= "2022-23");
  natNhsnSummary.typicalSeasons = nhsnTypical;
  natNhsnSummary.band = typicalBand(natNhsnSummary.seasons, nhsnTypical);

  const nhsnSeriesChart = lineChart({
    id: "nhsn-overlay", title: "New hospital admissions with confirmed influenza, per 100,000 people",
    sub: `United States, weekly. NHSN hospital reporting; seasons ${seasonLabel(nhsnTypical[0] || "")} onward.`,
    x: { min: 0, max: 52, ticks: seasonTicks(natNhsnSummary.current) }, yUnit: " per 100k", hoverDp: 2, yFmt: (v) => String(v),
    hoverLabels: weekIndexLabel(natNhsnSummary.current),
    series: Object.keys(natNhsnSummary.seasons).filter((s) => s >= "2022-23").map((s) => ({
      name: seasonLabel(s), points: natNhsnSummary.seasons[s],
      cls: s === natNhsnSummary.current ? "s1" : s === natNhsnSummary.prev ? "s2" : "past",
      width: s === natNhsnSummary.current ? 3 : 2, label: seasonLabel(s), z: s === natNhsnSummary.current ? 3 : s === natNhsnSummary.prev ? 2 : 1, dot: s === natNhsnSummary.current,
    })),
    legend: [{ name: `${seasonLabel(natNhsnSummary.current)}`, cls: "s1" }, { name: seasonLabel(natNhsnSummary.prev), cls: "s2" }, { name: "Earlier seasons", cls: "past" }],
    note: "Hospitals have been required to report respiratory admissions to CDC's National Healthcare Safety Network since November 2024; earlier weeks reflect voluntary or differently mandated reporting, so small differences across seasons should not be over-read.",
  });

  const activityBody = `${pageHead({
    eyebrow: `MMWR week ${latestEw % 100} · ${esc(SITE.weekLabel)}`,
    title: "Flu activity this week",
    lede: `How much flu is circulating in the United States right now, measured four ways: outpatient visits, lab tests, hospital admissions, and CDC's state activity levels. Updated every Friday after CDC publishes FluView.`,
  })}
${seasonNote ? `<div class="section" style="margin-top:28px">${seasonNote}</div>` : ""}
<section class="section">${statStrip}</section>

<section class="section">
  <div class="section-head"><h2>Activity level by state</h2><p class="muted">CDC's acute respiratory illness (ARI) activity level compares each state's share of emergency department visits for respiratory illness with its own past seasons. Select a state for its full history.</p></div>
  <div class="grid-2" style="grid-template-columns:minmax(0,1.6fr) minmax(0,1fr)">
    <div>${tileMap(jur, levels, (j) => `state/${j.slug}.html`)}</div>
    <div class="col" style="display:grid;gap:14px;align-content:start">
      ${ladder()}
      <p class="small muted">Week ending ${fmtDate(activity.week)}. CDC publishes only the current week of this measure; FluHub archives each week so the history builds over the season.</p>
      <p class="small">Activity levels reflect all acute respiratory illness, which includes COVID-19 and RSV as well as flu. Pair them with the lab percent-positive figure to see how much is influenza.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>The national flu curve</h2><p class="muted">Each line is one flu season, aligned on the same calendar weeks from October through September, so you can see whether this season is early, late, higher, or lower than usual.</p></div>
  <div style="display:grid;gap:40px">
  ${overlayChart({ id: "nat-ili", summary: nat, title: "Share of outpatient visits for influenza-like illness", sub: "United States, weighted %ILI from ILINet, about 3,000 to 4,000 outpatient providers.", baseline, note: `Influenza-like illness is fever with cough or sore throat. Shaded band shows the 10th to 90th percentile of past seasons, excluding ${[...ATYPICAL].map(seasonLabel).join(" and ")}, when COVID-19 measures suppressed flu.${baseline ? " The dashed line is CDC's national baseline: activity above it marks the flu season." : ""}` })}
  ${overlayChart({ id: "nat-pos", summary: natLab, title: "Share of clinical lab tests positive for influenza", sub: "United States, WHO collaborating and NREVSS clinical laboratories.", note: "Percent positive is the most flu-specific of the weekly measures; it rises before hospital admissions do." })}
  ${nhsnSeriesChart}
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Every state, this week</h2><p class="muted">Select a column header to sort. The trend line covers the last 16 weeks of outpatient flu-like illness.</p></div>
  <div class="table-wrap"><table class="sortable"><thead><tr><th>State</th><th>Activity level</th><th class="n">Flu-like illness</th><th class="n">vs prior wk</th><th class="n">Lab % positive</th><th class="n">Admits per 100k</th><th>16 weeks</th></tr></thead><tbody>${stateRows}</tbody></table></div>
  <p class="chart-note" style="margin-top:8px">State flu-like illness is unweighted %ILI from providers in that state. A dash means the state did not report that week or the measure is not published for it.</p>
</section>

<section class="section col small muted">
  <p>Sources: ${Object.values(meta.sources).filter((s) => ["activity", "ilinet", "labs", "nhsn"].includes(Object.keys(meta.sources).find((k) => meta.sources[k] === s))).map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join("; ")}. All surveillance data are preliminary and revised as late reports arrive. Retrieved ${fmtDate(meta.built)}.</p>
</section>`;

  await emit("activity.html", page({
    path: "activity.html", active: "activity.html",
    title: `U.S. flu activity this week: ${fmtDate(weekEnd)}`,
    description: `National and state flu activity for the week ending ${fmtDate(weekEnd)}: outpatient flu-like illness ${pct(nat.latest.v)}, lab percent positive ${pct(natLab.latest.v)}, and hospital admissions, compared with past seasons.`,
    body: activityBody,
    jsonld: [datasetLD("U.S. weekly influenza surveillance summary", `Weekly national and state influenza indicators compiled from CDC FluView, ILINet, NREVSS and NHSN, week ending ${weekEnd}.`, "2010-10-09/" + weekEnd)],
  }));

  /* ---------------- States index ---------------- */
  const idx = states.concat(jur.filter((j) => j.territory)).map((s) => `<li><a href="state/${s.slug}.html">${esc(s.name)}</a>${levelChip(levels[s.activityName])}</li>`).join("");
  await emit("states.html", page({
    path: "states.html", active: "states.html",
    title: "Flu by state",
    description: "Flu activity, history, hospital admissions, and vaccination coverage for every U.S. state, DC, and territory.",
    body: `${pageHead({ eyebrow: esc(SITE.weekLabel), title: "Flu in your state", lede: "Every state page shows this week's level, the state's flu curve against its own past seasons, hospital admissions since 2020, and how many residents get vaccinated." })}
<section class="section"><div class="grid-2" style="grid-template-columns:minmax(0,1.6fr) minmax(0,1fr)"><div>${tileMap(jur, levels, (j) => `state/${j.slug}.html`)}</div><div>${ladder()}</div></div></section>
<section class="section"><h2 style="margin-bottom:14px">All states and territories</h2><ul class="state-index">${idx}</ul></section>`,
  }));

  /* ---------------- State pages ---------------- */
  for (const j of jur) {
    const x = J[j.abbr];
    const lv = x.level;
    let charts = "";
    let strip = "";
    const covCur = x.cov?.[lastCov];
    const lab = x.labRows?.at(-1);
    const nh = x.nh?.at(-1);
    strip = `<div class="strip">
<div class="stat"><span class="stat-label">CDC activity level</span><span class="stat-value" style="font-size:1.5rem">${levelChip(lv)}</span><span class="stat-ctx">week ending ${fmtDate(activity.week)}</span></div>
<div class="stat"><span class="stat-label">Outpatient visits for flu-like illness</span><span class="stat-value">${pct(x.ili?.latest.v)}</span><span class="stat-ctx">${x.ili ? `${delta(x.ili.latest.v, x.ili.prior?.v, " pts")}<span>same week last season ${pct(x.ili.lastYearSameWeek)}</span>` : "<span>Not reported for this jurisdiction</span>"}</span></div>
<div class="stat"><span class="stat-label">New flu hospital admissions</span><span class="stat-value">${nh ? num(nh[1]) : "–"}</span><span class="stat-ctx">${nh ? `<span>${num(nh[2], 2)} per 100,000 (U.S. ${num(usNhsn.at(-1)[2], 2)})</span>` : "<span>Not reported</span>"}</span></div>
<div class="stat"><span class="stat-label">Vaccinated last season, ${seasonLabel(lastCov)}</span><span class="stat-value">${covCur?.all != null ? pct(covCur.all, 0) : "–"}</span><span class="stat-ctx"><span>${covCur ? `adults ${pct(covCur.adult, 0)}, children ${pct(covCur.child, 0)}; U.S. ${pct(usCov[lastCov]?.all, 0)}` : "Not published"}</span></span></div>
</div>`;
    if (x.ili) {
      charts += overlayChart({ id: "st-ili", summary: x.ili, title: `${j.name}: share of outpatient visits for flu-like illness`, sub: "Unweighted %ILI from ILINet providers in the state, by flu season.", note: `Typical range is the 10th–90th percentile of ${j.name}'s own seasons from ${seasonLabel(x.ili.typicalSeasons[0])}, excluding the COVID-disrupted 2020–21 and 2021–22 seasons. Provider mix changes over time, so compare shapes and timing more than exact levels.` });
    }
    if (x.labRows?.length > 20) {
      const ls = iliSummary(x.labRows.map((r) => [r[0], r[1]]));
      charts += overlayChart({ id: "st-pos", summary: ls, title: `${j.name}: share of lab tests positive for influenza`, sub: "Clinical laboratories reporting to WHO/NREVSS." });
    }
    if (x.nh?.length) {
      const us = new Map(usNhsn.map((r) => [r[0], r[2]]));
      const pts = x.nh.map((r, i) => [i, r[2]]);
      const usPts = x.nh.map((r, i) => [i, us.get(r[0]) ?? null]);
      const ticks = [];
      x.nh.forEach((r, i) => { if (r[0].slice(5, 7) === "01" && +r[0].slice(8) <= 7) ticks.push([i, r[0].slice(0, 4)]); });
      charts += lineChart({
        id: "st-nhsn", title: `${j.name}: weekly hospital admissions with confirmed flu, per 100,000`, sub: `Every week since ${fmtDate(x.nh[0][0])}, against the national rate.`,
        x: { min: 0, max: x.nh.length - 1, ticks }, yFmt: (v) => String(v), yUnit: " per 100k", hoverDp: 2,
        hoverLabels: (i) => `Week ending ${fmtDate(x.nh[i][0])}`,
        series: [
          { name: "United States", points: usPts, cls: "past", width: 1.5, label: "U.S.", z: 0 },
          { name: j.name, points: pts, cls: "s1", width: 2, label: j.abbr, dot: true, z: 1 },
        ],
        legend: [{ name: j.name, cls: "s1" }, { name: "United States", cls: "past" }],
        note: "Hospital reporting became mandatory in November 2024; gaps or flat stretches before that can reflect reporting rather than flu.",
      });
    }
    if (x.cov) {
      const seasons = Object.keys(x.cov).sort();
      const xi = Object.fromEntries(seasons.map((s, i) => [s, i]));
      charts += lineChart({
        id: "st-cov", title: `${j.name}: share of residents vaccinated against flu, by season`, sub: "Adults 18+ and children 6 months to 17 years, end-of-season estimates.",
        x: { min: 0, max: seasons.length - 1, ticks: seasons.map((s, i) => [i, s.slice(2, 4) + "–" + s.slice(5)]).filter((_, i) => i % 2 === seasons.length % 2 - 1 + 0 || i === seasons.length - 1 || i % 3 === 0) },
        yFmt: (v) => `${v}%`, yUnit: "%", yMax: 80, rightPad: 110,
        hoverLabels: (i) => `${seasonLabel(seasons[i])} season`,
        series: [
          { name: "Children", points: seasons.map((s) => [xi[s], x.cov[s].child ?? null]), cls: "s2", width: 2, label: "Children", z: 1 },
          { name: "Adults", points: seasons.map((s) => [xi[s], x.cov[s].adult ?? null]), cls: "s1", width: 2.5, label: "Adults", dot: true, z: 2 },
          { name: "U.S. adults", points: seasons.map((s) => [xi[s], usCov[s]?.adult ?? null]), cls: "past", width: 1.5, label: "U.S. adults", z: 0 },
        ],
        legend: [{ name: "Adults", cls: "s1" }, { name: "Children", cls: "s2" }, { name: "U.S. adults", cls: "past" }],
        note: "CDC FluVaxView. Adult estimates come from BRFSS and child estimates from NIS-Flu; both are survey-based with confidence intervals of several points.",
      });
    }
    const archWeeks = Object.keys(archive).sort();
    const archRows = archWeeks.slice(-12).reverse().map((w) => `<tr><td class="mono">${fmtDate(w)}</td><td>${levelChip(archive[w][j.activityName])}</td></tr>`).join("");
    const peaks = x.ili ? x.ili.typicalSeasons.concat(x.ili.prev === x.ili.current ? [] : []).slice(-6).concat([x.ili.current]).map((s) => { const p = x.ili.peak(s); return p ? `<tr><td>${seasonLabel(s)}</td><td class="n">${pct(p[1])}</td><td class="mono">${weekIndexLabel(s)(p[0]).replace(/ \(wk.*/, "").replace("Week ending ", "")}</td></tr>` : ""; }).join("") : "";

    // Territories where CDC publishes little or no weekly data stay out of the index (thin pages).
    const thin = !x.ili && !x.nh?.length;
    await emit(`state/${j.slug}.html`, page({
      path: `state/${j.slug}.html`, active: "states.html", noindex: thin,
      title: `Flu in ${j.name}`,
      description: `${j.name} flu activity for the week ending ${fmtDate(weekEnd)}${lv ? ` (${lv})` : ""}, with the state's flu curve compared to past seasons, hospital admissions since 2020, and vaccination rates.`,
      body: `${pageHead({ R: R1, crumbs: [["states.html", "States"], [null, j.name]], eyebrow: esc(SITE.weekLabel), title: `Flu in ${esc(j.name)}`, lede: x.ili ? `Outpatient flu-like illness in ${esc(j.name)} was ${pct(x.ili.latest.v)} of visits in the week ending ${fmtDate(x.ili.latest.date)}, compared with ${pct(x.ili.lastYearSameWeek)} at the same point last season.` : `Here is what CDC publishes for ${esc(j.name)}. Some national surveillance systems do not report separately for every territory.` })}
<section class="section">${strip}</section>
<section class="section">${fluNearYouBox(j.abbr, { R: R1 })}</section>
${seasonNote ? `<div class="section" style="margin-top:28px">${seasonNote}</div>` : ""}
<section class="section" style="display:grid;gap:44px">${charts || '<p class="muted">CDC does not publish weekly flu surveillance series for this jurisdiction.</p>'}</section>
<section class="section grid-2">
  ${peaks ? `<div><h3 style="margin-bottom:10px">Season peaks</h3><div class="table-wrap"><table><thead><tr><th>Season</th><th class="n">Peak %ILI</th><th>Peak week</th></tr></thead><tbody>${peaks}</tbody></table></div></div>` : ""}
  <div><h3 style="margin-bottom:10px">Activity level archive</h3><div class="table-wrap"><table><thead><tr><th>Week ending</th><th>Level</th></tr></thead><tbody>${archRows}</tbody></table><p class="small muted" style="padding:8px 12px">FluHub started archiving CDC's weekly levels on ${fmtDate(archWeeks[0])}; CDC keeps only the current week.</p></div></div>
</section>
<section class="section"><div class="task-list">
  <a class="task" href="../find-a-flu-shot.html#${j.abbr}"><h3>Find a flu shot in ${esc(j.name)}</h3><p>Pharmacies, clinics, and health centers near you, sorted by distance.</p><span class="go">Search locations</span></a>
  <a class="task" href="../symptoms.html"><h3>Feeling sick?</h3><p>Check how soon to get care and whether antiviral treatment could help.</p><span class="go">Start the symptom check</span></a>
  <a class="task" href="../high-risk.html"><h3>Who is at higher risk</h3><p>The conditions and ages where flu is more likely to be serious.</p><span class="go">See the list</span></a>
</div></section>`,
      jsonld: [datasetLD(`${j.name} influenza surveillance`, `Weekly influenza-like illness, lab percent positive, hospital admissions and vaccination coverage for ${j.name}.`, "2010-10-09/" + weekEnd)],
    }));
  }

  /* ---------------- Seasons compared ---------------- */
  const allSeasons = Object.keys(nat.seasons).filter((s) => s >= "2010-11").sort();
  const notable = { "2017-18": "2017–18", "2024-25": "2024–25" };
  const spaghetti = lineChart({
    id: "all-ili", title: "Every flu season since 2010–11, outpatient flu-like illness", sub: "United States, weighted %ILI. Gray lines are individual seasons; three are highlighted.",
    x: { min: 0, max: 52, ticks: seasonTicks(curSeason) }, yFmt: (v) => `${v}%`, yUnit: "%", hoverLabels: weekIndexLabel(curSeason),
    series: allSeasons.map((s) => ({
      name: seasonLabel(s), points: nat.seasons[s],
      cls: s === curSeason ? "s1" : s === "2024-25" ? "s2" : s === "2017-18" ? "ink" : "past",
      width: s === curSeason ? 3 : notable[s] ? 2.2 : 1.1,
      label: s === curSeason || notable[s] ? seasonLabel(s) : null, z: s === curSeason ? 3 : notable[s] ? 2 : 0, hover: s === curSeason || !!notable[s] || s === "2009-10",
    })),
    refLines: baseline ? [{ y: baseline.value, label: baseline.label }] : [],
    legend: [{ name: seasonLabel(curSeason), cls: "s1" }, { name: "2024–25, high severity", cls: "s2" }, { name: "2017–18, high severity", cls: "ink" }, { name: "Other seasons", cls: "past" }],
    note: "Seasons with an extra MMWR week 53 are aligned on week 40. The 2009–10 H1N1 pandemic season is excluded.",
  });

  const peakBars = barChart({
    id: "peaks", title: "Peak weekly outpatient flu-like illness, by season", sub: "Highest weekly national %ILI in each season.",
    yFmt: (v) => `${v}%`, yUnit: "%",
    bars: allSeasons.map((s) => { const p = nat.peak(s); return { label: `${seasonLabel(s)} peak, ${p ? weekIndexLabel(s)(p[0]).replace(/ \(.*/, "") : ""}`, short: s.slice(2, 4) + "–" + s.slice(5), value: p ? p[1] : null, cls: s === curSeason ? "s1" : s === "2024-25" ? "s2" : "past" }; }),
  });

  // FluSurv-NET cumulative through MMWR week 17 (Oct 1 - Apr 30), comparable across seasons
  const fsSeasons = Object.keys(flusurv.seasons).filter((s) => s >= "2010-11").sort();
  const cutoff = (s) => seasonWeekIndex(+(+s.slice(0, 4) + 1 + "17"));
  const fsCum = Object.fromEntries(fsSeasons.map((s) => [s, cumulative(flusurv.seasons[s]).filter((p) => p[0] <= cutoff(s))]));
  const fsTotal = (s) => fsCum[s].filter((p) => p[1] != null).at(-1)?.[1] ?? null;
  const fsBand = typicalBand(fsCum, fsSeasons.filter((s) => s !== curSeason && !ATYPICAL.has(s)));
  const fsCurves = lineChart({
    id: "fs-cum", title: "Cumulative flu hospitalization rate, per 100,000 people", sub: "FluSurv-NET, laboratory-confirmed influenza hospitalizations in selected counties of about a dozen states, October through April.",
    x: { min: 0, max: 31, ticks: seasonTicks(curSeason).filter((t) => t[0] <= 31) }, yFmt: (v) => String(v), yUnit: " per 100k", hoverLabels: weekIndexLabel(curSeason),
    bands: [{ lo: fsBand.lo, hi: fsBand.hi }],
    series: [
      { name: "2017–18", points: fsCum["2017-18"], cls: "ink", width: 2, label: "2017–18", z: 1 },
      { name: "2024–25", points: fsCum["2024-25"], cls: "s2", width: 2, label: "2024–25", z: 1 },
      { name: seasonLabel(curSeason), points: fsCum[curSeason], cls: "s1", width: 3, label: seasonLabel(curSeason), dot: true, z: 2 },
    ],
    legend: [{ name: seasonLabel(curSeason), cls: "s1" }, { name: "2024–25", cls: "s2" }, { name: "2017–18", cls: "ink" }, { name: "Typical range of other seasons", cls: "band", band: true }],
    note: "FluSurv-NET covers about 10% of the U.S. population. Rates are not adjusted for testing practices, which changed after 2020.",
  });
  const fsBars = barChart({
    id: "fs-bars", title: "Cumulative hospitalization rate by season, October to April", sub: "Per 100,000 people, FluSurv-NET, all ages.",
    yFmt: (v) => String(v), yUnit: " per 100k",
    bars: fsSeasons.map((s) => ({ label: `${seasonLabel(s)}`, short: s.slice(2, 4) + "–" + s.slice(5), value: fsTotal(s), cls: s === curSeason ? "s1" : s === "2024-25" ? "s2" : "past", note: ATYPICAL.has(s) ? "COVID-19 measures suppressed flu this season." : "" })),
  });

  const burden = epi.burden || [];
  const burdenBars = (key, title, sub) => barChart({
    id: "burden-" + key, title, sub, yFmt: big, yUnit: "",
    bars: burden.map((b) => ({ label: `${seasonLabel(b.season)}${b.status !== "final" ? " (preliminary)" : ""}`, short: b.season.slice(2, 4) + "–" + b.season.slice(5), value: b[key] ?? null, cls: b.status !== "final" ? "s1" : "past", note: b.in_season_minimum ? `In-season minimum estimate as of ${b.asof}; end-of-season estimate pending.` : b[key + "_ui"] ? `95% uncertainty interval ${b[key + "_ui"]}` : (b.season === "2020-21" ? "CDC did not produce an estimate; flu activity was unusually low." : "") })),
    note: "CDC models burden from FluSurv-NET hospitalization rates, adjusting for under-testing; final estimates for a season are published one to two years later.",
  });
  const ped = epi.pediatric_deaths || [];
  const pedBars = ped.length ? barChart({
    id: "ped", title: "Flu-associated deaths in children reported to CDC, by season", sub: "Laboratory-confirmed; reporting has been nationally notifiable since 2004.",
    yUnit: " deaths",
    bars: ped.map((p) => ({ label: seasonLabel(p.season) + (p.status === "preliminary" ? " (still being reported)" : ""), short: p.season.slice(2, 4) + "–" + p.season.slice(5), value: p.deaths, showValue: true, cls: p.season === curSeason ? "s1" : p.season === "2024-25" ? "s2" : "past" })),
    note: "About 85 to 90 percent of children who died of flu in the last two seasons, among those eligible with known status, were not fully vaccinated (CDC). The 2025–26 count is still being finalized.",
  }) : "";
  const ve = epi.ve || [];
  const veBars = ve.length ? barChart({
    id: "ve", title: "Vaccine effectiveness against medically attended flu, by season", sub: "Adjusted overall estimate, U.S. Flu VE Network (outpatient). Percent reduction in risk.",
    yFmt: (v) => `${v}%`, yUnit: "%",
    bars: ve.filter((v) => v.season >= "2010-11").map((v) => ({ label: `${seasonLabel(v.season)}${v.status === "preliminary" ? " (preliminary)" : ""}`, short: v.season.slice(2, 4) + "–" + v.season.slice(5), value: v.ve, showValue: true, cls: v.season === curSeason ? "s1" : "past", note: v.ci ? `95% CI ${v.ci}` : v.ve == null ? "Not estimated: too little flu circulated." : "" })),
  }) : "";
  const covChart = lineChart({
    id: "us-cov", title: "Share of Americans vaccinated against flu, by season", sub: "End-of-season estimates, CDC FluVaxView.",
    x: { min: 0, max: covSeasons.length - 1, ticks: covSeasons.map((s, i) => [i, s.slice(2, 4) + "–" + s.slice(5)]).filter((_, i) => i % 3 === 0 || i === covSeasons.length - 1) },
    yFmt: (v) => `${v}%`, yUnit: "%", yMax: 80, rightPad: 110, hoverLabels: (i) => `${seasonLabel(covSeasons[i])} season`,
    series: [
      { name: "Adults 65+", points: covSeasons.map((s, i) => [i, usCov[s]?.senior ?? null]), cls: "ink", width: 2, label: "65+", z: 0 },
      { name: "Children 6 mo–17 yr", points: covSeasons.map((s, i) => [i, usCov[s]?.child ?? null]), cls: "s2", width: 2, label: "Children", z: 1 },
      { name: "Adults 18+", points: covSeasons.map((s, i) => [i, usCov[s]?.adult ?? null]), cls: "s1", width: 2.5, label: "Adults", dot: true, z: 2 },
    ],
    legend: [{ name: "Adults 18+", cls: "s1" }, { name: "Children 6 months–17 years", cls: "s2" }, { name: "Adults 65+", cls: "ink" }],
    note: `Child coverage in ${seasonLabel(lastCov)} was the lowest in 15 seasons.`,
  });

  const veMap = Object.fromEntries(ve.map((v) => [v.season, v]));
  const bMap = Object.fromEntries(burden.map((b) => [b.season, b]));
  const pMap = Object.fromEntries(ped.map((p) => [p.season, p]));
  const scoreRows = [...allSeasons].reverse().map((s) => {
    const p = nat.peak(s);
    return `<tr><td><b>${seasonLabel(s)}</b></td><td class="n" data-v="${p?.[1] ?? -1}">${pct(p?.[1])}</td><td class="mono">${p ? weekIndexLabel(s)(p[0]).replace(/Week ending | \(.*/g, "") : "–"}</td><td class="n" data-v="${fsTotal(s) ?? -1}">${fsTotal(s) != null ? num(fsTotal(s), 1) : "–"}</td><td class="n" data-v="${bMap[s]?.illnesses ?? -1}">${big(bMap[s]?.illnesses)}</td><td class="n" data-v="${bMap[s]?.hospitalizations ?? -1}">${big(bMap[s]?.hospitalizations)}</td><td class="n" data-v="${bMap[s]?.deaths ?? -1}">${big(bMap[s]?.deaths)}</td><td class="n" data-v="${pMap[s]?.deaths ?? -1}">${pMap[s]?.deaths ?? "–"}</td><td class="n" data-v="${veMap[s]?.ve ?? -1}">${veMap[s]?.ve != null ? veMap[s].ve + "%" : "–"}</td><td class="n" data-v="${usCov[s]?.adult ?? -1}">${pct(usCov[s]?.adult, 1)}</td><td class="n" data-v="${usCov[s]?.child ?? -1}">${pct(usCov[s]?.child, 1)}</td></tr>`;
  }).join("");

  const seasonsBody = `${pageHead({
    eyebrow: "Historical data, 2010–11 to " + seasonLabel(curSeason),
    title: "Flu seasons compared",
    lede: "How this season measures up against every season since 2010: outpatient illness, hospitalizations, deaths, vaccine effectiveness, and vaccination rates. Every number links to its CDC source.",
  })}
<p class="small muted section">${esc(SHUTDOWN_NOTE)}</p>
<section class="section">
  <div class="section-head"><h2>Season scorecard</h2><p class="muted">One row per season. Select a heading to sort; for example, sort by hospitalization rate to rank severity.</p></div>
  <div class="table-wrap"><table class="sortable"><thead><tr><th>Season</th><th class="n">Peak %ILI</th><th>Peak week ending</th><th class="n">Hosp. rate per 100k</th><th class="n">Est. illnesses</th><th class="n">Est. hospitalizations</th><th class="n">Est. deaths</th><th class="n">Child deaths</th><th class="n">Vaccine effectiveness</th><th class="n">Adults vaccinated</th><th class="n">Children vaccinated</th></tr></thead><tbody>${scoreRows}</tbody>
  <caption>Peak %ILI: ILINet. Hospitalization rate: FluSurv-NET cumulative Oct–Apr. Illness, hospitalization and death estimates: CDC Disease Burden of Flu (most recent seasons preliminary). Child deaths: CDC reports. Vaccine effectiveness: U.S. Flu VE Network adjusted overall estimate. Coverage: FluVaxView end of season.</caption></table></div>
</section>
<section class="section" style="display:grid;gap:44px">
  ${spaghetti}
  ${peakBars}
</section>
<section class="section">
  <div class="section-head"><h2>Hospitalizations</h2><p class="muted">The best single measure of how severe a season is. 2024–25 had the highest cumulative rate since FluSurv-NET began in its current form in 2010.</p></div>
  <div style="display:grid;gap:44px">${fsCurves}${fsBars}</div>
</section>
${burden.length ? `<section class="section"><div class="section-head"><h2>Illnesses, hospitalizations, and deaths</h2><p class="muted">CDC's modeled estimates of the full burden of flu, including people who were never tested.</p></div><div style="display:grid;gap:44px">${burdenBars("illnesses", "Estimated symptomatic illnesses", "Per season, United States.")}${burdenBars("hospitalizations", "Estimated flu hospitalizations", "Per season, United States.")}${burdenBars("deaths", "Estimated flu deaths", "Per season, United States.")}</div></section>` : ""}
${pedBars ? `<section class="section">${pedBars}</section>` : ""}
<section class="section"><div class="section-head"><h2>Vaccination</h2></div><div style="display:grid;gap:44px">${veBars}${covChart}</div></section>
<section class="section col small muted"><p>Data: ${["ilinet", "flusurv", "coverage"].map((k) => `<a href="${meta.sources[k].url}" target="_blank" rel="noopener">${esc(meta.sources[k].name)}</a>`).join("; ")}${epi.sources ? "; " + epi.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join("; ") : ""}. Retrieved ${fmtDate(meta.built)}.</p></section>`;

  await emit("seasons.html", page({
    path: "seasons.html", active: "seasons.html",
    title: "U.S. flu seasons compared, 2010 to 2026",
    description: "Every U.S. flu season since 2010–11 side by side: peak activity, hospitalization rates, estimated illnesses and deaths, pediatric deaths, vaccine effectiveness, and vaccination coverage.",
    body: seasonsBody,
    jsonld: [datasetLD("U.S. influenza season comparison, 2010–11 onward", "Season-level influenza indicators: peak ILI, FluSurv-NET cumulative hospitalization rate, CDC burden estimates, pediatric deaths, vaccine effectiveness and coverage.", "2010-10-01/" + weekEnd)],
  }));

  /* ---------------- CSV downloads ---------------- */
  const natLabMap = new Map(labs.series.nat.map((r) => [r[0], r[1]]));
  const nhMap = new Map(usNhsn.map((r) => [dateToEpiweek(r[0]), r]));
  await emit("data/national-weekly.csv", csv([["mmwr_week", "week_ending", "season", "weighted_ili_pct", "lab_percent_positive", "nhsn_flu_admissions", "nhsn_admissions_per_100k"],
    ...ilinet.series.nat.map(([ew, v]) => [ew, epiweekEndISO(ew), seasonOf(ew), v, natLabMap.get(ew) ?? "", nhMap.get(ew)?.[1] ?? "", nhMap.get(ew)?.[2] ?? ""])]));
  await emit("data/state-weekly-latest.csv", csv([["state", "abbr", "week_ending", "ari_activity_level", "ili_pct", "lab_percent_positive", "nhsn_flu_admissions", "nhsn_admissions_per_100k"],
    ...jur.map((j) => { const x = J[j.abbr]; return [j.name, j.abbr, activity.week, x.level || "", x.ili?.latest.v ?? "", x.labRows?.at(-1)?.[1] ?? "", x.nh?.at(-1)?.[1] ?? "", x.nh?.at(-1)?.[2] ?? ""]; })]));
  await emit("data/season-scorecard.csv", csv([["season", "peak_weighted_ili_pct", "peak_week_index", "flusurv_cum_rate_oct_apr", "est_illnesses", "est_hospitalizations", "est_deaths", "pediatric_deaths", "vaccine_effectiveness_pct", "adult_coverage_pct", "child_coverage_pct"],
    ...allSeasons.map((s) => { const p = nat.peak(s); return [s, p?.[1] ?? "", p?.[0] ?? "", fsTotal(s) ?? "", bMap[s]?.illnesses ?? "", bMap[s]?.hospitalizations ?? "", bMap[s]?.deaths ?? "", pMap[s]?.deaths ?? "", veMap[s]?.ve ?? "", usCov[s]?.adult ?? "", usCov[s]?.child ?? ""]; })]));

  /* ---------------- Press desk ---------------- */
  const latestBurden = burden.at(-1);
  const prevFinalish = burden.find((b) => b.season === "2024-25");
  const facts = [
    `Outpatient visits for influenza-like illness were ${pct(nat.latest.v)} nationally in the week ending ${fmtDate(nat.latest.date)}, according to CDC's ILINet${nat.lastYearSameWeek != null ? `, compared with ${pct(nat.lastYearSameWeek)} in the same week of the prior season` : ""}.`,
    `${pct(natLab.latest.v)} of specimens tested by U.S. clinical laboratories were positive for influenza in the week ending ${fmtDate(natLab.latest.date)} (CDC FluView).`,
    `Hospitals reported ${num(usNhsn.at(-1)[1])} new admissions with laboratory-confirmed influenza in the week ending ${fmtDate(usNhsn.at(-1)[0])} (CDC National Healthcare Safety Network).`,
    `The 2024–25 season's cumulative influenza hospitalization rate was 128.3 per 100,000 people through April 30, 2025, the highest of any season since 2010–11; CDC classified it as high severity across all ages (CDC FluSurv-NET).`,
    ...(latestBurden ? [`CDC estimates the ${seasonLabel(latestBurden.season)} season caused ${latestBurden.in_season_minimum ? "at least " : ""}${big(latestBurden.illnesses)} illnesses, ${big(latestBurden.hospitalizations)} hospitalizations, and ${big(latestBurden.deaths)} deaths${latestBurden.status !== "final" ? " (preliminary" + (latestBurden.asof ? `, as of ${latestBurden.asof}` : "") + ")" : ""} (CDC Disease Burden of Flu).`] : []),
    ...(pMap["2024-25"] ? [`${pMap["2024-25"].deaths} children died of flu-associated causes in the 2024–25 season, the highest for any non-pandemic season since reporting began in 2004 (CDC).`] : []),
    `Flu vaccination coverage in the ${seasonLabel(lastCov)} season was ${pct(usCov[lastCov]?.adult, 1)} among adults and ${pct(usCov[lastCov]?.child, 1)} among children 6 months to 17 years (CDC FluVaxView).`,
    ...(veMap["2025-26"] ? [`CDC's preliminary estimate of 2025–26 vaccine effectiveness against medically attended flu is ${veMap["2025-26"].ve}% (95% CI ${veMap["2025-26"].ci}), compared with ${veMap["2024-25"]?.ve}% in 2024–25, when the vaccine was better matched (CDC Past Seasons VE Estimates).`] : []),
  ];
  const mediaBody = `${pageHead({
    eyebrow: "For reporters, researchers, and editors",
    title: "Press and data desk",
    lede: "Current numbers with their dates and sources, ready to quote. Every figure on this page is regenerated from CDC data each week, so check the date stamp before you publish.",
  })}
<section class="section">${statStrip}<p class="chart-note" style="margin-top:8px">${esc(SITE.weekLabel)}. Retrieved from CDC ${fmtDate(meta.built)}.</p></section>
<section class="section col">
  <div class="section-head"><h2>Citation-ready facts</h2><p class="muted">Each sentence names its source. Copy the whole list or a single line.</p></div>
  <ol id="facts" class="prose" style="padding-left:1.2em">${facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ol>
  <div class="btn-row" style="margin-top:14px"><button class="btn btn-ghost" type="button" data-copy="facts">Copy</button></div>
</section>
<section class="section">
  <div class="section-head"><h2>Download the data</h2><p class="muted">Plain CSV, regenerated weekly. Free to reuse with attribution to CDC as the original source.</p></div>
  <div class="task-list">
    <a class="task" href="data/national-weekly.csv"><h3>National weekly series</h3><p>%ILI, lab percent positive, and hospital admissions for every week since October 2010.</p><span class="go mono">national-weekly.csv</span></a>
    <a class="task" href="data/state-weekly-latest.csv"><h3>States, this week</h3><p>Activity level, %ILI, percent positive, and admissions for all 56 jurisdictions.</p><span class="go mono">state-weekly-latest.csv</span></a>
    <a class="task" href="data/season-scorecard.csv"><h3>Season scorecard</h3><p>Peak, hospitalization rate, burden, child deaths, effectiveness, and coverage by season.</p><span class="go mono">season-scorecard.csv</span></a>
  </div>
</section>
<section class="section grid-2">
  <div class="prose col">
    <h2 style="margin-top:0">What reporters ask, and where to look</h2>
    <ul>
      <li><b>Is flu season here?</b> <a href="activity.html">This week</a>: national %ILI above CDC's baseline and lab percent positive above roughly 5% mark the season.</li>
      <li><b>Is this a bad season?</b> <a href="seasons.html">Seasons compared</a>: the FluSurv-NET hospitalization rate is the cleanest severity measure across years.</li>
      <li><b>How well does the shot work this year?</b> <a href="vaccines.html#effectiveness">Vaccine effectiveness</a>, with interim and past-season estimates.</li>
      <li><b>Where is flu rising?</b> <a href="states.html">State pages</a>, each with a 15-season history.</li>
      <li><b>Who should get Tamiflu or Xofluza?</b> <a href="treatment.html">Treatment</a>, written to CDC's March 2026 clinician summary.</li>
      <li><b>Bird flu?</b> <a href="bird-flu.html">H5N1 tracker</a> with CDC's latest human case count.</li>
      <li><b>Who sets vaccine recommendations now?</b> <a href="vaccines.html#policy">The 2025–26 policy changes</a>, dated and sourced.</li>
    </ul>
  </div>
  <div class="panel" style="display:grid;gap:12px">
    <h3>How to cite</h3>
    <p class="small">Attribute figures to their original source, for example "according to CDC FluView data." When you used this page to find them: "compiled by FluHub from CDC data, week ending ${fmtDate(weekEnd)}."</p>
    <h3>Methodology</h3>
    <p class="small">Definitions, data lags, and how each measure is calculated are on <a href="methods.html">Sources and methods</a>.</p>
    <h3>Physician interviews</h3>
    <p class="small">${esc(SITE.editor)}, ${esc(SITE.editorCred)}, is available for comment on flu treatment, testing, and telehealth. <span class="mono">${esc(SITE.email)}</span></p>
  </div>
</section>`;
  await emit("media.html", page({
    path: "media.html", active: "media.html",
    title: "Flu press and data desk",
    description: `Citation-ready U.S. flu statistics for the week ending ${fmtDate(weekEnd)}, with downloadable CSVs of weekly national and state data and a season-by-season scorecard.`,
    body: mediaBody,
    jsonld: [datasetLD("FluHub weekly influenza CSV downloads", "National weekly series since 2010, latest state indicators, and season scorecard.", "2010-10-09/" + weekEnd, true)],
  }));

  function datasetLD(name, description, temporal, downloads) {
    const d = {
      "@context": "https://schema.org", "@type": "Dataset", name, description,
      temporalCoverage: temporal, spatialCoverage: { "@type": "Place", name: "United States" },
      creator: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
      isBasedOn: ["https://www.cdc.gov/fluview/", "https://data.cdc.gov/d/ua7e-t2fy", "https://data.cdc.gov/d/vh55-3he6"],
      license: "https://www.usa.gov/government-copyright", dateModified: meta.built,
    };
    if (downloads) d.distribution = ["national-weekly", "state-weekly-latest", "season-scorecard"].map((f) => ({ "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: `${SITE.baseUrl}data/${f}.csv` }));
    return d;
  }
}
