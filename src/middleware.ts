import { createMiddleware } from '@solidjs/start/middleware';
// import { clerkMiddleware } from 'clerk-solidjs/server'; // Removed Clerk middleware

export default createMiddleware({
  onRequest: [
    // clerkMiddleware({
    //     publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY,
    //     secretKey: process.env.CLERK_SECRET_KEY,
    // }) // Removed Clerk middleware configuration
  ]
  // ... other middleware (if any)
});