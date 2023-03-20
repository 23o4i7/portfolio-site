import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TagProps = {
  iconName: string;
  link?: string;
}

export default function Tag({ iconName, link }: TagProps) {
  const lowercaseName = iconName.toLowerCase();

  return (
      <div className={twMerge("flex flex-row items-center justify-center p-1 my-0.5 mr-1 mt-4 rounded-md tooltip tooltip-bottom")} data-tip={iconName}>
        <Image src={`/images/${lowercaseName}.svg`} alt={iconName} width={40} height={40} />
      </div>
  )
}