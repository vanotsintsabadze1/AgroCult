"use client";
import Image from "next/image";

import { addToCart } from "@/scripts/actions/cart/addToCart";
import { deleteItem } from "@/scripts/actions/cart/deleteItem";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { decreaseItemAmount } from "@/scripts/actions/cart/decreaseItemAmount";

interface Props {
  item: CartItem;
}

export default function CheckoutItem({ item }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  const router = useRouter();

  const session = useUser();

  const user = session?.user;

  async function onIncreaseQuantity() {
    setIsSubmitting(true);

    const res = await addToCart(user?.sub as string, item.product_id);

    if (res?.status === 200) {
      setQuantity((prev) => prev + 1);
    } else {
      toast.error("Failed to add to cart");
    }
    router.refresh();
    setIsSubmitting(false);
  }

  async function onRemoveFromCart() {
    setIsSubmitting(true);

    const res = await deleteItem(user?.sub as string, item.product_id);

    if (res?.status !== 200) {
      toast.error("Failed to remove from cart");
    }

    router.refresh();
    setIsSubmitting(false);
  }

  async function onDecreaseQuantity() {
    if (quantity === 1) {
      onRemoveFromCart();
      return;
    }

    setIsSubmitting(true);

    const res = await decreaseItemAmount(user?.sub as string, item.product_id);

    if (res?.status === 200) {
      setQuantity((prev) => prev - 1);
    } else {
      toast.error("Failed to decrease quantity");
    }
    setIsSubmitting(false);
    router.refresh();
  }

  return (
    <div
      key={item.product_id}
      className="flex w-full items-center gap-[1rem] rounded-[1rem] bg-white px-[1rem] py-[1rem] shadow-md"
    >
      <div className="relative h-[8rem] w-[10rem]">
        <Image src={item.images[0]} alt={`item-${item.product_id}`} fill />
      </div>
      <div className="flex flex-grow flex-col gap-[1rem]">
        <p className="text-[1.4rem] font-bold">{item.title}</p>
        <p className="text-[1.4rem] font-bold">${item.price.toLocaleString()}</p>
        <p className="text-[1.4rem] font-bold">QTY: {item.quantity}</p>
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
      </div>
    </div>
  );
}
