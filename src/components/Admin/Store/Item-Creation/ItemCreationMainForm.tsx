import { createItem } from "@/scripts/actions/admin-panel/createItem";
import CategorySection from "../Details/CategorySection";
import GenericInformationField from "../Details/GenericInformationField";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addLog } from "@/scripts/actions/admin-panel/addLog";
import toast from "react-hot-toast";
import { z } from "zod";

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
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const scheme = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(40, "Title must be at most 300 characters long"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long")
    .max(5000, "Description must be at most 5000 characters long"),
  brand: z
    .string()
    .min(2, "Brand must be at least 2 characters long")
    .max(40, "Brand must be at most 40 characters long"),
  price: z.number().min(0, "Price must be at least 0"),
  amount: z.number().min(0, "Amount must be at least 0"),
  discount: z.number().min(0, "Discount must be at least 0"),
});

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
  setModal,
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
      toast.error("Please upload an image");
      return;
    }

    const itemDetailsSchema = scheme.safeParse(itemDetails);

    if (!itemDetailsSchema.success) {
      toast.error(itemDetailsSchema.error.errors[0].message);
      return;
    }

    if (Object.values(extraDetails).some((value) => value === "")) {
      toast.error("Please fill all the details");
      return;
    }

    if (newCategoryModal && newCategory === "") {
      toast.error("Please submit a category");
      return;
    }

    setLoading(true);

    const res = await createItem(itemDetails, imageFormData);

    if (res.status === 200) {
      setLoading(false);
      toast.success("Item created successfully");
      addLog("Created Item", `Created Item - ${itemDetails.title}`);
      setModal(false);
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
      case "Pesticides":
        setExtraDetails({
          Type: "",
          "Active Ingredient": "",
          "Application method": "",
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
            <option>Pesticides</option>
          </select>

          <div className="mt-[2rem] flex w-full flex-col items-center gap-[1.5rem] text-[1.5rem]">
            {Object.entries(extraDetails).map((key, index) => (
              <div className="flex w-[40rem] items-center justify-between" key={index}>
                <p>{key[0]}</p>
                <input
                  type="text"
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
          placeholder="Defaults to 0 if empty"
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
          placeholder="Defaults to 0 if empty"
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
          placeholder="Defaults to 0 if empty"
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
