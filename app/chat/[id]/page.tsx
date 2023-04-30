import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'
interface Iparams{
    id:string
}

function page({params}:{params:Iparams}) {
    console.log(params)
  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
       <Chat chatId={params.id} />
       <ChatInput chatId={params.id} />
    </div>
  )
}

export default page
