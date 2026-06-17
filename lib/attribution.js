// Marketing attribution capture for booking flows (Action 6 — repo half).
//
// Captures utm_* params, ad click IDs, the first landing page, and the
// external referrer, then persists them (first-touch wins). Outbound booking
// links are decorated with these params so the downstream booking system
// (Acuity / JotForm) can read them and map them into hidden fields.
//
// The hidden-field setup inside Acuity / JotForm is the external half of
// Action 6 and is configured in those tools, not here.

export const ATTRIBUTION_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'fbclid', 'msclkid',
];

const STORAGE_KEY = 'tdmd_attribution';

// Read the persisted first-touch attribution payload (or null).
export function getStoredAttribution() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Capture attribution from the current URL. First-touch wins: once stored,
// values are not overwritten on later visits. We only persist when there is
// something worth attributing (a utm/click param or an external referrer),
// so internal navigations are not recorded as the first touch.
export function captureAttribution() {
  if (typeof window === 'undefined') return null;
  const existing = getStoredAttribution();
  if (existing) return existing;

  const params = new URLSearchParams(window.location.search);
  const data = {};
  let hasParam = false;
  for (const key of ATTRIBUTION_PARAMS) {
    const val = params.get(key);
    if (val) {
      data[key] = val;
      hasParam = true;
    }
  }

  const referrer = document.referrer || '';
  const external = referrer && !referrer.includes(window.location.host);
  if (!hasParam && !external) return null;

  data.landing_page = window.location.pathname + window.location.search;
  if (referrer) data.referrer = referrer;
  data.captured_at = new Date().toISOString();

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* storage may be unavailable (private mode) — fall through with in-memory value */
  }
  return data;
}

// Append stored attribution params to a URL (absolute or root-relative),
// preserving any query the URL already carries and never clobbering existing keys.
export function decorateUrl(url, attr) {
  if (!attr || typeof window === 'undefined') return url;
  try {
    const isAbsolute = /^https?:\/\//i.test(url);
    const u = new URL(url, isAbsolute ? undefined : window.location.origin);
    for (const [k, v] of Object.entries(attr)) {
      if (v && !u.searchParams.has(k)) u.searchParams.set(k, v);
    }
    return isAbsolute ? u.toString() : u.pathname + u.search + u.hash;
  } catch {
    return url;
  }
}
