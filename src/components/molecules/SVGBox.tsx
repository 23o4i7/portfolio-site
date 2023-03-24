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
        <Link href={links[0]}>
          <Image src="/images/github.svg" alt="Github" width={45} height={45} />
        </Link>
      }
      { links[1] == "" ? null :
        <Link href={links[1]}>
          <Image src="/images/link.svg" alt="Link" width={45} height={45} />
        </Link>
      }
    </div>
  )
}