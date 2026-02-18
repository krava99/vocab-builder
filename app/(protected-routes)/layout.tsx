import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/sign-in");
  }

  console.log(token);

  try {
    const response = await fetch(
      `https://vocab-builder-backend.p.goit.global/api/users/current`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      redirect("/dictionary");
    }
  } catch (error) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}
