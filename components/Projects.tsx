import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading index="03" title="projects" command="ls projects/ --sort=featured" />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => {
          const Wrapper = project.href ? "a" : "div";
          const wrapperProps = project.href
            ? {
                href: project.href,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <Reveal
              key={project.title}
              delay={(i % 2) * 0.1}
              className={project.featured ? "sm:col-span-2" : ""}
            >
              <Wrapper
                {...wrapperProps}
                className={`group flex h-full flex-col overflow-hidden rounded-lg border border-surface-border bg-surface transition-all duration-300 ${
                  project.href
                    ? "hover:-translate-y-1.5 hover:border-accent-dim/60 hover:shadow-[0_12px_32px_-12px_var(--glow-primary)]"
                    : ""
                }`}
              >
                {project.images && project.images.length > 0 && (
                  <div
                    className={`grid gap-px bg-surface-border ${
                      project.images.length > 1 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1"
                    }`}
                  >
                    {project.images.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-video overflow-hidden bg-background"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes={project.images!.length > 1 ? "(min-width: 640px) 25vw, 50vw" : "(min-width: 640px) 50vw, 100vw"}
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    {project.href && (
                      <span className="font-mono text-xs text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                        &#8599;
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-surface-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted transition-colors group-hover:border-accent-dim/40 group-hover:text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
