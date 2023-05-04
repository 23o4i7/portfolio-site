import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="hidden lg:block fixed top-0 left-0 z-50 w-full">
      <div className="flex flex-row items-center justify-between border-2 border-snow-white mx-auto mt-5 px-20 xl:px-32 h-28 w-9/12 backdrop-brightness-[.70] backdrop-blur-sm text-snow-white text-lg font-bold rounded-xl drop-shadow-lg">
          <Link href="#" className="xl:mx-4">
            <Image src="/images/logo.png" alt="Logo" width={55} height={55} />
          </Link>
        <div className="flex flex-row xl:mx-4">
          <Link href="#projects" className="mr-8">
            <span className="hover:opacity-75 duration-300">Projects</span>
          </Link>
          <Link href="#contact" className="xl:ml-24">
            <span className="hover:opacity-75 duration-300">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  )
}