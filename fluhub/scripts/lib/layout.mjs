import { SITE } from "../../content/site.mjs";

export const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export const NAV = [
  ["activity.html", "This week"],
  ["flu-near-you.html", "Near you"],
  ["seasons.html", "Seasons compared"],
  ["states.html", "States"],
  ["symptoms.html", "Symptom check"],
  ["treatment.html", "Treatment"],
  ["vaccines.html", "Vaccines"],
  ["find-a-flu-shot.html", "Find a shot"],
  ["bird-flu.html", "Bird flu"],
  ["media.html", "Press"],
];

const FOOT = [
  ["Track flu", [["activity.html", "This week's activity"], ["flu-near-you.html", "Flu in your county"], ["seasons.html", "Seasons compared"], ["states.html", "State-by-state"], ["bird-flu.html", "Bird flu (H5N1)"]]],
  ["If you're sick", [["symptoms.html", "Symptom check"], ["warning-signs.html", "Emergency warning signs"], ["too-late-for-tamiflu.html", "Is it too late for Tamiflu?"], ["contagious.html", "Contagious period and returning to work"], ["getting-worse.html", "Getting worse or fever came back"], ["home-test.html", "Home test results: what now"], ["symptom-relief.html", "Symptom relief at home"], ["lingering-cough.html", "Lingering cough and fatigue"]]],
  ["Treatment", [["treatment.html", "Antiviral treatment"], ["antiviral-cost.html", "Antiviral cost and access"], ["tamiflu-side-effects.html", "Tamiflu side effects"], ["household.html", "Protecting your household"], ["high-risk.html", "Who is at higher risk"], ["pregnancy.html", "Flu in pregnancy"], ["kids-tamiflu.html", "Tamiflu for children"], ["testing.html", "Testing, and flu vs. COVID vs. RSV"], ["flu-a-vs-b.html", "Flu A vs. flu B"]]],
  ["Prevention", [["vaccines.html", "2026–27 flu vaccines"], ["find-a-flu-shot.html", "Find a flu shot"], ["child-flu-shot.html", "Children's flu shots in 2026"], ["flu-shot-myths.html", "Flu shot myths and facts"], ["faq.html", "Common questions"]]],
  ["About", [["media.html", "Press and data desk"], ["methods.html", "Sources, methods, and review"]]],
  ["TeleDirectMD guides", [
    ["https://teledirectmd.com/health-guides/flu-treatment-guide/", "Flu treatment guide"],
    ["https://teledirectmd.com/health-guides/flu-test-guide/", "Flu testing guide"],
    ["https://teledirectmd.com/health-guides/flu-shot-side-effects-guide/", "Flu shot side effects"],
    ["https://teledirectmd.com/health-guides/flu-season-guide/", "When is flu season?"],
    ["https://teledirectmd.com/health-guides/cold-and-flu-guide/", "Cold or flu?"],
  ]],
];

const moon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;

/**
 * page({ path, title, description, active, body, jsonld, scripts, data })
 * path is relative to site root, e.g. "index.html" or "state/georgia.html".
 */
export function page(o) {
  const depth = o.path.split("/").length - 1;
  const R = "../".repeat(depth);
  const canonical = SITE.baseUrl + o.path.replace(/index\.html$/, "");
  const ld = (o.jsonld || []).map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(o.title)}${o.path === "index.html" ? "" : " | " + SITE.name}</title>
<meta name="description" content="${esc(o.description)}">
<link rel="canonical" href="${canonical}">${o.noindex ? '\n<meta name="robots" content="noindex, follow">' : ""}
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect width=%2232%22 height=%2232%22 rx=%226%22 fill=%22%231c5b4c%22/%3E%3Cpath d=%22M5 22 C10 22 12 8 16 8 S22 20 27 20%22 fill=%22none%22 stroke=%22white%22 stroke-width=%223%22 stroke-linecap=%22round%22/%3E%3C/svg%3E">
<link rel="stylesheet" href="${R}assets/site.css">
<script>try{var t=localStorage.getItem("fluhub-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>
${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="alertbar"><div class="wrap"><strong>Emergency?</strong><span>Trouble breathing, chest pain, confusion, a seizure, or a child who is hard to wake: call 911 or go to an emergency department now.</span><a href="${R}warning-signs.html">All warning signs</a></div></div>
<header class="topbar"><div class="topbar-in">
<a class="brand" href="${R}index.html"><span class="brand-mark">Flu<i>Hub</i></span><span class="brand-week">${esc(SITE.weekLabel)}</span></a>
<nav class="nav" aria-label="Main">${NAV.map(([h, l]) => `<a href="${R}${h}"${o.active === h ? ' aria-current="page"' : ""}>${l}</a>`).join("")}</nav>
<button class="theme-btn" type="button" aria-label="Switch light or dark theme">${moon}</button>
</div></header>
<main id="main"><div class="wrap">
${o.body}
</div></main>
<footer class="site"><div class="wrap">
<div class="foot-grid">
${FOOT.map(([h, links]) => `<div><h4>${h}</h4><ul>${links.map(([u, l]) => `<li><a href="${u.startsWith("http") ? u : R + u}">${l}</a></li>`).join("")}</ul></div>`).join("")}
</div>
<p class="disclaimer">${SITE.name} is an educational resource. It does not diagnose, treat, or replace care from a clinician who can examine you. Surveillance figures are preliminary and revised by CDC as reports come in. Clinical editor: ${esc(SITE.editor)}. Data refreshed ${esc(SITE.builtLabel)}. Questions or corrections: <span class="mono">${esc(SITE.email)}</span>.</p>
</div></footer>
<script src="${R}assets/site.js" defer></script>
${(o.scripts || []).map((s) => `<script src="${R}assets/${s}" defer></script>`).join("\n")}
</body>
</html>
`;
}

export function pageHead({ eyebrow, title, lede, crumbs, byline, R = "" }) {
  return `<header class="page-head">
${crumbs ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs.map(([h, l]) => (h ? `<a href="${R}${h}">${esc(l)}</a>` : esc(l))).join(" / ")}</nav>` : ""}
${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
<h1>${title}</h1>
${lede ? `<p class="lede">${lede}</p>` : ""}
${byline ? `<div class="byline">${byline}</div>` : ""}
</header>`;
}

/** Clinical byline: who wrote it, the guidance it follows, and when sources were last checked. */
export function clinicalByline(checked, basis) {
  return `<span>Clinical editor <b>${esc(SITE.editor)}</b></span><span>Follows <b>${esc(basis)}</b></span><span>Sources checked <b>${esc(checked)}</b></span>`;
}

/** Numbered source list. refs: [{id, label, url, date}] */
export function sourceList(refs) {
  return `<section class="section sources" id="sources"><h2 class="h-small">Sources</h2><ol>${refs.map((r) => `<li id="ref-${r.id}"><a href="${r.url}" rel="noopener" target="_blank">${esc(r.label)}</a>${r.date ? `, ${esc(r.date)}` : ""}.</li>`).join("")}</ol></section>`;
}

export const cite = (...ids) => `<span class="cite">${ids.map((i) => `<a href="#ref-${i}">[${i}]</a>`).join("")}</span>`;

export const icon = {
  alert: `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  check: `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  info: `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v6M12 7.5h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
};
