import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import TitleText from "@/atoms/TitleText";
import Navbar from "@/molecules/Navbar";
import LinkBox from "@/molecules/LinkBox";
import DescriptionBox from "@/organisms/DescriptionBox";

import { twMerge } from "tailwind-merge"

export default function ProjectPage() {
  const router = useRouter();
  const description = "I Got A Queery (IGAQ) provides a safe space for the members of the LGBTQ+ community to ask questions, share stories, and read resources about all things LGBTQ+.";
  
  return (
    <>
      <Head>
        <title>Sean Ng • Full Stack Developer</title>
        <meta name="description" content="Sean Ng's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-slate-black">
        <div className="flex flex-col px-24">
          <div className="grid grid-cols-2 mt-28 pt-12 mx-6 md:px-12 text-left">
            <div className="px-4">
              <TitleText text={"IGAQ"} />
              <div className="align-center py-8 px-20">
                <DescriptionBox description={description} tags={["React", "Next.js", "JavaScript", "TypeScript", "NestJS", "Neo4j", "Vercel"]} />
              </div>
            </div>
            <div className="">
              <div className="relative">
                <Image src="/images/igaq.png" alt="Buddytree Homepage" width={1000} height={1000} className={"object-scale-down"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}