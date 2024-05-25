import Image from "next/image";
import { getScopedI18n } from "../../locales/server";

async function ContactDetails() {
  const word = await getScopedI18n("contact");

  return (
    <div className="flex h-[60rem] w-full flex-col divide-y-2 divide-black rounded-[.5rem]  shadow-soft sm:w-[40rem] md:w-[50rem] lg:h-[60rem] lg:w-[60rem] xl:w-[50rem] dark:bg-white">
      <section className="justify flex h-1/3 w-full p-[2rem]">
        <div className="flex h-full w-[20rem] items-center justify-center">
          <div className="relative h-[10rem] w-[10rem]">
            <Image src="/images/icons/contact-page-icons/contact-live.webp" alt="contact-live" fill />
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center gap-[1rem] p-[1rem] text-center">
          <p className="text-[1.2rem] font-semibold">{word("firstPhrase.main")}</p>
          <a href="/contact" className="text-[1.1rem] font-semibold text-blue-500 underline">
            {word("firstPhrase.sub")}
          </a>
        </div>
      </section>
      <section className="justify flex h-1/3 w-full p-[2rem]">
        <div className="flex flex-grow flex-col items-center justify-center gap-[1rem] p-[1rem] text-center">
          <p className="text-[1.2rem] font-semibold">{word("secondPhrase.main")}</p>
          <p className="text-[1.1rem] font-semibold ">{word("secondPhrase.sub")}</p>
        </div>
        <div className="flex h-full w-[20rem] items-center justify-center">
          <div className="relative h-[10rem] w-[10rem]">
            <Image src="/images/icons/contact-page-icons/contact-phone.webp" alt="contact-phone" fill />
          </div>
        </div>
      </section>
      <section className="justify flex h-1/3 w-full p-[2rem]">
        <div className="flex h-full w-[20rem] items-center justify-center">
          <div className="relative h-[10rem] w-[10rem]">
            <Image src="/images/icons/contact-page-icons/contact-mail.webp" alt="contact-phone" fill />
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center gap-[1rem] p-[1rem] text-center">
          <p className="text-[1.2rem] font-semibold">{word("thirdPhrase.main")}</p>
          <span className="mt-[.5rem] text-[1.2rem] font-medium">contact@vuenno.com</span>
        </div>
      </section>
    </div>
  );
}

export default ContactDetails;
