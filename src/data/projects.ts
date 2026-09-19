export interface Project {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  architecture?: ArchitectureNode[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: string;
}

export interface ArchitectureNode {
  label: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "fitsphere",
    title: "FitSphere",
    subtitle: "AI-Powered Multi-Tenant Fitness SaaS",
    duration: "May 2026 — Present",
    description: "A comprehensive multi-tenant SaaS platform for gym management that isolates data and workflows across dedicated portals for gym owners, trainers, and members.",
    problem: "Gyms need a unified platform to manage memberships, attendance, workout plans, and diet planning — with strict data isolation between different gym tenants.",
    solution: "Architected a multi-tenant backend with tenant-aware middleware, role-based access control, and dedicated portals. Built asynchronous background processing for scalable task handling and a modern React-based frontend.",
    highlights: [
      "Multi-tenant architecture with strict data isolation across gym tenants",
      "JWT authentication with role-based access control (Owner, Trainer, Member)",
      "Relational schema design for membership lifecycle, attendance tracking, workout and diet planning",
      "Asynchronous background processing with Celery and Redis for scalable task handling",
      "RESTful API backend with Django REST Framework and PostgreSQL",
      "Modern frontend with Next.js and Tailwind CSS",
      "Containerized deployment with Docker",
    ],
    technologies: [
      "Python", "Django", "Django REST Framework", "PostgreSQL", "Redis",
      "Celery", "Docker", "JWT", "Next.js", "Tailwind CSS", "REST APIs",
    ],
    architecture: [
      { label: "Next.js Frontend", description: "Tailwind CSS, TypeScript" },
      { label: "Django REST API", description: "JWT Auth, RBAC" },
      { label: "Tenant Middleware", description: "Data isolation layer" },
      { label: "PostgreSQL", description: "Relational data store" },
      { label: "Redis + Celery", description: "Async task processing" },
      { label: "Docker", description: "Containerized deployment" },
    ],
    github: "https://github.com/ROBUST-Anuj/FitSphere",
    featured: true,
    category: "Full-Stack / SaaS",
  },
  {
    id: "llm-gateway",
    title: "LLM Gateway",
    subtitle: "AI Infrastructure Platform",
    duration: "Jan 2026 — Apr 2026",
    description: "An AI gateway that exposes a unified API interface across multiple LLM providers, with a provider abstraction layer and configurable model routing.",
    problem: "Applications integrating multiple LLM providers face complexity in managing different APIs, handling failures, tracking costs, and optimizing performance across providers.",
    solution: "Engineered a unified gateway with provider abstraction, intelligent routing, and built-in reliability features — enabling applications to switch between LLM providers seamlessly.",
    highlights: [
      "Unified API interface across multiple LLM providers with provider abstraction layer",
      "Configurable model routing for intelligent request distribution",
      "Rate limiting with retry logic and automatic fallback handling across providers",
      "API-key based authentication with per-key usage and token/cost tracking",
      "Redis-based response caching for reduced latency and cost",
      "PostgreSQL persistence layer for usage analytics",
      "Streaming-capable REST API with Docker deployment",
    ],
    technologies: [
      "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "REST APIs", "JWT",
    ],
    architecture: [
      { label: "Client Application", description: "Unified API calls" },
      { label: "FastAPI Gateway", description: "Auth, Rate Limiting" },
      { label: "Provider Abstraction", description: "Model routing" },
      { label: "LLM Providers", description: "OpenAI, Anthropic, etc." },
      { label: "Redis Cache", description: "Response caching" },
      { label: "PostgreSQL", description: "Usage & cost tracking" },
    ],
    github: "https://github.com/ROBUST-Anuj",
    featured: true,
    category: "AI Infrastructure",
  },
  {
    id: "autonomous-coding-agent",
    title: "Autonomous Coding Agent",
    subtitle: "AI Software Engineering Platform",
    duration: "Apr 2025 — Jun 2025",
    description: "An autonomous coding agent that analyzes a target repository, plans required changes, and reasons over tasks using an LLM-based planning loop.",
    problem: "Software development involves repetitive tasks like bug fixes, test writing, and code refactoring that can be automated with intelligent agents capable of understanding and modifying codebases.",
    solution: "Built an autonomous agent with an LLM-based planning loop that can analyze repositories, plan changes, implement modifications through tool calling, and validate results through automated testing — all in a sandboxed environment.",
    highlights: [
      "LLM-based planning loop for analyzing repositories and reasoning over required changes",
      "Tool calling with file read/write and shell execution for direct code modifications",
      "Automated test-and-repair loop that runs test suites, analyzes failures, and iteratively patches code",
      "Git branch management with automatic commit generation and pull-request workflows",
      "Sandboxed execution environment for safe code modification and testing",
    ],
    technologies: [
      "Python", "LLM Integration", "Git", "GitHub", "Docker", "REST APIs",
    ],
    architecture: [
      { label: "Repository Analysis", description: "Codebase understanding" },
      { label: "LLM Planning Loop", description: "Task reasoning" },
      { label: "Tool Calling", description: "File I/O, Shell exec" },
      { label: "Code Generation", description: "Apply changes" },
      { label: "Test & Repair", description: "Automated validation" },
      { label: "Git Workflows", description: "Branch, Commit, PR" },
    ],
    github: "https://github.com/ROBUST-Anuj",
    featured: true,
    category: "AI / Agents",
  },
];
