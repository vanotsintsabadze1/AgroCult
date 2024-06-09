"use client";
import Image from "next/image";
import { useState } from "react";
import ConfirmationModal from "../Users/ConfirmationModal";
import { AnimatePresence } from "framer-motion";
import { deleteDbStoreItem } from "../../../scripts/actions/admin-panel/deleteDbStoreItem";
import { useRouter } from "next/navigation";
import DeleteActionModal from "../DeleteActionModal";
import { addLog } from "../../../scripts/actions/admin-panel/addLog";

interface Props {
  id: number;
}

export default function ItemActions({ id }: Props) {
  const router = useRouter();
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({ type: "", message: "" });

  async function deleteItemFromDB() {
    setDeleteModal(true);

    try {
      const res = await deleteDbStoreItem(id);

      if (res?.status === 200) {
        setModalMessage({ type: "success", message: "Item successfully deleted" });
        addLog("Delete", `Deleted Item - ${id}`);
      } else {
        setModalMessage({ type: "error", message: "Failed to delete the item" });
      }
    } catch (err) {
      console.error(err);
      setModalMessage({ type: "error", message: "Failed to delete the item" });
    }

    setTimeout(() => {
      setDeleteModal(false);
    }, 3000);
    setTimeout(() => {
      router.refresh();
    }, 2000);
  }

  return (
    <>
      <AnimatePresence>
        {confirmationModal && <ConfirmationModal setConfirmationModal={setConfirmationModal} cb={deleteItemFromDB} />}
      </AnimatePresence>

      <AnimatePresence>{deleteModal && <DeleteActionModal modalMessage={modalMessage} />}</AnimatePresence>

      {/* <AnimatePresence>{detailsModal &&}</AnimatePresence> */}

      <button
        onClick={() => setDetailsModal(true)}
        className="brighthness-100 grayscale invert duration-500 ease-in-out hover:scale-110 hover:brightness-75 hover:grayscale-0 hover:invert-0"
      >
        <Image
          src="/images/icons/admin-icons/actions-icons/see-details.webp"
          width={20}
          height={20}
          alt={`action-see-details-${id}`}
        />
      </button>
      <button
        onClick={() => setConfirmationModal(true)}
        className="brighthness-100 grayscale invert duration-500 ease-in-out hover:scale-110 hover:brightness-75 hover:grayscale-0 hover:invert-0"
      >
        <Image
          src="/images/icons/admin-icons/actions-icons/delete.webp"
          width={20}
          height={20}
          alt={`action-see-details-${id}`}
        />
      </button>
    </>
  );
}
