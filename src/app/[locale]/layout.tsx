import "./globals.css";
import { cookies } from "next/headers";
import { I18nProviderClient } from "@/locales/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import LenisWrapper from "../../components/Animation-Wrappers/LenisWrapper";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

export const metadata = {
  title: "AgroCult",
  description: "Official AgroCult website. The best place to find the best agricultural products.",
};

const geoLocalFont = localFont({
  src: [
    {
      path: "../../lib/fonts/TBCX-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../lib/fonts/TBCX-Normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../lib/fonts/TBCX-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../lib/fonts/TBCX-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const theme = cookies().get("theme");
  return (
    <html lang={locale} className={`${theme ? theme.value : ""}`}>
      <UserProvider>
        <body className={`${geoLocalFont.className} bg-body dark:bg-dark-primary`}>
          <I18nProviderClient locale={locale}>
            <LenisWrapper>{children}</LenisWrapper>
          </I18nProviderClient>

          <Toaster position="top-center" containerClassName="text-[1.3rem]" />
        </body>
      </UserProvider>
    </html>
  );
}
