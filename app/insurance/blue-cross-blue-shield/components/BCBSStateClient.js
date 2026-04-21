'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS, INSURERS, COPAY_DATA, STATE_INSURANCE_MAP, LAST_REVIEWED } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, PatientJourney, CrossInsurerTable, CommissionerLink, InsurerTrustDetails } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';

const insurer = INSURERS['blue-cross-blue-shield'];
const shortName = 'BCBS';

const STATE_CODE_MAP = { florida:'FL', georgia:'GA', illinois:'IL', pennsylvania:'PA', texas:'TX' };

const AFFILIATE_MAP = {
  FL: 'Florida Blue',
  GA: 'Anthem Blue Cross Blue Shield',
  IL: 'Blue Cross Blue Shield of Illinois',
  PA: 'Highmark Blue Cross Blue Shield',
  TX: 'Blue Cross Blue Shield of Texas',
};

const STATE_CONTEXT = {
  FL: { cities:['Miami','Orlando','Tampa','Jacksonville','Fort Lauderdale'], note:"Florida Blue is one of Florida's largest insurers, covering millions of Floridians. TeleDirectMD is in-network with Florida Blue — the BCBS affiliate in Florida — giving most Florida residents access to same-day telehealth visits. Aetna is also in-network in Florida, giving two major insurer options." },
  GA: { cities:['Atlanta','Savannah','Augusta','Columbus','Macon'], note:"Georgia is TeleDirectMD's home state. Anthem Blue Cross Blue Shield is a major insurer for Georgia employer plans in the Atlanta metro. All three major insurers — Aetna, Anthem BCBS, and UHC — are in-network in Georgia." },
  IL: { cities:['Chicago','Aurora','Naperville','Joliet','Rockford'], note:"Blue Cross Blue Shield of Illinois is the dominant commercial insurer for large employer plans in the Chicago metro. TeleDirectMD is in-network with BCBS IL alongside Aetna and UHC, covering the majority of Illinois commercial members." },
  PA: { cities:['Philadelphia','Pittsburgh','Allentown','Erie','Reading'], note:"Highmark Blue Cross Blue Shield is western Pennsylvania's largest commercial insurer, with dominant presence in the Pittsburgh market. Pennsylvania is TeleDirectMD's broadest multi-insurer state — Aetna, Highmark BCBS, and UHC all in-network." },
  TX: { cities:['Houston','Dallas','San Antonio','Austin','Fort Worth'], note:"Blue Cross Blue Shield of Texas is the state's largest commercial insurer, serving millions of Texans through employer-sponsored plans. As the only TeleDirectMD-accepted insurer in Texas, BCBS TX gives broad access to same-day physician telehealth statewide." },
};

export default function BCBSStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const affiliateName = AFFILIATE_MAP[stateCode] || shortName;
  const ctx = STATE_CONTEXT[stateCode] || { cities:[], note:'' };
  const copayData = COPAY_DATA['blue-cross-blue-shield']?.[stateCode];
  const stateInfo = STATE_INSURANCE_MAP[stateCode];
  const memberPortal = insurer.memberPortals?.[stateCode] || 'bcbs.com';

  const FAQS = [
    { q:`Is TeleDirectMD in-network with ${affiliateName} in ${stateName}?`, a:`Yes. TeleDirectMD is contracted as an in-network telehealth provider with ${affiliateName} commercial plans in ${stateName}. Dr. Parth Bhavsar, MD (NPI: 1104323203) is the treating physician. If you have a ${affiliateName} employer-sponsored or individual commercial plan in ${stateName}, your telehealth visit may be covered subject to your plan's copay or deductible. Claims are submitted electronically using CPT codes 99213/99214.` },
    { q:`What is the ${affiliateName} telehealth copay in ${stateName}?`, a:`${copayData ? `Most ${affiliateName} commercial plans in ${stateName} have telehealth copays of ${copayData.typical}. ${copayData.employer}. ${copayData.note}` : `${affiliateName} commercial plan telehealth copays in ${stateName} typically range from $0 to $40.`} Log into your ${shortName} member portal at ${memberPortal} or call the member services number on your ${affiliateName} card to verify your exact cost. Self-pay is always available for $49 flat.` },
    { q:`Does ${affiliateName} cover telemedicine in ${stateName}?`, a:`Yes. ${affiliateName} covers telehealth visits for most commercial plan members in ${stateName}. Federal telehealth parity requirements and ${stateName} state law ensure that ${affiliateName} must cover telehealth services comparably to in-person visits for most commercial plans. Your actual cost depends on your plan's copay, coinsurance, and deductible status. Medicaid, Medicare fee-for-service, and ${shortName} Medicaid products are not accepted.` },
    { q:`What conditions does ${affiliateName} cover for telemedicine in ${stateName}?`, a:`${affiliateName} commercial plans in ${stateName} cover telehealth visits for UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Coverage depends on your specific plan benefits. Use the conditions grid below to explore specific condition + ${shortName} + ${stateName} coverage details.` },
    { q:`How do I book a TeleDirectMD visit using ${affiliateName} in ${stateName}?`, a:`Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your ${affiliateName} member ID card ready. We verify your coverage before your visit begins. You can also book self-pay for $49 flat — no insurance required, same physician and quality of care.` },
    { q:`How does TeleDirectMD bill ${affiliateName} for my visit in ${stateName}?`, a:`TeleDirectMD submits your claim electronically to ${affiliateName} using CPT code 99213 (standard complexity) or 99214 (moderate complexity). ${affiliateName} processes the claim and applies it to your benefits. You'll receive an Explanation of Benefits (EOB) from ${affiliateName} within 2–4 weeks showing what was billed (typically $150–$250) and your responsibility (your copay or deductible portion). Questions? Call the member services number on the back of your ${affiliateName} card.` },
    { q:`What ${affiliateName} plans are NOT accepted at TeleDirectMD in ${stateName}?`, a:`The following plan types are not accepted: ${affiliateName} Medicaid, ${shortName} Community Health Plan, Medicare fee-for-service, and ${shortName} Medicare Advantage plans. If you are unsure about your plan type, self-pay is available for $49 flat — same physician and care quality, no insurance required.` },
    { q:`Can I use my ${affiliateName} FSA or HSA for a TeleDirectMD visit in ${stateName}?`, a:`Yes. Telehealth visits with a licensed physician are qualified medical expenses eligible for FSA and HSA payment. If your ${affiliateName} plan applies your deductible before covering the visit, your FSA or HSA card can be used to pay your cost-sharing. The $49 self-pay option is also FSA/HSA eligible.` },
    { q:`Does ${affiliateName} in ${stateName} cover my prescription from the telehealth visit?`, a:`${affiliateName} covers the telehealth visit under your medical benefit. Prescription coverage is handled by your ${affiliateName} pharmacy benefit. Most first-line medications for common conditions (antibiotics, antivirals, PPIs, antihypertensives) are Tier 1 generic drugs covered by virtually all ${affiliateName} commercial plans for $4–$15. Check your ${shortName} formulary at ${memberPortal} or ask your pharmacy.` },
    { q:`What if my specific ${affiliateName} plan in ${stateName} is not covered?`, a:`If your specific ${affiliateName} plan is not in-network with TeleDirectMD in ${stateName}, you can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee. You may also submit an out-of-network claim to ${affiliateName} for partial reimbursement depending on your plan's out-of-network benefit.` },
    { q:`How do I verify my ${affiliateName} telehealth benefits before booking in ${stateName}?`, a:`Log into your ${affiliateName} member portal at ${memberPortal}, navigate to "Benefits," and look for "Telehealth" or "Virtual Care" under your plan details. You can also call the member services number on the back of your ${affiliateName} card. When calling, ask: "Is TeleDirectMD in-network for telehealth?" and "What is my telehealth copay?" Have your member ID ready.` },
    { q:`Is there a difference between ${affiliateName} telehealth and in-person copays in ${stateName}?`, a:`In most ${affiliateName} commercial plans in ${stateName}, telehealth copays are equal to or lower than your primary care in-person copay. Many employer-sponsored ${affiliateName} plans carry $0 telehealth copays — particularly since the post-pandemic expansion of telehealth benefits. Your specific plan determines the exact amount. Log into ${memberPortal} to confirm your telehealth cost-sharing.` },
  ];

  const SCHEMA = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        'name': `Online Doctor That Accepts ${affiliateName} in ${stateName}`,
        'description': `TeleDirectMD is in-network with ${affiliateName} commercial plans in ${stateName}. Board-certified physician Dr. Parth Bhavsar, MD (NPI: 1104323203). Same-day video visits — your ${affiliateName} copay applies${copayData ? ` (typically ${copayData.typical})` : ''}.`,
        'url': `https://teledirectmd.com/insurance/blue-cross-blue-shield/${stateSlug}`,
        'lastReviewed': LAST_REVIEWED,
        'reviewedBy': { '@type': 'Physician', 'name': 'Parth Bhavsar, MD', 'identifier': { '@type': 'PropertyValue', 'name': 'NPI', 'value': '1104323203' } },
        'medicalAudience': { '@type': 'MedicalAudience', 'audienceType': 'Patient' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['[data-speakable]'] },
      },
      {
        '@type': 'Physician',
        'name': 'Parth Bhavsar, MD',
        'identifier': { '@type': 'PropertyValue', 'name': 'NPI', 'value': '1104323203' },
        'medicalSpecialty': 'Family Medicine',
        'areaServed': { '@type': 'State', 'name': stateName },
        'acceptsInsurance': [{ '@type': 'HealthInsurancePlan', 'name': `${affiliateName} Commercial Plans — ${stateName}` }],
      },
      {
        '@type': 'FAQPage',
        'mainEntity': FAQS.map(f => ({ '@type':'Question','name':f.q,'acceptedAnswer':{'@type':'Answer','text':f.a} })),
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type':'ListItem','position':1,'name':'Home','item':'https://teledirectmd.com' },
          { '@type':'ListItem','position':2,'name':'Insurance','item':'https://teledirectmd.com/insurance' },
          { '@type':'ListItem','position':3,'name':'Blue Cross Blue Shield','item':'https://teledirectmd.com/insurance/blue-cross-blue-shield' },
          { '@type':'ListItem','position':4,'name':stateName,'item':`https://teledirectmd.com/insurance/blue-cross-blue-shield/${stateSlug}` },
        ],
      },
    ],
  };

  return (
    <div style={{ fontFamily:B.fb, background:B.bg, color:B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{label:'Home',href:'/'},{label:'Insurance',href:'/insurance'},{label:'Blue Cross Blue Shield',href:'/insurance/blue-cross-blue-shield'},{label:stateName}]} />

      {/* HERO */}
      <div style={{ background:`linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding:'56px 24px 64px', position:'relative', overflow:'hidden', marginTop:16 }}>
        <div style={{ position:'absolute', inset:0, opacity:0.04, backgroundImage:'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize:'32px 32px' }} />
        <div style={{ maxWidth:760, margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.08)', borderRadius:100, padding:'8px 16px', marginBottom:24, backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c="#90C2FF" s={16} />
            <span style={{ fontFamily:B.fb, fontSize:13, fontWeight:600, color:'#90C2FF', letterSpacing:'0.04em', textTransform:'uppercase' }}>{shortName} In-Network — {stateName}</span>
          </div>
          <h1 style={{ fontFamily:B.fd, fontSize:'clamp(28px, 5vw, 44px)', fontWeight:700, color:B.white, lineHeight:1.15, margin:'0 0 16px' }}>Online Doctor That Accepts<br />{affiliateName} in {stateName}</h1>
          <p data-speakable="true" style={{ fontFamily:B.fb, fontSize:'clamp(15px, 2.5vw, 18px)', color:'rgba(255,255,255,0.80)', lineHeight:1.65, margin:'0 0 10px', maxWidth:600 }}>
            TeleDirectMD is in-network with {affiliateName} commercial plans in {stateName}. See a board-certified physician by video — your standard {shortName} copay applies{copayData ? ` (typically ${copayData.typical})` : ''}.
          </p>
          {ctx.note && <p style={{ fontFamily:B.fb, fontSize:14, color:'rgba(255,255,255,0.55)', lineHeight:1.6, margin:'0 0 24px', maxWidth:580 }}>{ctx.note}</p>}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', background:B.accent, color:B.white, borderRadius:B.rs, fontWeight:700, fontSize:15, textDecoration:'none' }}>
            <Ico.Cal c={B.white} s={18} /> Book with {shortName} in {stateName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ margin:'32px 0' }}><TrustBar /></div>

        {/* ANSWER BLOCK */}
        <AnswerBlock
          question={`Does ${affiliateName} cover telemedicine visits in ${stateName}?`}
          answer={`Yes — TeleDirectMD is in-network with ${affiliateName} commercial plans in ${stateName}. Dr. Parth Bhavsar, MD evaluates your symptoms by secure video and sends prescriptions directly to your ${stateName} pharmacy if appropriate. Your standard ${affiliateName} copay applies${copayData ? ` — typically ${copayData.typical} for most ${stateName} commercial plans` : ''}. Self-pay is $49 flat if you prefer.`}
          color={insurer.color}
        />

        {/* COPAY CARD */}
        {copayData && <CopayCard insurerName={affiliateName} stateName={stateName} copayData={copayData} insurerColor={insurer.color} />}

        {/* CONDITIONS GRID */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:'0 0 8px' }}>Conditions {affiliateName} Covers via Telehealth in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:'0 0 16px', lineHeight:1.6 }}>Select a condition to see {shortName} + {stateName} specific coverage details, copay estimates, and prescription information.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond,i) => (
              <a key={i} href={`/insurance/blue-cross-blue-shield/${stateSlug}/${cond.slug}`} style={{ display:'flex', alignItems:'center', gap:10, background:B.white, border:`1px solid ${B.border}`, borderRadius:B.rs, padding:'12px 14px', textDecoration:'none', boxShadow:B.shadow }}>
                <Ico.Check c="#1A5FB4" s={15} />
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize:11, color:'#1A5FB4' }}>{shortName} · {stateName} · {cond.icd10}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CITIES */}
        {/* SELF-PAY CROSS-LINKS — internal linking for AI visibility */}
        <section style={{ marginBottom:40, padding:"20px 24px", background:"#F9FAFB", border:`1px solid ${B.border}`, borderRadius:B.r }} data-speakable="true">
          <h2 style={{ fontFamily:B.fd, fontSize:20, fontWeight:700, color:B.navy, margin:"0 0 8px" }}>Without BCBS? Self-Pay Options in {stateName}</h2>
          <p style={{ fontSize:14, color:B.text, margin:"0 0 12px", lineHeight:1.6 }}>No BCBS plan or uninsured? TeleDirectMD offers $49 self-pay video visits for the same conditions in {stateName}. Browse self-pay options:</p>
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
            <h2 style={{ fontFamily:B.fd, fontSize:22, fontWeight:700, color:B.navy, margin:'0 0 8px' }}>Serving {affiliateName} Members Across {stateName}</h2>
            <p style={{ fontSize:15, color:B.text, margin:0, lineHeight:1.7 }}>
              TeleDirectMD serves {affiliateName} members throughout {stateName}, including {ctx.cities.join(', ')}, and all surrounding areas. Care is delivered via secure video — your location within {stateName} does not affect your eligibility to book. As long as you are physically in {stateName} during your visit, your {affiliateName} coverage applies.
            </p>
            {stateInfo?.majorEmployers && (
              <p style={{ fontSize:14, color:B.text, margin:'12px 0 0', lineHeight:1.7 }}>
                Major {stateName} employers whose plans may be in-network with TeleDirectMD via {affiliateName} include: {stateInfo.majorEmployers.join(', ')}. Verify your specific plan at {memberPortal}.
              </p>
            )}
          </section>
        )}

        {/* HOW IT WORKS */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:'0 0 16px' }}>How to Use Your {affiliateName} Benefits in {stateName}</h2>
          <HowItWorksSteps insurerName={affiliateName} />
        </section>

        {/* PATIENT JOURNEY */}
        <PatientJourney insurerName={affiliateName} conditionName="your condition" />

        {/* CROSS-INSURER TABLE */}
        <CrossInsurerTable stateCode={stateCode} stateName={stateName} currentInsurer="blue-cross-blue-shield" />

        {/* INSURER TRUST */}
        <InsurerTrustDetails insurer={insurer} />

        <section style={{ marginBottom:48 }}><BookCTA insurerName={affiliateName} /></section>

        {/* FAQ */}
        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontFamily:B.fd, fontSize:24, fontWeight:700, color:B.navy, margin:'0 0 8px' }}>{affiliateName} + {stateName}: Frequently Asked Questions</h2>
          <div style={{ background:B.white, border:`1px solid ${B.border}`, borderRadius:B.r, padding:'4px 24px', boxShadow:B.shadow }}>
            {FAQS.map((faq,i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <div style={{ marginBottom:24, display:'flex', flexWrap:'wrap', gap:10 }}>
          <a href="/insurance/blue-cross-blue-shield" style={{ fontSize:14, color:B.teal, textDecoration:'none' }}>← All {shortName} States</a>
          <span style={{ color:B.border }}>|</span>
          <a href="/insurance" style={{ fontSize:14, color:B.teal, textDecoration:'none' }}>All Insurance Options</a>
        </div>

        <CommissionerLink stateCode={stateCode} stateName={stateName} />
        <div style={{ marginBottom:48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
