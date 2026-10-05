import { page, pageHead, clinicalByline, sourceList, icon, esc } from "../lib/layout.mjs";
import { barChart } from "../lib/charts.mjs";
import { refSet } from "../../content/refs.mjs";
import { CHECKED } from "./clinical-pages.mjs";
import { seasonLabel } from "../lib/derive.mjs";

export default async function ({ data, emit }) {
  const { list, c } = refSet(["cdcIccs", "mmwrAcip2025", "fdaComposition", "cdcSeason2627", "cdcKeyFacts", "aapFlu2627", "aafp2026", "acog2026", "mflusiva", "nycLetter", "fdaFluMistHome", "mmwrVe2026", "cdcPastVe", "cdcPrevented2425", "cdcCoverage2425", "cdcVaxSafety", "cdcCoadmin", "healthcareGov", "medicareFlu", "ahcjInjunction", "aphaInjunction", "statThimerosal", "statAppeal", "wcha"]);
  const ve = data.epi.ve.filter((v) => v.season >= "2010-11");
  const veChart = barChart({
    id: "ve-bars", title: "Vaccine effectiveness by season", sub: "Percent reduction in the risk of a doctor's visit for flu among vaccinated people, all ages, U.S. Flu VE Network.",
    yFmt: (v) => `${v}%`, yUnit: "%",
    bars: ve.map((v) => ({ label: `${seasonLabel(v.season)}${v.status === "preliminary" ? " (preliminary)" : ""}`, short: v.season.slice(2, 4) + "–" + v.season.slice(5), value: v.ve, showValue: true, cls: v.season === "2025-26" ? "s1" : "past", note: v.ci ? `95% CI ${v.ci}` : "Not estimated: very little flu circulated." })),
  });
  const cov = data.coverage["United States"]?.["2024-25"] || {};

  const body = `${pageHead({
    eyebrow: "Prevention · 2026–27 season",
    title: "Flu vaccines for 2026–27",
    lede: "Everyone 6 months and older should get a flu vaccine this season. This year's vaccines were updated for the drifted H3N2 strain that drove much of last winter's illness. Here is which vaccine fits whom, how well they work, and what changed in federal vaccine policy.",
    byline: clinicalByline(CHECKED, "CDC 2026–27 clinical considerations; AAP, AAFP, ACOG 2026–27"),
  })}
<section class="section"><div class="strip">
  <div class="stat"><span class="stat-label">Who</span><span class="stat-value" style="font-size:1.5rem">6 months and older</span><span class="stat-ctx">CDC, AAP, AAFP, and ACOG agree${c("cdcIccs", "aapFlu2627", "aafp2026", "acog2026")}</span></div>
  <div class="stat"><span class="stat-label">When</span><span class="stat-value" style="font-size:1.5rem">September–October</span><span class="stat-ctx">ideally by the end of October; later is still worthwhile${c("cdcKeyFacts")}</span></div>
  <div class="stat"><span class="stat-label">What changed</span><span class="stat-value" style="font-size:1.5rem">All 3 strains updated</span><span class="stat-ctx">including H3N2 subclade K; every vaccine is trivalent${c("cdcSeason2627")}</span></div>
  <div class="stat"><span class="stat-label">Protection starts</span><span class="stat-value" style="font-size:1.5rem">About 2 weeks</span><span class="stat-ctx">after the shot${c("cdcKeyFacts")}</span></div>
</div></section>

<section class="section">
  <div class="section-head"><h2>Which vaccine is right for you</h2><p class="muted">Any age-appropriate vaccine is better than waiting for a specific one.</p></div>
  <div class="table-wrap"><table><thead><tr><th>Who</th><th>Recommendation</th></tr></thead><tbody>
  <tr><td><b>Children 6 months to 8 years</b></td><td>Any age-appropriate vaccine. Children who have not had at least 2 flu vaccine doses before July 1, 2026 need <b>2 doses</b> this season, 4 weeks apart; start early so the second dose is in by the end of October.${c("cdcIccs")} The two earlier doses do not need to have been in the same or consecutive seasons.${c("nycLetter")} AAP does not prefer one product over another.${c("aapFlu2627")}</td></tr>
  <tr><td><b>Ages 9 to 49</b></td><td>Any age-appropriate shot, or the FluMist nasal spray (ages 2 to 49) if there is no reason to avoid a live vaccine.${c("cdcIccs")}</td></tr>
  <tr><td><b>Ages 50 to 64</b></td><td>Any age-appropriate vaccine. The new mRNA vaccine mFLUSIVA is approved for this group as of August 2026.${c("mflusiva")}</td></tr>
  <tr><td><b>65 and older</b></td><td>Preferably a <b>high-dose (Fluzone High-Dose), adjuvanted (Fluad), or recombinant (Flublok)</b> vaccine.${c("cdcIccs")} AAFP and New York City's health department also list mFLUSIVA among preferred options.${c("aafp2026", "nycLetter")} If none is available, get any age-appropriate vaccine rather than wait.${c("aafp2026")}</td></tr>
  <tr><td><b>Pregnant</b></td><td>An inactivated or recombinant shot in <b>any trimester</b>. Not the nasal spray, and ACOG does not recommend the mRNA vaccine in pregnancy because data are lacking.${c("cdcIccs", "acog2026")} Vaccination in pregnancy also protects the baby for the first months of life.</td></tr>
  <tr><td><b>Egg allergy</b></td><td>Any vaccine appropriate for age and health. No extra precautions are needed beyond those for any vaccine.${c("cdcIccs")}</td></tr>
  <tr><td><b>Solid organ transplant, ages 18 to 64, on immunosuppressants</b></td><td>High-dose or adjuvanted vaccine are acceptable options, as is a standard vaccine.${c("cdcIccs")}</td></tr>
  </tbody></table></div>
</section>

<section class="section grid-2">
<div class="prose col">
  <h2 style="margin-top:0">This season's vaccines</h2>
  <p>FDA chose the 2026–27 strains on March 12, 2026. All three components were updated, including protection against the H3N2 subclade K virus that spread widely in 2025–26.${c("fdaComposition", "cdcSeason2627")}</p>
  <ul>
    <li><b>Egg-based:</b> A/Missouri/11/2025 (H1N1)pdm09-like; A/Darwin/1454/2025 (H3N2)-like; B/Tokyo/EIS13-175/2025 (B/Victoria)-like.</li>
    <li><b>Cell-based and recombinant:</b> A/Missouri/11/2025 (H1N1)pdm09-like; A/Darwin/1415/2025 (H3N2)-like; B/Pennsylvania/14/2025 (B/Victoria)-like.</li>
  </ul>
  <p>Manufacturers project up to 135 million U.S. doses; 99% contain no thimerosal preservative and 27% are made without eggs.${c("cdcSeason2627")}</p>
  <h3 id="flumist-home">FluMist at home</h3>
  <p>FluMist, the nasal spray vaccine, can be given by yourself (ages 18 to 49) or by a parent or caregiver (ages 2 to 17). You order it online, complete a screening, and it ships to you.${c("fdaFluMistHome")} For 2026–27 the manufacturer reports home delivery in all 48 contiguous states. It is a live, weakened virus and is not for pregnant people, people with weakened immune systems or their close contacts, or children 2 to 4 with recent wheezing.${c("cdcIccs")}</p>
</div>
<div>
  <h3 style="margin-bottom:10px">Vaccines available for 2026–27</h3>
  <div class="table-wrap"><table><thead><tr><th>Vaccine</th><th>Type</th><th>Ages</th></tr></thead><tbody>
  <tr><td>Fluzone</td><td>Standard, egg-based</td><td class="n">6 mo+</td></tr>
  <tr><td>Fluarix</td><td>Standard, egg-based</td><td class="n">6 mo+</td></tr>
  <tr><td>FluLaval</td><td>Standard, egg-based</td><td class="n">6 mo+</td></tr>
  <tr><td>Flucelvax</td><td>Cell-based, egg-free</td><td class="n">6 mo+</td></tr>
  <tr><td>Flublok</td><td>Recombinant, egg-free</td><td class="n">9 yr+</td></tr>
  <tr><td>Fluzone High-Dose</td><td>High-dose</td><td class="n">65+</td></tr>
  <tr><td>Fluad</td><td>Adjuvanted</td><td class="n">65+</td></tr>
  <tr><td>FluMist</td><td>Live, nasal spray</td><td class="n">2–49</td></tr>
  <tr><td>mFLUSIVA <span class="chip">new</span></td><td>mRNA</td><td class="n">50+</td></tr>
  </tbody><caption>Ages from CDC's 2026–27 product table and FDA. Afluria is not being supplied this season. mFLUSIVA's approval for 65+ is accelerated, pending a confirmatory study.${c("cdcIccs", "nycLetter", "mflusiva")}</caption></table></div>
</div>
</section>

<section class="section" id="effectiveness">
  <div class="section-head"><h2>How well flu vaccines work</h2><p class="muted">Effectiveness changes every year with how well the vaccine matches circulating viruses.</p></div>
  <div class="grid-2">
    <div class="prose col">
      <p>Last season the vaccine was a weaker match: subclade K drifted away from the H3N2 strain in the 2025–26 vaccine. CDC's interim estimates put effectiveness at 38–41% against outpatient flu and 41% against hospitalization in children, and 22–34% and 30% in adults.${c("mmwrVe2026")} The preliminary full-season estimate is 36%, compared with 56% in 2024–25.${c("cdcPastVe")}</p>
      <p>Even a partly matched vaccine prevents a large amount of serious illness because flu is so common. In 2024–25, CDC estimates vaccination prevented 10 million illnesses, 5 million medical visits, 180,000 hospitalizations, and 12,000 deaths.${c("cdcPrevented2425")}</p>
      <p>Fewer people are getting vaccinated: in 2024–25 coverage was ${cov.adult ?? "41.9"}% of adults and ${cov.child ?? "50.2"}% of children, the lowest for children in 15 seasons.${c("cdcCoverage2425")} <a href="seasons.html">See coverage by season</a>.</p>
    </div>
    <div class="table-wrap"><table><thead><tr><th>2025–26 interim</th><th class="n">vs. outpatient flu</th><th class="n">vs. hospitalization</th></tr></thead><tbody>
    <tr><td>Children and teens</td><td class="n">38–41%</td><td class="n">41%</td></tr>
    <tr><td>Adults 18+</td><td class="n">22–34%</td><td class="n">30%</td></tr>
    </tbody><caption>MMWR, March 12, 2026. Ranges span CDC's VE networks.${c("mmwrVe2026")}</caption></table></div>
  </div>
  <div style="margin-top:32px">${veChart}</div>
</section>

<section class="section grid-2">
<div class="prose col">
  <h2 style="margin-top:0">Safety and side effects</h2>
  <p><b>A flu shot cannot give you flu.</b> Shots contain killed virus or a single virus protein; the nasal spray uses a weakened virus that cannot cause flu.${c("cdcKeyFacts", "cdcVaxSafety")}</p>
  <p>Common reactions are soreness, redness, or swelling where the shot was given, and sometimes low fever, aches, headache, or tiredness for a day or two. The nasal spray can cause a runny nose or sore throat.${c("cdcVaxSafety")}</p>
  <p>Guillain-Barré syndrome is rare. In seasons when any increased risk was found, it was about 1 to 2 extra cases per million doses.${c("cdcVaxSafety")}</p>
  <p class="small">Full rundown of reactions and when to call a doctor: <a href="https://teledirectmd.com/health-guides/flu-shot-side-effects-guide/">flu shot side effects guide</a>.</p>
  <h3>With COVID-19 and RSV vaccines</h3>
  <p>Flu, COVID-19, and RSV vaccines may be given at the same visit, in different arms or at least an inch apart. Getting RSV and flu vaccines together may cause slightly more arm soreness and short-lived side effects.${c("cdcCoadmin")}</p>
</div>
<div class="prose col">
  <h2 style="margin-top:0">Cost and insurance</h2>
  <ul>
    <li><b>Marketplace and most private plans</b> cover flu vaccine with no copay at an in-network provider.${c("healthcareGov")}</li>
    <li><b>Medicare Part B</b> covers it with nothing to pay when the provider accepts assignment.${c("medicareFlu")}</li>
    <li><b>Children</b> on Medicaid or uninsured can get free vaccine through the Vaccines for Children program.${c("cdcIccs")}</li>
    <li>A March 2026 court order requires insurers to keep covering the vaccines they covered in January 2025.${c("ahcjInjunction")} Coverage of the new mRNA vaccine had not been confirmed when this page was checked.</li>
  </ul>
</div>
</section>

<section class="section prose col" id="policy">
  <h2>Who makes the recommendations right now</h2>
  <p>Federal vaccine policy changed several times in 2025 and 2026. The basic flu recommendation, a yearly vaccine for everyone 6 months and older, is the same across federal and professional sources. These are the dated facts:</p>
  <ul>
    <li><b>June 2025:</b> HHS replaced the members of CDC's vaccine advisory committee (ACIP). The new committee reaffirmed universal flu vaccination and voted to recommend only thimerosal-free single-dose flu vaccines; the HHS secretary adopted the thimerosal vote on July 23, 2025.${c("mmwrAcip2025", "statThimerosal")}</li>
    <li><b>March 16, 2026:</b> a federal court stayed the new ACIP appointments and all of that committee's votes, along with a January 2026 change to the childhood schedule.${c("aphaInjunction")} HHS appealed on April 29, 2026.${c("statAppeal")}</li>
    <li><b>September 1, 2026:</b> citing "legal uncertainties," CDC said the July 2025 flu recommendations remain in effect for 2026–27.${c("cdcIccs")}</li>
    <li><b>August and September 2026:</b> AAP, AAFP, and ACOG issued their own 2026–27 recommendations, all supporting yearly vaccination from 6 months.${c("aapFlu2627", "aafp2026", "acog2026")} Several states, including the West Coast Health Alliance of California, Oregon, Washington, and Hawaii, now base their guidance on these societies.${c("wcha")}</li>
  </ul>
  <p>FluHub follows CDC's 2026–27 clinical considerations and notes where professional societies add to them.</p>
</section>
<section class="section"><div class="task-list">
  <a class="task" href="find-a-flu-shot.html"><h3>Find a flu shot</h3><p>Pharmacies, clinics, and health centers near you.</p><span class="go">Search by ZIP</span></a>
  <a class="task" href="faq.html"><h3>Common questions</h3><p>Timing, side effects, kids, pregnancy, and more.</p><span class="go">Read the FAQ</span></a>
</div></section>
${sourceList(list)}`;
  await emit("vaccines.html", page({
    path: "vaccines.html", active: "vaccines.html",
    title: "2026–27 flu vaccines: who, when, which one, and how well they work",
    description: "Flu vaccine recommendations for the 2026–27 season: strains, which vaccine for children, adults 65+, and pregnancy, effectiveness by season, safety, cost, and the 2025–26 federal policy changes.",
    body,
    jsonld: [{ "@context": "https://schema.org", "@type": "MedicalWebPage", name: "2026–27 influenza vaccines", lastReviewed: "2026-10-05", about: { "@type": "MedicalCondition", name: "Influenza" } }],
  }));
}
