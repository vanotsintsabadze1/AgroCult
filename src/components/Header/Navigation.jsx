function Navigation() {
  return (
    <nav className="hidden h-full w-[40rem] items-center justify-center gap-[3.5rem] lg:flex">
      <a className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" href="/">
        Home
      </a>
      <a className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" href="/">
        About
      </a>
      <a className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" href="/">
        Store
      </a>
      <a className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110" href="/">
        Contact
      </a>
    </nav>
  );
}

export default Navigation;
