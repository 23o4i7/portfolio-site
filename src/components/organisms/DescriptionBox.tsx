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
    <div className="flex flex-col bg-slate-200 px-8 py-6 rounded-xl">
      <span className="text-black">{description}</span>
      <div className="flex flex-row">
        {tags.map((tag) => 
          <Tag text={tag} color={color} />
        )}
      </div>

    </div>
  )
}