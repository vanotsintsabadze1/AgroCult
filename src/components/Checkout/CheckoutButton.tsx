"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

interface Props {
  itemAmount: number;
  total: number;
  cartItems: CartItem[];
}

export default function CheckoutButton({ itemAmount, total, cartItems }: Props) {
  const router = useRouter();
  const session = useUser();

  const user = session?.user;

  if (!user) {
    return null;
  }

  async function onCheckout() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/checkout`, {
      method: "POST",
      body: JSON.stringify({ products: cartItems, user }),
    });

    const data = await res.json();
    router.push(data.url);
  }

  return (
    <div className="flex w-full items-center justify-center py-[1rem]">
      <div className="flex w-[30rem] flex-col gap-[1rem] xs:w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.3rem] font-medium">Total: ${total.toLocaleString()}</h2>
          <h2 className="text-[1.3rem] font-medium">QTY: {itemAmount}</h2>
        </div>
        <button
          onClick={onCheckout}
          className="h-[4rem] w-full rounded-[1rem] bg-green-600 text-[1.4rem] font-bold text-white shadow-md"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
