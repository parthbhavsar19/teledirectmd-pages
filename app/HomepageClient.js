'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { homepageCSS } from '../lib/homepage-styles';
import CONDITION_ICONS from '../lib/condition-icons';
import US_STATE_PATHS from '../lib/us-map-paths';

/* ============================
   DATA
   ============================ */
const SERVICE_CATEGORIES = [
  {
    title: 'Virtual Urgent Care',
    desc: 'Cold, flu, COVID, UTI, ear pain, pink eye, and more — treated same-day.',
    icon: 'urgent',
    img: '/images/services/svc-urgent-care.png',
    href: '/what-we-treat',
  },
  {
    title: "Women's Health",
    desc: 'Yeast infections, BV, birth control refills, vaginal dryness care.',
    icon: 'womens',
    img: '/images/services/svc-womens-health.png',
    href: '/what-we-treat',
  },
  {
    title: "Men's & Sexual Health",
    desc: 'ED, STI treatment, DoxyPEP, genital herpes — discreet and fast.',
    icon: 'mens',
    img: '/images/services/svc-mens-health.png',
    href: '/what-we-treat',
  },
  {
    title: 'Skin Conditions',
    desc: 'Acne, eczema, rosacea, psoriasis, fungal infections, and more.',
    icon: 'skin',
    img: '/images/services/svc-skin.png',
    href: '/what-we-treat',
  },
  {
    title: 'Lifestyle & Refills',
    desc: 'Hair loss, anti-aging, asthma, BP, thyroid, migraine refills.',
    icon: 'refills',
    img: '/images/services/svc-lifestyle.png',
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
  { text: "Great visit! Could not recommend him more. He was a very thoughtful and kind doctor who understood my concerns and helped answer all my questions.", author: 'Verified Patient', source: 'WebMD' },
  { text: "I had an amazing experience with Dr. Parth Bhavsar. He is very thorough and knowledgeable. Setting an appointment was also easy. I'd highly recommend TeleDirectMD for quick, easy and reliable care.", author: 'Shruti Shah', source: 'Google' },
  { text: "Very satisfied! I was diagnosed with Graves Disease 15 years ago. This is the first time I ever tried virtual doctor visits for my prescription refills. I'm so excited that I found Dr. Parth Bhavsar. He was very kind and got me hooked up with my prescription.", author: 'Verified Patient', source: 'WebMD' },
  { text: "I had a virtual health visit with Dr. Parth Bhavsar on New Year's Eve and had an extremely positive experience. What stood out most was how incredibly responsive his office was — they replied within minutes and were amazingly flexible and patient.", author: 'Claudia Ewing', source: 'Google' },
  { text: "Amazing to say the least! Was in dire straits, needing a doctor ASAP! Was able to book a virtual appointment the same day and pick up my medication from my local pharmacy. Dr. Parth was very knowledgeable, down to earth and professional.", author: 'Verified Patient', source: 'WebMD' },
  { text: "Patient and prompt! Exactly what I was looking for, had great availability even over the weekend which was much appreciated. Felt professional and got the care I was expecting, if not exceeded my expectations.", author: 'Duncan W.', source: 'Zocdoc' },
  { text: "Wonderful experience! Got off a cruise with a sinus infection and knew I needed antibiotics. Super easy to book, quick appointment, inexpensive, and I got my prescription the same day.", author: 'Vicki D', source: 'Google' },
  { text: "My visit with Dr. Bhavsar went well. He was on time and I didn't feel rushed. He took time to find out what my issue was, explained symptoms I had in great detail, and I understood my issue even better because of this.", author: 'Verified Patient', source: 'WebMD' },
  { text: "He listened to my symptoms and immediately knew what I needed. After my visit I got my prescription and work excuse very fast and started to feel better within a few hours. 10/10.", author: 'Verified Patient', source: 'Healthgrades' },
  { text: "I had a wonderful experience during my TeleMed visit. Dr. Bhavsar was very personable and took the time to listen to my concerns. Highly highly recommended.", author: 'Verified Patient', source: 'WebMD' },
  { text: "Dr. Bhavsar was so knowledgeable and friendly. He really takes the time to listen and explain everything clearly. Highly recommend!", author: 'Gautam Baid', source: 'Zocdoc' },
  { text: "Great experience. Got an appointment right away for only $49 with no insurance. Doctor was cool. Gave me my meds with refills.", author: 'Devin T.', source: 'Google' },
  { text: "Fast personalized service. I had a simple bladder infection and for $49 and quick turnaround — only waited 1 hour for the virtual appointment — I was able to get the prescription I needed quickly.", author: 'Eliza', source: 'Google' },
  { text: "Glad I found this Dr and service. Booked and had a virtual appointment the same day. Pricing was very fair. Dr. P was kind and helpful, so I would definitely use this service again if needed.", author: 'Verified Patient', source: 'WebMD' },
  { text: "Dr. Parth was professional, attentive, and made the visit feel easy and comfortable. He listened carefully, explained everything clearly, and prescribed medication that worked quickly. I really appreciated how efficient and effective his care was.", author: 'Verified Patient', source: 'Healthgrades' },
];

/* 8 logos — matches live teledirectmd.com exactly */
const MEDIA_OUTLETS = [
  { name: 'HuffPost', logo: '/logos/huffpost.jpg', href: '/media-mentions' },
  { name: 'Newsweek', logo: '/logos/newsweek.png', href: 'https://www.newsweek.com/woman-drinks-matcha-every-week-shock-ends-hospital-2127630' },
  { name: 'TIME', logo: '/logos/time.png', href: 'https://time.com/7331761/cold-shower-benefits-health/' },
  { name: 'U.S. News', logo: '/logos/usnews.png', href: 'https://health.usnews.com/wellness/articles/should-i-use-collagen-supplements' },
  { name: 'New York Post', logo: '/logos/nypost.png', href: 'https://nypost.com/2025/11/01/lifestyle/bananas-may-be-making-your-smoothies-less-effective-scientists-say/' },
  { name: 'Fox News', logo: '/logos/fox.png', href: 'https://www.foxnews.com/food-drink/bananas-may-sabotaging-your-smoothies-superpowers-scientists-warn' },
  { name: 'Healthline', logo: '/logos/healthline.png', href: 'https://www.healthline.com/health-news/amy-sedaris-talks-brain-health' },
  { name: 'Daily Mail', logo: '/logos/dailymail.png', href: 'https://www.newsweek.com/woman-drinks-matcha-every-week-shock-ends-hospital-2127630' },
];

/* Condition name → URL slug mapping (from live site) */
const CONDITION_SLUGS = {
  'Common Cold': '/common-cold-treatment-online',
  'COVID-19': '/covid-19-treatment-online',
  'Influenza': '/influenza-treatment-online',
  'Sinus Infection': '/sinus-infection-treatment-online',
  'Sore Throat': '/sore-throat-treatment-online',
  'Ear Pain': '/ear-pain-treatment-online',
  'Pink Eye': '/pink-eye-treatment-online',
  'Dental Pain': '/dental-pain-treatment-online',
  'UTI': '/uti-treatment-online',
  'Cellulitis': '/cellulitis-treatment-online',
  'Shingles': '/shingles-treatment-online',
  'Gout': '/gout-treatment-online',
  'Mastitis': '/mastitis-treatment-online',
  'Viral Gastroenteritis': '/viral-gastroenteritis-treatment-online',
  'Impetigo': '/impetigo-treatment-online',
  'Oral Thrush': '/oral-thrush-treatment-online',
  'Yeast Infection': '/yeast-infection-treatment-online',
  'Bacterial Vaginosis': '/bv-treatment-online',
  'Vaginal Dryness': '/vaginal-dryness-treatment-online',
  'Birth Control Refills': '/birth-control-refills-online',
  'Chlamydia': '/chlamydia-treatment-online',
  'Genital Herpes': '/genital-herpes-treatment-online',
  'Cold Sore': '/cold-sore-treatment-online',
  'Genital Warts': '/genital-warts-treatment-online',
  'Trichomoniasis': '/trichomoniasis-treatment-online',
  'Mycoplasma Genitalium': '/mycoplasma-genitalium-treatment-online',
  'DoxyPEP STI Prevention': '/doxypep-sti-prevention-online',
  'Erectile Dysfunction': '/erectile-dysfunction-treatment-online',
  'Performance Anxiety': '/performance-anxiety-treatment-online',
  'Acne': '/acne-treatment-online',
  'Eczema': '/eczema-treatment-online',
  'Rosacea': '/rosacea-treatment-online',
  'Contact Dermatitis': '/contact-dermatitis-treatment-online',
  'Dandruff': '/dandruff-treatment-online',
  'Psoriasis Refills': '/psoriasis-refills-online',
  'Skin Fungus': '/tinea-treatment-online',
  'Tinea Versicolor': '/tinea-versicolor-treatment-online',
  'Excessive Sweating': '/excessive-sweating-treatment-online',
  'Poison Ivy & Oak': '/poison-ivy-oak-treatment-online',
  'Perioral Dermatitis': '/perioral-dermatitis-treatment-online',
  'Melasma': '/melasma-treatment-online',
  'Dog Bite': '/dog-bite-treatment-online',
  'Cat Bite': '/cat-bite-treatment-online',
  'Tick Bite': '/tick-bite-treatment-online',
  'Head Lice': '/head-lice-treatment-online',
  'Scabies': '/scabies-treatment-online',
  'Asthma Refills': '/asthma-refills-online',
  'Hypertension Refills': '/hypertension-refills-online',
  'Hypothyroidism Refills': '/hypothyroidism-refills-online',
  'Hyperlipidemia Refills': '/hyperlipidemia-refills-online',
  'Diabetes Refills': '/diabetes-refills-online',
  'Migraine Refills': '/migraine-refills-online',
  'Acid Reflux Refills': '/acid-reflux-refills-online',
  'EpiPen Refills': '/epipen-refills-online',
  'Seasonal Allergies': '/seasonal-allergies-treatment-online',
  'Hair Loss': '/hair-loss-treatment-online',
  'Anti-Aging': '/anti-aging-treatment-online',
  'Eyelash Growth': '/eyelash-growth-treatment-online',
  'Smoking Cessation': '/smoking-cessation-treatment-online',
  'Motion Sickness': '/motion-sickness-treatment-online',
};

const WHY_FEATURES = [
  { title: 'Board-Certified MD', desc: 'Every visit is with Dr. Parth Bhavsar, a licensed family medicine physician.', icon: 'doctor', img: '/images/why/why-board-certified.png' },
  { title: '$49 Flat Fee', desc: 'One transparent price. No surprise bills, no co-pays, no hidden charges.', icon: 'dollar', img: '/images/why/why-flat-fee.png' },
  { title: '40+ States', desc: 'Licensed in 41 states + DC — 42 coverage areas across the U.S.', icon: 'map', img: '/images/why/why-states.png' },
  { title: 'LegitScript Certified', desc: 'Verified by LegitScript for safe, compliant telehealth prescribing.', icon: 'shield', img: '/images/why/why-legitscript.png' },
  { title: 'Fast Prescriptions', desc: 'Rx sent to your pharmacy — often within an hour of your visit.', icon: 'rx', img: '/images/why/why-fast-rx.png' },
  { title: 'No Waiting Rooms', desc: 'Skip the drive and the wait. See a doctor from your couch.', icon: 'home', img: '/images/why/why-no-waiting.png' },
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
   STICKY SCROLL REVEAL HOOK
   (Apple-style: section pins, children reveal one-by-one)
   ============================ */
function useStickyScroll(itemCount, { scrollPerItem = 200 } = {}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveIndex(itemCount - 1);
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      // How far into the sticky zone we are
      const scrolled = viewH - rect.top;
      const totalScroll = itemCount * scrollPerItem;
      const pct = Math.max(0, Math.min(1, scrolled / totalScroll));
      setProgress(pct);
      const idx = Math.floor(pct * itemCount) - 1;
      setActiveIndex(Math.min(idx, itemCount - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [itemCount, scrollPerItem]);

  return { containerRef, activeIndex, progress };
}

/* ============================
   NUMBER COUNTER HOOKS
   ============================ */
function useCountUp(end, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        const start = performance.now();
        const step = (now) => {
          const elapsed = now - start;
          const pct = Math.min(elapsed / duration, 1);
          // ease-out curve
          const eased = 1 - Math.pow(1 - pct, 3);
          setCount(Math.round(eased * end));
          if (pct < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count };
}

/* Countdown: starts high, drops to target — ease-out so it slows dramatically near the end */
function useCountDown(from, to, duration = 2000) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        const delta = from - to;
        const start = performance.now();
        const step = (now) => {
          const elapsed = now - start;
          const pct = Math.min(elapsed / duration, 1);
          // ease-out cubic — fast drop at start, dramatic slow-down near $49
          const eased = 1 - Math.pow(1 - pct, 3);
          setCount(Math.round(from - eased * delta));
          if (pct < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration]);

  return { ref, count };
}

/* ============================
   MAIN COMPONENT
   ============================ */
/* ============================
   STICKY STEP COMPONENT
   (How It Works — Apple-style)
   ============================ */
const HOW_STEPS = [
  { num: 1, title: 'Book Online', desc: 'Choose a visit time that works for you. Available 7 days a week.', img: '/images/steps/step-book.png' },
  { num: 2, title: 'Quick Intake', desc: 'Fill out a brief health questionnaire so your doctor is prepared.', img: '/images/steps/step-intake.png' },
  { num: 3, title: 'Video Visit', desc: 'Meet with Dr. Bhavsar via secure video. Discuss symptoms, get a diagnosis.', img: '/images/steps/step-video.png' },
  { num: 4, title: 'Get Your Rx', desc: 'Prescription sent to your pharmacy — often within the hour.', img: '/images/steps/step-rx.png' },
];

function StickyHowItWorks() {
  const { containerRef, activeIndex } = useStickyScroll(4, { scrollPerItem: 140 });

  return (
    <section className="hp-how hp-section">
      <div className="hp-sticky-scroll-outer" ref={containerRef}>
        <div className="hp-sticky-viewport">
          <div className="hp-container">
            <span className="hp-section-label" style={{ color: '#006B73' }}>HOW IT WORKS</span>
            <h2 className="hp-section-title" style={{ color: '#003E52' }}>See a doctor in 4 simple steps</h2>
            <p className="hp-section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              No insurance paperwork. No long wait times. Just quality healthcare, from wherever you are.
            </p>
            <div className="hp-sticky-steps">
              {/* Left: step indicators / progress */}
              <div className="hp-sticky-steps-nav">
                {HOW_STEPS.map((step, i) => (
                  <div key={i} className={`hp-sticky-nav-item${i <= activeIndex ? ' hp-sticky-nav-active' : ''}`}>
                    <div className="hp-sticky-nav-num">{step.num}</div>
                    <div className="hp-sticky-nav-label">{step.title}</div>
                    {i < 3 && <div className={`hp-sticky-nav-line${i < activeIndex ? ' hp-sticky-nav-line-fill' : ''}`} />}
                  </div>
                ))}
              </div>
              {/* Right: cards that reveal */}
              <div className="hp-sticky-steps-cards">
                {HOW_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className={`hp-sticky-step-card${i <= activeIndex ? ' hp-sticky-step-visible' : ''}`}
                    style={{ transitionDelay: `${i <= activeIndex ? 0.05 : 0}s` }}
                  >
                    <div className="hp-sticky-step-img">
                      <img src={step.img} alt={step.title} loading="lazy" />
                      <span className="hp-step-num">{step.num}</span>
                    </div>
                    <div className="hp-sticky-step-text">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <a href="/book-online" className="hp-btn hp-btn-primary">Book Your $49 Visit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================
   STICKY WHY COMPONENT
   (Why TeleDirectMD — Apple-style)
   ============================ */
function StickyWhySection() {
  const { containerRef, activeIndex } = useStickyScroll(6, { scrollPerItem: 115 });
  const whyPriceCountdown = useCountDown(2200, 49, 2000);

  return (
    <section className="hp-why hp-section">
      <div className="hp-sticky-scroll-outer hp-sticky-why-outer" ref={containerRef}>
        <div className="hp-sticky-viewport">
          <div className="hp-container">
            <div style={{ textAlign: 'center' }}>
              <span className="hp-section-label" style={{ color: '#006B73' }}>WHY TELEDIRECTMD</span>
              <h2 className="hp-section-title">Healthcare that actually works for you</h2>
            </div>
            <div className="hp-why-grid">
              {WHY_FEATURES.map((feat, i) => (
                <div
                  key={i}
                  className={`hp-why-card hp-sticky-why-card${i <= activeIndex ? ' hp-sticky-why-visible' : ''}`}
                >
                  <div className="hp-why-img">
                    <img src={feat.img} alt={feat.title} loading="lazy" />
                  </div>
                  {i === 1 ? (
                    <h3><span ref={whyPriceCountdown.ref} className="hp-counter-price">${whyPriceCountdown.count.toLocaleString()}</span> Flat Fee</h3>
                  ) : (
                    <h3>{feat.title}</h3>
                  )}
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="/book-online" className="hp-btn hp-btn-primary">Book a $49 MD Visit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================
   MAIN COMPONENT
   ============================ */
export default function HomepageClient() {
  const wrapRef = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState(0);
  const reviewTrackRef = useRef(null);

  // Counter hooks for stats
  const stateCounter = useCountUp(42, 1500);
  const conditionCounter = useCountUp(60, 1200);
  const ratingCounter = useCountUp(49, 1000); // 4.9 -> we'll display as 4.9
  const priceCountdown = useCountDown(2200, 49, 2200); // $2,200 → $49 over 2.2s

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
    const track = reviewTrackRef.current;
    if (!track) return;
    const cardWidth = window.innerWidth < 480 ? 280 : 360;
    track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  }, []);

  return (
    <div className="hp-wrap" ref={wrapRef}>
      <style dangerouslySetInnerHTML={{ __html: homepageCSS }} />

      {/* ===== SECTION 1: HERO — Canvas Animation (from live site) ===== */}
      <section className="hp-hero-canvas">
        {/* Decorative accents for wide screens */}
        <div className="hp-hero-accents" aria-hidden="true">
          <svg className="hp-hero-accent-left" viewBox="0 0 120 400" fill="none">
            <circle cx="60" cy="80" r="40" fill="#006B73" opacity="0.06"/>
            <circle cx="30" cy="180" r="20" fill="#FF5A36" opacity="0.06"/>
            <path d="M20 260h14v-14h10v14h14v10h-14v14h-10v-14h-14z" fill="#006B73" opacity="0.07"/>
            <circle cx="70" cy="340" r="12" fill="#006B73" opacity="0.05"/>
            <rect x="45" y="140" width="3" height="24" rx="1.5" fill="#006B73" opacity="0.06" transform="rotate(30 46.5 152)"/>
          </svg>
          <svg className="hp-hero-accent-right" viewBox="0 0 120 400" fill="none">
            <circle cx="50" cy="100" r="30" fill="#006B73" opacity="0.05"/>
            <circle cx="80" cy="220" r="16" fill="#FF5A36" opacity="0.05"/>
            <path d="M40 300l12-8 12 8-5-13 12-8h-14l-5-13-5 13h-14l12 8z" fill="#006B73" opacity="0.06"/>
            <circle cx="35" cy="60" r="8" fill="#006B73" opacity="0.07"/>
            <rect x="60" y="160" width="3" height="20" rx="1.5" fill="#FF5A36" opacity="0.05" transform="rotate(-20 61.5 170)"/>
          </svg>
        </div>
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
              <span ref={conditionCounter.ref} className="hp-counter-num">{conditionCounter.count}</span>+ conditions, just{' '}
              <span ref={priceCountdown.ref} className="hp-counter-price">${priceCountdown.count.toLocaleString()}</span>
            </h2>
            <p className="hp-section-subtitle hp-animate hp-fade-up" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              From urgent infections to chronic medication refills — get expert care from a board-certified physician.
            </p>
          </div>
          <div className="hp-services-grid hp-stagger">
            {SERVICE_CATEGORIES.map((svc, i) => (
              <a key={i} href={svc.href} className="hp-service-card hp-animate hp-fade-up">
                <div className="hp-service-img">
                  <img src={svc.img} alt={svc.title} loading="lazy" />
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className="hp-btn hp-btn-sm">Book Now</span>
              </a>
            ))}
          </div>
          <div className="hp-featured-strip hp-animate hp-fade-up">
            <span>AS FEATURED IN</span>
            <div className="hp-marquee-wrap">
              <div className="hp-marquee-track">
                {/* Double the logos for seamless loop */}
                {[...MEDIA_OUTLETS, ...MEDIA_OUTLETS].map((item, i) => (
                  <a key={`${item.name}-${i}`} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', lineHeight: 0 }}>
                    <img src={item.logo} alt={item.name} loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: HOW IT WORKS (Apple-style sticky scroll) ===== */}
      <StickyHowItWorks />

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
              <a key={i} href={CONDITION_SLUGS[c] || '/what-we-treat'} className="hp-condition-pill">
                {CONDITION_ICONS[c] ? (
                  <span className="hp-condition-icon" dangerouslySetInnerHTML={{ __html: CONDITION_ICONS[c] }} />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                )}
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

      {/* ===== SECTION 5: INSURANCE ACCEPTED ===== */}
      <section className="hp-insurance-logos hp-section-sm">
        <div className="hp-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="hp-section-label hp-animate hp-fade-up">INSURANCE ACCEPTED</span>
            <h2 className="hp-section-title hp-animate hp-fade-up">Now accepting major insurance</h2>
            <p className="hp-section-sub hp-animate hp-fade-up" style={{ maxWidth: '480px', margin: '0.75rem auto 0' }}>
              Aetna, Anthem Blue Cross Blue Shield, and UnitedHealthcare accepted in select states.
              Cash pay always available at $49 flat.
            </p>
          </div>
          <div className="hp-insurance-grid hp-stagger">
            <a href="/insurance" className="hp-insurance-card hp-animate hp-scale-in">
              <img src="/logos/aetna.png" alt="Aetna" loading="lazy" />
            </a>
            <a href="/insurance" className="hp-insurance-card hp-animate hp-scale-in">
              <img src="/logos/anthem-bcbs.svg" alt="Anthem Blue Cross Blue Shield" loading="lazy" />
            </a>
            <a href="/insurance" className="hp-insurance-card hp-animate hp-scale-in">
              <img src="/logos/unitedhealthcare.svg" alt="UnitedHealthcare" loading="lazy" />
            </a>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }} className="hp-animate hp-fade-up">
            <a href="/insurance" className="hp-btn hp-btn-secondary hp-btn-sm">Check Your Coverage &rarr;</a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: MEET THE DOCTOR ===== */}
      <section className="hp-doctor hp-section">
        <div className="hp-container">
          <div className="hp-doctor-inner">
            <div>
              <span className="hp-section-label hp-doctor-label hp-animate hp-fade-up">YOUR PHYSICIAN</span>
              <h2 className="hp-doctor-name hp-animate hp-fade-up">Parth Bhavsar, MD</h2>
              <p className="hp-doctor-creds hp-animate hp-fade-up">Board-Certified Family Medicine &middot; Founder, TeleDirectMD</p>
              <p className="hp-doctor-bio hp-animate hp-fade-up">
                Dr. Parth Bhavsar is a board-certified family medicine physician with extensive clinical experience in urgent care, virtual primary care, and telehealth. He completed his residency at the University of Mississippi Medical Center.
              </p>
              <p className="hp-doctor-bio hp-animate hp-fade-up">
                He founded TeleDirectMD to bring fast, affordable, and physician-led virtual care to individuals and families — without delays or red tape. Every visit is personally conducted by Dr. Bhavsar — never a midlevel provider or automated system.
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
                  <path d="M350 100c30 60 50 140 20 220s-90 140-170 150-160-30-190-110S-20 180 30 110 90 20 170 10s150 30 180 90z" fill="#006B73" opacity="0.08"/>
                  <path d="M320 140c20 50 30 120 10 190s-70 120-140 130-130-20-160-90S10 210 50 150s60-90 130-100 110 30 140 90z" fill="#006B73" opacity="0.05"/>
                  <circle cx="60" cy="80" r="18" fill="#FF5A36" opacity="0.12"/>
                  <circle cx="340" cy="400" r="12" fill="#006B73" opacity="0.15"/>
                  <path d="M45 380h10v-10h8v10h10v8h-10v10h-8v-10h-10z" fill="#006B73" opacity="0.12"/>
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
          <div
            className="hp-reviews-track"
            ref={reviewTrackRef}
          >
              {REVIEWS.map((review, i) => (
                <div key={i} className="hp-review-card">
                  <div className="hp-review-quote" aria-hidden="true">
                    <svg viewBox="0 0 40 32" fill="none" width="40" height="32">
                      <path d="M0 20.8C0 27.2 3.6 32 9.6 32c4.4 0 7.6-3.2 7.6-7.2 0-4-2.8-6.8-6.4-6.8-1.2 0-2.4.4-3.2 1.2C8 14 11.6 8.4 17.2 5.6L14.4 0C5.6 4.4 0 12 0 20.8zm22.4 0C22.4 27.2 26 32 32 32c4.4 0 7.6-3.2 7.6-7.2 0-4-2.8-6.8-6.4-6.8-1.2 0-2.4.4-3.2 1.2C30.4 14 34 8.4 39.6 5.6L36.8 0C28 4.4 22.4 12 22.4 20.8z" fill="#006B73" opacity="0.08"/>
                    </svg>
                  </div>
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
      </section>

      {/* ===== SECTION 8: WHY CHOOSE (Apple-style sticky scroll) ===== */}
      <StickyWhySection />

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
          <h2 className="hp-section-title hp-animate hp-fade-up"><span ref={stateCounter.ref}>{stateCounter.count}</span>+ states licensed</h2>
          <p className="hp-section-subtitle hp-animate hp-fade-up">
            See a board-certified doctor from almost anywhere in the United States. Click a state to learn more.
          </p>
          <div className="hp-us-map hp-animate hp-fade-up" aria-hidden="true">
            <svg viewBox="0 0 960 600" xmlns="http://www.w3.org/2000/svg">
              {Object.entries(US_STATE_PATHS).map(([abbr, d]) => (
                <path
                  key={abbr}
                  d={d}
                  fill={LICENSED_STATES.has(abbr) ? '#006B73' : 'rgba(255,255,255,0.08)'}
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              ))}
            </svg>
            <div className="hp-map-legend">
              <span className="hp-map-legend-item hp-map-active"><span></span> Licensed</span>
              <span className="hp-map-legend-item hp-map-inactive"><span></span> Coming Soon</span>
            </div>
          </div>
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
          <div className="hp-contact-layout hp-animate hp-scale-in">
            <div className="hp-contact-illustration" aria-hidden="true">
              <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Phone body */}
                <rect x="60" y="30" width="160" height="280" rx="24" fill="#003E52" stroke="#006B73" strokeWidth="2"/>
                <rect x="72" y="58" width="136" height="220" rx="4" fill="#F4EFE8"/>
                {/* Screen content — video call */}
                <rect x="72" y="58" width="136" height="160" rx="4" fill="#EAF5F3"/>
                {/* Doctor avatar on screen */}
                <circle cx="140" cy="120" r="30" fill="#006B73" opacity="0.15"/>
                <circle cx="140" cy="110" r="14" fill="#006B73"/>
                <ellipse cx="140" cy="138" rx="20" ry="10" fill="#006B73"/>
                {/* Stethoscope hint */}
                <path d="M130 124 Q125 135 132 140" stroke="#F4EFE8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                {/* Video call UI elements */}
                <rect x="82" y="68" width="36" height="4" rx="2" fill="#006B73" opacity="0.3"/>
                <circle cx="195" cy="70" r="5" fill="#FF5A36" opacity="0.6"/>
                {/* Chat bubbles below video */}
                <rect x="82" y="228" width="80" height="18" rx="9" fill="#006B73"/>
                <rect x="122" y="252" width="76" height="18" rx="9" fill="#FF5A36" opacity="0.8"/>
                {/* Small dots on chat bubbles */}
                <circle cx="100" cy="237" r="2" fill="#fff" opacity="0.8"/>
                <circle cx="110" cy="237" r="2" fill="#fff" opacity="0.8"/>
                <circle cx="120" cy="237" r="2" fill="#fff" opacity="0.8"/>
                <circle cx="148" cy="261" r="2" fill="#fff" opacity="0.8"/>
                <circle cx="158" cy="261" r="2" fill="#fff" opacity="0.8"/>
                <circle cx="168" cy="261" r="2" fill="#fff" opacity="0.8"/>
                {/* Phone notch */}
                <rect x="115" y="36" width="50" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
                {/* Home indicator */}
                <rect x="110" y="296" width="60" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
                {/* Decorative elements */}
                <circle cx="40" cy="80" r="12" fill="#FF5A36" opacity="0.1"/>
                <circle cx="245" cy="260" r="16" fill="#006B73" opacity="0.08"/>
                <path d="M30 200h10v-10h6v10h10v6h-10v10h-6v-10h-10z" fill="#006B73" opacity="0.1"/>
                {/* Pulse/signal lines */}
                <path d="M220 90 Q235 85 240 95" stroke="#006B73" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
                <path d="M225 80 Q245 73 252 87" stroke="#006B73" strokeWidth="1.5" fill="none" opacity="0.2" strokeLinecap="round"/>
                <path d="M230 70 Q255 61 264 79" stroke="#006B73" strokeWidth="1.5" fill="none" opacity="0.1" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="hp-contact-card">
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
        </div>
      </section>

    </div>
  );
}
