import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return <>{children}</>;
  }

  try {
    const response = await fetch(
      `https://vocab-builder-backend.p.goit.global/api/users/current`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.ok) {
      redirect("/dictionary"); // або куди треба після логіну
    }
  } catch {
    return <>{children}</>;
  }

  return <>{children}</>;
}
