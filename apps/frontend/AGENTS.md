# Repository Guidelines

## Project Structure & Component Architecture

This Next.js 16 frontend uses App Router. Keep routes, layouts, metadata, and route states in `src/app/`. Build atoms in `src/components/ui/` and compose sections in `src/components/sections/`; route files should only assemble them. Store static assets in `public/`, shared types in `src/types/`, and portfolio content in `src/data/portfolio.ts`. Use the `@/*` alias. Prefer Server Components; add `"use client"` only for interactivity or browser APIs.

## Build and Development Commands

Use pnpm 11 and commit lockfile changes.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the server at `http://localhost:3000`.
- `pnpm lint`: run Next.js and TypeScript ESLint rules.
- `pnpm build`: validate and create the production build.
- `pnpm start`: serve the production build.

## Code Style & Naming

Write strict TypeScript, identifiers, and documentation in English. Write UI copy, accessibility labels, and metadata in Latin American Spanish. Keep code self-explanatory and free of unused abstractions or unnecessary logic. Use two-space indentation, double quotes, semicolons, and trailing commas in multiline constructs.

Name `.tsx` component files in PascalCase and `.ts` files in camelCase. Exempt Next.js special files (`page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx`, and `not-found.tsx`), configuration files, and declarations. Keep private prop types beside their component; place reusable and API types in `src/types/`.

Avoid comments that restate code. When necessary, use English TSDoc or JSDoc without emojis or decorative separators such as `=` or `-`.

## Styling, Theme & Icons

Use Tailwind CSS 4 utilities. Define colors and semantic tokens in `src/app/globals.css`, expose them through Tailwind, and avoid repeated arbitrary colors. Dark mode is the default. After installation, use only `lucide-react` for UI icons. Optimize media and fonts with `next/image` and `next/font`.

## Local Portfolio Content

Use the named `portfolioData` export from `src/data/portfolio.ts` as the content source of truth, validated with `satisfies PortfolioData` from `src/types/portfolio.ts`. Import it directly in Server Components and pass content to sections through props. Keep content local unless an external integration is explicitly requested. Preserve stable project IDs and asset paths. Content updates require a new build and deployment; configure canonical URLs with `NEXT_PUBLIC_SITE_URL`.

## Quality, SEO & Contributions

Build mobile-first interfaces with semantic HTML, keyboard support, visible focus, sufficient contrast, and meaningful alt text. Apply Next.js Metadata APIs, canonical URLs, Open Graph, and relevant JSON-LD. No automated frontend tests exist; require `pnpm lint`, `pnpm build`, and manual mobile and desktop checks.

Use concise Conventional Commit subjects such as `feat(portfolio): add projects section`. Pull requests must explain intent, link relevant issues, list verification, and include before-and-after screenshots for UI changes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
