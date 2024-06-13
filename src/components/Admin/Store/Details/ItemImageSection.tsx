import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { createImageBlob } from "../../../../scripts/actions/admin-panel/createImageBlobs";
import { deleteImageBlob } from "../../../../scripts/actions/admin-panel/deleteImageBlob";

interface Props {
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  imageIndex: number;
  imageEditModal: boolean;
  setImageEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: ShopItem;
  editMode: boolean;
  setItemDetails: React.Dispatch<React.SetStateAction<ShopItem>>;
  itemDetails: ShopItem;
  setErrorModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeletedImagesArr: React.Dispatch<React.SetStateAction<string[]>>;
}

const imageEditModalAnimations = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 20 },
};

export default function ItemImageSection({
  item,
  editMode,
  setImageIndex,
  imageIndex,
  setImageEditModal,
  imageEditModal,
  setItemDetails,
  itemDetails,
  setErrorModal,
  setDeletedImagesArr,
}: Props) {
  const [imageAddModal, setImageAddModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function nextSlide() {
    imageIndex !== item.images.length - 1 ? setImageIndex((prev) => prev + 1) : setImageIndex(0);
  }

  function previousSlide() {
    imageIndex !== 0 ? setImageIndex((prev) => prev - 1) : setImageIndex(item.images.length - 1);
  }

  function enableImagesEdit() {
    if (!editMode) {
      setErrorModal(true);

      setTimeout(() => {
        setErrorModal(false);
      }, 1500);
      return;
    }

    setImageEditModal(!imageEditModal);
  }

  function enableImageAddModal() {
    setImageAddModal(true);
    setImageEditModal(false);
  }

  function onImageDelete() {
    setItemDetails((prev) => ({
      ...prev,
      images: itemDetails.images.filter((image) => image !== itemDetails.images[imageIndex]),
    }));
    setDeletedImagesArr((prev) => [...prev, itemDetails.images[imageIndex]]);
    setImageIndex(0);
    setImageEditModal(false);
  }

  async function onNewImageSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputRef.current?.files) {
      return;
    }

    const formData = new FormData(e.currentTarget);

    await createImageBlob(formData, itemDetails.images, itemDetails.id);

    console.log(itemDetails);
  }

  return (
    <>
      <div className="relative h-[20rem] w-[100%] flex-shrink-0 md:h-[35rem] md:w-[50rem] xs:h-[15rem] xs:w-full">
        {imageAddModal && (
          <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
            <form
              ref={formRef}
              onSubmit={onNewImageSubmit}
              className="relative z-[40] flex h-[23rem] w-[30rem] items-center justify-center rounded-lg bg-gray-100 shadow-2xl"
            >
              <button
                className="absolute right-[1rem] top-[.5rem] text-[1.4rem] font-medium text-gray-400"
                onClick={() => setImageAddModal(false)}
              >
                X
              </button>
              <label
                htmlFor="something"
                className="flex cursor-pointer flex-col items-center gap-[1rem] text-[1.3rem] font-semibold uppercase text-gray-400"
              >
                <Image
                  src="/images/icons/misc/upload.webp"
                  width={80}
                  height={80}
                  alt="upload-icon.webp"
                  className="opacity-30"
                />
                Add a new image
              </label>
              <input
                type="file"
                id="something"
                className="hidden"
                multiple
                accept="image/webp, image/png, image/jpeg"
                ref={inputRef}
                name="image-gallery"
              />
              <button className="absolute bottom-[1.2rem] left-1/2 z-[12] -translate-x-1/2 rounded-lg bg-gray-600 px-[1.5rem] py-[.6rem] text-[1.2rem] font-semibold uppercase text-white">
                Submit
              </button>
            </form>
          </div>
        )}
        <Image
          src={itemDetails.images[imageIndex]}
          alt={`item-image-${item.id}`}
          fill
          className="h-auto w-auto transform rounded-[2rem] object-contain"
        />
        <button
          onClick={enableImagesEdit}
          className="absolute right-[1rem] top-[2rem] z-[10] h-[2rem] px-[1rem] text-[1.2rem] text-white grayscale"
        >
          <Image src="/images/icons/misc/threedots.webp" width={20} height={10} alt="threedots.webp" />
        </button>
        <AnimatePresence>
          {imageEditModal && (
            <motion.div
              variants={imageEditModalAnimations}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute right-[.5rem] top-[2rem] z-[20] flex w-[12rem] flex-col rounded-lg bg-white px-[1rem] py-[.5rem] shadow-md"
            >
              <button
                onClick={enableImageAddModal}
                className="flex w-full items-center justify-center gap-[.5rem] py-[.5rem]"
              >
                <p className="mt-[.2rem] text-[1.2rem] font-medium uppercase text-black">+ Add Image</p>
              </button>
              <button
                onClick={onImageDelete}
                className="flex w-full items-center justify-center gap-[.5rem] py-[.5rem]"
              >
                <Image
                  src="/images/icons/admin-icons/actions-icons/delete-red.webp"
                  className="something"
                  width={15}
                  height={15}
                  alt="delete-icon"
                />
                <p className="mt-[.2rem] text-[1.2rem] font-medium uppercase text-red-500">Delete</p>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute bottom-[1rem] left-0 flex w-full items-center justify-center gap-[2rem] py-[1rem]">
          {itemDetails.images.map((_, idx) => (
            <input
              key={idx}
              type="radio"
              className={`h-[1rem] w-[1rem] appearance-none rounded-[50%] border-transparent outline-none ${idx === imageIndex ? "bg-green-600" : "bg-white"} shadow-md duration-500 ease-in-out`}
              checked={idx === imageIndex}
              onChange={() => setImageIndex(idx)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
