"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { setTheme } from "../../../scripts/theme/themeSetter";
import { retrieveTheme } from "../../../scripts/theme/themeRetriever";

const divAnimaton = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "90%" },
};

export default function ThemeSwitcher() {
  const [isThemeSwitcherVisible, setThemeSwitcherVisible] = useState(false);
  const [image, setImage] = useState("");

  function showThemeSwitcher() {
    setThemeSwitcherVisible(!isThemeSwitcherVisible);
  }

  async function setDesiredTheme(theme: string) {
    await setTheme(theme);
    setThemeSwitcherVisible(false);
    setImage(`/images/icons/header-icons/${theme}-mode.webp`);
  }

  async function setThemeImage() {
    const theme = await retrieveTheme();
    setImage(`/images/icons/header-icons/${theme}-mode.webp`);
  }

  useEffect(() => {
    setThemeImage();
  }, []);

  return (
    <div className="relative mt-[3rem] flex h-[2rem] w-full justify-end px-[1.5rem]">
      <button
        onClick={showThemeSwitcher}
        className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-[50%] bg-white p-[1rem]"
      >
        <Image src={image === "" ? "/images/icons/header-icons/system-mode.webp" : image} width={20} height={20} alt="mode" />
      </button>
      <AnimatePresence>
        {isThemeSwitcherVisible && (
          <motion.div
            variants={divAnimaton}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute right-[.5rem] top-0 flex h-[4rem] items-center justify-center gap-[3rem] rounded-[2rem] bg-white"
          >
            {["light", "dark", "system"].map((theme) => {
              return (
                <button key={theme} onClick={() => setDesiredTheme(theme)}>
                  <Image src={`/images/icons/header-icons/${theme}-mode.webp`} width={20} height={20} alt="mode" />
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
