import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-zinc-50 px-6 py-16 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Minimal TanStack Starter
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A minimal React starter with TanStack Start, TanStack Router, Tailwind CSS, and Vite+.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Edit{" "}
          <code className="font-mono text-zinc-950 dark:text-zinc-50">src/routes/index.tsx</code> to
          get started.
        </p>
      </div>
    </main>
  );
}
