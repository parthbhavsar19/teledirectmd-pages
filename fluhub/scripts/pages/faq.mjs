import { page, pageHead, clinicalByline, sourceList, esc } from "../lib/layout.mjs";
import { refSet } from "../../content/refs.mjs";
import { CHECKED } from "./clinical-pages.mjs";

export default async function ({ emit }) {
  const { list, c } = refSet(["cdcOutlook2627", "cdcKeyFacts", "cdcCoadmin", "cdcVaxSafety", "cdcIccs", "acog2026", "cdcAntiviralClin", "cdcTreatPatient", "cdcFluVsCovid", "cdcWhenSick", "cdcSigns", "cdcH5Situation", "healthcareGov", "medicareFlu"]);
  const qa = [
    ["When does flu season start and peak?", `CDC counts each season from MMWR week 40, which in 2026 is the week ending October 10. Flu hospitalizations have typically peaked between December and February, though the exact timing is hard to predict. CDC's outlook expects 2026–27 to be a moderate season.${c("cdcOutlook2627")}`],
    ["Is it too late to get a flu shot?", `Not as long as flu is circulating. CDC advises vaccination ideally by the end of October, and vaccination later in the season is still worthwhile. Protection builds over about two weeks.${c("cdcKeyFacts")}`],
    ["Can I get my flu, COVID-19, and RSV vaccines at the same visit?", `Yes. They can be given at the same visit, in separate sites. Getting RSV and flu vaccines together may cause a bit more arm soreness.${c("cdcCoadmin")}`],
    ["Can the flu shot give me the flu?", `No. Flu shots contain inactivated virus or a single viral protein and cannot cause flu. Some people get a sore arm, low fever, or aches for a day or two.${c("cdcKeyFacts", "cdcVaxSafety")}`],
    ["I'm pregnant. Which vaccine should I get, and is Tamiflu safe?", `An inactivated or recombinant flu shot in any trimester; not the nasal spray, and ACOG does not recommend the new mRNA vaccine in pregnancy.${c("cdcIccs", "acog2026")} If you get flu while pregnant or within 2 weeks after delivery, oral oseltamivir (Tamiflu) is the preferred treatment, at the usual dose.${c("cdcAntiviralClin")}`],
    ["Do I need a positive flu test to get Tamiflu or Xofluza?", `No. CDC says treatment decisions should not wait for lab confirmation, and a clinician can prescribe based on symptoms during flu season.${c("cdcAntiviralClin")} <a href="testing.html">More on testing</a>.`],
    ["I'm healthy. Is an antiviral worth it?", `It is optional. Started within two days of symptoms, antivirals shorten illness by about a day and lessen symptoms.${c("cdcTreatPatient")} If you are in a <a href="high-risk.html">higher-risk group</a>, treatment is recommended, not optional.${c("cdcAntiviralClin")}`],
    ["My symptoms started more than two days ago. Is it too late for treatment?", `Not necessarily. CDC recommends treatment at any point for people who are hospitalized or whose illness is severe or getting worse, and a clinician may treat higher-risk people after 48 hours.${c("cdcAntiviralClin")}`],
    ["How long am I contagious, and when can I go back to work or school?", `People with flu are most contagious in the first three days of illness and can spread it about a day before symptoms start.${c("cdcFluVsCovid")} CDC's guidance is to return to normal activities once, for at least 24 hours, your symptoms are improving overall and you have had no fever without fever-reducing medicine, then take extra precautions for 5 days.${c("cdcWhenSick")}`],
    ["When should I worry about my child?", `Fast or difficult breathing, bluish lips, ribs pulling in with each breath, dehydration, not waking or interacting, a seizure, a fever over 104°F that medicine does not bring down, or any fever under 12 weeks of age. <a href="warning-signs.html">The full list</a>.${c("cdcSigns")}`],
    ["How do I tell flu from COVID-19?", `You cannot reliably tell by symptoms; a test is needed. A new loss of taste or smell is more common with COVID-19. The treatments differ, so testing can matter.${c("cdcFluVsCovid")}`],
    ["Should I worry about bird flu?", `CDC rates the risk to the general public as low. The 71 U.S. human cases since 2024 have been almost entirely in people with direct exposure to infected cattle or poultry, and no person-to-person spread has been found in the U.S.${c("cdcH5Situation")} <a href="bird-flu.html">Details</a>.`],
    ["Will insurance pay for my flu shot?", `Marketplace plans and most private plans cover it with no copay in-network, and Medicare Part B covers it with no cost when the provider accepts assignment.${c("healthcareGov", "medicareFlu")}`],
    ["Where does FluHub's data come from?", `CDC's weekly surveillance systems (ILINet, clinical labs, NHSN hospital reporting, FluSurv-NET, FluVaxView), refreshed every Friday. <a href="methods.html">Sources and methods</a>.`],
  ];
  const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/\[\d+\]/g, "").trim();
  const body = `${pageHead({ eyebrow: "Questions", title: "Common flu questions", lede: "Short answers, each with its source. Select a question to open it.", byline: clinicalByline(CHECKED, "CDC guidance") })}
<div class="col" style="margin-top:28px">${qa.map(([q, a], i) => `<details class="acc" id="q${i + 1}"><summary>${esc(q)}</summary><div class="acc-body"><p>${a}</p></div></details>`).join("")}</div>
${sourceList(list)}`;
  await emit("faq.html", page({
    path: "faq.html", title: "Flu questions and answers", description: "Answers to common flu questions: timing, vaccines, pregnancy, Tamiflu without a test, contagious period, children, bird flu, and insurance.",
    body,
    jsonld: [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: qa.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: strip(a) } })) }],
  }));
}
