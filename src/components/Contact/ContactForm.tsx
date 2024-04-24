import { lang } from "../../dict/dictionary";

interface Props {
  locale: string;
}

function ContactForm({ locale }: Props) {
  const word = lang[locale as keyof typeof lang];

  return (
    <div className="h-[55rem] w-full rounded-[.5rem] p-[2rem] shadow-soft sm:w-[40rem] md:w-[50rem] lg:h-[60rem] lg:w-[60rem] dark:bg-white">
      <form className="flex h-full w-full flex-col items-center justify-center gap-[3rem]">
        <h1 className="text-[2rem] font-bold lg:text-[2.5rem]">{word.contact.form.title}</h1>
        <div className="flex w-full flex-col items-center justify-center gap-[2rem]">
          <input
            required
            type="text"
            name="username"
            placeholder={word.contact.form.name}
            className="mt-[2rem] w-[25rem] border-2 border-b-gray-400 p-[1rem] text-[1.2rem] placeholder:text-gray-500 sm:w-[30rem] md:w-[32rem] lg:w-[35rem] lg:p-[1.5rem_1rem] lg:text-[1.3rem]"
          />
          <input
            required
            type="text"
            name="email"
            placeholder={word.contact.form.email}
            className="mt-[2rem] w-[25rem] border-2 border-b-gray-400 p-[1rem] text-[1.2rem] outline-none placeholder:text-gray-500 sm:w-[30rem] md:w-[32rem] lg:w-[35rem] lg:p-[1.5rem_1rem] lg:text-[1.3rem]"
          />
          <textarea
            required
            placeholder={word.contact.form.description}
            maxLength={100}
            className="mt-[1rem] w-[25rem] rounded-[.5rem] border-[.2rem] border-b-gray-400 p-[1rem] text-[1.2rem] placeholder:text-gray-500 sm:w-[30rem] md:w-[32rem] lg:w-[35rem] lg:p-[1.5rem_1rem] lg:text-[1.3rem]"
          />
        </div>
        <div className="mt-[2rem] flex flex-row gap-[2rem]">
          <label htmlFor="topicSelector" className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.4rem]">
            {word.contact.form.topicLabel}:
          </label>
          <select
            id="topicSelector"
            className="lg:text-[1.4rem]lg:w-[22rem] w-[15rem] truncate text-ellipsis text-[1.2rem] outline-none sm:text-[1.4rem] md:text-[1.4rem]"
          >
            <option>{word.contact.form.topics.billing}</option>
            <option>{word.contact.form.topics.transportation}</option>
            <option>{word.contact.form.topics.account}</option>
          </select>
        </div>
        <input
          type="submit"
          value={word.contact.form.submit}
          className="mt-[2rem] h-[4rem] w-[15rem] rounded-[.5rem] bg-black text-[1.3rem] font-medium text-white"
        />
      </form>
    </div>
  );
}

export default ContactForm;
