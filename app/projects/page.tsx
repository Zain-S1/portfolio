import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const ProjectsPage = () => (
  <div className="bg-background min-h-screen text-foreground">
    <Navbar />
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      <header className="mb-12 space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Projects</p>
        <h1 className="text-4xl font-semibold">Analytics work with measurable impact.</h1>
        <p className="text-white/70">
          Each engagement blends deep analytical rigor with storytelling to drive executive confidence.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;
