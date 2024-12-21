import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ["/api/clerk", "/"], // Add '/' to the public routes to make it accessible without auth
  ignoredRoutes: ["/api/clerk"], // If needed, add more paths to the ignoredRoutes for specific API endpoints
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)", "/"], // Ensure '/' is included in matcher to handle routes
};
