from pathlib import Path
import json
root=Path('/home/user/workspace/tdmd')

# Keep the pilot-state gate text byte-for-byte identical in the route and sitemap.
old_route='''// VA pilot cohort (2026-07-11): Virginia is a demand-gated cash-pay pilot like VT,
// not a broad rollout. Mirror VT's condition cohort exactly (no VA-specific demand
// data exists in-repo). Only these slugs generate; all others 404 and stay out of
// the sitemap. The /va/ hub remains live. State-uniqueness layer is injected from
// data/state-templates/va.json + data/state-licenses.json (Virginia Board of Medicine,
// license 0101290265).
const VA_PILOT_CONDITIONS = new Set(VT_PILOT_CONDITIONS);

// Alaska launch scope: /ak/ and /ak/online-doctor-visits/ only; never publish /ak/{condition}.
const HUB_ONLY_STATE_SLUGS = new Set(['ak']);'''
new_shared='''// Vermont, Virginia, and Alaska share the same demand-gated pilot cohort. Only these
// condition slugs generate and enter the sitemap; every other state-condition route stays
// unpublished. Alaska is cash-pay only and receives state-specific compliance content from
// data/state-templates/ak.json.
const PILOT_COHORT_STATE_SLUGS = new Set(['vt', 'va', 'ak']);'''
route=root/'app/[slug]/[conditionSlug]/page.js'
t=route.read_text()
if old_route not in t: raise SystemExit('Route pilot block marker missing')
t=t.replace(old_route,new_shared)
t=t.replace("import { notFound } from 'next/navigation';\n",'')
t=t.replace("    if (HUB_ONLY_STATE_SLUGS.has(state.slug)) continue;\n",'')
t=t.replace("      // VT: only generate the pilot cohort condition pages\n      if (state.slug === 'vt' && !VT_PILOT_CONDITIONS.has(cSlug)) continue;\n      // VA: only generate the pilot cohort condition pages\n      if (state.slug === 'va' && !VA_PILOT_CONDITIONS.has(cSlug)) continue;\n", "      if (PILOT_COHORT_STATE_SLUGS.has(state.slug) && !VT_PILOT_CONDITIONS.has(cSlug)) continue;\n")
t=t.replace("  if (HUB_ONLY_STATE_SLUGS.has(slug)) notFound();\n",'')
route.write_text(t)

old_sitemap='''  // VA pilot cohort (2026-07-11): mirror VT's cohort exactly. Virginia is a
  // demand-gated cash-pay pilot — only the /va/ hub and these condition pages
  // are emitted; no /va/online-doctor-visits/ and no non-cohort condition URLs.
  const VA_PILOT_CONDITIONS = new Set(VT_PILOT_CONDITIONS);
  // Alaska launch scope: /ak/ and /ak/online-doctor-visits/ only; never publish /ak/{condition}.
  const HUB_ONLY_STATE_SLUGS = new Set(['ak']);'''
new_sitemap='''  // Vermont, Virginia, and Alaska share the same demand-gated pilot cohort. Only these
  // condition slugs generate and enter the sitemap; every other state-condition route stays
  // unpublished. Alaska is cash-pay only and receives state-specific compliance content from
  // data/state-templates/ak.json.
  const PILOT_COHORT_STATE_SLUGS = new Set(['vt', 'va', 'ak']);'''
sitemap=root/'app/sitemap.js';t=sitemap.read_text()
if old_sitemap not in t: raise SystemExit('Sitemap pilot block marker missing')
t=t.replace(old_sitemap,new_sitemap)
t=t.replace("      if (HUB_ONLY_STATE_SLUGS.has(state.slug)) continue;\n",'')
t=t.replace("      // VT: emit only the pilot cohort condition pages\n      if (state.slug === 'vt' && !VT_PILOT_CONDITIONS.has(cond)) continue;\n      // VA: emit only the pilot cohort condition pages\n      if (state.slug === 'va' && !VA_PILOT_CONDITIONS.has(cond)) continue;\n", "      if (PILOT_COHORT_STATE_SLUGS.has(state.slug) && !VT_PILOT_CONDITIONS.has(cond)) continue;\n")
sitemap.write_text(t)

# Alaska has moved beyond a hub-only launch. Keep the state-hub condition directory but limit
# its links to the same published pilot cohort.
landing=root/'app/[slug]/StateLandingPage.js';t=landing.read_text()
t=t.replace("// Alaska is intentionally hub-only; keep this set aligned with the condition route and sitemap.\nconst HUB_ONLY_STATE_SLUGS = new Set(['ak']);\n", "// Alaska is a VT/VA-style pilot: expose only the condition URLs that are published.\nconst PILOT_COHORT_STATE_SLUGS = new Set(['ak']);\nconst PILOT_COHORT_CONDITIONS = new Set([\n  'uti-treatment-online', 'yeast-infection-treatment-online', 'bv-treatment-online',\n  'cold-sore-treatment-online', 'seasonal-allergies-treatment-online', 'hypertension-refills-online',\n  'pink-eye-treatment-online', 'shingles-treatment-online', 'sinus-infection-treatment-online',\n  'sore-throat-treatment-online', 'tick-bite-treatment-online', 'influenza-treatment-online',\n  'common-cold-treatment-online', 'ear-pain-treatment-online', 'hyperlipidemia-refills-online',\n  'hypothyroidism-refills-online', 'chlamydia-treatment-online', 'doxypep-sti-prevention-online',\n  'acne-treatment-online', 'cellulitis-treatment-online',\n]);\n")
t=t.replace("  const isHubOnlyState = HUB_ONLY_STATE_SLUGS.has(stateSlug);\n", "  const isPilotCohortState = PILOT_COHORT_STATE_SLUGS.has(stateSlug);\n")
t=t.replace("      {/* 2) Conditions Directory — Alaska is hub-only, so do not link unpublished state×condition URLs. */}\n      {!isHubOnlyState && (\n      <section", "      {/* 2) Conditions Directory — pilot states link only to their published cohort. */}\n      <section")
t=t.replace("{category.conditions.map((condition) => (", "{category.conditions.filter((condition) => !isPilotCohortState || PILOT_COHORT_CONDITIONS.has(condition.slug)).map((condition) => (")
t=t.replace("\n\n      )}\n\n      {/* 3) How It Works */}", "\n\n      {/* 3) How It Works */}")
if 'isHubOnlyState' in t or 'HUB_ONLY_STATE_SLUGS' in t: raise SystemExit('Hub-only StateLanding code remains')
landing.write_text(t)

# State-template content is shared by all 20 Alaska cohort pages through ConditionPage's
# existing state-template injections and JSON-LD license-compliance support.
ak={
  'stateCode':'AK','stateName':'Alaska','schemaVersion':'1.0','lastReviewed':'2026-08-07','reviewedBy':'Parth Bhavsar, MD',
  'writingNotes':{
    'regulatoryNote':'Alaska launch is cash-pay only. The business Telemedicine Registration is complete. This template uses the verified Alaska State Medical Board license record and does not make payer claims.',
    'payerNote':'Alaska is intentionally absent from insurance configuration. Do not name an insurer, Medicaid, Medicare, or Curative on Alaska pages.'
  },
  'voiceProfile':{'tone':'plain, factual, frontier-aware','avoid':'payer claims, unverified statute citations, controlled-substance promises'},
  'stateHero':{'openingParagraph':'Alaska adults can book a same-day video visit with Parth Bhavsar, MD, a board-certified Family Medicine physician licensed by the Alaska State Medical Board. TeleDirectMD’s Alaska Telemedicine Business Registration is complete. From Anchorage and the Mat-Su Valley to Fairbanks, Juneau, Sitka, and smaller communities where an in-person visit may require substantial travel, Alaska patients 18 and older can use secure video care for the common, non-emergency conditions TeleDirectMD treats. Alaska visits are $79 flat self-pay; no insurance claim is filed. HSA and FSA cards are accepted, and a prescription is sent electronically to the patient’s chosen Alaska pharmacy when clinically appropriate.'},
  'stateEligibility':{'summary':'Adults 18 and older who are physically located in Alaska at the time of a visit are eligible for a $79 cash-pay TeleDirectMD video visit.'},
  'statePricing':{'amount':79,'phrase':'$79 flat self-pay','hsaFsa':'HSA and FSA cards are accepted.'},
  'stateTreatmentContext':{'general':'TeleDirectMD provides MD-only video visits for common adult conditions to patients located in Alaska. When clinically appropriate, an electronic prescription is sent to the patient’s preferred Alaska pharmacy, including Walgreens, Fred Meyer Pharmacy, Safeway Pharmacy, Carrs Pharmacy, or an independent pharmacy. TeleDirectMD does not prescribe controlled substances via telehealth.'},
  'stateEpidemiology':{'general':'Alaska’s communities range from the Anchorage and Fairbanks population centers to Southeast coastal communities and remote areas reached by air or water. Distance, weather, and travel logistics can make timely access to routine care harder. TeleDirectMD’s Alaska service is for appropriate non-emergency adult conditions; severe symptoms, emergency warning signs, or problems needing examination, imaging, or urgent testing require local in-person or emergency care.'},
  'stateCompliance':{'credentialBlock':'Parth Bhavsar, MD — board-certified in Family Medicine — holds Alaska medical license number 257965, issued by the Alaska State Medical Board. Alaska patients may independently verify the license through the Alaska Department of Commerce, Community, and Economic Development professional-license search. Alaska permits video-based telehealth without a prior in-person examination and without originating-site restrictions; TeleDirectMD’s separate Alaska Telemedicine Business Registration is complete. NPI: 1104323203.','verifyUrl':'https://www.commerce.alaska.gov/cbp/main/search/professional','licenseNumber':'257965','boardName':'Alaska State Medical Board','boardUrl':'https://www.commerce.alaska.gov/cbp/main/board/med'},
  'stateCities':{'metroAndRural':'TeleDirectMD serves eligible adults located throughout Alaska, including Anchorage, Fairbanks, Juneau, Wasilla, and Sitka. A video visit may be especially useful when weather, distance, or transportation makes a routine in-person appointment impractical. Patients should select a local pharmacy that can receive an electronic prescription and seek local emergency care for urgent warning signs.'},
  'stateInsurance':{'mode':'self-pay-only','selfPayDisclosure':'TeleDirectMD operates self-pay only in Alaska. Each Alaska visit is $79 flat self-pay, paid at booking; TeleDirectMD does not bill commercial insurance, Medicaid, or Medicare and does not file insurance claims for Alaska patients. There are no facility charges or follow-up bills from TeleDirectMD, and HSA and FSA debit cards are accepted.','payers':[]},
  'stateFaqs':[
    {'question':'Can adults in Alaska use TeleDirectMD?','answer':'Yes. Adults 18 and older who are physically located in Alaska during the video visit can request care for an appropriate non-emergency condition.'},
    {'question':'Is TeleDirectMD licensed in Alaska?','answer':'Yes. Parth Bhavsar, MD holds Alaska medical license 257965, issued by the Alaska State Medical Board. The license can be verified through Alaska’s professional-license search.'},
    {'question':'Do I need an in-person visit first in Alaska?','answer':'No. Alaska permits video-based telehealth without a prior in-person examination when the standard of care can be met by telehealth.'},
    {'question':'Does TeleDirectMD accept insurance in Alaska?','answer':'No. Alaska visits are cash-pay only at $79. TeleDirectMD does not bill commercial insurance, Medicaid, or Medicare for Alaska visits.'},
    {'question':'Which Alaska pharmacies can receive an e-prescription?','answer':'When medication is clinically appropriate, a prescription can be sent electronically to the Alaska pharmacy you choose, including Walgreens, Fred Meyer Pharmacy, Safeway Pharmacy, Carrs Pharmacy, or an independent pharmacy.'},
    {'question':'When should I seek in-person care in Alaska instead?','answer':'Use local urgent or emergency care for severe symptoms, emergencies, or problems that require an examination, imaging, or immediate testing. TeleDirectMD is not emergency care.'}
  ],
  'conditionOverrides':{},
  'stateLegalLayer':{'required':True,'blocks':[{'statute':'Alaska telehealth requirements and Alaska Telemedicine Business Registration','renderAt':'practicing-in-state','content':'Alaska-specific license and telemedicine-registration facts appear in the shared practicing-in-Alaska compliance block on every Alaska pilot condition page.'}],'forbiddenPhrases':['in-network','insurance accepted','Medicaid accepted','Medicare accepted']}
}
(root/'data/state-templates/ak.json').write_text(json.dumps(ak,indent=2)+'\n')
