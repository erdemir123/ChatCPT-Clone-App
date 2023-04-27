"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import React from "react";
interface Iprops {
  children: React.ReactNode;
}

function Providers({ children }: Iprops) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;
