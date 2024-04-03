import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Store",
    path: "/",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
];

function Navigation() {
  return (
    <nav className="hidden h-full w-[40rem] items-center justify-center gap-[3.5rem] lg:flex">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.path}
          className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
