import Card from "../../../../components/Register/Card";

interface Props {
  params: {
    locale: string;
  };
}

export default function page({ params: { locale } }: Props) {
  return (
    <main className="w-full h-screen flex items-center justify-center px-[2rem]">
      <canvas className="fixed w-screen h-screen brightness-50 top-0 left-0 bg-gray-100"></canvas>
      <Card locale={locale} />
    </main>
  );
}
