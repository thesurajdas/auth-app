import Link from "next/link";
import ProfileIcon from "./ProfileIcon";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between fixed right-0 left-0 px-8 h-14 bg-green-600 text-white">
      <Link className="font-bold" href={"/"}>Next-Auth</Link>
      <ProfileIcon/>
    </nav>
  )
}
