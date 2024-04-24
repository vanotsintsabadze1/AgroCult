import ContactDetails from "../../../../components/Contact/ContactDetails";
import ContactForm from "../../../../components/Contact/ContactForm";

interface Props {
  params: {
    locale: string;
  };
}

function Contact({ params: { locale } }: Props) {
  return (
    <main className="mt-[2rem] flex w-full items-center justify-center p-[4rem_0]">
      <section className="flex w-full flex-col items-center justify-center gap-[5rem] p-[2rem] xl:flex-row">
        <ContactDetails locale={locale} />
        <ContactForm locale={locale} />
      </section>
    </main>
  );
}

export default Contact;
