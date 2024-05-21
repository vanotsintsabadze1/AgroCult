import { getScopedI18n } from "../../locales/server";
import Link from "next/link";
import ThirdPartyLogin from "../Login/ThirdPartyLogin";

interface Props {
  locale: string;
}

export default async function RegCredFields({ locale }: Props) {
  const word = await getScopedI18n("register");

  return (
    <section>
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="font-bold tracking-wide flex text-[2rem]">{word("register")}</h2>
      </div>
      <div className="w-full flex flex-col items-center gap-[2rem] py-[2rem]">
        <input
          className="py-[1.5rem] px-[1.2rem] border-b-green-600 border-b rounded-[.5rem] text-[1.3rem] placeholder:uppercase xs:w-full w-[30rem] outline-none"
          placeholder={word("username")}
          type="text"
          name="username"
        />
        <input
          className="py-[1.5rem] px-[1.2rem] border-b-green-600 border-b rounded-[.5rem] text-[1.3rem] placeholder:uppercase xs:w-full  w-[30rem] outline-none"
          placeholder={word("email")}
          type="password"
          name="email"
        />
        <input
          className="py-[1.5rem] px-[1.2rem] border-b-green-600 border-b rounded-[.5rem] text-[1.3rem] placeholder:uppercase xs:w-full w-[30rem] outline-none"
          placeholder={word("password")}
          type="text"
          name="password"
        />
        <input
          className="py-[1.5rem] px-[1.2rem] border-b-green-600 border-b rounded-[.5rem] text-[1.3rem] placeholder:uppercase xs:w-full w-[30rem] outline-none"
          placeholder={word("confirmPassword")}
          type="password"
          name="confirmPassword"
        />
        <div className="flex justify-end w-[30rem]">
          <Link href={`/${locale}/login`} className="underline text-[1.3rem] lg:text-[1.2rem] text-black">
            {word("alreadyHaveAnAccount")}
          </Link>
        </div>
        <input
          type="submit"
          value={word("submit")}
          className="w-[16rem] h-[4.2rem] rounded-md bg-green-600 text-white font-bold uppercase tracking-wider text-[1.1rem] shadow-soft outline-none cursor-pointer"
        />
      </div>
      <ThirdPartyLogin />
    </section>
  );
}
