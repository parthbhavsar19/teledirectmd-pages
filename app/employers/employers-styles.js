// Employer pages — scoped CSS that extends the existing tdmd-* design system
// Uses the brand tokens already defined in lib/tdmd-styles.js
export const employersCSS = `
/* ===== Scoped to .tdmd-emp so nothing leaks out ===== */
.tdmd-emp { color: var(--tdmd-text); }
.tdmd-emp *, .tdmd-emp *::before, .tdmd-emp *::after { box-sizing: border-box; }

.tdmd-emp-section { padding: 3rem 0; }
.tdmd-emp-section--soft { background: var(--tdmd-bg-soft); }
.tdmd-emp-section--teal { background: var(--tdmd-navy); color: #f3fafb; }
.tdmd-emp-section--teal h2 { color: #ffffff; }
.tdmd-emp-section--teal .tdmd-emp-eyebrow { color: var(--tdmd-accent); }

.tdmd-emp-container { max-width: 1160px; margin: 0 auto; padding: 0 1.5rem; }
.tdmd-emp-narrow { max-width: 880px; margin: 0 auto; padding: 0 1.5rem; }

.tdmd-emp-eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tdmd-teal);
  margin-bottom: 0.75rem;
}

.tdmd-emp h1 {
  font-family: 'Merriweather', Georgia, serif;
  font-size: clamp(2rem, 4.6vw, 3.4rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--tdmd-navy);
  margin: 0 0 1.25rem;
}
.tdmd-emp h1 em {
  font-style: italic;
  color: var(--tdmd-accent);
  font-weight: 700;
}
.tdmd-emp h2 {
  font-family: 'Merriweather', Georgia, serif;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.18;
  margin: 0 0 1rem;
  color: var(--tdmd-navy);
}
.tdmd-emp h3 {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--tdmd-navy);
}

.tdmd-emp p { margin: 0 0 1rem; line-height: 1.65; }
.tdmd-emp p:last-child { margin-bottom: 0; }

/* ===== Hero ===== */
.tdmd-emp-hero {
  background: linear-gradient(180deg, var(--tdmd-bg-soft) 0%, #ffffff 100%);
  padding: 4rem 0 3rem;
  position: relative;
  overflow: hidden;
}
.tdmd-emp-hero-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 3rem;
  align-items: center;
}
.tdmd-emp-hero-sub {
  font-size: 1.125rem;
  color: var(--tdmd-muted);
  line-height: 1.55;
  margin-bottom: 1.5rem;
  max-width: 38em;
}
.tdmd-emp-ctas {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1.5rem;
}
.tdmd-emp-btn {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.1;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  cursor: pointer;
  border: none;
  font-family: inherit;
}
.tdmd-emp-btn--primary {
  background: var(--tdmd-accent);
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(255, 90, 54, 0.28);
}
.tdmd-emp-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(255, 90, 54, 0.35);
}
.tdmd-emp-btn--outline {
  background: transparent;
  color: var(--tdmd-teal);
  border: 2px solid var(--tdmd-teal);
  padding: 0.75rem 1.625rem;
}
.tdmd-emp-btn--outline:hover {
  background: var(--tdmd-teal);
  color: #ffffff;
}

/* ===== Hero pricing card ===== */
.tdmd-emp-pricecard {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 16px 40px rgba(0, 62, 82, 0.12), 0 2px 6px rgba(0,0,0,0.04);
  border: 1px solid rgba(0, 62, 82, 0.06);
}
.tdmd-emp-priceblock {
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--tdmd-border);
}
.tdmd-emp-priceblock:last-child { border-bottom: none; }
.tdmd-emp-pricelabel {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tdmd-teal);
  margin-bottom: 0.375rem;
}
.tdmd-emp-priceamount {
  font-family: 'Merriweather', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--tdmd-navy);
  line-height: 1;
}
.tdmd-emp-pricedetail {
  font-size: 0.85rem;
  color: var(--tdmd-muted);
  margin-top: 0.5rem;
}

/* ===== Trust strip ===== */
.tdmd-emp-trust {
  background: #ffffff;
  border-top: 1px solid var(--tdmd-border);
  border-bottom: 1px solid var(--tdmd-border);
  padding: 1.25rem 0;
}
.tdmd-emp-trust-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
}
.tdmd-emp-trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--tdmd-text);
}
.tdmd-emp-trust-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--tdmd-teal);
  display: inline-block;
}
.tdmd-emp-trust-stars { color: var(--tdmd-accent); letter-spacing: 1px; }

/* ===== Press strip ===== */
.tdmd-emp-press {
  padding: 1.5rem 0;
  background: #ffffff;
  border-bottom: 1px solid var(--tdmd-border);
}
.tdmd-emp-press-label {
  text-align: center;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--tdmd-muted);
  margin-bottom: 1rem;
}
.tdmd-emp-press-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  opacity: 0.78;
  filter: grayscale(15%);
}
.tdmd-emp-press-row img {
  height: 26px;
  width: auto;
  object-fit: contain;
}

/* ===== Section header ===== */
.tdmd-emp-secthead {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 2.5rem;
}

/* ===== Steps ===== */
.tdmd-emp-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  counter-reset: step;
}
.tdmd-emp-step {
  background: #ffffff;
  border-radius: 18px;
  padding: 2rem 1.5rem 1.5rem;
  position: relative;
  border: 1px solid var(--tdmd-border);
  counter-increment: step;
}
.tdmd-emp-step::before {
  content: counter(step);
  position: absolute;
  top: -22px;
  left: 1.5rem;
  width: 44px; height: 44px;
  background: var(--tdmd-accent);
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: 'Merriweather', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 700;
  box-shadow: 0 6px 16px rgba(255, 90, 54, 0.35);
}
.tdmd-emp-step h3 { margin-top: 0.75rem; }
.tdmd-emp-step p { font-size: 0.95rem; color: var(--tdmd-muted); }

/* ===== Value cards ===== */
.tdmd-emp-vcards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.tdmd-emp-vcard {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.75rem 1.5rem;
  border-top: 4px solid var(--tdmd-teal);
  box-shadow: var(--tdmd-shadow);
}
.tdmd-emp-vcard:nth-child(2) { border-top-color: var(--tdmd-navy); }
.tdmd-emp-vcard:nth-child(3) { border-top-color: var(--tdmd-accent); }
.tdmd-emp-bigstat {
  font-family: 'Merriweather', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--tdmd-teal);
  display: block;
  margin: 0.75rem 0 0.25rem;
}
.tdmd-emp-vcard:nth-child(2) .tdmd-emp-bigstat { color: var(--tdmd-navy); }
.tdmd-emp-vcard:nth-child(3) .tdmd-emp-bigstat { color: var(--tdmd-accent); }
.tdmd-emp-vcard p { font-size: 0.95rem; color: var(--tdmd-muted); }
.tdmd-emp-caveat {
  display: block;
  font-size: 0.8rem;
  color: var(--tdmd-muted);
  font-style: italic;
  margin-top: 0.75rem;
  line-height: 1.5;
}

/* ===== Industry tabs ===== */
.tdmd-emp-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}
.tdmd-emp-tab {
  padding: 0.625rem 1.25rem;
  background: #ffffff;
  border: 2px solid var(--tdmd-border);
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--tdmd-text);
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s ease;
}
.tdmd-emp-tab:hover { border-color: var(--tdmd-teal); color: var(--tdmd-teal); }
.tdmd-emp-tab[aria-selected="true"] {
  background: var(--tdmd-teal);
  color: #ffffff;
  border-color: var(--tdmd-teal);
}
.tdmd-emp-tabpanel {
  background: #ffffff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: var(--tdmd-shadow);
  max-width: 860px;
  margin: 0 auto;
}
.tdmd-emp-tabpanel[hidden] { display: none; }
.tdmd-emp-tabpanel p { color: var(--tdmd-text); font-size: 1rem; }

/* ===== Scope columns ===== */
.tdmd-emp-scope {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 920px;
  margin: 0 auto;
}
.tdmd-emp-scope-col {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.5rem;
  border: 1px solid var(--tdmd-border);
}
.tdmd-emp-scope-col h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--tdmd-border);
}
.tdmd-emp-scope-col--do h3 { color: var(--tdmd-teal); }
.tdmd-emp-scope-col--dont h3 { color: var(--tdmd-accent); }
.tdmd-emp-scope-list { list-style: none; padding: 0; margin: 0; }
.tdmd-emp-scope-list li {
  padding: 0.5rem 0 0.5rem 1.75rem;
  position: relative;
  color: var(--tdmd-text);
  font-size: 0.95rem;
  line-height: 1.5;
}
.tdmd-emp-scope-list li::before {
  position: absolute;
  left: 0;
  top: 0.5rem;
  font-weight: 900;
  font-size: 1rem;
}
.tdmd-emp-scope-col--do .tdmd-emp-scope-list li::before { content: '✓'; color: var(--tdmd-teal); }
.tdmd-emp-scope-col--dont .tdmd-emp-scope-list li::before { content: '✕'; color: var(--tdmd-accent); }

/* ===== Pricing table ===== */
.tdmd-emp-pricing-table {
  max-width: 720px;
  margin: 0 auto;
  background: #ffffff;
  color: var(--tdmd-text);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,0,0,0.25);
}
.tdmd-emp-pricerow {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--tdmd-border);
  align-items: center;
}
.tdmd-emp-pricerow:last-of-type { border-bottom: none; }
.tdmd-emp-pricerow .tdmd-emp-plabel { font-weight: 700; color: var(--tdmd-navy); }
.tdmd-emp-pricerow .tdmd-emp-pvalue {
  font-weight: 700;
  color: var(--tdmd-teal);
  text-align: right;
}
.tdmd-emp-pricerow .tdmd-emp-pvalue--accent {
  color: var(--tdmd-accent);
  font-size: 1.25rem;
}
.tdmd-emp-pricing-math {
  background: var(--tdmd-bg-soft);
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: var(--tdmd-text);
  text-align: center;
  border-top: 1px solid var(--tdmd-border);
}
.tdmd-emp-pricing-math strong { color: var(--tdmd-accent); }

/* ===== Comparison table ===== */
.tdmd-emp-compare-wrap { overflow-x: auto; }
.tdmd-emp-compare {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--tdmd-shadow);
  min-width: 720px;
}
.tdmd-emp-compare th, .tdmd-emp-compare td {
  padding: 0.85rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--tdmd-border);
  font-size: 0.9rem;
}
.tdmd-emp-compare th {
  background: var(--tdmd-navy);
  color: #ffffff;
  font-weight: 700;
}
.tdmd-emp-compare th:first-child { background: #002a3a; }
.tdmd-emp-compare th.tdmd-emp-us { background: var(--tdmd-accent); }
.tdmd-emp-compare tr:last-child td { border-bottom: none; }
.tdmd-emp-compare td:first-child {
  font-weight: 700;
  background: var(--tdmd-bg-soft);
  color: var(--tdmd-text);
}
.tdmd-emp-compare td.tdmd-emp-us {
  background: rgba(255, 90, 54, 0.07);
  font-weight: 700;
  color: var(--tdmd-accent);
}
.tdmd-emp-compare .tdmd-emp-yes { color: var(--tdmd-teal); font-weight: 700; }
.tdmd-emp-compare .tdmd-emp-no { color: var(--tdmd-muted); }

/* ===== Founder block ===== */
.tdmd-emp-founder {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
}
.tdmd-emp-founder-img {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,0,0,0.15);
}
.tdmd-emp-founder-img img {
  width: 100%; height: 100%; object-fit: cover;
  display: block;
}
.tdmd-emp-founder-credential {
  font-size: 1.0625rem;
  color: var(--tdmd-muted);
  margin-bottom: 1rem;
  line-height: 1.5;
}
.tdmd-emp-founder-badges {
  display: flex; flex-wrap: wrap; gap: 0.5rem;
  margin-top: 1rem;
}
.tdmd-emp-badge {
  display: inline-block;
  background: #ffffff;
  color: var(--tdmd-navy);
  padding: 0.375rem 0.875rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid var(--tdmd-border);
}

/* ===== Reviews ===== */
.tdmd-emp-reviews-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto 2rem;
}
.tdmd-emp-review-stat {
  background: #ffffff;
  border-radius: 14px;
  padding: 1.25rem 0.5rem;
  text-align: center;
  border: 1px solid var(--tdmd-border);
}
.tdmd-emp-review-platform {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--tdmd-muted);
  font-weight: 800;
}
.tdmd-emp-review-rating {
  font-family: 'Merriweather', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--tdmd-accent);
  margin-top: 0.25rem;
}
.tdmd-emp-tests {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 980px;
  margin: 0 auto;
}
.tdmd-emp-test {
  background: #ffffff;
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid var(--tdmd-teal);
  box-shadow: var(--tdmd-shadow);
}
.tdmd-emp-test:nth-child(even) { border-left-color: var(--tdmd-accent); }
.tdmd-emp-test blockquote {
  font-style: italic;
  color: var(--tdmd-text);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 0.75rem;
}
.tdmd-emp-test cite {
  font-style: normal;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--tdmd-navy);
}
.tdmd-emp-test cite::before { content: '— '; }

/* ===== FAQ ===== */
.tdmd-emp-faq { max-width: 820px; margin: 0 auto; display: grid; gap: 0.625rem; }
.tdmd-emp-faq details {
  background: #ffffff;
  border: 1px solid var(--tdmd-border);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}
.tdmd-emp-faq details:hover { border-color: var(--tdmd-teal); }
.tdmd-emp-faq summary {
  padding: 1.125rem 1.25rem;
  font-weight: 700;
  color: var(--tdmd-navy);
  font-size: 1rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.tdmd-emp-faq summary::-webkit-details-marker { display: none; }
.tdmd-emp-faq summary::after {
  content: '+';
  color: var(--tdmd-accent);
  font-weight: 300;
  font-size: 1.75rem;
  line-height: 1;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.tdmd-emp-faq details[open] summary::after { transform: rotate(45deg); }
.tdmd-emp-faq details > div {
  padding: 0 1.25rem 1.25rem;
  color: var(--tdmd-text);
  font-size: 0.95rem;
  line-height: 1.65;
}

/* ===== Lead form ===== */
.tdmd-emp-form-wrap {
  max-width: 640px;
  margin: 0 auto;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);
  border: 1px solid var(--tdmd-border);
}
.tdmd-emp-form-wrap h2 { text-align: center; margin-bottom: 0.5rem; }
.tdmd-emp-form-wrap > p {
  text-align: center;
  color: var(--tdmd-muted);
  margin-bottom: 1.75rem;
}
.tdmd-emp-pathsel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--tdmd-bg-soft);
  padding: 0.375rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
}
.tdmd-emp-pathbtn {
  padding: 0.625rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--tdmd-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s ease;
}
.tdmd-emp-pathbtn[aria-selected="true"] {
  background: var(--tdmd-teal);
  color: #ffffff;
}
.tdmd-emp-jotform-host { min-height: 480px; }
.tdmd-emp-jotform-host iframe { width: 100% !important; min-height: 600px; border: 0; }
.tdmd-emp-form-fallback {
  text-align: center;
  padding: 2rem 1rem;
  color: var(--tdmd-muted);
  font-size: 0.95rem;
}

/* ===== Broker — fee callout ===== */
.tdmd-emp-feecard {
  background: linear-gradient(135deg, var(--tdmd-accent) 0%, #e64a26 100%);
  color: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(255, 90, 54, 0.35);
}
.tdmd-emp-feecard-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 800;
  opacity: 0.92;
  margin-bottom: 0.25rem;
}
.tdmd-emp-feecard-number {
  font-family: 'Merriweather', Georgia, serif;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0.25rem 0;
}
.tdmd-emp-feecard p { font-size: 1rem; margin-top: 0.75rem; opacity: 0.95; }

.tdmd-emp-offerlist {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 720px;
}
.tdmd-emp-offerlist li {
  padding: 1rem 0 1rem 2rem;
  position: relative;
  font-size: 1rem;
  color: var(--tdmd-text);
  border-bottom: 1px solid var(--tdmd-border);
  line-height: 1.55;
}
.tdmd-emp-offerlist li:last-child { border-bottom: none; }
.tdmd-emp-offerlist li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--tdmd-accent);
  font-weight: 900;
  font-size: 1.25rem;
}
.tdmd-emp-offerlist strong { color: var(--tdmd-navy); }

.tdmd-emp-resources {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
  max-width: 880px;
  margin: 0 auto;
}
.tdmd-emp-resource {
  background: #ffffff;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--tdmd-border);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--tdmd-text);
  font-weight: 700;
}
.tdmd-emp-resource-icon {
  width: 32px; height: 32px;
  background: var(--tdmd-teal);
  color: #ffffff;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 0.95rem;
  font-weight: 900;
  flex-shrink: 0;
}

.tdmd-emp-florida {
  background: rgba(255, 90, 54, 0.08);
  border-left: 4px solid var(--tdmd-accent);
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  font-size: 0.9rem;
  color: var(--tdmd-text);
  line-height: 1.65;
  max-width: 720px;
  margin: 2rem auto 0;
}
.tdmd-emp-florida strong { color: var(--tdmd-accent); }

/* ===== Compliance footer block (above SiteFooter) ===== */
.tdmd-emp-compliance {
  background: var(--tdmd-bg-soft);
  border-top: 4px solid var(--tdmd-navy);
  padding: 3rem 0 2.5rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--tdmd-muted);
}
.tdmd-emp-compliance .tdmd-emp-container { max-width: 980px; }
.tdmd-emp-compliance h4 {
  color: var(--tdmd-navy);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 0.625rem;
  font-weight: 800;
  font-family: 'Inter', system-ui, sans-serif;
}
.tdmd-emp-compliance-block {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--tdmd-border);
}
.tdmd-emp-compliance-block:last-of-type { border-bottom: none; padding-bottom: 0; }
.tdmd-emp-compliance p { margin: 0; }
.tdmd-emp-compliance strong { color: var(--tdmd-text); }

/* ===== Responsive ===== */
@media (max-width: 880px) {
  .tdmd-emp-hero-grid { grid-template-columns: 1fr; gap: 2rem; }
  .tdmd-emp-pricecard { max-width: 420px; margin: 0 auto; }
  .tdmd-emp-steps { grid-template-columns: 1fr; gap: 2rem; }
  .tdmd-emp-vcards { grid-template-columns: 1fr; }
  .tdmd-emp-scope { grid-template-columns: 1fr; }
  .tdmd-emp-founder { grid-template-columns: 1fr; text-align: center; gap: 1.5rem; }
  .tdmd-emp-founder-img { max-width: 240px; margin: 0 auto; }
  .tdmd-emp-founder-badges { justify-content: center; }
  .tdmd-emp-reviews-stats { grid-template-columns: repeat(2, 1fr); }
  .tdmd-emp-tests { grid-template-columns: 1fr; }
  .tdmd-emp-resources { grid-template-columns: 1fr; }
  .tdmd-emp-pricerow { grid-template-columns: 1fr; gap: 0.25rem; }
  .tdmd-emp-pricerow .tdmd-emp-pvalue { text-align: left; }
  .tdmd-emp-feecard-number { font-size: 3.5rem; }
  .tdmd-emp-press-row { gap: 1.5rem; }
  .tdmd-emp-press-row img { height: 22px; }
  .tdmd-emp-form-wrap { padding: 1.5rem; }
}

/* ===== Dark mode adjustments (inherits from tdmd-styles dark vars) ===== */
:root[data-theme="dark"] .tdmd-emp-pricecard,
:root[data-theme="dark"] .tdmd-emp-step,
:root[data-theme="dark"] .tdmd-emp-vcard,
:root[data-theme="dark"] .tdmd-emp-tabpanel,
:root[data-theme="dark"] .tdmd-emp-scope-col,
:root[data-theme="dark"] .tdmd-emp-pricing-table,
:root[data-theme="dark"] .tdmd-emp-compare,
:root[data-theme="dark"] .tdmd-emp-review-stat,
:root[data-theme="dark"] .tdmd-emp-test,
:root[data-theme="dark"] .tdmd-emp-faq details,
:root[data-theme="dark"] .tdmd-emp-resource,
:root[data-theme="dark"] .tdmd-emp-form-wrap,
:root[data-theme="dark"] .tdmd-emp-trust,
:root[data-theme="dark"] .tdmd-emp-press,
:root[data-theme="dark"] .tdmd-emp-badge {
  background: var(--tdmd-card);
  color: var(--tdmd-text);
}
:root[data-theme="dark"] .tdmd-emp-compare th {
  background: var(--tdmd-navy);
}
:root[data-theme="dark"] .tdmd-emp-compare td:first-child {
  background: var(--tdmd-bg-soft);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .tdmd-emp-pricecard,
  :root:not([data-theme="light"]) .tdmd-emp-step,
  :root:not([data-theme="light"]) .tdmd-emp-vcard,
  :root:not([data-theme="light"]) .tdmd-emp-tabpanel,
  :root:not([data-theme="light"]) .tdmd-emp-scope-col,
  :root:not([data-theme="light"]) .tdmd-emp-pricing-table,
  :root:not([data-theme="light"]) .tdmd-emp-compare,
  :root:not([data-theme="light"]) .tdmd-emp-review-stat,
  :root:not([data-theme="light"]) .tdmd-emp-test,
  :root:not([data-theme="light"]) .tdmd-emp-faq details,
  :root:not([data-theme="light"]) .tdmd-emp-resource,
  :root:not([data-theme="light"]) .tdmd-emp-form-wrap,
  :root:not([data-theme="light"]) .tdmd-emp-trust,
  :root:not([data-theme="light"]) .tdmd-emp-press,
  :root:not([data-theme="light"]) .tdmd-emp-badge {
    background: var(--tdmd-card);
    color: var(--tdmd-text);
  }
}
`;
