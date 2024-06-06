import { useEffect, useState } from "react";
import { deleteUser } from "../../../scripts/actions/admin-panel/deleteUser";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

interface ModalMessage {
  type: string;
  message: string;
}

interface Props {
  users: User[];
  search: string;
  setShouldLoadingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalMessage: React.Dispatch<React.SetStateAction<ModalMessage>>;
}

export default function UserList({ users, search, setShouldLoadingModalOpen, setModalMessage }: Props) {
  const [userList, setUserList] = useState<User[]>(users);
  const router = useRouter();
  const session = useUser();

  useEffect(() => {
    if (search === "") {
      if (userList.length !== users.length) {
        setUserList(users);
      }
    }

    if (search !== "") {
      const filteredUsers = users.filter((user) => user.name.includes(search));
      setUserList(filteredUsers);
    }
  }, [search]);

  useEffect(() => {
    console.log(userList);
  }, [userList]);

  function handleUserDelete(id: string) {
    if (session) {
      setShouldLoadingModalOpen(true);
      if (session.user?.sub === id) {
        setModalMessage({ type: "error", message: "You cannot delete yourself!" });
        setTimeout(() => {
          setShouldLoadingModalOpen(false);
        }, 3500);
        return;
      }

      const filteredList = userList.filter((user) => user.user_id !== id);
      setUserList(filteredList);
      setModalMessage({ type: "success", message: "User deleted successfully!" });
      deleteUser(id);
      router.refresh();
    }
  }

  return (
    <>
      <div className="relative mt-[2rem] flex w-full flex-col gap-[1rem] overflow-x-auto pr-[2rem]">
        <div className="flex w-[75rem] px-[1rem] text-[1.3rem] font-medium text-gray-400">
          <div className="w-[15rem]">User ID</div>
          <div className="w-[15rem]">Name</div>
          <div className="w-[15rem]">Email Addr.</div>
          <div className="flex w-[13rem] justify-center">Role</div>
          <div className="ml-[2rem] flex flex-grow items-center justify-center">Action</div>
        </div>
        {userList.map((user) => (
          <div
            key={user.user_id}
            className="flex w-[75rem] items-center gap-[5rem] overflow-hidden rounded-lg border border-gray-300 bg-white px-[1rem] py-[1rem] text-[1.5rem] shadow-md"
          >
            <div className="w-[10rem]">
              <p className="truncate">{user.user_id}</p>
            </div>
            <div className="w-[10rem]">
              <p className="truncate">{user.name}</p>
            </div>
            <div className="w-[15rem] flex-grow">
              <p className="truncate ">{user.email}</p>
            </div>
            <div className="w-[5rem] flex-grow">
              <p className="truncate ">{user.role}</p>
            </div>
            <div className="flex w-[15rem] flex-grow justify-end gap-[1rem]">
              <button className="rounded-lg bg-green-500 px-[1rem] py-[.5rem] text-white">Edit</button>
              <button
                className="rounded-lg bg-red-500 px-[1rem] py-[.5rem] text-white"
                onClick={() => handleUserDelete(user.user_id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
