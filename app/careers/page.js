export const metadata = {
  title: 'Careers: Evening and Weekend Telemedicine Physician (MD/DO) | TeleDirectMD',
  description: 'TeleDirectMD is hiring a remote MD or DO for evening and weekend video visits. $40 per visit on weekday evenings, $45 per visit on weekends. 1099, set your own availability.',
  alternates: { canonical: 'https://teledirectmd.com/careers/' },
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

const s = {
  h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 },
  ul: { paddingLeft: 24, marginTop: 8 },
};

export default function Careers() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingLd) }} />

      <p style={{ color: '#1a7f7f', fontWeight: 600, letterSpacing: '0.04em', fontSize: '0.85rem', marginBottom: 8 }}>CAREERS</p>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
        Telemedicine Physician (MD/DO), Evenings and Weekends
      </h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Remote &middot; Independent contractor (1099) &middot; Posted October 28, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <p>
          TeleDirectMD is a physician-only, direct-pay telehealth practice founded and led by Parth Bhavsar, MD, a board-certified
          family medicine physician. Patients book a secure video visit and see a physician, and cash-pay patients pay one flat $79 fee
          up front. No NPs or PAs, and no volume quotas. We are licensed in 40+ states and LegitScript-certified.
        </p>
        <p>We are adding a physician to cover weekday evenings and weekends.</p>

        <h2 style={s.h2}>What you&apos;ll do</h2>
        <ul style={s.ul}>
          <li>Scheduled video visits for common urgent and primary care concerns, for both cash-pay and insured patients</li>
          <li>Document in Elation Health. Patients book through Acuity, so you see your schedule in advance</li>
          <li>15-minute visits, booked in 15-minute slots</li>
          <li>Use your own clinical judgment. Pay is never tied to prescribing or patient ratings</li>
          <li>No controlled-substance prescribing in this role</li>
        </ul>

        <h2 style={s.h2}>Compensation</h2>
        <ul style={s.ul}>
          <li>$40 per completed video visit, weekday evenings (Monday to Thursday, starting at 5 p.m. Eastern)</li>
          <li>$45 per completed video visit, weekends (Friday 5 p.m. to Monday 7 a.m. Eastern) and holidays</li>
          <li>
            A fully booked hour (4 visits) equals $160 per hour on weekday evenings and $180 per hour on weekends. Actual earnings
            depend on booked volume and are not guaranteed
          </li>
          <li>Paid biweekly</li>
        </ul>

        <h2 style={s.h2}>Benefits and support</h2>
        <ul style={s.ul}>
          <li>TeleDirectMD pays for additional state licenses we ask you to obtain</li>
          <li>You set your own availability. No minimum hours and no non-compete</li>
          <li>Independent contractor (1099)</li>
        </ul>

        <h2 style={s.h2}>Requirements</h2>
        <ul style={s.ul}>
          <li>MD or DO, board-certified in family medicine or internal medicine</li>
          <li>
            Active, unrestricted medical licenses in 30+ states preferred. Physicians with 15+ licenses who are eligible for the
            Interstate Medical Licensure Compact are encouraged to apply
          </li>
          <li>Comfortable with video-based care and independent decision-making</li>
          <li>Clean licensure and malpractice history</li>
        </ul>

        <h2 style={s.h2}>How to apply</h2>
        <p>
          Email{' '}
          <a href="mailto:contact@teledirectmd.com?subject=Evening%2FWeekend%20Physician" style={{ color: '#1a7f7f' }}>
            contact@teledirectmd.com
          </a>{' '}
          with your CV, NPI, and a list of your active state licenses. Put &ldquo;Evening/Weekend Physician&rdquo; in the subject line.
        </p>
      </section>
    </div>
  );
}
