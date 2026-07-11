import { getAggregateRating, getReviewBlock } from '../../lib/review-schema';
import FaqAccordion from '../components/FaqAccordion';
import { COMPARE_PAGE_SLUGS } from '../../lib/compare-pages-config';

export const metadata = {
  title: 'TeleDirectMD vs. Other Telehealth Services — 2026 Comparisons',
  description:
    'Side-by-side comparisons of TeleDirectMD ($79 flat, MD-only, 43 states) vs. Teladoc, MDLIVE, Amwell, Doctor on Demand, Sesame, K Health, HealthTap, and Walgreens Virtual. Sourced, honest, updated May 2026.',
  alternates: { canonical: 'https://teledirectmd.com/compare' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'TeleDirectMD vs. Other Telehealth Services — 2026 Comparisons',
    description:
      'Sourced 2026 comparisons: TeleDirectMD vs. Teladoc, MDLIVE, Amwell, Doctor on Demand, Sesame, K Health, HealthTap, Walgreens Virtual.',
    url: 'https://teledirectmd.com/compare',
  },
};

const BASE_URL = 'https://teledirectmd.com';

// Competitor catalog for hub page grid
const COMPETITOR_CATALOG = [
  {
    slug: 'teledirectmd-vs-teladoc',
    name: 'TeleDirectMD vs. Teladoc',
    tdmdWin: '$79 vs. $89 — 44% cheaper',
    compWin: 'All 50 states; mental health',
    desc: 'Teladoc is the largest US telehealth platform by visit volume. TeleDirectMD is cheaper for cash-pay urgent care and guarantees an MD on every visit.',
  },
  {
    slug: 'teledirectmd-vs-mdlive',
    name: 'TeleDirectMD vs. MDLIVE',
    tdmdWin: 'MD-only model; no membership',
    compWin: 'MDLIVE has broader insurer integration',
    desc: 'MDLIVE is backed by Cigna and widely distributed through employer benefits. TeleDirectMD offers a lower cash-pay rate and physician-led visits.',
  },
  {
    slug: 'teledirectmd-vs-amwell',
    name: 'TeleDirectMD vs. Amwell',
    tdmdWin: '$79 flat vs. $85+ at Amwell',
    compWin: 'Amwell has mental health and dermatology',
    desc: 'Amwell offers a wider service menu including therapy and dermatology. TeleDirectMD focuses on urgent care and chronic medication refills at a lower price.',
  },
  {
    slug: 'teledirectmd-vs-doctor-on-demand',
    name: 'TeleDirectMD vs. Doctor on Demand',
    tdmdWin: 'Lower cash-pay cost; no subscription',
    compWin: 'Doctor on Demand has psychiatry',
    desc: 'Doctor on Demand (now part of Included Health) focuses on primary and behavioral care. TeleDirectMD is narrower in scope but cheaper for urgent visits.',
  },
  {
    slug: 'teledirectmd-vs-sesame',
    name: 'TeleDirectMD vs. Sesame',
    tdmdWin: 'Named MD; same-day; no marketplace search',
    compWin: 'Sesame has in-person provider network',
    desc: 'Sesame is a marketplace where patients browse and book individual providers. TeleDirectMD is a direct-to-patient practice with one named physician.',
  },
  {
    slug: 'teledirectmd-vs-k-health',
    name: 'TeleDirectMD vs. K Health',
    tdmdWin: 'No AI triage; physician-led from the start',
    compWin: 'K Health has $29 membership plan',
    desc: 'K Health uses AI symptom assessment before connecting you with a clinician. TeleDirectMD starts with a live physician evaluation — no algorithm between you and the doctor.',
  },
  {
    slug: 'teledirectmd-vs-healthtap',
    name: 'TeleDirectMD vs. HealthTap',
    tdmdWin: '$79 flat vs. HealthTap membership tiers',
    compWin: 'HealthTap offers ongoing primary care plans',
    desc: 'HealthTap positions as an ongoing primary care relationship with annual and monthly plans. TeleDirectMD is pay-per-visit with no subscription required.',
  },
  {
    slug: 'teledirectmd-vs-walgreens-virtual',
    name: 'TeleDirectMD vs. Walgreens Virtual',
    tdmdWin: 'MD-only; broader state coverage',
    compWin: 'Walgreens Virtual integrates with retail pharmacy pickup',
    desc: 'Walgreens Virtual Health Care offers retail pharmacy integration. TeleDirectMD sends prescriptions to any pharmacy and is available in more states.',
  },
];

const FAQS = [
  {
    question: 'How does TeleDirectMD compare on price to other telehealth services?',
    answer:
      'TeleDirectMD charges a flat $79 per self-pay visit — no membership, no per-feature charges, no subscription. Teladoc charges $89 per visit (no-insurance pricing, Teladoc.com), Amwell charges $85+, and some platforms like K Health offer membership tiers that can be cheaper for very frequent users. For a single urgent care visit without insurance, TeleDirectMD is generally the lowest or tied-lowest price among physician-staffed platforms. Sesame and similar marketplaces sometimes list individual providers at lower prices but those are often NPs or PAs, not MDs.',
  },
  {
    question: 'Is TeleDirectMD an MD-only practice?',
    answer:
      'Yes. Every visit at TeleDirectMD is conducted by Dr. Parth Bhavsar, a board-certified Family Medicine physician (NPI 1104323203). No nurse practitioners, no physician assistants, no AI triage that replaces the physician. Many competing platforms — including Teladoc, MDLIVE, and Amwell — actively hire NPs and PAs for urgent care visits and do not allow patients to select their provider type. If seeing an actual MD matters to you, TeleDirectMD is the only major telehealth platform that guarantees it.',
  },
  {
    question: 'Which telehealth service covers the most states?',
    answer:
      'Teladoc covers all 50 states. TeleDirectMD is available in 43 states + Washington DC — it does not currently serve Alaska, Hawaii, New York, Massachusetts, Rhode Island, New Mexico, Oregon, or Arkansas. MDLIVE, Amwell, and Doctor on Demand also cover most states. If you are in one of the eight states TeleDirectMD does not serve, you will need to use a different platform or in-person care.',
  },
  {
    question: 'Which telehealth service accepts the most insurance plans?',
    answer:
      'Teladoc has the broadest insurance integration — it is embedded in many employer benefits programs and accepts a wide range of plans. TeleDirectMD accepts Aetna, Blue Cross Blue Shield, and UnitedHealthcare commercial plans in select states. Both are in-network with the same three major insurers in most overlapping markets. For patients with specific plans not listed, self-pay at TeleDirectMD ($79) may still be cheaper than an in-network urgent care copay at competing platforms.',
  },
  {
    question: 'Does TeleDirectMD offer mental health services like its competitors?',
    answer:
      'No. TeleDirectMD focuses exclusively on acute urgent care and chronic medication refills for physical health conditions. The practice does not offer therapy, psychiatry, or psychology services. If you need mental health support, Teladoc (therapy from $119/visit), Doctor on Demand, or a dedicated behavioral telehealth platform is the appropriate choice. TeleDirectMD physicians will always refer patients to appropriate mental health resources if it comes up during a visit.',
  },
  {
    question: 'Which telehealth service is best for urgent care without insurance?',
    answer:
      'For self-pay urgent care — UTI, sinus infection, strep throat, pink eye — TeleDirectMD at $79 is the lowest flat-rate physician-staffed option among the major platforms. Teladoc is $89, Amwell is $85+, and Doctor on Demand is comparable or higher. K Health has a $29 monthly membership that includes unlimited visits, which is cheaper per-visit for frequent users but requires ongoing commitment. For a single visit with no subscription, TeleDirectMD wins on price.',
  },
  {
    question: 'How do I switch from another telehealth service to TeleDirectMD?',
    answer:
      'No paperwork is required. Book at teledirectmd.com/book-online, complete the intake form, and bring your current medication list and any relevant recent lab results to the visit. TeleDirectMD does not require records from your previous telehealth service, though having them helps the physician give you the best evaluation. If you are switching for an ongoing medication refill, bring the name of the medication, the dose, and the prescribing provider.',
  },
  {
    question: 'Does TeleDirectMD use AI to diagnose?',
    answer:
      'No. TeleDirectMD does not use AI symptom checkers or chatbots as a first step in evaluation. Every visit begins with a live video connection to Dr. Bhavsar. Some platforms like K Health lead patients through an AI-driven symptom assessment before connecting to a clinician; others use asynchronous chat. TeleDirectMD\u2019s model is a real-time, synchronous physician evaluation — the same standard used in a traditional urgent care clinic.',
  },
];

const COST_BARS = [
  { label: 'TeleDirectMD', value: '$79', pct: 3, tdmd: true },
  { label: 'Amwell / MDLIVE', value: '$85\u2013$89', pct: 3.3, tdmd: false },
  { label: 'Teladoc', value: '$89', pct: 3.5, tdmd: false },
  { label: 'Urgent Care', value: '$200', pct: 7.5, tdmd: false },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/compare#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Compare', item: `${BASE_URL}/compare/` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/compare#webpage`,
      url: `${BASE_URL}/compare/`,
      name: 'TeleDirectMD vs. Other Telehealth Services — 2026 Comparisons',
      description:
        'Hub page for 8 sourced side-by-side comparisons of TeleDirectMD vs. major telehealth competitors. Updated May 2026.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': `${BASE_URL}/compare#breadcrumbs` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      reviewedBy: { '@id': `${BASE_URL}/#physician` },
      lastReviewed: '2026-05-23',
      hasPart: COMPETITOR_CATALOG.map((c) => ({
        '@type': 'WebPage',
        '@id': `${BASE_URL}/compare/${c.slug}/`,
        url: `${BASE_URL}/compare/${c.slug}/`,
        name: c.name,
        description: c.desc,
      })),
    },
    {
      '@type': 'MedicalOrganization',
      '@id': `${BASE_URL}/#organization`,
      name: 'TeleDirectMD',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.webp`,
      telephone: '+1-678-956-1855',
      email: 'contact@teledirectmd.com',
      priceRange: '$79',
      medicalSpecialty: ['Family Medicine', 'Urgent Care', 'Telemedicine'],
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA', 'Aetna', 'Blue Cross Blue Shield', 'UnitedHealthcare'],
      currenciesAccepted: 'USD',
      aggregateRating: getAggregateRating(),
    },
    {
      '@type': 'Physician',
      '@id': `${BASE_URL}/#physician`,
      name: 'Parth Bhavsar, MD',
      url: `${BASE_URL}/about`,
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      ...getReviewBlock(),
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/compare#faqpage`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

const PAGE_CSS = `
  :root{--tdmd-teal:#006b73;--tdmd-navy:#003e52;--tdmd-accent:#ff5a36;--tdmd-bg-soft:#f3fafb;--tdmd-border:#dde3e6;--tdmd-text:#12323a;--tdmd-muted:#4b5f66;--tdmd-card:#ffffff;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.06);--tdmd-radius:18px;}
  @media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}}
  :root[data-theme="dark"]{--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}
  .cmp-wrap{max-width:1100px;margin:0 auto;padding:0 1.5rem 4rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--tdmd-text);}
  .cmp-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .cmp-hero-inner{max-width:1100px;margin:0 auto;padding:0 1.5rem;}
  .cmp-bc{font-size:0.88rem;color:var(--tdmd-muted);margin-bottom:1.25rem;}
  .cmp-bc a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .cmp-bc span{margin:0 0.4rem;}
  .cmp-h1{font-size:clamp(1.75rem,4vw,2.4rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.02em;line-height:1.2;color:var(--tdmd-text);}
  .cmp-lead{font-size:1.05rem;line-height:1.65;max-width:72ch;margin:0 0 1.25rem;color:var(--tdmd-text);}
  .cmp-badge-row{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-bottom:1.25rem;}
  .cmp-badge{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:999px;padding:0.3rem 0.85rem;font-size:0.88rem;font-weight:700;color:var(--tdmd-navy);}
  .cmp-badge--accent{background:var(--tdmd-accent);color:#fff;border-color:var(--tdmd-accent);}
  .cmp-ctas{display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.25rem;}
  .cmp-btn{display:inline-block;padding:0.65rem 1.5rem;border-radius:999px;font-weight:700;font-size:0.95rem;text-decoration:none;text-align:center;}
  .cmp-btn-primary{background:var(--tdmd-teal);color:#fff;}
  .cmp-btn-outline{border:2px solid var(--tdmd-teal);color:var(--tdmd-teal);background:var(--tdmd-card);}
  .cmp-reviewed{font-size:0.85rem;color:var(--tdmd-muted);margin:0.5rem 0 0;}
  .cmp-reviewed a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .cmp-section{padding:2.5rem 0;}
  .cmp-h2{font-size:clamp(1.3rem,3vw,1.75rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.01em;color:var(--tdmd-text);}
  .cmp-h3{font-size:1.15rem;font-weight:700;margin:0 0 0.5rem;color:var(--tdmd-navy);}
  .cmp-p{font-size:1rem;line-height:1.7;margin:0 0 1rem;color:var(--tdmd-text);}
  .cmp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.1rem;margin-top:1rem;}
  .cmp-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.2rem 1.3rem;box-shadow:var(--tdmd-shadow);text-decoration:none;color:var(--tdmd-text);display:block;transition:border-color .2s;}
  .cmp-card:hover{border-color:var(--tdmd-teal);}
  .cmp-card-title{font-weight:800;font-size:1.05rem;color:var(--tdmd-navy);margin:0 0 0.4rem;letter-spacing:-0.01em;}
  .cmp-card-desc{font-size:0.88rem;color:var(--tdmd-muted);line-height:1.45;margin:0 0 0.65rem;}
  .cmp-card-wins{display:grid;gap:0.3rem;font-size:0.82rem;}
  .cmp-win-tdmd{color:var(--tdmd-teal);font-weight:700;}
  .cmp-win-comp{color:var(--tdmd-accent);font-weight:600;}
  .cmp-card-arrow{display:inline-block;margin-top:0.6rem;font-size:0.82rem;color:var(--tdmd-teal);font-weight:700;}
  .cmp-table-wrap{overflow-x:auto;margin-top:1rem;}
  .cmp-table{width:100%;border-collapse:collapse;font-size:0.9rem;}
  .cmp-table th,.cmp-table td{border:1px solid var(--tdmd-border);padding:0.6rem 0.75rem;vertical-align:top;text-align:left;}
  .cmp-table th{background:var(--tdmd-bg-soft);font-weight:800;color:var(--tdmd-navy);}
  .cmp-table td:nth-child(2){font-weight:700;color:var(--tdmd-teal);}
  .cmp-two-col{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem;}
  .cmp-info-box{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.25rem 1.4rem;box-shadow:var(--tdmd-shadow);}
  .cmp-info-box--teal{border-top:4px solid var(--tdmd-teal);}
  .cmp-info-box--accent{border-top:4px solid var(--tdmd-accent);}
  .cmp-list{padding-left:1.25rem;margin:0.5rem 0;display:grid;gap:0.4rem;font-size:0.96rem;line-height:1.55;}
  .cmp-vbars{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;align-items:end;padding:1.5rem 0.5rem 0.5rem;border-bottom:2px solid var(--tdmd-border);min-height:240px;margin-top:1rem;}
  .tdmd-vbar{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:200px;position:relative;}
  .tdmd-vbar__value{font-weight:800;color:var(--tdmd-navy);font-size:0.9rem;margin-bottom:0.3rem;text-align:center;line-height:1.2;white-space:nowrap;}
  .tdmd-vbar__fill{width:100%;max-width:100px;border-radius:10px 10px 0 0;background:linear-gradient(180deg,rgba(0,62,82,.85) 0%,rgba(0,107,115,.65) 100%);min-height:8px;}
  .tdmd-vbar__fill--tdmd{background:linear-gradient(180deg,var(--tdmd-accent) 0%,#ff8a6e 100%);box-shadow:0 0 0 3px rgba(255,90,54,.15);}
  .tdmd-vbar__label{margin-top:0.6rem;padding-top:0.5rem;border-top:1px solid var(--tdmd-border);font-weight:700;color:var(--tdmd-text);font-size:0.78rem;text-align:center;line-height:1.3;width:100%;}
  .tdmd-vbar__label--tdmd{color:var(--tdmd-accent);}
  .cmp-cost-note{margin-top:0.75rem;font-size:0.88rem;color:var(--tdmd-muted);}
  .cmp-link-cloud{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-top:1rem;}
  .cmp-link-cloud a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;font-size:0.95rem;}
  .cmp-link-cloud a:hover{color:var(--tdmd-teal);}
  .cmp-cta-bar{margin-top:2.5rem;background:linear-gradient(135deg,rgba(0,107,115,.08),rgba(0,62,82,.04));border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius);padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;}
  .cmp-cta-bar h3{margin:0;font-size:1.15rem;font-weight:800;letter-spacing:-0.01em;}
  .cmp-cta-bar p{margin:0.35rem 0 0;color:var(--tdmd-muted);font-size:0.95rem;max-width:62ch;}
  .cmp-cta-bar-actions{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;}
  .cmp-divider{border:none;border-top:1px solid var(--tdmd-border);margin:2rem 0;}
  @media(max-width:768px){.cmp-two-col{grid-template-columns:1fr;}.cmp-vbars{gap:0.4rem;min-height:200px;padding:1rem 0.2rem 0.5rem;}.tdmd-vbar{height:160px;}.tdmd-vbar__value{font-size:0.7rem;}.tdmd-vbar__label{font-size:0.65rem;}}
  @media(max-width:520px){.cmp-grid{grid-template-columns:1fr;}}
`;

export default function CompareHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* Hero */}
      <div className="cmp-hero">
        <div className="cmp-hero-inner">
          <nav className="cmp-bc" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Compare</span>
          </nav>
          <h1 className="cmp-h1">TeleDirectMD vs. Other Telehealth Services</h1>
          <p className="cmp-lead">
            Choosing the right telehealth platform depends on price, provider type, state availability, insurance coverage,
            and the specific conditions you need treated. This hub provides eight sourced, side-by-side comparisons of TeleDirectMD
            against the most widely used telehealth services in 2026. Each comparison page cites the source URL for every competitor
            claim so you can verify independently.
          </p>
          <p className="cmp-lead">
            <strong>TeleDirectMD at a glance:</strong> $79 flat self-pay, board-certified MD on every visit (Dr. Parth Bhavsar,
            NPI&nbsp;1104323203), 43 states + DC, no membership required, select Aetna / BCBS / UHC insurance accepted, same-day
            appointments including evenings and weekends.
          </p>
          <div className="cmp-badge-row">
            <span className="cmp-badge cmp-badge--accent">$79 Flat</span>
            <span className="cmp-badge">MD-Only Model</span>
            <span className="cmp-badge">43 States + DC</span>
            <span className="cmp-badge">No Membership</span>
            <span className="cmp-badge">Verified Pricing</span>
          </div>
          <div className="cmp-ctas">
            <a href="/book-online" className="cmp-btn cmp-btn-primary">Book a $79 Visit</a>
            <a href="/cost" className="cmp-btn cmp-btn-outline">Cost Guides</a>
          </div>
          <p className="cmp-reviewed">
            Medically reviewed by{' '}
            <a href="/about">Parth Bhavsar, MD</a>
            {' '}(NPI&nbsp;1104323203) &mdash; Last reviewed: May 23, 2026
          </p>
        </div>
      </div>

      <div className="cmp-wrap">

        {/* Comparison Catalog Grid */}
        <section className="cmp-section" aria-labelledby="catalog-heading">
          <h2 id="catalog-heading" className="cmp-h2">All 8 Comparison Pages</h2>
          <p className="cmp-p">
            Each comparison page provides a 10-row side-by-side table, a pricing deep-dive, a provider quality analysis,
            a prescription handling comparison, a who-wins-for-what breakdown, and 8 FAQs. All competitor prices and features
            are sourced with direct links to the competitor&apos;s own website or verified third-party sources. Last verified: April&ndash;May 2026.
          </p>
          <div className="cmp-grid">
            {COMPETITOR_CATALOG.map((c) => (
              <a key={c.slug} href={`/compare/${c.slug}`} className="cmp-card">
                <p className="cmp-card-title">{c.name}</p>
                <p className="cmp-card-desc">{c.desc}</p>
                <div className="cmp-card-wins">
                  <span className="cmp-win-tdmd">&#10003; TDMD: {c.tdmdWin}</span>
                  <span className="cmp-win-comp">&#9656; Competitor: {c.compWin}</span>
                </div>
                <span className="cmp-card-arrow">Full comparison &rarr;</span>
              </a>
            ))}
          </div>
        </section>

        <hr className="cmp-divider" />

        {/* Master comparison table */}
        <section className="cmp-section" aria-labelledby="master-table-heading">
          <h2 id="master-table-heading" className="cmp-h2">Master Comparison: Key Dimensions Across Platforms</h2>
          <p className="cmp-p">
            The table below summarizes where TeleDirectMD stands against the major platforms on the dimensions that matter most
            to self-pay and insured patients. All TeleDirectMD values are based on current published pricing and the practice&apos;s
            established operating model as of May 2026. Competitor values link to source pages in the individual comparison articles.
          </p>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>TeleDirectMD</th>
                  <th>Teladoc</th>
                  <th>MDLIVE</th>
                  <th>Amwell</th>
                  <th>K Health</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cash-pay urgent care</td>
                  <td>$79 flat</td>
                  <td>$89/visit</td>
                  <td>$82+/visit</td>
                  <td>$85+/visit</td>
                  <td>$29/mo membership</td>
                </tr>
                <tr>
                  <td>Provider type</td>
                  <td>MD only (Dr. Bhavsar)</td>
                  <td>MD + NP/PA mix</td>
                  <td>MD + NP/PA mix</td>
                  <td>MD + NP/PA mix</td>
                  <td>MD + NP/PA mix</td>
                </tr>
                <tr>
                  <td>States covered</td>
                  <td>43 + DC</td>
                  <td>All 50</td>
                  <td>Most states</td>
                  <td>Most states</td>
                  <td>Most states</td>
                </tr>
                <tr>
                  <td>Mental health</td>
                  <td>Not offered</td>
                  <td>Yes ($119+)</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>Membership required</td>
                  <td>No</td>
                  <td>No</td>
                  <td>No</td>
                  <td>No</td>
                  <td>For best price</td>
                </tr>
                <tr>
                  <td>Insurance accepted</td>
                  <td>Aetna, BCBS, UHC (select)</td>
                  <td>Many major plans</td>
                  <td>Cigna + others</td>
                  <td>Many major plans</td>
                  <td>Select plans</td>
                </tr>
                <tr>
                  <td>HSA / FSA accepted</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Same-day availability</td>
                  <td>Yes (evenings/weekends)</td>
                  <td>24/7</td>
                  <td>24/7</td>
                  <td>24/7</td>
                  <td>24/7</td>
                </tr>
                <tr>
                  <td>Controlled substances</td>
                  <td>Not prescribed</td>
                  <td>Not prescribed</td>
                  <td>Not prescribed</td>
                  <td>Not prescribed</td>
                  <td>Not prescribed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="cmp-cost-note">
            Competitor prices verified April&ndash;May 2026 from each platform&apos;s published no-insurance pricing page. Individual comparison
            pages contain direct source links. Mental health and membership plan details vary; see comparison pages for specifics.
          </p>
        </section>

        <hr className="cmp-divider" />

        {/* Price comparison chart */}
        <section className="cmp-section" aria-labelledby="price-heading">
          <h2 id="price-heading" className="cmp-h2">Cash-Pay Urgent Care Price Comparison</h2>
          <p className="cmp-p">
            For a self-pay, single urgent care visit (UTI, sinus infection, strep throat, pink eye), TeleDirectMD offers the lowest
            flat rate among major physician-staffed telehealth platforms. The chart below compares published cash-pay prices.
            Note that K Health&apos;s low cost requires a monthly subscription; the per-visit equivalent is higher for infrequent users.
          </p>
          <div className="cmp-vbars" aria-label="Cash-pay urgent care price comparison">
            {COST_BARS.map((bar) => {
              const heightPct = Math.round((bar.pct / 7.5) * 100);
              return (
                <div key={bar.label} className="tdmd-vbar">
                  <div className="tdmd-vbar__value">{bar.value}</div>
                  <div
                    className={`tdmd-vbar__fill${bar.tdmd ? ' tdmd-vbar__fill--tdmd' : ''}`}
                    style={{ height: `${Math.max(heightPct, 5)}%` }}
                    role="img"
                    aria-label={`${bar.label}: ${bar.value}`}
                  />
                  <div className={`tdmd-vbar__label${bar.tdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>
                    {bar.label}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="cmp-cost-note">
            TeleDirectMD: $79 flat (published pricing, teledirectmd.com). Teladoc: $89/visit (teladochealth.com/start/no-insurance).
            Amwell/MDLIVE: $85&ndash;$89+ based on published no-insurance rates. Prices may vary. See individual comparison pages for cited source links.
          </p>
        </section>

        <hr className="cmp-divider" />

        {/* Why MD-only matters */}
        <section className="cmp-section" aria-labelledby="md-heading">
          <h2 id="md-heading" className="cmp-h2">Why the MD-Only Model Is Different</h2>
          <p className="cmp-p">
            The single most distinctive feature of TeleDirectMD relative to all its major competitors is the MD-only model.
            Teladoc, MDLIVE, Amwell, Doctor on Demand, and most other large platforms actively hire nurse practitioners (NPs)
            and physician assistants (PAs) for urgent care visits. Patients typically cannot select their provider type — they
            see whoever is available. This is not a criticism: NPs and PAs are excellent clinicians and are clinically appropriate
            for the vast majority of routine acute conditions.
          </p>
          <p className="cmp-p">
            The difference matters in a specific context: patients who want the clinical depth and diagnostic training of an MD
            on every visit, particularly for presentations that are ambiguous or complex. Dr. Parth Bhavsar is a board-certified
            Family Medicine physician (NPI&nbsp;1104323203) who completed medical school and residency, passed board examinations,
            and maintains active board certification. He is the only provider at TeleDirectMD. When you book a visit, you know
            exactly who you will see.
          </p>
          <p className="cmp-p">
            For patients with high-deductible plans or no insurance who are paying out of pocket, this physician-led model
            is available at $79 — less than Teladoc&apos;s $89 rate and comparable to or below most competitors.
          </p>
          <div className="cmp-two-col">
            <div className="cmp-info-box cmp-info-box--teal">
              <h3 className="cmp-h3">Choose TeleDirectMD if:</h3>
              <ul className="cmp-list">
                <li>You want a board-certified MD (not an NP or PA) on every visit</li>
                <li>You are paying cash-pay and want the lowest flat rate among physician-staffed platforms</li>
                <li>You are in one of the 43 states + DC TeleDirectMD serves</li>
                <li>You need urgent care, a medication refill, or a common acute condition treated</li>
                <li>You do not need mental health, psychiatry, or dermatology</li>
              </ul>
            </div>
            <div className="cmp-info-box cmp-info-box--accent">
              <h3 className="cmp-h3">Choose a competitor if:</h3>
              <ul className="cmp-list">
                <li>You need 24/7 overnight access (TeleDirectMD is same-day with evenings/weekends)</li>
                <li>You are in AK, HI, NY, MA, RI, VT, NM, OR, or AR (not currently served)</li>
                <li>You need therapy, psychiatry, or behavioral health services</li>
                <li>Teladoc or MDLIVE is included in your employer benefits at $0 copay</li>
                <li>You need dermatology, in-person visits, or specialist care</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="cmp-divider" />

        {/* Insurance across platforms */}
        <section className="cmp-section" aria-labelledby="insurance-heading">
          <h2 id="insurance-heading" className="cmp-h2">Insurance Acceptance Across Platforms</h2>
          <p className="cmp-p">
            Both TeleDirectMD and its major competitors accept select commercial insurance plans. Teladoc has the broadest
            integration — it is embedded in many employer benefits programs and accepts plans from Aetna, BCBS, UHC, Cigna,
            Humana, and others. TeleDirectMD accepts Aetna, BCBS, and UHC commercial plans in a growing number of states.
          </p>
          <p className="cmp-p">
            The key question is not which platform accepts more insurers, but which produces the lower copay for <em>your specific plan</em>.
            A TeleDirectMD in-network visit under your Aetna PPO may have a $20 copay; the same visit at Teladoc might have a $40 copay
            depending on your specific benefit tier. Check your plan&apos;s Explanation of Benefits (EOB) or call the member services number
            on your card before booking. TeleDirectMD&apos;s <a href="/insurance">insurance page</a> lists current accepted plans by state.
          </p>
          <p className="cmp-p">
            Patients without in-network coverage can always book self-pay at TeleDirectMD for $79 and submit an out-of-network
            claim to their insurer for potential partial reimbursement. HSA and FSA cards are accepted.
          </p>
        </section>

        <hr className="cmp-divider" />

        {/* Prescriptions */}
        <section className="cmp-section" aria-labelledby="rx-heading">
          <h2 id="rx-heading" className="cmp-h2">Prescription Handling: How Each Platform Compares</h2>
          <p className="cmp-p">
            All major telehealth platforms, including TeleDirectMD, send e-prescriptions to your pharmacy of choice.
            None prescribe controlled substances (DEA Schedule II&ndash;V) for urgent care conditions — this is consistent
            industry practice because federal law requires an in-person visit prior to prescribing controlled substances
            via telemedicine (with narrow exceptions). TeleDirectMD is explicit about not prescribing any controlled substances.
          </p>
          <p className="cmp-p">
            What differentiates TeleDirectMD is turnaround speed: most e-prescriptions reach the pharmacy within 30 minutes
            of the visit ending. Patients are encouraged to use GoodRx, Amazon Pharmacy, or Cost Plus Drugs to compare
            generic prices across pharmacies — the platform is pharmacy-agnostic.
          </p>
          <p className="cmp-p">
            For a detailed prescription comparison with each competitor, read the relevant individual comparison page linked in
            the catalog grid above.
          </p>
        </section>

        <hr className="cmp-divider" />

        {/* FAQ */}
        <section className="cmp-section" aria-labelledby="faq-heading">
          <FaqAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
            sectionTitle="Frequently Asked Questions About Telehealth Comparisons"
            sectionId="faq"
          />
        </section>

        {/* Related links */}
        <section className="cmp-section" aria-labelledby="related-heading">
          <h2 id="related-heading" className="cmp-h2">Related Resources</h2>
          <div className="cmp-link-cloud">
            <a href="/cost">Cost Guides by Condition</a>
            <a href="/insurance">Insurance &amp; Pricing</a>
            <a href="/symptoms">Symptoms Directory</a>
            <a href="/faq">FAQ</a>
            <a href="/about">About Dr. Bhavsar, MD</a>
            <a href="/states-we-serve">States We Serve</a>
            <a href="/what-we-treat">All Conditions</a>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="cmp-cta-bar">
          <div>
            <h3>Try TeleDirectMD: $79 flat, same-day, board-certified MD</h3>
            <p>No membership, no hidden fees. Aetna, BCBS, and UHC also accepted in select states. HSA/FSA welcome.</p>
          </div>
          <div className="cmp-cta-bar-actions">
            <a href="/book-online" className="cmp-btn cmp-btn-primary">Book Online Now</a>
            <a href="/faq" className="cmp-btn cmp-btn-outline">FAQs</a>
          </div>
        </div>

      </div>
    </>
  );
}
