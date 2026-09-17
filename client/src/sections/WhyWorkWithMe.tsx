import { motion } from "framer-motion";
import { whyWorkWithMe } from "../data/experience";
import { SectionHeading } from "../components/SectionHeading";
import { Icon } from "../components/Icon";

const iconStyles = ["text-accent", "text-violet", "text-sky", "text-amber", "text-rose"];

export function WhyWorkWithMe() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="Experience you can rely on"
          align="center"
          variant="slide-left"
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {whyWorkWithMe.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (index % 8) * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-ink/10 p-4 transition-colors duration-200 hover:border-ink/20 dark:border-paper/10 dark:hover:border-paper/20"
            >
              <Icon name="arrow-right" className={`mt-0.5 size-4 shrink-0 ${iconStyles[index % iconStyles.length]}`} />
              <span className="text-sm leading-relaxed text-ink/75 dark:text-paper/75">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
