// Practice policy, not a claim about what telehealth law permits.
// Keep route exclusions narrow: this is not a ban on all injectable medicines.
export const PRESCRIBING_POLICY = 'TeleDirectMD does not prescribe intravenous (IV) medications or intramuscular (IM) medications, except EpiPen (epinephrine auto-injector) refills when clinically appropriate. This includes IV fluids and infusions, and IM antibiotic or steroid shots. We cannot issue these prescriptions for administration at another clinic or by another provider.';

export const PRESCRIBING_POLICY_QUESTION = 'Can TeleDirectMD prescribe IV medications or IM shots?';
export const PRESCRIBING_POLICY_SHORT = 'We do not prescribe IV medications or IM injections. EpiPen auto-injector refills are the only IM exception, when clinically appropriate.';
export const EPIPEN_EXCEPTION = 'EpiPen (epinephrine auto-injector) refills remain available when clinically appropriate. These refills are the explicit exception to TeleDirectMD’s IV/IM prescribing policy.';

const CONDITION_POLICY_FAQS = {
  'chlamydia-treatment-online': {
    question: 'Can you prescribe an antibiotic shot for gonorrhea?',
    answer: 'No. TeleDirectMD cannot prescribe IM antibiotics such as ceftriaxone for gonorrhea, including prescriptions to be administered at another clinic. If gonorrhea treatment requires an injection, seek an in-person clinician who can evaluate you and arrange treatment.',
  },
  'viral-gastroenteritis-treatment-online': {
    question: 'Can you prescribe IV fluids or an IV nausea medicine?',
    answer: 'No. TeleDirectMD cannot prescribe IV fluids, infusions, or IV or IM nausea medicines, even for administration by another provider. If vomiting or dehydration means you need fluids through a vein, seek in-person care.',
  },
  'poison-ivy-oak-treatment-online': {
    question: 'Can you prescribe a steroid shot for poison ivy?',
    answer: 'No. TeleDirectMD cannot prescribe IM steroid shots or IV steroids, including prescriptions for another clinic to administer. A physician can review whether a non-IV, non-IM treatment is clinically appropriate or whether you need in-person care.',
  },
  'migraine-refills-online': {
    question: 'Can you prescribe a Toradol shot or an IV migraine infusion?',
    answer: 'No. TeleDirectMD cannot prescribe IV or IM ketorolac (Toradol), other IV or IM headache medicines, or migraine infusions, even for administration by another provider. A physician can review appropriate refill options or recommend in-person care.',
  },
  'epipen-refills-online': {
    question: 'Are EpiPen refills still available under this policy?',
    answer: EPIPEN_EXCEPTION,
  },
};

export function prescribingPolicyFaqs(conditionSlug) {
  const specific = CONDITION_POLICY_FAQS[conditionSlug];
  return [
    { question: PRESCRIBING_POLICY_QUESTION, answer: PRESCRIBING_POLICY },
    ...(specific ? [specific] : []),
  ];
}
