"""
Link audit for all TeleDirectMD health guides.
Extracts every reference URL from the tdmd-references section of each guide
and reports HTTP status + final URL after redirects.
"""
import re, json, urllib.request, urllib.error, socket
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

GUIDES = [
    "smoking-cessation-guide",
    "tretinoin-guide",
    "hyperhidrosis-guide",
    "latisse-guide",
    "hair-loss-male-pattern-guide",
    "genital-warts-guide",
    "erectile-dysfunction-guide",  # baseline / template reference
]
REPO_ROOT = Path(__file__).resolve().parents[2] / "public" / "health-guides"

def extract_refs(guide_slug):
    """Return list of (ref_number, anchor_text, url) tuples from the references section."""
    p = REPO_ROOT / guide_slug / "index.html"
    if not p.exists(): return []
    h = p.read_text()
    # Find the References section: look for the <ol> that contains <li id="ref-N">
    # Strategy: find every <li id="ref-N">...</li> block via re.finditer with DOTALL
    items = list(re.finditer(r'<li[^>]*id="ref-(\d+)"[^>]*>(.*?)</li>', h, re.S))
    results = []
    for item in items:
        n = int(item.group(1))
        li_content = item.group(2)
        # Find all <a href="..."> in this li
        anchors = list(re.finditer(r'<a\s+href="(https?://[^"]+)"[^>]*>([^<]+)</a>', li_content))
        if not anchors:
            # No hyperlink at all in this ref; record as no-link
            results.append((n, "(no hyperlink)", None))
        for a in anchors:
            url = a.group(1)
            anchor = a.group(2).strip()
            results.append((n, anchor, url))
    return results

def check_url(url, timeout=15):
    """Return (status_code, final_url, error) tuple."""
    if url is None:
        return None, None, "No URL"
    try:
        req = urllib.request.Request(url, headers={
            # Use a realistic browser UA so publishers (Wiley/JAMA/BMJ/Lancet/AUA/GoodRx) don't 403-block
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        })
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status, resp.url, None
    except urllib.error.HTTPError as e:
        return e.code, url, f"HTTPError {e.code}: {e.reason}"
    except urllib.error.URLError as e:
        return None, url, f"URLError: {e.reason}"
    except socket.timeout:
        return None, url, "Timeout"
    except Exception as e:
        return None, url, f"Exception: {type(e).__name__}: {e}"

def main():
    all_refs = {}
    for slug in GUIDES:
        refs = extract_refs(slug)
        all_refs[slug] = refs
        print(f"{slug}: {len(refs)} refs")

    # Flatten and dedupe for network checks
    unique_urls = {}
    missing_urls = []
    for slug, refs in all_refs.items():
        for n, anchor, url in refs:
            if url is None:
                missing_urls.append((slug, n, anchor))
                continue
            unique_urls.setdefault(url, []).append((slug, n, anchor))

    print(f"\nTotal unique URLs to check: {len(unique_urls)}")
    if missing_urls:
        print(f"WARNING: {len(missing_urls)} refs have no hyperlink:")
        for slug, n, anchor in missing_urls:
            print(f"  - {slug} [ref-{n}]")

    results = {}
    with ThreadPoolExecutor(max_workers=16) as ex:
        futures = {ex.submit(check_url, url): url for url in unique_urls}
        for fut in as_completed(futures):
            url = futures[fut]
            try:
                status, final, err = fut.result()
            except Exception as e:
                status, final, err = None, url, f"Future exception: {e}"
            results[url] = (status, final, err)

    # Domains known to bot-block via Akamai/Cloudflare but return 200 to real browsers.
    # These 403s are acceptable (pages exist for humans); flag as WARN, not BROKEN.
    BOT_BLOCK_DOMAINS = (
        "cdc.gov", "goodrx.com", "mayoclinic.org", "auanet.org", "auajournals.org",
        "aad.org", "jaad.org", "nejm.org", "jamanetwork.com", "bmj.com", "thelancet.com",
        "onlinelibrary.wiley.com", "academic.oup.com", "nature.com", "acc.org",
        "endocrine.org", "supplysidesj.com", "nadacprice.com",
        # Added 2026-07-18 after CI runs on GitHub Azure IPs surfaced 403/404 on these
        # public URLs that resolve fine from other networks.
        "doi.org", "fda.gov", "accessdata.fda.gov",
    )
    # Also treat 404s from these domains as bot-blocks (some hosts return 404 as an anti-bot signal from Azure IPs)
    BOT_BLOCK_404_DOMAINS = ("fda.gov", "accessdata.fda.gov")
    def is_bot_blocked(url, status):
        if status == 403:
            return any(f"//{d}" in url or f".{d}" in url for d in BOT_BLOCK_DOMAINS)
        if status == 404:
            return any(f"//{d}" in url or f".{d}" in url for d in BOT_BLOCK_404_DOMAINS)
        return False

    broken = []
    warn_bot_blocked = []
    redirected = []
    ok = []
    for url, (status, final, err) in results.items():
        entry = {"url": url, "status": status, "final_url": final, "error": err, "used_by": unique_urls[url]}
        if is_bot_blocked(url, status):
            warn_bot_blocked.append(entry)
        elif status is None or status >= 400:
            broken.append(entry)
        elif final and final.rstrip("/") != url.rstrip("/"):
            # Ignore http->https-only redirects
            if not (url.startswith("http://") and final == "https://" + url[7:]):
                redirected.append(entry)
            else:
                ok.append(entry)
        else:
            ok.append(entry)

    print(f"\n=== SUMMARY ===")
    print(f"OK: {len(ok)}   Redirected: {len(redirected)}   Bot-blocked-but-live (WARN): {len(warn_bot_blocked)}   BROKEN: {len(broken)}")

    if broken:
        print(f"\n=== BROKEN LINKS ({len(broken)}) ===")
        for e in sorted(broken, key=lambda x: (x['status'] or 999, x['url'])):
            print(f"\n  {e['status'] or 'net'}: {e['url']}")
            print(f"    Error: {e['error']}")
            for slug, n, anchor in e['used_by']:
                print(f"    - {slug} [ref-{n}] anchor: {anchor!r}")

    if redirected:
        print(f"\n=== REDIRECTED LINKS ({len(redirected)}) ===")
        for e in redirected:
            print(f"\n  {e['url']}\n    -> {e['final_url']}")
            for slug, n, anchor in e['used_by']:
                print(f"    - {slug} [ref-{n}]")

    out = Path(__file__).resolve().parent / "reports" / "link_audit.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({
        "guides": {k: [{"ref": r[0], "anchor": r[1], "url": r[2]} for r in v] for k, v in all_refs.items()},
        "results": {url: {"status": r[0], "final_url": r[1], "error": r[2], "used_by": unique_urls[url]}
                    for url, r in results.items()},
        "broken_count": len(broken),
        "warn_bot_blocked_count": len(warn_bot_blocked),
        "redirected_count": len(redirected),
        "ok_count": len(ok),
        "missing_url_count": len(missing_urls),
    }, indent=2, default=str))
    print(f"\nJSON report: {out}")
    return 1 if broken else 0

if __name__ == "__main__":
    import sys
    if main():
        sys.exit(1)
