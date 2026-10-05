import { page, esc, icon } from "../lib/layout.mjs";
import { tileMap, ladder, LEVELS } from "../lib/tilemap.mjs";
import { iliSummary, fmtDate, seasonLabel } from "../lib/derive.mjs";
import { epiweekEndISO, seasonOf, seasonWeekIndex } from "../lib/mmwr.mjs";
import { overlayChart } from "./data-pages.mjs";
import { ctaBox } from "./clinical-pages.mjs";
import { SITE } from "../../content/site.mjs";

export default async function ({ data, emit }) {
  const { ilinet, labs, nhsn, activity, jur, epi } = data;
  const nat = iliSummary(ilinet.series.nat);
  const lab = iliSummary(labs.series.nat.map((r) => [r[0], r[1]]));
  const season = seasonOf(ilinet.latest);
  const baseline = epi.baseline?.[season] ?? null;
  const us = nhsn.series.USA;
  const rising = lab.latest.v > (lab.prior?.v ?? 0) + 0.2;
  const above = baseline != null && nat.latest.v >= baseline;
  const offSeason = seasonWeekIndex(ilinet.latest) >= 33;

  // One-line, data-driven answer to the page's question.
  let answer, detail;
  if (above || lab.latest.v >= 10) {
    answer = "Yes. Flu season is under way.";
    detail = `Outpatient visits for flu-like illness are at ${nat.latest.v.toFixed(1)}%${baseline ? `, above CDC's ${baseline}% baseline` : ""}, and ${lab.latest.v.toFixed(1)}% of lab tests are positive for influenza.`;
  } else if (lab.latest.v >= 3 && rising) {
    answer = "A little, and it is starting to rise.";
    detail = `${lab.latest.v.toFixed(1)}% of flu tests came back positive in the week ending ${fmtDate(lab.latest.date)}, up from ${lab.prior.v.toFixed(1)}% the week before. Outpatient flu-like illness is ${nat.latest.v.toFixed(1)}%, still below the level that marks the season${baseline ? ` (${baseline}%)` : ""}.`;
  } else {
    answer = "Not much right now.";
    detail = `${lab.latest.v.toFixed(1)}% of flu tests were positive and ${nat.latest.v.toFixed(1)}% of outpatient visits were for flu-like illness in the week ending ${fmtDate(lab.latest.date)}.`;
  }
  const levels = activity.levels;
  const states = jur.filter((j) => !j.territory);
  const counts = LEVELS.map((l) => states.filter((s) => levels[s.activityName] === l).length);

  const tasks = [
    ["symptoms.html", "I feel sick", "A five-question check: how soon to get care, and whether an antiviral could help."],
    ["treatment.html", "Treatment", "Tamiflu, Xofluza, and the other antivirals: who should get one and how soon."],
    ["vaccines.html", "2026–27 vaccines", "Who should get which vaccine, how well they work, and what changed in federal policy."],
    ["find-a-flu-shot.html", "Find a flu shot", "Pharmacies, clinics, and health centers near your ZIP code."],
    ["states.html", "Flu in my state", "Your state's flu curve against 15 past seasons, hospitalizations, and vaccination rates."],
    ["seasons.html", "Seasons compared", "Every season since 2010 side by side: severity, deaths, and vaccine effectiveness."],
    ["bird-flu.html", "Bird flu (H5N1)", "CDC's human case count and what the risk is for everyone else."],
    ["media.html", "Press and data", "Citation-ready numbers with dates and sources, plus CSV downloads."],
  ];

  const body = `<section style="display:grid;gap:28px;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);align-items:center" class="hero">
  <div style="display:grid;gap:16px">
    <p class="eyebrow">${esc(SITE.weekLabel)} · ${seasonLabel(season)} season</p>
    <h1>Is flu going around?</h1>
    <p style="font:500 clamp(1.4rem,1.1rem + 1vw,1.85rem)/1.25 var(--f-display);color:var(--accent)">${answer}</p>
    <p class="lede">${detail}</p>
    ${offSeason ? `<p class="small muted">The 2026–27 season officially begins with the week ending October 10. CDC expects a moderate season, with hospitalizations most likely to peak between December and February.</p>` : ""}
    <div class="btn-row"><a class="btn btn-primary" href="symptoms.html">Check symptoms</a><a class="btn btn-ghost" href="activity.html">See this week's data</a></div>
  </div>
  <div>${overlayChart({ id: "home-ili", summary: nat, title: "Outpatient visits for flu-like illness, by flu season", sub: "United States. This season and last, against the typical range since 2010.", baseline: baseline ? { value: baseline, label: `Baseline ${baseline}%` } : null })}</div>
</section>
<section class="section">
  <div class="strip">
    <div class="stat"><span class="stat-label">Flu-like illness, share of outpatient visits</span><span class="stat-value">${nat.latest.v.toFixed(1)}%</span><span class="stat-ctx">prior week ${nat.prior.v.toFixed(1)}%</span></div>
    <div class="stat"><span class="stat-label">Lab tests positive for influenza</span><span class="stat-value">${lab.latest.v.toFixed(1)}%</span><span class="stat-ctx">prior week ${lab.prior.v.toFixed(1)}%</span></div>
    <div class="stat"><span class="stat-label">New flu hospital admissions</span><span class="stat-value">${us.at(-1)[1].toLocaleString("en-US")}</span><span class="stat-ctx">prior week ${us.at(-2)[1].toLocaleString("en-US")}</span></div>
    <div class="stat"><span class="stat-label">States at Moderate or higher</span><span class="stat-value">${counts[2] + counts[3] + counts[4]}<small>of 51</small></span><span class="stat-ctx">respiratory illness activity</span></div>
  </div>
</section>
<section class="section">
  <div class="section-head"><h2>What do you need?</h2></div>
  <div class="task-list">${tasks.map(([h, t, d]) => `<a class="task" href="${h}"><h3>${t}</h3><p>${d}</p></a>`).join("")}</div>
</section>
<section class="section grid-2" style="grid-template-columns:minmax(0,1.5fr) minmax(0,1fr)">
  <div><div class="section-head"><h2>Respiratory illness by state</h2><p class="muted">CDC activity level, week ending ${fmtDate(activity.week)}. Select your state.</p></div>${tileMap(jur, levels, (j) => `state/${j.slug}.html`)}<div style="margin-top:12px">${ladder()}</div></div>
  <div style="display:grid;gap:16px;align-content:start">
    <div class="callout crit"><p class="callout-title">${icon.alert}When flu is an emergency</p><p>Trouble breathing, chest pain or pressure, confusion, a seizure, not urinating, or a fever or cough that improves then returns worse. In children, also fast breathing, bluish lips, dehydration, or not waking or interacting. <a href="warning-signs.html">All warning signs</a></p></div>
    ${ctaBox()}
  </div>
</section>
<section class="section col small muted"><p>FluHub turns CDC's weekly flu surveillance into plain language, with clinical content written to CDC, FDA, and IDSA guidance and reviewed by ${esc(SITE.editor)}. <a href="methods.html">How FluHub works</a>.</p></section>
<style>@media (max-width: 860px){ .hero{ grid-template-columns: 1fr !important; } }</style>`;

  await emit("index.html", page({
    path: "index.html", active: "",
    title: "FluHub: U.S. flu activity, treatment, and vaccines",
    description: `Is flu going around? ${answer} Weekly U.S. flu data from CDC in plain language, plus treatment, vaccine, and symptom guidance reviewed by a physician.`,
    body,
    jsonld: [{ "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.baseUrl, publisher: { "@type": "MedicalOrganization", name: SITE.cta.org, url: "https://teledirectmd.com" } }],
  }));
}
