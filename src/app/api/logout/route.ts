import { cookies } from "next/headers";

export async function POST() {
  try {
    cookies().delete("user");
    return Response.json({ message: "Success" });
  } catch (err) {
    return Response.json(JSON.stringify(err));
  }
}
