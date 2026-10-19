import { createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultNotFoundComponent: () => {
      return (
        <div>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      );
    },
    scrollRestoration: true,
    defaultStructuralSharing: true,
  });
}
