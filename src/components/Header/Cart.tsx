"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CartMiniList from "./CartMiniList";
import { AnimatePresence } from "framer-motion";
import { ShopItem } from "../../types/types";
import { usePathname } from "next/navigation";

interface CartItem extends ShopItem {
  quantity: number;
}

interface Props {
  usedFor: string;
}

export default function Cart({ usedFor }: Props) {
  const [isCartModalVisible, setCartModalVisible] = useState(false);
  const [cart, setCart] = useState<CartItem[] | []>([]);
  const [cartItemAmount, setCartItemAmount] = useState(0);
  const pathname = usePathname();

  function handleStorageChange() {
    setCart(JSON.parse(window.localStorage.getItem("cart") as string));
  }

  useEffect(() => {
    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  function showCartItems() {
    setCartModalVisible(!isCartModalVisible);
  }

  useEffect(() => {
    if (cart !== undefined && cart !== null) {
      setCartItemAmount(cart.reduce((acc, item) => acc + item.quantity, 0));
    }
  }, [cart]);

  useEffect(() => {
    if (isCartModalVisible) {
      setCartModalVisible(false);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={`absolute top-[50%] translate-y-[-50%] right-[8rem] ${
          usedFor === "mobile" ? "lg:hidden" : "sm:hidden xs:hidden md:hidden"
        }`}
      >
        <div className="relative">
          <button className="w-[3rem] h-[3rem] relative" onClick={showCartItems}>
            <Image src="/images/icons/header-icons/cart.webp" fill alt="cart-black" className="dark:hidden" />
            <Image src="/images/icons/header-icons/cart-white.webp" fill alt="cart-black" className="hidden dark:block" />
          </button>
          {cart !== undefined && cart !== null && cartItemAmount > 0 ? (
            <div className="absolute -top-1 -right-1 min-w-[1.5rem] p-[.3rem] h-[1.5rem] bg-orange-600 rounded-full flex justify-center items-center">
              <p className="text-white font-semibold text-[1.0rem]">{cartItemAmount > 10 ? "10+" : cartItemAmount}</p>
            </div>
          ) : null}
        </div>
      </div>
      <AnimatePresence>{isCartModalVisible && <CartMiniList cart={cart} usedFor={usedFor} />}</AnimatePresence>
    </>
  );
}
