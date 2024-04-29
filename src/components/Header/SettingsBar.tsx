import { lang } from "../../dict/dictionary";
import DropdownWrapper from "./DropdownWrapper";

interface Props {
  locale: string;
}

function SettingsBar({ locale }: Props) {
  const word = lang[locale as keyof typeof lang];

  return (
    <>
      <div className="hidden h-full items-center justify-center gap-[2.5rem] lg:flex p-[0_3rem] relative">
        <DropdownWrapper locale={locale} />
        <button className="text-[1.4rem] font-bold dark:text-dark-mode">{word?.navigation.logout}</button>
      </div>
    </>
  );
}

export default SettingsBar;
