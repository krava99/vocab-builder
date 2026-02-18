import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { backendApi } from "@/app/lib/backendApi";

export async function GET() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const response = await backendApi.get("/users/current", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.data;

  return NextResponse.json(data);
}
