export const metadata = {
  title: 'Medication History Disclosure | TeleDirectMD',
  description: 'TeleDirectMD Medication History Disclosure — how we access and use your medication history to provide safe, informed telehealth care.',
  alternates: { canonical: 'https://teledirectmd.com/medication-history-disclosure' },
};

export default function MedicationHistoryDisclosure() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Medication History Disclosure</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: March 25, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 }}>Overview</h2>
        <p>TeleDirectMD ("we," "our," or "the Practice") may access your medication history through electronic prescription drug monitoring databases, pharmacy benefit managers, and health information exchanges to support the safe prescribing of medications during your telehealth visit.</p>

        <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 }}>What Information We Access</h2>
        <p>When you consent to this disclosure, we may retrieve information including:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Current and past prescription medications dispensed at retail, mail-order, and specialty pharmacies</li>
          <li>Controlled substance dispensing history through applicable state Prescription Drug Monitoring Programs (PDMPs)</li>
          <li>Medication allergies and adverse reactions on file with participating pharmacies or health plans</li>
          <li>Over-the-counter medication records if available through participating health information exchanges</li>
        </ul>

        <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 }}>Why We Access This Information</h2>
        <p>Reviewing your medication history allows your physician to:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Avoid prescribing medications that may interact with drugs you are currently taking</li>
          <li>Identify potential duplicate therapies</li>
          <li>Verify allergy and adverse reaction history before prescribing</li>
          <li>Comply with state PDMP requirements for prescribing controlled substances, where applicable</li>
          <li>Provide more informed and safer medical care</li>
        </ul>

        <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 }}>How This Information Is Protected</h2>
        <p>All medication history data retrieved is treated as protected health information (PHI) under HIPAA. It is stored in your electronic health record within our HIPAA-compliant systems, subject to the same privacy and security protections described in our <a href="/notice-of-privacy-practices" style={{ color: '#1a7f7f' }}>Notice of Privacy Practices</a>. Access is limited to authorized clinical personnel involved in your care.</p>

        <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 }}>Your Rights</h2>
        <p>You have the right to:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Ask your physician what medication history was retrieved during your visit</li>
          <li>Request corrections to inaccurate medication information in your medical record</li>
          <li>Decline to consent to medication history retrieval, though this may limit your physician's ability to safely prescribe certain medications</li>
        </ul>

        <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 }}>Contact</h2>
        <p>If you have questions about this disclosure, contact us at:</p>
        <p style={{ marginTop: 8 }}>
          TeleDirectMD<br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>
      </section>
    </div>
  );
}
