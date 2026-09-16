import { motion } from "framer-motion";
import type { Project } from "../data/projects";

type ProjectCardProps = Project & {
  index?: number;
  onOpen: () => void;
};

const coverStyles = [
  "from-accent/25 via-accent/5 to-transparent text-accent/25",
  "from-violet/25 via-violet/5 to-transparent text-violet/25",
  "from-sky/25 via-sky/5 to-transparent text-sky/25",
  "from-amber/25 via-amber/5 to-transparent text-amber/25",
  "from-rose/25 via-rose/5 to-transparent text-rose/25",
];

const borderStyles = [
  "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/15",
  "hover:border-violet/50 hover:shadow-lg hover:shadow-violet/15",
  "hover:border-sky/50 hover:shadow-lg hover:shadow-sky/15",
  "hover:border-amber/50 hover:shadow-lg hover:shadow-amber/15",
  "hover:border-rose/50 hover:shadow-lg hover:shadow-rose/15",
];

const linkStyles = ["text-accent", "text-violet", "text-sky", "text-amber", "text-rose"];

export function ProjectCard({ name, description, technologies, index = 0, onOpen }: ProjectCardProps) {
  const cover = coverStyles[index % coverStyles.length];
  const border = borderStyles[index % borderStyles.length];
  const link = linkStyles[index % linkStyles.length];

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className={`group flex h-full flex-col rounded-2xl border border-ink/10 p-6 text-left transition-all duration-200 hover:-translate-y-1 dark:border-paper/10 ${border}`}
    >
      <div
        className={`mb-5 h-24 rounded-xl border border-ink/10 bg-gradient-to-br bg-grid dark:border-paper/10 ${cover}`}
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
      <span className={`mt-5 text-sm font-medium ${link}`}>View details →</span>
    </motion.button>
  );
}
