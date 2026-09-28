// Practice policy, not a claim about what telehealth law permits.
// Keep route exclusions narrow: this is not a ban on all injectable medicines.
export const PRESCRIBING_POLICY = 'TeleDirectMD does not prescribe intravenous (IV) medications or intramuscular (IM) medications, except EpiPen (epinephrine auto-injector) refills when clinically appropriate. This includes IV fluids and infusions, and IM antibiotic or steroid shots. We cannot issue these prescriptions for administration at another clinic or by another provider.';

export const PRESCRIBING_POLICY_QUESTION = 'Can TeleDirectMD prescribe IV medications or IM shots?';
export const PRESCRIBING_POLICY_SHORT = 'We do not prescribe IV medications or IM injections. EpiPen auto-injector refills are the only IM exception, when clinically appropriate.';
export const EPIPEN_EXCEPTION = 'EpiPen (epinephrine auto-injector) refills remain available when clinically appropriate. These refills are the explicit exception to TeleDirectMD’s IV/IM prescribing policy.';

// Refill policy (effective 2026-09-28). Practice policy set by the medical
// director. No exceptions: do not soften this wording on any page.
export const REFILL_POLICY = 'Every TeleDirectMD prescription, including all refills, covers no more than a 90-day supply. To continue a medication beyond 90 days, you need a new visit. There are no exceptions.';
export const REFILL_POLICY_QUESTION = 'How long can a TeleDirectMD prescription last, including refills?';
export const REFILL_POLICY_SHORT = 'Prescriptions, including refills, cover 90 days at most. Continuing past 90 days requires a new visit.';

export const ED_SLUG = 'erectile-dysfunction-treatment-online';
export const ED_REFILL_POLICY = 'For as-needed sildenafil or tadalafil for erectile dysfunction, each fill is limited to no more than 15 tablets, with a maximum of two refills, for a total of no more than 90 days. The prescribing clinician decides whether a prescription is appropriate and at what dose. A video visit is required every 90 days to continue the prescription. There are no exceptions to this policy.';
export const ED_REFILL_POLICY_QUESTION = 'How many ED tablets and refills can I get?';
export const ED_REFILL_POLICY_SHORT = 'As-needed sildenafil or tadalafil: no more than 15 tablets per fill and two refills maximum, with a video visit every 90 days. No exceptions.';

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
    { question: REFILL_POLICY_QUESTION, answer: REFILL_POLICY },
    ...(conditionSlug === ED_SLUG ? [{ question: ED_REFILL_POLICY_QUESTION, answer: ED_REFILL_POLICY }] : []),
  ];
}
