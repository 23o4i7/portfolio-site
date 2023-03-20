import Link from 'next/link';

import { twMerge } from 'tailwind-merge';

type LinkBoxProps = {
    link: string;
    text: string;
    color?: string;
    decoration?: string;
}

export default function LinkBox({ color, text, link, decoration }: LinkBoxProps) {

    return (
        <div className="">
            <Link href={link}>
                {text}
            </Link>
        </div>
    )
}