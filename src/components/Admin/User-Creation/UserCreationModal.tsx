import { createUserAction } from "../../../scripts/actions/admin-panel/createUserAction";
import Button from "./Button";

export default function UserCreationModal() {
  return (
    <form action={createUserAction} className="w-full py-[2rem] flex flex-col gap-[2rem] items-center mt-[1rem]">
      <input
        name="username"
        type="text"
        className="w-[30rem] h-[3.5rem] border-2 border-black text-[1.3rem] px-[1.4rem] rounded-[.3rem] py-[1.7rem]"
        placeholder="Username"
      />
      <input
        name="email"
        type="email"
        className="w-[30rem] h-[3.5rem] border-2 border-black text-[1.3rem] px-[1.4rem] rounded-[.3rem] py-[1.7rem]"
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        className="w-[30rem] h-[3.5rem] border-2 border-black text-[1.3rem] px-[1.4rem] rounded-[.3rem] py-[1.7rem]"
        placeholder="Password"
      />
      <div className="flex w-full justify-center items-center gap-[2rem]">
        <p className="text-[1.4rem] uppercase font-semibold tracking-wide ">Select Role:</p>
        <select className="px-[2rem] py-[.5rem] text-[1.2rem] rounded-[.4rem] border border-black" name="role">
          <option id="roleOptions">Member</option>
          <option id="roleOptions">Admin</option>
        </select>
      </div>
      <div className="w-full flex justify-center">
        <Button />
      </div>
    </form>
  );
}
