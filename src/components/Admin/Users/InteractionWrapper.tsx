import SearchBar from "./SearchBar";
import UserList from "./UserList";

interface Props {
  users: UserDB[];
}

export default function InteractionWrapper({ users }: Props) {
  return (
    <>
      <div className="flex w-full flex-col gap-[1rem] pl-[6rem]">
        <SearchBar />
        <UserList users={users} />
      </div>
    </>
  );
}
