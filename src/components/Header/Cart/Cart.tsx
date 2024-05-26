"use client";
import Image from "next/image";
import { useState } from "react";
import CartMiniList from "../Cart/CartMiniList";
import { AnimatePresence } from "framer-motion";
interface Props {
  className: string;
  usedFor: string;
  cart: CartItem[];
}

export default function Cart({ className, usedFor, cart: cartItems }: Props) {
  const [isCartModalVisible, setCartModalVisible] = useState(false);
  const qty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  function showCartItems() {
    setCartModalVisible(!isCartModalVisible);
  }

  return (
    <>
      <div className={className}>
        <div className="relative">
          <button className="relative h-[3rem] w-[3rem]" onClick={showCartItems}>
            <Image src="/images/icons/header-icons/cart.webp" fill alt="cart-black" className="dark:hidden" />
            <Image
              src="/images/icons/header-icons/cart-white.webp"
              fill
              alt="cart-black"
              className="hidden dark:block"
            />
          </button>
          {qty > 0 && (
            <div className="absolute -right-1 -top-1 flex h-[1.5rem] min-w-[1.5rem] items-center justify-center rounded-full bg-orange-600 p-[.3rem]">
              <p className="text-[1.0rem] font-semibold text-white">{qty > 10 ? "10+" : qty}</p>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>{isCartModalVisible && <CartMiniList cart={cartItems} usedFor={usedFor} />}</AnimatePresence>
    </>
  );
}
