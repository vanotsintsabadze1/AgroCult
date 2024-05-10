"use client";

import { motion } from "framer-motion";

const divAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  children: React.ReactNode;
}

export default function PageAnimationWrapper({ children }: Props) {
  return (
    <motion.div
      className="w-full h-full flex flex-grow flex-col"
      initial="hidden"
      animate="visible"
      variants={divAnimation}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
