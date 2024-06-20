import { Montserrat } from "next/font/google";
import ProfileCard from "@/components/Profile/ProfileCard";
import { getSession } from "@auth0/nextjs-auth0";

const montserrat = Montserrat({
  subsets: ["latin"],
});

async function getUserInformation(userId: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-profile-info`, {
      method: "POST",
      body: JSON.stringify({ userId }),
      cache: "force-cache",
    });

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Profile() {
  const session = await getSession();
  if (!session) {
    return null;
  }
  const user = (await getUserInformation(session?.user.sub)) as UserDB;

  return (
    <main className={`flex w-full justify-center p-[2rem] ${montserrat.className}`}>
      <ProfileCard user={user} />
    </main>
  );
}
