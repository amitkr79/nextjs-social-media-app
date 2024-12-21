import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ["/login", "/api/clerk"], // Specify login page explicitly as public
  ignoredRoutes: ["/api/clerk"], // Ignored routes bypass middleware checks
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all pages except files like .css, .js, or assets in _next
    "/(api|trpc)(.*)",        // Match all API or trpc calls
  ],
};
