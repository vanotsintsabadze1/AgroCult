import { getScopedI18n } from "../../locales/server";
import Image from "next/image";

export default async function CompanyVerificationCard() {
  const word = await getScopedI18n("landing");
  return (
    <div className="flex w-full flex-col items-center bg-green-800/50 py-[2rem]">
      <div className="p-[2rem]">
        <h2 className="text-[3rem] font-medium text-teal-700">
          {word("aboutCompany")}
        </h2>
        <p className="mt-[1rem] text-[1.6rem] font-medium text-teal-800">
          {word("aboutUs")}
        </p>
      </div>
      <div className="relative h-[40rem] w-[38rem]">
        <Image
          src="/images/vector-images/founder.webp"
          className="rounded-[2rem] bg-center opacity-75 blur-[.1rem]"
          fill
          alt="founder"
        />
      </div>
    </div>
  );
}
