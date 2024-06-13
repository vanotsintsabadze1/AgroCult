import Image from "next/image";

interface Props {
  itemDetails: ShopItem;
  newCategoryModal: boolean;
  setNewCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  editMode?: boolean;
  newCategory: string;
  setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  setItemDetails: React.Dispatch<React.SetStateAction<ShopItem>>;
  setErrorModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CategorySection({
  itemDetails,
  newCategoryModal,
  setNewCategoryModal,
  editMode,
  setNewCategory,
  newCategory,
  setItemDetails,
  setErrorModal,
}: Props) {
  function removeCategory(category: string) {
    if (typeof setErrorModal === "function") {
      if (!editMode) {
        setErrorModal(true);

        setTimeout(() => {
          setErrorModal(false);
        }, 1500);
        return;
      }
    }

    setItemDetails((prev) => ({
      ...prev,
      category: itemDetails.category.filter((item) => item !== category),
    }));
  }

  function addNewCategory() {
    if (typeof setErrorModal === "function") {
      if (!editMode) {
        setErrorModal(true);

        setTimeout(() => {
          setErrorModal(false);
        }, 1500);
        return;
      }
    }

    if (newCategory === "") {
      return;
    } else {
      setItemDetails((prev) => ({ ...prev, category: [...prev.category, newCategory] }));
      setNewCategoryModal(false);
      setNewCategory("");
    }
  }

  function enableNewCategoryModal() {
    if (typeof setErrorModal === "function") {
      if (!editMode) {
        setErrorModal(true);

        setTimeout(() => {
          setErrorModal(false);
        }, 1500);
        return;
      }
    }

    setNewCategoryModal(true);
  }
  return (
    <div className="flex w-full items-center gap-[1rem]">
      {itemDetails.category.map((category) => (
        <div
          key={category}
          className="relative rounded-lg bg-gray-200 px-[1.5rem] py-[.8rem] text-[1.3rem] font-medium text-gray-500"
        >
          {category}
          <button
            className="absolute right-[.5rem] top-[.1rem] text-[1rem] font-bold"
            onClick={() => removeCategory(category)}
            type="button"
          >
            X
          </button>
        </div>
      ))}
      {newCategoryModal && (
        <div className="relative flex items-center rounded-lg bg-gray-200 px-[1.5rem] py-[.8rem] text-[1.3rem] font-medium text-gray-500">
          <input
            placeholder="Category"
            onChange={(e) => setNewCategory(e.target.value)}
            className="bg-transparent outline-none"
          />
          <button onClick={addNewCategory} className="" type="button">
            <Image src="/images/icons/misc/apply.webp" width={15} height={15} alt="apply-icon" />
          </button>
        </div>
      )}
      <button
        type="button"
        className="rounded-lg px-[2rem] py-[.8rem] font-sans text-[2rem] font-semibold text-gray-800"
        onClick={enableNewCategoryModal}
      >
        +
      </button>
    </div>
  );
}
