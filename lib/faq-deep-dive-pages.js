// UTI deep-dive FAQ pages (/faq/deep-dive/{slug}/). Shared by the page route and
// app/sitemap.js so the sitemap lists exactly the pages that are built.
export const STATES = ['al','az','ca','co','ct','dc','de','fl','ga','hi','id','il','in','ia','ky','la','me','md','mi','mn','ms','mo','mt','ne','nv','nh','nj','nc','nd','oh','ok','pa','sc','sd','tn','tx','ut','va','wa','wv','wy'];

// 2026-06-10: Retired finasteride/sildenafil/tadalafil/propranolol deep-dive
// families (168 thin templated pages, 65-72% Jaccard within/across medications).
// They earned 9 clicks combined in 30 days while contributing duplication signal.
// 410-Gone routes added to vercel.json; URLs auto-removed from build via this
// MEDICATIONS array. Only UTI antibiotics kept (276 impr, 4 clicks, 43 pages)
// pending Phase 3 enrichment to match the per-state JSON template depth.
export const MEDICATIONS = [
  { key: 'uti-antibiotics', medication: 'UTI Antibiotics', condition: 'UTI Treatment', conditionSlug: 'uti-treatment-online', slugPrefix: 'can-you-get-uti-treatment-online-in', concern: 'urinary tract infection symptoms', evalContext: 'experiencing UTI symptoms and want to discuss treatment options including antibiotics for' }
];

export const STATE_NAMES = { al:'alabama',az:'arizona',ca:'california',co:'colorado',ct:'connecticut',dc:'washington-dc',de:'delaware',fl:'florida',ga:'georgia',hi:'hawaii',id:'idaho',il:'illinois',in:'indiana',ia:'iowa',ks:'kansas',ky:'kentucky',la:'louisiana',me:'maine',md:'maryland',mi:'michigan',mn:'minnesota',ms:'mississippi',mo:'missouri',mt:'montana',ne:'nebraska',nv:'nevada',nh:'new-hampshire',nj:'new-jersey',nc:'north-carolina',nd:'north-dakota',oh:'ohio',ok:'oklahoma',pa:'pennsylvania',sc:'south-carolina',sd:'south-dakota',tn:'tennessee',tx:'texas',ut:'utah',va:'virginia',wa:'washington',wv:'west-virginia',wi:'wisconsin',wy:'wyoming' };

export const FAQ_PAGES = [];
MEDICATIONS.forEach((med) => {
  STATES.forEach((st) => {
    FAQ_PAGES.push({ slug: `${med.slugPrefix}-${STATE_NAMES[st]}`, stateSlug: st, conditionSlug: med.conditionSlug, medication: med.medication, condition: med.condition, concern: med.concern, evalContext: med.evalContext });
  });
});
