import { skills } from "@/lib/data";
import { skillIcons } from "@/lib/skillIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading index="04" title="skills" command="cat skills.json" />
      </Reveal>

      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 0.1}>
            <div>
              <p className="mb-3 font-mono text-xs tracking-wider text-muted uppercase">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const iconEntry = skillIcons[item];
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-surface-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-dim/50 hover:text-foreground hover:shadow-[0_6px_16px_-8px_var(--glow-primary)]"
                    >
                      {iconEntry && (
                        <iconEntry.Icon size={14} color={iconEntry.color} />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
