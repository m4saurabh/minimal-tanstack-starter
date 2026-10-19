import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

import { version } from "./package.json";

export default defineConfig(({ mode }) => ({
  staged: {
    "*": "vp check --fix",
  },

  fmt: {
    sortImports: true,
    ignorePatterns: [
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      "bun.lock",
      "routeTree.gen.ts",
      ".tanstack-start/",
      ".tanstack/",
      ".cache",
      "worker-configuration.d.ts",
      ".vercel",
      ".output",
      ".wrangler",
      ".netlify",
      "dist",
    ],
  },

  lint: {
    plugins: ["typescript", "react", "react-perf", "jsx-a11y"],
    env: {
      builtin: true,
      node: true,
      browser: true,
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      // Plugins with "/" in name have to be aliased for now
      // Issue: https://github.com/oxc-project/oxc/issues/14557
      {
        name: "eslint-tanstack-router",
        specifier: "@tanstack/eslint-plugin-router",
      },
      { name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
    ],
    categories: {
      correctness: "warn",
    },
    rules: {
      "vite-plus/prefer-vite-plus-imports": "warn",

      "no-deprecated": "warn",
      "typescript/no-floating-promises": "off",
      "typescript/no-misused-spread": "off",

      "jsx-a11y/prefer-tag-over-role": "off",

      "eslint-tanstack-router/create-route-property-order": "warn",
    },
    ignorePatterns: [
      "dist",
      ".wrangler",
      ".vercel",
      ".netlify",
      ".output",
      "build/",
      "worker-configuration.d.ts",
      "scripts/",
    ],
  },

  // Vite config - https://vite.dev/config/
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  resolve: { tsconfigPaths: true },
  server: { port: 3000 },
  plugins: lazyPlugins(() =>
    mode === "test"
      ? []
      : [
          devtools({
            // https://tanstack.com/devtools/latest/docs/vite-plugin#console-piping
            consolePiping: { enabled: false },
          }),
          tailwindcss(),
          tanstackStart(),
          viteReact({ compiler: true }),
        ],
  ),
}));
