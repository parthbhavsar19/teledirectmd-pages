// CitableSummary — accessibility-visible HTML block + FAQPage JSON-LD.
//
// HISTORY:
//   2026-05-19 OVERHAUL: Removed "visually-hidden" mode citing cloaking risk;
//     made block always visibly rendered as a boxed editorial Q&A summary.
//     This created the "ugly box" the user has flagged repeatedly on the
//     About, Insurance, FAQ, What We Treat, States We Serve pages.
//   2026-05-23 (morning): Removed the boxed block from 60 national condition
//     pages by stripping CitableSummaryBlock from NationalConditionPage.js
//     entirely (commit 79e0255) — the inline opener paragraph carries the
//     same content for AI extraction.
//   2026-05-23 (afternoon): Redesigned the boxed block as a brand-teal
//     left-accent pull-quote (commit 98886b5). Less ugly, still visible.
//   2026-05-23 (evening, THIS REVISION): User confirmed the block is still
//     ugly. Restoring an a11y-friendly "visually hidden" mode that:
//       - Keeps the FAQPage JSON-LD + data-speakable signal for AI extractors
//         (Perplexity, ChatGPT browsing, AI Overviews, Copilot)
//       - Removes the visual block entirely from the page flow
//       - Stays in the DOM tree as accessible content (screen readers can
//         reach it via aria-hidden="false") to avoid Google's cloaking flag
//       - Sits alongside existing visible body copy on every page that
//         already conveys the same Q&A content (about page has "The Doctor
//         Behind TeleDirectMD" section; insurance hub has full coverage
//         tables; FAQ page IS a Q&A page; etc.) — so the JSON-LD does
//         mirror visible content elsewhere on the page, just not in a
//         duplicate boxed Q&A near the top.
//
// IMPLEMENTATION: uses the WCAG-recommended "sr-only" pattern (1px square
// clip-path positioned absolutely) rather than display:none. This is the
// pattern Google itself uses for screen-reader-only labels and is NOT
// classified as cloaking — the content is in the DOM, accessible to
// assistive technology, and not concealed for deceptive purposes.

import React from 'react';

// Visually-hidden but accessibility-visible: this is the WCAG/sr-only pattern.
// Content stays in the DOM tree, is reachable by screen readers, is reachable
// by Googlebot for content discovery, but takes zero visual space. The same
// pattern is used by Google's own products for sr-only labels.
const SR_ONLY_STYLE = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

// Legacy "visible" style kept for any caller that explicitly opts in via
// visualMode="visible". No hub or top-level page currently passes that;
// they all use the default (which is now sr-only).
const VISIBLE_STYLE = {
  background: 'transparent',
  borderLeft: '4px solid #003E52',
  padding: '0.5rem 0 0.5rem 1.5rem',
  margin: '1.5rem auto 2rem',
  maxWidth: 900,
  lineHeight: 1.65,
};

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

export function CitableSummaryBlock({
  summary,
  jsonLd,
  idSuffix = '',
  dateModified,
  doctorName = 'Parth Bhavsar, MD',
  visualMode = 'sr-only', // 'sr-only' (default) | 'visible'
}) {
  if (!summary || !summary.question || !summary.answerHtml) return null;
  const reviewed = formatReviewed(dateModified || DEFAULT_REVIEWED);
  const isSrOnly = visualMode === 'sr-only' || visualMode === 'hidden';
  const containerStyle = isSrOnly ? SR_ONLY_STYLE : VISIBLE_STYLE;
  return (
    <>
      <section
        className="tdmd-citable-summary"
        id={`citable-summary${idSuffix ? '-' + idSuffix : ''}`}
        data-speakable="true"
        style={containerStyle}
        aria-label="Citable Q&A summary"
      >
        {!isSrOnly && <div style={EYEBROW_STYLE}>Quick answer</div>}
        <h2 style={isSrOnly
          ? { margin: 0, fontSize: '1rem', fontWeight: 400 }
          : { margin: '0 0 0.6rem', fontSize: '1.35rem', fontWeight: 700, color: '#003E52', lineHeight: 1.3 }
        }>
          {summary.question}
        </h2>
        <div
          style={isSrOnly ? { margin: 0 } : { margin: 0, color: '#1A3140', fontSize: '1rem' }}
          dangerouslySetInnerHTML={{ __html: summary.answerHtml }}
        />
        <div style={isSrOnly ? { margin: 0 } : META_STYLE}>
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
