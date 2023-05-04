import { twMerge } from "tailwind-merge"

type TitleTextProps = {
    text: string
    spacing?: string
    color?: string
    decoration?: string
}

export default function TitleText({ text, color, decoration, spacing }: TitleTextProps) {
    return (
        <div className="">
            <h1 className={twMerge("flex font-display flex-row text-4xl lg:text-5xl font-bold", `${spacing}`)}>
                <span className={twMerge("block", `text-white`, decoration)}>{text}</span>
            </h1>
        </div>
    )
}