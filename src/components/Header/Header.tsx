import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Cart from "./Cart/Cart";
import LoginButton from "./Desktop/LoginButton";
import UserButton from "./UserButton";
import { cookies } from "next/headers";
import LocaleSwitcher from "./LocaleSwitcher";

interface Props {
  locale: string;
}

export default function Header({ locale }: Props) {
  const user = cookies().get("user")?.value;

  return (
    <header className="sticky top-0 z-[10] flex w-full items-center justify-center bg-body py-[1rem] lg:py-[1rem] dark:bg-dark-primary">
      <div className="relative flex w-full items-center justify-center px-[2rem] lg:justify-between">
        <section className="flex items-center gap-[2rem] px-[1rem] py-[1rem]">
          <div>
            <Image src="/images/logos/main-logo-colored.webp" width={150} height={150} alt="company-logo" className="dark:hidden" />
          </div>
          <div>
            <Image src="/images/logos/main-logo-white.webp" width={150} height={150} alt="company-logo" className="hidden dark:block" />
          </div>
          <div className="hidden lg:block">
            <Navigation className="flex items-center justify-center gap-[3rem] px-[2rem] py-[1rem] text-[1.4rem] text-black" />
          </div>
        </section>
        <section className="relative hidden items-center justify-center gap-[2rem] px-[1rem] lg:flex">
          <LocaleSwitcher locale={locale} />
          <Cart className="hidden lg:block" />
          {user ? <UserButton /> : <LoginButton />}
        </section>
        <MobileMenu />
      </div>
    </header>
  );
}
