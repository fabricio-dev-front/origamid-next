import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(resquest: NextRequest) {
  const { username, password } = await resquest.json();

  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "Login failed" }, { status: 401 });
  }

  const data = await response.json();

  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: true,
  });

  return Response.json({
    message: "Login successful",
    status: 200,
  });
}
