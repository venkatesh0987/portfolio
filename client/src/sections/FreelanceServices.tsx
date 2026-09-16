import { motion } from "framer-motion";
import { freelanceServices } from "../data/services";
import { SectionHeading } from "../components/SectionHeading";
import { Icon } from "../components/Icon";

const iconStyles = ["text-accent", "text-violet", "text-sky", "text-amber", "text-rose"];

export function FreelanceServices() {
  return (
    <section id="services" className="bg-amber/[0.04] py-20 sm:py-28 dark:bg-amber/[0.06]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Freelance Services"
          title="Services available for independent engagements"
          description="These services are available as freelance, project-based or ongoing work."
        />

        <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {freelanceServices.map((service, index) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: (index % 8) * 0.05 }}
              className="flex items-center gap-3 border-b border-ink/10 pb-4 dark:border-paper/10"
            >
              <Icon name="arrow-right" className={`size-4 shrink-0 ${iconStyles[index % iconStyles.length]}`} />
              <span className="text-sm text-ink/75 dark:text-paper/75">{service}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
