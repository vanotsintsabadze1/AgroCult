"use client";
import Image from "next/image";
import Link from "next/link";
import { loginUser } from "../../app/login/action";

export default function Card() {
  return (
    <div className="xs:w-full w-[40rem] shadow-xl rounded-2xl bg-white z-[4] lg:w-[60rem] lg:p-[3rem_0]">
      <form action={loginUser}>
        <section className="w-full flex justify-center p-[1rem]">
          <div className="w-[22rem] h-[22em] relative">
            <Image src="/images/vector-images/vector-login.webp" fill />
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center">
            <h2 className="font-bold tracking-wide flex text-[2rem]">Log In</h2>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[3.5rem] p-[1rem]">
            <input
              className="p-[1.5rem_1.2rem] border-b-black border-b-2 text-[1.3rem] placeholder:uppercase w-[30rem] outline-none"
              placeholder="Username"
              type="text"
              name="username"
            />
            <input
              className="p-[1.5rem_1.2rem] border-b-black border-b-2 text-[1.3rem] placeholder:uppercase w-[30rem] outline-none"
              placeholder="Password"
              type="password"
              name="password"
            />
            <div className="w-[30rem] flex items-center justify-between">
              <div className="flex items-center gap-[.5rem]">
                <input type="checkbox" className="w-[1.5rem] h-[1.5rem] cursor-pointer lg:w-[1.3rem] lg:h-[1.3rem]" />
                <p className="text-[1.3rem] font-medium lg:text-[1.2rem]">Remember Me</p>
              </div>
              <div>
                <Link href="/forgotPassword" className="text-blue-500 underline text-[1.3rem] lg:text-[1.2rem]">
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Link href="/signUp" className="text-blue-500 underline text-[1.3rem] lg:text-[1.2rem]">
                Don't have an account?
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-[2rem] gap-[3rem]">
          <input
            type="Submit"
            className="w-[16rem] h-[4.2rem] rounded-md bg-black text-white font-bold uppercase tracking-wider text-[1.1rem] outline-none cursor-pointer"
          />
          <button className="w-[25rem] p-[2rem] h-[3.5rem] shadow-soft flex items-center justify-center gap-[1rem] text-[1.3rem] font-semibold rounded-md">
            <Image src="/images/icons/social-icons/google.webp" width={20} height={20} />
            <p>Log In With Google</p>
          </button>
          <button className="w-[25rem] p-[2rem] h-[3.5rem] shadow-soft flex items-center justify-center gap-[1rem] text-[1.3rem] font-semibold rounded-md">
            <Image src="/images/icons/social-icons/facebook.webp" width={20} height={20} />
            <p>Log In With Google</p>
          </button>
        </section>
      </form>
    </div>
  );
}
