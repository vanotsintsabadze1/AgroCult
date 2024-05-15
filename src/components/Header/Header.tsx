import Navigation from "./Navigation";
import SettingsBar from "./Desktop/SettingsBar";
import Image from "next/image";
import BurgerMenu from "./Mobile/BurgerMenu";
import Sidebar from "./Mobile/Sidebar";
import Cart from "./Cart";
import MobileThemeSwitcher from "./Mobile/MobileThemeSwitcher";

interface Props {
  locale: string;
}

export default function Header({ locale }: Props) {
  return (
    <header className="flex lg:h-[6rem] h-[7rem] w-full items-center bg-[#f5f5f5] justify-center sticky top-0 z-[10] bg-whitesmoke dark:bg-dark-primary">
      <div className="flex w-full items-center justify-center lg:justify-between relative">
        <div className="flex w-full items-center justify-center lg:w-[20rem]">
          <div className="h-[3.5rem] w-[3.5rem] relative dark:hidden">
            <Image fill src={`/images/logos/main-logo-black.webp`} alt="header-logo" />
          </div>
          <div className="h-[3.5rem] w-[3.5rem] relative hidden dark:block">
            <Image fill src={`/images/logos/main-logo-white.webp`} alt="header-logo-white" />
          </div>
        </div>
        <Cart usedFor="mobile" />
        <BurgerMenu>
          <Sidebar>
            <Navigation usedFor="mobile" />
            <MobileThemeSwitcher />
          </Sidebar>
        </BurgerMenu>
        <Navigation usedFor="desktop" />
        <SettingsBar locale={locale} />
      </div>
    </header>
  );
}
