import Image from "next/image";

export default function Partners() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-[3rem] sm:p-[2rem] lg:flex-row lg:justify-center lg:pb-[4rem]">
        <div className="relative mt-[2rem] h-[8rem] w-[31rem] md:mt-0">
          <Image src="/images/partners/john_deere.webp" fill alt="partners-image" className="scale-75" />
        </div>
        <div className="relative h-[10rem] w-[30rem]">
          <Image
            src="/images/partners/agco.webp"
            fill
            alt="partners-image"
            className="scale-75 opacity-70 dark:opacity-100"
          />
        </div>
        <div className="relative h-[15rem] w-[25rem]">
          <Image
            src="/images/partners/jcb.webp"
            fill
            alt="partners-image"
            className="scale-75 opacity-70 dark:opacity-100"
          />
        </div>
      </div>
    </>
  );
}
