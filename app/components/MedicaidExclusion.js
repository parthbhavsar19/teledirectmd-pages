// Shared Medicaid + Managed Medicaid + D-SNP exclusion strip.
// Single source for the canonical disclosure copy — drop on every payer hub,
// the new /insurance/ coverage checker, condition pages that render inline
// payer modules, and the booking page.
//
// One edit here propagates everywhere.

const STYLES = `
  .medex-strip{
    max-width:1100px;
    margin:32px auto;
    padding:0 24px;
  }
  .medex-card{
    background:#003e52;
    color:#fff;
    border-radius:20px;
    padding:32px 36px;
    display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start;
  }
  @media(max-width:640px){.medex-card{grid-template-columns:1fr;padding:28px;}}
  .medex-icon{
    width:52px;height:52px;border-radius:14px;
    background:#ff5a36;
    display:flex;align-items:center;justify-content:center;
    font-size:28px;font-weight:800;color:#fff;
  }
  .medex-card h2,.medex-card h3{font-size:22px;font-weight:800;margin:0 0 8px;letter-spacing:-0.01em;color:#fff;}
  .medex-card p{font-size:15.5px;color:#bfd7dc;margin:0 0 8px;line-height:1.55;}
  .medex-card strong{color:#fff;}
  .medex-card .medex-sub{font-size:13px;color:#9ec0c7;margin-top:8px;font-weight:600;}
`;

/**
 * Renders the Medicaid + Managed Medicaid + D-SNP exclusion disclosure.
 *
 * @param {object} props
 * @param {('h2'|'h3')} [props.headingLevel='h2'] - which heading tag to render (use h3 inside larger pages with their own h2)
 * @param {boolean} [props.compact=false] - reserved for future tighter variant
 * @param {string} [props.idSuffix=''] - to allow multiple instances on the same page
 */
export default function MedicaidExclusion({ headingLevel = 'h2', compact = false, idSuffix = '' } = {}) {
  const Heading = headingLevel;
  return (
    <section className="medex-strip" role="region" aria-label="Medicaid coverage policy">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="medex-card">
        <div className="medex-icon" aria-hidden="true">!</div>
        <div>
          <Heading id={idSuffix ? `medicaid-policy-${idSuffix}` : undefined}>
            Medicaid and Medicaid-Medicare plans not accepted
          </Heading>
          <p>
            TeleDirectMD is <strong>not</strong> in-network with any Medicaid plan, Managed Medicaid plan, CHIP, Medicare-Medicaid (MME), or Dual Special Needs Plan (D-SNP) in any state we serve. If your only coverage is Medicaid, Managed Medicaid, or a Medicaid-Medicare dual plan, our visits cannot be billed to your plan.
          </p>
          <p className="medex-sub">You can still book a visit at our $79 self-pay rate (HSA/FSA eligible).</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Returns the FAQ Q&A pair as a plain object for FAQPage JSON-LD injection.
 * Use this when building MedicalWebPage / FAQPage schema to keep the answer
 * text identical to the visible disclosure.
 */
export const medicaidExclusionFaq = {
  q: 'Does TeleDirectMD accept Medicaid?',
  a: 'No. TeleDirectMD is not in-network with any Medicaid program, Managed Medicaid plan, CHIP, Medicare-Medicaid (MME), or Dual Special Needs Plan (D-SNP) in any state we serve. Patients with Medicaid-only coverage can still book a $79 self-pay visit (HSA/FSA eligible).',
};
