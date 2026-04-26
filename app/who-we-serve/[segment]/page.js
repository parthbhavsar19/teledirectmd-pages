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
import { WhoWeServePricingCTA } from '../../components/CostCompareModules';

// Audiences where cost is the primary draw get an additional relevant
// condition-cost-page link surfaced from the pricing-CTA module.
const SEGMENT_PRICING_CONFIG = {
  'truck-drivers':              { hook: 'On the road, every dollar matters. The flat $49 visit replaces $150–$280 urgent care and $2,715-average uninsured ER visits.', related: { slug: 'uti-treatment-cost', title: 'UTI Treatment Cost', tagline: 'Telehealth UTI total $50–$115 vs. urgent care $160–$320.' } },
  'gig-workers':                { hook: '1099 income, no employer health plan? A $49 flat visit beats every cash-pay alternative — and the visit is HSA/FSA eligible.', related: { slug: 'online-prescription-cost', title: 'Online Prescription Cost', tagline: '$49 visit + $4–$30 generic via GoodRx for stable refills.' } },
  'uninsured-affordable-care':  { hook: '38.6% of uninsured adults delay care due to cost (KFF). $49 flat replaces a $150–$2,715 in-person visit, with no surprise billing.', related: { slug: 'uti-treatment-cost', title: 'UTI Treatment Cost', tagline: 'Telehealth UTI total $50–$115 vs. urgent care $160–$320.' } },
  'small-business-owners':      { hook: 'Skip the $200+ in-person visit and the half-day commute. $49 flat. HSA/FSA eligible. Same-day evenings and weekends.', related: { slug: 'online-prescription-cost', title: 'Online Prescription Cost', tagline: '$49 visit + $4–$30 generic for blood pressure, cholesterol, asthma, more.' } },
  'college-students':           { hook: 'Health center closed at 5pm? $49 flat — cheaper than the average urgent care, with the antibiotic at the on-campus pharmacy by morning.', related: { slug: 'sore-throat-treatment-cost', title: 'Sore Throat Treatment Cost', tagline: 'Telehealth $50–$155 vs. urgent care $185–$345 with strep test.' } },
  'early-retirees':             { hook: 'Bridge the gap between employer coverage and Medicare with predictable $49 visits. HSA/FSA accepted; no surprise billing.', related: { slug: 'online-prescription-cost', title: 'Online Prescription Cost', tagline: '$49 visit + $4–$30 generic for stable refills (BP, cholesterol, asthma).' } },
  'remote-workers':             { hook: '$49 flat, same physician across every state on your itinerary. HSA/FSA eligible. No drive time.', related: null },
  'travel-nurses':              { hook: 'One licensed MD across 41 states — predictable $49 flat regardless of where the next assignment lands you.', related: null },
  'international-visitors':     { hook: '$49 flat (~£37, ~€42, ~CAD 67) versus $250–$350 for a US in-person cash-pay visit. Receipt suitable for travel-insurance reimbursement.', related: null },
  'military-families':          { hook: 'PCS to a new state? Same physician at $49 flat. HSA/FSA accepted; visit summary to share with your home-station provider.', related: null },
};

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

function renderSegment(slug) {
  switch (slug) {
    case 'truck-drivers':              return <TruckDriversPage />;
    case 'gig-workers':                return <GigWorkersPage />;
    case 'uninsured-affordable-care':  return <UninsuredAffordableCarePage />;
    case 'remote-workers':             return <RemoteWorkersPage />;
    case 'travel-nurses':              return <TravelNursesPage />;
    case 'small-business-owners':      return <SmallBusinessOwnersPage />;
    case 'international-visitors':     return <InternationalVisitorsPage />;
    case 'early-retirees':             return <EarlyRetireesPage />;
    case 'college-students':           return <CollegeStudentsPage />;
    case 'military-families':          return <MilitaryFamiliesPage />;
    default:                           return null;
  }
}

export default function AudienceSegmentPage({ params }) {
  const seg = audienceSegments[params.segment];
  if (!seg) {
    notFound();
  }

  const cohort = renderSegment(params.segment);
  if (!cohort) notFound();

  // Append sitewide pricing-CTA module pointing at /cost/* pages from PR 4.
  const cfg = SEGMENT_PRICING_CONFIG[params.segment] || {};

  return (
    <>
      {cohort}
      <WhoWeServePricingCTA pricingHook={cfg.hook} relatedCostPage={cfg.related} />
    </>
  );
}
