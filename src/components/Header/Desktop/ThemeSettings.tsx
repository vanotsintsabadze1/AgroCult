import { motion } from "framer-motion";
import { setTheme } from "../../../scripts/theme/themeSetter";

const divAnimation = {
  hidden: { opacity: 0, y: 0, x: 0 },
  visible: { opacity: 1, y: 0, x: -100 },
};

function ThemeSettings() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={divAnimation}
      className="absolute w-[10rem] h-[11rem] flex flex-col bg-white"
    >
      <button
        className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
        onClick={() => setTheme("dark")}
      >
        <b>dark</b>
      </button>
      <button
        className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
        onClick={() => setTheme("system")}
      >
        <b>system</b>
      </button>
      <button
        className="w-full font-medium text-[1.2rem] z-[4] uppercase hover:bg-slate-200 duration-200 easeOut flex-grow"
        onClick={() => setTheme("light")}
      >
        <b>light</b>
      </button>
    </motion.div>
  );
}

export default ThemeSettings;
