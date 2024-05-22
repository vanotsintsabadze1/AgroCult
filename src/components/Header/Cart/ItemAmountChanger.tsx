"use client";

import { CartItem } from "../../../types/types";
import Image from "next/image";

interface Props {
  cart: CartItem[] | [];
  item: CartItem;
  idx: number;
}

export default function ItemAmountChanger({ cart, idx }: Props) {
  function increaseItemAmount() {
    const updatedCart = Array.from(cart);
    updatedCart[idx].quantity += 1;
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  }

  function decreaseItemAmount() {
    let updatedCart = Array.from(cart);
    if (updatedCart[idx].quantity === 1) {
      updatedCart = updatedCart.filter((selectedProduct) => selectedProduct !== updatedCart[idx]);
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      updatedCart[idx].quantity -= 1;
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    window.dispatchEvent(new Event("storage"));
  }

  function deleteItem() {
    let updatedCart = Array.from(cart);
    updatedCart = updatedCart.filter((selectedProduct, idx) => selectedProduct !== updatedCart[idx]);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="absolute bottom-0 right-[3rem] flex justify-center gap-[.5rem]">
      <button className="relative rounded-[.5rem] bg-orange-500 p-[.2rem]" onClick={increaseItemAmount}>
        <Image src="/images/icons/misc/plus-icon.webp" width={20} height={20} alt="plus-icon" />
      </button>
      <button className="relative rounded-[.5rem] bg-orange-500 p-[.2rem]" onClick={decreaseItemAmount}>
        <Image src="/images/icons/misc/minus-icon.webp" width={20} height={20} alt="minus-icon" />
      </button>

      <button className="relative rounded-[.5rem] bg-orange-500 px-[.4rem] py-[.2rem]" onClick={deleteItem}>
        <Image src="/images/icons/misc/cart-item-delete-icon.webp" width={20} height={20} alt="delete-cart-item-icon" />
      </button>
    </div>
  );
}
