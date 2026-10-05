// Flu near you: ZIP -> county FIPS (data/zipcounty/<NN>.json) -> state shard (data/local/<ST>.json) -> county card.
// Progressive enhancement: the page's state table works without this file.
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const out = $("#near-result"), status = $("#near-status"), form = $("#near-form");
  if (!out || !form) return;
  const FIPS = JSON.parse(($("#near-fips") || {}).textContent || "{}");
  const cache = {};
  const get = (u) => (cache[u] ||= fetch(u).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); }));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fd = (iso, y) => { if (!iso) return ""; const d = new Date(iso.slice(0, 10) + "T00:00:00Z"); return `${MON[d.getUTCMonth()]} ${d.getUTCDate()}${y ? ", " + d.getUTCFullYear() : ""}`; };
  const LEVELS = ["Very Low", "Low", "Moderate", "High", "Very High"];
  const chip = (l) => { const i = LEVELS.indexOf(l) + 1; return `<span class="level"><i class="lv-${i}"></i>${esc(i ? l : "No data")}</span>`; };
  const TREND = { Increasing: "Rising", Decreasing: "Falling", "No Change": "Steady", "Limited Data": "Too few visits to tell", Sparse: "Too few visits to tell" };
  const GROWTH = { Growing: "Growing", "Likely Growing": "Likely growing", "Not Changing": "Not changing", "Likely Declining": "Likely declining", Declining: "Declining", "Not Estimated": "Not estimated" };
  const prob = (p) => (p == null ? "–" : p >= 0.995 ? "Over 99%" : p <= 0.005 ? "Under 1%" : Math.round(p * 100) + "%");
  const pct = (v) => (v == null ? "–" : Number(v).toFixed(2) + "%");

  // Keep in sync with whatItMeans() in scripts/lib/local.mjs.
  function meaning(s, where) {
    where = where || "in your area";
    const rising = s.edTrend === "Increasing" || s.growthCat === "Growing" || s.growthCat === "Likely Growing";
    const falling = !rising && (s.edTrend === "Decreasing" || s.growthCat === "Declining" || s.growthCat === "Likely Declining");
    const high = ["High", "Very High"].indexOf(s.wwLevel) >= 0 || ["Moderate", "High", "Very High"].indexOf(s.admissionLevel) >= 0;
    const known = s.edTrend || s.growthCat || s.wwLevel || s.admissionLevel;
    const early = 'If you are at <a href="high-risk.html">higher risk</a> and get sick, contact a clinician early: <a href="too-late-for-tamiflu.html">antivirals work best started soon</a>.';
    if (!known) return { tone: "none", text: "There is not enough recent local data to describe flu " + where + ". " + early };
    if (rising && high) return { tone: "high", text: "Flu is active and rising " + where + ". " + early + " If you have not had a flu shot this season, it is not too late." };
    if (rising) return { tone: "rising", text: "Flu is rising " + where + ". " + early + " A flu shot now still helps; protection builds over about two weeks." };
    if (high) return { tone: "high", text: "Flu is active " + where + ". " + early };
    if (falling) return { tone: "easing", text: "Flu signals are easing " + where + ", but flu is still going around. " + early };
    if (!s.edTrend && !s.growthCat) return { tone: "none", text: "There is not enough recent data to tell whether flu is rising or falling " + where + ". " + early };
    return { tone: "low", text: "Flu activity looks low and steady " + where + ". This is a good time to get a flu shot if you have not had one this season." };
  }

  function card(zip, fips, shard) {
    const c = shard.counties[fips] || {};
    const s = shard.state || {};
    const name = c.county || "Your county";
    const notes = [];

    // Emergency department visits
    let ed = c.ed_pct, edTrend = c.ed_trend || null, edWeek = c.ed_week, edScope = "county";
    if (ed == null) {
      if (s.ed_pct != null || s.ed_trend) {
        ed = s.ed_pct; edWeek = s.ed_week; edScope = "state";
        if (!edTrend) edTrend = s.ed_trend || null;
        notes.push(shard.county_ed ? "CDC has no emergency department data for this county; showing the state level instead."
          : `CDC publishes emergency department data for ${esc(shard.name)} only statewide; showing the state level instead.`);
      } else { edScope = "none"; edTrend = edTrend || null; }
    }
    // Wastewater
    let wwLevel = c.ww_level, wwCtx = "";
    if (wwLevel) wwCtx = c.ww_sites > 1 ? `highest of ${c.ww_sites} sites serving this county` : "1 site serving this county";
    else if (s.ww) { wwLevel = s.ww.level; wwCtx = `typical level across ${s.ww.sites} site${s.ww.sites === 1 ? "" : "s"} in ${esc(shard.name)}`; notes.push(`No wastewater sites report for this county; showing the typical level for ${esc(shard.name)}.`); }
    const wwWeek = c.ww_week || (s.ww && s.ww.week);
    // Growth
    let gp = c.growth_prob, gc = c.growth_cat, gd = c.growth_date, gScope = "area";
    if (gp == null) {
      if (s.growth_prob != null) { gp = s.growth_prob; gc = s.growth_cat; gd = s.growth_date; gScope = "state"; notes.push("CDC does not estimate growth for this county's area; showing the state estimate."); }
      else gScope = "none";
    }
    const local = Boolean(c.ed_trend) || gScope === "area";
    const m = meaning({ edTrend: edTrend, growthCat: gScope === "none" ? null : gc, wwLevel: wwLevel, admissionLevel: s.admission_level }, local ? "in your area" : "in " + esc(shard.name));

    const tile = (label, v, ctx) => `<div class="near-tile"><span class="stat-label">${label}</span><span class="near-v">${v}</span><span class="stat-ctx">${ctx}</span></div>`;
    const tiles = [
      tile("Emergency department visits for flu", edScope === "none" ? "–" : pct(ed),
        edScope === "none" ? "No emergency department data for this area" : `${edScope === "state" ? "statewide, " : "of visits, "}week ending ${fd(edWeek)}${edTrend ? `<span class="delta">${esc(TREND[edTrend] || edTrend)}</span>` : ""}`),
      tile("Flu A in wastewater", wwLevel ? chip(wwLevel) : "–", wwLevel ? `${wwCtx}; week ending ${fd(wwWeek)}` : "No wastewater sites report in this area"),
      tile("Chance flu infections are growing", gScope === "none" ? "–" : prob(gp),
        gScope === "none" ? (c.growth_cat === "Not Estimated" ? "Not estimated for this area" : "No estimate for this area") : `${esc(GROWTH[gc] || gc || "")}${gScope === "state" ? ", statewide" : ""}; CDC estimate for ${fd(gd)}`),
      tile(`Hospital admission level, ${esc(shard.name)}`, s.admission_level ? chip(s.admission_level) : "–",
        s.admission_rate != null ? `${s.admission_rate} per 100,000; week ending ${fd(s.admission_week)}` : "Not reported"),
    ].join("");

    let fc = "";
    if (shard.forecast && shard.forecast.hosp && shard.forecast.hosp.length) {
      const h = shard.forecast.hosp[0];
      fc = `<p class="small">CDC FluSight forecast for ${esc(shard.name)}: about ${h[3].toLocaleString()} flu hospital admissions in the week ending ${fd(h[1])} (likely range ${h[2].toLocaleString()} to ${h[4].toLocaleString()}). Forecasts are uncertain. <a href="state/${esc(shard.slug)}.html#flu-near-you">See all 3 weeks</a>.</p>`;
    } else {
      fc = `<p class="small muted">${esc(shard.forecast_note || "Forecasts resume when CDC's FluSight challenge posts its first ensemble of the season.")}</p>`;
    }

    return `<article class="near-card" aria-labelledby="near-h">
<p class="eyebrow">ZIP ${esc(zip)}</p>
<h2 id="near-h">${esc(name)}, ${esc(shard.name)}</h2>
${c.hsa ? `<p class="small muted">Health service area: ${esc(c.hsa)}</p>` : ""}
<p class="near-means" data-tone="${m.tone}"><b>What this means for you:</b> ${m.text}</p>
<div class="near-tiles">${tiles}</div>
${notes.length ? `<ul class="near-notes small">${notes.map((n) => `<li>${n}</li>`).join("")}</ul>` : ""}
${fc}
<p class="small"><a href="state/${esc(shard.slug)}.html">Full flu history for ${esc(shard.name)}</a> · <a href="find-a-flu-shot.html">Find a flu shot</a> · <a href="symptoms.html">Feeling sick? Symptom check</a></p>
<p class="small muted">These are community signals, not a measure of your own risk. Trouble breathing, chest pain, or confusion needs <a href="warning-signs.html">emergency care now</a>.</p>
</article>`;
  }

  async function lookup(zip) {
    if (!/^\d{5}$/.test(zip)) { status.textContent = "Enter a 5-digit ZIP code."; return; }
    status.textContent = "Looking up ZIP " + zip + "…";
    try {
      let fips;
      try { fips = (await get(`data/zipcounty/${zip.slice(0, 2)}.json`))[zip]; } catch (e) { fips = null; }
      if (!fips) { status.textContent = `ZIP ${zip} was not found. Try a nearby ZIP code, or find your state in the table below.`; out.innerHTML = ""; return; }
      const st = FIPS[fips.slice(0, 2)];
      if (!st) { status.textContent = `FluHub does not have flu data for ZIP ${zip}.`; out.innerHTML = ""; return; }
      const shard = await get(`data/local/${st}.json`);
      out.innerHTML = card(zip, fips, shard);
      status.textContent = `Showing ${shard.counties[fips] && shard.counties[fips].county ? shard.counties[fips].county : "your county"}, ${shard.name}, for ZIP ${zip}.`;
      try { history.replaceState(null, "", "?zip=" + zip); } catch (e) {}
    } catch (e) {
      status.textContent = "Local data could not be loaded. Check your connection and try again.";
    }
  }

  form.addEventListener("submit", (e) => { e.preventDefault(); lookup($("#zip").value.trim()); });
  const q = new URLSearchParams(location.search).get("zip");
  if (q) { $("#zip").value = q.replace(/\D/g, "").slice(0, 5); lookup($("#zip").value); }
})();
