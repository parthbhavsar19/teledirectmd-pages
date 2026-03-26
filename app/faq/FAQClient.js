'use client';

import Link from 'next/link';

/* ─── FAQ Data grouped by section ─── */

const sections = [
  {
    id: 'about',
    title: 'About TeleDirectMD',
    faqs: [
      {
        q: 'What is TeleDirectMD?',
        a: (
          <>
            <p>
              TeleDirectMD is a physician-led telehealth service that connects you directly with a
              licensed medical doctor for virtual urgent-care visits. We offer both real-time video
              visits and asynchronous (async) medical visits, providing convenient and affordable
              healthcare from the comfort of your home.
            </p>
            <p>
              We are currently available in <strong>42 U.S. states</strong> plus Washington, D.C.
            </p>
          </>
        ),
      },
      {
        q: 'Who is the doctor? Will I see the same physician every time?',
        a: (
          <p>
            Every TeleDirectMD visit is with the same physician: <strong>Parth Bhavsar, MD</strong>, a
            board-certified family medicine doctor. You will not be routed to random providers,
            mid-level clinicians, or anonymous call-center doctors. This MD-only model is designed to
            provide consistent, high-quality medical care from a physician who understands your
            history and patterns over time.
          </p>
        ),
      },
      {
        q: 'Do you treat children?',
        a: (
          <p>
            TeleDirectMD currently sees adults age 18 and older only — pediatric care is not offered
            at this time. For children, we recommend seeing their pediatrician, an in-person urgent
            care, or a pediatric-focused telehealth service that can evaluate them appropriately.
          </p>
        ),
      },
      {
        q: 'How is TeleDirectMD different from other telehealth services?',
        a: (
          <>
            <p>
              TeleDirectMD is physician-led and focused on direct access — no subscription fees, no
              membership, and no waiting rooms. Our flat-rate <strong>$49</strong> self-pay video
              visit or <strong>$39</strong> async visit keeps pricing transparent, and we now accept
              select insurance plans in growing states.
            </p>
            <p>
              You get a real doctor, real prescriptions, and real follow-up — all without the
              overhead of a large telehealth corporation.
            </p>
          </>
        ),
      },
      {
        q: 'What does the name "TeleDirectMD" mean?',
        a: (
          <p>
            &ldquo;TeleDirectMD&rdquo; combines &ldquo;Tele&rdquo; (remote/telehealth),
            &ldquo;Direct&rdquo; (direct-to-patient, no middlemen), and &ldquo;MD&rdquo; (Medical
            Doctor). It reflects our mission: connecting you directly to a licensed physician through
            telemedicine.
          </p>
        ),
      },
    ],
  },
  {
    id: 'availability',
    title: 'Availability and States We Serve',
    faqs: [
      {
        q: 'Which states is TeleDirectMD available in?',
        a: (
          <>
            <p>
              TeleDirectMD is licensed and available in <strong>42 U.S. states</strong> plus the
              District of Columbia:
            </p>
            <p>
              Alabama, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia,
              Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland,
              Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire,
              New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina,
              South Dakota, Tennessee, Texas, Utah, Washington, West Virginia, Wisconsin, and
              Wyoming.
            </p>
            <p>D.C. was added as our 42nd coverage area in March 2026.</p>
          </>
        ),
      },
      {
        q: 'Do I need to live in a state to be seen there?',
        a: (
          <p>
            No — you do not need to be a permanent resident. You just need to be physically located
            in one of our licensed states at the time of your visit. This is a requirement of state
            telemedicine regulations.
          </p>
        ),
      },
      {
        q: 'Can I use TeleDirectMD while traveling?',
        a: (
          <p>
            Absolutely. As long as you are physically located in one of our 42 covered states or
            D.C. at the time of your appointment, we can see you. TeleDirectMD is a great option for
            travelers who need quick access to a doctor on the road.
          </p>
        ),
      },
    ],
  },
  {
    id: 'conditions',
    title: 'Conditions, Prescriptions, and Scope of Care',
    faqs: [
      {
        q: 'What conditions do you treat?',
        a: (
          <>
            <p>
              We treat a wide range of common urgent-care conditions including sinus infections,
              UTIs, upper respiratory infections, allergies, skin rashes, pink eye, cold and flu, ear
              infections, bronchitis, and more.
            </p>
            <p>
              Visit our{' '}
              <Link href="/what-we-treat">
                <strong>What We Treat</strong>
              </Link>{' '}
              page for a full list of conditions.
            </p>
          </>
        ),
      },
      {
        q: 'Can you prescribe medication?',
        a: (
          <p>
            Yes. Our providers can prescribe most non-controlled medications and send prescriptions
            directly to your preferred pharmacy electronically. This includes antibiotics,
            antivirals, anti-inflammatories, allergy medications, and many others.
          </p>
        ),
      },
      {
        q: 'Do you prescribe controlled substances?',
        a: (
          <p>
            No. TeleDirectMD does not prescribe controlled substances (Schedule II–V), including
            narcotics, benzodiazepines, stimulants, or sleep medications. This is in accordance with
            federal telemedicine prescribing regulations and our commitment to responsible care.
          </p>
        ),
      },
      {
        q: 'What about GLP-1 or weight-loss medications?',
        a: (
          <p>
            TeleDirectMD does not prescribe GLP-1 agonists (such as semaglutide or tirzepatide) or
            other weight-loss medications. These require ongoing monitoring and management that falls
            outside the scope of episodic urgent-care telemedicine.
          </p>
        ),
      },
      {
        q: 'How do you handle erectile dysfunction prescriptions?',
        a: (
          <>
            <p>
              TeleDirectMD offers ED evaluation and treatment within a clearly defined safety
              framework:
            </p>
            <ul>
              <li>
                <strong>Under age 40:</strong> We typically require proof of a current ED
                prescription or prior evaluation before refilling.
              </li>
              <li>
                <strong>Age 40 and above:</strong> We may initiate treatment after a careful history
                and risk review, if it is safe and appropriate.
              </li>
            </ul>
            <p>
              Cardiovascular risk factors, medication interactions, and warning symptoms are
              reviewed. If there are red flags, you may be referred for in-person evaluation with
              primary care or cardiology.
            </p>
          </>
        ),
      },
      {
        q: 'What if my condition cannot be treated by telemedicine?',
        a: (
          <p>
            If your condition requires a physical examination, lab work, imaging, or emergency care
            that cannot be safely managed by video visit, Dr. Bhavsar will tell you directly and
            recommend the appropriate next step — whether that&apos;s an urgent care clinic, emergency
            department, or specialist referral. Patient safety always comes first. If the physician
            determines that remote treatment is not appropriate and no care is provided during the
            visit, TeleDirectMD may, at its discretion, offer a partial or full refund based on the
            time and clinical work involved.
          </p>
        ),
      },
      {
        q: 'Can you order lab work?',
        a: (
          <p>
            Yes. TeleDirectMD now offers integrated lab orders through <strong>Quest Diagnostics</strong>.
            If your provider determines that lab work is needed, they can send an order directly to a
            Quest Diagnostics location near you. You&apos;ll receive instructions on where to go and
            how to access your results through the patient portal.
          </p>
        ),
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing, Insurance, and Payment',
    faqs: [
      {
        q: 'Do you accept insurance?',
        a: (
          <>
            <p>
              <strong>Yes!</strong> TeleDirectMD now accepts select commercial insurance plans in
              addition to our self-pay option. Currently accepted insurers include:
            </p>
            <ul>
              <li>
                <strong>Aetna</strong> — Commercial plans in AZ, FL, GA, IL, TN
              </li>
              <li>
                <strong>Blue Cross Blue Shield</strong> — Select plans in FL (Florida Blue), GA
                (Anthem BCBS), IL (BCBS of Illinois), PA (Highmark BCBS), TX (BCBS of Texas)
              </li>
              <li>
                <strong>UnitedHealthcare</strong> — Commercial plans in PA, WA
              </li>
            </ul>
            <p>
              Coverage is expanding to additional states and plans. Visit our{' '}
              <Link href="/insurance">
                <strong>Insurance page</strong>
              </Link>{' '}
              to check if your plan is covered. Standard copays and cost-sharing apply for insurance
              visits.
            </p>
          </>
        ),
      },
      {
        q: 'How much does a visit cost?',
        a: (
          <>
            <p>
              For self-pay patients, a live video visit is a flat <strong>$49</strong> with no hidden
              fees — this includes the consultation, any prescriptions sent to your pharmacy, and a
              work/school note if needed.
            </p>
            <p>
              Asynchronous (async) medical visits are available for <strong>$39</strong>.
            </p>
            <p>
              If you&apos;re using insurance, your standard copay and cost-sharing apply. We also
              accept HSA and FSA cards.
            </p>
          </>
        ),
      },
      {
        q: 'What payment methods do you accept?',
        a: (
          <p>
            We accept all major credit and debit cards (Visa, Mastercard, American Express,
            Discover), as well as HSA (Health Savings Account) and FSA (Flexible Spending Account)
            cards. Payment is collected at the time of booking.
          </p>
        ),
      },
      {
        q: 'What is your cancellation/refund policy?',
        a: (
          <p>
            If you cancel before your visit begins, you will receive a full refund. If a provider
            determines during the visit that your condition cannot be appropriately treated via
            telemedicine, you will not be charged. No-shows may forfeit the visit fee.
          </p>
        ),
      },
      {
        q: 'Do you offer work/school excuse notes?',
        a: (
          <p>
            Yes. Work or school excuse notes are provided <strong>free of charge</strong> with any
            synchronous (video) or asynchronous medical visit. If you need a standalone excuse note
            without a medical visit, the fee is <strong>$39</strong>.
          </p>
        ),
      },
    ],
  },
  {
    id: 'visit-experience',
    title: 'Visit Experience, Technology, and Privacy',
    faqs: [
      {
        q: 'How do I book a visit?',
        a: (
          <p>
            You can book a visit directly on our website at{' '}
            <Link href="/book-online">
              <strong>teledirectmd.com/book-online</strong>
            </Link>
            . Simply choose your visit type, select an available time slot, enter your information,
            and you&apos;re all set. The entire booking process takes just a few minutes.
          </p>
        ),
      },
      {
        q: 'How quickly can I be seen?',
        a: (
          <p>
            In most cases, same-day appointments are available. Depending on provider availability
            and time of day, you may be seen within minutes of booking. Async visits are typically
            reviewed and responded to within a few hours.
          </p>
        ),
      },
      {
        q: 'What do I need for my visit?',
        a: (
          <ul>
            <li>A smartphone, tablet, or computer with a camera and microphone</li>
            <li>A stable internet connection</li>
            <li>A valid photo ID</li>
            <li>Your pharmacy information</li>
            <li>Your insurance card (if using insurance)</li>
          </ul>
        ),
      },
      {
        q: 'Do I need to download an app?',
        a: (
          <p>
            No. TeleDirectMD visits are conducted through a secure, browser-based video platform.
            There is nothing to download — just click the link provided in your appointment
            confirmation.
          </p>
        ),
      },
      {
        q: 'Is my information secure?',
        a: (
          <p>
            Yes. TeleDirectMD uses HIPAA-compliant technology to protect your personal health
            information. All video visits are encrypted, and your medical records are stored securely
            in our electronic health record system.
          </p>
        ),
      },
    ],
  },
  {
    id: 'follow-up',
    title: 'Work Notes, Follow-Up, and Portal Access',
    faqs: [
      {
        q: 'Can you provide a work or school note?',
        a: (
          <>
            <p>
              Yes. Work or school excuse notes are provided <strong>free of charge</strong> with any
              synchronous (video) or asynchronous medical visit. If you need a standalone excuse note
              without a medical visit, the fee is <strong>$39</strong>.
            </p>
            <p>
              As a policy, notes are not backdated and are generally limited to a maximum of three
              days.
            </p>
          </>
        ),
      },
      {
        q: 'Do you complete FMLA or disability forms?',
        a: (
          <p>
            No. TeleDirectMD provides episodic urgent-care visits and cannot complete FMLA
            paperwork, disability forms, or other extended documentation. We recommend contacting
            your primary care provider or specialist for those needs.
          </p>
        ),
      },
      {
        q: 'How do I access my visit records?',
        a: (
          <p>
            You can access your visit records, after-visit summaries, and lab results through the
            TeleDirectMD patient portal at{' '}
            <a
              href="https://app.elationpassport.com/passport/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>app.elationpassport.com</strong>
            </a>
            . You&apos;ll receive login instructions after your first visit.
          </p>
        ),
      },
      {
        q: 'How do I reach TeleDirectMD after my visit?',
        a: (
          <p>
            You can reach us by phone at{' '}
            <a href="tel:6789561855">
              <strong>678-956-1855</strong>
            </a>{' '}
            or by email at{' '}
            <a href="mailto:contact@teledirectmd.com">
              <strong>contact@teledirectmd.com</strong>
            </a>
            . For non-urgent follow-up questions, the patient portal messaging feature is also
            available.
          </p>
        ),
      },
    ],
  },
];

export default function FAQClient() {
  return (
    <div className="tdmd-container">
      {/* Hero / Intro */}
      <div className="tdmd-hero" style={{ margin: '0 -1.5rem', padding: '3rem 1.5rem 2.5rem' }}>
        <div className="tdmd-hero-copy">
          <h1>Frequently Asked Questions</h1>
          <p className="tdmd-hero-sub">
            Everything you need to know about TeleDirectMD — from insurance and pricing to
            prescriptions and visit experience.
          </p>
          <div className="tdmd-hero-ctas">
            <Link href="/book-online" className="tdmd-btn tdmd-btn-primary">
              Book a Visit
            </Link>
            <Link href="/insurance" className="tdmd-btn tdmd-btn-outline">
              Check Insurance Coverage
            </Link>
          </div>
        </div>
      </div>

      {/* Jump links */}
      <nav className="tdmd-section" style={{ paddingBottom: 0 }}>
        <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Jump to a topic:</p>
        <ul className="tdmd-toc">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* FAQ Sections */}
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={i % 2 === 1 ? 'tdmd-section tdmd-section-highlight' : 'tdmd-section'}
          style={i % 2 === 1 ? { margin: '0 -1.5rem', padding: '2.5rem 1.5rem' } : undefined}
        >
          <h2>{section.title}</h2>
          <div className="tdmd-faq-list">
            {section.faqs.map((faq, j) => (
              <details key={j} className="tdmd-faq-item">
                <summary className="tdmd-faq-question">{faq.q}</summary>
                <div className="tdmd-faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <div className="tdmd-bottom-cta">
        <div className="tdmd-bottom-cta-copy">
          <h3>Still have questions? We&apos;re here to help.</h3>
          <p>
            Book a visit with a licensed physician today, or contact us at{' '}
            <a href="tel:6789561855">678-956-1855</a> /{' '}
            <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>.
          </p>
        </div>
        <div className="tdmd-bottom-cta-actions">
          <Link href="/book-online" className="tdmd-btn tdmd-btn-primary">
            Book a Visit — $49
          </Link>
          <Link href="/insurance" className="tdmd-btn tdmd-btn-outline">
            Check Insurance
          </Link>
        </div>
      </div>
    </div>
  );
}
