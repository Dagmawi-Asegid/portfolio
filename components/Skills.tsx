import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <SectionHeading index="04" title="skills" command="cat skills.json" />

      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="mb-3 font-mono text-xs tracking-wider text-muted uppercase">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent-dim/50 hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
