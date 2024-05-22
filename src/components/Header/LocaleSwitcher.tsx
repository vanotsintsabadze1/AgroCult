"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  locale: string;
}

const divAnimaiton = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 35 },
};

export default function LocaleSwitcher({ locale }: Props) {
  const router = useRouter();
  const [isDropdownOpen, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(!isDropdownOpen);
  }

  async function handleLocaleChange() {
    router.push(`/${locale === "ka" ? "en" : "ka"}`);
  }
  return (
    <div className="relative">
      <button
        onClick={handleDropdown}
        className={`flex items-center justify-center gap-[.5rem] rounded-t-[.5rem] ${isDropdownOpen ? "border-l-2 border-r-2 border-t-2" : "border-2"} border-gray-600 px-[.6rem] py-[.4rem] text-[1.5rem] uppercase shadow-soft`}
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
            className="absolute left-0 top-0 flex w-[4.9rem] items-center justify-center rounded-b-[.5rem] border-2 border-gray-600 py-[.5rem]"
          >
            <button
              onClick={handleLocaleChange}
              className="flex items-center justify-center gap-[.5rem] text-[1.5rem] uppercase shadow-soft"
            >
              <p> {locale === "ka" ? "en" : "ka"}</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
