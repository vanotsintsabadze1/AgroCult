async function loginUser(username: string, password: string) {
  if (
    username === "" ||
    password === "" ||
    username === undefined ||
    username === null ||
    password === undefined ||
    password === null
  ) {
    return;
  } else {
    try {
      await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export { loginUser };
