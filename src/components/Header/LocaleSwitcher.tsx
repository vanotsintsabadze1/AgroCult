"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useChangeLocale } from "../../locales/client";

interface Props {
  locale: string;
}

const divAnimaiton = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 32 },
};

export default function LocaleSwitcher({ locale }: Props) {
  const changeLocale = useChangeLocale();

  const [isDropdownOpen, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(!isDropdownOpen);
  }

  async function handleLocaleChange() {
    changeLocale(locale === "ka" ? "en" : "ka");
  }

  return (
    <div className="relative">
      <button
        onClick={handleDropdown}
        className={`flex items-center justify-center gap-[.5rem] rounded-t-[1rem] dark:bg-white ${isDropdownOpen ? "border-l-2 border-r-2 border-t-2" : "rounded-b-[1rem] border-2"} border-gray-600 px-[.6rem] py-[.4rem] text-[1.5rem] uppercase shadow-soft`}
      >
        <p> {locale}</p>
        <Image src="/images/icons/misc/caret.webp" width={10} height={10} alt="lang-caret" />
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            variants={divAnimaiton}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-0 top-0 flex w-[4.9rem] items-center justify-center rounded-b-[.5rem] border-2 border-gray-600 py-[.5rem] dark:bg-white"
          >
            <button
              onClick={handleLocaleChange}
              className="flex h-full w-full items-center justify-center gap-[.5rem] text-[1.5rem] uppercase shadow-soft"
            >
              <p> {locale === "ka" ? "en" : "ka"}</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
