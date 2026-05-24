// CitableSummary — visible HTML block + FAQPage JSON-LD.
//
// 2026-05-19 OVERHAUL:
//   - Removed the prior "visually-hidden" rendering mode. Per Google's
//     structured-data policy, all JSON-LD must mirror visible page content;
//     hidden microdata blocks are a cloaking-risk pattern that contributed
//     to the May 2026 deindexing event.
//   - The block is now always visibly rendered as an editorial Q&A summary
//     near the top of each page, with FAQPage JSON-LD (emitted by
//     citableSummaryToJsonLd in lib/citable-summary.js) mirroring it 1:1.
//   - Author byline and "Last reviewed" timestamp are rendered visibly to
//     satisfy YMYL E-E-A-T requirements (board-cert author + freshness).
//
// 2026-05-23 VISUAL REDESIGN:
//   - Replaced the boxed white-on-pale-cyan card with a brand-integrated
//     left-accent pull-quote pattern. The block no longer looks like a
//     popup/modal sitting between the header and the hero — instead it
//     reads as an intentional editorial element using TeleDirectMD brand
//     teal (#003E52) for the accent rule and question text.
//   - DOM structure preserved exactly: same <section className="tdmd-citable-summary">,
//     same id, same data-speakable="true", same <h2> question + answer markup.
//     AI extractors (ChatGPT/Perplexity/AI Overviews) extract the same
//     content. JSON-LD output unchanged. Only the inline style object differs.
//
// AI extractors (ChatGPT, Perplexity, Gemini, Claude) preferentially quote
// self-contained Q/A paragraphs that include a clear author byline + date.

import React from 'react';

// v3 visual: brand-integrated pull-quote with left accent bar. Transparent
// background; borderLeft is the only visible chrome. Padding tightened to
// feel like editorial prose, not a boxed feature. Centered in a 900px
// readable measure rather than 1200px viewport-spanning slab.
const VISIBLE_STYLE = {
  background: 'transparent',
  borderLeft: '4px solid #003E52',
  padding: '0.5rem 0 0.5rem 1.5rem',
  margin: '1.5rem auto 2rem',
  maxWidth: 900,
  lineHeight: 1.65,
};

// v3 eyebrow label — small uppercase tag that signals this is an editorial
// pull-quote / featured answer. Reads as intentional, not a glitch.
const EYEBROW_STYLE = {
  margin: '0 0 0.4rem',
  color: '#6B8B95',
  fontSize: '0.78rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const META_STYLE = {
  marginTop: '0.8rem',
  fontSize: '0.8rem',
  color: '#6B8B95',
};

// Date formatting helper — accepts ISO 'YYYY-MM-DD' or Date instance.
function formatReviewed(d) {
  try {
    const dt = typeof d === 'string' ? new Date(d) : (d || new Date());
    if (Number.isNaN(dt.getTime())) return null;
    return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return null; }
}

// Default review date — kept in sync with TODAY in lib/citable-summary.js.
// Callers may override per-page via the dateModified prop for stale-content
// freshness, but providing a default ensures every page shows a 'Last
// reviewed' line (Perplexity/AIO freshness signal).
const DEFAULT_REVIEWED = '2026-05-19';

export function CitableSummaryBlock({ summary, jsonLd, idSuffix = '', dateModified, doctorName = 'Parth Bhavsar, MD' }) {
  if (!summary || !summary.question || !summary.answerHtml) return null;
  const reviewed = formatReviewed(dateModified || DEFAULT_REVIEWED);
  return (
    <>
      <section
        className="tdmd-citable-summary"
        id={`citable-summary${idSuffix ? '-' + idSuffix : ''}`}
        data-speakable="true"
        style={VISIBLE_STYLE}
      >
        <div style={EYEBROW_STYLE}>Quick answer</div>
        <h2 style={{ margin: '0 0 0.6rem', fontSize: '1.35rem', fontWeight: 700, color: '#003E52', lineHeight: 1.3 }}>
          {summary.question}
        </h2>
        <div
          style={{ margin: 0, color: '#1A3140', fontSize: '1rem' }}
          dangerouslySetInnerHTML={{ __html: summary.answerHtml }}
        />
        <div style={META_STYLE}>
          {`Medically reviewed by ${doctorName}`}
          {reviewed ? ` · Updated ${reviewed}` : ''}
        </div>
      </section>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
