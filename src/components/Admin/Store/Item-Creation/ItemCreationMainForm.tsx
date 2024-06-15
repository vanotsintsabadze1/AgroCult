import { createItem } from "@/scripts/actions/admin-panel/createItem";
import CategorySection from "../Details/CategorySection";
import GenericInformationField from "../Details/GenericInformationField";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addLog } from "@/scripts/actions/admin-panel/addLog";

interface Props {
  images: string[];
  itemDetails: ShopItem;
  setItemDetails: React.Dispatch<React.SetStateAction<ShopItem>>;
  newCategoryModal: boolean;
  setNewCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  newCategory: string;
  setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  imageFormData: FormData;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemCreationMainForm({
  images,
  itemDetails,
  setItemDetails,
  newCategoryModal,
  setNewCategoryModal,
  newCategory,
  setNewCategory,
  imageFormData,
  setLoading,
}: Props) {
  const router = useRouter();
  const [select, setSelect] = useState<string>("Tractors");
  const [extraDetails, setExtraDetails] = useState<{ [key: string]: string }>({
    Engine: "",
    "Rated Eng. Power": "",
    "Max Engine Power": "",
    "Transmission Type": "",
    "Base Machine Weight": "",
  });

  async function onMainFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (images.length === 0) {
      return;
    }

    setLoading(true);

    const res = await createItem(itemDetails, imageFormData);

    if (res.status === 200) {
      setLoading(false);
      addLog("Created Item", `Created Item - ${itemDetails.title}`);
      router.refresh();
    }
  }

  useEffect(() => {
    switch (select) {
      case "Tractor":
        setExtraDetails({
          Engine: "",
          "Rated Eng. Power": "",
          "Max Engine Power": "",
          "Transmission Type": "",
          "Base Machine Weight": "",
        });
        break;
      case "Plowers":
        setExtraDetails({
          "Transport Length": "",
          "Transport Width": "",
          Height: "",
          "Working Width": "",
        });
        break;
      case "Accessories":
        setExtraDetails({
          Usage: "",
          Material: "",
          Weight: "",
        });
        break;
      case "Fertilizers":
        setExtraDetails({
          Type: "",
          "Nutrient Content": "",
          "Application method": "",
        });
        break;
      case "Tools & Supplies":
        setExtraDetails({
          "Tool Type": "",
          "Tool Material": "",
          "Tool Length": "",
          "Tool Width": "",
        });
        break;
      case "Livestock Equipment":
        setExtraDetails({
          Capacity: "",
          Material: "",
          Dimension: "",
          "Power Source": "",
        });
        break;
    }
  }, [select]);

  useEffect(() => {
    setItemDetails((prev) => ({ ...prev, extra_details: extraDetails }));
  }, [extraDetails]);

  return (
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
      <GenericInformationField title="Details">
        <div className="flex flex-col gap-[1rem]">
          <select
            value={select}
            className="w-[15rem] rounded-lg bg-gray-200 px-[2rem] py-[.5rem] text-[1.4rem] shadow-md"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option>Tractor</option>
            <option>Plowers</option>
            <option>Accessories</option>
            <option>Fertilizers</option>
            <option>Tools & Supplies</option>
            <option>Livestock Equipment</option>
          </select>

          <div className="mt-[2rem] flex w-full flex-col items-center gap-[1.5rem] text-[1.5rem]">
            {Object.entries(extraDetails).map((key, index) => (
              <div className="flex w-[40rem] items-center justify-between" key={index}>
                <p>{key[0]}</p>
                <input
                  value={key[1]}
                  placeholder="Write the details..."
                  onChange={(e) => setExtraDetails((prev) => ({ ...prev, [key[0]]: e.target.value }))}
                  className="rounded-lg bg-gray-200 px-[1rem] py-[.5rem] text-black shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
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
      <GenericInformationField title="Purchaseable">
        <select
          className="w-[15rem] rounded-lg bg-gray-200 px-[2rem] py-[.5rem] text-[1.4rem] shadow-md"
          onChange={(e) => setItemDetails((prev) => ({ ...prev, buyable: e.target.value }))}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
      </GenericInformationField>
    </form>
  );
}
