# 🌦️ ලංකා කාලගුණ — Cloudflare Pages Deploy

## 📁 Structure
```
lanka-weather-cloudflare/
├── public/
│   └── index.html          ← Frontend (Cloudflare Pages serve කරනවා)
├── functions/
│   └── api/
│       └── [[route]].js    ← Backend API (Cloudflare Worker)
├── wrangler.toml
└── README.md
```

---

## 🚀 Deploy Steps (5 minutes)

### Method 1 — Dashboard Upload (ලේසිම ✅)

1. [pages.cloudflare.com](https://pages.cloudflare.com) → Login
2. **Create a project** → **Upload assets**
3. Project name: `lanka-weather`
4. **ZIP ගොනුව ඒකාකාරව upload** (extract **නොකර**)
   - Cloudflare ම extract කරයි
5. **Save and Deploy** → Done! 🎉

### Method 2 — GitHub (Auto-deploy)

```bash
git init && git add . && git commit -m "Lanka Weather"
# GitHub push කරන්න
```
Cloudflare Pages → Connect to Git → Repo select → Deploy

---

## 🔑 API Key Add කිරීම (Optional)

Demo mode ලෙස API key නැතිව හොඳටම run වෙනවා.

Live data ඕනනම්:
1. [openweathermap.org](https://openweathermap.org) → Free API Key
2. Cloudflare Pages → Project → **Settings → Environment Variables**
3. Add: `OWM_API_KEY` = `ඔයාගේ_key`
4. Redeploy

---

## 🌐 Free Plan Limits (ලංකා Weather සඳහා ප්‍රමාණවත්)

| Feature | Free Limit |
|---------|-----------|
| Requests | 100,000 / day |
| Bandwidth | Unlimited |
| Deployments | Unlimited |
| Custom Domain | ✅ Free |
| HTTPS | ✅ Auto |

---

## ✅ API Endpoints

- `GET /api/weather/all` — සියලු දිස්ත්‍රික්ක 25
- `GET /api/weather/colombo` — එක district
- `GET /api/districts` — District list
- `GET /api/health` — Server status
