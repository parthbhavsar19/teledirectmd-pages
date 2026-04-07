import Link from 'next/link';
import { getWorkNoteStates } from '../../lib/get-data';

const JOTFORM = 'https://form.jotform.com/260787228572063';

export const metadata = {
  title: 'Work Excuse Note Online — $39 | TeleDirectMD',
  description:
    'Get a legitimate doctor\u2019s work excuse note online for $39. Board-certified MD reviews your request \u2014 no video call needed. Delivered in 4 hours. HIPAA-compliant with QR-code employer verification.',
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Work Excuse Note Online \u2014 $39 | TeleDirectMD',
    description:
      'Get a legitimate doctor\u2019s work excuse note online for $39. Board-certified MD review, no video call, 4-hour turnaround.',
    url: 'https://teledirectmd.com/work-excuse-note/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work Excuse Note Online \u2014 $39 | TeleDirectMD',
    description:
      'Get a legitimate doctor\u2019s work excuse note online for $39. Board-certified MD review, no video call, 4-hour turnaround.',
  },
  alternates: { canonical: 'https://teledirectmd.com/work-excuse-note/' },
};

function JsonLd() {
  const faqItems = faqData.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  }));

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      telephone: '+1-800-000-0000',
      medicalSpecialty: 'General Practice',
      availableService: {
        '@type': 'MedicalProcedure',
        name: 'Work Excuse Note',
        procedureType: 'Telehealth Consultation',
        description:
          'Board-certified physician reviews patient request and issues a work excuse note via asynchronous telehealth.',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HealthcareService',
      name: 'TeleDirectMD Work Excuse Note',
      provider: {
        '@type': 'MedicalClinic',
        name: 'TeleDirectMD',
        url: 'https://teledirectmd.com',
      },
      serviceType: 'Work Excuse Note',
      description:
        'Asynchronous telehealth work excuse note reviewed and signed by a board-certified MD. $39 flat fee, no video call required, delivered within 4 hours.',
      offers: {
        '@type': 'Offer',
        price: '39',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems,
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

const faqData = [
  {
    q: 'Is a telehealth work excuse note legitimate?',
    a: 'Yes. A work excuse note issued by a licensed physician via telehealth is a legitimate medical document in all states where TeleDirectMD operates. Our physicians hold active state medical licenses and follow all applicable telehealth regulations. The note is signed by the reviewing physician and includes a QR code for employer verification.',
  },
  {
    q: 'How quickly will I receive my work note?',
    a: 'Most work excuse notes are delivered within 2\u20134 hours of completing the intake form. You will receive your note via email as a PDF. Notes are available 7 days a week.',
  },
  {
    q: 'Will my employer accept a telehealth doctor\u2019s note?',
    a: 'Telehealth doctor\u2019s notes carry the same legal weight as notes from in-person visits. They include the physician\u2019s name, credentials, license number, practice information, date of evaluation, and recommended absence dates. Our QR-code verification system allows employers to confirm authenticity instantly.',
  },
  {
    q: 'What conditions qualify for a work excuse note?',
    a: 'TeleDirectMD issues work excuse notes for common acute illnesses such as cold, flu, fever, stomach illness, migraine, minor injury, allergic reaction, and similar short-term conditions. We do not issue notes for FMLA certification, workers\u2019 compensation claims, disability documentation, or conditions requiring a physical examination.',
  },
  {
    q: 'Do I need a video call?',
    a: 'No. TeleDirectMD uses asynchronous (store-and-forward) telehealth. You complete a secure intake form with your symptoms, health history, and identification. A board-certified MD reviews your case and issues the note \u2014 no video call, no appointment, no waiting room.',
  },
  {
    q: 'What does the work excuse note include?',
    a: 'Your note includes: the physician\u2019s full name and credentials (MD), medical license number, practice name and contact information, date of telehealth evaluation, dates of recommended absence, return-to-work date, and a QR code for employer verification. It does NOT include your diagnosis or detailed medical information.',
  },
  {
    q: 'Can I use this note for a past absence?',
    a: 'In most cases, yes. If you were recently ill and need documentation for an absence that already occurred, complete the intake form describing your symptoms and the dates you were absent. The physician will review your case and may issue a note for recent past absences when clinically appropriate.',
  },
  {
    q: 'Is $39 really all I pay?',
    a: 'Yes. The $39 flat fee covers the physician review and your work excuse note. There are no hidden fees, no insurance required, and no follow-up charges. If the physician determines a work note is not clinically appropriate for your situation, you will not be charged.',
  },
];

export default function WorkExcuseNoteHub() {
  const states = getWorkNoteStates();

  return (
    <>
      <JsonLd />

      {/* ── Hero ── */}
      <section className="tdmd-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Get a Doctor&#8217;s Work Excuse Note Online&nbsp;&mdash;&nbsp;$39</h1>
              <p className="tdmd-hero-sub">
                Board-certified MD reviews your request. No video call needed. Delivered in 4 hours.
              </p>
              <ul className="tdmd-hero-benefits">
                <li>No appointment needed</li>
                <li>Employer-verifiable with QR code</li>
                <li>HIPAA-compliant</li>
                <li>Available in 38 states</li>
              </ul>
              <div className="tdmd-hero-ctas">
                <a href={JOTFORM} className="tdmd-btn tdmd-btn-primary" target="_blank" rel="noopener noreferrer">
                  Get Your Work Note Now
                </a>
                <a href="#how-it-works" className="tdmd-btn tdmd-btn-outline">
                  Learn How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="tdmd-section" id="how-it-works">
        <div className="tdmd-container">
          <h2>How It Works</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Getting a legitimate work excuse note from TeleDirectMD takes three simple steps &mdash; no appointment, no video call, no waiting room.
          </p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Fill Out the Secure Intake Form</h3>
                <p>
                  Complete our HIPAA-compliant online form with your symptoms, health history, dates of absence, and a valid photo ID. The form takes about 5 minutes.
                </p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>MD Reviews Your Case</h3>
                <p>
                  A board-certified physician licensed in your state reviews your submission. If your symptoms are consistent with a short-term illness, the doctor prepares your work excuse note.
                </p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Receive Your Note via Email</h3>
                <p>
                  Your signed work excuse note is delivered to your email as a PDF within 2&ndash;4 hours. The note includes a QR code your employer can scan to verify authenticity.
                </p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a href={JOTFORM} className="tdmd-btn tdmd-btn-primary" target="_blank" rel="noopener noreferrer">
              Start Your Request Now &mdash; $39
            </a>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>What&#8217;s Included in Your Work Excuse Note</h2>
          <div className="tdmd-grid">
            <div className="tdmd-card tdmd-card-good">
              <h3>Your Note Includes</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                <li>Physician&#8217;s full name, credentials (MD), and medical license number</li>
                <li>Practice name and contact information</li>
                <li>Date of telehealth evaluation</li>
                <li>Statement that you were evaluated for a medical condition</li>
                <li>Recommended dates of absence from work</li>
                <li>Expected return-to-work date</li>
                <li>Physician signature</li>
                <li>QR code for employer verification</li>
              </ul>
            </div>
            <div className="tdmd-card tdmd-card-alert">
              <h3>What It Does NOT Include</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                <li>Your specific diagnosis or condition name</li>
                <li>FMLA certification (requires separate process)</li>
                <li>Workers&#8217; compensation documentation</li>
                <li>Disability or ADA accommodation paperwork</li>
                <li>Prescriptions or controlled substance orders</li>
                <li>Fitness-for-duty or return-to-work clearance for safety-sensitive roles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison ── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Cost of a Work Excuse Note: TeleDirectMD vs. Alternatives</h2>
          <p>
            A doctor&#8217;s note shouldn&#8217;t cost more than a day&#8217;s pay. Here&#8217;s how TeleDirectMD compares
            to traditional options for getting a work excuse note:
          </p>
          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Typical Cost</th>
                  <th>Wait Time</th>
                  <th>Note Included?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>TeleDirectMD</strong></td>
                  <td><strong>$39</strong></td>
                  <td>2&ndash;4 hours</td>
                  <td>Yes &mdash; included</td>
                </tr>
                <tr>
                  <td>Urgent Care Visit</td>
                  <td>$150&ndash;$300</td>
                  <td>1&ndash;4 hours (in-person)</td>
                  <td>Sometimes &mdash; may charge extra</td>
                </tr>
                <tr>
                  <td>Primary Care Visit</td>
                  <td>$100&ndash;$250</td>
                  <td>Days to weeks (appointment wait)</td>
                  <td>Usually &mdash; if appointment available</td>
                </tr>
                <tr>
                  <td>Emergency Room</td>
                  <td>$500&ndash;$3,000+</td>
                  <td>4&ndash;12 hours</td>
                  <td>Yes &mdash; but vastly overpriced for a note</td>
                </tr>
                <tr>
                  <td>Other Telehealth Services</td>
                  <td>$50&ndash;$150</td>
                  <td>Varies</td>
                  <td>May not offer work notes specifically</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tdmd-comparison-note">
            <p>
              <strong>Bottom line:</strong> TeleDirectMD provides a physician-signed, employer-verifiable work excuse note
              for a flat $39 &mdash; no insurance needed, no hidden fees, and no appointment required.
            </p>
          </div>
        </div>
      </section>

      {/* ── States Available ── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Available in 38 States</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            TeleDirectMD physicians hold active medical licenses in every state we serve. Select your state for
            state-specific information about sick leave laws, telehealth regulations, and employer note requirements.
          </p>
          <div className="tdmd-other-states-grid">
            {states.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/work-excuse-note/`} className="tdmd-other-state-link">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions</h2>
          <div className="tdmd-faq-list">
            {faqData.map((item, i) => (
              <details key={i} className="tdmd-faq-item">
                <summary className="tdmd-faq-question">{item.q}</summary>
                <div className="tdmd-faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="tdmd-bottom-cta">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta-copy">
            <h2>Get Your Work Excuse Note Today</h2>
            <p>
              Board-certified MD &bull; No video call &bull; $39 flat fee &bull; Delivered in 4 hours &bull;
              Employer-verifiable with QR code
            </p>
          </div>
          <div className="tdmd-bottom-cta-actions">
            <a href={JOTFORM} className="tdmd-btn tdmd-btn-primary" target="_blank" rel="noopener noreferrer">
              Get Your Work Note Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
