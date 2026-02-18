// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    // Парсимо тіло запиту
    const body = await req.json();

    // Виконуємо запит до бекенду
    const apiRes = await api.post("/users/signin", body);

    // Беремо токен з body
    const { token } = apiRes.data;

    if (!token) {
      return NextResponse.json(
        { error: "Token not provided" },
        { status: 500 },
      );
    }

    // Кладемо JWT в httpOnly cookie
    const cookieStore = cookies();
    (await cookieStore).set("accessToken", token, {
      httpOnly: true, // JS не бачить токен
      secure: true, // HTTPS only
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15, // 15 хвилин життя токена (приклад)
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
