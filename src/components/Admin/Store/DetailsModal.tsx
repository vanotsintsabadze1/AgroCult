import { motion } from "framer-motion";
import { useState } from "react";
import { ReactLenis } from "lenis/react";
import StoreItemDetails from "./StoreItemDetails";
import { editItem } from "../../../scripts/actions/admin-panel/editItem";
import DeleteActionModal from "../DeleteActionModal";

const parentModalAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childModalAnimations = {
  hidden: { y: -200 },
  visible: { y: 0 },
};

interface Props {
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: ShopItem;
}

export default function ItemDetailsModal({ setEditModal, item }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [itemDetails, setItemDetails] = useState<ShopItem>(item);

  async function onSubmit() {
    const res = await editItem(itemDetails, item.id);

    if (res?.status === 200) {
      setEditMode(false);
    }
  }

  function enableEditMode() {
    setEditMode(true);
  }

  return (
    <>
      <motion.div
        variants={parentModalAnimations}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed left-0 top-0 z-[8] flex h-full w-screen justify-center overflow-y-auto scroll-smooth bg-[rgba(0,0,0,0.5)] pl-[6rem] pt-[2rem]"
      >
        <ReactLenis options={{ prevent: true }}>
          <motion.div
            variants={childModalAnimations}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="z-[8] flex h-[85rem] w-[35rem] flex-col items-center scroll-smooth rounded-lg bg-white pt-[2rem] shadow-md scrollbar-hide md:w-[60rem] lg:w-[70rem] xs:h-full xs:w-full"
          >
            <StoreItemDetails
              item={item}
              itemDetails={itemDetails}
              editMode={editMode}
              setItemDetails={setItemDetails}
            />
            <div className="flex w-full items-center justify-center gap-[2rem] py-[2rem]">
              <button
                onClick={editMode ? onSubmit : enableEditMode}
                className="h-[4rem] w-[12rem] rounded-lg bg-green-600 px-[1rem] py-[.5rem] font-bold text-white "
              >
                {editMode ? "Submit" : "Edit"}
              </button>
              <button
                onClick={() => setEditModal(false)}
                className="h-[4rem] w-[12rem] rounded-lg border-2  border-green-600 px-[1rem] py-[.5rem] font-bold text-black "
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </ReactLenis>
      </motion.div>
    </>
  );
}
