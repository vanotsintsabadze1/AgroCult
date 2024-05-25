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

  console.log(data);

  return data;
}

export default async function ProfileCard() {
  const word = await getScopedI18n("profile");
  const session = await getSession();
  const profile: User = await getProfileInfo(session?.user.sub);

  return (
    <div className="w-full min-h-[65rem] shadow-soft rounded-[1rem] flex flex-col items-center p-[2rem] lg:w-[80rem] md:w-[65rem] sm:w-[40rem] dark:bg-white">
      <section className="w-full flex  justify-center items-center p-[1rem] flex-col gap-[2rem] mt-[2rem]">
        <div className="w-[10rem] h-[10rem] relative">
          <Image src={profile.image} fill alt="user-profile-icon" />
        </div>
        <h2 className="font-bold text-[2rem]">{word("title")}</h2>
      </section>
      <section className="w-full flex flex-col items-center gap-[4rem] justify-center flex-grow">
        <ImageUpload />
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        <input
          type="submit"
          value={word("submit")}
          className="w-[15rem] h-[4rem] text-white bg-black rounded-lg uppercase tracking-wider font-semibold text-[1.2rem] cursor-pointer"
        />
      </section>
    </div>
  );
}
