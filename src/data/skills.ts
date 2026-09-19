export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
      { name: "WebSockets" },
      { name: "Servlets" },
      { name: "JSP" },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Computer Vision" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "OpenCV" },
      { name: "YOLOv8" },
      { name: "Scikit-learn" },
      { name: "XGBoost" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Redis" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "Container",
    skills: [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "AWS S3" },
      { name: "Nginx" },
      { name: "Celery" },
      { name: "Linux" },
      { name: "Postman" },
    ],
  },
];
