import { getScopedI18n } from "../../locales/server";
import Image from "next/image";

export default async function ThirdPartyLogin() {
  const word = await getScopedI18n("login");
  return (
    <section className="w-full flex flex-col items-center pb-[2rem] pt-[1rem] gap-[3rem]">
      <div className="w-full flex items-center justify-center gap-[2rem] flex-col">
        <h4 className="font-bold text-[1.2rem] text-gray-500">{word("loginUsing")}</h4>
        <div className="w-full flex justify-center items-center gap-[3rem]">
          <button>
            <Image src="/images/icons/social-icons/google.webp" width={30} height={30} alt="google-icon" className="rounded-[.5rem]" />
          </button>
          <button>
            <Image src="/images/icons/social-icons/facebook.webp" width={33} height={33} alt="facebook-icon" className="rounded-[.5rem]" />
          </button>
        </div>
      </div>
    </section>
  );
}
