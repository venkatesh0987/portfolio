import type { ComponentType, SVGProps } from "react";
import {
  SiAngular,
  SiAxios,
  SiCss,
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

// Brand icons where one exists; generic icons for protocols/techniques/tools without one.
const skillIcons: Record<string, IconComponent> = {
  angularjs: SiAngular,
  css: SiCss,
  html: SiHtml5,
  javascript: SiJavascript,
  jquery: SiJquery,
  react: SiReact,
  responsive: Smartphone,
  "tailwind css": SiTailwindcss,
  typescript: SiTypescript,

  ajax: RefreshCw,
  axios: SiAxios,
  express: SiExpress,
  "node.js": SiNodedotjs,
  php: SiPhp,
  "rest api": Network,
  "web socket": Radio,

  mysql: SiMysql,
  partitioning: LayoutGrid,
  replication: Copy,
  snowflake: SiSnowflake,

  centos: SiCentos,
  linux: SiLinux,
  nginx: SiNginx,

  "azure portal": TbBrandAzure,
  "claude code": SiClaude,
  git: SiGit,
  jenkins: SiJenkins,
  odoo: SiOdoo,
  "odoo.sh": SiOdoo,
  putty: Terminal,
  render: SiRender,
  resend: SiResend,
  vercel: SiVercel,
  "visual studio": DiVisualstudio,
  windsurf: SiWindsurf,
  winscp: FolderSync,
};

function lookupKey(skill: string) {
  const lower = skill.toLowerCase();
  if (lower.startsWith("snowflake")) return "snowflake";
  if (lower.startsWith("claude code")) return "claude code";
  return lower;
}

export function SkillIcon({ skill, className }: { skill: string; className?: string }) {
  const Component = skillIcons[lookupKey(skill)];
  if (!Component) return null;
  return <Component className={className} aria-hidden="true" />;
}
