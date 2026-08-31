# Shudong Wang — Frontend Developer Portfolio

A responsive portfolio rebuilt from an early React learning project into a secure, typed and accessible site for the Australian job market.

## What changed

- Replaced tutorial placeholder copy with an honest, recruiter-focused narrative.
- Removed the browser-side Sanity write token and the tracked `.env` file.
- Replaced remote-only portfolio data with typed local content so the core site never renders empty.
- Added semantic navigation, keyboard-friendly filters, reduced-motion support and visible focus states.
- Added component tests and a CI workflow for linting, type checking, tests and production builds.
- Updated the frontend to React 19, Vite 8 and TypeScript 5.9.

## Stack

- React 19 and TypeScript
- Vite 8
- Sass
- Framer Motion
- Vitest and Testing Library

The original Sanity Studio prototype remains in `backend_sanity` as a record of the first CMS implementation, but the public portfolio no longer depends on it to render.

## Run locally

```bash
cd frontend_react
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Updating the content

Portfolio projects, skill groups and the learning timeline are typed in `frontend_react/src/data/portfolio.ts`. Personal links and contact details are in the header, navigation and footer components.

## Security

No CMS write token is shipped to the browser. Keep local secrets in ignored `.env` files and never commit them. The previously exposed Sanity token should be revoked in the Sanity dashboard before this repository is made public.
