import FaqAccordion from './FaqAccordion';
import { PRESCRIBING_POLICY_SHORT, EPIPEN_EXCEPTION, prescribingPolicyFaqs } from '../../lib/prescribing-policy';

// Use the existing site typography and container; no new theme or layout system.
export function PrescribingPolicyNotice({ conditionSlug }) {
  return (
    <aside data-prescribing-policy="notice" aria-label="Before booking: prescribing limits" style={{ maxWidth: 1080, margin: '1rem auto', padding: '0 1.25rem', fontFamily: "'DM Sans', 'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.6 }}>
      <p style={{ margin: 0 }}><strong>Before booking: prescribing limits. </strong>{PRESCRIBING_POLICY_SHORT}</p>
      {conditionSlug === 'epipen-refills-online' && <p>{EPIPEN_EXCEPTION}</p>}
    </aside>
  );
}

// The additional practice-policy FAQ is kept separate from condition-specific
// FAQs. Its visible answers and structured data always come from the same array.
export function PrescribingPolicyFaq({ conditionSlug }) {
  const items = prescribingPolicyFaqs(conditionSlug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  return (
    <section data-prescribing-policy="faq" style={{ maxWidth: 1080, margin: '2rem auto', padding: '0 1.25rem' }}>
      <FaqAccordion items={items} sectionTitle="Prescribing limits: before you book" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </section>
  );
}

// Wrapping route families covers custom CA/VT components and future template
// changes without copying the policy into dozens of independent components.
export default function PrescribingPolicyScope({ children, conditionSlug }) {
  return (
    <>
      <PrescribingPolicyNotice conditionSlug={conditionSlug} />
      {children}
      <PrescribingPolicyFaq conditionSlug={conditionSlug} />
    </>
  );
}
