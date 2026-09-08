# Musa Imran — Portfolio

A custom Next.js 16 + Tailwind v4 portfolio in TypeScript. App Router, self-hosted
fonts via `next/font`, no UI kit, no template.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Before you ship — edit `lib/site.ts`

Everything content-related lives in one file:

- `EMAIL` — currently `your@email.com` (placeholder). Set your real address.
- `WHATSAPP` / `PHONE` — I used `923066358436` / `+92 306 6358436`. Your old site
  had a mismatch (the top WhatsApp button used `...6258436`), so double-check the
  number is right.
- `PROJECTS` — add, remove, or reorder. `theme` is `"shop"` or `"print"` and just
  picks the abstract preview art; add more themes in `app/globals.css` +
  `components/Portfolio.tsx` if you want.
- `STACK` — the grouped tech list.

## Structure

```
app/
  layout.tsx      # fonts, metadata, <html>
  page.tsx        # renders <Portfolio/>
  globals.css     # Tailwind v4 @theme tokens + design system
components/
  Portfolio.tsx   # the page ("use client": live clock, cursor glow, copy email)
lib/
  site.ts         # all content + types
```

## Design notes

- **Tokens** are defined in `app/globals.css` under `@theme` (Tailwind v4 CSS-first
  config): `--color-ink`, `--color-ultra`, `--color-paper`, `--color-chalk`,
  `--color-muted`, plus `--font-display` / `--font-body`. They generate utilities
  like `bg-ink`, `text-chalk`, `font-display`.
- Fluid type (`.display-1`, `.heading`, etc.) uses `clamp()` so it scales without
  breakpoints.
- Motion respects `prefers-reduced-motion`; focus states are visible for keyboard
  users. Change the accent by editing `--color-ultra` in one place.
```
