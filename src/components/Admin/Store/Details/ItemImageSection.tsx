import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  imageIndex: number;
  imageEditModal: boolean;
  setImageEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: ShopItem;
  editMode: boolean;
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
}: Props) {
  function nextSlide() {
    imageIndex !== item.images.length - 1 ? setImageIndex((prev) => prev + 1) : setImageIndex(0);
  }

  function previousSlide() {
    imageIndex !== 0 ? setImageIndex((prev) => prev - 1) : setImageIndex(item.images.length - 1);
  }

  function enableImagesEdit() {
    if (!editMode) {
      return;
    }

    setImageEditModal(!imageEditModal);
  }

  return (
    <div className="relative h-[20rem] w-[100%] flex-shrink-0 md:h-[35rem] md:w-[50rem] xs:h-[15rem] xs:w-full">
      <Image
        src={item.images[imageIndex]}
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
            <div className="flex w-full items-center justify-center gap-[.5rem] py-[.5rem]">
              <p className="mt-[.2rem] text-[1.2rem] font-medium uppercase text-black">See Images</p>
            </div>
            <div className="flex w-full items-center justify-center gap-[.5rem] py-[.5rem]">
              <Image
                src="/images/icons/admin-icons/actions-icons/delete-red.webp"
                className="something"
                width={15}
                height={15}
                alt="delete-icon"
              />
              <p className="mt-[.2rem] text-[1.2rem] font-medium uppercase text-red-500">Delete</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 h-[70%] w-[3rem] translate-y-[-50%] bg-[rgba(0,0,0,0.3)] text-[3rem] font-medium text-white "
      >
        {">"}
      </button>
      <button
        onClick={previousSlide}
        className="absolute left-0 top-1/2 h-[70%] w-[3rem] translate-y-[-50%] bg-[rgba(0,0,0,0.3)] text-[3rem] font-medium text-white "
      >
        {"<"}
      </button>
      <div className="absolute bottom-[1rem] left-0 flex w-full items-center justify-center gap-[2rem] py-[1rem]">
        {item.images.map((_, idx) => (
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
  );
}
