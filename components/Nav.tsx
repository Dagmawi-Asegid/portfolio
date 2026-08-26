"use client";

import { useEffect, useState } from "react";
import { LuMenu, LuX, LuCommand } from "react-icons/lu";
import ThemeToggle from "./ThemeToggle";
import { OPEN_COMMAND_PALETTE_EVENT } from "./CommandPalette";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-foreground transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>dagmawi
        </a>
        <ul className="hidden items-center gap-5 font-mono text-xs sm:flex sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-accent ${
                  active === link.href ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))}
            className="hidden items-center gap-1.5 rounded-md border border-surface-border bg-surface px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent-dim/50 hover:text-foreground sm:flex"
            aria-label="Open command palette"
          >
            <LuCommand size={12} />
            <span>K</span>
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-surface-border bg-surface text-muted transition-colors hover:border-accent-dim/50 hover:text-foreground sm:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <LuX size={16} /> : <LuMenu size={16} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-surface-border/80 px-6 py-3 font-mono text-sm sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-md px-2 py-2 transition-colors hover:bg-surface hover:text-accent ${
                  active === link.href ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT));
              }}
              className="flex w-full items-center gap-1.5 rounded-md px-2 py-2 text-muted transition-colors hover:bg-surface hover:text-accent"
            >
              <LuCommand size={12} />
              command palette
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
