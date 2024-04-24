import { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { i18n } from "../../i18n.config";

let locales = i18n.locales;
let defaultLocale = i18n.defaultLocale;

export function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((val, key) => (negotiatorHeaders[key] = val));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = match(languages, locales, defaultLocale);

  return locale;
}
