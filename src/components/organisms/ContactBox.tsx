import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import HomepageText from '../atoms/HomepageText';


type ContactBoxProps = {
  textDecoration?: string;
}

export default function ContactBox({ textDecoration }: ContactBoxProps) {
  return (
    <>
      <div className='py-16'>
        <HomepageText text={"Get in touch"} />
        <div className='flex flex-row justify-center py-4'>
          <a className="px-2" href="mailto: sean.ng.cip@gmail.com" rel="noopener noreferrer" target="_blank">
            <Image src="/images/email.svg" alt="Email" width={45} height={45} />
          </a>
          <a className="px-2" href="https://www.linkedin.com/in/sean-ng-23o4i7/" rel="noopener noreferrer" target="_blank">
            <Image src="/images/linkedin.svg" alt="LinkedIn" width={45} height={45} />
          </a>
          <a className="px-2" href="https://github.com/23o4i7" rel="noopener noreferrer" target="_blank">
            <Image src="/images/altgithub.svg" alt="Github" width={45} height={45} />
          </a>
        </div>
      </div>
    </>
  )
}