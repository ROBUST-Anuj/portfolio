export interface Education {
  degree: string;
  institution: string;
  board?: string;
  duration: string;
  grade: string;
  gradeLabel: string;
  coursework?: string[];
}

export const educationData: Education[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Shri G. S. Institute of Technology and Science (SGSITS), Indore",
    board: "RGPV",
    duration: "2023 — 2027 (Expected)",
    grade: "8.02",
    gradeLabel: "CGPA (out of 10)",
    coursework: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Computer Organization & Architecture",
      "Theory of Computation",
      "Machine Learning",
      "Software Development Life Cycle",
    ],
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Lakshmi Shri Academy",
    board: "MP Board",
    duration: "2023",
    grade: "9.28",
    gradeLabel: "CGPA (out of 10)",
  },
  {
    degree: "Secondary (10th)",
    institution: "Hindupat Public School",
    board: "CBSE",
    duration: "2021",
    grade: "9.54",
    gradeLabel: "CGPA (out of 10)",
  },
];
