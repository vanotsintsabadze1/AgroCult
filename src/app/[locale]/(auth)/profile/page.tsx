import ProfileCard from "@/components/Profile/ProfileCard";


export default async function Profile() {
  return (
    <main className="flex h-[75rem] w-full items-center justify-center p-[2rem] lg:h-[80rem]">
      <ProfileCard />
    </main>
  );
}

{
  /* <input
  key={idx}
  type={input.type}
  placeholder={input.placeholder}
  className="w-[28rem] h-[4rem] shadow-soft text-[1.3rem] p-[2rem_1rem] rounded-lg outline-none lg:w-[35rem] lg:h-[4.2rem] lg:pl-[1.3rem]"
  value={input.value}
  onChange={(e) => setUser({ ...user, [input.updates]: e.target.value })}
/>; */
}
