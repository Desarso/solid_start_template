import { action, cache, redirect } from "@solidjs/router";
import { db } from "./db";
import { auth } from "clerk-solidjs/server";
import { clerkClient, Session } from "@clerk/clerk-sdk-node";

export const getUser = cache(async () => {
  "use server";
  try {
    const { userId, sessionId } = auth();

    if (!userId) {
      throw new Error("User not found");
    } else {
      const user = await clerkClient.users.getUser(userId);

      
      return {
        id: user.id,
        name: user.firstName,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
        sessionId: sessionId,
      };
    }
  

  } catch {
    throw redirect("/login");
  }
}, "user");

export const isLoggedIn = cache(async () => {
  "use server";
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  return redirect("/");
}, "isLoggedIn");