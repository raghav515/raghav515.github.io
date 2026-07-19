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
3. Your site goes live at `https://<something>.netlify.app`. You can rename it under
   **Site configuration → Change site name**, and add a custom domain later under **Domain management**.
4. Edit `astro.config.mjs` and set `site` to your final URL, then commit — this keeps links/SEO correct.

---

## 4. Turn on the content manager (`/admin`)

The CMS logs you in through Netlify Identity and saves changes back to GitHub.

1. In your Netlify site: **Site configuration → Identity → Enable Identity**.
2. Under Identity → **Registration**, set it to **Invite only** (so only you can log in).
3. Under Identity → **Services → Git Gateway**, click **Enable Git Gateway**.
4. Under Identity → **Invite users**, invite your own email. Check your inbox, accept, set a password.
5. Visit `https://YOUR-SITE.netlify.app/admin/` and log in.

You'll see **Projects, Writing, Journey, and Site**. Add or edit an entry, hit **Publish**, and
Netlify rebuilds automatically in about a minute. Images you upload land in `public/uploads`.

> Tip: to test the CMS on your own machine before deploying, uncomment `local_backend: true` in
> `public/admin/config.yml`, run `npx decap-server` in one terminal and `npm run dev` in another,
> then open http://localhost:4321/admin/.

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
