import { NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Paths served by Vercel's filesystem — do NOT proxy these to Squarespace
// ---------------------------------------------------------------------------
const VERCEL_PATH_PREFIXES = [
  '/_next/',
  '/logo',
  '/sitemap.xml',
  '/llms.txt',
  '/llms-full.txt',
  '/health-guides/',
  '/assets/',
  '/favicon',
];

// All 39 state abbreviations
const STATE_CODES = new Set([
  'al','az','ca','co','ct','de','fl','ga','hi','id',
  'il','in','ia','ky','la','md','mi','mn','ms','mo',
  'mt','ne','nv','nh','nj','nc','nd','oh','ok','pa',
  'sc','sd','tn','tx','ut','wa','wv','wi','wy',
]);

// All 50 national condition slugs
const CONDITION_SLUGS = new Set([
  'acid-reflux-refills-online',
  'acne-treatment-online',
  'anti-aging-treatment-online',
  'asthma-refills-online',
  'bv-treatment-online',
  'cat-bite-treatment-online',
  'cellulitis-treatment-online',
  'chlamydia-treatment-online',
  'cold-sore-treatment-online',
  'common-cold-treatment-online',
  'contact-dermatitis-treatment-online',
  'covid-19-treatment-online',
  'dandruff-treatment-online',
  'dental-pain-treatment-online',
  'diabetes-refills-online',
  'dog-bite-treatment-online',
  'ear-pain-treatment-online',
  'eczema-treatment-online',
  'epipen-refills-online',
  'erectile-dysfunction-treatment-online',
  'excessive-sweating-treatment-online',
  'eyelash-growth-treatment-online',
  'genital-herpes-treatment-online',
  'gout-treatment-online',
  'hair-loss-treatment-online',
  'head-lice-treatment-online',
  'hyperlipidemia-refills-online',
  'hypertension-refills-online',
  'hypothyroidism-refills-online',
  'influenza-treatment-online',
  'mastitis-treatment-online',
  'migraine-refills-online',
  'motion-sickness-treatment-online',
  'performance-anxiety-treatment-online',
  'pink-eye-treatment-online',
  'poison-ivy-oak-treatment-online',
  'psoriasis-refills-online',
  'rosacea-treatment-online',
  'scabies-treatment-online',
  'seasonal-allergies-treatment-online',
  'shingles-treatment-online',
  'sinus-infection-treatment-online',
  'smoking-cessation-treatment-online',
  'sore-throat-treatment-online',
  'tick-bite-treatment-online',
  'tinea-treatment-online',
  'tinea-versicolor-treatment-online',
  'uti-treatment-online',
  'vaginal-dryness-treatment-online',
  'yeast-infection-treatment-online',
]);

// ---------------------------------------------------------------------------
// Middleware config — run on all paths except static assets
// ---------------------------------------------------------------------------
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};

// ---------------------------------------------------------------------------
// Squarespace origin
// ---------------------------------------------------------------------------
const SQ_ORIGIN = 'https://pepper-saxophone-p8le.squarespace.com';

// ---------------------------------------------------------------------------
// Main middleware
// ---------------------------------------------------------------------------
export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Skip Vercel static assets & known prefixes
  if (VERCEL_PATH_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // 2. Parse path segments (strip leading/trailing slashes)
  const pathParts = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

  // 3. Skip state pages — /ga/, /ga/uti-treatment-online/, etc.
  if (pathParts.length >= 1 && STATE_CODES.has(pathParts[0])) {
    return NextResponse.next();
  }

  // 4. Skip national condition pages — /uti-treatment-online/, etc.
  if (pathParts.length === 1 && CONDITION_SLUGS.has(pathParts[0])) {
    return NextResponse.next();
  }

  // -----------------------------------------------------------------------
  // Everything else → proxy to Squarespace with content rewriting
  // -----------------------------------------------------------------------
  const sqUrl = `${SQ_ORIGIN}${pathname}${request.nextUrl.search}`;

  let sqResponse;
  try {
    sqResponse = await fetch(sqUrl, {
      method: request.method,
      headers: {
        'host': 'pepper-saxophone-p8le.squarespace.com',
        'user-agent': request.headers.get('user-agent') || '',
        'accept': request.headers.get('accept') || '*/*',
        'accept-language': request.headers.get('accept-language') || '',
        'accept-encoding': 'identity',
      },
      redirect: 'manual',
    });
  } catch {
    return new NextResponse('Bad Gateway', { status: 502 });
  }

  // Handle redirects — rewrite Squarespace domain back to teledirectmd.com
  if (sqResponse.status >= 300 && sqResponse.status < 400) {
    const location = sqResponse.headers.get('location');
    if (location) {
      const newLocation = location
        .replace(/pepper-saxophone-p8le\.squarespace\.com/g, 'teledirectmd.com')
        .replace(/^http:\/\//, 'https://');
      return NextResponse.redirect(newLocation, sqResponse.status);
    }
  }

  const contentType = sqResponse.headers.get('content-type') || '';

  // Non-HTML responses: pass through unchanged
  if (!contentType.includes('text/html')) {
    const responseHeaders = new Headers(sqResponse.headers);
    responseHeaders.delete('content-encoding');
    return new NextResponse(sqResponse.body, {
      status: sqResponse.status,
      headers: responseHeaders,
    });
  }

  // -----------------------------------------------------------------------
  // HTML rewriting
  // -----------------------------------------------------------------------
  let html = await sqResponse.text();

  // === CONTENT FIXES ===

  // Fix stale pricing ($29 → $49)
  html = html.replace(/\$29\b/g, '$49');

  // Fix state counts (25+ → 35+)
  html = html.replace(/25\+\s*states/gi, '35+ states');
  html = html.replace(/25\+&nbsp;states/gi, '35+&nbsp;states');
  html = html.replace(/in 25\+ licensed/gi, 'in 35+ licensed');

  // Fix condition counts (30+ → 50+)
  html = html.replace(/30\+\s*conditions/gi, '50+ conditions');
  html = html.replace(/30\+&nbsp;conditions/gi, '50+&nbsp;conditions');

  // Fix address typo
  html = html.replace(/UnitedUnited States States/g, 'United States');

  // Fix Squarespace domain references in visible content
  html = html.replace(/pepper-saxophone-p8le\.squarespace\.com/g, 'teledirectmd.com');

  // === PAGE-SPECIFIC INJECTIONS ===
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  // Inject FAQ schema on /faq page
  if (normalizedPath === '/faq') {
    const faqSchema = getFaqSchema();
    html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n</head>`);
  }

  // Inject improved schema on homepage
  if (normalizedPath === '' || normalizedPath === '/' || normalizedPath === '/home') {
    const homeSchema = getHomeSchema();
    html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(homeSchema)}</script>\n</head>`);
  }

  // Build response
  const responseHeaders = new Headers(sqResponse.headers);
  responseHeaders.delete('content-encoding');
  responseHeaders.delete('content-length');

  return new NextResponse(html, {
    status: sqResponse.status,
    headers: responseHeaders,
  });
}

// ---------------------------------------------------------------------------
// FAQ Page Schema (FAQPage JSON-LD)
// ---------------------------------------------------------------------------
function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      // About TeleDirectMD
      {
        '@type': 'Question',
        name: 'What is TeleDirectMD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TeleDirectMD is a physician-led, direct-pay virtual urgent care platform. Every visit is a live video consultation with Dr. Parth Bhavsar, MD — a board-certified family medicine physician. The service costs $49 per visit with no insurance required. TeleDirectMD treats 50+ conditions for adults (18+) in 39 U.S. states.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the doctor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Parth Bhavsar, MD is a board-certified family medicine physician who founded and operates TeleDirectMD. He personally conducts every patient visit — there are no mid-level providers, chatbots, or AI systems involved in patient care.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TeleDirectMD see children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TeleDirectMD only treats adults aged 18 and older. Pediatric patients should see their pediatrician or visit an in-person urgent care facility.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is TeleDirectMD different from other telehealth services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TeleDirectMD is unique in several ways: (1) Every visit is with a board-certified physician — never a nurse practitioner or physician assistant. (2) It\'s a solo-physician practice, so you always see the same doctor. (3) $49 flat fee with no insurance, subscriptions, or hidden costs. (4) LegitScript-certified. (5) No AI chatbots or automated diagnoses.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does "TeleDirect" mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '"TeleDirect" reflects the practice\'s model: direct-to-physician telehealth. No middlemen, no triage nurses, no chatbots — you connect directly with Dr. Bhavsar via video for your consultation.',
        },
      },
      // Availability
      {
        '@type': 'Question',
        name: 'What states does TeleDirectMD serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TeleDirectMD is licensed in 39 U.S. states: Alabama, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kentucky, Louisiana, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas, Utah, Washington, West Virginia, Wisconsin, and Wyoming.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to live in one of these states?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You don\'t need to be a permanent resident, but you must be physically located in one of the 39 licensed states at the time of your visit. This is a legal requirement for telehealth under state medical licensing laws.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use TeleDirectMD while traveling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, as long as you are physically located in one of the 39 licensed states at the time of your visit. For example, if you live in an unlicensed state but are traveling in a licensed state, you can use TeleDirectMD while there.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I am outside a licensed state?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you are physically located in a state where TeleDirectMD is not licensed, you cannot be seen. This includes U.S. territories and international locations. Check teledirectmd.com/states-we-serve for the current list.',
        },
      },
      // Conditions
      {
        '@type': 'Question',
        name: 'What conditions does TeleDirectMD treat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TeleDirectMD treats 50+ conditions across seven categories: Urgent Care (common cold, COVID-19, flu, sinus infection, sore throat, ear pain, pink eye, dental pain, UTI, cellulitis, shingles, gout, mastitis), Women\'s Health (yeast infection, BV, vaginal dryness), Sexual Health (chlamydia, genital herpes, cold sores, erectile dysfunction, performance anxiety), Skin Conditions (acne, eczema, rosacea, contact dermatitis, dandruff, psoriasis, skin fungus, tinea versicolor, excessive sweating, poison ivy/oak), Bites & Infestations (dog/cat/tick bites, head lice, scabies), Chronic Medication Refills (asthma, blood pressure, thyroid, cholesterol, diabetes, migraine, acid reflux, EpiPen, seasonal allergies), and Wellness (hair loss, anti-aging, eyelash growth, smoking cessation, motion sickness).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a prescription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If clinically appropriate after your evaluation, Dr. Bhavsar will send prescriptions electronically to your preferred pharmacy. Common prescriptions include antibiotics, antivirals, topical medications, inhalers, and maintenance medications. Prescriptions are not guaranteed — they are only issued when medically indicated.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TeleDirectMD prescribe controlled substances?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TeleDirectMD does not prescribe any Schedule II–V controlled substances. This includes opioids, benzodiazepines (Xanax, Valium, Ativan), stimulants (Adderall, Ritalin), and sleep medications (Ambien, Lunesta).',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TeleDirectMD prescribe GLP-1 or weight-loss medications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TeleDirectMD does not prescribe GLP-1 receptor agonists (Ozempic, Wegovy, Mounjaro, Saxenda) or any other weight-loss medications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What about erectile dysfunction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TeleDirectMD treats erectile dysfunction with evidence-based PDE5 inhibitors including sildenafil (generic Viagra) and tadalafil (generic Cialis) when clinically appropriate. A medical evaluation is required during the video visit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my condition cannot be treated by video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If Dr. Bhavsar determines that your condition requires in-person examination, lab work, imaging, or specialist care, he will let you know during the visit and provide appropriate referral guidance. Patient safety always comes first.',
        },
      },
      // Pricing
      {
        '@type': 'Question',
        name: 'Does TeleDirectMD accept insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TeleDirectMD is a direct-pay practice. The $49 visit fee covers the entire consultation. Patients may request a superbill (itemized receipt with CPT and ICD-10 codes) to submit to their insurance for possible out-of-network reimbursement.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a visit cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '$49 per visit. This is a flat fee that covers the complete video consultation, clinical evaluation, treatment plan, and any prescriptions sent to your pharmacy. There are no hidden fees, copays, follow-up charges, or subscription costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods are accepted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TeleDirectMD accepts all major credit and debit cards (Visa, Mastercard, American Express, Discover). Payment is collected at the time of booking through the secure online portal.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cancellation policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you need to cancel or reschedule, do so at least 2 hours before your appointment for a full refund. Late cancellations and no-shows may not be eligible for a refund.',
        },
      },
      // Visit Experience
      {
        '@type': 'Question',
        name: 'How do I book?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit teledirectmd.com/book-online, select your condition and state, choose an available time slot, and complete payment ($49). You\'ll receive a confirmation email with a link to join your video visit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon can I be seen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most patients are seen the same day, often within hours of booking. Availability depends on the current schedule, but TeleDirectMD prioritizes same-day access for urgent care needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I have ready?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Have a list of your current medications, any known allergies, relevant medical history, and your preferred pharmacy name and address. For skin conditions, good lighting and a clear camera view of the affected area are helpful. For medication refills, have your current prescription bottle nearby.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need an app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TeleDirectMD uses a web-based video platform that works in any modern browser (Chrome, Safari, Firefox, Edge) on your computer, tablet, or smartphone. No app download is required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my information secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TeleDirectMD uses HIPAA-compliant technology for all video visits, medical records, and communications. Your personal health information is encrypted and protected in accordance with federal privacy regulations.',
        },
      },
      // Work Notes
      {
        '@type': 'Question',
        name: 'Can I get a work note?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Dr. Bhavsar can provide a work/school note documenting your visit if requested during your appointment. The note will confirm that you were seen for a medical evaluation on the date of your visit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TeleDirectMD complete FMLA or disability paperwork?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. TeleDirectMD does not complete FMLA forms, disability paperwork, or other extended documentation. These require an ongoing physician-patient relationship and are best handled by your primary care provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I access my visit summary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A detailed visit summary including your diagnosis, treatment plan, and any prescriptions is provided after each visit. You can access it through your patient portal or request a copy via email at contact@teledirectmd.com.',
        },
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Homepage Schema (MedicalBusiness + Physician + WebSite @graph)
// ---------------------------------------------------------------------------
function getHomeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalBusiness', 'MedicalOrganization'],
        '@id': 'https://teledirectmd.com/#organization',
        name: 'TeleDirectMD',
        alternateName: 'TeleDirect MD',
        url: 'https://teledirectmd.com',
        logo: 'https://teledirectmd.com/logo.webp',
        image: 'https://teledirectmd.com/logo.webp',
        description: 'Physician-led, direct-pay virtual urgent care. $49 flat-fee video consultations with a board-certified family medicine physician. No insurance required. Available in 39 U.S. states.',
        telephone: '+1-678-956-1855',
        email: 'contact@teledirectmd.com',
        priceRange: '$49',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Credit Card, Debit Card',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '913 South Perry Street',
          addressLocality: 'Lawrenceville',
          addressRegion: 'GA',
          postalCode: '30046',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.9562,
          longitude: -83.9879,
        },
        areaServed: [
          'Alabama','Arizona','California','Colorado','Connecticut','Delaware',
          'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
          'Kentucky','Louisiana','Maryland','Michigan','Minnesota','Mississippi',
          'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
          'North Carolina','North Dakota','Ohio','Oklahoma','Pennsylvania',
          'South Carolina','South Dakota','Tennessee','Texas','Utah','Washington',
          'West Virginia','Wisconsin','Wyoming',
        ].map((state) => ({
          '@type': 'State',
          name: state,
          containedInPlace: { '@type': 'Country', name: 'United States' },
        })),
        medicalSpecialty: 'http://schema.org/PrimaryCare',
        isAcceptingNewPatients: true,
        availableService: {
          '@type': 'MedicalTherapy',
          name: 'Virtual Urgent Care Consultation',
          description: 'Live video consultation with a board-certified family medicine physician for acute conditions, medication refills, and wellness concerns.',
          serviceType: 'Telehealth',
        },
        sameAs: [
          'https://www.instagram.com/teledirectmd/',
          'https://www.facebook.com/teledirectmd',
          'https://www.youtube.com/@teledirectmd',
          'https://www.linkedin.com/company/teledirectmd',
          'https://www.tiktok.com/@teledirectmd',
          'https://www.google.com/maps/place/TeleDirectMD/',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '100',
          reviewCount: '100',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certification',
            name: 'LegitScript Certified',
            recognizedBy: {
              '@type': 'Organization',
              name: 'LegitScript',
              url: 'https://www.legitscript.com',
            },
          },
        ],
      },
      {
        '@type': 'Physician',
        '@id': 'https://teledirectmd.com/#physician',
        name: 'Dr. Parth Bhavsar',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'MD',
        jobTitle: 'Founder & Physician',
        description: 'Board-certified family medicine physician. Founder and sole practitioner at TeleDirectMD.',
        medicalSpecialty: 'http://schema.org/PrimaryCare',
        worksFor: { '@id': 'https://teledirectmd.com/#organization' },
        memberOf: { '@id': 'https://teledirectmd.com/#organization' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://teledirectmd.com/#website',
        url: 'https://teledirectmd.com',
        name: 'TeleDirectMD',
        description: 'Physician-led virtual urgent care — $49 flat-fee video visits with a board-certified MD.',
        publisher: { '@id': 'https://teledirectmd.com/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://teledirectmd.com/what-we-treat/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}
