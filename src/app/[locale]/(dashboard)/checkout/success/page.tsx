import { sql } from "@vercel/postgres";
import { getSession } from "@auth0/nextjs-auth0";
import SuccessCard from "@/components/Checkout/Success/SuccessCard";

async function deleteCartItems(id: string) {
    try {
      await sql`DELETE FROM cart WHERE user_id = ${id}`;

      return {status: 200}
    } catch (error) {
      console.error(error);
      return null;
    }
}

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  await deleteCartItems(user.sub);

  return (
    <SuccessCard />
  )
}
