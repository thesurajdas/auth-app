"use client";

import { signOut, useSession } from "next-auth/react";

export default function UserInfo() {
  const {data: session}= useSession();
  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-white shadow-lg p-8 flex flex-col gap-2 my-6 rounded-lg">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button onClick={()=>signOut()} className="mt-3 py-3 px-6 bg-red-500 text-white font-bold rounded-lg">Logout</button>
      </div>
    </div>
  )
}
