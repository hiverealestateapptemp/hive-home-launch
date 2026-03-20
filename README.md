# Hive Landing Page

A modern SaaS-style landing page for **Hive** — a social platform for modern real estate.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool & dev server)
- **Tailwind CSS** (styling)
- **shadcn/ui** (component library)
- **Framer Motion** (animations)

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm, yarn, bun, or pnpm

## Getting Started

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd <project-folder>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**.

## Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start local dev server             |
| `npm run build`   | Create production build in `dist/` |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint                         |
| `npm run test`    | Run tests with Vitest              |

## Project Structure

```
src/
├── assets/          # SVGs, logos, videos
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── FeatureGrid.tsx
│   ├── FeatureRow.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/           # Route pages
│   ├── Index.tsx
│   ├── Support.tsx
│   └── NotFound.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── index.css        # Global styles & design tokens
```

## Building for Production

```bash
npm run build
```

The optimized output will be in the `dist/` directory, ready to deploy to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).
