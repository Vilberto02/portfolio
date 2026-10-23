This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize Inter, JetBrains Mono, and Instrument Serif.

## Portfolio Content

Edit `src/data/portfolio.ts` to update the profile, projects, and skills. The named `portfolioData` export is validated with `satisfies PortfolioData`; shared types live in `src/types/portfolio.ts`. Content and UI copy use Latin American Spanish.

The homepage and 404 page import this data directly. No API, database, or content server is required. Keep images in `public/` and reference them with paths such as `/projects/gallery/vitamia.png`.

Canonical metadata, JSON-LD, Open Graph URLs, `robots.txt`, and `sitemap.xml` share the same site URL. On Vercel, the app automatically uses `VERCEL_PROJECT_PRODUCTION_URL`, including the generated `vercel.app` domain. Optionally set `NEXT_PUBLIC_SITE_URL` to an absolute public URL to override it when adding a custom domain or deploying elsewhere. With neither variable set, local development uses `http://localhost:3000`.

When deploying to Vercel, select `apps/frontend` as the root directory and leave system environment variables exposed. Do not set `NEXT_PUBLIC_SITE_URL` to localhost in Vercel. After content changes, run `pnpm lint` and `pnpm build`, then deploy the new build.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
