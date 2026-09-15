import { whatIDo } from "../data/services";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="bg-ink/[0.015] py-20 sm:py-28 dark:bg-paper/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I Do"
          title="Full-stack capability across the application lifecycle"
          description="From architecture to deployment, I work across the layers required to build and maintain business applications."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatIDo.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
