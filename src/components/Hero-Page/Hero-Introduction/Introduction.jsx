function Introduction() {
  return (
    <main>
      <section className="flex w-full flex-col items-center gap-[1rem]">
        <h1 className="text-center text-[5rem] font-extrabold lg:text-[8rem]">Welcome to VUENNO</h1>
        <h3 className="mt-[2rem] text-center text-[1.8rem] font-bold uppercase lg:text-[3rem]">
          Your Digital One-Stop Shop for <br /> Everything
        </h3>
        <p className="mt-[.5rem] text-center text-[1.3rem] font-medium">A place where you can find whatever you want</p>
        <button className="mt-[1rem] flex h-[4rem] w-[15rem] items-center justify-center gap-[.5rem] bg-black duration-150 ease-out hover:scale-110">
          <img
            src="/images/icons/misc/shopping-bag.webp"
            className="mb-[.2rem] h-[1.5rem] w-[1.5rem]"
            alt="shopping-bag-icon"
          />
          <p className="font-bold uppercase text-white">Go To The Store</p>
        </button>
      </section>
    </main>
  );
}

export default Introduction;
