"use client";
import Image from "next/image";
import DropdownSettings from "./DropdownSettings";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cart from "../Cart";

interface Props {
  locale: string;
  theme?: string;
}

function DropdownWrapper({ locale, theme }: Props) {
  const [userPreferences, setUserPreferences] = useState(false);

  function handleEnablePreferences() {
    setUserPreferences(!userPreferences);
  }

  return (
    <>
      <Cart usedFor="desktop" />
      <button className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110 relative" onClick={handleEnablePreferences}>
        <Image fill src={`/images/icons/header-icons/user-profile.webp`} alt="user-preferences-icon" className="dark:hidden" />
        <Image fill src={`/images/icons/header-icons/user-profile-white.webp`} className="hidden dark:block" alt="user-preferences-icon" />
      </button>

      <AnimatePresence>{userPreferences && <DropdownSettings locale={locale} theme={theme} />}</AnimatePresence>
    </>
  );
}

export default DropdownWrapper;
