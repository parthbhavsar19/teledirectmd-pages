import { getStates, getStateBySlug, getConditionCategories, getConditionSlugs, getCondition, resolveConditionNational } from '../../lib/get-data';
import { generateNationalJsonLd } from '../../lib/json-ld-national';
import StateLandingPage from './StateLandingPage';
import NationalConditionPage from './NationalConditionPage';

export async function generateStaticParams() {
  const states = getStates();
  const conditionSlugs = getConditionSlugs();
  const stateParams = states.map((s) => ({ slug: s.slug }));
  const conditionParams = conditionSlugs.map((s) => ({ slug: s }));
  return [...stateParams, ...conditionParams];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = 'https://teledirectmd.com';

  /* Check if this is a state slug */
  const state = getStateBySlug(slug);
  if (state) {
    const title = `Online Doctor in ${state.name} — TeleDirectMD Telehealth Visits`;
    const description = `See an MD-only doctor online in ${state.name}. TeleDirectMD offers same-day video visits for urgent care, chronic medication refills, skin conditions, and more — starting at $49 with no insurance required.`;
    const pageUrl = `${baseUrl}/${slug}`;
    return {
      title,
      description,
      robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
      authors: [{ name: 'Parth Bhavsar, MD' }],
      openGraph: { type: 'website', siteName: 'TeleDirectMD', locale: 'en_US', title, description, url: pageUrl, images: [{ url: `${baseUrl}/assets/social/tdmd-${slug}-og.png`, alt: `TeleDirectMD telehealth in ${state.name}` }] },
      twitter: { card: 'summary_large_image', title, description, images: [`${baseUrl}/assets/social/tdmd-${slug}-og.png`] },
      alternates: { canonical: pageUrl },
    };
  }

  /* Otherwise it's a national condition slug */
  const rawCondition = getCondition(slug);
  const condition = resolveConditionNational(rawCondition);
  const pageUrl = `${baseUrl}/${slug}`;
  const nationalTitle = `${condition.conditionName} Online | MD Video Visit | TeleDirectMD`;
  const nationalDesc = condition.metaDescription
    .replace(/for the United States adults/g, 'for adults nationwide')
    .replace(/for adults in the United States/g, 'for adults nationwide')
    .replace(/the United States adults/g, 'adults nationwide');

  return {
    title: nationalTitle,
    description: nationalDesc,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: { type: 'website', siteName: 'TeleDirectMD', locale: 'en_US', title: nationalTitle, description: nationalDesc, url: pageUrl, images: [{ url: `${baseUrl}/assets/social/tdmd-${slug}-og.png`, alt: `${condition.conditionName} treatment by TeleDirectMD` }] },
    twitter: { card: 'summary_large_image', title: nationalTitle, description: nationalDesc, images: [`${baseUrl}/assets/social/tdmd-${slug}-og.png`] },
    alternates: { canonical: pageUrl },
  };
}

export default async function UnifiedSlugPage({ params }) {
  const { slug } = await params;

  /* If it's a state slug, render the state landing page */
  const state = getStateBySlug(slug);
  if (state) {
    return <StateLandingPage stateSlug={slug} />;
  }

  /* Otherwise, render the national condition page */
  return <NationalConditionPage conditionSlug={slug} />;
}
