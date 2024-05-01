"use client";
import { useState } from "react";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";

interface Props {
  params: {
    locale: string;
  };
}

function Profile({ params: { locale } }: Props) {
  const [user, setUser] = useState({
    username: "Vano Tsintsabadze",
    email: "testmail@gmail.com",
    currentPassword: "",
    newPassword: "",
    newConfirmedPassword: "",
  });
  const word = useScopedI18n("profile");

  const inputFields = [
    {
      type: "text",
      value: user.username,
      updates: "username",
      placeholder: word("username"),
    },
    {
      type: "text",
      value: user.email,
      updates: "email",
      placeholder: word("email"),
    },
    {
      type: "password",
      value: user.currentPassword,
      updates: "currentPassword",
      placeholder: word("currentPassword"),
    },
    {
      type: "password",
      value: user.newPassword,
      updates: "newPassword",
      placeholder: word("newPassword"),
    },
    {
      type: "password",
      value: user.newConfirmedPassword,
      updates: "newConfirmedPassword",
      placeholder: word("confirmPassword"),
    },
  ];

  return (
    <main className="flex h-[75rem] w-full items-center justify-center p-[2rem] lg:h-[80rem]">
      <div className="w-full min-h-[65rem] shadow-soft rounded-[1rem] flex flex-col items-center p-[2rem] lg:w-[80rem] md:w-[65rem] sm:w-[40rem] dark:bg-white">
        <section className="w-full flex justify-center items-center p-[1rem] flex-col gap-[2rem] mt-[2rem]">
          <div className="w-[10rem] h-[10rem] relative">
            <Image src="/images/icons/profile-icons/user-profile.webp" fill alt="user-profile-icon" />
          </div>
          <h2 className="font-bold text-[2rem]">{word("title")}</h2>
        </section>
        <section className="w-full flex justify-center flex-grow">
          <form className="w-full p-[2rem] flex items-center flex-col gap-[3.5rem]">
            {inputFields.map((input, idx) => (
              <input
                key={idx}
                type={input.type}
                placeholder={input.placeholder}
                className="w-[28rem] h-[4rem] shadow-soft text-[1.3rem] p-[2rem_1rem] rounded-lg outline-none lg:w-[35rem] lg:h-[4.2rem] lg:pl-[1.3rem]"
                value={input.value}
                onChange={(e) => setUser({ ...user, [input.updates]: e.target.value })}
              />
            ))}
            <input
              type="submit"
              value={word("submit")}
              className="w-[15rem] h-[4rem] text-white bg-black rounded-lg uppercase tracking-wider font-semibold text-[1.2rem] cursor-pointer"
            />
          </form>
        </section>
      </div>
    </main>
  );
}

export default Profile;
