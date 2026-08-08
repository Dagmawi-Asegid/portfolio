import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <SectionHeading index="02" title="experience" command="ls -la experience/" />

      <div className="relative space-y-10 border-l border-surface-border pl-8">
        {experience.map((job) => (
          <div key={`${job.org}-${job.role}`} className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+4.5px)] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent-dim" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-medium text-foreground">{job.role}</h3>
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
        ))}
      </div>
    </section>
  );
}
