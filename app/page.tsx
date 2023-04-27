"use client"
import { Tabs } from "@/tabs/HomeTabs";
import Info from "../components/Info";
import { useSession ,signOut} from "next-auth/react";
import Button from "@/components/Button";


export default function Home() {
  
 
  return (
    <div className="flex flex-col items-center justify-center text-white p-2 md:h-[100vh]">
      <h1 className="text-5xl font-bold mb-10">ChatGPT</h1>
      <div>
        <Info tabs={Tabs} />
      </div>
      <Button/>
    </div>
  );
}
