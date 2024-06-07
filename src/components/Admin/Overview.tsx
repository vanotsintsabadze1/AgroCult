import { sql } from "@vercel/postgres";

async function getUsers() {
  try {
    const res = await sql`SELECT * FROM users`;
    return res.rows;
  } catch (error) {
    console.error(error)
    return [];
  }
}

export default async function UserInformation() {
  const users = await getUsers();
  const amountOfUsers = users.length;

  const data = [
    {
      label: "Users",
      data: amountOfUsers,
    },
    {
      label: "Purchases",
      data: Number(Math.random() * 100).toFixed(),
    },
    {
      label: "New Users",
      data: Number(Math.random() * 100).toFixed(),
    },
    {
      label: "Today's Revenue",
      data: Number(Math.random() * 100).toFixed(),
    },
    {
      label: "Open Tickets",
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
            <h4 className="text-center text-[1.8rem] font-semibold uppercase text-gray-400">{d.label}</h4>
            <p className="text-[2.5rem] font-light">{d.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
