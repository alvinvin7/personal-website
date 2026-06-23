# Personal Website

Next.js 15 personal website and blog. Statically exported and deployed to Cloudflare Pages.

## Commands

```bash
npm run dev       # Dev server at localhost:3000
npm run build     # Build static site → out/
npm run preview   # Preview the built site via Wrangler (Cloudflare Pages local)
npm run lint      # ESLint
```

## Tech Stack

- **Framework**: Next.js 15, App Router, `output: "export"` (fully static)
- **Styling**: Tailwind CSS v4
- **Blog**: Markdown files in `content/posts/`, parsed with gray-matter + remark
- **Deployment**: Cloudflare Pages (build output: `out/`)

## Project Structure

```
app/
  layout.tsx            Root layout (nav, footer)
  page.tsx              Home
  about/page.tsx        About
  projects/page.tsx     Projects (edit the array directly to add projects)
  blog/
    page.tsx            Blog listing
    [slug]/page.tsx     Blog post (statically rendered)
content/
  posts/                Markdown blog posts
lib/
  posts.ts              getAllPosts(), getPostBySlug()
```

## Adding a Blog Post

Create `content/posts/<slug>.md`:

```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "One-line description shown in listings."
---

Body content here (standard Markdown).
```

The filename without `.md` becomes the URL: `/blog/<slug>`.

## Adding a Project

Edit `app/projects/page.tsx` and add to the `projects` array.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
3. Select this repo, then:
   - Build command: `npm run build`
   - Build output directory: `out`
4. Add your custom domain under the project's Custom Domains tab
   - Because your domain is already on Cloudflare, DNS configures automatically

## Personal placeholders to update

- `app/layout.tsx` — site title and description
- `app/page.tsx` — bio, GitHub/LinkedIn URLs
- `app/about/page.tsx` — experience, skills, contact links
- `app/projects/page.tsx` — add real projects
