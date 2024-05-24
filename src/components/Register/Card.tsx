import RegCredFields from "./RegCredFields";

interface Props {
  locale: string;
}

export default function Card({ locale }: Props) {
  return (
    <div className="xs:w-full w-[40rem] shadow-xl rounded-2xl bg-white py-[3rem] px-[2rem] z-[4] lg:w-[60rem]">
      <form>
        <RegCredFields locale={locale} />
      </form>
    </div>
  );
}
