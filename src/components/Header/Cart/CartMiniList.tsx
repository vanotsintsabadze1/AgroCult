"use client";
import { motion } from "framer-motion";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import toast from "react-hot-toast";
import { useScopedI18n } from "@/locales/client";

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
  const word = useScopedI18n("cart");

  async function onCheckout() {
    router.push("/checkout");
  }

  async function onRemoveFromCart() {
    if (!user) {
      return;
    }

    toast
      .promise(
        fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/empty-cart`, {
          method: "DELETE",
          body: JSON.stringify({ userId: user?.sub }),
        }),
        {
          loading: "Emptying cart",
          success: "Cart emptied",
          error: "Failed to empty cart",
        },
      )
      .finally(() => router.refresh());
  }

  return (
    <motion.div
      variants={divAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute right-[-1rem] top-[4rem] flex min-h-[15rem] w-[35rem] flex-col items-center justify-center rounded-[1rem] bg-white shadow-md sm:right-[-6rem] xs:right-[-6rem] xs:w-[30rem]"
    >
      {cartItems.length === 0 ? (
        <p className="text-[1.4rem] font-bold uppercase text-gray-400">{word("noItems")}</p>
      ) : (
        <>
          <div className="flex max-h-[30rem] min-h-[20rem] w-full flex-col overflow-y-auto scrollbar-hide">
            <button
              onClick={onRemoveFromCart}
              className="flex w-full items-center justify-end gap-[.5rem] px-[2rem] py-[1rem] text-[1.3rem] font-bold"
            >
              <Trash2 size={20} />
              <p className="mt-[.2rem]">{word("clear")}</p>
            </button>
            {cartItems.map((item) => (
              <CartItem key={item.product_id} item={item} />
            ))}
          </div>
          <div className="flex w-full flex-col px-[4rem] py-[2rem]">
            <div className="flex w-full items-center justify-between">
              <span className="text-[1.4rem] font-bold">{word("total")}</span>
              <span className="text-[1.4rem] font-bold">
                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="mt-[1rem] w-full rounded-[1rem] bg-green-600 py-[1rem] text-[1.4rem] font-bold text-white"
            >
              {word("checkout")}
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
