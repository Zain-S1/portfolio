"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/content/projects";

const ProjectsSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    const node = containerRef.current;
    if (!node) return;
    const offset = direction === "left" ? -320 : 320;
    node.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-black/50">Projects</p>
            <h2 className="text-3xl font-semibold text-black">Impactful analytics builds.</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollBy("left")}
              className="rounded-full border border-black/10 bg-white p-3 shadow-sm"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollBy("right")}
              className="rounded-full border border-black/10 bg-white p-3 shadow-sm"
            >
              →
            </button>
          </div>
        </div>
        <motion.div
          ref={containerRef}
          className="scrollbar-hidden flex gap-6 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
