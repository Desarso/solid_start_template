import {
  redirect,
  RouteDefinition,
  useSubmission,
  type RouteSectionProps,
} from "@solidjs/router";
import { useClerk, useUser } from "clerk-solidjs";
import { onMount } from "solid-js";
import { Button } from "~/components/ui/button";
import { isLoggedIn } from "~/lib";

export const route = {
  preload() {
    isLoggedIn();
  },
} satisfies RouteDefinition;

export default function Login(props: RouteSectionProps) {
  const loggedIn = isLoggedIn();
  const clerk = useClerk();

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
              onClick={() =>
                clerk().openSignIn({
                  forceRedirectUrl: "/",
                })
              }
            >
              <SignInSVG class="mr-2 h-5 w-5" />
              Sign in
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
      class={props.class}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 8a1 1 0 0 0 1-1V5.923c0-.459.022-.57.082-.684a.364.364 0 0 1 .157-.157c.113-.06.225-.082.684-.082h10.154c.459 0 .57.022.684.082.07.038.12.087.157.157.06.113.082.225.082.684v12.154c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H7.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V17a1 1 0 1 0-2 0v1.077c0 .76.082 1.185.319 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h10.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V5.923c0-.76-.082-1.185-.319-1.627a2.363 2.363 0 0 0-.977-.977C19.262 3.082 18.838 3 18.077 3H7.923c-.76 0-1.185.082-1.627.319a2.363 2.363 0 0 0-.978.977C5.083 4.738 5 5.162 5 5.923V7a1 1 0 0 0 1 1zm9.593 2.943c.584.585.584 1.53 0 2.116L12.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.552 9.552 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H2.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.562 9.562 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.883 2.893z"
        fill="#000000"
      />
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
