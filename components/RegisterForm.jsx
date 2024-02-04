import Link from 'next/link'

export default function RegisterForm() {
  return (
    <div className="my-4 px-5 py-3 border-t-4 border-t-green-600 shadow-lg rounded-lg">
        <form className="flex flex-col gap-4">
            <h1 className="font-bold text-xl my-4">Enter Details to Register</h1>
            <input type="text" name="name" id="" placeholder="Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="password" name="password" id="" placeholder="Password" />
            <button className="bg-green-600 text-white px-6 py-3 font-bold rounded-lg active:bg-green-700" type="submit">Register</button>
            <div className="bg-red-500 text-white text-sm w-fit py-1 px-3 mt-2 rounded-lg">Error Message</div>
            <Link className='text-sm text-right' href={"/login"}>Already have an account? <span className='underline'>Login</span></Link>
        </form>
    </div>
  )
}
