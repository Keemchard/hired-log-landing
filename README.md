# hired.log — Landing Page

Marketing site for [hired.log](https://hired-log.vercel.app), an AI-powered job application tracker.

**Live site:** [hired-log-landing.vercel.app](https://hired-log-landing.vercel.app) *(update with your actual URL)*

---

## Pages & Sections

| Section | Anchor | Description |
|---|---|---|
| **Nav** | — | Sticky top nav with logo, links to Features, AI Tools, How it works; Login + Get Started CTA |
| **Hero** | — | Headline, subtext, two CTAs, mock app card showing dashboard stats |
| **Core Features** | `#features` | 6-card grid showcasing tracking, Kanban, analytics, extension, security, speed |
| **AI-Powered Tools** | `#ai-tools` | 4 horizontal cards for AI Auto-Fill, Cover Letters, Resume Match, Interview Prep |
| **How it Works** | `#how-it-works` | 3-step process: sign up → log applications → level up search |
| **CTA** | `#about` | Final call to action to sign up free |
| **Footer** | — | Logo + "Made by KC" credit |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global reset, CSS variables (colors, fonts)
│   ├── layout.tsx          # HTML shell, metadata, Open Graph, SEO
│   └── page.tsx            # All page content (single-page static site)
│
└── (no components directory — everything lives in page.tsx)

page.module.css             # All styles — layout, nav, hero, sections, cards, responsive
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styles | CSS Modules (plain CSS, no preprocessor) |
| Icons | react-icons (Ionicons set) |
| Deployment | Vercel (static export) |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

```bash
npm install -g vercel
vercel
```

No environment variables required — this is a fully static marketing page.

---

## Linked App Repo

The main app: [`hired-log`](../hired-log) — Next.js + Firebase + Gemini AI.
