const skills = [
  {
    category: "Data Analysis",
    items: ["SQL", "Python", "Pandas"],
    copy: "Exploratory analysis, cohort studies, and advanced KPI modeling."
  },
  {
    category: "Visualization",
    items: ["Power BI", "Tableau", "Matplotlib"],
    copy: "Story-driven dashboards with pixel-level polish."
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"],
    copy: "Modeling, performance tuning, and ELT-ready schemas."
  },
  {
    category: "Tools",
    items: ["Git", "Excel"],
    copy: "Version control, automation, and executive-ready deliverables."
  }
];

const SkillsSection = () => (
  <section className="py-24" id="skills">
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-4 text-center mb-12">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-semibold">Technical Stack</h2>
        <p className="text-white/70 text-base">
          Grounded in rigorous analysis, visual storytelling, and reliable data pipelines.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="rounded-3xl border border-border bg-muted/30 p-6 text-left shadow-card/10"
          >
            <h3 className="text-xl font-semibold">{skill.category}</h3>
            <p className="mt-3 text-sm text-white/70">{skill.copy}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-white/70">
              {skill.items.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
