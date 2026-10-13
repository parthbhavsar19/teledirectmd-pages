// Dark theme for the navy/teal/gold "redesign" layouts:
//   .cpr  condition pages (app/components/ConditionPageRedesign.js and the
//         state condition hero in app/[slug]/[conditionSlug]/page.js)
//   .cxr  cost guides (app/components/CostPageRedesign.js)
// Both scope their palette as custom properties on the wrapper, so dark mode
// swaps those first, then fixes the surfaces and fills that are hardcoded.
// Contrast on the #122028 card: ink #dce8ec 13.2:1, muted #a3b9c1 7.6:1,
// teal #2bc4cf 7.8:1, navy #a0d8e8 10.7:1, gold #e8a33d 7.6:1.
import { darkCSS } from './dark-css';

function redesignDark(p) {
  return `
  DARK .${p}{--navy:#a0d8e8;--teal:#2bc4cf;--ink:#dce8ec;--muted:#a3b9c1;--line:#2b4652;color:var(--ink);}
  DARK .${p}-alt{background:#0f1f24;}
  DARK .${p}-hero{background:linear-gradient(160deg,#04212b 0%,#063341 60%,#0a4a54 100%);}
  DARK .${p}-hcard,DARK .${p}-hero-hcard,DARK .${p}-pcard,DARK .${p}-step,DARK .${p}-table,DARK .${p}-infocard,
  DARK .${p}-listcard,DARK .${p}-dstep,DARK .${p}-linkcard,DARK .${p}-chip,DARK .${p}-deflist li{
    background:#122028;border-color:var(--line);
  }
  DARK .${p}-hcard,DARK .${p}-hero-hcard{box-shadow:0 18px 46px rgba(0,0,0,.5);border:1px solid #2b4652;}
  DARK .${p}-table th{background:#16303a;}
  DARK .${p}-table tr.hero td{background:#2a2412;}
  DARK .${p}-cta--navy{background:#a0d8e8;color:#04252b;box-shadow:none;}
  DARK .${p}-hcard-cta,DARK .${p}-hero-hcard-cta{background:#2bc4cf;color:#04252b;box-shadow:none;}
  DARK .${p}-hcard-cta:hover,DARK .${p}-hcard-cta:focus,DARK .${p}-hero-hcard-cta:hover,DARK .${p}-hero-hcard-cta:focus{background:#5fd6de;color:#04252b;}
  DARK .${p}-bars{background:#0c2a35;border:1px solid #2b4652;}
  DARK .${p}-bfill{background:linear-gradient(90deg,#5fd6de,#2bc4cf);}
  DARK .${p}-bfill.over{background:repeating-linear-gradient(90deg,#2bc4cf 0 88%,transparent 88% 90%,#2bc4cf 90% 92%,transparent 92% 94%,#2bc4cf 94%);}
  DARK .${p}-fit.good{background:#122a20;border-color:#2c5a40;}
  DARK .${p}-fit.bad{background:#2c1a14;border-color:#6a3b2a;}
  DARK .${p}-fit.good li::before{color:#6fd39b;}
  DARK .${p}-fit.bad li::before,DARK .${p}-dstep.urgent .act b{color:#ff9a7a;}
  DARK .${p}-dstep.urgent{background:#2a1813;border-left-color:#ff7a5c;}
  DARK .${p}-linkcard:hover{box-shadow:0 6px 18px rgba(0,0,0,.4);}
  DARK .${p}-close{background:linear-gradient(160deg,#063341,#0a4a54);}
  DARK .${p}-answer{background:#10242b;border-left-color:#2bc4cf;}
  DARK .${p}-answer p{color:var(--ink);}
  DARK .${p}-video-frame{box-shadow:0 18px 44px rgba(0,0,0,.5);}
`;
}

export const cprDarkCSS = darkCSS(redesignDark('cpr'));
export const cxrDarkCSS = darkCSS(redesignDark('cxr'));
