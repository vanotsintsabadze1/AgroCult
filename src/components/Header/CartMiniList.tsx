"use client";

import { motion } from "framer-motion";
import { CartItem } from "../../types/types";
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
      } min-w-[40rem] xs:w-[27rem] xs:right-0 shadow-soft h-[40rem] sm:right-0  rounded-[.5rem] bg-white top-[4.5rem] right-[2rem] absolute flex flex-col items-center overflow-y-auto px-[1rem] py-[2rem]`}
    >
      {cart && cart.length > 0 ? (
        <>
          <h4 className="font-bold text-[2rem]">YOUR CART</h4>
          {cart.map((item, idx) => {
            return <CartIndividualItem key={idx} idx={idx} item={item} cart={cart} />;
          })}
          <div className="w-full flex items-center justify-between mt-[2rem]">
            <div className="flex flex-col gap-[.5rem] ml-[2rem]">
              <p className="text-[1.5rem] font-bold">Items: {totalInformation.items}</p>
              <p className="text-[1.5rem] font-bold">Total: ${totalInformation.total}</p>
              <p className="text-[1.5rem] font-bold">Tax: ${totalInformation.tax.toFixed(2)}</p>
            </div>
            <button
              onClick={redirectToCheckOut}
              className="w-[20rem] rounded-[.5rem] bg-orange-500 py-[1rem] text-[1.5rem] text-white font-bold"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="mt-[4rem] font-bold text-[1.5rem] text-gray-400">Cart is empty</p>
      )}
    </motion.div>
  );
}
