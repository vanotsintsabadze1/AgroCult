"use client";

import { PlusIcon, Minus } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  product: ShopItem;
}

export default function PurchaseButton({ product }: Props) {
  const router = useRouter();
  const session = useUser();
  const [quantity, setQuantity] = useState(1);
  const productToBuy = {
    title: product.title,
    product_id: product.id,
    description: product.description,
    price: product.price,
    images: product.images,
    quantity: quantity,
  };

  const user = session?.user;

  async function purchaseItem() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/checkout`, {
        method: "POST",
        body: JSON.stringify({
          user,
          products: [productToBuy],
        }),
      });
      const data = await res.json();

      if (data.url) {
        router.push(data.url);
      } else {
        toast.error("Failed to purchase item");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    if (quantity === 1) {
      toast.error("You can't have less than 1 item");
      return;
    }
    setQuantity((prev) => prev - 1);
  }

  return (
    <div className="flex h-[10rem] w-full flex-col gap-[1.5rem] pt-[2rem] lg:justify-end">
      <div className="flex w-full items-center justify-between">
        <p className="text-[1.5rem] font-medium">
          {product.price === 0 ? "Not available for direct purchase" : `$${product.price * quantity}`}
        </p>
        <div className="flex items-center gap-[1rem]">
          <button
            onClick={decreaseQuantity}
            disabled={product.price === 0}
            className={`flex h-[3rem] w-[3rem] items-center justify-center rounded-[.5rem] bg-green-600 text-white ${product.price === 0 ? "cursor-not-allowed opacity-50" : "opacity-100"}`}
          >
            <Minus size={20} />
          </button>
          <p className={`text-[1.6rem] font-bold ${product.price === 0 ? "opacity-50" : "opacity-100"}`}>{quantity}</p>
          <button
            onClick={increaseQuantity}
            disabled={product.price === 0}
            className={`flex h-[3rem] w-[3rem] items-center justify-center rounded-[.5rem] bg-green-600 text-white ${product.price === 0 ? "cursor-not-allowed opacity-50" : "opacity-100"}`}
          >
            <PlusIcon size={20} />
          </button>
        </div>
      </div>
      <button
        onClick={purchaseItem}
        disabled={product.price === 0}
        className={`h-[4rem] w-full rounded-[1rem] ${product.price === 0 ? "cursor-not-allowed opacity-50" : "opacity-100"} bg-green-600 text-[1.6rem] font-medium text-white shadow-md`}
      >
        Purchase
      </button>
    </div>
  );
}
