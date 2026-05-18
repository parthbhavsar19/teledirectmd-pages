// CitableSummary — visible HTML block + Schema.org Question/Answer microdata.
// AI extractors (ChatGPT, Perplexity, Gemini, Claude) preferentially quote
// self-contained Q/A paragraphs. This block renders one near the top of each
// page, with both microdata (itemScope/itemProp) AND a separate QAPage JSON-LD
// script next to it for redundant signal coverage.

import React from 'react';

export function CitableSummaryBlock({ summary, jsonLd, idSuffix = '' }) {
  if (!summary || !summary.question || !summary.answerHtml) return null;
  return (
    <>
      <section
        className="tdmd-citable-summary"
        id={`citable-summary${idSuffix ? '-' + idSuffix : ''}`}
        data-speakable="true"
        itemScope
        itemType="https://schema.org/Question"
        style={{
          background: '#FFFFFF',
          border: '1px solid #C2E0E5',
          borderRadius: 8,
          padding: '1.1rem 1.4rem',
          margin: '1rem auto',
          maxWidth: 1200,
          lineHeight: 1.65,
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        }}
      >
        <h2
          itemProp="name"
          style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', fontWeight: 700, color: '#003E52' }}
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
            style={{ margin: 0, color: '#0A2438', fontSize: '0.97rem' }}
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
