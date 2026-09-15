import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Business applications I have contributed to"
          description="Selected work from a SaaS and IT services environment, spanning helpdesk, backup and business-process systems."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              {...project}
              index={index}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
