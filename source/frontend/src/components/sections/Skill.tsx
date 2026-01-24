import { SkillChart } from "../SkillChart";
import { OtherSkills } from "../OtherSkills";
import { Reveal } from "@/components/Reveal";

export function SkillSection() {
  return (
    <section
      id="skill"
      className="px-24 min-h-screen flex flex-col gap-4 justify-center items-center bg-stone-50"
    >
      <Reveal>
        <h3 className="text-6xl font-header text-center">Habilidades</h3>
        <p className="text-stone-600 text-center mt-4">
          Herramientas que utilizo para diseñar y desarrollar experiencias
          digitales.
        </p>
      </Reveal>
      <Reveal width="100%" delay={0.4}>
        <div className="w-full flex items-center justify-center gap-8 mt-4">
          <div className="w-full max-w-1/3">
            <SkillChart />
          </div>
          <div className="flex justify-center">
            <OtherSkills />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
