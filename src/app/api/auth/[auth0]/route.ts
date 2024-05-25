import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/api/login-user",
    authorizationParams: {
      prompt: "login", // Forces the user to always log in
    },
  }),
});
