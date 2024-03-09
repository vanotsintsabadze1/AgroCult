import "./App.css";

function App() {
  return (
    <>
      {/* Header */}

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
              />
            </button>
          </div>
          <nav className="hidden h-full w-[40rem] items-center justify-center gap-[3.5rem] lg:flex">
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

      <main className="flex w-full flex-col items-center p-[4rem_0] lg:p-[12rem_0]">
        <div className="flex w-full flex-col items-center gap-[1rem]">
          <h1 className="text-center text-[5rem] font-extrabold lg:text-[8rem]">
            Welcome to VUENNO
          </h1>
          <h3 className="mt-[2rem] text-center text-[1.8rem] font-bold uppercase lg:text-[3rem]">
            Your Digital One-Stop Shop for <br /> Everything
          </h3>
          <p className="mt-[.5rem] text-center text-[1.3rem] font-medium">
            A place where you can find whatever you want
          </p>
          <button className="mt-[1rem] flex h-[4rem] w-[15rem] items-center justify-center gap-[.5rem] bg-black duration-150 ease-out hover:scale-110">
            <img
              src="/images/icons/shopping-bag.webp"
              className="mb-[.2rem] h-[1.5rem] w-[1.5rem]"
              alt="shopping-bag-icon"
            />
            <p className="font-bold uppercase text-white">Go To The Store</p>
          </button>
        </div>
      </main>

      <footer className="flex w-full flex-grow justify-center bg-footer p-[2rem_0] lg:p-[0rem]">
        <div className="flex w-full flex-col items-center lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-[5rem]">
          <section className="flex w-[32rem] justify-center md:w-[45rem] lg:h-[40rem] lg:w-[40rem] lg:items-center lg:justify-start lg:gap-[10rem]">
            <div className="flex h-[20rem] w-1/2 justify-center lg:w-auto">
              <div className="flex flex-col gap-[2.5rem]">
                <p className="text-[1.2rem] font-bold text-white">
                  Quick Links
                </p>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Store
                </a>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Your Store
                </a>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex h-[20rem] w-1/2 justify-center lg:w-auto">
              <div className="flex flex-col items-end gap-[2.5rem]">
                <p className="text-[1.2rem] font-bold text-white">Follow Us</p>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Facebook
                </a>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Instagram
                </a>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Twitter
                </a>
                <a
                  className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                  href="/"
                >
                  Tiktok
                </a>
              </div>
            </div>
          </section>
          <section className="mt-[2rem] flex w-full flex-col items-center gap-[1rem] lg:mt-0 lg:w-[60rem] lg:items-start lg:p-[2rem]">
            <img
              src="/images/logos/main-logo-white.webp"
              className="h-[10rem] w-[10rem]"
              alt="footer-logo"
            />
            <p className="mt-[1rem] w-[32rem] text-[1.2rem] leading-[2rem] text-gray-400 lg:w-[40rem] lg:text-[1.3rem] lg:leading-[2.2rem]">
              <span className="font-bold">
                © 2024 VUENNO. All Rights Reserved.
              </span>
              <br /> All content, including text, graphics, logos, icons,
              images, and software, is the property of <b>VUENNO</b>.
              Unauthorized copying, distribution, modification, transmission, or
              publication of any content without permissionis strictly
              prohibited.
            </p>
            <div className="flex w-[30rem] flex-col gap-[1rem] p-[2rem_0] lg:w-full lg:gap-[1.5rem]">
              <p className="text-[1.2rem] font-bold text-white">
                Subscribe to our newsletter
              </p>
              <div className="flex items-center">
                <input
                  className="h-[4rem] w-[25rem] rounded-bl-[.3rem] rounded-tl-[.3rem] border-[.1rem] p-[0_1rem]  text-[1.1rem] font-semibold outline-none placeholder:text-black lg:w-[30rem]"
                  placeholder="Email Address"
                />
                <button className="h-[4.1rem] w-[6rem] rounded-br-[.3rem] rounded-tr-[.3rem] bg-black text-[1.2rem] font-semibold text-white">
                  OK
                </button>
              </div>
            </div>
          </section>
        </div>
      </footer>

      {/* <header className="h-[6rem] w-full  items-center justify-center">
        <div className="lg:justify-between flex h-full w-full items-center sm:justify-center">
          <div className="lg:w-[20rem] lg:justify-start flex h-full w-full items-center justify-center">
            <img
              src="/images/logos/main-logo-black.webp"
              alt="header-logo"
              className="lg:h-[2.5rem] lg:w-[2.5rem] ml-[3rem] h-[3.5rem] w-[3.5rem] sm:ml-0"
            />
          </div>
          <div className="lg:flex h-full w-[20rem] items-center justify-center gap-[2.5rem] sm:hidden">
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

      {/* <footer className="flex hidden w-full flex-grow bg-footer p-[0_6rem]">
        <div className="flex w-full flex-grow justify-center">
          <div className="h-full w-[60rem] p-[2rem]">
            
          </div>
          <div className="flex h-full w-[60rem] justify-center">
            <div className="mt-[6rem] flex h-[20rem] w-1/2 flex-col gap-[2rem]">
              <p className="text-[1.2rem] font-bold text-white">Quick Links</p>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Home
              </a>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Store
              </a>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Create your store
              </a>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Contact
              </a>
            </div>
            <div className="mt-[6rem] flex h-[20rem] w-1/2 flex-col gap-[2rem]">
              <p className="text-[1.2rem] font-bold text-white">Follow Us</p>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Facebook
              </a>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Instagram
              </a>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Twitter
              </a>
              <a
                className="text-[1.1rem] font-semibold uppercase text-gray-400 underline"
                href="/"
              >
                Tiktok
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default App;
