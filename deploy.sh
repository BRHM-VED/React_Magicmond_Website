#!/bin/bash

# ============================================================
# deploy.sh — LOCAL machine script
# Pushes the latest code to GitHub so the VPS can pull it.
# Run: ./deploy.sh
# ============================================================

set -e  # Exit immediately on any error

echo ""
echo "🚀 MagicMond Website — Local Deploy Script"
echo "============================================"

# ── Step 1: Ensure we are in the project root ──────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
echo "📁 Working directory: $(pwd)"

# ── Step 2: Check for uncommitted changes ──────────────────
if [[ -n $(git status --porcelain) ]]; then
  echo ""
  echo "📝 Uncommitted changes detected."
  git status --short
  echo ""
  read -rp "Enter commit message (or press Enter for default): " COMMIT_MSG
  COMMIT_MSG="${COMMIT_MSG:-"chore: update website content"}"

  git add -A
  git commit -m "$COMMIT_MSG"
  echo "✅ Changes committed: $COMMIT_MSG"
else
  echo "✅ No uncommitted changes found."
fi

# ── Step 3: Push to GitHub ─────────────────────────────────
echo ""
echo "📤 Pushing to GitHub..."
git push origin main
echo "✅ Code pushed to GitHub successfully."

echo ""
echo "============================================"
echo "✅ Local deploy complete!"
echo ""
echo "👉 Next step: SSH into your VPS and run:"
echo "   cd /Production/ReidiusInfra/ReactMagicmondWebsite && git pull && ./vps-deploy.sh"
echo "============================================"
echo ""
