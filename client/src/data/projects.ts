export type Project = {
  name: string;
  description: string;
  involvement: string;
  technologies: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    name: "User-Friendly Helpdesk Platform",
    description:
      "A SaaS helpdesk platform designed to manage support tickets, users, groups, workflows and customer support operations.",
    involvement:
      "Involved across the technical stack, including application architecture, business logic, frontend, backend, database, access control, workflows, integrations, troubleshooting, maintenance and enhancements.",
    technologies: ["PHP", "JavaScript", "AngularJS", "jQuery", "MySQL", "HTML", "CSS"],
  },
  {
    name: "Microsoft 365 / O365 Backup System",
    description: "A SaaS solution for protecting and managing business-critical Microsoft 365 data.",
    involvement:
      "Contributed across application architecture, business logic, frontend, backend, database, integrations, troubleshooting, maintenance and enhancements.",
    technologies: ["PHP", "JavaScript", "React", "Node.js", "MySQL", "Linux", "Nginx"],
    note: "CORSO — open-source tool for secure and efficient backup of business-critical data. Used as part of this project.",
  },
  {
    name: "Change Control Management",
    description:
      "A business application for managing change requests, workflows, approvals, access control and centralized business data.",
    involvement:
      "Contributed across architecture, business logic, frontend, backend, database, access control, workflows, feature development, troubleshooting and maintenance.",
    technologies: ["PHP", "JavaScript", "AngularJS", "MySQL", "HTML", "CSS"],
  },
];
