import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="flex flex-row items-center justify-between border mx-auto mt-4 md:px-24 h-28 w-4/5 bg-slate-black text-white text-lg font-bold">
        <span className="text-white">Home</span>
        <div className="flex flex-row">
          <Link href="#about" scroll={false}>
            <span className="">About</span>
          </Link>
          <Link href="#projects">
            <span className="pl-16">Projects</span>
          </Link>
          <Link href="#contact">
            <span className="pl-16">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  )
}