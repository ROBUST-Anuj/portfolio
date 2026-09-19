export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "AppTech Interactive Services Pvt. Ltd.",
    role: "Software Development Intern",
    duration: "May 2025 — Jul 2025",
    bullets: [
      "Engineered Java-based web applications using Core Java, Servlets, and JSP, integrating JDBC for MySQL database connectivity.",
      "Deployed and configured applications on Apache Tomcat, managing request handling and session lifecycle.",
      "Debugged and tested application modules while collaborating with the team using Git for version control.",
    ],
    technologies: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "Apache Tomcat", "Git"],
  },
];
