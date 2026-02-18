"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginRequest, loginUser } from "../../lib/backendApi";
import Image from "next/image";

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as LoginRequest;

      const res = await loginUser(formValues);

      if (res) {
        router.push("/dictionary");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex gap-10">
      <div className="px-16 py-12 bg-[#85AA9F1A] rounded-4xl w-157">
        <h2 className="text-4xl font-bold mb-5 font-myfont">Login</h2>

        <p className="mb-8 text-xl">
          Please enter your login details to continue using our service:
        </p>

        <form className="flex flex-col" action={handleSubmit}>
          <TextField
            className="!rounded-2xl !mb-4"
            variant="outlined"
            name="email"
            placeholder="Email"
          />

          <TextField
            className="!rounded-2xl !mb-8"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Password"
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <Button
            className="!rounded-4xl !py-4 !bg-[#85AA9F] !mb-4"
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>

        <Link
          href="/sign-up"
          className="block text-center text-sm font-bold text-gray-500 underline"
        >
          Register
        </Link>
      </div>
      <div>
        <Image
          className="mb-4"
          src="/HomeImg.png"
          alt="Home Image"
          width={498}
          height={435}
        />
        <p className="text-center text-xm  text-gray-500">
          Word · Translation · Grammar · Progress
        </p>
      </div>
    </div>
  );
};

export default SignIn;
