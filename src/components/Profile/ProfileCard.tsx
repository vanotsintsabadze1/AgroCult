import Image from "next/image";
import { getScopedI18n } from "@/locales/server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

async function getProfileInfo(user_id: string) {
  const res = await sql`SELECT * FROM users WHERE user_id = ${user_id}`;
  const data: User = res.rows[0] as User;

  return data;
}

export default async function ProfileCard() {
  const word = await getScopedI18n("profile");
  const session = await getSession();
  const profile: User = await getProfileInfo(session?.user.sub);

  return (
    <div className="w-full min-h-[65rem] shadow-soft rounded-[1rem] flex flex-col items-center p-[2rem] lg:w-[80rem] md:w-[65rem] sm:w-[40rem] dark:bg-white">
      <section className="w-full flex justify-center items-center p-[1rem] flex-col gap-[2rem] mt-[2rem]">
        <div className="w-[10rem] h-[10rem] relative">
          <Image src={profile.image} fill alt="user-profile-icon" />
        </div>
        <h2 className="font-bold text-[2rem]">{word("title")}</h2>
      </section>
      <section className="w-full flex justify-center flex-grow">
        <form className="w-full p-[2rem] flex items-center flex-col gap-[3.5rem]">
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <input
            type="submit"
            value={word("submit")}
            className="w-[15rem] h-[4rem] text-white bg-black rounded-lg uppercase tracking-wider font-semibold text-[1.2rem] cursor-pointer"
          />
        </form>
      </section>
    </div>
  );
}
