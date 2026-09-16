import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm dark:bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-lg overflow-hidden overflow-y-auto rounded-2xl border border-ink/10 bg-paper p-7 dark:border-paper/10 dark:bg-ink-soft"
          >
            <div className="top-gradient-bar absolute inset-x-0 top-0 h-1" aria-hidden="true" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full border border-ink/10 text-ink/60 hover:text-accent dark:border-paper/15 dark:text-paper/60"
            >
              <Icon name="x" className="size-4" />
            </button>

            <h2 id="project-modal-title" className="pr-10 text-xl font-semibold text-ink dark:text-paper">
              {project.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-paper/70">{project.description}</p>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-paper/50">
              My Involvement
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">{project.involvement}</p>

            {project.note && (
              <p className="mt-4 rounded-lg border border-ink/10 p-3 text-xs leading-relaxed text-ink/60 dark:border-paper/10 dark:text-paper/60">
                {project.note}
              </p>
            )}

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-paper/50">
              Technologies
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/10 px-2.5 py-1 text-xs text-ink/60 dark:border-paper/10 dark:text-paper/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
