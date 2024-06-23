"use client";

import { deleteUser } from "../../../scripts/actions/admin-panel/deleteUser";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EditUserModal from "./EditUserModal";
import ConfirmationModal from "./ConfirmationModal";
import Image from "next/image";
import UserInformation from "./UserInformation";
import { addLog } from "../../../scripts/actions/admin-panel/addLog";
import toast from "react-hot-toast";

export default function UserActions({ user_id, name, email, role, image, created_at }: UserDB) {
  const session = useUser();
  const router = useRouter();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [userDetailsModal, setUserDetailsModal] = useState(false);
  const initialUserData: UserDB = { user_id, name, email, role };
  const [userDetails, setUserDetails] = useState({
    user_id: user_id,
    name: name,
    email: email,
    role: role,
  });
  function onDeleteButtonClick() {
    setConfirmationModal(true);
  }

  function handleUserEdit() {
    setEditModalOpen(true);
  }

  async function handleUserDelete() {
    if (session) {
      if (session.user?.sub === user_id) {
        toast.error("You can't delete yourself!");
        return;
      }

      const res = await deleteUser(user_id);
      if (res.status === 200) {
        toast.success("User deleted successfully!");
        addLog("Delete", `Deleted user - ${user_id}`);
      } else {
        toast.error("An error occurred while deleting the user!");
      }

      router.refresh();
    }
  }

  return (
    <>
      <AnimatePresence>
        {confirmationModal && <ConfirmationModal setConfirmationModal={setConfirmationModal} cb={handleUserDelete} />}
      </AnimatePresence>
      <AnimatePresence>
        {editModalOpen && (
          <EditUserModal
            userDetails={userDetails}
            initialUserData={initialUserData}
            setUserDetails={setUserDetails}
            setEditModalOpen={setEditModalOpen}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {userDetailsModal && (
          <UserInformation
            user_id={user_id}
            name={name}
            email={email}
            role={role}
            image={image}
            created_at={created_at}
            setModal={setUserDetailsModal}
          />
        )}
      </AnimatePresence>
      <button onClick={() => setUserDetailsModal(true)}>
        <Image
          src="/images/icons/admin-icons/actions-icons/see-details.webp"
          alt={`edit-icon.webp-${user_id}`}
          width={20}
          height={20}
          className="brighthness-100 grayscale invert duration-500 ease-in-out hover:scale-110 hover:brightness-75 hover:grayscale-0 hover:invert-0"
        />
      </button>
      <button onClick={handleUserEdit}>
        <Image
          src="/images/icons/admin-icons/actions-icons/edit.webp"
          alt={`edit-icon.webp-${user_id}`}
          width={20}
          height={20}
          className="brighthness-100 grayscale invert duration-500 ease-in-out hover:scale-110 hover:brightness-75 hover:grayscale-0 hover:invert-0"
        />
      </button>
      <button onClick={() => onDeleteButtonClick()}>
        <Image
          src="/images/icons/admin-icons/actions-icons/delete.webp"
          alt={`edit-icon.webp-${user_id}`}
          width={20}
          height={20}
          className="brighthness-100 grayscale invert duration-500 ease-in-out hover:scale-110 hover:brightness-75 hover:grayscale-0 hover:invert-0"
        />
      </button>
    </>
  );
}
