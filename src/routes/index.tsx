import { createAsync, type RouteDefinition } from "@solidjs/router";
import { SignOutButton } from "clerk-solidjs";
import { getUser } from "~/lib";

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
        <SignOutButton redirectUrl="/" />
      </div>
    </main>
  );
}
