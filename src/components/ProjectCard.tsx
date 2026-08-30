import { Project } from "@/types";
import ProjectDemo from "./ProjectDemo";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex-1 flex items-center justify-center" key={project.id}>
      <div className="flex justify-center max-w-full">
        <div className="flex gap-6 w-full items-center justify-around flex-col m-2.5 bg-gray-400/10 border border-gray-50 text-center cursor-pointer transition-all backdrop-blur-md duration-500 select-none shadow-[0_0_25px] shadow-gray-950/20 text-gray-950 text-bolder rounded-[20px_30px_0px_30px] p-0 hover:border-stone-700  group hover:scale-105 active:scale-95 active:rotate-z-1.7 z-1 overflow-hidden">
          <div className="transition-scale duration-1000 bg-sky-700 text-gray-50 p-2 -z-100 group-hover:scale-6500 rounded-full translate-y-25" />
          <h4 className="group-hover:text-gray-50 text-2xl  transition-all duration-300">
            {project.title}
          </h4>
          <ProjectDemo desktop={project.videoDesk} phone={project.videoPhon} />
          <div className="p-6 flex flex-col justify-center items-center w-full gap-4">
            {project.description && (
              <p className="text-justify">{project.description}</p>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                className="bg-sky-200 text-gray-950 rounded-full p-2.5 cursor-pointer duration-300 border border-stone-400 w-full shadow-sm hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_#000]"
              >
                Github
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="bg-gray-50 text-gray-950 rounded-full p-2.5 cursor-pointer duration-300 border border-stone-400 w-full hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_#000]"
              >
                Preview
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
