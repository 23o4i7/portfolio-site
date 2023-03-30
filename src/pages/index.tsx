import Head from "next/head";
import HeroText from "@/atoms/HeroText";
import HomepageText from "@/atoms/HomepageText";
import TitleText from "@/atoms/TitleText";
import Navbar from "@/molecules/Navbar";
import Artifact from "@/organisms/Artifact";
import ContactBox from "@/organisms/ContactBox";

export default function Index() {

  const projects = [
    {
      name: "Buddytree",
      description: "Buddytree is a social media platform that allows users to meet trusted individuals and discover new friends. Users can create and join groups, post content, and create hangouts for other users to attend.",
      tags: ["React", "Next.js", "TypeScript", "SASS", "Flask", "Python", "PostgresQL", "Heroku"],
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
      tags: ["JavaScript", "HTML", "CSS", "Express.js","Firebase", "Heroku", "Vercel"],
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
        <div id="about" className="flex flex-col justify-start mx-auto px-24 py-24 xl:py-64 h-screen w-4/5">
          <HeroText text={"Sean Ng"} />
          <HeroText text={"Full Stack Developer"} />
          <HomepageText text={"I'm a full stack developer with a passion for building web applications."} />
        </div>
        <div id="projects" className="flex flex-col items-center justify-center pt-36 mb-12">
          <TitleText text={"Projects"} />
          {projects.map((project) => (
            <Artifact key={project.name} artifactName={project.name} description={project.description} tags={project.tags} links={project.links} />
            ))}          
        </div>
        <div id="contact" className="flex flex-col items-center justify-center h-screen">
          <TitleText text={"Get in Touch"} />
          <ContactBox />
        </div>
      </main>
    </>
  )
}