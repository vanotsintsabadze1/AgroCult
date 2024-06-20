"use client";
import { motion } from "framer-motion";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

const divAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  cartItems: CartItem[];
}

export default function CartMiniList({ cartItems }: Props) {
  const router = useRouter();
  const session = useUser();

  const user = session?.user;

  async function onCheckout() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/checkout`, {
      method: "POST",
      body: JSON.stringify({ products: cartItems, user }),
    });

    const data = await res.json();
    router.push(data.url);
  }
  return (
    <motion.div
      variants={divAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute right-[-1rem] top-[4rem] flex min-h-[15rem] w-[35rem] flex-col items-center justify-center rounded-[1rem] bg-white shadow-md"
    >
      {cartItems.length === 0 ? (
        <p className="text-[1.4rem] font-bold uppercase text-gray-400">No Items</p>
      ) : (
        <>
          <div className="flex max-h-[30rem] min-h-[20rem] w-full flex-col overflow-y-auto scrollbar-hide">
            {cartItems.map((item) => (
              <CartItem key={item.product_id} item={item} />
            ))}
          </div>
          <div className="flex w-full flex-col px-[4rem] py-[2rem]">
            <div className="flex w-full items-center justify-between">
              <span className="text-[1.4rem] font-bold">Total</span>
              <span className="text-[1.4rem] font-bold">
                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="mt-[1rem] w-full rounded-[1rem] bg-green-600 py-[1rem] text-[1.4rem] font-bold text-white"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
