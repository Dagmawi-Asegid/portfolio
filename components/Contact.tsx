"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSend = name.trim() && email.trim() && message.trim();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend) return;

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n---\nFrom: ${name} (${email})`;
    window.location.href = `mailto:${profile.contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <SectionHeading index="05" title="let's talk" command="./send_message.sh" />

      <div className="grid gap-8 rounded-lg border border-surface-border bg-surface p-8 sm:grid-cols-2 sm:p-10">
        <div>
          <p className="max-w-sm text-base leading-relaxed text-foreground/80">
            I&apos;m looking for a Summer 2027 Software Engineering internship.
            If something I&apos;ve built looks interesting, or you just want to
            talk shop, my inbox is open.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
            <a
              href={`mailto:${profile.contactEmail}`}
              className="rounded-md border border-accent-dim/60 bg-accent/10 px-4 py-2 text-accent transition-colors hover:bg-accent/20"
            >
              {profile.contactEmail}
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-md border border-surface-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent-dim/60 focus:outline-none"
          />
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border border-surface-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent-dim/60 focus:outline-none"
          />
          <textarea
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="resize-none rounded-md border border-surface-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent-dim/60 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!canSend}
            className="mt-1 self-start rounded-md border border-accent-dim/60 bg-accent/10 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            send message &rarr;
          </button>
          <p className="font-mono text-[11px] text-muted">
            opens your email client, addressed to me
          </p>
        </form>
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
