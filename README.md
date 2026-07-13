# TalentBridge Recruitment Portfolio

A modern marketing portfolio website for a recruitment agency, built with **Vite + React + TypeScript + Tailwind CSS**.

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

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no extra config needed

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

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 19](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [React Router](https://reactrouter.com/) — client-side routing
- [Lucide React](https://lucide.dev/) — icons

## License

Private — all rights reserved.
