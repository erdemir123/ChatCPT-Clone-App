import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { BsTrash } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useSession } from "next-auth/react";
interface Iprops {
  id: string;
}
function ChatRow({ id }: { id: string }) {
  const pathname = usePathname();
  const router = useRouter()
  const { data: session } = useSession();
  const [active, setActive] = useState<boolean>();
  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      orderBy("createdEt", "asc")
    )
  );
  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);
  
  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.push("/");
  };
  return (
    <Link
      href={`chat/${id}`}
      className={`chartRows justify-center group ${active && "bg-gray-700/50"}`}
    >
      <HiOutlineChatBubbleLeftEllipsis className="group-hover:text-amber-500" />
      <p>
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <BsTrash className="group-hover:text-red-500 transition-all duration-1000" onClick={removeChat}/>
    </Link>
  );
}

export default ChatRow;
