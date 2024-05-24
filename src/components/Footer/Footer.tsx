import Image from "next/image";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

export default async function Footer() {
  const word = await getScopedI18n("footer");
  return (
    <footer className="flex w-full flex-grow flex-col items-center border-t-2 border-t-gray-800 bg-primary px-[2rem] py-[2rem]">
      <div className="w-full lg:w-[80rem] xl:w-[80%]">
        <div className="flex w-full justify-center p-[1rem] lg:justify-start">
          <Image src="/images/logos/main-logo-white.webp" width={200} height={200} alt="footer-main-logo" />
        </div>
        <div className="mt-[2rem] flex w-full flex-wrap items-center justify-evenly gap-x-[2rem] gap-y-[1rem] text-[1.5rem] text-gray-500 lg:justify-start lg:gap-x-[3rem]">
          <Link className="hover:underline" href="/store">
            {word("links.trackShipment")}
          </Link>
          <Link className="hover:underline" href="/about">
            {word("links.about")}
          </Link>
          <Link className="hover:underline" href="/contact">
            {word("links.contact")}
          </Link>
          <Link className="hover:underline" href="/profile">
            {word("links.profile")}
          </Link>
        </div>
        <hr className="mt-[2rem]"></hr>
        <p className="mt-[2rem] text-[1.3rem] text-gray-500">{word("rights")}</p>
      </div>
    </footer>
  );
}
