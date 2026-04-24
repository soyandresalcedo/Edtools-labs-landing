#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
REPO_URL="https://github.com/soyandresalcedo/Edtools-labs-landing.git"

if [[ ! -d .git ]]; then
  git init
  git branch -M main
fi

git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

git add -A
if git rev-parse -q --verify HEAD >/dev/null 2>&1; then
  if ! git diff --cached --quiet || ! git diff --quiet; then
    git commit -m "chore: sync changes"
  fi
else
  git commit -m "Initial commit: Edtools Labs landing (Next.js)"
fi

git push -u origin main
echo "Listo: remoto origin -> $REPO_URL (rama main)"
