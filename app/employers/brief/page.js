import { employersCSS } from '../employers-styles';
import BriefFormEmbed from './BriefFormEmbed';

export const metadata = {
  title: 'The Employer Brief — Free PDF | TeleDirectMD',
  description:
    'A practical 8-page guide to $0-employer-cost virtual care. Who we treat, what it costs, what we honestly cannot do, and how a one-page agreement gets your team live in a week. Free PDF.',
  alternates: { canonical: 'https://teledirectmd.com/employers/brief' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'article',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'The Employer Brief — Free PDF | TeleDirectMD',
    description:
      'An 8-page broker-and-HR guide to $0-employer-cost virtual care. Honest scope, primary-source citations, compliance posture.',
    url: 'https://teledirectmd.com/employers/brief',
    images: ['https://teledirectmd.com/og-employers.jpg'],
  },
  twitter: { card: 'summary_large_image' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/employers/brief#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'For Employers', item: 'https://teledirectmd.com/employers/' },
        { '@type': 'ListItem', position: 3, name: 'The Employer Brief', item: 'https://teledirectmd.com/employers/brief/' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/employers/brief#webpage',
      url: 'https://teledirectmd.com/employers/brief/',
      name: 'The Employer Brief | TeleDirectMD',
      description: 'Free 8-page PDF guide to $0-employer-cost virtual care for SMB owners, HR teams, and benefits brokers.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': 'https://teledirectmd.com/employers/brief#breadcrumbs' },
      primaryImageOfPage: 'https://teledirectmd.com/og-employers.jpg',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
    },
    {
      '@type': 'DigitalDocument',
      '@id': 'https://teledirectmd.com/employers/brief#document',
      name: 'The TeleDirectMD Employer Brief',
      description: 'An 8-page guide to $0-employer-cost virtual care covering scope, pricing, compliance, industry fit, and how to launch.',
      url: 'https://teledirectmd.com/downloads/teledirectmd-employer-brief.pdf',
      encodingFormat: 'application/pdf',
      author: { '@id': 'https://teledirectmd.com/#physician' },
      publisher: { '@id': 'https://teledirectmd.com/#organization' },
      datePublished: '2026-05-23',
      inLanguage: 'en-US',
    },
  ],
};

const previewItems = [
  { num: '01', label: 'The Problem', body: 'Mercer $17,496 PEPY cost. 27.8% uninsured in construction. 22% in food service. Primary-source citations.' },
  { num: '02', label: 'What TeleDirectMD Is', body: 'Physician-led practice. $0 to employer. Preferred employer per-visit rate or in-network billing. Continuity with a board-certified physician, not a rotating roster.' },
  { num: '03', label: 'Scope — What We Honestly Cannot Do', body: 'In scope: chronic disease, acute illness, mental health. Out of scope: DOT physicals, OSHA 1910.134, controlled substances, TB testing.' },
  { num: '04', label: 'How It Works', body: 'Discovery call → one-page agreement → enrollment code → booking. Typically one week from first call to first visit.' },
  { num: '05', label: 'Industry Fit', body: 'Where the benefit moves the needle: trucking, restaurants, home care, construction, cleaning.' },
  { num: '06', label: 'Compliance Posture', body: 'ERISA voluntary-plan safe harbor. HSA/FSA/ICHRA eligible. HIPAA. LegitScript. Florida broker exclusion.' },
  { num: '07', label: 'Next Steps', body: 'Three CTAs: discovery call for HR, broker partnership at $250 flat, direct contact.' },
];

export default function BriefPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: employersCSS }} />
      <style dangerouslySetInnerHTML={{ __html: briefPageExtras }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="tdmd-emp">

        {/* ============ HERO ============ */}
        <section className="tdmd-emp-hero">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-hero-grid">
              <div>
                <span className="tdmd-emp-eyebrow">Free Download · 8-Page PDF · 2026 Edition</span>
                <h1>The Employer Brief: a practical guide to <em>$0-employer-cost</em> virtual care.</h1>
                <p className="tdmd-emp-hero-sub">
                  Built for SMB owners, HR teams, and benefits brokers evaluating direct-pay telehealth as a benefit. Includes the scope we cover, the things we honestly will <strong>not</strong> do, primary-source citations, compliance posture, and a one-week launch timeline.
                </p>
                <div className="tdmd-emp-ctas">
                  <a href="#form" className="tdmd-emp-btn tdmd-emp-btn--primary">Get the Brief</a>
                  <a href="#preview" className="tdmd-emp-btn tdmd-emp-btn--outline">See what&apos;s inside</a>
                </div>
              </div>
              <div className="tdmd-brief-cover">
                <div className="tdmd-brief-cover-inner">
                  <div className="tdmd-brief-cover-eyebrow">For Employers · Brokers · HR Teams</div>
                  <div className="tdmd-brief-cover-title">The Employer Brief</div>
                  <div className="tdmd-brief-cover-sub">A practical guide to $0-employer-cost virtual care.</div>
                  <div className="tdmd-brief-cover-meta">8 pages · Free PDF · Updated May 2026</div>
                </div>
                <div className="tdmd-brief-cover-bar" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <div className="tdmd-emp-trust">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-trust-row">
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>Primary-source citations</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>Honest scope — what we will and won&apos;t do</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>ERISA · HSA/FSA · HIPAA posture</div>
              <div className="tdmd-emp-trust-item"><span className="tdmd-emp-trust-dot" aria-hidden="true"></span>Authored by a board-certified MD</div>
            </div>
          </div>
        </div>

        {/* ============ PREVIEW ============ */}
        <section className="tdmd-emp-section" id="preview">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">What&apos;s inside</span>
              <h2>An honest read for benefits buyers, not a pitch deck.</h2>
              <p style={{ color: 'var(--tdmd-muted)', fontSize: '1.0625rem', maxWidth: 720, margin: '0 auto' }}>
                Most telehealth one-pagers blur the line between primary care and occupational medicine. This one doesn&apos;t. It tells you what we treat, what we explicitly do not do, and where the benefit moves the needle.
              </p>
            </div>
            <ol className="tdmd-brief-toc">
              {previewItems.map((item) => (
                <li key={item.num}>
                  <div className="tdmd-brief-toc-num">{item.num}</div>
                  <div>
                    <div className="tdmd-brief-toc-label">{item.label}</div>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ WHO IT'S FOR ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-secthead">
              <span className="tdmd-emp-eyebrow">Who this is for</span>
              <h2>Three readers — same brief, three different reasons to download it.</h2>
            </div>
            <div className="tdmd-emp-vcards" style={{ maxWidth: 980, margin: '0 auto' }}>
              <div className="tdmd-emp-vcard">
                <h3>SMB owners</h3>
                <p>You&apos;ve seen carrier premiums climb 6% a year. You want a benefit that actually helps your team — without buying another PEPM contract. Skim sections 02, 04, and 07.</p>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>HR &amp; benefits leads</h3>
                <p>You need a memo your benefits counsel can sign off on in a day, not a quarter. Section 06 covers ERISA voluntary-plan safe harbor, HSA/FSA, and HIPAA in plain language.</p>
              </div>
              <div className="tdmd-emp-vcard">
                <h3>Brokers &amp; consultants</h3>
                <p>You&apos;re looking for a differentiator your clients haven&apos;t seen. Section 03 (scope) and section 07 (the $250 flat fee) tell you whether this fits your book.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ AUTHOR ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-author" style={{ maxWidth: 820, margin: '0 auto' }}>
              <h2 style={{ marginBottom: '0.5rem' }}>Authored by Parth Bhavsar, MD</h2>
              <p style={{ color: 'var(--tdmd-muted)', fontSize: '1.0625rem' }}>
                Board-Certified Family Medicine Physician. Founder of TeleDirectMD. Residency: University of Mississippi Medical Center (UMMC), 2021. Licensed in 43 states + DC. NPI 1104323203. 5.0&star; across 125 verified reviews on Healthgrades, ZocDoc, WebMD, and Google.
              </p>
              <p style={{ color: 'var(--tdmd-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>
                <strong style={{ color: 'var(--tdmd-navy)' }}>Physician roster expanding.</strong> TeleDirectMD is currently expanding the physician roster to add capacity across the service area. Brokers and employers evaluating multi-state rollouts can ask for the current state-coverage roster on a discovery call.
              </p>
            </div>
          </div>
        </section>

        {/* ============ LEAD FORM ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container">
            <BriefFormEmbed />
          </div>
        </section>

      </div>

      {/* ============ COMPLIANCE FOOTER ============ */}
      <section className="tdmd-emp-compliance">
        <div className="tdmd-emp-container">
          <div className="tdmd-emp-compliance-block">
            <h4>About this brief</h4>
            <p>The TeleDirectMD Employer Brief is an educational document. It is <strong>not</strong> medical advice, legal advice, or tax advice. Compliance language (ERISA voluntary-plan safe harbor, HSA/FSA eligibility) is general and your specific plan design should be reviewed by your benefits counsel.</p>
          </div>
          <div className="tdmd-emp-compliance-block">
            <h4>Service nature</h4>
            <p>TeleDirectMD provides direct-pay primary care telehealth and is <strong>not a health insurance product</strong>. The brief outlines a voluntary, employee-pay-all arrangement designed to fall within the DOL voluntary-plan safe harbor.</p>
          </div>
          <div className="tdmd-emp-compliance-block">
            <h4>Provider identity</h4>
            <p>Brief authored by Parth Bhavsar, MD — Board-Certified Family Medicine Physician · NPI 1104323203 · Residency: University of Mississippi Medical Center, 2021 · Licensed in 43 states + DC.</p>
          </div>
        </div>
      </section>
    </>
  );
}

const briefPageExtras = `
.tdmd-brief-cover{
  position:relative;
  background:linear-gradient(140deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);
  border-radius:1.25rem;
  padding:2.5rem 2rem 3rem;
  color:#fff;
  box-shadow:0 24px 60px -28px rgba(0,62,82,0.55);
  overflow:hidden;
  min-height:340px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.tdmd-brief-cover::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 90% 15%, rgba(255,255,255,0.08) 0 60px, transparent 61px),
    radial-gradient(circle at 88% 70%, rgba(255,255,255,0.06) 0 90px, transparent 91px),
    radial-gradient(circle at 95% 40%, rgba(255,255,255,0.05) 0 40px, transparent 41px);
  pointer-events:none;
}
.tdmd-brief-cover-inner{ position:relative; z-index:1; }
.tdmd-brief-cover-eyebrow{
  font-size:0.7rem;
  font-weight:800;
  letter-spacing:0.16em;
  text-transform:uppercase;
  color:var(--tdmd-accent);
  margin-bottom:1.25rem;
}
.tdmd-brief-cover-title{
  font-family:var(--tdmd-display, 'Fraunces', Georgia, serif);
  font-size:2.5rem;
  line-height:1.05;
  font-weight:700;
  margin-bottom:0.75rem;
}
.tdmd-brief-cover-sub{
  font-family:var(--tdmd-display, 'Fraunces', Georgia, serif);
  font-size:1.1rem;
  font-style:italic;
  color:rgba(255,255,255,0.85);
  margin-bottom:1.5rem;
  line-height:1.4;
}
.tdmd-brief-cover-meta{
  font-size:0.8rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:rgba(255,255,255,0.7);
  font-weight:600;
}
.tdmd-brief-cover-bar{
  position:absolute;
  right:2rem;
  bottom:1.5rem;
  width:90px;
  height:5px;
  background:var(--tdmd-accent);
  border-radius:3px;
  z-index:1;
}

.tdmd-brief-toc{
  list-style:none;
  padding:0;
  margin:0;
  max-width:820px;
  margin-left:auto;
  margin-right:auto;
  display:grid;
  gap:1rem;
}
.tdmd-brief-toc li{
  display:grid;
  grid-template-columns:auto 1fr;
  gap:1.25rem;
  align-items:start;
  padding:1.25rem 1.5rem;
  background:#fff;
  border:1px solid var(--tdmd-border);
  border-radius:0.875rem;
}
.tdmd-brief-toc-num{
  font-family:var(--tdmd-display, 'Fraunces', Georgia, serif);
  font-size:1.5rem;
  font-weight:700;
  color:var(--tdmd-teal);
  line-height:1;
  padding-top:2px;
}
.tdmd-brief-toc-label{
  font-family:var(--tdmd-display, 'Fraunces', Georgia, serif);
  font-size:1.125rem;
  font-weight:700;
  color:var(--tdmd-navy);
  margin-bottom:0.25rem;
}
.tdmd-brief-toc li p{
  margin:0;
  color:var(--tdmd-muted);
  font-size:0.95rem;
  line-height:1.55;
}

@media (max-width: 780px){
  .tdmd-brief-cover{ min-height:280px; padding:2rem 1.5rem 2.5rem; }
  .tdmd-brief-cover-title{ font-size:2rem; }
  .tdmd-brief-toc li{ padding:1rem 1.25rem; gap:1rem; }
}
`;
