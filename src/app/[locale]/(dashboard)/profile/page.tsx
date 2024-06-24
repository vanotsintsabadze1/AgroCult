import ProfileCard from "@/components/Profile/ProfileCard";
import { getSession } from "@auth0/nextjs-auth0";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Official AgroCult Profile Page",
};

async function getUserInformation(userId: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-profile-info`, {
      method: "POST",
      body: JSON.stringify({ userId }),
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
    <main className={`flex w-full justify-center p-[2rem]`}>
      <ProfileCard user={user} />
    </main>
  );
}
