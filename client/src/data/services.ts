export type Service = {
  title: string;
  description: string;
  icon: "layers" | "cloud" | "code" | "atom" | "network" | "database" | "refresh-cw" | "bug" | "plug" | "history" | "workflow" | "message-square" | "wrench";
};

export const whatIDo: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end development across frontend, backend and database layers.",
    icon: "layers",
  },
  {
    title: "SaaS Application Development",
    description: "Building and extending multi-tenant, business-critical SaaS products.",
    icon: "cloud",
  },
  {
    title: "PHP Development",
    description: "Server-side application logic, APIs and business workflows in PHP.",
    icon: "code",
  },
  {
    title: "React Development",
    description: "Modern, maintainable user interfaces built with React and TypeScript.",
    icon: "atom",
  },
  {
    title: "Node.js & API Development",
    description: "Building and integrating REST APIs with Node.js and Express.",
    icon: "network",
  },
  {
    title: "Database Development",
    description: "Schema design, queries and data structures using MySQL.",
    icon: "database",
  },
  {
    title: "Existing Application Enhancement",
    description: "Adding features and improvements to systems already in production.",
    icon: "refresh-cw",
  },
  {
    title: "Bug Fixing & Troubleshooting",
    description: "Diagnosing and resolving issues across the stack, quickly and safely.",
    icon: "bug",
  },
  {
    title: "API / Third-Party Integration",
    description: "Connecting applications with external services and APIs.",
    icon: "plug",
  },
  {
    title: "Legacy Application Modernization",
    description: "Improving and modernizing older codebases without disrupting the business.",
    icon: "history",
  },
  {
    title: "Odoo Development & Integration",
    description: "Customization and integration work on the Odoo / Odoo.sh platform.",
    icon: "workflow",
  },
  {
    title: "Technical Consulting",
    description: "Guidance on architecture, technical approach and implementation strategy.",
    icon: "message-square",
  },
  {
    title: "Application Maintenance",
    description: "Ongoing support, monitoring and upkeep of live applications.",
    icon: "wrench",
  },
];

export const freelanceServices: string[] = [
  "Custom Web Application Development",
  "PHP Development",
  "React Development",
  "Node.js & API Development",
  "Database Development",
  "Existing Application Enhancement",
  "Bug Fixing / Troubleshooting",
  "SaaS Application Development",
  "Legacy Application Modernization",
  "API / Third-Party Integration",
  "Odoo Development / Integration",
  "Technical Consulting",
  "Application Maintenance",
];
