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
      <div className="flex flex-col px-32 py-16">
        <div className="grid grid-cols-2 mx-6 md:mx-16 text-left">
          <div className="px-4 pt-6">
            <div className="flex flex-row mx-28">              
              <TitleText text={artifactName} />
            </div>
            <div className="align-center pt-8 pb-6 pl-8 pr-8 ml-20">
              <DescriptionBox description={description} tags={tags} />
            </div>
            <div className="mx-28">
              <LinkBox links={links} />
            </div>
          </div>
          <div className="">
            <div className="relative">
              <Image src={`/images/${artifactName.toLowerCase()}.png`} alt={`${artifactName} Homepage`} width={1000} height={1000} className={"object-scale-down"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}