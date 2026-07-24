#!/bin/bash

# ============================================================
# vps-deploy.sh — VPS SERVER script
# Pulls latest code, installs dependencies, builds for
# production, updates Nginx config from this repository, and reloads Nginx.
#
# Usage (on VPS):
#   chmod +x vps-deploy.sh    (one-time setup)
#   ./vps-deploy.sh           (every deployment)
# ============================================================

set -e  # Exit immediately on any error

APP_DIR="/Production/ReidiusInfra/ReactMagicmondWebsite"
NGINX_CONF_SRC="$APP_DIR/nginx.conf"
NGINX_CONF_DEST="/etc/nginx/sites-available/magicmond-website"
NGINX_CONF_LINK="/etc/nginx/sites-enabled/magicmond-website"

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

# ── Step 5: Update Nginx config from repository ───────────
echo ""
echo "⚙️  Updating Nginx configuration from repository..."
if [ -f "$NGINX_CONF_SRC" ]; then
  sudo cp "$NGINX_CONF_SRC" "$NGINX_CONF_DEST"
  if [ ! -L "$NGINX_CONF_LINK" ] && [ ! -f "$NGINX_CONF_LINK" ]; then
    sudo ln -s "$NGINX_CONF_DEST" "$NGINX_CONF_LINK"
  fi
  echo "✅ Nginx config updated from $NGINX_CONF_SRC"
else
  echo "⚠️  Warning: $NGINX_CONF_SRC not found, skipping Nginx config copy."
fi

# ── Step 6: Test & Reload Nginx ───────────────────────────
echo ""
echo "🔍 Testing Nginx configuration..."
sudo nginx -t

echo ""
echo "🔄 Reloading Nginx service..."
sudo systemctl reload nginx
echo "✅ Nginx tested & reloaded successfully."

echo ""
echo "============================================"
echo "✅ Deployment complete! 🎉"
echo "   Site: https://magicmond.com"
echo "============================================"
echo ""
