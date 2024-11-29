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

  // Allow access to public assets
  if (
    pathname.startsWith("/_next") || // Next.js assets
    pathname.startsWith("/favicon.ico") || // Favicon
    pathname.startsWith("/logo") || // Logo
    pathname.startsWith("/spotifusion") || // Your custom static assets
    pathname.startsWith("/public") // Other public files
  ) {
    return NextResponse.next();
  }

  // Allow specific paths like /, /about, and /how-to-use
  if (pathname === "/" || pathname === "/about" || pathname === "/how-to-use") {
    return NextResponse.next();
  }

  // Redirect to login if no token is found
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Updated matcher to allow static and public resources
export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|logo|spotifusion|public).*)",
  ],
};
