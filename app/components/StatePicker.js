'use client';

import { useState } from 'react';

// Compact "same condition in another state" picker for state condition pages.
// Replaces a grid of ~40 plain links: every state page used to link to every
// sibling, so near-identical pages pointed dozens of links at each other.
// Each state page now links up to the national guide (which lists every state)
// and offers this picker for people who want another state's page.
export default function StatePicker({ options, conditionName, id }) {
  const [value, setValue] = useState('');
  const selectId = `${id}-select`;
  const go = (e) => {
    e.preventDefault();
    if (value) window.location.assign(value);
  };
  return (
    <form className="tdmd-state-picker" onSubmit={go} aria-label={`${conditionName} in another state`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .tdmd-state-picker{display:flex;flex-wrap:wrap;align-items:flex-end;gap:.6rem;margin-top:1rem}
        .tdmd-state-picker label{display:block;width:100%;font-weight:600;font-size:.95rem}
        .tdmd-state-picker select{min-width:14rem;max-width:100%;padding:.55rem .7rem;border:1px solid #9bb3bf;border-radius:8px;font:inherit;background:#fff;color:#0A2438}
        .tdmd-state-picker button{padding:.6rem 1.1rem;border:0;border-radius:8px;background:#0A2438;color:#fff;font:inherit;font-weight:600;cursor:pointer}
        .tdmd-state-picker button:disabled{opacity:.55;cursor:default}
        :root[data-theme="dark"] .tdmd-state-picker select{background:#13232e;color:#e8f1f5;border-color:#45606d}
        @media(prefers-color-scheme:dark){:root:not([data-theme="light"]) .tdmd-state-picker select{background:#13232e;color:#e8f1f5;border-color:#45606d}}
      ` }} />
      <label htmlFor={selectId}>Choose a state</label>
      <select id={selectId} value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="">Select a state</option>
        {options.map((o) => (
          <option key={o.href} value={o.href}>{o.name}</option>
        ))}
      </select>
      <button type="submit" disabled={!value}>Go</button>
    </form>
  );
}
