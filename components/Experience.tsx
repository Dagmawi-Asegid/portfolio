import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading index="02" title="experience" command="ls -la experience/" />
      </Reveal>

      <div className="relative space-y-10 border-l border-surface-border pl-8">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 -left-px h-full w-px bg-gradient-to-b from-accent/50 via-accent-dim/20 to-transparent"
        />
        {experience.map((job, i) => (
          <Reveal key={`${job.org}-${job.role}`} delay={i * 0.08}>
            <div className="group relative">
              <span className="absolute top-1.5 -left-[calc(2rem+4.5px)] flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-accent/50 opacity-0 group-hover:opacity-100" />
                <span className="relative h-2.5 w-2.5 rounded-full border-2 border-background bg-accent-dim shadow-[0_0_8px_var(--accent)] transition-shadow group-hover:shadow-[0_0_14px_var(--accent)]" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
                  {job.role}
                </h3>
                <span className="font-mono text-xs whitespace-nowrap text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-accent/90">
                {job.org} <span className="text-muted">&middot; {job.location}</span>
              </p>
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/70"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
