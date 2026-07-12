// National-aesthetic bridge for the Vermont state×condition pages.
//
// The VT pages already own their content (unique opener capsule, cost section,
// medication tables, FAQ) in the tdmd-* design system. This module only brings
// the NATIONAL condition-page *look* (Fraunces headings + DM Sans body, and the
// national quick-answer capsule chrome from `.cpr-answer`) to those existing,
// already-unique elements — it adds no body copy, so per-page uniqueness and
// 5-gram similarity are unaffected.
//
// Everything is scoped under `.tdmd-natl`, a bridge class added to each VT page
// root. CA / VA / national pages never carry that class, so they are untouched.
// The capsule tokens (#EAF7F8 fill, #006B73 rule, #003E52 ink) are the exact
// national `.cpr-answer` values from conditionRedesignStyles.js, plus dark-mode
// variants so the tdmd data-theme="dark" pages stay legible.

export const VT_NATL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap');
.tdmd-natl{font-family:'DM Sans',system-ui,-apple-system,sans-serif;}
.tdmd-natl h1,.tdmd-natl h2,.tdmd-natl h3,.tdmd-natl .tdmd-hero-card h2{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
.tdmd-natl .tdmd-hero h1{letter-spacing:-0.015em;}

/* National quick-answer capsule chrome applied to the page's existing,
   already-unique opener paragraph (the speakable summary). */
.tdmd-natl .tdmd-condition-opener{background:#EAF7F8;border-left:4px solid #006B73;border-radius:0 10px 10px 0;padding:1rem 1.25rem;margin:1.5rem 0 0.75rem;}
.tdmd-natl .tdmd-condition-opener p{color:#003E52;font-weight:500;}
.tdmd-natl .tdmd-condition-opener p a{color:#0C8F99;}
:root[data-theme="dark"] .tdmd-natl .tdmd-condition-opener{background:#0e2b30;border-left-color:#2aa9b3;}
:root[data-theme="dark"] .tdmd-natl .tdmd-condition-opener p{color:#d7ebee;}
:root[data-theme="dark"] .tdmd-natl .tdmd-condition-opener p a{color:#7fd0d8;}
`;

// Injects the national-aesthetic bridge stylesheet. Mount once per VT page,
// anywhere inside the page tree; the CSS is scoped to `.tdmd-natl`.
export function VtNationalStyle() {
  return <style dangerouslySetInnerHTML={{ __html: VT_NATL_CSS }} />;
}
