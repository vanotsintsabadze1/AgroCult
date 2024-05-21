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
    redirect("/");
  }

  return (
    <div className="xs:w-full w-[40rem] shadow-xl rounded-2xl bg-white py-[3rem] px-[2rem] z-[4] lg:w-[60rem] lg:p-[3rem_0]">
      <form action={loginAction}>
        <CredFields locale={locale} />
        <ThirdPartyLogin />
      </form>
    </div>
  );
}
