import { motion } from "framer-motion";
import Image from "next/image";
import GenericInformationField from "../Details/GenericInformationField";
import { useRef, useState } from "react";
import ReactLenis from "lenis/react";
import CategorySection from "../Details/CategorySection";
import { createItem } from "@/scripts/actions/admin-panel/createItem";

const parentModalAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemCreationModal({ setModal }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [imageFormData, setImageFormData] = useState<FormData>(new FormData());
  const [images, setImages] = useState<string[]>([]);
  const [newCategoryModal, setNewCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [imagesAsFiles, setImagesAsFiles] = useState<File[]>([]);
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
  });

  function onImageUploadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current?.files?.length === 0) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    setImageFormData(formData);

    const files = formData.getAll("new-item-image-upload") as File[];
    setImagesAsFiles((prev) => [...prev, ...files]);

    const arr = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...arr]);
  }

  async function onMainFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (images.length === 0) {
      return;
    }

    await createItem(itemDetails, imageFormData);
  }

  return (
    <motion.div
      variants={parentModalAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed left-0 z-[8] flex h-full w-screen items-center justify-center overflow-y-auto scroll-smooth bg-[rgba(0,0,0,0.5)] pl-[6rem] pt-[2rem]"
    >
      <div className="flex h-[60rem] flex-col items-center rounded-lg bg-white px-[1rem]  py-[1rem] shadow-md md:w-[60rem]">
        <ReactLenis options={{ prevent: true }}>
          <div className="mt-[2rem] flex h-[50rem] flex-col items-center overflow-y-auto">
            <form
              ref={formRef}
              onSubmit={onImageUploadSubmit}
              className="flex w-[25rem] flex-col items-center justify-center gap-[1rem] rounded-lg bg-gray-300 py-[3rem] md:w-[30rem] xs:w-[30rem]"
            >
              <label htmlFor="new-item-image-upload" className="flex cursor-pointer flex-col items-center gap-[1rem]">
                <Image
                  src="/images/icons/misc/upload.webp"
                  width={70}
                  height={70}
                  alt="upload-icon"
                  className="opacity-50"
                />
                <h4 className="text-[1.3rem] font-medium uppercase text-gray-400">Upload your images</h4>
              </label>

              <input
                type="file"
                id="new-item-image-upload"
                name="new-item-image-upload"
                ref={inputRef}
                multiple
                accept="image/webp, image/png, image/jpeg"
                className="hidden"
              />

              <input
                type="submit"
                value="Submit"
                className="mt-[1rem] cursor-pointer rounded-lg bg-gray-400 px-[2rem] py-[.5rem] text-[1.5rem]"
              />
            </form>
            <form id="mainForm" className="flex w-full flex-col gap-[1rem] pb-[1rem]" onSubmit={onMainFormSubmit}>
              <GenericInformationField title="Images">
                {images.length === 0 ? (
                  <p className="text-[1.4rem]">You haven't uploaded any images yet.</p>
                ) : (
                  images.map((image, index) => (
                    <a
                      key={index}
                      href={image}
                      className="ml-[.2rem] cursor-pointer text-[1.2rem] font-medium text-blue-500 underline underline-offset-4"
                      target="_blank"
                    >
                      {image}
                    </a>
                  ))
                )}
              </GenericInformationField>
              <GenericInformationField title="Title">
                <input
                  type="text"
                  placeholder="Write the title.."
                  className={`w-[20rem] rounded-md border-gray-300 bg-gray-200 px-[1.2rem] py-[1rem] text-[1.4rem] text-black shadow-md outline-none`}
                  onChange={(e) => setItemDetails((prev) => ({ ...prev, title: e.target.value }))}
                />
              </GenericInformationField>
              <GenericInformationField title="description">
                <textarea
                  name="description"
                  placeholder="Write the description.."
                  className={`h-[10rem] rounded-md border-gray-300 bg-gray-200 px-[1.2rem] py-[1rem] text-[1.4rem] text-black shadow-md outline-none`}
                  onChange={(e) => setItemDetails((prev) => ({ ...prev, description: e.target.value }))}
                />
              </GenericInformationField>
              <GenericInformationField title="Brand">
                <input
                  type="text"
                  name="brand"
                  placeholder="Write the brand..."
                  className={`w-[20rem] rounded-md border-gray-300 bg-gray-200 px-[1.2rem] py-[1rem] text-[1.4rem] text-black shadow-md outline-none `}
                  onChange={(e) => setItemDetails((prev) => ({ ...prev, brand: e.target.value }))}
                />
              </GenericInformationField>
              <GenericInformationField title="Category">
                <CategorySection
                  itemDetails={itemDetails}
                  setItemDetails={setItemDetails}
                  editMode={false}
                  newCategoryModal={newCategoryModal}
                  setNewCategoryModal={setNewCategoryModal}
                  newCategory={newCategory}
                  setNewCategory={setNewCategory}
                />
              </GenericInformationField>
              <GenericInformationField title="Price">
                <input
                  type="text"
                  name="price"
                  placeholder="Write the price..."
                  className={`w-[20rem] rounded-md border-gray-300 bg-gray-200 px-[1.2rem] py-[1rem] text-[1.4rem] text-black shadow-md outline-none `}
                  onChange={(e) =>
                    setItemDetails((prev) => ({
                      ...prev,
                      price: isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value),
                    }))
                  }
                />
              </GenericInformationField>
              <GenericInformationField title="Amount">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Write the quantity..."
                  className={`w-[20rem] rounded-md border-gray-300 bg-gray-200 px-[1.2rem] py-[1rem] text-[1.4rem] text-black shadow-md outline-none`}
                  onChange={(e) =>
                    setItemDetails((prev) => ({
                      ...prev,
                      amount: isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value),
                    }))
                  }
                />
              </GenericInformationField>
              <GenericInformationField title="Discount">
                <input
                  type="text"
                  name="discount"
                  placeholder="Write the discount..."
                  className={`w-[20rem] rounded-md border-gray-300 bg-gray-200 px-[1.2rem] py-[1rem] text-[1.4rem] text-black shadow-md outline-none `}
                  onChange={(e) =>
                    setItemDetails((prev) => ({
                      ...prev,
                      discount: isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value),
                    }))
                  }
                />
              </GenericInformationField>
            </form>
          </div>
          <div className="flex w-full items-center justify-center gap-[2rem] py-[1rem]">
            <input
              type="submit"
              value="Submit"
              form="mainForm"
              className="h-[4rem] w-[12rem] cursor-pointer rounded-lg bg-green-600 px-[1rem] py-[.5rem] text-[1.3rem] font-bold text-white"
            />

            <button
              type="button"
              onClick={() => setModal(false)}
              className="h-[4rem] w-[12rem] rounded-lg border-2  border-green-600 px-[1rem] py-[.5rem] text-[1.3rem] font-bold text-black "
            >
              Cancel
            </button>
          </div>
        </ReactLenis>
      </div>
    </motion.div>
  );
}
