"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import CartMiniList from "../Cart/CartMiniList";
// import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface CartItem extends ShopItem {
  quantity: number;
}

interface Props {
  className: string;
}

export default function Cart({ className }: Props) {
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
      <div className={className}>
        <div className="relative">
          <button className="relative h-[3rem] w-[3rem]" onClick={showCartItems}>
            <Image src="/images/icons/header-icons/cart.webp" fill alt="cart-black" className="dark:hidden" />
            <Image src="/images/icons/header-icons/cart-white.webp" fill alt="cart-black" className="hidden dark:block" />
          </button>
          {cart !== undefined && cart !== null && cartItemAmount > 0 ? (
            <div className="absolute -right-1 -top-1 flex h-[1.5rem] min-w-[1.5rem] items-center justify-center rounded-full bg-orange-600 p-[.3rem]">
              <p className="text-[1.0rem] font-semibold text-white">{cartItemAmount > 10 ? "10+" : cartItemAmount}</p>
            </div>
          ) : null}
        </div>
      </div>
      {/* <AnimatePresence>{isCartModalVisible && <CartMiniList cart={cart} usedFor={usedFor} />}</AnimatePresence> */}
    </>
  );
}
