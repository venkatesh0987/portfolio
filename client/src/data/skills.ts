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
      "React",
      "JavaScript",
      "TypeScript",
      "AngularJS",
      "jQuery",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive",
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      "PHP",
      "Node.js",
      "Ajax",
      "Axios",
      "Express",
      "REST API",
      "Web Socket",
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: ["MySQL", "Replication", "Partitioning", "SnowFlake - Beginner"],
  },
  {
    category: "Infrastructure",
    icon: "cpu",
    skills: ["Linux", "CentOS", "Nginx"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    skills: [
      "Git",
      "Odoo",
      "Odoo.sh",
      "Visual Studio",
      "Windsurf",
      "Claude Code - Sonnet",
      "Azure Portal",
      "Vercel",
      "Render",
      "Resend",
    ],
  },
];
