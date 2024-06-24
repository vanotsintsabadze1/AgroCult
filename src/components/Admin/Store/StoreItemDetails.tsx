import { useState } from "react";
import ItemImageSection from "./Details/ItemImageSection";
import GenericInformationField from "./Details/GenericInformationField";
import CategorySection from "./Details/CategorySection";
import { useScopedI18n } from "@/locales/client";

interface Props {
  editMode: boolean;
  item: ShopItem;
  itemDetails: ShopItem;
  setItemDetails: React.Dispatch<React.SetStateAction<ShopItem>>;
  setDeletedImagesArr: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function StoreItemDetails({ editMode, item, itemDetails, setItemDetails, setDeletedImagesArr }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [newCategoryModal, setNewCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [imageEditModal, setImageEditModal] = useState(false);
  const word = useScopedI18n("admin.store.product");

  function editCategory(e: React.ChangeEvent<HTMLInputElement>, key: string[]) {
    setItemDetails((prev) => ({
      ...prev,
      extra_details: { ...itemDetails.extra_details, [key[0] as string]: e.target.value },
    }));
  }

  return (
    <>
      <div className="relative flex h-[45rem] w-full flex-col items-center overflow-y-scroll px-[1rem] pb-[1rem] text-[1.3rem] scrollbar-hide md:h-[65rem] xs:min-w-[32rem] xs:max-w-[35rem]">
        <ItemImageSection
          item={item}
          setImageEditModal={setImageEditModal}
          setImageIndex={setImageIndex}
          imageIndex={imageIndex}
          imageEditModal={imageEditModal}
          editMode={editMode}
          itemDetails={itemDetails}
          setItemDetails={setItemDetails}
          setDeletedImagesArr={setDeletedImagesArr}
        />
        <div className="mt-[1rem] flex w-full flex-col items-center gap-[2rem] px-[.5rem]">
          <GenericInformationField title={word("title")}>
            <input
              readOnly={!editMode}
              type="text"
              defaultValue={itemDetails.title}
              className={`rounded-md border-gray-300 bg-gray-200 ${editMode ? "text-black" : "text-gray-400"} px-[1.2rem] py-[1rem] shadow-md`}
              onChange={(e) => setItemDetails((prev) => ({ ...prev, title: e.target.value }))}
            />
          </GenericInformationField>
          <GenericInformationField title={word("brand")}>
            <input
              readOnly={!editMode}
              type="text"
              defaultValue={itemDetails.brand}
              onChange={(e) => setItemDetails((prev) => ({ ...prev, brand: e.target.value }))}
              className={`rounded-md border-gray-300 bg-gray-200 ${editMode ? "text-black" : "text-gray-400"} px-[1.2rem] py-[1rem] shadow-md`}
            />
          </GenericInformationField>
          <GenericInformationField title={word("category")}>
            <CategorySection
              itemDetails={itemDetails}
              setNewCategory={setNewCategory}
              setNewCategoryModal={setNewCategoryModal}
              editMode={editMode}
              newCategoryModal={newCategoryModal}
              setItemDetails={setItemDetails}
              newCategory={newCategory}
            />
          </GenericInformationField>
          <GenericInformationField title={word("description")}>
            <textarea
              readOnly={!editMode}
              defaultValue={itemDetails.description}
              onChange={(e) => setItemDetails((prev) => ({ ...prev, description: e.target.value }))}
              className={`rounded-md border-gray-300 bg-gray-200 ${editMode ? "text-black" : "text-gray-400"} h-[10rem] max-w-full overflow-y-auto px-[1.2rem] py-[1.5rem] shadow-md`}
            />
          </GenericInformationField>
          <GenericInformationField title={word("details")}>
            {Object.entries(itemDetails.extra_details).map((key, val) => (
              <div key={val} className="mt-[1rem] flex w-full items-center justify-between gap-[.5rem]">
                <p className="w-[10rem] text-[1.3rem]">{key[0]}</p>
                <input
                  readOnly={!editMode}
                  defaultValue={key[1]}
                  onChange={(e) => editCategory(e, key)}
                  className={`rounded-md border-gray-300 bg-gray-200 xs:w-[10rem] ${editMode ? "text-black" : "text-gray-400"} overflow-y-auto px-[1.2rem] py-[.5rem] shadow-md`}
                />
              </div>
            ))}
          </GenericInformationField>
          <GenericInformationField title={word("amount")}>
            <input
              readOnly={!editMode}
              type="text"
              defaultValue={itemDetails.amount}
              onChange={(e) =>
                setItemDetails((prev) => ({
                  ...prev,
                  amount: isNaN(parseInt(e.target.value)) ? item.amount : parseInt(e.target.value),
                }))
              }
              className={`rounded-md border-gray-300 bg-gray-200 ${editMode ? "text-black" : "text-gray-400"} px-[1.2rem] py-[1rem] shadow-md`}
            />
          </GenericInformationField>
          <GenericInformationField title={word("discount")}>
            <input
              readOnly={!editMode}
              type="text"
              defaultValue={itemDetails.discount}
              onChange={(e) =>
                setItemDetails((prev) => ({
                  ...prev,
                  discount: isNaN(parseInt(e.target.value)) ? item.discount : parseInt(e.target.value),
                }))
              }
              className={`rounded-md border-gray-300 bg-gray-200 ${editMode ? "text-black" : "text-gray-400"} px-[1.2rem] py-[1rem] shadow-md`}
            />
          </GenericInformationField>
          <GenericInformationField title={word("price")}>
            <input
              readOnly={!editMode}
              type="text"
              defaultValue={`${itemDetails.price}`}
              onChange={(e) =>
                setItemDetails((prev) => ({
                  ...prev,
                  price: isNaN(parseInt(e.target.value)) ? item.price : parseInt(e.target.value),
                }))
              }
              className={`rounded-md border-gray-300 bg-gray-200 ${editMode ? "text-black" : "text-gray-400"} px-[1.2rem] py-[1rem] shadow-md`}
            />
          </GenericInformationField>
        </div>
      </div>
    </>
  );
}
