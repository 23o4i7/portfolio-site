import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from '@mantine/core';
import { twMerge } from 'tailwind-merge';

type TagProps = {
  iconName: string;
  link?: string;
}

export default function Tag({ iconName, link }: TagProps) {
  const lowercaseName = iconName.toLowerCase();

  return (
    // <Tooltip label={iconName} position="bottom" withArrow arrowPosition="center" color='indigo' arrowSize={6}>
    // </Tooltip> 
    <div className="tooltip tooltip-bottom" data-tip={iconName} >
      <div className={twMerge("flex flex-row items-center justify-center p-1 mr-1 mt-4 rounded-md hover:scale-125 duration-300")}>
        <Image src={`/images/${lowercaseName}.svg`} alt={iconName} width={35} height={35} />
      </div>
    </div>
  )
}