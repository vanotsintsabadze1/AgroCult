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
    <section className="flex w-full flex-col">
      <h2 className="text-[1.5rem] font-bold">Order Summary:</h2>
      <div className="flex w-full flex-col gap-[1.5rem] py-[1rem]">
        <div className="flex max-h-[20rem] min-h-[5rem] flex-col gap-[1.5rem] overflow-y-auto text-[1.2rem]">
          {cart.map((item, idx) => {
            return (
              <div key={idx} className="flex w-full justify-between border-b-2 border-b-black py-[1rem]">
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
        <div className="flex w-full items-center justify-between text-[1.1rem]">
          <p>Items</p>
          <p>${cartInformation.totalPrice}</p>
        </div>
        <div className="flex w-full items-center justify-between  text-[1.1rem]">
          <p>Tax</p>
          <p>${cartInformation.tax}</p>
        </div>
        <div className="flex w-full items-center justify-between  text-[1.1rem]">
          <p>Total</p>
          <p>${cartInformation.totalPrice + cartInformation.tax}</p>
        </div>
      </div>
    </section>
  );
}
