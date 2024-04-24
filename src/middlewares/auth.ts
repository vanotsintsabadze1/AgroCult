import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { getLocale } from "./helpers/getLocale";

export function auth(middlware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const { pathname } = request.nextUrl;
    const user = request.cookies.get("user");
    const locale = getLocale(request);

    if (!user?.value) {
      if (pathname !== "/en/login" && pathname !== "/ka/login") {
        return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
      }
    }

    if (user?.value && (pathname === "/en/login" || pathname === "/ka/login")) {
      return NextResponse.redirect(new URL(`/${locale}/`, request.url));
    }

    return middlware(request, event);
  };
}
