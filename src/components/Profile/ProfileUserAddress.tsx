"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { useScopedI18n } from "@/locales/client";

interface Props {
  extra_details: {
    country: string;
    city: string;
    address: string;
    postal_code: string;
  };
  userId: string;
}

const schema = z.object({
  country: z
    .string()
    .min(3, "Country must be at least 3 characters long")
    .max(25, "Country must be at most 50 characters long"),
  city: z.string().min(3, "City must be at least 3 characters long").max(25, "City must be at most 50 characters long"),
  address: z
    .string()
    .min(3, "Address must be at least 3 characters long")
    .max(70, "Address must be at most 70 characters long"),
  postal_code: z
    .string()
    .min(3, "Postal Code must be at least 3 characters long")
    .max(25, "Postal Code must be at most 50 characters long"),
});

export default function ProfileUserAddress({ extra_details, userId }: Props) {
  const [extraDetails, setExtraDetails] = useState(extra_details);
  const router = useRouter();
  const word = useScopedI18n("profile");

  async function onCredentialSubmit() {
    const form = {
      country: extraDetails.country,
      city: extraDetails.city,
      address: extraDetails.address,
      postal_code: extraDetails.postal_code,
    };

    const res = schema.safeParse(form);

    if (!res.success) {
      toast.error(res.error.errors[0].message);
      return;
    }

    toast
      .promise(
        fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/set-user-address`, {
          method: "POST",
          body: JSON.stringify({
            userId: userId,
            extraDetails: form,
          }),
        }),
        {
          loading: "Updating Address...",
          success: "Address Updated",
          error: "Failed to Update Address",
        },
      )
      .finally(() => {
        setTimeout(() => {
          router.refresh();
        }, 1000);
      });
  }

  return (
    <div className="mt-[2rem] flex w-full flex-col gap-[1rem] px-[2rem]">
      <h4 className="ml-[.2rem] text-[1.5rem] font-bold uppercase text-black dark:text-white">
        {word("metrics.shippingDetails.title")}:
      </h4>

      <div className="flex w-full flex-col gap-[.5rem]">
        <h4 className="ml-[.2rem] text-[1.2rem] font-bold uppercase text-gray-400">
          {word("metrics.shippingDetails.country")}:
        </h4>
        <input
          type="text"
          value={extraDetails.country}
          onChange={(e) => setExtraDetails({ ...extraDetails, country: e.target.value })}
          placeholder={word("metrics.shippingDetails.country")}
          className="h-[4rem] w-full rounded-[.5rem] border-2 border-gray-300 px-[1.2rem] text-[1.4rem] shadow-md"
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <h4 className="ml-[.2rem] text-[1.2rem] font-bold uppercase text-gray-400">
          {word("metrics.shippingDetails.city")}:
        </h4>
        <input
          type="text"
          value={extraDetails.city}
          onChange={(e) => setExtraDetails({ ...extraDetails, city: e.target.value })}
          placeholder={word("metrics.shippingDetails.city")}
          className="h-[4rem] w-full rounded-[.5rem] border-2 border-gray-300 px-[1.2rem] text-[1.4rem] shadow-md"
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <h4 className="ml-[.2rem] text-[1.2rem] font-bold uppercase text-gray-400">
          {word("metrics.shippingDetails.address")}:
        </h4>
        <input
          type="text"
          value={extraDetails.address}
          onChange={(e) => setExtraDetails({ ...extraDetails, address: e.target.value })}
          placeholder={word("metrics.shippingDetails.address")}
          className="h-[4rem] w-full rounded-[.5rem] border-2 border-gray-300 px-[1.2rem] text-[1.4rem] shadow-md"
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <h4 className="ml-[.2rem] text-[1.2rem] font-bold uppercase text-gray-400">
          {word("metrics.shippingDetails.postalCode")}:
        </h4>
        <input
          type="text"
          value={extraDetails.postal_code}
          onChange={(e) => setExtraDetails({ ...extraDetails, postal_code: e.target.value })}
          placeholder={word("metrics.shippingDetails.postalCode")}
          className="h-[4rem] w-full rounded-[.5rem] border-2 border-gray-300 px-[1.2rem] text-[1.4rem] shadow-md"
        />
      </div>
      <div className="flex w-full items-center justify-center py-[1rem]" onClick={onCredentialSubmit}>
        <button className="h-[3.7rem] w-[15rem] rounded-lg bg-green-600 text-[1.4rem] font-bold text-white shadow-md">
          {word("metrics.shippingDetails.save")}
        </button>
      </div>
    </div>
  );
}
