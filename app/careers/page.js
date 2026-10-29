import { darkCSS } from '../../lib/dark-css';

export const metadata = {
  title: 'Careers: Evening and Weekend Telemedicine Physician (MD/DO) | TeleDirectMD',
  description: 'TeleDirectMD is hiring a remote MD or DO for evening and weekend video visits. $40 per visit on weekday evenings, $45 per visit on weekends. 1099, set your own availability.',
  alternates: { canonical: 'https://teledirectmd.com/careers/' },
  openGraph: {
    title: 'Now hiring: Telemedicine Physician (MD/DO), Evenings and Weekends',
    url: 'https://teledirectmd.com/careers/',
    images: [{ url: 'https://teledirectmd.com/careers/evening-weekend-physician.jpg', width: 1200, height: 1500 }],
  },
};

const DATE_POSTED = '2026-10-28';
const VALID_THROUGH = '2027-01-28';

const jobPostingLd = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Telemedicine Physician (MD/DO), Evenings and Weekends',
  description:
    '<p>TeleDirectMD is a physician-only, direct-pay telehealth practice adding an MD or DO to cover weekday evenings and weekends. ' +
    'Scheduled 15-minute video visits for common urgent and primary care concerns, cash-pay and insured patients. ' +
    'No controlled-substance prescribing.</p>' +
    '<p>Compensation: $40 per completed video visit on weekday evenings (Monday to Thursday, starting at 5 p.m. Eastern); ' +
    '$45 per completed video visit on weekends (Friday 5 p.m. to Monday 7 a.m. Eastern) and holidays. Paid biweekly. ' +
    'Independent contractor (1099). TeleDirectMD pays for additional state licenses it asks you to obtain.</p>' +
    '<p>Requirements: MD or DO, board-certified in family medicine or internal medicine. Active, unrestricted licenses in 30+ states preferred; ' +
    'physicians with 15+ licenses who are eligible for the Interstate Medical Licensure Compact are encouraged to apply.</p>',
  datePosted: DATE_POSTED,
  validThrough: VALID_THROUGH,
  employmentType: ['CONTRACTOR', 'PART_TIME'],
  hiringOrganization: {
    '@type': 'MedicalOrganization',
    name: 'TeleDirectMD',
    sameAs: 'https://teledirectmd.com/',
    logo: 'https://teledirectmd.com/logo.png',
  },
  jobLocationType: 'TELECOMMUTE',
  applicantLocationRequirements: { '@type': 'Country', name: 'United States' },
  directApply: false,
  industry: 'Health care',
  occupationalCategory: '29-1215 Family Medicine Physicians',
};

const CHECK = (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const CSS = `
.tdc{--c-navy:#003E52;--c-deep:#002B3A;--c-teal:#0C8F99;--c-mint:#7fe3d6;--c-coral:#E8604C;--c-ink:#0E2A35;--c-muted:#4D6B76;--c-mist:#F4FAFB;--c-card:#fff;--c-line:rgba(0,62,82,.12);
  font-family:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;color:var(--c-ink);background:var(--c-mist);-webkit-font-smoothing:antialiased}
.tdc *{box-sizing:border-box}
.tdc-hero{background:radial-gradient(120% 140% at 85% 0%,rgba(12,143,153,.35) 0%,rgba(0,43,58,0) 55%),var(--c-deep);color:#fff;padding:72px 0 120px}
.tdc-wrap{max-width:880px;margin:0 auto;padding:0 24px}
.tdc-pill{display:inline-block;background:var(--c-coral);color:#fff;font-weight:600;font-size:.78rem;letter-spacing:.16em;padding:8px 16px;border-radius:999px}
.tdc-eyebrow{margin-top:22px;font-weight:600;font-size:.82rem;letter-spacing:.18em;color:var(--c-mint);text-transform:uppercase}
.tdc h1{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:clamp(2.2rem,5.4vw,3.6rem);line-height:1.05;letter-spacing:-.02em;margin:12px 0 0;color:#fff}
.tdc h1 span{color:var(--c-mint)}
.tdc-meta{margin-top:18px;color:#bcd3da;font-size:.98rem}
.tdc-cards{max-width:880px;margin:-80px auto 0;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:20px;position:relative}
.tdc-card{background:var(--c-card);border-radius:22px;padding:28px 30px;box-shadow:0 18px 50px rgba(0,62,82,.12);border:1px solid var(--c-line);border-left:6px solid var(--c-teal)}
.tdc-card.wk{border-left-color:var(--c-navy)}
.tdc-amt{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:3.4rem;line-height:1;color:var(--c-navy);letter-spacing:-.03em}
.tdc-amt small{font-family:'Inter',sans-serif;font-size:1rem;font-weight:500;color:var(--c-muted);margin-left:8px;letter-spacing:0}
.tdc-lbl{margin-top:14px;font-weight:700;font-size:1.1rem}
.tdc-when{margin-top:4px;color:var(--c-muted);font-size:.95rem}
.tdc-note{max-width:880px;margin:16px auto 0;padding:0 24px;color:var(--c-muted);font-size:.92rem;line-height:1.6}
.tdc-body{max-width:880px;margin:0 auto;padding:24px 24px 88px}
.tdc-lead{font-size:1.08rem;line-height:1.75;color:var(--c-ink);margin:24px 0 0}
.tdc h2{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.6rem;letter-spacing:-.01em;color:var(--c-navy);margin:44px 0 14px}
.tdc ul.tdc-list{list-style:none;padding:0;margin:0;display:grid;gap:12px}
.tdc-list li{display:flex;gap:12px;align-items:flex-start;line-height:1.6;font-size:1.02rem}
.tdc-dot{flex:none;width:24px;height:24px;margin-top:2px;border-radius:50%;background:var(--c-teal);color:#fff;display:flex;align-items:center;justify-content:center}
.tdc-apply{margin-top:52px;background:var(--c-deep);color:#fff;border-radius:24px;padding:36px 34px}
.tdc-apply h2{color:#fff;margin:0 0 10px}
.tdc-apply p{color:#d5e6eb;line-height:1.7;margin:0}
.tdc-btn{display:inline-block;margin-top:22px;background:var(--c-coral);color:#fff !important;font-weight:600;padding:14px 26px;border-radius:999px;text-decoration:none}
.tdc-btn:hover{filter:brightness(1.06)}
@media (max-width:640px){.tdc-cards{grid-template-columns:1fr}.tdc-hero{padding:56px 0 110px}.tdc-amt{font-size:2.9rem}}
` + darkCSS(`
DARK .tdc{--c-ink:#e2edf0;--c-muted:#9fb6bf;--c-mist:#0a171c;--c-card:#122028;--c-navy:#a0d8e8;--c-line:#2b4652}
DARK .tdc-card{box-shadow:0 18px 50px rgba(0,0,0,.35)}
DARK .tdc-apply{background:#0f1f24;border:1px solid #2b4652}
`);

function List({ items }) {
  return (
    <ul className="tdc-list">
      {items.map((t) => (
        <li key={t}><span className="tdc-dot">{CHECK}</span><span>{t}</span></li>
      ))}
    </ul>
  );
}

export default function Careers() {
  return (
    <div className="tdc">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingLd) }} />

      <section className="tdc-hero">
        <div className="tdc-wrap">
          <span className="tdc-pill">NOW HIRING</span>
          <p className="tdc-eyebrow">Careers &middot; Remote &middot; 1099</p>
          <h1>Telemedicine Physician <span>(MD/DO)</span>, Evenings and Weekends</h1>
          <p className="tdc-meta">Independent contractor &middot; Posted October 28, 2026</p>
        </div>
      </section>

      <div className="tdc-cards">
        <div className="tdc-card">
          <div className="tdc-amt">$40<small>per completed visit</small></div>
          <div className="tdc-lbl">Weekday evenings</div>
          <div className="tdc-when">Monday to Thursday, starting at 5 p.m. Eastern</div>
        </div>
        <div className="tdc-card wk">
          <div className="tdc-amt">$45<small>per completed visit</small></div>
          <div className="tdc-lbl">Weekends and holidays</div>
          <div className="tdc-when">Friday 5 p.m. to Monday 7 a.m. Eastern</div>
        </div>
      </div>
      <p className="tdc-note">
        A fully booked hour (4 visits) equals $160 per hour on weekday evenings and $180 per hour on weekends. Actual earnings
        depend on booked volume and are not guaranteed. Paid biweekly.
      </p>

      <div className="tdc-body">
        <p className="tdc-lead">
          TeleDirectMD is a physician-only, direct-pay telehealth practice founded and led by Parth Bhavsar, MD, a board-certified
          family medicine physician. Patients book a secure video visit and see a physician, and cash-pay patients pay one flat $79 fee
          up front. No NPs or PAs, and no volume quotas. We are licensed in 40+ states and LegitScript-certified. We are adding a
          physician to cover weekday evenings and weekends.
        </p>

        <h2>What you&apos;ll do</h2>
        <List items={[
          'Scheduled video visits for common urgent and primary care concerns, for both cash-pay and insured patients',
          'Document in Elation Health. Patients book through Acuity, so you see your schedule in advance',
          '15-minute visits, booked in 15-minute slots',
          'Use your own clinical judgment. Pay is never tied to prescribing or patient ratings',
          'No controlled-substance prescribing in this role',
        ]} />

        <h2>Benefits and support</h2>
        <List items={[
          'TeleDirectMD pays for additional state licenses we ask you to obtain',
          'You set your own availability. No minimum hours and no non-compete',
          'Independent contractor (1099)',
        ]} />

        <h2>Requirements</h2>
        <List items={[
          'MD or DO, board-certified in family medicine or internal medicine',
          'Active, unrestricted medical licenses in 30+ states preferred. Physicians with 15+ licenses who are eligible for the Interstate Medical Licensure Compact are encouraged to apply',
          'Comfortable with video-based care and independent decision-making',
          'Clean licensure and malpractice history',
        ]} />

        <div className="tdc-apply">
          <h2>How to apply</h2>
          <p>
            Email contact@teledirectmd.com with your CV, NPI, and a list of your active state licenses. Put &ldquo;Evening/Weekend
            Physician&rdquo; in the subject line.
          </p>
          <a className="tdc-btn" href="mailto:contact@teledirectmd.com?subject=Evening%2FWeekend%20Physician">Email your application</a>
        </div>
      </div>
    </div>
  );
}
