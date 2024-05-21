import { User } from "../../../types/types";
import { useState } from "react";
import { editUserAction } from "../../../scripts/actions/admin-panel/editUserAction";
import { useRouter } from "next/navigation";

interface Props {
  user: User;
  closeEditModal: () => void;
}

export default function UserEditModal({ user, closeEditModal }: Props) {
  const [username, setUsername] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [role, setRole] = useState(user.role);
  const router = useRouter();

  async function editUser(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    await editUserAction(user.id, username, email, password, role);
    closeEditModal();
    router.refresh();
  }

  return (
    <form className="w-full py-[2rem] flex flex-col gap-[2rem] items-center mt-[1rem]">
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className="w-[30rem] h-[3.5rem] border-2 border-black text-[1.3rem] px-[1.4rem] rounded-[.3rem] py-[1.7rem]"
        placeholder="Username"
      />
      <input
        name="email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-[30rem] h-[3.5rem] border-2 border-black text-[1.3rem] px-[1.4rem] rounded-[.3rem] py-[1.7rem]"
        placeholder="Email"
      />
      <input
        name="password"
        value={password}
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        className="w-[30rem] h-[3.5rem] border-2 border-black text-[1.3rem] px-[1.4rem] rounded-[.3rem] py-[1.7rem]"
        placeholder="Password"
      />
      <div className="flex w-full justify-center items-center gap-[2rem]">
        <p className="text-[1.4rem] uppercase font-semibold tracking-wide">Select Role:</p>
        <select
          value={role}
          className="px-[2rem] py-[.5rem] text-[1.2rem] rounded-[.4rem] border border-black"
          name="role"
          onChange={(e) => setRole(e.target.value)}
        >
          <option id="roleOptions">Member</option>
          <option id="roleOptions">Admin</option>
        </select>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          onClick={editUser}
          className="w-[15rem] h-[3.5rem] bg-black rounded-[.5rem] shadow-sm font-bold text-white text-[1.2rem] tracking-wide"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
