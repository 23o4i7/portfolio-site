import Image from "next/image";

type LinkBoxProps = {
  links: string[];
  decoration?: string;
}

export default function LinkBox({ links, decoration }: LinkBoxProps) {
  return (
    <div className="flex flex-row">
      { 
        links[0] == "" ? null : 
        <a href={links[0]} rel="noopener noreferrer" target="_blank">
          <div className="mr-2 bg-black text-white rounded-full px-1.5 py-1.5">
            {/* Visit Repository */}
          <Image src="/images/altgithub.svg" alt="Github Logo" width={30} height={30} />
          </div>
        </a> 
      }
      { 
        links[1] == "" ? null :
        <a href={links[1]} rel="noopener noreferrer" target="_blank">
          <div className="bg-black text-white rounded-full px-1.5 py-1.5">
            {/* Visit Site */}
            <Image src="/images/link.svg" alt="Github Logo" width={30} height={30} />
          </div>
        </a> 
      }
    </div>
  )
}
