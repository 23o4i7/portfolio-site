import { twMerge } from "tailwind-merge"

type TitleTextProps = {
    text: string
    color?: string
}

export default function TitleText({ text, color }: TitleTextProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className={"flex font-display flex-row text-3xl md:text-6xl font-bold"}>
                <span className={twMerge("block", `text-${color || "white"}`)}>{text}</span>
            </h1>
        </div>
    )
}