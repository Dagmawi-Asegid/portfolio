import { profile, education, honors } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading index="01" title="about" command="cat about.md" />
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05} className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
          <>
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </>
        </Reveal>

        <Reveal delay={0.15} className="space-y-6">
          <>
            <div className="rounded-lg border border-surface-border bg-surface p-5 transition-colors hover:border-accent-dim/40">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                education
              </p>
              <p className="text-sm font-medium text-foreground">{education.school}</p>
              <p className="text-sm text-foreground/70">{education.degree}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.period}
              </p>
            </div>

            <div className="rounded-lg border border-surface-border bg-surface p-5 transition-colors hover:border-accent-dim/40">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                honors
              </p>
              {honors.map((h) => (
                <div key={h.title}>
                  <p className="text-sm font-medium text-foreground">{h.title}</p>
                  <p className="font-mono text-xs text-muted">
                    {h.org} &middot; {h.date}
                  </p>
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
