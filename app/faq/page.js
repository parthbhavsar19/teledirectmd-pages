import FAQClient from './FAQClient';

export const metadata = {
  title: 'Frequently Asked Questions | TeleDirectMD',
  description:
    'Find answers about TeleDirectMD\'s telehealth services, insurance acceptance, $49 self-pay pricing, appointments, prescriptions, and virtual urgent care in 40+ states.',
  alternates: { canonical: 'https://teledirectmd.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | TeleDirectMD',
    description:
      'Find answers about TeleDirectMD\'s telehealth services, insurance acceptance, pricing, and virtual urgent care in 40+ states.',
    url: 'https://teledirectmd.com/faq',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

const faqItems = [
  // Section 1: About TeleDirectMD
  {
    q: 'What is TeleDirectMD?',
    a: 'TeleDirectMD is a physician-led telehealth service that connects you directly with a licensed medical doctor for virtual urgent-care video visits, providing convenient and affordable healthcare from the comfort of your home — available in 42 U.S. states and Washington, D.C.',
  },
  {
    q: 'Who is the doctor? Will I see the same physician every time?',
    a: 'Every TeleDirectMD visit is with the same physician: Parth Bhavsar, MD, a board-certified family medicine doctor. You will not be routed to random providers, mid-level clinicians, or anonymous call-center doctors. This MD-only model is designed to provide consistent, high-quality medical care from a physician who understands your history and patterns over time.',
  },
  {
    q: 'Do you treat children?',
    a: 'TeleDirectMD currently sees adults age 18 and older only — pediatric care is not offered at this time. For children, we recommend seeing their pediatrician, an in-person urgent care, or a pediatric-focused telehealth service that can evaluate them appropriately.',
  },
  {
    q: 'How is TeleDirectMD different from other telehealth services?',
    a: 'TeleDirectMD is physician-led and focused on direct access — no subscription fees, no membership, and no waiting rooms. Our flat-rate $49 self-pay video visit keeps pricing transparent, and we now accept select insurance plans in a growing number of states. You get a real doctor, real prescriptions, and real follow-up — all without the overhead of a large telehealth corporation.',
  },
  {
    q: 'What does the name "TeleDirectMD" mean?',
    a: '"TeleDirectMD" combines "Tele" (remote/telehealth), "Direct" (direct-to-patient, no middlemen), and "MD" (Medical Doctor). It reflects our mission: connecting you directly to a licensed physician through telemedicine.',
  },
  // Section 2: Availability and States We Serve
  {
    q: 'Which states is TeleDirectMD available in?',
    a: 'TeleDirectMD is licensed and available in 42 U.S. states plus the District of Columbia: Alabama, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas, Utah, Washington, West Virginia, Wisconsin, and Wyoming. D.C. was added as our 42nd coverage area in March 2026.',
  },
  {
    q: 'Do I need to live in a state to be seen there?',
    a: 'No — you do not need to be a permanent resident. You just need to be physically located in one of our licensed states at the time of your visit. This is a requirement of state telemedicine regulations.',
  },
  {
    q: 'Can I use TeleDirectMD while traveling?',
    a: 'Absolutely. As long as you are physically located in one of our 42 covered states or D.C. at the time of your appointment, we can see you. TeleDirectMD is a great option for travelers who need quick access to a doctor on the road.',
  },
  // Section 3: Conditions, Prescriptions, and Scope of Care
  {
    q: 'What conditions do you treat?',
    a: 'We treat a wide range of common urgent-care conditions including sinus infections, UTIs, upper respiratory infections, allergies, skin rashes, pink eye, cold and flu, ear infections, bronchitis, and more. Visit our What We Treat page for a full list of conditions.',
  },
  {
    q: 'Can you prescribe medication?',
    a: 'Yes. Our providers can prescribe most non-controlled medications and send prescriptions directly to your preferred pharmacy electronically. This includes antibiotics, antivirals, anti-inflammatories, allergy medications, and many others.',
  },
  {
    q: 'Do you prescribe controlled substances?',
    a: 'No. TeleDirectMD does not prescribe controlled substances (Schedule II–V), including narcotics, benzodiazepines, stimulants, or sleep medications. This is in accordance with federal telemedicine prescribing regulations and our commitment to responsible care.',
  },
  {
    q: 'What about GLP-1 or weight-loss medications?',
    a: 'TeleDirectMD does not prescribe GLP-1 agonists (such as semaglutide or tirzepatide) or other weight-loss medications. These require ongoing monitoring and management that falls outside the scope of episodic urgent-care telemedicine.',
  },
  {
    q: 'How do you handle erectile dysfunction prescriptions?',
    a: 'TeleDirectMD offers ED evaluation and treatment within a clearly defined safety framework. Under age 40: we typically require proof of a current ED prescription or prior evaluation before refilling. Age 40 and above: we may initiate treatment after a careful history and risk review, if it is safe and appropriate. Cardiovascular risk factors, medication interactions, and warning symptoms are reviewed. If there are red flags, you may be referred for in-person evaluation with primary care or cardiology.',
  },
  {
    q: 'What if my condition cannot be treated by telemedicine?',
    a: 'If your condition requires a physical examination, lab work, imaging, or emergency care that cannot be safely managed by video visit, Dr. Bhavsar will tell you directly and recommend the appropriate next step — whether that is an urgent care clinic, emergency department, or specialist referral. Patient safety always comes first. If the physician determines that remote treatment is not appropriate and no care is provided during the visit, TeleDirectMD may, at its discretion, offer a partial or full refund based on the time and clinical work involved.',
  },
  {
    q: 'Can you order lab work?',
    a: 'Yes. TeleDirectMD now offers integrated lab orders through Quest Diagnostics. If your provider determines that lab work is needed, they can send an order directly to a Quest Diagnostics location near you. You\'ll receive instructions on where to go and how to access your results through the patient portal.',
  },
  // Section 4: Pricing, Insurance, and Payment
  {
    q: 'Do you accept insurance?',
    a: 'Yes! TeleDirectMD now accepts select commercial insurance plans in addition to our self-pay option. Currently accepted insurers include Aetna (AZ, FL, GA, IL, TN), Blue Cross Blue Shield (select plans in FL, GA, IL, PA, TX), and UnitedHealthcare (PA, WA). Coverage is expanding to additional states and plans. Visit our Insurance page to check if your plan is covered. Standard copays and cost-sharing apply for insurance visits.',
  },
  {
    q: 'How much does a visit cost?',
    a: 'A TeleDirectMD video visit costs a flat $49 with no hidden fees — this includes the physician consultation, any prescriptions sent to your pharmacy, and a work or school excuse note if needed. If you are using insurance, your standard copay and cost-sharing apply. We also accept HSA and FSA cards.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), as well as HSA (Health Savings Account) and FSA (Flexible Spending Account) cards. Payment is collected at the time of booking.',
  },
  {
    q: 'What is your cancellation/refund policy?',
    a: 'If you cancel before your visit begins, you will receive a full refund. If a provider determines during the visit that your condition cannot be appropriately treated via telemedicine, you will not be charged. No-shows may forfeit the visit fee.',
  },
  {
    q: 'Do you offer work/school excuse notes?',
    a: 'Yes. Work or school excuse notes are provided free of charge with any synchronous (video) or asynchronous medical visit. If you need a standalone excuse note without a medical visit, the fee is $39.',
  },
  // Section 5: Visit Experience, Technology, and Privacy
  {
    q: 'How do I book a visit?',
    a: 'You can book a visit directly on our website at teledirectmd.com/book-online. Simply choose your visit type, select an available time slot, enter your information, and you\'re all set. The entire booking process takes just a few minutes.',
  },
  {
    q: 'How quickly can I be seen?',
    a: 'In most cases, same-day appointments are available. Depending on provider availability and time of day, you may be seen within minutes of booking.',
  },
  {
    q: 'What do I need for my visit?',
    a: 'You\'ll need a smartphone, tablet, or computer with a camera and microphone, a stable internet connection, a valid photo ID, and your pharmacy information. If using insurance, please have your insurance card ready as well.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. TeleDirectMD visits are conducted through a secure, browser-based video platform. There is nothing to download — just click the link provided in your appointment confirmation.',
  },
  {
    q: 'Is my information secure?',
    a: 'Yes. TeleDirectMD uses HIPAA-compliant technology to protect your personal health information. All video visits are encrypted, and your medical records are stored securely in our electronic health record system.',
  },
  // Section 6: Work Notes, Follow-Up, and Portal Access
  {
    q: 'Can you provide a work or school note?',
    a: 'Yes, when medically appropriate — TeleDirectMD can provide a brief work or school excuse note based on the condition evaluated during your visit, included free of charge with any video visit. As a policy, notes are not backdated and are generally limited to a maximum of three days.',
  },
  {
    q: 'Do you complete FMLA or disability forms?',
    a: 'No. TeleDirectMD provides episodic urgent-care visits and cannot complete FMLA paperwork, disability forms, or other extended documentation. We recommend contacting your primary care provider or specialist for those needs.',
  },
  {
    q: 'How do I access my visit records?',
    a: 'You can access your visit records, after-visit summaries, and lab results through the TeleDirectMD patient portal at app.elationpassport.com. You\'ll receive login instructions after your first visit.',
  },
  {
    q: 'How do I reach TeleDirectMD after my visit?',
    a: 'You can reach us by phone at 678-956-1855 or by email at contact@teledirectmd.com. For non-urgent follow-up questions, the patient portal messaging feature is also available.',
  },
];

function buildJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(faqItems)) }}
      />
      <FAQClient />
    </>
  );
}
