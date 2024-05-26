"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartIndividualItem from "./CartIndividualItem";

const mainContainerAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

interface Props {
  cart: CartItem[] | [];
  usedFor: string;
}

export default function CartMiniList({ cart, usedFor }: Props) {
  const router = useRouter();
  const [totalInformation, setTotalInformation] = useState({
    items: 0,
    total: 0,
    tax: 0,
  });

  function redirectToCheckOut() {
    router.push("/checkout");
  }

  useEffect(() => {
    if (cart !== undefined && cart !== null && cart.length > 0) {
      setTotalInformation({
        items: cart.reduce((acc, item) => acc + item.quantity, 0),
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        tax: cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * (2 / 100),
      });
    }
  }, [cart]);

  return (
    <motion.div
      variants={mainContainerAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`${
        usedFor === "mobile" ? "lg:hidden" : "xs:hidden sm:hidden md:hidden"
      } absolute right-0 top-[6rem] flex h-[40rem] min-w-[40rem]  flex-col items-center overflow-y-auto rounded-[.5rem] bg-white px-[1rem] py-[2rem] shadow-soft xs:right-0 xs:w-[27rem] sm:right-0`}
    >
      {cart && cart.length > 0 ? (
        <>
          <h4 className="text-[2rem] font-bold">YOUR CART</h4>
          {cart.map((item, idx) => {
            return <CartIndividualItem key={idx} item={item} />;
          })}
          <div className="mt-[2rem] flex w-full items-center justify-between">
            <div className="ml-[2rem] flex flex-col gap-[.5rem]">
              <p className="text-[1.5rem] font-bold">Items: {totalInformation.items}</p>
              <p className="text-[1.5rem] font-bold">Total: ${totalInformation.total}</p>
              <p className="text-[1.5rem] font-bold">Tax: ${totalInformation.tax.toFixed(2)}</p>
            </div>
            <button
              onClick={redirectToCheckOut}
              className="w-[20rem] rounded-[.5rem] bg-orange-500 py-[1rem] text-[1.5rem] font-bold text-white"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="mt-[4rem] text-[1.5rem] font-bold text-gray-400">Cart is empty</p>
      )}
    </motion.div>
  );
}
