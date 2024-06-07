"use client";

import { deleteUser } from "../../../scripts/actions/admin-panel/deleteUser";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EditUserModal from "./EditUserModal";
import DeleteActionModal from "../DeleteActionModal";
import ConfirmationModal from "./ConfirmationModal";

interface ModalMessage {
  type: string;
  message: string;
}

interface Props {
  user_id: string;
  name: string;
  email: string;
  role: string;
}

export default function UserActions({ user_id, name, email, role }: Props) {
  const session = useUser();
  const router = useRouter();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [shouldLoadingModalOpen, setShouldLoadingModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<ModalMessage>({ type: "loading", message: "" });
  const [confirmationModal, setConfirmationModal] = useState(false);

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
            setUserDetails={setUserDetails}
            setEditModalOpen={setEditModalOpen}
          />
        )}
      </AnimatePresence>
      <button className="rounded-lg bg-green-600 px-[1rem] py-[.5rem] text-white" onClick={handleUserEdit}>
        Edit
      </button>
      <button className="rounded-lg bg-red-600 px-[1rem] py-[.5rem] text-white" onClick={() => onDeleteButtonClick()}>
        Delete
      </button>
    </>
  );
}
