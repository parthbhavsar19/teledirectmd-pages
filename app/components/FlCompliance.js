'use client';
// FL compliance blocks — Fla. Stat. § 456.47(4) telehealth registration disclosure.
// Approved 2026-06-07. A4 ships SOFTER variant (no internal FL P&P Manual reference
// until manual exists). Render only when state.abbr === 'FL'.
//
// Three components:
//  - FlCredentialBlock: A1 credential disclosure + A3 verify-link placement 1.
//    Placed immediately after the physician byline on every FL page.
//  - FlFooterCompliance: A2 no-in-person-care + A4 standard-of-care (softer) +
//    A3 verify-link placement 2. Appended as the final section on FL pages.
//  - Forbidden: 'Florida-licensed physician', 'Licensed to practice medicine in
//    Florida' — would be § 458.331(1)(d) material-misrepresentation violation.

export function FlCredentialBlock() {
  return (
    <div
      className="tdmd-fl-credential"
      style={{
        marginTop: '0.75rem',
        padding: '0.85rem 1rem',
        background: 'var(--tdmd-bg-soft, #F8FAFC)',
        borderLeft: '3px solid var(--tdmd-teal, #14B8A6)',
        borderRadius: '0.25rem',
        fontSize: '0.92rem',
      }}
    >
      <p style={{ margin: 0 }}>
        Dr. Parth Bhavsar, MD is registered to provide telehealth services in
        Florida under Fla. Stat. § 456.47(4) (Florida Telehealth Provider
        Registration #TPME5921, issued by the Florida Department of Health).
        Dr. Bhavsar&rsquo;s primary medical license is held in Georgia. Telehealth
        services to Florida patients are provided in accordance with Florida
        Statutes.
      </p>
      <p style={{ margin: '0.5rem 0 0 0' }}>
        <a
          href="https://flhealthsource.gov/telehealth/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: 'var(--tdmd-teal, #14B8A6)', fontWeight: 600 }}
        >
          Verify Dr. Bhavsar&rsquo;s Florida Telehealth Provider Registration at the
          Florida Department of Health Telehealth Provider Registry
        </a>
      </p>
    </div>
  );
}

export function FlFooterCompliance({ idSuffix = 'fl-compliance' }) {
  return (
    <section
      className="tdmd-section tdmd-fl-footer-compliance"
      id={idSuffix}
      style={{
        background: 'var(--tdmd-bg-soft, #F8FAFC)',
        borderTop: '1px solid var(--tdmd-border, #E5E7EB)',
      }}
    >
      <div
        className="tdmd-container"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          fontSize: '0.9rem',
        }}
      >
        <h2 style={{ fontSize: '1.1rem', marginTop: 0 }}>
          Florida Telehealth Registration &amp; Standard of Care
        </h2>
        <p>
          This registration permits telehealth services only. Dr. Parth Bhavsar,
          MD does not provide in-person evaluation or treatment in Florida. If
          your condition requires in-person care, your TeleDirectMD physician
          will refer you to a Florida-licensed provider in your area.
        </p>
        <p>
          TeleDirectMD&rsquo;s Florida telehealth practice meets the prevailing
          professional standard of practice for Florida providers under Fla.
          Stat. § 456.47(2)(a) and adheres to Florida Board of Medicine general
          practice rules.
        </p>
        <p style={{ marginBottom: 0 }}>
          <a
            href="https://flhealthsource.gov/telehealth/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: 'var(--tdmd-teal, #14B8A6)', fontWeight: 600 }}
          >
            Verify Dr. Bhavsar&rsquo;s Florida Telehealth Provider Registration at
            the Florida Department of Health Telehealth Provider Registry
          </a>
        </p>
      </div>
    </section>
  );
}
