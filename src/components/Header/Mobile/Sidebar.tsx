"use client";

import { motion } from "framer-motion";
const divAnimation = {
  hidden: { x: 200 },
  visible: { x: 0 },
};

interface Props {
  children: React.ReactNode;
}

export default function Sidebar({ children }: Props) {
  return (
    <motion.div
      variants={divAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed lg:hidden w-[15rem] bg-dark-primary top-0 right-0 h-screen flex flex-col items-end"
    >
      {children}
    </motion.div>
  );
}
