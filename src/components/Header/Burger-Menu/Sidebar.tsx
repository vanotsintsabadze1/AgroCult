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
      className="fixed right-0 top-0 flex h-screen w-[17rem] flex-col items-end bg-dark-primary lg:hidden"
    >
      {children}
    </motion.div>
  );
}
