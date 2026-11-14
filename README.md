# ParkerIoT Microsite

A modern marketing microsite for **ParkerIoT Limited** — a Lancaster-based
embedded firmware, IoT and field systems engineering company. Built with Next.js
(App Router), TypeScript, and Tailwind CSS.

## Pages

- **Home** (`/`) — hero, services overview, capability/stack panel, case studies, and CTA.
- **Services** (`/services`) — detailed IoT engineering service descriptions.
- **Resources** (`/resources`) — short technical notes and guides (Markdown-backed).
- **About** (`/about`) — company intro, founder profile, values, capabilities, and registration details.
- **Contact** (`/contact`) — contact details and a working contact form (Formspree).

## Tech stack

- [Next.js 16](https://nextjs.org/) — App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — Markdown frontmatter
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) — article rendering

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
proxy.ts                  # CSP nonce and maintenance gate
app/
  layout.tsx              # Root layout + metadata
  (site)/
    layout.tsx            # Navbar + footer shell
    page.tsx              # Home
    services/page.tsx     # Services
    resources/
      page.tsx            # Resources index
      [slug]/page.tsx     # Individual articles
    about/page.tsx        # About
    contact/page.tsx      # Contact
  globals.css             # Tailwind layers + design tokens
  sitemap.ts              # Auto-includes resource articles
  robots.ts
content/
  resources/              # Markdown articles (see below)
    _template.md          # Copy this to create a new article
lib/
  resources.ts            # Read articles from disk (build time)
  resources-types.ts      # Shared types + helpers
components/
  Navbar.tsx
  Footer.tsx
  Section.tsx
  ArticleCard.tsx
  MarkdownContent.tsx
  ResourceTopicFilter.tsx
  ContactForm.tsx
  CaseStudyCards.tsx
  ...
```

## Adding a resource article

Articles live as Markdown files in `content/resources/`. Files starting with `_` are ignored.

1. Copy `content/resources/_template.md` to a new file, e.g. `my-article-slug.md`.
2. Edit the frontmatter and body.
3. Run `npm run dev` to preview at `/resources/my-article-slug`.
4. Commit and push — Vercel rebuilds; the sitemap picks up the new URL automatically.

The URL slug comes from the filename: `my-article-slug.md` → `/resources/my-article-slug`.

**Frontmatter fields:**

| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | Article heading |
| `topic` | Yes | Used for filter pills on the index |
| `date` | Yes | ISO date; newest first on index |
| `excerpt` | Yes | Card summary + SEO description |
| `readTime` | No | e.g. `"5 min"` |
| `relatedService` | No | Links to `/services#…` — `discovery`, `firmware`, `linux`, `connectivity`, `data`, `prototype`, `troubleshooting`, `hardware` |

## Brand assets

Official ParkerIoT marks. The wordmark is a single steel-slate colour, `#3F5159` (`brand-700`), on white. UI type is Inter. Do not recolour the mark, add an orange or midnight accent, or switch the site to a dark theme.

- `public/parkeriot-logo.png` and `public/parkeriot-logo.svg` — slate wordmark for light surfaces (navbar, footer, maintenance).
- `public/parkeriot-logo-white.png` and `public/parkeriot-logo-white.svg` — white wordmark, only on the `#3F5159` band. The white SVG is the slate geometry with a `#FFFFFF` fill, matching the white PNG. The kit's white and midnight SVG files were the same path as the slate master.
- `public/brand/` — parent chip and illustrative product-family icons. These are not separate product logos.
- `app/favicon.ico`, `public/favicon-*.png`, `public/apple-touch-icon.png`, and `public/site.webmanifest` — browser and home-screen icons. Theme colour `#3F5159`.
- `app/opengraph-image.png` — social preview, wordmark on white.

## Deploy (Vercel + IONOS DNS)

1. Push this repo to GitHub and import it in [Vercel](https://vercel.com).
2. In Vercel → **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_FORMSPREE_FORM_ID` — from your [Formspree](https://formspree.io) form (see below)
3. Add domains `parkeriot.uk` and `www.parkeriot.uk` in Vercel, then point IONOS DNS:
   - **A** `@` → Vercel IP (shown in Vercel)
   - **CNAME** `www` → `cname.vercel-dns.com`

   The live certificate currently covers only `parkeriot.uk`. Browsers reject `https://www.parkeriot.uk` until that host is added on the Vercel project and the certificate is reissued.

### Contact form (Formspree)

1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. Set the notification email to **info@parkeriot.uk**.
3. Copy the form ID from the endpoint URL (`https://formspree.io/f/abcxyz` → `abcxyz`).
4. Add `NEXT_PUBLIC_FORMSPREE_FORM_ID=abcxyz` in Vercel (and locally in `.env.local` for testing).
5. In Formspree → **Settings** for the form:
   - Enable **Spam filtering** (and reCAPTCHA if you want stronger protection).
   - Under **Allowed domains**, add `parkeriot.uk` and `www.parkeriot.uk` so submissions are only accepted from your site.

## Next steps

- Add an Open Graph image for richer link previews.
