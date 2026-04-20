import { notFound } from 'next/navigation';
import audienceSegments from '../../../data/audience-segments.json';
import TruckDriversPage from './TruckDriversPage';
import GigWorkersPage from './GigWorkersPage';
import UninsuredAffordableCarePage from './UninsuredAffordableCarePage';
import RemoteWorkersPage from './RemoteWorkersPage';
import TravelNursesPage from './TravelNursesPage';
import SmallBusinessOwnersPage from './SmallBusinessOwnersPage';
import InternationalVisitorsPage from './InternationalVisitorsPage';
import EarlyRetireesPage from './EarlyRetireesPage';
import CollegeStudentsPage from './CollegeStudentsPage';
import MilitaryFamiliesPage from './MilitaryFamiliesPage';

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

  switch (params.segment) {
    case 'truck-drivers':
      return <TruckDriversPage />;
    case 'gig-workers':
      return <GigWorkersPage />;
    case 'uninsured-affordable-care':
      return <UninsuredAffordableCarePage />;
    case 'remote-workers':
      return <RemoteWorkersPage />;
    case 'travel-nurses':
      return <TravelNursesPage />;
    case 'small-business-owners':
      return <SmallBusinessOwnersPage />;
    case 'international-visitors':
      return <InternationalVisitorsPage />;
    case 'early-retirees':
      return <EarlyRetireesPage />;
    case 'college-students':
      return <CollegeStudentsPage />;
    case 'military-families':
      return <MilitaryFamiliesPage />;
    default:
      notFound();
  }
}
