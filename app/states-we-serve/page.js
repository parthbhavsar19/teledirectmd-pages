import { getStates, getConditionCategories } from '../../lib/get-data';
import StatesWeServeClient from './StatesWeServeClient';

/* ── Featured states (slugs) — these get full condition cards ── */
const FEATURED_SLUGS = ['ga', 'fl', 'tx', 'ca', 'tn', 'pa', 'oh', 'nc'];

/* ── Metadata ── */
export async function generateMetadata() {
  const allStates = getStates();
  const stateCount = allStates.length;
  const title = `States We Serve — Licensed Telemedicine in 40+ States | TeleDirectMD`;
  const description = `Board-certified physicians delivering $49 video consultations to adults 18+ across 40+ U.S. states and territories. Same-day availability, no insurance required. See our full coverage map and book online.`;
  const pageUrl = 'https://teledirectmd.com/states-we-serve';

  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title,
      description,
      url: pageUrl,
      images: [{ url: 'https://teledirectmd.com/assets/og-states-we-serve.jpg', width: 1200, height: 630, alt: 'TeleDirectMD coverage map showing licensed telemedicine states' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['https://teledirectmd.com/assets/og-states-we-serve.jpg'] },
    alternates: { canonical: pageUrl },
  };
}

/* ── Build JSON-LD Structured Data ── */
function buildJsonLd(allStates, categories) {
  const stateCount = allStates.length;
  const totalConditions = categories.reduce((sum, cat) => sum + cat.conditions.length, 0);
  const baseUrl = 'https://teledirectmd.com';
  const stateNamesList = allStates.map(s => s.name).join(', ');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      /* BreadcrumbList */
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/states-we-serve#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'States We Serve', item: `${baseUrl}/states-we-serve` },
        ],
      },
      /* MedicalWebPage */
      {
        '@type': 'MedicalWebPage',
        '@id': `${baseUrl}/states-we-serve#webpage`,
        url: `${baseUrl}/states-we-serve`,
        name: `States We Serve — Licensed Telemedicine in 40+ States | TeleDirectMD`,
        description: `Licensed states directory for TeleDirectMD adult-only physician-led telemedicine video visits across 40+ U.S. states and territories.`,
        inLanguage: 'en-US',
        dateModified: new Date().toISOString().split('T')[0],
        lastReviewed: new Date().toISOString().split('T')[0],
        reviewedBy: { '@id': `${baseUrl}#physician` },
        breadcrumb: { '@id': `${baseUrl}/states-we-serve#breadcrumbs` },
        isPartOf: { '@type': 'WebSite', name: 'TeleDirectMD', url: baseUrl },
        about: { '@id': `${baseUrl}#organization` },
        publisher: { '@id': `${baseUrl}#organization` },
        specialty: ['Family Medicine', 'Urgent Care', 'Telemedicine', 'Dermatology', "Women's Health"],
        audience: { '@type': 'MedicalAudience', audienceType: 'Patient', requiredMinAge: 18 },
        significantLink: [`${baseUrl}/book-online`, `${baseUrl}/what-we-treat`, `${baseUrl}/faq`],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#tdmd-hero-title', '.tdmd-hero-sub', '.tdmd-faq-a'],
        },
      },
      /* MedicalOrganization / Physician */
      {
        '@type': 'MedicalOrganization',
        '@id': `${baseUrl}#organization`,
        name: 'TeleDirectMD',
        legalName: 'TeleDirectMD',
        url: baseUrl,
        telephone: '+1-678-956-1855',
        email: 'contact@teledirectmd.com',
        logo: `${baseUrl}/assets/teledirectmd-logo.png`,
        image: `${baseUrl}/assets/og-states-we-serve.jpg`,
        description: `TeleDirectMD is a direct-pay telemedicine practice offering $49 flat-fee video consultations with board-certified physicians across 40+ U.S. states and territories. Insurance is not required but select plans are accepted in some states.`,
        medicalSpecialty: ['Family Medicine', 'Urgent Care', 'Dermatology', "Women's Health"],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '113 S. Perry Street, Suite 206 #5077',
          addressLocality: 'Lawrenceville',
          addressRegion: 'GA',
          postalCode: '30046',
          addressCountry: 'US',
        },
        areaServed: allStates.map(s => ({ '@type': 'State', name: s.name })),
        availableService: {
          '@type': 'MedicalProcedure',
          name: 'Telemedicine Video Consultation',
          procedureType: 'Virtual healthcare consultation',
        },
        founder: { '@id': `${baseUrl}#physician` },
      },
      {
        '@type': 'Physician',
        '@id': `${baseUrl}#physician`,
        name: 'Parth Bhavsar, MD',
        medicalSpecialty: 'Family Medicine',
        memberOf: { '@id': `${baseUrl}#organization` },
      },
      /* FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/states-we-serve#faqpage`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What states does TeleDirectMD serve?',
            acceptedAnswer: { '@type': 'Answer', text: `TeleDirectMD physicians are licensed and available in 40+ U.S. states and territories, including ${stateNamesList}. We are actively expanding to additional states.` },
          },
          {
            '@type': 'Question',
            name: 'How much does a TeleDirectMD visit cost?',
            acceptedAnswer: { '@type': 'Answer', text: 'Every TeleDirectMD visit is a flat $49 — no hidden fees, no copays, no surprise charges. This includes your full video consultation with a board-certified physician and any prescriptions sent to your pharmacy if clinically appropriate. No insurance is required.' },
          },
          {
            '@type': 'Question',
            name: 'Do I need insurance to use TeleDirectMD?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. TeleDirectMD is a direct-pay telemedicine practice. You pay the flat $49 visit fee directly — no insurance filing, no copays, and no prior authorization needed.' },
          },
          {
            '@type': 'Question',
            name: 'What conditions does TeleDirectMD treat?',
            acceptedAnswer: { '@type': 'Answer', text: `TeleDirectMD treats ${totalConditions}+ conditions via video visits, including virtual urgent care (UTIs, sinus infections, influenza, COVID-19, sore throat, pink eye, ear pain), women's health (bacterial vaginosis, yeast infections), men's health, skin conditions (acne, eczema, cellulitis, shingles, cold sores), and medication refills (migraine, asthma, GERD).` },
          },
          {
            '@type': 'Question',
            name: 'How do I book a TeleDirectMD appointment?',
            acceptedAnswer: { '@type': 'Answer', text: 'Booking takes about 2 minutes. Visit teledirectmd.com/book-online, select your condition and preferred time, confirm your state of residence, and complete the $49 payment. Same-day appointments are available 7 days a week. No app download required.' },
          },
          {
            '@type': 'Question',
            name: 'Do I have to be physically located in a licensed state during my visit?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes. Per state medical licensing regulations, you must be physically present in one of TeleDirectMD's licensed states at the time of your video visit. You will be asked to confirm your current physical location during booking and again at the start of your consultation." },
          },
          {
            '@type': 'Question',
            name: 'Are TeleDirectMD doctors board-certified?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. TeleDirectMD is an MD-only practice. Every consultation is conducted by a board-certified physician — not a nurse practitioner or physician assistant. Our physicians hold active medical licenses in every state where we operate.' },
          },
          {
            '@type': 'Question',
            name: 'Can TeleDirectMD prescribe medication?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. When clinically appropriate, your physician can prescribe medications and send them electronically to the pharmacy of your choice. Prescription costs are separate from the $49 visit fee and depend on your pharmacy and medication. TeleDirectMD does not prescribe controlled substances.' },
          },
        ],
      },
      /* ItemList — all licensed states */
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/states-we-serve#statelist`,
        name: 'TeleDirectMD Licensed States',
        description: `All U.S. states where TeleDirectMD physicians are licensed to provide telemedicine video consultations.`,
        numberOfItems: stateCount,
        itemListElement: allStates.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.name,
          url: `${baseUrl}/${s.slug}`,
        })),
      },
      /* HowTo */
      {
        '@type': 'HowTo',
        name: 'How to Book a TeleDirectMD Telemedicine Visit',
        description: 'Book a $49 video consultation with a board-certified physician in under 2 minutes.',
        totalTime: 'PT2M',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '49' },
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Choose your condition', text: 'Visit teledirectmd.com/book-online and select the condition you need treated.' },
          { '@type': 'HowToStep', position: 2, name: 'Select your appointment time', text: 'Choose a same-day or future appointment slot. Available 7 days a week.' },
          { '@type': 'HowToStep', position: 3, name: 'Confirm your location and pay', text: 'Confirm you are in a licensed state and complete the flat $49 payment. No insurance needed.' },
          { '@type': 'HowToStep', position: 4, name: 'Join your video visit', text: 'Connect with your board-certified physician via secure video from your phone, tablet, or computer. No app download required.' },
        ],
      },
    ],
  };
}

/* ── Build featured state data from condition categories ── */
function buildFeaturedStates(allStates, categories) {
  const featured = [];
  for (const slug of FEATURED_SLUGS) {
    const state = allStates.find(s => s.slug === slug);
    if (!state) continue;

    /* Build categorized conditions with state-specific links */
    const cats = categories.map(cat => ({
      categoryName: cat.categoryName,
      conditions: cat.conditions.map(c => ({
        name: c.name,
        href: `/${slug}/${c.slug}`,
      })),
    })).filter(cat => cat.conditions.length > 0);

    /* Pick representative conditions for the card preview */
    const urgentCare = categories.find(c => c.categoryName === 'Urgent Care');
    const womensHealth = categories.find(c => c.categoryName === "Women's Health");
    const skinConditions = categories.find(c => c.categoryName === 'Skin Conditions');
    const refills = categories.find(c => c.categoryName === 'Chronic Medication Refills');

    const previewCategories = [];
    if (urgentCare) {
      previewCategories.push({
        label: 'Urgent Care',
        conditions: urgentCare.conditions.slice(0, 4).map(c => ({ name: c.name, href: `/${slug}/${c.slug}` })),
      });
    }
    if (womensHealth) {
      previewCategories.push({
        label: "Women's Health",
        conditions: womensHealth.conditions.slice(0, 2).map(c => ({ name: c.name, href: `/${slug}/${c.slug}` })),
      });
    }
    if (skinConditions || refills) {
      const src = skinConditions || refills;
      previewCategories.push({
        label: skinConditions ? 'Skin & Other' : 'Refills',
        conditions: (src).conditions.slice(0, 2).map(c => ({ name: c.name, href: `/${slug}/${c.slug}` })),
      });
    }

    /* All conditions flat list for the expandable section */
    const allConditions = categories.flatMap(cat =>
      cat.conditions.map(c => ({ name: c.name, href: `/${slug}/${c.slug}` }))
    );

    featured.push({
      name: state.name,
      abbr: state.abbr,
      slug: state.slug,
      previewCategories,
      allConditions,
    });
  }
  return featured;
}

/* ── Page Component ── */
export default function StatesWeServePage() {
  const allStates = getStates();
  const categories = getConditionCategories();
  const stateCount = allStates.length;
  const totalConditions = categories.reduce((sum, cat) => sum + cat.conditions.length, 0);
  const jsonLd = buildJsonLd(allStates, categories);
  const featuredStates = buildFeaturedStates(allStates, categories);
  const directoryStates = allStates.filter(s => !FEATURED_SLUGS.includes(s.slug));
  const stateNamesList = allStates.map(s => s.name).join(', ');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StatesWeServeClient
        allStates={allStates}
        stateCount={stateCount}
        totalConditions={totalConditions}
        featuredStates={featuredStates}
        directoryStates={directoryStates}
        stateNamesList={stateNamesList}
      />
    </>
  );
}
