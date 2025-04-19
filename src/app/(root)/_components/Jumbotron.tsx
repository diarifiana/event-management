import Image from "next/image";
import Link from "next/link";

export default function Jumbotron() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-16 shadow-lg bg-[url(/event-dinner.avif)] bg-cover bg-center h-[30vh]">
      <h1 className="text-2xl md:text-5xl font-bold text-white text-center md:text-left max-w-md">
        SECURE YOUR TICKET NOW
      </h1>

      <div className="flex gap-6 p-8">
        <Link href="/events">
          <button className="text-white rounded-lg p-2">Our Events</button>
        </Link>

        <Link href="/register">
          <button className="text-white rounded-lg p-2 bg-blue-300">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
