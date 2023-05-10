import Image from "next/image";
import TitleText from "@/atoms/TitleText";
import DescriptionBox from "@/molecules/DescriptionBox";
import LinkBox from "@/molecules/LinkBox";

import { twMerge } from "tailwind-merge"

type ArtifactProps = {
  artifactName: string;
  description: string;
  tags: string[];
  links: string[];
}

export default function ProjectPage({ artifactName, description, tags, links }: ArtifactProps) {

  return (
    <>
      <div className="flex flex-col lg:mt-24 mb-16 mx-auto">
        <div className="xl:grid grid-cols-2 text-left">
          <div className="xl:px-4 xl:pt-6">
            <div className="flex flex-row mx-4 xl:mx-16">              
              <TitleText text={artifactName} />
            </div>
            <div className="align-center pt-8 pb-6 xl:px-8">
              <DescriptionBox description={description} tags={tags} links={links}/>
            </div>
          </div>
          <div className="self-center relative mt-12 xl:mr-12">
            <a href={links[1]} rel="noopener noreferrer" target="_blank">
              <Image src={`/images/${artifactName.toLowerCase()}.png`} alt={`${artifactName} Homepage`} width={800} height={800} className={"rounded-lg hover:scale-105 duration-300"} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}