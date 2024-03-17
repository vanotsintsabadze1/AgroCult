function Footer() {
  return (
    <footer className="flex w-full flex-grow justify-center bg-footer p-[2rem_0] lg:p-[0rem]">
      <div className="flex w-full flex-col items-center lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-[5rem]">
        <section className="flex w-[32rem] justify-center md:w-[45rem] lg:h-[40rem] lg:w-[40rem] lg:items-center lg:justify-start lg:gap-[10rem]">
          <div className="flex h-[20rem] w-1/2 justify-center lg:w-auto">
            <div className="flex flex-col gap-[2.5rem]">
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
            <br /> All content, including text, graphics, logos, icons, images,
            and software, is the property of <b>VUENNO</b>. Unauthorized
            copying, distribution, modification, transmission, or publication of
            any content without permissionis strictly prohibited.
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
  );
}

export default Footer;
