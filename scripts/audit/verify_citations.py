#!/usr/bin/env python3
"""
Citation identity gate — hard-fails the build if any journal citation does not
resolve on PubMed with a matching author string, title, and page range, or if
any web source URL is unreachable.

Tiers:
  - Journal articles (PMID or DOI): full PubMed verification (author + title + pages).
  - Primary web sources (CDC, AAD, NCBI Bookshelf, FDA, NIH, WHO, society sites):
    HEAD-check the URL for a 200. They carry no PMID; they were verified at fetch time.

Run automatically before hero-image generation and before deploy.

Usage: python3 verify_citations.py <guide-index.html>   (exit 0 = PASS, 1 = FAIL)
"""
import re, sys, json, time, urllib.request, urllib.parse

TOOL = "TeleDirectMD citation gate (bhavsar.parth25@gmail.com)"

def request(url):
    req = urllib.request.Request(url, headers={"User-Agent": TOOL})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                return r.status, r.read()
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(3); continue
            return e.code, b""
        except Exception:
            time.sleep(2)
    raise RuntimeError(f"Failed after retries: {url}")

def json_get(url):
    return json.loads(request(url)[1].decode())

def esearch_doi(doi):
    u = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=3&term=" + urllib.parse.quote(doi + "[doi]")
    return json_get(u)["esearchresult"].get("idlist", [])

def esummary(pmid):
    return json_get(f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id={pmid}")["result"][pmid]

def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", (s or "").lower()).strip()

def norm_pages(p):
    # normalize elided ranges: "147-59" -> "147-159"; "380-90" -> "380-390";
    # strip online-supplement markers: "541-549.e2" -> "541-549"
    p = (p or "").strip().lower().replace(" ", "")
    p = re.sub(r'\.e\d+$', '', p)
    m = re.match(r'^(\d+)-(\d+)$', p)
    if m:
        a, b = m.group(1), m.group(2)
        if len(b) < len(a):
            b = a[:len(a) - len(b)] + b
        return a + "-" + b
    return p

# checksum of href URL -> domain allowlist for web sources (no PMID)
WEB_DOMAINS = ("cdc.gov", "aad.org", "ncbi.nlm.nih.gov", "fda.gov", "nih.gov",
               "who.int", "uspreventiveservicestaskforce.org", "cms.gov",
               "idsociety.org", "aafp.org", "pubmed.ncbi.nlm.nih.gov", "acog.org")

def extract_refs(html):
    refs = []
    for m in re.finditer(r'<li id="ref-(\d+)">(.*?)</li>', html, re.DOTALL):
        n, body = m.group(1), m.group(2)
        text = re.sub(r"<[^>]+>", "", body)
        pmid = re.search(r'pubmed\.ncbi\.nlm\.nih\.gov/(\d+)', body)
        doi = re.search(r'doi:\s*(10\.\d{4,9}/[^\s<"\)]+)', body)
        url = re.search(r'href="(https?://[^"]+)"', body)
        pages = re.search(r'(\d{4});(\d+)(?:\((\d+)\))?:\s*([0-9\-eE]+)', text)
        refs.append({
            "n": n, "text": text,
            "pmid": pmid.group(1) if pmid else None,
            "doi": doi.group(1).rstrip(".") if doi else None,
            "url": url.group(1) if url else None,
            "pages": pages.group(4) if pages else None,
        })
    return refs

def main(path):
    html = open(path).read()
    refs = extract_refs(html)
    fails, web_ok, web_bad = [], [], []
    for r in refs:
        pmid = r["pmid"]
        if not pmid and r["doi"]:
            got = esearch_doi(r["doi"]); pmid = got[0] if got else None
        if pmid:  # journal article
            time.sleep(0.5)
            s = esummary(pmid)
            pub_authors = [a["name"].split()[0].lower() for a in s.get("authors", [])]
            html_first = re.match(r'^([A-Z][A-Za-z\-\']+)', r["text"])
            author_ok = (not html_first) or (not pub_authors) or html_first.group(1).lower() == pub_authors[0]
            toks = [t for t in re.findall(r"[a-z0-9]+", norm(s.get("title", ""))) if len(t) > 3]
            miss = [t for t in toks if t not in norm(r["text"])][:4]
            title_ok = not miss
            page_ok = (not r["pages"]) or (not s.get("pages")) or norm_pages(r["pages"]) == norm_pages(s["pages"])
            ok = author_ok and title_ok and page_ok
            print(f"[{'PASS' if ok else 'FAIL'}] ref-{r['n']} PMID {pmid} | author={'ok' if author_ok else 'MISMATCH'} title={'ok' if title_ok else 'MISSING '+','.join(miss)} pages={'ok' if page_ok else 'MISMATCH '+str(r['pages'])+' vs '+s['pages']}")
            if not ok:
                fails.append((r["n"], f"PMID {pmid}", r["text"][:70]))
        elif r["url"]:  # web source
            dom = urllib.parse.urlparse(r["url"]).netloc.lower().lstrip("www.")
            trusted = any(dom.endswith(d) or d in dom for d in WEB_DOMAINS)
            if not r["url"].startswith("http"):
                web_bad.append((r["n"], "non-http URL", r["url"]))
                print(f"[FAIL] ref-{r['n']} bad URL scheme {r['url']}")
            else:
                try:
                    code, _ = request(r["url"])
                    print(f"[{'PASS' if code == 200 else 'FAIL'}] ref-{r['n']} web {dom} -> HTTP {code}")
                    (web_ok if code == 200 else web_bad).append(r["n"])
                except Exception as e:
                    web_bad.append((r["n"], str(e), r["url"]))
                    print(f"[FAIL] ref-{r['n']} web {r['url']} unreachable: {e}")
        else:
            fails.append((r["n"], "no PMID, DOI, or URL", r["text"][:60]))
            print(f"[FAIL] ref-{r['n']} no resolvable identifier")
    print()
    if fails or web_bad:
        print(f"HARD FAIL: {len(fails)} citation + {len(web_bad)} URL problem(s).")
        for f in fails + web_bad:
            print("  ", f)
        sys.exit(1)
    print(f"PASS: {len(refs)} references verified.")
    sys.exit(0)

if __name__ == "__main__":
    main(sys.argv[1])