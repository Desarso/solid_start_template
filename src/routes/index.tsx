import { createAsync, type RouteDefinition } from "@solidjs/router";
import { ClerkLoaded, ClerkLoading, SignOutButton } from "clerk-solidjs";
import { getUser } from "~/lib";
import { CircularProgress } from "@suid/material";

export const route = {
  preload() {
    getUser();
  },
} satisfies RouteDefinition;

export default function Home() {
  const user = createAsync(() => getUser(), { deferStream: true });
  return (
    <main class="w-full p-4 space-y-2">
      <div>Hello</div>
      <div class="hover:bg-red-500 w-20">
        <ClerkLoading>
          <CircularProgress />
        </ClerkLoading>
        <ClerkLoaded>
          <SignOutButton redirectUrl="/" sessionId={user()?.sessionId}>
            <button>sign out</button>
          </SignOutButton>
        </ClerkLoaded>
      </div>
    </main>
  );
}
