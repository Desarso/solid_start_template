import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "@fontsource/inter";
import "./app.css";
import { ClerkProvider } from "clerk-solidjs";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <ClerkProvider
            publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
          >
          <Suspense>{props.children}</Suspense>
          </ClerkProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
