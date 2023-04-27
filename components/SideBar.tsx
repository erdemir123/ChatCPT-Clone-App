import React from "react";
import NewChat from "./NewChat";

export default function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen w-[25%] overflow-y-auto ">
      <div className="flex-1 ">
        <div>
          <NewChat />
          <div></div>
        </div>
      </div>
    </div>
  );
}
