import { NextResponse } from "next/server";
import { api } from "../../api";

export async function POST(req: Request) {
  const body = await req.json();
  const { data } = await api.post("/users/signin", body);

  const res = NextResponse.json({
    email: data.email,
    name: data.name,
  });

  res.cookies.set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return res;
}
