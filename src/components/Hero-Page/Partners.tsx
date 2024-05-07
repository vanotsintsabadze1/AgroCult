import Image from "next/image";

export default function Partners() {
  return (
    <>
      <div className="w-full flex flex-col items-center p-[2rem] gap-[2rem] grayscale lg:flex-row lg:justify-center">
        <div className="w-[25rem] h-[14rem] relative">
          <Image src="/images/partners/tnet.webp" fill alt="partners-image" className=" scale-75" />
        </div>
        <div className="w-[18rem] h-[8rem] relative">
          <Image src="/images/partners/vsolutions.webp" fill alt="partners-image" className="scale-75 opacity-70" />
        </div>
      </div>
    </>
  );
}
