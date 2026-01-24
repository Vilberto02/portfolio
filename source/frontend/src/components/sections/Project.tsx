"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/mocks/mock";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

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

export function ProjectSection() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <section
      id="project"
      className="min-h-screen px-4 sm:px-8 md:px-24 flex flex-col justify-center items-center gap-4 p-16"
    >
      <Reveal>
        <h3 className="font-header text-4xl sm:text-6xl text-center">Proyectos</h3>
        <p className="text-stone-600 text-center max-w-4xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          cupiditate soluta dolore vitae quo.
        </p>
        <div className="flex flex-wrap justify-center gap-3 py-4">
          {skills.map((skill) => {
            const isSelected = selectedIds.includes(skill.id);

            return (
              <div
                key={skill.id}
                className={`px-4 py-2 shadow-skill border border-stone-600 w-fit cursor-pointer ${isSelected ? "bg-purple-600 text-white" : ""}`}
                onClick={() => {
                  if (isSelected) {
                    setSelectedIds(selectedIds.filter((id) => id !== skill.id));
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
      </Reveal>
      <Reveal width="100%" delay={0.4}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-8 border-l border-t border-black">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              url={project.url}
              image={project.image}
              tags={project.tags}
            ></ProjectCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
