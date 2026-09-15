export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "13+", label: "Years Experience" },
  { value: "2013", label: "Since" },
  { value: "Full-Stack", label: "Development" },
  { value: "SaaS", label: "Experience" },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Understand",
    description: "Understand the requirement, existing system and business problem.",
  },
  {
    index: "02",
    title: "Plan",
    description: "Define the technical approach and implementation strategy.",
  },
  {
    index: "03",
    title: "Build",
    description: "Develop the required frontend, backend, database and integrations.",
  },
  {
    index: "04",
    title: "Test",
    description: "Test functionality, edge cases and integration points.",
  },
  {
    index: "05",
    title: "Improve",
    description: "Optimize, troubleshoot and refine the solution.",
  },
  {
    index: "06",
    title: "Deliver",
    description: "Provide a clean, maintainable and production-ready implementation.",
  },
];

export const whyWorkWithMe: string[] = [
  "13+ years of real-world software development experience",
  "Full-stack understanding across frontend, backend, database and infrastructure",
  "Business-oriented approach to development, not just code output",
  "Comfortable working with existing, unfamiliar codebases",
  "Able to plan and execute independently",
  "Practical, pragmatic problem solving",
  "Long-term, maintainable development mindset",
  "Experience with SaaS and business-critical applications",
];
