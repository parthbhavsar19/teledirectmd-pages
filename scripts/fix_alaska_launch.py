from pathlib import Path
import json, re
root=Path('/home/user/workspace/tdmd')

# Licensure count claims only. Preserve editorial/public-health statistics.
phrases={
 '43 licensed states':'44 licensed states',
 '43 Licensed States':'44 Licensed States',
 '43 TeleDirectMD states':'44 TeleDirectMD states',
 '43-State':'44-State',
 '43 state':'44 state',
 '43 states + DC':'44 states + DC',
 '43 States + DC':'44 States + DC',
 '43 + DC':'44 + DC',
 '43 U.S. states':'44 U.S. states',
 '43 US states':'44 US states',
 '43-state':'44-state',
 '43-state':'44-state',
 'one of our 43 states':'one of our 44 states',
 'one of the 43 states':'one of the 44 states',
 'one of our <a href="/states-we-serve/">43 licensed states':'one of our <a href="/states-we-serve/">44 licensed states',
 'tdmdCoverageStates = 43':'tdmdCoverageStates = 44',
 '44 coverage areas':'45 coverage areas',
 '36 more states':'37 more states',
}
for p in list(root.glob('app/**/*.js'))+list(root.glob('lib/**/*.js'))+list(root.glob('data/**/*.json'))+list(root.glob('public/**/*')):
 if not p.is_file() or p.name=='apply_alaska_launch.py' or p.name=='fix_alaska_launch.py': continue
 try: text=p.read_text()
 except UnicodeDecodeError: continue
 new=text
 for a,b in phrases.items(): new=new.replace(a,b)
 if new!=text: p.write_text(new)

# Exact exclusions and comparison claims.
path=root/'lib/compare-pages-config.js'; text=path.read_text()
text=text.replace("You're in AK, HI, Puerto Rico, or a state TeleDirectMD doesn\\'t cover", "You're in HI, Puerto Rico, or a state TeleDirectMD doesn\\'t cover")
text=text.replace('Live in one of the 43 TeleDirectMD states?', 'Live in one of the 44 TeleDirectMD states?')
text=text.replace("You're in AK, HI, or one of the 9 states TeleDirectMD doesn\\'t cover", "You're in HI or one of the 6 states TeleDirectMD doesn\\'t cover")
text=text.replace('TeleDirectMD covers 44 states — AR, MA, NM, NY, OR, RI and a few others are not available.', 'TeleDirectMD covers 44 states plus Washington, D.C. — it is not available in Arkansas, Massachusetts, New Mexico, New York, Oregon, or Rhode Island.')
text=text.replace('11 more states', '14 more states')
path.write_text(text)

# Count references that are comments/defaults, plus current static page total.
path=root/'lib/citable-summary.js'; text=path.read_text()
text=text.replace('(2,520 pages: 60 conditions × 43 states)', '(2,520 state-condition pages; Alaska is hub-only)')
text=text.replace('(43 pages)', '(45 current jurisdictions)')
text=text.replace('tdmdCoverageStates = 43', 'tdmdCoverageStates = 44')
path.write_text(text)

# Keep canonical roster order everywhere arrays claim the whole served roster.
canon=[x['abbr'] for x in json.loads((root/'data/states.json').read_text())]
canon_literal=','.join(f'"{x}"' for x in canon)
# Exactly direct areaServed/licensedIn arrays in segment pages; preserve quote style pattern only arrays of state codes.
for p in (root/'app/who-we-serve/[segment]').glob('*Page.js'):
 text=p.read_text()
 def repl(match):
  content=match.group(2)
  vals=re.findall(r"['\"]([A-Z]{2})['\"]",content)
  if set(vals)==set(canon) and len(vals)==len(canon):
   quote='"' if '"' in content else "'"
   return match.group(1)+'['+','.join(f'{quote}{x}{quote}' for x in canon)+']'
  return match.group(0)
 text=re.sub(r'((?:areaServed|licensedIn)\s*:\s*)(\[[^\]]*\])', repl, text, flags=re.S)
 # dynamic objects mapped to areaServed; normalize encoded key order only where every jurisdiction appears
 def obj_repl(match):
  content=match.group(1)
  vals=re.findall(r"['\"]([A-Z]{2})['\"]\s*:",content)
  if set(vals)==set(canon) and len(vals)==len(canon):
   return 'const allStates = {\n'+',\n'.join(f"        '{x}': '{x}'" for x in canon)+'\n      }'
  return match.group(0)
 text=re.sub(r'const allStates\s*=\s*\{([^}]*)\}',obj_repl,text,flags=re.S)
 p.write_text(text)

# Static state grids intentionally exclude DC; normalize them to canonical state order without DC.
state_pairs=[(x['abbr'],x['name']) for x in json.loads((root/'data/states.json').read_text()) if x['abbr']!='DC']
for rel in ['app/use-case/[slug]/page.js','app/compare/[competitor]/page.js','app/cost/[slug]/page.js']:
 p=root/rel; text=p.read_text()
 formatted='const STATE_LIST = [\n  '+','.join(f"['{a}','{n}']" for a,n in state_pairs)+',\n];'
 text=re.sub(r'const STATE_LIST = \[.*?\n\];',formatted,text,count=1,flags=re.S)
 p.write_text(text)

# Direct map data is order-insensitive but maintaining state-data order makes diffs and audits deterministic.
for rel in ['app/HomepageClient.js','lib/cost-compare-schema.js','lib/symptom-schema.js','app/who-we-serve/page.js']:
 p=root/rel; text=p.read_text()
 # comment corrections can be applied safely
 text=text.replace('43 licensed states', '44 licensed states')
 p.write_text(text)
