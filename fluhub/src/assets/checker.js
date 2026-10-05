// FluHub symptom check. Runs entirely in the browser; stores and sends nothing.
// Rules (in priority order) are documented on the page and in methods.html.
(function () {
  "use strict";
  const form = document.getElementById("checker");
  const out = document.getElementById("result");
  if (!form || !out) return;
  const cfg = JSON.parse(document.getElementById("checker-config").textContent);
  const CHILD = ["u3m", "3to11m", "1to4", "5to17"];
  const UNDER5 = ["u3m", "3to11m", "1to4"];

  const childBox = document.getElementById("signs-child");
  const adultBox = document.getElementById("signs-adult");
  const noSign = document.getElementById("nosign");

  function values(name) { return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((i) => i.value); }
  function value(name) { return values(name)[0] || null; }

  function syncSigns() {
    const age = value("age");
    const child = age && CHILD.includes(age);
    childBox.hidden = age ? !child : false;
    adultBox.hidden = age ? child : false;
    // clear hidden selections so they cannot drive the result
    [childBox, adultBox].forEach((b) => { if (b.hidden) b.querySelectorAll("input").forEach((i) => (i.checked = false)); });
  }

  form.addEventListener("change", (e) => {
    if (e.target.name === "sign" && e.target.checked) noSign.checked = false;
    if (e.target === noSign && noSign.checked) form.querySelectorAll('input[name="sign"]').forEach((i) => (i.checked = false));
    if (e.target.name === "age") syncSigns();
    render();
  });

  const li = (arr) => `<ul>${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  const cta = (text) => cfg.cta ? `<div class="cta-box"><p>${text}</p><p class="small muted">${cfg.cta.org}: ${cfg.cta.line}</p><div class="btn-row"><a class="btn btn-primary" href="${cfg.cta.url}" target="_blank" rel="noopener">Book a ${cfg.cta.org} visit</a></div></div>` : "";

  function decide() {
    const age = value("age");
    if (!age) return null;
    const signs = values("sign");
    const sym = values("sym");
    const onset = value("onset");
    const course = value("course");
    const rebound = form.querySelector("#rebound").checked;
    const risks = values("risk");
    const adult = !CHILD.includes(age);
    const why = [];

    if (signs.length) {
      return { tier: "er", label: "Get medical care right away", title: "Go to an emergency department or call 911",
        body: "You selected a CDC emergency warning sign. Do not wait for a telehealth visit or a test result.",
        list: ["Call 911 for trouble breathing, bluish lips, a seizure, or someone who cannot be woken.", "Otherwise go to the nearest emergency department now.", "Bring a list of medicines and when symptoms started."],
        why: ["An emergency warning sign was selected."] };
    }
    if (age === "u3m" && sym.includes("fever")) {
      return { tier: "er", label: "Get medical care right away", title: "Any fever in a baby under 3 months needs care now",
        body: "CDC lists any fever in an infant younger than 12 weeks as an emergency warning sign. Call your pediatrician's urgent line or go to an emergency department now.",
        list: ["A fever is 100.4°F (38°C) or higher, measured rectally.", "Do not give fever medicine before the baby is seen unless a clinician tells you to."], why: ["Fever in an infant under 12 weeks."] };
    }
    if (rebound) {
      return { tier: "er", label: "Get medical care right away", title: "Be seen in person today",
        body: "A fever or cough that improves and then comes back worse can mean pneumonia or another complication. CDC lists it as a warning sign.",
        list: ["Go to urgent care or an emergency department today.", "Go to an emergency department or call 911 if breathing becomes difficult."], why: ["Symptoms improved, then returned worse."] };
    }
    if (!sym.length) {
      return { tier: "home", label: "No symptoms selected", title: "Nothing to treat right now",
        body: "If you want to prevent flu, the best protection is a yearly flu vaccine. If symptoms start, come back and run the check again.",
        list: ['<a href="vaccines.html">2026–27 vaccines</a> and <a href="find-a-flu-shot.html">where to get one</a>.', 'If you were just exposed and are at very high risk, ask a clinician about preventive antivirals within 48 hours (<a href="treatment.html">details</a>).'], why: [] };
    }

    const fluLike = sym.includes("fever") && (sym.includes("cough") || sym.includes("throat")) || (sym.includes("fever") && sym.includes("aches"));
    const early = onset === "lt1" || onset === "1to2";
    const hr = UNDER5.includes(age) || age === "65p" || risks.length > 0;
    if (UNDER5.includes(age)) why.push("Children under 5, especially under 2, are at higher risk of flu complications.");
    if (age === "65p") why.push("Adults 65 and older are at higher risk of flu complications.");
    if (risks.length) why.push(`${risks.length} higher-risk condition${risks.length > 1 ? "s" : ""} selected.`);
    const smell = sym.includes("smell") ? ["A new loss of taste or smell is more typical of COVID-19. A test can tell flu and COVID-19 apart, and COVID-19 antivirals must start within 5 to 7 days."] : [];

    if (hr) {
      return { tier: "today", label: "Contact a clinician today", title: adult ? "Get evaluated for antiviral treatment today" : "Call your child's clinician today",
        body: "CDC recommends antiviral treatment as soon as possible for people in higher-risk groups who may have flu, without waiting for a test. It works best within 48 hours. After that a clinician may still treat, and CDC recommends treatment at any point if illness is severe or getting worse.",
        list: [early ? "You are inside the window where antivirals help most. Don't wait to see if it passes." : "Even past 2 days, a clinician may still treat, especially if symptoms are not improving.", "Oseltamivir (Tamiflu) is preferred in pregnancy and for young children.", ...smell, 'Watch for <a href="warning-signs.html">warning signs</a> while you wait.'],
        why, cta: adult };
    }
    if (course === "worse") {
      why.push("Symptoms are getting worse.");
      return { tier: "today", label: "Contact a clinician today", title: "Worsening symptoms should be checked today",
        body: "CDC recommends antivirals for flu that is severe or getting worse, no matter how many days it has lasted. A clinician should also look for complications like pneumonia.",
        list: ["Worsening after several days is best checked in person (urgent care or your clinician), where pneumonia can be ruled out.", "If breathing becomes hard, or there is chest pain or confusion, go to an emergency department.", ...smell], why };
    }
    if (early && fluLike) {
      why.push("Flu-like illness that started within the last 2 days.");
      return { tier: "call", label: "Consider a visit", title: "An antiviral could shorten this by about a day",
        body: "For otherwise healthy people, a clinician can prescribe an antiviral if it can start within 2 days of getting sick. It is optional: most healthy people recover at home in a few days to under 2 weeks.",
        list: ["Rest, fluids, and acetaminophen or ibuprofen if they are safe for you.", "Stay home until you have gone 24 hours with symptoms improving and no fever without medicine.", ...smell, 'Watch for <a href="warning-signs.html">warning signs</a>.'], why, cta: adult };
    }
    if (!early) why.push("Symptoms began more than 2 days ago, so an antiviral's benefit for a healthy person is small.");
    return { tier: "home", label: "Home care", title: "Rest at home and watch for changes",
      body: "Most otherwise healthy people recover from flu-like illness at home. An antiviral is unlikely to add much at this point unless symptoms get worse.",
      list: ["Rest, fluids, and acetaminophen or ibuprofen if they are safe for you. No aspirin for anyone under 19.", "Stay home until you have gone 24 hours with symptoms improving and no fever without medicine, then take extra precautions for 5 days.", ...smell, "Contact a clinician if symptoms get worse, last more than 10 days, or a fever or cough improves and then returns.", 'Know the <a href="warning-signs.html">emergency warning signs</a>.'], why };
  }

  function render() {
    const r = decide();
    if (!r) return;
    out.dataset.tier = r.tier;
    out.innerHTML = `<p class="result-tier">${r.label}</p><h3>${r.title}</h3><p>${r.body}</p>${li(r.list)}${r.why.length ? `<p class="why"><b>Why:</b> ${r.why.join(" ")}</p>` : ""}${r.cta && r.tier !== "er" ? cta(r.tier === "today" ? "Adults can be evaluated by video today; a physician can prescribe an antiviral without a flu test." : "If you would like an antiviral, a physician can decide by video today.") : ""}<p class="small muted">This is general guidance, not a diagnosis. When in doubt, contact a clinician.</p>`;
  }
  syncSigns();
})();
