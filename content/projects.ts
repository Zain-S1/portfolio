export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "Aramco Power BI Operations Dashboard",
    description:
      "Designed an executive-ready dashboard tracking upstream operations, reducing status update prep time by 40%.",
    technologies: ["Power BI", "SQL", "DAX", "Azure"],
    github: "https://github.com/example/aramco-operations-dashboard",
    imageAlt: "Dashboard preview"
  },
  {
    title: "SQL Analytical Practice Repository",
    description:
      "Collection of optimized SQL scripts solving complex business questions with emphasis on readability and testing.",
    technologies: ["PostgreSQL", "CTEs", "Window Functions"],
    github: "https://github.com/example/sql-analytics-repo",
    imageAlt: "SQL snippets"
  },
  {
    title: "Data Visualization Experiments",
    description:
      "Rapid prototypes built with Python and Tableau exploring novel layouts for KPI storytelling and anomaly detection.",
    technologies: ["Python", "Tableau", "Matplotlib"],
    github: "https://github.com/example/data-viz-experiments",
    imageAlt: "Visualization concepts"
  }
];
