import { motion } from "framer-motion";
import { useState } from "react";
import ReactLenis from "lenis/react";
import ImageUploadForm from "./ImageUploadForm";
import ItemCreationMainForm from "./ItemCreationMainForm";
import { createPortal } from "react-dom";

const parentModalAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemCreationModal({ setModal }: Props) {
  const [imageFormData, setImageFormData] = useState<FormData>(new FormData());
  const [images, setImages] = useState<string[]>([]);
  const [newCategoryModal, setNewCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [itemDetails, setItemDetails] = useState<ShopItem>({
    id: 0,
    title: "",
    description: "",
    price: 0,
    images: [],
    brand: "",
    extra_details: {},
    category: [],
    discount: 0,
    amount: 0,
    buyable: "yes",
  });

  return createPortal(
    <motion.div
      variants={parentModalAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed left-0 z-[40] flex h-full w-screen items-center justify-center scroll-smooth bg-[rgba(0,0,0,0.5)] px-[2rem] pt-[2rem]"
    >
      <div className="relative flex h-[60rem] flex-col items-center rounded-lg bg-white px-[1rem] py-[1rem] shadow-md sm:min-w-[40rem] sm:max-w-[60rem] md:w-[60rem] xs:w-full">
        <div className="mt-[2rem] flex h-[50rem] w-full flex-col items-center overflow-y-auto scrollbar-hide sm:min-w-[40rem] sm:max-w-[60rem]">
          <ImageUploadForm setImageFormData={setImageFormData} setImages={setImages} />
          <ReactLenis options={{ prevent: true }} className="sm:min-w-[40rem] sm:max-w-[60rem] md:w-full xs:w-full">
            <ItemCreationMainForm
              images={images}
              itemDetails={itemDetails}
              setItemDetails={setItemDetails}
              newCategoryModal={newCategoryModal}
              setNewCategoryModal={setNewCategoryModal}
              newCategory={newCategory}
              setNewCategory={setNewCategory}
              imageFormData={imageFormData}
              setLoading={setLoading}
              setModal={setModal}
            />
          </ReactLenis>
        </div>
        <div className="flex w-full items-center justify-center gap-[2rem] py-[1rem]">
          <input
            type="submit"
            value="Submit"
            form="mainForm"
            className="h-[4rem] w-[12rem] cursor-pointer rounded-lg bg-green-600 px-[1rem] py-[.5rem] text-[1.3rem] font-bold text-white"
          />

          {loading && (
            <div className="absolute right-[2rem] top-[2rem] z-[40] flex items-center justify-center gap-[1rem] rounded-lg bg-white px-[2rem] py-[1rem] shadow-md  ">
              <p className="text-[1.4rem]">Uploading, please don't close the modal</p>
              <div className="h-[2rem] w-[2rem] animate-spin rounded-[50%] border-t-2 border-t-gray-400"></div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setModal(false)}
            className="h-[4rem] w-[12rem] rounded-lg border-2  border-green-600 px-[1rem] py-[.5rem] text-[1.3rem] font-bold text-black "
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
