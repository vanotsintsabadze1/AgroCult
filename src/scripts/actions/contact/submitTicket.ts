"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

export async function submitTicket(contactForm: ContactForm) {
  const session = await getSession();
  const user = session?.user;
  const { username, email, description, topic } = contactForm;

  if (!user) {
    return { error: "User not found", status: 400 };
  }

  const id = user?.sub;

  try {
    await sql`INSERT INTO support_tickets (issuer_id, issuer_name, issuer_email, topic, description, created_at) VALUES (${String(id)}, ${String(username)}, ${String(email)}, ${String(topic)}, ${String(description)}, CURRENT_TIMESTAMP)`;
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { error, status: 500 };
  }
}
