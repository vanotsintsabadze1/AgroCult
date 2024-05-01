"use client";
import Image from "next/image";
import DropdownSettings from "./DropdownSettings";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useScopedI18n } from "../../locales/client";
import { logout } from "../../scripts/auth/logout";

interface Props {
  locale: string;
  theme?: string;
}

function DropdownWrapper({ locale, theme }: Props) {
  const [userPreferences, setUserPreferences] = useState(false);
  const word = useScopedI18n("navigation");

  function handleEnablePreferences() {
    setUserPreferences(!userPreferences);
  }

  async function handleLogOut() {
    await logout();
    window.location.reload();
  }

  return (
    <>
      <button
        className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110 relative"
        onClick={handleEnablePreferences}
      >
        <Image
          fill
          src={`/images/icons/header-icons/user-profile.webp`}
          alt="user-preferences-icon"
          className="dark:hidden"
        />
        <Image
          fill
          src={`/images/icons/header-icons/user-profile-white.webp`}
          className="hidden dark:block"
          alt="user-preferences-icon"
        />
      </button>
      <button className="text-[1.4rem] font-bold dark:text-dark-mode" onClick={handleLogOut}>
        {word("logout")}
      </button>

      <AnimatePresence>{userPreferences && <DropdownSettings locale={locale} theme={theme} />}</AnimatePresence>
    </>
  );
}

export default DropdownWrapper;
