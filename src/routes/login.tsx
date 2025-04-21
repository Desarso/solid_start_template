import {
  redirect,
  RouteDefinition,
  useSubmission,
  type RouteSectionProps,
  useNavigate,
} from "@solidjs/router";
import { createEffect, onCleanup, onMount } from "solid-js";
import { Button } from "~/components/ui/button";
import { auth } from "~/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from "firebase/auth";

export const route = {
} satisfies RouteDefinition;

export default function Login(props: RouteSectionProps) {
  const navigate = useNavigate();

  createEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/", { replace: true });
      }
    });
    onCleanup(() => unsubscribe());
  });

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <main>
      <div class="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-md space-y-6 text-center">
          <div>
            <Files class="mx-auto h-12 w-12 text-primary" />
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Login Template
            </h1>
            <p class="mt-4 text-muted-foreground">Sign in to access whatever</p>
          </div>
          <div class="space-y-1">
            <Button
              variant="secondary"
              class="w-full !text-black !border-black"
              onClick={handleGoogleSignIn}
            >
              <SignInSVG class="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function SignInSVG(props: { class: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class={props.class}
    >
      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L19.9403 3.21997C17.9303 1.49 15.2403 0.5 12.0003 0.5C7.10032 0.5 2.96032 3.43 1.31032 7.62L4.89032 10.31C5.70032 7.14002 8.55032 4.75 12.0003 4.75Z" />
      <path d="M23.75 12C23.75 11.14 23.67 10.3 23.51 9.49001H12V14.26H18.7C18.45 15.84 17.58 17.17 16.26 18.02V20.77H19.94C22.2 18.78 23.75 15.69 23.75 12Z" />
      <path d="M5.70048 16.09C5.43048 15.28 5.25048 14.42 5.25048 13.5C5.25048 12.58 5.43048 11.72 5.70048 10.91L1.31048 7.62C0.490481 9.24001 0.000480652 11.26 0.000480652 13.5C0.000480652 15.74 0.490481 17.76 1.31048 19.38L5.70048 16.09Z" />
      <path d="M12.0003 24.5C15.2403 24.5 17.9303 23.51 19.9403 21.78L16.2603 19.03C15.0903 19.82 13.6603 20.25 12.0003 20.25C8.55032 20.25 5.70032 17.86 4.89032 14.69L1.31032 17.38C2.96032 21.57 7.10032 24.5 12.0003 24.5Z" />
    </svg>
  );
}

function MountainIcon(props: { class: string }) {
  return (
    <svg
      class={props.class}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function Files(props: { class: string }) {
  return (
    <svg
      class={props.class}
      width="24px"
      height="24px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_901_1141)">
        <path
          d="M12 13H15M12 16H20M12 20H20M12 24H20M21 7V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V24C1 24 1 25 2 25H3M26 27H30C30.553 27 31 26.553 31 26V4C31 3.447 30.553 3 30 3H24M26 30C26 30.553 25.553 31 25 31H7C6.447 31 6 30.553 6 30V8C6 7.447 6.447 7 7 7H25C25.553 7 26 7.447 26 8V30Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_901_1141">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
