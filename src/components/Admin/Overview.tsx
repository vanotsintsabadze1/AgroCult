import { sql } from "@vercel/postgres";
import { getScopedI18n } from "@/locales/server";

async function getUsers() {
  try {
    const res = await sql`SELECT * FROM users`;
    return res.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function UserInformation() {
  const users = await getUsers();
  const amountOfUsers = users.length;
  const word = await getScopedI18n("admin.dashboard");

  const data = [
    {
      label: "users",
      data: amountOfUsers,
    },
    {
      label: "purchases",
      data: Number(Math.random() * 100).toFixed(),
    },
    {
      label: "new_users",
      data: Number(Math.random() * 100).toFixed(),
    },
    {
      label: "todays_revenue",
      data: Number(Math.random() * 100).toFixed(),
    },
    {
      label: "open_tickets",
      data: Number(Math.random() * 100).toFixed(),
    },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center py-[2rem] pl-[6rem]">
      <div className="flex w-full flex-col items-center gap-[2rem] py-[1rem]">
        <h4 className="text-[2.8rem] font-semibold">Dashboard</h4>
        <canvas className="h-[.1rem] w-[90%] bg-gray-500" />
      </div>
      <div className="flex flex-wrap place-items-center justify-center gap-[2rem] gap-y-[5rem] py-[2rem]">
        {data.map((d, idx) => (
          <div key={idx} className="flex basis-[33%] flex-col items-center gap-[1rem]">
            <h4 className="text-center text-[1.8rem] font-semibold uppercase text-gray-400">
              {" "}
              {word(d.label as "users" | "title" | "purchases" | "new_users" | "todays_revenue" | "open_tickets")}
            </h4>
            <p className="text-[2.5rem] font-light">{d.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
