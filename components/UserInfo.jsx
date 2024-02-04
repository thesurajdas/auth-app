
export default function UserInfo() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">Suraj Das</span>
        </div>
        <div>
          Email: <span className="font-bold">suraj4apps@gmail.com</span>
        </div>
        <button className="mt-3 py-3 px-6 bg-red-500 text-white font-bold rounded-lg">Logout</button>
      </div>
    </div>
  )
}
