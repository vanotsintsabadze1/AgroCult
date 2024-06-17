import { Store, BookOpenCheck, FileText } from "lucide-react";
import ProfileUserID from "./ProfileUserID";
import ProfileUserInformation from "./ProfileUserInformation";
import ProfileUserAddress from "./ProfileUserAddress";
import ProfileUserImage from "./ProfileUserImage";

interface Props {
  user: UserDB;
}

export default async function ProfileCard({ user }: Props) {
  return (
    <div className="flex w-[40rem] flex-col items-center rounded-[2rem] py-[4rem] md:w-[50rem] xs:w-full">
      <ProfileUserImage user={user} />
      <ProfileUserInformation username={user.name} userId={user.user_id} email={user.email} />
      <div className="flex w-full items-center justify-center">
        <p className="text-[1.2rem] font-light">{user.role} </p>
      </div>
      <ProfileUserID userId={user.user_id} />
      <div className="mt-[4rem] flex flex-wrap items-center justify-center gap-[6rem] gap-y-[5rem]">
        <div className="flex flex-col items-center gap-[.5rem]">
          <Store size={30} />
          <p className="text-[1.4rem] font-medium">0 Items Bought</p>
        </div>
        <div className="flex flex-col items-center gap-[.5rem]">
          <FileText size={30} />
          <p className="text-[1.4rem] font-medium">0 Open Tickets</p>
        </div>
        <div className="flex flex-col items-center gap-[.5rem]">
          <BookOpenCheck size={30} />
          <p className="text-[1.4rem] font-medium">0 Created Blogs</p>
        </div>
      </div>
      {user.extra_details && <ProfileUserAddress extra_details={user.extra_details} userId={user.user_id} />}
    </div>
  );
}
