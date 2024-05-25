"use client";

import Image from "next/image";

interface Props {
  cart: CartItem[] | [];
  item: CartItem;
  idx: number;
}

//  @ts-ignore
export default function ItemAmountChanger({ cart, idx }: Props) {
  function increaseItemAmount() {
    //
  }

  function decreaseItemAmount() {
    //
  }

  function deleteItem() {
    //
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
