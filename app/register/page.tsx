// "use client";

import { TextField } from "@mui/material";
import Image from "next/image";

export default function Register() {
  return (
    <div className="flex">
      <div className="px-16 py-12  bg-[#e0f3ed]  rounded-4xl w-157  ">
        <h2 className="text-4xl font-bold mb-5">Register</h2>
        <p className="mb-8">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <form className=" flex flex-col" action="">
          {/* <input type="text" placeholder="Name" />  */}
          <TextField
            className="rounded-2xl mb-4"
            variant="outlined"
            type="text"
            placeholder="Name"
          />
          <TextField
            className="rounded-2xl mb-4"
            variant="outlined"
            type="email"
            placeholder="Email"
          />
          <TextField
            className="rounded-2xl mb-8"
            variant="outlined"
            type="password"
            placeholder="Password"
            slotProps={{
              input: {
                sx: { padding: "16px" },
              },
            }}
          />
        </form>
        <div className="flex flex-col">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <div>
        <Image src="/HomeImg.png" alt="Home Image" width={498} height={435} />
      </div>
    </div>
  );
}
