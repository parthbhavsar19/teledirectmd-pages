export const metadata = {
  title: 'Terms of Service | TeleDirectMD',
  description:
    'TeleDirectMD Terms of Service — understand your rights, obligations, and the terms governing use of our telehealth services.',
  alternates: { canonical: 'https://teledirectmd.com/terms-of-service' },
  robots: { index: true, follow: true },
};

const tosPageCSS = `
  /* ===== ToS page custom CSS ===== */
  .tos-page {
    font-family: 'Almarai', system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    color: var(--tdmd-text, #12323a);
    max-width: 800px;
    margin: 0 auto;
    padding: 48px 24px 80px;
  }

  .tos-page h1 {
    font-size: 2.15rem;
    font-weight: 700;
    color: var(--tdmd-navy, #003e52);
    margin: 0 0 0.5rem;
    line-height: 1.2;
    letter-spacing: -0.015em;
  }

  .tos-page h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--tdmd-navy, #003e52);
    margin: 2.25rem 0 0.6rem;
    line-height: 1.3;
  }

  .tos-page h3 {
    font-size: 1.08rem;
    font-weight: 700;
    color: var(--tdmd-navy, #003e52);
    margin: 1.4rem 0 0.4rem;
    line-height: 1.4;
  }

  .tos-meta {
    font-size: 0.92rem;
    color: var(--tdmd-muted, #4b5f66);
    margin: 0 0 2rem;
  }

  .tos-page p {
    margin: 0 0 1rem;
  }

  .tos-page ul,
  .tos-page ol {
    margin: 0.5rem 0 1rem;
    padding-left: 1.6rem;
  }

  .tos-page li {
    margin-bottom: 0.35rem;
  }

  .tos-page a {
    color: var(--tdmd-teal, #006b73);
    text-decoration: underline;
    text-underline-offset: 2px;
    font-weight: 600;
  }

  .tos-page a:hover {
    opacity: 0.8;
  }

  .tos-divider {
    border: none;
    border-top: 1px solid var(--tdmd-border, #dde3e6);
    margin: 2rem 0;
  }

  /* Notice / warning boxes using rgba so they adapt to dark mode */
  .tos-notice {
    border-radius: 8px;
    padding: 1rem 1.2rem;
    margin: 1.25rem 0;
    border-left: 4px solid;
  }

  .tos-notice--warning {
    background: rgba(255, 90, 54, 0.08);
    border-color: rgba(255, 90, 54, 0.7);
    color: var(--tdmd-text, #12323a);
  }

  .tos-notice--info {
    background: rgba(0, 107, 115, 0.07);
    border-color: rgba(0, 107, 115, 0.6);
    color: var(--tdmd-text, #12323a);
  }

  .tos-notice p:last-child {
    margin-bottom: 0;
  }

  /* Dark mode overrides for notice boxes */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) .tos-notice--warning {
      background: rgba(255, 90, 54, 0.12);
      border-color: rgba(255, 122, 92, 0.75);
    }
    :root:not([data-theme="light"]) .tos-notice--info {
      background: rgba(43, 196, 207, 0.1);
      border-color: rgba(43, 196, 207, 0.6);
    }
  }
  :root[data-theme="dark"] .tos-notice--warning {
    background: rgba(255, 90, 54, 0.12);
    border-color: rgba(255, 122, 92, 0.75);
  }
  :root[data-theme="dark"] .tos-notice--info {
    background: rgba(43, 196, 207, 0.1);
    border-color: rgba(43, 196, 207, 0.6);
  }

  .tos-toc {
    background: var(--tdmd-bg-soft, #f3fafb);
    border: 1px solid var(--tdmd-border, #dde3e6);
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    margin: 0 0 2.5rem;
  }

  .tos-toc h2 {
    font-size: 1rem;
    margin: 0 0 0.75rem;
    color: var(--tdmd-muted, #4b5f66);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .tos-toc ol {
    margin: 0;
    padding-left: 1.4rem;
    display: grid;
    gap: 0.3rem;
  }

  .tos-toc a {
    font-weight: 600;
    font-size: 0.95rem;
  }

  .tos-contact-block {
    background: var(--tdmd-bg-soft, #f3fafb);
    border: 1px solid var(--tdmd-border, #dde3e6);
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    margin: 1.5rem 0;
  }

  .tos-contact-block p {
    margin: 0 0 0.4rem;
  }

  .tos-contact-block p:last-child {
    margin: 0;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .tos-page {
      padding: 32px 18px 72px;
    }
    .tos-page h1 {
      font-size: 1.7rem;
    }
    .tos-page h2 {
      font-size: 1.2rem;
    }
  }
`;

export default function TermsOfService() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tosPageCSS }} />
      <div className="tos-page">

        <h1>Terms of Service</h1>
        <p className="tos-meta">
          Effective Date: April 16, 2026 &nbsp;|&nbsp; TeleDirectMD, operated by Dr. Parth Bhavsar, M.D.
        </p>

        <div className="tos-notice tos-notice--warning">
          <p>
            <strong>Please read these Terms of Service carefully before using TeleDirectMD.</strong>{' '}
            By accessing or using any portion of our platform, you agree to be bound by these
            Terms. If you do not agree, do not use the Services.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="tos-toc">
          <h2>Contents</h2>
          <ol>
            <li><a href="#s1">Acceptance of Terms</a></li>
            <li><a href="#s2">Eligibility</a></li>
            <li><a href="#s3">Description of Services</a></li>
            <li><a href="#s4">No Emergency Services</a></li>
            <li><a href="#s5">No Ongoing Provider-Patient Relationship</a></li>
            <li><a href="#s6">User Responsibilities</a></li>
            <li><a href="#s7">Fees and Payment</a></li>
            <li><a href="#s8">Cancellation and Refund Policy</a></li>
            <li><a href="#s9">Privacy and HIPAA</a></li>
            <li><a href="#s10">Telehealth Technology Requirements</a></li>
            <li><a href="#s11">Prescribing Policy</a></li>
            <li><a href="#s12">Intellectual Property</a></li>
            <li><a href="#s13">Disclaimer of Warranties</a></li>
            <li><a href="#s14">Limitation of Liability</a></li>
            <li><a href="#s15">Indemnification</a></li>
            <li><a href="#s16">Dispute Resolution and Arbitration</a></li>
            <li><a href="#s17">Governing Law</a></li>
            <li><a href="#s18">Modifications to These Terms</a></li>
            <li><a href="#s19">Contact Information</a></li>
          </ol>
        </div>

        <hr className="tos-divider" />

        {/* ── SECTION 1 ── */}
        <section id="s1">
          <h2>1. Acceptance of Terms</h2>
          <h3>1.1 Agreement</h3>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and
            TeleDirectMD ("TeleDirectMD," "we," "us," or "our"), a telehealth practice operated by
            Dr. Parth Bhavsar, M.D., Board-Certified in Family Medicine, located in Alpharetta,
            Georgia. By accessing teledirectmd.com (the "Site") or using any services made available
            through the Site (collectively, the "Services"), you agree to be bound by these Terms and
            all documents incorporated herein by reference, including our{' '}
            <a href="/privacy-policy">Privacy Policy</a>,{' '}
            <a href="/notice-of-privacy-practices">Notice of Privacy Practices</a>, and{' '}
            <a href="/telehealth-consent">Telehealth Informed Consent</a>.
          </p>
          <h3>1.2 Electronic Agreement</h3>
          <p>
            Your use of the Services and your electronic completion of the intake form and consent
            acknowledgment constitute your electronic signature and agreement to these Terms, with the
            same legal force and effect as a handwritten signature.
          </p>
          <h3>1.3 Updates</h3>
          <p>
            We may update these Terms from time to time. The most current version will always be
            posted at teledirectmd.com/terms-of-service with a revised effective date. Continued use
            of the Services after any revision constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 2 ── */}
        <section id="s2">
          <h2>2. Eligibility</h2>
          <h3>2.1 Age Requirement</h3>
          <p>
            You must be <strong>18 years of age or older</strong> to use the Services. TeleDirectMD
            provides care exclusively to adults. We do not evaluate, treat, or otherwise provide
            Services to individuals under the age of 18. If you are under 18, do not use the Services.
          </p>
          <h3>2.2 Geographic Requirement</h3>
          <p>
            You must be physically located within a state or jurisdiction where TeleDirectMD is
            authorized to provide telehealth services at the <strong>time of your visit</strong>
            —not merely at the time of booking. TeleDirectMD currently serves patients in 41 states
            plus the District of Columbia (42 jurisdictions total). Geographic coverage may change;
            please verify current coverage at{' '}
            <a href="/states-we-serve">teledirectmd.com/states-we-serve</a> before scheduling.
          </p>
          <h3>2.3 Identification</h3>
          <p>
            You must possess a valid, government-issued photo identification. You may be asked to
            verify your identity before or during a visit.
          </p>
          <h3>2.4 Technology Requirements</h3>
          <p>
            You must have access to a device equipped with a functioning camera and microphone, and a
            reliable internet connection sufficient to sustain a live video visit. See Section 10 for
            full technology requirements.
          </p>
          <h3>2.5 Account Accuracy</h3>
          <p>
            You agree to provide accurate, current, and complete information during registration and
            intake. Providing false or misleading information, including misrepresenting your age or
            location, may result in immediate termination of your access to the Services and may
            constitute fraud.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 3 ── */}
        <section id="s3">
          <h2>3. Description of Services</h2>
          <h3>3.1 Telehealth Video Visits</h3>
          <p>
            TeleDirectMD offers synchronous (live, real-time) audio-video telehealth consultations
            conducted by Dr. Parth Bhavsar, M.D. All clinical encounters are conducted via live
            video; asynchronous ("store-and-forward") and audio-only encounters are not offered.
          </p>
          <h3>3.2 Clinical Scope</h3>
          <p>
            TeleDirectMD provides care for non-emergency, acute and episodic conditions, medication
            refills for stable, previously diagnosed chronic conditions, and lifestyle medicine
            consultations. Clinical categories include, but are not limited to: urgent care conditions,
            women's health, sexual health, skin conditions, bites and infestations, chronic medication
            refills, and wellness and lifestyle medicine. We evaluate and treat more than 60 conditions;
            see <a href="/what-we-treat">teledirectmd.com/what-we-treat</a> for a current list.
          </p>
          <h3>3.3 Services Not Provided</h3>
          <p>TeleDirectMD does not provide:</p>
          <ul>
            <li>Emergency or urgent-emergency care (call 911 or go to the nearest emergency room)</li>
            <li>24/7 on-call physician coverage</li>
            <li>Inpatient care or surgical services</li>
            <li>In-person physical examinations</li>
            <li>Pediatric care (patients under 18)</li>
            <li>Controlled substance prescriptions of any schedule (see Section 11)</li>
            <li>FMLA paperwork, work accommodation letters, workplace accommodation forms, or
              return-to-work clearance forms</li>
            <li>Ongoing primary care or a longitudinal patient-physician relationship</li>
          </ul>
          <h3>3.4 Episodic Care Model</h3>
          <p>
            TeleDirectMD operates on an episodic care model. Each visit is an independent clinical
            encounter. TeleDirectMD is not a substitute for a primary care physician, and use of
            the Services does not establish a continuous or ongoing provider-patient relationship
            between visits (see Section 5).
          </p>
          <h3>3.5 Excuse Notes</h3>
          <p>
            A work or school excuse note may be provided at the Provider's clinical discretion in
            connection with a completed visit, included at no additional charge. Excuse notes are
            issued only when medically appropriate based on the condition evaluated during the visit.
            TeleDirectMD does not provide work accommodation letters, workplace accommodation forms,
            return-to-work clearance forms, or FMLA paperwork of any kind. Excuse notes are not
            available as a standalone service separate from a clinical visit.
          </p>
          <h3>3.6 Referrals</h3>
          <p>
            If your condition requires a level of care beyond the scope of telehealth services,
            Dr. Bhavsar may refer you to an appropriate in-person provider, specialist, urgent care
            center, or emergency department. TeleDirectMD assumes no responsibility for the care you
            receive from third-party providers following a referral.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 4 ── */}
        <section id="s4">
          <h2>4. No Emergency Services</h2>
          <div className="tos-notice tos-notice--warning">
            <p>
              <strong>TeleDirectMD is not an emergency service.</strong> If you are experiencing a
              medical emergency, call 911 or go to the nearest hospital emergency room immediately.
              Do not use this platform in lieu of emergency care.
            </p>
          </div>
          <h3>4.1 Definition of Emergency</h3>
          <p>
            Medical emergencies include, but are not limited to: chest pain or pressure, difficulty
            breathing, stroke symptoms, severe abdominal pain, uncontrolled bleeding, loss of
            consciousness, suicidal ideation with intent or plan, or any condition that could result
            in death or serious bodily harm if not immediately treated.
          </p>
          <h3>4.2 After-Hours</h3>
          <p>
            TeleDirectMD does not provide after-hours on-call physician coverage. If you have an
            urgent need outside of available visit hours, go to an emergency room, urgent care
            center, or call 911. Email inquiries received after hours will be addressed the next
            business day; email is not a medium for urgent medical questions.
          </p>
          <h3>4.3 Liability Limitation</h3>
          <p>
            TeleDirectMD shall not be liable for any harm arising from your failure to seek emergency
            care or your decision to use this platform in circumstances requiring emergency services.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 5 ── */}
        <section id="s5">
          <h2>5. No Ongoing Provider-Patient Relationship</h2>
          <h3>5.1 Episodic Nature</h3>
          <p>
            Completion of a telehealth visit with TeleDirectMD does not establish an ongoing,
            continuous, or longitudinal provider-patient relationship. Each visit constitutes a
            discrete, independent clinical encounter.
          </p>
          <h3>5.2 No Obligation to Treat</h3>
          <p>
            TeleDirectMD reserves the right to decline to provide Services to any individual for any
            clinically or legally appropriate reason, including but not limited to: requests outside
            the clinical scope, requests for controlled substances, conditions unsuitable for
            telehealth evaluation, or inability to verify identity or location.
          </p>
          <h3>5.3 Follow-Up Responsibility</h3>
          <p>
            You are responsible for completing recommended follow-up care. If Dr. Bhavsar advises
            follow-up within a specific timeframe—for example, returning if symptoms have not improved
            within 48–72 hours for an acute infection—and you fail to do so, TeleDirectMD assumes no
            liability for any resulting harm.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 6 ── */}
        <section id="s6">
          <h2>6. User Responsibilities</h2>
          <h3>6.1 Accurate Medical History</h3>
          <p>
            You agree to provide complete, accurate, and current medical history, including all
            current medications, supplements, allergies, known diagnoses, and relevant prior medical
            history. Failure to disclose material medical information may result in clinical error for
            which TeleDirectMD bears no liability.
          </p>
          <h3>6.2 Prohibited Conduct</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Misrepresent your age, identity, location, symptoms, or medical history</li>
            <li>Use the Services for any purpose prohibited by law</li>
            <li>Seek or attempt to obtain controlled substances through TeleDirectMD</li>
            <li>Record, screenshot, or otherwise capture any portion of your visit without
              prior written consent from TeleDirectMD</li>
            <li>Share access credentials or allow third parties to use your account</li>
            <li>Interfere with or disrupt the operation of the Site or Services</li>
            <li>Use the Services to harass, threaten, or abuse any provider or staff member</li>
          </ul>
          <h3>6.3 Medication Compliance</h3>
          <p>
            If a prescription is issued, you agree to use the prescribed medication only as directed,
            to disclose it to other treating providers, and not to share, sell, or transfer the
            medication to any other person.
          </p>
          <h3>6.4 Privacy of Visit Environment</h3>
          <p>
            You agree to conduct your visit from a private location where third parties cannot
            overhear the consultation. You acknowledge that the presence of undisclosed third parties
            during a visit may affect the confidentiality of your protected health information.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 7 ── */}
        <section id="s7">
          <h2>7. Fees and Payment</h2>
          <h3>7.1 Visit Fee</h3>
          <p>
            The fee for a telehealth visit is <strong>$49.00 per visit</strong>, payable before the
            visit is conducted. This is the consultation fee and covers the physician evaluation,
            clinical assessment, and a work or school excuse note if one is medically appropriate
            and issued at the Provider&apos;s discretion. If a prescription is issued during your visit,
            it will be sent electronically to your chosen pharmacy. The cost of any prescribed
            medication is separate and determined by your pharmacy and pharmacy benefit plan —
            TeleDirectMD does not charge for prescriptions and has no control over medication
            pricing. There are no additional consultation charges, add-on fees, subscription fees,
            or membership fees.
          </p>
          <h3>7.2 Payment Methods</h3>
          <p>
            Payment is processed securely via Stripe, a PCI-DSS compliant payment processor. We
            accept major credit and debit cards. Health Savings Account (HSA) and Flexible Spending
            Account (FSA) cards are accepted, as telehealth visits generally qualify as a medical
            expense.
          </p>
          <h3>7.3 Insurance Billing</h3>
          <p>
            TeleDirectMD accepts certain commercial insurance plans as a courtesy, including select
            plans from Aetna, Blue Cross Blue Shield, and UnitedHealthcare in participating states.
            Insurance acceptance is actively expanding. Coverage varies by state, plan, and policy.
            TeleDirectMD does not guarantee insurance coverage or reimbursement for any visit. You
            are responsible for your applicable copay, coinsurance, and deductible. If your insurance
            claim is denied, you are responsible for the full visit cost. TeleDirectMD submits claims
            as a courtesy; it is your responsibility to understand your plan's benefits.
          </p>
          <h3>7.4 HSA/FSA Eligibility</h3>
          <p>
            Telehealth visits are generally eligible for reimbursement from HSA and FSA accounts;
            however, eligibility is determined by your plan administrator. TeleDirectMD makes no
            representation regarding the tax treatment of payments.
          </p>
          <h3>7.5 Price Changes</h3>
          <p>
            TeleDirectMD reserves the right to modify pricing at any time. Any price change will be
            posted on the Site and will apply to visits booked on or after the effective date of the
            change.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 8 ── */}
        <section id="s8">
          <h2>8. Cancellation and Refund Policy</h2>
          <h3>8.1 Cancellation and Rescheduling</h3>
          <p>
            Appointments may be cancelled or rescheduled up to <strong>2 hours before</strong> the
            scheduled visit time without penalty. To cancel or reschedule, contact us at{' '}
            <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a> or{' '}
            <a href="tel:+16789561855">(678) 956-1855</a> before the applicable deadline.
            Cancellations made within 2 hours of the visit may result in forfeiture of the visit fee
            at TeleDirectMD&apos;s discretion.
          </p>
          <h3>8.2 No-Shows</h3>
          <p>
            If you fail to appear for a scheduled visit without prior cancellation, the full visit
            fee is forfeited. No refund will be issued for no-shows.
          </p>
          <h3>8.3 General Refund Policy</h3>
          <p>
            The $49 visit fee covers the physician&apos;s time and clinical judgment, which are expended
            regardless of the outcome of the visit. Accordingly, visit fees are generally
            non-refundable once a visit has been completed.
          </p>
          <h3>8.4 Physician Inability to Complete Visit</h3>
          <p>
            If a visit cannot be completed due to a technical failure on TeleDirectMD's side, or if
            the Provider determines that your condition cannot be appropriately evaluated via
            telehealth before the visit is substantially underway, you may be eligible for a full or
            partial refund at TeleDirectMD's discretion. Contact us at{' '}
            <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a> within 72 hours.
          </p>
          <h3>8.5 No Prescription Issued</h3>
          <p>
            The visit fee is not contingent upon a prescription being issued. Clinical judgment
            sometimes leads to the determination that no prescription is appropriate for your
            condition. No refund is issued solely because a prescription was not provided.
          </p>
          <h3>8.6 Controlled Substance Requests</h3>
          <p>
            No refund is issued because a controlled substance request was declined. TeleDirectMD
            has an absolute prohibition on prescribing controlled substances of any schedule (see
            Section 11).
          </p>
          <h3>8.7 Excuse Note Not Issued</h3>
          <p>
            Excuse notes are issued only at the Provider's clinical discretion. No refund is issued
            because an excuse note was not provided.
          </p>
          <h3>8.8 Technical Issues on Patient Side</h3>
          <p>
            If a visit cannot be completed due to a technical failure on your side (e.g., internet
            outage, device failure), TeleDirectMD will make reasonable efforts to reschedule the
            visit. Refunds for patient-side technical failures are issued at TeleDirectMD's sole
            discretion.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 9 ── */}
        <section id="s9">
          <h2>9. Privacy and HIPAA</h2>
          <h3>9.1 HIPAA Compliance</h3>
          <p>
            TeleDirectMD is a HIPAA-covered entity. Your protected health information ("PHI") is
            handled in accordance with the Health Insurance Portability and Accountability Act of 1996
            ("HIPAA") and its implementing regulations, as well as applicable state privacy laws. Our
            full <a href="/notice-of-privacy-practices">Notice of Privacy Practices</a> describes
            how we use and disclose your PHI and your rights regarding your medical information.
          </p>
          <h3>9.2 Technology and Business Associates</h3>
          <p>
            TeleDirectMD uses HIPAA-compliant technology platforms. Our intake forms are processed
            through JotForm (HIPAA-compliant, with a Business Associate Agreement). Clinical
            documentation is maintained in Elation EHR. Payments are processed through Stripe
            (PCI-DSS compliant). Electronic prescriptions are transmitted via an ONC-certified
            e-prescribing platform. Each vendor with access to PHI operates under a Business
            Associate Agreement.
          </p>
          <h3>9.3 Artificial Intelligence Disclosure</h3>
          <p>
            AI technology may be used to assist with patient intake and documentation workflow. All
            clinical decisions are made exclusively by the treating physician. AI tools do not
            diagnose, prescribe, or otherwise make medical determinations.
          </p>
          <h3>9.4 Electronic Consent Records</h3>
          <p>
            Your electronic consent, obtained before each encounter, is timestamped and stored as
            part of your patient record. Re-consent is obtained annually or upon any material change
            to the consent terms.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 10 ── */}
        <section id="s10">
          <h2>10. Telehealth Technology Requirements</h2>
          <h3>10.1 Required Equipment</h3>
          <p>To participate in a telehealth visit, you must have:</p>
          <ul>
            <li>A smartphone, tablet, or computer with a functioning front-facing camera and microphone</li>
            <li>A reliable internet connection (broadband or strong cellular signal recommended)</li>
            <li>A supported, up-to-date web browser or the relevant telehealth application</li>
            <li>A private location free from distractions and third parties</li>
          </ul>
          <h3>10.2 Synchronous Video Only</h3>
          <p>
            All clinical encounters are conducted via live, real-time audio-video telehealth.
            Asynchronous (store-and-forward) encounters and audio-only visits are not offered.
          </p>
          <h3>10.3 Technical Interruptions</h3>
          <p>
            TeleDirectMD uses reasonable efforts to maintain platform availability but does not
            guarantee uninterrupted access. If a visit is interrupted due to technical issues, the
            Provider will make reasonable efforts to reconnect or reschedule. TeleDirectMD is not
            liable for interruptions caused by your internet service provider, device, or other
            factors outside our control.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 11 ── */}
        <section id="s11">
          <h2>11. Prescribing Policy</h2>
          <h3>11.1 Prescribing Physician</h3>
          <p>
            All prescriptions issued through TeleDirectMD are issued exclusively by Dr. Parth
            Bhavsar, M.D. All prescriptions are transmitted electronically to your chosen pharmacy;
            paper prescriptions are not issued.
          </p>
          <h3>11.2 Absolute Prohibition on Controlled Substances</h3>
          <div className="tos-notice tos-notice--warning">
            <p>
              <strong>TeleDirectMD does not prescribe controlled substances under any
              circumstances.</strong> This prohibition applies to all DEA Schedule II through
              Schedule V substances, including but not limited to: opioids, benzodiazepines,
              stimulants, sleep medications, buprenorphine, testosterone, tramadol, carisoprodol,
              pregabalin, and modafinil. No exceptions will be made regardless of prior prescriptions,
              patient history, or clinical request.
            </p>
          </div>
          <h3>11.3 Non-Controlled Formulary</h3>
          <p>
            TeleDirectMD maintains an open formulary of non-controlled medications appropriate for
            the conditions within our clinical scope. The prescribing of any specific medication
            remains at the sole clinical discretion of Dr. Bhavsar.
          </p>
          <h3>11.4 Supply Durations</h3>
          <p>
            Supply quantities are determined by clinical need. As a general guideline: acute
            conditions typically receive a 5–14 day supply; stable chronic medication refills
            typically receive a 30–90 day supply; lifestyle medicine prescriptions (such as those
            for erectile dysfunction or hair loss) typically receive a 90-day supply.
          </p>
          <h3>11.5 No Guarantee of Prescription</h3>
          <p>
            Scheduling and completing a visit does not guarantee that a prescription will be issued.
            Prescribing is always a matter of clinical judgment.
          </p>
          <h3>11.6 Patient Pharmacy Choice</h3>
          <p>
            You choose your own pharmacy. Prescriptions are sent electronically to the pharmacy you
            designate during intake.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 12 ── */}
        <section id="s12">
          <h2>12. Intellectual Property</h2>
          <h3>12.1 Ownership</h3>
          <p>
            All content on the Site, including text, graphics, logos, images, audio, video, and
            software, is owned by or licensed to TeleDirectMD and is protected by applicable
            intellectual property laws, including copyright and trademark law. "TeleDirectMD" and
            associated logos are proprietary marks of TeleDirectMD.
          </p>
          <h3>12.2 Limited License</h3>
          <p>
            TeleDirectMD grants you a limited, non-exclusive, non-transferable, revocable license to
            access and use the Site and Services for your own personal, non-commercial healthcare
            purposes. You may not reproduce, distribute, modify, create derivative works from, or
            commercially exploit any content on the Site without our prior written consent.
          </p>
          <h3>12.3 No Recording</h3>
          <p>
            You may not audio or video record any telehealth visit without the prior written consent
            of TeleDirectMD and Dr. Bhavsar.
          </p>
          <h3>12.4 User Content</h3>
          <p>
            By submitting information through the intake forms or otherwise communicating with us,
            you grant TeleDirectMD a limited license to use that information to provide the Services
            and, in de-identified or aggregated form, for quality improvement purposes, consistent
            with our Notice of Privacy Practices.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 13 ── */}
        <section id="s13">
          <h2>13. Disclaimer of Warranties</h2>
          <h3>13.1 As-Is Basis</h3>
          <p>
            THE SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR
            THAT ACCESS TO OR USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
          <h3>13.2 No Guarantee of Outcomes</h3>
          <p>
            TeleDirectMD does not warrant or guarantee any particular medical outcome, diagnostic
            result, or treatment result from the Services. Medicine involves uncertainty, and
            clinical judgment does not guarantee a specific result.
          </p>
          <h3>13.3 Third-Party Services</h3>
          <p>
            TeleDirectMD makes no representations or warranties regarding the reliability, accuracy,
            or availability of any third-party services, platforms, or pharmacies used in connection
            with the Services.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 14 ── */}
        <section id="s14">
          <h2>14. Limitation of Liability</h2>
          <h3>14.1 Exclusion of Consequential Damages</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TELEDIRECTMD, ITS OFFICERS,
            DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF
            PROFITS, LOSS OF DATA, LOSS OF GOODWILL, OR SERVICE INTERRUPTION, ARISING FROM OR
            RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES, EVEN IF TELEDIRECTMD HAS BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <h3>14.2 Cap on Liability</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TELEDIRECTMD'S TOTAL CUMULATIVE
            LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES
            SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU PAID TO TELEDIRECTMD IN THE
            TWELVE (12) MONTHS PRECEDING THE CLAIM; OR (B) ONE HUNDRED DOLLARS ($100.00).
          </p>
          <h3>14.3 Essential Basis</h3>
          <p>
            The limitations of liability in this Section 14 reflect the allocation of risk between
            the parties and are an essential element of the basis of the bargain between TeleDirectMD
            and you. TeleDirectMD would not be able to provide the Services on a $49 flat-fee basis
            without such limitations.
          </p>
          <h3>14.4 Jurisdictional Variations</h3>
          <p>
            Some jurisdictions do not allow certain limitations of liability. To the extent such
            limitations are not permitted by applicable law, they shall not apply to you, but only to
            the extent required by law.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 15 ── */}
        <section id="s15">
          <h2>15. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless TeleDirectMD, Dr. Parth Bhavsar,
            M.D., and their respective officers, directors, employees, agents, and successors from
            and against any and all claims, damages, losses, liabilities, costs, and expenses
            (including reasonable attorneys' fees) arising out of or related to: (a) your use of or
            inability to use the Services; (b) your violation of these Terms; (c) your violation of
            any applicable law or regulation; (d) your provision of false, inaccurate, or misleading
            information; or (e) any third-party claim arising from your conduct in connection with
            the Services.
          </p>
          <p>
            TeleDirectMD reserves the right to assume the exclusive defense and control of any
            matter subject to indemnification by you, in which case you agree to cooperate with our
            defense of such matter at your own expense.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 16 ── */}
        <section id="s16">
          <h2>16. Dispute Resolution and Arbitration</h2>
          <h3>16.1 Informal Resolution First</h3>
          <p>
            Before initiating any formal dispute proceeding, you agree to contact TeleDirectMD at{' '}
            <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a> and attempt to
            resolve the dispute informally. TeleDirectMD will attempt to resolve the dispute within
            30 days of receiving written notice.
          </p>
          <h3>16.2 Binding Arbitration</h3>
          <p>
            If informal resolution fails, any dispute, claim, or controversy arising out of or
            relating to these Terms or the Services—including questions about the existence, scope,
            or validity of this arbitration agreement—shall be resolved by final and binding
            arbitration administered by the American Arbitration Association (AAA) under its
            Healthcare Due Process Protocol and applicable AAA Consumer Arbitration Rules. The
            arbitration shall be conducted by a single neutral arbitrator. The seat of arbitration
            shall be Fulton County, Georgia. Judgment on the arbitration award may be entered in
            any court of competent jurisdiction.
          </p>
          <h3>16.3 Class Action Waiver</h3>
          <p>
            YOU AND TELEDIRECTMD EACH AGREE THAT CLAIMS MAY ONLY BE BROUGHT IN YOUR OR OUR
            INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS
            ACTION, CLASS ARBITRATION, OR REPRESENTATIVE PROCEEDING. The arbitrator may not
            consolidate more than one person's claims and may not preside over any form of class
            or representative proceeding.
          </p>
          <h3>16.4 Exceptions</h3>
          <p>
            Nothing in this Section prevents either party from seeking injunctive or other equitable
            relief in a court of competent jurisdiction for matters involving intellectual property
            infringement, unauthorized access, or other circumstances where monetary damages would
            be inadequate.
          </p>
          <h3>16.5 Opt-Out Right</h3>
          <p>
            You may opt out of this arbitration agreement by sending written notice to{' '}
            <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a> within{' '}
            <strong>30 days of your first use of the Services</strong> or your acceptance of these
            Terms, whichever is earlier. Your opt-out notice must include your full name, contact
            information, and a clear statement that you wish to opt out of arbitration.
          </p>
          <h3>16.6 Medical Malpractice Claims</h3>
          <p>
            Nothing in this arbitration provision is intended to limit your rights with respect to
            medical malpractice claims to the extent such rights cannot be waived under applicable
            state law.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 17 ── */}
        <section id="s17">
          <h2>17. Governing Law</h2>
          <p>
            These Terms and any dispute arising from or related to them shall be governed by and
            construed in accordance with the laws of the State of Georgia, without regard to its
            conflict of law principles. To the extent any dispute is not subject to arbitration
            under Section 16, you consent to exclusive jurisdiction and venue in the state and
            federal courts located in Fulton County, Georgia.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 18 ── */}
        <section id="s18">
          <h2>18. Modifications to These Terms</h2>
          <h3>18.1 Right to Modify</h3>
          <p>
            TeleDirectMD reserves the right to modify these Terms at any time. When we make material
            changes, we will update the effective date at the top of this page. Where required by
            applicable law or as a matter of good practice, we may also notify patients of material
            changes by email.
          </p>
          <h3>18.2 Effect of Continued Use</h3>
          <p>
            Your continued use of the Services after the effective date of any modification
            constitutes your acceptance of the revised Terms. If you do not agree to the modified
            Terms, you must discontinue use of the Services.
          </p>
          <h3>18.3 Severability</h3>
          <p>
            If any provision of these Terms is found by a court or arbitrator of competent
            jurisdiction to be invalid, illegal, or unenforceable, such provision shall be modified
            to the minimum extent necessary to make it enforceable, or if it cannot be so modified,
            it shall be severed from these Terms, and the remaining provisions shall continue in full
            force and effect.
          </p>
          <h3>18.4 Entire Agreement</h3>
          <p>
            These Terms, together with our Privacy Policy, Notice of Privacy Practices, Telehealth
            Informed Consent, and any other policies expressly incorporated herein by reference, constitute the entire
            agreement between you and TeleDirectMD with respect to the Services and supersede all
            prior and contemporaneous agreements, representations, and understandings.
          </p>
          <h3>18.5 Waiver</h3>
          <p>
            No waiver of any term or condition of these Terms shall be deemed a continuing waiver of
            such term or condition or a waiver of any other term or condition. Any waiver must be in
            writing and signed by an authorized representative of TeleDirectMD.
          </p>
        </section>

        <hr className="tos-divider" />

        {/* ── SECTION 19 ── */}
        <section id="s19">
          <h2>19. Contact Information</h2>
          <p>
            For questions or concerns about these Terms, or to contact us regarding a billing or
            service dispute, please reach us at:
          </p>
          <div className="tos-contact-block">
            <p><strong>TeleDirectMD</strong></p>
            <p>
              Operated by Dr. Parth Bhavsar, M.D., Board-Certified Family Medicine<br />
              Alpharetta, Georgia
            </p>
            <p>
              Email:{' '}
              <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+16789561855">(678) 956-1855</a>
            </p>
            <p>
              Website:{' '}
              <a href="https://teledirectmd.com">teledirectmd.com</a>
            </p>
          </div>
          <p>
            For privacy-related requests (access, amendment, or restriction of your health
            information), please refer to our{' '}
            <a href="/notice-of-privacy-practices">Notice of Privacy Practices</a>.
          </p>
        </section>

        <hr className="tos-divider" />

        <p className="tos-meta" style={{ marginTop: '1.5rem' }}>
          &copy; {new Date().getFullYear()} TeleDirectMD. All rights reserved.
          These Terms of Service were last updated April 16, 2026.
        </p>

      </div>
    </>
  );
}
