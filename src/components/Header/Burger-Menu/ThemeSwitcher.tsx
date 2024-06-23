"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { setTheme } from "../../../scripts/theme/themeSetter";
import { SunMedium, Moon, Computer } from "lucide-react";

interface Props {
  className?: string;
  animationVariant: {
    hidden: { [key: string]: number | string };
    visible: { [key: string]: number | string };
  };
  curTheme: string;
}

export default function ThemeSwitcher({ curTheme, className, animationVariant }: Props) {
  const [isThemeSwitcherVisible, setThemeSwitcherVisible] = useState(false);
  const [theme, setCurTheme] = useState(curTheme);

  function showThemeSwitcher() {
    setThemeSwitcherVisible(!isThemeSwitcherVisible);
  }

  async function setDesiredTheme(theme: string) {
    setCurTheme(theme);
    setTheme(theme);
    setThemeSwitcherVisible(false);
  }

  return (
    <div className={className}>
      <button
        onClick={showThemeSwitcher}
        className={`flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-[50%] ${!isThemeSwitcherVisible ? "border border-black" : ""} bg-white p-[1rem]`}
      >
        {theme === "light" ? <SunMedium size={20} /> : theme === "dark" ? <Moon size={20} /> : <Computer size={20} />}
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
            <button onClick={() => setDesiredTheme("light")}>
              <SunMedium size={20} />
            </button>
            <button onClick={() => setDesiredTheme("dark")}>
              <Moon size={20} />
            </button>
            <button onClick={() => setDesiredTheme("system")}>
              <Computer size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
