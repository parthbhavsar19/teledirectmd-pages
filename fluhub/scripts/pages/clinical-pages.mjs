// Clinical pages. Every claim cites a numbered source from content/refs.mjs.
import { page, pageHead, clinicalByline, sourceList, icon, esc } from "../lib/layout.mjs";
import { refSet } from "../../content/refs.mjs";
import { SITE } from "../../content/site.mjs";
import { fmtDate } from "../lib/derive.mjs";
import { birdFluWatchBox } from "../lib/local.mjs";

export const CHECKED = "October 5, 2026";

export function ctaBox(context = "") {
  if (!SITE.cta.enabled) return "";
  return `<aside class="panel" style="display:grid;gap:10px;border-color:var(--accent)">
<p class="eyebrow">Adults 18+ who need a prescription today</p>
<p>${context || "If you are an adult within the first two days of flu symptoms, or at higher risk, a clinician can decide on antiviral treatment by video without a test."}</p>
<p class="small muted">${esc(SITE.cta.org)}: ${esc(SITE.cta.line)}</p>
<div class="btn-row"><a class="btn btn-primary" href="${SITE.cta.url}" target="_blank" rel="noopener">Book a ${esc(SITE.cta.org)} visit</a><a class="btn btn-ghost" href="symptoms.html">Check symptoms first</a></div>
<p class="small muted">FluHub is published by ${esc(SITE.cta.org)}. Telehealth is not for emergencies; for any warning sign, call 911.</p>
</aside>`;
}

export const ADULT_SIGNS = [
  "Difficulty breathing or shortness of breath",
  "Persistent pain or pressure in the chest or abdomen",
  "Persistent dizziness, confusion, or inability to wake up",
  "Seizures",
  "Not urinating",
  "Severe muscle pain",
  "Severe weakness or unsteadiness",
  "Fever or cough that improves but then returns or gets worse",
  "Worsening of chronic medical conditions",
];
export const CHILD_SIGNS = [
  "Fast breathing or trouble breathing",
  "Bluish lips or face",
  "Ribs pulling in with each breath",
  "Chest pain",
  "Severe muscle pain (the child refuses to walk)",
  "Dehydration: no urine for 8 hours, dry mouth, no tears when crying",
  "Not alert or interacting when awake",
  "Seizures",
  "Fever above 104°F (40°C) not controlled by fever-reducing medicine",
  "In children younger than 12 weeks, any fever",
  "Fever or cough that improves but then returns or gets worse",
  "Worsening of chronic medical conditions",
];

export const HIGH_RISK = [
  ["Age", ["Adults 65 years and older", "Children younger than 2 years (and, by CDC's broader guidance on children, younger than 5)"]],
  ["Pregnancy", ["Pregnant, or within 2 weeks after the end of pregnancy"]],
  ["Lung and heart", ["Asthma", "Chronic lung disease such as COPD or cystic fibrosis", "Heart disease, including congenital heart disease, heart failure, and coronary artery disease", "Having had a stroke"]],
  ["Other long-term conditions", ["Diabetes or another endocrine disorder", "Kidney disease", "Liver disease", "Blood disorders such as sickle cell disease", "Inherited metabolic or mitochondrial disorders", "Neurologic and neurodevelopmental conditions", "Certain disabilities, especially those affecting muscle or lung function, coughing, swallowing, or clearing the airway", "Body mass index (BMI) of 40 or higher"]],
  ["Immune system", ["A weakened immune system from disease (such as HIV or some cancers like leukemia) or from medicines (chemotherapy, radiation, long-term steroids, or other immune-suppressing drugs)"]],
  ["Other", ["Under 19 and taking long-term aspirin or salicylate medicines", "Living in a nursing home or other long-term care facility", "American Indian or Alaska Native, non-Hispanic Black, or Hispanic or Latino people, who have higher rates of flu hospitalization"]],
];

export default async function ({ data, emit }) {
  const R = "";

  /* ================= Treatment ================= */
  {
    const { list, c } = refSet(["cdcAntiviralClin", "cdcCoca2025", "cdcTreatPatient", "tamifluLabel", "xofluzaLabel", "rapivabLabel", "relenzaLabel", "fdaGenericBaloxavir", "idsa2018", "fluview2620", "cdcWhenSick", "medlineReye", "cdcHighRisk"]);
    const body = `${pageHead({
      eyebrow: "If you have flu",
      title: "Antiviral treatment for flu",
      lede: "Prescription antivirals shorten flu and lower the chance of serious complications. They work best when started within two days of the first symptom, and for some people they are recommended no matter how many days have passed.",
      byline: clinicalByline(CHECKED, "CDC antiviral guidance, March 2026; FDA labels"),
    })}
<div class="grid-2" style="margin-top:32px;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)">
<article class="prose col">
  <h2 style="margin-top:0">Who should get an antiviral</h2>
  <p>CDC recommends starting antiviral treatment <b>as soon as possible</b> for anyone with suspected or confirmed flu who:${c("cdcAntiviralClin")}</p>
  <ul>
    <li>is in the hospital with flu;</li>
    <li>has severe, complicated, or worsening illness, at any point in the illness; or</li>
    <li>is at <a href="high-risk.html">higher risk of complications</a>, such as adults 65 and older, young children, pregnant people, and people with conditions like asthma, diabetes, or heart disease.</li>
  </ul>
  <p>For otherwise healthy people, a clinician can still prescribe an antiviral if it can be started within two days of getting sick.${c("cdcAntiviralClin")} Started in that window, treatment lessens symptoms and shortens illness by about a day.${c("cdcTreatPatient")}</p>

  <div class="callout"><p class="callout-title">${icon.info}You usually do not need a flu test first.</p><p>CDC's guidance says treatment decisions "should not wait for laboratory confirmation of influenza." During flu season, a clinician can treat based on your symptoms.${c("cdcAntiviralClin")}</p></div>

  <h2>Timing</h2>
  <p>The two-day window applies to people who are otherwise healthy and have an ordinary course of flu. For people who are hospitalized, or whose illness is severe or getting worse, observational studies show benefit even when treatment starts after 48 hours, and CDC recommends treating them regardless of when symptoms began.${c("cdcAntiviralClin", "cdcCoca2025")}</p>

  <h2 id="medicines">The four FDA-approved flu antivirals</h2>
  <div id="shortage-badge"></div>
</article>
<aside style="display:grid;gap:16px;align-content:start;position:sticky;top:80px">${ctaBox()}
<div class="callout crit"><p class="callout-title">${icon.alert}Go to an emergency department for</p><p>trouble breathing, chest pain or pressure, confusion, a seizure, or not urinating. <a href="warning-signs.html">All warning signs</a></p></div></aside>
</div>
<div class="table-wrap" style="margin-top:18px"><table>
<thead><tr><th>Medicine</th><th>How it's taken</th><th>Course</th><th>Approved ages for treatment</th><th>Good to know</th></tr></thead>
<tbody>
<tr><td><b>Oseltamivir</b><br><span class="muted small">Tamiflu, generic</span></td><td>Capsule or liquid by mouth</td><td>Twice a day for 5 days</td><td>2 weeks and older (CDC also supports use in younger infants)${c("tamifluLabel", "cdcAntiviralClin")}</td><td>The preferred choice in pregnancy, for hospitalized patients, and for severe or worsening illness.${c("cdcAntiviralClin")} Taking it with food reduces nausea.</td></tr>
<tr><td><b>Baloxavir marboxil</b><br><span class="muted small">Xofluza; a generic was FDA-approved June 2026, launch date not announced</span></td><td>Tablets by mouth</td><td>One dose</td><td>5 years and older, healthy or higher-risk${c("xofluzaLabel", "fdaGenericBaloxavir")}</td><td>CDC lists it alongside oseltamivir for higher-risk outpatients seen within 48 hours.${c("cdcCoca2025")} Not recommended in pregnancy, while breastfeeding, or alone for severely immunocompromised patients.${c("cdcAntiviralClin")} Do not take with dairy, calcium-fortified drinks, antacids, or supplements containing calcium, iron, magnesium, or zinc.${c("xofluzaLabel")}</td></tr>
<tr><td><b>Zanamivir</b><br><span class="muted small">Relenza</span></td><td>Inhaled powder</td><td>Twice a day for 5 days</td><td>7 years and older${c("relenzaLabel")}</td><td>Not for people with asthma, COPD, or other airway disease, because it can trigger bronchospasm.${c("relenzaLabel", "cdcAntiviralClin")} Contains milk proteins.</td></tr>
<tr><td><b>Peramivir</b><br><span class="muted small">Rapivab</span></td><td>IV infusion</td><td>One dose</td><td>6 months and older${c("rapivabLabel")}</td><td>Given in a clinic, urgent care, or emergency department for people who cannot take medicine by mouth.</td></tr>
</tbody></table></div>
<p class="chart-note" style="margin-top:8px">Antibiotics do not treat flu. They are only used if a clinician finds a bacterial complication such as pneumonia.${c("cdcTreatPatient")}</p>

<div class="grid-2" style="margin-top:36px;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)"><article class="prose col">
  <h2 style="margin-top:0">Special situations</h2>
  <h3>Pregnancy and the 2 weeks after</h3>
  <p>Pregnant people and those up to two weeks postpartum are in a higher-risk group and should be treated promptly. Oral oseltamivir is preferred, at the same dose as for anyone else. Baloxavir is not recommended during pregnancy or breastfeeding.${c("cdcAntiviralClin", "cdcCoca2025")}</p>
  <h3>Children</h3>
  <p>Oseltamivir is dosed by weight and comes as a liquid. Children younger than 2 are a high-risk group and should be treated as soon as flu is suspected.${c("cdcAntiviralClin", "idsa2018")} Baloxavir is not approved under age 5 because resistance emerged more often in younger children in trials.${c("xofluzaLabel")}</p>
  <p>Never give aspirin or aspirin-containing products to anyone under 19 with flu: it can cause Reye syndrome, a rare but serious illness of the liver and brain.${c("medlineReye")}</p>
  <h3>Kidney disease</h3>
  <p>Oseltamivir doses are reduced when kidney function is lower. Your clinician will adjust it; tell them about any kidney disease or dialysis.${c("tamifluLabel")}</p>
  <h3>Severely weakened immune system</h3>
  <p>Oseltamivir is preferred. Baloxavir should not be used alone because resistance is more likely; a clinician may consider combining medicines.${c("cdcCoca2025")}</p>

  <h2>Side effects</h2>
  <p>The most common side effects of oseltamivir are nausea and vomiting, usually mild and less likely when it is taken with food. The label also notes rare reports of confusion or unusual behavior, mostly in children; flu itself can cause these, and the medicine's role has not been established.${c("tamifluLabel")} Call your clinician if anything unusual happens.</p>

  <h2>After an exposure: preventing flu</h2>
  <p>Antivirals can also prevent flu after close contact with a sick person. This is mainly for people at very high risk (for example, a severely immunocompromised household member) for whom the vaccine is not an option or may not work well. It should start within 48 hours of the exposure and usually continues for 7 days after the last exposure.${c("idsa2018", "cdcAntiviralClin")} For healthy people, CDC and IDSA generally prefer watching for symptoms and starting treatment early if they appear.${c("idsa2018")}</p>

  <h2>Do the drugs still work?</h2>
  <p>Yes. Of more than 4,400 flu viruses CDC tested in the 2025–26 season, about 99% were susceptible to all four antivirals, and none showed reduced susceptibility to baloxavir.${c("fluview2620")}</p>

  <h2>Taking care of yourself at home</h2>
  <ul>
    <li>Rest and drink plenty of fluids. Acetaminophen or ibuprofen can ease fever and aches if they are safe for you.</li>
    <li>Stay home while you are sick. You can go back to normal activities once, for at least 24 hours, your symptoms are improving overall and you have had no fever without fever-reducing medicine. Take extra precautions for the next 5 days, such as a well-fitted mask around others.${c("cdcWhenSick")}</li>
    <li>Watch for the <a href="warning-signs.html">emergency warning signs</a>, especially a fever or cough that gets better and then comes back worse, which can signal pneumonia.</li>
  </ul>

  <p class="small">Longer read: TeleDirectMD's <a href="https://teledirectmd.com/health-guides/flu-treatment-guide/">flu treatment guide</a> covers medicines, home care, and recovery week by week.</p>

  <details class="clin" style="margin-top:28px"><summary>Clinician detail: dosing</summary>
  <div class="prose small">
    <h4>Oseltamivir treatment (5 days, twice daily)${c("tamifluLabel", "cdcAntiviralClin")}</h4>
    <div class="table-wrap"><table><thead><tr><th>Patient</th><th>Dose</th></tr></thead><tbody>
    <tr><td>Adults and children over 40 kg</td><td class="mono">75 mg BID</td></tr>
    <tr><td>Children 23.1–40 kg</td><td class="mono">60 mg BID</td></tr>
    <tr><td>Children 15.1–23 kg</td><td class="mono">45 mg BID</td></tr>
    <tr><td>Children 15 kg or less (1 year and older)</td><td class="mono">30 mg BID</td></tr>
    <tr><td>Infants 2 weeks to under 1 year</td><td class="mono">3 mg/kg BID</td></tr>
    <tr><td>Preterm infants (CDC, off-label), by postmenstrual age</td><td class="mono">&lt;38 wk 1.0 mg/kg; 38–40 wk 1.5 mg/kg; &gt;40 wk 3.0 mg/kg BID</td></tr>
    </tbody></table></div>
    <p>Prophylaxis uses the same weight-based dose once daily. CDC supports prophylaxis from 3 months (3 mg/kg once daily under 1 year, off-label).${c("cdcAntiviralClin")}</p>
    <h4>Oseltamivir renal adjustment, adults${c("tamifluLabel")}</h4>
    <div class="table-wrap"><table><thead><tr><th>CrCl (mL/min)</th><th>Treatment</th><th>Prophylaxis</th></tr></thead><tbody>
    <tr><td>&gt;60</td><td class="mono">75 mg BID</td><td class="mono">75 mg daily</td></tr>
    <tr><td>&gt;30–60</td><td class="mono">30 mg BID</td><td class="mono">30 mg daily</td></tr>
    <tr><td>&gt;10–30</td><td class="mono">30 mg daily</td><td class="mono">30 mg every other day</td></tr>
    <tr><td>ESRD on hemodialysis</td><td class="mono">30 mg, then 30 mg after each HD session (max 5 days)</td><td class="mono">30 mg after alternate sessions</td></tr>
    <tr><td>ESRD on CAPD</td><td class="mono">30 mg once</td><td class="mono">30 mg weekly</td></tr>
    <tr><td>ESRD not on dialysis</td><td colspan="2">Not recommended</td></tr>
    </tbody></table></div>
    <h4>Baloxavir${c("xofluzaLabel", "cdcAntiviralClin")}</h4>
    <p>Single oral dose within 48 hours of symptom onset (treatment) or of exposure (post-exposure prophylaxis), age 5 and older: 40 mg for 20 to under 80 kg; 80 mg for 80 kg or more. The label also describes granule packets for children 15 to under 20 kg (30 mg), but CDC notes the suspension is not currently available in the United States.</p>
    <h4>Zanamivir and peramivir${c("relenzaLabel", "rapivabLabel")}</h4>
    <p>Zanamivir: 10 mg (two 5-mg inhalations) BID for 5 days; prophylaxis 10 mg once daily. Peramivir: 600 mg IV once in adults and adolescents 13 and older; 12 mg/kg (max 600 mg) for ages 6 months to 12 years; reduce to 200 mg for CrCl 30–49 and 100 mg for CrCl 10–29. Peramivir is not recommended for prophylaxis, and CDC does not routinely recommend zanamivir, baloxavir, or peramivir for hospitalized patients.</p>
    <h4>Chemoprophylaxis duration</h4>
    <p>CDC and IDSA: 7 days after the last known exposure; in institutional outbreaks, at least 2 weeks and until 1 week after the last case is identified, for all residents regardless of vaccination.${c("cdcAntiviralClin", "idsa2018")} The Tamiflu label lists at least 10 days for household prophylaxis; FluHub follows the CDC and IDSA duration.</p>
    <h4>Guideline status</h4>
    <p>The IDSA treatment guideline is the 2018 update (published 2019). It predates baloxavir's high-risk and pediatric indications, so CDC's March 2026 summary and December 2025 COCA guidance are the more current reference.${c("idsa2018", "cdcCoca2025")}</p>
  </div></details>
  <h2>More on treatment</h2>
  <ul>
    <li><a href="too-late-for-tamiflu.html">Is it too late for Tamiflu?</a> A short check for day 3, 4, or 5.</li>
    <li><a href="antiviral-cost.html">What antivirals cost, and what to do if the pharmacy is out</a></li>
    <li><a href="household.html">Someone in my house has flu: preventing it in everyone else</a></li>
    <li><a href="tamiflu-side-effects.html">Tamiflu side effects, including the question about nightmares and behavior changes</a></li>
    <li><a href="contagious.html">How long you are contagious, and when to go back to work</a></li>
    <li><a href="getting-worse.html">Getting worse, or a fever that came back</a></li>
  </ul>
</article><div></div></div>
${sourceList(list)}`;
    await emit("treatment.html", page({
      path: "treatment.html", active: "treatment.html",
      title: "Flu antiviral treatment: Tamiflu, Xofluza, and who should get them",
      description: "Who should get flu antivirals, how soon to start, and how oseltamivir (Tamiflu), baloxavir (Xofluza), zanamivir, and peramivir compare, written to CDC's March 2026 guidance.",
      body,
      jsonld: [medPageLD("Antiviral treatment for influenza", "treatment.html")],
      scripts: ["shortage.js"],
    }));
  }

  /* ================= High risk ================= */
  {
    const { list, c } = refSet(["cdcHighRisk", "cdcChildren", "cdcAntiviralClin", "idsa2018"]);
    const body = `${pageHead({
      eyebrow: "Know your risk",
      title: "Who is at higher risk from flu",
      lede: "For most people flu is a miserable week. For some it leads to pneumonia, hospitalization, or worsening of a heart or lung condition. If you or someone you care for is on this list, call a clinician as soon as flu symptoms start.",
      byline: clinicalByline(CHECKED, "CDC high-risk list, September 2024"),
    })}
<div class="grid-2" style="margin-top:32px;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr)">
<section>
  <h2 style="margin-bottom:6px">Check what applies</h2>
  <p class="muted" style="margin-bottom:18px">Select any that apply to you or the person you are caring for. Nothing you select leaves this page.</p>
  <form id="risk-form" class="q" onsubmit="return false">
  ${HIGH_RISK.map(([g, items], gi) => `<fieldset><legend>${g}</legend><div class="opts">${items.map((t, i) => `<label class="opt"><input type="checkbox" id="r${gi}-${i}" name="risk"><span>${esc(t)}</span></label>`).join("")}</div></fieldset>`).join("")}
  </form>
  <p class="small muted" style="margin-top:14px">List from CDC's "People at Increased Risk for Flu Complications."${c("cdcHighRisk")} Children younger than 5 are at higher risk than older children, and those under 2 most of all.${c("cdcChildren")}</p>
</section>
<aside style="position:sticky;top:80px;display:grid;gap:16px">
  <div class="result" id="risk-result" data-tier="home" aria-live="polite">
    <p class="result-tier">Your result</p>
    <h3>No higher-risk factors selected</h3>
    <p>You can still get very sick from flu. Antiviral treatment is recommended for anyone whose illness is severe or getting worse, and a clinician may treat otherwise healthy adults who are seen within two days of getting sick.</p>
  </div>
  ${ctaBox("If you are an adult in a higher-risk group and have flu symptoms, CDC recommends antiviral treatment as soon as possible, ideally within 48 hours.")}
</aside>
</div>
<section class="section prose col">
  <h2>Why these groups</h2>
  <p>Flu inflames the airways and stresses the heart, and it can tip a stable chronic condition into a crisis. In people over 65 and in young children, the immune response is weaker or less experienced. Pregnancy changes the heart, lungs, and immune system in ways that make severe flu more likely, both for the pregnant person and the baby.${c("cdcHighRisk")}</p>
  <h2>What being high-risk changes</h2>
  <ul>
    <li><b>Treatment:</b> CDC recommends antivirals as soon as possible for anyone in these groups with suspected flu, without waiting for a test.${c("cdcAntiviralClin")}</li>
    <li><b>Prevention:</b> get vaccinated every year. People 65 and older should preferably get a high-dose, adjuvanted, or recombinant vaccine. <a href="vaccines.html">See vaccines</a>.</li>
    <li><b>Household planning:</b> if someone in your home is very high-risk, such as after a transplant, ask their clinician now about what to do if a family member gets flu.${c("idsa2018")}</li>
  </ul>
</section>
${sourceList(list)}`;
    await emit("high-risk.html", page({
      path: "high-risk.html", active: "",
      title: "Who is at higher risk for flu complications",
      description: "CDC's full list of people at higher risk for serious flu complications, including age, pregnancy, chronic conditions, and immune suppression, with what it means for treatment.",
      body, scripts: ["risk.js"],
      jsonld: [medPageLD("People at increased risk for influenza complications", "high-risk.html")],
    }));
  }

  /* ================= Warning signs ================= */
  {
    const { list, c } = refSet(["cdcSigns"]);
    const col = (title, items) => `<div class="panel" style="display:grid;gap:12px;border-color:var(--critical)"><h2 style="font-size:1.4rem">${title}</h2><ul style="margin:0;padding-left:1.2em;display:grid;gap:6px">${items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`;
    const body = `${pageHead({
      eyebrow: "Emergency",
      title: "Flu emergency warning signs",
      lede: "If you or someone you are caring for has any of these, get medical care right away. Call 911 for trouble breathing, a seizure, or someone you cannot wake.",
      byline: clinicalByline(CHECKED, "CDC emergency warning signs, August 2024"),
    })}
<div class="grid-2" style="margin-top:32px">${col("In children", CHILD_SIGNS)}${col("In adults", ADULT_SIGNS)}</div>
<p class="col" style="margin-top:20px">CDC notes that these lists are not complete: get care for any symptom that is severe or worrying to you.${c("cdcSigns")} Telehealth and urgent care are not the right place for these symptoms; go to an emergency department.</p>
${sourceList(list)}`;
    await emit("warning-signs.html", page({ path: "warning-signs.html", title: "Flu emergency warning signs in children and adults", description: "CDC's emergency warning signs of flu for children and adults: when to call 911 or go to the emergency department.", body, jsonld: [medPageLD("Influenza emergency warning signs", "warning-signs.html")] }));
  }

  /* ================= Testing and look-alikes ================= */
  {
    const { list, c } = refSet(["cdcTestingGuide", "cdcRidt", "fdaHomeTest", "cdcFluVsCovid", "cdcAntiviralClin", "idsa2018", "cdcCoca2025"]);
    const body = `${pageHead({
      eyebrow: "Is it flu?",
      title: "Testing, and telling flu from COVID-19, RSV, and colds",
      lede: "Flu, COVID-19, RSV, and colds overlap so much that symptoms alone cannot tell them apart. Here is when a test helps, which test to use, and what to do while you wait.",
      byline: clinicalByline(CHECKED, "CDC testing guidance, December 2025; IDSA 2018"),
    })}
<div class="prose col" style="margin-top:32px">
  <h2 style="margin-top:0">Do you need a test?</h2>
  <p>Not always. CDC says testing "is not required for decisions to prescribe antiviral medication," and treatment should not be delayed while results are pending.${c("cdcTestingGuide")} A test helps most when the result would change what happens next: whether to take an antiviral or a COVID-19 treatment, whether antibiotics are needed, or how to protect a high-risk person you live with.${c("cdcTestingGuide")} Everyone admitted to the hospital with suspected flu should be tested with a molecular test.${c("cdcTestingGuide")}</p>

  <h2>Which test</h2>
  <div class="table-wrap"><table><thead><tr><th>Test</th><th>Where</th><th>How accurate</th></tr></thead><tbody>
  <tr><td><b>Rapid molecular</b> (NAAT, PCR-type)</td><td>Clinics, urgent care, some pharmacies; one at-home kit</td><td>High sensitivity; the type IDSA recommends over rapid antigen tests for outpatients${c("idsa2018", "cdcCoca2025")}</td></tr>
  <tr><td><b>Rapid antigen</b> (RIDT)</td><td>Clinics; several are authorized for home use, including flu/COVID-19 combination tests</td><td>Misses many cases: 53–54% sensitivity without a reader device, 76–80% with one. A negative result does not rule out flu.${c("cdcRidt")}</td></tr>
  <tr><td><b>Laboratory RT-PCR</b></td><td>Hospitals and labs</td><td>The reference standard; results take longer</td></tr>
  </tbody></table></div>
  <p>The first combination flu and COVID-19 home test authorized through FDA's standard review (not emergency use) was cleared in October 2024. FDA advises that anyone who tests negative but still has symptoms may still have flu, COVID-19, or another infection and should follow up with a clinician.${c("fdaHomeTest")}</p>

  <p class="small">More detail on test types, timing, and costs: TeleDirectMD's <a href="https://teledirectmd.com/health-guides/flu-test-guide/">flu testing guide</a>.</p>

  <h2>Flu, COVID-19, RSV, or a cold?</h2>
  <p>"You cannot tell the difference between flu and COVID-19 by the symptoms alone," CDC says.${c("cdcFluVsCovid")} A few patterns help, but none is reliable on its own:</p>
</div>
<div class="table-wrap" style="margin-top:16px"><table><thead><tr><th></th><th>Flu</th><th>COVID-19</th><th>RSV</th><th>Common cold</th></tr></thead><tbody>
<tr><td><b>Onset after exposure</b></td><td>1 to 4 days, often abrupt${c("cdcFluVsCovid")}</td><td>2 to 5 days, up to 14${c("cdcFluVsCovid")}</td><td>Usually 4 to 6 days</td><td>Gradual</td></tr>
<tr><td><b>Fever and body aches</b></td><td>Common, often severe</td><td>Common</td><td>Fever possible; wheezing in infants and older adults</td><td>Uncommon</td></tr>
<tr><td><b>Loss of taste or smell</b></td><td>Possible</td><td>More frequent${c("cdcFluVsCovid")}</td><td>Uncommon</td><td>Uncommon</td></tr>
<tr><td><b>Most contagious</b></td><td>First 3 days of illness; about 1 day before symptoms${c("cdcFluVsCovid")}</td><td>About 8 days after symptoms start on average${c("cdcFluVsCovid")}</td><td>3 to 8 days</td><td>First few days</td></tr>
<tr><td><b>Treatment window</b></td><td>Antivirals, best within 2 days${c("cdcAntiviralClin")}</td><td>Antivirals within 5 to 7 days${c("cdcFluVsCovid")}</td><td>Supportive care</td><td>Supportive care</td></tr>
</tbody><caption>RSV and cold rows reflect general clinical knowledge reviewed by the clinical editor; flu and COVID-19 rows are sourced to CDC.</caption></table></div>
${sourceList(list)}`;
    await emit("testing.html", page({ path: "testing.html", title: "Flu testing, and flu vs. COVID-19 vs. RSV", description: "When a flu test helps, rapid molecular vs. antigen accuracy, home flu/COVID tests, and how flu compares with COVID-19, RSV, and the common cold.", body, jsonld: [medPageLD("Influenza testing and differential", "testing.html")] }));
  }

  /* ================= Bird flu ================= */
  {
    const { list, c } = refSet(["cdcH5Situation", "cdcH5Monitoring", "mmwrH5N5", "cdcH5Global", "fluview2632", "fluview2638"]);
    const body = `${pageHead({
      eyebrow: "Novel influenza",
      title: "Bird flu (H5N1) in the United States",
      lede: "H5 bird flu spread through U.S. dairy cattle and poultry starting in 2024 and infected a small number of people, almost all of them farm workers. CDC rates the risk to the general public as low.",
      byline: clinicalByline(CHECKED, "CDC H5 situation summary, March 2026; MMWR May 2026"),
    })}
<section class="section"><div class="strip">
<div class="stat"><span class="stat-label">Human H5 cases reported in the U.S. since February 2024</span><span class="stat-value">71</span><span class="stat-ctx">CDC count as of March 6, 2026${c("cdcH5Situation")}</span></div>
<div class="stat"><span class="stat-label">U.S. deaths</span><span class="stat-value">2</span><span class="stat-ctx">Louisiana, January 2025 (H5N1); Washington, November 2025 (H5N5)${c("mmwrH5N5")}</span></div>
<div class="stat"><span class="stat-label">Person-to-person spread in the U.S.</span><span class="stat-value">None</span><span class="stat-ctx">not identified to date${c("mmwrH5N5")}</span></div>
<div class="stat"><span class="stat-label">People monitored after animal exposure</span><span class="stat-value">33,300+</span><span class="stat-ctx">February 2022 to September 26, 2026${c("cdcH5Monitoring")}</span></div>
</div></section>
<div class="prose col" style="margin-top:32px">
  <h2 style="margin-top:0">What CDC says now</h2>
  <p>"While the current public health risk is low, CDC is watching the situation carefully and working with states to monitor people with animal exposures."${c("cdcH5Situation")} As of October 2026, CDC's flu surveillance "currently show[s] no indicators of unusual influenza activity in people, including avian influenza A(H5)."${c("cdcH5Monitoring")}</p>
  <p>Of the 71 U.S. cases, 64 were found by monitoring people exposed to infected animals and 7 through routine flu surveillance.${c("cdcH5Situation")} In July 2025 CDC folded its bird flu updates into its routine weekly flu reporting and stopped posting animal detection counts, which are now reported by USDA.${c("cdcH5Situation")}</p>
  <h2>The H5N5 case</h2>
  <p>In November 2025 an older Washington resident with lymphoma who kept a backyard flock died after infection with H5N5, the first human H5N5 infection reported anywhere in the world. Public health workers monitored about 135 contacts and found no further cases.${c("mmwrH5N5")}</p>
  ${birdFluWatchBox()}
  <h2>Who should take precautions</h2>
  <ul>
    <li>People who work with dairy cattle, poultry, or wild birds, or who keep backyard flocks: use protective equipment, and report eye redness or flu symptoms within 10 days of exposure to your health department.</li>
    <li>Everyone: avoid raw (unpasteurized) milk and raw pet food, and do not touch sick or dead birds or animals. Pasteurized milk and properly cooked poultry and eggs are safe.</li>
  </ul>
  <h2>Does the seasonal flu shot protect against bird flu?</h2>
  <p>No. Seasonal vaccines are designed for human flu strains. They still matter, because they reduce the chance that a person is infected with human and bird flu at the same time, the situation in which the viruses could swap genes.</p>
  <h2>Elsewhere in the world</h2>
  <p>Between August 2025 and June 2026, 12 human H5N1 infections were reported in Bangladesh, Cambodia, and India, including 3 deaths. More than 1,000 human cases have been reported worldwide since 1997.${c("cdcH5Global")}</p>
  <h2>Swine flu variants</h2>
  <p>Four people, all children, were infected with swine-origin H1N2v flu in the 2025–26 season, including two in Michigan who had visited the same agricultural fair where pigs were sick.${c("fluview2632")} Variant cases are usually mild and tied to direct contact with pigs at fairs.</p>
</div>
${sourceList(list)}`;
    await emit("bird-flu.html", page({ path: "bird-flu.html", active: "bird-flu.html", title: "Bird flu (H5N1) in the U.S.: cases, risk, and precautions", description: "CDC's count of human H5 bird flu cases in the United States, the first H5N5 death, who is at risk, and how to protect yourself.", body, jsonld: [medPageLD("Avian influenza A(H5) in the United States", "bird-flu.html")] }));
  }

  /* ================= Methods and review ================= */
  {
    const m = data.meta;
    const body = `${pageHead({ eyebrow: "About FluHub", title: "Sources, methods, and clinical review", lede: "Where every number comes from, how often it updates, and how clinical content is checked before it goes live." })}
<div class="prose col" style="margin-top:32px">
  <h2 style="margin-top:0">Data sources</h2>
  <div class="table-wrap"><table><thead><tr><th>Measure</th><th>Source</th><th>Latest</th></tr></thead><tbody>
  ${Object.values(m.sources).map((s) => `<tr><td>${esc(s.name.split(",")[0].split(":")[0])}</td><td><a href="${s.url}" target="_blank" rel="noopener">${esc(s.name)}</a></td><td class="mono">${esc(s.latest ? (String(s.latest).length === 6 ? "MMWR " + s.latest : s.latest) : s.snapshot ? "snapshot " + s.snapshot : s.retrieved)}</td></tr>`).join("")}
  </tbody></table></div>
  <h2>Definitions</h2>
  <ul>
    <li><b>Influenza-like illness (ILI):</b> fever of 100°F or higher with cough or sore throat. National %ILI is the population-weighted share of outpatient visits for ILI from ILINet providers; state values are unweighted.</li>
    <li><b>National baseline:</b> the mean %ILI during non-flu weeks of the three previous seasons plus two standard deviations; 3.1% for 2025–26. CDC publishes the 2026–27 baseline with the first report of the season.</li>
    <li><b>Flu season and MMWR weeks:</b> a season runs from MMWR week 40 through week 39 of the next year. MMWR weeks run Sunday to Saturday; week 1 is the first week with at least four days in the calendar year.</li>
    <li><b>Activity level (Very Low to Very High):</b> CDC's acute respiratory illness level, based on the share of emergency department visits for respiratory illness compared with each state's own baseline. It includes COVID-19 and RSV, so it is broader than flu. It is distinct from FluView's 13-level ILI map. CDC publishes only the current week; FluHub archives each week.</li>
    <li><b>Typical range:</b> the 10th to 90th percentile for each week across all prior seasons since 2010–11, excluding 2020–21 and 2021–22, when COVID-19 measures suppressed flu.</li>
    <li><b>Burden estimates:</b> CDC's modeled counts of illnesses, visits, hospitalizations, and deaths; recent seasons are preliminary and are revised.</li>
  </ul>
  <h2>Refresh schedule</h2>
  <p>An automated job pulls every source each Friday afternoon (Eastern), after CDC publishes FluView, then rebuilds the site. Curated figures that CDC publishes as reports rather than data (burden, vaccine effectiveness, H5 counts) are reviewed against CDC monthly and whenever CDC announces an update.</p>
  <h2>Clinical validation workflow</h2>
  <ol>
    <li><b>Source of record.</b> Every clinical statement maps to a numbered source on the page: CDC guidance, an FDA label, an IDSA guideline, or a professional society statement, each with the version date that was checked.</li>
    <li><b>Physician sign-off.</b> ${esc(SITE.editor)}, ${esc(SITE.editorCred)}, reviews every clinical page and every symptom-checker outcome before publication and after any guideline change.</li>
    <li><b>Guideline watch.</b> CDC (FluView, antiviral summary, vaccine clinical considerations), IDSA, AAP, ACOG, and AAFP are checked at the start of each season and monthly during it. A change triggers a review of every page that cites the changed source.</li>
    <li><b>Safety rules for the symptom check.</b> Emergency signs are asked first and stop the flow. Results can only move people toward care, never away from it. Nothing a user enters is stored or sent anywhere.</li>
    <li><b>Conflicts are shown, not hidden.</b> Where sources disagree (for example, FDA label versus CDC prophylaxis duration, or federal versus society vaccine schedules), the page says so and names which one FluHub follows.</li>
  </ol>
  <h2>Independence and disclosure</h2>
  <p>FluHub is published by ${esc(SITE.cta.org)}, a physician-owned telehealth practice. Practice information appears only where a same-day adult visit is a reasonable next step and never on emergency results. FluHub takes no advertising and collects no personal health information.</p>
  <h2>Corrections</h2>
  <p>Email <span class="mono">${esc(SITE.email)}</span>. Corrections are made the same week and noted on the affected page.</p>
</div>`;
    await emit("methods.html", page({ path: "methods.html", title: "Sources, methods, and clinical review", description: "FluHub's data sources, definitions, refresh schedule, and the physician review process for clinical content.", body }));
  }

  function medPageLD(name, path) {
    return {
      "@context": "https://schema.org", "@type": "MedicalWebPage", name, url: SITE.baseUrl + path,
      lastReviewed: "2026-10-05", reviewedBy: { "@type": "Physician", name: SITE.editor, medicalSpecialty: "FamilyMedicine" },
      audience: { "@type": "PeopleAudience", audienceType: "Patient" }, about: { "@type": "MedicalCondition", name: "Influenza" },
    };
  }
}
