import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section className="container mt-12 mx-auto custom-full" id="projects">
      <div className="w-full">
        <div className="text-bold text-3xl mb-3">Projects :</div>
        <div className="flex flex-wrap gap-4 px-6">
          {projects.map((project) => (
           <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
