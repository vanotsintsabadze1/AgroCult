"use client";
import Image from "next/image";
import Link from "next/link";
import { loginUser } from "../../scripts/auth/login";
import { useState } from "react";
import { lang } from "../../dict/dictionary";
import { usePathname } from "next/navigation";

export default function Card() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const path = usePathname().split("/")[1];
  const words = lang[path as keyof typeof lang];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("something");
    loginUser(username, password).then(() => window.location.reload());
  }

  return (
    <div className="xs:w-full w-[40rem] shadow-xl rounded-2xl bg-white z-[4] lg:w-[60rem] lg:p-[3rem_0]">
      <form onSubmit={handleSubmit}>
        <section className="w-full flex justify-center p-[1rem]">
          <Image src="/images/vector-images/vector-login.webp" width={220} height={220} alt="login-icon" priority />
        </section>
        <section className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center">
            <h2 className="font-bold tracking-wide flex text-[2rem]">{words?.login.login}</h2>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[3.5rem] p-[1rem]">
            <input
              className="p-[1.5rem_1.2rem] border-b-black border-b-2 text-[1.3rem] placeholder:uppercase w-[30rem] outline-none"
              placeholder={words?.login.username}
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              className="p-[1.5rem_1.2rem] border-b-black border-b-2 text-[1.3rem] placeholder:uppercase w-[30rem] outline-none"
              placeholder={words?.login.password}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-[30rem] flex items-center justify-between">
              <div className="flex items-center gap-[.5rem]">
                <input type="checkbox" className="w-[1.5rem] h-[1.5rem] cursor-pointer lg:w-[1.3rem] lg:h-[1.3rem]" />
                <p className="text-[1.3rem] font-medium lg:text-[1.2rem]">Remember Me</p>
              </div>
              <div>
                <Link href="/forgotPassword" className="text-blue-500 underline text-[1.3rem] lg:text-[1.2rem]">
                  {words?.login.forgotPassword}
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Link href="/signUp" className="text-blue-500 underline text-[1.3rem] lg:text-[1.2rem]">
                {words?.login.createAccount}
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-[2rem] gap-[3rem]">
          <input
            type="submit"
            value={words?.login.submit}
            className="w-[16rem] h-[4.2rem] rounded-md bg-black text-white font-bold uppercase tracking-wider text-[1.1rem] outline-none cursor-pointer"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />
          <button className="w-[25rem] p-[2rem] h-[3.5rem] shadow-soft flex items-center justify-center gap-[1rem] text-[1.3rem] font-semibold rounded-md">
            <Image src="/images/icons/social-icons/google.webp" width={20} height={20} alt="google-icon" />
            <p>{words?.login.logInWithGoogle}</p>
          </button>
          <button className="w-[25rem] p-[2rem] h-[3.5rem] shadow-soft flex items-center justify-center gap-[1rem] text-[1.3rem] font-semibold rounded-md">
            <Image src="/images/icons/social-icons/facebook.webp" width={20} height={20} alt="google-icon" />
            <p>{words?.login.logInWithFacebook}</p>
          </button>
        </section>
      </form>
    </div>
  );
}
