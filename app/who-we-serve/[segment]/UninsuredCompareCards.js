'use client';

// Comparison cards for the Uninsured & Affordable Care page.
//
// Replaces the 14-row scrolling table with cards. Three are shown by default —
// TeleDirectMD, Hims/Hers and urgent care, the alternatives a cash-pay patient
// is actually weighing — and the rest expand in place.
//
// Every card is rendered into the HTML whether or not it is visible; the
// collapsed ones are hidden with CSS, not dropped from the tree, so the full
// comparison stays crawlable in the static export.
//
// Prices, providers and the as-of date come from data/competitor-comparison.json
// (updated quarterly). Only the display order and the short per-card notes live
// here.

import { useState } from 'react';

const Check = () => (
  <span className="uac-tick uac-tick--sm" aria-hidden="true">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
  </span>
);

const Cross = () => (
  <span className="uac-cross" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
  </span>
);

// Display order, top three first.
const ORDER = [
  'TeleDirectMD',
  'Hims / Hers',
  'Urgent care (in person, avg.)',
  'MDLive',
  'GoodRx Care',
  'Teladoc',
  'Amwell',
  'Sesame',
  'ChatWithDr',
  'Doctor On Demand',
  'PlushCare',
  'HealthTap',
  'Ro',
  'Emergency room (avg. uninsured)',
];

// Short card-length notes. The JSON's cell strings are written for table cells
// ("No, rotating") and read badly as sentences.
const NOTES = {
  'TeleDirectMD':                   { name: 'TeleDirectMD',        sameMd: 'One physician in every state we cover.', membership: 'No fee, no tier, no unlock price.', subs: 'Rx to any pharmacy you pick.' },
  'Hims / Hers':                    { name: 'Hims / Hers',         sameMd: 'Visit is a lead-in.',        membership: 'Effectively required.',              subs: 'The entire model.' },
  'Urgent care (in person, avg.)':  { name: 'Urgent care (avg.)',  sameMd: 'Whoever is on shift.',       membership: '',                                  subs: '' },
  'MDLive':                         { name: 'MDLive',              sameMd: 'Large clinician pool.',      membership: '',                                  subs: '' },
  'GoodRx Care':                    { name: 'GoodRx Care',         sameMd: 'Whoever is available.',      membership: 'Gold, $10/mo, for the low price.',   subs: '' },
  'Teladoc':                        { name: 'Teladoc',             sameMd: 'Large clinician pool.',      membership: '',                                  subs: '' },
  'Amwell':                         { name: 'Amwell',              sameMd: 'Large clinician pool.',      membership: '',                                  subs: '' },
  'Sesame':                         { name: 'Sesame',              sameMd: 'Marketplace listing.',       membership: 'Sesame Plus pushed.',               subs: '' },
  'ChatWithDr':                     { name: 'ChatWithDr',          sameMd: 'Not specified.',             membership: '',                                  subs: '' },
  'Doctor On Demand':               { name: 'Doctor On Demand',    sameMd: 'Rotating.',                  membership: '',                                  subs: '' },
  'PlushCare':                      { name: 'PlushCare',           sameMd: 'Attempts continuity.',       membership: '$19.99/mo or $99/yr.',              subs: '' },
  'HealthTap':                      { name: 'HealthTap',           sameMd: 'Rotating pool.',             membership: '$55/3mo or $180/yr.',               subs: '' },
  'Ro':                             { name: 'Ro',                  sameMd: 'Rotating.',                  membership: 'Effectively required.',             subs: 'GLP-1, ED and hair-loss subscriptions.' },
  'Emergency room (avg. uninsured)':{ name: 'Emergency room (avg.)', sameMd: 'Whoever is on shift.',     membership: '',                                  subs: '' },
};

// "No", "No, rotating" → the claim holds. Anything else ("Yes ($10/mo Gold…)",
// "Effectively yes", "Sesame Plus pushed") → it does not.
const isNo = (v) => /^no\b/i.test(String(v || '').trim());
const isYes = (v) => /^yes\b/i.test(String(v || '').trim());

const DEFAULT_VISIBLE = 3;

export default function UninsuredCompareCards({ rows, children }) {
  const [showAll, setShowAll] = useState(false);

  const byService = new Map(rows.map((r) => [r.service, r]));
  const ordered = [
    ...ORDER.map((s) => byService.get(s)).filter(Boolean),
    // Anything added to the JSON but not yet placed in ORDER still shows up.
    ...rows.filter((r) => !ORDER.includes(r.service)),
  ];

  return (
    <>
      <div className="uac-compare-grid">
        {ordered.map((r, i) => {
          const n = NOTES[r.service] || { name: r.service, sameMd: '', membership: '', subs: '' };
          const sameMd = isYes(r.sameDoctor);
          const noMembership = isNo(r.membership);
          const noSubs = isNo(r.drugSubscription);
          const hidden = !showAll && i >= DEFAULT_VISIBLE;

          return (
            <article
              key={r.service}
              className={`uac-card${r.isSelf ? ' uac-card--self' : ''}`}
              style={hidden ? { display: 'none' } : undefined}
            >
              <div className="uac-card-top">
                <div className="uac-card-title">
                  <h3>{n.name}</h3>
                  <span className="uac-card-provider">{r.provider}</span>
                </div>
                {r.isSelf && <span className="uac-pill uac-card-flag">Our pick, obviously</span>}
              </div>

              <div className="uac-card-price">{r.price}</div>

              <ul>
                <li>
                  {sameMd ? <Check /> : <Cross />}
                  <span><strong>Same MD every visit.</strong>{n.sameMd ? ` ${n.sameMd}` : ''}</span>
                </li>
                <li>
                  {noMembership ? <Check /> : <Cross />}
                  <span><strong>No membership.</strong>{n.membership ? ` ${n.membership}` : ''}</span>
                </li>
                <li>
                  {noSubs ? <Check /> : <Cross />}
                  <span><strong>No drug subscriptions.</strong>{n.subs ? ` ${n.subs}` : ''}</span>
                </li>
              </ul>
            </article>
          );
        })}
      </div>

      <div className="uac-compare-actions">
        <button
          type="button"
          className="uac-btn uac-btn--ghost-dark"
          aria-expanded={showAll}
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? 'Show Fewer' : `Compare All ${ordered.length} Services`}
        </button>
        {children}
      </div>
    </>
  );
}
