"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  LuUser,
  LuBriefcase,
  LuFolderGit2,
  LuCode,
  LuMessageSquare,
  LuGithub,
  LuLinkedin,
  LuCopy,
  LuCheck,
  LuSun,
  LuMoon,
  LuTerminal,
} from "react-icons/lu";
import { profile } from "@/lib/data";

export const OPEN_COMMAND_PALETTE_EVENT = "open-command-palette";

type Item = {
  id: string;
  label: string;
  hint: string;
  icon: React.ComponentType<{ size?: number }>;
  run: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme, setTheme } = useTheme();

  const close = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    setCopied(false);
  };

  const goTo = (hash: string) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  const items: Item[] = useMemo(
    () => [
      { id: "about", label: "go to about", hint: "#about", icon: LuUser, run: () => goTo("#about") },
      {
        id: "experience",
        label: "go to experience",
        hint: "#experience",
        icon: LuBriefcase,
        run: () => goTo("#experience"),
      },
      {
        id: "projects",
        label: "go to projects",
        hint: "#projects",
        icon: LuFolderGit2,
        run: () => goTo("#projects"),
      },
      { id: "skills", label: "go to skills", hint: "#skills", icon: LuCode, run: () => goTo("#skills") },
      {
        id: "contact",
        label: "go to contact",
        hint: "#contact",
        icon: LuMessageSquare,
        run: () => goTo("#contact"),
      },
      {
        id: "github",
        label: "open github",
        hint: profile.githubHandle,
        icon: LuGithub,
        run: () => window.open(profile.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "open linkedin",
        hint: profile.linkedinHandle,
        icon: LuLinkedin,
        run: () => window.open(profile.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        id: "email",
        label: "copy email",
        hint: profile.contactEmail,
        icon: copied ? LuCheck : LuCopy,
        run: () => {
          navigator.clipboard.writeText(profile.contactEmail);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        },
      },
      {
        id: "theme",
        label: resolvedTheme === "dark" ? "switch to light mode" : "switch to dark mode",
        hint: "toggle theme",
        icon: resolvedTheme === "dark" ? LuSun : LuMoon,
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
    ],
    [copied, resolvedTheme, setTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.label.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    if (activeIndex >= filtered.length) setActiveIndex(0);
  }, [filtered, activeIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "Escape") close();
    };
    const onOpenEvent = () => setOpen((o) => !o);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, onOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm sm:pt-32"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-md overflow-hidden rounded-lg border border-surface-border bg-surface shadow-[0_24px_60px_-16px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-surface-border px-4 py-3 font-mono text-sm">
          <LuTerminal size={14} className="shrink-0 text-accent" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) => (i - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
              } else if (e.key === "Enter") {
                e.preventDefault();
                const item = filtered[activeIndex];
                if (item) {
                  item.run();
                  if (item.id !== "theme" && item.id !== "email") close();
                }
              }
            }}
            placeholder="type a command..."
            className="w-full bg-transparent text-foreground placeholder:text-muted focus:outline-none"
          />
          <kbd className="shrink-0 rounded border border-surface-border px-1.5 py-0.5 text-[10px] text-muted">
            esc
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto py-1.5">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center font-mono text-xs text-muted">no matches</p>
          )}
          {filtered.map((item, i) => {
            const Icon = item.icon;
            const active = i === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  item.run();
                  if (item.id !== "theme" && item.id !== "email") close();
                }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                  active ? "bg-accent/10 text-accent" : "text-foreground/80"
                }`}
              >
                <Icon size={14} />
                <span className="flex-1">{item.label}</span>
                <span className="text-xs text-muted">{item.hint}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
