import { Minus, Plus, Trash2 } from "lucide-react";

interface Props {
  isSubmitting: boolean;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveFromCart: () => void;
}

export default function CartActions({ isSubmitting, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart }: Props) {
  return (
    <div className={`flex w-full items-center justify-between ${isSubmitting ? "opacity-50" : ""}`}>
      <div className="flex items-center justify-center">
        <button
          disabled={isSubmitting}
          onClick={onIncreaseQuantity}
          className="flex items-center justify-center rounded-l-[2rem] bg-green-600 px-[1rem] py-[.5rem] text-white"
        >
          <Plus size={18} />
        </button>
        <button
          onClick={() => onDecreaseQuantity()}
          disabled={isSubmitting}
          className="flex items-center justify-center rounded-r-[2rem] bg-green-600 px-[1rem] py-[.5rem] text-white"
        >
          <Minus size={18} />
        </button>
      </div>
      <button
        onClick={onRemoveFromCart}
        disabled={isSubmitting}
        className="flex items-center justify-center px-[1rem] py-[.5rem]"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
