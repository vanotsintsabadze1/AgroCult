import Image from "next/image";
import { CartItem } from "../../types/types";
import ItemAmountChanger from "./ItemAmountChanger";

interface Props {
  idx: number;
  item: CartItem;
  cart: CartItem[] | [];
}

export default function CartIndividualItem({ idx, item, cart }: Props) {
  return (
    <div className="w-full flex h-[14rem] py-[2rem] mt-[2rem]">
      <div className="w-[10rem] h-[10rem] mx-[1rem] relative">
        <Image src={item.images[0]} fill alt={`item-images-${item.title}`} className="rounded-[.5rem]" />
      </div>
      <div className="w-[30rem] h-full flex flex-col relative xs:w-[20rem]">
        <h2 className="font-bold text-[1.5rem] line-clamp-1">{item.title}</h2>
        <p className="line-clamp-2 font-medium text-[1.2rem]">{item.description}</p>
        <div className="flex gap-[1rem] mt-[2rem]">
          <p className="font-medium text-[1.2rem] mt-[.5rem]">
            <b>QTY</b>: {item.quantity}
          </p>
          <p className="font-medium text-[1.2rem] mt-[.5rem]">
            <b>Price</b>: ${item.quantity * item.price}
          </p>
        </div>
        <ItemAmountChanger cart={cart} item={item} idx={idx} />
      </div>
    </div>
  );
}
