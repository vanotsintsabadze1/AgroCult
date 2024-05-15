import DropdownWrapper from "./DropdownWrapper";
import { cookies } from "next/headers";

interface Props {
  locale: string;
}

async function SettingsBar({ locale }: Props) {
  const theme = cookies().get("theme");

  return (
    <>
      <div className="hidden h-full w-[20rem] items-center justify-end gap-[2.5rem] lg:flex px-[3rem] relative">
        <DropdownWrapper locale={locale} theme={theme?.value} />
      </div>
    </>
  );
}

export default SettingsBar;
