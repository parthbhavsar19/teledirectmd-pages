// Care pages: the "what now?" questions patients ask once they are sick.
// Every clinical claim cites a numbered source from content/refs.mjs (new sources live in content/refs-care.mjs).
import { page, pageHead, clinicalByline, sourceList, icon, esc } from "../lib/layout.mjs";
import { refSet } from "../../content/refs.mjs";
import { SITE } from "../../content/site.mjs";
import { CHECKED, ctaBox, ADULT_SIGNS, CHILD_SIGNS } from "./clinical-pages.mjs";

/* ---------- shared helpers ---------- */

function medPageLD(name, path, description) {
  return {
    "@context": "https://schema.org", "@type": "MedicalWebPage", name, description, url: SITE.baseUrl + path,
    lastReviewed: "2026-10-05", reviewedBy: { "@type": "Physician", name: SITE.editor, medicalSpecialty: "FamilyMedicine" },
    audience: { "@type": "PeopleAudience", audienceType: "Patient" }, about: { "@type": "MedicalCondition", name: "Influenza" },
  };
}

const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/\[\d+\]/g, "").replace(/\s+/g, " ").trim();

function faqLD(qa) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: qa.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: strip(a) } })) };
}

function faqBlock(qa, title = "Common questions") {
  return `<section class="section col" id="questions"><h2 style="margin-bottom:14px">${title}</h2>${qa.map(([q, a], i) => `<details class="acc" id="q${i + 1}"><summary>${esc(q)}</summary><div class="acc-body"><p>${a}</p></div></details>`).join("")}</section>`;
}

// Related reading, rendered as task cards. items: [href, title, blurb]
function related(items) {
  return `<section class="section"><h2 class="h-small">Related</h2><div class="task-list">${items.map(([h, t, d]) => `<a class="task" href="${h}"><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="go">Read</span></a>`).join("")}</div></section>`;
}

const L = {
  late: ["too-late-for-tamiflu.html", "Is it too late for Tamiflu?", "Who still benefits after the first two days, with a quick check."],
  contagious: ["contagious.html", "How long flu is contagious", "Day-by-day spread and CDC's return-to-work and school rule."],
  cost: ["antiviral-cost.html", "Antiviral cost and access", "How to price-check, and what to do if the pharmacy is out."],
  household: ["household.html", "Someone in my house has flu", "Preventive antivirals within 48 hours, and other steps."],
  worse: ["getting-worse.html", "Getting worse, or fever came back", "When a flu relapse needs care today."],
  sidefx: ["tamiflu-side-effects.html", "Tamiflu side effects", "Common effects, taking it with food, and the behavior warning in context."],
  test: ["home-test.html", "Home flu or COVID test: now what?", "What positive and negative results mean."],
  cough: ["lingering-cough.html", "Lingering cough and tiredness", "A normal recovery timeline and the red flags."],
  preg: ["pregnancy.html", "Flu in pregnancy and breastfeeding", "Treatment, fever, vaccines, and when to go in."],
  relief: ["symptom-relief.html", "Symptom relief", "Acetaminophen, ibuprofen, decongestants, and safe doses."],
  ab: ["flu-a-vs-b.html", "Flu A vs. flu B", "What the letter means, and getting flu twice."],
  treatment: ["treatment.html", "Antiviral treatment", "Who should get an antiviral and how the four medicines compare."],
  warning: ["warning-signs.html", "Emergency warning signs", "When to call 911 or go to an emergency department."],
  highrisk: ["high-risk.html", "Who is at higher risk", "CDC's list of conditions that raise the risk of complications."],
  testing: ["testing.html", "Testing, and flu vs. COVID", "Which test to use and how accurate each one is."],
  symptoms: ["symptoms.html", "Symptom check", "Five questions to find the right next step."],
  vaccines: ["vaccines.html", "Flu vaccines", "This season's vaccines and who should get which one."],
};

const crumbs = (label) => [["index.html", "FluHub"], [null, label]];
const twoCol = `display:grid;gap:28px;margin-top:32px;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)`;
const signsBox = `<div class="callout crit"><p class="callout-title">${icon.alert}Go to an emergency department or call 911 for</p><p>trouble breathing, chest pain or pressure, confusion, a seizure, not urinating, or a fever or cough that got better and then came back worse. <a href="warning-signs.html">All warning signs</a></p></div>`;

export default async function ({ emit }) {
  /* =====================================================================
     1. Is it too late for Tamiflu? (decision page + triage)
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcAntiviralClin", "cdcAntiviralPatient", "cdcTreatPatient", "cdcHighRisk", "cdcSigns", "fdaGenericBaloxavir", "tamifluLabel"]);
    const radio = (name, opts) => `<div class="opts" role="radiogroup">${opts.map(([v, l]) => `<label class="opt${v === "emergency" ? " red" : ""}"><input type="radio" name="${name}" id="${name}-${v}" value="${v}"><span>${l}</span></label>`).join("")}</div>`;
    const qa = [
      ["Can I still take Tamiflu after 5 days of flu?", `If you are in a <a href="high-risk.html">higher-risk group</a>, pregnant, in the hospital, or getting worse, yes: CDC recommends antiviral treatment as early as possible for these groups, with no cutoff day.${c("cdcAntiviralClin")} For an otherwise healthy adult who is improving, CDC's guidance covers treatment started within two days, so a clinician is unlikely to recommend it on day 5.${c("cdcAntiviralClin")}`],
      ["Is Tamiflu worth it after 48 hours if I am healthy?", `Usually the benefit is small. For healthy people, CDC says treatment can be considered if it can start within two days of getting sick, when it shortens illness by about a day.${c("cdcAntiviralClin", "cdcTreatPatient")} If you are getting worse at any point, that changes: worsening illness should be checked and treated.${c("cdcAntiviralClin")}`],
      ["Do I need a positive flu test before I can get Tamiflu?", `No. CDC advises clinicians not to wait for test results before starting treatment when flu is suspected.${c("cdcAntiviralClin")} <a href="home-test.html">What a home test result means</a>.`],
      ["Can I take Xofluza instead if I am past 48 hours?", `Baloxavir (Xofluza and its generic) is approved for people 5 and older who have had symptoms for no more than 48 hours.${c("fdaGenericBaloxavir")} After that window, oseltamivir is the usual choice for people who still need treatment.${c("cdcAntiviralClin")}`],
      ["I am already feeling better. Should I still start an antiviral?", `If you are healthy and clearly improving after day 2, most people recover at home within a few days to less than two weeks.${c("cdcSigns")} If you are in a higher-risk group, ask a clinician: CDC recommends treatment for that group regardless of timing.${c("cdcAntiviralClin")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Antiviral timing",
      crumbs: crumbs("Is it too late for Tamiflu?"),
      title: "Is it too late for Tamiflu?",
      lede: "It depends on who is sick and how the illness is going. For people at higher risk, and for anyone whose flu is severe or getting worse, it is not too late: CDC recommends treatment as soon as possible, even after the first two days. For otherwise healthy adults, the benefit is mainly in the first 48 hours.",
      byline: clinicalByline(CHECKED, "CDC antiviral guidance, March 2026"),
    })}
<section class="section" style="margin-top:32px">
  <h2 class="h-small">The short answer</h2>
  <div class="grid-3">
    <div class="panel" style="display:grid;gap:8px;align-content:start;border-color:var(--warn)"><p class="eyebrow">Not too late</p><h3>Higher risk, pregnant, hospitalized, or getting worse</h3><p>CDC recommends antiviral treatment as early as possible for anyone in these groups with suspected flu, whether it is day 1 or day 5.${c("cdcAntiviralClin")} Starting later can still help.${c("cdcAntiviralPatient")}</p></div>
    <div class="panel" style="display:grid;gap:8px;align-content:start;border-color:var(--s1)"><p class="eyebrow">Your choice</p><h3>Healthy adult, day 1 or 2</h3><p>A clinician can consider treatment if it can start within two days of getting sick.${c("cdcAntiviralClin")} Started then, it shortens illness by about a day and eases symptoms.${c("cdcTreatPatient")}</p></div>
    <div class="panel" style="display:grid;gap:8px;align-content:start;border-color:var(--good)"><p class="eyebrow">Usually home care</p><h3>Healthy adult, past day 2, holding steady or improving</h3><p>CDC's guidance for healthy people covers treatment started within two days.${c("cdcAntiviralClin")} Most people recover in a few days to less than two weeks.${c("cdcSigns")} Get checked if you get worse.</p></div>
  </div>
</section>

<section class="section" id="check">
  <div class="section-head"><h2>Quick check: is an antiviral still worth asking about?</h2><p class="muted">Five questions. Your answers stay on this device. This is not a diagnosis.</p></div>
  <div class="checker">
  <form id="tamiflu-triage" class="panel" novalidate onsubmit="return false">
    <div class="q"><fieldset><legend>1. Who is sick?</legend>${radio("who", [["adult", "An adult (18 or older)"], ["child", "A child (under 18)"]])}</fieldset></div>
    <div class="q"><fieldset><legend>2. How is the illness going right now?</legend>
      ${radio("course", [["emergency", "A warning sign: trouble breathing, chest pain or pressure, confusion, a seizure, not urinating, severe weakness, or fever or cough that improved then came back worse"], ["worse", "Getting worse, but none of those signs"], ["stable", "About the same, or improving"]])}
    </fieldset></div>
    <div class="q"><fieldset><legend>3. Which day of illness is it?</legend>
      <p class="q-hint">Count the day symptoms started as day 1.</p>
      ${radio("day", [["d12", "Day 1 or 2 (within 48 hours)"], ["d35", "Day 3 to 5"], ["d6", "Day 6 or later"]])}
    </fieldset></div>
    <div class="q"><fieldset><legend>4. Is the sick person in a higher-risk group?</legend>
      <p class="q-hint">For example 65 or older, asthma or lung disease, heart disease, diabetes, kidney or liver disease, a weakened immune system, or a BMI of 40 or more. <a href="high-risk.html">Full CDC list</a>.${c("cdcHighRisk")}</p>
      ${radio("risk", [["yes", "Yes"], ["no", "No"], ["unsure", "Not sure"]])}
    </fieldset></div>
    <div class="q"><fieldset><legend>5. Pregnant, or gave birth or ended a pregnancy in the last 2 weeks?</legend>
      ${radio("preg", [["yes", "Yes"], ["no", "No, or does not apply"]])}
    </fieldset></div>
  </form>
  <aside>
    <div class="result" id="triage-result" data-tier="start" data-route="start" aria-live="polite">
      <p class="result-tier">Your next step</p>
      <h3>Start with question 1</h3>
      <p>Your result appears here as you answer. If anyone has trouble breathing, chest pain, confusion, or a seizure, call 911 now.</p>
    </div>
    <noscript><div class="callout warn" style="margin-top:12px"><p>This check needs JavaScript. The rules it follows are listed below the form, so you can apply them yourself.</p></div></noscript>
  </aside>
  </div>
</section>

<section class="section prose col" id="rules">
  <h2 style="margin-top:0">How the check decides</h2>
  <p>The rules run in this order. The first one that fits is your result.</p>
  <ol>
    <li><b>Any emergency warning sign:</b> go to an emergency department or call 911. Do not wait for a telehealth visit.${c("cdcSigns")}</li>
    <li><b>A child under 18:</b> call the child's pediatrician or clinician today. Children under 5, and especially under 2, are in a higher-risk group.${c("cdcHighRisk")} FluHub's publisher treats adults only.</li>
    <li><b>Pregnant or within 2 weeks after pregnancy:</b> call your prenatal care team today. CDC recommends prompt treatment, and oseltamivir is the preferred medicine in pregnancy.${c("cdcAntiviralClin")} <a href="pregnancy.html">More on pregnancy</a>.</li>
    <li><b>Getting worse:</b> contact a clinician today, ideally in person, so complications such as pneumonia can be checked. CDC recommends antivirals for progressive illness at any point.${c("cdcAntiviralClin")}</li>
    <li><b>Higher risk (or not sure), any day:</b> get evaluated for antiviral treatment today. CDC recommends treatment as soon as possible for higher-risk people, without waiting for a test.${c("cdcAntiviralClin")}</li>
    <li><b>Healthy adult, day 1 or 2:</b> treatment is optional and can be considered.${c("cdcAntiviralClin")} A same-day visit, in person or by video, is reasonable if you want it.</li>
    <li><b>Healthy adult, day 3 or later, steady or improving:</b> home care, and watch for warning signs.</li>
  </ol>
</section>

<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">Why 48 hours matters, and when it does not</h2>
  <p>For healthy people with an ordinary course of flu, CDC's guidance is that treatment can be considered if it can start within two days of the first symptom.${c("cdcAntiviralClin")} That is where the "48-hour rule" comes from.</p>
  <p>The rule does not apply to everyone. CDC recommends antiviral treatment as early as possible, with no time limit, for anyone who is in the hospital, whose illness is severe, complicated, or progressive, or who is at higher risk of complications.${c("cdcAntiviralClin")} CDC's patient page puts it simply: starting later "can still be beneficial," especially for people at higher risk or in the hospital.${c("cdcAntiviralPatient")}</p>
  <p>The most costly mistake is a higher-risk person on day 3 or 4 deciding it is too late to call. It usually is not.</p>
  <h2>Which medicine</h2>
  <p>Oseltamivir (Tamiflu or generic) is taken twice a day for 5 days.${c("tamifluLabel")} It is the preferred choice in pregnancy and for severe or worsening illness.${c("cdcAntiviralClin")} Baloxavir (Xofluza or generic) is a single dose for people 5 and older, approved for those who have had symptoms for no more than 48 hours.${c("fdaGenericBaloxavir")} <a href="treatment.html">Compare all four antivirals</a>.</p>
  <h2>No test needed</h2>
  <p>CDC says treatment should not wait for a lab result when flu is suspected.${c("cdcAntiviralClin")} A clinician can decide based on your symptoms and history.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  ${ctaBox("If you are an adult who is higher risk, or within the first two days of flu, a physician can review your symptoms by video and decide whether an antiviral is right for you. A visit may result in a prescription if appropriate; it is not guaranteed.")}
  ${signsBox}
</aside>
</div>
${faqBlock(qa)}
${related([L.treatment, L.highrisk, L.worse, L.cost, L.sidefx, L.test])}
${sourceList(list)}
<script type="application/json" id="triage-config">${JSON.stringify({ cta: SITE.cta.enabled ? { org: SITE.cta.org, url: SITE.cta.url, line: SITE.cta.line } : null })}</script>`;
    const description = "Is it too late to take Tamiflu? CDC says higher-risk, pregnant, and worsening patients should be treated at any point; healthy adults benefit most in the first 48 hours. Includes a quick check.";
    await emit("too-late-for-tamiflu.html", page({
      path: "too-late-for-tamiflu.html",
      title: "Is it too late for Tamiflu? The 48-hour rule explained",
      description, body, scripts: ["tamiflu-triage.js"],
      jsonld: [medPageLD("Is it too late for Tamiflu?", "too-late-for-tamiflu.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     2. How long is flu contagious?
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcSpread", "cdcWhenSick", "cdcSchoolSick", "cdcHcpResp", "cdcFluVsCovid", "cdcSigns", "hayden2018", "monto2025"]);
    const qa = [
      ["Am I still contagious after my fever breaks?", `You can be. CDC notes that you may still be able to spread the virus even when you feel better, which is why it advises 5 days of added precautions after you return to normal activities.${c("cdcWhenSick")}`],
      ["Can I go to work or school with flu if I have no fever?", `Not everyone with flu has a fever.${c("cdcSigns")} CDC's rule needs both: no fever for 24 hours without fever-reducing medicine, and symptoms improving overall for 24 hours.${c("cdcWhenSick")} If you have no fever but are still getting worse, stay home.`],
      ["Does Tamiflu make me less contagious?", `It has not been shown to. A 2025 trial noted that studies of oseltamivir-type drugs have not shown enough evidence that they prevent spread to others. The same trial found a single dose of baloxavir modestly lowered lab-confirmed spread in households.${c("monto2025")} Neither medicine changes CDC's return rule.${c("cdcWhenSick")}`],
      ["How long after exposure do flu symptoms start?", `Usually 1 to 4 days.${c("cdcFluVsCovid")} You can spread flu about a day before your own symptoms begin.${c("cdcSpread")}`],
      ["Is my child contagious longer?", `Possibly. CDC says young children and people with weakened immune systems may be contagious for longer.${c("cdcSpread")} Schools and childcare programs may also follow state or local rules in addition to CDC's.${c("cdcSchoolSick")}`],
    ];
    const row = (when, what, todo) => `<tr><td><b>${when}</b></td><td>${what}</td><td>${todo}</td></tr>`;
    const body = `${pageHead({
      eyebrow: "Contagious period",
      crumbs: crumbs("How long flu is contagious"),
      title: "How long is flu contagious, and when can I go back to work or school?",
      lede: "Flu spreads from about a day before symptoms until roughly 5 to 7 days after, and most easily in the first 3 days. CDC's return rule is based on how you feel, not a fixed number of days.",
      byline: clinicalByline(CHECKED, "CDC How Flu Spreads; CDC respiratory virus guidance, August 2025"),
    })}
<section class="section" style="margin-top:32px">
  <h2 class="h-small">Day by day</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>When</th><th>What is happening</th><th>What to do</th></tr></thead>
    <tbody>
    ${row("The day before symptoms", `You can already spread flu, before you know you are sick.${c("cdcSpread")}`, "You will not know yet. A yearly vaccine is the main protection.")}
    ${row("Days 1 to 3", `The most contagious stretch of the illness.${c("cdcSpread")}`, `Stay home and away from others, including people you live with who are not sick.${c("cdcWhenSick")}`)}
    ${row("Days 4 to 7", `Spread is still possible up to about 5 to 7 days after becoming sick.${c("cdcSpread")}`, "Stay home until the return rule below is met.")}
    ${row("Once you meet the return rule", `You may still be able to spread the virus even though you feel better.${c("cdcWhenSick")}`, `Go back to normal activities, then take added precautions for 5 days.${c("cdcWhenSick")}`)}
    ${row("Young children, weakened immune systems", `May be contagious for longer.${c("cdcSpread")} Some people with weakened immune systems can shed virus for a long time.${c("cdcWhenSick")}`, "Ask the clinician how long to keep precautions going.")}
    </tbody>
  </table></div>
</section>

<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">CDC's return rule</h2>
  <p>You can go back to normal activities, including work and school, when <b>for at least 24 hours both are true</b>:${c("cdcWhenSick")}</p>
  <ul>
    <li>your symptoms are getting better overall, and</li>
    <li>you have not had a fever, without using fever-reducing medicine.</li>
  </ul>
  <p>For the next 5 days, take added precautions when you are around other people: cleaner air, good hand and cough hygiene, a well-fitted mask, distance, or testing.${c("cdcWhenSick")}</p>
  <p>Fever-reducing medicine such as acetaminophen or ibuprofen can hide a fever, so the 24 hours count only when you have not taken it. <a href="symptom-relief.html">More on symptom relief</a>.</p>

  <h2>School and childcare</h2>
  <p>CDC uses the same rule for students and school staff: no fever for 24 hours without medicine, and symptoms improving for 24 hours.${c("cdcSchoolSick")} State and local health departments may have extra rules, and schools are told to follow them too.${c("cdcSchoolSick")} Daycare and childcare programs may have their own policies, so check before sending a child back.</p>

  <h2>Healthcare workers</h2>
  <p>The rule is stricter for people who work in healthcare. CDC's infection control guidance keeps them off work until at least 3 days have passed since symptoms started, they have been fever-free for 24 hours without medicine, symptoms are improving, and they feel well enough. They then wear a mask at work through the end of day 7.${c("cdcHcpResp")} Your employer's occupational health team has the final word.</p>

  <h2>Do antivirals make you less contagious?</h2>
  <p>What is known:</p>
  <ul>
    <li>In a large trial, a single dose of baloxavir lowered the amount of virus a day after starting more than oseltamivir or placebo did.${c("hayden2018")}</li>
    <li>In a 2025 household trial, people treated with baloxavir within 48 hours passed lab-confirmed flu to household members less often: 9.5% versus 13.4% with placebo by day 5. The difference in household members who actually got sick was smaller and could have been chance.${c("monto2025")}</li>
    <li>The same trial notes that studies of oseltamivir and related drugs have not shown enough evidence that they prevent spread to contacts.${c("monto2025")}</li>
  </ul>
  <p>What is not known: whether taking any antiviral means you can safely return sooner. CDC's return rule does not change if you take one.${c("cdcWhenSick")} You may see a claim that Tamiflu makes you contagious for one day less. FluHub could not trace that number to a primary study, so we do not repeat it as fact.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout"><p class="callout-title">${icon.info}The rule in one line</p><p>24 hours with no fever (without medicine) and feeling better overall, then 5 days of added precautions.${c("cdcWhenSick")}</p></div>
  <div class="callout warn"><p class="callout-title">${icon.alert}If you live with someone at high risk</p><p>Preventive antivirals within 48 hours of exposure may be an option for them. <a href="household.html">Someone in my house has flu</a></p></div>
</aside>
</div>
${faqBlock(qa)}
${related([L.household, L.late, L.relief, L.worse, L.test, L.ab])}
${sourceList(list)}`;
    const description = "How long flu is contagious, day by day, and CDC's rule for returning to work or school: 24 hours fever-free without medicine and improving, then 5 days of added precautions.";
    await emit("contagious.html", page({
      path: "contagious.html",
      title: "How long is flu contagious? Returning to work or school",
      description, body,
      jsonld: [medPageLD("How long influenza is contagious", "contagious.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     3. Antiviral cost and access
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcAntiviralClin", "tamifluLabel", "singlecareOseltamivir", "webmdrxOseltamivir", "genentechXofluzaDtp", "fdaGenericBaloxavir", "lachmanBaloxavir", "xofluzaLabel", "pharmacyTimesTestTreat"]);
    const qa = [
      ["How much does generic Tamiflu cost without insurance?", `It varies a lot by pharmacy and ZIP code. On October 5, 2026, two discount-card sites listed a 10-capsule course of generic oseltamivir 75 mg from about $13 to $30 with their coupons, and "full" or "original" prices from about $46 to $158.${c("singlecareOseltamivir", "webmdrxOseltamivir")} These are snapshots. Check the price for your own pharmacy before you go.`],
      ["Is there a cheaper Xofluza option?", `In October 2025 Genentech announced a $50 cash price for eligible patients through Alto Pharmacy and Cost Plus Drugs, and a coupon that can lower the price to as little as $35 at most pharmacies.${c("genentechXofluzaDtp")} Check whether the program is still running and whether you are eligible.`],
      ["Is generic Xofluza available?", `FDA approved the first generic baloxavir on June 17, 2026.${c("fdaGenericBaloxavir")} As of October 5, 2026, FluHub could not confirm that it is on pharmacy shelves or what it costs, and one regulatory consulting firm reported that a patent settlement may delay its launch.${c("lachmanBaloxavir")}`],
      ["My pharmacy is out of Tamiflu. What now?", `Call other pharmacies before you drive, ask about other capsule strengths, and ask whether the pharmacy can prepare a liquid from capsules. Tamiflu comes as 30, 45, and 75 mg capsules, and the label describes how a pharmacy can make a liquid from 75 mg capsules if the commercial liquid is unavailable.${c("tamifluLabel")} Your prescriber can send the prescription to a different pharmacy.`],
      ["Do I need a test to get a prescription?", `No. CDC advises that treatment should not wait for lab confirmation when flu is suspected.${c("cdcAntiviralClin")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Cost and access",
      crumbs: crumbs("Antiviral cost and access"),
      title: "Flu antiviral cost, and what to do when the pharmacy is out",
      lede: "The same generic Tamiflu course can cost very different amounts at different pharmacies. Here is how to check a price in a few minutes, what changed for Xofluza, and what to do if your pharmacy cannot fill the prescription.",
      byline: clinicalByline(CHECKED, "FDA labels and approvals; prices viewed October 5, 2026"),
    })}
<div id="shortage-badge"></div>
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">What a course is</h2>
  <p>For adults, oseltamivir treatment is 75 mg twice a day for 5 days: <b>10 capsules</b>.${c("tamifluLabel")} Asking for "generic oseltamivir 75 mg, quantity 10" is the simplest way to compare prices.</p>

  <h2>How to price-check in five minutes</h2>
  <ol>
    <li><b>Ask for the generic.</b> Generic oseltamivir has the same active ingredient as brand Tamiflu.</li>
    <li><b>Look up the 10-capsule price</b> on one or two discount-card sites for the pharmacies near you. Prices differ by pharmacy and ZIP code.</li>
    <li><b>Call ahead</b> to confirm the pharmacy has it in stock and will honor the price you found.</li>
    <li><b>If you have insurance,</b> ask the pharmacy to run it through your plan and also tell you the discount-card price, then pick the lower one.</li>
    <li><b>Ask about delivery</b> if you are too sick to go out. Some pharmacies deliver the same day.</li>
  </ol>

  <h2>Price snapshot</h2>
  <p>These are the prices two discount-card sites showed on one day, for their default location. They are not quotes and will not match your pharmacy exactly.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Site (viewed Oct 5, 2026)</th><th>Listed "full" or "original" price</th><th>With that site's coupon</th></tr></thead>
    <tbody>
      <tr><td>SingleCare${c("singlecareOseltamivir")}</td><td class="num">$158.48</td><td class="num">$12.89 to $25.86 across five chains</td></tr>
      <tr><td>WebMDRx${c("webmdrxOseltamivir")}</td><td class="num">$45.98 to $52.45</td><td class="num">$26.07 to $29.74 across three chains</td></tr>
    </tbody>
    <caption>Generic oseltamivir 75 mg, 10 capsules. Snapshot only: prices change daily and vary by ZIP code, pharmacy, and plan. FluHub has no affiliation with either site.</caption>
  </table></div>

  <h2>Xofluza (baloxavir)</h2>
  <p>Baloxavir is a single dose for people 5 and older who have had symptoms for no more than 48 hours.${c("fdaGenericBaloxavir")} It is not recommended during pregnancy or while breastfeeding.${c("cdcAntiviralClin")} It must not be taken with dairy, calcium-fortified drinks, or supplements containing calcium, iron, magnesium, or zinc.${c("xofluzaLabel")}</p>
  <ul>
    <li><b>Direct cash program.</b> In October 2025 Genentech announced a $50 cash price, about 70% below list price, for eligible patients who are uninsured, underinsured, or whose plans do not cover Xofluza. It is filled through Alto Pharmacy and Cost Plus Drugs. Amazon Pharmacy is also a program partner, and same-day delivery is available in some areas through Alto and Amazon.${c("genentechXofluzaDtp")}</li>
    <li><b>Coupon.</b> The same announcement described a coupon that brings the price to as little as $35 at most pharmacies for eligible patients.${c("genentechXofluzaDtp")}</li>
    <li><b>Generic.</b> FDA approved the first generic baloxavir on June 17, 2026.${c("fdaGenericBaloxavir")} FluHub could not confirm a launch date or price as of October 5, 2026. One regulatory consulting firm reported that a patent settlement may delay its launch for years.${c("lachmanBaloxavir")}</li>
  </ul>
  <p class="small muted">Program terms announced in 2025 may have changed. Check the manufacturer's current terms before relying on a price.</p>

  <h2>Insurance notes</h2>
  <ul>
    <li>Ask whether your plan covers the generic, and what your copay is.</li>
    <li>If your copay is higher than a discount-card price, ask the pharmacist about paying the cash price instead.</li>
    <li>If a brand medicine is not covered, ask your prescriber whether the generic or a different antiviral would work for you.</li>
  </ul>

  <h2 id="out">If the pharmacy is out</h2>
  <ul>
    <li><b>Call ahead</b> before driving to a second pharmacy. A pharmacy can run out locally even when no national shortage is listed.</li>
    <li><b>Ask about other capsule strengths.</b> Oseltamivir comes as 30, 45, and 75 mg capsules.${c("tamifluLabel")} Your prescriber may be able to rewrite the prescription using the strengths in stock.</li>
    <li><b>Ask about a compounded liquid.</b> The Tamiflu label includes instructions for a pharmacy to make an oral liquid from 75 mg capsules when the commercial liquid is not available.${c("tamifluLabel")}</li>
    <li><b>If swallowing is the problem,</b> the label allows capsules to be opened and mixed with a sweetened liquid such as chocolate syrup.${c("tamifluLabel")}</li>
    <li><b>Try delivery or mail-order pharmacies.</b></li>
    <li><b>Ask your prescriber to send the prescription to another pharmacy,</b> or ask the first pharmacy to transfer it.</li>
    <li><b>Ask about a different antiviral.</b> If oseltamivir cannot be found, a clinician may consider another option, such as baloxavir within 48 hours of symptoms for eligible patients.${c("fdaGenericBaloxavir", "cdcAntiviralClin")}</li>
  </ul>

  <h2>Ways to get a prescription quickly</h2>
  <p>Each option below can work. Cost depends on your insurance, your location, and the medicine, so FluHub does not rank them by price. You do not need a positive test first.${c("cdcAntiviralClin")}</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Option</th><th>Good to know</th></tr></thead>
    <tbody>
      <tr><td><b>Telehealth video visit</b></td><td>Done from home. Works when no exam or in-person test is needed. Not for emergencies.</td></tr>
      <tr><td><b>Pharmacist test-and-treat</b></td><td>Available in some states. As of July 2025, pharmacists in 42 states and DC could do point-of-care testing, and in 30 of those states and DC they could prescribe based on the result.${c("pharmacyTimesTestTreat")} Rules, ages, and services vary by state and pharmacy.</td></tr>
      <tr><td><b>Urgent care</b></td><td>Can test, examine, and check oxygen levels or a chest X-ray if needed.</td></tr>
      <tr><td><b>Your primary care clinician</b></td><td>Knows your history and medicines. Many offer same-day sick visits or phone advice.</td></tr>
    </tbody>
  </table></div>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  ${ctaBox(`Adults 18+ can see a board-certified physician by video for a flat fee. The physician decides whether an antiviral is appropriate; a visit may result in a prescription if appropriate, but it is not guaranteed. The medicine itself is paid separately at your pharmacy.`)}
  ${signsBox}
</aside>
</div>
${faqBlock(qa)}
${related([L.late, L.treatment, L.household, L.sidefx, L.test, L.contagious])}
${sourceList(list)}`;
    const description = "How to price-check generic Tamiflu, dated price snapshots, the Xofluza cash program, generic baloxavir status, and a checklist for when the pharmacy is out of stock.";
    await emit("antiviral-cost.html", page({
      path: "antiviral-cost.html",
      title: "Tamiflu and Xofluza cost, and what to do if the pharmacy is out",
      description, body,
      jsonld: [medPageLD("Influenza antiviral cost and access", "antiviral-cost.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     4. Someone in my house has flu
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcAntiviralClin", "idsa2018", "tamifluLabel", "xofluzaLabel", "fdaGenericBaloxavir", "cdcHighRisk", "cdcWhenSick", "cdcSpread", "cdcFluVsCovid", "monto2025", "cdcPregnantFactsheet", "cdcKeyFacts"]);
    const qa = [
      ["How soon do I need to start a preventive antiviral after exposure?", `As soon as possible, ideally no later than 48 hours after the exposure.${c("idsa2018")} Baloxavir is approved for prevention when given within 48 hours of contact.${c("cdcAntiviralClin")}`],
      ["How long do I take Tamiflu to prevent flu?", `Oseltamivir prevention is taken once a day, and CDC's recommended duration is 7 days after the last known exposure.${c("cdcAntiviralClin", "tamifluLabel")}`],
      ["Should everyone in the house take Tamiflu?", `Usually not. Guidelines focus preventive antivirals on people at very high risk of complications, and on unvaccinated household members of a very high-risk person. For others, a plan to start treatment early if symptoms appear is a reasonable alternative.${c("idsa2018")}`],
      ["Can I take Xofluza to prevent flu?", `Baloxavir is approved as a single dose for prevention in people 5 and older within 48 hours of contact.${c("cdcAntiviralClin")} It is not recommended during pregnancy or breastfeeding, or as the only antiviral for someone who is severely immunocompromised.${c("cdcAntiviralClin")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Household exposure",
      crumbs: crumbs("Someone in my house has flu"),
      title: "Someone in my house has flu. How do I keep the rest of us from getting it?",
      lede: "There is a 48-hour window to start a preventive antiviral after exposure, but it is not for everyone. Here is who should consider it, how the two pill options compare, and the steps that help everyone.",
      byline: clinicalByline(CHECKED, "CDC antiviral guidance, March 2026; IDSA 2018"),
    })}
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <div class="callout warn"><p class="callout-title">${icon.alert}The clock starts at exposure</p><p>Preventive antivirals should start as soon as possible, ideally within 48 hours of contact with the sick person.${c("idsa2018")} If someone at very high risk lives with you, call their clinician today.</p></div>

  <h2>Who should consider a preventive antiviral</h2>
  <p>The IDSA guideline says clinicians can consider preventive treatment after a household exposure for:${c("idsa2018")}</p>
  <ul>
    <li>adults and children 3 months and older who are at <b>very high risk</b> of complications, such as people who are severely immunocompromised, especially when the vaccine is not an option or may not work well; and</li>
    <li>unvaccinated household members of someone at very high risk, along with getting them vaccinated.</li>
  </ul>
  <p>For people at higher risk more broadly, such as those 65 and older, pregnant people, or people with conditions like asthma, diabetes, or heart disease, ask a clinician the same day.${c("cdcHighRisk")} An alternative the guideline also supports is to agree on a plan to start treatment right away if symptoms appear.${c("idsa2018")}</p>
  <p>Children who were exposed should be assessed by their pediatrician.</p>

  <h2>Two options compared</h2>
  <div class="table-wrap"><table>
    <thead><tr><th></th><th>Oseltamivir (Tamiflu, generic)</th><th>Baloxavir (Xofluza, generic)</th></tr></thead>
    <tbody>
      <tr><td><b>How taken</b></td><td>Once a day by mouth${c("tamifluLabel")}</td><td>One dose by mouth${c("cdcAntiviralClin")}</td></tr>
      <tr><td><b>How long</b></td><td>7 days after the last known exposure${c("cdcAntiviralClin")}</td><td>Single dose, within 48 hours of contact${c("cdcAntiviralClin")}</td></tr>
      <tr><td><b>Ages</b></td><td>CDC supports prevention from 3 months of age; children are dosed by weight${c("cdcAntiviralClin")}</td><td>5 years and older${c("fdaGenericBaloxavir")}</td></tr>
      <tr><td><b>Not recommended</b></td><td>Doses are reduced for kidney disease${c("tamifluLabel")}</td><td>During pregnancy, while breastfeeding, or alone for someone severely immunocompromised${c("cdcAntiviralClin")}</td></tr>
      <tr><td><b>Watch out for</b></td><td>Nausea; taking it with food helps${c("tamifluLabel")}</td><td>Do not take with dairy, calcium-fortified drinks, antacids, or supplements with calcium, iron, magnesium, or zinc${c("xofluzaLabel")}</td></tr>
    </tbody>
  </table></div>
  <p class="small muted">The Tamiflu label lists a longer course for household prevention than CDC does; FluHub follows CDC's 7 days.${c("cdcAntiviralClin")}</p>

  <h2>Treating the sick person may also help</h2>
  <p>In a 2025 trial, people with flu who took a single dose of baloxavir within 48 hours passed lab-confirmed flu to household members less often than those given placebo (9.5% versus 13.4% by day 5). The difference in household members who developed symptoms was smaller and not statistically clear.${c("monto2025")}</p>

  <h2>Steps that help everyone</h2>
  <ul>
    <li><b>Separate.</b> The sick person should stay home and away from others, including people they live with who are not sick.${c("cdcWhenSick")}</li>
    <li><b>Cleaner air.</b> Take steps for cleaner air in shared spaces.${c("cdcWhenSick")}</li>
    <li><b>Masks and hygiene.</b> A well-fitted mask for the sick person around others, frequent handwashing, and covering coughs.${c("cdcWhenSick")}</li>
    <li><b>Mind the timing.</b> The sick person is most contagious in the first 3 days, and household members usually get sick 1 to 4 days after exposure if they are infected.${c("cdcSpread", "cdcFluVsCovid")}</li>
    <li><b>Vaccinate.</b> A flu shot takes about two weeks to build protection, so it will not stop an infection from this exposure, but vaccination is still worthwhile while flu is circulating.${c("cdcKeyFacts")} Everyone who cares for a baby should be vaccinated.${c("cdcPregnantFactsheet")} <a href="vaccines.html">Flu vaccines</a>.</li>
    <li><b>A note on the nasal spray vaccine.</b> It should not be given within 48 hours after oseltamivir or 17 days after baloxavir, because the antiviral can stop it working.${c("cdcAntiviralClin")} The shot is not affected.</li>
  </ul>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  ${ctaBox("Adults 18+ who were exposed at home and are at higher risk can ask a physician by video whether a preventive antiviral makes sense. A visit may result in a prescription if appropriate; it is not guaranteed. Children should see their pediatrician.")}
  <div class="callout"><p class="callout-title">${icon.info}If you get sick anyway</p><p>Start the clock again: treatment works best within 48 hours of your own symptoms. <a href="too-late-for-tamiflu.html">Is it too late?</a></p></div>
</aside>
</div>
${faqBlock(qa)}
${related([L.contagious, L.late, L.cost, L.highrisk, L.preg, L.vaccines])}
${sourceList(list)}`;
    const description = "Someone at home has flu: who should take a preventive antiviral within 48 hours, 7-day oseltamivir vs. single-dose baloxavir, who should not take baloxavir, and steps for the whole household.";
    await emit("household.html", page({
      path: "household.html",
      title: "Someone in my house has flu: preventive Tamiflu and other steps",
      description, body,
      jsonld: [medPageLD("Preventing influenza after household exposure", "household.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     5. Getting worse, or fever came back
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcSigns", "cdcAboutFlu", "idsa2018", "cdcAntiviralClin", "cdcTreatPatient"]);
    const qa = [
      ["My fever came back after I finished Tamiflu. Is that normal?", `Treat it as a warning sign, not as something to wait out. CDC lists a fever or cough that improves and then returns or worsens as a reason to get medical care right away.${c("cdcSigns")} IDSA advises clinicians to look for a bacterial infection in people who get worse after first improving, particularly if they were treated with antivirals.${c("idsa2018")}`],
      ["Can flu turn into pneumonia?", `Yes. Pneumonia can come from the flu virus itself or from a bacterial infection on top of flu.${c("cdcSigns")} Bacterial pneumonia is one of the listed complications of flu.${c("cdcAboutFlu")}`],
      ["I have been sick for a week and I am not getting better. What should I do?", `See a clinician. IDSA suggests looking for a bacterial infection in people who fail to improve after 3 to 5 days of antiviral treatment, and CDC recommends antivirals for progressive illness at any point.${c("idsa2018", "cdcAntiviralClin")}`],
    ];
    const list2 = (items) => `<ul style="margin:0;padding-left:1.2em;display:grid;gap:4px">${items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;
    const body = `${pageHead({
      eyebrow: "When flu changes course",
      crumbs: crumbs("Getting worse, or fever came back"),
      title: "Flu getting worse, or the fever came back",
      lede: "Most people improve steadily. Feeling better and then worse again, or not improving at all, can mean a complication such as pneumonia. Here is when that needs care today.",
      byline: clinicalByline(CHECKED, "CDC warning signs; IDSA 2018"),
    })}
<div class="callout crit" style="margin-top:28px"><p class="callout-title">${icon.alert}Call 911 or go to an emergency department now</p><p>for trouble breathing, chest pain or pressure, confusion or trouble waking, a seizure, not urinating, or bluish lips. Telehealth and urgent care are not the right place for these. <a href="warning-signs.html">Full list of warning signs</a>${c("cdcSigns")}</p></div>
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">Three patterns that need attention</h2>
  <h3>1. Better, then worse again</h3>
  <p>A fever or cough that improves and then comes back or gets worse is one of CDC's emergency warning signs, in adults and in children.${c("cdcSigns")} It can mean a second infection, often bacterial, has set in. IDSA advises clinicians to check for and treat a bacterial infection in people who get worse after first improving, particularly those who already took an antiviral.${c("idsa2018")} This is sometimes called a "second sickening."</p>
  <p>A fever that returns after a course of Tamiflu falls in this group. Get seen the same day.</p>
  <h3>2. Not improving</h3>
  <p>Most people recover in a few days to less than two weeks.${c("cdcSigns")} If you are not improving after 3 to 5 days of antiviral treatment, IDSA suggests clinicians consider a bacterial infection.${c("idsa2018")} Without an antiviral, a week of steady or worsening illness is also worth a visit.</p>
  <h3>3. Steadily getting worse</h3>
  <p>CDC recommends antiviral treatment for anyone whose illness is severe, complicated, or progressive, no matter how many days it has lasted.${c("cdcAntiviralClin")} <a href="too-late-for-tamiflu.html">Is it too late for Tamiflu?</a></p>

  <h2>What the complication might be</h2>
  <ul>
    <li><b>Pneumonia</b> from the flu virus itself, or from bacteria on top of flu.${c("cdcSigns")} The bacteria most often involved are <i>Staphylococcus aureus</i> (including MRSA), <i>Streptococcus pneumoniae</i>, and group A strep.${c("idsa2018")}</li>
    <li><b>Ear and sinus infections.</b>${c("cdcAboutFlu", "cdcSigns")}</li>
    <li><b>A flare of a long-term condition</b> such as heart failure, asthma, or diabetes.${c("cdcAboutFlu")}</li>
    <li><b>Less common:</b> inflammation of the heart, brain, or muscles, and sepsis.${c("cdcSigns")}</li>
  </ul>
  <p>Antibiotics do not treat flu itself. They are used when a clinician finds a bacterial complication.${c("cdcTreatPatient")}</p>

  <h2>Where to go</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>Situation</th><th>Where</th></tr></thead>
    <tbody>
      <tr><td>Any emergency warning sign</td><td>Emergency department, or call 911</td></tr>
      <tr><td>Better, then worse again, without trouble breathing</td><td>In-person care today: urgent care or your clinician, where you can be examined and checked for pneumonia</td></tr>
      <tr><td>Not improving after several days</td><td>Your clinician or urgent care, today or tomorrow</td></tr>
      <tr><td>A child with any of these</td><td>The child's pediatrician today, or an emergency department for warning signs</td></tr>
    </tbody>
  </table></div>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="panel" style="display:grid;gap:10px;border-color:var(--critical)"><h3>Warning signs in adults</h3>${list2(ADULT_SIGNS)}</div>
  <div class="panel" style="display:grid;gap:10px;border-color:var(--critical)"><h3>Warning signs in children</h3>${list2(CHILD_SIGNS)}<p class="small muted">From CDC.${c("cdcSigns")}</p></div>
</aside>
</div>
${faqBlock(qa)}
${related([L.warning, L.late, L.cough, L.treatment, L.highrisk, L.symptoms])}
${sourceList(list)}`;
    const description = "Flu getting worse after getting better, a fever that came back, or no improvement: signs of pneumonia and other complications, and where to go today.";
    await emit("getting-worse.html", page({
      path: "getting-worse.html",
      title: "Flu getting worse or fever came back: when to get care",
      description, body,
      jsonld: [medPageLD("Worsening influenza and complications", "getting-worse.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     6. Tamiflu side effects
     ===================================================================== */
  {
    const { list, c } = refSet(["tamifluLabel", "antoon2025", "cdcAntiviralClin", "cdcAntiviralPatient"]);
    const qa = [
      ["What are the most common side effects of Tamiflu?", `Nausea and vomiting. In adult treatment trials, nausea affected about 10% and vomiting about 8% of people; in children, vomiting affected 16% compared with 8% on placebo.${c("tamifluLabel")}`],
      ["Should I take Tamiflu with food?", `It can be taken with or without food, but the label says it may be better tolerated with food.${c("tamifluLabel")}`],
      ["Can Tamiflu cause hallucinations or strange behavior in kids?", `The label describes rare reports of delirium and abnormal behavior in people with flu taking Tamiflu, and says the drug's role has not been established. Flu itself can cause these symptoms.${c("tamifluLabel")} A 2025 study of 692,295 children found serious neuropsychiatric events were about half as common during treated flu as during untreated flu.${c("antoon2025")}`],
      ["When should I stop Tamiflu and get help?", `Get care right away for signs of a serious allergic or skin reaction, such as swelling, trouble breathing, or a blistering or peeling rash, or for confusion or unusual behavior.${c("tamifluLabel")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Medicine safety",
      crumbs: crumbs("Tamiflu side effects"),
      title: "Tamiflu (oseltamivir) side effects",
      lede: "Most people have no side effects or mild stomach upset. The behavior warning on the label is real, but the best recent evidence suggests flu itself, not the medicine, drives most of that risk.",
      byline: clinicalByline(CHECKED, "Tamiflu FDA label; JAMA Neurology 2025"),
    })}
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">Common side effects</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>Side effect</th><th>How often (treatment trials)</th></tr></thead>
    <tbody>
      <tr><td>Nausea, adults</td><td class="num">About 10%${c("tamifluLabel")}</td></tr>
      <tr><td>Vomiting, adults</td><td class="num">About 8%${c("tamifluLabel")}</td></tr>
      <tr><td>Headache, adults</td><td class="num">About 2%${c("tamifluLabel")}</td></tr>
      <tr><td>Vomiting, children</td><td class="num">16%, versus 8% on placebo${c("tamifluLabel")}</td></tr>
    </tbody>
  </table></div>
  <p>Taking each dose with food may make it easier to tolerate.${c("tamifluLabel")} CDC also lists nausea and vomiting as the most common side effects.${c("cdcAntiviralPatient")}</p>

  <h2>Rare but serious</h2>
  <ul>
    <li><b>Allergic and skin reactions.</b> Anaphylaxis and serious skin reactions, including Stevens-Johnson syndrome, have been reported. Stop the medicine and get care right away for swelling of the face or throat, trouble breathing, or a blistering or peeling rash.${c("tamifluLabel")}</li>
    <li><b>Confusion or unusual behavior.</b> See below.</li>
  </ul>

  <h2>The behavior warning, in context</h2>
  <p>The FDA label says there have been reports after approval of delirium and abnormal behavior leading to injury, in some cases fatal, in people with flu who were taking Tamiflu. It also says "the contribution of TAMIFLU to these events has not been established," and that flu itself "can be associated with a variety of neurologic and behavioral symptoms," including hallucinations, delirium, and abnormal behavior.${c("tamifluLabel")} Most reports came from children in Japan.${c("cdcAntiviralClin")}</p>
  <p>A large 2025 study helps separate the two. Vanderbilt researchers followed 692,295 children and teens aged 5 to 17 in Tennessee Medicaid over several flu seasons and counted serious neurologic and psychiatric events that led to a hospital stay.${c("antoon2025")}</p>
  <ul>
    <li>Compared with flu that was not treated, these events were about half as common while flu was being treated with oseltamivir (rate ratio 0.53).${c("antoon2025")}</li>
    <li>The lower rate was driven mostly by fewer neurologic events rather than psychiatric ones.${c("antoon2025")}</li>
    <li>The authors concluded the findings support oseltamivir for preventing these flu-related complications.${c("antoon2025")}</li>
  </ul>
  <p>This was an observational study, so it cannot prove cause and effect, and the label warning still stands. The practical advice is the same either way: watch anyone with flu, especially a child or teen, for sudden confusion or unusual behavior, and get care right away if it happens.${c("tamifluLabel")}</p>

  <h2>Other things to know</h2>
  <ul>
    <li>The nasal spray flu vaccine should not be given within 2 weeks before or 48 hours after Tamiflu unless a clinician decides it is needed. The shot is not affected.${c("tamifluLabel")}</li>
    <li>Tamiflu does not replace the yearly flu vaccine.${c("tamifluLabel")}</li>
    <li>People with kidney disease usually need a lower dose.${c("tamifluLabel")}</li>
  </ul>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout warn"><p class="callout-title">${icon.alert}Get care right away for</p><p>sudden confusion, hallucinations, or unusual behavior; a seizure; swelling of the face or throat; or a blistering rash.${c("tamifluLabel")}</p></div>
  <div class="callout"><p class="callout-title">${icon.info}For a child</p><p>Call the child's pediatrician with any questions about side effects or dosing.</p></div>
</aside>
</div>
${faqBlock(qa)}
${related([L.treatment, L.late, L.cost, L.preg, L.worse, L.warning])}
${sourceList(list)}`;
    const description = "Tamiflu side effects: how often nausea and vomiting happen, taking it with food, and the FDA behavior warning alongside a 2025 study of 692,295 children.";
    await emit("tamiflu-side-effects.html", page({
      path: "tamiflu-side-effects.html",
      title: "Tamiflu side effects, including the behavior warning in context",
      description, body,
      jsonld: [medPageLD("Oseltamivir side effects", "tamiflu-side-effects.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     7. Home flu/COVID test: now what?
     ===================================================================== */
  {
    const { list, c } = refSet(["fdaHomeTest", "fdaAntigenResults", "cdcRidt", "cdcTestingGuide", "cdcAntiviralClin", "cdcFluVsCovid", "cdcHighRisk", "cdcWhenSick"]);
    const qa = [
      ["I tested positive for flu at home. Do I need another test?", `Usually not. CDC says testing is not required to prescribe an antiviral, and treatment should not be delayed for results.${c("cdcTestingGuide")} Tell the clinician which test you used and when.`],
      ["My home test is negative but I feel awful. Could it still be flu?", `Yes. Rapid antigen tests miss many flu cases, so a negative result does not rule flu out.${c("cdcRidt")} FDA advises that people who test negative and still have symptoms may have flu, COVID-19, or another infection and should follow up with a clinician.${c("fdaHomeTest")}`],
      ["Should I test again?", `For COVID-19, FDA recommends testing again 48 hours after a negative antigen test if you have symptoms, for at least two tests.${c("fdaAntigenResults")} For flu, if you are in a higher-risk group, call a clinician rather than waiting on a second test.${c("cdcAntiviralClin")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Testing at home",
      crumbs: crumbs("Home flu or COVID test: now what?"),
      title: "Home flu or COVID test: what your result means and what to do next",
      lede: "A home test can point you to the right treatment, but a negative result does not rule out flu. Here is what to do with each result.",
      byline: clinicalByline(CHECKED, "FDA home test authorizations; CDC testing guidance"),
    })}
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">If your test is positive for flu</h2>
  <ul>
    <li><b>Higher risk, pregnant, or getting worse:</b> contact a clinician today. CDC recommends antiviral treatment as soon as possible for these groups.${c("cdcAntiviralClin")} <a href="high-risk.html">Who is higher risk</a>.${c("cdcHighRisk")}</li>
    <li><b>Healthy adult within 2 days of symptoms:</b> an antiviral is an option you can ask about.${c("cdcAntiviralClin")}</li>
    <li><b>Healthy and past 2 days, improving:</b> rest at home and watch for <a href="warning-signs.html">warning signs</a>.</li>
    <li><b>A child:</b> call the child's pediatrician.</li>
  </ul>
  <p>A home test does not come with a prescription. You still need a clinician, and you do not need a second test first: CDC says testing is not required to prescribe an antiviral.${c("cdcTestingGuide")}</p>

  <h2>If your test is positive for COVID-19</h2>
  <p>COVID-19 has its own antiviral treatments, which need to start within 5 to 7 days of symptoms.${c("cdcFluVsCovid")} Contact a clinician, especially if you are older or have a higher-risk condition.</p>

  <h2>If your test is negative but you have symptoms</h2>
  <p>Do not take a negative result as the final word. Rapid antigen flu tests miss many cases: CDC lists sensitivity of about 53% to 54% for antigen tests read by eye.${c("cdcRidt")} FDA advises that anyone who tests negative and still has fever, cough, or shortness of breath may have flu, COVID-19, or another infection and should follow up.${c("fdaHomeTest")}</p>
  <ul>
    <li><b>Higher risk:</b> call a clinician anyway. Treatment decisions should not wait for a positive test.${c("cdcAntiviralClin")}</li>
    <li><b>Checking for COVID-19:</b> test again 48 hours later, for at least two tests.${c("fdaAntigenResults")}</li>
    <li><b>Everyone:</b> stay home until you meet CDC's return rule, whatever the result.${c("cdcWhenSick")} <a href="contagious.html">How long flu is contagious</a>.</li>
  </ul>

  <h2>Test types and their limits</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>Test</th><th>What it tells you</th><th>Limits</th></tr></thead>
    <tbody>
      <tr><td><b>Home antigen, flu and COVID-19 combination</b></td><td>Separate results for flu A, flu B, and COVID-19 in about 15 minutes. The first combination test authorized outside emergency use was cleared in 2024.${c("fdaHomeTest")}</td><td>Lower sensitivity than molecular tests, so false negatives happen.${c("fdaHomeTest")}</td></tr>
      <tr><td><b>Rapid antigen in a clinic</b></td><td>Flu A and B, often read by a device.</td><td>About 76% to 80% sensitive with a reader device.${c("cdcRidt")}</td></tr>
      <tr><td><b>Molecular (PCR-type)</b></td><td>Flu, and often COVID-19 and RSV.</td><td>More accurate; usually done in a clinic, pharmacy, or lab.${c("cdcTestingGuide")}</td></tr>
    </tbody>
  </table></div>
  <p>A home test result also helps you protect others: if you live with someone at high risk, a positive flu result is a reason to ask about <a href="household.html">preventive antivirals for them</a>.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  ${ctaBox("Adults 18+ with a positive flu test, or flu symptoms and a negative test, can see a physician by video today to decide whether an antiviral fits. A visit may result in a prescription if appropriate; it is not guaranteed.")}
  ${signsBox}
</aside>
</div>
${faqBlock(qa)}
${related([L.testing, L.late, L.household, L.contagious, L.highrisk, L.ab])}
${sourceList(list)}`;
    const description = "What to do after a home flu or COVID test: positive results, negative results when you still feel sick or are higher risk, and how accurate each test type is.";
    await emit("home-test.html", page({
      path: "home-test.html",
      title: "Home flu or COVID test results: what to do next",
      description, body,
      jsonld: [medPageLD("Home influenza and COVID-19 test results", "home-test.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     8. Lingering cough and post-flu fatigue
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcSigns", "liang2024", "cdcAboutFlu", "cdcWhenSick"]);
    const qa = [
      ["How long does a cough last after flu?", `Most people recover from flu within a few days to less than two weeks.${c("cdcSigns")} A cough that lingers after a respiratory infection is common: it affects about 11% to 25% of adults and can last 3 to 8 weeks.${c("liang2024")}`],
      ["Will an inhaler or cough medicine make it go away faster?", `Reviews of trials of inhaled steroids, bronchodilators, and oral medicines for this kind of cough found no evidence of benefit. Most cases settle without treatment.${c("liang2024")}`],
      ["When is a lingering cough a problem?", `See a clinician if you cough up blood, have trouble swallowing, are very short of breath, have a hoarse voice, or have whole-body symptoms such as fever or weight loss. A cough lasting more than 8 weeks needs a check-up.${c("liang2024")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Recovery",
      crumbs: crumbs("Lingering cough and tiredness"),
      title: "Lingering cough and tiredness after flu",
      lede: "The fever is gone but the cough hangs on, and you still feel worn out. That is common. Here is what a normal recovery looks like and which symptoms mean you should be checked.",
      byline: clinicalByline(CHECKED, "CDC flu symptoms; CMAJ 2024"),
    })}
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">A normal recovery</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>Time since symptoms began</th><th>What is typical</th></tr></thead>
    <tbody>
      <tr><td>First few days to 2 weeks</td><td>Most people recover from flu in this window.${c("cdcSigns")}</td></tr>
      <tr><td>3 to 8 weeks</td><td>A leftover cough is common: 11% to 25% of adults have one after a respiratory infection. The infection leaves the airways more sensitive and making more mucus for a while.${c("liang2024")}</td></tr>
      <tr><td>More than 8 weeks</td><td>No longer considered a post-infection cough. It needs a check for other causes such as asthma or COPD.${c("liang2024")}</td></tr>
    </tbody>
  </table></div>

  <h2>Easing the cough</h2>
  <p>Reviews of clinical trials found no proof that inhaled steroids, inhalers that open the airways, or oral medicines speed up recovery from this kind of cough. Knowing it is expected and will pass is the main treatment.${c("liang2024")} For short-term relief of other symptoms, see <a href="symptom-relief.html">symptom relief</a>.</p>

  <h2>Tiredness</h2>
  <p>Fatigue is one of flu's main symptoms.${c("cdcSigns")} Feeling worn out for a while after the fever ends is common, and most people recover within a few days to less than two weeks.${c("cdcSigns")}</p>
  <p>Rarely, flu can inflame the heart muscle or lead to other serious complications.${c("cdcSigns")} Tiredness together with chest pain, shortness of breath, a racing or irregular heartbeat, or fainting is not normal recovery and should be checked promptly.</p>

  <h2>Red flags: get checked</h2>
  <ul>
    <li>A fever or cough that improved and then came back or got worse. This is a CDC emergency warning sign.${c("cdcSigns")} <a href="getting-worse.html">Getting worse after getting better</a>.</li>
    <li>Coughing up blood, trouble swallowing, marked shortness of breath, a hoarse voice, or whole-body symptoms such as fever or weight loss.${c("liang2024")}</li>
    <li>Coughing fits, vomiting after coughing, or a "whoop" when breathing in, which can be whooping cough.${c("liang2024")}</li>
    <li>A cough lasting more than 8 weeks.${c("liang2024")}</li>
    <li>A long-term condition such as asthma, COPD, heart failure, or diabetes that is getting worse.${c("cdcAboutFlu")}</li>
  </ul>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  ${signsBox}
  <div class="callout"><p class="callout-title">${icon.info}Back to work?</p><p>CDC's return rule is based on fever and whether your symptoms are improving overall.${c("cdcWhenSick")} <a href="contagious.html">How long flu is contagious</a></p></div>
</aside>
</div>
${faqBlock(qa)}
${related([L.worse, L.contagious, L.relief, L.warning, L.ab, L.symptoms])}
${sourceList(list)}`;
    const description = "How long a cough and tiredness last after flu, why a post-infection cough can linger 3 to 8 weeks, and the red flags that mean you should see a clinician.";
    await emit("lingering-cough.html", page({
      path: "lingering-cough.html",
      title: "Lingering cough and fatigue after flu: what is normal",
      description, body,
      jsonld: [medPageLD("Lingering cough and fatigue after influenza", "lingering-cough.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     9. Pregnancy and breastfeeding
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcPregnantFactsheet", "cdcHighRisk", "cdcAntiviralClin", "cdcBreastfeedingFlu", "tamifluLabel", "cdcVaxPregnancy", "acogAcetaminophen", "fdaAcetaminophenPreg", "advilLabel"]);
    const qa = [
      ["Is Tamiflu safe during pregnancy?", `Oral oseltamivir (Tamiflu) is CDC's preferred flu treatment during pregnancy, at the same dose as for people who are not pregnant.${c("cdcAntiviralClin")} CDC says it has the most studies suggesting it is safe and beneficial in pregnancy.${c("cdcPregnantFactsheet")}`],
      ["Can I take Xofluza while pregnant or breastfeeding?", `CDC does not recommend baloxavir (Xofluza) for flu treatment during pregnancy or while breastfeeding.${c("cdcAntiviralClin")}`],
      ["Can I keep breastfeeding if I have flu?", `Yes. CDC says mothers with flu can keep breastfeeding. Wash your hands before touching the baby, consider a mask, and if you express milk, have a healthy caregiver feed it if possible. Oral oseltamivir is the preferred antiviral while breastfeeding.${c("cdcBreastfeedingFlu")}`],
      ["Which flu vaccine should I get while pregnant?", `A flu shot, in any trimester, not the nasal spray vaccine.${c("cdcVaxPregnancy", "cdcPregnantFactsheet")} It also helps protect your baby for the first several months after birth.${c("cdcVaxPregnancy")}`],
    ];
    const pregSigns = ["Difficulty breathing or shortness of breath", "Pain or pressure in the chest or abdomen", "Sudden dizziness or confusion", "Severe or persistent vomiting", "High fever that is not responding to acetaminophen", "Decreased or no movement of your baby"];
    const body = `${pageHead({
      eyebrow: "Pregnancy",
      crumbs: crumbs("Flu in pregnancy and breastfeeding"),
      title: "Flu in pregnancy and while breastfeeding",
      lede: "Pregnancy, and the two weeks after it ends, raise the risk of severe flu. Call your prenatal care team as soon as symptoms start: prompt treatment is recommended, and the preferred medicine is well studied in pregnancy.",
      byline: clinicalByline(CHECKED, "CDC antiviral and pregnancy guidance; ACOG"),
    })}
<div class="callout crit" style="margin-top:28px"><p class="callout-title">${icon.alert}If you are pregnant, call 911 or go to an emergency department for</p>
<ul style="margin:0;padding-left:1.2em">${pregSigns.map((s) => `<li>${esc(s)}</li>`).join("")}</ul><p class="small">From CDC.${c("cdcPregnantFactsheet")} <a href="warning-signs.html">All warning signs</a></p></div>
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">Why pregnancy changes the plan</h2>
  <p>Changes in the immune system, heart, and lungs during pregnancy make severe flu more likely, even in people who are otherwise healthy.${c("cdcPregnantFactsheet")} CDC counts people who are pregnant or within 2 weeks after the end of a pregnancy as a higher-risk group.${c("cdcHighRisk")}</p>

  <h2>Treatment</h2>
  <ul>
    <li><b>Call early.</b> CDC recommends that pregnant people be treated quickly with an antiviral if they get flu symptoms, even if they had a flu shot.${c("cdcPregnantFactsheet")} Treatment is recommended as soon as possible for higher-risk groups, even after the first 48 hours.${c("cdcAntiviralClin")}</li>
    <li><b>Oseltamivir is preferred,</b> at the same dose as for anyone else.${c("cdcAntiviralClin")}</li>
    <li><b>Baloxavir (Xofluza) is not recommended</b> during pregnancy or while breastfeeding.${c("cdcAntiviralClin")}</li>
    <li><b>No test needed first.</b> Treatment should not wait for a test result.${c("cdcAntiviralClin")}</li>
  </ul>

  <h2>Fever</h2>
  <p>Fever early in pregnancy raises the chance of birth defects and other problems. Acetaminophen (Tylenol) can bring a fever down, but call your clinician too.${c("cdcPregnantFactsheet")}</p>
  <p>In September 2025 FDA began a label change about a possible link between acetaminophen in pregnancy and autism or ADHD, while noting that a causal relationship has not been established.${c("fdaAcetaminophenPreg")} ACOG responded that untreated fever and pain can be harmful in pregnancy and that acetaminophen remains an important and safe option.${c("acogAcetaminophen")} Talk with your prenatal care team about any questions.</p>
  <p>Avoid ibuprofen at 20 weeks or later unless a doctor specifically tells you to take it.${c("advilLabel")} <a href="symptom-relief.html">More on symptom relief</a>.</p>

  <h2>Breastfeeding</h2>
  <ul>
    <li>You can keep breastfeeding with flu. Breast milk remains the recommended food for your baby.${c("cdcBreastfeedingFlu")}</li>
    <li>Wash your hands before touching the baby or anything the baby will touch, and wear a mask to reduce spread. If you express milk, have a healthy caregiver feed it if possible.${c("cdcBreastfeedingFlu")}</li>
    <li>Oral oseltamivir is the preferred antiviral while breastfeeding. Very little passes into breast milk, and side effects in the baby are unlikely.${c("cdcBreastfeedingFlu", "tamifluLabel")}</li>
  </ul>

  <h2>Vaccination</h2>
  <ul>
    <li>Get a flu shot in any trimester. Use the injectable vaccine, not the nasal spray.${c("cdcVaxPregnancy", "cdcPregnantFactsheet")}</li>
    <li>Flu shots have been given to millions of pregnant people over more than 50 years with an excellent safety record.${c("cdcVaxPregnancy")}</li>
    <li>Vaccination in pregnancy helps protect your baby from flu for the first several months after birth, when the baby is too young to be vaccinated. Antibodies also pass through breast milk.${c("cdcVaxPregnancy")}</li>
    <li>If your baby arrives before you are vaccinated, you still need the vaccine, and so does everyone who cares for the baby.${c("cdcPregnantFactsheet")}</li>
  </ul>
  <p><a href="vaccines.html">This season's flu vaccines</a>.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout"><p class="callout-title">${icon.info}Your first call</p><p>Your obstetrician, midwife, or prenatal clinic knows your pregnancy and is the best first call when flu symptoms start.</p></div>
  ${ctaBox("If you cannot reach your prenatal care team and you have no warning signs, a physician can evaluate adult flu symptoms by video and decide whether oseltamivir is appropriate. A visit may result in a prescription if appropriate; it is not guaranteed. Telehealth is not for the emergency signs listed above.")}
</aside>
</div>
${faqBlock(qa)}
${related([L.late, L.treatment, L.household, L.relief, L.vaccines, L.warning])}
${sourceList(list)}`;
    const description = "Flu during pregnancy and breastfeeding: why prompt treatment matters, oseltamivir preferred and baloxavir not recommended, fever, vaccines in any trimester, and when to go to the ER.";
    await emit("pregnancy.html", page({
      path: "pregnancy.html",
      title: "Flu in pregnancy and breastfeeding: treatment and warning signs",
      description, body,
      jsonld: [medPageLD("Influenza in pregnancy and breastfeeding", "pregnancy.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     10. OTC symptom relief
     ===================================================================== */
  {
    const { list, c } = refSet(["fdaAcetaminophen", "tylenolLabel", "advilLabel", "sudafedLabel", "fdaPhenylephrine", "aspirinLabel", "medlineReye", "cdcWhenSick"]);
    const qa = [
      ["Should I take acetaminophen or ibuprofen for flu?", `Either can ease fever and aches. Acetaminophen has a firm daily limit to protect the liver.${c("fdaAcetaminophen")} Ibuprofen carries warnings about stomach bleeding, heart attack, stroke, and kidney problems, so check with a clinician first if you have high blood pressure, heart disease, kidney disease, or a history of ulcers.${c("advilLabel")}`],
      ["What is the most acetaminophen an adult can take in a day?", `FDA's maximum for adults is 4,000 mg a day from all medicines combined. Many cold and flu products also contain acetaminophen, so count every one.${c("fdaAcetaminophen")} Some product labels set a lower daily limit; follow your label.${c("tylenolLabel")}`],
      ["Can I take a decongestant if I have high blood pressure?", `Ask a clinician or pharmacist first. Pseudoephedrine labels say to ask a doctor before use if you have high blood pressure, heart disease, thyroid disease, diabetes, or trouble urinating from an enlarged prostate.${c("sudafedLabel")}`],
      ["Why can't teenagers take aspirin for flu?", `Aspirin in children and teenagers with flu or chickenpox is linked to Reye syndrome, a rare but serious illness affecting the liver and brain.${c("aspirinLabel", "medlineReye")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Feeling better at home",
      crumbs: crumbs("Symptom relief"),
      title: "Flu symptom relief: what to take, and how much",
      lede: "Over-the-counter medicines do not cure flu, but they can make the days easier. The main risks come from doubling up on the same ingredient and from decongestants in people with high blood pressure.",
      byline: clinicalByline(CHECKED, "FDA consumer guidance; Drug Facts labels"),
    })}
<div class="callout warn" style="margin-top:28px"><p class="callout-title">${icon.alert}No aspirin for children or teenagers</p><p>Children and teenagers who have or are recovering from flu-like symptoms should not take aspirin or products that contain it, because of the risk of Reye syndrome.${c("aspirinLabel", "medlineReye")} FluHub follows the common rule of no aspirin for anyone under 19.</p></div>
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">Acetaminophen or ibuprofen?</h2>
  <div class="table-wrap"><table>
    <thead><tr><th></th><th>Acetaminophen (Tylenol, generic)</th><th>Ibuprofen (Advil, Motrin, generic)</th></tr></thead>
    <tbody>
      <tr><td><b>Helps with</b></td><td>Fever, aches, headache</td><td>Fever, aches, headache</td></tr>
      <tr><td><b>Adult maximum</b></td><td>4,000 mg a day from all medicines combined${c("fdaAcetaminophen")}. Some labels set a lower limit, for example 6 extra-strength (500 mg) caplets, or 3,000 mg, in 24 hours.${c("tylenolLabel")}</td><td>Over the counter: 200 mg every 4 to 6 hours, 400 mg if needed, no more than 1,200 mg (6 capsules of 200 mg) in 24 hours unless a doctor directs.${c("advilLabel")}</td></tr>
      <tr><td><b>Main risk</b></td><td>Liver damage if you take too much, combine products, or drink 3 or more alcoholic drinks a day.${c("fdaAcetaminophen", "tylenolLabel")}</td><td>Stomach bleeding; higher risk of heart attack, heart failure, and stroke; kidney problems.${c("advilLabel")}</td></tr>
      <tr><td><b>Ask first if you</b></td><td>Have liver disease or drink 3 or more alcoholic drinks a day.${c("fdaAcetaminophen")}</td><td>Have high blood pressure, heart disease, kidney disease, liver cirrhosis, asthma, past stroke, or ulcers; take a blood thinner, steroid, or diuretic; or are 60 or older.${c("advilLabel")}</td></tr>
      <tr><td><b>Pregnancy</b></td><td>Usually the preferred fever reducer; see <a href="pregnancy.html">pregnancy</a>.</td><td>Avoid at 20 weeks or later unless a doctor directs.${c("advilLabel")}</td></tr>
    </tbody>
  </table></div>

  <h2>Do not double up</h2>
  <p>Hundreds of prescription and nonprescription medicines contain acetaminophen, including many multi-symptom cold and flu products. Check every label, take only one product with acetaminophen at a time, and do not combine a prescription and an OTC acetaminophen product unless a clinician tells you to.${c("fdaAcetaminophen")}</p>

  <h2>Decongestants and high blood pressure</h2>
  <ul>
    <li><b>Pseudoephedrine</b> can relieve a stuffy nose. Its label says to ask a doctor first if you have heart disease, high blood pressure, thyroid disease, diabetes, or trouble urinating from an enlarged prostate, and not to use it with, or within 2 weeks of stopping, an MAOI antidepressant.${c("sudafedLabel")} Stop and ask a doctor if you feel nervous, dizzy, or cannot sleep.${c("sudafedLabel")}</li>
    <li><b>Oral phenylephrine</b>, the decongestant in many shelf products, was found by FDA not to be effective as a nasal decongestant. FDA has proposed removing it; until a final decision, products can still be sold. Nasal spray phenylephrine is not affected.${c("fdaPhenylephrine")}</li>
  </ul>

  <h2>When to stop treating it yourself</h2>
  <ul>
    <li>A fever that gets worse or lasts more than 3 days on fever reducers.${c("tylenolLabel", "advilLabel")}</li>
    <li>Any <a href="warning-signs.html">emergency warning sign</a>, or a fever or cough that improves and then returns. <a href="getting-worse.html">Getting worse</a>.</li>
  </ul>

  <h2>Fever medicine and going back to work</h2>
  <p>Fever reducers can hide a fever. CDC's return rule counts 24 hours without a fever only when you have not used fever-reducing medicine.${c("cdcWhenSick")} <a href="contagious.html">How long flu is contagious</a>.</p>

  <h2>Children</h2>
  <p>Children's doses depend on weight and age, and some products are not for young children. Ask the child's pediatrician or a pharmacist before giving any cold or flu medicine.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout"><p class="callout-title">${icon.info}Medicine eases symptoms; antivirals treat flu</p><p>If you are in a higher-risk group, or within two days of getting sick, ask about an antiviral too. <a href="too-late-for-tamiflu.html">Is it too late for Tamiflu?</a></p></div>
  ${signsBox}
</aside>
</div>
${faqBlock(qa)}
${related([L.late, L.contagious, L.cough, L.preg, L.worse, L.treatment])}
${sourceList(list)}`;
    const description = "Over-the-counter flu relief: acetaminophen vs. ibuprofen, adult maximum doses, decongestants with high blood pressure, avoiding double doses, and no aspirin for anyone under 19.";
    await emit("symptom-relief.html", page({
      path: "symptom-relief.html",
      title: "Flu symptom relief: acetaminophen, ibuprofen, and decongestants",
      description, body,
      jsonld: [medPageLD("Over-the-counter symptom relief for influenza", "symptom-relief.html", description), faqLD(qa)],
    }));
  }

  /* =====================================================================
     11. Flu A vs. flu B
     ===================================================================== */
  {
    const { list, c } = refSet(["cdcAboutFlu", "cdcFluTypes", "cdcAntiviralClin", "tamifluLabel", "fluview2620", "price2022", "fdaHomeTest", "cdcSigns"]);
    const qa = [
      ["Is flu A or flu B worse?", `Both cause seasonal flu epidemics, and CDC's treatment advice is the same for either.${c("cdcAboutFlu", "cdcAntiviralClin")}`],
      ["Does Tamiflu work on flu B?", `Yes. Oseltamivir is approved for treating flu caused by influenza A and B.${c("tamifluLabel")} In CDC's 2025-26 testing, about 99% of flu viruses checked were susceptible to all four antivirals.${c("fluview2620")}`],
      ["Can I get flu twice in one season?", `It is possible but uncommon. Different flu viruses circulate in the same season, and a large Australian study found repeat infections do happen but are rare, with a cumulative chance of under 1% within a year.${c("cdcAboutFlu", "price2022")}`],
      ["Does the flu shot cover both A and B?", `Yes. This season's U.S. vaccines protect against an influenza A(H1N1) virus, an influenza A(H3N2) virus, and an influenza B/Victoria virus.${c("cdcFluTypes")}`],
    ];
    const body = `${pageHead({
      eyebrow: "Flu types",
      crumbs: crumbs("Flu A vs. flu B"),
      title: "Flu A vs. flu B: what the letter on your test means",
      lede: "Influenza A and B are the two types that cause seasonal flu. The letter matters to scientists tracking the season; for your care, the treatment and the warning signs are the same.",
      byline: clinicalByline(CHECKED, "CDC influenza virus types"),
    })}
<div class="grid-2" style="${twoCol}">
<article class="prose col">
  <h2 style="margin-top:0">Side by side</h2>
  <div class="table-wrap"><table>
    <thead><tr><th></th><th>Influenza A</th><th>Influenza B</th></tr></thead>
    <tbody>
      <tr><td><b>Causes seasonal flu</b></td><td>Yes${c("cdcAboutFlu")}</td><td>Yes${c("cdcAboutFlu")}</td></tr>
      <tr><td><b>Subtypes now circulating</b></td><td>A(H1N1) and A(H3N2)${c("cdcFluTypes")}</td><td>B/Victoria; B/Yamagata has not been detected since March 2020${c("cdcFluTypes")}</td></tr>
      <tr><td><b>How fast it changes</b></td><td>Changes faster${c("cdcFluTypes")}</td><td>Generally changes more slowly${c("cdcFluTypes")}</td></tr>
      <tr><td><b>Can cause pandemics</b></td><td>Yes, the only type known to${c("cdcFluTypes")}</td><td>No${c("cdcFluTypes")}</td></tr>
      <tr><td><b>Covered by this season's vaccine</b></td><td>One H1N1 and one H3N2 strain${c("cdcFluTypes")}</td><td>One B/Victoria strain${c("cdcFluTypes")}</td></tr>
      <tr><td><b>Antiviral treatment</b></td><td>Same recommendations${c("cdcAntiviralClin")}</td><td>Same recommendations${c("cdcAntiviralClin")}</td></tr>
    </tbody>
  </table></div>

  <h2>Do symptoms differ?</h2>
  <p>Not in a way you can count on. CDC's guidance on who should be treated, and its emergency warning signs, do not depend on the flu type.${c("cdcAntiviralClin")} Use the warning signs and your risk group, not the letter, to decide what to do next. <a href="symptoms.html">Symptom check</a>.</p>

  <h2>Antivirals work for both</h2>
  <p>Oseltamivir (Tamiflu) is approved to treat illness from both influenza A and B.${c("tamifluLabel")} Of more than 4,400 flu viruses CDC tested in the 2025-26 season, about 99% were susceptible to all four FDA-approved antivirals.${c("fluview2620")} <a href="treatment.html">Compare the antivirals</a>.</p>

  <h2>Getting flu twice in one season</h2>
  <p>Several flu viruses can circulate in the same season.${c("cdcAboutFlu", "cdcFluTypes")} Catching flu twice is possible, for example A early in the season and B later, but it is uncommon. In 13 years of lab-confirmed flu reports from Queensland, Australia, the cumulative chance of a repeat infection was under 1% within a year, rising to about 10% over ten years. Young children and adults 65 and older were more likely to have repeat infections.${c("price2022")}</p>
  <p>If you feel better and then get worse again, treat it as a warning sign and get care.${c("cdcSigns")} <a href="getting-worse.html">Getting worse after getting better</a>.</p>

  <h2>Reading a home test</h2>
  <p>Home combination tests show separate results for flu A, flu B, and COVID-19.${c("fdaHomeTest")} A positive A or B result leads to the same next steps. <a href="home-test.html">What to do with your result</a>.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout"><p class="callout-title">${icon.info}Bottom line</p><p>A or B, the same rules apply: treatment works best early, and higher-risk people should be treated at any point.${c("cdcAntiviralClin")}</p></div>
  ${signsBox}
</aside>
</div>
${faqBlock(qa)}
${related([L.test, L.late, L.treatment, L.contagious, L.worse, L.vaccines])}
${sourceList(list)}`;
    const description = "Influenza A vs. B explained: subtypes, which one the vaccine covers, why Tamiflu works for both, and whether you can get flu twice in one season.";
    await emit("flu-a-vs-b.html", page({
      path: "flu-a-vs-b.html",
      title: "Flu A vs. flu B: differences, treatment, and getting flu twice",
      description, body,
      jsonld: [medPageLD("Influenza A and influenza B", "flu-a-vs-b.html", description), faqLD(qa)],
    }));
  }
}
