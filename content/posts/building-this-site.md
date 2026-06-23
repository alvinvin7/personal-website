---
title: "Building This Site"
date: "2026-06-23"
description: "How I set up this personal site with Next.js 15 and Cloudflare Pages."
---

I wanted a personal site that was fast, cheap to run, and easy to update. Here's what I landed on.

## Tech choices

**Next.js 15** with the App Router. I work with React at work, so this was a natural fit. Static export means the whole site is just HTML/CSS/JS — no Node.js server to maintain.

**Tailwind CSS v4** for styling. The new CSS-first approach is much cleaner than configuring a JS file.

**Cloudflare Pages** for hosting. Free tier is generous, deploys straight from GitHub, and since my domain is already on Cloudflare the DNS setup was painless.

**Markdown files** for blog posts. No CMS, no database. Just files in a `content/posts/` directory that get rendered at build time.

## Deployment

Push to GitHub → Cloudflare Pages picks it up automatically → builds and deploys. The whole pipeline takes about 30 seconds.

Total ongoing cost: $0 (just the domain registration).
