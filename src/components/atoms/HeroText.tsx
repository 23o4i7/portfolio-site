import { twMerge } from "tailwind-merge"

type HeroTextProps = {
    text: string
    color?: string
    size?: string
    decoration?: string
}

export default function HeroText({ text, color, size, decoration }: HeroTextProps) {
    return (
        <div className="">
            <span className="flex flex-row font-bold">
                <h1 className={twMerge("block", `text-8xl`, `text-${color || "white"}`)}>{text}</h1>
            </span>
        </div>
    )
}