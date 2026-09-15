import { motion } from "framer-motion";
import { Icon } from "./Icon";
import type { SkillCategory } from "../data/skills";

export function SkillCard({ category, icon, skills, index = 0 }: SkillCategory & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (index % 5) * 0.06 }}
      className="rounded-2xl border border-ink/10 p-6 dark:border-paper/10"
    >
      <div className="mb-4 flex items-center gap-3">
        <Icon name={icon} className="size-5 text-accent" />
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
