import { action, cache, redirect } from "@solidjs/router";
import { db } from "./db";

// Clerk-specific functions (getUser, isLoggedIn) were removed.
// Firebase auth state will be handled differently (likely client-side).