import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { api, ApiError } from "../../api";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const apiRes = await api.post("/users/signup", body);

    const { token } = apiRes.data;

    if (!token) {
      return NextResponse.json(
        { error: "Token not provided" },
        { status: 500 },
      );
    }

    // Кладемо JWT в httpOnly cookie
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true, // JS не бачить токен
      secure: true, // HTTPS only
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15, // 15 хвилин (приклад)
    });

    // Можеш повернути дані користувача або просто success
    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as ApiError;

    return NextResponse.json(
      {
        error: err.response?.data?.error ?? err.message,
      },
      { status: err.response?.status ?? 500 },
    );
  }
}
