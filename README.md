# Talent Bridge Portfolio

A modern marketing portfolio website for Talent Bridge, built with **Vite + React + TypeScript + Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The production build outputs to the `dist/` folder.

## Project Structure

```
src/
├── components/     # Reusable UI components (Header, Footer, cards, forms)
├── data/           # Editable content — update copy here without touching layout
│   ├── agency.ts       # Name, contact info, tagline, brand details
│   ├── services.ts     # Employer & candidate services
│   ├── industries.ts   # Industry sectors
│   ├── testimonials.ts # Client & candidate quotes
│   ├── team.ts         # Team member bios
│   ├── stats.ts        # Homepage stats bar
│   ├── valueProps.ts   # "Why choose us" items
│   └── milestones.ts   # About page timeline & story
├── pages/          # Route pages (Home, About, Services, etc.)
└── utils/          # Helpers (icon mapping)
```

## Editing Content

All site copy lives in `src/data/`. For example:

- **Agency name & contact** → `src/data/agency.ts`
- **Services** → `src/data/services.ts`
- **Industries** → `src/data/industries.ts`
- **Testimonials** → `src/data/testimonials.ts`
- **Team members** → `src/data/team.ts`

Change the brand color by updating `--color-brand-*` values in `src/index.css`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, services preview, industries, testimonials |
| `/about` | Mission, value props, timeline, team |
| `/services` | Employer & candidate services with benefits |
| `/industries` | Industry grid with images |
| `/testimonials` | Filterable client/candidate testimonials |
| `/contact` | Contact form, office info, map |

## Contact form email (Web3Forms — free)

The contact form sends submissions to your inbox via [Web3Forms](https://web3forms.com) (free tier, no backend).

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter **the email address where you want to receive messages**
3. Create an access key (confirm via the email they send you)
4. Copy `.env.example` to `.env` and paste your key:

```bash
cp .env.example .env
```

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

5. Restart the dev server (`npm run dev`) so Vite loads the new env var
6. Submit a test message on `/contact` — you should get an email

On Vercel/Netlify, add the same variable in the project’s **Environment Variables** settings (do not commit `.env`).

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Add `VITE_WEB3FORMS_ACCESS_KEY` in Project Settings → Environment Variables
4. Vercel auto-detects Vite — no extra config needed

Or use the CLI:

```bash
npx vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder via Netlify dashboard or CLI
npx netlify deploy --prod --dir=dist
```

Add `VITE_WEB3FORMS_ACCESS_KEY` in Netlify Site settings → Environment variables.

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 19](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [React Router](https://reactrouter.com/) — client-side routing
- [Lucide React](https://lucide.dev/) — icons

## License

Private — all rights reserved.
