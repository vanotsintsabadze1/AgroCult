"use server";

interface ManagementApiResponse {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
}

export async function getAuthToken() {
  const id = process.env.AUTH0_CLIENT_ID;
  const secret = process.env.AUTH0_CLIENT_SECRET;
  const url = process.env.AUTH0_ISSUER_BASE_URL;

  try {
    const res = await fetch(`${url}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: id,
        client_secret: secret,
        audience: `${url}/api/v2/`,
        grant_type: "client_credentials",
      }),
    });

    const data: ManagementApiResponse = await res.json();
    return data.access_token;
  } catch (err) {
    console.error(err);
    return "";
  }
}
