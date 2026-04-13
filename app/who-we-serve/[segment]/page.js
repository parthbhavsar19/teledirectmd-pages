import { notFound } from 'next/navigation';
import audienceSegments from '../../../data/audience-segments.json';
import TruckDriversPage from './TruckDriversPage';

/* Pre-render all audience segment pages at build time */
export function generateStaticParams() {
  return Object.keys(audienceSegments).map((slug) => ({
    segment: slug,
  }));
}

/* Dynamic metadata per segment */
export function generateMetadata({ params }) {
  const seg = audienceSegments[params.segment];
  if (!seg) return {};

  return {
    title: seg.metaTitle,
    description: seg.metaDescription,
    alternates: {
      canonical: `https://teledirectmd.com/who-we-serve/${seg.slug}`,
    },
    openGraph: {
      title: seg.metaTitle,
      description: seg.metaDescription,
      url: `https://teledirectmd.com/who-we-serve/${seg.slug}`,
      siteName: 'TeleDirectMD',
      type: 'website',
    },
  };
}

export default function AudienceSegmentPage({ params }) {
  const seg = audienceSegments[params.segment];
  if (!seg) {
    notFound();
  }

  /* Route to the correct page component */
  switch (params.segment) {
    case 'truck-drivers':
      return <TruckDriversPage />;

    /* Phase 1 placeholders — will be built next */
    case 'gig-workers':
    case 'uninsured-affordable-care':
    /* Phase 2 placeholders */
    case 'remote-workers':
    case 'travel-nurses':
    case 'small-business-owners':
      return <ComingSoonPlaceholder segment={seg} />;

    default:
      notFound();
  }
}

/* Temporary placeholder for segments not yet built */
function ComingSoonPlaceholder({ segment }) {
  const baseUrl = 'https://teledirectmd.com';

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${baseUrl}/who-we-serve` },
      { "@type": "ListItem", "position": 3, "name": segment.name, "item": `${baseUrl}/who-we-serve/${segment.slug}` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/who-we-serve">Who We Serve</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">{segment.name}</span>
        </div>
      </nav>

      <section className="tdmd-hero">
        <div className="tdmd-container">
          <h1>{segment.h1}</h1>
          <p className="tdmd-hero-sub">This page is coming soon. In the meantime, you can book a visit now.</p>
          <div className="tdmd-hero-ctas" style={{ marginTop: '1.5rem' }}>
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
            <a href="/who-we-serve" className="tdmd-btn tdmd-btn-outline">Back to Who We Serve</a>
          </div>
        </div>
      </section>
    </>
  );
}
