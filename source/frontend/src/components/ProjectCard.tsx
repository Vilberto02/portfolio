import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
  image: StaticImageData;
  tags: string[];
}

export function ProjectCard({title, description, url, image, tags}:ProjectCardProps) {
  return (
    <div className="group min-h-118 flex flex-col justify-center items-center gap-8 px-7 py-9 border-b border-r border-black hover:bg-stone-50">
      <div className="relative w-96 h-50 shadow-lg group-hover:shadow-xl">
        <Image
          src={image}
          alt="Previsualización del proyecto."
          fill
          className="object-cover object-top"
        ></Image>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-stone-600 text-sm">{description}</p>
        <div className="flex justify-between gap-4 items-center mt-2">
          <div className="flex items-center gap-2 py-1">
            {tags.map((item) => (
              <div key={item} className="text-sm text-stone-600 border border-stone-600 py-2 px-2">
                {item}
              </div>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            className="bg-[#087EA4] px-4 py-2 text-white hidden group-hover:flex items-center gap-2 cursor-pointer"
          >
            <p>Abrir</p>
            <ArrowUpRight width={20}></ArrowUpRight>
          </a>
        </div>
      </div>
    </div>
  );
}