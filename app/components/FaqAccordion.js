/**
 * FaqAccordion — premium FAQ accordion with "+/−" toggle icon.
 *
 * Single source of truth used by:
 *   • app/faq/FAQClient.js (the master FAQ page)
 *   • app/[slug]/NationalConditionPage.js
 *   • app/[slug]/StateLandingPage.js
 *   • app/[slug]/[conditionSlug]/* (state × condition pages, including CA UTI v2)
 *
 * Visual spec is lifted verbatim from app/faq/FAQClient.js lines 49–67 and
 * the mobile overrides at lines 122 and 144. All selectors are scoped under
 * .tdmd-faq-accordion so the same styles can coexist with FAQClient's own
 * .faq-* selectors without affecting any other element on the page.
 *
 * Props:
 *   items          [{ question: string, answer: ReactNode | string, id?: string }]
 *   sectionTitle?  string — optional H2 above the list
 *   sectionId?     string — anchor id on the wrapper section (deep-link)
 *   speakable?     boolean — default true, applies data-speakable to summaries
 *
 * Semantics: native <details>/<summary> for SEO + a11y, with the marker
 * suppressed via ::-webkit-details-marker and list-style:none. Each summary
 * carries data-speakable="true" so Google's SpeakableSpecification voice
 * extractors target FAQ questions.
 */

import React from 'react';

const FAQ_ACCORDION_CSS = `
/* ── Scoped to .tdmd-faq-accordion so this never clashes with /faq globals ── */
.tdmd-faq-accordion{font-family:'DM Sans','Inter',-apple-system,BlinkMacSystemFont,sans-serif;width:100%}
.tdmd-faq-accordion *{box-sizing:border-box}
.tdmd-faq-accordion .tdmd-faq-accordion__title{font-family:'Fraunces','Merriweather',Georgia,serif;font-size:clamp(22px,3vw,28px);font-weight:600;color:#143938;margin:0 0 1.25rem;line-height:1.3;letter-spacing:-0.01em}
.tdmd-faq-accordion .tdmd-faq-accordion__list{display:grid;gap:12px}
.tdmd-faq-accordion .tdmd-faq-accordion__item{background:#FFF;border:1px solid #E5E0DB;border-radius:12px;overflow:hidden;transition:.25s cubic-bezier(.4,0,.2,1)}
.tdmd-faq-accordion .tdmd-faq-accordion__item:hover{border-color:#2A6B6A;box-shadow:0 2px 8px rgba(27,77,76,.06)}
.tdmd-faq-accordion .tdmd-faq-accordion__question{cursor:pointer;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:16px;font-weight:600;color:#143938;list-style:none;line-height:1.4;font-family:'DM Sans','Inter',sans-serif}
.tdmd-faq-accordion .tdmd-faq-accordion__question::-webkit-details-marker{display:none}
.tdmd-faq-accordion .tdmd-faq-accordion__toggle{width:32px;height:32px;border-radius:8px;border:1px solid #E5E0DB;display:flex;align-items:center;justify-content:center;color:#1B4D4C;background:#F5F2EE;font-size:18px;font-weight:600;flex-shrink:0;transition:.25s cubic-bezier(.4,0,.2,1);line-height:1}
.tdmd-faq-accordion .tdmd-faq-accordion__toggle .tdmd-faq-accordion__icon-minus{display:none}
.tdmd-faq-accordion details[open] > .tdmd-faq-accordion__question .tdmd-faq-accordion__toggle{background:#1B4D4C;color:#fff;border-color:#1B4D4C}
.tdmd-faq-accordion details[open] > .tdmd-faq-accordion__question .tdmd-faq-accordion__toggle .tdmd-faq-accordion__icon-plus{display:none}
.tdmd-faq-accordion details[open] > .tdmd-faq-accordion__question .tdmd-faq-accordion__toggle .tdmd-faq-accordion__icon-minus{display:inline}
.tdmd-faq-accordion .tdmd-faq-accordion__answer{padding:0 24px 20px;color:#3A3A3A;font-size:15px;line-height:1.65}
.tdmd-faq-accordion .tdmd-faq-accordion__answer p{margin:8px 0 0}
.tdmd-faq-accordion .tdmd-faq-accordion__answer p:first-child{margin-top:0}
.tdmd-faq-accordion .tdmd-faq-accordion__answer ul{margin:8px 0;padding-left:24px}
.tdmd-faq-accordion .tdmd-faq-accordion__answer li{margin:4px 0;line-height:1.55}
.tdmd-faq-accordion .tdmd-faq-accordion__answer a{color:#1B4D4C;font-weight:600;text-decoration:underline;text-underline-offset:2px}
.tdmd-faq-accordion .tdmd-faq-accordion__answer a:hover{color:#2A6B6A}
.tdmd-faq-accordion .tdmd-faq-accordion__answer strong{color:#143938}

/* ── Mobile responsive (matches FAQClient.js lines 122, 144) ── */
@media (max-width:600px){
  .tdmd-faq-accordion .tdmd-faq-accordion__question{padding:16px;font-size:15px;gap:12px}
  .tdmd-faq-accordion .tdmd-faq-accordion__answer{padding:0 16px 16px;font-size:14px}
  .tdmd-faq-accordion .tdmd-faq-accordion__toggle{width:28px;height:28px;font-size:16px}
}
@media (max-width:380px){
  .tdmd-faq-accordion .tdmd-faq-accordion__question{padding:14px;font-size:14px}
  .tdmd-faq-accordion .tdmd-faq-accordion__answer{padding:0 14px 14px;font-size:13px}
  .tdmd-faq-accordion .tdmd-faq-accordion__toggle{width:26px;height:26px;font-size:14px}
}

/* ── Dark-mode parity using the global tdmd-* theme variables ── */
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__item,
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]) .tdmd-faq-accordion .tdmd-faq-accordion__item{background:#122028;border-color:#1e3340}
}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__item{background:#122028;border-color:#1e3340}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__item:hover{border-color:#2bc4cf}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__title{color:#e2edf0}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__question{color:#e2edf0}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__toggle{background:#0f1f24;border-color:#1e3340;color:#2bc4cf}
:root[data-theme="dark"] .tdmd-faq-accordion details[open] > .tdmd-faq-accordion__question .tdmd-faq-accordion__toggle{background:#2bc4cf;color:#0a171c;border-color:#2bc4cf}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__answer{color:#c9d6dc}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__answer a{color:#2bc4cf}
:root[data-theme="dark"] .tdmd-faq-accordion .tdmd-faq-accordion__answer strong{color:#e2edf0}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]) .tdmd-faq-accordion .tdmd-faq-accordion__item{background:#122028;border-color:#1e3340}
  :root:not([data-theme="light"]) .tdmd-faq-accordion .tdmd-faq-accordion__title,
  :root:not([data-theme="light"]) .tdmd-faq-accordion .tdmd-faq-accordion__question{color:#e2edf0}
  :root:not([data-theme="light"]) .tdmd-faq-accordion .tdmd-faq-accordion__toggle{background:#0f1f24;border-color:#1e3340;color:#2bc4cf}
  :root:not([data-theme="light"]) .tdmd-faq-accordion details[open] > .tdmd-faq-accordion__question .tdmd-faq-accordion__toggle{background:#2bc4cf;color:#0a171c;border-color:#2bc4cf}
  :root:not([data-theme="light"]) .tdmd-faq-accordion .tdmd-faq-accordion__answer{color:#c9d6dc}
  :root:not([data-theme="light"]) .tdmd-faq-accordion .tdmd-faq-accordion__answer a{color:#2bc4cf}
}
`;

/**
 * Renders one accordion. Supports string OR JSX/React node answers.
 * Strings are wrapped in <p>; React nodes are rendered as-is so callers
 * can embed inline anchors, lists, or strong tags.
 */
export default function FaqAccordion({
  items,
  sectionTitle,
  sectionId,
  speakable = true,
  className = '',
}) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className={`tdmd-faq-accordion ${className}`.trim()} id={sectionId}>
      <style dangerouslySetInnerHTML={{ __html: FAQ_ACCORDION_CSS }} />
      {sectionTitle ? <h2 className="tdmd-faq-accordion__title">{sectionTitle}</h2> : null}
      <div className="tdmd-faq-accordion__list" role="list">
        {items.map((item, i) => {
          const key = item.id || `faq-${i}`;
          const isString = typeof item.answer === 'string';
          return (
            <details key={key} className="tdmd-faq-accordion__item" role="listitem">
              <summary
                className="tdmd-faq-accordion__question"
                {...(speakable ? { 'data-speakable': 'true' } : {})}
              >
                <span>{item.question}</span>
                <span className="tdmd-faq-accordion__toggle" aria-hidden="true">
                  <span className="tdmd-faq-accordion__icon-plus">+</span>
                  <span className="tdmd-faq-accordion__icon-minus">&ndash;</span>
                </span>
              </summary>
              <div className="tdmd-faq-accordion__answer">
                {isString ? <p>{item.answer}</p> : item.answer}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
