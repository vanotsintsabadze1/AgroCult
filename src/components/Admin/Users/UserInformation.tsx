import { motion } from "framer-motion";

const parentModalAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childModalAnimations = {
  hidden: { y: -200 },
  visible: { y: 0 },
};

interface Props extends UserDB {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserInformation({ user_id, name, email, role, image, created_at, setModal }: Props) {
  return (
    <motion.div
      variants={parentModalAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 top-0 z-[8] flex h-screen w-screen items-center justify-center"
    >
      <canvas className="absolute h-full w-full bg-gray-300 opacity-50" />
      <motion.div
        variants={childModalAnimations}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="z-[8] flex w-[30rem] flex-col items-center justify-center rounded-lg bg-white px-[1rem] py-[2.5rem] shadow-md"
      >
        <img src={image} alt={name} className="h-[10rem] w-[10rem] rounded-[50%]" />
        <div className="mt-[2rem] flex w-full flex-col gap-[1rem] overflow-x-hidden px-[1rem]">
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">User ID</span>:<br />
            {user_id}
            <p
              className="mt-[.5rem] cursor-pointer text-[1.3rem] font-bold text-blue-400 underline"
              onClick={() => navigator.clipboard.writeText(user_id)}
            >
              Copy
            </p>
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">Name</span>: <br />
            {name}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">Email</span>: <br />
            {email}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">Role</span>: <br />
            {role}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">Created At</span>: <br />
            {created_at?.toUTCString()}
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
