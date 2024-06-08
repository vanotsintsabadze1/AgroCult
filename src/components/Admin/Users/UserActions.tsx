"use client";

import { deleteUser } from "../../../scripts/actions/admin-panel/deleteUser";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EditUserModal from "./EditUserModal";
import DeleteActionModal from "../DeleteActionModal";
import ConfirmationModal from "./ConfirmationModal";
import Image from "next/image";
import UserInformation from "./UserInformation";
import { addLog } from "../../../scripts/actions/admin-panel/addLog";

interface ModalMessage {
  type: string;
  message: string;
}

export default function UserActions({ user_id, name, email, role, image, created_at }: UserDB) {
  const session = useUser();
  const router = useRouter();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [shouldLoadingModalOpen, setShouldLoadingModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<ModalMessage>({ type: "loading", message: "" });
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

  async function handleUserDelete(id: string) {
    if (session) {
      setShouldLoadingModalOpen(true);
      if (session.user?.sub === id) {
        setModalMessage({ type: "error", message: "You cannot delete yourself!" });
        setTimeout(() => {
          setShouldLoadingModalOpen(false);
        }, 2000);
        return;
      }

      const res = await deleteUser(id);
      if (res.status === 200) {
        setModalMessage({ type: "success", message: "User deleted successfully!" });
        addLog("Delete", `Deleted user - ${user_id}`)
      } else {
        setModalMessage({ type: "error", message: "Failed to delete user!" });
      }
      setTimeout(() => {
        setShouldLoadingModalOpen(false);
      }, 2500);
      setTimeout(() => {
        router.refresh();
      }, 1500);
    }
  }

  return (
    <>
      <AnimatePresence>
        {confirmationModal && (
          <ConfirmationModal
            setConfirmationModal={setConfirmationModal}
            handleUserDelete={handleUserDelete}
            id={user_id}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{shouldLoadingModalOpen && <DeleteActionModal modalMessage={modalMessage} />}</AnimatePresence>
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
