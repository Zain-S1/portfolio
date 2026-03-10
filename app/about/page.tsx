import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const experienceHighlights = [
  {
    title: "Exploratory Data Analysis",
    detail: "Led discovery sprints turning raw telemetry into product narratives."
  },
  {
    title: "KPI Architecture",
    detail: "Partnered with leadership to design multi-level KPI trees and alerting logic."
  },
  {
    title: "Dashboard Development",
    detail: "Built Power BI and Tableau assets consumed by 200+ stakeholders weekly."
  }
];

const AboutPage = () => (
  <div className="bg-background min-h-screen text-foreground">
    <Navbar />
    <main className="mx-auto max-w-5xl px-6 pt-32 pb-20 space-y-12">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">About</p>
        <h1 className="text-4xl font-semibold">Data intuition meets operational excellence.</h1>
        <p className="text-white/70 text-base">
          I am a Computer Science graduate with a focus on SQL, Python, and Power BI. My approach blends quantitative
          rigor with stakeholder empathy to uncover insights, design KPIs, and launch dashboards that guide strategy.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {experienceHighlights.map((item) => (
          <div key={item.title} className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-white/70">{item.detail}</p>
          </div>
        ))}
      </section>
      <section className="rounded-3xl border border-border bg-muted/30 p-8">
        <h2 className="text-2xl font-semibold">Focus Areas</h2>
        <ul className="mt-6 space-y-4 text-white/80">
          <li>• Translating business needs into robust data models and SQL pipelines.</li>
          <li>• Designing Power BI dashboards with scalable data refresh strategies.</li>
          <li>• Coaching teams on metric literacy and dashboard adoption.</li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
