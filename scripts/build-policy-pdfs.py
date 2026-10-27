"""Build the Legal Notices and Pre-Visit Safety Screening PDFs in public/.

Matches the layout of the existing patient disclosure PDFs
(financial-responsibility.pdf, telehealth-informed-consent.pdf).

Run: python3 scripts/build-policy-pdfs.py
"""
import os

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

EFFECTIVE = "October 27, 2026"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public")

INK = HexColor("#222222")
MUTED = HexColor("#777777")
TEAL = HexColor("#1F7A7A")

title_style = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=INK)
sub_style = ParagraphStyle("sub", fontName="Helvetica", fontSize=9.5, leading=13, textColor=MUTED)
h2_style = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=13, leading=17, textColor=TEAL,
                          spaceBefore=12, spaceAfter=6)
body_style = ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=15, textColor=INK,
                            spaceAfter=6)
bullet_style = ParagraphStyle("bullet", parent=body_style, leftIndent=14, spaceAfter=4)
link_color = "#1F7A7A"


def link(url, text=None):
    return f'<link href="{url}" color="{link_color}"><u>{text or url}</u></link>'


def bullets(items):
    return [Paragraph(f"• {item}", bullet_style) for item in items]


def build(filename, doc_title, sections):
    path = os.path.join(OUT_DIR, filename)

    def chrome(canvas, doc):
        canvas.saveState()
        canvas.setFont("Helvetica-Bold", 8)
        canvas.setFillColor(MUTED)
        canvas.drawString(doc.leftMargin, letter[1] - 0.75 * inch, "TeleDirectMD")
        canvas.drawString(doc.leftMargin, letter[1] - 0.75 * inch - 11, doc_title)
        canvas.setFont("Helvetica", 7.5)
        canvas.drawCentredString(letter[0] / 2, 0.45 * inch,
                                 f"Effective {EFFECTIVE}  |  Page {doc.page}  |  Patient Disclosure Document")
        canvas.restoreState()

    doc = SimpleDocTemplate(path, pagesize=letter, leftMargin=0.9 * inch, rightMargin=0.9 * inch,
                            topMargin=1.15 * inch, bottomMargin=0.8 * inch,
                            title=f"{doc_title} – TeleDirectMD", author="TeleDirectMD")
    story = [
        Paragraph(doc_title, title_style),
        Spacer(1, 2),
        Paragraph(f"TeleDirectMD | Effective {EFFECTIVE}", sub_style),
        Spacer(1, 10),
        HRFlowable(width="100%", thickness=0.6, color=HexColor("#BBBBBB")),
        Spacer(1, 10),
    ]
    for heading, flowables in sections:
        if heading:
            story.append(Paragraph(heading, h2_style))
        story.extend(flowables)
    doc.build(story, onFirstPage=chrome, onLaterPages=chrome)
    print("wrote", os.path.normpath(path))


def p(text):
    return Paragraph(text, body_style)


legal_notices = [
    (None, [p("By booking a visit with TeleDirectMD, you acknowledge that you have been given access to the "
              "legal notices and policies listed below. Each document is available at any time on our website.")]),
    ("Privacy and Your Health Information", bullets([
        f"<b>Privacy Policy:</b> {link('https://teledirectmd.com/privacy-policy')}",
        f"<b>Notice of Privacy Practices (HIPAA):</b> {link('https://teledirectmd.com/notice-of-privacy-practices')}",
    ])),
    ("Terms and Fees", bullets([
        f"<b>Terms of Service:</b> {link('https://teledirectmd.com/terms-of-service')}",
        f"<b>Financial Responsibility:</b> {link('https://teledirectmd.com/financial-responsibility.pdf')}",
        f"<b>Good Faith Estimate (No Surprises Act):</b> {link('https://teledirectmd.com/good-faith-estimate')}",
    ])),
    ("Consent and Prescribing", bullets([
        f"<b>Informed Consent for Telehealth Services:</b> "
        f"{link('https://teledirectmd.com/telehealth-informed-consent.pdf')}",
        f"<b>State Telehealth Consent Disclosures:</b> {link('https://teledirectmd.com/state-consent-disclosures.pdf')}",
        f"<b>Controlled Substance Policy:</b> {link('https://teledirectmd.com/controlled-substance-policy.pdf')}",
    ])),
    ("Access and Nondiscrimination", bullets([
        f"<b>Nondiscrimination Notice:</b> {link('https://teledirectmd.com/nondiscrimination-notice')}",
        f"<b>Accessibility Statement:</b> {link('https://teledirectmd.com/accessibility')}",
    ])),
    ("Concerns and Complaints", [
        p("If you have a concern about your care, please contact us first so we can try to resolve it:"),
        *bullets([
            f"Email: {link('mailto:contact@teledirectmd.com', 'contact@teledirectmd.com')}",
            "Phone: (678) 956-1855",
        ]),
        p("You may also file a complaint with any of the following at any time. Filing a complaint will not "
          "affect your care."),
        *bullets([
            "New York patients: New York State Office of Professional Medical Conduct",
            f"Patients in other states: your state medical board "
            f"({link('https://www.fsmb.org/contact-a-state-medical-board/', 'find your board')})",
            f"Privacy complaints: U.S. Department of Health and Human Services, Office for Civil Rights "
            f"({link('https://www.hhs.gov/hipaa/filing-a-complaint/index.html', 'file a complaint')})",
        ]),
    ]),
]

safety_screening = [
    (None, [p("TeleDirectMD provides virtual care for non-emergency conditions only. Before your visit, please "
              "confirm that <b>none</b> of the following apply to you right now.")]),
    ("Do Not Book a Video Visit If Any of These Apply", bullets([
        "Chest pain, pressure, or difficulty breathing",
        "Signs of stroke, such as sudden facial drooping, arm weakness, or difficulty speaking",
        "Severe allergic reaction, such as throat swelling, difficulty swallowing, or widespread hives",
        "Suicidal thoughts or thoughts of harming yourself or others",
        "Serious injury requiring imaging or stitches, such as broken bones, deep wounds, or a head injury "
        "with loss of consciousness",
        "Severe abdominal pain with fever, persistent vomiting, or vomiting blood",
        "Currently pregnant or trying to get pregnant",
        "Seeking a prescription for controlled substances, such as opioids, benzodiazepines, or stimulants",
        "Under 18 years of age",
        "Not physically located, for the whole visit, in a state where TeleDirectMD is licensed",
        "Seeking FMLA paperwork, work or school accommodation letters, or disability documentation",
    ])),
    ("If Any of These Apply", [
        p("<b>Call 911 or go to your nearest emergency department</b> for any emergency symptom above. "
          "For a mental health crisis, you can also call or text 988 (Suicide and Crisis Lifeline)."),
        p("For the other items, a video visit is not the right fit. Please contact your primary care "
          "provider or an in-person clinic."),
    ]),
    ("Your Attestation", [
        p("By checking the safety screening box on your intake form, you confirm that none of the items above "
          "apply to you and that you understand TeleDirectMD is not a substitute for emergency care. If your "
          "symptoms change or get worse before or during your visit, stop and seek emergency care."),
    ]),
    ("Questions", [p(f"Contact {link('mailto:contact@teledirectmd.com', 'contact@teledirectmd.com')}.")]),
]

if __name__ == "__main__":
    build("legal-notices.pdf", "Legal Notices", legal_notices)
    build("safety-screening.pdf", "Pre-Visit Safety Screening", safety_screening)
