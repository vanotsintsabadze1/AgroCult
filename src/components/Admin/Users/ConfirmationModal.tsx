import { motion } from "framer-motion";
import React from "react";

const parentModalAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childModalAnimations = {
  hidden: { y: -200 },
  visible: { y: 0 },
};

interface Props {
  cb: () => void;
  setConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmationModal({ cb, setConfirmationModal }: Props) {
  function onPositiveConfirmation() {
    setConfirmationModal(false);
    cb();
  }

  function onNegativeConfirmation() {
    setConfirmationModal(false);
  }

  return (
    <motion.div
      variants={parentModalAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 top-0 z-[8] flex h-screen w-screen items-center justify-center pl-[6rem]"
    >
      <motion.div
        variants={childModalAnimations}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="z-[8] flex w-[30rem] flex-col items-center justify-center gap-[2rem] rounded-lg bg-white py-[3rem] shadow-md"
      >
        <h4 className="text-[1.8rem] font-bold">Are you sure?</h4>

        <div className="flex justify-center gap-[2rem]">
          <button
            className="w-[10rem] rounded-lg bg-green-600 py-[.5rem] text-white shadow-md"
            onClick={onPositiveConfirmation}
          >
            Yes
          </button>
          <button
            className="w-[10rem] rounded-lg border-2 border-green-600 py-[.5rem] text-black shadow-md"
            onClick={onNegativeConfirmation}
          >
            No
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
