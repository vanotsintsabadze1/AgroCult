import { motion } from "framer-motion";

const parentModalAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childModalAnimations = {
  hidden: { y: -200 },
  visible: { y: 0 },
};

interface Props extends Logs {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LogInformation({
  id,
  performer_name,
  performer_id,
  type,
  description,
  performed_at,
  setModal,
}: Props) {
  function copyOnClick(arg: string) {
    navigator.clipboard.writeText(arg);
  }
  return (
    <motion.div
      variants={parentModalAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 top-0 z-[8] flex h-screen w-screen items-center justify-center pl-[6rem]"
    >
      <canvas className="absolute h-full w-full bg-gray-300 opacity-50" />
      <motion.div
        variants={childModalAnimations}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="z-[8] flex flex-col items-center justify-center rounded-lg bg-white px-[1rem] py-[2.5rem] shadow-md"
      >
        <div className="mt-[2rem] flex w-full flex-col gap-[1rem] px-[1rem]">
          <div className="w-[30rem] overflow-x-auto">
            <p className="text-[1.3rem] font-bold text-gray-500">Action ID:</p>
            <p>{id}</p>
            <button
              className="mt-[.5rem] cursor-pointer text-[1.3rem] font-bold text-blue-400 underline"
              onClick={() => copyOnClick(id.toString())}
            >
              Copy
            </button>
          </div>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">Performer</span>: <br />
            {performer_name}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">PID</span>: <br />
            {performer_id}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">Type</span>: <br />
            {type}
          </p>
          <div className="w-[30rem] overflow-x-auto">
            <p className="text-[1.3rem] font-bold text-gray-500">Description:</p>
            <p>{description}</p>
            <button
              className="mt-[.5rem] cursor-pointer text-[1.3rem] font-bold text-blue-400 underline"
              onClick={() => copyOnClick(description)}
            >
              Copy
            </button>
          </div>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">Created At</span>: <br />
            {performed_at?.toLocaleDateString()} {performed_at?.toLocaleTimeString()}
          </p>
        </div>
        <button
          onClick={() => setModal(false)}
          className="mt-[2rem] rounded-md bg-green-600 px-[1rem] py-[0.5rem] text-white"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
