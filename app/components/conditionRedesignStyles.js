// Shared presentational layer for the national condition-page redesign.
// Extracted from ConditionPageRedesign.js so the national page and the
// Vermont state×condition pages consume ONE source of truth for the visual
// system (Fraunces + DM Sans, navy/teal/gold, quick-answer capsule, cost
// transparency, gold CTA). Do not fork these tokens — import them.

export const GOLD = '#E8A33D';

// Resolve {state} placeholders. Shared by national (stateName='') and state pages.
export function clean(str, stateName) {
  if (!str) return '';
  return String(str).replace(/\{state\}/g, stateName || 'your state').replace(/\s+/g, ' ').trim();
}

// The full `.cpr-*` visual system. Scoped under `.cpr`, so it is safe to mount
// anywhere. Identical to the CSS that previously lived inline in
// ConditionPageRedesign.js.
export const CPR_CSS = `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .cpr{--navy:#003E52;--teal:#0C8F99;--gold:${GOLD};--ink:#12303b;--muted:#5c7078;--line:#e4ecee;font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);}
        .cpr h1,.cpr h2,.cpr h3,.cpr .disp{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
        .cpr-wrap{max-width:1080px;margin:0 auto;padding:0 1.25rem;}
        .cpr-sec{padding:3rem 0;}
        .cpr-kicker{text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:700;color:var(--teal);margin:0 0 .6rem;}
        .cpr h2{font-size:clamp(1.55rem,3vw,2.05rem);line-height:1.14;color:var(--navy);margin:0 0 .5rem;}
        .cpr-lead{font-size:1.03rem;line-height:1.6;color:var(--muted);max-width:62ch;margin:0 0 1.5rem;}
        .cpr-alt{background:#f2f8f9;}

        .cpr-hero{background:linear-gradient(160deg,#012f3e 0%,#01465a 60%,#065f6b 100%);color:#fff;padding:3rem 0 3.25rem;}
        .cpr-hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:2.5rem;align-items:center;}
        @media(max-width:840px){.cpr-hero-grid{grid-template-columns:1fr;}}
        .cpr-hero h1{font-size:clamp(2rem,4.4vw,2.9rem);line-height:1.08;color:#fff;margin:0 0 .9rem;}
        .cpr-hero .sub{font-size:1.05rem;line-height:1.55;color:#d7ebee;margin:0 0 1.5rem;max-width:52ch;}
        .cpr-hero .intro{font-size:.97rem;line-height:1.6;color:#bfdfe3;margin:0 0 1.5rem;max-width:56ch;}
        .cpr-cta{display:inline-flex;align-items:center;gap:.5rem;background:var(--gold);color:#08313f;font-weight:700;padding:.9rem 1.7rem;border-radius:12px;text-decoration:none;font-size:1.05rem;box-shadow:0 10px 26px rgba(232,163,61,.3);transition:transform .15s,filter .15s;}
        .cpr-cta:hover{transform:translateY(-1px);filter:brightness(1.05);}
        .cpr-cta--navy{background:var(--navy);color:#fff;box-shadow:0 8px 22px rgba(0,62,82,.28);}
        .cpr-trust{font-size:.85rem;color:#9fc6ca;margin:1rem 0 0;}
        .cpr-hcard{background:#fff;border-radius:18px;padding:1.5rem;box-shadow:0 18px 46px rgba(0,0,0,.26);}
        .cpr-hcard h3{font-size:1.1rem;color:var(--navy);margin:0 0 .1rem;}
        .cpr-hcard .price{font-family:'Fraunces',serif;font-size:2.6rem;font-weight:600;color:var(--navy);line-height:1;margin:.4rem 0 .1rem;}
        .cpr-hcard .pl{font-size:.85rem;color:var(--muted);margin:0 0 1rem;}
        .cpr-hcard ul{list-style:none;margin:0;padding:0;}
        .cpr-hcard li{position:relative;padding-left:1.6rem;margin:.5rem 0;font-size:.92rem;line-height:1.4;color:var(--ink);}
        .cpr-hcard li::before{content:'✓';position:absolute;left:0;color:var(--teal);font-weight:800;}

        .cpr-two{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
        @media(max-width:760px){.cpr-two{grid-template-columns:1fr;}}
        .cpr-pcgrid{display:grid;grid-template-columns:.85fr 1.15fr;gap:1.5rem;align-items:stretch;}
        @media(max-width:820px){.cpr-pcgrid{grid-template-columns:1fr;}}
        .cpr-pcard{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.6rem;}
        .cpr-pcard .big{font-family:'Fraunces',serif;font-size:3rem;font-weight:600;color:var(--navy);line-height:1;}
        .cpr-pcard .sub{font-weight:600;margin:.2rem 0 1rem;}
        .cpr-pcard ul{list-style:none;margin:0;padding:0;}
        .cpr-pcard li{position:relative;padding-left:1.55rem;margin:.42rem 0;font-size:.92rem;}
        .cpr-pcard li::before{content:'✓';position:absolute;left:0;color:var(--teal);font-weight:800;}
        .cpr-bars{background:var(--navy);color:#fff;border-radius:18px;padding:1.6rem 1.75rem;}
        .cpr-bars h3{color:#fff;font-size:1.15rem;margin:0 0 1rem;}
        .cpr-brow{margin:.6rem 0;}
        .cpr-btop{display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:.3rem;color:#eaf6f7;}
        .cpr-btop .v{font-weight:700;font-variant-numeric:tabular-nums;}
        .cpr-btrack{height:15px;background:rgba(255,255,255,.13);border-radius:999px;overflow:hidden;}
        .cpr-bfill{height:100%;border-radius:999px;background:linear-gradient(90deg,#2aa9b3,#0c8f99);}
        .cpr-bfill.hero{background:linear-gradient(90deg,var(--gold),#f2b65a);}

        .cpr-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem;margin-top:1.4rem;}
        @media(max-width:760px){.cpr-steps{grid-template-columns:1fr;}}
        .cpr-step{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.4rem 1.3rem;}
        .cpr-step .num{font-family:'Fraunces',serif;font-size:2.1rem;font-weight:600;color:var(--gold);line-height:1;margin-bottom:.5rem;}
        .cpr-step h3{font-size:1.02rem;color:var(--navy);margin:0 0 .35rem;}
        .cpr-step p{margin:0;font-size:.9rem;line-height:1.5;color:var(--muted);}

        .cpr-fit{border-radius:16px;padding:1.4rem;}
        .cpr-fit.good{background:#eefaf3;border:1px solid #b9e6cc;}
        .cpr-fit.bad{background:#fdf0ec;border:1px solid #f3ccbf;}
        .cpr-fit h3{font-size:1.05rem;margin:0 0 .7rem;color:var(--navy);}
        .cpr-fit ul{list-style:none;margin:0;padding:0;}
        .cpr-fit li{position:relative;padding-left:1.7rem;margin:.5rem 0;font-size:.92rem;line-height:1.45;}
        .cpr-fit.good li::before{content:'✓';position:absolute;left:0;color:#2e9c5f;font-weight:800;}
        .cpr-fit.bad li::before{content:'!';position:absolute;left:.35rem;color:#c2582f;font-weight:800;}

        .cpr-table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;border:1px solid var(--line);}
        .cpr-table th{background:#f2f8f9;text-align:left;font-size:.82rem;text-transform:uppercase;letter-spacing:.04em;color:var(--navy);padding:.75rem 1rem;font-weight:700;}
        .cpr-table td{padding:.85rem 1rem;border-top:1px solid var(--line);font-size:.9rem;vertical-align:top;line-height:1.45;}
        .cpr-table td:first-child{font-weight:700;color:var(--ink);}
        .cpr-table-wrap{overflow-x:auto;}

        .cpr-faqitem{border-bottom:1px solid var(--line);}
        .cpr-faqitem summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.05rem 0;font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.03rem;color:var(--navy);}
        .cpr-faqitem summary::-webkit-details-marker{display:none;}
        .cpr-faqitem .cpr-plus{flex:0 0 auto;width:24px;height:24px;position:relative;transition:transform .2s;}
        .cpr-faqitem .cpr-plus::before,.cpr-faqitem .cpr-plus::after{content:'';position:absolute;background:var(--teal);border-radius:2px;}
        .cpr-faqitem .cpr-plus::before{top:11px;left:3px;width:18px;height:2px;}
        .cpr-faqitem .cpr-plus::after{top:3px;left:11px;width:2px;height:18px;transition:opacity .2s;}
        .cpr-faqitem[open] .cpr-plus::after{opacity:0;}
        .cpr-faqitem[open] summary{color:var(--teal);}
        .cpr-faqitem .cpr-ans{margin:0;padding:0 0 1.1rem;font-size:.94rem;line-height:1.6;color:var(--muted);}

        /* prose + list sections */
        .cpr-prose p{font-size:.98rem;line-height:1.68;color:var(--ink);max-width:70ch;margin:0 0 1rem;}
        .cpr-deflist{list-style:none;margin:1rem 0 0;padding:0;display:grid;gap:.7rem;}
        .cpr-deflist li{background:#fff;border:1px solid var(--line);border-left:3px solid var(--teal);border-radius:10px;padding:.75rem 1rem;font-size:.94rem;line-height:1.5;}
        .cpr-deflist li b{color:var(--navy);}
        .cpr-cardgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-top:1.2rem;}
        .cpr-infocard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.15rem 1.25rem;}
        .cpr-infocard h3{font-size:1.02rem;color:var(--navy);margin:0 0 .4rem;}
        .cpr-infocard p{margin:0;font-size:.92rem;line-height:1.55;color:var(--muted);}
        .cpr-listcard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.2rem 1.3rem;}
        .cpr-listcard h3{font-size:1.02rem;color:var(--navy);margin:0 0 .6rem;}
        .cpr-listcard ul{list-style:none;margin:0;padding:0;}
        .cpr-listcard li{position:relative;padding-left:1.4rem;margin:.42rem 0;font-size:.92rem;line-height:1.5;color:var(--ink);}
        .cpr-listcard li::before{content:'';position:absolute;left:0;top:.5rem;width:6px;height:6px;border-radius:50%;background:var(--teal);}
        .cpr-decision{display:grid;gap:.9rem;margin-top:1.3rem;}
        .cpr-dstep{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.3rem;border-left:4px solid var(--teal);}
        .cpr-dstep.urgent{border-left-color:#c2582f;background:#fdf5f2;}
        .cpr-dstep h3{font-size:1rem;color:var(--navy);margin:0 0 .5rem;}
        .cpr-dstep ul{margin:.3rem 0 .6rem;padding-left:1.2rem;font-size:.9rem;color:var(--ink);line-height:1.5;}
        .cpr-dstep .act{font-size:.88rem;margin:.15rem 0;}
        .cpr-dstep .act b{color:var(--teal);}
        .cpr-dstep.urgent .act b{color:#c2582f;}
        .cpr-refs{list-style:none;margin:1.2rem 0 0;padding:0;display:grid;gap:.55rem;}
        .cpr-refs li{font-size:.88rem;line-height:1.5;color:var(--muted);padding-left:1.2rem;position:relative;}
        .cpr-refs li::before{content:'→';position:absolute;left:0;color:var(--teal);}
        .cpr-refs a{color:var(--teal);text-decoration:none;}
        .cpr-refs a:hover{text-decoration:underline;}
        /* internal links footer (styled) */
        .cpr-links{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.75rem;margin-top:1.2rem;}
        .cpr-linkcard{background:#fff;border:1px solid var(--line);border-radius:12px;padding:.9rem 1.1rem;text-decoration:none;transition:all .15s;}
        .cpr-linkcard:hover{border-color:var(--teal);box-shadow:0 6px 18px rgba(12,143,153,.12);transform:translateY(-1px);}
        .cpr-linkcard .t{display:block;font-weight:700;color:var(--navy);font-size:.95rem;}
        .cpr-linkcard .d{display:block;font-size:.8rem;color:var(--muted);margin-top:.15rem;}
        .cpr-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem;}
        .cpr-chip{font-size:.82rem;font-weight:600;color:var(--navy);background:#fff;border:1px solid var(--line);border-radius:999px;padding:.4rem .8rem;text-decoration:none;transition:all .15s;}
        .cpr-chip:hover{border-color:var(--teal);color:var(--teal);}

        .cpr-close{background:linear-gradient(160deg,#01465a,#065f6b);color:#fff;border-radius:22px;padding:2.5rem;text-align:center;}
        .cpr-close h2{color:#fff;font-size:clamp(1.6rem,3.3vw,2.2rem);margin:0 0 .5rem;}
        .cpr-close p{color:#d7ebee;font-size:1.03rem;margin:0 0 1.5rem;}
        .cpr-answer{background:#EAF7F8;border-left:4px solid #006B73;border-radius:0 10px 10px 0;padding:.9rem 1.15rem;margin:1rem 0 1.1rem;}
        .cpr-answer p{margin:0;color:#003E52;font-size:1.02rem;line-height:1.55;font-weight:500;}
      `;
