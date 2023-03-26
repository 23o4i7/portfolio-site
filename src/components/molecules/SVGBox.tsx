import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type SVGBoxProps = {
  links: string[];
  decoration?: string;
}

export default function SVGBox({ links, decoration }: SVGBoxProps) {

  return (
    <div className="flex flex-row pt-3">
      { links[0] == "" ? null : 
        <a href={links[0]} rel="noopener noreferrer" target="_blank">
          <Image src="/images/github.svg" alt="Github" width={45} height={45} />
        </a>
      }
      { links[1] == "" ? null :
        <a href={links[1]} rel="noopener noreferrer" target="_blank">
          <Image src="/images/link.svg" alt="Link" width={45} height={45} />
        </a>
      }
    </div>
  )
}