"use client";
import { deleteUser } from "../../scripts/auth/logout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { lang } from "../../dict/dictionary";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const divAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

function SettingsBar() {
  const [mode, setMode] = useState("");
  const [userPreferences, setUserPreferences] = useState(false);
  const path = usePathname();
  const locale = path.split("/")[1];
  const word = lang[locale as keyof typeof lang];
  const router = useRouter();

  function handleClick() {
    deleteUser().then(() => window.location.reload());
  }

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (
      theme === "dark" ||
      ((theme === undefined || theme === null) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setMode("light");
    }
  }, []);

  function changeTheme() {
    const theme = window.localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setMode("light");
    } else if (theme === "light") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setMode("dark");
    }
  }

  function handleDropdown() {
    setUserPreferences(!userPreferences);
  }

  function changeLanguage() {
    const pathArr = path.split("/");
    pathArr[1] = pathArr[1] === "en" ? "ka" : "en";
    const newPath = pathArr.join("/");
    router.push(newPath);
  }

  return (
    <>
      <div className="hidden h-full items-center justify-center gap-[2.5rem] lg:flex p-[0_3rem] relative">
        <button
          className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110 relative"
          onClick={handleDropdown}
        >
          <Image
            fill
            src={`/images/icons/header-icons/user-profile${mode === "dark" ? "-white" : ""}.webp`}
            alt="user-preferences-icon"
          />
        </button>
        <button className="text-[1.4rem] font-bold dark:text-dark-mode" onClick={handleClick}>
          {word.navigation.logout}
        </button>
        {/* Dropdown */}
        <AnimatePresence>
          {userPreferences && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={divAnimation}
              className="absolute top-[3.2rem] right-[5.5rem] bg-white shadow-sm rounded-[.3rem] w-[14rem] h-[11rem] flex flex-col items-center justify-evenly"
            >
              <button
                className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
                onClick={changeLanguage}
              >
                <b>Language</b>: {locale}
              </button>
              <button
                className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
                onClick={changeTheme}
              >
                <b>Theme</b>: {mode}
              </button>
              <button className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow">
                <b>Settings</b>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default SettingsBar;
