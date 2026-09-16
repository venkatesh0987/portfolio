import { motion } from "framer-motion";
import { Icon } from "./Icon";
import type { SkillCategory } from "../data/skills";

const tileStyles = [
  "bg-accent/10 text-accent",
  "bg-violet/10 text-violet",
  "bg-sky/10 text-sky",
  "bg-amber/10 text-amber",
  "bg-rose/10 text-rose",
];

const hoverStyles = [
  "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/15",
  "hover:border-violet/50 hover:shadow-lg hover:shadow-violet/15",
  "hover:border-sky/50 hover:shadow-lg hover:shadow-sky/15",
  "hover:border-amber/50 hover:shadow-lg hover:shadow-amber/15",
  "hover:border-rose/50 hover:shadow-lg hover:shadow-rose/15",
];

export function SkillCard({ category, icon, skills, index = 0 }: SkillCategory & { index?: number }) {
  const tile = tileStyles[index % tileStyles.length];
  const hover = hoverStyles[index % hoverStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (index % 5) * 0.06 }}
      className={`rounded-2xl border border-ink/10 p-6 transition-all duration-200 hover:-translate-y-0.5 dark:border-paper/10 ${hover}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex size-9 items-center justify-center rounded-lg ${tile}`}>
          <Icon name={icon} className="size-5" />
        </div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-ink dark:text-paper">{category}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/70 dark:border-paper/10 dark:text-paper/70"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
