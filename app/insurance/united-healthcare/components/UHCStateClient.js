'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS, INSURERS, COPAY_DATA, STATE_INSURANCE_MAP, LAST_REVIEWED } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, PatientJourney, CrossInsurerTable, CommissionerLink, InsurerTrustDetails } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../../lib/review-schema';

const insurer = INSURERS['united-healthcare'];

const STATE_CODE_MAP = { colorado:'CO', georgia:'GA', illinois:'IL', minnesota:'MN', 'north-carolina':'NC', 'new-jersey':'NJ', ohio:'OH', oklahoma:'OK', pennsylvania:'PA', tennessee:'TN', washington:'WA' };

const STATE_CONTEXT = {
  CO:{cities:['Denver','Aurora','Colorado Springs','Boulder','Fort Collins'],note:"UnitedHealthcare is a major commercial insurer in Colorado with strong Denver metro employer plan presence. Colorado's active, tech-forward population embraces telehealth. Aetna is also in-network in Colorado, giving two insurer options for most residents."},
  GA:{cities:['Atlanta','Savannah','Augusta','Columbus','Macon'],note:"Georgia is TeleDirectMD's home state. All three major insurers — Aetna, Anthem BCBS, and UHC — are in-network, giving Georgia residents the broadest multi-insurer telehealth coverage in our network."},
  IL:{cities:['Chicago','Aurora','Naperville','Joliet','Rockford'],note:"Illinois is a three-insurer market at TeleDirectMD. UHC, Aetna, and BCBS IL are all in-network, covering the vast majority of Illinois commercial plan members including the large Chicago employer base."},
  MN:{cities:['Minneapolis','Saint Paul','Rochester','Duluth','Bloomington'],note:"UnitedHealthcare is headquartered in Minnesota — making it the dominant commercial insurer in the state. TeleDirectMD is in-network with UHC in Minnesota, where UHC employer plans are by far the most common commercial coverage."},
  NC:{cities:['Charlotte','Raleigh','Greensboro','Durham','Winston-Salem'],note:"North Carolina's fast-growing Research Triangle and Charlotte metro drive strong UHC commercial plan enrollment. UHC is a major insurer for tech, banking, and healthcare employers in North Carolina."},
  NJ:{cities:['Newark','Jersey City','Paterson','Elizabeth','Edison'],note:"New Jersey is one of the most densely insured states in the country. UHC has significant commercial presence in NJ, particularly for mid-to-large employer plans in the New York metro area."},
  OH:{cities:['Columbus','Cleveland','Cincinnati','Toledo','Akron'],note:"Ohio is a strong two-insurer market with both UHC and Aetna in-network at TeleDirectMD. Ohio UHC employer plans frequently carry $0 virtual care copays for large employer groups."},
  OK:{cities:['Oklahoma City','Tulsa','Norman','Broken Arrow','Edmond'],note:"UnitedHealthcare is a leading commercial insurer in Oklahoma. TeleDirectMD brings physician-led telehealth to Oklahoma UHC commercial members statewide."},
  PA:{cities:['Philadelphia','Pittsburgh','Allentown','Erie','Reading'],note:"Pennsylvania has TeleDirectMD's broadest multi-insurer coverage: Aetna, Highmark BCBS, and UHC all in-network. UHC is especially strong in the Philadelphia market and large PA employer plans."},
  TN:{cities:['Nashville','Memphis','Knoxville','Chattanooga','Clarksville'],note:"Tennessee's major employer base — HCA Healthcare, Vanderbilt, FedEx, Dollar General — makes commercial plan coverage especially prevalent. UHC and Aetna are both in-network at TeleDirectMD in Tennessee."},
  WA:{cities:['Seattle','Spokane','Tacoma','Bellevue','Everett'],note:"Washington State's large tech employer base in the Seattle–Bellevue corridor drives strong UHC commercial plan enrollment. Amazon, Microsoft, Boeing, and Costco are among the state's major employers with common UHC plans."},
};

export default function UHCStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const ctx = STATE_CONTEXT[stateCode] || { cities:[], note:"" };
  const copayData = COPAY_DATA['united-healthcare']?.[stateCode];
  const stateInfo = STATE_INSURANCE_MAP[stateCode];

  const FAQS = [
    { q:`Is TeleDirectMD in-network with UnitedHealthcare in ${stateName}?`, a:`Yes. TeleDirectMD is contracted as an in-network telehealth provider with UnitedHealthcare (UHC) commercial plans in ${stateName}. Dr. Parth Bhavsar, MD (NPI: 1104323203) is the treating physician. If you have a UHC employer-sponsored or individual commercial plan in ${stateName}, your telehealth visit may be covered subject to your plan's copay or deductible. Claims are submitted electronically using CPT codes 99213/99214.` },
    { q:`What is the UnitedHealthcare telehealth copay in ${stateName}?`, a:`${copayData ? `Most UHC commercial plans in ${stateName} have telehealth copays of ${copayData.typical}. ${copayData.employer}. ${copayData.note}` : `UHC commercial plan telehealth copays in ${stateName} typically range from $0 to $40.`} Log into your UHC member portal at myuhc.com or call the member services number on your UHC card to verify your exact cost. Self-pay is always available for $49 flat.` },
    { q:`Does UnitedHealthcare cover telemedicine in ${stateName}?`, a:`Yes. UHC covers telehealth visits for most commercial plan members in ${stateName}. Federal telehealth parity requirements and ${stateName} state law ensure that UnitedHealthcare must cover telehealth services comparably to in-person visits for most commercial plans. Your actual cost depends on your plan's copay, coinsurance, and deductible status. Medicaid, Medicare fee-for-service, and UHC Community Plan (Medicaid) are not accepted.` },
    { q:`What conditions does UnitedHealthcare cover for telemedicine in ${stateName}?`, a:`UHC commercial plans in ${stateName} cover telehealth visits for UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Coverage depends on your specific plan benefits. Use the conditions grid below to explore specific condition + UHC + ${stateName} coverage details.` },
    { q:`How do I book a TeleDirectMD visit using UnitedHealthcare in ${stateName}?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your UHC member ID card ready. We verify your coverage before your visit begins. You can also book self-pay for $49 flat — no insurance required, same physician and quality of care.` },
    { q:`How does TeleDirectMD bill UnitedHealthcare for my visit in ${stateName}?`, a:`TeleDirectMD submits your claim electronically to UnitedHealthcare using CPT code 99213 (standard complexity) or 99214 (moderate complexity). UHC processes the claim and applies it to your benefits. You'll receive an Explanation of Benefits (EOB) from UHC within 2–4 weeks showing what was billed (typically $150–$250) and your responsibility (your copay or deductible portion). Questions? Call UHC member services at ${insurer.claimsPhone}.` },
    { q:`What UnitedHealthcare plans are NOT accepted at TeleDirectMD in ${stateName}?`, a:`The following UHC plan types are not accepted: UHC Community Plan (Medicaid), UHC Medicare Advantage plans, and Medicare fee-for-service. If you are unsure about your plan type, self-pay is available for $49 flat — same physician and care quality, no insurance required.` },
    { q:`Can I use my UHC FSA or HSA for a TeleDirectMD visit in ${stateName}?`, a:`Yes. Telehealth visits with a licensed physician are qualified medical expenses eligible for FSA and HSA payment. If your UHC plan applies your deductible before covering the visit, your FSA or HSA card can be used to pay your cost-sharing. The $49 self-pay option is also FSA/HSA eligible.` },
    { q:`What is the UHC Virtual Care $0 benefit and does it apply in ${stateName}?`, a:`Some UHC employer-sponsored plans in ${stateName} include a UHC Virtual Care benefit with a $0 copay for telehealth visits. Whether this benefit applies depends on your specific employer plan design. Log into myuhc.com or call the member services number on your UHC card and ask: "Does my plan include a $0 virtual care or telehealth benefit?" TeleDirectMD is positioned to accept this benefit where applicable.` },
    { q:`Does UnitedHealthcare in ${stateName} cover my prescription from the telehealth visit?`, a:`UHC covers the telehealth visit under your medical benefit. Prescription coverage is handled by your UHC pharmacy benefit (typically OptumRx). Most first-line medications for common conditions (antibiotics, antivirals, PPIs, antihypertensives) are Tier 1 generic drugs covered by virtually all UHC commercial plans for $4–$15. Check your UHC formulary at myuhc.com or ask your pharmacy.` },
    { q:`How do I verify my UnitedHealthcare telehealth benefits before booking in ${stateName}?`, a:`Log into your UHC member portal at myuhc.com, navigate to "Benefits," and look for "Telehealth" or "Virtual Care" under your plan details. You can also call the member services number on the back of your UHC card. When calling, ask: "Is TeleDirectMD in-network for telehealth?" and "What is my telehealth copay?" Have your member ID ready.` },
    { q:`Is there a difference between UHC telehealth and in-person copays in ${stateName}?`, a:`In most UHC commercial plans in ${stateName}, telehealth copays are equal to or lower than your primary care in-person copay. Many employer-sponsored UHC plans carry $0 telehealth copays — particularly since the post-pandemic expansion of virtual care benefits. Your specific plan determines the exact amount. Log into myuhc.com to confirm your telehealth cost-sharing.` },
  ];

  const SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": `Online Doctor That Accepts UnitedHealthcare in ${stateName}`,
        "description": `TeleDirectMD is in-network with UnitedHealthcare commercial plans in ${stateName}. Board-certified physician Dr. Parth Bhavsar, MD (NPI: 1104323203). Same-day video visits — your UHC copay applies${copayData ? ` (typically ${copayData.typical})` : ""}.`,
        "url": `https://teledirectmd.com/insurance/united-healthcare/${stateSlug}`,
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
        "acceptsInsurance": [{ "@type": "HealthInsurancePlan", "name": `UnitedHealthcare Commercial Plans — ${stateName}` }],
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
          { "@type":"ListItem","position":3,"name":"UnitedHealthcare","item":"https://teledirectmd.com/insurance/united-healthcare" },
          { "@type":"ListItem","position":4,"name":stateName,"item":`https://teledirectmd.com/insurance/united-healthcare/${stateSlug}` },
        ],
      },
    ],
  };

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Insurance",href:"/insurance"},{label:"UnitedHealthcare",href:"/insurance/united-healthcare"},{label:stateName}]} />

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:"56px 24px 64px", position:"relative", overflow:"hidden", marginTop:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize:"32px 32px" }} />
        <div style={{ maxWidth:760, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.08)", borderRadius:100, padding:"8px 16px", marginBottom:24, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c="#6EE7B7" s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:"#6EE7B7", letterSpacing:"0.04em", textTransform:"uppercase" }}>UHC In-Network — {stateName}</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:"clamp(28px, 5vw, 44px)", fontWeight:700, color:B.white, lineHeight:1.15, margin:"0 0 16px" }}>Online Doctor That Accepts<br />UnitedHealthcare Insurance in {stateName}</h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:"clamp(15px, 2.5vw, 18px)", color:"rgba(255,255,255,0.80)", lineHeight:1.65, margin:"0 0 10px", maxWidth:600 }}>
            TeleDirectMD is in-network with UnitedHealthcare commercial plans in {stateName}. See a board-certified physician by video — your standard UHC copay applies{copayData ? ` (typically ${copayData.typical})` : ""}.
          </p>
          {ctx.note && <p style={{ fontFamily:B.fb, fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.6, margin:"0 0 24px", maxWidth:580 }}>{ctx.note}</p>}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:"none" }}>
            <Ico.Cal c={B.white} s={18} /> Book with UHC in {stateName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ margin:"32px 0" }}><TrustBar /></div>

        {/* ANSWER BLOCK */}
        <AnswerBlock
          question={`Does UnitedHealthcare cover telemedicine visits in ${stateName}?`}
          answer={`Yes — TeleDirectMD is in-network with UnitedHealthcare commercial plans in ${stateName}. Dr. Parth Bhavsar, MD evaluates your symptoms by secure video and sends prescriptions directly to your ${stateName} pharmacy if appropriate. Your standard UHC copay applies${copayData ? ` — typically ${copayData.typical} for most ${stateName} commercial plans` : ""}. Self-pay is $49 flat if you prefer.`}
          color={insurer.color}
        />

        {/* COPAY CARD */}
        {copayData && <CopayCard insurerName="UnitedHealthcare" stateName={stateName} copayData={copayData} insurerColor={insurer.color} />}

        {/* CONDITIONS GRID */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Conditions UHC Covers via Telehealth in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 16px", lineHeight:1.6 }}>Select a condition to see UHC + {stateName} specific coverage details, copay estimates, and prescription information.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/united-healthcare/${stateSlug}/${cond.slug}`} style={{ display:"flex", alignItems:"center", gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:"12px 14px", textDecoration:"none", boxShadow:B.shadow }}>
                <Ico.Check c="#1A7A3A" s={15} />
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize:11, color:"#1A7A3A" }}>UHC · {stateName} · {cond.icd10}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CITIES */}
        {/* SELF-PAY CROSS-LINKS — internal linking for AI visibility */}
        <section style={{ marginBottom:40, padding:"20px 24px", background:"#F9FAFB", border:`1px solid ${B.border}`, borderRadius:B.r }} data-speakable="true">
          <h2 style={{ fontFamily:B.fd, fontSize:20, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Without UnitedHealthcare? Self-Pay Options in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 12px", lineHeight:1.6 }}>No UHC plan or uninsured? TeleDirectMD offers $49 self-pay video visits for the same conditions in {stateName}. Browse self-pay options:</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            <a href={`/${stateCode.toLowerCase()}/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>All conditions in {stateName} →</a>
            <a href={`/${stateCode.toLowerCase()}/uti-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>UTI →</a>
            <a href={`/${stateCode.toLowerCase()}/sinus-infection-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Sinus Infection →</a>
            <a href={`/${stateCode.toLowerCase()}/sore-throat-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Strep Throat →</a>
            <a href={`/${stateCode.toLowerCase()}/influenza-treatment-online/`} style={{ fontSize:14, color:B.teal, textDecoration:"none", padding:"6px 12px", border:`1px solid ${B.teal}`, borderRadius:B.rs }}>Flu →</a>
          </div>
        </section>

        {ctx.cities.length > 0 && (
          <section style={{ marginBottom:40 }}>
            <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Serving UHC Members Across {stateName}</h2>
            <p style={{ fontSize:15, color:B.text, margin:0, lineHeight:1.7 }}>
              TeleDirectMD serves UnitedHealthcare members throughout {stateName}, including {ctx.cities.join(", ")}, and all surrounding areas. Care is delivered via secure video — your location within {stateName} does not affect your eligibility to book. As long as you are physically in {stateName} during your visit, your UHC coverage applies.
            </p>
            {stateInfo?.majorEmployers && (
              <p style={{ fontSize:14, color:B.text, margin:"12px 0 0", lineHeight:1.7 }}>
                Major {stateName} employers whose plans may be in-network with TeleDirectMD via UnitedHealthcare include: {stateInfo.majorEmployers.join(", ")}. Verify your specific plan at myuhc.com.
              </p>
            )}
          </section>
        )}

        {/* HOW IT WORKS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 16px" }}>How to Use Your UHC Benefits in {stateName}</h2>
          <HowItWorksSteps insurerName="UnitedHealthcare" />
        </section>

        {/* PATIENT JOURNEY */}
        <PatientJourney insurerName="UnitedHealthcare" conditionName="your condition" />

        {/* CROSS-INSURER TABLE */}
        <CrossInsurerTable stateCode={stateCode} stateName={stateName} currentInsurer="united-healthcare" />

        {/* INSURER TRUST */}
        <InsurerTrustDetails insurer={insurer} />

        <section style={{ marginBottom:48 }}><BookCTA insurerName="UnitedHealthcare" /></section>

        {/* FAQ */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>UHC + {stateName}: Frequently Asked Questions</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:"4px 24px", boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <div style={{ marginBottom:24, display:"flex", flexWrap:"wrap", gap:10 }}>
          <a href="/insurance/united-healthcare" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>← All UHC States</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:"none" }}>All Insurance Options</a>
        </div>

        <CommissionerLink stateCode={stateCode} stateName={stateName} />
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
