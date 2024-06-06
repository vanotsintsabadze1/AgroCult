"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useChangeLocale } from "../../locales/client";
import { useCurrentLocale } from "../../locales/client";

interface Props {
  locale: string;
}

const divAnimaiton = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function LocaleSwitcher({ locale }: Props) {
  const changeLocale = useChangeLocale();
  const currLocale = useCurrentLocale();

  const [isDropdownOpen, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(!isDropdownOpen);
  }

  function handleLocaleChange(locale: string) {
    if (currLocale === locale) {
      setDropdown(false);
    } else {
      changeLocale(locale === "en" ? "en" : "ka");
    }
  }

  return (
    <div className={`relative ${isDropdownOpen ? "mx-[1rem]" : ""}`}>
      <button
        onClick={handleDropdown}
        className={`shadow-soft flex items-center justify-center gap-[.5rem] rounded-t-[1rem] px-[.6rem] py-[.4rem] text-[1.4rem] uppercase text-black dark:text-white`}
      >
        <p> {locale}</p>
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            variants={divAnimaiton}
            initial="hidden"
            transition={{ duration: 0.1 }}
            animate="visible"
            exit="hidden"
            className="absolute left-[-1rem] top-0  z-10 flex w-[5rem] items-center justify-center divide-x-2 divide-black bg-body px-[0] py-[.5rem] text-[1.4rem] dark:divide-white dark:bg-dark-primary"
          >
            <button
              className="px-[.8rem] uppercase text-black dark:text-white"
              onClick={() => handleLocaleChange("en")}
            >
              EN
            </button>
            <button
              className="px-[.8rem] uppercase text-black dark:text-white"
              onClick={() => handleLocaleChange("ka")}
            >
              KA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
