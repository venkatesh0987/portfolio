import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl dark:text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink/65 dark:text-paper/65">{description}</p>
      )}
    </motion.div>
  );
}
