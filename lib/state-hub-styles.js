// State hub (/{state}/) layout, 2026-11-23 redesign.
//
// Scoped under .shx so nothing leaks into condition, cost or compare pages.
// Colors come from the shared --tdmd-* tokens, which already have dark values
// (lib/dark-css.js), so most rules need no dark twin. The few hardcoded
// surfaces get one in the darkCSS block at the end. No images, no web fonts
// beyond the Fraunces and DM Sans the layout already loads, no JS.
import { darkCSS } from './dark-css';

export const stateHubCSS = `
  .shx{--shx-mint:#eaf6f7;--shx-line:#d6e4e7;--shx-ink:#12323a;--shx-gold:#e8a33d;}
  .shx h2,.shx h3.shx-serif{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
  .shx h2{font-size:clamp(1.6rem,3.2vw,2.15rem);line-height:1.15;color:var(--tdmd-navy);margin:0 0 .6rem;}
  .shx-lede{max-width:62ch;color:var(--tdmd-muted);font-size:1rem;line-height:1.6;margin:0 0 1.75rem;}
  .shx :focus-visible{outline:3px solid var(--tdmd-focus);outline-offset:2px;border-radius:6px;}

  /* Hero fact sheet: a definition list, so each fact is a label/value pair
     that extractors can read without the surrounding prose. */
  .shx-glance h2{font-size:1.15rem;margin:0 0 .85rem;color:var(--tdmd-navy);}
  .shx-glance dl{margin:0;display:grid;gap:0;}
  .shx-glance .shx-row{display:grid;grid-template-columns:7.2rem 1fr;gap:.75rem;padding:.6rem 0;border-top:1px solid var(--shx-line);}
  .shx-glance .shx-row:first-child{border-top:0;padding-top:0;}
  .shx-glance dt{font-size:.82rem;color:var(--tdmd-muted);line-height:1.35;padding-top:.1rem;}
  .shx-glance dd{margin:0;font-size:.93rem;line-height:1.4;color:var(--tdmd-text);}
  .shx-glance dd strong{font-weight:700;}
  .shx-glance .shx-fee{font-family:'Fraunces',Georgia,serif;font-size:2.3rem;font-weight:600;color:var(--tdmd-navy);line-height:1;display:block;margin-bottom:.2rem;}
  .shx-glance .shx-verify{display:inline-block;margin-top:.2rem;font-size:.85rem;font-weight:700;color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;}
  @media (max-width:420px){.shx-glance .shx-row{grid-template-columns:1fr;gap:.15rem;}}

  /* Conditions. One memorable element: a "start here" row with glyphs, then
     the full catalogue set as an index (type and rules, not a card grid). */
  .shx-care{padding:3rem 0 2.5rem;}
  .shx-start{margin:0 0 2.25rem;}
  .shx-start h3{font-size:1.05rem;color:var(--tdmd-navy);margin:0 0 .8rem;font-weight:700;}
  .shx-start ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(158px,1fr));gap:.75rem;}
  .shx-start a{display:flex;flex-direction:column;align-items:flex-start;gap:.7rem;height:100%;box-sizing:border-box;padding:1rem 1rem 1.05rem;border-radius:16px;border:1px solid var(--shx-line);background:var(--tdmd-card);color:var(--tdmd-navy);text-decoration:none;transition:border-color .15s,transform .15s;}
  .shx-start a:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);}
  .shx-glyph{display:inline-grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--shx-mint);color:var(--tdmd-teal);flex:0 0 auto;}
  .shx-glyph svg{width:24px;height:24px;}
  .shx-start-name{font-family:'Fraunces',Georgia,serif;font-size:1.08rem;font-weight:600;line-height:1.2;}
  .shx-start-sub{font-size:.8rem;color:var(--tdmd-muted);margin-top:-.45rem;}

  .shx-jump{display:flex;gap:.5rem;overflow-x:auto;padding:.25rem .1rem .6rem;margin:0 0 1.25rem;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch;}
  .shx-jump a{flex:0 0 auto;scroll-snap-align:start;padding:.45rem .95rem;border-radius:999px;border:1px solid var(--shx-line);background:var(--tdmd-card);color:var(--tdmd-navy);font-weight:600;font-size:.88rem;text-decoration:none;white-space:nowrap;}
  .shx-jump a:hover{border-color:var(--tdmd-teal);}
  .shx-jump{scrollbar-width:none;}
  .shx-jump::-webkit-scrollbar{display:none;}
  @media (min-width:900px){.shx-jump{flex-wrap:wrap;overflow:visible;}}
  .shx-jump a span{color:var(--tdmd-muted);font-weight:500;margin-left:.3rem;}

  .shx-legend{display:flex;align-items:center;gap:.55rem;font-size:.88rem;color:var(--tdmd-muted);margin:0 0 1.5rem;}
  .shx-dot{display:inline-block;width:.55rem;height:.55rem;border-radius:50%;background:var(--tdmd-accent);flex:0 0 auto;}

  .shx-index{columns:290px 3;column-gap:2.75rem;}
  .shx-cat{break-inside:avoid;margin:0 0 2.1rem;padding-top:1rem;border-top:2px solid var(--tdmd-navy);scroll-margin-top:5rem;}
  .shx-cat-head{display:flex;align-items:center;gap:.7rem;margin:0 0 .45rem;}
  .shx-cat-head .shx-glyph{width:36px;height:36px;}
  .shx-cat-head .shx-glyph svg{width:20px;height:20px;}
  .shx-cat-head h3{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.22rem;line-height:1.2;color:var(--tdmd-navy);margin:0;flex:1;}
  .shx-cat-count{font-family:'Fraunces',Georgia,serif;font-size:1.22rem;color:var(--tdmd-teal);font-variant-numeric:tabular-nums;}
  .shx-cat-desc{font-size:.88rem;line-height:1.5;color:var(--tdmd-muted);margin:0 0 .6rem;}
  .shx-cat ul{list-style:none;margin:0;padding:0;}
  .shx-cat li{border-top:1px dashed var(--shx-line);}
  .shx-cat li:first-child{border-top:0;}
  .shx-cat li a{display:flex;align-items:center;gap:.5rem;padding:.48rem 0;color:var(--tdmd-text);font-size:.95rem;font-weight:500;text-decoration:none;}
  .shx-cat li a:hover{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:3px;}
  .shx-cat li a .shx-dot{margin-left:auto;}

  /* How a visit works: a real three-step sequence, so it is numbered. */
  .shx-how{background:var(--tdmd-bg-soft);padding:3rem 0;}
  .shx-how-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:2.5rem;align-items:start;}
  .shx-steps{list-style:none;margin:0;padding:0;counter-reset:shx;}
  .shx-steps li{position:relative;padding:0 0 1.5rem 3.4rem;counter-increment:shx;}
  .shx-steps li::before{content:counter(shx);position:absolute;left:0;top:0;width:2.4rem;height:2.4rem;border-radius:50%;background:var(--tdmd-navy);color:var(--tdmd-on-navy);display:grid;place-items:center;font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.15rem;}
  .shx-steps li:not(:last-child)::after{content:"";position:absolute;left:1.18rem;top:2.6rem;bottom:.3rem;width:2px;background:var(--shx-line);}
  .shx-steps h3{font-size:1.05rem;margin:.35rem 0 .3rem;color:var(--tdmd-navy);}
  .shx-steps p{margin:0;font-size:.95rem;color:var(--tdmd-muted);line-height:1.55;}
  .shx-rules{background:var(--tdmd-card);border:1px solid var(--shx-line);border-radius:18px;padding:1.4rem 1.4rem 1.2rem;}
  .shx-rules h3{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.15rem;color:var(--tdmd-navy);margin:0 0 .8rem;}
  .shx-rules ul{list-style:none;margin:0;padding:0;display:grid;gap:.75rem;}
  .shx-rules li{position:relative;padding-left:1.7rem;font-size:.92rem;line-height:1.5;color:var(--tdmd-text);}
  .shx-rules li::before{content:"";position:absolute;left:0;top:.3rem;width:1rem;height:.55rem;border-left:2.5px solid var(--tdmd-teal);border-bottom:2.5px solid var(--tdmd-teal);transform:rotate(-45deg);}
  .shx-how-cta{margin-top:.5rem;}
  @media (max-width:860px){.shx-how-grid{grid-template-columns:1fr;gap:1.75rem;}}

  /* Paying for the visit */
  .shx-pay{padding:3rem 0;}
  .shx-pay-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:1.5rem;align-items:stretch;}
  .shx-price{background:var(--tdmd-navy);color:var(--tdmd-on-navy);border-radius:20px;padding:1.6rem 1.6rem 1.4rem;display:flex;flex-direction:column;}
  .shx-price .shx-price-fig{font-family:'Fraunces',Georgia,serif;font-size:4.2rem;font-weight:600;line-height:1;letter-spacing:-0.02em;margin:.2rem 0 .35rem;}
  .shx-price h3{font-size:1.05rem;margin:0;color:inherit;opacity:.85;font-weight:600;}
  .shx-price p{margin:0 0 1rem;font-size:.95rem;opacity:.9;}
  .shx-price ul{margin:0;padding-left:1.1rem;display:grid;gap:.35rem;font-size:.93rem;}
  .shx-price .shx-price-cta{margin-top:auto;padding-top:1.2rem;}
  .shx-price .shx-price-cta a{display:inline-block;background:var(--shx-gold);color:#08313f;font-weight:700;padding:.75rem 1.4rem;border-radius:12px;text-decoration:none;}
  .shx-price .shx-price-cta a:hover{filter:brightness(1.06);}
  .shx-price .shx-price-cta a:focus-visible{outline-color:#fff;}
  .shx-excl{border:1px solid var(--shx-line);border-radius:20px;padding:1.5rem;background:var(--tdmd-card);}
  .shx-excl h3{font-size:1.05rem;margin:0 0 .6rem;color:var(--tdmd-navy);}
  .shx-excl p{font-size:.93rem;color:var(--tdmd-muted);margin:.4rem 0;}
  .shx-excl ul{margin:.4rem 0 .6rem;padding-left:1.1rem;display:grid;gap:.3rem;font-size:.93rem;}
  .shx-plans{margin-top:1.5rem;}
  .shx-plans h3{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.25rem;color:var(--tdmd-navy);margin:0 0 .4rem;}
  .shx-plans ul{list-style:none;margin:.9rem 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:.6rem;}
  .shx-plans a{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.85rem 1rem;border:1px solid var(--shx-line);border-radius:12px;color:var(--tdmd-navy);font-weight:700;text-decoration:none;background:var(--tdmd-card);}
  .shx-plans a span{font-weight:600;font-size:.85rem;color:var(--tdmd-teal);white-space:nowrap;}
  .shx-plans a:hover{border-color:var(--tdmd-teal);}
  .shx-note-line{font-size:.92rem;color:var(--tdmd-muted);margin:1.1rem 0 0;}
  @media (max-width:760px){.shx-pay-grid{grid-template-columns:1fr;}.shx-price .shx-price-fig{font-size:3.4rem;}}

  /* State rules and credentials: one band that holds the regulation text and
     the template's "Practicing in" block, ahead of the FAQ. */
  .shx-law{background:var(--tdmd-bg-soft);padding:3rem 0;}
  .shx-law-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-top:1.25rem;}
  .shx-law-card{background:var(--tdmd-card);border:1px solid var(--shx-line);border-radius:18px;padding:1.4rem;}
  .shx-law-card h3{font-size:1.05rem;color:var(--tdmd-navy);margin:0 0 .5rem;}
  .shx-law-card p{margin:.5rem 0 0;font-size:.94rem;line-height:1.6;color:var(--tdmd-text);}
  .shx-law-card ul{margin:.5rem 0 0;padding-left:1.1rem;font-size:.92rem;line-height:1.55;}
  .shx-law-card.shx-wide{grid-column:1/-1;}

  .shx-sources summary{display:flex;align-items:center;gap:.6rem;cursor:pointer;list-style:none;}
  .shx-sources summary::-webkit-details-marker{display:none;}
  .shx-sources summary h3{margin:0;font-size:1.05rem;color:var(--tdmd-navy);}
  .shx-sources summary span{font-size:.82rem;color:var(--tdmd-muted);border:1px solid var(--shx-line);border-radius:999px;padding:.05rem .55rem;}
  .shx-sources summary::after{content:"Show";margin-left:auto;font-size:.85rem;font-weight:700;color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;}
  .shx-sources[open] summary::after{content:"Hide";}
  .shx-sources ul{margin-top:.8rem;}
  .shx-places{padding:3rem 0 2rem;}
  .shx-cities{list-style:none;margin:1.1rem 0 1.4rem;padding:0;display:flex;flex-wrap:wrap;gap:.4rem 1.4rem;}
  .shx-cities li{font-family:'Fraunces',Georgia,serif;font-size:1.15rem;color:var(--tdmd-navy);}
  .shx-places h3{font-size:1rem;color:var(--tdmd-navy);margin:0 0 .3rem;}
  .shx-places p{max-width:70ch;}

  .shx-states{display:flex;flex-wrap:wrap;gap:.35rem .5rem;margin:1rem 0 0;padding:0;list-style:none;}
  .shx-states a{display:inline-block;padding:.32rem .75rem;border-radius:999px;border:1px solid var(--shx-line);color:var(--tdmd-navy);font-weight:600;font-size:.86rem;text-decoration:none;}
  .shx-states a:hover{border-color:var(--tdmd-teal);}

  @media (prefers-reduced-motion:reduce){.shx-start a{transition:none;}.shx-start a:hover{transform:none;}}
` + darkCSS(`
  DARK .shx{--shx-mint:#143a40;--shx-line:#2b4652;}
  DARK .shx-price{background:#16303a;color:#e2edf0;border:1px solid #2b4652;}
  DARK .shx-price .shx-price-cta a{color:#04252b;}
  DARK .shx-cat{border-top-color:#a0d8e8;}
  DARK .shx-steps li::before{background:#a0d8e8;color:#04252b;}
`);
