// Shared renderer for the condition total-cost pages (UTI, sinus infection,
// sore throat and strep, flu). Content and numbers live in lib/condition-cost-data.js.
// Design follows app/cost/urgent-care-cost-without-insurance: white page, plain
// tables, navy and coral only, no badges or tiles.

import FaqAccordion from './FaqAccordion';
import { darkCSS } from '../../lib/dark-css';
import {
  CONDITION_COST_PAGES,
  CONDITION_COST_CHECKED,
  REF_LIBRARY,
  longDate,
} from '../../lib/condition-cost-data';

const BASE_URL = 'https://teledirectmd.com';

// ── Tiny rich-text renderer: **bold**, [[ref-id]] citations, [label](/internal-path) links.
const TOKEN = /(\*\*[^*]+\*\*|\[\[ref-[a-z0-9-]+\]\]|\[[^\]]+\]\(\/[^)\s]*\))/g;

function rich(text, refNum, keyBase = 'r') {
  return text.split(TOKEN).filter(Boolean).map((part, i) => {
    const key = `${keyBase}-${i}`;
    if (part.startsWith('**')) return <strong key={key}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('[[')) {
      const id = part.slice(2, -2);
      const n = refNum(id);
      if (!n) throw new Error(`ConditionCostPage: citation ${id} is not in this page's refs`);
      return (
        <sup key={key} className="ccx-cite">
          <a href={`#${id}`} aria-label={`Reference ${n}`}>[{n}]</a>
        </sup>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
    if (link) return <a key={key} href={link[2]}>{link[1]}</a>;
    return part;
  });
}

// Plain text for JSON-LD and FAQ answers: drop citations and markup.
export function plain(text) {
  return text
    .replace(/\s?\[\[ref-[a-z0-9-]+\]\]/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '$1')
    .replace(/\s+([.,;])/g, '$1');
}

function pageUrl(cfg) {
  return `${BASE_URL}/cost/${cfg.slug}/`;
}

export function conditionCostMetadata(slug) {
  const cfg = CONDITION_COST_PAGES[slug];
  const url = pageUrl(cfg);
  return {
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'article',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: cfg.title,
      description: cfg.metaDescription,
      url,
      images: [{ url: `${BASE_URL}${cfg.ogImage}`, width: 1200, height: 630, alt: cfg.ogTitle }],
    },
    twitter: { card: 'summary_large_image', title: cfg.title, description: cfg.metaDescription, images: [`${BASE_URL}${cfg.ogImage}`] },
  };
}

function faqItems(cfg) {
  return cfg.faqs.map((f) => ({ ...f, answer: f.answer === 'QUICK' ? plain(cfg.quickAnswer) : f.answer }));
}

function buildJsonLd(cfg) {
  const url = pageUrl(cfg);
  const author = {
    '@type': 'Physician',
    '@id': `${BASE_URL}/about/#parth-bhavsar`,
    name: 'Parth Bhavsar, MD',
    medicalSpecialty: 'FamilyMedicine',
    url: `${BASE_URL}/about/`,
    sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203'],
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: `${BASE_URL}/cost/` },
          { '@type': 'ListItem', position: 3, name: cfg.breadcrumb, item: url },
        ],
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#webpage`,
        url,
        name: cfg.title,
        description: cfg.metaDescription,
        inLanguage: 'en-US',
        image: `${BASE_URL}${cfg.ogImage}`,
        dateModified: CONDITION_COST_CHECKED,
        lastReviewed: CONDITION_COST_CHECKED,
        author,
        reviewedBy: author,
        publisher: { '@type': 'MedicalOrganization', '@id': `${BASE_URL}/#organization`, name: 'TeleDirectMD', url: `${BASE_URL}/` },
        audience: { '@type': 'PeopleAudience', audienceType: 'Patients' },
        about: { '@type': 'Thing', name: cfg.about },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#quick-answer'] },
        breadcrumb: { '@id': `${url}#breadcrumbs` },
        citation: cfg.refs.map((id) => ({ '@type': 'CreativeWork', name: REF_LIBRARY[id].text, url: REF_LIBRARY[id].url })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqItems(cfg).map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };
}

function Table({ table, refNum, keyBase }) {
  return (
    <div className="ccx-table-wrap" role="region" aria-label={table.ariaLabel} tabIndex={0}>
      <table className="ccx-table">
        <thead>
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={`${keyBase}-${ri}`}>
              <th scope="row">{rich(row[0], refNum, `${keyBase}-${ri}-h`)}</th>
              {row.slice(1).map((cell, ci) => (
                <td key={ci} className={ci === 0 ? 'ccx-num' : undefined}>
                  {rich(cell, refNum, `${keyBase}-${ri}-${ci}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ConditionCostPage({ slug }) {
  const cfg = CONDITION_COST_PAGES[slug];
  if (!cfg) throw new Error(`ConditionCostPage: unknown slug ${slug}`);
  const refNum = (id) => cfg.refs.indexOf(id) + 1;
  const checked = longDate(CONDITION_COST_CHECKED);
  const jsonLd = buildJsonLd(cfg);

  return (
    <div className="ccx">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="ccx-wrap">
        <nav className="ccx-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/cost/">Cost Guides</a>
          <span aria-hidden="true">›</span>
          <span>{cfg.breadcrumb}</span>
        </nav>

        <header className="ccx-head">
          <h1 className="ccx-h1">{cfg.title}</h1>
          <p className="ccx-sub">{cfg.sub}</p>
          <div className="ccx-meta">
            Written and medically reviewed by <a href="/about/">Parth Bhavsar, MD</a>, board-certified family medicine
            physician. Data checked {checked}.
          </div>
        </header>

        <section id="quick-answer" className="ccx-answer" aria-labelledby="quick-answer-h">
          <h2 id="quick-answer-h" className="ccx-answer-label">The short answer</h2>
          <p>{rich(cfg.quickAnswer, refNum, 'qa')}</p>
        </section>

        {cfg.sections.map((sec) => (
          <section key={sec.id} className="ccx-sec" aria-labelledby={`${sec.id}-h`}>
            <h2 id={`${sec.id}-h`} className="ccx-h2">{sec.h2}</h2>
            {sec.byline ? <p className="ccx-byline">By Parth Bhavsar, MD</p> : null}
            {(sec.paras || []).map((p, i) => (
              <p key={i}>{rich(p, refNum, `${sec.id}-p${i}`)}</p>
            ))}
            {sec.table ? <Table table={sec.table} refNum={refNum} keyBase={sec.id} /> : null}
            {sec.note ? <p className="ccx-note">{rich(sec.note, refNum, `${sec.id}-n`)}</p> : null}
          </section>
        ))}

        <section className="ccx-sec ccx-tdmd" aria-labelledby="tdmd-h">
          <h2 id="tdmd-h" className="ccx-h2">{cfg.tdmd.h2}</h2>
          <p>{rich(cfg.tdmd.body, refNum, 'tdmd')}</p>
          <p>
            {cfg.tdmd.links.map((l, i) => (
              <span key={l.href}>
                {i > 0 ? ' · ' : null}
                <a href={l.href}>{l.label}</a>
              </span>
            ))}
          </p>
          <a href="/book-online/" className="ccx-cta">
            Book a $79 video visit
          </a>
        </section>

        <section className="ccx-sec" aria-labelledby="faq-h">
          <span id="faq-h" className="ccx-sr">Frequently asked questions</span>
          <FaqAccordion items={faqItems(cfg)} sectionTitle="Frequently asked questions" sectionId="faq" />
        </section>

        <section className="ccx-sec ccx-method" aria-labelledby="method-h">
          <h2 id="method-h" className="ccx-h2">How we built these numbers</h2>
          <ul>
            <li>
              Visit benchmarks: Medicare 2026 national non-facility amounts, total relative value units multiplied by the
              2026 conversion factor ($33.4009). Medicare amounts are not self-pay prices.
            </li>
            <li>
              Medicine: CMS NADAC per-unit cost for the generic (or brand, where marked) tablet or capsule, multiplied by
              the quantity in a standard adult course from the cited guideline. NADAC is what pharmacies pay, not the
              counter price.
            </li>
            <li>Employer plan figures are quoted as published, with their data year.</li>
            <li>
              Not included: lab test prices (no free public source without license restrictions), retail drug coupon
              prices, crowd-sourced price lists, and price figures from sources whose terms do not allow reuse.
            </li>
            <li>Refresh schedule: Medicare rates every January 1, NADAC monthly, guidelines when CDC or IDSA update them.</li>
          </ul>
          {cfg.related?.length ? (
            <p className="ccx-related">
              Related:{' '}
              {cfg.related.map((l, i) => (
                <span key={l.href}>
                  {i > 0 ? ' · ' : null}
                  <a href={l.href}>{l.label}</a>
                </span>
              ))}
            </p>
          ) : null}
        </section>

        <section className="ccx-sec" aria-labelledby="refs-h">
          <h2 id="refs-h" className="ccx-h2">References</h2>
          <ol className="ccx-refs">
            {cfg.refs.map((id) => (
              <li key={id} id={id}>
                {REF_LIBRARY[id].text}{' '}
                <a href={REF_LIBRARY[id].url} rel="noopener" target="_blank">
                  {REF_LIBRARY[id].url.replace(/^https:\/\//, '')}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <p className="ccx-disclaimer">
          Prices vary by clinic, pharmacy, location and plan. Figures on this page are dated benchmarks from the sources
          cited, not quotes or guarantees of what you will pay. This page is general information and not medical advice
          for your situation.
        </p>
      </div>
    </div>
  );
}

const CSS = `
.ccx{--ccx-navy:#003E52;--ccx-ink:#16242b;--ccx-muted:#4f5f67;--ccx-bg:#ffffff;--ccx-line:#dfe5e8;--ccx-coral:#ff5a36;--ccx-coral-ink:#1a0b06;--ccx-teal:#0C8F99;
  background:var(--ccx-bg);color:var(--ccx-ink);font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.65;padding:8px 0 56px}
.ccx *{box-sizing:border-box}
.ccx-wrap{max-width:860px;margin:0 auto;padding:0 20px}
.ccx a{color:var(--ccx-navy);text-underline-offset:2px}
.ccx-crumbs{display:flex;flex-wrap:wrap;gap:6px;font-size:14px;color:var(--ccx-muted);padding:18px 0 6px}
.ccx-crumbs a{color:var(--ccx-muted)}
.ccx-head{padding:10px 0 18px;border-bottom:1px solid var(--ccx-line);margin-bottom:24px}
.ccx-h1{font-family:'Fraunces',Georgia,serif;font-weight:600;color:var(--ccx-navy);font-size:clamp(30px,5vw,44px);line-height:1.14;letter-spacing:-.01em;margin:8px 0 12px}
.ccx-sub{font-size:clamp(17px,2.2vw,19px);color:var(--ccx-muted);margin:0 0 12px;max-width:760px}
.ccx-meta{font-size:14px;color:var(--ccx-muted)}
.ccx-answer{margin:0 0 36px}
.ccx-answer-label{font-family:'Fraunces',Georgia,serif;font-size:clamp(21px,2.8vw,25px);font-weight:600;color:var(--ccx-navy);margin:0 0 8px}
.ccx-answer p{margin:0;font-size:18px;line-height:1.7}
.ccx-sec{margin:0 0 40px}
.ccx-h2{font-family:'Fraunces',Georgia,serif;font-weight:600;color:var(--ccx-navy);font-size:clamp(23px,3.2vw,29px);line-height:1.25;margin:0 0 12px}
.ccx-sec p{margin:0 0 12px}
.ccx-note{font-size:14px;color:var(--ccx-muted)}
.ccx-cite{font-size:.72em;line-height:0;margin-left:1px}
.ccx-cite a{text-decoration:none;font-weight:600}
.ccx-table-wrap{overflow-x:auto;border-top:2px solid var(--ccx-navy);margin:8px 0 12px}
.ccx-table-wrap:focus{outline:2px solid var(--ccx-teal);outline-offset:2px}
.ccx-table{width:100%;border-collapse:collapse;font-size:15px}
.ccx-table th,.ccx-table td{padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid var(--ccx-line)}
.ccx-table thead th{background:var(--ccx-bg);color:var(--ccx-ink);font-size:13.5px;font-weight:700;box-shadow:inset 0 -1px 0 var(--ccx-ink)}
.ccx-table tbody th{font-weight:600}
.ccx-num{font-variant-numeric:tabular-nums}
.ccx-byline{font-size:14px;color:var(--ccx-muted);margin-top:-6px}
.ccx-tdmd{border-top:2px solid var(--ccx-navy);border-bottom:1px solid var(--ccx-line);padding:20px 0 24px}
.ccx .ccx-cta{display:inline-block;margin-top:6px;background:var(--ccx-coral);color:var(--ccx-coral-ink);font-weight:700;font-size:16px;font-family:'DM Sans',sans-serif;border-radius:8px;padding:11px 22px;text-decoration:none}
.ccx .ccx-cta:hover{background:#ff7a5c}
.ccx-method ul{margin:0 0 12px;padding-left:20px}
.ccx-method li{margin:0 0 8px}
.ccx-related{font-size:15px}
.ccx-refs{padding-left:22px;font-size:14.5px;color:var(--ccx-muted)}
.ccx-refs li{margin:0 0 8px;scroll-margin-top:90px}
.ccx-refs a{word-break:break-word}
.ccx-disclaimer{font-size:14px;color:var(--ccx-muted);border-top:1px solid var(--ccx-line);padding-top:16px}
.ccx-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media (max-width:760px){
  .ccx-answer p{font-size:17px}
  .ccx-table{font-size:14px}
  .ccx-table th,.ccx-table td{padding:9px 8px}
}
${darkCSS(`
DARK .ccx{--ccx-navy:#a0d8e8;--ccx-ink:#e2edf0;--ccx-muted:#9fb6bf;--ccx-bg:#0a171c;--ccx-line:#2a4350}
DARK .ccx .ccx-cta{color:#1a0b06}
`)}
`;
