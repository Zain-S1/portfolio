import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";

const HomePage = () => (
  <div className="bg-background min-h-screen text-foreground">
    <Navbar />
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pt-32">
      <Hero />
      <section id="about" className="grid gap-10 rounded-3xl border border-border bg-muted/30 p-8 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-accent">About</p>
          <h2 className="mt-4 text-3xl font-semibold">Crafting clarity from data.</h2>
        </div>
        <p className="text-base text-white/70">
          Computer Science graduate specializing in SQL, Python, and Power BI with hands-on experience across
          exploratory analysis, KPI design, and enterprise dashboard development. I partner with stakeholders to
          translate ambiguous business questions into automated insights that accelerate decision cycles.
        </p>
      </section>
      <SkillsSection />
      <section id="projects" className="space-y-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
          <p className="text-white/70 text-base">Impact-focused initiatives across BI, analytics, and automation.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section id="contact" className="rounded-3xl border border-border bg-gradient-to-br from-muted/50 to-background p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold">Let’s collaborate.</h2>
        <p className="mt-3 text-base text-white/70 max-w-2xl">
          Available for full-time roles, consulting engagements, and experimentation with data-driven products.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href="mailto:zainab@analytics.com" className="rounded-2xl border border-border p-4 hover:border-accent">
            <p className="text-xs uppercase text-white/60">Email</p>
            <p className="mt-2 text-lg font-medium">zainab@analytics.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/example"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-border p-4 hover:border-accent"
          >
            <p className="text-xs uppercase text-white/60">LinkedIn</p>
            <p className="mt-2 text-lg font-medium">linkedin.com/in/example</p>
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-border p-4 hover:border-accent"
          >
            <p className="text-xs uppercase text-white/60">GitHub</p>
            <p className="mt-2 text-lg font-medium">github.com/example</p>
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;
