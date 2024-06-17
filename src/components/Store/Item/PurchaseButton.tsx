import { PlusIcon, Minus } from "lucide-react";

interface Props {
  price: number;
}

export default function PurchaseButton({ price }: Props) {
  return (
    <div className="flex w-full flex-col gap-[1.5rem] lg:mt-[4rem] lg:flex-grow lg:justify-end">
      <div className="flex w-full items-center justify-between">
        <p className="text-[1.5rem] font-medium">{price === 0 ? "Not available for direct purchase" : `$${price}`}</p>
        <div className="flex items-center gap-[1rem]">
          <button
            className={`flex h-[3rem] w-[3rem] items-center justify-center rounded-[.5rem] bg-green-600 text-white ${price === 0 ? "cursor-not-allowed opacity-50" : "opacity-100"}`}
          >
            <Minus size={20} />
          </button>
          <p className={`text-[1.6rem] font-bold ${price === 0 ? "opacity-50" : "opacity-100"}`}>1</p>
          <button
            className={`flex h-[3rem] w-[3rem] items-center justify-center rounded-[.5rem] bg-green-600 text-white ${price === 0 ? "cursor-not-allowed opacity-50" : "opacity-100"}`}
          >
            <PlusIcon size={20} />
          </button>
        </div>
      </div>
      <button
        disabled={price === 0}
        className={`h-[4rem] w-full rounded-[1rem] ${price === 0 ? "cursor-not-allowed opacity-50" : "opacity-100"} bg-green-600 text-[1.6rem] font-medium text-white shadow-md`}
      >
        Purchase
      </button>
    </div>
  );
}
