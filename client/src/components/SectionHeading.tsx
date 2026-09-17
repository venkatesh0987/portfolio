import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "fade-up" | "slide-left" | "pop";
};

const headingVariants: Record<NonNullable<SectionHeadingProps["variant"]>, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "fade-up",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={headingVariants[variant]}
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
