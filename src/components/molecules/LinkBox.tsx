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
          <div className="mr-2 bg-white rounded-full px-3 py-2">
            Visit Repository
          </div>
        </a> 
      }
      { 
        links[1] == "" ? null :
        <a href={links[1]} rel="noopener noreferrer" target="_blank">
          <div className="bg-white rounded-full px-3 py-2">
            Visit Site
          </div>
        </a> 
      }
    </div>
  )
}
