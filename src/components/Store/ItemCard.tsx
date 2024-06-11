"use client";

import Image from "next/image";
import { useScopedI18n } from "../../locales/client";
// import { useRouter } from "next/navigation";
import { addToCart } from "../../scripts/actions/cart/addToCart";
import { useUser } from "@auth0/nextjs-auth0/client";

interface Props extends ShopItem {
  layout: string;
}

// @ts-ignore
function ItemCard({ images, id, title, description, price, layout }: Props) {
  const multiColView =
    "flex max-w-[30rem] flex-col items-center rounded-lg bg-white px-[2rem] pb-[3rem] py-[2rem] shadow-md ";
  const singleColView =
    "flex w-[32rem] flex-col items-center rounded-lg bg-white px-[2rem] pb-[3rem] pt-[2rem] shadow-md lg:min-w-[60rem] xl:min-w-[80rem] lg:flex-row lg:gap-x-[2rem]";
  const word = useScopedI18n("store");
  // const router = useRouter();
  const { user } = useUser();

  // function redirectOnClick() {
  //   router.push(`/store/${id}`);
  // }

  function onAddToCart() {
    if (user) {
      if (price !== 0) {
        addToCart(user.sub as string, id);
      }
    }
  }

  return (
    <div className={layout === "multi" ? multiColView : singleColView}>
      <div className="grid- flex w-full items-center justify-center lg:w-auto lg:flex-shrink-0">
        <div className="relative h-[20rem] w-[25rem] lg:h-[18rem] lg:w-[25rem]">
          <Image src={images[0]} alt={title} fill className="rounded-md shadow-md" />
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-[3rem]">
        <div className="flex w-full flex-grow flex-col gap-[.5rem] lg:w-auto lg:flex-shrink-0">
          <h4 className="mt-[1rem] text-[1.8rem] font-bold">{title}</h4>
          <p className="line-clamp-2 text-[1.3rem] font-medium">{description}</p>
          <p className="line-clamp-2 text-[1.5rem] font-medium">
            <b>Price</b>: {price === 0 ? "Negotiable" : `$${price}`}
          </p>
        </div>
        <div className="mt-[2rem] flex w-full justify-evenly">
          <button
            className={`min-w-[17rem] rounded-lg ${price === 0 ? "bg-green-800/50" : "bg-green-700"} py-[.7rem] text-[1.4rem] font-bold text-white`}
          >
            {price === 0 ? "Contact Sales Team" : word("buy")}
          </button>
          <button
            className={`rounded-md bg-gray-200 p-[.5rem] px-[1rem] shadow-sm ${price === 0 ? "cursor-not-allowed opacity-30" : ""}`}
            onClick={onAddToCart}
          >
            <Image
              width={25}
              height={25}
              src="/images/icons/header-icons/add-to-cart.webp"
              alt={`add-to-cart-icon-${id}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
