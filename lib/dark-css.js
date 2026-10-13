// Dark theme helper.
//
// The theme lives on <html data-theme="dark|light">. The inline script in
// app/layout.js sets it before first paint from the saved choice
// (localStorage 'tdmd-theme') or, when nothing is saved, the system setting.
// The SiteHeader toggle flips it and saves the choice.
//
// Write dark rules once with the DARK placeholder at the start of each
// selector:
//
//   darkCSS(`DARK .card{background:var(--tdmd-card);}`)
//
// and this returns two copies: one keyed on :root[data-theme="dark"] (the
// toggle, or the saved choice), and one inside
// @media (prefers-color-scheme: dark) keyed on :root:not([data-theme="light"])
// so visitors without JavaScript still follow their system setting.
export function darkCSS(rules) {
  const explicit = rules.replace(/DARK/g, ':root[data-theme="dark"]');
  const system = rules.replace(/DARK/g, ':root:not([data-theme="light"])');
  return `${explicit}\n@media (prefers-color-scheme: dark){\n${system}\n}\n`;
}

// Dark values for the shared --tdmd-* tokens. Text pairs checked against
// --tdmd-card (#122028) and the page background (#0a171c):
//   text #e2edf0 13.9:1, muted #9fb6bf 7.3:1, teal #2bc4cf 7.8:1,
//   navy #a0d8e8 10.7:1, accent #ff7a5c 6.5:1.
// The on-* tokens are the text colors for filled buttons and badges:
//   on-teal #04252b on #2bc4cf 7.6:1, on-accent #1a0b06 on #ff5a36 6.2:1.
export const DARK_TOKENS = `
    --tdmd-teal:#2bc4cf;
    --tdmd-navy:#a0d8e8;
    --tdmd-accent:#ff7a5c;
    --tdmd-accent-fill:#ff5a36;
    --tdmd-bg-soft:#0f1f24;
    --tdmd-border:#33505d;
    --tdmd-text:#e2edf0;
    --tdmd-muted:#9fb6bf;
    --tdmd-text-muted:#9fb6bf;
    --tdmd-card:#122028;
    --tdmd-page:#0a171c;
    --tdmd-bg:#0a171c;
    --tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);
    --tdmd-on-teal:#04252b;
    --tdmd-on-navy:#04252b;
    --tdmd-on-accent:#1a0b06;
    --tdmd-focus:#ffb199;
    color-scheme: dark;
`;
