import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Button } from "../components/Button";

export function Availability() {
  return (
    <section id="availability" className="py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ink px-8 py-14 text-paper sm:px-14 dark:border-paper/15 dark:bg-white/[0.04]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="blob absolute -top-16 -right-10 size-64 bg-violet opacity-40" />
            <div className="blob absolute -bottom-20 left-10 size-56 bg-accent opacity-30" />
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {profile.availability.heading}
          </p>

          <div className="mt-5 max-w-2xl space-y-4">
            {profile.availability.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-paper/75">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-9">
            <h3 className="text-2xl font-semibold text-paper sm:text-3xl">
              {profile.availability.ctaHeading}
            </h3>
            <p className="mt-2 text-paper/70">{profile.availability.ctaSubheading}</p>
            <Button href="#contact" variant="secondary" showArrow className="mt-6 !border-paper/25 !text-paper hover:!border-paper/50">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
