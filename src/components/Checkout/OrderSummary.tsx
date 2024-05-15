import { CartItem } from "../../types/types";
import React from "react";

interface Props {
  cart: CartItem[] | [];
  cartInformation: {
    quantity: number;
    totalPrice: number;
    tax: number;
  };
}

export default function OrderSummary({ cart, cartInformation }: Props) {
  return (
    <section className="flex flex-col w-full">
      <h2 className="font-bold text-[1.5rem]">Order Summary:</h2>
      <div className="w-full flex flex-col gap-[1.5rem] py-[1rem]">
        <div className="flex flex-col gap-[1.5rem] text-[1.2rem] min-h-[5rem] max-h-[20rem] overflow-y-auto">
          {cart.map((item, idx) => {
            return (
              <div key={idx} className="w-full flex justify-between border-b-2 border-b-black py-[1rem]">
                <div className="flex flex-col gap-[.5rem]">
                  <p>{item.title}</p>
                  <p>
                    <b>QTY:</b> {item.quantity}
                  </p>
                </div>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full flex items-center justify-between text-[1.1rem]">
          <p>Items</p>
          <p>${cartInformation.totalPrice}</p>
        </div>
        <div className="w-full flex items-center justify-between  text-[1.1rem]">
          <p>Tax</p>
          <p>${cartInformation.tax}</p>
        </div>
        <div className="w-full flex items-center justify-between  text-[1.1rem]">
          <p>Total</p>
          <p>${cartInformation.totalPrice + cartInformation.tax}</p>
        </div>
      </div>
    </section>
  );
}
