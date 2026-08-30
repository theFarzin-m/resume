import Card from "./Card";

import skills from "@/data/skills";

export default function Skills() {
  const frontend = skills
    .filter((skill) => skill.category === "Frontend")
    .sort((a, b) => b.level - a.level);
  const backend = skills
    .filter((skill) => skill.category === "Backend")
    .sort((a, b) => b.level - a.level);
  const tools = skills
    .filter((skill) => skill.category === "DataBase & Tools")
    .sort((a, b) => b.level - a.level);

  return (
    <section className="container overflow-hidden mx-auto" id="skills">
      <div className="text-bold text-4xl"> expert in </div>
      <div className=" border border-gray-300/50 rounded-lg my-6 bg-sky-400/20 p-8">
        <div className="text-3xl text-bold my-4">Front-end</div>
        <div className="flex flex-wrap gap-4">
          {frontend.map((skill) => (
            <Card skill={skill} key={skill.title} />
          ))}
        </div>
      </div>
      <div className=" border border-gray-300/50 rounded-lg my-6 bg-amber-400/20 p-8">
        <div className="text-3xl text-bold my-4">Back-end</div>
        <div className="flex flex-wrap gap-4">
          {backend.map((skill) => (
            <Card skill={skill} key={skill.title} />
          ))}
        </div>
      </div>
      <div className=" border border-gray-300/50 rounded-lg my-6 bg-slate-400/20 p-8">
        <div className="text-3xl text-bold my-4">DataBase & Tools</div>
        <div className="flex flex-wrap gap-4">
          {tools.map((skill) => (
            <Card skill={skill} key={skill.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
