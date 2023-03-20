import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type TagProps = {
  text: string;
  link?: string;
  color?: string;
}

export default function Tag({ text, link, color }: TagProps) {
  return (
      <div className="flex flex-row items-center justify-center bg-sky-500 p-1 m-0.5 mt-4 rounded-md">
        <p className={twMerge(`${color}`, "font-bold")}>{text}</p>
      </div>
  )
}