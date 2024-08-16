import { action, cache, redirect } from "@solidjs/router";
import { db } from "./db";
import {
  getSession,
  login,
  logout as logoutSession,
  register,
  validatePassword,
  validateUsername
} from "./server";
import { auth } from "clerk-solidjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const getUser = cache(async () => {
  "use server";
  try {
    const { userId } = auth();

    if (!userId) {
      throw new Error("User not found");
    } else {
      const user = await clerkClient.users.getUser(userId);

      
      return {
        id: user.id,
        name: user.firstName,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      };
    }
  

  } catch {
    throw redirect("/login");
  }
}, "user");