import { twMerge } from "tailwind-merge"

type HeroTextProps = {
    text: string
    color?: string
    size?: string
    decoration?: string
    spacing?: string
}

export default function HeroText({ text, color, size, decoration, spacing }: HeroTextProps) {
    return (
        <div className="">
            <span className={twMerge("flex flex-row font-bold", spacing)}>
                <h1 className={twMerge("block", `text-7xl`, `text-${color || "white"}`)}>{text}</h1>
            </span>
        </div>
    )
}