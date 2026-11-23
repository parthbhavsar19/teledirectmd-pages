import { contentDate } from '../../../../lib/content-dates';
import { getStateBySlug } from '../../../../lib/get-data';
import { getStateInsurance } from '../../../../lib/insurance-data';
import { notFound } from 'next/navigation';
import { FAQ_PAGES } from '../../../../lib/faq-deep-dive-pages';
import { CitableSummaryBlock } from '../../../components/CitableSummary';
import { summarizeFaqDeepDive, citableSummaryToJsonLd } from '../../../../lib/citable-summary';
import UTI_STATE_CONTENT from '../../../../data/faq-deep-dive/uti-states.json';

// 2026-11-23: every state page is built around its own sourced content in
// data/faq-deep-dive/uti-states.json (lead, state law, pharmacy, optional local
// data, state FAQs, sources). The shared skeleton is kept short so the pages
// stop reading as one template with the state name swapped.

const BASE_URL = 'https://teledirectmd.com';

function listNames(names) {
  if (names.length <= 1) return names.join('');
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

// "Washington D.C." already ends in a period; avoid "D.C.."
function endSentence(text) {
  return /[.?]$/.test(text) ? text : `${text}.`;
}

function pageContext(slug) {
  const page = FAQ_PAGES.find((p) => p.slug === slug);
  if (!page) return null;
  const state = getStateBySlug(page.stateSlug);
  if (!state) return null;
  const content = UTI_STATE_CONTENT[page.stateSlug];
  if (!content) return null;
  const stateAbbr = state.abbreviation || page.stateSlug.toUpperCase();
  const payers = (getStateInsurance(stateAbbr) || []).map((p) => p.name);
  return { page, state, content, payers };
}

export async function generateStaticParams() {
  return FAQ_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ctx = pageContext(slug);
  if (!ctx) return {};
  const { state, content } = ctx;
  const pageUrl = `${BASE_URL}/faq/deep-dive/${slug}`;
  const title = `Can You Get UTI Antibiotics Online in ${state.name}? | TeleDirectMD`;
  const description = content.meta;
  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: { type: 'website', siteName: 'TeleDirectMD', locale: 'en_US', title, description, url: pageUrl },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: pageUrl },
  };
}

const h2 = { fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '12px' };
const body = { fontSize: '1rem', color: '#374151', lineHeight: 1.7, margin: 0 };
const section = { padding: '24px 0', borderTop: '1px solid #e5e7eb' };

export default async function FAQDeepDivePage({ params }) {
  const { slug } = await params;
  const ctx = pageContext(slug);
  if (!ctx) notFound();
  const { page, state, content, payers } = ctx;
  const pageUrl = `${BASE_URL}/faq/deep-dive/${slug}`;
  const today = contentDate('faqDeepDive');

  const payText = payers.length
    ? endSentence(`The visit is a flat $79 self-pay, paid at booking, with HSA and FSA cards accepted. You can use insurance instead if your commercial plan is with ${listNames(payers)} in ${state.name}`)
    : `The visit is a flat $79 self-pay, paid at booking, with HSA and FSA cards accepted. TeleDirectMD is not in-network with any insurer in ${endSentence(state.name)}`;

  const faqItems = [
    ...content.faqs,
    { q: 'Does TeleDirectMD treat UTIs in men?', a: 'No. UTI visits are only for non-pregnant women 18 and older. Men with urinary symptoms should be seen in person and should not book a TeleDirectMD UTI visit.' },
    { q: `What does a UTI visit cost in ${state.name}?`, a: `${payText} Medicine is paid separately at the pharmacy.` },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq` },
          { '@type': 'ListItem', position: 3, name: `UTI Antibiotics Online in ${state.name}`, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  const citableSummary_AI = summarizeFaqDeepDive({ medication: page.medication, stateName: state.name, condition: page.condition, stateAnswer: content.summary });
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: `${pageUrl}/` });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix={`faq-${slug}`} dateModified={`${today}T12:00:00`} />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 60px' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '14px', color: '#6b7280', padding: '16px 0', borderBottom: '1px solid #e5e7eb' }}>
          <a href="/" style={{ color: '#0d9488' }}>Home</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <a href="/faq/" style={{ color: '#0d9488' }}>FAQ</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>UTI Antibiotics Online in {state.name}</span>
        </nav>

        <section style={{ padding: '40px 0 24px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, color: '#111827', marginBottom: '16px' }}>
            Can You Get UTI Antibiotics Online in {state.name}?
          </h1>
          <p style={body}>{content.lead}</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <a href="/book-online/" style={{ display: 'inline-block', background: '#0d9488', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Book a Visit</a>
            <a href={`/${page.stateSlug}/${page.conditionSlug}/`} style={{ display: 'inline-block', background: '#fff', color: '#0d9488', border: '2px solid #0d9488', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>UTI care in {state.name}</a>
          </div>
        </section>

        {content.law && (
          <section style={section}>
            <h2 style={h2}>What {state.name} law means for a UTI video visit</h2>
            <p style={body}>{content.law}</p>
          </section>
        )}

        {content.pharmacy && (
          <section style={section}>
            <h2 style={h2}>Getting the prescription filled in {state.name}</h2>
            <p style={body}>{content.pharmacy}</p>
          </section>
        )}

        {content.local && (
          <section style={section}>
            <h2 style={h2}>UTI antibiotic resistance in {state.name}</h2>
            <p style={body}>{content.local}</p>
          </section>
        )}

        <section style={section}>
          <h2 style={h2}>Cost</h2>
          <p style={body}>{payText}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>When a video visit is not the right choice</h2>
          <p style={body}>
            Go to in-person or emergency care instead if you have fever, chills, back or side pain, vomiting, a catheter or a recent urologic procedure, or if you are pregnant or could be. A prescription is never guaranteed; it depends on the physician&apos;s evaluation.
          </p>
        </section>

        <section id="faq" style={section}>
          <h2 style={h2}>Frequently asked questions</h2>
          {faqItems.map((f, i) => (
            <details key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '12px 0' }}>
              <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                {f.q}
                <span style={{ color: '#9ca3af', marginLeft: '12px', flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, marginTop: '8px' }}>{f.a}</p>
            </details>
          ))}
        </section>

        {content.sources && content.sources.length > 0 && (
          <section style={section}>
            <h2 style={{ ...h2, fontSize: '1.1rem' }}>Sources</h2>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.85rem', lineHeight: 1.6, color: '#4b5563' }}>
              {content.sources.map((s) => (
                <li key={s.url}><a href={s.url} rel="noopener" style={{ color: '#0d9488' }}>{s.label}</a></li>
              ))}
            </ul>
          </section>
        )}

        <section style={section}>
          <h2 style={{ ...h2, fontSize: '1.1rem' }}>Related pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '8px', margin: 0 }}>
            <li><a href={`/${page.stateSlug}/${page.conditionSlug}/`} style={{ color: '#0d9488', fontWeight: 500 }}>UTI treatment online in {state.name}</a></li>
            <li><a href={`/${page.stateSlug}/`} style={{ color: '#0d9488', fontWeight: 500 }}>TeleDirectMD in {state.name}</a></li>
            <li><a href="/faq/deep-dive/" style={{ color: '#0d9488', fontWeight: 500 }}>UTI antibiotics online, state by state</a></li>
          </ul>
        </section>

        <section style={{ padding: '20px 0', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: 0 }}>Medically reviewed by Parth Bhavsar, MD. Last updated {today}. TeleDirectMD is not an emergency service.</p>
        </section>
      </div>
    </>
  );
}
