"use client"
import { Tabs } from "@/tabs/HomeTabs";
import Info from "../components/Info";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center text-white p-2 h-full">
      <h1 className="text-5xl font-bold mb-10">ChatGPT</h1>
      <div>
        <Info tabs={Tabs} />
      </div>
      
    </div>
  );
}
