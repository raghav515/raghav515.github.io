# Raghavendra Jadhav — Portfolio

A custom-designed portfolio built with **Astro** and a built-in **content manager (Decap CMS)**.
After a one-time deploy, you add and edit projects, writing, and journey entries from a visual
dashboard at `/admin` — no code required. Content is stored as Markdown in this repo, so it's
100% yours and free to host forever.

---

## What's here

```
src/
  content/        your content (edited via /admin, stored as Markdown)
    projects/     the five seeded projects
    blog/         a sample tutorial
    journey/      a sample journey entry
  data/site.json  hero tagline, portrait, and contact links
  pages/          the routes (home, /projects, /blog, /journey + detail pages)
  layouts/ components/ styles/   the design
public/
  admin/          the CMS (index.html + config.yml)
  uploads/        where CMS-uploaded images are saved
```

---

## 1. Run it locally (optional but recommended)

You'll need **Node.js 20+**. In this folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:4321). To confirm the production build is clean:

```bash
npm run build
```

If `npm run build` finishes without errors, you're ready to deploy.

---

## 2. Put it on GitHub

Create a new empty repo on GitHub, then:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/raghav515/YOUR-REPO.git
git push -u origin main
```

---

## 3. Deploy on Netlify (free)

1. Go to netlify.com → **Add new site → Import an existing project** → pick your GitHub repo.
2. Netlify reads `netlify.toml`, so the build command (`npm run build`) and publish directory
   (`dist`) are already set. Click **Deploy**.
3. Add a custom domain under **Domain management**. This site is already live at
   `https://www.raghavendrajadhav.in`, and `astro.config.mjs` / `robots.txt` / the sitemap are
   already pointed at that URL — if the domain ever changes, update `site` in `astro.config.mjs`
   and the `Sitemap:` line in `public/robots.txt` to match.

---

## 4. Turn on the content manager (`/admin`)

The CMS logs you in via **DecapBridge** (a hosted PKCE OAuth bridge for Decap CMS) rather than
Netlify Identity — Netlify Identity is deprecated for new sites, so `public/admin/config.yml` is
already configured with a DecapBridge `backend` block pointing at your registered site
(`sites/<your-site-id>` under `auth.decapbridge.com`). If you ever need to re-register or rotate
this, see decapbridge.com for the current setup flow.

Visit `https://www.raghavendrajadhav.in/admin/`, log in, and you'll see **Projects, Writing,
Journey, and Site**. Add or edit an entry, hit **Publish**, and Netlify rebuilds automatically in
about a minute. Images you upload land in `public/uploads`.

> Tip: `local_backend: true` is enabled in `public/admin/config.yml` so you can also test the CMS
> locally — run `npx decap-server` in one terminal and `npm run dev` in another, then open
> http://localhost:4321/admin/.

---

## 5. Add your photo

Two ways:

- **Via the CMS:** open `/admin` → **Site → Profile & Contact** → upload **Portrait photo** → Publish.
- **By hand:** drop an image at `public/uploads/portrait.jpg`, then set `"portrait": "/uploads/portrait.jpg"`
  in `src/data/site.json` and commit.

Until then, the hero shows a labelled placeholder frame.

---

## Everyday editing

- **New project** → `/admin` → Projects → New. Fill in the fields, add a cover and gallery images,
  write the full description, Publish. It appears on `/projects` and (if *Feature on homepage* is on)
  on the homepage.
- **New tutorial/post** → Writing → New.
- **New journey entry** → Journey → New.
- **Change your tagline, contact links, or photo** → Site → Profile & Contact.

All of it commits to GitHub and redeploys on its own. That's the whole loop.
