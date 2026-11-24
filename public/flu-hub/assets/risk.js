// High-risk checklist: updates the result card as boxes are checked. Stores nothing.
(function () {
  "use strict";
  const form = document.getElementById("risk-form");
  const out = document.getElementById("risk-result");
  if (!form || !out) return;
  form.addEventListener("change", () => {
    const n = form.querySelectorAll("input:checked").length;
    if (!n) {
      out.dataset.tier = "home";
      out.innerHTML = `<p class="result-tier">Your result</p><h3>No higher-risk factors selected</h3><p>You can still get very sick from flu. Antiviral treatment is recommended for anyone whose illness is severe or getting worse, and a clinician may treat otherwise healthy adults who are seen within two days of getting sick.</p>`;
    } else {
      out.dataset.tier = "today";
      out.innerHTML = `<p class="result-tier">Higher risk</p><h3>${n} risk factor${n > 1 ? "s" : ""} selected</h3><p>If flu symptoms start, contact a clinician the same day. CDC recommends antiviral treatment as soon as possible for people in these groups, without waiting for a test, and a clinician may still treat after 48 hours, especially if illness is severe or getting worse.</p><ul><li>Get a flu vaccine every season; if 65 or older, ask for a high-dose, adjuvanted, or recombinant vaccine.</li><li>Know the <a href="warning-signs.html">emergency warning signs</a>.</li></ul>`;
    }
  });
})();
