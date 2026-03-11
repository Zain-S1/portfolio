import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="relative flex h-full w-[320px] flex-col gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-md transition hover:-translate-y-1">
    <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-black/5 bg-base">
      <Image src={project.image} alt={`${project.title} visual`} fill className="object-cover" sizes="320px" />
    </div>
    <div className="space-y-3">
      <div>
        <h3 className="text-xl font-semibold text-black">{project.title}</h3>
        <p className="mt-2 text-sm text-black/60">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-black/60">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-black/10 px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
      <Link href={project.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-black">
        GitHub ↗
      </Link>
    </div>
  </article>
);

export default ProjectCard;
