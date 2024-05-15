"use client";

import Image from "next/image";
import { ShopItem } from "../../types/types";
import { useScopedI18n } from "../../locales/client";
import { useRouter } from "next/navigation";

interface CartItem extends ShopItem {
  quantity: number;
}

function ItemCard({ images, id, title, description, price }: ShopItem) {
  const word = useScopedI18n("store");
  const router = useRouter();

  function redirectOnClick() {
    router.push(`/store/${id}`);
  }

  function addToCart() {
    const cart = window.localStorage.getItem("cart");
    let found = false;

    if (cart === null || cart === undefined) {
      window.localStorage.setItem("cart", JSON.stringify([{ id, title, description, images, price, quantity: 1 }]));
    }

    if (cart !== null && cart !== undefined) {
      const parsedCart: CartItem[] = JSON.parse(cart);

      for (let item of parsedCart) {
        if (item.id === id) {
          item.quantity += 1;
          window.localStorage.setItem("cart", JSON.stringify(parsedCart));
          found = true;
        }
      }

      if (!found) {
        localStorage.setItem("cart", JSON.stringify([...parsedCart, { id, title, description, images, price, quantity: 1 }]));
      }
    }

    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="w-[30rem] bg-white flex-shrink-0 rounded-[1rem] pt-[1.5rem] flex flex-col h-[42rem] items-center pb-[3rem] relative shadow-soft">
      <div className="w-full p-[0rem_2rem]">
        <div className="w-full h-[18rem] relative flex flex-col items-center ">
          <Image src={images[0]} className="rounded-[1rem]" fill alt={`${title}-image`} />
        </div>
      </div>
      <div className="w-full flex flex-col p-[1rem_2rem]">
        <p className="font-bold text-[1.7rem]">${price}</p>
        <p className="font-medium text-[1.1rem]">
          {word("startPayingPhrase")} {""} $<span className="text-orange-600 tracking-wider font-semibold">{Math.round(price / 24)}</span>
        </p>
        <p className="font-semibold text-[1.3rem] mt-[1rem]">{title}</p>
        <p className="font-medium text-[1.1rem] mt-[.2rem] line-clamp-2">{description}</p>
      </div>
      <div className="w-full flex justify-center left-1/2 translate-x-[-50%] absolute bottom-[4rem]">
        <button
          className="w-[14rem] h-[3.5rem] rounded-tl-[.5rem] rounded-bl-[.5rem]  bg-black text-white font-bold"
          onClick={redirectOnClick}
        >
          {word("buy")}
        </button>
        <button
          onClick={addToCart}
          className="w-[4rem] h-[3.5rem] bg-gray-300 rounded-tr-[.5rem] rounded-br-[.5rem] flex justify-center items-center"
        >
          <Image src="/images/icons/header-icons/add-to-cart.webp" width={20} height={20} alt="add-to-cart" />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
