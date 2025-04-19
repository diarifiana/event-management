import Link from "next/link";
import { Logo } from "./navbar/logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Logo />
      <div className="flex gap-6 text-gray-700 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/events" className="hover:text-blue-600 transition">
          Events
        </Link>
      </div>
    </nav>
  );
}
