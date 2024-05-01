import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

async function Navigation() {
  const words = await getScopedI18n("navigation");

  const links = [
    {
      title: words("home"),
      path: "/",
    },
    {
      title: words("about"),
      path: "/",
    },
    {
      title: words("store"),
      path: "/",
    },
    {
      title: words("blogs"),
      path: "/blogs",
    },
    {
      title: words("profile"),
      path: "/profile",
    },
    {
      title: words("contact"),
      path: "/contact",
    },
  ];

  return (
    <nav className="hidden h-full items-center justify-center gap-[3.5rem] lg:flex">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={`${link.path}`}
          className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110 dark:text-dark-mode"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
