import { twMerge } from "tailwind-merge";

type HomepageTextProps = {
  text: string;
  spacing?: string;
}

export default function HomepageText({ text, spacing }: HomepageTextProps) {
  return (
    <div className={twMerge("flex flex-row text-white", spacing)}>
      <h1 className="text-3xl font-bold">{text}</h1>
    </div>
  )
}