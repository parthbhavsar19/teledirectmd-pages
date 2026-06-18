'use client';
import { B, INSURERS } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';
import { CitableSummaryBlock } from '../../components/CitableSummary';
import { FlCredentialBlock, FlFooterCompliance } from '../../components/FlCompliance';
import { summarizeInsurerHub, citableSummaryToJsonLd } from '../../../lib/citable-summary';
import MedicaidExclusion from '../../components/MedicaidExclusion';

// Florida Blue is the BCBS licensee for Florida — single-state, no [segment] routing.
// Brand search queries: "florida blue telehealth", "doctor that takes florida blue",
// "florida blue online doctor", "florida blue virtual visit". This page is the
// canonical destination for those queries, cross-linking to the deeper BCBS-FL
// state page (/insurance/blue-cross-blue-shield/florida/) for plan-level FAQ.

// Use BCBS color palette via INSURERS['blue-cross-blue-shield'] since Florida Blue
// is a BCBS licensee with the same brand color family.
const bcbs = INSURERS['blue-cross-blue-shield'];
const fbColor = '#0073B7'; // Florida Blue corporate blue

const FB_FAQS = [
  { q: "Which Florida Blue plans are in-network with TeleDirectMD?", a: "TeleDirectMD is in-network with Florida Blue's commercial plans only: BlueOptions PPO, BlueSelect PPO, BlueChoice PPO, BlueCare HMO, and Florida Blue's small-group and individual marketplace HMO/PPO products. Florida Blue Medicare Advantage (BlueMedicare HMO/PPO), Florida Blue Medicaid, Florida Blue State Group (state employee plan), and the Federal Employee Program (FEP) are not in-network." },
  { q: "What is the difference between Florida Blue and BlueCross BlueShield Federal (FEP)?", a: "Florida Blue is the local BCBS affiliate that issues commercial plans to Florida residents. The Federal Employee Program (FEP / 'BCBS Federal', card prefix 'R') is a separate national program for federal employees, administered by the BCBS Association — it is not in-network at TeleDirectMD even when the cardholder lives in Florida. Look at your member ID prefix: 'XJG', 'XGJ', 'XOJ', or 'YPF' is typically commercial Florida Blue; 'R' is FEP." },
  { q: "I have Florida Blue Medicare Advantage (BlueMedicare) — can I still see a TeleDirectMD physician?", a: "Yes, as a $79 self-pay patient. We are not in-network for Florida Blue Medicare Advantage, but the $79 flat fee is HSA/FSA eligible and there is no copay, deductible, or surprise bill." },
  { q: "My Florida Blue plan card says 'State Group' — am I covered?", a: "No. Florida Blue State Group (the Florida state employees / retirees plan) runs through a separate state-administered contract and is not in-network at TeleDirectMD. Self-pay $79 visits remain available." },
  { q: "What's my Florida Blue copay for a telehealth visit?", a: "Most Florida Blue commercial PPO/HMO plans apply a $0–$30 telehealth copay (often lower than the in-person specialist copay). High-deductible health plans (HDHP) may apply the full contracted rate (~$110–$130) toward the deductible until met. Log into floridablue.com or the Florida Blue app to verify." },
  { q: "Will Florida Blue pharmacy benefits cover my prescription?", a: "Yes. The visit and the prescription are separately billed — Florida Blue's pharmacy benefit (Prime Therapeutics for most commercial plans) applies when the e-prescription is filled at your pharmacy. Generic medications on Florida Blue's standard formulary are typically $0–$10." },
  { q: "Florida Blue out-of-state members visiting Florida — am I covered?", a: "BlueCard PPO host processing applies. If you have a BCBS plan from another state and you're physically located in Florida at the time of the visit, Florida Blue acts as the host plan and processes the claim through BlueCard. Call your home plan's member services to confirm BlueCard PPO is active." },
  { q: "Does TeleDirectMD accept Florida Blue Medicaid?", a: "No. Florida Blue Medicaid is not in-network. TeleDirectMD is not in-network with any Medicaid plan in any state. Self-pay $79 visits remain available." },
];

const FB_CONDITIONS_COVERED = [
  // Acute care
  { slug: 'uti-treatment-online', label: 'UTI (Urinary Tract Infection)' },
  { slug: 'sinus-infection-treatment-online', label: 'Sinus Infection' },
  { slug: 'sore-throat-treatment-online', label: 'Sore Throat' },
  { slug: 'ear-pain-treatment-online', label: 'Ear Infection / Ear Pain' },
  { slug: 'pink-eye-treatment-online', label: 'Pink Eye (Conjunctivitis)' },
  { slug: 'influenza-treatment-online', label: 'Flu / Influenza' },
  { slug: 'common-cold-treatment-online', label: 'Common Cold' },
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection' },
  { slug: 'bv-treatment-online', label: 'BV (Bacterial Vaginosis)' },
  { slug: 'cold-sore-treatment-online', label: 'Cold Sores' },
  { slug: 'chlamydia-treatment-online', label: 'Chlamydia' },
  { slug: 'shingles-treatment-online', label: 'Shingles' },
  { slug: 'acne-treatment-online', label: 'Acne' },
  { slug: 'cellulitis-treatment-online', label: 'Cellulitis' },
  { slug: 'seasonal-allergies-treatment-online', label: 'Seasonal Allergies' },
  // Chronic refills
  { slug: 'hypertension-refills-online', label: 'Hypertension Medication Refills' },
  { slug: 'hyperlipidemia-refills-online', label: 'Hyperlipidemia Medication Refills' },
  { slug: 'hypothyroidism-refills-online', label: 'Hypothyroidism Refills' },
  { slug: 'asthma-refills-online', label: 'Asthma Inhaler Refills' },
  { slug: 'acid-reflux-refills-online', label: 'Acid Reflux / GERD Refills' },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "MedicalOrganization", "@id": "https://teledirectmd.com/#organization", "name": "TeleDirectMD", "url": "https://teledirectmd.com", "description": "Physician-led telemedicine practice accepting Florida Blue (BCBS of Florida) commercial plans.", "aggregateRating": getAggregateRating() },
    { "@type": "Physician", "@id": "https://teledirectmd.com/#physician", "name": "Parth Bhavsar, MD",
      "identifier": [
        { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
        { "@type": "PropertyValue", "propertyID": "FL Telehealth Provider Registration", "value": "TPME5921" },
      ],
      "medicalSpecialty": "Family Medicine",
      "acceptsInsurance": [
        { "@type": "HealthInsurancePlan", "name": "Florida Blue Commercial Plans" },
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Florida Out-of-State Telehealth Provider Registration (TPME5921)",
        "credentialCategory": "Telehealth Provider Registration",
        "recognizedBy": {
          "@type": "GovernmentOrganization",
          "name": "Florida Department of Health",
          "url": "https://flhealthsource.gov/telehealth/",
        },
        "url": "https://flhealthsource.gov/telehealth/",
      },
      ...getReviewBlock(),
    },
    { "@type": "FAQPage", "mainEntity": FB_FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]+>/g, '') } })) },
    { "@type": "WebPage", "@id": "https://teledirectmd.com/insurance/florida-blue#webpage", "url": "https://teledirectmd.com/insurance/florida-blue", "name": "Online Doctor That Accepts Florida Blue | TeleDirectMD", "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]"] } },
    { "@type": "HowTo", "name": "How to book a Florida Blue-covered telemedicine visit with TeleDirectMD", "description": "Three steps to see Dr. Parth Bhavsar, MD by video using your Florida Blue plan.", "totalTime": "PT5M", "step": [
      { "@type": "HowToStep", "position": 1, "name": "Verify your Florida Blue plan type", "text": "Check your member ID card to confirm you have a Florida Blue commercial plan (BlueOptions, BlueSelect, BlueCare HMO, or employer-sponsored). FEP, Medicaid, and Medicare Advantage are not in-network." },
      { "@type": "HowToStep", "position": 2, "name": "Book online", "text": "Go to teledirectmd.com/book-online and choose 'Insurance' as your payment method. Enter your Florida Blue member ID." },
      { "@type": "HowToStep", "position": 3, "name": "Complete your video visit", "text": "TeleDirectMD verifies your benefits and copay before your visit. You'll see Dr. Parth Bhavsar, MD by video. If a prescription is appropriate, it's sent electronically to your Florida pharmacy." },
    ] },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://teledirectmd.com" },
      { "@type": "ListItem", "position": 2, "name": "Insurance", "item": "https://teledirectmd.com/insurance" },
      { "@type": "ListItem", "position": 3, "name": "Florida Blue", "item": "https://teledirectmd.com/insurance/florida-blue" },
    ] },
  ],
};

export default function FloridaBlueHubClient() {
  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: "Confirm commercial plan", desc: "Florida Blue commercial only — check your member ID prefix is XJG/XGJ/XOJ/YPF, not 'R' (FEP)." },
    { icon: <Ico.Check c={B.teal} s={24} />, title: "Benefits verified", desc: "We confirm your Florida Blue commercial copay before the video call (typically $0–$30)." },
    { icon: <Ico.Video c={B.teal} s={24} />, title: "Video visit + Prime Rx", desc: "Same-day video with Dr. Bhavsar, MD. Prescription routed via Florida Blue's Prime Therapeutics pharmacy benefit." },
  ];

  // Citable summary for AI extractors
  const citableSummary_AI = summarizeInsurerHub({
    insurerName: 'Florida Blue',
    stateCount: 1,
    stateList: ['Florida'],
    planTypes: "commercial PPO, HMO, EPO, and POS",
    payerSpecificCopy: "Florida Blue is the BCBS affiliate covering Florida residents. TeleDirectMD's Florida Blue contract is commercial-only: BlueOptions PPO, BlueSelect PPO, BlueChoice PPO, BlueCare HMO, and the small-group/individual marketplace plans are in-network. Florida Blue Medicare Advantage (BlueMedicare HMO/PPO), Florida Blue Medicaid, Florida Blue State Group, and the Federal Employee Program (FEP / BCBS Federal, member ID prefix 'R') are not in-network. Pharmacy benefits run through Prime Therapeutics for most commercial plans. BlueCard PPO host-state processing applies for visiting out-of-state BCBS members physically located in Florida at the time of the visit. Typical telehealth copay: $0\u2013$30.",
  });
  const pageUrl_AI = 'https://teledirectmd.com/insurance/florida-blue/';
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI });

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix="florida-blue-hub" />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insurance", href: "/insurance" }, { label: "Florida Blue" }]} />

      {/* FL: A1 credential disclosure + A3 verify-link placement 1 of 3. */}
      <FlCredentialBlock />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: "56px 24px 64px", position: "relative", overflow: "hidden", marginTop: 16 }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", borderRadius: 100, padding: "8px 16px", marginBottom: 24, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={fbColor} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: "#90C2FF", letterSpacing: "0.04em", textTransform: "uppercase" }}>Florida Blue In-Network</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 700, color: B.white, lineHeight: 1.15, margin: "0 0 16px" }}>
            Online Doctor Visits Covered<br />by Florida Blue
          </h1>
          <p data-speakable="true" style={{ fontFamily: B.fb, fontSize: "clamp(16px, 2.5vw, 19px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: "0 0 28px", maxWidth: 600 }}>
            TeleDirectMD is in-network with Florida Blue (the BCBS licensee for Florida) commercial plans. See Dr. Parth Bhavsar, MD by video for the same telehealth visits you&rsquo;d schedule with a primary care office &mdash; usually same day.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              <Ico.Cal c={B.white} s={18} /> Book with Florida Blue
            </a>
            <a href="/insurance/blue-cross-blue-shield/florida" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", background: "rgba(255,255,255,0.1)", color: B.white, borderRadius: B.rs, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              Plan-level coverage details
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ margin: "32px 0" }}><TrustBar /></div>

        {/* QUICK ANSWER — AI visibility */}
        <AnswerBlock
          question="Is TeleDirectMD in-network with Florida Blue?"
          answer="Yes. TeleDirectMD is in-network with Florida Blue (BCBS of Florida) commercial plans, effective 2026-02-01. Book a same-day telehealth visit with Dr. Parth Bhavsar, MD (Florida Telehealth Provider Registration #TPME5921 under Fla. Stat. § 456.47(4)). Florida Blue Medicaid, Medicare Advantage, and FEP plans are not currently in-network."
          color={B.teal}
        />

        {/* IMPORTANT: Plan-type guidance */}
        <div style={{ background: "#EAF2FF", border: `1px solid ${fbColor}33`, borderRadius: B.r, padding: "20px 24px", marginBottom: 40, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <Ico.Shield c={fbColor} s={22} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: B.navy, marginBottom: 6 }}>Which Florida Blue plans are in-network?</div>
            <p style={{ fontSize: 14, color: B.text, margin: 0, lineHeight: 1.6 }}>TeleDirectMD accepts <strong>Florida Blue commercial plans</strong> (individual, group, and employer-sponsored) including BlueOptions, BlueSelect, and BlueCare HMO. The following are <strong>not</strong> in-network at this time: Federal Employee Program (FEP), Florida Blue Medicaid, and Florida Blue Medicare Advantage. If your card shows any of those, self-pay is available for a $79 flat fee &mdash; same physician, same care quality.</p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>How it works with Florida Blue</h2>
          <p style={{ fontSize: 15, color: B.text, margin: "0 0 24px", lineHeight: 1.6 }}>From booking to prescription, a Florida Blue-covered visit with Dr. Bhavsar, MD takes under 30 minutes from start to finish.</p>
          <HowItWorksSteps insurerName="Florida Blue" customSteps={customSteps} />
        </section>

        {/* CONDITIONS COVERED */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>What we treat for Florida Blue members</h2>
          <p style={{ fontSize: 15, color: B.text, margin: "0 0 24px", lineHeight: 1.6 }}>Common conditions covered under Florida Blue commercial plans at TeleDirectMD. Click any condition for state-specific clinical detail, pricing, and FAQ.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
            {FB_CONDITIONS_COVERED.map((c) => (
              <a key={c.slug} href={`/fl/${c.slug}/`}
                style={{ display: "block", background: B.white, border: `1px solid ${fbColor}22`, borderRadius: B.r, padding: "12px 14px", textDecoration: "none", fontSize: 14, fontWeight: 600, color: B.navy, borderLeft: `3px solid ${fbColor}` }}>
                {c.label}
              </a>
            ))}
          </div>
        </section>

        {/* COST EXPECTATION */}
        <section style={{ marginBottom: 48, background: B.white, border: `1px solid ${fbColor}22`, borderRadius: B.r, padding: "28px 28px", boxShadow: B.shadow }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: "0 0 16px" }}>What will I pay with Florida Blue?</h2>
          <p style={{ fontSize: 15, color: B.text, margin: "0 0 16px", lineHeight: 1.7 }}>
            Most Florida Blue commercial plans have telehealth copays of <strong>$0&ndash;$30</strong>. Many employer-sponsored Florida Blue plans carry <strong>$0 telehealth copays</strong> &mdash; particularly since the post-pandemic expansion of telehealth benefits. Your specific cost-sharing depends on your individual plan; we verify benefits before your visit.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: "0 0 16px", lineHeight: 1.7 }}>
            Prefer to skip insurance entirely? The TeleDirectMD self-pay rate is <strong>$79 flat</strong> for the video visit. Prescription medications, if appropriate, are paid separately at your pharmacy. This is often the simplest option if you have a high-deductible plan or if you&rsquo;d rather not file a claim.
          </p>
        {/* Compact link out to /insurance/ — full cost comparison lives there */}
        <div style={{ background:"#F3FAFB", border:"1px solid #DDE3E6", borderRadius:18, padding:"18px 22px", margin:"0 0 32px", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12 }}>
          <p style={{ margin:0, fontSize:14, color:"#12323A" }}>Not in-network on your plan? Self-pay is a flat <strong>$79</strong> in all our licensed states (HSA/FSA eligible).</p>
          <a href="/insurance/" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"10px 18px", background:"#006B73", color:"#fff", borderRadius:10, fontWeight:700, fontSize:14, textDecoration:"none", whiteSpace:"nowrap" }}>Compare options →</a>
        </div>
</section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix="florida-blue-hub" />

        {/* FAQ */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: "0 0 24px" }}>Florida Blue + TeleDirectMD FAQ</h2>
          <FAQ items={FB_FAQS} />
        </section>

        {/* COMPARE */}{/* BOOK CTA */}
        <BookCTA insurerName="Florida Blue" tagline="Florida Blue commercial PPO, HMO, EPO, and POS plans — verified before your video visit. FEP, Medicaid, State Group, and BlueMedicare are not in-network." subtagline="Or pay $79 self-pay (HSA/FSA eligible) — no claim, no copay surprises." />

        <div style={{ marginBottom: 48 }}><InsuranceDisclaimer payerNote="Florida Blue network status reflects our commercial-only contract. Florida Blue Medicare Advantage (BlueMedicare), State Group, FEP (member ID prefix 'R'), and Florida Blue Medicaid are not in-network." /></div>
      </div>

      {/* FL: A2 no-in-person-care + A4 standard-of-care (softer) + A3 verify-link placement 2 of 3. */}
      <FlFooterCompliance idSuffix="florida-blue-hub-fl-compliance" />
    </div>
  );
}
