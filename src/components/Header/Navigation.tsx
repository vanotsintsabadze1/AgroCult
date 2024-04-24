import Link from "next/link";
import { lang } from "../../dict/dictionary";

interface Props {
  locale: string;
}

function Navigation({ locale }: Props) {
  const words = lang[locale as keyof typeof lang];

  const links = [
    {
      title: words.navigation.home,
      path: "/",
    },
    {
      title: words.navigation.about,
      path: "/",
    },
    {
      title: words.navigation.store,
      path: "/",
    },
    {
      title: words.navigation.blogs,
      path: "/blogs",
    },
    {
      title: words.navigation.profile,
      path: "/profile",
    },
    {
      title: words.navigation.contact,
      path: "/contact",
    },
  ];

  return (
    <nav className="hidden h-full items-center justify-center gap-[3.5rem] lg:flex">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={`/${locale}${link.path}`}
          className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110 dark:text-dark-mode"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
