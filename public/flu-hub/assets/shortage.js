// FDA antiviral shortage badge: fills every <div id="shortage-badge"> from data/shortages.json.
// Works from any page depth: the data path is resolved from this script's own URL (assets/ -> ../data/).
// Keep the wording in sync with shortageText() in scripts/lib/local.mjs.
(function () {
  "use strict";
  const el = document.getElementById("shortage-badge");
  if (!el) return;
  const me = document.currentScript || document.querySelector('script[src$="shortage.js"]');
  const url = new URL("../data/shortages.json", me ? me.src : location.href).href;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fd = (iso) => { if (!iso) return ""; const d = new Date(String(iso).slice(0, 10) + "T00:00:00Z"); return isNaN(d) ? esc(iso) : `${MON[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`; };

  function text(sh) {
    const when = fd(sh.fda_updated || sh.checked);
    const link = `<a href="${esc(sh.url)}" target="_blank" rel="noopener">FDA drug shortage list</a>`;
    const drugs = Object.keys(sh.drugs).map((k) => sh.drugs[k]);
    const listed = drugs.filter((x) => x.listed);
    if (!listed.length) {
      return `<p><b>No national shortage of oseltamivir (Tamiflu) is listed by FDA as of ${when}.</b> Local pharmacies can still run out; call ahead.</p><p class="small muted">Baloxavir (Xofluza), zanamivir (Relenza), and peramivir (Rapivab) are not listed either. Source: ${link}.</p>`;
    }
    const o = sh.drugs.oseltamivir;
    return listed.map((x) => {
      const cur = x.records.filter((r) => r.status === "Current");
      const det = cur.slice(0, 4).map((r) => `<li>${esc(r.presentation || r.name)}${r.availability ? ": " + esc(r.availability) : ""}${r.info ? " (" + esc(r.info) + ")" : ""}</li>`).join("");
      return `<p><b>FDA lists a current shortage of ${esc(x.label)}</b>, updated ${esc((cur[0] && cur[0].updated) || when)}.</p>${det ? `<ul class="small">${det}</ul>` : ""}`;
    }).join("") + `<p>${o && !o.listed ? "No shortage of oseltamivir (Tamiflu) is listed. " : ""}Pharmacies may still have other strengths or forms, or can suggest another antiviral. Call ahead before you go. Source: ${link}, as of ${when}.</p>`;
  }

  fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r.status))).then((sh) => {
    if (!sh || !sh.drugs) return;
    document.querySelectorAll("#shortage-badge").forEach((b) => {
      b.classList.add("shortage-badge");
      b.dataset.state = Object.keys(sh.drugs).some((k) => sh.drugs[k].listed) ? "listed" : "none";
      b.innerHTML = text(sh);
    });
  }).catch(() => {
    if (!el.innerHTML.trim()) el.innerHTML = '<p>Check the <a href="https://www.fda.gov/drugs/drug-safety-and-availability/drug-shortages" target="_blank" rel="noopener">FDA drug shortage list</a> for flu antivirals. Local pharmacies can run out even without a national shortage; call ahead.</p>';
  });
})();
