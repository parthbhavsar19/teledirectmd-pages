import Link from 'next/link';
import { getWorkNoteStates, getWorkNoteStateBySlug } from '../../../lib/get-data';

const JOTFORM = 'https://form.jotform.com/260787228572063';

const ELEVATED_STATES = ['de', 'il', 'wv', 'ky', 'la', 'mn'];

export async function generateStaticParams() {
  const states = getWorkNoteStates();
  return states.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const state = getWorkNoteStateBySlug(slug);
  if (!state) return {};
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${slug}/work-excuse-note/`;

  const title = `Work Excuse Note Online in ${state.name} \u2014 $39 | TeleDirectMD`;

  let description;
  if (state.sickLeave.hasMandatoryLaw) {
    description = `Get a doctor\u2019s work excuse note online in ${state.name} for $39. Learn how ${state.name}\u2019s ${state.sickLeave.lawName} affects your documentation rights. Board-certified MD, no video call, 4-hour delivery.`;
  } else {
    description = `Get a doctor\u2019s work excuse note online in ${state.name} for $39. ${state.name} employers have full discretion to require documentation. Board-certified MD, no video call, 4-hour delivery.`;
  }

  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website', siteName: 'TeleDirectMD', locale: 'en_US', title, description, url: pageUrl,
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: pageUrl },
  };
}

function buildFaq(state) {
  const items = [];

  items.push({
    q: `Is a telehealth work excuse note valid in ${state.name}?`,
    a: `Yes. ${state.name} recognizes telehealth-issued medical documentation under ${state.telehealth.primaryStatute}. TeleDirectMD physicians hold active ${state.name} medical licenses and follow all applicable state telehealth regulations. Your work excuse note is a legitimate medical document signed by a board-certified MD.`,
  });

  if (state.sickLeave.hasMandatoryLaw) {
    items.push({
      q: `Can my ${state.name} employer require a doctor\u2019s note for sick leave?`,
      a: `Under ${state.sickLeave.lawName} (${state.sickLeave.statute}), ${state.sickLeave.noteRestriction}. ${state.sickLeave.noteThreshold}. For absences that exceed these protections, or for leave not covered by the statute, a doctor\u2019s note from TeleDirectMD satisfies standard employer documentation requirements.`,
    });
  } else {
    items.push({
      q: `Can my ${state.name} employer require a doctor\u2019s note for any absence?`,
      a: `${state.name} has no mandatory paid sick leave law, which means employers have ${state.employerNotes.canRequire === 'Full Discretion' ? 'full discretion' : 'broad discretion'} to require a doctor\u2019s note for any absence, including a single day. Only federal protections like FMLA and ADA limit this power. A TeleDirectMD work excuse note satisfies employer documentation requirements.`,
    });
  }

  items.push({
    q: `How much does a doctor\u2019s note cost in ${state.name}?`,
    a: `TeleDirectMD provides a physician-signed work excuse note for a flat $39 \u2014 no insurance required. By comparison, an urgent care visit in ${state.name} typically costs $150\u2013$300, and an ER visit can exceed $500\u2013$3,000. Our $39 fee covers the physician review and your signed note, with no hidden charges.`,
  });

  items.push({
    q: `What happens if I use a fake doctor\u2019s note in ${state.name}?`,
    a: `Submitting a fake doctor\u2019s note in ${state.name} is a criminal offense under ${state.forgery.primaryStatute}. It is classified as a ${state.forgery.classification} with penalties of ${state.forgery.penalties}. Beyond criminal charges, you face immediate termination and permanent damage to your professional reputation. A legitimate TeleDirectMD note costs just $39 \u2014 far less than the legal consequences of forgery.`,
  });

  items.push({
    q: `Do I need a video call to get a work note from TeleDirectMD in ${state.name}?`,
    a: `No. TeleDirectMD uses asynchronous (store-and-forward) telehealth${state.telehealth.asyncPermitted ? `, which is authorized under ${state.name} law` : ''}. You complete a secure online form with your symptoms and health history. A ${state.name}-licensed physician reviews your case and issues your note \u2014 no video call, no appointment, no waiting room.`,
  });

  items.push({
    q: `Can I use a TeleDirectMD note for FMLA leave in ${state.name}?`,
    a: `No. TeleDirectMD work excuse notes are designed for ordinary short-term illnesses \u2014 the exact conditions the Department of Labor excludes from FMLA\u2019s \u201cserious health condition\u201d definition (common cold, flu, upset stomach, earaches, etc.). FMLA certification requires a detailed medical evaluation on DOL Form WH-380-E that goes beyond a standard work excuse note. If you need FMLA documentation, contact your primary care provider.`,
  });

  if (state.sickLeave.hasMandatoryLaw && state.sickLeave.recentChanges) {
    items.push({
      q: `What recent changes affect sick leave in ${state.name}?`,
      a: state.sickLeave.recentChanges,
    });
  }

  return items;
}

function StateJsonLd({ state, faqItems }) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      areaServed: {
        '@type': 'State',
        name: state.name,
        sameAs: `https://en.wikipedia.org/wiki/${state.name.replace(/ /g, '_')}`,
      },
      availableService: {
        '@type': 'MedicalProcedure',
        name: `Work Excuse Note in ${state.name}`,
        procedureType: 'Telehealth Consultation',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HealthcareService',
      name: `TeleDirectMD Work Excuse Note \u2014 ${state.name}`,
      provider: { '@type': 'MedicalClinic', name: 'TeleDirectMD', url: 'https://teledirectmd.com' },
      areaServed: { '@type': 'State', name: state.name },
      serviceType: 'Work Excuse Note',
      offers: { '@type': 'Offer', price: '39', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
}

export default async function WorkExcuseNoteStatePage({ params }) {
  const { slug } = await params;
  const state = getWorkNoteStateBySlug(slug);
  if (!state) return null;

  const allStates = getWorkNoteStates();
  const otherStates = allStates.filter((s) => s.slug !== slug);
  const isElevated = ELEVATED_STATES.includes(slug);
  const faqItems = buildFaq(state);

  return (
    <>
      <StateJsonLd state={state} faqItems={faqItems} />

      {/* ── Breadcrumbs ── */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container">
          <Link href="/">Home</Link>
          <span className="tdmd-bc-sep">/</span>
          <Link href="/work-excuse-note/">Work Excuse Note</Link>
          <span className="tdmd-bc-sep">/</span>
          <span>{state.name}</span>
        </div>
      </nav>

      {/* ── Elevated Risk Disclaimer ── */}
      {isElevated && (
        <section className="tdmd-section">
          <div className="tdmd-container">
            <div className="tdmd-card tdmd-card-alert">
              <h3>Important: {state.name} Telehealth Regulatory Notice</h3>
              <p>
                {state.name} telehealth regulations regarding asynchronous care are evolving. TeleDirectMD monitors
                regulatory developments to ensure compliance. Our physician holds an active {state.name} medical license
                and reviews all cases individually. {state.telehealth.primaryStatute && (
                  <>Current primary statute: {state.telehealth.primaryStatute}.</>
                )}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── Hero ── */}
      <section className="tdmd-hero">
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1>Work Excuse Note Online in {state.name}&nbsp;&mdash;&nbsp;$39</h1>
              <p className="tdmd-hero-sub">
                Board-certified MD &bull; No video call &bull; 4-hour turnaround &bull; Employer-verifiable
              </p>
              <ul className="tdmd-hero-benefits">
                <li>{state.name}-licensed physician reviews your case</li>
                <li>QR code for instant employer verification</li>
                <li>HIPAA-compliant &mdash; your diagnosis stays private</li>
                <li>Available 7 days a week</li>
              </ul>
              <div className="tdmd-hero-ctas">
                <a href={JOTFORM} className="tdmd-btn tdmd-btn-primary" target="_blank" rel="noopener noreferrer">
                  Get Your {state.abbr} Work Note &mdash; $39
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>How to Get a Work Excuse Note in {state.name}</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            TeleDirectMD makes it simple for {state.name} workers to get a legitimate doctor&apos;s note without
            visiting a clinic, scheduling an appointment, or waiting in a crowded urgent care. Here&apos;s how it works:
          </p>
          <div className="tdmd-decision-flow">
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">1</div>
              <div className="tdmd-decision-content">
                <h3>Fill Out the Secure Intake Form</h3>
                <p>
                  Complete our HIPAA-compliant online form with your symptoms, health history, dates of absence, and a
                  valid photo ID. The form takes about 5 minutes. Your information is encrypted and stored securely in
                  compliance with federal and {state.name} privacy regulations.
                </p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">2</div>
              <div className="tdmd-decision-content">
                <h3>A {state.name}-Licensed MD Reviews Your Case</h3>
                <p>
                  A board-certified physician holding an active {state.name} medical license reviews your submission. The
                  physician evaluates whether your reported symptoms are consistent with a short-term illness warranting
                  absence from work. If your case meets clinical criteria, the physician prepares and signs your work
                  excuse note.
                </p>
              </div>
            </div>
            <div className="tdmd-decision-step tdmd-decision-step-good">
              <div className="tdmd-decision-number">3</div>
              <div className="tdmd-decision-content">
                <h3>Receive Your Signed Note via Email</h3>
                <p>
                  Your physician-signed work excuse note is delivered to your email as a PDF within 2&ndash;4 hours. The
                  note includes a QR code that your {state.name} employer can scan to verify its authenticity instantly.
                  Print it, email it to HR, or show it on your phone.
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

      {/* ── Block 1: State Sick Leave Law ── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Can Your {state.name} Employer Require a Doctor&#8217;s Note?</h2>

          {state.sickLeave.hasMandatoryLaw ? (
            <>
              <p>
                {state.name} has a mandatory paid sick leave law: the <strong>{state.sickLeave.lawName}</strong> ({state.sickLeave.statute}).
                This law provides important protections for {state.name} workers regarding doctor&apos;s note requirements.
              </p>

              <div className="tdmd-card tdmd-card-good">
                <h3>Your {state.name} Sick Leave Rights</h3>
                <ul className="tdmd-checklist tdmd-checklist--good">
                  <li><strong>Accrual Rate:</strong> {state.sickLeave.accrualRate}</li>
                  <li><strong>Annual Cap:</strong> {state.sickLeave.annualCap}</li>
                  <li><strong>Doctor&apos;s Note Rule:</strong> {state.sickLeave.noteRestriction}</li>
                  <li><strong>Documentation Threshold:</strong> {state.sickLeave.noteThreshold}</li>
                </ul>
              </div>

              <p style={{ marginTop: '1rem' }}>
                <strong>What this means for you:</strong> {state.sickLeave.noteRestriction}. However, when documentation
                is required &mdash; either because your absence exceeds the statutory threshold, or because you&apos;re
                using leave under a separate company policy &mdash; a TeleDirectMD work excuse note satisfies standard
                employer documentation requirements.
              </p>

              <p>
                <strong>Anti-retaliation protection:</strong> {state.employerNotes.antiRetaliation}. Your employer cannot
                fire, demote, or discipline you for exercising your sick leave rights under {state.name} law.
              </p>

              {state.sickLeave.recentChanges && (
                <div className="tdmd-card" style={{ marginTop: '1rem' }}>
                  <h3>Recent Changes to {state.name} Sick Leave Law</h3>
                  <p>{state.sickLeave.recentChanges}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <p>
                <strong>{state.name} has no mandatory paid sick leave law.</strong> This means {state.name} employers have{' '}
                {state.employerNotes.canRequire === 'Full Discretion' ? 'full discretion' : 'broad discretion'} to set
                their own documentation policies. Your employer can require a doctor&apos;s note for any absence &mdash;
                including a single day &mdash; under their own internal policy.
              </p>

              <div className="tdmd-card tdmd-card-alert">
                <h3>What {state.name} Workers Need to Know</h3>
                <ul className="tdmd-checklist tdmd-checklist--alert">
                  <li>No state law limits when your employer can require a doctor&apos;s note</li>
                  <li>Common employer practice: documentation required after 3 consecutive days (but employers may set stricter standards)</li>
                  <li>{state.name} is an at-will employment state{state.employerNotes.atWillExceptions !== 'none' ? ` with ${state.employerNotes.atWillExceptions} exceptions` : ' with no exceptions to at-will doctrine'}</li>
                  <li>Only federal protections apply: FMLA (50+ employees), ADA (15+ employees), and GINA</li>
                </ul>
              </div>

              <p style={{ marginTop: '1rem' }}>
                <strong>Why this matters:</strong> Without state sick leave protection, {state.name} workers who miss work
                due to illness risk disciplinary action if they cannot produce documentation. Many {state.name} employers
                use attendance point systems where undocumented absences accumulate toward termination. A $39 TeleDirectMD
                work excuse note is a small investment compared to the risk of losing your job or accruing attendance
                points.
              </p>

              <p>
                <strong>Federal protections still apply:</strong> {state.employerNotes.antiRetaliation}. These federal
                laws provide a baseline of protection even in states without mandatory sick leave.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ── Block 2: Telehealth Legitimacy ── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Are Telehealth Work Notes Valid in {state.name}?</h2>
          <p>
            Yes. Telehealth is a recognized and regulated healthcare delivery method in {state.name}. Work excuse notes
            issued by licensed physicians via telehealth carry the same legal weight as notes from traditional in-person
            visits. Here is how {state.name} law supports telehealth-issued medical documentation:
          </p>

          <div className="tdmd-card tdmd-card-good">
            <h3>{state.name} Telehealth at a Glance</h3>
            <ul className="tdmd-checklist tdmd-checklist--good">
              <li><strong>Primary Statute:</strong> {state.telehealth.primaryStatute}</li>
              <li><strong>Asynchronous (Store-and-Forward):</strong> {state.telehealth.asyncPermitted ? 'Permitted' : 'Limited or restricted \u2014 see regulatory notice above'}</li>
              <li><strong>New Patient via Telehealth:</strong> {state.telehealth.newPatientViaAsync ? 'Yes \u2014 no prior in-person visit required' : 'Restrictions may apply'}</li>
              <li><strong>Consent Requirement:</strong> {state.telehealth.consentRequirement}</li>
              <li><strong>Parity Law:</strong> {state.telehealth.parityLaw ? 'Yes \u2014 telehealth covered at same rate as in-person' : 'Limited or no explicit parity mandate'}</li>
            </ul>
          </div>

          <p style={{ marginTop: '1rem' }}>
            <strong>TeleDirectMD&apos;s compliance:</strong> Every TeleDirectMD physician who reviews {state.name}{' '}
            cases holds an active medical license issued by the {state.name} medical board. Our asynchronous telehealth
            platform complies with {state.name} telehealth regulations{state.telehealth.primaryStatute ? ` under ${state.telehealth.primaryStatute}` : ''},{' '}
            HIPAA privacy requirements, and standard-of-care obligations. When your {state.name} employer receives a
            TeleDirectMD work excuse note, they can verify its authenticity through the QR code printed on the document.
          </p>

          <p>
            Employers in {state.name} cannot reject a valid work excuse note solely because it was issued via telehealth
            rather than an in-person visit. A telehealth evaluation by a licensed {state.name} physician meets the same
            professional and legal standards as a traditional office visit for the purpose of documenting a short-term
            illness and recommending work absence.
          </p>
        </div>
      </section>

      {/* ── Block 3: Why TeleDirectMD ── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Why Choose TeleDirectMD for Your {state.name} Work Note</h2>
          <p>
            When you&apos;re sick and your {state.name} employer needs documentation, you shouldn&apos;t have to choose
            between paying hundreds of dollars at urgent care or risking your job by showing up without a note. Here&apos;s
            why thousands of {state.name} workers choose TeleDirectMD:
          </p>

          <div className="tdmd-grid">
            <div className="tdmd-card tdmd-card-good">
              <h3>$39 Flat Fee</h3>
              <p>
                No insurance needed. No copay surprises. No facility fees. Just $39 for a physician-reviewed, signed work
                excuse note. Compare that to $150&ndash;$300 for an urgent care visit in{' '}
                {state.cities[0] || state.name} or $500+ for an ER visit.
              </p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>No Video Call Required</h3>
              <p>
                TeleDirectMD uses asynchronous telehealth &mdash; you complete a form, a {state.name}-licensed physician
                reviews it, and your note is delivered by email. No scheduling, no waiting, no trying to look sick on
                camera while you feel terrible.
              </p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>QR-Code Employer Verification</h3>
              <p>
                Every TeleDirectMD work note includes a unique QR code that your {state.name} employer can scan to verify
                authenticity. This eliminates the awkward &ldquo;is this note real?&rdquo; conversation and gives HR
                departments the verification they need.
              </p>
            </div>
            <div className="tdmd-card tdmd-card-good">
              <h3>Same-Day Turnaround</h3>
              <p>
                Most notes are delivered within 2&ndash;4 hours of submitting your intake form. That&apos;s faster than
                getting a same-day appointment at any clinic in {state.cities[0] || state.name}, {state.cities[1] || ''},{' '}
                or {state.cities[2] || ''}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 4: Fake Note Warning ── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Why You Should Never Use a Fake Doctor&#8217;s Note in {state.name}</h2>
          <p>
            Every year, workers across {state.name} face criminal charges for submitting forged doctor&apos;s notes to
            their employers. It is never worth the risk. Here is what {state.name} law says about fake medical documents:
          </p>

          <div className="tdmd-card tdmd-card-alert">
            <h3>{state.name} Forgery Law: {state.forgery.primaryStatute}</h3>
            <ul className="tdmd-checklist tdmd-checklist--alert">
              <li><strong>Classification:</strong> {state.forgery.classification}</li>
              <li><strong>Penalties:</strong> {state.forgery.penalties}</li>
              <li><strong>Likely Charge:</strong> {state.forgery.likelyCharge}</li>
              {state.forgery.medicalSpecific && (
                <li><strong>Medical Document Note:</strong> {state.forgery.medicalSpecific}</li>
              )}
            </ul>
          </div>

          <p style={{ marginTop: '1rem' }}>
            <strong>Beyond criminal penalties:</strong> Submitting a fake doctor&apos;s note to your {state.name}{' '}
            employer will almost certainly result in immediate termination for cause. This means no unemployment benefits,
            a permanent mark on your employment record, and potential difficulty finding future employment. In many{' '}
            {state.name} industries, word travels fast.
          </p>

          <p>
            <strong>If you used a fake note to collect paid sick leave or other benefits</strong>, charges may escalate
            significantly. Collecting pay under false pretenses adds fraud charges on top of forgery in virtually every
            state, including {state.name}.
          </p>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a href={JOTFORM} className="tdmd-btn tdmd-btn-primary" target="_blank" rel="noopener noreferrer">
              Get a Legitimate Note for $39 Instead
            </a>
          </div>
        </div>
      </section>

      {/* ── Block 5: Cost Comparison ── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Cost of a Doctor&#8217;s Note in {state.name}</h2>
          <p>
            Here is what you can expect to pay for a doctor&apos;s note through different channels in {state.name}. Note
            that actual costs vary by provider and location, but these ranges reflect typical{' '}
            {state.name} pricing as of 2026:
          </p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Typical Cost in {state.abbr}</th>
                  <th>Wait Time</th>
                  <th>Work Note Included?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>TeleDirectMD</strong></td>
                  <td><strong>$39</strong></td>
                  <td>2&ndash;4 hours</td>
                  <td>Yes &mdash; included in the $39 fee</td>
                </tr>
                <tr>
                  <td>Urgent Care in {state.abbr}</td>
                  <td>$150&ndash;$300</td>
                  <td>1&ndash;4 hours (in-person wait)</td>
                  <td>Usually &mdash; may charge $10&ndash;$25 extra for note</td>
                </tr>
                <tr>
                  <td>Primary Care in {state.abbr}</td>
                  <td>$100&ndash;$250</td>
                  <td>Days to weeks for appointment</td>
                  <td>Usually &mdash; if appointment is available</td>
                </tr>
                <tr>
                  <td>Emergency Room in {state.abbr}</td>
                  <td>$500&ndash;$3,000+</td>
                  <td>4&ndash;12 hours</td>
                  <td>Yes &mdash; but vastly overpriced for this purpose</td>
                </tr>
                <tr>
                  <td>Other Telehealth ({state.abbr})</td>
                  <td>$50&ndash;$150</td>
                  <td>Varies &mdash; may require video call</td>
                  <td>May not offer work notes specifically</td>
                </tr>
              </tbody>
            </table>
          </div>

          {state.sickLeave.hasMandatoryLaw && state.slug === 'mi' && (
            <div className="tdmd-comparison-note">
              <p>
                <strong>Michigan employers must pay:</strong> Under Michigan&apos;s Earned Sick Time Act (ESTA), if your
                employer requires documentation for an absence of 4 or more consecutive days, they must reimburse your
                out-of-pocket costs to obtain it. This is unique to Michigan and means your employer may owe you the $39.
              </p>
            </div>
          )}

          <div className="tdmd-comparison-note" style={{ marginTop: '1rem' }}>
            <p>
              <strong>Bottom line for {state.name} workers:</strong> A TeleDirectMD work excuse note costs less than a
              single hour of lost wages for most {state.name} workers. With a workforce of {state.workforce} people,{' '}
              {state.name} is one of our most active service areas. Do not risk your job over a documentation gap that
              costs just $39 to fill.
            </p>
          </div>
        </div>
      </section>

      {/* ── Federal Overlay ── */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2>Federal Protections That Apply in {state.name}</h2>
          <p>
            Regardless of {state.name}&apos;s state-level sick leave laws, the following federal protections apply to all{' '}
            {state.name} workers:
          </p>
          <div className="tdmd-card">
            <ul className="tdmd-checklist tdmd-checklist--good">
              <li>
                <strong>FMLA:</strong> If you work for an employer with 50+ employees and have worked 1,250+ hours in the
                past year, you may qualify for up to 12 weeks of unpaid, job-protected leave for a serious health condition.
                TeleDirectMD notes are NOT for FMLA certification &mdash; our service covers short-term illnesses that
                fall outside FMLA&apos;s scope.
              </li>
              <li>
                <strong>ADA:</strong> Employers with 15+ employees may not discriminate based on disability. A standard
                work excuse note is different from ADA accommodation documentation. Employers cannot demand your complete
                medical records.
              </li>
              <li>
                <strong>GINA:</strong> Your employer may not request genetic information, including family medical history,
                when asking for medical documentation. TeleDirectMD notes never include genetic information.
              </li>
              <li>
                <strong>Workers&#8217; Comp Exclusion:</strong> TeleDirectMD notes are for general illness absences only,
                not for work-related injuries or illnesses subject to workers&#8217; compensation claims. If you were
                injured on the job in {state.name}, contact your employer&apos;s workers&#8217; comp administrator.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Frequently Asked Questions: Work Notes in {state.name}</h2>
          <div className="tdmd-faq-list">
            {faqItems.map((item, i) => (
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

      {/* ── Cities Served ── */}
      {state.cities.length > 0 && (
        <section className="tdmd-section">
          <div className="tdmd-container">
            <div className="tdmd-city-block">
              <h2>TeleDirectMD Serves Workers Across {state.name}</h2>
              <p>
                Our {state.name}-licensed physicians provide work excuse notes to workers in {state.cities.slice(0, 5).join(', ')},
                and communities throughout {state.name}. Whether you work in {state.industries[0] || 'healthcare'},{' '}
                {state.industries[1] || 'manufacturing'}, or {state.industries[2] || 'services'},{' '}
                TeleDirectMD provides fast, affordable documentation that meets your employer&apos;s requirements.
              </p>
              <div className="tdmd-city-grid">
                {state.cities.map((city) => (
                  <span key={city} className="tdmd-city-tag">{city}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Cross-links ── */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <h2>Work Excuse Notes in Other States</h2>
          <p>
            TeleDirectMD provides work excuse notes in 38 states. Select another state for state-specific information
            about sick leave laws, telehealth regulations, and employer documentation requirements.
          </p>
          <div className="tdmd-other-states-grid">
            {otherStates.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/work-excuse-note/`} className="tdmd-other-state-link">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="tdmd-bottom-cta">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta-copy">
            <h2>Get Your {state.name} Work Excuse Note Today</h2>
            <p>
              {state.name}-licensed MD &bull; No video call &bull; $39 flat fee &bull; Delivered in 4 hours &bull;
              Employer-verifiable with QR code
            </p>
          </div>
          <div className="tdmd-bottom-cta-actions">
            <a href={JOTFORM} className="tdmd-btn tdmd-btn-primary" target="_blank" rel="noopener noreferrer">
              Get Your Work Note Now &mdash; $39
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
