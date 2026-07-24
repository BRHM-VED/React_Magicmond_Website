#!/bin/bash

# ============================================================
# deploy.sh — LOCAL machine script
# Pushes the latest code to GitHub & triggers VPS deployment.
# Run: ./deploy.sh
# ============================================================

set -e  # Exit immediately on any error

VPS_HOST="root@187.127.152.186"
VPS_PATH="/Production/ReidiusInfra/ReactMagicmondWebsite"

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
  
  if [ -t 0 ]; then
    read -rp "Enter commit message (or press Enter for default): " COMMIT_MSG
  else
    COMMIT_MSG=""
  fi
  
  COMMIT_MSG="${COMMIT_MSG:-"chore: update website content and deployment config"}"

  git add -A
  git commit -m "$COMMIT_MSG"
  echo "✅ Changes committed: $COMMIT_MSG"
else
  echo "✅ No uncommitted changes found."
fi

# ── Step 3: Push to GitHub ─────────────────────────────────
echo ""
echo "📤 Pushing to GitHub..."
git push origin master
echo "✅ Code pushed to GitHub successfully."

# ── Step 4: Execute deployment on VPS ──────────────────────
echo ""
echo "🖥️  Connecting to VPS ($VPS_HOST) and executing deployment..."
ssh -o StrictHostKeyChecking=no "$VPS_HOST" "export NVM_DIR=\"\$HOME/.nvm\"; [ -s \"\$NVM_DIR/nvm.sh\" ] && \. \"\$NVM_DIR/nvm.sh\"; cd $VPS_PATH && chmod +x vps-deploy.sh && ./vps-deploy.sh"

echo ""
echo "============================================"
echo "✅ Local & VPS Deployment complete! 🎉"
echo "   Site live at: https://magicmond.com"
echo "============================================"
echo ""
