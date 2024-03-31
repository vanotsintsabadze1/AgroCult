import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    newPassword: "",
    newConfirmedPassword: "",
  });

  return (
    <main className="flex h-[60rem] w-full items-center justify-center p-[2rem]">
      <div className="flex h-[50rem] w-[80rem] flex-col justify-center rounded-2xl p-[2rem] shadow-soft lg:flex-row">
        <div className="flex h-full w-full justify-center lg:flex lg:w-[20rem] lg:items-center">
          <img src="/images/icons/profile-icons/profile-icon.webp" alt="" className="h-[12rem] w-[12rem]" />
        </div>
        <div className="lg mt-[1rem] flex h-full w-full xs:flex-grow sm:flex-grow md:flex-grow lg:w-auto">
          <form
            action=""
            className="flex h-full w-full flex-col items-center justify-center gap-[3.5rem] lg:w-[30rem] lg:items-start"
          >
            <input
              value={user.username}
              type="text"
              placeholder="Username"
              className="h-[4rem] w-[22rem] rounded-lg p-[1.2rem_.8rem] text-[1.3rem] shadow-soft"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
              value={user.email}
              type="text"
              placeholder="Email"
              className="h-[4rem] w-[22rem] rounded-lg p-[1.2rem_.8rem] text-[1.3rem] shadow-soft"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              value={user.newPassword}
              type="password"
              placeholder="New password"
              className="h-[4rem] w-[22rem] rounded-lg p-[1.2rem_.8rem] text-[1.3rem] shadow-soft"
              onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
            />
            <input
              value={user.newConfirmedPassword}
              type="password"
              placeholder="Confirm New password"
              className="h-[4rem] w-[22rem] rounded-lg p-[1.2rem_.8rem] text-[1.3rem] shadow-soft"
              onChange={(e) => setUser({ ...user, newConfirmedPassword: e.target.value })}
            />
            <div className="flex w-full items-center justify-center">
              <input
                type="submit"
                className="h-[3.5rem] w-[15rem] rounded-[2rem] bg-black font-bold text-white lg:h-[3.8rem] lg:text-[1.2rem]"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Profile;
