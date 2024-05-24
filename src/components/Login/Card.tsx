import { loginUser } from "../../scripts/actions/auth/login";
import CredFields from "./CredFields";
import ThirdPartyLogin from "./ThirdPartyLogin";
import { redirect } from "next/navigation";

interface Props {
  locale: string;
}

export default async function Card({ locale }: Props) {
  async function loginAction(formData: FormData) {
    "use server";
    await loginUser(formData);
    redirect(`/${locale}`);
  }

  return (
    <div className="z-[4] w-[40rem] rounded-2xl bg-white px-[2rem] py-[3rem] shadow-xl xs:w-full lg:w-[60rem] lg:p-[3rem_0]">
      <form action={loginAction}>
        <CredFields locale={locale} />
        <ThirdPartyLogin />
      </form>
    </div>
  );
}
