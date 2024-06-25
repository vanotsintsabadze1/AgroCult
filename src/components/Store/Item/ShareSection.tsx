"use client";
import Image from "next/image";
import { TwitterShareButton, FacebookShareButton } from "react-share";

interface Props {
  id: string;
  title: string;
}

export default function ShareSection({ id, title }: Props) {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL;

  return (
    <div className="rounded-white flex items-center justify-center gap-[2.5rem] rounded-[2rem] bg-white px-[4rem] py-[1rem] shadow-md">
      <FacebookShareButton url={`${url}/store/${id}`} title={title}>
        <Image width={30} height={30} alt="facebook-share-icon" src={"/images/icons/social-icons/facebook.webp"} />
      </FacebookShareButton>
      <TwitterShareButton url={`${url}/store/${id}`} title={title}>
        <Image width={27} height={27} alt="facebook-share-icon" src={"/images/icons/social-icons/twitter.webp"} />
      </TwitterShareButton>
    </div>
  );
}
