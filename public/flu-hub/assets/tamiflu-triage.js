// "Is it too late for Tamiflu?" quick check. Runs in the browser; stores and sends nothing.
// The same rules are printed on the page (#rules) so the page works without JavaScript.
// Routes: er (emergency), pediatric (call the child's clinician), call (call a clinician today),
// visit (adult same-day visit; the only route that may show the practice CTA), home (home care).
(function () {
  "use strict";
  var form = document.getElementById("tamiflu-triage");
  var out = document.getElementById("triage-result");
  if (!form || !out) return;
  var cfg = { cta: null };
  try { cfg = JSON.parse(document.getElementById("triage-config").textContent); } catch (e) { /* no CTA */ }

  function val(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : null;
  }
  function list(items) { return "<ul>" + items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }

  var WARN = '<a href="warning-signs.html">emergency warning signs</a>';

  function decide() {
    var who = val("who"), course = val("course"), day = val("day"), risk = val("risk"), preg = val("preg");

    if (course === "emergency") {
      return { route: "er", tier: "er", label: "Get medical care right away", title: "Go to an emergency department or call 911",
        body: "You selected an emergency warning sign. Do not wait for a telehealth visit, a test, or a prescription.",
        items: ["Call 911 for trouble breathing, bluish lips, a seizure, or someone who cannot be woken.", "Otherwise go to the nearest emergency department now.", "Bring a list of medicines and the day symptoms started."] };
    }
    if (!who) return null;
    if (who === "child") {
      return { route: "pediatric", tier: "today", label: "Call today", title: "Call the child's pediatrician today",
        body: "Children with flu should be assessed by their own clinician. Children under 5, and especially under 2, are at higher risk, and antivirals are dosed by weight.",
        items: ["Many pediatric offices have a same-day sick line or a nurse line after hours.", "If the child has any " + WARN + ", go to an emergency department or call 911.", "No aspirin for children or teenagers with flu."] };
    }
    if (!course || !day || !risk || !preg) {
      return { route: "pending", tier: "start", label: "Keep going", title: "Answer the remaining questions",
        body: "Your result will appear once questions 2 to 5 are answered. If anyone has trouble breathing, chest pain, confusion, or a seizure, call 911 now.", items: [] };
    }
    if (preg === "yes") {
      return { route: "call", tier: "today", label: "Call a clinician today", title: "Call your prenatal care team today",
        body: "Pregnancy and the 2 weeks after it are a higher-risk time. CDC recommends antiviral treatment as soon as possible, on any day of illness, and oral oseltamivir is the preferred medicine in pregnancy. Baloxavir (Xofluza) is not recommended.",
        items: ["It is not too late, even after 48 hours.", "Acetaminophen can bring a fever down; still call your clinician.", 'Go to an emergency department for trouble breathing, chest or belly pain, severe vomiting, a high fever that does not respond to acetaminophen, or less movement from your baby. <a href="pregnancy.html">More on pregnancy</a>.'] };
    }
    if (course === "worse") {
      return { route: "call", tier: "today", label: "Call a clinician today", title: "Getting worse should be checked today",
        body: "CDC recommends antiviral treatment for illness that is severe or getting worse, no matter how many days it has lasted. A clinician should also look for complications such as pneumonia, which is best done in person.",
        items: ["Contact your clinician or go to urgent care today.", "If breathing becomes hard, or there is chest pain or confusion, go to an emergency department.", '<a href="getting-worse.html">When flu gets worse</a>.'] };
    }
    if (risk === "yes" || risk === "unsure") {
      return { route: "visit", tier: "call", label: "Get evaluated today", title: "It is not too late: ask about an antiviral today",
        body: (risk === "unsure" ? "If you might be in a higher-risk group, it is safest to act as if you are. " : "") + "CDC recommends antiviral treatment as soon as possible for people at higher risk, on any day of illness and without waiting for a test.",
        items: [day === "d12" ? "You are inside the first 48 hours, when antivirals work best. Do not wait to see if it passes." : "Even past 48 hours, CDC recommends treatment for higher-risk people.", "Your own clinician, an urgent care, or a video visit can all evaluate you.", 'Check the <a href="high-risk.html">higher-risk list</a> and watch for ' + WARN + "."], cta: true };
    }
    if (day === "d12") {
      return { route: "visit", tier: "call", label: "Optional: same-day visit", title: "An antiviral is an option within 48 hours",
        body: "For otherwise healthy adults, CDC says treatment can be considered if it can start within two days of getting sick. It shortens illness by about a day. Rest at home is also reasonable.",
        items: ["If you want treatment, get seen today, in person or by video.", "Rest, fluids, and acetaminophen or ibuprofen if they are safe for you.", "Watch for " + WARN + "."], cta: true };
    }
    return { route: "home", tier: "home", label: "Home care", title: "Rest at home and watch for changes",
      body: "For an otherwise healthy adult past the first two days who is steady or improving, CDC's antiviral guidance does not call for treatment. Most people recover in a few days to less than two weeks.",
      items: ['Stay home until you have gone 24 hours with symptoms improving and no fever without medicine. <a href="contagious.html">Details</a>.', 'For aches and fever, see <a href="symptom-relief.html">symptom relief</a>.', "Get care the same day if you start getting worse, or if a fever or cough improves and then comes back.", "Know the " + WARN + "."] };
  }

  function ctaHtml() {
    if (!cfg.cta) return "";
    return '<div class="cta-box"><p>Adults 18+ can see a board-certified physician by video today. The physician decides whether an antiviral is right for you; a visit may result in a prescription if appropriate, but it is not guaranteed.</p>' +
      '<p class="small muted">' + cfg.cta.org + ": " + cfg.cta.line + "</p>" +
      '<div class="btn-row"><a class="btn btn-primary" href="' + cfg.cta.url + '" target="_blank" rel="noopener">Book a ' + cfg.cta.org + " visit</a></div></div>";
  }

  function render() {
    var r = decide();
    if (!r) return;
    out.setAttribute("data-tier", r.tier);
    out.setAttribute("data-route", r.route);
    // The CTA is shown only on the adult "visit" route: never for emergencies, children, pregnancy, or worsening illness.
    var showCta = r.cta === true && r.route === "visit" && val("who") === "adult";
    out.innerHTML = '<p class="result-tier">' + r.label + "</p><h3>" + r.title + "</h3><p>" + r.body + "</p>" +
      (r.items.length ? list(r.items) : "") + (showCta ? ctaHtml() : "") +
      '<p class="small muted">General guidance based on CDC recommendations, not a diagnosis. When in doubt, contact a clinician.</p>';
  }

  form.addEventListener("change", render);
  render();
})();
