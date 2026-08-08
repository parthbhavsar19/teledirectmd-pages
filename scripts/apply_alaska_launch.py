from pathlib import Path
import re

root = Path('/home/user/workspace/tdmd')

# Canonical served jurisdictions: 44 states plus D.C., ordered as data/states.json.
state_rows = [
    ('AL','Alabama'), ('AK','Alaska'), ('AZ','Arizona'), ('CA','California'), ('CO','Colorado'),
    ('CT','Connecticut'), ('DC','Washington, D.C.'), ('DE','Delaware'), ('FL','Florida'), ('GA','Georgia'),
    ('HI','Hawaii'), ('ID','Idaho'), ('IL','Illinois'), ('IN','Indiana'), ('IA','Iowa'), ('KS','Kansas'),
    ('KY','Kentucky'), ('LA','Louisiana'), ('ME','Maine'), ('MD','Maryland'), ('MI','Michigan'), ('MN','Minnesota'),
    ('MS','Mississippi'), ('MO','Missouri'), ('MT','Montana'), ('NE','Nebraska'), ('NV','Nevada'), ('NH','New Hampshire'),
    ('NJ','New Jersey'), ('NC','North Carolina'), ('ND','North Dakota'), ('OH','Ohio'), ('OK','Oklahoma'),
    ('PA','Pennsylvania'), ('SC','South Carolina'), ('SD','South Dakota'), ('TN','Tennessee'), ('TX','Texas'),
    ('UT','Utah'), ('VA','Virginia'), ('VT','Vermont'), ('WA','Washington'), ('WV','West Virginia'), ('WI','Wisconsin'), ('WY','Wyoming'),
]
abbrs = [abbr for abbr, _ in state_rows]
states_only = [(abbr,name) for abbr,name in state_rows if abbr != 'DC']
array = '[' + ','.join(f'"{a}"' for a in abbrs) + ']'
state_list = ','.join(f"['{a}','{n}']" for a,n in states_only) + ','
objects = '\n'.join(f"    {{ abbr: '{a}', name: '{n}' }}," for a,n in state_rows)

# Canonical source data: insert Alaska after Alabama without reformatting the files.
states_path = root/'data/states.json'
states = states_path.read_text()
alaska_state = '''  {
    "name": "Alaska",
    "abbr": "AK",
    "slug": "ak",
    "cities": [
      "Anchorage",
      "Fairbanks",
      "Juneau",
      "Wasilla",
      "Sitka"
    ],
    "pharmacies": [
      "Walgreens",
      "Fred Meyer Pharmacy",
      "Safeway Pharmacy",
      "Carrs Pharmacy"
    ],
    "telehealthRegulation": "Alaska permits video-based telehealth without a prior in-person examination and without originating-site restrictions. Alaska requires a separate Telemedicine Business Registration for the business providing telemedicine services."
  },
'''
needle = '  {\n    "name": "Arizona",'
assert needle in states
states_path.write_text(states.replace(needle, alaska_state + needle, 1))

licenses_path = root/'data/state-licenses.json'
licenses = licenses_path.read_text()
alaska_license = '''    "ak": {
      "stateName": "Alaska",
      "licenseNumber": "257965",
      "issuingBoard": "Alaska State Medical Board",
      "issuingBoardUrl": "https://www.commerce.alaska.gov/cbp/main/board/med",
      "verificationUrl": "https://www.commerce.alaska.gov/cbp/main/search/professional",
      "credentialCategory": "Medical License",
      "credentialDisplayShort": "Alaska Medical License",
      "credentialDisplayLong": "Alaska Medical License (issued by Alaska State Medical Board)",
      "phrasingForPages": "Alaska-licensed physician",
      "dateIssued": "",
      "dateExpires": "",
      "phase3Ready": true
    },
'''
needle = '    "az": {'
assert needle in licenses
licenses_path.write_text(licenses.replace(needle, alaska_license + needle, 1))

# Licensure coverage claims across source-controlled text. Do not alter non-TeleDirectMD editorial statistics.
for path in root.rglob('*'):
    if not path.is_file() or any(part in {'.git','node_modules','.next'} for part in path.parts):
        continue
    if path.suffix not in {'.js','.json','.html','.txt','.md'}:
        continue
    text = path.read_text(errors='ignore')
    original = text
    text = text.replace('43 U.S. states', '44 U.S. states')
    text = text.replace('43 US states', '44 US states')
    text = text.replace('43 States', '44 States')
    text = text.replace('43 states', '44 states')
    text = text.replace('44 coverage areas', '45 coverage areas')
    text = text.replace('44 (44 states + DC)', '45 (44 states + DC)')
    if path.name == 'SmallBusinessOwnersPage.js':
        text = text.replace('and 36 more across the country', 'and 37 more across the country')
    if text != original:
        path.write_text(text)

# This comment describes the intentionally unchanged static condition-page total:
# Alaska is hub-only and has no state×condition output.
citable = root/'lib/citable-summary.js'
text = citable.read_text().replace('(2,520 pages: 60 conditions × 44 states)', '(2,520 pages: 60 conditions × 43 states)')
citable.write_text(text)

# Static list and schema roster maintenance. STATE_LIST intentionally excludes D.C. because it is a states grid.
for rel in ['app/use-case/[slug]/page.js','app/compare/[competitor]/page.js','app/cost/[slug]/page.js']:
    path = root/rel
    text = path.read_text()
    text, count = re.subn(r"const STATE_LIST = \[\n\s*.*?\n\];", "const STATE_LIST = [\n  " + state_list + "\n];", text, flags=re.S)
    assert count == 1, (rel, count)
    path.write_text(text)

for rel in ['lib/cost-compare-schema.js','lib/symptom-schema.js','app/who-we-serve/page.js']:
    path = root/rel
    text = path.read_text()
    if rel.startswith('lib/'):
        text, count = re.subn(r"const STATE_ABBRS = \[[^\]]*\];", f"const STATE_ABBRS = {array};", text)
        assert count == 1, (rel, count)
    else:
        text, count = re.subn(r'("areaServed"\s*:\s*)\[[^\]]*\]', r'\1' + array, text)
        assert count == 1, (rel, count)
    path.write_text(text)

# Homepage roster and map slugs.
path = root/'app/HomepageClient.js'
text = path.read_text()
text = text.replace("  'AL','AZ','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MD','ME','MI',\n  'MN','MO','MS','MT','NC','ND','NE','NH','NJ','NV','OH','OK','PA','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY',", "  'AL','AK','AZ','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MD','ME','MI',\n  'MN','MO','MS','MT','NC','ND','NE','NH','NJ','NV','OH','OK','PA','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY',")
text = text.replace("  AL:'al',AZ:'az',CA:'ca',CO:'co',CT:'ct',DC:'dc',DE:'de',FL:'fl',GA:'ga',HI:'hi',IA:'ia',ID:'id',", "  AL:'al',AK:'ak',AZ:'az',CA:'ca',CO:'co',CT:'ct',DC:'dc',DE:'de',FL:'fl',GA:'ga',HI:'hi',IA:'ia',ID:'id',")
assert "'AK','AZ'" in text and "AK:'ak'" in text
path.write_text(text)

# All audience JSON-LD arrays must exactly match the canonical roster; normalize the three local object rosters too.
segment_dir = root/'app/who-we-serve/[segment]'
for path in segment_dir.glob('*Page.js'):
    text = path.read_text()
    # Direct JSON-LD arrays (the values are simple abbreviations in every target segment page).
    text = re.sub(r'("areaServed"\s*:\s*)\[[^\]]*\]', r'\1' + array, text)
    text = re.sub(r'("licensedIn"\s*:\s*)\[[^\]]*\]', r'\1' + array, text)
    # Flight attendants uses a local areaServed variable; World Cup uses licensedAbbrs.
    text = re.sub(r'const areaServed = \[[^\]]*\];', f'const areaServed = {array};', text)
    text = re.sub(r'const licensedAbbrs = \[[^\]]*\];', f'const licensedAbbrs = {array};', text)
    # College, early retirees, and international visitors use a local allStates object roster.
    text = re.sub(r'  const allStates = \[\n.*?\n  \];', '  const allStates = [\n' + objects + '\n  ];', text, flags=re.S)
    path.write_text(text)

# State hub direct links: hide all state×condition links for Alaska while retaining /ak/online-doctor-visits/.
path = root/'app/[slug]/StateLandingPage.js'
text = path.read_text()
text = text.replace("import { loadStateTemplate } from '../../lib/state-template';", "import { loadStateTemplate } from '../../lib/state-template';\nimport stateLicensesData from '../../data/state-licenses.json';")
text = text.replace("export default function StateLandingPage({ stateSlug }) {", "// Alaska is intentionally hub-only; keep this set aligned with the condition route and sitemap.\nconst HUB_ONLY_STATE_SLUGS = new Set(['ak']);\n\nexport default function StateLandingPage({ stateSlug }) {")
text = text.replace("  const stateTpl = loadStateTemplate(stateSlug);", "  const stateTpl = loadStateTemplate(stateSlug);\n  const isHubOnlyState = HUB_ONLY_STATE_SLUGS.has(stateSlug);\n  const stateLicense = (stateLicensesData.licenses || {})[stateSlug];\n  const stateCredential = stateLicense?.licenseNumber ? {\n    '@type': 'EducationalOccupationalCredential',\n    credentialCategory: stateLicense.credentialCategory || 'Medical License',\n    name: stateLicense.credentialDisplayLong || `${state.name} Medical License`,\n    identifier: stateLicense.licenseNumber,\n    recognizedBy: {\n      '@type': 'GovernmentOrganization',\n      name: stateLicense.issuingBoard,\n      url: stateLicense.issuingBoardUrl || stateLicense.verificationUrl\n    },\n    validIn: { '@type': 'State', name: state.name },\n    ...(stateLicense.verificationUrl ? { url: stateLicense.verificationUrl } : {}),\n    ...(stateLicense.dateIssued ? { validFrom: stateLicense.dateIssued } : {}),\n    ...(stateLicense.dateExpires ? { validThrough: stateLicense.dateExpires } : {})\n  } : null;")
text = text.replace('        "affiliation": { "@id": `${baseUrl}#organization` },\n        ...(hasInsurance ?', '        "affiliation": { "@id": `${baseUrl}#organization` },\n        ...(stateCredential ? { "hasCredential": stateCredential } : {}),\n        ...(hasInsurance ?')
text = text.replace('      {/* 2) Conditions Directory */}\n      <section className="tdmd-section" id={`${pid}-conditions`}>', '      {/* 2) Conditions Directory — Alaska is hub-only, so do not link unpublished state×condition URLs. */}\n      {!isHubOnlyState && (\n      <section className="tdmd-section" id={`${pid}-conditions`}>')
text = text.replace('      {/* 3) How It Works */}', '      )}\n\n      {/* 3) How It Works */}', 1)
# Do not hide Alaska online-doctor-visits; Virginia remains its pre-existing pilot exception.
path.write_text(text)

# Condition-route and sitemap hub-only gates. The Alaska set is intentionally byte-for-byte identical in both files.
path = root/'app/[slug]/[conditionSlug]/page.js'
text = path.read_text()
text = text.replace("import { loadStateTemplate, getConditionOverride, mergeFaqs } from '../../../lib/state-template';", "import { loadStateTemplate, getConditionOverride, mergeFaqs } from '../../../lib/state-template';\nimport { notFound } from 'next/navigation';")
text = text.replace('const VA_PILOT_CONDITIONS = new Set(VT_PILOT_CONDITIONS);', "const VA_PILOT_CONDITIONS = new Set(VT_PILOT_CONDITIONS);\n\n// Alaska launch scope: /ak/ and /ak/online-doctor-visits/ only; never publish /ak/{condition}.\nconst HUB_ONLY_STATE_SLUGS = new Set(['ak']);")
text = text.replace('  for (const state of states) {\n    for (const cSlug of conditionSlugs) {', '  for (const state of states) {\n    if (HUB_ONLY_STATE_SLUGS.has(state.slug)) continue;\n    for (const cSlug of conditionSlugs) {')
text = text.replace('  const { slug, conditionSlug } = await params;\n  const baseUrl', '  const { slug, conditionSlug } = await params;\n  if (HUB_ONLY_STATE_SLUGS.has(slug)) notFound();\n  const baseUrl', 1)
text = text.replace('  const { slug, conditionSlug } = await params;\n\n  // ── v3 Special cases', '  const { slug, conditionSlug } = await params;\n  if (HUB_ONLY_STATE_SLUGS.has(slug)) notFound();\n\n  // ── v3 Special cases', 1)
path.write_text(text)

path = root/'app/sitemap.js'
text = path.read_text()
text = text.replace('  const VA_PILOT_CONDITIONS = new Set(VT_PILOT_CONDITIONS);', "  const VA_PILOT_CONDITIONS = new Set(VT_PILOT_CONDITIONS);\n  // Alaska launch scope: /ak/ and /ak/online-doctor-visits/ only; never publish /ak/{condition}.\n  const HUB_ONLY_STATE_SLUGS = new Set(['ak']);")
text = text.replace('    for (const cond of conditionSlugs) {', '    for (const cond of conditionSlugs) {\n      if (HUB_ONLY_STATE_SLUGS.has(state.slug)) continue;', 1)
path.write_text(text)

# Alaska online-doctor-visits route remains published.
path = root/'app/[slug]/online-doctor-visits/page.js'
text = path.read_text().replace("['al', 'az'", "['al', 'ak', 'az'")
path.write_text(text)

# Remove Alaska and other already-served jurisdictions from stale unserved lists and correct inferred gap counts.
repls = {
    'Alaska, Hawaii, New York, Massachusetts, Rhode Island, New Mexico, Oregon, and Arkansas': 'Arkansas, Massachusetts, New Mexico, New York, Oregon, and Rhode Island',
    'Alaska, Arkansas, Massachusetts, New Mexico, New York, Oregon, and Rhode Island': 'Arkansas, Massachusetts, New Mexico, New York, Oregon, and Rhode Island',
    'AK, HI, NY, MA, RI, NM, OR, AR': 'AR, MA, NM, NY, OR, RI',
    'AK, HI, NY, MA, RI, VT, NM, OR, AR': 'AR, MA, NM, NY, OR, RI',
    'AK, HI, NY (TeleDirectMD gap), MA (TeleDirectMD gap), RI, VT, NM, OR, and AR': 'AR, MA, NM, NY, OR, and RI',
    'AK, HI, NY, MA, RI, VT, NM, OR, AR or another': 'AR, MA, NM, NY, OR, RI or another',
    'AK, HI, NY, MA, RI, VT, NM, OR, AR, or another': 'AR, MA, NM, NY, OR, RI, or another',
    'AK, HI, NY, MA, RI, VT, NM, OR, AR, and a few others': 'AR, MA, NM, NY, OR, RI',
    'AK, HI, NY, MA, RI, VT, NM, OR, AR are gaps': 'AR, MA, NM, NY, OR, RI are gaps',
    'AK, HI, or another state': 'or another state',
    'one of the eight states TeleDirectMD does not serve': 'one of the six states TeleDirectMD does not serve',
    'one of the 9 states TeleDirectMD doesn\'t cover': 'one of the six states TeleDirectMD doesn\'t cover',
    'TeleDirectMD is in 41.': 'TeleDirectMD is in 44.',
}
for path in root.rglob('*'):
    if not path.is_file() or any(part in {'.git','node_modules','.next'} for part in path.parts) or path.suffix not in {'.js','.json','.html','.txt'}:
        continue
    text = path.read_text(errors='ignore')
    original = text
    for old,new in repls.items():
        text = text.replace(old,new)
    if text != original:
        path.write_text(text)

# Explicit roster-bearing prose/schema lists that require Alaska and the full current jurisdiction roster.
path = root/'app/employers/page.js'
text = path.read_text()
old_names = "['Alabama', 'Arizona', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Pennsylvania', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']"
new_names = str([name for _,name in state_rows]).replace('"', "'")
assert old_names in text
path.write_text(text.replace(old_names,new_names))

# Correct served-state lists embedded in FAQ/citable prose.
for rel in ['app/who-we-serve/[segment]/HdhpHsaHoldersPage.js','app/who-we-serve/[segment]/UninsuredAffordableCarePage.js']:
    path = root/rel
    text = path.read_text()
    start = 'TeleDirectMD is licensed in 44 states:'
    if start in text:
        roster = ', '.join(name for a,name in states_only)
        text = re.sub(r'TeleDirectMD is licensed in 44 states: .*? See (?:our )?States We Serve page for (?:the current|the full) list\.', f'TeleDirectMD is licensed in 44 states plus Washington, D.C.: {roster}. You must be physically located in a covered jurisdiction at the time of your visit. See our States We Serve page for the full list.', text)
    path.write_text(text)

path = root/'lib/citable-summary.js'
text = path.read_text()
old_roster = 'Alabama, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas, Utah, Virginia, Washington, West Virginia, Wisconsin, and Wyoming, plus Washington DC.'
new_roster = 'Alabama, Alaska, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, and Wyoming, plus Washington DC.'
assert old_roster in text
path.write_text(text.replace(old_roster,new_roster))

# The homepage list and all JSON must parse after the targeted text rewrites.
import json
json.load(open(root/'data/states.json'))
json.load(open(root/'data/state-licenses.json'))
json.load(open(root/'data/audience-segments.json'))
json.load(open(root/'data/faq.json'))
print('Alaska launch edits applied.')
