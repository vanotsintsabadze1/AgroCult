import Image from "next/image";

export default function CompanyVerificationCard() {
  return (
    <div className="w-full py-[3rem] bg-primary flex flex-col items-center justify-center gap-[2rem] lg:flex-row-reverse lg:py-[4rem] lg:gap-x-[8rem]">
      <div className="w-[15rem] h-[15rem] relative md:w-[20rem] md:h-[20rem] lg:w-[23rem] lg:h-[23rem]">
        <Image src="/images/vector-images/company-verification.webp" fill alt="company-verification" />
      </div>
      <div className="flex flex-col gap-[.5rem] items-center">
        <h2 className="text-[1.8rem] font-bold md:text-[2.2rem] lg:text-[2.7rem]">
          Want to get your company verified?
        </h2>
        <p className="text-[1.2rem] text-center w-[30rem] font-medium mt-[.5rem] md:text-[1.4rem] lg:text-[1.6rem] lg:w-[40rem]">
          Verified companies get more attention and are far more trusted by our clients
        </p>
        <button className="w-[20rem] h-[4rem] text-[1.3rem] bg-black text-white font-bold mt-[2rem] md:mt-[2.5rem] md:mb-[.5rem]">
          Contact Sales Team
        </button>
      </div>
    </div>
  );
}
