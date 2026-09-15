import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Button } from "../components/Button";

const flow = ["13+ YEARS", "ARCHITECTURE", "CODE", "DATA", "PRODUCT"];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid text-ink/[0.035] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] dark:text-paper/[0.05]"
        aria-hidden="true"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-ink/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-ink/60 dark:border-paper/15 dark:text-paper/60">
            {profile.hero.eyebrow}
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] dark:text-paper">
            {profile.hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg dark:text-paper/65">
            {profile.hero.description}
          </p>

          <p className="mt-5 font-mono text-sm text-ink/50 dark:text-paper/50">{profile.hero.techLine}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={profile.hero.primaryCta.href} variant="primary">
              {profile.hero.primaryCta.label}
            </Button>
            <Button href={profile.hero.secondaryCta.href} variant="secondary">
              {profile.hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mx-auto flex w-full max-w-xs flex-col items-stretch gap-2"
          aria-hidden="true"
        >
          {flow.map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-full rounded-xl border border-ink/10 bg-ink/[0.02] px-5 py-3 text-center font-mono text-xs tracking-[0.1em] text-ink/70 dark:border-paper/10 dark:bg-paper/[0.03] dark:text-paper/70">
                {label}
              </div>
              {index < flow.length - 1 && <div className="h-5 w-px bg-ink/15 dark:bg-paper/15" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
