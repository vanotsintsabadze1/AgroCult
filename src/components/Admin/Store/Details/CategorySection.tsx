import Image from "next/image";

interface Props {
  itemDetails: ShopItem;
  newCategoryModal: boolean;
  setNewCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  newCategory: string;
  setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  setItemDetails: React.Dispatch<React.SetStateAction<ShopItem>>;
}

export default function CategorySection({
  itemDetails,
  newCategoryModal,
  setNewCategoryModal,
  editMode,
  setNewCategory,
  newCategory,
  setItemDetails,
}: Props) {
  function removeCategory(category: string) {
    if (!editMode) {
      return;
    }

    setItemDetails((prev) => ({
      ...prev,
      category: itemDetails.category.filter((item) => item !== category),
    }));
  }

  function addNewCategory() {
    if (!editMode) {
      return;
    }

    newCategory !== "" ? setItemDetails((prev) => ({ ...prev, category: [...prev.category, newCategory] })) : null;

    setNewCategoryModal(false);
    setNewCategory("");
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
          <button onClick={addNewCategory} className="">
            <Image src="/images/icons/misc/apply.webp" width={15} height={15} alt="apply-icon" />
          </button>
        </div>
      )}
      <button
        className="rounded-lg px-[2rem] py-[.8rem] font-sans text-[2rem] font-semibold text-gray-800"
        onClick={() => (editMode ? setNewCategoryModal(true) : null)}
      >
        +
      </button>
    </div>
  );
}
