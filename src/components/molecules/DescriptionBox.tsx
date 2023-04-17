import Tag from "@/atoms/Tag";
import LinkBox from "@/molecules/LinkBox";

type DescriptionBoxProps = {
  description: string;
  tags: string[];
  links: string[];
  title?: string;
  color?: string;
  size?: string;
}

export default function DescriptionBox({ description, tags, links, title, color, size }: DescriptionBoxProps) {
  return (
    <div className="flex flex-col px-8 py-6 rounded-2xl bg-slate-black">
      <span className="text-pale-white text-lg font-bold">{description}</span>
      <div className="flex flex-row">
        {tags.map((tag) => 
          <Tag key={tag} iconName={tag} />
        )}
      </div>
      <div className="mt-3">
        <LinkBox links={links} />
      </div>
    </div>
  )
}