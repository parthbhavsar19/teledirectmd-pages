// Find a flu shot: live finders first, then a distance-sorted directory built from the archived
// Vaccines.gov provider list. Shards: data/providers/<ST>.json, data/zip/<digit>.json, data/providers/index.json.
import { readdir, readFile, writeFile, mkdir, cp } from "node:fs/promises";
import { page, pageHead, sourceList, esc, icon } from "../lib/layout.mjs";
import { refSet } from "../../content/refs.mjs";
import { fmtDate } from "../lib/derive.mjs";

export default async function ({ data, emit, DIST, ROOT }) {
  const src = ROOT + "data/cache/providers/";
  const byState = {};
  for (const f of await readdir(src)) for (const p of JSON.parse(await readFile(src + f, "utf8"))) (byState[p.s] ||= []).push(p);
  await mkdir(DIST + "data/providers", { recursive: true });
  const index = {};
  for (const [st, rows] of Object.entries(byState)) {
    if (!/^[A-Z]{2}$/.test(st)) continue;
    rows.sort((a, b) => a.c.localeCompare(b.c) || a.n.localeCompare(b.n));
    const ys = rows.map((r) => r.y), xs = rows.map((r) => r.x);
    index[st] = { n: rows.length, b: [Math.min(...ys), Math.min(...xs), Math.max(...ys), Math.max(...xs)], c: [ys.reduce((a, b) => a + b) / ys.length, xs.reduce((a, b) => a + b) / xs.length] };
    await writeFile(`${DIST}data/providers/${st}.json`, JSON.stringify(rows));
  }
  await writeFile(DIST + "data/providers/index.json", JSON.stringify(index));
  await cp(ROOT + "data/cache/zip", DIST + "data/zip", { recursive: true });

  const meta = data.meta.sources.providers;
  const { list, c } = refSet(["vaccinesGovDataset", "cdcKeyFacts", "hrsa", "fdaFluMistHome", "cdcIccs", "healthcareGov", "medicareFlu", "todayVaxGov", "azFluMist2627", "flumistFaq", "drugTopicsPharmImm"]);
  // Neutral, alphabetical links to retail pharmacy flu shot schedulers. FluHub has no relationship with these companies.
  const PHARMACIES = [
    ["CVS", "https://www.cvs.com/immunizations/flu"],
    ["H-E-B", "https://www.heb.com/pharmacy/vaccines"],
    ["Kroger family of pharmacies", "https://www.kroger.com/stores/flu-shot"],
    ["Publix", "https://www.publix.com/flushot"],
    ["Walgreens", "https://www.walgreens.com/topic/promotion/flu-shot.jsp"],
    ["Walmart", "https://www.walmart.com/flu"],
  ];
  const opts = data.jur.filter((j) => index[j.abbr]).map((j) => `<option value="${j.abbr}">${esc(j.name)}</option>`).join("");

  const body = `${pageHead({
    eyebrow: "Prevention",
    title: "Find a flu shot",
    lede: "Flu shots are available at pharmacies, doctors' offices, clinics, health departments, and community health centers. Most insurance covers them with no copay.",
  })}
<div class="callout warn" id="vaccines-gov-notice" style="margin-top:24px"><p class="callout-title">${icon.alert}Notice, updated October 5, 2026: the federal vaccines.gov ZIP search is not working</p><p>The search tool on vaccines.gov has returned an error for ZIP code searches since at least December 2025, and HHS has not said when it will be fixed (reported October 1, 2026).${c("todayVaxGov")} FluHub's directory below does not use that live tool; it is built from an archived copy of the same provider list. For current hours and stock, use the <a href="#other-ways">other ways to find a shot</a> below.</p></div>
<section class="section">
  <div class="section-head"><h2>Book this week</h2><p class="muted">These places publish live appointment availability.</p></div>
  <div class="task-list">
    <div class="task"><h3>Your doctor or clinic</h3><p>The best option if you also want other vaccines or have health conditions to discuss. Call or use their patient portal.</p></div>
    <a class="task" href="#other-ways"><h3>Pharmacies</h3><p>Most chain and independent pharmacies take walk-ins or same-day online bookings through their own websites and apps. The youngest age a pharmacist can vaccinate varies by state.${c("drugTopicsPharmImm")}</p><span class="go">Pharmacy schedulers</span></a>
    <a class="task" href="https://findahealthcenter.hrsa.gov/" target="_blank" rel="noopener"><h3>Community health centers</h3><p>Low or no cost, whether or not you have insurance. Search HRSA's directory by address.${c("hrsa")}</p><span class="go">findahealthcenter.hrsa.gov</span></a>
    <div class="task"><h3>Local health department</h3><p>Many run free or low-cost flu clinics in the fall, and they administer the Vaccines for Children program for eligible kids.${c("cdcIccs")}</p></div>
    <a class="task" href="vaccines.html#flumist-home"><h3>FluMist at home</h3><p>The nasal spray vaccine can be ordered online and given at home for ages 2 to 49 who are eligible for a live vaccine.${c("fdaFluMistHome")}</p><span class="go">How it works</span></a>
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Locations near you</h2>
  <div class="callout warn"><p class="callout-title">${icon.alert}This is a directory, not live stock.</p><p>These ${meta.count.toLocaleString("en-US")} locations reported offering flu vaccine to Vaccines.gov. CDC stopped updating that data after July 2024 (last update ${esc(meta.snapshot)}), so hours and services may have changed. Call or check the location's own website before you go.${c("vaccinesGovDataset")}</p></div></div>
  <form class="loc-form" id="loc-form" onsubmit="return false">
    <div class="field"><label for="zip">ZIP code</label><input id="zip" name="zip" inputmode="numeric" autocomplete="postal-code" maxlength="5" pattern="[0-9]{5}" placeholder="30303"></div>
    <div class="field"><label for="radius">Within</label><select id="radius" name="radius"><option value="5">5 miles</option><option value="10" selected>10 miles</option><option value="25">25 miles</option><option value="50">50 miles</option></select></div>
    <div class="field"><label for="filter">Offering</label><select id="filter" name="filter"><option value="0">Any flu vaccine</option><option value="4">65+ high-dose or adjuvanted</option><option value="8">Egg-free</option><option value="2">Nasal spray</option></select></div>
    <button class="btn btn-primary" id="loc-go" type="submit">Search</button>
    <button class="btn btn-ghost" id="loc-geo" type="button">Use my location</button>
    <span class="field" style="margin-left:auto"><label for="state">Or browse a state</label><select id="state" name="state"><option value="">Choose a state</option>${opts}</select></span>
  </form>
  <p class="small muted" id="loc-status" aria-live="polite" style="margin-top:14px">Loading example results near ZIP 30303 (Atlanta). Enter your ZIP code to search near you.</p>
  <ol class="loc-list" id="loc-list" style="margin-top:8px"></ol>
  <noscript><p class="muted">The location search needs JavaScript. Use the options above, or call your pharmacy.</p></noscript>
</section>

<section class="section" id="other-ways">
  <div class="section-head"><h2>Other ways to find a shot</h2><p class="muted">Use these while the federal search is down. Each one shows its own current appointments.</p></div>
  <div class="grid-2">
    <div class="prose col">
      <h3 style="margin-top:0">Pharmacy schedulers</h3>
      <p>Retail pharmacies book flu shots through their own sites and apps. Listed alphabetically; FluHub has no relationship with these companies, and independent pharmacies are just as good an option.</p>
      <ul class="vx-links">${PHARMACIES.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(n)}</a></li>`).join("")}</ul>
      <p class="small muted">Bringing a child? Call first: state law sets the youngest age a pharmacist can vaccinate. As of January 2025, only 19 states plus Washington, DC allowed pharmacists to give all recommended vaccines to children 3 and older.${c("drugTopicsPharmImm")}</p>
    </div>
    <div class="prose col">
      <h3 style="margin-top:0">Your own clinician</h3>
      <p>Your doctor's office or patient portal can often book a shot with your next visit, and it is the best place to ask which vaccine fits you.</p>
      <h3>Local health department</h3>
      <p>Many run free or low-cost fall clinics, and they give Vaccines for Children vaccine to eligible kids.${c("cdcIccs")} Search the name of your county or city with "health department flu clinic."</p>
      <h3>Community health centers</h3>
      <p>Low or no cost, with or without insurance. <a href="https://findahealthcenter.hrsa.gov/" target="_blank" rel="noopener">Search HRSA's directory</a>.${c("hrsa")}</p>
      <h3>FluMist Home</h3>
      <p>For 2026-27 the nasal spray ships to the 48 contiguous states for eligible people ages 2 to 49: adults 18 to 49 can give it to themselves, and a parent or caregiver gives it to children 2 to 17.${c("azFluMist2627")} In some states your own doctor must approve the order first, and there is a shipping fee.${c("flumistFaq")} <a href="https://www.flumist.com/" target="_blank" rel="noopener">flumist.com</a>, or <a href="vaccines.html#flumist-home">who should not use it</a>.</p>
    </div>
  </div>
</section>

<section class="section prose col">
  <h2>Before you go</h2>
  <ul>
    <li>Bring your insurance card. Marketplace plans, most private plans, and Medicare Part B cover the flu vaccine with no copay at an in-network or participating provider.${c("healthcareGov", "medicareFlu")}</li>
    <li>If you are 65 or older, ask for a high-dose, adjuvanted, or recombinant vaccine, but take whatever is available rather than leave without one.${c("cdcIccs")}</li>
    <li>Ideally get vaccinated by the end of October. Later in the season is still worthwhile.${c("cdcKeyFacts")}</li>
  </ul>
  <p>Questions about safety, side effects, or egg allergy: <a href="flu-shot-myths.html">flu shot facts</a>. For children: <a href="child-flu-shot.html">is my child's flu shot still recommended and free?</a></p>
</section>
${sourceList(list)}`;
  await emit("find-a-flu-shot.html", page({
    path: "find-a-flu-shot.html", active: "find-a-flu-shot.html",
    title: "Find a flu shot near you",
    description: "Where to get a flu shot: pharmacies, clinics, community health centers, health departments, and FluMist at home, plus a directory of locations sorted by distance from your ZIP code.",
    body, scripts: ["locator.js"],
  }));
}
