import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { getLocale } from "./helpers/getLocale";
import { i18n } from "../i18n.config";

let locales = i18n.locales;

export function localeRedirection(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    const locale = getLocale(request);

    if (pathnameHasLocale) {
      return middleware(request, event);
    }

    if (!pathnameHasLocale) {
      request.nextUrl.pathname = `/${locale}${pathname}`;
      return NextResponse.redirect(request.nextUrl);
    }

    return middleware(request, event);
  };
}
