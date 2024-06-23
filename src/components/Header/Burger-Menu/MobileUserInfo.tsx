import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import { User2 } from "lucide-react";

export default async function MobileUserInfo() {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="mb-[1rem] mt-[7rem] w-full py-[1rem]">
      <div className="flex w-full items-center justify-end gap-[1rem] px-[1rem]">
        <div className="flex flex-col items-end justify-center gap-[.5rem]">
          <p className="w-[10rem] truncate text-right text-[1.3rem] font-medium text-white">
            {user ? user.nickname : "Guest"}
          </p>
          <a className="truncate text-[1.1rem] font-medium text-white" href={user ? "/profile" : "/api/auth/login"}>
            {user ? "View Profile" : "Log in"}
          </a>
        </div>
        <div className="relative flex h-[3rem] w-[3rem] items-center justify-center">
          {user ? (
            <Image src={user.picture} fill alt="image-avatar" className="rounded-[50%]" />
          ) : (
            <User2 size={30} color="white" />
          )}
        </div>
      </div>
    </div>
  );
}
