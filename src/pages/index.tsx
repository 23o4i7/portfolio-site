import Head from "next/head";
import Link from "next/link";
import HeroText from "@/atoms/HeroText";
import TitleText from "@/atoms/TitleText";
import Navbar from "@/molecules/Navbar";
import Artifact from "@/organisms/Artifact";

export default function Index() {

  const projects = [
    {
      name: "Buddytree",
      description: "Buddytree is a social media platform that allows users to meet trusted individuals and discover new friends. Users can create and join groups, post content, and create hangouts for other users to attend.",
      tags: ["React", "Next.js", "TypeScript", "Flask", "Python", "PostgresQL", "Heroku"],
      links: ["", "https://www.buddytree.org/"]
    },
    {
      name: "InterviewPal",
      description: "InterviewPal is a GPT-3.5 powered AI that helps you practice for your interviews. It asks you common and relevant interview questions and gives you insightful feedback on your answers.",
      tags: ["React", "Next.js", "Typescript", "Tailwind", "Redis", "OpenAI", "Vercel"],
      links: ["https://github.com/InterviewPal/InterviewPal", "https://interviewpal.vercel.app/"]
    },
    {
      name: "IGAQ",
      description: "I Got A Queery (IGAQ) provides a safe space for the members of the LGBTQ+ community to ask questions, share stories, and read resources about all things LGBTQ+.",
      tags: ["React", "Next.js", "JavaScript", "TypeScript", "NestJS", "Neo4j", "Vercel"],
      links: ["https://github.com/IGAQ", "https://www.igaq.gay/"]
    },
    {
      name: "WordGotchu",
      description: "Wordgotchu is a pixel styled web platform game based on Wordle and original characters known as 'Gotchus' that battle against each other in an arena.",
      tags: ["JavaScript", "HTML", "CSS", "Firebase", "Heroku"],
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
      </Head>
      <Navbar />
      <main className="min-h-screen bg-slate-black">
        <div className="flex flex-col items-center justify-center py-24 xl:py-40">
          <HeroText text={"Sean Ng"} />
          <HeroText text={"Full Stack Developer"} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <TitleText text={"Projects"} />
          {projects.map((project) => (
            <Artifact key={project.name} artifactName={project.name} description={project.description} tags={project.tags} links={project.links} />
          ))}
        </div>
        <div className="">
          <TitleText text={"Contact"} />
        </div>
      </main>
    </>
  )
}