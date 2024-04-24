import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function DashboardLayout({ children, params: { locale } }: Props) {
  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
