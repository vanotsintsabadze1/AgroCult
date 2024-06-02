"use client";

import Image from "next/image";
import { useScopedI18n } from "../../locales/client";
import { useRouter } from "next/navigation";
import { addToCart } from "../../scripts/actions/cart/addToCart";
import { useUser } from "@auth0/nextjs-auth0/client";

// @ts-ignore
function ItemCard({ images, id, title, description, price }: ShopItem) {
  const word = useScopedI18n("store");
  const router = useRouter();
  const { user } = useUser();

  function redirectOnClick() {
    router.push(`/store/${id}`);
  }

  function onAddToCart() {
    if (user) {
      addToCart(user.sub as string, id);
    }
  }

  return (
    <div className="shadow-soft relative flex h-[42rem] w-[30rem] flex-shrink-0 flex-col items-center rounded-[1rem] bg-white pb-[3rem] pt-[1.5rem]">
      <div className="w-full p-[0rem_2rem]">
        <div className="relative flex h-[18rem] w-full flex-col items-center ">
          <Image
            src="/images/logos/main-logo-colored.webp"
            className="rounded-[1rem]"
            fill
            alt={`${title}-image`}
          />
        </div>
      </div>
      <div className="flex w-full flex-col p-[1rem_2rem]">
        <p className="text-[1.7rem] font-bold">${price}</p>
        <p className="text-[1.1rem] font-medium">
          {word("startPayingPhrase")} {""} $
          <span className="font-semibold tracking-wider text-orange-600">
            {Math.round(price / 24)}
          </span>
        </p>
        <p className="mt-[1rem] text-[1.3rem] font-semibold">{title}</p>
        <p className="mt-[.2rem] line-clamp-2 text-[1.1rem] font-medium">
          {description}
        </p>
      </div>
      <div className="absolute bottom-[4rem] left-1/2 flex w-full translate-x-[-50%] justify-center">
        <button
          className="h-[3.5rem] w-[14rem] rounded-bl-[.5rem] rounded-tl-[.5rem]  bg-black text-[1.3rem] font-bold text-white"
          onClick={redirectOnClick}
        >
          {word("buy")}
        </button>
        <button
          onClick={() => {
            onAddToCart();
          }}
          className="flex h-[3.5rem] w-[4rem] items-center justify-center rounded-br-[.5rem] rounded-tr-[.5rem] bg-gray-300"
        >
          <Image
            src="/images/icons/header-icons/add-to-cart.webp"
            width={20}
            height={20}
            alt="add-to-cart"
          />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
