export const whatWeTreatCSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@500;600;700&display=swap');

/* ── What We Treat page styles ── */
.tdm-page{font-family:'DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;background:#FDFBF9;color:#1A1A1A;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;width:100%;max-width:100%;position:relative}
.tdm-page *{box-sizing:border-box;margin:0;padding:0;word-wrap:break-word;overflow-wrap:break-word}
.tdm-page .tdm-container{max-width:1200px;margin:0 auto;padding:0 24px;width:100%;overflow:hidden}
.tdm-hero{padding:60px 0 50px;text-align:center;background:linear-gradient(180deg,#FDFBF9 0%,#F5F2EE 100%);border-bottom:1px solid #F0EBE6;width:100%;overflow:hidden}
.tdm-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:#1B4D4C;color:#fff;font-size:13px;font-weight:600;letter-spacing:.5px;border-radius:100px;margin-bottom:24px;text-transform:uppercase;max-width:100%;flex-wrap:wrap;justify-content:center}
.tdm-badge svg{width:16px;height:16px;flex-shrink:0}
.tdm-hero h1{font-family:'Fraunces',Georgia,serif;font-size:clamp(24px,5vw,48px);font-weight:600;color:#143938;margin-bottom:16px;letter-spacing:-.5px;padding:0 8px;line-height:1.2}
.tdm-hero-sub{font-size:clamp(15px,2.5vw,18px);color:#5A5A5A;max-width:600px;margin:0 auto 32px;padding:0 8px;line-height:1.5}
.tdm-search-wrap{max-width:560px;margin:0 auto 40px;position:relative;width:100%;box-sizing:border-box}
.tdm-search{width:100%;max-width:100%;padding:18px 20px 18px 50px;font-size:16px;font-family:inherit;border:2px solid #E5E0DB;border-radius:16px;background:#FFF;color:#1A1A1A;transition:.25s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 3px rgba(27,77,76,.08);-webkit-appearance:none;appearance:none;display:block;box-sizing:border-box}
.tdm-search:focus{outline:none;border-color:#1B4D4C;box-shadow:0 4px 12px rgba(27,77,76,.1),0 0 0 4px rgba(27,77,76,.1)}
.tdm-search::placeholder{color:#888}
.tdm-search-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);width:22px;height:22px;color:#888;pointer-events:none}
.tdm-results{position:absolute;top:calc(100% + 8px);left:0;right:0;background:#FFF;border:1px solid #E5E0DB;border-radius:12px;box-shadow:0 8px 30px rgba(27,77,76,.12);max-height:400px;overflow-y:auto;z-index:1000}
.tdm-results.active{display:block}
.tdm-result{padding:14px 20px;cursor:pointer;border-bottom:1px solid #F0EBE6;transition:.25s cubic-bezier(.4,0,.2,1);text-decoration:none;display:block;color:inherit}
.tdm-result:last-child{border-bottom:none}
.tdm-result:hover{background:#F5F2EE}
.tdm-result strong{color:#1B4D4C;display:block;margin-bottom:2px}
.tdm-result span{font-size:13px;color:#888}
.tdm-pills{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-bottom:32px;width:100%}
.tdm-pill{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;background:#FFF;border:1px solid #E5E0DB;border-radius:12px;font-size:15px;font-weight:500;color:#1A1A1A;cursor:pointer;transition:.25s cubic-bezier(.4,0,.2,1);text-decoration:none}
.tdm-pill:hover{border-color:#1B4D4C;background:#1B4D4C;color:#fff;transform:translateY(-2px);box-shadow:0 4px 12px rgba(27,77,76,.1)}
.tdm-trust{display:flex;flex-wrap:wrap;justify-content:center;gap:16px 24px;font-size:14px;color:#5A5A5A;width:100%;padding:0 8px}
.tdm-trust-item{display:flex;align-items:center;gap:8px;white-space:nowrap}
.tdm-trust-item svg{width:18px;height:18px;color:#2E7D52;flex-shrink:0}
.tdm-banner{background:linear-gradient(135deg,#1B4D4C 0%,#2A6B6A 100%);color:#fff;padding:20px 0;width:100%;overflow-x:hidden}
.tdm-banner-content{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px 32px;font-size:14px;text-align:center;width:100%}
.tdm-banner-item{display:flex;align-items:center;gap:8px;text-align:left}
.tdm-banner-item svg{width:18px;height:18px;flex-shrink:0}
.tdm-main{display:flex;gap:40px;padding:50px 0 80px;width:100%}
.tdm-sidebar{width:240px;flex-shrink:0;position:sticky;top:24px;align-self:flex-start}
.tdm-sidebar-nav{background:#FFF;border:1px solid #E5E0DB;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(27,77,76,.08)}
.tdm-sidebar-title{font-family:'Fraunces',Georgia,serif;font-size:16px;font-weight:600;color:#143938;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #F0EBE6}
.tdm-sidebar-link{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;margin:4px 0;border-radius:8px;font-size:14px;color:#5A5A5A;text-decoration:none;transition:.25s cubic-bezier(.4,0,.2,1)}
.tdm-sidebar-link:hover{background:#F5F2EE;color:#1B4D4C}
.tdm-sidebar-link.active{background:#1B4D4C;color:#fff}
.tdm-sidebar-cta{display:block;width:100%;margin-top:20px;padding:14px 20px;background:#E8846B;color:#fff;font-size:15px;font-weight:600;text-align:center;text-decoration:none;border-radius:8px;transition:.25s cubic-bezier(.4,0,.2,1)}
.tdm-sidebar-cta:hover{background:#D9705A;transform:translateY(-1px)}
.tdm-sc-card{display:block;margin-top:16px;padding:20px 16px;background:linear-gradient(160deg,#143938 0%,#2A6B6A 100%);border-radius:12px;text-decoration:none;color:#fff;text-align:center;transition:.25s cubic-bezier(.4,0,.2,1);border:1px solid rgba(255,255,255,.08)}
.tdm-sc-card:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(27,77,76,.1);color:#fff;text-decoration:none}
.tdm-sc-icon{font-size:24px;width:44px;height:44px;background:rgba(255,255,255,.12);border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px}
.tdm-sc-title{font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:600;margin-bottom:6px;line-height:1.3}
.tdm-sc-sub{font-size:12px;opacity:.75;line-height:1.5;margin-bottom:14px}
.tdm-sc-btn{display:inline-block;background:rgba(255,255,255,.15);border:1.5px solid rgba(255,255,255,.3);color:#fff;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;padding:9px 18px;border-radius:8px;transition:background .2s ease}
.tdm-sc-card:hover .tdm-sc-btn{background:rgba(255,255,255,.25)}
.tdm-sc-mobile{display:none;margin:0 0 24px 0;padding:18px 20px;background:linear-gradient(135deg,#143938 0%,#2A6B6A 100%);border-radius:12px;text-decoration:none;color:#fff;text-align:center;transition:.25s cubic-bezier(.4,0,.2,1);border:1px solid rgba(255,255,255,.08)}
.tdm-sc-mobile:hover{color:#fff;text-decoration:none}
.tdm-sc-mobile-inner{display:flex;align-items:center;gap:14px;text-align:left}
.tdm-sc-mobile-icon{font-size:22px;width:42px;height:42px;background:rgba(255,255,255,.12);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.tdm-sc-mobile-text{flex:1;min-width:0}
.tdm-sc-mobile-title{font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:600;margin-bottom:3px}
.tdm-sc-mobile-sub{font-size:12px;opacity:.75;line-height:1.4}
.tdm-sc-mobile-arrow{font-size:18px;opacity:.6;flex-shrink:0}
.tdm-content{flex:1;min-width:0;width:100%;max-width:100%}
.tdm-section{margin-bottom:32px;scroll-margin-top:24px;width:100%;max-width:100%}
.tdm-header{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;background:#FFF;border:1px solid #E5E0DB;border-radius:12px 12px 0 0;cursor:pointer;transition:.25s cubic-bezier(.4,0,.2,1);width:100%}
.tdm-header:hover{background:#F5F2EE}
.tdm-header-left{display:flex;align-items:center;gap:16px;min-width:0;flex:1}
.tdm-header-left>div{min-width:0;flex:1}
.tdm-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:#1B4D4C;border-radius:8px;color:#fff;font-size:24px}
.tdm-title{font-family:'Fraunces',Georgia,serif;font-size:clamp(18px,3vw,22px);font-weight:600;color:#143938;margin-bottom:4px}
.tdm-subtitle{font-size:14px;color:#5A5A5A}
.tdm-toggle{display:flex;align-items:center;gap:12px;font-size:14px;color:#5A5A5A}
.tdm-chevron{width:24px;height:24px;transition:.25s cubic-bezier(.4,0,.2,1)}
.tdm-section.collapsed .tdm-chevron{transform:rotate(-90deg)}
.tdm-section.collapsed .tdm-header{border-radius:12px}
.tdm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(280px,100%),1fr));gap:16px;padding:20px;background:#F5F2EE;border:1px solid #E5E0DB;border-top:none;border-radius:0 0 12px 12px;width:100%}
.tdm-card{background:#FFF;border:1px solid #E5E0DB;border-radius:12px;padding:20px;transition:.25s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;width:100%;min-width:0}
.tdm-card:hover{border-color:#2A6B6A;box-shadow:0 4px 12px rgba(27,77,76,.1);transform:translateY(-3px)}
.tdm-card-name{font-family:'Fraunces',Georgia,serif;font-size:17px;font-weight:600;color:#143938;margin-bottom:8px}
.tdm-card-desc{font-size:14px;color:#5A5A5A;line-height:1.5;margin-bottom:16px;flex-grow:1}
.tdm-actions{display:flex;gap:10px;flex-wrap:wrap}
.tdm-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:10px 16px;font-size:14px;font-weight:600;font-family:inherit;border-radius:8px;text-decoration:none;transition:.25s cubic-bezier(.4,0,.2,1);cursor:pointer;border:none}
.tdm-btn-primary{background:#E8846B;color:#fff}
.tdm-btn-primary:hover{background:#D9705A}
.tdm-btn-secondary{background:transparent;color:#1B4D4C;border:1px solid #E5E0DB}
.tdm-btn-secondary:hover{background:#1B4D4C;color:#fff;border-color:#1B4D4C}
.tdm-bottom{background:linear-gradient(135deg,#143938 0%,#1B4D4C 100%);padding:60px 0;text-align:center;color:#fff}
.tdm-bottom h2{font-family:'Fraunces',Georgia,serif;font-size:clamp(24px,4vw,36px);font-weight:600;margin-bottom:16px}
.tdm-bottom p{font-size:18px;opacity:.9;margin-bottom:32px;max-width:500px;margin-left:auto;margin-right:auto}
.tdm-cta{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:#E8846B;color:#fff;font-size:17px;font-weight:600;text-decoration:none;border-radius:12px;transition:.25s cubic-bezier(.4,0,.2,1)}
.tdm-cta:hover{background:#D9705A;transform:translateY(-2px);box-shadow:0 8px 25px rgba(232,132,107,.4)}
.tdm-cta svg{width:20px;height:20px}
.tdm-features{display:flex;flex-wrap:wrap;justify-content:center;gap:20px 32px;margin-top:32px;font-size:14px;opacity:.85}
.tdm-feature{display:flex;align-items:center;gap:8px}
.tdm-feature svg{width:18px;height:18px}
.tdm-mobile-cta{display:none;position:fixed;bottom:0;left:0;right:0;padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom,0));background:#fff;border-top:1px solid #E5E0DB;box-shadow:0 -4px 20px rgba(0,0,0,.1);z-index:999;width:100%}
.tdm-mobile-cta a{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px;background:#E8846B;color:#fff;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;white-space:nowrap}

/* ── Responsive ── */
@media(max-width:900px){
.tdm-sidebar{display:none}
.tdm-sc-mobile{display:block}
.tdm-main{padding:30px 0 60px}
.tdm-pills{flex-wrap:wrap;justify-content:center;gap:10px;padding:0;margin:0 0 32px 0}
.tdm-pill{flex-shrink:1}
.tdm-mobile-cta{display:block}
.tdm-page{padding-bottom:80px}
.tdm-grid{grid-template-columns:1fr}
.tdm-trust{gap:12px 20px}
}
@media(max-width:600px){
.tdm-page .tdm-container{padding:0 16px;overflow:hidden}
.tdm-hero{padding:32px 0 28px;overflow:hidden}
.tdm-hero h1{font-size:22px;line-height:1.25;padding:0}
.tdm-hero-sub{font-size:14px;margin-bottom:24px;padding:0}
.tdm-badge{font-size:11px;padding:6px 12px;gap:6px;margin-bottom:16px}
.tdm-badge svg{width:14px;height:14px}
.tdm-search-wrap{margin:0 0 24px 0;padding:0;max-width:100%;width:100%;box-sizing:border-box}
.tdm-search{padding:14px 14px 14px 42px;font-size:16px;border-radius:12px;width:100%;max-width:100%;box-sizing:border-box}
.tdm-search-icon{left:14px;width:18px;height:18px}
.tdm-pills{flex-wrap:wrap;justify-content:center;gap:8px;margin:0 0 24px 0;padding:0}
.tdm-pill{padding:8px 12px;font-size:13px;gap:6px;flex-shrink:1;flex-grow:0}
.tdm-trust{flex-direction:column;gap:10px;align-items:flex-start;padding:0}
.tdm-trust-item{font-size:13px}
.tdm-banner{padding:16px 0}
.tdm-banner-content{flex-direction:column;gap:10px;align-items:flex-start;text-align:left}
.tdm-banner-item{font-size:13px}
.tdm-header{padding:16px;flex-direction:column;align-items:flex-start;gap:12px}
.tdm-header-left{width:100%}
.tdm-toggle{width:100%;justify-content:flex-end}
.tdm-icon{width:40px;height:40px;font-size:20px;flex-shrink:0}
.tdm-title{font-size:18px;line-height:1.3}
.tdm-subtitle{font-size:13px}
.tdm-grid{grid-template-columns:1fr;padding:12px;gap:12px}
.tdm-card{padding:16px}
.tdm-card-name{font-size:16px}
.tdm-card-desc{font-size:13px}
.tdm-actions{flex-direction:column}
.tdm-btn{width:100%;justify-content:center;padding:12px 16px}
.tdm-bottom{padding:40px 0}
.tdm-bottom h2{font-size:22px;line-height:1.3;padding:0 8px}
.tdm-bottom p{font-size:15px;padding:0 8px}
.tdm-cta{width:calc(100% - 32px);justify-content:center;padding:16px 24px;margin:0 16px}
.tdm-features{flex-direction:column;gap:10px;padding:0 16px}
.tdm-feature{justify-content:center;font-size:13px}
.tdm-main{padding:20px 0 60px;gap:0}
.tdm-section{margin-bottom:24px}
.tdm-sc-mobile{padding:14px 16px}
.tdm-sc-mobile-title{font-size:14px}
.tdm-sc-mobile-sub{font-size:11px}
}
@keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.tdm-hero{animation:fadeIn .6s ease-out}
.tdm-section{animation:fadeIn .5s ease-out both}
.tdm-section:nth-child(1){animation-delay:.1s}
.tdm-section:nth-child(2){animation-delay:.15s}
.tdm-section:nth-child(3){animation-delay:.2s}
.tdm-section:nth-child(4){animation-delay:.25s}
.tdm-section:nth-child(5){animation-delay:.3s}
.tdm-section:nth-child(6){animation-delay:.35s}
.tdm-section:nth-child(7){animation-delay:.4s}
@media(prefers-reduced-motion:reduce){.tdm-hero,.tdm-section{animation:none}}
@media(max-width:380px){
.tdm-hero{padding:24px 0 20px}
.tdm-hero h1{font-size:20px;padding:0}
.tdm-hero-sub{font-size:13px;padding:0}
.tdm-badge{font-size:10px;padding:5px 10px;gap:5px}
.tdm-badge svg{width:12px;height:12px}
.tdm-search-wrap{margin:0 0 20px 0}
.tdm-search{padding:12px 12px 12px 36px;font-size:15px}
.tdm-search-icon{left:10px;width:16px;height:16px}
.tdm-pills{gap:6px;margin:0 0 20px 0}
.tdm-pill{padding:6px 10px;font-size:11px;gap:4px}
.tdm-trust-item{font-size:12px}
.tdm-banner-item{font-size:12px}
.tdm-card-name{font-size:15px}
.tdm-card-desc{font-size:12px;line-height:1.4}
.tdm-btn{font-size:13px;padding:10px 14px}
.tdm-icon{width:36px;height:36px;font-size:18px}
.tdm-title{font-size:16px}
.tdm-subtitle{font-size:12px}
.tdm-bottom h2{font-size:20px}
.tdm-bottom p{font-size:14px}
.tdm-cta{font-size:15px;padding:14px 20px}
.tdm-feature{font-size:12px}
.tdm-sc-mobile{padding:12px 14px}
.tdm-sc-mobile-icon{width:36px;height:36px;font-size:18px}
.tdm-sc-mobile-title{font-size:13px}
.tdm-sc-mobile-sub{font-size:11px}
}
`;
