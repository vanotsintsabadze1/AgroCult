"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { setTheme } from "../../../scripts/theme/themeSetter";
import { retrieveTheme } from "../../../scripts/theme/themeRetriever";

interface Props {
  className?: string;
  animationVariant: {
    hidden: { [key: string]: number | string };
    visible: { [key: string]: number | string };
  };
}

export default function ThemeSwitcher({ className, animationVariant }: Props) {
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
    <div className={className}>
      <button
        onClick={showThemeSwitcher}
        className={`flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-[50%] ${!isThemeSwitcherVisible ? "border border-black" : ""} bg-white p-[1rem]`}
      >
        <Image
          src={
            image === "" ? "/images/icons/header-icons/system-mode.webp" : image
          }
          width={20}
          height={20}
          alt="mode"
        />
      </button>
      <AnimatePresence>
        {isThemeSwitcherVisible && (
          <motion.div
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute right-[.5rem] top-0 flex h-[4rem] items-center justify-center gap-[3rem] rounded-[2rem] bg-white"
          >
            {["light", "dark", "system"].map((theme) => {
              return (
                <button key={theme} onClick={() => setDesiredTheme(theme)}>
                  <Image
                    src={`/images/icons/header-icons/${theme}-mode.webp`}
                    width={20}
                    height={20}
                    alt={`mode-${theme}`}
                  />
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
