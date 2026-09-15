import { motion } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "../data/experience";

export function ProcessStep({ index, title, description, order = 0 }: ProcessStepType & { order?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (order % 6) * 0.06 }}
      className="flex gap-4 border-t border-ink/10 py-6 first:border-t-0 dark:border-paper/10"
    >
      <span className="font-mono text-sm text-accent">{index}</span>
      <div>
        <h3 className="text-base font-semibold text-ink dark:text-paper">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{description}</p>
      </div>
    </motion.div>
  );
}
