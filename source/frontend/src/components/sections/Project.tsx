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

  const filteredProjects = projects.filter((project) => {
    if (selectedIds.length === 0) return true;
    const selectedTitles = skills
      .filter((s) => selectedIds.includes(s.id))
      .map((s) => s.title);
    return project.tags.some((tag) => selectedTitles.includes(tag));
  });

  return (
    <section
      id="project"
      className="min-h-screen px-4 sm:px-8 md:px-24 flex flex-col justify-center items-center gap-4 p-16"
    >
      <Reveal>
        <h3 className="font-header text-4xl sm:text-6xl text-center">
          Proyectos
        </h3>
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
        <div
          className={`grid mt-8 border-l border-t border-black w-fit mx-auto ${
            filteredProjects.length === 0
              ? "grid-cols-1"
              : filteredProjects.length === 1
                ? "grid-cols-1"
                : filteredProjects.length === 2
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
                image={project.image}
                tags={project.tags}
              ></ProjectCard>
            ))
          ) : (
            <div className="border-b border-r border-black p-12 flex flex-col items-center justify-center gap-4 bg-stone-50">
              <p className="text-xl font-header">No hay proyectos disponibles</p>
              <p className="text-stone-500 text-center">
                Actualmente no hay proyectos para esta categoría. ¡Pronto habrá más contenido!
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
