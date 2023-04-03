import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="flex flex-row items-center justify-between border-2 border-snow-white mx-auto mt-5 md:px-24 h-28 w-9/12 backdrop-brightness-[.70] backdrop-blur-sm text-snow-white text-lg font-bold rounded-xl drop-shadow-lg">
          <Link href="#" className="mx-4">
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        <div className="flex flex-row mx-4">
          <Link href="#projects" className="mr-8">
            <span className="hover:opacity-75 duration-300">Projects</span>
          </Link>
          <Link href="#contact" className="ml-24">
            <span className="hover:opacity-75 duration-300">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  )
}