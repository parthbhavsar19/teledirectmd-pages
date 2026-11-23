import FaqAccordion from './FaqAccordion';
import { prescribingPolicyFaqs } from '../../lib/prescribing-policy';

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
      {children}
      <PrescribingPolicyFaq conditionSlug={conditionSlug} />
    </>
  );
}
