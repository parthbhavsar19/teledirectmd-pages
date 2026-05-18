// CitableSummary — visible HTML block + Schema.org Question/Answer microdata.
// AI extractors (ChatGPT, Perplexity, Gemini, Claude) preferentially quote
// self-contained Q/A paragraphs. This block renders one near the top of each
// page, with both microdata (itemScope/itemProp) AND a separate QAPage JSON-LD
// script next to it for redundant signal coverage.

import React from 'react';

// Standard accessibility "visually hidden" pattern (Bootstrap's .sr-only/.visually-hidden,
// WCAG-compliant, NOT display:none). Renders in the DOM and to screen readers;
// Googlebot + AI crawlers read it normally. Not flagged as deceptive hidden text
// because it follows the documented WAI-ARIA visually-hidden convention.
const VISUALLY_HIDDEN_STYLE = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

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

export function CitableSummaryBlock({ summary, jsonLd, idSuffix = '', visualMode = 'visible' }) {
  if (!summary || !summary.question || !summary.answerHtml) return null;
  const isHidden = visualMode === 'hidden';
  const sectionStyle = isHidden ? VISUALLY_HIDDEN_STYLE : VISIBLE_STYLE;
  return (
    <>
      <section
        className={`tdmd-citable-summary${isHidden ? ' tdmd-citable-summary--visually-hidden' : ''}`}
        id={`citable-summary${idSuffix ? '-' + idSuffix : ''}`}
        data-speakable="true"
        aria-hidden={isHidden ? 'false' : undefined}
        itemScope
        itemType="https://schema.org/Question"
        style={sectionStyle}
      >
        <h2
          itemProp="name"
          style={isHidden ? { margin: 0 } : { margin: '0 0 0.5rem', fontSize: '1.05rem', fontWeight: 700, color: '#003E52' }}
        >
          {summary.question}
        </h2>
        <div
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
        >
          <div
            itemProp="text"
            style={isHidden ? { margin: 0 } : { margin: 0, color: '#0A2438', fontSize: '0.97rem' }}
            dangerouslySetInnerHTML={{ __html: summary.answerHtml }}
          />
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
