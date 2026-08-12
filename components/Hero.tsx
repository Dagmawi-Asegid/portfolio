import Image from "next/image";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <Reveal delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              available for internships
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-3 font-mono text-sm text-accent">
              <span className="text-muted">$</span> whoami
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 font-mono text-base text-muted sm:text-lg">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-sm">
              <a
                href={`mailto:${profile.contactEmail}`}
                className="rounded-md border border-accent-dim/60 bg-accent/10 px-4 py-2 text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20 hover:shadow-[0_8px_20px_-8px_var(--glow-primary)]"
              >
                say hi &rarr;
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
              >
                github/{profile.githubHandle}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
              >
                linkedin
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative shrink-0">
          <div className="relative h-52 w-52 overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-[0_20px_60px_-20px_var(--glow-primary)] sm:h-64 sm:w-64">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-accent-dim/50 bg-background px-3 py-1 font-mono text-[10px] whitespace-nowrap text-accent shadow-lg">
            CS &times; Math
          </div>
        </Reveal>
      </div>
    </section>
  );
}
