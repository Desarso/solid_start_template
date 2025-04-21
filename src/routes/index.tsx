import { type RouteDefinition, useNavigate } from "@solidjs/router";
import { CircularProgress } from "@suid/material";
import { createSignal, onCleanup, Show } from "solid-js";
import { auth } from "~/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { Button } from "~/components/ui/button";

export const route = {
} satisfies RouteDefinition;

export default function Home() {
  const [user, setUser] = createSignal<User | null>(null);
  const [loading, setLoading] = createSignal(true);
  const navigate = useNavigate();

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  onCleanup(() => unsubscribe());

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <main class="w-full p-4 space-y-2">
      <Show when={loading()} fallback={<div>Loading user... <CircularProgress size={20}/></div>}>
        <Show when={user()} fallback={<div>Welcome! Please <a href="/login" class="underline">sign in</a>.</div>}>
          {(u) => (
            <div>
              Hello, {u()?.displayName || u()?.email}!
              <div class="mt-4">
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            </div>
          )}
        </Show>
      </Show>
    </main>
  );
}
