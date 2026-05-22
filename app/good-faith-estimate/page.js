export const metadata = {
  title: 'Good Faith Estimate (No Surprises Act) | TeleDirectMD',
  description: 'Your right to a Good Faith Estimate under the federal No Surprises Act. TeleDirectMD virtual visits are a flat $79 per consultation for self-pay and uninsured patients.',
  alternates: { canonical: 'https://teledirectmd.com/good-faith-estimate' },
};

export default function GoodFaithEstimate() {
  const s = { h2: { fontSize: '1.35rem', fontWeight: 600, marginTop: 32, marginBottom: 12 } };
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Your Right to a Good Faith Estimate</h1>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 32 }}>Effective date: January 1, 2022 (No Surprises Act) &middot; Last updated: May 23, 2026</p>

      <section style={{ lineHeight: 1.8, color: '#333', fontSize: '1rem' }}>
        <p style={{ fontSize: '1.05rem', color: '#1a1a1a', borderLeft: '4px solid #1a7f7f', paddingLeft: 16, marginBottom: 24 }}>
          You have the right to receive a &ldquo;Good Faith Estimate&rdquo; explaining how much your health care will cost.
        </p>

        <p>Under the law, health care providers need to give patients who don&apos;t have certain types of health care coverage, or who are not using certain types of health care coverage, an estimate of their expected bill for health care items and services before those items or services are provided.</p>

        <h2 style={s.h2}>How This Works at TeleDirectMD</h2>
        <p>TeleDirectMD offers virtual visits at a flat fee of <strong>$79 per consultation</strong>. Whether you are uninsured, self-pay, or choosing not to use your insurance for a particular visit, you are entitled to a Good Faith Estimate before services are provided.</p>
        <p>For patients paying out of pocket, our <strong>$79 flat fee</strong> covers your complete video consultation with a board-certified physician, including any prescriptions sent to your pharmacy during the visit. There are no hidden fees, no copays, and no surprise charges for the visit itself.</p>
        <p style={{ fontSize: '0.92rem', color: '#666', fontStyle: 'italic' }}>Note: Effective May 23, 2026, our self-pay consultation fee was updated from $49 to $79. Visits scheduled for May 23, 2026 onward are billed at the $79 rate.</p>

        <h2 style={s.h2}>Your Rights Under the No Surprises Act</h2>
        <p><strong>Right to an estimate.</strong> You have the right to receive a Good Faith Estimate for the total expected cost of any health care items or services upon request or when scheduling such items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.</p>
        <p><strong>Timing of the estimate.</strong> If you schedule a health care item or service at least 3 business days in advance, your health care provider must give you a Good Faith Estimate in writing within 1 business day after scheduling. If you schedule at least 10 business days in advance, your provider must give you the estimate within 3 business days after scheduling. You can also ask any health care provider for a Good Faith Estimate before you schedule an item or service, and the provider must give you the estimate within 3 business days after you ask.</p>
        <p><strong>Right to dispute.</strong> If you receive a bill that is at least $400 more for any provider or facility than your Good Faith Estimate from that provider or facility, you can dispute the bill. Make sure to save a copy or picture of your Good Faith Estimate and the bill.</p>

        <h2 style={s.h2}>Services Beyond the Virtual Visit</h2>
        <p>If your visit results in a recommendation for additional services beyond the scope of your TeleDirectMD consultation &mdash; such as laboratory testing, imaging, specialist referrals, or other services provided by a third party &mdash; those services would be provided and billed separately by the third-party provider, not by TeleDirectMD. You have the right to receive a Good Faith Estimate from any such third-party provider as well.</p>

        <h2 style={s.h2}>Questions or More Information</h2>
        <p>For questions about your right to a Good Faith Estimate, to request a written estimate at any time, or for any billing questions:</p>
        <p style={{ marginTop: 8 }}>
          <strong>TeleDirectMD</strong><br />
          Phone: <a href="tel:+16789561855" style={{ color: '#1a7f7f' }}>(678) 956-1855</a><br />
          Email: <a href="mailto:contact@teledirectmd.com" style={{ color: '#1a7f7f' }}>contact@teledirectmd.com</a>
        </p>

        <p style={{ marginTop: 16 }}>
          <strong>Centers for Medicare &amp; Medicaid Services (CMS)</strong><br />
          Website: <a href="https://www.cms.gov/nosurprises/consumers" style={{ color: '#1a7f7f' }}>www.cms.gov/nosurprises/consumers</a><br />
          Email: <a href="mailto:FederalPPDRQuestions@cms.hhs.gov" style={{ color: '#1a7f7f' }}>FederalPPDRQuestions@cms.hhs.gov</a><br />
          Phone: 1-800-985-3059
        </p>
      </section>
    </div>
  );
}
