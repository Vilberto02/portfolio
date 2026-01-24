import Image from "next/image";
import { Skill } from "@/components/SkillCard";
import Github from "@/assets/github_light.svg";
import Linkedln from "@/assets/linkedin.svg";
import Gmail from "@/assets/gmail.svg";
import Person from "@/assets/person.jpg";
import { Reveal } from "@/components/Reveal";

const skills: { id: number; title: string }[] = [
  {
    id: 1,
    title: "Figma",
  },
  {
    id: 2,
    title: "React",
  },
  {
    id: 3,
    title: "Typescript",
  },
  {
    id: 4,
    title: "Git",
  },
  {
    id: 5,
    title: "Next.js",
  },
  {
    id: 6,
    title: "TailwindCSS",
  },
  {
    id: 7,
    title: "React Native",
  },
];

export function HomeSection() {
  return (
    <section id="home" className="w-full flex ">
      <div className="flex flex-col justify-center gap-8 w-1/2 mt-16 pl-44">
        <Reveal>
          <div className="flex flex-col gap-6 pr-2">
            <h1 className="font-header text-7xl font-bold">
              Hola 👋, <br />
              soy Vilberto.
            </h1>
            <p>
              Me especializo en diseño web y móvil, con experiencia en diseño
              responsivo, UX/UI y desarrollo de interfaces de usuario.
            </p>
            <div className="flex flex-wrap gap-4 py-4">
              {skills.map((skill: { id: number; title: string }) => {
                return <Skill key={skill.id} title={skill.title}></Skill>;
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex gap-4 items-center mt-24">
            <a href="https://github.com/Vilberto02/" target="_blank">
              <Image src={Github} alt="Logo de GitHub" width={36} height={36} />
            </a>
            <a
              href="https://www.linkedin.com/in/vilberto-patricio-julca"
              target="_blank"
            >
              <Image
                src={Linkedln}
                alt="Logo de Linkedln"
                width={36}
                height={36}
              />
            </a>
            <a href="mailto:albertojulcapatricio@gmail.com">
              <Image src={Gmail} alt="Logo de Gmail" width={36} height={36} />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="bg-stone-50 h-screen w-1/2 flex justify-center items-center">
        <Reveal delay={0.5}>
          <div className="p-6">
            <div className="relative aspect-square w-56 lg:w-[384px] xl:w-121 bg-image-shadow overflow-hidden">
              <Image
                src={Person}
                fill
                alt="Fotografía de una persona."
                className="object-cover object-center"
              ></Image>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
