import React from "react";
import BillingDetails from "../../../../components/Checkout/BillingDetails";

export default function page() {
  return (
    <main className="w-full flex items-center justify-center py-[4rem]">
      <div className="xs:w-full w-[40rem] md:w-[60rem] lg:w-[110rem] rounded-[.5rem] shadow-soft bg-white p-[3rem]">
        <BillingDetails />
      </div>
    </main>
  );
}
