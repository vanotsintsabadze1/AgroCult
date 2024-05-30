import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Cart from "./Cart/Cart";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./Burger-Menu/ThemeSwitcher";
import { getCurrentLocale } from "../../locales/server";
import { getSession } from "@auth0/nextjs-auth0";

async function getCartItems(userId: string) {
  if (!userId) {
    return [];
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-cart-items`,
    {
      method: "POST",
      body: JSON.stringify({ userId }),
      next: {
        tags: ["cart"],
      },
    },
  );

  return await res.json();
}

export default async function Header() {
  const session = await getSession();
  const user = session?.user;
  const cart: CartItem[] = await getCartItems(user?.sub);
  const locale = getCurrentLocale();

  return (
    <header className="sticky top-0 z-[10] flex w-full items-center justify-center bg-body py-[1rem] lg:py-[1rem] dark:bg-dark-primary">
      <div className="relative flex w-full items-center justify-center px-[2rem] lg:justify-between">
        <section className="flex items-center gap-[2rem] px-[1rem] py-[1rem]">
          <div>
            <Image
              src="/images/logos/main-logo-colored.webp"
              width={150}
              height={150}
              alt="company-logo"
              className="dark:hidden"
            />
          </div>
          <div>
            <Image
              src="/images/logos/main-logo-white.webp"
              width={150}
              height={150}
              alt="company-logo"
              className="hidden dark:block"
            />
          </div>
          <div className="hidden lg:block">
            <Navigation className="flex items-center justify-center gap-[3rem] px-[2rem] py-[1rem] text-[1.4rem] text-black" />
          </div>
        </section>
        <section className="relative hidden items-center justify-center gap-[2rem] px-[1rem] lg:flex">
          <ThemeSwitcher
            className="relative"
            animationVariant={{
              hidden: { opacity: 0, width: "0" },
              visible: { opacity: 1, width: "15rem" },
            }}
          />
          <LocaleSwitcher locale={locale} />
          {user && (
            <Cart
              className="relative hidden lg:block"
              usedFor="desktop"
              cart={cart}
            />
          )}
          {user ? <UserButton /> : <LoginButton />}
        </section>
        {user && (
          <Cart
            className="absolute right-[7rem] lg:hidden"
            usedFor="mobile"
            cart={cart}
          />
        )}
        <MobileMenu />
      </div>
    </header>
  );
}
