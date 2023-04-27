"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import SideBar from "./SideBar";

interface Iprops {
  children: React.ReactNode;
}
function Login({ children }: Iprops) {
  const { data } = useSession();
  console.log(data);
  if (data) {
    return (
      <div className="flex border w-full h-screen ">
        <SideBar />
        <div className="bg-[#343541]">{children}</div>
      </div>
    );
  } else {
    return (
      <div className="bg-[#11A37F] w-full h-screen d-flex flex-col gap-3 ">
        <img
          src="https://wpwww-prod.s3.us-west-2.amazonaws.com/uploads/sites/564/2023/04/ChatGPT.jpeg"
          alt=""
          width={300}
          height={300}
        />
        <button
          className=" font-bold text-3xl animate-pulse"
          onClick={() => signIn("google")}
        >
          Sing In To Use ChatCpt
        </button>
      </div>
    );
  }
}

export default Login;
