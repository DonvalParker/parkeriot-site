# ParkerIoT Microsite

A modern 3-page marketing microsite for **ParkerIoT Limited** — a Lancaster-based
embedded firmware, IoT and field systems engineering company. Built with Next.js
(App Router), TypeScript, and Tailwind CSS.

## Pages

- **Home** (`/`) — hero, services overview, capability/stack panel, and CTA.
- **About** (`/about`) — company intro, founder profile, values, capabilities, and registration details.
- **Contact** (`/contact`) — contact details and a working (front-end) contact form.

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)

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
app/
  layout.tsx        # Shared shell: navbar + footer + metadata
  page.tsx          # Home
  about/page.tsx    # About
  contact/page.tsx  # Contact
  globals.css       # Tailwind layers + design tokens
components/
  Navbar.tsx        # Sticky responsive nav
  Footer.tsx
  Section.tsx       # Reusable section heading
  ContactForm.tsx   # Client-side form (stubbed submit)
```

## Brand assets

- `public/parkeriot-logo.png` — trimmed wordmark used in the navbar and footer.
- `app/icon.svg` — favicon (chip mark in the brand slate `#3f5159`).
- `scripts/prepare-logo.mjs` — one-off script that crops the source logo to a
  tight bounding box (run with `node scripts/prepare-logo.mjs`).

## Deploy (Vercel + IONOS DNS)

1. Push this repo to GitHub and import it in [Vercel](https://vercel.com).
2. In Vercel → **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_FORMSPREE_FORM_ID` — from your [Formspree](https://formspree.io) form (see below)
3. Add domains `parkeriot.uk` and `www.parkeriot.uk` in Vercel, then point IONOS DNS:
   - **A** `@` → Vercel IP (shown in Vercel)
   - **CNAME** `www` → `cname.vercel-dns.com`

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
