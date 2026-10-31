import { PRESCRIBING_POLICY, REFILL_POLICY, ED_REFILL_POLICY } from '../../lib/prescribing-policy';

export const metadata = {
  title: 'Patient Policies | TeleDirectMD',
  description: 'TeleDirectMD prescribing limits, the 90-day refill policy, and the consent, disclosure and notice documents that apply to every visit.',
  alternates: { canonical: 'https://teledirectmd.com/patient-policies' },
};

const DOCUMENTS = [
  { href: '/telehealth-consent/', label: 'Telehealth Informed Consent', note: 'How video visits work, their risks and limits, and your right to decline.' },
  { href: '/state-specific-notices/', label: 'State-Specific Telehealth Notices', note: 'Disclosures required by individual states.' },
  { href: '/financial-responsibility.pdf', label: 'Financial Responsibility', note: 'Fees, payment and what you are responsible for (PDF).' },
  { href: '/controlled-substance-policy.pdf', label: 'Controlled Substance Policy', note: 'TeleDirectMD does not prescribe controlled substances (PDF).' },
  { href: '/medical-records-notice/', label: 'Medical Records Notice', note: 'How to request your records.' },
  { href: '/medication-history-disclosure/', label: 'Medication History Disclosure', note: 'How we access and use your medication history.' },
  { href: '/esign-disclosure/', label: 'Electronic Signature Disclosure', note: 'Consent to sign and receive documents electronically.' },
  { href: '/operational-communications/', label: 'Operational Communications', note: 'Appointment and care-related messages.' },
  { href: '/marketing-communications/', label: 'Marketing Communications', note: 'Optional promotional messages and how to opt out.' },
];

export default function PatientPolicies() {
  const s = {
    h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 },
    link: { color: '#1a7f7f', fontWeight: 600 },
  };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Patient Policies</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>These policies apply to every TeleDirectMD visit.</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={s.h2}>Prescribing limits</h2>
        <p data-prescribing-policy="policies">{PRESCRIBING_POLICY}</p>

        <h2 style={s.h2}>Refill policy</h2>
        <p data-refill-policy="policies">{REFILL_POLICY}</p>
        <p style={{ marginTop: 12 }}>{ED_REFILL_POLICY}</p>

        <h2 style={s.h2}>Consents, disclosures and notices</h2>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          {DOCUMENTS.map(d => (
            <li key={d.href} style={{ marginBottom: 8 }}>
              <a href={d.href} style={s.link}>{d.label}</a>. {d.note}
            </li>
          ))}
        </ul>

        <h2 style={s.h2}>Contact</h2>
        <p>
          Questions about these policies: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
