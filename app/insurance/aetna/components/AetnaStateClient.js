'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS, INSURERS, COPAY_DATA, STATE_INSURANCE_MAP, STATE_PLAN_DETAILS, LAST_REVIEWED } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, PatientJourney, CrossInsurerTable, CommissionerLink, InsurerTrustDetails } from '../../components/InsuranceShared';
import { CompareToOtherTelehealthGrid, Or49CashLink } from '../../../components/CostCompareModules';
import { Ico } from '../../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../../lib/review-schema';
import { CitableSummaryBlock } from '../../../components/CitableSummary';
import { FlCredentialBlock, FlFooterCompliance } from '../../../components/FlCompliance';
import { summarizeInsuranceStateLanding, citableSummaryToJsonLd } from '../../../../lib/citable-summary';

const insurer = INSURERS.aetna;

const STATE_CODE_MAP = { arizona:"AZ", california:"CA", colorado:"CO", florida:"FL", georgia:"GA", illinois:"IL", louisiana:"LA", michigan:"MI", minnesota:"MN", "north-carolina":"NC", ohio:"OH", pennsylvania:"PA", tennessee:"TN", washington:"WA" };

const STATE_CONTEXT = {
  AZ:{cities:["Phoenix","Tucson","Scottsdale","Mesa","Chandler"],note:"Arizona requires telehealth payment parity under ARS § 20-1376.05 (effective September 29, 2021, via HB 2454), enforced by the Arizona Department of Insurance and Financial Institutions (DIFI). Aetna commercial plans in Arizona — including PPO, HMO, and HSA-eligible products — must reimburse synchronous video visits at the same rate as equivalent in-person services. Arizona's dominant clinical telehealth drivers are valley fever (coccidioidomycosis), with 14,763 reported cases in 2024 (Arizona Department of Health Services), and heat-related illness, which generates roughly 4,298 ER visits per year statewide — both conditions well-suited to telehealth triage and follow-up. Maricopa County (Phoenix metro, ~4.5M residents) and Pima County (Tucson, ~1.1M) together represent approximately 85% of Arizona's commercially insured population. Aetna's Arizona employer-market penetration is strongest in the Phoenix metro, where the state's largest employers concentrate Aetna PPO and Open Access plan enrollment."},
  CA:{cities:["Los Angeles","San Diego","San Jose","San Francisco","Fresno"],note:"California has some of the strongest telehealth parity laws in the country, requiring commercial insurers including Aetna to reimburse video visits comparably to in-person care. Aetna's California commercial plan footprint covers most major metros, making same-day telemedicine highly accessible for Aetna members statewide."},
  CO:{cities:["Denver","Aurora","Colorado Springs","Boulder","Fort Collins"],note:"Colorado's active, health-conscious population and high altitude make same-day telehealth especially convenient. Aetna and UHC are both in-network at TeleDirectMD in Colorado — two options for most Colorado employer plan members."},
  FL:{cities:["Miami","Orlando","Tampa","Jacksonville","Fort Lauderdale"],note:"Florida is one of TeleDirectMD's largest markets. Aetna and Florida Blue (BCBS) are both in-network, giving most Florida residents at least one insurance option for same-day telehealth care."},
  GA:{cities:["Atlanta","Savannah","Augusta","Columbus","Macon"],note:"Georgia is TeleDirectMD's home state and core market. All three major insurers — Aetna, Anthem BCBS, and UHC — are in-network for Georgia residents, giving the broadest multi-insurer coverage of any state we serve."},
  IL:{cities:["Chicago","Aurora","Naperville","Joliet","Rockford"],note:"Illinois mandates telehealth payment parity under 215 ILCS 5/356z.22 (Public Act 102-0678), currently extended through January 1, 2028 for non-mental-health services; mental health parity is permanent under separate statute. The Illinois Department of Insurance directed all carriers to cover telehealth without arbitrary restriction via IDOI Bulletin CB2020-04. Aetna commercial plans in Illinois include the state employee group plans (QCHP, the Aetna PPO, and Aetna HMO offered through CMS Illinois) plus large employer-sponsored commercial groups concentrated in Cook County and the northern suburban collar counties (DuPage, Lake, Kane). Illinois has three TeleDirectMD-accepted insurers: Aetna, BCBS of Illinois, and UnitedHealthcare. The state's distinctive clinical telehealth driver is tick-borne illness, particularly Lyme disease in Cook and Lake counties, where doxycycline initiation and 14-day symptom follow-up fit telehealth well. Note that the non-mental-health parity provision sunsets January 1, 2028 absent legislative renewal."},
  LA:{cities:["New Orleans","Baton Rouge","Shreveport","Lafayette","Lake Charles"],note:"Louisiana Aetna commercial plans are in-network with TeleDirectMD for adult telehealth visits. The Baton Rouge state capital and New Orleans metro concentrate the state's commercially insured population; Aetna operates statewide across employer-sponsored group plans and marketplace commercial products. Louisiana's clinical telehealth drivers include hypertension management (Louisiana ranks among the top states for adult hypertension prevalence), diabetes follow-up, and post-hurricane-season respiratory and skin conditions during high-humidity months."},
  MI:{cities:["Detroit","Grand Rapids","Ann Arbor","Lansing","Flint"],note:"Michigan residents with Aetna commercial plans can access TeleDirectMD's physician-led telemedicine statewide. Michigan has robust telehealth parity regulations, meaning Aetna telehealth copays are regulated to match or beat in-person rates."},
  MN:{cities:["Minneapolis","Saint Paul","Rochester","Duluth","Bloomington"],note:"Minnesota's Telehealth Act (Minnesota Statutes § 62A.673, enacted 2021) requires full payment parity, extends audio-only telehealth coverage through July 1, 2027, and includes a notable anti-network-ghetto provision under § 62A.673 subd. 5 that prohibits insurers from segregating telehealth providers into virtual-only tiers with inferior reimbursement. Aetna's primary commercial product in Minnesota is the Allina Health | Aetna joint-venture HMO, an integrated plan tied to the Allina Health hospital network in the Twin Cities; Aetna also offers standard commercial group plans through national employer accounts. Minnesota's clinical telehealth drivers include cold-climate respiratory illness (extended indoor season elevates URI and influenza incidence), Lyme disease in southeastern counties, and behavioral health — the latter supported by Minnesota's strong mental health parity framework. The Twin Cities (Hennepin and Ramsey counties) and Rochester (Olmsted County, home to Mayo Clinic) concentrate the state's commercially insured population."},
  NC:{cities:["Charlotte","Raleigh","Greensboro","Durham","Winston-Salem"],note:"North Carolina Aetna commercial plans are in-network with TeleDirectMD. Aetna's presence is strongest in the Charlotte metro (Mecklenburg County) and the Research Triangle (Wake, Durham, Orange counties) where large employer groups — including financial services, universities, and healthcare systems — concentrate Aetna PPO and Open Access enrollment. North Carolina's Telemedicine Payment Parity requirements applied to commercial plans, and Aetna commercial telehealth copays typically match the in-person primary-care copay. Clinical telehealth drivers include hypertension management, seasonal allergies (heavy pollen counts in spring), and skin conditions common to the Piedmont climate."},
  OH:{cities:["Columbus","Cleveland","Cincinnati","Toledo","Akron"],note:"Ohio is a strong two-insurer market with both Aetna and UHC in-network at TeleDirectMD. Ohio employer plans frequently carry $0 telehealth copays — especially for large employers in Columbus and Cleveland."},
  PA:{cities:["Philadelphia","Pittsburgh","Allentown","Erie","Reading"],note:"Pennsylvania has the broadest insurance coverage at TeleDirectMD: Aetna, Highmark BCBS, and UHC are all in-network, covering most Pennsylvania employer plan members across both the Philadelphia and Pittsburgh markets."},
  TN:{cities:["Nashville","Memphis","Knoxville","Chattanooga","Clarksville"],note:"Tennessee residents with Aetna or UHC commercial plans can access TeleDirectMD. Nashville's major employer base — including HCA Healthcare, Vanderbilt, and large tech companies — makes commercial insurance especially prevalent."},
  WA:{cities:["Seattle","Spokane","Tacoma","Bellevue","Vancouver"],note:"Washington residents with Aetna or UHC commercial plans can access TeleDirectMD. Washington requires commercial insurers to reimburse telehealth at parity with in-person care, and the Seattle–Bellevue tech corridor concentrates the state's commercially insured population."},
};

export default function AetnaStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const ctx = STATE_CONTEXT[stateCode] || { cities:[], note:"" };
  const copayData = COPAY_DATA.aetna?.[stateCode];
  const stateInfo = STATE_INSURANCE_MAP[stateCode];
  const planDetail = STATE_PLAN_DETAILS.aetna?.[stateCode];

  const FAQS = [
    { q:`Is TeleDirectMD in-network with Aetna in ${stateName}?`, a:`Yes. TeleDirectMD is contracted as an in-network telehealth provider with Aetna commercial plans in ${stateName}. Dr. Parth Bhavsar, MD (NPI: 1104323203) is the treating physician. If you have an Aetna employer-sponsored or individual commercial plan in ${stateName}, your telehealth visit may be covered subject to your plan's copay or deductible. Claims are submitted electronically using CPT codes 99213/99214.` },
    { q:`What is the Aetna telehealth copay in ${stateName}?`, a:`${copayData ? `Most Aetna commercial plans in ${stateName} have telehealth copays of ${copayData.typical}. ${copayData.employer}. ${copayData.note}` : `Aetna commercial plan telehealth copays in ${stateName} typically range from $0 to $40.`} Log into your Aetna member portal at aetna.com or call the member services number on your Aetna card to verify your exact cost. Self-pay is always available for $79 flat.` },
    { q:`Does Aetna cover telemedicine in ${stateName}?`, a:`Yes. Aetna covers telehealth visits for most commercial plan members in ${stateName}. Federal telehealth parity requirements and ${stateName} state law ensure that Aetna must cover telehealth services comparably to in-person visits for most commercial plans. Your actual cost depends on your plan's copay, coinsurance, and deductible status. Medicaid, Medicare fee-for-service, and Aetna Better Health (Medicaid) are not accepted.` },
    { q:`What conditions does Aetna cover for telemedicine in ${stateName}?`, a:`Aetna commercial plans in ${stateName} cover telehealth visits for UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Coverage depends on your specific plan benefits. Use the conditions grid below to explore specific condition + Aetna + ${stateName} coverage details.` },
    { q:`How do I book a TeleDirectMD visit using Aetna in ${stateName}?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your Aetna member ID card ready. We verify your coverage before your visit begins. You can also book self-pay for $79 flat — no insurance required, same physician and quality of care.` },
    { q:`How does TeleDirectMD bill Aetna for my visit in ${stateName}?`, a:`TeleDirectMD submits your claim electronically to Aetna using CPT code 99213 (standard complexity) or 99214 (moderate complexity). Aetna processes the claim and applies it to your benefits. You'll receive an Explanation of Benefits (EOB) from Aetna within 2–4 weeks showing what was billed (typically $150–$250) and your responsibility (your copay or deductible portion). Questions? Call Aetna member services at 1-888-632-3862.` },
    { q:`What Aetna plans are NOT accepted at TeleDirectMD in ${stateName}?`, a:`The following Aetna plan types are not accepted: Aetna Medicaid, Aetna Better Health (Medicaid), Medicare fee-for-service, and Aetna Medicare Advantage plans. If you are unsure about your plan type, self-pay is available for $79 flat — same physician and care quality, no insurance required.` },
    { q:`Can I use my Aetna FSA or HSA for a TeleDirectMD visit in ${stateName}?`, a:`Yes. Telehealth visits with a licensed physician are qualified medical expenses eligible for FSA and HSA payment. If your Aetna plan applies your deductible before covering the visit, your FSA or HSA card can be used to pay your cost-sharing. The $79 self-pay option is also FSA/HSA eligible.` },
    { q:`Does Aetna in ${stateName} cover my prescription from the telehealth visit?`, a:`Aetna covers the telehealth visit under your medical benefit. Prescription coverage is handled by your Aetna pharmacy benefit. Most first-line medications for common conditions (antibiotics, antivirals, PPIs, antihypertensives) are Tier 1 generic drugs covered by virtually all Aetna commercial plans for $4–$15. Check your Aetna formulary at aetna.com or ask your pharmacy.` },
    { q:`What if my specific Aetna plan in ${stateName} is not covered?`, a:`If your specific Aetna plan is not in-network with TeleDirectMD in ${stateName}, you can still see Dr. Bhavsar, MD as a self-pay patient for a flat $79 fee. You may also submit an out-of-network claim to Aetna for partial reimbursement depending on your plan's out-of-network benefit.` },
    { q:`How do I verify my Aetna telehealth benefits before booking in ${stateName}?`, a:`Log into your Aetna member portal at aetna.com, navigate to "Benefits," and look for "Telehealth" or "Virtual Care" under your plan details. You can also call the member services number on the back of your Aetna card. When calling, ask: "Is TeleDirectMD in-network for telehealth?" and "What is my telehealth copay?" Have your member ID ready.` },
    { q:`Is there a difference between Aetna telehealth and in-person copays in ${stateName}?`, a:`In most Aetna commercial plans in ${stateName}, telehealth copays are equal to or lower than your primary care in-person copay. Many employer-sponsored Aetna plans carry $0 telehealth copays — particularly since the post-pandemic expansion of telehealth benefits. Your specific plan determines the exact amount. Log into aetna.com to confirm your telehealth cost-sharing.` },
  ];

  const SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": `Online Doctor That Accepts Aetna in ${stateName}`,
        "description": `TeleDirectMD is in-network with Aetna commercial plans in ${stateName}. Board-certified physician Dr. Parth Bhavsar, MD (NPI: 1104323203). Same-day video visits — your Aetna copay applies${copayData ? ` (typically ${copayData.typical})` : ""}.`,
        "url": `https://teledirectmd.com/insurance/aetna/${stateSlug}`,
        "lastReviewed": LAST_REVIEWED,
        "reviewedBy": { "@type": "Physician", "name": "Parth Bhavsar, MD", "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" } },
        "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]"] },
      },
      {
        "@type": "Physician",
        "name": "Parth Bhavsar, MD",
        "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
        "medicalSpecialty": "Family Medicine",
        "areaServed": { "@type": "State", "name": stateName },
        "acceptsInsurance": planDetail
          ? planDetail.plans.map(p => ({
              "@type": "HealthInsurancePlan",
              "name": p.name,
              "healthPlanNetworkTier": p.productType,
              "usesHealthPlanIdStandard": "Aetna",
              "areaServed": { "@type": "State", "name": stateName },
            }))
          : [{ "@type": "HealthInsurancePlan", "name": `Aetna Commercial Plans — ${stateName}` }],
        ...getReviewBlock(),
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://teledirectmd.com/#organization",
        "name": "TeleDirectMD",
        "url": "https://teledirectmd.com",
        "medicalSpecialty": "General Practice",
        "areaServed": { "@type": "State", "name": stateName },
        "aggregateRating": getAggregateRating(),
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type":"ListItem","position":1,"name":"Home","item":"https://teledirectmd.com" },
          { "@type":"ListItem","position":2,"name":"Insurance","item":"https://teledirectmd.com/insurance" },
          { "@type":"ListItem","position":3,"name":"Aetna","item":"https://teledirectmd.com/insurance/aetna" },
          { "@type":"ListItem","position":4,"name":stateName,"item":`https://teledirectmd.com/insurance/aetna/${stateSlug}` },
        ],
      },
    ],
  };

  // ── Citable summary for AI extractors (Aetna × State landing)
  const citableSummary_AI = summarizeInsuranceStateLanding({
    insurerName: 'Aetna',
    stateName,
    copayTypical: copayData?.typical,
    planCount: planDetail?.plans?.length,
    effectiveDate: planDetail?.effectiveDate,
  });
  const pageUrl_AI = `https://teledirectmd.com/insurance/aetna/${stateSlug}/`;
  const citableJsonLd_AI = citableSummaryToJsonLd(citableSummary_AI, { pageUrl: pageUrl_AI });

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <CitableSummaryBlock summary={citableSummary_AI} jsonLd={citableJsonLd_AI} idSuffix={`aetna-${stateSlug}`} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"Aetna",href:"/insurance/aetna"},{label:stateName}]} />
      {/* FL: A1 credential disclosure + A3 verify-link placement 1 of 3. */}
      {stateCode === 'FL' && <FlCredentialBlock />}

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c="#C084FC" s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#C084FC", letterSpacing:"0.04em", textTransform:"uppercase" }}>Aetna In-Network — {stateName}</span>
          </div>
          {planDetail && (
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(192,132,252,0.12)", borderRadius:100, padding:"6px 14px", marginBottom:20, marginLeft:8, border:"1px solid rgba(192,132,252,0.25)" }}>
              <span style={{ fontFamily:B.fb, fontSize:12, fontWeight:600, color:"#E9D5FF", letterSpacing:"0.02em" }}>Effective {planDetail.effectiveDate}</span>
            </div>
          )}
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(28px, 5vw, 44px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>Online Doctor That Accepts<br />Aetna Insurance in {stateName}</h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.80)", lineHeight:1.65, margin:"0 0 10px", maxWidth:600 }}>
            TeleDirectMD is in-network with Aetna commercial plans in {stateName}. See a board-certified physician by video — your standard Aetna copay applies{copayData ? ` (typically ${copayData.typical})` : ""}.
          </p>
          {ctx.note && <p style={{ fontFamily:B.fb, fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.6, margin:"0 0 24px", maxWidth:580 }}>{ctx.note}</p>}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
            <Ico.Cal c={B.white} s={18} /> Book with Aetna in {stateName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>

        {/* ANSWER BLOCK */}
        <AnswerBlock
          question={`Does Aetna cover telemedicine visits in ${stateName}?`}
          answer={`Yes — TeleDirectMD is in-network with Aetna commercial plans in ${stateName}. Dr. Parth Bhavsar, MD evaluates your symptoms by secure video and sends prescriptions directly to your ${stateName} pharmacy if appropriate. Your standard Aetna copay applies${copayData ? ` — typically ${copayData.typical} for most ${stateName} commercial plans` : ""}. Self-pay is $79 flat if you prefer.`}
          color={insurer.color}
        />

        {/* COPAY CARD */}
        {copayData && <CopayCard insurerName="Aetna" stateName={stateName} copayData={copayData} insurerColor={insurer.color} />}

        {/* CONTRACTED PLANS — only when verified contract data exists for this state */}
        {planDetail && (
          <section style={{ marginBottom:40, padding:"24px 24px", background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, boxShadow:B.shadow }} data-speakable="true">
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
              <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:0 }}>Aetna Plans Accepted in {stateName}</h2>
              <span style={{ fontFamily:B.fb, fontSize:11, fontWeight:700, color:"#7B2CBF", background:"#F3EAFF", padding:"4px 10px", borderRadius:100, letterSpacing:"0.04em", textTransform:"uppercase" }}>Effective {planDetail.effectiveDate}</span>
            </div>
            <p style={{ fontSize:14, color:B.text, margin:"0 0 16px", lineHeight:1.65 }}>
              TeleDirectMD is contracted with Aetna {planDetail.productLines.join(", ")} in {stateName} as of <time dateTime={planDetail.effectiveDateISO}>{planDetail.effectiveDate}</time>. The following Aetna {stateName} plan families are in-network for telehealth visits with Dr. Parth Bhavsar, MD (NPI: 1104323203):
            </p>
            <ul style={{ listStyle:"none", padding:0, margin:"0 0 16px", display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:8 }}>
              {planDetail.plans.map((p,i) => (
                <li key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", background:"#F9FAFB", border:`1px solid ${B.border}`, borderRadius:B.rs }}>
                  <Ico.Check c="#7B2CBF" s={14} />
                  <span style={{ fontSize:13.5, fontWeight:500, color:B.navy, lineHeight:1.35 }}>{p.name}</span>
                  <span style={{ marginLeft:"auto", fontSize:10, fontWeight:700, color:"#7B2CBF", background:"#F3EAFF", padding:"2px 8px", borderRadius:100, letterSpacing:"0.04em" }}>{p.productType}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize:13, color:B.text, margin:"0 0 8px", lineHeight:1.6 }}>
              <strong style={{ color:B.navy }}>Not accepted:</strong> {planDetail.excludedLines.join(", ")}. If you have one of these plan types, self-pay is available for $79 flat — same physician, same care.
            </p>
            <p style={{ fontSize:12, color:"#6B7280", margin:0, lineHeight:1.6 }}>{planDetail.note}</p>
          </section>
        )}

        {/* CONDITIONS GRID */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions Aetna Covers via Telehealth in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 16px", lineHeight:1.6 }}>Select a condition to see Aetna + {stateName} specific coverage details, copay estimates, and prescription information.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/aetna/${stateSlug}/${cond.slug}`} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow }}>
                <Ico.Check c="#7B2CBF" s={15} />
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize:11, color:"#7B2CBF" }}>Aetna · {stateName} · {cond.icd10}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SELF-PAY CROSS-LINKS — internal linking for AI visibility */}
        <section style={{ marginBottom:40, padding:"20px 24px", background:B.colorLight || "#F9FAFB", border:`1px solid ${B.border}`, borderRadius:B.r }} data-speakable="true">
          <h2 style={{ fontFamily:B.fd, fontSize:20, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Without Aetna? Self-Pay Options in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 12px", lineHeight:1.6 }}>No Aetna plan or uninsured? TeleDirectMD offers $79 self-pay video visits for the same conditions in {stateName}. Browse self-pay options:</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            <a href={`/${stateCode.toLowerCase()}/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>All conditions in {stateName} →</a>
            <a href={`/${stateCode.toLowerCase()}/uti-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>UTI →</a>
            <a href={`/${stateCode.toLowerCase()}/sinus-infection-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Sinus Infection →</a>
            <a href={`/${stateCode.toLowerCase()}/sore-throat-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Strep Throat →</a>
            <a href={`/${stateCode.toLowerCase()}/influenza-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Flu →</a>
          </div>
        </section>

        {/* CITIES */}
        {ctx.cities.length > 0 && (
          <section style={{ marginBottom:40 }}>
            <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Serving Aetna Members Across {stateName}</h2>
            <p style={{ fontSize:15, color:B.text, margin:0, lineHeight:1.7 }}>
              TeleDirectMD serves Aetna members throughout {stateName}, including {ctx.cities.join(", ")}, and all surrounding areas. Care is delivered via secure video — your location within {stateName} does not affect your eligibility to book. As long as you are physically in {stateName} during your visit, your Aetna coverage applies.
            </p>
            {stateInfo?.majorEmployers && (
              <p style={{ fontSize:14, color:B.text, margin:"12px 0 0", lineHeight:1.7 }}>
                Major {stateName} employers whose plans may be in-network with TeleDirectMD via Aetna include: {stateInfo.majorEmployers.join(", ")}. Verify your specific plan at aetna.com.
              </p>
            )}
          </section>
        )}

        {/* HOW IT WORKS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>How to Use Your Aetna Benefits in {stateName}</h2>
          <HowItWorksSteps insurerName="Aetna" />
        </section>

        {/* PATIENT JOURNEY */}
        <PatientJourney insurerName="Aetna" conditionName="your condition" />

        {/* CROSS-INSURER TABLE */}
        <CrossInsurerTable stateCode={stateCode} stateName={stateName} currentInsurer="aetna" />

        {/* INSURER TRUST */}
        <InsurerTrustDetails insurer={insurer} />

        <section style={{ marginBottom:48 }}><BookCTA insurerName="Aetna" /></section>

        {/* FAQ */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Aetna + {stateName}: Frequently Asked Questions</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href="/insurance/aetna" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← All Aetna States</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>All Insurance Options</a>
        </div>

        <CommissionerLink stateCode={stateCode} stateName={stateName} />

        {/* Cost-page link + compare-grid (PR 3 of cost-and-compare sprint) */}
        <Or49CashLink />
        <CompareToOtherTelehealthGrid heading="Compare TeleDirectMD to Other Telehealth Providers" />

        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
      {/* FL: A2 no-in-person-care + A4 standard-of-care (softer) + A3 verify-link placement 2 of 3. */}
      {stateCode === 'FL' && <FlFooterCompliance idSuffix={`aetna-${stateSlug}-fl-compliance`} />}
    </div>
  );
}
