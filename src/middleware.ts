import { NextRequest, NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ka"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = request.cookies.get("user");

  if (!user?.value) {
    if (pathname !== "/login") {
      return NextResponse.redirect(new URL(`/login`, request.url));
    }
  }

  if (user?.value && pathname === "/login") {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
