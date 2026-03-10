import Link from "next/link";
import type { Project } from "@/content/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group rounded-3xl border border-border bg-muted/40 p-6 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-card">
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-muted to-background">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/50 text-sm uppercase tracking-[0.3em]">
          {project.imageAlt}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10" />
    </div>
    <div className="mt-6 space-y-4">
      <div>
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-white/70">{project.description}</p>
      </div>
      <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-white/70">
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-full border border-border px-3 py-1">
            {tech}
          </li>
        ))}
      </ul>
      <Link
        href={project.github}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
        <span aria-hidden>↗</span>
      </Link>
    </div>
  </article>
);

export default ProjectCard;
