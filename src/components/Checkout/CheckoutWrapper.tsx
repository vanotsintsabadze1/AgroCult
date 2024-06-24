import ProfileUserAddress from "../Profile/ProfileUserAddress";
import CheckoutButton from "./CheckoutButton";
import ItemSection from "./ItemSection";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

interface Props {
  items: CartItem[];
}

async function getProfileInfo(userId: string) {
  try {
    const profileInfo = await sql`SELECT * FROM users WHERE user_id = ${userId}`;

    return profileInfo.rows[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function CheckoutWrapper({ items }: Props) {
  const session = await getSession();
  const itemAmount = items.reduce((acc, item) => acc + item.quantity, 0);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const user = session?.user;

  if (!user) {
    return null;
  }

  const profileInfo = (await getProfileInfo(user.sub)) as UserDB;

  return (
    <div className="flex w-[40rem] flex-col items-center rounded-[2rem] bg-white p-[2rem] shadow-md md:w-[60rem] lg:w-[90rem]">
      <div className="flex w-full flex-col lg:flex-row lg:gap-[2rem]">
        <ItemSection items={items} />
        <div className="flex-grow">
          {profileInfo.extra_details && (
            <ProfileUserAddress extra_details={profileInfo.extra_details} userId={user.sub} />
          )}
        </div>
      </div>
      <canvas className="my-[1rem] h-[.2rem] w-[90%] bg-gray-300" />
      <CheckoutButton itemAmount={itemAmount} total={total} cartItems={items} />
    </div>
  );
}
