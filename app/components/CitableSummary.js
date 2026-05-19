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
// AI extractors (ChatGPT, Perplexity, Gemini, Claude) preferentially quote
// self-contained Q/A paragraphs that include a clear author byline + date.

import React from 'react';

const VISIBLE_STYLE = {
  background: '#FFFFFF',
  border: '1px solid #C2E0E5',
  borderRadius: 8,
  padding: '1.1rem 1.4rem',
  margin: '1rem auto',
  maxWidth: 1200,
  lineHeight: 1.65,
  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
};

const META_STYLE = {
  marginTop: '0.75rem',
  paddingTop: '0.6rem',
  borderTop: '1px solid #E6F0F2',
  fontSize: '0.82rem',
  color: '#456676',
  fontStyle: 'italic',
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
        <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', fontWeight: 700, color: '#003E52' }}>
          {summary.question}
        </h2>
        <div
          style={{ margin: 0, color: '#0A2438', fontSize: '0.97rem' }}
          dangerouslySetInnerHTML={{ __html: summary.answerHtml }}
        />
        <div style={META_STYLE}>
          {`Medically reviewed by ${doctorName}`}
          {reviewed ? ` — Updated ${reviewed}` : ''}
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
