"use client";

import ReactLenis from "lenis/react";
import CheckoutItem from "./CheckoutItem";

interface Props {
  items: CartItem[];
}

export default function ItemSection({ items }: Props) {
  return (
    <ReactLenis options={{ prevent: true }}>
      <div className="mt-[2rem] flex h-[30rem] w-full flex-col gap-[2rem] overflow-y-auto py-[2rem] scrollbar-hide md:w-[40rem] lg:h-[40rem]">
        {items.map((item) => (
          <CheckoutItem key={item.product_id} item={item} />
        ))}
      </div>
    </ReactLenis>
  );
}
