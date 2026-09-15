import { processSteps } from "../data/experience";
import { SectionHeading } from "../components/SectionHeading";
import { ProcessStep } from "../components/ProcessStep";

export function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="How I Work" title="A structured, predictable process" />

        <div>
          {processSteps.map((step, index) => (
            <ProcessStep key={step.index} {...step} order={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
