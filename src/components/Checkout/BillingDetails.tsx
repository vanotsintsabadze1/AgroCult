"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";

export default function BillingDetails() {
  const [cart, setCart] = useState<CartItem[] | []>([]);
  const [cartInformation, setCartInformation] = useState({
    quantity: 0,
    totalPrice: 0,
    tax: 0,
  });

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem("cart") as string));
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const tax = totalPrice * (2 / 100);

      setCartInformation({
        quantity,
        totalPrice,
        tax,
      });
    }
  }, [cart]);

  return (
    <>
      {cart.length === 0 ? (
        <h1 className="text-[2.3rem] font-bold">Your cart is empty</h1>
      ) : (
        <>
          <h1 className="text-[2.3rem] font-bold">Checkout</h1>
          <div className="mt-[2rem] flex w-full flex-col gap-[2rem] lg:h-[50rem] lg:flex-row lg:gap-x-[4rem]">
            <section className="flex w-full flex-col gap-[1rem]">
              <h2 className="text-[1.5rem] font-bold">Shipping Address</h2>
              <div className="flex w-full flex-col gap-[1.5rem] text-[1.2rem]">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]"
                />
                <input type="text" placeholder="Address" className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]" />
                <input type="text" placeholder="City" className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]" />
                <input type="text" placeholder="State" className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]" />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]"
                />
              </div>
              <h2 className="text-[1.5rem] font-bold">Payment Method</h2>
              <div className="flex w-full flex-col gap-[1rem] text-[1.2rem]">
                <input
                  type="text"
                  placeholder="Credit Card Number"
                  className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]"
                />
                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]"
                />
                <input type="text" placeholder="CVV" className="h-[3.5rem] w-full rounded-[.5rem] border border-gray-300 px-[1.2rem]" />
              </div>
            </section>
            <section className="flex w-full flex-col gap-[1rem] py-[1rem]">
              <h2 className="text-[1.2rem] font-bold">Supported Payment Methods:</h2>
              <div className="flex gap-[1rem]">
                <Image src="/images/icons/checkout-icons/visa-icon.webp" width={25} height={25} alt="visa-icon" />
                <Image src="/images/icons/checkout-icons/mastercard-icon.webp" width={25} height={25} alt="mastercard-icon" />
                <Image src="/images/icons/checkout-icons/amex-icon.webp" width={25} height={25} alt="amex-icon" />
                <Image src="/images/icons/checkout-icons/paypal-icon.webp" width={25} height={25} alt="paypal-icon" />
              </div>
              <OrderSummary cart={cart} cartInformation={cartInformation} />
              <button className="h-[3.5rem] w-full rounded-[.5rem] bg-black text-[1.2rem] font-bold text-white">Place Order</button>
            </section>
          </div>
        </>
      )}
    </>
  );
}
