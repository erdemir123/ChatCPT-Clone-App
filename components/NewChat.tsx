import { AiOutlinePlus } from "react-icons/ai";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase/firebase";

function NewChat() {

  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div className="chartRows " onClick={createNewChat}>
      <AiOutlinePlus size={20} />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
