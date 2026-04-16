'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─── FAQ-specific CSS using the What We Treat design system ─── */
const faqCSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@500;600;700&display=swap');

.faq-page{font-family:'DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;background:#FDFBF9;color:#1A1A1A;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;width:100%;max-width:100%;position:relative}
.faq-page *{box-sizing:border-box;margin:0;padding:0;word-wrap:break-word;overflow-wrap:break-word}
.faq-container{max-width:1200px;margin:0 auto;padding:0 24px;width:100%;overflow:hidden}

/* ── Hero ── */
.faq-hero{padding:60px 0 50px;text-align:center;background:linear-gradient(180deg,#FDFBF9 0%,#F5F2EE 100%);border-bottom:1px solid #F0EBE6;width:100%;overflow:hidden}
.faq-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:#1B4D4C;color:#fff;font-size:13px;font-weight:600;letter-spacing:.5px;border-radius:100px;margin-bottom:24px;text-transform:uppercase}
.faq-badge svg{width:16px;height:16px;flex-shrink:0}
.faq-hero h1{font-family:'Fraunces',Georgia,serif;font-size:clamp(26px,5vw,48px);font-weight:600;color:#143938;margin-bottom:16px;letter-spacing:-.5px;padding:0 8px;line-height:1.2}
.faq-hero-sub{font-size:clamp(15px,2.5vw,18px);color:#5A5A5A;max-width:640px;margin:0 auto 32px;padding:0 8px;line-height:1.5}
.faq-hero-ctas{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-bottom:40px}

/* ── Trust bar ── */
.faq-trust{display:flex;flex-wrap:wrap;justify-content:center;gap:16px 24px;font-size:14px;color:#5A5A5A;width:100%;padding:0 8px}
.faq-trust-item{display:flex;align-items:center;gap:8px;white-space:nowrap}
.faq-trust-item svg{width:18px;height:18px;color:#2E7D52;flex-shrink:0}

/* ── Banner ── */
.faq-banner{background:linear-gradient(135deg,#1B4D4C 0%,#2A6B6A 100%);color:#fff;padding:20px 0;width:100%;overflow-x:hidden}
.faq-banner-content{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px 32px;font-size:14px;text-align:center;width:100%}
.faq-banner-item{display:flex;align-items:center;gap:8px;text-align:left}
.faq-banner-item svg{width:18px;height:18px;flex-shrink:0}

/* ── Topic navigation pills ── */
.faq-pills{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-bottom:40px;width:100%;padding:0 8px}
.faq-pill{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;background:#FFF;border:1px solid #E5E0DB;border-radius:12px;font-size:15px;font-weight:500;color:#1A1A1A;cursor:pointer;transition:.25s cubic-bezier(.4,0,.2,1);text-decoration:none}
.faq-pill:hover{border-color:#1B4D4C;background:#1B4D4C;color:#fff;transform:translateY(-2px);box-shadow:0 4px 12px rgba(27,77,76,.1)}
.faq-pill svg{width:18px;height:18px;flex-shrink:0}

/* ── Main content ── */
.faq-main{padding:50px 0 40px;width:100%}

/* ── Section headers ── */
.faq-section{margin-bottom:32px;scroll-margin-top:24px;width:100%;max-width:100%}
.faq-section-header{display:flex;align-items:center;gap:16px;margin-bottom:20px;padding:0 4px}
.faq-section-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:#1B4D4C;border-radius:8px;color:#fff;font-size:24px;flex-shrink:0}
.faq-section-text h2{font-family:'Fraunces',Georgia,serif;font-size:clamp(20px,3vw,26px);font-weight:600;color:#143938;margin-bottom:2px;line-height:1.3}
.faq-section-text p{font-size:14px;color:#5A5A5A}

/* ── FAQ accordion items ── */
.faq-list{display:grid;gap:12px}
.faq-item{background:#FFF;border:1px solid #E5E0DB;border-radius:12px;overflow:hidden;transition:.25s cubic-bezier(.4,0,.2,1)}
.faq-item:hover{border-color:#2A6B6A;box-shadow:0 2px 8px rgba(27,77,76,.06)}
.faq-question{cursor:pointer;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:16px;font-weight:600;color:#143938;list-style:none;line-height:1.4;font-family:'DM Sans',sans-serif}
.faq-question::-webkit-details-marker{display:none}
.faq-toggle-icon{width:32px;height:32px;border-radius:8px;border:1px solid #E5E0DB;display:flex;align-items:center;justify-content:center;color:#1B4D4C;background:#F5F2EE;font-size:18px;font-weight:600;flex-shrink:0;transition:.25s cubic-bezier(.4,0,.2,1)}
.faq-toggle-icon .faq-icon-minus{display:none}
details[open] .faq-toggle-icon{background:#1B4D4C;color:#fff;border-color:#1B4D4C}
details[open] .faq-toggle-icon .faq-icon-plus{display:none}
details[open] .faq-toggle-icon .faq-icon-minus{display:inline}
.faq-answer{padding:0 24px 20px;color:#3A3A3A;font-size:15px;line-height:1.65}
.faq-answer p{margin:8px 0 0}
.faq-answer p:first-child{margin-top:0}
.faq-answer ul{margin:8px 0;padding-left:24px}
.faq-answer li{margin:4px 0;line-height:1.5}
.faq-answer a{color:#1B4D4C;font-weight:600;text-decoration:underline;text-underline-offset:2px}
.faq-answer a:hover{color:#2A6B6A}
.faq-answer strong{color:#143938}

/* ── Buttons ── */
.faq-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;font-size:15px;font-weight:600;font-family:inherit;border-radius:12px;text-decoration:none;transition:.25s cubic-bezier(.4,0,.2,1);cursor:pointer;border:none}
.faq-btn-primary{background:#E8846B;color:#fff}
.faq-btn-primary:hover{background:#D9705A;transform:translateY(-1px);box-shadow:0 4px 12px rgba(232,132,107,.3)}
.faq-btn-secondary{background:transparent;color:#1B4D4C;border:2px solid #E5E0DB}
.faq-btn-secondary:hover{background:#1B4D4C;color:#fff;border-color:#1B4D4C}

/* ── Bottom CTA ── */
.faq-bottom{background:linear-gradient(135deg,#143938 0%,#1B4D4C 100%);padding:60px 0;text-align:center;color:#fff}
.faq-bottom h2{font-family:'Fraunces',Georgia,serif;font-size:clamp(24px,4vw,36px);font-weight:600;margin-bottom:16px;line-height:1.25}
.faq-bottom p{font-size:18px;opacity:.9;margin-bottom:32px;max-width:520px;margin-left:auto;margin-right:auto;line-height:1.5}
.faq-bottom-cta{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:#E8846B;color:#fff;font-size:17px;font-weight:600;text-decoration:none;border-radius:12px;transition:.25s cubic-bezier(.4,0,.2,1)}
.faq-bottom-cta:hover{background:#D9705A;transform:translateY(-2px);box-shadow:0 8px 25px rgba(232,132,107,.4)}
.faq-bottom-cta svg{width:20px;height:20px}
.faq-bottom-features{display:flex;flex-wrap:wrap;justify-content:center;gap:20px 32px;margin-top:32px;font-size:14px;opacity:.85}
.faq-bottom-feature{display:flex;align-items:center;gap:8px}
.faq-bottom-feature svg{width:18px;height:18px}
.faq-bottom-contact{margin-top:24px;font-size:14px;opacity:.7}
.faq-bottom-contact a{color:#fff;text-decoration:underline;text-underline-offset:2px}

/* ── Mobile CTA bar ── */
.faq-mobile-cta{display:none;position:fixed;bottom:0;left:0;right:0;padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom,0));background:#fff;border-top:1px solid #E5E0DB;box-shadow:0 -4px 20px rgba(0,0,0,.1);z-index:999;width:100%}
.faq-mobile-cta a{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px;background:#E8846B;color:#fff;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;white-space:nowrap}

/* ── Responsive ── */
@media(max-width:900px){
.faq-hero{padding:40px 0 35px}
.faq-main{padding:30px 0 30px}
.faq-pills{gap:10px;padding:0}
.faq-pill{flex-shrink:1}
.faq-mobile-cta{display:block}
.faq-page{padding-bottom:80px}
.faq-trust{gap:12px 20px}
}
@media(max-width:600px){
.faq-page .faq-container{padding:0 16px;overflow:hidden}
.faq-hero{padding:32px 0 28px;overflow:hidden}
.faq-hero h1{font-size:24px;line-height:1.25;padding:0}
.faq-hero-sub{font-size:14px;margin-bottom:24px;padding:0}
.faq-badge{font-size:11px;padding:6px 12px;gap:6px;margin-bottom:16px}
.faq-badge svg{width:14px;height:14px}
.faq-pills{gap:8px;margin:0 0 24px 0;padding:0}
.faq-pill{padding:8px 12px;font-size:13px;gap:6px;flex-shrink:1;flex-grow:0}
.faq-trust{flex-direction:column;gap:10px;align-items:flex-start;padding:0}
.faq-trust-item{font-size:13px}
.faq-banner{padding:16px 0}
.faq-banner-content{flex-direction:column;gap:10px;align-items:flex-start;text-align:left}
.faq-banner-item{font-size:13px}
.faq-section-header{flex-direction:column;align-items:flex-start;gap:12px}
.faq-section-icon{width:40px;height:40px;font-size:20px}
.faq-section-text h2{font-size:20px}
.faq-question{padding:16px;font-size:15px;gap:12px}
.faq-answer{padding:0 16px 16px;font-size:14px}
.faq-toggle-icon{width:28px;height:28px;font-size:16px}
.faq-btn{width:100%;justify-content:center;padding:14px 20px}
.faq-hero-ctas{flex-direction:column;align-items:center;gap:10px;padding:0 16px}
.faq-bottom{padding:40px 0}
.faq-bottom h2{font-size:22px;line-height:1.3;padding:0 8px}
.faq-bottom p{font-size:15px;padding:0 8px}
.faq-bottom-cta{width:calc(100% - 32px);justify-content:center;padding:16px 24px;margin:0 16px}
.faq-bottom-features{flex-direction:column;gap:10px;padding:0 16px}
.faq-bottom-feature{justify-content:center;font-size:13px}
.faq-main{padding:24px 0 24px;gap:0}
.faq-section{margin-bottom:24px}
}
@media(max-width:380px){
.faq-hero{padding:24px 0 20px}
.faq-hero h1{font-size:21px;padding:0}
.faq-hero-sub{font-size:13px;padding:0}
.faq-badge{font-size:10px;padding:5px 10px;gap:5px}
.faq-badge svg{width:12px;height:12px}
.faq-pills{gap:6px;margin:0 0 20px 0}
.faq-pill{padding:6px 10px;font-size:11px;gap:4px}
.faq-question{padding:14px;font-size:14px}
.faq-answer{padding:0 14px 14px;font-size:13px}
.faq-toggle-icon{width:26px;height:26px;font-size:14px}
.faq-section-icon{width:36px;height:36px;font-size:18px}
.faq-section-text h2{font-size:18px}
.faq-bottom h2{font-size:20px}
.faq-bottom p{font-size:14px}
.faq-bottom-cta{font-size:15px;padding:14px 20px}
.faq-bottom-feature{font-size:12px}
}
@keyframes faqFadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.faq-hero{animation:faqFadeIn .6s ease-out}
.faq-section{animation:faqFadeIn .5s ease-out both}
.faq-section:nth-child(1){animation-delay:.1s}
.faq-section:nth-child(2){animation-delay:.15s}
.faq-section:nth-child(3){animation-delay:.2s}
.faq-section:nth-child(4){animation-delay:.25s}
.faq-section:nth-child(5){animation-delay:.3s}
.faq-section:nth-child(6){animation-delay:.35s}
@media(prefers-reduced-motion:reduce){.faq-hero,.faq-section{animation:none}}
`;

/* ─── Section icons (matching What We Treat style) ─── */
const sectionIcons = {
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  availability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  conditions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  pricing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  'visit-experience': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  'follow-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
};

/* ─── Section subtitles ─── */
const sectionSubtitles = {
  about: 'Learn about our physician-led telehealth model',
  availability: 'States we serve and travel coverage',
  conditions: 'What we treat, prescriptions, and clinical scope',
  pricing: 'Insurance, self-pay pricing, and payment options',
  'visit-experience': 'Booking, technology, and privacy',
  'follow-up': 'Work notes, records, and contacting us',
};

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
              licensed medical doctor for virtual urgent-care video visits, providing convenient and
              affordable healthcare from the comfort of your home.
            </p>
            <p>
              We are currently available in <strong>41 U.S. states</strong> plus Washington, D.C.
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
              visit keeps pricing transparent, and we now accept select insurance plans in a
              growing number of states.
            </p>
            <p>
              You get a real doctor, real prescriptions, and real follow-up — all without the
              overhead of a large telehealth corporation.
            </p>
          </>
        ),
      },
      {
        q: 'Who is TeleDirectMD designed for?',
        a: (
          <>
            <p>
              TeleDirectMD serves anyone who needs convenient, physician-led virtual care. The
              service is especially well-suited for:
            </p>
            <ul>
              <li><Link href="/who-we-serve/truck-drivers"><strong>Truck drivers</strong></Link> and mobile workers</li>
              <li><Link href="/who-we-serve/gig-workers"><strong>Gig workers</strong></Link> without employer-sponsored coverage</li>
              <li><Link href="/who-we-serve/uninsured"><strong>Uninsured individuals</strong></Link> seeking affordable care</li>
              <li><Link href="/who-we-serve/remote-workers"><strong>Remote workers</strong></Link> who prefer virtual-first healthcare</li>
              <li><Link href="/who-we-serve/travel-nurses"><strong>Travel nurses</strong></Link> moving between states</li>
              <li><Link href="/who-we-serve/small-business-owners"><strong>Small business owners</strong></Link> who need a flexible provider</li>
            </ul>
            <p>
              Visit our{' '}
              <Link href="/who-we-serve"><strong>Who We Serve</strong></Link>{' '}
              page to learn more about how TeleDirectMD supports each group.
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
              TeleDirectMD is licensed and available in <strong>41 U.S. states</strong> plus the
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
            Absolutely. As long as you are physically located in one of our covered states or
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
                <strong>Aetna</strong> — Commercial plans in AZ, CO, FL, GA, IL, MI, MN, OH, TN
              </li>
              <li>
                <strong>Blue Cross Blue Shield</strong> — Select plans in FL (Florida Blue), GA
                (Anthem BCBS), IL (BCBS of Illinois), PA (Highmark BCBS), TX (BCBS of Texas)
              </li>
              <li>
                <strong>UnitedHealthcare</strong> — Commercial plans in CO, GA, IL, MN, NC, NJ, OH, OK, PA, TN, WA
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
              A TeleDirectMD video visit costs a flat <strong>$49</strong> with no hidden fees —
              this includes the physician consultation, any prescriptions sent to your pharmacy, and
              a work or school excuse note if needed.
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
          <>
            <p>
              Yes, when medically appropriate — TeleDirectMD can provide a brief work or school
              excuse note based on the condition evaluated during your visit, included free of charge.
            </p>
            <p>
              TeleDirectMD does not provide work accommodation letters, workplace accommodation
              forms, or return-to-work clearance forms.
            </p>
          </>
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
            In most cases, same-day appointments are available. Same-day visits, evenings, and
            weekends are offered depending on schedule availability.
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
              Yes, when medically appropriate — TeleDirectMD can provide a brief work or school
              excuse note based on the condition evaluated during your visit, included free of
              charge with any video visit.
            </p>
            <p>
              As a policy, notes are not backdated and are generally limited to a maximum of three
              days.
            </p>
            <p>
              <strong>Important:</strong> TeleDirectMD does not provide work accommodation letters,
              workplace accommodation forms, or return-to-work clearance forms. These require
              in-person evaluation and ongoing management with a primary care provider.
            </p>
            <p>
              Dr. Bhavsar reserves the right to decline a work or school note if the request
              falls outside the scope of the visit or is not clinically supported.
            </p>
          </>
        ),
      },
      {
        q: 'Do you complete FMLA, disability, or accommodation forms?',
        a: (
          <p>
            No. TeleDirectMD provides episodic urgent-care visits and cannot complete FMLA
            paperwork, disability forms, work accommodation letters, workplace accommodation forms,
            return-to-work clearance forms, or other extended documentation. We recommend contacting
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

/* ─── Pill icons for topic navigation ─── */
const pillIcons = {
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
  ),
  availability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  conditions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  ),
  pricing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
  ),
  'visit-experience': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
  ),
  'follow-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
  ),
};

export default function FAQClient() {
  return (
    <div className="faq-page">
      <style dangerouslySetInnerHTML={{ __html: faqCSS }} />

      {/* ── Hero Section ── */}
      <div className="faq-hero">
        <div className="faq-container">
          <div className="faq-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Frequently Asked Questions
          </div>

          <h1>Everything You Need to Know</h1>
          <p className="faq-hero-sub">
            Get answers about TeleDirectMD&apos;s physician-led telehealth services — from insurance
            and pricing to prescriptions, appointments, and virtual urgent care across 41 states + D.C.
          </p>

          <div className="faq-hero-ctas">
            <Link href="/book-online" className="faq-btn faq-btn-primary">
              Book a Visit — $49
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/insurance" className="faq-btn faq-btn-secondary">
              Check Insurance Coverage
            </Link>
          </div>

          <div className="faq-trust">
            <span className="faq-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" /></svg>
              HIPAA-Compliant
            </span>
            <span className="faq-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              Board-Certified MD
            </span>
            <span className="faq-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              42 States + D.C.
            </span>
            <span className="faq-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              Insurance Accepted
            </span>
          </div>
        </div>
      </div>

      {/* ── Trust Banner ── */}
      <div className="faq-banner">
        <div className="faq-container">
          <div className="faq-banner-content">
            <span className="faq-banner-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              Same doctor every visit
            </span>
            <span className="faq-banner-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              Same-day appointments available
            </span>
            <span className="faq-banner-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
              HSA / FSA accepted
            </span>
            <span className="faq-banner-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
              No subscription or membership fees
            </span>
          </div>
        </div>
      </div>

      {/* ── Topic Navigation Pills ── */}
      <div className="faq-main">
        <div className="faq-container">
          <div className="faq-pills">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="faq-pill">
                {pillIcons[s.id]}
                {s.title}
              </a>
            ))}
          </div>

          {/* ── FAQ Sections ── */}
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="faq-section">
              <div className="faq-section-header">
                <div className="faq-section-icon">
                  {sectionIcons[section.id]}
                </div>
                <div className="faq-section-text">
                  <h2>{section.title}</h2>
                  <p>{sectionSubtitles[section.id]}</p>
                </div>
              </div>

              <div className="faq-list">
                {section.faqs.map((faq, j) => (
                  <details key={j} className="faq-item">
                    <summary className="faq-question">
                      <span>{faq.q}</span>
                      <span className="faq-toggle-icon"><span className="faq-icon-plus">+</span><span className="faq-icon-minus">&ndash;</span></span>
                    </summary>
                    <div className="faq-answer">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="faq-bottom">
        <div className="faq-container">
          <h2>Still Have Questions?</h2>
          <p>
            Book a visit with a licensed physician today, or reach out — we&apos;re happy to help.
          </p>
          <Link href="/book-online" className="faq-bottom-cta">
            Book a Visit — $49
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
          <div className="faq-bottom-features">
            <span className="faq-bottom-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              No hidden fees
            </span>
            <span className="faq-bottom-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              Prescriptions included
            </span>
            <span className="faq-bottom-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              Insurance accepted
            </span>
          </div>
          <div className="faq-bottom-contact">
            <a href="tel:6789561855">678-956-1855</a> &middot;{' '}
            <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>
          </div>
        </div>
      </div>

      {/* ── Mobile fixed CTA ── */}
      <div className="faq-mobile-cta">
        <Link href="/book-online">
          Book a Visit — $49
        </Link>
      </div>
    </div>
  );
}
