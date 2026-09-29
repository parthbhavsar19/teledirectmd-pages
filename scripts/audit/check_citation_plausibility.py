#!/usr/bin/env python3
"""
check_citation_plausibility.py

Semantic guardrail: for every citation in body prose, ask an LLM whether the cited paper's
PubMed abstract plausibly supports the sentence that cites it.

- Extracts (sentence, [ref-N...]) pairs from body prose.
- For each pair, fetches the PubMed abstract of each cited ref (via NCBI eutils).
- Sends the sentence + abstract to an LLM. The LLM returns one of {supports, unclear, contradicts, off_topic}.
- Reports 'contradicts' and 'off_topic' as WARNINGS (advisory, not hard-fail).
- Requires OPENAI_API_KEY. Silently skips the check with a warning if the key is not set — this way CI
  still runs the deterministic checks even without the LLM key.

Baseline mode: same pattern as check_number_attribution.py. Snapshot current warning counts per guide;
CI fails only when a PR regresses.

Cost estimate: gpt-4o-mini at ~$0.15/1M input, $0.60/1M output.
Per guide: ~15 refs * ~800 input tokens (sentence + abstract) + ~50 output = ~$0.002.
Repo-wide (87 guides): ~$0.20 for a full rebaseline.
"""
import argparse
import json
import os
import re
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

REPO_ROOT = Path(__file__).resolve().parents[2]
GUIDE_ROOT = REPO_ROOT / "public" / "health-guides"

MODEL = "gpt-4o-mini"
OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions"

SYSTEM_PROMPT = """You are an expert clinical evidence auditor. You are given ONE sentence from a medical guide
and the PubMed abstract of a paper cited immediately after that sentence.

Your job is to decide whether the abstract PLAUSIBLY supports the specific claim made in the sentence.
Be lenient: if the abstract addresses the same topic and the sentence's claim is directionally consistent
with what the abstract reports, mark it as 'supports'. Only mark 'contradicts' if the abstract's findings
clearly disagree with the sentence's claim, and 'off_topic' if the abstract is about a different topic entirely.

Return STRICT JSON only, no prose:
{"verdict": "supports"|"unclear"|"contradicts"|"off_topic", "reason": "<one short sentence>"}

Guidance:
- "supports": abstract topic matches; claim direction plausible.
- "unclear": abstract addresses topic but doesn't confirm or deny specifics (e.g., you'd need full text).
- "contradicts": abstract findings clearly disagree with the sentence's claim.
- "off_topic": abstract is about a materially different subject; citation likely misplaced.
"""

# --------------------------- HTML extraction (shared with number check) ---------------------------

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

STRIP_TAGS = [
    ("<script", "</script>"),
    ("<style", "</style>"),
    ("<noscript", "</noscript>"),
    ("<svg", "</svg>"),
]

def preprocess(html):
    html = re.sub(r'<script\s+type="application/ld\+json"[^>]*>.*?</script>', "", html, flags=re.S)
    html = strip_tags(html, STRIP_TAGS)
    html = re.sub(r"<head\b.*?</head>", "", html, flags=re.S | re.I)
    html = re.sub(r"<nav\b.*?</nav>", "", html, flags=re.S | re.I)
    html = re.sub(r"<footer\b.*?</footer>", "", html, flags=re.S | re.I)
    html = re.sub(r'<div class="tdmd-references".*', "", html, flags=re.S)
    html = re.sub(r'<h3[^>]*>About the (?:Author|Editor).*', "", html, flags=re.S | re.I)
    return html

def sentences_with_citations(html):
    """Return list of dicts: {sentence_text, cited_refs}. Only sentences with at least one <sup> ref."""
    body = preprocess(html)
    body = re.sub(r"</p>|</li>|</h[1-6]>|</blockquote>|</div>", ".\n", body, flags=re.I)
    body = re.sub(r"<br\s*/?>", ".\n", body, flags=re.I)
    body = re.sub(r"\s+", " ", body)
    raw_sentences = re.split(r"(?<=[.!?])\s+(?=<|[A-Z])", body)
    out = []
    for s in raw_sentences:
        refs = sorted(set(int(n) for n in re.findall(r'href="#ref-(\d+)"', s)))
        if not refs:
            continue
        text = re.sub(r"<[^>]+>", "", s).strip()
        text = re.sub(r"\s+", " ", text)
        if len(text) < 20:
            continue
        out.append({"sentence": text, "refs": refs})
    return out

def extract_refs(html):
    refs = {}
    for m in re.finditer(r'<li[^>]*id="ref-(\d+)"[^>]*>(.*?)</li>', html, re.S):
        n = int(m.group(1))
        body = m.group(2)
        urls = re.findall(r'href="(https?://[^"]+)"', body)
        pmid = None
        for u in urls:
            pm = re.search(r"pubmed\.ncbi\.nlm\.nih\.gov/(\d+)", u)
            if pm:
                pmid = pm.group(1)
                break
        citation_text = re.sub(r"<[^>]+>", " ", body)
        citation_text = re.sub(r"\s+", " ", citation_text).strip()
        refs[n] = {"pmid": pmid, "urls": urls, "citation_text": citation_text}
    return refs

# --------------------------- Abstract fetch ---------------------------

_ABSTRACT_CACHE = {}

def fetch_abstract(pmid, timeout=20):
    if pmid in _ABSTRACT_CACHE:
        return _ABSTRACT_CACHE[pmid]
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={pmid}&rettype=abstract&retmode=text"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "TDMD-CitationAudit/1.0"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            text = resp.read().decode("utf-8", errors="replace")
        _ABSTRACT_CACHE[pmid] = text
        return text
    except Exception:
        _ABSTRACT_CACHE[pmid] = None
        return None

# --------------------------- LLM call ---------------------------

def call_llm(sentence, abstract, api_key, max_retries=3):
    """Call OpenAI chat API. Returns dict {verdict, reason} or None on failure."""
    payload = json.dumps({
        "model": MODEL,
        "temperature": 0,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"SENTENCE:\n{sentence}\n\nABSTRACT:\n{abstract[:4000]}"},
        ],
        "response_format": {"type": "json_object"},
    }).encode("utf-8")

    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(
                OPENAI_ENDPOINT,
                data=payload,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {api_key}",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                body = json.loads(resp.read().decode("utf-8"))
            content = body["choices"][0]["message"]["content"]
            parsed = json.loads(content)
            if "verdict" in parsed:
                return parsed
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < max_retries - 1:
                time.sleep(2 ** attempt)
                continue
            return {"verdict": "error", "reason": f"HTTP {e.code}"}
        except Exception as e:
            if attempt < max_retries - 1:
                time.sleep(1)
                continue
            return {"verdict": "error", "reason": str(e)[:120]}
    return {"verdict": "error", "reason": "max retries exceeded"}

# --------------------------- Main ---------------------------

def audit_guide(guide_path, api_key, max_pairs=None):
    slug = guide_path.parent.name
    html = guide_path.read_text()
    sc = sentences_with_citations(html)
    refs = extract_refs(html)

    # Build the audit queue: (sentence, ref_num, pmid)
    queue = []
    for row in sc:
        for n in row["refs"]:
            if n in refs and refs[n].get("pmid"):
                queue.append((row["sentence"], n, refs[n]["pmid"]))
    if max_pairs:
        queue = queue[:max_pairs]

    # Fetch abstracts in parallel
    unique_pmids = {q[2] for q in queue}
    with ThreadPoolExecutor(max_workers=8) as ex:
        futs = [ex.submit(fetch_abstract, p) for p in unique_pmids]
        for _ in as_completed(futs):
            pass

    # Call LLM per pair
    findings = []
    with ThreadPoolExecutor(max_workers=4) as ex:
        futs = {}
        for sentence, n, pmid in queue:
            abstract = _ABSTRACT_CACHE.get(pmid)
            if not abstract or "PMID" not in abstract:
                findings.append({
                    "sentence": sentence,
                    "ref": n,
                    "pmid": pmid,
                    "verdict": "no_abstract",
                    "reason": "eutils returned empty",
                })
                continue
            futs[ex.submit(call_llm, sentence, abstract, api_key)] = (sentence, n, pmid)
        for fut in as_completed(futs):
            sentence, n, pmid = futs[fut]
            result = fut.result() or {"verdict": "error", "reason": "None returned"}
            findings.append({
                "sentence": sentence,
                "ref": n,
                "pmid": pmid,
                "verdict": result.get("verdict"),
                "reason": result.get("reason", "")[:200],
            })

    warn = [f for f in findings if f["verdict"] in ("contradicts", "off_topic")]
    return {
        "slug": slug,
        "pairs_checked": len(queue),
        "warn_count": len(warn),
        "findings": findings,
        "warnings": warn,
    }

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("guides", nargs="*")
    ap.add_argument("--report", default=str(Path(__file__).parent / "reports" / "citation_plausibility.json"))
    ap.add_argument("--baseline", default=str(Path(__file__).parent / "baselines" / "citation_plausibility_baseline.json"))
    ap.add_argument("--update-baseline", action="store_true")
    ap.add_argument("--changed-files", default=None)
    ap.add_argument("--max-pairs-per-guide", type=int, default=None,
                    help="Cap number of sentence-citation pairs per guide (useful for smoke tests)")
    ap.add_argument("--fail-on-regression", action="store_true", default=True)
    ap.add_argument("--no-fail-on-regression", action="store_false", dest="fail_on_regression")
    ap.add_argument("--skip-if-no-key", action="store_true", default=True,
                    help="If OPENAI_API_KEY not set, exit 0 with a notice (default: on)")
    args = ap.parse_args()

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        if args.skip_if_no_key:
            print("[SKIP] OPENAI_API_KEY not set; skipping citation-plausibility check.")
            print("       Set the secret to enable this advisory layer.")
            sys.exit(0)
        else:
            print("[FAIL] OPENAI_API_KEY is required.")
            sys.exit(2)

    # Determine slugs
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
            print("No health-guide HTML files changed. Skipping plausibility check.")
            sys.exit(0)
    else:
        slugs = args.guides or sorted(p.name for p in GUIDE_ROOT.iterdir()
                                      if p.is_dir() and (p / "index.html").exists()
                                      and p.name not in ("about-the-editor",))

    results = []
    for slug in slugs:
        guide_path = GUIDE_ROOT / slug / "index.html"
        if not guide_path.exists():
            continue
        html = guide_path.read_text()
        if 'id="ref-1"' not in html:
            continue
        r = audit_guide(guide_path, api_key, max_pairs=args.max_pairs_per_guide)
        results.append(r)
        print(f"{slug}: pairs={r['pairs_checked']}, WARN (contradicts/off_topic)={r['warn_count']}")

    # Write report
    out_path = Path(args.report)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps({
        "summary": {
            "guides": len(results),
            "total_warnings": sum(r["warn_count"] for r in results),
        },
        "results": results,
    }, indent=2))
    print(f"\nReport: {out_path}")

    # Baseline
    baseline_path = Path(args.baseline)
    current_counts = {r["slug"]: r["warn_count"] for r in results}
    if args.update_baseline:
        if baseline_path.exists():
            existing = json.loads(baseline_path.read_text()).get("counts", {})
            existing.update(current_counts)
            merged = existing
        else:
            merged = current_counts
        baseline_path.parent.mkdir(parents=True, exist_ok=True)
        baseline_path.write_text(json.dumps({
            "note": "Per-guide baseline for citation-plausibility warnings. CI fails a PR only when a guide's warn count exceeds baseline.",
            "counts": merged,
        }, indent=2))
        print(f"[OK] Baseline updated at {baseline_path}")
        sys.exit(0)

    if args.fail_on_regression and baseline_path.exists():
        baseline = json.loads(baseline_path.read_text()).get("counts", {})
        regressions = []
        for slug, count in current_counts.items():
            base = baseline.get(slug, 0)
            if count > base:
                regressions.append((slug, base, count))
        if regressions:
            print(f"\n[FAIL] {len(regressions)} guide(s) added citation-plausibility warnings vs baseline:")
            for slug, base, count in regressions:
                print(f"  {slug}: baseline={base}, current={count} (+{count - base})")
                r = next(x for x in results if x["slug"] == slug)
                for w in r["warnings"][:5]:
                    print(f"    - [{w['verdict']}] ref-{w['ref']} (PMID {w['pmid']}): {w['reason']}")
                    print(f"      sentence: {w['sentence'][:180]}")
            sys.exit(1)
        print("[OK] No plausibility regressions.")
    else:
        print(f"[OK] Check complete. total warnings={sum(r['warn_count'] for r in results)}")

if __name__ == "__main__":
    main()
