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

  /* ===== Dark Mode: system preference ===== */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --tdmd-teal:#2bc4cf;
      --tdmd-navy:#a0d8e8;
      --tdmd-accent:#ff7a5c;
      --tdmd-bg-soft:#0f1f24;
      --tdmd-border:#1e3340;
      --tdmd-text:#e2edf0;
      --tdmd-muted:#8fa8b2;
      --tdmd-card:#122028;
      --tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);
      color-scheme: dark;
    }
  }
  /* ===== Dark Mode: explicit toggle ===== */
  :root[data-theme="dark"] {
    --tdmd-teal:#2bc4cf;
    --tdmd-navy:#a0d8e8;
    --tdmd-accent:#ff7a5c;
    --tdmd-bg-soft:#0f1f24;
    --tdmd-border:#1e3340;
    --tdmd-text:#e2edf0;
    --tdmd-muted:#8fa8b2;
    --tdmd-card:#122028;
    --tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);
    color-scheme: dark;
  }
  :root[data-theme="light"] {
    color-scheme: light;
  }

  /* Dark mode body background */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) body { background:#0a171c; }
  }
  :root[data-theme="dark"] body { background:#0a171c; }

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
  .tdmd-btn-outline{border:1px solid var(--tdmd-teal);color:var(--tdmd-teal);background:var(--tdmd-card);}

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
  .tdmd-table th{background:var(--tdmd-bg-soft);font-weight:800;}

  .tdmd-comparison-note{
    margin-top:1rem;
    padding:1rem;
    background:var(--tdmd-bg-soft);
    border-left:4px solid var(--tdmd-teal);
    border-radius:0.5rem;
  }

  .tdmd-cost-note{
    margin-top:1rem;
    padding:1rem;
    background:var(--tdmd-bg-soft);
    border-left:4px solid var(--tdmd-accent);
    border-radius:0.5rem;
    font-size:0.95rem;
  }

  .tdmd-decision-flow{display:grid;gap:1.25rem;margin-top:1rem;}
  .tdmd-decision-step{
    border-radius:var(--tdmd-radius);
    padding:1.5rem;
    background:var(--tdmd-card);
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
    background:var(--tdmd-card);border-radius:var(--tdmd-radius);
    padding:1.2rem 1.3rem;
    box-shadow:var(--tdmd-shadow);
    border:1px solid var(--tdmd-border);
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

  .tdmd-card-disclaimer{margin-top:0.85rem;font-size:0.92rem;color:var(--tdmd-accent);}
  .tdmd-med-note{margin-top:0.85rem;font-size:0.92rem;color:var(--tdmd-muted);}
  .tdmd-footnote p{font-size:0.98rem;color:var(--tdmd-text);line-height:1.6;}

  .tdmd-faq-list{display:grid;gap:0.85rem;margin-top:1rem;}
  .tdmd-faq-item{
    border:1px solid var(--tdmd-border);
    border-radius:0.95rem;background:var(--tdmd-card);
    box-shadow:var(--tdmd-shadow);
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
    display:grid;place-items:center;color:var(--tdmd-navy);background:var(--tdmd-bg-soft);
    font-size:1.2rem;line-height:1;flex:0 0 auto;
  }
  details[open] > .tdmd-faq-question::after{content:"-";}
  .tdmd-faq-answer{padding:0 1rem 1rem;color:var(--tdmd-text);font-size:0.96rem;line-height:1.55;}
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
    border-radius:0.95rem;background:var(--tdmd-card);
    box-shadow:var(--tdmd-shadow);
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
    background:var(--tdmd-card);
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
    background:var(--tdmd-bg-soft);
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
    background:var(--tdmd-card);border-radius:var(--tdmd-radius);
    box-shadow:var(--tdmd-shadow);
    padding:1.25rem 1.35rem;border:1px solid var(--tdmd-border);
  }
  .tdmd-price-card{border-top:4px solid var(--tdmd-teal);}
  .tdmd-price-chart{border-top:4px solid var(--tdmd-accent);}
  .tdmd-price-big{font-size:2.75rem;font-weight:950;letter-spacing:-0.02em;color:var(--tdmd-teal);margin:0.4rem 0 0.25rem;}
  .tdmd-price-sub{margin:0 0 0.9rem;color:var(--tdmd-muted);font-weight:650;}
  .tdmd-price-includes{margin:0;padding-left:1.2rem;display:grid;gap:0.35rem;}
  .tdmd-price-caption{margin:0.35rem 0 1rem;color:var(--tdmd-muted);font-size:0.95rem;line-height:1.45;}
  .tdmd-bar-row{display:grid;gap:0.45rem;margin:0.9rem 0;}
  .tdmd-bar-label{display:flex;justify-content:space-between;gap:0.75rem;font-weight:800;color:var(--tdmd-navy);}
  .tdmd-bar-track{width:100%;height:14px;border-radius:999px;background:var(--tdmd-bg-soft);overflow:hidden;border:1px solid rgba(0,0,0,0.04);}
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

  /* ===== Dark Mode Toggle Button ===== */
  .tdmd-theme-toggle{
    background:none;border:1px solid var(--tdmd-border);border-radius:999px;
    width:2.25rem;height:2.25rem;display:grid;place-items:center;
    cursor:pointer;color:var(--tdmd-text);transition:border-color 0.15s,color 0.15s;
    flex-shrink:0;
  }
  .tdmd-theme-toggle:hover{border-color:var(--tdmd-teal);color:var(--tdmd-teal);}
  .tdmd-theme-toggle svg{width:1.1rem;height:1.1rem;}

  /* ========== SITE HEADER ========== */
  .tdmd-site-header{background:var(--tdmd-card);border-bottom:1px solid var(--tdmd-border);position:relative;z-index:1000;font-family:'Almarai',sans-serif;}
  .tdmd-header-inner{max-width:1200px;margin:0 auto;padding:0.6rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1.25rem;min-height:100px;}
  .tdmd-header-logo{display:flex;align-items:center;flex-shrink:0;}
  .tdmd-header-logo img{height:112px;width:auto;}
  .tdmd-header-nav-desktop{display:flex;align-items:center;gap:1.5rem;}
  .tdmd-header-nav-link{color:var(--tdmd-text);font-family:'Almarai',sans-serif;font-weight:400;font-size:1rem;text-decoration:none;white-space:nowrap;transition:color 0.15s;letter-spacing:0;}
  .tdmd-header-nav-link:hover{color:var(--tdmd-teal);}
  .tdmd-header-cta-desktop{display:inline-flex;align-items:center;justify-content:center;padding:1.4rem 3rem;border-radius:999px;background:#536c7c;color:#ffffff;font-family:'Almarai',sans-serif;font-weight:400;font-size:1rem;text-decoration:none;white-space:nowrap;transition:background 0.15s;flex-shrink:0;letter-spacing:0;}
  .tdmd-header-cta-desktop:hover{background:#455d6c;}
  .tdmd-hamburger{display:none;background:none;border:none;cursor:pointer;padding:0.5rem;color:var(--tdmd-text);}

  /* Mobile header */
  @media(max-width:900px){
    .tdmd-header-nav-desktop,.tdmd-header-cta-desktop{display:none;}
    .tdmd-hamburger{display:flex;align-items:center;justify-content:center;}
    .tdmd-header-logo img{height:60px;}
    .tdmd-header-inner{min-height:64px;padding:0.35rem 1rem;gap:0.5rem;}
  }
  @media(max-width:430px){
    .tdmd-header-logo img{height:52px;}
    .tdmd-header-inner{padding:0.3rem 0.75rem;}
  }

  /* Mobile overlay */
  .tdmd-mobile-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.25);}
  .tdmd-mobile-menu{position:absolute;inset:0;background:var(--tdmd-card);display:flex;flex-direction:column;padding:0.75rem 1.5rem;}
  .tdmd-mobile-menu-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem;}
  .tdmd-mobile-menu-top .tdmd-header-logo img{height:65px;}
  .tdmd-mobile-menu-top .tdmd-hamburger{display:flex;}
  .tdmd-mobile-nav{display:flex;flex-direction:column;gap:0.75rem;flex:1;justify-content:center;}
  .tdmd-mobile-nav-link{color:var(--tdmd-text);font-family:'Almarai',sans-serif;font-size:1.75rem;font-weight:400;text-decoration:none;padding:0.25rem 0;}
  .tdmd-mobile-cta{display:flex;align-items:center;justify-content:center;padding:1rem;border-radius:999px;background:#FF5A36;color:#ffffff;font-family:'Almarai',sans-serif;font-weight:700;font-size:1.1rem;text-decoration:none;margin-top:auto;margin-bottom:2rem;max-width:360px;transition:background 0.15s;}
  .tdmd-mobile-cta:hover{background:#e04a28;}

  /* ========== SITE FOOTER ========== */
  .tdmd-site-footer{background:#0e3d4d;color:#ffffff;margin-top:2.5rem;}
  .tdmd-footer-inner{max-width:1200px;margin:0 auto;padding:3rem 1.5rem 2rem;display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:2.5rem;}
  .tdmd-footer-brand{display:flex;flex-direction:column;gap:0.75rem;}
  .tdmd-footer-logo img{width:130px;height:auto;border-radius:8px;}
  .tdmd-footer-desc{font-family:'Merriweather',serif;font-size:0.92rem;line-height:1.55;color:rgba(255,255,255,0.75);margin:0;}
  .tdmd-footer-cta{display:inline-flex;align-items:center;gap:0.3rem;padding:0.65rem 1.6rem;border-radius:999px;background:var(--tdmd-accent);color:#ffffff;font-family:'Merriweather',serif;font-weight:700;font-size:0.95rem;text-decoration:none;align-self:flex-start;transition:background 0.15s;}
  .tdmd-footer-cta:hover{background:#e8492a;}
  .tdmd-footer-col{display:flex;flex-direction:column;gap:0.6rem;}
  .tdmd-footer-heading{font-size:0.78rem;font-family:'Merriweather',serif;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.70);margin:0 0 0.25rem;}
  .tdmd-footer-col a{color:rgba(255,255,255,0.85);text-decoration:none;font-family:'Merriweather',serif;font-size:0.93rem;transition:color 0.15s;}
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
  .tdmd-footer-copyright{max-width:1200px;margin:0 auto;padding:1rem 1.5rem;border-top:1px solid rgba(255,255,255,0.08);background:rgba(0,0,0,0.12);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;font-size:0.82rem;color:rgba(255,255,255,0.70);}
  .tdmd-footer-legal-links{display:flex;align-items:center;flex-wrap:wrap;gap:0.25rem;}
  .tdmd-footer-legal-links a{color:rgba(255,255,255,0.70);text-decoration:none;transition:color 0.15s;}
  .tdmd-footer-legal-links a:hover{color:rgba(255,255,255,0.8);}
  .tdmd-footer-dot{color:rgba(255,255,255,0.25);}

  /* Mobile sticky bottom bar */
  .tdmd-mobile-sticky-bar{display:none;}
  @media(max-width:768px){
    .tdmd-mobile-sticky-bar{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:999;background:var(--tdmd-card);border-top:1px solid var(--tdmd-border);padding:0.65rem 1rem;align-items:center;justify-content:space-between;box-shadow:0 -2px 12px rgba(0,0,0,0.08);}
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
`;
