import Image from "next/image";
import { addToCart } from "../../../scripts/actions/cart/addToCart";
import { useUser } from "@auth0/nextjs-auth0/client";
import { decreaseItemAmount } from "../../../scripts/actions/cart/decreaseItemAmount";
import { deleteItem } from "../../../scripts/actions/cart/deleteItem";

interface Props {
  item: CartItem;
}

export default function ItemAmountChanger({ item }: Props) {
  const { user } = useUser();

  function increaseAmount() {
    if (user) {
      addToCart(user.sub as string, item.product_id);
    }
  }

  function decreaseAmount() {
    if (user) {
      decreaseItemAmount(user?.sub as string, item.product_id);
    }
  }

  function deleteItemFromCart() {
    if (user) {
      deleteItem(user?.sub as string, item.product_id);
    }
  }

  return (
    <div className="absolute bottom-0 right-[3rem] flex justify-center gap-[.5rem]">
      <button className="relative rounded-[.5rem] bg-orange-500 p-[.2rem]" onClick={increaseAmount}>
        <Image src="/images/icons/misc/plus-icon.webp" width={20} height={20} alt="plus-icon" />
      </button>
      <button className="relative rounded-[.5rem] bg-orange-500 p-[.2rem]" onClick={decreaseAmount}>
        <Image src="/images/icons/misc/minus-icon.webp" width={20} height={20} alt="minus-icon" />
      </button>

      <button className="relative rounded-[.5rem] bg-orange-500 px-[.4rem] py-[.2rem]" onClick={deleteItemFromCart}>
        <Image src="/images/icons/misc/cart-item-delete-icon.webp" width={20} height={20} alt="delete-cart-item-icon" />
      </button>
    </div>
  );
}
