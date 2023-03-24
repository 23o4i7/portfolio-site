import { twMerge } from "tailwind-merge"

type TitleTextProps = {
    text: string
    spacing?: string
    color?: string
    decoration?: string
}

export default function TitleText({ text, color, decoration, spacing }: TitleTextProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className={twMerge("flex font-display flex-row text-3xl md:text-6xl font-bold", `${spacing}`)}>
                <span className={twMerge("block", `text-${color || "white"}`, decoration)}>{text}</span>
            </h1>
        </div>
    )
}