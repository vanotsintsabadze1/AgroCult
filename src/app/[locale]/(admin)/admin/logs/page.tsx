import LogActions from "@/components/Admin/Logs/LogActions";
import { sql } from "@vercel/postgres";

async function getLogs() {
  try {
    const res = await sql`SELECT * FROM action_logs`;
    return res.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function page() {
  const logs = (await getLogs()) as Logs[];

  return (
    <div className="flex h-screen w-full flex-col gap-[2rem] py-[4rem] pl-[7rem] pr-[2rem] lg:items-center">
      <h4 className="text-[2.5rem] font-bold ">Action Logs</h4>
      <div className="flex w-full flex-col overflow-x-auto py-[1rem] lg:items-center">
        <div className="grid min-w-[105rem] max-w-[120rem] grid-cols-7 rounded-t-lg bg-green-700 py-[2rem] text-[1.5rem] text-white shadow-md">
          <div className="col-span-1 m-auto">ID</div>
          <div className="col-span-1 m-auto">Performer Name</div>
          <div className="col-span-1 m-auto">Performer ID</div>
          <div className="col-span-1 m-auto">Type</div>
          <div className="col-span-1 m-auto">Description</div>
          <div className="col-span-1 m-auto">Timestamp</div>
          <div className="col-span-1 m-auto">Actions</div>
        </div>
        {logs.length > 0 &&
          logs.map((log) => (
            <div
              key={log.id}
              className="grid min-w-[105rem] max-w-[120rem] grid-cols-7 overflow-x-auto bg-white py-[2rem] text-[1.5rem] text-black shadow-md"
            >
              <div className="col-span-1 m-auto flex justify-center">
                <p className="truncate">{log.id}</p>
              </div>
              <div className="col-span-1 m-auto flex justify-center">
                <p className="w-[10rem] truncate">{log.performer_name}</p>
              </div>
              <div className="col-span-1 m-auto flex justify-center">
                <p className="w-[10rem] truncate">{log.performer_id}</p>
              </div>
              <div className="col-span-1 m-auto flex justify-center">
                <p className="truncate">{log.type}</p>
              </div>
              <div className="col-span-1 m-auto flex justify-center">
                <p className="w-[10rem] truncate">{log.description}</p>
              </div>
              <div className="col-span-1 m-auto flex justify-center">
                <p className="w-[15rem] truncate">
                  {log.performed_at.toLocaleDateString()} {log.performed_at.toLocaleTimeString()}
                </p>
              </div>
              <div className="col-span-1 m-auto flex justify-center">
                <LogActions {...log} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
