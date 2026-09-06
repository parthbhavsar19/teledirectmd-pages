#!/usr/bin/env python3
"""Read-only regression checks against a completed `next build` static export.

Run directly or with npm run test:prescribing-policy. Does not run prebuild,
postbuild, IndexNow, or touch clinical/editorial data.
"""
import json
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "out"
POLICY = (
    "TeleDirectMD does not prescribe intravenous (IV) medications or intramuscular (IM) medications, "
    "except EpiPen (epinephrine auto-injector) refills when clinically appropriate. "
    "This includes IV fluids and infusions, and IM antibiotic or steroid shots. "
    "We cannot issue these prescriptions for administration at another clinic or by another provider."
)
QUESTION = "Can TeleDirectMD prescribe IV medications or IM shots?"
SHORT = "We do not prescribe IV medications or IM injections. EpiPen auto-injector refills are the only IM exception, when clinically appropriate."


def normalize(text):
    return re.sub(r"\s+", " ", text).strip()


class Element:
    def __init__(self, tag="", attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []

    def all(self, tag=None):
        if tag is None or self.tag == tag:
            yield self
        for child in self.children:
            if isinstance(child, Element):
                yield from child.all(tag)

    def text(self):
        return "".join(
            child if isinstance(child, str) else child.text()
            for child in self.children
            if not isinstance(child, Element) or child.tag not in ("script", "style")
        )

    def raw(self):
        return "".join(child for child in self.children if isinstance(child, str))


class Page(HTMLParser):
    VOID = set("area base br col embed hr img input link meta param source track wbr".split())

    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.root = Element()
        self.stack = [self.root]
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        el = Element(tag, attrs)
        self.stack[-1].children.append(el)
        if tag not in self.VOID:
            self.stack.append(el)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def nodes(value):
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from nodes(child)
    elif isinstance(value, list):
        for child in value:
            yield from nodes(child)


def load(route):
    path = OUT / route.strip("/") / "index.html"
    assert path.exists(), f"Missing representative generated route: {route}"
    return Page(path.read_text()).root


def faq_alignment(root, route, question=QUESTION, expected=POLICY):
    details = [
        el for el in root.all("details")
        if any(question in normalize(summary.text()) for summary in el.all("summary"))
    ]
    assert len(details) == 1, f"{route}: policy FAQ missing or repeated in visible content"
    paragraphs = [normalize(p.text()) for p in details[0].all("p")]
    assert expected in paragraphs, f"{route}: visible policy answer differs"
    answers = []
    for script in root.all("script"):
        if script.attrs.get("type") == "application/ld+json":
            data = json.loads(script.raw())
            answers.extend(
                obj.get("acceptedAnswer", {}).get("text")
                for obj in nodes(data)
                if obj.get("@type") == "Question" and obj.get("name") == question
            )
    assert answers == [expected], f"{route}: JSON-LD policy answer differs or is duplicated"


def main():
    assert OUT.is_dir(), "Build first with next build directly (avoid prebuild/postbuild)."
    # Execute the real policy module, rather than matching implementation comments.
    code = """
const fs = require('fs');
const src = fs.readFileSync('lib/prescribing-policy.js', 'utf8');
import('data:text/javascript;base64,' + Buffer.from(src).toString('base64')).then(m =>
  console.log(JSON.stringify({
    policy: m.PRESCRIBING_POLICY,
    short: m.PRESCRIBING_POLICY_SHORT,
    question: m.PRESCRIBING_POLICY_QUESTION,
    generic: m.prescribingPolicyFaqs('diabetes-refills-online'),
    specific: Object.fromEntries(['epipen-refills-online','chlamydia-treatment-online',
      'viral-gastroenteritis-treatment-online','poison-ivy-oak-treatment-online',
      'migraine-refills-online'].map(slug => [slug, m.prescribingPolicyFaqs(slug)]))
  }))
);
"""
    module = json.loads(subprocess.check_output(["node", "-e", code], cwd=ROOT, text=True))
    assert module["policy"] == POLICY
    assert module["short"] == SHORT
    assert module["question"] == QUESTION
    assert module["generic"] == [{"question": QUESTION, "answer": POLICY}], "Do not add a diabetes/subcutaneous route exclusion"
    assert POLICY in (ROOT / "public/llms.txt").read_text()
    archived_faqs = json.loads((ROOT / "data/faq.json").read_text())
    assert any(item["question"] == QUESTION and item["answer"] == POLICY
               for section in archived_faqs for item in section["items"])

    # Exhaustive route-family coverage, including every custom CA/VT page.
    states = {state["slug"] for state in json.loads((ROOT / "data/states.json").read_text())}
    conditions = {p.stem for p in (ROOT / "data/conditions").glob("*.json") if not p.stem.startswith("_")}
    scoped_families = {"cost", "compare", "use-case", "who-we-serve", "insurance"}
    scoped_count = 0
    footer_count = 0
    for path in OUT.rglob("*.html"):
        parts = path.relative_to(OUT).parts
        if parts[0] == "health-guides":
            continue  # Independent static editorial content is intentionally untouched.
        html = path.read_text()
        assert 'data-prescribing-policy="footer"' in html and POLICY in html, f"{parts}: shared footer policy missing"
        footer_count += 1
        scoped = (parts[0] in states or parts[0] in conditions or parts[0] in scoped_families
                  or parts[:2] == ("faq", "deep-dive"))
        if scoped:
            assert 'data-prescribing-policy="notice"' in html, f"{parts}: booking notice missing"
            assert 'data-prescribing-policy="faq"' in html, f"{parts}: prescribing FAQ missing"
            scoped_count += 1
    assert scoped_count > 1000, "Static route generation unexpectedly shrank"

    routes = ["/", "/faq/", "/ca/", "/vt/", "/ak/", "/hi/", "/de/", "/va/",
              "/uti-treatment-online/", "/diabetes-refills-online/",
              "/ca/uti-treatment-online/", "/vt/uti-treatment-online/",
              "/tx/uti-treatment-online/", "/ak/eczema-treatment-online/",
              "/cost/uti-antibiotics-cost/", "/cost/online-prescription-cost/",
              "/use-case/travel-prescription/", "/who-we-serve/truck-drivers/", "/insurance/"]
    # Take a real generated compare route instead of inventing a competitor slug.
    compare = sorted((OUT / "compare").glob("*/index.html"))
    assert compare, "No comparison routes generated"
    routes.append("/" + str(compare[0].parent.relative_to(OUT)) + "/")
    for slug in module["specific"]:
        routes.extend([f"/{slug}/", f"/ca/{slug}/", f"/tx/{slug}/"])
    routes.append("/vt/chlamydia-treatment-online/")
    for route in routes:
        root = load(route)
        faq_alignment(root, route)
        if route != "/faq/":
            main_content = next(el for el in root.all("main") if el.attrs.get("id") == "main-content")
            notices = [el for el in main_content.all("aside") if el.attrs.get("data-prescribing-policy") == "notice"]
            assert len(notices) == 1 and SHORT in normalize(notices[0].text()), f"{route}: policy absent from main booking content"
        slug = route.strip("/").split("/")[-1]
        if slug in module["specific"]:
            specific = module["specific"][slug][1]
            faq_alignment(root, route, specific["question"], specific["answer"])
            if slug == "epipen-refills-online":
                assert "EpiPen auto-injector refills are the only IM exception, when clinically appropriate." in normalize(notices[0].text()), f"{route}: affirmative EpiPen exception absent from notice"
    scope = load("/what-we-treat/")
    assert any(el.attrs.get("data-prescribing-policy") == "scope" and POLICY in normalize(el.text())
               for el in scope.all()), "What We Treat scope section missing policy"
    for route in ["/visit-ready/"]:
        assert any(el.attrs.get("data-prescribing-policy") == "notice" for el in load(route).all("aside"))
    # Existing service-specific GLP-1 criteria must not be changed by this route policy.
    faq_alignment(load("/faq/"), "/faq/", "What about GLP-1 or weight-loss medications?",
                  "TeleDirectMD does not prescribe GLP-1 agonists (such as semaglutide or tirzepatide) or other weight-loss medications. These require ongoing monitoring and management that falls outside the scope of episodic urgent-care telemedicine.")
    print(json.dumps({"status": "passed", "footer_routes": footer_count,
                      "scoped_routes": scoped_count, "representative_routes": routes}, indent=2))


if __name__ == "__main__":
    main()
