'use client';

import { useEffect } from 'react';
import { GATE_LIBS } from './gateSource';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-tdmd-lib="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === '1') return resolve();
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', reject);
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.dataset.tdmdLib = src;
    s.addEventListener('load', () => { s.dataset.loaded = '1'; resolve(); });
    s.addEventListener('error', reject);
    document.head.appendChild(s);
  });
}

// Runs the gate script after the server-rendered markup is in the DOM.
// Map libraries load in order (d3-geo depends on d3-array); the gate itself
// works without them and shows a fallback message if the map can't load.
export default function BookingGateClient({ script }) {
  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line no-new-func
    new Function(script)();
    (async () => {
      try {
        for (const src of GATE_LIBS) {
          if (cancelled) return;
          await loadScript(src);
        }
      } catch (e) { /* gate shows map fallback */ }
    })();
    return () => { cancelled = true; };
  }, [script]);
  return null;
}
