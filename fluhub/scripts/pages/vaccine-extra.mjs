// Vaccine-related patient pages added October 2026:
//   child-flu-shot.html   dated policy explainer for parents (adults-only practice, so no TeleDirectMD CTA)
//   flu-shot-myths.html   fact-first myth pages (FAQPage JSON-LD)
//   kids-tamiflu.html     parent explainer on oseltamivir and baloxavir in children (no CTA)
// Every claim cites a numbered source from content/refs.mjs (new sources live in content/refs-vax.mjs).
import { page, pageHead, clinicalByline, sourceList, icon, esc } from "../lib/layout.mjs";
import { refSet } from "../../content/refs.mjs";
import { SITE } from "../../content/site.mjs";
import { CHECKED, CHILD_SIGNS } from "./clinical-pages.mjs";

const REVIEWED = "2026-10-05";
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/\[\d+\]/g, "").replace(/\s+/g, " ").trim();

function medPageLD(name, path, description, extra = {}) {
  return {
    "@context": "https://schema.org", "@type": "MedicalWebPage", name, description, url: SITE.baseUrl + path,
    lastReviewed: REVIEWED, dateModified: REVIEWED,
    reviewedBy: { "@type": "Physician", name: SITE.editor, medicalSpecialty: "FamilyMedicine" },
    publisher: { "@type": "Organization", name: SITE.cta.org, url: "https://teledirectmd.com/" },
    about: { "@type": "MedicalCondition", name: "Influenza" },
    ...extra,
  };
}

const related = (items) => `<section class="section"><div class="section-head"><h2>Related pages</h2></div><div class="task-list">${items.map(([h, t, p, go]) => `<a class="task" href="${h}"><h3>${t}</h3><p>${p}</p><span class="go">${go}</span></a>`).join("")}</div></section>`;

export default async function ({ emit }) {
  /* ================= Child flu shot policy explainer ================= */
  {
    const { list, c } = refSet(["cdcIccs", "cdcChildren", "aapFlu2627", "aafp2026", "crsR48982", "aphaInjunction", "ahcjInjunction", "statAppeal", "mdPause", "ca1Calendar", "cidrapQuorum", "eo14420", "mmwrPedDeaths2425", "drugTopicsPharmImm", "azFluMist2627", "hrsa", "todayVaxGov"]);
    const title = "Is my child's flu shot still recommended, and is it still free?";
    const description = "A dated explainer for parents: what changed in federal childhood flu vaccine policy in 2026, what CDC, AAP, and AAFP recommend for 2026-27, whether insurance and Vaccines for Children still cover it, and where to get it.";
    const body = `${pageHead({
      crumbs: [["vaccines.html", "Vaccines"], [null, "Children's flu shots"]],
      eyebrow: "For parents · Policy status as of October 5, 2026",
      title,
      lede: "Yes, on both counts, for now. CDC's current flu guidance, the American Academy of Pediatrics, and the American Academy of Family Physicians all recommend a yearly flu vaccine for children 6 months and older, and most families can still get it at no cost. Federal policy has changed several times this year, so here is what happened, with dates.",
      byline: clinicalByline(CHECKED, "CDC 2026-27 clinical considerations; AAP and AAFP 2026-27"),
    })}
<section class="section"><div class="strip">
  <div class="stat"><span class="stat-label">CDC flu guidance for 2026-27</span><span class="stat-value" style="font-size:1.4rem">Everyone 6 months+</span><span class="stat-ctx">July 2025 recommendations kept in effect on September 1, 2026${c("cdcIccs")}</span></div>
  <div class="stat"><span class="stat-label">AAP and AAFP</span><span class="stat-value" style="font-size:1.4rem">Everyone 6 months+</span><span class="stat-ctx">any age-appropriate vaccine${c("aapFlu2627", "aafp2026")}</span></div>
  <div class="stat"><span class="stat-label">Insurance pledge</span><span class="stat-value" style="font-size:1.4rem">No cost through 2027</span><span class="stat-ctx">for ACIP-recommended vaccines, by AHIP member plans${c("crsR48982")}</span></div>
  <div class="stat"><span class="stat-label">Vaccines for Children</span><span class="stat-value" style="font-size:1.4rem">Unchanged</span><span class="stat-ctx">the 2026 schedule did not change VFC coverage${c("crsR48982")}</span></div>
</div></section>

<div class="grid-2" style="margin-top:36px;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)">
<article class="prose col">
  <h2 style="margin-top:0">The short answer</h2>
  <p><b>Recommended:</b> CDC's 2026-27 flu vaccine guidance, dated September 1, 2026, says that "because of legal uncertainties," the flu recommendations from the July 2025 schedule remain in effect for this season. Those recommendations call for a yearly flu vaccine for everyone 6 months and older.${c("cdcIccs", "cdcChildren")} AAP and AAFP recommend the same, and AAP does not prefer one vaccine product over another.${c("aapFlu2627", "aafp2026")}</p>
  <p><b>Free:</b> AAP expects flu vaccines to be covered by commercial insurance and available through the Vaccines for Children (VFC) program as usual.${c("aapFlu2627")} A March 2026 court order requires insurers to keep covering the vaccines they covered in January 2025.${c("ahcjInjunction")} The insurer trade group AHIP has also said its member plans will cover ACIP-recommended vaccines with no cost-sharing through the end of 2027.${c("crsR48982")}</p>
  <p><b>Still unsettled:</b> a federal appeal and an August 2026 executive order could change the federal recommendation later. Neither had changed CDC's flu guidance for this season as of October 5, 2026. Details are below.</p>

  <h2>What happened, in order</h2>
  <ol class="vx-timeline">
    <li><b>January 5, 2026.</b> CDC issued a revised childhood schedule that moved flu vaccination from a recommendation for all children to "shared clinical decision-making," meaning the family and clinician decide case by case.${c("crsR48982")}</li>
    <li><b>By January 20, 2026.</b> 28 states (a count that includes Washington, DC) and several multistate health alliances said they would follow AAP's schedule instead.${c("crsR48982")}</li>
    <li><b>March 16, 2026.</b> A federal court in Massachusetts stayed the revised schedule, the appointments of 13 new members of CDC's vaccine advisory committee (ACIP), and that committee's votes. Federal guidance went back to the version in place before May 2025.${c("aphaInjunction", "ahcjInjunction")}</li>
    <li><b>April 29, 2026.</b> The federal government appealed to the U.S. Court of Appeals for the First Circuit.${c("statAppeal", "crsR48982")}</li>
    <li><b>May 2026.</b> AHIP extended its no-cost coverage pledge through the end of 2027.${c("crsR48982")}</li>
    <li><b>July 2026.</b> ACIP still had no quorum.${c("cidrapQuorum")} As of mid-September it had not met since the March ruling.${c("mdPause")}</li>
    <li><b>August 10, 2026.</b> AAP released its 2026-27 flu recommendations: yearly vaccination for children 6 months and older.${c("aapFlu2627")} The same day, Executive Order 14420 listed influenza among childhood vaccines based on shared clinical decision-making. The order does not mention insurance coverage or the VFC program.${c("eo14420")}</li>
    <li><b>September 1 and 2, 2026.</b> CDC kept the July 2025 flu recommendations in effect for 2026-27, and AAFP recommended yearly flu vaccination for everyone 6 months and older.${c("cdcIccs", "aafp2026")}</li>
    <li><b>September 11, 2026.</b> The district court paused its own proceedings until the appeals court rules.${c("mdPause")}</li>
    <li><b>October 6, 2026.</b> The First Circuit is scheduled to hear oral argument.${c("ca1Calendar")} As of October 5, 2026 there was no appeals ruling. FluHub will update this page when there is one.</li>
  </ol>

  <h2>What "shared clinical decision-making" would mean</h2>
  <p>It is not a ban. Under shared clinical decision-making, a child can still get the vaccine; the decision is made individually between the family and the clinician instead of being a default for every child.${c("crsR48982")} The 2026 schedule was not paired with changes to the VFC program's vaccine list, so it does not appear to change which vaccines VFC covers.${c("crsR48982")}</p>

  <h2>Why pediatricians still push for it</h2>
  <p>In the 2024-25 season, 280 children died of flu in the U.S., the most in any season since reporting began, excluding the 2009-10 pandemic. Among children who died, were old enough to be vaccinated, and had a known vaccination status, 89% were not fully vaccinated. About 44% had no underlying medical condition.${c("mmwrPedDeaths2425")} Children younger than 5, especially those younger than 2, are at higher risk of serious flu complications.${c("cdcChildren")} <a href="high-risk.html">Who is at higher risk</a>.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout"><p class="callout-title">${icon.info}FluHub's publisher treats adults only</p><p>TeleDirectMD sees patients 18 and older. For your child, use their pediatrician or family doctor, a pharmacy, or your health department.</p></div>
  <div class="callout warn"><p class="callout-title">${icon.alert}Children 6 months to 8 years</p><p>Some need 2 doses this season, 4 weeks apart. Ask your child's clinician, and start early.${c("cdcIccs")}</p></div>
  <div class="callout crit"><p class="callout-title">${icon.alert}Sick child?</p><p>Fast or hard breathing, bluish lips, dehydration, or a child who is hard to wake needs emergency care. <a href="warning-signs.html">All warning signs</a></p></div>
</aside>
</div>

<section class="section prose col">
  <h2>Where to get your child vaccinated</h2>
  <ul>
    <li><b>Your child's pediatrician or family doctor.</b> The best place to ask about doses and timing, and many offices take VFC.</li>
    <li><b>A pharmacy.</b> State laws set the youngest age a pharmacist can vaccinate. As of January 2025, only 19 states plus Washington, DC let pharmacists give all recommended vaccines to children 3 and older; Texas, for example, allows pharmacist flu shots from age 7.${c("drugTopicsPharmImm")} Call before you go.</li>
    <li><b>Your local health department.</b> Many run fall flu clinics and give VFC vaccine to eligible children.${c("cdcIccs")}</li>
    <li><b>A community health center.</b> Low or no cost, with or without insurance.${c("hrsa")} <a href="https://findahealthcenter.hrsa.gov/" target="_blank" rel="noopener">Find a health center</a>.</li>
    <li><b>FluMist Home.</b> For eligible children 2 to 17, a parent or caregiver can give the nasal spray at home; for 2026-27 it ships to the 48 contiguous states.${c("azFluMist2627")}</li>
  </ul>
  <p>The federal vaccines.gov ZIP search has not worked since at least December 2025.${c("todayVaxGov")} <a href="find-a-flu-shot.html">Our flu shot finder</a> lists other ways to search.</p>
  <h3>Your next step</h3>
  <p>Call your child's doctor or pharmacy this week and ask, "Can my child get a flu vaccine, and is it covered?" Then book it.</p>
</section>
${related([
  ["flu-shot-myths.html", "Flu shot facts", "Safety, side effects, effectiveness, and timing.", "Read the facts"],
  ["kids-tamiflu.html", "Tamiflu for kids", "Dosing, liquid shortages, and side effects.", "For parents"],
  ["vaccines.html", "2026-27 flu vaccines", "Which vaccine for whom, and how well they work.", "See vaccines"],
  ["find-a-flu-shot.html", "Find a flu shot", "Pharmacies, clinics, and health centers.", "Search by ZIP"],
])}
${sourceList(list)}`;
    await emit("child-flu-shot.html", page({
      path: "child-flu-shot.html", active: "vaccines.html", title, description, body,
      jsonld: [medPageLD("Childhood influenza vaccination: 2026 policy status", "child-flu-shot.html", description, { audience: { "@type": "PeopleAudience", audienceType: "Parents" } })],
    }));
  }

  /* ================= Flu shot myths, fact first ================= */
  {
    const { list, c } = refSet(["cdcKeyFacts", "cdcVaxSafety", "cdcIccs", "jamaVe2526", "cdcPrevented2425", "cdcSeason2627", "mflusiva", "acog2026", "cdcThimerosal", "statThimerosal"]);
    // Each item: question (for FAQ schema), the fact (lead), the myth (named once), the explanation, and an action step.
    const items = [
      {
        id: "cant-give-flu", q: "Can the flu shot give you the flu?",
        fact: "A flu shot cannot give you flu.",
        myth: "Some people believe the shot causes flu.",
        body: `<p>"The viruses in a flu shot are killed (inactivated), so you cannot get flu from a flu shot," CDC says. Some shots contain only a single virus protein. The nasal spray uses weakened viruses that cannot cause flu illness.${c("cdcKeyFacts")}</p>
<p>So why do some people feel off afterward? A sore arm, headache, low fever, muscle aches, or tiredness for a day or two are normal reactions as the immune system responds.${c("cdcVaxSafety")} Protection also takes about two weeks to build, so a person can catch flu, or one of the many other winter viruses, right after the shot.${c("cdcKeyFacts")}</p>`,
        action: `Get vaccinated early in the season, ideally by the end of October, so protection is in place before flu spreads widely.${c("cdcIccs")}`,
      },
      {
        id: "does-it-work", q: "Does the flu shot work if it doesn't match the virus?",
        fact: "The flu shot does not stop every infection, but it lowers the chance of serious illness, even in a poorly matched year.",
        myth: "Some people think a partly matched vaccine is pointless.",
        body: `<p>Here are honest numbers. Last season, an H3N2 strain called subclade K drifted away from the vaccine. Even so, through early March 2026 the vaccine lowered the risk of an emergency or urgent care visit for flu by 35% and of hospitalization by 27%.${c("jamaVe2526")} In 2024-25, CDC estimates vaccination prevented about 180,000 hospitalizations and 12,000 deaths.${c("cdcPrevented2425")}</p>
<p>When vaccinated people do get flu, it tends to be less severe. One study CDC cites found vaccination was linked to a 26% lower risk of ICU admission and a 31% lower risk of death from flu.${c("cdcKeyFacts")} This season's vaccine was updated, including protection against subclade K.${c("cdcSeason2627")}</p>`,
        action: `Get this season's vaccine, and if you do get sick and are at <a href="high-risk.html">higher risk</a>, ask about <a href="treatment.html">antiviral treatment</a> early.`,
      },
      {
        id: "mrna", q: "Does the flu shot contain mRNA?",
        fact: "The standard flu shots given this season are not mRNA vaccines. One new mRNA flu vaccine exists, approved only for adults 50 and older.",
        myth: "Some people assume every flu shot is now mRNA.",
        body: `<p>The flu vaccines in CDC's 2026-27 guidance are of three types: inactivated (killed virus), recombinant (a lab-made virus protein), and live weakened virus in the nasal spray.${c("cdcIccs")} None of these is an mRNA vaccine.</p>
<p>FDA approved Moderna's mRNA flu vaccine, mFLUSIVA, on August 5, 2026. The approval is traditional for ages 50 to 64 and accelerated for 65 and older, pending a confirmatory study.${c("mflusiva")} It is not approved for children or adults under 50, and ACOG does not recommend it during pregnancy because data are lacking.${c("acog2026")}</p>`,
        action: `If you are 50 or older and have a preference, ask which product you are getting before the shot. Do not delay vaccination to wait for, or avoid, a specific product. <a href="vaccines.html">Compare this season's vaccines</a>.`,
      },
      {
        id: "thimerosal", q: "Do flu shots contain thimerosal (mercury)?",
        fact: "99% of this season's U.S. flu vaccine supply contains no thimerosal preservative.",
        myth: "Some people worry flu shots contain mercury.",
        body: `<p>Thimerosal is a preservative used in multi-dose vials. Thimerosal-free flu vaccines are widely available, and CDC notes thimerosal has been used safely in vaccines since the 1930s.${c("cdcThimerosal")} For 2026-27, CDC reports that 99% of projected supply does not contain it.${c("cdcSeason2627")}</p>
<p>In June 2025, CDC's newly appointed vaccine advisory committee voted to stop using thimerosal in flu vaccines, and the HHS secretary adopted the vote in July 2025. Studies have not found a health risk from the preservative, and only about 4% of doses contained it at the time.${c("statThimerosal")}</p>`,
        action: `If you want to be certain, ask for a single-dose syringe or vial rather than a dose from a multi-dose vial.${c("cdcThimerosal")}`,
      },
      {
        id: "too-late", q: "Is it too late to get a flu shot in December, January, or February?",
        fact: "It is not too late. Vaccination is recommended for as long as flu is spreading.",
        myth: "Some people think the flu shot is only worth getting in the fall.",
        body: `<p>CDC's guidance says vaccination "should continue after October and throughout the influenza season as long as influenza viruses are circulating and unexpired vaccine is available."${c("cdcIccs")} Protection takes about two weeks to build, so sooner is better.${c("cdcKeyFacts")}</p>`,
        action: `If you have not had this season's vaccine, get it now. <a href="find-a-flu-shot.html">Find a flu shot near you</a>.`,
      },
      {
        id: "side-effects", q: "What side effects are normal after a flu shot, and what is an allergic reaction?",
        fact: "Most reactions are mild and go away in a day or two. Serious allergic reactions are rare.",
        myth: "Some people expect a flu shot to make them very sick.",
        body: `<p><b>Normal:</b> soreness, redness, or swelling where the shot was given, plus fever, muscle aches, headache, or tiredness. The nasal spray can cause a runny nose, headache, cough, sore throat, or low fever.${c("cdcVaxSafety")}</p>
<p><b>Not normal:</b> hives, swelling of the face or throat, or trouble breathing. Severe allergic reactions after vaccination are rare but can be life-threatening. Call 911.${c("cdcVaxSafety")} Someone who has had a severe allergic reaction to any flu vaccine should not get the egg-based shots again and should talk with their clinician about options.${c("cdcIccs")}</p>`,
        action: `Plan for a quiet day if you tend to get achy, and tell the vaccinator about any past serious reaction before your shot.`,
      },
      {
        id: "egg-allergy", q: "Can I get a flu shot if I'm allergic to eggs?",
        fact: "Yes. People with egg allergy can get any flu vaccine that fits their age and health, with no extra precautions.",
        myth: "Some people think egg allergy rules out a flu shot.",
        body: `<p>CDC's guidance says egg allergy alone "necessitates no additional safety measures for influenza vaccination beyond those recommended for any recipient of any vaccine, regardless of severity."${c("cdcIccs")} Egg-free options, cell-based and recombinant vaccines, are also available.${c("cdcKeyFacts")} About 27% of this season's supply is made without eggs.${c("cdcSeason2627")}</p>`,
        action: `Get vaccinated wherever is convenient; you do not need a special clinic for egg allergy.`,
      },
      {
        id: "gbs", q: "Can the flu shot cause Guillain-Barré syndrome?",
        fact: "Guillain-Barré syndrome (GBS) after a flu vaccine is rare, and you are more likely to get GBS after flu itself.",
        myth: "Some people avoid the shot because of GBS.",
        body: `<p>In seasons when any increased risk was found, it was about 1 to 2 extra GBS cases per million doses. CDC notes that "a person is more likely to get GBS after flu disease than after getting a flu vaccine."${c("cdcVaxSafety")}</p>`,
        action: `If you ever developed GBS within 6 weeks of a flu vaccine, talk with your clinician before your next one; CDC treats that history as a precaution.${c("cdcIccs")}`,
      },
    ];
    const title = "Flu shot facts: safety, side effects, mRNA, and whether it works";
    const description = "Fact-first answers to common flu shot worries: it cannot give you flu, honest 2025-26 effectiveness numbers, mRNA and thimerosal status for 2026-27, egg allergy, normal side effects, Guillain-Barre syndrome, and whether it is too late.";
    const body = `${pageHead({
      crumbs: [["vaccines.html", "Vaccines"], [null, "Flu shot facts"]],
      eyebrow: "Prevention · 2026-27 season",
      title: "Flu shot facts",
      lede: "Straight answers to the most common worries about the flu vaccine, each with its source and a next step.",
      byline: clinicalByline(CHECKED, "CDC 2026-27 clinical considerations; CDC vaccine safety"),
    })}
<nav class="vx-toc" aria-label="On this page"><ul>${items.map((it) => `<li><a href="#${it.id}">${esc(it.q)}</a></li>`).join("")}</ul></nav>
<div class="col">${items.map((it) => `<section class="vx-fact" id="${it.id}">
  <p class="eyebrow">${esc(it.q)}</p>
  <h2>${esc(it.fact)}</h2>
  <div class="prose"><p class="muted small">${esc(it.myth)} The evidence says otherwise.</p>${it.body}</div>
  <p class="vx-action"><b>What to do:</b> ${it.action}</p>
</section>`).join("")}</div>
${related([
  ["find-a-flu-shot.html", "Find a flu shot", "Pharmacies, clinics, and health centers.", "Search by ZIP"],
  ["vaccines.html", "2026-27 flu vaccines", "Which vaccine for whom.", "See vaccines"],
  ["child-flu-shot.html", "Children's flu shots", "Is it still recommended and free?", "For parents"],
  ["pregnancy.html", "Flu and pregnancy", "Vaccines and treatment while pregnant.", "Read more"],
])}
${sourceList(list)}`;
    await emit("flu-shot-myths.html", page({
      path: "flu-shot-myths.html", active: "vaccines.html", title, description, body,
      jsonld: [
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: strip(`${it.fact} ${it.body} What to do: ${it.action}`) } })) },
        medPageLD("Flu vaccine facts and common concerns", "flu-shot-myths.html", description, { audience: { "@type": "PeopleAudience", audienceType: "Patient" } }),
      ],
    }));
  }

  /* ================= Tamiflu for kids ================= */
  {
    const { list, c } = refSet(["cdcAntiviralClin", "cdcChildren", "tamifluLabel", "jucmShortage", "xofluzaLabel", "fdaGenericBaloxavir", "antoon2025", "medlineReye", "cdcSigns"]);
    const title = "Tamiflu for kids: dosing, liquid shortages, and side effects";
    const description = "A parent's guide to oseltamivir (Tamiflu) for children: who should be treated, how weight-based dosing works, what to do if the liquid is out of stock, Xofluza for ages 5 and up, behavior changes, and warning signs.";
    const bands = [
      ["2 weeks to under 1 year", "Any weight", "3 mg per kg of body weight"],
      ["1 to 12 years", "15 kg or less (about 33 lb or less)", "30 mg"],
      ["1 to 12 years", "15.1 to 23 kg (about 33 to 51 lb)", "45 mg"],
      ["1 to 12 years", "23.1 to 40 kg (about 51 to 88 lb)", "60 mg"],
      ["1 to 12 years", "More than 40 kg (about 88 lb)", "75 mg"],
      ["13 and older", "Any weight", "75 mg"],
    ];
    const body = `${pageHead({
      crumbs: [["treatment.html", "Treatment"], [null, "Tamiflu for kids"]],
      eyebrow: "For parents",
      title: "Tamiflu for kids",
      lede: "Oseltamivir (Tamiflu) is approved to treat flu in children as young as 2 weeks. The dose depends on your child's weight and is set by your child's clinician. Here is what parents ask most: who needs it, what to do when the liquid is hard to find, and which side effects to watch for.",
      byline: clinicalByline(CHECKED, "CDC antiviral guidance, March 2026; FDA labels"),
    })}
<div class="grid-2" style="margin-top:32px;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)">
<article class="prose col">
  <h2 style="margin-top:0">Which children should get an antiviral</h2>
  <p>CDC recommends antiviral treatment as soon as possible, at any point in the illness, for anyone with suspected or confirmed flu who is hospitalized, severely ill or getting worse, or at higher risk of complications.${c("cdcAntiviralClin")} Children younger than 5, especially those younger than 2, and children with long-term conditions such as asthma are in the higher-risk group.${c("cdcChildren")}</p>
  <p>For otherwise healthy children, a clinician may also prescribe an antiviral if it can start within two days of the first symptom.${c("cdcAntiviralClin")} A flu test is not required first; treatment should not wait for a lab result.${c("cdcAntiviralClin")} If your child is past the two-day mark, read <a href="too-late-for-tamiflu.html">is it too late for Tamiflu</a>.</p>

  <h2>How the dose is decided</h2>
  <p>Oseltamivir for children is dosed by body weight, twice a day for 5 days. The FDA label groups children by weight, shown below for reference.${c("tamifluLabel")} Doses are adjusted for some children, such as those with kidney problems, so your child's clinician sets the final dose.${c("tamifluLabel")}</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout"><p class="callout-title">${icon.info}TeleDirectMD treats adults only</p><p>FluHub's publisher sees patients 18 and older. For a child, call their pediatrician, the office's after-hours nurse line, or an urgent care that sees children.</p></div>
  <div class="callout crit"><p class="callout-title">${icon.alert}Go to the emergency department for</p><p>fast or hard breathing, bluish lips, ribs pulling in, a seizure, dehydration, or a child who is hard to wake. <a href="warning-signs.html">All warning signs</a></p></div>
</aside>
</div>
<div class="table-wrap" style="margin-top:18px"><table>
<thead><tr><th>Age</th><th>Body weight</th><th class="n">Label dose, twice a day for 5 days</th></tr></thead>
<tbody>${bands.map(([a, w, d]) => `<tr><td>${a}</td><td>${w}</td><td class="n">${d}</td></tr>`).join("")}</tbody>
<caption>From the FDA-approved Tamiflu label, Table 1. Pounds are rounded. This table is for understanding a prescription, not for choosing a dose: give only the dose on your child's pharmacy label, measured with the oral syringe that comes with it.${c("tamifluLabel")}</caption></table></div>

<div class="grid-2" style="margin-top:36px;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)"><article class="prose col">
  <h2 style="margin-top:0">If the liquid is out of stock</h2>
  <p>In busy flu seasons, some pharmacies run out of oseltamivir. In January 2026, the American Society of Health-System Pharmacists listed shortages of some oseltamivir capsules and powders, which federal agencies attributed to local stockouts from high demand.${c("jucmShortage")}</p>
  <p>The FDA label describes two backup options when the liquid is not available:${c("tamifluLabel")}</p>
  <ul>
    <li><b>Opened capsules.</b> The contents of the right-strength capsule (30, 45, or 75 mg) can be mixed with a small amount of a sweet liquid such as chocolate syrup (regular or sugar-free), corn syrup, caramel topping, or light brown sugar dissolved in water.</li>
    <li><b>A pharmacy-made liquid.</b> When neither the liquid nor the right capsule strength is available, a pharmacist can prepare an emergency liquid from 75 mg capsules.</li>
  </ul>
  <p>Ask the pharmacist which option fits your child's prescription, and have them show you how to measure it. Do not split or guess at an adult capsule on your own. Calling two or three pharmacies before you drive is often faster.</p>

  <h2>What about Xofluza?</h2>
  <p>Baloxavir (Xofluza) is a single-dose flu medicine approved for children 5 and older; it is not approved under 5.${c("xofluzaLabel")} A generic version was approved in June 2026 for the same ages.${c("fdaGenericBaloxavir")} The liquid form of baloxavir is not currently available in the U.S., so a child needs to be able to swallow tablets.${c("cdcAntiviralClin")}</p>

  <h2>Side effects and behavior changes</h2>
  <p>The most common side effects of oseltamivir are nausea and vomiting. Giving it with food can make it easier to tolerate.${c("tamifluLabel")}</p>
  <p>The label notes rare reports, mainly in children, of sudden confusion or unusual behavior. Flu itself can cause these symptoms, and the medicine's role has not been established. Watch your child closely and call their clinician if their behavior changes.${c("tamifluLabel")}</p>
  <p>A 2025 study of children ages 5 to 17 enrolled in Tennessee Medicaid from 2016 to 2020 found that children with flu who were treated with oseltamivir had a lower risk of serious neuropsychiatric events than children with flu who were not treated. The authors concluded the findings should inform caregivers and clinicians about the medicine's safety.${c("antoon2025")} More on <a href="tamiflu-side-effects.html">Tamiflu side effects</a>.</p>

  <h2>Fever and pain relief</h2>
  <p>Never give aspirin or products that contain aspirin to anyone younger than 19 with flu. It can cause Reye syndrome, a rare but serious illness of the liver and brain.${c("medlineReye")} Ask your pharmacist which fever reducer and dose fit your child's age and weight.</p>

  <h2>Warning signs in children</h2>
  <p>Get emergency care for any of these:${c("cdcSigns")}</p>
  <ul>${CHILD_SIGNS.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
  <p><a href="warning-signs.html">Warning signs for adults and children</a>.</p>

  <h3>Your next step</h3>
  <p>If your child has flu symptoms and is under 5, has a long-term condition, or seems to be getting worse, call their pediatrician today and ask whether an antiviral is right for them.</p>
</article>
<aside style="display:grid;gap:16px;align-content:start">
  <div class="callout warn"><p class="callout-title">${icon.alert}Others at home at high risk?</p><p>Antivirals can sometimes be used to prevent flu in close contacts. <a href="household.html">Protecting your household</a></p></div>
  <div class="callout"><p class="callout-title">${icon.info}Prevention</p><p>A yearly flu vaccine is recommended for children 6 months and older. <a href="child-flu-shot.html">Is it still recommended and free?</a></p></div>
</aside>
</div>
${related([
  ["treatment.html", "Antiviral treatment", "All four flu antivirals compared.", "Read more"],
  ["high-risk.html", "Who is at higher risk", "Ages and conditions that raise risk.", "See the list"],
  ["child-flu-shot.html", "Children's flu shots", "Policy status and coverage, dated.", "For parents"],
  ["flu-shot-myths.html", "Flu shot facts", "Safety, side effects, and timing.", "Read the facts"],
])}
${sourceList(list)}`;
    await emit("kids-tamiflu.html", page({
      path: "kids-tamiflu.html", active: "treatment.html", title, description, body,
      jsonld: [medPageLD("Oseltamivir and baloxavir for children with influenza", "kids-tamiflu.html", description, {
        audience: { "@type": "PeopleAudience", audienceType: "Parents" },
        mentions: [{ "@type": "Drug", name: "Oseltamivir", alternateName: "Tamiflu" }, { "@type": "Drug", name: "Baloxavir marboxil", alternateName: "Xofluza" }],
      })],
    }));
  }
}
