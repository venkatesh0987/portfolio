import { motion } from "framer-motion";
import type { Stat } from "../data/experience";

export function StatCard({ value, label, index = 0 }: Stat & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="rounded-2xl border border-ink/10 bg-ink/[0.02] p-6 dark:border-paper/10 dark:bg-paper/[0.03]"
    >
      <p className="font-mono text-2xl font-semibold text-ink sm:text-3xl dark:text-paper">{value}</p>
      <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">{label}</p>
    </motion.div>
  );
}
