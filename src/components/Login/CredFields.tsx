import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

interface Props {
  locale: string;
}

export default async function CredFields({ locale }: Props) {
  const word = await getScopedI18n("login");

  return (
    <section>
      <div className="w-full flex justify-center">
        <h2 className="font-bold tracking-wide flex text-[2rem]">{word("login")}</h2>
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
          placeholder={word("password")}
          type="password"
          name="password"
        />
        <div className="w-[30rem] flex items-center justify-between xs:w-full py-[2rem]">
          <div className="flex items-center gap-[.5rem]">
            <input type="checkbox" className="w-[1.5rem] h-[1.5rem] cursor-pointer lg:w-[1.3rem] lg:h-[1.3rem]" />
            <p className="text-[1.3rem] font-medium lg:text-[1.2rem] mt-[.2rem]">{word("rememberMe")}</p>
          </div>
          <div>
            <Link href={`/${locale}/forgot-password`} className="underline text-[1.3rem] lg:text-[1.2rem] text-black">
              {word("forgotPassword")}
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Link href={`/${locale}/register`} className="underline text-[1.3rem] lg:text-[1.2rem] text-black">
            {word("createAccount")}
          </Link>
        </div>
        <input
          type="submit"
          value={word("submit")}
          className="w-[16rem] h-[4.2rem] rounded-md bg-green-600 text-white font-bold uppercase tracking-wider text-[1.1rem] shadow-soft outline-none cursor-pointer"
        />
      </div>
    </section>
  );
}
