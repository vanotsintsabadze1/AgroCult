import Image from "next/image";

export default function Partners() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-[2rem] p-[2rem] grayscale lg:flex-row lg:justify-center dark:brightness-0 dark:invert ">
        <div className="relative h-[14rem] w-[25rem]">
          <Image src="/images/partners/tnet.webp" fill alt="partners-image" className="scale-75" />
        </div>
        <div className="relative h-[8rem] w-[18rem]">
          <Image src="/images/partners/vsolutions.webp" fill alt="partners-image" className="scale-75 opacity-70 dark:opacity-100" />
        </div>
      </div>
    </>
  );
}
