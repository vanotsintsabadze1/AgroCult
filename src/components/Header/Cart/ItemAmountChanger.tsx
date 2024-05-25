import { addToCart } from "../../../scripts/actions/cart/addToCart";
import Image from "next/image";

interface Props {
  cart: CartItem[] | [];
  item: CartItem;
  idx: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

//  @ts-ignore
export default function ItemAmountChanger({ cart, idx, item, quantity, setQuantity }: Props) {
  function increaseItemAmount() {
    setQuantity((prev) => prev + 1);
    addToCart(1, item.product_id);
  }

  function decreaseItemAmount() {
    if (quantity === 1) {
      return;
    } else {
      setQuantity((prev) => prev - 1);
    }
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
