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
      <button
        className="absolute right-[3rem] top-[50%] translate-y-[-50%] lg:hidden z-[10]"
        onClick={handleBurgerMenuClick}
      >
        <div className={`h-[3rem] w-[2.2rem] relative dark:hidden ${isSideBarOpen ? "hidden" : ""}`}>
          <Image fill src="/images/icons/header-icons/burger-menu.webp" alt="burger-menu-icon" />
        </div>
        <div className={`h-[3rem] w-[2.2rem] relative ${isSideBarOpen ? "block" : "hidden"} dark:block`}>
          <Image fill src="/images/icons/header-icons/burger-menu-white.webp" alt="burger-menu-icon" />
        </div>
      </button>
      <AnimatePresence>{isSideBarOpen && children}</AnimatePresence>
    </>
  );
}
