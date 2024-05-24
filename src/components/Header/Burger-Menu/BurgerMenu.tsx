"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  children?: React.ReactNode;
}

export default function BurgerMenu({ children }: Props) {
  const [isSideBarOpen, setSideBar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setSideBar(false);
  }, [pathname]);

  function handleBurgerMenuClick() {
    setSideBar(!isSideBarOpen);
  }

  return (
    <>
      <button className="absolute right-[2rem] top-[50%] z-[10] translate-y-[-50%] lg:hidden" onClick={handleBurgerMenuClick}>
        <div className={`relative h-[3.5rem] w-[2.8rem] dark:hidden ${isSideBarOpen ? "hidden" : ""}`}>
          <Image fill src="/images/icons/header-icons/burger-menu.webp" alt="burger-menu-icon" />
        </div>
        <div className={`relative h-[3.5rem] w-[2.8rem] ${isSideBarOpen ? "block" : "hidden"} dark:block`}>
          <Image fill src="/images/icons/header-icons/burger-menu-white.webp" alt="burger-menu-icon" />
        </div>
      </button>
      <AnimatePresence>{isSideBarOpen && children}</AnimatePresence>
    </>
  );
}
