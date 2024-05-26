"use client";
export default function LoginButton() {
  return (
    <button className="flex h-[3.5rem] items-center justify-center gap-[1rem] rounded-[.5rem] bg-white text-[1.5rem] font-bold  shadow-soft">
      <a href="/api/auth/login" className="w-full h-full flex items-center justify-center px-[2rem]">
        Log In
      </a>
    </button>
  );
}
