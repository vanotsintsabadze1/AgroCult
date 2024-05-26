import Image from "next/image";
import { getScopedI18n } from "@/locales/server";
import { getSession } from "@auth0/nextjs-auth0";
import ImageUpload from "./ImageUpload";

async function getProfileInfo(userId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-profile-info`,
    {
      method: "POST",
      body: JSON.stringify({ userId }),
      next: {
        tags: ["profile"],
      },
    }
  );
  const data = await res.json();

  return data;
}

export default async function ProfileCard() {
  const word = await getScopedI18n("profile");
  const session = await getSession();
  const profile: User = await getProfileInfo(session?.user.sub);

  return (
    <div className="w-full min-h-[65rem] shadow-soft rounded-[1rem] flex flex-col items-center p-[2rem] lg:w-[80rem] md:w-[65rem] sm:w-[40rem] dark:bg-white">
      <section className="w-full flex  justify-center items-center p-[1rem] flex-col gap-[2rem] mt-[2rem]">
        <div className="w-[15rem] h-[15rem] relative">
          <Image
            src={profile.image}
            fill
            className="rounded-[50%]"
            alt="user-profile-icon"
          />
        </div>
        <h2 className="font-bold text-[2rem] bg-gradient-to-r from-green-500 to-orange-300 bg-clip-text text-transparent">
          {word("title")}
        </h2>
      </section>
      <section className="w-full flex flex-col gap-[2rem] mt-[2rem] flex-grow lg:w-[40rem]">
        <ImageUpload />
        <div className="flex flex-col gap-[0.5rem]">
          <p className="font-bold text-[1.4rem]">Username:</p>
          <input
            type="text"
            value={profile.name}
            readOnly
            disabled
            className="w-[24rem] px-[1.2rem] py-[0.5rem] text-[1.4rem] border-2 border-gray-400 rounded-[0.5rem] bg-gray-300 text-gray-500"
          />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <p className="font-bold text-[1.4rem]">Email:</p>
          <input
            type="text"
            value={profile.email}
            readOnly
            disabled
            className="w-[24rem] px-[1.2rem] py-[0.5rem] text-[1.4rem] border-2 border-gray-400 rounded-[0.5rem] bg-gray-300 text-gray-500"
          />
        </div>
        <input
          type="submit"
          value={word("submit")}
          className="w-[15rem] h-[4rem] text-white bg-green-500 rounded-lg uppercase tracking-wider font-semibold text-[1.2rem] cursor-pointer self-center my-[2rem] "
        />
      </section>
    </div>
  );
}
