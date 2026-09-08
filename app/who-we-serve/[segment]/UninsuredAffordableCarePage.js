import comparison from '../../../data/competitor-comparison.json';

/* ── Page-scoped design system ────────────────────────────────────
   Applied only under `.uninsured-page-2026`. Does not affect the
   rest of the site. Cream sections, huge type, rounded cards, icons
   in the comparison table. Reference: generalmedicine.co spirit,
   TDMD brand kept.
*/
const pageCSS = `
.uninsured-page-2026{--u-cream:#F6F1E8;--u-cream-2:#FBF7EF;--u-ink:#0F1420;--u-navy:#172140;--u-navy-2:#1E2A55;--u-coral:#FF5A36;--u-mist:#EEF0F5;--u-line:#E4DCC8;--u-line-2:#E7EAF1;--u-muted:#5B6478;--u-ok:#0E7B4A;--u-ok-bg:#E6F4EC;--u-no:#B12A2A;--u-no-bg:#FBEBEB;--u-warn:#8A5A00;--u-warn-bg:#FFF5DA;}
.uninsured-page-2026 section.u-sec{padding:clamp(3rem,7vw,6rem) 0;}
.uninsured-page-2026 .u-container{max-width:1140px;margin:0 auto;padding:0 clamp(1rem,3vw,2rem);}
.uninsured-page-2026 .u-eyebrow{display:inline-flex;align-items:center;gap:.5rem;background:#fff;border:1px solid var(--u-line);border-radius:999px;padding:.4rem .9rem;font-size:.83rem;font-weight:600;color:var(--u-navy);letter-spacing:.01em;}
.uninsured-page-2026 .u-eyebrow .u-dot{width:6px;height:6px;border-radius:50%;background:var(--u-ok);}
.uninsured-page-2026 h2.u-h2{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:clamp(1.8rem,3.4vw,2.6rem);line-height:1.1;letter-spacing:-.015em;color:var(--u-ink);margin:0 0 .75rem;}
.uninsured-page-2026 .u-lede{font-size:clamp(1.02rem,1.4vw,1.2rem);line-height:1.55;color:var(--u-muted);max-width:62ch;margin:0 0 1.5rem;}

/* ─ Section rhythm ─ */
.uninsured-page-2026 .u-bg-cream{background:var(--u-cream);}
.uninsured-page-2026 .u-bg-cream-2{background:var(--u-cream-2);}
.uninsured-page-2026 .u-bg-mist{background:var(--u-mist);}
.uninsured-page-2026 .u-bg-white{background:#fff;}
.uninsured-page-2026 .u-bg-ink{background:var(--u-ink);color:#F0EEE8;}
.uninsured-page-2026 .u-bg-ink h2, .uninsured-page-2026 .u-bg-ink h3{color:#fff;}
.uninsured-page-2026 .u-bg-ink .u-lede, .uninsured-page-2026 .u-bg-ink p{color:#B9C0CD;}

/* ─ HERO ─ */
.uninsured-page-2026 .u-hero{padding:clamp(3.5rem,7vw,6rem) 0 clamp(2rem,5vw,4rem);background:radial-gradient(1200px 500px at 85% -10%, #FBEDDD 0%, transparent 55%), var(--u-cream);}
.uninsured-page-2026 .u-hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(1.5rem,4vw,3.5rem);align-items:start;}
@media (max-width:820px){.uninsured-page-2026 .u-hero-grid{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-hero h1{font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(2rem,4.6vw,3.6rem);line-height:1.04;letter-spacing:-.02em;color:var(--u-ink);margin:1rem 0 1rem;}
.uninsured-page-2026 .u-hero h1 em{font-style:italic;color:var(--u-navy);}
.uninsured-page-2026 .u-hero-sub{font-size:clamp(1.05rem,1.5vw,1.22rem);line-height:1.5;color:#3A4152;max-width:56ch;margin:0 0 1.75rem;}
.uninsured-page-2026 .u-cta-row{display:flex;flex-wrap:wrap;gap:.75rem;margin:0 0 1.25rem;}
.uninsured-page-2026 .u-btn{display:inline-flex;align-items:center;gap:.55rem;padding:.9rem 1.5rem;border-radius:999px;font-weight:600;font-size:1rem;text-decoration:none;border:2px solid transparent;transition:transform .12s ease, box-shadow .12s ease;}
.uninsured-page-2026 .u-btn-primary{background:var(--u-coral);color:#fff;border-color:var(--u-coral);box-shadow:0 6px 20px -6px rgba(255,90,54,.55);}
.uninsured-page-2026 .u-btn-primary:hover{transform:translateY(-1px);box-shadow:0 10px 26px -8px rgba(255,90,54,.6);}
.uninsured-page-2026 .u-btn-outline{background:transparent;color:var(--u-ink);border-color:var(--u-ink);}
.uninsured-page-2026 .u-btn-outline:hover{background:var(--u-ink);color:#fff;}
.uninsured-page-2026 .u-btn-ghost{background:#fff;color:var(--u-ink);border-color:var(--u-line);}
.uninsured-page-2026 .u-btn-ghost:hover{border-color:var(--u-ink);}
.uninsured-page-2026 .u-reviewed{font-size:.85rem;color:var(--u-muted);margin:0;}
.uninsured-page-2026 .u-reviewed a{color:var(--u-navy);font-weight:600;text-decoration:none;border-bottom:1px solid var(--u-line);}

/* Price anchor card */
.uninsured-page-2026 .u-price-card{background:#fff;border-radius:24px;padding:1.75rem;box-shadow:0 30px 60px -35px rgba(15,20,32,.35), 0 6px 16px -8px rgba(15,20,32,.1);border:1px solid var(--u-line);position:relative;overflow:hidden;}
.uninsured-page-2026 .u-price-card::before{content:"";position:absolute;top:-40px;right:-40px;width:180px;height:180px;background:radial-gradient(circle, rgba(255,90,54,.16), transparent 65%);pointer-events:none;}
.uninsured-page-2026 .u-price-eyebrow{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--u-muted);margin:0 0 .5rem;}
.uninsured-page-2026 .u-price-num{font-family:'Fraunces',Georgia,serif;font-size:clamp(4.5rem,8vw,6.5rem);line-height:1;font-weight:400;color:var(--u-ink);letter-spacing:-.03em;margin:0;}
.uninsured-page-2026 .u-price-num sup{font-size:.35em;vertical-align:top;font-weight:500;top:.55em;position:relative;left:-.15em;color:var(--u-muted);}
.uninsured-page-2026 .u-price-flat{font-size:.95rem;color:var(--u-muted);margin:.25rem 0 1.25rem;}
.uninsured-page-2026 .u-price-list{list-style:none;padding:0;margin:0;display:grid;gap:.5rem;}
.uninsured-page-2026 .u-price-list li{display:flex;gap:.55rem;align-items:flex-start;font-size:.92rem;color:var(--u-ink);line-height:1.4;}
.uninsured-page-2026 .u-price-list li svg{flex-shrink:0;margin-top:.15rem;}

/* Differentiator chip grid — 6 icon cards */
.uninsured-page-2026 .u-chips{display:grid;grid-template-columns:repeat(6, minmax(0,1fr));gap:.65rem;margin:2.25rem 0 0;}
@media (max-width:1000px){.uninsured-page-2026 .u-chips{grid-template-columns:repeat(3, minmax(0,1fr));}}
@media (max-width:560px){.uninsured-page-2026 .u-chips{grid-template-columns:repeat(2, minmax(0,1fr));}}
.uninsured-page-2026 .u-chip{background:#fff;border:1px solid var(--u-line);border-radius:14px;padding:.85rem .8rem;display:flex;flex-direction:column;gap:.4rem;align-items:flex-start;transition:transform .1s ease, border-color .1s ease;}
.uninsured-page-2026 .u-chip:hover{transform:translateY(-2px);border-color:var(--u-ink);}
.uninsured-page-2026 .u-chip-icon{width:32px;height:32px;border-radius:8px;background:var(--u-cream);display:flex;align-items:center;justify-content:center;color:var(--u-navy);}
.uninsured-page-2026 .u-chip-text{font-size:.83rem;font-weight:600;color:var(--u-ink);line-height:1.25;}

/* ─ COMPARISON TABLE ─ */
.uninsured-page-2026 .u-compare-wrap{background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 40px 80px -50px rgba(15,20,32,.4);border:1px solid var(--u-line-2);margin:2rem 0 1.5rem;}
.uninsured-page-2026 .u-compare-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;}
.uninsured-page-2026 .u-compare{width:100%;border-collapse:collapse;font-size:.93rem;min-width:800px;}
.uninsured-page-2026 .u-compare thead th{background:var(--u-cream-2);color:var(--u-ink);text-align:left;font-weight:700;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;padding:1rem .95rem;border-bottom:1px solid var(--u-line);white-space:nowrap;}
.uninsured-page-2026 .u-compare th[scope="row"]{text-align:left;padding:1rem .95rem;font-weight:600;color:var(--u-ink);background:#fff;position:sticky;left:0;z-index:2;border-right:1px solid var(--u-line-2);}
.uninsured-page-2026 .u-compare td{padding:1rem .95rem;color:#2A3040;border-bottom:1px solid var(--u-line-2);vertical-align:middle;}
.uninsured-page-2026 .u-compare tbody tr:hover td, .uninsured-page-2026 .u-compare tbody tr:hover th[scope="row"]{background:#FDFBF6;}
.uninsured-page-2026 .u-compare .u-price-cell{font-weight:600;color:var(--u-ink);white-space:nowrap;}
.uninsured-page-2026 .u-compare .u-row-self th[scope="row"], .uninsured-page-2026 .u-compare .u-row-self td{background:linear-gradient(90deg, rgba(255,90,54,.06), rgba(255,90,54,0) 60%) !important;}
.uninsured-page-2026 .u-compare .u-row-self th[scope="row"]{border-left:4px solid var(--u-coral);padding-left:calc(.95rem - 4px);}
.uninsured-page-2026 .u-compare .u-row-self .u-price-cell{color:var(--u-coral);font-weight:800;font-size:1rem;}

/* Icon cells */
.uninsured-page-2026 .u-badge{display:inline-flex;align-items:center;gap:.4rem;padding:.28rem .55rem;border-radius:999px;font-size:.78rem;font-weight:600;line-height:1;white-space:nowrap;}
.uninsured-page-2026 .u-badge-yes{background:var(--u-ok-bg);color:var(--u-ok);}
.uninsured-page-2026 .u-badge-no{background:var(--u-no-bg);color:var(--u-no);}
.uninsured-page-2026 .u-badge-warn{background:var(--u-warn-bg);color:var(--u-warn);}
.uninsured-page-2026 .u-badge-neutral{background:var(--u-mist);color:#3A4152;}
.uninsured-page-2026 .u-badge svg{width:12px;height:12px;flex-shrink:0;}
.uninsured-page-2026 .u-cell-note{display:block;font-size:.78rem;color:var(--u-muted);margin-top:.35rem;line-height:1.35;}

.uninsured-page-2026 .u-src-line{font-size:.8rem;color:var(--u-muted);}
.uninsured-page-2026 .u-src-line a{color:var(--u-navy);}

/* ─ Answer cards under the table ─ */
.uninsured-page-2026 .u-answer-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem;}
@media (max-width:820px){.uninsured-page-2026 .u-answer-grid{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-answer-card{background:#fff;border:1px solid var(--u-line-2);border-radius:20px;padding:1.5rem;position:relative;overflow:hidden;}
.uninsured-page-2026 .u-answer-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--u-navy);}
.uninsured-page-2026 .u-answer-card h3{font-family:'Fraunces',Georgia,serif;font-size:1.2rem;font-weight:500;color:var(--u-ink);margin:0 0 .6rem;line-height:1.25;letter-spacing:-.01em;}
.uninsured-page-2026 .u-answer-card p{margin:0;font-size:.94rem;line-height:1.55;color:#3A4152;}

/* ─ Included list ─ */
.uninsured-page-2026 .u-included{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem 1.5rem;margin:1rem 0 0;padding:0;list-style:none;}
@media (max-width:700px){.uninsured-page-2026 .u-included{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-included li{display:flex;gap:.7rem;align-items:flex-start;font-size:1rem;color:var(--u-ink);line-height:1.45;}
.uninsured-page-2026 .u-included li svg{flex-shrink:0;margin-top:.2rem;color:var(--u-ok);}

/* ─ Triage two-column ─ */
.uninsured-page-2026 .u-triage{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.25rem;}
@media (max-width:700px){.uninsured-page-2026 .u-triage{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-triage-col{background:#fff;border-radius:20px;padding:1.5rem;border:1px solid var(--u-line-2);}
.uninsured-page-2026 .u-triage-col.u-good{border-top:4px solid var(--u-ok);}
.uninsured-page-2026 .u-triage-col.u-bad{border-top:4px solid var(--u-no);}
.uninsured-page-2026 .u-triage-col h3{margin:0 0 .85rem;font-size:1.05rem;font-weight:700;color:var(--u-ink);display:flex;align-items:center;gap:.5rem;}
.uninsured-page-2026 .u-triage-col ul{margin:0;padding:0;list-style:none;display:grid;gap:.6rem;}
.uninsured-page-2026 .u-triage-col ul li{font-size:.94rem;color:#2A3040;line-height:1.45;padding-left:1.2rem;position:relative;}
.uninsured-page-2026 .u-triage-col.u-good ul li::before{content:"✓";color:var(--u-ok);position:absolute;left:0;font-weight:700;}
.uninsured-page-2026 .u-triage-col.u-bad ul li::before{content:"✕";color:var(--u-no);position:absolute;left:0;font-weight:700;}

/* ─ Physician dark section ─ */
.uninsured-page-2026 .u-physician{background:var(--u-ink);color:#F0EEE8;padding:clamp(3rem,6vw,5rem) 0;position:relative;overflow:hidden;}
.uninsured-page-2026 .u-physician::before{content:"";position:absolute;top:-100px;left:-100px;width:400px;height:400px;background:radial-gradient(circle, rgba(255,90,54,.14), transparent 70%);pointer-events:none;}
.uninsured-page-2026 .u-physician h2{color:#fff;font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(1.8rem,3.4vw,2.6rem);letter-spacing:-.015em;margin:0 0 2rem;line-height:1.1;}
.uninsured-page-2026 .u-physician h2 em{font-style:italic;color:#F6C6B4;}
.uninsured-page-2026 .u-physician-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:2.5rem;align-items:start;}
@media (max-width:820px){.uninsured-page-2026 .u-physician-grid{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-md-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:1.75rem;}
.uninsured-page-2026 .u-md-card h3{color:#fff;font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:1.4rem;margin:0 0 1rem;}
.uninsured-page-2026 .u-md-list{list-style:none;padding:0;margin:0 0 1.25rem;display:grid;gap:.65rem;}
.uninsured-page-2026 .u-md-list li{font-size:.92rem;color:#D6DAE3;line-height:1.4;padding-left:1.1rem;position:relative;}
.uninsured-page-2026 .u-md-list li::before{content:"◆";color:#F6C6B4;position:absolute;left:0;font-size:.65em;top:.4em;}
.uninsured-page-2026 .u-physician p{color:#D6DAE3;font-size:1.02rem;line-height:1.6;margin:0 0 1.1rem;}
.uninsured-page-2026 .u-physician .u-hipaa{font-size:.85rem;color:#8A93A6;margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,.1);}

/* ─ States grid ─ */
.uninsured-page-2026 .u-states{columns:4 180px;column-gap:1.5rem;font-size:.94rem;margin:1.25rem 0 1rem;background:#fff;border:1px solid var(--u-line-2);border-radius:20px;padding:1.5rem;}
.uninsured-page-2026 .u-states div{break-inside:avoid;padding:.2rem 0;color:var(--u-ink);}

/* ─ Condition cards ─ */
.uninsured-page-2026 .u-conditions{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:1.25rem;}
@media (max-width:820px){.uninsured-page-2026 .u-conditions{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-cond-card{background:#fff;border:1px solid var(--u-line-2);border-radius:18px;padding:1.4rem;text-decoration:none;color:var(--u-ink);transition:transform .12s ease, border-color .12s ease, box-shadow .12s ease;display:flex;flex-direction:column;gap:.5rem;}
.uninsured-page-2026 .u-cond-card:hover{transform:translateY(-2px);border-color:var(--u-navy);box-shadow:0 20px 40px -30px rgba(15,20,32,.4);}
.uninsured-page-2026 .u-cond-tag{align-self:flex-start;background:var(--u-cream);color:var(--u-navy);font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;padding:.25rem .55rem;border-radius:6px;}
.uninsured-page-2026 .u-cond-card h3{margin:0;font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:1.15rem;color:var(--u-ink);letter-spacing:-.005em;}
.uninsured-page-2026 .u-cond-card p{margin:.15rem 0 0;font-size:.92rem;color:var(--u-muted);line-height:1.5;}
.uninsured-page-2026 .u-cond-more{margin-top:.5rem;font-size:.85rem;color:var(--u-navy);font-weight:600;}

/* ─ How it works ─ */
.uninsured-page-2026 .u-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.5rem;}
@media (max-width:820px){.uninsured-page-2026 .u-steps{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-step{background:#fff;border:1px solid var(--u-line-2);border-radius:20px;padding:1.75rem 1.5rem;position:relative;}
.uninsured-page-2026 .u-step-num{font-family:'Fraunces',Georgia,serif;font-size:3rem;line-height:1;color:var(--u-cream);font-weight:400;margin:0 0 .5rem;position:absolute;top:1.25rem;right:1.5rem;}
.uninsured-page-2026 .u-step h3{margin:0 0 .5rem;font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:1.2rem;color:var(--u-ink);padding-right:3rem;}
.uninsured-page-2026 .u-step p{margin:0;font-size:.93rem;color:var(--u-muted);line-height:1.5;}

/* ─ FAQ ─ */
.uninsured-page-2026 .u-faq{display:grid;gap:.6rem;margin-top:1.25rem;}
.uninsured-page-2026 details.u-faq-item{background:#fff;border:1px solid var(--u-line-2);border-radius:14px;padding:0;overflow:hidden;transition:border-color .12s ease;}
.uninsured-page-2026 details.u-faq-item[open]{border-color:var(--u-navy);}
.uninsured-page-2026 details.u-faq-item summary{cursor:pointer;list-style:none;padding:1.1rem 1.4rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;font-weight:600;color:var(--u-ink);font-size:1.02rem;line-height:1.35;}
.uninsured-page-2026 details.u-faq-item summary::-webkit-details-marker{display:none;}
.uninsured-page-2026 details.u-faq-item summary::after{content:"+";font-family:'Fraunces',Georgia,serif;font-size:1.6rem;color:var(--u-navy);flex-shrink:0;line-height:1;transition:transform .18s ease;}
.uninsured-page-2026 details.u-faq-item[open] summary::after{content:"−";}
.uninsured-page-2026 details.u-faq-item .u-faq-a{padding:0 1.4rem 1.2rem;color:#2A3040;font-size:.95rem;line-height:1.6;}

/* ─ CTA banner ─ */
.uninsured-page-2026 .u-cta-banner{background:var(--u-ink);color:#fff;border-radius:24px;padding:clamp(1.75rem,4vw,2.5rem);display:grid;grid-template-columns:1.4fr auto;gap:1.5rem;align-items:center;position:relative;overflow:hidden;}
@media (max-width:760px){.uninsured-page-2026 .u-cta-banner{grid-template-columns:1fr;}}
.uninsured-page-2026 .u-cta-banner::before{content:"";position:absolute;right:-40px;top:-40px;width:280px;height:280px;background:radial-gradient(circle, rgba(255,90,54,.2), transparent 60%);pointer-events:none;}
.uninsured-page-2026 .u-cta-banner h3{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:clamp(1.4rem,2.4vw,1.9rem);color:#fff;margin:0 0 .5rem;line-height:1.2;letter-spacing:-.01em;}
.uninsured-page-2026 .u-cta-banner p{color:#B9C0CD;font-size:1rem;margin:0;}
.uninsured-page-2026 .u-cta-banner .u-btn-outline{border-color:#fff;color:#fff;}
.uninsured-page-2026 .u-cta-banner .u-btn-outline:hover{background:#fff;color:var(--u-ink);}
.uninsured-page-2026 .u-cta-actions{display:flex;flex-direction:column;gap:.5rem;position:relative;z-index:1;}

/* ─ Footer strip: cross-links & references ─ */
.uninsured-page-2026 .u-link-cloud{display:flex;flex-wrap:wrap;gap:.6rem;margin:.75rem 0 0;}
.uninsured-page-2026 .u-link-cloud a{background:#fff;border:1px solid var(--u-line-2);border-radius:999px;padding:.5rem 1rem;font-size:.9rem;color:var(--u-ink);text-decoration:none;transition:border-color .12s ease;}
.uninsured-page-2026 .u-link-cloud a:hover{border-color:var(--u-ink);}
.uninsured-page-2026 .u-ref-list{margin:.75rem 0 0;padding:0;list-style:none;display:grid;gap:.5rem;}
.uninsured-page-2026 .u-ref-list li{font-size:.9rem;color:var(--u-muted);}
.uninsured-page-2026 .u-ref-list a{color:var(--u-navy);}
.uninsured-page-2026 .u-disclaimer{font-size:.85rem;color:var(--u-muted);line-height:1.55;}
.uninsured-page-2026 .u-disclaimer h2{font-size:1rem;font-weight:700;color:var(--u-ink);margin:0 0 .5rem;font-family:inherit;letter-spacing:0;}

/* ─ Section H2 group helper ─ */
.uninsured-page-2026 .u-sec-head{margin:0 0 1.5rem;max-width:65ch;}
`;

/* Inline icon components — no dep on any icon library */
const IconCheck = (p) => <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" {...p}><path d="M8.1 13.6L4.5 10l-1.4 1.4 5 5 10-10-1.4-1.4z"/></svg>;
const IconX = (p) => <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" {...p}><path d="M15.5 5.9L14.1 4.5 10 8.6 5.9 4.5 4.5 5.9 8.6 10l-4.1 4.1 1.4 1.4 4.1-4.1 4.1 4.1 1.4-1.4L11.4 10z"/></svg>;
const IconWarn = (p) => <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" {...p}><path d="M10 1L1 18h18L10 1zm0 6l6 10H4l6-10zm-1 3v4h2v-4H9zm0 5v2h2v-2H9z"/></svg>;
const IconDollar = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>;
const IconUser = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconMap = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconNoMember = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="4" y1="20" x2="20" y2="4"/></svg>;
const IconPill = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M10.5 20.5a5 5 0 01-7-7L13.5 3.5a5 5 0 017 7L10.5 20.5z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/></svg>;
const IconClock = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

/* Cell renderer: turn plain text like "No, rotating" into a colored badge with icon */
function renderCell(text) {
  if (text == null) return null;
  const t = String(text);
  const lower = t.toLowerCase();
  // Split "Yes/No, rest" into badge + note
  const [head, ...tail] = t.split(',');
  const note = tail.join(',').trim();

  let variant = 'neutral';
  let Icon = null;

  if (/^yes\b/i.test(head)) { variant = 'yes'; Icon = IconCheck; }
  else if (/^no\b/i.test(head)) { variant = 'no'; Icon = IconX; }
  else if (/attempts continuity|effectively yes/i.test(head)) { variant = 'warn'; Icon = IconWarn; }
  else if (/varies|not specified/i.test(head)) { variant = 'neutral'; Icon = IconWarn; }
  else { variant = 'neutral'; }

  return (
    <>
      <span className={`u-badge u-badge-${variant}`}>
        {Icon && <Icon />}
        {head}
      </span>
      {note && <span className="u-cell-note">{note}</span>}
    </>
  );
}

export default function UninsuredAffordableCarePage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/uninsured-affordable-care`;
  const today = new Date().toISOString().split('T')[0];

  /* ── State coverage ─────────────────────────────────────────────── */
  // Served states, 44 plus DC (checked by scripts/check-state-coverage.js):
  // Alabama, Alaska, Arizona, California, Colorado, Connecticut, Delaware,
  // Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky,
  // Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri,
  // Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina,
  // North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota,
  // Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,
  // Wisconsin, Wyoming, plus Washington, DC.
  const stateAbbrs = ['AL','AK','AZ','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NC','ND','OH','OK','PA','SC','SD','TN','TX','UT','VA','VT','WA','WV','WI','WY'];
  const stateNames = ['Alabama','Alaska','Arizona','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','North Carolina','North Dakota','Ohio','Oklahoma','Pennsylvania','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming','Washington, DC'];

  /* ── Chips ───────────────────────────────────────────────────────── */
  const chips = [
    { icon: IconDollar,  text: '$79 flat, always' },
    { icon: IconUser,    text: 'Same MD every visit' },
    { icon: IconMap,     text: '44 states, one doctor' },
    { icon: IconNoMember,text: 'No membership' },
    { icon: IconPill,    text: 'No drug subscriptions' },
    { icon: IconClock,   text: 'Same-day, evenings, weekends' },
  ];

  /* ── Conditions ──────────────────────────────────────────────────── */
  const conditions = [
    { tag: 'Infection',    name: 'UTI / Urinary tract infection', slug: 'uti-treatment-online', desc: 'Uncomplicated UTI evaluation and antibiotic e-prescribed to your pharmacy for $79. Complicated or recurrent cases may need in-person labs.' },
    { tag: 'Infection',    name: 'Sinus infection', slug: 'sinus-infection-treatment-online', desc: 'Evaluation for bacterial vs viral sinusitis, symptom management, and antibiotics when clinically indicated.' },
    { tag: 'Respiratory',  name: 'Cold, flu, respiratory infections', slug: 'common-cold-treatment-online', desc: 'Same-day evaluation, antivirals for eligible flu patients, and clear guidance on when in-person care is warranted.' },
    { tag: 'Chronic',      name: 'Hypertension', slug: 'hypertension-refills-online', desc: 'Ongoing BP management and refills, cheaper than an in-person office visit and with the same physician over time.' },
    { tag: 'Chronic',      name: 'Type 2 diabetes', slug: 'diabetes-refills-online', desc: 'Refills, dose adjustments, and A1c-based follow-up. Local lab cash-pay orders when needed.' },
    { tag: 'Chronic',      name: 'Acid reflux / GERD', slug: 'acid-reflux-refills-online', desc: 'PPI and H2 blocker management without a specialist copay. Continuity matters for step-down strategies.' },
    { tag: 'Skin',         name: 'Eczema and skin conditions', slug: 'eczema-treatment-online', desc: 'Topical steroid and non-steroidal prescriptions evaluated by video.' },
    { tag: 'Infection',    name: 'Influenza', slug: 'influenza-treatment-online', desc: 'Same-day evaluation and antivirals when eligible.' },
    { tag: 'Chronic',      name: 'Migraine', slug: 'migraine-refills-online', desc: 'Abortive and preventive prescription management.' },
    { tag: 'Infection',    name: 'Pink eye / conjunctivitis', slug: 'pink-eye-treatment-online', desc: 'Prescription drops when bacterial, guidance when viral.' },
  ];

  /* ── FAQ ─────────────────────────────────────────────────────────── */
  const faqItems = [
    { q: 'How much does an online doctor visit cost without insurance in 2026?', a: "A TeleDirectMD visit is $79 flat, cash pay, no insurance required. GoodRx reports typical no-insurance telehealth prices of $40 to $90 per visit, though the lowest advertised prices often require a monthly membership. Named-brand telehealth without insurance runs $89 to $129 per visit (Teladoc, MDLive, Doctor On Demand, PlushCare). An in-person urgent care averages $180, and an uninsured ER visit averages $2,400 or more." },
    { q: 'Is $79 the cheapest online doctor without insurance?', a: 'No, and we do not claim to be. Services like ChatWithDr ($39.99) and Prana Health ($39) charge less. What TeleDirectMD offers at $79 is the cheapest visit with a board-certified MD (not a nurse practitioner), where you see the same physician every time, with no membership fee or drug subscription attached.' },
    { q: 'Will I see the same doctor every visit, or a different one each time?', a: 'Same doctor every visit. TeleDirectMD is a single-physician practice by design. You will see Dr. Parth Bhavsar on your first visit and every visit after. Almost every other cash-pay telehealth service (Teladoc, MDLive, Amwell, Doctor On Demand, GoodRx Care, HealthTap) rotates you through whoever is available in a large clinician pool.' },
    { q: 'If I travel to another state, do I get a different provider?', a: 'No. As long as you are physically located in one of the 44 states plus DC we cover at the time of your visit, you see the same doctor. Travel from Georgia to Florida to Texas, still the same physician, still the same chart, no re-intake, no new provider getting your history from scratch.' },
    { q: 'Is there a monthly membership or subscription fee?', a: 'No. $79 is the whole price. No enrollment fee, no annual fee, no membership tier, no unlock price. Compare that to GoodRx Gold ($10/mo), PlushCare ($19.99/mo), HealthTap ($15 to $18/mo), and Telescripts ($74.99/mo), where the advertised low visit price only applies after you pay the recurring fee.' },
    { q: 'Do you sell weight-loss shots, ED pills, or other drug subscriptions?', a: 'No. TeleDirectMD does not sell any monthly medication subscription. We do not run a GLP-1 program, an ED program, a hair-loss program, or a birth-control mail-order program. Prescriptions go to the pharmacy of your choice, whichever is cheapest for your specific drug. Our revenue is the $79 visit, not recurring drug margin.' },
    { q: 'Can I see a real MD online without insurance, or only a nurse practitioner?', a: 'You see a real board-certified physician. Dr. Parth Bhavsar is board-certified in Family Medicine by the American Board of Family Medicine, completed his residency at the University of Mississippi Medical Center, and is licensed in 44 states plus DC. Most cash-pay telehealth services under $50 are staffed primarily by nurse practitioners or physician assistants.' },
    { q: 'Can I get antibiotics prescribed online without insurance?', a: 'Yes, when clinically appropriate. Common conditions treated with antibiotics via telehealth include uncomplicated UTIs, bacterial sinus infections, strep pharyngitis (when a home test is available), and certain skin infections. We do not prescribe antibiotics for conditions that are almost always viral, like typical colds. TeleDirectMD does not prescribe controlled substances.' },
    { q: 'Can I use HSA or FSA to pay for a telehealth visit?', a: 'Yes. Telehealth visits are qualified medical expenses under IRS rules and can be paid with HSA or FSA cards.' },
    { q: "What's the difference between TeleDirectMD, Teladoc, and GoodRx Care?", a: 'Teladoc ($89 per visit) and GoodRx Care ($19 with a $10/mo Gold membership, $39 to $70 without) both rotate you through a pool of providers, some of whom are nurse practitioners rather than physicians. TeleDirectMD ($79 per visit, no membership) is a single-physician practice where you see the same board-certified MD every visit across all 44 states we cover.' },
    { q: 'Can I book a same-day or weekend online doctor visit without insurance?', a: 'Yes. Most days have same-day availability including evenings until 9 PM local time and full weekend coverage. If a same-day slot is not open in your state, the next available window is shown before you pay.' },
    { q: 'What happens if I need a follow-up, do I pay $79 again?', a: 'Yes, $79 flat for every visit including follow-ups. There is no first-visit surcharge and no cheaper follow-up rate. The trade-off is transparency: you always know your cost, and there is no membership or subscription running in the background.' },
    { q: 'What pharmacies can you send prescriptions to?', a: 'Any US pharmacy. CVS, Walgreens, Walmart, Kroger, Publix, Costco (no membership needed to fill a prescription), Cost Plus Drugs, and any independent local pharmacy. During the visit we will discuss which pharmacy typically has the best cash price for the specific medication.' },
    { q: "Does TeleDirectMD show up in my medical record if I don't have insurance?", a: 'Yes. TeleDirectMD keeps a HIPAA-compliant medical record of every visit, and you can request a copy. Without insurance involved, no claim is submitted, so nothing is filed with an insurer. If you later request that we send records to another provider or insurer, we do that only with your written authorization.' },
    { q: 'Will an uninsured telehealth visit affect future insurance underwriting?', a: 'For most health insurance in the US (ACA marketplace, employer group plans, Medicare, Medicaid), the answer is no, because pre-existing conditions cannot be used to deny coverage or raise premiums. Life insurance and disability insurance underwriting can consider medical records; whether a specific visit affects a future application depends on the diagnosis and the carrier.' },
    { q: 'Is TeleDirectMD available in my state?', a: `TeleDirectMD is licensed in 44 states plus Washington, DC: ${stateNames.join(', ')}. You must be physically located in one of these jurisdictions at the time of your visit.` },
  ];

  /* ── JSON-LD ─────────────────────────────────────────────────────── */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', '@id': `${pageUrl}#breadcrumbs`, itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Who We Serve', item: `${baseUrl}/who-we-serve` },
          { '@type': 'ListItem', position: 3, name: 'Uninsured & Affordable Care', item: pageUrl }
      ]},
      { '@type': ['MedicalBusiness','MedicalOrganization','Organization'], '@id': `${baseUrl}/#organization`,
        name: 'TeleDirectMD', url: baseUrl, logo: `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        telephone: '+1-678-956-1855', medicalSpecialty: 'FamilyMedicine', priceRange: '$79',
        areaServed: stateAbbrs, employee: { '@id': `${baseUrl}/about#physician` },
        makesOffer: { '@type': 'Offer', name: 'Online doctor video visit, cash pay',
          price: '79.00', priceCurrency: 'USD', category: 'Telehealth video visit',
          description: 'Flat $79 per visit with a board-certified family medicine physician. No insurance, no membership, no drug subscription required. Follow-up visits are the same $79.',
          eligibleRegion: stateAbbrs, availableAtOrFrom: { '@type': 'VirtualLocation', url: 'https://teledirectmd.as.me' } },
        availableService: { '@type': 'MedicalTherapy', name: 'Telehealth video visit for non-emergency adult conditions', howPerformed: 'Secure HIPAA-compliant video visit' } },
      { '@type': 'Physician', '@id': `${baseUrl}/about#physician`, name: 'Parth Bhavsar, MD',
        givenName: 'Parth', familyName: 'Bhavsar', honorificSuffix: 'MD', jobTitle: 'Founder and Physician',
        medicalSpecialty: 'FamilyMedicine', worksFor: { '@id': `${baseUrl}/#organization` },
        alumniOf: [
          { '@type': 'EducationalOrganization', name: 'Smt NHL Municipal Medical College, Ahmedabad, India' },
          { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center (Family Medicine Residency, 2021)' } ],
        hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'Board Certification',
          name: 'Board Certified in Family Medicine', recognizedBy: { '@type': 'Organization', name: 'American Board of Family Medicine' } }],
        areaServed: stateAbbrs },
      { '@type': 'HowTo', name: 'How to book a $79 online doctor visit without insurance',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' }, totalTime: 'PT15M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Request a visit', text: 'Open TeleDirectMD.com on your phone, choose your state and describe your symptoms. See the $79 price before you confirm. Takes about 2 minutes.' },
          { '@type': 'HowToStep', position: 2, name: 'Connect by video', text: 'Meet Dr. Bhavsar by secure video. Most visits take 10 to 15 minutes.' },
          { '@type': 'HowToStep', position: 3, name: 'Get treated', text: 'If medication is appropriate, the prescription is sent electronically to your pharmacy of choice. If your case is not appropriate for telehealth, you will be directed to the right level of care.' } ] },
      { '@type': 'FAQPage', '@id': `${pageUrl}#faq`,
        mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
      { '@type': 'MedicalWebPage', '@id': `${pageUrl}#webpage`, url: pageUrl,
        name: '$79 Online Doctor Without Insurance - Same MD, 44 States',
        description: 'See the same board-certified physician every visit for $79 flat. No insurance, no membership, no drug subscriptions. 44 states, same-day, evenings and weekends.',
        inLanguage: 'en-US', breadcrumb: { '@id': `${pageUrl}#breadcrumbs` },
        author: { '@id': `${baseUrl}/about#physician` }, reviewedBy: { '@id': `${baseUrl}/about#physician` },
        lastReviewed: today, datePublished: today, dateModified: today,
        publisher: { '@type': 'Organization', name: 'TeleDirectMD', url: baseUrl },
        audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: [
          { '@type': 'MedicalCondition', name: 'Urinary tract infection' },
          { '@type': 'MedicalCondition', name: 'Sinus infection' },
          { '@type': 'MedicalCondition', name: 'Influenza' },
          { '@type': 'MedicalCondition', name: 'Hypertension' },
          { '@type': 'MedicalCondition', name: 'Type 2 diabetes' },
          { '@type': 'MedicalCondition', name: 'Gastroesophageal reflux disease' },
          { '@type': 'MedicalCondition', name: 'Eczema' },
          { '@type': 'MedicalCondition', name: 'Migraine' },
          { '@type': 'MedicalCondition', name: 'Conjunctivitis' } ],
        mainEntity: { '@id': `${pageUrl}#faq` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.u-hero-sub', '#uninsured-faq summary'] } }
    ]
  };

  return (
    <div className="uninsured-page-2026">
      <style dangerouslySetInnerHTML={{ __html: pageCSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb (reuses global bc styles) */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">Uninsured &amp; Affordable Care</span>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="u-hero" id="uninsured-hero">
        <div className="u-container">
          <div className="u-hero-grid">
            <div>
              <span className="u-eyebrow"><span className="u-dot" />Uninsured & affordable care</span>
              <h1>$79 online doctor without insurance. <em>Same MD, every visit,</em> 44 states.</h1>
              <p className="u-hero-sub">A TeleDirectMD video visit costs $79 flat. No insurance required. No monthly membership. No drug subscription upsells. You see the same board-certified physician every visit, whether you are home in Georgia or on a trip in Denver.</p>
              <div className="u-cta-row">
                <a href="/book-online" className="u-btn u-btn-primary">Book a $79 visit</a>
                <a href="#uninsured-compare" className="u-btn u-btn-ghost">See how we compare</a>
              </div>
              <p className="u-reviewed">Last reviewed on {today} by <a href="/about">Parth Bhavsar, MD</a></p>
            </div>

            <div className="u-price-card">
              <p className="u-price-eyebrow">Cash-pay, all visits</p>
              <p className="u-price-num"><sup>$</sup>79</p>
              <p className="u-price-flat">Flat rate. First visit and every follow-up.</p>
              <ul className="u-price-list">
                <li><IconCheck style={{ color: 'var(--u-ok)' }} /> Board-certified family medicine MD</li>
                <li><IconCheck style={{ color: 'var(--u-ok)' }} /> Prescription to any US pharmacy you choose</li>
                <li><IconCheck style={{ color: 'var(--u-ok)' }} /> No membership, no subscription, no add-on fees</li>
                <li><IconCheck style={{ color: 'var(--u-ok)' }} /> HSA and FSA cards accepted</li>
              </ul>
            </div>
          </div>

          {/* Differentiator chip row */}
          <div className="u-chips" aria-label="What makes TeleDirectMD different">
            {chips.map((c, i) => (
              <div key={i} className="u-chip">
                <span className="u-chip-icon"><c.icon /></span>
                <span className="u-chip-text">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="u-sec u-bg-mist" id="uninsured-compare">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />Honest comparison</span>
            <h2 className="u-h2">How TeleDirectMD compares</h2>
            <p className="u-lede">Most "cheap online doctor" services either charge you a monthly membership to unlock the low price, rotate you through whichever provider is available, or make their real money selling you a monthly drug subscription. Here is the honest comparison. Cost per visit and what is actually included, as of {comparison.asOfDate}.</p>
          </div>

          <div className="u-compare-wrap">
            <div className="u-compare-scroll">
              <table className="u-compare">
                <thead>
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Per-visit price</th>
                    <th scope="col">Provider</th>
                    <th scope="col">Same MD every visit</th>
                    <th scope="col">Membership required</th>
                    <th scope="col">Pushes drug subscriptions</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((r, i) => (
                    <tr key={i} className={r.isSelf ? 'u-row-self' : undefined}>
                      <th scope="row">{r.service}</th>
                      <td className="u-price-cell">{r.price}</td>
                      <td>{r.provider}</td>
                      <td>{renderCell(r.sameDoctor)}</td>
                      <td>{renderCell(r.membership)}</td>
                      <td>{renderCell(r.drugSubscription)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="u-src-line">
            Sources: {comparison.sources.map((s, i) => (
              <span key={i}>{i > 0 ? ' · ' : ''}<a href={s.url} rel="nofollow noopener" target="_blank">{s.label}</a></span>
            ))}. Prices verified {comparison.asOfDate} and updated quarterly.
          </p>

          <div className="u-answer-grid">
            <div className="u-answer-card">
              <h3>Why $79 with the same MD beats $19 with a rotating NP</h3>
              <p>The $19 price at GoodRx Care requires a Gold membership at $10 per month, so the real cost of one visit for a non-member is $39 to $70. You are also seeing whoever is available in the pool, which may be an MD or a nurse practitioner, and almost never the same person twice. If you have hypertension, diabetes, GERD, or any condition that needs continuity, a rotating provider adds friction and risk that a flat $79 visit with a single physician does not.</p>
            </div>
            <div className="u-answer-card">
              <h3>Why a flat $79 visit beats a $30-per-month drug subscription</h3>
              <p>Hims, Hers, and Ro advertise "$0 visits," but the visit is a lead-in to a monthly prescription subscription that is often marked up above local pharmacy pricing. With TeleDirectMD the physician sends your prescription to the pharmacy of your choice, CVS, Walmart, Costco, Cost Plus Drugs, whichever is cheapest for your specific medication. Our revenue is the visit, not the drug margin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT $79 GETS YOU ─── */}
      <section className="u-sec u-bg-cream" id="uninsured-included">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />What's included</span>
            <h2 className="u-h2">What $79 actually gets you</h2>
          </div>
          <ul className="u-included">
            <li><IconCheck /> A 10 to 15 minute video visit with the same board-certified family medicine physician every time</li>
            <li><IconCheck /> E-prescription sent to any US pharmacy you choose, including Cost Plus Drugs and Costco</li>
            <li><IconCheck /> No enrollment fee, no membership, no subscription, no facility fee</li>
            <li><IconCheck /> No pressure to sign up for a monthly medication delivery</li>
            <li><IconCheck /> HSA and FSA cards accepted at checkout</li>
            <li><IconCheck /> Follow-up visits are the same $79 flat, no first-visit surcharge</li>
          </ul>
          <p style={{ fontSize: '.9rem', color: 'var(--u-muted)', marginTop: '1rem' }}>Insurance is accepted in select states. Contact us to confirm your plan.</p>
        </div>
      </section>

      {/* ─── TRIAGE MATRIX ─── */}
      <section className="u-sec u-bg-white" id="uninsured-triage">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />Right level of care</span>
            <h2 className="u-h2">When telehealth is right, and when it isn't</h2>
            <p className="u-lede">Not every symptom belongs on a video visit. Here is a straight answer.</p>
          </div>
          <div className="u-triage">
            <div className="u-triage-col u-good">
              <h3><IconCheck style={{ color: 'var(--u-ok)' }} /> Telehealth is appropriate</h3>
              <ul>
                <li>UTI, sinus infection, bronchitis, strep-like symptoms</li>
                <li>Cold, flu, cough, low-grade fever</li>
                <li>Skin rash, eczema, cold sore, mild acne</li>
                <li>Prescription refills for hypertension, diabetes, GERD, statins</li>
                <li>Migraine, acid reflux, mild allergic reaction</li>
                <li>Pink eye, adult ear pain, simple UTI recurrence</li>
                <li>Travel medicine, work notes, medication reviews</li>
              </ul>
            </div>
            <div className="u-triage-col u-bad">
              <h3><IconX style={{ color: 'var(--u-no)' }} /> Go to urgent care or the ER</h3>
              <ul>
                <li>Chest pain, shortness of breath, symptoms of a heart attack</li>
                <li>Signs of stroke (face droop, arm weakness, speech difficulty)</li>
                <li>Uncontrolled bleeding or a suspected fracture</li>
                <li>Severe abdominal pain, vomiting blood, or black stools</li>
                <li>Head injury with loss of consciousness or confusion</li>
                <li>Any pregnancy complication or severe pediatric illness</li>
                <li>Suicidal ideation or mental health emergency (call or text 988)</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: '.9rem', color: 'var(--u-muted)', marginTop: '1rem' }}>If you are unsure, request a visit. If your case is not appropriate for telehealth, we will tell you before charging you and refer you to the right level of care.</p>
        </div>
      </section>

      {/* ─── PHYSICIAN (dark) ─── */}
      <section className="u-physician" id="uninsured-physician">
        <div className="u-container">
          <span className="u-eyebrow" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.15)', color: '#fff' }}><span className="u-dot" style={{ background: '#F6C6B4' }} />Meet your doctor</span>
          <h2>The whole practice is <em>one doctor.</em> That's the point.</h2>
          <div className="u-physician-grid">
            <div className="u-md-card">
              <h3>Dr. Parth Bhavsar, MD</h3>
              <ul className="u-md-list">
                <li>Board-certified in Family Medicine, American Board of Family Medicine</li>
                <li>Family Medicine residency, University of Mississippi Medical Center, 2021</li>
                <li>Medical degree, Smt NHL Municipal Medical College, Ahmedabad, India</li>
                <li>Licensed in 44 states and Washington, DC</li>
              </ul>
              <a href="/about" className="u-btn u-btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>More about Dr. Bhavsar</a>
            </div>
            <div>
              <p>You will see me on your first visit and every visit after. Whether you are home in Atlanta, on a work trip in Denver, or visiting family in Miami, you get the same physician, the same chart, and no re-intake. That continuity is genuinely rare in cash-pay telehealth, and it is the entire design of this practice.</p>
              <p>Continuity of care is one of the most consistent predictors of better outcomes and lower total cost, particularly for chronic conditions like hypertension, diabetes, and GERD. It is easier to notice a subtle change in your blood pressure, your reflux pattern, or your medication response when the same physician has seen you before. A rotating pool of providers cannot do that, no matter how good each individual clinician is.</p>
              <p className="u-hipaa">TeleDirectMD is HIPAA-compliant. Your health information is encrypted, is not sold, and is not shared for advertising.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 44 STATES ─── */}
      <section className="u-sec u-bg-cream" id="uninsured-states">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />Coverage</span>
            <h2 className="u-h2">44 states, one doctor, no re-establishing care</h2>
            <p className="u-lede">Uninsured patients often move for work or travel between states, and every switch to a new provider means a new intake, a new deductible-style intake fee, and a new physician who does not know your history. With TeleDirectMD, you keep the same doctor as long as you are physically located in one of these 44 states plus DC at the time of your visit:</p>
          </div>
          <div className="u-states">
            {stateNames.map((s) => <div key={s}>{s}</div>)}
          </div>
          <p style={{ fontSize: '.9rem', color: 'var(--u-muted)' }}>Not currently available in Arkansas, Massachusetts, New Mexico, New York, Oregon, or Rhode Island. See <a href="/states-we-serve" style={{ color: 'var(--u-navy)' }}>States We Serve</a> for state-specific condition pages.</p>
        </div>
      </section>

      {/* ─── CONDITIONS ─── */}
      <section className="u-sec u-bg-white" id="uninsured-conditions">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />Common conditions</span>
            <h2 className="u-h2">What we treat for $79</h2>
            <p className="u-lede">Every visit is $79 flat, no insurance required. Each condition below links to a page that explains what to expect, what medications are typically appropriate, and when telehealth is not the right call.</p>
          </div>
          <div className="u-conditions">
            {conditions.map((c) => (
              <a key={c.slug} href={`/${c.slug}`} className="u-cond-card">
                <span className="u-cond-tag">{c.tag}</span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <span className="u-cond-more">Read more →</span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="/what-we-treat" className="u-btn u-btn-ghost">View all 60+ conditions we treat</a>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="u-sec u-bg-cream-2" id="uninsured-how-it-works">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />How it works</span>
            <h2 className="u-h2">Three steps, about 15 minutes total</h2>
          </div>
          <div className="u-steps">
            <div className="u-step"><div className="u-step-num">01</div><h3>Request a visit</h3><p>Open TeleDirectMD.com on your phone. See the $79 price before you confirm. Tell us your state and symptoms. About 2 minutes.</p></div>
            <div className="u-step"><div className="u-step-num">02</div><h3>Connect by video</h3><p>You meet Dr. Bhavsar by secure video. Most visits take 10 to 15 minutes.</p></div>
            <div className="u-step"><div className="u-step-num">03</div><h3>Get treated</h3><p>Prescription e-sent to the pharmacy of your choice. If your case is not appropriate for telehealth, you will hear that directly and get pointed to the right level of care.</p></div>
          </div>
        </div>
      </section>

      {/* ─── PRESCRIPTIONS ─── */}
      <section className="u-sec u-bg-white" id="uninsured-prescriptions">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />Prescriptions</span>
            <h2 className="u-h2">Prescriptions without insurance</h2>
            <p className="u-lede">Medication cost is separate from the $79 visit, and it depends on the drug and your pharmacy, not on us. During your visit we will discuss the least-expensive option that works clinically. Common savings tools:</p>
          </div>
          <ul className="u-included">
            <li><IconCheck /> <span><a href="https://costplusdrugs.com" rel="nofollow noopener" target="_blank" style={{ color: 'var(--u-navy)', fontWeight: 600 }}>Cost Plus Drugs</a>: Mark Cuban's pharmacy. Often the cheapest source for common generics.</span></li>
            <li><IconCheck /> <span><a href="https://goodrx.com" rel="nofollow noopener" target="_blank" style={{ color: 'var(--u-navy)', fontWeight: 600 }}>GoodRx</a> coupons: present at pickup, no membership needed to use a coupon.</span></li>
            <li><IconCheck /> <span><a href="https://www.walmart.com/cp/4-prescriptions/1078664" rel="nofollow noopener" target="_blank" style={{ color: 'var(--u-navy)', fontWeight: 600 }}>Walmart $4 / $10 generic list</a>: applies to many common medications.</span></li>
            <li><IconCheck /> <span><a href="https://www.costco.com/pharmacy.html" rel="nofollow noopener" target="_blank" style={{ color: 'var(--u-navy)', fontWeight: 600 }}>Costco pharmacy</a>: cash prices are often lower than membership-required competitors. No Costco membership needed to fill a prescription.</span></li>
          </ul>
          <p style={{ fontSize: '.9rem', color: 'var(--u-muted)', marginTop: '1rem' }}>We do not sell you a monthly medication subscription, so we have no incentive to steer you toward a more expensive pharmacy.</p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="u-sec u-bg-cream" id="uninsured-faq">
        <div className="u-container">
          <div className="u-sec-head">
            <span className="u-eyebrow"><span className="u-dot" />Questions & answers</span>
            <h2 className="u-h2">Frequently asked questions</h2>
          </div>
          <div className="u-faq">
            {faqItems.map((item, i) => (
              <details key={i} className="u-faq-item">
                <summary>{item.q}</summary>
                <div className="u-faq-a"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="u-sec u-bg-white">
        <div className="u-container">
          <div className="u-cta-banner">
            <div>
              <h3>See a board-certified MD today. $79 flat.</h3>
              <p>No insurance, no membership, no drug subscription. Same doctor every visit across 44 states.</p>
            </div>
            <div className="u-cta-actions">
              <a href="/book-online" className="u-btn u-btn-primary">Book a $79 visit</a>
              <a href="/insurance" className="u-btn u-btn-outline">Pricing &amp; insurance</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="u-sec u-bg-cream-2">
        <div className="u-container">
          <h3 style={{ margin: '0 0 .5rem', fontFamily: "'Fraunces',Georgia,serif", fontWeight: 500, fontSize: '1.2rem', color: 'var(--u-ink)' }}>Other communities we serve</h3>
          <div className="u-link-cloud">
            <a href="/who-we-serve/truck-drivers">Truck drivers</a>
            <a href="/who-we-serve/gig-workers">Gig workers &amp; freelancers</a>
            <a href="/who-we-serve/hdhp-hsa-holders">HDHP &amp; HSA holders</a>
            <a href="/who-we-serve/early-retirees">Early retirees</a>
            <a href="/who-we-serve">Who we serve hub</a>
          </div>
          <h3 style={{ margin: '1.5rem 0 .5rem', fontFamily: "'Fraunces',Georgia,serif", fontWeight: 500, fontSize: '1.2rem', color: 'var(--u-ink)' }}>More from TeleDirectMD</h3>
          <div className="u-link-cloud">
            <a href="/what-we-treat">What we treat</a>
            <a href="/states-we-serve">States we serve</a>
            <a href="/insurance">Insurance &amp; pricing</a>
            <a href="/faq">FAQs</a>
            <a href="/book-online">Book a visit</a>
          </div>
        </div>
      </section>

      {/* ─── REFERENCES ─── */}
      <section className="u-sec u-bg-white" id="uninsured-references">
        <div className="u-container">
          <h3 style={{ margin: '0 0 .5rem', fontFamily: "'Fraunces',Georgia,serif", fontWeight: 500, fontSize: '1.2rem', color: 'var(--u-ink)' }}>References</h3>
          <ul className="u-ref-list">
            <li><a href="https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/" rel="nofollow noopener" target="_blank">Key facts about the uninsured population, KFF, 2025 update</a></li>
            <li><a href="https://www.cbo.gov/publication/60702" rel="nofollow noopener" target="_blank">Effects of expiring ACA premium tax credits, Congressional Budget Office</a></li>
            <li><a href="https://www.pennmedicine.org/news/news-releases/2019/december/study-finds-telemedicine-visits-cost-far-less-than-office-visits" rel="nofollow noopener" target="_blank">Study finds telemedicine visits cost far less than office visits, Penn Medicine</a></li>
            <li><a href="https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost" rel="nofollow noopener" target="_blank">How much does a telehealth visit cost? GoodRx</a></li>
            <li><a href="https://doctorondemand.com/about-us/cost-insurance/" rel="nofollow noopener" target="_blank">Doctor On Demand cost and insurance page</a></li>
            <li><a href="https://www.thepennyhoarder.com/save-money/telemedicine-without-insurance/" rel="nofollow noopener" target="_blank">8 affordable options for telemedicine without insurance, The Penny Hoarder</a></li>
            <li><a href="https://coveredusa.org/urgent-care-cost-without-insurance/" rel="nofollow noopener" target="_blank">Urgent care visit cost without insurance in 2026, CoveredUSA</a></li>
          </ul>
        </div>
      </section>

      {/* ─── DISCLAIMER ─── */}
      <section className="u-sec u-bg-cream-2" id="uninsured-disclaimer">
        <div className="u-container u-disclaimer">
          <h2>Medical disclaimer</h2>
          <p>This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18 and older who are physically located in one of the 44 states plus DC listed above at the time of the visit. TeleDirectMD does not prescribe controlled substances. If you are experiencing a medical emergency, call 911. If you are experiencing a mental health emergency, call or text 988.</p>
          <p>Pricing listed is the flat self-pay rate for a video visit and applies to both first visits and follow-ups. Medication costs are separate from the visit fee and vary by pharmacy and drug. Insurance is accepted in select states; contact TeleDirectMD to confirm coverage in your state.</p>
        </div>
      </section>
    </div>
  );
}
