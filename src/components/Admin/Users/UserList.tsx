import Image from "next/image";
import UserActions from "./UserActions";
import { getScopedI18n } from "@/locales/server";

interface Props {
  users: UserDB[];
}

export default async function UserList({ users }: Props) {
  const word = await getScopedI18n("admin.users");

  return (
    <div className="m-auto mt-[2rem] flex h-full w-full flex-col overflow-x-auto px-[1rem] lg:items-center">
      <div className="grid w-[90rem] grid-cols-5 rounded-t-xl bg-green-600 px-[1rem] py-[1.5rem] text-white">
        <div className="cols-span-1 m-auto text-[1.5rem]">{word("name")}</div>
        <div className="cols-span-1 m-auto text-[1.5rem]">{word("email")}</div>
        <div className="cols-span-1 m-auto text-[1.5rem]">{word("role")}</div>
        <div className="cols-span-1 m-auto text-[1.5rem]">{word("id")}</div>
        <div className="cols-span-1 m-auto text-[1.5rem]">{word("action")}</div>
      </div>

      {users.map((user) => (
        <div key={user.user_id} className="grid w-[90rem] grid-cols-5 bg-white px-[1rem] py-[1.5rem]">
          <div className="cols-span-1 flex w-[22rem] items-center justify-center gap-[1rem] text-[1.5rem]">
            <Image
              src={user.image as string}
              className="ml-[1rem] rounded-[50%]"
              alt={`user-image-${user.name}`}
              width={30}
              height={30}
            />
            <p className="w-[10rem] truncate">{user.name}</p>
          </div>
          <div className="cols-span-1 m-auto text-[1.5rem]">
            <p className="w-[10rem] truncate">{user.email}</p>
          </div>
          <div className="cols-span-1 m-auto text-[1.5rem]">
            <p className="truncate">{user.role}</p>
          </div>
          <div className="cols-span-1 m-auto text-[1.5rem]">
            <p className="lg w-[10rem] truncate">{user.user_id}</p>
          </div>
          <div className="cols-span-1 m-auto flex items-center justify-center gap-[2rem] text-[1.5rem]">
            <UserActions
              user_id={user.user_id}
              name={user.name}
              email={user.email}
              role={user.role}
              image={user.image}
              created_at={user.created_at}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
