export function OtherSkills() {
  const skills = [
    { name: "Git", percentage: 85 },
    { name: "SQL", percentage: 70 },
    { name: "Docker", percentage: 60 },
    { name: "English", percentage: 80 },
    { name: "Agile", percentage: 90 },
  ];

  return (
    <div className="w-full max-w-sm bg-white p-6 border border-stone-200 shadow-skill h-full flex flex-col justify-center">
      <h4 className="text-2xl font-header mb-6 text-center">
        Otras Habilidades
      </h4>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-stone-700">
                {skill.name}
              </span>
              <span className="text-sm font-medium text-stone-500">
                {skill.percentage}%
              </span>
            </div>
            <div className="w-full bg-stone-200 h-2.5">
              <div
                className="bg-[rgba(162,89,255,1)] h-2.5"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
