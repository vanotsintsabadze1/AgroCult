import Navigation from "./Navigation";
import SettingsBar from "./SettingsBar";
import Image from "next/image";

interface Props {
  locale: string;
}

export default function Header({ locale }: Props) {
  return (
    <header className="flex h-[6rem] w-full items-center justify-center">
      <div className="flex w-full items-center justify-center lg:justify-between">
        <div className="relative flex w-full items-center justify-center lg:w-[20rem]">
          <div className="h-[3.5rem] w-[3.5rem] relative dark:hidden">
            <Image fill src={`/images/logos/main-logo-black.webp`} alt="header-logo" />
          </div>
          <div className="h-[3.5rem] w-[3.5rem] relative hidden dark:block">
            <Image fill src={`/images/logos/main-logo-white.webp`} alt="header-logo" />
          </div>
          <button className="absolute right-[2rem] top-[50%] translate-y-[-50%] lg:hidden">
            <div className="h-[3rem] w-[2.2rem] relative dark:hidden">
              <Image fill src="/images/icons/header-icons/burger-menu.webp" alt="burger-menu-icon" />
            </div>
            <div className="h-[3rem] w-[2.2rem] relative hidden dark:block">
              <Image fill src="/images/icons/header-icons/burger-menu-white.webp" alt="burger-menu-icon" />
            </div>
          </button>
        </div>
        <Navigation locale={locale} />
        <SettingsBar locale={locale} />
      </div>
    </header>
  );
}
