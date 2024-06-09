"use server";

import { sql } from "@vercel/postgres";
import { getSession } from "@auth0/nextjs-auth0";

export async function addLog(type: string, description: string) {
  const session = await getSession();

  let performerName, performerId;

  if (session) {
    performerId = session?.user.sub;
    performerName = session?.user.nickname;
  }

  if (!type || !description) {
    return;
  }

  try {
    await sql`INSERT INTO action_logs (performer_name, performer_id, type, description) VALUES (${String(performerName)},${String(performerId)},${String(type)}, ${String(description)})`;
    return { message: "Success", status: 200 };
  } catch (error) {
    console.error(error);
    return { error, status: 200 };
  }
}
