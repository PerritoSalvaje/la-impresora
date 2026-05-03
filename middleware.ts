import { NextRequest, NextResponse } from "next/server";

// Basic Auth para /admin/* y /api/admin/*.
// La password se setea en Vercel env var ADMIN_PASSWORD.
// Si no está seteada, los endpoints quedan completamente bloqueados (503).

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (!path.startsWith("/admin") && !path.startsWith("/api/admin")) {
    return NextResponse.next();
  }

  const password = process.env.ADMIN_PASSWORD;

  // Sin password en env → endpoint deshabilitado (mejor que abierto)
  if (!password) {
    return new NextResponse("Admin panel disabled. Set ADMIN_PASSWORD.", {
      status: 503,
    });
  }

  const auth = req.headers.get("authorization");
  const expected = "Basic " + btoa(`admin:${password}`);

  if (auth !== expected) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="La Impresora Admin"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
