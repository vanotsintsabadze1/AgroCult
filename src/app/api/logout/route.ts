export async function POST() {
  try {
    return Response.json({ message: "Success" });
  } catch (err) {
    return Response.json(JSON.stringify(err));
  }
}
