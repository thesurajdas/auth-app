"use client";

import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required!") 
      return;
    }
    try {
      const resUserExist = await fetch("/api/userExist",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email})
      });

      const {user} = await resUserExist.json();
      if (user) {
        setError("User Already Exists!", user); 
        return;
      }

      const res = await fetch("/api/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User Registration Failed!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-white my-4 px-5 py-3 border-t-4 border-t-green-600 shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="font-bold text-xl my-4">Register</h1>
            <input onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" />
            <button className="bg-green-600 text-white px-6 py-3 font-bold rounded-lg active:bg-green-700" type="submit">Register</button>
            {error && (
              <div className="bg-red-500 text-white text-sm w-fit py-1 px-3 mt-2 rounded-lg">{error}</div>
            )}
            <Link className='text-sm text-right' href={"/"}>Already have an account? <span className='underline'>Login</span></Link>
        </form>
    </div>
  )
}
