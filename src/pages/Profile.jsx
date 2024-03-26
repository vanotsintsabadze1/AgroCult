function Profile() {
  return (
    <main className="flex h-[60rem] w-full items-center justify-center p-[2rem]">
      <div className="flex h-[50rem] w-[80rem] flex-col justify-center rounded-2xl p-[2rem] shadow-soft lg:flex-row">
        <div className="flex h-full w-full justify-center lg:flex lg:w-[20rem] lg:items-center">
          <img src="/images/icons/profile-icons/profile-icon.webp" alt="" className="h-[12rem] w-[12rem]" />
        </div>
        <div className="lg mt-[1rem] flex h-full w-full xs:flex-grow sm:flex-grow md:flex-grow lg:w-auto">
          <form
            action=""
            className="flex h-full w-full flex-col items-center justify-center gap-[3.5rem] lg:w-[30rem] lg:items-start"
          >
            <div className="flex flex-col gap-[2rem]">
              <p className="text-[1.3rem]">
                <b>Name:</b>: Vano
              </p>
              <p className="text-[1.3rem]">
                <b>Lastname:</b>: Tsintsabadze
              </p>
              <p className="text-[1.3rem]">
                <b>Email:</b>: dummyemail@gmail.com
              </p>
            </div>
            <input
              type="password"
              placeholder="New password"
              className="h-[4rem] w-[22rem] rounded-lg p-[1.2rem_.8rem] text-[1.3rem] shadow-soft"
            />
            <input
              type="password"
              placeholder="Confirm New password"
              className="h-[4rem] w-[22rem] rounded-lg p-[1.2rem_.8rem] text-[1.3rem] shadow-soft"
            />
            <div className="flex w-full items-center justify-center">
              <input
                type="submit"
                className="h-[3.5rem] w-[15rem] rounded-[2rem] bg-black font-bold text-white lg:h-[3.8rem] lg:text-[1.2rem]"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Profile;
