import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import TitleText from "@/atoms/TitleText";
import Navbar from "@/molecules/Navbar";
import LinkBox from "@/molecules/LinkBox";
import DescriptionBox from "@/molecules/DescriptionBox";
import SVGBox from "@/molecules/SVGBox";

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
        <div className="grid grid-cols-2 mx-6 md:px-12 text-left border">
          <div className="border px-4 pt-6">
            <div className="flex flex-row justify-center">              
              <TitleText text={artifactName} decoration={"px-4"} />
              <SVGBox links={links}/>
            </div>
            <div className="align-center py-8 px-20">
              <DescriptionBox description={description} tags={tags} />
            </div>
          </div>
          <div className="border">
            <div className="relative">
              <Image src={`/images/${artifactName.toLowerCase()}.png`} alt={`${artifactName} Homepage`} width={1000} height={1000} className={"object-scale-down"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}