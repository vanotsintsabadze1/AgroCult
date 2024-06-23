"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { deleteDbStoreItem } from "../../../scripts/actions/admin-panel/deleteDbStoreItem";
import { useRouter } from "next/navigation";
import { addLog } from "../../../scripts/actions/admin-panel/addLog";
import ConfirmationModal from "../Users/ConfirmationModal";
import ItemDetailsModal from "./ItemDetailsModal";
import Image from "next/image";
import toast from "react-hot-toast";

interface Props {
  id: number;
  item: ShopItem;
}

export default function ItemActions({ id, item }: Props) {
  const router = useRouter();
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  async function deleteItemFromDB() {
    try {
      const res = await deleteDbStoreItem(id);

      if (res?.status === 200) {
        toast.success("Item deleted successfully!");
        addLog("Delete", `Deleted Item - ${id}`);
      } else {
        toast.error("An error occurred while deleting the item!");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while deleting the item!");
    }

    router.refresh();
  }

  return (
    <>
      <AnimatePresence>
        {confirmationModal && <ConfirmationModal setConfirmationModal={setConfirmationModal} cb={deleteItemFromDB} />}
      </AnimatePresence>
      
      <AnimatePresence>
        {detailsModal && <ItemDetailsModal item={item} setEditModal={setDetailsModal} />}
      </AnimatePresence>

      <button
        onClick={() => setDetailsModal(true)}
        className="brighthness-100 grayscale invert duration-500 ease-in-out hover:scale-110 hover:brightness-75 hover:grayscale-0 hover:invert-0"
      >
        <div>
          <Image
            src="/images/icons/admin-icons/actions-icons/see-details.webp"
            width={20}
            height={20}
            alt={`action-see-details-${id}`}
          />
        </div>
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
