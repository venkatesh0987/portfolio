export type SkillCategory = {
  category: string;
  icon: "layout" | "server" | "database" | "cpu" | "wrench";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      "AngularJS",
      "CSS",
      "HTML",
      "JavaScript",
      "jQuery",
      "React",
      "Responsive",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: ["Ajax", "Axios", "Express", "Node.js", "PHP", "REST API", "Web Socket"],
  },
  {
    category: "Database",
    icon: "database",
    skills: ["MySQL", "Partitioning", "Replication", "SnowFlake - Beginner"],
  },
  {
    category: "Infrastructure",
    icon: "cpu",
    skills: ["CentOS", "Linux", "Nginx"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    skills: [
      "Azure Portal",
      "Claude Code - Sonnet",
      "Git",
      "Jenkins",
      "Odoo",
      "Odoo.sh",
      "Putty",
      "Render",
      "Resend",
      "Vercel",
      "Visual Studio",
      "Windsurf",
      "WinSCP",
    ],
  },
];
