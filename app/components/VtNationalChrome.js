// National-aesthetic bridge for the Vermont state x condition pages.
//
// The VT pages already own their content (unique opener capsule, cost section,
// medication tables, FAQ) in the tdmd-* design system. This module only brings
// the national condition-page look (Fraunces headings, DM Sans body, and the
// .cpr-answer quick-answer capsule chrome from ConditionPageRedesign.js) to
// those existing elements. It adds no body copy, so per-page uniqueness and
// 5-gram similarity are unaffected.
//
// Everything is scoped under .tdmd-natl, a bridge class on each VT page root.
// Other state and national pages never carry that class, so they are untouched.
// Fonts come from the global font link in app/layout.js (no @import here).
// Capsule tokens (#EAF7F8 fill, #006B73 rule, #003E52 ink) match .cpr-answer.
// Links in the capsule use #006B73 (5.6:1 on #EAF7F8) rather than #0C8F99,
// which is below AA for body text on that fill.

import { darkCSS } from '../../lib/dark-css';

export const VT_NATL_CSS = `
.tdmd-natl{font-family:'DM Sans',system-ui,-apple-system,sans-serif;}
.tdmd-natl h1,.tdmd-natl h2,.tdmd-natl h3,.tdmd-natl .tdmd-hero-card h2{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
.tdmd-natl .tdmd-hero h1{letter-spacing:-0.015em;}

/* National quick-answer capsule chrome on the page's existing opener paragraph. */
.tdmd-natl .tdmd-condition-opener{background:#EAF7F8;border-left:4px solid #006B73;border-radius:0 10px 10px 0;padding:1rem 1.25rem;margin:1.5rem 0 0.75rem;}
.tdmd-natl .tdmd-condition-opener p{color:#003E52;font-weight:500;}
.tdmd-natl .tdmd-condition-opener p a{color:#006B73;}
` + darkCSS(`
DARK .tdmd-natl .tdmd-condition-opener{background:#0e2b30;border-left-color:#2aa9b3;}
DARK .tdmd-natl .tdmd-condition-opener p{color:#d7ebee;}
DARK .tdmd-natl .tdmd-condition-opener p a{color:#7fd0d8;}
`);

// Injects the bridge stylesheet. Mount once per VT page, anywhere inside the
// page tree; the CSS is scoped to .tdmd-natl.
export function VtNationalStyle() {
  return <style dangerouslySetInnerHTML={{ __html: VT_NATL_CSS }} />;
}
