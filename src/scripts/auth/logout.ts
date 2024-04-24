export async function deleteUser() {
  try {
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
    });

    if (res.ok) {
      return res.json();
    }
  } catch (err) {
    console.error(err);
  }
}
