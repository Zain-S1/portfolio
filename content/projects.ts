export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Aramco Power BI Operations Dashboard",
    description: "Executive-ready KPI hub tracking upstream operations and predictive maintenance signals.",
    technologies: ["Power BI", "SQL", "DAX"],
    github: "https://github.com/example/aramco-operations-dashboard",
    image: "/hero-image-placeholder.jpg"
  },
  {
    title: "SQL Analytical Practice Repository",
    description: "Repository of optimized SQL case studies showcasing CTE-heavy modeling and testing.",
    technologies: ["PostgreSQL", "CTEs", "Window Functions"],
    github: "https://github.com/example/sql-analytics-repo",
    image: "/hero-image-placeholder.jpg"
  },
  {
    title: "Data Visualization Experiments",
    description: "Python + Tableau explorations for anomaly detection and KPI storytelling layouts.",
    technologies: ["Python", "Tableau", "Matplotlib"],
    github: "https://github.com/example/data-viz-experiments",
    image: "/hero-image-placeholder.jpg"
  }
];
