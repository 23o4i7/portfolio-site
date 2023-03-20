import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 z-50 border-b w-full">
            <div className="flex flex-row items-center justify-between border mx-40 md:px-24 h-28 w-5/6">
                <Link className="" href="/">
                    <p className="text-white">Home</p>
                </Link>
            </div>
        </div>
    )
}