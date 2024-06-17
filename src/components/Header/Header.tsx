import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
// import Cart from "./Cart/Cart";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./Burger-Menu/ThemeSwitcher";
import { getCurrentLocale } from "../../locales/server";
import { getSession } from "@auth0/nextjs-auth0";
import { retrieveTheme } from "@/scripts/theme/themeRetriever";

// async function getCartItems(userId: string) {
//   if (!userId) {
//     return [];
//   }

//   const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-cart-items`, {
//     method: "POST",
//     body: JSON.stringify({ userId }),
//     next: {
//       tags: ["cart"],
//     },
//   });

//   return await res.json();
// }

async function getProfileInfo(userId: string) {
  if (!userId) {
    return null;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-profile-info`, {
    method: "POST",
    body: JSON.stringify({ userId }),
  });

  return await res.json();
}

export default async function Header() {
  const session = await getSession();
  const userSesh = session?.user;
  const locale = getCurrentLocale();
  const user = (await getProfileInfo(userSesh?.sub)) as UserDB;
  const theme = await retrieveTheme();

  return (
    <header className="sticky top-0 z-[10] flex w-full items-center justify-center bg-body py-[1rem] lg:py-[1rem] dark:bg-dark-primary">
      <div className="relative flex w-full items-center justify-center px-[2rem] lg:justify-between">
        <section className="flex items-center gap-[2rem] px-[1rem] py-[1rem]">
          <div className="relative h-[5rem] w-[18rem] dark:hidden">
            <Image src="/images/logos/main-logo-colored.webp" fill alt="company-logo" />
          </div>
          <div className="relative hidden h-[5rem] w-[18rem] dark:block">
            <Image src="/images/logos/main-logo-white.webp" fill alt="company-logo-dark" />
          </div>
          <div className="hidden lg:block">
            <Navigation className="flex items-center justify-center gap-[3rem] px-[2rem] py-[1rem] text-[1.4rem] text-black" />
          </div>
        </section>
        <section className="relative hidden items-center justify-center gap-[2.5rem] px-[1rem] lg:flex">
          <ThemeSwitcher
            curTheme={theme}
            className="relative"
            animationVariant={{
              hidden: { opacity: 0, width: "0" },
              visible: { opacity: 1, width: "15rem" },
            }}
          />
          <LocaleSwitcher locale={locale} />
          {/* {user && <Cart className="relative hidden lg:block" usedFor="desktop" cart={cart} />} */}
          {user ? <UserButton username={user.name} userAvatar={user.image as string} /> : <LoginButton />}
        </section>
        {/* {user && <Cart className="absolute right-[7rem] lg:hidden" usedFor="mobile" cart={cart} />} */}
        <MobileMenu />
      </div>
    </header>
  );
}
