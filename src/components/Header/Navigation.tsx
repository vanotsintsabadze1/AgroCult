import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

interface Props {
  usedFor: string;
}

async function Navigation({ usedFor }: Props) {
  const word = await getScopedI18n("navigation");
  const desktop = "hidden h-full items-center justify-center gap-[3.5rem] lg:flex";
  const mobile = "flex flex-col lg:hidden w-full items-end px-[2rem] mt-[10rem] gap-[5rem] text-white";

  const links = [
    {
      title: word("home"),
      path: "/",
    },
    {
      title: word("about"),
      path: "/",
    },
    {
      title: word("store"),
      path: "/store",
    },
    {
      title: word("profile"),
      path: "/profile",
    },
    {
      title: word("contact"),
      path: "/contact",
    },
  ];

  return (
    <nav className={usedFor === "desktop" ? desktop : mobile}>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={`${link.path}`}
          className="easeOut lg:text-[1.25rem] text-[1.4rem] font-bold uppercase duration-200 hover:scale-110 dark:text-dark-mode"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
