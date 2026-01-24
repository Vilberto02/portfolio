import { SkillChart } from "../SkillChart";
import { OtherSkills } from "../OtherSkills";
import { Reveal } from "@/components/Reveal";

export function SkillSection() {
  return (
    <section
      id="skill"
      className="px-4 sm:px-8 md:px-24 py-16 min-h-screen flex flex-col gap-4 justify-center items-center bg-stone-50"
    >
      <Reveal>
        <h3 className="text-4xl sm:text-6xl font-header text-center">Habilidades</h3>
        <p className="text-stone-600 text-center mt-4">
          Herramientas que utilizo para diseñar y desarrollar experiencias
          digitales.
        </p>
      </Reveal>
      <Reveal width="100%" delay={0.4}>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 xl:mt-4">
          <div className="w-full sm:max-w-md lg:max-w-1/3">
            <SkillChart />
          </div>
          <div className="flex justify-center p-4">
            <OtherSkills />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
