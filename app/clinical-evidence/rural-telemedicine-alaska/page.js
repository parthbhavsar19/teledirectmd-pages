export const metadata = {
  title:
    'Rural Telemedicine Evidence Review for Alaska: NEJM, Lancet, BMJ, and EClinicalMedicine Trials, Systematic Reviews, and Adoption-Ready Protocols',
  description:
    "A physician-authored evidence review of peer-reviewed randomized trials and systematic reviews on rural telemedicine, wildfire-smoke respiratory intervention, and chronic disease management. Emphasis on Alaska applicability, including the 2022 Lancet Global Health Hearing Norton Sound cluster-RCT, the Hózhó Navajo trial, MIRACLE-AF, SMARTER, and VITAL. Written by Parth Bhavsar, MD.",
  alternates: {
    canonical: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'article',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Rural Telemedicine Evidence Review for Alaska',
    description:
      'Physician-authored evidence review of peer-reviewed rural telemedicine RCTs and systematic reviews. NEJM, Lancet, BMJ, EClinicalMedicine coverage with Alaska adoption analysis.',
    url: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska',
    images: ['https://teledirectmd.com/og-clinical-evidence-alaska.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rural Telemedicine Evidence Review for Alaska',
    description:
      'Physician evidence review of rural telemedicine RCTs and reviews with Alaska adoption analysis.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'Clinical Evidence', item: 'https://teledirectmd.com/clinical-evidence/' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Rural Telemedicine Evidence Review for Alaska',
          item: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska/',
        },
      ],
    },
    {
      '@type': 'ScholarlyArticle',
      '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#article',
      headline: 'Rural Telemedicine Evidence Review for Alaska',
      author: { '@id': 'https://teledirectmd.com/about#physician' },
      publisher: { '@id': 'https://teledirectmd.com/#organization' },
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      about: 'Rural telemedicine, wildfire smoke respiratory care, chronic disease management, Alaska rural health',
      keywords:
        'rural telemedicine, Alaska, wildfire smoke, Hearing Norton Sound, cluster randomized trial, MIRACLE-AF, SMARTER, Hózhó, VITAL, community health aide, systematic review',
      citation: [
        'https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(22)00184-X/fulltext',
        'https://www.bmj.com/content/389/bmj-2024-082765',
        'https://pubmed.ncbi.nlm.nih.gov/38583185/',
        'https://www.nature.com/articles/s41591-025-03511-2',
        'https://pubmed.ncbi.nlm.nih.gov/42005925/',
        'https://pubmed.ncbi.nlm.nih.gov/40472026/',
        'https://psychiatryonline.org/doi/10.1176/appi.ajp.2012.12050696',
        'https://journals.sagepub.com/doi/10.1177/1357633X221139892',
        'https://pubmed.ncbi.nlm.nih.gov/41324243/',
        'https://pubs.acs.org/doi/10.1021/acs.est.4c06653',
        'https://linkinghub.elsevier.com/retrieve/pii/S0735109725064046',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#webpage',
      url: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska/',
      name: 'Rural Telemedicine Evidence Review for Alaska',
      description: metadata.description,
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      breadcrumb: { '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#breadcrumbs' },
      author: { '@id': 'https://teledirectmd.com/about#physician' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
    },
  ],
};

const styles = `
:root{--tdmd-teal:#006B73;--tdmd-teal-dark:#003E52;--tdmd-accent:#C4551E;--tdmd-bg:#F7F9FA;--tdmd-card:#FFFFFF;--tdmd-border:#C2E0E5;--tdmd-text:#0A2438;--tdmd-muted:#456676;--ce-nejm:#8A1538;--ce-lancet:#005C8A;--ce-bmj:#2E7D3F;--ce-eclin:#7A4A9A;--ce-adjacent:#B8863A}
.tdmd-ce-wrap{background:var(--tdmd-bg);color:var(--tdmd-text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.7;font-size:17px;padding:1rem 0 3rem}
.tdmd-ce-container{max-width:1080px;margin:0 auto;padding:0 1.25rem}
@media (max-width:480px){.tdmd-ce-container{padding:0 .9rem}.tdmd-ce-wrap{font-size:16px}}
.tdmd-ce-breadcrumb{font-size:.85rem;color:var(--tdmd-muted);padding:1rem 0}
.tdmd-ce-breadcrumb a{color:var(--tdmd-teal);text-decoration:none}
.tdmd-ce-breadcrumb span{margin:0 .4rem;color:#B0BEC5}
.tdmd-ce-hero{position:relative;margin:0 0 1.5rem;border-radius:14px;overflow:hidden;border:1px solid var(--tdmd-border);box-shadow:0 3px 12px rgba(0,62,82,0.1)}
.tdmd-ce-hero svg{display:block;width:100%;height:auto}
.tdmd-ce-header{padding:1rem 0 1.5rem;border-bottom:1px solid var(--tdmd-border)}
.tdmd-ce-badge{display:inline-block;background:var(--tdmd-teal-dark);color:#fff;padding:.3rem .7rem;border-radius:999px;font-size:.75rem;font-weight:600;letter-spacing:.03em;text-transform:uppercase;margin-bottom:1rem}
.tdmd-ce-title{font-size:2.05rem;font-weight:700;color:var(--tdmd-teal-dark);margin:.4rem 0;line-height:1.2}
@media (max-width:480px){.tdmd-ce-title{font-size:1.55rem;line-height:1.25}}
.tdmd-ce-sub{color:var(--tdmd-muted);font-size:1.02rem;margin:.5rem 0 1rem;max-width:820px}
.tdmd-ce-meta{color:var(--tdmd-muted);font-size:.88rem;padding-top:.5rem;display:flex;flex-wrap:wrap;gap:1.25rem}
.tdmd-ce-body h2{display:flex;align-items:center;gap:.55rem;font-size:1.45rem;color:var(--tdmd-teal-dark);margin-top:2.2rem;margin-bottom:.7rem;padding-bottom:.5rem;border-bottom:2px solid var(--tdmd-border)}
.tdmd-ce-body h2 svg{width:22px;height:22px;flex-shrink:0;color:var(--tdmd-teal)}
.tdmd-ce-body h3{font-size:1.1rem;color:var(--tdmd-teal-dark);margin-top:1.4rem;margin-bottom:.4rem}
.tdmd-ce-body p{margin:0 0 1rem}
.tdmd-ce-body ul,.tdmd-ce-body ol{margin:0 0 1rem;padding-left:1.4rem}
.tdmd-ce-body li{margin-bottom:.4rem}
.tdmd-ce-body em{font-style:italic}
.tdmd-ce-tldr{background:linear-gradient(135deg,#003E52 0%,#006B73 100%);color:#fff;border-radius:12px;padding:1.4rem 1.6rem;margin:1.5rem 0;box-shadow:0 3px 10px rgba(0,62,82,0.15)}
.tdmd-ce-tldr h2{color:#fff !important;border-bottom-color:rgba(255,255,255,0.25) !important;margin-top:0 !important}
.tdmd-ce-tldr h2 svg{color:#FFD97A !important}
.tdmd-ce-tldr a{color:#FFD97A;text-decoration:underline}
.tdmd-ce-tldr em{color:#E4F3F5}
.tdmd-ce-tldr sup a{color:#FFD97A}
.tdmd-ce-figure{margin:1.8rem 0;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.1rem 1.2rem}
.tdmd-ce-figure svg{display:block;width:100%;height:auto;max-width:100%}
.tdmd-ce-figure figcaption{color:var(--tdmd-muted);font-size:.85rem;margin-top:.6rem;font-style:italic;line-height:1.45}
.tdmd-ce-figtitle{font-size:1.02rem;font-weight:700;color:var(--tdmd-teal-dark);margin:.1rem 0 .8rem}
.tdmd-ce-callout{background:var(--tdmd-card);border-left:4px solid var(--tdmd-teal);border-radius:8px;padding:1rem 1.2rem;margin:1.2rem 0}
.tdmd-ce-callout-title{font-weight:700;color:var(--tdmd-teal-dark);margin-bottom:.4rem;display:flex;align-items:center;gap:.5rem}
.tdmd-ce-callout-title svg{width:18px;height:18px;color:var(--tdmd-teal)}
.tdmd-ce-table-wrap{overflow-x:auto;margin:1rem 0;-webkit-overflow-scrolling:touch}
.tdmd-ce-table{width:100%;border-collapse:collapse;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:8px;overflow:hidden;font-size:.92rem}
.tdmd-ce-table th,.tdmd-ce-table td{padding:.65rem .8rem;text-align:left;border-bottom:1px solid var(--tdmd-border);vertical-align:top}
@media (max-width:640px){.tdmd-ce-table{font-size:.85rem}.tdmd-ce-table th,.tdmd-ce-table td{padding:.5rem .6rem;min-width:110px}}
.tdmd-ce-table th{background:#E6F0F2;color:var(--tdmd-teal-dark);font-weight:700}
.tdmd-ce-table tr:last-child td{border-bottom:none}
.tdmd-ce-journals{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin:1rem 0;border-radius:8px;overflow:hidden;font-size:.9rem}
.tdmd-ce-journals th{padding:.7rem .5rem;text-align:center;color:#fff;font-weight:700;font-size:.85rem;letter-spacing:.02em}
.tdmd-ce-journals .ce-jh-nejm{background:var(--ce-nejm)}
.tdmd-ce-journals .ce-jh-lancet{background:var(--ce-lancet)}
.tdmd-ce-journals .ce-jh-bmj{background:var(--ce-bmj)}
.tdmd-ce-journals .ce-jh-eclin{background:var(--ce-eclin)}
.tdmd-ce-jgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:.65rem;margin:.9rem 0 1.5rem}
@media (max-width:720px){.tdmd-ce-jgrid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:480px){.tdmd-ce-jgrid{grid-template-columns:1fr}}
.tdmd-ce-jcard{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-top:5px solid var(--tdmd-teal);border-radius:8px;padding:.9rem 1rem;font-size:.86rem}
.tdmd-ce-jcard.ce-j-nejm{border-top-color:var(--ce-nejm)}
.tdmd-ce-jcard.ce-j-lancet{border-top-color:var(--ce-lancet)}
.tdmd-ce-jcard.ce-j-bmj{border-top-color:var(--ce-bmj)}
.tdmd-ce-jcard.ce-j-eclin{border-top-color:var(--ce-eclin)}
.tdmd-ce-jcard h4{margin:0 0 .35rem;font-size:.9rem;color:var(--tdmd-teal-dark);font-weight:700}
.tdmd-ce-jcard .ce-j-flag{font-size:.7rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--tdmd-muted);margin-bottom:.4rem}
.tdmd-ce-jcard ul{padding-left:1.1rem;margin:.3rem 0 0;font-size:.83rem;color:var(--tdmd-muted)}
.tdmd-ce-jcard li{margin-bottom:.25rem}
.tdmd-ce-jcard strong{color:var(--tdmd-text)}
.tdmd-ce-trialcard{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.05rem 1.2rem;margin:1rem 0;position:relative}
.tdmd-ce-trialcard.ce-tr-lancet{border-left:5px solid var(--ce-lancet)}
.tdmd-ce-trialcard.ce-tr-bmj{border-left:5px solid var(--ce-bmj)}
.tdmd-ce-trialcard.ce-tr-eclin{border-left:5px solid var(--ce-eclin)}
.tdmd-ce-trialcard.ce-tr-adjacent{border-left:5px solid var(--ce-adjacent)}
.tdmd-ce-trialcard.ce-tr-nejm{border-left:5px solid var(--ce-nejm)}
.tdmd-ce-trialcard h3{margin-top:0}
.tdmd-ce-trialflag{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#fff;padding:.15rem .55rem;border-radius:999px;margin-bottom:.5rem}
.tdmd-ce-trialflag.ce-fl-lancet{background:var(--ce-lancet)}
.tdmd-ce-trialflag.ce-fl-bmj{background:var(--ce-bmj)}
.tdmd-ce-trialflag.ce-fl-eclin{background:var(--ce-eclin)}
.tdmd-ce-trialflag.ce-fl-adjacent{background:var(--ce-adjacent)}
.tdmd-ce-trialflag.ce-fl-nejm{background:var(--ce-nejm)}
.tdmd-ce-effect{display:inline-block;background:#E6F0F2;color:var(--tdmd-teal-dark);padding:.15rem .55rem;border-radius:6px;font-weight:700;font-size:.9rem;font-family:'SF Mono',Menlo,Consolas,monospace}
.tdmd-ce-protocolgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin:1.2rem 0 1.5rem}
@media (max-width:720px){.tdmd-ce-protocolgrid{grid-template-columns:1fr}}
.tdmd-ce-protocol{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.05rem 1.15rem;position:relative;overflow:hidden}
.tdmd-ce-protocol h3{margin:0 0 .35rem;font-size:1.02rem;color:var(--tdmd-teal-dark);padding-right:5.5rem}
.tdmd-ce-protocol .ce-conf{position:absolute;top:1rem;right:1rem;font-size:.68rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:.2rem .5rem;border-radius:999px;color:#fff}
.tdmd-ce-protocol .ce-conf-high{background:#2E7D3F}
.tdmd-ce-protocol .ce-conf-medhigh{background:#5F8A3B}
.tdmd-ce-protocol .ce-conf-med{background:#B8863A}
.tdmd-ce-protocol .ce-conf-info{background:var(--tdmd-teal)}
.tdmd-ce-protocol .ce-p-evidence{font-size:.8rem;color:var(--tdmd-muted);margin:.3rem 0 .6rem;font-style:italic}
.tdmd-ce-protocol p{margin:.4rem 0 0;font-size:.9rem}
.tdmd-ce-icon{width:18px;height:18px;flex-shrink:0;vertical-align:middle}
.tdmd-ce-refs{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.1rem 1.4rem;margin:2rem 0;font-size:.87rem}
.tdmd-ce-refs h2{font-size:1.2rem;margin-top:0}
.tdmd-ce-refs ol{margin:0;padding-left:1.2rem}
.tdmd-ce-refs li{margin-bottom:.5rem;color:var(--tdmd-muted);word-break:break-word}
.tdmd-ce-refs a{color:var(--tdmd-teal);text-decoration:none;word-break:break-all}
`;

const heroSvg = `<svg viewBox="0 0 1200 500" role="img" aria-labelledby="cehero-title cehero-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="cehero-title">Rural telemedicine evidence sources and effect size overview</title>
  <desc id="cehero-desc">Composite illustration of four medical journal covers and a small effect-size bar chart representing the evidence base for rural telemedicine, with an Alaska map silhouette anchoring the geographic focus.</desc>
  <defs>
    <linearGradient id="cehero-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#003E52"/>
      <stop offset="100%" stop-color="#00565F"/>
    </linearGradient>
    <linearGradient id="cehero-alaska" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="1200" height="500" fill="url(#cehero-bg)"/>

  <!-- Alaska silhouette (stylized) as watermark -->
  <g fill="url(#cehero-alaska)" opacity="0.9">
    <path d="M 780,80 L 900,90 L 1020,110 L 1120,150 L 1150,220 L 1120,280 L 1050,320 L 970,340 L 900,360 L 830,380 L 760,370 L 700,340 L 660,300 L 640,240 L 660,180 L 700,130 L 760,100 Z"/>
    <!-- Aleutian tail -->
    <path d="M 660,300 L 580,320 L 500,340 L 430,360 L 360,375 L 300,370 L 260,355 L 250,340 L 300,335 L 380,325 L 460,315 L 540,305 Z"/>
  </g>

  <!-- Title text block -->
  <g transform="translate(60,70)" fill="#FFFFFF">
    <text x="0" y="0" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="700" letter-spacing="0.2em" opacity="0.75">EVIDENCE REVIEW</text>
    <text x="0" y="42" font-family="Georgia,serif" font-size="36" font-weight="700">Rural Telemedicine</text>
    <text x="0" y="80" font-family="Georgia,serif" font-size="36" font-weight="700">for Alaska</text>
    <text x="0" y="115" font-family="system-ui,-apple-system,sans-serif" font-size="15" font-weight="400" opacity="0.85">Peer-reviewed RCTs and systematic reviews, 2022 to 2026</text>
  </g>

  <!-- Four journal cover cards -->
  <g transform="translate(60,190)">
    <!-- NEJM -->
    <g transform="translate(0,0)">
      <rect x="0" y="0" width="150" height="200" rx="6" fill="#FFFFFF"/>
      <rect x="0" y="0" width="150" height="42" fill="#8A1538"/>
      <text x="75" y="22" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="700" fill="#FFFFFF">The New England</text>
      <text x="75" y="36" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#FFFFFF">Journal of Medicine</text>
      <text x="75" y="80" text-anchor="middle" font-family="Georgia,serif" font-size="34" font-weight="700" fill="#8A1538">NEJM</text>
      <line x1="20" y1="105" x2="130" y2="105" stroke="#C2A0A8" stroke-width="1"/>
      <text x="75" y="130" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#456676">2022–2026</text>
      <text x="75" y="152" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#456676">rural RCT volume:</text>
      <text x="75" y="172" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#8A1538">Low</text>
      <text x="75" y="188" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#456676" font-style="italic">perspectives only</text>
    </g>
    <!-- Lancet -->
    <g transform="translate(170,0)">
      <rect x="0" y="0" width="150" height="200" rx="6" fill="#FFFFFF"/>
      <rect x="0" y="0" width="150" height="42" fill="#005C8A"/>
      <text x="75" y="30" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#FFFFFF">The Lancet</text>
      <text x="75" y="80" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-weight="700" fill="#005C8A">Lancet</text>
      <text x="75" y="102" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="600" fill="#005C8A" font-style="italic">Global Health</text>
      <line x1="20" y1="118" x2="130" y2="118" stroke="#A0BFD0" stroke-width="1"/>
      <text x="75" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#456676">2022–2026</text>
      <text x="75" y="160" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#456676">rural RCT volume:</text>
      <text x="75" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#005C8A">Highest</text>
    </g>
    <!-- BMJ -->
    <g transform="translate(340,0)">
      <rect x="0" y="0" width="150" height="200" rx="6" fill="#FFFFFF"/>
      <rect x="0" y="0" width="150" height="42" fill="#2E7D3F"/>
      <text x="75" y="30" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#FFFFFF">The BMJ</text>
      <text x="75" y="88" text-anchor="middle" font-family="Georgia,serif" font-size="42" font-weight="700" fill="#2E7D3F">BMJ</text>
      <line x1="20" y1="118" x2="130" y2="118" stroke="#A8C8B0" stroke-width="1"/>
      <text x="75" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#456676">2022–2026</text>
      <text x="75" y="160" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#456676">rural RCT volume:</text>
      <text x="75" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#2E7D3F">Moderate</text>
    </g>
    <!-- EClinicalMedicine -->
    <g transform="translate(510,0)">
      <rect x="0" y="0" width="150" height="200" rx="6" fill="#FFFFFF"/>
      <rect x="0" y="0" width="150" height="42" fill="#7A4A9A"/>
      <text x="75" y="22" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="700" fill="#FFFFFF">EClinical</text>
      <text x="75" y="36" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="700" fill="#FFFFFF">Medicine</text>
      <text x="75" y="82" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#7A4A9A">EClin</text>
      <text x="75" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#7A4A9A">Med</text>
      <line x1="20" y1="118" x2="130" y2="118" stroke="#C0A8D0" stroke-width="1"/>
      <text x="75" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#456676">2022–2026</text>
      <text x="75" y="160" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#456676">rural RCT volume:</text>
      <text x="75" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#7A4A9A">Moderate</text>
    </g>
  </g>

  <!-- Right side stat callout -->
  <g transform="translate(760,200)">
    <rect x="0" y="0" width="360" height="180" rx="10" fill="#FFFFFF" opacity="0.08"/>
    <text x="20" y="35" font-family="system-ui,sans-serif" font-size="12" font-weight="700" letter-spacing="0.1em" fill="#FFD97A">FLAGSHIP ALASKA TRIAL</text>
    <text x="20" y="72" font-family="Georgia,serif" font-size="48" font-weight="700" fill="#FFFFFF">17.6×</text>
    <text x="20" y="98" font-family="system-ui,sans-serif" font-size="14" fill="#E4F3F5">faster time-to-follow-up</text>
    <text x="20" y="122" font-family="system-ui,sans-serif" font-size="12" fill="#B8D8DE" font-style="italic">Hearing Norton Sound cluster-RCT</text>
    <text x="20" y="138" font-family="system-ui,sans-serif" font-size="12" fill="#B8D8DE" font-style="italic">Lancet Global Health, 2022</text>
    <text x="20" y="164" font-family="system-ui,sans-serif" font-size="11" fill="#8AB8C0">15 Bering Strait communities · n=1,481</text>
  </g>

  <!-- Author bar -->
  <g transform="translate(60,430)">
    <text x="0" y="0" font-family="system-ui,sans-serif" font-size="13" fill="#B8D8DE">Author: <tspan font-weight="700" fill="#FFFFFF">Parth Bhavsar, MD</tspan> · Board-Certified Family Medicine · TeleDirectMD</text>
  </g>
</svg>`;

const forestPlotSvg = `<svg viewBox="0 0 960 560" role="img" aria-labelledby="fp-title fp-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="fp-title">Effect sizes across headline rural telemedicine trials</title>
  <desc id="fp-desc">Visualization of primary outcome effect sizes across nine rural telemedicine and telehealth trials, showing point estimates and 95% confidence intervals where reported.</desc>

  <rect x="0" y="0" width="960" height="560" fill="#FFFFFF"/>

  <!-- Axis labels -->
  <text x="480" y="30" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#003E52">Primary outcome effect: intervention favored →</text>

  <!-- Grid guides -->
  <g stroke="#E6F0F2" stroke-width="1">
    <line x1="380" y1="55" x2="380" y2="510"/>
    <line x1="500" y1="55" x2="500" y2="510"/>
    <line x1="620" y1="55" x2="620" y2="510"/>
    <line x1="740" y1="55" x2="740" y2="510"/>
    <line x1="860" y1="55" x2="860" y2="510"/>
  </g>
  <!-- Null line -->
  <line x1="380" y1="55" x2="380" y2="510" stroke="#8A98A0" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="380" y="52" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#8A98A0">No effect</text>

  <!-- Trial rows: y = 90, 138, 186, 234, 282, 330, 378, 426, 474 -->
  <g font-family="system-ui,sans-serif" font-size="12" fill="#003E52">

    <!-- 1. Hearing Norton Sound (Alaska) - ETR 17.6, CI 6.8-45.3 (log scale visual) -->
    <g transform="translate(0,90)">
      <text x="10" y="4" font-weight="700" fill="#005C8A">Hearing Norton Sound</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Alaska cluster-RCT · Lancet Glob Health 2022</text>
      <line x1="435" y1="0" x2="820" y2="0" stroke="#005C8A" stroke-width="2.5"/>
      <circle cx="600" cy="0" r="9" fill="#005C8A"/>
      <text x="835" y="4" font-weight="700" fill="#005C8A">17.6×</text>
      <text x="835" y="20" fill="#456676" font-size="10.5">time-to-follow-up (95% CI 6.8-45.3)</text>
    </g>

    <!-- 2. Hózhó Navajo - OR 12.99, CI 6.87-24.53 -->
    <g transform="translate(0,150)">
      <text x="10" y="4" font-weight="700" fill="#B8863A">Hózhó (Navajo Nation)</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Stepped-wedge trial · JAMA Intern Med 2024</text>
      <line x1="450" y1="0" x2="770" y2="0" stroke="#B8863A" stroke-width="2.5"/>
      <circle cx="580" cy="0" r="9" fill="#B8863A"/>
      <text x="785" y="4" font-weight="700" fill="#B8863A">OR 12.99</text>
      <text x="785" y="20" fill="#456676" font-size="10.5">GDMT uptake (95% CI 6.9-24.5)</text>
    </g>

    <!-- 3. Fortney depression - OR 12.69, CI 4.81-33.46 -->
    <g transform="translate(0,210)">
      <text x="10" y="4" font-weight="700" fill="#B8863A">Fortney rural depression</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Pragmatic RCT · Am J Psychiatry 2013</text>
      <line x1="440" y1="0" x2="800" y2="0" stroke="#B8863A" stroke-width="2.5"/>
      <circle cx="570" cy="0" r="9" fill="#B8863A"/>
      <text x="815" y="4" font-weight="700" fill="#B8863A">OR 12.69</text>
      <text x="815" y="20" fill="#456676" font-size="10.5">remission (95% CI 4.8-33.5)</text>
    </g>

    <!-- 4. Fortney response - OR 7.74 -->
    <g transform="translate(0,270)">
      <text x="10" y="4" font-weight="700" fill="#B8863A">Fortney rural depression</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Same trial · treatment response</text>
      <line x1="430" y1="0" x2="700" y2="0" stroke="#B8863A" stroke-width="2.5"/>
      <circle cx="510" cy="0" r="9" fill="#B8863A"/>
      <text x="715" y="4" font-weight="700" fill="#B8863A">OR 7.74</text>
      <text x="715" y="20" fill="#456676" font-size="10.5">response (95% CI 3.9-15.2)</text>
    </g>

    <!-- 5. MIRACLE-AF - HR 0.64 (favors intervention, lower HR = better) - visualize as "reduction" -->
    <g transform="translate(0,330)">
      <text x="10" y="4" font-weight="700" fill="#B8863A">MIRACLE-AF (rural China)</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Cluster-RCT · Nature Medicine 2025</text>
      <line x1="410" y1="0" x2="480" y2="0" stroke="#B8863A" stroke-width="2.5"/>
      <circle cx="445" cy="0" r="9" fill="#B8863A"/>
      <text x="495" y="4" font-weight="700" fill="#B8863A">HR 0.64</text>
      <text x="495" y="20" fill="#456676" font-size="10.5">CV events (95% CI 0.50-0.82)</text>
    </g>

    <!-- 6. Hickey Kenya/Uganda - RD 26% at 24w -->
    <g transform="translate(0,390)">
      <text x="10" y="4" font-weight="700" fill="#B8863A">Hickey CHW-telehealth HTN</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Pilot RCT · PLoS Med 2025</text>
      <line x1="410" y1="0" x2="500" y2="0" stroke="#B8863A" stroke-width="2.5"/>
      <circle cx="455" cy="0" r="9" fill="#B8863A"/>
      <text x="515" y="4" font-weight="700" fill="#B8863A">+26 pp</text>
      <text x="515" y="20" fill="#456676" font-size="10.5">BP control at 24 wks (95% CI 14-38)</text>
    </g>

    <!-- 7. SMARTER BMJ - SBP -7.64 mmHg -->
    <g transform="translate(0,450)">
      <text x="10" y="4" font-weight="700" fill="#2E7D3F">SMARTER (rural China)</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Cluster-RCT · BMJ 2025</text>
      <line x1="405" y1="0" x2="460" y2="0" stroke="#2E7D3F" stroke-width="2.5"/>
      <circle cx="435" cy="0" r="9" fill="#2E7D3F"/>
      <text x="475" y="4" font-weight="700" fill="#2E7D3F">-7.64 mmHg</text>
      <text x="475" y="20" fill="#456676" font-size="10.5">SBP reduction (p&lt;0.001)</text>
    </g>

    <!-- 8. VITAL - aOR 1.18 non-inferiority -->
    <g transform="translate(0,510)">
      <text x="10" y="4" font-weight="700" fill="#7A4A9A">VITAL (rural Lesotho)</text>
      <text x="10" y="20" fill="#456676" font-size="10.5">Non-inferiority cluster-RCT · EClinicalMedicine 2026</text>
      <line x1="370" y1="0" x2="415" y2="0" stroke="#7A4A9A" stroke-width="2.5"/>
      <circle cx="395" cy="0" r="9" fill="#7A4A9A"/>
      <text x="430" y="4" font-weight="700" fill="#7A4A9A">aOR 1.18</text>
      <text x="430" y="20" fill="#456676" font-size="10.5">viral suppression (non-inferior)</text>
    </g>

  </g>

  <!-- Journal color legend -->
  <g transform="translate(20,540)" font-family="system-ui,sans-serif" font-size="11">
    <g transform="translate(0,0)"><circle cx="6" cy="0" r="6" fill="#005C8A"/><text x="18" y="4" fill="#456676">Lancet family</text></g>
    <g transform="translate(130,0)"><circle cx="6" cy="0" r="6" fill="#2E7D3F"/><text x="18" y="4" fill="#456676">BMJ</text></g>
    <g transform="translate(200,0)"><circle cx="6" cy="0" r="6" fill="#7A4A9A"/><text x="18" y="4" fill="#456676">EClinicalMedicine</text></g>
    <g transform="translate(340,0)"><circle cx="6" cy="0" r="6" fill="#B8863A"/><text x="18" y="4" fill="#456676">Adjacent journals (JAMA, PLoS Med, Nature Med, AJP)</text></g>
  </g>
</svg>`;

const matrixSvg = `<svg viewBox="0 0 900 540" role="img" aria-labelledby="matrix-title matrix-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="matrix-title">Adoption readiness matrix for Alaska</title>
  <desc id="matrix-desc">Two-by-two matrix plotting evidence strength against Alaska adoption fit for six rural telemedicine intervention categories.</desc>

  <rect x="0" y="0" width="900" height="540" fill="#FFFFFF"/>

  <!-- Axis labels -->
  <text x="450" y="30" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#003E52">Alaska adoption fit (TeleDirectMD operational scope)</text>
  <text x="30" y="270" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#003E52" transform="rotate(-90 30 270)">Evidence strength</text>

  <!-- Axis arrows -->
  <line x1="90" y1="480" x2="850" y2="480" stroke="#003E52" stroke-width="1.5" marker-end="url(#mArrow)"/>
  <line x1="90" y1="480" x2="90" y2="60" stroke="#003E52" stroke-width="1.5" marker-end="url(#mArrow)"/>
  <defs>
    <marker id="mArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#003E52"/>
    </marker>
  </defs>

  <!-- Axis end labels -->
  <text x="90" y="500" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#456676">Low fit</text>
  <text x="840" y="500" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#456676">High fit</text>
  <text x="70" y="65" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" fill="#456676">High</text>
  <text x="70" y="475" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" fill="#456676">Low</text>

  <!-- Quadrant shading -->
  <rect x="470" y="60" width="380" height="210" fill="#E9F5EC" opacity="0.65"/>
  <text x="660" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#2E7D3F" opacity="0.85">HIGH EVIDENCE × HIGH FIT</text>
  <text x="660" y="106" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#2E7D3F" opacity="0.7" font-style="italic">Adopt now</text>

  <rect x="470" y="270" width="380" height="210" fill="#FFF4E5" opacity="0.65"/>
  <text x="660" y="300" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#8A4600" opacity="0.85">LOW EVIDENCE × HIGH FIT</text>
  <text x="660" y="316" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#8A4600" opacity="0.7" font-style="italic">Adopt as evidence-informed</text>

  <rect x="90" y="60" width="380" height="210" fill="#EAF0F2" opacity="0.65"/>
  <text x="280" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#456676" opacity="0.85">HIGH EVIDENCE × LOW FIT</text>
  <text x="280" y="106" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#456676" opacity="0.7" font-style="italic">Partner-model only</text>

  <rect x="90" y="270" width="380" height="210" fill="#F5F5F5" opacity="0.65"/>
  <text x="280" y="300" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#7A7A7A" opacity="0.85">LOW EVIDENCE × LOW FIT</text>
  <text x="280" y="316" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#7A7A7A" opacity="0.7" font-style="italic">Skip</text>

  <!-- Data points -->
  <g font-family="system-ui,sans-serif" font-size="11">
    <!-- Async specialty referral: high evidence, low-med fit (partner) -->
    <g transform="translate(340,150)">
      <circle cx="0" cy="0" r="14" fill="#005C8A"/>
      <text x="0" y="4" text-anchor="middle" font-weight="700" fill="#FFFFFF">1</text>
      <text x="22" y="4" fill="#003E52" font-weight="600">Async specialty referral (partnership)</text>
    </g>

    <!-- Chronic titration HTN: high evidence, high fit -->
    <g transform="translate(730,170)">
      <circle cx="0" cy="0" r="14" fill="#005C8A"/>
      <text x="0" y="4" text-anchor="middle" font-weight="700" fill="#FFFFFF">2</text>
      <text x="-155" y="-22" fill="#003E52" font-weight="600" text-anchor="middle">HTN telemedicine titration</text>
    </g>

    <!-- Chronic titration HFrEF: high evidence, medium fit -->
    <g transform="translate(600,190)">
      <circle cx="0" cy="0" r="14" fill="#B8863A"/>
      <text x="0" y="4" text-anchor="middle" font-weight="700" fill="#FFFFFF">3</text>
      <text x="22" y="4" fill="#003E52" font-weight="600">HFrEF titration (needs cardiology backstop)</text>
    </g>

    <!-- Rural depression collab care: high evidence, medium fit -->
    <g transform="translate(560,230)">
      <circle cx="0" cy="0" r="14" fill="#B8863A"/>
      <text x="0" y="4" text-anchor="middle" font-weight="700" fill="#FFFFFF">4</text>
      <text x="22" y="4" fill="#003E52" font-weight="600">Rural depression tele-collab care</text>
    </g>

    <!-- Continuity for stable chronic (VITAL): high evidence, high fit -->
    <g transform="translate(770,220)">
      <circle cx="0" cy="0" r="14" fill="#7A4A9A"/>
      <text x="0" y="4" text-anchor="middle" font-weight="700" fill="#FFFFFF">5</text>
      <text x="-160" y="24" fill="#003E52" font-weight="600" text-anchor="middle">Multi-month dispensing + async messaging</text>
    </g>

    <!-- Wildfire smoke telehealth: LOW evidence, HIGH fit -->
    <g transform="translate(750,360)">
      <circle cx="0" cy="0" r="14" fill="#C4551E"/>
      <text x="0" y="4" text-anchor="middle" font-weight="700" fill="#FFFFFF">6</text>
      <text x="-150" y="-22" fill="#003E52" font-weight="600" text-anchor="middle">Wildfire smoke respiratory step-up</text>
      <text x="-150" y="-8" fill="#8A4600" font-size="10" text-anchor="middle" font-style="italic">(evidence-informed only)</text>
    </g>
  </g>

  <!-- Legend -->
  <g transform="translate(90,520)" font-family="system-ui,sans-serif" font-size="10.5">
    <g transform="translate(0,0)"><circle cx="7" cy="0" r="7" fill="#005C8A"/><text x="20" y="4" fill="#456676">RCT proven</text></g>
    <g transform="translate(120,0)"><circle cx="7" cy="0" r="7" fill="#B8863A"/><text x="20" y="4" fill="#456676">RCT supported, adaptation needed</text></g>
    <g transform="translate(340,0)"><circle cx="7" cy="0" r="7" fill="#7A4A9A"/><text x="20" y="4" fill="#456676">Non-inferiority RCT</text></g>
    <g transform="translate(500,0)"><circle cx="7" cy="0" r="7" fill="#C4551E"/><text x="20" y="4" fill="#456676">Consensus / mechanistic only</text></g>
  </g>
</svg>`;

export default function RuralTelemedicineAlaskaEvidence() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="tdmd-ce-wrap">
        <div className="tdmd-ce-container">
          <nav className="tdmd-ce-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/clinical-evidence/">Clinical Evidence</a>
            <span>›</span>
            <span aria-current="page">Rural Telemedicine Evidence Review for Alaska</span>
          </nav>

          <figure className="tdmd-ce-hero" dangerouslySetInnerHTML={{ __html: heroSvg }} />

          <header className="tdmd-ce-header">
            <span className="tdmd-ce-badge">Evidence Review · Physician-Authored</span>
            <h1 className="tdmd-ce-title">Rural Telemedicine Evidence Review for Alaska</h1>
            <p className="tdmd-ce-sub">
              A structured review of peer-reviewed randomized trials and systematic reviews in the <em>New England
              Journal of Medicine</em>, <em>The Lancet</em> family, <em>BMJ</em>, and <em>EClinicalMedicine</em> on
              rural telemedicine efficacy and wildfire-smoke respiratory intervention. Study designs, primary outcomes,
              population demographics, and effect sizes are documented, followed by adoption-readiness analysis for
              remote Alaska.
            </p>
            <div className="tdmd-ce-meta">
              <span>Author: Parth Bhavsar, MD</span>
              <span>Published: August 13, 2026</span>
              <span>Last reviewed: August 13, 2026</span>
            </div>
          </header>

          <section className="tdmd-ce-body">

            <div className="tdmd-ce-tldr">
              <h2 id="tldr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                TL;DR
              </h2>
              <p>
                Two adoption-ready protocols are supported by high-quality randomized evidence for rural Alaska. First,
                asynchronous specialty referral through a store-and-forward pathway is Alaska-specific and cluster-RCT
                proven, with the 2022 <em>Lancet Global Health</em> Hearing Norton Sound trial cutting the access gap in
                half and accelerating time-to-diagnosis by 17.6-fold.<sup><a href="#ce-1">[1]</a></sup> Second,
                telemedicine-based collaborative care for depression in rural federally qualified health centers
                outperforms on-site collaborative care at 18 months.<sup><a href="#ce-2">[2]</a></sup> Two more protocols
                are compelling but require adaptation: telephone-based guideline-directed medical therapy titration for
                heart failure with reduced ejection fraction, and CHW-facilitated telehealth for moderate-severe
                hypertension. Wildfire-smoke telehealth is best supported by mechanistic and epidemiologic evidence with
                consensus guidance, not by randomized trials.
              </p>
            </div>

            <h2 id="scope">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Scope and Methods
            </h2>
            <p>
              Peer-reviewed randomized trials and systematic reviews from the <em>New England Journal of Medicine</em>,
              the <em>Lancet</em> family (including <em>Lancet Global Health</em>, <em>Lancet Regional Health</em>, and{' '}
              <em>Lancet Digital Health</em>), <em>BMJ</em>, and <em>EClinicalMedicine</em>. A small number of
              high-signal adjacent-journal studies (<em>Nature Medicine</em>, <em>PLoS Medicine</em>, <em>JAMA Internal
              Medicine</em>) are included where they carry direct implications for Alaska. Emphasis on 2022 through
              2026. Primary sources fetched directly; every claim below carries a URL to a primary source.
            </p>

            <h2 id="headline-trials">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 15 8l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
              Headline Trials
            </h2>

            <figure className="tdmd-ce-figure">
              <div className="tdmd-ce-figtitle">Effect sizes at a glance across nine headline trials</div>
              <div dangerouslySetInnerHTML={{ __html: forestPlotSvg }} />
              <figcaption>
                Primary outcome effect sizes and (where reported) 95% confidence intervals across the headline rural
                telemedicine and telehealth trials referenced in this review. Journal families are color-coded. The
                Alaska-specific Hearing Norton Sound trial sits at the widest effect size (event-time ratio 17.6 for
                time-to-follow-up), followed by Hózhó (Navajo GDMT uptake) and the Fortney rural depression trial.
              </figcaption>
            </figure>

            <div className="tdmd-ce-trialcard ce-tr-lancet">
              <span className="tdmd-ce-trialflag ce-fl-lancet">Lancet Global Health · 2022 · Alaska</span>
              <h3>Hearing Norton Sound (Alaska)</h3>
              <p>
                Emmett SD, Platt A, Turner EL, et al.<sup><a href="#ce-1">[1]</a></sup> Cluster-randomized controlled
                trial across 15 rural Bering Strait communities, 2017 to 2019. 1,481 children (grades K to 12),
                predominantly Alaska Native, 790 requiring referral. Intervention: mHealth hearing screen plus
                store-and-forward specialty referral to Anchorage ENT and audiology through a shared EHR. Comparator:
                standard primary-care referral pathway. Primary outcome: time to ear or hearing follow-up. Effect:
                follow-up within 9 months <span className="tdmd-ce-effect">68.5% vs 32.1%</span>; mean days to
                follow-up 41.5 vs 92.0; adjusted event-time ratio{' '}
                <span className="tdmd-ce-effect">17.6 (95% CI 6.8–45.3; p=0.002)</span>. No adverse events. The
                preschool ancillary trial (n=153) replicated the effect (RR 1.57, 95% CI 1.22 to 2.01).
                <sup><a href="#ce-3">[3]</a></sup>
              </p>
              <p>
                This is the only randomized trial to date that has demonstrated telemedicine can close a rural U.S.
                access disparity in Alaska specifically. The mixed-methods follow-up identified the four factors that
                distinguished high-performing communities: clinic capacity, personnel ownership and engagement,
                communication, and awareness.<sup><a href="#ce-4">[4]</a></sup> Scheduling and equipment were not
                consistently associated with outcomes.
              </p>
            </div>

            <div className="tdmd-ce-trialcard ce-tr-adjacent">
              <span className="tdmd-ce-trialflag ce-fl-adjacent">Nature Medicine · 2025 · Rural China</span>
              <h3>MIRACLE-AF</h3>
              <p>
                Cluster-RCT, 30 village clinics 1:1, 34 months mean follow-up. 1,039 rural adults aged 65 and over with
                atrial fibrillation. Village-doctor-led integrated care with telemedicine linkage to specialists.
                Integrated-care adherence at 12 months <span className="tdmd-ce-effect">33.1% vs 8.7%</span>{' '}
                (p&lt;0.001). Composite cardiovascular events 6.2% vs 9.6% per year, hazard ratio{' '}
                <span className="tdmd-ce-effect">HR 0.64 (95% CI 0.50–0.82, p&lt;0.001)</span>.
                <sup><a href="#ce-5">[5]</a></sup>
              </p>
            </div>

            <div className="tdmd-ce-trialcard ce-tr-bmj">
              <span className="tdmd-ce-trialflag ce-fl-bmj">BMJ · 2025 · Rural China</span>
              <h3>SMARTER</h3>
              <p>
                Cluster-RCT, 127 villages across 5 provinces, 4,533 adults aged 35 and over with elevated
                cardiovascular risk. Village-doctor-delivered mobile health intervention with education, monitoring,
                and gamification. Predicted 10-year ASCVD risk change: intervention -6.3% vs control -4.2%
                (between-group{' '}
                <span className="tdmd-ce-effect">-1.88pp, 95% CI -2.57 to -1.19, p&lt;0.001</span>). Systolic BP
                reduction was <span className="tdmd-ce-effect">7.64 mmHg</span> greater in the intervention arm
                (p&lt;0.001).<sup><a href="#ce-6">[6]</a></sup>
              </p>
            </div>

            <div className="tdmd-ce-trialcard ce-tr-adjacent">
              <span className="tdmd-ce-trialflag ce-fl-adjacent">JAMA Intern Med · 2024 · Navajo Nation</span>
              <h3>Hózhó</h3>
              <p>
                Stepped-wedge pragmatic trial across 2 Indian Health Service facilities. Adults with HFrEF in rural
                Navajo Nation. Telephone-based remote initiation and titration of guideline-directed medical therapy.
                Primary outcome: increase in GDMT drug classes filled at 30 days. Result:{' '}
                <span className="tdmd-ce-effect">66.2% vs 13.1%</span> (OR 12.99; 95% CI 6.87 to 24.53; p&lt;0.001).
                Number-needed-to-treat 1.88.<sup><a href="#ce-7">[7]</a></sup> This is the closest published U.S. rural
                analogue for what an adult primary-care telehealth practice can operationalize outside of a specialty
                center.
              </p>
            </div>

            <div className="tdmd-ce-trialcard ce-tr-eclin">
              <span className="tdmd-ce-trialflag ce-fl-eclin">EClinicalMedicine · 2026 · Rural Lesotho</span>
              <h3>VITAL</h3>
              <p>
                Pragmatic parallel-group non-inferiority cluster-RCT, 18 rural nurse-led clinics, 5,770 adults on
                antiretroviral therapy. Clinician clinical decision support plus individualized SMS plus telemedicine
                plus multi-month ART dispensing. Viral suppression at 24 months{' '}
                <span className="tdmd-ce-effect">77.9% vs 74.3%</span> (aOR 1.18, 95% CI 0.95 to 1.46). Disengagement
                from care <span className="tdmd-ce-effect">aOR 0.67 (95% CI 0.48–0.93)</span>.
                <sup><a href="#ce-8">[8]</a></sup>
              </p>
            </div>

            <div className="tdmd-ce-trialcard ce-tr-adjacent">
              <span className="tdmd-ce-trialflag ce-fl-adjacent">PLoS Medicine · 2025 · Kenya/Uganda</span>
              <h3>Hickey CHW-Facilitated Telehealth</h3>
              <p>
                Pilot RCT, 200 adults aged 40 and over with moderate-severe hypertension (BP 160/100 or higher) at 3
                rural primary health centers. Clinician-driven, community-health-worker-facilitated telehealth vs
                clinic-based care. BP control at 24 weeks <span className="tdmd-ce-effect">77% vs 51%</span> (risk
                difference 26%, 95% CI 14% to 38%, p&lt;0.001). BP control at 48 weeks{' '}
                <span className="tdmd-ce-effect">86% vs 44%</span> (RD 42%, 95% CI 30% to 53%, p&lt;0.001).
                <sup><a href="#ce-9">[9]</a></sup>
              </p>
            </div>

            <div className="tdmd-ce-trialcard ce-tr-adjacent">
              <span className="tdmd-ce-trialflag ce-fl-adjacent">Am J Psychiatry · 2013 · Rural US FQHCs</span>
              <h3>Fortney Rural Depression Trial</h3>
              <p>
                Multi-site pragmatic RCT, 364 depressed adults at rural federally qualified health centers, 18-month
                follow-up. Off-site telephone care manager plus tele-pharmacist plus tele-psychologist plus
                tele-psychiatrist. Response <span className="tdmd-ce-effect">OR 7.74 (95% CI 3.94–15.20, p&lt;0.0001)</span>.
                Remission <span className="tdmd-ce-effect">OR 12.69 (95% CI 4.81–33.46, p&lt;0.0001)</span>.
                <sup><a href="#ce-2">[2]</a></sup> Older but still the highest-quality U.S. rural depression telehealth
                RCT.
              </p>
            </div>

            <div className="tdmd-ce-trialcard ce-tr-lancet">
              <span className="tdmd-ce-trialflag ce-fl-lancet">J Telemed Telecare · 2022 · Systematic Review</span>
              <h3>Totten Provider-to-Provider Telehealth Systematic Review</h3>
              <p>
                Systematic review of 97 effectiveness studies of rural provider-to-provider telehealth. Outcomes were
                similar or better vs care without telehealth for inpatient consultations, neonatal care, outpatient
                depression and diabetes, and emergency care.<sup><a href="#ce-10">[10]</a></sup>
              </p>
            </div>

            <h2 id="wildfire-smoke">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              Wildfire Smoke and Telehealth
            </h2>
            <p>
              Direct randomized trial evidence for telehealth as an intervention during wildfire smoke events is
              limited to one small feasibility trial (67 young adults with asthma over 8 weeks). What is
              well-established is that wildfire smoke PM2.5 causes acute increases in asthma emergency department
              visits and hospital admissions, and long-term exposure is linked to incident heart failure in Medicare
              cohorts (hazard ratio 1.014 per microgram per cubic meter of 2-year average smoke PM2.5, 95% CI 1.007 to
              1.020).<sup><a href="#ce-11">[11]</a></sup><sup><a href="#ce-12">[12]</a></sup> Fire-smoke PM2.5 appears
              more cardiotoxic per microgram than non-fire PM2.5.
            </p>
            <p>
              Consensus operational guidance from the Australian Centre of Excellence in Severe Asthma, the U.S. EPA,
              and Canadian public-health agencies is to substitute telehealth for face-to-face visits during smoke
              events for asthma, COPD, and pregnancy, verify inhaler technique by video, and refresh written action
              plans before smoke season. Alaska-specific note: the boreal fire regime and Interior Alaska&#39;s
              inversion behavior produce longer-duration smoke exposures than most Lower 48 events, which strengthens
              the rationale for telehealth-supported step-up management during multi-week smoke stretches.
              <sup><a href="#ce-13">[13]</a></sup>
            </p>

            <h2 id="cross-journal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Cross-Journal Comparison
            </h2>

            <div className="tdmd-ce-jgrid">
              <div className="tdmd-ce-jcard ce-j-nejm">
                <div className="ce-j-flag">NEJM</div>
                <h4>Volume: very low</h4>
                <ul>
                  <li>Perspectives only in the review window</li>
                  <li>Volandes 2025 on AI-enabled rural care<sup><a href="#ce-14">[14]</a></sup></li>
                  <li><strong>Alaska use:</strong> framing only</li>
                </ul>
              </div>
              <div className="tdmd-ce-jcard ce-j-lancet">
                <div className="ce-j-flag">Lancet family</div>
                <h4>Volume: highest</h4>
                <ul>
                  <li>Hearing Norton Sound (Alaska) is the anchor trial</li>
                  <li>Global, esp. LMIC coverage</li>
                  <li><strong>Alaska use:</strong> directly actionable</li>
                </ul>
              </div>
              <div className="tdmd-ce-jcard ce-j-bmj">
                <div className="ce-j-flag">BMJ</div>
                <h4>Volume: moderate</h4>
                <ul>
                  <li>SMARTER cluster-RCT</li>
                  <li>Cluster-RCT and protocol papers</li>
                  <li><strong>Alaska use:</strong> SBP effects transferable</li>
                </ul>
              </div>
              <div className="tdmd-ce-jcard ce-j-eclin">
                <div className="ce-j-flag">EClinicalMedicine</div>
                <h4>Volume: moderate</h4>
                <ul>
                  <li>VITAL non-inferiority cluster-RCT</li>
                  <li>Pragmatic, LMIC-heavy</li>
                  <li><strong>Alaska use:</strong> multi-month dispensing model</li>
                </ul>
              </div>
            </div>

            <h2 id="alaska-mapping">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Interventions Mapped to Alaska Rural Health Challenges
            </h2>

            <figure className="tdmd-ce-figure">
              <div className="tdmd-ce-figtitle">Adoption readiness matrix</div>
              <div dangerouslySetInnerHTML={{ __html: matrixSvg }} />
              <figcaption>
                Six rural telemedicine intervention categories plotted by evidence strength and Alaska adoption fit
                given TeleDirectMD&#39;s operational scope (adult primary and urgent care, no controlled substances,
                complementary to CHA/P). Green quadrant is adopt-now; orange is adopt-as-evidence-informed; gray is
                partner-model only.
              </figcaption>
            </figure>

            <div className="tdmd-ce-table-wrap">
              <table className="tdmd-ce-table">
                <thead>
                  <tr>
                    <th>Challenge</th>
                    <th>Evidence-supported intervention</th>
                    <th>Primary evidence</th>
                    <th>Adoption readiness in Alaska</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Loss to follow-up after specialty referral</td>
                    <td>Store-and-forward async specialty referral through shared EHR</td>
                    <td>Emmett 2022<sup><a href="#ce-1">[1]</a></sup></td>
                    <td>High, as partnership with regional Tribal Health corporation</td>
                  </tr>
                  <tr>
                    <td>Rural depression, PTSD, alcohol use disorder</td>
                    <td>Off-site collaborative care with tele-psychiatry</td>
                    <td>Fortney 2013<sup><a href="#ce-2">[2]</a></sup></td>
                    <td>Medium; requires contracted tele-psychiatry</td>
                  </tr>
                  <tr>
                    <td>HFrEF titration and hypertension in remote areas</td>
                    <td>Phone/video-driven GDMT titration with async pharmacy coordination</td>
                    <td>Hózhó Navajo 2024<sup><a href="#ce-7">[7]</a></sup>, Hickey 2025<sup><a href="#ce-9">[9]</a></sup></td>
                    <td>High for hypertension, moderate for HFrEF pending cardiology backstop</td>
                  </tr>
                  <tr>
                    <td>Wildfire smoke exacerbations (Interior Alaska, June to August)</td>
                    <td>
                      Pre-season action-plan refresh, video inhaler technique check, smoke-season virtual triage
                    </td>
                    <td>Consensus guidance; Reid 2025<sup><a href="#ce-13">[13]</a></sup>, Lei 2024<sup><a href="#ce-11">[11]</a></sup></td>
                    <td>High operationally; evidence-informed rather than trial-proven</td>
                  </tr>
                  <tr>
                    <td>Long-term wildfire smoke cardiovascular morbidity</td>
                    <td>Population-level BP and HF screening with follow-up titration</td>
                    <td>Hao 2025<sup><a href="#ce-12">[12]</a></sup>, SMARTER 2025<sup><a href="#ce-6">[6]</a></sup></td>
                    <td>Medium; requires screening-to-treatment pathway</td>
                  </tr>
                  <tr>
                    <td>Continuity for stable chronic-disease patients</td>
                    <td>Async messaging plus multi-month dispensing</td>
                    <td>VITAL 2026<sup><a href="#ce-8">[8]</a></sup></td>
                    <td>High; consistent with standard practice patterns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="protocols">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              Adoption-Ready Protocols
            </h2>

            <div className="tdmd-ce-protocolgrid">
              <div className="tdmd-ce-protocol">
                <span className="ce-conf ce-conf-info">Protocol A</span>
                <h3>Wildfire-smoke season respiratory readiness</h3>
                <p className="ce-p-evidence">Evidence-informed. No rural RCT.</p>
                <p>
                  April-May pre-season outreach, refreshed written action plan, video inhaler-technique verification,
                  rescue and controller inhaler prescriptions confirmed, oral steroid burst reserved for red-zone use
                  per action plan, AirNow and DEC air-quality alert enrollment. Same-day virtual slots during AQI 150+
                  events. Escalation to nearest hub ED or medevac for airway or breathing red flags.
                </p>
              </div>

              <div className="tdmd-ce-protocol">
                <span className="ce-conf ce-conf-high">Protocol B · High confidence</span>
                <h3>Async specialty-adjacent referral partnership</h3>
                <p className="ce-p-evidence">Emmett 2022 cluster-RCT + North STAR + Appalachian STAR.</p>
                <p>
                  TeleDirectMD as the adult primary-care node pushing async referrals to Tribal Health specialists in a
                  partnership model. See the{' '}
                  <a href="/partners/tribal-health-alaska/">Alaska Tribal Health Partnership Brief</a>.
                </p>
              </div>

              <div className="tdmd-ce-protocol">
                <span className="ce-conf ce-conf-medhigh">Protocol C · Medium-high confidence</span>
                <h3>Chronic disease titration for adult rural Alaskans</h3>
                <p className="ce-p-evidence">Hózhó, SMARTER, Fortney.</p>
                <p>
                  Titration protocols per condition (hypertension, T2DM, hyperlipidemia, HFrEF non-controlled).
                  Two-week virtual follow-up for first 60 days of any new or uptitrated regimen. Video inhaler or
                  injector technique check at visits 1 and 3. HFrEF titration requires a documented cardiology backstop
                  before ARNI or SGLT2 initiation off in-person exam.
                </p>
              </div>

              <div className="tdmd-ce-protocol">
                <span className="ce-conf ce-conf-medhigh">Protocol D · Medium-high confidence</span>
                <h3>Continuity for stable chronic conditions</h3>
                <p className="ce-p-evidence">VITAL 2026.</p>
                <p>
                  Multi-month (90-day) dispensing plus async messaging. Simple, transferable, already standard practice
                  for stable adult primary care. Operational pattern applies broadly to Alaska rural chronic-disease
                  populations.
                </p>
              </div>
            </div>

            <h2 id="limits">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              What the Evidence Does Not Support
            </h2>
            <ul>
              <li>
                Remote monitoring alone (device plus dashboard, no titration protocol) as a superior model. It is
                non-inferior, not superior, in most rural populations.
              </li>
              <li>
                Wildfire-smoke-specific mobile app interventions as evidence-based clinical care. Feasibility data only.
              </li>
              <li>
                Video primary care as a full substitute for the CHA/P layer in bush Alaska. The successful models plug
                into the CHA/P layer, not around it.
              </li>
              <li>
                A citable NEJM rural telehealth RCT in the 2022 to 2026 window. Volandes 2025 is a perspective, not a
                trial.<sup><a href="#ce-14">[14]</a></sup>
              </li>
            </ul>

            <h2 id="disclosures">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Author, Disclosures, and Methods Notes
            </h2>
            <p>
              Author: Parth Bhavsar, MD, board-certified in family medicine. Founder and Medical Director of
              TeleDirectMD, a physician-led telemedicine practice licensed in Alaska and 40 additional states.
              Disclosures: no external funding was received for this review. TeleDirectMD is a for-profit telemedicine
              practice; this review supports its Alaska partnership and clinical protocol work. Every claim in this
              review is linked to a primary source; readers are encouraged to verify the citations directly. Corrections
              or additional citation suggestions may be sent to{' '}
              <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>.
            </p>

            <div className="tdmd-ce-callout">
              <div className="tdmd-ce-callout-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                Related pages
              </div>
              <ul>
                <li>
                  <a href="/health-guides/alaska-wildfire-smoke-respiratory-guide/">
                    Alaska Wildfire Smoke and Your Lungs (patient-facing field guide)
                  </a>
                </li>
                <li>
                  <a href="/partners/tribal-health-alaska/">Alaska Tribal Health Partnership Brief</a>
                </li>
                <li>
                  <a href="/health-guides/wildfire-smoke-health-guide/">
                    Wildfire Smoke and Your Health (general patient guide)
                  </a>
                </li>
              </ul>
            </div>

            <div className="tdmd-ce-refs">
              <h2>References</h2>
              <ol>
                <li id="ce-1">
                  Emmett SD, Platt A, Turner EL, et al. Mobile health school screening and telemedicine referral to
                  improve access to specialty care in rural Alaska: a cluster-randomised controlled trial.{' '}
                  <em>Lancet Glob Health</em>. 2022;10(7):e1023-e1033.{' '}
                  <a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(22)00184-X/fulltext" target="_blank" rel="noopener">
                    Lancet Global Health
                  </a>
                </li>
                <li id="ce-2">
                  Fortney JC, Pyne JM, Mouden SB, et al. Practice-Based Versus Telemedicine-Based Collaborative Care for
                  Depression in Rural Federally Qualified Health Centers. <em>Am J Psychiatry</em>. 2013;170(4):414-425.{' '}
                  <a href="https://psychiatryonline.org/doi/10.1176/appi.ajp.2012.12050696" target="_blank" rel="noopener">
                    DOI: 10.1176/appi.ajp.2012.12050696
                  </a>
                </li>
                <li id="ce-3">
                  Robler SK, Platt A, Turner EL, et al. Telemedicine Referral to Improve Access to Specialty Care for
                  Preschool Children in Rural Alaska: A Cluster-Randomized Controlled Trial. <em>Ear Hear</em>.
                  2023;44(5):1240-1250.{' '}
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10583927/" target="_blank" rel="noopener">
                    PMC10583927
                  </a>
                </li>
                <li id="ce-4">
                  Robler SK, Inglis-Jenson M, Gallo JJ, et al. Mobile Health School Screening and Telemedicine Referral
                  to Improve Access to Specialty Care in Rural Alaska: Integrating Mixed Methods Data to Contextualize
                  Trial Outcomes. <em>Ear Hear</em>. 2023;44(5):1271-1281.
                </li>
                <li id="ce-5">
                  Liu W, Li M, Peng Z, et al. Telemedicine-based integrated management of atrial fibrillation in village
                  clinics: a cluster randomized trial. <em>Nat Med</em>. 2025.{' '}
                  <a href="https://www.nature.com/articles/s41591-025-03511-2" target="_blank" rel="noopener">
                    Nature Medicine
                  </a>
                </li>
                <li id="ce-6">
                  Zhang X, Wang S, Zhou X, et al. A village doctor-led mobile health intervention for cardiovascular
                  risk reduction in rural China: cluster randomised controlled trial. <em>BMJ</em>. 2025;389:e082765.{' '}
                  <a href="https://www.bmj.com/content/389/bmj-2024-082765" target="_blank" rel="noopener">
                    BMJ
                  </a>
                </li>
                <li id="ce-7">
                  Telephone-Based Guideline-Directed Medical Therapy Optimization in Navajo Nation: The Hózhó
                  Randomized Clinical Trial. <em>JAMA Intern Med</em>. 2024;184(6):681-690.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/38583185/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
                <li id="ce-8">
                  Integrating clinical decision support and mobile health for differentiated HIV service delivery in
                  Lesotho (VITAL): a cluster-randomised non-inferiority trial. <em>EClinicalMedicine</em>.
                  2026;94:103850.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/42005925/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
                <li id="ce-9">
                  Hickey MD, Owaraganise A, Ogachi S, et al. Community health worker-facilitated telehealth for
                  moderate-severe hypertension care in Kenya and Uganda: A randomized controlled trial.{' '}
                  <em>PLoS Med</em>. 2025;22(6):e1004632.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/40472026/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
                <li id="ce-10">
                  Totten AM, Womack DM, Griffin JC, et al. Telehealth-guided provider-to-provider communication to
                  improve rural health: A systematic review. <em>J Telemed Telecare</em>. 2022.{' '}
                  <a href="https://journals.sagepub.com/doi/10.1177/1357633X221139892" target="_blank" rel="noopener">
                    J Telemed Telecare
                  </a>
                </li>
                <li id="ce-11">
                  Lei Y, Lei TH, Lu C, Zhang X, Wang F. Wildfire Smoke: Health Effects, Mechanisms, and Mitigation.{' '}
                  <em>Environ Sci Technol</em>. 2024;58(48):21097-21119.{' '}
                  <a href="https://pubs.acs.org/doi/10.1021/acs.est.4c06653" target="_blank" rel="noopener">
                    DOI: 10.1021/acs.est.4c06653
                  </a>
                </li>
                <li id="ce-12">
                  Hao H, Xu K, Zhang D, et al. Long-Term Wildfire Smoke Exposure and Increased Risk of Heart Failure in
                  Older Adults. <em>J Am Coll Cardiol</em>. 2025.{' '}
                  <a href="https://linkinghub.elsevier.com/retrieve/pii/S0735109725064046" target="_blank" rel="noopener">
                    DOI: 10.1016/j.jacc.2025.04.058
                  </a>
                </li>
                <li id="ce-13">
                  Reid CE, et al. Wildfire and asthma: prospective interventions. 2025.{' '}
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12441628/" target="_blank" rel="noopener">
                    PMC12441628
                  </a>
                </li>
                <li id="ce-14">
                  Volandes AE, Davis AD, Goldstein NE. From Bandwidth to Bedside: Bringing AI-Enabled Care to Rural
                  America. <em>N Engl J Med</em>. 2025 Nov 29. DOI: 10.1056/NEJMp2509491.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/41324243/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
