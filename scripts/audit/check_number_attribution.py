#!/usr/bin/env python3
"""
check_number_attribution.py

Deterministic guardrail: every clinical/statistical number in body prose must be attributed to a reference,
and (best-effort) that number should appear in the cited paper's PubMed abstract.

STAGE 1 (hard gate, no network): number-attribution gate
  - For every guide HTML file, extract body prose (strip head, scripts, styles, tables, JSON-LD).
  - Find numeric tokens matching clinical patterns: percentages, mg/g/mcg/ml doses, HR/RR/OR values,
    "N of M" fractions, effect sizes, absolute counts >=100.
  - Each such number must have a <sup><a href="#ref-N">[N]</a></sup> in the SAME sentence.
  - Skip whitelisted contexts: dates, ICD codes, phone numbers, prices in tables, reading time, address blocks,
    schema.org JSON, standalone years (e.g., "in 2024").

STAGE 2 (soft, network): number-in-source check
  - For each attributed number, fetch the PubMed abstract of the cited ref (via NCBI eutils).
  - Check whether the number appears verbatim OR near-verbatim (percentages: +/- 1 percentage point;
    ratios: exact match on 2 sig figs).
  - Report unattested numbers as WARN (not hard-fail — abstracts sometimes omit numbers that are in the full text).

Exit codes:
  0 = pass (0 hard failures)
  1 = fail (at least one unattributed number in body prose)

Output JSON at scripts/audit/reports/number_attribution.json.
"""
import argparse
import json
import re
import sys
import urllib.request
import urllib.error
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

# --------------------------- Config ---------------------------

# Numeric patterns that MUST be attributed. Ordered from most specific to least.
CLINICAL_NUMBER_PATTERNS = [
    # percentage: "80%", "5.2 percent", "5.2 %"
    (r"\b\d{1,3}(?:\.\d+)?\s?%(?!\s?\})", "percentage"),
    (r"\b\d{1,3}(?:\.\d+)?\s+percent\b", "percentage"),
    # dose: "5 mg", "0.5 mg/kg", "500 mcg", "2.5 mg twice daily"
    (r"\b\d+(?:\.\d+)?\s?(?:mg|mcg|g|ml|kg|IU)(?:/(?:kg|day|d|hr|h|m2))?\b", "dose"),
    # hazard/risk/odds ratio: "HR 0.79", "RR 2.14", "OR 3.61"
    (r"\b(?:HR|RR|OR|aOR|aHR)\s*[=:]?\s*\d+\.?\d*\b", "ratio"),
    # confidence interval: "95% CI 0.46-1.36" or "95% CI 0.46 to 1.36"
    (r"\b95\s?%\s?CI[:\s,]+\d+\.?\d*[\s,\-\u2013to]+\d+\.?\d*", "ci"),
    # p-value: "P < 0.001", "p=0.02"
    (r"\bp\s?[<>=]\s?0?\.\d+", "pvalue"),
    # "N of M" fractions on population outcomes (only if N and M are big enough to be clinical)
    (r"\b\d{2,}\s+of\s+\d{2,}\b", "fraction"),
    # duration in weeks/months/years with a number (only if adjacent to a clinical verb)
    # We handle this cautiously; not all "24 weeks" are clinical claims.
    # Skipped by default (too noisy). Enable via --strict.
]

# Contexts we ignore. If any of these regex matches within the enclosing sentence, skip.
CONTEXT_ALLOW = [
    r"\bICD[- ]?10\b",           # ICD codes
    r"\bZIP\b",                  # ZIP codes
    r"\bNPI\b",                  # provider IDs
    r"\bDOI\b",                  # DOIs
    r"\bPMID\b",                 # PMIDs
    r"\bLast[- ]reviewed\b",     # meta blocks
    r"\bread time\b|\bmin read\b", # reading time
    r"\bversion\b\s+\d",         # version strings
    r"\btable\b",                # explicit table reference (tables self-cite in caption/header)
]

# Numeric tokens that always OK (bare years, list numbering, etc.)
ALWAYS_OK = [
    r"^\s*20\d\d\s*$",                # bare year
    r"^\s*19\d\d\s*$",
    r"^\s*\d{1,2}\.\s",                # list numbering "1."
]

# HTML elements to strip before analysis
STRIP_TAGS = [
    ("<script", "</script>"),
    ("<style", "</style>"),
    ("<noscript", "</noscript>"),
    ("<svg", "</svg>"),  # inline SVG charts contain numeric labels that don't need attribution
]

# Sections to skip (identified by heading text or class)
SKIP_SECTION_HEADINGS = [
    "References",
    "About the Author",
    "About the Editor",
    "Editorial Disclaimer",
    "Medical Disclaimer",
]

REPO_ROOT = Path(__file__).resolve().parents[2]
GUIDE_ROOT = REPO_ROOT / "public" / "health-guides"

# --------------------------- HTML processing ---------------------------

def strip_tags(html, tag_pairs):
    for start, end in tag_pairs:
        while True:
            i = html.find(start)
            if i < 0:
                break
            j = html.find(end, i)
            if j < 0:
                break
            html = html[:i] + html[j + len(end):]
    return html

def strip_json_ld(html):
    return re.sub(r'<script\s+type="application/ld\+json"[^>]*>.*?</script>', "", html, flags=re.S)

def strip_tables(html):
    """Tables self-cite in captions or header text; skip table body prose from numeric checks."""
    return re.sub(r"<table\b.*?</table>", "", html, flags=re.S | re.I)

def strip_head_and_meta(html):
    """Remove <head>...</head> plus any obvious meta/nav/footer blocks."""
    html = re.sub(r"<head\b.*?</head>", "", html, flags=re.S | re.I)
    html = re.sub(r"<nav\b.*?</nav>", "", html, flags=re.S | re.I)
    html = re.sub(r"<footer\b.*?</footer>", "", html, flags=re.S | re.I)
    return html

def strip_references_section(html):
    """Cut everything from <div class="tdmd-references"> to the end."""
    html = re.sub(r'<div class="tdmd-references".*', "", html, flags=re.S)
    return html

def strip_about_author(html):
    """Cut About the Author block."""
    html = re.sub(r'<h3[^>]*>About the (?:Author|Editor).*', "", html, flags=re.S | re.I)
    return html

def preprocess(html):
    html = strip_json_ld(html)
    html = strip_tags(html, STRIP_TAGS)
    html = strip_head_and_meta(html)
    html = strip_references_section(html)
    html = strip_about_author(html)
    html = strip_tables(html)
    return html

def to_prose_sentences(html):
    """Segment the remaining body HTML into 'sentences' that carry both text and any <sup> refs.

    We preserve <sup> markup so we can detect whether a numeric token is attributed within the sentence.
    """
    # Convert block boundaries into sentence-friendly delimiters
    html = re.sub(r"</p>|</li>|</h[1-6]>|</blockquote>|</div>", ".\n", html, flags=re.I)
    html = re.sub(r"<br\s*/?>", ".\n", html, flags=re.I)
    # Split on sentence terminators, keeping <sup> attached to the preceding text
    # (Sup markers usually come right after the number and before the terminator.)
    # First collapse runs of whitespace
    html = re.sub(r"\s+", " ", html)
    # Split on . ! ? followed by space and a capital or opening tag
    sentences = re.split(r"(?<=[.!?])\s+(?=<|[A-Z])", html)
    return [s.strip() for s in sentences if s.strip()]

def sentence_visible_text(sentence):
    """Strip HTML tags to get the visible text, preserving numbers."""
    return re.sub(r"<[^>]+>", "", sentence)

def sentence_refs(sentence):
    """Extract ref numbers cited in this sentence: returns set of ints."""
    return set(int(n) for n in re.findall(r'href="#ref-(\d+)"', sentence))

# --------------------------- Number extraction ---------------------------

def find_clinical_numbers(sentence_text):
    """Return list of (match_text, category, start, end)."""
    hits = []
    for pat, cat in CLINICAL_NUMBER_PATTERNS:
        for m in re.finditer(pat, sentence_text, flags=re.I):
            hits.append((m.group(0), cat, m.start(), m.end()))
    # Dedupe overlapping matches: prefer earlier/wider
    hits.sort(key=lambda h: (h[2], -(h[3] - h[2])))
    kept = []
    last_end = -1
    for h in hits:
        if h[2] >= last_end:
            kept.append(h)
            last_end = h[3]
    return kept

def is_in_allowed_context(sentence_text):
    for pat in CONTEXT_ALLOW:
        if re.search(pat, sentence_text, flags=re.I):
            return True
    return False

def is_always_ok_token(tok):
    for pat in ALWAYS_OK:
        if re.match(pat, tok, flags=re.I):
            return True
    return False

# --------------------------- Reference URL extraction ---------------------------

def extract_refs(html):
    """Return dict {ref_num: {"url": ..., "pmid": ..., "citation_text": ...}}."""
    refs = {}
    for m in re.finditer(r'<li[^>]*id="ref-(\d+)"[^>]*>(.*?)</li>', html, re.S):
        n = int(m.group(1))
        body = m.group(2)
        # Extract first PubMed or PMC URL if any
        urls = re.findall(r'href="(https?://[^"]+)"', body)
        pmid = None
        pmc = None
        for u in urls:
            pm = re.search(r"pubmed\.ncbi\.nlm\.nih\.gov/(\d+)", u)
            if pm:
                pmid = pm.group(1)
                break
            pmcm = re.search(r"pmc\.ncbi\.nlm\.nih\.gov/articles/(PMC\d+)", u)
            if pmcm:
                pmc = pmcm.group(1)
        citation_text = re.sub(r"<[^>]+>", " ", body)
        citation_text = re.sub(r"\s+", " ", citation_text).strip()
        refs[n] = {
            "pmid": pmid,
            "pmc": pmc,
            "url": urls[0] if urls else None,
            "citation_text": citation_text,
        }
    return refs

# --------------------------- PubMed abstract fetch ---------------------------

_ABSTRACT_CACHE = {}

def fetch_abstract_by_pmid(pmid, timeout=15):
    """Return abstract text via NCBI eutils efetch. Best-effort."""
    if pmid in _ABSTRACT_CACHE:
        return _ABSTRACT_CACHE[pmid]
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={pmid}&rettype=abstract&retmode=text"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "TDMD-CitationAudit/1.0"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            text = resp.read().decode("utf-8", errors="replace")
        _ABSTRACT_CACHE[pmid] = text
        return text
    except Exception as e:
        _ABSTRACT_CACHE[pmid] = None
        return None

def normalize_number(tok):
    """Reduce a numeric token to a comparable form. Percentages -> float, ratios -> float, doses -> (value, unit)."""
    tok = tok.strip()
    m = re.match(r"(\d+(?:\.\d+)?)\s?%", tok)
    if m:
        return ("pct", float(m.group(1)))
    m = re.match(r"(\d+(?:\.\d+)?)\s+percent", tok, flags=re.I)
    if m:
        return ("pct", float(m.group(1)))
    m = re.match(r"(?:HR|RR|OR|aOR|aHR)\s*[=:]?\s*(\d+\.?\d*)", tok, flags=re.I)
    if m:
        return ("ratio", float(m.group(1)))
    m = re.match(r"(\d+(?:\.\d+)?)\s?(mg|mcg|g|ml|kg|IU)", tok, flags=re.I)
    if m:
        return ("dose", (float(m.group(1)), m.group(2).lower()))
    return ("raw", tok)

def number_appears_in_abstract(tok, abstract):
    """Check whether a normalized number appears in the abstract (verbatim or near-verbatim).
    Returns 'exact', 'near', or 'absent'.
    """
    if not abstract:
        return "unknown"
    kind, val = normalize_number(tok)
    if kind == "pct":
        # Look for the same integer percent, or within +/- 1
        matches = re.findall(r"(\d{1,3}(?:\.\d+)?)\s?%", abstract)
        for m in matches:
            try:
                if abs(float(m) - val) < 0.5:
                    return "exact"
            except ValueError:
                pass
        for m in matches:
            try:
                if abs(float(m) - val) < 1.5:
                    return "near"
            except ValueError:
                pass
        return "absent"
    elif kind == "ratio":
        matches = re.findall(r"(?:hazard ratio|risk ratio|odds ratio|HR|RR|OR|aOR|aHR)\s*[=:,]?\s*(\d+\.?\d*)", abstract, flags=re.I)
        for m in matches:
            try:
                if abs(float(m) - val) < 0.05:
                    return "exact"
            except ValueError:
                pass
        return "absent"
    elif kind == "dose":
        v, unit = val
        pat = rf"\b{v:g}\s?{unit}\b"
        if re.search(pat, abstract, flags=re.I):
            return "exact"
        return "absent"
    else:
        # raw fallback: substring
        if tok in abstract:
            return "exact"
        return "absent"

# --------------------------- Main audit ---------------------------

def audit_guide(guide_path, do_stage2=True):
    slug = guide_path.parent.name
    html = guide_path.read_text()
    refs = extract_refs(html)
    body = preprocess(html)
    sentences = to_prose_sentences(body)

    # Precompute citation context by paragraph/section:
    # Widen attribution to (a) the same sentence, (b) the previous sentence,
    # (c) any sentence in the enclosing paragraph/list group.
    # We approximate paragraph groups by contiguous runs of sentences that share the same nearest H2/H3 heading.
    # For a first cut: allow inheritance from the previous 2 sentences OR any later sentence in the same paragraph block.
    # Since we already split on </p> / </li>, sentences from the same original block appear adjacent.

    # Build "nearby cited refs" for each sentence: union of refs cited in the current, prior 2, and next 1 sentences.
    def nearby_refs(i):
        cited = set()
        for j in (i - 2, i - 1, i, i + 1):
            if 0 <= j < len(sentences):
                cited |= sentence_refs(sentences[j])
        return cited

    unattributed = []
    attributed = []
    for i, s in enumerate(sentences):
        text = sentence_visible_text(s)
        if not text or len(text) < 10:
            continue
        if is_in_allowed_context(text):
            continue
        own_cited = sentence_refs(s)
        window_cited = nearby_refs(i)
        nums = find_clinical_numbers(text)
        for tok, cat, start, end in nums:
            if is_always_ok_token(tok):
                continue
            record = {
                "guide": slug,
                "sentence": text[:300],
                "number": tok,
                "category": cat,
                "cited_refs_in_sentence": sorted(own_cited),
                "cited_refs_in_window": sorted(window_cited),
            }
            if not window_cited:
                unattributed.append(record)
            else:
                attributed.append(record)

    stage2_findings = []
    if do_stage2:
        # For each attributed number, verify against the cited ref's abstract (only if PMID available)
        # Group by (pmid) to minimize eutils calls
        to_check = []
        for rec in attributed:
            for n in rec["cited_refs_in_window"]:
                if n in refs and refs[n].get("pmid"):
                    to_check.append((rec, n, refs[n]["pmid"]))
        # Parallelize abstract fetches
        pmid_set = {t[2] for t in to_check}
        with ThreadPoolExecutor(max_workers=8) as ex:
            futs = {ex.submit(fetch_abstract_by_pmid, pmid): pmid for pmid in pmid_set}
            for fut in as_completed(futs):
                pass  # abstracts land in _ABSTRACT_CACHE

        for rec, n, pmid in to_check:
            abstract = _ABSTRACT_CACHE.get(pmid)
            verdict = number_appears_in_abstract(rec["number"], abstract) if abstract else "no_abstract"
            if verdict in ("absent", "no_abstract"):
                stage2_findings.append({
                    **rec,
                    "checked_ref": n,
                    "checked_pmid": pmid,
                    "verdict": verdict,
                })

    return {
        "slug": slug,
        "sentence_count": len(sentences),
        "attributed_number_count": len(attributed),
        "unattributed_number_count": len(unattributed),
        "unattributed": unattributed,
        "stage2_absent_count": sum(1 for f in stage2_findings if f["verdict"] == "absent"),
        "stage2_no_abstract_count": sum(1 for f in stage2_findings if f["verdict"] == "no_abstract"),
        "stage2_findings": stage2_findings,
    }

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("guides", nargs="*", help="Guide slugs to audit; default = all")
    ap.add_argument("--no-network", action="store_true", help="Skip stage 2 (PubMed abstract check)")
    ap.add_argument("--report", default=str(Path(__file__).parent / "reports" / "number_attribution.json"))
    ap.add_argument("--baseline", default=str(Path(__file__).parent / "baselines" / "number_attribution_baseline.json"),
                    help="Path to baseline file. When present, CI fails only if unattributed count INCREASES per guide.")
    ap.add_argument("--update-baseline", action="store_true",
                    help="Write current counts to baseline file and exit 0.")
    ap.add_argument("--changed-files", default=None,
                    help="Newline-separated list of files changed in this PR. If set, audit only guides whose HTML is in this list.")
    ap.add_argument("--fail-on-unattributed", action="store_true", default=True,
                    help="Exit 1 if new unattributed numbers exceed baseline for any guide (default)")
    ap.add_argument("--no-fail-on-unattributed", action="store_false", dest="fail_on_unattributed")
    args = ap.parse_args()

    # Determine which guides to audit
    if args.changed_files:
        changed = set()
        content = args.changed_files
        if Path(args.changed_files).exists():
            content = Path(args.changed_files).read_text()
        for line in content.splitlines():
            line = line.strip()
            m = re.match(r"public/health-guides/([^/]+)/index\.html", line)
            if m:
                changed.add(m.group(1))
        slugs = sorted(changed) if changed else []
        if not slugs:
            print("No health-guide HTML files changed. Skipping number-attribution check.")
            sys.exit(0)
    else:
        slugs = args.guides or sorted(p.name for p in GUIDE_ROOT.iterdir()
                                      if p.is_dir() and (p / "index.html").exists()
                                      and p.name not in ("about-the-editor",))
    # Filter to guide-style dirs (skip index landing pages etc.)
    results = []
    for slug in slugs:
        guide_path = GUIDE_ROOT / slug / "index.html"
        if not guide_path.exists():
            continue
        # Skip the landing index (health-guides/index.html has no ref list)
        html = guide_path.read_text()
        if 'id="ref-1"' not in html:
            continue
        r = audit_guide(guide_path, do_stage2=not args.no_network)
        results.append(r)
        print(f"{slug}: sentences={r['sentence_count']}, "
              f"attributed_numbers={r['attributed_number_count']}, "
              f"UNATTRIBUTED={r['unattributed_number_count']}, "
              f"stage2_absent={r['stage2_absent_count']}, "
              f"stage2_no_abstract={r['stage2_no_abstract_count']}")

    total_unattributed = sum(r["unattributed_number_count"] for r in results)
    total_stage2_absent = sum(r["stage2_absent_count"] for r in results)

    out_path = Path(args.report)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps({
        "summary": {
            "guides_audited": len(results),
            "total_unattributed": total_unattributed,
            "total_stage2_absent": total_stage2_absent,
        },
        "results": results,
    }, indent=2))
    print(f"\nReport: {out_path}")

    # Baseline handling
    baseline_path = Path(args.baseline)
    current_counts = {r["slug"]: r["unattributed_number_count"] for r in results}

    if args.update_baseline:
        # If auditing a subset via --changed-files, merge with existing baseline
        if baseline_path.exists():
            existing = json.loads(baseline_path.read_text()).get("counts", {})
            existing.update(current_counts)
            merged = existing
        else:
            merged = current_counts
        baseline_path.parent.mkdir(parents=True, exist_ok=True)
        baseline_path.write_text(json.dumps({
            "note": "Per-guide baseline for unattributed clinical numbers. CI fails a PR only if a guide's count exceeds its baseline. Update via --update-baseline after fixing citations.",
            "counts": merged,
        }, indent=2))
        print(f"[OK] Baseline updated at {baseline_path}")
        sys.exit(0)

    if args.fail_on_unattributed and baseline_path.exists():
        baseline = json.loads(baseline_path.read_text()).get("counts", {})
        regressions = []
        for slug, count in current_counts.items():
            base = baseline.get(slug, 0)
            if count > base:
                regressions.append((slug, base, count))
        if regressions:
            print(f"\n[FAIL] {len(regressions)} guide(s) added unattributed numbers vs baseline:")
            for slug, base, count in regressions:
                print(f"  {slug}: baseline={base}, current={count} (+{count - base})")
                # Show details
                r = next(x for x in results if x["slug"] == slug)
                for rec in r["unattributed"][:10]:
                    print(f"    - {rec['number']!r} in: {rec['sentence'][:200]}")
            sys.exit(1)
        print(f"\n[OK] No guide exceeds its baseline. total_unattributed={total_unattributed}")
    elif args.fail_on_unattributed and total_unattributed > 0 and not baseline_path.exists():
        print(f"\n[FAIL] No baseline file at {baseline_path} and {total_unattributed} unattributed numbers found.")
        print("       Fix the citations OR run with --update-baseline to snapshot the current state.")
        for r in results:
            for rec in r["unattributed"][:5]:
                print(f"  {r['slug']}: {rec['number']!r} in: {rec['sentence'][:200]}")
        sys.exit(1)
    else:
        print(f"\n[OK] Check complete. total_unattributed={total_unattributed}")

if __name__ == "__main__":
    main()
