"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import CartMiniList from "./CartMiniList";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import ReactLenis from "lenis/react";

interface Props {
  cart: CartItem[];
}

export default function Cart({ cart }: Props) {
  const [shouldModalOpen, setShouldModalOpen] = useState(false);
  const pathname = usePathname();
  const cartItemAmount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (shouldModalOpen) {
      setShouldModalOpen(false);
    }
  }, [pathname]);

  return (
    <div className="relative space-x-[1rem]">
      <button onClick={() => setShouldModalOpen((prev) => !prev)}>
        <ShoppingCart size={24} className="dark:text-white" />
      </button>
      {cartItemAmount > 0 && (
        <div className="absolute -right-3 -top-5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-[1rem] text-[1.2rem] text-white">
          {cartItemAmount}
        </div>
      )}

      <ReactLenis options={{ prevent: true }}>
        <AnimatePresence>{shouldModalOpen && <CartMiniList cartItems={cart} />}</AnimatePresence>
      </ReactLenis>
    </div>
  );
}
