"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export default function MobileLocaleSwitcher() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  function onChangeLocale() {
    changeLocale(locale === "en" ? "ka" : "en");
  }

  return (
    <button onClick={onChangeLocale} className="text-[1.5rem] font-light uppercase text-white">
      {locale}
    </button>
  );
}
