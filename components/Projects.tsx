import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <SectionHeading index="03" title="projects" command="ls projects/ --sort=featured" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const Wrapper = project.href ? "a" : "div";
          const wrapperProps = project.href
            ? {
                href: project.href,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <Wrapper
              key={project.title}
              {...wrapperProps}
              className={`group flex flex-col rounded-lg border border-surface-border bg-surface p-5 transition-colors ${
                project.href ? "hover:border-accent-dim/60" : ""
              } ${project.featured ? "sm:col-span-2" : ""}`}
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-sm font-medium text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
                {project.href && (
                  <span className="font-mono text-xs text-muted group-hover:text-accent">
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
                    className="rounded border border-surface-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
