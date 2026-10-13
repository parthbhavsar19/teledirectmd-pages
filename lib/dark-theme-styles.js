// Site-wide dark theme overrides for shared components, plus a safety net for
// inline styles. Page-family styles keep their own dark rules next to their
// light rules (see lib/homepage-styles.js, app/cost/page.js, etc.).
// Token values live in lib/dark-css.js.
import { darkCSS } from './dark-css';

// '#abc' or '#aabbcc' (optionally ending in ; or ") as the browser writes it
// back: rgb(r, g, b). Used for styles React sets after hydration, which the
// browser serializes as "prop: rgb(...)" instead of the "prop:#hex" React
// writes into the static HTML.
function toRgb(v) {
  if (v === 'white') return 'rgb(255, 255, 255)';
  let h = v.replace(/[;"]$/, '').replace('#', '');
  if (!/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(h)) return null;
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return `rgb(${n.join(', ')})`;
}

// Match an inline style property exactly, either as the first declaration or
// after a semicolon, in both the server-rendered form ("prop:#hex", no
// spaces) and the browser-serialized form ("prop: rgb(...)").
const inline = (prop, values) => {
  const parts = [];
  for (const v of values) {
    parts.push(`[style^="${prop}:${v}" i]`, `[style*=";${prop}:${v}" i]`);
    const rgb = toRgb(v);
    if (rgb) parts.push(`[style^="${prop}: ${rgb}"]`, `[style*="; ${prop}: ${rgb}"]`);
  }
  return [...new Set(parts)].join(',');
};

// Light surfaces that pages set inline. In dark mode they become cards.
const LIGHT_INLINE_BG = ['#fff;', '#fff"', '#ffffff', '#eaf7f8', '#e5f2f1', '#f0f6f7', '#fafcfd', '#f9fafb',
  '#f3fafb', '#f0fdfa', '#e6f3f4', '#f8fafc', 'white'];
// Pale tinted notes (amber, coral, purple) keep a hint of their hue.
const WARM_INLINE_BG = ['#fff3cd', '#fff8f5', '#fff0ec', '#fdeee7', '#fef3c7', '#fff7ed'];
const PURPLE_INLINE_BG = ['#f3eaff'];
// Dark inks set inline that would vanish on a dark surface.
const DARK_INLINE_INK = ['#003e52', '#002a3a', '#0d384d', '#1e556e', '#1a1a1a', '#111827', '#0a2438', '#12323a', '#1a3140', '#001f2e',
  '#333', '#222', '#111', '#000', '#374151', '#444'];
const MUTED_INLINE_INK = ['#666', '#4d6470', '#8a99a1', '#4b5563', '#6b7280', '#4a5d66', '#4a6870', '#456676', '#6b8b95', '#525252', '#4b5f66'];
const TEAL_INLINE_INK = ['#1a7f7f', '#379894', '#006b73', '#0d9488', '#0f766e', '#14706b', '#008c96'];
const BLUE_INLINE_INK = ['#1a5fb4', '#0073b7'];
const PURPLE_INLINE_INK = ['#7b2cbf'];
// Page-level tinted backgrounds set inline on whole-page wrappers.
const PAGE_INLINE_BG = ['#f5fafa', '#faf8f3'];
const AMBER_INLINE_INK = ['#856404', '#533f03', '#78350f', '#7c2d12', '#b45309'];
const CORAL_INLINE_INK = ['#dc643c'];

// [style^="...;"] cannot express "value then end of attribute", so '#fff"' is
// written as a value and handled here: '#fff;' and '#fff"' cover "#fff" as a
// whole value without also catching #fff3cd and friends.
function bgSelector(values) {
  const parts = [];
  for (const v of values) {
    if (v.endsWith('"')) {
      const bare = v.slice(0, -1);
      parts.push(`[style="background:${bare}" i]`, `[style$=";background:${bare}" i]`,
        `[style^="background:${bare};" i]`, `[style*=";background:${bare};" i]`);
      const rgb = toRgb(bare);
      parts.push(`[style^="background: ${rgb}"]`, `[style*="; background: ${rgb}"]`);
    } else {
      parts.push(inline('background', [v]), inline('background-color', [v]));
    }
  }
  return [...new Set(parts)].join(',');
}

export const darkThemeCSS = darkCSS(`
  /* ---- Shared tdmd-styles pieces that hardcode light colors ---- */
  DARK .tdmd-statstrip{background:linear-gradient(180deg,#152731 0%,#122028 100%);}
  DARK .tdmd-trust-badge{background:#13303a;color:#cdeef2;border-color:#2b5866;}
  DARK .tdmd-savings-callout{background:linear-gradient(90deg,#2e2512 0%,#3a2d12 100%);border-color:#8a6a2c;}
  DARK .tdmd-savings-num{color:#ffd27a;}
  DARK .tdmd-savings-text{color:#f3dfb8;}
  DARK .tdmd-savings-text a{color:#ffd27a;}
  DARK .tdmd-tldr{background:#10242b;border-color:#2b5866;}
  DARK .tdmd-answer-stats{color:var(--tdmd-text);}
  DARK .tdmd-answer-stats span{background:var(--tdmd-card);border-color:#2b5866;}
  DARK .tdmd-hero-card{border-color:var(--tdmd-border);}
  DARK .tdmd-bottom-cta{background:linear-gradient(135deg,rgba(43,196,207,0.10),rgba(160,216,232,0.04));}
  DARK .tdmd-bar-track{border-color:rgba(255,255,255,0.06);}
  DARK .tdmd-bar-fill{background:linear-gradient(90deg,#2bc4cf,rgba(43,196,207,0.55));}
  DARK .tdmd-bar-fill-tdmd{background:linear-gradient(90deg,#ff7a5c,rgba(255,122,92,0.6));}
  DARK .tdmd-vbar__fill{background:linear-gradient(180deg,#5fb7c9 0%,#2d7f8f 100%);}
  DARK .tdmd-checklist--good li::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%232bc4cf' d='M9 16.2 4.8 12 3.4 13.4 9 19 21 7 19.6 5.6z'/%3E%3C/svg%3E");}
  DARK .tdmd-decision-step-check{border-top-color:#f0b429;}
  DARK .tdmd-related-card:focus,DARK .tdmd-related-card:hover{border-color:var(--tdmd-teal);}
  DARK .tdmd-mobile-cta{background:var(--tdmd-accent-fill);color:var(--tdmd-on-accent);}
  DARK .tdmd-mobile-overlay{background:rgba(0,0,0,0.5);}
  DARK .tdmd-sticky-bar-cta{background:var(--tdmd-teal);}
  DARK .tdmd-mobile-sticky-bar{box-shadow:0 -2px 12px rgba(0,0,0,0.5);}

  /* Footer is already dark; deepen it slightly and keep its links readable. */
  DARK .tdmd-site-footer{background:#0b2f3b;}
  DARK .tdmd-footer-dot{color:rgba(255,255,255,0.5);}
  DARK .tdmd-footer-logo img{box-shadow:0 0 0 1px rgba(255,255,255,0.12);}

  /* Condition and state pages: answer block and state opener are inline-styled. */
  DARK .tdmd-answer-block{background:#10242b !important;border-left-color:var(--tdmd-teal) !important;}
  DARK .tdmd-state-opener{background:#0f1f24 !important;border-left-color:var(--tdmd-teal) !important;}
  DARK .tdmd-answer-block p,DARK .tdmd-state-opener p{color:var(--tdmd-text) !important;}
  DARK .tdmd-answer-block p:first-child{color:var(--tdmd-navy) !important;}

  /* State landing pages: license verify bar. */
  DARK .tdmd-verify-bar{background:#122028;border-color:#2b4652;border-left-color:var(--tdmd-teal);}
  DARK .tdmd-verify-item{color:var(--tdmd-text);}
  DARK .tdmd-how-step,DARK .tdmd-pricing-card,DARK .tdmd-reg-block,DARK .tdmd-hero-card{border-color:var(--tdmd-border);}

  /* Press strip: the strip goes dark; logos keep their white tiles, since
     most are dark ink on a transparent or white background. */
  DARK .tdmd-press-strip{background:#0f1f24;border-color:var(--tdmd-border);}
  DARK .tdmd-press-strip__label{color:var(--tdmd-muted);}
  DARK .tdmd-press-strip__link{background:#f4f6f7;box-shadow:none;}
  DARK .tdmd-press-strip__cta a{color:var(--tdmd-teal);}
  DARK .tdmd-press-strip__cta a:hover{color:var(--tdmd-navy);}

  /* White pill buttons on colored strips: the navy label color is a token
     that turns light in dark mode, so pin it. */
  DARK a[class*="__cta-btn"],DARK .rv-cta-btn{background:#ffffff;color:#003e52;}
  DARK .tdm-about-page a.tdm-btn{color:#0b1d3a;}
  DARK .tdmd-vt-cond__stat-num{color:#f0b37a;}
  DARK .tdmd-vt-cond__pep h3{color:#6fd39b;}

  /* Clinical evidence reviews and the tribal health partner page: they
     define --tdmd-teal-dark as a heading ink and as a badge fill. */
  DARK :is(.tdmd-cehub-wrap,.tdmd-ce-wrap,.tdmd-partner-wrap){--tdmd-teal-dark:#a0d8e8;}
  DARK :is(.tdmd-ce-badge,.tdmd-partner-badge){background:#0f3a4a;color:#ffffff;}
  DARK :is(.tdmd-cehub-wrap,.tdmd-ce-wrap,.tdmd-partner-wrap) :is(th,.tdmd-cehub-tag,.tdmd-ce-effect){background:#16303a;}
  DARK .tdmd-cehub-methods{background:linear-gradient(135deg,#0f1f24 0%,#10242b 100%);}
  DARK .ce-conf-info{background:#0b7680;}

  /* Payer pills and first-line rows on the state condition pages. */
  DARK .tdmd-ca-cond__payor-pill--good{background:#173226;color:#8fe0a8;}
  DARK .tdmd-ca-cond__payor-pill--pending{background:#3a2e10;color:#f0c870;}
  DARK .tdmd-ca-cond__payor-pill--none{background:#3a1717;color:#f3a0a0;}
  DARK .tdmd-ca-cond__med-firstline{background:linear-gradient(90deg,#173226,transparent);}
  DARK .tdmd-ca-cond__dual-card--good{border-left-color:#4caf7a;}
  DARK .tdmd-ca-cond__cta-strip{background:linear-gradient(135deg,#0f5f66 0%,#0d3a48 100%);color:#fff;}
  DARK .tdmd-ca-cond__cta-btn{background:#ffffff;color:#003e52;}

  /* Links with no color of their own get the brand teal instead of the
     browser's dark-mode blue and purple. :where() keeps this at the lowest
     specificity, so any component link color still wins. */
  :where(DARK) a{color:var(--tdmd-teal);}

  /* Form fields follow the theme. */
  DARK input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),DARK select,DARK textarea{
    background-color:#0f1f24;color:var(--tdmd-text);border-color:var(--tdmd-border);
  }
  DARK ::placeholder{color:#7f97a0;}

`);

// The inline-style safety net is long, so it ships once, keyed on the
// attribute only. The theme script in app/layout.js always sets the
// attribute when JavaScript runs; without JavaScript, the system-setting copy
// of the rules above still applies.
export const darkInlineSafetyNetCSS = `
  /* ---- Safety net for inline styles ---- */
  :root[data-theme="dark"] :is(${bgSelector(LIGHT_INLINE_BG)}){background-color:var(--tdmd-card) !important;background-image:none !important;}
  :root[data-theme="dark"] :is(${bgSelector(WARM_INLINE_BG)}){background-color:#2e2512 !important;border-color:#8a6a2c !important;}
  :root[data-theme="dark"] :is(${bgSelector(PURPLE_INLINE_BG)}){background-color:#2a1f3d !important;}
  :root[data-theme="dark"] :is(${inline('color', DARK_INLINE_INK)}){color:var(--tdmd-text) !important;}
  :root[data-theme="dark"] :is(${inline('color', MUTED_INLINE_INK)}){color:var(--tdmd-muted) !important;}
  :root[data-theme="dark"] :is(${inline('color', TEAL_INLINE_INK)}){color:var(--tdmd-teal) !important;}
  :root[data-theme="dark"] :is(${inline('color', AMBER_INLINE_INK)}){color:#f3d58a !important;}
  :root[data-theme="dark"] :is(${inline('color', BLUE_INLINE_INK)}){color:#8fc1ff !important;}
  :root[data-theme="dark"] :is(${inline('color', CORAL_INLINE_INK)}){color:#ff9a7a !important;}
  :root[data-theme="dark"] :is(${inline('color', PURPLE_INLINE_INK)}){color:#cfa6f5 !important;}
  :root[data-theme="dark"] :is(${bgSelector(PAGE_INLINE_BG)}){background-color:var(--tdmd-page) !important;}
  :root[data-theme="dark"] :is(${inline('border-left', ['4px solid #003e52', '3px solid #003e52'])}){border-left-color:var(--tdmd-navy) !important;}
`;
