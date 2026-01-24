"use client"
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import Vitamia from "@/assets/vitamia.png";
import Bioloop from "@/assets/bioloop.png";
import Dumpster from "@/assets/dumpster-rental.png";
import { StaticImageData } from "next/image";

const skills = [
  {
    id: 1,
    title: "Desarrollo web",
  },
  {
    id: 2,
    title: "Desarrollo móvil",
  },
  {
    id: 3,
    title: "Prototipo",
  },
];

type ProjectType = {
  id: number;
  title: string;
  description: string;
  url: string;
  image: StaticImageData;
  tags: string[];
}

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Vitamia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim.",
    url: "https://vitamia-demo-five.vercel.app/",
    image: Vitamia,
    tags: ["Desarrollo web"],
  },
  {
    id: 2,
    title: "Bioloop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim.",
    url: "https://mistock-demo-five.vercel.app/",
    image: Bioloop,
    tags: ["Prototipo"]
  },
  {
    id: 3,
    title: "Dumpster Rentail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim.",
    url: "https://ezcommerce-demo-five.vercel.app/",
    image: Dumpster,
    tags: ["Desarrollo web", "Prototipo"]
  },
];

export function ProjectSection() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  return (
    <section
      id="project"
      className="min-h-screen px-24 flex flex-col justify-center items-center gap-4 pt-16 pb-12"
    >
      <h3 className="font-header text-6xl">Proyectos</h3>
      <p className="text-stone-600 text-center max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        cupiditate soluta dolore vitae quo.
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const isSelected = selectedIds.includes(skill.id);
          
          return (
            <div
              key={skill.id}
              className={`px-4 py-2 shadow-skill border border-stone-600 w-fit cursor-pointer ${isSelected ? "bg-purple-600 text-white" : ""}`}
              onClick={() => {
                if (isSelected) {
                  setSelectedIds(selectedIds.filter(id => id !== skill.id));
                } else {
                  setSelectedIds([...selectedIds, skill.id]);
                }
              }}
            >
              <p className="select-none">{skill.title}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 mt-12 border-l border-t border-black">
        {
          projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} url={project.url} image={project.image} tags={project.tags} ></ProjectCard>
          ))
        }
      </div>
    </section>
  );
}
