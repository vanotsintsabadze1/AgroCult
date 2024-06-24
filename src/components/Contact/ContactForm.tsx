"use client";

import { useScopedI18n } from "@/locales/client";
import { submitTicket } from "@/scripts/actions/contact/submitTicket";
import toast from "react-hot-toast";
import { z } from "zod";
import { useRef, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ContactForm() {
  const word = useScopedI18n("contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [topic, setTopic] = useState("purchaseExclusive");
  const session = useUser();

  const schema = z.object({
    username: z
      .string()
      .min(3, "You need to at least write 3 characters")
      .max(50, "You can't write more than 50 characters"),
    email: z.string().email("You need to write a valid email address"),
    description: z.string().min(50, "You need to write at least 50 characters"),
    option: z.any(),
  });

  async function submitForm(formData: FormData) {
    if (!session.user) {
      window.location.href = "/api/auth/login";
      return;
    }

    const contactForm = {
      username: formData.get("username"),
      email: formData.get("email"),
      description: formData.get("description"),
      topic: topic,
    };

    const result = schema.safeParse(contactForm);

    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => (errorMessage += issue.message + ";" + "\n"));
      toast.error(errorMessage);
      return;
    }

    const res = await submitTicket(contactForm as ContactForm);
    if (res.status === 200) {
      toast.success("Ticket submitted successfully");
    }

    formRef.current?.reset();
  }

  return (
    <div className="shadow-soft h-[55rem] w-full rounded-[.5rem] bg-white p-[2rem] shadow-md sm:w-[40rem] md:w-[50rem] lg:h-[60rem] lg:w-[60rem] dark:bg-dark-secondary">
      <form
        className="flex h-full w-full flex-col items-center justify-center gap-[3rem]"
        action={submitForm}
        ref={formRef}
      >
        <h1 className="text-[2rem] font-bold lg:text-[2.5rem] dark:text-white">{word("form.title")}</h1>
        <div className="flex w-full flex-col items-center justify-center gap-[2rem]">
          <input
            type="text"
            name="username"
            placeholder={word("form.name")}
            className="mt-[2rem] w-[25rem] rounded-lg border-2 border-b-gray-400 p-[1rem] text-[1.2rem] placeholder:text-gray-500 sm:w-[30rem] md:w-[32rem] lg:w-[35rem] lg:p-[1.5rem_1rem] lg:text-[1.3rem]"
          />
          <input
            type="text"
            name="email"
            placeholder={word("form.email")}
            className="mt-[2rem] w-[25rem] border-2 border-b-gray-400 p-[1rem] text-[1.2rem] outline-none placeholder:text-gray-500 sm:w-[30rem] md:w-[32rem] lg:w-[35rem] lg:p-[1.5rem_1rem] lg:text-[1.3rem]"
          />
          <textarea
            placeholder={word("form.description")}
            maxLength={100}
            name="description"
            className="mt-[1rem] h-[8rem] w-[25rem] resize-none overflow-y-auto rounded-[.5rem] border-[.2rem] border-b-gray-400 p-[1rem] text-[1.2rem] placeholder:text-gray-500 sm:w-[30rem] md:w-[32rem] lg:w-[35rem] lg:p-[1.5rem_1rem] lg:text-[1.3rem]"
          />
        </div>
        <div className="mt-[2rem] flex flex-row items-center gap-[2rem]">
          <label
            htmlFor="topicSelector"
            className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.4rem] dark:text-white"
          >
            {word("form.topicLabel")}:
          </label>
          <select
            id="topicSelector"
            className="w-[15rem] truncate text-ellipsis rounded-lg bg-gray-200 px-[1rem] py-[1rem] text-[1.2rem] shadow-md outline-none sm:text-[1.4rem] md:text-[1.4rem] lg:w-[22rem] lg:text-[1.4rem]"
            name="option"
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="Exclusive Product">{word("form.topics.purchaseExclusive")}</option>
            <option value="Billing">{word("form.topics.billing")}</option>
            <option value="Transportation">{word("form.topics.transportation")}</option>
            <option value="Account">{word("form.topics.account")}</option>
            <option value="Other">{word("form.topics.other")}</option>
          </select>
        </div>
        <input
          type="submit"
          value={word("form.submit")}
          className="mt-[2rem] h-[4rem] w-[15rem] cursor-pointer rounded-[.5rem] bg-green-600 text-[1.3rem] font-medium text-white shadow-sm"
        />
      </form>
    </div>
  );
}
