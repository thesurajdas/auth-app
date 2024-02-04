import { signIn } from 'next-auth/react';
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await signIn("email-login",{
        email,
        password,
        redirect: false
      })
      if (res.error) {
        setError("Invaild Credentials");
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-white my-4 px-5 py-3 border-t-4 border-t-green-600 shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="font-bold text-xl my-4">Enter Details to Login</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" />
            <button className="bg-green-600 text-white px-6 py-3 font-bold rounded-lg active:bg-green-700" type="submit">Login</button>
            { error && (
              <div className="bg-red-500 text-white text-sm w-fit py-1 px-3 mt-2 rounded-lg">{error}</div>
            )}
            <Link className='text-sm text-right' href={"/register"}>Do not have an account? <span className='underline'>Register</span></Link>
        </form>
    </div>
  )
}
