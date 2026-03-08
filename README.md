# 🌷 Nishtha Intel — Vercel Deployment Guide

## Project Structure
```
nishtha-intel/
├── index.html              ← Frontend (Android-style UI)
├── vercel.json             ← Vercel routing config
└── api/
    ├── phone/
    │   └── [number].js     ← Phone lookup proxy (bypasses CORS)
    └── aadhar/
        └── [number].js     ← Aadhaar lookup proxy (bypasses CORS)
```

## Why a Proxy?
Browsers block direct HTTP requests to external servers (CORS policy).
The `/api/` routes run on Vercel's servers (Node.js) which have no such restriction —
they fetch data from your API server and pass it back to the browser.

## Deploy Steps

### 1. Upload to GitHub
```bash
git init
git add .
git commit -m "Nishtha Intel - Initial deploy"
git remote add origin https://github.com/YOUR_USERNAME/nishtha-intel.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to https://vercel.com
2. Click **"Add New Project"**
3. Import your GitHub repo
4. Leave all settings default → click **Deploy**
5. Done ✅

## Developers
- Nishtha 🌷
- Ranjay Yadav 🌷 — Telegram: @ranjayranjan01
