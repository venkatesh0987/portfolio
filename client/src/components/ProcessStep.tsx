import { motion } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "../data/experience";

const badgeStyles = [
  "bg-accent/10 text-accent",
  "bg-violet/10 text-violet",
  "bg-sky/10 text-sky",
  "bg-amber/10 text-amber",
  "bg-rose/10 text-rose",
];

export function ProcessStep({ index, title, description, order = 0 }: ProcessStepType & { order?: number }) {
  const badge = badgeStyles[order % badgeStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (order % 6) * 0.06 }}
      className="flex gap-4 border-t border-ink/10 py-6 first:border-t-0 dark:border-paper/10"
    >
      <span className={`flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs ${badge}`}>
        {index}
      </span>
      <div>
        <h3 className="text-base font-semibold text-ink dark:text-paper">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{description}</p>
      </div>
    </motion.div>
  );
}
