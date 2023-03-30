import { twMerge } from "tailwind-merge";

type HomepageTextProps = {
  text: string;
  decoration?: string;
}

export default function HomepageText({ text, decoration }: HomepageTextProps) {
  return (
    <div className={twMerge("flex flex-row text-white", decoration)}>
      <h1 className="text-4xl font-bold text-center">{text}</h1>
    </div>
  )
}