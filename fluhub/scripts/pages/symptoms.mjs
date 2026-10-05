// Symptom check. Server renders the full form; checker.js computes the result in the browser.
import { page, pageHead, clinicalByline, sourceList, esc, icon } from "../lib/layout.mjs";
import { refSet } from "../../content/refs.mjs";
import { SITE } from "../../content/site.mjs";
import { CHECKED, ADULT_SIGNS, CHILD_SIGNS } from "./clinical-pages.mjs";

const AGES = [["u3m", "Under 3 months"], ["3to11m", "3–11 months"], ["1to4", "1–4 years"], ["5to17", "5–17 years"], ["18to49", "18–49 years"], ["50to64", "50–64 years"], ["65p", "65 or older"]];
const SYMPTOMS = [["fever", "Fever or feeling feverish, chills"], ["cough", "Cough"], ["throat", "Sore throat"], ["nose", "Runny or stuffy nose"], ["aches", "Muscle or body aches"], ["headache", "Headache"], ["tired", "Very tired"], ["gi", "Vomiting or diarrhea"], ["smell", "New loss of taste or smell"]];
const ONSET = [["lt1", "Less than 1 day ago"], ["1to2", "1 to 2 days ago"], ["3to5", "3 to 5 days ago"], ["gt5", "More than 5 days ago"]];
const COURSE = [["better", "Getting better"], ["same", "About the same"], ["worse", "Getting worse"]];
const RISKS = [["preg", "Pregnant, or gave birth in the last 2 weeks"], ["lung", "Asthma or chronic lung disease"], ["heart", "Heart disease or past stroke"], ["diabetes", "Diabetes or other endocrine disorder"], ["kidney", "Kidney or liver disease"], ["immune", "Weakened immune system (cancer treatment, transplant, HIV, long-term steroids)"], ["neuro", "Neurologic, neurodevelopmental, or muscle condition or disability"], ["blood", "Sickle cell or other blood disorder"], ["bmi", "BMI of 40 or higher"], ["ltc", "Lives in a nursing home or long-term care"], ["aspirin", "Under 19 and on long-term aspirin"]];

const radio = (name, opts, req) => `<div class="opts" role="radiogroup">${opts.map(([v, l]) => `<label class="opt"><input type="radio" name="${name}" id="${name}-${v}" value="${v}"${req ? " required" : ""}><span>${esc(l)}</span></label>`).join("")}</div>`;
const checks = (name, opts, cls = "") => `<div class="opts">${opts.map(([v, l]) => `<label class="opt ${cls}"><input type="checkbox" name="${name}" id="${name}-${v}" value="${v}"><span>${esc(l)}</span></label>`).join("")}</div>`;

export default async function ({ emit }) {
  const { list, c } = refSet(["cdcSigns", "cdcHighRisk", "cdcChildren", "cdcAntiviralClin", "cdcTreatPatient", "cdcWhenSick", "cdcFluVsCovid"]);
  const childSigns = CHILD_SIGNS.map((s, i) => [`c${i}`, s]);
  const adultSigns = ADULT_SIGNS.map((s, i) => [`a${i}`, s]);
  const body = `${pageHead({
    eyebrow: "Symptom check",
    title: "How soon should you get care?",
    lede: "Answer five questions about yourself or the person you are caring for. You will get a plain-language next step based on CDC guidance. This is not a diagnosis, and nothing you enter leaves your device.",
    byline: clinicalByline(CHECKED, "CDC warning signs, high-risk list, and antiviral guidance"),
  })}
<div class="checker" style="margin-top:32px">
<form id="checker" class="panel" novalidate onsubmit="return false">
  <div class="q"><fieldset><legend>1. How old is the person who is sick?</legend>${radio("age", AGES, true)}</fieldset></div>

  <div class="q" id="q-signs"><fieldset><legend>2. Are any of these happening right now?</legend>
    <p class="q-hint">These are CDC's emergency warning signs. If any apply, the check stops here.</p>
    <div id="signs-child"${""}><p class="small muted" style="margin-bottom:8px">For a child</p>${checks("sign", childSigns, "red")}</div>
    <div id="signs-adult" style="margin-top:12px"><p class="small muted" style="margin-bottom:8px">For an adult</p>${checks("sign", adultSigns, "red")}</div>
    <label class="opt" style="margin-top:6px"><input type="checkbox" name="nosign" id="nosign" value="none"><span>None of these</span></label>
  </fieldset></div>

  <div class="q"><fieldset><legend>3. Which symptoms are there?</legend>${checks("sym", SYMPTOMS)}</fieldset></div>

  <div class="q"><fieldset><legend>4. When did symptoms start, and how are they going?</legend>
    ${radio("onset", ONSET)}
    <div style="margin-top:6px">${radio("course", COURSE)}</div>
    <label class="opt"><input type="checkbox" name="rebound" id="rebound" value="1"><span>Was getting better, then fever or cough came back worse</span></label>
  </fieldset></div>

  <div class="q"><fieldset><legend>5. Do any of these apply?</legend>
    <p class="q-hint">Conditions that raise the risk of flu complications.${c("cdcHighRisk")}</p>
    ${checks("risk", RISKS)}
  </fieldset></div>
</form>

<aside>
  <div class="result" id="result" data-tier="start" aria-live="polite">
    <p class="result-tier">Your next step</p>
    <h3>Start with the person's age</h3>
    <p>Your result appears here and updates as you answer. If anyone has trouble breathing, chest pain, confusion, a seizure, or cannot be woken, call 911 now.</p>
  </div>
  <noscript><div class="callout warn" style="margin-top:12px"><p>This check needs JavaScript. Without it: anyone with a warning sign needs care right away; anyone in a <a href="high-risk.html">higher-risk group</a> with flu symptoms should contact a clinician today; others can usually recover at home.</p></div></noscript>
  <p class="small muted" style="margin-top:12px">Rules follow CDC's emergency warning signs${c("cdcSigns")}, high-risk groups${c("cdcHighRisk", "cdcChildren")}, and antiviral recommendations${c("cdcAntiviralClin")}. Reviewed by ${esc(SITE.editor)}.</p>
</aside>
</div>
<section class="section prose col">
  <h2>How this check decides</h2>
  <ol>
    <li><b>Any emergency warning sign</b>, or any fever in a baby under 3 months: get medical care right away.</li>
    <li><b>Higher risk with flu symptoms</b> (under 5, 65 or older, pregnant or recently pregnant, or a listed condition): contact a clinician today. CDC recommends antiviral treatment as soon as possible for these groups; after 48 hours a clinician may still treat, and CDC recommends it at any point if illness is severe or worsening.${c("cdcAntiviralClin")}</li>
    <li><b>Symptoms getting worse</b> at any point: contact a clinician today. Worsening illness is treated regardless of how long it has lasted.${c("cdcAntiviralClin")}</li>
    <li><b>Otherwise healthy and within 2 days</b> of flu-like illness: a clinician can consider an antiviral, which shortens illness by about a day.${c("cdcTreatPatient")} Rest at home is also reasonable.</li>
    <li><b>Otherwise healthy, past 2 days, improving:</b> rest at home and watch for warning signs.</li>
  </ol>
  <p>A new loss of taste or smell is more typical of COVID-19, which has its own treatments with a 5 to 7 day window; a test can tell them apart.${c("cdcFluVsCovid")}</p>
</section>
${sourceList(list)}
<script type="application/json" id="checker-config">${JSON.stringify({ cta: SITE.cta.enabled ? { org: SITE.cta.org, url: SITE.cta.url, line: SITE.cta.line } : null })}</script>`;
  await emit("symptoms.html", page({
    path: "symptoms.html", active: "symptoms.html",
    title: "Flu symptom check: how soon to get care",
    description: "A five-question flu symptom check built on CDC's emergency warning signs, high-risk groups, and antiviral guidance. Not a diagnosis; nothing you enter is stored.",
    body, scripts: ["checker.js"],
  }));
}
