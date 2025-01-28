import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "@fontsource/inter";
import "./app.css";
import { ClerkProvider } from "clerk-solidjs";
import Home from "./routes";
import Layout from "./routes/Layout";
import { getUser } from "./lib";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <ClerkProvider
            publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
          >
            <Suspense>{props.children}</Suspense>
          </ClerkProvider>
        </>
      )}
    >
      <Route
        path="/"
        component={Layout}
        preload={() => {
          getUser();
        }}
      >
        <Route path="/" component={Home} />
      </Route>
      <FileRoutes />
    </Router>
  );
}
