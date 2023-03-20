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
  const description = "IGAQ is a web application that allows users to create and join groups based on their interests. Users can post content, interact with other users, and create events."

  return (
    <>
      <Head>
        <title>Sean Ng • Full Stack Developer</title>
        <meta name="description" content="Sean Ng's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gunmetal">
        <div className="flex flex-col px-24">
          <div className="grid grid-cols-2 mt-28 pt-12 -mx-2 md:px-12 text-left">
            <div className="">
              <TitleText text={"IGAQ"} />
              <div className="align-center py-8 px-12">
                <DescriptionBox description={description} tags={["React", "Next.js", "JavaScript", "TypeScript", "NestJS", "Neo4j", "Vercel"]} />
              </div>
            </div>
            <div className="relative">
              <Image src="/images/igaq.png" alt="Buddytree Homepage" width={1000} height={1000} className={"object-scale-down"} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}