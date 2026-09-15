import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow="About Me" title="A senior engineer focused on business-critical software" />

        <div className="space-y-5">
          {profile.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-ink/70 dark:text-paper/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
