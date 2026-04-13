'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

/* ============================
   DATA
   ============================ */
const SERVICE_CATEGORIES = [
  {
    title: 'Virtual Urgent Care',
    desc: 'Cold, flu, COVID, UTI, ear pain, pink eye, and more — treated same-day.',
    icon: 'urgent',
    href: '/what-we-treat',
  },
  {
    title: "Women's Health",
    desc: 'Yeast infections, BV, birth control refills, vaginal dryness care.',
    icon: 'womens',
    href: '/what-we-treat',
  },
  {
    title: "Men's & Sexual Health",
    desc: 'ED, STI treatment, DoxyPEP, genital herpes — discreet and fast.',
    icon: 'mens',
    href: '/what-we-treat',
  },
  {
    title: 'Skin Conditions',
    desc: 'Acne, eczema, rosacea, psoriasis, fungal infections, and more.',
    icon: 'skin',
    href: '/what-we-treat',
  },
  {
    title: 'Lifestyle & Refills',
    desc: 'Hair loss, anti-aging, asthma, BP, thyroid, migraine refills.',
    icon: 'refills',
    href: '/what-we-treat',
  },
];

const CONDITION_CATEGORIES = [
  {
    name: 'Urgent Care',
    conditions: ['Common Cold', 'COVID-19', 'Influenza', 'Sinus Infection', 'Sore Throat', 'Ear Pain', 'Pink Eye', 'Dental Pain', 'UTI', 'Cellulitis', 'Shingles', 'Gout', 'Mastitis', 'Viral Gastroenteritis', 'Impetigo', 'Oral Thrush'],
  },
  {
    name: "Women's Health",
    conditions: ['Yeast Infection', 'Bacterial Vaginosis', 'Vaginal Dryness', 'Birth Control Refills'],
  },
  {
    name: 'Sexual Health',
    conditions: ['Chlamydia', 'Genital Herpes', 'Cold Sore', 'Genital Warts', 'Trichomoniasis', 'Mycoplasma Genitalium', 'DoxyPEP STI Prevention', 'Erectile Dysfunction', 'Performance Anxiety'],
  },
  {
    name: 'Skin Conditions',
    conditions: ['Acne', 'Eczema', 'Rosacea', 'Contact Dermatitis', 'Dandruff', 'Psoriasis Refills', 'Skin Fungus', 'Tinea Versicolor', 'Excessive Sweating', 'Poison Ivy & Oak', 'Perioral Dermatitis', 'Melasma'],
  },
  {
    name: 'Bites & Infestations',
    conditions: ['Dog Bite', 'Cat Bite', 'Tick Bite', 'Head Lice', 'Scabies'],
  },
  {
    name: 'Chronic Refills',
    conditions: ['Asthma Refills', 'Hypertension Refills', 'Hypothyroidism Refills', 'Hyperlipidemia Refills', 'Diabetes Refills', 'Migraine Refills', 'Acid Reflux Refills', 'EpiPen Refills', 'Seasonal Allergies'],
  },
  {
    name: 'Wellness & Lifestyle',
    conditions: ['Hair Loss', 'Anti-Aging', 'Eyelash Growth', 'Smoking Cessation', 'Motion Sickness'],
  },
];

const REVIEWS = [
  { text: "Dr. Bhavsar was incredibly thorough and kind. He explained everything clearly, answered all my questions, and I had my prescription within the hour. Best telehealth experience I've ever had.", author: 'Sarah M.', source: 'Zocdoc' },
  { text: "I was skeptical about telemedicine, but TeleDirectMD completely changed my mind. Dr. Bhavsar took the time to listen and didn't rush through the appointment. Highly recommend!", author: 'James R.', source: 'Healthgrades' },
  { text: "Had a terrible sinus infection and couldn't get into my regular doctor for weeks. Booked with TeleDirectMD and had antibiotics at my pharmacy within 2 hours. Lifesaver!", author: 'Michelle K.', source: 'Zocdoc' },
  { text: "The $49 flat fee is amazing. No surprise bills, no insurance hassle. Dr. Bhavsar is one of the most attentive doctors I've seen — in person or online.", author: 'David L.', source: 'WebMD' },
  { text: "I needed a UTI prescription urgently on a Saturday. TeleDirectMD had me seen and treated within 30 minutes. Cannot say enough good things about this service.", author: 'Amanda P.', source: 'Zocdoc' },
  { text: "Dr. Bhavsar diagnosed my skin condition correctly when two other providers had missed it. He's genuinely knowledgeable and cares about getting it right.", author: 'Chris W.', source: 'Healthgrades' },
  { text: "As someone without insurance, finding quality healthcare was a nightmare until I found TeleDirectMD. $49 for a real doctor visit is unbeatable.", author: 'Lisa T.', source: 'Zocdoc' },
  { text: "The video visit was so easy to use. Dr. Bhavsar was professional, personable, and thorough. He even followed up the next day to check on me.", author: 'Robert H.', source: 'WebMD' },
  { text: "I've been using TeleDirectMD for my asthma refills for 6 months now. So much easier than going to an office. Dr. Bhavsar always reviews my history carefully.", author: 'Jennifer S.', source: 'Healthgrades' },
  { text: "Treated my son's pink eye in under an hour. We didn't have to leave the house, and the prescription was ready for pickup down the street. Thank you!", author: 'Mark D.', source: 'Zocdoc' },
  { text: "I have anxiety about doctor visits, so telehealth is perfect for me. Dr. Bhavsar made me feel completely comfortable and at ease. Five stars all around.", author: 'Emily R.', source: 'WebMD' },
  { text: "Needed STI testing follow-up and treatment. The whole process was discreet, professional, and judgment-free. Really appreciated that.", author: 'Anonymous', source: 'Zocdoc' },
  { text: "My whole family uses TeleDirectMD now. Between the kids' ear infections and my husband's blood pressure refills, it saves us so much time and money.", author: 'Karen B.', source: 'Healthgrades' },
  { text: "I live in a rural area with limited healthcare options. TeleDirectMD gives me access to a board-certified doctor from my living room. Game changer.", author: 'Tom G.', source: 'WebMD' },
  { text: "Fast, affordable, and the doctor actually listens. What more could you ask for? I've recommended TeleDirectMD to everyone I know.", author: 'Priya N.', source: 'Zocdoc' },
];

const MEDIA_OUTLETS = [
  { name: 'TIME', logo: '/logos/time.png' },
  { name: 'Newsweek', logo: '/logos/newsweek.png' },
  { name: 'U.S. News', logo: '/logos/usnews.png' },
  { name: 'British GQ', logo: '/logos/gq.jpg' },
  { name: 'HuffPost', logo: '/logos/huffpost.jpg' },
  { name: 'New York Post', logo: '/logos/nypost.png' },
  { name: 'Fox News Digital', logo: '/logos/fox.png' },
  { name: 'Daily Mail', logo: '/logos/dailymail.png' },
  { name: 'Healthline', logo: '/logos/healthline.png' },
  { name: 'Yahoo Health', logo: '/logos/yahoo.png' },
  { name: 'EatingWell', logo: '/logos/eatingwell.jpg' },
  { name: 'Everyday Health', logo: '/logos/everydayhealth.png' },
  { name: 'Parade', logo: '/logos/parade.png' },
  { name: "Men's Journal", logo: '/logos/mensjournal.png' },
  { name: "Woman's World", logo: '/logos/womansworld.png' },
  { name: 'SHEfinds', logo: '/logos/shefinds.png' },
];

const WHY_FEATURES = [
  { title: 'Board-Certified MD', desc: 'Every visit is with Dr. Parth Bhavsar, a licensed family medicine physician.', icon: 'doctor' },
  { title: '$49 Flat Fee', desc: 'One transparent price. No surprise bills, no co-pays, no hidden charges.', icon: 'dollar' },
  { title: '40+ States', desc: 'Licensed in 42 states + DC. See a doctor from almost anywhere in the U.S.', icon: 'map' },
  { title: 'LegitScript Certified', desc: 'Verified by LegitScript for safe, compliant telehealth prescribing.', icon: 'shield' },
  { title: 'Fast Prescriptions', desc: 'Rx sent to your pharmacy — often within an hour of your visit.', icon: 'rx' },
  { title: 'No Waiting Rooms', desc: 'Skip the drive and the wait. See a doctor from your couch.', icon: 'home' },
];

const ALL_US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME',
  'MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI',
  'SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];

const LICENSED_STATES = new Set([
  'AL','AZ','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MD','ME','MI',
  'MN','MO','MS','MT','NC','ND','NE','NH','NJ','NV','OH','OK','PA','SC','SD','TN','TX','UT','WA','WI','WV','WY',
]);

const STATE_SLUGS = {
  AL:'al',AZ:'az',CA:'ca',CO:'co',CT:'ct',DC:'dc',DE:'de',FL:'fl',GA:'ga',HI:'hi',IA:'ia',ID:'id',
  IL:'il',IN:'in',KS:'ks',KY:'ky',LA:'la',MD:'md',ME:'me',MI:'mi',MN:'mn',MO:'mo',MS:'ms',MT:'mt',
  NC:'nc',ND:'nd',NE:'ne',NH:'nh',NJ:'nj',NV:'nv',OH:'oh',OK:'ok',PA:'pa',SC:'sc',SD:'sd',TN:'tn',
  TX:'tx',UT:'ut',WA:'wa',WI:'wi',WV:'wv',WY:'wy',
};

/* ============================
   ICONS (inline SVG)
   ============================ */
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#f5a623" width="18" height="18">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function ServiceIcon({ type }) {
  const icons = {
    urgent: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    womens: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    mens: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    skin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    refills: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  };
  return icons[type] || icons.urgent;
}

function StepIcon({ step }) {
  const icons = {
    1: (
      // Calendar with checkmark
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <rect x="10" y="18" width="60" height="52" rx="8" fill="#F4EFE8" stroke="#006B73" strokeWidth="2.5"/>
        <rect x="10" y="18" width="60" height="16" rx="8" fill="#006B73"/>
        <rect x="10" y="26" width="60" height="8" fill="#006B73"/>
        <line x1="30" y1="18" x2="30" y2="12" stroke="#003E52" strokeWidth="3" strokeLinecap="round"/>
        <line x1="50" y1="18" x2="50" y2="12" stroke="#003E52" strokeWidth="3" strokeLinecap="round"/>
        <line x1="22" y1="46" x2="58" y2="46" stroke="#006B73" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <line x1="22" y1="54" x2="46" y2="54" stroke="#006B73" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <line x1="22" y1="62" x2="38" y2="62" stroke="#006B73" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <circle cx="56" cy="58" r="11" fill="#006B73"/>
        <polyline points="50,58 54,62 62,54" stroke="#F4EFE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    2: (
      // Clipboard with lines and pencil
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <rect x="16" y="14" width="48" height="58" rx="6" fill="#F4EFE8" stroke="#006B73" strokeWidth="2.5"/>
        <rect x="28" y="8" width="24" height="14" rx="4" fill="#003E52"/>
        <circle cx="40" cy="15" r="3" fill="#F4EFE8"/>
        <line x1="26" y1="34" x2="54" y2="34" stroke="#006B73" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <line x1="26" y1="42" x2="54" y2="42" stroke="#006B73" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <line x1="26" y1="50" x2="48" y2="50" stroke="#006B73" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <line x1="26" y1="58" x2="42" y2="58" stroke="#006B73" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <rect x="54" y="48" width="6" height="22" rx="1.5" transform="rotate(-30 54 48)" fill="#FF5A36"/>
        <polygon points="52,66 48,70 54,68" fill="#003E52"/>
      </svg>
    ),
    3: (
      // Laptop with person silhouette and video icon
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <rect x="12" y="16" width="56" height="38" rx="6" fill="#F4EFE8" stroke="#006B73" strokeWidth="2.5"/>
        <rect x="18" y="22" width="44" height="26" rx="3" fill="#003E52"/>
        <circle cx="40" cy="31" r="6" fill="#006B73"/>
        <ellipse cx="40" cy="44" rx="10" ry="5" fill="#006B73"/>
        <path d="M6 54 h68 a4 4 0 0 1 4 4 v2 a4 4 0 0 1-4 4 H6 a4 4 0 0 1-4-4 v-2 a4 4 0 0 1 4-4z" fill="#006B73"/>
        <circle cx="60" cy="22" r="8" fill="#FF5A36"/>
        <polygon points="58,19 58,25 63,22" fill="#F4EFE8"/>
      </svg>
    ),
    4: (
      // Prescription bottle with Rx
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <rect x="20" y="24" width="40" height="48" rx="6" fill="#F4EFE8" stroke="#006B73" strokeWidth="2.5"/>
        <rect x="16" y="16" width="48" height="14" rx="4" fill="#006B73"/>
        <text x="40" y="56" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#003E52">Rx</text>
        <circle cx="58" cy="62" r="9" fill="#FF5A36"/>
        <line x1="54" y1="62" x2="62" y2="62" stroke="#F4EFE8" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="58" y1="58" x2="58" y2="66" stroke="#F4EFE8" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  };
  return icons[step] || null;
}

function WhyIcon({ type }) {
  const icons = {
    doctor: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    dollar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    map: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    rx: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>,
    home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  };
  return icons[type] || icons.doctor;
}

/* ============================
   INTERSECTION OBSERVER HOOK
   ============================ */
function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll('.hp-animate');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hp-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ============================
   MAIN COMPONENT
   ============================ */
export default function HomepageClient() {
  const wrapRef = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState(0);
  const [reviewOffset, setReviewOffset] = useState(0);
  const reviewTrackRef = useRef(null);

  // Load the canvas hero animation script after mount
  useEffect(() => {
    const el = document.getElementById('tmd-root');
    if (!el) return;
    const script = document.createElement('script');
    script.src = '/tmd-hero-animation.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  const scrollReviews = useCallback((dir) => {
    setReviewOffset((prev) => {
      const cardWidth = window.innerWidth < 480 ? 280 : 360;
      const next = prev + dir * cardWidth;
      const maxScroll = (REVIEWS.length - 1) * cardWidth - (window.innerWidth - 48);
      return Math.max(0, Math.min(next, maxScroll > 0 ? maxScroll : 0));
    });
  }, []);

  return (
    <div className="hp-wrap" ref={wrapRef}>

      {/* ===== SECTION 1: HERO — Canvas Animation (from live site) ===== */}
      <section className="hp-hero-canvas">
        <div id="tmd-root">
          <div id="tmd-wrap-d">
            <canvas id="tmd-c"></canvas>
            <button className="tmd-cta" id="tmd-cta-d">Book Your $49 Visit →</button>
            <button className="tmd-replay" id="tmd-replay-d">↺ replay</button>
          </div>
          <div id="tmd-wrap-m">
            <canvas id="tmd-cm"></canvas>
            <button className="tmd-cta" id="tmd-cta-m">Book Your $49 Visit →</button>
            <button className="tmd-replay" id="tmd-replay-m">↺ replay</button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: SERVICE CATEGORIES ===== */}
      <section className="hp-services hp-section">
        <div className="hp-container">
          <div style={{ textAlign: 'center' }}>
            <span className="hp-section-label hp-animate hp-fade-up">WHAT WE TREAT</span>
            <h2 className="hp-section-title hp-animate hp-fade-up">
              60+ conditions, one flat fee
            </h2>
            <p className="hp-section-subtitle hp-animate hp-fade-up" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              From urgent infections to chronic medication refills — get expert care from a board-certified physician.
            </p>
          </div>
          <div className="hp-services-grid hp-stagger">
            {SERVICE_CATEGORIES.map((svc, i) => (
              <a key={i} href={svc.href} className="hp-service-card hp-animate hp-fade-up">
                <div className="hp-service-icon">
                  <ServiceIcon type={svc.icon} />
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className="hp-btn hp-btn-sm">Book Now</span>
              </a>
            ))}
          </div>
          <div className="hp-featured-strip hp-animate hp-fade-up">
            <span>AS FEATURED IN</span>
            <div className="hp-featured-logos">
              {[
                { name: 'time', file: 'time.png' },
                { name: 'newsweek', file: 'newsweek.png' },
                { name: 'usnews', file: 'usnews.png' },
                { name: 'huffpost', file: 'huffpost.jpg' },
                { name: 'fox', file: 'fox.png' },
                { name: 'healthline', file: 'healthline.png' },
                { name: 'yahoo', file: 'yahoo.png' },
              ].map((item) => (
                <img key={item.name} src={`/logos/${item.file}`} alt={item.name} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: HOW IT WORKS ===== */}
      <section className="hp-how hp-section">
        <div className="hp-container">
          <span className="hp-section-label hp-animate hp-fade-up">HOW IT WORKS</span>
          <h2 className="hp-section-title hp-animate hp-fade-up">See a doctor in 4 simple steps</h2>
          <p className="hp-section-subtitle hp-animate hp-fade-up">
            No insurance paperwork. No long wait times. Just quality healthcare, from wherever you are.
          </p>
          <div className="hp-steps hp-stagger">
            {[
              { num: 1, title: 'Book Online', desc: 'Choose a visit time that works for you. Available 7 days a week.' },
              { num: 2, title: 'Quick Intake', desc: 'Fill out a brief health questionnaire so your doctor is prepared.' },
              { num: 3, title: 'Video Visit', desc: 'Meet with Dr. Bhavsar via secure video. Discuss symptoms, get a diagnosis.' },
              { num: 4, title: 'Get Your Rx', desc: 'Prescription sent to your pharmacy — often within the hour.' },
            ].map((step, i) => (
              <div key={i} className="hp-step hp-animate hp-fade-up">
                <div className="hp-step-icon">
                  <StepIcon step={step.num} />
                </div>
                {i < 3 && <div className="hp-step-connector" />}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }} className="hp-animate hp-fade-up">
            <a href="/book-online" className="hp-btn hp-btn-primary">Book Your $49 Visit</a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CONDITIONS ===== */}
      <section className="hp-conditions hp-section">
        <div className="hp-container">
          <span className="hp-section-label hp-animate hp-fade-up">CONDITIONS WE TREAT</span>
          <h2 className="hp-section-title hp-animate hp-fade-up">Find care for what you need</h2>
          <div className="hp-conditions-tabs hp-animate hp-fade-up">
            {CONDITION_CATEGORIES.map((cat, i) => (
              <button
                key={i}
                className={`hp-tab${activeCategory === i ? ' hp-tab-active' : ''}`}
                onClick={() => setActiveCategory(i)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="hp-conditions-grid hp-animate hp-fade-up">
            {CONDITION_CATEGORIES[activeCategory].conditions.map((c, i) => (
              <a key={i} href="/what-we-treat" className="hp-condition-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                {c}
              </a>
            ))}
          </div>
          <div className="hp-conditions-actions hp-animate hp-fade-up">
            <a href="/what-we-treat" className="hp-btn hp-btn-secondary hp-btn-sm">View All Conditions</a>
            <a href="/book-online" className="hp-btn hp-btn-primary hp-btn-sm">Book Now</a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: MEET THE DOCTOR ===== */}
      <section className="hp-doctor hp-section">
        <div className="hp-container">
          <div className="hp-doctor-inner">
            <div>
              <span className="hp-section-label hp-doctor-label hp-animate hp-fade-up">YOUR PHYSICIAN</span>
              <h2 className="hp-doctor-name hp-animate hp-fade-up">Parth Bhavsar, MD</h2>
              <p className="hp-doctor-creds hp-animate hp-fade-up">Board-Certified Family Medicine &middot; Founder, TeleDirectMD</p>
              <p className="hp-doctor-bio hp-animate hp-fade-up">
                Dr. Parth Bhavsar is a board-certified family medicine physician and the founder of TeleDirectMD. He graduated from Philadelphia College of Osteopathic Medicine and completed his residency at Wellstar Kennestone Hospital in Atlanta, GA.
              </p>
              <p className="hp-doctor-bio hp-animate hp-fade-up">
                Dr. Bhavsar founded TeleDirectMD with a mission to make quality healthcare accessible and affordable — no insurance gatekeeping, no surprise bills, and no long wait times. He personally sees every patient and is committed to thorough, unhurried care.
              </p>
              <p className="hp-doctor-npi hp-animate hp-fade-up">NPI: 1104323203</p>
              <div className="hp-doctor-actions hp-animate hp-fade-up">
                <a href="/about" className="hp-btn hp-btn-secondary hp-btn-sm">Read Full Bio</a>
                <a href="/book-online" className="hp-btn hp-btn-primary hp-btn-sm">Book a Visit</a>
              </div>
            </div>
            <div className="hp-doctor-photo-wrap hp-animate hp-slide-left">
              <div className="hp-doctor-blob" aria-hidden="true">
                <svg viewBox="0 0 400 480" fill="none">
                  <ellipse cx="200" cy="240" rx="190" ry="230" fill="#006B73" opacity="0.06"/>
                </svg>
              </div>
              <div className="hp-doctor-photo">
                <img
                  src="/images/dr-parth-bhavsar.jpg"
                  alt="Dr. Parth Bhavsar, MD — Board-Certified Family Medicine Physician"
                  width="500"
                  height="600"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: AS SEEN IN ===== */}
      <section className="hp-media hp-section-sm">
        <div className="hp-container">
          <div style={{ textAlign: 'center' }}>
            <span className="hp-section-label hp-animate hp-fade-up">AS SEEN IN</span>
            <h2 className="hp-section-title hp-animate hp-fade-up">Trusted by leading publications</h2>
          </div>
          <div className="hp-media-grid hp-stagger">
            {MEDIA_OUTLETS.map((outlet, i) => (
              <div key={i} className="hp-media-card hp-animate hp-scale-in">
                <img src={outlet.logo} alt={outlet.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: REVIEWS ===== */}
      <section className="hp-reviews hp-section">
        <div className="hp-container">
          <div className="hp-reviews-header">
            <div className="hp-reviews-header-left">
              <span className="hp-section-label hp-animate hp-fade-up">PATIENT REVIEWS</span>
              <h2 className="hp-section-title hp-animate hp-fade-up">What our patients say</h2>
            </div>
            <div className="hp-reviews-nav hp-animate hp-fade-up">
              <button onClick={() => scrollReviews(-1)} aria-label="Previous reviews">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button onClick={() => scrollReviews(1)} aria-label="Next reviews">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              className="hp-reviews-track"
              ref={reviewTrackRef}
              style={{ transform: `translateX(-${reviewOffset}px)` }}
            >
              {REVIEWS.map((review, i) => (
                <div key={i} className="hp-review-card">
                  <div className="hp-review-stars">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <p className="hp-review-text">&ldquo;{review.text}&rdquo;</p>
                  <div className="hp-review-author">
                    <span className="hp-review-name">{review.author}</span>
                    <span className="hp-review-source">{review.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: WHY CHOOSE ===== */}
      <section className="hp-why hp-section">
        <div className="hp-container">
          <div style={{ textAlign: 'center' }}>
            <span className="hp-section-label hp-animate hp-fade-up">WHY TELEDIRECTMD</span>
            <h2 className="hp-section-title hp-animate hp-fade-up">Healthcare that actually works for you</h2>
          </div>
          <div className="hp-why-grid hp-stagger">
            {WHY_FEATURES.map((feat, i) => (
              <div key={i} className="hp-why-card hp-animate hp-fade-up">
                <div className="hp-why-icon">
                  <WhyIcon type={feat.icon} />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
          <div className="hp-animate hp-fade-up" style={{ textAlign: 'center' }}>
            <a href="/book-online" className="hp-btn hp-btn-primary">Book a $49 MD Visit</a>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="hp-wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path d="M0,30 C360,55 720,5 1080,30 C1260,42 1380,35 1440,30 L1440,60 L0,60 Z" fill="#1A3C4D"/>
        </svg>
      </div>

      {/* ===== SECTION 9: STATE COVERAGE ===== */}
      <section className="hp-states hp-section">
        <div className="hp-container">
          <span className="hp-section-label hp-animate hp-fade-up">COVERAGE</span>
          <h2 className="hp-section-title hp-animate hp-fade-up">Licensed in 40+ states</h2>
          <p className="hp-section-subtitle hp-animate hp-fade-up">
            See a board-certified doctor from almost anywhere in the United States. Click a state to learn more.
          </p>
          <div className="hp-state-grid hp-animate hp-fade-up">
            {ALL_US_STATES.map((st) => {
              const active = LICENSED_STATES.has(st);
              const slug = STATE_SLUGS[st];
              if (active && slug) {
                return (
                  <a
                    key={st}
                    href={`/${slug}/`}
                    className={`hp-state-tile hp-state-active${st === 'DC' ? ' hp-state-dc' : ''}`}
                  >
                    {st}
                  </a>
                );
              }
              return (
                <span
                  key={st}
                  className={`hp-state-tile hp-state-inactive${st === 'DC' ? ' hp-state-dc' : ''}`}
                >
                  {st}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: CONTACT / SUPPORT ===== */}
      <section className="hp-contact hp-section-sm">
        <div className="hp-container">
          <div style={{ textAlign: 'center' }}>
            <span className="hp-section-label hp-animate hp-fade-up">CONTACT US</span>
            <h2 className="hp-section-title hp-animate hp-fade-up">We&rsquo;re here to help</h2>
          </div>
          <div className="hp-contact-card hp-animate hp-scale-in">
            <div className="hp-contact-row">
              <div className="hp-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="hp-contact-info">
                <h4>Phone</h4>
                <a href="tel:6789561855">678-956-1855</a>
              </div>
            </div>
            <div className="hp-contact-row">
              <div className="hp-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="hp-contact-info">
                <h4>Email</h4>
                <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>
              </div>
            </div>
            <div className="hp-contact-row">
              <div className="hp-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="hp-contact-info">
                <h4>Response Time</h4>
                <p>24–48 business hours</p>
              </div>
            </div>
            <p className="hp-contact-disclaimer">
              Please do not include personal health information in email messages.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
