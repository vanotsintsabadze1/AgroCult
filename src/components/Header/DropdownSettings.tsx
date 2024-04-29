"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import ThemeSettings from "./ThemeSettings";
import { useState } from "react";

interface Props {
  locale: string;
}

const divAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

function DropdownSettings({ locale }: Props) {
  const router = useRouter();
  const path = usePathname();
  const [themeDropdown, setThemeDropdown] = useState(false);

  function changeLanguage() {
    const pathArr = path.split("/");
    pathArr[1] = pathArr[1] === "en" ? "ka" : "en";
    const newPath = pathArr.join("/");
    router.replace(newPath);
  }

  function enableThemeDropdown() {
    setThemeDropdown(!themeDropdown);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={divAnimation}
      className="absolute top-[3.2rem] right-[5.5rem] bg-white shadow-sm rounded-[.3rem] w-[14rem] h-[11rem]"
    >
      <div className="flex flex-col items-center justify-evenly h-full w-full relative">
        <button
          className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
          onClick={changeLanguage}
        >
          <b>Language</b>: {locale}
        </button>
        <button
          className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
          onClick={enableThemeDropdown}
        >
          <b>Theme</b>: {locale}
        </button>
        <AnimatePresence>{themeDropdown && <ThemeSettings />}</AnimatePresence>
        <button className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow">
          <b>Settings</b>
        </button>
      </div>
    </motion.div>
  );
}

export default DropdownSettings;
