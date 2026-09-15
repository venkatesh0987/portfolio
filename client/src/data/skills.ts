export type SkillCategory = {
  category: string;
  icon: "layout" | "server" | "database" | "cpu" | "wrench";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "layout",
    skills: ["React", "JavaScript", "TypeScript", "AngularJS", "jQuery", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    skills: ["PHP", "Node.js"],
  },
  {
    category: "Database",
    icon: "database",
    skills: ["MySQL"],
  },
  {
    category: "Infrastructure",
    icon: "cpu",
    skills: ["Linux", "CentOS", "Nginx"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    skills: ["Git", "Odoo", "Odoo.sh"],
  },
];
