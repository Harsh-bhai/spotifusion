import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Allow requests to /api/auth/* without requiring authentication
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // allow these paths
  if (pathname == "/" || pathname == "/about" || pathname == "/how-to-use") {
    return NextResponse.next();
  }

  // if anyone tries to access pages that require authentication
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Apply the middleware to all paths except /api/auth/* and allow static resources for login page
export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|logo).*)", // Exclude api/auth, static assets, favicon, and logo
  ],
};
