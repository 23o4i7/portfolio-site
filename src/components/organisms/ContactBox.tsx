import TitleText from '@/atoms/TitleText';
import ContactLinks from '@/molecules/ContactLinks';
import HomepageText from '@/atoms/HomepageText';

import { twMerge } from 'tailwind-merge';

type ContactBoxProps = {
  textDecoration?: string;
}

export default function ContactBox({ textDecoration }: ContactBoxProps) {
  return (
    <>
      <div className='xl:py-16 xl:px-20'>
        <div className='flex flex-col items-center text-center'>
          <TitleText text={"Get In Touch"}/>
          <HomepageText 
            text={"I'm always interested in new opportunities and projects. If there's anything you'd like to discuss or just want to say hi, please don't hesitate to reach out."} 
            spacing='pt-20 pb-8' 
          />
          <ContactLinks />
        </div>
      </div>
    </>
  )
}
