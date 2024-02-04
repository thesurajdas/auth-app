"use client";

import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";

export default function ProfileIcon() {
  const {data: session, status} = useSession();
  if (status==="authenticated") {
    return(
      <div className="flex gap-4 items-center">
        <Image src={session.user.image} width={40} height={40} className="rounded-full" alt="DP" />
        <button onClick={()=>signOut()}>Sign Out</button>
      </div>
    )
  }
  return (
    <button onClick={()=>signIn("github-login")}>Sign in</button>
  )
}
