import { getAllUsers } from "../../../scripts/actions/admin-panel/getAllUsers";
import { User } from "../../../types/types";
import UserList from "./UserList";

export default async function UserTable() {
  let users: User[] = await getAllUsers();
  users = users.sort((a: { id: number }, b: { id: number }) => a.id - b.id);

  return (
    <table className="xs:w-full table-auto border-spacing-2 border border-black relative dark:bg-white">
      <thead>
        <tr className="border-b border-b-black text-[1.4rem]">
          <th className="border border-black px-[3rem] py-[2rem]">ID</th>
          <th className="border border-black px-[3rem] py-[2rem]">Username</th>
          <th className="border border-black px-[3rem] py-[2rem]">Email</th>
          <th className="border border-black px-[3rem] py-[2rem] xs:hidden md:hidden sm:hidden">Password</th>
          <th className="border border-black px-[3rem] py-[2rem] xs:hidden md:hidden sm:hidden">Role</th>
          <th className="border border-black px-[3rem] py-[2rem]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <UserList key={user.id} user={user} />;
        })}
      </tbody>
    </table>
  );
}
