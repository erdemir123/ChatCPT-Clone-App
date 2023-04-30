"use client";
import React from "react";
import NewChat from "./NewChat";
import { signIn, signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import ChatRow from "./ChatRow";

export default function SideBar() {
  const { data: session } = useSession();
  const [chat, loading, error] = useCollection(
    session &&
      
        collection(db, "users", session.user?.email!, "chats"),
        
      
  );
  if (!session) {
    return <p onClick={() => signIn()}>Sing İn</p>;
  }

  return (
    <div className="p-2 flex flex-col w-[100%] overflow-y-auto max-w-[300px] min-w-[250px]  mx-auto">
      <div>
        <div>
          {session && (
            <img
              onClick={() => signOut()}
              src={session.user?.image!}
              alt="profile-pic"
              className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer animate-spin"
            />
          )}
          <p className="text-center ">{session?.user?.email}</p>
        </div>
        <div>
          <NewChat />
          {chat?.docs.map((chat)=><ChatRow key={chat.id} id={chat.id}/>)}
        </div>
      </div>
    </div>
  );
}
