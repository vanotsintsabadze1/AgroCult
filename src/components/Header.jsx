function Header() {
  return (
    <header className="flex h-[6rem] w-full items-center justify-center">
      <div className="flex w-full items-center justify-center lg:justify-between">
        <div className="relative flex w-full items-center justify-center lg:w-[20rem]">
          <img
            src="/images/logos/main-logo-black.webp"
            alt="header-logo"
            className="h-[3.5rem] w-[3.5rem]"
          />
          <button className="absolute right-[2rem] top-[50%] translate-y-[-50%] lg:hidden">
            <img
              src="/images/icons/burger-menu.webp"
              className="h-[3rem] w-[2.2rem]"
              alt="burger-menu-icon"
            />
          </button>
        </div>
        <nav className="lg:npmflex hidden h-full w-[40rem] items-center justify-center gap-[3.5rem]">
          <a
            className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110"
            href="/"
          >
            Home
          </a>
          <a
            className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110"
            href="/"
          >
            About
          </a>
          <a
            className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110"
            href="/"
          >
            Store
          </a>
          <a
            className="easeOut text-[1.25rem] font-bold uppercase duration-200 hover:scale-110"
            href="/"
          >
            Contact
          </a>
        </nav>
        <div className="hidden h-full w-[20rem] items-center justify-center gap-[2.5rem] lg:flex">
          <button>
            <img
              src="/images/icons/theme-toggle.webp"
              alt="theme-toggle-icon"
              className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110"
            />
          </button>
          <button>
            <img
              src="/images/icons/user-profile.webp"
              alt="user-profile-icon"
              className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
