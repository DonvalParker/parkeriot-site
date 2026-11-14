import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BYPASS_COOKIE = "maintenance_bypass";

function isMaintenanceExempt(pathname: string): boolean {
  return (
    pathname.startsWith("/maintenance") ||
    pathname === "/privacy" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/parkeriot-logo") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
}

function buildCsp(nonce: string): string {
  const isDev = process.env.NODE_ENV === "development";
  const scriptSrc = [
    "script-src 'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    isDev ? "'unsafe-eval'" : "",
  ]
    .filter(Boolean)
    .join(" ");
  // Dev tooling injects inline styles. Production styles get the per-request nonce.
  const styleSrc = isDev
    ? "style-src 'self' 'unsafe-inline'"
    : `style-src 'self' 'nonce-${nonce}'`;
  // next/image sets a style attribute. Attributes are separate from <style> blocks.
  const styleSrcAttr = "style-src-attr 'unsafe-inline'";

  return [
    "default-src 'self'",
    scriptSrc,
    styleSrc,
    styleSrcAttr,
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self' https://formspree.io",
    "form-action 'self' https://formspree.io",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    isDev ? "" : "upgrade-insecure-requests",
  ]
    .filter(Boolean)
    .join("; ");
}

function withCsp(response: NextResponse, csp: string): NextResponse {
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

function nextWithCsp(requestHeaders: Headers, csp: string): NextResponse {
  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  return withCsp(response, csp);
}

async function sha256Base64Url(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  const bytes = new Uint8Array(digest);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function timingSafeEqual(a: string, b: string): boolean {
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  if (aBytes.length !== bBytes.length) return false;
  let mismatch = 0;
  for (let i = 0; i < aBytes.length; i++) mismatch |= aBytes[i] ^ bBytes[i];
  return mismatch === 0;
}

function bypassCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export async function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const { pathname, searchParams } = request.nextUrl;
  const maintenanceOn = process.env.MAINTENANCE_MODE === "true";
  const bypassSecret = process.env.MAINTENANCE_BYPASS_SECRET;
  const bypassParam = searchParams.get("bypass");

  let cookieOk = false;
  if (bypassSecret) {
    const expected = await sha256Base64Url(bypassSecret);
    const cookieValue = request.cookies.get(BYPASS_COOKIE)?.value ?? "";
    cookieOk = cookieValue.length > 0 && timingSafeEqual(cookieValue, expected);

    if (bypassParam !== null) {
      const paramOk = timingSafeEqual(await sha256Base64Url(bypassParam), expected);
      if (paramOk || cookieOk) {
        const cleanUrl = request.nextUrl.clone();
        cleanUrl.searchParams.delete("bypass");
        const response = withCsp(NextResponse.redirect(cleanUrl, 303), csp);
        if (paramOk) {
          response.cookies.set(BYPASS_COOKIE, expected, bypassCookieOptions());
        }
        return response;
      }
    }
  }

  if (bypassParam !== null) {
    if (maintenanceOn && !cookieOk && !isMaintenanceExempt(pathname)) {
      return withCsp(NextResponse.redirect(new URL("/maintenance", request.url)), csp);
    }
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete("bypass");
    return withCsp(NextResponse.redirect(cleanUrl, 303), csp);
  }

  if (maintenanceOn && !cookieOk && !isMaintenanceExempt(pathname)) {
    return withCsp(NextResponse.redirect(new URL("/maintenance", request.url)), csp);
  }

  return nextWithCsp(requestHeaders, csp);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
