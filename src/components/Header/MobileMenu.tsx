import BurgerMenu from "./Burger-Menu/BurgerMenu";
import Sidebar from "./Burger-Menu/Sidebar";
import ThemeSwitcher from "./Burger-Menu/ThemeSwitcher";
import Navigation from "./Navigation";

export default function MobileMenu() {
  return (
    <BurgerMenu>
      <Sidebar>
        <Navigation className="mt-[8rem] flex w-full flex-col items-end gap-[5rem] pr-[1.5rem] text-[1.6rem] text-white" />
        <ThemeSwitcher />
      </Sidebar>
    </BurgerMenu>
  );
}
