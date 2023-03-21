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
  const description = "Wordgotchu is a pixel styled web platform game based on Wordle and original characters known as 'Gotchus' that battle against each other in an arena."

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
              <TitleText text={"WordGotchu"} />
              <div className="align-center py-8 px-20">
                <DescriptionBox description={description} tags={["JavaScript", "HTML", "CSS", "Firebase", "Heroku"]} />
              </div>
            </div>
            <div className="">
              <div className="relative">
                <Image src="/images/wordgotchu.png" alt="Buddytree Homepage" width={1000} height={1000} className={"object-scale-down"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}