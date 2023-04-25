import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type ContactLinksProps = {
  decoration?: string;
}

export default function ContactLinks({ decoration }: ContactLinksProps) {
  return (
    <div className={twMerge('flex flex-row py-4', decoration)}>
      <a className="px-2" href="mailto: sean.ng.cip@gmail.com" rel="noopener noreferrer" target="_blank">
        <Image src="/images/email.svg" alt="Email" width={45} height={45} className="hover:opacity-75 duration-500" />
      </a>
      <a className="px-2" href="https://discord.com/users/825360741564809216" rel="noopener noreferrer" target="_blank">
        <Image src="/images/discord.svg" alt="Discord" width={45} height={45} className="hover:opacity-75 duration-500" />
      </a>
      <a className="px-2" href="https://github.com/23o4i7" rel="noopener noreferrer" target="_blank">
        <Image src="/images/altgithub.svg" alt="Github" width={45} height={45} className="hover:opacity-75 duration-500" />
      </a>
      <a className="px-2" href="https://www.linkedin.com/in/sean-ng-23o4i7/" rel="noopener noreferrer" target="_blank">
        <Image src="/images/linkedin.svg" alt="LinkedIn" width={45} height={45} className="hover:opacity-75 duration-500" />
      </a>
    </div>
  )
}