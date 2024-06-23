"use server";

import { sql } from "@vercel/postgres";

export async function assignTicket(id: number, stage: number) {
  let stageToAssign = stage === 1 ? "open" : stage === 2 ? "in progress" : "closed";

  try {
    await sql`UPDATE support_tickets SET stage = ${stageToAssign} WHERE id = ${id}`;

    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
