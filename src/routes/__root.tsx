import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import styles from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Minimal TanStack Starter" },
      {
        name: "description",
        content:
          "A minimal React starter with TanStack Start, TanStack Router, Tailwind CSS, and Vite+.",
      },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}

        <TanStackDevtools
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />

        <Scripts />
      </body>
    </html>
  );
}
