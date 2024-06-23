import { NextRequest, NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";
import { getSession } from "@auth0/nextjs-auth0/edge";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ka"],
  defaultLocale: "en",
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getSession();
  const user = session?.user;

  if (!user && (pathname.includes("/en/profile") || pathname.includes("/ka/profile"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!user && (pathname.includes("/en/admin") || pathname.includes("/ka/admin"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!user && (pathname.includes("/en/checkout") || pathname.includes("/ka/checkout"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!user && (pathname.includes("/en/checkout") || pathname.includes("/ka/checkout"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const dynamicStoreRoutePattern = /^\/(en|ka)\/store\/.+$/;

  if (!user && dynamicStoreRoutePattern.test(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (user) {
    if (!user.role.includes("Admin") && (pathname.includes("/en/admin") || pathname.includes("/ka/admin"))) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
