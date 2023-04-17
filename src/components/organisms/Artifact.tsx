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
      <div className="flex flex-col pt-24 pb-16">
        <div className="grid grid-cols-2 text-left">
          <div className="px-4 pt-6">
            <div className="flex flex-row mx-16">              
              <TitleText text={artifactName} />
            </div>
            <div className="align-center pt-8 pb-6 px-8">
              <DescriptionBox description={description} tags={tags} links={links}/>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <a href={links[1]} rel="noopener noreferrer" target="_blank">
                <Image src={`/images/${artifactName.toLowerCase()}.png`} alt={`${artifactName} Homepage`} width={800} height={800} className={"mt-12 pr-12 rounded-lg hover:scale-105 duration-300"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}