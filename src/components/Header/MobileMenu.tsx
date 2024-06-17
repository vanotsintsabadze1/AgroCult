import BurgerMenu from "./Burger-Menu/BurgerMenu";
import Sidebar from "./Burger-Menu/Sidebar";
import ThemeSwitcher from "./Burger-Menu/ThemeSwitcher";
import Navigation from "./Navigation";
import { retrieveTheme } from "@/scripts/theme/themeRetriever";

const divAnimaton = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "90%" },
};

export default async function MobileMenu() {
  const theme = await retrieveTheme();

  return (
    <BurgerMenu>
      <Sidebar>
        <Navigation className="mt-[10rem] flex w-full flex-col items-end gap-[5rem] pr-[1.5rem] text-[1.4rem] text-white" />
        <ThemeSwitcher
          curTheme={theme}
          animationVariant={{ hidden: divAnimaton.hidden, visible: divAnimaton.visible }}
          className="relative mt-[3rem] flex h-[2rem] w-full justify-end px-[1.5rem]"
        />
      </Sidebar>
    </BurgerMenu>
  );
}
