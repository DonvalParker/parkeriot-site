import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BYPASS_COOKIE = "maintenance_bypass";

export function middleware(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/parkeriot-logo")
  ) {
    return NextResponse.next();
  }

  const bypassSecret = process.env.MAINTENANCE_BYPASS_SECRET;
  const bypassParam = searchParams.get("bypass");
  const hasBypassCookie =
    bypassSecret && request.cookies.get(BYPASS_COOKIE)?.value === bypassSecret;

  if (bypassSecret && (bypassParam === bypassSecret || hasBypassCookie)) {
    const response = NextResponse.next();
    if (bypassParam === bypassSecret) {
      response.cookies.set(BYPASS_COOKIE, bypassSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
      });
    }
    return response;
  }

  return NextResponse.redirect(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
