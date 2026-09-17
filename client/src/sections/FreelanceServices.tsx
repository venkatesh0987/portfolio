import { motion } from "framer-motion";
import { freelanceServices } from "../data/services";
import { SectionHeading } from "../components/SectionHeading";
import { Icon } from "../components/Icon";

const iconStyles = ["text-accent", "text-violet", "text-sky", "text-amber", "text-rose"];
const hoverStyles = [
  "hover:border-accent/50 hover:bg-accent/5",
  "hover:border-violet/50 hover:bg-violet/5",
  "hover:border-sky/50 hover:bg-sky/5",
  "hover:border-amber/50 hover:bg-amber/5",
  "hover:border-rose/50 hover:bg-rose/5",
];

export function FreelanceServices() {
  return (
    <section id="services" className="bg-amber/[0.04] py-20 sm:py-28 dark:bg-amber/[0.06]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Freelance Services"
          title="Services available for independent engagements"
          description="These services are available as freelance, project-based or ongoing work."
          variant="pop"
        />

        <ul className="mt-12 grid items-start gap-x-8 gap-y-4 sm:grid-cols-2">
          {freelanceServices.map((service, index) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "backOut", delay: (index % 8) * 0.05 }}
              className={`group flex items-start gap-3 rounded-lg border-b border-ink/10 -mx-3 px-3 pb-4 transition-all duration-200 hover:translate-x-1 hover:pt-4 dark:border-paper/10 ${hoverStyles[index % hoverStyles.length]}`}
            >
              <Icon
                name="arrow-right"
                className={`mt-0.5 size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${iconStyles[index % iconStyles.length]}`}
              />
              <span className="text-sm text-ink/75 transition-colors duration-200 group-hover:text-ink dark:text-paper/75 dark:group-hover:text-paper">
                {service}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
