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

# Detect Nginx config in ngix/ magicmond.com.conf
if [ -f "$APP_DIR/ngix/magicmond.com.conf" ]; then
  NGINX_CONF_SRC="$APP_DIR/ngix/magicmond.com.conf"
elif [ -f "$APP_DIR/nginx/magicmond.com.conf" ]; then
  NGINX_CONF_SRC="$APP_DIR/nginx/magicmond.com.conf"
elif [ -f "$APP_DIR/nginx.conf" ]; then
  NGINX_CONF_SRC="$APP_DIR/nginx.conf"
fi

if [ -n "$NGINX_CONF_SRC" ] && [ -f "$NGINX_CONF_SRC" ]; then
  # Link or copy to sites-available and sites-enabled
  sudo rm -f /etc/nginx/sites-available/magicmond-website
  sudo ln -sf "$NGINX_CONF_SRC" /etc/nginx/sites-available/magicmond-website

  if [ ! -L "/etc/nginx/sites-enabled/magicmond-website" ]; then
    sudo ln -sf /etc/nginx/sites-available/magicmond-website /etc/nginx/sites-enabled/magicmond-website
  fi
  echo "✅ Nginx config linked to $NGINX_CONF_SRC"
else
  echo "⚠️  Warning: Nginx config file not found in repository."
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
