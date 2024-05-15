"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { setTheme } from "../../../scripts/theme/themeSetter";
import { retrieveTheme } from "../../../scripts/theme/themeRetriever";

const divAnimaton = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "150px" },
};

export default function MobileThemeSwitcher() {
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
    <div className="w-full h-[2rem] mt-[3rem] flex justify-end relative px-[1.5rem]">
      <button
        onClick={showThemeSwitcher}
        className="rounded-[50%] h-[3.8rem] bg-white w-[3.8rem] p-[1rem] flex justify-center items-center"
      >
        <Image
          src={image === "" ? "/images/icons/header-icons/system-mode.webp" : image}
          width={20}
          height={20}
          alt="mode"
        />
      </button>
      <AnimatePresence>
        {isThemeSwitcherVisible && (
          <motion.div
            variants={divAnimaton}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-0 right-[1rem] rounded-[2rem] bg-white w-[5rem] flex flex-col justify-center items-center gap-[3rem]"
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
