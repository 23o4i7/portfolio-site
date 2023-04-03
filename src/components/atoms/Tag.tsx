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
    <Tooltip label={iconName} position="bottom" withArrow arrowPosition="center" color='indigo' arrowSize={6}>
      <div className={twMerge("flex flex-row items-center justify-center p-1 my-0.5 mr-1 mt-4 rounded-md")}>
        <Image src={`/images/${lowercaseName}.svg`} alt={iconName} width={40} height={40} />
      </div>
    </Tooltip>
  )
}