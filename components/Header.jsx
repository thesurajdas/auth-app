"use client";

import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
import LoginForm from "./LoginForm";

export default function Header() {
  const {data: session, status} = useSession();
  if (status==="authenticated") {    
    return(
      <>
        <h1>Welcome</h1>
        <span className="font-bold text-2xl">{session.user.name}</span>
      </>
    )
  }
  return (
    <>
      <LoginForm/>
      <LoginButton/>
    </>
  )
}
