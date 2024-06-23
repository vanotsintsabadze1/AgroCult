import SideBar from "../../../components/Admin/SideBar";
import { getSession } from "@auth0/nextjs-auth0";
import NoAnimationWrapper from "@/components/Admin/NoAnimationWrapper";

interface Props {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: Props) {
  const session = await getSession();
  const user = session?.user;

  return (
    <main>
      <SideBar name={user?.name} profilePicture={user?.picture} />
      <NoAnimationWrapper>{children}</NoAnimationWrapper>
    </main>
  );
}
