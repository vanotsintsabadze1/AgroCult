import { motion } from "framer-motion";

const parentAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childModalAnimations = {
  hidden: { y: -200 },
  visible: { y: 0 },
};

const pathAnimation = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1 },
};

interface Props {
  modalMessage: {
    type: string;
    message: string;
  };
}

export default function ActionModal({ modalMessage }: Props) {
  return (
    <motion.div
      variants={parentAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-0 z-[8] flex h-screen w-screen items-center justify-center bg-gray-300 pl-[6rem] opacity-70"
    >
      <motion.div
        variants={childModalAnimations}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex h-[30rem] w-[30rem] flex-col items-center justify-center rounded-lg bg-white shadow-md"
      >
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-6 -5 36 36">
          <motion.circle
            variants={pathAnimation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            stroke={modalMessage.type === "error" ? "red" : "green"}
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            cx="12"
            cy="12"
            r={modalMessage.type === "error" ? 12 : 11}
          ></motion.circle>
          {modalMessage.type === "error" ? (
            <motion.path
              variants={pathAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
              strokeWidth={2}
              stroke="red"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          ) : (
            <motion.path
              variants={pathAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
              stroke="green"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          )}
        </svg>

        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate="visible"
          className={`${modalMessage.type === "error" ? "text-red-500" : "text-green-600"} text-[1.5rem] font-medium`}
          transition={{ delay: 1 }}
        >
          {modalMessage.message}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
