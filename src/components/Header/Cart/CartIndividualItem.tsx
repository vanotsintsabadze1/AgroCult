import Image from "next/image";
import ItemAmountChanger from "./ItemAmountChanger";

interface Props {
  item: CartItem;
}

export default function CartIndividualItem({ item }: Props) {
  return (
    <>
      {item && (
        <div className="mt-[2rem] flex h-[14rem] w-full py-[2rem]">
          <div className="relative mx-[1rem] h-[10rem] w-[10rem]">
            <Image
              src={item.images[0]}
              fill
              alt={`item-images-${item.title}`}
              className="rounded-[.5rem] object-cover"
            />
          </div>
          <div className="relative flex h-full w-[30rem] flex-col xs:w-[20rem]">
            <h2 className="line-clamp-1 text-[1.5rem] font-bold">{item.title}</h2>
            <p className="line-clamp-2 text-[1.2rem] font-medium">{item.description}</p>
            <div className="mt-[2rem] flex gap-[1rem]">
              <p className="mt-[.5rem] text-[1.2rem] font-medium">
                <b>QTY</b>: {item.quantity}
              </p>
              <p className="mt-[.5rem] text-[1.2rem] font-medium">
                <b>Price</b>: ${Number(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
            <ItemAmountChanger item={item} />
          </div>
        </div>
      )}
    </>
  );
}
