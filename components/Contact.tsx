import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <SectionHeading index="05" title="contact" command="./send_message.sh" />

      <div className="rounded-lg border border-surface-border bg-surface p-8 sm:p-10">
        <p className="max-w-lg text-base leading-relaxed text-foreground/80">
          I&apos;m looking for a Summer 2027 Software Engineering internship.
          If something I&apos;ve built looks interesting, or you just want to
          talk shop, my inbox is open.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-accent-dim/60 bg-accent/10 px-4 py-2 text-accent transition-colors hover:bg-accent/20"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-surface-border px-4 py-2 text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            github
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-surface-border px-4 py-2 text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            linkedin
          </a>
        </div>
      </div>

      <footer className="mt-12 flex flex-col items-center gap-1 pb-4 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <span>
          &copy; {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
