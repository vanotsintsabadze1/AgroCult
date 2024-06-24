import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <main className={`${montserrat.className} px-[1rem] py-[2rem]`}>{children}</main>;
}
