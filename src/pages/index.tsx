import Head from "next/head";
import HeroText from "@/atoms/HeroText";
import HomepageText from "@/atoms/HomepageText";
import TitleText from "@/atoms/TitleText";
import ContactLinks from "@/molecules/ContactLinks";
import Navbar from "@/molecules/Navbar";
import Artifact from "@/organisms/Artifact";
import ContactBox from "@/organisms/ContactBox";

export default function Index() {

  const projects = [
    {
      name: "Buddytree",
      description: "Buddytree helps users discover and meet new trusted individuals and friends. Users can create and join groups, see nearby users, and create hangouts for other users to attend.",
      tags: ["React", "Next.js", "TypeScript", "SASS", "Flask", "Python", "PostgresQL", "Heroku"],
      links: ["", "https://www.buddytree.org/"]
    },
    {
      name: "InterviewPal",
      description: `Audience Choice Winner at the BCIT's HackTheBreak 2023, InterviewPal is a GPT-3.5 powered AI tool that helps you practice for your interviews. It asks you common interview questions and provides feedback about your responses.`,
      tags: ["React", "Next.js", "Typescript", "Tailwind", "Redis", "OpenAI", "Vercel"],
      links: ["https://github.com/InterviewPal/InterviewPal", "https://interviewpal.vercel.app/"]
    },
    {
      name: "IGAQ",
      description: "I Got A Queery (IGAQ), is a safe, online space for members and allies of the LGBTQ+ community to ask questions, share stories, and read resources. Part of BCIT's Interdisciplinary Projects with the Digital Design and Development program.",
      tags: ["React", "Next.js", "JavaScript", "TypeScript", "NestJS", "Neo4j", "Vercel"],
      links: ["https://github.com/IGAQ/NextApp", "https://www.igaq.gay/"]
    },
    {
      name: "WordGotchu",
      description: "WordGotchu is a real time, PvP game based on the popular word game Wordle. Players catch and battle each other with Gotchus, pixel-styled characters that have unique abilities.",
      tags: ["JavaScript", "HTML", "CSS", "Express.js","Firebase", "Heroku", "Railway"],
      links: ["https://github.com/iantelli/word-gotchu", "https://word-gotchu.up.railway.app/"]
    },
  ]

  return (
    <>
      <Head>
        <title>Sean Ng • Full Stack Developer</title>
        <meta name="description" content="Sean Ng's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/qbs6lbt.css"></link>
      </Head>
      <main className="min-h-screen font-darkmode-on">
        <Navbar />
        <div id="" className="fixed h-screen z-0">
          <video src={"./files/background.webm"} autoPlay={true} preload="auto" loop muted className="object-cover w-screen h-screen pointer-events-none bg-contain"></video>
        </div>
        <div className="relative z-10 w-4/5 m-auto">
          <div className="flex flex-col justify-start lg:pl-32 py-24 xl:py-64 h-screen drop-shadow-lg">
            <HeroText text={"Hi, I'm Sean"} spacing="pt-16" />
            <TitleText text={"Full Stack Developer"} spacing="py-4" />
            <HomepageText text={"I'm a developer based in Vancouver, Canada"} />
            <HomepageText text={"specializing in building web applications."} />
            <ContactLinks decoration="mt-2 -ml-2" />
          </div>
          <div id="projects" className="flex flex-col items-center justify-center pt-36 mb-8 drop-shadow-lg">
            <TitleText text={"My Projects"} spacing="px-4 pb-20 lg:p-8" decoration="text-center" />
            {projects.map((project) => (
              <Artifact key={project.name} artifactName={project.name} description={project.description} tags={project.tags} links={project.links} />
              ))}          
          </div>
          <div id="contact" className="flex flex-col items-center justify-center pt-48 pb-36 drop-shadow-lg">
            <ContactBox />
          </div>
          <span className="flex justify-center text-sm text-white drop-shadow-lg pb-4 hover:opacity-50 duration-300">
            <a href="https://wallpaperwaifu.com/" rel="noopener noreferrer" target="_blank">Background From WallpaperWaifu</a>
          </span>
        </div>
      </main>
    </>
  )
}
