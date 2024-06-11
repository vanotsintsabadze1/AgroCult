import { motion } from "framer-motion";
import { editUser } from "../../../scripts/actions/admin-panel/editUser";
import { useRouter } from "next/navigation";
import React from "react";
import { addLog } from "../../../scripts/actions/admin-panel/addLog";

const parentModalAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childModalAnimations = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

interface Props {
  userDetails: UserDB;
  initialUserData: UserDB;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDB>>;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditUserModal({ userDetails, initialUserData, setUserDetails, setEditModalOpen }: Props) {
  const router = useRouter();

  async function onEditSubmit() {
    if (userDetails.name === "" || userDetails.email === "") {
      setEditModalOpen(false);
      setUserDetails(initialUserData);
      return;
    }

    if (
      userDetails.name === initialUserData.name &&
      userDetails.email === initialUserData.email &&
      userDetails.role === initialUserData.role
    ) {
      setEditModalOpen(false);
      return;
    }

    const res = await editUser(userDetails.user_id, userDetails.name, userDetails.email, userDetails.role);
    if (res.status === 200) {
      addLog("Edit", `Edited user - ${userDetails.user_id}`);
    }

    setEditModalOpen(false);
    setTimeout(() => {
      router.refresh();
    }, 1000);
  }

  function onUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserDetails((prev) => ({ ...prev, name: e.target.value }));
  }

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserDetails((prev) => ({ ...prev, email: e.target.value }));
  }

  function onRoleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setUserDetails((prev) => ({ ...prev, role: e.target.value }));
  }

  return (
    <motion.div
      variants={parentModalAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 top-0 z-[8] flex h-screen w-full items-center justify-center pl-[6rem]"
    >
      <motion.div
        variants={childModalAnimations}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="z-[8] flex w-[30rem] flex-col items-center justify-center rounded-lg bg-[rgba(0,0,0,0.5)] bg-white px-[1rem] py-[2rem] shadow-md md:px-[2rem]"
        data-lenis-prevent
      >
        <h2 className="py-[1rem] text-[2rem] font-bold">Edit User</h2>
        <div className="relative flex w-full flex-col items-center gap-[3rem] px-[1rem] py-[1rem]">
          <input
            type="text"
            name="username"
            className="w-full rounded-lg border-2 border-gray-300 px-[1.2rem] py-[1rem] text-[1.5rem] text-black shadow-sm placeholder:text-gray-300"
            placeholder="username"
            value={userDetails.name}
            onChange={onUsernameChange}
          />
          <input
            type="text"
            name="email"
            className={`w-full rounded-lg border-2 border-gray-300 px-[1.2rem] py-[1rem] text-[1.5rem] text-black ${userDetails.user_id.startsWith("google") ? "bg-gray-200 text-gray-400" : ""} shadow-sm placeholder:text-gray-300`}
            placeholder="username"
            disabled={userDetails.user_id.startsWith("google") ? true : false}
            value={userDetails.email}
            onChange={onEmailChange}
          />
          <div className="flex items-center justify-center gap-[1rem]">
            <h2 className="text-[1.3rem] font-medium">Edit Role:</h2>
            <select
              onChange={onRoleChange}
              name="role"
              className="h-[4rem] w-[10rem] rounded-lg bg-gray-300 px-[1rem] text-[1.5rem] font-medium shadow-sm"
            >
              <option>{userDetails.role}</option>
              <option>{userDetails.role.toLowerCase() === "member" ? "Admin" : "Member"}</option>
            </select>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-[2rem] py-[2rem]">
          <button
            onClick={onEditSubmit}
            className="h-[4rem] w-[15rem] rounded-lg bg-green-600 text-[1.5rem] text-white shadow-md"
          >
            Submit
          </button>
          <button
            onClick={() => setEditModalOpen(false)}
            className="h-[4rem] w-[15rem] rounded-lg border-2 border-green-600 text-[1.5rem] text-black shadow-md"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
