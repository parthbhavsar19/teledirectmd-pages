/**
 * Uninsured & Affordable Care — page styles.
 *
 * Scoped entirely under .uac-wrap. This page runs on the editorial brand system
 * (Fraunces display / Inter UI / JetBrains Mono data, white ground with navy and
 * orange blocks) rather than the .tdmd-* condition-page system, so none of these
 * tokens are allowed to leak. The --uac-* variables are literal values, not
 * aliases of --tdmd-*, because --tdmd-* flips under prefers-color-scheme: dark
 * and this layout is a committed light design.
 *
 * Source: Claude Design handoff "Uninsured Affordable Care.dc.html" +
 * _ds/teledirectmd-design-system/colors_and_type.css.
 */
export const uninsuredCSS = `
.uac-wrap{
  --uac-ink:#163A47;
  --uac-ink-deep:#0E2A38;
  --uac-orange:#E85D3C;
  --uac-teal:#14706B;
  --uac-green:#2E7D6E;
  --uac-coral:#C75B4A;
  --uac-muted-dark:#B8C4CA;
  --uac-muted-light:#5A6B72;
  --uac-border:#E2D9C7;
  --uac-soft:#F7F7F5;
  --uac-shadow-md:0 8px 24px rgba(14,42,56,0.08);
  --uac-shadow-lg:0 20px 48px rgba(14,42,56,0.12);
  --uac-sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --uac-display:'Fraunces','Iowan Old Style',Palatino,Georgia,serif;
  --uac-mono:'JetBrains Mono',ui-monospace,'SF Mono',Menlo,monospace;
  --uac-ease-out:cubic-bezier(0.2,0.8,0.2,1);
  --uac-ease-std:cubic-bezier(0.4,0,0.2,1);

  color-scheme:light;
  background:#FFFFFF;
  color:var(--uac-ink);
  font-family:var(--uac-sans);
  font-size:17px;
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
.uac-wrap *,.uac-wrap *::before,.uac-wrap *::after{box-sizing:border-box;}
.uac-wrap a{color:inherit;text-decoration:none;}
.uac-wrap a:hover{color:var(--uac-orange);}
.uac-wrap p{margin:0;text-wrap:pretty;}
.uac-wrap h1,.uac-wrap h2,.uac-wrap h3,.uac-wrap h4{
  font-family:var(--uac-display);
  font-variation-settings:"opsz" 144,"SOFT" 100,"WONK" 1;
  color:var(--uac-ink);
  letter-spacing:-0.02em;
  line-height:1.06;
  font-weight:500;
  margin:0;
  text-wrap:balance;
}
.uac-wrap h2{font-size:clamp(26px,2.6vw,40px);}
.uac-wrap h3{font-size:22px;line-height:1.2;}
.uac-wrap ul{margin:0;}

/* The site-wide mobile bar is replaced on this page by .uac-sticky, which only
   appears once the hero has scrolled away. Two fixed bars would stack. */
body:has(.uac-wrap) .tdmd-mobile-sticky-bar{display:none !important;}

/* ── Shared primitives ─────────────────────────────────────────────────── */
.uac-container{max-width:1200px;margin:0 auto;padding:0 24px;}
.uac-eyebrow{
  font-family:var(--uac-sans);
  font-size:13px;font-weight:600;
  letter-spacing:0.15em;text-transform:uppercase;
  color:var(--uac-muted-light);
}
.uac-eyebrow--orange{color:var(--uac-orange);}
.uac-eyebrow--dark{color:var(--uac-muted-dark);}

.uac-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  padding:15px 28px;border-radius:999px;
  font-family:var(--uac-sans);font-weight:600;font-size:15px;line-height:1;
  border:0;cursor:pointer;text-align:center;
  transition:transform 120ms var(--uac-ease-out),background-color 220ms var(--uac-ease-std),box-shadow 220ms var(--uac-ease-std);
}
.uac-wrap .uac-btn--primary{background:var(--uac-orange);color:#fff;}
.uac-wrap .uac-btn--primary:hover{background:#D24E2F;color:#fff;}
.uac-wrap .uac-btn--primary:active{transform:translateY(1px);}
.uac-wrap .uac-btn--dark{background:var(--uac-ink-deep);color:#fff;}
.uac-wrap .uac-btn--dark:hover{background:#0A2230;color:#fff;}
.uac-wrap .uac-btn--light{background:#fff;color:var(--uac-ink);}
.uac-wrap .uac-btn--light:hover{background:#F1ECE1;color:var(--uac-ink);}
.uac-wrap .uac-btn--ghost{background:transparent;color:var(--uac-ink);border:1.5px solid rgba(22,58,71,0.16);}
.uac-wrap .uac-btn--ghost:hover{background:rgba(22,58,71,0.06);color:var(--uac-ink);}
.uac-wrap .uac-btn--ghost-dark{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.3);}
.uac-wrap .uac-btn--ghost-dark:hover{background:rgba(255,255,255,0.08);color:#fff;}

.uac-pill{
  display:inline-flex;align-items:center;gap:8px;
  padding:8px 14px;border-radius:999px;
  font-size:13px;font-weight:600;line-height:1;
}
.uac-tick{
  width:20px;height:20px;border-radius:999px;background:var(--uac-green);color:#fff;
  display:inline-flex;align-items:center;justify-content:center;flex:none;
}
.uac-tick--sm{width:18px;height:18px;margin-top:2px;}
.uac-cross{
  width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;
  flex:none;margin-top:2px;color:var(--uac-coral);
}

@keyframes uacRise{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
@media (prefers-reduced-motion:reduce){
  .uac-wrap *,.uac-sticky{animation:none !important;transition:none !important;}
}

/* ── Hero ──────────────────────────────────────────────────────────────── */
.uac-hero{max-width:1200px;margin:0 auto;padding:48px 24px 72px;}
.uac-crumbs{display:flex;flex-wrap:wrap;gap:8px;font-size:13px;color:var(--uac-muted-light);margin-bottom:40px;}
.uac-crumbs [aria-current]{color:var(--uac-ink);}
.uac-hero-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center;}
.uac-hero-copy{display:flex;flex-direction:column;gap:28px;animation:uacRise 400ms var(--uac-ease-out) both;}
.uac-hero-copy h1{font-size:clamp(42px,5.2vw,76px);line-height:1.02;letter-spacing:-0.025em;}
.uac-hero-sub{font-size:19px;color:var(--uac-muted-light);max-width:46ch;}
.uac-hero-ctas{display:flex;flex-wrap:wrap;gap:12px;}
.uac-chiprow{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:13px;}
.uac-chiprow-label{color:var(--uac-muted-light);}
.uac-wrap .uac-chip{padding:6px 12px;border-radius:999px;border:1px solid var(--uac-border);font-weight:500;transition:border-color 220ms var(--uac-ease-std);}
.uac-wrap .uac-chip:hover{border-color:var(--uac-orange);}
.uac-byline{font-size:13px;color:var(--uac-muted-light);}
.uac-byline a{text-decoration:underline;}

.uac-pricecard{
  background:var(--uac-ink-deep);color:#fff;border-radius:28px;padding:40px;
  box-shadow:var(--uac-shadow-lg);
  display:flex;flex-direction:column;gap:22px;
  max-width:460px;justify-self:end;width:100%;
}
.uac-pricecard-row{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;}
.uac-price-big{
  font-family:var(--uac-display);font-variation-settings:"opsz" 144,"SOFT" 100,"WONK" 1;
  font-size:96px;line-height:0.9;font-weight:500;color:var(--uac-orange);letter-spacing:-0.03em;
}
.uac-price-note{font-family:var(--uac-mono);font-size:13px;color:var(--uac-muted-dark);line-height:1.45;}
.uac-pricecard ul{
  list-style:none;margin:0;padding:20px 0 0;
  border-top:1px solid rgba(255,255,255,0.14);
  display:flex;flex-direction:column;gap:12px;font-size:15px;
}
.uac-pricecard li{display:flex;gap:12px;align-items:center;}
.uac-pricecard-foot{font-size:12px;color:var(--uac-muted-dark);text-align:center;}

.uac-doctorstrip{
  display:flex;flex-wrap:wrap;gap:20px 32px;align-items:center;
  margin-top:56px;padding:24px 28px;border:1px solid var(--uac-border);border-radius:20px;
}
.uac-doctorstrip img{width:64px;height:64px;border-radius:999px;object-fit:cover;object-position:top;flex:none;}
.uac-doctorstrip-body{display:flex;flex-direction:column;gap:4px;flex:1 1 260px;min-width:0;}
.uac-doctorstrip-name{font-weight:600;}
.uac-doctorstrip-name span{font-weight:400;color:var(--uac-muted-light);}
.uac-doctorstrip-quote{font-size:15px;color:var(--uac-muted-light);}
.uac-doctorstrip-link{font-size:14px;font-weight:600;text-decoration:underline;flex:none;}

/* ── Comparison (dark) ─────────────────────────────────────────────────── */
.uac-compare{background:var(--uac-ink-deep);color:#fff;padding:96px 24px;}
.uac-compare-inner{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;gap:48px;}
.uac-compare-head{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;align-items:end;}
.uac-compare-head h2{color:#fff;}
.uac-compare-head p{color:var(--uac-muted-dark);font-size:16px;}
.uac-compare-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;}
.uac-card{
  border-radius:20px;padding:24px;display:flex;flex-direction:column;gap:18px;
  background:rgba(255,255,255,0.06);color:#fff;border:1px solid rgba(255,255,255,0.14);
}
.uac-card--self{background:#FFFFFF;color:var(--uac-ink);border:1px solid var(--uac-orange);box-shadow:0 0 0 3px var(--uac-orange);}
.uac-card-top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;}
.uac-card-title{display:flex;flex-direction:column;gap:4px;}
.uac-card h3{color:inherit;font-size:22px;}
.uac-card--self h3{color:var(--uac-ink);}
.uac-card-provider{font-size:13px;color:var(--uac-muted-dark);}
.uac-card--self .uac-card-provider{color:var(--uac-muted-light);}
.uac-card-flag{background:var(--uac-orange);color:#fff;font-size:11px;}
.uac-card-price{
  font-family:var(--uac-mono);font-size:15px;line-height:1.4;
  padding:12px 14px;border-radius:10px;background:rgba(255,255,255,0.08);
}
.uac-card--self .uac-card-price{background:#F1ECE1;}
.uac-card ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;font-size:14px;}
.uac-card li{display:flex;gap:10px;align-items:flex-start;}
.uac-card li strong{font-weight:600;}
.uac-compare-actions{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;}
.uac-compare-note{font-size:12px;color:var(--uac-muted-dark);max-width:60ch;}
.uac-compare-note a{text-decoration:underline;}
.uac-compare-why{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;
  padding-top:40px;border-top:1px solid rgba(255,255,255,0.14);
}
.uac-compare-why > div{display:flex;flex-direction:column;gap:12px;}
.uac-compare-why h3{color:#fff;}
.uac-compare-why p{color:var(--uac-muted-dark);font-size:16px;}

/* ── What $79 gets you / triage ────────────────────────────────────────── */
.uac-two{
  max-width:1200px;margin:0 auto;padding:96px 24px;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:64px;
}
.uac-col{display:flex;flex-direction:column;gap:24px;}
.uac-numlist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;font-size:16px;}
.uac-numlist li{display:flex;gap:14px;padding:14px 0;border-bottom:1px solid var(--uac-border);}
.uac-num{font-family:var(--uac-mono);color:var(--uac-orange);font-size:13px;flex:none;width:24px;padding-top:3px;}
.uac-footnote{font-size:14px;color:var(--uac-muted-light);}
.uac-footnote a{text-decoration:underline;}
.uac-triage{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;}
.uac-triage-card{border-radius:20px;padding:24px;display:flex;flex-direction:column;gap:12px;}
.uac-triage-card h4{
  font-family:var(--uac-sans);font-variation-settings:normal;
  font-size:14px;letter-spacing:0.08em;text-transform:uppercase;font-weight:600;line-height:1.2;
}
.uac-triage-card ul{padding-left:18px;font-size:15px;display:flex;flex-direction:column;gap:6px;}
.uac-triage--yes{background:var(--uac-teal);color:#fff;}
.uac-triage--yes h4{color:#fff;}
.uac-triage--no{background:#fff;border:1.5px solid var(--uac-coral);color:var(--uac-ink);}
.uac-triage--no h4{color:var(--uac-coral);}

/* ── Doctor ────────────────────────────────────────────────────────────── */
.uac-doctor{background:var(--uac-ink);color:#fff;padding:96px 24px;}
.uac-doctor-inner{
  max-width:1200px;margin:0 auto;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:56px;align-items:center;
}
.uac-doctor-media{display:grid;grid-template-columns:minmax(0,1fr);gap:20px;}
.uac-doctor-media img{
  width:100%;max-width:420px;aspect-ratio:4/5;object-fit:cover;object-position:top;
  border-radius:28px;display:block;
}
.uac-doctor-tags{display:flex;flex-wrap:wrap;gap:8px;}
.uac-doctor-tags .uac-pill{background:rgba(255,255,255,0.1);color:#fff;}
.uac-doctor-body{display:flex;flex-direction:column;gap:24px;}
.uac-doctor-body h2{color:#fff;}
.uac-doctor-body p{color:var(--uac-muted-dark);font-size:16px;}
.uac-quote{
  margin:0;padding-left:20px;border-left:2px solid var(--uac-orange);
  font-family:var(--uac-display);font-variation-settings:"opsz" 24,"SOFT" 50,"WONK" 0;
  font-size:21px;line-height:1.4;color:#fff;
}
.uac-dl{margin:0;display:grid;grid-template-columns:auto 1fr;gap:8px 20px;font-size:14px;color:var(--uac-muted-dark);}
.uac-dl dt{font-family:var(--uac-mono);color:#fff;}
.uac-dl dd{margin:0;}
.uac-doctor-actions{display:flex;flex-wrap:wrap;gap:12px;align-items:center;}
.uac-doctor-actions a:last-child{font-size:15px;font-weight:600;text-decoration:underline;}
.uac-fineprint{font-size:13px;color:var(--uac-muted-dark);}
.uac-fineprint--quiet{font-size:12px;line-height:1.5;opacity:0.85;}

/* ── Coverage map ──────────────────────────────────────────────────────── */
.uac-coverage{
  max-width:1200px;margin:0 auto;padding:96px 24px;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center;
}
.uac-coverage-copy{display:flex;flex-direction:column;gap:20px;}
.uac-coverage-copy p{color:var(--uac-muted-light);}
.uac-legend{display:flex;flex-direction:column;gap:10px;font-size:14px;}
.uac-legend div{display:flex;gap:10px;align-items:center;}
.uac-swatch{width:14px;height:14px;border-radius:4px;flex:none;}
.uac-coverage-link{font-size:15px;font-weight:600;text-decoration:underline;}
.uac-map{width:100%;min-height:240px;}
.uac-map svg{width:100%;height:auto;display:block;}
.uac-statelist{margin-top:8px;}
.uac-statelist summary{
  cursor:pointer;font-size:14px;font-weight:600;color:var(--uac-muted-light);
  text-decoration:underline;list-style:none;
}
.uac-statelist summary::-webkit-details-marker{display:none;}
.uac-statelist summary:hover{color:var(--uac-orange);}
.uac-statelist-cols{columns:3 150px;column-gap:24px;font-size:14px;color:var(--uac-muted-light);margin-top:12px;}
.uac-statelist-cols div{break-inside:avoid;padding:2px 0;}

/* ── Conditions ────────────────────────────────────────────────────────── */
.uac-conditions{background:var(--uac-soft);padding:96px 24px;}
.uac-conditions-inner{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;gap:40px;}
.uac-conditions-head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:24px;}
.uac-conditions-head > div{display:flex;flex-direction:column;gap:16px;max-width:620px;}
.uac-conditions-head p{color:var(--uac-muted-light);}
.uac-conditions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;}
.uac-wrap .uac-condition{
  background:#fff;border:1px solid var(--uac-border);border-radius:20px;padding:22px;
  display:flex;flex-direction:column;gap:10px;color:var(--uac-ink);
  transition:box-shadow 220ms var(--uac-ease-std),transform 220ms var(--uac-ease-std);
}
.uac-wrap .uac-condition:hover{box-shadow:var(--uac-shadow-md);transform:translateY(-2px);color:var(--uac-ink);}
.uac-condition-tag{font-family:var(--uac-mono);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;}
.uac-condition h3{font-size:20px;}
.uac-condition p{font-size:14px;color:var(--uac-muted-light);}

/* ── How it works ──────────────────────────────────────────────────────── */
.uac-steps{max-width:1200px;margin:0 auto;padding:96px 24px;display:flex;flex-direction:column;gap:40px;}
.uac-steps-head{display:flex;flex-direction:column;gap:16px;max-width:620px;}
.uac-steps-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;}
.uac-step{display:flex;flex-direction:column;gap:16px;}
.uac-step img{width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:20px;display:block;}
.uac-step-meta{font-family:var(--uac-mono);color:var(--uac-orange);font-size:13px;}
.uac-step p{font-size:15px;color:var(--uac-muted-light);}

/* ── Prescriptions ─────────────────────────────────────────────────────── */
.uac-rx{max-width:1200px;margin:0 auto;padding:0 24px 96px;}
.uac-rx-inner{
  background:var(--uac-soft);border-radius:28px;padding:48px;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:40px;align-items:start;
}
.uac-rx-copy{display:flex;flex-direction:column;gap:16px;}
.uac-rx-copy p{color:var(--uac-muted-light);}
.uac-rx-list{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;}
.uac-rx-list li{
  background:#fff;border-radius:14px;padding:18px;border:1px solid var(--uac-border);
  display:flex;flex-direction:column;gap:6px;
}
.uac-rx-list a{font-weight:600;}
.uac-rx-list span{font-size:14px;color:var(--uac-muted-light);}

/* ── FAQ ───────────────────────────────────────────────────────────────── */
.uac-faq{
  max-width:1200px;margin:0 auto;padding:0 24px 96px;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:start;
}
.uac-faq-head{display:flex;flex-direction:column;gap:16px;position:sticky;top:96px;}
.uac-faq-head p{color:var(--uac-muted-light);}
.uac-faq-head a{text-decoration:underline;}
.uac-faq-list{display:flex;flex-direction:column;border-top:1px solid var(--uac-border);}
.uac-faq-item{border-bottom:1px solid var(--uac-border);}
.uac-faq-q{
  cursor:pointer;display:flex;width:100%;justify-content:space-between;align-items:center;gap:16px;
  padding:20px 0;font-family:var(--uac-sans);font-size:17px;font-weight:600;color:var(--uac-ink);
  text-align:left;list-style:none;
}
.uac-faq-q::-webkit-details-marker{display:none;}
.uac-faq-q:hover{color:var(--uac-orange);}
.uac-faq-sign{
  flex:none;width:28px;height:28px;border-radius:999px;border:1.5px solid var(--uac-border);
  display:inline-flex;align-items:center;justify-content:center;
  transition:transform 220ms var(--uac-ease-std);
}
.uac-faq-item[open] .uac-faq-sign{transform:rotate(45deg);}
.uac-faq-a{padding:0 48px 22px 0;font-size:16px;color:var(--uac-muted-light);}

/* ── Final CTA ─────────────────────────────────────────────────────────── */
.uac-cta{background:var(--uac-orange);color:#fff;padding:88px 24px;}
.uac-cta-inner{
  max-width:1200px;margin:0 auto;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;align-items:center;
}
.uac-cta-copy{display:flex;flex-direction:column;gap:14px;}
.uac-cta h2{color:#fff;font-size:clamp(32px,4vw,56px);}
.uac-cta p{font-size:18px;color:rgba(255,255,255,0.9);}
.uac-cta-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end;}

/* ── Foot notes ────────────────────────────────────────────────────────── */
.uac-notes{
  max-width:1200px;margin:0 auto;padding:64px 24px;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:40px;
  font-size:14px;color:var(--uac-muted-light);
}
.uac-notes > div{display:flex;flex-direction:column;gap:12px;}
.uac-notes ul{padding-left:18px;display:flex;flex-direction:column;gap:4px;}
.uac-notes a{text-decoration:underline;}
.uac-notes-pills{display:flex;flex-wrap:wrap;gap:8px;}
.uac-wrap .uac-notes-pills a{background:var(--uac-soft);color:var(--uac-ink);text-decoration:none;}
.uac-wrap .uac-notes-pills a:hover{background:#EDEBE5;color:var(--uac-ink);}

/* ── Sticky mobile CTA ─────────────────────────────────────────────────── */
.uac-sticky{
  position:fixed;left:0;right:0;bottom:0;z-index:60;
  background:#FFFFFF;border-top:1px solid var(--uac-border);
  box-shadow:0 -8px 24px rgba(14,42,56,0.08);
  padding:12px 20px;padding-bottom:calc(12px + env(safe-area-inset-bottom));
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  font-family:var(--uac-sans);color:var(--uac-ink);
  animation:uacRise 220ms cubic-bezier(0.2,0.8,0.2,1) both;
}
.uac-sticky-copy{display:flex;flex-direction:column;gap:2px;min-width:0;}
.uac-sticky-price{
  font-family:var(--uac-display);font-variation-settings:"opsz" 144,"SOFT" 100,"WONK" 1;
  font-size:24px;line-height:1;font-weight:500;color:var(--uac-ink);
}
.uac-sticky-price span{font-family:var(--uac-sans);font-size:14px;font-weight:500;color:var(--uac-muted-light);}
.uac-sticky-sub{font-size:12px;color:var(--uac-muted-light);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.uac-sticky .uac-btn{flex:none;padding:12px 22px;}

/* ── Responsive ────────────────────────────────────────────────────────── */
@media (max-width:900px){
  body:has(.uac-wrap){padding-bottom:84px;}
  .uac-hero{padding:32px 20px 56px;}
  .uac-hero-grid{gap:36px;}
  .uac-pricecard{padding:32px;justify-self:stretch;max-width:none;}
  .uac-price-big{font-size:72px;}
  .uac-compare,.uac-doctor,.uac-conditions{padding:64px 20px;}
  .uac-two,.uac-coverage,.uac-steps{padding:64px 20px;gap:40px;}
  .uac-rx{padding:0 20px 64px;}
  .uac-rx-inner{padding:28px;}
  .uac-faq{padding:0 20px 64px;gap:24px;}
  .uac-faq-head{position:static;}
  .uac-cta{padding:64px 20px;}
  .uac-cta-actions{justify-content:flex-start;}
  .uac-notes{padding:48px 20px;}
  .uac-doctorstrip{margin-top:40px;padding:20px;}
}
@media (max-width:560px){
  .uac-hero-copy h1{font-size:38px;}
  .uac-hero-ctas .uac-btn{flex:1 1 100%;}
  .uac-statelist-cols{columns:2 120px;}
}
`;
