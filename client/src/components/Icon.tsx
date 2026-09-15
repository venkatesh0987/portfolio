import type { ComponentType, SVGProps } from "react";
import {
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  Layers,
  Cloud,
  Code,
  Atom,
  Network,
  RefreshCw,
  Bug,
  Plug,
  History,
  Workflow,
  MessageSquare,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// lucide-react no longer ships brand/logo icons — minimal inline SVGs cover those.
const Github: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.75 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.53-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.74.8 1.19 1.82 1.19 3.08 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const Linkedin: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const icons = {
  layout: Layout,
  server: Server,
  database: Database,
  cpu: Cpu,
  wrench: Wrench,
  layers: Layers,
  cloud: Cloud,
  code: Code,
  atom: Atom,
  network: Network,
  "refresh-cw": RefreshCw,
  bug: Bug,
  plug: Plug,
  history: History,
  workflow: Workflow,
  "message-square": MessageSquare,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  menu: Menu,
  x: X,
  sun: Sun,
  moon: Moon,
  "arrow-right": ArrowRight,
} satisfies Record<string, IconComponent>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const Component = icons[name];
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
