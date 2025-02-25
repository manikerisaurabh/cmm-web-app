import { NextResponse } from "next/server";

// Define protected routes
const protectedRoutes = ["/dashboard", "/admin", "/vendor"];

export function middleware(req) {
  const token = req.cookies.get("authToken"); // Fetch token from cookies
  const type = req.cookies.get("authType"); // Fetch token from cookies
  

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route) ) ) {
    if (!token || !req.nextUrl.pathname.startsWith("/"+type.value) ) {
      return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if not authenticated
    }
  }

  return NextResponse.next();
}

// Apply middleware to all pages
export const config = {
  matcher: "/:path*",
};
