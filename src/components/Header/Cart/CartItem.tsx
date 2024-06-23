"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addToCart } from "@/scripts/actions/cart/addToCart";
import { deleteItem } from "@/scripts/actions/cart/deleteItem";
import { decreaseItemAmount } from "@/scripts/actions/cart/decreaseItemAmount";
import { useRouter } from "next/navigation";
import CartActions from "./CartActions";

interface Props {
  item: CartItem;
}

export default function CartItem({ item }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  const router = useRouter();

  const session = useUser();

  const user = session?.user;

  if (!user) return null;

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
    <div className="flex min-h-[12rem] w-full items-center gap-[1rem] px-[1.5rem] py-[2rem]">
      <div className="relative h-[8rem] w-[11rem]">
        <Image src={item.images[0]} fill alt={`${item.product_id}`} className="rounded-[1rem] shadow-md" />
      </div>
      <div className="flex h-full flex-grow flex-col justify-center gap-[1.2rem]">
        <span className="line-clamp-1 w-[17rem] text-[1.3rem] font-bold">{item.title}</span>
        <div className="flex items-center gap-[1rem]">
          <span className="line-clamp-1 text-[1.3rem] font-medium">
            <b>QTY</b>: {quantity}
          </span>
          <span className="line-clamp-1 text-[1.3rem] font-medium">
            <b>Price</b>: ${(item.price * quantity).toLocaleString()}
          </span>
        </div>
        <CartActions
          isSubmitting={isSubmitting}
          onDecreaseQuantity={onDecreaseQuantity}
          onIncreaseQuantity={onIncreaseQuantity}
          onRemoveFromCart={onRemoveFromCart}
        />
      </div>
    </div>
  );
}
