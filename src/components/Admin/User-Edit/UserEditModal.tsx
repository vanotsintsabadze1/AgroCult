import { useState } from "react";
import { editUser } from "../../../scripts/actions/admin-panel/editUser";
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

  async function handleEditUser(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    await editUser(user.id, username, email, password, role);
    closeEditModal();
    router.refresh();
  }

  return (
    <form className="mt-[1rem] flex w-full flex-col items-center gap-[2rem] py-[2rem]">
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className="h-[3.5rem] w-[30rem] rounded-[.3rem] border-2 border-black px-[1.4rem] py-[1.7rem] text-[1.3rem]"
        placeholder="Username"
      />
      <input
        name="email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="h-[3.5rem] w-[30rem] rounded-[.3rem] border-2 border-black px-[1.4rem] py-[1.7rem] text-[1.3rem]"
        placeholder="Email"
      />
      <input
        name="password"
        value={password}
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        className="h-[3.5rem] w-[30rem] rounded-[.3rem] border-2 border-black px-[1.4rem] py-[1.7rem] text-[1.3rem]"
        placeholder="Password"
      />
      <div className="flex w-full items-center justify-center gap-[2rem]">
        <p className="text-[1.4rem] font-semibold uppercase tracking-wide">Select Role:</p>
        <select
          value={role}
          className="rounded-[.4rem] border border-black px-[2rem] py-[.5rem] text-[1.2rem]"
          name="role"
          onChange={(e) => setRole(e.target.value)}
        >
          <option id="roleOptions">Member</option>
          <option id="roleOptions">Admin</option>
        </select>
      </div>
      <div className="flex w-full justify-center">
        <button
          type="submit"
          onClick={handleEditUser}
          className="h-[3.5rem] w-[15rem] rounded-[.5rem] bg-black text-[1.2rem] font-bold tracking-wide text-white shadow-sm"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
