import BurgerMenu from "./Burger-Menu/BurgerMenu";
import MobileLocaleSwitcher from "./Burger-Menu/MobileLocaleSwitcher";
import MobileUserInfo from "./Burger-Menu/MobileUserInfo";
import Sidebar from "./Burger-Menu/Sidebar";
import ThemeSwitcher from "./Burger-Menu/ThemeSwitcher";
import Navigation from "./Navigation";
import { retrieveTheme } from "@/scripts/theme/themeRetriever";
import { getSession } from "@auth0/nextjs-auth0";
import { getScopedI18n } from "@/locales/server";

const divAnimaton = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "90%" },
};

export default async function MobileMenu() {
  const theme = await retrieveTheme();
  const session = await getSession();
  const word = await getScopedI18n("header.dropDown");

  return (
    <BurgerMenu>
      <Sidebar>
        <MobileUserInfo />
        <Navigation className="mt-[2rem] flex w-full flex-col items-end gap-[5rem] pr-[1.5rem] text-[1.4rem] text-white" />
        <ThemeSwitcher
          curTheme={theme}
          animationVariant={{ hidden: divAnimaton.hidden, visible: divAnimaton.visible }}
          className="relative mt-[3rem] flex h-[2rem] w-full justify-end px-[1.5rem]"
        />
        <div className="mt-[4rem] flex w-full justify-end px-[2rem]">
          <MobileLocaleSwitcher />
        </div>
        {session && (
          <div className="flex w-full flex-grow items-end justify-end px-[1.5rem] pb-[3rem]">
            <a className="text-[1.4rem] font-bold text-white" href="/api/auth/logout">
              {word("logout")}
            </a>
          </div>
        )}
      </Sidebar>
    </BurgerMenu>
  );
}
