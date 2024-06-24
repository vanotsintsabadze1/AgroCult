import Link from "next/link";
import { getScopedI18n } from "@/locales/server";
import { getSession } from "@auth0/nextjs-auth0";

interface Props {
  className: string;
}

async function Navigation({ className }: Props) {
  const word = await getScopedI18n("navigation");
  const word_t = await getScopedI18n("header.dropDown");
  const session = await getSession();

  const user = session?.user;

  const isAdmin = user?.role.includes("Admin");

  const links = [
    {
      title: word("home"),
      path: "/",
    },
    {
      title: word("store"),
      path: "/store",
    },
    {
      title: word("blogs"),
      path: "/blogs",
    },
    {
      title: word("contact"),
      path: "/contact",
    },
  ];

  return (
    <nav className={className}>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.path}
          className="easeOut font-medium uppercase duration-200 hover:scale-110 dark:text-dark-mode "
        >
          {link.title}
        </Link>
      ))}
      {isAdmin && (
        <Link
          href="/admin"
          className="easeOut font-medium uppercase duration-200 hover:scale-110 lg:hidden dark:text-dark-mode "
        >
          {word_t("admin")}
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
