import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function DashboardLayout({ children }) {
  const auth = cookies().get("user");

  if (!auth?.value) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
