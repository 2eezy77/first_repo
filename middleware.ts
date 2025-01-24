import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

export function middleware(request: any) {
  // Get the JWT token from cookies
  const token = request.cookies.get("token")?.value;

  // If no token exists, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token
    jwt.verify(token, SECRET_KEY);
    return NextResponse.next(); // Allow access if token is valid
  } catch (error) {
    console.error("Token validation failed:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  // Protect specific routes or patterns
  matcher: ["/dashboard/:path*"], // Applies middleware to all `/dashboard` subroutes
};


