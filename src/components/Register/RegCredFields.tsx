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
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="flex text-[2rem] font-bold tracking-wide">{word("register")}</h2>
      </div>
      <div className="flex w-full flex-col items-center gap-[2rem] py-[2rem]">
        <input
          className="w-[30rem] rounded-[.5rem] border-b border-b-green-600 px-[1.2rem] py-[1.5rem] text-[1.3rem] outline-none placeholder:uppercase xs:w-full"
          placeholder={word("username")}
          type="text"
          name="username"
        />
        <input
          className="w-[30rem] rounded-[.5rem] border-b border-b-green-600 px-[1.2rem] py-[1.5rem] text-[1.3rem] outline-none  placeholder:uppercase xs:w-full"
          placeholder={word("email")}
          type="password"
          name="email"
        />
        <input
          className="w-[30rem] rounded-[.5rem] border-b border-b-green-600 px-[1.2rem] py-[1.5rem] text-[1.3rem] outline-none placeholder:uppercase xs:w-full"
          placeholder={word("password")}
          type="text"
          name="password"
        />
        <input
          className="w-[30rem] rounded-[.5rem] border-b border-b-green-600 px-[1.2rem] py-[1.5rem] text-[1.3rem] outline-none placeholder:uppercase xs:w-full"
          placeholder={word("confirmPassword")}
          type="password"
          name="confirmPassword"
        />
        <div className="flex w-[30rem] justify-end">
          <Link href={`/${locale}/login`} className="text-[1.3rem] text-black underline lg:text-[1.2rem]">
            {word("alreadyHaveAnAccount")}
          </Link>
        </div>
        <input
          type="submit"
          value={word("submit")}
          className="h-[4.2rem] w-[16rem] cursor-pointer rounded-md bg-green-600 text-[1.1rem] font-bold uppercase tracking-wider text-white shadow-soft outline-none"
        />
      </div>
      <ThirdPartyLogin />
    </section>
  );
}
