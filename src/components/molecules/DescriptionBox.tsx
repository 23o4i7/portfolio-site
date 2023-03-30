import Tag from "@/atoms/Tag";

type DescriptionBoxProps = {
  description: string;
  tags: string[];
  title?: string;
  color?: string;
  size?: string;
}

export default function DescriptionBox({ description, tags, title, color, size }: DescriptionBoxProps) {
  return (
    <div className="flex flex-col bg-pale-blue px-8 py-6 rounded-xl">
      <span className="text-black text-lg font-bold">{description}</span>
      <div className="flex flex-row">
        {tags.map((tag) => 
          <Tag key={tag} iconName={tag} />
        )}
      </div>

    </div>
  )
}