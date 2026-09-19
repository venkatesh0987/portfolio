import type { ComponentType, SVGProps } from "react";
import {
  SiAngular,
  SiAxios,
  SiCss,
  SiElasticsearch,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJquery,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiOdoo,
  SiPhp,
  SiReact,
  SiRedis,
  SiRender,
  SiResend,
  SiSnowflake,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWindsurf,
  SiClaude,
  SiCentos,
  SiLinux,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandAzure } from "react-icons/tb";
import { Network, Radio, RefreshCw, Copy, LayoutGrid, Smartphone, Terminal, FolderSync } from "lucide-react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type SkillIconEntry = {
  Icon: IconComponent;
  /** Official brand hex color. Omitted for near-black/near-white marks and generic
   * (non-brand) icons, so those inherit the pill's normal theme-aware text color
   * instead of going invisible in dark mode. */
  color?: string;
};

const skillIcons: Record<string, SkillIconEntry> = {
  // Frontend
  angularjs: { Icon: SiAngular }, // brand mark is near-black — keep theme color
  css: { Icon: SiCss, color: "#1572B6" },
  html: { Icon: SiHtml5, color: "#E34F26" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  jquery: { Icon: SiJquery, color: "#0769AD" },
  react: { Icon: SiReact, color: "#61DAFB" },
  responsive: { Icon: Smartphone, color: "#0ea5e9" },
  "tailwind css": { Icon: SiTailwindcss, color: "#06B6D4" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },

  // Backend
  ajax: { Icon: RefreshCw, color: "#f59e0b" },
  axios: { Icon: SiAxios, color: "#5A29E4" },
  express: { Icon: SiExpress }, // near-black brand mark
  "node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  php: { Icon: SiPhp, color: "#777BB4" },
  "rest api": { Icon: Network, color: "#8b5cf6" },
  "web socket": { Icon: Radio, color: "#f43f5e" },

  // Database
  mysql: { Icon: SiMysql, color: "#4479A1" },
  "nosql-elasticsearch": { Icon: SiElasticsearch, color: "#005571" },
  partitioning: { Icon: LayoutGrid, color: "#f59e0b" },
  redis: { Icon: SiRedis, color: "#FF4438" },
  replication: { Icon: Copy, color: "#2dd4bf" },
  snowflake: { Icon: SiSnowflake, color: "#29B5E8" },

  // Infrastructure
  centos: { Icon: SiCentos, color: "#262577" },
  linux: { Icon: SiLinux, color: "#FCC624" },
  nginx: { Icon: SiNginx, color: "#009639" },

  // Tools & Platforms
  "azure portal": { Icon: TbBrandAzure, color: "#0089D6" },
  "claude code": { Icon: SiClaude, color: "#D97757" },
  git: { Icon: SiGit, color: "#F03C2E" },
  jenkins: { Icon: SiJenkins, color: "#D24939" },
  odoo: { Icon: SiOdoo, color: "#714B67" },
  "odoo.sh": { Icon: SiOdoo, color: "#714B67" },
  putty: { Icon: Terminal, color: "#2dd4bf" },
  render: { Icon: SiRender }, // near-black brand mark
  resend: { Icon: SiResend }, // near-black brand mark
  vercel: { Icon: SiVercel }, // near-black brand mark
  "visual studio": { Icon: DiVisualstudio, color: "#5C2D91" },
  windsurf: { Icon: SiWindsurf }, // near-black brand mark
  winscp: { Icon: FolderSync, color: "#0ea5e9" },
};

function lookupKey(skill: string) {
  const lower = skill.toLowerCase();
  if (lower.startsWith("snowflake")) return "snowflake";
  if (lower.startsWith("claude code")) return "claude code";
  return lower;
}

export function SkillIcon({ skill, className }: { skill: string; className?: string }) {
  const entry = skillIcons[lookupKey(skill)];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon className={className} style={color ? { color } : undefined} aria-hidden="true" />;
}
