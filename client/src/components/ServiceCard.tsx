import { motion } from "framer-motion";
import { Icon } from "./Icon";
import type { Service } from "../data/services";

const tileStyles = [
  "bg-accent/10 text-accent group-hover:bg-accent/15",
  "bg-violet/10 text-violet group-hover:bg-violet/15",
  "bg-sky/10 text-sky group-hover:bg-sky/15",
  "bg-amber/10 text-amber group-hover:bg-amber/15",
  "bg-rose/10 text-rose group-hover:bg-rose/15",
];

const borderStyles = [
  "hover:border-accent/50",
  "hover:border-violet/50",
  "hover:border-sky/50",
  "hover:border-amber/50",
  "hover:border-rose/50",
];

export function ServiceCard({ title, description, icon, index = 0 }: Service & { index?: number }) {
  const tile = tileStyles[index % tileStyles.length];
  const border = borderStyles[index % borderStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (index % 6) * 0.06 }}
      className={`group rounded-2xl border border-ink/10 p-6 transition-colors duration-200 dark:border-paper/10 ${border}`}
    >
      <div className={`mb-4 flex size-10 items-center justify-center rounded-lg transition-colors duration-200 ${tile}`}>
        <Icon name={icon} className="size-5" />
      </div>
      <h3 className="text-base font-semibold text-ink dark:text-paper">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{description}</p>
    </motion.div>
  );
}
