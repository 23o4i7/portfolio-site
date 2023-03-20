import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import TitleText from "@/atoms/TitleText";
import Navbar from "@/molecules/Navbar";
import LinkBox from "@/molecules/LinkBox";
import DescriptionBox from "@/organisms/DescriptionBox";

import { twMerge } from "tailwind-merge"

export default function ProjectPage() {
  const router = useRouter();
  const description = "Buddytree is a social media platform that allows users to connect with others based on their interests. Users can create and join groups, post content, and interact with other users.";

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
          <div className="grid grid-cols-2 pt-40 -mx-2 md:px-12 divide-x text-left border">
            <div className="border">
              <TitleText text={"Buddytree"} />
              <div className="align-center py-8 px-12">
                <DescriptionBox description={description} tags={["React", "Next.js", "TypeScript", "Flask", "Python"]} />
                <LinkBox link={"https://github.com/"} color={"white"} size={"h-12 w-12"} />
              </div>
            </div>
            <div className="border">
            </div>
          </div>
        </div>
      </main>
    </>
  )
}