#!/bin/bash

# ============================================================
# vps-deploy.sh — VPS SERVER script
# Pulls latest code, installs dependencies, builds for
# production, and reloads Nginx.
#
# Usage (on VPS):
#   chmod +x vps-deploy.sh    (one-time setup)
#   ./vps-deploy.sh           (every deployment)
# ============================================================

set -e  # Exit immediately on any error

APP_DIR="/Production/ReidiusInfra/ReactMagicmondWebsite"
NGINX_SERVICE="nginx"

echo ""
echo "🚀 MagicMond Website — VPS Deploy Script"
echo "============================================"

# ── Step 1: Navigate to project directory ─────────────────
cd "$APP_DIR"
echo "📁 Working directory: $(pwd)"

# ── Step 2: Pull latest code from GitHub ──────────────────
echo ""
echo "📥 Pulling latest code from GitHub..."
git pull origin master
echo "✅ Code pulled successfully."

# ── Step 3: Install / update Node.js dependencies ────────
echo ""
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps
echo "✅ Dependencies installed."

# ── Step 4: Build production bundle ───────────────────────
echo ""
echo "🔨 Building production bundle..."
rm -rf dist
npm run build
echo "✅ Build complete. Output: $APP_DIR/dist"

# ── Step 5: Reload Nginx ──────────────────────────────────
echo ""
echo "🔄 Reloading Nginx..."
sudo systemctl reload "$NGINX_SERVICE"
echo "✅ Nginx reloaded successfully."

echo ""
echo "============================================"
echo "✅ Deployment complete! 🎉"
echo "   Site: https://magicmond.com"
echo "============================================"
echo ""
