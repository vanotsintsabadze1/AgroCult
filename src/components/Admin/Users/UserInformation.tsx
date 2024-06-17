import { motion } from "framer-motion";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";

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
  const word = useScopedI18n("admin.users");

  function onCopyUserId() {
    navigator.clipboard.writeText(user_id);
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
        {image && <Image src={image} alt={name} width={30} height={30} className="h-[10rem] w-[10rem] rounded-[50%]" />}
        <div className="mt-[2rem] flex w-full flex-col gap-[1rem] px-[1rem]">
          <div className="w-[30rem] overflow-x-auto">
            <p className="text-[1.3rem] font-bold text-gray-500">{word("id")}:</p>
            <p>{user_id}</p>
            <button
              className="mt-[.5rem] cursor-pointer text-[1.3rem] font-bold text-blue-400 underline"
              onClick={onCopyUserId}
            >
              {word("copy")}
            </button>
          </div>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">{word("name")}</span>: <br />
            {name}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">{word("email")}</span>: <br />
            {email}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">{word("role")}</span>: <br />
            {role}
          </p>
          <p className="text-[1.5rem]">
            <span className="text-[1.3rem] text-gray-500">{word("created_at")}</span>: <br />
            {created_at?.toUTCString()}
          </p>
        </div>
        <button
          onClick={() => setModal(false)}
          className="mt-[2rem] rounded-md bg-green-600 px-[1rem] py-[0.5rem] text-white"
        >
          {word("close")}
        </button>
      </motion.div>
    </motion.div>
  );
}
