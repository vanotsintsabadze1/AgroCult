function ContactDetails() {
  return (
    <div className="shadow-soft flex h-[60rem] w-full flex-col divide-y-2 divide-black  rounded-[.5rem] sm:w-[40rem] md:w-[50rem] lg:h-[60rem] lg:w-[60rem] xl:w-[50rem]">
      <section className="justify flex h-1/3 w-full p-[2rem]">
        <div className="flex h-full w-[20rem] items-center justify-center">
          <img
            src="/images/icons/contact-page-icons/contact-live.webp"
            alt="contact-live"
            className="h-[10rem] w-[10rem]"
          />
        </div>
        <div className="flex flex-grow flex-col items-center justify-center gap-[1rem] p-[1rem] text-center">
          <p className="text-[1.2rem] font-semibold">Is it urgent? Have a live chat with our assistant!</p>
          <a href="/contact" className="text-[1.1rem] font-semibold text-blue-500 underline">
            Click Here
          </a>
        </div>
      </section>
      <section className="justify flex h-1/3 w-full p-[2rem]">
        <div className="flex flex-grow flex-col items-center justify-center gap-[1rem] p-[1rem] text-center">
          <p className="text-[1.2rem] font-semibold">Call us on our hotline and we'll answer you ASAP!</p>
          <p className="text-[1.1rem] font-semibold ">+(XXX)-XXX-XXX</p>
        </div>
        <div className="flex h-full w-[20rem] items-center justify-center">
          <img
            src="/images/icons/contact-page-icons/contact-phone.webp"
            alt="contact-phone"
            className="h-[10rem] w-[10rem]"
          />
        </div>
      </section>
      <section className="justify flex h-1/3 w-full p-[2rem]">
        <div className="flex h-full w-[20rem] items-center justify-center">
          <img
            src="/images/icons/contact-page-icons/contact-mail.webp"
            alt="contact-mail"
            className="h-[10rem] w-[10rem]"
          />
        </div>
        <div className="flex flex-grow flex-col items-center justify-center gap-[1rem] p-[1rem] text-center">
          <p className="text-[1.2rem] font-semibold">
            Do you want to discuss it over an email? <br /> Use the provided form!
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactDetails;
