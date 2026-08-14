'use client';
import { B, INSURERS, STATE_NAMES, INSURANCE_CONDITIONS } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';
import { CitableSummaryBlock } from '../../components/CitableSummary';
import { summarizeInsurerHub, citableSummaryToJsonLd } from '../../../lib/citable-summary';
import MedicaidExclusion from '../../components/MedicaidExclusion';

const insurer = INSURERS.aetna;

const AETNA_FAQS = [
  { q: "Which Aetna plans are in-network with TeleDirectMD?", a: "TeleDirectMD is in-network with Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in 13 states: Arizona, California, Colorado, Florida, Georgia, Illinois, Louisiana, Michigan, Minnesota, North Carolina, Ohio, Pennsylvania, and Tennessee. California excludes Aetna HMO and QPOS. Minnesota patients are billed under the Allina | Aetna joint venture network. Aetna Better Health (Medicaid), Aetna D-SNP, and CHIP plans are not in-network in any state." },
  { q: "What is the Aetna provider PIN for Dr. Parth Bhavsar?", a: "Dr. Parth Bhavsar, MD (NPI 1104323203) is credentialed with Aetna in each contracted state. The contract is held under TeleDirectMD's group TIN and routes through Aetna's electronic claims clearinghouse (payer ID 60054). We will not ask you for a PIN — we submit the claim on our end after the visit." },
  { q: "California Aetna members: am I covered?", a: "If you have an Aetna PPO, EPO, POS, or Medicare Advantage plan in California, yes. Aetna HMO and Aetna QPOS plans in California are not in-network — Aetna restricts those to in-state physical-clinic networks. If you have one of those plans, use the $79 self-pay option." },
  { q: "What does an Aetna telehealth visit cost at TeleDirectMD?", a: "Most Aetna commercial plans apply a $0–$40 telehealth copay; Aetna Medicare Advantage typically applies a $0–$25 copay; high-deductible plans may apply full visit cost (~$130 contracted rate) toward deductible until met. Verify by logging into your member account at aetna.com or calling the number on your Aetna card." },
  { q: "Will my prescription be covered by my Aetna pharmacy benefit?", a: "Your medication is dispensed under Aetna's pharmacy benefit manager (CVS Caremark for most commercial plans), separate from the visit copay. Generics on Aetna's standard formulary are typically $0–$10. We send the e-prescription to your preferred pharmacy at visit end — your usual Aetna pharmacy copay applies." },
  { q: "Can I use an Aetna HSA or FSA card?", a: "Yes. Telehealth visits at TeleDirectMD are HSA/FSA eligible whether billed to Aetna or paid $79 self-pay. Your HSA/FSA card runs at booking; the system itemizes the visit for IRS substantiation." },
  { q: "What happens if Aetna denies my claim?", a: "Denials are rare for the conditions we treat, but if Aetna denies the claim, we contact you within 48 hours with options: appeal (we provide the medical records at no cost), or convert the visit to the $79 self-pay rate retroactively and refund any difference." },
  { q: "Does TeleDirectMD accept Aetna Medicaid (Aetna Better Health)?", a: "No. TeleDirectMD is not in-network with any Medicaid plan, including Aetna Better Health, in any state. We are also not in-network with Aetna D-SNP. Self-pay $79 visits remain available." },
];

const CONDITIONS_COVERED = [
  "Urinary Tract Infection (UTI)",
  "Sinus Infection (Sinusitis)",
  "Pink Eye (Conjunctivitis)",
  "Strep Throat",
  "Ear Infection (Otitis Media)",
  "Flu / Influenza",
  "Yeast Infection",
  "Bacterial Vaginosis (BV)",
  "Aetna-Covered Asthma Inhaler Refills",
  "Aetna-Covered Hypertension Refills",
  "Aetna-Covered Hypothyroidism Refills",
  "Aetna-Covered Acid Reflux Refills",
  "Birth Control Refills (CVS Caremark)",
  "Cold Sores (HSV)",
  "Acne",
  "Seasonal Allergies",
];

const AETNA_STATES = [
  { code:"AZ", name:"Arizona", url:"/az/" },
  { code:"CA", name:"California", url:"/insurance/aetna/california", newBadge:"New · May 2026" },
  { code:"CO", name:"Colorado", url:"/co/" },
  { code:"FL", name:"Florida", url:"/insurance/aetna/florida" },
  { code:"GA", name:"Georgia", url:"/ga/" },
  { code:"IL", name:"Illinois", url:"/il/" },
  { code:"MI", name:"Michigan", url:"/mi/" },
  { code:"MN", name:"Minnesota", url:"/mn/" },
  { code:"OH", name:"Ohio", url:"/oh/" },
  { code:"TN", name:"Tennessee", url:"/tn/" },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://teledirectmd.com/#organization",
      "name": "TeleDirectMD",
      "url": "https://teledirectmd.com",
      "logo": "https://teledirectmd.com/logo.png",
      "description": "Physician-led telemedicine practice accepting Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in 13 states.",
      "medicalSpecialty": "General Practice",
      "availableService": { "@type": "MedicalTherapy", "name": "Telehealth Video Visit" },
      "aggregateRating": getAggregateRating(),
    },
    {
      "@type": "Physician",
      "@id": "https://teledirectmd.com/#physician",
      "name": "Parth Bhavsar, MD",
      "url": "https://teledirectmd.com/about",
      "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
      "medicalSpecialty": "Family Medicine",
      "availableService": { "@type": "MedicalTherapy", "name": "Telehealth Video Consultation" },
      "acceptsInsurance": [
        { "@type": "HealthInsurancePlan", "name": "Aetna Commercial Plans", "includesHealthPlanFormulary": { "@type": "HealthPlanFormulary", "offersPrescriptionDrug": true } }
      ],
      ...getReviewBlock(),
    },
    {
      "@type": "FAQPage",
      "mainEntity": AETNA_FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]+>/g,'') }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://teledirectmd.com" },
        { "@type": "ListItem", "position": 2, "name": "Insurance", "item": "https://teledirectmd.com/insurance" },
        { "@type": "ListItem", "position": 3, "name": "Aetna", "item": "https://teledirectmd.com/insurance/aetna" },
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://teledirectmd.com/insurance/aetna#webpage",
      "url": "https://teledirectmd.com/insurance/aetna",
      "name": "Online Doctor That Accepts Aetna Insurance | TeleDirectMD",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]"] }
    },
    {
      "@type": "HowTo",
      "name": "How to book an Aetna-covered telemedicine visit with TeleDirectMD",
      "description": "Three steps to see Dr. Parth Bhavsar, MD by video using your Aetna commercial plan.",
      "totalTime": "PT5M",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Verify Aetna coverage", "text": "Confirm your Aetna commercial plan is active in Arizona, California, Colorado, Florida, Georgia, Illinois, Louisiana, Michigan, Minnesota, North Carolina, Ohio, Pennsylvania, or Tennessee by checking your member ID card." },
        { "@type": "HowToStep", "position": 2, "name": "Book online", "text": "Go to teledirectmd.com/book-online and choose 'Insurance' as your payment method. Enter your Aetna member ID." },
        { "@type": "HowToStep", "position": 3, "name": "See the physician by video", "text": "Join your video visit with Dr. Parth Bhavsar, MD. Pay only your Aetna copay. Prescriptions are sent to your pharmacy immediately after the visit." }
      ]
    }    ,
    {
          "@type": "ItemList",
          "@id": "https://teledirectmd.com/insurance/aetna#statelist",
          "name": "States where TeleDirectMD is in-network with Aetna",
          "numberOfItems": 10,
          "itemListOrder": "https://schema.org/ItemListOrderAscending",
          "itemListElement": [
                {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "TeleDirectMD x Aetna - Arizona",
                      "url": "https://teledirectmd.com/az/"
                },
                {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "TeleDirectMD x Aetna - California",
                      "url": "https://teledirectmd.com/ca/"
                },
                {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "TeleDirectMD x Aetna - Colorado",
                      "url": "https://teledirectmd.com/co/"
                },
                {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "TeleDirectMD x Aetna - Florida",
                      "url": "https://teledirectmd.com/fl/"
                },
                {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "TeleDirectMD x Aetna - Georgia",
                      "url": "https://teledirectmd.com/ga/"
                },
                {
                      "@type": "ListItem",
                      "position": 6,
                      "name": "TeleDirectMD x Aetna - Illinois",
                      "url": "https://teledirectmd.com/il/"
                },
                {
                      "@type": "ListItem",
                      "position": 7,
                      "name": "TeleDirectMD x Aetna - Michigan",
                      "url": "https://teledirectmd.com/mi/"
                },
                {
                      "@type": "ListItem",
                      "position": 8,
                      "name": "TeleDirectMD x Aetna - Minnesota",
                      "url": "https://teledirectmd.com/mn/"
                },
                {
                      "@type": "ListItem",
                      "position": 9,
                      "name": "TeleDirectMD x Aetna - Ohio",
                      "url": "https://teledirectmd.com/oh/"
                },
                {
                      "@type": "ListItem",
                      "position": 10,
                      "name": "TeleDirectMD x Aetna - Tennessee",
                      "url": "https://teledirectmd.com/tn/"
                }
          ]
    },
  
  ]
};

export default function AetnaHubClient() {
  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: "Book with Aetna ID", desc: "Have your Aetna member ID card ready at teledirectmd.com/book-online — payer ID 60054." },
    { icon: <Ico.Check c={B.teal} s={24} />, title: "Benefits verified", desc: "We confirm your Aetna copay (typically $0–$40) before the visit starts." },
    { icon: <Ico.Video c={B.teal} s={24} />, title: "Video visit + e-Rx", desc: "Same-day visit with Dr. Bhavsar, MD. Prescription routed via Aetna's CVS Caremark pharmacy benefit." },
  ];

  // ── Citable summary for AI extractors (Aetna hub)
  const citableSummary_AI = summarizeInsurerHub({
    insurerName: 'Aetna',
    stateCount: insurer?.states?.length || null,
    stateList: insurer?.states ? insurer.states.map(s => STATE_NAMES[s] || s) : null,
    planTypes: "PPO, HMO, EPO, POS, and Medicare Advantage",
    payerSpecificCopy: "Aetna routes telehealth claims through Aetna's electronic clearinghouse (payer ID 60054). The contract is held under TeleDirectMD's group TIN and credentials Dr. Bhavsar in each contracted state. California excludes Aetna HMO and QPOS plans; Minnesota patients are billed under the Allina | Aetna joint venture. Telehealth copays for Aetna commercial plans typically run $0\u2013$40; Aetna Medicare Advantage applies $0\u2013$25 in most plans. Aetna Better Health (Medicaid), Aetna D-SNP, and CHIP plans are excluded in every state. The pharmacy benefit runs through CVS Caremark for most commercial plans.",
  });
  const pageUrl_AI = 'https://teledirectmd.com/insurance/aetna/';
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI });


  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix="aetna-hub" />

      <Breadcrumb items={[
        { label:"Home", href:"/" },
        { label:"Insurance", href:"/insurance" },
        { label:"Aetna" },
      ]} />

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.color} s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:insurer.colorLight, letterSpacing:"0.04em", textTransform:"uppercase" }}>Aetna In-Network Provider</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(30px, 5vw, 46px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Online Doctor Visits<br />Covered by Aetna
          </h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(16px, 2.5vw, 19px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 28px", maxWidth:580 }}>
            TeleDirectMD is in-network with Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in 13 states. See a board-certified physician by video today — your standard Aetna copay applies.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
              <Ico.Cal c={B.white} s={18} /> Book with Aetna
            </a>
            <a href="/insurance"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 24px", background:"rgba(255,255,255,0.1)", color:B.white, borderRadius:B.rs, fontWeight:600, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,0.2)" }}>
              Check Other Insurance
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>

        {/* QUICK TRUST BAR */}
        <div style={{ margin:"32px 0" }}>
          <TrustBar />
        </div>

        {/* QUICK ANSWER — AI visibility */}
        <AnswerBlock
          question="Is TeleDirectMD in-network with Aetna?"
          answer="Yes. TeleDirectMD accepts Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in 13 states: Arizona, California, Colorado, Florida, Georgia, Illinois, Louisiana, Michigan, Minnesota, North Carolina, Ohio, Pennsylvania, and Tennessee. California excludes HMO and QPOS plans. Book a same-day video visit with Dr. Parth Bhavsar, MD — your standard Aetna copay applies."
          color={B.teal}
        />

        {/* WHAT'S COVERED */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>What Conditions Does Aetna Cover at TeleDirectMD?</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>
            Aetna covers telehealth visits for a wide range of conditions. Below are the most commonly treated conditions at TeleDirectMD that Aetna commercial plans typically cover. Coverage is subject to your plan's specific benefits.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:10 }}>
            {CONDITIONS_COVERED.map((cond, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 16px", boxShadow:B.shadow }}>
                <Ico.Check c="#1A7A3A" s={16} />
                <span style={{ fontSize:14, fontWeight:500, color:B.navy }}>{cond}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:13, color:B.text, margin:"16px 0 0", lineHeight:1.6 }}>
            See the full list on our <a href="/what-we-treat" style={{ color:B.teal }}>What We Treat</a> page. Conditions requiring DEA-scheduled controlled substances are not treated via telehealth.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your Aetna Insurance with TeleDirectMD</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Three simple steps to see a physician using your Aetna benefits.</p>
          <HowItWorksSteps insurerName="Aetna" customSteps={customSteps} />
        </section>

        {/* COST SECTION */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>What Will My Aetna Visit Cost?</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Your cost depends on your specific Aetna plan. Here is a general overview:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:16 }}>
            {[
              { title:"With Aetna Insurance", color:insurer.color, colorLight:insurer.colorLight, items:["Standard Aetna telehealth copay ($0–$40 for most plans)","Deductible applies if not yet met","Coinsurance may apply after deductible","Contact Aetna to verify your exact cost"] },
              { title:"Without Insurance (Self-Pay)", color:B.accent, colorLight:"#FFF0EC", items:["Flat $79 per visit — always","No copay, no deductible, no surprise bills","No insurance needed","Available in all 40+ licensed states"] },
            ].map((card, i) => (
              <div key={i} style={{ background:B.white, border:`2px solid ${card.color}22`, borderRadius:B.r, padding:"24px 20px", borderTop:`3px solid ${card.color}`, boxShadow:B.shadow }}>
                <h3 style={{ fontFamily:B.fd, fontSize:18, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>{card.title}</h3>
                {card.items.map((item, j) => (
                  <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:10 }}>
                    <Ico.Check c={card.color} s={15} />
                    <span style={{ fontSize:14, color:B.text, lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* STATES GRID */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>States Where We Accept Aetna Insurance</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>
            TeleDirectMD is in-network with Aetna PPO, HMO, EPO, POS, and Medicare Advantage plans in the following states. Click your state for detailed coverage information.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))", gap:10 }}>
            {AETNA_STATES.map((st) => (
              <a key={st.code} href={st.url}
                style={{ position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", background:B.white, border:`1px solid ${insurer.color}22`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow, transition:"border-color 0.2s" }}>
                <div>
                  <div style={{ fontSize:15, fontWeight:700, color:B.navy, display:"flex", alignItems:"center", gap:8 }}>
                    {st.name}
                    {st.newBadge && (
                      <span style={{ background:"#FF5A36", color:"#fff", fontSize:10, fontWeight:700, padding:"3px 7px", borderRadius:999, letterSpacing:0.3, whiteSpace:"nowrap" }}>
                        NEW
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize:12, color:insurer.color, fontWeight:600, marginTop:2 }}>
                    {st.newBadge ? st.newBadge : "Aetna In-Network"}
                  </div>
                </div>
                <Ico.Arrow c={B.text} s={14} />
              </a>
            ))}
          </div>
          <p style={{ fontSize:13, color:B.text, margin:"16px 0 0" }}>
            Not seeing your state? <a href="/insurance" style={{ color:B.teal }}>Check all insurance options</a> or book a self-pay visit for $79.
          </p>
        </section>

        {/* BOOK CTA */}
        <section style={{ marginBottom:48 }}>
          <BookCTA insurerName="Aetna" tagline="Aetna PPO, HMO, EPO, POS, and Medicare Advantage — verified at payer ID 60054 before your video visit." subtagline="Or skip insurance entirely: $79 self-pay (HSA/FSA eligible)." />
        </section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix="aetna-hub" />

        {/* FAQ */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Aetna & TeleDirectMD: Frequently Asked Questions</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.5 }}>Everything you need to know about using your Aetna benefits with TeleDirectMD.</p>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {AETNA_FAQS.map((faq, i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>
        {/* EXPLORE LINKS — top-6 Aetna combos */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>Most-searched Aetna telehealth combinations</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {[
              { slug: 'uti-treatment-online', label: 'UTI billed to Aetna' },
              { slug: 'sinus-infection-treatment-online', label: 'Sinus infection billed to Aetna' },
              { slug: 'pink-eye-treatment-online', label: 'Pink eye billed to Aetna' },
              { slug: 'sore-throat-treatment-online', label: 'Strep / sore throat billed to Aetna' },
              { slug: 'ear-pain-treatment-online', label: 'Ear infection billed to Aetna' },
              { slug: 'yeast-infection-treatment-online', label: 'Yeast infection billed to Aetna' },
            ].map((c, i) => (
              <a key={i} href={`/insurance/aetna/${c.slug}`}
                style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow }}>
                <div style={{ fontSize:14, fontWeight:600, color:B.navy }}>{c.label}</div>
                <div style={{ fontSize:12, color:B.text, marginTop:2 }}>$0–$40 copay typical · CVS Caremark Rx</div>
              </a>
            ))}
          </div>
        </section>
        {/* Compact link out to /insurance/ — full cost comparison lives there */}
        <div style={{ background:"#F3FAFB", border:"1px solid #DDE3E6", borderRadius:18, padding:"18px 22px", margin:"0 0 32px", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12 }}>
          <p style={{ margin:0, fontSize:14, color:"#12323A" }}>Not in-network on your plan? Self-pay is a flat <strong>$79</strong> in all our licensed states (HSA/FSA eligible).</p>
          <a href="/insurance/" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"10px 18px", background:"#006B73", color:"#fff", borderRadius:10, fontWeight:700, fontSize:14, textDecoration:"none", whiteSpace:"nowrap" }}>Compare options →</a>
        </div>
<div style={{ marginBottom:48 }}>
          <InsuranceDisclaimer payerNote="Aetna network status reflects our 2026 commercial contract with Aetna under TeleDirectMD's group TIN; Aetna Better Health (Medicaid), Aetna D-SNP, and CHIP are excluded sitewide." />
        </div>
      </div>
    </div>
  );
}
