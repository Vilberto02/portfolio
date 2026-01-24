import Image from "next/image";
import People from "@/assets/people.jpg";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-8 md:px-24 py-16 flex flex-col gap-16 justify-center items-center"
    >
      <h3 className="font-header text-4xl sm:text-6xl text-center">Sobre mí</h3>
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        <Reveal>
          <div className="p-6">
            <div className="aspect-3/4 relative w-60 md:w-80 bg-image-shadow">
              <Image
                src={People}
                alt="Fotografía de una persona."
                fill
                className="object-cover object-center overflow-hidden"
              ></Image>
            </div>
          </div>
        </Reveal>
        <div className="space-y-6 max-w-xl">
          <Reveal delay={0.3}>
            <p className="font-header text-center xl:text-left text-xl sm:text-3xl">
              Diseñador UI/UX & Desarrollador Front-End
            </p>
            <p className="mt-4 text-center xl:text-left">
              Durante los últimos años, he trabajado en diversas áreas del
              diseño digital, incluyendo desarrollo front-end y UI/UX de
              aplicaciones móviles. He tenido la oportunidad de trabajar con
              equipos para desarrollar MVP y he sido parte del diseño de los
              prototipos.{" "}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
