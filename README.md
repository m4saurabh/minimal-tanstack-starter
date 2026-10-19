# minimal-tanstack-starter

A minimal React + TypeScript starter with [TanStack Start](https://tanstack.com/start), TanStack Router, [Tailwind CSS v4](https://tailwindcss.com/), and [Vite+](https://viteplus.dev/).

Originally scaffolded from [Cove Stack](https://github.com/mugnavo/cove).

## Getting started

Requires Node.js >= 24 and Vite+ (`vp`).

```sh
vp install
vpr dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

- `vpr dev`: Start the development server.
- `vpr build`: Build production output.
- `vpr preview`: Preview the production build locally.
- `vpr check`: Check formatting, linting, and types.
- `vp check --fix`: Fix formatting and auto-fixable lint issues.
- `vpr test`: Run Vitest tests.

## Styling

Tailwind CSS is integrated through `@tailwindcss/vite` and imported in `src/styles.css`. Use utility classes directly in your components; no Tailwind configuration file is required. Add global styles or Tailwind theme customizations in `src/styles.css`.

## Environment variables

No environment variables are required. Optional local values can go in the uncommitted `.env.local`, which is loaded using Node's native environment-file support. Production variables can also be supplied by your hosting environment.

Use `process.env` in server-only code. Vite exposes `VITE_` variables through `import.meta.env` and embeds them in the browser bundle at build time; never use that prefix for secrets.

## Deployment

Build output is written to `dist/`. No production server adapter is configured. Choose one for your hosting platform using the [TanStack Start hosting documentation](https://tanstack.com/start/latest/docs/framework/react/guide/hosting). `vpr preview` is intended for local validation, not production hosting.
