import Head from "next/head";
import Link from "next/link";
import HeroText from "@/atoms/HeroText";
import TitleText from "@/atoms/TitleText";
import Navbar from "@/molecules/Navbar";

export default function Index() {
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
        <div className="flex flex-col items-center justify-center py-24 xl:py-40">
          <HeroText text={"Sean Ng"} />
          <HeroText text={"Full Stack Developer"} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <TitleText text={"Projects"} />
          <Link className="text-white" href="/buddytree">Buddytree</Link>
          <Link className="text-white" href="/igaq">IGAQ</Link>
          <Link className="text-white" href="/wordgotchu">WordGotchu</Link>
          <Link className="text-white" href="/interviewpal">InterviewPal</Link>
        </div>
      </main>
    </>
  )
}