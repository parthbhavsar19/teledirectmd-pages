import { getStates, getConditionSlugs, getCondition, getStateBySlug, resolveConditionForState, resolveConditionNational } from '../../../lib/get-data';
import { generateJsonLd } from '../../../lib/json-ld';
import { getStateInsurance, getActiveInsurers, getPendingInsurers, hasInlineInsuranceSection } from '../../../lib/insurance-data';
import { getInsuranceLinksForConditionState } from '../../../lib/internal-links';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';
import { CitableSummaryBlock } from '../../components/CitableSummary';
import FaqAccordion from '../../components/FaqAccordion';
import { FlCredentialBlock, FlFooterCompliance } from '../../components/FlCompliance';
import CaUtiTreatmentOnline from './CaUtiTreatmentOnline';
import CaYeastInfectionTreatmentOnline from './CaYeastInfectionTreatmentOnline';
import CaBvTreatmentOnline from './CaBvTreatmentOnline';
import CaBirthControlRefillsOnline from './CaBirthControlRefillsOnline';
import CaChlamydiaTreatmentOnline from './CaChlamydiaTreatmentOnline';
import CaColdSoreTreatmentOnline from './CaColdSoreTreatmentOnline';
import CaCommonColdTreatmentOnline from './CaCommonColdTreatmentOnline';
import CaInfluenzaTreatmentOnline from './CaInfluenzaTreatmentOnline';
import CaSinusInfectionTreatmentOnline from './CaSinusInfectionTreatmentOnline';
import CaSoreThroatTreatmentOnline from './CaSoreThroatTreatmentOnline';
import CaEarPainTreatmentOnline from './CaEarPainTreatmentOnline';
import CaPinkEyeTreatmentOnline from './CaPinkEyeTreatmentOnline';
import CaAsthmaRefillsOnline from './CaAsthmaRefillsOnline';
import CaHypertensionRefillsOnline from './CaHypertensionRefillsOnline';
import CaHypothyroidismRefillsOnline from './CaHypothyroidismRefillsOnline';
import CaHyperlipidemiaRefillsOnline from './CaHyperlipidemiaRefillsOnline';
import CaDiabetesRefillsOnline from './CaDiabetesRefillsOnline';
import CaSeasonalAllergiesTreatmentOnline from './CaSeasonalAllergiesTreatmentOnline';
// 2026-05-20: wire acne + eczema for today's 20-page drip (other batch-3 derm pages
// remain off the router until their drip day to avoid burst-publish signal).
import CaAcneTreatmentOnline from './CaAcneTreatmentOnline';
import CaEczemaTreatmentOnline from './CaEczemaTreatmentOnline';

// ── Drip 3 (2026-05-25) FINAL — completes CA cohort 59/59 (dermatology + bites + refills + cosmetic) ──
import CaAcidRefluxRefillsOnline from './CaAcidRefluxRefillsOnline';
import CaAntiAgingTreatmentOnline from './CaAntiAgingTreatmentOnline';
import CaCatBiteTreatmentOnline from './CaCatBiteTreatmentOnline';
import CaDogBiteTreatmentOnline from './CaDogBiteTreatmentOnline';
import CaEpipenRefillsOnline from './CaEpipenRefillsOnline';
import CaExcessiveSweatingTreatmentOnline from './CaExcessiveSweatingTreatmentOnline';
import CaEyelashGrowthTreatmentOnline from './CaEyelashGrowthTreatmentOnline';
import CaHairLossTreatmentOnline from './CaHairLossTreatmentOnline';
import CaHeadLiceTreatmentOnline from './CaHeadLiceTreatmentOnline';
import CaMelasmaTreatmentOnline from './CaMelasmaTreatmentOnline';
import CaMigraineRefillsOnline from './CaMigraineRefillsOnline';
import CaMotionSicknessTreatmentOnline from './CaMotionSicknessTreatmentOnline';
import CaPerioralDermatitisTreatmentOnline from './CaPerioralDermatitisTreatmentOnline';
import CaPoisonIvyOakTreatmentOnline from './CaPoisonIvyOakTreatmentOnline';
import CaScabiesTreatmentOnline from './CaScabiesTreatmentOnline';
import CaSmokingCessationTreatmentOnline from './CaSmokingCessationTreatmentOnline';
import CaTickBiteTreatmentOnline from './CaTickBiteTreatmentOnline';
import CaTineaTreatmentOnline from './CaTineaTreatmentOnline';
import CaTineaVersicolorTreatmentOnline from './CaTineaVersicolorTreatmentOnline';

// ── Drip 2 (2026-05-22): batch 2 women's/sexual + batch 3 derm + batch 1 acute ──
import CaCellulitisTreatmentOnline from './CaCellulitisTreatmentOnline';
import CaContactDermatitisTreatmentOnline from './CaContactDermatitisTreatmentOnline';
import CaDandruffTreatmentOnline from './CaDandruffTreatmentOnline';
import CaDentalPainTreatmentOnline from './CaDentalPainTreatmentOnline';
import CaDoxypepStiPreventionOnline from './CaDoxypepStiPreventionOnline';
import CaErectileDysfunctionTreatmentOnline from './CaErectileDysfunctionTreatmentOnline';
import CaGenitalHerpesTreatmentOnline from './CaGenitalHerpesTreatmentOnline';
import CaGenitalWartsTreatmentOnline from './CaGenitalWartsTreatmentOnline';
import CaGoutTreatmentOnline from './CaGoutTreatmentOnline';
import CaImpetigoTreatmentOnline from './CaImpetigoTreatmentOnline';
import CaMastitisTreatmentOnline from './CaMastitisTreatmentOnline';
import CaMycoplasmaGenitaliumTreatmentOnline from './CaMycoplasmaGenitaliumTreatmentOnline';
import CaOralThrushTreatmentOnline from './CaOralThrushTreatmentOnline';
import CaPerformanceAnxietyTreatmentOnline from './CaPerformanceAnxietyTreatmentOnline';
import CaPsoriasisRefillsOnline from './CaPsoriasisRefillsOnline';
import CaRosaceaTreatmentOnline from './CaRosaceaTreatmentOnline';
import CaShinglesTreatmentOnline from './CaShinglesTreatmentOnline';
import CaTrichomoniasisTreatmentOnline from './CaTrichomoniasisTreatmentOnline';
import CaVaginalDrynessTreatmentOnline from './CaVaginalDrynessTreatmentOnline';
import CaViralGastroenteritisTreatmentOnline from './CaViralGastroenteritisTreatmentOnline';
// ── VT pilot cohort — 10 conditions total, cash-pay only, new state launch ──
// First 6 shipped 2026-06-04. Held 4 (PinkEye/Shingles/SinusInfection/SoreThroat)
// rewritten with deeper VT differentiation (Lyme/tick + maple-sugaring + Centor
// criteria + outdoor-rec triggers) and shipped same day to clear 50% Jaccard.
import VtUtiTreatmentOnline from './VtUtiTreatmentOnline';
import VtYeastInfectionTreatmentOnline from './VtYeastInfectionTreatmentOnline';
import VtBvTreatmentOnline from './VtBvTreatmentOnline';
import VtColdSoreTreatmentOnline from './VtColdSoreTreatmentOnline';
import VtSeasonalAllergiesTreatmentOnline from './VtSeasonalAllergiesTreatmentOnline';
import VtHypertensionRefillsOnline from './VtHypertensionRefillsOnline';
import VtPinkEyeTreatmentOnline from './VtPinkEyeTreatmentOnline';
import VtShinglesTreatmentOnline from './VtShinglesTreatmentOnline';
import VtSinusInfectionTreatmentOnline from './VtSinusInfectionTreatmentOnline';
import VtSoreThroatTreatmentOnline from './VtSoreThroatTreatmentOnline';
import VtTickBiteTreatmentOnline from './VtTickBiteTreatmentOnline'; // Pilot 2 marquee (2026-06-04) — deep-content Lyme/tick-bite page
// VT Pilot 2 remaining 9 (2026-06-08) — same cash-pay pattern, 3 accuracy flags applied:
// 2026 ACC/AHA guideline on hyperlipidemia, no false EEE Chittenden case, DoxyPEP MSM/TGW scope.
import VtInfluenzaTreatmentOnline from './VtInfluenzaTreatmentOnline';
import VtCommonColdTreatmentOnline from './VtCommonColdTreatmentOnline';
import VtEarPainTreatmentOnline from './VtEarPainTreatmentOnline';
import VtHyperlipidemiaRefillsOnline from './VtHyperlipidemiaRefillsOnline';
import VtHypothyroidismRefillsOnline from './VtHypothyroidismRefillsOnline';
import VtChlamydiaTreatmentOnline from './VtChlamydiaTreatmentOnline';
import VtDoxypepStiPreventionOnline from './VtDoxypepStiPreventionOnline';
import VtAcneTreatmentOnline from './VtAcneTreatmentOnline';
import VtCellulitisTreatmentOnline from './VtCellulitisTreatmentOnline';
import { summarizeConditionState, citableSummaryToJsonLd } from '../../../lib/citable-summary';
// ── 2026-06-10 Phase 2: per-state JSON template architecture ──
// loadStateTemplate(slug) returns null when no template exists for that state,
// causing all `stateTpl && (...)` guards below to render NOTHING — pages fall
// back to current generic behavior. See data/state-templates/_schema.md.
import { loadStateTemplate, getConditionOverride, mergeFaqs } from '../../../lib/state-template';

// VT pilot cohort (2026-06-04): restrict /vt/ static generation to the 10 hand-crafted
// condition pages — the other ~50 slugs are not staged and must NOT fall through to the
// generic template (would emit scaled templated content, the April 2026 deindex trap).
const VT_PILOT_CONDITIONS = new Set([
  // ── VT Pilot 1 (2026-06-04) ──
  'uti-treatment-online',
  'yeast-infection-treatment-online',
  'bv-treatment-online',
  'cold-sore-treatment-online',
  'seasonal-allergies-treatment-online',
  'hypertension-refills-online',
  'pink-eye-treatment-online',
  'shingles-treatment-online',
  'sinus-infection-treatment-online',
  'sore-throat-treatment-online',
  // ── VT Pilot 2 marquee (2026-06-04) ──
  'tick-bite-treatment-online',
  // ── VT Pilot 2 remaining 9 (2026-06-08) ──
  'influenza-treatment-online',
  'common-cold-treatment-online',
  'ear-pain-treatment-online',
  'hyperlipidemia-refills-online',
  'hypothyroidism-refills-online',
  'chlamydia-treatment-online',
  'doxypep-sti-prevention-online',
  'acne-treatment-online',
  'cellulitis-treatment-online',
]);

export async function generateStaticParams() {
  const states = getStates();
  const conditionSlugs = getConditionSlugs();
  const params = [];
  for (const state of states) {
    for (const cSlug of conditionSlugs) {
      // VT: only generate the 6 pilot condition pages
      if (state.slug === 'vt' && !VT_PILOT_CONDITIONS.has(cSlug)) continue;
      params.push({ slug: state.slug, conditionSlug: cSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, conditionSlug } = await params;
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${slug}/${conditionSlug}`;

  // ── v2 CA UTI override: hand-tuned title/description that incorporates
  //    California-specific regulatory + payor signals (Aetna, UHC).
  if (slug === 'ca' && conditionSlug === 'uti-treatment-online') {
    const caTitle = 'UTI Treatment Online in California | TeleDirectMD';
    const caDescription = 'California adults: get UTI treatment by secure video visit. Board-certified Family Medicine MD, Aetna in-network (effective 2026-04-30), UHC Commercial approved (effective 2026-05-29). CA telehealth law compliant. Self pay $79. Antibiotic stewardship, e-prescriptions to CA pharmacies.';
    return {
      title: caTitle,
      description: caDescription,
      robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
      authors: [{ name: 'Parth Bhavsar, MD' }],
      openGraph: {
        type: 'website', siteName: 'TeleDirectMD', locale: 'en_US',
        title: caTitle, description: caDescription, url: pageUrl,
        images: [{ url: `${baseUrl}/assets/social/tdmd-ca-uti-treatment-online-og.png`, alt: 'UTI treatment in California by TeleDirectMD' }],
      },
      twitter: { card: 'summary_large_image', title: caTitle, description: caDescription, images: [`${baseUrl}/assets/social/tdmd-ca-uti-treatment-online-og.png`] },
      alternates: { canonical: pageUrl },
    };
  }

  // NATIONAL-ONLY conditions (2026-06-14): travel-medicine and altitude-sickness have a single
  // canonical national page and no per-state clinical differentiation. State-prefixed variants
  // still render for direct/legacy links, but are marked noindex with a canonical to the national
  // page so they can never enter Google's index as near-duplicates (May 2026 deindex guard).
  const NATIONAL_ONLY_CONDITIONS = new Set([
    'travel-medicine-treatment-online',
    'altitude-sickness-treatment-online',
  ]);
  if (NATIONAL_ONLY_CONDITIONS.has(conditionSlug)) {
    const nationalUrl = `${baseUrl}/${conditionSlug}`;
    const rawC = getCondition(conditionSlug);
    const cNat = resolveConditionNational(rawC);
    return {
      title: cNat.pageTitle,
      description: cNat.metaDescription,
      robots: { index: false, follow: true },
      authors: [{ name: 'Parth Bhavsar, MD' }],
      alternates: { canonical: nationalUrl },
    };
  }

  const state = getStateBySlug(slug);
  const rawCondition = getCondition(conditionSlug);
  const condition = resolveConditionForState(rawCondition, state);

  // FL: A3 verify-link placement 3 of 3 — <link rel="related"> in <head>.
  // Statutory requirement under Fla. Stat. § 456.47(4)(c). Approved 2026-06-07.
  const flVerifyLink = state && state.abbr === 'FL'
    ? [{ rel: 'related', href: 'https://flhealthsource.gov/telehealth/', title: 'Florida Department of Health — Telehealth Provider Registry' }]
    : undefined;

  return {
    title: condition.pageTitle,
    description: condition.metaDescription,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: condition.pageTitle,
      description: condition.metaDescription,
      url: pageUrl,
      images: [{ url: `${baseUrl}/assets/social/tdmd-${slug}-${conditionSlug}-og.png`, alt: condition.ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: condition.pageTitle,
      description: condition.metaDescription,
      images: [`${baseUrl}/assets/social/tdmd-${slug}-${conditionSlug}-og.png`],
    },
    alternates: {
      canonical: pageUrl,
      ...(flVerifyLink ? { types: { 'application/x-fl-telehealth-registry': flVerifyLink[0].href } } : {}),
    },
    ...(flVerifyLink ? { other: { 'fl-telehealth-registry': flVerifyLink[0].href } } : {}),
  };
}

export default async function ConditionPage({ params }) {
  const { slug, conditionSlug } = await params;

  // ── v3 Special cases: California × Condition hand-built production pages ──
  // Each renders at its canonical URL — no redirect.
  if (slug === 'ca' && conditionSlug === 'uti-treatment-online') {
    return <CaUtiTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'yeast-infection-treatment-online') {
    return <CaYeastInfectionTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'bv-treatment-online') {
    return <CaBvTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'birth-control-refills-online') {
    return <CaBirthControlRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'chlamydia-treatment-online') {
    return <CaChlamydiaTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'cold-sore-treatment-online') {
    return <CaColdSoreTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'common-cold-treatment-online') {
    return <CaCommonColdTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'influenza-treatment-online') {
    return <CaInfluenzaTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'sinus-infection-treatment-online') {
    return <CaSinusInfectionTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'sore-throat-treatment-online') {
    return <CaSoreThroatTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'ear-pain-treatment-online') {
    return <CaEarPainTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'pink-eye-treatment-online') {
    return <CaPinkEyeTreatmentOnline />;
  }
  // ── Batch 3 derm — wired progressively, drip-by-drip (2026-05-20: acne + eczema only) ──
  if (slug === 'ca' && conditionSlug === 'acne-treatment-online') {
    return <CaAcneTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'eczema-treatment-online') {
    return <CaEczemaTreatmentOnline />;
  }
  // ── Batch 4 — CA chronic refills + other conditions ──
  if (slug === 'ca' && conditionSlug === 'asthma-refills-online') {
    return <CaAsthmaRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'hypertension-refills-online') {
    return <CaHypertensionRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'hypothyroidism-refills-online') {
    return <CaHypothyroidismRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'hyperlipidemia-refills-online') {
    return <CaHyperlipidemiaRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'diabetes-refills-online') {
    return <CaDiabetesRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'seasonal-allergies-treatment-online') {
    return <CaSeasonalAllergiesTreatmentOnline />;
  }

  // ── Drip 2 (2026-05-22): 20 CA condition pages — batch 2 women's/sexual + batch 3 derm + batch 1 acute ──
  if (slug === 'ca' && conditionSlug === 'cellulitis-treatment-online') {
    return <CaCellulitisTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'contact-dermatitis-treatment-online') {
    return <CaContactDermatitisTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'dandruff-treatment-online') {
    return <CaDandruffTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'dental-pain-treatment-online') {
    return <CaDentalPainTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'doxypep-sti-prevention-online') {
    return <CaDoxypepStiPreventionOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'erectile-dysfunction-treatment-online') {
    return <CaErectileDysfunctionTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'genital-herpes-treatment-online') {
    return <CaGenitalHerpesTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'genital-warts-treatment-online') {
    return <CaGenitalWartsTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'gout-treatment-online') {
    return <CaGoutTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'impetigo-treatment-online') {
    return <CaImpetigoTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'mastitis-treatment-online') {
    return <CaMastitisTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'mycoplasma-genitalium-treatment-online') {
    return <CaMycoplasmaGenitaliumTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'oral-thrush-treatment-online') {
    return <CaOralThrushTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'performance-anxiety-treatment-online') {
    return <CaPerformanceAnxietyTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'psoriasis-refills-online') {
    return <CaPsoriasisRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'rosacea-treatment-online') {
    return <CaRosaceaTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'shingles-treatment-online') {
    return <CaShinglesTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'trichomoniasis-treatment-online') {
    return <CaTrichomoniasisTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'vaginal-dryness-treatment-online') {
    return <CaVaginalDrynessTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'viral-gastroenteritis-treatment-online') {
    return <CaViralGastroenteritisTreatmentOnline />;
  }

  // ── Drip 3 (2026-05-25) FINAL: 19 CA condition pages — completes cohort 59/59 ──
  if (slug === 'ca' && conditionSlug === 'acid-reflux-refills-online') {
    return <CaAcidRefluxRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'anti-aging-treatment-online') {
    return <CaAntiAgingTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'cat-bite-treatment-online') {
    return <CaCatBiteTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'dog-bite-treatment-online') {
    return <CaDogBiteTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'epipen-refills-online') {
    return <CaEpipenRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'excessive-sweating-treatment-online') {
    return <CaExcessiveSweatingTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'eyelash-growth-treatment-online') {
    return <CaEyelashGrowthTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'hair-loss-treatment-online') {
    return <CaHairLossTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'head-lice-treatment-online') {
    return <CaHeadLiceTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'melasma-treatment-online') {
    return <CaMelasmaTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'migraine-refills-online') {
    return <CaMigraineRefillsOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'motion-sickness-treatment-online') {
    return <CaMotionSicknessTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'perioral-dermatitis-treatment-online') {
    return <CaPerioralDermatitisTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'poison-ivy-oak-treatment-online') {
    return <CaPoisonIvyOakTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'scabies-treatment-online') {
    return <CaScabiesTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'smoking-cessation-treatment-online') {
    return <CaSmokingCessationTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'tick-bite-treatment-online') {
    return <CaTickBiteTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'tinea-treatment-online') {
    return <CaTineaTreatmentOnline />;
  }
  if (slug === 'ca' && conditionSlug === 'tinea-versicolor-treatment-online') {
    return <CaTineaVersicolorTreatmentOnline />;
  }

  // ── VT pilot cohort (2026-06-04) ──
  if (slug === 'vt' && conditionSlug === 'uti-treatment-online') {
    return <VtUtiTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'yeast-infection-treatment-online') {
    return <VtYeastInfectionTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'bv-treatment-online') {
    return <VtBvTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'cold-sore-treatment-online') {
    return <VtColdSoreTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'seasonal-allergies-treatment-online') {
    return <VtSeasonalAllergiesTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'hypertension-refills-online') {
    return <VtHypertensionRefillsOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'pink-eye-treatment-online') {
    return <VtPinkEyeTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'shingles-treatment-online') {
    return <VtShinglesTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'sinus-infection-treatment-online') {
    return <VtSinusInfectionTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'sore-throat-treatment-online') {
    return <VtSoreThroatTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'tick-bite-treatment-online') {
    return <VtTickBiteTreatmentOnline />;
  }
  // ── VT Pilot 2 remaining 9 (2026-06-08) ──
  if (slug === 'vt' && conditionSlug === 'influenza-treatment-online') {
    return <VtInfluenzaTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'common-cold-treatment-online') {
    return <VtCommonColdTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'ear-pain-treatment-online') {
    return <VtEarPainTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'hyperlipidemia-refills-online') {
    return <VtHyperlipidemiaRefillsOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'hypothyroidism-refills-online') {
    return <VtHypothyroidismRefillsOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'chlamydia-treatment-online') {
    return <VtChlamydiaTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'doxypep-sti-prevention-online') {
    return <VtDoxypepStiPreventionOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'acne-treatment-online') {
    return <VtAcneTreatmentOnline />;
  }
  if (slug === 'vt' && conditionSlug === 'cellulitis-treatment-online') {
    return <VtCellulitisTreatmentOnline />;
  }

  const state = getStateBySlug(slug);
  const rawCondition = getCondition(conditionSlug);
  const condition = resolveConditionForState(rawCondition, state);
  // Attach the slug so downstream helpers (e.g. citable-summary fallback)
  // can derive a clean condition name without re-reading the URL params.
  if (condition && !condition.slug) condition.slug = conditionSlug;
  const baseUrl = 'https://teledirectmd.com';
  // 2026-06-10: load state-template first so generateJsonLd can pick up its FAQs
  // and Physician credential. When stateTpl is null, JSON-LD output is unchanged.
  const _earlyStateTpl = loadStateTemplate(slug);
  const jsonLd = generateJsonLd(condition, state, _earlyStateTpl);
  const today = new Date().toISOString().split('T')[0];
  const pid = `${slug}-${conditionSlug}`;
  const allStates = getStates();
  const otherStates = allStates.filter((s) => s.slug !== slug);
  // Build insurance cross-links for this condition × state combo
  const insuranceLinks = state && state.abbr ? getInsuranceLinksForConditionState(conditionSlug, state.abbr) : [];
  // ── Inline insurance sections (hybrid consolidation pattern, approved 2026-05-28) ──
  // For states with a TDMD-active payer roster, render H3-anchored sections per insurer
  // + FAQPage Q&A pairs + MedicalBusiness.acceptedInsurance JSON-LD nested below.
  // Cash-pay-only states (VT) are intentionally absent from insuranceByState — no section renders.
  // Closed/declined contracts (e.g. Cigna TX as of 2026-05-29) are NEVER listed — FTC NextMed compliance gate.
  //
  // ROLLOUT GATE (2026-06-05): TX-only first push. Other 12 states with insuranceByState entries
  // (AZ/CO/FL/GA/IL/MI/MN/NC/NJ/OH/PA/TN/WA) are gated OFF until explicitly enabled per-state.
  // FL/PA/GA will be enabled here when their cohort research drips ship (FL Mon 6/8, PA 6/15, GA 6/22).
  // The other 9 states stay gated off pending per-state payer verification.
  const INLINE_INSURANCE_ENABLED_STATES = new Set(['TX', 'FL']);
  const insuranceGateOpen = state && state.abbr && INLINE_INSURANCE_ENABLED_STATES.has(state.abbr);
  const activeInsurers = insuranceGateOpen ? getActiveInsurers(state.abbr) : [];
  const pendingInsurers = insuranceGateOpen ? getPendingInsurers(state.abbr) : [];
  const renderInlineInsurance = insuranceGateOpen && hasInlineInsuranceSection(state.abbr);

  // ── Citable summary for AI extractors (Condition × State)
  const citableSummary_AI = summarizeConditionState({ state, condition });
  const pageUrl_AI = `https://teledirectmd.com/${slug}/${conditionSlug}`;
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI });

  // ── 2026-06-10 Phase 2: state-template (null when no template exists yet) ──
  // (reuses _earlyStateTpl loaded above via cache; safe to call twice)
  const stateTpl = _earlyStateTpl;
  const stateConditionOverride = getConditionOverride(stateTpl, conditionSlug);
  // Merge state FAQs into condition FAQ items. When stateTpl is null, this is
  // a no-op pass-through, so JSON-LD generation upstream isn't affected.
  const enrichedFaqItems = mergeFaqs(condition.faq && condition.faq.items, stateTpl);


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix={`${slug}-${conditionSlug}`} />

      {/* INJECT 1: State opener paragraph (replaces generic intro on stated states) */}
      {stateTpl && stateTpl.stateHero && stateTpl.stateHero.openingParagraph && (
        <div className="tdmd-state-opener" data-speakable="true" style={{
          background: '#FAFCFD', borderLeft: '4px solid #006B73',
          padding: '1rem 1.25rem', margin: '0', lineHeight: 1.65
        }}>
          <div className="tdmd-container">
            <p style={{ margin: 0, color: '#0A2438', fontSize: '0.98rem' }}>
              {stateTpl.stateHero.openingParagraph}
            </p>
          </div>
        </div>
      )}

      {/* 0) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/what-we-treat">What We Treat</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href={`/${slug}/`}>{state.name}</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">{condition.conditionName}</span>
        </div>
      </nav>

      {/* 0b) Answer Block — AI snippet target */}
      <div className="tdmd-answer-block" data-speakable="true" style={{
        background: '#EAF7F8', borderLeft: '4px solid #006B73',
        padding: '1rem 1.25rem', margin: '0 0 0', lineHeight: 1.6
      }}>
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>
            {condition.hero.h1.replace(/\bin\b.*/, '').trim()} via telehealth in {state.name}:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD offers same-day video visits with a board-certified MD for {condition.conditionName.toLowerCase()} in {state.name}, starting at $79. A physician evaluates your symptoms, confirms the diagnosis, and sends a prescription to your local pharmacy — no waiting room required.
          </p>
        </div>
      </div>

      {/* 1) Hero */}
      <section className="tdmd-hero" id={`${pid}-hero`}>
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1 data-speakable="true">{condition.hero.h1}</h1>
              <p className="tdmd-hero-sub" data-speakable="true">{condition.hero.subtitle}</p>
              <p>{condition.hero.introParagraph}</p>

              <p className="tdmd-toc-intro"><strong>Quick navigation:</strong></p>
              <ul className="tdmd-toc">
                {condition.hero.tocLinks.map((link) => (
                  <li key={link.href}>
                    <a href={`#${pid}-${link.href}`}>{link.label}</a>
                  </li>
                ))}
              </ul>

              <ul className="tdmd-hero-benefits">
                {condition.hero.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href={`/${slug}`} className="tdmd-btn tdmd-btn-outline">Explore {state.name} Pages</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>

              <p className="tdmd-reviewed">
                Last reviewed on {today} by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">
                  Parth Bhavsar, MD
                </a>
              </p>
              {/* FL: Clause A1 (credential disclosure) + A3 (verify-link — placement 1 of 3).
                  Required by Fla. Stat. § 456.47(4)(c). Approved 2026-06-07. */}
              {state.abbr === 'FL' && <FlCredentialBlock />}
              <p className="tdmd-icd">
                <strong>ICD-10 commonly used:</strong> {condition.hero.icd10Display}
              </p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>{condition.hero.sideCard.h2}</h2>
                <ul>
                  {condition.hero.sideCard.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <p className="tdmd-hero-note">{condition.hero.sideCard.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Eligibility Checklist */}
      <section className="tdmd-section" id={`${pid}-eligibility-checklist`}>
        <div className="tdmd-container">
          <h2>{condition.eligibility.sectionTitle}</h2>
          <p><strong>{condition.eligibility.introText}</strong></p>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>✓ You Are Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {condition.eligibility.eligible.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-card tdmd-card-alert">
              <h3>✗ You Are Not Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {condition.eligibility.notEligible.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="tdmd-card-disclaimer">
                <strong>{condition.eligibility.notEligibleDisclaimer}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) How It Works */}
      <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
        <div className="tdmd-container">
          <h2 itemProp="name">{condition.howItWorks.sectionTitle}</h2>

          <div className="tdmd-decision-flow">
            {condition.howItWorks.steps.map((step, i) => (
              <div key={i} className={`tdmd-decision-step tdmd-decision-step-${step.type}`}>
                <div className="tdmd-decision-number">{i + 1}</div>
                <div className="tdmd-decision-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.showCta && (
                    <div className="tdmd-decision-cta">
                      <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) State Telehealth Regulations */}
      <section className="tdmd-section" id={`${pid}-telehealth-regulations`}>
        <div className="tdmd-container">
          <h2>{condition.telehealthRegulations.sectionTitle}</h2>
          {condition.telehealthRegulations.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 5) Comparison Table */}
      <section className="tdmd-section" id={`${pid}-comparison`}>
        <div className="tdmd-container">
          <h2>{condition.comparisonTable.sectionTitle}</h2>
          <p>{condition.comparisonTable.intro}</p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Care option</th>
                  <th>Typical cost</th>
                  <th>Wait time</th>
                  <th>Provider type</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                {condition.comparisonTable.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.highlight ? <strong>{row.option}</strong> : row.option}</td>
                    <td>{row.highlight ? <strong>{row.cost}</strong> : row.cost}</td>
                    <td>{row.wait}</td>
                    <td>{row.provider}</td>
                    <td>{row.highlight ? row.bestFor : (row.bestFor.includes('Severe') || row.bestFor.includes('severe') ? <strong>{row.bestFor}</strong> : row.bestFor)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="tdmd-comparison-note">
            <strong>Bottom line:</strong> {condition.comparisonTable.bottomLine}
          </p>
        </div>
      </section>

      {/* 6) Decision Guide */}
      <section className="tdmd-section" id={`${pid}-decision-guide`}>
        <div className="tdmd-container">
          <h2>{condition.decisionGuide.sectionTitle}</h2>

          <div className="tdmd-decision-flow">
            {condition.decisionGuide.steps.map((step, i) => (
              <div key={i} className={`tdmd-decision-step tdmd-decision-step-${step.type}`}>
                <div className="tdmd-decision-number">{i + 1}</div>
                <div className="tdmd-decision-content">
                  <h3>{step.title}</h3>
                  {step.items && step.items.length > 0 && (
                    <ul>
                      {step.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {step.description && <p>{step.description}</p>}
                  {step.yesAction && (
                    <p className="tdmd-decision-action"><strong>{step.yesAction}</strong></p>
                  )}
                  {step.noAction && (
                    <p className="tdmd-decision-action"><strong>{step.noAction}</strong></p>
                  )}
                  {step.showCta && (
                    <div className="tdmd-decision-cta">
                      <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Cost Breakdown */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
        <div className="tdmd-container">
          <h2>{condition.pricing.sectionTitle}</h2>
          <p>{condition.pricing.subtitle}</p>

          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">{condition.pricing.visitPrice}</p>
              <p className="tdmd-price-sub">{condition.pricing.priceSubtext}</p>
              <ul className="tdmd-price-includes">
                {condition.pricing.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison chart">
              <h3>Typical Cost Comparison</h3>
              <p className="tdmd-price-caption">Common ranges people see before insurance. Actual costs vary.</p>

              {condition.pricing.comparisonBars.map((bar, i) => (
                <div key={i} className="tdmd-bar-row" role="list">
                  <div className="tdmd-bar-label" role="listitem">
                    <span className="tdmd-bar-name">{bar.name}</span>
                    <span className="tdmd-bar-value">{bar.value}</span>
                  </div>
                  <div className="tdmd-bar-track" aria-hidden="true">
                    <div
                      className={`tdmd-bar-fill${bar.isTdmd ? ' tdmd-bar-fill-tdmd' : ''}`}
                      style={{ '--w': bar.width }}
                    />
                  </div>
                </div>
              ))}

              <p className="tdmd-price-footnote">{condition.pricing.footnote}</p>
            </div>
          </div>

          <p className="tdmd-cost-note">{condition.pricing.noHiddenFees}</p>
        </div>
      </section>

      {/* 8) What Is Condition */}
      <section className="tdmd-section" id={`${pid}-what-is`}>
        <div className="tdmd-container">
          <h2>{condition.whatIsCondition.sectionTitle}</h2>
          {condition.whatIsCondition.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 9) Causes and Risk Factors */}
      <section className="tdmd-section" id={`${pid}-causes-risk-factors`}>
        <div className="tdmd-container">
          <h2>{condition.causesAndRiskFactors.sectionTitle}</h2>
          <p>{condition.causesAndRiskFactors.intro}</p>
          <ul>
            {condition.causesAndRiskFactors.items.map((item, i) => (
              <li key={i}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
          <p>{condition.causesAndRiskFactors.closing}</p>
        </div>
      </section>

      {/* 10) Symptoms and Red Flags Table */}
      <section className="tdmd-section" id={`${pid}-symptoms-redflags`}>
        <div className="tdmd-container">
          <h2>{condition.symptomsAndRedFlags.sectionTitle}</h2>
          <p>{condition.symptomsAndRedFlags.intro}</p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  {condition.symptomsAndRedFlags.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {condition.symptomsAndRedFlags.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11) Differential Diagnosis */}
      <section className="tdmd-section" id={`${pid}-differential`}>
        <div className="tdmd-container">
          <h2>{condition.differentialDiagnosis.sectionTitle}</h2>
          <p>{condition.differentialDiagnosis.intro}</p>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card">
              <h3>{condition.differentialDiagnosis.telehealthAppropriate.title}</h3>
              <ul>
                {condition.differentialDiagnosis.telehealthAppropriate.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-card">
              <h3>{condition.differentialDiagnosis.requiresInPerson.title}</h3>
              <ul>
                {condition.differentialDiagnosis.requiresInPerson.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tdmd-grid tdmd-grid-2 tdmd-compare-cards">
            {condition.differentialDiagnosis.compareCards.map((card, i) => (
              <div key={i} className="tdmd-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <p>{condition.differentialDiagnosis.closing}</p>
        </div>
      </section>

      {/* 12) Telehealth Eligibility */}
      <section className="tdmd-section" id={`${pid}-telehealth-eligibility`}>
        <div className="tdmd-container">
          <h2>{condition.telehealthEligibility.sectionTitle}</h2>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>{condition.telehealthEligibility.appropriate.title}</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {condition.telehealthEligibility.appropriate.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-card tdmd-card-alert">
              <h3>{condition.telehealthEligibility.redFlags.title}</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {condition.telehealthEligibility.redFlags.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="tdmd-card-disclaimer">
                {condition.telehealthEligibility.redFlags.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13) Treatment Options */}
      <section className="tdmd-section" id={`${pid}-treatment-options`}>
        <div className="tdmd-container">
          <h2>{condition.treatmentOptions.sectionTitle}</h2>
          <p>{condition.treatmentOptions.intro}</p>

          {condition.treatmentOptions.sections.map((sec, i) => (
            <div key={i}>
              <h3>{sec.title}</h3>
              <p>{sec.text}</p>
            </div>
          ))}

          <h3>What TeleDirectMD Does Not Manage</h3>
          <ul>
            {condition.treatmentOptions.doesNotManage.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 14) Medication Table */}
      <section className="tdmd-section" id={`${pid}-medications`}>
        <div className="tdmd-container">
          <h2>{condition.medications.sectionTitle}</h2>
          <p>{condition.medications.intro}</p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  {condition.medications.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {condition.medications.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="tdmd-med-note">
            <strong>Important:</strong> {condition.medications.note}
          </p>
        </div>
      </section>

      {/* 15) Home Care / Recovery / Prevention */}
      <section className="tdmd-section" id={`${pid}-home-care`}>
        <div className="tdmd-container">
          <h2>{condition.homeCare.sectionTitle}</h2>

          <h3>{condition.homeCare.whatToDoNow.title}</h3>
          <ul>
            {condition.homeCare.whatToDoNow.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{condition.homeCare.whatToWatch.title}</h3>
          <ul>
            {condition.homeCare.whatToWatch.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{condition.homeCare.followUp.title}</h3>
          <ul>
            {condition.homeCare.followUp.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 16) When NOT to Use TeleDirectMD */}
      <section className="tdmd-section" id={`${pid}-when-not`}>
        <div className="tdmd-container">
          <h2>{condition.whenNotToUse.sectionTitle}</h2>
          <p>{condition.whenNotToUse.intro}</p>

          <h3>{condition.whenNotToUse.shouldNotUse.title}</h3>
          <ul>
            {condition.whenNotToUse.shouldNotUse.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{condition.whenNotToUse.alternatives.title}</h3>
          <ul>
            {condition.whenNotToUse.alternatives.items.map((item, i) => (
              <li key={i}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* INJECT 9: State condition × state intersection paragraph (just before FAQ) */}
      {stateConditionOverride && stateConditionOverride.stateConditionParagraph && (
        <section className="tdmd-section tdmd-state-condition" id={`${pid}-state-condition`}>
          <div className="tdmd-container">
            <h2>{condition.conditionName} in {state.name}</h2>
            <p>{stateConditionOverride.stateConditionParagraph}</p>
          </div>
        </section>
      )}

      {/* INJECT 10: "Practicing in {State}" bounded block (compliance + cities + epi) */}
      {stateTpl && (
        <section className="tdmd-section tdmd-practicing-in-state" id={`${pid}-practicing-in-${slug}`}>
          <div className="tdmd-container">
            <h2>Practicing in {state.name}</h2>
            {stateTpl.stateCompliance && stateTpl.stateCompliance.credentialBlock && (
              <p>{stateTpl.stateCompliance.credentialBlock}</p>
            )}
            {stateTpl.stateCities && stateTpl.stateCities.metroAndRural && (
              <p>{stateTpl.stateCities.metroAndRural}</p>
            )}
            {stateTpl.stateEpidemiology && stateTpl.stateEpidemiology.general && (
              <p>{stateTpl.stateEpidemiology.general}</p>
            )}
            {stateTpl.stateInsurance && stateTpl.stateInsurance.selfPayDisclosure && (
              <p>{stateTpl.stateInsurance.selfPayDisclosure}</p>
            )}
          </div>
        </section>
      )}

      {/* 17) FAQ Accordion */}
      <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
        <div className="tdmd-container">
          <FaqAccordion
            sectionTitle={condition.faq.sectionTitle}
            items={enrichedFaqItems.map((item, i) => ({
              question: item.question,
              answer: item.answer,
              id: `${pid}-faq-${i}`,
            }))}
          />

          <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
            <div className="tdmd-bottom-cta-copy">
              <h3>{condition.faq.bottomCta.title}</h3>
              <p>{condition.faq.bottomCta.text}</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
            </div>
          </div>

          {/* Cross-links */}
          <div className="tdmd-inline-links" style={{ marginTop: '2rem' }}>
            <h3>More {state.name} Resources</h3>
            <p className="tdmd-link-cloud">
              <a href={`/${slug}/online-doctor-visits`}>Online Doctor Visits in {state.name}</a>
              <a href={`/${slug}`}>All Conditions in {state.name}</a>
              <a href="/insurance">Insurance & Pricing</a>
              <a href="/faq">FAQs</a>
              <a href="/states-we-serve">All States We Serve</a>
            </p>
          </div>
        </div>
      </section>

      {/* 18) References */}
      <section className="tdmd-section" id={`${pid}-references`}>
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            {condition.references.map((ref, i) => (
              <li key={i}>
                <a href={ref.url} rel="nofollow noopener" target="_blank">{ref.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 19) Disclaimer */}
      <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <h2>{condition.disclaimer.sectionTitle}</h2>
          {condition.disclaimer.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 20) Related Conditions Grid */}
      <section className="tdmd-section" id={`${pid}-related-conditions`}>
        <div className="tdmd-container">
          <h2>Related Adult Conditions We Treat in {state.name}</h2>
          <p>These pages can help when symptoms overlap or when you want to explore other {state.name} telehealth care options from TeleDirectMD.</p>

          <div className="tdmd-related-grid" role="list">
            {condition.relatedConditions.map((rc, i) => (
              <a
                key={i}
                className="tdmd-related-card"
                role="listitem"
                href={`/${slug}/${rc.slug}`}
                aria-label={`${rc.title} treatment in ${state.name}`}
              >
                <span className="tdmd-related-title">{rc.title}</span>
                <span className="tdmd-related-desc">{rc.description}</span>
              </a>
            ))}
          </div>

          <div className="tdmd-inline-links">
            <h3>More {state.name} TeleDirectMD Pages</h3>
            <p className="tdmd-link-cloud">
              {condition.inlineLinks.map((link, i) => (
                <a key={i} href={`/${slug}/${link.slug}`}>{link.label}</a>
              ))}
            </p>
          </div>

          <div className="tdmd-city-block">
            <h3>{condition.cityBlock.title}</h3>
            <p>{condition.cityBlock.text}</p>
          </div>

          <div className="tdmd-related-cta">
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">Explore All Adult Conditions</a>
          </div>
        </div>
      </section>

      {/* 20a) Inline payer sections — hybrid consolidation pattern (2026-05-28).
            Renders only for states with active or pending TDMD payer contracts (insuranceByState entries).
            Cash-pay states (e.g. VT) skip this entirely. */}
      {renderInlineInsurance && (activeInsurers.length > 0 || pendingInsurers.length > 0) && (
        <section className="tdmd-section" id={`${pid}-insurance-inline`}>
          <div className="tdmd-container" data-speakable="true">
            <h2>Insurance Coverage for {condition.conditionName} in {state.name}</h2>
            <p>TeleDirectMD bills the following commercial insurers in-network in {state.name}. If you are covered, your standard plan copay applies in place of the $79 self-pay fee. We verify benefits before your appointment, and prescription costs at your pharmacy are billed separately under your pharmacy benefit.</p>

            {activeInsurers.map((payer) => {
              const headerName = payer.displayName || payer.name;
              // Strip trailing ' Treatment' for natural copy — 'UTI Treatment' → 'UTI'
              // (header already says 'coverage for X in Texas', the word 'treatment' is implied)
              const condShort = condition.conditionName.replace(/\s+Treatment$/i, '');
              return (
                <div key={payer.anchor || payer.name} style={{ marginTop: '2rem' }}>
                  <h3 id={payer.anchor || ''}>{headerName} coverage for {condShort.toLowerCase()} treatment in {state.name}</h3>
                  <p>TeleDirectMD accepts {headerName} in {state.name} for {condShort.toLowerCase()} visits. Your specific coverage, copay, and any prior authorization requirements depend on your individual plan; we verify benefits before your visit. Prescription medications, if appropriate, are paid separately at your pharmacy.</p>
                  {payer.plans && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--tdmd-text-muted, #525252)' }}>
                      <strong>Plans accepted:</strong> {payer.plans}
                    </p>
                  )}
                  {payer.effectiveDate && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--tdmd-text-muted, #525252)' }}>
                      <em>Coverage confirmed for {state.name} as of {new Date(payer.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}. Source: TeleDirectMD payor enrollment records.</em>
                    </p>
                  )}
                </div>
              );
            })}

            {pendingInsurers.length > 0 && (
              <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--tdmd-bg-soft)', borderLeft: '3px solid var(--tdmd-teal, #14B8A6)', borderRadius: '0.25rem' }}>
                <h3 style={{ marginTop: 0 }}>Expanding payer relationships in {state.name}</h3>
                <p style={{ marginBottom: 0 }}>
                  TeleDirectMD is actively expanding payer relationships in {state.name}. We are currently in network with the insurers listed above; {pendingInsurers.map((p) => p.displayName || p.name).join(' and ')} {pendingInsurers.length === 1 ? 'is' : 'are'} pending. For up-to-date coverage information, contact our intake team before booking, or use the $79 self-pay option which is HSA/FSA eligible.
                </p>
              </div>
            )}

            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--tdmd-text-muted, #525252)' }}>
              Specific copay amounts and any prior authorization requirements vary by plan. Confirm with your insurer's member services or our intake team before booking. $79 cash-pay covers the video visit with the physician. Prescription medications, if appropriate, are paid separately at your pharmacy. No subscription fees.
            </p>
          </div>
        </section>
      )}

      {/* 20b) Insurance Cross-links — internal linking for AI visibility */}
      {insuranceLinks.length > 0 && (
        <section className="tdmd-section" id={`${pid}-insurance-coverage`}>
          <div className="tdmd-container" data-speakable="true">
            <h2>Insurance Accepted for {condition.conditionName} in {state.name}</h2>
            <p>TeleDirectMD is in-network with the following insurers for {condition.conditionName.toLowerCase()} telemedicine visits in {state.name}. Your standard copay applies in place of the $79 self-pay fee.</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '1rem' }}>
              {insuranceLinks.map((link) => (
                <li key={link.insurerSlug} style={{ border: '1px solid var(--tdmd-border, #E5E7EB)', borderRadius: '0.5rem', padding: '1rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{link.insurerName} in {state.name}</strong>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    {link.tripleMatrixUrl && (
                      <a href={link.tripleMatrixUrl} style={{ color: 'var(--tdmd-teal, #14B8A6)', fontWeight: 600, textDecoration: 'none' }}>
                        {condition.conditionName} covered by {link.insurerName} →
                      </a>
                    )}
                    <a href={link.insurerStateUrl} style={{ color: 'var(--tdmd-teal, #14B8A6)', textDecoration: 'none' }}>
                      All {link.insurerName} coverage in {state.name}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              Don't see your plan? <a href="/insurance" style={{ color: 'var(--tdmd-teal, #14B8A6)', fontWeight: 600 }}>View all insurance options</a> or book a $79 self-pay visit.
            </p>
          </div>
        </section>
      )}

      {/* 21) Same Condition in Other States */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-other-states`}>
        <div className="tdmd-container">
          <h2>Get {condition.conditionName} Treatment in Other States</h2>
          <p>TeleDirectMD treats {condition.conditionName.toLowerCase()} via telehealth in 40+ states. If you are traveling, relocating, or helping a family member in another state, select below to find this treatment near them.</p>
          <div className="tdmd-other-states-grid">
            {otherStates.map((s) => (
              <a key={s.slug} className="tdmd-other-state-link" href={`/${s.slug}/${conditionSlug}`}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 22) What does this cost? — links to /cost/ pages from PR 4 */}
      <WhatDoesThisCostBlock conditionSlug={conditionSlug} conditionName={condition.conditionName} stateName={state.name} />

      {/* 23) Compare TeleDirectMD — links to /compare/ pages from PR 5 */}
      <CompareTeleDirectMDLinkRow conditionSlug={conditionSlug} />

      {/* 24) Common symptoms — back-links to /symptoms/* pages */}
      <CommonSymptomsBlock conditionSlug={conditionSlug} conditionName={condition.conditionName} />

      {/* 25) FL footer compliance block — Clauses A2 (no-in-person-care), A4 (standard-of-care — SOFTER variant),
            A3 (verify-link — placement 2 of 3). Approved 2026-06-07. */}
      {state.abbr === 'FL' && <FlFooterCompliance idSuffix={`${pid}-fl-compliance`} />}
    </>
  );
}
