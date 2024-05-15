"use client";

import { AnimatePresence, motion } from "framer-motion";
import ThemeSettings from "./ThemeSettings";
import { useState } from "react";
import { changeLanguage } from "../../../scripts/language/changeLanguage";
import { useScopedI18n } from "../../../locales/client";
import { logout } from "../../../scripts/auth/logout";
import { useRouter } from "next/navigation";

interface Props {
  locale: string;
  theme?: string;
}

const divAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

function DropdownSettings({ locale, theme }: Props) {
  const [themeDropdown, setThemeDropdown] = useState(false);
  const word = useScopedI18n("navigation");
  const router = useRouter();

  function enableThemeDropdown() {
    setThemeDropdown(!themeDropdown);
  }

  async function handleChangeLanguage() {
    await changeLanguage();
    router.refresh();
  }

  function redirectAdminPanel() {
    router.push("/admin");
  }

  async function handleLogOut() {
    await logout();
    router.refresh();
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={divAnimation}
      className="absolute top-[3.2rem] right-[5.5rem] bg-white shadow-sm rounded-[.3rem] w-[14rem] h-[18rem]"
    >
      <div className="flex flex-col items-center justify-evenly h-full w-full relative">
        <button
          className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
          onClick={handleChangeLanguage}
        >
          <b>Language</b>: {locale}
        </button>
        <button
          className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
          onClick={enableThemeDropdown}
        >
          <b>Theme</b>: {!theme ? "System" : theme}
        </button>
        <AnimatePresence>{themeDropdown && <ThemeSettings />}</AnimatePresence>
        <button className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow">
          <b>Settings</b>
        </button>
        <button
          className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
          onClick={redirectAdminPanel}
        >
          <b>APanel</b>
        </button>
        <button
          className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
          onClick={handleLogOut}
        >
          <b>{word("logout")}</b>
        </button>
      </div>
    </motion.div>
  );
}

export default DropdownSettings;
