import { motion } from "framer-motion";
import type { Project } from "../data/projects";

type ProjectCardProps = Project & {
  index?: number;
  onOpen: () => void;
};

export function ProjectCard({ name, description, technologies, index = 0, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className="group flex h-full flex-col rounded-2xl border border-ink/10 p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 dark:border-paper/10"
    >
      <div
        className="mb-5 h-24 rounded-xl border border-ink/10 bg-ink/[0.02] bg-grid text-ink/10 dark:border-paper/10 dark:bg-paper/[0.03] dark:text-paper/10"
        aria-hidden="true"
      />
      <h3 className="text-lg font-semibold text-ink dark:text-paper">{name}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-ink/10 px-2.5 py-1 text-xs text-ink/60 dark:border-paper/10 dark:text-paper/60"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="rounded-full border border-ink/10 px-2.5 py-1 text-xs text-ink/60 dark:border-paper/10 dark:text-paper/60">
            +{technologies.length - 4}
          </span>
        )}
      </div>
      <span className="mt-5 text-sm font-medium text-accent">View details →</span>
    </motion.button>
  );
}
