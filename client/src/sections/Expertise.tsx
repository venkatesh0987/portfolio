import { skillCategories } from "../data/skills";
import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";

export function Expertise() {
  return (
    <section id="expertise" className="bg-ink/[0.015] py-20 sm:py-28 dark:bg-paper/[0.02]">
      <div className="container-page">
        <SectionHeading eyebrow="Technical Expertise" title="Technologies I work with, grouped by layer" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.category} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
