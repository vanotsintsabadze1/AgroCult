import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex h-[6rem] w-full items-center justify-center">
      <div className="flex w-full items-center justify-center lg:justify-between">
        <div className="relative flex w-full items-center justify-center lg:w-[20rem]">
          <img src="/images/logos/main-logo-black.webp" alt="header-logo" className="h-[3.5rem] w-[3.5rem]" />
          <button className="absolute right-[2rem] top-[50%] translate-y-[-50%] lg:hidden">
            <img
              src="/images/icons/header-icons/burger-menu.webp"
              className="h-[3rem] w-[2.2rem]"
              alt="burger-menu-icon"
            />
          </button>
        </div>
        <Navigation />
        <div className="hidden h-full w-[20rem] items-center justify-center gap-[2.5rem] lg:flex">
          <button>
            <img
              src="/images/icons/header-icons/theme-toggle.webp"
              alt="theme-toggle-icon"
              className="easeOut h-[2.2rem] w-[2.2rem] duration-200 hover:scale-110"
            />
          </button>
          <button>
            <img
              src="/images/icons/header-icons/user-profile.webp"
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
