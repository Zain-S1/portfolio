const skillGroups = [
  { title: "Data Analysis", items: ["SQL", "Python", "Pandas"] },
  { title: "Visualization", items: ["Power BI", "Tableau", "Matplotlib"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL"] },
  { title: "Tools", items: ["Git", "Excel", "Power BI"] }
];

const Skills = () => (
  <section id="skills" className="py-12">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-black/50">Skills</p>
        <h2 className="text-3xl font-semibold text-black">Stack that elevates insights.</h2>
        <p className="text-black/60">Card-based overview of core capabilities.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-black">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-black/10 bg-base px-4 py-1 text-sm text-black/70">
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

export default Skills;
