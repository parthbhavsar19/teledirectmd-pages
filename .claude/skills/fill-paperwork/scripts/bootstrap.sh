#!/usr/bin/env bash
# Install the Python dependencies the paperwork toolkit needs.
# Safe to run repeatedly; pip skips what's already present.
set -e
python3 - <<'PY' 2>/dev/null && echo "deps already present" && exit 0
import fitz, docx  # noqa
PY
echo "Installing PyMuPDF + python-docx..."
pip3 install --quiet pymupdf python-docx
python3 -c "import fitz, docx; print('bootstrap OK: pymupdf', fitz.__version__)"
