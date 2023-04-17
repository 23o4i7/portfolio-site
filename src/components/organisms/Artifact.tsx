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
      <div className="flex flex-col pl-4 pr-36 pt-24 pb-16">
        <div className="grid grid-cols-2 mx-6 md:mx-16 text-left">
          <div className="px-4 pt-6">
            <div className="flex flex-row mx-32">              
              <TitleText text={artifactName} />
            </div>
            <div className="align-center pt-8 pb-6 pl-8 pr-8 ml-20">
              <DescriptionBox description={description} tags={tags} links={links}/>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <a href={links[1]} rel="noopener noreferrer" target="_blank">
                <Image src={`/images/${artifactName.toLowerCase()}.png`} alt={`${artifactName} Homepage`} width={1000} height={1000} className={"mt-6 rounded-lg hover:scale-105 duration-300"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}