import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="hidden h-full w-[40rem] items-center justify-center gap-[3.5rem] lg:flex">
      <Link className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" to="/">
        Home
      </Link>
      <Link className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" to="/">
        About
      </Link>
      <Link className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" to="/">
        Store
      </Link>
      <Link className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navigation;
