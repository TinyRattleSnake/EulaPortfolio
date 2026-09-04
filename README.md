# Harry Wang — Frontend Developer Portfolio

A personal portfolio presenting my frontend development work, technical skills and contact information. The site is designed for the Australian job market with a focus on responsive layouts, accessibility and maintainable code.

## Highlights

- Responsive layout for mobile, tablet and desktop screens
- Semantic navigation and accessible interactive controls
- Typed project and skills data
- Subtle interface animations with reduced-motion support
- Automated linting, type checking, tests and production builds
- Continuous deployment with GitHub Actions and GitHub Pages

## Stack

- React 19 and TypeScript
- Vite 8
- Sass
- Framer Motion
- Vitest and Testing Library

The repository also includes a Sanity Studio workspace for structured portfolio content management.

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

Portfolio projects, skill groups and the development timeline are defined in `frontend_react/src/data/portfolio.ts`. Personal links and contact details are located in the header, navigation and footer components.

## Security

Environment variables and local configuration files are excluded from version control. Sensitive credentials should never be included in client-side code.
