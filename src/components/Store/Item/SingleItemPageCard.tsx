import ItemExtraDetails from "./ItemExtraDetails";
import PurchaseButton from "./PurchaseButton";
import { ImageSlider } from "./ImageSlider";
import ServiceDetails from "./ServiceDetails";
import { getScopedI18n } from "@/locales/server";

interface Props {
  product: ShopItem;
}

export default async function SingleItemPageCard({ product }: Props) {
  const word = await getScopedI18n("store");

  return (
    <div className="flex w-[40rem] flex-col items-center gap-[2rem] rounded-[2rem] bg-white p-[2rem] shadow-md lg:w-auto lg:flex-row lg:gap-[3rem] lg:pr-[4rem] xs:w-full dark:bg-[#020f15] dark:text-white dark:shadow-2xl">
      <div className="flex flex-col items-center gap-[2rem] lg:h-full">
        <ImageSlider images={product.images} />
        <ServiceDetails />
      </div>

      <div className="flex w-full flex-grow flex-col items-center lg:w-auto lg:items-start">
        <div className="flex w-full flex-col gap-[.5rem] lg:w-auto">
          <h2 className="break-words text-[2.5rem] font-bold lg:w-[40rem]">{product.title}</h2>
          {product.price === 0 && <p className="text-[1.3rem] font-medium">* {word("product.cantBuy")}</p>}
          <ItemExtraDetails
            brand={product.brand}
            discount={product.discount}
            category={product.category}
            description={product.description}
            extra_details={product.extra_details}
          />
        </div>
        <PurchaseButton product={product} />
      </div>
    </div>
  );
}
