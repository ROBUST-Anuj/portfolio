export interface Achievement {
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const achievements: Achievement[] = [
  {
    title: "JEE Main 2023",
    description: "Secured All India Rank (AIR) 36,096",
    icon: "Trophy",
    category: "Competitive Exam",
  },
  {
    title: "LeetCode Problem Solving",
    description: "Solved 200+ Data Structures & Algorithms problems",
    icon: "Code2",
    category: "Competitive Programming",
  },
  {
    title: "NPTEL Certification",
    description: "Python for Data Science — completed certification",
    icon: "Award",
    category: "Certification",
  },
  {
    title: "International English Olympiad",
    description: "District Topper — IEO",
    icon: "Medal",
    category: "Olympiad",
  },
];

export interface Responsibility {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export const responsibilities: Responsibility[] = [
  {
    title: "Student Member, Academic Council",
    organization: "SGSITS, Indore",
    duration: "Sep 2025 — Present",
    description: "Represented student interests in academic policy discussions and curriculum review meetings.",
  },
  {
    title: "Coordinator, E-Cell (Entrepreneurship Cell)",
    organization: "SGSITS, Indore",
    duration: "Sep 2024 — Present",
    description: "Organized event planning and design, and promoted entrepreneurial culture on campus.",
  },
];
