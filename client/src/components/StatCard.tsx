import { motion } from "framer-motion";
import type { Stat } from "../data/experience";

const dotStyles = ["bg-accent", "bg-violet", "bg-sky", "bg-amber"];
const valueStyles = ["text-accent", "text-violet", "text-sky", "text-amber"];
const hoverStyles = [
  "hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10",
  "hover:border-violet/40 hover:shadow-lg hover:shadow-violet/10",
  "hover:border-sky/40 hover:shadow-lg hover:shadow-sky/10",
  "hover:border-amber/40 hover:shadow-lg hover:shadow-amber/10",
];

export function StatCard({ value, label, index = 0 }: Stat & { index?: number }) {
  const dot = dotStyles[index % dotStyles.length];
  const valueColor = valueStyles[index % valueStyles.length];
  const hover = hoverStyles[index % hoverStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className={`rounded-2xl border border-ink/10 bg-ink/[0.02] p-6 transition-all duration-200 hover:-translate-y-0.5 dark:border-paper/10 dark:bg-paper/[0.03] ${hover}`}
    >
      <span className={`mb-3 block size-2 rounded-full ${dot}`} aria-hidden="true" />
      <p className={`font-mono text-2xl font-semibold sm:text-3xl ${valueColor}`}>{value}</p>
      <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">{label}</p>
    </motion.div>
  );
}
