'use client';
import { B, INSURERS, STATE_NAMES, INSURANCE_CONDITIONS } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';
import { CitableSummaryBlock } from '../../components/CitableSummary';
import { summarizeInsurerHub, citableSummaryToJsonLd } from '../../../lib/citable-summary';
import MedicaidExclusion from '../../components/MedicaidExclusion';

const insurer = INSURERS["blue-cross-blue-shield"];

const BCBS_STATE_AFFILIATES = [
  { code:"FL", name:"Florida", affiliate:"Florida Blue", url:"/fl/" },
  { code:"GA", name:"Georgia", affiliate:"Anthem Blue Cross Blue Shield", url:"/ga/" },
  { code:"IL", name:"Illinois", affiliate:"Blue Cross Blue Shield of Illinois", url:"/il/" },
  { code:"PA", name:"Pennsylvania", affiliate:"Highmark Blue Cross Blue Shield", url:"/pa/" },
  { code:"TX", name:"Texas", affiliate:"Blue Cross Blue Shield of Texas", url:"/tx/" },
];

const BCBS_FAQS = [
  { q: "Which Blue Cross Blue Shield affiliates are in-network with TeleDirectMD?", a: "TeleDirectMD contracts with five BCBS affiliates: Anthem Blue Cross Blue Shield (Georgia), Blue Cross Blue Shield of Illinois (BCBS-IL), Highmark Blue Cross Blue Shield (Pennsylvania), Blue Cross Blue Shield of Texas (BCBS-TX), and Florida Blue (Florida — commercial only). Each affiliate operates an independent network — your card's three-letter prefix determines which affiliate holds your contract." },
  { q: "I have BCBS but I'm visiting from another state — am I covered (BlueCard)?", a: "BlueCard host-state processing applies. If you have a BCBS plan from a state where TeleDirectMD is not directly contracted (for example, BCBS Massachusetts) and you're a resident in one of our contracted states, the host BCBS affiliate processes the claim under BlueCard PPO. Call your home plan's member services before booking to confirm BlueCard PPO is active on your plan." },
  { q: "Florida Blue: which plan types are excluded?", a: "Florida Blue is commercial-only at TeleDirectMD. Florida Blue Medicare Advantage (BlueMedicare), Florida Blue Medicaid, Florida Blue State Group, and the Federal Employee Program (FEP / BCBS Federal) are not in-network. Florida Blue HMO BlueOptions, BlueSelect, BlueChoice, and BlueCare PPO commercial plans are in-network." },
  { q: "Anthem in Georgia: which products are accepted?", a: "Anthem BCBS Georgia HMO, PPO, EPO, POS, and Medicare Advantage are in-network. Amerigroup Georgia (Anthem's Medicaid product line) is not in-network. Anthem Pathway HMO products on the Georgia individual marketplace are in-network." },
  { q: "Highmark Pennsylvania: which network areas are covered?", a: "Highmark BCBS Pennsylvania (Western PA, Central PA, and Northeast PA service areas) is in-network. Independence Blue Cross (Southeast PA, Philadelphia metro) is a separate BCBS affiliate and is not currently contracted with TeleDirectMD. Check the back of your card for 'Highmark' branding to confirm." },
  { q: "BCBS-Texas: any commercial-only restrictions?", a: "BCBS-TX is currently commercial-only at TeleDirectMD. BCBS-TX Medicare Advantage is not in-network in Texas. BCBS-TX HMO Blue, PPO Blue Choice, and Blue Advantage HMO commercial plans are in-network. WellMed (a BCBS-TX Medicare Advantage delegate) and BCBS-TX Medicaid (STAR / STAR+PLUS) are not in-network." },
  { q: "BCBS-Illinois: is BlueCare Direct or Blue Precision HMO in-network?", a: "BCBS-IL PPO, HMO Illinois, Blue Advantage HMO, and Blue Choice Preferred PPO commercial plans are in-network. BCBS-IL Medicare Advantage is not in-network (commercial-only contract in IL). BCBS-IL Community plans (Medicaid managed care) are not in-network." },
  { q: "Does TeleDirectMD accept any BCBS Medicaid product?", a: "No. TeleDirectMD is not in-network with any BCBS Medicaid plan, including Amerigroup Georgia (Anthem), BCBS-IL Community, BCBS-TX Medicaid (STAR / STAR+PLUS), or Florida Blue Medicaid. Self-pay $79 visits remain available." },
];

const CONDITIONS_COVERED = [
  "Urinary Tract Infection (UTI)",
  "Sinus Infection",
  "Strep Throat",
  "Ear Infection",
  "Pink Eye",
  "Flu / Influenza",
  "Anthem GA Asthma Refills",
  "Highmark PA Hypertension Refills",
  "BCBS-IL Cholesterol Refills",
  "BCBS-TX Diabetes Refills",
  "Florida Blue Acid Reflux Refills",
  "BlueCard Out-of-State Visits",
  "Cold Sores",
  "Yeast Infection",
  "Contraception Refills",
  "COVID-19 Evaluation",
];

const SCHEMA = {
  "@context":"https://schema.org",
  "@graph":[
    { "@type":"MedicalOrganization","@id":"https://teledirectmd.com/#organization","name":"TeleDirectMD","url":"https://teledirectmd.com","description":"Physician-led telemedicine practice accepting Blue Cross Blue Shield plans in FL, GA, IL, PA, TX.","aggregateRating": getAggregateRating() },
    { "@type":"Physician","@id":"https://teledirectmd.com/#physician","name":"Parth Bhavsar, MD","identifier":{"@type":"PropertyValue","name":"NPI","value":"1104323203"},"medicalSpecialty":"Family Medicine","acceptsInsurance":[{"@type":"HealthInsurancePlan","name":"Blue Cross Blue Shield Commercial Plans"}], ...getReviewBlock() },
    { "@type":"FAQPage","mainEntity":BCBS_FAQS.map(f=>({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a.replace(/<[^>]+>/g,'')} })) },
    { "@type":"WebPage","@id":"https://teledirectmd.com/insurance/blue-cross-blue-shield#webpage","url":"https://teledirectmd.com/insurance/blue-cross-blue-shield","name":"Online Doctor That Accepts Blue Cross Blue Shield | TeleDirectMD","speakable":{"@type":"SpeakableSpecification","cssSelector":["[data-speakable]"]} },
    { "@type":"HowTo","name":"How to book a BCBS-covered telemedicine visit with TeleDirectMD","description":"Three steps to see Dr. Parth Bhavsar, MD by video using your Blue Cross Blue Shield plan.","totalTime":"PT5M","step":[
      {"@type":"HowToStep","position":1,"name":"Identify your BCBS affiliate","text":"Check your member ID card for the affiliate name. TeleDirectMD is in-network with Florida Blue, Anthem BCBS Georgia, BCBS Illinois, Highmark/Independence Blue Cross Pennsylvania, and BCBS Texas."},
      {"@type":"HowToStep","position":2,"name":"Book online","text":"Go to teledirectmd.com/book-online and choose 'Insurance' as your payment method. Enter your BCBS member ID."},
      {"@type":"HowToStep","position":3,"name":"See the physician by video","text":"Join your video visit with Dr. Parth Bhavsar, MD. Pay only your BCBS copay. Prescriptions are sent to your pharmacy immediately after the visit."}
    ]},
    { "@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com"},
      {"@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance"},
      {"@type":"ListItem","position":3,"name":"Blue Cross Blue Shield","item":"https://teledirectmd.com/insurance/blue-cross-blue-shield"},
    ]}    ,
    {
          "@type": "ItemList",
          "@id": "https://teledirectmd.com/insurance/blue-cross-blue-shield#statelist",
          "name": "States where TeleDirectMD is in-network with Blue Cross Blue Shield",
          "numberOfItems": 5,
          "itemListOrder": "https://schema.org/ItemListOrderAscending",
          "itemListElement": [
                {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "TeleDirectMD x Blue Cross Blue Shield - Florida",
                      "url": "https://teledirectmd.com/fl/"
                },
                {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "TeleDirectMD x Blue Cross Blue Shield - Georgia",
                      "url": "https://teledirectmd.com/ga/"
                },
                {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "TeleDirectMD x Blue Cross Blue Shield - Illinois",
                      "url": "https://teledirectmd.com/il/"
                },
                {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "TeleDirectMD x Blue Cross Blue Shield - Pennsylvania",
                      "url": "https://teledirectmd.com/pa/"
                },
                {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "TeleDirectMD x Blue Cross Blue Shield - Texas",
                      "url": "https://teledirectmd.com/tx/"
                }
          ]
    },
  
  ]
};

export default function BCBSHubClient() {
  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: "Book with BCBS ID", desc: "Enter your BCBS member ID (three-letter prefix included) at teledirectmd.com/book-online." },
    { icon: <Ico.Check c={B.teal} s={24} />, title: "Affiliate routing", desc: "We route the claim to your specific BCBS affiliate — Anthem, Highmark, Florida Blue, BCBS-IL, or BCBS-TX." },
    { icon: <Ico.Video c={B.teal} s={24} />, title: "Video visit + e-Rx", desc: "Same-day visit with Dr. Bhavsar, MD. Prescription routed via your BCBS pharmacy benefit." },
  ];

  // ── Citable summary for AI extractors (Blue Cross Blue Shield hub)
  const citableSummary_AI = summarizeInsurerHub({
    insurerName: 'Blue Cross Blue Shield',
    stateCount: insurer?.states?.length || null,
    stateList: insurer?.states ? insurer.states.map(s => STATE_NAMES[s] || s) : null,
    planTypes: "PPO, HMO, EPO, POS, and (state-permitting) Medicare Advantage",
    payerSpecificCopy: "Blue Cross Blue Shield coverage at TeleDirectMD is held through five affiliate contracts: Anthem BCBS Georgia, Highmark BCBS Pennsylvania (Western/Central/Northeast PA only \u2014 not Independence Blue Cross), BCBS Illinois (HCSC), BCBS Texas (HCSC), and Florida Blue (commercial-only). Each affiliate uses its own payer ID and claims clearinghouse. BlueCard PPO host-state processing applies if you carry a BCBS plan from a non-contracted state and visit one of ours. Amerigroup Georgia, BCBS-IL Community, BCBS-TX Medicaid (STAR / STAR+PLUS), and Florida Blue Medicaid are excluded in every state. BCBS-TX, BCBS-IL, and Florida Blue exclude Medicare Advantage.",
  });
  const pageUrl_AI = 'https://teledirectmd.com/insurance/blue-cross-blue-shield/';
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI });


  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix="blue-cross-blue-shield-hub" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"Blue Cross Blue Shield"}]} />

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.color} s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#90C2FF", letterSpacing:"0.04em", textTransform:"uppercase" }}>Blue Cross Blue Shield In-Network</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(30px, 5vw, 46px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>
            Online Doctor Visits Covered<br />by Blue Cross Blue Shield
          </h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(16px, 2.5vw, 19px)", color:"rgba(255,255,255,0.75)", lineHeight:1.6, margin:"0 0 28px", maxWidth:600 }}>
            TeleDirectMD is in-network with select BCBS affiliate plans in Florida, Georgia, Illinois, Pennsylvania, and Texas. Board-certified physician. Same-day video visits.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
              <Ico.Cal c={B.white} s={18} /> Book with BCBS
            </a>
            <a href="/insurance" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 24px", background:"rgba(255,255,255,0.1)", color:B.white, borderRadius:B.rs, fontWeight:600, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,0.2)" }}>
              Check Other Insurance
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>

        {/* QUICK ANSWER — AI visibility */}
        <AnswerBlock
          question="Is TeleDirectMD in-network with Blue Cross Blue Shield?"
          answer="Yes, for specific BCBS state affiliates. TeleDirectMD is in-network with BCBS commercial plans in 5 states: Florida (Florida Blue), Georgia (Anthem BCBS GA), Illinois (BCBS IL), Pennsylvania (Highmark / Independence Blue Cross), and Texas (BCBS TX). Check your member ID card for the affiliate name, then book a same-day video visit with Dr. Parth Bhavsar, MD."
          color={B.teal}
        />

        {/* IMPORTANT: BCBS affiliate note */}
        <div style={{ background:"#EAF2FF", border:`1px solid ${insurer.color}33`, borderRadius:B.r, padding:"20px 24px", marginBottom:40, display:"flex", gap:14, alignItems:"flex-start" }}>
          <Ico.Shield c={insurer.color} s={22} />
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:B.navy, marginBottom:6 }}>Important: BCBS Coverage Varies by State Affiliate</div>
            <p style={{ fontSize:14, color:B.text, margin:0, lineHeight:1.6 }}>Blue Cross Blue Shield is a federation of independent, locally licensed plans. TeleDirectMD is in-network with five specific BCBS affiliates. If your BCBS card shows one of the affiliates listed below, your visit may be covered. If you are unsure, check your member ID card for the affiliate name.</p>
          </div>
        </div>

        {/* STATE AFFILIATES */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>BCBS Affiliates We Accept by State</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Click your state to see detailed coverage information for your specific BCBS affiliate.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:12 }}>
            {BCBS_STATE_AFFILIATES.map((st) => (
              <a key={st.code} href={st.url}
                style={{ display:"block", background:B.white, border:`1px solid ${insurer.color}22`, borderRadius:B.r, padding:"20px 20px", textDecoration:"none", boxShadow:B.shadow, borderTop:`3px solid ${insurer.color}` }}>
                <div style={{ fontSize:16, fontWeight:700, color:B.navy, marginBottom:4 }}>{st.name}</div>
                <div style={{ fontSize:13, color:insurer.color, fontWeight:600, marginBottom:8 }}>{st.affiliate}</div>
                <div style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:B.text }}>
                  <Ico.Arrow c={B.text} s={12} /> View coverage details
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONDITIONS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions Covered by BCBS Telemedicine</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>BCBS plans typically cover the following conditions when treated via telehealth at TeleDirectMD:</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:10 }}>
            {CONDITIONS_COVERED.map((cond,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 16px", boxShadow:B.shadow }}>
                <Ico.Check c="#1A5FB4" s={16} />
                <span style={{ fontSize:14, fontWeight:500, color:B.navy }}>{cond}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>How to Use Your BCBS Insurance</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px", lineHeight:1.6 }}>Using your Blue Cross Blue Shield benefits with TeleDirectMD is straightforward.</p>
          <HowItWorksSteps insurerName="Blue Cross Blue Shield" customSteps={customSteps} />
        </section>

        <section style={{ marginBottom:48 }}><BookCTA insurerName="Blue Cross Blue Shield" tagline="Anthem GA, Highmark PA, BCBS-IL, BCBS-TX, and Florida Blue — each affiliate routed to the right payer ID before your visit." subtagline="Out-of-state BCBS members visiting our states are processed via BlueCard PPO; or pay $79 self-pay." /></section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix="bcbs-hub" />

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:26, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>BCBS & TeleDirectMD: Frequently Asked Questions</h2>
          <p style={{ fontSize:15, color:B.text, margin:"0 0 24px" }}>Common questions about using your Blue Cross Blue Shield benefits for telemedicine.</p>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {BCBS_FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        
        {/* EXPLORE LINKS — top-6 BCBS combos */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>Top BCBS telehealth combinations by affiliate</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {[
              { slug: 'uti-treatment-online', label: 'UTI (Anthem GA / Highmark PA)' },
              { slug: 'sinus-infection-treatment-online', label: 'Sinus infection (BCBS-IL / BCBS-TX)' },
              { slug: 'pink-eye-treatment-online', label: 'Pink eye (Florida Blue)' },
              { slug: 'sore-throat-treatment-online', label: 'Strep throat (Anthem GA)' },
              { slug: 'yeast-infection-treatment-online', label: 'Yeast infection (Highmark PA)' },
              { slug: 'ear-pain-treatment-online', label: 'Ear infection (BlueCard PPO)' },
            ].map((c, i) => (
              <a key={i} href={`/insurance/blue-cross-blue-shield/${c.slug}`}
                style={{ display:"block", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"14px 16px", textDecoration:"none", boxShadow:B.shadow }}>
                <div style={{ fontSize:14, fontWeight:600, color:B.navy }}>{c.label}</div>
                <div style={{ fontSize:12, color:B.text, marginTop:2 }}>Affiliate-specific copay · check Blue Card prefix</div>
              </a>
            ))}
          </div>
        </section>
        {/* Compact link out to /insurance/ — full cost comparison lives there */}
        <div style={{ background:"#F3FAFB", border:"1px solid #DDE3E6", borderRadius:18, padding:"18px 22px", margin:"0 0 32px", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12 }}>
          <p style={{ margin:0, fontSize:14, color:"#12323A" }}>Not in-network on your plan? Self-pay is a flat <strong>$79</strong> in all our licensed states (HSA/FSA eligible).</p>
          <a href="/insurance/" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"10px 18px", background:"#006B73", color:"#fff", borderRadius:10, fontWeight:700, fontSize:14, textDecoration:"none", whiteSpace:"nowrap" }}>Compare options →</a>
        </div>
<div style={{ marginBottom:48 }}><InsuranceDisclaimer payerNote="BCBS network status reflects five affiliate contracts (Anthem GA, Highmark PA, BCBS-IL, BCBS-TX, Florida Blue). Amerigroup GA, BCBS-IL Community, BCBS-TX Medicaid, and Florida Blue Medicaid are excluded." /></div>
      </div>
    </div>
  );
}
