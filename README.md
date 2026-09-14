# zahirulislam.dev

Personal portfolio site for Md Zahirul Islam — Lead Cloud Developer. Built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed
to GitHub Pages via GitHub Actions.

**Live site:** https://zahirulislam.dev

## Stack

- **Astro** — static site generator
- **Tailwind CSS** — styling
- **GitHub Actions** — build & deploy on every push to `main`
- **GitHub Pages** — hosting, with a custom domain (`zahirulislam.dev`) via Cloudflare Registrar/DNS
- **Cloudflare Web Analytics** — privacy-friendly page-view tracking
- **Formspree** — contact form backend (no server needed)

## Project structure

```text
/
├── public/              # static files, copied as-is to the built site
│   ├── favicon.svg
│   ├── og-image.png     # social share preview image
│   ├── profile_pic.jpg  # sidebar profile photo
│   ├── resume.pdf        # downloadable CV
│   ├── robots.txt
│   └── CNAME             # custom domain for GitHub Pages
├── src/
│   ├── components/       # Sidebar, Banner, Hero, About, Skills, Projects, Contact, Footer
│   ├── layouts/
│   │   └── Layout.astro  # <head>, SEO/OpenGraph meta, scroll-reveal script
│   └── pages/
│       ├── index.astro   # homepage — assembles all sections
│       └── resume.astro  # print-friendly resume (alt to the PDF)
├── .github/workflows/
│   └── deploy.yml        # build + deploy to GitHub Pages
└── astro.config.mjs
```
