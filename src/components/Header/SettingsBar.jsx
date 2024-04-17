"use client";
import { deleteUser } from "./action";

function SettingsBar() {
  return (
    <>
      <button>
        <img
          src="/images/icons/header-icons/theme-toggle.webp"
          alt="theme-toggle-icon"
          className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110"
        />
      </button>
      <button>
        <img
          src="/images/icons/header-icons/user-profile.webp"
          alt="user-profile-icon"
          className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110"
        />
      </button>
      <button className="text-[1.4rem] font-bold" onClick={() => deleteUser()}>
        Log Out
      </button>
    </>
  );
}

export default SettingsBar;
