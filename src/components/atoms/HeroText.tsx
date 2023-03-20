import { twMerge } from "tailwind-merge"

type HeroTextProps = {
    text: string
    color?: string
    size?: string
    decoration?: string
}

export default function HeroText({ text, color, size, decoration }: HeroTextProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <span className="flex flex-row font-bold text-center">
                <h1 className={twMerge("block", `text-8xl`, `text-${color || "white"}`)}>{text}</h1>
            </span>
        </div>
    )
}