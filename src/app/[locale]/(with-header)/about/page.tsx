import Link from "next/link";
import AboutText from "../../../../components/About/AboutText";
import Charities from "../../../../components/About/Charities";
import FutureGoals from "../../../../components/About/FutureGoals";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="relative flex h-[35rem] w-full items-center justify-center lg:h-[50rem]">
        <Image
          src="/images/bgs/about-us/about-us-bg.webp"
          className="bg-center object-cover"
          fill
          alt="about-us-bg"
        />
        <canvas className="absolute h-full w-full bg-green-900/50 brightness-75" />
        <div className="absolute bottom-[-2rem] z-[6] flex h-[6rem] w-[20rem] items-center justify-center rounded-[.5rem] bg-green-800 py-[1rem] shadow-lg">
          <h4 className="z-[10] text-[3rem] font-bold tracking-wider text-white drop-shadow-lg">
            About Us
          </h4>
        </div>
      </div>
      <AboutText />
      <Charities />
      <FutureGoals />

      <h4 className="mt-[3rem] text-center text-[1.7rem] font-medium leading-[3rem] tracking-wide text-white">
        Want to join our team?
        <br />
        <Link href="/careers" className="underline">
          Apply
        </Link>
      </h4>
    </main>
  );
}
