import { createUserAction } from "../../../scripts/actions/admin-panel/createUser";
import Button from "./Button";

export default function UserCreationModal() {
  return (
    <form action={createUserAction} className="mt-[1rem] flex w-full flex-col items-center gap-[2rem] py-[2rem]">
      <input
        name="username"
        type="text"
        className="h-[3.5rem] w-[30rem] rounded-[.3rem] border-2 border-black px-[1.4rem] py-[1.7rem] text-[1.3rem]"
        placeholder="Username"
      />
      <input
        name="email"
        type="email"
        className="h-[3.5rem] w-[30rem] rounded-[.3rem] border-2 border-black px-[1.4rem] py-[1.7rem] text-[1.3rem]"
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        className="h-[3.5rem] w-[30rem] rounded-[.3rem] border-2 border-black px-[1.4rem] py-[1.7rem] text-[1.3rem]"
        placeholder="Password"
      />
      <div className="flex w-full items-center justify-center gap-[2rem]">
        <p className="text-[1.4rem] font-semibold uppercase tracking-wide ">Select Role:</p>
        <select className="rounded-[.4rem] border border-black px-[2rem] py-[.5rem] text-[1.2rem]" name="role">
          <option id="roleOptions">Member</option>
          <option id="roleOptions">Admin</option>
        </select>
      </div>
      <div className="flex w-full justify-center">
        <Button />
      </div>
    </form>
  );
}
