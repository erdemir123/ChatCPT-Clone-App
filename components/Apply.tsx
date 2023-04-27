
import React from "react";
import SideBar from "./SideBar";
import { useSession } from "next-auth/react";
import Login from "./Login";
import { getServerSession } from "next-auth";

async function Apply({ children }: { children: React.ReactNode }) {
  const session =await getServerSession()

  return (
    <div className="w-full h-[100vh] flex ">
      
    </div>
  );
}

export default Apply;
