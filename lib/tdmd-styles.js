export const tdmdCSS = `
  :root{
    --tdmd-teal:#006b73;
    --tdmd-navy:#003e52;
    --tdmd-accent:#ff5a36;
    --tdmd-bg-soft:#f3fafb;
    --tdmd-border:#dde3e6;
    --tdmd-text:#12323a;
    --tdmd-muted:#4b5f66;
    --tdmd-card:#ffffff;
    --tdmd-shadow:0 8px 20px rgba(0,0,0,0.06);
    --tdmd-radius:18px;
  }

  .tdmd-container{
    max-width:1100px;
    margin:0 auto;
    padding:1.5rem;
    color:var(--tdmd-text);
    font-family:system-ui,-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",sans-serif;
  }
  .tdmd-section{padding:2.5rem 0;}
  .tdmd-section-highlight{background:var(--tdmd-bg-soft);}

  .tdmd-hero{
    background:var(--tdmd-bg-soft);
    padding:3rem 0 2.5rem;
  }
  .tdmd-hero-grid{
    display:grid;
    grid-template-columns:minmax(0,3fr) minmax(0,2fr);
    gap:2rem;
    align-items:flex-start;
  }
  .tdmd-hero-copy h1{
    font-size:2rem;
    margin:0 0 0.75rem;
    letter-spacing:-0.01em;
  }
  .tdmd-hero-sub{
    font-size:1.05rem;
    font-weight:650;
    color:var(--tdmd-navy);
    margin:0 0 1rem;
  }

  .tdmd-toc{margin:0.5rem 0 1rem;padding-left:1.2rem;display:grid;gap:0.25rem;}
  .tdmd-toc a{color:var(--tdmd-navy);font-weight:800;text-decoration:underline;text-underline-offset:2px;}
  .tdmd-toc a:hover{color:var(--tdmd-teal);}
  .tdmd-icd{margin:0.65rem 0 0;color:var(--tdmd-muted);font-size:0.92rem;}

  .tdmd-hero-benefits{
    list-style:none;
    padding:0;
    margin:1rem 0 1.1rem;
    display:grid;
    gap:0.35rem;
  }
  .tdmd-hero-benefits li::before{
    content:"\\2022 ";
    color:var(--tdmd-teal);
    font-weight:800;
  }

  .tdmd-hero-ctas{display:flex;flex-wrap:wrap;gap:0.75rem;}
  .tdmd-btn{
    display:inline-block;
    padding:0.65rem 1.4rem;
    border-radius:999px;
    text-decoration:none;
    font-weight:700;
    font-size:0.95rem;
    text-align:center;
    line-height:1.1;
  }
  .tdmd-btn-primary{background:var(--tdmd-teal);color:#ffffff;}
  .tdmd-btn-outline{border:1px solid var(--tdmd-teal);color:var(--tdmd-teal);background:#ffffff;}

  .tdmd-reviewed{margin:1rem 0 0;font-size:0.92rem;color:var(--tdmd-muted);}
  .tdmd-author-link{
    color:var(--tdmd-navy);
    font-weight:800;
    text-decoration:underline;
    text-underline-offset:2px;
  }
  .tdmd-author-link:hover{color:var(--tdmd-teal);}

  .tdmd-hero-card{
    background:var(--tdmd-card);
    border-radius:var(--tdmd-radius);
    box-shadow:var(--tdmd-shadow);
    padding:1.25rem 1.5rem;
    border:1px solid rgba(0,0,0,0.03);
  }
  .tdmd-hero-card h2{font-size:1.15rem;margin:0 0 0.75rem;}
  .tdmd-hero-card ul{padding-left:1.2rem;margin:0 0 0.75rem;}
  .tdmd-hero-note{font-size:0.9rem;color:var(--tdmd-muted);margin:0;}

  .tdmd-table-wrap{overflow-x:auto;}
  .tdmd-table{
    width:100%;
    border-collapse:collapse;
    margin-top:1rem;
    background:#ffffff;
  }
  .tdmd-table th,.tdmd-table td{
    border:1px solid var(--tdmd-border);
    padding:0.65rem 0.6rem;
    vertical-align:top;
    font-size:0.92rem;
  }
  .tdmd-table th{background:#f5f8fa;font-weight:800;}

  .tdmd-comparison-note{
    margin-top:1rem;
    padding:1rem;
    background:#f8fcfc;
    border-left:4px solid var(--tdmd-teal);
    border-radius:0.5rem;
  }

  .tdmd-cost-note{
    margin-top:1rem;
    padding:1rem;
    background:#fef9f6;
    border-left:4px solid var(--tdmd-accent);
    border-radius:0.5rem;
    font-size:0.95rem;
  }

  .tdmd-decision-flow{display:grid;gap:1.25rem;margin-top:1rem;}
  .tdmd-decision-step{
    border-radius:var(--tdmd-radius);
    padding:1.5rem;
    background:#ffffff;
    box-shadow:var(--tdmd-shadow);
    display:grid;
    grid-template-columns:auto 1fr;
    gap:1.25rem;
    align-items:flex-start;
  }
  .tdmd-decision-step-urgent{border-top:4px solid var(--tdmd-accent);}
  .tdmd-decision-step-check{border-top:4px solid #f0b429;}
  .tdmd-decision-step-good{border-top:4px solid var(--tdmd-teal);}

  .tdmd-decision-number{
    width:2.5rem;height:2.5rem;border-radius:50%;
    background:var(--tdmd-navy);color:#ffffff;
    display:grid;place-items:center;
    font-weight:900;font-size:1.25rem;flex-shrink:0;
  }
  .tdmd-decision-content h3{margin:0 0 0.75rem;font-size:1.1rem;}
  .tdmd-decision-content ul{margin:0.5rem 0;padding-left:1.2rem;}
  .tdmd-decision-action{margin:0.75rem 0 0;font-weight:700;color:var(--tdmd-navy);}
  .tdmd-decision-cta{margin-top:1rem;}

  .tdmd-grid{display:grid;gap:1.5rem;}
  .tdmd-grid-2{grid-template-columns:repeat(2,minmax(0,1fr));}

  .tdmd-card{
    background:#ffffff;border-radius:var(--tdmd-radius);
    padding:1.2rem 1.3rem;
    box-shadow:0 6px 16px rgba(0,0,0,0.04);
    border:1px solid rgba(0,0,0,0.03);
  }
  .tdmd-card h3{margin:0 0 0.75rem;font-size:1.1rem;}
  .tdmd-card-good{border-top:4px solid var(--tdmd-teal);}
  .tdmd-card-alert{border-top:4px solid var(--tdmd-accent);}

  .tdmd-checklist{list-style:none;padding:0;margin:0.6rem 0 0;display:grid;gap:0.55rem;}
  .tdmd-checklist li{position:relative;padding-left:1.85rem;margin:0;line-height:1.35;}
  .tdmd-checklist li::before{
    content:"";position:absolute;left:0;top:0.15rem;
    width:1.2rem;height:1.2rem;background-repeat:no-repeat;background-size:contain;
  }
  .tdmd-checklist--good li::before{
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23006b73' d='M9 16.2 4.8 12 3.4 13.4 9 19 21 7 19.6 5.6z'/%3E%3C/svg%3E");
  }
  .tdmd-checklist--alert li::before{
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ff5a36' d='M8.2 2h7.6L22 8.2v7.6L15.8 22H8.2L2 15.8V8.2L8.2 2z'/%3E%3Cpath fill='%23ffffff' d='M7.6 11.1h8.8v1.8H7.6z'/%3E%3C/svg%3E");
  }

  .tdmd-card-disclaimer{margin-top:0.85rem;font-size:0.92rem;color:#6b2a1c;}
  .tdmd-med-note{margin-top:0.85rem;font-size:0.92rem;color:#3c4b50;}
  .tdmd-footnote p{font-size:0.98rem;color:#2b3a40;line-height:1.6;}

  .tdmd-faq-list{display:grid;gap:0.85rem;margin-top:1rem;}
  .tdmd-faq-item{
    border:1px solid var(--tdmd-border);
    border-radius:0.95rem;background:#ffffff;
    box-shadow:0 6px 16px rgba(0,0,0,0.04);
    overflow:hidden;
  }
  .tdmd-faq-question{
    cursor:pointer;padding:1rem 1rem;
    display:flex;align-items:center;justify-content:space-between;gap:1rem;
    font-size:1rem;font-weight:800;list-style:none;
  }
  .tdmd-faq-question::-webkit-details-marker{display:none;}
  .tdmd-faq-question::after{
    content:"+";
    width:2.25rem;height:2.25rem;border-radius:999px;border:1px solid var(--tdmd-border);
    display:grid;place-items:center;color:var(--tdmd-navy);background:#f7fbfc;
    font-size:1.2rem;line-height:1;flex:0 0 auto;
  }
  details[open] > .tdmd-faq-question::after{content:"-";}
  .tdmd-faq-answer{padding:0 1rem 1rem;color:#2b3a40;font-size:0.96rem;line-height:1.55;}
  .tdmd-faq-answer p{margin:0.5rem 0 0;}

  .tdmd-bottom-cta{
    margin-top:1.5rem;border:1px solid var(--tdmd-border);
    border-radius:var(--tdmd-radius);padding:1.1rem 1.1rem;
    background:linear-gradient(135deg, rgba(0,107,115,0.08), rgba(0,62,82,0.04));
    display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;
  }
  .tdmd-bottom-cta-copy h3{margin:0;font-size:1.15rem;letter-spacing:-0.01em;}
  .tdmd-bottom-cta-copy p{margin:0.35rem 0 0;color:var(--tdmd-muted);max-width:62ch;font-size:0.95rem;line-height:1.45;}
  .tdmd-bottom-cta-actions{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;}

  .tdmd-related-grid{
    margin-top:1rem;display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:0.85rem;
  }
  .tdmd-related-card{
    text-decoration:none;border:1px solid var(--tdmd-border);
    border-radius:0.95rem;background:#ffffff;
    box-shadow:0 6px 16px rgba(0,0,0,0.04);
    padding:0.95rem;display:grid;gap:0.35rem;color:var(--tdmd-text);
  }
  .tdmd-related-title{font-weight:900;color:var(--tdmd-navy);letter-spacing:-0.01em;}
  .tdmd-related-desc{color:var(--tdmd-muted);font-size:0.94rem;line-height:1.35;}
  .tdmd-related-card:focus,.tdmd-related-card:hover{outline:none;border-color:rgba(0,107,115,0.55);}
  .tdmd-related-cta{margin-top:1rem;display:flex;}

  .tdmd-inline-links{
    margin-top:1.25rem;
    padding:1rem 1.1rem;
    border:1px solid var(--tdmd-border);
    border-radius:var(--tdmd-radius);
    background:#fbfdfd;
  }
  .tdmd-inline-links h3{
    margin:0 0 0.65rem;
    font-size:1.05rem;
  }
  .tdmd-link-cloud{
    display:flex;
    flex-wrap:wrap;
    gap:0.55rem 0.8rem;
    margin:0;
  }
  .tdmd-link-cloud a{
    color:var(--tdmd-navy);
    font-weight:800;
    text-decoration:underline;
    text-underline-offset:2px;
  }
  .tdmd-link-cloud a:hover{color:var(--tdmd-teal);}

  .tdmd-city-block{
    margin-top:1.25rem;
    padding:1rem 1.1rem;
    border-left:4px solid var(--tdmd-teal);
    background:#f8fcfc;
    border-radius:0.75rem;
  }
  .tdmd-city-block h3{
    margin:0 0 0.55rem;
    font-size:1.05rem;
  }
  .tdmd-city-block p{
    margin:0;
    line-height:1.6;
  }

  .tdmd-compare-cards{margin-top:1rem;}

  .tdmd-ref-list{margin:0.75rem 0 0;padding-left:1.2rem;display:grid;gap:0.5rem;}
  .tdmd-ref-list a{color:var(--tdmd-navy);font-weight:800;text-decoration:underline;text-underline-offset:2px;}
  .tdmd-ref-list a:hover{color:var(--tdmd-teal);}

  .tdmd-price-grid{
    display:grid;
    grid-template-columns:minmax(0,1.05fr) minmax(0,1.6fr);
    gap:1.25rem;margin-top:1.25rem;
  }
  .tdmd-price-card,.tdmd-price-chart{
    background:#ffffff;border-radius:var(--tdmd-radius);
    box-shadow:var(--tdmd-shadow);
    padding:1.25rem 1.35rem;border:1px solid rgba(0,0,0,0.03);
  }
  .tdmd-price-card{border-top:4px solid var(--tdmd-teal);}
  .tdmd-price-chart{border-top:4px solid var(--tdmd-accent);}
  .tdmd-price-big{font-size:2.75rem;font-weight:950;letter-spacing:-0.02em;color:var(--tdmd-teal);margin:0.4rem 0 0.25rem;}
  .tdmd-price-sub{margin:0 0 0.9rem;color:var(--tdmd-muted);font-weight:650;}
  .tdmd-price-includes{margin:0;padding-left:1.2rem;display:grid;gap:0.35rem;}
  .tdmd-price-caption{margin:0.35rem 0 1rem;color:var(--tdmd-muted);font-size:0.95rem;line-height:1.45;}
  .tdmd-bar-row{display:grid;gap:0.45rem;margin:0.9rem 0;}
  .tdmd-bar-label{display:flex;justify-content:space-between;gap:0.75rem;font-weight:800;color:var(--tdmd-navy);}
  .tdmd-bar-track{width:100%;height:14px;border-radius:999px;background:#eef3f5;overflow:hidden;border:1px solid rgba(0,0,0,0.04);}
  .tdmd-bar-fill{height:100%;width:calc(var(--w) * 1%);border-radius:999px;background:linear-gradient(90deg, rgba(0,107,115,0.85), rgba(0,62,82,0.55));}
  .tdmd-bar-fill-tdmd{background:linear-gradient(90deg, rgba(0,107,115,0.95), rgba(0,107,115,0.55));}
  .tdmd-price-footnote{margin:0.85rem 0 0;color:var(--tdmd-muted);font-size:0.93rem;line-height:1.45;}

  @media (max-width:900px){
    .tdmd-related-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
    .tdmd-price-grid{grid-template-columns:minmax(0,1fr);}
  }
  @media (max-width:768px){
    .tdmd-hero-grid,.tdmd-grid-2{grid-template-columns:minmax(0,1fr);}
    .tdmd-container{padding:1.25rem;}
    .tdmd-hero{padding:2.25rem 0 1.75rem;}
    .tdmd-hero-copy h1{font-size:1.75rem;}
    .tdmd-decision-step{grid-template-columns:minmax(0,1fr);}
    .tdmd-decision-number{justify-self:start;}
  }
  @media (max-width:520px){
    .tdmd-related-grid{grid-template-columns:minmax(0,1fr);}
  }

  .tdmd-breadcrumbs{padding:0.75rem 0;font-size:0.88rem;color:var(--tdmd-muted);}
  .tdmd-breadcrumbs a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .tdmd-breadcrumbs a:hover{color:var(--tdmd-teal);}
  .tdmd-breadcrumbs .tdmd-bc-sep{margin:0 0.4rem;color:var(--tdmd-border);}

  .tdmd-other-states-grid{display:flex;flex-wrap:wrap;gap:0.5rem 0.65rem;margin:1rem 0;}
  .tdmd-other-state-link{display:inline-block;padding:0.4rem 0.85rem;border-radius:999px;border:1px solid var(--tdmd-border);background:var(--tdmd-card);color:var(--tdmd-navy);font-weight:700;font-size:0.88rem;text-decoration:none;transition:border-color 0.15s,background 0.15s;}
  .tdmd-other-state-link:hover,.tdmd-other-state-link:focus{border-color:var(--tdmd-teal);background:var(--tdmd-bg-soft);}

  /* ========== SITE HEADER ========== */
  .tdmd-site-header{background:#ffffff;border-bottom:1px solid #eef2f4;position:relative;z-index:1000;}
  .tdmd-header-inner{max-width:1200px;margin:0 auto;padding:0.75rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;}
  .tdmd-header-logo{display:flex;align-items:center;flex-shrink:0;}
  .tdmd-header-logo img{height:60px;width:auto;}
  .tdmd-header-nav-desktop{display:flex;align-items:center;gap:1.5rem;}
  .tdmd-header-nav-link{color:var(--tdmd-navy);font-weight:600;font-size:0.95rem;text-decoration:none;white-space:nowrap;transition:color 0.15s;}
  .tdmd-header-nav-link:hover{color:var(--tdmd-teal);}
  .tdmd-header-cta-desktop{display:inline-flex;align-items:center;justify-content:center;padding:0.7rem 2rem;border-radius:999px;background:var(--tdmd-navy);color:#ffffff;font-weight:700;font-size:0.95rem;text-decoration:none;white-space:nowrap;transition:background 0.15s;flex-shrink:0;}
  .tdmd-header-cta-desktop:hover{background:var(--tdmd-teal);}
  .tdmd-hamburger{display:none;background:none;border:none;cursor:pointer;padding:0.5rem;color:var(--tdmd-navy);}

  /* Mobile header */
  @media(max-width:900px){
    .tdmd-header-nav-desktop,.tdmd-header-cta-desktop{display:none;}
    .tdmd-hamburger{display:flex;align-items:center;justify-content:center;}
  }

  /* Mobile overlay */
  .tdmd-mobile-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.25);}
  .tdmd-mobile-menu{position:absolute;inset:0;background:#ffffff;display:flex;flex-direction:column;padding:0.75rem 1.5rem;}
  .tdmd-mobile-menu-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem;}
  .tdmd-mobile-menu-top .tdmd-header-logo img{height:55px;}
  .tdmd-mobile-menu-top .tdmd-hamburger{display:flex;}
  .tdmd-mobile-nav{display:flex;flex-direction:column;gap:0.75rem;flex:1;justify-content:center;}
  .tdmd-mobile-nav-link{color:var(--tdmd-navy);font-size:1.75rem;font-weight:600;text-decoration:none;padding:0.25rem 0;}
  .tdmd-mobile-cta{display:flex;align-items:center;justify-content:center;padding:1rem;border-radius:999px;background:var(--tdmd-navy);color:#ffffff;font-weight:700;font-size:1.1rem;text-decoration:none;margin-top:auto;margin-bottom:2rem;max-width:360px;}

  /* ========== SITE FOOTER ========== */
  .tdmd-site-footer{background:#0e3d4d;color:#ffffff;margin-top:2.5rem;}
  .tdmd-footer-inner{max-width:1200px;margin:0 auto;padding:3rem 1.5rem 2rem;display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:2.5rem;}
  .tdmd-footer-brand{display:flex;flex-direction:column;gap:0.75rem;}
  .tdmd-footer-logo img{width:130px;height:auto;border-radius:8px;}
  .tdmd-footer-desc{font-size:0.92rem;line-height:1.55;color:rgba(255,255,255,0.75);margin:0;}
  .tdmd-footer-cta{display:inline-flex;align-items:center;gap:0.3rem;padding:0.65rem 1.6rem;border-radius:999px;background:var(--tdmd-accent);color:#ffffff;font-weight:700;font-size:0.95rem;text-decoration:none;align-self:flex-start;transition:background 0.15s;}
  .tdmd-footer-cta:hover{background:#e8492a;}
  .tdmd-footer-col{display:flex;flex-direction:column;gap:0.6rem;}
  .tdmd-footer-heading{font-size:0.78rem;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.45);margin:0 0 0.25rem;}
  .tdmd-footer-col a{color:rgba(255,255,255,0.85);text-decoration:none;font-size:0.93rem;transition:color 0.15s;}
  .tdmd-footer-col a:hover{color:#ffffff;}
  .tdmd-footer-divider{height:1px;background:rgba(255,255,255,0.12);margin:0.35rem 0;}

  /* Footer bottom bar */
  .tdmd-footer-bottom-bar{max-width:1200px;margin:0 auto;padding:1.25rem 1.5rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
  .tdmd-footer-badges{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;}
  .tdmd-trust-badge{display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border-radius:8px;background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.7);font-size:0.85rem;font-weight:600;text-decoration:none;border:1px solid rgba(255,255,255,0.08);}
  .tdmd-trust-badge:hover{background:rgba(255,255,255,0.1);}
  .tdmd-footer-social{display:flex;align-items:center;gap:0.6rem;}
  .tdmd-footer-social a{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.6);transition:color 0.15s,border-color 0.15s;text-decoration:none;}
  .tdmd-footer-social a:hover{color:#ffffff;border-color:rgba(255,255,255,0.4);}

  /* Copyright */
  .tdmd-footer-copyright{max-width:1200px;margin:0 auto;padding:1rem 1.5rem;border-top:1px solid rgba(255,255,255,0.08);background:rgba(0,0,0,0.12);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;font-size:0.82rem;color:rgba(255,255,255,0.45);}
  .tdmd-footer-legal-links{display:flex;align-items:center;flex-wrap:wrap;gap:0.25rem;}
  .tdmd-footer-legal-links a{color:rgba(255,255,255,0.45);text-decoration:none;transition:color 0.15s;}
  .tdmd-footer-legal-links a:hover{color:rgba(255,255,255,0.8);}
  .tdmd-footer-dot{color:rgba(255,255,255,0.25);}

  /* Mobile sticky bottom bar */
  .tdmd-mobile-sticky-bar{display:none;}
  @media(max-width:768px){
    .tdmd-mobile-sticky-bar{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:999;background:#ffffff;border-top:1px solid #eef2f4;padding:0.65rem 1rem;align-items:center;justify-content:space-between;box-shadow:0 -2px 12px rgba(0,0,0,0.08);}
    .tdmd-sticky-bar-text{display:flex;flex-direction:column;line-height:1.25;}
    .tdmd-sticky-bar-text strong{font-size:1.05rem;color:var(--tdmd-navy);}
    .tdmd-sticky-bar-text span{font-size:0.82rem;color:var(--tdmd-muted);}
    .tdmd-sticky-bar-cta{padding:0.65rem 1.5rem;border-radius:999px;background:var(--tdmd-accent);color:#ffffff;font-weight:700;font-size:0.95rem;text-decoration:none;white-space:nowrap;}
    /* Add bottom padding to body so sticky bar doesn't cover content */
    body{padding-bottom:65px;}
  }

  /* Footer responsive */
  @media(max-width:900px){
    .tdmd-footer-inner{grid-template-columns:1fr 1fr;gap:2rem;}
    .tdmd-footer-brand{grid-column:1/-1;}
  }
  @media(max-width:520px){
    .tdmd-footer-inner{grid-template-columns:1fr;gap:1.75rem;}
    .tdmd-footer-bottom-bar{flex-direction:column;align-items:flex-start;}
    .tdmd-footer-copyright{flex-direction:column;align-items:flex-start;}
  }

  /* ========== REVIEWS PAGE ========== */
  .tdmd-reviews-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .tdmd-reviews-hero h1{font-size:2rem;margin:0 0 0.75rem;letter-spacing:-0.01em;}
  .tdmd-reviews-hero-badge{display:inline-block;padding:0.35rem 0.85rem;border-radius:999px;background:var(--tdmd-teal);color:#fff;font-size:0.82rem;font-weight:700;letter-spacing:0.03em;margin-bottom:0.75rem;}
  .tdmd-reviews-hero-sub{font-size:1.05rem;color:var(--tdmd-muted);margin:0 0 1.25rem;max-width:60ch;line-height:1.5;}

  .tdmd-reviews-platforms{display:flex;flex-wrap:wrap;gap:0.65rem;margin-top:0.5rem;}
  .tdmd-reviews-platform-link{display:inline-flex;align-items:center;gap:0.4rem;padding:0.5rem 1rem;border-radius:999px;border:1px solid var(--tdmd-border);background:var(--tdmd-card);color:var(--tdmd-navy);font-weight:700;font-size:0.9rem;text-decoration:none;transition:border-color 0.15s,box-shadow 0.15s;}
  .tdmd-reviews-platform-link:hover{border-color:var(--tdmd-teal);box-shadow:0 4px 12px rgba(0,107,115,0.1);}

  .tdmd-reviews-featured{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.25rem;margin-top:1.25rem;}
  .tdmd-review-card{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1.25rem 1.35rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);}
  .tdmd-review-card-featured{border-top:4px solid var(--tdmd-teal);}
  .tdmd-review-card-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;margin-bottom:0.65rem;}
  .tdmd-review-card-name{font-weight:800;color:var(--tdmd-navy);font-size:0.98rem;}
  .tdmd-review-source{display:inline-block;padding:0.2rem 0.6rem;border-radius:999px;font-size:0.78rem;font-weight:700;letter-spacing:0.02em;background:#eef5f6;color:var(--tdmd-teal);}
  .tdmd-review-stars{color:#f0b429;font-size:1rem;letter-spacing:0.05em;margin-bottom:0.5rem;}
  .tdmd-review-card-text{font-size:0.94rem;line-height:1.55;color:var(--tdmd-text);margin:0;}

  .tdmd-reviews-category{margin-bottom:2.5rem;}
  .tdmd-reviews-category-header{font-size:1.2rem;color:var(--tdmd-navy);margin:0 0 0.85rem;letter-spacing:-0.01em;}
  .tdmd-reviews-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;}

  @media(max-width:768px){
    .tdmd-reviews-hero{padding:2.25rem 0 1.75rem;}
    .tdmd-reviews-hero h1{font-size:1.75rem;}
    .tdmd-reviews-featured{grid-template-columns:minmax(0,1fr);}
    .tdmd-reviews-grid{grid-template-columns:minmax(0,1fr);}
  }

  /* ========== MEDIA MENTIONS PAGE ========== */
  .tdmd-media-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .tdmd-media-hero h1{font-size:2rem;margin:0 0 0.75rem;letter-spacing:-0.01em;}
  .tdmd-media-hero-label{font-size:0.78rem;font-weight:700;letter-spacing:0.14em;color:var(--tdmd-muted);margin:0 0 0.5rem;text-transform:uppercase;}
  .tdmd-media-hero-sub{font-size:1.02rem;color:var(--tdmd-muted);margin:0;max-width:70ch;line-height:1.55;}

  .tdmd-media-logos{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:0.75rem 1.5rem;margin:1.5rem 0;padding:1.25rem 1rem;background:var(--tdmd-card);border-radius:var(--tdmd-radius);box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);}
  .tdmd-media-logo-text{font-size:0.88rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:var(--tdmd-muted);opacity:0.7;white-space:nowrap;transition:opacity 0.15s;}
  .tdmd-media-logo-text:hover{opacity:1;}

  .tdmd-media-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;margin:1.5rem 0;}
  .tdmd-media-stat{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1.1rem 1rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);text-align:center;}
  .tdmd-media-stat-number{font-size:1.75rem;font-weight:950;color:var(--tdmd-teal);letter-spacing:-0.02em;}
  .tdmd-media-stat-label{font-size:0.85rem;color:var(--tdmd-muted);margin-top:0.15rem;}

  .tdmd-media-featured{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.25rem;margin:1.25rem 0;}
  .tdmd-media-featured-card{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1.35rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);border-top:4px solid var(--tdmd-teal);display:flex;flex-direction:column;gap:0.65rem;}
  .tdmd-media-featured-card h3{font-size:1.05rem;margin:0;line-height:1.35;color:var(--tdmd-navy);}
  .tdmd-media-featured-card-date{font-size:0.85rem;color:var(--tdmd-muted);}
  .tdmd-media-featured-card a{color:var(--tdmd-teal);font-weight:700;text-decoration:none;font-size:0.93rem;margin-top:auto;}
  .tdmd-media-featured-card a:hover{text-decoration:underline;}

  .tdmd-media-pub-badge{display:inline-block;padding:0.2rem 0.65rem;border-radius:999px;font-size:0.78rem;font-weight:700;letter-spacing:0.02em;background:#eef5f6;color:var(--tdmd-teal);white-space:nowrap;}

  .tdmd-media-timeline{display:grid;gap:0;margin:1.25rem 0;}
  .tdmd-media-timeline-item{display:grid;grid-template-columns:auto 1fr auto;gap:0.85rem;align-items:center;padding:0.85rem 0;border-bottom:1px solid var(--tdmd-border);}
  .tdmd-media-timeline-item:last-child{border-bottom:none;}
  .tdmd-media-timeline-date{font-size:0.84rem;color:var(--tdmd-muted);white-space:nowrap;min-width:120px;}
  .tdmd-media-timeline-title{font-weight:700;color:var(--tdmd-navy);font-size:0.95rem;text-decoration:none;line-height:1.35;}
  .tdmd-media-timeline-title:hover{color:var(--tdmd-teal);}
  .tdmd-media-timeline-arrow{color:var(--tdmd-teal);font-weight:700;font-size:1.1rem;text-decoration:none;}

  .tdmd-media-press-cta{margin:2rem 0;padding:1.5rem;background:var(--tdmd-bg-soft);border-radius:var(--tdmd-radius);border:1px solid var(--tdmd-border);text-align:center;}
  .tdmd-media-press-cta h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
  .tdmd-media-press-cta p{margin:0 0 0.85rem;color:var(--tdmd-muted);font-size:0.95rem;line-height:1.5;max-width:60ch;margin-left:auto;margin-right:auto;}
  .tdmd-media-press-cta a.tdmd-btn{margin:0 0.35rem;}

  @media(max-width:900px){
    .tdmd-media-featured{grid-template-columns:minmax(0,1fr);}
    .tdmd-media-stats{grid-template-columns:repeat(2,minmax(0,1fr));}
  }
  @media(max-width:768px){
    .tdmd-media-hero{padding:2.25rem 0 1.75rem;}
    .tdmd-media-hero h1{font-size:1.75rem;}
    .tdmd-media-timeline-item{grid-template-columns:1fr auto;gap:0.5rem;}
    .tdmd-media-timeline-date{grid-column:1/-1;min-width:0;}
  }
  @media(max-width:520px){
    .tdmd-media-stats{grid-template-columns:repeat(2,minmax(0,1fr));}
    .tdmd-media-logos{gap:0.5rem 1rem;}
  }

  /* ========== WHAT WE TREAT PAGE ========== */
  .tdmd-wt-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .tdmd-wt-hero h1{font-size:2rem;margin:0.5rem 0 0.75rem;letter-spacing:-0.01em;}
  .tdmd-wt-hero-badge{display:inline-block;padding:0.35rem 0.85rem;border-radius:999px;background:rgba(0,107,115,0.1);color:var(--tdmd-teal);font-weight:700;font-size:0.85rem;letter-spacing:0.02em;}
  .tdmd-wt-hero-subtitle{font-size:1.05rem;font-weight:650;color:var(--tdmd-navy);margin:0 0 1.25rem;max-width:56ch;}
  .tdmd-wt-badges{display:flex;flex-wrap:wrap;gap:0.5rem;}
  .tdmd-wt-badge{display:inline-block;padding:0.4rem 0.9rem;border-radius:999px;border:1px solid var(--tdmd-border);background:var(--tdmd-card);font-weight:700;font-size:0.88rem;color:var(--tdmd-navy);}

  .tdmd-wt-trust{border-bottom:1px solid var(--tdmd-border);padding:1.25rem 0;}
  .tdmd-wt-trust-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem;}
  .tdmd-wt-trust-item{display:flex;flex-direction:column;gap:0.15rem;}
  .tdmd-wt-trust-item strong{font-size:0.95rem;color:var(--tdmd-navy);}
  .tdmd-wt-trust-item span{font-size:0.88rem;color:var(--tdmd-muted);}

  .tdmd-wt-category{margin-bottom:2.5rem;}
  .tdmd-wt-category-header{display:flex;align-items:flex-start;gap:0.85rem;margin-bottom:1rem;}
  .tdmd-wt-category-icon{font-size:1.5rem;flex-shrink:0;margin-top:0.1rem;}
  .tdmd-wt-category-header h2{font-size:1.25rem;margin:0 0 0.25rem;}
  .tdmd-wt-category-header p{margin:0;color:var(--tdmd-muted);font-size:0.95rem;}

  .tdmd-wt-conditions-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0.75rem;}
  .tdmd-wt-condition-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:0.95rem;padding:1rem 1.1rem;display:flex;align-items:center;justify-content:space-between;gap:0.75rem;box-shadow:0 4px 12px rgba(0,0,0,0.03);transition:border-color 0.15s,box-shadow 0.15s;}
  .tdmd-wt-condition-card:hover{border-color:rgba(0,107,115,0.4);box-shadow:0 6px 16px rgba(0,107,115,0.08);}
  .tdmd-wt-condition-name{font-weight:700;color:var(--tdmd-navy);font-size:0.95rem;}
  .tdmd-wt-condition-actions{display:flex;align-items:center;gap:0.65rem;flex-shrink:0;}
  .tdmd-wt-card-btn{padding:0.4rem 0.9rem;font-size:0.82rem;}
  .tdmd-wt-learn-more{color:var(--tdmd-teal);font-weight:700;font-size:0.85rem;text-decoration:none;white-space:nowrap;}
  .tdmd-wt-learn-more:hover{text-decoration:underline;}

  @media(max-width:900px){
    .tdmd-wt-conditions-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
    .tdmd-wt-trust-row{grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;}
  }
  @media(max-width:600px){
    .tdmd-wt-conditions-grid{grid-template-columns:minmax(0,1fr);}
    .tdmd-wt-trust-row{grid-template-columns:minmax(0,1fr);gap:0.85rem;}
    .tdmd-wt-hero h1{font-size:1.65rem;}
  }

  /* ========== FAQ PAGE ========== */
  .tdmd-faq-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .tdmd-faq-hero h1{font-size:2rem;margin:0 0 0.75rem;letter-spacing:-0.01em;}
  .tdmd-faq-hero-subtitle{font-size:1.05rem;font-weight:650;color:var(--tdmd-navy);margin:0;max-width:60ch;}

  .tdmd-faq-section-block{margin-bottom:2.25rem;}
  .tdmd-faq-section-header{margin-bottom:1rem;}
  .tdmd-faq-section-header h2{font-size:1.2rem;margin:0 0 0.3rem;color:var(--tdmd-navy);}
  .tdmd-faq-section-header p{margin:0;color:var(--tdmd-muted);font-size:0.93rem;}

  @media(max-width:768px){
    .tdmd-faq-hero{padding:2.25rem 0 1.75rem;}
    .tdmd-faq-hero h1{font-size:1.65rem;}
  }

  /* ========== US MAP COMPONENT ========== */
  .tdmd-us-map{position:relative;}
  .tdmd-us-map svg{display:block;}
  .tdmd-us-map-legend{display:flex;gap:1.25rem;margin:0 0 0.75rem;font-size:0.88rem;font-weight:700;color:var(--tdmd-muted);}
  .tdmd-us-map-legend-item{display:flex;align-items:center;gap:0.4rem;}
  .tdmd-us-map-legend-item::before{content:"";display:inline-block;width:14px;height:14px;border-radius:3px;}
  .tdmd-us-map-legend-licensed::before{background:rgba(0,107,115,0.85);}
  .tdmd-us-map-legend-not::before{background:#e0e7ea;}
  .tdmd-us-map-tooltip{position:absolute;pointer-events:none;background:var(--tdmd-navy);color:#ffffff;font-size:0.82rem;font-weight:700;padding:0.3rem 0.65rem;border-radius:6px;white-space:nowrap;transform:translate(-50%,-100%);z-index:10;}

  /* ========== BOOK ONLINE PAGE ========== */
  .tdmd-book-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .tdmd-book-label{display:inline-block;font-size:0.75rem;font-weight:800;letter-spacing:0.12em;color:var(--tdmd-muted);background:rgba(0,107,115,0.1);padding:0.3rem 0.85rem;border-radius:999px;margin:0 0 1rem;}
  .tdmd-book-hero h1{font-size:2rem;margin:0 0 0.75rem;letter-spacing:-0.01em;max-width:700px;}
  .tdmd-book-subtitle{font-size:1.05rem;color:var(--tdmd-muted);max-width:680px;line-height:1.55;margin:0;}

  .tdmd-book-layout{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:2.5rem;align-items:flex-start;}
  .tdmd-book-map-wrap{min-width:0;}
  .tdmd-book-form{background:var(--tdmd-card);border-radius:var(--tdmd-radius);box-shadow:var(--tdmd-shadow);padding:1.5rem;border:1px solid rgba(0,0,0,0.03);}
  .tdmd-book-form h2{font-size:1.15rem;margin:0 0 1rem;}

  .tdmd-book-dropdown-label{display:block;font-size:0.88rem;font-weight:700;color:var(--tdmd-muted);margin:0 0 0.35rem;}
  .tdmd-book-dropdown{display:block;width:100%;padding:0.7rem 1rem;border-radius:0.65rem;border:1px solid var(--tdmd-border);font-size:0.95rem;font-weight:600;color:var(--tdmd-text);background:var(--tdmd-card);appearance:auto;cursor:pointer;margin:0 0 1rem;}
  .tdmd-book-dropdown:focus{outline:2px solid var(--tdmd-teal);outline-offset:1px;}

  .tdmd-book-checkbox{display:flex;align-items:flex-start;gap:0.65rem;margin:0 0 1.25rem;font-size:0.92rem;line-height:1.4;color:var(--tdmd-text);cursor:pointer;}
  .tdmd-book-checkbox input[type="checkbox"]{margin-top:0.2rem;width:18px;height:18px;accent-color:var(--tdmd-teal);flex-shrink:0;}

  .tdmd-book-cta-btn{display:block;width:100%;padding:0.8rem;border:none;border-radius:999px;background:var(--tdmd-teal);color:#ffffff;font-size:1rem;font-weight:700;cursor:pointer;text-align:center;transition:background 0.15s,opacity 0.15s;}
  .tdmd-book-cta-btn:hover{background:#005a62;}
  .tdmd-book-cta-btn-disabled{opacity:0.45;cursor:not-allowed;}
  .tdmd-book-cta-btn-disabled:hover{background:var(--tdmd-teal);}

  .tdmd-book-fine-print{font-size:0.85rem;color:var(--tdmd-muted);margin:1rem 0 0;line-height:1.45;}

  .tdmd-book-media-logos{display:flex;flex-wrap:wrap;gap:1.5rem 2.5rem;justify-content:center;align-items:center;}
  .tdmd-book-media-logos span{font-size:1.15rem;font-weight:800;color:var(--tdmd-border);letter-spacing:0.03em;}

  .tdmd-book-trust-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.25rem;}
  .tdmd-book-trust-item{text-align:center;padding:1.25rem 1rem;}
  .tdmd-book-trust-icon{font-size:1.75rem;font-weight:950;color:var(--tdmd-teal);margin:0 0 0.5rem;letter-spacing:-0.02em;}
  .tdmd-book-trust-item h3{font-size:1rem;margin:0 0 0.35rem;}
  .tdmd-book-trust-item p{font-size:0.9rem;color:var(--tdmd-muted);margin:0;line-height:1.4;}

  @media(max-width:768px){
    .tdmd-book-layout{grid-template-columns:minmax(0,1fr);}
    .tdmd-book-hero h1{font-size:1.65rem;}
    .tdmd-book-trust-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;}
  }
  @media(max-width:520px){
    .tdmd-book-trust-grid{grid-template-columns:minmax(0,1fr);}
  }

  /* ========== STATES WE SERVE PAGE ========== */
  .tdmd-states-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .tdmd-states-badge{display:inline-block;font-size:0.75rem;font-weight:800;letter-spacing:0.12em;color:var(--tdmd-teal);background:rgba(0,107,115,0.1);padding:0.3rem 0.85rem;border-radius:999px;margin:0 0 1rem;}
  .tdmd-states-hero h1{font-size:2.25rem;margin:0 0 0.75rem;letter-spacing:-0.01em;}
  .tdmd-states-hero-sub{font-size:1.05rem;color:var(--tdmd-muted);max-width:700px;line-height:1.55;margin:0 0 1.5rem;}

  .tdmd-states-stats{display:flex;flex-wrap:wrap;gap:1rem;margin:0 0 1.5rem;}
  .tdmd-states-stat{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:0.85rem 1.15rem;box-shadow:var(--tdmd-shadow);border:1px solid rgba(0,0,0,0.03);text-align:center;min-width:120px;flex:1;max-width:180px;}
  .tdmd-states-stat-number{font-size:1.5rem;font-weight:950;color:var(--tdmd-teal);letter-spacing:-0.02em;}
  .tdmd-states-stat-label{font-size:0.82rem;color:var(--tdmd-muted);margin-top:0.1rem;}

  .tdmd-states-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;margin-top:1.25rem;}
  .tdmd-states-card{background:var(--tdmd-card);border-radius:var(--tdmd-radius);padding:1.15rem 1.25rem;box-shadow:0 6px 16px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.03);transition:border-color 0.2s,box-shadow 0.2s;}
  .tdmd-states-card:hover{border-color:rgba(0,107,115,0.3);box-shadow:0 8px 20px rgba(0,107,115,0.08);}
  .tdmd-states-card-highlight{border-color:var(--tdmd-teal) !important;box-shadow:0 0 0 3px rgba(0,107,115,0.15) !important;}
  .tdmd-states-card-header{display:flex;align-items:center;gap:0.75rem;margin:0 0 0.6rem;}
  .tdmd-states-card-abbr{display:inline-flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border-radius:8px;background:var(--tdmd-bg-soft);color:var(--tdmd-teal);font-weight:900;font-size:0.85rem;flex-shrink:0;}
  .tdmd-states-card-header h3{margin:0;font-size:1.05rem;}
  .tdmd-states-card-header h3 a{color:var(--tdmd-navy);text-decoration:none;}
  .tdmd-states-card-header h3 a:hover{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;}
  .tdmd-states-card-conditions{display:flex;flex-wrap:wrap;gap:0.35rem;}
  .tdmd-states-card-conditions a{display:inline-block;padding:0.25rem 0.6rem;border-radius:999px;border:1px solid var(--tdmd-border);font-size:0.78rem;font-weight:600;color:var(--tdmd-muted);text-decoration:none;transition:border-color 0.15s,color 0.15s;}
  .tdmd-states-card-conditions a:hover{border-color:var(--tdmd-teal);color:var(--tdmd-teal);}

  .tdmd-emergency-banner{background:#fef2f0;border-top:3px solid var(--tdmd-accent);border-bottom:1px solid rgba(255,90,54,0.15);padding:0.85rem 0;text-align:center;font-size:0.92rem;color:#6b2a1c;}

  @media(max-width:768px){
    .tdmd-states-hero h1{font-size:1.75rem;}
    .tdmd-states-grid{grid-template-columns:minmax(0,1fr);}
    .tdmd-states-stats{gap:0.75rem;}
    .tdmd-states-stat{min-width:0;padding:0.65rem 0.85rem;}
  }
`;
